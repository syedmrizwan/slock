import Web3 from 'web3';

const contractAddress = "0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef";
const contractTopics = ['0xb556ff269c1b6714f432c36431e2041d28436a73b6c3f19c021827bbdc6bfc29'];
const mainnetURL = 'https://mainnet.infura.io/';

/**
* This function returns latest block number
* @return {Integer}   block number
*/
async function getLatestBlockNumber() {
  const web3 = new Web3(mainnetURL);
  return await web3.eth.getBlockNumber();
}

/**
 * This function returns ENS Contract Event
 * @param {Integer} fromBlockNumber 
 * @param {Integer} toBlockNumber 
 * @return {Object}   Contract Events
 */
async function getENSContractEvents(fromBlockNumber, toBlockNumber) {
  try {
    const web3 = new Web3(mainnetURL);
    let events = await web3.eth.getPastLogs({
      fromBlock: fromBlockNumber,
      toBlock: toBlockNumber,
      address: contractAddress,
      topics: contractTopics,
    });
    return events;
  } catch (err) {
    console.error(err);
  }
}

/**
 * Prints Ens Contract - BID REVELATION event in the last 1000 blocks
 */
export default async function getEventsForPast2Days() {
  let latestBlockNumber = await getLatestBlockNumber();
  let twoDaysOldBlockNumber = latestBlockNumber - 1000; //assuming 500 blocks are mined per day
  let ensContractEvents = await getENSContractEvents(twoDaysOldBlockNumber, latestBlockNumber);
  return ensContractEvents;
}

export { getLatestBlockNumber, getENSContractEvents };