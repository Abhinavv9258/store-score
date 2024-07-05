import * as React from "react";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Index from '../src/pages/Index';

const App = () => {
    return (
        <BrowserRouter >
            <Routes >
                <Route path="/" element={<Index />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;