import {FC, HTMLInputTypeAttribute} from "react"
import styles from "./inputBorder.module.css"

export interface IInput {
    type: HTMLInputTypeAttribute | undefined
    className: string | undefined
    placeholder: string
}

const InputBorder = (data:any) => {
    return (
        <input {...data} className={`${styles.input_border} ${data.className?data.className:''}`} />
    )
}

export default InputBorder
