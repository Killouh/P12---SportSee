import axios from "axios";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE  } from '../data/mockData';

// Mock Commutator :

export const useMockData = false; // change here for commutating

/**
 * Get user infos
 *
 * @param {string} id User id
 * @returns {id: number, userInfos:{}, todayScore: number, keyData{} } Return an Array with user info data
 */


export class UserInfo {
  constructor(id, userInfos, todayScore, keyData) {
    this.id = id;
    this.userInfos = userInfos;
    this.todayScore = todayScore;
    this.keyData = keyData;
  }
}

export const getUserInfos = async (id) => {
  const userId = parseInt(id, 10);
  if (useMockData === true) {
    const data = USER_MAIN_DATA.find((user) => user.id === userId);

    if (!data) {
      throw new Error('User not found');
    }

    const userInfo = new UserInfo(
      data.id,
      data.userInfos,
      data.todayScore,
      data.keyData
    );

    return userInfo;
  }
else{
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    const data = res.data.data;

    const userInfo = new UserInfo(
      data.id,
      data.userInfos,
      data.todayScore,
      data.keyData
    );

    return userInfo;
  } catch (e) {
    console.log(e);
  }
}
};

/**
 * Get user activity
 *
 * @param {string} id User id
 * @returns {userId: string, session[] }  Return an Array with user activity data
 */

export class UserActivity {
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }
}

export const getUserActivity = async (id) => {
  const userId = parseInt(id, 10);
  if (useMockData === true) {
    const data = USER_ACTIVITY.find((user) => user.userId === userId);

    if (!data) {
      throw new Error('User not found');
    }

    const userActivity = new UserActivity(
      data.userId, 
      data.sessions
      );
    return userActivity;
  }
else{
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
    const data = res.data.data;

    const userActivity = new UserActivity(
      data.userId, 
      data.sessions
      );
    return userActivity;
  } catch (e) {
    console.log(e);
  }
}
};
/**
 * Get user average session
 *
 * @param {string} id User id
 * @returns {userId: string, day: string, sessionLength: string} Return an Array with user average session data
 */

export class UserAverageSessions {
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;

  }
}

export const getUserAverageSessions = async (id) => {
  const userId = parseInt(id, 10);
  if (useMockData === true) {
    const data = USER_AVERAGE_SESSIONS.find((user) => user.userId === userId);

    if (!data) {
      throw new Error('User not found');
    }

    const userAverageSessions = new UserAverageSessions(
      data.userId,
      data.sessions,
    );

    return userAverageSessions;
  }
else{
  try {
    const res = await axios.get(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    const data = res.data.data;

    const userAverageSessions = new UserAverageSessions(
      data.userId,
      data.sessions,
    );

    return userAverageSessions;
  } catch (e) {
    console.log(e);
  }
}
};

/**
 * Get user performance
 *
 * @param {string} id User id
 * @returns {userId: string, kind:{}, data[] } Return an Array with user performance data
 */

export class UserPerformance {
  constructor(userId, kind, data) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
}

export const getUserPerformance = async (id) => {
  const userId = parseInt(id, 10);
  if (useMockData === true) {

    const data = USER_PERFORMANCE.find((user) => user.userId === userId);

    if (!data) {
      throw new Error('User not found');
    }

    const userPerformance = new UserPerformance(
      data.userId,
      data.kind,
      data.data
    );

    return userPerformance;
  }
else{
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/performance`);
    const data = res.data.data;

    const userPerformance = new UserPerformance(
      data.userId,
      data.kind,
      data.data
      );

    return userPerformance;
  } catch (e) {
    console.log(e);
  }
}
};
