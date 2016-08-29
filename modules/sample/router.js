/**
 * Created by jafarnaqvi on 08/08/16.
 */
var express = require("express");

var router = express.Router();

var Controller=require('./controller');

router.route('^/callback/$').get( Controller.callback);
//router.route('^/redirecttest/$').get(Controller.redirect);

module.exports = router;