import './Button.css'
function Button({buttonColor,bgColor,buttonText}) {

    return (
        <>
            <button
                className="button"
                style={{ color: buttonColor, backgroundColor: bgColor, borderColor: buttonColor }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = buttonColor;
                    e.currentTarget.style.color = bgColor;
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = bgColor;
                    e.currentTarget.style.color = buttonColor;
                }}
            >
                {buttonText}
            </button>

        </>


    )
}
export default Button