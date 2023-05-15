export default function Letras({ startGame, letterClicked, handleLetterClick, endGame }) {
    const letras = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const letras1 = letras.slice(0, 13);
    const letras2 = letras.slice(13);

    return (
        <div className="controller">
            <div className="line">
                {letras1.map(letra => {
                    const enabled = startGame && !endGame && !letterClicked.includes(letra);

                    return (
                        <div
                            key={letra}
                            className={`letra${enabled ? ' enabled' : ' disabled'}`}
                            onClick={() => enabled && handleLetterClick(letra)}
                            disabled={!enabled}
                        >
                            {letra}
                        </div>
                    );
                })}
            </div>
            <div className="line">
                {letras2.map(letra => {
                    const enabled = startGame && !endGame && !letterClicked.includes(letra);

                    return (
                        <div
                            key={letra}
                            className={`letra${enabled ? ' enabled' : ' disabled'}`}
                            onClick={() => enabled && handleLetterClick(letra)}
                            disabled={!enabled}
                        >
                            {letra}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
