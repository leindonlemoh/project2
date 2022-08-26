import React from 'react';
import './CheckoutForm.css';

const CheckoutForm = (props) => {
  return (
    <div className="checkout-form__main-container">
        <header className="checkout">
            <h1 className="logo">nerD.</h1>
        </header>

        <div className="checkout-form__container">
            <h3>Order Summary</h3>
            <span><em>*required</em></span>

            <form className="order__container">
                <div className="order flex">
                    <div className="order__image">
                        <img src={props.image} alt={props.alt} />
                    </div>
                    <div className="order__details">
                        <div className="order__title">
                            {props.title}
                        </div>
                        <div className="order__price">
                            {props.price}
                        </div>
                    </div>
                </div>
                <div className="order__bill flex">
                    <span>Billed Today</span>
                    <span>{props.price}</span>
                </div>
            </form>

            <h3>Contact Information</h3>
            <span>Use this account to access materials and services related to your purchase</span>

            <form className="contact">
                <label htmlFor="email">*Email Address</label><br />
                <input type="email" name="email" id="email" className='contact-email'placeholder='name@example' /> <br />

                <label htmlFor="name">*Name</label><br />
                <input type="text" className='name' placeholder='Juan Dela Cruz' /> <br />

                <input type="checkbox" name="checkbox" />
                <span> I agree to receive instructional and promotional emails. (optional).</span>
            </form>

            <h3>Payment Information</h3>
            <span>This is a secure 128-bit SSL encrypted payment.</span>

            <form className="payment">
               <div className="payment-method flex">
               <input type="radio" name="paypal"  /> <img src={require("../../image/paypal.png")} alt="paypal" /> 
               </div>

              <div className="credit flex">
              <input type="radio" name="card" checked="ckecked" /> Credit or Debit Card <br/>
              </div>



               <label htmlFor="name">*Name on Card</label><br />
                <input type="text" className='name' placeholder='Juan Dela Cruz' /> <br />

               <label htmlFor="name">*Card Number</label><br />
                <input type="text" className='name' placeholder='1234 1234 1234 1234' /> <br />

                <div className="last flex">
               <div>
               <label htmlFor="name">*Expiration Date</label>
                <br/>
                <input type="text" className='name' placeholder='MM / YY' />
               </div>

                <div>
                <label htmlFor="name">*CVC Code</label>
                <br/>
                <input type="text" className='name' placeholder='CVC' />
                </div>
                </div>

                <input type="checkbox" checked="checked" /> Save my billing info for future purchases.

            
            </form>

            <button type='button' className="checkout">Continue Checkout</button>
            
        </div>
    </div>
  );
};

export default CheckoutForm;