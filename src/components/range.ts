import { Base } from "./base";


/** A Custom Range Component */
export class Range extends Base {

	min: number = 0;
	max: number = 100;
    _value: number = 0;

	constructor(
        elementId: string,
        min: number = 0,
        max: number = 100,
        value: number = 0,

    ) {
		super(elementId);
        this.min = min;
        this.max = max;
        this._value = value;
	}

    maximum(){
        return this.max;
    }

    minimum(){
        return this.min;
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
