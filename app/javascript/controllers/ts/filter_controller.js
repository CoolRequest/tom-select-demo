import { Controller } from "@hotwired/stimulus"
import { get }        from '@rails/request.js'
import TomSelect      from "tom-select"

// Connects to data-controller="ts--filter"
export default class extends Controller {
  static targets = [ "filter", "other" ]
  static values  = { url: String }

  connect() {

    this.filterTarget.addEventListener('change', ev => {
      if(this.selectedFilter)
        this.fetchItems()
      else
        this.clearItems()
    })

    if (this.selectedFilter) this.fetchItems()
  }

  async fetchItems() {
    const response = await get(this.urlValue, {
      query: { filter: this.selectedFilter },
      responseKind: 'json'
    })

    if(response.ok)
      this.setItems(await response.json)
    else
      console.log(response)
  }

  setItems(items) {
    this.clearItems()
    this.tomSelect.addOptions(items)
  }

  clearItems() {
    this.tomSelect.clear()
    this.tomSelect.clearOptions()
  }

  get selectedFilter() {
    return this.filterTarget.value
  }

  get preSelectedChild() {
    return this.data.get('pre-selected')
  }

  get tomSelect() {
    this._tomSelect ||= new TomSelect(this.otherTarget, {
      plugins: [ 'clear_button']
    })

    return this._tomSelect
  }

}

