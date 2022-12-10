/**
 * EVENT LOOP
 */

console.log('code 1');

setTimeout(() => console.log('timeout 1'), 0);

setTimeout(() => console.log('timeout 4'), 1000);

Promise.resolve().then(() => console.log('promise 1'));

setTimeout(() => console.log('timeout 2'), 10);

Promise.resolve().then(() => console.log('promise 2'));

setTimeout(() => console.log('timeout 3'), 100);

Promise.resolve().then(() => console.log('promise 3'));

console.log('code 2');
