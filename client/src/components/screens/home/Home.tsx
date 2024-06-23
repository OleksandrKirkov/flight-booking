import {useEffect} from "react";
import {useAppSelector} from "../../../assets/hooks/useRedux";
import Container from "../../layout/container/Container";
import Flight from "./flight/Flight";
import Search from "./search/Search";

const Home = () => {
    const flight = useAppSelector((state) => state.flight)

    return (
        <div>
            <Search />

            <Container className="">
                {
                    flight.map((flight, index) => {
                        return (
                            <Flight key={index} flightResult={flight} />
                        )
                    })
                }
            </Container>
        </div>
    )
}

export default Home;
