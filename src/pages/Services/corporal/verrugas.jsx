import { verrugas } from '../../../data/corporal';
import '../../../styles/menu/corporal/verrugas.css';

export default function Verrugas() {

    return (
        <section className='verrugas-section'>
            <h1 className='verrugas-title'>Eliminación de Verrugas</h1>
            <div className='verrugas-grid'>
                {verrugas.map((item) => (
                    <div className='verrugas-grid' key={item.id}>
                        <table className='table-info-verrugas'>
                            <tr className='title-table-verrugas'>
                                <th className='title-table'>Cantidad</th>
                                <th className='title-table'>Precio</th>
                            </tr>


                            
                            <tr className='info-table-verrugas'>
                                <td className='info-table'>{item.cantidad}</td>
                                <td className='info-table'>{item.cost}</td>
                            </tr>
                        </table>  
                    </div>
                ))}
            </div>
        </section>
    )
}