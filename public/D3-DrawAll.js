"use strict";(self.webpackChunkandramedian_design=self.webpackChunkandramedian_design||[]).push([[426],{3754:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});const r=(t,e,n,r,a,l,c)=>{const s=c.cityCircles,i=c.legendGraph,o=e.data.map((t=>+t[`Sum${n}`]));a=t.min(o),l=t.max(o);const d=t.scaleLinear().domain([a,l]).range([4,24]);let u=s.selectAll("circle").data(o);u.exit().remove(),u.enter().append("circle").attr("r",0),u.select("circle").data(o).enter().selectAll("circle").attr("class","cities-circles").transition().duration(500).attr("r",(function(t){return d(t)}));let m=[],f=o.sort(t.descending);m.push(f[0]),m.push(f[f.length/2]),m.push(f[f.length-1]);const p=i.selectAll("line").data(m);p.exit().remove();const h=i.selectAll("circle").data(m);h.exit().remove();const x=i.selectAll("text").data(m);x.exit().remove(),h.select("circle").data(m).enter().selectAll("circle").transition().duration(500).attr("transform",(function(t,e){return"translate(0,"+-d(t)+")"})).attr("r",(function(t){return d(t)})),p.select("line").data(m).enter().selectAll("line").transition().duration(500).attr("transform",(function(t,e){return"translate(0,"+2*-d(t)+")"})),x.select("text").data(m).enter().selectAll("text").attr("transform",(function(t,e){return"translate("+(50*e+52)+","+(2*-d(t)-3)+")"})).text((t=>t+"mm")).style("font-size","6pt").style("fill","white")}}}]);