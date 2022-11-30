import { Base } from "./base";

/** A Binary (Toggle) button */
export class Toggle extends Base {
	checked: boolean;
	onStyle: string;
	offStyle: string;
	/**
	 *
	 * @param {string} elementId - the id of the element
	 * @param {string} onStyle - a css class name
	 * @param {string} offStyle - a css class name
	 */
	constructor(elementId: string, onStyle: string, offStyle: string) {
		super(elementId);
		this.checked = false;
		this.onStyle = onStyle;
		this.offStyle = offStyle;
		this.on("click", this.toggle.bind(this));
		this.updateStyle();
	}

	/**
	 * Updates checked value of the button
	 * @param {boolean} checked - checked value
	 */
	setChecked(checked = true) {
		this.checked = checked;
		this.updateStyle();
	}

	/** Returns checked statuss */
	isChecked() {
		return this.checked;
	}

	/** Updates class styles */
	updateStyle() {
		if (this.element) {
			this.element.className = this.isChecked() ? this.onStyle : this.offStyle;
		}
	}

	/** Toggles the check status */
	toggle() {
		this.checked = !this.checked;
		this.updateStyle();
	}
}
