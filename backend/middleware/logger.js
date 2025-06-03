const morgan = require('morgan');

// Export morgan logger middleware for use in the app
module.exports = morgan('dev');
