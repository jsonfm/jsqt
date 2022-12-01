import { Range } from "./range";

type DialEvent = MouseEvent | TouchEvent;

/** A Custom Dial */
export class Dial extends Range {

	private _pressed: boolean = false;
	private _angle: number = 0;

	constructor(
		elementId: string,
		min: number = 0,
		max: number = 100,
		value: number = 0
	) {
		super(elementId, min, max, value);
		this.rotate(0);

		// Events
		this.on("pressed", (e: DialEvent) => this.setPressed(true));
		this.on("release", (e: DialEvent) => this.setPressed(false));
		this.on("move", this.onRotate);
	}

	/**
	 * Returns the current angle value.
	 */
	angle(fixed: boolean = false): number {
		if(fixed){
			return this.fixAngle(this._angle);
		}
		return this._angle;
	}

	/**
	 * Returns the current value
	 */
	value() {
		const angle = this.angle(true); // angle between 0 and 360;
		const step = 360 / (this.max - this.min);
		const value = angle / step + this.min;
		return value;
	}

	setValue(value: number) {
		if(value < this.min || value > this.max) {
			throw new Error(`${value} is outside of the range between ${this.min} and ${this.max}`);
		};
		const step = 360 / (this.max - this.min);
		const angle = (value - this.min) * step;
		this._angle = angle;
		this._value = value;
		this.rotate(angle);
	}

	/**
	 * Updates pressed state
	 * @param pressed - new pressed value
	 */
	setPressed(pressed: boolean) {
		this._pressed = pressed;
	}

	/**
	 * fit an angle on the range between 0 and 360degrees.
	 * @returns 
	 */
	fixAngle(angle: number) {
		let fixed = angle;
		if(angle <= 0){
			fixed += 360
		}
		return fixed;
	}

	/**
	 * Applies a rotation transform over the current dom element
	 * @param angle - angle in degrees.
	 */
	rotate(angle: number) {
		if (this.element) {
			this.element.style.transform = `rotate(${angle}deg)`;
		}
	}

	/**
	 * Rotates Dials and updates its angle position.
	 * @param e - a mouse or a touch event
	 */
	onRotate = (e: DialEvent) => {
		const angle = this.calculateAngle(e);
		if (!!this._pressed) {
			this.rotate(angle);
		}
	};

	/**
	 * Calculates the current dial angle
	 * @param e - a mouse or a touch events
	 * @param fixed - fix angle ?
	 */
	calculateAngle = (e: DialEvent) => {
		const dial = this.element.getBoundingClientRect();

		const center = {
			x: dial.left + dial.width / 2,
			y: dial.top + dial.height / 2
		};

		let x = 0;
		let y = 0;

		if (e instanceof MouseEvent) {
			x = e.clientX;
			y = e.clientY;
		}

		if (e instanceof TouchEvent) {
			x = e.touches[0].clientX;
			y = e.touches[0].clientY;
		}

		const deltaX = x - center.x;
		const deltaY = y - center.y;

		const rad = Math.atan2(deltaY, deltaX);
		let angle = rad * (180 / Math.PI);

		this._angle = angle;

		if(this._pressed){
			this.emit(new Event("change"));
		}
		
		return angle;
	};
}
