var printerError = function(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) > "m") {
      count++;
    }
  }
  return count + "/" + string.length;
};
