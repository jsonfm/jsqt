import { Base } from "./base";


type DialEvent = MouseEvent | TouchEvent;


/** A custom dial */
export class Dial extends Base {
  min: number;
  max: number;
  knob: any;
  private _value: number;
  private _pressed: boolean = false;
  private _angle: number = 0;


  constructor(elementId: string, min: number = 0, max: number = 100, value: number = 20) {
    super(elementId);
    this.min = min;
    this.max = max;
    this._value = value;
    // this.knob = this.element.firstElementChild;

    // Events
    this.element.addEventListener("mousedown", (e: DialEvent) => {this.setPressed(true); this.onRotate(e)});
    this.element.addEventListener("mouseup", (e: DialEvent) => {this.setPressed(false); this.onRotate(e)});
    this.element.addEventListener("touchstart", () => this.setPressed(true));
    this.element.addEventListener("touchend", () => this.setPressed(false));
    this.element.addEventListener("mousemove",this.onRotate);
    this.element.addEventListener("touchmove", this.onRotate);
  }

  /**
   * Returns the current dial value.
   */
  value() {
    return this._value;   
  }

  /**
   * Returns the current angle value.
   */
  angle(){
    return this._angle;
  }

  /**
   * Updates pressed state
   * @param pressed - new pressed value
   */
  setPressed(pressed: boolean){
    this._pressed = pressed;
  }

  /**
   * Rotates Dials and updates its angle position.
   * @param e - a mouse or a touch event
   */
  onRotate = (e: DialEvent) => {
    const angle = this.calculateAngle(e, false);
    if(!!this._pressed){
      this.element.style.transform = `rotate(${angle}deg)`;
    }
  }

  /**
   * Calculates the current dial angle
   * @param e - a mouse or a touch events
   * @param fixed - fix angle ?
   */
  calculateAngle = (e: DialEvent, fixed: boolean = true) => {
    const dial = this.element.getBoundingClientRect();

    const center = {
      x: dial.left + dial.width / 2,
      y: dial.top + dial.height / 2
    }

    let x = 0;
    let y = 0;

    if(e instanceof MouseEvent) {
      x = e.clientX;
      y = e.clientY;
    }

    if(e instanceof TouchEvent) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    }

    const deltaX = x - center.x;
    const deltaY = y - center.y;

    const rad = Math.atan2(deltaY, deltaX);
    let angle = rad * (180 / Math.PI);

    this._angle = angle;
    this.emit(new Event("change"));

    if (fixed && angle < 0 && angle >= -180){
      angle += 180;
    }
    
    return angle;
  }

}
