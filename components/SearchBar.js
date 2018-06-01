
export default class extends React.Component {

constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handle = this.handle.bind(this)
  }

pole = ["elektrikar"]

handle() {
  this.setState( {value: this.pole[0] })
  console.log(this.pole[0])
}
render() {
  return (
    <div>
      <input type="text" maxLength="20" value={this.state.value} onChange={this.handle}/>
    </div>
  )
}
}
