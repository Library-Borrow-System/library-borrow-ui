import {useNavigate} from "react-router";
import React from "react";

export function BorrowingItem(props) {
    const borrowAt = props.borrowAt != null ? props.borrowAt.split("T")[0] : props.borrowAt;

    const navigate = useNavigate();
    const handleAddBtnClick = (e) => {
        props.onAddClick(props.borrowId, props.bookId, () => navigate("/"));
    };

    return <React.Fragment>
        <div className="col-2">
            <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/3296/3296160.png"/>
        </div>
        <div className="col">
            <div className="row text-muted">{borrowAt}({props.term}일)</div>
            <div className="row">{props.title}</div>
        </div>
        <div className="col text-center price">
            {props.email}<br/>{props.phoneNum}
        </div>
        <div className="col text-end action">
            <button className="btn btn-small btn-outline-dark" onClick={handleAddBtnClick}>반납</button>
        </div>
    </React.Fragment>
}