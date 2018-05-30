import Header from './Header'
import LoginForm from '../components/LoginForm.js'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <LoginForm />
    {props.children}
  </div>
)

export default Layout
