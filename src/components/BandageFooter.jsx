import React from 'react'
import { Button } from './Button'
import Styles from '../styles/Shoprite.module.css'

export const BandageFooter = () => {
  return (
    <main className={Styles.BandageFooterMain}>
      <section >
        <section className={Styles.BandageFooterSection1}>
          <div className={Styles.BandageFooterDiv1}>
            <h3>Bandage</h3>
            <div className={Styles.BandageFooterImgDiv}>
              <img src="/facebook footer.png" alt="" />
              <img src="/instagram footer.png" alt="" />
              <img src="/twitter footer.png" alt="" />
            </div>
          </div>
        </section>
      </section>
      <section className={Styles.BandageFooterSection2}>
        <section className={Styles.BandageFooterSection2A}>
          <div>
            <h5>Company Info</h5>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div>
            <h5>Legal</h5>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div>
            <h5>Features</h5>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
          <div>
            <h5>Resources</h5>
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
          <div>
            <h5>Get In Touch</h5>
            <div id={Styles.inputButtonDiv}>
              <input
              className={Styles.BandageFooterInput} 
              type="text"
              placeholder='Your Email'
               />
              <Button 
              customStyle={Styles.BandageFooterButton}
              Placeholder={'Your Email'}
              value={'Subscribe'}
              />
            </div>
            <p>Lore imp sum dolor Amit</p>
          </div>
        </section>
      </section>
      <section className={Styles.BandageFooterSection3}>
        <div>
          <h6>Made With Love By Finland All Right Reserved </h6>
        </div>
      </section>
    </main>
  )
}
