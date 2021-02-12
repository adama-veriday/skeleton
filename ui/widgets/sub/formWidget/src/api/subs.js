import { getDefaultOptions, request } from 'api/helpers';

const resource = 'api/subs';

export const apiSubGet = async (serviceUrl, id) => {
  const url = `${serviceUrl}/${resource}/${id}`;
  const options = {
    ...getDefaultOptions(),
    method: 'GET',
  };
  return request(url, options);
};

export const apiSubPost = async (serviceUrl, sub) => {
  const url = `${serviceUrl}/${resource}`;
  const options = {
    ...getDefaultOptions(),
    method: 'POST',
    body: sub ? JSON.stringify(sub) : null,
  };
  return request(url, options);
};

export const apiSubPut = async (serviceUrl, sub) => {
  const url = `${serviceUrl}/${resource}`;
  const options = {
    ...getDefaultOptions(),
    method: 'PUT',
    body: sub ? JSON.stringify(sub) : null,
  };
  return request(url, options);
};

export const apiSubDelete = async (serviceUrl, id) => {
  const url = `${serviceUrl}/${resource}/${id}`;
  const options = {
    ...getDefaultOptions(),
    method: 'DELETE',
  };
  return request(url, options);
};
