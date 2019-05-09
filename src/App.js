import React, { Component } from "react";
import { Table } from "antd";
import getEventsForPast2Days from "./api";

// Initializing Columns for Data Table
const columns = [
  {
    title: "Index",
    dataIndex: "index",
    key: "index",
    fixed: "left"
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Data",
    dataIndex: "data",
    key: "data"
  },
  {
    title: "BlockNumber",
    dataIndex: "blockNumber",
    key: "blockNumber"
  },
  {
    title: "BlockHash",
    dataIndex: "blockHash",
    key: "blockHash"
  },
  {
    title: "LogIndex",
    dataIndex: "logIndex",
    key: "logIndex"
  },
  {
    title: "Topics",
    dataIndex: "topics",
    key: "topics"
  },
  {
    title: "TransactionHash",
    dataIndex: "transactionHash",
    key: "transactionHash"
  },
  {
    title: "TransactionIndex",
    dataIndex: "transactionIndex",
    key: "transactionIndex"
  }
];
class App extends Component {
  state = {
    ensContractEvents: []
  };
  async componentDidMount() {
    const data = await getEventsForPast2Days();
    this.setState({
      ensContractEvents: data.map((contract, index) => {
        // Setting up data to match the data columns accordingly
        const topics = contract.topics.map((topic, topicIndex) => (
          <div key={topic}>
            <span>[topic{topicIndex}]</span>
            {topic}
          </div>
        ));
        return {
          ...contract,
          topics,
          index,
          key: contract.id
        };
      })
    });
  }
  render() {
    return (
      <div className="App">
        <Table
          dataSource={this.state.ensContractEvents}
          columns={columns}
          scroll={{ x: "100%", y: 0 }}
        />
      </div>
    );
  }
}

export default App;
