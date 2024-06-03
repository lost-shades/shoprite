import React from 'react'
import Styles from '../styles/Shoprite.module.css'
import { SlArrowRight } from 'react-icons/sl'

export const Header2 = () => {
  return (
    <main className={Styles.Header2Main}>
      <section>
        <div className={Styles.Header2Div}>
          <h3><a href=''>Home</a></h3>
          <SlArrowRight className={Styles.header2Arrow} />
          <h4>Shop</h4>
        </div>
      </section>
    </main>
  )
}
