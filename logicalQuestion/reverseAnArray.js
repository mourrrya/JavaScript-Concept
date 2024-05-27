const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverseArray(myArr) {
  const reversedArray = [];
  myArr.forEach((value, i) => {
    const index = i + 1;
    reversedArray[myArr.length - index] = value;
  });

  return reversedArray;
}

function reverseArrayWithWhile(myArr) {
  let left = 0;
  let right = myArr.length - 1;
  while (left < right) {
    const temp = myArr[left];
    myArr[left] = myArr[right];
    myArr[right] = temp;
    left++;
    right--;
  }
  return myArr;
}

console.log("reversedArray", reverseArray(arr));
console.log("reverseArrayWithWhile", reverseArrayWithWhile(arr));
