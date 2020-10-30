'use strict';

module.exports = function(app) {
    require('./category')(app);
    require('./languages')(app);
}