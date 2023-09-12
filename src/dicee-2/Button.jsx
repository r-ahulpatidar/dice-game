import { useState } from "react";
import { FcRefresh } from "react-icons/fc";
import { GiPerspectiveDiceSixFacesTwo } from "react-icons/Gi";
import { PiArrowsLeftRightBold } from "react-icons/Pi";

const Button = ({ onRoll, onHold, onNewGame, rolling }) => {
  const handleRollClick = () => {
    if (!rolling) {
      onRoll();
    }
  };

  return (
    <div className="flex justify-center space-x-4 mt-6">
      <button
        className="flex items-center absolute left-1/2 transform -translate-x-1/2 text-gray-600 bg-opacity-60 border-none font-sans text-[2rem] uppercase cursor-pointer font-normal transition-all duration-200 bg-white backdrop-blur-md py-2 px-10 rounded-full shadow-lg new-game-btn top-[3rem]"
        onClick={onNewGame}
      >
        <FcRefresh className="inline-block h-[3rem] w-[3rem] mr-2" /> New game
      </button>
      <button
        className="flex items-center absolute left-1/2 transform -translate-x-1/2 text-gray-600 bg-opacity-60 border-none font-sans text-[1.8rem] uppercase cursor-pointer font-normal transition-all duration-200 bg-white backdrop-blur-md py-2 px-10 rounded-full shadow-lg roll-dice-btn top-[43rem]"
        onClick={handleRollClick}
        disabled={rolling}
      >
        <GiPerspectiveDiceSixFacesTwo className="inline-block h-[3rem] w-[3rem] mr-2 text-black" />{" "}
        Roll Dice
      </button>
      <button
        className="flex items-center absolute left-1/2 transform -translate-x-1/2 text-gray-600 bg-opacity-60 border-none font-sans text-[1.8rem] uppercase cursor-pointer font-normal transition-all duration-200 bg-white backdrop-blur-md py-2 px-10 rounded-full shadow-lg hold-btn top-[51rem]"
        onClick={onHold}
        disabled={rolling}
      >
        <PiArrowsLeftRightBold className="inline-block h-[3rem] w-[3rem] mr-2 text-black" />{" "}
        Hold
      </button>
    </div>
  );
};

export default Button;
