<!-- routify:options frontmatter= { 
  "title": "The Effects of Climate Change on Migratory Birds",
  "description": "Meet the Wood Thrush. Smaller than a Robin, the Wood Thrush makes its home throughout the forests of the Eastern United States. Due to climate change, in recent years, the species has been forced to settle further North than ever before.",
  "authors": [ "Annie Fu", "Jennifer Russell", "Daniel Sanderson" ],
  "date": "Dec. 18 2020"
} -->

<style>
  #tri_graph{
    margin-left: -60px;
    /* overflow: scroll; */
    overflow: auto;
}
/* 
body{
    background-color: #14213d;
    margin: 3rem 4rem;
} */
/* 
a {
    color: #fca311;
    text-decoration: none;
    border-bottom: solid;
    border-width: 1px;
} */

h1{
    font-family: 'Inter';
    color: white;
    text-align: center;
    text-shadow: 0 0 4px lightgrey;
}

h2{
    font-family: 'Inter';
    font-size: 18px;
    font-weight: 300;
    color: #fca311;
    text-align: center;
}

/* .y1-gridlines path, .y1-axis path, .y1-gridlines line, .x-gridlines line{
    stroke: lightgrey;
    opacity: .3;
} */

.timeline-container{
    text-align:center;
}

.intro-p{
    font-family: 'Inter';
    color: #e5e5e5;
    margin: auto;
    width: 37rem;
    line-height: 1.5;
}

strong{
    color: #fca311;
    font-weight: 600;
}

.date{
    color: white;
    font-size: 14px;
}

.timeline{
    overflow: auto;
    width:1200px;
}
</style>
  
<div id="header">
  <h1> Chronicling the Ebb and Flow of Charlotte's Houseless Population through the Pandemic</h1>
  <h2> <i>by Annie Fu and Dana Gong</i></h2>
  <h2 class="date"> May 14th, 2021</h2>
</div>

<p class="intro-p"> <br/>In Charlotte, North Carolina, the chasm between the rich and the poor is so wide, the city has historically been coined a “tale of two cities:” one of prosperity and the other of poverty. 
  <br/><br/>
   The onset of the pandemic made visible one of the effects of this social stratification: <strong>“Tent City,”</strong> a cluster of encampments located at the northern end of Uptown 
   on North College, West 12th, and North Tryon streets. At its peak, Tent City was home to an estimated 150 people and spanned multiple blocks.<br/>
   <br/>
<!-- <img src="images/tentcity-map5.png" width="100%" alt="A map of Charlotte's city boundaries, with a bright orange marker in the top right corner."> -->
<iframe title="map" src="https://snazzymaps.com/embed/303447" width="100%" height="400px" style="border:none;"></iframe>  
<br/><br/>

<!-- 
In the shadow of the city’s rapid economic growth, 
rent burdened individuals often fail to escape eviction and houselessness. This pattern can be seen as far back as Charlotte's 1960's urban renewal, 
when the city government conducted a comprehensive tear-down of low-cost housing occupied mostly by black citizens, and then failed to replace much of it. </br></br>
Charlotte has yet to outpace this history. In 2014, 
  <a href="https://www.leadingonopportunity.org/" target="_blank">a Ghetty study</a> ranked Charlotte last out of the 50 largest US cities for upward mobility.
   With the additional onset of Covid-19, Charlotte's low-income citizens have experienced <a href="https://spectrumlocalnews.com/nc/charlotte/news/2020/05/15/special-report--covid-19-s-impact-on-homelessness" target="_blank">increased unemployment and rent burden</a>,
    two of the largest contributing factors rates of urban houselessness.
</br></br> -->
  On <strong>February 19th, 2021</strong>, Mecklenburg County officials issued an abatement order that gave Tent City residents 72 hours to 
  pack all their belongings and leave their encampments, citing rat infestations and fires as health risks. <br/><br/>

  Along with county-funded 90-day hotel stays for residents of Tent City, grassroots organizations and community nonprofit volunteer efforts
  identified temporary housing for over <strong>210 Tent City residents</strong>.
  <br/><br/>A long-term solution is not yet in place, but for the time being, relocated individuals have access to three meals a day,
  job supports, and mental health supports.<br/><br/>
  
   </p>

  
