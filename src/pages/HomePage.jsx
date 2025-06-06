import React from 'react';
import ProductList from '../components/ProductList';
import Hero from '../components/hero';
import Reassurance from '../components/reassurances';
import Newsletter from '../components/newsletter';
import PopularProducts from "../components/PopularProducts";


function App() {
  return (
    <div className="App">
      <Hero/>
      <Reassurance />
      <PopularProducts />
      <Newsletter />
    </div>
  );
}

export default App;
