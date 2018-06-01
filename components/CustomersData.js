import Link from 'next/link'


const style = {
  input: {
    marginRight: 20
  }
}

const update = () => {
  fetch("http://localhost:3001/update", {
    method: 'POST',
    body: JSON.stringify(getObject()),
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  });
}
export default class extends React.Component {

constructor(props) {
  super(props)

  this.state = {
                town: this.props.town,
                time: this.props.time,
                activity: this.props.activity,
                phone: this.props.phone,
                email: this.props.email,
                price: this.props.price,
  }
  this.updateData = this.updateData.bind(this)
  this.handleChangeTown = this.handleChangeTown.bind(this)
  this.handleChangeTime = this.handleChangeTime.bind(this)
  this.handleChangeActivity = this.handleChangeActivity.bind(this)
  this.handleChangePhone = this.handleChangePhone.bind(this)
  this.handleChangeEmail = this.handleChangeEmail.bind(this)
  this.handleChangePrice = this.handleChangePrice.bind(this)
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
  return(
<div style={{margin: 20, padding: 20, border: "1px solid black", display: "flex", alignItems: "flex-start", flexWrap: "wrap"}}>
  <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
    login:&nbsp;{this.props.user}
    <hr />
    password:&nbsp;
    <input style={style.input} type="password" maxLength="20" placeholder="password"/>
    <br />
    password again:&nbsp;
    <input style={style.input} type="password" maxLength="20" placeholder="password again"/>
    old password:&nbsp;
    <input style={style.input} type="password" maxLength="20"  placeholder="old password"/>
    <button>change</button>
  </div>
  <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
    town of activity:&nbsp;
    <input  id="town" style={style.input} type="text" maxLength="20"  value={this.state.town} onChange={this.handleChangeTown}/>
    <hr />
    time for work:&nbsp;
    <input  id="time" style={style.input} type="text" maxLength="20"  placeholder={this.props.time} onChange={this.handleChangeTime}/>
    <hr />

  </div>
  <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
    my activity:&nbsp;
    <textarea  id="description" rows="4" cols="50"  placeholder={this.props.activity} onChange={this.handleChangeActivity}>

    </textarea>

  </div>
  <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
    contact:&nbsp;
    <hr />
    phone:&nbsp;
    <input id="phone" style={style.input} type="text" maxLength="20"  placeholder={this.props.phone} onChange={this.handleChangePhone}/>
    <hr />
    email:&nbsp;
    <input id="email" style={style.input} type="text" maxLength="20"  placeholder={this.props.email} onChange={this.handleChangeEmail}/>


  </div>
  <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
    price:&nbsp;
    <hr />

    <input id="price" style={style.input} type="text" maxLength="20"  placeholder={this.props.price} onChange={this.handleChangePrice}/>
  </div>
  <div style={{width: "100%"}}>
  <button onClick={this.updateData}>change</button>
  </div>
</div>


  )
}

}
