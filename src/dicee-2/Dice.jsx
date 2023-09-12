import { useEffect, useState } from "react";
import {
  BsFillDice1Fill,
  BsFillDice2Fill,
  BsFillDice3Fill,
  BsFillDice4Fill,
  BsFillDice5Fill,
  BsFillDice6Fill,
} from "react-icons/Bs";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/Gi";

const Dice = ({ diceValue, rolling }) => {
  // const [rolling, setRolling] = useState(false);
  const [displayedDice, setDisplayedDice] = useState(null);

  useEffect(() => {
    if (!rolling) {
      setDisplayedDice(diceValue);
    }
  }, [rolling, diceValue]);

  console.log(diceValue);
  let diceNumber;
  switch (displayedDice) {
    case 1:
      diceNumber = <BsFillDice1Fill className="w-[10rem] h-[10rem]" />;
      break;
    case 2:
      diceNumber = <BsFillDice2Fill className="w-[10rem] h-[10rem]" />;
      break;
    case 3:
      diceNumber = <BsFillDice3Fill className="w-[10rem] h-[10rem]" />;
      break;
    case 4:
      diceNumber = <BsFillDice4Fill className="w-[10rem] h-[10rem]" />;
      break;
    case 5:
      diceNumber = <BsFillDice5Fill className="w-[10rem] h-[10rem]" />;
      break;
    case 6:
      diceNumber = <BsFillDice6Fill className="w-[10rem] h-[10rem]" />;
      break;
    default:
      break;
  }

  return (
    <div className="flex justify-center items-center absolute left-1/2 top-[20rem] w-[15rem] h-[15rem] transform -translate-x-1/2 shadow-md bg-white bg-opacity-40">
      <div>
        {diceValue > 0 ? (
          diceNumber
        ) : (
          <GiPerspectiveDiceSixFacesRandom
            className={`w-[10rem] h-[10rem] ${rolling ? "animation-dice" : ""}`}
          />
        )}
      </div>
    </div>
  );
};
export default Dice;
