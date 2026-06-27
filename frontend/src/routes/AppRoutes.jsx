import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import ImageDetection from "../pages/ImageDetection";
import History from "../pages/History";
import Analytics from "../pages/Analytics";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import About from "../pages/About";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Dashboard />} />

                <Route

                    path="/image-detection"

                    element={<ImageDetection />}

                />

                <Route

                    path="/history"

                    element={<History />}

                />

                <Route

                    path="/analytics"

                    element={<Analytics />}

                />

                <Route

                    path="/reports"

                    element={<Reports />}

                />

                <Route

                    path="/settings"

                    element={<Settings />}

                />

                <Route

                    path="/about"

                    element={<About />}

                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;