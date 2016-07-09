'use strict';

// blockchain definition

var u = require('bitcoin-util');

// definition of the genesis block's header
var genesisHeader = {
  hash: '00000ffd590b1485b3caadc19b22e6379c733355108f107a430458cdf3407ab6',
  height: 0,
  version: 1,
  prevHash: u.nullHash,
  merkleRoot: u.toHash('e0028eb9648db56b1ac77cf090b99048a8007e2bb64b68f092c03c7f56a662c7'),
  time: 1390095618,
  bits: 0x1e0ffff0,
  nonce: 28917698
};

// selected block headers for verifying initial sync
var checkpoints = [{
  hash: '000000000003c6a87e73623b9d70af7cd908ae22fee466063e4ffc20be1d2dbc',
  height: 407452,
  version: 3,
  prevHash: u.toHash('0000000000010eedb86810ef7ce941fabc7d2be0c0fa2bf8dfcb5b48f573d15b'),
  merkleRoot: u.toHash('d0761697a9ec536c444591e0ff4dbcba8c78df0263444a5229db58e600e1359d'),
  time: 1453463939,
  bits: 0x1b0f1aee,
  nonce: 872384581
}, {
  hash: '0000000000083dbb96b0eb7d3ec9f2c43e015817332c757f8b5a794abf2fdffb',
  height: 477481,
  version: 3,
  prevHash: u.toHash('000000000005d5e5f78b93460b399ce8c51d145e6bf5836bd20a00dd24faa6b5'),
  merkleRoot: u.toHash('a463b2e6fa269c3ff346f82619d415acba5f3e671e6418c88b25eadde397df14'),
  time: 1464498277,
  bits: 0x1b0bd54b,
  nonce: 105906588
}];

// settings passed to Blockchain objects
// (see https://github.com/mappum/blockchain-spv)
module.exports = {
  genesisHeader: genesisHeader,
  checkpoints: checkpoints
};