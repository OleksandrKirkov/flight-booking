//import "./Header.css"
import {ButtonText, ButtonBorder} from '../../ui/buttons/Button'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <a href="/" className={styles.logo}>
                    <img src="./logo/android-chrome-512x512.png" alt="logo" />
                </a>
                <div className={styles.buttons}>
                    <ButtonText>Login</ButtonText>
                    <ButtonBorder>Register</ButtonBorder>
                </div>
            </div>
        </header>
    )
}

export default Header
