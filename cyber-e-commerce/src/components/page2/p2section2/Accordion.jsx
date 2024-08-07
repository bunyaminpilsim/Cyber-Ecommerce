import React, { useState, useRef, useEffect, useContext } from 'react';
import './accordion.css'; // CSS dosyasını dahil edin
import StateContext from '../../../StateContext';

const Accordion = () => {


    const {
        products, setProducts,
        filteredProducts,setFilteredProducts,
        sortBy,setSortBy,
        appleChecked, setAppleChecked,
        huaweiChecked, setHuaweiChecked,
        samsungChecked, setSamsungChecked,
    } = useContext(StateContext);


    const [isBrandOpen, setBrandOpen] = useState(false);
    const [isBatteryOpen, setBatteryOpen] = useState(false);
    const brandContentRef = useRef(null);
    const batteryContentRef = useRef(null);

    const toggleBrand = () => setBrandOpen(!isBrandOpen);
    const toggleBattery = () => setBatteryOpen(!isBatteryOpen);

    useEffect(() => {
        if (isBrandOpen) {
            brandContentRef.current.style.maxHeight = `${brandContentRef.current.scrollHeight}px`;
        } else {
            brandContentRef.current.style.maxHeight = '0px';
        }
    }, [isBrandOpen]);

    useEffect(() => {
        if (isBatteryOpen) {
            batteryContentRef.current.style.maxHeight = `${batteryContentRef.current.scrollHeight}px`;
        } else {
            batteryContentRef.current.style.maxHeight = '0px';
        }
    }, [isBatteryOpen]);


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
        console.log(selectedOption);
        setSortBy(selectedOption);
        console.log(sortBy);
        deneme(filteredProducts, selectedOption);
    };

    return (
        <div className="accordion-container">
            <div className="accordion-item">
                <div className="accordion-header" onClick={toggleBrand}>
                    <p>Brand</p>
                </div>
                <ul ref={brandContentRef} className="accordion-content">
                    {/* <li><input type="checkbox"/> Apple <span className='accordSpan'>110</span></li>
                    <li><input type="checkbox"/> Samsung <span className='accordSpan'>125</span></li>
                    <li><input type="checkbox"/> Xiaomi <span className='accordSpan'>68</span></li>
                    <li><input type="checkbox"/> Poco <span className='accordSpan'>44</span></li>
                    <li><input type="checkbox"/> OPPO <span className='accordSpan'>36</span></li>
                    <li><input type="checkbox"/> Honor <span className='accordSpan'>10</span></li>
                    <li><input type="checkbox"/> Motorola <span className='accordSpan'>34</span></li>
                    <li><input type="checkbox"/> Nokia <span className='accordSpan'>22</span></li>
                    <li><input type="checkbox"/> Realme <span className='accordSpan'>35</span></li> */}

                    <li><input type="checkbox" id='apple' checked={appleChecked} onChange={handleAppleChange} value={"Apple"} />
                        <label htmlFor="apple">apple</label></li>

                    <li><input type="checkbox" id='samsung' checked={samsungChecked} onChange={handleSamsungChange} value={"huawei"} />
                        <label htmlFor="samsung">samsung</label></li>

                    <li><input type="checkbox" id='huawei' checked={huaweiChecked} onChange={handleHuaweiChange} value={"samsung"} />
                        <label htmlFor="huawei">huawei</label></li>
                </ul>
            </div>
            <div className="accordion-item">
                <div className="accordion-header" onClick={toggleBattery}>
                    <p>Battery Capacity</p>
                </div>
                <ul ref={batteryContentRef} className="accordion-content">
                    <li><input type="checkbox" /> 200M-3000 mAh <span className='accordSpan'>34</span></li>
                    <li><input type="checkbox" /> 3000-4000 mAh <span className='accordSpan'>22</span></li>
                    <li><input type="checkbox" /> 4000-5000 mAh <span className='accordSpan'>35</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Accordion;
