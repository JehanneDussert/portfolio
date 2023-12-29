import { combineReducers, configureStore } from '@reduxjs/toolkit';

const   initialWdw = {
    bg: "bg-black",
	bgType: "color",
	activeWdw: 'webcam'
}

const	initialTerminal = {
	echoCompleted: false,
}

const	window = (state = initialWdw, action) => {
	switch (action.type) {
		case "SET_WDW_BG":
	  		return {
				...state,
				bg: action.nextBg,
			};
		case "SET_WDW_BG_TYPE":
			return {
				...state,
				bgType: action.nextBgType,
			}
		case "SET_ACTIVE_WDW":
			return {
				...state,
				activeWdw: action.nextWdw
			}
		case "CLOSE_ACTIVE_WDW": {
			return {
				...state,
				activeWdw: ''
			}
		}
		case "RESET_WDW":
			return initialWdw;
	  	default: { return state };
	}
}

const	terminal = (state = initialTerminal, action) => {
	switch (action.type) {
		case "SET_ECHO_COMPLETED":
			return {
				...state,
				echoCompleted: true,
			}
		case "RESET_TERMINAL":
			return initialTerminal;
		default: { return state };
	}
}

const   rootReducer = combineReducers({
    window,
	terminal,
});

export const    store = configureStore({ reducer: rootReducer });