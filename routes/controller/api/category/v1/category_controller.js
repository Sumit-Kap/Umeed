'use strict';

let CategoryController = {
find:function(req,res,next){
        console.log('printing req',req);
        req.response = {};
        next();
    }
}

module.exports = CategoryController;