import React from 'react';
import App from './App';
import {render} from "react-dom";
import {
    BrowserRouter, Routes, Route
} from "react-router-dom";
import './index.css'
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ProductPage from "./pages/ProductPage";
import {allBooksData} from "./resources/bookDesctiptions";

const rootElement = document.getElementById("root");

render(<BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            <Route path="" key="/" element={<Home/>}/>
            <Route path="home" key="home" element={<Home/>}/>
            {allBooksData.map((bookData) => {
                return (
                    <Route
                        path={bookData.url}
                        key={bookData.url}
                        element={<ProductPage title={bookData.bookTitle} cover={bookData.coverImage} cards={bookData.cards}/>}
                    />
                );
            })}
            <Route path="*" key="*" element={<PageNotFound/>}/>
        </Route>
    </Routes>
</BrowserRouter>, rootElement);
