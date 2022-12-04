import React from "react";
import {BorrowingItem} from "./BorrowingItem";

export function BorrowingItemList({books = [], onAddClick}) {
    return (
        <React.Fragment>
            <h5 className="flex-grow-0"><b>대여 중 도서 목록</b></h5>
            <ul className="list-group products">
                {books.map(v =>
                    <li key={v.bookId} className="list-group-item d-flex mt-3">
                        <BorrowingItem {...v} onAddClick={onAddClick}/>
                    </li>
                )}
            </ul>
        </React.Fragment>
    )
}