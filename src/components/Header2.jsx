import React from 'react'
import Styles from '../styles/Shoprite.module.css'

export const Header2 = () => {
  return (
    <main className={Styles.Header2Main}>
      <section>
        <div className={Styles.Header2Div}>
          <h3><a href=''>Home</a></h3>
          <img src="arrow-right icon.png" alt="" />
          <h4>Shop</h4>
        </div>
      </section>
    </main>
  )
}
