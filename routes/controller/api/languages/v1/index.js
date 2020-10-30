'use strict';

const LanguagesController = require('./languages_controller');

module.exports = function(app) {
    app.get('/api/umeed/v1/languages/get_languages',LanguagesController.getLanguages);
}