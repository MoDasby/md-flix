import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPage from "./pages/All/AllPage";
import HomePage from "./pages/Home/HomePage";
import DetailsPage from "./pages/Details";
import SearchPage from "./pages/Search";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/all/:type" element={<AllPage />} />
                <Route path="/details/:type/:id" element={<DetailsPage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;