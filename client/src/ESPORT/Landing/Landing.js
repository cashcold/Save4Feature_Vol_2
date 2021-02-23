import React, { Component } from 'react';
import './landing.css'
import axios from 'axios'
class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
          }
    }
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users/').then( res => res.json() )
        .then( data => {
        this.setState({ data: data.map( coin => coin.name ) })
        })

    }
    render() { 
        console.log(this.state.data)
        return ( 
            <div className='landingPageMain'>
                <section className='landingA'>
                   <div className='mainLanding_1'>
                        <div className='landingImg'>
                           <img src={require('../../images/hero_man.png')} alt='pic'/>
                       </div>
                       <div className='landingProp'>
                            <div className='landingText'>
                                <p>PayItForward is open to cooperate for everyone. Any individual or corporation from any nation may open an account with us, and we are happy to accept investors from wherever on the planet.</p>
                                <p className='btn btn-warning    '>GET NOW</p>
                            </div>
                       </div>
                   </div>
                </section>
                <section className='banding_1'>
                    <div className='bandImg'>
                        <img src={require('../../AllInOne/skate/Skate Board Double Snubby Maple Skateboard Long Board 4 Colors-in Skate Board from Sports & ....webp')} alt='pic'/>
                    </div>
                    <div className='bandImg'>
                        <img className='motorHight' src={require('../../AllInOne/moto_bike/YZF-R1 Rental.jpg')} alt='pic'/>
                    </div>
                    <div className='bandImg'>
                        <img src={require('../../AllInOne/bike/2862049.webp')} alt='pic'/>
                    </div>
                </section>
                <section className='featureProduct'>
                    <h1 className='featureH1'>Feature Products</h1>
                   <div className='feature'>
                         <div className='fuaturePro'>
                            <img className='featMachImg' src={require('../../AllInOne/hearphones/MSI DS501 Gaming Headset DS501 B&H Photo Video.jpg')}/>
                            <h4>MSI DS501 Gaming Headset </h4>
                            <div className='startRating'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                            <p>$99.00</p>
                        </div>
                         <div className='fuaturePro'>
                            <img src={require('../../AllInOne/laptop/Hot-Red-Crystal-Case-For-Apple-Macbook-Air-Pro-Retina-11-12-13-15-Laptop-Cover.webp')}/>
                            <h4>Hot-Red-Crystal</h4>
                            <div className='startRating'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                            <p>$99.00</p>
                        </div>
                         <div className='fuaturePro'>
                            <img src={require('../../AllInOne/watch/Women Fashion Luxury Diamond Bling from Dear Deer Fashion.jpg')}/>
                            <h4>Women Fashion Luxury Diamond </h4>
                            <div className='startRating'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                            <p>$99.00</p>
                        </div>
                         <div className='fuaturePro'>
                            <img src={require('../../AllInOne/watch/Women Fashion Luxury Diamond Bling from Dear Deer Fashion.jpg')}/>
                            <h4>Women Fashion Luxury Diamond </h4>
                            <div className='startRating'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                            <p>$99.00</p>
                        </div>
                         <div className='fuaturePro'>
                            <img src={require('../../AllInOne/fresh_on/maxresdefault-1.jpg')}/>
                            <h4>Iphone Xs</h4>
                            <div className='startRating'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                            <p>$99.00</p>
                        </div>
                   </div>
                </section>
                <section className='featureProduct'>
                    <h1 className='featureH1'>LatestProducts</h1>
                   <div className='feature'>
                         <div className='fuaturePro'>
                            <img className='featMachImg' src={require('../../AllInOne/hearphones/MSI DS501 Gaming Headset DS501 B&H Photo Video.jpg')}/>
                            <h4>MSI DS501 Gaming Headset </h4>
                            <div className='startRating'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                            <p>$99.00</p>
                        </div>
                         <div className='fuaturePro'>
                            <img src={require('../../AllInOne/laptop/Hot-Red-Crystal-Case-For-Apple-Macbook-Air-Pro-Retina-11-12-13-15-Laptop-Cover.webp')}/>
                            <h4>Hot-Red-Crystal</h4>
                            <div className='startRating'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                            <p>$99.00</p>
                        </div>
                         <div className='fuaturePro'>
                            <img src={require('../../AllInOne/laptop/Hot-Red-Crystal-Case-For-Apple-Macbook-Air-Pro-Retina-11-12-13-15-Laptop-Cover.webp')}/>
                            <h4>Hot-Red-Crystal</h4>
                            <div className='startRating'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                            <p>$99.00</p>
                        </div>
                         <div className='fuaturePro'>
                            <img src={require('../../AllInOne/watch/Women Fashion Luxury Diamond Bling from Dear Deer Fashion.jpg')}/>
                            <h4>Women Fashion Luxury Diamond </h4>
                            <div className='startRating'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                            <p>$99.00</p>
                        </div>
                         <div className='fuaturePro'>
                            <img src={require('../../AllInOne/fresh_on/maxresdefault-1.jpg')}/>
                            <h4>Iphone Xs</h4>
                            <div className='startRating'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                            <p>$99.00</p>
                        </div>
                   </div>
                </section>
                <section className='testimon'>
                    <div className='textMon_1'>
                        <p>Our Referral Commission offers something useful and beneficial for everyone. We are confident that the Referral Commission from PayItForward Investment provides the right path to the career progression ladder, confidently leading to financial prosperity.</p>
                        <div className='startRating'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                        <img src={require('../../pic/linkedin-sales-navigator-pAtA8xe_iVM-unsplash.jpg')}/>
                        <h4>Bob Falling</h4>
                    </div>
                    <div className='textMon_1'>
                        <p>Our Referral Commission offers something useful and beneficial for everyone. We are confident that the Referral Commission from PayItForward Investment provides the right path to the career progression ladder, confidently leading to financial prosperity.</p>
                        <div className='startRating'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                        <img src={require('../../pic/rodrigo-dos-reis-QUTXypSFlQQ-unsplash.jpg')}/>
                        <h4>Jack Smith</h4>
                    </div>
                    <div className='textMon_1'>
                        <p>Our Referral Commission offers something useful and beneficial for everyone. We are confident that the Referral Commission from PayItForward Investment provides the right path to the career progression ladder, confidently leading to financial prosperity.</p>
                        <div className='startRating'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                            </div>
                        <img src={require('../../images/hero_man.png')}/>
                        <h4>Rose Wosaye</h4>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default LandingPage;