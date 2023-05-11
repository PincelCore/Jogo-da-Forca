export default function Letras() {
    const letras = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const letras1 = letras.slice(0, 13);
    const letras2 = letras.slice(13);

    return (
        <div className="controller">
            <div className="line">
                {letras1.map(letra => (
                    <div key={letra} className="letra" disabled>{letra}</div>
                ))}
            </div>
            <div className="line">
                {letras2.map(letra => (
                    <div key={letra} className="letra" disabled>{letra}</div>
                ))}
            </div>

        </div>
    )
}