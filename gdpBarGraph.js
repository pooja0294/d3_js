var margin={top:20,right:10,bottom:100,left:40},
    width=700-margin.right-margin.left,
	height=500-margin.top-margin.botto;
	
var svg=d3.select("body")
		  .append("svg")
		  .attr({ 
		          "width":700+margin.right+margin.left,
		          "height":500+margin.top+margin.bottom
				})
			.append("g")
			.attr("transform","translate("+margin.left+","+margin.right+")");

var xScale=d3.scale.ordinal()
			 .rangeRoundBands([0,width],0.2,0.2);

var yScale=d3.scale.linear()
             .range([height,0]);

// define axis
var xAxis=d3.svg.axis()
             .scale(xScale)
             .orient("bottom");

var yAxis=d3.svg.axis()
            .scale(yScale)
            .orient("left");

d3.csv("gdp.csv",function(error,data){
	if(error) return console.log("Error:data not loaded");
	data.forEach(function(d){
		d.gdp=+d.gdp;
		d.country=d.country;
		console.log(d.gdp);
	});
});

//specify the domains of the x and y scales
xScale.domain(data.map(function(d){return d.country;}));
yScale.domain([0,d3.max(data,function(d){return d.gdp;})]);

//