exports.handler = function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Hello, from Netlify Lambda Function',
  });
};
