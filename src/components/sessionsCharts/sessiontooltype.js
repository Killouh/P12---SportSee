import "./sessionscharts.css";

export default function SessionToolType({active, payload}) {
    if (active){

        return (
            <div className="session_tooltip_container">
                <p className="session_tooltip_text">{payload[0].value}min</p>
            </div>
         );
        }
        return null
    }