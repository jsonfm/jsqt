import { Toggle } from "../src/jsqt";

describe("Tests for button component", () => {
    test("Should has a null dom element", () => {
        const toggle = new Toggle("some-id", "onClass", "offClass");
        expect(toggle.element).toBeNull();
        expect(toggle.exists()).toBeFalsy();
    });

    test("Should toggle dom element className", () => {
        document.body.innerHTML = `
            <button id="led"></button>
        `
        const toggle = new Toggle("led", "onClass", "offClass");
        expect(toggle.exists()).toBeTruthy();
        expect(toggle.isChecked()).toBeFalsy();
        toggle.toggle();
        expect(toggle.isChecked()).toBeTruthy();

    });
});