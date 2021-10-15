import React, {useState}from 'react';
import ReactDOM from 'react-dom';
import './index.css'
const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

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
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board)
    let status;
    if(winner) {
        status = "Winner " + winner
    }else{
        status = "Next player: " + (xIsNext ? 'X': 'O')
    }

    const handleClick = (i) => {
        const squares = board.slice();
        if(calculateWinner(squares || squares[i])){
            return;
        }
        squares[i] = xIsNext ? "X" : "O";
        setBoard(squares);
        setXIsNext(!xIsNext);
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

