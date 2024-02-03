import {Textarea} from "flowbite-react";
import PropTypes from "prop-types";

export function Editor({handleChange, currentNote}){
    return (
        <Textarea
            className={"duration-300 ease-linear mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 h-svh outline-none border-none rounded-none"}
            onChange={handleChange}
            value={currentNote.body}
        />
    )
}


Editor.propTypes = {
    handleChange: PropTypes.func,
    currentNote: PropTypes.object
}
