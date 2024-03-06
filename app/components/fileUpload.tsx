import React from "react";

const FileUpload = () => {
  return (
    <div className="flex justify-center invert">
      <div className="rounded-md border border-indigo-500 bg-gray-50 p-4 shadow-md w-36">
        <label
          htmlFor="upload"
          className="flex flex-col items-center justify-center gap-2 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center">
            {" "}
            {/* Center all elements */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 fill-white stroke-indigo-500"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-gray-600 font-medium">Upload file</span>
          </div>
        </label>
        <input id="upload" type="file" className="hidden" />
      </div>
    </div>
  );
};

export default FileUpload;
