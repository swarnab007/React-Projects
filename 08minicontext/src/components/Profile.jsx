import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user)
    return <div className="mt-5 text-lg text-red-600">Login koro raskel !</div>;

  return (
    <div className="mt-5 text-lg text-green-500">Welcome {user.username}</div>
  );
};

export default Profile;
