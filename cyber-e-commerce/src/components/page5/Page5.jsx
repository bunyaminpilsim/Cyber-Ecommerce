import FooterSection from '../footerSection/FooterSection';
import HeaderSection from '../headerSection/HeaderSection';
import { useState } from 'react';
import Steps from '../steps/Steps';
import './Page5.css';
import Page5Card from './Page5Card';
import StepsButton from '../page4/stepsButton/StepsButton';


function Page5() {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleSelect = (cardIndex) => {
        setSelectedCard(cardIndex);
    };

    const cards = [
        { title1: 'Free', title2: 'Regulary Shipment', title3: '17 Oct, 2023' },
        { title1: '$8.50', title2: 'Get your delivery as soon as possible', title3: '1 Oct, 2023' },
        { title1: 'Schedule', title2: 'Pick a date when you want to get your delivery', title3: 'Select a date' },
    ];
    return (
        <>
            <HeaderSection />
            <Steps card2={1} />
            <div className="page5Container">
                <div className="p5Frame">
                    <div className="p5Block">
                        <p className="p5blockText">Shipment Method</p>
                        <div className="p5RadioGroup">
                            {cards.map((card, index) => (
                                <Page5Card
                                    key={index}
                                    title1={card.title1}
                                    title2={card.title2}
                                    title3={card.title3}
                                    isSelected={selectedCard === index}
                                    onSelect={() => handleSelect(index)}
                                />))
                            }
                        </div>
                    </div>
                    <div className="p5Buttons">
                        <StepsButton text={"Back"} bgColor={'white'} borderColor={'black'} />
                        <StepsButton text={"Next"} bgColor={'black'} borderColor={'white'} />
                    </div>
                </div>
            </div>
            <FooterSection />
        </>

    )
}
export default Page5;