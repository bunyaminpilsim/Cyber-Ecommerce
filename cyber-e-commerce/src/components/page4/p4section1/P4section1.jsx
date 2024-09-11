import './P4section1.css';
import lineLeft from '../../../assets/p4s1/Line.png';
import lineRight from '../../../assets/p4s1/Line-1.png';
import plus from '../../../assets/p4s1/Plus.png';
import StepsButton from '../stepsButton/StepsButton';
import AddressCard from '../../AddressCard/AddressCard';
import { useContext, useEffect } from 'react';
import StateContext from '../../../StateContext';
import P4form from '../p4form/P4form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-custom-alert';




function P4section1() {
    const navigate = useNavigate();
    const handleRouteStep2Page = () => {
        navigate('/step2');
    };
    const handleRouteCartPage = () => {
        navigate('/shoppingCart');
    };
    const alertInfo = (msg) => toast.info(`${msg}`);
    const alertSuccess = (msg) => toast.success(`${msg}`);
    const alertWarning = (msg) => toast.warning(`${msg}`);
    const { editAddressData, formDataId, setFormDataId, setEditAddressData, formData, setFormData, updateAdressData, setUpdateAdressData, adresscard, setAdressCard, isFormOpen, setIsFormOpen } = useContext(StateContext);
    const edeneme = () => {
        setIsFormOpen(true)
        const backEnd = document.querySelector('.p4s1frame')
        backEnd.classList.add('p4s1-form-active')
    };
    const editFormOpen = (id) => {
        setEditAddressData(true);
        setFormDataId(id);
        fetch(`http://localhost:3000/address/${id}`)
            .then(response => response.json())
            .then(data => {
                setFormData({
                    name: data.name,
                    surname: data.surname,
                    phoneNumber: data.phoneNumber,
                    addressTag: data.addressTag,
                    adressLabel: data.adressLabel,
                    neighbourhood: data.neighbourhood,
                    street: data.street,
                    city: data.city,
                    town: data.town,
                    postCode: data.postCode
                });
            })
        const backEnd = document.querySelector('.p4s1frame');
        backEnd.classList.add('p4s1-form-active');
    };

    const handleEditClose = () => {
        setEditAddressData(false);
        const backEnd = document.querySelector('.p4s1frame')
        backEnd.classList.remove('p4s1-form-active')
        setFormData({
            name: '',
            surname: '',
            phoneNumber: '',
            addressTag: '',
            adressLabel: '',
            neighbourhood: '',
            street: '',
            city: '',
            town: '',
            postCode: ''
        });
    }
    const handleFormClose = () => {
        setIsFormOpen(false);
        const backEnd = document.querySelector('.p4s1frame')
        backEnd.classList.remove('p4s1-form-active')
        setFormData({
            name: '',
            surname: '',
            phoneNumber: '',
            addressTag: '',
            adressLabel: '',
            neighbourhood: '',
            street: '',
            city: '',
            town: '',
            postCode: ''
        });
    }

    useEffect(() => {
        fetch('http://localhost:3000/address')
            .then(response => response.json())
            .then(data => {
                setAdressCard(data)
            })
    }, [updateAdressData]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        await postFormData();
        setFormData({
            name: '',
            surname: '',
            phoneNumber: '',
            addressTag: '',
            adressLabel: '',
            neighbourhood: '',
            street: '',
            city: '',
            town: '',
            postCode: ''
        });
        handleFormClose();
        alertSuccess('Address added successfully');
    };
    const handleSubmitEdit = async (event) => {
        event.preventDefault();
        await putFormData();
        setFormData({
            name: '',
            surname: '',
            phoneNumber: '',
            addressTag: '',
            adressLabel: '',
            neighbourhood: '',
            street: '',
            city: '',
            town: '',
            postCode: ''
        });
        handleEditClose();
        alertSuccess('Address updated successfully');
    };
    const postFormData = async () => {
        await axios.post(`http://localhost:3000/address`, formData)
        setUpdateAdressData(!updateAdressData)
    }
    const putFormData = async (id) => {
        await axios.put(`http://localhost:3000/address/${formDataId}`, formData)
        setUpdateAdressData(!updateAdressData)
    }


    return (
        <>
            <div className="row">
                <div className="col-12 p4s1">
                    <div className="p4s1frame">
                        <div className="p4s1block">
                            <p className='p4s1block-text'>Select Address</p>
                            <div className="p4s1block-contain">
                                <div className="p4s1AddressCards">
                                    {adresscard && adresscard.length > 0 ? (
                                        adresscard.map(siparis => (
                                            <AddressCard
                                                id={siparis.id}
                                                addressLabel={siparis.adressLabel}
                                                addressTag={siparis.addressTag}
                                                neighbourhood={siparis.neighbourhood}
                                                street={siparis.street}
                                                city={siparis.city}
                                                town={siparis.town}
                                                postcode={siparis.postCode}
                                                number={siparis.phoneNumber}
                                                editForm={editFormOpen}
                                            />
                                        ))
                                    ) : (
                                        <h2 style={{ marginLeft: '30%', fontFamily: 'SF Pro Display, sans-serif' }}>There is no address yet. Add a new address</h2>
                                    )}
                                </div>
                                <div className="p4s1addNewAddress">
                                    <div className="p4s1addTop">
                                        <img src={lineLeft} alt="" className='lines' />
                                        <img src={plus} alt="" className='plus' />
                                        <img src={lineRight} alt="" className='lines' />
                                        <div className="p4s1ClickZone" onClick={edeneme}></div>
                                    </div>
                                    <p className="p4s1addBottom">Add New Address</p>
                                </div>
                            </div>
                        </div>
                        <div className="p4s1buttons">
                            <StepsButton text={"Back"} bgColor={'white'} borderColor={'black'} onC={handleRouteCartPage}/>
                            <StepsButton text={"Next"} bgColor={'black'} borderColor={'white'} onC={handleRouteStep2Page}/>
                        </div>
                    </div>
                    <div className="p4s1form">
                        {isFormOpen && <P4form closeForm={handleFormClose} submitForm={handleSubmit} />}
                        {editAddressData && <P4form closeForm={handleEditClose} submitForm={handleSubmitEdit} />}

                    </div>
                </div>
            </div>
        </>
    )
}
export default P4section1