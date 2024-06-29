import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from "./components/screens/home/Home";
import Layout from "./components/layout/Layout";
import Cabinet from "./components/screens/cabinet/Cabinet";
import PersonalData from "./components/screens/cabinet/screens/personalData/PersonalData";
import Tickets from "./components/screens/cabinet/screens/tickets/Tickets";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cabinet" element={<Cabinet />}>
                <Route path="/cabinet/personal-data" element={<PersonalData />}/>
                <Route path="/cabinet/tickets" element={<Tickets />}/>
            </Route>
        </Route>
        <Route path="/auth" />
    </Route>
))

export default router
