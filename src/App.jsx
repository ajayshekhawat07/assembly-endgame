import { useState } from "react";
import CurrentWord from "./components/CurrentWord";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import KeyboardInput from "./components/KeyboardInput";
import Languages from "./components/Languages";
import NewGame from "./components/NewGame";
import getNewWord from "./utils/getNewWord";

function App() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [currentWord, setCurrentWord] = useState(() => [
    ...getNewWord().toLowerCase(),
  ]);

  const wrongGuessesArray = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  );

  function addGuessedLetters(letter) {
    setGuessedLetters((prevLetters) => {
      if (prevLetters.includes(letter)) {
        return prevLetters;
      } else {
        return [...prevLetters, letter];
      }
    });
  }

  function isGameWon() {
    return (
      guessedLetters.length !== 0 &&
      currentWord.every((letter) => guessedLetters.includes(letter))
    );
  }

  function isGameLost() {
    return guessedLetters.length !== 0 && wrongGuessesArray.length === 8;
  }

  const isGameOver = () => isGameLost() || isGameWon();

  function newGame() {
    const newWord = getNewWord();
    const newWordArray = [...newWord.toLowerCase()];
    setCurrentWord(newWordArray);
    setGuessedLetters([]);
  }

  return (
    <main className="flex h-full w-full flex-col items-center justify-center space-y-2">
      <Header />
      <GameStatus
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        wrongGuessesArray={wrongGuessesArray}
        guessedLetters={guessedLetters}
        currentWord={currentWord}
      />
      <Languages wrongGuessesArray={wrongGuessesArray} />
      <CurrentWord
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameOver={isGameOver}
      />
      <KeyboardInput
        onClick={addGuessedLetters}
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        isGameOver={isGameOver}
      />
      {isGameOver ? <NewGame onClick={newGame} /> : null}
    </main>
  );
}

export default App;
