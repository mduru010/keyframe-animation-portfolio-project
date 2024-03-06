import React from "react";

const Options = () => {
  return (
    <div className="buttons-section flex justify-center text-xl my-5">
      <button
        type="button"
        className="border-solid border-2 border-white rounded-full px-3 py-1.5 mx-1 text-white"
      >
        Work
      </button>
      <button
        type="button"
        className="border-solid border-2 border-white rounded-full px-3 mx-1 text-white"
      >
        About
      </button>
    </div>
  );
};

export default Options;
