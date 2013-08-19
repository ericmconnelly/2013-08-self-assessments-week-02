//Set up the boundaries of the svg.
var width = 960,
    height = 2200;

//Create a cluster layout that is smaller than the total svg.
var cluster = d3.layout.cluster()
    .size([height, width - 160]);

//
var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(40,0)");
