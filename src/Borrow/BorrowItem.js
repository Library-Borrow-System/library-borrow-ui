import React from "react";

export function BorrowItem(props) {
    const handleAddBtnClick = (e) => {
        props.onAddClicked(props.bookId);
    }

    return <React.Fragment>
        <div className="col-2">
            <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/3296/3296160.png"/>
        </div>
        <div className="col">
            <div className="row text-muted">대여료: {props.price}원</div>
            <div className="row">{props.title}</div>
        </div>
        <div className="col text-end action">
            <a className="btn btn-small btn-outline-dark" href={`/book/${props.bookId}`}>상세 조회</a><span>  </span>
            <button className="btn btn-small btn-outline-dark" onClick={handleAddBtnClick}>선택</button>
        </div>
    </React.Fragment>
}