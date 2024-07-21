import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = React.useState([])
  // useEffect(() => {
  //     fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then((response) => response.json())
  //     .then(data => {
  //         console.log(data)
  //         setData(data)
  //     })
  // }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Nikhil2409");
  return response.json();
};
//the above step does advanced preprocessing on the required data.
//this function sends the value into main whiich is taken up by the loader in the <Route> tag and it is brought back here using the useLoaderData hook.
