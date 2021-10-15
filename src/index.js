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

    return (
        <div>
                <div className="board-row">
                    <Square index ={0} value = {props.board[0]} click={()=> props.click(0)}/>
                    <Square index ={1} value = {props.board[1]} click={()=> props.click(1)}/>
                    <Square index ={2} value = {props.board[2]} click={()=> props.click(2)}/>
                </div>
                <div className="board-row">
                    <Square index ={3} value = {props.board[3]} click={()=> props.click(3)}/>
                    <Square index ={4} value = {props.board[4]} click={()=> props.click(4)}/>
                    <Square index ={5} value = {props.board[5]} click={()=> props.click(5)}/>
                </div>
                <div className="board-row">
                    <Square index ={6} value = {props.board[6]} click={()=> props.click(6)}/>
                    <Square index ={7} value = {props.board[7]} click={()=> props.click(7)}/>
                    <Square index ={8} value = {props.board[8]} click={()=> props.click(8)}/>
                </div>
        </div>

    )
}

const Game = () =>{
    const [boards,setBoards ] = useState([{squares: Array(9).fill(null)}]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

    const current = boards[stepNumber];
    const winner = calculateWinner(current.squares)


    const handleClick = (i) => {
        const boardHistory = boards.slice(0, stepNumber+1);
        const currentBoard = boardHistory[boardHistory.length-1]
        const squares = currentBoard.squares.slice();
        if(calculateWinner(squares || squares[i])){
            return;
        }
        squares[i] = xIsNext ? "X" : "O";
        setBoards(boardHistory.concat({squares: squares}));
        setXIsNext(!xIsNext);
        setStepNumber(boardHistory.length)
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setXIsNext(step%2 === 0)
    }

    const moves = boards.map((step, move) => {
        const desc = move ? 'Go to move # ' + move : 'Go to game start ';
        return(
            <li key={move}>
                <button onClick={() => jumpTo(move)}> {desc} </button>
            </li>
        )
    })



    let status
    if (winner) {
        status = "Winner: " + winner;
    }else {
        status = "Next player: " + (xIsNext ? 'X' : 'O');
    }

    return (
        <div>
            <div className="game">
                <div className="game-board">
                    <Board
                        board = {current.squares}
                        click = {(i) => handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>
                        { status }
                    </div>
                    <ol>
                        {moves}
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

