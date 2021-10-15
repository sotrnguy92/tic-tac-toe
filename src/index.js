import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Square = (props) => {
    return (
            <button
                className="square"
                onClick={()=>{
                    console.log('click')}}
            >
                {props.value }
            </button>
    )
}


const Board = (props) => {
    const status = "Next player: X"

    return (
        <div>


                <div className="status">{status}</div>
                <div className="board-row">
                    <Square value = {0}/>
                    <Square value = {1}/>
                    <Square value = {2}/>
                </div>
                <div className="board-row">
                    <Square value = {3}/>
                    <Square value = {4}/>
                    <Square value = {5}/>
                </div>
                <div className="board-row">
                    <Square value = {6}/>
                    <Square value = {7}/>
                    <Square value = {8}/>
                </div>
        </div>

    )
}

const Game = () =>{
    return (
        <div>
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>
                        {/* Status */}
                    </div>
                    <ol>
                        {/* TODO */}
                    </ol>
                </div>
            </div>

        </div>
    )
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);