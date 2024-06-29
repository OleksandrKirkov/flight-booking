import {IFlight} from "../../../../../services/flight/IFlight"
import {ButtonFill} from "../../../../ui/buttons/Button"
import styles from "./Tickets.module.css"
import {ticket_data} from "./ticket-data"
import {MdFlightLand, MdFlightTakeoff} from "react-icons/md"

const Tickets = () => {
    return (
        <div className={styles.tickets}>
            {
                ticket_data.map((ticket: IFlight, index: number) => (
                    <div className={styles.tickets__ticket}>
                        <div className={styles.ticket__left}>
                            <h3 className={styles.ticket__airline}>{ticket.airline.name}</h3>
                            <p className={styles.ticket__model}>{ticket.model}</p>
                        </div>
                        <div className={styles.ticket__center}>
                            <p className={styles.ticket__date}>{ticket.departure_date}</p>
                            <div className={styles.ticket__info}>
                                <div className={styles.ticket__data}>
                                    <MdFlightTakeoff/>
                                    <p className={styles.ticket__duration}>
                                        Duration:
                                        <span> {ticket.deration}</span>
                                    </p>
                                    <MdFlightLand/>
                                </div>
                                <div className={styles.ticket__line}>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className={styles.ticket__data}>
                                    <p className={styles.ticket__airport}>{ticket.departure.country}</p>
                                    <p className={styles.ticket__text}>Direct</p>
                                    <p className={styles.ticket__airport}>{ticket.arrival.country}</p>
                                </div>
                            </div>
                            <p className={styles.ticket__date}>{ticket.arrival_date}</p>
                        </div>
                        <div className={styles.ticket__right}>
                            <p className={styles.ticket__price}>{ticket.price}</p>
                            <ButtonFill className={styles.ticket__delete}>Delete</ButtonFill>
                        </div>
                    </div>
                ))
            }
        </div>
    )        
}

export default Tickets
