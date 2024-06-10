import {Outlet} from "react-router-dom"
import Header from "./header/Header"

const Layout = () => {
    return (
        <div>
            <Header />
            <h1>Layout</h1>
            <Outlet />
        </div>
    )
}

export default Layout
