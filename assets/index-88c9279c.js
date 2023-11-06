import{R as z,u as k,j as t,r as i}from"./index-59f9b029.js";import{c as y,B as b}from"./react-tooltip.min-8505d10a.js";const v="_nameBorder_1cu8z_1",$="_elements_1cu8z_5",N="_eye_1cu8z_63",C="_rolling_1cu8z_1",R="_eyebrow_1cu8z_67",O="_raising_1cu8z_1",m={nameBorder:v,elements:$,eye:N,rolling:C,eyebrow:R,raising:O},w={x:95.534,y:105.729},_={x:137.853,y:128.715},u={w:158.932,h:143.49},o={w:75.67,h:80.026},B=[1,.7],M=[0,35],W=[0,32],Y=[w.x,40],L=[w.y,60],E=u.w*(o.h/u.h),I=[u.w,E*.8],F=[u.h,o.h*.8],q=[_.x,50],H=[_.y,140],X=[o.w,o.w*.8],D=[o.h,o.h*.8],T=[-30,50],A=[135,90],G=[180,85],J=[135,170],P=[64,64*.8],Z=[0,0,1],K=[0,0,1],Q=[0,1];function U({getVal:e,superTall:r,globalYShift:n},c){const a=e(B),l=e(I),f=e(F),h=e(X),j=e(D),s=e(P),{colorMode:d}=k(),p=d==="dark"?[255,255]:[0,255];return t.jsxs("svg",{ref:c,xmlns:"http://www.w3.org/2000/svg",viewBox:`-100 0 400 ${r?1e3:200}`,className:y(m.elements),preserveAspectRatio:"xMinYMin slice",children:[t.jsxs("g",{"data-color-mode":"dark",transform:`matrix(${a}, 0, 0, ${a}, ${e(M)}, ${e(W)+n})`,children:[t.jsx("path",{transform:`matrix(${l/u.w}, 0, 0, ${f/u.h}, ${e(Y)-w.x*l/u.w}, ${e(L)-w.y*f/u.h})`,fill:`rgb(${e(p)}, ${e(p)}, ${e(p)})`,d:"m 25.000024,33.983972 c 0,6.666603 0,13.333209 0,19.999811 21.206457,0 42.412914,0 63.619371,0 C 76.268383,84.308203 63.917371,114.63262 51.56636,144.95704 43.949254,138.6582 36.332149,132.35936 28.715044,126.06052 c -4.215592,5.09771 -8.431183,10.19542 -12.646774,15.29312 14.560523,12.04027 29.121047,24.08053 43.68157,36.1208 16.765902,-41.16356 33.531802,-82.327105 50.2977,-123.490657 21.65088,0 43.30175,0 64.95263,0 0,-6.666602 0,-13.333208 0,-19.999811 -50.00005,0 -100.000099,0 -150.000146,0 z"}),t.jsx("path",{transform:`matrix(${h/o.w}, 0, 0, ${h/o.w}, ${e(q)-_.x*(h/o.w)}, ${e(H)-_.y*(j/o.h)})`,fill:"#39cac4",d:"m 140.00024,88.704146 c -14.57119,-0.146727 -28.77435,8.438626 -35.41701,21.408444 -6.887844,12.80774 -5.907795,29.33375 2.44512,41.23782 8.1127,12.06896 23.18577,18.91468 37.61195,17.08339 12.76941,-1.39907 24.56534,-9.40876 30.57588,-20.76168 -6.24613,-2.54437 -12.49226,-5.08875 -18.73839,-7.63312 -4.58977,6.86513 -13.68643,10.24125 -21.64158,7.9871 -8.26921,-2.07565 -14.58304,-9.94716 -14.81805,-18.4691 -0.49978,-8.60374 5.25678,-17.06758 13.44756,-19.75545 8.10211,-2.942 17.85888,0.15517 22.77742,7.23362 0.61787,1.1324 1.20218,2.0566 2.45912,0.99798 5.66191,-2.46481 11.32382,-4.92962 16.98572,-7.39443 -6.45,-13.066693 -20.52456,-21.861287 -35.09633,-21.930195 -0.19712,-0.0029 -0.39427,-0.0044 -0.59141,-0.0044 z"}),t.jsx("text",{opacity:e(Z),x:e(T),y:e(A),fontSize:s,fill:"var(--color-text)",children:e([0,1])>.5?"oshua":""}),t.jsx("text",{opacity:e(K),x:e(G),y:e(J),fontSize:s,fill:"#39cac4",children:e([0,1])>.5?"hen":""})]}),t.jsxs("g",{transform:"matrix(1.2, 0, 0, 1.2, -23, -30)",children:[t.jsx("path",{className:m.eyebrow,d:"m 130.03906,35.265625 c -6.57096,0.37252 -13.07243,3.355468 -17.28515,8.46875 0.88932,0.650391 1.77865,1.300781 2.66797,1.951172 4.43368,-5.340543 11.71756,-7.687776 18.51336,-7.130448 7.67453,0.605406 14.78248,4.099282 21.12921,8.26912 0.60807,-0.91862 1.21615,-1.83724 1.82422,-2.75586 -7.38373,-4.862754 -15.85747,-8.764558 -24.84934,-8.859205 -0.66714,-0.004 -1.33444,0.01439 -2.00027,0.05647 z"}),t.jsx("path",{style:{fill:"white",stroke:"black",strokeWidth:4,strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"none",paintOrder:"stroke fill markers"},d:"m 153.86903,55.368874 c -0.10519,2.366721 -2.40555,3.806331 -4.30783,4.756214 -5.76944,2.601433 -12.276,3.051559 -18.52206,2.704715 -4.72103,-0.402854 -9.66795,-1.168747 -13.69218,-3.840952 -1.57182,-1.014048 -3.00432,-3.044071 -2.06513,-4.940148 1.38193,-2.600204 4.39224,-3.709345 7.0221,-4.603408 7.07564,-2.055388 14.68311,-2.140198 21.87419,-0.631329 3.21502,0.807417 6.74549,1.805406 8.93804,4.466841 0.44661,0.601486 0.75658,1.329592 0.75287,2.088067 z"}),t.jsx("path",{className:m.eye,fill:"black",d:"m 127.75874,54.998494 c 0.0205,1.2573 -1.00865,2.3469 -2.15068,2.4722 -1.20933,0.2018 -2.54385,-0.659 -2.79539,-1.9736 -0.26724,-1.1948 0.49672,-2.4748 1.57136,-2.8371 1.20571,-0.4801 2.74703,0.1524 3.2175,1.4672 0.10312,0.2763 0.15748,0.5737 0.15721,0.8713 z"}),t.jsx("path",{className:m.eyebrow,d:"m 67.189453,34.892578 c -6.570618,0.37531 -13.07235,3.357143 -17.285156,8.470703 0.889323,0.650391 1.778646,1.300781 2.667969,1.951172 4.433686,-5.34054 11.717567,-7.687777 18.513365,-7.130448 7.674528,0.605406 14.782484,4.099283 21.129213,8.26912 0.608073,-0.91862 1.216145,-1.837239 1.824218,-2.755859 -7.383909,-4.862683 -15.857256,-8.765788 -24.849343,-8.861111 -0.667137,-0.004 -1.334436,0.01434 -2.000266,0.05642 z"}),t.jsx("path",{style:{fill:"white",stroke:"black",strokeWidth:4,strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"none",paintOrder:"stroke fill markers"},d:"m 91.019508,54.997169 c -0.105185,2.366722 -2.405551,3.806332 -4.307834,4.756215 -5.769431,2.601433 -12.275998,3.051559 -18.52205,2.704715 -4.721032,-0.402854 -9.66795,-1.168747 -13.692187,-3.840952 -1.571817,-1.014048 -3.004316,-3.044071 -2.065128,-4.940148 1.381929,-2.600204 4.392238,-3.709345 7.022107,-4.603408 7.075633,-2.055388 14.6831,-2.140198 21.874179,-0.631329 3.215024,0.807417 6.745497,1.805406 8.938038,4.466841 0.446612,0.601486 0.756586,1.329591 0.752875,2.088066 z"}),t.jsx("path",{className:m.eye,fill:"black",d:"m 64.199753,54.998493 c 0.01817,1.240801 -0.970846,2.309985 -2.094058,2.463637 -1.211091,0.228208 -2.55671,-0.595823 -2.839702,-1.909945 -0.289738,-1.167921 0.407551,-2.434405 1.446127,-2.845906 1.189665,-0.542318 2.744057,0.01649 3.283233,1.303159 0.133651,0.308771 0.204696,0.648627 0.2044,0.989055 z",style:{strokeWidth:1.33}})]}),t.jsxs("g",{opacity:e(Q),transform:`matrix(1, 0, 0, 1, 0, ${n})`,children:[t.jsx("path",{stroke:"var(--color-background)",strokeWidth:5,className:m.nameBorder,d:"M -100,100 L 10,100"}),t.jsx("path",{stroke:"var(--color-background)",strokeWidth:5,className:m.nameBorder,d:"M 300,100 L 190,100"}),t.jsx("path",{fillOpacity:0,stroke:"var(--color-background)",strokeWidth:5,className:m.nameBorder,d:"M 10,5 L 190,5 L 190,195 L 10,195 Z"})]})]})}const S=z.forwardRef(U),V="_container_16u1d_1",e0="_frame_16u1d_10",t0="_pictureFrame_16u1d_21",s0="_frameContent_16u1d_34",x={container:V,frame:e0,pictureFrame:t0,frameContent:s0},r0=[0,1];function g(e){return r=>{const n=e*(r.length-1),c=Math.floor(n);if(c===r.length-1)return r.at(-1);const a=r[c],l=r[c+1];return a+(l-a)*(n-c)}}function n0(){const[e,r]=i.useState(0),n=i.useRef(null),c=i.useRef(null),[a,l]=i.useState(0),f=()=>{var s;return(((s=c.current)==null?void 0:s.getBoundingClientRect().width)??400)/400},h=g(a),j=i.useRef(new IntersectionObserver(s=>{const d=s[0].intersectionRatio,p=s[0].intersectionRect.height;d>=0&&d<=1&&d!==a&&s[0].intersectionRect.top!==s[0].rootBounds.top&&(l(d),r(p))},{threshold:Array.from({length:1e3},(s,d)=>d/1e3)}));return i.useEffect(()=>{j.current.observe(n.current);const s=()=>{window.scrollY<20?(l(0),r(0)):window.scrollY>n.current.offsetTop&&(l(1),r(n.current.getBoundingClientRect().height))};return s(),window.addEventListener("scroll",s),()=>{j.current.disconnect(),window.removeEventListener("scroll",s)}},[]),t.jsxs("div",{className:x.container,children:[[0,1].map(s=>t.jsx("div",{className:y(x.frame),ref:s===1?n:void 0},s)),t.jsx("div",{style:{transform:`translateY(${e}px)`,opacity:h(r0),position:"absolute",top:0,left:0},className:y(x.frame,x.pictureFrame)}),t.jsx(S,{getVal:h,superTall:!0,ref:c,globalYShift:e/f()})]})}function o0(){return t.jsx("div",{className:x.container,children:[0,1].map(e=>t.jsx("div",{className:y(x.frame,e===1&&x.pictureFrame),children:t.jsx("div",{className:x.frameContent,children:t.jsx(S,{getVal:g(e),superTall:!1,globalYShift:0})})},e))})}function c0(){const[e,r]=i.useState(!1);return i.useEffect(()=>{r(!0)},[]),e?t.jsx(n0,{}):t.jsx(o0,{})}const i0="_quote_1oobt_1",a0={quote:i0};function m0(){const e=i.useId();return t.jsxs(t.Fragment,{children:[t.jsx(c0,{}),t.jsx("blockquote",{className:a0.quote,children:t.jsxs("p",{children:["I care about"," ",t.jsx("span",{tabIndex:0,"data-tooltip-id":e,className:"term",children:"languages"}),"!"]})}),t.jsx(b,{id:e,className:"tooltip",disableStyleInjection:!0,clickable:!0,children:t.jsx("p",{children:"When I say languages, I mean both natural languages and programming languages."})})]})}export{m0 as default};
