function Compute() {
  this.amount = 0;
  this.crore = function (value) {
    this.amount += value * 10000000;
    return this;
  };
  this.thousand = function (value) {
    this.amount += value * 1000;
    return this;
  };
  this.value = function () {
    return this.amount;
  };
}

Compute.prototype.lakh = function (value) {
  this.amount += value * 100000;
  return this;
};

const computeFactory = new Compute();

console.log(
  "compute",
  computeFactory.lakh(15).crore(2).thousand(4).lakh(4).value()
);
