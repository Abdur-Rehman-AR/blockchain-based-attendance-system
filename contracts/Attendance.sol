// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Attendance {

    struct Record {
        string internName;
        uint timestamp;
    }

    Record[] public records;

    function markAttendance(
        string memory _name
    ) public {

        records.push(
            Record(
                _name,
                block.timestamp
            )
        );
    }
}