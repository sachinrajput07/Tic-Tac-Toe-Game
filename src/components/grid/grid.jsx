import { useState } from "react"
import Card from "../cards/card"
import isWinner from "../helper/check"


function Grid({numberofCards}) {
  const[board, setBoard] =useState(Array(numberofCards).fill('')  );
  const[turn, setturn] = useState(true);
  const [winner, setWinner] = useState(null);

  function Play(index) {
    if (turn == true) {
        board[index]= 'O';

    }else{
        board[index] = 'X'
    }

    const win = isWinner(board, turn ?  "O":"X");
    if (win) {
        setWinner(win);
    }
    setBoard([...board]);
    setturn(!turn);
  }
  function reset() {
    setturn(true);
    setWinner(null)
    setBoard(Array(numberofCards).fill(''))
    
  }

  return(
    <>
    <div className="gridwraper">
        {
            winner && (
                <>
                  <h1 className="turnhithlight text-white text-5xl">Winner is {winner}</h1>
                  <button className="reset bg-yellow-200 my-7 py-2 px-5 rounded-2xl font-semibold" onClick={reset}>Reset Game</button>
                </>
            )
        }
        <h1 className="trunhighlight text-3xl text-white mb-10">Current turn: {(turn)? 'O': 'X'} </h1>
       <div className="grids  bg-black  flex flex-wrap w-[400px] justify-between items-center mx-[35%]  gap-5 " >
        
        {board.map((el , idx) => <Card  gameEnd={winner? true : false} key={idx} onPlay={Play} player={el} index={idx} />)}
       </div>
       </div>
    </>
  )
}

export default Grid