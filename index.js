const ContractKit = require('@celo/contractkit');
const kit = ContractKit.newKit('https://alfajores-forno.celo-testnet.org')


// create wallet
const createWallet = async() => {
    try{
    const wallet = await kit.web3.eth.accounts.create();
    console.log(wallet);
    return wallet;
} catch (error) {
    console.log(error);
}
}

createWallet();