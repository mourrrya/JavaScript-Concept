const singleTon = (function () {
  let instance;

  const Counter = function () {
    this.count = 0;
  };

  Counter.prototype.increment = function () {
    this.count++;
  };
  Counter.prototype.decrement = function () {
    this.count--;
  };

  return function () {
    if (instance) return instance;
    instance = new Counter();
    return instance;
  };
})();

const counter = singleTon();
const counter2 = singleTon();

console.log("counter.count", counter.count);

counter.increment();
counter.increment();
counter.increment();
counter2.increment();
counter2.increment();
counter2.decrement();
counter.decrement();

console.log("counter.count", counter.count);
