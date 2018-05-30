import React from 'react'


export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {currentSlide: 0, user: "none"}
    this.update = this.login.bind(this)

  }



  login(data) {
    fetch("http://localhost:3001/login", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())//fetch vraci promisu a ne objekt, takze tu nejdriv musim zpracovat a az pak vypsat
    .then(json => this.setState( { user: json[0].login } ) )

  }



  render() {
    return (
      <div>
      <p>{this.props.user}: {this.state.user}</p>
      <button onClick={() => this.login("qqq")}>posli</button>
      </div>
    )
  }
}
