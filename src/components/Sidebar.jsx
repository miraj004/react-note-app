import PropTypes from "prop-types";
import {ToggleSwitch} from "./ToggleSwitch.jsx";

export default function Sidebar({notes, currentNoteId, setCurrentNoteId, newNote, deleteNote}) {

    return (
        <aside
            className={`border-r-2 border-gray-300 dark:border-gray-500 absolute left-0 top-0 z-10 flex h-screen w-[300px] flex-col overflow-y-hidden bg-gray-200 duration-300 ease-linear dark:bg-gray-900 lg:static lg:translate-x-0 translate-x-0`}
        >
            <div className="relative no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                <ToggleSwitch/>
                <nav className="mt-5 py-4 lg:mt-9 ">
                    <div>
                        <button
                            className={"ps-4 text-gray-500 hover:text-black font-bold dark:hover:text-gray-200 text-sm py-2"}
                            onClick={newNote}>
                            + New Note
                        </button>
                        <ul className="mb-6 flex flex-col gap-1.5">
                            {notes.map((note, index) =>
                                <li key={note.id}
                                    className="hover:bg-gray-300 dark:hover:bg-gray-800 group relative justify-between items-center py-2 cursor-pointer"
                                    onClick={() => setCurrentNoteId(note.id)}
                                >
                                    <a
                                        className={`gap-2.5 rounded px-4 py-2 font-medium cursor-pointer duration-300 ease-in-out hover:text-gray-900 dark:hover:text-gray-200 ${note.id === currentNoteId ? 'text-black dark:text-gray-200' : 'text-gray-500'}`}
                                    >
                                        {++index + '. ' + note.body.split('\n')[0].slice(0, 15) + (note.body.length > 15 ? '...':'') }
                                    </a>
                                    <button
                                        className="text-xs text-red-400 absolute top-1/2 right-[10px] transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={(e) => deleteNote(e, note.id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                                             viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z"/>
                                        </svg>
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
                {/* <!-- Sidebar Menu --> */}
            </div>
        </aside>
    )

}

Sidebar.propTypes = {
    notes: PropTypes.array,
    currentNoteId: PropTypes.string,
    setCurrentNoteId: PropTypes.func,
    newNote: PropTypes.func,
    deleteNote: PropTypes.func
}

