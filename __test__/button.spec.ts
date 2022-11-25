import { Button } from "../src/jsqt";

describe("Tests for button component", () => {
    test("Should has a null dom element", () => {
        const button = new Button("some-id");
        expect(button.element).toBeNull();
        expect(button.exists()).toBeFalsy();
    });
});