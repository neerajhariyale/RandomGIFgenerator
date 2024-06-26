import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 bg-green-300 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl underline font-bold mt-[15px]">A RANDOM GIF</h1>

      {loading ? <Spinner /> : <img src={gif} width={450} />}

      <button
        onClick={clickHandler}
        className="w-10/12 bg-white text-lg py-2 rounded-lg font-bold mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
