"use strict";(self.webpackChunkmamp_frontend=self.webpackChunkmamp_frontend||[]).push([[685],{6525:(e,t,l)=>{l.r(t),l.d(t,{default:()=>a});const a=(e,t,l)=>{const a=l.cityLables,n=l.ellipseContainer,r=l.groupOne,s=l.groupTwo,i=l.groupThree,o=l.lables,c=l.cityCircles;a.selectAll("text").remove(),n.selectAll("ellipse").transition().duration(500).attr("rx","0").attr("ry","0");let u=r.selectAll("path");function p(t){let l=e.interpolateNumber(70,0);return function(a){let n=l(a);return e.arc().outerRadius(n-2).innerRadius(n)(t)}}u.transition().ease(e.easePoly).duration(1e3).attrTween("d",p).style("opacity",0),u=s.selectAll("path"),u.transition().ease(e.easePoly).duration(1e3).attrTween("d",p).style("opacity",0),u=i.selectAll("path"),u.transition().ease(e.easePoly).duration(1e3).attrTween("d",p).style("opacity",0),t.select(".rainG").transition().duration(500).style("opacity",0),o.selectAll("text").transition().duration(500).style("opacity",0),c.selectAll("circle").classed("clicked",!1)}}}]);