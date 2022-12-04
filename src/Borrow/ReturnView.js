import React, {useEffect, useState} from "react";
import axios from "axios";
import {BorrowingItemList} from "./BorrowingItemList";

export function ReturnView() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/borrows')
            .then(v => setBooks(v.data));
    }, []);

    const handleAddClick = (borrowId, bookId, callback) => {
        axios.put(`http://localhost:8080/api/v1/borrow/return?borrowId=${borrowId}&bookId=${bookId}`)
            .then(v => {
                alert("반납되었습니다.");
                callback();
            }, e => {
                alert("서버 장애");
                console.log(e);
            });
    };

    return <>
        <div className="row justify-content-center m-4">
            <h1 className="text-center">Book Borrow System</h1>
        </div>
        <div className="card">
            <div className="row">
                <div className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
                    <BorrowingItemList books={books} onAddClick={handleAddClick}/>
                </div>
                <div className="col-md-4 summary p-4">
                    <div className="row pt-2 pb-2 border-top">
                        <a className="btn btn-dark col-12" href={"/"}>메인으로 돌아가기</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}