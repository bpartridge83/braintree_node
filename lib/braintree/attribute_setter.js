//@ sourceMappingURL=attribute_setter.map
// Generated by CoffeeScript 1.6.1
var AttributeSetter;

AttributeSetter = (function() {

  function AttributeSetter(attributes) {
    var key, value;
    for (key in attributes) {
      value = attributes[key];
      this[key] = value;
    }
  }

  return AttributeSetter;

})();

exports.AttributeSetter = AttributeSetter;