import './PageRouter.css';
import PrOkSol from '../../../assets/Page1section2/Arrow.png';
import PrOkSag from '../../../assets/Page1section2/arrowters.png';
import React, { useState, useContext, useEffect } from 'react';
import nokta from '../../../assets/Page2section1/nokta.png';
import StateContext from '../../../StateContext';

function PageNum({ pgNum, onSelect, isSelected }) {
    return (
        <button
            className={`pageNumCard ${isSelected ? 'on' : ''}`}
            onClick={() => onSelect(pgNum)}
        >
            {pgNum}
        </button>
    );
}

function PageRouter() {
    const [prIndex, setPrIndex] = useState(1);
    const [selectedPage, setSelectedPage] = useState(prIndex);
    const [ctrPrIndex, setCtrPrIndex] = useState(1)
    const { filteredProducts, setCurrentPage, sortBy } = useContext(StateContext);
    const itemsPerPage = 9;
    const [totalPages, setTotalPages] = useState()
    useEffect(() => {
        // filteredProducts dolu olduğunda currentItems'i ayarla
        if (filteredProducts.length > 0) {
            const indexOfLastItem = selectedPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
            setCurrentPage(currentItems);
            setTotalPages(Math.ceil(filteredProducts.length / itemsPerPage));
        }
    }, [filteredProducts, selectedPage, setCurrentPage, sortBy]);
    useEffect(() => {
        if (filteredProducts.length > 0) {
            if (selectedPage !== 1) {
                setSelectedPage(1);
                setCtrPrIndex(1);
            }
        }
    }, [filteredProducts, sortBy]);
    const getPRpagenum = () => {
        return (
            <>
                {Array.from({ length: totalPages }, (_, i) => (
                    <PageNum
                        key={i + 1} 
                        pgNum={i + 1}
                        onSelect={spButtonClick}
                        isSelected={selectedPage === i + 1}
                    />
                ))}
            </>
        );
    };
    

    const upgradePrIndex = () => {
        if (ctrPrIndex < totalPages) { // Sınır kontrolü
            setCtrPrIndex(ctrPrIndex + 1);
            setSelectedPage(ctrPrIndex + 1); // Yeni sayfayı seç
        }
    };

    const downgradePrIndex = () => {
        if (ctrPrIndex > 1) {
            setCtrPrIndex(ctrPrIndex - 1);
            setSelectedPage(ctrPrIndex - 1);
        }
    };


    const spButtonClick = (pgNum) => {
        setSelectedPage(pgNum);
        setCtrPrIndex(pgNum)
    };

    return (
        <div className="pr">
            <img src={PrOkSol} alt="" className='prImg' onClick={downgradePrIndex} />
            <div className="prPageNums" style={
                {
                    display:  'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }>
                {getPRpagenum()}
                {/* {(prIndex + 3 >= totalPages - 1) ? (
                    <PageNum pgNum={prIndex + 3} onSelect={spButtonClick} isSelected={selectedPage === prIndex + 3} />
                ) : (
                    <img src={nokta} alt="" className='prNokta' />
                )}
                <PageNum pgNum={totalPages} onSelect={spButtonClick} isSelected={selectedPage === totalPages} /> */}
            </div>
            <img src={PrOkSag} alt="" className='prImg' onClick={upgradePrIndex} />
        </div>
    );
}

export default PageRouter;
