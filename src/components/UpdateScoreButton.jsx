const UpdateScoreButton = ({ onClick, player, children }) => {
  return (
    <button
      onClick={() => {
        onClick(player);
      }}
      className={`px-4 py-2 font-semibold rounded-md 
          ${
            player === "player1"
              ? "bg-green-500 text-white hover:bg-blue-600"
              : "bg-red-500 text-white hover:bg-gray-600"
          }`}
    >
      {children}
    </button>
  );
};

export default UpdateScoreButton;
