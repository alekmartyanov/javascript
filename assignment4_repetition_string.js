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

self1="abcabcabc"
substr1="abc"

console.log(count(self1, substr1));
