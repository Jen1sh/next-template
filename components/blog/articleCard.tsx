import React from "react";

interface Props {
  title: string;
  slug: string;
}

const ArticleCard: React.FC<Props> = ({ slug, title }) => {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{title}</p>
      </h2>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4"></div>
        <a
          href="#"
          className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
        >
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
