import './Steps.css'
import adress from'../../assets/Steps/Location.png'
import payment from'../../assets/Steps/Payment.png'
import shipping from'../../assets/Steps/Shipping.png'
function StepCard({stepNum,stepName, className,img}) {
    console.log(className)
    return (
        <div className={
            className === 1 ? "steps active" : "steps"
        }
        
        >
            <img src={img} alt="" className="stepImg" />
            <div className="stepText">
                <p className="stepCount">{stepNum}</p>
                <p className="stepName">{stepName}</p>
            </div>
        </div>
    )
}

function Steps({card1, card2, card3}) {
    
    return (
        <>
            <div className="row">
                <div className="col-12 stepsContainer">
                   <StepCard stepNum={"Step 1"} stepName={"Address"} img={adress} className={card1}/>
                   <StepCard stepNum={"Step 2"} stepName={"Shipping"} img={shipping} className={card2}/>
                   <StepCard stepNum={"Step 3"} stepName={"Payment"} img={payment} className={card3}/>
                </div>
            </div>
        </>
    )
}
export default Steps