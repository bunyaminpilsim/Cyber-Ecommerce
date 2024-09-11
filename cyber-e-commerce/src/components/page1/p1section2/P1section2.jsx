import './P1section2.css'
import solOk from '../../../assets/Page1section2/Arrow.png'
import sagOk from '../../../assets/Page1section2/arrowters.png'
import Cameras from '../../../assets/Page1section2/Cameras.png'
import Computers from '../../../assets/Page1section2/Computers.png'
import Gaming from '../../../assets/Page1section2/Gaming.png'
import Heaadphones from '../../../assets/Page1section2/Headphones.png'
import Phones from '../../../assets/Page1section2/Phones.png'
import SmartWatches from '../../../assets/Page1section2/SmartWatches.png'
import i1 from '../../../assets/Page1Products/products1.png'
import i2 from '../../../assets/Page1Products/products2.png'
import i3 from '../../../assets/Page1Products/products3.png'
import i4 from '../../../assets/Page1Products/products4.png'
import i5 from '../../../assets/Page1Products/products5.png'
import i6 from '../../../assets/Page1Products/products6.png'
import i7 from '../../../assets/Page1Products/products7.png'
import i8 from '../../../assets/Page1Products/products8.png'
import CreateCard from '../../card/CreateCard'
import { useNavigate } from 'react-router-dom';

function P1section2() {
    const navigate = useNavigate();
    const handleRouteProductsPage = () => {
        navigate('/productsPage');
    };
    return (
        <>
            <div className="row">
                <div className="col-12 BrowseByCatSection">
                    <div className="s7Top">
                        <p>Browse by Category</p>
                        <div className="s7Arrows">
                            <img src={solOk} alt="" />
                            <img src={sagOk} alt="" />
                        </div>
                    </div>
                    <div className="s7Category">
                        <div className="s7cards" onClick={handleRouteProductsPage}>
                            <img src={Phones} alt="" />
                            <p style={{ width: '3.61vw' }}>Phones</p>
                        </div>
                        <div className="s7cards">
                            <img src={SmartWatches} alt="" onClick={handleRouteProductsPage} />
                            <p style={{ width: '7.361vw' }}>Smart Watches</p>
                        </div>
                        <div className="s7cards">
                            <img src={Cameras} alt="" onClick={handleRouteProductsPage} />
                            <p style={{ width: '4.375vw' }}>Cameras</p>
                        </div>
                        <div className="s7cards">
                            <img src={Heaadphones} alt="" onClick={handleRouteProductsPage} />
                            <p style={{ width: '6.1805vw' }}>Headphones</p>
                        </div>
                        <div className="s7cards">
                            <img src={Computers} alt="" onClick={handleRouteProductsPage} />
                            <p style={{ width: '5.416vw' }}>Computers</p>
                        </div>
                        <div className="s7cards">
                            <img src={Gaming} alt="" onClick={handleRouteProductsPage} />
                            <p style={{ width: '3.8194vw' }}>Gaming</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 s8Products">
                    <div className="s8tags">
                        <p className="s8tagsLabel1 s8labels" onClick={handleRouteProductsPage}>New Arrival</p>
                        <p className="s8tagsLabel2 s8labels" onClick={handleRouteProductsPage}>Bestseller</p>
                        <p className="s8tagsLabel3 s8labels" onClick={handleRouteProductsPage}>Featured Products</p>
                    </div>
                    <div className="s8productsGrid">
                        <div className="row s8ProductsTop">
                            <CreateCard description='Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)' price='900' imageNum={i1} onclck={handleRouteProductsPage}/>
                            <CreateCard description='Blackmagic Pocket Cinema Camera 6k' price='2535' imageNum={i2} onclck={handleRouteProductsPage}/>
                            <CreateCard description='Apple Watch Series 9 GPS 41mm Starlight Aluminium Case' price='399' imageNum={i3} onclck={handleRouteProductsPage}/>
                            <CreateCard description='AirPods Max Silver' price='549' imageNum={i4} onclck={handleRouteProductsPage}/>
                        </div>
                        <div className="row s8ProductsBottom">
                            <CreateCard description='Samsung Galaxy Watch6 Classic 47mm Black' price='369' imageNum={i5} onclck={handleRouteProductsPage}/>
                            <CreateCard description='Galaxy Z Fold5 Unlocked | 256GB | Phantom Black' price='1799' imageNum={i6} onclck={handleRouteProductsPage}/>
                            <CreateCard description='Galaxy Buds FE Graphite' price='99.99' imageNum={i7} onclck={handleRouteProductsPage}/>
                            <CreateCard description='Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021' price='398' imageNum={i8} onclck={handleRouteProductsPage}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default P1section2