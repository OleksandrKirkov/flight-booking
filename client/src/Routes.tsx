import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from "./components/screens/home/Home";
import Layout from "./components/layout/Layout";
import Cabinet from "./components/screens/cabinet/Cabinet";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cabinet" element={<Cabinet />} />
        </Route>
        <Route path="/auth" />
    </Route>
))

export default router
