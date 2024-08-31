"use client";

import {
  faArrowsRotate,
  faCableCar,
  faCar,
  faMapLocation,
  faMapPin,
  faShareNodes,
  faThumbTack,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { title } from "../primitives";

interface ICategory {
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
  image: string;
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

const Features = () => {
  const [selectedTile, setSelectedTile] = useState<string>("Trip Planning");

  const data: ICategory[] = [
    {
      title: "Trip Planning",
      icon: <FontAwesomeIcon icon={faCar} size="1x" />,
      description:
        "Start your adventure effortlessly! Set up your itinerary, invite friends, and hit the road with just a few clicks.",
      subtitle: "Seamless Planning & Trip Creation 🗺️",
      image: "/planning.jpeg",
    },
    {
      title: "Live Location",
      icon: <FontAwesomeIcon icon={faMapPin} size="1x" />,
      description:
        "Keep the squad in sync! Always know where your friends are with real-time location updates.",
      subtitle: "Live Location Sharing 📍",
      image: "/user-location.jpeg",
    },
    {
      title: "Pin/Note",
      icon: <FontAwesomeIcon icon={faThumbTack} size="1x" />,
      description:
        "Capture every moment and idea on the go. Pin amazing spots and jot down your thoughts with our intuitive note-taking feature.",
      subtitle: "Pin & Note 📌",
      image: "/notes.jpeg",
    },
    {
      title: "Activity Planning",
      icon: <FontAwesomeIcon icon={faCableCar} size="1x" />,
      description:
        "Dive into excitement with activities everyone loves. Easily browse and book recommended activities tailored to your group's preferences.",
      subtitle: "Plan Activities with Ease 🎢",
      image: "/activities.jpeg",
    },
    {
      title: "Real Time",
      icon: <FontAwesomeIcon icon={faArrowsRotate} size="1x" />,
      description:
        "Get real-time updates and never miss out on the fun. Stay informed about trip changes and upcoming plans.",
      subtitle: "Stay Updated 🔄",
      image: "/user-location.jpeg",
    },
    {
      title: "Stop Points",
      icon: <FontAwesomeIcon icon={faMapLocation} size="1x" />,
      description:
        "Organize your journey with precision. Set strategic meetup and stop points to manage your travel itinerary flawlessly.",
      subtitle: "Meetup Points & Stop Points 📍",
      image: "/stop-points.jpeg",
    },
    {
      title: "AI-Activities",
      icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="1x" />,
      description:
        "Discover activities tailored to your destination and preferences. Our AI analyzes local attractions and suggests the best experiences for your group..",
      subtitle: "AI-Recommended Activities ✨",
      image: "/ai.jpeg",
    },
    {
      title: "Social Sharing",
      icon: <FontAwesomeIcon icon={faShareNodes} size="1x" />,
      description:
        "Easily share your favorite travel memories on social media. With just a few taps, post your photos, videos, and travel notes directly to your favorite platforms.",
      subtitle: "Memory Sharing to Social Media 📸",
      image: "/social.jpeg",
    },
  ];

  return (
    <div
      id="features"
      className="flex flex-col items-center w-full bg-white/10 rounded-3xl p-5 mt-16 bg-opacity-20 backdrop-filter backdrop-blur-lg "
    >
      <h1 className={title({ color: "yellow", size: "md" })}>Features</h1>
      <div className="flex justify-center items-start w-full max-w-3xl space-x-2 gap-12">
        {data.map((category) => (
          <div
            key={category.title}
            className={`cursor-pointer p-5 rounded-lg text-center  flex flex-col justify-center items-center
              ${
                selectedTile === category.title
                  ? " text-blue-500"
                  : " text-white"
              }`}
            // onClick={() => setSelectedTile(category.title)}
            onMouseOver={() => setSelectedTile(category.title)}
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <div className="text-md font-semibold">{category.title}</div>
          </div>
        ))}
      </div>

      {selectedTile && (
        <div className="grid grid-cols-2 mt-2 p-5 w-full md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1  bg-white border border-gray-200 rounded-lg shadow md:flex-row  dark:border-slate-950 dark:bg-black">
          <div className="py-5 flex flex-col justify-center leading-normal gap-5">
            <h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.find((item) => item.title === selectedTile)?.subtitle}
            </h5>
            <p className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {data.find((item) => item.title === selectedTile)?.description}
            </p>
          </div>
          <div className="">
            <div className="relative mx-auto border-gray-300 dark:border-gray-900 bg-gray-300 dark:bg-gray-900 border-[10px] rounded-[1.8rem] h-[450px] w-[225px]">
              <div className="h-[24px] w-[2px] bg-gray-300 dark:bg-gray-900 absolute -start-[12px] top-[54px] rounded-s-lg"></div>
              <div className="h-[34px] w-[2px] bg-gray-300 dark:bg-gray-900 absolute -start-[12px] top-[93px] rounded-s-lg"></div>
              <div className="h-[34px] w-[2px] bg-gray-300 dark:bg-gray-900 absolute -start-[12px] top-[134px] rounded-s-lg"></div>
              <div className="h-[48px] w-[2px] bg-gray-300 dark:bg-gray-900 absolute -end-[12px] top-[106px] rounded-e-lg"></div>
              <div className="rounded-[1.5rem] overflow-hidden w-[204px] h-[424px] bg-white dark:bg-gray-900">
                <img
                  src={data.find((item) => item.title === selectedTile)?.image}
                  className="hidden dark:block w-[204px] h-[424px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
