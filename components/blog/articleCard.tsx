import React from "react";

const ArticleCard: React.FC = () => {
  return (
    <div className="bg-gray-900 p-3 rounded-lg max-w-sm mx-auto">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Office setup"
          className="w-full h-48 object-cover"
        />
        <div className="flex flex-row mt-3 justify-end px-5">
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide ">
            Article
          </span>
        </div>

        <div className="px-4 mt-2 pb-2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-white text-left">
              Our first office
            </h2>
          </div>
          <p className="text-gray-400 text-left">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation and some hard work, we moved to our new
            office.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
