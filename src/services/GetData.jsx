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
      setData(getUsers);
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
      setData(newSessionUserData);
    };
    getData();
  }, [setData, userId]);

  return null;
};

//durée moyenne des sessions
export const GetUserAverageSessions = ({ setData, userId }) => {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://localhost:3003/user/${userId}/average-sessions`
      );
      const json = await response.json();
      let averageSessions = Object.values(json)[0];

      function averageSessionsGenerator() {
        function weekNameGenerator(ind) {
          let weekName = "L";

          switch (ind) {
            case 1: {
              weekName = "L";
              break;
            }
            case 2: {
              weekName = "M";
              break;
            }
            case 3: {
              weekName = "M";
              break;
            }
            case 4: {
              weekName = "J";
              break;
            }
            case 5: {
              weekName = "V";
              break;
            }
            case 6: {
              weekName = "S";
              break;
            }
            case 7: {
              weekName = "D";
              break;
            }
            default: {
              weekName = "L";
              break;
            }
          }
          return weekName;
        }
        const averageSessionsModel = averageSessions?.sessions?.map((item) => ({
          ...item,
          dayName: weekNameGenerator(item.day),
        }));
        return averageSessionsModel;
      }
      const averageSessionsDataModel = averageSessionsGenerator();
      setData(averageSessionsDataModel);
    };
    getData();
  }, [setData, userId]);

  return null;
};

//type d'activité - performance
//radar chart
export const GetUserActivityPerformance = ({ setData, userId }) => {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://localhost:3003/user/${userId}/performance`
      );
      const json = await response.json();
      let userPerformanceData = Object.values(json)[0];
      //selecting the matching kind from data.kind
      const findPerfKind = (obj, val) => {
        const result = Object.entries(obj).filter((item) => {
          const selectedKind = val === +item[0];
          return selectedKind;
        });
        return result[0][1];
      };
      const performanceModel = userPerformanceData?.data?.map((item) => ({
        ...item,
        subject: findPerfKind(userPerformanceData?.kind, item?.kind),
        fullMark: 150,
      }));
      setData(performanceModel);
    };
    getData();
  }, [setData, userId]);

  return null;
};
