function rpn( input ) {
  var ar = input.split( /\s+/ ), st = [], token;
  while( token = ar.shift() ) { 
    if ( token == +token ) {
      st.push( token );
    } else {
      var n2 = st.pop(), n1 = st.pop();
      var re = /^[\+\-\/\*]$/;
      if( n1 != +n1 || n2 != +n2 || !re.test( token ) ) {
        throw new Error( 'Invalid expression: ' + input );
      }
      st.push( eval( n1 + token + ' ' + n2 ) );
    }
  }
  if( st.length !== 1 ) {
    throw new Error( 'Invalid expression: ' + input );
  }
  return st.pop();
}

console.log(rpn("234 345 456 + + 5 /"))
