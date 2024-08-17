import './Stepsbutton.css';
function StepsButton({text,bgColor,borderColor}){

    return(
        <>
            <button className='stepBtn'
            style={{backgroundColor: bgColor, borderColor: borderColor, color: borderColor}}
            >{text}</button>
        </>
    )
}
export default StepsButton;