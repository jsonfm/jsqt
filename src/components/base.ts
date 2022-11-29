export class Base {
  element: any;
  /**
   * A base class for objects
   * @param {string} elementId
   */
  constructor(elementId: string) {
    this.element = document.getElementById(elementId);
    if(!this.element){
      throw new Error(`Element with id = ${elementId} not exists! Please check it.`);
    }
  }

  /**
   * Checks if the dom element exists
   */
  exists(){
    return !!this.element;
  }

  /**
   * A cool API for use addEventListener
   * @param {string} event - a name
   * @param {function} callback - a function
   */
  on(event: string, callback: Function) {
    if(this.element)
      this.element.addEventListener(event, callback);
  }

  /**
   * Emits an event
   */
  emit(event: string | Event) {
    if(this.element)
      this.element.dispatchEvent(event);
  }


  /**
   * Updates the enabled value
   * @param {boolean} enabled
   */
  setEnabled(enabled = true) {
    if (this.element) {
      this.element.disabled = !enabled;
    }
  }

  /** Returns the current enabled status of the element. */
  isEnabled(): boolean {
    if(this.element) return !this.element.disabled;
    return false;
  }

  /** Returns the element value property */
  value() {
    if (this.element) {
      return this.element?.value;
    }
    return null;
  }

  /**
   * Updates element value property.
   * @param {string | number | boolean} value
   */
  setValue(value: string | number | boolean) {
    if (this.element) this.element.value = value;
  }

  /**
   * Updates element styles
   * @param {string} style
   */
  setStyles(style: string) {
    if (this.element) this.element.style = style;
  }

  /** Returns the element dom styles */
  getStyles(){
    if (this.element) return this.element.style;
  }

  /**
   * Updates className property of the dom element
   * @param {string} className
   */
  setClassName(className: string) {
    if (this.element) this.element.className = className;
  }

  /** Returns the current className */
  getClassName() {
    if(this.exists()) return this.element.className;
  }
}
