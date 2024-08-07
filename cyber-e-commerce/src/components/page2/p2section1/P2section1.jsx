import './P2section1.css'
import arrowp2s1 from '../../../assets/Page2section1/arrowters.png'
function P2section1({router1, router2}){
    console.log(router1)
    console.log(router2)
    const checkRoute = (router2 !== undefined);
    return(
        <div className="row">
            <div className="col-12 p2s1Container">
               {checkRoute ? <>
               <p className="p2s1Text1"
                style={{color:'rgba(164, 164, 164, 1)'}}
                >Home</p>
                <img src={arrowp2s1} alt="" className='p2s1Img' />
                <p className="p2s1Text1"
                style={{color:'rgba(164, 164, 164, 1)'}}
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