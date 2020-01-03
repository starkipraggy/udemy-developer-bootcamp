function isEven(x) {
  return x % 2 === 0
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

function factorial(x) {
  return x <= 1 ? 1 : x * factorial(x-1);
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

function kebabToSnake(input) {
  return input.replace(/-/g, "_");
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));