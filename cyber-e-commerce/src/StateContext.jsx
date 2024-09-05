import { useState, createContext } from "react";

const StateContext = createContext();

export const StateProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortBy, setSortBy] = useState("az");
    const [appleChecked, setAppleChecked] = useState(false);
    const [huaweiChecked, setHuaweiChecked] = useState(false);
    const [samsungChecked, setSamsungChecked] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState('rad1')

    //---------------------------pageRoute---------------------------------------
    const [prIndex, setPrIndex] = useState(1);
    const [selectedPage, setSelectedPage] = useState(prIndex);
    const [currentPage, setCurrentPage] = useState([]);
    //---------------------------SHOPPİNG CARD---------------------------------------
    const [shoppingCard, setShoppingCard] = useState([]);
    const [productCounts, setProductCounts] = useState({});
    //---------------------------address---------------------------------------
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [adresscard, setAdressCard] = useState([]);
    const [updateAdressData, setUpdateAdressData] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phoneNumber: '',
        addressTag: '',
        adressLabel: '',
        neighbourhood: '',
        street : '',
        city: '',
        town: '',
        postCode: ''
    });
    const [editAddressData, setEditAddressData] =useState(false);
    const [formDataId, setFormDataId] = useState('')
    const [sepetCartData, setSepetCartData] = useState([]);
    const [ctr, setCtr] = useState(false);

    //CARD DATA
    const [cartData, setCardData] = useState({
        name: 'CardHolder',
        cartNumber: 'XXXXXXXXXXXXXXXX',
    });
    const [cardTotalPrice, setCardTotalPrice] = useState(0)


    const values = {
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        sortBy,
        setSortBy,
        appleChecked,
        setAppleChecked,
        huaweiChecked,
        setHuaweiChecked,
        samsungChecked,
        setSamsungChecked,
        shoppingCard,
        setShoppingCard,
        productCounts,
        setProductCounts,
        adresscard,
        setAdressCard,
        updateAdressData,
        setUpdateAdressData,
        formData,
        setFormData,
        prIndex,
        setPrIndex,
        selectedPage,
        setSelectedPage,
        currentPage,
        setCurrentPage,
        selectedRadio,
        setSelectedRadio,
        isFormOpen,
        setIsFormOpen,
        editAddressData,
        setEditAddressData,
        formDataId,
        setFormDataId,
        sepetCartData,
        setSepetCartData,
        ctr,
        setCtr,
        cartData,
        setCardData,
        cardTotalPrice,
        setCardTotalPrice
    };
    

    return(
    <StateContext.Provider value={values}>
        {children}
    </StateContext.Provider>
  );
};

export default StateContext;