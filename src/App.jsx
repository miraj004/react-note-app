import './App.css'


import {ToggleSwitch} from "./components/ToggleSwitch.jsx";
import {useEffect, useState} from "react";
import {nanoid} from 'nanoid'
import Sidebar from "./components/Sidebar.jsx";
import {Editor} from "./components/Editor.jsx";
import Navbar from "./components/Navbar.jsx";
import {Button} from "flowbite-react";

function App() {

    const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) || [])
    const [currentNoteId, setCurrentNoteId] = useState((notes[0] && notes[0].id) || "")

    function createNote() {
        const newNote = {
            id: nanoid(),
            body: "Type Here!"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    function updateNote(text) {

        // - Update the note and rearrange the note at the first position

        setNotes(oldNotes => {
                const newArray = []
                oldNotes.map((oldNote) => {
                    oldNote.id === currentNoteId ? newArray.unshift({...oldNote, body: text}) : newArray.push(oldNote)
                })
                return newArray;
            }
        )


        /*
        - Update the current Note
        setNotes(oldNotes =>
            oldNotes.map(oldNote => {
                return oldNote.id === currentNoteId ? {...oldNote, body: text} : oldNote
            })
        )
        */

    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    function handleChange(e) {
        const {value} = e.target;
        updateNote(value)
    }

    function deleteNote(event, noteId) {
        event.stopPropagation()
        setNotes((notes) =>
            notes.filter(note => note.id !== noteId)
        )
        setCurrentNoteId(notes[0].id)
    }

    return (

        <div className="relative dark:bg-boxdark-2 dark:text-bodydark h-svh">
            {notes.length > 0 ?
                <div className="relative flex h-screen overflow-hidden">
                    <Sidebar
                        notes={notes}
                        currentNoteId={currentNoteId}
                        setCurrentNoteId={setCurrentNoteId}
                        newNote={createNote}
                        deleteNote={deleteNote}
                    />
                    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                        <main className={'h-full'}>
                            <Editor
                                handleChange={handleChange}
                                currentNote={findCurrentNote()}
                            />
                        </main>
                    </div>
                </div>
            :
                <Button className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}
                        onClick={createNote}
                >Create Note</Button>
            }
        </div>

    )

}

export default App
