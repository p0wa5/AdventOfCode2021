var fs = require('fs');
var inputData = fs.readFileSync('input.txt', 'utf-8').split('\n');

//directions counter
let horizontal = 0;
let depth = 0;
let aim = 0;

let directions = [];

for (i=0; i<inputData.length; i++){
    directions.push(inputData[i]);
}

for (i=0; i<directions.length; i++){
    let units = 0;

    if(directions[i].includes('down')){
        //replace all non digits from String at directions[i] with '' and parse Int.        
        units = parseInt(directions[i].replace(/^\D+/g, ''));
        aim += units;

    }else if(directions[i].includes('up')){
        units = parseInt(directions[i].replace(/^\D+/g, ''));
        aim -= units;

    }else if(directions[i].includes('forward')){
        units = parseInt(directions[i].replace(/^\D+/g, ''));
        horizontal += units;
        depth += aim*units;

    }
}

console.log(horizontal * depth);