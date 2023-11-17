import {Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "OI1Xyz-FzUIjdkFTU3whtlv-fltwKoTN",
    network: Network.MATIC_MUMBAI,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);