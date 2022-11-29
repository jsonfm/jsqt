import { Base } from "./base";


/** A custom label */
export class Label extends Base {
  constructor(elementId: string) {
    super(elementId);
  }

  /**
   * Updates text of the label
   */
  setText(text: string) {
    if(this.element)
        this.element.innerHTML = text;
  }

  /**
   * Clears text of the label
   */
  clear(){
    if(this.element)
        this.element.innerHTML = '';
  }
}
