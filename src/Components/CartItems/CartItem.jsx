import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export default function CartItem() {
    const { getTotalCartAmount, all_product, CartItem, removeFromCart} = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (CartItem[e.id] > 0) {
                    return <div>
                        <div className="cartitems-format">
                            <img className='carticon-product-icon' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>{e.new_price}</p>
                            <button className="cartitems-quantity">{CartItem[e.id]}</button>
                            <p>{e.new_price*CartItem[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr/>
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shopping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
