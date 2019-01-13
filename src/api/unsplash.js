import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
        "Client-ID 8415161d7a007490afaf6626a65b9ef9700ef3da7939c858021a3319b5f08eae"
  }
});