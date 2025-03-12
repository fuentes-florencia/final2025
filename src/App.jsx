import { useEffect, useState } from 'react';
import './App.css';
import { Products } from './Componentes/Products';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getProducts = async () => {
    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"; 
    if (searchTerm) {
      url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    }
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data.drinks || []); 
  };

  useEffect(() => {
    getProducts();
  }, [searchTerm]); 

  if (products.length === 0) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      <h1>Catálogo de Cócteles</h1>
      <input
        type="text"
        placeholder="Buscar cóctel..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Products products={products} />
    </>
  );
}

export default App;