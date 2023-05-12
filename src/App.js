import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";
import React, { useState } from 'react';


export default function App() {
  const [startGame, setStartGame] = useState(false);
  let [erros, setErros] = useState(0);

  return (
    <div className="App">
      <Jogo setStartGame={setStartGame} startGame={startGame} erros={erros} setErros={setErros} />
      <Letras startGame={startGame} />
    </div>
  );
}
