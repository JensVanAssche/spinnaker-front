import api from './api';

export const GET_ALL = 'GET_ALL';
export const GET_ALL_REJECTED = 'GET_ALL_REJECTED';
export const GET_ALL_PENDING = 'GET_ALL_PENDING';
export const GET_ALL_FULFILLED = 'GET_ALL_FULFILLED';

export const GET_ALBUMS = 'GET_ALBUMS';
export const GET_ALBUMS_REJECTED = 'GET_ALBUMS_REJECTED';
export const GET_ALBUMS_PENDING = 'GET_ALBUMS_PENDING';
export const GET_ALBUMS_FULFILLED = 'GET_ALBUMS_FULFILLED';

export const GET_PHOTOS = 'GET_PHOTOS';
export const GET_PHOTOS_REJECTED = 'GET_PHOTOS_REJECTED';
export const GET_PHOTOS_PENDING = 'GET_PHOTOS_PENDING';
export const GET_PHOTOS_FULFILLED = 'GET_PHOTOS_FULFILLED';

export const UPDATE_ALBUM = 'UPDATE_ALBUM';
export const UPDATE_ALBUM_REJECTED = 'UPDATE_ALBUM_REJECTED';
export const UPDATE_ALBUM_PENDING = 'UPDATE_ALBUM_PENDING';
export const UPDATE_ALBUM_FULFILLED = 'UPDATE_ALBUM_FULFILLED';

export const ADD_ALBUM = 'ADD_ALBUM';
export const ADD_ALBUM_REJECTED = 'ADD_ALBUM_REJECTED';
export const ADD_ALBUM_PENDING = 'ADD_ALBUM_PENDING';
export const ADD_ALBUM_FULFILLED = 'ADD_ALBUM_FULFILLED';

export const ADD_PHOTO = 'ADD_PHOTO';
export const ADD_PHOTO_REJECTED = 'ADD_PHOTO_REJECTED';
export const ADD_PHOTO_PENDING = 'ADD_PHOTO_PENDING';
export const ADD_PHOTO_FULFILLED = 'ADD_PHOTO_FULFILLED';

export const DELETE_ALBUM = 'DELETE_ALBUM';
export const DELETE_ALBUM_REJECTED = 'DELETE_ALBUM_REJECTED';
export const DELETE_ALBUM_PENDING = 'DELETE_ALBUM_PENDING';
export const DELETE_ALBUM_FULFILLED = 'DELETE_ALBUM_FULFILLED';

export const DELETE_PHOTO = 'DELETE_PHOTO';
export const DELETE_PHOTO_REJECTED = 'DELETE_PHOTO_REJECTED';
export const DELETE_PHOTO_PENDING = 'DELETE_PHOTO_PENDING';
export const DELETE_PHOTO_FULFILLED = 'DELETE_PHOTO_FULFILLED';

export function getAll() {
  return {
    type: GET_ALL,
    payload: api.getAll(),
  };
}

export function getAlbums() {
  return {
    type: GET_ALBUMS,
    payload: api.getAlbums(),
  };
}

export function getPhotos(id) {
  return {
    type: GET_PHOTOS,
    payload: api.getPhotos(id),
  };
}

export function updateAlbum(id, body) {
  return {
    type: UPDATE_ALBUM,
    payload: api.updateAlbum(id, body),
  };
}

export function addAlbum(body) {
  return {
    type: ADD_ALBUM,
    payload: api.addAlbum(body),
  };
}

export function addPhoto(body) {
  return {
    type: ADD_PHOTO,
    payload: api.addPhoto(body),
  };
}

export function deleteAlbum(id) {
  return {
    type: DELETE_ALBUM,
    payload: api.deleteAlbum(id),
  };
}

export function deletePhoto(id) {
  return {
    type: DELETE_PHOTO,
    payload: api.deletePhoto(id),
  };
}