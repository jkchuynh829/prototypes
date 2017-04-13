const githubhook = require('githubhook');

const github = githubhook({
  host: '0.0.0.0',
  port: 8082,
  path: '/pushchanges',
  secret: '123456'
});

github.on('push', (repo, ref, data) => {
  console.log(repo, ref, data);
});