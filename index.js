const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');
// Retrieve the raw body as a buffer and match all content types:
app.use(require('body-parser').raw({type: '*/*'}));

var data = [];

app.post('/test-webhook', function(request, response) {
  // Retrieve the request's body and parse it as JSON:
  var payload = JSON.parse(request.body);
  data.unshift({
    "time": new Date(),
    "payload": payload,
    "type": payload.type
  });
  // Do something with event_json
  response.send(200)
});

app.get('/reset', function(request, response) {
  data.splice(0);
  response.redirect('/');
});

app.get('/', (req, res) => {
	res.render('pages/index', {'data':data})
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
