function normalFun(one, two, three, four, type) {
  console.log(type + one + two + three + four);
}

normalFun(1, 2, 3, 4, "normal function");

function curryFun(one) {
  return (two) => {
    return (three) => {
      return (four) => {
        normalFun(one, two, three, four, "curry function");
      };
    };
  };
}

curryFun(1)(2)(3)(4);

const infinityCurrying = (a) => {
  return (b) => {
    if (b) return infinityCurrying(a + b);
    return a;
  };
};

console.log("infinity Currying", infinityCurrying(2)(3)());
console.log("infinity Currying", infinityCurrying(2)(3)(4)());

const infinityCurryingWithMultipleArg = (...argA) => {
  return (...argsB) => {
    const multiply = (...args) => {
      return args.reduce((acc, current) => {
        acc = acc * current;
        return acc;
      }, 1);
    };

    if (argsB.length <= 0) return multiply(...argA, ...argsB);
    return infinityCurryingWithMultipleArg(...argA, ...argsB);
  };
};

console.log(
  "infinity Currying With Multiple Arg",
  infinityCurryingWithMultipleArg()()
);
console.log(
  "infinity Currying With Multiple Arg",
  infinityCurryingWithMultipleArg(2, 2)(2)(3, 2)()
);
