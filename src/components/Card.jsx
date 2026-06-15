import '../styles/components/card.css';

export default function Card({ img, title, description, url }) {

    return (
        <div className="card">
            <div className='individual-card'>
                <img className='card-img' src={img} alt={title} />
                <h3 className='card-title'>{title}</h3>
                <p className='card-text'>{description}</p>
                <button className='card-btn'>{url}Ver tratamientos</button>
            </div>

        </div>
    )

}