import { cn } from "../utils/cn";

export default function CurrentWord({
  currentWord,
  guessedLetters,
  isGameOver,
}) {
  const letterElements = currentWord.map((letter, index) => {
    const isCorrect = guessedLetters.includes(letter);
    if (!isGameOver()) {
      return (
        <li key={index}>
          <div
            className={cn(
              "badge bg-base-200 size-12 rounded-none border-0 border-b-2 border-white font-mono text-2xl capitalize",
              isCorrect && 'border-green-500'
            )}
          >
            {isCorrect ? letter : ""}
          </div>
        </li>
      );
    }
    return (
      <li key={index}>
        <div
          className={cn(
            "badge bg-base-200 size-12 rounded-none border-0 border-b-2 border-green-600 font-mono text-2xl capitalize",
            isCorrect ? 'border-green-500' : "border-red-500"
          )}
        >
          {letter}
        </div>
      </li>
    );
  });

  return (
    <div className="mt-6">
      <ul className="flex flex-wrap justify-center gap-1">{letterElements}</ul>
    </div>
  );
}
