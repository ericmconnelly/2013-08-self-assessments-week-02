// MM/DD/YYYY format

var shouldMatch = [
  '5/12/1991',  // true
  '03/09/1989', // true
  '11/11/2011', // true
  '8/30/2000',  // true
  '88/30/2000', // false
  '13/37/3001', // false
  '100/1/200',  // false
  '1/32/2012'   // false
];

var dateMatcher = /* FIX ME */;

for (var i = 0; i < shouldMatch.length; i++) {
  console.log("Index ", i ,'was a match?', dateMatcher.test(shouldMatch[i]));
}
