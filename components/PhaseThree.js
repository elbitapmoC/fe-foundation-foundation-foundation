import { useEffect, useState } from "react";
import Loading from "./Loading";
const PhaseThree = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    getData().catch(console.error("👻 BOO!"));
  }, []);

  if (!data)
    return (
      <>
        <Loading></Loading>
      </>
    );

  return <>{/* {data?.map} */}</>;
};

export default PhaseThree;
