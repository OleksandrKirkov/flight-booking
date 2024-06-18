import Container from "../../layout/container/Container";
import Flight from "./flight/Flight";
import Search from "./search/Search";

export interface IFlight {
    model: string
    departure_date: string
    arrival_date: string
    duration: number
    price: number

    airline: {
        name: string
    }

    departure: {
        city: string
        country: string
    }

    arrival: {
        city: string
        country: string
    }
}

const Home = () => {
    const flightResult:IFlight[] = [
        {
            model: "Model x1df4",
            departure_date: "2003-12-12",
            arrival_date: "2004-12-12",
            duration: 12,
            price: 1200,

            airline: {
                name: "Black"
            },

            departure: {
                city: "Kuiv",
                country: "Ukraine"
            },

            arrival: {
                city: "Herson",
                country: "Ukraine"
            }
        },
        {
            model: "Model x2gpaf",
            departure_date: "2003-12-12",
            arrival_date: "2004-12-12",
            duration: 12,
            price: 1344,

            airline: {
                name: "White"
            },

            departure: {
                city: "Kuiv",
                country: "Ukraine"
            },

            arrival: {
                city: "Herson",
                country: "Ukraine"
            }
        }
    ]

    return (
        <div>
            <Search />
            
            <Container className="">
                {
                    flightResult.map((flight, index) => {
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
