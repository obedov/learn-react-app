import * as React from 'react';
import { useState } from 'react';

/**
 * https://reactjs.org/docs/hooks-reference.html#usecontext
 * https://www.w3schools.com/react/react_usecontext.asp
 */

/**
 * Example 1:
 * Drilling prop "user" from Component1 to Component5
 */

export function Component1() {
	const [user, setUser] = useState('User1');

	return (
		<>
			<h3>{`Component1: Hello, ${user}!`} ↷</h3>
			<Component2 user={user} />
		</>
	);
}

function Component2({ user }) {
	return (
		<>
			<h3>Component 2 ↷</h3>
			<Component3 user={user} />
		</>
	);
}

function Component3({ user }) {
	return (
		<>
			<h3>Component 3 ↷</h3>
			<Component4 user={user} />
		</>
	);
}

function Component4({ user }) {
	return (
		<>
			<h3>Component 4 ↷</h3>
			<Component5 user={user} />
		</>
	);
}

function Component5({ user }) {
	return (
		<>
			<h3>{`Component 5: Hello, ${user} again!`}</h3>
		</>
	);
}
