import React, { useState } from 'react';
import './Page5Card.css'; // Stil dosyası

const Page5Card = ({ isSelected, onSelect,title1,title2,title3 }) => {
    return (
        <div className={`p5Card ${isSelected ? 'selected' : 'not-selected'}`} onClick={onSelect}>
            <div className="p5CardLeft">
                <input type="radio" checked={isSelected} readOnly />
                <p style={{fontWeight:'600'}} className='p5CardTexts'>{title1}</p>
                <p className='p5CardTexts'>{title2}</p>
            </div>
            <p className="p5CardRight p5CardTexts">{title3}</p>
        </div>
    );
};
export default Page5Card;