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
  this.updateData = this.updateData.bind(this)
  this.handleChangeTown = this.handleChangeTown.bind(this)
  this.handleChangeTime = this.handleChangeTime.bind(this)
  this.handleChangeActivity = this.handleChangeActivity.bind(this)
  this.handleChangePhone = this.handleChangePhone.bind(this)
  this.handleChangeEmail = this.handleChangeEmail.bind(this)
  this.handleChangePrice = this.handleChangePrice.bind(this)
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

updateData() {
  fetch('http://localhost:3001/update', {
    method: 'POST',
    body: JSON.stringify({
                          town: this.state.town,
                          time: this.state.time,
                          phone: this.state.phone,
                          email: this.state.email,
                          price: this.state.price,
                          activity: this.state.activity,
                          }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then(json => this.setState( {
    user: "fdfddf",
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

handleChangeTown(event) {
    this.setState({town: event.target.value});
    console.log(this.state.town)
  }

handleChangeTime(event) {
    this.setState({time: event.target.value});
    console.log(this.state.time)
  }

handleChangeActivity(event) {
    this.setState({activity: event.target.value});
    console.log(this.state.activity)
  }

handleChangePhone(event) {
    this.setState({phone: event.target.value});
    console.log(this.state.phone)
  }

handleChangeEmail(event) {
    this.setState({email: event.target.value});
    console.log(this.state.email)
  }

handleChangePrice(event) {
    this.setState({price: event.target.value});
    console.log(this.state.price)
  }


  render() {
    return (
       <div>
         <div style={{margin: 20, padding: 0, border: "1px solid black", display: "flex" ,width: "515px", height: "20px", float: "right"}}>

           <input type="text" maxLength="20" onChange={this.handleChangeLogin}/>
           <input type="text" maxLength="20" onChange={this.handleChangePass} placeholder={this.state.user}/>
           <button onClick={this.fetchData}>prihlasit</button>{this.state.phone}

         </div>



        <div style={{margin: 20, padding: 20, border: "1px solid black", display: "flex", alignItems: "flex-start", flexWrap: "wrap"}}>
          <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
            login:&nbsp;{this.props.user}
            <hr />
            password:&nbsp;
            <input type="password" maxLength="20" placeholder="password"/>
            <br />
            password again:&nbsp;
            <input type="password" maxLength="20" placeholder="password again"/>
            old password:&nbsp;
            <input type="password" maxLength="20"  placeholder="old password"/>
            <button>change</button>
          </div>
          <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
            town of activity:&nbsp;
            <input  id="town" type="text" maxLength="20"  value={this.state.town} onChange={this.handleChangeTown}/>
            <hr />
            time for work:&nbsp;
            <input  id="time" type="text" maxLength="20"  value={this.state.time} onChange={this.handleChangeTime}/>
            <hr />

          </div>
          <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
            my activity:&nbsp;
            <textarea  id="description" rows="4" cols="50"  value={this.state.activity} onChange={this.handleChangeActivity}>

            </textarea>

          </div>
          <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
            contact:&nbsp;
            <hr />
            phone:&nbsp;
            <input id="phone" type="text" maxLength="20"  value={this.state.phone} onChange={this.handleChangePhone}/>
            <hr />
            email:&nbsp;
            <input id="email" type="text" maxLength="20"  value={this.state.email} onChange={this.handleChangeEmail}/>


          </div>
          <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
            price:&nbsp;
            <hr />

            <input id="price" type="text" maxLength="20"  value={this.state.price} onChange={this.handleChangePrice}/>
          </div>
          <div style={{width: "100%"}}>
          <button onClick={this.updateData}>change</button>
          </div>
        </div>
      </div>
    )
  }



}
