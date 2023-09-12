import { useState } from "react";
import { MdPrivacyTip } from "react-icons/Md";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button
        onClick={handleOpen}
        className="float-right mr-8 p-3 bg-white bg-opacity-50 border rounded-full shadow-lg"
      >
        <MdPrivacyTip className="h-[2.5rem] w-[2.5rem]" />
      </button>
      {isOpen && (
        <div className=" absolute top-1/2 left-1/2 w-1/2 bg-white rounded-lg shadow-md p-20 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 text-center">
          <button
            className="bg-transparent border-none outline-none cursor-pointer text-[3rem] font-bold absolute top-1 right-4"
            onClick={onClose}
          >
            &times;
          </button>
          <h1 className="text-[2.5rem] font-bold mb-4 underline underline-offset-4">
            Instruction
          </h1>
          <p className="text-[1.5rem]">
            This is a Pig Game 🎲. You roll a dice, if you get 1, you will lose
            your current score ❌. Except 1, all your current scores are added.
            If you do not get 1, you can hold your score any time 😊 and it is
            assigned to your total score. Then the second player rolls a dice.
            The game lasts until one player reaches 15 points 🎯.
          </p>
        </div>
      )}
    </>
  );
};

export default Modal;
