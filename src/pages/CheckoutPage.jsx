import React from 'react'
import { BandageFooter, Cart, Header2, Headers, RelatedProducts } from '../components'

export const CheckoutPage = () => {
  return (
    <div>
        <Headers />,
        <Header2 />
        <Cart />
        <RelatedProducts />
        <BandageFooter />
    </div>
  )
}
