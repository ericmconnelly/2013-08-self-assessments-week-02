/*
 * Complexity:
 */

var retrieve = function (key, array){
  var hash = 0;
  for (var i = 0; i < key.length; i++){
    var letter = key [i];
    // (note: this is a standard, uninteresting hashing algorithm)
    hash = hash + Math.pow (hash, letter) % array.length;
  }
  return array [hash];
};

/*
 * Complexity:
 */

var sortedArrayContainsItem = function (array, item){
  var center = Math.floor (array.length / 2);
  if (array [center] === item){
    return true;
  }
  var halfOfArray = item < array [center] ? array.slice (0, center) : array.slice (center);
  return sortedArrayContainsItem (halfOfArray, item);
};
