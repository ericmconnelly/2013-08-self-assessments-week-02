var returnArguments = function(){ return arguments; };

describe("each", function() {
  it("should provide value and iteration count", function() {
    var letters = ['a', 'b', 'c'];
    var iterations = [];

    _.each(letters, function(letter, index, collection) {
      iterations.push([letter, index, collection]);
    });

    expect(iterations).to.eql([
      ['a', 0, letters],
      ['b', 1, letters],
      ['c', 2, letters]
    ]);
  });

  it("should iterate over objects", function() {
    var letters = {d: 'dog', e: 'elephant', f: 'flotsam'};
    var iterations = [];

    _.each(letters, function(value, property, object) {
      iterations.push([value, property, object]);
    });

    expect(iterations).to.eql([
      ['dog', 'd', letters],
      ['elephant', 'e', letters],
      ['flotsam', 'f', letters]
    ]);
  });
});

describe("defaults", function() {
  var result, options;

  beforeEach(function() {
    options = {zero: 0, one: 1, empty: "", nan: NaN, string: "string"};
    _.defaults(options, {zero: 1, one: 10, twenty: 20}, {empty: "full"}, {nan: "nan"}, {word: "word"}, {word: "dog"});
  });

  it("should apply a value when one doesn't already exist on the target", function() {
    expect(options.zero).to.equal(0);
    expect(options.one).to.equal(1);
    expect(options.twenty).to.equal(20);
  });

  it("should not apply a value if one already exist on the target", function() {
    expect(options.empty).to.equal("");
    expect(isNaN(options.nan)).to.equal(true);
  });

  it("if two identical values are passed in, the first one wins", function() {
    expect(options.word).to.equal("word");
  });
});

describe("once", function() {
  it("should only run a user-defined function if it hasn't been run before", function() {
    var num = 0;
    var increment = _.once(function() {
      num++;
    });
    increment();
    increment();

    expect(num).to.equal(1);
  });
});

describe("contains", function(){
  it("should return true given a list and a value from that list", function(){
    var list = [1,2,3];
    var value = 1;
    expect(_.contains(list, value)).to.equal(true);
  });
  
  it("should return false given a list and a value not in that list", function(){
    var list = [1,2,3];
    var value = 4;
    expect(_.contains(list, value)).to.equal(false);
  });
});
