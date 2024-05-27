function model(state, element) {
  // Set the initial value of the input to the state's value
  element.value = state.value;

  // Listen for changes in the state's value and update the input's value accordingly
  Object.defineProperty(state, "value", {
    get: function () {
      return element._value;
    },
    set: function (newValue) {
      element._value = newValue;
      element.value = newValue;
    },
  });

  // Initial sync of state value to input
  state.value = element.value;

  // Listen for changes in the input's value and update the state's value accordingly
  element.addEventListener("change", function () {
    state.value = element.value;
  });
}

// Test the model function 
const input = document.createElement("input");
const state = { value: "Hi" };

model(state, input);

console.log(input.value); // 'Hi'

state.value = "dev";
console.log(input.value); // 'dev'

input.value = "engineerchirag";
input.dispatchEvent(new Event("change"));
console.log(state.value);
