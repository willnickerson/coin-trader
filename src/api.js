import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from './consts';
import request from 'superagent';

const coinbaseApiUrl = 'https://api.coinbase.com/v2' ;
const apiUrl = process.env.API_URL || 'http://localhost:8080/api';

const permissions = 'wallet:accounts:read,wallet:transactions:read,wallet:buys:create,wallet:sells:create';

export const redirectUrl  = `https://www.coinbase.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${permissions}`;

const formTokenUrl = (code) => `https://api.coinbase.com/oauth/token?grant_type=authorization_code&code=${code}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}`;

const getLocalToken = () => localStorage.getItem('AUTH_TOKEN');

export const getToken = (code) => {
  const url = formTokenUrl(code);
  return fetch(url, { method: 'POST' })
    .then(res => {
      const data = res.json();
      return data;
    })
    .catch(err => err.message);
}

export const getUserData = () => request
  .get(`${coinbaseApiUrl}/user`)
  .set('Authorization', `Bearer ${getLocalToken()}`)
  .then(res => {
    return res.body.data;
  });

export const getPrice = (base, currency, price) => request
    .get(`${coinbaseApiUrl}/prices/${base}-${currency}/${price}`)
    .then(res => {
      return res.body.data
    });


export const getCurrencies = () => request
    .get(`${coinbaseApiUrl}/currencies`)
    .then(res => res.body.data);



