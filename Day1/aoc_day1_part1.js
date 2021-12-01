var fs = require('fs');
const { PassThrough } = require('stream');
var inputData = fs.readFileSync('input.txt', 'utf-8').split('\n');

var depths = [];
var increasedCount = 0;

for(i=0; i<inputData.length; i++){
    depths.push(parseInt(inputData[i]));
}

for(i=0; i<depths.length; i++){
    var currentVal = depths[i];
    var nextVal = depths[i+1];

    if(currentVal < nextVal){
        increasedCount++;
    }
}

console.log("The depth of the submarine increased " +  increasedCount + " times");


