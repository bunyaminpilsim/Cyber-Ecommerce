import './P2section1.css'
import arrowp2s1 from '../../../assets/Page2section1/arrowters.png'
import StateContext from '../../../StateContext'
import { useContext, useEffect, useState } from 'react';

function P2section1(){
    let router1 = "SmartPhones";
    const [router2, setRouter2] = useState('apple')
    const {
        appleChecked,
        huaweiChecked,
        samsungChecked,
        setAppleChecked,
        setHuaweiChecked,
        setSamsungChecked
     } = useContext(StateContext);
     const handleSmartPhonesRouter =() =>{
        setAppleChecked(false);
        setHuaweiChecked(false);
        setSamsungChecked(false);
        setRouter2(undefined);
    }

    useEffect(()=>{
        if (appleChecked && (samsungChecked === false) && (huaweiChecked === false)) {
            setRouter2("Apple")
         }
         if (appleChecked && samsungChecked) {
             setRouter2("Brands")
         }
         if (appleChecked && huaweiChecked) {
             setRouter2("Brands")
         }
         if (huaweiChecked && samsungChecked) {
             setRouter2("Brands")
         }
         if (huaweiChecked && samsungChecked && appleChecked) {
             setRouter2("Brands")
         }
     
         if (huaweiChecked && (samsungChecked === false) && (appleChecked === false)) {
             setRouter2("Huawei")
         }
     
         if (samsungChecked && (huaweiChecked === false) && (appleChecked === false)) {
             setRouter2("Samsung")
         } 
         if ((samsungChecked === false) && (huaweiChecked === false) && (appleChecked === false)) {
            setRouter2(undefined)
        } 
    },[samsungChecked,appleChecked,huaweiChecked])
    let checkRoute = (router2 !== undefined);
    return(
        <div className="row">
            <div className="col-12 p2s1Container">
            {
                checkRoute ? <>
                <p className="p2s1Text1"
                 style={{color:'rgba(164, 164, 164, 1)'}}
                 >Home</p>
                 <img src={arrowp2s1} alt="" className='p2s1Img' />
                 <p className="p2s1Text1"
                 style={{color:'rgba(164, 164, 164, 1)'}}
                 onClick={handleSmartPhonesRouter}
                 >{router1}</p>
                <img src={arrowp2s1} alt="" className='p2s1Img' />
                <p className="p2s1Text1">{router2}</p>
                </>
                 :   
                 <>
                <p className="p2s1Text1"
                 style={{color:'rgba(164, 164, 164, 1)'}}
                 >Home</p>
                 <img src={arrowp2s1} alt="" className='p2s1Img' />
                 <p className="p2s1Text1"
                 >{router1}</p>
                 </>
            }
            </div>
        </div>
    )
}
export default P2section1