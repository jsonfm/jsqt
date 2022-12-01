const $ = (id) => document.getElementById(id);

// Button
let count = 0;
const increaseBtn = new jsqt.Button("increaseBtn");
const resetBtn = new jsqt.Button("resetBtn");
const displayCountValue = () =>  $("count").innerHTML = `Count: ${count}`;
increaseBtn.on("click", () => {
  count += 1;
   displayCountValue();
});

resetBtn.on("click", () => {
    count = 0;
    displayCountValue();
});

// Toggle
const toggle = new jsqt.Toggle("toggle", "button is-light", "button is-dark");

// Dial
const dial = new jsqt.Dial("dial", 0, 100, 20);
console.log("dial value: ", dial.value());


const dialChange = () => {
  $('angleLabel').innerHTML = `Angle: ${dial.angle(true).toFixed(2)}`;
  $('valueLabel').innerHTML = `Value: ${dial.value().toFixed(2)}`
}

dial.on("change", dialChange);
setTimeout(() => {dial.setValue(110); dialChange()}, 3000);
