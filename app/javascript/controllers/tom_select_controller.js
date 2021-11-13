import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select"
import { get } from '@rails/request.js'

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

    if(this.hasUrlValue) {
      config = Object.assign(config, this.ajaxConfig())
    }

    new TomSelect(this.element, config)
  }

  ajaxConfig() {
    return {
      loadThrottle: 400,
      load: (q, callback) => this.load(q, callback)
    }
  }

  async load(q, callback) {
    const response = await get(this.urlValue, {
      query: { q: q },
      responseKind: 'json'
    })

    if(response.ok) {
      callback(await response.json)
    } else {
      console.log(response)
      callback()
    }
  }
}
