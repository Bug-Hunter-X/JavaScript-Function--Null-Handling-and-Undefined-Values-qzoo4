function foo(a, b) {
  // Using Nullish Coalescing
  a ??= 0; // Sets a to 0 if a is null or undefined
  b ??= 0; // Sets b to 0 if b is null or undefined
  return a + b; 
}

//Alternative using type checking
function foo2(a, b) {
  a = typeof a === 'number' ? a : 0;
  b = typeof b === 'number' ? b : 0;
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(10, null)); // Output: 10
console.log(foo(undefined, 5)); // Output: 5
console.log(foo(5, undefined)); // Output: 5
console.log(foo(5, 10));   // Output: 15

console.log(foo2(null, 5)); // Output: 5
console.log(foo2(10, null)); // Output: 10
console.log(foo2(undefined, 5)); // Output: 5
console.log(foo2(5, undefined)); // Output: 5
console.log(foo2(5, 10));   // Output: 15