import React from 'react';
import TiebreakScore from "./TiebreakScore";

class Scoring extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGameScoreP1: 0,
            currentGameScoreP2: 0,
            set1ScoreP1: 0,
            set1ScoreP2: 0,
            set2ScoreP1: 0,
            set2ScoreP2: 0,
            set3ScoreP1: 0,
            set3ScoreP2: 0,
            tiebreakSet1Active: false,
            tiebreakSet2Active: false,
            tiebreakSet3Active: false,
        }
    }
    render() {

        const handleChangeP1 = (e) => {
            this.setState({currentGameScoreP1: e.target.value})
        }

        const handleChangeP2 = (e) => {
            this.setState({currentGameScoreP2: e.target.value});
        }

        const handleSet1ScoreP1 = (e) => {
            console.log(e.target.value)
            this.setState({set1ScoreP1: e.target.value}, () => {
                checkTiebreakSet1();
            });
        }

        const handleSet1ScoreP2 = (e) => {
            this.setState({set1ScoreP2: e.target.value}, () => {
                checkTiebreakSet1();
            });
        }

        const handleSet2ScoreP1 = (e) => {
            this.setState({set2ScoreP1: e.target.value}, () => {
                checkTiebreakSet2();
            });
        }

        const handleSet2ScoreP2 = (e) => {
            this.setState({set2ScoreP2: e.target.value}, () => {
                checkTiebreakSet2();
            });
        }

        const handleSet3ScoreP1 = (e) => {
            this.setState({set3ScoreP1: e.target.value}, () => {
                checkTiebreakSet3();
            });
        }

        const handleSet3ScoreP2 = (e) => {
            this.setState({set3ScoreP2: e.target.value}, () => {
                checkTiebreakSet3();
            });
        }

        const checkTiebreakSet1 = () => {
            if ((this.state.set1ScoreP1 === "6" && this.state.set1ScoreP2 === "6")
            || (this.state.set1ScoreP1 === "7" && this.state.set1ScoreP2 === "6")
            || (this.state.set1ScoreP2 === "7" && this.state.set1ScoreP1 === "6")) {
                this.setState({tiebreakSet1Active: true})
            } else {
                this.setState({tiebreakSet1Active: false})
            }
        }

        const checkTiebreakSet2 = () => {
            if ((this.state.set2ScoreP1 === "6" && this.state.set2ScoreP2 === "6")
            || (this.state.set2ScoreP1 === "7" && this.state.set2ScoreP2 === "6")
            || (this.state.set2ScoreP2 === "7" && this.state.set2ScoreP1 === "6")) {
                this.setState({tiebreakSet2Active: true})
            } else {
                this.setState({tiebreakSet2Active: false})
            }
        }

        const checkTiebreakSet3 = () => {
            if ((this.state.set3ScoreP1 === "6" && this.state.set3ScoreP2 === "6")
            || (this.state.set3ScoreP1 === "7" && this.state.set3ScoreP2 === "6")
            || (this.state.set3ScoreP2 === "7" && this.state.set3ScoreP1 === "6")) {
                this.setState({tiebreakSet3Active: true})
            } else {
                this.setState({tiebreakSet3Active: false})
            }
        }
        return(
            <div>
                <input className = "player-name" type = "text" placeholder = "Player 1"></input>
                <input className = "player-name" type = "text" placeholder = "Player 2"></input>

                <h1>GAME SCORE</h1>
                
                <h1 className = "game-score">{this.state.currentGameScoreP1} - {this.state.currentGameScoreP2}</h1>

                <div className = "score-P1">
                    <label for = "0">0</label>
                    <input type = "radio" id = "0" name = "player-1-score" value = "0"  onChange = {handleChangeP1}></input>
                    <label for = "15">15</label>
                    <input type = "radio" id = "15" name = "player-1-score"value = "15" onChange = {handleChangeP1}></input>
                    <label for = "30">30</label>
                    <input type = "radio" id = "30" name = "player-1-score" value = "30" onChange = {handleChangeP1}></input>
                    <label for = "40">40</label>
                    <input type = "radio" id = "40" name = "player-1-score" value = "40" onChange = {handleChangeP1}></input>
                    <label for = "AD">AD</label>
                    <input type = "radio" id = "AD" name = "player-1-score" value = "AD" onChange = {handleChangeP1}></input>
                </div>

                <div className = "score-P2">
                    <label for = "0">0</label>
                    <input type = "radio" id = "0" name = "player-2-score" value = "0" onChange = {handleChangeP2}></input>
                    <label for = "15">15</label>
                    <input type = "radio" id = "15" name = "player-2-score" value = "15" onChange = {handleChangeP2}></input>
                    <label for = "30">30</label>
                    <input type = "radio" id = "30" name = "player-2-score" value = "30" onChange = {handleChangeP2}></input>
                    <label for = "40">40</label>
                    <input type = "radio" id = "40" name = "player-2-score" value = "40" onChange = {handleChangeP2}></input>
                    <label for = "AD">AD</label>
                    <input type = "radio" id = "AD" name = "player-2-score" value = "AD" onChange = {handleChangeP2}></input>
                </div>

                <h1 className = "set-score-header">SET SCORE</h1>
                
                <label id = "set-1-label" className = "set-score" for = "set-1">Set 1:</label>
                <input className = "set-score" type = "number" min = "0" max = "7" id = "set-1" onChange = {handleSet1ScoreP1}></input>
                <h1 id = "hyphen">-</h1>
                <input className = "set-score" type = "number" min = "0" max = "7" onChange = {handleSet1ScoreP2}></input>
                {this.state.tiebreakSet1Active ? <TiebreakScore /> : ""}
                <br></br>
                
                <label id = "set-1-label" className = "set-score" for = "set-2">Set 2:</label>
                <input className = "set-score" type = "number" min = "0" max = "7" id = "set-2" onChange = {handleSet2ScoreP1}></input>
                <h1 id = "hyphen">-</h1>
                <input className = "set-score" type = "number" min = "0" max = "7" onChange = {handleSet2ScoreP2}></input>
                {this.state.tiebreakSet2Active ? <TiebreakScore /> : ""}
                <br></br>

                <label id = "set-1-label" className = "set-score" for = "set-3">Set 3:</label>
                <input className = "set-score" type = "number" min = "0" max = "7" id = "set-3" onChange = {handleSet3ScoreP1}></input>
                <h1 id = "hyphen">-</h1>
                <input className = "set-score" type = "number" min = "0" max = "7" onChange = {handleSet3ScoreP2}></input>
                {this.state.tiebreakSet3Active ? <TiebreakScore /> : ""}
                
            </div>
        )
    }
}

export default Scoring;