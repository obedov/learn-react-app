import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addCashAction, getCashAction } from '../reducers/cashReducer';
import { addClientAction, removeClientAction } from '../reducers/clientReducer';
import { StateRedux } from '../store';

export const Example1: React.FC = () => {
	const dispatch = useDispatch();

	const cash = useSelector((state: StateRedux) => state.cash.cash);
	const clients = useSelector((state: StateRedux) => state.clients.clients);

	const addCash = cash => dispatch(addCashAction(cash));
	const getCash = cash => dispatch(getCashAction(cash));

	const addClient = name => {
		const client = { name, id: Date.now() };
		dispatch(addClientAction(client));
	};

	const removeClient = id => dispatch(removeClientAction(id));

	return (
		<div>
			<div style={{ fontSize: '2rem' }}>Balance: {cash}</div>
			<div style={{ display: 'flex' }}>
				<button onClick={() => addCash(Number(prompt()))}>Deposit</button>
				<button onClick={() => getCash(Number(prompt()))}>Withdraw</button>
			</div>
			<div style={{ display: 'flex', marginTop: '10px' }}>
				<button onClick={() => addClient(prompt())}>Add client</button>
			</div>
			{clients.length > 0 ? (
				<div style={{ marginTop: '20px' }}>
					{clients.map(({ id, name }) => (
						<div key={id} style={{ fontSize: '2rem', cursor: 'pointer' }} onClick={() => removeClient(id)}>
							{name}
						</div>
					))}
				</div>
			) : (
				<div style={{ marginTop: '20px', fontSize: '2rem' }}>No clients</div>
			)}
		</div>
	);
};
