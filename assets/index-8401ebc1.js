import{g as Z,r as $,j as h,L as w}from"./index-5c2c48ca.js";var D={exports:{}},R={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},P={exports:{}},J=function(e){return!e||typeof e=="string"?!1:e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&e.constructor.name!=="String")},X=J,Q=Array.prototype.concat,tt=Array.prototype.slice,L=P.exports=function(e){for(var n=[],r=0,o=e.length;r<o;r++){var l=e[r];X(l)?n=Q.call(n,tt.call(l)):n.push(l)}return n};L.wrap=function(t){return function(){return t(L(arguments))}};var et=P.exports,z=R,A=et,U=Object.hasOwnProperty,W=Object.create(null);for(var H in z)U.call(z,H)&&(W[z[H]]=H);var m=D.exports={to:{},get:{}};m.get=function(t){var e=t.substring(0,3).toLowerCase(),n,r;switch(e){case"hsl":n=m.get.hsl(t),r="hsl";break;case"hwb":n=m.get.hwb(t),r="hwb";break;default:n=m.get.rgb(t),r="rgb";break}return n?{model:r,value:n}:null};m.get.rgb=function(t){if(!t)return null;var e=/^#([a-f0-9]{3,4})$/i,n=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,r=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,o=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,l=/^(\w+)$/,s=[0,0,0,1],a,c,u;if(a=t.match(n)){for(u=a[2],a=a[1],c=0;c<3;c++){var p=c*2;s[c]=parseInt(a.slice(p,p+2),16)}u&&(s[3]=parseInt(u,16)/255)}else if(a=t.match(e)){for(a=a[1],u=a[3],c=0;c<3;c++)s[c]=parseInt(a[c]+a[c],16);u&&(s[3]=parseInt(u+u,16)/255)}else if(a=t.match(r)){for(c=0;c<3;c++)s[c]=parseInt(a[c+1],0);a[4]&&(a[5]?s[3]=parseFloat(a[4])*.01:s[3]=parseFloat(a[4]))}else if(a=t.match(o)){for(c=0;c<3;c++)s[c]=Math.round(parseFloat(a[c+1])*2.55);a[4]&&(a[5]?s[3]=parseFloat(a[4])*.01:s[3]=parseFloat(a[4]))}else return(a=t.match(l))?a[1]==="transparent"?[0,0,0,0]:U.call(z,a[1])?(s=z[a[1]],s[3]=1,s):null:null;for(c=0;c<3;c++)s[c]=x(s[c],0,255);return s[3]=x(s[3],0,1),s};m.get.hsl=function(t){if(!t)return null;var e=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,n=t.match(e);if(n){var r=parseFloat(n[4]),o=(parseFloat(n[1])%360+360)%360,l=x(parseFloat(n[2]),0,100),s=x(parseFloat(n[3]),0,100),a=x(isNaN(r)?1:r,0,1);return[o,l,s,a]}return null};m.get.hwb=function(t){if(!t)return null;var e=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,n=t.match(e);if(n){var r=parseFloat(n[4]),o=(parseFloat(n[1])%360+360)%360,l=x(parseFloat(n[2]),0,100),s=x(parseFloat(n[3]),0,100),a=x(isNaN(r)?1:r,0,1);return[o,l,s,a]}return null};m.to.hex=function(){var t=A(arguments);return"#"+O(t[0])+O(t[1])+O(t[2])+(t[3]<1?O(Math.round(t[3]*255)):"")};m.to.rgb=function(){var t=A(arguments);return t.length<4||t[3]===1?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"};m.to.rgb.percent=function(){var t=A(arguments),e=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),r=Math.round(t[2]/255*100);return t.length<4||t[3]===1?"rgb("+e+"%, "+n+"%, "+r+"%)":"rgba("+e+"%, "+n+"%, "+r+"%, "+t[3]+")"};m.to.hsl=function(){var t=A(arguments);return t.length<4||t[3]===1?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"};m.to.hwb=function(){var t=A(arguments),e="";return t.length>=4&&t[3]!==1&&(e=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+e+")"};m.to.keyword=function(t){return W[t.slice(0,3)]};function x(t,e,n){return Math.min(Math.max(e,t),n)}function O(t){var e=Math.round(t).toString(16).toUpperCase();return e.length<2?"0"+e:e}var nt=D.exports;const _=R,V={};for(const t of Object.keys(_))V[_[t]]=t;const i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var K=i;for(const t of Object.keys(i)){if(!("channels"in i[t]))throw new Error("missing channels property: "+t);if(!("labels"in i[t]))throw new Error("missing channel labels property: "+t);if(i[t].labels.length!==i[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:e,labels:n}=i[t];delete i[t].channels,delete i[t].labels,Object.defineProperty(i[t],"channels",{value:e}),Object.defineProperty(i[t],"labels",{value:n})}i.rgb.hsl=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,o=Math.min(e,n,r),l=Math.max(e,n,r),s=l-o;let a,c;l===o?a=0:e===l?a=(n-r)/s:n===l?a=2+(r-e)/s:r===l&&(a=4+(e-n)/s),a=Math.min(a*60,360),a<0&&(a+=360);const u=(o+l)/2;return l===o?c=0:u<=.5?c=s/(l+o):c=s/(2-l-o),[a,c*100,u*100]};i.rgb.hsv=function(t){let e,n,r,o,l;const s=t[0]/255,a=t[1]/255,c=t[2]/255,u=Math.max(s,a,c),p=u-Math.min(s,a,c),v=function(Y){return(u-Y)/6/p+1/2};return p===0?(o=0,l=0):(l=p/u,e=v(s),n=v(a),r=v(c),s===u?o=r-n:a===u?o=1/3+e-r:c===u&&(o=2/3+n-e),o<0?o+=1:o>1&&(o-=1)),[o*360,l*100,u*100]};i.rgb.hwb=function(t){const e=t[0],n=t[1];let r=t[2];const o=i.rgb.hsl(t)[0],l=1/255*Math.min(e,Math.min(n,r));return r=1-1/255*Math.max(e,Math.max(n,r)),[o,l*100,r*100]};i.rgb.cmyk=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,o=Math.min(1-e,1-n,1-r),l=(1-e-o)/(1-o)||0,s=(1-n-o)/(1-o)||0,a=(1-r-o)/(1-o)||0;return[l*100,s*100,a*100,o*100]};function rt(t,e){return(t[0]-e[0])**2+(t[1]-e[1])**2+(t[2]-e[2])**2}i.rgb.keyword=function(t){const e=V[t];if(e)return e;let n=1/0,r;for(const o of Object.keys(_)){const l=_[o],s=rt(t,l);s<n&&(n=s,r=o)}return r};i.keyword.rgb=function(t){return _[t]};i.rgb.xyz=function(t){let e=t[0]/255,n=t[1]/255,r=t[2]/255;e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const o=e*.4124+n*.3576+r*.1805,l=e*.2126+n*.7152+r*.0722,s=e*.0193+n*.1192+r*.9505;return[o*100,l*100,s*100]};i.rgb.lab=function(t){const e=i.rgb.xyz(t);let n=e[0],r=e[1],o=e[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;const l=116*r-16,s=500*(n-r),a=200*(r-o);return[l,s,a]};i.hsl.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;let o,l,s;if(n===0)return s=r*255,[s,s,s];r<.5?o=r*(1+n):o=r+n-r*n;const a=2*r-o,c=[0,0,0];for(let u=0;u<3;u++)l=e+1/3*-(u-1),l<0&&l++,l>1&&l--,6*l<1?s=a+(o-a)*6*l:2*l<1?s=o:3*l<2?s=a+(o-a)*(2/3-l)*6:s=a,c[u]=s*255;return c};i.hsl.hsv=function(t){const e=t[0];let n=t[1]/100,r=t[2]/100,o=n;const l=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=l<=1?l:2-l;const s=(r+n)/2,a=r===0?2*o/(l+o):2*n/(r+n);return[e,a*100,s*100]};i.hsv.rgb=function(t){const e=t[0]/60,n=t[1]/100;let r=t[2]/100;const o=Math.floor(e)%6,l=e-Math.floor(e),s=255*r*(1-n),a=255*r*(1-n*l),c=255*r*(1-n*(1-l));switch(r*=255,o){case 0:return[r,c,s];case 1:return[a,r,s];case 2:return[s,r,c];case 3:return[s,a,r];case 4:return[c,s,r];case 5:return[r,s,a]}};i.hsv.hsl=function(t){const e=t[0],n=t[1]/100,r=t[2]/100,o=Math.max(r,.01);let l,s;s=(2-n)*r;const a=(2-n)*o;return l=n*o,l/=a<=1?a:2-a,l=l||0,s/=2,[e,l*100,s*100]};i.hwb.rgb=function(t){const e=t[0]/360;let n=t[1]/100,r=t[2]/100;const o=n+r;let l;o>1&&(n/=o,r/=o);const s=Math.floor(6*e),a=1-r;l=6*e-s,s&1&&(l=1-l);const c=n+l*(a-n);let u,p,v;switch(s){default:case 6:case 0:u=a,p=c,v=n;break;case 1:u=c,p=a,v=n;break;case 2:u=n,p=a,v=c;break;case 3:u=n,p=c,v=a;break;case 4:u=c,p=n,v=a;break;case 5:u=a,p=n,v=c;break}return[u*255,p*255,v*255]};i.cmyk.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100,o=t[3]/100,l=1-Math.min(1,e*(1-o)+o),s=1-Math.min(1,n*(1-o)+o),a=1-Math.min(1,r*(1-o)+o);return[l*255,s*255,a*255]};i.xyz.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100;let o,l,s;return o=e*3.2406+n*-1.5372+r*-.4986,l=e*-.9689+n*1.8758+r*.0415,s=e*.0557+n*-.204+r*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,l=l>.0031308?1.055*l**(1/2.4)-.055:l*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,o=Math.min(Math.max(0,o),1),l=Math.min(Math.max(0,l),1),s=Math.min(Math.max(0,s),1),[o*255,l*255,s*255]};i.xyz.lab=function(t){let e=t[0],n=t[1],r=t[2];e/=95.047,n/=100,r/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16,l=500*(e-n),s=200*(n-r);return[o,l,s]};i.lab.xyz=function(t){const e=t[0],n=t[1],r=t[2];let o,l,s;l=(e+16)/116,o=n/500+l,s=l-r/200;const a=l**3,c=o**3,u=s**3;return l=a>.008856?a:(l-16/116)/7.787,o=c>.008856?c:(o-16/116)/7.787,s=u>.008856?u:(s-16/116)/7.787,o*=95.047,l*=100,s*=108.883,[o,l,s]};i.lab.lch=function(t){const e=t[0],n=t[1],r=t[2];let o;o=Math.atan2(r,n)*360/2/Math.PI,o<0&&(o+=360);const s=Math.sqrt(n*n+r*r);return[e,s,o]};i.lch.lab=function(t){const e=t[0],n=t[1],o=t[2]/360*2*Math.PI,l=n*Math.cos(o),s=n*Math.sin(o);return[e,l,s]};i.rgb.ansi16=function(t,e=null){const[n,r,o]=t;let l=e===null?i.rgb.hsv(t)[2]:e;if(l=Math.round(l/50),l===0)return 30;let s=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return l===2&&(s+=60),s};i.hsv.ansi16=function(t){return i.rgb.ansi16(i.hsv.rgb(t),t[2])};i.rgb.ansi256=function(t){const e=t[0],n=t[1],r=t[2];return e===n&&n===r?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};i.ansi16.rgb=function(t){let e=t%10;if(e===0||e===7)return t>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const n=(~~(t>50)+1)*.5,r=(e&1)*n*255,o=(e>>1&1)*n*255,l=(e>>2&1)*n*255;return[r,o,l]};i.ansi256.rgb=function(t){if(t>=232){const l=(t-232)*10+8;return[l,l,l]}t-=16;let e;const n=Math.floor(t/36)/5*255,r=Math.floor((e=t%36)/6)/5*255,o=e%6/5*255;return[n,r,o]};i.rgb.hex=function(t){const n=(((Math.round(t[0])&255)<<16)+((Math.round(t[1])&255)<<8)+(Math.round(t[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};i.hex.rgb=function(t){const e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];let n=e[0];e[0].length===3&&(n=n.split("").map(a=>a+a).join(""));const r=parseInt(n,16),o=r>>16&255,l=r>>8&255,s=r&255;return[o,l,s]};i.rgb.hcg=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,o=Math.max(Math.max(e,n),r),l=Math.min(Math.min(e,n),r),s=o-l;let a,c;return s<1?a=l/(1-s):a=0,s<=0?c=0:o===e?c=(n-r)/s%6:o===n?c=2+(r-e)/s:c=4+(e-n)/s,c/=6,c%=1,[c*360,s*100,a*100]};i.hsl.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=n<.5?2*e*n:2*e*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[t[0],r*100,o*100]};i.hsv.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=e*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[t[0],r*100,o*100]};i.hcg.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;if(n===0)return[r*255,r*255,r*255];const o=[0,0,0],l=e%1*6,s=l%1,a=1-s;let c=0;switch(Math.floor(l)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=a,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=a,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=a}return c=(1-n)*r,[(n*o[0]+c)*255,(n*o[1]+c)*255,(n*o[2]+c)*255]};i.hcg.hsv=function(t){const e=t[1]/100,n=t[2]/100,r=e+n*(1-e);let o=0;return r>0&&(o=e/r),[t[0],o*100,r*100]};i.hcg.hsl=function(t){const e=t[1]/100,r=t[2]/100*(1-e)+.5*e;let o=0;return r>0&&r<.5?o=e/(2*r):r>=.5&&r<1&&(o=e/(2*(1-r))),[t[0],o*100,r*100]};i.hcg.hwb=function(t){const e=t[1]/100,n=t[2]/100,r=e+n*(1-e);return[t[0],(r-e)*100,(1-r)*100]};i.hwb.hcg=function(t){const e=t[1]/100,r=1-t[2]/100,o=r-e;let l=0;return o<1&&(l=(r-o)/(1-o)),[t[0],o*100,l*100]};i.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]};i.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]};i.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]};i.gray.hsl=function(t){return[0,0,t[0]]};i.gray.hsv=i.gray.hsl;i.gray.hwb=function(t){return[0,100,t[0]]};i.gray.cmyk=function(t){return[0,0,0,t[0]]};i.gray.lab=function(t){return[t[0],0,0]};i.gray.hex=function(t){const e=Math.round(t[0]/100*255)&255,r=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(r.length)+r};i.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]};const E=K;function ot(){const t={},e=Object.keys(E);for(let n=e.length,r=0;r<n;r++)t[e[r]]={distance:-1,parent:null};return t}function st(t){const e=ot(),n=[t];for(e[t].distance=0;n.length;){const r=n.pop(),o=Object.keys(E[r]);for(let l=o.length,s=0;s<l;s++){const a=o[s],c=e[a];c.distance===-1&&(c.distance=e[r].distance+1,c.parent=r,n.unshift(a))}}return e}function lt(t,e){return function(n){return e(t(n))}}function at(t,e){const n=[e[t].parent,t];let r=E[e[t].parent][t],o=e[t].parent;for(;e[o].parent;)n.unshift(e[o].parent),r=lt(E[e[o].parent][o],r),o=e[o].parent;return r.conversion=n,r}var ct=function(t){const e=st(t),n={},r=Object.keys(e);for(let o=r.length,l=0;l<o;l++){const s=r[l];e[s].parent!==null&&(n[s]=at(s,e))}return n};const I=K,it=ct,C={},ht=Object.keys(I);function ut(t){const e=function(...n){const r=n[0];return r==null?r:(r.length>1&&(n=r),t(n))};return"conversion"in t&&(e.conversion=t.conversion),e}function ft(t){const e=function(...n){const r=n[0];if(r==null)return r;r.length>1&&(n=r);const o=t(n);if(typeof o=="object")for(let l=o.length,s=0;s<l;s++)o[s]=Math.round(o[s]);return o};return"conversion"in t&&(e.conversion=t.conversion),e}ht.forEach(t=>{C[t]={},Object.defineProperty(C[t],"channels",{value:I[t].channels}),Object.defineProperty(C[t],"labels",{value:I[t].labels});const e=it(t);Object.keys(e).forEach(r=>{const o=e[r];C[t][r]=ft(o),C[t][r].raw=ut(o)})});var dt=C;const F=nt,b=dt,G=["keyword","gray","hex"],N={};for(const t of Object.keys(b))N[[...b[t].labels].sort().join("")]=t;const B={};function g(t,e){if(!(this instanceof g))return new g(t,e);if(e&&e in G&&(e=null),e&&!(e in b))throw new Error("Unknown model: "+e);let n,r;if(t==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof g)this.model=t.model,this.color=[...t.color],this.valpha=t.valpha;else if(typeof t=="string"){const o=F.get(t);if(o===null)throw new Error("Unable to parse color from string: "+t);this.model=o.model,r=b[this.model].channels,this.color=o.value.slice(0,r),this.valpha=typeof o.value[r]=="number"?o.value[r]:1}else if(t.length>0){this.model=e||"rgb",r=b[this.model].channels;const o=Array.prototype.slice.call(t,0,r);this.color=T(o,r),this.valpha=typeof t[r]=="number"?t[r]:1}else if(typeof t=="number")this.model="rgb",this.color=[t>>16&255,t>>8&255,t&255],this.valpha=1;else{this.valpha=1;const o=Object.keys(t);"alpha"in t&&(o.splice(o.indexOf("alpha"),1),this.valpha=typeof t.alpha=="number"?t.alpha:0);const l=o.sort().join("");if(!(l in N))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=N[l];const{labels:s}=b[this.model],a=[];for(n=0;n<s.length;n++)a.push(t[s[n]]);this.color=T(a)}if(B[this.model])for(r=b[this.model].channels,n=0;n<r;n++){const o=B[this.model][n];o&&(this.color[n]=o(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}g.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(t){let e=this.model in F.to?this:this.rgb();e=e.round(typeof t=="number"?t:1);const n=e.valpha===1?e.color:[...e.color,this.valpha];return F.to[e.model](n)},percentString(t){const e=this.rgb().round(typeof t=="number"?t:1),n=e.valpha===1?e.color:[...e.color,this.valpha];return F.to.rgb.percent(n)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){const t={},{channels:e}=b[this.model],{labels:n}=b[this.model];for(let r=0;r<e;r++)t[n[r]]=this.color[r];return this.valpha!==1&&(t.alpha=this.valpha),t},unitArray(){const t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,this.valpha!==1&&t.push(this.valpha),t},unitObject(){const t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,this.valpha!==1&&(t.alpha=this.valpha),t},round(t){return t=Math.max(t||0,0),new g([...this.color.map(pt(t)),this.valpha],this.model)},alpha(t){return t!==void 0?new g([...this.color,Math.max(0,Math.min(1,t))],this.model):this.valpha},red:f("rgb",0,d(255)),green:f("rgb",1,d(255)),blue:f("rgb",2,d(255)),hue:f(["hsl","hsv","hsl","hwb","hcg"],0,t=>(t%360+360)%360),saturationl:f("hsl",1,d(100)),lightness:f("hsl",2,d(100)),saturationv:f("hsv",1,d(100)),value:f("hsv",2,d(100)),chroma:f("hcg",1,d(100)),gray:f("hcg",2,d(100)),white:f("hwb",1,d(100)),wblack:f("hwb",2,d(100)),cyan:f("cmyk",0,d(100)),magenta:f("cmyk",1,d(100)),yellow:f("cmyk",2,d(100)),black:f("cmyk",3,d(100)),x:f("xyz",0,d(95.047)),y:f("xyz",1,d(100)),z:f("xyz",2,d(108.833)),l:f("lab",0,d(100)),a:f("lab",1),b:f("lab",2),keyword(t){return t!==void 0?new g(t):b[this.model].keyword(this.color)},hex(t){return t!==void 0?new g(t):F.to.hex(this.rgb().round().color)},hexa(t){if(t!==void 0)return new g(t);const e=this.rgb().round().color;let n=Math.round(this.valpha*255).toString(16).toUpperCase();return n.length===1&&(n="0"+n),F.to.hex(e)+n},rgbNumber(){const t=this.rgb().color;return(t[0]&255)<<16|(t[1]&255)<<8|t[2]&255},luminosity(){const t=this.rgb().color,e=[];for(const[n,r]of t.entries()){const o=r/255;e[n]=o<=.04045?o/12.92:((o+.055)/1.055)**2.4}return .2126*e[0]+.7152*e[1]+.0722*e[2]},contrast(t){const e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level(t){const e=this.contrast(t);return e>=7?"AAA":e>=4.5?"AA":""},isDark(){const t=this.rgb().color;return(t[0]*2126+t[1]*7152+t[2]*722)/1e4<128},isLight(){return!this.isDark()},negate(){const t=this.rgb();for(let e=0;e<3;e++)t.color[e]=255-t.color[e];return t},lighten(t){const e=this.hsl();return e.color[2]+=e.color[2]*t,e},darken(t){const e=this.hsl();return e.color[2]-=e.color[2]*t,e},saturate(t){const e=this.hsl();return e.color[1]+=e.color[1]*t,e},desaturate(t){const e=this.hsl();return e.color[1]-=e.color[1]*t,e},whiten(t){const e=this.hwb();return e.color[1]+=e.color[1]*t,e},blacken(t){const e=this.hwb();return e.color[2]+=e.color[2]*t,e},grayscale(){const t=this.rgb().color,e=t[0]*.3+t[1]*.59+t[2]*.11;return g.rgb(e,e,e)},fade(t){return this.alpha(this.valpha-this.valpha*t)},opaquer(t){return this.alpha(this.valpha+this.valpha*t)},rotate(t){const e=this.hsl();let n=e.color[0];return n=(n+t)%360,n=n<0?360+n:n,e.color[0]=n,e},mix(t,e){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);const n=t.rgb(),r=this.rgb(),o=e===void 0?.5:e,l=2*o-1,s=n.alpha()-r.alpha(),a=((l*s===-1?l:(l+s)/(1+l*s))+1)/2,c=1-a;return g.rgb(a*n.red()+c*r.red(),a*n.green()+c*r.green(),a*n.blue()+c*r.blue(),n.alpha()*o+r.alpha()*(1-o))}};for(const t of Object.keys(b)){if(G.includes(t))continue;const{channels:e}=b[t];g.prototype[t]=function(...n){return this.model===t?new g(this):n.length>0?new g(n,t):new g([...bt(b[this.model][t].raw(this.color)),this.valpha],t)},g[t]=function(...n){let r=n[0];return typeof r=="number"&&(r=T(n,e)),new g(r,t)}}function gt(t,e){return Number(t.toFixed(e))}function pt(t){return function(e){return gt(e,t)}}function f(t,e,n){t=Array.isArray(t)?t:[t];for(const r of t)(B[r]||(B[r]=[]))[e]=n;return t=t[0],function(r){let o;return r!==void 0?(n&&(r=n(r)),o=this[t](),o.color[e]=r,o):(o=this[t]().color[e],n&&(o=n(o)),o)}}function d(t){return function(e){return Math.max(0,Math.min(t,e))}}function bt(t){return Array.isArray(t)?t:[t]}function T(t,e){for(let n=0;n<e;n++)typeof t[n]!="number"&&(t[n]=0);return t}var mt=g;const q=Z(mt);function vt(t,{target:e=document.body}={}){if(typeof t!="string")throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof t}\`.`);const n=document.createElement("textarea"),r=document.activeElement;n.value=t,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection(),l=o.rangeCount>0&&o.getRangeAt(0);e.append(n),n.select(),n.selectionStart=0,n.selectionEnd=t.length;let s=!1;try{s=document.execCommand("copy")}catch{}return n.remove(),l&&(o.removeAllRanges(),o.addRange(l)),r&&r.focus(),s}const yt="_container_1shvv_1",xt="_colorTextBox_1shvv_11",wt="_colorData_1shvv_35",kt="_colorPreview_1shvv_43",Mt="_copyButton_1shvv_49",St="_copyIcon_1shvv_60",jt="_colorDataText_1shvv_72",Ct="_colorInputs_1shvv_78",Ft="_selected_1shvv_92",y={container:yt,colorTextBox:xt,colorData:wt,colorPreview:kt,copyButton:Mt,copyIcon:St,colorDataText:jt,colorInputs:Ct,selected:Ft};function $t({children:t}){const[e,n]=$.useState(0);return h.jsxs("div",{className:y.colorInputs,children:[t.map((r,o)=>h.jsx("button",{className:o===e?y.selected:"",onClick:()=>n(o),type:"button",children:r.props.label},r.props.label)),t[e]]})}function M({children:t}){return h.jsx(h.Fragment,{children:t})}const S=(t,...e)=>String.raw({raw:t},...e.map(n=>typeof n=="number"?Math.round(n*(t[0]==="rgb("?1:100))/(t[0]==="rgb("?1:100):n));function j({c:t,color:e,method:n,min:r=0,max:o,setColor:l}){return h.jsxs("label",{children:[t,h.jsx("input",{type:"range",style:{...Object.fromEntries(Array.from({length:11},(s,a)=>[`--color-${a}`,e[n](o/10*a).rgb().toString()])),"--color-current":e.negate().toString()},value:e[n](),min:r,max:o,onInput:s=>{l(e[n](Number(s.currentTarget.value)))}})]},t)}function k({colorString:t}){const[e,n]=$.useState(!1),r=$.useRef(null);return $.useEffect(()=>()=>{r.current&&clearTimeout(r.current)},[]),h.jsxs("button",{className:y.copyButton,onClick:()=>{vt(t),n(!0),r.current=setTimeout(()=>{n(!1)},1e3)},type:"button",children:[h.jsx("code",{children:t}),e?h.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:y.copyIcon,children:h.jsx("path",{d:"M4.89163 13.2687L9.16582 17.5427L18.7085 8",stroke:"var(--color-green)",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})}):h.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:y.copyIcon,children:[h.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z",fill:"var(--color-text)"}),h.jsx("path",{d:"M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z",fill:"var(--color-text)"})]})]})}function _t(){const[t,e]=$.useState(new q("#39cac4"));return h.jsxs(h.Fragment,{children:[h.jsx("h1",{children:"Color converter"}),h.jsxs("div",{className:y.container,children:[h.jsx("input",{className:y.colorTextBox,onInput:n=>{try{e(new q(n.currentTarget.value)),n.currentTarget.setCustomValidity("")}catch{n.currentTarget.setCustomValidity("Invalid color"),n.currentTarget.reportValidity()}},defaultValue:t.hex().toString()}),h.jsxs("div",{className:y.colorData,children:[h.jsx("div",{className:y.colorPreview,style:{backgroundColor:t.rgb().toString()}}),h.jsxs("div",{className:y.colorDataText,children:[h.jsxs("span",{children:[h.jsx(w,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color",children:"HEX"}),": ",h.jsx(k,{colorString:t.hex()})]}),h.jsxs("span",{children:[h.jsx(w,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb",children:"RGB"}),":"," ",h.jsx(k,{colorString:S`rgb(${t.red()} ${t.green()} ${t.blue()})`})]}),h.jsxs("span",{children:[h.jsx(w,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl",children:"HSL"}),":"," ",h.jsx(k,{colorString:S`hsl(${t.hue()} ${t.saturationl()}% ${t.lightness()}%)`})]}),h.jsxs("span",{children:[h.jsx(w,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb",children:"HWB"}),":"," ",h.jsx(k,{colorString:S`hwb(${t.hue()} ${t.white()}% ${t.black()}%)`})]}),h.jsxs("span",{children:[h.jsx(w,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/device-cmyk",children:"CMYK"}),":"," ",h.jsx(k,{colorString:S`device-cmyk(${t.cyan()}% ${t.magenta()}% ${t.yellow()}% ${t.black()}%)`})]}),h.jsxs("span",{children:[h.jsx(w,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab",children:"LAB"}),":"," ",h.jsx(k,{colorString:S`lab(${t.l()}% ${t.a()}% ${t.b()}%)`})]}),h.jsxs("span",{children:[h.jsx(w,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch",children:"LCH"}),":"," ",h.jsx(k,{colorString:S`lch(${t.l()}% ${t.chroma()}% ${t.hue()})`})]})]})]}),h.jsxs($t,{children:[h.jsx(M,{label:"RGB",children:["R","G","B"].map(n=>h.jsx(j,{c:n,color:t,method:{R:"red",G:"green",B:"blue"}[n],max:255,setColor:e},n))}),h.jsx(M,{label:"HSL",children:["H","S","L"].map(n=>h.jsx(j,{c:n,color:t,method:{H:"hue",S:"saturationl",L:"lightness"}[n],max:n==="H"?359:100,setColor:e},n))}),h.jsx(M,{label:"HWB",children:["H","W","B"].map(n=>h.jsx(j,{c:n,color:t,method:{H:"hue",W:"white",B:"black"}[n],max:n==="H"?359:100,setColor:e},n))}),h.jsx(M,{label:"CMYK",children:["C","M","Y","K"].map(n=>h.jsx(j,{c:n,color:t,method:{C:"cyan",M:"magenta",Y:"yellow",K:"black"}[n],max:100,setColor:e},n))}),h.jsx(M,{label:"LAB",children:["L","A","B"].map(n=>h.jsx(j,{c:n,color:t,method:{L:"l",A:"a",B:"b"}[n],min:n==="L"?0:-100,max:100,setColor:e},n))}),h.jsx(M,{label:"LCH",children:["L","C","H"].map(n=>h.jsx(j,{c:n,color:t,method:{L:"l",C:"chroma",H:"hue"}[n],max:n==="H"?360:100,setColor:e},n))})]})]})]})}export{_t as default};
