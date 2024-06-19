import {FC} from "react"
import {IButton} from "../Button"
import styles from "./ButtonText.module.css"

const ButtonText:FC<IButton> = ({children, onClick}) => {
    return (
        <button className={styles.button_text} onClick={onClick}>{children}</button>
    )
}

export default ButtonText
