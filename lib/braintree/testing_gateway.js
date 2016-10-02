//@ sourceMappingURL=testing_gateway.map
// Generated by CoffeeScript 1.6.1
var Environment, ErrorResponse, Gateway, TestOperationPerformedInProductionError, TestingGateway, exceptions,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Gateway = require('./gateway').Gateway;

ErrorResponse = require('./error_response').ErrorResponse;

Environment = require('./environment').Environment;

TestOperationPerformedInProductionError = require('./exceptions').TestOperationPerformedInProductionError;

exceptions = require('./exceptions');

TestingGateway = (function(_super) {

  __extends(TestingGateway, _super);

  function TestingGateway(gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  TestingGateway.prototype.settle = function(transactionId, callback) {
    return this.settlementOperationWithEnvironmentCheck(transactionId, "settle", callback);
  };

  TestingGateway.prototype.settlementPending = function(transactionId, callback) {
    return this.settlementOperationWithEnvironmentCheck(transactionId, "settlement_pending", callback);
  };

  TestingGateway.prototype.settlementConfirm = function(transactionId, callback) {
    return this.settlementOperationWithEnvironmentCheck(transactionId, "settlement_confirm", callback);
  };

  TestingGateway.prototype.settlementDecline = function(transactionId, callback) {
    return this.settlementOperationWithEnvironmentCheck(transactionId, "settlement_decline", callback);
  };

  TestingGateway.prototype.settlementOperationWithEnvironmentCheck = function(transactionId, operation, callback) {
    if (this.config.environment === Environment.Production) {
      return callback(TestOperationPerformedInProductionError("Test operation performed in production"), null);
    } else {
      return this.gateway.http.put("" + (this.config.baseMerchantPath()) + "/transactions/" + transactionId + "/" + operation, null, callback);
    }
  };

  return TestingGateway;

})(Gateway);

exports.TestingGateway = TestingGateway;