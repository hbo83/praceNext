import Link from 'next/link'

const style = {
  input: {
    marginRight: 20
  }
}

const changeReq = () => {
  $.ajax({
          url: "http://localhost:3001/update",
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
}
const CustomersData = () => (
    <div style={{margin: 20, padding: 20, border: "1px solid black", display: "flex", alignItems: "flex-start", flexWrap: "wrap"}}>
      <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
        login:&nbsp;
        <hr />
        password:&nbsp;
        <input style={style.input} type="password" maxLength="20" />
        <br />
        password again:&nbsp;
        <input style={style.input} type="password" maxLength="20" />
        <button onClick={changeReq}>change</button>
      </div>
      <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
        town of activity:&nbsp;
        <input style={style.input} type="text" maxLength="20" />
        <hr />
        time for work:&nbsp;
        <input style={style.input} type="text" maxLength="20" />
        <hr />

      </div>
      <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
        my activity:&nbsp;
        <textarea rows="4" cols="50">
        At w3schools.com you will learn how to make a
        website. We offer free tutorials in all web development technologies.
        </textarea>

      </div>
      <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
        contact:&nbsp;
        <hr />
        phone:&nbsp;
        <input style={style.input} type="text" maxLength="20" />
        <hr />
        email:&nbsp;
        <input style={style.input} type="text" maxLength="20" />


      </div>
      <div style={{margin: 0, padding: 20, border: "1px solid black"}}>
        price:&nbsp;
        <hr />

        <input style={style.input} type="text" maxLength="20" />
      </div>
      <div style={{width: "100%"}}>
      <button onClick={changeReq}>change</button>
      </div>
    </div>
)

export default CustomersData
