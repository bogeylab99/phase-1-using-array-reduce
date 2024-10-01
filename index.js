const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(calculate);
console.log(totalBatteries);

function calculate(first, second){
    return first + second;
}