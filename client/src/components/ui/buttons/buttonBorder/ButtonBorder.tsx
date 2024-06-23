import {FC} from "react";
import {IButton} from "../Button";
import styles from "./ButtonBorder.module.css";

const ButtonBorder:FC<IButton> = ({children, className, onClick}) => {
    return (
        <button className={`${styles.button_border} ${className?className:''}`} onClick={onClick}>{children}</button>
    )
}

export default ButtonBorder
