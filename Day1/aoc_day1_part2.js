const { time } = require('console');
var fs = require('fs');
const { PassThrough } = require('stream');
var inputData = fs.readFileSync('input.txt', 'utf-8').split('\n');

var depths = [];
var seqSums = [];
var increasedCount = 0;

for(i=0; i<inputData.length; i++){
    depths.push(parseInt(inputData[i]));
}

for(i=0; i<depths.length; i++){

    //sequente of three items
    var firstNumber = depths[i];
    var secondNumber = depths[i+1];
    var thirdNumber = depths[i+2]
    
    //sum of three items
    sumOf3 = firstNumber + secondNumber + thirdNumber;
    
    seqSums.push(sumOf3);
}


for(i=0; i<seqSums.length; i++){
    var currentVal = seqSums[i];
    var nextVal = seqSums[i+1];

    if(currentVal < nextVal){
        increasedCount++;
    }
}





console.log("The depth of the submarine increased " +  increasedCount + " times");

