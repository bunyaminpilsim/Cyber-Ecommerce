import './FooterSection.css'
import logo from '../../assets/HeaderComponent/whiteLogo.png'
import twitter from '../../assets/footer/Twitter.png'
import instagram from '../../assets/footer/Instagram.png'
import tiktok from '../../assets/footer/Tiktok.png'
import facebook from '../../assets/footer/Facebook.png'

function FooterSection(){

    return(
        <div className='footerContainer col-12'>
            <div className="info">
                <div className="logo-text">
                    <img src={logo} alt="" className='infoLogo'/>
                    <p className='infoText'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                </div>
                <div className="footerNav">
                    <div className="footerSection1">
                        <p className='titleSpan'>Services</p>
                        <p className="optionsSpan">Bonus program</p>
                        <p className="optionsSpan">Gift cards</p>
                        <p className="optionsSpan">Credit and payment</p>
                        <p className="optionsSpan">Service contracts</p>
                        <p className="optionsSpan">Non-cash account</p>
                        <p className="optionsSpan">Payment</p>
                    </div>
                    <div className="footerSection1">
                    <p className='titleSpan titleSpan2'>Assistance to the buyer</p>
                        <p className="optionsSpan">Find an order</p>
                        <p className="optionsSpan">Terms of delivery</p>
                        <p className="optionsSpan">Exchange and return of goods</p>
                        <p className="optionsSpan">Guarantee</p>
                        <p className="optionsSpan">Frequently asked questions</p>
                        <p className="optionsSpan">Terms of use of the site</p>
                    </div>
                </div>
            </div>
            <div className="socialIcons">
                <img src={twitter} alt="" className='footerImages' />
                <img src={facebook} alt="" className='footerImages' />
                <img src={tiktok} alt="" className='footerImages' />
                <img src={instagram} alt="" className='footerImages' />
            </div>
        </div>
    )
}
export default FooterSection