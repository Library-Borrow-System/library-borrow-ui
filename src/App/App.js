import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Main} from "../Main";
import {BookView} from "../Book/BookView";
import {BorrowView} from "../Borrow/BorrowView";
import {ReturnView} from "../Borrow/ReturnView";
import {BookCreateView} from "../Book/BookCreateView"
import axios from "axios";
import {useNavigate} from "react-router";

function App() {
    const handleBookSubmit = (book, callback) => {
        axios.post('http://localhost:8080/api/v1/books', {
            title: book.title,
            category: book.category,
            price: book.price,
            author: book.author,
            isbn: book.isbn
        }).then(v => {
            alert("정상적으로 등록되었습니다");
            callback();
        }, e => {
            alert("서버 장애");
            console.log(e);
        });
    };

    return <Router>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/book/:bookId" element={<BookView/>}></Route>
            <Route path="/book/borrow" element={<BorrowView/>}></Route>
            <Route path="/book/return" element={<ReturnView/>}></Route>
            <Route path="/book/create" element={<BookCreateView onBookSubmit={handleBookSubmit}/>}></Route>
        </Routes>
    </Router>
}

export default App;
