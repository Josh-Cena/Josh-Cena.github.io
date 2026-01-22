import{j as V,L as w0}from"./index-Bb_SBPIJ.js";const{min:Yt,max:zt}=Math,U=(t,n=0,e=1)=>Yt(zt(n,t),e),G0=t=>{t._clipped=!1,t._unclipped=t.slice(0);for(let n=0;n<=3;n++)n<3?((t[n]<0||t[n]>255)&&(t._clipped=!0),t[n]=U(t[n],0,255)):n===3&&(t[n]=U(t[n],0,1));return t},at={};for(let t of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])at[`[object ${t}]`]=t.toLowerCase();function k(t){return at[Object.prototype.toString.call(t)]||"object"}const w=(t,n=null)=>t.length>=3?Array.prototype.slice.call(t):k(t[0])=="object"&&n?n.split("").filter(e=>t[0][e]!==void 0).map(e=>t[0][e]):t[0].slice(0),a0=t=>{if(t.length<2)return null;const n=t.length-1;return k(t[n])=="string"?t[n].toLowerCase():null},{PI:v0,min:it,max:ct}=Math,z=t=>Math.round(t*100)/100,P0=t=>Math.round(t*100)/100,q=v0*2,y0=v0/3,Ft=v0/180,Kt=180/v0;function st(t){return[...t.slice(0,3).reverse(),...t.slice(3)]}const O={format:{},autodetect:[]};class u{constructor(...n){const e=this;if(k(n[0])==="object"&&n[0].constructor&&n[0].constructor===this.constructor)return n[0];let o=a0(n),r=!1;if(!o){r=!0,O.sorted||(O.autodetect=O.autodetect.sort((i,a)=>a.p-i.p),O.sorted=!0);for(let i of O.autodetect)if(o=i.test(...n),o)break}if(O.format[o]){const i=O.format[o].apply(null,r?n:n.slice(0,-1));e._rgb=G0(i)}else throw new Error("unknown format: "+n);e._rgb.length===3&&e._rgb.push(1)}toString(){return k(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}}const Ht="3.2.0",_=(...t)=>new u(...t);_.version=Ht;const o0={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Dt=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,Xt=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,lt=t=>{if(t.match(Dt)){(t.length===4||t.length===7)&&(t=t.substr(1)),t.length===3&&(t=t.split(""),t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);const n=parseInt(t,16),e=n>>16,o=n>>8&255,r=n&255;return[e,o,r,1]}if(t.match(Xt)){(t.length===5||t.length===9)&&(t=t.substr(1)),t.length===4&&(t=t.split(""),t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const n=parseInt(t,16),e=n>>24&255,o=n>>16&255,r=n>>8&255,i=Math.round((n&255)/255*100)/100;return[e,o,r,i]}throw new Error(`unknown hex color: ${t}`)},{round:d0}=Math,ft=(...t)=>{let[n,e,o,r]=w(t,"rgba"),i=a0(t)||"auto";r===void 0&&(r=1),i==="auto"&&(i=r<1?"rgba":"rgb"),n=d0(n),e=d0(e),o=d0(o);let c="000000"+(n<<16|e<<8|o).toString(16);c=c.substr(c.length-6);let s="0"+d0(r*255).toString(16);switch(s=s.substr(s.length-2),i.toLowerCase()){case"rgba":return`#${c}${s}`;case"argb":return`#${s}${c}`;default:return`#${c}`}};u.prototype.name=function(){const t=ft(this._rgb,"rgb");for(let n of Object.keys(o0))if(o0[n]===t)return n.toLowerCase();return t};O.format.named=t=>{if(t=t.toLowerCase(),o0[t])return lt(o0[t]);throw new Error("unknown color name: "+t)};O.autodetect.push({p:5,test:(t,...n)=>{if(!n.length&&k(t)==="string"&&o0[t.toLowerCase()])return"named"}});u.prototype.alpha=function(t,n=!1){return t!==void 0&&k(t)==="number"?n?(this._rgb[3]=t,this):new u([this._rgb[0],this._rgb[1],this._rgb[2],t],"rgb"):this._rgb[3]};u.prototype.clipped=function(){return this._rgb._clipped||!1};const D={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},qt=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function Z(t){const n=qt.get(String(t).toLowerCase());if(!n)throw new Error("unknown Lab illuminant "+t);D.labWhitePoint=t,D.Xn=n[0],D.Zn=n[1]}function f0(){return D.labWhitePoint}const S0=(...t)=>{t=w(t,"lab");const[n,e,o]=t,[r,i,a]=Zt(n,e,o),[c,s,l]=ut(r,i,a);return[c,s,l,t.length>3?t[3]:1]},Zt=(t,n,e)=>{const{kE:o,kK:r,kKE:i,Xn:a,Yn:c,Zn:s}=D,l=(t+16)/116,d=.002*n+l,h=l-.005*e,b=d*d*d,N=h*h*h,I=b>o?b:(116*d-16)/r,x=t>i?Math.pow((t+16)/116,3):t/r,A=N>o?N:(116*h-16)/r,m=I*a,j=x*c,L=A*s;return[m,j,L]},k0=t=>{const n=Math.sign(t);return t=Math.abs(t),(t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055)*n},ut=(t,n,e)=>{const{MtxAdaptMa:o,MtxAdaptMaI:r,MtxXYZ2RGB:i,RefWhiteRGB:a,Xn:c,Yn:s,Zn:l}=D,d=c*o.m00+s*o.m10+l*o.m20,h=c*o.m01+s*o.m11+l*o.m21,b=c*o.m02+s*o.m12+l*o.m22,N=a.X*o.m00+a.Y*o.m10+a.Z*o.m20,I=a.X*o.m01+a.Y*o.m11+a.Z*o.m21,x=a.X*o.m02+a.Y*o.m12+a.Z*o.m22,A=(t*o.m00+n*o.m10+e*o.m20)*(N/d),m=(t*o.m01+n*o.m11+e*o.m21)*(I/h),j=(t*o.m02+n*o.m12+e*o.m22)*(x/b),L=A*r.m00+m*r.m10+j*r.m20,C=A*r.m01+m*r.m11+j*r.m21,P=A*r.m02+m*r.m12+j*r.m22,Y=k0(L*i.m00+C*i.m10+P*i.m20),M=k0(L*i.m01+C*i.m11+P*i.m21),f=k0(L*i.m02+C*i.m12+P*i.m22);return[Y*255,M*255,f*255]},Y0=(...t)=>{const[n,e,o,...r]=w(t,"rgb"),[i,a,c]=bt(n,e,o),[s,l,d]=Jt(i,a,c);return[s,l,d,...r.length>0&&r[0]<1?[r[0]]:[]]};function Jt(t,n,e){const{Xn:o,Yn:r,Zn:i,kE:a,kK:c}=D,s=t/o,l=n/r,d=e/i,h=s>a?Math.pow(s,1/3):(c*s+16)/116,b=l>a?Math.pow(l,1/3):(c*l+16)/116,N=d>a?Math.pow(d,1/3):(c*d+16)/116;return[116*b-16,500*(h-b),200*(b-N)]}function _0(t){const n=Math.sign(t);return t=Math.abs(t),(t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4))*n}const bt=(t,n,e)=>{t=_0(t/255),n=_0(n/255),e=_0(e/255);const{MtxRGB2XYZ:o,MtxAdaptMa:r,MtxAdaptMaI:i,Xn:a,Yn:c,Zn:s,As:l,Bs:d,Cs:h}=D;let b=t*o.m00+n*o.m10+e*o.m20,N=t*o.m01+n*o.m11+e*o.m21,I=t*o.m02+n*o.m12+e*o.m22;const x=a*r.m00+c*r.m10+s*r.m20,A=a*r.m01+c*r.m11+s*r.m21,m=a*r.m02+c*r.m12+s*r.m22;let j=b*r.m00+N*r.m10+I*r.m20,L=b*r.m01+N*r.m11+I*r.m21,C=b*r.m02+N*r.m12+I*r.m22;return j*=x/l,L*=A/d,C*=m/h,b=j*i.m00+L*i.m10+C*i.m20,N=j*i.m01+L*i.m11+C*i.m21,I=j*i.m02+L*i.m12+C*i.m22,[b,N,I]};u.prototype.lab=function(){return Y0(this._rgb)};const Tt=(...t)=>new u(...t,"lab");Object.assign(_,{lab:Tt,getLabWhitePoint:f0,setLabWhitePoint:Z});O.format.lab=S0;O.autodetect.push({p:2,test:(...t)=>{if(t=w(t,"lab"),k(t)==="array"&&t.length===3)return"lab"}});u.prototype.darken=function(t=1){const n=this,e=n.lab();return e[0]-=D.Kn*t,new u(e,"lab").alpha(n.alpha(),!0)};u.prototype.brighten=function(t=1){return this.darken(-t)};u.prototype.darker=u.prototype.darken;u.prototype.brighter=u.prototype.brighten;u.prototype.get=function(t){const[n,e]=t.split("."),o=this[n]();if(e){const r=n.indexOf(e)-(n.substr(0,2)==="ok"?2:0);if(r>-1)return o[r];throw new Error(`unknown channel ${e} in mode ${n}`)}else return o};const{pow:Wt}=Math,Qt=1e-7,Vt=20;u.prototype.luminance=function(t,n="rgb"){if(t!==void 0&&k(t)==="number"){if(t===0)return new u([0,0,0,this._rgb[3]],"rgb");if(t===1)return new u([255,255,255,this._rgb[3]],"rgb");let e=this.luminance(),o=Vt;const r=(a,c)=>{const s=a.interpolate(c,.5,n),l=s.luminance();return Math.abs(t-l)<Qt||!o--?s:l>t?r(a,s):r(s,c)},i=(e>t?r(new u([0,0,0]),this):r(this,new u([255,255,255]))).rgb();return new u([...i,this._rgb[3]])}return Ut(...this._rgb.slice(0,3))};const Ut=(t,n,e)=>(t=M0(t),n=M0(n),e=M0(e),.2126*t+.7152*n+.0722*e),M0=t=>(t/=255,t<=.03928?t/12.92:Wt((t+.055)/1.055,2.4)),B={},r0=(t,n,e=.5,...o)=>{let r=o[0]||"lrgb";if(!B[r]&&!o.length&&(r=Object.keys(B)[0]),!B[r])throw new Error(`interpolation mode ${r} is not defined`);return k(t)!=="object"&&(t=new u(t)),k(n)!=="object"&&(n=new u(n)),B[r](t,n,e).alpha(t.alpha()+e*(n.alpha()-t.alpha()))};u.prototype.mix=u.prototype.interpolate=function(t,n=.5,...e){return r0(this,t,n,...e)};u.prototype.premultiply=function(t=!1){const n=this._rgb,e=n[3];return t?(this._rgb=[n[0]*e,n[1]*e,n[2]*e,e],this):new u([n[0]*e,n[1]*e,n[2]*e,e],"rgb")};const{sin:tn,cos:nn}=Math,dt=(...t)=>{let[n,e,o]=w(t,"lch");return isNaN(o)&&(o=0),o=o*Ft,[n,nn(o)*e,tn(o)*e]},z0=(...t)=>{t=w(t,"lch");const[n,e,o]=t,[r,i,a]=dt(n,e,o),[c,s,l]=S0(r,i,a);return[c,s,l,t.length>3?t[3]:1]},en=(...t)=>{const n=st(w(t,"hcl"));return z0(...n)},{sqrt:on,atan2:rn,round:an}=Math,ht=(...t)=>{const[n,e,o]=w(t,"lab"),r=on(e*e+o*o);let i=(rn(o,e)*Kt+360)%360;return an(r*1e4)===0&&(i=Number.NaN),[n,r,i]},F0=(...t)=>{const[n,e,o,...r]=w(t,"rgb"),[i,a,c]=Y0(n,e,o),[s,l,d]=ht(i,a,c);return[s,l,d,...r.length>0&&r[0]<1?[r[0]]:[]]};u.prototype.lch=function(){return F0(this._rgb)};u.prototype.hcl=function(){return st(F0(this._rgb))};const cn=(...t)=>new u(...t,"lch"),sn=(...t)=>new u(...t,"hcl");Object.assign(_,{lch:cn,hcl:sn});O.format.lch=z0;O.format.hcl=en;["lch","hcl"].forEach(t=>O.autodetect.push({p:2,test:(...n)=>{if(n=w(n,t),k(n)==="array"&&n.length===3)return t}}));u.prototype.saturate=function(t=1){const n=this,e=n.lch();return e[1]+=D.Kn*t,e[1]<0&&(e[1]=0),new u(e,"lch").alpha(n.alpha(),!0)};u.prototype.desaturate=function(t=1){return this.saturate(-t)};u.prototype.set=function(t,n,e=!1){const[o,r]=t.split("."),i=this[o]();if(r){const a=o.indexOf(r)-(o.substr(0,2)==="ok"?2:0);if(a>-1){if(k(n)=="string")switch(n.charAt(0)){case"+":i[a]+=+n;break;case"-":i[a]+=+n;break;case"*":i[a]*=+n.substr(1);break;case"/":i[a]/=+n.substr(1);break;default:i[a]=+n}else if(k(n)==="number")i[a]=n;else throw new Error("unsupported value for Color.set");const c=new u(i,o);return e?(this._rgb=c._rgb,this):c}throw new Error(`unknown channel ${r} in mode ${o}`)}else return i};u.prototype.tint=function(t=.5,...n){return r0(this,"white",t,...n)};u.prototype.shade=function(t=.5,...n){return r0(this,"black",t,...n)};const ln=(t,n,e)=>{const o=t._rgb,r=n._rgb;return new u(o[0]+e*(r[0]-o[0]),o[1]+e*(r[1]-o[1]),o[2]+e*(r[2]-o[2]),"rgb")};B.rgb=ln;const{sqrt:x0,pow:t0}=Math,fn=(t,n,e)=>{const[o,r,i]=t._rgb,[a,c,s]=n._rgb;return new u(x0(t0(o,2)*(1-e)+t0(a,2)*e),x0(t0(r,2)*(1-e)+t0(c,2)*e),x0(t0(i,2)*(1-e)+t0(s,2)*e),"rgb")};B.lrgb=fn;const un=(t,n,e)=>{const o=t.lab(),r=n.lab();return new u(o[0]+e*(r[0]-o[0]),o[1]+e*(r[1]-o[1]),o[2]+e*(r[2]-o[2]),"lab")};B.lab=un;const i0=(t,n,e,o)=>{let r,i;o==="hsl"?(r=t.hsl(),i=n.hsl()):o==="hsv"?(r=t.hsv(),i=n.hsv()):o==="hcg"?(r=t.hcg(),i=n.hcg()):o==="hsi"?(r=t.hsi(),i=n.hsi()):o==="lch"||o==="hcl"?(o="hcl",r=t.hcl(),i=n.hcl()):o==="oklch"&&(r=t.oklch().reverse(),i=n.oklch().reverse());let a,c,s,l,d,h;(o.substr(0,1)==="h"||o==="oklch")&&([a,s,d]=r,[c,l,h]=i);let b,N,I,x;return!isNaN(a)&&!isNaN(c)?(c>a&&c-a>180?x=c-(a+360):c<a&&a-c>180?x=c+360-a:x=c-a,N=a+e*x):isNaN(a)?isNaN(c)?N=Number.NaN:(N=c,(d==1||d==0)&&o!="hsv"&&(b=l)):(N=a,(h==1||h==0)&&o!="hsv"&&(b=s)),b===void 0&&(b=s+e*(l-s)),I=d+e*(h-d),o==="oklch"?new u([I,b,N],o):new u([N,b,I],o)},pt=(t,n,e)=>i0(t,n,e,"lch");B.lch=pt;B.hcl=pt;const bn=t=>{if(k(t)=="number"&&t>=0&&t<=16777215){const n=t>>16,e=t>>8&255,o=t&255;return[n,e,o,1]}throw new Error("unknown num color: "+t)},dn=(...t)=>{const[n,e,o]=w(t,"rgb");return(n<<16)+(e<<8)+o};u.prototype.num=function(){return dn(this._rgb)};const hn=(...t)=>new u(...t,"num");Object.assign(_,{num:hn});O.format.num=bn;O.autodetect.push({p:5,test:(...t)=>{if(t.length===1&&k(t[0])==="number"&&t[0]>=0&&t[0]<=16777215)return"num"}});const pn=(t,n,e)=>{const o=t.num(),r=n.num();return new u(o+e*(r-o),"num")};B.num=pn;const{floor:Nn}=Math,An=(...t)=>{t=w(t,"hcg");let[n,e,o]=t,r,i,a;o=o*255;const c=e*255;if(e===0)r=i=a=o;else{n===360&&(n=0),n>360&&(n-=360),n<0&&(n+=360),n/=60;const s=Nn(n),l=n-s,d=o*(1-e),h=d+c*(1-l),b=d+c*l,N=d+c;switch(s){case 0:[r,i,a]=[N,b,d];break;case 1:[r,i,a]=[h,N,d];break;case 2:[r,i,a]=[d,N,b];break;case 3:[r,i,a]=[d,h,N];break;case 4:[r,i,a]=[b,d,N];break;case 5:[r,i,a]=[N,d,h];break}}return[r,i,a,t.length>3?t[3]:1]},mn=(...t)=>{const[n,e,o]=w(t,"rgb"),r=it(n,e,o),i=ct(n,e,o),a=i-r,c=a*100/255,s=r/(255-a)*100;let l;return a===0?l=Number.NaN:(n===i&&(l=(e-o)/a),e===i&&(l=2+(o-n)/a),o===i&&(l=4+(n-e)/a),l*=60,l<0&&(l+=360)),[l,c,s]};u.prototype.hcg=function(){return mn(this._rgb)};const gn=(...t)=>new u(...t,"hcg");_.hcg=gn;O.format.hcg=An;O.autodetect.push({p:1,test:(...t)=>{if(t=w(t,"hcg"),k(t)==="array"&&t.length===3)return"hcg"}});const vn=(t,n,e)=>i0(t,n,e,"hcg");B.hcg=vn;const{cos:n0}=Math,On=(...t)=>{t=w(t,"hsi");let[n,e,o]=t,r,i,a;return isNaN(n)&&(n=0),isNaN(e)&&(e=0),n>360&&(n-=360),n<0&&(n+=360),n/=360,n<1/3?(a=(1-e)/3,r=(1+e*n0(q*n)/n0(y0-q*n))/3,i=1-(a+r)):n<2/3?(n-=1/3,r=(1-e)/3,i=(1+e*n0(q*n)/n0(y0-q*n))/3,a=1-(r+i)):(n-=2/3,i=(1-e)/3,a=(1+e*n0(q*n)/n0(y0-q*n))/3,r=1-(i+a)),r=U(o*r*3),i=U(o*i*3),a=U(o*a*3),[r*255,i*255,a*255,t.length>3?t[3]:1]},{min:In,sqrt:wn,acos:yn}=Math,kn=(...t)=>{let[n,e,o]=w(t,"rgb");n/=255,e/=255,o/=255;let r;const i=In(n,e,o),a=(n+e+o)/3,c=a>0?1-i/a:0;return c===0?r=NaN:(r=(n-e+(n-o))/2,r/=wn((n-e)*(n-e)+(n-o)*(e-o)),r=yn(r),o>e&&(r=q-r),r/=q),[r*360,c,a]};u.prototype.hsi=function(){return kn(this._rgb)};const _n=(...t)=>new u(...t,"hsi");_.hsi=_n;O.format.hsi=On;O.autodetect.push({p:2,test:(...t)=>{if(t=w(t,"hsi"),k(t)==="array"&&t.length===3)return"hsi"}});const Mn=(t,n,e)=>i0(t,n,e,"hsi");B.hsi=Mn;const j0=(...t)=>{t=w(t,"hsl");const[n,e,o]=t;let r,i,a;if(e===0)r=i=a=o*255;else{const c=[0,0,0],s=[0,0,0],l=o<.5?o*(1+e):o+e-o*e,d=2*o-l,h=n/360;c[0]=h+1/3,c[1]=h,c[2]=h-1/3;for(let b=0;b<3;b++)c[b]<0&&(c[b]+=1),c[b]>1&&(c[b]-=1),6*c[b]<1?s[b]=d+(l-d)*6*c[b]:2*c[b]<1?s[b]=l:3*c[b]<2?s[b]=d+(l-d)*(2/3-c[b])*6:s[b]=d;[r,i,a]=[s[0]*255,s[1]*255,s[2]*255]}return t.length>3?[r,i,a,t[3]]:[r,i,a,1]},Nt=(...t)=>{t=w(t,"rgba");let[n,e,o]=t;n/=255,e/=255,o/=255;const r=it(n,e,o),i=ct(n,e,o),a=(i+r)/2;let c,s;return i===r?(c=0,s=Number.NaN):c=a<.5?(i-r)/(i+r):(i-r)/(2-i-r),n==i?s=(e-o)/(i-r):e==i?s=2+(o-n)/(i-r):o==i&&(s=4+(n-e)/(i-r)),s*=60,s<0&&(s+=360),t.length>3&&t[3]!==void 0?[s,c,a,t[3]]:[s,c,a]};u.prototype.hsl=function(){return Nt(this._rgb)};const xn=(...t)=>new u(...t,"hsl");_.hsl=xn;O.format.hsl=j0;O.autodetect.push({p:2,test:(...t)=>{if(t=w(t,"hsl"),k(t)==="array"&&t.length===3)return"hsl"}});const $n=(t,n,e)=>i0(t,n,e,"hsl");B.hsl=$n;const{floor:Ln}=Math,En=(...t)=>{t=w(t,"hsv");let[n,e,o]=t,r,i,a;if(o*=255,e===0)r=i=a=o;else{n===360&&(n=0),n>360&&(n-=360),n<0&&(n+=360),n/=60;const c=Ln(n),s=n-c,l=o*(1-e),d=o*(1-e*s),h=o*(1-e*(1-s));switch(c){case 0:[r,i,a]=[o,h,l];break;case 1:[r,i,a]=[d,o,l];break;case 2:[r,i,a]=[l,o,h];break;case 3:[r,i,a]=[l,d,o];break;case 4:[r,i,a]=[h,l,o];break;case 5:[r,i,a]=[o,l,d];break}}return[r,i,a,t.length>3?t[3]:1]},{min:Rn,max:Cn}=Math,Pn=(...t)=>{t=w(t,"rgb");let[n,e,o]=t;const r=Rn(n,e,o),i=Cn(n,e,o),a=i-r;let c,s,l;return l=i/255,i===0?(c=Number.NaN,s=0):(s=a/i,n===i&&(c=(e-o)/a),e===i&&(c=2+(o-n)/a),o===i&&(c=4+(n-e)/a),c*=60,c<0&&(c+=360)),[c,s,l]};u.prototype.hsv=function(){return Pn(this._rgb)};const jn=(...t)=>new u(...t,"hsv");_.hsv=jn;O.format.hsv=En;O.autodetect.push({p:2,test:(...t)=>{if(t=w(t,"hsv"),k(t)==="array"&&t.length===3)return"hsv"}});const Bn=(t,n,e)=>i0(t,n,e,"hsv");B.hsv=Bn;function A0(t,n){let e=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(n[0])||(n=n.map(a=>[a]));let o=n[0].length,r=n[0].map((a,c)=>n.map(s=>s[c])),i=t.map(a=>r.map(c=>Array.isArray(a)?a.reduce((s,l,d)=>s+l*(c[d]||0),0):c.reduce((s,l)=>s+l*a,0)));return e===1&&(i=i[0]),o===1?i.map(a=>a[0]):i}const K0=(...t)=>{t=w(t,"lab");const[n,e,o,...r]=t,[i,a,c]=Gn([n,e,o]),[s,l,d]=ut(i,a,c);return[s,l,d,...r.length>0&&r[0]<1?[r[0]]:[]]};function Gn(t){var n=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],e=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],o=A0(e,t);return A0(n,o.map(r=>r**3))}const H0=(...t)=>{const[n,e,o,...r]=w(t,"rgb"),i=bt(n,e,o);return[...Sn(i),...r.length>0&&r[0]<1?[r[0]]:[]]};function Sn(t){const n=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],e=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],o=A0(n,t);return A0(e,o.map(r=>Math.cbrt(r)))}u.prototype.oklab=function(){return H0(this._rgb)};const Yn=(...t)=>new u(...t,"oklab");Object.assign(_,{oklab:Yn});O.format.oklab=K0;O.autodetect.push({p:2,test:(...t)=>{if(t=w(t,"oklab"),k(t)==="array"&&t.length===3)return"oklab"}});const zn=(t,n,e)=>{const o=t.oklab(),r=n.oklab();return new u(o[0]+e*(r[0]-o[0]),o[1]+e*(r[1]-o[1]),o[2]+e*(r[2]-o[2]),"oklab")};B.oklab=zn;const Fn=(t,n,e)=>i0(t,n,e,"oklch");B.oklch=Fn;const{pow:$0,sqrt:L0,PI:E0,cos:q0,sin:Z0,atan2:Kn}=Math,Hn=(t,n="lrgb",e=null)=>{const o=t.length;e||(e=Array.from(new Array(o)).map(()=>1));const r=o/e.reduce(function(h,b){return h+b});if(e.forEach((h,b)=>{e[b]*=r}),t=t.map(h=>new u(h)),n==="lrgb")return Dn(t,e);const i=t.shift(),a=i.get(n),c=[];let s=0,l=0;for(let h=0;h<a.length;h++)if(a[h]=(a[h]||0)*e[0],c.push(isNaN(a[h])?0:e[0]),n.charAt(h)==="h"&&!isNaN(a[h])){const b=a[h]/180*E0;s+=q0(b)*e[0],l+=Z0(b)*e[0]}let d=i.alpha()*e[0];t.forEach((h,b)=>{const N=h.get(n);d+=h.alpha()*e[b+1];for(let I=0;I<a.length;I++)if(!isNaN(N[I]))if(c[I]+=e[b+1],n.charAt(I)==="h"){const x=N[I]/180*E0;s+=q0(x)*e[b+1],l+=Z0(x)*e[b+1]}else a[I]+=N[I]*e[b+1]});for(let h=0;h<a.length;h++)if(n.charAt(h)==="h"){let b=Kn(l/c[h],s/c[h])/E0*180;for(;b<0;)b+=360;for(;b>=360;)b-=360;a[h]=b}else a[h]=a[h]/c[h];return d/=o,new u(a,n).alpha(d>.99999?1:d,!0)},Dn=(t,n)=>{const e=t.length,o=[0,0,0,0];for(let r=0;r<t.length;r++){const i=t[r],a=n[r]/e,c=i._rgb;o[0]+=$0(c[0],2)*a,o[1]+=$0(c[1],2)*a,o[2]+=$0(c[2],2)*a,o[3]+=c[3]*a}return o[0]=L0(o[0]),o[1]=L0(o[1]),o[2]=L0(o[2]),o[3]>.9999999&&(o[3]=1),new u(G0(o))},{pow:Xn}=Math;function m0(t){let n="rgb",e=_("#ccc"),o=0,r=[0,1],i=[0,1],a=[],c=[0,0],s=!1,l=[],d=!1,h=0,b=1,N=!1,I={},x=!0,A=1;const m=function(f){if(f=f||["#fff","#000"],f&&k(f)==="string"&&_.brewer&&_.brewer[f.toLowerCase()]&&(f=_.brewer[f.toLowerCase()]),k(f)==="array"){f.length===1&&(f=[f[0],f[0]]),f=f.slice(0);for(let p=0;p<f.length;p++)f[p]=_(f[p]);a.length=0;for(let p=0;p<f.length;p++)a.push(p/(f.length-1))}return Y(),l=f},j=function(f){if(s!=null){const p=s.length-1;let y=0;for(;y<p&&f>=s[y];)y++;return y-1}return 0};let L=f=>f,C=f=>f;const P=function(f,p){let y,g;if(p==null&&(p=!1),isNaN(f)||f===null)return e;p?g=f:s&&s.length>2?g=j(f)/(s.length-2):b!==h?g=(f-h)/(b-h):g=1,g=C(g),p||(g=L(g)),A!==1&&(g=Xn(g,A)),g=c[0]+g*(1-c[0]-c[1]),g=U(g,0,1);const $=Math.floor(g*1e4);if(x&&I[$])y=I[$];else{if(k(l)==="array")for(let v=0;v<a.length;v++){const G=a[v];if(g<=G){y=l[v];break}if(g>=G&&v===a.length-1){y=l[v];break}if(g>G&&g<a[v+1]){g=(g-G)/(a[v+1]-G),y=_.interpolate(l[v],l[v+1],g,n);break}}else k(l)==="function"&&(y=l(g));x&&(I[$]=y)}return y};var Y=()=>I={};m(t);const M=function(f){const p=_(P(f));return d&&p[d]?p[d]():p};return M.classes=function(f){if(f!=null){if(k(f)==="array")s=f,r=[f[0],f[f.length-1]];else{const p=_.analyze(r);f===0?s=[p.min,p.max]:s=_.limits(p,"e",f)}return M}return s},M.domain=function(f){if(!arguments.length)return i;i=f.slice(0),h=f[0],b=f[f.length-1],a=[];const p=l.length;if(f.length===p&&h!==b)for(let y of Array.from(f))a.push((y-h)/(b-h));else{for(let y=0;y<p;y++)a.push(y/(p-1));if(f.length>2){const y=f.map(($,v)=>v/(f.length-1)),g=f.map($=>($-h)/(b-h));g.every(($,v)=>y[v]===$)||(C=$=>{if($<=0||$>=1)return $;let v=0;for(;$>=g[v+1];)v++;const G=($-g[v])/(g[v+1]-g[v]);return y[v]+G*(y[v+1]-y[v])})}}return r=[h,b],M},M.mode=function(f){return arguments.length?(n=f,Y(),M):n},M.range=function(f,p){return m(f),M},M.out=function(f){return d=f,M},M.spread=function(f){return arguments.length?(o=f,M):o},M.correctLightness=function(f){return f==null&&(f=!0),N=f,Y(),N?L=function(p){const y=P(0,!0).lab()[0],g=P(1,!0).lab()[0],$=y>g;let v=P(p,!0).lab()[0];const G=y+(g-y)*p;let T=v-G,u0=0,l0=1,b0=20;for(;Math.abs(T)>.01&&b0-- >0;)(function(){return $&&(T*=-1),T<0?(u0=p,p+=(l0-p)*.5):(l0=p,p+=(u0-p)*.5),v=P(p,!0).lab()[0],T=v-G})();return p}:L=p=>p,M},M.padding=function(f){return f!=null?(k(f)==="number"&&(f=[f,f]),c=f,M):c},M.colors=function(f,p){arguments.length<2&&(p="hex");let y=[];if(arguments.length===0)y=l.slice(0);else if(f===1)y=[M(.5)];else if(f>1){const g=r[0],$=r[1]-g;y=qn(0,f).map(v=>M(g+v/(f-1)*$))}else{t=[];let g=[];if(s&&s.length>2)for(let $=1,v=s.length,G=1<=v;G?$<v:$>v;G?$++:$--)g.push((s[$-1]+s[$])*.5);else g=r;y=g.map($=>M($))}return _[p]&&(y=y.map(g=>g[p]())),y},M.cache=function(f){return f!=null?(x=f,M):x},M.gamma=function(f){return f!=null?(A=f,M):A},M.nodata=function(f){return f!=null?(e=_(f),M):e},M}function qn(t,n,e){let o=[],r=t<n,i=n;for(let a=t;r?a<i:a>i;r?a++:a--)o.push(a);return o}const Zn=function(t){let n=[1,1];for(let e=1;e<t;e++){let o=[1];for(let r=1;r<=n.length;r++)o[r]=(n[r]||0)+n[r-1];n=o}return n},Jn=function(t){let n,e,o,r;if(t=t.map(i=>new u(i)),t.length===2)[e,o]=t.map(i=>i.lab()),n=function(i){const a=[0,1,2].map(c=>e[c]+i*(o[c]-e[c]));return new u(a,"lab")};else if(t.length===3)[e,o,r]=t.map(i=>i.lab()),n=function(i){const a=[0,1,2].map(c=>(1-i)*(1-i)*e[c]+2*(1-i)*i*o[c]+i*i*r[c]);return new u(a,"lab")};else if(t.length===4){let i;[e,o,r,i]=t.map(a=>a.lab()),n=function(a){const c=[0,1,2].map(s=>(1-a)*(1-a)*(1-a)*e[s]+3*(1-a)*(1-a)*a*o[s]+3*(1-a)*a*a*r[s]+a*a*a*i[s]);return new u(c,"lab")}}else if(t.length>=5){let i,a,c;i=t.map(s=>s.lab()),c=t.length-1,a=Zn(c),n=function(s){const l=1-s,d=[0,1,2].map(h=>i.reduce((b,N,I)=>b+a[I]*l**(c-I)*s**I*N[h],0));return new u(d,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return n},Tn=t=>{const n=Jn(t);return n.scale=()=>m0(n),n},{round:At}=Math;u.prototype.rgb=function(t=!0){return t===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(At)};u.prototype.rgba=function(t=!0){return this._rgb.slice(0,4).map((n,e)=>e<3?t===!1?n:At(n):n)};const Wn=(...t)=>new u(...t,"rgb");Object.assign(_,{rgb:Wn});O.format.rgb=(...t)=>{const n=w(t,"rgba");return n[3]===void 0&&(n[3]=1),n};O.autodetect.push({p:3,test:(...t)=>{if(t=w(t,"rgba"),k(t)==="array"&&(t.length===3||t.length===4&&k(t[3])=="number"&&t[3]>=0&&t[3]<=1))return"rgb"}});const H=(t,n,e)=>{if(!H[e])throw new Error("unknown blend mode "+e);return H[e](t,n)},W=t=>(n,e)=>{const o=_(e).rgb(),r=_(n).rgb();return _.rgb(t(o,r))},Q=t=>(n,e)=>{const o=[];return o[0]=t(n[0],e[0]),o[1]=t(n[1],e[1]),o[2]=t(n[2],e[2]),o},Qn=t=>t,Vn=(t,n)=>t*n/255,Un=(t,n)=>t>n?n:t,te=(t,n)=>t>n?t:n,ne=(t,n)=>255*(1-(1-t/255)*(1-n/255)),ee=(t,n)=>n<128?2*t*n/255:255*(1-2*(1-t/255)*(1-n/255)),oe=(t,n)=>255*(1-(1-n/255)/(t/255)),re=(t,n)=>t===255?255:(t=255*(n/255)/(1-t/255),t>255?255:t);H.normal=W(Q(Qn));H.multiply=W(Q(Vn));H.screen=W(Q(ne));H.overlay=W(Q(ee));H.darken=W(Q(Un));H.lighten=W(Q(te));H.dodge=W(Q(re));H.burn=W(Q(oe));const{pow:ae,sin:ie,cos:ce}=Math;function se(t=300,n=-1.5,e=1,o=1,r=[0,1]){let i=0,a;k(r)==="array"?a=r[1]-r[0]:(a=0,r=[r,r]);const c=function(s){const l=q*((t+120)/360+n*s),d=ae(r[0]+a*s,o),b=(i!==0?e[0]+s*i:e)*d*(1-d)/2,N=ce(l),I=ie(l),x=d+b*(-.14861*N+1.78277*I),A=d+b*(-.29227*N-.90649*I),m=d+b*(1.97294*N);return _(G0([x*255,A*255,m*255,1]))};return c.start=function(s){return s==null?t:(t=s,c)},c.rotations=function(s){return s==null?n:(n=s,c)},c.gamma=function(s){return s==null?o:(o=s,c)},c.hue=function(s){return s==null?e:(e=s,k(e)==="array"?(i=e[1]-e[0],i===0&&(e=e[1])):i=0,c)},c.lightness=function(s){return s==null?r:(k(s)==="array"?(r=s,a=s[1]-s[0]):(r=[s,s],a=0),c)},c.scale=()=>_.scale(c),c.hue(e),c}const le="0123456789abcdef",{floor:fe,random:ue}=Math,be=(t=ue)=>{let n="#";for(let e=0;e<6;e++)n+=le.charAt(fe(t()*16));return new u(n,"hex")},{log:J0,pow:de,floor:he,abs:pe}=Math;function mt(t,n=null){const e={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return k(t)==="object"&&(t=Object.values(t)),t.forEach(o=>{n&&k(o)==="object"&&(o=o[n]),o!=null&&!isNaN(o)&&(e.values.push(o),e.sum+=o,o<e.min&&(e.min=o),o>e.max&&(e.max=o),e.count+=1)}),e.domain=[e.min,e.max],e.limits=(o,r)=>gt(e,o,r),e}function gt(t,n="equal",e=7){k(t)=="array"&&(t=mt(t));const{min:o,max:r}=t,i=t.values.sort((c,s)=>c-s);if(e===1)return[o,r];const a=[];if(n.substr(0,1)==="c"&&(a.push(o),a.push(r)),n.substr(0,1)==="e"){a.push(o);for(let c=1;c<e;c++)a.push(o+c/e*(r-o));a.push(r)}else if(n.substr(0,1)==="l"){if(o<=0)throw new Error("Logarithmic scales are only possible for values > 0");const c=Math.LOG10E*J0(o),s=Math.LOG10E*J0(r);a.push(o);for(let l=1;l<e;l++)a.push(de(10,c+l/e*(s-c)));a.push(r)}else if(n.substr(0,1)==="q"){a.push(o);for(let c=1;c<e;c++){const s=(i.length-1)*c/e,l=he(s);if(l===s)a.push(i[l]);else{const d=s-l;a.push(i[l]*(1-d)+i[l+1]*d)}}a.push(r)}else if(n.substr(0,1)==="k"){let c;const s=i.length,l=new Array(s),d=new Array(e);let h=!0,b=0,N=null;N=[],N.push(o);for(let A=1;A<e;A++)N.push(o+A/e*(r-o));for(N.push(r);h;){for(let m=0;m<e;m++)d[m]=0;for(let m=0;m<s;m++){const j=i[m];let L=Number.MAX_VALUE,C;for(let P=0;P<e;P++){const Y=pe(N[P]-j);Y<L&&(L=Y,C=P),d[C]++,l[m]=C}}const A=new Array(e);for(let m=0;m<e;m++)A[m]=null;for(let m=0;m<s;m++)c=l[m],A[c]===null?A[c]=i[m]:A[c]+=i[m];for(let m=0;m<e;m++)A[m]*=1/d[m];h=!1;for(let m=0;m<e;m++)if(A[m]!==N[m]){h=!0;break}N=A,b++,b>200&&(h=!1)}const I={};for(let A=0;A<e;A++)I[A]=[];for(let A=0;A<s;A++)c=l[A],I[c].push(i[A]);let x=[];for(let A=0;A<e;A++)x.push(I[A][0]),x.push(I[A][I[A].length-1]);x=x.sort((A,m)=>A-m),a.push(x[0]);for(let A=1;A<x.length;A+=2){const m=x[A];!isNaN(m)&&a.indexOf(m)===-1&&a.push(m)}}return a}const Ne=(t,n)=>{t=new u(t),n=new u(n);const e=t.luminance(),o=n.luminance();return e>o?(e+.05)/(o+.05):(o+.05)/(e+.05)};/**
 * @license
 *
 * The APCA contrast prediction algorithm is based of the formulas published
 * in the APCA-1.0.98G specification by Myndex. The specification is available at:
 * https://raw.githubusercontent.com/Myndex/apca-w3/master/images/APCAw3_0.1.17_APCA0.0.98G.svg
 *
 * Note that the APCA implementation is still beta, so please update to
 * future versions of chroma.js when they become available.
 *
 * You can read more about the APCA Readability Criterion at
 * https://readtech.org/ARC/
 */const T0=.027,Ae=5e-4,me=.1,W0=1.14,h0=.022,Q0=1.414,ge=(t,n)=>{t=new u(t),n=new u(n),t.alpha()<1&&(t=r0(n,t,t.alpha(),"rgb"));const e=V0(...t.rgb()),o=V0(...n.rgb()),r=e>=h0?e:e+Math.pow(h0-e,Q0),i=o>=h0?o:o+Math.pow(h0-o,Q0),a=Math.pow(i,.56)-Math.pow(r,.57),c=Math.pow(i,.65)-Math.pow(r,.62),s=Math.abs(i-r)<Ae?0:r<i?a*W0:c*W0;return(Math.abs(s)<me?0:s>0?s-T0:s+T0)*100};function V0(t,n,e){return .2126729*Math.pow(t/255,2.4)+.7151522*Math.pow(n/255,2.4)+.072175*Math.pow(e/255,2.4)}const{sqrt:X,pow:E,min:ve,max:Oe,atan2:U0,abs:tt,cos:p0,sin:nt,exp:Ie,PI:et}=Math;function we(t,n,e=1,o=1,r=1){var i=function(I0){return 360*I0/(2*et)},a=function(I0){return 2*et*I0/360};t=new u(t),n=new u(n);const[c,s,l]=Array.from(t.lab()),[d,h,b]=Array.from(n.lab()),N=(c+d)/2,I=X(E(s,2)+E(l,2)),x=X(E(h,2)+E(b,2)),A=(I+x)/2,m=.5*(1-X(E(A,7)/(E(A,7)+E(25,7)))),j=s*(1+m),L=h*(1+m),C=X(E(j,2)+E(l,2)),P=X(E(L,2)+E(b,2)),Y=(C+P)/2,M=i(U0(l,j)),f=i(U0(b,L)),p=M>=0?M:M+360,y=f>=0?f:f+360,g=tt(p-y)>180?(p+y+360)/2:(p+y)/2,$=1-.17*p0(a(g-30))+.24*p0(a(2*g))+.32*p0(a(3*g+6))-.2*p0(a(4*g-63));let v=y-p;v=tt(v)<=180?v:y<=p?v+360:v-360,v=2*X(C*P)*nt(a(v)/2);const G=d-c,T=P-C,u0=1+.015*E(N-50,2)/X(20+E(N-50,2)),l0=1+.045*Y,b0=1+.015*Y*$,Bt=30*Ie(-E((g-275)/25,2)),Gt=-(2*X(E(Y,7)/(E(Y,7)+E(25,7))))*nt(2*a(Bt)),St=X(E(G/(e*u0),2)+E(T/(o*l0),2)+E(v/(r*b0),2)+Gt*(T/(o*l0))*(v/(r*b0)));return Oe(0,ve(100,St))}function ye(t,n,e="lab"){t=new u(t),n=new u(n);const o=t.get(e),r=n.get(e);let i=0;for(let a in o){const c=(o[a]||0)-(r[a]||0);i+=c*c}return Math.sqrt(i)}const ke=(...t)=>{try{return new u(...t),!0}catch{return!1}},_e={cool(){return m0([_.hsl(180,1,.9),_.hsl(250,.7,.4)])},hot(){return m0(["#000","#f00","#ff0","#fff"]).mode("rgb")}},B0={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},vt=Object.keys(B0),ot=new Map(vt.map(t=>[t.toLowerCase(),t])),Me=typeof Proxy=="function"?new Proxy(B0,{get(t,n){const e=n.toLowerCase();if(ot.has(e))return t[ot.get(e)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(vt)}}):B0,xe=(...t)=>{t=w(t,"cmyk");const[n,e,o,r]=t,i=t.length>4?t[4]:1;return r===1?[0,0,0,i]:[n>=1?0:255*(1-n)*(1-r),e>=1?0:255*(1-e)*(1-r),o>=1?0:255*(1-o)*(1-r),i]},{max:rt}=Math,$e=(...t)=>{let[n,e,o]=w(t,"rgb");n=n/255,e=e/255,o=o/255;const r=1-rt(n,rt(e,o)),i=r<1?1/(1-r):0,a=(1-n-r)*i,c=(1-e-r)*i,s=(1-o-r)*i;return[a,c,s,r]};u.prototype.cmyk=function(){return $e(this._rgb)};const Le=(...t)=>new u(...t,"cmyk");Object.assign(_,{cmyk:Le});O.format.cmyk=xe;O.autodetect.push({p:2,test:(...t)=>{if(t=w(t,"cmyk"),k(t)==="array"&&t.length===4)return"cmyk"}});const Ee=(...t)=>{const n=w(t,"hsla");let e=a0(t)||"lsa";return n[0]=z(n[0]||0)+"deg",n[1]=z(n[1]*100)+"%",n[2]=z(n[2]*100)+"%",e==="hsla"||n.length>3&&n[3]<1?(n[3]="/ "+(n.length>3?n[3]:1),e="hsla"):n.length=3,`${e.substr(0,3)}(${n.join(" ")})`},Re=(...t)=>{const n=w(t,"lab");let e=a0(t)||"lab";return n[0]=z(n[0])+"%",n[1]=z(n[1]),n[2]=z(n[2]),e==="laba"||n.length>3&&n[3]<1?n[3]="/ "+(n.length>3?n[3]:1):n.length=3,`lab(${n.join(" ")})`},Ce=(...t)=>{const n=w(t,"lch");let e=a0(t)||"lab";return n[0]=z(n[0])+"%",n[1]=z(n[1]),n[2]=isNaN(n[2])?"none":z(n[2])+"deg",e==="lcha"||n.length>3&&n[3]<1?n[3]="/ "+(n.length>3?n[3]:1):n.length=3,`lch(${n.join(" ")})`},Pe=(...t)=>{const n=w(t,"lab");return n[0]=z(n[0]*100)+"%",n[1]=P0(n[1]),n[2]=P0(n[2]),n.length>3&&n[3]<1?n[3]="/ "+(n.length>3?n[3]:1):n.length=3,`oklab(${n.join(" ")})`},Ot=(...t)=>{const[n,e,o,...r]=w(t,"rgb"),[i,a,c]=H0(n,e,o),[s,l,d]=ht(i,a,c);return[s,l,d,...r.length>0&&r[0]<1?[r[0]]:[]]},je=(...t)=>{const n=w(t,"lch");return n[0]=z(n[0]*100)+"%",n[1]=P0(n[1]),n[2]=isNaN(n[2])?"none":z(n[2])+"deg",n.length>3&&n[3]<1?n[3]="/ "+(n.length>3?n[3]:1):n.length=3,`oklch(${n.join(" ")})`},{round:R0}=Math,Be=(...t)=>{const n=w(t,"rgba");let e=a0(t)||"rgb";if(e.substr(0,3)==="hsl")return Ee(Nt(n),e);if(e.substr(0,3)==="lab"){const o=f0();Z("d50");const r=Re(Y0(n),e);return Z(o),r}if(e.substr(0,3)==="lch"){const o=f0();Z("d50");const r=Ce(F0(n),e);return Z(o),r}return e.substr(0,5)==="oklab"?Pe(H0(n)):e.substr(0,5)==="oklch"?je(Ot(n)):(n[0]=R0(n[0]),n[1]=R0(n[1]),n[2]=R0(n[2]),(e==="rgba"||n.length>3&&n[3]<1)&&(n[3]="/ "+(n.length>3?n[3]:1),e="rgba"),`${e.substr(0,3)}(${n.slice(0,e==="rgb"?3:4).join(" ")})`)},It=(...t)=>{t=w(t,"lch");const[n,e,o,...r]=t,[i,a,c]=dt(n,e,o),[s,l,d]=K0(i,a,c);return[s,l,d,...r.length>0&&r[0]<1?[r[0]]:[]]},J=/((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source,K=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source,g0=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source,F=/\s*/.source,c0=/\s+/.source,D0=/\s*,\s*/.source,O0=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source,s0=/\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source,wt=new RegExp("^rgba?\\("+F+[J,J,J].join(c0)+s0+"\\)$"),yt=new RegExp("^rgb\\("+F+[J,J,J].join(D0)+F+"\\)$"),kt=new RegExp("^rgba\\("+F+[J,J,J,K].join(D0)+F+"\\)$"),_t=new RegExp("^hsla?\\("+F+[O0,g0,g0].join(c0)+s0+"\\)$"),Mt=new RegExp("^hsl?\\("+F+[O0,g0,g0].join(D0)+F+"\\)$"),xt=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,$t=new RegExp("^lab\\("+F+[K,K,K].join(c0)+s0+"\\)$"),Lt=new RegExp("^lch\\("+F+[K,K,O0].join(c0)+s0+"\\)$"),Et=new RegExp("^oklab\\("+F+[K,K,K].join(c0)+s0+"\\)$"),Rt=new RegExp("^oklch\\("+F+[K,K,O0].join(c0)+s0+"\\)$"),{round:Ct}=Math,e0=t=>t.map((n,e)=>e<=2?U(Ct(n),0,255):n),R=(t,n=0,e=100,o=!1)=>(typeof t=="string"&&t.endsWith("%")&&(t=parseFloat(t.substring(0,t.length-1))/100,o?t=n+(t+1)*.5*(e-n):t=n+t*(e-n)),+t),S=(t,n)=>t==="none"?n:t,X0=t=>{if(t=t.toLowerCase().trim(),t==="transparent")return[0,0,0,0];let n;if(O.format.named)try{return O.format.named(t)}catch{}if((n=t.match(wt))||(n=t.match(yt))){let e=n.slice(1,4);for(let r=0;r<3;r++)e[r]=+R(S(e[r],0),0,255);e=e0(e);const o=n[4]!==void 0?+R(n[4],0,1):1;return e[3]=o,e}if(n=t.match(kt)){const e=n.slice(1,5);for(let o=0;o<4;o++)e[o]=+R(e[o],0,255);return e}if((n=t.match(_t))||(n=t.match(Mt))){const e=n.slice(1,4);e[0]=+S(e[0].replace("deg",""),0),e[1]=+R(S(e[1],0),0,100)*.01,e[2]=+R(S(e[2],0),0,100)*.01;const o=e0(j0(e)),r=n[4]!==void 0?+R(n[4],0,1):1;return o[3]=r,o}if(n=t.match(xt)){const e=n.slice(1,4);e[1]*=.01,e[2]*=.01;const o=j0(e);for(let r=0;r<3;r++)o[r]=Ct(o[r]);return o[3]=+n[4],o}if(n=t.match($t)){const e=n.slice(1,4);e[0]=R(S(e[0],0),0,100),e[1]=R(S(e[1],0),-125,125,!0),e[2]=R(S(e[2],0),-125,125,!0);const o=f0();Z("d50");const r=e0(S0(e));Z(o);const i=n[4]!==void 0?+R(n[4],0,1):1;return r[3]=i,r}if(n=t.match(Lt)){const e=n.slice(1,4);e[0]=R(e[0],0,100),e[1]=R(S(e[1],0),0,150,!1),e[2]=+S(e[2].replace("deg",""),0);const o=f0();Z("d50");const r=e0(z0(e));Z(o);const i=n[4]!==void 0?+R(n[4],0,1):1;return r[3]=i,r}if(n=t.match(Et)){const e=n.slice(1,4);e[0]=R(S(e[0],0),0,1),e[1]=R(S(e[1],0),-.4,.4,!0),e[2]=R(S(e[2],0),-.4,.4,!0);const o=e0(K0(e)),r=n[4]!==void 0?+R(n[4],0,1):1;return o[3]=r,o}if(n=t.match(Rt)){const e=n.slice(1,4);e[0]=R(S(e[0],0),0,1),e[1]=R(S(e[1],0),0,.4,!1),e[2]=+S(e[2].replace("deg",""),0);const o=e0(It(e)),r=n[4]!==void 0?+R(n[4],0,1):1;return o[3]=r,o}};X0.test=t=>wt.test(t)||_t.test(t)||$t.test(t)||Lt.test(t)||Et.test(t)||Rt.test(t)||yt.test(t)||kt.test(t)||Mt.test(t)||xt.test(t)||t==="transparent";u.prototype.css=function(t){return Be(this._rgb,t)};const Ge=(...t)=>new u(...t,"css");_.css=Ge;O.format.css=X0;O.autodetect.push({p:5,test:(t,...n)=>{if(!n.length&&k(t)==="string"&&X0.test(t))return"css"}});O.format.gl=(...t)=>{const n=w(t,"rgba");return n[0]*=255,n[1]*=255,n[2]*=255,n};const Se=(...t)=>new u(...t,"gl");_.gl=Se;u.prototype.gl=function(){const t=this._rgb;return[t[0]/255,t[1]/255,t[2]/255,t[3]]};u.prototype.hex=function(t){return ft(this._rgb,t)};const Ye=(...t)=>new u(...t,"hex");_.hex=Ye;O.format.hex=lt;O.autodetect.push({p:4,test:(t,...n)=>{if(!n.length&&k(t)==="string"&&[3,4,5,6,7,8,9].indexOf(t.length)>=0)return"hex"}});const{log:N0}=Math,Pt=t=>{const n=t/100;let e,o,r;return n<66?(e=255,o=n<6?0:-155.25485562709179-.44596950469579133*(o=n-2)+104.49216199393888*N0(o),r=n<20?0:-254.76935184120902+.8274096064007395*(r=n-10)+115.67994401066147*N0(r)):(e=351.97690566805693+.114206453784165*(e=n-55)-40.25366309332127*N0(e),o=325.4494125711974+.07943456536662342*(o=n-50)-28.0852963507957*N0(o),r=255),[e,o,r,1]},{round:ze}=Math,Fe=(...t)=>{const n=w(t,"rgb"),e=n[0],o=n[2];let r=1e3,i=4e4;const a=.4;let c;for(;i-r>a;){c=(i+r)*.5;const s=Pt(c);s[2]/s[0]>=o/e?i=c:r=c}return ze(c)};u.prototype.temp=u.prototype.kelvin=u.prototype.temperature=function(){return Fe(this._rgb)};const C0=(...t)=>new u(...t,"temp");Object.assign(_,{temp:C0,kelvin:C0,temperature:C0});O.format.temp=O.format.kelvin=O.format.temperature=Pt;u.prototype.oklch=function(){return Ot(this._rgb)};const Ke=(...t)=>new u(...t,"oklch");Object.assign(_,{oklch:Ke});O.format.oklch=It;O.autodetect.push({p:2,test:(...t)=>{if(t=w(t,"oklch"),k(t)==="array"&&t.length===3)return"oklch"}});Object.assign(_,{analyze:mt,average:Hn,bezier:Tn,blend:H,brewer:Me,Color:u,colors:o0,contrast:Ne,contrastAPCA:ge,cubehelix:se,deltaE:we,distance:ye,input:O,interpolate:r0,limits:gt,mix:r0,random:be,scale:m0,scales:_e,valid:ke});const He=`Year,Index,Mean ± Stdev,Median,Max,Median Solve %,Round
2025,A,5.882 ± 3.091,5.882,10,58.82%,Open
2025,B,6.364 ± 2.562,6.364,10,63.64%,Open
2025,C,4.839 ± 4.554,4.839,15,32.26%,Open
2025,D,8.519 ± 2.183,8.519,10,85.19%,Open
2025,E,1.667 ± 5.849,1.667,15,11.11%,Open
2025,F,7.143 ± 2.236,7.143,10,71.43%,Open
2025,G,1.056 ± 3.291,1.056,15,7.04%,Open
2025,H,5.890 ± 5.122,5.890,15,39.27%,Open
2025,I,4.692 ± 2.697,5.000,10,50.00%,Invitational
2025,J,1.878 ± 2.595,1.034,15,6.89%,Invitational
2025,K,10.148 ± 3.343,10.385,15,69.23%,Invitational
2025,L,3.060 ± 2.530,3.077,15,20.51%,Invitational
2025,M,6.825 ± 3.499,8.302,10,83.02%,Invitational
2025,N,2.550 ± 2.381,2.269,10,22.69%,Invitational
2025,O,6.751 ± 2.595,7.436,10,74.36%,Invitational
2025,P,3.139 ± 3.902,1.875,15,12.50%,Invitational
2024,A,6.956 ± 2.619,7.442,10,74.42%,Open
2024,B,6.109 ± 2.007,5.676,10,56.76%,Open
2024,C,7.815 ± 2.449,8.718,10,87.18%,Open
2024,D,11.189 ± 5.733,10.000,20,50.00%,Open
2024,E,6.549 ± 3.883,9.032,10,90.32%,Open
2024,F,1.811 ± 2.089,1.111,10,11.11%,Open
2024,G,10.310 ± 3.818,10.970,15,73.13%,Open
2024,H,6.580 ± 4.500,6.111,15,40.74%,Open
2024,I,3.862 ± 2.073,5.000,5,100.00%,Invitational
2024,J,4.138 ± 1.227,4.167,5,83.34%,Invitational
2024,K,2.640 ± 1.827,2.319,10,23.19%,Invitational
2024,L,2.449 ± 2.583,1.950,15,13.00%,Invitational
2024,M,0.280 ± 1.071,0.000,10,0.00%,Invitational
2024,N,5.373 ± 2.995,6.013,10,60.13%,Invitational
2024,O,4.797 ± 3.693,4.722,15,31.48%,Invitational
2024,P,2.913 ± 2.129,2.684,10,26.84%,Invitational
2024,Q,0.774 ± 1.964,0.100,10,1.00%,Invitational
2024,R,6.799 ± 3.275,8.000,10,80.00%,Invitational
2023,A,10.151 ± 2.608,10.489,15,69.93%,Open
2023,B,4.881 ± 3.732,4.941,10,49.41%,Open
2023,C,5.419 ± 4.602,3.837,15,25.58%,Open
2023,D,4.865 ± 3.158,4.792,10,47.92%,Open
2023,E,4.037 ± 1.299,4.231,5,84.62%,Open
2023,F,1.921 ± 3.246,0.517,15,3.45%,Open
2023,G,3.564 ± 4.318,1.875,15,12.50%,Open
2023,H,5.512 ± 3.434,5.620,15,37.47%,Open
2023,I,4.190 ± 0.904,4.167,5,83.34%,Invitational
2023,J,3.233 ± 3.762,1.216,15,8.11%,Invitational
2023,K,11.723 ± 3.574,12.857,15,85.71%,Invitational
2023,L,5.405 ± 3.282,5.185,10,51.85%,Invitational
2023,M,4.189 ± 3.519,3.606,15,24.04%,Invitational
2023,N,4.409 ± 4.294,1.739,10,17.39%,Invitational
2023,O,4.805 ± 1.568,5.100,10,51.00%,Invitational
2023,P,2.885 ± 4.531,0.630,15,4.20%,Invitational
2023,Q,3.690 ± 1.935,4.726,5,94.52%,Invitational
2022,A,3.745 ± 3.199,3.333,10,33.33%,Open
2022,B,8.456 ± 2.396,10.000,10,100.00%,Open
2022,C,8.751 ± 5.633,11.429,15,76.19%,Open
2022,D,2.222 ± 3.345,0.625,10,6.25%,Open
2022,E,3.207 ± 3.216,1.798,10,17.98%,Open
2022,F,4.503 ± 2.743,5.126,10,51.26%,Open
2022,G,3.130 ± 1.854,3.571,5,71.42%,Open
2022,H,1.010 ± 2.023,0.000,15,0.00%,Open
2022,I,3.909 ± 3.444,4.412,15,29.41%,Open
2022,J,4.211 ± 0.881,4.318,5,86.36%,Invitational
2022,K,4.839 ± 4.920,2.903,15,19.35%,Invitational
2022,L,4.782 ± 0.345,5.000,5,100.00%,Invitational
2022,M,5.210 ± 2.471,5.432,10,54.32%,Invitational
2022,N,4.281 ± 3.088,4.575,15,30.50%,Invitational
2022,O,4.577 ± 2.843,4.643,10,46.43%,Invitational
2022,P,3.442 ± 2.821,2.813,15,18.75%,Invitational
2022,Q,3.269 ± 3.304,2.206,15,14.71%,Invitational
2022,R,1.371 ± 1.265,1.029,10,10.29%,Invitational
2021,A,N/A,N/A,N/A,N/A,Open
2021,B,N/A,N/A,N/A,N/A,Open
2021,C,N/A,N/A,N/A,N/A,Open
2021,D,N/A,N/A,N/A,N/A,Open
2021,E,N/A,N/A,N/A,N/A,Open
2021,F,N/A,N/A,N/A,N/A,Open
2021,G,N/A,N/A,N/A,N/A,Open
2021,H,N/A,N/A,N/A,N/A,Open
2021,I,N/A,N/A,N/A,N/A,Open
2021,J,6.597 ± 2.670,7.436,10,74.36%,Invitational
2021,K,3.474 ± 1.755,4.286,5,85.72%,Invitational
2021,L,5.084 ± 2.588,5.642,10,56.42%,Invitational
2021,M,4.740 ± 4.153,4.928,15,32.85%,Invitational
2021,N,1.616 ± 1.104,1.618,10,16.18%,Invitational
2021,O,3.646 ± 3.527,2.727,10,27.27%,Invitational
2021,P,3.655 ± 3.708,1.800,10,18.00%,Invitational
2021,Q,6.367 ± 3.240,7.778,10,77.78%,Invitational
2021,R,0.964 ± 0.964,0.694,5,13.88%,Invitational
2021,S,2.470 ± 3.605,0.125,15,0.83%,Invitational
2020,A,N/A,N/A,N/A,N/A,Open
2020,B,N/A,N/A,N/A,N/A,Open
2020,C,N/A,N/A,N/A,N/A,Open
2020,D,N/A,N/A,N/A,N/A,Open
2020,E,N/A,N/A,N/A,N/A,Open
2020,F,N/A,N/A,N/A,N/A,Open
2020,G,N/A,N/A,N/A,N/A,Open
2020,H,N/A,N/A,N/A,N/A,Open
2020,I,7.649 ± 2.642,8.530,10,85.30%,Invitational
2020,J,4.771 ± 3.940,4.850,15,32.33%,Invitational
2020,K,3.275 ± 3.541,1.000,10,10.00%,Invitational
2020,L,2.734 ± 1.921,2.780,5,55.60%,Invitational
2020,M,2.292 ± 2.466,0.430,10,4.30%,Invitational
2020,N,2.636 ± 1.408,3.060,5,61.20%,Invitational
2020,O,5.462 ± 3.610,6.300,10,63.00%,Invitational
2020,P,4.266 ± 3.385,3.970,15,26.47%,Invitational
2020,Q,1.909 ± 2.934,0.450,10,4.50%,Invitational
2020,R,2.772 ± 2.613,2.270,10,22.70%,Invitational
2019,A,4.816 ± 3.293,5.000,10,50.00%,Open
2019,B,7.423 ± 4.532,7.840,15,52.27%,Open
2019,C,6.754 ± 7.615,3.333,20,16.67%,Open
2019,D,8.435 ± 6.320,10.588,15,70.59%,Open
2019,E,1.090 ± 1.941,0.000,10,0.00%,Open
2019,F,4.230 ± 3.087,4.137,10,41.37%,Open
2019,G,3.939 ± 1.398,4.242,5,84.84%,Open
2019,H,2.883 ± 5.055,0.000,15,0.00%,Open
2019,I,3.261 ± 1.178,3.611,5,72.22%,Invitational
2019,J,3.712 ± 2.407,3.571,10,35.71%,Invitational
2019,K,4.251 ± 4.324,1.471,10,14.71%,Invitational
2019,L,5.517 ± 3.949,4.838,15,32.25%,Invitational
2019,M,4.942 ± 3.772,5.000,10,50.00%,Invitational
2019,N,0.885 ± 1.377,0.517,15,3.45%,Invitational
2019,O,2.815 ± 2.055,3.608,5,72.16%,Invitational
2019,P,0.841 ± 2.151,0.000,15,0.00%,Invitational
2019,Q,3.177 ± 3.445,1.714,10,17.14%,Invitational
2019,R,2.804 ± 1.311,3.259,5,65.18%,Invitational
2018,A,N/A,N/A,N/A,N/A,Open
2018,B,N/A,N/A,N/A,N/A,Open
2018,C,N/A,N/A,N/A,N/A,Open
2018,D,N/A,N/A,N/A,N/A,Open
2018,E,N/A,N/A,N/A,N/A,Open
2018,F,N/A,N/A,N/A,N/A,Open
2018,G,N/A,N/A,N/A,N/A,Open
2018,H,N/A,N/A,N/A,N/A,Open
2018,I,4.673 ± 3.376,3.261,15,21.74%,Invitational
2018,J,6.763 ± 2.529,7.200,10,72.00%,Invitational
2018,K,4.613 ± 3.158,4.286,10,42.86%,Invitational
2018,L,2.321 ± 1.444,2.500,5,50.00%,Invitational
2018,M,5.358 ± 6.016,1.565,15,10.43%,Invitational
2018,N,5.188 ± 3.384,6.091,10,60.91%,Invitational
2018,O,3.379 ± 1.513,3.712,5,74.24%,Invitational
2018,P,2.909 ± 1.392,3.421,5,68.42%,Invitational
2018,Q,6.526 ± 3.014,7.308,10,73.08%,Invitational
2018,R,7.173 ± 5.137,8.697,15,57.98%,Invitational
2017,A,3.467 ± 1.283,3.906,5,78.12%,Open
2017,B,9.019 ± 4.839,10.500,15,70.00%,Open
2017,C,7.805 ± 2.794,8.933,10,89.33%,Open
2017,D,7.195 ± 2.962,8.181,10,81.81%,Open
2017,E,7.148 ± 6.216,5.600,20,28.00%,Open
2017,F,5.933 ± 1.914,7.000,10,70.00%,Open
2017,G,5.297 ± 5.282,2.400,15,16.00%,Open
2017,H,8.358 ± 7.179,15.000,15,100.00%,Open
2017,I,N/A,N/A,N/A,N/A,Invitational
2017,J,N/A,N/A,N/A,N/A,Invitational
2017,K,N/A,N/A,N/A,N/A,Invitational
2017,L,N/A,N/A,N/A,N/A,Invitational
2017,M,N/A,N/A,N/A,N/A,Invitational
2017,N,N/A,N/A,N/A,N/A,Invitational
2017,O,N/A,N/A,N/A,N/A,Invitational
2017,P,N/A,N/A,N/A,N/A,Invitational
2017,Q,N/A,N/A,N/A,N/A,Invitational
2017,R,N/A,N/A,N/A,N/A,Invitational
2016,A,N/A,N/A,N/A,N/A,Open
2016,B,N/A,N/A,N/A,N/A,Open
2016,C,N/A,N/A,N/A,N/A,Open
2016,D,N/A,N/A,N/A,N/A,Open
2016,E,N/A,N/A,N/A,N/A,Open
2016,F,N/A,N/A,N/A,N/A,Open
2016,G,N/A,N/A,N/A,N/A,Open
2016,H,N/A,N/A,N/A,N/A,Open
2016,I,N/A,N/A,N/A,N/A,Invitational
2016,J,N/A,N/A,N/A,N/A,Invitational
2016,K,N/A,N/A,N/A,N/A,Invitational
2016,L,N/A,N/A,N/A,N/A,Invitational
2016,M,N/A,N/A,N/A,N/A,Invitational
2016,N,N/A,N/A,N/A,N/A,Invitational
2016,O,N/A,N/A,N/A,N/A,Invitational
2016,P,N/A,N/A,N/A,N/A,Invitational
2016,Q,N/A,N/A,N/A,N/A,Invitational
2016,R,N/A,N/A,N/A,N/A,Invitational
2015,A,3.964 ± 1.952,5.000,5,100.00%,Open
2015,B,5.052 ± 2.391,5.454,10,54.54%,Open
2015,C,5.632 ± 4.005,5.741,10,57.41%,Open
2015,D,7.817 ± 2.863,9.310,10,93.10%,Open
2015,E,9.599 ± 3.094,10.102,15,67.35%,Open
2015,F,4.044 ± 5.559,0.967,15,6.45%,Open
2015,G,11.396 ± 5.197,15.000,15,100.00%,Open
2015,H,2.764 ± 3.112,1.666,20,8.33%,Open
2015,I,3.981 ± 0.782,4.080,5,81.60%,Invitational
2015,J,9.141 ± 6.897,9.000,20,45.00%,Invitational
2015,K,11.453 ± 3.411,12.850,15,85.67%,Invitational
2015,L,6.462 ± 4.158,9.000,10,90.00%,Invitational
2015,M,5.679 ± 2.461,5.850,10,58.50%,Invitational
2015,N,5.027 ± 5.380,2.500,15,16.67%,Invitational
2015,O,6.655 ± 6.402,3.721,20,18.61%,Invitational
2015,P,4.134 ± 1.291,5.000,5,100.00%,Invitational
2014,A,4.847 ± 3.209,5.000,10,50.00%,Open
2014,B,7.193 ± 3.877,7.397,15,49.31%,Open
2014,C,4.707 ± 1.810,5.000,15,33.33%,Open
2014,D,7.539 ± 3.159,7.752,15,51.68%,Open
2014,E,7.326 ± 3.242,9.130,10,91.30%,Open
2014,F,6.598 ± 5.682,5.217,20,26.09%,Open
2014,G,3.686 ± 0.922,3.879,5,77.58%,Open
2014,H,8.373 ± 2.237,9.000,10,90.00%,Open
2014,I,8.730 ± 1.444,9.259,10,92.59%,Invitational
2014,J,10.738 ± 3.831,12.000,15,80.00%,Invitational
2014,K,5.156 ± 2.798,5.250,10,52.50%,Invitational
2014,L,6.974 ± 2.579,7.302,10,73.02%,Invitational
2014,M,5.556 ± 2.376,5.500,10,55.00%,Invitational
2014,N,0.829 ± 1.686,0.100,5,2.00%,Invitational
2014,O,2.984 ± 1.203,3.250,5,65.00%,Invitational
2014,P,11.769 ± 3.182,13.026,15,86.84%,Invitational
2014,Q,12.420 ± 4.694,13.600,20,68.00%,Invitational
2013,A,2.894 ± 3.327,1.000,10,10.00%,Open
2013,B,5.556 ± 2.542,6.000,10,60.00%,Open
2013,C,7.044 ± 2.946,7.419,10,74.19%,Open
2013,D,3.004 ± 4.939,0.500,20,2.50%,Open
2013,E,4.802 ± 2.637,5.000,10,50.00%,Open
2013,F,5.513 ± 3.700,6.666,10,66.66%,Open
2013,G,0.462 ± 1.811,0.000,10,0.00%,Open
2013,H,3.142 ± 3.926,1.763,20,8.82%,Open
2013,I,N/A,N/A,N/A,N/A,Invitational
2013,J,N/A,N/A,N/A,N/A,Invitational
2013,K,N/A,N/A,N/A,N/A,Invitational
2013,L,N/A,N/A,N/A,N/A,Invitational
2013,M,N/A,N/A,N/A,N/A,Invitational
2013,N,N/A,N/A,N/A,N/A,Invitational
2013,O,N/A,N/A,N/A,N/A,Invitational
2013,P,N/A,N/A,N/A,N/A,Invitational
2013,Q,N/A,N/A,N/A,N/A,Invitational
2013,R,N/A,N/A,N/A,N/A,Invitational
2012,A,8.757 ± 2.675,10.000,10,100.00%,Open
2012,B,2.100 ± 1.707,1.666,5,33.32%,Open
2012,C,6.632 ± 2.002,6.363,10,63.63%,Open
2012,D,4.286 ± 3.264,4.736,10,47.36%,Open
2012,E,7.733 ± 3.713,8.437,15,56.25%,Open
2012,F,9.382 ± 5.740,11.538,15,76.92%,Open
2012,G,12.560 ± 7.860,14.024,25,56.10%,Open
2012,H,5.849 ± 4.084,7.500,10,75.00%,Open
2012,I,3.410 ± 1.512,3.750,5,75.00%,Invitational
2012,J,8.531 ± 0.783,8.571,10,85.71%,Invitational
2012,K,3.144 ± 1.110,3.000,5,60.00%,Invitational
2012,L,4.121 ± 1.036,4.444,5,88.88%,Invitational
2012,M,12.104 ± 4.127,12.000,20,60.00%,Invitational
2012,N,4.036 ± 2.666,4.000,10,40.00%,Invitational
2012,O,3.833 ± 1.587,4.500,5,90.00%,Invitational
2012,P,3.977 ± 0.834,4.286,5,85.72%,Invitational
2012,Q,0.874 ± 1.901,0.000,20,0.00%,Invitational
2012,R,7.910 ± 3.213,7.428,15,49.52%,Invitational
2011,A,6.956 ± 2.233,7.368,10,73.68%,Open
2011,B,6.037 ± 2.848,5.714,10,57.14%,Open
2011,C,9.809 ± 5.069,12.236,15,81.57%,Open
2011,D,8.781 ± 4.248,9.078,15,60.52%,Open
2011,E,5.833 ± 4.212,5.500,15,36.67%,Open
2011,F,10.483 ± 5.750,11.428,20,57.14%,Open
2011,G,5.765 ± 5.276,3.375,15,22.50%,Open
2011,H,13.605 ± 1.306,13.650,15,91.00%,Invitational
2011,I,8.539 ± 1.543,8.880,10,88.80%,Invitational
2011,J,3.281 ± 3.289,2.778,15,18.52%,Invitational
2011,K,5.265 ± 5.242,3.200,20,16.00%,Invitational
2011,L,7.220 ± 4.230,6.500,20,32.50%,Invitational
2011,M,9.606 ± 0.726,10.000,10,100.00%,Invitational
2011,N,7.821 ± 1.522,8.000,10,80.00%,Invitational
2010,A,7.599 ± 2.658,8.000,10,80.00%,Open
2010,B,3.820 ± 1.327,4.000,5,80.00%,Open
2010,C,6.336 ± 4.937,8.000,15,53.33%,Open
2010,D,6.957 ± 2.660,8.000,10,80.00%,Open
2010,E,7.478 ± 8.529,5.000,25,20.00%,Open
2010,F,3.042 ± 3.089,2.000,15,13.33%,Open
2010,G,5.224 ± 5.901,3.000,20,15.00%,Open
2010,H,N/A,N/A,N/A,N/A,Invitational
2010,I,N/A,N/A,N/A,N/A,Invitational
2010,J,N/A,N/A,N/A,N/A,Invitational
2010,K,N/A,N/A,N/A,N/A,Invitational
2010,L,N/A,N/A,N/A,N/A,Invitational
2010,M,N/A,N/A,N/A,N/A,Invitational
2010,N,N/A,N/A,N/A,N/A,Invitational
2010,O,N/A,N/A,N/A,N/A,Invitational
2010,P,N/A,N/A,N/A,N/A,Invitational
2009,A,16.058 ± 4.844,18.000,20,90.00%,Open
2009,B,3.098 ± 1.857,4.000,5,80.00%,Open
2009,C,7.111 ± 4.391,8.000,20,40.00%,Open
2009,D,9.759 ± 6.681,10.000,25,40.00%,Open
2009,E,5.094 ± 6.070,3.000,25,12.00%,Open
2009,F,3.161 ± 1.336,4.000,5,80.00%,Open
2009,G,N/A,N/A,N/A,N/A,Invitational
2009,H,10.754 ± 4.365,12.750,15,85.00%,Invitational
2009,I,N/A,N/A,N/A,N/A,Invitational
2009,J,N/A,N/A,N/A,N/A,Invitational
2009,K,N/A,N/A,N/A,N/A,Invitational
2009,L,10.420 ± 4.474,10.000,25,40.00%,Invitational
2009,M,10.754 ± 4.365,12.750,15,85.00%,Invitational
2008,A,6.746 ± 2.733,7.500,10,75.00%,Open
2008,B,13.714 ± 5.767,16.000,20,80.00%,Open
2008,C,4.250 ± 4.875,2.500,20,12.50%,Open
2008,D,9.485 ± 7.222,9.000,25,36.00%,Open
2008,E,5.324 ± 5.639,3.000,25,12.00%,Open
2008,F,7.043 ± 2.072,7.000,10,70.00%,Invitational
2008,G,4.405 ± 1.713,4.500,10,45.00%,Invitational
2008,H,7.526 ± 2.369,8.000,10,80.00%,Invitational
2008,I,10.306 ± 2.043,10.500,15,70.00%,Invitational
2008,J,6.931 ± 4.182,5.500,20,27.50%,Invitational
2008,K,6.966 ± 3.538,7.000,15,46.67%,Invitational
2008,L,9.573 ± 2.690,9.500,20,47.50%,Invitational
2007,A,N/A,N/A,N/A,N/A,Open
2007,B,N/A,N/A,N/A,N/A,Open
2007,C,N/A,N/A,N/A,N/A,Open
2007,D,N/A,N/A,N/A,N/A,Open
2007,E,N/A,N/A,N/A,N/A,Open
2007,F,N/A,N/A,N/A,N/A,Open
2007,G,N/A,N/A,N/A,N/A,Open
2007,H,N/A,N/A,N/A,N/A,Open`,De=He.trim().split(`
`).slice(1).map(t=>{const[n,e,o,r,i,a,c]=t.split(","),[s,l]=o.split(" ± ").map(d=>parseFloat(d));return{year:parseInt(n,10),index:e,mean:s,std:l,median:parseFloat(r),max:parseFloat(i),medianSolvePct:parseFloat(a.replace("%",""))/100,isOpen:c==="Open"}}),jt=new Map;for(const t of De)jt.set(`${t.year}${t.index}`,t);const Xe="_paginator_jay3o_1",qe={paginator:Xe},Ze=_.scale(["#ca393e","#3eca39"]).domain([0,1]);function We({prob:t}){const n=jt.get(t);if(!n||Number.isNaN(n.medianSolvePct))return"N/A";const e=Ze(n.medianSolvePct).hex();return V.jsxs("span",{style:{...n.isOpen?{backgroundColor:e,color:_(e).luminance()<.5?"white":"black"}:{border:`2px solid ${e}`,color:e},padding:"0.1em 0.4em",borderRadius:"var(--border-radius-small)",fontWeight:"bold",fontVariantNumeric:"tabular-nums"},title:`Median Solve Percentage: ${(n.medianSolvePct*100).toFixed(2)}%`,children:[(n.medianSolvePct*100).toFixed(2),"%"]})}function Qe({year:t}){return V.jsxs("nav",{className:qe.paginator,children:[t===2022?V.jsx("span",{className:"phantom",children:"← Previous year"}):V.jsx(w0,{href:`/notes/naclo/${t-1}/`,children:"← Previous year"})," ",V.jsx(w0,{href:"/notes/naclo/",children:"Back to NACLO index"})," ",t===2025?V.jsx("span",{className:"phantom",children:"→ Next year"}):V.jsx(w0,{href:`/notes/naclo/${t+1}/`,children:"→ Next year"})]})}export{We as D,Qe as Y};
