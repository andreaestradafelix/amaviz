export default function Card({ img, title, description, button }) {

    return (
        <div className="card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button>{button}</button>
        </div>
    )

}