import Link from 'next/link'
import $ from 'jquery'
import State from '../components/State'

let login = {}

const style = {
  input: {
    marginRight: 20
  }
}

const validatePass = (pass, passAgain) => {
    if (pass === passAgain) {
      return true
    }
  }

const afterLogin = (login, pass, passAgain) => {
  alert("nyní jste prihlasen jako")


}



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
                   price: ""
                 }
    //this.al = this.al.bind(this)

  }


  getValues(){
    let data;
    let login = $("div input[type='text']:nth-child(1)").val();
    let pass = $("div input[type='password']:nth-child(2)").val();
    alert(login)
    data = {
      login: login,
      pass: pass
    }
    return data
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
    .then(json => this.setState( { user: json[0].login,
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

render() {
  return (
    <div style={{margin: 20, padding: 0, border: "1px solid black", display: "flex",width: "515px", height: "20px", float: "right"}}>

    {this.state.user}

      <input style={style.input} type="text" maxLength="20" placeholder={this.state.user}/>

      <input style={style.input} type="text" maxLength="20" placeholder="password"/>
          <button onClick={() => this.login(this.getValues())}>prihlasit</button>


    </div>
  )
}





}
