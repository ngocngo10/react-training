/**
 *  Function uses endpoint, body (optional) and method to return the requested  result by the user
 * @param {string} endpoint
 * @param {string} method
 * @param {object} body
 * @returns
 */
const request = async (endpoint, method = 'GET', body) => {
  const options = {
    method,
    headers: {
      'Content-type': 'application/json',
    },
  };

  if (method === 'POST' || method === 'PUT') {
    options.body = JSON.stringify(body);
  }

  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const res = await fetch(baseUrl + endpoint, options);
  if (!res.ok) {
    throw new Error(`An error has occurred: ${res.status}`);
  }
  const result = await res.json();
  return result;
};

/**
 * Uses endpoint to get data by GET method
 * @param {string} endpoint
 * @returns data
 */
const get = async endpoint => request(endpoint);

/**
 * Use endpoint to delete data by DELETE method
 * @param {string} endpoint
 */
const remove = async endpoint => request(endpoint, 'DELETE');

/**
 * Use endpoint and body to send data to server by POST method
 * @param {string} endpoint
 * @param {object} body
 */
const create = async (endpoint, body) => request(endpoint, 'POST', body);

/**
 * Use endpoint and body to send data to a server to update a resource by PUT method
 * @param {string} endpoint
 * @param {object} body
 */
const update = async (endpoint, body) => request(endpoint, 'PUT', body);

export { get, remove, create, update };
