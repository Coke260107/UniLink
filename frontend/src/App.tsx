import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import HomePage from "./pages/HomePage";

// Utils
import MainLayout from "./utils/MainLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
