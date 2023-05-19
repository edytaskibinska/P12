import { GreyBlock, Loader } from "../../components";
import useFetch from "../../hooks/useFetchAsync";
import { urlSettings } from "../../routes/settings";

function Dashboard() {
  const { server, port, dataUrl } = urlSettings;
  const currentData = useFetch(`${server}:${port}/${dataUrl}`);
  const { data } = currentData;
  console.log("item", data);
  return (
    <article className="dashboard">
      <GreyBlock>Dashboard</GreyBlock>
      {!currentData.isLoaded && <Loader />}
    </article>
  );
}

export default Dashboard;
