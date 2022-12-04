import React from "react";

export function SummaryItem(props) {
    const handleAddBtnClick = (e) => {
        props.onAddClick(props.bookId);
    }

    return (<>
            <div className="col">
                <div className="row">{props.title} [{props.price}원]</div>
            </div>
            <div className="col text-end action">
                <button type="button" className="btn btn-secondary btn-sm" onClick={handleAddBtnClick}>취소</button>
            </div>
        </>
    );
}