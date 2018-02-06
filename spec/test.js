describe("printer-error", function() {
  it("inputtng 'a' should return '0/1'", function() {
    expect(printerError("a")).toEqual("0/1");
  });
  it("inputtng 'aa' should return '0/2'", function() {
    expect(printerError("aa")).toEqual("0/2");
  });
  it("inputting '123456789' should return '0/9'", function() {
    expect(printerError("123456789")).toEqual("0/9");
  });
  it("inputting 'p' should return '1/1'", function() {
    expect(printerError("p")).toEqual("1/1");
  });
  it("inputting 'pq' should return '2/2'", function() {
    expect(printerError("pq")).toEqual("2/2");
  });
  it("example 1 - inputting 'aaabbbbhaijjjm' should return '0/14'", function() {
    expect(printerError("aaabbbbhaijjjm")).toEqual("0/14");
  });
  it("example 1 - inputting 'aaaxbbbbyyhwawiwjjjwwm' should return '8/22'", function() {
    expect(printerError("aaaxbbbbyyhwawiwjjjwwm")).toEqual("8/22");
  });
});

//count length of string
//count how many letters are not a-m
//put into correct formatting
