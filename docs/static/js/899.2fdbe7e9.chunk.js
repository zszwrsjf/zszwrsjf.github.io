(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[899],{2899:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});n(5043);var r=n(2582),s=n(8910),i=n(446),a=n.n(i),o=n(579);const u=t=>{let{data:e}=t;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},c=[{title:"Health Up APP",subtitle:"Refrigerator Ingredient Management and Recipe Recommendation",link:"https://healthup-0.web.app/",image:"/images/projects/health_up.png",date:"2022-12",desc:"8 people team to make a Refrigerator Ingredient Management and Recipe Recommendation App, which can add ingredients and use them to output recipes. My work is on Business Logic design and programming on part of backend(Django) and frontend(react+ts)."},{title:"Data Analysis of customers data",subtitle:"Data Analysis",image:"/images/projects/sns_logos.png",date:"2022-07",desc:"use sklearn and pyplot to analysis data of customers, and propose a marketing proposal.the data is from ADK and the column number is very huge, so I choose COVID-19 and social media datato do the analysis. the result shows after COVID-19, user of the application of combinition of news and remote workwill be a good target for marketing."},{title:"Graduation work in College",subtitle:"\u5352\u8ad6",image:"/images/projects/calculator.png",date:"2021-03",desc:"use keras(python) to learn model to recognize hand write numbers, and make a calculator deployed on Tencent server using nginx and uwsgi.frontend use python qt."},{title:"NCEPU news app",subtitle:"NECPU news integration app",image:"/images/projects/news.png",date:"2020-06",desc:"4 people team to make a news app which from many platfrom of school news.crawl data from them and show to the app. My work is do news data crawler(python) and programming on part of frontend(html-like, css-like on wechat miniprogram)"},{title:"University course projects",subtitle:"University",image:"/images/projects/university.png",link:"https://github.com/zszwrsjf/university_stuffs",date:"2019-06",desc:"some final work when university period. Operation system, machine learning..."}],d=()=>(0,o.jsx)(s.A,{title:"Projects",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(r.N_,{to:"/projects",children:"Projects"})})})}),c.map((t=>(0,o.jsx)(u,{data:t},t.title)))]})})},446:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",o="day",u="week",c="month",d="quarter",h="year",l="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,c),i=n-s<0,a=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:u,d:o,D:l,h:a,m:i,s:s,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",M={};M[w]=g;var v="$isDayjsObject",D=function(t){return t instanceof S||!(!t||!t[v])},k=function t(e,n,r){var s;if(!e)return w;if("string"==typeof e){var i=e.toLowerCase();M[i]&&(s=i),n&&(M[i]=n,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,s=o}return!r&&s&&(w=s),s||!r&&w},b=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},j=y;j.l=k,j.i=D,j.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function g(t){this.$L=k(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[v]=!0}var $=g.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return j},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return b(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<b(t)},$.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,r=!!j.u(e)||e,d=j.p(t),f=function(t,e){var s=j.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(o)},m=function(t,e){return j.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,g=this.$M,$=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case h:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case u:var w=this.$locale().weekStart||0,M=(p<w?p+7:p)-w;return f(r?$-M:$+(6-M),g);case o:case l:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case s:return m(y+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,u=j.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[o]=d+"Date",n[l]=d+"Date",n[c]=d+"Month",n[h]=d+"FullYear",n[a]=d+"Hours",n[i]=d+"Minutes",n[s]=d+"Seconds",n[r]=d+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===h){var p=this.clone().set(l,1);p.$d[f](m),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[j.p(t)]()},$.add=function(r,d){var l,f=this;r=Number(r);var m=j.p(d),p=function(t){var e=b(f);return j.w(e.date(e.date()+Math.round(t*r)),f)};if(m===c)return this.set(c,this.$M+r);if(m===h)return this.set(h,this.$y+r);if(m===o)return p(1);if(m===u)return p(7);var g=(l={},l[i]=e,l[a]=n,l[s]=t,l)[m]||1,$=this.$d.getTime()+r*g;return j.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=j.z(this),i=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,d=n.meridiem,h=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},l=function(t){return j.s(i%12||12,t,"0")},m=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return j.s(e.$y,4,"0");case"M":return o+1;case"MM":return j.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,c,3);case"MMMM":return h(c,o);case"D":return e.$D;case"DD":return j.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,u,2);case"ddd":return h(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(i);case"HH":return j.s(i,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return j.s(a,2,"0");case"s":return String(e.$s);case"ss":return j.s(e.$s,2,"0");case"SSS":return j.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,l,f){var m,p=this,g=j.p(l),$=b(r),y=($.utcOffset()-this.utcOffset())*e,w=this-$,M=function(){return j.m(p,$)};switch(g){case h:m=M()/12;break;case c:m=M();break;case d:m=M()/3;break;case u:m=(w-y)/6048e5;break;case o:m=(w-y)/864e5;break;case a:m=w/n;break;case i:m=w/e;break;case s:m=w/t;break;default:m=w}return f?m:j.a(m)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=k(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return j.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},g}(),x=S.prototype;return b.prototype=x,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",o],["$M",c],["$y",h],["$D",l]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,S,b),t.$i=!0),b},b.locale=k,b.isDayjs=D,b.unix=function(t){return b(1e3*t)},b.en=M[w],b.Ls=M,b.p={},b}()}}]);
//# sourceMappingURL=899.2fdbe7e9.chunk.js.map