import assert from "assert";
import { getENSContractEvents, getLatestBlockNumber } from "./api";

it("correctly return ens contract bid revelation event", async () => {
  assert.equal(
    JSON.stringify(await getENSContractEvents(7722798, 7722800)),
    '[{"address":"0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef","blockHash":"0x7d1058ac03e8ffc024faa3b23296ae898ee158d6ff748277fe5fe087ee8224f1","blockNumber":7722799,"data":"0x000000000000000000000000000000000000000000000000002386f26fc100000000000000000000000000000000000000000000000000000000000000000002","logIndex":7,"removed":false,"topics":["0x7b6c4b278d165a6b33958f8ea5dfb00c8c9d4d0acf1985bef5d10786898bc3e7","0x1eaf1a0d7ce3b6986506b694e3278b132c1caedc847d9b3d76a534c4f9c294ec","0x000000000000000000000000db995f65464a54f0b1cdec5ae7dcdec34453d8da"],"transactionHash":"0x3dd2659797c5b3612579f92e837d78a061d7d307a071f33c584ea33703055c2e","transactionIndex":38,"id":"log_0xba1cf568da5264c9c8c739d48c401a4b5ecd3af355dbd79c49822594b382b03a"}]'
  );
});

it("correctly return latest block number", async () => {
  assert.notEqual(7269449, await getLatestBlockNumber());
});
