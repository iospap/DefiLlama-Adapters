const { staking } = require("../helper/staking");

const config = {
  bsc: {
    windmillContract: "0x0b374F3C618FF06583E7C4a1207bcaF22343737E",
    tokenContract: "0x627E86E9eC832b59018Bf91456599e752288Aa97",
    liquidityContract: "0x1fC3152de89b0c6c36F0d330b7Be369d6dDB219F",
    vaultContract: "0x973Abe726E3e37bbD8501B2D8909Fa59535Babdd",
    busd: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  }
}

module.exports = {
  timetravel: true,
  misrepresentedTokens: false,
  bsc: {
    tvl: () => ({}),
    staking:  staking(config.bsc.windmillContract, config.bsc.tokenContract, "bsc"),
  },
  methodology:
    "Counts tokens on the windmill for tvl",
};
