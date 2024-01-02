import React, { useEffect, useState } from "react";

function GitHub() {
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/swarnab007')
    .then(res => res.json())
    .then((data) => {
        setData(data);
    });
  }, []);

  return (
    <div className="text-center bg-gray-500 text-3xl text-white p-4">
      <h1>My Followers : {data.followers}</h1>
      <div>
        <img src={data.avatar_url} alt="Profile picture" width={300} m-10/>
      </div>
    </div>
  );
}

export default GitHub;
