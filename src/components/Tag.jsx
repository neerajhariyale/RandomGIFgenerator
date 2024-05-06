import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  
  const [tag, setTag] = useState('car');
  const { gif, loading, fetchData } = useGif(tag);
 

  function clickHandler() {
    fetchData(tag);
  }
  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
      <h1 className="text-2xl underline font-bold mt-[15px]">RANDOM {tag}</h1>

      {loading ? <Spinner /> : <img src={gif} width={450} />}

      <input
        className="w-10/12 text-lg py-2 rounded-lg mb-[2px] p-2"
        onChange={changeHandler}
        value={tag}
      />

      <button
        onClick={clickHandler}
        className="w-10/12 bg-white text-lg py-2 rounded-lg font-bold mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;

// import React from 'react'

// const Tag = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Tag
