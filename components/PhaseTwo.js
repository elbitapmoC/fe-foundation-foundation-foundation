import { useEffect, useState } from "react";

const PhaseTwo = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const json = await response.json();
      const jsonToStr = JSON.stringify(json, null, 2);
      setData(jsonToStr);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData().catch(console.error("👻 ARGHH!"));
  }, []);

  return (
    <>
      <h1 className="mb-12">PhaseTwo | Fetch the API</h1>
      <pre>{data}</pre>
    </>
  );
};

export default PhaseTwo;
