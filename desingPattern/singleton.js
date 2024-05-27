const singleTon = (function () {
  let instance;

  const Counter = function () {
    this.count = 0;
    this.incrementCounter = function () {
      this.count += 1;
    };
    this.decrementCounter = function () {
      this.count -= 1;
    };
  };

  return () => {
    if (instance) {
      return instance;
    }
    instance = new Counter();
    return instance;
  };
})();

const counter = singleTon();
const counter2 = singleTon();

console.log(counter.count);

counter.incrementCounter();
counter.incrementCounter();
counter.incrementCounter();
counter2.decrementCounter();

console.log(counter.count);
