/* eslint-disable react/display-name */
"use client";
import { sectionWrapper } from "@/components/primitives";
import { FormEvent, useEffect, useState } from "react";
// import { FeaturesGrid } from "@/components/features-grid";
// import landingContent from "@/content/landing";

export const LastButNotLeast = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) {
      setError("");
      setMessage(`Successfully subscribed!`);
    } else {
      setMessage("");
      setError(data.error);
    }
    setEmail("");
  };

  return (
    <section className={sectionWrapper({ class: "mt-16 lg:mt-4" })}>
      <div className="flex flex-col gap-0 md:gap-8">
        <div>
          <section className="bg-white dark:bg-gray-900 rounded-tl-xl rounded-tr-xl px-10">
            <div className="py-8 mx-auto max-w-screen-xl">
              <div className="mx-auto max-w-screen-md sm:text-center">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
                  Sign up for our newsletter
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                    <div className="relative w-full">
                      <p className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Email address
                      </p>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <input
                        className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-[#006fee] border-[#006fee] sm:rounded-none sm:rounded-r-lg hover:bg-[#006fee] focus:ring-4 focus:ring-[#006fee] dark:bg-[#006fee] dark:hover:bg-[#006fee] "
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
                {message && (
                  <p className="text-1x1 text-green-400">{message}</p>
                )}
                {error && <p className="text-1x1 text-red-400">!!{error}!!</p>}
              </div>
            </div>
          </section>
        </div>
        {/* <FeaturesGrid features={landingContent.fullFeatures} /> */}
      </div>
    </section>
  );
};
