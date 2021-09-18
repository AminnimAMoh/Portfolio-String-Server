"use strict";exports.id=456,exports.ids=[456],exports.modules={1456:(t,e,r)=>{r.r(e),r.d(e,{default:()=>P});var a=r(7294),n=r(3838),l=r(9322),s=r(3379),i=r.n(s),o=r(7795),c=r.n(o),p=r(569),d=r.n(p),u=r(3565),A=r.n(u),f=r(9216),y=r.n(f),h=r(4589),m=r.n(h),x=r(9439),g={};g.styleTagTransform=m(),g.setAttributes=A(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=y(),i()(x.Z,g),x.Z&&x.Z.locals&&x.Z.locals;const C=(t,e,r,a,n,l,s)=>{const i=s.cityCircles,o=s.legendGraph,c=e.data.map((t=>+t[`Sum${r}`]));n=t.min(c),l=t.max(c);const p=t.scaleLinear().domain([n,l]).range([4,24]);let d=i.selectAll("circle").data(c);d.exit().remove(),d.enter().append("circle").attr("r",0),d.select("circle").data(c).enter().selectAll("circle").attr("class","cities-circles").transition().duration(500).attr("r",(function(t){return p(t)}));let u=[],A=c.sort(t.descending);u.push(A[0]),u.push(A[A.length/2]),u.push(A[A.length-1]);const f=o.selectAll("line").data(u);f.exit().remove();const y=o.selectAll("circle").data(u);y.exit().remove();const h=o.selectAll("text").data(u);h.exit().remove(),y.select("circle").data(u).enter().selectAll("circle").transition().duration(500).attr("transform",(function(t,e){return"translate(0,"+-p(t)+")"})).attr("r",(function(t){return p(t)})),f.select("line").data(u).enter().selectAll("line").transition().duration(500).attr("transform",(function(t,e){return"translate(0,"+2*-p(t)+")"})),h.select("text").data(u).enter().selectAll("text").attr("transform",(function(t,e){return"translate("+(50*e+52)+","+(2*-p(t)-3)+")"})).text((t=>t+"mm")).style("font-size","6pt").style("fill","white")},v=(t,e)=>({mapContainer:e.append("g").attr("id","map-container-group"),yearsContainer:e.append("g").attr("class","year-container"),yearsSlums:e.append("g").attr("class","year-slumes"),lableSlums:e.append("g").attr("class","lable-slumes"),cityCircles:e.append("g").attr("id","city-indicators"),legendGraph:e.append("g").attr("id","graph-legend-group"),ellipseContainer:e.append("g").attr("id","ellipse-group"),cityLables:e.append("g").attr("id","city-Lable"),groupOne:e.append("g").attr("id","population-groupOne"),groupTwo:e.append("g").attr("id","population-groupTwo"),groupThree:e.append("g").attr("id","population-groupThree"),lables:e.append("g").attr("id","graph-lables"),rainGroup:e.append("g").attr("class","rainG")}),w={ellipsesLength:[{size:70,f:"#E4E5E7",s:"none"},{size:70,f:"#E4E5E7",s:"none"},{size:70,f:"#E4E5E7",s:"none"},{size:82,f:"#E4E5E7",s:"none"},{size:60,f:"none",s:"black"},{size:60,f:"none",s:"black"},{size:60,f:"none",s:"black"},{size:80,f:"none",s:"none"}],rectsLength:[{x:183,y:0,text:"Cities Population 1991"},{x:63,y:120,text:"Cities Population 2001"},{x:-57,y:0,text:"Cities Population 2011"}],rainMonthsName:[{name:"Jan"},{name:"Feb"},{name:"Mar"},{name:"Apr"},{name:"May"},{name:"Jun"},{name:"Ju"},{name:"Aug"},{name:"Sep"},{name:"Oct"},{name:"Nov"},{name:"Dec"}],yearSelector:[{name:1990},{name:1995},{name:2e3},{name:2005},{name:2010},{name:2013}]},B=t=>l.scaleLinear().domain([0,4]).range([0,2*Math.PI])(t),I=Math.max,E=Math.sin,b=Math.cos,k=Math.PI/2,S=(t,e,r,a,n,s,i)=>{const o=a.cityLables,c=a.ellipseContainer,p=a.groupOne,d=a.groupTwo,u=a.groupThree,A=a.lables,f=a.rainGroup,y=120,h=[i.transform.animVal[0].matrix.e,i.transform.animVal[0].matrix.f];let m=i.id;o.selectAll("text").remove(),n.selectAll("circle").classed("clicked",!1),n.select(i).classed("clicked",!0);let x=n.transition().ease(n.easePoly).duration(1e3);n.transition().ease(n.easePoly).duration(1e3);let g=c.selectAll("ellipse").data(w.ellipsesLength);g.exit().remove(),g.select("ellipse").data(w.ellipsesLength).enter().append("ellipse").attr("class","ellipseCan").attr("cx",(function(t,e){return h[0]+y*Math.cos(B(e))})).attr("cy",(function(t,e){return h[1]+y*Math.sin(B(e))})).transition(x).attr("rx",(function(t){return t.size})).attr("ry",(function(t){return t.size})).attr("fill","#061621").style("stroke",(function(t){return"none"===t.f?t.s:"url(#Gradient)"})).style("stroke-width","1.5px").style("filter","url(#graph-drop-shadow)"),o.selectAll("text").data(w.ellipsesLength).enter().append("text").attr("x",(function(t,e){return h[0]+y*Math.cos(B(e))})).attr("y",(function(t,e){return h[1]+y*Math.sin(B(e))-20})).text((function(t,e){if(e<=2)return m})).attr("text-anchor","middle").style("fill","#9c3c41").style("font-size","8pt"),n.scaleLinear().domain([0,63]).range([70,0]),((t,e,r,a,n,l,s,i,o,c,p,d)=>{const u=o.arc().innerRadius(60).outerRadius((function(t){return A(t.data)})),A=o.scaleLinear().domain([+t.data[0].Min2011,+t.data[0].Max2011]).range([62,70]),f=o.scaleSequential().domain([+t.data[0].Min1991,+t.data[0].Max1991]).interpolator(o.interpolateBuPu),y=t.data.map((t=>t.City));let h={popOne:0,popTwo:0,popThree:0};for(let m=0;m<3;m++){let x,g;0===m?(x=t.data.map((t=>+t.Population1991)),g=e):1===m?(x=t.data.map((t=>+t.Population2001)),g=r):2===m&&(x=t.data.map((t=>+t.Population2011)),g=a),x.splice(0,2);const C=o.pie()(x),v=t.data.map((t=>+t.Population1991)),w=g.selectAll("path").data(v);w.exit().remove(),w.select("path").data(C).enter().append("path").attr("d",u).style("fill",(function(e,r){return c===y[r]?(h.popOne=t.data[r].Population1991,h.popTwo=t.data[r].Population2001,h.popThree=t.data[r].Population2011,"#9C3C41"):f(x[r])})).style("stroke-width","none").transition().ease(o.easePoly).duration(1e3).attrTween("d",E);const B=n+l[0]+s*Math.cos(p(m)),I=l[1]+s*Math.sin(p(m));function E(t){const e=o.interpolateNumber(70,60);return function(r){const a=e(r);return o.arc().outerRadius((function(t){return A(t.data)})).innerRadius(a)(t)}}g.attr("transform","translate("+B+","+I+")"),i.attr("transform","translate("+(B+110)+","+I+")");let b=i.selectAll("text").data(d),k=o.format(",");b.exit().remove(),b.select("text").data(d).enter().append("text").attr("x",(function(t){return t.x})).attr("y",(function(t){return t.y+5})).text((function(t){return t.text})).attr("width",20).attr("fill","#B0B2B8").attr("font-size",11).style("opacity",1),b.select("text").data(d).enter().append("text").attr("x",(function(t){return"NaN"===k(h.popOne)||"NaN"===k(h.popTwo)||"NaN"===k(h.popThree)?t.x-20:t.x-28})).attr("y",(function(t){return t.y+25})).text((function(t,e){switch(e){case 0:return"NaN"===k(h.popOne)?"Data Missing":k(h.popOne);case 1:return"NaN"===k(h.popTwo)?"Data Missing":k(h.popTwo);case 2:return"NaN"===k(h.popThree)?"Data Missing":k(h.popThree);default:return k(0)}})).attr("width",20).style("fill","#E4E5E7").style("font-size",11)}})(t,p,d,u,s,h,y,A,n,m,B,w.rectsLength);let C=s+h[0]+y*Math.cos(B(3))-125,v=h[1]+y*Math.sin(B(3))-125;f.attr("transform","translate("+C+","+v+")").style("opacity",1);let S={color:"#cd1d27",name:m,axes:[{}]};e.data.map(((t,e)=>(t.Station===m&&S.axes.push({value:+t[`MonthlyTotal${r}`],axis:w.rainMonthsName[e%12].name}),null))),S.axes.splice(0,1);const T={w:90,h:150,margin:{top:50,right:80,bottom:50,left:80},levels:2,roundStrokes:!1,color:n.scaleOrdinal().range(["#9C3C41","#12393D","#9C3C41"]),format:".1f"};!function(t,e,r){const a={w:600,h:600,margin:{top:20,right:20,bottom:20,left:20},levels:3,maxValue:0,labelFactor:1.55,wrapWidth:60,opacityArea:.8,dotRadius:2,opacityCircles:1,strokeWidth:.8,roundStrokes:!1,color:l.scaleOrdinal(l.schemeCategory10),format:".2%",unit:"mm",legend:!1};if(void 0!==r)for(var n in r)void 0!==r[n]&&(a[n]=r[n]);let s=0;for(let t=0;t<e.axes.length;t++)e.axes[t].id=e.name,e.axes[t].value>s&&(s=e.axes[t].value);s=I(a.maxValue,s);const i=e.axes.map(((t,e)=>t.axis)),o=i.length,c=Math.min(a.w/2,a.h/2),p=l.format(a.format),d=2*Math.PI/o,u=l.scaleLinear().range([0,c]).domain([0,s]),A=l.select(t);A.select("svg").remove();let f=A.append("svg").attr("width",a.w+a.margin.left+a.margin.right).attr("height",a.h+a.margin.top+a.margin.bottom).attr("class","radar"),y=f.append("g").attr("transform","translate("+(a.w/2+a.margin.left)+","+(a.h/2+a.margin.top)+")"),h=y.append("defs").append("filter").attr("id","glow");h.append("feGaussianBlur").attr("stdDeviation","2.5").attr("result","coloredBlur");let m=h.append("feMerge");m.append("feMergeNode").attr("in","coloredBlur"),m.append("feMergeNode").attr("in","SourceGraphic");let x=y.append("g").attr("class","axisWrapper");x.selectAll(".levels").data(l.range(1,a.levels+1).reverse()).enter().append("circle").attr("class","gridCircle").attr("r",(t=>c/a.levels*t)).style("fill","#CDCDCD").style("stroke","#CDCDCD").style("fill-opacity",a.opacityCircles).style("filter","url(#glow)"),x.selectAll(".axisLabel").data(l.range(1,a.levels+1).reverse()).enter().append("text").attr("class","axisLabel").attr("x",4).attr("y",(t=>-t*c/a.levels)).attr("dy","0.4em").style("font-size","10px").attr("fill","#737373").text((t=>p(s*t/a.levels)+a.unit));var g=x.selectAll(".axis").data(i).enter().append("g").attr("class","axis");g.append("line").attr("x1",0).attr("y1",0).attr("x2",((t,e)=>u(1.1*s)*b(d*e-k))).attr("y2",((t,e)=>u(1.1*s)*E(d*e-k))).attr("class","line").style("stroke","white").style("stroke-width","2px"),g.append("text").attr("class","legend").style("font-size","8px").attr("text-anchor","middle").attr("dy","0.35em").attr("x",((t,e)=>u(s*a.labelFactor)*b(d*e-k))).attr("y",((t,e)=>u(s*a.labelFactor)*E(d*e-k))).text((t=>t)).call(((t,e)=>{t.each((function(){for(var t,r=l.select(this),a=r.text().split(/\s+/).reverse(),n=[],s=0,i=r.attr("y"),o=r.attr("x"),c=parseFloat(r.attr("dy")),p=r.text(null).append("tspan").attr("x",o).attr("y",i).attr("dy",c+"em");t=a.pop();)n.push(t),p.text(n.join(" ")),p.node().getComputedTextLength()>e&&(n.pop(),p.text(n.join(" ")),n=[t],p=r.append("tspan").attr("x",o).attr("y",i).attr("dy",1.4*++s+c+"em").text(t))}))}),a.wrapWidth);var C=l.radialLine().curve(l.curveLinearClosed).radius((t=>u(t.value))).angle(((t,e)=>e*d));a.roundStrokes&&C.curve(l.curveCardinalClosed);var v=y.selectAll(".radarWrapper").data(e).enter().append("g").attr("class","radarWrapper");v.append("path").attr("class","radarArea").attr("d",(t=>C(t.axes))).style("fill",((t,e)=>a.color(e))).style("fill-opacity",a.opacityArea).on("mouseover",(function(t,e){A.selectAll(".radarArea").transition().duration(200).style("fill-opacity",.1),l.select(this).transition().duration(200).style("fill-opacity",.7)})).on("mouseout",(()=>{A.selectAll(".radarArea").transition().duration(200).style("fill-opacity",a.opacityArea)})),v.append("path").attr("class","radarStroke").attr("d",(function(t,e){return C(t.axes)})).style("stroke-width",a.strokeWidth+"px").style("stroke",((t,e)=>a.color(e))).style("fill","none").style("filter","url(#glow)"),v.selectAll(".radarCircle").data((t=>t.axes)).enter().append("circle").attr("class","radarCircle").attr("r",a.dotRadius).attr("cx",((t,e)=>u(t.value)*b(d*e-k))).attr("cy",((t,e)=>u(t.value)*E(d*e-k))).style("fill",(t=>a.color(t.id))).style("fill-opacity",.8),y.selectAll(".radarCircleWrapper").data(e).enter().append("g").attr("class","radarCircleWrapper").selectAll(".radarInvisibleCircle").data((t=>t.axes)).enter().append("circle").attr("class","radarInvisibleCircle").attr("r",1.5*a.dotRadius).attr("cx",((t,e)=>u(t.value)*b(d*e-k))).attr("cy",((t,e)=>u(t.value)*E(d*e-k))).style("fill","none").style("pointer-events","all").on("mouseover",(function(t,e){w.attr("x",this.cx.baseVal.value-10).attr("y",this.cy.baseVal.value-10).transition().style("display","block").text(p(t.value)+a.unit)})).on("mouseout",(function(){w.transition().style("display","none").text("")}));const w=y.append("text").attr("class","tooltip").attr("x",0).attr("y",0).style("font-size","12px").style("display","none").attr("text-anchor","middle").attr("dy","0.35em");if(!1!==a.legend&&"object"==typeof a.legend){let t=f.append("g"),r=e.map((t=>t.name));a.legend.title&&t.append("text").attr("class","title").attr("transform",`translate(${a.legend.translateX},${a.legend.translateY})`).attr("x",a.w-70).attr("y",10).attr("font-size","12px").attr("fill","#404040").text(a.legend.title);let n=t.append("g").attr("class","legend").attr("height",100).attr("width",200).attr("transform",`translate(${a.legend.translateX},${a.legend.translateY+20})`);n.selectAll("rect").data(r).enter().append("rect").attr("x",a.w-65).attr("y",((t,e)=>20*e)).attr("width",10).attr("height",10).style("fill",((t,e)=>a.color(e))),n.selectAll("text").data(r).enter().append("text").attr("x",a.w-52).attr("y",((t,e)=>20*e+9)).attr("font-size","11px").attr("fill","#737373").text((t=>t))}}(".rainG",S,T)},T=(t,e,r,a,n,l,s,i)=>{let o=t.append("defs").append("filter").attr("id",e).attr("height",r).attr("width",a);o.append("feGaussianBlur").attr("in","SourceAlpha").attr("stdDeviation",n),o.append("feOffset").attr("dx",l).attr("dy",s).attr("result","offsetBlur"),o.append("feComponentTransfer").append("feFuncA").attr("type","linear").attr("slope",i);let c=o.append("feMerge");c.append("feMergeNode"),c.append("feMergeNode").attr("in","SourceGraphic")},M=(t,e,r,a,n,s)=>{let i=e.current,o=0,c=0;i&&(o=i.clientWidth,c=i.clientHeight);let p=o,d=c,u="2013",A=v(0,t);for(;!A;)A=v(0,t);(t=>{var e=t.append("defs").append("linearGradient").attr("id","Gradient").attr("gradientTransform","rotate(180)");e.append("stop").attr("class","stop-left").attr("offset","0"),e.append("stop").attr("class","stop-right").attr("offset","1")})(t),(t=>{t.append("defs").append("filter").attr("id","blurFilter").append("feGaussianBlur").attr("stdDeviation",20)})(t),T(t,"drop-shadow","330%","330%",3,10,10,.3),T(t,"graph-drop-shadow","130%","130%",6,0,0,1),T(t,"legend-drop-shadow","330%","330%",1,10,5,.2),l.json("./data/GeoJson/jsonformatter.JSON").then((async t=>{try{console.log(t)}catch(t){console.error(`Error while reading the geoJSON: ${t}`)}})),i&&function(){const e=r.data.map((t=>t.Sum2013));let i=l.min(e),o=l.max(e),c=l.scaleLinear().domain([i,o]).range([6,24]);t.attr("width",p).attr("height",d),A.mapContainer.attr("transform","translate(-100,0)"),A.legendGraph.attr("transform","translate(165 ,"+d+")"),A.ellipseContainer.selectAll("ellipse").data(w.ellipsesLength).enter().append("ellipse").attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})).attr("rx",0).attr("ry",0),A.cityCircles.attr("transform","translate(-100,0)"),A.cityLables.attr("transform","translate(-100,0)"),A.ellipseContainer.attr("transform","translate(-100,0)");let f=[];const y=r.data.map((t=>t.Sum2013)).sort(l.descending);f.push(y[0]),f.push(y[y.length/2]),f.push(y[y.length-1]),A.legendGraph.selectAll("circle").data(f).enter().append("circle").attr("class","cities-circles").attr("transform",((t,e)=>"translate(0,"+-c(t)+")")).attr("r",(t=>c(t))),A.legendGraph.selectAll("line").data(f).enter().append("line").attr("transform",(function(t,e){return"translate(0,"+2*-c(t)+")"})).attr("x1",0).attr("y1",0).attr("x1",(function(t,e){return 50*e+50})).attr("y1",1).style("stroke","white"),A.legendGraph.selectAll("text").data(f).enter().append("text").attr("transform",(function(t,e){return"translate("+(50*e+52)+","+(2*-c(t)-3)+")"})).text((function(t){return t+"mm"})).style("font-size","6pt").style("fill","white"),A.cityCircles.selectAll("circle").data(r.data).enter().append("circle").attr("id",(t=>t.Station)).attr("class","cities-circles").attr("transform",(t=>{const e=(r=[+t.longitude,+t.latitude],l.geoEquirectangular().scale(5100).translate([-7565,2478])(r));var r;return`translate(${e[0]},${e[1]})`})).attr("r",(t=>c(t.Sum2013))).on("mouseover",(function(t){l.select(this).classed("active",!0)})).on("mouseout",(function(t){l.select(this).classed("active",!1)})).on("click",(function(){S(n,s,u,A,l,-100,this)})),((t,e,r)=>{const a=e.yearsSlums,n=e.lableSlums,l=t.data.map((t=>({year:t.year,value:t.number})));n.attr("transform","translate(100,20)"),a.attr("transform","translate(150,20)"),a.selectAll("rect").data(l).enter().append("rect").attr("transform",(function(t,e){return"translate("+e*r+",10)"})).attr("width",2).attr("height",0).style("fill","#7a9193"),a.selectAll("text").data(l).enter().append("text").attr("transform",(function(t,e){return"translate("+(e*r+30)+",60)"})).text((function(t){return"% "+t.value})).style("text-anchor","middle").style("opacity",0).style("fill","#9C3C41").style("font-size","8pt"),n.append("text").attr("transform","translate(-100,60)").text("Slums Population").style("fill","#9C3C41").style("font-size","8pt")})(a,A,80),A.yearsContainer.attr("transform","translate(150,20)"),A.yearsContainer.selectAll("text").data(w.yearSelector).enter().append("text").attr("x",(function(t,e){return 80*e})).attr("y",0).text((function(t){return t.name})).attr("id",(function(t){return t.name})).attr("text-anchor","middle").attr("font-size",12).on("mouseover",(function(t){let e=this.id;l.select(this).classed("active",!0),A.yearsSlums.selectAll("rect").transition().duration(500).attr("height",(function(t,e){return((t,e)=>l.scaleLinear().domain([e.data[0].min,e.data[0].max]).range([20,100])(t))(+t.value,a)})),A.yearsSlums.selectAll("text").transition().delay(500).duration(100).style("opacity",(function(t){return t.year===e?1:0}))})).on("mouseout",(function(t){l.select(this).classed("active",!1),A.yearsSlums.selectAll("rect").transition().duration(500).attr("height",0),A.yearsSlums.selectAll("text").transition().delay(500).duration(100).style("opacity",0)})).on("click",(function(e){((t,e,r)=>{const a=r.cityLables,n=r.ellipseContainer,l=r.groupOne,s=r.groupTwo,i=r.groupThree,o=r.lables,c=r.cityCircles;a.selectAll("text").remove(),n.selectAll("ellipse").transition().duration(500).attr("rx","0").attr("ry","0");let p=l.selectAll("path");function d(e){let r=t.interpolateNumber(70,0);return function(a){let n=r(a);return t.arc().outerRadius(n-2).innerRadius(n)(e)}}p.transition().ease(t.easePoly).duration(1e3).attrTween("d",d).style("opacity",0),p=s.selectAll("path"),p.transition().ease(t.easePoly).duration(1e3).attrTween("d",d).style("opacity",0),p=i.selectAll("path"),p.transition().ease(t.easePoly).duration(1e3).attrTween("d",d).style("opacity",0),e.select(".rainG").transition().duration(500).style("opacity",0),o.selectAll("text").transition().duration(500).style("opacity",0),c.selectAll("circle").classed("clicked",!1)})(l,t,A),((t,e)=>{e.selectAll("text").attr("font-size",12).style("fill","white"),l.select(t).attr("font-size",24).style("fill","#9C3C41")})(this,A.yearsContainer);const a=this.id;C(l,r,a,0,i,o,A)})),((t,e,r)=>{const a=r.ellipseContainer,n=r.groupOne,l=r.groupTwo,s=r.groupThree,i=r.lables,o=r.cityCircles;r.cityLables.selectAll("text").remove(),a.selectAll("ellipse").transition().duration(500).attr("rx",0).attr("ry",0);let c=n.selectAll("path");function p(e){let r=t.interpolateNumber(70,0);return function(a){let n=r(a);return t.arc().outerRadius(n-2).innerRadius(n)(e)}}c.transition().ease(t.easePoly).duration(1e3).attrTween("d",p).style("opacity",0),c=l.selectAll("path"),c.transition().ease(t.easePoly).duration(1e3).attrTween("d",p).style("opacity",0),c=s.selectAll("path"),c.transition().ease(t.easePoly).duration(1e3).attrTween("d",p).style("opacity",0),e.select(".rainG").transition().duration(500).style("opacity",0),i.selectAll("text").transition().duration(500).style("opacity",0),o.selectAll("circle").classed("clicked",!1)})(l,t,A),C(l,r,2013,0,i,o,A),l.selectAll("g").raise()}()};var z=r(9226),G=r(7175);const P=function(){const{dataStore:{annualrain:t,slums:e,population:r,months:l,refresh:s}}=(0,z.v9)((t=>t)),i=(0,z.I0)(),o=(0,a.useRef)(null),[c,p]=(0,a.useState)(!1),[d,u]=(0,a.useState)(null);return(0,a.useEffect)((()=>{"empty"!==t.state&&"rejected"!==t.state||i((0,G.bd)()),"empty"!==e.state&&"rejected"!==e.state||i((0,G.WZ)()),"empty"!==r.state&&"rejected"!==r.state||i((0,G.FX)()),"empty"!==l.state&&"rejected"!==l.state||i((0,G.bh)())}),[s,t.state,e.state,r.state,l.state,i]),(0,a.useEffect)((()=>{"fulfilled"===t.state&&"fulfilled"===e.state&&"fulfilled"===r.state&&"fulfilled"===l.state&&p(!0)}),[t.state,e.state,r.state,l.state]),(0,a.useEffect)((()=>{!d&&c&&u((0,n.Z)(o.current)),t.data.length>0&&d&&M(d,o,t,e,r,l)}),[d,c,t,e,r,l]),a.createElement("div",{style:{width:"100%",height:"100%"}},a.createElement("svg",{style:{width:"100%",height:"100%"},ref:o}))}},9439:(t,e,r)=>{r.d(e,{Z:()=>i});var a=r(4015),n=r.n(a),l=r(3645),s=r.n(l)()(n());s.push([t.id,'.stop-left {\r\n    stop-color: #426164;\r\n}\r\n\r\n.stop-right {\r\n    stop-color: #061621;\r\n}\r\n#Script-Container {\r\n    /* box-sizing: border-box; */\r\n    position: relative;\r\n    /* left: -120px; */\r\n    top: 55px;\r\n    width: 100%;\r\n    height: 920px;\r\n    /* padding: 25px; */\r\n}\r\n\r\ntext {\r\n    /* font-family: "imported-Azo-Medium"; */\r\n    color: #E4E5E7;\r\n}\r\n\r\npath {\r\n    fill: #E4E5E7;\r\n    stroke: none;\r\n    stroke-width: .5px;\r\n    box-shadow: 2px 2px 15px rgba(0, 0, 0, .5);\r\n}\r\n\r\n.cities-circles {\r\n    fill: url(#Gradient);\r\n    stroke: url(#Gradient);\r\n    stroke-width: 1.5px;\r\n    fill-opacity: .7;\r\n    z-index: -1;\r\n    transition: .5s;\r\n    filter: url(#legend-drop-shadow);\r\n}\r\n\r\n.cities-circles.clicked {\r\n    fill: #9C3C41;\r\n    fill-opacity: 1;\r\n    r: 10;\r\n}\r\n\r\n.cities-circles.active {\r\n    fill: #5C3B42;\r\n    r: 10;\r\n}\r\n\r\npath.active {\r\n    fill: pink;\r\n}\r\n\r\n.ellipseCan {\r\n    width: 100px;\r\n    height: 100px;\r\n    stroke-width: .3;\r\n    opacity: .9;\r\n}\r\n\r\n.year-container text {\r\n    cursor: pointer;\r\n    fill: #E4E5E7;\r\n}\r\n\r\n.year-container text.active {\r\n    fill: #5C3B42;\r\n}\r\n\r\n.legend-circles {\r\n    fill: url(#Gradient);\r\n    opacity: .5;\r\n    stroke: url(#Gradient);\r\n    stroke-width: 1.5px;\r\n    filter: url(#legend-drop-shadow);\r\n}\r\n\r\n.legend tspan {\r\n    fill: #E4E5E7;\r\n}\r\n\r\n.node text {\r\n    display: none;\r\n    font: 10px sans-serif;\r\n}\r\n\r\n.node:hover text {\r\n    display: inline;\r\n}',"",{version:3,sources:["webpack://./txsrc/views/Pages/D3/style.css"],names:[],mappings:"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,4BAA4B;IAC5B,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,wCAAwC;IACxC,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,0CAA0C;AAC9C;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,KAAK;AACT;;AAEA;IACI,aAAa;IACb,KAAK;AACT;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,WAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB",sourcesContent:['.stop-left {\r\n    stop-color: #426164;\r\n}\r\n\r\n.stop-right {\r\n    stop-color: #061621;\r\n}\r\n#Script-Container {\r\n    /* box-sizing: border-box; */\r\n    position: relative;\r\n    /* left: -120px; */\r\n    top: 55px;\r\n    width: 100%;\r\n    height: 920px;\r\n    /* padding: 25px; */\r\n}\r\n\r\ntext {\r\n    /* font-family: "imported-Azo-Medium"; */\r\n    color: #E4E5E7;\r\n}\r\n\r\npath {\r\n    fill: #E4E5E7;\r\n    stroke: none;\r\n    stroke-width: .5px;\r\n    box-shadow: 2px 2px 15px rgba(0, 0, 0, .5);\r\n}\r\n\r\n.cities-circles {\r\n    fill: url(#Gradient);\r\n    stroke: url(#Gradient);\r\n    stroke-width: 1.5px;\r\n    fill-opacity: .7;\r\n    z-index: -1;\r\n    transition: .5s;\r\n    filter: url(#legend-drop-shadow);\r\n}\r\n\r\n.cities-circles.clicked {\r\n    fill: #9C3C41;\r\n    fill-opacity: 1;\r\n    r: 10;\r\n}\r\n\r\n.cities-circles.active {\r\n    fill: #5C3B42;\r\n    r: 10;\r\n}\r\n\r\npath.active {\r\n    fill: pink;\r\n}\r\n\r\n.ellipseCan {\r\n    width: 100px;\r\n    height: 100px;\r\n    stroke-width: .3;\r\n    opacity: .9;\r\n}\r\n\r\n.year-container text {\r\n    cursor: pointer;\r\n    fill: #E4E5E7;\r\n}\r\n\r\n.year-container text.active {\r\n    fill: #5C3B42;\r\n}\r\n\r\n.legend-circles {\r\n    fill: url(#Gradient);\r\n    opacity: .5;\r\n    stroke: url(#Gradient);\r\n    stroke-width: 1.5px;\r\n    filter: url(#legend-drop-shadow);\r\n}\r\n\r\n.legend tspan {\r\n    fill: #E4E5E7;\r\n}\r\n\r\n.node text {\r\n    display: none;\r\n    font: 10px sans-serif;\r\n}\r\n\r\n.node:hover text {\r\n    display: inline;\r\n}'],sourceRoot:""}]);const i=s}};