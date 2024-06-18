import {Outlet} from "react-router-dom"
import Header from "./header/Header"

const Layout = () => {
    return (
        <div className="h-[100vh]">
            <Header />
            <Outlet />
        </div>
    )
}

export default Layout
