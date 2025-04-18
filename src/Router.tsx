import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Page from "./signIn/Page";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/" element={<Page />} />
        </Route>
    )
)

export default router