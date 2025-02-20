import { cn } from "../utils/cn";

export default function KeyboardInput({
  guessedLetters,
  currentWord,
  onClick,
  isGameOver
}) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = [...alphabet];

  const buttonElements = alphabetArray.map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    return (
      <li key={index}>
        <button
          disabled={isGameOver()}
          className={cn(
            "btn size-11 bg-yellow-500 font-mono text-xl font-light text-black capitalize",
            isCorrect && "bg-green-500",
            isWrong && "bg-red-500",
          )}
          onClick={() => onClick(letter)}
        >
          {letter}
        </button>
      </li>
    );
  });

  return (
    <div className="m-3">
      <ul className="flex max-w-[450px] flex-wrap justify-center gap-1">
        {buttonElements}
      </ul>
    </div>
  );
}
