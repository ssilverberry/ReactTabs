(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(30)},28:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(3),o=t.n(i),c=t(4),l=t(5),u=t(7),d=t(6),s=t(8),m=t(1),p=t(2);function h(){var e=Object(m.a)(["\n  position: relative;\n  width: 60%\n  margin: 0 auto\n  padding: 25px 0px\n"]);return h=function(){return e},e}function f(){var e=Object(m.a)(["\n  display: flex\n  flex-direction: row\n  justify-content: flex-start;\n  box-shadow: 0px 1px 3px 0px #999\n  background-color: #eaeaea;\n  z-index: 1;\n"]);return f=function(){return e},e}function x(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 15px 15px;\n  box-shadow: 0px 1px 3px 0px #999\n  z-index: -1;\n  text-align: center;\n  margin-top: 10px;\n"]);return x=function(){return e},e}function g(){var e=Object(m.a)(["\n  padding: 13px 20px\n  min-width: 40px\n  cursor: pointer\n  text-align: center\n  margin-right: 0px\n  transition: all 0.5s\n  padding-top: 20px\n  padding-bottom: 20px\n  background-color: ",";\n"]);return g=function(){return e},e}var b=p.a.div(g(),function(e){return e.primary?"#ccc":"#eaeaea"}),v=p.a.div(x()),y=p.a.div(f()),w=p.a.div(h()),k=function(e){var n=e.tabData,t=e.handleActive,r=e.active;return n.map(function(e){var n=e.title,i=e.index;return a.a.createElement(b,{key:i,onClick:function(){return t(i)},tabindex:i,primary:r===i},n)})},E=function(){return a.a.createElement(v,null,a.a.createElement("div",null,a.a.createElement("img",{src:"https://source.unsplash.com/random/250x150",alt:"img",style:{width:"250px",height:"150px"}})),a.a.createElement("h2",null,"Hello"),a.a.createElement("div",null,"We will"))};function _(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 25px;\n  background-color: #fff;\n  box-shadow: 0px 3px 3px 0px #999;\n  border-top: 1px solid #eaeaea;\n  margin-bottom: 10px;\n  transition: all 0.3s;\n"]);return _=function(){return e},e}function O(){var e=Object(m.a)(["\n  width: 8px;\n  height: 8px;\n  border-right: 2px solid #999;\n  border-bottom: 2px solid #999;\n  align-self: center;\n  transition: all 0.3s;\n  transform-origin: center center;\n  transform: rotate(",");\n"]);return O=function(){return e},e}function j(){var e=Object(m.a)(["\n  color: ",";\n"]);return j=function(){return e},e}function T(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n  padding: 17px 25px;\n  background-color: #fff;\n  box-shadow: 0px 1px 3px 0px #999;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin-top: ","\n"]);return T=function(){return e},e}function C(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px auto;\n  transition: all 0.3s;\n"]);return C=function(){return e},e}var B=p.a.div(C()),A=p.a.div(T(),function(e){return e.isClicked?"10px":"0"}),D=p.a.div(j(),function(e){return e.isPrimary?"#333":"#999"}),S=p.a.div(O(),function(e){return e.isClicked?"-135deg":"45deg"}),R=p.a.div(_()),I=function(e){var n=e.text,t=e.isActive;return a.a.createElement(r.Fragment,null,t&&a.a.createElement(R,null,a.a.createElement(D,null,n),a.a.createElement(D,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eos maiores, fugiat suscipit ab id quia unde maxime ad.")))},F=function(e){var n=e.accordionData,t=e.handleActive,i=e.active;return n.map(function(e){var n=e.primaryText,o=e.secondaryText,c=e.index;return a.a.createElement(r.Fragment,{key:c},a.a.createElement(A,{onClick:function(){return t(c)},isClicked:i===c},a.a.createElement(D,{isPrimary:!0},n),a.a.createElement(D,null,o),a.a.createElement(S,{isClicked:i===c})),i===c&&a.a.createElement(I,{text:o,isActive:i===c}))})};function H(){var e=Object(m.a)(["\n  width: ",";\n  text-align: ",";\n"]);return H=function(){return e},e}function Y(){var e=Object(m.a)(["\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  border-bottom: 1px solid #eaeaea;\n  padding: 7px 20px;\n"]);return Y=function(){return e},e}function N(){var e=Object(m.a)(["\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  border-bottom: 1px solid #eaeaea;\n  padding: 7px 20px;\n  color: #ccc;\n  font-weight: 400;\n"]);return N=function(){return e},e}function W(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  grid-template-rows: repeat(",", minmax(50px, 1fr));\n  width: 100%;\n  margin: 0 auto;\n  box-shadow: 0px 1px 3px 0px #999;\n  background-color: #fff;\n  border-radius: 3px;\n  font-size: 13px;\n  margin-top: 10px;\n"]);return W=function(){return e},e}var L=p.a.div(W(),function(e){return e.tableTitle.length},function(e){return e.tableContent.length+1}),z=p.a.div(N()),J=p.a.div(Y()),P=p.a.div(H(),function(e){return e.main?"150px":"100px"},function(e){return e.right?"right":"left"}),q=function(e){return e.tableContent.map(function(e){return a.a.createElement(J,{key:e.name},Object.values(e).map(function(e,n){return n<1?a.a.createElement(P,{key:e+n,main:!0},e):a.a.createElement(P,{key:n,right:!0},e)}))})},G=function(e){var n=e.tableTitle;return a.a.createElement(r.Fragment,null,a.a.createElement(z,null,n.map(function(e,n){return n<1?a.a.createElement(P,{key:e,main:!0},e):a.a.createElement(P,{key:e,right:!0},e)})))},K=function(e){var n=e.titles,t=e.content;return a.a.createElement(r.Fragment,null,a.a.createElement(L,{tableTitle:n,tableContent:t},a.a.createElement(G,{tableTitle:n}),a.a.createElement(q,{tableContent:t})))},M={FIRST:"FIRST",SECOND:"SECOND",THIRD:"THIRD"},V=[{title:"Accordions",index:"FIRST"},{title:"Table",index:"SECOND"},{title:"Snackbars",index:"THIRD"}],$=[{primaryText:"Just primary text",secondaryText:"Here is some optional Text",index:"AFIRST"},{primaryText:"I am Batman",secondaryText:"",index:"ASECOND"},{primaryText:"He is not a hero",secondaryText:"",index:"ATHIRD"}],Q=["Name","Height","Mass","Hair Color","Skin Color","Eye Color","Birth Year","Gender"],U=[{name:"Luke Skywalker",height:"172",mass:"77",hair_color:"blond",skin_color:"fair",eye_color:"blue",birth_year:"19BBY",gender:"male"},{name:"C-3PO",height:"167",mass:"75",hair_color:"n/a",skin_color:"gold",eye_color:"yellow",birth_year:"112BBY",gender:"n/a"},{name:"R2-D2",height:"96",mass:"32",hair_color:"n/a",skin_color:"white, blue",eye_color:"red",birth_year:"33BBY",gender:"n/a"},{name:"Darth Vader",height:"202",mass:"136",hair_color:"none",skin_color:"white",eye_color:"yellow",birth_year:"41.9BBY",gender:"male"},{name:"Leia Organa",height:"150",mass:"49",hair_color:"brown",skin_color:"light",eye_color:"brown",birth_year:"19BBY",gender:"female"},{name:"Owen Lars",height:"178",mass:"120",hair_color:"brown, grey",skin_color:"light",eye_color:"blue",birth_year:"52BBY",gender:"male"},{name:"Beru Whitesun lars",height:"165",mass:"75",hair_color:"brown",skin_color:"light",eye_color:"blue",birth_year:"47BBY",gender:"female"},{name:"R5-D4",height:"97",mass:"32",hair_color:"n/a",skin_color:"white, red",eye_color:"red",birth_year:"unknown",gender:"n/a"},{name:"Biggs Darklighter",height:"183",mass:"84",hair_color:"black",skin_color:"light",eye_color:"brown",birth_year:"24BBY",gender:"male"},{name:"Obi-Wan Kenobi",height:"182",mass:"77",hair_color:"auburn, white",skin_color:"fair",eye_color:"blue-gray",birth_year:"57BBY",gender:"male"}],X=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).state={activeTab:M.FIRST},t.handleClick=function(e){t.setState({activeTab:e})},t}return Object(s.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.render,n=this.state.activeTab;return a.a.createElement(r.Fragment,null,e({active:n,handleActive:this.handleClick,tabData:V}))}}]),n}(r.Component),Z=function(e){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(a)))).state={activeAccordion:""},t.handleAccordionClick=function(e){t.setState(function(n){return{activeAccordion:n.activeAccordion!==e?e:""}})},t}return Object(s.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this,n=this.state.activeAccordion;return a.a.createElement(w,null,a.a.createElement(X,{render:function(t){var i=t.tabData,o=t.handleActive,c=t.active;return a.a.createElement(r.Fragment,null,a.a.createElement(y,null,a.a.createElement(k,{tabData:i,handleActive:o,active:c})),M.FIRST===c&&a.a.createElement(B,null,a.a.createElement(F,{accordionData:$,handleActive:e.handleAccordionClick,active:n})),M.SECOND===c&&a.a.createElement(K,{titles:Q,content:U}),M.THIRD===c&&a.a.createElement(E,null))}}))}}]),n}(r.Component);t(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.2556806b.chunk.js.map