import React from 'react'
import Styles from '../styles/Shoprite.module.css'
import { SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom'

export const Header2 = () => {
  return (
    <main className={Styles.Header2Main}>
      <section>
        <div className={Styles.Header2Div}>
          <Link to='/'><h3 className={Styles.Header2Home}>Home</h3></Link>
          <div>
            <SlArrowRight className={Styles.header2Arrow} />
          </div>
          <h4>Shop</h4>
          <div>
            <SlArrowRight className={Styles.header2Arrow} />
          </div>          
          <h5>Shopping Cart</h5>
        </div>
      </section>
    </main>
  )
}
