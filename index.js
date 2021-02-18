import Util from './src/util.js';

let output = new Util();
// Read the input file
let readData = output.readInputFile('./input/input1.txt')
// Transform it to appropriate format
if(readData){
    let obj1 = output.transformData(readData);
    let roverSteps = obj1.arr;
    let final = ''
    for(let i=0 ; i< roverSteps.length; i++){
        let temp = output.findFinalPosition(roverSteps[i])
        final +=  `${temp.coordinate.x} ${temp.coordinate.y} ${temp.direction} \n`
    }
    console.log(final)
}else{
    console.log('Empty input')
}