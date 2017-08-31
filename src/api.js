import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from './consts';


const permissions = 'wallet:accounts:read,wallet:transactions:read,wallet:buys:create,wallet:sells:create';

export const redirectUrl  = `https://www.coinbase.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${permissions}`;

const formTokenUrl = (code) => `https://api.coinbase.com/oauth/token?grant_type=authorization_code&code=${code}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}`;

export const getToken = (code) => {
  const url = formTokenUrl(code);
  return fetch(url, { method: 'POST' })
    .then(res => {
      const data = res.json();
      debugger;
      return data;
    })
    .catch(err => err.message);
}


