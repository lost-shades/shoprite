import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, removeFromCart } from '../appStore/features/CartSlice'
import Styles from '../styles/Products.module.css'; // Assuming you have some CSS styles for the cart

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <main className={Styles.cartContainerMain}>
        <section>
            <h1>Shopping Cart</h1>
            <table className={Styles.cartTables}>
                <thead>
                <tr className={Styles.cartTableTr}>
                    <th className={Styles.cartTable1}>Item Detail</th>
                    <th className={Styles.cartTable2}>Quantity</th>
                    <th className={Styles.cartTable3}>Price</th>
                </tr>
                </thead>
                <tbody>
                {cartItems.map(item => (
                    <tr key={item.id}>
                    <td>
                        <div className={Styles.itemDetail}>
                        <img src={item.thumbnail} alt={item.title} className={Styles.itemThumbnail} />
                        <div className={Styles.itemInfo}>
                            <h3>{item.title}</h3>
                            <p>{item.availability ? "In Stock" : "Out of Stock"}</p>
                            <p>Rating: {item.rating} ({item.numReviews} reviews)</p>
                            <button onClick={() => dispatch(removeFromCart({ id: item.id }))}>
                            <i className="fas fa-trash"></i> Remove
                            </button>
                        </div>
                        </div>
                    </td>
                    <td>
                        <div className={Styles.quantityControl}>
                            <button onClick={() => dispatch(decrement({ id: item.id }))}>-</button>
                            <span>{item.quantity}</span>
                            <button className={Styles.quantityControlPlus} onClick={() => dispatch(increment({ id: item.id }))}>+</button>
                        </div>
                    </td>
                    <td>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                        <p>(${item.price.toFixed(2)} x 1 item)</p>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
      
      <section className={Styles.cartSummary}>
        <div className={Styles.orderSummaryDiv}>
            <div className={Styles.orderSummary1}>
                <h3>Order Summary</h3>
                <p>{totalQuantity} items</p>
            </div>
            <div className={Styles.deliveryCharges}>
                <h5>Delivery Charges</h5>
                <p>Add your delivery address to checkout to see delivery charges</p>
            </div>
        </div>
        <div className={Styles.subTotalDiv}>
            <div className={Styles.subTotal}>
                <h5>SubTotal</h5>
                <p>${calculateTotalPrice()}</p>
            </div>
            <div className={Styles.subTotal}>
                <h4>Total</h4>
                <p className={Styles.totalPrice}>${calculateTotalPrice()}</p>
            </div>
            <div className={Styles.subTotalLastPDiv}>
                <p>Excluding Delivery Charges</p>
            </div>            
        </div>

        <div className={Styles.checkoutButtonDiv}>
            <button>Proceed to Checkout</button>
            <div>
                <img src="/Paystack - png.png" alt="" />
                <img src="/Mastercard - png.png" alt="" />
                <img src="/Visa Inc. - png.png" alt="" />
            </div>
        </div>
      </section>
    </main>
  );
};
