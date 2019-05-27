require('dotenv').config({ path: 'variables.env' });

module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/graphql-test',
  SECRET_KEY: process.env.SECRET_KEY || 'pvpnCCZfwOF85pBjbOebZiYIDhZ3w9LZrKwBZ7152K89mPCOHtbRlmr5Z91ci4L',
  PORT: process.env.PORT || '4000'
};
