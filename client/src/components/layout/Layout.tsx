import {Outlet} from "react-router-dom"
import Header from "./header/Header"
import SignIn from "../popups/signIn/SignIn"

const Layout = () => {
    return (
        <div className="h-[100vh]">
            <Header />
            <Outlet />

            <SignIn />
        </div>
    )
}

export default Layout
