import {Link} from "react-router-dom"
import styles from "./Sidebar.module.css"
import {sidebar_data} from "./sidebar-data"

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <ul className={styles.sidebar__list}>
                {
                    sidebar_data.map((item, index) => (
                        <li key={index} className={styles.sidebar__item}>
                            <Link className={styles.sidebar__link} to={item.link}>{item.name}</Link>
                        </li> 
                    ))
                }
            </ul>
        </aside>
    )        
}

export default Sidebar
