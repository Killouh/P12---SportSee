import "./activitycharts.css";
import PropTypes from "prop-types";

/** create a custom tooltype for the user activity barChart
 * @param  {bool} active , active selection with cursor
 * @param  {array} payload , Data stored in the active selection
 * @return {JSX} => Activity Charts Tooltip with active parameters
 */

export default function ActivityToolType({active, payload}) {
    if (active){

        return (
            <div className="activity_tooltip_container">
                <p className="activity_tooltip_text">{payload[0].value}kg</p>
                <p className="activity_tooltip_text">{payload[1].value}Kcal</p>
            </div>
         );
        }
        return null
    }

    ActivityToolType.propTypes = {
        active: PropTypes.bool,
        payload: PropTypes.array,
      };