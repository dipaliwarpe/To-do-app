import styles from './Input.module.css'
const Input = ({ changeHandler, value, keyUpHandler }) => {

    return (
        <input type="text"
            className={styles.InputStyle}
            onChange={changeHandler}
            value={value}
            onKeyUp = {keyUpHandler}
            />
    )
};

export default Input;