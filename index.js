const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');
// Retrieve the raw body as a buffer and match all content types:
app.use(require('body-parser').raw({type: '*/*'}));

var payload  = JSON.parse("{}")

app.post('/test-webhook', function(request, response) {
  // Retrieve the request's body and parse it as JSON:
 payload = JSON.parse(request.body)
  console.log("RECEVIED NEW EVENT: " + payload)
  // Do something with event_json
  response.send(200)
});

app.get('/', (req, res) => {
	res.render('pages/index', {'data':JSON.stringify(payload)})
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
