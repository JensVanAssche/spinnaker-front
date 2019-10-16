import api from './api';

export const GET_PHOTOS = 'GET_PHOTOS';
export const GET_PHOTOS_REJECTED = 'GET_PHOTOS_REJECTED';
export const GET_PHOTOS_PENDING = 'GET_PHOTOS_PENDING';
export const GET_PHOTOS_FULFILLED = 'GET_PHOTOS_FULFILLED';

export function getPhotos() {
  return {
    type: GET_PHOTOS,
    payload: api.getPhotos(),
  };
}
