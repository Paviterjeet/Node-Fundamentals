import data from '../items.js'
import ItemCard from './commponents/ItemCard.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './commponents/Header.jsx';

function App() {
 
  return (
<>

<Header></Header>
    <div className='container py-4 align-items-center d-flex flex-wrap gap-4'>
      {
        data.map((item)=>(
          <ItemCard item={item} key={item.itemId}></ItemCard>
        )
      )
      }
      </div>
   </>
  )
}

export default App
