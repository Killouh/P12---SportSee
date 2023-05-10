import "./activitycharts.css";

/** create a custom tooltype for the user activity barChart
 * @param  {bool} active
 * @param  {array} payload
 * @return {JSX}
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