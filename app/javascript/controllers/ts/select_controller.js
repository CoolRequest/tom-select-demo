import { Controller } from "@hotwired/stimulus"
import TomSelect      from "tom-select"

// Connects to data-controller="ts--select"
export default class extends Controller {
  static values = {
    url: String,
    options: Array
  }

  connect() {
    this.element.setAttribute( "autocomplete", "random" );

    var config = {
      plugins: ['clear_button'],
      render: {
        option: this.render_option,
        item: this.render_option
      }
    }

    if(this.hasOptionsValue) {
      config.options = this.optionsValue
    }

    new TomSelect(this.element, config)
  }

  render_option(data, escape) {
    if(data.sub)
      return `
      <div>
        <div class="text">${escape(data.text)}</div>
        <div class="sub">${escape(data.sub)}</div>
      </div>`
    else
      return `<div>${escape(data.text)}</div>`
  }

}
