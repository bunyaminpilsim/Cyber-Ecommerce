import './P3s1.css'
import arrowp2s1 from '../../../assets/Page2section1/arrowters.png'
function P3s1() {

    return (

        <>
            <div className="col-12 p2s1Container">
                <p className="p2s1Text1"
                    style={{ color: 'rgba(164, 164, 164, 1)' }}
                >Home</p>
                <img src={arrowp2s1} alt="" className='p2s1Img' />
                <p className="p2s1Text1"
                    style={{ color: 'rgba(164, 164, 164, 1)' }}
                >Catalog</p>
                <img src={arrowp2s1} alt="" className='p2s1Img' />
                <p className="p2s1Text1"
                    style={{ color: 'rgba(164, 164, 164, 1)' }}
                >Smartphones</p>
                <img src={arrowp2s1} alt="" className='p2s1Img' />
                <p className="p2s1Text1"
                    style={{ color: 'rgba(164, 164, 164, 1)' }}
                >Apple</p>
                <img src={arrowp2s1} alt="" className='p2s1Img' />
                <p className="p2s1Text1"
                    style={{ color: 'black' }}
                >Apple 13 Pro</p>
            </div>
        </>
    )
}
export default P3s1