import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Head from './Head/Head';
import styles from './Produtos.module.css';

const Home = () => {
  const [ produtos, setProdutos ] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then(response => response.json())
      .then(json => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <section className={styles.produtos + " animarTelaEsquerda"}>
      <Head title="PZation" description="Página inicial de produtos" />

      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}/>
          <h2 className={styles.nome}>{produto.nome}</h2>
        </Link>
      ))}

    </section>
  )
}

export default Home;