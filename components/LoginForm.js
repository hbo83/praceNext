import Link from 'next/link'



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



render() {
  return (
    <div style={{margin: 20, padding: 0, border: "1px solid black", display: "flex" ,width: "515px", height: "20px", float: "right"}}>



      <input style={style.input} type="text" maxLength="20" placeholder="login"/>

      <input style={style.input} type="text" maxLength="20" placeholder={this.props.user}/>



    </div>
  )
}





}
