import CreateCard from '../../card/CreateCard';
import './P1section4.css'
import img1 from '../../../assets/Page1Products/products9.png'
import img2 from '../../../assets/Page1Products/products4.png'
import img3 from '../../../assets/Page1Products/products3.png'
import img4 from '../../../assets/Page1Products/products10.png'

function P1section4() {

    return (
        <div className="section10 col-12">
            <p className="s10label">Discounts up to -50%</p>
            <div className="s8ProductsTop">
                <CreateCard imageNum={img1} description='Apple iPhone 14 Pro 512GB Gold (MQ233)' price='1437' />
                <CreateCard imageNum={img2} description='AirPods Max Silver' price='549' />
                <CreateCard imageNum={img3} description='Apple Watch Series 9 GPS 41mm Starlight Aluminium Case' price='399' />
                <CreateCard imageNum={img4} description='Apple iPhone 14 Pro 1TB Gold (MQ2V3)' price='1499' />
            </div>
        </div>
    )
}
export default P1section4