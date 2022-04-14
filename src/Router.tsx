import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import DetailsPage from "./pages/Details";
import SearchPage from "./pages/Search";
import TrendingPage from "./pages/Trending/TrendingPage";
import ExplorePage from "./pages/Explore";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/details/:type/:id" element={<DetailsPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/trending" element={<TrendingPage />} />
                <Route path="/explore" element={<ExplorePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;