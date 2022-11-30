import { Base } from "../src/jsqt";


describe("tests for base component", () => {
    test("Should raise an error because dom element doesn't exists.", () => {
        try {
            const base = new Base("base");
            expect(base.exists()).toBeFalsy();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toEqual("Element with id = base not exists! Please check it.")
        }
    });

    test("Should has an existing dom element", () => {
        document.body.innerHTML = `
            <div id="base"></div>
        `;

        const base = new Base("base");
        expect(base.exists()).toBeTruthy();
        base.setClassName("testClassName");
        expect(base.element.className).toBe("testClassName");
    });


    test("should set a value", () => {
        document.body.innerHTML = `
            <input type="number" id="input">
        `
        const input = new Base("input");
        expect(input.exists()).toBeTruthy();
        input.setValue(2);
        expect(input.value()).toEqual("2");
    });

    test("should update the dom element style", () => {
        document.body.innerHTML = `
            <div id="div"></div>
        `
        const div = new Base("div");
        div.setStyles("border-box: 2px solid orange;")
        expect(!!div.getStyles()).toBeTruthy();
    });

    test("should update disable or enabled status", () => {
        document.body.innerHTML = `
            <div id="div"></div>
        `
        const div = new Base("div");  
        div.setEnabled(false);
        expect(div.isEnabled()).toBeFalsy();
        div.setEnabled(true);
        expect(div.isEnabled()).toBeTruthy();     
    });

});