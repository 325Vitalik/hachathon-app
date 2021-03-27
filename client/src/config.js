const PROD_MODE = process.env.NODE_ENV === 'production';
console.log('env: ' + process.env.NODE_ENV);

export const config = {
    hostname: 'http://localhost:5000',
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
};