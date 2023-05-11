import forca0 from './assets/forca0.png';

export default function Jogo() {
    return (
        <div className="game">
            <img src={forca0} />
            <button>
                Escolher Palavra
            </button>
        </div>
    );
}