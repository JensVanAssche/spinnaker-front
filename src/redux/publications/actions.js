import api from "./api";

export const GET_PUBLICATIONS = "GET_PUBLICATIONS";
export const GET_PUBLICATIONS_REJECTED = "GET_PUBLICATIONS_REJECTED";
export const GET_PUBLICATIONS_PENDING = "GET_PUBLICATIONS_PENDING";
export const GET_PUBLICATIONS_FULFILLED = "GET_PUBLICATIONS_FULFILLED";

export const UPDATE_PUBLICATION = "UPDATE_PUBLICATION";
export const UPDATE_PUBLICATION_REJECTED = "UPDATE_PUBLICATION_REJECTED";
export const UPDATE_PUBLICATION_PENDING = "UPDATE_PUBLICATION_PENDING";
export const UPDATE_PUBLICATION_FULFILLED = "UPDATE_PUBLICATION_FULFILLED";

export const ADD_PUBLICATION = "ADD_PUBLICATION";
export const ADD_PUBLICATION_REJECTED = "ADD_PUBLICATION_REJECTED";
export const ADD_PUBLICATION_PENDING = "ADD_PUBLICATION_PENDING";
export const ADD_PUBLICATION_FULFILLED = "ADD_PUBLICATION_FULFILLED";

export const DELETE_PUBLICATION = "DELETE_PUBLICATION";
export const DELETE_PUBLICATION_REJECTED = "DELETE_PUBLICATION_REJECTED";
export const DELETE_PUBLICATION_PENDING = "DELETE_PUBLICATION_PENDING";
export const DELETE_PUBLICATION_FULFILLED = "DELETE_PUBLICATION_FULFILLED";

export function getPublications() {
  return {
    type: GET_PUBLICATIONS,
    payload: api.getPublications()
  };
}

export function updatePublication(id, body) {
  return {
    type: UPDATE_PUBLICATION,
    payload: api.updatePublication(id, body)
  };
}
export function addPublication(body) {
  return {
    type: ADD_PUBLICATION,
    payload: api.addPublication(body)
  };
}

export function deletePublication(id) {
  return {
    type: DELETE_PUBLICATION,
    payload: api.deletePublication(id)
  };
}
