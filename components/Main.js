import React from 'react'
import LoginForm from '../components/LoginForm.js'
import Header from '../components/Header.js'
import SearchBar from '../components/SearchBar.js'
import CustomersCard from '../components/CustomersCard.js'
import Galery from '../components/Galery.js'
import CustomersData from '../components/CustomersData.js'

import Main from '../components/Main.js'
import what from'whatwg-fetch'

import "isomorphic-fetch"

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = { user: "nepřihlášen ",
                   pass: "",
                   town: "",
                   time: "",
                   activity: "",
                   phone: "",
                   email: "",
                   price: "",
                   display: "flex",
                   login: "",
                   pass: ""
                 }

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

componentDidMount() {

}
fetchData() {
  fetch('http://localhost:3001/login', {
    method: 'POST',
    body: JSON.stringify({login: this.state.login, pass: this.state.pass}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then(json => this.setState( {
    user: json[0].login,
    pass: json[0].pass,
    town: json[0].town,
    time: json[0].time,
    activity: json[0].activity,
    phone: json[0].phone,
    email: json[0].email,
    price: json[0].price
  } )
)

}

handleChangeLogin(event) {
    this.setState({login: event.target.value});
    console.log(this.state.login)
  }

handleChangePass(event) {
    this.setState({pass: event.target.value});
    console.log(this.state.pass)
  }

  render() {
    return (
       <div>
       <div style={{margin: 20, padding: 0, border: "1px solid black", display: "flex" ,width: "515px", height: "20px", float: "right"}}>

         <input type="text" maxLength="20" onChange={this.handleChangeLogin}/>
         <input type="text" maxLength="20" onChange={this.handleChangePass} placeholder={this.state.user}/>
         <button onClick={this.fetchData}>prihlasit</button>{this.state.phone}

       </div>

      <CustomersData town={this.state.town}
                     user={this.state.user}
                     time={this.state.town}
                     activity={this.state.activity}
                     phone={this.state.phone}
                     email={this.state.email}
                     price={this.state.price}
       />



      </div>
    )
  }

}
