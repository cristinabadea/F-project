import React from "react";
import "./RecomItem.css";

const RecomItem = (props) => {
    console.log(props);
    return (
        <div>  
            <div className='recom-row'>
                <div className="recom-col recom-img">
                    <img className = 'img1'src={props.itemImage} />   
                </div>
                <div className='recom-col recom-col-background'>
                    <h1> Our recommendatios:</h1>
                    <p>{props.recom1}</p>
                    <p>{props.recom2}</p>
                    <p>{props.recom3}</p>
                </div>
            </div>

        <button className="recom-btn"> Add to cart</button>

        </div> );
}

export default RecomItem;