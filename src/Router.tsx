import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Page from "./signIn/Page";
import MainLayout from "./Layouts/MainLayout";
import UsersPage from "./users/UsersPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/" element={<Page />} />
            <Route path="/dashboard" element={<MainLayout />}>
                <Route index path="users" element={<UsersPage />} />
            </Route>
        </Route>
    )
)

export default router