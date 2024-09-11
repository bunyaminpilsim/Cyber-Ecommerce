import { useContext, useEffect } from 'react'
import StateContext from '../../StateContext'
import './ShoppingCard.css';
import telefon from '../../assets/Page1Products/products1.png';
import plus from '../../assets/ShoppingCard/Plus.png';
import Negative from '../../assets/ShoppingCard/Negative.png';
import Close from '../../assets/ShoppingCard/Close.png';
import axios from 'axios';
import { toast } from 'react-custom-alert';


function ShoppingCard({ image, description, id, price,prCount }) {

    const { shoppingCard, setShoppingCard, setCtr,ctr, productCounts, setProductCounts, filteredProducts, products } = useContext(StateContext);
    useEffect(() => {
        const newProductCounts = {};
        filteredProducts.forEach(product => {
            newProductCounts[product.id] = parseInt(product.adet);
        });
        setProductCounts(newProductCounts);
    }, [products]);
    const alertInfo = (msg) => toast.info(`${msg}`);
    const alertSuccess = (msg) => toast.success(`${msg}`);
    const alertWarning = (msg) => toast.warning(`${msg}`);
    const removeFromShoppingCard = (productId) => {
        
        axios.delete(`http://localhost:3000/shoppingCart/${productId}`,shoppingCard[productId]).then((response) => {
            setShoppingCard(shoppingCard.filter((product) => product.id !== productId));
        setProductCounts(prevCounts => ({
            ...prevCounts,
            [productId]: 1
        }));
        setCtr(!ctr)
        });
        alertInfo("product removed from cart")
    };
    const updateAdet = async (userId, updateInfo) => {
        await axios.patch(`http://localhost:3000/shoppingCart/${userId}`, updateInfo);
    }
    const handleProductCountIncrease = async (productId) => {
        setProductCounts(prevCounts => {
            const newCount = (parseInt(prevCounts[productId]) || 0) + 1; // Adeti artır
            updateAdet(productId, { adet: String(newCount) }); // Güncellemeyi yap
            return { ...prevCounts, [productId]: newCount }; // Yeni sayıyı döndür
        });
       await setCtr(prev => !prev); // State'i güncelle
    };
    
    const handleProductCountDecrease = async (productId) => {
        if (productCounts[productId] > 1) {
            setProductCounts(prevCounts => {
                const newCount = parseInt(prevCounts[productId]) - 1; // Adeti azalt
                updateAdet(productId, { adet: String(newCount) }); // Güncellemeyi yap
                return { ...prevCounts, [productId]: newCount }; // Yeni sayıyı döndür
            });
           await setCtr(prev => !prev); // State'i güncelle
        } else {
            alertWarning("You can't decrease count below 1")
        }
    };
    

    
    
    

    return (
        <>
            <div className="scContainer">
                <div className="sCard">
                    <img src={image} alt="" className='scImg' />
                    <div className="scContents">
                        <div className="scContentsLeft">
                            <div className="scContentLeftTop">{description}</div>
                            <p className="scContentLeftBottom">#{id}</p>
                        </div>
                        <div className="scContentsRight">
                            <div className="scrCounter">
                                <img src={Negative} alt="" className="scrIcon" onClick={() => handleProductCountDecrease(id)} />
                                <div className="scrNum">{prCount}</div>
                                <img src={plus} alt="" onClick={() => handleProductCountIncrease(id)} className="scrIcon" />
                            </div>
                            <p className='scContentsRightPrice'>${price}</p>
                            <img src={Close} alt="" className="scrIcon" onClick={() => removeFromShoppingCard(id)} />
                        </div>
                    </div>
                </div>
                <div className="scLine"></div>
            </div>
        </>
    )
}
export default ShoppingCard