import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPage from "./pages/All/AllPage";
import HomePage from "./pages/Home/HomePage";
import DetailsPage from "./pages/Details";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/all/:type" element={<AllPage />} />
                <Route path="/details/:type/:id" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;