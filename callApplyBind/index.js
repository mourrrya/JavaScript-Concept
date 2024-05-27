const obj1 = {
  firstName: "Anil",
  address: "Delhi",
  displayName: function (address) {
    console.log(this.firstName);
    console.log(address);
  },
};

const obj2 = {
  firstName: "Rashid",
};

obj1.displayName.call(obj2, "wazirabad");
console.log("-----------");
obj1.displayName.apply(obj2, ["wazirabad"]);
console.log("-----------");
const bindFn = obj1.displayName.bind(obj2, "wazirabad");
bindFn();
