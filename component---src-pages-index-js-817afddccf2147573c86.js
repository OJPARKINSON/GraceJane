(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,a,t){"use strict";t.r(a);var n=t(7),r=t.n(n),l=t(0),c=t.n(l),i=t(146),o=t(147),s=t(4),m=function(e){return c.a.createElement("header",null,c.a.createElement("div",{className:"headerTitle"},c.a.createElement("h1",null,"Grace Jane Music")),c.a.createElement("div",{className:"content"},c.a.createElement("div",{onClick:e.drawerClickHandler,id:"burger"},c.a.createElement("i",null))))};m.propTypes={siteTitle:t.n(s).a.string},m.defaultProps={siteTitle:""};var d=m,u=(t(149),function(e){return c.a.createElement("div",{className:"gig"},c.a.createElement("h3",null,e.dateNum),c.a.createElement("div",{className:"gigDate"},c.a.createElement("h3",null,e.weekDay,c.a.createElement("br",null),e.month)),c.a.createElement("h3",null,e.location),c.a.createElement("span",{className:"gig"},c.a.createElement("a",{href:"https://www.songkick.com/concerts/35183634-grace-jane-at-boileroom"},"Tickets")))}),p=(t(160),function(e){return c.a.createElement("div",{className:"navContainer"},c.a.createElement("nav",{className:"navLinks"},c.a.createElement("span",{onClick:e.drawerClickHandler,className:"closeBtn"},"x"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{onClick:e.drawerClickHandler,href:"#gigs"},"Gigs")),c.a.createElement("li",{onClick:e.drawerClickHandler,id:"social"},c.a.createElement("a",{href:"#a"}," Social")),c.a.createElement("li",null,c.a.createElement("a",{onClick:e.drawerClickHandler,href:"#a"}," About")),c.a.createElement("li",null,c.a.createElement("a",{onClick:e.drawerClickHandler,href:"#music"},"Music")))))}),g=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={navOpen:!1},a.drawerToggleClickHandler=function(){a.setState(function(e){return{navOpen:!e.navOpen}})},a}return r()(a,e),a.prototype.render=function(){var e;return this.state.navOpen&&(e=c.a.createElement(p,{drawerClickHandler:this.drawerToggleClickHandler})),c.a.createElement(i.a,{className:"layout"},c.a.createElement(o.a,{title:"Home",keywords:["Grace Jane","Singer","Song Writter"]}),c.a.createElement(d,{drawerClickHandler:this.drawerToggleClickHandler}),e,c.a.createElement("h2",{id:"music",className:"subTitle"},"Latest Release"),c.a.createElement("div",{className:"latestWork"},c.a.createElement("h3",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ampl.ink/gy1X8"},"Oceans.")),c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ampl.ink/gy1X8"},c.a.createElement("img",{className:"oceanImg",src:t(161),alt:"Album cover for the single oceans by Grace Jane"}))),c.a.createElement("div",{className:"buttonContainer"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ampl.ink/gy1X8",className:"fancy-btn"},"Listen here")," ",c.a.createElement("br",null)),c.a.createElement("h2",{id:"gigs",className:"subTitle"},"Upcoming Gigs"),c.a.createElement("div",{className:"gigSetup"},c.a.createElement("div",{className:"gigsContainer"},c.a.createElement(u,{dateNum:"03",weekDay:"MON",month:"JAN",location:"Boileroom - Guildford, UK"}),c.a.createElement(u,{dateNum:"12",weekDay:"THUR",month:"APR",location:"Church - Leeds, UK"}),c.a.createElement(u,{dateNum:"10",weekDay:"SAT",month:"MAY",location:"O2 Academy - Leeds, UK"}))))},a}(l.Component);a.default=g},146:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(4),c=t.n(l),i=(t(149),function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,a),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://oliverparkinson.co.uk"},"Oliver Parkinson")))});i.propTypes={children:c.a.node.isRequired},a.a=i},147:function(e,a,t){"use strict";var n=t(148),r=t(0),l=t.n(r),c=t(4),i=t.n(c),o=t(150),s=t.n(o);function m(e){var a=e.description,t=e.lang,r=e.meta,c=e.keywords,i=e.title,o=n.data.site,m=a||o.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:i},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},a.a=m},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Grace Jane",description:"The offical site for Grace Jane Music. The single Oceans is out now. Live dates, About, Music",author:"@OliverParkinson"}}}}},161:function(e,a,t){e.exports=t.p+"static/oceans-54398bd02d414e3dbd1218abc884a2a4.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-817afddccf2147573c86.js.map