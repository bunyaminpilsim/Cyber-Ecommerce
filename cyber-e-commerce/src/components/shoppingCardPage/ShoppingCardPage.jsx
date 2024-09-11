import { useContext, useEffect } from 'react'
import FooterSection from '../footerSection/FooterSection'
import HeaderSection from '../headerSection/HeaderSection'
import ShoppingCard from '../shoppingCard/ShoppingCard'
import './ShoppingCardPage.css'
import StateContext from '../../StateContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function ShoppingCardPage() {
    const navigate = useNavigate();
    const handleRouteStep1Page = () => {
        navigate('/step1');
    };
    const { shoppingCard,productCounts,sepetCartData,ctr,setProductCounts,cardTotalPrice,
        setCtr,
        setSepetCartData } = useContext(StateContext);
    useEffect (()=>{
        fetch('http://localhost:3000/shoppingCart')
        .then(response => response.json())
        .then(data => {
            setSepetCartData(data);
            
            const productCounts = {};
            data.forEach(item => {
                productCounts[item.id] = item.adet; // Her ürün için adet değerini al
            });
            setProductCounts(productCounts); // Tüm adetleri set et
        }).catch(console.error)
    },[ctr]);

    return (
        <>
            <HeaderSection />
            <div className="shopContainer col-12">
                <div className="shopContent">
                    <div className="scLeft">
                        <p className='scLeftLabel'>Shopping Card</p>
                        {
                            sepetCartData.length === 0 ?
                                <div className='shpEmpty'>
                                    <p>Shopping cart is empty.</p>
                                </div> :
                                sepetCartData.map(product => {
                                    return (
                                        <ShoppingCard
                                            image={`${product.img}`}
                                            description={product.name}
                                            price={product.price}
                                            id={product.id}
                                            prCount={product.adet}
                                        />
                                    );
                                })
                        }
                    </div>
                    <div className="scRight">
                        <p className="orderSum">
                            Order Summary
                        </p>
                        <div className="sumContent">
                            <div className="sumContentTop">
                                <div className="sumContentField">
                                    <div className="contentLabelField">
                                        <label htmlFor="field1" className='inputLabel'>Discount code / Promo code</label>
                                        <input type="text" name='field1' className='inputField' placeholder='Code' />
                                    </div>
                                    <div className="contentLabelField">
                                        <label htmlFor="field2" className='inputLabel'>Your bonus card number</label>
                                        <input type="text" name='field2' className='inputField' placeholder='Enter Card Number' />
                                    </div>
                                </div>
                                <div className="sumContentPrices">
                                    <div className="subtotal">
                                        <p>Subtotal</p>
                                        <p>${cardTotalPrice}</p>
                                    </div>
                                    <div className="taxes">
                                        <div className="taxesPrice">
                                            <p className="priceText">Estimated Tax</p>
                                            <p className="taxPrice">$50</p>
                                        </div>
                                        <div className="taxesPrice">
                                            <p className="priceText">Estimated shipping & Handling</p>
                                            <p className="taxPrice">$29</p>
                                        </div>
                                    </div>
                                    <div className="total">
                                        <p>Total</p>
                                        <p>${cardTotalPrice+79}</p>
                                    </div>
                                </div>

                            </div>
                            <button className="sumContentButton" onClick={handleRouteStep1Page}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    )
}
export default ShoppingCardPage