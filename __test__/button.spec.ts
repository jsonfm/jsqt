import { Button } from "../src/jsqt";

describe("Tests for button component", () => {
    test("Should has a dom element", () => {
        document.body.innerHTML = `
            <div class="button" id="button"></div>
        `
        const button = new Button("button");
        expect(button.exists()).toBeTruthy();
    });
});