/**
 * Created by jafarnaqvi on 10/08/16.
 */

var request = require('request-promise');

var callback = function (req, res) {


    res.json({message:'hello'});
};


var redirectSample = function (req, res) {
    res.redirect('http://www.udhaar.appideas.in');


};


Controller = {

    callback: callback,
    redirect: redirectSample

};


module.exports = Controller;