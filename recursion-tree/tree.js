var Tree = function(input) {
  this.payload = input;
  this.children = [];

  this.addNode = function(payloadVal) {
    this.children.push(new Tree(payloadVal));
  };

  this.search = function(item) {
    // ========YOUR CODE HERE=========
  };
};
