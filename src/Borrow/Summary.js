import React, {useState} from "react";
import {useNavigate} from "react-router";
import {SummaryItem} from "./SummaryItem";

export function Summary({items = [], onAddClicked, onBorrowSubmit}) {
    const totalPrice = items.reduce((prev, curr) => prev + curr.price, 0);

    const [userInfo, setUserInfo] = useState({
        phoneNum: "", email: ""
    });
    const handlePhoneNumInputChanged = (e) => setUserInfo({...userInfo, phoneNum: e.target.value});
    const handleEmailInputChanged = (e) => setUserInfo({...userInfo, email: e.target.value});

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        if (userInfo.email === "" || userInfo.phoneNum === "") {
            alert("입력값을 입력해주세요");
        } else {
            onBorrowSubmit(userInfo, () => navigate("/"));
        }
    }

    return (
        <>
            <div>
                <h5 className="m-0 p-0"><b>선택 목록</b></h5>
            </div>
            <hr/>
            {items.map(v => (
                <SummaryItem key={v.bookId} bookId={v.bookId} title={v.title} price={v.price}
                             onAddClick={onAddClicked}/>
            ))}
            <form>
                <div className="mb-3">
                    <label htmlFor="phoneNum" className="form-label">전화번호</label>
                    <input type="text" className="form-control mb-1" id="phoneNum" value={userInfo.phoneNum}
                           onChange={handlePhoneNumInputChanged}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">이메일</label>
                    <input type="email" className="form-control mb-1" id="email" value={userInfo.email}
                           onChange={handleEmailInputChanged}/>
                </div>
            </form>
            <div className="row pt-2 pb-2 border-top">
                <h5 className="col">총 대여료</h5>
                <h5 className="col text-end">{totalPrice}원</h5>
            </div>
            <button className="btn btn-dark col-12" onClick={handleSubmit}>대여하기</button>
            <br/>
            <div className="row pt-2 pb-2 border-top">
                <a className="btn btn-dark col-12" href={"/"}>메인으로 돌아가기</a>
            </div>
        </>
    )
}