import React, { useState } from 'react'
import { useGetAllProductQuery } from '../appStore/services/ApiData'
import Styles from '../styles/Products.module.css'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'  // Import the uuid library

export const AllProducts = () => {
    const [showAll, setShowAll] = useState(false)

    const handleToggle = () => {
        setShowAll(!showAll)
    }

    return (
        <main className={Styles.productListMain}>
            <section className={Styles.productListHeading}>
                <h4>Featured Products</h4>
                <h3>BESTSELLER PRODUCTS</h3>
                <p>Problems trying to resolve the conflict between </p>
            </section>
            <section className={Styles.productGrid}>
                <ProductCard showAll={showAll} />             
            </section>
            <div className={Styles.toggleShowAllButton}>
                <button onClick={handleToggle}>
                    {showAll ? 'Collapse' : 'Load More Products'}
                </button>
            </div>   
        </main>
    )
}

const ProductCard = ({ showAll }) => {
  const { data, isError, isLoading } = useGetAllProductQuery()

  if (isError) {
    return <h1>Error detected. Don't cry</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  // Determine the number of products to display
  const productsToShow = showAll ? data?.products : data?.products.slice(0, 10)

   // Function to calculate the discounted price
   const calculateDiscountedPrice = (price, discountPercentage) => {
    return (price - (price * discountPercentage / 100)).toFixed(2);
}

  return (
    <>
      {productsToShow?.map((p) => {
        // Ensure each product has a unique ID
        const productId = p.id || uuidv4()

        const discountPercentage = 20;
        const discountedPrice = calculateDiscountedPrice(p.price, discountPercentage);


        return (
          <main key={productId} className={Styles.productCard}>
            <Link to={`/products/${productId}`} className={Styles.detailsLink}>
              <img src={p.thumbnail} alt={p.title} />
            </Link>
            <section className={Styles.productCardSection}>
              <h3>{p.title}</h3>
              <p>Category: {p.category}</p>
              <div className={Styles.productCardPrice}>
                <span className={Styles.originalPrice}>${p.price.toFixed(2)}</span>
                <span className={Styles.discountedPrice}>${discountedPrice}</span>
              </div>
            </section>
          </main>
        )
      })}
    </>
  )
}








