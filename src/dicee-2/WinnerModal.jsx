import { GiPodiumWinner } from "react-icons/Gi";

const WinnerModal = ({activePlayer}) => {
  return (
    <div className="flex flex-col items-center gap-[2rem] absolute top-1/2 left-1/2 w-1/2 bg-white rounded-lg shadow-md p-20 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 text-center">
        <GiPodiumWinner className="w-[10rem] h-[10rem]" />
        <h1 className="text-[2.5rem] font-bold">{activePlayer == 0 ? "Player 1" : "Player 2"} Wins</h1>
    </div>
  );
};

export default WinnerModal;
