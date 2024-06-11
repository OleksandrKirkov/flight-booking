import styles from "./Container.module.css"
import {FC, ReactElement, ReactText} from "react"

interface IContainer {
    children: ReactElement | ReactElement[]
    className: string | undefined
}

const Container:FC<IContainer> = ({children, className = undefined}) => {
    return (
        <div className={`${styles.container}, ${className ? className : ""}`}>{children}</div>
    )
}

export default Container;
