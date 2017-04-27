str="Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas finibus lorem non tempor tincidunt aera"

var wordCounts = { };
var words = str.split(/\b/);

function removeWhiteSpaceFromArray(array){
    return array.filter((item) => item != ' ');
}

words=removeWhiteSpaceFromArray(words)

for(var i = 0; i < words.length; i++)
    wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;


var sortable=[]
for(var key in wordCounts){
    sortable.push([key,wordCounts[key]])
}
sortable.sort(function(a, b) {
    return b[1] - a[1];
});

if(sortable[0][1]==sortable[1][1]) console.log("---");
else console.log(sortable[0][0])
