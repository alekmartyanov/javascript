'use strict';

const LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('./input/dataSet2.csv');
    var row =0
const data = [];
    var l = []
var len=[]
lr.on('error', function (err) {
    // 'err' contains error object
    throw err
});

lr.on('line', function (line) {
        //var array = line.split(';');
    console.log(++row + ": " + line);
    // pause emitting of lines...
    lr.pause();

    // ...do your asynchronous line processing..
    setTimeout(function () {
        /*l=line.split(";")
        var p =l
        if (l.length==19) data.push(l)
        else ((l.push(p))&&(lr.resume()))
        console.log(data) */


        l.push(line.split(";"))
        console.log(l)//создаем локальную переменную и загружаем туда текущую строку, разбив её на части
        console.log( ((l[row-1].length)%19)==0  ) //проверяем строку на полноту
        console.log(l[row-1][6])
        if (  ((l[row-1].length)%19)==0  ) data.push() //если полная, загружаем в data
        //else ((l.[row-1]).push(line.split(";")))
            lr.resume()



        //console.log(data[row-1])
        //else (lr.resume()&&(console.log(data)))



        // ...and continue emitting lines.
        //data.push(line);
        //lr.resume();
    }, 100);
});

lr.on('end', function () {
    // All lines are read, file is closed now.
    console.log(data)
    main();
});

function main () {

}
