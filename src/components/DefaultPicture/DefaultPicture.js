//need default photo for profile picture/default picture
import React from 'react';

const DefaultPicture = ({ fallBackImage }) => {
  return (
    <img
      src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
      alt="Default Profile"
      className="default-profile-picture"
      style={{ height: '200px', width: '200px'}}
      onError={(e) => {
        e.target.src = fallBackImage;
      }}
    />
  );
};

export default DefaultPicture;

