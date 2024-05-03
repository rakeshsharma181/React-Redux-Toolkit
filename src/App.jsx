
import './App.css'
import products from "./products.json";
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <Cart/>
   <div className="products">
        {products.map((product) => (
          <Product key ={product.id} {...product} />
        ))}
      </div>
    </>
  )
}

export default App
