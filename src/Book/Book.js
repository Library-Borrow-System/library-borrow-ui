import React from "react";

export function Book(props) {
    const bookId = props.bookId;
    const title = props.title;
    const price = props.price;
    const status = props.status === 'BORROW_POSSIBLE' ? '대여 가능' : '대여 중';

    return <React.Fragment>
        <div className="col-2">
            <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/3296/3296160.png"/>
        </div>
        <div className="col">
            <div className="row text-muted">대여료: {price}원</div>
            <div className="row">{title}</div>
        </div>
        <div className="col text-center price">{status}</div>
        <div className="col text-end action">
            <a className="btn btn-small btn-outline-dark" href={`book/${bookId}`}>상세 조회</a>
        </div>
    </React.Fragment>
}