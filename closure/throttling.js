const throttle = (callback, wait) => {
  let inThrottling = null;

  return (...args) => {
    if (!inThrottling) {
      callback(...args);
    }
    const timerId = setTimeout(() => {
      callback(...args);
      // inThrottling = false;
    }, wait);
  };
};

const myEvent = throttle((data) => {
  console.log(data);
}, 500);

console.time();
myEvent("data");
console.timeEnd();

console.time();
myEvent("data");
console.timeEnd();

console.time();
myEvent("data");
console.timeEnd();
