//@ sourceMappingURL=merchant_gateway.map
// Generated by CoffeeScript 1.6.1
var Gateway, Merchant, MerchantGateway, OAuthCredentials,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Gateway = require('./gateway').Gateway;

Merchant = require('./merchant').Merchant;

OAuthCredentials = require('./oauth_credentials').OAuthCredentials;

MerchantGateway = (function(_super) {

  __extends(MerchantGateway, _super);

  function MerchantGateway(gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  MerchantGateway.prototype.create = function(attributes, callback) {
    return this.gateway.http.post('/merchants/create_via_api', {
      merchant: attributes
    }, this.responseHandler(callback));
  };

  MerchantGateway.prototype.responseHandler = function(callback) {
    return this.createResponseHandler(null, null, function(err, response) {
      if (!err && response.success) {
        response.merchant = new Merchant(response.response.merchant);
        response.credentials = new OAuthCredentials(response.response.credentials);
        delete response.response;
      }
      return callback(err, response);
    });
  };

  return MerchantGateway;

})(Gateway);

exports.MerchantGateway = MerchantGateway;