# rendezvous-hash

  an implementation of Rendezvous hashing (highest random weight) 

## Installation

    npm install rendezvous-hash

## Implementation

  The shard weight is determined by `Truncate-32(MD5(shardId + '\0' + key ))`, interpreted as a 32-bit little-endian integer.
  In a future (incompatible) release, this might be replaced by a simpler, faster hash.

## API
### select(key: String | Buffer, shards: { shardId: Shard } ) -> Shard

  Selects a shard from the `shards` object based on the key and returns it.

