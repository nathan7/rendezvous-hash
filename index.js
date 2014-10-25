'use strict';
module.exports = select
var crypto = require('crypto')
  , separator = new Buffer('\0')

function rank(shardId, key) {
  return crypto
    .createHash('md5')
    .update(shardId)
    .update(separator)
    .update(key)
    .digest()
    .readUInt32LE(0, true)
}


function select(key, obj) {
  var target
    , targetRank = 0

  for (var shardId in obj) if ({}.hasOwnProperty.call(obj, shardId)) {
    var shardRank = rank(shardId, key)
    if (shardRank > targetRank) {
      target = shardId
      targetRank = shardRank
    }
  }

  return target
}
