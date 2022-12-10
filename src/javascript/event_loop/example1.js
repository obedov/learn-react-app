/**
 * EVENT LOOP
 *
 * order:
 * 1) simple code (synchronous)
 * 2) microtasks (asynchronous)
 * 3) macrotasks (asynchronous)
 *
 */

// 3) macrotask, asynchronous call
setTimeout(() => console.log('timeout'));

// 2) microtask, asynchronous call
Promise.resolve().then(() => console.log('promise'));

// 1) synchronous call
console.log('code');
