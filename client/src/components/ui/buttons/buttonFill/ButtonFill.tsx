import {FC} from "react";
import {IButton} from "../Button";
import styles from "./ButtonFill.module.css"

const ButtonFill:FC<IButton> = ({children}) => {
    return (
        <button className={styles.button_fill}>{children}</button>
    )
}

export default ButtonFill
