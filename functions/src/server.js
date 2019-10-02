const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, from Netlify Lambda Function');
});

app.use('/.netlify/functions/server', router);

// Export lambda handler
const handler = serverless(app);
exports.handler = async (event, context) => {
  // you can do other things here
  const result = await handler(event, context);
  // and here
  return result;
};
