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
   * Returns the text of the label
   */
  text(){
    if(this.element)
        return this.element.innerHTML;
  }

  /**
   * Clears text of the label
   */
  clear(){
    if(this.element)
        this.element.innerHTML = '';
  }
}
