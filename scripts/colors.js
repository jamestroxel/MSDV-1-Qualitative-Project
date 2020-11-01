d3.json('data/colorCats.json').then(function(data){
  
  // Define the bins
  // we're having a cut-off at carathweight 100 and defining the number of bins at 17

  // define dimensions and margins for the graphic
  var margin = ({top: 50, right: 0, bottom: 75, left: 0})
      width = 2000 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;
  
  // Define the scales

  // ORDINAL IS NOT NECESSARY
  
  // var x = d3.scaleOrdinal()
  //   .domain(['pink','red.','redOrange','orange','yellowOrange','yellow', 'lightYellowGreen','yellowGreen','green','darkGreen','blueGreen','lightBlue','blue','reddishBlue','purple','indigo','rainbow','blackGrey','whiteClear'])
  //   .range([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  // const toolTip = d3.select('#toolTip')
  //   .append(text)
  var tooltip = d3.select("#toolTip")
  .enter().append("p")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .enter().append("img")
  .attr('width', 390)
  .attr('height', 100)
  .style("opacity", 0)
  .attr("class", "tooltip")
  
  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function() {
    d3.select('#toolTip')
    .selectAll("text")
    .data(data)
    .join("text")
    .attr('class', 'toolTip')
    .attr('fill', 'white')
    // .attr('text-anchor', 'middle')
    .text(function(d) { 
      const title = d.data[0].title;
      return title; })
        .selectAll("img")
        .data(data)
        .join("img")
        .attr('class', 'toolTip')
        // .attr('text-anchor', 'middle')
        .attr('src', (function(d) { return './downloads/' + d.data[0].filename; }))
  };
  var mouseleave = function(d) {
    tooltip
      .style("opacity", 0)
  }
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.color))
    .range([margin.left, width * .8])
  
  var y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([height - margin.bottom, margin.top]);

    // create an svg container from scratch
  var svg = d3.select('#viz')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

    svg.append("g")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("stroke", "black")
      .attr("stroke-width", 10)
      .attr("fill", function(d) { return d.color; })
      .attr("x", function(d){return xScale(d.color) })
      .attr("width", 100)
      .attr("rx", 50)
      .attr("y", d => y(d.value))
      .attr("height", d => y(0) - y(d.value) + 125)
      .on("mouseover", mouseover)
      .on("mouseleave", mouseleave)
      // .on("mouseover", function() {
        // d3.select('#toolTip')
            // .selectAll("text")
            // .data(data)
            // .join("text")
            // .attr('class', 'toolTip')
            // .attr('fill', 'white')
            // // .attr('text-anchor', 'middle')
            // .text(function(d) { return d.data[0].title; })
      // });
    svg.append("g")
      .selectAll("text")
      .data(data)
      .join("text")
      .attr('class', 'dataLabels')
      .attr('fill', function(d) {
        if (d.color == 'white') {
          return "black";
        } else {
          return "white";
        }
      })
      .attr('text-anchor', 'middle')
      .attr("x", function(d){return xScale(d.color) + 50})
      .attr("y", d => y(d.value) +50)
      .text(function(d) { return d.value; });
      
  ///// Dashboard Carat Chart /////////

  var caratWeights =[];
  var colors =[];
  d3.json('data/data.json').then(function(data){ 
    data.forEach(function(d){
      if(d.caratWeight!=null)
      caratWeights.push(d.caratWeight);
    })
    
  
    let bin = d3.bin().domain([0, 100]).thresholds(50);
  
    let bins = bin(caratWeights);
  
  
    var margin = ({top: 2, right: 0, bottom: 2, left: 0})
        width = 350,
        height = 125 - margin.top - margin.bottom;
  
  
    var x = d3.scaleLinear()
      .domain([bins[0].x0, bins[bins.length - 1].x1])
      .range([margin.left, width - margin.right]);
      
    var y = d3.scaleLinear()
      .domain([0, d3.max(bins, d => d.length)])
      .range([height - margin.bottom, margin.top]);
  
    var svg = d3.select('#viz3')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr("fill", "white");
      
      svg.append("g")
        .attr("stroke", "white")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 5)
        .selectAll("line")
        .data(bins)
        .join("line")
        .attr("x1", d => x(d.x0) + 2.5)
        .attr("x2", d => x(d.x0) + 2.5)
        .attr("y2", d => y(d.length))
        .attr("y1", d => y(height - d.length))
      svg.append("line")
        .attr("x1", d => x(d.x0) + 2.5)
        .attr("x2", d => x(d.x0) + 2.5)
        .attr("y2", d => y(d.length))
        .attr("y1", height - d)
        .each(function(d) {this._current = d;} )
  });
});
///////// Dashboard Color Chart ////////
d3.json('data/colorCats.json').then(function(data){
  
  var margin = ({top: 0, right: 0, bottom: 25, left: 0})
      width = 430 - margin.left - margin.right,
      height = 150 - margin.top - margin.bottom;
  

  // const toolTip = d3.select('#toolTip')
  //   .append(text)

  const xScale = d3.scaleBand()
    .domain(data.map(d => d.color))
    .range([margin.left, width * .8])
  
  var y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([height - margin.bottom, margin.top]);
  var svg1 = d3.select('#viz4')
  .append('svg')
  .attr('width', width)
  .attr('height', height);
  
  svg1.append("g")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("fill", function(d) { return d.color; })
    .attr("x", function(d){return xScale(d.color) })
    .attr("width", 22)
    .attr("rx", 11)
    .attr("y", d => y(d.value))
    .attr("height", d => y(0) - y(d.value) + 35)
  });