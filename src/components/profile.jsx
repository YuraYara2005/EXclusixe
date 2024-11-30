import React from 'react'
import Ribbon from './headRibbon'
import Navbar from './navBar'
import ProfileDetails from './Profile/ProfileForm'
import Footer from './Footer'

const profile = () => {

  
    return (
        // Display user's profile information in a separate component.
        // In this case, it's assumed that user is a global state variable.
  // Replace 'user' with the actual variable holding user data.
  // This component should be replaced with your own component to display user profile information.
        <div>
          <Ribbon />
          <Navbar />
          <ProfileDetails />
          <Footer />
        </div>
      
    );
  };

export default profile;
