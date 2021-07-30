"use strict";

module.exports = function (app) {
  require("./category")(app);
  require("./languages")(app);
  require("./user_authentication")(app);
  require("./mentor")(app);
};
