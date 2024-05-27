const rotateArr = (myArr, rotateBy) => {
  if (myArr.length <= 0) return;
  let newArr = new Array(myArr.length);
  const effectiveRotate = rotateBy % myArr.length;

  for (let index = 0; index < myArr.length; index++) {
    const newIndex = (effectiveRotate + index) % myArr.length;
    newArr[newIndex] = myArr[index];
  }

  return newArr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(
  "Rotated array, spaceComplexity-O(n), timeComplexity-O(n)",
  rotateArr(arr, 3)
);

const rotateWithSlice = (arr, rotateBy) => {
  const effectiveRotate = rotateBy % arr.length;
  const splicesArr = arr.splice(-effectiveRotate, effectiveRotate);
  return splicesArr.concat(...arr);
};

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(
  "Rotated array with splice, spaceComplexity-O(1), timeComplexity-O(n)",
  rotateWithSlice(arr2, 3)
);

const rotateWithoutSlice = (arr3, rotateBy) => {
  const arrLen = arr3.length;
  const effectiveRotate = rotateBy % arr3.length;

  function reverseArray(arr, left, right) {
    while (left < right) {
      const temp = arr[left];
      arr[left++] = arr[right];
      arr[right--] = temp;
    }
  }

  reverseArray(arr, 0, arrLen - 1);
  reverseArray(arr, 0, effectiveRotate - 1);
  reverseArray(arr, effectiveRotate, arrLen - 1);
  return arr;
};

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(
  "Rotated array without splice, spaceComplexity-O(1), timeComplexity-O(n)",
  rotateWithoutSlice(arr3, 3)
);
