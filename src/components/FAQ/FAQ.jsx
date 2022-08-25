import React, {useState} from 'react';
import './FAQ.css';

const FAQ = () => {
        const [toggleFAQ, setToggleFAQ] = useState(false);
        const [toggleFAQ2, setToggleFAQ2] = useState(false);
        const [toggleFAQ3, setToggleFAQ3] = useState(false);
        const [toggleFAQ4, setToggleFAQ4] = useState(false);
        const [toggleFAQ5, setToggleFAQ5] = useState(false);
  return (
    <section id="faq" className="faq">
    <div className="faq-title flex">FAQ</div>
        <button className="accordion-item flex" onClick={() => {setToggleFAQ(true)}}><h2 className="label-IV">What is nerD. all about?</h2></button>
        
        {toggleFAQ && (
                <div className="accordion-content" onClick={() => {setToggleFAQ(false)}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt nostrum quidem? Doloremque nulla laudantium a.</p>
                </div>
        )}

            
        <button className="accordion-item flex" onClick={() => {setToggleFAQ2(true)}}><h2 className="label-III">What are the courses we offer?</h2></button>
         
        {toggleFAQ2 && (
                <div className="accordion-content" onClick={() => {setToggleFAQ2(false)}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt nostrum quidem? Doloremque nulla laudantium a.</p>
                </div>
        )}

        <button className="accordion-item flex" onClick={() => {setToggleFAQ3(true)}}><h2 className="label-II">How to apply to our courses?</h2></button>
        
        {toggleFAQ3 && (
                <div className="accordion-content" onClick={() => {setToggleFAQ3(false)}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt nostrum quidem? Doloremque nulla laudantium a.</p>
                </div>
        )}
        
        <button className="accordion-item flex" onClick={() => {setToggleFAQ4(true)}}><h2 className="label-I">What are the payment options?</h2></button>
        
        {toggleFAQ4 && (
                <div className="accordion-content" onClick={() => {setToggleFAQ4(false)}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt nostrum quidem? Doloremque nulla laudantium a.</p>
                </div>
        )}

        <button className="accordion-item flex" onClick={() => {setToggleFAQ5(true)}}><h2 className="label-I">What is the medium of instructions in nerD.?</h2></button>
        
        {toggleFAQ5 && (
                <div className="accordion-content" onClick={() => {setToggleFAQ5(false)}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt nostrum quidem? Doloremque nulla laudantium a.</p>
                </div>
        )}
</section>
  );
};

export default FAQ;