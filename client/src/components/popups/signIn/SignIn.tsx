import styles from './SignIn.module.css'
import {IAuthInput, signInField} from '../../../assets/forms/authFields'
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import InputBorder from '../../ui/inputs/textInput/inputBorder/inputBorder'
import {ButtonFill} from '../../ui/buttons/Button'
import {IoMdClose} from 'react-icons/io'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../assets/store/store'
import {closePopup, getPopupState} from '../../../assets/store/reducers/popupSlice'
import {FC, useState} from 'react'
import {ISignIn, IUser} from '../../../services/auth/IAuth'
import {useLoginMutation} from '../../../services/auth/auth'
import {useAppDispatch} from '../../../assets/hooks/useRedux'

const SignIn:FC = () => {

    const [authState, setAuthState] = useState<ISignIn>({} as ISignIn)

    const popupState = useSelector((state: RootState) => getPopupState(state, 'signIn'))

    const dispatch = useAppDispatch()

    const [login, {data: userResult, error, isLoading}] = useLoginMutation()

    const defaultValues = signInField.reduce((values, field) => {
        values[field.name as keyof IAuthInput] = "";
        return values
    }, {} as IAuthInput)

    const {control, handleSubmit, formState: {errors}, getValues} = useForm<IAuthInput>({defaultValues: defaultValues})

    const onSubmit: SubmitHandler<IAuthInput> = async (data) => {
        try {
            await login(data).unwrap()

            console.log(userResult)
        } catch(error) {
                console.log(error)
        }
    }

    function closePopupHandler(e:any) {
        e.preventDefault()

        dispatch(closePopup('signIn'))
    }

    return (
        <div className={`${styles.popup} ${popupState?styles.active:''}`}>
            <div className={styles.shadow} onClick={closePopupHandler}></div>

            <form className={styles.window} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={styles.window__title}>Login</h3>
                <button className={styles.window__close} onClick={closePopupHandler}><IoMdClose /></button>
                
                {
                    signInField.map((fieldData, index) => {
                        return (
                            <Controller
                                key={index}
                                name={fieldData.name}
                                control={control}
                                rules={{
                                    ...fieldData.options,
                                }}
                                render={({field}) => (
                                    <InputBorder
                                        {...field}
                                        type={fieldData.type}
                                        placeholder={fieldData.placeholder}
                                        className={styles.window__input}
                                    />
                                )}
                            />
                        )
                    })
                }

                <ButtonFill className={styles.button__submit}>Login</ButtonFill>
            </form>
        </div>
    )
}

export default SignIn
