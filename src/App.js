import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";
import React, { useState, useEffect } from 'react';

export default function App() {
  const [startGame, setStartGame] = useState(false);
  const [letterClicked, setLetterClicked] = useState([]);
  let [erros, setErros] = useState(0);
  const [palavra, setPalavra] = useState("");
  const [letrasAdvinhadas, setLetrasAdvinhadas] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [defeat, setDefeat] = useState(false);

  useEffect(() => {
    if (startGame) {
      // Sorteia a palavra quando startGame muda para true
      const p = palavras[Math.floor(Math.random() * palavras.length)];
      setPalavra(p);
    }
  }, [startGame]);

  useEffect(() => {
    if (!startGame) {
      // Limpa o estado letterClicked quando startGame muda para false
      setLetterClicked([]);
    }
  }, [startGame, setLetterClicked]);

  function checkLetter(letra) {
    const caracteres = palavra.toLowerCase().split("");

    if (caracteres.includes(letra.toLowerCase())) {
      console.log(`A letra ${letra} está na palavra`);
      setLetrasAdvinhadas([...letrasAdvinhadas, letra.toLowerCase()]);
    } else {
      console.log(`A letra ${letra} não está na palavra`);
      setErros(erros + 1);
    }

    setLetterClicked([...letterClicked, letra.toLowerCase()]);
  }

  function handleLetterClick(letra) {
    if (!startGame) {
      return;
    }

    if (letterClicked.includes(letra)) {
      return;
    }

    checkLetter(letra);
    setLetterClicked([...letterClicked, letra]);
    checkEndGame();
  }

  function Start() {
    const caracteres = palavra.split("");
    console.log(palavra);

    return (
      <div className="word">
        {caracteres.map((letra, index) => (
          <span key={index} className={endGame && !defeat ? "win" : endGame && defeat ? "defeat" : ""}>
            {letrasAdvinhadas.includes(letra.toLowerCase()) ? letra : "_"}
          </span>
        ))}
      </div>
    );
  }

  function checkEndGame() {
    console.log(erros);

    const caracteres = palavra.split("");
    const uniqueLetters = new Set(caracteres);
    const guessedLetters = new Set(letrasAdvinhadas);

    if (!startGame) {
      return;
    }
    if (uniqueLetters.size === guessedLetters.size) {
      setEndGame(true);
    } else if (erros === 6) {
      setEndGame(true);
      setDefeat(true);
      setLetrasAdvinhadas(caracteres);
    }

    console.log(letrasAdvinhadas);
  }

  useEffect(() => {
    checkEndGame();
  }, [letrasAdvinhadas, erros]);

  function resetGame() {
    if (endGame) {
      setPalavra("");
      setLetrasAdvinhadas([]);
      setErros(0);
      setEndGame(false);
      setDefeat(false);
      Start();
    }
  }

  return (
    <div className="App">
      <Jogo setStartGame={setStartGame}
        startGame={startGame}
        erros={erros}
        resetGame={resetGame}
        endGame={endGame} />
      <div className="word">
        {startGame && <Start />}
      </div>
      <Letras startGame={startGame}
        endGame={endGame}
        letterClicked={letterClicked}
        setLetterClickd={setLetterClicked}
        handleLetterClick={handleLetterClick} />

    </div>
  );
}
