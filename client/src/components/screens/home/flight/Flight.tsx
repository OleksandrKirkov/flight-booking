import {FC} from "react"
import {IFlight as IFlightResult} from "../Home"
import styles from "./Flight.module.css"
import {ButtonFill} from "../../../ui/buttons/Button"
import {MdFlightLand, MdFlightTakeoff} from "react-icons/md"

interface IFlight {
    flightResult: IFlightResult
}

const Flight:FC<IFlight> = (data) => {
    const {flightResult} = data

    return (
        <div className={styles.flight}>
            <div className={styles.flight__left}>
                <h2 className={styles.flight__airline_name}>{flightResult.airline.name}</h2>
                <p className={styles.flight__model}>{flightResult.model}</p>
            </div>
            <div className={styles.flight__center}>
                <p className={styles.flight__date}>{flightResult.departure_date}</p>
                
                <div className={styles.flight__info}>
                    <div className={styles.flight__data}>
                        <span><MdFlightTakeoff /></span>
                        <p className={styles.flight__duration}>
                            Duration: <span>{flightResult.duration}</span>
                        </p>
                        <span><MdFlightLand /></span>
                    </div>
                    <div className={styles.flight__line}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.flight__data}>
                        <p className={styles.flight__country}>{flightResult.departure.country}</p>
                        <p className={styles.flight__data_text}>Direct</p>
                        <p className={styles.flight__country}>{flightResult.arrival.country}</p>
                    </div>
                </div>

                <p className={styles.flight__date}>{flightResult.arrival_date}</p>
            </div>
            <div className={styles.flight__right}>
                <p className={styles.flight__price}>US$ {flightResult.price}</p>
                <ButtonFill className={styles.flight__button}>Select Flight</ButtonFill>
            </div>
        </div>
    )
}

export default Flight
