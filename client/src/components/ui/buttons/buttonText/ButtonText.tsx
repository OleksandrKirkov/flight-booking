import {FC} from "react"
import {IButton} from "../Button"
import styles from "./ButtonText.module.css"

const ButtonText:FC<IButton> = ({children}) => {
    return (
        <button className={styles.button_text}>{children}</button>
    )
}

export default ButtonText
