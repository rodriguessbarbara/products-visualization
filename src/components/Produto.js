import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head/Head';
import styles from './Produtos.module.css';

const Produto = () => {
  const params = useParams();
  const [ produto, setProduto ] = useState(null);
  const [ carregando, setCarregando ] = useState(false);
  const [ erro, setErro ] = useState(null);

  useEffect(() => {
    async function fetchProduto(url) {
      try {
        setCarregando(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      }
      catch(erro) {
        setErro('Aconteceu um erro');
      }
      finally {
        setCarregando(false);
      }
    }

    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`);
  }, [params.id]);
  
  if (carregando) return <div className='carregando'></div>
  if (erro) return <p>{erro}</p>;
  if (produto === null) return null;

  return (
    <section className={styles.produto + " animarTelaEsquerda"}>
      <Head title={`PZation | ${produto.nome}`} description="PZation" />

      <div className={styles.fotos}>
        {produto.fotos.map((foto, index) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo}/>
        ))}
      </div>

      <div>
        <h1>Produto: {produto.nome}</h1>
        <span className={styles.preco}>R${produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  )
}

export default Produto