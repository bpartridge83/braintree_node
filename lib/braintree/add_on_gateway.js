//@ sourceMappingURL=add_on_gateway.map
// Generated by CoffeeScript 1.6.1
var AddOn, AddOnGateway, Gateway,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

AddOn = require('./add_on').AddOn;

Gateway = require('./gateway').Gateway;

AddOnGateway = (function(_super) {

  __extends(AddOnGateway, _super);

  function AddOnGateway(gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  AddOnGateway.prototype.all = function(callback) {
    return this.gateway.http.get("" + (this.config.baseMerchantPath()) + "/add_ons", this.createResponseHandler("add_on", AddOn, callback));
  };

  return AddOnGateway;

})(Gateway);

exports.AddOnGateway = AddOnGateway;