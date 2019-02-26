import assert from 'assert';
import { getENSContractEvents, getLatestBlockNumber } from './api';

it('correctly return ens contract bid revelation event', async () => {
  assert.equal(JSON.stringify(await getENSContractEvents(7268687, 7268689)), '[{"address":"0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef","blockHash":"0x9fabf0e7ac0f7b418a0f10c743bfcc0369790e3e2bc2ac630b5256a29d680c8f","blockNumber":7268689,"data":"0x00000000000000000000000000000000000000000000000000b1a2bc2ec50000","logIndex":18,"removed":false,"topics":["0xb556ff269c1b6714f432c36431e2041d28436a73b6c3f19c021827bbdc6bfc29","0x3a551f57c522e72c15fb727cfe7af6db55f16377641d56dcc9328790d31948c7","0x000000000000000000000000a94f52c3b85eeb33afafeb37a011f56d54361b37"],"transactionHash":"0xaed2b52c9cfb395e6fc36fe47eb21db33f4eae624a46f018cd530829d0c21291","transactionIndex":42,"id":"log_0x8f7aba0d0b63917af0b56062e81e675ee4a6c3263e93f4afe20a4cff96ebf6e3"}]');
});

it('correctly return latest block number', async () => {
  assert.notEqual(7269449, await getLatestBlockNumber());
});