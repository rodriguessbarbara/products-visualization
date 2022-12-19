import React from 'react'
import Head from './Head/Head';
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'

const Contato = () => {
  return (
    <div className={styles.contato}>
      <Head title="PZation | Contato" description="Descrição de contato" />

      <img src={foto} alt='máquina de escrever'/>
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.lista}>
          <li>email@dominio.com</li>
          <li>99999-9999</li>
          <li>Rua Etc e Tal, 100</li>
        </ul>
      </div>
    </div>
  )
}

export default Contato;