import React from "react";
import { Link } from "react-router-dom";


function DessertCard(props) {
    return (
        <div className="p-10 " >
            <div className="card m-10" style={{ minHeight: "345px" }}>
                <img src={props.url} className="card-img-top" height="256px" width="256px" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><Link to={"/details/" + props.id}>{props.title}</Link></h5>
                </div>
            </div>
        </div>
    )
}
export default DessertCard;

