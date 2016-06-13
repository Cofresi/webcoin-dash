module.exports = {
  messagePrefix: '\x18Dash Signed Message:\n',
  bip32: {
    public: 0x02fe52f8,
    private: 0x02fe52cc
  },
  pubKeyHash: 0x4c,
  scriptHash: 0x10,
  wif: 0x80,
  dustThreshold: 546 // https://github.com/bitcoin/bitcoin/blob/v0.9.2/src/core.h#L151-L162
}
