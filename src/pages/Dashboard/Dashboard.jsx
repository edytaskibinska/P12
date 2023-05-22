import { Block, Loader, Title, RechartsCustomBars } from "../../components";
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
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  

  console.log("data", data);
  return (
    <article className="dashboard">
      <Block color={colors.bgClear}>
        <RechartsCustomBars/>
      </Block>
      <Block color={colors.main}></Block>
      <Block color={colors.graphitBg}></Block>
      <Title>Dashboard</Title>
      {!currentData.isLoaded && <Loader />}
    </article>
  );
}

export default Dashboard;
