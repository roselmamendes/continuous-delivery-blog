const express = require('express');
const app = express();
var butter = require('buttercms')(process.env.BUTTER_CMS_TOKEN);

app.use(express.static('public'));

app.get('/posts', function(req, res) {
  butter.post.list({page: 1, page_size: 10}).then(function(response) {
    res.send(response.data.data);
  }).catch(function(err){
    console.error(err);
    res.status(err.status);
    res.send(err.detail);
  });
});

app.listen(5000, function () {
  console.log('Blog listening on port 5000!');
})
