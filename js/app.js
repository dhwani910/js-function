
//function 1
function integer(one, two){
    return (one + two)  * 5;

}

console.log(integer(3, 5));
console.log(integer(7, 4));
console.log(integer(6, 9));






//function 2
function maximum(string){
    if(string.length > 10){
        return true;
    }
    else{
        return false;
    }
}
console.log(maximum("chocolate"));
console.log(maximum("employability"));
console.log(maximum("family"));






//function 3
function array(string){
    var output = "";

   
    for(var i = 0; i < string.length; i++){
        var word = string[i];
        if(word.startsWith("ph")){
            output = word;
       
        }
   

    
    }
    return output;
 
    
}
console.log(array(["phase", "candy", "happy"]));
console.log(array(["laugh", "cake", "phole"]));
console.log(array(["bone", "phussy", "keep"]));

