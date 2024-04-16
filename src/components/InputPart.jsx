import React, { useState } from "react";
import UpperLightBg from "../images/bg-desktop-light.jpg";
import UpperDarkBg from "../images/bg-desktop-dark.jpg";
import { ReactComponent as SunIcon } from "../images/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../images/icon-moon.svg";

function InputPart({ isDarkMode, toggleDarkMode, addNote }) {
  const [note, setNote] = useState({ content: "" });

  function handleInput(event) {
    setNote({ content: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();  // 防止表单默认提交行为
    if (note.content.trim()) {
      addNote(note.content);
      setNote({ content: "" });  // 清空输入框
    }
  }

  return (
    <section className="bg-cover h-52" style={{ backgroundImage: `url(${isDarkMode ? UpperDarkBg : UpperLightBg})` }}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between my-10 w-1/3 ">
          <p className="text-2xl uppercase font-bold text-white">T o d o</p>
          {isDarkMode ? (
            <SunIcon onClick={toggleDarkMode} />
          ) : (
            <MoonIcon onClick={toggleDarkMode} />
          )}
        </div>
        <form className="w-1/3 xs:w-80" onSubmit={handleSubmit}>
          <label className="bg-white w-full flex flex-row items-center dark:bg-gray-800">
            <button 
              className="w-5 h-5 rounded-full border-2 border-gray-500 bg-transparent relative left-5"
              type="submit"  // 指定按钮类型为submit
            >
            </button>
            <input 
              className="bg-white rounded w-full h-12 px-10 py-5 outline-0 dark:bg-gray-800 dark:text-white" 
              type="text" 
              placeholder="Create a new todo..."
              onChange={handleInput}
              value={note.content}
            />
          </label>
        </form>
      </div>
    </section>
  );
}

export default InputPart;
