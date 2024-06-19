import {useState} from 'react'
import styles from './SignIn.module.css'
import {IAuthField, IAuthInput, signInField} from '../../../assets/forms/authFields'
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import InputBorder from '../../ui/inputs/textInput/inputBorder/inputBorder'
import {ButtonFill} from '../../ui/buttons/Button'
import {IoMdClose} from 'react-icons/io'

const SignIn = () => {

    const defaultValues = signInField.reduce((values, field) => {
        values[field.name as keyof IAuthInput] = "";
        return values
    }, {} as IAuthInput)

    const {control, handleSubmit, formState: {errors}, getValues} = useForm<IAuthInput>({defaultValues: defaultValues})

    const onSubmit: SubmitHandler<IAuthInput> = (data) => {
        console.log(data, " result data")         
    }

    return (
        <div className={styles.popup}>
            <div className={styles.shadow}></div>

            <form className={styles.window} onSubmit={handleSubmit(onSubmit)}>
                <h3 className={styles.window__title}>Login</h3>
                <button className={styles.window__close}><IoMdClose /></button>
                
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
