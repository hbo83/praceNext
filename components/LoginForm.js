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

const loginReq = (e) => {

  let login = $("div input[type='text']:nth-child(1)").val();
  let pass = $("div input[type='password']:nth-child(2)").val();


  if (true) {
    $.ajax({
            url: "http://localhost:3001/login",
            xhrFields: {
              withCredentials: true
            },
            data: {
              login: login,
              pass: pass
            }
    }).done( function(result) {
      console.log(result[0].login)
      alert(`jste prihlasen jako, ${result[0].login}`)
      login = result[0].login
    });

  } else {
    alert("neco nesedi")
  }
  }

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {currentSlide: 0, user: "none"}


  }


  getValues = () => {
    let login = $("div input[type='text']:nth-child(1)").val();
    let pass = $("div input[type='password']:nth-child(2)").val();
    let data = {
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
    .then(json => this.setState( { user: json[0].login } ) )

  }

render() {
  return (
    <div style={{margin: 20, padding: 20, border: "1px solid black"}}>
      login:&nbsp;
      <input style={style.input} type="text" maxLength="20" />
      password:&nbsp;
      <input style={style.input} type="text" maxLength="20" />
          <p>{this.props.user}: {this.state.user}</p>
          <button onClick={() => this.login(this.getValues())}>posli</button>

    </div>
  )
}





}
