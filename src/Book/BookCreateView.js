import React, {useState} from "react";
import { useNavigate } from "react-router";

export function BookCreateView({onBookSubmit}) {
    const categories = ["MYSTERY", "THRILLER", "HORROR", "FANTASY", "SCIENCE_FICTION", "ACTION", "ROMANCE", "FAIRY_TALE"];

    const [book, setBook] = useState({
        title: "", category: "", price: 0, author: "", isbn: ""
    });
    const handleTitleInputChanged = (e) => setBook({...book, title: e.target.value})
    const handleCategorySelectChanged = (e) => setBook({...book, category: e.target.value})
    const handlePriceInputChanged = (e) => setBook({...book, price: e.target.value})
    const handleAuthorInputChanged = (e) => setBook({...book, author: e.target.value})
    const handleIsbnInputChanged = (e) => setBook({...book, isbn: e.target.value})

    const navigate = useNavigate();
    const redirectToMain = () => navigate("/");

    const handleSubmit = () => {
        if (book.title === "" || book.category === "" || book.price === undefined || book.author === "" || book.isbn === "") {
            alert("필요한 값이 없습니다")
        } else {
            onBookSubmit(book, redirectToMain);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center m-4">
                <h1 className="text-center">도서 등록</h1>
            </div>
            <div className="card">
                <div className="row">
                    <form className="col-md-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
                        <ul className="list-group products">
                            <li className="list-group-item d-flex mt-2">
                                <div className="col-2"><b>제목</b></div>
                                <input className="col" id="title" value={book.title} onChange={handleTitleInputChanged}></input>
                            </li>
                            <li className="list-group-item d-flex mt-2">
                                <div className="col-2"><b>장르</b></div>
                                <select className="form-select" id="category" value={book.category} onChange={handleCategorySelectChanged}>
                                    <option selected>장르를 선택하세요</option>
                                    {categories.map((item) => (
                                        <option value={item} key={item}>{item}</option>
                                    ))}
                                </select>
                            </li>
                            <li className="list-group-item d-flex mt-2">
                                <div className="col-2"><b>대여료(원)</b></div>
                                <input type="number" className="col" id="price" value={book.price} onChange={handlePriceInputChanged}></input>
                            </li>
                            <li className="list-group-item d-flex mt-2">
                                <div className="col-2"><b>저자</b></div>
                                <input className="col" id="author" value={book.author} onChange={handleAuthorInputChanged}></input>
                            </li>
                            <li className="list-group-item d-flex mt-2">
                                <div className="col-2"><b>도서 ISBN</b></div>
                                <input className="col" id="isbn" value={book.isbn} onChange={handleIsbnInputChanged}></input>
                            </li>
                        </ul>
                    </form>
                    <div className="col-md-4 summary p-4">
                        <br/><br/>
                        <div className="row pt-2 pb-2 border-top">
                            <button className="btn btn-dark col-12" onClick={handleSubmit}>등록하기</button>
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