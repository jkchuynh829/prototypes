const githubhook = require('githubhook');

const github = githubhook({
  host: 'localhost',
  port: 8082,
  path: '/pushchanges',
  secret: 'tigers'
});

github.on('push', (repo, ref, data) => {
  console.log('event!');
});

github.listen();