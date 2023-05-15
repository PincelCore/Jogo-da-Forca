import forca0 from './assets/forca0.png';
import forca1 from './assets/forca1.png';
import forca2 from './assets/forca2.png';
import forca3 from './assets/forca3.png';
import forca4 from './assets/forca4.png';
import forca5 from './assets/forca5.png';
import forca6 from './assets/forca6.png';

export default function Jogo({ setStartGame, startGame, erros, resetGame, endGame }) {
    let forca;

    switch (erros) {
        case 1:
            forca = forca1;
            break;
        case 2:
            forca = forca2;
            break;
        case 3:
            forca = forca3;
            break;
        case 4:
            forca = forca4;
            break;
        case 5:
            forca = forca5;
            break;
        case 6:
            forca = forca6;
            break;

        default:
            forca = forca0;
    }

    return (
        <div className="game">
            <img src={forca} />
            <div>
                <button
                    type="button"
                    className={startGame ? "started" : ""}
                    disabled={startGame && !endGame ? "null" : ""}
                    onClick={() => {
                        resetGame();
                        setStartGame(!startGame);
                    }}
                >
                    Escolher Palavra
                </button>
            </div>
        </div>
    );
}


