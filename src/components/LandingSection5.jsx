import React from 'react'
import { Button } from './Button'
import Styles from '../styles/Shoprite.module.css'

export const LandingSection5 = () => {
  return (
    <main className={Styles.LandingSection5main}>
      <section className={Styles.LandingSection5Section}>
        <div className={Styles.LandingSection5Div}>
          <h6>Designing Better Experience</h6>
          <h2>Problems trying to resolve the conflict between </h2>
          <p>Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
          <h3>$16.48</h3>
          <div>
          <Button 
          customStyle={Styles.section5Button}
          value={"ADD YOUR CALL TO ACTION"}/>
          </div>
        </div>
      </section>
    </main>
  )
}
