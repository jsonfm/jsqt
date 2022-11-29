import { Label } from "../src/jsqt";

describe("Tests for Label component", () => {
    test("Should set a text on a document element", () => {
        
        document.body.innerHTML = `
            <div id="label"></div>
        `
        const label = new Label("label");
        label.setText("hello");
        expect(label.text()).toEqual("hello");
    });
});