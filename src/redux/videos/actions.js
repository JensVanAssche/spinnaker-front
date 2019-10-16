import api from './api';

export const GET_VIDEOS = 'GET_VIDEOS';
export const GET_VIDEOS_REJECTED = 'GET_VIDEOS_REJECTED';
export const GET_VIDEOS_PENDING = 'GET_VIDEOS_PENDING';
export const GET_VIDEOS_FULFILLED = 'GET_VIDEOS_FULFILLED';

export function getVideos() {
  return {
    type: GET_VIDEOS,
    payload: api.getVideos(),
  };
}
