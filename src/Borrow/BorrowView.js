import React, {useEffect, useState} from "react";
import axios from "axios";
import {BorrowItemList} from "./BorrowItemList";
import {Summary} from "./Summary";

export function BorrowView() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/books?status=BORROW_POSSIBLE')
            .then(v => setBooks(v.data));
    }, []);

    const [items, setItems] = useState([]);
    const handleAddClicked = bookId => {
        const book = books.find(v => v.bookId === bookId);
        const found = items.find(v => v.bookId === bookId);
        const updatedItems = found ? [...items] : [...items, {...book}];
        setItems(updatedItems);
    }

    const handleAddCancelClick = bookId => {
        const updatedItems = items.filter((v) => v.bookId !== bookId);
        setItems(updatedItems);
    }

    const handleBorrowSubmit = (userInfo, callback) => {
        if (items.length === 0) {
            alert("대여 할 도서가 없습니다.");
        } else {
            axios.post('http://localhost:8080/api/v1/borrows', {
                    email: userInfo.email,
                    phoneNum: userInfo.phoneNum,
                    borrowItems: items.map(v => ({
                        bookId: v.bookId,
                        fee: v.price,
                        term: 7
                    }))
                }).then(v => {
                    alert("정상적으로 대여되었습니다.");
                    callback();
            })
        }
    }

    return <>
        <div className="row justify-content-center m-4">
            <h1 className="text-center">Book Borrow System</h1>
        </div>
        <div className="card">
            <div className="row">
                <div className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
                    <BorrowItemList books={books} onAddClicked={handleAddClicked}/>
                </div>
                <div className="col-md-4 summary p-4">
                    <Summary items={items} onAddClicked={handleAddCancelClick} onBorrowSubmit={handleBorrowSubmit}/>
                </div>
            </div>
        </div>
    </>
}