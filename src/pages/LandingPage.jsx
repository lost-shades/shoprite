import React from 'react'
import { AllProducts, BandageFooter, FeaturedPosts, FeaturedProducts, Feedback, Headers, HeroSection, LandingSection5 } from '../components'

export const LandingPage = () => {
  return (
    <section>
        <Headers />
        <HeroSection />
        <AllProducts />
        <FeaturedProducts />
        <FeaturedPosts />
        <Feedback />
        <LandingSection5 />
        <BandageFooter />
    </section>
  )
}
