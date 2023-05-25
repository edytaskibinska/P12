import { useEffect } from "react";

export const GetUserActivity = ({ setData, userId }) => {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://localhost:3003/user/${userId}/activity`
      );
      const json = await response.json();
      let sessionsUserData = Object.values(json)[0];
      const sessionsModel = sessionsUserData?.sessions?.map((item, index) => ({
        ...item,
        name: index + 1,
      }));

      const newSessionUserData = {
        userId: sessionsUserData.userId,
        sessions: sessionsModel,
      };
      console.log("GET sessionsUserData", sessionsUserData);
      console.log("GET newSessionUserData", newSessionUserData);
      console.log("GET sessionsModel", sessionsModel);
      setData(newSessionUserData);
    };
    getData();
  }, [setData, userId]);

  return null;
};
