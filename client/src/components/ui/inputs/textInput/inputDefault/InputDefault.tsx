import {FC} from "react";
import styles from "./InputDefault.module.css"

const InputDefault = (data:any) => {
    return (
        <input className={styles.input__default} {...data}/> 
    )
}

export default InputDefault
