### JSQT
A library for wrap DOM elements with an API similar to Qt/PyQt.

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

### License
MIT