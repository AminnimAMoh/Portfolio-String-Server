"use strict";(self.webpackChunkmamp_frontend=self.webpackChunkmamp_frontend||[]).push([[426],{3754:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});const r=(t,e,n,r,l,a,c)=>{const s=c.cityCircles,i=c.legendGraph,o=e.data.map((t=>+t[`Sum${n}`]));l=t.min(o),a=t.max(o);const u=t.scaleLinear().domain([l,a]).range([4,24]);let d=s.selectAll("circle").data(o);d.exit().remove(),d.enter().append("circle").attr("r",0),d.select("circle").data(o).enter().selectAll("circle").attr("class","cities-circles").transition().duration(500).attr("r",(function(t){return u(t)}));let m=[],f=o.sort(t.descending);m.push(f[0]),m.push(f[f.length/2]),m.push(f[f.length-1]);const p=i.selectAll("line").data(m);p.exit().remove();const h=i.selectAll("circle").data(m);h.exit().remove();const x=i.selectAll("text").data(m);x.exit().remove(),h.select("circle").data(m).enter().selectAll("circle").transition().duration(500).attr("transform",(function(t,e){return"translate(0,"+-u(t)+")"})).attr("r",(function(t){return u(t)})),p.select("line").data(m).enter().selectAll("line").transition().duration(500).attr("transform",(function(t,e){return"translate(0,"+2*-u(t)+")"})),x.select("text").data(m).enter().selectAll("text").attr("transform",(function(t,e){return"translate("+(50*e+52)+","+(2*-u(t)-3)+")"})).text((t=>t+"mm")).style("font-size","6pt").style("fill","white")}}}]);