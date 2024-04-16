import React, {useState} from "react";

function NoteState(props){
    return (
        <div className="flex flex-col justify-center items-center xs:my-5">
            <div className="bg-white w-1/3 h-10 flex flex-row  px-5 justify-between  shadow-2xl dark:bg-gray-800 xs:w-80">
                    <button className="text-xs text-gray-500 hover:text-white lg:block xs:hidden">
                        {props.count <= 1 ? `${props.count}  item left` : `${props.count}  items left`}
                    </button>
                    <div className="flex flex-row gap-2	text-gray-500  xs:justify-center w-full">
                        <button className="text-sm hover:text-white focus:text-sky-500" onClick={() => props.setState('all')}>All</button>
                        <button className="text-sm hover:text-white focus:text-sky-500" onClick={() => props.setState('active')}>Active</button>
                        <button className="text-sm hover:text-white focus:text-sky-500" onClick={() => props.setState('completed')}>Completed</button>
                    </div>
                    <button className="text-xs text-gray-500 hover:text-white lg:block xs:hidden" onClick={props.deleteNotesCompleted}>Clear Completed</button>
            </div>
        </div>
    );
}

export default NoteState;