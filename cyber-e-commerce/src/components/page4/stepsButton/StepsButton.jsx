import './Stepsbutton.css';
function StepsButton({text,bgColor,borderColor,onC}){

    return(
        <>
            <button className='stepBtn'
            style={{backgroundColor: bgColor, borderColor: borderColor, color: borderColor}}
            onClick={onC}
            >{text}</button>
        </>
    )
}
export default StepsButton;