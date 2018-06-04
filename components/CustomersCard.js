

const CustomersCard = () => (
  <div style={{margin: 20, padding: 20, border: "1px solid #DDD", display: "flex", alignItems: "flex-start", flexWrap: "wrap"}}>
    <div style={{width: "100%"}}>
      login
    </div>


    <div style={{margin: 5, padding: 20, border: "1px solid black"}}>
      <img src="http://react.panelia.cz/backGround.jpg" width="100" height="100" />
    </div>
    <div style={{margin: 5, padding: 10, border: "1px solid black"}}>
      <ul>
        <li>lesteni</li>
        <li>vysavani</li>
        <li>zehleni</li>
      </ul>
    </div>
    <div style={{margin: 5, padding: 10, border: "1px solid black", maxWidth: "50%"}}>
      <p>
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" +
         "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to" +
          "make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting," +
           "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing " +
           "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      </p>
    </div>
    <div style={{margin: 5, padding: 20, border: "1px solid black"}}>
      spokojenost: 74%
    </div>
    <div style={{margin: 5, padding: 20, border: "1px solid black"}}>
      phone: 777 777 777
      <br />
      email: fd@ss.com
    </div>
  </div>
)

export default CustomersCard
