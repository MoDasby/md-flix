import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPage from "./pages/All/AllPage";
import HomePage from "./pages/Home/HomePage";
import MoviePage from "./pages/MoviePage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/all/:type" element={<AllPage />} />
                <Route path="/:type/:id" element={<MoviePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;