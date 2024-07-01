import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {IAuthInput, signInField, signUpFields} from "../../../assets/forms/authFields"
import {IoMdClose} from "react-icons/io";
import InputBorder from "../../ui/inputs/textInput/inputBorder/inputBorder";
import {ButtonFill} from "../../ui/buttons/Button";
import styles from "./SignUp.module.css"
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../../assets/store/store";
import {closePopup, getPopupState} from "../../../assets/store/reducers/popupSlice";
import {useState} from "react";
import {ISignUp} from "../../../services/auth/IAuth";
import {useRegisterMutation} from "../../../services/auth/auth";

const SignUp = () => {

    const [authState, setAuthState] = useState<ISignUp>({} as ISignUp)

    const popupState = useSelector((state: RootState) => getPopupState(state, 'signUp'))

    const dispatch = useDispatch()

    const [register, {data: userResult, error, isLoading}] = useRegisterMutation()

    const defaultValues = signUpFields.reduce((values, field) => {
        values[field.name as keyof IAuthInput] = "";
        return values
    }, {} as IAuthInput)

    const {control, handleSubmit, formState: {errors}, getValues} = useForm<IAuthInput>({defaultValues: defaultValues})

    const onSubmit: SubmitHandler<IAuthInput> = async (data) => {
        try {
            console.log("register")
            setAuthState(data)
            await register(data).unwrap()

            if(userResult) console.log(userResult)
            else console.log(error)
        } catch (error) {
                console.error(error)
            }
    }

    function closePopupHandler(e:any) {
        e.preventDefault()

        dispatch(closePopup('signUp'))
    }

    return (
        <div className={`${styles.popup} ${popupState?styles.active:''}`}>
            <div className={styles.shadow} onClick={closePopupHandler}></div>

            <form className={styles.window} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={styles.window__title}>Register</h3>
                <button className={styles.window__close} onClick={closePopupHandler}><IoMdClose/></button>

                {
                    signUpFields.map((fieldData, index) => {
                        return (
                            <Controller
                                key={index}
                                name={fieldData.name}
                                control={control}
                                rules={{
                                    ...fieldData.options
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

                <ButtonFill className={styles.button__submit}>Register</ButtonFill>
            </form>
        </div>
    )
}

export default SignUp
