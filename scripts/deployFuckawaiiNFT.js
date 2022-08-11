const hre = require("hardhat");

async function main() {

  const Fuckawaii = await hre.ethers.getContractFactory("Sqoud");
  const fuckawaii = await Fuckawaii.deploy();

  await fuckawaii.deployed();

  console.log("FuckawaiiNFT deployed to:", fuckawaii.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