<p class="intro-p">To get a better sense of how the progression of the pandemic affected Charlotte's houseless population, we looked into the recent events involving the Tent City 
encampment. These events provide crucial context for raw population counts of Charlotte's 
chronically houseless, which are published monthly through the Charlotte-Mecklenburg Housing & Homelessness Dashboard. </p>
<!-- <p class="intro-p">
</p> -->
<div class="timeline-container">
<h1> Timeline</h1>
<div class="timeline">
<div>
<svg id="tri_timeline" width="5580" height="400"></svg>
</div>
</div>
<svg id="tri_graph" width="1300" height="470"></svg>
<script>
// javascript for the total population line graph

const trisvg = d3.select("#tri_graph");
const linewidth = 1200;
const lineheight = 370;

const linemargin = { top: 30, right: 40, bottom: 40, left: 40 };
const lineWidth = linewidth - linemargin.left - linemargin.right;
const lineHeight = lineheight - linemargin.top - linemargin.bottom;
const line_graph = trisvg.append("g").attr("id", "line_graph")
  .attr("transform", "translate(" + (linemargin.left + 60) + "," + (linemargin.top) + ")");;



const vis_line = async () => {
  let line_data = await d3.csv("_data/inflow-outflow.csv");

  // change all dates from strings to d3 datetime objects
  let date_parser = d3.timeParse("%Y-%m-%d")
  line_data.forEach(d => {
    d["date"] = date_parser(d["date"])
    d["year"] = d["date"].getFullYear();
    d["month"] = Number(d["date"].getMonth()) + Number(1);
  });

  console.log(line_data)

  // const yearExtent = d3.extent(line_data, d => d["year"]);
  const yearScale = d3.scaleTime().domain([new Date("2020-01-01"), new Date("2021-03-20")]).range([0, lineWidth - 2]);

  // const distExtent = d3.extent(distances_per_yr_dict, d => d["max_dist"]);
  const flowExtent = [1900, 3500]
  const flowScale = d3.scaleLinear().domain(flowExtent).range([lineHeight, 0]);

  var active_point;

  let leftAxis = d3.axisLeft(flowScale)
  let leftGridlines = d3.axisLeft(flowScale)
    .tickSize(-lineWidth - 10)
    .tickFormat("")


  line_graph.append("rect")
  .attr("width", "166px")
  .attr("height", "80px")
  .attr("x", 989)
  .attr("y", 228)
  .attr('fill', "white")
  .attr("opacity", .8)


  line_graph.append("text")
  .attr("fill", "black")
  .text("Legend")
  .attr("x", 1040)
  .attr("y", 245)
  .attr("font-family", "Inter")
  .attr("font-size", "14px")
  .attr("opacity",1)





  line_graph.append("rect")
  .attr("width", "1.5px")
  .attr("height", lineHeight)
  .attr("x", 236)
  .attr("y", 28)
  .attr('fill', "white")
  .attr("opacity", .7)


  
  line_graph.append("rect")
  .attr("width", "1.5px")
  .attr("height", lineHeight)
  .attr("x", 270)
  .attr("y", 28)
  .attr('fill', "white")
  .attr("opacity", .7)


  line_graph.append("g")
    .attr("class", "y1-axis")
    .attr("transform", "translate(" + (linemargin.left + 10) + "," + linemargin.top + ")")
    .attr("fill", "#e5e5e5")
    .attr("stroke", "#e5e5e5")
    .call(leftAxis)

  line_graph.append("g")
    .attr("class", "y1-gridlines")
    .attr("fill", "#e5e5e5")
    .attr("stroke", "#e5e5e5")
    .attr("opacity", 1)
    .attr("transform", "translate(" + (linemargin.left + 10) + "," + linemargin.top + ")")
    .call(leftGridlines)

  line_graph.append("text")
    .attr("transform", "translate(" + (5) + "," + (lineheight / 2) + ")rotate(-90)")
    .style("text-anchor", "middle")
    .attr("stroke", "#e5e5e5")
    .attr("font-family", "Inter")
    .attr("font-size", "13px")
    .attr("fill", "#e5e5e5")
    .text("Total Population")

  line_graph.append("text")
    .attr("transform", "translate(" + (linewidth / 2) + "," + (10) + ")")
    .style("text-anchor", "middle")
    .attr("stroke", "#e5e5e5")
    .attr("font-family", "Inter")
    .attr("font-size", "18px")
    .attr("fill", "#e5e5e5")
    .text("Total Homeless Population of Charlotte, January 2020 - March 2021")


  line_graph.append("text")
    .attr("transform", "translate(" + (linewidth / 2) + "," + (lineheight) + ")")
    .style("text-anchor", "middle")
    .attr("stroke", "#e5e5e5")
    .attr("font-family", "Inter")
    .attr("font-size", "13px")
    .attr("fill", "#e5e5e5")
    .text("Date")


  let bottomAxis = d3.axisBottom(yearScale)
  let bottomGridlines = d3.axisBottom(yearScale)
    .tickSize(-lineHeight - 10)
    .tickFormat(d3.timeFormat("%b %Y"))
    .ticks(28)

  line_graph.append("line")
  .attr('x')

  line_graph.append("g")
    .attr("class", "x-gridlines")
    .attr("fill", "#e5e5e5")
    .attr("stroke", "#e5e5e5")
    .attr("opacity", 1)
    .attr("transform", "translate(" + (linemargin.left + 10) + "," + (lineHeight + linemargin.top) + ")")
    .call(bottomGridlines)


  // Add the line
  line_graph.append("path")
    .datum(line_data)
    .attr("fill", "none")
    .attr("stroke", "#fca311")
    .attr("stroke-width", 2)
    .attr("z-index", 99)
    .attr("d", d3.line()
      //  .curve(d3.curveBasis) // Just add that to have a curve instead of segments
      .x(function (d) { return yearScale(d.date) + 50 })
      .y(function (d) { return flowScale(d.total) + 32 })
    )

    line_graph.selectAll("circle")
    .data(line_data)
    .join("circle")
    .attr("fill", "#fca311")
    .attr("stroke", (function (d) { if (d.total == "2303"){return "white"} 
  else if (d.total=="3022"){return "white"}
else if (d.total=="2559"){return "white"}
else if (d.total=="2816"){return "white"}}))
    .attr("stroke-width", "2px")
    .attr("r", "4px")
    .attr("cx", (function (d) { return yearScale(d.date) + 50 }))
    .attr("cy", (function (d) { return flowScale(d.total) + 32 }))
  let linemouseGroup = line_graph.append("g");


  let nat_emergency = line_graph.append('g')
  .attr("transform", "translate(" + (5) + "," + (-8) + ")")

  nat_emergency.append("rect")
  .attr("width", 180)
  .attr("height", 65)
  .attr("x", 45)
  .attr("y", 45)
  .attr('fill', "white")
  .attr("opacity", .8)

  nat_emergency.append("text")
  .attr("x", 50)
  .attr("y", 63)
  .attr("font-size", "11px")
  .attr('fill', "black")
  .attr("font-family", "Inter")
  .attr("font-weight", "bold")
  .text("March 13, 2020")

  nat_emergency.append("text")
  .attr("x", 50)
  .attr("y", 83)
  .attr("font-size", "11px")
  .attr('fill', "black")
  .attr("font-family", "Inter")
  .text("Donald Trump declares Covid-19")

  nat_emergency.append("text")
  .attr("x", 50)
  .attr("y", 96)
  .attr("font-size", "11px")
  .attr('fill', "black")
  .attr("font-family", "Inter")
  .text("a national emergency.")


  let cares_act = line_graph.append('g')
  .attr("transform", "translate(" + (5) + "," + (69) + ")")


  cares_act.append("rect")
  .attr("width", 145)
  .attr("height", 65)
  .attr("x", 275)
  .attr("y", 45)
  .attr('fill', "white")
  .attr("opacity", .8)

  cares_act.append("text")
  .attr("x", 280)
  .attr("y", 63)
  .attr("font-size", "11px")
  .attr('fill', "black")
  .attr("font-family", "Inter")
  .attr("font-weight", "bold")
  .text("March 27, 2020")

  cares_act.append("text")
  .attr("x", 280)
  .attr("y", 83)
  .attr("font-size", "11px")
  .attr('fill', "black")
  .attr("font-family", "Inter")
  .text("The CARES Act is signed")

  cares_act.append("text")
  .attr("x", 280)
  .attr("y", 96)
  .attr("font-size", "11px")
  .attr('fill', "black")
  .attr("font-family", "Inter")
  .text("into law.")

  line_graph.append("circle")
  .attr("fill", "#fca311")
  .attr("stroke", "white")
  .attr("stroke-width", "2px")
  .attr("r", "4px")
  .attr("cx", 1008)
  .attr("cy", 262)


  line_graph.append("text")
  .attr("fill", "#black")
  .text("Month during which")
  .attr('font-family', "Inter")
  .attr("font-size", "12px")
  .attr("x", 1022)
  .attr("y", 266)


  line_graph.append("text")
  .attr("fill", "#black")
  .text("Tent City was cleared")
  .attr('font-family', "Inter")
  .attr("font-size", "12px")
  .attr("x", 1022)
  .attr("y", 282)


  let select_rect = linemouseGroup.append("rect")
    .attr("id", "select_rect")
    .attr("x", lineWidth-105)
    .attr("y", 30)
    .attr("fill", "lightgrey")
    .attr("width", "120px")
    .attr("z-index", 1)
    .attr("height", lineHeight)
    .attr("opacity", .3);

  // let marker_aug = linemouseGroup.append("rect")
  //   .attr('id', "aug_marker")
  //   .attr("x", 572)
  //   .attr("y", 208)
  //   .attr('fill', "white")
  //   .attr("width", "30px")
  //   .attr("height", "20px")

  let valuemark = linemouseGroup.append("circle")
    .attr("id", "value")
    .attr("fill", "none")
    .attr("stroke", "#fca311")
    .attr("stroke-width", 2)
    .attr("r", 10)
    .attr("z-index", 99)
    .attr("opacity", 0);

  let active = linemouseGroup.append("rect")
    .attr("id", "active")
    .attr("width", lineWidth)
    .attr("height", lineHeight)
    .attr("fill", "none")
    .attr("pointer-events", "all");


  let pop_label = linemouseGroup.append("text")
    .attr("id", "label")
    .attr("stroke", "#e5e5e5")
    .attr("fill", "#e5e5e5")
    .attr("opacity", 0);

  let find_closest_x = d3.bisector(d => d.date).right;

  active.on("mouseover", function () {
    valuemark.attr("opacity", 1);
    pop_label.attr("opacity", 1);
  });

  active.on("mouseout", function () {
    // Hide them when mousing out of chart
    valuemark.attr("opacity", 0);
    pop_label.attr("opacity", 0);
  });


const trisvg2 = d3.select("#tri_timeline");

const tlwidth = 3400;
const tlheight = 370;

const tlmargin = { top: 60, right: 40, bottom: 40, left: 40 };
const tlWidth = tlwidth - tlmargin.left - tlmargin.right;
const tlHeight = tlheight - tlmargin.top - tlmargin.bottom;
const timeline = trisvg2.append("g").attr("id", "timeline")
  .attr("transform", "translate(" + (-4800) + "," + (tlmargin.top) + ")")


  // let line_data = await d3.csv("inflow-outflow.csv");

  // // change all dates from strings to d3 datetime objects
  // let date_parser = d3.timeParse("%Y-%m-%d")
  // line_data.forEach(d => {
  //   d["date"] = date_parser(d["date"])
  //   d["year"] = d["date"].getFullYear();
  //   d["month"] = Number(d["date"].getMonth()) + Number(1);
  // });

  // console.log(line_data)

  // // const yearExtent = d3.extent(line_data, d => d["year"]);
  // const yearScale = d3.scaleTime().domain([new Date("2020-01-01"), new Date("2021-02-20")]).range([0, lineWidth - 2]);

  // // const distExtent = d3.extent(distances_per_yr_dict, d => d["max_dist"]);
  // const flowExtent = [1900, 3500]
  // const flowScale = d3.scaleLinear().domain(flowExtent).range([lineHeight, 0]);


  timeline.append("text")
  .attr("font-size", "20px")
  .text("February 2021")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 5300)

  timeline.append("text")
  .attr("font-size", "20px")
  .text("March 2021")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 5750)

  timeline.append("rect")
  .attr("width", "358px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("opacity", 0.3)
  .attr("height", "110px")
  .attr("x", 5085)
  .attr("y", 28)


  timeline.append("text")
  .attr("font-size", "14px")
  .text("February 12th, 2021")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 5093)
  .attr("y", 48)
  

  timeline.append("svg:image")
  .attr("xlink:href", "images/feb2021.png")
  .attr("height", "280px")
  .attr("x", 5090)
  .attr("y", 52)



  timeline.append("rect")
  .attr("width", "320px")
  .attr("stroke", "white")
  .attr("fill", "#fca314")
  .attr("opacity", 0.3)
  .attr("height", "90px")
  .attr("x", 5135)
  .attr("y", 175)


  timeline.append("text")
  .attr("font-size", "14px")
  .text("February 19th, 2021")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("font-weight", 500)
  .attr("x", 5140)
  .attr("y", 196)


  timeline.append("text")
  .attr("font-size", "14px")
  .text("Mecklenburg County officials issue an  ")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("font-weight", 300)
  .attr("x", 5140)
  .attr("y", 216)

  timeline.append("text")
  .attr("font-size", "14px")
  .text("abatement order that gives Tent City residents ")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("font-weight", 300)
  .attr("x", 5140)
  .attr("y", 236)


  timeline.append("text")
  .attr("font-size", "14px")
  .text("72 hours to pack all their belongings and leave.")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("font-weight", 300)
  .attr("x", 5140)
  .attr("y", 256)


  timeline.append("rect")
  .attr("width", "360px")
  .attr("fill", "#323232")
  .attr("opacity", .4)
  .attr("height", "90px")
  .attr("x", 5475)
  .attr("y", 175)


  timeline.append("text")
  .attr("font-size", "14px")
  .text("Relocation efforts place individuals ")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("font-weight", 300)
  .attr("x", 5480)
  .attr("y", 206)


  timeline.append("text")
  .attr("font-size", "14px")
  .text("into hotels and emergency shelter for up to 90 days")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("font-weight", 300)
  .attr("x", 5480)
  .attr("y", 226)

  timeline.append("text")
  .attr("font-size", "14px")
  .text("with food, job supports, and mental health resources.")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("font-weight", 300)
  .attr("x", 5480)
  .attr("y", 246)

  timeline.append("rect")
  .attr("width", "336px")
  .attr("fill", "white")
  .attr("opacity", 0.3)
  .attr("height", "120px")
  .attr("x", 5646)
  .attr("y", 20)


  timeline.append("text")
  .attr("font-size", "14px")
  .text("March 2021 - Present")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("font-weight", 500)
  .attr("x", 5655)
  .attr("y", 40)

  //Cleanup efforts continue at Tent City, with no long-term solution 
  // in place for over 200 residents temporarily house under 
  // the 90-day stay policy expires. 

  timeline.append("text")
  .attr("font-size", "14px")
  .text("Cleanup efforts continue at Tent City.")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("font-weight", 300)
  .attr("x", 5655)
  .attr("y", 60)

  timeline.append("text")
  .attr("font-size", "14px")
  .text("A long-term solution has yet to be implemented")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("font-weight", 300)
  .attr("x", 5655)
  .attr("y", 80)


  timeline.append("text")
  .attr("font-size", "14px")
  .text("for former Tent City residents after their")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("font-weight", 300)
  .attr("x", 5655)
  .attr("y", 100)



  timeline.append("text")
  .attr("font-size", "14px")
  .text("90-day hotel stays conclude.")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("font-weight", 300)
  .attr("x", 5655)
  .attr("y", 120)

  timeline.append("text")
  .attr("font-size", "20px")
  .text("January 2021")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 4900)

  timeline.append("rect")
  .attr("width", "310px")
  .attr("fill", "#323232")
  .attr("opacity", 0.4)
  .attr("height", "180px")
  .attr("x", 4685)
  .attr("y", 40)

  timeline.append("svg:image")
  .attr("xlink:href", "images/jan2021.png")
  .attr("height", "280px")
  .attr("x", 4640)
  .attr("y", -5)

  // timeline.append("svg:image")
  // .attr("xlink:href", "images/jantentcity.png")
  // .attr("height", "120px")
  // .attr("x", 4970)
  // .attr("y", 150)

  timeline.append("text")
  .attr("font-size", "20px")
  .text("December 2020")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 4400)

  timeline.append("rect")
  .attr("width", "370px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("opacity", 0.3)
  .attr("height", "175px")
  .attr("x", 4300)
  .attr("y", 90)

  timeline.append("svg:image")
  .attr("xlink:href", "images/dec2020.png")
  .attr("height", "280px")
  .attr("x", 4310)
  .attr("y", 95)

  timeline.append("text")
  .attr("font-size", "20px")
  .text("November 2020")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 4000)

  timeline.append("rect")
  .attr("width", "415px")
  .attr("fill", "#fca314")
  .attr("opacity", 0.4)
  .attr("height", "140px")
  .attr("x", 3800)
  .attr("y", 30)

  timeline.append("svg:image")
  .attr("xlink:href", "images/nov2020.png")
  .attr("height", "280px")
  .attr("x", 3810)
  .attr("y", 30)

  timeline.append("svg:image")
  .attr("xlink:href", "images/novtres.png")
  .attr("height", "120px")
  .attr("x", 4130)
  .attr("y", 160)

  timeline.append("svg:image")
  .attr("xlink:href", "images/novtres2.png")
  .attr("height", "120px")
  .attr("x", 4000)
  .attr("y", 160)

  timeline.append("text")
  .attr("font-size", "20px")
  .text("October 2020")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 3600)

  timeline.append("rect")
  .attr("width", "400px")
  .attr("fill", "#323232")
  .attr("opacity", 0.4)
  .attr("height", "73px")
  .attr("x", 3500)
  .attr("y", 190)

  timeline.append("svg:image")
  .attr("xlink:href", "images/oct2020.png")
  .attr("height", "280px")
  .attr("x", 3510)
  .attr("y", 190)

  timeline.append("svg:image")
  .attr("xlink:href", "images/octpic.png")
  .attr("height", "100px")
  .attr("x", 3630)
  .attr("y", 40)

  // September 2020

  timeline.append("text")
  .attr("font-size", "20px")
  .text("September 2020")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 3200)

  timeline.append("rect")
  .attr("width", "325px")
  .attr("fill", "white")
  .attr("opacity", 0.3)
  .attr("height", "145px")
  .attr("x", 3135)
  .attr("y", 20)

  timeline.append("svg:image")
  .attr("xlink:href", "images/sep2020.png")
  .attr("height", "280px")
  .attr("x", 3145)
  .attr("y", 25)

  timeline.append("text")
  .attr("font-size", "20px")
  .text("August 2020")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 2800)


  timeline.append("rect")
  .attr("width", "335px")
  .attr("fill", "#fca314")
  .attr("opacity", 0.3)
  .attr("height", "132px")
  .attr("x", 2745)
  .attr("y", 120)

  timeline.append("svg:image")
  .attr("xlink:href", "images/aug2020-2.png")
  .attr("height", "280px")
  .attr("x", 2754)
  .attr("y", 124)

  //aug 2020 1


  timeline.append("rect")
  .attr("width", "282px")
  .attr("fill", "#fca314")
  .attr("opacity", 0.3)
  .attr("height", "80px")
  .attr("x", 2630)
  .attr("y", 20)

  timeline.append("svg:image")
  .attr("xlink:href", "images/aug2020-1.png")
  .attr("height", "280px")
  .attr("x", 2644)
  .attr("y", 25)


  timeline.append("text")
  .attr("font-size", "20px")
  .text("July 2020")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 2400)


  timeline.append("rect")
  .attr("width", "272px")
  .attr("fill", "white")
  .attr("opacity", 0.3)
  .attr("height", "110px")
  .attr("x", 2360)
  .attr("y", 140)

  timeline.append("svg:image")
  .attr("xlink:href", "images/july2020.png")
  .attr("height", "274px")
  .attr("x", 2366)
  .attr("y", 100)

  timeline.append("text")
  .attr("font-size", "20px")
  .text("June 2020")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 2000)


  timeline.append("text")
  .attr("font-size", "20px")
  .text("May 2020")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 1600)

  timeline.append("text")
  .attr("font-size", "20px")
  .text("April 2020")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 1200)


  timeline.append("text")
  .attr("font-size", "20px")
  .text("March 2020")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 800)



  timeline.append("rect")
  .attr("width", "280px")
  .attr("fill", "white")
  .attr("opacity", 0.3)
  .attr("height", "124px")
  .attr("x", 970)
  .attr("y", 125)

  timeline.append("svg:image")
  .attr("xlink:href", "images/march2020-2.png")
  .attr("height", "274px")
  .attr("x", 978)
  .attr("y", 128)

  timeline.append("rect")
  .attr("width", "300px")
  .attr("fill", "#fca314")
  .attr("opacity", 0.3)
  .attr("height", "190px")
  .attr("x", 660)
  .attr("y", 25)

  timeline.append("svg:image")
  .attr("xlink:href", "images/march2020-1.png")
  .attr("height", "274px")
  .attr("x", 663)
  .attr("y", 25)

  timeline.append("text")
  .attr("font-size", "20px")
  .text("February 2020")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 400)

  timeline.append("rect")
  .attr("width", "306px")
  .attr("fill", "white")
  .attr("opacity", 0.3)
  .attr("height", "98px")
  .attr("x", 333)
  .attr("y", 182)

  timeline.append("svg:image")
  .attr("xlink:href", "images/feb2020.png")
  .attr("height", "274px")
  .attr("x", 343)
  .attr("y", 180)

  timeline.append("svg:image")
  .attr("xlink:href", "images/kiplin.jpeg")
  .attr("height", "134px")
  .attr("x", 213)
  .attr("y", 25)


  // timeline.append("rect")
  // .attr("width", "345px")
  // .attr("fill", "#323232")
  // .attr("opacity", 0.3)
  // .attr("height", "20px")
  // .attr("x", 20)
  // .attr("y", 85)

  // timeline.append("svg:image")
  // .attr("xlink:href", "images/jan2020.png")
  // .attr("height", "274px")
  // .attr("x", 23)
  // .attr("y", 20)


  timeline.append("text")
  .attr("font-size", "20px")
  .text("January 2020")
  .attr("font-family", "Inter")
  .attr("fill", "white")
  .attr("x", 0)

  timeline.append("rect")
  .attr("width", "5750px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "3px")
  .attr("x", 60)
  .attr("y", 300)

  // TICK MARKS

  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 60)
  .attr("y", 285)


  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 5810)
  .attr("y", 285)


  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 460)
  .attr("y", 285)

  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 860)
  .attr("y", 285)

  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 1250)
  .attr("y", 285)

  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 1650)
  .attr("y", 285)


  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 2050)
  .attr("y", 285)

  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 2450)
  .attr("y", 285)

  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 2860)
  .attr("y", 285)

  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 3280)
  .attr("y", 285)

  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 3670)
  .attr("y", 285)


  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 4080)
  .attr("y", 285)

  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 4480)
  .attr("y", 285)


  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 4970)
  .attr("y", 285)


  timeline.append("rect")
  .attr("width", "3px")
  .attr("stroke", "white")
  .attr("fill", "white")
  .attr("height", "30px")
  .attr("x", 5390)
  .attr("y", 285)

  timeline.append("rect")
  .attr("width", "360px")
  .attr("fill", "#323232")
  .attr("opacity", 0.3)
  .attr("height", "110px")
  .attr("x", 1860)
  .attr("y", 20)

  timeline.append("svg:image")
  .attr("xlink:href", "images/june2020.png")
  .attr("height", "274px")
  .attr("x", 1866)
  .attr("y", 23)

  timeline.append("svg:image")
  .attr("xlink:href", "images/jun2020_img.jpeg")
  .attr("height", "120px")
  .attr("x", 2136)
  .attr("y", 143)


  // May 2020


  // timeline.append("rect")
  // .attr("width", "390px")
  // .attr("fill", "#323232")
  // .attr("opacity", 0.3)
  // .attr("height", "110px")
  // .attr("x", 1660)
  // .attr("y", 20)

  // timeline.append("svg:image")
  // .attr("xlink:href", "images/may2020.png")
  // .attr("height", "274px")
  // .attr("x", 1666)
  // .attr("y", -20)

  // April 2020


  timeline.append("rect")
  .attr("width", "410px")
  .attr("fill", "rgb(252, 163, 20)")
  .attr("opacity", 0.3)
  .attr("height", "95px")
  .attr("x", 1314)
  .attr("y", 115)

  timeline.append("svg:image")
  .attr("xlink:href", "images/april2020-2.png")
  .attr("height", "87px")
  .attr("x", 1323)
  .attr("y", 120)

  timeline.append("rect")
  .attr("width", "417px")
  .attr("fill", "white")
  .attr("opacity", 0.3)
  .attr("height", "74px")
  .attr("x", 1020)
  .attr("y", 20)

  timeline.append("svg:image")
  .attr("xlink:href", "images/april2020-1.png")
  .attr("height", "62px")
  .attr("x", 1032)
  .attr("y", 29)



  active.on("mousemove", function () {
    let mouse_loc = d3.pointer(event);
    let x = mouse_loc[0] - 70;
    let xyear = yearScale.invert(x);
    let i = find_closest_x(line_data, xyear);
    let d = line_data[i];

    let xPos = yearScale(d['date']) + 50;
    let yPos = flowScale(d["total"]) + 32;
    valuemark.attr("cx", xPos).attr("cy", yPos);
    select_rect.attr('x', x + 10).attr("y", 30);
    timeline.attr("transform", "translate(" + (4.4*-1.05*x-.01*-x) + "," + (tlmargin.top) + ")")
    
    // WHEN THE MOUSE MOVES, INVERT AND MOVE THE SVG TIMELINE THE SAME WAY

    let txt = Math.round(d["total"])

    pop_label.text(txt);
    if (xPos < lineWidth / 2.0) {
      pop_label.attr("x", xPos + 4).attr("y", yPos - 15).attr("text-anchor", "start");
    }
    else {
      pop_label.attr("x", xPos + 4).attr("y", yPos - 15).attr("text-anchor", "start");
    }

  });


  



}
vis_line();





</script>
</div>

<!-- 
<h1> Next Steps</h1> -->
<!-- <p class="intro-p">
With around one month remaining in the 90-day county-funded hotel stay 
alotted to Tent City residents, the vast majority 

 </p> -->

