import { ActionObject } from '../store';

export interface CashState {
	cash: number;
}

const defaultState: CashState = {
	cash: 0,
};

export const ADD_CASH = 'ADD_CASH';
export const GET_CASH = 'GET_CASH';

export const cashReducer = (state = defaultState, action: ActionObject<number>) => {
	switch (action.type) {
		case ADD_CASH:
			return { ...state, cash: state.cash + action.payload };
		case GET_CASH:
			return { ...state, cash: state.cash - action.payload };
		default:
			return state;
	}
};

export const addCashAction = payload => ({ type: ADD_CASH, payload });
export const getCashAction = payload => ({ type: GET_CASH, payload });
