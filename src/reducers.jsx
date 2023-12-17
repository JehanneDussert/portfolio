import { combineReducers, configureStore } from '@reduxjs/toolkit';

const   initialWdw = {
    bg: "bg-black",
}

const	window = (state = initialWdw, action) => {
	switch (action.type) {
		case "SET_WDW_BG":
	  		return {
				...state,
				bg: action.nextBg,
			};
	  	default: { return state };
	}
}

const   rootReducer = combineReducers({
    window,
});

export const    store = configureStore({ reducer: rootReducer });