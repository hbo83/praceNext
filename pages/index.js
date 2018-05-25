import Layout from '../components/MyLayout.js'
import SearchBar from '../components/SearchBar.js'
import CustomersCard from '../components/CustomersCard.js'
import Galery from '../components/Galery.js'

export default () => (
  <div>
    <Layout>
       <p>Hello Next.js</p>
    </Layout>
    <SearchBar />
    <CustomersCard />
    <Galery />

  </div>
)
