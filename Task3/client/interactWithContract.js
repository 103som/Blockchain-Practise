const Web3 = require('web3');
const contractABI = require('./abiContract.json');
const contractAddress = '0xC8be3436aA3C347c1a7bec3A108C25B190d49079';

const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/OI1Xyz-FzUIjdkFTU3whtlv-fltwKoTN');

const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

// Функция для вызова функций смарт-контракта
async function callContractFunction() {
    try {
        // Вызов функции addClient
        const addClientResult = await contractInstance.methods.addClient(100, 'John Doe', true).send({
            from: '0x4eA9aA8CD7Db816d6e7177F5A0DeAf143A27E814',
            gas: 2000000,
        });
        console.log('addClient transaction result:', addClientResult);

        // Вызов функции removeClient
        const removeClientResult = await contractInstance.methods.removeClient().send({
            from: '0x4eA9aA8CD7Db816d6e7177F5A0DeAf143A27E814',
            gas: 2000000,
        });
        console.log('removeClient transaction result:', removeClientResult);
    } catch (error) {
        console.error('Error calling contract functions:', error);
    }
}

async function getAllEvents() {
    try {
        // Получите все события без фильтрации
        const allEvents = await contractInstance.getPastEvents('allEvents', {
            fromBlock: 0,
            toBlock: 'latest',
        });
        console.log('All events:', allEvents);
    } catch (error) {
        console.error('Error getting all events:', error);
    }
}

// Функция для просмотра слотов storage контракта
async function viewStorageSlots() {
    try {
        // Получите данные из слотов storage
        const storageData = await contractInstance.methods.storageMapping('0x4eA9aA8CD7Db816d6e7177F5A0DeAf143A27E814').call();
        console.log('Storage data:', storageData);
    } catch (error) {
        console.error('Error viewing storage slots:', error);
    }
}

// Вызов функций
callContractFunction();
getAllEvents();
viewStorageSlots();
