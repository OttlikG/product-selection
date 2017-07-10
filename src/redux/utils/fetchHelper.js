
import fetch        from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

function buildHeaders() {
  return defaultHeaders;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    error.status = response.status

    return Promise.reject(error)
  }
}

function parseJSON(response) {
  return response.json();
}

function parseJsonError(error) {
  return error.response.json()
    .then(error => Promise.reject(error))
}

export function xhrGet(url) {

  return fetch(url, {
    headers: buildHeaders(),
  })
  .then(checkStatus)
  .then(parseJSON, parseJsonError);
}

export function xhrPost(url, data) {
  const body = JSON.stringify(data);

  return fetch(url, {
    method: 'POST',
    headers: buildHeaders(),
    body: body,
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function xhrPatch(url, data) {
  const body = JSON.stringify(data);

  return fetch(url, {
    method: 'PATCH',
    headers: buildHeaders(),
    body: body,
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function xhrPut(url, data) {
  const body = JSON.stringify(data);

  return fetch(url, {
    method: 'PUT',
    headers: buildHeaders(),
    body: body,
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function xhrDelete(url, data) {
  const body = JSON.stringify(data);

  return fetch(url, {
    method: 'DELETE',
    headers: buildHeaders(),
    body: body,
  })
  .then(checkStatus)
  .then(parseJSON);
}
