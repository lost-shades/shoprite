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
                <div className={Styles.toggleShowAllButton}>
                    <button onClick={handleToggle}>
                        {showAll ? 'Collapse' : 'Load More Products'}
                    </button>
                </div>                
            </section>
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

  return (
    <>
      {productsToShow?.map((p) => {
        // Ensure each product has a unique ID
        const productId = p.id || uuidv4()
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
                {/* <span className={Styles.discountedPrice}>${discountedPrice}</span> */}
              </div>
            </section>
          </main>
        )
      })}
    </>
  )
}






















































// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { ProductCard } from './ProductCard';
// import Styles from '../styles/Products.module.css'


// export const ProductList = () => {
//   const dispatch = useDispatch();
//   const { items, status, error, limit, skip } = useSelector((state) => state.products);

//   const [showAllProducts, setShowAllProducts] = useState(false)

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(FetchProducts({ limit, skip }));
//     }
//   }, [status, dispatch, limit, skip]);

//   const handleToggleProducts = () => {
//     if (showAllProducts) {
//       setShowAllProducts(false);
//     } else {
//       dispatch(incrementSkip());
//       dispatch(FetchProducts({ limit, skip: skip + limit }));
//       setShowAllProducts(true);
//     }
//   };

//   const getUniqueItems = (items) => {
//     const seen = new Set();
//     return items.map((item, index) => {
//       if (seen.has(item.id)) {
//         return { ...item, id: `${item.id}-${index}` };
//       } else {
//         seen.add(item.id);
//         return item;
//       }
//     });
//   };

//   const uniqueItems = getUniqueItems(items);
//   const displayedItems = showAllProducts ? uniqueItems : uniqueItems.slice(0, 10);

//   let content;

//   if (status === 'loading') {
//     content = <p>Loading...</p>;
//   } else if (status === 'succeeded') {
//     content = (
//       <div className={Styles.productGrid}>
//         {displayedItems.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     );
//   } else if (status === 'failed') {
//     content = <p>{error}</p>;
//   }

//   return (
//     <main className={`${Styles.productListMain} ${showAllProducts ? Styles.expanded : ''}`}>
//       <section className={Styles.productListSection1}>
//           <section className={Styles.productlListHeading}>
//             <h4>Featured Products</h4>
//             <h3>BESTSELLER PRODUCTS</h3>
//             <p>Problems trying to resolve the conflict between </p>
//           </section>
//           <section className={Styles.productList}>
//             {content}
//             {items.length > 10 && (
//             <ToggleShowAllButton
//               onClick={handleToggleProducts}
//               showAllProducts={showAllProducts}
//             />
//           )}
//           </section>
//       </section>
//     </main>
//   );
// };


//   const ToggleShowAllButton = ({ onClick, showAllProducts }) => (
//       <div className={Styles.toggleShowAllButton}>
//         <button onClick={onClick}>
//           {showAllProducts ? 'Collapse' : 'Load More Products'}
//         </button>
//       </div>
//   );

