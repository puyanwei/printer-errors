describe("printer-error", function() {
  it("inputtng 'a' should return '0/1'", function() {
    expect(printerError("a")).toEqual("0/1");
  });
  it("inputtng 'aa' should return '0/2'", function() {
    expect(printerError("aa")).toEqual("0/2");
  });
  it("inputtng 'aaa' should return '0/3'", function() {
    expect(printerError("aaa")).toEqual("0/3");
  });
});

//count length of string
//count how many letters are not a-m
//put into correct formatting
