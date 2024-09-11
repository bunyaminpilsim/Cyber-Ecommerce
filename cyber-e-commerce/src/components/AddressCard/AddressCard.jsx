import './AddressCard.css';
import edit from '../../assets/p4s1/To-edit.png'
import close from '../../assets/p4s1/Close.png'
import { useState, useContext } from 'react';
import StateContext from '../../StateContext';
import axios from 'axios';
import { toast } from 'react-custom-alert';


function AddressCard({ id, addressLabel, addressTag, neighbourhood, street, city, town, postcode,number, editForm}) {
    const { selectedRadio, setSelectedRadio,updateAdressData,setUpdateAdressData } = useContext(StateContext)

    const handleClick = (e) => {
        setSelectedRadio(e.target.value)
    }
    const alertWarning = (msg) => toast.warning(`${msg}`);
    const deleteFormData = (ctrid) => async () => {
        await axios.delete(`http://localhost:3000/address/${id}`)
        setUpdateAdressData(!updateAdressData)
        alertWarning('address information removed')
    }
    return (
        <div className="addressCard" key={id}>
            <div className="adrsContent">
                <div className="adrsContentTop">
                    <input type="radio" name="option"
                        value={id}
                        checked={selectedRadio === id}
                        onChange={handleClick}
                    />
                    <p>{addressLabel}</p>
                    <div className="adrsTag">{addressTag}</div>

                </div>
                <div className="adrsContentBottom">
                    <div className='adrsBot'>
                        <span className='mahalle'>{neighbourhood},</span>
                        <span className='sokak'>{street},</span>
                        <span className='ilce'>{city} / {town} </span>
                        <span className='postCode'>{postcode}</span>
                    </div>
                    <div className='adrsBot'>
                        <span className='tel'>{number}</span>
                    </div>
                </div>
            </div>
            <div className="adrsButtons">
                <img src={edit} alt="" className='imgP4' onClick={() => editForm(id)} />
                <img src={close} alt="" className='imgP4' onClick={deleteFormData(`${id}`)}/>
            </div>
        </div>
    )
}

export default AddressCard;