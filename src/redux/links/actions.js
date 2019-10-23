import api from './api';

export const GET_LINKS = 'GET_LINKS';
export const GET_LINKS_REJECTED = 'GET_LINKS_REJECTED';
export const GET_LINKS_PENDING = 'GET_LINKS_PENDING';
export const GET_LINKS_FULFILLED = 'GET_LINKS_FULFILLED';

export const GET_FOOTER = 'GET_FOOTER';
export const GET_FOOTER_REJECTED = 'GET_FOOTER_REJECTED';
export const GET_FOOTER_PENDING = 'GET_FOOTER_PENDING';
export const GET_FOOTER_FULFILLED = 'GET_FOOTER_FULFILLED';

export const UPDATE_LINK = 'UPDATE_LINK';
export const UPDATE_LINK_REJECTED = 'UPDATE_LINK_REJECTED';
export const UPDATE_LINK_PENDING = 'UPDATE_LINK_PENDING';
export const UPDATE_LINK_FULFILLED = 'UPDATE_LINK_FULFILLED';

export const ADD_LINK = 'ADD_LINK';
export const ADD_LINK_REJECTED = 'ADD_LINK_REJECTED';
export const ADD_LINK_PENDING = 'ADD_LINK_PENDING';
export const ADD_LINK_FULFILLED = 'ADD_LINK_FULFILLED';

export const DELETE_LINK = 'DELETE_LINK';
export const DELETE_LINK_REJECTED = 'DELETE_LINK_REJECTED';
export const DELETE_LINK_PENDING = 'DELETE_LINK_PENDING';
export const DELETE_LINK_FULFILLED = 'DELETE_LINK_FULFILLED';

export function getLinks() {
  return {
    type: GET_LINKS,
    payload: api.getLinks(),
  };
}

export function getFooter() {
  return {
    type: GET_FOOTER,
    payload: api.getFooter(),
  };
}

export function updateLink(data) {
  return {
    type: UPDATE_LINK,
    payload: api.updateLink(data),
  };
}

export function addLink(data) {
  return {
    type: ADD_LINK,
    payload: api.addLink(data),
  };
}

export function deleteLink(id) {
  return {
    type: DELETE_LINK,
    payload: api.deleteLink(id),
  };
}
