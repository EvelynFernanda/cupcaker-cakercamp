import LabelType from 'components/atoms/LabelType'
import React from 'react'

import styles from './styles.module.scss'
// import Tag from 'components/atoms/Tag'

const Home = (): JSX.Element => {
  return (
    <main>
      <header className={styles.header}>
       {/* <Tag text='Xbox Series' /> */}
      </header>
      <LabelType text='#Games' />
    </main>
  )
}

export default Home
