const arr = [1, 2, 3, 4];

arr.map((data) => {
  console.log("from map", data);
});

Array.prototype.myMap = function (cb) {
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    cb(element, index, this);
  }
};

arr.myMap((item) => console.log("from my map", item));
