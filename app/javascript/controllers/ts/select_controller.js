import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select"

// Connects to data-controller="tom-select"
export default class extends Controller {
  static values = {
    url: String
  }

  connect() {
    this.element.setAttribute( "autocomplete", "random" );

    var config = {
      plugins: ['clear_button']
    }

    new TomSelect(this.element, config)
  }

}
