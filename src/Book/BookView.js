import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {BookDetailView} from "./BookDetailView";
import {useNavigate} from "react-router";

export function BookView() {
    const {bookId} = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/book/${bookId}`)
            .then(v => setBook(v.data));
    });

    const navigate = useNavigate();
    const handleBookDelete = (bookId) => {
        axios.delete(`http://localhost:8080/api/v1/book/${bookId}`)
            .then(v => {
                alert("정상적으로 삭제되었습니다");
                navigate("/");
            }, e => {
                alert("서버 에러");
                console.log(e);
            });
    }

    return <BookDetailView {...book} onBookDelete={handleBookDelete}/>
}