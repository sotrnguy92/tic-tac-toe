import React, {useState}from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Square = (props) => {
    return (
            <button
                className="square"
                onClick={props.click}
            >
                {props.value}
            </button>
    )
}



const Board = (props) => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isNext, setIsNext] = useState(true);

    const status = "Next player: " + (isNext ? 'X': 'O')
    function handleClick(i) {
        const squares = board.slice();
        console.log(squares)
        squares[i] = isNext ? "X" : "O";
        setBoard(squares);
        setIsNext(!isNext);
    }

    return (
        <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    <Square index ={0} value = {board[0]} click={()=> handleClick(0)}/>
                    <Square index ={1} value = {board[1]} click={()=> handleClick(1)}/>
                    <Square index ={2} value = {board[2]} click={()=> handleClick(2)}/>
                </div>
                <div className="board-row">
                    <Square index ={3} value = {board[3]} click={()=> handleClick(3)}/>
                    <Square index ={4} value = {board[4]} click={()=> handleClick(4)}/>
                    <Square index ={5} value = {board[5]} click={()=> handleClick(5)}/>
                </div>
                <div className="board-row">
                    <Square index ={6} value = {board[6]} click={()=> handleClick(6)}/>
                    <Square index ={7} value = {board[7]} click={()=> handleClick(7)}/>
                    <Square index ={8} value = {board[8]} click={()=> handleClick(8)}/>
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