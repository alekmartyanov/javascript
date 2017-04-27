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
function chunkSubstr(str, size) {
    var numChunks = Math.ceil(str.length / size),
        chunks = new Array(numChunks);

    for(var i = 0, o = 0; i < numChunks; ++i, o += size) {
        chunks[i] = str.substr(o, size);
    }

    return chunks;
}

function countStringRepetition(str) {
    v = getFactors(str.length)
    len = (getFactors(str.length)).length
    for (i = 0; i < len; i++) {
        if (AllTheSame(chunkSubstr(str, v[i]))) return ((chunkSubstr(str, v[i])).length)
        if (AllTheSame(chunkSubstr(str, v[i]))) break
    }
}

str="abcabcabcabc"

console.log(countStringRepetition(str))
