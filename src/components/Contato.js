import React from 'react'
import Head from './Head/Head';
import styles from './Contato.module.css'

const Contato = () => {
  return (
    <div className={styles.contato}>
      <Head title="PZation | Contato" description="Descrição de contato" />

      <h1>Contato</h1>
    </div>
  )
}

export default Contato;