import React from 'react'
import Styles from '../styles/Shoprite.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Headers = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <section>
        <header className={Styles.header1}>
            <section className={Styles.header1A}>
                <section className={Styles.section1}>
                    <p><img src="/telephone-icon.png" alt="" /> (225) 555-0118</p>
                    <p><img src="/mail-icon.png" alt="" /> michelle.rivera@example.com</p>
                </section>
                <section>
                    <p>Follow Us  and get a chance to win 80% off</p>
                </section>
                <section className={Styles.section3}>
                    <p>Follow Us  :</p>             
                    <div className={Styles.socialIcons}>
                        <Link to='https://www.instagram.com/lost_shades/'><img src="/instagram-icon.png" alt="" /></Link>
                        <Link to='https://youtube.com/@Adaeze.?si=fU-vznDOzEIoW7Cl'><img src="/youtube-icon.png" alt="" /></Link>
                        <Link to='https://www.facebook.com/ugwuoke.adaeze.14?mibextid=LQQJ4d'><img src="/facebook-icon.png" alt="" /></Link>
                        <Link to='https://x.com/lostshades_?s=21'><img src="/twitter-icon.png" alt="" /></Link>
                    </div>              
                </section>
            </section>
        </header>
        <header className={Styles.header2}>
            <section className={Styles.header2H3}>
                <h3>Bandage</h3>
            </section>
            
            <section className={Styles.header2A}>
                <section>
                    <nav>
                        <ul>
                            <li className={Styles.homeLink}><Link to='/'>Home</Link></li>
                            <li>Shop <img src="/dropdown-icon.png" alt="" /></li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Pages</li>
                        </ul>
                    </nav>
                </section>
                <section className={Styles.header2B}>
                    <div>
                        <p><img src="/profile-icon.png" alt="" /> Login / Register</p>
                    </div>
                    <img src="/search-icon.png" alt="" />
                    <Link to='/CheckoutPage'>
                        <img src="/cart-icon.png" alt="" />
                        <span>{totalQuantity}</span>
                    </Link>
                    <img src="/favorites-icon.png" alt="" />
                </section>
            </section>
        </header>
    </section>
  )
}
