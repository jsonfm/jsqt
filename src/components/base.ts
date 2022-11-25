export class Base {
  element: any;
  /**
   * A base class for objects
   * @param {string} elementId
   */
  constructor(elementId: string) {
    this.element = document.getElementById(elementId);
  }

  /**
   * A cool API for use addEventListener
   * @param {string} event - a name
   * @param {function} callback - a function
   */
  on(event: string, callback: Function) {
    this.element?.addEventListener(event, callback);
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

  /**
   * Updates className property of the dom element
   * @param {string} className
   */
  setClassName(className: string) {
    if (this.element) this.element.className = className;
  }
}
