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
        expect(dial.angle(true)).toEqual(0);
        expect(dial.minimum()).toEqual(0);
        expect(dial.maximum()).toEqual(100);
        expect(dial.value()).toEqual(0);
        dial.setValue(50);
        expect(dial.angle(true)).toEqual(180);
    });

    test("should update pressed state", () => {
        document.body.innerHTML = `
            <div class="dial" id="dial"></div>
        `
        const dial = new Dial("dial", 0, 100, 0);
        dial.setPressed(true);
        expect(dial.pressed()).toEqual(true);
    })
});