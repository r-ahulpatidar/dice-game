const Player = ({ id, name, score, currentScore, isActive }) => (
  <section
    className={`flex-[50%] flex flex-col items-center justify-center transition-all duration-750 p-20 ${
      isActive ? "bg-white bg-opacity-40" : ""
    }`}
  >
    <h2
      className={`player-name relative text-[5rem] uppercase tracking-wider font-light mb-4 text-center ${
        isActive ? "font-bold" : ""
      }`}
      id={`name--${id}`}
    >
      {name}
    </h2>
    <p
      className={`text-8xl font-light text-red-600 mb-auto ${
        isActive ? "font-normal" : ""
      }`}
      id={`score--${id}`}
    >
      {score}
    </p>

    <div
      className={`bg-red-600 bg-opacity-80 rounded-lg text-white w-3/5 p-8 text-center transition-all duration-750 current-media ${
        isActive ? "opacity-100" : ""
      }`}
    >
      <p className="uppercase mb-4 text-[2rem] text-white">Current</p>
      <p className="text-6xl" id={`current--${id}`}>
        {currentScore}
      </p>
    </div>
  </section>
);

export default Player;
