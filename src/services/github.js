/**
 * @typedef {import('axios').AxiosInstance} Axios
 * @param {{instance: Axios, httpConfig: { headers }}} object
 */
const github = ({ instance, httpConfig }) => ({
  get: (data) => {
    const { headers } = httpConfig();
    return instance.get('/repository', {
      data,
      headers,
    });
  },
  post: () => {
    const { headers } = httpConfig();
    return instance.post('/repository', {
      headers,
    });
  },
});

export default github;
