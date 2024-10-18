const Winner = ({winner = "player1", reset }) => {
  return (
<div className="fixed inset-0 bg-black bg-opacity-50 z-10">
  <div className="absolute bg-orange-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 flex flex-col gap-6 justify-center items-center font-semibold z-20">
    <div>Congratulations {winner}, you won!</div>
    <button className="bg-red-400 rounded-lg py-2 px-6 font-semibold" onClick={reset}>Reset</button>
  </div>
</div>
  );
};

export default Winner;
