//only change code below this line
var myGlobalVariable = 10;
function function1(){
    myLocalVariable = 5;
}
//only change code abowe this line
function function2(){
    var result = "";
    if (typeof myGlobalVariable != "undefined"){
        result += "myGlobalVariable: " + myLocalVariable;
    }else{
        result = "myLocalVariable: " + myLocalVariable;
    }
    console.log(result);
}
function1();
function2();
module.exportS = {function1,
function2};