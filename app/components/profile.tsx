import React from "react";

const Profile = () => {
  return (
    <div className="profile-info-container bg-black flex flex-col items-center text-black text-xl gap-2.5 mt-20">
      <div className="profile-image invert">
        <img
          width="90"
          height="80"
          src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
          alt="external-Profile-Image-photo-and-video-linear-outline-icons-papa-vector"
        />
      </div>

      <div className="profile-name invert">
        <h1>BUTTER creative studio</h1>
      </div>

      <div className="profile-social-stats flex justify-evenly invert">
        <span className="flex">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/material-rounded/24/000000/facebook-like--v1.png"
            alt="facebook-like--v1"
          />
          1,125
        </span>

        <span className="flex ml-5 mr-5">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-glyphs/30/group.png"
            alt="group"
          />
          218
        </span>

        <span className="flex">
          <img
            width="25"
            height="20"
            src="https://img.icons8.com/ios-glyphs/30/group.png"
            alt="group"
          />
          0
        </span>
      </div>

      <div className="buttons-section">
        <button
          type="button"
          className="border-solid border-2 border-white rounded-full px-5 py-2 mx-2 text-white"
        >
          Follow
        </button>
        <button
          type="button"
          className="border-solid border-2 border-white rounded-full px-5 py-2 mx-2 text-white"
        >
          Message
        </button>
      </div>
    </div>
  );
};

export default Profile;
