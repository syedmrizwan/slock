import Web3 from "web3";

const contractAddress = "0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef";
const contractTopics = [
  "0x7b6c4b278d165a6b33958f8ea5dfb00c8c9d4d0acf1985bef5d10786898bc3e7"
];
const mainnetURL = "https://mainnet.infura.io/";

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
      topics: contractTopics
    });
    return events;
  } catch (err) {
    console.error(err);
  }
}

/**
 * Prints Ens Contract - BID REVELATION event in the last 3000 blocks
 */
export default async function getEventsForPast2Days() {
  let latestBlockNumber = await getLatestBlockNumber();
  let twoDaysOldBlockNumber = latestBlockNumber - 10000;
  let ensContractEvents = await getENSContractEvents(
    twoDaysOldBlockNumber,
    latestBlockNumber
  );
  console.log(ensContractEvents);
  return ensContractEvents;
}

export { getLatestBlockNumber, getENSContractEvents };
