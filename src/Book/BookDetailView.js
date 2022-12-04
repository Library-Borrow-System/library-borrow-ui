import React from "react";
import {useNavigate} from "react-router";

export function BookDetailView(props) {
    const bookId = props.bookId;
    const title = props.title;
    const category = props.category;
    const price = props.price;
    const author = props.author;
    const status = props.status === 'BORROW_POSSIBLE' ? '대여 가능' : '대여 중';
    const isbn = props.isbn;
    const createdAt = props.createdAt != null ? props.createdAt.split("T")[0] : null;
    const updatedAt = props.updatedAt != null ? props.updatedAt.split("T")[0] : null;

    const handleDelete = (e) => {
        props.onBookDelete(bookId);
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center m-4">
                <h1 className="text-center">도서 상세 정보</h1>
            </div>
            <div className="card">
                <div className="row">
                    <div className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
                        <ul className="list-group products">
                            <li className="list-group-item d-flex mt-3">
                                <div className="col-2"><b>도서 ID</b></div>
                                <div className="col">{bookId}</div>
                            </li>
                            <li className="list-group-item d-flex mt-2">
                                <div className="col-2"><b>제목</b></div>
                                <div className="col">{title}</div>
                            </li>
                            <li className="list-group-item d-flex mt-2">
                                <div className="col-2"><b>장르</b></div>
                                <div className="col">{category}</div>
                            </li>
                            <li className="list-group-item d-flex mt-2">
                                <div className="col-2"><b>대여료</b></div>
                                <div className="col">{price}원</div>
                            </li>
                            <li className="list-group-item d-flex mt-2">
                                <div className="col-2"><b>저자</b></div>
                                <div className="col">{author}</div>
                            </li>
                            <li className="list-group-item d-flex mt-2">
                                <div className="col-2"><b>대여 상태</b></div>
                                <div className="col">{status}</div>
                            </li>
                            <li className="list-group-item d-flex mt-2">
                                <div className="col-2"><b>도서 ISBN</b></div>
                                <div className="col">{isbn}</div>
                            </li>
                            <li className="list-group-item d-flex mt-2">
                                <div className="col-2"><b>등록 날짜</b></div>
                                <div className="col">{createdAt}</div>
                            </li>
                            <li className="list-group-item d-flex mt-2">
                                <div className="col-2"><b>수정 날짜</b></div>
                                <div className="col">{updatedAt}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 summary p-4">
                        <br/><br/>
                        <div className="row pt-2 pb-2 border-top">
                            <button className="btn btn-dark col-12" onClick={handleDelete}>도서 삭제</button>
                        </div>
                        <div className="row pt-2 pb-2 border-top">
                            <a className="btn btn-dark col-12" href={"/"}>메인으로 돌아가기</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}