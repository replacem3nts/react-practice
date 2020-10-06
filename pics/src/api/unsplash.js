import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID -b8FuaeG2Dw8w9sXXNcdYbEwDA-aC3yFbqyllXEdsnQ',
  },
});
