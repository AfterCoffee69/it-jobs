import React from "react";
import noResult from '../assets/noResult.png'

function NoResult () {
    return (
        <div className="mt-2">
            <img style={{height: "200px", width: "200px"}}alt="noResult" src={noResult}/>
            <h5>Ничего не найденно</h5>
        </div>
    )
}

export default NoResult