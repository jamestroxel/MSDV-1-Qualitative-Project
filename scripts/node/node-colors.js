
const fs = require('fs')
let data =  JSON.parse(fs.readFileSync('../../data/dataFiltered.json'));
// console.log(data);
let colorCount = [];


// var pink = [],
//     red = [],
//     redOrange = [],
//     orange = [],
//     yellowOrange = [],
//     yellow = [],
//     lightYellowGreen = [],
//     yellowGreen = [],
//     green = [],
//     darkGreen = [],
//     blueGreen = [],
//     lightBlue = [],
//     blue = [],
//     reddishBlue = [],
//     purple = [],
//     indigo = [],
//     rainbow = [],
//     blackGrey = [],
//     whiteClear = [];

let gemColors =  [{
    pink: [],
    red: [],
    redOrange: [],
    orange: [],
    yellowOrange: [],
    yellow: [],
    lightYellowGreen: [],
    yellowGreen: [],
    green: [],
    darkGreen: [],
    blueGreen: [],
    lightBlue: [],
    blue: [],
    reddishBlue: [],
    purple: [],
    indigo: [],
    rainbow: [],
    blackGrey: [],
    whiteClear: []
}];
let colorCats = [];

function analyzeData(){
    let colorNow;
  
    
    // go through the list of textiles
    data.forEach(function(i) {
        colorNow = i.color;
        let match = false;
        
        // see if their location already exists the allplaces array
        colorCount.forEach(function(c){
            if(c.name==colorNow){
                c.count++;
                match=true;
            }
        });
        // if not create a new entry for that place name
        if(!match){
            colorCount.push({
                name: colorNow,
                count:1
            });
        }
    });
    // sort by amount of items in the list
    colorCount.sort((a, b) => (a.count < b.count) ? 1 : -1)
    console.log(colorCount)
    groupColors(colorCount);
}
analyzeData();
// console.log(colorCount);

