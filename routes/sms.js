var express = require('express');
var router = express.Router();

// Test Credentials
const accountSid = 'AC373e608ff90dc83057e42e5751618d4f';
const authToken = '6fbfbd63b2b8fedb84f76fddc0ab3ca0';

// Live Credentials
// const accountSid = 'AC19866ec9fb99bbfc1f5e01b18746bdde';
// const authToken = '14bcedb9110c0224a9fb701a458f4604';

const client = require('twilio')(accountSid, authToken);
/* POST sms */
router.post('/send', function (req, res, next) {
  // res.send('respond with a resource');

  console.log('sending sms', req.body);
  client.messages
    // .create({ body: 'Hi there!', from: '+919845053997', to: '+919830816297' })
    // .create({ body: 'Hi there!', from: '+15005550006', to: '+919830816297' })
    .create({ body: req.body.message, from: '+15005550006', to: req.body.phone })
    .then(message => {
      console.log(message.sid)
      res.send(message.sid)
    })
    .catch(e => console.log(e));
});

module.exports = router;
