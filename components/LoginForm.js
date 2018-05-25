import Link from 'next/link'
import $ from 'jquery'

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
    });

  } else {
    alert("neco nesedi")
  }
  }

const LoginForm = () => (
  <div style={{margin: 20, padding: 20, border: "1px solid black"}}>
    login:&nbsp;
    <input style={style.input} type="text" maxLength="20" />
    password:&nbsp;
    <input style={style.input} type="text" maxLength="20" />
        <button onClick={loginReq}>login</button>
  </div>
)



export default LoginForm
