/* exported randomState */
'use strict';

function randomState() {
    //get a random integer between 0 - stateList.length
    var index = Math.floor(Math.random() * stateList.length);
    return index;
    //use random integer to select from stateList
    //return that state
}