function fun1(par){
    try{console.log(parseInt( par, 2 )) }
    catch (err) {return undefined}
};
let abc="abc"
fun1(abc);

fun1('1011010')
