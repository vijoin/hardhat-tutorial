const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Token contract", function () {

    let Token;
    let hardhatToken;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    this.beforeEach(async function () {
        Token = await ethers.getContractFactory("Token");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        hardhatToken = await Token.deploy()
    });

    describe("Deployment", function () {
        it("Deployment should assign the total supply of tokens to the owner", async function () {
            const ownerBalance = await hardhatToken.balanceOf(owner.address);
            expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
        });
    });

    describe("Transactions", function () {
        it("Should transfer tokens between accounts", async function () {

            //Transfer 50 tokens from owner to addr1
            await hardhatToken.transfer(addr1.address, 50);
            expect(await hardhatToken.balanceOf(addr1.address)).to  .equal(50);

            //Transfer 50 tokens from addr1 to addr2
            await hardhatToken.connect(addr1).transfer(addr2.address, 50);
            expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);

            //Remaining balance
            expect(await hardhatToken.balanceOf(owner.address)).to.equal(999950);
            expect(await hardhatToken.balanceOf(addr1.address)).to.equal(0);
        });
    });
});
