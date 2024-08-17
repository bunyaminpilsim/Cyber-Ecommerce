import { useContext, useEffect } from 'react';
import './P4form.css'
import StateContext from '../../../StateContext';
import close from '../../../assets/p4s1/Close.png';

function P4form({closeForm,submitForm}) {
    const { formData, setFormData, updateAdressData, setUpdateAdressData, adresscard, setAdressCard, isFormOpen, setIsFormOpen } = useContext(StateContext);

    const handleFormValueChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <>
            <div class="form-container">
                <img src={close} alt="" 
                    style={{width: '1.66vw', height: '1.66vw', marginLeft: '95%'}}
                    onClick={closeForm}
                />
                <h2>Add New Address</h2>
                <form id="addressForm" onSubmit={submitForm}>
                    <div className='form-row'>
                        <div class="form-group">
                            <input type="text" id="name" name="name" required placeholder='Name' value={formData.name} onChange={handleFormValueChange}/>
                        </div>
                        <div class="form-group">
                            <input type="text" id="surname" name="surname" required placeholder='Surname' value={formData.surname} onChange={handleFormValueChange}/>
                        </div>
                    </div>
                    <div class="form-group single-item">
                        <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder='Phone Number' value={formData.phoneNumber} onChange={handleFormValueChange}/>
                    </div>
                    <div className="form-row">
                        <div class="form-group">
                            <input type="text" id="addressTag" name="addressTag" required placeholder='Address Tag: exp home, office' value={formData.addressTag} onChange={handleFormValueChange}/>
                        </div>
                        <div class="form-group">
                            <input type="text" id="addressLabel" name="adressLabel" required placeholder='Address Label' value={formData.adressLabel} onChange={handleFormValueChange}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div class="form-group">
                            <input type="text" id="mahalle" name="neighbourhood" required placeholder='Neighbourhood' value={formData.neighbourhood} onChange={handleFormValueChange}/>
                        </div>
                        <div class="form-group">
                            <input type="text" id="sokak" name="street" required placeholder='Street' value={formData.street} onChange={handleFormValueChange}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div class="form-group">
                            <input type="text" id="city" name="city" required placeholder='City' value={formData.city} onChange={handleFormValueChange}/>
                        </div>
                        <div class="form-group">
                            <input type="text" id="town" name="town" required placeholder='Town' value={formData.town} onChange={handleFormValueChange}/>
                        </div>
                    </div>

                    <div class="form-group single-item">
                        <input type="text" id="postCode" name="postCode" required placeholder='Post Code' value={formData.postCode} onChange={handleFormValueChange}/>
                    </div>
                    <button className='form4Button' type="submit">Save</button>
                </form>
            </div>

        </>
    )
}
export default P4form