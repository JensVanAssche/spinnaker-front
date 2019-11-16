import api from "./api";

export const CONTENT = "CONTENT";
export const CONTENT_REJECTED = "CONTENT_REJECTED";
export const CONTENT_PENDING = "CONTENT_PENDING";
export const CONTENT_FULFILLED = "CONTENT_FULFILLED";

export const UPDATE_CONTENT = "UPDATE_CONTENT";
export const UPDATE_CONTENT_REJECTED = "UPDATE_CONTENT_REJECTED";
export const UPDATE_CONTENT_PENDING = "UPDATE_CONTENT_PENDING";
export const UPDATE_CONTENT_FULFILLED = "UPDATE_CONTENT_FULFILLED";

export const UPDATE_PDF = "UPDATE_PDF";
export const UPDATE_PDF_REJECTED = "UPDATE_PDF_REJECTED";
export const UPDATE_PDF_PENDING = "UPDATE_PDF_PENDING";
export const UPDATE_PDF_FULFILLED = "UPDATE_PDF_FULFILLED";

export function getAll() {
  return {
    type: CONTENT,
    payload: api.getAll()
  };
}

export function updateContent(apiUrl, data) {
  return {
    type: UPDATE_CONTENT,
    payload: api.updateContent(apiUrl, data)
  };
}

export function updatePdf(apiUrl, data) {
  return {
    type: UPDATE_PDF,
    payload: api.updatePdf(apiUrl, data)
  };
}
