var fs = require('fs');
var inputData = fs.readFileSync('input.txt', 'utf-8').split('\n');

//directions counter
let down = 0;
let up = 0;
let forward = 0;

let directions = [];

for (i=0; i<inputData.length; i++){
    directions.push(inputData[i]);
}

for (i=0; i<directions.length; i++){

    if(directions[i].includes('down')){
        //replace all non digits from String at directions[i] with '' and parse Int.
        down += parseInt(directions[i].replace(/^\D+/g, ''));

    }else if(directions[i].includes('up')){
        up += parseInt(directions[i].replace(/^\D+/g, ''));

    }else if(directions[i].includes('forward')){
        forward += parseInt(directions[i].replace(/^\D+/g, ''));
    }
}

console.log((down - up) * forward);