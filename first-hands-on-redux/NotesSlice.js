import { createSlice } from "@reduxjs/toolkit";

const NotesSlice = createSlice({
    name : 'NotesSlice' , 
    initialState : {
        notes : []
    } , 
    reducers : {
        createNote : (state , action) => {
            state.notes.push(action.payload);
        } , 
        deleteNote : (state , action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
        }
    }
})

export default NotesSlice.reducer;

export const {createNote , deleteNote} = NotesSlice.actions;