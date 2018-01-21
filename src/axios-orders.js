import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-9131d.firebaseio.com/'
});

export default instance;
