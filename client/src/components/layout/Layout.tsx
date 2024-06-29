import {Outlet} from "react-router-dom"
import Header from "./header/Header"
import SignIn from "../popups/signIn/SignIn"
import SignUp from "../popups/signUp/SignUp"

const Layout = () => {
    return (
        <div className="h-[100vh] flex flex-col">
            <Header />
            <Outlet />

            <SignIn />
            <SignUp />
        </div>
    )
}

export default Layout
