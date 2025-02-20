import { getFarewellText } from "../utils/getFarewellText";
import { languages } from "../utils/languages";

export default function GameStatus({
  isGameWon,
  isGameLost,
  wrongGuessesArray,
  guessedLetters,
  currentWord,
}) {
  const wrongGuessCount = wrongGuessesArray.length;
  const isGameOver = isGameLost() || isGameWon();

  function isGuessedCorrect() {
    if (guessedLetters.length !== 0 && isGameOver === false) {
      const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
      return currentWord.includes(lastGuessedLetter);
    }
  }

  if (isGameOver) {
    if (isGameWon()) {
      return (
        <div className="flex h-15 min-w-md flex-col items-center justify-center rounded bg-green-800 p-2 text-center">
          <h2 className="text-lg font-semibold">You win!</h2>
          <p className="text-base font-light">Well done! 🎊</p>
        </div>
      );
    } else if (isGameLost) {
      return (
        <div className="flex h-15 min-w-md flex-col items-center justify-center rounded bg-red-800 p-2 text-center">
          <h2 className="text-lg font-semibold">Game over!</h2>
          <p className="text-base font-light">
            You lose! Better start learning Assembly 😭
          </p>
        </div>
      );
    }
  }

  if (isGuessedCorrect() === false && guessedLetters.length !== 0) {
    return (
      <div className="flex h-15 min-w-md items-center justify-center rounded bg-[#7A5EA7] p-2 text-center">
        <h2 className="font-base text-lg italic">
          {`${getFarewellText(languages[wrongGuessCount - 1]["name"])} 🫡`}
        </h2>
      </div>
    );
  }
  return <div className="bg-base-100 h-15 min-w-md"></div>;
}
