var findDuplicateCharacters = function(string) {
  var letterTalley = {};
  var duplicateArray = []
  var character = "";
  for (var i = 0; i < string.length ; i++) {
    character = string.charAt(i).toLowerCase();
    if (character.toUpperCase() !== character) {
      if (letterTalley[character] === undefined) {
        letterTalley[character] = 1;
      } else {
        letterTalley[character] += 1;
      }
    }
  }
  _.each(letterTalley, function(value, key){
    if (value > 1) {
      for (var i = 0; i < value ; i++) {
        duplicateArray.push(key);
      }
    }
  });
  return duplicateArray;
}


//It's linear.