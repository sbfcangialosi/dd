/**
 * OrderController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('A0FFxkmu5O8btl-vw4zlfA');

module.exports = {

  'start' : function(req, res) {
    if(req.session.authenticated) {
      res.redirect('/catering/order/delivery');
    } else {
      res.view('session/new');
    }
  },

  // list a user's saved delivery options
  // and prompt for date/time for current order
  'selectDelivery' : function(req,res) {
    // TODO what if User.savedDelivery doesnt exist?
    res.view('catering/delivery/select');
  },

  'newDelivery' : function(req,res) {
    res.view('catering/delivery/add');
  },

  'selectPayment' : function(req, res) {
    res.view('catering/payment/select');
  },

  'continue' : function(req, res) {
    req.session.paymentMethod = req.param('method');
    if(req.param('method') == 'card') {
      res.view('catering/payment/card');
    } else {
      res.redirect('catering/order/review');
    }
  },

  'newCard' : function(req,res) {
    res.view('catering/payment/add');
  },

  'review' : function(req,res) {
    res.view('catering/confirm/review');
  },

  'submit' : function(req,res) {
    var parsed = JSON.stringify(req.session) + JSON.stringify(req.params.all());
    var message_to_dd = {
      "text" : parsed,
      "subject": "ORDER REQUEST FROM " + req.session.User.companyName,
      "from_email": "orders@davidanddads.com",
      "from_name": "Order Manager",
      "to": [{
              "email": "fcangialosi94@gmail.com",
              "name": "David and Dad's",
              "type": "to"
          }]
    };
    mandrill_client.messages.send({"message": message_to_dd, "async": false}, function(result) {
      console.log(result);
    }, function(e) {
      console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    });
    res.view('catering/confirm/success');
  }

};
