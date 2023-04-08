console.log("This is the 7th tutorial of js");

let myname="shrey";
let myname1="rahul";
let myname2="shikha";
console.log( myname+" is a good boy");
console.log( myname1+" is a good boy");
console.log( myname2+" is a good girl");

//To avoid this repetition we can use the funcitons
//It helps in code reusability
function greet(name){
    let name1="This is in local scope of function";
    console.log(name+" is a good boy");
}

greet(myname);
greet(myname1);
greet(myname2);
//calling the function
//default value/argument can also be given to function but until we have passed some value to it ,it will not come into action



//Function with some return value
function sum(x,y){
    let sm=x+y;
    return sm;
}
console.log(sum(3,4));
//we can return anything string/number /object/boolean