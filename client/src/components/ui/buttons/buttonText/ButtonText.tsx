import {FC} from "react"
import {IButton} from "../Button"
import styles from "./ButtonText.module.css"

const ButtonText:FC<IButton> = ({children, className, onClick}) => {
    return (
        <button className={`${styles.button_text} ${className?className:''}`} onClick={onClick}>{children}</button>
    )
}

export default ButtonText
