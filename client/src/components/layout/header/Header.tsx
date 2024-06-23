//import "./Header.css"
import {useDispatch} from 'react-redux'
import {ButtonText, ButtonBorder} from '../../ui/buttons/Button'
import Container from '../container/Container'
import styles from './Header.module.css'
import {IPopup, openPopup} from '../../../assets/store/reducers/popupSlice'

const Header = () => {

    const dispatch = useDispatch()

    function openPopupHandler(e:any, popup: keyof IPopup) {
        e.preventDefault()

        dispatch(openPopup(popup))
    }

    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <a href="/" className={styles.logo}>
                    <img src="./logo/android-chrome-512x512.png" alt="logo" />
                </a>
                <div className={styles.buttons}>
                    <ButtonText className='' onClick={e => openPopupHandler(e, 'signIn')}>Login</ButtonText>
                    <ButtonBorder className='' onClick={e => openPopupHandler(e, 'signUp')}>Register</ButtonBorder>
                </div>
            </Container>
        </header>
    )
}

export default Header
