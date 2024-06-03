import React from 'react'
import Styles from '../styles/Shoprite.module.css'
import { SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom'

export const Header2 = () => {
  return (
    <main className={Styles.Header2Main}>
      <section>
        <div className={Styles.Header2Div}>
          <Link to='/'><h3>Home</h3></Link>
          <SlArrowRight className={Styles.header2Arrow} />
          <h4>Shop</h4>
          <SlArrowRight className={Styles.header2Arrow} />          
          <h5>Shopping Cart</h5>
        </div>
      </section>
    </main>
  )
}
