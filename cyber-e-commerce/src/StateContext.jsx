import { useState, createContext } from "react";

const StateContext = createContext();

export const StateProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortBy, setSortBy] = useState("az");
    const [appleChecked, setAppleChecked] = useState(false);
    const [huaweiChecked, setHuaweiChecked] = useState(false);
    const [samsungChecked, setSamsungChecked] = useState(false);

    //---------------------------pageRoute---------------------------------------
    const [prIndex, setPrIndex] = useState(1);
    const [selectedPage, setSelectedPage] = useState(prIndex);
    const [currentPage, setCurrentPage] = useState([]);
    //---------------------------SHOPPİNG CARD---------------------------------------
    const [shoppingCard, setShoppingCard] = useState([]);
    const [productCounts, setProductCounts] = useState({});
    //---------------------------address---------------------------------------
    const [adresscard, setAdressCard] = useState([]);
    const [updateAdressData, setUpdateAdressData] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        adressLabel: '',
        phoneNumber: '',
        adress: '',
        postCode: '',
        city: '',
        town: ''
    });


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
    };

    return(
    <StateContext.Provider value={values}>
        {children}
    </StateContext.Provider>
  );
};

export default StateContext;