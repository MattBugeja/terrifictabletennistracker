import { useState } from "react";
import Score from "./Score";
import UpdateScoreButton from "./UpdateScoreButton";
import Winner from "./Winner";

const TableTop = () => {
  const [score, setScore] = useState({ player1: 0, player2: 0 });
  const [winner, setWinner] = useState("");

  const updateScore = (player) => {
    setScore((prevScore) => ({
      ...prevScore,
      [player]: prevScore[player] + 1,
    }));

    handleWinner(score.player1 + 1, score.player2 + 1, player);
  };

  const resetScore = () => {
    setScore({ player1: 0, player2: 0 });
    setWinner("");
  };

  const handleWinner = (player1Score, player2Score, player) => {
    if (
      player === "player1" &&
      player1Score >= 11 &&
      player1Score + 1 - player2Score >= 2
    ) {
      setWinner("player 1");
    } else if (
      player === "player2" &&
      player2Score >= 11 &&
      player2Score + 1 - player1Score >= 2
    ) {
      setWinner("player 2");
    }
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      {winner && <Winner reset={resetScore} winner={winner} />}
      <div className="grid grid-cols-2 grid-rows-2 justify-center items-center w-full h-screen lg:w-[750px] border-4 border-white">
        <div className="flex flex-col gap-4 justify-center items-center bg-blue-800 bg-opacity-75 border-2 border-white h-full  border-opacity-75">
          <UpdateScoreButton onClick={updateScore} player={"player1"}>
            Player 1
          </UpdateScoreButton>
        </div>
        <div className="bg-blue-800 bg-opacity-75 border-2 border-white border-opacity-75 h-full flex justify-center items-center">
          <Score score={score.player1} />
        </div>
        <div className="bg-blue-800 bg-opacity-75 border-2 border-white  border-opacity-75 h-full flex  justify-center items-center ">
          <Score score={score.player2} />
        </div>
        <div className="flex justify-center items-center bg-blue-800 bg-opacity-75 h-full border-2 border-white  border-opacity-75">
          <UpdateScoreButton onClick={updateScore} player={"player2"}>
            Player 2
          </UpdateScoreButton>
          <button
            className="absolute bottom-0 right-2 text-white p-1"
            onClick={resetScore}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableTop;
