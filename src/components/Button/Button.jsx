
const Button = ({clickHandler , btnText, disabled}) =>{
return <button onClick={clickHandler} disabled={disabled}>{btnText}</button>
};
export default Button;