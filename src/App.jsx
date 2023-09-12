// import { useState } from "react";
// import Game from "./dicee-2/Game";
// import Modal from "./dicee-2/Modal";
// import { useRef } from "react";

// const App = () => {
//   const [startingPlayer, setStartingPlayer] = useState(null);
//   const [tossOccurred, setTossOccurred] = useState(false);
//   const [displayResult, setDisplayResult] = useState("");
//   const [gameStarted, setGameStarted] = useState(false);
//   const hidden = useRef(null);

//   const tossCoin = () => {
//     const coinResult = Math.floor(Math.random() * 2); // 0 or 1
//     console.log(coinResult);
//     setStartingPlayer(coinResult);
//     if (coinResult === 0) {
//       setDisplayResult("Player 1 won the toss");
//     } else if (coinResult === 1) {
//       setDisplayResult("Player 2 won the toss");
//     }
//     setTossOccurred(true);
//   };

//   const startGame = () => {
//     setGameStarted(true);
//     hidden.current.style.display = "none";
//   };

//   return (
//     <>
//       <div className="h-screen overflow-hidden bg-gradient-to-t from-purple-600 to-red-600">
//         <div className="flex flex-col items-center mt-[30rem] space-y-4" ref={hidden}>
//           <p className="w-full h-[5rem] text-center text-[2rem]">
//             {displayResult}
//           </p>
//           <button
//             onClick={tossCoin}
//             className="px-[2rem] py-[1rem] border rounded-xl text-[3rem] font-bold hover:shadow-2xl shadow-black"
//             disabled={tossOccurred || gameStarted}
//           >
//             Toss Coin
//           </button>
//           <button
//             onClick={startGame}
//             className={`px-[2rem] py-[1rem] border rounded-xl text-[3rem] font-bold hover:shadow-2xl shadow-black ${
//               tossOccurred && startingPlayer !== null
//                 ? ""
//                 : "cursor-not-allowed"
//             }`}
//             disabled={!tossOccurred || startingPlayer === null}
//           >
//             Start Game
//           </button>
//         </div>
//         {gameStarted && (
//           <>
//             <Game startingPlayer={startingPlayer} />
//             <Modal />
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default App;

import { useState, useRef, useReducer, createContext, useContext } from "react";
import Game from "./dicee-2/Game";
import Modal from "./dicee-2/Modal";

// Create a context for the game state
export const GameContext = createContext();

// Define the reducer function
const gameReducer = (state, action) => {
  switch (action.type) {
    case "TOSS_COIN":
      return { ...state, startingPlayer: action.payload, tossOccurred: true };
    case "START_GAME":
      return { ...state, gameStarted: true };
    default:
      return state;
  }
};

const App = () => {
  const [displayResult, setDisplayResult] = useState("");
  const [state, dispatch] = useReducer(gameReducer, {
    startingPlayer: null,
    tossOccurred: false,
    gameStarted: false,
  });

  const hidden = useRef(null);

  const tossCoin = () => {
    const coinResult = Math.floor(Math.random() * 2); // 0 or 1
    console.log(coinResult);

    // Dispatch the action to update state
    dispatch({ type: "TOSS_COIN", payload: coinResult });

    if (coinResult === 0) {
      setDisplayResult("Player 1 won the toss");
    } else if (coinResult === 1) {
      setDisplayResult("Player 2 won the toss");
    }
  };

  const startGame = () => {
    // Dispatch the action to update state
    dispatch({ type: "START_GAME" });

    hidden.current.style.display = "none";
  };

  return (
    <GameContext.Provider value={state}>
      <div className="h-screen overflow-hidden bg-gradient-to-t from-purple-600 to-red-600">
        <div
          className="flex flex-col items-center mt-[30rem] space-y-4"
          ref={hidden}
        >
          <p className="w-full h-[5rem] text-center text-[2rem]">
            {displayResult}
          </p>
          <button
            onClick={tossCoin}
            className="px-[2rem] py-[1rem] border rounded-xl text-[3rem] font-bold hover:shadow-2xl shadow-black"
            disabled={state.tossOccurred || state.gameStarted}
          >
            Toss Coin
          </button>
          <button
            onClick={startGame}
            className={`px-[2rem] py-[1rem] border rounded-xl text-[3rem] font-bold hover:shadow-2xl shadow-black ${
              state.tossOccurred && state.startingPlayer !== null
                ? ""
                : "cursor-not-allowed"
            }`}
            disabled={!state.tossOccurred || state.startingPlayer === null}
          >
            Start Game
          </button>
        </div>
        {state.gameStarted && (
          <>
            <Game startingPlayer={state.startingPlayer} />
            <Modal />
          </>
        )}
      </div>
    </GameContext.Provider>
  );
};

export default App;
