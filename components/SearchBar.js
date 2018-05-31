import Link from 'next/link'
import $ from 'jquery'

let towns = [ "Praha", "Plzen"]

class AutoComplete {
  constructor() {
    this.devMode = true // Always loads draft
    this.token = 'PREVIEW_TOKEN'
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })

    this.query = {}
  }
}






const SearchBar = (props) => (
  <div style={{margin: 20, padding: 20, border: "1px solid #DDD"}}>
    Job: &nbsp;
    <input id="tags" type="text" />
    <label htmlFor="tags">Town:</label>
    <input type="text" />
    <p>{props.mesto}</p>
  </div>
)

export default SearchBar
