import React, { useContext } from 'react'
import { withRouter } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";
import { auth } from "../Services/firebase";


const UserProfile = () => {
    const user = useContext(UserContext);
    return (
      <React.Fragment>
        {user ? (
          <React.Fragment>
          <div className="rounded overflow-hidden shadow-lg">
            <img
              className="h-250px rounded-lg"
              alt="Profile_Picture"
              src={user.photoURL}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{user.displayName}</div>
              <p className="text-gray-700 text-base">Hi {user.displayName}!</p>
            </div>
          </div>
          <div className="flex justify-center mt-16 mb-8">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Log out
              </button>
            </div>
            </React.Fragment>
        ) : null}
      </React.Fragment>
    );
}

export default withRouter(UserProfile)