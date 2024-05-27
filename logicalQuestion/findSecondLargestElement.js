const arr = [64, 32, 84, 28, 48, 74, 91, 10, 38, 20];

let firstLargest = -Infinity;
let secondLargest = -Infinity;

arr.forEach((num) => {
  if (num > firstLargest) {
    secondLargest = firstLargest;
    firstLargest = num;
    return;
  }

  if (num > secondLargest) {
    secondLargest = num;
  }
});

console.log("firstLargest", firstLargest);
console.log("secondLargest", secondLargest);
