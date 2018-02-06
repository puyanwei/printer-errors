describe("printer-error", function() {
  it("inputting aaabbbbhaijjjm should return 8/22", function() {
    expect(printerError("aaabbbbhaijjjm")).toEqual("8/22");
  });
});
