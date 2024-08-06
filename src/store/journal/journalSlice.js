import { createSlice } from '@reduxjs/toolkit';

export const JournalAppSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
  },
  reducers: {
    isSavingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = '';
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false;

      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        } else {
          return note;
        }
      });
      state.messageSaved = `"${action.payload.title}", actualizada correctamente`;
    },
    setPhotoToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },
    clearNotesLogouth: (state) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.active = null;
      state.notes = [];
    },
    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.isSaving = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  clearNotesLogouth,
  deleteNoteById,
  isSavingNewNote,
  setActiveNote,
  setNotes,
  setPhotoToActiveNote,
  setSaving,
  updateNote,
} = JournalAppSlice.actions;
/* export default JournalAppSlice.reducer; */
