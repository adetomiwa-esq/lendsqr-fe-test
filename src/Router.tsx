import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Page from "./signIn/Page";
import MainLayout from "./Layouts/MainLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/" element={<Page />} />
            <Route path="/:user" element={<MainLayout />}></Route>
        </Route>
    )
)

export default router