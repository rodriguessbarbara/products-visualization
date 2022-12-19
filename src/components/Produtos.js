import React from 'react'
import Head from './Head/Head';
import styles from './Produtos.module.css'

// import { Routes, Route, NavLink } from 'react-router-dom';

const Home = () => {
  const produtos = fetch('https://ranekapi.origamid.dev/json/api/produto')
                    .then((response) => response.json())
                    .then((obj) => console.log(obj))
  
  // async function getProducts() {
  //   let response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
  //   let data = await response.json();
  //   // console.log(typeof(data));
  //   return data;
  // }
  // getProducts();


  return (
    <div className={styles.produtos}>
      <Head title="PZation" description="Página inicial de produtos" />
      <h1>Produtos</h1>
      {/* {produtos.map((produto) => (
        console.log(produto)
      ))} */}

      {/* <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes> */}
    </div>
  )
}

export default Home;