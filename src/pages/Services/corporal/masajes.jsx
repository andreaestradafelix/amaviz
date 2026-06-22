import { masajes } from '../../../data/corporal';
import '../../../styles/menu/corporal/masajes.css';

export default function Masajes() {

    return (

        <section className='masajes-section'>
            <h1 className='masajes-title'>Masajes</h1>
            <div className='masajes-grid'>
                {masajes.map((item) => (
                    <div className='masajes-card' key={item.id}> 
                    <h3 className='masajes-title'>{item.name}</h3>
                    
                    <p className='masajes-decription'>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>

    )

}