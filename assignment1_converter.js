function fun1(par){
    try{return (parseInt( par, 2 )) }
    catch (err) {return undefined}
};
var abc="abc"
console.log(fun1(abc));

console.log(fun1('1011010'))
