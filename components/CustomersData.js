import Link from 'next/link'
import $ from 'jquery'

const style = {
  input: {
    marginRight: 20
  }
}

const getObject = () => {
  let obj ={};



  obj.town = $("#town").val()
  obj.time = $("#time").val()
  obj.activity = $("#activity").val()
  obj.phone = $("#phone").val()
  obj.email = $("#email").val()
  obj.price = $("#price").val()
 console.log(obj)
  return obj;
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
const CustomersData = () => (
  
    <div style={{margin: 20, padding: 20, border: "1px solid black", display: "flex", alignItems: "flex-start", flexWrap: "wrap"}}>
      <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
        login:&nbsp;
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
        <input  id="town" style={style.input} type="text" maxLength="20"  placeholder="town"/>
        <hr />
        time for work:&nbsp;
        <input  id="time" style={style.input} type="text" maxLength="20"  placeholder="time"/>
        <hr />

      </div>
      <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
        my activity:&nbsp;
        <textarea  id="description" rows="4" cols="50"  placeholder="description">

        </textarea>

      </div>
      <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
        contact:&nbsp;
        <hr />
        phone:&nbsp;
        <input id="phone" style={style.input} type="text" maxLength="20"  placeholder="phone"/>
        <hr />
        email:&nbsp;
        <input id="email" style={style.input} type="text" maxLength="20"  placeholder="email"/>


      </div>
      <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
        price:&nbsp;
        <hr />

        <input id="price" style={style.input} type="text" maxLength="20"  placeholder="password"/>
      </div>
      <div style={{width: "100%"}}>
      <button onClick={update}>change</button>
      </div>
    </div>
)

export default CustomersData
