import { Action, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { cashReducer, CashState } from '../reducers/cashReducer';
import { clientReducer, ClientState } from '../reducers/clientReducer';

export interface ActionObject<T> extends Action {
	payload: T;
}

export interface StateRedux {
	cash: CashState;
	clients: ClientState;
}

const rootReducer = combineReducers({
	cash: cashReducer,
	clients: clientReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
