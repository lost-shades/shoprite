import React from 'react'
import Styles from '../styles/Shoprite.module.css'

export const FeaturedProducts = () => {
  return (
    <main className={Styles.FProductsMain}>
      <section className={Styles.FProductsSection1}>
          <div className={Styles.DescriptionDiv}>
              <h4>Featured Products</h4>
              <h3>THE BEST SERVICES</h3>
              <p>Problems trying to resolve the conflict between </p>
          </div>
          <section className={Styles.FProductsSection2}>
              <div className={Styles.ServicesDiv1}>
                  <img src="book-reader.png" alt="" />
                  <h3>Easy Wins</h3>
                  <p>Get your best looking smile now!</p>
              </div>
              <div className={Styles.ServicesDiv2}>
                  <img src="carbon_book.png" alt="" />
                  <h3>Concrete</h3>
                  <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
              </div>
              <div className={Styles.ServicesDiv3}>
                  <img src="arrow-growth.png" alt="" />
                  <h3>Hack Growth</h3>
                  <p>Overcame any hurdle or any other problem.</p>
              </div>
          </section>
      </section>
    </main>
  )
}
