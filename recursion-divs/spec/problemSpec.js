describe('containsFiveOrMoreDivs', function() {
  it('should return true when passed a DOM element containing exactly five nested `div` elements', function() {
    var element = document.getElementById('contains_five_nested');
    // Ensure we selected a DOM node
    expect(document.getElementById('contains_five_nested').id).to.equal('contains_five');

    expect(containsFiveOrMoreDivs(element)).to.equal(true);
  });

    it('should return true when passed a DOM element containing exactly five sibling `div` elements', function() {
        var element = document.getElementById('contains_five_siblings');
        // Ensure we selected a DOM node
        expect(document.getElementById('contains_five_siblings').id).to.equal('contains_five');

        expect(containsFiveOrMoreDivs(element)).to.equal(true);
    });


  it('should return true when passed a DOM element containing more than five `div` elements', function() {
    var element = document.getElementById('contains_six');
    // Ensure we selected a DOM node
    expect(document.getElementById('contains_six').id).to.equal('contains_six');

    expect(containsFiveOrMoreDivs(element)).to.equal(true);
  });

  it('should return false when passed a DOM element containing fewer than five `div` elements', function() {
    var element = document.getElementById('contains_two');
    // Ensure we selected a DOM node
    expect(document.getElementById('contains_two').id).to.equal('contains_two');

    expect(containsFiveOrMoreDivs(element)).to.equal(false);
  });
});
