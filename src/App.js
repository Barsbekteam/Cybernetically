import './style.scss';
import React from "react";
import Stock from "./components/Stock";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import StockLimit from "./components/Stock/StockLimit";


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<StockLimit/>}></Route>
                <Route path={'/dnd'} element={<Stock/>}></Route>
            </Routes>
        </>
    );
}

export default App;
