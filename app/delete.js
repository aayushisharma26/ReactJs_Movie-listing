import React from "react";

const Delete = (props) => {
    return (
        <div className="delete" onClick={props.onDelete}>
            <img src="delete.svg" alt="Delete" />
        </div>
    );
};
export default Delete;
