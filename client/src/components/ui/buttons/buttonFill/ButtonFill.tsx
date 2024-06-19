import {FC} from "react";
import {IButton} from "../Button";
import styles from "./ButtonFill.module.css"

const ButtonFill:FC<IButton> = ({children, className, onClick}) => {
    return (
        <button className={`${styles.button_fill} ${className?className:''}`} onClick={onClick}>{children}</button>
    )
}

export default ButtonFill
