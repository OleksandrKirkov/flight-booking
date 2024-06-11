import {MdOutlineSwapHoriz} from "react-icons/md";
import Container from "../../../layout/container/Container";
import styles from "./Search.module.css"
import {ButtonFill} from "../../../ui/buttons/Button";

const Search = () => {
    return (
        <div className={styles.search}>
            <div className={styles.search__top}>
                <Container className={styles.search__top_container}>
                    <div className={styles.search__checkbox}>
                        <input type="radio" name="search" checked id="search_checkbox"/>
                        <label className={styles.search__label} htmlFor="search_checkbox">One way</label>
                    </div>
                    <div className={styles.search__checkbox}>
                        <input type="radio" name="search" id="search_checkbox_round"/>
                        <label className={styles.search__label} htmlFor="search_checkbox_round">Round Trip</label>
                    </div>
                </Container>
            </div>
            <form className={styles.search__bottom} action="#">
                <Container className={styles.search__bottom_container}>
                <div className={styles.search__block}>
                    <label className={styles.search__block_label}>
                        <span>From</span>
                        <input />
                    </label>
                    <button className={styles.search__swap}>
                        <MdOutlineSwapHoriz />
                    </button>
                </div>
                <div className={styles.search__block}>
                    <label className={styles.search__block_label}>
                        <span>To</span>
                        <input />
                    </label>
                </div>
                <div className={styles.search__block}>
                    <label className={styles.search__block_label}>
                        <span>Departure</span>
                        <input />
                    </label>
                </div>
                <div className={styles.search__block}>
                    <label className={styles.search__block_label}>
                        <span>Return</span>
                        <input />
                    </label>
                </div>
                <div className={styles.search__block}>
                    <ButtonFill>Search Flight</ButtonFill>
                </div>
                </Container>
            </form>
        </div>
    )
}

export default Search;
