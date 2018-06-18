const { TOKEN, USERNAME, REPO } = require('./config');
const fetch = require('node-fetch');

exports.handler = async (event) => {

  const url = 'https://api.github.com/repos/' + USERNAME + '/' + REPO + '/pages/builds';
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': 'Token ' + TOKEN,
      'Accept': 'application/vnd.github.mister-fantastic-preview+json',
    }
  });

  if (!result.ok) {
    throw new Error('Failure to call github API. HTTP error code: ' + result.status);
  }

  console.log('Publish successful');
};
