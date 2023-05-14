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
  }

  function Start() {
    const caracteres = palavra.split("");

    return (
      <div className="word">
        {caracteres.map((letra, index) => (
          <span key={index}>
            {letrasAdvinhadas.includes(letra.toLowerCase()) ? letra : "_"}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <Jogo setStartGame={setStartGame}
        startGame={startGame}
        erros={erros} />
      <div className="word">
        {startGame && <Start />}
      </div>
      <Letras startGame={startGame}
        letterClicked={letterClicked}
        setLetterClickd={setLetterClicked}
        handleLetterClick={handleLetterClick} />

    </div>
  );
}
