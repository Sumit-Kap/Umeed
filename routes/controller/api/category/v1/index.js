'use strict';

const CategoryController = require('./category_controller');

module.exports = function(app) {
    app.get('/api/umeed/v1/category/user_categories', CategoryController.find());
}