import {MdOutlineSwapHoriz, MdToday} from "react-icons/md";
import Container from "../../../layout/container/Container";
import styles from "./Search.module.css"
import {ButtonFill} from "../../../ui/buttons/Button";
import {useState} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form"
import {IFlightField, flightFields} from "../../../../assets/forms/flightFields";
import {LuPlaneLanding, LuPlaneTakeoff} from "react-icons/lu";
import InputDefault from "../../../ui/inputs/textInput/inputDefault/InputDefault";
import {useSearchFlightQuery} from "../../../../services/flight/flight";
import {ISearchFlight} from "../../../../services/flight/IFlight";

const searchIcons = [<LuPlaneTakeoff/>, <LuPlaneLanding/>, <MdToday/>, <MdToday/>]

const Search = () => {
    const [searchTypeState, setSearchTypeState] = useState<'one' | 'round'>('one')
    const [searchDataState, setSearchDataState] = useState<ISearchFlight>({} as ISearchFlight)
    const {data, isFetching} = useSearchFlightQuery(searchDataState)

    const defaultValues = flightFields.reduce((values, field) => {
        values[field.name as keyof ISearchFlight] = "";
        return values
    }, {} as ISearchFlight);

    const { control, handleSubmit, formState: {errors}, getValues } = useForm<ISearchFlight>({defaultValues: defaultValues})

    const onSubmit: SubmitHandler<ISearchFlight> = (data) => {
        setSearchDataState(data)

        console.log(isFetching)
        console.log(data, 'data')
    }

    return (
        <div className={styles.search}>
            <div className={styles.search__top}>
                <Container className={styles.search__top_container}>
                    <div className={`${styles.search__checkbox} ${searchTypeState == 'one'?styles.active:''}`}>
                        <input type="radio" name="search" id="search_checkbox" onChange={e => setSearchTypeState('one')}/>
                        <div className={styles.search__checkbox_input}><span></span></div>
                        <label className={styles.search__label} htmlFor="search_checkbox">One way</label>
                    </div>
                    <div className={`${styles.search__checkbox} ${searchTypeState == 'round'?styles.active:''}`}>
                        <input type="radio" name="search" id="search_checkbox_round" onChange={e => setSearchTypeState('round')}/>
                        <div className={styles.search__checkbox_input}><span></span></div>
                        <label className={styles.search__label} htmlFor="search_checkbox_round">Round Trip</label>
                    </div>
                </Container>
            </div>
            <form className={styles.search__bottom} onSubmit={handleSubmit(onSubmit)}>
                <Container className={styles.search__bottom_container}>
                    <>
                    {
                        flightFields.map((fieldData, index) => {
                            return (
                                <div className={styles.search__block}>
                                    <label className={styles.search__block_label}>
                                        <span>{fieldData.name.charAt(0).toUpperCase() + fieldData.name.slice(1)}</span>
                                        {fieldData.name == "arrival_date" ? (
                                            <>
                                            {searchTypeState == 'one' ? (
                                                <p>Select round trip</p>
                                            ) : (
                                                <div className={styles.search__input}>
                                                {searchIcons[index]}
                                                <Controller
                                                    key={index}
                                                    name={fieldData.name}
                                                    control={control}
                                                    rules={{
                                                        ...fieldData.options,
                                                    }}
                                                    render={({field}) => (
                                                        <InputDefault
                                                            {...field}
                                                            type={fieldData.type}
                                                            placeholder={fieldData.placeholder}
                                                        />
                                                    )}
                                                />
                                                </div>
                                            )}
                                            </>
                                        ) : (
                                            <div className={styles.search__input}>
                                            {searchIcons[index]}
                                            <Controller
                                                key={index}
                                                name={fieldData.name}
                                                control={control}
                                                rules={{
                                                    ...fieldData.options,
                                                }}
                                                render={({field}) => (
                                                    <InputDefault
                                                        {...field}
                                                        type={fieldData.type}
                                                        placeholder={fieldData.placeholder}
                                                    />
                                                )}
                                            />
                                            </div>
                                        )}
                                    </label>
                                    {
                                        index == 0 ? (
                                            <button className={styles.search__swap}>
                                                <MdOutlineSwapHoriz />
                                            </button>
                                        ) : undefined
                                    }
                                </div>
                            )
                        })
                    }
                    <div className={styles.search__block}>
                        <ButtonFill className="">Search Flight</ButtonFill>
                    </div>
                    </>
                </Container>
            </form>
        </div>
    )
}

export default Search;
