var printerError = function(string) {
  if (string === "p") {
    return "1/" + string.length;
  }
  return "0/" + string.length;
};
