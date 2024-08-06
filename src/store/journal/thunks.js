import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import {
  addNewEmptyNote,
  deleteNoteById,
  isSavingNewNote,
  setActiveNote,
  setNotes,
  setPhotoToActiveNote,
  setSaving,
  updateNote,
} from './journalSlice';
import { loadNotes, fileUpload } from '../../helpers';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(isSavingNewNote());
    // uid
    const { uid } = getState().auth;

    // new note
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    const setDocResp = await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;
    //! dispatch
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error('El uid no existe');
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNotes = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });
    dispatch(updateNote(note));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    const photosUrl = await Promise.all(fileUploadPromises);

    dispatch(setPhotoToActiveNote(photosUrl));
    console.log(photosUrl);
  };
};

export const startDeleteNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active: note } = getState().journal;
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef);
    //! dispatch
    dispatch(deleteNoteById(note.id));
  };
};
