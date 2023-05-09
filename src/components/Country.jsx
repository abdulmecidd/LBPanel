import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Country = (props) => {
  return (
    <>
      <div className="flex items-center justify-center p-xl">
        <img
          className="rounded-xl w-16 h-16 sm:w-8 sm:h-8 mr-1"
          src={props.flag}
        />
        <h1 className="text-6xl sm:text-4xl sm:text-center font-main text-indigo-950 font-bold">
          {props.country}
        </h1>
      </div>
    </>
  );
};

export default Country;
