import "./sessionscharts.css";
import PropTypes from "prop-types";

/** create a custom tooltype for the user activity LineChart
 * @param  {bool} active , active selection with cursor
 * @param  {array} payload , Data stored in the active selection
 * @return {JSX} => Activity LineChart Tooltip with active parameters
 */

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

    SessionToolType.propTypes = {
        active: PropTypes.bool,
        payload: PropTypes.array,
      };