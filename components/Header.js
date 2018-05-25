import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  float: "right"
}

const Header = () => (
    <div>
        <Link href="/signin">
          <button style={linkStyle}>signin</button>
        </Link>
        <Link href="/login">
          <button style={linkStyle}>login</button>
        </Link>
        <Link href="/index">
          <button style={linkStyle}>home</button>
        </Link>
    </div>
)

export default Header
