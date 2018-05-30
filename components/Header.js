import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  float: "right"
}

const Header = () => (
    <div style={{ display: "flex", flexDirection: "row-reverse", backgroundImage: "url(http://react.panelia.cz/Lister.jpg)"}}>
    <img src="http://react.panelia.cz/backGround.jpg" width="50" height="50" />

        <Link href="/signin">
          <button style={linkStyle}>signin</button>
        </Link>

        <Link href="/index">
          <button style={linkStyle}>home</button>
        </Link>

        <Link href="/login">
          <button style={linkStyle}>logged</button>
        </Link>
    </div>
)

export default Header
