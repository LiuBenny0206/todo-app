import React from "react";
import UpperLightBg from "../images/bg-desktop-light.jpg";
import UpperDarkBg from "../images/bg-desktop-dark.jpg";
import { ReactComponent as SunIcon } from "../images/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../images/icon-moon.svg";

function UpperPart({ isDarkMode, toggleDarkMode }) {
  return (
    <section className="bg-cover h-52" style={{ backgroundImage: `url(${isDarkMode ? UpperDarkBg : UpperLightBg})` }}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between my-10 w-1/3">
          <p className="text-2xl uppercase font-semibold text-white">T o d o</p>
          {isDarkMode ? (
            <SunIcon onClick={toggleDarkMode} />
          ) : (
            <MoonIcon onClick={toggleDarkMode} />
          )}
        </div>
        <div className="w-1/3"> 
          <input className="bg-white rounded w-full h-12 px-10 py-5 dark:bg-gray-800 dark:text-white" type="text" placeholder="Create a new todo..."/>
        </div>
      </div>
    </section>
  );
}

export default UpperPart;
