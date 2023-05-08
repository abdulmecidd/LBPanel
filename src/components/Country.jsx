import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Country = (props) => {
  return (
    <>
      <div className="flex items-center justify-center p-xl ">
        <img className="rounded-xl  w-8 h-8 mr-1" src={props.flag} />
        <h1 className="text-3xl text-main font-main text-indigo-950 font-bold">
          {props.country}
        </h1>
      </div>
    </>
  );
};

export default Country;
