import { ActionObject } from '../store';

export interface Client {
	name: string;
	id: number;
}

export interface ClientState {
	clients: Client[];
}

const defaultState: ClientState = {
	clients: [],
};

export const ADD_CLIENT = 'ADD_CLIENT';
export const REMOVE_CLIENT = 'REMOVE_CLIENT';

export const clientReducer = (state = defaultState, action: ActionObject<Client | number>) => {
	switch (action.type) {
		case ADD_CLIENT:
			return { ...state, clients: [...state.clients, action.payload] };
		case REMOVE_CLIENT:
			return { ...state, clients: state.clients.filter(client => client.id !== action.payload) };
		default:
			return state;
	}
};

export const addClientAction = payload => ({ type: ADD_CLIENT, payload });
export const removeClientAction = payload => ({ type: REMOVE_CLIENT, payload });
