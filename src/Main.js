import React, {useEffect, useState} from "react";
import axios from "axios";
import {BookList} from "./Book/BookList";

export function Main() {
    const [books, setBooks] = useState([
        {bookId: 'uuid-1', title: 'book1', price: 1000, status: 'BORROW_POSSIBLE'},
        {bookId: 'uuid-2', title: 'book2', price: 500, status: 'BORROW_IMPOSSIBLE'},
        {bookId: 'uuid-3', title: 'book3', price: 1500, status: 'BORROW_POSSIBLE'}
    ]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/books')
            .then(v => setBooks(v.data));
    }, []);

    return <>
        <div className="row justify-content-center m-4">
            <h1 className="text-center">Book Borrow System</h1>
        </div>
        <div className="card">
            <div className="row">
                <div className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
                    <BookList books={books}/>
                </div>
                <div className="col-md-4 summary p-4">
                    <br/><br/>
                    <div className="row pt-2 pb-2 border-top">
                        <a className="btn btn-dark col-12" href={"/book/create"}>도서 추가</a>
                    </div>
                    <div className="row pt-2 pb-2 border-top">
                        <a className="btn btn-dark col-12" href={"/book/borrow"}>도서 대여</a><br/>
                    </div>
                    <div className="row pt-2 pb-2 border-top">
                        <a className="btn btn-dark col-12" href={"/book/return"}>도서 반납</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}