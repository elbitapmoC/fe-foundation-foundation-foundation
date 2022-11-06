import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import DisplayUsers from "./DisplayUsers";
const PhaseThree = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const result = await response.json();
      setUsers(result.results);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUsers().catch(console.log("🤷🏾 what happened!?"));
  }, []);
  if (users.length <= 0) return <div>PhaseThree</div>;
  return (
    <>
      <h1 className="mb-12">PhaseThree | Generate User</h1>
      {users.map(({ name, picture, location, id }) => {
        return (
          <DisplayUsers
            key={id}
            name={name}
            picture={picture}
            location={location}
          />
        );
      })}
    </>
  );
};

export default PhaseThree;
