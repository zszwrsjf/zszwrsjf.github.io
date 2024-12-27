"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[105],{2105:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(5043),c=n(2582),o=n(8910),i=n(579);const s=e=>{let{data:t}=e;return(0,i.jsx)("article",{className:"degree-container",children:(0,i.jsxs)("header",{children:[(0,i.jsx)("h4",{className:"degree",children:t.degree}),(0,i.jsxs)("p",{className:"school",children:[(0,i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]}),(0,i.jsx)("p",{className:"describe",children:t.describe})]})})},r=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"education",children:[(0,i.jsx)("div",{className:"link-to",id:"education"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Education"})}),t.map((e=>(0,i.jsx)(s,{data:e},e.school)))]})};r.defaultProps={data:[]};const l=r,p=e=>{let{data:t}=e;return(0,i.jsxs)("article",{className:"jobs-container",children:[(0,i.jsxs)("header",{children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,i.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,i.jsx)("ul",{className:"points",children:t.points.map((e=>(0,i.jsx)("li",{children:e},e)))})]})},d=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"experience",children:[(0,i.jsx)("div",{className:"link-to",id:"experience"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,i.jsx)(p,{data:e},e.company)))]})};d.defaultProps={data:[]};const m=d;var y=n(2555);const g=e=>{let{handleClick:t,active:n,label:a}=e;return(0,i.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:()=>t(a),children:a})},h=e=>{let{data:t,categories:n}=e;const{category:a,competency:c,title:o}=t,s={background:n.filter((e=>a.includes(e.name))).map((e=>e.color))[0]},r=(0,y.A)((0,y.A)({},s),{},{width:"".concat(String(Math.min(100,Math.max(c/5*100,0))),"%")});return(0,i.jsxs)("div",{className:"skillbar clearfix",children:[(0,i.jsx)("div",{className:"skillbar-title",style:s,children:(0,i.jsx)("span",{children:o})}),(0,i.jsx)("div",{className:"skillbar-bar",style:r}),(0,i.jsxs)("div",{className:"skill-bar-percent",children:[c," / 5"]})]})};h.defaultProps={categories:[]};const u=h;class b extends a.Component{constructor(e){super(e),this.handleChildClick=e=>{this.setState((t=>{const n=Object.keys(t.buttons).reduce(((n,a)=>(0,y.A)((0,y.A)({},n),{},{[a]:e===a&&!t.buttons[a]})),{});return n.All=!Object.keys(t.buttons).some((e=>n[e])),{buttons:n}}))},this.state=(e=>{let{categories:t,skills:n}=e;return{buttons:t.map((e=>e.name)).reduce(((e,t)=>(0,y.A)((0,y.A)({},e),{},{[t]:!1})),{All:!0}),skills:n}})({categories:e.categories,skills:e.skills})}getRows(){const e=Object.keys(this.state.buttons).reduce(((e,t)=>this.state.buttons[t]?t:e),"All"),t=this.state.skills.filter((t=>"All"===e||t.category.includes(e))).sort(((e,t)=>{let n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})),n=Math.ceil(t.length/2),a=[];for(let c=0;c<n;c+=1){const e=t[2*c],n=t[2*c+1];let o=null,s=null;e&&(o=(0,i.jsx)(u,{categories:this.props.categories,data:e},e.title)),n&&(s=(0,i.jsx)(u,{categories:this.props.categories,data:n},n.title)),a.push((0,i.jsxs)("div",{className:"row",children:[o,s]},c))}return a}getButtons(){return Object.keys(this.state.buttons).map((e=>(0,i.jsx)(g,{label:e,active:this.state.buttons,handleClick:this.handleChildClick},e)))}render(){return(0,i.jsxs)("div",{className:"skills",children:[(0,i.jsx)("div",{className:"link-to",id:"skills"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Skills"})}),(0,i.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,i.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}b.defaultProps={skills:[],categories:[]};const j=b,f=[{school:"Information Science and Technology, The University of Tokyo",degree:"M.S. Information Science, Creative Informatic",link:"https://www.i.u-tokyo.ac.jp/edu/course/ci/",year:"2022.4 ~ 2024.3",describe:"Research on NLP and CV. Taking courses of Cloud Software Development, Deep learning, Optimizing..."},{school:"Control and Conputer Engineering, North China Electirc Power University",degree:"B.S. Computer Science",link:"https://cce.ncepu.edu.cn/",year:"2017.9 ~ 2021.7",describe:"Learning basic of computer science, Taking courses of Operation system, Network, Data Structure, Database..."}],v=[{company:"Akari",position:"Software Engineer + Algorithm Engineer",link:"https://akariinc.co.jp/",daterange:"Aug 2023 - Present",points:["3 people team, I work on making ataframe chatbot agent and backend development.","construction LLM chatbot agent.","Python, langchain, FastAPI"]},{company:"Olient Tech",position:"part-time programmer",link:"https://olienttech.com/",daterange:"Jan 2023 \u2013 May 2023",points:["4 people team, I lead on core algorithm and backend development.","logistics(\u7269\u6d41) 3rd-party-logistics calculation invoice statement automatic generation.","Python, Django, Pandas, Docker."]},{company:"NEC R&D",position:"Intern",link:"https://jpn.nec.com/rd/index.html",daterange:"Aug 2022 - Sep 2022",points:["Research on Robusty Hand Joint Recognition.","Python, Pytorch, OpenCV."]}],k=[{title:"Ruby",competency:3,category:["Web Development","Languages"]},{title:"Ruby on Rails",competency:3,category:["Web Development"]},{title:"Rspec",competency:2,category:["Tools"]},{title:"Java",competency:2,category:["Languages"]},{title:"Django",competency:4,category:["Web Development","Python"]},{title:"FastAPI",competency:4,category:["Web Development","Python"]},{title:"langchain",competency:3,category:["Python"]},{title:"Javascript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Amazon Web Services",competency:1,category:["Web Development","Tools"]},{title:"PostgreSQL/SQLite3/MySql",competency:3,category:["Web Development","Databases","Languages"]},{title:"Git",competency:3,category:["Tools"]},{title:"Docker",competency:3,category:["Tools","Data Engineering"]},{title:"Numpy",competency:4,category:["Data Engineering","Python"]},{title:"Pytorch",competency:4,category:["Python","Data Engineering"]},{title:"Jupyter",competency:3,category:["Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML(slim) + SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C/C++",competency:4,category:["Languages"]},{title:"Data Visualization",competency:1,category:["Javascript"]},{title:"Pandas",competency:5,category:["Data Engineering","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Python"]},{title:"Scikit-Learn",competency:2,category:["Data Engineering","Python"]}].map((e=>(0,y.A)((0,y.A)({},e),{},{category:e.category.sort()}))),x=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],P=[...new Set(k.reduce(((e,t)=>{let{category:n}=t;return e.concat(n)}),[]))].sort().map(((e,t)=>({name:e,color:x[t]}))),N=["Education","Experience","Skills"],S=()=>(0,i.jsx)(o.A,{title:"Resume",description:"Be confident Zhang san!!!",children:(0,i.jsxs)("article",{className:"post",id:"resume",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h2",{"data-testid":"heading",children:(0,i.jsx)(c.N_,{to:"resume",children:"Resume"})}),(0,i.jsx)("div",{className:"link-container",children:N.map((e=>(0,i.jsx)("h4",{children:(0,i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)))})]})}),(0,i.jsx)(l,{data:f}),(0,i.jsx)(m,{data:v}),(0,i.jsx)(j,{skills:k,categories:P})]})})},2555:(e,t,n)=>{function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var c=n.call(e,t||"default");if("object"!=a(c))return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:t+""}function o(e,t,n){return(t=c(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,{A:()=>s})}}]);
//# sourceMappingURL=105.6ec7b1a9.chunk.js.map