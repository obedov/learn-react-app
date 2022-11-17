import * as React from 'react';
import { useState, useContext, createContext } from 'react';

const UserContext = createContext('');

export function Component1() {
	const [user, setUser] = useState('User2');

	return (
		<UserContext.Provider value={user}>
			<h3>{`Component1: Hello, ${user}!`} ↷</h3>
			<Component5 />
		</UserContext.Provider>
	);
}

function Component2() {
	return (
		<>
			<h3>Component 2</h3>
			<Component3 />
		</>
	);
}

function Component3() {
	return (
		<>
			<h3>Component 3</h3>
			<Component4 />
		</>
	);
}

function Component4() {
	return (
		<>
			<h3>Component 4</h3>
			<Component5 />
		</>
	);
}

function Component5() {
	const user = useContext(UserContext);

	return <h3>{`Component 5: Hello, ${user} again!`}</h3>;
}
