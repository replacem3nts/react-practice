import axios from 'axios';

const KEY = 'AIzaSyBvC-8rZSKeh2ykGyedtWMjN6lW_cOMFoo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
