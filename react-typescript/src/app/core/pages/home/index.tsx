import React from 'react'

// import logo from 'app/core/resources/logo.svg'

import LabelType from 'components/atoms/LabelType'
import { Stories } from 'components/molecules/Stories '

import styles from './styles.module.scss'
// import Tag from 'components/atoms/Tag'

const Home = (): JSX.Element => {
  return (
    <main>

      <header className={styles.header}>
        {/* <img src={logo} className={styles.logo} alt="logo" />
        <p>Welcome to CKL Boilerplate</p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
       <Stories />
       {/* <Tag text='Xbox Series' /> */}
      </header>
      <LabelType text='#Games' />
    </main>
  )
}

export default Home
