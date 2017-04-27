function brackets(string) {
  var bracketstypes = "[]{}()",
    stack = [],
    i, character, bracePosition;

  for(i = 0; character = string[i]; i++) {
    bracePosition = bracketstypes.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); 
    } else {
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

str = "{[]({})}"
console.log(brackets(str))
