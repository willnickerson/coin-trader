import { CLIENT_ID } from './consts';

const permissions = 'wallet:accounts:read,wallet:transactions:read,wallet:buys:create,wallet:sells:create';

export const redirectUrl  = `https://www.coinbase.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${permissions}`;


