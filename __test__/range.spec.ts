import { Range } from "../src/jsqt";

describe("Tests for Range component", () => {
    test("Should has a dom element", () => {
        document.body.innerHTML = `
            <div class="button" id="range"></div>
        `
        const range = new Range("Range");
        expect(range.exists()).toBeTruthy();
    });
});