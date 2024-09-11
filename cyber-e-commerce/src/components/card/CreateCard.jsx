import './CreateCard.css';
import like from '../../assets/Page1Products/Like.png';
import { useContext } from 'react';
import axios from 'axios';
import StateContext from '../../StateContext';
import { toast } from 'react-custom-alert';


function CreateCard({ imageNum, description, price, id,onclck }) {
  const { shoppingCard, setShoppingCard, ctr, setCtr, productCounts, setProductCounts, filteredProducts } = useContext(StateContext);

  const updateAdet = async (userId, updateInfo) => {
    await axios.patch(`http://localhost:3000/shoppingCart/${userId}`, updateInfo);
  };

  const addToShoppingCard = async (product) => {
    const updatedShoppingCard = [...shoppingCard, product];
    await axios.post("http://localhost:3000/shoppingCart", product); // API'ye ekleme yap
    setShoppingCard(updatedShoppingCard); // State'i güncelle
  };
  const alertSuccess = () => toast.success('Product added to cart');


  const handleShoppingCard = async (event) => {
    const productId = event.target.value;
    const urunSorgusu = (x) => x.find(product => product.id === productId);

    const existingProduct = urunSorgusu(shoppingCard);

    if (existingProduct) {
        // Mevcut ürünü bul ve miktarını artır
        setProductCounts(prevCounts => {
            const newCount = parseInt(prevCounts[productId] || 0) + 1; // Varsayılan olarak 0
            updateAdet(productId, { "adet": `${String(newCount)}` });
            setCtr(!ctr);
            return { ...prevCounts, [productId]: newCount }; // Güncellenmiş sayıyı döndür
          });
          alertSuccess()
    } else {
        // Ürün sepete ekleniyor
        const newProduct = urunSorgusu(filteredProducts);
        if (newProduct) {
            await addToShoppingCard(newProduct); // Ürünü sepete ekle
            setCtr(!ctr); // State güncelle
            alertSuccess()
        }
    }
};


  return (
    <div className="productsCard" >
      <div className="pcTop"onClick={onclck}>
        <img src={like} alt="" className="pcImg" />
      </div>
      <img src={imageNum} alt="" className="pcMidImg" onClick={onclck}/>
      <div className="pcBottom"onClick={onclck}>
        <p className="pcBottomText">{description}</p>
        <p className="pcBottomPrice">${price}</p>
      </div>
        <button className="pcBottomButton" value={id} onClick={handleShoppingCard}>Buy Now</button>
    </div>
  );
}

export default CreateCard;
