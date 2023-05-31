import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  Block,
  IconBlock,
  Indicator,
  IndicatorText,
  Loader,
  Text,
  Title,
  RechartsCustomBars,
  RechartsCustomLineChart,
  RechartsCustomRadial,
} from "../../components";
import { EnergyIcon, ChickenIcon, AppleIcon, BurgerIcon } from "../../assets";
import useFetch from "../../hooks/useFetchAsync";
import { urlSettings, ressources } from "../../routes/settings";
import colors from "../../globalStyles/colorsIndex";
import { GetUserActivity, GetUserById } from "../../services/GetData";
//import UseFetchTempClass from "../../services/tempmock";

function Dashboard() {
  //TODO : gerer les userId, ressource dynamiquement
  const { server, port, uriUser } = urlSettings;
  let { userId } = useParams();

  const urlBase = `${server}:${port}/${uriUser}/${userId}`;
  //userId :       /:user_id
  //On utilise  :user_id  pour matérialiser l’ID de l’utilisateur, c’est ce qu’on appelle un placeholder.

  const { session, activity, performance } = ressources;

  const sessionsData = useFetch(`${urlBase}/${session}`);
  const activityData = useFetch(`${urlBase}/${activity}`);
  const performanceData = useFetch(`${urlBase}/${performance}`);

  //const { data } = sessionsData;
  //const { data } = activityData;
  //const { data } = performanceData;

  const [data, setData] = useState(null);

  // console.log("DASHB data", data);
  const dataExist = (data || data?.id) != null;

  return (
    <article className="dashboard">
      {/* GET data : getUserById */}
      <GetUserById setData={setData} userId={Number(userId)} />

      <Title
        welcomeMessage="Bonjour "
        margin="20px 0 0 0"
        name={dataExist && data?.userInfos?.firstName}
        nameColor="red"
      />

      <Text fontSize="18px" margin="20px 0 40px 0">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </Text>
      <Block grid3to1>
        <Block specialClass="echarts" padding="20px 10px">
          <Block color={colors.bgClear}>
            <RechartsCustomBars />
          </Block>
          <Block>
            <Block grid3to3>
              <Block
                color={colors.main}
                margin="10px 10px 10px 0"
                padding="20px"
              >
                <RechartsCustomLineChart />
              </Block>
              <Block color={colors.graphitBg} margin="10px " padding="20px">
                <></>
              </Block>
              <Block
                color={colors.bgClear}
                margin="10px 0 10px 10px "
                padding="20px"
              >
                <RechartsCustomRadial />
              </Block>
            </Block>
          </Block>
        </Block>
        <Block padding="20px 10px" specialClass="indicators">
          {/* {console.log("INDICATORS data", data)} */}
          {dataExist ? (
            <>
              <Indicator
                title={data?.keyDataTitles?.caloriesTitle}
                count={data?.keyData?.calorieCount}
                unity={data?.unities?.caloriesUnity}
                colorBgClear={colors.bgClear}
                colorIconBox={colors.mainClear}
              >
                <EnergyIcon color={colors.main} />
              </Indicator>
              <Indicator
                title={data?.keyDataTitles?.proteinTitlet}
                count={data?.keyData?.proteinCount}
                unity={data?.unities?.proteinUnity}
                colorBgClear={colors.bgClear}
                colorIconBox={colors.blueBgClear}
              >
                <ChickenIcon color={colors.blueBg} />
              </Indicator>
              <Indicator
                title={data?.keyDataTitles?.carbsTitle}
                count={data?.keyData?.carbohydrateCount}
                unity={data?.unities?.carbsUnity}
                colorBgClear={colors.bgClear}
                colorIconBox={colors.yellowBgClear}
              >
                <AppleIcon color={colors.yellowBg} />
              </Indicator>
              <Indicator
                title={data?.keyDataTitles?.lipidTitlet}
                count={data?.keyData?.lipidCount}
                unity={data?.unities?.lipidUnity}
                colorBgClear={colors.bgClear}
                colorIconBox={colors.pinkBgClear}
              >
                <BurgerIcon color={colors.pinkBg} />
              </Indicator>
            </>
          ) : (
            <Loader />
          )}
        </Block>
      </Block>
      <Block color={colors.main}>
        <></>
      </Block>
      <Block color={colors.graphitBg}>
        <></>
      </Block>
      {!sessionsData.isLoaded && <Loader />}
    </article>
  );
}

export default Dashboard;
