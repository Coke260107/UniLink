import { BrowserRouter, Routes, Route } from "react-router";

// Pages
import HomePage from "./pages/HomePage";

// Utils
import MainLayout from "./utils/MainLayout";
import { AuthProvider } from "./auth/authcontext";

function App() {
    return (
        <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
