import { laser } from '../data/services';
import '../styles/depilacion.css';

export default function Depilacion() {

    return (

        <div className='depilacion-section'>

            <h1 className='depilacion-title'>Depilación Láser</h1>

            <div className='depilacion-list'>
                {laser.map((item))}

            </div>
        </div>
    )

}