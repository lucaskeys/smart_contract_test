pragma solidity ^0.4.25;

contract Inbox {
    string public message;
    
    // this is considered a contructor because it has the same name as the contract
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
    function doMath(int a, int b) public {
        a + b;
        b - a;
        a * b;
        a == 0;
    }
    
}