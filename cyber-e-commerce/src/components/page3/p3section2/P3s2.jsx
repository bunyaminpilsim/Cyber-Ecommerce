import { useContext } from 'react';
import StateContext from '../../../StateContext';
import './P3s2.css'
import phn1 from '../../../assets/ShoppingCard/phn1.png';
import phn2 from '../../../assets/ShoppingCard/phn2.png';
import phn3 from '../../../assets/ShoppingCard/phn3.png';
import phn4 from '../../../assets/ShoppingCard/phn4.png';
import cpu from '../../../assets/ShoppingCard/cpu.png';
import core from '../../../assets/ShoppingCard/core.png';
import battery from '../../../assets/ShoppingCard/battery.png';
import cam from '../../../assets/ShoppingCard/cam.png';
import recov from '../../../assets/ShoppingCard/recov.png';
import Screensize from '../../../assets/ShoppingCard/Screensize.png';
import Delivery from '../../../assets/ShoppingCard/Delivery.png';
import Guaranteed from '../../../assets/ShoppingCard/Guaranteed.png';
import Stock from '../../../assets/ShoppingCard/Stock.png';
import { useLocation } from "react-router-dom";

function P3s2ColorBox({color}) {
    return (
        <div 
        className="colorBox"
        style={{backgroundColor:`${color}`}}
        ></div>
    );
}
function P3s2featureCards({img,text1,text2}) {
    return (
        <div className="featureCard">
            <img src={img} alt="" />
            <div className="fcTexts">
                <p className='fcText1'>{text1}</p>
                <p  className='fcText2'>{text2}</p>
            </div>
        </div>
    );
}
function P3s2DetailCard({text1,text2,img}) {
    return (
        <div className="detailCard">
            <img src={img} alt="" style={{width:'1.66vw',height:'1.66vw'}}/>
            <div className="dcTextDiv">
                <p className="dcText1">{text1}</p>
                <p className="dcText2">{text2}</p>
            </div>
        </div>
    );
}
function P3s2MemoryCard({color,text}) {
    return (
        <div 
        className="memoryCard"
        style={{borderColor:`${color}`}}
        >
            <p
                style={{color:`${color}`}}
            >{text}</p>
        </div>
    );
}
function P3s2() {
    const location = useLocation();
    const { img, title, price } = location.state || {};
    return (
        <>
            <div className="p3s2Container">
                <div className="p3s2Images">
                    <div className="p3s2ImagesLeft">
                        <img src={img} alt="" className="imgMainP3" />
                        <img src={phn2} alt="" className='phns' />
                        <img src={phn3} alt="" className='phns' />
                        <img src={phn4} alt="" className='phns' />
                    </div>
                    <div className="p3s2ImagesRight">
                        <img src={img} alt="" className='p3s2mainImg' />
                    </div>
                </div>
                <div className="p3s2info">
                    <div className="p3s2Content">
                        <div className="p3s2ContentTitle">
                            <p className="p3s2t1">{title}</p>
                            <div className="p3s2t2div">
                                <p className="p3s2t2">${price}</p>
                                <p className="p3s2t3">${parseInt(price)+100}</p>
                            </div>
                        </div>
                        <div className="p3s2ContentInfo">
                            <div className="p3s2CIcolors">
                                <p className="p3s2CIcolorText">Select color :</p>
                                <div className="p3s2CIcolorBoxes">
                                     <P3s2ColorBox color='rgba(0, 0, 0, 1)'/>
                                     <P3s2ColorBox color='rgba(120, 29, 188, 1)'/>
                                     <P3s2ColorBox color='rgba(225, 0, 0, 1)'/>
                                     <P3s2ColorBox color='rgba(225, 176, 0, 1)'/>
                                     <P3s2ColorBox color='rgba(232, 232, 232, 1)'/>
                                </div>
                            </div>
                            <div className="p3s2CItabsMemory">
                            <P3s2MemoryCard color={'rgba(213, 213, 213, 1)'} text={'128GB'}/>
                            <P3s2MemoryCard color={'rgba(213, 213, 213, 1)'} text={'256GB'}/>
                            <P3s2MemoryCard color={'rgba(213, 213, 213, 1)'} text={'512GB'}/>
                            <P3s2MemoryCard color={'rgba(0, 0, 0, 1)'} text={'1TB'}/>
                            </div>
                            <div className="p3s2CIdetails">
                                <P3s2DetailCard img={Screensize} text1={'Screen Size'} text2={'6.7"'}/>
                                <P3s2DetailCard img={cpu} text1={'Cpu'} text2={'Apple A16 Bionic"'}/>
                                <P3s2DetailCard img={core} text1={'Number Of Cores'} text2={'6'}/>
                                <P3s2DetailCard img={cam} text1={'Main Camera'} text2={'48-12-12 MP'}/>
                                <P3s2DetailCard img={recov} text1={'Front Camera'} text2={'12 MP'}/>
                                <P3s2DetailCard img={battery} text1={'Battery Capacity'} text2={'4323 mAh'}/>
                                
                            </div>
                            <p className="p3s2CItext">Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras <span>more...</span></p>
                        </div>
                    </div>
                    <div className="p3sInfo2Buttons">
                        <button className="p3s2Button1">Add to Wishlist</button>
                        <button className="p3s2Button2">Add to Card</button>
                    </div>
                    <div className="p3s2Icons">
                        <P3s2featureCards img={Delivery} text1={'Free Delivery'} text2={'1-2 day'}/>
                        <P3s2featureCards img={Stock} text1={'In Stock'} text2={'Today'}/>
                        <P3s2featureCards img={Guaranteed} text1={'Guaranteed'} text2={'1 year'}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default P3s2