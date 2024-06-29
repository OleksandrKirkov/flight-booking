import {ButtonFill} from "../../../../ui/buttons/Button"
import styles from "./PersonalData.module.css"
import {personal_data} from "./personal-data"

const PersonalData = () => {
    return (
        <div className={styles.personal_data}>
            <ul className={styles.personal_data__list}>
                {
                    personal_data.map((item, index) => {
                        return (
                            <li key={index} className={styles.personal_data__item}>
                                <h3 className={styles.personal_data__title}>{item.title}</h3>
                                <form className={styles.personal_data__form}>
                                    <label className={styles.personal_data__label}>
                                        <input />
                                        <ButtonFill>Зберегти</ButtonFill>
                                    </label>
                                </form>
                            </li>
                        )         
                    })
                }
            </ul>
        </div>
    )
}

export default PersonalData
