import React, { useState} from 'react'
import { useGetProductByIdQuery } from '../appStore/services/ApiData'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../appStore/features/CartSlice'
import Styles from '../styles/Products.module.css'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

export const SpecificProduct = () => {

  const { productId } = useParams()
  const {data, isError, isLoading} = useGetProductByIdQuery(productId)
  const dispatch = useDispatch();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  
  if (isError) {
    return <h1>Error detected. Don't cry</h1>
  }

  if (isLoading) {
      return <h1>Loading...</h1>
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className={Styles.specificProductMain}>
      <section className={Styles.specificProductImages}>
        <div className={Styles.thumbnailContainer}>
          <img
            src={data?.images[currentImageIndex]}
            alt=""
            className={Styles.thumbnail}
          />
          <button onClick={handlePrevImage} className={Styles.leftArrow}>
            {/* &#9664; */}
            <SlArrowLeft />
          </button>
          <button onClick={handleNextImage} className={Styles.rightArrow}>
            {/* &#9654; */}
            <SlArrowRight />
          </button>
        </div>
        <div className={Styles.littleImagesContainer}>
          {data?.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${data?.title} ${index}`}
              className={Styles.littleImage}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </section>

        <section className={Styles.specificProductDetails}>
          <div className={Styles.specificProductDiv1}>
            <h4>{data?.title}</h4>
              <p>{data?.description}</p>
              <div className={Styles.starReviews}>
                  <img src="/Star1.png" alt="" />
                  <img src="/Star1.png" alt="" />
                  <img src="/Star1.png" alt="" />
                  <img src="/Star1.png" alt="" />
                  <img src="/Star2.png" alt="" />
                  <h6>{data?.rating} Reviews</h6>
              </div>
              <h3>${data?.price}</h3>
              <div>
                  <h6>Availabilty: <span>{data?.availabilityStatus}</span></h6>
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


