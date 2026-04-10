import "./Card.css"

interface CardProps {
    imagen: string;
    nombre: string;
    nivel: string;
}

function Card({ imagen, nombre, nivel }: CardProps) {
    return (
        <>
        <div><img src={imagen} alt="" /></div>
        <div className="info">
            <h2>{nombre}</h2>
            <p>Nivel: {nivel}</p>
        </div>
        </>
    )
}

export default Card