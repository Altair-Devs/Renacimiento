import React from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()

  return (
    <section>
      <h1>Painting: {query.id}</h1>
    </section>
  )
}

export default ProductPage
