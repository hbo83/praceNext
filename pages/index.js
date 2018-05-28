import Layout from '../components/MyLayout.js'
import SearchBar from '../components/SearchBar.js'
import CustomersCard from '../components/CustomersCard.js'
import Galery from '../components/Galery.js'
import obrazek from '../components/obrazek.js'
import State from '../components/State.js'


export default () => (



  <div>
    <Layout>
    <style jsx>{`

      p {
        color: red;
      }
      `}
    </style>
       <p>Hello Next.js</p>
    </Layout>
    <obrazek />
    <SearchBar mesto="Praha" />
    <CustomersCard />
    <Galery />
    <State />

  </div>
)
