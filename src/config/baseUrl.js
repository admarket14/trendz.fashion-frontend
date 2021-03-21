let baseUrl = '';

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://api-trendz-fashion.herokuapp.com';
} else {
  baseUrl = 'http://localhost:5000';
}

export default baseUrl;
