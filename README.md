### JSQT
A library for wrap DOM elements with an API similar to Qt/PyQt.

### CDN
```
<script src="https://cdn.jsdelivr.net/npm/jsqt@0.0.0/dist/jsqt.umd.js"></script>
```

### Button
```js
const button = new jsqt.Button("some-element-id");
button.on("click", () => console.log("clicked!"));
```

### Toggle
```js
const led = new jsqt.Toggle("some-element-id", "onClass", "offClass");
console.log("led is checked:", led.isChecked());
```

### Label
```js
const label = new jsqt.Label("some-element-id");
label.setText("some text!");

console.log("text label: ", label.text());
label.clear(); // clears the label
```

### Dial 
```js
const dial = new jsqt.Dial("dial");
const label = new jsqt.Label("label");

const dialChange = () => {
  const text = `Angle: ${dial.angle().toFixed(2)}`;
  label.setText(text);
}

dial.on("change", dialChange);
```


### API


```js
const element = new Base('some-element-id');

element.setValue(3.1416);
console.log("value: ", element.value());

element.setEnabled(true);
console.log("I'm enabled: ", element.isEnabled()); // true
element.setEnabled(false);
console.log("I'm enabled: ", element.isEnabled()); // true


```


### License
MIT