(this.webpackJsonpjokes_wheel=this.webpackJsonpjokes_wheel||[]).push([[0],[,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/IconsWhite.720ed1a1.svg"},function(e,t,i){"use strict";i.r(t);var c=i(0),a=i.n(c),s=i(6),n=i.n(s),d=(i(11),i(4)),o=(i(12),i(13),i.p+"static/media/wheel.3696fb80.mp3"),r=i.p+"static/media/foot.27550976.png",u=i.p+"static/media/wheel.bd0bfdf8.png",m=i.p+"static/media/marker.3fc88b32.png",l=i.p+"static/media/Video1.1d8a315c.mp4",b=i.p+"static/media/Video2.82c35145.mp4",j=i.p+"static/media/Video3.f554b72e.mp4",p=i.p+"static/media/Video4.8c870c04.mp4",f=i.p+"static/media/Video5.f50beb2c.mp4",O=i.p+"static/media/Video6.f1af7fc8.mp4",v=i.p+"static/media/Video7.c323505e.mp4",h=i.p+"static/media/Video8.371fbe1a.mp4",y=i.p+"static/media/Video9.e0ec58aa.mp4",g=i.p+"static/media/Video10.bdbee125.mp4",x=i.p+"static/media/Video1.3ab3170b.webm",w=i.p+"static/media/Video2.64ea0100.webm",V=i.p+"static/media/Video3.700b158e.webm",E=i.p+"static/media/Video4.f480d48c.webm",S=i.p+"static/media/Video5.715c5122.webm",I=i.p+"static/media/Video6.d6f8133a.webm",B=i.p+"static/media/Video7.1e88700d.webm",k=i.p+"static/media/Video8.98854871.webm",L=i.p+"static/media/Video9.e54cb7f3.webm",F=i.p+"static/media/Video10.a207ddd7.webm",N=i(19),C=i(1);var q=function(){var e,t=Object(c.useState)(),a=Object(d.a)(t,2),s=a[0],n=a[1],q=Object(c.useState)(),T=Object(d.a)(q,2),J=T[0],M=T[1],P=Object(c.useState)(0),Y=Object(d.a)(P,2),_=Y[0],A=Y[1],D=Object(c.useState)(!1),K=Object(d.a)(D,2),R=K[0],W=K[1],z=Object(c.useState)(!1),G=Object(d.a)(z,2),H=G[0],Q=G[1],U=Object(c.useState)(!0),X=Object(d.a)(U,2),Z=X[0],$=X[1],ee=Object(c.useState)(!1),te=Object(d.a)(ee,2),ie=te[0],ce=te[1],ae=Object(c.useRef)();return Object(c.useEffect)((function(){var e;null===(e=ae.current)||void 0===e||e.load()}),[s]),Object(c.useEffect)((function(){R&&(document.querySelector(".wheel").classList.remove("blur"),W(!1),setTimeout((function(){document.getElementById("video").style.visibility="visible";var e=document.getElementById("sound");function t(e){n(null),document.getElementById("source").srcObject=null,ce(!1);var t=document.querySelector(".button");t.style.pointerEvents="auto",t.classList.remove("disabled")}e.pause(),e.currentTime=0,ce(!0),document.getElementById("video").play(),document.getElementById("video").addEventListener("ended",t,!1)}),"300"))}),[R]),Object(c.useEffect)((function(){Z||function(e){var t=e%360;t<=45?(n(l),M(x)):t>45&&t<=90?(n(b),M(w)):t>90&&t<=135?(n(j),M(V)):t>135&&t<=157.5?(n(p),M(E)):t>157.5&&t<=180?(n(f),M(S)):t>180&&t<=225?(n(O),M(I)):t>225&&t<=270?(n(v),M(B)):t>270&&t<=292.5?(n(h),M(k)):t>292.5&&t<=315?(n(y),M(L)):t>315&&t<=360&&(n(g),M(F))}(_)}),[_]),Object(c.useEffect)((function(){var e=document.getElementById("sound");e&&e.load()}),[]),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"results",style:{visibility:H?"visible":"hidden"},children:[Object(C.jsxs)("audio",{id:"sound",type:"audio/mpeg",src:o,preload:"auto",children:["Your browser does not support the ",Object(C.jsx)("code",{children:"audio"})," element."]}),Object(C.jsxs)("div",{id:"outer",children:[Object(C.jsxs)("div",{id:"app",children:[Object(C.jsx)("img",{className:"foot",style:{pointerEvents:"none"},src:r}),Object(C.jsxs)(N.a.div,{initial:{"--rotate":"".concat(_,"deg")},animate:{"--rotate":"".concat(_,"deg")},onAnimationComplete:function(){Z||W(!0)},transition:{ease:"easeInOut",duration:9},children:[Object(C.jsx)("img",{className:"wheel",style:{transform:"rotate(var(--rotate))"},src:u,onLoad:function(){Q(!0)}})," "]}),Object(C.jsx)("img",{className:"marker",style:{pointerEvents:"none"},src:m}),Object(C.jsxs)("button",{onClick:function(){return function(){$(!1);var t=document.querySelector(".button"),i=document.querySelector(".wheel");document.getElementById("sound").play(),t.classList.add("disabled"),document.getElementById("video").muted=!1,t.style.pointerEvents="none",e=Math.floor(5e3+5e3*Math.random()),A((function(t){return t+e})),i.classList.add("blur")}()},className:"button",children:["F\xe5 svaret",Object(C.jsx)("img",{id:"icon",src:i(15).default,alt:"Start hjulet"})]})]}),Object(C.jsx)(N.a.div,{initial:"opacity: 0",animate:ie?"open":"closed",variants:{open:{opacity:1},closed:{opacity:0}},transition:{ease:"easeInOut",duration:.5},children:Object(C.jsxs)("div",{id:"web-cam",children:[Object(C.jsxs)("video",{poster:"noposter",ref:ae,playsInline:!0,id:"video",muted:!0,children:[Object(C.jsx)("source",{src:s,id:"source",type:"video/mp4"}),Object(C.jsx)("source",{src:J,id:"source",type:"video/webm"}),"Your browser does not support the video tag."]}),Object(C.jsx)("div",{className:"shadow"})]})})]})]})})};var T=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{id:"text",children:[Object(C.jsx)("h1",{children:"Skal du opleve turn\xe9en"}),Object(C.jsx)("div",{id:"containerIntro",children:Object(C.jsxs)("h2",{children:["JOKES - fra en hvid, straight mand ",Object(C.jsx)("span",{className:"light",children:"?"})]})})]}),Object(C.jsx)(q,{})]})},J=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,20)).then((function(t){var i=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;i(e),c(e),a(e),s(e),n(e)}))};n.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(T,{})}),document.getElementById("root")),J()}],[[16,1,2]]]);
//# sourceMappingURL=main.666ff2c5.chunk.js.map