    //only change code below this line
    function localScope(){
        var myVariable = "Iam here!";
        if (typeof myVariable != "undefined"){
            console.log('outside localScope', myVariable)
        }else{
            console.log('outside localScope UNDEFINED!!!');
        }
    }
    localScope();
        //only change code abowe this line
    module.exportS = localScope;