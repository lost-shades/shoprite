import React from 'react'
import Styles from '../styles/Shoprite.module.css'

export const FeaturedPosts = () => {
  return (
    <main className={Styles.featuredPostMain}>
        <section className={Styles.featuredPostContainer}>
            <div className={Styles.featuredPostHeading}>
                <h6>Practice Advice</h6>
                <h2>Featured Posts</h2>
            </div>
            <div className={Styles.cardDivs}>
                <div>
                <FeaturedPostCard image={"/featuredPost-img1.png"}/>
                </div>
                <div>
                <FeaturedPostCard image={"/featuredPost-img2.png"}/>
                </div>
                <div>
                <FeaturedPostCard image={"/featuredPost-img3.png"}/>
                </div>
            </div>
        </section>
    </main>
  )
}


const FeaturedPostCard = ({image}) => {
    return (
        <main className={Styles.featuredPostCard}>
            <section className={Styles.overlaySection}>
                <img src={image} alt="" />
                <h6 className={Styles.overlayText}> NEW</h6>
            </section>
            <section className={Styles.FeaturedPostSection2}>
                <div className={Styles.googleTrendNew}>
                    <small className={Styles.google}>Google</small>
                    <small className={Styles.trending}>Trending</small>
                    <small className={Styles.new}>New</small>
                </div>        
                <h4>Loudest à la Madison #1 <br/> (L'integral)</h4>                
                <p>
                    We focus on ergonomics and meeting 
                    you where you work. It's only a 
                    keystroke away.
                </p>
                <div className={Styles.dateComment}>
                    <p className={Styles.date}>
                        <img src="/clock-icon.png" alt="" />
                        <small> 22 April 2021</small>                        
                    </p>
                    <p className={Styles.comments}>
                        <img src="/comments-icon.png" alt="" /> 
                        <small>10 comments</small>
                    </p>
                </div>
                <h6>Learn More <img src="/sidearrow-icon.png" alt="" /></h6>
            </section>
        </main>
    )
}