// test/mycontract.js
const MyContract = artifacts.require("MyContract");

contract("MyContract", accounts => {
    it("should initialize with the correct message", async () => {
        const instance = await MyContract.deployed();
        const message = await instance.message();
        assert.equal(message, "Hello, Truffle!", "Initial message is incorrect");
    });

    it("should update the message", async () => {
        const instance = await MyContract.deployed();
        await instance.updateMessage("Hello, Test!");
        const message = await instance.message();
        assert.equal(message, "Hello, Test!", "Message update failed");
    });
});
