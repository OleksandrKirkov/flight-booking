import {Outlet} from "react-router-dom"
import styles from "./Cabinet.module.css"
import Container from "../../layout/container/Container"
import Sidebar from "./sidebar/Sidebar"

const Cabinet = () => {
    return (
        <div className={styles.cabinet}>
            <Container className={styles.cabinet__container}>
                <Sidebar />
                <div className={styles.cabinet__screen}>
                    <Outlet />
                </div>
            </Container>
        </div>
    )
}

export default Cabinet
