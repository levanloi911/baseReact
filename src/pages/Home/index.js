import { useEffect } from "react";
import callApi from "~/api/callapi";

function Home() {
  useEffect(() => {
    callApi.getAll().then((res) => console.log(res));
  }, []);
  return <>homeage</>;
}

export default Home;
