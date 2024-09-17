import { html, LitElement, type PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement('lit-input')
export class LitInput extends LitElement {

  @state()
  private _value: string = "";

  handleInput(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    this._value = target.value + '!';
  }

  render() {
    return html`<input
      name="LitInput"
      id="LitInput"
      .value=${this._value}
      @input=${this.handleInput}
    />`;
  }
}
