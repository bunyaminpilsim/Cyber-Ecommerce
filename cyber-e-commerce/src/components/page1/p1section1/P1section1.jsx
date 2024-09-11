import './P1section1.css'
import iphoneImg from '../../../assets/Page1Section1/IphoneImage.png'
import ps5Img from '../../../assets/Page1Section1/PlayStation.png'
import macbookImg from '../../../assets/Page1Section1/MacBook Pro 14.png'
import airpods from '../../../assets/Page1Section1/airpods.png'
import appleVisionımg from '../../../assets/Page1Section1/appleVision.png'
import { useNavigate } from 'react-router-dom';
function P1section1() {
    const navigate = useNavigate();
    const handleRouteProductsPage = () => {
        navigate('/productsPage'); 
    };
    return (
        <>
            <div className="row">
                <div className="col-12 iphoneBanner">
                    <div className="contentTop1">
                        <div className="proBeyond">Pro.Beyond.</div>
                        <div className="iphone14Pro">IPhone 14 <span className="textPro">Pro</span></div>
                        <div className="contentbottom1">Created to change everything for the better. For everyone</div>
                        <button className="content1Button" onClick={handleRouteProductsPage}>Shop Now</button>
                    </div>
                    <img src={iphoneImg} alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col-6 sol">
                    <div className="playstationBanner col-12">
                        <img src={ps5Img} alt=""/>
                            <div className="ps5Texts">
                                <p>Playstation 5</p>
                                <div className="ps5DetailsText">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</div>
                            </div>
                    </div>
                    <div className="alt">
                        <div className="altSol airpodsBanner col-6">
                            <img src={airpods} alt=""/>
                                <div className="airpodsTexts">
                                    <p>Apple
                                        AirPods <span>Max</span></p>
                                    <div className="airpodsDetailsText">Computational audio. Listen, it's powerful</div>
                                </div>
                        </div>
                        <div className="altSag visionProBanner col-6">
                            <img src={appleVisionımg} alt="" className="visionProImg"/>
                                <div className="visionProTexts">
                                    <p>Apple Vision <span>Pro</span></p>
                                    <div className="visionProDetailsText">An immersive way to experience entertainment</div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 macbookBanner">
                    <div className="macContainer">
                        <p>Macbook <span>Air</span></p>
                        <div className="macbookDetailText">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</div>
                        <button className="macbookButton content1Button" onClick={handleRouteProductsPage}>Shop Now</button>
                    </div>
                    <img src={macbookImg} alt="" className="macImg"/>
                </div>
            </div>
        </>
    )
}
export default P1section1