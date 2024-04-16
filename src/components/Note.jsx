import React, { useState, useEffect } from 'react';
import { ReactComponent as CheckIcon } from '../images/icon-check.svg';
import { ReactComponent as CrossIcon } from '../images/icon-cross.svg';

function Note(props) {
    const [isCompleted, setIsCompleted] = useState(props.complete); // Initialize from props

    useEffect(() => {
        setIsCompleted(props.complete); // Update when props.note.complete changes
    }, [props.complete]);

    function toggleButton() {
        setIsCompleted(current => !current);
        props.toggleCompletion(props.id); // This should update the parent state
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row items-center w-1/3 group shadow-2xl xs:w-80">
                <label className="bg-white w-full border-b border-gray-500 flex flex-row items-center dark:bg-gray-800">
                    <button
                        className={`w-5 h-5 rounded-full border-2 border-gray-500 bg-transparent relative left-5 ${isCompleted ? 'bg-check-gradient' : ''}`}
                        onClick={toggleButton}
                    >
                        {isCompleted ? <CheckIcon className="relative left-1"/> : null}
                    </button>                    
                    <p className={`bg-white rounded w-full h-12 px-10 py-4 dark:bg-gray-800 dark:text-white ${isCompleted ? 'line-through' : ''}`}>
                        {props.content}
                    </p>
                    <CrossIcon 
                        className="hidden group-hover:block relative right-5"
                        onClick={() => props.onCheck(props.id)}
                    />               
                </label>
            </div>
            <div className='flex flex-row justify-around items-center w-1/3 h-12 group border-gray-500 shadow-2xl   dark:bg-gray-800 lg:hidden  xs:w-80'>
                <button className="text-xs text-gray-500 hover:text-white">
                        {props.count <= 1 ? `${props.count}  item left` : `${props.count}  items left`}
                </button>
                <button className="text-xs text-gray-500 hover:text-white " onClick={props.deleteNotesCompleted}>Clear Completed</button>
            </div>
            
        </div>
    );
}

export default Note;
