import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  useEffect(() => {
    let timer;

    if (showModal && progress < 100) {
      timer = setTimeout(() => {
        setProgress((prev) => prev + 1);
      }, 200);
    } else if (progress === 100) {
      setUploadMessage("Upload Successfully!");

      setTimeout(() => {
        setShowModal(false);
        setProgress(0);
        setUploadMessage("");
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [progress, showModal]);

  const handleSubmit = () => {
    setShowModal(true);
    setProgress(0);
    setUploadMessage("");
  };

  return (
    <div className="w-1/2 mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Upload Progress</h1>

      <div className="flex justify-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-1/3 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Uploading...</h2>

            <div className="relative w-full bg-gray-200 rounded-full h-6 mb-4">
              <div
                className="bg-blue-600 h-6 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                {progress}%
              </span>
            </div>

            {uploadMessage && (
              <p className="text-center text-green-600 font-bold mb-4">
                {uploadMessage}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
