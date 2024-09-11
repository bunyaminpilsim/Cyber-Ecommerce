import './p1s3Card.css'
import { useNavigate } from 'react-router-dom';

function P1s3Card({imageNum, title,description,backgroundColor,buttonColor}){
    const navigate = useNavigate();
    const handleRouteProductsPage = () => {
        navigate('/productsPage');
    };
    return(
        <div className="col-3 p1s3Cards" style={{backgroundColor: backgroundColor}}>
            <img src={imageNum} alt="" className="s9Img"/>
            <div className="s9textButton">
                <p className="s9Title" style={{color: buttonColor}}>{title}</p>
                <p className="s9Description">{description}</p>
                <button className="s9Button" onClick={handleRouteProductsPage} style={
                    {color: buttonColor, backgroundColor: 'transparent', borderColor: buttonColor}
                    
                }
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = buttonColor;
                    e.currentTarget.style.color = backgroundColor;
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = backgroundColor;
                    e.currentTarget.style.color = buttonColor;
                }}
                >Shop Now</button>
            </div>
            
        </div>
    )
}
export default P1s3Card

