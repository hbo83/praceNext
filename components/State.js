import $ from 'jquery'
import React from 'react'
import Autocomplete from 'react-autocomplete'

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {currentSlide: 0, user: "none"}
    this.update = this.update.bind(this)
    this.sendReq = this.sendReq.bind(this)
    this.pokus = this.pokus.bind(this)

  }

  update() {

    this.pokus({login: "martin"})

  }


  sendReq() {

    $.ajax({
      url: "http://localhost:3001/login",
      xhrFields: {
        withCredentials: true
      },
      data: {
        login: "martin",
        pass: "sartin"
      }
    }).then( function(result) {



    });

  }




lo() {

  fetch("http://localhost:3001/login",{credentials: 'omit'  })
  .then(
    (result) => {
      this.setState({
        user: "ll"

      });
      console.log(result)
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  )

}


  pokus(data) {
    fetch("http://localhost:3001/login", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())//fetch vraci promisu a ne objekt, takze tu nejdriv musim zpracovat a az pak vypsat
    
    .then(jsondata => console.log(jsondata));
  }



  render() {
    return (
      <div>
      <p>{this.props.user}: {this.state.user}</p>
      <button onClick={() => this.update()}>posli</button>
      </div>
    )
  }
}