function groupColors(colorCount){
    console.log(colorCount);
    colorCount.forEach(d=>{
        console.log(d.name);
    let lowercaseName = d.name.toLowerCase()
    if (lowercaseName.includes("pink") 
        && !lowercaseName.includes("red")
        && !lowercaseName.includes("gray")) {
        gemColors[0].pink.push(lowercaseName)
    }
    if (lowercaseName.includes("red") 
        && !lowercaseName.includes("orange")
        && !lowercaseName.includes("purple")
        && !lowercaseName.includes("gray")) {
        gemColors[0].red.push(lowercaseName)
    }
    if (lowercaseName.includes("red") 
        && lowercaseName.includes("orange")
        && !lowercaseName.includes("gray")) {
        gemColors[0].redOrange.push(lowercaseName)
    }
    if (lowercaseName.includes("orange") 
        || lowercaseName.includes("brown") 
        && !lowercaseName.includes("yellow")
        && !lowercaseName.includes("green")
        && !lowercaseName.includes("gray")) {
        gemColors[0].orange.push(lowercaseName)
    }
    if (lowercaseName.includes("yellow") 
        && lowercaseName.includes("orange")
        && !lowercaseName.includes("gray")) {
        gemColors[0].yellowOrange.push(lowercaseName)
    }
    if (lowercaseName.includes("yellow") 
        && !lowercaseName.includes("orange")
        && !lowercaseName.includes("green")
        && !lowercaseName.includes("gray")) {
        gemColors[0].yellow.push(lowercaseName)
    }
    if (lowercaseName.includes("yellow") 
        && lowercaseName.includes("green")) {
        gemColors[0].lightYellowGreen.push(lowercaseName)
    }
    if (lowercaseName.includes("yellow") 
        && lowercaseName.includes("green")
        && !lowercaseName.includes("gray")) {
        gemColors[0].yellowGreen.push(lowercaseName)
    }
    if (lowercaseName.includes("green") 
        && !lowercaseName.includes("yellow") 
        && !lowercaseName.includes("dark")
        && !lowercaseName.includes("blue")
        && !lowercaseName.includes("gray")) {
        gemColors[0].green.push(lowercaseName)
    }
    if (lowercaseName.includes("green") 
        && lowercaseName.includes("dark") 
        && !lowercaseName.includes("yellow") 
        && !lowercaseName.includes("blue")
        && !lowercaseName.includes("gray")) {
        gemColors[0].darkGreen.push(lowercaseName)
    }
    if (lowercaseName.includes("green") 
        && lowercaseName.includes("blue") 
        && !lowercaseName.includes("yellow")
        && !lowercaseName.includes("gray")) {
        gemColors[0].blueGreen.push(lowercaseName)
    }
    if (lowercaseName.includes("blue") 
        && lowercaseName.match("light") 
        && !lowercaseName.includes("yellow")
        && !lowercaseName.includes("green")
        && !lowercaseName.includes("gray")) {
        gemColors[0].lightBlue.push(lowercaseName)
    }
    if (lowercaseName.includes("blue") 
        && !lowercaseName.includes("red") 
        && !lowercaseName.includes("yellow")
        && !lowercaseName.includes("green")
        && !lowercaseName.includes("purple")
        && !lowercaseName.includes("violet")
        && !lowercaseName.includes("gray")) {
        gemColors[0].blue.push(lowercaseName)
    }
    if (lowercaseName.includes("blue")  
        && lowercaseName.includes("red")
        || lowercaseName.includes("purple")
        && !lowercaseName.includes("green")
        && !lowercaseName.includes("dark")
        && !lowercaseName.includes("gray")) {
        gemColors[0].reddishBlue.push(lowercaseName)
    }
    if (lowercaseName.includes("purple")  
        || lowercaseName.includes("violet")
        && !lowercaseName.includes("gray")) {
        gemColors[0].purple.push(lowercaseName)
    }
    if (lowercaseName.includes("indigo")  
        || lowercaseName.includes("violet")
        && !lowercaseName.includes("green")
        && !lowercaseName.includes("gray")) {
        gemColors[0].indigo.push(lowercaseName)
    }
    if (lowercaseName.includes("various")  
        || lowercaseName.includes("multi")
        || lowercaseName.includes("rainbow")) {
        gemColors[0].rainbow.push(lowercaseName)
    }
    if (lowercaseName.includes("white")  
        || lowercaseName.includes("clear")
        || lowercaseName.includes("colorless")) {
        gemColors[0].whiteClear.push(lowercaseName)
    }
    if (lowercaseName.includes("gray")  
        || lowercaseName.includes("black")
        || lowercaseName.includes("grey")) {
        gemColors[0].blackGrey.push(lowercaseName)
    }
    });
    console.log(gemColors);
}
// function countGroups(){
//     colorCats.push({pink: gemColors[0].pink.length,
//                     red: gemColors[0].red.length,
//                     redOrange: gemColors[0].redOrange.length,
//                     orange: gemColors[0].orange.length,
//                     yellowOrange: gemColors[0].yellowOrange.length,
//                     yellow: gemColors[0].yellow.length,
//                     lightYellowGreen: gemColors[0].lightYellowGreen.length,
//                     yellowGreen: gemColors[0].yellowGreen.length,
//                     green: gemColors[0].green.length,
//                     darkGreen: gemColors[0].darkGreen.length,
//                     blueGreen: gemColors[0].blueGreen.length,
//                     lightblue: gemColors[0].lightBlue.length,
//                     blue: gemColors[0].blue.length,
//                     reddishBlue: gemColors[0].reddishBlue.length,
//                     purple: gemColors[0].purple.length,
//                     indigo: gemColors[0].indigo.length,
//                     rainbow: gemColors[0].rainbow.length,
//                     blackGrey: gemColors[0].blackGrey.length,
//                     whiteClear: gemColors[0].whiteClear.length,});
// };
// countGroups();
// console.log(colorCats);
function countGroups(){
    colorCats.push({color: "pink",
                    value: gemColors[0].pink.length},
                    {color: "red",
                    value: gemColors[0].red.length},
                    {color: "redOrange",
                    value: gemColors[0].redOrange.length},
                    {color: "orange",
                    value: gemColors[0].orange.length},
                    {color: "yellowOrange",
                    value: gemColors[0].yellowOrange.length},
                    {color: "yellow",
                    value: gemColors[0].yellow.length},
                    {color: "lightYellowGreen",
                    value: gemColors[0].lightYellowGreen.length},
                    {color: "yellowGreen",
                    value: gemColors[0].yellowGreen.length},
                    {color: "green",
                    value: gemColors[0].green.length},
                    {color: "darkGreen",
                    value: gemColors[0].darkGreen.length},
                    {color: "blueGreen",
                    value: gemColors[0].blueGreen.length},
                    {color: "lightblue",
                    value: gemColors[0].lightBlue.length},
                    {color: "blue",
                    value: gemColors[0].blue.length},
                    {color: "reddishBlue",
                    value: gemColors[0].reddishBlue.length},
                    {color: "purple",
                    value: gemColors[0].purple.length},
                    {color: "indigo",
                    value: gemColors[0].indigo.length},
                    {color: "rainbow",
                    value: gemColors[0].rainbow.length},
                    {color: "blackGrey", 
                    value: gemColors[0].blackGrey.length},
                    {color: "whiteClear",
                    value: gemColors[0].whiteClear.length,});
};
countGroups();
console.log(colorCats);

setTimeout(() => {
    fs.writeFileSync('../../data/colorCats.json', JSON.stringify(colorCats), 'utf8')
}, 5000)

// var margin = ({top: 100, right: 0, bottom: 50, left: 0})
//       width = 800,
//       height = 400 - margin.top - margin.bottom;

// function makeChart (){
//     var x = d3.scaleOrdinal()
//         .domain('pink', 'red', 'redOrange')
//         .range([pink, red, redOrange]);
//     var y = d3.scaleLinear()
//         .domain([0, d3.max(gemColors, d => d.length)])
//         .range([height - margin.bottom, margin.top]);


//     var svg = d3.select('#viz')
//         .append('svg')
//         .attr('width', width)
//         .attr('height', height)
//         .attr("fill", "white");
    
//     // attach a graphic element, and append rectangles to it
//     svg.append("g")
//         .attr("stroke", "white")
//         .attr("stroke-linecap", "round")
//         .attr("stroke-width", 10)
//         .selectAll("line")
//         .data(gemColors[0].length)
//         .join("line")
//         .attr("x1", d => x(d.x0) + 5)
//         .attr("x2", d => x(d.x0) + 5)
//         .attr("y2", d => y(d.length))
//         .attr("y1", height - 10)
//     // svg.append("g")
//     //   .attr("transform", "translate(0," + height + ")")
//     //   .attr("class", "axisWhite")
//     //   .call(d3.axisBottom(x));
//     svg.append("line")
//         .attr("x1", d => x(d.x0) + 5)
//         .attr("x2", d => x(d.x0) + 5)
//         .attr("y2", d => y(d.length))
//         .attr("y1", height - 10)
//         .each(function(d) {this._current = d;} )
// }
// makeChart();

  
