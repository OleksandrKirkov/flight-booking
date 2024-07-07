//import "./Header.css"
import {useDispatch} from 'react-redux'
import {ButtonText, ButtonBorder, ButtonFill} from '../../ui/buttons/Button'
import Container from '../container/Container'
import styles from './Header.module.css'
import {IPopup, openPopup} from '../../../assets/store/reducers/popupSlice'
import {sidebar_data} from '../../screens/cabinet/sidebar/sidebar-data'
import {Link} from 'react-router-dom'
import {useLogoutMutation} from '../../../services/auth/auth'
import {useEffect, useState} from 'react'

const Header = () => {

    const [tokenState, setTokenState] = useState<string | null>(null)

    const dispatch = useDispatch()

    const [logout, {error, isLoading}] = useLogoutMutation()

    function openPopupHandler(e:any, popup: keyof IPopup) {
        e.preventDefault()

        dispatch(openPopup(popup))
    }

    async function logoutHandler(e: any) {
        try {
            await logout()

            setTokenState(null)
        } catch(error) {
            console.log(error)         
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        
        setTokenState(token)
    }, [])

    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <Link to="/" className={styles.logo}>
                    <img src={`../../../../public/logo/android-chrome-512x512.png`} alt="logo" />
                </Link>
                { tokenState ?
                    (<div className={styles.header__auth}>
                        <a className={styles.header__user} href="">U</a>
                        <div className={styles.header__user_modal}>
                            <ul className={styles.header__list}>
                                {
                                    sidebar_data.map((item, index) => (
                                        <li key={index} className={styles.header__item}>
                                            <Link to={item.link} className={styles.header__link}>{item.name}</Link>
                                        </li>
                                    ))
                                }

                                <li className={styles.header__item}>
                                    <ButtonFill onClick={logoutHandler} className={styles.header__button}>Logout</ButtonFill>
                                </li>
                            </ul>
                        </div>
                    </div>)
                    :
                    (<div className={styles.buttons}>
                        <ButtonText className='' onClick={e => openPopupHandler(e, 'signIn')}>Login</ButtonText>
                        <ButtonBorder className='' onClick={e => openPopupHandler(e, 'signUp')}>Register</ButtonBorder>
                    </div>)
                }
            </Container>
        </header>
    )
}

export default Header
