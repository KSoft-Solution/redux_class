import React from 'react'
import { Loader, Message } from '../../components'
import styles from './index.module.scss'

const Carts = () => {
  return (
    <div className={styles.container}>
      <Loader/>
      <Message type='success' text='your mail sent successful'/>
      from carts
    </div>
  )
}

export default Carts
