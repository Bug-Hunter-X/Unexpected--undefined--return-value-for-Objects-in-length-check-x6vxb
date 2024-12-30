function foo(x){
  if(x === null || x === undefined){
    return 0; 
  } else if (Array.isArray(x)){
    return x.length; 
  } else {
    return 0; // or throw an error: throw new Error('Input must be an array');
  }
}
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo([1,2,3])); // Output: 3
console.log(foo({a:1,b:2})); // Output: 0