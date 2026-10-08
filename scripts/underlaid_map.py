"""Render the Underlaid map shown on /underlaid, in a light and a dark version.

Reads the published map data of https://github.com/JehanneDussert/underlaid
at run time (nothing is copied into this repository) and writes
public/img/underlaid-map-{light,dark}.{webp,png}, 1600 px wide,
plus an 800 px webp of each for phones.

    python -m venv .venv
    .venv/Scripts/pip install -r scripts/requirements.txt   # Windows
    .venv/bin/pip install -r scripts/requirements.txt       # macOS / Linux
    python scripts/underlaid_map.py                          # with the venv's python
"""
import io
import json
import math
import urllib.request
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.collections import LineCollection, PolyCollection
from PIL import Image

BASE = "https://raw.githubusercontent.com/JehanneDussert/underlaid/master/frontend/public/data"
OUT = Path(__file__).resolve().parent.parent / "public" / "img"

WIDTH_PX = 1600
DPI = 200
MARGIN = 0.03
KX = math.cos(math.radians(48.86))

# Underlaid palette, cumulative_vulnerability_score 0 → 4
PALETTE = ["#F8C9DF", "#EE6FAF", "#E3087E", "#B30768", "#7E0049"]
RIVER = "#7FB2E5"

THEMES = {
    "light": {"bg": "#FAFAF7", "missing": "#E6E6EC", "edge": "#FAFAF7", "paris": "#12131A"},
    "dark": {"bg": "#0B0C12", "missing": "#262938", "edge": "#0B0C12", "paris": "#FFFFFF"},
}


def fetch(name):
    with urllib.request.urlopen(f"{BASE}/{name}", timeout=60) as r:
        return json.load(r)


def project(ring):
    return [(lon * KX, lat) for lon, lat in ring]


def polygons(geom):
    if geom["type"] == "Polygon":
        return [geom["coordinates"]]
    if geom["type"] == "MultiPolygon":
        return geom["coordinates"]
    return []


def lines(geom):
    if geom["type"] == "LineString":
        return [geom["coordinates"]]
    if geom["type"] == "MultiLineString":
        return geom["coordinates"]
    return []


def color(score, missing):
    if score is None:
        return missing
    return PALETTE[max(0, min(4, int(round(score))))]


def render(iris, layers, theme):
    t = THEMES[theme]
    rings, fills = [], []
    for f in iris["features"]:
        c = color(f["properties"].get("cumulative_vulnerability_score"), t["missing"])
        for poly in polygons(f["geometry"]):
            rings.append(project(poly[0]))  # outer ring; IRIS have no holes worth drawing
            fills.append(c)

    by_layer = {}
    for f in layers["features"]:
        by_layer.setdefault(f["properties"]["layer"], []).extend(project(l) for l in lines(f["geometry"]))

    # Extent covers the IRIS and every background line (the rivers run past the IRIS).
    pts = [p for r in rings for p in r] + [p for ls in by_layer.values() for l in ls for p in l]
    xs = [x for x, _ in pts]
    ys = [y for _, y in pts]
    x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
    mx, my = (x1 - x0) * MARGIN, (y1 - y0) * MARGIN
    x0, x1, y0, y1 = x0 - mx, x1 + mx, y0 - my, y1 + my

    w_in = WIDTH_PX / DPI
    h_in = w_in * (y1 - y0) / (x1 - x0)
    fig = plt.figure(figsize=(w_in, h_in), dpi=DPI, facecolor=t["bg"])
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_facecolor(t["bg"])
    ax.set_xlim(x0, x1)
    ax.set_ylim(y0, y1)
    ax.set_aspect("equal")
    ax.axis("off")

    ax.add_collection(PolyCollection(rings, facecolors=fills, edgecolors=t["edge"], linewidths=0.25))

    ax.add_collection(LineCollection(by_layer.get("communes", []), colors=t["edge"], linewidths=0.9))
    ax.add_collection(LineCollection(by_layer.get("river", []), colors=RIVER, linewidths=3.2, capstyle="round", joinstyle="round"))
    ax.add_collection(LineCollection(by_layer.get("paris", []), colors=t["paris"], linewidths=2.8, joinstyle="round"))

    buf = io.BytesIO()
    fig.savefig(buf, format="png", dpi=DPI, facecolor=t["bg"])
    plt.close(fig)
    buf.seek(0)
    img = Image.open(buf).convert("RGB")
    if img.width != WIDTH_PX:
        img = img.resize((WIDTH_PX, round(img.height * WIDTH_PX / img.width)), Image.LANCZOS)
    OUT.mkdir(parents=True, exist_ok=True)
    img.save(OUT / f"underlaid-map-{theme}.png", optimize=True)
    img.save(OUT / f"underlaid-map-{theme}.webp", quality=78, method=6)
    # Half-size copy for phones (srcset)
    small = img.resize((WIDTH_PX // 2, round(img.height / 2)), Image.LANCZOS)
    small.save(OUT / f"underlaid-map-{theme}-800.webp", quality=78, method=6)
    print(f"underlaid-map-{theme}: {img.width}×{img.height}")


def main():
    iris = fetch("map_iris.geojson")
    layers = fetch("map_layers.geojson")
    for theme in THEMES:
        render(iris, layers, theme)


if __name__ == "__main__":
    main()
