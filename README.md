
# AttendanceCoin

MVP Sucess rules for next week (August 13th 2018)
- a contract
- deploy on testnet
- distribution? to people who submitted issue or commented in issues on github? active on the slack also gets rewards?

Subjects for later
- how to make it worthwhile to own?
- worthwhile because i can show it to employers?
- worthwhile because i can use it to attend a meetup even if its full??
- what do you do with the coin? trade it for an interview?
- multisignature?
- use voting mechanism to add attibutes

# Attendance Coin is Class Cash
it is a ERC20 Token, Fungible

https://github.com/ConsenSys/Tokens/blob/master/contracts/eip20/EIP20.sol

contract available on rinkeby 0x05e710afeebe27972e45f75aca2d16ec2c698f45

contract source code, see ethereum/contract/attendancecoin-erc20.sol

founders pool, sent 333333333 to 0x8fb092b0c5d80d1f4a1a0ff17d5a638afe24cfce

founders pool, sent 333333333 to 0x22323121a5ba2bf4d429d64b83c0ef943d760103

# Class Badge
it is a ERC721 Token, Collectible

- could help build a leaderboard based on dapps created

https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC721/ERC721Token.sol

# Blog / Steemit

We could implement that. see DelegateCall.com - Fully Blockchain based Q&A. Earn tokens for answering questions.

# DAO / Governance / Voting

- could help build a leaderboard based on dapps created

# Join Trello
- click here to request access https://trello.com/invite/attendancecoin/59709ded0e3b3b30cc6ba057fb568b6a
- https://trello.com/attendancecoin

# Join our Slack
- http://bit.ly/LinniaProtocolSlack
Join #attendance-coin-msg channel

# Must do

- post issues
- share thoughtfull comments
- interact with the contract on https://remix.ethereum.org/

# Testing And Test Configuration 

To run the test scripts, do 

    $> truffle test

In order for this to run, do the following

    1. Install ganache-cli

            $> npm install -g ganache-cli

    2. From a separate start ganache client

            $> ganache-cli

    3. Then from a separate terminal run the truffle test script

            $> truffle test

        NOTE: check trunffle.js configuration pointing to ganache-cli port number                        
        