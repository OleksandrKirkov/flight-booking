import {FC} from "react";
import {IButton} from "../Button";
import styles from "./ButtonBorder.module.css";

const ButtonBorder:FC<IButton> = ({children}) => {
    return (
        <button className={styles.button_border}>{children}</button>
    )
}

export default ButtonBorder
