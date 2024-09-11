import FooterSection from '../footerSection/FooterSection';
import HeaderSection from '../headerSection/HeaderSection';
import Steps from '../steps/Steps';
import './Page6.css';
import creditCard from '../../assets/ShoppingCard/ccImg.png';
import StateContext from '../../StateContext';
import { useContext,useEffect,useState } from 'react';
import StepsButton from '../page4/stepsButton/StepsButton';
import { useNavigate } from 'react-router-dom';


function CreateP6card({nameCard,priceCard,imgCard,adetCard}) {

    return (
        <div className="p6ShopCard">
            <div style={{display:'flex', flexDirection:'row'}}><span className="p6cardName">{adetCard}</span>
            <p>pcs</p></div>
            <div className="p6cardImg"><img src={imgCard} alt="" /></div>
            <div className="p6cardTexts">
                <p className="p6txt1s">{nameCard}</p>
                <p className="p6txt2s">${priceCard}</p>
            </div>
        </div>
    )
}
function Page6() {
    const navigate = useNavigate();
    const handleRouteStep2Page = () => {
        navigate('/step2');
    };
    const { cartData, setCardData,sepetCartData,cardTotalPrice,setCardTotalPrice } = useContext(StateContext)
    const handleFormValueChange = (e) => {
        const { name, value } = e.target;
        setCardData({ ...cartData, [name]: value });
    };
    if (cartData.name.length === 0) {
        setCardData({ ...cartData, name: "Cartholder" });

    }
    if (cartData.cartNumber.length === 0) {
        setCardData({ ...cartData, cartNumber: "XXXXXXXXXXXXXXXX" });
    }

    return (
        <>
            <HeaderSection />
            <Steps card3={1} />
            <div className='page6Container'>
                <div className="p6LeftSide">
                    <p className="p6Sum">Summary</p>
                    <div className="p6Cards">
                    {
                            sepetCartData.length === 0 ?
                                <div className='shpEmpty'>
                                    <p>Shopping cart is empty.</p>
                                </div> :
                                sepetCartData.map(product => {
                                    return (
                                        <CreateP6card
                                            adetCard={product.adet}
                                            imgCard={`${product.img}`}
                                            nameCard={product.name}
                                            priceCard={product.price}
                                        />
                                    );
                                })
                    }
                    </div>
                    <div className="p6detail">
                        <div className="p6ShipInfo">
                            <div className="p6tf1">
                                <p className="tfText">Address</p>
                                <div className="tfField">
                                    <p className="tfFieldText">1131 Dusty Townline, Jacksonville, TX 40322</p>
                                </div>
                            </div>
                            <div className="p6tf2">
                                <p className='tfText'>Shipment method</p>
                                <p className="tfFieldText">Free</p>
                            </div>
                        </div>
                        <div className="p6PriceInfo">
                            <div className="p6subtotal">
                                <p className="pi500" style={{ fontWeight: '600' }}>Subtotal</p>
                                <p className="pi500" style={{ fontWeight: '600' }}>${cardTotalPrice}</p>
                            </div>
                            <div className="p6taxes">
                                <div className="tax1">
                                    <p className="taxText1">Estimated Tax</p>
                                    <p className="taxText2">$50</p>
                                </div>
                                <div className="tax1">
                                    <p className="taxText1">Estimated shipping & Handling</p>
                                    <p className="taxText2">$29</p>
                                </div>
                            </div>
                            <div className="p6total">
                                <p className="p6totalText">Total</p>
                                <p className="p6totalPriceTxt">${(cardTotalPrice)+79}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p6RightSide">
                    <div className="p6rightPaymentDetail">
                        <div className="paymentDetailTop">
                            <p className="ptPayment">Payment</p>
                            <div className="PaymentTabs">
                                <p className='tabP'>Credit Card</p>
                                <p className='tabP'>PayPal</p>
                                <p className='tabP'>Paypal Credit</p>
                            </div>
                        </div>
                        <div className="ccDiv">
                            <img className='CreditCardImg' src={creditCard} alt="" />
                            <div className="ccContent">
                                <div className="ccTop">
                                    <p className="ccNumber">{cartData.cartNumber.slice(0, 4)}</p>
                                    <p className="ccNumber">{cartData.cartNumber.slice(4, 8)}</p>
                                    <p className="ccNumber">{cartData.cartNumber.slice(8, 12)}</p>
                                    <p className="ccNumber">{cartData.cartNumber.slice(12, 16)}</p>
                                </div>
                                <p className='ccCardName'>{cartData.name}</p>
                            </div>
                        </div>
                        <div className="paymentDetailFields">
                            <input type="text" className='pdInput' name='name' onChange={handleFormValueChange} placeholder='Card Holder Name' maxLength="30" />
                            <input type="text" className='pdInput' name='cartNumber' onChange={handleFormValueChange} placeholder='Card Number' required maxlength="16" minlength="16" />
                            <div className="pdInputCtrDiv">
                                <input type="text" className='pdInput' placeholder='Exp.Date' maxLength={"5"} />
                                <input type="text" className='pdInput' placeholder='CVC' maxLength={"3"} minLength={"3"} />
                            </div>
                        </div>
                    </div>
                    <div className="p6checkbox">
                        <label class="p6CheckboxContainer">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <p className='p6chcText'>Same as billing address</p>
                    </div>
                    <div className="p6paymentButtons">
                        <StepsButton text={"Back"} bgColor={'white'} borderColor={'black'} onC={handleRouteStep2Page}/>
                        <StepsButton text={"Next"} bgColor={'black'} borderColor={'white'} />
                    </div>
                </div>

            </div>
            <FooterSection />
        </>
    )
}
export default Page6