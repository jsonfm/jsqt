import { Base } from "../src/jsqt";

describe("tests for base component", () => {
    it("Should instance a base component with null element", () => {
        const base = new Base("element");
        expect(base.element).toBeNull();
    })
});