import axios from 'axios'

export function fetchNotes () {
  return new Promise((resolve, reject) => {
    axios.get('/notes/')
      .then((res) => { resolve(res.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function fetchNotesByFolder (folder) {
  return new Promise((resolve, reject) => {
    axios.get('/folders/' + folder + '/notes')
      .then((res) => { resolve(res.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function fetchNotesByTag (tag) {
  return new Promise((resolve, reject) => {
    axios.get('/tags/' + tag + '/notes')
      .then((res) => { resolve(res.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function createNote (note) {
  return new Promise((resolve, reject) => {
    axios.post('/notes/', note)
      .then((res) => { resolve(res.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function updateNote (note) {
  return new Promise((resolve, reject) => {
    axios.put('/notes/' + note.id, note)
      .then((res) => { resolve(res.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function deleteNote (id) {
  return new Promise((resolve, reject) => {
    axios.delete('/notes/' + id)
      .then((res) => { resolve(res.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function fetchNoteTags (note) {
  return new Promise((resolve, reject) => {
    // this will trigger a retrieval of the tags of this note
    axios.get('/notes/' + note.id + '/tags/')
      .then((res) => { resolve(res.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export default {
  fetchNotes,
  createNote,
  updateNote,
  deleteNote,
  fetchNotesByFolder,
  fetchNotesByTag,
  fetchNoteTags
}
