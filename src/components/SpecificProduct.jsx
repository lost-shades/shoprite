import React from 'react'
import { useGetProductByIdQuery } from '../appStore/services/ApiData'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../appStore/features/CartSlice'
import Styles from '../styles/Products.module.css'

export const SpecificProduct = () => {

  const { productId } = useParams()
  const {data, isError, isLoading} = useGetProductByIdQuery(productId)
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  
  if (isError) {
    return <h1>Error detected. Don't cry</h1>
  }

  if (isLoading) {
      return <h1>Loading...</h1>
  }

  return (
    <main className={Styles.specificProductMain}>
        <section className={Styles.specificProductImages}>
            <img src={data?.thumbnail} alt="" className={Styles.thumbnail} />
            <div className={Styles.littleImagesContainer}>
              {data?.images?.map((image, index) => (
                <img key={index} src={image} alt={`${data?.title} ${index}`} className={Styles.littleImage} />
              ))}
            </div>
        </section>
        <section className={Styles.specificProductDetails}>
          <div className={Styles.specificProductDiv1}>
            <h4>{data?.title}</h4>
              <p>{data?.description}</p>
              <div>
                  <p>review stars</p>
                  <h6>{data?.rating}</h6>
              </div>
              <h3>{data?.price}</h3>
              <div>
                  <h6>Availabilty: {data?.availabilityStatus}</h6>
              </div>
          </div>

          <div className={Styles.specificProductDiv2}>
              <div className={Styles.colorOptions}>
                  <img src="/public/Ellipse 14.png" alt="" />
                  <img src="/public/Ellipse 15.png" alt="" />
                  <img src="/public/Ellipse 16.png" alt="" />
                  <img src="/public/Ellipse 17.png" alt="" />
              </div>
              <div className={Styles.selectOptions}>
              <button>Select Options</button>
              <img src="/love icon.png" alt="" />
              <img src="/cart blue.png" alt="" onClick={handleAddToCart}/>
              <img src="/eyeicon.png" alt="" />
            </div>
          </div>
            
        </section>
    </main>
  )
}


