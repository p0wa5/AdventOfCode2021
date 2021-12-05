var fs = require('fs');
var exampleArr = fs.readFileSync('input.txt', 'utf-8').split('\n');

// place zeros and ones from the strings inside here
let zeros = Array(exampleArr[0].length).fill(0) // -> Creates an arr with a length of the elements and fills it with 0
let ones = Array(exampleArr[0].length).fill(0)

let counter = 0;
let mostBinaryString = "";
let leastBinaryString = "";

//iterate through the arr and count each Bit
function getBitSum(){
    for(let i=0; i<exampleArr.length; i++){
        if(exampleArr[i][counter] == "0"){
            zeros[counter]++
        } else if (exampleArr[i][counter] == "1"){
            ones[counter]++
        }
    }
    counter++
}

for(let i = 0; i<exampleArr.length; i++){
    getBitSum();
}

function getMostCommon(){
    for(let i = 0; i<ones.length; i++){
        if (ones[i] > zeros[i]){
            mostBinaryString += "1";
        } else if (ones[i] < zeros[i]){
            mostBinaryString += "0";
        } else if (ones[i] == zeros[i]){
            mostBinaryString += "1";
        }
    } return parseInt(mostBinaryString,2);
    
}

//invert mostBinaryString to get leastBinaryString
function getLeastCommon(){
    for(let i = 0; i<mostBinaryString.length; i++){
        if(mostBinaryString[i] == 0){
            leastBinaryString += 1;
        } else if (mostBinaryString[i] == 1){
            leastBinaryString += 0;
        }
    } return parseInt(leastBinaryString,2);
}

console.log(getMostCommon() * getLeastCommon())








