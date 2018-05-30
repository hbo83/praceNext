import Layout from '../components/MyLayout.js'
import LoginForm from '../components/LoginForm.js'
import CustomersData from '../components/CustomersData.js'
import SigninForm from '../components/SigninForm.js'

export default () => (
  <div>
  <Layout>
    <p>login page</p>
  </Layout>

  <CustomersData town="plzen"/>

  </div>
)
