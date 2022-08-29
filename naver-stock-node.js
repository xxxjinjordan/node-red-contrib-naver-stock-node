module.exports = function (RED) {
  const axios = require("axios");
  const api = require("./api");

  function GetStockInfo(config) {
    RED.nodes.createNode(this, config);
    let node = this;
    node.on("input", async function (msg) {
      let code = msg.payload;
      const addr = api + code;
      msg.payload = await ApiCall(addr);
      node.send(msg);
    });
  }

  const ApiCall = async (addr) => {
    try {
      const response = await axios.get(addr);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  RED.nodes.registerType("naver-stock-node", GetStockInfo);
};
