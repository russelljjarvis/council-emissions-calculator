(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[255],{1684:function(n,r,e){"use strict";e.d(r,{Z:function(){return o}});var t=e(5893),s=e(9008),i=e(4096),c=e(3850),a=e(9316);function o(n){var r=n.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.default,{children:[(0,t.jsx)("title",{children:"Emissions Calculator"}),(0,t.jsx)("meta",{name:"description",content:"Emissions calculator"}),(0,t.jsx)("link",{rel:"icon",href:"".concat(a.jW,"/favicon.ico")})]}),(0,t.jsx)(i.k,{height:"100vh",alignItems:"center",children:(0,t.jsx)(c.W,{centerContent:!0,maxW:"container.sm",children:r})})]})}},7086:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return h}});var t=e(5893),s=e(336),i=e(4115),c=e(7294),a=e(1861),o=e(1684),u=function(n,r){var e=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"didNotTravel",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{mode:r,e:e*Number(n)*2}},t=r.map((function(n){switch(n){case"train/tram":return e(n,.04);case"scooter":case"bus":return e(n,.1);case"car(shared)":case"car(solo)":return e(n,.075);case"walk":case"bicycle":return e(n);default:return e()}})),s=t.map((function(n){return n.e})).reduce((function(n,r){return n+r}));return{emissionsPerMode:t,totalEmissions:s}},l=e(319),d=e(9316);function h(){var n=(0,a.Z)().answers,r=n.km,e=n.transportModes,h=n.department,f=n.incentive,m=u(r,e);return(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.X,{children:"Your results:"}),(0,t.jsxs)(i.x,{children:[(0,t.jsx)("br",{}),(0,t.jsx)("b",{children:"Department:"})," ",(0,l.Z)(h),(0,t.jsx)("br",{}),(0,t.jsx)("b",{children:"Anything that would change your mind:"})," ",f,(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("b",{children:"Daily travel:"})," ",r,"km",(0,t.jsx)("br",{}),(0,t.jsx)("b",{children:"Your daily CO2 emissions:"}),(0,t.jsx)("br",{}),m.emissionsPerMode.map((function(n,r){var e=n.mode,s=n.e;return(0,t.jsxs)(c.Fragment,{children:[d.en[r]," (",e,"): ",s,"kg",(0,t.jsx)("br",{})]},r)})),(0,t.jsx)("b",{children:"Total weekly CO2 emissions:"})," ",m.totalEmissions,"kg"]})]})}},319:function(n,r){"use strict";r.Z=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}},9316:function(n,r,e){"use strict";e.d(r,{en:function(){return t},pM:function(){return s},Yd:function(){return i},jW:function(){return c}});var t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],s=["walk","bicycle","scooter","train/tram","bus","car(shared)","car(solo)"],i=["education","health","transport","finance"],c="https://codeforaustralia.github.io/council-emissions-calculator-spike"},1258:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/results",function(){return e(7086)}])}},function(n){n.O(0,[613,774,888,179],(function(){return r=1258,n(n.s=r);var r}));var r=n.O();_N_E=r}]);