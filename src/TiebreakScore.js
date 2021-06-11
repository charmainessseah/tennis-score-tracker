import React from 'react';

const TiebreakScore = (props) => {
    return(
        <div className = "tiebreak">
            <label id = "tiebreak-score-label" className = "tiebreak-score" for = "tiebreak">Tiebreak Score:</label>
            <input className = "tiebreak-score" type = "number" id = "tiebreak" min = "0"></input>
            <h1 id = "hyphen">-</h1>
            <input className = "tiebreak-score" type = "number" id = "tiebreak" min = "0"></input>
        </div>
    )
}

export default TiebreakScore;
