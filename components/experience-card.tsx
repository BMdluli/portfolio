import React from "react";

const ExperiencCard = () => {
  return (
    <div className="bg-light-gray dark:bg-dark-gray p-4 rounded-2xl">
      <div>
        <p className="text-dark-gray dark:text-light-gray text-sm">
          2022 - 2023
        </p>
        <h3 className="dark:text-white mt-3 font-bold">Full Stack developer</h3>
      </div>
      <p className="text-dark-gray dark:text-light-gray mt-4 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illum quis
        reiciendis atque similique nobis ipsam delectus corrupti eveniet iure
        quos, modi libero, consectetur autem, dolores animi natus exercitationem
        molestias!
      </p>
      <div className="mt-4">
        <span className="bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary px-2  py-1 font-medium rounded-full">
          React
        </span>
      </div>
    </div>
  );
};

export default ExperiencCard;
