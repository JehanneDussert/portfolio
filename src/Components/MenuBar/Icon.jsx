
export const    Icon = ({ item, activeWindow, setActiveWindow }) => {

    const   handleClick = () => {
        if (item.name === "contact")
        {
            const   emailAddress = 'jehanne-dussert@hotmail.fr';
            const   mailtoLink = `mailto:${emailAddress}`;
            return window.location.href = mailtoLink;
        }
        !activeWindow.includes(item.name) && setActiveWindow([...activeWindow, item.name]);
    };

    return <button onClick={handleClick} className="mx-4 my-2">
        <img src={item.img} title={item.title}/>
    </button>
}