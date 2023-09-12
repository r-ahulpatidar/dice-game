// import Button from "./Button";
// import Dice from "./Dice";
// import { useState } from "react";
// import Player from "./Player";
// import WinnerModal from "./WinnerModal";

// const Game = ({ startingPlayer }) => {
//   console.log(startingPlayer);
//   const [scores, setScores] = useState([0, 0]);
//   const [currentScores, setCurrentScores] = useState([0, 0]);
//   const [activePlayer, setActivePlayer] = useState(startingPlayer);
//   const [playing, setPlaying] = useState(true);
//   const [rolledValue, setRolledValue] = useState(null); // Add this state
//   const [rolling, setRolling] = useState(false);

//   const rollDice = () => {
//     if (!rolling && playing) {
//       setRolling(true);

//       // Simulate rolling for 1 second
//       setTimeout(() => {
//         setRolling(false);
//         const dice = Math.trunc(Math.random() * 6) + 1;
//         setRolledValue(dice);

//         if (dice !== 1) {
//           const updatedCurrentScores = [...currentScores];
//           updatedCurrentScores[activePlayer] += dice;
//           setCurrentScores(updatedCurrentScores);
//         } else {
//           switchPlayer();
//         }
//         setTimeout(() => {
//           setRolledValue(null);
//         }, 1000);

//         if (currentScores[activePlayer] >= 15) {
//           setPlaying(false);
//           setWinner(activePlayer);
//         }
//       }, 1000);
//     }
//   };

//   const holdScore = () => {
//     if (playing) {
//       const updatedScores = [...scores];
//       updatedScores[activePlayer] += currentScores[activePlayer];

//       if (updatedScores[activePlayer] >= 15) {
//         setPlaying(false);
//       } else {
//         setScores(updatedScores);
//         setCurrentScores([0, 0]);
//         switchPlayer();
//       }
//     }
//   };

//   const switchPlayer = () => {
//     setCurrentScores([0, 0]);
//     setActivePlayer(activePlayer === 0 ? 1 : 0);
//   };

//   const newGame = () => {
//     setScores([0, 0]);
//     setCurrentScores([0, 0]);
//     setActivePlayer(0);
//     setPlaying(true);
//   };

//   return (
//     <main className="h-[90vh] flex justify-center items-center">
//       <div className="relative flex w-[100rem] h-[60rem] bg-opacity-35 bg-red-400 backdrop-blur-2xl filter blur-[0] shadow-xl rounded-2xl">
//         <Player
//           id={0}
//           name="Player 1"
//           score={scores[0]}
//           currentScore={currentScores[0]}
//           isActive={activePlayer === 0}
//         />
//         <Player
//           id={1}
//           name="Player 2"
//           score={scores[1]}
//           currentScore={currentScores[1]}
//           isActive={activePlayer === 1}

//         />
//         <Dice diceValue={rolledValue} rolling={rolling} />
//         <Button
//           onRoll={rollDice}
//           onHold={holdScore}
//           onNewGame={newGame}
//           rolling={rolling}
//           setRolling={setRolling}
//         />

//         {!playing && <WinnerModal activePlayer={activePlayer} />}
//       </div>
//     </main>
//   );
// };

// export default Game;

import Button from "./Button";
import Dice from "./Dice";
import { useState, useMemo, useContext } from "react";
import Player from "./Player";
import WinnerModal from "./WinnerModal";
import { GameContext } from "../App";

const Game = () => {
  const { startingPlayer, gameStarted } = useContext(GameContext);
  const [scores, setScores] = useState([0, 0]);
  const [currentScores, setCurrentScores] = useState([0, 0]);
  const [activePlayer, setActivePlayer] = useState(startingPlayer);
  const [playing, setPlaying] = useState(true);
  const [rolledValue, setRolledValue] = useState(null); // Add this state
  const [rolling, setRolling] = useState(false);

  const currentPlayerIsActive = activePlayer === 0 ? true : false;

  const player1 = useMemo(() => {
    return (
      <Player
        id={0}
        name="Player 1"
        score={scores[0]}
        currentScore={currentScores[0]}
        isActive={currentPlayerIsActive}
      />
    );
  }, [scores[0], currentScores[0], currentPlayerIsActive]);

  const player2 = useMemo(() => {
    return (
      <Player
        id={1}
        name="Player 2"
        score={scores[1]}
        currentScore={currentScores[1]}
        isActive={!currentPlayerIsActive}
      />
    );
  }, [scores[1], currentScores[1], currentPlayerIsActive]);

  const rollDice = () => {
    if (!rolling && playing) {
      setRolling(true);

      // Simulate rolling for 1 second
      setTimeout(() => {
        setRolling(false);
        const dice = Math.trunc(Math.random() * 6) + 1;
        setRolledValue(dice);

        if (dice !== 1) {
          const updatedCurrentScores = [...currentScores];
          updatedCurrentScores[activePlayer] += dice;
          setCurrentScores(updatedCurrentScores);
        } else {
          switchPlayer();
        }
        setTimeout(() => {
          setRolledValue(null);
        }, 1000);

        if (currentScores[activePlayer] >= 15) {
          setPlaying(false);
        }
      }, 1000);
    }
  };

  const holdScore = () => {
    if (playing) {
      const updatedScores = [...scores];
      updatedScores[activePlayer] += currentScores[activePlayer];

      if (updatedScores[activePlayer] >= 15) {
        setPlaying(false);
      } else {
        setScores(updatedScores);
        setCurrentScores([0, 0]);
        switchPlayer();
      }
    }
  };

  const switchPlayer = () => {
    setCurrentScores([0, 0]);
    setActivePlayer(activePlayer === 0 ? 1 : 0);
  };

  const newGame = () => {
    setScores([0, 0]);
    setCurrentScores([0, 0]);
    setActivePlayer(0);
    setPlaying(true);
  };

  return (
    <main className="h-[90vh] flex justify-center items-center">
      <div className="relative flex w-[100rem] h-[60rem] bg-opacity-35 bg-red-400 backdrop-blur-2xl filter blur-[0] shadow-xl rounded-2xl">
        {player1}
        {player2}
        <Dice diceValue={rolledValue} rolling={rolling} />
        <Button
          onRoll={rollDice}
          onHold={holdScore}
          onNewGame={newGame}
          rolling={rolling}
          setRolling={setRolling}
        />

        {!playing && <WinnerModal activePlayer={activePlayer} />}
      </div>
    </main>
  );
};

export default Game;
