"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faCalendarAlt,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { title } from "../primitives";

interface ICategory {
  title: string;
  icon: React.ReactNode;
  points: Array<string>;
  subtitle: string;
}

const tickIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-green-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const Categories = () => {
  const [selectedTile, setSelectedTile] =
    useState<ICategory["title"]>("Road trip");

  const data: ICategory[] = [
    {
      title: "Road trip",
      icon: <FontAwesomeIcon icon={faCar} size="1x" />,
      points: ["Pack snacks", "Plan stops", "Check weather"],
      subtitle: "Plan your road trips solo or with friends",
    },
    {
      title: "Event",
      icon: <FontAwesomeIcon icon={faCalendarAlt} size="1x" />,
      points: ["Send invitations", "Arrange seating", "Order catering"],
      subtitle: "Efficiently manage your events",
    },
    {
      title: "Picnic",
      icon: <FontAwesomeIcon icon={faUtensils} size="1x" />,
      points: ["Prepare food", "Bring a blanket", "Choose a location"],
      subtitle: "Plan your picnics with friends",
    },
  ];

  const selectedCategory = data.find((item) => item.title === selectedTile);

  return (
    <div className="flex flex-col items-center w-full bg-gray-900 rounded-3xl p-5 mt-10">
      <h1 className={title({ color: "pink", size: "md" })}>Plan your trip</h1>
      <div className="flex justify-center w-full max-w-3xl space-x-2 gap-12 mt-5">
        {data.map((category) => (
          <div
            key={category.title}
            role="button"
            tabIndex={0}
            className={`cursor-pointer p-5 rounded-lg text-center flex flex-col justify-center items-center
              ${
                selectedTile === category.title
                  ? " text-blue-500"
                  : " text-white"
              }`}
            onClick={() => setSelectedTile(category.title)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedTile(category.title);
              }
            }}
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <div className="text-md font-semibold">{category.title}</div>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div className="flex flex-col mt-2 p-5 w-full justify-between  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex flex-col py-5 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {selectedCategory.subtitle}
            </h5>
            <ul className="list-none ">
              {selectedCategory.points.map((point, index) => (
                <li key={index} className="flex items-center text-lg mb-2">
                  <span className="mr-2">{tickIcon}</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <img
            className="object-cover w-2/5"
            src="/chart.svg"
            alt="Chart illustration"
          />
        </div>
      )}
    </div>
  );
};

export default Categories;
