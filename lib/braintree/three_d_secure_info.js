//@ sourceMappingURL=three_d_secure_info.map
// Generated by CoffeeScript 1.6.1
var AttributeSetter, ThreeDSecureInfo,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

AttributeSetter = require('./attribute_setter').AttributeSetter;

ThreeDSecureInfo = (function(_super) {

  __extends(ThreeDSecureInfo, _super);

  function ThreeDSecureInfo(attributes) {
    ThreeDSecureInfo.__super__.constructor.call(this, attributes);
  }

  return ThreeDSecureInfo;

})(AttributeSetter);

exports.ThreeDSecureInfo = ThreeDSecureInfo;