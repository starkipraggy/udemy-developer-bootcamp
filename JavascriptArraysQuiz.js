function printReverse(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

printReverse(["a", "b", "c"]);

function isUniform(array) {
  for (var i = 1; i < array.length; i++) {
    if (array[i] !== array[i-1]) {
      return false;
    }
  }
  return true;
}

console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(isUniform(["a", "b", "p"]));
console.log(isUniform(["b", "b", "b"]));

function sumArray(array) {
  let total = 0;
  array.forEach(num => total += num);
  return total;
}

console.log(sumArray([1,2,3]));
console.log(sumArray([10,3,10,4]));
console.log(sumArray([-5,100]));

function max(array) {
  let max = undefined;
  array.forEach((num) => {
    if (undefined === max || max < num) {
      max = num;
    }
  });
  return max;
}

console.log(max([1,2,3]));
console.log(max([10,3,10,4]));
console.log(max([-5,100]));