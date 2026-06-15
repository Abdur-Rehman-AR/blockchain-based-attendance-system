// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CertificateNFT {

    struct Certificate {
        string internName;
        string achievement;
        uint256 issueDate;
    }

    uint256 public certificateCount;

    mapping(uint256 => Certificate) public certificates;

    function issueCertificate(
        string memory _internName,
        string memory _achievement
    ) public {

        certificateCount++;

        certificates[certificateCount] = Certificate(
            _internName,
            _achievement,
            block.timestamp
        );
    }

    function verifyCertificate(uint256 _id)
        public
        view
        returns (
            string memory,
            string memory,
            uint256
        )
    {
        Certificate memory cert = certificates[_id];

        return (
            cert.internName,
            cert.achievement,
            cert.issueDate
        );
    }
}