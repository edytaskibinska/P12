import { useState } from "react";
import { useParams } from "react-router-dom";

import {
  Block,
  Indicator,
  Loader,
  Text,
  Title,
  RechartsCustomBars,
  RechartsCustomLineChart,
  RechartsCustomRadial,
  RechartsCustomRadar,
} from "../../components";
import { EnergyIcon, ChickenIcon, AppleIcon, BurgerIcon } from "../../assets";
import colors from "../../globalStyles/colorsIndex";
import { GetUserById } from "../../services/GetData";

function Dashboard() {
  //TODO : SUPPRIMER DEAD CODE 
  //const { server, port, uriUser } = urlSettings;
  let { userId } = useParams();

  //const urlBase = `${server}:${port}/${uriUser}/${userId}`;
  //userId :       /:user_id
  //On utilise  :user_id  pour matérialiser l’ID de l’utilisateur, c’est ce qu’on appelle un placeholder.

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
                overflow="hidden"
                color={colors.main}
                margin="10px 10px 10px 0"
              >
                <RechartsCustomLineChart />
              </Block>
              <Block color={colors.graphitBg} margin="10px " padding="5px">
                <RechartsCustomRadar />
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
      {!dataExist && <Loader />}
    </article>
  );
}

export default Dashboard;
