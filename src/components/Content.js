import React from 'react'
import PaymentPage from './PaymentPage'
import img1 from '../images/Icon (2).png'
import img2 from '../images/Icon (3).png'
import img3 from '../images/Icon (1).png'
import img4 from '../images/Group 17.png'
import img5 from '../images/Icon.png'
const Content = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="payment-container">
                            <div className="left-content">
                                <h2 class="head">Access curated courses worth <br /><span class="rupee">₹ <span class="strike">18,500</span></span> at just <span class="price"><span class="blue">₹ 99</span></span> per year!</h2>
                                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '21px' }}>
                                    <img src={img1} alt="images" height={35} width={35} style={{ marginRight: '10px' }} />
                                    <p style={{ marginTop: '10px', fontSize: '19px' }}>
                                        <span style={{ color: 'blue' }}>100+</span> Job relevant courses
                                    </p>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '21px' }}>
                                    <img src={img2} alt="images" height={35} width={35} style={{ marginRight: '10px' }} />
                                    <p style={{ margin: '10px', fontSize: '19px' }}>
                                        <span style={{ color: 'blue' }}>20,000+</span> Hours of content
                                    </p>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '21px' }}>
                                    <img src={img3} alt="images" height={35} width={35} style={{ marginRight: '10px' }} />
                                    <p style={{ margin: '10px', fontSize: '19px' }}>
                                        <span style={{ color: 'blue' }}>Exclusive</span> webinar access
                                    </p>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '21px' }}>
                                    <img src={img4} alt="images" height={30} width={30} style={{ marginRight: '10px' }} />
                                    <p style={{ margin: '10px', fontSize: '19px' }}>
                                        Scholarship worth<span style={{ color: 'blue' }}>₹94,500</span>
                                    </p>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '21px' }}>
                                    <img src={img5} alt="images" height={35} width={35} style={{ marginRight: '10px' }} />
                                    <p style={{ margin: '10', fontSize: '19px' }}>
                                        <span style={{ color: 'blue' }}>Ad Free</span>learning experience
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content">
                                <PaymentPage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
