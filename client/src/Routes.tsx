import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from "./components/screens/home/Home";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route>
            <Route path="/" element={<Home />} /> 
        </Route>
        <Route path="/auth" />
    </Route>
))

export default router
