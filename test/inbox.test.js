const assert = require('assert')
const ganache = require('ganache-cli') // serve as local ethereum test network
const Web3 = require('web3') // always importing/requiring in a constructor function

const provider = ganache.provider();
const web3 = new Web3(provider) // creates an instance of web3 and tells it to connect to this local test network
const { interface, bytecode} = require('../compile')

let accounts;
let inbox;
const INITIAL_STRING = "Hi there"

beforeEach(async () => {
  // Get a list of all accounts
  //Each web3 function is async in nature 
  accounts = await web3.eth.getAccounts();
  // will await for the web3 getAccounts function to run and get the accounts, then assign it to the accounts variable 


  // Use one of those accounts to deploy the contract

 inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({
    data: bytecode,
    arguments: [INITIAL_STRING]
  }).send({
    from: accounts[0],
    gas: '1000000'
  })
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address) // ok method checks to see if this is a valid address
  })
  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_STRING)
  })
  
})



// class Car {
//   park() {
//     return 'stopped'
//   }

//   drive() {
//     return 'vroom'
//   }
// }

// let car;

// beforeEach(() => {
//   car = new Car();
// });

// describe('Car', () => {
//   it('can park', () => {
//     assert.equal(car.park(), 'stopped')
//   });
//   it('can drive', () => {
//     assert.equal(car.drive(), 'vroom')
//   })
// })