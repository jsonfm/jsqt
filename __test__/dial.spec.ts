import { Dial } from "../src/jsqt";

describe("Tests for dial component", () => {
    test("Should has a dom element", () => {
        document.body.innerHTML = `
            <div class="dial" id="dial"></div>
        `
        const dial = new Dial("dial");
        expect(dial.exists()).toBeTruthy();
    });

    test("should set a new value", () => {
        document.body.innerHTML = `
            <div class="dial" id="dial"></div>
        `
        const dial = new Dial("dial", 0, 100, 0);
        expect(dial.value()).toEqual(0);
    });
});