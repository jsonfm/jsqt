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