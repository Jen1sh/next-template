import Badge from "@/components/chip";
import Categories from "@/components/home/categories";
import Features from "@/components/home/features";
import HowITWorks from "@/components/home/howItWorks";
import { LastButNotLeast } from "@/components/last-but-not-least";
import { title } from "@/components/primitives";
import "../styles/hero.css";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <Badge />
      <div className="inline-block max-w-sm lg:max-w-4xl text-center justify-center text-2xl">
        <h1 className={title({ size: "lg" })}>
          Discover the Best Way to&nbsp;
        </h1>
        <br />
        <h1 className={title({ color: "blue", size: "lg" })}>
          Plan Your{" "}
          <span className={title({ size: "lg", color: "yellow" })}>
            Solo &amp;{" "}
          </span>{" "}
          <span className={title({ size: "lg", color: "yellow" })}>Group</span>{" "}
          RoadTrip.&nbsp;
        </h1>
        <br />
        <h2 className="font-normal text-gray-500 mt-2">
          Streamlining your trip planning so you can focus on making memories.
        </h2>
      </div>
      <div className="flex justify-center w-full max-w-md flex-col gap-6 lg:flex-row items-center">
        <a
          href="https://apps.apple.com/us/app/tripsyncer/id6502956755"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center justify-center w-48 text-white bg-black h-14 rounded-xl"
        >
          <div className="mr-3">
            <svg viewBox="0 0 384 512" width="30">
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              ></path>
            </svg>
          </div>
          <div>
            <div className="text-xs">Download on the</div>
            <div className="-mt-1 font-sans text-xl font-semibold">
              App Store
            </div>
          </div>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.tripsyncer"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center justify-center w-48 text-white bg-black h-14 rounded-xl"
        >
          <div className="mr-3">
            <svg viewBox="30 336.7 120.9 129.2" width="30">
              <path
                fill="#FFD400"
                d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
              ></path>
              app/layout.tsx
              <path
                fill="#FF3333"
                d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
              ></path>
              <path
                fill="#48FF48"
                d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
              ></path>
              <path
                fill="#3BCCFF"
                d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
              ></path>
            </svg>
          </div>
          <div>
            <div className="text-xs">GET IT ON</div>
            <div className="-mt-1 font-sans text-xl font-semibold">
              Google Play
            </div>
          </div>
        </a>
      </div>
      <span className="text-xl p-5 text-center">
        🚀 Connecting Tour Guides, Operators, and Roadtrippers for Seamless
        Group Travel Experiences. Simplifies your roadtrips management powered
        by Generative AI, so you can focus on making your memories.
        <span className="hidden lg:inline-block sm:hidden md:hidden">
          Welcome to TripSyncer, where every journey is an opportunity for
          discovery and connection. Whether you&apos;re a tour guide eager to
          showcase the wonders of your city, a tour operator planning the next
          unforgettable road trip, or a traveler seeking group travel without
          the hassle, we&apos;re here to make your experience smoother and more
          enjoyable. Get ready to plan, manage, and embark on your next
          adventure with ease.
        </span>
      </span>

      <Features />
      {/* <Categories /> */}
      <HowITWorks />
      <LastButNotLeast />
    </section>
  );
}
