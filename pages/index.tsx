import React, { useEffect, useState} from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch('/api/painting')
      .then((response) => response.json())
      .then(({ data, length}) => {
        setProductList(data);
      })
  }, [])

  console.log(productList)

  return (
    <div>
      <Navbar />
      <h1>Renacimiento</h1>

      {productList.map((product) => (
        <div key={product.id}>
          <h3>{ product.name }</h3>
          <img src={product.image} alt={product.name}/>
        </div>
      ))}
    </div>
  )
}

export default HomePage;
