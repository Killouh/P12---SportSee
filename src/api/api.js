import axios from "axios";

/**
 * Get user infos
 *
 * @param {string} id User id
 * @returns {id: number, userInfos:{}, todayScore: number, keyData{} } Return an Array with user info data
 */
export const getUserInfos = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

/**
 * Get user activity
 *
 * @param {string} id User id
 * @returns {id: number, session[] }  Return an Array with user activity data
 */
export const getUserActivity = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

/**
 * Get user average session
 *
 * @param {string} id User id
 * @returns {id: number, day: number, sessionLength: number} Return an Array with user average session data
 */
export const getUserAverageSessions = async (id) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

/**
 * Get user performance
 *
 * @param {string} id User id
 * @returns {id: number, kind:{}, data[] } Return an Array with user performance data
 */
export const getUserPerformance = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/performance`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
