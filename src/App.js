import './App.css';
import ListProducts from './components/ListProducts';
import {useState, useEffect} from 'react'

function App() {

  const [productos, setProductos] = useState([])
  const initData = async () => {
    const url = 'http://localhost:3000/api/v1/products'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    setProductos(data)
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <div>
      <ListProducts productos={productos} refresh={initData}/>
    </div>
  );
}

export default App;
