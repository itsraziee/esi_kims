const axios = require('axios').default;

export async function sendSMS({ number, message }) {
  const options = {
    method: 'POST',
    url: process.env.REACT_APP_SMS_API,
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  return axios.request({
    ...options,
    data: {
      message,
      number,
    },
  });
}
