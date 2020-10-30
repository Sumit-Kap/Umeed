'use strict';

const config = require('../../../../../config/app_config')

let LanguagesController = {
    getLanguages:function(req,res,next){
        res.send(config.languages);
        next();
    }
}

module.exports = LanguagesController;