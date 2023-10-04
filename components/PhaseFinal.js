import { useState, useEffect } from "react";
import Loading from "./Loading";
import DisplayUsers from "./DisplayUsers";

const PhaseFinal = () => {
  const [nextPage, setNextPage] = useState(1);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://randomuser.me/api?page=${nextPage}`
      );
      const json = await response.json();
      if (json === undefined) return; //conditional check, to see if data returns or not
      const newUser = [...users, ...json.results];
      setUsers(newUser);
      setNextPage(json.info.page + 1);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchUsers().catch(`Nah fam, that ain't it...👎`);
  }, []);

  if (users.length <= 0) return <Loading />;
  return (
    <>
      <h1 className="mb-12">PhaseFinal | Button Click Adds Another Users</h1>
      {users.map(({ name, picture, location }, idx) => {
        return (
          <DisplayUsers
            key={idx}
            name={name}
            picture={picture}
            location={location}
          />
        );
      })}
      <button
        onClick={() => {
          fetchUsers();
        }}
        type="button"
        className="mt-8 border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
      >
        Load Another User
      </button>
    </>
  );
};

export default PhaseFinal;
