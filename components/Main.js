import React from 'react'
import LoginForm from '../components/LoginForm.js'
import Header from '../components/Header.js'
import SearchBar from '../components/SearchBar.js'
import CustomersCard from '../components/CustomersCard.js'
import Galery from '../components/Galery.js'
import obrazek from '../components/obrazek.js'
import State from '../components/State.js'
import Main from '../components/Main.js'
import what from'whatwg-fetch'
import axios from 'axios'

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = { user: "Přihlásit: ",
                   pass: "",
                   town: "",
                   time: "",
                   activity: "",
                   phone: "",
                   email: "",
                   price: "",
                   display: "flex",
                   loginData: {
                     login: "",
                     password: ""
                   }
                 }

    this.handleChange = this.handleChange.bind(this);
    this.fetchData = this.fetchData.bind(this)
  }

fetchData(login, pass) {
alert(login + data)
}
  fetch('http://localhost:3001/login'), {
    method: 'POST',
    body: JSON.stringify({login: login, password: pass}),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then(json => this.setState( { user: json[0].login,
    pass: json[0].pass,
    town: json[0].town,
    time: json[0].time,
    activity: json[0].activity,
    phone: json[0].phone,
    email: json[0].email,
    price: json[0].price
  } ).catch(errorr => console.log("error"))
)


handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }

  render() {
    return (
       <div>
       <div style={{margin: 20, padding: 0, border: "1px solid black", display: "flex" ,width: "515px", height: "20px", float: "right"}}>



         <input type="text" maxLength="20" onChange={this.handleChange}/>

         <input type="text" maxLength="20"  onChange={this.handleChange} placeholder={this.props.user}/>

             <button onClick={this.fetchData("aaa",111)}>prihlasit</button>

       </div>
       <button onClick={this.a}>dsds</button>
        <Header />

        <SearchBar mesto="Praha" />
        <CustomersCard />
        <CustomersCard />
        <CustomersCard />
        <Galery />
        <State />

      </div>
    )
  }

}
