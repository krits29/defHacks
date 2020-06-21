// javascript
 
 
var dataset = [1, 3, 7, 5];
var events = ['anatomy', 'genes', 'wright', 'proteins'];
var type = ['bio', 'bio', 'build', 'bio']
 
 // javascript
var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);
 
 
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
 
var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);
 
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - yScale(d)
    })
    .attr("height", function(d) {
        return yScale(d);
    })
        .attr("fill", function(d, i) {
              if (type[i] == "bio") {
                return "green";
              } else if (type[i] == "build") {
                return "orange";
              }
              return "yellow";
            })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate("+ translate +")";
    });
 
var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d, i) {
        return events[i];
    })
    .attr("y", function(d, i) {
        return svgHeight - yScale(d)+15;
    })
    .attr("x", function(d, i) {
        return barWidth * i;
    })
    .style("font", "20px arial")
    .attr("fill", "#FFFFFF");
 
 
 
 function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
 
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
 }
