import { useEffect } from "react";

//for objectif de la journée
//and : informations utilisateur
export const GetUserById = ({ setData, userId }) => {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://localhost:3003/user/${userId}`);
      const json = await response.json();
      let getUsers = Object.values(json)[0];

      //adding supplement object to generate titles
      const addedTitles = {
        keyDataTitles: {
          caloriesTitle: "Calories",
          proteinTitlet: "Protein",
          carbsTitle: "Glucides",
          lipidTitlet: "Lipides",
        },
      };
      //adding supplement object to generate unities
      const unities = {
        caloriesUnity: "kCal",
        proteinUnity: "g",
        carbsUnity: "g",
        lipidUnity: "g",
      };
      getUsers = { ...getUsers, ...addedTitles, unities };
      console.log("getUsers", getUsers);
      // console.log("GET GetUserById getUsers", getUsers);

      setData(getUsers); // a corriger
    };
    getData();
  }, [setData, userId]);

  return null;
};

//activité quitidienne (poids calories echarts-
//chiffres clés (calories, proteies/ lopides/glucides) de la journée)
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
      //   console.log("GET sessionsUserData", sessionsUserData);
      //   console.log("GET newSessionUserData", newSessionUserData);
      //   console.log("GET sessionsModel", sessionsModel);
      setData(newSessionUserData);
    };
    getData();
  }, [setData, userId]);

  return null;
};
