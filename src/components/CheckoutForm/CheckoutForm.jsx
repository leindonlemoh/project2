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

            <div className="order__container">
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
            </div>

            <h3>Contact Information</h3>
            <span>Use this account to access materials and services related to your purchase</span>

            <form className="contact">
                <label htmlFor="email">Email Address</label><br />
                <input type="email" name="email" id="email" className='contact-email' /> <br />

                <label htmlFor="name">Name</label><br />
                <input type="text" className='name' /> <br />

                <input type="checkbox" name="checkbox" />
                <span> I agree to receive instructional and promotional emails. (optional).</span>
            </form>
            
        </div>
    </div>
  );
};

export default CheckoutForm;