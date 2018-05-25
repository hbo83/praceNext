import Link from 'next/link'

const SearchBar = () => (
  <div style={{margin: 20, padding: 20, border: "1px solid #DDD"}}>
    Job: &nbsp;
    <input type="text" />
    Town: &nbsp;
    <input type="text" />
  </div>
)

export default SearchBar
