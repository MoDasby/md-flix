import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPage from "./pages/All/AllPage";
import HomePage from "./pages/Home/HomePage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/all/:type" element={<AllPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;