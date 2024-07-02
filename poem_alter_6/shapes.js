	
/*-------------
var dataArray = [5,11,18,34,45,67,23];


var svg = d3.select ("body").append ("svg")
							.attr("height","50%")
							.attr("width","50%");

svg.selectAll("rect")
	.data(dataArray)
	.enter().append("rect")
	.attr("class","bars")
	.attr("height",function(d){return d*5;})
	.attr("fill","green")
	.attr("width","10%")
	.attr("x",function(d,i){ return 60*i;})
	.attr("y","20");

----------*/
var dataArray = [5,11,18,-34,45,67,23];
var svg = d3.select ("body").append ("svg")
							.attr("height","50%").attr("id","target1")
							.attr("width","50%");

	svg.selectAll("rect")
	.data(dataArray)
	.enter().append("rect")
	.attr("class","bars")
	.attr("height",function(d){return d*5;})
	.attr("fill","green")
	.attr("width","3%")
	.attr("x",function(d,i){ return 60*i;})
	.attr("y","auto");



/*------circle charts---------
var newX=200;
svg.selectAll("circle")
	.data(dataArray)
	.enter().append("circle")
	.attr("class","circles")
	.attr("cx",function(d,i){newX += (d*3)+(i*10);return newX;})
	.attr("cy","100")
	.attr("r",function(d){return (d*3);});   ----------------version correcta*/

var dataArray2 = [5,11,18,34,45,67,73,87,123];
var svg2a = d3.select ("body").append ("svg")
							.attr("height","90%")
							.attr("id","target2")
							.attr("width","80%");

	svg2a.selectAll("circle")
			.data(dataArray)
			.enter().append("circle")
			.attr("class","circles")
			.attr("opacity","0.5")
			.attr("z-index","4")
			.attr("fill","#443567")
			.attr("cx","300")
			.attr("cy","300")
			.attr("r",function(d){return (d*4);});


/*---------------------------*/
var dataArray4 = [15,11,18,34,45,67,73,87,123];
var svg4a = d3.select ("body").append ("svg")
							.attr("height","50%")
							.attr("id","target2a")
							.attr("width","50%");
var newX=250;
	svg4a.selectAll("line")
			.data(dataArray)
			.enter().append("line")
			.attr("class","lines")
			.attr("stroke","orange")
			.attr("stroke-width","8")
			.attr("x1",newX)
			.attr("y1",function(d,i){return( i*20);})
			.attr("x2",function(d){ return newX+(d*5);})
			.attr("y2",function(d,i){return (i*20);});

/*---------------------------*/


var svg4b = d3.select ("body").append ("svg")
							.attr("height","auto")
							.attr("id","target2b")
							.attr("width","auto");
svg4b.append("text")
	.attr("x","400")
	.attr("y","300")
	.attr("id","helloword")
	.text ("HEllo World");

/*---------------------------*/

/* second chapter----------------------------------------------------------------*/

var dataArray2= [{x:5,y:5},{x:6,y:8},{x:7,y:2},{x:8,y:4},
                 {x:12,y:5},{x:16,y:5},{x:-18,y:5},{x:19,y:5},
                 {x:25,y:58},{x:21,y:3},{x:35,y:-15},{x:45,y:5},
                 {x:-15,y:13},{x:-65,y:-58},{x:-85,y:15},{x:95,y:26},];

var svg2=d3.select("body").append("svg")
				.attr("height","50%")
				.attr("id","target4")
				.attr("width","50%");

var line=d3.line()
				.x(function(d){return d.x*6;})
				.y(function(d){return d.y*6;});

svg2.append("path")
	.attr("fill","none")
	.attr("id","feverline")
	.attr("stroke","#559922")
	.attr("stroke-width","5")
	.attr("d",line(dataArray2));


/* third chapter*/

var dataArray3=[123,12,13,141,15,-416,117,118,119,123,24,25,-326,256];
var dataYears=["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014"];

var height=400;
var width=500;

var area=d3.area()
	.x(function(d,i){return i*50;})
	.y0(function(d){ return height-d;})
	.y1(function(d,i){return i*50; });

var svg3= d3.select ("body").append("svg")
	.attr("height","80%").attr("id","target5")
	.attr("width","80%");

svg3.append("path")
	.attr("id","generator")
	.attr("d",area(dataArray));




/* ______
var dataArray3=[123,12,13,141,15,416,117,118,119,123,24,25,326,256];
var dataYears=["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014"];

var height=400;
var width=500;

var area=d3.area()
	.x(function(d,i){return i*50;})
	.y0(height)
	.y1(function(d){ return height-d; });

var svg3= d3.select ("body").append("svg")
	.attr("height","80%").attr("id","target5")
	.attr("width","80%");

svg3.append("path")
	.attr("id","generator")
	.attr("d",area(dataArray));*/
