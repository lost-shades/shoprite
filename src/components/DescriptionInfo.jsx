import React from 'react'
import Styles from '../styles/Shoprite.module.css'

export const DescriptionInfo = () => {
  return (
    <main className={Styles.DescriptionMain}>
    <section>
      <section>
        <div className={Styles.Description1Div}>
          <p><a href=''>Description</a></p>
          <p><a href=''>Additional Information</a></p>
          <p><a href="">Reviews <span>(0)</span></a></p>
        </div>
      </section>
    </section>
    <section>
      <section className={Styles.Description2}>
        <div className={Styles.Description2Div}>
          <h3>the quick fox jumps over </h3>
          <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
        </div>
        <div className={Styles.Description2ImgDiv}>
          <img src="/description img.png" alt="" />
        </div>
      </section>
    </section>
  </main>
  )
}
