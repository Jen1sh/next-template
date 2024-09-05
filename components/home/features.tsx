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
import React, { useRef, useState, useEffect } from "react";
import { title } from "../primitives";

interface ICategory {
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
  image: string;
}

const Features = () => {
  const [selectedTile, setSelectedTile] = useState<string>("Trip Planning");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        "Discover activities tailored to your destination and preferences. Our AI analyzes local attractions and suggests the best experiences for your group.",
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

  const handleTileClick = (index: number, title: string) => {
    setSelectedTile(title);

    const container = containerRef.current;
    const selectedItem = itemRefs.current[index % data.length]; // Use modulo to handle infinite scrolling

    if (container && selectedItem) {
      const containerWidth = container.offsetWidth;
      const selectedItemLeft = selectedItem.offsetLeft;
      const selectedItemWidth = selectedItem.offsetWidth;

      // Center the selected item
      const scrollPosition =
        selectedItemLeft - (containerWidth / 2 - selectedItemWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const totalWidth = container.scrollWidth;

        // Check if we've scrolled past the end or beginning
        if (scrollLeft <= 0) {
          container.scrollLeft = totalWidth / 3;
        } else if (scrollLeft >= totalWidth - containerWidth) {
          container.scrollLeft = totalWidth / 3;
        }
      };

      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      id="features"
      className="relative flex flex-col items-center w-full bg-white/10 rounded-3xl p-5 mt-16 bg-opacity-20 backdrop-filter backdrop-blur-lg"
    >
      <h1 className={title({ color: "yellow", size: "md" })}>Features</h1>
      <div className="lg:w-9/12 md:w-9/12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_300px,_black_calc(100%-128px),transparent_100%)]">
        {/* Blurred Edges */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>

        {/* Scrollable Row */}
        <div
          ref={containerRef}
          className="flex space-x-2 overflow-x-auto snap-x snap-mandatory lg:gap-4"
        >
          {/* Duplicated Items */}
          {[...data, ...data, ...data].map((category, index) => (
            <div
              key={category.title + index}
              className={`cursor-pointer px-1 py-5 rounded-lg text-center flex-shrink-0 flex flex-col justify-center items-center transition-all duration-300 snap-center w-[120px]
                ${
                  selectedTile === category.title
                    ? "text-pink-500 transform scale-110"
                    : "text-white"
                }`}
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => handleTileClick(index, category.title)}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <div className="text-sm lg:text-md font-semibold">
                {category.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTile && (
        <div className="grid lg:grid-cols-2 mt-2 p-5 w-full md:grid-cols-1 bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-slate-950 dark:bg-black">
          <div className="py-5 flex flex-col justify-center leading-normal gap-5">
            <h5 className="mb-2 text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.find((item) => item.title === selectedTile)?.subtitle}
            </h5>
            <p className="mb-2 text-base md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {data.find((item) => item.title === selectedTile)?.description}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative mx-auto border-gray-300 dark:border-slate-600 bg-gray-300 border-[10px] rounded-[2.5rem] h-[450px] w-[225px]">
              <div className="h-[24px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -start-[12px] top-[54px] rounded-s-lg"></div>
              <div className="h-[34px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -start-[12px] top-[93px] rounded-s-lg"></div>
              <div className="h-[34px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -start-[12px] top-[134px] rounded-s-lg"></div>
              <div className="h-[48px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -end-[12px] top-[106px] rounded-e-lg"></div>
              <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-white dark:border-slate-600">
                <img
                  src={data.find((item) => item.title === selectedTile)?.image}
                  className="object-fill w-full h-full"
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
