import { html, LitElement, type PropertyValues } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement('lit-input')
export class LitInput extends LitElement {

  @state()
  private _value: string = "";

  handleInput(e: InputEvent) {
    this._value = (e.target as HTMLInputElement).value + '!';

    const value = this.shadowRoot?.getElementById('value');
    if (value) {
      value.textContent = ' value: ' + this._value;
    }
  }

  render() {
    return html`<div style="display: inline" >
    <input
      name="LitInput"
      id="LitInput"
      autocomplete="off"
      .value=${this._value}
      @input=${this.handleInput}
    />
    <span id="value"> value: </span>
    </div>
    `;
  }
}
