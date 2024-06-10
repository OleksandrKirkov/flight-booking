import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from "./components/screens/home/Home";
import Layout from "./components/layout/Layout";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} /> 
        </Route>
        <Route path="/auth" />
    </Route>
))

export default router
