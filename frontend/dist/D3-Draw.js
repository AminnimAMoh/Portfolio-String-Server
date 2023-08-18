"use strict";exports.id=851,exports.ids=[851],exports.modules={1302:(t,e,n)=>{n.d(e,{G:()=>r});const r={ellipsesLength:[{size:70,f:"#E4E5E7",s:"none"},{size:70,f:"#E4E5E7",s:"none"},{size:70,f:"#E4E5E7",s:"none"},{size:82,f:"#E4E5E7",s:"none"},{size:60,f:"none",s:"black"},{size:60,f:"none",s:"black"},{size:60,f:"none",s:"black"},{size:80,f:"none",s:"none"}],rectsLength:[{x:183,y:0,text:"Cities Population 1991"},{x:63,y:120,text:"Cities Population 2001"},{x:-57,y:0,text:"Cities Population 2011"}],rainMonthsName:[{name:"Jan"},{name:"Feb"},{name:"Mar"},{name:"Apr"},{name:"May"},{name:"Jun"},{name:"Ju"},{name:"Aug"},{name:"Sep"},{name:"Oct"},{name:"Nov"},{name:"Dec"}],yearSelector:[{name:1990},{name:1995},{name:2e3},{name:2005},{name:2010},{name:2013}]}},3857:(t,e,n)=>{n.r(e),n.d(e,{default:()=>B});var r=n(9197),a=n(869),i=n.n(a),l=n(8947),s=n.n(l),o=n(6041),A=n.n(o),p=n(340),d=n.n(p),c=n(807),u=n.n(c),f=n(5691),h=n.n(f),C=n(9753),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=A().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=u(),i()(C.Z,g),C.Z&&C.Z.locals&&C.Z.locals;const m=(t,e)=>({mapContainer:e.append("g").attr("id","map-container-group"),yearsContainer:e.append("g").attr("class","year-container"),yearsSlums:e.append("g").attr("class","year-slumes"),lableSlums:e.append("g").attr("class","lable-slumes"),cityCircles:e.append("g").attr("id","city-indicators"),legendGraph:e.append("g").attr("id","graph-legend-group"),ellipseContainer:e.append("g").attr("id","ellipse-group"),cityLables:e.append("g").attr("id","city-Lable"),groupOne:e.append("g").attr("id","population-groupOne"),groupTwo:e.append("g").attr("id","population-groupTwo"),groupThree:e.append("g").attr("id","population-groupThree"),lables:e.append("g").attr("id","graph-lables"),rainGroup:e.append("g").attr("class","rainG")});var x=n(1302);const y=(t,e,n,r,a,i,l,s)=>{let o=t.append("defs").append("filter").attr("id",e).attr("height",n).attr("width",r);o.append("feGaussianBlur").attr("in","SourceAlpha").attr("stdDeviation",a),o.append("feOffset").attr("dx",i).attr("dy",l).attr("result","offsetBlur"),o.append("feComponentTransfer").append("feFuncA").attr("type","linear").attr("slope",s);let A=o.append("feMerge");A.append("feMergeNode"),A.append("feMergeNode").attr("in","SourceGraphic")};var I=n(1802);const B=(t,e,a,i,l,s,o)=>{let A=e.current,p=0,d=0;A&&(p=A.clientWidth,d=A.clientHeight);let c=p,u=d,f="2013",h=m(0,t);for(;!h;)h=m(0,t);(t=>{var e=t.append("defs").append("linearGradient").attr("id","Gradient").attr("gradientTransform","rotate(180)");e.append("stop").attr("class","stop-left").attr("offset","0"),e.append("stop").attr("class","stop-right").attr("offset","1")})(t),(t=>{t.append("defs").append("filter").attr("id","blurFilter").append("feGaussianBlur").attr("stdDeviation",20)})(t),y(t,"drop-shadow","330%","330%",3,10,10,.3),y(t,"graph-drop-shadow","130%","130%",6,0,0,1),y(t,"legend-drop-shadow","330%","330%",1,10,5,.2);let C=[];if(o){console.log(o);for(let t=0;t<o.features.length;t++)C.push(o.features[t].properties.NAME_4);h.mapContainer.selectAll("path").data(o.features).enter().append("path").attr("d",(t=>(0,I.zW)(t)))}A&&function(){const e=a.data.map((t=>t.Sum2013));let o=r.min(e),A=r.max(e),p=r.scaleLinear().domain([o,A]).range([6,24]);t.attr("width",c).attr("height",u),h.mapContainer.attr("transform","translate(-100,0)"),h.legendGraph.attr("transform","translate(165 ,"+u+")"),h.ellipseContainer.selectAll("ellipse").data(x.G.ellipsesLength).enter().append("ellipse").attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})).attr("rx",0).attr("ry",0),h.cityCircles.attr("transform","translate(-100,0)"),h.cityLables.attr("transform","translate(-100,0)"),h.ellipseContainer.attr("transform","translate(-100,0)");let d=[];const C=a.data.map((t=>t.Sum2013)).sort(r.descending);d.push(C[0]),d.push(C[C.length/2]),d.push(C[C.length-1]),h.legendGraph.selectAll("circle").data(d).enter().append("circle").attr("class","cities-circles").attr("transform",((t,e)=>"translate(0,"+-p(t)+")")).attr("r",(t=>p(t))),h.legendGraph.selectAll("line").data(d).enter().append("line").attr("transform",(function(t,e){return"translate(0,"+2*-p(t)+")"})).attr("x1",0).attr("y1",0).attr("x1",(function(t,e){return 50*e+50})).attr("y1",1).style("stroke","white"),h.legendGraph.selectAll("text").data(d).enter().append("text").attr("transform",(function(t,e){return"translate("+(50*e+52)+","+(2*-p(t)-3)+")"})).text((function(t){return t+"mm"})).style("font-size","6pt").style("fill","white"),h.cityCircles.selectAll("circle").data(a.data).enter().append("circle").attr("id",(t=>t.Station)).attr("class","cities-circles").attr("transform",(t=>{const e=(0,I.Uc)([+t.longitude,+t.latitude]);return`translate(${e[0]},${e[1]})`})).attr("r",(t=>p(t.Sum2013))).on("mouseover",(function(t){r.select(this).classed("active",!0)})).on("mouseout",(function(t){r.select(this).classed("active",!1)})).on("click",(function(){n.e(193).then(n.bind(n,9)).then((({default:t})=>{t(l,s,f,h,r,-100,this)}))})),n.e(991).then(n.bind(n,4008)).then((({default:t})=>{t(i,h,80)})),h.yearsContainer.attr("transform","translate(150,20)"),h.yearsContainer.selectAll("text").data(x.G.yearSelector).enter().append("text").attr("x",(function(t,e){return 80*e})).attr("y",0).text((function(t){return t.name})).attr("id",(function(t){return t.name})).attr("text-anchor","middle").attr("font-size",12).on("mouseover",(function(t){let e=this.id;r.select(this).classed("active",!0),h.yearsSlums.selectAll("rect").transition().duration(500).attr("height",(function(t,e){return(0,I.Am)(+t.value,i)})),h.yearsSlums.selectAll("text").transition().delay(500).duration(100).style("opacity",(function(t){return t.year===e?1:0}))})).on("mouseout",(function(t){r.select(this).classed("active",!1),h.yearsSlums.selectAll("rect").transition().duration(500).attr("height",0),h.yearsSlums.selectAll("text").transition().delay(500).duration(100).style("opacity",0)})).on("click",(function(e){n.e(685).then(n.bind(n,6525)).then((({default:e})=>{e(r,t,h)})),(0,I.rY)(this,h.yearsContainer);const i=this.id;n.e(426).then(n.bind(n,3754)).then((({default:t})=>{t(r,a,i,f,o,A,h)}))})),n.e(815).then(n.bind(n,5008)).then((({default:e})=>{e(r,t,h)})),n.e(426).then(n.bind(n,3754)).then((({default:t})=>{t(r,a,2013,f,o,A,h)})),r.selectAll("g").raise()}()}},1802:(t,e,n)=>{n.d(e,{Am:()=>i,KF:()=>o,Uc:()=>s,rY:()=>a,zW:()=>l});var r=n(9197);const a=(t,e)=>{e.selectAll("text").attr("font-size",12).style("fill","white"),r.select(t).attr("font-size",24).style("fill","#9C3C41")},i=(t,e)=>r.scaleLinear().domain([e.data[0].min,e.data[0].max]).range([20,100])(t),l=t=>{const e=r.geoMercator().scale(5200).translate([-7720,2600]);return r.geoPath().projection(e)(t)},s=t=>r.geoEquirectangular().scale(5100).translate([-7565,2478])(t),o=t=>r.scaleLinear().domain([0,4]).range([0,2*Math.PI])(t)},9753:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(8133),a=n.n(r),i=n(3629),l=n.n(i)()(a());l.push([t.id,'.stop-left {\n    stop-color: #426164;\n}\n\n.stop-right {\n    stop-color: #061621;\n}\n#Script-Container {\n    /* box-sizing: border-box; */\n    position: relative;\n    /* left: -120px; */\n    top: 55px;\n    width: 100%;\n    height: 920px;\n    /* padding: 25px; */\n}\n\ntext {\n    /* font-family: "imported-Azo-Medium"; */\n    color: #E4E5E7;\n}\n\npath {\n    fill: #E4E5E7;\n    stroke: none;\n    stroke-width: .5px;\n    box-shadow: 2px 2px 15px rgba(0, 0, 0, .5);\n}\n\n.cities-circles {\n    fill: url(#Gradient);\n    stroke: url(#Gradient);\n    stroke-width: 1.5px;\n    fill-opacity: .7;\n    z-index: -1;\n    transition: .5s;\n    filter: url(#legend-drop-shadow);\n}\n\n.cities-circles.clicked {\n    fill: #9C3C41;\n    fill-opacity: 1;\n    r: 10;\n}\n\n.cities-circles.active {\n    fill: #5C3B42;\n    r: 10;\n}\n\npath.active {\n    fill: pink;\n}\n\n.ellipseCan {\n    width: 100px;\n    height: 100px;\n    stroke-width: .3;\n    opacity: .9;\n}\n\n.year-container text {\n    cursor: pointer;\n    fill: #E4E5E7;\n}\n\n.year-container text.active {\n    fill: #5C3B42;\n}\n\n.legend-circles {\n    fill: url(#Gradient);\n    opacity: .5;\n    stroke: url(#Gradient);\n    stroke-width: 1.5px;\n    filter: url(#legend-drop-shadow);\n}\n\n.legend tspan {\n    fill: #E4E5E7;\n}\n\n.node text {\n    display: none;\n    font: 10px sans-serif;\n}\n\n.node:hover text {\n    display: inline;\n}',"",{version:3,sources:["webpack://./txsrc/views/Pages/D3/style.css"],names:[],mappings:"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,4BAA4B;IAC5B,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,wCAAwC;IACxC,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,0CAA0C;AAC9C;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,KAAK;AACT;;AAEA;IACI,aAAa;IACb,KAAK;AACT;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,WAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB",sourcesContent:['.stop-left {\r\n    stop-color: #426164;\r\n}\r\n\r\n.stop-right {\r\n    stop-color: #061621;\r\n}\r\n#Script-Container {\r\n    /* box-sizing: border-box; */\r\n    position: relative;\r\n    /* left: -120px; */\r\n    top: 55px;\r\n    width: 100%;\r\n    height: 920px;\r\n    /* padding: 25px; */\r\n}\r\n\r\ntext {\r\n    /* font-family: "imported-Azo-Medium"; */\r\n    color: #E4E5E7;\r\n}\r\n\r\npath {\r\n    fill: #E4E5E7;\r\n    stroke: none;\r\n    stroke-width: .5px;\r\n    box-shadow: 2px 2px 15px rgba(0, 0, 0, .5);\r\n}\r\n\r\n.cities-circles {\r\n    fill: url(#Gradient);\r\n    stroke: url(#Gradient);\r\n    stroke-width: 1.5px;\r\n    fill-opacity: .7;\r\n    z-index: -1;\r\n    transition: .5s;\r\n    filter: url(#legend-drop-shadow);\r\n}\r\n\r\n.cities-circles.clicked {\r\n    fill: #9C3C41;\r\n    fill-opacity: 1;\r\n    r: 10;\r\n}\r\n\r\n.cities-circles.active {\r\n    fill: #5C3B42;\r\n    r: 10;\r\n}\r\n\r\npath.active {\r\n    fill: pink;\r\n}\r\n\r\n.ellipseCan {\r\n    width: 100px;\r\n    height: 100px;\r\n    stroke-width: .3;\r\n    opacity: .9;\r\n}\r\n\r\n.year-container text {\r\n    cursor: pointer;\r\n    fill: #E4E5E7;\r\n}\r\n\r\n.year-container text.active {\r\n    fill: #5C3B42;\r\n}\r\n\r\n.legend-circles {\r\n    fill: url(#Gradient);\r\n    opacity: .5;\r\n    stroke: url(#Gradient);\r\n    stroke-width: 1.5px;\r\n    filter: url(#legend-drop-shadow);\r\n}\r\n\r\n.legend tspan {\r\n    fill: #E4E5E7;\r\n}\r\n\r\n.node text {\r\n    display: none;\r\n    font: 10px sans-serif;\r\n}\r\n\r\n.node:hover text {\r\n    display: inline;\r\n}'],sourceRoot:""}]);const s=l}};