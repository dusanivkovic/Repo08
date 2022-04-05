//only change code below this line
var sum = 0;
function addThree(){
    sum += 3;
    console.log(sum);
}
function addFive(){
    sum += 5;
    console.log(sum);
}
addThree();
addFive();
//only change code abowe this line

module.exportS = {addThree,
addFive};