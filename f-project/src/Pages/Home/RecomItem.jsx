import React from "react";
import "./RecomItem.css";

const RecomItem = (props) => {
    console.log(props);
    return (
        <div className='recom-container'>
            <h1> Title</h1>
            <img src={props.itemImage}/>
            <div>
                <p>{props.recom1}</p>
                <p>{props.recom2}</p>
                <p>{props.recom3}</p>
            </div>
            <div>
                <button>Add to cart</button>
            </div>
        </div>);
}

export default RecomItem;