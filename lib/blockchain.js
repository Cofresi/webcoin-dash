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
},{
  hash: '000000000000267f6c813dfcd52f5e64a7845d8a47a33d33a9bd696c688b8e8e',
  height: 479118,
  version: 3,
  prevHash: u.toHash('0000000000039b52a6a1b8f96e7cf057586c9a85cbba09831bcdf61058286dca'),
  merkleRoot: u.toHash('0266bf1703428864a54dce91efccece6e11803dbd8a4ca6b75618d2bf042ae99'),
  time: 1464754945,
  bits: 0x1b09d5f3,
  nonce: 1468881406
}];

// settings passed to Blockchain objects
// (see https://github.com/mappum/blockchain-spv)
module.exports = {
  genesisHeader: genesisHeader,
  checkpoints: checkpoints
};