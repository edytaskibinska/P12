import {
  Block,
  IconBlock,
  Loader,
  Text,
  Title,
  RechartsCustomBars,
} from "../../components";
import { EnergyIcon, ChickenIcon, AppleIcon, BurgerIcon } from "../../assets";
import useFetch from "../../hooks/useFetchAsync";
import { urlSettings, userIdTemp, ressources } from "../../routes/settings";
import colors from "../../globalStyles/colorsIndex";

function Dashboard() {
  //TODO : gerer les userId, ressource dynamiquement
  const { server, port, uriUser } = urlSettings;
  const { userId } = userIdTemp;
  //userId :       /:user_id
  //On utilise  :user_id  pour matérialiser l’ID de l’utilisateur, c’est ce qu’on appelle un placeholder.

  const { session, activity, performance } = ressources;

  const currentData = useFetch(
    `${server}:${port}/${uriUser}/${userId}/${session}`
  );
  const { data } = currentData;

  const rechartData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  console.log("data", data);
  return (
    <article className="dashboard">
      <Title welcomeMessage="Bonjour " margin="20px 0 0 0"  name="Thomas" nameColor={colors.main} />
      <Text fontSize="18px" margin="20px 0 40px 0" >Félicitation ! Vous avez explosé vos objectifs hier 👏</Text>
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
              ></Block>
              <Block
                color={colors.graphitBg}
                margin="10px "
                padding="20px"
              ></Block>
              <Block
                color={colors.bgClear}
                margin="10px 0 10px 10px "
                padding="20px"
              ></Block>
            </Block>
          </Block>
        </Block>

        <Block padding="20px 10px" specialClass="indicators">
          <Block color={colors.bgClear} padding="20px" margin="0 0 20px 0">
            <IconBlock
              padding="5px"
              margin="0 0 20px 0"
              dimensions="60px"
              color={colors.mainClear}
            >
              <EnergyIcon color={colors.main} />
            </IconBlock>
            sds
          </Block>
          <Block color={colors.bgClear} padding="20px" margin="20px 0">
            <IconBlock
              padding="5px"
              margin="0 0 20px 0"
              dimensions="60px"
              color={colors.blueBgClear}
            >
              <ChickenIcon color={colors.blueBg} />
            </IconBlock>
            dsd
          </Block>
          <Block color={colors.bgClear} padding="20px" margin="20px 0">
            <IconBlock
              padding="5px"
              margin="0 0 20px 0"
              dimensions="60px"
              color={colors.yellowBgClear}
            >
              <AppleIcon color={colors.yellowBg} />
            </IconBlock>
            dsd
          </Block>
          <Block color={colors.bgClear} padding="20px" margin="20px 0 0 0 0">
            <IconBlock
              padding="5px"
              margin="0 0 20px 0"
              dimensions="60px"
              color={colors.pinkBgClear}
            >
              <BurgerIcon color={colors.pinkBg} />
            </IconBlock>
            ds
          </Block>
        </Block>
      </Block>

      <Block color={colors.main}></Block>
      <Block color={colors.graphitBg}></Block>
      {!currentData.isLoaded && <Loader />}
    </article>
  );
}

export default Dashboard;
