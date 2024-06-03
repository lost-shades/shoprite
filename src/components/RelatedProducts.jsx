
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
    <main id={Styles.relatedProductsMain}>
      <h3 className={Styles.relatedProductTitle}>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
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

  // Function to calculate the discounted price
  const calculateDiscountedPrice = (price, discountPercentage) => {
    return (price - (price * discountPercentage / 100)).toFixed(2);
  }

  const discountPercentage = 20;

  return (
    <div className={Styles.relatedProductsCategory}>
      <section className={Styles.relatedProductsGrid}>
        {relatedProductsData?.products?.map((product) => {
          const discountedPrice = calculateDiscountedPrice(product.price, discountPercentage);

          return (
            <div key={product.id} className={Styles.relatedProductCard}>
              <Link to={`/products/${product.id}`} className={Styles.detailsLink}>
                <img src={product.thumbnail} alt={product.title} />
              </Link>
              <section className={Styles.productCardSection}>
                <h3>{product.title}</h3>
                <p>Category: {product.category}</p>
                <div className={Styles.productCardPrice}>
                  <span className={Styles.originalPrice}>${product.price.toFixed(2)}</span>
                  <span className={Styles.discountedPrice}>${discountedPrice}</span>
                </div>
              </section>
            </div>
          );
        })}
      </section>
    </div>
  );
};





// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useGetRelatedProductsQuery } from '../appStore/services/ApiData';
// import Styles from '../styles/Products.module.css';
// import { Link } from 'react-router-dom';

// export const RelatedProducts = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     // Extract categories from cart items
//     const uniqueCategories = [...new Set(cartItems.map((item) => item.category))];
//     setCategories(uniqueCategories);
//   }, [cartItems]);

//   return (
//     <main id={Styles.relatedProductsMain}>
//       <h3>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
//       {categories.map((category) => (
//         <RelatedProductsByCategory key={category} category={category} />
//       ))}
//     </main>
//   );
// };

// const RelatedProductsByCategory = ({ category }) => {
//   const { data: relatedProductsData, isError, isLoading } = useGetRelatedProductsQuery(category);

//   if (isError) {
//     return <h1>Error detected. Don't cry</h1>;
//   }

//   if (isLoading) {
//     return <h1>Loading related products...</h1>;
//   }

//   const calculateDiscountedPrice = (price, discountPercentage) => {
//     return (price - (price * discountPercentage / 100)).toFixed(2);
//   }

//   const discountPercentage = 20;

//   return (
//     <div className={Styles.relatedProductsCategory}>
//       <section className={Styles.relatedProductsGrid}>
//         {relatedProductsData?.products?.map((product) => (
          
//           const discountedPrice = calculateDiscountedPrice(product.price, discountPercentage);


//           <div key={product.id} className={Styles.relatedProductCard}>
//             <Link to={`/products/${product.id}`} className={Styles.detailsLink}>
//               <img src={product.thumbnail} alt={product.title} />
//             </Link>
//             <section className={Styles.productCardSection}>
//               <h3>{product.title}</h3>
//               <p>Category: {product.category}</p>
//               <div className={Styles.productCardPrice}>
//                 <span className={Styles.originalPrice}>${product.price.toFixed(2)}</span>
//                 <span className={Styles.discountedPrice}>${discountedPrice}</span>
//               </div>
//             </section>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };


