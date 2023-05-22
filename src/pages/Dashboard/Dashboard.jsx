import { GreyBlock, Loader, Title } from "../../components";
import useFetch from "../../hooks/useFetchAsync";
import { urlSettings, userIdTemp, ressources } from "../../routes/settings";

function Dashboard() {
  //TODO : gerer les userId, ressource dynamiquement
  const { server, port, uriUser } = urlSettings;
  const { userId } = userIdTemp;
  const { session, activity, performance } = ressources;

  
  const currentData = useFetch(
    `${server}:${port}/${uriUser}/${userId}/${session}`
  );
  const { data } = currentData;

  console.log("data", data);
  return (
    <article className="dashboard">
      <GreyBlock>Dashboard</GreyBlock>
      <Title>Dashboard</Title>
      {!currentData.isLoaded && <Loader />}
    </article>
  );
}

export default Dashboard;
