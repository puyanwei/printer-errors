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
});

//count length of string
//count how many letters are not a-m
//put into correct formatting
