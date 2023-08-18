"use strict";(self.webpackChunkmamp_frontend=self.webpackChunkmamp_frontend||[]).push([[817],{5817:(t,e,n)=>{n.r(e),n.d(e,{default:()=>R});var o=n(7378),i=n(527),r=n(416);const a=(0,i.Z)((t=>(0,r.Z)({root:{height:"100vh",display:"flex",flexFlow:"row-reverse",justifyContent:"center",alignItems:"center",[t.breakpoints.down("md")]:{flexFlow:"column"},"&.open":{paddingRight:t.spacing(20),[t.breakpoints.down("md")]:{paddingRight:t.spacing(0)}},"&.close":{paddingRight:0}},landinginfo:{position:"absolute"},Splash:{position:"absolute",width:"100%",height:"100%",padding:t.spacing(6),color:"white"},loading:{width:"100%",position:"absolute",top:0,zIndex:1},snackbar:{cursor:"pointer","& >*":{background:"#9c3c41"}}})));var s=n(9594),l=n(2236),d=n(9086),c=n(7772),p=n(837),u=n(9856);const g=(0,i.Z)((t=>({root:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"20%",zIndex:1,transition:"transform 1s ease-in",[t.breakpoints.down("md")]:{width:"100%",height:"20%",paddingTop:t.spacing(15)},[t.breakpoints.down("sm")]:{paddingTop:t.spacing(7)},[t.breakpoints.down("xs")]:{paddingTop:t.spacing(1)}},powerButton:{cursor:"pointer",zIndex:2,position:"relative",width:"100%",[t.breakpoints.down("md")]:{width:"18%"},[t.breakpoints.down("xs")]:{width:"25%"},"&>img":{width:"100%"},"&::before":{content:'""',display:"block",position:"absolute",zIndex:-1,top:"10%",bottom:0,left:"10%",right:0,width:"80%",height:"80%",borderRadius:"50%",opacity:1,filter:"blur(10px)",transition:"background-color 1s cubic-bezier(0, 1.51, 0.12, -0.29), -webkit-filter 2000ms cubic-bezier(0, 1.51, 0.12, -0.29)"},"&.open":{"&::before":{filter:"blur(15px)",transform:"scale(1.05)",backgroundColor:"#12393D"}},"&.close":{"&::before":{filter:"blur(5px)",backgroundColor:"#E4E5E7"}}},menuButtons:{position:"absolute"},buttonContainers:{position:"absolute",transition:"transform 1s ease-in-out"},iconButtons:{position:"relative",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:"50%",cursor:"pointer","&:hover, &:focus":{"&::after":{transform:"rotate(180deg) scale(1.1)",filter:"blur(3px)"},"&::before":{transform:"scale(1.2)",background:"rgba(18,57,61,.2)"}},"&::after":{content:'""',display:"block",position:"absolute",top:"0",right:0,bottom:0,left:"0",zIndex:-1,borderRadius:"inherit",width:"100%",height:"100%",transform:"scale(1.05)",background:"linear-gradient(155deg, rgba(122,145,147,1) 0%, rgba(6,22,33,1) 100%)",transition:"transform .5s ease-in, filter 500ms linear","-webkit-transition":"-webkit-filter 500ms linear, -webkit-transform .5s ease-in"},"&::before":{content:'""',display:"block",position:"absolute",top:"-1px",right:0,bottom:0,left:"-1px",zIndex:-2,borderRadius:"inherit",background:"rgba(0,0,0,.5)",filter:"blur(12px)",transition:"transform .2s ease-in-out"},"&.focused":{"&::before":{transform:"scale(1.2)",filter:"blur(12px)",background:"rgba(18,57,61,1)"}}},textOnPath:{position:"absolute","&>path":{transform:"translate(-693.7247px, -269.9313px)"},"&>text":{fill:"white"}},introTexts_container:{position:"absolute",width:"max-content",transform:"translate(0, -50%)",top:"50%",left:"100%",paddingLeft:t.spacing(2),zIndex:-3},introTexts_text:{position:"relative",zIndex:0,display:"block",color:"#e4e5e7",padding:t.spacing(1,1,1,2),"&::before":{content:'""',display:"block",position:"absolute",top:0,bottom:0,left:"-40%",right:0,zIndex:-3,borderRadius:"6px"},"&::after":{content:'""',display:"block",backgroundColor:"#061621",position:"absolute",transform:"scale(1.1)",top:0,bottom:0,left:"-30%",right:0,zIndex:1,transition:"width 1s ease-in-out 1.1s, transform 1s ease-in-out"},"&.open":{"&::after":{width:0,transform:"translateX(100%) scale(1.1)"}},"&.close":{"&::after":{width:"130%",transform:"translateX(0) scale(1.1)"}}}})));var m=n(5901),h=n(5551);const b=function(){const t=g(),e=(0,d.I0)(),n={rootState:(0,u.Z)("(min-width:1280px)"),phase:(0,u.Z)("(max-width:560px)")},i=(0,o.useRef)(null),{buttonAction:{rootState:r,delayState:a,data:s},screenAction:{screenState:l}}=(0,d.v9)((t=>t)),[c,{width:p}]=(0,m.Z)(),[b,f]=(0,o.useState)(!1),w=p;return o.createElement("div",{className:t.root,ref:i,style:"wide"!==l||r||a?"limited"!==l||r?{}:{paddingTop:0}:{paddingRight:0}},o.createElement("div",{className:b?`${t.powerButton} open`:`${t.powerButton} close`,onClick:()=>{var t,n;const o=null===(t=i.current)||void 0===t?void 0:t.childElementCount,a=null===(n=i.current)||void 0===n?void 0:n.children;if(o&&a)for(let t=1;t<o;t++)a[t].children[0].classList.remove("focused");r?(e((0,h.XH)("PowerButton")),setTimeout((()=>{e((0,h._j)())}),500)):f((()=>!b))}},o.createElement("img",{ref:c,src:"images/Button/Menu_Trigger/Power_Button-Stoke.png",alt:"content-asset"})),s.map(((r,a)=>{let{name:l,img:d,toolKit:c,info:p}=r;const{x:u,y:g}=((t,e,n,o,i)=>{if(i.rootState){const i=n/(o?1.5:3),r=2*Math.PI/e*t;return{x:i*Math.cos(r),y:i*Math.sin(r)}}{const r=i.phase?8:20,a=o?3:30,s=(2*Math.PI/e+2)*t,l=n/a;return{x:5*l*Math.cos(s)+l*Math.sin(s)*5-r,y:0}}})(a,s.length,w,b,n);return o.createElement("div",{key:l,className:t.buttonContainers,style:{transform:`translate(${u}px, ${g}px)`}},o.createElement("div",{id:l,className:t.iconButtons,style:{width:w/4,height:w/4,backgroundImage:`url(${d})`},onClick:t=>(t=>{var n,o;const r=t.currentTarget.id,a=null===(n=i.current)||void 0===n?void 0:n.childElementCount,s=null===(o=i.current)||void 0===o?void 0:o.children;if(a&&s)for(let t=1;t<a;t++)s[t].children[0].id===r?s[t].children[0].classList.add("focused"):s[t].children[0].classList.remove("focused");e((0,h.XH)(r))})(t)}))})))},f=(0,i.Z)((t=>({root:{width:"100%",height:"100%",opacity:1,transform:"translateX(-150%)",transition:"transform 1s ease-in-out .5s, width .5s ease, height .5s ease, padding .5s ease, opacity .5s ease .5s",overflowX:"hidden",overflowY:"auto",direction:"rtl",backgroundImage:"url(images/Containers/Content_Frame/Page-Frame-Light-Wave.png)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"right",padding:t.spacing(12,41,12,6),[t.breakpoints.down("lg")]:{padding:t.spacing(12,40,0,6)},[t.breakpoints.down("md")]:{backgroundImage:"none",padding:t.spacing(0,6,12)},"&.open":{transform:"translateX(0%)"},"&.open_vertically":{transform:"translateY(0%)"},"&.close_vertically":{transform:"translate(0%, 100%)",padding:0,opacity:0},"&.close":{padding:0,opacity:0}},MobileFrame:{display:"none",position:"sticky",height:"auto",top:"-5px",width:"100%",[t.breakpoints.down("md")]:{display:"block"}},scrollToTop:{position:"sticky",top:"100%",right:"0%",transform:"translateY(-15px) scale(0)",width:80,height:80,borderRadius:"50%",cursor:"pointer",transition:"transform .5s ease-in-out",[t.breakpoints.down("md")]:{transform:"translateY(-35px) scale(0)"},"& >div":{width:"100%",height:"100%",backgroundImage:"url(images/Button/ScrollToTop/Top.png)",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",zIndex:1,"&::before":{content:'""',display:"block",position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"#12393D",opacity:.8,borderRadius:"50%",width:80,height:80,filter:"blur(15px)",zIndex:-2,transition:"transform .5s ease-in-out, background-color 1s ease-in"},"&::after":{content:'""',display:"block",position:"absolute",top:"-1%",bottom:0,left:0,right:"-1%",width:"102%",height:"102%",background:"linear-gradient(163deg, rgba(156,60,65,1) 0%, rgba(18,57,61,1) 100%)",borderRadius:"50%",zIndex:-1,transition:"transform .5s ease-in-out .5s","-webkit-transition":"-webkit-filter 500ms linear, -webkit-transform .5s ease-in-out .5s"}},"&:hover, &:focus":{"&>div::before":{transform:"scale(1.5)",backgroundColor:"#9C3C41"},"&>div::after":{transform:"scale(1.1)",filter:"blur(1.5px)"}}}})));var w=n(9200),k=n(6370);const v=function(){const t=(0,k.Z)();return o.createElement("div",null,o.createElement(w.Z,{variant:"h3",className:t.topick_heading},"This page is temporary unavailable."))},x=o.lazy((()=>Promise.all([n.e(500),n.e(224)]).then(n.bind(n,6224)))),y=o.lazy((()=>Promise.all([n.e(500),n.e(942)]).then(n.bind(n,6942)))),E=o.lazy((()=>Promise.all([n.e(500),n.e(920)]).then(n.bind(n,1920)))),C=o.lazy((()=>n.e(950).then(n.bind(n,3950))));function I(t){switch(t.state){case"UX":return o.createElement(x,null);case"UI":return o.createElement(y,null);case"CV":return o.createElement(E,null);case"D3":return o.createElement(C,null);default:return o.createElement(v,null)}}const T=function(){const t=f(),e=(0,o.useRef)(null),n=(0,o.useRef)(null),{buttonAction:{rootState:i,delayState:r,renderPage:a},screenAction:{screenState:s}}=(0,d.v9)((t=>t));return o.createElement("div",{onScroll:()=>{e.current&&n.current&&e.current.scrollTop>800?n.current.style.transform=window.innerWidth>1280?"translateY(-15px) scale(1)":"translateY(-75px) scale(1)":n.current&&(n.current.style.transform=window.innerWidth>1280?"translateY(-15px) scale(0)":"translateY(-75px) scale(1)")},ref:e,className:i&&"wide"===s?`${t.root} open`:i&&"limited"===s?`${t.root} open_vertically`:!i&&r&&"wide"===s?`${t.root} close`:!i&&r&&"limited"===s||"limited"===s?`${t.root} close_vertically`:t.root,style:i&&!r&&"wide"===s?{width:"100%"}:!i&&r&&"wide"===s?{width:"0%"}:i&&!r&&"limited"===s?{height:"100%"}:!i&&r&&"limited"===s?{height:"0%"}:{}},o.createElement("div",{ref:n,className:t.scrollToTop,onClick:()=>{var t;null===(t=e.current)||void 0===t||t.scrollTo({top:0,behavior:"smooth"})}},o.createElement("div",null)),o.createElement("img",{src:"images/Containers/Content_Frame/Mobile.png",alt:"content",className:t.MobileFrame}),o.createElement(I,{state:a}))};function z(){return z=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},z.apply(this,arguments)}const _=o.lazy((()=>n.e(367).then(n.bind(n,6876))));function S(t){return o.createElement(l.Z,z({},t,{direction:"up"}))}const R=function(){const[t,e]=(0,o.useState)(!1),[n,i]=(0,o.useState)(!1),r=(0,d.I0)(),l=(0,u.Z)("(max-width:1280px)"),{buttonAction:{rootState:g,buttonTrigered:m},dataStore:{annualrain:h,slums:f,population:w,months:k}}=(0,d.v9)((t=>t)),v=a();return(0,o.useEffect)((()=>{l&&r((0,c.P)(window.innerWidth))}),[l]),(0,o.useEffect)((()=>{"fulfilled"===h.state&&"fulfilled"===f.state&&"fulfilled"===w.state&&"fulfilled"===k.state&&e(!0),("rejected"===h.state||"rejected"===f.state||"rejected"===w.state||"rejected"===k.state)&&i(!0)}),[h.state,f.state,w.state,k.state]),o.createElement("div",{className:g?`${v.root} open`:`${v.root} close`},!t&&"D3"===m&&o.createElement("div",{className:v.loading},o.createElement(_,null)),o.createElement(s.Z,{open:n,TransitionComponent:S,message:"Failed to fetch data. Click here to try again.",onClick:()=>{r((0,p.m0)()),i(!1)},classes:{root:v.snackbar}}),o.createElement(b,null),o.createElement(T,null))}},6370:(t,e,n)=>{n.d(e,{Z:()=>o});const o=(0,n(527).Z)((t=>({root:{width:"100%",display:"flex",flexFlow:"row-reverse",justifyContent:"center",alignItems:"center",transition:"transform 1s ease-in",marginLeft:0,marginRight:"auto",direction:"ltr"},topic_grid:{color:"white","& > .MuiGrid-item img":{width:"100%"},"&>*":{padding:t.spacing(4)},"&>*:nth-child(n+4)":{paddingTop:t.spacing(20)}},topick_heading:{color:"white","& >*:not(:first-child)":{paddingTop:"8px"}},onlineLink:{},link_ToExternals:{color:"#5C3B42"},inner_GridContainer:{"& > *":{paddingTop:t.spacing(10)}},topic_pragraph:{},video_container:{width:"100%",height:"100%",position:"relative",zIndex:-1},video_root:{width:"100%",position:"relative"},video_responsive:{overflow:"hidden",position:"relative",width:"100%"},divider:{backgroundColor:"white !important"}})))}}]);