import { Base } from "./base";


/** A Custom Range Component */
export class Range extends Base {

	min: number = 0;
	max: number = 100;
    _value: number = 10;

	constructor(
        elementId: string,
        min: number = 0,
        max: number = 0,
        value: number = 30,

    ) {
		super(elementId);
        this.min = min;
        this.max = max;
        this._value = value;
	}

    /**
     * Updates the minimum value.
     * @param value 
     */
    setMinimum(value: number) {
        this.min = value;
    }

    /**
     * Updates the maximum value.
     */
    setMaximum(value: number) {
        this.max = value;
    }

    /**
     * Updates the current value.
     */
    setValue(value: number) {
        this._value = value;
    }

    /**
     * Returns the current value.
     */
    getValue() {
        return this._value;
    }

}
