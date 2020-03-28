import axios from 'axios'

export function fetchFolders () {
  return new Promise((resolve, reject) => {
    axios.get('/folders/')
      .then((res) => { resolve(res.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function createFolder (folder) {
  return new Promise((resolve, reject) => {
    axios.post('/folders/', folder)
      .then((res) => { resolve(res.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function updateFolder (folder) {
  return new Promise((resolve, reject) => {
    axios.put('/folders/' + folder.id + '/', folder)
      .then((res) => { resolve(res.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export function deleteFolder (id) {
  return new Promise((resolve, reject) => {
    axios.delete('/folders/' + id)
      .then((res) => { resolve(res.data) })
      .catch(error => { reject(error.statusText) })
  })
}

export default {
  fetchFolders,
  createFolder,
  updateFolder,
  deleteFolder
}
