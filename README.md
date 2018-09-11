
**STRIPE Webhooks Listener**

 - Heroku express application with Stripe webhook POST listener
 
 - [ ] POST <heroku_app_url>/test-webhook  
 - [ ] GET <heroku_app_url>/ 

![](https://drive.google.com/open?id=1NkB65g44S4pG2FFfW5TVtQb8zajqKZNV)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd stripe-test-webhooks 
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

