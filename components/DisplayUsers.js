import React from "react";

const DisplayUsers = ({ name, picture, location }) => {
  return (
    <>
      <div className="transition-all w-full max-w-sm rounded-lg shadow-md bg-gray-700 hover:scale-105 hover:border-2 hover:grow border-gray-500 mb-8">
        <div className="flex flex-col items-center pb-10 pt-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={picture?.large}
            alt={`Picture of ${name.first} ${name.last}`}
          />
          <h5 className="mb-1 text-xl font-mediumtext-white">
            {name.title}. {name.first} {name.last}
          </h5>
          <span className="text-smtext-gray-400">{location.country}</span>
        </div>
      </div>
    </>
  );
};

export default DisplayUsers;
