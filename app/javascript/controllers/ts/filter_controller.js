import { Controller } from "@hotwired/stimulus"
import TomSelect from "tom-select"
import { get } from '@rails/request.js'

// Connects to data-controller="ts--filter"
export default class extends Controller {
  static targets = [ "filter", "other" ]
  static values = {
    url: String
  }

  connect() {

    this.filterTarget.addEventListener('change', ev => {
      if (this.selectedFilter) {
        this.fetchItems()
      } else {
        this.clearItems(this.otherTarget)
      }
    })

    if (this.selectedFilter) this.fetchItems()
  }

  async fetchItems() {
    const response = await get(this.urlValue, {
      query: { filter: this.selectedFilter },
      responseKind: 'json'
    })

    if(response.ok) {
      this.setItems(await response.json)
    } else {
      console.log(response)
    }

  }

  setItems(items) {
    this.getTomSelect.clear()
    this.getTomSelect.clearOptions()
    this.getTomSelect.addOptions(items)
  }

  clearItems(target) {
    target.innerHTML = "";
    $(target).val(null).trigger('change');
  }

  get selectedFilter() {
    return this.filterTarget.value
  }

  get preSelectedChild() {
    return this.data.get('pre-selected')
  }

  get getTomSelect() {
    if(this.tomSelect === undefined) {
      this.tomSelect = new TomSelect(this.otherTarget, {
        plugins: [ 'clear_button'],
      })
    }
    return this.tomSelect
  }

}

