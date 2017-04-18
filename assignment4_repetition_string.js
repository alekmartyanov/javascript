http://stackoverflow.com/questions/6844005/how-can-i-find-the-number-of-overlapping-sequences-in-a-string-with-python
http://stackoverflow.com/questions/21778799/count-directly-repeated-substring-occurence
https://github.com/Na3y/homework_python/blob/master/homework/home4.py

function count(self, substr) {
  var count = 0
  var pos = self.indexOf(substr)

  while (pos >= 0) {
    count += 1
    pos = self.indexOf(substr, pos + 1)
  }

  return count
}

function chunkSubstr(str, size) {
  var numChunks = Math.ceil(str.length / size),
      chunks = new Array(numChunks);

  for(var i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
}

self1="abcabcabc"
substr1="abc"

console.log(count(self1, substr1));



function calculate(num) {

    var half = Math.floor(num / 2), // Ensures a whole number <= num.
        str = '1', // 1 will be a part of every solution.
        i, j;

    // Determine our increment value for the loop and starting point.
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        num % i === 0 ? str += ',' + i : false;
    }

    str += ',' + num; // Always include the original number.
    alert(str);
}


Array.prototype.allValuesSame = function() {

    for(var i = 1; i < this.length; i++)
    {
        if(this[i] !== this[0])
            return false;
    }

    return true;
}

function AllTheSame(array) {
    var first = array[0];
    return array.every(function(element) {
        return element === first;
    });
}

function getFactors(integer){
  var factors = [],
  quotient = 0;

  for(var i = 1; i <= integer; i++){
    quotient = integer/i;

    if(quotient === Math.floor(quotient)){
      factors.push(i); 
    }
  }
  return factors;
}



















function AllTheSame(array) {
    var first = array[0];
    return array.every(function(element) {
        return element === first;
    });
}

function chunkSubstr(str, size) {
    var numChunks = Math.ceil(str.length / size),
        chunks = new Array(numChunks);

    for(var i = 0, o = 0; i < numChunks; ++i, o += size) {
        chunks[i] = str.substr(o, size);
    }

    return chunks;
}

function count(arr) {
    len = arr.length
    for(i=0; i<len; i++){
        chunkSubstr(self1, arr[i])
    }

}

function getFactors(integer){
    var factors = [],
        quotient = 0;

    for(var i = 1; i <= integer; i++){
        quotient = integer/i;

        if(quotient === Math.floor(quotient)){
            factors.push(i);
        }
    }
    return factors;
}

/*function calculate(str1, num) {
    var s =str1
    var half = Math.floor(num / 2), // Ensures a whole number <= num.
        str = '1', // 1 will be a part of every solution.
        i, j;

    // Determine our increment value for the loop and starting point.
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        num % i === 0 ? str += ',' + i : false;
        chunkSubstr(s, num)
    }

    str += ',' + num;

    // Always include the original number.
    console.log(str);
} */

function calculate1(string) {
    l = string.length
    getFactors(l)
    }

self1="abcabcabc"

console.log(calculate1(self1))

console.log (AllTheSame(chunkSubstr(self1,3)))
