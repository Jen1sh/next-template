// import React from "react";
// import { title, titleWrapper } from "../primitives";

// interface Step {
//   title: string;
//   description: string;
//   image: string;
// }

// const MobileView = ({ image }: { image: string }) => (
//   <div className="">
//     <div className="relative mx-auto border-gray-300 dark:border-gray-900 bg-gray-300 dark:bg-gray-900 border-[10px] rounded-[1.8rem] h-[450px] w-[225px]">
//       <div className="h-[24px] w-[2px] bg-gray-300 dark:bg-gray-900 absolute -start-[12px] top-[54px] rounded-s-lg"></div>
//       <div className="h-[34px] w-[2px] bg-gray-300 dark:bg-gray-900 absolute -start-[12px] top-[93px] rounded-s-lg"></div>
//       <div className="h-[34px] w-[2px] bg-gray-300 dark:bg-gray-900 absolute -start-[12px] top-[134px] rounded-s-lg"></div>
//       <div className="h-[48px] w-[2px] bg-gray-300 dark:bg-gray-900 absolute -end-[12px] top-[106px] rounded-e-lg"></div>
//       <div className="rounded-[1.5rem] overflow-hidden w-[204px] h-[424px] bg-white dark:bg-gray-900">
//         <img
//           src={image}
//           className="hidden dark:block w-[204px] h-[424px]"
//           alt=""
//         />
//       </div>
//     </div>
//   </div>
// );

// const HowItWorks = () => {
//   const steps: Step[] = [
//     {
//       title: "Create Account",
//       description:
//         "Create a new account or sign in via Facebook, Google Account or Apple ID.",
//       image: "/auth.jpeg",
//     },
//     {
//       title: "Add New Trip",
//       description: "Create a new trip to a place you want to visit or go to.",
//       image: "/initial-name.jpeg",
//     },
//     {
//       title: "Draft Trip",
//       description: `Draft your trip plans. Plan time and location. Create stop
//                   points in between. Add or generate activities using our AI
//                   powered tool. Invite your friends or go solo. Finalize your
//                   draft.`,
//       image: "/planning.jpeg",
//     },
//     {
//       title: "Ready to go",
//       description: `You are now ready to go. Mark stop points on your journey. See
//                   the stop points and activities in our map. Watch where your
//                   friends currently are. Add pins and notes along the journey
//                   (And see them too!!!!). You can also make your completed trip
//                   a template for other or for yourself, thus not needing to
//                   re-create the same trip.`,
//       image: "/trip-in-progress.jpeg",
//     },
//   ];

//   return (
//     <>
//       <div className="mt-10" />
//       <div className={titleWrapper({ class: "items-center mb-5" })}>
//         <div>
//           <h1 className={title({ size: "lg" })}>Last&nbsp;</h1>
//           <h1 className={title({ color: "yellow", size: "lg" })}>but</h1>
//         </div>
//         <div>
//           <h1 className={title({ size: "lg" })}>not&nbsp;</h1>
//           <h1 className={title({ size: "lg", color: "pink" })}>least.</h1>
//         </div>
//       </div>
//       <section
//         className="flex flex-col items-center py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl"
//         id="how_it_work"
//       >
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2
//               className="text-4xl font-extrabold text-white mb-6"
//               data-aos="fade-up"
//               data-aos-duration="1500"
//               data-aos-delay="300"
//             >
//               <span className="text-purple-400">How it works</span>
//             </h2>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               Follow these simple steps to get started with our amazing app.
//             </p>
//           </div>

//           <div className="space-y-16">
//             {steps.map((item, index) => (
//               <div
//                 className={`flex flex-col lg:flex-row items-center  ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
//                 key={index}
//               >
//                 <div
//                   className="lg:w-1/2"
//                   data-aos="fade-right"
//                   data-aos-duration="1500"
//                 >
//                   <h4 className="text-3xl font-semibold mb-3 text-white">
//                     {item.title}
//                   </h4>
//                   <div className="flex space-x-5 mb-5">
//                     <a
//                       href="!#"
//                       className="text-4xl text-green-500 hover:text-green-700"
//                     >
//                       <i className="icofont-brand-android-robot"></i>
//                     </a>
//                     <a
//                       href="!#"
//                       className="text-4xl text-gray-300 hover:text-white"
//                     >
//                       <i className="icofont-brand-apple"></i>
//                     </a>
//                     <a
//                       href="!#"
//                       className="text-4xl text-blue-500 hover:text-blue-700"
//                     >
//                       <i className="icofont-brand-windows"></i>
//                     </a>
//                   </div>
//                   <p className="text-gray-100 font-semibold leading-relaxed">
//                     {item.description}
//                   </p>
//                 </div>
//                 <div className="text-7xl font-extrabold text-white mt-10 lg:mt-0 lg:w-1/6 lg:block hidden">
//                   <h3>{index + 1}</h3>
//                 </div>
//                 <div
//                   className="lg:w-1/2 mt-10 lg:mt-0"
//                   data-aos="fade-left"
//                   data-aos-duration="1500"
//                 >
//                   <MobileView image={item.image} />
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div
//             className="mt-16 text-center"
//             data-aos="fade-in"
//             data-aos-duration="1500"
//           >
//             <div
//               className="mt-16 text-center"
//               data-aos="fade-in"
//               data-aos-duration="1500"
//             >
//               <div className="relative">
//                 <img
//                   src="https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1392356345.jpg?resize=840,450"
//                   alt="YouTube Thumbnail"
//                   className="rounded-xl shadow-xl mx-auto hover:shadow-2xl transition-shadow duration-300 ease-in-out blur-sm"
//                 />
//                 <a
//                   href="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
//                   className="absolute inset-0 flex flex-col items-center justify-center text-white"
//                   title="Watch video"
//                 >
//                   <span className="block mt-4 text-lg font-semibold bg-purple-600 bg-opacity-80 py-2 px-4 rounded-lg shadow-md">
//                     Create Your First Trip. Go With TripSyncer!!!
//                   </span>
//                   <span className="block text-sm bg-purple-600 bg-opacity-80 py-1 px-3 rounded-lg mt-2">
//                     Watch video
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HowItWorks;
