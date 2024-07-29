import './P1section5.css'
import leftTop from '../../../assets/Page1section5/left-top.png'
import leftSecond from '../../../assets/Page1section5/leftSecond.png'
import leftBottom from '../../../assets/Page1section5/left-bottom.png'
import rightTop from '../../../assets/Page1section5/right-top.png'
import rightBottom from '../../../assets/Page1section5/right-bottom.png'

function P1section5(){

    return(
        <div className="section11 col-12">
        <img src={leftTop} alt="" className="section11Img1"/>
        <img src={leftSecond} alt="" className="section11Img2"/>
        <img src={leftBottom} alt="" className="section11Img3"/>
        <img src={rightTop} alt="" className="section11Img4"/>
        <img src={rightBottom} alt="" className="section11Img5"/>
        <div className="section11Div">
            <div className="section11TextArea">
                <p className="section11Label">Big Summer<span className="s11span"> Sale</span></p>
                <p className="section11Text">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
            </div>
            <div className="section11Button"></div>
        </div>
    </div>
    )
}
export default P1section5