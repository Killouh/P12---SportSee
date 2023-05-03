import data from '../../data/data.json';
import './energycards.css';
import apple from '../../assets/apple.png';
import energy from '../../assets/energy.png';
import chicken from '../../assets/chicken.png'
import cheeseburger from '../../assets/cheeseburger.png'

export default function EnergyCards(props) {
    
    const { info, text, type } = props;

        let logoSrc;
        switch (type) {
            case "calorieCount":
                logoSrc = apple;
                break;
            case "proteinCount":
                logoSrc = chicken;
                break;
            case "carbohydrateCount":
                logoSrc = energy;
                break;
            case "lipidCount":
                logoSrc = cheeseburger;
                break;
            default:
                logoSrc = apple;
        }

        let logoContainerClass

        switch (type) {
            case "calorieCount":
                logoContainerClass = "logo_container calorie";
                break;
            case "proteinCount":
                logoContainerClass = "logo_container protein";
                break;
            case "carbohydrateCount":
                logoContainerClass = "logo_container carbohydrate";
                break;
            case "lipidCount":
                logoContainerClass = "logo_container lipid";
                break;
            default:
                logoContainerClass = "logo_container calorie";
        }


    return (
        <div className="card">
            <div className='logo_card'>
                <div className={logoContainerClass}>
                    <img className ='logo_energy' src={logoSrc} alt="Logo des glucides" /></div>
            </div>
            <div className='cardtxt_content'>
                <p className='number_content'>{info}</p>
                <p className='text_content'>{text}</p>
            </div>
        </div>
    );
}