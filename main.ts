import{mkdirSync as a,readdirSync as b,readFileSync as c,writeFileSync as d}from"node:fs";
function r(p,q){
let D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),o=Buffer.alloc(65536),s=0,y=0,l=0,i=0,g=0,t=0,n=p.length;
let e=x=>({o:o.subarray(0,l),c:x});
let u=k=>{if(s<k)throw 2},v=()=>{if(s>255)throw 3};
try{for(;;){
if(t==1e6)throw 10;
if(g<0||g>=n)throw 9;
let h=p[g],m=h==1?1:h==2?4:h>=48&&h<52?2:0;
if(g+m>=n)throw 9;
t++;
let x=g+1+m;g=x;
switch(h){
case 0:return e(0);
case 1:v();D[s++]=(p[x-1]<<24)>>24;break;
case 2:v();D[s++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;break;
case 3:u(1);s--;break;
case 4:u(1);v();D[s]=D[s-1];s++;break;
case 5:u(2);let z=D[s-1];D[s-1]=D[s-2];D[s-2]=z;break;
case 6:u(2);v();D[s]=D[s-2];s++;break;
case 7:u(3);let A=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=A;break;
case 23:u(1);D[s-1]=-D[s-1]|0;break;
case 27:u(1);D[s-1]=~D[s-1];break;
case 48:case 49:case 50:{
let f=(p[x-2]|p[x-1]<<8)<<16>>16,k=1;
if(h!=48){u(1);let W=D[--s];k=h==49?W==0:W!=0}
if(k)g=x+f;break}
case 51:if(y==64)throw 7;C[y++]=x;g=p[x-2]|p[x-1]<<8;break;
case 52:if(!y)throw 8;g=C[--y];break;
case 64:u(1);let G=D[s-1];if(G<0||G>255)throw 6;D[s-1]=M[G];break;
case 65:u(2);let H=D[s-1],J=D[s-2];if(H<0||H>255)throw 6;s-=2;M[H]=J;break;
case 80:u(1);let S=String(D[s-1]);if(l+S.length>65536)throw 11;s--;for(let K=0;K<S.length;K++)o[l++]=S.charCodeAt(K);break;
case 81:u(1);if(l+1>65536)throw 11;o[l++]=D[--s]&255;break;
case 82:v();D[s++]=i<q.length?q[i++]:-1;break;
case 83:u(1);return e(D[--s]&255);
default:
if(h>=16&&h<=34){
u(2);let B=D[s-1],F=D[s-2],R;
if(h==16)R=F+B|0;
else if(h==17)R=F-B|0;
else if(h==18)R=Math.imul(F,B);
else if(h==19){if(!B)throw 4;R=F==-2147483648&&B==-1?F:F/B|0}
else if(h==20){if(!B)throw 4;R=B==-1?0:F%B|0}
else if(h==21){if(!B)throw 4;R=Math.floor((F>>>0)/(B>>>0))|0}
else if(h==22){if(!B)throw 4;R=(F>>>0)%(B>>>0)|0}
else if(h==24)R=F&B;
else if(h==25)R=F|B;
else if(h==26)R=F^B;
else if(h==28)R=F<<(B&31);
else if(h==29)R=F>>(B&31);
else if(h==30)R=F>>>(B&31)|0;
else if(h==32)R=F==B?1:0;
else if(h==33)R=F<B?1:0;
else R=(F>>>0)<(B>>>0)?1:0;
s-=2;D[s++]=R;break;
}
throw 5;
}
}}catch(z){return e(typeof z=="number"?z:1)}
}
let I=process.env.MAKEFUN_INPUT_DIR||"/input",O=process.env.MAKEFUN_OUTPUT_DIR||"/output";
for(let id of b(I).sort()){let Z=r(c(I+"/"+id+"/program.bin"),c(I+"/"+id+"/input.bin"));a(O+"/"+id,{recursive:!0});d(O+"/"+id+"/stdout.bin",Z.o);d(O+"/"+id+"/exit.txt",Z.c+"\n")}
