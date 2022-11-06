import React from "react";

const DisplayUsers = ({ name, picture, location }) => {
  return (
    <>
      <div className="dark:hover:bg-gray-900 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-8">
        <div className="flex flex-col items-center pb-10 pt-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={picture?.large}
            alt={`Picture of ${name.first} ${name.last}`}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name.title}. {name.first} {name.last}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {location.country}
          </span>
        </div>
      </div>
    </>
  );
};

export default DisplayUsers;
