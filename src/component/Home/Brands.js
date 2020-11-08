import React from 'react';
import amd from '../../images/amd.png'
import beats from '../../images/beats.png'
import ebay from '../../images/ebay.png'
import intel from '../../images/intel.png'
import paypal from '../../images/paypal.png'

const Brands = () => {
    return (
        <section className="brands banner" id="brand">
            <div className="container">
                <div className="experience__header brand__header">
                    <h3>We Design brands</h3>
                    <p>A simple look is all you need to crush your competition</p>
                </div>
                <div className="brands__logos">
                    <img src={paypal} alt=""/>
                    <img src={ebay} alt=""/>
                    <img src={amd} alt=""/>
                    <img src={intel} alt=""/>
                    <img src={beats} alt=""/>
                </div>     
            </div>
        </section>
    );
};

export default Brands;