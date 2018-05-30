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
    } else
    return false
  }

const hashCode = function(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}

const afterSignin = (login) => {
  alert("nyní jste zaregistrován a můžete se přihlásit: " + login)
  console.log(hashCode("bropsas"))
}

const getObject = () => {
  let obj ={};

  let beforeHashLogin = $("#pass").val()

  obj.login = $("#signLogin").val()
  obj.pass = hashCode(beforeHashLogin)

  console.log(hashCode(beforeHashLogin))
  return obj;
}

const signReq = (e) => {

  let login = $("div input:nth-child(1)").val()
  let pass = $("#signPass").val()
  let passAgain = $("#signPassAgain").val()
  //console.log(login + pass + passAgain)

  if (validatePass(pass, passAgain)) {
    let regData = {}
    fetch("http://localhost:3001/signin", {
      method: 'POST',
      body: JSON.stringify(getObject()),
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    });
  afterSignin(getObject().login);
  } else {
    alert("heslo nesedi nebo neni vyplnene")
  }
  }

const SigninForm = () => (
  <div style={{margin: 20, padding: 20, border: "1px solid black"}}>
    @email:&nbsp;
    <input id="signLogin" style={style.input} type="text" maxLength="20" />
    password:&nbsp;
    <input id="pass" style={style.input} type="text" maxLength="20" />
    password again:&nbsp;
    <input style={style.input} type="text" maxLength="20" />
    <button onClick={signReq}>signin</button>
  </div>
)



export default SigninForm
