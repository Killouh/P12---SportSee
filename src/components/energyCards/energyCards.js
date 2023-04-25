import data from '../../data/data.json';
import './energyCards.css';
import apple from '../../assets/apple.png';

export default function energyCards(props) {
    return (
        <div className="card">
            <div className='logo_card'>
                <div className='logo_container'>
                    <img className ='logo_energy' src={apple} alt="Logo des glucides" /></div>
            </div>
            <div className='cardtxt_content'>
                <p className='number_content'>290</p>
                <p className='text_content'>Glucides</p>
            </div>
        </div>
    );
}