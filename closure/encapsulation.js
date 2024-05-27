const encapsulationFn = () => {
  let counter = 10;

  return (actualFunction = (summedBy) => {
    counter += summedBy;
    return counter;
  });
};
const counterFn = encapsulationFn();

console.log("counterFn", counterFn(20));

console.log("counterFn", counterFn(10));