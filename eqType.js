const eqType = function(item1, item2) {
  if (typeof(item1) !== typeof(item2) || Array.isArray(item1) !== Array.isArray(item2)) {
    return false;
  }
  if (Array.isArray(item1)) {
    return 'array';
  }
  return typeof(item1);
};

module.exports = eqType;