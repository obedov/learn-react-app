/**
 * 8 DATA TYPES
 */

// number - primitive
const number = 1;
console.log('1)', typeof number);

// bigint - primitive
const bigint = 1n;
console.log('2)', typeof bigint);

// string - primitive
const string = 'string';
console.log('3)', typeof string);

// boolean - primitive
const boolean = true;
console.log('4)', typeof boolean);

// null - primitive
const nullable = null;
console.log('5)', typeof nullable);

// undefined - primitive
const undefinable = undefined;
console.log('6)', typeof undefinable);

// symbol - primitive
const symbol = Symbol('id');
console.log('7)', typeof symbol);

// object - complex
const object = { value: 1 };
console.log('8.1)', typeof object);

// func - complex (relates to object type)
const func = () => ({ value: 1 });
console.log('8.2)', typeof func);

// array - complex (relates to object type)
const array = [1, 2, 3];
console.log('8.3)', typeof array);
