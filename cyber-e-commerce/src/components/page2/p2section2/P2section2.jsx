import Accordion from './Accordion.jsx';
import './P2section2.css';
import PageRouter from './PageRouter.jsx';
import okFoto from '../../../assets/Page2section1/arrowters.png'
import { useState, useEffect,useContext  } from 'react';
import CreateCard from '../../card/CreateCard.jsx';
import StateContext from '../../../StateContext.jsx';
function P2section2() {
    // const [products, setProducts] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState([]);
    // const [sortBy, setSortBy] = useState("az");
    // const [appleChecked, setAppleChecked] = useState(false);
    // const [huaweiChecked, setHuaweiChecked] = useState(false);
    // const [samsungChecked, setSamsungChecked] = useState(false);
    const {
        products, setProducts,
        filteredProducts,setFilteredProducts,
        sortBy,setSortBy,
        appleChecked, setAppleChecked,
        huaweiChecked, setHuaweiChecked,
        samsungChecked, setSamsungChecked, currentPage,
        setProductCounts,setShoppingCard,shoppingCard,productCounts
     } = useContext(StateContext);


    useEffect(() => {
        fetch('http://localhost:3000/productsPage')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    useEffect(() => {
        handleFilterProducts();
    }, [appleChecked, huaweiChecked, samsungChecked]);

    const handleAppleChange = () => {
        setAppleChecked(!appleChecked);
    };

    const handleHuaweiChange = () => {
        setHuaweiChecked(!huaweiChecked);
    };

    const handleSamsungChange = () => {
        setSamsungChecked(!samsungChecked);
    };
    const handleFilterProducts = (event) => {
        let filteredProducts = [...products];
        let applePro = filteredProducts.filter(product => product.brand === 'Apple');
        let huaweiPro = filteredProducts.filter(product => product.brand === 'huawei');
        let samsungPro = filteredProducts.filter(product => product.brand === 'samsung');
        //  setSortBy("default");
        if (appleChecked && (samsungChecked === false) && (huaweiChecked === false)) {
            //    filteredProducts = applePro;
            setFilteredProducts(applePro);
            deneme(applePro, sortBy);
        }
        if (appleChecked && samsungChecked) {
            filteredProducts = [...applePro, ...samsungPro];
            setFilteredProducts(filteredProducts);
            deneme(filteredProducts, sortBy);
        }
        if (appleChecked && huaweiChecked) {
            filteredProducts = [...applePro, ...huaweiPro];
            setFilteredProducts(filteredProducts);
            deneme(filteredProducts, sortBy);
        }
        if (huaweiChecked && samsungChecked) {
            filteredProducts = [...huaweiPro, ...samsungPro];
            setFilteredProducts(filteredProducts);
            deneme(filteredProducts, sortBy);

        }
        if (huaweiChecked && samsungChecked && appleChecked) {
            filteredProducts = [...huaweiPro, ...samsungPro, ...applePro];
            setFilteredProducts(filteredProducts);
            deneme(filteredProducts, sortBy);

        }

        if (huaweiChecked && (samsungChecked === false) && (appleChecked === false)) {
            filteredProducts = huaweiPro;
            setFilteredProducts(huaweiPro);
            deneme(huaweiPro, sortBy);

        }

        if (samsungChecked && (huaweiChecked === false) && (appleChecked === false)) {
            // filteredProduct = samsungPro;
            setFilteredProducts(samsungPro);
            deneme(samsungPro, sortBy);

        }
        else if (!appleChecked && !huaweiChecked && !samsungChecked) {
            setFilteredProducts(filteredProducts);
            deneme(filteredProducts, sortBy);
        }
    };
    const deneme = (pro, option) => {
        let sortedProducts = pro;
        if (option === 'priceAsc') {
            sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (option === 'priceDesc') {
            sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        } else if (option === 'ratingDesc') {
            sortedProducts.sort((a, b) => parseFloat(b.battery) - parseFloat(a.battery));
        }
        else if (option === 'default') {
            sortedProducts = filteredProducts;
        }
        setFilteredProducts(sortedProducts);
    }

    const handleSort = (event) => {
        const selectedOption = event.target.value;
        setSortBy(selectedOption);
        deneme(filteredProducts, selectedOption);
    };
    return (
        <div className="row">
            <div className="p2s2container col-12">
                <div className="p2s2frame">
                    <div className="p2s2filter">
                        <Accordion />
                    </div>
                    <div className="p2s2productSection">
                        <div className="p2s2product">
                            <div className="p2s2topPage">
                                <div className="p2s2leftSide">
                                    <p>Selected Products: <span>{filteredProducts.length}</span></p>
                                </div>
                                <select value={sortBy} onChange={handleSort} className='select dropbtn' >
                                    <option value="default" className='select-option'>Default</option>
                                    <option value="priceAsc" className='select-option'>Price: Low to High</option>
                                    <option value="priceDesc" className='select-option'>Price: High to Low</option>
                                    <option value="ratingDesc" className='select-option'>Rating: High to Low</option>
                                </select>

                            </div>
                            <div className='productPageCards'>
                                {
                                    currentPage.map(product => {
                                        return ( // return ifadesini ekledik
                                            <CreateCard
                                                imageNum={`${product.img}`}
                                                description={product.name}
                                                price={product.price}
                                                id={product.id}
                                            />
                                        );
                                    })
                                }
                            </div>


                        </div>
                        <div className="pageRouter">
                            <PageRouter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default P2section2