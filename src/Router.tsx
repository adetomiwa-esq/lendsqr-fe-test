import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Page from "./signIn/Page";
import MainLayout from "./Layouts/MainLayout";
import UsersPage from "./users/UsersPage";
import UserDataPage from "./userData/UserDataPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/" element={<Page />} />
            <Route path="/dashboard" element={<MainLayout />}>
                <Route path="users">
                    <Route path="" index element={<UsersPage />} />
                    <Route path="selected-user" element={<UserDataPage />}/>
                </Route>
            </Route>
        </Route>
    )
)

export default router