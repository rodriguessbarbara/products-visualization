import React from 'react'
import { useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams();

  return (
    <div>Produto
      <h1>Produto: aa{params.id}</h1>

    </div>
  )
}

export default Produto