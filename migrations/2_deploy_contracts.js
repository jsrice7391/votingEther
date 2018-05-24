// Sets the name of the Contract
var Voting = artifacts.require("./Voting.sol");
module.exports = function (deployer) {
  // Deplyos that contract with the constructor arguments and theb gas price.
  deployer.deploy(Voting, ['Rama', 'Nick', 'Jose'], {
    gas: 500000
  });
};


