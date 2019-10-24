import api from './api';

export const GET_VIDEOS = 'GET_VIDEOS';
export const GET_VIDEOS_REJECTED = 'GET_VIDEOS_REJECTED';
export const GET_VIDEOS_PENDING = 'GET_VIDEOS_PENDING';
export const GET_VIDEOS_FULFILLED = 'GET_VIDEOS_FULFILLED';

export const UPDATE_VIDEO = 'UPDATE_VIDEO';
export const UPDATE_VIDEO_REJECTED = 'UPDATE_VIDEO_REJECTED';
export const UPDATE_VIDEO_PENDING = 'UPDATE_VIDEO_PENDING';
export const UPDATE_VIDEO_FULFILLED = 'UPDATE_VIDEO_FULFILLED';

export const ADD_VIDEO = 'ADD_VIDEO';
export const ADD_VIDEO_REJECTED = 'ADD_VIDEO_REJECTED';
export const ADD_VIDEO_PENDING = 'ADD_VIDEO_PENDING';
export const ADD_VIDEO_FULFILLED = 'ADD_VIDEO_FULFILLED';

export const DELETE_VIDEO = 'DELETE_VIDEO';
export const DELETE_VIDEO_REJECTED = 'DELETE_VIDEO_REJECTED';
export const DELETE_VIDEO_PENDING = 'DELETE_VIDEO_PENDING';
export const DELETE_VIDEO_FULFILLED = 'DELETE_VIDEO_FULFILLED';

export function getVideos() {
  return {
    type: GET_VIDEOS,
    payload: api.getVideos(),
  };
}

export function getByOffset(offset) {
  return {
    type: GET_VIDEOS,
    payload: api.getByOffset(offset),
  };
}

export function updateVideo(id, body) {
  return {
    type: UPDATE_VIDEO,
    payload: api.updateVideo(id, body),
  };
}

export function addVideo(body) {
  return {
    type: ADD_VIDEO,
    payload: api.addVideo(body),
  };
}

export function deleteVideo(id) {
  return {
    type: DELETE_VIDEO,
    payload: api.deleteVideo(id),
  };
}