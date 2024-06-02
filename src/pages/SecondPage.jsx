import React from 'react'
import { AllProducts, BandageFooter, BrandLogos, DescriptionInfo, Header2, Headers, SpecificProduct } from '../components'

export const SecondPage = () => {
  return (
    <section>
        <Headers />
        <Header2 />
        <SpecificProduct />
        <DescriptionInfo />
        <AllProducts />
        <BrandLogos />
        <BandageFooter />
    </section>
  )
}
