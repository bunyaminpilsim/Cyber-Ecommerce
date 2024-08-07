import './CreateCard.css';
import like from '../../assets/Page1Products/Like.png'
function CreateCard({imageNum, description, price}){

    return(
        <div class="productsCard">
        <div class="pcTop">
          <img src={like} alt="" class="pcImg"/>
        </div>
        <img src={imageNum} alt="" class="pcMidImg"/>
        <div class="pcBottom">
          <p class="pcBottomText">{description}</p>
          <p class="pcBottomPrice">${price}</p>
          <button class="pcBottomButton">Buy Now</button>
        </div>
      </div>
    )
}
export default CreateCard