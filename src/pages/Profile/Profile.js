import React, { useState, useEffect } from 'react';
import styles from './profile.module.scss';
import DefaultPicture from '../../components/DefaultPicture/DefaultPicture';
import ProfileImageUpload from '../../components/UploadImg/UploadImg';

export default function Profile() {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        location: '',
        aboutYou: '',
    });

    useEffect(() => {
        // Check if there's user data in local storage
        const storedUserData = localStorage.getItem('userData');
      
        if (storedUserData) {
          const parsedUserData = JSON.parse(storedUserData);
          setProfile(parsedUserData);
        }
      }, []);
      

    // State to track whether the user is in edit mode or read mode
    const [isEditMode, setIsEditMode] = useState(false);

    // Define functions for handling user input and editing
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const saveChanges = () => {
           
         // saves what is in the profile in edit mode  
        const editedProfileData = {
          firstName: profile.firstName,
          lastName: profile.lastName,
          phoneNumber: profile.phoneNumber,
          location: profile.location,
          aboutYou: profile.aboutYou,
            };
          
            // Update the profile state with the edited data
            setProfile(editedProfileData);
          
            // Store the edited data in localStorage for a frontend-only solution
            localStorage.setItem('userData', JSON.stringify(editedProfileData));
            // when the save button is clicked it will switch the edit mode to off
            setIsEditMode(false)
    };

    const clearProfileData = () => {
        // Remove user data from local storage
        localStorage.removeItem('userData');
        
        // Reset the state
        setProfile({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          location: '',
          aboutYou: '',
        });
      };      

    
    const [userProfileImage, setUserProfileImage] = useState(null);

    const handleImageUpload = (imageURL) => {
        setUserProfileImage(imageURL);

        sessionStorage.setItem('userProfileImage', imageURL);
    };

    useEffect(() => {
        // Check if a userProfileImage is saved in localStorage
        const savedImage = sessionStorage.getItem('userProfileImage');
        
        // Set the userProfileImage state to the saved image URL (if it exists)
        if (savedImage) {
          setUserProfileImage(savedImage);
        }
      }, []); // This effect runs once when the component mounts
      

    // Reset the userProfileImage back to the default pic after a image has been uploaded
    const resetProfilePicture = () => {
        setUserProfileImage("https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"); 
      };
      

    return (
        <main className={styles.profile}>
            <div>
                <h1>Profile Page</h1>
               
                {userProfileImage ? (
                    <img src={userProfileImage} alt="User Profile" width="200" height="200" />
                        ) : ( <DefaultPicture />)}
                <ProfileImageUpload onImageUpload={handleImageUpload} />
                <button onClick={resetProfilePicture}>Reset Picture</button>
                {/* Show user info in read mode */}
                {!isEditMode ? (
                    <div>
                        <p>
                            <strong>First Name:</strong> {profile.firstName}
                        </p>
                        <p>
                            <strong>Last Name:</strong> {profile.lastName}
                        </p>
                        <p>
                            <strong>Phone Number:</strong> {profile.phoneNumber}
                        </p>
                        <p>
                            <strong>Location:</strong> {profile.location}
                        </p>
                        <p>
                            <strong>About You:</strong> {profile.aboutYou}
                        </p>
                        <button onClick={toggleEditMode}>Edit</button>
                        <button onClick={clearProfileData}>Clear Profile Data</button>
                    </div>
                ) : (
                    /* Edit user info in edit mode */
                    <div>
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={profile.firstName}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={profile.lastName}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Phone Number:
                            <input
                                type="text"
                                name="phoneNumber"
                                value={profile.phoneNumber}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Location:
                            <input
                                type="text"
                                name="location"
                                value={profile.location}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            About You:
                            <textarea
                                name="aboutYou"
                                value={profile.aboutYou}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button onClick={toggleEditMode}>Cancel</button>
                        <button onClick={saveChanges}>Save</button>
                    </div>
                )}
            </div>
        </main>
    );
};
