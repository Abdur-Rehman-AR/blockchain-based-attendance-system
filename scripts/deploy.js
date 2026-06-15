async function main() {

  const CertificateNFT =
      await ethers.getContractFactory("CertificateNFT");

  const certificate =
      await CertificateNFT.deploy();

  await certificate.waitForDeployment();

  console.log(
    "Contract deployed to:",
    await certificate.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});