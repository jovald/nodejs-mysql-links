const timeago = require('timeago.js');
// const timeagoInstance = timeago();

const helpers = {};

helpers.timeago = (savedTimestamp) => {
    return timeago.format(savedTimestamp);
};

module.exports = helpers;