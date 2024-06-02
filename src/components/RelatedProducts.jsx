import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetRelatedProductsQuery } from '../appStore/services/ApiData';
import Styles from '../styles/Products.module.css';
import { Link } from 'react-router-dom';

export const RelatedProducts = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Extract categories from cart items
    const uniqueCategories = [...new Set(cartItems.map((item) => item.category))];
    setCategories(uniqueCategories);
  }, [cartItems]);

  return (
    <main className={Styles.relatedProductsMain}>
      <h3>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
      {categories.map((category) => (
        <RelatedProductsByCategory key={category} category={category} />
      ))}
    </main>
  );
};

const RelatedProductsByCategory = ({ category }) => {
  const { data: relatedProductsData, isError, isLoading } = useGetRelatedProductsQuery(category);

  if (isError) {
    return <h1>Error detected. Don't cry</h1>;
  }

  if (isLoading) {
    return <h1>Loading related products...</h1>;
  }

  return (
    <div className={Styles.relatedProductsCategory}>
      <section className={Styles.relatedProductsGrid}>
        {relatedProductsData?.products?.map((product) => (
          <div key={product.id} className={Styles.relatedProductCard}>
            <Link to={`/products/${product.id}`} className={Styles.detailsLink}>
              <img src={product.thumbnail} alt={product.title} />
            </Link>
            <section className={Styles.productCardSection}>
              <h3>{product.title}</h3>
              <p>Category: {product.category}</p>
              <div className={Styles.productCardPrice}>
                <span className={Styles.originalPrice}>${product.price.toFixed(2)}</span>
              </div>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
};









//     const [showAll, setShowAll] = useState(false)

//     const handleToggle = () => {
//         setShowAll(!showAll)
//     }

//     return (
//         <main className={Styles.productListMain}>
//             <section className={Styles.productListHeading}>
//                 <h3>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
//             </section>
//             <section className={Styles.productGrid}>
//                 <ProductCard showAll={showAll} />
//                 <div className={Styles.toggleShowAllButton}>
//                     <button onClick={handleToggle}>
//                         {showAll ? 'Collapse' : 'Load More Products'}
//                     </button>
//                 </div>                
//             </section>
//         </main>
//     )
// }

// const ProductCard = ({ showAll }) => {
//   const { data, isError, isLoading } = useGetRelatedProductsQuery()

//   if (isError) {
//     return <h1>Error detected. Don't cry</h1>
//   }

//   if (isLoading) {
//     return <h1>Loading...</h1>
//   }

//   // Determine the number of products to display
//   const productsToShow = showAll ? data?.products : data?.products.slice(0, 10)

//   return (
//     <>
//       {productsToShow?.map((p) => {
//         // Ensure each product has a unique ID
//         const productId = p.id || uuidv4()
//         return (
//           <main key={productId} className={Styles.productCard}>
//             <Link to={`/products/${productId}`} className={Styles.detailsLink}>
//               <img src={p.thumbnail} alt={p.title} />
//             </Link>
//             <section className={Styles.productCardSection}>
//               <h3>{p.title}</h3>
//               <p>{p.category}</p>
//               <div className={Styles.productCardPrice}>
//                 <span className={Styles.originalPrice}>${p.price.toFixed(2)}</span>
//                 {/* <span className={Styles.discountedPrice}>${discountedPrice}</span> */}
//               </div>
//             </section>
//           </main>
//         )
//       })}
//     </>
//   )
// }




















































// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useGetRelatedProductsQuery } from '../appStore/services/ApiData'
// import Styles from '../styles/Products.module.css'
// import { Link } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid'  // Import the uuid library

// export const RelatedProducts = () => {
//     const [showAll, setShowAll] = useState(false)

//     const handleToggle = () => {
//         setShowAll(!showAll)
//     }

//     return (
//         <main className={Styles.productListMain}>
//             <section className={Styles.productListHeading}>
//                 <h3>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
//             </section>
//             <section className={Styles.productGrid}>
//                 <ProductCard showAll={showAll} />
//                 <div className={Styles.toggleShowAllButton}>
//                     <button onClick={handleToggle}>
//                         {showAll ? 'Collapse' : 'Load More Products'}
//                     </button>
//                 </div>                
//             </section>
//         </main>
//     )
// }

// const ProductCard = ({ showAll }) => {
//   const { data, isError, isLoading } = useGetRelatedProductsQuery()

//   if (isError) {
//     return <h1>Error detected. Don't cry</h1>
//   }

//   if (isLoading) {
//     return <h1>Loading...</h1>
//   }

//   // Determine the number of products to display
//   const productsToShow = showAll ? data?.products : data?.products.slice(0, 10)

//   return (
//     <>
//       {productsToShow?.map((p) => {
//         // Ensure each product has a unique ID
//         const productId = p.id || uuidv4()
//         return (
//           <main key={productId} className={Styles.productCard}>
//             <Link to={`/products/${productId}`} className={Styles.detailsLink}>
//               <img src={p.thumbnail} alt={p.title} />
//             </Link>
//             <section className={Styles.productCardSection}>
//               <h3>{p.title}</h3>
//               <p>{p.category}</p>
//               <div className={Styles.productCardPrice}>
//                 <span className={Styles.originalPrice}>${p.price.toFixed(2)}</span>
//                 {/* <span className={Styles.discountedPrice}>${discountedPrice}</span> */}
//               </div>
//             </section>
//           </main>
//         )
//       })}
//     </>
//   )
// }



