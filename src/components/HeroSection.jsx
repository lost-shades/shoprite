import React from 'react'
import Styles from '../styles/Shoprite.module.css'

export const HeroSection = () => {
  return (
    <main className={Styles.heroSectionmain}>
        <section className={Styles.heroSection2}>
            <section className={Styles.fourCards}>
                <HeroSectionCard customStyle={Styles.card1}/>
                <div className={Styles.threeCards}>
                    <HeroSectionCard customStyle={Styles.card2}/>
                    <div className={Styles.twoCards}>
                        <HeroSectionCard customStyle={Styles.card3}/>
                        <HeroSectionCard customStyle={Styles.card4}/>
                    </div>
                </div>
            </section>
        </section>
    </main>
  )
}

const HeroSectionCard = ({customStyle})=>{
    return(
      <section className={`${customStyle}`}>
            <div className={Styles.heroSectionText}>
                <p className={Styles.heroSectionP}>5 items</p>
                <h2>FURNITURE</h2>
                <p>Read more</p>
            </div>
        </section>
    )
}