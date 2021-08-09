import axios from 'axios';
export const baseURL = 'https://138.68.163.236/api/v1/';
const loginURL = '/login';
const api = axios.create({
  baseURL,
  headers: {
    Authorization: localStorage.getItem('access_token')
      ? 'Bearer ' + localStorage.getItem('access_token')
      : null,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    // Prevent infinite loops
    if (error.response.status === 401 && originalRequest.url === baseURL + '/users/refreshToken') {
      window.location.href = loginURL;
      return Promise.reject(error);
    }

    if (error.response.status === 401 && error.response.statusText === 'Unauthorized') {
      const refreshToken = localStorage.getItem('refresh_token');

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);

        if (tokenParts.exp > now) {
          return api
            .post(
              '/users/refreshToken',
              {},
              {
                headers: {
                  Authorization: `Bearer ${refreshToken}`,
                },
              },
            )
            .then((response) => {
              console.log('REFRESH TOKEN RESPONSE: ', response.data.data.access_token);
              localStorage.setItem('access_token', response.data.data.access_token);
              localStorage.setItem('refresh_token', response.data.data.refresh_token);

              api.defaults.headers['Authorization'] = `Bearer ${response.data.data.access_token}`;
              originalRequest.headers[
                'Authorization'
              ] = `Bearer ${response.data.data.access_token}`;

              return api(originalRequest);
            })
            .catch((err) => {
              console.log('ERROR: ', err);
            });
        } else {
          window.location.href = loginURL;
        }
      } else {
        console.log('Refresh token not available.');
        window.location.href = loginURL;
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  },
);
export const users = (users) => api.get(`/users/:${users}`);
export const login = (user) => {
  return api.post('/users/login', user);
};
export const getAllSMS = () => api.get(`/sms/`);
export const getSingleSMS = (id) => api.get(`/sms/:${id}`);
export const getCompanies = (page) => api.get(`/companies?page=${1}&limit=${50}`);
export const getStatus = (status) => api.get(`/users/:userId/status:${status}`);

{
  /*
    export const getuser = () => api.get(/users/:userId/status).then(res=> res.data);
    export const getuser = (id) => api.get(`/users/${id}`).then((res)=> res.data);
   //export const getlogin = () => api.post('/users/login').then(res => res.data);
    
    const { data, status, refetch, isFetching } = useQuery('companies', (id) =>
*/
}
