(this["webpackJsonpgoa-tourism"]=this["webpackJsonpgoa-tourism"]||[]).push([[0],{104:function(t,e,a){},105:function(t,e,a){},154:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(22),i=a.n(r),s=(a(104),a(105),a(10)),o=a(57),j=a(181),l=a(182),d=a(156),b=a(179),h=a(8),u=a(78),O=a.n(u),x=a(80),m=a.n(x),p=a(79),f=a.n(p),g=a(1),v=Object(b.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:Object(o.a)({flexGrow:1,display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(o.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(h.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(h.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function N(){var t=v();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(j.a,{position:"static",children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(d.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",children:Object(g.jsx)(O.a,{})}),Object(g.jsx)(f.a,{}),Object(g.jsx)("div",{className:t.search,children:Object(g.jsx)("div",{className:t.searchIcon,children:Object(g.jsx)(m.a,{})})})]})})})}var y=a(185),w=a(56),k=a(52),G=a(195),C=a(155),P=a(157),T=a(183),D=a(34),S=a.n(D),A=a(35),B=a.n(A),I=a(81),R=a.n(I),F=a(82),q=Object(F.autoPlay)(R.a),E=[{imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{imgPath:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"},{imgPath:"https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"},{imgPath:"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"}],L=Object(b.a)((function(t){return{root:{maxWidth:400,flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:t.spacing(4),backgroundColor:t.palette.background.default},img:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"}}}));var M=function(){var t=L(),e=Object(k.a)(),a=c.a.useState(0),n=Object(w.a)(a,2),r=n[0],i=n[1],s=E.length;return Object(g.jsxs)("div",{className:t.root,children:[Object(g.jsx)(C.a,{square:!0,elevation:0,className:t.header,children:Object(g.jsx)(P.a,{children:E[r].label})}),Object(g.jsx)(q,{axis:"rtl"===e.direction?"x-reverse":"x",index:r,onChangeIndex:function(t){i(t)},enableMouseEvents:!0,children:E.map((function(e,a){return Object(g.jsx)("div",{children:Math.abs(r-a)<=2?Object(g.jsx)("img",{className:t.img,src:e.imgPath,alt:e.label}):null},e.label)}))}),Object(g.jsx)(G.a,{steps:s,position:"static",variant:"text",activeStep:r,nextButton:Object(g.jsxs)(T.a,{size:"small",onClick:function(){i((function(t){return t+1}))},disabled:r===s-1,children:["Next","rtl"===e.direction?Object(g.jsx)(S.a,{}):Object(g.jsx)(B.a,{})]}),backButton:Object(g.jsxs)(T.a,{size:"small",onClick:function(){i((function(t){return t-1}))},disabled:0===r,children:["rtl"===e.direction?Object(g.jsx)(B.a,{}):Object(g.jsx)(S.a,{}),"Back"]})})]})},z=[{imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"},{imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{imgPath:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"}],W=Object(b.a)((function(t){return{root:{maxWidth:400,flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:t.spacing(4),backgroundColor:t.palette.background.default},img:{height:255,maxWidth:400,overflow:"hidden",display:"block",width:"100%"}}}));function V(){var t=W(),e=Object(k.a)(),a=c.a.useState(0),n=Object(w.a)(a,2),r=n[0],i=n[1],s=z.length;return Object(g.jsxs)("div",{className:t.root,children:[Object(g.jsx)(C.a,{square:!0,elevation:0,className:t.header,children:Object(g.jsx)(P.a,{children:z[r].label})}),Object(g.jsx)("img",{className:t.img,src:z[r].imgPath,alt:z[r].label}),Object(g.jsx)(G.a,{steps:s,position:"static",variant:"text",activeStep:r,nextButton:Object(g.jsxs)(T.a,{size:"small",onClick:function(){i((function(t){return t+1}))},disabled:r===s-1,children:["Next","rtl"===e.direction?Object(g.jsx)(S.a,{}):Object(g.jsx)(B.a,{})]}),backButton:Object(g.jsxs)(T.a,{size:"small",onClick:function(){i((function(t){return t-1}))},disabled:0===r,children:["rtl"===e.direction?Object(g.jsx)(B.a,{}):Object(g.jsx)(S.a,{}),"Back"]})})]})}var H=a(21),K=a.n(H),U=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function J(){var t=U();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsxs)(T.a,{variant:"outlined",children:["Latest Updates",Object(g.jsx)(K.a,{})]})})}var _=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function Y(){var t=_();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsxs)(T.a,{variant:"outlined",children:["Latest Announcements",Object(g.jsx)(K.a,{})]})})}var Z=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function Q(){var t=Z();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsxs)(T.a,{variant:"outlined",children:["Latest News and Events",Object(g.jsx)(K.a,{})]})})}var X=a(184);function $(){return Object(g.jsx)(X.a,{component:"button",variant:"body2",onClick:function(){console.info("Read More")},children:"Read More"})}var tt=a.p+"static/media/Department.9cba3d3c.png",et=a.p+"static/media/GoaLogo.35bdd1a9.png",at=a.p+"static/media/Video.6c3bb390.jpg";function nt(){return Object(g.jsx)(c.a.Fragment,{children:Object(g.jsxs)(y.a,{fixed:!0,children:[Object(g.jsx)("img",{src:et,className:"Government of Goa",alt:"Government of Goa"}),Object(g.jsx)("p",{children:"Department of Tourism Goa"}),Object(g.jsx)("p",{children:"Government of Goa"}),Object(g.jsx)(M,{}),Object(g.jsx)("p",{children:"Welcome to Goa Tourism Department"}),Object(g.jsx)("img",{src:tt,className:"Department of Goa",alt:"Department of Goa"}),Object(g.jsx)("p",{children:"The Administrative head of the Department is Shri J. Ashok Kumar, IAS, Secretary Tourism. The Department has a zonal office in North Goa at Headquarters, Panaji and in South Goa at Margao. The Current Director of Tourism is Shri Menino D\u2019souza. The Public Grievances Officer is Dy. Director (Administration). The Tourist Information Centres/Counters are located within the State and in Mumbai (temporarily closed). The Zonal Officers are primarily responsible for monitoring the Registration of Tourist Trade under the Tourist Trade Act, 1982."}),Object(g.jsx)($,{}),Object(g.jsx)("p",{children:"Travel Essentials"}),Object(g.jsx)(V,{}),Object(g.jsx)(J,{}),Object(g.jsx)(Y,{}),Object(g.jsx)(Q,{}),Object(g.jsx)("p",{children:"A Glimpse into the Beauty of Goa"}),Object(g.jsx)("img",{src:at,className:"Beauty of Goa",alt:"Beauty of Goa"})]})})}var ct=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function rt(){var t=ct();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsxs)(T.a,{variant:"outlined",color:"primary",children:["Most E Tourist Visas for the Year 2019",Object(g.jsx)(K.a,{})]})})}var it=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function st(){var t=it();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsxs)(T.a,{variant:"outlined",color:"primary",children:["Arrivals by Charter Flights during Season",Object(g.jsx)(K.a,{})]})})}function ot(){return Object(g.jsx)(c.a.Fragment,{children:Object(g.jsxs)(y.a,{fixed:!0,children:[Object(g.jsx)("p",{children:"Statistics"}),Object(g.jsx)(rt,{}),Object(g.jsx)(st,{})]})})}var jt=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function lt(){var t=jt();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(T.a,{variant:"outlined",color:"primary",children:"Download"})})}var dt=a(54),bt=a.n(dt),ht=a(187),ut=a(191),Ot=a(190),xt=a(186),mt=a(188),pt=a(189),ft=Object(b.a)({table:{minWidth:650}});function gt(t,e,a){return{name:t,Nationality:e,Visa:a}}var vt=[gt("1","Australia",131),gt("2","Bulgaria",339),gt("3","Czcheck Republic",309),gt("4","Denmark",857),gt("5","Estonia",430),gt("6","Finland",1428),gt("7","Germany",1384),gt("8","Hungary",65),gt("9","Iran",877),gt("10","Jordan",93),gt("11","Kazakhstan",3128),gt("12","Lithuania",184),gt("13","Mexico",17),gt("14","Norway",422),gt("15","Oman",208),gt("16","Portugal",709),gt("17","Qatar",30),gt("18","Russian Federation",24398),gt("19","Sweden",1396),gt("20","Thailand",1428),gt("21","United Kingdom",38292),gt("22","Vietnam",6),gt("23","Zimbabwe",7)];function Nt(){var t=ft();return Object(g.jsx)(xt.a,{component:C.a,children:Object(g.jsxs)(ht.a,{className:t.table,"aria-label":"simple table",children:[Object(g.jsx)(mt.a,{children:Object(g.jsxs)(pt.a,{children:[Object(g.jsx)(Ot.a,{children:"Sr. No."}),Object(g.jsx)(Ot.a,{align:"right",children:"Nationality (Alphabetical)"}),Object(g.jsx)(Ot.a,{align:"right",children:"Visa\xa0"})]})}),Object(g.jsx)(ut.a,{children:vt.map((function(t){return Object(g.jsxs)(pt.a,{children:[Object(g.jsx)(Ot.a,{component:"th",scope:"row",children:t.name}),Object(g.jsx)(Ot.a,{align:"right",children:t.Nationality}),Object(g.jsx)(Ot.a,{align:"right",children:t.Visa})]},t.name)}))})]})})}function yt(){return Object(g.jsx)(c.a.Fragment,{children:Object(g.jsxs)(y.a,{fixed:!0,children:[Object(g.jsx)("p",{children:"Statistics"}),Object(g.jsx)("p",{children:"Most E Tourist Visa for the Year 2019"}),Object(g.jsx)(Nt,{}),Object(g.jsx)(lt,{}),Object(g.jsx)(bt.a,{}),Object(g.jsx)(K.a,{})]})})}var wt=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function kt(){var t=wt();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(T.a,{variant:"outlined",color:"primary",children:"Download"})})}var Gt=Object(b.a)({table:{minWidth:650}});function Ct(t,e,a){return{name:t,No_of_Flights:e,Passengers:a}}var Pt=[Ct("2000-2001",419,116992),Ct("2001-2002",279,76410),Ct("2002-2003",284,94350),Ct("2003-2004",532,126255),Ct("2004-2005",690,158993),Ct("2005-2006",719,180310),Ct("2006-2007",720,169836),Ct("2007-2008",758,185994),Ct("2008-2009",615,145428),Ct("2009-2010",626,137790),Ct("2010-2011",900,171367),Ct("2011-2012",910,169006),Ct("2012-2013",996,215304),Ct("2013-2014",1128,261452),Ct("2014-2015",895,161316),Ct("2015-2016",798,158779),Ct("2016-2017",988,232679),Ct("2017-2018",981,247365),Ct("2018-2019",813,218776)];function Tt(){var t=Gt();return Object(g.jsx)(xt.a,{component:C.a,children:Object(g.jsxs)(ht.a,{className:t.table,"aria-label":"simple table",children:[Object(g.jsx)(mt.a,{children:Object(g.jsxs)(pt.a,{children:[Object(g.jsx)(Ot.a,{children:"Year"}),Object(g.jsx)(Ot.a,{align:"right",children:"No. of Flights"}),Object(g.jsx)(Ot.a,{align:"right",children:"Passengers\xa0"})]})}),Object(g.jsx)(ut.a,{children:Pt.map((function(t){return Object(g.jsxs)(pt.a,{children:[Object(g.jsx)(Ot.a,{component:"th",scope:"row",children:t.name}),Object(g.jsx)(Ot.a,{align:"right",children:t.No_of_Flights}),Object(g.jsx)(Ot.a,{align:"right",children:t.Passengers})]},t.name)}))})]})})}function Dt(){return Object(g.jsx)(c.a.Fragment,{children:Object(g.jsxs)(y.a,{fixed:!0,children:[Object(g.jsx)("p",{children:"Statistics"}),Object(g.jsx)("p",{children:"Arrivals by Charter Flights during Season"}),Object(g.jsx)(Tt,{}),Object(g.jsx)(kt,{}),Object(g.jsx)(bt.a,{})]})})}var St=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function At(){var t=St();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(T.a,{color:"secondary",children:"Contact Us"})})}var Bt=a(194),It=a(192),Rt=a(193),Ft=a(83),qt=a.n(Ft);function Et(){return Object(g.jsx)(X.a,{component:"button",variant:"body2",onClick:function(){console.info("English")},children:"English"})}function Lt(){return Object(g.jsx)(X.a,{component:"button",variant:"body2",onClick:function(){console.info("Hindi")},children:"Hindi"})}function Mt(){return Object(g.jsx)(X.a,{component:"button",variant:"body2",onClick:function(){console.info("Konkani")},children:"Konkani"})}var zt=Object(b.a)((function(t){return{root:{width:"100%"},heading:{fontSize:t.typography.pxToRem(15),fontWeight:t.typography.fontWeightRegular}}}));function Wt(){var t=zt();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsxs)(Bt.a,{children:[Object(g.jsx)(It.a,{expandIcon:Object(g.jsx)(qt.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(g.jsx)(P.a,{className:t.heading,children:"Languages"})}),Object(g.jsx)(Rt.a,{children:Object(g.jsx)(Et,{})}),Object(g.jsx)(Rt.a,{children:Object(g.jsx)(Lt,{})}),Object(g.jsx)(Rt.a,{children:Object(g.jsx)(Mt,{})})]})})}var Vt=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function Ht(){var t=Vt();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(T.a,{color:"primary",children:"Terms and Conditions"})})}var Kt=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function Ut(){var t=Kt();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(T.a,{color:"primary",children:"Disclaimer"})})}var Jt=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function _t(){var t=Jt();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(T.a,{color:"primary",children:"PrivacyPolicies"})})}var Yt=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function Zt(){var t=Yt();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(T.a,{color:"primary",children:"HyperlinkingPolicies"})})}var Qt=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function Xt(){var t=Qt();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(T.a,{color:"primary",children:"Help"})})}function $t(){return Object(g.jsx)(X.a,{component:"button",variant:"body2",onClick:function(){console.info("+91-0832-2494204")},children:"Call Us: +91-0832-2494204"})}function te(){return Object(g.jsx)(X.a,{component:"button",variant:"body2",onClick:function(){console.info("Dir-tour.goa@nic.in")},children:"Email : Dir-tour.goa@nic.in"})}var ee=a(84),ae=a.n(ee),ne=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function ce(){var t=ne();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(T.a,{variant:"contained",children:Object(g.jsx)(ae.a,{})})})}var re=a(85),ie=a.n(re),se=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function oe(){var t=se();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(T.a,{variant:"contained",children:Object(g.jsx)(ie.a,{})})})}var je=a(86),le=a.n(je),de=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function be(){var t=de();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(T.a,{variant:"contained",children:Object(g.jsx)(le.a,{})})})}var he=a(87),ue=a.n(he),Oe=Object(b.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function xe(){var t=Oe();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(T.a,{variant:"contained",children:Object(g.jsx)(ue.a,{})})})}function me(){return Object(g.jsx)("div",{className:"root",children:Object(g.jsx)("footer",{className:"App-footer",children:Object(g.jsxs)("div",{className:"flexbox-container",children:[Object(g.jsx)("p",{children:"Policies"}),Object(g.jsx)(Ht,{}),Object(g.jsx)(Ut,{}),Object(g.jsx)(_t,{}),Object(g.jsx)(Zt,{}),Object(g.jsx)(Xt,{}),Object(g.jsx)("p",{children:"Contact Us"}),Object(g.jsx)("p",{children:"Goa Tourism Department"}),Object(g.jsx)("p",{children:"Paryatan Bhavan, 2nd Floor, Patto"}),Object(g.jsx)("p",{children:"Panaji-Goa, India 403001"}),Object(g.jsx)("p",{children:Object(g.jsx)($t,{})}),Object(g.jsx)("p",{children:Object(g.jsx)(te,{})}),Object(g.jsx)(ce,{}),Object(g.jsx)(oe,{}),Object(g.jsx)(be,{}),Object(g.jsx)(xe,{}),Object(g.jsx)("p",{children:"Copyright \xa9\ufe0f 2021. All Rights Reserved.This is the official website of Goa Tourism Department, Govt of Goa."})]})})})}var pe=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)(At,{}),Object(g.jsx)(Wt,{}),Object(g.jsx)(N,{})]}),Object(g.jsxs)(s.c,{children:[Object(g.jsxs)(s.a,{path:"/goa-tourism/",exact:!0,children:[" ",Object(g.jsx)(nt,{})," "]}),Object(g.jsxs)(s.a,{path:"/goa-tourism/homepage1",children:[" ",Object(g.jsx)(nt,{})," "]}),Object(g.jsxs)(s.a,{path:"/goa-tourism/Statistics2",children:[" ",Object(g.jsx)(ot,{})," "]}),Object(g.jsxs)(s.a,{path:"/goa-tourism/etourist3",children:[" ",Object(g.jsx)(yt,{})," "]}),Object(g.jsxs)(s.a,{path:"/goa-tourism/arrivals4",children:[" ",Object(g.jsx)(Dt,{})," "]})]}),Object(g.jsx)(me,{})]})},fe=a(69);i.a.render(Object(g.jsx)(fe.a,{children:Object(g.jsx)(pe,{})}),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.0192b87b.chunk.js.map