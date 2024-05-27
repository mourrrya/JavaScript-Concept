const debounce = (callback, wait) => {
  let timeout = null;
  console.log("debounce");
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};

const myEventFunc = debounce((data) => {
  console.log(data);
}, 500);

myEventFunc("data");
