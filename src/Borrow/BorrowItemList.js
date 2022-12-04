import React from "react";
import {BorrowItem} from "./BorrowItem";

export function BorrowItemList({books, onAddClicked}) {
    return (
        <React.Fragment>
            <h5 className="flex-grow-0"><b>대여 가능 도서 목록</b></h5>
            <ul className="list-group products">
                {books.map(v =>
                    <li key={v.bookId} className="list-group-item d-flex mt-3">
                        <BorrowItem {...v} onAddClicked={onAddClicked}/>
                    </li>
                )}
            </ul>
        </React.Fragment>
    )

}