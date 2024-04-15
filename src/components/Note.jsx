import React, {useState, useEffect} from "react";
import {ReactComponent as CheckIcon} from "../images/icon-check.svg";
import {ReactComponent as CrossIcon} from "../images/icon-cross.svg";

function Note(props){
    const [isActive, setIsActive] = useState(false);

    function toggleButton() {
        setIsActive(current => !current); // 当前状态的反向
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row items-center w-1/3 group shadow-2xl">
                <label className="bg-white w-full border-b  border-gray-500 flex flex-row items-center dark:bg-gray-800">
                    <button
                        className={`w-5 h-5 rounded-full border-2 border-gray-500 bg-transparent relative left-5 ${isActive ? 'bg-check-gradient' : ''}`}
                        onClick={toggleButton}
                        >
                        {isActive ? <CheckIcon className="relative left-1"/> : ''}
                    </button>                    
                    <p className={`bg-white rounded w-full h-12 px-10 py-4 dark:bg-gray-800 dark:text-white ${isActive ? 'line-through' : ''}`}>{props.content}</p>
                    <CrossIcon 
                        className="hidden group-hover:block relative right-5"
                        onClick={() => props.onCheck(props.id)} // Call onCheck with the id when CrossIcon is clicked
                    />               
                </label>
            </div>
        </div>
    );
}

export default Note;