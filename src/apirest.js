


/**
 * Valida el estado y devuelve un error con el mismo response
 * @param {Object} response
 * @returns {Object}
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
/**
 * Devuelve el objeto en un formato json, si el estado es 204 o 205 devuelve null
 * @param {Object} response
 * @returns {(Object|null)}
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  if (response.status === 401) {
  }
  return response.json();
}
/**
 * Manejo de errores del fetch
 * @param {string} error
 */
function handleError(error) {
  console.error(error);
  alert('Error inesperado');
}
/**
 * Obtiene las opciones con los headers por default y lo combina con el data
 * si es que tiene
 * @param {Object} data
 * @param {Object} options
 * @returns {Object}
 */
function getOptions(data = null, options = {}) {
  const { headers } = options;
  let token = localStorage.getItem('token');
  if (token) token = token.split('"').join('');
  const defaultHeaders = {
    Authorization: 'Bearer ' + token,
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  };
  return {
    ...options,
    headers: {
      ...defaultHeaders,
      ...headers
    },
    body: data ? JSON.stringify(data) : undefined
  };
}
/**
 * Genera un request que devuelve una promesa
 * @param {string} url Url
 * @param {Object} data Objeto del body
 * @param {Object} options Opciones del request
 * @returns {Promise}
 */
export const useFetch = (url, data = null, options = {}) => {
  const newOptions = getOptions(data, options);
  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .catch(handleError);
};
/**
 * Genera un request GET que devuelve una promesa
 * @param {string} url Url
 * @param {Object} data Objeto del body
 * @param {Object} options Opciones del request
 * @returns {Promise}
 */
export const useGetFetch = (url, data = null, options = {}) => {
  const newOptions = getOptions(data, { ...options, method: 'GET' });

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .catch(handleError);
};

/**
 * Genera un request POST que devuelve una promesa
 * @param {string} url Url
 * @param {Object} data Objeto del body
 * @param {Object} options Opciones del request
 * @returns {Promise}
 */
export const usePostFetch = (url, data = null, options = {}) => {
  const newOptions = getOptions(data, { ...options, method: 'POST' });

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .catch(handleError);
};

/**
 * Genera un request PUT que devuelve una promesa
 * @param {string} url Url
 * @param {Object} data Objeto del body
 * @param {Object} options Opciones del request
 * @returns {Promise}
 */
export const usePutFetch = (url, data = null, options = {}) => {
  const newOptions = getOptions(data, { ...options, method: 'PUT' });

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .catch(handleError);
};


/**
 * Genera un request DELETE que devuelve una promesa
 * @param {string} url Url
 * @param {Object} data Objeto del body
 * @param {Object} options Opciones del request
 * @returns {Promise}
 */
export const useDeleteFetch = (url, data = null, options = {}) => {
  const newOptions = getOptions(data, { ...options, method: 'DELETE' });

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(parseJSON)
    .catch(handleError);
};

/**
 * Obtiene el query string de un objeto sin el `?` inicial
 * @param {Object} data
 * @returns {string}
 */
function getQueryString(data) {
  return new URLSearchParams(data).toString();
}

/**
 * Obtiene la url con los parámetros del data
 * @param {string} url
 * @param {Object} data
 * @returns {string}
 */
export const getUrlObject = (url, data) => {
  const queryString = getQueryString(data);
  return `${url}?${queryString}`;
};