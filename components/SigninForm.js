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

const afterSignin = (login, pass, passAgain) => {
  alert("nyní jste zaregistrován a můžete se přihlásit")
  $("div input[type='text']:nth-child(1)").val("")
  $("div input[type='text']:nth-child(2)").val("")
  $("div input[type='text']:nth-child(3)").val("")
}

const signReq = (e) => {

  let login = $("div input[type='text']:nth-child(1)").val();
  let pass = $("div input[type='text']:nth-child(2)").val();
  let passAgain = $("div input[type='text']:nth-child(3)").val()

  if (validatePass(pass, passAgain)) {
    $.ajax({
      url: "http://localhost:3001/signin",
      xhrFields: {
        withCredentials: true
      },
      data: { login: login, pass: pass, passAgain: passAgain}
    });
  afterSignin(login);
  } else {
    alert("heslo nesedi")
  }
  }

const SigninForm = () => (
  <div style={{margin: 20, padding: 20, border: "1px solid black"}}>
    login:&nbsp;
    <input style={style.input}type="text" />
    password:&nbsp;
    <input style={style.input}type="text" />
    password again:&nbsp;
    <input style={style.input}type="text" />
    <button onClick={signReq}>signin</button>
  </div>
)



export default SigninForm