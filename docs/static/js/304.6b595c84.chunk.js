"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[304],{7304:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var r=n(2791),o=n(1523),i=n(8486),c=n(184),a=function(e){var t=e.data;return(0,c.jsx)("article",{className:"degree-container",children:(0,c.jsxs)("header",{children:[(0,c.jsx)("h4",{className:"degree",children:t.degree}),(0,c.jsxs)("p",{className:"school",children:[(0,c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]}),(0,c.jsx)("p",{className:"describe",children:t.describe})]})})},s=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"education",children:[(0,c.jsx)("div",{className:"link-to",id:"education"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,c.jsx)(a,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return(0,c.jsxs)("article",{className:"jobs-container",children:[(0,c.jsxs)("header",{children:[(0,c.jsxs)("h4",{children:[(0,c.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,c.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,c.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,c.jsx)("li",{children:e},e)}))})]})},p=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"experience",children:[(0,c.jsx)("div",{className:"link-to",id:"experience"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,c.jsx)(u,{data:e},e.company)}))]})};p.defaultProps={data:[]};var d=p;var y=n(9142);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(0,y.Z)(r.key),r)}}var m=n(9611);function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var g=n(1002);function b(e,t){if(t&&("object"===(0,g.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}var j=n(4942),k=n(1413),x=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,c.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},w=function(e){var t=e.data,n=e.categories,r=t.category,o=t.competency,i=t.title,a={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},s=(0,k.Z)((0,k.Z)({},a),{},{width:"".concat(String(Math.min(100,Math.max(o/5*100,0))),"%")});return(0,c.jsxs)("div",{className:"skillbar clearfix",children:[(0,c.jsx)("div",{className:"skillbar-title",style:a,children:(0,c.jsx)("span",{children:i})}),(0,c.jsx)("div",{className:"skillbar-bar",style:s}),(0,c.jsxs)("div",{className:"skill-bar-percent",children:[o," / 5"]})]})};w.defaultProps={categories:[]};var P=w,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,m.Z)(e,t)}(i,e);var t,n,r,o=v(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,k.Z)((0,k.Z)({},n),{},(0,j.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,k.Z)((0,k.Z)({},e),{},(0,j.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){for(var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All"),n=this.state.skills.filter((function(e){return"All"===t||e.category.includes(t)})).sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})),r=Math.ceil(n.length/2),o=[],i=0;i<r;i+=1){var a=n[2*i],s=n[2*i+1],l=null,u=null;a&&(l=(0,c.jsx)(P,{categories:this.props.categories,data:a},a.title)),s&&(u=(0,c.jsx)(P,{categories:this.props.categories,data:s},s.title)),o.push((0,c.jsxs)("div",{className:"row",children:[l,u]},i))}return o}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,c.jsx)(x,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,c.jsxs)("div",{className:"skills",children:[(0,c.jsx)("div",{className:"link-to",id:"skills"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Skills"})}),(0,c.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,c.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&f(t.prototype,n),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.Component);S.defaultProps={skills:[],categories:[]};var O=S,N=[{school:"Information Science and Technology, The University of Tokyo",degree:"M.S. Information Science, Creative Informatic",link:"https://www.i.u-tokyo.ac.jp/edu/course/ci/",year:"2022.4 ~ 2024.3",describe:"Research on NLP and CV. Taking courses of Cloud Software Development, Deep learning, Optimizing..."},{school:"Control and Conputer Engineering, North China Electirc Power University",degree:"B.S. Computer Science",link:"https://cce.ncepu.edu.cn/",year:"2017.9 ~ 2021.7",describe:"Learning basic of computer science, Taking courses of Operation system, Network, Data Structure, Database..."}],D=[{company:"Olient Tech",position:"part-time programmer",link:"https://olienttech.com/",daterange:"Jan 2023 \u2013 Now",points:["4 people team, I lead on core algorithm and backend development.","logistics(\u7269\u6d41) 3rd-party-logistics calculation invoice statement automatic generation.","Python, Django, Pandas, Docker."]},{company:"Techouse",position:"part-time programmer",link:"https://jp.techouse.com/",daterange:"Sep 2022 - Dec 2022",points:["Develop, test and debug on workflow system.","Get detailed work from Boss.","Ruby, Ruby on Rails, Rspec, Bootstrap, Jquery, Javascript."]},{company:"NEC R&D",position:"Intern",link:"https://jpn.nec.com/rd/index.html",daterange:"Aug 2022 - Sep 2022",points:["Research on Robusty Hand Joint Recognition.","Python, Pytorch, OpenCV."]}],Z=n(907);var C=n(181);var R,E=[{title:"Ruby",competency:4,category:["Web Development","Languages"]},{title:"Ruby on Rails",competency:4,category:["Web Development"]},{title:"Rspec",competency:2,category:["Tools"]},{title:"Java",competency:2,category:["Languages"]},{title:"Django",competency:4,category:["Web Development","Python"]},{title:"Javascript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Amazon Web Services",competency:1,category:["Web Development","Tools"]},{title:"PostgreSQL/SQLite3/MySql",competency:3,category:["Web Development","Databases","Languages"]},{title:"Git",competency:3,category:["Tools"]},{title:"Docker",competency:3,category:["Tools","Data Engineering"]},{title:"Numpy",competency:4,category:["Data Engineering","Python"]},{title:"Pytorch",competency:4,category:["Python","Data Engineering"]},{title:"Jupyter",competency:3,category:["Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML(slim) + SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C/C++",competency:4,category:["Languages"]},{title:"Data Visualization",competency:1,category:["Javascript"]},{title:"Pandas",competency:5,category:["Data Engineering","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Python"]},{title:"Scikit-Learn",competency:2,category:["Data Engineering","Python"]}].map((function(e){return(0,k.Z)((0,k.Z)({},e),{},{category:e.category.sort()})})),T=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],L=(R=new Set(E.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,Z.Z)(e)}(R)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(R)||(0,C.Z)(R)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:T[t]}})),J=["Education","Experience","Skills"],W=function(){return(0,c.jsx)(i.Z,{title:"Resume",description:"Be confident Zhang san!!!",children:(0,c.jsxs)("article",{className:"post",id:"resume",children:[(0,c.jsx)("header",{children:(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{"data-testid":"heading",children:(0,c.jsx)(o.rU,{to:"resume",children:"Resume"})}),(0,c.jsx)("div",{className:"link-container",children:J.map((function(e){return(0,c.jsx)("h4",{children:(0,c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,c.jsx)(l,{data:N}),(0,c.jsx)(d,{data:D}),(0,c.jsx)(O,{skills:E,categories:L})]})})}},4942:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9142);function o(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},9142:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(1002);function o(e){var t=function(e,t){if("object"!==(0,r.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==(0,r.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,r.Z)(t)?t:String(t)}},1002:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=304.6b595c84.chunk.js.map