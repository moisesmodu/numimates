var lg=0,fd=1,cg=2;var Gr=1,ug=2,Co=3,ci=0,ln=1,Tn=2,dn=0,Wr=1,dd=2,pd=3,md=4,bu=5;var Si=100,hg=101,fg=102,dg=103,pg=104,ms=200,mg=201,gg=202,xg=203,gd=204,xd=205,dl=206,_g=207,pl=208,vg=209,yg=210,Mg=211,Sg=212,bg=213,wg=214,Gc=0,Wc=1,Xc=2,fo=3,qc=4,Yc=5,Zc=6,$c=7,wu=0,Eg=1,Tg=2,Bi=0,ml=1,gl=2,xl=3,_l=4,vl=5,yl=6,Xr=7;var _d=300,qr=301,gs=302,Eu=303,Tu=304,Ml=306,si=1e3,Yi=1001,Jc=1002,fn=1003,Ag=1004;var Sl=1005;var Cn=1006,Au=1007;var Yr=1008;var gn=1009,vd=1010,yd=1011,Po=1012,Ru=1013,Oi=1014,bi=1015,Mn=1016,Cu=1017,Pu=1018,Zr=1020,Md=35902,Sd=35899,bd=1021,wd=1022,Jn=1023,$i=1026,ji=1027,Iu=1028,Du=1029,$r=1030,Lu=1031;var Nu=1033,bl=33776,wl=33777,El=33778,Tl=33779,Uu=35840,Fu=35841,Bu=35842,Ou=35843,zu=36196,Vu=37492,ku=37496,Hu=37488,Gu=37489,Al=37490,Wu=37491,Xu=37808,qu=37809,Yu=37810,Zu=37811,$u=37812,Ju=37813,Ku=37814,ju=37815,Qu=37816,th=37817,eh=37818,nh=37819,ih=37820,rh=37821,sh=36492,oh=36494,ah=36495,lh=36283,ch=36284,Rl=36285,uh=36286;var Ia=2300,Kc=2301,kc=2302,Qf=2303,td=2400,ed=2401,nd=2402;var Rg=3200;var Io=0,Cg=1,vr="",Rn="srgb",Da="srgb-linear",La="linear",Ie="srgb";var Hc=7680;var Pg=519,Ig=512,Dg=513,Lg=514,hh=515,Ng=516,Ug=517,fh=518,Fg=519,Ed=35044;var Td="300 es",Ui=2e3,po=2001;function N_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function U_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bg(){let i=Na("canvas");return i.style.display="block",i}var Tm={},mo=null;function Ua(...i){let t="THREE."+i.shift();mo?mo("log",t,...i):console.log(t,...i)}function Og(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=Og(i);let t="THREE."+i.shift();if(mo)mo("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=Og(i);let t="THREE."+i.shift();if(mo)mo("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fs(...i){let t=i.join(" ");t in Tm||(Tm[t]=!0,oe(...i))}function zg(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Vg={[Gc]:Wc,[Xc]:Zc,[qc]:$c,[fo]:Yc,[Wc]:Gc,[Zc]:Xc,[$c]:qc,[Yc]:fo},Ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Am=1234567,uo=Math.PI/180,go=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[e&63|128]+Ln[e>>8&255]+"-"+Ln[e>>16&255]+Ln[e>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function Ad(i,t){return(i%t+t)%t}function F_(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function B_(i,t,e){return i!==t?(e-i)/(t-i):0}function Ra(i,t,e){return(1-e)*i+e*t}function O_(i,t,e,n){return Ra(i,t,1-Math.exp(-e*n))}function z_(i,t=1){return t-Math.abs(Ad(i,t*2)-t)}function V_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function k_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function H_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function G_(i,t){return i+Math.random()*(t-i)}function W_(i){return i*(.5-Math.random())}function X_(i){i!==void 0&&(Am=i);let t=Am+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function q_(i){return i*uo}function Y_(i){return i*go}function Z_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function $_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function J_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function K_(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),p=o((t-n)/2),g=s((n-t)/2),x=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*d,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*g,a*c);break;case"YXY":i.set(l*g,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*g,a*h,a*c);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Rd={DEG2RAD:uo,RAD2DEG:go,generateUUID:Zi,clamp:he,euclideanModulo:Ad,mapLinear:F_,inverseLerp:B_,lerp:Ra,damp:O_,pingpong:z_,smoothstep:V_,smootherstep:k_,randInt:H_,randFloat:G_,randFloatSpread:W_,seededRandom:X_,degToRad:q_,radToDeg:Y_,isPowerOfTwo:Z_,ceilPowerOfTwo:$_,floorPowerOfTwo:J_,setQuaternionFromProperEuler:K_,normalize:Xe,denormalize:Ni},Nd=class Nd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nd.prototype.isVector2=!0;var gt=Nd,Fn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],p=s[o+0],g=s[o+1],x=s[o+2],b=s[o+3];if(d!==b||l!==p||c!==g||h!==x){let _=l*p+c*g+h*x+d*b;_<0&&(p=-p,g=-g,x=-x,b=-b,_=-_);let y=1-a;if(_<.9995){let w=Math.acos(_),m=Math.sin(w);y=Math.sin(y*w)/m,a=Math.sin(a*w)/m,l=l*y+p*a,c=c*y+g*a,h=h*y+x*a,d=d*y+b*a}else{l=l*y+p*a,c=c*y+g*a,h=h*y+x*a,d=d*y+b*a;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[o],p=s[o+1],g=s[o+2],x=s[o+3];return t[e]=a*x+h*d+l*g-c*p,t[e+1]=l*x+h*p+c*d-a*g,t[e+2]=c*x+h*g+a*p-l*d,t[e+3]=h*x-a*d-l*p-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(s/2),p=l(n/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=p*h*d+c*g*x,this._y=c*g*d-p*h*x,this._z=c*h*x+p*g*d,this._w=c*h*d-p*g*x;break;case"YXZ":this._x=p*h*d+c*g*x,this._y=c*g*d-p*h*x,this._z=c*h*x-p*g*d,this._w=c*h*d+p*g*x;break;case"ZXY":this._x=p*h*d-c*g*x,this._y=c*g*d+p*h*x,this._z=c*h*x+p*g*d,this._w=c*h*d-p*g*x;break;case"ZYX":this._x=p*h*d-c*g*x,this._y=c*g*d+p*h*x,this._z=c*h*x-p*g*d,this._w=c*h*d+p*g*x;break;case"YZX":this._x=p*h*d+c*g*x,this._y=c*g*d+p*h*x,this._z=c*h*x-p*g*d,this._w=c*h*d-p*g*x;break;case"XZY":this._x=p*h*d-c*g*x,this._y=c*g*d-p*h*x,this._z=c*h*x+p*g*d,this._w=c*h*d+p*g*x;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],p=n+a+d;if(p>0){let g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(h-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ud=class Ud{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tf.copy(this).projectOnVector(t),this.sub(Tf)}reflect(t){return this.sub(Tf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ud.prototype.isVector3=!0;var D=Ud,Tf=new D,Rm=new Fn,Fd=class Fd{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],p=n[2],g=n[5],x=n[8],b=r[0],_=r[3],y=r[6],w=r[1],m=r[4],u=r[7],v=r[2],f=r[5],C=r[8];return s[0]=o*b+a*w+l*v,s[3]=o*_+a*m+l*f,s[6]=o*y+a*u+l*C,s[1]=c*b+h*w+d*v,s[4]=c*_+h*m+d*f,s[7]=c*y+h*u+d*C,s[2]=p*b+g*w+x*v,s[5]=p*_+g*m+x*f,s[8]=p*y+g*u+x*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,p=a*l-h*s,g=c*s-o*l,x=e*d+n*p+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return t[0]=d*b,t[1]=(r*c-h*n)*b,t[2]=(a*n-r*o)*b,t[3]=p*b,t[4]=(h*e-r*l)*b,t[5]=(r*s-a*e)*b,t[6]=g*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Af.makeScale(t,e)),this}rotate(t){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Af.makeRotation(-t)),this}translate(t,e){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Af.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Fd.prototype.isMatrix3=!0;var ce=Fd,Af=new ce,Cm=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pm=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j_(){let i={enabled:!0,workingColorSpace:Da,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ie&&(r.r=mr(r.r),r.g=mr(r.g),r.b=mr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ie&&(r.r=ho(r.r),r.g=ho(r.g),r.b=ho(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vr?La:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Da]:{primaries:t,whitePoint:n,transfer:La,toXYZ:Cm,fromXYZ:Pm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:t,whitePoint:n,transfer:Ie,toXYZ:Cm,fromXYZ:Pm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),i}var Se=j_();function mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ho(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ws,jc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ws===void 0&&(Ws=Na("canvas")),Ws.width=t.width,Ws.height=t.height;let r=Ws.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Ws}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Na("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mr(e[n]/255)*255):e[n]=mr(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Q_=0,xo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rf(r[o].image)):s.push(Rf(r[o]))}else s=Rf(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Rf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var tv=0,Cf=new D,Gn=class i extends Ji{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yi,r=Yi,s=Cn,o=Yr,a=Jn,l=gn,c=i.DEFAULT_ANISOTROPY,h=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Zi(),this.name="",this.source=new xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cf).x}get height(){return this.source.getSize(Cf).y}get depth(){return this.source.getSize(Cf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_d)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case si:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Jc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case si:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Jc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=_d;Gn.DEFAULT_ANISOTROPY=1;var Bd=class Bd{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],g=l[5],x=l[9],b=l[2],_=l[6],y=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-b)<.01&&Math.abs(x-_)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+b)<.1&&Math.abs(x+_)<.1&&Math.abs(c+g+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let m=(c+1)/2,u=(g+1)/2,v=(y+1)/2,f=(h+p)/4,C=(d+b)/4,M=(x+_)/4;return m>u&&m>v?m<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(m),r=f/n,s=C/n):u>v?u<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(u),n=f/r,s=M/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=C/s,r=M/s),this.set(n,r,s,e),this}let w=Math.sqrt((_-x)*(_-x)+(d-b)*(d-b)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(_-x)/w,this.y=(d-b)/w,this.z=(p-h)/w,this.w=Math.acos((c+g+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bd.prototype.isVector4=!0;var we=Bd,Qc=class extends Ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new Gn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new xo(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends Qc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fa=class extends Gn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tu=class extends Gn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Su=class Su{constructor(t,e,n,r,s,o,a,l,c,h,d,p,g,x,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,d,p,g,x,b,_)}set(t,e,n,r,s,o,a,l,c,h,d,p,g,x,b,_){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=r,y[1]=s,y[5]=o,y[9]=a,y[13]=l,y[2]=c,y[6]=h,y[10]=d,y[14]=p,y[3]=g,y[7]=x,y[11]=b,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Su().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Xs.setFromMatrixColumn(t,0).length(),s=1/Xs.setFromMatrixColumn(t,1).length(),o=1/Xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let p=o*h,g=o*d,x=a*h,b=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=g+x*c,e[5]=p-b*c,e[9]=-a*l,e[2]=b-p*c,e[6]=x+g*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*h,g=l*d,x=c*h,b=c*d;e[0]=p+b*a,e[4]=x*a-g,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=g*a-x,e[6]=b+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*h,g=l*d,x=c*h,b=c*d;e[0]=p-b*a,e[4]=-o*d,e[8]=x+g*a,e[1]=g+x*a,e[5]=o*h,e[9]=b-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*h,g=o*d,x=a*h,b=a*d;e[0]=l*h,e[4]=x*c-g,e[8]=p*c+b,e[1]=l*d,e[5]=b*c+p,e[9]=g*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,g=o*c,x=a*l,b=a*c;e[0]=l*h,e[4]=b-p*d,e[8]=x*d+g,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=g*d+x,e[10]=p-b*d}else if(t.order==="XZY"){let p=o*l,g=o*c,x=a*l,b=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=p*d+b,e[5]=o*h,e[9]=g*d-x,e[2]=x*d-g,e[6]=a*h,e[10]=b*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ev,t,nv)}lookAt(t,e,n){let r=this.elements;return ii.subVectors(t,e),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Cr.crossVectors(n,ii),Cr.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Cr.crossVectors(n,ii)),Cr.normalize(),fc.crossVectors(ii,Cr),r[0]=Cr.x,r[4]=fc.x,r[8]=ii.x,r[1]=Cr.y,r[5]=fc.y,r[9]=ii.y,r[2]=Cr.z,r[6]=fc.z,r[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],p=n[9],g=n[13],x=n[2],b=n[6],_=n[10],y=n[14],w=n[3],m=n[7],u=n[11],v=n[15],f=r[0],C=r[4],M=r[8],S=r[12],E=r[1],T=r[5],A=r[9],R=r[13],U=r[2],F=r[6],z=r[10],V=r[14],Z=r[3],H=r[7],tt=r[11],q=r[15];return s[0]=o*f+a*E+l*U+c*Z,s[4]=o*C+a*T+l*F+c*H,s[8]=o*M+a*A+l*z+c*tt,s[12]=o*S+a*R+l*V+c*q,s[1]=h*f+d*E+p*U+g*Z,s[5]=h*C+d*T+p*F+g*H,s[9]=h*M+d*A+p*z+g*tt,s[13]=h*S+d*R+p*V+g*q,s[2]=x*f+b*E+_*U+y*Z,s[6]=x*C+b*T+_*F+y*H,s[10]=x*M+b*A+_*z+y*tt,s[14]=x*S+b*R+_*V+y*q,s[3]=w*f+m*E+u*U+v*Z,s[7]=w*C+m*T+u*F+v*H,s[11]=w*M+m*A+u*z+v*tt,s[15]=w*S+m*R+u*V+v*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],p=t[10],g=t[14],x=t[3],b=t[7],_=t[11],y=t[15],w=l*g-c*p,m=a*g-c*d,u=a*p-l*d,v=o*g-c*h,f=o*p-l*h,C=o*d-a*h;return e*(b*w-_*m+y*u)-n*(x*w-_*v+y*f)+r*(x*m-b*v+y*C)-s*(x*u-b*f+_*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],p=t[10],g=t[11],x=t[12],b=t[13],_=t[14],y=t[15],w=e*a-n*o,m=e*l-r*o,u=e*c-s*o,v=n*l-r*a,f=n*c-s*a,C=r*c-s*l,M=h*b-d*x,S=h*_-p*x,E=h*y-g*x,T=d*_-p*b,A=d*y-g*b,R=p*y-g*_,U=w*R-m*A+u*T+v*E-f*S+C*M;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/U;return t[0]=(a*R-l*A+c*T)*F,t[1]=(r*A-n*R-s*T)*F,t[2]=(b*C-_*f+y*v)*F,t[3]=(p*f-d*C-g*v)*F,t[4]=(l*E-o*R-c*S)*F,t[5]=(e*R-r*E+s*S)*F,t[6]=(_*u-x*C-y*m)*F,t[7]=(h*C-p*u+g*m)*F,t[8]=(o*A-a*E+c*M)*F,t[9]=(n*E-e*A-s*M)*F,t[10]=(x*f-b*u+y*w)*F,t[11]=(d*u-h*f-g*w)*F,t[12]=(a*S-o*T-l*M)*F,t[13]=(e*T-n*S+r*M)*F,t[14]=(b*m-x*v-_*w)*F,t[15]=(h*v-d*m+p*w)*F,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,p=s*c,g=s*h,x=s*d,b=o*h,_=o*d,y=a*d,w=l*c,m=l*h,u=l*d,v=n.x,f=n.y,C=n.z;return r[0]=(1-(b+y))*v,r[1]=(g+u)*v,r[2]=(x-m)*v,r[3]=0,r[4]=(g-u)*f,r[5]=(1-(p+y))*f,r[6]=(_+w)*f,r[7]=0,r[8]=(x+m)*C,r[9]=(_-w)*C,r[10]=(1-(p+b))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Xs.set(r[0],r[1],r[2]).length(),a=Xs.set(r[4],r[5],r[6]).length(),l=Xs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ii.copy(this);let c=1/o,h=1/a,d=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=d,Ii.elements[9]*=d,Ii.elements[10]*=d,e.setFromRotationMatrix(Ii),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Ui,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-r),p=(e+t)/(e-t),g=(n+r)/(n-r),x,b;if(l)x=s/(o-s),b=o*s/(o-s);else if(a===Ui)x=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===po)x=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Ui,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-r),p=-(e+t)/(e-t),g=-(n+r)/(n-r),x,b;if(l)x=1/(o-s),b=o/(o-s);else if(a===Ui)x=-2/(o-s),b=-(o+s)/(o-s);else if(a===po)x=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Su.prototype.isMatrix4=!0;var Wt=Su,Xs=new D,Ii=new Wt,ev=new D(0,0,0),nv=new D(1,1,1),Cr=new D,fc=new D,ii=new D,Im=new Wt,Dm=new Fn,gi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],p=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Im.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Im,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dm.setFromEuler(this),this.setFromQuaternion(Dm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},iv=0,Lm=new D,qs=new Fn,ur=new Wt,dc=new D,_a=new D,rv=new D,sv=new Fn,Nm=new D(1,0,0),Um=new D(0,1,0),Fm=new D(0,0,1),Bm={type:"added"},ov={type:"removed"},Ys={type:"childadded",child:null},Pf={type:"childremoved",child:null},yn=class i extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new gi,n=new Fn,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ce}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.multiply(qs),this}rotateOnWorldAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.premultiply(qs),this}rotateX(t){return this.rotateOnAxis(Nm,t)}rotateY(t){return this.rotateOnAxis(Um,t)}rotateZ(t){return this.rotateOnAxis(Fm,t)}translateOnAxis(t,e){return Lm.copy(t).applyQuaternion(this.quaternion),this.position.add(Lm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nm,t)}translateY(t){return this.translateOnAxis(Um,t)}translateZ(t){return this.translateOnAxis(Fm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?dc.copy(t):dc.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(_a,dc,this.up):ur.lookAt(dc,_a,this.up),this.quaternion.setFromRotationMatrix(ur),r&&(ur.extractRotation(r.matrixWorld),qs.setFromRotationMatrix(ur),this.quaternion.premultiply(qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bm),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ov),Pf.child=t,this.dispatchEvent(Pf),Pf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ur.multiply(t.parent.matrixWorld)),t.applyMatrix4(ur),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bm),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,t,rv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,sv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),p=o(t.skeletons),g=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new D(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},av={type:"move"},vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let _=e.getJointPose(b,n),y=this._getHandJoint(c,b);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),g=.02,x=.005;c.inputState.pinching&&p>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(av)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},pc={h:0,s:0,l:0};function If(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Se.workingColorSpace){if(t=Ad(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=If(o,s,t+1/3),this.g=If(o,s,t),this.b=If(o,s,t-1/3)}return Se.colorSpaceToWorking(this,r),this}setStyle(t,e=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Rn){let n=kg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}copyLinearToSRGB(t){return this.r=ho(t.r),this.g=ho(t.g),this.b=ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return Se.workingToColorSpace(Nn.copy(this),t),Math.round(he(Nn.r*255,0,255))*65536+Math.round(he(Nn.g*255,0,255))*256+Math.round(he(Nn.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.workingToColorSpace(Nn.copy(this),e);let n=Nn.r,r=Nn.g,s=Nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Se.workingColorSpace){return Se.workingToColorSpace(Nn.copy(this),e),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=Rn){Se.workingToColorSpace(Nn.copy(this),t);let e=Nn.r,n=Nn.g,r=Nn.b;return t!==Rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Pr),this.setHSL(Pr.h+t,Pr.s+e,Pr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pr),t.getHSL(pc);let n=Ra(Pr.h,pc.h,e),r=Ra(Pr.s,pc.s,e),s=Ra(Pr.l,pc.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new ee;ee.NAMES=kg;var Ba=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ee(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gr=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Di=new D,hr=new D,Df=new D,fr=new D,Zs=new D,$s=new D,Om=new D,Lf=new D,Nf=new D,Uf=new D,Ff=new we,Bf=new we,Of=new we,qe=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Di.subVectors(t,e),r.cross(Di);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Di.subVectors(r,e),hr.subVectors(n,e),Df.subVectors(t,e);let o=Di.dot(Di),a=Di.dot(hr),l=Di.dot(Df),c=hr.dot(hr),h=hr.dot(Df),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let p=1/d,g=(c*l-a*h)*p,x=(o*h-a*l)*p;return s.set(1-g-x,x,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fr.x),l.addScaledVector(o,fr.y),l.addScaledVector(a,fr.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Ff.setScalar(0),Bf.setScalar(0),Of.setScalar(0),Ff.fromBufferAttribute(t,e),Bf.fromBufferAttribute(t,n),Of.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Ff,s.x),o.addScaledVector(Bf,s.y),o.addScaledVector(Of,s.z),o}static isFrontFacing(t,e,n,r){return Di.subVectors(n,e),hr.subVectors(t,e),Di.cross(hr).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Di.cross(hr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Zs.subVectors(r,n),$s.subVectors(s,n),Lf.subVectors(t,n);let l=Zs.dot(Lf),c=$s.dot(Lf);if(l<=0&&c<=0)return e.copy(n);Nf.subVectors(t,r);let h=Zs.dot(Nf),d=$s.dot(Nf);if(h>=0&&d<=h)return e.copy(r);let p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Zs,o);Uf.subVectors(t,s);let g=Zs.dot(Uf),x=$s.dot(Uf);if(x>=0&&g<=x)return e.copy(s);let b=g*c-l*x;if(b<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector($s,a);let _=h*x-g*d;if(_<=0&&d-h>=0&&g-x>=0)return Om.subVectors(s,r),a=(d-h)/(d-h+(g-x)),e.copy(r).addScaledVector(Om,a);let y=1/(_+b+p);return o=b*y,a=p*y,e.copy(n).addScaledVector(Zs,o).addScaledVector($s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Te=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Li):Li.fromBufferAttribute(s,o),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mc.copy(n.boundingBox)),mc.applyMatrix4(t.matrixWorld),this.union(mc)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(va),gc.subVectors(this.max,va),Js.subVectors(t.a,va),Ks.subVectors(t.b,va),js.subVectors(t.c,va),Ir.subVectors(Ks,Js),Dr.subVectors(js,Ks),ls.subVectors(Js,js);let e=[0,-Ir.z,Ir.y,0,-Dr.z,Dr.y,0,-ls.z,ls.y,Ir.z,0,-Ir.x,Dr.z,0,-Dr.x,ls.z,0,-ls.x,-Ir.y,Ir.x,0,-Dr.y,Dr.x,0,-ls.y,ls.x,0];return!zf(e,Js,Ks,js,gc)||(e=[1,0,0,0,1,0,0,0,1],!zf(e,Js,Ks,js,gc))?!1:(xc.crossVectors(Ir,Dr),e=[xc.x,xc.y,xc.z],zf(e,Js,Ks,js,gc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},dr=[new D,new D,new D,new D,new D,new D,new D,new D],Li=new D,mc=new Te,Js=new D,Ks=new D,js=new D,Ir=new D,Dr=new D,ls=new D,va=new D,gc=new D,xc=new D,cs=new D;function zf(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){cs.fromArray(i,s);let a=r.x*Math.abs(cs.x)+r.y*Math.abs(cs.y)+r.z*Math.abs(cs.z),l=t.dot(cs),c=e.dot(cs),h=n.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var mn=new D,_c=new gt,lv=0,Oe=class extends Ji{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ed,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_c.fromBufferAttribute(this,e),_c.applyMatrix3(t),this.setXY(e,_c.x,_c.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix3(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Oa=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var za=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Re=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},cv=new Te,ya=new D,Vf=new D,xi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cv.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ya.subVectors(t,this.center);let e=ya.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ya,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ya.copy(t.center).add(Vf)),this.expandByPoint(ya.copy(t.center).sub(Vf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},uv=0,pi=new Wt,kf=new yn,Qs=new D,ri=new Te,Ma=new Te,wn=new D,De=class i extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(N_(t)?za:Oa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ce().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,n){return pi.makeTranslation(t,e,n),this.applyMatrix4(pi),this}scale(t,e,n){return pi.makeScale(t,e,n),this.applyMatrix4(pi),this}lookAt(t){return kf.lookAt(t),kf.updateMatrix(),this.applyMatrix4(kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Te);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ma.setFromBufferAttribute(a),this.morphTargetsRelative?(wn.addVectors(ri.min,Ma.min),ri.expandByPoint(wn),wn.addVectors(ri.max,Ma.max),ri.expandByPoint(wn)):(ri.expandByPoint(Ma.min),ri.expandByPoint(Ma.max))}ri.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)wn.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(wn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)wn.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(t,c),wn.add(Qs)),r=Math.max(r,n.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Oe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new D,l[M]=new D;let c=new D,h=new D,d=new D,p=new gt,g=new gt,x=new gt,b=new D,_=new D;function y(M,S,E){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,E),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),x.fromBufferAttribute(s,E),h.sub(c),d.sub(c),g.sub(p),x.sub(p);let T=1/(g.x*x.y-x.x*g.y);isFinite(T)&&(b.copy(h).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(T),_.copy(d).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(T),a[M].add(b),a[S].add(b),a[E].add(b),l[M].add(_),l[S].add(_),l[E].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let M=0,S=w.length;M<S;++M){let E=w[M],T=E.start,A=E.count;for(let R=T,U=T+A;R<U;R+=3)y(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let m=new D,u=new D,v=new D,f=new D;function C(M){v.fromBufferAttribute(r,M),f.copy(v);let S=a[M];m.copy(S),m.sub(v.multiplyScalar(v.dot(S))).normalize(),u.crossVectors(f,S);let T=u.dot(l[M])<0?-1:1;o.setXYZW(M,m.x,m.y,m.z,T)}for(let M=0,S=w.length;M<S;++M){let E=w[M],T=E.start,A=E.count;for(let R=T,U=T+A;R<U;R+=3)C(t.getX(R+0)),C(t.getX(R+1)),C(t.getX(R+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);let r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let p=0,g=t.count;p<g;p+=3){let x=t.getX(p+0),b=t.getX(p+1),_=t.getX(p+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,_),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let p=0,g=e.count;p<g;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)wn.fromBufferAttribute(t,e),wn.normalize(),t.setXYZ(e,wn.x,wn.y,wn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,p=new c.constructor(l.length*h),g=0,x=0;for(let b=0,_=l.length;b<_;b++){a.isInterleavedBufferAttribute?g=l[b]*a.data.stride+a.offset:g=l[b]*h;for(let y=0;y<h;y++)p[x++]=c[g++]}return new Oe(p,h,d)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let p=c[h],g=t(p,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){let g=c[d];h.push(g.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let p=0,g=d.length;p<g;p++)h.push(d[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Va=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ed,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Hn=new D,oi=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyMatrix4(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyNormalMatrix(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.transformDirection(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ni(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hf=new D,hv=new D,fv=new ce,vn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Hf.subVectors(n,e).cross(hv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Hf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fv.getNormalMatrix(t),r=this.coplanarPoint(Hf).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},dv=0,_i=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Wr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=xd,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hc,this.stencilZFail=Hc,this.stencilZPass=Hc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new vn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},yo=class extends _i{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},to,Sa=new D,eo=new D,no=new D,io=new gt,ba=new gt,Hg=new Wt,vc=new D,wa=new D,yc=new D,zm=new gt,Gf=new gt,Vm=new gt,ka=class extends yn{constructor(t=new yo){if(super(),this.isSprite=!0,this.type="Sprite",to===void 0){to=new De;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Va(e,5);to.setIndex([0,1,2,0,2,3]),to.setAttribute("position",new oi(n,3,0,!1)),to.setAttribute("uv",new oi(n,2,3,!1))}this.geometry=to,this.material=t,this.center=new gt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),eo.setFromMatrixScale(this.matrixWorld),Hg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),no.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&eo.multiplyScalar(-no.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Mc(vc.set(-.5,-.5,0),no,o,eo,r,s),Mc(wa.set(.5,-.5,0),no,o,eo,r,s),Mc(yc.set(.5,.5,0),no,o,eo,r,s),zm.set(0,0),Gf.set(1,0),Vm.set(1,1);let a=t.ray.intersectTriangle(vc,wa,yc,!1,Sa);if(a===null&&(Mc(wa.set(-.5,.5,0),no,o,eo,r,s),Gf.set(0,1),a=t.ray.intersectTriangle(vc,yc,wa,!1,Sa),a===null))return;let l=t.ray.origin.distanceTo(Sa);l<t.near||l>t.far||e.push({distance:l,point:Sa.clone(),uv:qe.getInterpolation(Sa,vc,wa,yc,zm,Gf,Vm,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Mc(i,t,e,n,r,s){io.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(ba.x=s*io.x-r*io.y,ba.y=r*io.x+s*io.y):ba.copy(io),i.copy(t),i.x+=ba.x,i.y+=ba.y,i.applyMatrix4(Hg)}var pr=new D,Wf=new D,Sc=new D,bc=new D,Fi=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pr.copy(this.origin).addScaledVector(this.direction,e),pr.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Wf.copy(t).add(e).multiplyScalar(.5),Sc.copy(e).sub(t).normalize(),bc.copy(this.origin).sub(Wf);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Sc),a=bc.dot(this.direction),l=-bc.dot(Sc),c=bc.lengthSq(),h=Math.abs(1-o*o),d,p,g,x;if(h>0)if(d=o*l-a,p=o*a-l,x=s*h,d>=0)if(p>=-x)if(p<=x){let b=1/h;d*=b,p*=b,g=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=s,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+c;else p<=-x?(d=Math.max(0,-(-o*s+a)),p=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+p*(p+2*l)+c):p<=x?(d=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+c):(d=Math.max(0,-(o*s+a)),p=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+p*(p+2*l)+c);else p=o>0?-s:s,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Wf).addScaledVector(Sc,p),g}intersectSphere(t,e){if(t.radius<0)return null;pr.subVectors(t.center,this.origin);let n=pr.dot(this.direction),r=pr.dot(pr)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,r=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,r=(t.min.x-p.x)*c),h>=0?(s=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,pr)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,p=t.y-o.y,g=t.z-o.z,x=e.x-o.x,b=e.y-o.y,_=e.z-o.z,y=n.x-o.x,w=n.y-o.y,m=n.z-o.z,u=Math.abs(l),v=Math.abs(c),f=Math.abs(h),C,M,S,E,T,A,R,U,F,z,V,Z;if(u>=v&&u>=f?(S=l,A=d,F=x,Z=y,l>=0?(C=c,M=h,E=p,T=g,R=b,U=_,z=w,V=m):(C=h,M=c,E=g,T=p,R=_,U=b,z=m,V=w)):v>=f?(S=c,A=p,F=b,Z=w,c>=0?(C=h,M=l,E=g,T=d,R=_,U=x,z=m,V=y):(C=l,M=h,E=d,T=g,R=x,U=_,z=y,V=m)):(S=h,A=g,F=_,Z=m,h>=0?(C=l,M=c,E=d,T=p,R=x,U=b,z=y,V=w):(C=c,M=l,E=p,T=d,R=b,U=x,z=w,V=y)),S===0)return null;let H=C/S,tt=M/S,q=1/S,ut=E-H*A,dt=T-tt*A,Et=R-H*F,St=U-tt*F,Vt=z-H*Z,J=V-tt*Z,N=Vt*St-J*Et,lt=ut*J-dt*Vt,Mt=Et*dt-St*ut;if(r){if(N<0||lt<0||Mt<0)return null}else if((N<0||lt<0||Mt<0)&&(N>0||lt>0||Mt>0))return null;let xt=N+lt+Mt;if(xt===0)return null;let bt=q*(N*A+lt*F+Mt*Z);return(xt>0?bt<0:bt>0)?null:this.at(bt/xt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vi=class extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},km=new Wt,us=new Fi,wc=new xi,Hm=new D,Ec=new D,Tc=new D,Ac=new D,Xf=new D,Rc=new D,Gm=new D,Cc=new D,ae=class extends yn{constructor(t=new De,e=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Rc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(Xf.fromBufferAttribute(d,t),o?Rc.addScaledVector(Xf,h):Rc.addScaledVector(Xf.sub(e),h))}e.add(Rc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(s),us.copy(t.ray).recast(t.near),!(wc.containsPoint(us.origin)===!1&&(us.intersectSphere(wc,Hm)===null||us.origin.distanceToSquared(Hm)>(t.far-t.near)**2))&&(km.copy(s).invert(),us.copy(t.ray).applyMatrix4(km),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,b=p.length;x<b;x++){let _=p[x],y=o[_.materialIndex],w=Math.max(_.start,g.start),m=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let u=w,v=m;u<v;u+=3){let f=a.getX(u),C=a.getX(u+1),M=a.getX(u+2);r=Pc(this,y,t,n,c,h,d,f,C,M),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{let x=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let _=x,y=b;_<y;_+=3){let w=a.getX(_),m=a.getX(_+1),u=a.getX(_+2);r=Pc(this,o,t,n,c,h,d,w,m,u),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,b=p.length;x<b;x++){let _=p[x],y=o[_.materialIndex],w=Math.max(_.start,g.start),m=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let u=w,v=m;u<v;u+=3){let f=u,C=u+1,M=u+2;r=Pc(this,y,t,n,c,h,d,f,C,M),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{let x=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let _=x,y=b;_<y;_+=3){let w=_,m=_+1,u=_+2;r=Pc(this,o,t,n,c,h,d,w,m,u),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}};function pv(i,t,e,n,r,s,o,a){let l;if(t.side===ln?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===ci,a),l===null)return null;Cc.copy(a),Cc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Cc);return c<e.near||c>e.far?null:{distance:c,point:Cc.clone(),object:i}}function Pc(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Ec),i.getVertexPosition(l,Tc),i.getVertexPosition(c,Ac);let h=pv(i,t,e,n,Ec,Tc,Ac,Gm);if(h){let d=new D;qe.getBarycoord(Gm,Ec,Tc,Ac,d),r&&(h.uv=qe.getInterpolatedAttribute(r,a,l,c,d,new gt)),s&&(h.uv1=qe.getInterpolatedAttribute(s,a,l,c,d,new gt)),o&&(h.normal=qe.getInterpolatedAttribute(o,a,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new D,materialIndex:0};qe.getNormal(Ec,Tc,Ac,p.normal),h.face=p,h.barycoord=d}return h}var xr=class extends Gn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=fn,h=fn,d,p){super(null,o,a,l,c,h,r,s,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ha=class extends Oe{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ro=new Wt,Wm=new Wt,Ic=[],Xm=new Te,mv=new Wt,Ea=new ae,Ta=new xi,Ga=class extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ha(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,mv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Te),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ro),Xm.copy(t.boundingBox).applyMatrix4(ro),this.boundingBox.union(Xm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ro),Ta.copy(t.boundingSphere).applyMatrix4(ro),this.boundingSphere.union(Ta)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(n),t.ray.intersectsSphere(Ta)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ro),Wm.multiplyMatrices(n,ro),Ea.matrixWorld=Wm,Ea.raycast(t,Ic);for(let o=0,a=Ic.length;o<a;o++){let l=Ic[o];l.instanceId=s,l.object=this,e.push(l)}Ic.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(r*this.count),r,this.count,Iu,bi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new xi,gv=new gt(.5,.5),Dc=new D,Mo=class{constructor(t=new vn,e=new vn,n=new vn,r=new vn,s=new vn,o=new vn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ui,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],p=s[6],g=s[7],x=s[8],b=s[9],_=s[10],y=s[11],w=s[12],m=s[13],u=s[14],v=s[15];if(r[0].setComponents(c-o,g-h,y-x,v-w).normalize(),r[1].setComponents(c+o,g+h,y+x,v+w).normalize(),r[2].setComponents(c+a,g+d,y+b,v+m).normalize(),r[3].setComponents(c-a,g-d,y-b,v-m).normalize(),n)r[4].setComponents(l,p,_,u).normalize(),r[5].setComponents(c-l,g-p,y-_,v-u).normalize();else if(r[4].setComponents(c-l,g-p,y-_,v-u).normalize(),e===Ui)r[5].setComponents(c+l,g+p,y+_,v+u).normalize();else if(e===po)r[5].setComponents(l,p,_,u).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=gv.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Dc.x=r.normal.x>0?t.max.x:t.min.x,Dc.y=r.normal.y>0?t.max.y:t.min.y,Dc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wa=class extends Gn{constructor(t=[],e=qr,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xa=class extends Gn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ki=class extends Gn{constructor(t,e,n=Oi,r,s,o,a=fn,l=fn,c,h=$i,d=1){if(h!==$i&&h!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:d};super(p,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},eu=class extends Ki{constructor(t,e=Oi,n=qr,r,s,o=fn,a=fn,l,c=$i){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qa=class extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Nr=class i extends De{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],p=0,g=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(d,2));function x(b,_,y,w,m,u,v,f,C,M,S){let E=u/C,T=v/M,A=u/2,R=v/2,U=f/2,F=C+1,z=M+1,V=0,Z=0,H=new D;for(let tt=0;tt<z;tt++){let q=tt*T-R;for(let ut=0;ut<F;ut++){let dt=ut*E-A;H[b]=dt*w,H[_]=q*m,H[y]=U,c.push(H.x,H.y,H.z),H[b]=0,H[_]=0,H[y]=f>0?1:-1,h.push(H.x,H.y,H.z),d.push(ut/C),d.push(1-tt/M),V+=1}}for(let tt=0;tt<M;tt++)for(let q=0;q<C;q++){let ut=p+q+F*tt,dt=p+q+F*(tt+1),Et=p+(q+1)+F*(tt+1),St=p+(q+1)+F*tt;l.push(ut,dt,St),l.push(dt,Et,St),Z+=6}a.addGroup(g,Z,S),g+=Z,p+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ur=class i extends De{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],p=[],g=[],x=0,b=[],_=n/2,y=0;w(),o===!1&&(t>0&&m(!0),e>0&&m(!1)),this.setIndex(h),this.setAttribute("position",new Re(d,3)),this.setAttribute("normal",new Re(p,3)),this.setAttribute("uv",new Re(g,2));function w(){let u=new D,v=new D,f=0,C=(e-t)/n;for(let M=0;M<=s;M++){let S=[],E=M/s,T=E*(e-t)+t;for(let A=0;A<=r;A++){let R=A/r,U=R*l+a,F=Math.sin(U),z=Math.cos(U);v.x=T*F,v.y=-E*n+_,v.z=T*z,d.push(v.x,v.y,v.z),u.set(F,C,z).normalize(),p.push(u.x,u.y,u.z),g.push(R,1-E),S.push(x++)}b.push(S)}for(let M=0;M<r;M++)for(let S=0;S<s;S++){let E=b[S][M],T=b[S+1][M],A=b[S+1][M+1],R=b[S][M+1];(t>0||S!==0)&&(h.push(E,T,R),f+=3),(e>0||S!==s-1)&&(h.push(T,A,R),f+=3)}c.addGroup(y,f,0),y+=f}function m(u){let v=x,f=new gt,C=new D,M=0,S=u===!0?t:e,E=u===!0?1:-1;for(let A=1;A<=r;A++)d.push(0,_*E,0),p.push(0,E,0),g.push(.5,.5),x++;let T=x;for(let A=0;A<=r;A++){let U=A/r*l+a,F=Math.cos(U),z=Math.sin(U);C.x=S*z,C.y=_*E,C.z=S*F,d.push(C.x,C.y,C.z),p.push(0,E,0),f.x=F*.5+.5,f.y=z*.5*E+.5,g.push(f.x,f.y),x++}for(let A=0;A<r;A++){let R=v+A,U=T+A;u===!0?h.push(U,U+1,R):h.push(U+1,U,R),M+=3}c.addGroup(y,M,u===!0?1:2),y+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ya=class i extends Ur{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Lc=new D,Nc=new D,qf=new D,Uc=new qe,So=class extends De{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),s=Math.cos(uo*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),p={},g=[];for(let x=0;x<l;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);let{a:b,b:_,c:y}=Uc;if(b.fromBufferAttribute(a,c[0]),_.fromBufferAttribute(a,c[1]),y.fromBufferAttribute(a,c[2]),Uc.getNormal(qf),d[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,d[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){let m=(w+1)%3,u=d[w],v=d[m],f=Uc[h[w]],C=Uc[h[m]],M=`${u}_${v}`,S=`${v}_${u}`;S in p&&p[S]?(qf.dot(p[S].normal)<=s&&(g.push(f.x,f.y,f.z),g.push(C.x,C.y,C.z)),p[S]=null):M in p||(p[M]={index0:c[w],index1:c[m],normal:qf.clone()})}}for(let x in p)if(p[x]){let{index0:b,index1:_}=p[x];Lc.fromBufferAttribute(a,b),Nc.fromBufferAttribute(a,_),g.push(Lc.x,Lc.y,Lc.z),g.push(Nc.x,Nc.y,Nc.z)}this.setAttribute("position",new Re(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let h=n[r],p=n[r+1]-h,g=(o-h)/p;return(r+g)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new gt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,r=[],s=[],o=[],a=new D,l=new Wt;for(let g=0;g<=t;g++){let x=g/t;r[g]=this.getTangentAt(x,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=t;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(he(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,x))}o[g].crossVectors(r[g],s[g])}if(e===!0){let g=Math.acos(he(s[0].dot(s[t]),-1,1));g/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(g=-g);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],g*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},bo=class extends ai{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,g=c-this.aY;l=p*h-g*d+this.aX,c=p*d+g*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},nu=class extends bo{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Cd(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let p=(o-s)/c-(a-s)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+d)+(l-a)/d;p*=h,g*=h,r(o,a,p,g)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var qm=new D,Ym=new D,Yf=new Cd,Zf=new Cd,$f=new Cd,iu=class extends ai{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Ym.subVectors(r[0],r[1]).add(r[0]),c=Ym);let d=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(qm.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=qm),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),g),b=Math.pow(d.distanceToSquared(p),g),_=Math.pow(p.distanceToSquared(h),g);b<1e-4&&(b=1),x<1e-4&&(x=b),_<1e-4&&(_=b),Yf.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,x,b,_),Zf.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,x,b,_),$f.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,x,b,_)}else this.curveType==="catmullrom"&&(Yf.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),Zf.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),$f.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return n.set(Yf.calc(l),Zf.calc(l),$f.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zm(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function xv(i,t){let e=1-i;return e*e*t}function _v(i,t){return 2*(1-i)*i*t}function vv(i,t){return i*i*t}function Ca(i,t,e,n){return xv(i,t)+_v(i,e)+vv(i,n)}function yv(i,t){let e=1-i;return e*e*e*t}function Mv(i,t){let e=1-i;return 3*e*e*i*t}function Sv(i,t){return 3*(1-i)*i*i*t}function bv(i,t){return i*i*i*t}function Pa(i,t,e,n,r){return yv(i,t)+Mv(i,e)+Sv(i,n)+bv(i,r)}var Za=class extends ai{constructor(t=new gt,e=new gt,n=new gt,r=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new gt){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Pa(t,r.x,s.x,o.x,a.x),Pa(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ru=class extends ai{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Pa(t,r.x,s.x,o.x,a.x),Pa(t,r.y,s.y,o.y,a.y),Pa(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$a=class extends ai{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},su=class extends ai{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends ai{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Ca(t,r.x,s.x,o.x),Ca(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ou=class extends ai{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Ca(t,r.x,s.x,o.x),Ca(t,r.y,s.y,o.y),Ca(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Zm(a,l.x,c.x,h.x,d.x),Zm(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new gt().fromArray(r))}return this}},id=Object.freeze({__proto__:null,ArcCurve:nu,CatmullRomCurve3:iu,CubicBezierCurve:Za,CubicBezierCurve3:ru,EllipseCurve:bo,LineCurve:$a,LineCurve3:su,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:ou,SplineCurve:Ka}),au=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new id[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new id[r.type]().fromJSON(r))}return this}},ja=class extends au{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new $a(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new Ja(this.currentPoint.clone(),new gt(t,e),new gt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new Za(this.currentPoint.clone(),new gt(t,e),new gt(n,r),new gt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ka(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){let c=new bo(t,e,n,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Fr=class extends ja{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new ja().fromJSON(r))}return this}};function wv(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Gg(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Cv(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let p=e;p<r;p+=e){let g=i[p],x=i[p+1];g<a&&(a=g),x<l&&(l=x),g>h&&(h=g),x>d&&(d=x)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Qa(s,o,e,a,l,c,0),o}function Gg(i,t,e,n,r){let s;if(r===Vv(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=$m(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=$m(o/n|0,i[o],i[o+1],s);return s&&wo(s,s.next)&&(el(s),s=s.next),s}function ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wo(e,e.next)||sn(e.prev,e,e.next)===0)){if(el(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qa(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Nv(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Tv(i,n,r,s):Ev(i)){t.push(l.i,i.i,c.i),el(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Av(ds(i),t),Qa(i,t,e,n,r,s,2)):o===2&&Rv(i,t,e,n,r,s):Qa(ds(i),t,e,n,r,s,1);break}}}function Ev(i){let t=i.prev,e=i,n=i.next;if(sn(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),d=Math.min(a,l,c),p=Math.max(r,s,o),g=Math.max(a,l,c),x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=p&&x.y>=d&&x.y<=g&&Aa(r,a,s,l,o,c,x.x,x.y)&&sn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Tv(i,t,e,n){let r=i.prev,s=i,o=i.next;if(sn(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,d=s.y,p=o.y,g=Math.min(a,l,c),x=Math.min(h,d,p),b=Math.max(a,l,c),_=Math.max(h,d,p),y=rd(g,x,t,e,n),w=rd(b,_,t,e,n),m=i.prevZ,u=i.nextZ;for(;m&&m.z>=y&&u&&u.z<=w;){if(m.x>=g&&m.x<=b&&m.y>=x&&m.y<=_&&m!==r&&m!==o&&Aa(a,h,l,d,c,p,m.x,m.y)&&sn(m.prev,m,m.next)>=0||(m=m.prevZ,u.x>=g&&u.x<=b&&u.y>=x&&u.y<=_&&u!==r&&u!==o&&Aa(a,h,l,d,c,p,u.x,u.y)&&sn(u.prev,u,u.next)>=0))return!1;u=u.nextZ}for(;m&&m.z>=y;){if(m.x>=g&&m.x<=b&&m.y>=x&&m.y<=_&&m!==r&&m!==o&&Aa(a,h,l,d,c,p,m.x,m.y)&&sn(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;u&&u.z<=w;){if(u.x>=g&&u.x<=b&&u.y>=x&&u.y<=_&&u!==r&&u!==o&&Aa(a,h,l,d,c,p,u.x,u.y)&&sn(u.prev,u,u.next)>=0)return!1;u=u.nextZ}return!0}function Av(i,t){let e=i;do{let n=e.prev,r=e.next.next;!wo(n,r)&&Xg(n,e,e.next,r)&&tl(n,r)&&tl(r,n)&&(t.push(n.i,e.i,r.i),el(e),el(e.next),e=i=r),e=e.next}while(e!==i);return ds(e)}function Rv(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Bv(o,a)){let l=qg(o,a);o=ds(o,o.next),l=ds(l,l.next),Qa(o,t,e,n,r,s,0),Qa(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Cv(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Gg(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Fv(c))}r.sort(Pv);for(let s=0;s<r.length;s++)e=Iv(r[s],e);return e}function Pv(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Iv(i,t){let e=Dv(i,t);if(!e)return t;let n=qg(e,i);return ds(n,n.next),ds(e,e.next)}function Dv(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(wo(i,e))return e;do{if(wo(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Wg(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let d=Math.abs(r-e.y)/(n-e.x);tl(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Lv(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Lv(i,t){return sn(i.prev,i,t.prev)<0&&sn(t.next,i,i.next)<0}function Nv(i,t,e,n){let r=i;do r.z===0&&(r.z=rd(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Uv(r)}function Uv(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function rd(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wg(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Aa(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Wg(i,t,e,n,r,s,o,a)}function Bv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ov(i,t)&&(tl(i,t)&&tl(t,i)&&zv(i,t)&&(sn(i.prev,i,t.prev)||sn(i,t.prev,t))||wo(i,t)&&sn(i.prev,i,i.next)>0&&sn(t.prev,t,t.next)>0)}function sn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wo(i,t){return i.x===t.x&&i.y===t.y}function Xg(i,t,e,n){let r=Bc(sn(i,t,e)),s=Bc(sn(i,t,n)),o=Bc(sn(e,n,i)),a=Bc(sn(e,n,t));return!!(r!==s&&o!==a||r===0&&Fc(i,e,t)||s===0&&Fc(i,n,t)||o===0&&Fc(e,i,n)||a===0&&Fc(e,t,n))}function Fc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Bc(i){return i>0?1:i<0?-1:0}function Ov(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xg(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function tl(i,t){return sn(i.prev,i,i.next)<0?sn(i,t,i.next)>=0&&sn(i,i.prev,t)>=0:sn(i,t,i.prev)<0||sn(i,i.next,t)<0}function zv(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qg(i,t){let e=sd(i.i,i.x,i.y),n=sd(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function $m(i,t,e,n){let r=sd(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function el(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sd(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vv(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var od=class{static triangulate(t,e,n=2){return wv(t,e,n)}},mi=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Jm(t),Km(n,t);let o=t.length;e.forEach(Jm);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Km(n,e[l]);let a=od.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Jm(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Km(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ps=class i extends De{constructor(t=new Fr([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Re(r,3)),this.setAttribute("uv",new Re(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:g-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3,y=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:kv,m,u=!1,v,f,C,M;if(y){m=y.getSpacedPoints(h),u=!0,p=!1;let Q=y.isCatmullRomCurve3?y.closed:!1;v=y.computeFrenetFrames(h,Q),f=new D,C=new D,M=new D}p||(_=0,g=0,x=0,b=0);let S=a.extractPoints(c),E=S.shape,T=S.holes;if(!mi.isClockWise(E)){E=E.reverse();for(let Q=0,nt=T.length;Q<nt;Q++){let ft=T[Q];mi.isClockWise(ft)&&(T[Q]=ft.reverse())}}function R(Q){let ft=10000000000000001e-36,ct=Q[0];for(let Tt=1;Tt<=Q.length;Tt++){let Ct=Tt%Q.length,Rt=Q[Ct],Ut=Rt.x-ct.x,zt=Rt.y-ct.y,k=Ut*Ut+zt*zt,fe=Math.max(Math.abs(Rt.x),Math.abs(Rt.y),Math.abs(ct.x),Math.abs(ct.y)),Yt=ft*fe*fe;if(k<=Yt){Q.splice(Ct,1),Tt--;continue}ct=Rt}}R(E),T.forEach(R);let U=T.length,F=E;for(let Q=0;Q<U;Q++){let nt=T[Q];E=E.concat(nt)}function z(Q,nt,ft){return nt||se("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(nt,ft)}let V=E.length;function Z(Q,nt,ft){let ct,Tt,Ct,Rt=Q.x-nt.x,Ut=Q.y-nt.y,zt=ft.x-Q.x,k=ft.y-Q.y,fe=Rt*Rt+Ut*Ut,Yt=Rt*k-Ut*zt;if(Math.abs(Yt)>Number.EPSILON){let B=Math.sqrt(fe),P=Math.sqrt(zt*zt+k*k),X=nt.x-Ut/B,K=nt.y+Rt/B,st=ft.x-k/P,wt=ft.y+zt/P,At=((st-X)*k-(wt-K)*zt)/(Rt*k-Ut*zt);ct=X+Rt*At-Q.x,Tt=K+Ut*At-Q.y;let ht=ct*ct+Tt*Tt;if(ht<=2)return new gt(ct,Tt);Ct=Math.sqrt(ht/2)}else{let B=!1;Rt>Number.EPSILON?zt>Number.EPSILON&&(B=!0):Rt<-Number.EPSILON?zt<-Number.EPSILON&&(B=!0):Math.sign(Ut)===Math.sign(k)&&(B=!0),B?(ct=-Ut,Tt=Rt,Ct=Math.sqrt(fe)):(ct=Rt,Tt=Ut,Ct=Math.sqrt(fe/2))}return new gt(ct/Ct,Tt/Ct)}let H=[];for(let Q=0,nt=F.length,ft=nt-1,ct=Q+1;Q<nt;Q++,ft++,ct++)ft===nt&&(ft=0),ct===nt&&(ct=0),H[Q]=Z(F[Q],F[ft],F[ct]);let tt=[],q,ut=H.concat();for(let Q=0,nt=U;Q<nt;Q++){let ft=T[Q];q=[];for(let ct=0,Tt=ft.length,Ct=Tt-1,Rt=ct+1;ct<Tt;ct++,Ct++,Rt++)Ct===Tt&&(Ct=0),Rt===Tt&&(Rt=0),q[ct]=Z(ft[ct],ft[Ct],ft[Rt]);tt.push(q),ut=ut.concat(q)}let dt;if(_===0)dt=mi.triangulateShape(F,T);else{let Q=[],nt=[];for(let ft=0;ft<_;ft++){let ct=ft/_,Tt=g*Math.cos(ct*Math.PI/2),Ct=x*Math.sin(ct*Math.PI/2)+b;for(let Rt=0,Ut=F.length;Rt<Ut;Rt++){let zt=z(F[Rt],H[Rt],Ct);lt(zt.x,zt.y,-Tt),ct===0&&Q.push(zt)}for(let Rt=0,Ut=U;Rt<Ut;Rt++){let zt=T[Rt];q=tt[Rt];let k=[];for(let fe=0,Yt=zt.length;fe<Yt;fe++){let B=z(zt[fe],q[fe],Ct);lt(B.x,B.y,-Tt),ct===0&&k.push(B)}ct===0&&nt.push(k)}}dt=mi.triangulateShape(Q,nt)}let Et=dt.length,St=x+b;for(let Q=0;Q<V;Q++){let nt=p?z(E[Q],ut[Q],St):E[Q];u?(C.copy(v.normals[0]).multiplyScalar(nt.x),f.copy(v.binormals[0]).multiplyScalar(nt.y),M.copy(m[0]).add(C).add(f),lt(M.x,M.y,M.z)):lt(nt.x,nt.y,0)}for(let Q=1;Q<=h;Q++)for(let nt=0;nt<V;nt++){let ft=p?z(E[nt],ut[nt],St):E[nt];u?(C.copy(v.normals[Q]).multiplyScalar(ft.x),f.copy(v.binormals[Q]).multiplyScalar(ft.y),M.copy(m[Q]).add(C).add(f),lt(M.x,M.y,M.z)):lt(ft.x,ft.y,d/h*Q)}for(let Q=_-1;Q>=0;Q--){let nt=Q/_,ft=g*Math.cos(nt*Math.PI/2),ct=x*Math.sin(nt*Math.PI/2)+b;for(let Tt=0,Ct=F.length;Tt<Ct;Tt++){let Rt=z(F[Tt],H[Tt],ct);lt(Rt.x,Rt.y,d+ft)}for(let Tt=0,Ct=T.length;Tt<Ct;Tt++){let Rt=T[Tt];q=tt[Tt];for(let Ut=0,zt=Rt.length;Ut<zt;Ut++){let k=z(Rt[Ut],q[Ut],ct);u?lt(k.x,k.y+m[h-1].y,m[h-1].x+ft):lt(k.x,k.y,d+ft)}}}Vt(),J();function Vt(){let Q=r.length/3;if(p){let nt=0,ft=V*nt;for(let ct=0;ct<Et;ct++){let Tt=dt[ct];Mt(Tt[2]+ft,Tt[1]+ft,Tt[0]+ft)}nt=h+_*2,ft=V*nt;for(let ct=0;ct<Et;ct++){let Tt=dt[ct];Mt(Tt[0]+ft,Tt[1]+ft,Tt[2]+ft)}}else{for(let nt=0;nt<Et;nt++){let ft=dt[nt];Mt(ft[2],ft[1],ft[0])}for(let nt=0;nt<Et;nt++){let ft=dt[nt];Mt(ft[0]+V*h,ft[1]+V*h,ft[2]+V*h)}}n.addGroup(Q,r.length/3-Q,0)}function J(){let Q=r.length/3,nt=0;N(F,nt),nt+=F.length;for(let ft=0,ct=T.length;ft<ct;ft++){let Tt=T[ft];N(Tt,nt),nt+=Tt.length}n.addGroup(Q,r.length/3-Q,1)}function N(Q,nt){let ft=Q.length;for(;--ft>=0;){let ct=ft,Tt=ft-1;Tt<0&&(Tt=Q.length-1);for(let Ct=0,Rt=h+_*2;Ct<Rt;Ct++){let Ut=V*Ct,zt=V*(Ct+1),k=nt+ct+Ut,fe=nt+Tt+Ut,Yt=nt+Tt+zt,B=nt+ct+zt;xt(k,fe,Yt,B)}}}function lt(Q,nt,ft){l.push(Q),l.push(nt),l.push(ft)}function Mt(Q,nt,ft){bt(Q),bt(nt),bt(ft);let ct=r.length/3,Tt=w.generateTopUV(n,r,ct-3,ct-2,ct-1);pt(Tt[0]),pt(Tt[1]),pt(Tt[2])}function xt(Q,nt,ft,ct){bt(Q),bt(nt),bt(ct),bt(nt),bt(ft),bt(ct);let Tt=r.length/3,Ct=w.generateSideWallUV(n,r,Tt-6,Tt-3,Tt-2,Tt-1);pt(Ct[0]),pt(Ct[1]),pt(Ct[3]),pt(Ct[1]),pt(Ct[2]),pt(Ct[3])}function bt(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function pt(Q){s.push(Q.x),s.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hv(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new id[r.type]().fromJSON(r)),new i(n,t.options)}},kv={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new gt(s,o),new gt(a,l),new gt(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],p=t[r*3],g=t[r*3+1],x=t[r*3+2],b=t[s*3],_=t[s*3+1],y=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new gt(o,1-l),new gt(c,1-d),new gt(p,1-x),new gt(b,1-y)]:[new gt(a,1-l),new gt(h,1-d),new gt(g,1-x),new gt(_,1-y)]}};function Hv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var yi=class i extends De{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=t/a,p=e/l,g=[],x=[],b=[],_=[];for(let y=0;y<h;y++){let w=y*p-o;for(let m=0;m<c;m++){let u=m*d-s;x.push(u,-w,0),b.push(0,0,1),_.push(m/a),_.push(1-y/l)}}for(let y=0;y<l;y++)for(let w=0;w<a;w++){let m=w+c*y,u=w+c*(y+1),v=w+1+c*(y+1),f=w+1+c*y;g.push(m,u,f),g.push(u,v,f)}this.setIndex(g),this.setAttribute("position",new Re(x,3)),this.setAttribute("normal",new Re(b,3)),this.setAttribute("uv",new Re(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var nl=class i extends De{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new D,p=new D,g=[],x=[],b=[],_=[];for(let y=0;y<=n;y++){let w=[],m=y/n,u=o+m*a,v=t*Math.cos(u),f=Math.sqrt(t*t-v*v),C=0;y===0&&o===0?C=.5/e:y===n&&l===Math.PI&&(C=-.5/e);for(let M=0;M<=e;M++){let S=M/e,E=r+S*s;d.x=-f*Math.cos(E),d.y=v,d.z=f*Math.sin(E),x.push(d.x,d.y,d.z),p.copy(d).normalize(),b.push(p.x,p.y,p.z),_.push(S+C,1-m),w.push(c++)}h.push(w)}for(let y=0;y<n;y++)for(let w=0;w<e;w++){let m=h[y][w+1],u=h[y][w],v=h[y+1][w],f=h[y+1][w+1];(y!==0||o>0)&&g.push(m,u,f),(y!==n-1||l<Math.PI)&&g.push(u,v,f)}this.setIndex(g),this.setAttribute("position",new Re(x,3)),this.setAttribute("normal",new Re(b,3)),this.setAttribute("uv",new Re(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var il=class extends De{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,r=new D,s=new D;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],p=d.start,g=d.count;for(let x=p,b=p+g;x<b;x+=3)for(let _=0;_<3;_++){let y=a.getX(x+_),w=a.getX(x+(_+1)%3);r.fromBufferAttribute(o,y),s.fromBufferAttribute(o,w),jm(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,d),jm(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new Re(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function jm(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}var Eo=class extends _i{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ee(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function xs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Qm(r))r.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Qm(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function Bn(i){let t={};for(let e=0;e<i.length;e++){let n=xs(i[e]);for(let r in n)t[r]=n[r]}return t}function Qm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}var Wn={clone:xs,merge:Bn},Wv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wv,this.fragmentShader=Xv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Gv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(r.value);break;case"v2":this.uniforms[n].value=new gt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new we().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ce().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Wt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},To=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mi=class extends _i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_r=class extends Mi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var rl=class extends _i{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},sl=class extends _i{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=wu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},lu=class extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cu=class extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function so(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jf(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Br=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},uu=class extends Br{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:td,endingEnd:td}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ed:s=t,a=2*e-n;break;case nd:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ed:o=t,l=2*n-e;break;case nd:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,g=this._weightNext,x=(n-e)/(r-e),b=x*x,_=b*x,y=-p*_+2*p*b-p*x,w=(1+p)*_+(-1.5-2*p)*b+(-.5+p)*x+1,m=(-1-g)*_+(1.5+g)*b+.5*x,u=g*_-g*b;for(let v=0;v!==a;++v)s[v]=y*o[h+v]+w*o[c+v]+m*o[l+v]+u*o[d+v];return s}},hu=class extends Br{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),d=1-h;for(let p=0;p!==a;++p)s[p]=o[c+p]*d+o[l+p]*h;return s}},fu=class extends Br{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},du=class extends Br{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let x=(n-e)/(r-e),b=1-x;for(let _=0;_!==a;++_)s[_]=o[c+_]*b+o[l+_]*x;return s}let p=a*2,g=t-1;for(let x=0;x!==a;++x){let b=o[c+x],_=o[l+x],y=g*p+x*2,w=d[y],m=d[y+1],u=t*p+x*2,v=h[u],f=h[u+1],C=Yv(n,e,w,v,r);s[x]=Yg(C,b,m,f,_)}return s}};function Yg(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function qv(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function Yv(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=Yg(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=qv(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var li=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=so(e,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:so(t.times,Array),values:so(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Jf(t.settings)&&(n.settings={inTangents:so(t.settings.inTangents,Array),outTangents:so(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new du(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ia:e=this.InterpolantFactoryMethodDiscrete;break;case Kc:e=this.InterpolantFactoryMethodLinear;break;case kc:e=this.InterpolantFactoryMethodSmooth;break;case Qf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return Kc;case this.InterpolantFactoryMethodSmooth:return kc;case this.InterpolantFactoryMethodBezier:return Qf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Jf(this.settings)&&(tg(this.settings.inTangents,t),tg(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){se("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){se("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&U_(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){se("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===kc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let d=a*n,p=d-n,g=d+n;for(let x=0;x!==n;++x){let b=e[d+x];if(b!==e[p+x]||b!==e[g+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,p=o*n;for(let g=0;g!==n;++g)e[p+g]=e[d+g]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Jf(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function tg(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Kc;var Or=class extends li{constructor(t,e,n){super(t,e,n)}};Or.prototype.ValueTypeName="bool";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=Ia;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;var pu=class extends li{constructor(t,e,n,r){super(t,e,n,r)}};pu.prototype.ValueTypeName="color";var mu=class extends li{constructor(t,e,n,r){super(t,e,n,r)}};mu.prototype.ValueTypeName="number";var gu=class extends Br{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)Fn.slerpFlat(s,0,o,c-a,o,c,l);return s}},ol=class extends li{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new gu(this.times,this.values,this.getValueSize(),t)}};ol.prototype.ValueTypeName="quaternion";ol.prototype.InterpolantFactoryMethodSmooth=void 0;var zr=class extends li{constructor(t,e,n){super(t,e,n)}};zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=Ia;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;var xu=class extends li{constructor(t,e,n,r){super(t,e,n,r)}};xu.prototype.ValueTypeName="vector";var _u=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=c.length;d<p;d+=2){let g=c[d],x=c[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zg=new _u,vu=class{constructor(t){this.manager=t!==void 0?t:Zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};vu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ao=class extends yn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ro=class extends Ao{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Kf=new Wt,eg=new D,ng=new D,al=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mo,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;eg.setFromMatrixPosition(t.matrixWorld),e.position.copy(eg),ng.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ng),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,r){Kf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Kf,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;t.coordinateSystem===po||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Kf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oc=new D,zc=new Fn,qi=new D,ll=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oc,zc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,zc,qi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Oc,zc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,zc,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Lr=new D,ig=new gt,rg=new gt,En=class extends ll{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return go*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Lr.x,Lr.y).multiplyScalar(-t/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Lr.x,Lr.y).multiplyScalar(-t/Lr.z)}getViewSize(t,e){return this.getViewBounds(t,ig,rg),e.subVectors(rg,ig)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(uo*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ad=class extends al{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0}},cl=class extends Ao{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ad}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Vr=class extends ll{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ld=class extends al{constructor(){super(new Vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kr=class extends Ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new ld}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ul=class extends De{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var oo=-90,ao=1,yu=class extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new En(oo,ao,t,e);r.layers=this.layers,this.add(r);let s=new En(oo,ao,t,e);s.layers=this.layers,this.add(s);let o=new En(oo,ao,t,e);o.layers=this.layers,this.add(o);let a=new En(oo,ao,t,e);a.layers=this.layers,this.add(a);let l=new En(oo,ao,t,e);l.layers=this.layers,this.add(l);let c=new En(oo,ao,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,p,g),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Mu=class extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},hl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Zv.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Zv(){this._document.hidden===!1&&this.reset()}var Id="\\[\\]\\.:\\/",$v=new RegExp("["+Id+"]","g"),Dd="[^"+Id+"]",Jv="[^"+Id.replace("\\.","")+"]",Kv=/((?:WC+[\/:])*)/.source.replace("WC",Dd),jv=/(WCOD+)?/.source.replace("WCOD",Jv),Qv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dd),ty=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dd),ey=new RegExp("^"+Kv+jv+Qv+ty+"$"),ny=["material","materials","bones","map"],cd=class{constructor(t,e,n){let r=n||tn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},tn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($v,"")}static parseTrackName(t){let e=ey.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);ny.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;se("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tn.Composite=cd;tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tn.prototype.GetterByBindingType=[tn.prototype._getValue_direct,tn.prototype._getValue_array,tn.prototype._getValue_arrayElement,tn.prototype._getValue_toArray];tn.prototype.SetterByBindingTypeAndVersioning=[[tn.prototype._setValue_direct,tn.prototype._setValue_direct_setNeedsUpdate,tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_array,tn.prototype._setValue_array_setNeedsUpdate,tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_arrayElement,tn.prototype._setValue_arrayElement_setNeedsUpdate,tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_fromArray,tn.prototype._setValue_fromArray_setNeedsUpdate,tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JE=new Float32Array(1);var Hr=class extends Va{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var sg=new Wt,fl=class{constructor(t,e,n=0,r=1/0){this.ray=new Fi(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new _o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sg),this}intersectObject(t,e=!0,n=[]){return ud(t,this,n,e),n.sort(og),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)ud(t[r],this,n,e);return n.sort(og),n}};function og(i,t){return i.distance-t.distance}function ud(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)ud(s[o],t,e,!0)}}var Od=class Od{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Od.prototype.isMatrix2=!0;var hd=Od;var ag=new D,Vc=new D,lo=new D,co=new D,jf=new D,iy=new D,ry=new D,Ve=class{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ag.subVectors(t,this.start),Vc.subVectors(this.end,this.start);let n=Vc.dot(Vc);if(n===0)return 0;let s=Vc.dot(ag)/n;return e&&(s=he(s,0,1)),s}closestPointToPoint(t,e,n){let r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=iy,n=ry){let r=10000000000000001e-32,s,o,a=this.start,l=t.start,c=this.end,h=t.end;lo.subVectors(c,a),co.subVectors(h,l),jf.subVectors(a,l);let d=lo.dot(lo),p=co.dot(co),g=co.dot(jf);if(d<=r&&p<=r)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(d<=r)s=0,o=g/p,o=he(o,0,1);else{let x=lo.dot(jf);if(p<=r)o=0,s=he(-x/d,0,1);else{let b=lo.dot(co),_=d*p-b*b;_!==0?s=he((b*g-x*p)/_,0,1):s=0,o=(b*s+g)/p,o<0?(o=0,s=he(-x/d,0,1)):o>1&&(o=1,s=he((b-x)/d,0,1))}}return e.copy(a).addScaledVector(lo,s),n.copy(l).addScaledVector(co,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Ld(i,t,e,n){let r=sy(n);switch(e){case bd:return i*t;case Iu:return i*t/r.components*r.byteLength;case Du:return i*t/r.components*r.byteLength;case $r:return i*t*2/r.components*r.byteLength;case Lu:return i*t*2/r.components*r.byteLength;case wd:return i*t*3/r.components*r.byteLength;case Jn:return i*t*4/r.components*r.byteLength;case Nu:return i*t*4/r.components*r.byteLength;case bl:case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case El:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fu:case Ou:return Math.max(i,16)*Math.max(t,8)/4;case Uu:case Bu:return Math.max(i,8)*Math.max(t,8)/2;case zu:case Vu:case Hu:case Gu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ku:case Al:case Wu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $u:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ju:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ku:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ju:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case th:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case eh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ih:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sh:case oh:case ah:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lh:case ch:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Rl:case uh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sy(i){switch(i){case gn:case vd:return{byteLength:1,components:1};case Po:case yd:case Mn:return{byteLength:2,components:1};case Cu:case Pu:return{byteLength:2,components:4};case Oi:case Ru:case bi:return{byteLength:4,components:1};case Md:case Sd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function g0(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function oy(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((g,x)=>g.start-x.start);let p=0;for(let g=1;g<d.length;g++){let x=d[p],b=d[g];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++p,d[p]=b)}d.length=p+1;for(let g=0,x=d.length;g<x;g++){let b=d[g];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ly=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,py=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,my=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_y=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,My=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Py=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Iy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Qy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,tM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,uM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,PM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,aS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_S=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:ay,alphahash_pars_fragment:ly,alphamap_fragment:cy,alphamap_pars_fragment:uy,alphatest_fragment:hy,alphatest_pars_fragment:fy,aomap_fragment:dy,aomap_pars_fragment:py,batching_pars_vertex:my,batching_vertex:gy,begin_vertex:xy,beginnormal_vertex:_y,bsdfs:vy,iridescence_fragment:yy,bumpmap_pars_fragment:My,clipping_planes_fragment:Sy,clipping_planes_pars_fragment:by,clipping_planes_pars_vertex:wy,clipping_planes_vertex:Ey,color_fragment:Ty,color_pars_fragment:Ay,color_pars_vertex:Ry,color_vertex:Cy,common:Py,cube_uv_reflection_fragment:Iy,defaultnormal_vertex:Dy,displacementmap_pars_vertex:Ly,displacementmap_vertex:Ny,emissivemap_fragment:Uy,emissivemap_pars_fragment:Fy,colorspace_fragment:By,colorspace_pars_fragment:Oy,envmap_fragment:zy,envmap_common_pars_fragment:Vy,envmap_pars_fragment:ky,envmap_pars_vertex:Hy,envmap_physical_pars_fragment:Qy,envmap_vertex:Gy,fog_vertex:Wy,fog_pars_vertex:Xy,fog_fragment:qy,fog_pars_fragment:Yy,gradientmap_pars_fragment:Zy,lightmap_pars_fragment:$y,lights_lambert_fragment:Jy,lights_lambert_pars_fragment:Ky,lights_pars_begin:jy,lights_toon_fragment:tM,lights_toon_pars_fragment:eM,lights_phong_fragment:nM,lights_phong_pars_fragment:iM,lights_physical_fragment:rM,lights_physical_pars_fragment:sM,lights_fragment_begin:oM,lights_fragment_maps:aM,lights_fragment_end:lM,lightprobes_pars_fragment:cM,logdepthbuf_fragment:uM,logdepthbuf_pars_fragment:hM,logdepthbuf_pars_vertex:fM,logdepthbuf_vertex:dM,map_fragment:pM,map_pars_fragment:mM,map_particle_fragment:gM,map_particle_pars_fragment:xM,metalnessmap_fragment:_M,metalnessmap_pars_fragment:vM,morphinstance_vertex:yM,morphcolor_vertex:MM,morphnormal_vertex:SM,morphtarget_pars_vertex:bM,morphtarget_vertex:wM,normal_fragment_begin:EM,normal_fragment_maps:TM,normal_pars_fragment:AM,normal_pars_vertex:RM,normal_vertex:CM,normalmap_pars_fragment:PM,clearcoat_normal_fragment_begin:IM,clearcoat_normal_fragment_maps:DM,clearcoat_pars_fragment:LM,iridescence_pars_fragment:NM,opaque_fragment:UM,packing:FM,premultiplied_alpha_fragment:BM,project_vertex:OM,dithering_fragment:zM,dithering_pars_fragment:VM,roughnessmap_fragment:kM,roughnessmap_pars_fragment:HM,shadowmap_pars_fragment:GM,shadowmap_pars_vertex:WM,shadowmap_vertex:XM,shadowmask_pars_fragment:qM,skinbase_vertex:YM,skinning_pars_vertex:ZM,skinning_vertex:$M,skinnormal_vertex:JM,specularmap_fragment:KM,specularmap_pars_fragment:jM,tonemapping_fragment:QM,tonemapping_pars_fragment:tS,transmission_fragment:eS,transmission_pars_fragment:nS,uv_pars_fragment:iS,uv_pars_vertex:rS,uv_vertex:sS,worldpos_vertex:oS,background_vert:aS,background_frag:lS,backgroundCube_vert:cS,backgroundCube_frag:uS,cube_vert:hS,cube_frag:fS,depth_vert:dS,depth_frag:pS,distance_vert:mS,distance_frag:gS,equirect_vert:xS,equirect_frag:_S,linedashed_vert:vS,linedashed_frag:yS,meshbasic_vert:MS,meshbasic_frag:SS,meshlambert_vert:bS,meshlambert_frag:wS,meshmatcap_vert:ES,meshmatcap_frag:TS,meshnormal_vert:AS,meshnormal_frag:RS,meshphong_vert:CS,meshphong_frag:PS,meshphysical_vert:IS,meshphysical_frag:DS,meshtoon_vert:LS,meshtoon_frag:NS,points_vert:US,points_frag:FS,shadow_vert:BS,shadow_frag:OS,sprite_vert:zS,sprite_frag:VS},Nt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Xn={basic:{uniforms:Bn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Bn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Bn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Bn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Bn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ee(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Bn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Bn([Nt.points,Nt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Bn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Bn([Nt.common,Nt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Bn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Bn([Nt.sprite,Nt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Bn([Nt.common,Nt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Bn([Nt.lights,Nt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Xn.physical={uniforms:Bn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var dh={r:0,b:0,g:0},kS=new Wt,x0=new ce;x0.set(-1,0,0,0,1,0,0,0,1);function HS(i,t,e,n,r,s){let o=new ee(0),a=r===!0?0:1,l,c,h=null,d=0,p=null;function g(w){let m=w.isScene===!0?w.background:null;if(m&&m.isTexture){let u=w.backgroundBlurriness>0;m=t.get(m,u)}return m}function x(w){let m=!1,u=g(w);u===null?_(o,a):u&&u.isColor&&(_(u,1),m=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||m)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(w,m){let u=g(m);u&&(u.isCubeTexture||u.mapping===Ml)?(c===void 0&&(c=new ae(new Nr(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:xs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,f,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=u,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kS.makeRotationFromEuler(m.backgroundRotation)).transpose(),u.isCubeTexture&&u.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(x0),c.material.toneMapped=Se.getTransfer(u.colorSpace)!==Ie,(h!==u||d!==u.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=u,d=u.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):u&&u.isTexture&&(l===void 0&&(l=new ae(new yi(2,2),new ze({name:"BackgroundMaterial",uniforms:xs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=u,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Se.getTransfer(u.colorSpace)!==Ie,u.matrixAutoUpdate===!0&&u.updateMatrix(),l.material.uniforms.uvTransform.value.copy(u.matrix),(h!==u||d!==u.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=u,d=u.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function _(w,m){w.getRGB(dh,Pd(i)),e.buffers.color.setClear(dh.r,dh.g,dh.b,m,s)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,m=1){o.set(w),a=m,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,_(o,a)},render:x,addToRenderList:b,dispose:y}}function GS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null),s=r,o=!1;function a(T,A,R,U,F){let z=!1,V=d(T,U,R,A);s!==V&&(s=V,c(s.object)),z=g(T,U,R,F),z&&x(T,U,R,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,u(T,A,R,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function d(T,A,R,U){let F=U.wireframe===!0,z=n[A.id];z===void 0&&(z={},n[A.id]=z);let V=T.isInstancedMesh===!0?T.id:0,Z=z[V];Z===void 0&&(Z={},z[V]=Z);let H=Z[R.id];H===void 0&&(H={},Z[R.id]=H);let tt=H[F];return tt===void 0&&(tt=p(l()),H[F]=tt),tt}function p(T){let A=[],R=[],U=[];for(let F=0;F<e;F++)A[F]=0,R[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:R,attributeDivisors:U,object:T,attributes:{},index:null}}function g(T,A,R,U){let F=s.attributes,z=A.attributes,V=0,Z=R.getAttributes();for(let H in Z)if(Z[H].location>=0){let q=F[H],ut=z[H];if(ut===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(ut=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(ut=T.instanceColor)),q===void 0||q.attribute!==ut||ut&&q.data!==ut.data)return!0;V++}return s.attributesNum!==V||s.index!==U}function x(T,A,R,U){let F={},z=A.attributes,V=0,Z=R.getAttributes();for(let H in Z)if(Z[H].location>=0){let q=z[H];q===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(q=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(q=T.instanceColor));let ut={};ut.attribute=q,q&&q.data&&(ut.data=q.data),F[H]=ut,V++}s.attributes=F,s.attributesNum=V,s.index=U}function b(){let T=s.newAttributes;for(let A=0,R=T.length;A<R;A++)T[A]=0}function _(T){y(T,0)}function y(T,A){let R=s.newAttributes,U=s.enabledAttributes,F=s.attributeDivisors;R[T]=1,U[T]===0&&(i.enableVertexAttribArray(T),U[T]=1),F[T]!==A&&(i.vertexAttribDivisor(T,A),F[T]=A)}function w(){let T=s.newAttributes,A=s.enabledAttributes;for(let R=0,U=A.length;R<U;R++)A[R]!==T[R]&&(i.disableVertexAttribArray(R),A[R]=0)}function m(T,A,R,U,F,z,V){V===!0?i.vertexAttribIPointer(T,A,R,F,z):i.vertexAttribPointer(T,A,R,U,F,z)}function u(T,A,R,U){b();let F=U.attributes,z=R.getAttributes(),V=A.defaultAttributeValues;for(let Z in z){let H=z[Z];if(H.location>=0){let tt=F[Z];if(tt===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(tt=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(tt=T.instanceColor)),tt!==void 0){let q=tt.normalized,ut=tt.itemSize,dt=t.get(tt);if(dt===void 0)continue;let Et=dt.buffer,St=dt.type,Vt=dt.bytesPerElement,J=St===i.INT||St===i.UNSIGNED_INT||tt.gpuType===Ru;if(tt.isInterleavedBufferAttribute){let N=tt.data,lt=N.stride,Mt=tt.offset;if(N.isInstancedInterleavedBuffer){for(let xt=0;xt<H.locationSize;xt++)y(H.location+xt,N.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let xt=0;xt<H.locationSize;xt++)_(H.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let xt=0;xt<H.locationSize;xt++)m(H.location+xt,ut/H.locationSize,St,q,lt*Vt,(Mt+ut/H.locationSize*xt)*Vt,J)}else{if(tt.isInstancedBufferAttribute){for(let N=0;N<H.locationSize;N++)y(H.location+N,tt.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let N=0;N<H.locationSize;N++)_(H.location+N);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let N=0;N<H.locationSize;N++)m(H.location+N,ut/H.locationSize,St,q,ut*Vt,ut/H.locationSize*N*Vt,J)}}else if(V!==void 0){let q=V[Z];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(H.location,q);break;case 3:i.vertexAttrib3fv(H.location,q);break;case 4:i.vertexAttrib4fv(H.location,q);break;default:i.vertexAttrib1fv(H.location,q)}}}}w()}function v(){S();for(let T in n){let A=n[T];for(let R in A){let U=A[R];for(let F in U){let z=U[F];for(let V in z)h(z[V].object),delete z[V];delete U[F]}}delete n[T]}}function f(T){if(n[T.id]===void 0)return;let A=n[T.id];for(let R in A){let U=A[R];for(let F in U){let z=U[F];for(let V in z)h(z[V].object),delete z[V];delete U[F]}}delete n[T.id]}function C(T){for(let A in n){let R=n[A];for(let U in R){let F=R[U];if(F[T.id]===void 0)continue;let z=F[T.id];for(let V in z)h(z[V].object),delete z[V];delete F[T.id]}}}function M(T){for(let A in n){let R=n[A],U=T.isInstancedMesh===!0?T.id:0,F=R[U];if(F!==void 0){for(let z in F){let V=F[z];for(let Z in V)h(V[Z].object),delete V[Z];delete F[z]}delete R[U],Object.keys(R).length===0&&delete n[A]}}}function S(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:E,dispose:v,releaseStatesOfGeometry:f,releaseStatesOfObject:M,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:_,disableUnusedAttributes:w}}function WS(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];e.update(p,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function XS(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Jn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let M=C===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==gn&&C!==bi&&!M&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&p===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),u=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),f=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:w,maxVaryings:m,maxFragmentUniforms:u,maxSamples:v,samples:f}}function qS(i){let t=this,e=null,n=0,r=!1,s=!1,o=new vn,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let g=d.length!==0||p||n!==0||r;return r=p,n=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,g){let x=d.clippingPlanes,b=d.clipIntersection,_=d.clipShadows,y=i.get(d);if(!r||x===null||x.length===0||s&&!_)s?h(null):c();else{let w=s?0:n,m=w*4,u=y.clippingState||null;l.value=u,u=h(x,p,m,g);for(let v=0;v!==m;++v)u[v]=e[v];y.clippingState=u,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,g,x){let b=d!==null?d.length:0,_=null;if(b!==0){if(_=l.value,x!==!0||_===null){let y=g+b*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(_===null||_.length<y)&&(_=new Float32Array(y));for(let m=0,u=g;m!==b;++m,u+=4)o.copy(d[m]).applyMatrix4(w,a),o.normal.toArray(_,u),_[u+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,_}}var Lo=4,YS=6,ZS=20,$S=256,Cl=new Vr,$g=new ee,zd=null,Vd=0,kd=0,Hd=!1,JS=new D,_s=new D,vs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=JS}=s;zd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zd,Vd,kd),this._renderer.xr.enabled=Hd,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qr||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zd=this._renderer.getRenderTarget(),Vd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Mn,format:Jn,colorSpace:Da,depthBuffer:!1},r=Jg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jg(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=KS(s)),this._blurMaterial=QS(s,t,e),this._ggxMaterial=jS(s,t,e)}return r}_compileMaterial(t){let e=new ae(new De,t);this._renderer.compile(e,Cl)}_sceneToCubeUV(t,e,n,r,s){let l=new En(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,g=d.toneMapping;d.getClearColor($g),d.toneMapping=Bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new Nr,new vi({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,_=b.material,y=!1,w=t.background;w?w.isColor&&(_.color.copy(w),t.background=null,y=!0):(_.color.copy($g),y=!0);for(let m=0;m<6;m++){let u=m%3;u===0?(l.up.set(0,c[m],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[m],s.y,s.z)):u===1?(l.up.set(0,0,c[m]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[m],s.z)):(l.up.set(0,c[m],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[m]));let v=this._cubeSize;Do(r,u*v,m>2?v:0,v,v),d.setRenderTarget(r),y&&d.render(b,l),d.render(t,l)}d.toneMapping=g,d.autoClear=p,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===qr||t.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kg());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Do(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Cl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),p=c*1.25,g=d*p,{_lodMax:x}=this,b=this._sizeLods[n],_=3*b*(n>x-Lo?n-x+Lo:0),y=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=x-e,Do(s,_,y,3*b,2*b),r.setRenderTarget(s),r.render(a,Cl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,Do(t,_,y,3*b,2*b),r.setRenderTarget(t),r.render(a,Cl)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],d=3*h*(r>this._lodMax-Lo?r-this._lodMax+Lo:0),p=4*(this._cubeSize-h);Do(e,d,p,3*h,2*h),o.setRenderTarget(e),o.render(l,Cl)}};function KS(i){let t=[],e=[],n=i,r=i-Lo+1+YS;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,p=6,g=3,x=new Float32Array(g*p*d),b=new Float32Array(g*p*d);for(let y=0;y<d;y++){let w=y%3*2/3-1,m=y>2?0:-1,u=[w,m,0,w+2/3,m,0,w+2/3,m+1,0,w,m,0,w+2/3,m+1,0,w,m+1,0];x.set(u,g*p*y);for(let v=0;v<p;v++){let f=h[v*2]*2-1,C=h[v*2+1]*2-1;y===0?_s.set(1,C,f):y===1?_s.set(-f,1,-C):y===2?_s.set(-f,C,1):y===3?_s.set(-1,C,-f):y===4?_s.set(-f,-1,C):_s.set(f,C,-1),_s.toArray(b,(y*p+v)*g)}}let _=new De;_.setAttribute("position",new Oe(x,g)),_.setAttribute("outputDirection",new Oe(b,g)),e.push(new ae(_,null)),n>Lo&&n--}return{lodMeshes:e,sizeLods:t}}function Jg(i,t,e){let n=new nn(i,t,e);return n.texture.mapping=Ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function jS(i,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$S,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function QS(i,t,e){return new ze({name:"SphericalGaussianBlur",defines:{SAMPLES:ZS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Kg(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function jg(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function xh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var mh=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Wa(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Nr(5,5,5),s=new ze({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:dn});s.uniforms.tEquirect.value=e;let o=new ae(r,s),a=e.minFilter;return e.minFilter===Yr&&(e.minFilter=Cn),new yu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function t1(i){let t=new WeakMap,e=new WeakMap,n=null;function r(p,g=!1){return p==null?null:g?o(p):s(p)}function s(p){if(p&&p.isTexture){let g=p.mapping;if(g===Eu||g===Tu)if(t.has(p)){let x=t.get(p).texture;return a(x,p.mapping)}else{let x=p.image;if(x&&x.height>0){let b=new mh(x.height);return b.fromEquirectangularTexture(i,p),t.set(p,b),p.addEventListener("dispose",c),a(b.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture){let g=p.mapping,x=g===Eu||g===Tu,b=g===qr||g===gs;if(x||b){let _=e.get(p),y=_!==void 0?_.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==y)return n===null&&(n=new vs(i)),_=x?n.fromEquirectangular(p,_):n.fromCubemap(p,_),_.texture.pmremVersion=p.pmremVersion,e.set(p,_),_.texture;if(_!==void 0)return _.texture;{let w=p.image;return x&&w&&w.height>0||b&&w&&l(w)?(n===null&&(n=new vs(i)),_=x?n.fromEquirectangular(p):n.fromCubemap(p),_.texture.pmremVersion=p.pmremVersion,e.set(p,_),p.addEventListener("dispose",h),_.texture):null}}}return p}function a(p,g){return g===Eu?p.mapping=qr:g===Tu&&(p.mapping=gs),p}function l(p){let g=0,x=6;for(let b=0;b<x;b++)p[b]!==void 0&&g++;return g===x}function c(p){let g=p.target;g.removeEventListener("dispose",c);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function h(p){let g=p.target;g.removeEventListener("dispose",h);let x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function e1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&fs("WebGLRenderer: "+n+" extension not supported."),r}}}function n1(i,t,e,n){let r={},s=new WeakMap;function o(d){let p=d.target;p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",o),delete r[p.id];let g=s.get(p);g&&(t.remove(g),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function l(d){let p=d.attributes;for(let g in p)t.update(p[g],i.ARRAY_BUFFER)}function c(d){let p=[],g=d.index,x=d.attributes.position,b=0;if(x===void 0)return;if(g!==null){let w=g.array;b=g.version;for(let m=0,u=w.length;m<u;m+=3){let v=w[m+0],f=w[m+1],C=w[m+2];p.push(v,f,f,C,C,v)}}else{let w=x.array;b=x.version;for(let m=0,u=w.length/3-1;m<u;m+=3){let v=m+0,f=m+1,C=m+2;p.push(v,f,f,C,C,v)}}let _=new(x.count>=65535?za:Oa)(p,1);_.version=b;let y=s.get(d);y&&t.remove(y),s.set(d,_)}function h(d){let p=s.get(d);if(p){let g=d.index;g!==null&&p.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function i1(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let b=0;for(let _=0;_<g;_++)b+=p[_];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function r1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function s1(i,t,e){let n=new WeakMap,r=new we;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==d){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();let g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],m=0;g===!0&&(m=1),x===!0&&(m=2),b===!0&&(m=3);let u=a.attributes.position.count*m,v=1;u>t.maxTextureSize&&(v=Math.ceil(u/t.maxTextureSize),u=t.maxTextureSize);let f=new Float32Array(u*v*4*d),C=new Fa(f,u,v,d);C.type=bi,C.needsUpdate=!0;let M=m*4;for(let E=0;E<d;E++){let T=_[E],A=y[E],R=w[E],U=u*v*4*E;for(let F=0;F<T.count;F++){let z=F*M;g===!0&&(r.fromBufferAttribute(T,F),f[U+z+0]=r.x,f[U+z+1]=r.y,f[U+z+2]=r.z,f[U+z+3]=0),x===!0&&(r.fromBufferAttribute(A,F),f[U+z+4]=r.x,f[U+z+5]=r.y,f[U+z+6]=r.z,f[U+z+7]=0),b===!0&&(r.fromBufferAttribute(R,F),f[U+z+8]=r.x,f[U+z+9]=r.y,f[U+z+10]=r.z,f[U+z+11]=R.itemSize===4?r.w:1)}}p={count:d,texture:C,size:new gt(u,v)},n.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let b=0;b<c.length;b++)g+=c[b];let x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function o1(i,t,e,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,d=c.geometry,p=t.get(c,d);if(s.get(p)!==h&&(t.update(p),s.set(p,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let g=c.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return p}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var a1={[ml]:"LINEAR_TONE_MAPPING",[gl]:"REINHARD_TONE_MAPPING",[xl]:"CINEON_TONE_MAPPING",[_l]:"ACES_FILMIC_TONE_MAPPING",[yl]:"AGX_TONE_MAPPING",[Xr]:"NEUTRAL_TONE_MAPPING",[vl]:"CUSTOM_TONE_MAPPING"};function l1(i,t,e,n,r,s){let o=new nn(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new De;c.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Re([0,2,0,0,2,0],2));let h=new To({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ae(c,h),p=new Vr(-1,1,1,-1,0,1),g=null,x=null,b=!1,_,y=null,w=[],m=!1;this.setSize=function(u,v){o.setSize(u,v),a!==null&&a.setSize(u,v),l!==null&&l.setSize(u,v);for(let f=0;f<w.length;f++){let C=w[f];C.setSize&&C.setSize(u,v)}},this.setEffects=function(u){w=u,m=w.length>0&&w[0].isRenderPass===!0;let v=o.width,f=o.height;w.length>0&&a===null&&(a=new nn(v,f,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new nn(v,f,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<w.length;C++){let M=w[C];M.setSize&&M.setSize(v,f)}},this.begin=function(u,v){if(b||u.toneMapping===Bi&&w.length===0)return!1;if(y=v,v!==null){let f=v.width,C=v.height;(o.width!==f||o.height!==C)&&this.setSize(f,C)}return m===!1&&u.setRenderTarget(o),_=u.toneMapping,u.toneMapping=Bi,!0},this.hasRenderPass=function(){return m},this.end=function(u,v){u.toneMapping=_,b=!0;let f=o,C=a;for(let M=0;M<w.length;M++){let S=w[M];S.enabled!==!1&&(S.render(u,C,f,v),S.needsSwap!==!1&&(f=C,C=C===a?l:a))}if(g!==u.outputColorSpace||x!==u.toneMapping){g=u.outputColorSpace,x=u.toneMapping,h.defines={},Se.getTransfer(g)===Ie&&(h.defines.SRGB_TRANSFER="");let M=a1[x];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=f.texture,u.setRenderTarget(y),u.render(d,p),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var _0=new Gn,Xd=new Ki(1,1),v0=new Fa,y0=new tu,M0=new Wa,Qg=[],t0=[],e0=new Float32Array(16),n0=new Float32Array(9),i0=new Float32Array(4);function Uo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Qg[r];if(s===void 0&&(s=new Float32Array(r),Qg[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Sn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function bn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _h(i,t){let e=t0[t];e===void 0&&(e=new Int32Array(t),t0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function c1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function u1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;i.uniform2fv(this.addr,t),bn(e,t)}}function h1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Sn(e,t))return;i.uniform3fv(this.addr,t),bn(e,t)}}function f1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;i.uniform4fv(this.addr,t),bn(e,t)}}function d1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Sn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),bn(e,t)}else{if(Sn(e,n))return;i0.set(n),i.uniformMatrix2fv(this.addr,!1,i0),bn(e,n)}}function p1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Sn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),bn(e,t)}else{if(Sn(e,n))return;n0.set(n),i.uniformMatrix3fv(this.addr,!1,n0),bn(e,n)}}function m1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Sn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),bn(e,t)}else{if(Sn(e,n))return;e0.set(n),i.uniformMatrix4fv(this.addr,!1,e0),bn(e,n)}}function g1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function x1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;i.uniform2iv(this.addr,t),bn(e,t)}}function _1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;i.uniform3iv(this.addr,t),bn(e,t)}}function v1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;i.uniform4iv(this.addr,t),bn(e,t)}}function y1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function M1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;i.uniform2uiv(this.addr,t),bn(e,t)}}function S1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;i.uniform3uiv(this.addr,t),bn(e,t)}}function b1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;i.uniform4uiv(this.addr,t),bn(e,t)}}function w1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Xd.compareFunction=e.isReversedDepthBuffer()?fh:hh,s=Xd):s=_0,e.setTexture2D(t||s,r)}function E1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||y0,r)}function T1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||M0,r)}function A1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||v0,r)}function R1(i){switch(i){case 5126:return c1;case 35664:return u1;case 35665:return h1;case 35666:return f1;case 35674:return d1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return x1;case 35668:case 35672:return _1;case 35669:case 35673:return v1;case 5125:return y1;case 36294:return M1;case 36295:return S1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return A1}}function C1(i,t){i.uniform1fv(this.addr,t)}function P1(i,t){let e=Uo(t,this.size,2);i.uniform2fv(this.addr,e)}function I1(i,t){let e=Uo(t,this.size,3);i.uniform3fv(this.addr,e)}function D1(i,t){let e=Uo(t,this.size,4);i.uniform4fv(this.addr,e)}function L1(i,t){let e=Uo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function N1(i,t){let e=Uo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function U1(i,t){let e=Uo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function F1(i,t){i.uniform1iv(this.addr,t)}function B1(i,t){i.uniform2iv(this.addr,t)}function O1(i,t){i.uniform3iv(this.addr,t)}function z1(i,t){i.uniform4iv(this.addr,t)}function V1(i,t){i.uniform1uiv(this.addr,t)}function k1(i,t){i.uniform2uiv(this.addr,t)}function H1(i,t){i.uniform3uiv(this.addr,t)}function G1(i,t){i.uniform4uiv(this.addr,t)}function W1(i,t,e){let n=this.cache,r=t.length,s=_h(e,r);Sn(n,s)||(i.uniform1iv(this.addr,s),bn(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Xd:o=_0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function X1(i,t,e){let n=this.cache,r=t.length,s=_h(e,r);Sn(n,s)||(i.uniform1iv(this.addr,s),bn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||y0,s[o])}function q1(i,t,e){let n=this.cache,r=t.length,s=_h(e,r);Sn(n,s)||(i.uniform1iv(this.addr,s),bn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||M0,s[o])}function Y1(i,t,e){let n=this.cache,r=t.length,s=_h(e,r);Sn(n,s)||(i.uniform1iv(this.addr,s),bn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||v0,s[o])}function Z1(i){switch(i){case 5126:return C1;case 35664:return P1;case 35665:return I1;case 35666:return D1;case 35674:return L1;case 35675:return N1;case 35676:return U1;case 5124:case 35670:return F1;case 35667:case 35671:return B1;case 35668:case 35672:return O1;case 35669:case 35673:return z1;case 5125:return V1;case 36294:return k1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Y1}}var qd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=R1(e.type)}},Yd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z1(e.type)}},Zd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Gd=/(\w+)(\])?(\[|\.)?/g;function r0(i,t){i.seq.push(t),i.map[t.id]=t}function $1(i,t,e){let n=i.name,r=n.length;for(Gd.lastIndex=0;;){let s=Gd.exec(n),o=Gd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){r0(e,c===void 0?new qd(a,i,t):new Yd(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Zd(a),r0(e,d)),e=d}}}var No=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);$1(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function s0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var J1=37297,K1=0;function j1(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var o0=new ce;function Q1(i){Se._getMatrix(o0,Se.workingColorSpace,i);let t=`mat3( ${o0.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case La:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function a0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+j1(i.getShaderSource(t),a)}else return s}function tb(i,t){let e=Q1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var eb={[ml]:"Linear",[gl]:"Reinhard",[xl]:"Cineon",[_l]:"ACESFilmic",[yl]:"AgX",[Xr]:"Neutral",[vl]:"Custom"};function nb(i,t){let e=eb[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ph=new D;function ib(){Se.getLuminanceCoefficients(ph);let i=ph.x.toFixed(4),t=ph.y.toFixed(4),e=ph.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function sb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ob(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Il(i){return i!==""}function l0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function c0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(i){return i.replace(ab,cb)}var lb=new Map;function cb(i,t){let e=ve[t];if(e===void 0){let n=lb.get(t);if(n!==void 0)e=ve[n],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return $d(e)}var ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u0(i){return i.replace(ub,hb)}function hb(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function h0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var fb={[Gr]:"SHADOWMAP_TYPE_PCF",[Co]:"SHADOWMAP_TYPE_VSM"};function db(i){return fb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var pb={[qr]:"ENVMAP_TYPE_CUBE",[gs]:"ENVMAP_TYPE_CUBE",[Ml]:"ENVMAP_TYPE_CUBE_UV"};function mb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":pb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var gb={[gs]:"ENVMAP_MODE_REFRACTION"};function xb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":gb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _b={[wu]:"ENVMAP_BLENDING_MULTIPLY",[Eg]:"ENVMAP_BLENDING_MIX",[Tg]:"ENVMAP_BLENDING_ADD"};function vb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_b[i.combine]||"ENVMAP_BLENDING_NONE"}function yb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Mb(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=db(e),c=mb(e),h=xb(e),d=vb(e),p=yb(e),g=rb(e),x=sb(s),b=r.createProgram(),_,y,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Il).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Il).join(`
`),y.length>0&&(y+=`
`)):(_=[h0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),y=[h0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?ve.tonemapping_pars_fragment:"",e.toneMapping!==Bi?nb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,tb("linearToOutputTexel",e.outputColorSpace),ib(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Il).join(`
`)),o=$d(o),o=l0(o,e),o=c0(o,e),a=$d(a),a=l0(a,e),a=c0(a,e),o=u0(o),a=u0(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",e.glslVersion===Td?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let m=w+_+o,u=w+y+a,v=s0(r,r.VERTEX_SHADER,m),f=s0(r,r.FRAGMENT_SHADER,u);r.attachShader(b,v),r.attachShader(b,f),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function C(T){if(i.debug.checkShaderErrors){let A=r.getProgramInfoLog(b)||"",R=r.getShaderInfoLog(v)||"",U=r.getShaderInfoLog(f)||"",F=A.trim(),z=R.trim(),V=U.trim(),Z=!0,H=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,v,f);else{let tt=a0(r,v,"vertex"),q=a0(r,f,"fragment");se("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+tt+`
`+q)}else F!==""?oe("WebGLProgram: Program Info Log:",F):(z===""||V==="")&&(H=!1);H&&(T.diagnostics={runnable:Z,programLog:F,vertexShader:{log:z,prefix:_},fragmentShader:{log:V,prefix:y}})}r.deleteShader(v),r.deleteShader(f),M=new No(r,b),S=ob(r,b)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(b,J1)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=K1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=v,this.fragmentShader=f,this}var Sb=0,Jd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kd(t),e.set(t,n)),n}},Kd=class{constructor(t){this.id=Sb++,this.code=t,this.usedTimes=0}};function bb(i){return i===$r||i===Al||i===Rl}function wb(i,t,e,n,r,s){let o=new _o,a=new Jd,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,p=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function b(M,S,E,T,A,R){let U=T.fog,F=A.geometry,z=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?T.environment:null,V=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,Z=t.get(M.envMap||z,V),H=Z&&Z.mapping===Ml?Z.image.height:null,tt=g[M.type];M.precision!==null&&(p=n.getMaxPrecision(M.precision),p!==M.precision&&oe("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ut=q!==void 0?q.length:0,dt=0;F.morphAttributes.position!==void 0&&(dt=1),F.morphAttributes.normal!==void 0&&(dt=2),F.morphAttributes.color!==void 0&&(dt=3);let Et,St,Vt,J;if(tt){let xe=Xn[tt];Et=xe.vertexShader,St=xe.fragmentShader}else{Et=M.vertexShader,St=M.fragmentShader;let xe=a.getVertexShaderStage(M),be=a.getFragmentShaderStage(M);a.update(M,xe,be),Vt=xe.id,J=be.id}let N=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),Mt=A.isInstancedMesh===!0,xt=A.isBatchedMesh===!0,bt=!!M.map,pt=!!M.matcap,Q=!!Z,nt=!!M.aoMap,ft=!!M.lightMap,ct=!!M.bumpMap&&M.wireframe===!1,Tt=!!M.normalMap,Ct=!!M.displacementMap,Rt=!!M.emissiveMap,Ut=!!M.metalnessMap,zt=!!M.roughnessMap,k=M.anisotropy>0,fe=M.clearcoat>0,Yt=M.dispersion>0,B=M.retroreflectivity>0,P=M.iridescence>0,X=M.sheen>0,K=M.transmission>0,st=k&&!!M.anisotropyMap,wt=fe&&!!M.clearcoatMap,At=fe&&!!M.clearcoatNormalMap,ht=fe&&!!M.clearcoatRoughnessMap,mt=P&&!!M.iridescenceMap,Dt=P&&!!M.iridescenceThicknessMap,te=X&&!!M.sheenColorMap,Pt=X&&!!M.sheenRoughnessMap,It=!!M.specularMap,Zt=!!M.specularColorMap,ne=!!M.specularIntensityMap,re=K&&!!M.transmissionMap,$=K&&!!M.thicknessMap,Lt=!!M.gradientMap,at=!!M.alphaMap,Ft=M.alphaTest>0,Bt=!!M.alphaHash,yt=!!M.extensions,Xt=Bi;M.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Xt=i.toneMapping);let Qt={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:Et,fragmentShader:St,defines:M.defines,customVertexShaderID:Vt,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:xt,batchingColor:xt&&A._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&A.instanceColor!==null,instancingMorph:Mt&&A.morphTexture!==null,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Se.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:bt,matcap:pt,envMap:Q,envMapMode:Q&&Z.mapping,envMapCubeUVHeight:H,aoMap:nt,lightMap:ft,bumpMap:ct,normalMap:Tt,displacementMap:Ct,emissiveMap:Rt,normalMapObjectSpace:Tt&&M.normalMapType===Cg,normalMapTangentSpace:Tt&&M.normalMapType===Io,packedNormalMap:Tt&&M.normalMapType===Io&&bb(M.normalMap.format),metalnessMap:Ut,roughnessMap:zt,anisotropy:k,anisotropyMap:st,clearcoat:fe,clearcoatMap:wt,clearcoatNormalMap:At,clearcoatRoughnessMap:ht,dispersion:Yt,retroreflection:B,iridescence:P,iridescenceMap:mt,iridescenceThicknessMap:Dt,sheen:X,sheenColorMap:te,sheenRoughnessMap:Pt,specularMap:It,specularColorMap:Zt,specularIntensityMap:ne,transmission:K,transmissionMap:re,thicknessMap:$,gradientMap:Lt,opaque:M.transparent===!1&&M.blending===Wr&&M.alphaToCoverage===!1,alphaMap:at,alphaTest:Ft,alphaHash:Bt,combine:M.combine,mapUv:bt&&x(M.map.channel),aoMapUv:nt&&x(M.aoMap.channel),lightMapUv:ft&&x(M.lightMap.channel),bumpMapUv:ct&&x(M.bumpMap.channel),normalMapUv:Tt&&x(M.normalMap.channel),displacementMapUv:Ct&&x(M.displacementMap.channel),emissiveMapUv:Rt&&x(M.emissiveMap.channel),metalnessMapUv:Ut&&x(M.metalnessMap.channel),roughnessMapUv:zt&&x(M.roughnessMap.channel),anisotropyMapUv:st&&x(M.anisotropyMap.channel),clearcoatMapUv:wt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:te&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(M.sheenRoughnessMap.channel),specularMapUv:It&&x(M.specularMap.channel),specularColorMapUv:Zt&&x(M.specularColorMap.channel),specularIntensityMapUv:ne&&x(M.specularIntensityMap.channel),transmissionMapUv:re&&x(M.transmissionMap.channel),thicknessMapUv:$&&x(M.thicknessMap.channel),alphaMapUv:at&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Tt||k),vertexNormals:!!F.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!F.attributes.uv&&(bt||at),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||F.attributes.normal===void 0&&Tt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:lt,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:dt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:R.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:bt&&M.map.isVideoTexture===!0&&Se.getTransfer(M.map.colorSpace)===Ie,decodeVideoTextureEmissive:Rt&&M.emissiveMap.isVideoTexture===!0&&Se.getTransfer(M.emissiveMap.colorSpace)===Ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Tn,flipSided:M.side===ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:yt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&M.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function _(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let E in M.defines)S.push(E),S.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(y(S,M),w(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numSunLights),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numSunLightShadows),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function w(M,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function m(M){let S=g[M.type],E;if(S){let T=Xn[S];E=Wn.clone(T.uniforms)}else E=M.uniforms;return E}function u(M,S){let E=h.get(S);return E!==void 0?++E.usedTimes:(E=new Mb(i,S,M,r),c.push(E),h.set(S,E)),E}function v(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function f(M){a.remove(M)}function C(){a.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:m,acquireProgram:u,releaseProgram:v,releaseShaderCache:f,programs:c,dispose:C}}function Eb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Tb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function f0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function d0(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(p){let g=0;return p.isInstancedMesh&&(g+=2),p.isSkinnedMesh&&(g+=1),g}function a(p,g,x,b,_,y){let w=i[t];return w===void 0?(w={id:p.id,object:p,geometry:g,material:x,materialVariant:o(p),groupOrder:b,renderOrder:p.renderOrder,z:_,group:y},i[t]=w):(w.id=p.id,w.object=p,w.geometry=g,w.material=x,w.materialVariant=o(p),w.groupOrder=b,w.renderOrder=p.renderOrder,w.z=_,w.group=y),t++,w}function l(p,g,x,b,_,y,w){w.reversedDepth===!0&&(_=-_);let m=a(p,g,x,b,_,y);x.transmission>0?n.push(m):x.transparent===!0?r.push(m):e.push(m)}function c(p,g,x,b,_,y){let w=a(p,g,x,b,_,y);x.transmission>0?n.unshift(w):x.transparent===!0?r.unshift(w):e.unshift(w)}function h(p,g){e.length>1&&e.sort(p||Tb),n.length>1&&n.sort(g||f0),r.length>1&&r.sort(g||f0)}function d(){for(let p=t,g=i.length;p<g;p++){let x=i[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:h}}function Ab(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new d0,i.set(n,[o])):r>=s.length?(o=new d0,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Rb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new ee};break;case"SpotLight":e={position:new D,direction:new D,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Cb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Pb=0;function Ib(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Db(i){let t=new Rb,e=Cb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let r=new D,s=new Wt,o=new Wt;function a(c){let h=0,d=0,p=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let g=0,x=0,b=0,_=0,y=0,w=0,m=0,u=0,v=0,f=0,C=0,M=0,S=0,E=0;c.sort(Ib);for(let A=0,R=c.length;A<R;A++){let U=c[A],F=U.color,z=U.intensity,V=U.distance,Z=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===$r?Z=U.shadow.map.texture:Z=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=F.r*z,d+=F.g*z,p+=F.b*z;else if(U.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(U.sh.coefficients[H],z);E++}else if(U.isSunLight){let H=t.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let tt=U.shadow,q=e.get(U);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[x]=q,n.sunShadowMap[x]=Z;let ut=tt.getViewportCount();for(let dt=0;dt<ut;dt++)n.sunShadowMatrix[b+dt]=tt.getMatrix(dt),n.sunShadowCascade[b+dt]=tt._cascadeData[dt];b+=ut,x++}n.sun[g]=H,g++}else if(U.isDirectionalLight){let H=t.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let tt=U.shadow,q=e.get(U);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.directionalShadow[_]=q,n.directionalShadowMap[_]=Z,n.directionalShadowMatrix[_]=U.shadow.matrix,v++}n.directional[_]=H,_++}else if(U.isSpotLight){let H=t.get(U);H.position.setFromMatrixPosition(U.matrixWorld),H.color.copy(F).multiplyScalar(z),H.distance=V,H.coneCos=Math.cos(U.angle),H.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),H.decay=U.decay,n.spot[w]=H;let tt=U.shadow;if(U.map&&(n.spotLightMap[M]=U.map,M++,tt.updateMatrices(U),U.castShadow&&S++),n.spotLightMatrix[w]=tt.matrix,U.castShadow){let q=e.get(U);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.spotShadow[w]=q,n.spotShadowMap[w]=Z,C++}w++}else if(U.isRectAreaLight){let H=t.get(U);H.color.copy(F).multiplyScalar(z),H.halfWidth.set(U.width*.5,0,0),H.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=H,m++}else if(U.isPointLight){let H=t.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),H.distance=U.distance,H.decay=U.decay,U.castShadow){let tt=U.shadow,q=e.get(U);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,q.shadowCameraNear=tt.camera.near,q.shadowCameraFar=tt.camera.far,n.pointShadow[y]=q,n.pointShadowMap[y]=Z,n.pointShadowMatrix[y]=U.shadow.matrix,f++}n.point[y]=H,y++}else if(U.isHemisphereLight){let H=t.get(U);H.skyColor.copy(U.color).multiplyScalar(z),H.groundColor.copy(U.groundColor).multiplyScalar(z),n.hemi[u]=H,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;let T=n.hash;(T.sunLength!==g||T.directionalLength!==_||T.pointLength!==y||T.spotLength!==w||T.rectAreaLength!==m||T.hemiLength!==u||T.numSunShadows!==x||T.numDirectionalShadows!==v||T.numPointShadows!==f||T.numSpotShadows!==C||T.numSpotMaps!==M||T.numLightProbes!==E)&&(n.sun.length=g,n.directional.length=_,n.spot.length=w,n.rectArea.length=m,n.point.length=y,n.hemi.length=u,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=f,n.pointShadowMap.length=f,n.pointShadowMatrix.length=f,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+M-S,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,T.sunLength=g,T.directionalLength=_,T.pointLength=y,T.spotLength=w,T.rectAreaLength=m,T.hemiLength=u,T.numSunShadows=x,T.numDirectionalShadows=v,T.numPointShadows=f,T.numSpotShadows=C,T.numSpotMaps=M,T.numLightProbes=E,n.version=Pb++)}function l(c,h){let d=0,p=0,g=0,x=0,b=0,_=0,y=h.matrixWorldInverse;for(let w=0,m=c.length;w<m;w++){let u=c[w];if(u.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(u.matrixWorld),v.direction.transformDirection(y),d++}else if(u.isDirectionalLight){let v=n.directional[p];v.direction.setFromMatrixPosition(u.matrixWorld),r.setFromMatrixPosition(u.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(y),p++}else if(u.isSpotLight){let v=n.spot[x];v.position.setFromMatrixPosition(u.matrixWorld),v.position.applyMatrix4(y),v.direction.setFromMatrixPosition(u.matrixWorld),r.setFromMatrixPosition(u.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(y),x++}else if(u.isRectAreaLight){let v=n.rectArea[b];v.position.setFromMatrixPosition(u.matrixWorld),v.position.applyMatrix4(y),o.identity(),s.copy(u.matrixWorld),s.premultiply(y),o.extractRotation(s),v.halfWidth.set(u.width*.5,0,0),v.halfHeight.set(0,u.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),b++}else if(u.isPointLight){let v=n.point[g];v.position.setFromMatrixPosition(u.matrixWorld),v.position.applyMatrix4(y),g++}else if(u.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(u.matrixWorld),v.direction.transformDirection(y),_++}}}return{setup:a,setupView:l,state:n}}function p0(i){let t=new Db(i),e=[],n=[],r=[];function s(p){d.camera=p,e.length=0,n.length=0,r.length=0}function o(p){e.push(p)}function a(p){n.push(p)}function l(p){r.push(p)}function c(){t.setup(e)}function h(p){t.setupView(e,p)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Lb(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new p0(i),t.set(r,[a])):s>=o.length?(a=new p0(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ub=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Bb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],m0=new Wt,Pl=new D,Wd=new D;function Ob(i,t,e){let n=new Mo,r=new gt,s=new gt,o=new we,a=new lu,l=new cu,c={},h=e.maxTextureSize,d={[ci]:ln,[ln]:ci,[Tn]:Tn},p=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Nb,fragmentShader:Ub}),g=p.clone();g.defines.HORIZONTAL_PASS=1;let x=new De;x.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ae(x,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let y=this.type;this.render=function(f,C,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||f.length===0)return;this.type===ug&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gr);let S=i.getRenderTarget(),E=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),A=i.state;A.setBlending(dn),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let R=y!==this.type;R&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(F=>F.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,F=f.length;U<F;U++){let z=f[U],V=z.shadow;if(V===void 0){oe("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let Z=V.getFrameExtents();r.multiply(Z),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Z.x),r.x=s.x*Z.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Z.y),r.y=s.y*Z.y,V.mapSize.y=s.y));let H=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=H,V.map===null||R===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Co){if(z.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new nn(r.x,r.y,{format:$r,type:Mn,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new Ki(r.x,r.y,bi),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=$i,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fn,V.map.depthTexture.magFilter=fn}else z.isPointLight?(V.map=new mh(r.x),V.map.depthTexture=new eu(r.x,Oi)):(V.map=new nn(r.x,r.y),V.map.depthTexture=new Ki(r.x,r.y,Oi)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=$i,this.type===Gr?(V.map.depthTexture.compareFunction=H?fh:hh,V.map.depthTexture.minFilter=Cn,V.map.depthTexture.magFilter=Cn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fn,V.map.depthTexture.magFilter=fn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);let tt=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();z.isPointLight!==!0&&V.updateMatrices(z,M);for(let q=0;q<tt;q++){let ut=V.getCamera(q);if(z.isPointLight){let dt=V.camera,Et=V.matrix,St=z.distance||dt.far;St!==dt.far&&(dt.far=St,dt.updateProjectionMatrix()),Pl.setFromMatrixPosition(z.matrixWorld),dt.position.copy(Pl),Wd.copy(dt.position),Wd.add(Fb[q]),dt.up.copy(Bb[q]),dt.lookAt(Wd),dt.updateMatrixWorld(),Et.makeTranslation(-Pl.x,-Pl.y,-Pl.z),m0.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(m0,dt.coordinateSystem,dt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,q),i.clear();else{q===0&&(i.setRenderTarget(V.map),i.clear());let dt=V.getViewport(q);o.set(s.x*dt.x,s.y*dt.y,s.x*dt.z,s.y*dt.w),A.viewport(o)}n=V.getFrustum(q),u(C,M,ut,z,this.type)}V.isPointLightShadow!==!0&&this.type===Co&&w(V,M),V.needsUpdate=!1}y=this.type,_.needsUpdate=!1,i.setRenderTarget(S,E,T)};function w(f,C){let M=t.update(b);p.defines.VSM_SAMPLES!==f.blurSamples&&(p.defines.VSM_SAMPLES=f.blurSamples,g.defines.VSM_SAMPLES=f.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),f.mapPass===null?f.mapPass=new nn(r.x,r.y,{format:$r,type:Mn}):(f.mapPass.width!==f.map.width||f.mapPass.height!==f.map.height)&&f.mapPass.setSize(f.map.width,f.map.height),p.uniforms.shadow_pass.value=f.map.depthTexture,p.uniforms.resolution.value.set(f.map.width,f.map.height),p.uniforms.radius.value=f.radius,i.setRenderTarget(f.mapPass),i.clear(),i.renderBufferDirect(C,null,M,p,b,null),g.uniforms.shadow_pass.value=f.mapPass.texture,g.uniforms.resolution.value.set(f.map.width,f.map.height),g.uniforms.radius.value=f.radius,i.setRenderTarget(f.map),i.clear(),i.renderBufferDirect(C,null,M,g,b,null)}function m(f,C,M,S){let E=null,T=M.isPointLight===!0?f.customDistanceMaterial:f.customDepthMaterial;if(T!==void 0)E=T;else if(E=M.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let A=E.uuid,R=C.uuid,U=c[A];U===void 0&&(U={},c[A]=U);let F=U[R];F===void 0&&(F=E.clone(),U[R]=F,C.addEventListener("dispose",v)),E=F}if(E.visible=C.visible,E.wireframe=C.wireframe,S===Co?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,M.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let A=i.properties.get(E);A.light=M}return E}function u(f,C,M,S,E){if(f.visible===!1)return;if(f.layers.test(C.layers)&&(f.isMesh||f.isLine||f.isPoints)&&(f.castShadow||f.receiveShadow&&E===Co)&&(!f.frustumCulled||f.intersectsFrustum(n))){f.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,f.matrixWorld);let R=t.update(f),U=f.material;if(Array.isArray(U)){let F=R.groups;for(let z=0,V=F.length;z<V;z++){let Z=F[z],H=U[Z.materialIndex];if(H&&H.visible){let tt=m(f,H,S,E);f.onBeforeShadow(i,f,C,M,R,tt,Z),i.renderBufferDirect(M,null,R,tt,f,Z),f.onAfterShadow(i,f,C,M,R,tt,Z)}}}else if(U.visible){let F=m(f,U,S,E);f.onBeforeShadow(i,f,C,M,R,F,null),i.renderBufferDirect(M,null,R,F,f,null),f.onAfterShadow(i,f,C,M,R,F,null)}}let A=f.children;for(let R=0,U=A.length;R<U;R++)u(A[R],C,M,S,E)}function v(f){f.target.removeEventListener("dispose",v);for(let M in c){let S=c[M],E=f.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function zb(i,t){function e(){let $=!1,Lt=new we,at=null,Ft=new we(0,0,0,0);return{setMask:function(Bt){at!==Bt&&!$&&(i.colorMask(Bt,Bt,Bt,Bt),at=Bt)},setLocked:function(Bt){$=Bt},setClear:function(Bt,yt,Xt,Qt,xe){xe===!0&&(Bt*=Qt,yt*=Qt,Xt*=Qt),Lt.set(Bt,yt,Xt,Qt),Ft.equals(Lt)===!1&&(i.clearColor(Bt,yt,Xt,Qt),Ft.copy(Lt))},reset:function(){$=!1,at=null,Ft.set(-1,0,0,0)}}}function n(){let $=!1,Lt=!1,at=null,Ft=null,Bt=null;return{setReversed:function(yt){if(Lt!==yt){let Xt=t.get("EXT_clip_control");yt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Lt=yt;let Qt=Bt;Bt=null,this.setClear(Qt)}},getReversed:function(){return Lt},setTest:function(yt){yt?N(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(yt){at!==yt&&!$&&(i.depthMask(yt),at=yt)},setFunc:function(yt){if(Lt&&(yt=Vg[yt]),Ft!==yt){switch(yt){case Gc:i.depthFunc(i.NEVER);break;case Wc:i.depthFunc(i.ALWAYS);break;case Xc:i.depthFunc(i.LESS);break;case fo:i.depthFunc(i.LEQUAL);break;case qc:i.depthFunc(i.EQUAL);break;case Yc:i.depthFunc(i.GEQUAL);break;case Zc:i.depthFunc(i.GREATER);break;case $c:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ft=yt}},setLocked:function(yt){$=yt},setClear:function(yt){Bt!==yt&&(Bt=yt,Lt&&(yt=1-yt),i.clearDepth(yt))},reset:function(){$=!1,at=null,Ft=null,Bt=null,Lt=!1}}}function r(){let $=!1,Lt=null,at=null,Ft=null,Bt=null,yt=null,Xt=null,Qt=null,xe=null;return{setTest:function(be){$||(be?N(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(be){Lt!==be&&!$&&(i.stencilMask(be),Lt=be)},setFunc:function(be,An,le){(at!==be||Ft!==An||Bt!==le)&&(i.stencilFunc(be,An,le),at=be,Ft=An,Bt=le)},setOp:function(be,An,le){(yt!==be||Xt!==An||Qt!==le)&&(i.stencilOp(be,An,le),yt=be,Xt=An,Qt=le)},setLocked:function(be){$=be},setClear:function(be){xe!==be&&(i.clearStencil(be),xe=be)},reset:function(){$=!1,Lt=null,at=null,Ft=null,Bt=null,yt=null,Xt=null,Qt=null,xe=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},d={},p={},g=new WeakMap,x=[],b=null,_=!1,y=null,w=null,m=null,u=null,v=null,f=null,C=null,M=new ee(0,0,0),S=0,E=!1,T=null,A=null,R=null,U=null,F=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Z=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=Z>=2);let tt=null,q={},ut=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),Et=new we().fromArray(ut),St=new we().fromArray(dt);function Vt($,Lt,at,Ft){let Bt=new Uint8Array(4),yt=i.createTexture();i.bindTexture($,yt),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<at;Xt++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Lt,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,Bt):i.texImage2D(Lt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Bt);return yt}let J={};J[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(i.DEPTH_TEST),o.setFunc(fo),ct(!1),Tt(fd),N(i.CULL_FACE),nt(dn);function N($){h[$]!==!0&&(i.enable($),h[$]=!0)}function lt($){h[$]!==!1&&(i.disable($),h[$]=!1)}function Mt($,Lt){return p[$]!==Lt?(i.bindFramebuffer($,Lt),p[$]=Lt,$===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Lt),$===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Lt),!0):!1}function xt($,Lt){let at=x,Ft=!1;if($){at=g.get(Lt),at===void 0&&(at=[],g.set(Lt,at));let Bt=$.textures;if(at.length!==Bt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Xt=Bt.length;yt<Xt;yt++)at[yt]=i.COLOR_ATTACHMENT0+yt;at.length=Bt.length,Ft=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,Ft=!0);Ft&&i.drawBuffers(at)}function bt($){return b!==$?(i.useProgram($),b=$,!0):!1}let pt={[Si]:i.FUNC_ADD,[hg]:i.FUNC_SUBTRACT,[fg]:i.FUNC_REVERSE_SUBTRACT};pt[dg]=i.MIN,pt[pg]=i.MAX;let Q={[ms]:i.ZERO,[mg]:i.ONE,[gg]:i.SRC_COLOR,[gd]:i.SRC_ALPHA,[yg]:i.SRC_ALPHA_SATURATE,[pl]:i.DST_COLOR,[dl]:i.DST_ALPHA,[xg]:i.ONE_MINUS_SRC_COLOR,[xd]:i.ONE_MINUS_SRC_ALPHA,[vg]:i.ONE_MINUS_DST_COLOR,[_g]:i.ONE_MINUS_DST_ALPHA,[Mg]:i.CONSTANT_COLOR,[Sg]:i.ONE_MINUS_CONSTANT_COLOR,[bg]:i.CONSTANT_ALPHA,[wg]:i.ONE_MINUS_CONSTANT_ALPHA};function nt($,Lt,at,Ft,Bt,yt,Xt,Qt,xe,be){if($===dn){_===!0&&(lt(i.BLEND),_=!1);return}if(_===!1&&(N(i.BLEND),_=!0),$!==bu){if($!==y||be!==E){if((w!==Si||v!==Si)&&(i.blendEquation(i.FUNC_ADD),w=Si,v=Si),be)switch($){case Wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dd:i.blendFunc(i.ONE,i.ONE);break;case pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case md:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",$);break}else switch($){case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pd:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case md:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",$);break}m=null,u=null,f=null,C=null,M.set(0,0,0),S=0,y=$,E=be}return}Bt=Bt||Lt,yt=yt||at,Xt=Xt||Ft,(Lt!==w||Bt!==v)&&(i.blendEquationSeparate(pt[Lt],pt[Bt]),w=Lt,v=Bt),(at!==m||Ft!==u||yt!==f||Xt!==C)&&(i.blendFuncSeparate(Q[at],Q[Ft],Q[yt],Q[Xt]),m=at,u=Ft,f=yt,C=Xt),(Qt.equals(M)===!1||xe!==S)&&(i.blendColor(Qt.r,Qt.g,Qt.b,xe),M.copy(Qt),S=xe),y=$,E=!1}function ft($,Lt){$.side===Tn?lt(i.CULL_FACE):N(i.CULL_FACE);let at=$.side===ln;Lt&&(at=!at),ct(at),$.blending===Wr&&$.transparent===!1?nt(dn):nt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),s.setMask($.colorWrite);let Ft=$.stencilWrite;a.setTest(Ft),Ft&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Rt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct($){T!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),T=$)}function Tt($){$!==lg?(N(i.CULL_FACE),$!==A&&($===fd?i.cullFace(i.BACK):$===cg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),A=$}function Ct($){$!==R&&(V&&i.lineWidth($),R=$)}function Rt($,Lt,at){$?(N(i.POLYGON_OFFSET_FILL),(U!==Lt||F!==at)&&(U=Lt,F=at,o.getReversed()&&(Lt=-Lt),i.polygonOffset(Lt,at))):lt(i.POLYGON_OFFSET_FILL)}function Ut($){$?N(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function zt($){$===void 0&&($=i.TEXTURE0+z-1),tt!==$&&(i.activeTexture($),tt=$)}function k($,Lt,at){at===void 0&&(tt===null?at=i.TEXTURE0+z-1:at=tt);let Ft=q[at];Ft===void 0&&(Ft={type:void 0,texture:void 0},q[at]=Ft),(Ft.type!==$||Ft.texture!==Lt)&&(tt!==at&&(i.activeTexture(at),tt=at),i.bindTexture($,Lt||J[$]),Ft.type=$,Ft.texture=Lt)}function fe(){let $=q[tt];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch($){se("WebGLState:",$)}}function B(){try{i.compressedTexImage3D(...arguments)}catch($){se("WebGLState:",$)}}function P(){try{i.texSubImage2D(...arguments)}catch($){se("WebGLState:",$)}}function X(){try{i.texSubImage3D(...arguments)}catch($){se("WebGLState:",$)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch($){se("WebGLState:",$)}}function st(){try{i.compressedTexSubImage3D(...arguments)}catch($){se("WebGLState:",$)}}function wt(){try{i.texStorage2D(...arguments)}catch($){se("WebGLState:",$)}}function At(){try{i.texStorage3D(...arguments)}catch($){se("WebGLState:",$)}}function ht(){try{i.texImage2D(...arguments)}catch($){se("WebGLState:",$)}}function mt(){try{i.texImage3D(...arguments)}catch($){se("WebGLState:",$)}}function Dt($){return d[$]!==void 0?d[$]:i.getParameter($)}function te($,Lt){d[$]!==Lt&&(i.pixelStorei($,Lt),d[$]=Lt)}function Pt($){Et.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),Et.copy($))}function It($){St.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),St.copy($))}function Zt($,Lt){let at=c.get(Lt);at===void 0&&(at=new WeakMap,c.set(Lt,at));let Ft=at.get($);Ft===void 0&&(Ft=i.getUniformBlockIndex(Lt,$.name),at.set($,Ft))}function ne($,Lt){let Ft=c.get(Lt).get($);l.get(Lt)!==Ft&&(i.uniformBlockBinding(Lt,Ft,$.__bindingPointIndex),l.set(Lt,Ft))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},tt=null,q={},p={},g=new WeakMap,x=[],b=null,_=!1,y=null,w=null,m=null,u=null,v=null,f=null,C=null,M=new ee(0,0,0),S=0,E=!1,T=null,A=null,R=null,U=null,F=null,Et.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:N,disable:lt,bindFramebuffer:Mt,drawBuffers:xt,useProgram:bt,setBlending:nt,setMaterial:ft,setFlipSided:ct,setCullFace:Tt,setLineWidth:Ct,setPolygonOffset:Rt,setScissorTest:Ut,activeTexture:zt,bindTexture:k,unbindTexture:fe,compressedTexImage2D:Yt,compressedTexImage3D:B,texImage2D:ht,texImage3D:mt,pixelStorei:te,getParameter:Dt,updateUBOMapping:Zt,uniformBlockBinding:ne,texStorage2D:wt,texStorage3D:At,texSubImage2D:P,texSubImage3D:X,compressedTexSubImage2D:K,compressedTexSubImage3D:st,scissor:Pt,viewport:It,reset:re}}function Vb(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,d=new Set,p,g=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(B,P){return x?new OffscreenCanvas(B,P):Na("canvas")}function _(B,P,X){let K=1,st=Yt(B);if((st.width>X||st.height>X)&&(K=X/Math.max(st.width,st.height)),K<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let wt=Math.floor(K*st.width),At=Math.floor(K*st.height);p===void 0&&(p=b(wt,At));let ht=P?b(wt,At):p;return ht.width=wt,ht.height=At,ht.getContext("2d").drawImage(B,0,0,wt,At),oe("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+wt+"x"+At+")."),ht}else return"data"in B&&oe("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),B;return B}function y(B){return B.generateMipmaps}function w(B){i.generateMipmap(B)}function m(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function u(B,P,X,K,st,wt=!1){if(B!==null){if(i[B]!==void 0)return i[B];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let At;K&&(At=t.get("EXT_texture_norm16"),At||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=P;if(P===i.RED&&(X===i.FLOAT&&(ht=i.R32F),X===i.HALF_FLOAT&&(ht=i.R16F),X===i.UNSIGNED_BYTE&&(ht=i.R8),X===i.UNSIGNED_SHORT&&At&&(ht=At.R16_EXT),X===i.SHORT&&At&&(ht=At.R16_SNORM_EXT)),P===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ht=i.R8UI),X===i.UNSIGNED_SHORT&&(ht=i.R16UI),X===i.UNSIGNED_INT&&(ht=i.R32UI),X===i.BYTE&&(ht=i.R8I),X===i.SHORT&&(ht=i.R16I),X===i.INT&&(ht=i.R32I)),P===i.RG&&(X===i.FLOAT&&(ht=i.RG32F),X===i.HALF_FLOAT&&(ht=i.RG16F),X===i.UNSIGNED_BYTE&&(ht=i.RG8),X===i.UNSIGNED_SHORT&&At&&(ht=At.RG16_EXT),X===i.SHORT&&At&&(ht=At.RG16_SNORM_EXT)),P===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ht=i.RG8UI),X===i.UNSIGNED_SHORT&&(ht=i.RG16UI),X===i.UNSIGNED_INT&&(ht=i.RG32UI),X===i.BYTE&&(ht=i.RG8I),X===i.SHORT&&(ht=i.RG16I),X===i.INT&&(ht=i.RG32I)),P===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ht=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ht=i.RGB16UI),X===i.UNSIGNED_INT&&(ht=i.RGB32UI),X===i.BYTE&&(ht=i.RGB8I),X===i.SHORT&&(ht=i.RGB16I),X===i.INT&&(ht=i.RGB32I)),P===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ht=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ht=i.RGBA16UI),X===i.UNSIGNED_INT&&(ht=i.RGBA32UI),X===i.BYTE&&(ht=i.RGBA8I),X===i.SHORT&&(ht=i.RGBA16I),X===i.INT&&(ht=i.RGBA32I)),P===i.RGB&&(X===i.UNSIGNED_SHORT&&At&&(ht=At.RGB16_EXT),X===i.SHORT&&At&&(ht=At.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ht=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ht=i.R11F_G11F_B10F)),P===i.RGBA){let mt=wt?La:Se.getTransfer(st);X===i.FLOAT&&(ht=i.RGBA32F),X===i.HALF_FLOAT&&(ht=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ht=mt===Ie?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&At&&(ht=At.RGBA16_EXT),X===i.SHORT&&At&&(ht=At.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ht=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ht=i.RGB5_A1)}return(ht===i.R16F||ht===i.R32F||ht===i.RG16F||ht===i.RG32F||ht===i.RGBA16F||ht===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function v(B,P){let X;return B?P===null||P===Oi||P===Zr?X=i.DEPTH24_STENCIL8:P===bi?X=i.DEPTH32F_STENCIL8:P===Po&&(X=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Oi||P===Zr?X=i.DEPTH_COMPONENT24:P===bi?X=i.DEPTH_COMPONENT32F:P===Po&&(X=i.DEPTH_COMPONENT16),X}function f(B,P){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==fn&&B.minFilter!==Cn?Math.log2(Math.max(P.width,P.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?P.mipmaps.length:1}function C(B){let P=B.target;P.removeEventListener("dispose",C),S(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&d.delete(P)}function M(B){let P=B.target;P.removeEventListener("dispose",M),T(P)}function S(B){let P=n.get(B);if(P.__webglInit===void 0)return;let X=B.source,K=g.get(X);if(K){let st=K[P.__cacheKey];st.usedTimes--,st.usedTimes===0&&E(B),Object.keys(K).length===0&&g.delete(X)}n.remove(B)}function E(B){let P=n.get(B);i.deleteTexture(P.__webglTexture);let X=B.source,K=g.get(X);delete K[P.__cacheKey],o.memory.textures--}function T(B){let P=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(P.__webglFramebuffer[K]))for(let st=0;st<P.__webglFramebuffer[K].length;st++)i.deleteFramebuffer(P.__webglFramebuffer[K][st]);else i.deleteFramebuffer(P.__webglFramebuffer[K]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[K])}else{if(Array.isArray(P.__webglFramebuffer))for(let K=0;K<P.__webglFramebuffer.length;K++)i.deleteFramebuffer(P.__webglFramebuffer[K]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let K=0;K<P.__webglColorRenderbuffer.length;K++)P.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[K]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let X=B.textures;for(let K=0,st=X.length;K<st;K++){let wt=n.get(X[K]);wt.__webglTexture&&(i.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(X[K])}n.remove(B)}let A=0;function R(){A=0}function U(){return A}function F(B){A=B}function z(){let B=A;return B>=r.maxTextures&&oe("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+r.maxTextures),A+=1,B}function V(B){let P=[];return P.push(B.wrapS),P.push(B.wrapT),P.push(B.wrapR||0),P.push(B.magFilter),P.push(B.minFilter),P.push(B.anisotropy),P.push(B.internalFormat),P.push(B.format),P.push(B.type),P.push(B.generateMipmaps),P.push(B.premultiplyAlpha),P.push(B.flipY),P.push(B.unpackAlignment),P.push(B.colorSpace),P.join()}function Z(B,P){let X=n.get(B);if(B.isVideoTexture&&k(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&X.__version!==B.version){let K=B.image;if(K===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(X,B,P);return}}else B.isExternalTexture&&(X.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+P)}function H(B,P){let X=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&X.__version!==B.version){lt(X,B,P);return}else B.isExternalTexture&&(X.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+P)}function tt(B,P){let X=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&X.__version!==B.version){lt(X,B,P);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+P)}function q(B,P){let X=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&X.__version!==B.version){Mt(X,B,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+P)}let ut={[si]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[Jc]:i.MIRRORED_REPEAT},dt={[fn]:i.NEAREST,[Ag]:i.NEAREST_MIPMAP_NEAREST,[Sl]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Au]:i.LINEAR_MIPMAP_NEAREST,[Yr]:i.LINEAR_MIPMAP_LINEAR},Et={[Ig]:i.NEVER,[Fg]:i.ALWAYS,[Dg]:i.LESS,[hh]:i.LEQUAL,[Lg]:i.EQUAL,[fh]:i.GEQUAL,[Ng]:i.GREATER,[Ug]:i.NOTEQUAL};function St(B,P){if(P.type===bi&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Cn||P.magFilter===Au||P.magFilter===Sl||P.magFilter===Yr||P.minFilter===Cn||P.minFilter===Au||P.minFilter===Sl||P.minFilter===Yr)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,ut[P.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,ut[P.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,ut[P.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,dt[P.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,dt[P.minFilter]),P.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,Et[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===fn||P.minFilter!==Sl&&P.minFilter!==Yr||P.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Vt(B,P){let X=!1;B.__webglInit===void 0&&(B.__webglInit=!0,P.addEventListener("dispose",C));let K=P.source,st=g.get(K);st===void 0&&(st={},g.set(K,st));let wt=V(P);if(wt!==B.__cacheKey){st[wt]===void 0&&(st[wt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),st[wt].usedTimes++;let At=st[B.__cacheKey];At!==void 0&&(st[B.__cacheKey].usedTimes--,At.usedTimes===0&&E(P)),B.__cacheKey=wt,B.__webglTexture=st[wt].texture}return X}function J(B,P,X){return Math.floor(Math.floor(B/X)/P)}function N(B,P,X,K){let wt=B.updateRanges;if(wt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,X,K,P.data);else{wt.sort((te,Pt)=>te.start-Pt.start);let At=0;for(let te=1;te<wt.length;te++){let Pt=wt[At],It=wt[te],Zt=Pt.start+Pt.count,ne=J(It.start,P.width,4),re=J(Pt.start,P.width,4);It.start<=Zt+1&&ne===re&&J(It.start+It.count-1,P.width,4)===ne?Pt.count=Math.max(Pt.count,It.start+It.count-Pt.start):(++At,wt[At]=It)}wt.length=At+1;let ht=e.getParameter(i.UNPACK_ROW_LENGTH),mt=e.getParameter(i.UNPACK_SKIP_PIXELS),Dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let te=0,Pt=wt.length;te<Pt;te++){let It=wt[te],Zt=Math.floor(It.start/4),ne=Math.ceil(It.count/4),re=Zt%P.width,$=Math.floor(Zt/P.width),Lt=ne,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,re),e.pixelStorei(i.UNPACK_SKIP_ROWS,$),e.texSubImage2D(i.TEXTURE_2D,0,re,$,Lt,at,X,K,P.data)}B.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ht),e.pixelStorei(i.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function lt(B,P,X){let K=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(K=i.TEXTURE_3D);let st=Vt(B,P),wt=P.source;e.bindTexture(K,B.__webglTexture,i.TEXTURE0+X);let At=n.get(wt);if(wt.version!==At.__version||st===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let at=Se.getPrimaries(Se.workingColorSpace),Ft=P.colorSpace===vr?null:Se.getPrimaries(P.colorSpace),Bt=P.colorSpace===vr||at===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment);let mt=_(P.image,!1,r.maxTextureSize);mt=fe(P,mt);let Dt=s.convert(P.format,P.colorSpace),te=s.convert(P.type),Pt=u(P.internalFormat,Dt,te,P.normalized,P.colorSpace,P.isVideoTexture);St(K,P);let It,Zt=P.mipmaps,ne=P.isVideoTexture!==!0,re=At.__version===void 0||st===!0,$=wt.dataReady,Lt=f(P,mt);if(P.isDepthTexture)Pt=v(P.format===ji,P.type),re&&(ne?e.texStorage2D(i.TEXTURE_2D,1,Pt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Pt,mt.width,mt.height,0,Dt,te,null));else if(P.isDataTexture)if(Zt.length>0){ne&&re&&e.texStorage2D(i.TEXTURE_2D,Lt,Pt,Zt[0].width,Zt[0].height);for(let at=0,Ft=Zt.length;at<Ft;at++)It=Zt[at],ne?$&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,It.width,It.height,Dt,te,It.data):e.texImage2D(i.TEXTURE_2D,at,Pt,It.width,It.height,0,Dt,te,It.data);P.generateMipmaps=!1}else ne?(re&&e.texStorage2D(i.TEXTURE_2D,Lt,Pt,mt.width,mt.height),$&&N(P,mt,Dt,te)):e.texImage2D(i.TEXTURE_2D,0,Pt,mt.width,mt.height,0,Dt,te,mt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ne&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Pt,Zt[0].width,Zt[0].height,mt.depth);for(let at=0,Ft=Zt.length;at<Ft;at++)if(It=Zt[at],P.format!==Jn)if(Dt!==null)if(ne){if($)if(P.layerUpdates.size>0){let Bt=Ld(It.width,It.height,P.format,P.type);for(let yt of P.layerUpdates){let Xt=It.data.subarray(yt*Bt/It.data.BYTES_PER_ELEMENT,(yt+1)*Bt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,yt,It.width,It.height,1,Dt,Xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,It.width,It.height,mt.depth,Dt,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,Pt,It.width,It.height,mt.depth,0,It.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?$&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,It.width,It.height,mt.depth,Dt,te,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,Pt,It.width,It.height,mt.depth,0,Dt,te,It.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{ne&&re&&e.texStorage2D(i.TEXTURE_2D,Lt,Pt,Zt[0].width,Zt[0].height);for(let at=0,Ft=Zt.length;at<Ft;at++)It=Zt[at],P.format!==Jn?Dt!==null?ne?$&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,It.width,It.height,Dt,It.data):e.compressedTexImage2D(i.TEXTURE_2D,at,Pt,It.width,It.height,0,It.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?$&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,It.width,It.height,Dt,te,It.data):e.texImage2D(i.TEXTURE_2D,at,Pt,It.width,It.height,0,Dt,te,It.data)}else if(P.isDataArrayTexture)if(ne){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Pt,mt.width,mt.height,mt.depth),$)if(P.layerUpdates.size>0){let at=Ld(mt.width,mt.height,P.format,P.type);for(let Ft of P.layerUpdates){let Bt=mt.data.subarray(Ft*at/mt.data.BYTES_PER_ELEMENT,(Ft+1)*at/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,mt.width,mt.height,1,Dt,te,Bt)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Dt,te,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,mt.width,mt.height,mt.depth,0,Dt,te,mt.data);else if(P.isData3DTexture)ne?(re&&e.texStorage3D(i.TEXTURE_3D,Lt,Pt,mt.width,mt.height,mt.depth),$&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Dt,te,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,mt.width,mt.height,mt.depth,0,Dt,te,mt.data);else if(P.isFramebufferTexture){if(re)if(ne)e.texStorage2D(i.TEXTURE_2D,Lt,Pt,mt.width,mt.height);else{let at=mt.width,Ft=mt.height;for(let Bt=0;Bt<Lt;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,Pt,at,Ft,0,Dt,te,null),at>>=1,Ft>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),mt.parentNode!==at){at.appendChild(mt),d.add(P),at.onpaint=Ft=>{let Bt=Ft.changedElements;for(let yt of d)Bt.includes(yt.image)&&(yt.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,mt);else{let Bt=i.RGBA,yt=i.RGBA,Xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Bt,yt,Xt,mt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Zt.length>0){if(ne&&re){let at=Yt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,Lt,Pt,at.width,at.height)}for(let at=0,Ft=Zt.length;at<Ft;at++)It=Zt[at],ne?$&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Dt,te,It):e.texImage2D(i.TEXTURE_2D,at,Pt,Dt,te,It);P.generateMipmaps=!1}else if(ne){if(re){let at=Yt(mt);e.texStorage2D(i.TEXTURE_2D,Lt,Pt,at.width,at.height)}$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,te,mt)}else e.texImage2D(i.TEXTURE_2D,0,Pt,Dt,te,mt);y(P)&&w(K),At.__version=wt.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function Mt(B,P,X){if(P.image.length!==6)return;let K=Vt(B,P),st=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+X);let wt=n.get(st);if(st.version!==wt.__version||K===!0){e.activeTexture(i.TEXTURE0+X);let At=Se.getPrimaries(Se.workingColorSpace),ht=P.colorSpace===vr?null:Se.getPrimaries(P.colorSpace),mt=P.colorSpace===vr||At===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Dt=P.isCompressedTexture||P.image[0].isCompressedTexture,te=P.image[0]&&P.image[0].isDataTexture,Pt=[];for(let yt=0;yt<6;yt++)!Dt&&!te?Pt[yt]=_(P.image[yt],!0,r.maxCubemapSize):Pt[yt]=te?P.image[yt].image:P.image[yt],Pt[yt]=fe(P,Pt[yt]);let It=Pt[0],Zt=s.convert(P.format,P.colorSpace),ne=s.convert(P.type),re=u(P.internalFormat,Zt,ne,P.normalized,P.colorSpace),$=P.isVideoTexture!==!0,Lt=wt.__version===void 0||K===!0,at=st.dataReady,Ft=f(P,It);St(i.TEXTURE_CUBE_MAP,P);let Bt;if(Dt){$&&Lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,re,It.width,It.height);for(let yt=0;yt<6;yt++){Bt=Pt[yt].mipmaps;for(let Xt=0;Xt<Bt.length;Xt++){let Qt=Bt[Xt];P.format!==Jn?Zt!==null?$?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt,0,0,Qt.width,Qt.height,Zt,Qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt,re,Qt.width,Qt.height,0,Qt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt,0,0,Qt.width,Qt.height,Zt,ne,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt,re,Qt.width,Qt.height,0,Zt,ne,Qt.data)}}}else{if(Bt=P.mipmaps,$&&Lt){Bt.length>0&&Ft++;let yt=Yt(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,re,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(te){$?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Pt[yt].width,Pt[yt].height,Zt,ne,Pt[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,re,Pt[yt].width,Pt[yt].height,0,Zt,ne,Pt[yt].data);for(let Xt=0;Xt<Bt.length;Xt++){let xe=Bt[Xt].image[yt].image;$?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt+1,0,0,xe.width,xe.height,Zt,ne,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt+1,re,xe.width,xe.height,0,Zt,ne,xe.data)}}else{$?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Zt,ne,Pt[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,re,Zt,ne,Pt[yt]);for(let Xt=0;Xt<Bt.length;Xt++){let Qt=Bt[Xt];$?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt+1,0,0,Zt,ne,Qt.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Xt+1,re,Zt,ne,Qt.image[yt])}}}y(P)&&w(i.TEXTURE_CUBE_MAP),wt.__version=st.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function xt(B,P,X,K,st,wt){let At=s.convert(X.format,X.colorSpace),ht=s.convert(X.type),mt=u(X.internalFormat,At,ht,X.normalized,X.colorSpace),Dt=n.get(P),te=n.get(X);if(te.__renderTarget=P,!Dt.__hasExternalTextures){let Pt=Math.max(1,P.width>>wt),It=Math.max(1,P.height>>wt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,wt,mt,Pt,It,P.depth,0,At,ht,null):e.texImage2D(st,wt,mt,Pt,It,0,At,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),zt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,st,te.__webglTexture,0,Ut(P)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,st,te.__webglTexture,wt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(B,P,X){if(i.bindRenderbuffer(i.RENDERBUFFER,B),P.depthBuffer){let K=P.depthTexture,st=K&&K.isDepthTexture?K.type:null,wt=v(P.stencilBuffer,st),At=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;zt(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(P),wt,P.width,P.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(P),wt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,wt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,B)}else{let K=P.textures;for(let st=0;st<K.length;st++){let wt=K[st],At=s.convert(wt.format,wt.colorSpace),ht=s.convert(wt.type),mt=u(wt.internalFormat,At,ht,wt.normalized,wt.colorSpace);zt(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(P),mt,P.width,P.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(P),mt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,mt,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(B,P,X){let K=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(P.depthTexture);if(st.__renderTarget=P,(!st.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),K){if(st.__webglInit===void 0&&(st.__webglInit=!0,P.depthTexture.addEventListener("dispose",C)),st.__webglTexture===void 0){st.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),St(i.TEXTURE_CUBE_MAP,P.depthTexture);let Dt=s.convert(P.depthTexture.format),te=s.convert(P.depthTexture.type),Pt;P.depthTexture.format===$i?Pt=i.DEPTH_COMPONENT24:P.depthTexture.format===ji&&(Pt=i.DEPTH24_STENCIL8);for(let It=0;It<6;It++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Pt,P.width,P.height,0,Dt,te,null)}}else Z(P.depthTexture,0);let wt=st.__webglTexture,At=Ut(P),ht=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,mt=P.depthTexture.format===ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===$i)zt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ht,wt,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,mt,ht,wt,0);else if(P.depthTexture.format===ji)zt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ht,wt,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,mt,ht,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(B){let P=n.get(B),X=B.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==B.depthTexture){let K=B.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),K){let st=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,K.removeEventListener("dispose",st)};K.addEventListener("dispose",st),P.__depthDisposeCallback=st}P.__boundDepthTexture=K}if(B.depthTexture&&!P.__autoAllocateDepthBuffer)if(X)for(let K=0;K<6;K++)pt(P.__webglFramebuffer[K],B,K);else{let K=B.texture.mipmaps;K&&K.length>0?pt(P.__webglFramebuffer[0],B,0):pt(P.__webglFramebuffer,B,0)}else if(X){P.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[K]),P.__webglDepthbuffer[K]===void 0)P.__webglDepthbuffer[K]=i.createRenderbuffer(),bt(P.__webglDepthbuffer[K],B,!1);else{let st=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=P.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,wt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,wt)}}else{let K=B.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),bt(P.__webglDepthbuffer,B,!1);else{let st=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,wt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,wt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(B,P,X){let K=n.get(B);P!==void 0&&xt(K.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Q(B)}function ft(B){let P=B.texture,X=n.get(B),K=n.get(P);B.addEventListener("dispose",M);let st=B.textures,wt=B.isWebGLCubeRenderTarget===!0,At=st.length>1;if(At||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=P.version,o.memory.textures++),wt){X.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(P.mipmaps&&P.mipmaps.length>0){X.__webglFramebuffer[ht]=[];for(let mt=0;mt<P.mipmaps.length;mt++)X.__webglFramebuffer[ht][mt]=i.createFramebuffer()}else X.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){X.__webglFramebuffer=[];for(let ht=0;ht<P.mipmaps.length;ht++)X.__webglFramebuffer[ht]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(At)for(let ht=0,mt=st.length;ht<mt;ht++){let Dt=n.get(st[ht]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&zt(B)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ht=0;ht<st.length;ht++){let mt=st[ht];X.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ht]);let Dt=s.convert(mt.format,mt.colorSpace),te=s.convert(mt.type),Pt=u(mt.internalFormat,Dt,te,mt.normalized,mt.colorSpace,B.isXRRenderTarget===!0),It=Ut(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Pt,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,X.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(X.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(wt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),St(i.TEXTURE_CUBE_MAP,P);for(let ht=0;ht<6;ht++)if(P.mipmaps&&P.mipmaps.length>0)for(let mt=0;mt<P.mipmaps.length;mt++)xt(X.__webglFramebuffer[ht][mt],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else xt(X.__webglFramebuffer[ht],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);y(P)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ht=0,mt=st.length;ht<mt;ht++){let Dt=st[ht],te=n.get(Dt),Pt=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Pt=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Pt,te.__webglTexture),St(Pt,Dt),xt(X.__webglFramebuffer,B,Dt,i.COLOR_ATTACHMENT0+ht,Pt,0),y(Dt)&&w(Pt)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ht=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,K.__webglTexture),St(ht,P),P.mipmaps&&P.mipmaps.length>0)for(let mt=0;mt<P.mipmaps.length;mt++)xt(X.__webglFramebuffer[mt],B,P,i.COLOR_ATTACHMENT0,ht,mt);else xt(X.__webglFramebuffer,B,P,i.COLOR_ATTACHMENT0,ht,0);y(P)&&w(ht),e.unbindTexture()}B.depthBuffer&&Q(B)}function ct(B){let P=B.textures;for(let X=0,K=P.length;X<K;X++){let st=P[X];if(y(st)){let wt=m(B),At=n.get(st).__webglTexture;e.bindTexture(wt,At),w(wt),e.unbindTexture()}}}let Tt=[],Ct=[];function Rt(B){if(B.samples>0){if(zt(B)===!1){let P=B.textures,X=B.width,K=B.height,st=i.COLOR_BUFFER_BIT,wt=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(B),ht=P.length>1;if(ht)for(let Dt=0;Dt<P.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);let mt=B.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Dt=0;Dt<P.length;Dt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Dt]);let te=n.get(P[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,X,K,0,0,X,K,st,i.NEAREST),l===!0&&(Tt.length=0,Ct.length=0,Tt.push(i.COLOR_ATTACHMENT0+Dt),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Tt.push(wt),Ct.push(wt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Dt=0;Dt<P.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Dt]);let te=n.get(P[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&l){let P=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function Ut(B){return Math.min(r.maxSamples,B.samples)}function zt(B){let P=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function k(B){let P=o.render.frame;h.get(B)!==P&&(h.set(B,P),B.update())}function fe(B,P){let X=B.colorSpace,K=B.format,st=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||X!==Da&&X!==vr&&(Se.getTransfer(X)===Ie?(K!==Jn||st!==gn)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",X)),P}function Yt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.getTextureUnits=U,this.setTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=tt,this.setTextureCube=q,this.rebindTextures=nt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function kb(i,t){function e(n,r=vr){let s,o=Se.getTransfer(r);if(n===gn)return i.UNSIGNED_BYTE;if(n===Cu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Md)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vd)return i.BYTE;if(n===yd)return i.SHORT;if(n===Po)return i.UNSIGNED_SHORT;if(n===Ru)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===bd)return i.ALPHA;if(n===wd)return i.RGB;if(n===Jn)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===Iu)return i.RED;if(n===Du)return i.RED_INTEGER;if(n===$r)return i.RG;if(n===Lu)return i.RG_INTEGER;if(n===Nu)return i.RGBA_INTEGER;if(n===bl||n===wl||n===El||n===Tl)if(o===Ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===El)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uu||n===Fu||n===Bu||n===Ou)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Uu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ou)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zu||n===Vu||n===ku||n===Hu||n===Gu||n===Al||n===Wu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===zu||n===Vu)return o===Ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ku)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hu)return s.COMPRESSED_R11_EAC;if(n===Gu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Al)return s.COMPRESSED_RG11_EAC;if(n===Wu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xu||n===qu||n===Yu||n===Zu||n===$u||n===Ju||n===Ku||n===ju||n===Qu||n===th||n===eh||n===nh||n===ih||n===rh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xu)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qu)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yu)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zu)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$u)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ju)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ku)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ju)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qu)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===th)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eh)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nh)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ih)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rh)return o===Ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sh||n===oh||n===ah)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===sh)return o===Ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ah)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lh||n===ch||n===Rl||n===uh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===lh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ch)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new qa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:Hb,fragmentShader:Gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qd=class extends Ji{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,p=null,g=null,x=null,b=typeof XRWebGLBinding<"u",_=new jd,y={},w=e.getContextAttributes(),m=null,u=null,v=[],f=[],C=new gt,M=null,S=null,E=new En;E.viewport=new we;let T=new En;T.viewport=new we;let A=[E,T],R=new Mu,U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let N=v[J];return N===void 0&&(N=new vo,v[J]=N),N.getTargetRaySpace()},this.getControllerGrip=function(J){let N=v[J];return N===void 0&&(N=new vo,v[J]=N),N.getGripSpace()},this.getHand=function(J){let N=v[J];return N===void 0&&(N=new vo,v[J]=N),N.getHandSpace()};function z(J){let N=f.indexOf(J.inputSource);if(N===-1)return;let lt=v[N];lt!==void 0&&(lt.update(J.inputSource,J.frame,c||o),lt.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Z);for(let J=0;J<v.length;J++){let N=f[J];N!==null&&(f[J]=null,v[J].disconnect(N))}U=null,F=null,_.reset();for(let J in y)delete y[J];if(t.setRenderTarget(m),g=null,p=null,d=null,r=null,u=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(C.width,C.height,!1),S!==null){let J=S.camera;J.fov=S.fov,J.zoom=S.zoom,J.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Z),w.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,Mt=null,xt=null;w.depth&&(xt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=w.stencil?ji:$i,Mt=w.stencil?Zr:Oi);let bt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};d=this.getBinding(),p=d.createProjectionLayer(bt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),u=new nn(p.textureWidth,p.textureHeight,{format:Jn,type:gn,depthTexture:new Ki(p.textureWidth,p.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let lt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,lt),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new nn(g.framebufferWidth,g.framebufferHeight,{format:Jn,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Vt.setContext(r),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(J){for(let N=0;N<J.removed.length;N++){let lt=J.removed[N],Mt=f.indexOf(lt);Mt>=0&&(f[Mt]=null,v[Mt].disconnect(lt))}for(let N=0;N<J.added.length;N++){let lt=J.added[N],Mt=f.indexOf(lt);if(Mt===-1){for(let bt=0;bt<v.length;bt++)if(bt>=f.length){f.push(lt),Mt=bt;break}else if(f[bt]===null){f[bt]=lt,Mt=bt;break}if(Mt===-1)break}let xt=v[Mt];xt&&xt.connect(lt)}}let H=new D,tt=new D;function q(J,N,lt){H.setFromMatrixPosition(N.matrixWorld),tt.setFromMatrixPosition(lt.matrixWorld);let Mt=H.distanceTo(tt),xt=N.projectionMatrix.elements,bt=lt.projectionMatrix.elements,pt=xt[14]/(xt[10]-1),Q=xt[14]/(xt[10]+1),nt=(xt[9]+1)/xt[5],ft=(xt[9]-1)/xt[5],ct=(xt[8]-1)/xt[0],Tt=(bt[8]+1)/bt[0],Ct=pt*ct,Rt=pt*Tt,Ut=Mt/(-ct+Tt),zt=Ut*-ct;if(N.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(zt),J.translateZ(Ut),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),xt[10]===-1)J.projectionMatrix.copy(N.projectionMatrix),J.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let k=pt+Ut,fe=Q+Ut,Yt=Ct-zt,B=Rt+(Mt-zt),P=nt*Q/fe*k,X=ft*Q/fe*k;J.projectionMatrix.makePerspective(Yt,B,P,X,k,fe),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ut(J,N){N===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(N.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let N=J.near,lt=J.far;_.texture!==null&&(_.depthNear>0&&(N=_.depthNear),_.depthFar>0&&(lt=_.depthFar)),R.near=T.near=E.near=N,R.far=T.far=E.far=lt,(U!==R.near||F!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,F=R.far),R.layers.mask=J.layers.mask|6,E.layers.mask=R.layers.mask&-5,T.layers.mask=R.layers.mask&-3;let Mt=J.parent,xt=R.cameras;ut(R,Mt);for(let bt=0;bt<xt.length;bt++)ut(xt[bt],Mt);xt.length===2?q(R,E,T):R.projectionMatrix.copy(E.projectionMatrix),S===null&&J.isPerspectiveCamera&&(S={camera:J,fov:J.fov,zoom:J.zoom}),dt(J,R,Mt)};function dt(J,N,lt){lt===null?J.matrix.copy(N.matrixWorld):(J.matrix.copy(lt.matrixWorld),J.matrix.invert(),J.matrix.multiply(N.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(N.projectionMatrix),J.projectionMatrixInverse.copy(N.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=go*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(J){l=J,p!==null&&(p.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(R)},this.getCameraTexture=function(J){return y[J]};let Et=null;function St(J,N){if(h=N.getViewerPose(c||o),x=N,h!==null){let lt=h.views;g!==null&&(t.setRenderTargetFramebuffer(u,g.framebuffer),t.setRenderTarget(u));let Mt=!1;lt.length!==R.cameras.length&&(R.cameras.length=0,Mt=!0);for(let Q=0;Q<lt.length;Q++){let nt=lt[Q],ft=null;if(g!==null)ft=g.getViewport(nt);else{let Tt=d.getViewSubImage(p,nt);ft=Tt.viewport,Q===0&&(t.setRenderTargetTextures(u,Tt.colorTexture,Tt.depthStencilTexture),t.setRenderTarget(u))}let ct=A[Q];ct===void 0&&(ct=new En,ct.layers.enable(Q),ct.viewport=new we,A[Q]=ct),ct.matrix.fromArray(nt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(nt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(ft.x,ft.y,ft.width,ft.height),Q===0&&(R.matrix.copy(ct.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Mt===!0&&R.cameras.push(ct)}let xt=r.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let Q=d.getDepthInformation(lt[0]);Q&&Q.isValid&&Q.texture&&_.init(Q,r.renderState)}if(xt&&xt.includes("camera-access")&&b){t.state.unbindTexture(),d=n.getBinding();for(let Q=0;Q<lt.length;Q++){let nt=lt[Q].camera;if(nt){let ft=y[nt];ft||(ft=new qa,y[nt]=ft);let ct=d.getCameraImage(nt);ft.sourceTexture=ct}}}}for(let lt=0;lt<v.length;lt++){let Mt=f[lt],xt=v[lt];Mt!==null&&xt!==void 0&&xt.update(Mt,N,c||o)}Et&&Et(J,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),x=null}let Vt=new g0;Vt.setAnimationLoop(St),this.setAnimationLoop=function(J){Et=J},this.dispose=function(){}}},Wb=new Wt,S0=new ce;S0.set(-1,0,0,0,1,0,0,0,1);function Xb(i,t){function e(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function n(_,y){y.color.getRGB(_.fogColor.value,Pd(i)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function r(_,y,w,m,u){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?s(_,y):y.isMeshLambertMaterial?(s(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(s(_,y),d(_,y)):y.isMeshPhongMaterial?(s(_,y),h(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(s(_,y),p(_,y),y.isMeshPhysicalMaterial&&g(_,y,u)):y.isMeshMatcapMaterial?(s(_,y),x(_,y)):y.isMeshDepthMaterial?s(_,y):y.isMeshDistanceMaterial?(s(_,y),b(_,y)):y.isMeshNormalMaterial?s(_,y):y.isLineBasicMaterial?(o(_,y),y.isLineDashedMaterial&&a(_,y)):y.isPointsMaterial?l(_,y,w,m):y.isSpriteMaterial?c(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function s(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,e(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,e(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===ln&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,e(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===ln&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,e(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,e(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);let w=t.get(y),m=w.envMap,u=w.envMapRotation;m&&(_.envMap.value=m,_.envMapRotation.value.setFromMatrix4(Wb.makeRotationFromEuler(u)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(S0),_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,_.aoMapTransform))}function o(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,e(y.map,_.mapTransform))}function a(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function l(_,y,w,m){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*w,_.scale.value=m*.5,y.map&&(_.map.value=y.map,e(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function c(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,e(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function h(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function d(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function p(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function g(_,y,w){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ln&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.retroreflectivity>0&&(_.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,y){y.matcap&&(_.matcap.value=y.matcap)}function b(_,y){let w=t.get(y).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function qb(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,v){let f=v.program;n.uniformBlockBinding(u,f)}function c(u,v){let f=r[u.id];f===void 0&&(_(u),f=h(u),r[u.id]=f,u.addEventListener("dispose",w));let C=v.program;n.updateUBOMapping(u,C);let M=t.render.frame;s[u.id]!==M&&(p(u),s[u.id]=M)}function h(u){let v=d();u.__bindingPointIndex=v;let f=i.createBuffer(),C=u.__size,M=u.usage;return i.bindBuffer(i.UNIFORM_BUFFER,f),i.bufferData(i.UNIFORM_BUFFER,C,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,f),f}function d(){for(let u=0;u<a;u++)if(o.indexOf(u)===-1)return o.push(u),u;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(u){let v=r[u.id],f=u.uniforms,C=u.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let M=0,S=f.length;M<S;M++){let E=f[M];if(Array.isArray(E))for(let T=0,A=E.length;T<A;T++)g(E[T],M,T,C);else g(E,M,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(u,v,f,C){if(b(u,v,f,C)===!0){let M=u.__offset,S=u.value;if(Array.isArray(S)){let E=0;for(let T=0;T<S.length;T++){let A=S[T],R=y(A);x(A,u.__data,E),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(E+=R.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(S,u.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,u.__data)}}function x(u,v,f){typeof u=="number"||typeof u=="boolean"?v[0]=u:u.isMatrix3?(v[0]=u.elements[0],v[1]=u.elements[1],v[2]=u.elements[2],v[3]=0,v[4]=u.elements[3],v[5]=u.elements[4],v[6]=u.elements[5],v[7]=0,v[8]=u.elements[6],v[9]=u.elements[7],v[10]=u.elements[8],v[11]=0):ArrayBuffer.isView(u)?v.set(new u.constructor(u.buffer,u.byteOffset,v.length)):u.toArray(v,f)}function b(u,v,f,C){let M=u.value,S=v+"_"+f;if(C[S]===void 0)return typeof M=="number"||typeof M=="boolean"?C[S]=M:ArrayBuffer.isView(M)?C[S]=M.slice():C[S]=M.clone(),!0;{let E=C[S];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return C[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(E.equals(M)===!1)return E.copy(M),!0}}return!1}function _(u){let v=u.uniforms,f=0,C=16;for(let S=0,E=v.length;S<E;S++){let T=Array.isArray(v[S])?v[S]:[v[S]];for(let A=0,R=T.length;A<R;A++){let U=T[A],F=Array.isArray(U.value)?U.value:[U.value];for(let z=0,V=F.length;z<V;z++){let Z=F[z],H=y(Z),tt=f%C,q=tt%H.boundary,ut=tt+q;f+=q,ut!==0&&C-ut<H.storage&&(f+=C-ut),U.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=f,f+=H.storage}}}let M=f%C;return M>0&&(f+=C-M),u.__size=f,u.__cache={},this}function y(u){let v={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(v.boundary=4,v.storage=4):u.isVector2?(v.boundary=8,v.storage=8):u.isVector3||u.isColor?(v.boundary=16,v.storage=12):u.isVector4?(v.boundary=16,v.storage=16):u.isMatrix3?(v.boundary=48,v.storage=48):u.isMatrix4?(v.boundary=64,v.storage=64):u.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(u)?(v.boundary=16,v.storage=u.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",u),v}function w(u){let v=u.target;v.removeEventListener("dispose",w);let f=o.indexOf(v.__bindingPointIndex);o.splice(f,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(let u in r)i.deleteBuffer(r[u]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}var Yb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qi=null;function Zb(){return Qi===null&&(Qi=new xr(Yb,16,16,$r,Mn),Qi.name="DFG_LUT",Qi.minFilter=Cn,Qi.magFilter=Cn,Qi.wrapS=Yi,Qi.wrapT=Yi,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}var Dl=class{constructor(t={}){let{canvas:e=Bg(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:g=gn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;let b=g,_=new Set([Nu,Lu,Du]),y=new Set([gn,Oi,Po,Zr,Cu,Pu]),w=new Uint32Array(4),m=new Int32Array(4),u=new D,v=null,f=null,C=[],M=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,T=!1,A=null,R=null,U=null,F=null;this._outputColorSpace=Rn;let z=0,V=0,Z=null,H=-1,tt=null,q=new we,ut=new we,dt=null,Et=new ee(0),St=0,Vt=e.width,J=e.height,N=1,lt=null,Mt=null,xt=new we(0,0,Vt,J),bt=new we(0,0,Vt,J),pt=!1,Q=new Mo,nt=!1,ft=!1,ct=new Wt,Tt=new D,Ct=new we,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function zt(){return Z===null?N:1}let k=n;function fe(L,Y){return e.getContext(L,Y)}let Yt,B,P,X,K,st,wt,At,ht,mt,Dt,te,Pt,It,Zt,ne,re,$,Lt,at,Ft,Bt,yt;try{let L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",An,!1),k===null){let Y="webgl2";if(k=fe(Y,L),k===null)throw fe(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(L){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",An,!1),se("WebGLRenderer: "+L.message),L}function Xt(){Yt=new e1(k),Yt.init(),Ft=new kb(k,Yt),B=new XS(k,Yt,t,Ft),P=new zb(k,Yt),B.reversedDepthBuffer&&p&&P.buffers.depth.setReversed(!0),R=k.createFramebuffer(),U=k.createFramebuffer(),F=k.createFramebuffer(),X=new r1(k),K=new Eb,st=new Vb(k,Yt,P,K,B,Ft,X),wt=new t1(E),At=new oy(k),Bt=new GS(k,At),ht=new n1(k,At,X,Bt),mt=new o1(k,ht,At,Bt,X),$=new s1(k,B,st),Zt=new qS(K),Dt=new wb(E,wt,Yt,B,Bt,Zt),te=new Xb(E,K),Pt=new Ab,It=new Lb(Yt),re=new HS(E,wt,P,mt,x,l),ne=new Ob(E,mt,B),yt=new qb(k,X,B,P),Lt=new WS(k,Yt,X),at=new i1(k,Yt,X),X.programs=Dt.programs,E.capabilities=B,E.extensions=Yt,E.properties=K,E.renderLists=Pt,E.shadowMap=ne,E.state=P,E.info=X}b!==gn&&(S=new l1(b,e.width,e.height,a,r,s));let Qt=new Qd(E,k);this.xr=Qt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let L=Yt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Yt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(L){L!==void 0&&(N=L,this.setSize(Vt,J,!1))},this.getSize=function(L){return L.set(Vt,J)},this.setSize=function(L,Y,rt=!0){if(Qt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Vt=L,J=Y,e.width=Math.floor(L*N),e.height=Math.floor(Y*N),rt===!0&&(e.style.width=L+"px",e.style.height=Y+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,L,Y)},this.getDrawingBufferSize=function(L){return L.set(Vt*N,J*N).floor()},this.setDrawingBufferSize=function(L,Y,rt){Vt=L,J=Y,N=rt,e.width=Math.floor(L*rt),e.height=Math.floor(Y*rt),this.setViewport(0,0,L,Y)},this.setEffects=function(L){if(b===gn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let Y=0;Y<L.length;Y++)if(L[Y].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(q)},this.getViewport=function(L){return L.copy(xt)},this.setViewport=function(L,Y,rt,et){L.isVector4?xt.set(L.x,L.y,L.z,L.w):xt.set(L,Y,rt,et),P.viewport(q.copy(xt).multiplyScalar(N).round())},this.getScissor=function(L){return L.copy(bt)},this.setScissor=function(L,Y,rt,et){L.isVector4?bt.set(L.x,L.y,L.z,L.w):bt.set(L,Y,rt,et),P.scissor(ut.copy(bt).multiplyScalar(N).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(L){P.setScissorTest(pt=L)},this.setOpaqueSort=function(L){lt=L},this.setTransparentSort=function(L){Mt=L},this.getClearColor=function(L){return L.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(L=!0,Y=!0,rt=!0){let et=0;if(L){let j=!1;if(Z!==null){let it=Z.texture.format;j=_.has(it)}if(j){let it=Z.texture.type,qt=y.has(it),Ot=re.getClearColor(),jt=re.getClearAlpha(),ie=Ot.r,pe=Ot.g,ge=Ot.b;qt?(w[0]=ie,w[1]=pe,w[2]=ge,w[3]=jt,k.clearBufferuiv(k.COLOR,0,w)):(m[0]=ie,m[1]=pe,m[2]=ge,m[3]=jt,k.clearBufferiv(k.COLOR,0,m))}else et|=k.COLOR_BUFFER_BIT}Y&&(et|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(et|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&k.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),A=L},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",An,!1),re.dispose(),Pt.dispose(),It.dispose(),K.dispose(),wt.dispose(),mt.dispose(),Bt.dispose(),yt.dispose(),Dt.dispose(),Qt.dispose(),Qt.removeEventListener("sessionstart",Er),Qt.removeEventListener("sessionend",Vs),ti.stop()};function xe(L){L.preventDefault(),Ua("WebGLRenderer: Context Lost."),T=!0}function be(){Ua("WebGLRenderer: Context Restored."),T=!1;let L=X.autoReset,Y=ne.enabled,rt=ne.autoUpdate,et=ne.needsUpdate,j=ne.type;Xt(),X.autoReset=L,ne.enabled=Y,ne.autoUpdate=rt,ne.needsUpdate=et,ne.type=j}function An(L){se("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function le(L){let Y=L.target;Y.removeEventListener("dispose",le),ss(Y)}function ss(L){Os(L),K.remove(L)}function Os(L){let Y=K.get(L).programs;Y!==void 0&&(Y.forEach(function(rt){Dt.releaseProgram(rt)}),L.isShaderMaterial&&Dt.releaseShaderCache(L))}this.renderBufferDirect=function(L,Y,rt,et,j,it){Y===null&&(Y=Rt);let qt=j.isMesh&&j.matrixWorld.determinantAffine()<0,Ot=xa(L,Y,rt,et,j);P.setMaterial(et,qt);let jt=rt.index,ie=1;if(et.wireframe===!0){if(jt=ht.getWireframeAttribute(rt),jt===void 0)return;ie=2}let pe=rt.drawRange,ge=rt.attributes.position,Kt=pe.start*ie,Pe=(pe.start+pe.count)*ie;it!==null&&(Kt=Math.max(Kt,it.start*ie),Pe=Math.min(Pe,(it.start+it.count)*ie)),jt!==null?(Kt=Math.max(Kt,0),Pe=Math.min(Pe,jt.count)):ge!=null&&(Kt=Math.max(Kt,0),Pe=Math.min(Pe,ge.count));let on=Pe-Kt;if(on<0||on===1/0)return;Bt.setup(j,et,Ot,rt,jt);let Ze,Ge=Lt;if(jt!==null&&(Ze=At.get(jt),Ge=at,Ge.setIndex(Ze)),j.isMesh)et.wireframe===!0?(P.setLineWidth(et.wireframeLinewidth*zt()),Ge.setMode(k.LINES)):Ge.setMode(k.TRIANGLES);else if(j.isLine){let _n=et.linewidth;_n===void 0&&(_n=1),P.setLineWidth(_n*zt()),j.isLineSegments?Ge.setMode(k.LINES):j.isLineLoop?Ge.setMode(k.LINE_LOOP):Ge.setMode(k.LINE_STRIP)}else j.isPoints?Ge.setMode(k.POINTS):j.isSprite&&Ge.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))Ge.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let _n=j._multiDrawStarts,kt=j._multiDrawCounts,hn=j._multiDrawCount,Ee=jt?At.get(jt).bytesPerElement:1,kn=K.get(et).currentProgram.getUniforms();for(let Zn=0;Zn<hn;Zn++)kn.setValue(k,"_gl_DrawID",Zn),Ge.render(_n[Zn]/Ee,kt[Zn])}else if(j.isInstancedMesh)Ge.renderInstances(Kt,on,j.count);else if(rt.isInstancedBufferGeometry){let _n=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,kt=Math.min(rt.instanceCount,_n);Ge.renderInstances(Kt,on,kt)}else Ge.render(Kt,on)};function zs(L,Y,rt,et){A!==null&&L.isNodeMaterial&&A.setObject(et,L),nt===!0&&Zt.setState(L,rt,!1),L.transparent===!0&&L.side===Tn&&L.forceSinglePass===!1?(L.side=ln,L.needsUpdate=!0,Tr(L,Y,et),L.side=ci,L.needsUpdate=!0,Tr(L,Y,et),L.side=Tn):Tr(L,Y,et)}this.compile=function(L,Y,rt=null){rt===null&&(rt=L),A!==null&&A.renderStart(L,Y,rt),f=It.get(rt),f.init(Y),M.push(f),rt.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(f.pushLight(j),j.castShadow&&f.pushShadow(j))}),L!==rt&&L.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(f.pushLight(j),j.castShadow&&f.pushShadow(j))}),f.setupLights(),A!==null&&A.updateLights(f.state.lightsArray),ft=this.localClippingEnabled,nt=Zt.init(this.clippingPlanes,ft),nt===!0&&Zt.setGlobalState(this.clippingPlanes,Y),A!==null&&ne.render(f.state.shadowsArray,rt,Y);let et=new Set;return L.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let it=j.material;if(it)if(Array.isArray(it))for(let qt=0;qt<it.length;qt++){let Ot=it[qt];zs(Ot,rt,Y,j),et.add(Ot)}else zs(it,rt,Y,j),et.add(it)}),f=M.pop(),A!==null&&A.renderEnd(),et},this.compileAsync=function(L,Y,rt=null){let et=this.compile(L,Y,rt);return new Promise(j=>{function it(){if(et.forEach(function(qt){let jt=K.get(qt).currentProgram;(jt===void 0||jt.isReady())&&et.delete(qt)}),et.size===0){j(L);return}setTimeout(it,10)}Yt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let sr=null;function mm(L){sr&&sr(L)}function Er(){ti.stop()}function Vs(){ti.start()}let ti=new g0;ti.setAnimationLoop(mm),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(L){sr=L,Qt.setAnimationLoop(L),L===null?ti.stop():ti.start()},Qt.addEventListener("sessionstart",Er),Qt.addEventListener("sessionend",Vs),this.render=function(L,Y){if(Y!==void 0&&Y.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A!==null&&A.renderStart(L,Y);let rt=Qt.enabled===!0&&Qt.isPresenting===!0,et=S!==null&&(Z===null||rt)&&S.begin(E,Z);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Qt.enabled===!0&&Qt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Qt.cameraAutoUpdate===!0&&Qt.updateCamera(Y),Y=Qt.getCamera()),L.isScene===!0&&L.onBeforeRender(E,L,Y,Z),f=It.get(L,M.length),f.init(Y),f.state.textureUnits=st.getTextureUnits(),M.push(f),ct.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(ct,Ui,Y.reversedDepth),ft=this.localClippingEnabled,nt=Zt.init(this.clippingPlanes,ft),v=Pt.get(L,C.length),v.init(),C.push(v),Qt.enabled===!0&&Qt.isPresenting===!0){let qt=E.xr.getDepthSensingMesh();qt!==null&&pa(qt,Y,-1/0,E.sortObjects)}pa(L,Y,0,E.sortObjects),v.finish(),A!==null&&A.updateLights(f.state.lightsArray),E.sortObjects===!0&&v.sort(lt,Mt),Ut=Qt.enabled===!1||Qt.isPresenting===!1||Qt.hasDepthSensing()===!1,Ut&&re.addToRenderList(v,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Zt.beginShadows();let j=f.state.shadowsArray;if(ne.render(j,L,Y),nt===!0&&Zt.endShadows(),(et&&S.hasRenderPass())===!1){let qt=v.opaque,Ot=v.transmissive;if(f.setupLights(),Y.isArrayCamera){let jt=Y.cameras;if(Ot.length>0)for(let ie=0,pe=jt.length;ie<pe;ie++){let ge=jt[ie];Vn(qt,Ot,L,ge)}Ut&&re.render(L);for(let ie=0,pe=jt.length;ie<pe;ie++){let ge=jt[ie];or(v,L,ge,ge.viewport)}}else Ot.length>0&&Vn(qt,Ot,L,Y),Ut&&re.render(L),or(v,L,Y)}Z!==null&&V===0&&(st.updateMultisampleRenderTarget(Z),st.updateRenderTargetMipmap(Z)),et&&S.end(E),L.isScene===!0&&L.onAfterRender(E,L,Y),Bt.resetDefaultState(),H=-1,tt=null,M.pop(),M.length>0?(f=M[M.length-1],st.setTextureUnits(f.state.textureUnits),nt===!0&&Zt.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,C.pop(),C.length>0?v=C[C.length-1]:v=null,A!==null&&A.renderEnd()};function pa(L,Y,rt,et){if(L.visible===!1)return;if(L.layers.test(Y.layers)){if(L.isGroup)rt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Y);else if(L.isLightProbeGrid)f.pushLightProbeGrid(L);else if(L.isLight)f.pushLight(L),L.castShadow&&f.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(Q)){et&&Ct.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ct);let qt=mt.update(L),Ot=L.material;Ot.visible&&v.push(L,qt,Ot,rt,Ct.z,null,Y)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(Q))){let qt=mt.update(L),Ot=L.material;if(et&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ct.copy(L.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Ct.copy(qt.boundingSphere.center)),Ct.applyMatrix4(L.matrixWorld).applyMatrix4(ct)),Array.isArray(Ot)){let jt=qt.groups;for(let ie=0,pe=jt.length;ie<pe;ie++){let ge=jt[ie],Kt=Ot[ge.materialIndex];Kt&&Kt.visible&&v.push(L,qt,Kt,rt,Ct.z,ge,Y)}}else Ot.visible&&v.push(L,qt,Ot,rt,Ct.z,null,Y)}}let it=L.children;for(let qt=0,Ot=it.length;qt<Ot;qt++)pa(it[qt],Y,rt,et)}function or(L,Y,rt,et){let{opaque:j,transmissive:it,transparent:qt}=L;f.setupLightsView(rt),nt===!0&&Zt.setGlobalState(E.clippingPlanes,rt),et&&P.viewport(q.copy(et)),j.length>0&&ar(j,Y,rt),it.length>0&&ar(it,Y,rt),qt.length>0&&ar(qt,Y,rt),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Vn(L,Y,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(f.state.transmissionRenderTarget[et.id]===void 0){let Kt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");f.state.transmissionRenderTarget[et.id]=new nn(1,1,{generateMipmaps:!0,type:Kt?Mn:gn,minFilter:Yr,samples:Math.max(4,B.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Se.workingColorSpace})}let it=f.state.transmissionRenderTarget[et.id],qt=et.viewport||q;it.setSize(qt.z*E.transmissionResolutionScale,qt.w*E.transmissionResolutionScale);let Ot=E.getRenderTarget(),jt=E.getActiveCubeFace(),ie=E.getActiveMipmapLevel();E.setRenderTarget(it),E.getClearColor(Et),St=E.getClearAlpha(),St<1&&E.setClearColor(16777215,.5),E.clear(),Ut&&re.render(rt);let pe=E.toneMapping;E.toneMapping=Bi;let ge=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),f.setupLightsView(et),nt===!0&&Zt.setGlobalState(E.clippingPlanes,et),ar(L,rt,et),st.updateMultisampleRenderTarget(it),st.updateRenderTargetMipmap(it),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Pe=0,on=Y.length;Pe<on;Pe++){let Ze=Y[Pe],{object:Ge,geometry:_n,material:kt,group:hn}=Ze;if(kt.side===Tn&&Ge.layers.test(et.layers)){let Ee=kt.side;kt.side=ln,kt.needsUpdate=!0,ma(Ge,rt,et,_n,kt,hn),kt.side=Ee,kt.needsUpdate=!0,Kt=!0}}Kt===!0&&(st.updateMultisampleRenderTarget(it),st.updateRenderTargetMipmap(it))}E.setRenderTarget(Ot,jt,ie),E.setClearColor(Et,St),ge!==void 0&&(et.viewport=ge),E.toneMapping=pe}function ar(L,Y,rt){let et=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,it=L.length;j<it;j++){let qt=L[j],{object:Ot,geometry:jt,group:ie}=qt,pe=qt.material;pe.allowOverride===!0&&et!==null&&(pe=et),Ot.layers.test(rt.layers)&&ma(Ot,Y,rt,jt,pe,ie)}}function ma(L,Y,rt,et,j,it){A!==null&&j.isNodeMaterial&&A.setObject(L,j),L.onBeforeRender(E,Y,rt,et,j,it),L.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(E,Y,rt,et,L,it),j.transparent===!0&&j.side===Tn&&j.forceSinglePass===!1?(j.side=ln,j.needsUpdate=!0,E.renderBufferDirect(rt,Y,et,j,L,it),j.side=ci,j.needsUpdate=!0,E.renderBufferDirect(rt,Y,et,j,L,it),j.side=Tn):E.renderBufferDirect(rt,Y,et,j,L,it),L.onAfterRender(E,Y,rt,et,j,it)}function Tr(L,Y,rt){Y.isScene!==!0&&(Y=Rt);let et=K.get(L),j=f.state.lights,it=f.state.shadowsArray,qt=j.state.version,Ot=Dt.getParameters(L,j.state,it,Y,rt,f.state.lightProbeGridArray),jt=Dt.getProgramCacheKey(Ot),ie=et.programs;et.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?Y.environment:null,et.fog=Y.fog;let pe=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;et.envMap=wt.get(L.envMap||et.environment,pe),et.envMapRotation=et.environment!==null&&L.envMap===null?Y.environmentRotation:L.envMapRotation,ie===void 0&&(L.addEventListener("dispose",le),ie=new Map,et.programs=ie);let ge=ie.get(jt);if(ge!==void 0){if(et.currentProgram===ge&&et.lightsStateVersion===qt)return ks(L,Ot),ge}else Ot.uniforms=Dt.getUniforms(L),A!==null&&L.isNodeMaterial&&A.build(L,rt,Ot),L.onBeforeCompile(Ot,E),ge=Dt.acquireProgram(Ot,jt),ie.set(jt,ge),et.uniforms=Ot.uniforms;let Kt=et.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Kt.clippingPlanes=Zt.uniform),ks(L,Ot),et.needsLights=os(L),et.lightsStateVersion=qt,et.needsLights&&(Kt.ambientLightColor.value=j.state.ambient,Kt.lightProbe.value=j.state.probe,Kt.sunLights.value=j.state.sun,Kt.sunLightShadows.value=j.state.sunShadow,Kt.directionalLights.value=j.state.directional,Kt.directionalLightShadows.value=j.state.directionalShadow,Kt.spotLights.value=j.state.spot,Kt.spotLightShadows.value=j.state.spotShadow,Kt.rectAreaLights.value=j.state.rectArea,Kt.ltc_1.value=j.state.rectAreaLTC1,Kt.ltc_2.value=j.state.rectAreaLTC2,Kt.pointLights.value=j.state.point,Kt.pointLightShadows.value=j.state.pointShadow,Kt.hemisphereLights.value=j.state.hemi,Kt.sunShadowMatrix.value=j.state.sunShadowMatrix,Kt.sunShadowCascade.value=j.state.sunShadowCascade,Kt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Kt.spotLightMatrix.value=j.state.spotLightMatrix,Kt.spotLightMap.value=j.state.spotLightMap,Kt.pointShadowMatrix.value=j.state.pointShadowMatrix),et.lightProbeGrid=f.state.lightProbeGridArray.length>0,et.currentProgram=ge,et.uniformsList=null,ge}function ga(L){if(L.uniformsList===null){let Y=L.currentProgram.getUniforms();L.uniformsList=No.seqWithValue(Y.seq,L.uniforms)}return L.uniformsList}function ks(L,Y){let rt=K.get(L);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function lr(L,Y){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;u.setFromMatrixPosition(Y.matrixWorld);for(let rt=0,et=L.length;rt<et;rt++){let j=L[rt];if(j.texture!==null&&j.boundingBox.containsPoint(u))return j}return null}function xa(L,Y,rt,et,j){Y.isScene!==!0&&(Y=Rt),st.resetTextureUnits();let it=Y.fog,qt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?Y.environment:null,Ot=Z===null?E.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Se.workingColorSpace,jt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,ie=wt.get(et.envMap||qt,jt),pe=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ge=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Kt=!!rt.morphAttributes.position,Pe=!!rt.morphAttributes.normal,on=!!rt.morphAttributes.color,Ze=Bi;et.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ze=E.toneMapping);let Ge=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,_n=Ge!==void 0?Ge.length:0,kt=K.get(et),hn=f.state.lights;if(nt===!0&&(ft===!0||L!==tt)){let We=L===tt&&et.id===H;Zt.setState(et,L,We)}let Ee=!1;et.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==hn.state.version||kt.outputColorSpace!==Ot||j.isBatchedMesh&&kt.batching===!1||!j.isBatchedMesh&&kt.batching===!0||j.isBatchedMesh&&kt.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&kt.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&kt.instancing===!1||!j.isInstancedMesh&&kt.instancing===!0||j.isSkinnedMesh&&kt.skinning===!1||!j.isSkinnedMesh&&kt.skinning===!0||j.isInstancedMesh&&kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&kt.instancingMorph===!1&&j.morphTexture!==null||kt.envMap!==ie||et.fog===!0&&kt.fog!==it||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Zt.numPlanes||kt.numIntersection!==Zt.numIntersection)||kt.vertexAlphas!==pe||kt.vertexTangents!==ge||kt.morphTargets!==Kt||kt.morphNormals!==Pe||kt.morphColors!==on||kt.toneMapping!==Ze||kt.morphTargetsCount!==_n||!!kt.lightProbeGrid!=f.state.lightProbeGridArray.length>0)&&(Ee=!0):(Ee=!0,kt.__version=et.version);let kn=kt.currentProgram;Ee===!0&&(kn=Tr(et,Y,j),A&&et.isNodeMaterial&&A.onUpdateProgram(et,kn,kt));let Zn=!1,cr=!1,$n=!1,Ne=kn.getUniforms(),en=kt.uniforms;if(P.useProgram(kn.program)&&(Zn=!0,cr=!0,$n=!0),et.id!==H&&(H=et.id,cr=!0),kt.needsLights){let We=lr(f.state.lightProbeGridArray,j);kt.lightProbeGrid!==We&&(kt.lightProbeGrid=We,cr=!0)}if(Zn||tt!==L){P.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Ne.setValue(k,"projectionMatrix",L.projectionMatrix),Ne.setValue(k,"viewMatrix",L.matrixWorldInverse);let ni=Ne.map.cameraPosition;ni!==void 0&&ni.setValue(k,Tt.setFromMatrixPosition(L.matrixWorld)),B.logarithmicDepthBuffer&&Ne.setValue(k,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ne.setValue(k,"isOrthographic",L.isOrthographicCamera===!0),tt!==L&&(tt=L,cr=!0,$n=!0)}if(kt.needsLights&&(hn.state.sunShadowMap.length>0&&Ne.setValue(k,"sunShadowMap",hn.state.sunShadowMap,st),hn.state.directionalShadowMap.length>0&&Ne.setValue(k,"directionalShadowMap",hn.state.directionalShadowMap,st),hn.state.spotShadowMap.length>0&&Ne.setValue(k,"spotShadowMap",hn.state.spotShadowMap,st),hn.state.pointShadowMap.length>0&&Ne.setValue(k,"pointShadowMap",hn.state.pointShadowMap,st)),j.isSkinnedMesh){Ne.setOptional(k,j,"bindMatrix"),Ne.setOptional(k,j,"bindMatrixInverse");let We=j.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Ne.setValue(k,"boneTexture",We.boneTexture,st))}j.isBatchedMesh&&(Ne.setOptional(k,j,"batchingTexture"),Ne.setValue(k,"batchingTexture",j._matricesTexture,st),Ne.setOptional(k,j,"batchingIdTexture"),Ne.setValue(k,"batchingIdTexture",j._indirectTexture,st),Ne.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&Ne.setValue(k,"batchingColorTexture",j._colorsTexture,st));let ei=rt.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&$.update(j,rt,kn),(cr||kt.receiveShadow!==j.receiveShadow)&&(kt.receiveShadow=j.receiveShadow,Ne.setValue(k,"receiveShadow",j.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&Y.environment!==null&&(en.envMapIntensity.value=Y.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Zb()),cr){if(Ne.setValue(k,"toneMappingExposure",E.toneMappingExposure),kt.needsLights&&Sf(en,$n),it&&et.fog===!0&&te.refreshFogUniforms(en,it),te.refreshMaterialUniforms(en,et,N,J,f.state.transmissionRenderTarget[L.id]),kt.needsLights&&kt.lightProbeGrid){let We=kt.lightProbeGrid;en.probesSH.value=We.texture,en.probesMin.value.copy(We.boundingBox.min),en.probesMax.value.copy(We.boundingBox.max),en.probesResolution.value.copy(We.resolution)}No.upload(k,ga(kt),en,st)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(No.upload(k,ga(kt),en,st),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ne.setValue(k,"center",j.center),Ne.setValue(k,"modelViewMatrix",j.modelViewMatrix),Ne.setValue(k,"normalMatrix",j.normalMatrix),Ne.setValue(k,"modelMatrix",j.matrixWorld),et.uniformsGroups!==void 0){let We=et.uniformsGroups;for(let ni=0,Be=We.length;ni<Be;ni++){let Hs=We[ni];yt.update(Hs,kn),yt.bind(Hs,kn)}}return kn}function Sf(L,Y){L.ambientLightColor.needsUpdate=Y,L.lightProbe.needsUpdate=Y,L.sunLights.needsUpdate=Y,L.sunLightShadows.needsUpdate=Y,L.directionalLights.needsUpdate=Y,L.directionalLightShadows.needsUpdate=Y,L.pointLights.needsUpdate=Y,L.pointLightShadows.needsUpdate=Y,L.spotLights.needsUpdate=Y,L.spotLightShadows.needsUpdate=Y,L.rectAreaLights.needsUpdate=Y,L.hemisphereLights.needsUpdate=Y}function os(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(L,Y,rt){let et=K.get(L);et.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),K.get(L.texture).__webglTexture=Y,K.get(L.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Y){let rt=K.get(L);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(L,Y=0,rt=0){Z=L,z=Y,V=rt;let et=null,j=!1,it=!1;if(L){let Ot=K.get(L);if(Ot.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(k.FRAMEBUFFER,Ot.__webglFramebuffer),q.copy(L.viewport),ut.copy(L.scissor),dt=L.scissorTest,P.viewport(q),P.scissor(ut),P.setScissorTest(dt),H=-1;return}else if(Ot.__webglFramebuffer===void 0)st.setupRenderTarget(L);else if(Ot.__hasExternalTextures)st.rebindTextures(L,K.get(L.texture).__webglTexture,K.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let pe=L.depthTexture;if(Ot.__boundDepthTexture!==pe){if(pe!==null&&K.has(pe)&&(L.width!==pe.image.width||L.height!==pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(L)}}let jt=L.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(it=!0);let ie=K.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ie[Y])?et=ie[Y][rt]:et=ie[Y],j=!0):L.samples>0&&st.useMultisampledRTT(L)===!1?et=K.get(L).__webglMultisampledFramebuffer:Array.isArray(ie)?et=ie[rt]:et=ie,q.copy(L.viewport),ut.copy(L.scissor),dt=L.scissorTest}else q.copy(xt).multiplyScalar(N).floor(),ut.copy(bt).multiplyScalar(N).floor(),dt=pt;if(rt!==0&&(et=R),P.bindFramebuffer(k.FRAMEBUFFER,et)&&P.drawBuffers(L,et),P.viewport(q),P.scissor(ut),P.setScissorTest(dt),j){let Ot=K.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ot.__webglTexture,rt)}else if(it){let Ot=Y;for(let jt=0;jt<L.textures.length;jt++){let ie=K.get(L.textures[jt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+jt,ie.__webglTexture,rt,Ot)}}else if(L!==null&&rt!==0){let Ot=K.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ot.__webglTexture,rt)}H=-1};function Ai(L){let Y=K.get(L);return(Y.__readFormat!==L.format||Y.__readType!==L.type)&&(Y.__readFormat=L.format,Y.__readType=L.type,Y.__formatReadable=B.textureFormatReadable(L.format),Y.__typeReadable=B.textureTypeReadable(L.type)),Y}this.readRenderTargetPixels=function(L,Y,rt,et,j,it,qt,Ot=0){if(!(L&&L.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=K.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&qt!==void 0&&(jt=jt[qt]),jt){P.bindFramebuffer(k.FRAMEBUFFER,jt);try{let ie=L.textures[Ot],pe=ie.format,ge=ie.type;L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ot);let Kt=Ai(ie);if(Kt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=L.width-et&&rt>=0&&rt<=L.height-j&&k.readPixels(Y,rt,et,j,Ft.convert(pe),Ft.convert(ge),it)}finally{let ie=Z!==null?K.get(Z).__webglFramebuffer:null;P.bindFramebuffer(k.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(L,Y,rt,et,j,it,qt,Ot=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=K.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&qt!==void 0&&(jt=jt[qt]),jt)if(Y>=0&&Y<=L.width-et&&rt>=0&&rt<=L.height-j){P.bindFramebuffer(k.FRAMEBUFFER,jt);let ie=L.textures[Ot],pe=ie.format,ge=ie.type;L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ot);let Kt=Ai(ie);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Pe),k.bufferData(k.PIXEL_PACK_BUFFER,it.byteLength,k.STREAM_READ),k.readPixels(Y,rt,et,j,Ft.convert(pe),Ft.convert(ge),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let on=Z!==null?K.get(Z).__webglFramebuffer:null;P.bindFramebuffer(k.FRAMEBUFFER,on);let Ze=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await zg(k,Ze,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Pe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,it),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Pe),k.deleteSync(Ze),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Y=null,rt=0){let et=Math.pow(2,-rt),j=Math.floor(L.image.width*et),it=Math.floor(L.image.height*et),qt=Y!==null?Y.x:0,Ot=Y!==null?Y.y:0;st.setTexture2D(L,0),k.copyTexSubImage2D(k.TEXTURE_2D,rt,0,0,qt,Ot,j,it),P.unbindTexture()},this.copyTextureToTexture=function(L,Y,rt=null,et=null,j=0,it=0){let qt,Ot,jt,ie,pe,ge,Kt,Pe,on,Ze=L.isCompressedTexture?L.mipmaps[it]:L.image;if(rt!==null)qt=rt.max.x-rt.min.x,Ot=rt.max.y-rt.min.y,jt=rt.isBox3?rt.max.z-rt.min.z:1,ie=rt.min.x,pe=rt.min.y,ge=rt.isBox3?rt.min.z:0;else{let en=Math.pow(2,-j);qt=Math.floor(Ze.width*en),Ot=Math.floor(Ze.height*en),L.isDataArrayTexture?jt=Ze.depth:L.isData3DTexture?jt=Math.floor(Ze.depth*en):jt=1,ie=0,pe=0,ge=0}et!==null?(Kt=et.x,Pe=et.y,on=et.z):(Kt=0,Pe=0,on=0);let Ge=Ft.convert(Y.format),_n=Ft.convert(Y.type),kt;Y.isData3DTexture?(st.setTexture3D(Y,0),kt=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(st.setTexture2DArray(Y,0),kt=k.TEXTURE_2D_ARRAY):(st.setTexture2D(Y,0),kt=k.TEXTURE_2D),P.activeTexture(k.TEXTURE0),P.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),P.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),P.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);let hn=P.getParameter(k.UNPACK_ROW_LENGTH),Ee=P.getParameter(k.UNPACK_IMAGE_HEIGHT),kn=P.getParameter(k.UNPACK_SKIP_PIXELS),Zn=P.getParameter(k.UNPACK_SKIP_ROWS),cr=P.getParameter(k.UNPACK_SKIP_IMAGES);P.pixelStorei(k.UNPACK_ROW_LENGTH,Ze.width),P.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ze.height),P.pixelStorei(k.UNPACK_SKIP_PIXELS,ie),P.pixelStorei(k.UNPACK_SKIP_ROWS,pe),P.pixelStorei(k.UNPACK_SKIP_IMAGES,ge);let $n=L.isDataArrayTexture||L.isData3DTexture,Ne=Y.isDataArrayTexture||Y.isData3DTexture;if(L.isDepthTexture){let en=K.get(L),ei=K.get(Y),We=K.get(en.__renderTarget),ni=K.get(ei.__renderTarget);P.bindFramebuffer(k.READ_FRAMEBUFFER,We.__webglFramebuffer),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Be=0;Be<jt;Be++)$n&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,K.get(L).__webglTexture,j,ge+Be),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,K.get(Y).__webglTexture,it,on+Be)),k.blitFramebuffer(ie,pe,qt,Ot,Kt,Pe,qt,Ot,k.DEPTH_BUFFER_BIT,k.NEAREST);P.bindFramebuffer(k.READ_FRAMEBUFFER,null),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||L.isRenderTargetTexture||K.has(L)){let en=K.get(L),ei=K.get(Y);P.bindFramebuffer(k.READ_FRAMEBUFFER,U),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,F);for(let We=0;We<jt;We++)$n?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,en.__webglTexture,j,ge+We):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,en.__webglTexture,j),Ne?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ei.__webglTexture,it,on+We):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ei.__webglTexture,it),j!==0?k.blitFramebuffer(ie,pe,qt,Ot,Kt,Pe,qt,Ot,k.COLOR_BUFFER_BIT,k.NEAREST):Ne?k.copyTexSubImage3D(kt,it,Kt,Pe,on+We,ie,pe,qt,Ot):k.copyTexSubImage2D(kt,it,Kt,Pe,ie,pe,qt,Ot);P.bindFramebuffer(k.READ_FRAMEBUFFER,null),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ne?L.isDataTexture||L.isData3DTexture?k.texSubImage3D(kt,it,Kt,Pe,on,qt,Ot,jt,Ge,_n,Ze.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(kt,it,Kt,Pe,on,qt,Ot,jt,Ge,Ze.data):k.texSubImage3D(kt,it,Kt,Pe,on,qt,Ot,jt,Ge,_n,Ze):L.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,it,Kt,Pe,qt,Ot,Ge,_n,Ze.data):L.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,it,Kt,Pe,Ze.width,Ze.height,Ge,Ze.data):k.texSubImage2D(k.TEXTURE_2D,it,Kt,Pe,qt,Ot,Ge,_n,Ze);P.pixelStorei(k.UNPACK_ROW_LENGTH,hn),P.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ee),P.pixelStorei(k.UNPACK_SKIP_PIXELS,kn),P.pixelStorei(k.UNPACK_SKIP_ROWS,Zn),P.pixelStorei(k.UNPACK_SKIP_IMAGES,cr),it===0&&Y.generateMipmaps&&k.generateMipmap(kt),P.unbindTexture()},this.initRenderTarget=function(L){K.get(L).__webglFramebuffer===void 0&&st.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?st.setTextureCube(L,0):L.isData3DTexture?st.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?st.setTexture2DArray(L,0):st.setTexture2D(L,0),P.unbindTexture()},this.resetState=function(){z=0,V=0,Z=null,P.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}};var Fo=Math.pow(2,-24),Ll=Symbol("SKIP_GENERATION"),vh={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Ll]:!1};function $e(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Nl(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){let r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function tp(i,t){t.set(i)}function ep(i,t,e){let n,r;for(let s=0;s<3;s++){let o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function Ul(i,t,e){for(let n=0;n<3;n++){let r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Bo(i){let t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function Ae(i,t){return t[i+15]===65535}function ke(i,t){return t[i+6]}function Ye(i,t){return t[i+14]}function Ue(i){return i+8}function Fe(i,t){let e=t[i+6];return i+e*8}function Oo(i,t){return t[i+7]}function yh(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,d=1/0,p=1/0,g=1/0,x=-1/0,b=-1/0,_=-1/0,y=i.offset||0;for(let w=(t-y)*6,m=(t+e-y)*6;w<m;w+=6){let u=i[w+0],v=i[w+1],f=u-v,C=u+v;f<s&&(s=f),C>l&&(l=C),u<d&&(d=u),u>x&&(x=u);let M=i[w+2],S=i[w+3],E=M-S,T=M+S;E<o&&(o=E),T>c&&(c=T),M<p&&(p=M),M>b&&(b=M);let A=i[w+4],R=i[w+5],U=A-R,F=A+R;U<a&&(a=U),F>h&&(h=F),A<g&&(g=A),A>_&&(_=A)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=h,r[0]=d,r[1]=p,r[2]=g,r[3]=x,r[4]=b,r[5]=_}var yr=32,jb=(i,t)=>i.candidate-t.candidate,Jr=new Array(yr).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Mh=new Float32Array(6);function w0(i,t,e,n,r,s){let o=-1,a=0;if(s===0)o=Nl(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===1)o=Nl(i),o!==-1&&(a=Qb(e,n,r,o));else if(s===2){let l=Bo(i),c=1.25*r,h=e.offset||0,d=(n-h)*6,p=(n+r-h)*6;for(let g=0;g<3;g++){let x=t[g],y=(t[g+3]-x)/yr;if(r<yr/4){let w=[...Jr];w.length=r;let m=0;for(let v=d;v<p;v+=6,m++){let f=w[m];f.candidate=e[v+2*g],f.count=0;let{bounds:C,leftCacheBounds:M,rightCacheBounds:S}=f;for(let E=0;E<3;E++)S[E]=1/0,S[E+3]=-1/0,M[E]=1/0,M[E+3]=-1/0,C[E]=1/0,C[E+3]=-1/0;Ul(v,e,C)}w.sort(jb);let u=r;for(let v=0;v<u;v++){let f=w[v];for(;v+1<u&&w[v+1].candidate===f.candidate;)w.splice(v+1,1),u--}for(let v=d;v<p;v+=6){let f=e[v+2*g];for(let C=0;C<u;C++){let M=w[C];f>=M.candidate?Ul(v,e,M.rightCacheBounds):(Ul(v,e,M.leftCacheBounds),M.count++)}}for(let v=0;v<u;v++){let f=w[v],C=f.count,M=r-f.count,S=f.leftCacheBounds,E=f.rightCacheBounds,T=0;C!==0&&(T=Bo(S)/l);let A=0;M!==0&&(A=Bo(E)/l);let R=1+1.25*(T*C+A*M);R<c&&(o=g,c=R,a=f.candidate)}}else{for(let u=0;u<yr;u++){let v=Jr[u];v.count=0,v.candidate=x+y+u*y;let f=v.bounds;for(let C=0;C<3;C++)f[C]=1/0,f[C+3]=-1/0}for(let u=d;u<p;u+=6){let C=~~((e[u+2*g]-x)/y);C>=yr&&(C=yr-1);let M=Jr[C];M.count++,Ul(u,e,M.bounds)}let w=Jr[yr-1];tp(w.bounds,w.rightCacheBounds);for(let u=yr-2;u>=0;u--){let v=Jr[u],f=Jr[u+1];ep(v.bounds,f.rightCacheBounds,v.rightCacheBounds)}let m=0;for(let u=0;u<yr-1;u++){let v=Jr[u],f=v.count,C=v.bounds,S=Jr[u+1].rightCacheBounds;f!==0&&(m===0?tp(C,Mh):ep(C,Mh,Mh)),m+=f;let E=0,T=0;m!==0&&(E=Bo(Mh)/l);let A=r-m;A!==0&&(T=Bo(S)/l);let R=1+1.25*(E*m+T*A);R<c&&(o=g,c=R,a=v.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function Qb(i,t,e,n){let r=0,s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}var zo=class{constructor(){this.boundingData=new Float32Array(6)}};function E0(i,t,e,n,r,s){let o=n,a=n+r-1,l=s.pos,c=s.axis*2,h=e.offset||0;for(;;){for(;o<=a&&e[(o-h)*6+c]<l;)o++;for(;o<=a&&e[(a-h)*6+c]>=l;)a--;if(o<a){for(let d=0;d<t;d++){let p=i[o*t+d];i[o*t+d]=i[a*t+d],i[a*t+d]=p}for(let d=0;d<6;d++){let p=o-h,g=a-h,x=e[p*6+d];e[p*6+d]=e[g*6+d],e[g*6+d]=x}o++,a--}else return o}}var T0,Sh,np,A0,tw=Math.pow(2,32);function bh(i){return"count"in i?1:1+bh(i.left)+bh(i.right)}function R0(i,t,e){return T0=new Float32Array(e),Sh=new Uint32Array(e),np=new Uint16Array(e),A0=new Uint8Array(e),ip(i,t)}function ip(i,t){let e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)T0[e+o]=s[o];if(r)return t.buffer?(A0.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(Sh[e+6]=t.offset,np[n+14]=t.count,np[n+15]=65535,i+32);{let{left:o,right:a,splitAxis:l}=t,c=i+32,h=ip(c,o),d=i/32,g=h/32-d;if(g>tw)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Sh[e+6]=g,Sh[e+7]=l,ip(h,a)}}function ew(i,t,e,n,r,s){let{maxDepth:o,verbose:a,targetLeafSize:l,_strictLeafSize:c=1/0,strategy:h,onProgress:d}=r,p=i.primitiveBuffer,g=i.primitiveBufferStride,x=new Float32Array(6),b=!1,_=new zo;return yh(t,e,n,_.boundingData,x),w(_,e,n,x),_;function y(m){d&&d((m-s.offset)/s.count)}function w(m,u,v,f=null,C=0){!b&&C>=o&&(b=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let M=v>c;if(v<=l&&!M||C>=o)return y(u+v),m.offset=u,m.count=v,m;let S=w0(m.boundingData,f,t,u,v,h),E=S.axis===-1?-1:E0(p,g,t,u,v,S);if(S.axis===-1||E===u||E===u+v){if(!M)return y(u+v),m.offset=u,m.count=v,m;S.axis=Math.max(0,Nl(m.boundingData)),E=u+Math.max(1,Math.floor(v/2))}m.splitAxis=S.axis;let T=new zo,A=u,R=E-u;m.left=T,yh(t,A,R,T.boundingData,x),w(T,A,R,x,C+1);let U=new zo,F=E,z=v-R;return m.right=U,yh(t,F,z,U.boundingData,x),w(U,F,z,x,C+1),m}}function C0(i,t){let e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),r=n[0],s=n[n.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(l=>{let c=ew(i,a,l.offset,l.count,t,o),h=bh(c),d=new e(32*h);return R0(0,c,d),d})}var Kr=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var rp=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},Ce=new rp;var jr,ko,Vo=[],wh=new Kr(()=>new Te);function P0(i,t,e,n,r,s){jr=wh.getPrimitive(),ko=wh.getPrimitive(),Vo.push(jr,ko),Ce.setBuffer(i._roots[t]);let o=sp(0,i.geometry,e,n,r,s);Ce.clearBuffer(),wh.releasePrimitive(jr),wh.releasePrimitive(ko),Vo.pop(),Vo.pop();let a=Vo.length;return a>0&&(ko=Vo[a-1],jr=Vo[a-2]),o}function sp(i,t,e,n,r=null,s=0,o=0){let{float32Array:a,uint16Array:l,uint32Array:c}=Ce,h=i*2;if(Ae(h,l)){let p=ke(i,c),g=Ye(h,l);return $e(i,a,jr),n(p,g,!1,o,s+i/8,jr)}else{let E=function(A){let{uint16Array:R,uint32Array:U}=Ce,F=A*2;for(;!Ae(F,R);)A=Ue(A),F=A*2;return ke(A,U)},T=function(A){let{uint16Array:R,uint32Array:U}=Ce,F=A*2;for(;!Ae(F,R);)A=Fe(A,U),F=A*2;return ke(A,U)+Ye(F,R)},p=Ue(i),g=Fe(i,c),x=p,b=g,_,y,w,m;if(r&&(w=jr,m=ko,$e(x,a,w),$e(b,a,m),_=r(w),y=r(m),y<_)){x=g,b=p;let A=_;_=y,y=A,w=m}w||(w=jr,$e(x,a,w));let u=Ae(x*2,l),v=e(w,u,_,o+1,s+x/8),f;if(v===2){let A=E(x),U=T(x)-A;f=n(A,U,!0,o+1,s+x/8,w)}else f=v&&sp(x,t,e,n,r,s,o+1);if(f)return!0;m=ko,$e(b,a,m);let C=Ae(b*2,l),M=e(m,C,y,o+1,s+b/8),S;if(M===2){let A=E(b),U=T(b)-A;S=n(A,U,!0,o+1,s+b/8,m)}else S=M&&sp(b,t,e,n,r,s,o+1);return!!S}}var Fl=new Ce.constructor,Eh=new Ce.constructor,Qr=new Kr(()=>new Te),Ho=new Te,Go=new Te,ap=new Te,lp=new Te,cp=!1;function I0(i,t,e,n){if(cp)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");cp=!0;let r=i._roots,s=t._roots,o,a=0,l=0,c=new Wt().copy(e).invert();for(let h=0,d=r.length;h<d;h++){Fl.setBuffer(r[h]),l=0;let p=Qr.getPrimitive();$e(0,Fl.float32Array,p),p.applyMatrix4(c);for(let g=0,x=s.length;g<x&&(Eh.setBuffer(s[g]),o=zi(0,0,e,c,n,a,l,0,0,p),Eh.clearBuffer(),l+=s[g].byteLength/32,!o);g++);if(Qr.releasePrimitive(p),Fl.clearBuffer(),a+=r[h].byteLength/32,o)break}return cp=!1,o}function zi(i,t,e,n,r,s=0,o=0,a=0,l=0,c=null,h=!1){let d,p;h?(d=Eh,p=Fl):(d=Fl,p=Eh);let g=d.float32Array,x=d.uint32Array,b=d.uint16Array,_=p.float32Array,y=p.uint32Array,w=p.uint16Array,m=i*2,u=t*2,v=Ae(m,b),f=Ae(u,w),C=!1;if(f&&v)h?C=r(ke(t,y),Ye(t*2,w),ke(i,x),Ye(i*2,b),l,o+t/8,a,s+i/8):C=r(ke(i,x),Ye(i*2,b),ke(t,y),Ye(t*2,w),a,s+i/8,l,o+t/8);else if(f){let M=Qr.getPrimitive();$e(t,_,M),M.applyMatrix4(e);let S=Ue(i),E=Fe(i,x);$e(S,g,Ho),$e(E,g,Go);let T=M.intersectsBox(Ho),A=M.intersectsBox(Go);C=T&&zi(t,S,n,e,r,o,s,l,a+1,M,!h)||A&&zi(t,E,n,e,r,o,s,l,a+1,M,!h),Qr.releasePrimitive(M)}else{let M=Ue(t),S=Fe(t,y);$e(M,_,ap),$e(S,_,lp);let E=c.intersectsBox(ap),T=c.intersectsBox(lp);if(E&&T)C=zi(i,M,e,n,r,s,o,a,l+1,c,h)||zi(i,S,e,n,r,s,o,a,l+1,c,h);else if(E)if(v)C=zi(i,M,e,n,r,s,o,a,l+1,c,h);else{let A=Qr.getPrimitive();A.copy(ap).applyMatrix4(e);let R=Ue(i),U=Fe(i,x);$e(R,g,Ho),$e(U,g,Go);let F=A.intersectsBox(Ho),z=A.intersectsBox(Go);C=F&&zi(M,R,n,e,r,o,s,l,a+1,A,!h)||z&&zi(M,U,n,e,r,o,s,l,a+1,A,!h),Qr.releasePrimitive(A)}else if(T)if(v)C=zi(i,S,e,n,r,s,o,a,l+1,c,h);else{let A=Qr.getPrimitive();A.copy(lp).applyMatrix4(e);let R=Ue(i),U=Fe(i,x);$e(R,g,Ho),$e(U,g,Go);let F=A.intersectsBox(Ho),z=A.intersectsBox(Go);C=F&&zi(S,R,n,e,r,o,s,l,a+1,A,!h)||z&&zi(S,U,n,e,r,o,s,l,a+1,A,!h),Qr.releasePrimitive(A)}}return C}var Th=new class{constructor(){let i=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=s._roots[o],this.uint16Array=e=new Uint16Array(i),this.uint32Array=t=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!Ae(o,e);)s=Ue(s),o=s*2;return ke(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!Ae(o,e);)s=Fe(s,t),o=s*2;return ke(s,t)+Ye(o,e)};let r=(s,o,a)=>{let l=o*2,c=Ae(l,e);if(!s(a,c,o)&&!c){let d=Ue(o),p=Fe(o,t);r(s,d,a+1),r(s,p,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{r(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((o,a,l)=>{if(a){let c=l*2,h=t[l+6],d=e[c+14];return s(o,a,new Float32Array(i,l*4,6),h,d)}else{let c=Oo(l,t);return s(o,a,new Float32Array(i,l*4,6),c)}})}}};var D0=new Te,Wo=new Float32Array(6),Ah=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...vh,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),C0(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0;for(let d=t,p=t+e;d<p;d++){this.writePrimitiveBounds(d,Wo,0);let[g,x,b,_,y,w]=Wo;g<s&&(s=g),_>l&&(l=_),x<o&&(o=x),y>c&&(c=y),b<a&&(a=b),w>h&&(h=w)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=l,n[r+4]=c,n[r+5]=h,n}computePrimitiveBounds(t,e,n){let r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,Wo,0);let[a,l,c,h,d,p]=Wo,g=(a+h)/2,x=(l+d)/2,b=(c+p)/2,_=(h-a)/2,y=(d-l)/2,w=(p-c)/2,m=(s-r)*6;n[m+0]=g,n[m+1]=_+(Math.abs(g)+_)*Fo,n[m+2]=x,n[m+3]=y+(Math.abs(x)+y)*Fo,n[m+4]=b,n[m+5]=w+(Math.abs(b)+w)*Fo}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{let n=this._roots;for(let r=0;r<n.length;r++){let s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),l=s.byteLength/32;for(let c=0;c<l;c++){let h=8*c,d=2*h;Ae(d,a)&&(o[h+6]+=t)}}}}traverse(t,e=0){Th.setBVH(this,e),Th.traverse(t),Th.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),l=r.byteLength/32;for(let c=l-1;c>=0;c--){let h=c*8,d=h*2;if(Ae(d,o)){let g=ke(h,s),x=Ye(d,o);this.writePrimitiveRangeBounds(g,x,Wo,0),a.set(Wo,h)}else{let g=Ue(h),x=Fe(h,s);for(let b=0;b<3;b++){let _=a[g+b],y=a[g+b+3],w=a[x+b],m=a[x+b+3];a[h+b]=_<w?_:w,a[h+b+3]=y>m?y:m}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{$e(0,new Float32Array(n),D0),t.union(D0)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){let d=r;r=(p,g,x,b,_)=>d(p,g,x,b,_)?!0:a(p,g,this,s,x,b,o)}else r||(s?r=(d,p,g,x)=>a(d,p,this,s,g,x,o):r=(d,p,g)=>g);let l=!1,c=0,h=this._roots;for(let d=0,p=h.length;d<p;d++){let g=h[d];if(l=P0(this,d,n,r,e,c),l)break;c+=g.byteLength/32}return l}bvhcast(t,e,n){let{intersectsRanges:r}=n;return I0(this,t,e,r)}};function L0(){return typeof SharedArrayBuffer<"u"}function up(i){return i.index?i.index.count:i.attributes.position.count}function ts(i){return up(i)/3}function iw(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function N0(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=iw(e,n);i.setIndex(new Oe(r,1));for(let s=0;s<e;s++)r[s]=s}}function rw(i,t,e){let n=up(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),l=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function sw(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function hp(i,t,e){let n=rw(i,t,e),r=sw(i,e);if(!r.length)return[n];let s=[],o=n.offset,a=n.offset+n.count,l=up(i)/e,c=[];for(let p of r){let{offset:g,count:x}=p,b=g,_=isFinite(x)?x:l-g,y=g+_;b<a&&y>o&&(c.push({pos:Math.max(o,b),isStart:!0}),c.push({pos:Math.min(a,y),isStart:!1}))}c.sort((p,g)=>p.pos!==g.pos?p.pos-g.pos:p.type==="end"?-1:1);let h=0,d=null;for(let p of c){let g=p.pos;h!==0&&g!==d&&s.push({offset:d,count:g-d}),h+=p.isStart?1:-1,d=g}return s}function ow(i,t){let e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((c,h)=>c+h.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o),l=0;for(let c=0;c<i.length;c++){let{offset:h,count:d}=i[c];for(let p=0;p<d;p++)a[l+p]=h+p;l+=d}return a}var Rh=class extends Ah{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!L0())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...vh,...e},e[Ll]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let r=hp(e,t.range,n),s=ow(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else N0(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Te))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:hp(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var ui=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){let l=t[s][e];n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){let a=e[s],l=t.dot(a);n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}};ui.prototype.setFromBox=(function(){let i=new D;return function(e,n){let r=n.min,s=n.max,o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){i.x=r.x*l+s.x*(1-l),i.y=r.y*c+s.y*(1-c),i.z=r.z*h+s.z*(1-h);let d=e.dot(i);o=Math.min(d,o),a=Math.max(d,a)}this.min=o,this.max=a}})();var aw=(function(){let i=new D,t=new D,e=new D;return function(r,s,o){let a=r.start,l=i,c=s.start,h=t;e.subVectors(a,c),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);let d=e.dot(h),p=h.dot(l),g=h.dot(h),x=e.dot(l),_=l.dot(l)*g-p*p,y,w;_!==0?y=(d*p-x*g)/_:y=0,w=(d+y*p)/g,o.x=y,o.y=w}})(),Bl=(function(){let i=new gt,t=new D,e=new D;return function(r,s,o,a){aw(r,s,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){r.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=r.start:h=r.end;let d;c<0?d=s.start:d=s.end;let p=t,g=e;if(r.closestPointToPoint(d,!0,t),s.closestPointToPoint(h,!0,e),p.distanceToSquared(d)<=g.distanceToSquared(h)){o.copy(p),a.copy(d);return}else{o.copy(h),a.copy(g);return}}}})(),U0=(function(){let i=new D,t=new D,e=new vn,n=new Ve;return function(s,o){let{radius:a,center:l}=s,{a:c,b:h,c:d}=o;if(n.start=c,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=c,n.end=d,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=h,n.end=d,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;let b=o.getPlane(e);if(Math.abs(b.distanceToPoint(l))<=a){let y=b.projectPoint(l,t);if(o.containsPoint(y))return!0}return!1}})();var lw=["x","y","z"],Mr=1e-15,F0=Mr*Mr;function wi(i){return Math.abs(i)<Mr}var cn=class extends qe{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new ui),this.points=[this.a,this.b,this.c],this.plane=new vn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Ve,this.needsUpdate=!0}intersectsSphere(t){return U0(t,this)}update(){let t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,r);let c=s[1],h=o[1];c.subVectors(t,e),h.setFromPoints(c,r);let d=s[2],p=o[2];d.subVectors(e,n),p.setFromPoints(d,r);let g=s[3],x=o[3];g.subVectors(n,t),x.setFromPoints(g,r);let b=c.length(),_=d.length(),y=g.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,b<Mr?_<Mr||y<Mr?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):_<Mr?y<Mr?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):y<Mr&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};cn.prototype.closestPointToSegment=(function(){let i=new D,t=new D,e=new Ve;return function(r,s=null,o=null){let{start:a,end:l}=r,c=this.points,h,d=1/0;for(let p=0;p<3;p++){let g=(p+1)%3;e.start.copy(c[p]),e.end.copy(c[g]),Bl(e,r,i,t),h=i.distanceToSquared(t),h<d&&(d=h,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),h=a.distanceToSquared(i),h<d&&(d=h,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),h=l.distanceToSquared(i),h<d&&(d=h,s&&s.copy(i),o&&o.copy(l)),Math.sqrt(d)}})();cn.prototype.intersectsTriangle=(function(){let i=new cn,t=new ui,e=new ui,n=new D,r=new D,s=new D,o=new D,a=new Ve,l=new Ve,c=new D,h=new gt,d=new gt;function p(m,u,v,f){let C=n;!m.isDegenerateIntoPoint&&!m.isDegenerateIntoSegment?C.copy(m.plane.normal):C.copy(u.plane.normal);let M=m.satBounds,S=m.satAxes;for(let A=1;A<4;A++){let R=M[A],U=S[A];if(t.setFromPoints(U,u.points),R.isSeparated(t)||(o.copy(C).cross(U),t.setFromPoints(o,m.points),e.setFromPoints(o,u.points),t.isSeparated(e)))return!1}let E=u.satBounds,T=u.satAxes;for(let A=1;A<4;A++){let R=E[A],U=T[A];if(t.setFromPoints(U,m.points),R.isSeparated(t)||(o.crossVectors(C,U),t.setFromPoints(o,m.points),e.setFromPoints(o,u.points),t.isSeparated(e)))return!1}return v&&(f||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}function g(m,u,v,f,C,M,S,E,T,A,R){let U=S/(S-E);A.x=f+(C-f)*U,R.start.subVectors(u,m).multiplyScalar(U).add(m),U=S/(S-T),A.y=f+(M-f)*U,R.end.subVectors(v,m).multiplyScalar(U).add(m)}function x(m,u,v,f,C,M,S,E,T,A,R){if(C>0)g(m.c,m.a,m.b,f,u,v,T,S,E,A,R);else if(M>0)g(m.b,m.a,m.c,v,u,f,E,S,T,A,R);else if(E*T>0||S!=0)g(m.a,m.b,m.c,u,v,f,S,E,T,A,R);else if(E!=0)g(m.b,m.a,m.c,v,u,f,E,S,T,A,R);else if(T!=0)g(m.c,m.a,m.b,f,u,v,T,S,E,A,R);else return!0;return!1}function b(m,u,v,f){let C=u.degenerateSegment,M=m.plane.distanceToPoint(C.start),S=m.plane.distanceToPoint(C.end);return wi(M)?wi(S)?p(m,u,v,f):(v&&(v.start.copy(C.start),v.end.copy(C.start)),m.containsPoint(C.start)):wi(S)?(v&&(v.start.copy(C.end),v.end.copy(C.end)),m.containsPoint(C.end)):m.plane.intersectLine(C,n)!=null?(v&&(v.start.copy(n),v.end.copy(n)),m.containsPoint(n)):!1}function _(m,u,v){let f=u.a;return wi(m.plane.distanceToPoint(f))&&m.containsPoint(f)?(v&&(v.start.copy(f),v.end.copy(f)),!0):!1}function y(m,u,v){let f=m.degenerateSegment,C=u.a;return f.closestPointToPoint(C,!0,n),C.distanceToSquared(n)<F0?(v&&(v.start.copy(C),v.end.copy(C)),!0):!1}function w(m,u,v,f){if(m.isDegenerateIntoSegment)if(u.isDegenerateIntoSegment){let C=m.degenerateSegment,M=u.degenerateSegment,S=r,E=s;C.delta(S),M.delta(E);let T=n.subVectors(M.start,C.start),A=S.x*E.y-S.y*E.x;if(wi(A))return!1;let R=(T.x*E.y-T.y*E.x)/A,U=-(S.x*T.y-S.y*T.x)/A;if(R<0||R>1||U<0||U>1)return!1;let F=C.start.z+S.z*R,z=M.start.z+E.z*U;return wi(F-z)?(v&&(v.start.copy(C.start).addScaledVector(S,R),v.end.copy(C.start).addScaledVector(S,R)),!0):!1}else return u.isDegenerateIntoPoint?y(m,u,v):b(u,m,v,f);else{if(m.isDegenerateIntoPoint)return u.isDegenerateIntoPoint?u.a.distanceToSquared(m.a)<F0?(v&&(v.start.copy(m.a),v.end.copy(m.a)),!0):!1:u.isDegenerateIntoSegment?y(u,m,v):_(u,m,v);if(u.isDegenerateIntoPoint)return _(m,u,v);if(u.isDegenerateIntoSegment)return b(m,u,v,f)}}return function(u,v=null,f=!1){this.needsUpdate&&this.update(),u.isExtendedTriangle?u.needsUpdate&&u.update():(i.copy(u),i.update(),u=i);let C=w(this,u,v,f);if(C!==void 0)return C;let M=this.plane,S=u.plane,E=S.distanceToPoint(this.a),T=S.distanceToPoint(this.b),A=S.distanceToPoint(this.c);wi(E)&&(E=0),wi(T)&&(T=0),wi(A)&&(A=0);let R=E*T,U=E*A;if(R>0&&U>0)return!1;let F=M.distanceToPoint(u.a),z=M.distanceToPoint(u.b),V=M.distanceToPoint(u.c);wi(F)&&(F=0),wi(z)&&(z=0),wi(V)&&(V=0);let Z=F*z,H=F*V;if(Z>0&&H>0)return!1;r.copy(M.normal),s.copy(S.normal);let tt=r.cross(s),q=0,ut=Math.abs(tt.x),dt=Math.abs(tt.y);dt>ut&&(ut=dt,q=1),Math.abs(tt.z)>ut&&(q=2);let St=lw[q],Vt=this.a[St],J=this.b[St],N=this.c[St],lt=u.a[St],Mt=u.b[St],xt=u.c[St];if(x(this,Vt,J,N,R,U,E,T,A,h,a))return p(this,u,v,f);if(x(u,lt,Mt,xt,Z,H,F,z,V,d,l))return p(this,u,v,f);if(h.y<h.x){let bt=h.y;h.y=h.x,h.x=bt,c.copy(a.start),a.start.copy(a.end),a.end.copy(c)}if(d.y<d.x){let bt=d.y;d.y=d.x,d.x=bt,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return h.y<d.x||d.y<h.x?!1:(v&&(d.x>h.x?v.start.copy(l.start):v.start.copy(a.start),d.y<h.y?v.end.copy(l.end):v.end.copy(a.end)),!0)}})();cn.prototype.distanceToPoint=(function(){let i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();cn.prototype.distanceToTriangle=(function(){let i=new D,t=new D,e=["a","b","c"],n=new Ve,r=new Ve;return function(o,a=null,l=null){let c=a||l?n:null;if(this.intersectsTriangle(o,c,!0))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let h=1/0;for(let d=0;d<3;d++){let p,g=e[d],x=o[g];this.closestPointToPoint(x,i),p=x.distanceToSquared(i),p<h&&(h=p,a&&a.copy(i),l&&l.copy(x));let b=this[g];o.closestPointToPoint(b,i),p=b.distanceToSquared(i),p<h&&(h=p,a&&a.copy(b),l&&l.copy(i))}for(let d=0;d<3;d++){let p=e[d],g=e[(d+1)%3];n.set(this[p],this[g]);for(let x=0;x<3;x++){let b=e[x],_=e[(x+1)%3];r.set(o[b],o[_]),Bl(n,r,i,t);let y=i.distanceToSquared(t);y<h&&(h=y,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(h)}})();var un=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new Wt,this.invMatrix=new Wt,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new ui),this.alignedSatBounds=new Array(3).fill().map(()=>new ui),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};un.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,r=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let d=0;d<=1;d++){let p=1*c|2*h|4*d,g=r[p];g.x=c?n.x:e.x,g.y=h?n.y:e.y,g.z=d?n.z:e.z,g.applyMatrix4(t)}let s=this.satBounds,o=this.satAxes,a=r[0];for(let c=0;c<3;c++){let h=o[c],d=s[c],p=1<<c,g=r[p];h.subVectors(a,g),d.setFromPoints(h,r)}let l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();un.prototype.intersectsBox=(function(){let i=new ui;return function(e){this.needsUpdate&&this.update();let n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){let c=o[l],h=s[l];if(i.setFromBox(c,e),h.isSeparated(i))return!1}return!0}})();un.prototype.intersectsTriangle=(function(){let i=new cn,t=new Array(3),e=new ui,n=new ui,r=new D;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let p=0;p<3;p++){let g=a[p],x=l[p];if(e.setFromPoints(x,t),g.isSeparated(e))return!1}let c=o.satBounds,h=o.satAxes,d=this.points;for(let p=0;p<3;p++){let g=c[p],x=h[p];if(e.setFromPoints(x,d),g.isSeparated(e))return!1}for(let p=0;p<3;p++){let g=l[p];for(let x=0;x<4;x++){let b=h[x];if(r.crossVectors(g,b),e.setFromPoints(r,t),n.setFromPoints(r,d),e.isSeparated(n))return!1}}return!0}})();un.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();un.prototype.distanceToPoint=(function(){let i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();un.prototype.distanceToBox=(function(){let i=["x","y","z"],t=new Array(12).fill().map(()=>new Ve),e=new Array(12).fill().map(()=>new Ve),n=new D,r=new D;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),l&&l.copy(n),c&&c.copy(r)),0;let h=a*a,d=o.min,p=o.max,g=this.points,x=1/0;for(let _=0;_<8;_++){let y=g[_];r.copy(y).clamp(d,p);let w=y.distanceToSquared(r);if(w<x&&(x=w,l&&l.copy(y),c&&c.copy(r),w<h))return Math.sqrt(w)}let b=0;for(let _=0;_<3;_++)for(let y=0;y<=1;y++)for(let w=0;w<=1;w++){let m=(_+1)%3,u=(_+2)%3,v=y<<m|w<<u,f=1<<_|y<<m|w<<u,C=g[v],M=g[f];t[b].set(C,M);let E=i[_],T=i[m],A=i[u],R=e[b],U=R.start,F=R.end;U[E]=d[E],U[T]=y?d[T]:p[T],U[A]=w?d[A]:p[T],F[E]=p[E],F[T]=y?d[T]:p[T],F[A]=w?d[A]:p[T],b++}for(let _=0;_<=1;_++)for(let y=0;y<=1;y++)for(let w=0;w<=1;w++){r.x=_?p.x:d.x,r.y=y?p.y:d.y,r.z=w?p.z:d.z,this.closestPointToPoint(r,n);let m=r.distanceToSquared(n);if(m<x&&(x=m,l&&l.copy(n),c&&c.copy(r),m<h))return Math.sqrt(m)}for(let _=0;_<12;_++){let y=t[_];for(let w=0;w<12;w++){let m=e[w];Bl(y,m,n,r);let u=n.distanceToSquared(r);if(u<x&&(x=u,l&&l.copy(n),c&&c.copy(r),u<h))return Math.sqrt(u)}}return Math.sqrt(x)}})();var fp=class extends Kr{constructor(){super(()=>new cn)}},qn=new fp;var Ol=new D,dp=new D;function B0(i,t,e={},n=0,r=1/0){let s=n*n,o=r*r,a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:h=>(Ol.copy(t).clamp(h.min,h.max),Ol.distanceToSquared(t)),intersectsBounds:(h,d,p)=>p<a&&p<o,intersectsTriangle:(h,d)=>{h.closestPointToPoint(t,Ol);let p=t.distanceToSquared(Ol);return p<a&&(dp.copy(Ol),a=p,l=d),p<s}}),a===1/0)return null;let c=Math.sqrt(a);return e.point?e.point.copy(dp):e.point=dp.clone(),e.distance=c,e.faceIndex=l,e}var Ch=parseInt("186")>=169,cw=parseInt("186")<=161,ys=new D,Ms=new D,Ss=new D,Ph=new gt,Ih=new gt,Dh=new gt,O0=new D,z0=new D,V0=new D,zl=new D;function uw(i,t,e,n,r,s,o,a){let l;if(s===ln?l=i.intersectTriangle(n,e,t,!0,r):l=i.intersectTriangle(t,e,n,s!==Tn,r),l===null)return null;let c=i.origin.distanceTo(r);return c<o||c>a?null:{distance:c,point:r.clone()}}function k0(i,t,e,n,r,s,o,a,l,c,h){ys.fromBufferAttribute(t,s),Ms.fromBufferAttribute(t,o),Ss.fromBufferAttribute(t,a);let d=uw(i,ys,Ms,Ss,zl,l,c,h);if(d){if(n){Ph.fromBufferAttribute(n,s),Ih.fromBufferAttribute(n,o),Dh.fromBufferAttribute(n,a),d.uv=new gt;let g=qe.getInterpolation(zl,ys,Ms,Ss,Ph,Ih,Dh,d.uv);Ch||(d.uv=g)}if(r){Ph.fromBufferAttribute(r,s),Ih.fromBufferAttribute(r,o),Dh.fromBufferAttribute(r,a),d.uv1=new gt;let g=qe.getInterpolation(zl,ys,Ms,Ss,Ph,Ih,Dh,d.uv1);Ch||(d.uv1=g),cw&&(d.uv2=d.uv1)}if(e){O0.fromBufferAttribute(e,s),z0.fromBufferAttribute(e,o),V0.fromBufferAttribute(e,a),d.normal=new D;let g=qe.getInterpolation(zl,ys,Ms,Ss,O0,z0,V0,d.normal);d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1),Ch||(d.normal=g)}let p={a:s,b:o,c:a,normal:new D,materialIndex:0};if(qe.getNormal(ys,Ms,Ss,p.normal),d.face=p,d.faceIndex=s,Ch){let g=new D;qe.getBarycoord(zl,ys,Ms,Ss,g),d.barycoord=g}}return d}function H0(i){return i&&i.isMaterial?i.side:i}function Xo(i,t,e,n,r,s,o){let a=n*3,l=a+0,c=a+1,h=a+2,{index:d,groups:p}=i;i.index&&(l=d.getX(l),c=d.getX(c),h=d.getX(h));let{position:g,normal:x,uv:b,uv1:_}=i.attributes;if(Array.isArray(t)){let y=n*3;for(let w=0,m=p.length;w<m;w++){let{start:u,count:v,materialIndex:f}=p[w];if(y>=u&&y<u+v){let C=H0(t[f]),M=k0(e,g,x,b,_,l,c,h,C,s,o);if(M)if(M.faceIndex=n,M.face.materialIndex=f,r)r.push(M);else return M}}}else{let y=H0(t),w=k0(e,g,x,b,_,l,c,h,y,s,o);if(w)if(w.faceIndex=n,w.face.materialIndex=0,r)r.push(w);else return w}return null}function Je(i,t,e,n){let r=i.a,s=i.b,o=i.c,a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function G0(i,t,e,n,r,s,o,a){let{geometry:l,_indirectBuffer:c}=i;for(let h=n,d=n+r;h<d;h++)Xo(l,t,e,h,s,o,a)}function W0(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:l}=i,c=1/0,h=null;for(let d=n,p=n+r;d<p;d++){let g;g=Xo(a,t,e,d,null,s,o),g&&g.distance<c&&(h=g,c=g.distance)}return h}function X0(i,t,e,n,r,s,o){let{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let h=i,d=t+i;h<d;h++){let p;if(p=h,Je(o,p*3,l,c),o.needsUpdate=!0,n(o,p,r,s))return!0}return!1}function q0(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,l,c=0,h=i._roots;for(let p=0,g=h.length;p<g;p++)s=h[p],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),d(0,c),c+=s.byteLength;function d(p,g,x=!1){let b=p*2;if(Ae(b,a)){let _=ke(p,o),y=Ye(b,a),w=1/0,m=1/0,u=1/0,v=-1/0,f=-1/0,C=-1/0;for(let M=3*_,S=3*(_+y);M<S;M++){let E=n[M],T=r.getX(E),A=r.getY(E),R=r.getZ(E);T<w&&(w=T),T>v&&(v=T),A<m&&(m=A),A>f&&(f=A),R<u&&(u=R),R>C&&(C=R)}return l[p+0]!==w||l[p+1]!==m||l[p+2]!==u||l[p+3]!==v||l[p+4]!==f||l[p+5]!==C?(l[p+0]=w,l[p+1]=m,l[p+2]=u,l[p+3]=v,l[p+4]=f,l[p+5]=C,!0):!1}else{let _=Ue(p),y=Fe(p,o),w=x,m=!1,u=!1;if(t){if(!w){let E=_/8+g/32,T=y/8+g/32;m=t.has(E),u=t.has(T),w=!m&&!u}}else m=!0,u=!0;let v=w||m,f=w||u,C=!1;v&&(C=d(_,g,w));let M=!1;f&&(M=d(y,g,w));let S=C||M;if(S)for(let E=0;E<3;E++){let T=_+E,A=y+E,R=l[T],U=l[T+3],F=l[A],z=l[A+3];l[p+E]=R<F?R:F,l[p+E+3]=U>z?U:z}return S}}}function Ei(i,t,e,n,r){let s,o,a,l,c,h,d=1/e.direction.x,p=1/e.direction.y,g=1/e.direction.z,x=e.origin.x,b=e.origin.y,_=e.origin.z,y=t[i],w=t[i+3],m=t[i+1],u=t[i+3+1],v=t[i+2],f=t[i+3+2];return d>=0?(s=(y-x)*d,o=(w-x)*d):(s=(w-x)*d,o=(y-x)*d),p>=0?(a=(m-b)*p,l=(u-b)*p):(a=(u-b)*p,l=(m-b)*p),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),g>=0?(c=(v-_)*g,h=(f-_)*g):(c=(f-_)*g,h=(v-_)*g),s>h||c>o)?!1:((c>s||s!==s)&&(s=c),(h<o||o!==o)&&(o=h),s<=r&&o>=n)}function Y0(i,t,e,n,r,s,o,a){let{geometry:l,_indirectBuffer:c}=i;for(let h=n,d=n+r;h<d;h++){let p=c?c[h]:h;Xo(l,t,e,p,s,o,a)}}function Z0(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:l}=i,c=1/0,h=null;for(let d=n,p=n+r;d<p;d++){let g;g=Xo(a,t,e,l?l[d]:d,null,s,o),g&&g.distance<c&&(h=g,c=g.distance)}return h}function $0(i,t,e,n,r,s,o){let{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let h=i,d=t+i;h<d;h++){let p;if(p=e.resolveTriangleIndex(h),Je(o,p*3,l,c),o.needsUpdate=!0,n(o,p,r,s))return!0}return!1}function J0(i,t,e,n,r,s,o){Ce.setBuffer(i._roots[t]),pp(0,i,e,n,r,s,o),Ce.clearBuffer()}function pp(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:l,uint32Array:c}=Ce,h=i*2;if(Ae(h,l)){let p=ke(i,c),g=Ye(h,l);G0(t,e,n,p,g,r,s,o)}else{let p=Ue(i);Ei(p,a,n,s,o)&&pp(p,t,e,n,r,s,o);let g=Fe(i,c);Ei(g,a,n,s,o)&&pp(g,t,e,n,r,s,o)}}var hw=["x","y","z"];function K0(i,t,e,n,r,s){Ce.setBuffer(i._roots[t]);let o=mp(0,i,e,n,r,s);return Ce.clearBuffer(),o}function mp(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:l}=Ce,c=i*2;if(Ae(c,a)){let d=ke(i,l),p=Ye(c,a);return W0(t,e,n,d,p,r,s)}else{let d=Oo(i,l),p=hw[d],x=n.direction[p]>=0,b,_;x?(b=Ue(i),_=Fe(i,l)):(b=Fe(i,l),_=Ue(i));let w=Ei(b,o,n,r,s)?mp(b,t,e,n,r,s):null;if(w){let v=w.point[p];if(x?v<=o[_+d]:v>=o[_+d+3])return w}let u=Ei(_,o,n,r,s)?mp(_,t,e,n,r,s):null;return w&&u?w.distance<=u.distance?w:u:w||u||null}}var Lh=new Te,qo=new cn,Yo=new cn,Vl=new Wt,j0=new un,Nh=new un;function Q0(i,t,e,n){Ce.setBuffer(i._roots[t]);let r=gp(0,i,e,n);return Ce.clearBuffer(),r}function gp(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=Ce,l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),j0.set(e.boundingBox.min,e.boundingBox.max,n),r=j0),Ae(l,o)){let h=t.geometry,d=h.index,p=h.attributes.position,g=e.index,x=e.attributes.position,b=ke(i,a),_=Ye(l,o);if(Vl.copy(n).invert(),e.boundsTree)return $e(i,s,Nh),Nh.matrix.copy(Vl),Nh.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:w=>Nh.intersectsBox(w),intersectsTriangle:w=>{w.a.applyMatrix4(n),w.b.applyMatrix4(n),w.c.applyMatrix4(n),w.needsUpdate=!0;for(let m=b*3,u=(_+b)*3;m<u;m+=3)if(Je(Yo,m,d,p),Yo.needsUpdate=!0,w.intersectsTriangle(Yo))return!0;return!1}});{let y=ts(e);for(let w=b*3,m=(_+b)*3;w<m;w+=3){Je(qo,w,d,p),qo.a.applyMatrix4(Vl),qo.b.applyMatrix4(Vl),qo.c.applyMatrix4(Vl),qo.needsUpdate=!0;for(let u=0,v=y*3;u<v;u+=3)if(Je(Yo,u,g,x),Yo.needsUpdate=!0,qo.intersectsTriangle(Yo))return!0}}}else{let h=Ue(i),d=Fe(i,a);return $e(h,s,Lh),!!(r.intersectsBox(Lh)&&gp(h,t,e,n,r)||($e(d,s,Lh),r.intersectsBox(Lh)&&gp(d,t,e,n,r)))}}var Uh=new Wt,xp=new un,kl=new un,fw=new D,dw=new D,pw=new D,mw=new D;function tx(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),xp.set(t.boundingBox.min,t.boundingBox.max,e),xp.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,c=a.index,h=t.attributes.position,d=t.index,p=qn.getPrimitive(),g=qn.getPrimitive(),x=fw,b=dw,_=null,y=null;r&&(_=pw,y=mw);let w=1/0,m=null,u=null;return Uh.copy(e).invert(),kl.matrix.copy(Uh),i.shapecast({boundsTraverseOrder:v=>xp.distanceToBox(v),intersectsBounds:(v,f,C)=>C<w&&C<o?(f&&(kl.min.copy(v.min),kl.max.copy(v.max),kl.needsUpdate=!0),!0):!1,intersectsRange:(v,f)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:M=>kl.distanceToBox(M),intersectsBounds:(M,S,E)=>E<w&&E<o,intersectsRange:(M,S)=>{for(let E=M,T=M+S;E<T;E++){Je(g,3*E,d,h),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let A=v,R=v+f;A<R;A++){Je(p,3*A,c,l),p.needsUpdate=!0;let U=p.distanceToTriangle(g,x,_);if(U<w&&(b.copy(x),y&&y.copy(_),w=U,m=A,u=E),U<s)return!0}}}});{let C=ts(t);for(let M=0,S=C;M<S;M++){Je(g,3*M,d,h),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let E=v,T=v+f;E<T;E++){Je(p,3*E,c,l),p.needsUpdate=!0;let A=p.distanceToTriangle(g,x,_);if(A<w&&(b.copy(x),y&&y.copy(_),w=A,m=E,u=M),A<s)return!0}}}}}),qn.releasePrimitive(p),qn.releasePrimitive(g),w===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=w,n.faceIndex=m,r&&(r.point?r.point.copy(y):r.point=y.clone(),r.point.applyMatrix4(Uh),b.applyMatrix4(Uh),r.distance=b.sub(r.point).length(),r.faceIndex=u),n)}function ex(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,l,c=0,h=i._roots;for(let p=0,g=h.length;p<g;p++)s=h[p],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),d(0,c),c+=s.byteLength;function d(p,g,x=!1){let b=p*2;if(Ae(b,a)){let _=ke(p,o),y=Ye(b,a),w=1/0,m=1/0,u=1/0,v=-1/0,f=-1/0,C=-1/0;for(let M=_,S=_+y;M<S;M++){let E=3*i.resolveTriangleIndex(M);for(let T=0;T<3;T++){let A=E+T;A=n?n[A]:A;let R=r.getX(A),U=r.getY(A),F=r.getZ(A);R<w&&(w=R),R>v&&(v=R),U<m&&(m=U),U>f&&(f=U),F<u&&(u=F),F>C&&(C=F)}}return l[p+0]!==w||l[p+1]!==m||l[p+2]!==u||l[p+3]!==v||l[p+4]!==f||l[p+5]!==C?(l[p+0]=w,l[p+1]=m,l[p+2]=u,l[p+3]=v,l[p+4]=f,l[p+5]=C,!0):!1}else{let _=Ue(p),y=Fe(p,o),w=x,m=!1,u=!1;if(t){if(!w){let E=_/8+g/32,T=y/8+g/32;m=t.has(E),u=t.has(T),w=!m&&!u}}else m=!0,u=!0;let v=w||m,f=w||u,C=!1;v&&(C=d(_,g,w));let M=!1;f&&(M=d(y,g,w));let S=C||M;if(S)for(let E=0;E<3;E++){let T=_+E,A=y+E,R=l[T],U=l[T+3],F=l[A],z=l[A+3];l[p+E]=R<F?R:F,l[p+E+3]=U>z?U:z}return S}}}function nx(i,t,e,n,r,s,o){Ce.setBuffer(i._roots[t]),_p(0,i,e,n,r,s,o),Ce.clearBuffer()}function _p(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:l,uint32Array:c}=Ce,h=i*2;if(Ae(h,l)){let p=ke(i,c),g=Ye(h,l);Y0(t,e,n,p,g,r,s,o)}else{let p=Ue(i);Ei(p,a,n,s,o)&&_p(p,t,e,n,r,s,o);let g=Fe(i,c);Ei(g,a,n,s,o)&&_p(g,t,e,n,r,s,o)}}var gw=["x","y","z"];function ix(i,t,e,n,r,s){Ce.setBuffer(i._roots[t]);let o=vp(0,i,e,n,r,s);return Ce.clearBuffer(),o}function vp(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:l}=Ce,c=i*2;if(Ae(c,a)){let d=ke(i,l),p=Ye(c,a);return Z0(t,e,n,d,p,r,s)}else{let d=Oo(i,l),p=gw[d],x=n.direction[p]>=0,b,_;x?(b=Ue(i),_=Fe(i,l)):(b=Fe(i,l),_=Ue(i));let w=Ei(b,o,n,r,s)?vp(b,t,e,n,r,s):null;if(w){let v=w.point[p];if(x?v<=o[_+d]:v>=o[_+d+3])return w}let u=Ei(_,o,n,r,s)?vp(_,t,e,n,r,s):null;return w&&u?w.distance<=u.distance?w:u:w||u||null}}var Fh=new Te,Zo=new cn,$o=new cn,Hl=new Wt,rx=new un,Bh=new un;function sx(i,t,e,n){Ce.setBuffer(i._roots[t]);let r=yp(0,i,e,n);return Ce.clearBuffer(),r}function yp(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=Ce,l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),rx.set(e.boundingBox.min,e.boundingBox.max,n),r=rx),Ae(l,o)){let h=t.geometry,d=h.index,p=h.attributes.position,g=e.index,x=e.attributes.position,b=ke(i,a),_=Ye(l,o);if(Hl.copy(n).invert(),e.boundsTree)return $e(i,s,Bh),Bh.matrix.copy(Hl),Bh.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:w=>Bh.intersectsBox(w),intersectsTriangle:w=>{w.a.applyMatrix4(n),w.b.applyMatrix4(n),w.c.applyMatrix4(n),w.needsUpdate=!0;for(let m=b,u=_+b;m<u;m++)if(Je($o,3*t.resolveTriangleIndex(m),d,p),$o.needsUpdate=!0,w.intersectsTriangle($o))return!0;return!1}});{let y=ts(e);for(let w=b,m=_+b;w<m;w++){let u=t.resolveTriangleIndex(w);Je(Zo,3*u,d,p),Zo.a.applyMatrix4(Hl),Zo.b.applyMatrix4(Hl),Zo.c.applyMatrix4(Hl),Zo.needsUpdate=!0;for(let v=0,f=y*3;v<f;v+=3)if(Je($o,v,g,x),$o.needsUpdate=!0,Zo.intersectsTriangle($o))return!0}}}else{let h=Ue(i),d=Fe(i,a);return $e(h,s,Fh),!!(r.intersectsBox(Fh)&&yp(h,t,e,n,r)||($e(d,s,Fh),r.intersectsBox(Fh)&&yp(d,t,e,n,r)))}}var Oh=new Wt,Mp=new un,Gl=new un,xw=new D,_w=new D,vw=new D,yw=new D;function ox(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Mp.set(t.boundingBox.min,t.boundingBox.max,e),Mp.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,c=a.index,h=t.attributes.position,d=t.index,p=qn.getPrimitive(),g=qn.getPrimitive(),x=xw,b=_w,_=null,y=null;r&&(_=vw,y=yw);let w=1/0,m=null,u=null;return Oh.copy(e).invert(),Gl.matrix.copy(Oh),i.shapecast({boundsTraverseOrder:v=>Mp.distanceToBox(v),intersectsBounds:(v,f,C)=>C<w&&C<o?(f&&(Gl.min.copy(v.min),Gl.max.copy(v.max),Gl.needsUpdate=!0),!0):!1,intersectsRange:(v,f)=>{if(t.boundsTree){let C=t.boundsTree;return C.shapecast({boundsTraverseOrder:M=>Gl.distanceToBox(M),intersectsBounds:(M,S,E)=>E<w&&E<o,intersectsRange:(M,S)=>{for(let E=M,T=M+S;E<T;E++){let A=C.resolveTriangleIndex(E);Je(g,3*A,d,h),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let R=v,U=v+f;R<U;R++){let F=i.resolveTriangleIndex(R);Je(p,3*F,c,l),p.needsUpdate=!0;let z=p.distanceToTriangle(g,x,_);if(z<w&&(b.copy(x),y&&y.copy(_),w=z,m=R,u=E),z<s)return!0}}}})}else{let C=ts(t);for(let M=0,S=C;M<S;M++){Je(g,3*M,d,h),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let E=v,T=v+f;E<T;E++){let A=i.resolveTriangleIndex(E);Je(p,3*A,c,l),p.needsUpdate=!0;let R=p.distanceToTriangle(g,x,_);if(R<w&&(b.copy(x),y&&y.copy(_),w=R,m=E,u=M),R<s)return!0}}}}}),qn.releasePrimitive(p),qn.releasePrimitive(g),w===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=w,n.faceIndex=m,r&&(r.point?r.point.copy(y):r.point=y.clone(),r.point.applyMatrix4(Oh),b.applyMatrix4(Oh),r.distance=b.sub(r.point).length(),r.faceIndex=u),n)}function Sp(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}var zh=new un,Vh=new Fi,ax=new D,lx=new Wt,cx=new D,bp=["getX","getY","getZ"],Jo=class i extends Rh{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(s));let a=new i(e,{...n,[Ll]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){let c=e.getIndex();if(c===null){let h=new Oe(t.index,1,!1);e.setIndex(h)}else c.array!==r&&(c.array.set(r),c.needsUpdate=!0)}return a;function l(c){for(let h=0;h<c.length;h++){let d=c[h],p=new Uint32Array(d),g=new Uint16Array(d);for(let x=0,b=d.byteLength/32;x<b;x++){let _=8*x,y=2*_;Ae(y,g)||(p[_+6]=p[_+6]/8-x)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,c=(s?s[t]:t)*3,h=c+0,d=c+1,p=c+2;a&&(h=a[h],d=a[d],p=a[p]);for(let g=0;g<3;g++){let x=o[bp[g]](h),b=o[bp[g]](d),_=o[bp[g]](p),y=x;b<y&&(y=b),_<y&&(y=_);let w=x;b>w&&(w=b),_>w&&(w=_),e[n+g]=y,e[n+g+3]=w}return e}computePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,l=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let c=o.array,h=o.offset||0,d=3;o.isInterleavedBufferAttribute&&(d=o.data.stride);let p=["getX","getY","getZ"],g=n.offset;for(let x=t,b=t+e;x<b;x++){let y=(s?s[x]:x)*3,w=(x-g)*6,m=y+0,u=y+1,v=y+2;a&&(m=a[m],u=a[u],v=a[v]),l||(m=m*d+h,u=u*d+h,v=v*d+h);for(let f=0;f<3;f++){let C,M,S;l?(C=o[p[f]](m),M=o[p[f]](u),S=o[p[f]](v)):(C=c[m+f],M=c[u+f],S=c[v+f]);let E=C;M<E&&(E=M),S<E&&(E=S);let T=C;M>T&&(T=M),S>T&&(T=S);let A=(T-E)/2,R=f*2;n[w+R+0]=E+A,n[w+R+1]=A+(Math.abs(E)+A)*Fo}}return n}raycastObject3D(t,e,n=[]){let{material:r}=t;if(r===void 0)return;lx.copy(t.matrixWorld).invert(),Vh.copy(e.ray).applyMatrix4(lx),cx.setFromMatrixScale(t.matrixWorld),ax.copy(Vh.direction).multiply(cx);let s=ax.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let l=this.raycastFirst(Vh,r,o,a);l=Sp(l,t,e),l&&n.push(l)}else{let l=this.raycast(Vh,r,o,a);for(let c=0,h=l.length;c<h;c++){let d=Sp(l[c],t,e);d&&n.push(d)}}return n}refit(t=null){return(this.indirect?ex:q0)(this,t)}raycast(t,e=ci,n=0,r=1/0){let s=this._roots,o=[],a=this.indirect?nx:J0;for(let l=0,c=s.length;l<c;l++)a(this,l,e,t,o,n,r);return o}raycastFirst(t,e=ci,n=0,r=1/0){let s=this._roots,o=null,a=this.indirect?ix:K0;for(let l=0,c=s.length;l<c;l++){let h=a(this,l,e,t,n,r);h!=null&&(o==null||h.distance<o.distance)&&(o=h)}return o}intersectsGeometry(t,e){let n=!1,r=this._roots,s=this.indirect?sx:Q0;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){let e=qn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?$0:X0});return qn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n,o=qn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?x=>{let b=this.resolveTriangleIndex(x);Je(o,b*3,a,l)}:x=>{Je(o,x*3,a,l)},h=qn.getPrimitive(),d=t.geometry.index,p=t.geometry.attributes.position,g=t.indirect?x=>{let b=t.resolveTriangleIndex(x);Je(h,b*3,d,p)}:x=>{Je(h,x*3,d,p)};if(s){if(!(t instanceof i))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let x=(b,_,y,w,m,u,v,f)=>{for(let C=y,M=y+w;C<M;C++){g(C),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let S=b,E=b+_;S<E;S++)if(c(S),o.needsUpdate=!0,s(o,h,S,C,m,u,v,f))return!0}return!1};if(r){let b=r;r=function(_,y,w,m,u,v,f,C){return b(_,y,w,m,u,v,f,C)?!0:x(_,y,w,m,u,v,f,C)}}else r=x}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return zh.set(t.min,t.max,e),zh.needsUpdate=!0,this.shapecast({intersectsBounds:n=>zh.intersectsBox(n),intersectsTriangle:n=>zh.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?ox:tx)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return B0(this,t,e,n,r)}};var ux=Math.pow(10,-Math.log10(1e-6)),Mw=5e-7*ux;function Vi(i){return~~(i*ux+Mw)}function hx(i){return`${Vi(i.x)},${Vi(i.y)}`}function wp(i){return`${Vi(i.x)},${Vi(i.y)},${Vi(i.z)}`}function fx(i){return`${Vi(i.x)},${Vi(i.y)},${Vi(i.z)},${Vi(i.w)}`}function dx(i,t,e){e.direction.subVectors(t,i).normalize();let n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function kh(){return typeof SharedArrayBuffer<"u"}function px(i){if(i.buffer instanceof SharedArrayBuffer)return i;let t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function Sw(i){return i.index?i.index.count:i.attributes.position.count}function Ko(i){return Sw(i)/3}var bw=1e-8,ww=new D;function gx(i){return~~(i/3)}function xx(i){return i%3}function mx(i,t){return i.start-t.start}function Ep(i,t){return ww.subVectors(t,i.origin).dot(i.direction)}function _x(i,t,e,n=bw){i.sort(mx),t.sort(mx);for(let a=0;a<i.length;a++){let l=i[a];for(let c=0;c<t.length;c++){let h=t[c];if(!(h.start>l.end)){if(l.end<h.start||h.end<l.start)continue;if(l.start<=h.start&&l.end>=h.end)s(h.end,l.end)||i.splice(a+1,0,{start:h.end,end:l.end,index:l.index}),l.end=h.start,h.start=0,h.end=0;else if(l.start>=h.start&&l.end<=h.end)s(l.end,h.end)||t.splice(c+1,0,{start:l.end,end:h.end,index:h.index}),h.end=l.start,l.start=0,l.end=0;else if(l.start<=h.start&&l.end<=h.end){let d=l.end;l.end=h.start,h.start=d}else if(l.start>=h.start&&l.end>=h.end){let d=h.end;h.end=l.start,l.start=d}else throw new Error}if(e.has(l.index)||e.set(l.index,[]),e.has(h.index)||e.set(h.index,[]),e.get(l.index).push(h.index),e.get(h.index).push(l.index),o(h)&&(t.splice(c,1),c--),o(l)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let l=0;l<a.length;l++)o(a[l])&&(a.splice(l,1),l--)}function s(a,l){return Math.abs(l-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}var Hh=class{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){let e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let l=0,c=e.length;l<c;l++){let h=e[l];if(o(h,t)&&o(h,n))continue;let d=a(h,t),p=a(h,n),g=Math.min(d,p);g<r&&(r=g,s=h)}return s;function o(l,c){let h=l.origin.distanceTo(c.origin)>1e-5;return l.direction.angleTo(c.direction)>1e-4||h}function a(l,c){let h=l.origin.distanceTo(c.origin),d=l.direction.angleTo(c.direction);return h/1e-5+d/1e-4}}};var Tp=new D,Ap=new D,Gh=new Fi;function vx(i,t,e){let n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,l=Array.from(t),c=new Hh;for(let h=0,d=l.length;h<d;h++){let p=l[h],g=gx(p),x=xx(p),b=3*g+x,_=3*g+(x+1)%3;r&&(b=r.getX(b),_=r.getX(_)),Tp.fromBufferAttribute(s,b),Ap.fromBufferAttribute(s,_),dx(Tp,Ap,Gh);let y,w=c.findClosestRay(Gh);w===null&&(w=Gh.clone(),c.addRay(w)),a.has(w)||a.set(w,{forward:[],reverse:[],ray:w}),y=a.get(w);let m=Ep(w,Tp),u=Ep(w,Ap);m>u&&([m,u]=[u,m]),Gh.direction.dot(w.direction)<0?y.reverse.push({start:m,end:u,index:p}):y.forward.push({start:m,end:u,index:p})}return a.forEach(({forward:h,reverse:d},p)=>{_x(h,d,o,e),h.length===0&&d.length===0&&a.delete(p)}),{disjointConnectivityMap:o,fragmentMap:a}}var Ew=new gt,Rp=new D,Tw=new we,Cp=["","",""],jo=class{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){let n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){let n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){let{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?m:w,a=new Map,{attributes:l}=t,c=e?Object.keys(l):null,h=t.index,d=l.position,p=Ko(t),g=p,x=0;n&&(x=t.drawRange.start,t.drawRange.count!==1/0&&(p=~~(t.drawRange.count/3)));let b=this.data;(!b||b.length<3*g)&&(b=new Int32Array(3*g)),b.fill(-1);let _=0,y=new Set;for(let u=x,v=p*3+x;u<v;u+=3){let f=u;for(let C=0;C<3;C++){let M=f+C;h&&(M=h.getX(M)),Cp[C]=o(M)}for(let C=0;C<3;C++){let M=(C+1)%3,S=Cp[C],E=Cp[M],T=`${E}_${S}`;if(a.has(T)){let A=f+C,R=a.get(T);b[A]=R,b[R]=A,a.delete(T),_+=2,y.delete(R)}else{let A=`${S}_${E}`,R=f+C;a.set(A,R),y.add(R)}}}if(r){let{fragmentMap:u,disjointConnectivityMap:v}=vx(t,y,s);y.clear(),u.forEach(({forward:f,reverse:C})=>{f.forEach(({index:M})=>y.add(M)),C.forEach(({index:M})=>y.add(M))}),this.unmatchedDisjointEdges=u,this.disjointConnections=v,_=p*3-y.size}this.matchedEdges=_,this.unmatchedEdges=y.size,this.data=b;function w(u){return Rp.fromBufferAttribute(d,u),wp(Rp)}function m(u){let v="";for(let f=0,C=c.length;f<C;f++){let M=l[c[f]],S;switch(M.itemSize){case 1:S=Vi(M.getX(u));break;case 2:S=hx(Ew.fromBufferAttribute(M,u));break;case 3:S=wp(Rp.fromBufferAttribute(M,u));break;case 4:S=fx(Tw.fromBufferAttribute(M,u));break}v!==""&&(v+="|"),v+=S}return v}}};var bs=class extends ae{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Wt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){let{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){let t=this.geometry,e=t.attributes,n=kh(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,l=`${t.uuid}_${o}_${a}`;if(this._hash===l)return;if(this._hash=l,n)for(let p in e){let g=e[p];if(g.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");g.array=px(g.array)}t.boundsTree=new Jo(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new jo),t.halfEdges.updateFrom(t);let c=Ko(t);(!t.groupIndices||t.groupIndices.length!==c)&&(t.groupIndices=new Uint16Array(c));let h=t.groupIndices,d=t.groups;for(let p=0,g=d.length;p<g;p++){let{start:x,count:b}=d[p];for(let _=x/3,y=(x+b)/3;_<y;_++)h[_]=p}}disposeCacheData(){let{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}};var Aw=Object.getOwnPropertyNames,hi=(i,t)=>function(){return t||(0,i[Aw(i)[0]])((t={exports:{}}).exports,t),t.exports},Wh=hi({"node_modules/binary-search-bounds/search-bounds.js"(i,t){"use strict";function e(l,c,h,d,p){for(var g=p+1;d<=p;){var x=d+p>>>1,b=l[x],_=h!==void 0?h(b,c):b-c;_>=0?(g=x,p=x-1):d=x+1}return g}function n(l,c,h,d,p){for(var g=p+1;d<=p;){var x=d+p>>>1,b=l[x],_=h!==void 0?h(b,c):b-c;_>0?(g=x,p=x-1):d=x+1}return g}function r(l,c,h,d,p){for(var g=d-1;d<=p;){var x=d+p>>>1,b=l[x],_=h!==void 0?h(b,c):b-c;_<0?(g=x,d=x+1):p=x-1}return g}function s(l,c,h,d,p){for(var g=d-1;d<=p;){var x=d+p>>>1,b=l[x],_=h!==void 0?h(b,c):b-c;_<=0?(g=x,d=x+1):p=x-1}return g}function o(l,c,h,d,p){for(;d<=p;){var g=d+p>>>1,x=l[g],b=h!==void 0?h(x,c):x-c;if(b===0)return g;b<=0?d=g+1:p=g-1}return-1}function a(l,c,h,d,p,g){return typeof h=="function"?g(l,c,h,d===void 0?0:d|0,p===void 0?l.length-1:p|0):g(l,c,void 0,h===void 0?0:h|0,d===void 0?l.length-1:d|0)}t.exports={ge:function(l,c,h,d,p){return a(l,c,h,d,p,e)},gt:function(l,c,h,d,p){return a(l,c,h,d,p,n)},lt:function(l,c,h,d,p){return a(l,c,h,d,p,r)},le:function(l,c,h,d,p){return a(l,c,h,d,p,s)},eq:function(l,c,h,d,p){return a(l,c,h,d,p,o)}}}}),Pp=hi({"node_modules/two-product/two-product.js"(i,t){"use strict";t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var a=r*s,l=e*r,c=l-r,h=l-c,d=r-h,p=e*s,g=p-s,x=p-g,b=s-x,_=a-h*x,y=_-d*x,w=y-h*b,m=d*b-w;return o?(o[0]=m,o[1]=a,o):[m,a]}}}),yx=hi({"node_modules/robust-sum/robust-sum.js"(i,t){"use strict";t.exports=n;function e(r,s){var o=r+s,a=o-r,l=o-a,c=s-a,h=r-l,d=h+c;return d?[d,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var l=o+a,c=new Array(l),h=0,d=0,p=0,g=Math.abs,x=r[d],b=g(x),_=s[p],y=g(_),w,m;b<y?(m=x,d+=1,d<o&&(x=r[d],b=g(x))):(m=_,p+=1,p<a&&(_=s[p],y=g(_))),d<o&&b<y||p>=a?(w=x,d+=1,d<o&&(x=r[d],b=g(x))):(w=_,p+=1,p<a&&(_=s[p],y=g(_)));for(var u=w+m,v=u-w,f=m-v,C=f,M=u,S,E,T,A,R;d<o&&p<a;)b<y?(w=x,d+=1,d<o&&(x=r[d],b=g(x))):(w=_,p+=1,p<a&&(_=s[p],y=g(_))),m=C,u=w+m,v=u-w,f=m-v,f&&(c[h++]=f),S=M+u,E=S-M,T=S-E,A=u-E,R=M-T,C=R+A,M=S;for(;d<o;)w=x,m=C,u=w+m,v=u-w,f=m-v,f&&(c[h++]=f),S=M+u,E=S-M,T=S-E,A=u-E,R=M-T,C=R+A,M=S,d+=1,d<o&&(x=r[d]);for(;p<a;)w=_,m=C,u=w+m,v=u-w,f=m-v,f&&(c[h++]=f),S=M+u,E=S-M,T=S-E,A=u-E,R=M-T,C=R+A,M=S,p+=1,p<a&&(_=s[p]);return C&&(c[h++]=C),M&&(c[h++]=M),h||(c[h++]=0),c.length=h,c}}}),Rw=hi({"node_modules/two-sum/two-sum.js"(i,t){"use strict";t.exports=e;function e(n,r,s){var o=n+r,a=o-n,l=o-a,c=r-a,h=n-l;return s?(s[0]=h+c,s[1]=o,s):[h+c,o]}}}),Mx=hi({"node_modules/robust-scale/robust-scale.js"(i,t){"use strict";var e=Pp(),n=Rw();t.exports=r;function r(s,o){var a=s.length;if(a===1){var l=e(s[0],o);return l[0]?l:[l[1]]}var c=new Array(2*a),h=[.1,.1],d=[.1,.1],p=0;e(s[0],o,h),h[0]&&(c[p++]=h[0]);for(var g=1;g<a;++g){e(s[g],o,d);var x=h[1];n(x,d[0],h),h[0]&&(c[p++]=h[0]);var b=d[1],_=h[1],y=b+_,w=y-b,m=_-w;h[1]=y,m&&(c[p++]=m)}return h[1]&&(c[p++]=h[1]),p===0&&(c[p++]=0),c.length=p,c}}}),Sx=hi({"node_modules/robust-subtract/robust-diff.js"(i,t){"use strict";t.exports=n;function e(r,s){var o=r+s,a=o-r,l=o-a,c=s-a,h=r-l,d=h+c;return d?[d,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var l=o+a,c=new Array(l),h=0,d=0,p=0,g=Math.abs,x=r[d],b=g(x),_=-s[p],y=g(_),w,m;b<y?(m=x,d+=1,d<o&&(x=r[d],b=g(x))):(m=_,p+=1,p<a&&(_=-s[p],y=g(_))),d<o&&b<y||p>=a?(w=x,d+=1,d<o&&(x=r[d],b=g(x))):(w=_,p+=1,p<a&&(_=-s[p],y=g(_)));for(var u=w+m,v=u-w,f=m-v,C=f,M=u,S,E,T,A,R;d<o&&p<a;)b<y?(w=x,d+=1,d<o&&(x=r[d],b=g(x))):(w=_,p+=1,p<a&&(_=-s[p],y=g(_))),m=C,u=w+m,v=u-w,f=m-v,f&&(c[h++]=f),S=M+u,E=S-M,T=S-E,A=u-E,R=M-T,C=R+A,M=S;for(;d<o;)w=x,m=C,u=w+m,v=u-w,f=m-v,f&&(c[h++]=f),S=M+u,E=S-M,T=S-E,A=u-E,R=M-T,C=R+A,M=S,d+=1,d<o&&(x=r[d]);for(;p<a;)w=_,m=C,u=w+m,v=u-w,f=m-v,f&&(c[h++]=f),S=M+u,E=S-M,T=S-E,A=u-E,R=M-T,C=R+A,M=S,p+=1,p<a&&(_=-s[p]);return C&&(c[h++]=C),M&&(c[h++]=M),h||(c[h++]=0),c.length=h,c}}}),Cw=hi({"node_modules/robust-orientation/orientation.js"(i,t){"use strict";var e=Pp(),n=yx(),r=Mx(),s=Sx(),o=5,a=11102230246251565e-32,l=(3+16*a)*a,c=(7+56*a)*a;function h(u,v,f,C){return function(S,E,T){var A=u(u(v(E[1],T[0]),v(-T[1],E[0])),u(v(S[1],E[0]),v(-E[1],S[0]))),R=u(v(S[1],T[0]),v(-T[1],S[0])),U=C(A,R);return U[U.length-1]}}function d(u,v,f,C){return function(S,E,T,A){var R=u(u(f(u(v(T[1],A[0]),v(-A[1],T[0])),E[2]),u(f(u(v(E[1],A[0]),v(-A[1],E[0])),-T[2]),f(u(v(E[1],T[0]),v(-T[1],E[0])),A[2]))),u(f(u(v(E[1],A[0]),v(-A[1],E[0])),S[2]),u(f(u(v(S[1],A[0]),v(-A[1],S[0])),-E[2]),f(u(v(S[1],E[0]),v(-E[1],S[0])),A[2])))),U=u(u(f(u(v(T[1],A[0]),v(-A[1],T[0])),S[2]),u(f(u(v(S[1],A[0]),v(-A[1],S[0])),-T[2]),f(u(v(S[1],T[0]),v(-T[1],S[0])),A[2]))),u(f(u(v(E[1],T[0]),v(-T[1],E[0])),S[2]),u(f(u(v(S[1],T[0]),v(-T[1],S[0])),-E[2]),f(u(v(S[1],E[0]),v(-E[1],S[0])),T[2])))),F=C(R,U);return F[F.length-1]}}function p(u,v,f,C){return function(S,E,T,A,R){var U=u(u(u(f(u(f(u(v(A[1],R[0]),v(-R[1],A[0])),T[2]),u(f(u(v(T[1],R[0]),v(-R[1],T[0])),-A[2]),f(u(v(T[1],A[0]),v(-A[1],T[0])),R[2]))),E[3]),u(f(u(f(u(v(A[1],R[0]),v(-R[1],A[0])),E[2]),u(f(u(v(E[1],R[0]),v(-R[1],E[0])),-A[2]),f(u(v(E[1],A[0]),v(-A[1],E[0])),R[2]))),-T[3]),f(u(f(u(v(T[1],R[0]),v(-R[1],T[0])),E[2]),u(f(u(v(E[1],R[0]),v(-R[1],E[0])),-T[2]),f(u(v(E[1],T[0]),v(-T[1],E[0])),R[2]))),A[3]))),u(f(u(f(u(v(T[1],A[0]),v(-A[1],T[0])),E[2]),u(f(u(v(E[1],A[0]),v(-A[1],E[0])),-T[2]),f(u(v(E[1],T[0]),v(-T[1],E[0])),A[2]))),-R[3]),u(f(u(f(u(v(A[1],R[0]),v(-R[1],A[0])),E[2]),u(f(u(v(E[1],R[0]),v(-R[1],E[0])),-A[2]),f(u(v(E[1],A[0]),v(-A[1],E[0])),R[2]))),S[3]),f(u(f(u(v(A[1],R[0]),v(-R[1],A[0])),S[2]),u(f(u(v(S[1],R[0]),v(-R[1],S[0])),-A[2]),f(u(v(S[1],A[0]),v(-A[1],S[0])),R[2]))),-E[3])))),u(u(f(u(f(u(v(E[1],R[0]),v(-R[1],E[0])),S[2]),u(f(u(v(S[1],R[0]),v(-R[1],S[0])),-E[2]),f(u(v(S[1],E[0]),v(-E[1],S[0])),R[2]))),A[3]),u(f(u(f(u(v(E[1],A[0]),v(-A[1],E[0])),S[2]),u(f(u(v(S[1],A[0]),v(-A[1],S[0])),-E[2]),f(u(v(S[1],E[0]),v(-E[1],S[0])),A[2]))),-R[3]),f(u(f(u(v(T[1],A[0]),v(-A[1],T[0])),E[2]),u(f(u(v(E[1],A[0]),v(-A[1],E[0])),-T[2]),f(u(v(E[1],T[0]),v(-T[1],E[0])),A[2]))),S[3]))),u(f(u(f(u(v(T[1],A[0]),v(-A[1],T[0])),S[2]),u(f(u(v(S[1],A[0]),v(-A[1],S[0])),-T[2]),f(u(v(S[1],T[0]),v(-T[1],S[0])),A[2]))),-E[3]),u(f(u(f(u(v(E[1],A[0]),v(-A[1],E[0])),S[2]),u(f(u(v(S[1],A[0]),v(-A[1],S[0])),-E[2]),f(u(v(S[1],E[0]),v(-E[1],S[0])),A[2]))),T[3]),f(u(f(u(v(E[1],T[0]),v(-T[1],E[0])),S[2]),u(f(u(v(S[1],T[0]),v(-T[1],S[0])),-E[2]),f(u(v(S[1],E[0]),v(-E[1],S[0])),T[2]))),-A[3]))))),F=u(u(u(f(u(f(u(v(A[1],R[0]),v(-R[1],A[0])),T[2]),u(f(u(v(T[1],R[0]),v(-R[1],T[0])),-A[2]),f(u(v(T[1],A[0]),v(-A[1],T[0])),R[2]))),S[3]),f(u(f(u(v(A[1],R[0]),v(-R[1],A[0])),S[2]),u(f(u(v(S[1],R[0]),v(-R[1],S[0])),-A[2]),f(u(v(S[1],A[0]),v(-A[1],S[0])),R[2]))),-T[3])),u(f(u(f(u(v(T[1],R[0]),v(-R[1],T[0])),S[2]),u(f(u(v(S[1],R[0]),v(-R[1],S[0])),-T[2]),f(u(v(S[1],T[0]),v(-T[1],S[0])),R[2]))),A[3]),f(u(f(u(v(T[1],A[0]),v(-A[1],T[0])),S[2]),u(f(u(v(S[1],A[0]),v(-A[1],S[0])),-T[2]),f(u(v(S[1],T[0]),v(-T[1],S[0])),A[2]))),-R[3]))),u(u(f(u(f(u(v(T[1],R[0]),v(-R[1],T[0])),E[2]),u(f(u(v(E[1],R[0]),v(-R[1],E[0])),-T[2]),f(u(v(E[1],T[0]),v(-T[1],E[0])),R[2]))),S[3]),f(u(f(u(v(T[1],R[0]),v(-R[1],T[0])),S[2]),u(f(u(v(S[1],R[0]),v(-R[1],S[0])),-T[2]),f(u(v(S[1],T[0]),v(-T[1],S[0])),R[2]))),-E[3])),u(f(u(f(u(v(E[1],R[0]),v(-R[1],E[0])),S[2]),u(f(u(v(S[1],R[0]),v(-R[1],S[0])),-E[2]),f(u(v(S[1],E[0]),v(-E[1],S[0])),R[2]))),T[3]),f(u(f(u(v(E[1],T[0]),v(-T[1],E[0])),S[2]),u(f(u(v(S[1],T[0]),v(-T[1],S[0])),-E[2]),f(u(v(S[1],E[0]),v(-E[1],S[0])),T[2]))),-R[3])))),z=C(U,F);return z[z.length-1]}}function g(u){var v=u===3?h:u===4?d:p;return v(n,e,r,s)}var x=g(3),b=g(4),_=[function(){return 0},function(){return 0},function(v,f){return f[0]-v[0]},function(v,f,C){var M=(v[1]-C[1])*(f[0]-C[0]),S=(v[0]-C[0])*(f[1]-C[1]),E=M-S,T;if(M>0){if(S<=0)return E;T=M+S}else if(M<0){if(S>=0)return E;T=-(M+S)}else return E;var A=l*T;return E>=A||E<=-A?E:x(v,f,C)},function(v,f,C,M){var S=v[0]-M[0],E=f[0]-M[0],T=C[0]-M[0],A=v[1]-M[1],R=f[1]-M[1],U=C[1]-M[1],F=v[2]-M[2],z=f[2]-M[2],V=C[2]-M[2],Z=E*U,H=T*R,tt=T*A,q=S*U,ut=S*R,dt=E*A,Et=F*(Z-H)+z*(tt-q)+V*(ut-dt),St=(Math.abs(Z)+Math.abs(H))*Math.abs(F)+(Math.abs(tt)+Math.abs(q))*Math.abs(z)+(Math.abs(ut)+Math.abs(dt))*Math.abs(V),Vt=c*St;return Et>Vt||-Et>Vt?Et:b(v,f,C,M)}];function y(u){var v=_[u.length];return v||(v=_[u.length]=g(u.length)),v.apply(void 0,u)}function w(u,v,f,C,M,S,E){return function(A,R,U,F,z){switch(arguments.length){case 0:case 1:return 0;case 2:return C(A,R);case 3:return M(A,R,U);case 4:return S(A,R,U,F);case 5:return E(A,R,U,F,z)}for(var V=new Array(arguments.length),Z=0;Z<arguments.length;++Z)V[Z]=arguments[Z];return u(V)}}function m(){for(;_.length<=o;)_.push(g(_.length));t.exports=w.apply(void 0,[y].concat(_));for(var u=0;u<=o;++u)t.exports[u]=_[u]}m()}}),Pw=hi({"node_modules/cdt2d/lib/monotone.js"(i,t){"use strict";var e=Wh(),n=Cw()[3],r=0,s=1,o=2;t.exports=b;function a(_,y,w,m,u){this.a=_,this.b=y,this.idx=w,this.lowerIds=m,this.upperIds=u}function l(_,y,w,m){this.a=_,this.b=y,this.type=w,this.idx=m}function c(_,y){var w=_.a[0]-y.a[0]||_.a[1]-y.a[1]||_.type-y.type;return w||_.type!==r&&(w=n(_.a,_.b,y.b),w)?w:_.idx-y.idx}function h(_,y){return n(_.a,_.b,y)}function d(_,y,w,m,u){for(var v=e.lt(y,m,h),f=e.gt(y,m,h),C=v;C<f;++C){for(var M=y[C],S=M.lowerIds,T=S.length;T>1&&n(w[S[T-2]],w[S[T-1]],m)>0;)_.push([S[T-1],S[T-2],u]),T-=1;S.length=T,S.push(u);for(var E=M.upperIds,T=E.length;T>1&&n(w[E[T-2]],w[E[T-1]],m)<0;)_.push([E[T-2],E[T-1],u]),T-=1;E.length=T,E.push(u)}}function p(_,y){var w;return _.a[0]<y.a[0]?w=n(_.a,_.b,y.a):w=n(y.b,y.a,_.a),w||(y.b[0]<_.b[0]?w=n(_.a,_.b,y.b):w=n(y.b,y.a,_.b),w||_.idx-y.idx)}function g(_,y,w){var m=e.le(_,w,p),u=_[m],v=u.upperIds,f=v[v.length-1];u.upperIds=[f],_.splice(m+1,0,new a(w.a,w.b,w.idx,[f],v))}function x(_,y,w){var m=w.a;w.a=w.b,w.b=m;var u=e.eq(_,w,p),v=_[u],f=_[u-1];f.upperIds=v.upperIds,_.splice(u,1)}function b(_,y){for(var w=_.length,m=y.length,u=[],v=0;v<w;++v)u.push(new l(_[v],null,r,v));for(var v=0;v<m;++v){var f=y[v],C=_[f[0]],M=_[f[1]];C[0]<M[0]?u.push(new l(C,M,o,v),new l(M,C,s,v)):C[0]>M[0]&&u.push(new l(M,C,o,v),new l(C,M,s,v))}u.sort(c);for(var S=u[0].a[0]-(1+Math.abs(u[0].a[0]))*Math.pow(2,-52),E=[new a([S,1],[S,0],-1,[],[],[],[])],T=[],v=0,A=u.length;v<A;++v){var R=u[v],U=R.type;U===r?d(T,E,_,R.a,R.idx):U===o?g(E,_,R):x(E,_,R)}return T}}}),Iw=hi({"node_modules/cdt2d/lib/triangulation.js"(i,t){"use strict";var e=Wh();t.exports=o;function n(a,l){this.stars=a,this.edges=l}var r=n.prototype;function s(a,l,c){for(var h=1,d=a.length;h<d;h+=2)if(a[h-1]===l&&a[h]===c){a[h-1]=a[d-2],a[h]=a[d-1],a.length=d-2;return}}r.isConstraint=(function(){var a=[0,0];function l(c,h){return c[0]-h[0]||c[1]-h[1]}return function(c,h){return a[0]=Math.min(c,h),a[1]=Math.max(c,h),e.eq(this.edges,a,l)>=0}})(),r.removeTriangle=function(a,l,c){var h=this.stars;s(h[a],l,c),s(h[l],c,a),s(h[c],a,l)},r.addTriangle=function(a,l,c){var h=this.stars;h[a].push(l,c),h[l].push(c,a),h[c].push(a,l)},r.opposite=function(a,l){for(var c=this.stars[l],h=1,d=c.length;h<d;h+=2)if(c[h]===a)return c[h-1];return-1},r.flip=function(a,l){var c=this.opposite(a,l),h=this.opposite(l,a);this.removeTriangle(a,l,c),this.removeTriangle(l,a,h),this.addTriangle(a,h,c),this.addTriangle(l,c,h)},r.edges=function(){for(var a=this.stars,l=[],c=0,h=a.length;c<h;++c)for(var d=a[c],p=0,g=d.length;p<g;p+=2)l.push([d[p],d[p+1]]);return l},r.cells=function(){for(var a=this.stars,l=[],c=0,h=a.length;c<h;++c)for(var d=a[c],p=0,g=d.length;p<g;p+=2){var x=d[p],b=d[p+1];c<Math.min(x,b)&&l.push([c,x,b])}return l};function o(a,l){for(var c=new Array(a),h=0;h<a;++h)c[h]=[];return new n(c,l)}}}),Dw=hi({"node_modules/robust-in-sphere/in-sphere.js"(i,t){"use strict";var e=Pp(),n=yx(),r=Sx(),s=Mx(),o=6;function a(m){var u=m===3?d:m===4?p:m===5?g:x;return u(n,r,e,s)}function l(){return 0}function c(){return 0}function h(){return 0}function d(m,u,v,f){function C(M,S,E){var T=v(M[0],M[0]),A=f(T,S[0]),R=f(T,E[0]),U=v(S[0],S[0]),F=f(U,M[0]),z=f(U,E[0]),V=v(E[0],E[0]),Z=f(V,M[0]),H=f(V,S[0]),tt=m(u(H,z),u(F,A)),q=u(Z,R),ut=u(tt,q);return ut[ut.length-1]}return C}function p(m,u,v,f){function C(M,S,E,T){var A=m(v(M[0],M[0]),v(M[1],M[1])),R=f(A,S[0]),U=f(A,E[0]),F=f(A,T[0]),z=m(v(S[0],S[0]),v(S[1],S[1])),V=f(z,M[0]),Z=f(z,E[0]),H=f(z,T[0]),tt=m(v(E[0],E[0]),v(E[1],E[1])),q=f(tt,M[0]),ut=f(tt,S[0]),dt=f(tt,T[0]),Et=m(v(T[0],T[0]),v(T[1],T[1])),St=f(Et,M[0]),Vt=f(Et,S[0]),J=f(Et,E[0]),N=m(m(f(u(J,dt),S[1]),m(f(u(Vt,H),-E[1]),f(u(ut,Z),T[1]))),m(f(u(Vt,H),M[1]),m(f(u(St,F),-S[1]),f(u(V,R),T[1])))),lt=m(m(f(u(J,dt),M[1]),m(f(u(St,F),-E[1]),f(u(q,U),T[1]))),m(f(u(ut,Z),M[1]),m(f(u(q,U),-S[1]),f(u(V,R),E[1])))),Mt=u(N,lt);return Mt[Mt.length-1]}return C}function g(m,u,v,f){function C(M,S,E,T,A){var R=m(v(M[0],M[0]),m(v(M[1],M[1]),v(M[2],M[2]))),U=f(R,S[0]),F=f(R,E[0]),z=f(R,T[0]),V=f(R,A[0]),Z=m(v(S[0],S[0]),m(v(S[1],S[1]),v(S[2],S[2]))),H=f(Z,M[0]),tt=f(Z,E[0]),q=f(Z,T[0]),ut=f(Z,A[0]),dt=m(v(E[0],E[0]),m(v(E[1],E[1]),v(E[2],E[2]))),Et=f(dt,M[0]),St=f(dt,S[0]),Vt=f(dt,T[0]),J=f(dt,A[0]),N=m(v(T[0],T[0]),m(v(T[1],T[1]),v(T[2],T[2]))),lt=f(N,M[0]),Mt=f(N,S[0]),xt=f(N,E[0]),bt=f(N,A[0]),pt=m(v(A[0],A[0]),m(v(A[1],A[1]),v(A[2],A[2]))),Q=f(pt,M[0]),nt=f(pt,S[0]),ft=f(pt,E[0]),ct=f(pt,T[0]),Tt=m(m(m(f(m(f(u(ct,bt),E[1]),m(f(u(ft,J),-T[1]),f(u(xt,Vt),A[1]))),S[2]),m(f(m(f(u(ct,bt),S[1]),m(f(u(nt,ut),-T[1]),f(u(Mt,q),A[1]))),-E[2]),f(m(f(u(ft,J),S[1]),m(f(u(nt,ut),-E[1]),f(u(St,tt),A[1]))),T[2]))),m(f(m(f(u(xt,Vt),S[1]),m(f(u(Mt,q),-E[1]),f(u(St,tt),T[1]))),-A[2]),m(f(m(f(u(ct,bt),S[1]),m(f(u(nt,ut),-T[1]),f(u(Mt,q),A[1]))),M[2]),f(m(f(u(ct,bt),M[1]),m(f(u(Q,V),-T[1]),f(u(lt,z),A[1]))),-S[2])))),m(m(f(m(f(u(nt,ut),M[1]),m(f(u(Q,V),-S[1]),f(u(H,U),A[1]))),T[2]),m(f(m(f(u(Mt,q),M[1]),m(f(u(lt,z),-S[1]),f(u(H,U),T[1]))),-A[2]),f(m(f(u(xt,Vt),S[1]),m(f(u(Mt,q),-E[1]),f(u(St,tt),T[1]))),M[2]))),m(f(m(f(u(xt,Vt),M[1]),m(f(u(lt,z),-E[1]),f(u(Et,F),T[1]))),-S[2]),m(f(m(f(u(Mt,q),M[1]),m(f(u(lt,z),-S[1]),f(u(H,U),T[1]))),E[2]),f(m(f(u(St,tt),M[1]),m(f(u(Et,F),-S[1]),f(u(H,U),E[1]))),-T[2]))))),Ct=m(m(m(f(m(f(u(ct,bt),E[1]),m(f(u(ft,J),-T[1]),f(u(xt,Vt),A[1]))),M[2]),f(m(f(u(ct,bt),M[1]),m(f(u(Q,V),-T[1]),f(u(lt,z),A[1]))),-E[2])),m(f(m(f(u(ft,J),M[1]),m(f(u(Q,V),-E[1]),f(u(Et,F),A[1]))),T[2]),f(m(f(u(xt,Vt),M[1]),m(f(u(lt,z),-E[1]),f(u(Et,F),T[1]))),-A[2]))),m(m(f(m(f(u(ft,J),S[1]),m(f(u(nt,ut),-E[1]),f(u(St,tt),A[1]))),M[2]),f(m(f(u(ft,J),M[1]),m(f(u(Q,V),-E[1]),f(u(Et,F),A[1]))),-S[2])),m(f(m(f(u(nt,ut),M[1]),m(f(u(Q,V),-S[1]),f(u(H,U),A[1]))),E[2]),f(m(f(u(St,tt),M[1]),m(f(u(Et,F),-S[1]),f(u(H,U),E[1]))),-A[2])))),Rt=u(Tt,Ct);return Rt[Rt.length-1]}return C}function x(m,u,v,f){function C(M,S,E,T,A,R){var U=m(m(v(M[0],M[0]),v(M[1],M[1])),m(v(M[2],M[2]),v(M[3],M[3]))),F=f(U,S[0]),z=f(U,E[0]),V=f(U,T[0]),Z=f(U,A[0]),H=f(U,R[0]),tt=m(m(v(S[0],S[0]),v(S[1],S[1])),m(v(S[2],S[2]),v(S[3],S[3]))),q=f(tt,M[0]),ut=f(tt,E[0]),dt=f(tt,T[0]),Et=f(tt,A[0]),St=f(tt,R[0]),Vt=m(m(v(E[0],E[0]),v(E[1],E[1])),m(v(E[2],E[2]),v(E[3],E[3]))),J=f(Vt,M[0]),N=f(Vt,S[0]),lt=f(Vt,T[0]),Mt=f(Vt,A[0]),xt=f(Vt,R[0]),bt=m(m(v(T[0],T[0]),v(T[1],T[1])),m(v(T[2],T[2]),v(T[3],T[3]))),pt=f(bt,M[0]),Q=f(bt,S[0]),nt=f(bt,E[0]),ft=f(bt,A[0]),ct=f(bt,R[0]),Tt=m(m(v(A[0],A[0]),v(A[1],A[1])),m(v(A[2],A[2]),v(A[3],A[3]))),Ct=f(Tt,M[0]),Rt=f(Tt,S[0]),Ut=f(Tt,E[0]),zt=f(Tt,T[0]),k=f(Tt,R[0]),fe=m(m(v(R[0],R[0]),v(R[1],R[1])),m(v(R[2],R[2]),v(R[3],R[3]))),Yt=f(fe,M[0]),B=f(fe,S[0]),P=f(fe,E[0]),X=f(fe,T[0]),K=f(fe,A[0]),st=m(m(m(f(m(m(f(m(f(u(K,k),T[1]),m(f(u(X,ct),-A[1]),f(u(zt,ft),R[1]))),E[2]),f(m(f(u(K,k),E[1]),m(f(u(P,xt),-A[1]),f(u(Ut,Mt),R[1]))),-T[2])),m(f(m(f(u(X,ct),E[1]),m(f(u(P,xt),-T[1]),f(u(nt,lt),R[1]))),A[2]),f(m(f(u(zt,ft),E[1]),m(f(u(Ut,Mt),-T[1]),f(u(nt,lt),A[1]))),-R[2]))),S[3]),m(f(m(m(f(m(f(u(K,k),T[1]),m(f(u(X,ct),-A[1]),f(u(zt,ft),R[1]))),S[2]),f(m(f(u(K,k),S[1]),m(f(u(B,St),-A[1]),f(u(Rt,Et),R[1]))),-T[2])),m(f(m(f(u(X,ct),S[1]),m(f(u(B,St),-T[1]),f(u(Q,dt),R[1]))),A[2]),f(m(f(u(zt,ft),S[1]),m(f(u(Rt,Et),-T[1]),f(u(Q,dt),A[1]))),-R[2]))),-E[3]),f(m(m(f(m(f(u(K,k),E[1]),m(f(u(P,xt),-A[1]),f(u(Ut,Mt),R[1]))),S[2]),f(m(f(u(K,k),S[1]),m(f(u(B,St),-A[1]),f(u(Rt,Et),R[1]))),-E[2])),m(f(m(f(u(P,xt),S[1]),m(f(u(B,St),-E[1]),f(u(N,ut),R[1]))),A[2]),f(m(f(u(Ut,Mt),S[1]),m(f(u(Rt,Et),-E[1]),f(u(N,ut),A[1]))),-R[2]))),T[3]))),m(m(f(m(m(f(m(f(u(X,ct),E[1]),m(f(u(P,xt),-T[1]),f(u(nt,lt),R[1]))),S[2]),f(m(f(u(X,ct),S[1]),m(f(u(B,St),-T[1]),f(u(Q,dt),R[1]))),-E[2])),m(f(m(f(u(P,xt),S[1]),m(f(u(B,St),-E[1]),f(u(N,ut),R[1]))),T[2]),f(m(f(u(nt,lt),S[1]),m(f(u(Q,dt),-E[1]),f(u(N,ut),T[1]))),-R[2]))),-A[3]),f(m(m(f(m(f(u(zt,ft),E[1]),m(f(u(Ut,Mt),-T[1]),f(u(nt,lt),A[1]))),S[2]),f(m(f(u(zt,ft),S[1]),m(f(u(Rt,Et),-T[1]),f(u(Q,dt),A[1]))),-E[2])),m(f(m(f(u(Ut,Mt),S[1]),m(f(u(Rt,Et),-E[1]),f(u(N,ut),A[1]))),T[2]),f(m(f(u(nt,lt),S[1]),m(f(u(Q,dt),-E[1]),f(u(N,ut),T[1]))),-A[2]))),R[3])),m(f(m(m(f(m(f(u(K,k),T[1]),m(f(u(X,ct),-A[1]),f(u(zt,ft),R[1]))),S[2]),f(m(f(u(K,k),S[1]),m(f(u(B,St),-A[1]),f(u(Rt,Et),R[1]))),-T[2])),m(f(m(f(u(X,ct),S[1]),m(f(u(B,St),-T[1]),f(u(Q,dt),R[1]))),A[2]),f(m(f(u(zt,ft),S[1]),m(f(u(Rt,Et),-T[1]),f(u(Q,dt),A[1]))),-R[2]))),M[3]),f(m(m(f(m(f(u(K,k),T[1]),m(f(u(X,ct),-A[1]),f(u(zt,ft),R[1]))),M[2]),f(m(f(u(K,k),M[1]),m(f(u(Yt,H),-A[1]),f(u(Ct,Z),R[1]))),-T[2])),m(f(m(f(u(X,ct),M[1]),m(f(u(Yt,H),-T[1]),f(u(pt,V),R[1]))),A[2]),f(m(f(u(zt,ft),M[1]),m(f(u(Ct,Z),-T[1]),f(u(pt,V),A[1]))),-R[2]))),-S[3])))),m(m(m(f(m(m(f(m(f(u(K,k),S[1]),m(f(u(B,St),-A[1]),f(u(Rt,Et),R[1]))),M[2]),f(m(f(u(K,k),M[1]),m(f(u(Yt,H),-A[1]),f(u(Ct,Z),R[1]))),-S[2])),m(f(m(f(u(B,St),M[1]),m(f(u(Yt,H),-S[1]),f(u(q,F),R[1]))),A[2]),f(m(f(u(Rt,Et),M[1]),m(f(u(Ct,Z),-S[1]),f(u(q,F),A[1]))),-R[2]))),T[3]),f(m(m(f(m(f(u(X,ct),S[1]),m(f(u(B,St),-T[1]),f(u(Q,dt),R[1]))),M[2]),f(m(f(u(X,ct),M[1]),m(f(u(Yt,H),-T[1]),f(u(pt,V),R[1]))),-S[2])),m(f(m(f(u(B,St),M[1]),m(f(u(Yt,H),-S[1]),f(u(q,F),R[1]))),T[2]),f(m(f(u(Q,dt),M[1]),m(f(u(pt,V),-S[1]),f(u(q,F),T[1]))),-R[2]))),-A[3])),m(f(m(m(f(m(f(u(zt,ft),S[1]),m(f(u(Rt,Et),-T[1]),f(u(Q,dt),A[1]))),M[2]),f(m(f(u(zt,ft),M[1]),m(f(u(Ct,Z),-T[1]),f(u(pt,V),A[1]))),-S[2])),m(f(m(f(u(Rt,Et),M[1]),m(f(u(Ct,Z),-S[1]),f(u(q,F),A[1]))),T[2]),f(m(f(u(Q,dt),M[1]),m(f(u(pt,V),-S[1]),f(u(q,F),T[1]))),-A[2]))),R[3]),f(m(m(f(m(f(u(X,ct),E[1]),m(f(u(P,xt),-T[1]),f(u(nt,lt),R[1]))),S[2]),f(m(f(u(X,ct),S[1]),m(f(u(B,St),-T[1]),f(u(Q,dt),R[1]))),-E[2])),m(f(m(f(u(P,xt),S[1]),m(f(u(B,St),-E[1]),f(u(N,ut),R[1]))),T[2]),f(m(f(u(nt,lt),S[1]),m(f(u(Q,dt),-E[1]),f(u(N,ut),T[1]))),-R[2]))),M[3]))),m(m(f(m(m(f(m(f(u(X,ct),E[1]),m(f(u(P,xt),-T[1]),f(u(nt,lt),R[1]))),M[2]),f(m(f(u(X,ct),M[1]),m(f(u(Yt,H),-T[1]),f(u(pt,V),R[1]))),-E[2])),m(f(m(f(u(P,xt),M[1]),m(f(u(Yt,H),-E[1]),f(u(J,z),R[1]))),T[2]),f(m(f(u(nt,lt),M[1]),m(f(u(pt,V),-E[1]),f(u(J,z),T[1]))),-R[2]))),-S[3]),f(m(m(f(m(f(u(X,ct),S[1]),m(f(u(B,St),-T[1]),f(u(Q,dt),R[1]))),M[2]),f(m(f(u(X,ct),M[1]),m(f(u(Yt,H),-T[1]),f(u(pt,V),R[1]))),-S[2])),m(f(m(f(u(B,St),M[1]),m(f(u(Yt,H),-S[1]),f(u(q,F),R[1]))),T[2]),f(m(f(u(Q,dt),M[1]),m(f(u(pt,V),-S[1]),f(u(q,F),T[1]))),-R[2]))),E[3])),m(f(m(m(f(m(f(u(P,xt),S[1]),m(f(u(B,St),-E[1]),f(u(N,ut),R[1]))),M[2]),f(m(f(u(P,xt),M[1]),m(f(u(Yt,H),-E[1]),f(u(J,z),R[1]))),-S[2])),m(f(m(f(u(B,St),M[1]),m(f(u(Yt,H),-S[1]),f(u(q,F),R[1]))),E[2]),f(m(f(u(N,ut),M[1]),m(f(u(J,z),-S[1]),f(u(q,F),E[1]))),-R[2]))),-T[3]),f(m(m(f(m(f(u(nt,lt),S[1]),m(f(u(Q,dt),-E[1]),f(u(N,ut),T[1]))),M[2]),f(m(f(u(nt,lt),M[1]),m(f(u(pt,V),-E[1]),f(u(J,z),T[1]))),-S[2])),m(f(m(f(u(Q,dt),M[1]),m(f(u(pt,V),-S[1]),f(u(q,F),T[1]))),E[2]),f(m(f(u(N,ut),M[1]),m(f(u(J,z),-S[1]),f(u(q,F),E[1]))),-T[2]))),R[3]))))),wt=m(m(m(f(m(m(f(m(f(u(K,k),T[1]),m(f(u(X,ct),-A[1]),f(u(zt,ft),R[1]))),E[2]),f(m(f(u(K,k),E[1]),m(f(u(P,xt),-A[1]),f(u(Ut,Mt),R[1]))),-T[2])),m(f(m(f(u(X,ct),E[1]),m(f(u(P,xt),-T[1]),f(u(nt,lt),R[1]))),A[2]),f(m(f(u(zt,ft),E[1]),m(f(u(Ut,Mt),-T[1]),f(u(nt,lt),A[1]))),-R[2]))),M[3]),m(f(m(m(f(m(f(u(K,k),T[1]),m(f(u(X,ct),-A[1]),f(u(zt,ft),R[1]))),M[2]),f(m(f(u(K,k),M[1]),m(f(u(Yt,H),-A[1]),f(u(Ct,Z),R[1]))),-T[2])),m(f(m(f(u(X,ct),M[1]),m(f(u(Yt,H),-T[1]),f(u(pt,V),R[1]))),A[2]),f(m(f(u(zt,ft),M[1]),m(f(u(Ct,Z),-T[1]),f(u(pt,V),A[1]))),-R[2]))),-E[3]),f(m(m(f(m(f(u(K,k),E[1]),m(f(u(P,xt),-A[1]),f(u(Ut,Mt),R[1]))),M[2]),f(m(f(u(K,k),M[1]),m(f(u(Yt,H),-A[1]),f(u(Ct,Z),R[1]))),-E[2])),m(f(m(f(u(P,xt),M[1]),m(f(u(Yt,H),-E[1]),f(u(J,z),R[1]))),A[2]),f(m(f(u(Ut,Mt),M[1]),m(f(u(Ct,Z),-E[1]),f(u(J,z),A[1]))),-R[2]))),T[3]))),m(m(f(m(m(f(m(f(u(X,ct),E[1]),m(f(u(P,xt),-T[1]),f(u(nt,lt),R[1]))),M[2]),f(m(f(u(X,ct),M[1]),m(f(u(Yt,H),-T[1]),f(u(pt,V),R[1]))),-E[2])),m(f(m(f(u(P,xt),M[1]),m(f(u(Yt,H),-E[1]),f(u(J,z),R[1]))),T[2]),f(m(f(u(nt,lt),M[1]),m(f(u(pt,V),-E[1]),f(u(J,z),T[1]))),-R[2]))),-A[3]),f(m(m(f(m(f(u(zt,ft),E[1]),m(f(u(Ut,Mt),-T[1]),f(u(nt,lt),A[1]))),M[2]),f(m(f(u(zt,ft),M[1]),m(f(u(Ct,Z),-T[1]),f(u(pt,V),A[1]))),-E[2])),m(f(m(f(u(Ut,Mt),M[1]),m(f(u(Ct,Z),-E[1]),f(u(J,z),A[1]))),T[2]),f(m(f(u(nt,lt),M[1]),m(f(u(pt,V),-E[1]),f(u(J,z),T[1]))),-A[2]))),R[3])),m(f(m(m(f(m(f(u(K,k),E[1]),m(f(u(P,xt),-A[1]),f(u(Ut,Mt),R[1]))),S[2]),f(m(f(u(K,k),S[1]),m(f(u(B,St),-A[1]),f(u(Rt,Et),R[1]))),-E[2])),m(f(m(f(u(P,xt),S[1]),m(f(u(B,St),-E[1]),f(u(N,ut),R[1]))),A[2]),f(m(f(u(Ut,Mt),S[1]),m(f(u(Rt,Et),-E[1]),f(u(N,ut),A[1]))),-R[2]))),M[3]),f(m(m(f(m(f(u(K,k),E[1]),m(f(u(P,xt),-A[1]),f(u(Ut,Mt),R[1]))),M[2]),f(m(f(u(K,k),M[1]),m(f(u(Yt,H),-A[1]),f(u(Ct,Z),R[1]))),-E[2])),m(f(m(f(u(P,xt),M[1]),m(f(u(Yt,H),-E[1]),f(u(J,z),R[1]))),A[2]),f(m(f(u(Ut,Mt),M[1]),m(f(u(Ct,Z),-E[1]),f(u(J,z),A[1]))),-R[2]))),-S[3])))),m(m(m(f(m(m(f(m(f(u(K,k),S[1]),m(f(u(B,St),-A[1]),f(u(Rt,Et),R[1]))),M[2]),f(m(f(u(K,k),M[1]),m(f(u(Yt,H),-A[1]),f(u(Ct,Z),R[1]))),-S[2])),m(f(m(f(u(B,St),M[1]),m(f(u(Yt,H),-S[1]),f(u(q,F),R[1]))),A[2]),f(m(f(u(Rt,Et),M[1]),m(f(u(Ct,Z),-S[1]),f(u(q,F),A[1]))),-R[2]))),E[3]),f(m(m(f(m(f(u(P,xt),S[1]),m(f(u(B,St),-E[1]),f(u(N,ut),R[1]))),M[2]),f(m(f(u(P,xt),M[1]),m(f(u(Yt,H),-E[1]),f(u(J,z),R[1]))),-S[2])),m(f(m(f(u(B,St),M[1]),m(f(u(Yt,H),-S[1]),f(u(q,F),R[1]))),E[2]),f(m(f(u(N,ut),M[1]),m(f(u(J,z),-S[1]),f(u(q,F),E[1]))),-R[2]))),-A[3])),m(f(m(m(f(m(f(u(Ut,Mt),S[1]),m(f(u(Rt,Et),-E[1]),f(u(N,ut),A[1]))),M[2]),f(m(f(u(Ut,Mt),M[1]),m(f(u(Ct,Z),-E[1]),f(u(J,z),A[1]))),-S[2])),m(f(m(f(u(Rt,Et),M[1]),m(f(u(Ct,Z),-S[1]),f(u(q,F),A[1]))),E[2]),f(m(f(u(N,ut),M[1]),m(f(u(J,z),-S[1]),f(u(q,F),E[1]))),-A[2]))),R[3]),f(m(m(f(m(f(u(zt,ft),E[1]),m(f(u(Ut,Mt),-T[1]),f(u(nt,lt),A[1]))),S[2]),f(m(f(u(zt,ft),S[1]),m(f(u(Rt,Et),-T[1]),f(u(Q,dt),A[1]))),-E[2])),m(f(m(f(u(Ut,Mt),S[1]),m(f(u(Rt,Et),-E[1]),f(u(N,ut),A[1]))),T[2]),f(m(f(u(nt,lt),S[1]),m(f(u(Q,dt),-E[1]),f(u(N,ut),T[1]))),-A[2]))),M[3]))),m(m(f(m(m(f(m(f(u(zt,ft),E[1]),m(f(u(Ut,Mt),-T[1]),f(u(nt,lt),A[1]))),M[2]),f(m(f(u(zt,ft),M[1]),m(f(u(Ct,Z),-T[1]),f(u(pt,V),A[1]))),-E[2])),m(f(m(f(u(Ut,Mt),M[1]),m(f(u(Ct,Z),-E[1]),f(u(J,z),A[1]))),T[2]),f(m(f(u(nt,lt),M[1]),m(f(u(pt,V),-E[1]),f(u(J,z),T[1]))),-A[2]))),-S[3]),f(m(m(f(m(f(u(zt,ft),S[1]),m(f(u(Rt,Et),-T[1]),f(u(Q,dt),A[1]))),M[2]),f(m(f(u(zt,ft),M[1]),m(f(u(Ct,Z),-T[1]),f(u(pt,V),A[1]))),-S[2])),m(f(m(f(u(Rt,Et),M[1]),m(f(u(Ct,Z),-S[1]),f(u(q,F),A[1]))),T[2]),f(m(f(u(Q,dt),M[1]),m(f(u(pt,V),-S[1]),f(u(q,F),T[1]))),-A[2]))),E[3])),m(f(m(m(f(m(f(u(Ut,Mt),S[1]),m(f(u(Rt,Et),-E[1]),f(u(N,ut),A[1]))),M[2]),f(m(f(u(Ut,Mt),M[1]),m(f(u(Ct,Z),-E[1]),f(u(J,z),A[1]))),-S[2])),m(f(m(f(u(Rt,Et),M[1]),m(f(u(Ct,Z),-S[1]),f(u(q,F),A[1]))),E[2]),f(m(f(u(N,ut),M[1]),m(f(u(J,z),-S[1]),f(u(q,F),E[1]))),-A[2]))),-T[3]),f(m(m(f(m(f(u(nt,lt),S[1]),m(f(u(Q,dt),-E[1]),f(u(N,ut),T[1]))),M[2]),f(m(f(u(nt,lt),M[1]),m(f(u(pt,V),-E[1]),f(u(J,z),T[1]))),-S[2])),m(f(m(f(u(Q,dt),M[1]),m(f(u(pt,V),-S[1]),f(u(q,F),T[1]))),E[2]),f(m(f(u(N,ut),M[1]),m(f(u(J,z),-S[1]),f(u(q,F),E[1]))),-T[2]))),A[3]))))),At=u(st,wt);return At[At.length-1]}return C}var b=[l,c,h];function _(m){var u=b[m.length];return u||(u=b[m.length]=a(m.length)),u.apply(void 0,m)}function y(m,u,v,f,C,M,S,E){function T(A,R,U,F,z,V){switch(arguments.length){case 0:case 1:return 0;case 2:return f(A,R);case 3:return C(A,R,U);case 4:return M(A,R,U,F);case 5:return S(A,R,U,F,z);case 6:return E(A,R,U,F,z,V)}for(var Z=new Array(arguments.length),H=0;H<arguments.length;++H)Z[H]=arguments[H];return m(Z)}return T}function w(){for(;b.length<=o;)b.push(a(b.length));t.exports=y.apply(void 0,[_].concat(b));for(var m=0;m<=o;++m)t.exports[m]=b[m]}w()}}),Lw=hi({"node_modules/cdt2d/lib/delaunay.js"(i,t){"use strict";var e=Dw()[4],n=Wh();t.exports=s;function r(o,a,l,c,h,d){var p=a.opposite(c,h);if(!(p<0)){if(h<c){var g=c;c=h,h=g,g=d,d=p,p=g}a.isConstraint(c,h)||e(o[c],o[h],o[d],o[p])<0&&l.push(c,h)}}function s(o,a){for(var l=[],c=o.length,h=a.stars,d=0;d<c;++d)for(var p=h[d],g=1;g<p.length;g+=2){var x=p[g];if(!(x<d)&&!a.isConstraint(d,x)){for(var b=p[g-1],_=-1,y=1;y<p.length;y+=2)if(p[y-1]===x){_=p[y];break}_<0||e(o[d],o[x],o[b],o[_])<0&&l.push(d,x)}}for(;l.length>0;){for(var x=l.pop(),d=l.pop(),b=-1,_=-1,p=h[d],w=1;w<p.length;w+=2){var m=p[w-1],u=p[w];m===x?_=u:u===x&&(b=m)}b<0||_<0||e(o[d],o[x],o[b],o[_])>=0||(a.flip(d,x),r(o,a,l,b,d,_),r(o,a,l,d,_,b),r(o,a,l,_,x,b),r(o,a,l,x,b,_))}}}}),Nw=hi({"node_modules/cdt2d/lib/filter.js"(i,t){"use strict";var e=Wh();t.exports=l;function n(c,h,d,p,g,x,b){this.cells=c,this.neighbor=h,this.flags=p,this.constraint=d,this.active=g,this.next=x,this.boundary=b}var r=n.prototype;function s(c,h){return c[0]-h[0]||c[1]-h[1]||c[2]-h[2]}r.locate=(function(){var c=[0,0,0];return function(h,d,p){var g=h,x=d,b=p;return d<p?d<h&&(g=d,x=p,b=h):p<h&&(g=p,x=h,b=d),g<0?-1:(c[0]=g,c[1]=x,c[2]=b,e.eq(this.cells,c,s))}})();function o(c,h){for(var d=c.cells(),p=d.length,g=0;g<p;++g){var x=d[g],b=x[0],_=x[1],y=x[2];_<y?_<b&&(x[0]=_,x[1]=y,x[2]=b):y<b&&(x[0]=y,x[1]=b,x[2]=_)}d.sort(s);for(var w=new Array(p),g=0;g<w.length;++g)w[g]=0;var m=[],u=[],v=new Array(3*p),f=new Array(3*p),C=null;h&&(C=[]);for(var M=new n(d,v,f,w,m,u,C),g=0;g<p;++g)for(var x=d[g],S=0;S<3;++S){var b=x[S],_=x[(S+1)%3],E=v[3*g+S]=M.locate(_,b,c.opposite(_,b)),T=f[3*g+S]=c.isConstraint(b,_);E<0&&(T?u.push(g):(m.push(g),w[g]=1),h&&C.push([_,b,-1]))}return M}function a(c,h,d){for(var p=0,g=0;g<c.length;++g)h[g]===d&&(c[p++]=c[g]);return c.length=p,c}function l(c,h,d){var p=o(c,d);if(h===0)return d?p.cells.concat(p.boundary):p.cells;for(var g=1,x=p.active,b=p.next,_=p.flags,y=p.cells,w=p.constraint,m=p.neighbor;x.length>0||b.length>0;){for(;x.length>0;){var u=x.pop();if(_[u]!==-g){_[u]=g;for(var v=y[u],f=0;f<3;++f){var C=m[3*u+f];C>=0&&_[C]===0&&(w[3*u+f]?b.push(C):(x.push(C),_[C]=g))}}}var M=b;b=x,x=M,b.length=0,g=-g}var S=a(y,_,h);return d?S.concat(p.boundary):S}}}),Uw=hi({"node_modules/cdt2d/cdt2d.js"(i,t){var e=Pw(),n=Iw(),r=Lw(),s=Nw();t.exports=h;function o(d){return[Math.min(d[0],d[1]),Math.max(d[0],d[1])]}function a(d,p){return d[0]-p[0]||d[1]-p[1]}function l(d){return d.map(o).sort(a)}function c(d,p,g){return p in d?d[p]:g}function h(d,p,g){Array.isArray(p)?(g=g||{},p=p||[]):(g=p||{},p=[]);var x=!!c(g,"delaunay",!0),b=!!c(g,"interior",!0),_=!!c(g,"exterior",!0),y=!!c(g,"infinity",!1);if(!b&&!_||d.length===0)return[];var w=e(d,p);if(x||b!==_||y){for(var m=n(d.length,l(p)),u=0;u<w.length;++u){var v=w[u];m.addTriangle(v[0],v[1],v[2])}return x&&r(d,m),_?b?y?s(m,0,y):m.cells():s(m,1,y):s(m,-1)}else return w}}}),bx=Uw();var fi=class{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}};var wx=1e-16,Fw=1e-16,ws=new D,Ex=new D,Tx=new fi(()=>({param:0,index:0})),Bw=new fi(()=>new D);function Ow(i,t,e,n){Tx.clear(),t.length=0,e.length=0;for(let c=0,h=i.length;c<h;c++){let d=i[c];l(d.start),l(d.end)}for(let c=0,h=i.length;c<h;c++){let d=i[c];for(let p=c+1;p<h;p++){let g=i[p];d.distanceSqToLine3(g,ws,Ex)<wx*n&&l(Ex)}}let r=[];for(let c=0,h=i.length;c<h;c++){r.length=0;let d=i[c];for(let p=0,g=t.length;p<g;p++){let x=t[p],b=d.closestPointToPointParameter(x,!0);if(d.at(b,ws),x.distanceToSquared(ws)<wx*n){let _=Tx.getInstance();_.param=b,_.index=p,r.push(_)}}r.sort(a);for(let p=0,g=r.length-1;p<g;p++){let x=r[p].index,b=r[p+1].index;x!==b&&e.push([x,b])}}let s=new Set,o=0;for(let c=0,h=e.length;c<h;c++){let d=e[c],p=Math.min(d[0],d[1]),g=Math.max(d[0],d[1]),x=p+","+g;s.has(x)||(s.add(x),e[o++]=d)}e.length=o;function a(c,h){return c.param-h.param}function l(c){for(let h=0;h<t.length;h++){let d=t[h];if(c===d||c.distanceToSquared(d)<Fw*n)return h}return t.push(Bw.getInstance().copy(c)),t.length-1}}var Wl=class{constructor(){this.trianglePool=new fi(()=>new cn),this.linePool=new fi(()=>new Ve),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new D,this.projOrigin=new D,this.projU=new D,this.projV=new D,this.baseTri=new cn,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();let{normal:s,baseTri:o,projU:a,projV:l,projOrigin:c,constrainedEdges:h,linePool:d,baseIndices:p}=this;t.getNormal(s),o.copy(t),o.update(),p[0]=e,p[1]=n,p[2]=r,h.length=0;let g=d.getInstance();g.start.copy(o.a),g.end.copy(o.b);let x=d.getInstance();x.start.copy(o.b),x.end.copy(o.c);let b=d.getInstance();b.start.copy(o.c),b.end.copy(o.a),h.push(g,x,b),c.copy(o.a),a.subVectors(o.b,o.a).normalize(),l.crossVectors(s,a).normalize()}addConstraintEdge(t){let{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){let{projOrigin:n,projU:r,projV:s}=this;return ws.subVectors(t,n),e.set(ws.dot(r),ws.dot(s),0)}_from2D(t,e,n){let{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){let{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:l}=this;t.length=0,e.clear();let c=[];for(let y=0,w=a.length;y<w;y++){let m=a[y],u=s.getInstance();this._to2D(m.start,u.start),this._to2D(m.end,u.end),c.push(u)}let h=0;for(let y=0;y<3;y++){let w=this._to2D(o.points[y],ws);h=Math.max(h,Math.abs(w.x),Math.abs(w.y))}let d=[],p=[];Ow(c,d,p,h);let g=[];for(let y=0,w=d.length;y<w;y++){let m=d[y];g.push([m.x,m.y])}let x=bx(g,p,{exterior:!1}),b=new Map;for(let y=0,w=p.length;y<w;y++){let m=p[y];b.set(`${m[0]}_${m[1]}`,-1),b.set(`${m[1]}_${m[0]}`,-1)}let _=`${l[0]}_${l[1]}_${l[2]}_`;for(let y=0,w=x.length;y<w;y++){let m=x[y],[u,v,f]=m,C=e.getInstance();this._from2D(g[u][0],g[u][1],C.a),this._from2D(g[v][0],g[v][1],C.b),this._from2D(g[f][0],g[f][1],C.c),t.push(C);let M=[];n.push(M);let S=[];r.push(S);for(let E=0;E<3;E++){let T=m[E];S.push(T<3?l[T]:_+T);let A=m[(E+1)%3],R=`${T}_${A}`;if(b.has(R)){let U=b.get(R);U!==-1&&(M.push(U),n[U].push(y))}else{let U=`${A}_${T}`;b.set(U,y)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}};var zw=1e-14,Ip=new D,Ax=new D,Rx=new D;function ki(i,t=zw){Ip.subVectors(i.b,i.a),Ax.subVectors(i.c,i.a),Rx.subVectors(i.b,i.c);let e=Ip.angleTo(Ax),n=Ip.angleTo(Rx),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}var Dp=1e-10,Xl=1e-10,Sr=new Ve,pn=new Ve,br=new D,Cx=new D,Px=new D,Xh=new vn,Lp=new cn,ql=class{constructor(){this.trianglePool=new fi(()=>new qe),this.triangles=[],this.normal=new D}initialize(t){this.reset();let{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){let a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(br).dot(r))>Dp)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");let l=n.getInstance();l.copy(a),e.push(l)}else{t.getNormal(r);let s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){let{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){let a=n[s];a.coplanarCount=0}let r=[t.a,t.b,t.c];for(let s=0;s<3;s++){let o=(s+1)%3,a=r[s],l=r[o];t.getNormal(Cx).normalize(),br.subVectors(l,a).normalize(),Px.crossVectors(Cx,br),Xh.setFromNormalAndCoplanarPoint(Px,a),this.splitByPlane(Xh,t)}}else t.getPlane(Xh),this.splitByPlane(Xh,t)}splitByPlane(t,e){let{triangles:n,trianglePool:r}=this;Lp.copy(e),Lp.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){let a=n[s];if(!Lp.intersectsTriangle(a,Sr,!0))continue;let{a:l,b:c,c:h}=a,d=0,p=-1,g=!1,x=[],b=[],_=[l,c,h];for(let y=0;y<3;y++){let w=(y+1)%3;Sr.start.copy(_[y]),Sr.end.copy(_[w]);let m=t.distanceToPoint(Sr.start),u=t.distanceToPoint(Sr.end);if(Math.abs(m)<Xl&&Math.abs(u)<Xl){g=!0;break}if(m>0?x.push(y):b.push(y),Math.abs(m)<Xl)continue;let v=!!t.intersectLine(Sr,br);!v&&Math.abs(u)<Xl&&(br.copy(Sr.end),v=!0),v&&!(br.distanceTo(Sr.start)<Dp)&&(br.distanceTo(Sr.end)<Dp&&(p=y),d===0?pn.start.copy(br):pn.end.copy(br),d++)}if(!g&&d===2&&pn.distance()>Xl)if(p!==-1){p=(p+1)%3;let y=0;y===p&&(y=(y+1)%3);let w=y+1;w===p&&(w=(w+1)%3);let m=r.getInstance();m.a.copy(_[w]),m.b.copy(pn.end),m.c.copy(pn.start),ki(m)||n.push(m),a.a.copy(_[y]),a.b.copy(pn.start),a.c.copy(pn.end),ki(a)&&(n.splice(s,1),s--,o--)}else{let y=x.length>=2?b[0]:x[0];if(y===0){let f=pn.start;pn.start=pn.end,pn.end=f}let w=(y+1)%3,m=(y+2)%3,u=r.getInstance(),v=r.getInstance();_[w].distanceToSquared(pn.start)<_[m].distanceToSquared(pn.end)?(u.a.copy(_[w]),u.b.copy(pn.start),u.c.copy(pn.end),v.a.copy(_[w]),v.b.copy(_[m]),v.c.copy(pn.start)):(u.a.copy(_[m]),u.b.copy(pn.start),u.c.copy(pn.end),v.a.copy(_[w]),v.b.copy(_[m]),v.c.copy(pn.end)),a.a.copy(_[y]),a.b.copy(pn.end),a.c.copy(pn.start),ki(u)||n.push(u),ki(v)||n.push(v),ki(a)&&(n.splice(s,1),s--,o--)}else d===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}};var Yl=class{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){let{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){let{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}};var Np=1e-10,Vw=1e-15,kw=1e-10,Hw=1e-10,Ix=new Ve,Qo=new Ve,Dx=new D,Lx=new D,Nx=new D,Up=new vn,ta=new D,qh=new D;function Fx(i,t){i.getNormal(ta),t.getNormal(qh);let e=ta.dot(qh);if(Math.abs(1-Math.abs(e))>=kw)return!1;let n=ta.dot(i.a),r=ta.dot(t.a);return Math.abs(n-r)<Hw}function Ux(i,t,e,n){let r=0,s=1;i.delta(Dx);let o=[t.a,t.b,t.c];for(let a=0;a<3;a++){let l=o[a],c=o[(a+1)%3];Lx.subVectors(c,l),Nx.crossVectors(e,Lx),Up.setFromNormalAndCoplanarPoint(Nx,l);let h=Up.distanceToPoint(i.start),d=Up.normal.dot(Dx);if(Math.abs(d)<Vw){if(h<-Np)return null;continue}let p=-h/d;if(d>0?r=Math.max(r,p):s=Math.min(s,p),r>s+Np)return null}return s-r<Np?null:(i.at(r,n.start),i.at(s,n.end),n)}function Fp(i,t,e){let n=0;i.getNormal(ta),t.getNormal(qh);let r=[t.a,t.b,t.c];for(let o=0;o<3;o++){Qo.start.copy(r[o]),Qo.end.copy(r[(o+1)%3]);let a=Ux(Qo,i,ta,Ix);a!==null&&(n>=e.length&&e.push(new Ve),e[n].copy(a),n++)}let s=[i.a,i.b,i.c];for(let o=0;o<3;o++){Qo.start.copy(s[o]),Qo.end.copy(s[(o+1)%3]);let a=Ux(Qo,t,qh,Ix);a!==null&&(n>=e.length&&e.push(new Ve),e[n].copy(a),n++)}return n}var ea=new Fi,Bx=new Wt,Yh=new Ve,Bp=[],Zh=new fi(()=>new Ve),na=-1,ia=1,Zl=-2,$l=2,ra=0,Es=1,Jh=2,$h=null;function Op(i){$h=i}function zp(i,t,e=null){i.getMidpoint(ea.origin),i.getNormal(ea.direction),e&&(ea.origin.applyMatrix4(e),ea.direction.transformDirection(e));let n=t.raycastFirst(ea,Tn);return!!(n&&ea.direction.dot(n.face.normal)>0)?na:ia}function kx(i,t){let e=new Yl,n=new Yl;return Zh.clear(),Bx.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Bx,{intersectsTriangles(r,s,o,a){if(!ki(r)&&!ki(s)){let c=(Fx(r,s)?Fp(r,s,Bp):0)>2;if(c||r.intersectsTriangle(s,Yh,!0)){let d=i.geometry.boundsTree.resolveTriangleIndex(o),p=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(d,p,c),n.add(p,d,c),c){let g=Fp(r,s,Bp);for(let x=0;x<g;x++){let b=Zh.getInstance().copy(Bp[x]);e.addIntersectionEdge(d,b),n.addIntersectionEdge(p,b)}}else{let g=Zh.getInstance().copy(Yh),x=Zh.getInstance().copy(Yh);e.addIntersectionEdge(d,g),n.addIntersectionEdge(p,x)}$h&&($h.addEdge(Yh),$h.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function Vp(i,t,e=!1){switch(i){case 0:if(t===ia||t===$l&&!e)return Es;break;case 1:if(e){if(t===na)return ra}else if(t===ia||t===Zl)return Es;break;case 2:if(e){if(t===ia||t===Zl)return Es}else if(t===na)return ra;break;case 4:if(t===na)return ra;if(t===ia)return Es;break;case 3:if(t===na||t===$l&&!e)return Es;break;case 5:if(!e&&(t===ia||t===Zl))return Es;break;case 6:if(!e&&(t===na||t===$l))return Es;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return Jh}var kp=class{constructor(t){this.triangle=new qe().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new qe().copy(e)}getIntersectArray(){let t=[],{intersects:e}=this;for(let n in e)t.push(e[n]);return t}},Kh=class{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){let{data:s}=this;s[t]||(s[t]=new kp(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){let{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(let r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){let{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){let{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{let l=n[a].intersects;for(let c in l)r.has(c)||(r.add(c),s.push(l[c]))}};if(t!==null)o(t);else for(let a in n)o(a);return s}reset(){this.data={}}},jh=class{constructor(){this.enabled=!1,this.triangleIntersectsA=new Kh,this.triangleIntersectsB=new Kh,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){let{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Op(this))}complete(){this.enabled&&Op(null)}};var di=new Wt,Ts=new Wt,Kn=new Wt,ns=new ce,Hi=new qe,As=new qe,Gi=new qe,es=new qe,Rs=[],tr=[],Qh=new Set,Hx=new D,Gx=new D,Wx=new fi(()=>new qe),Xx=new D,tf=[];function Zx(i,t,e,n,r,s={}){let{useGroups:o=!0}=s,{aIntersections:a,bIntersections:l}=kx(i,t),c=[],h=null,d;return d=o?0:-1,Yx(i,t,a,e,!1,r,d),qx(i,t,a,e,!1,n,r,d),e.findIndex(g=>g!==6&&g!==5)!==-1&&(r.forEach(g=>g.clearIndexMap()),d=o?i.geometry.groups.length||1:-1,Yx(t,i,l,e,!0,r,d),qx(t,i,l,e,!0,n,r,d)),r.forEach(g=>g.clearIndexMap()),Rs.length=0,{groups:c,materials:h}}function qx(i,t,e,n,r,s,o,a=0){di.copy(t.matrixWorld).invert().multiply(i.matrixWorld),Ts.copy(di).invert(),r?Kn.copy(di):Kn.identity();let l=Kn.determinant()<0;ns.getNormalMatrix(Kn).multiplyScalar(l?-1:1);let c=i.geometry.groupIndices,h=i.geometry.index,d=i.geometry.attributes.position,p=t.geometry.boundsTree,g=t.geometry.index,x=t.geometry.attributes.position,b=e.ids;for(let _=0,y=b.length;_<y;_++){let w=b[_],m=a===-1?0:c[w]+a,u=3*w,v=u+0,f=u+1,C=u+2;h&&(v=h.getX(v),f=h.getX(f),C=h.getX(C)),Hi.a.fromBufferAttribute(d,v),Hi.b.fromBufferAttribute(d,f),Hi.c.fromBufferAttribute(d,C),r&&(Hi.a.applyMatrix4(di),Hi.b.applyMatrix4(di),Hi.c.applyMatrix4(di)),s.reset(),s.initialize(Hi,v,f,C),tf.length=0,Wx.clear(),Hi.getNormal(Gx);let M=e.coplanarSet.get(w);if(M)for(let A of M){let R=3*A,U=R+0,F=R+1,z=R+2;g&&(U=g.getX(U),F=g.getX(F),z=g.getX(z));let V=Wx.getInstance();V.a.fromBufferAttribute(x,U),V.b.fromBufferAttribute(x,F),V.c.fromBufferAttribute(x,z),r||(V.a.applyMatrix4(Ts),V.b.applyMatrix4(Ts),V.c.applyMatrix4(Ts)),tf.push(V)}if(s.addConstraintEdge){let A=e.getIntersectionEdges(w);if(A)for(let R of A)s.addConstraintEdge(R);s.triangulate()}else{let R=e.intersectionSet.get(w);for(let U=0,F=R.length;U<F;U++){let z=R[U],V=M&&M.has(z),Z=3*z,H=Z+0,tt=Z+1,q=Z+2;g&&(H=g.getX(H),tt=g.getX(tt),q=g.getX(q)),As.a.fromBufferAttribute(x,H),As.b.fromBufferAttribute(x,tt),As.c.fromBufferAttribute(x,q),r||(As.a.applyMatrix4(Ts),As.b.applyMatrix4(Ts),As.c.applyMatrix4(Ts)),s.splitByTriangle(As,V)}}let{triangles:S,triangleIndices:E=[],triangleConnectivity:T=[]}=s;for(let A=0,R=o.length;A<R;A++)o[A].initInterpolatedAttributeData(i.geometry,Kn,ns,v,f,C);Qh.clear();for(let A=0,R=S.length;A<R;A++){if(Qh.has(A))continue;let U=S[A],F=r?null:di,z=null;U.getMidpoint(Hx);for(let V=0,Z=tf.length;V<Z;V++){let H=tf[V];if(H.containsPoint(Hx)){H.getNormal(Xx),z=Gx.dot(Xx)>0?$l:Zl;break}}z===null&&(z=zp(U,p,F)),Rs.length=0,tr.length=0;for(let V=0,Z=n.length;V<Z;V++){let H=Vp(n[V],z,r);H!==Jh&&(Rs.push(H),tr.push(o[V]))}if(tr.length!==0){let V=[A];for(;V.length>0;){let Z=V.pop();if(Qh.has(Z))continue;Qh.add(Z);let H=E[Z],tt=null,q=null,ut=null;H&&(tt=H[0],q=H[1],ut=H[2]);let dt=S[Z];Hi.getBarycoord(dt.a,es.a),Hi.getBarycoord(dt.b,es.b),Hi.getBarycoord(dt.c,es.c);for(let Et=0,St=tr.length;Et<St;Et++){let Vt=tr[Et],N=Rs[Et]===ra,lt=l!==N;Vt.appendInterpolatedAttributeData(m,es.a,tt,lt),lt?(Vt.appendInterpolatedAttributeData(m,es.c,ut,lt),Vt.appendInterpolatedAttributeData(m,es.b,q,lt)):(Vt.appendInterpolatedAttributeData(m,es.b,q,lt),Vt.appendInterpolatedAttributeData(m,es.c,ut,lt))}}}}}return b.length}function Yx(i,t,e,n,r,s,o=0){di.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?Kn.copy(di):Kn.identity();let a=Kn.determinant()<0;ns.getNormalMatrix(Kn).multiplyScalar(a?-1:1);let l=t.geometry.boundsTree,c=i.geometry.groupIndices,h=i.geometry.index,p=i.geometry.attributes.position,g=[],x=i.geometry.halfEdges,b=new Set(e.ids),_=Ko(i.geometry);for(let y=0;y<_&&b.size!==_;y++){if(b.has(y))continue;b.add(y),g.push(y);let w=3*y,m=w+0,u=w+1,v=w+2;h&&(m=h.getX(m),u=h.getX(u),v=h.getX(v)),Gi.a.fromBufferAttribute(p,m),Gi.b.fromBufferAttribute(p,u),Gi.c.fromBufferAttribute(p,v),r&&(Gi.a.applyMatrix4(di),Gi.b.applyMatrix4(di),Gi.c.applyMatrix4(di));let f=zp(Gi,l,r?null:di);Rs.length=0,tr.length=0;for(let C=0,M=n.length;C<M;C++){let S=Vp(n[C],f,r);S!==Jh&&(Rs.push(S),tr.push(s[C]))}for(;g.length>0;){let C=g.pop();for(let M=0;M<3;M++){let S=x.getSiblingTriangleIndex(C,M);S!==-1&&!b.has(S)&&(g.push(S),b.add(S))}if(tr.length!==0){let M=3*C,S=M+0,E=M+1,T=M+2;h&&(S=h.getX(S),E=h.getX(E),T=h.getX(T));let A=o===-1?0:c[C]+o;if(Gi.a.fromBufferAttribute(p,S),Gi.b.fromBufferAttribute(p,E),Gi.c.fromBufferAttribute(p,T),!ki(Gi))for(let R=0,U=tr.length;R<U;R++){let F=tr[R],Z=Rs[R]===ra!==a;F.appendIndexFromGeometry(i.geometry,Kn,ns,A,S,Z),Z?(F.appendIndexFromGeometry(i.geometry,Kn,ns,A,T,Z),F.appendIndexFromGeometry(i.geometry,Kn,ns,A,E,Z)):(F.appendIndexFromGeometry(i.geometry,Kn,ns,A,E,Z),F.appendIndexFromGeometry(i.geometry,Kn,ns,A,T,Z))}}}}}function Xw(i){return i=~~i,i+4-i%4}var ef=class{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");let e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;let e=this.type,n=kh()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(Xw(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){let{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}};var jn=new D,Hp=new D,Gp=new D,Wp=new D,nf=new we,qw=new we,Yw=new we,Zw=new we;function $w(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function $x(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}var Jl=class extends ef{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}},rf=class{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();let{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){let a=e[s],l=r[a],c=l.array.constructor;n[a]||(n[a]=new Jl(c)),n[a].setType(c),n[a].itemSize=l.itemSize,n[a].normalized=l.normalized}for(let s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){let{attributeData:a,interpolatedFields:l}=this,{attributes:c}=t;for(let h in a){let d=c[h];if(!d)throw new Error(`CSG Operations: Attribute ${h} not available on geometry.`);let p,g,x;if(h==="position"?(p=Hp.fromBufferAttribute(d,r).applyMatrix4(e),g=Gp.fromBufferAttribute(d,s).applyMatrix4(e),x=Wp.fromBufferAttribute(d,o).applyMatrix4(e)):h==="normal"?(p=Hp.fromBufferAttribute(d,r).applyNormalMatrix(n),g=Gp.fromBufferAttribute(d,s).applyNormalMatrix(n),x=Wp.fromBufferAttribute(d,o).applyNormalMatrix(n)):h==="tangent"?(p=Hp.fromBufferAttribute(d,r).transformDirection(e),g=Gp.fromBufferAttribute(d,s).transformDirection(e),x=Wp.fromBufferAttribute(d,o).transformDirection(e)):(p=qw.fromBufferAttribute(d,r),g=Yw.fromBufferAttribute(d,s),x=Zw.fromBufferAttribute(d,o)),!l[h])l[h]=[p.clone(),g.clone(),x.clone()];else{let b=l[h];b[0].copy(p),b[1].copy(g),b[2].copy(x)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){let{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:l,invertedIndexMap:c}=this;for(;s.length<=t;)s.push(new Jl(Uint32Array));let h=r?c:l,d=s[t];if(n!==null&&h.has(n))d.push(h.get(n));else{h.set(n,o.position.count),d.push(o.position.count);for(let p in a){let g=o[p],x=p==="normal"||p==="tangent",b=r&&x,_=g.itemSize,[y,w,m]=a[p];$w(y,w,m,e,nf,x,b),$x(nf,_,g)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){let{groupIndices:a,attributeData:l,forwardIndexMap:c,invertedIndexMap:h}=this;for(;a.length<=r;)a.push(new Jl(Uint32Array));let d=o?h:c,p=a[r];if(s!==null&&d.has(s))p.push(d.get(s));else{d.set(s,l.position.count),p.push(l.position.count);let{attributes:g}=t;for(let x in l){let b=l[x],_=g[x];if(!_)throw new Error(`CSG Operations: Attribute ${x} not available on geometry.`);let y=_.itemSize;x==="position"?(jn.fromBufferAttribute(_,s).applyMatrix4(e),b.push(jn.x,jn.y,jn.z)):x==="normal"?(jn.fromBufferAttribute(_,s).applyNormalMatrix(n),o&&jn.multiplyScalar(-1),b.push(jn.x,jn.y,jn.z)):x==="tangent"?(jn.fromBufferAttribute(_,s).transformDirection(e),o&&jn.multiplyScalar(-1),b.push(jn.x,jn.y,jn.z)):(nf.fromBufferAttribute(_,s),$x(nf,y,b))}}}buildGeometry(t,e){let n=!1,{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(let h in s){let d=s[h],{type:p,itemSize:g,normalized:x,length:b,count:_}=d,y=d.array.buffer,w=o[h];(!w||w.count<_||w.array.type!==p)&&(w=new Oe(new p(b),g,x),t.setAttribute(h,w),n=!0),w.array.set(new p(y,0,b),0),w.needsUpdate=!0}let l=r.reduce((h,d)=>d.count+h,0);(!t.index||a.count<l||a.array.type!==Uint32Array)&&(t.setIndex(new Oe(new Uint32Array(l),1)),n=!0),t.clearGroups();let c=0;for(let h=0,d=Math.min(e.length,r.length);h<d;h++){let{index:p,materialIndex:g}=e[h],{count:x}=r[p],b=r[p].array.buffer;x!==0&&(t.index.array.set(new Uint32Array(b,0,x),c),t.addGroup(c,x,g),c+=x)}t.setDrawRange(0,c),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){let{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(let n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}};function Jx(i,t){for(let e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function Kx(i,t){let e=[];for(let n=0,r=i.length;n<r;n++){let s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function jx(i,t){let e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){let o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function Qx(i){for(let t=0;t<i.length-1;t++){let e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){let r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function Xp(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}var sf=class{get useCDTClipping(){return this.triangleSplitter instanceof Wl}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new Wl:new ql)}constructor(){this.triangleSplitter=new ql,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new jh}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new bs){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();let{triangleSplitter:o,geometryBuilders:a,attributes:l,useGroups:c,consolidateGroups:h,removeUnusedMaterials:d,debug:p}=this;for(;a.length<r.length;)a.push(new rf);r.forEach((m,u)=>{a[u].initFromGeometry(t.geometry,l),Jx(m.geometry,l)}),p.init(),Zx(t,e,n,o,a,{useGroups:c}),p.complete();let g=this.getGroupRanges(t.geometry),x=Xp(g,t.material),b=this.getGroupRanges(e.geometry),_=Xp(b,e.material);b.forEach(m=>m.materialIndex+=x.length);let y=[...x,..._],w=[...g,...b].map((m,u)=>({...m,index:u}));return c?c&&h&&(w=Kx(w,y),w.sort((m,u)=>m.materialIndex-u.materialIndex)):w=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((m,u)=>{let v=m.geometry;a[u].buildGeometry(v,w),t.matrixWorld.decompose(m.position,m.quaternion,m.scale),m.updateMatrix(),m.matrixWorld.copy(t.matrixWorld),c?(m.material=y,h&&Qx(v.groups),d&&(m.material=jx(v.groups,y))):m.material=y[0]}),s?r:r[0]}evaluateHierarchy(t,e=new bs){t.updateMatrixWorld(!0);let n=(s,o)=>{let a=s.children;for(let l=0,c=a.length;l<c;l++){let h=a[l];h.isOperationGroup?n(h,o):o(h)}},r=s=>{let o=s.children,a=!1;for(let c=0,h=o.length;c<h;c++){let d=o[c];a=r(d)||a}let l=s.isDirty();if(l&&s.markUpdated(),a&&!s.isOperationGroup){let c;return n(s,h=>{c?c=this.evaluate(c,h,h.operation):c=this.evaluate(s,h,h.operation)}),s._cachedGeometry=c.geometry,s._cachedMaterials=c.material,!0}else return a||l};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}};var Kl=class extends gr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Nr;t.deleteAttribute("uv");let e=new Mi({side:ln}),n=new Mi,r=new cl(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new ae(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Ga(t,n,6),a=new yn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ae(t,sa(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ae(t,sa(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ae(t,sa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new ae(t,sa(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let p=new ae(t,sa(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let g=new ae(t,sa(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function sa(i){return new sl({color:0,emissive:16777215,emissiveIntensity:i})}var oa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Kw=new Vr(-1,1,1,-1,0,1),qp=class extends De{constructor(){super(),this.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Re([0,2,0,0,2,0],2))}},jw=new qp,er=class{constructor(t){this._mesh=new ae(jw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Kw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var of=class extends Yn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Wn.clone(t.uniforms),this.material=new ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new er(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var jl=class extends Yn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},af=class extends Yn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ql=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new gt);this._width=n.width,this._height=n.height,e=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new of(oa),this.copyPass.material.blending=dn,this.timer=new hl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jl!==void 0&&(o instanceof jl?n=!0:o instanceof af&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var aa=class extends Yn{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ee}render(t,e,n){let r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}};var tc={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new gt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Wt},cameraProjectionMatrixInverse:{value:new Wt},cameraWorldMatrix:{value:new Wt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ec={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},lf={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function t_(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=Qw(t),n=e.length,r=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new D(Math.cos(l),Math.sin(l),0).normalize();r[o*4]=(c.x*.5+.5)*255,r[o*4+1]=(c.y*.5+.5)*255,r[o*4+2]=127,r[o*4+3]=255}let s=new xr(r,t,t);return s.wrapS=si,s.wrapT=si,s.needsUpdate=!0,s}function Qw(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),r=Math.floor(t/2),s=t-1;for(let o=1;o<=e;){if(r===-1&&s===t?(s=t-2,r=0):(s===t&&(s=0),r<0&&(r=t-1)),n[r*t+s]!==0){s-=2,r++;continue}else n[r*t+s]=o++;s++,r--}return n}var nc={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Yp(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new gt},cameraProjectionMatrixInverse:{value:new Wt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Yp(i,t,e){let n=tE(i,t,e),r="vec3[SAMPLES](";for(let s=0;s<i;s++){let o=n[s];r+=`vec3(${o.x}, ${o.y}, ${o.z})${s<i-1?",":")"}`}return r}function tE(i,t,e){let n=[];for(let r=0;r<i;r++){let s=2*Math.PI*t*r/i,o=Math.pow(r/(i-1),e);n.push(new D(Math.cos(s),Math.sin(s),o))}return n}var cf=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,r,s,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,p=l-d,g=c-d,x=t-p,b=e-g,_,y;x>b?(_=1,y=0):(_=0,y=1);let w=x-_+h,m=b-y+h,u=x-1+2*h,v=b-1+2*h,f=l&255,C=c&255,M=this.perm[f+this.perm[C]]%12,S=this.perm[f+_+this.perm[C+y]]%12,E=this.perm[f+1+this.perm[C+1]]%12,T=.5-x*x-b*b;T<0?n=0:(T*=T,n=T*T*this._dot(this.grad3[M],x,b));let A=.5-w*w-m*m;A<0?r=0:(A*=A,r=A*A*this._dot(this.grad3[S],w,m));let R=.5-u*u-v*v;return R<0?s=0:(R*=R,s=R*R*this._dot(this.grad3[E],u,v)),70*(n+r+s)}noise3d(t,e,n){let r,s,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),d=Math.floor(e+c),p=Math.floor(n+c),g=1/6,x=(h+d+p)*g,b=h-x,_=d-x,y=p-x,w=t-b,m=e-_,u=n-y,v,f,C,M,S,E;w>=m?m>=u?(v=1,f=0,C=0,M=1,S=1,E=0):w>=u?(v=1,f=0,C=0,M=1,S=0,E=1):(v=0,f=0,C=1,M=1,S=0,E=1):m<u?(v=0,f=0,C=1,M=0,S=1,E=1):w<u?(v=0,f=1,C=0,M=0,S=1,E=1):(v=0,f=1,C=0,M=1,S=1,E=0);let T=w-v+g,A=m-f+g,R=u-C+g,U=w-M+2*g,F=m-S+2*g,z=u-E+2*g,V=w-1+3*g,Z=m-1+3*g,H=u-1+3*g,tt=h&255,q=d&255,ut=p&255,dt=this.perm[tt+this.perm[q+this.perm[ut]]]%12,Et=this.perm[tt+v+this.perm[q+f+this.perm[ut+C]]]%12,St=this.perm[tt+M+this.perm[q+S+this.perm[ut+E]]]%12,Vt=this.perm[tt+1+this.perm[q+1+this.perm[ut+1]]]%12,J=.6-w*w-m*m-u*u;J<0?r=0:(J*=J,r=J*J*this._dot3(this.grad3[dt],w,m,u));let N=.6-T*T-A*A-R*R;N<0?s=0:(N*=N,s=N*N*this._dot3(this.grad3[Et],T,A,R));let lt=.6-U*U-F*F-z*z;lt<0?o=0:(lt*=lt,o=lt*lt*this._dot3(this.grad3[St],U,F,z));let Mt=.6-V*V-Z*Z-H*H;return Mt<0?a=0:(Mt*=Mt,a=Mt*Mt*this._dot3(this.grad3[Vt],V,Z,H)),32*(r+s+o+a)}noise4d(t,e,n,r){let s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,p,g,x,b=(t+e+n+r)*l,_=Math.floor(t+b),y=Math.floor(e+b),w=Math.floor(n+b),m=Math.floor(r+b),u=(_+y+w+m)*c,v=_-u,f=y-u,C=w-u,M=m-u,S=t-v,E=e-f,T=n-C,A=r-M,R=S>E?32:0,U=S>T?16:0,F=E>T?8:0,z=S>A?4:0,V=E>A?2:0,Z=T>A?1:0,H=R+U+F+z+V+Z,tt=o[H][0]>=3?1:0,q=o[H][1]>=3?1:0,ut=o[H][2]>=3?1:0,dt=o[H][3]>=3?1:0,Et=o[H][0]>=2?1:0,St=o[H][1]>=2?1:0,Vt=o[H][2]>=2?1:0,J=o[H][3]>=2?1:0,N=o[H][0]>=1?1:0,lt=o[H][1]>=1?1:0,Mt=o[H][2]>=1?1:0,xt=o[H][3]>=1?1:0,bt=S-tt+c,pt=E-q+c,Q=T-ut+c,nt=A-dt+c,ft=S-Et+2*c,ct=E-St+2*c,Tt=T-Vt+2*c,Ct=A-J+2*c,Rt=S-N+3*c,Ut=E-lt+3*c,zt=T-Mt+3*c,k=A-xt+3*c,fe=S-1+4*c,Yt=E-1+4*c,B=T-1+4*c,P=A-1+4*c,X=_&255,K=y&255,st=w&255,wt=m&255,At=a[X+a[K+a[st+a[wt]]]]%32,ht=a[X+tt+a[K+q+a[st+ut+a[wt+dt]]]]%32,mt=a[X+Et+a[K+St+a[st+Vt+a[wt+J]]]]%32,Dt=a[X+N+a[K+lt+a[st+Mt+a[wt+xt]]]]%32,te=a[X+1+a[K+1+a[st+1+a[wt+1]]]]%32,Pt=.6-S*S-E*E-T*T-A*A;Pt<0?h=0:(Pt*=Pt,h=Pt*Pt*this._dot4(s[At],S,E,T,A));let It=.6-bt*bt-pt*pt-Q*Q-nt*nt;It<0?d=0:(It*=It,d=It*It*this._dot4(s[ht],bt,pt,Q,nt));let Zt=.6-ft*ft-ct*ct-Tt*Tt-Ct*Ct;Zt<0?p=0:(Zt*=Zt,p=Zt*Zt*this._dot4(s[mt],ft,ct,Tt,Ct));let ne=.6-Rt*Rt-Ut*Ut-zt*zt-k*k;ne<0?g=0:(ne*=ne,g=ne*ne*this._dot4(s[Dt],Rt,Ut,zt,k));let re=.6-fe*fe-Yt*Yt-B*B-P*P;return re<0?x=0:(re*=re,x=re*re*this._dot4(s[te],fe,Yt,B,P)),27*(h+d+p+g+x)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,r){return t[0]*e+t[1]*n+t[2]*r}_dot4(t,e,n,r,s){return t[0]*e+t[1]*n+t[2]*r+t[3]*s}};var ic=class i extends Yn{constructor(t,e,n=512,r=512,s,o,a){super(),this.width=n,this.height=r,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=t_(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new nn(this.width,this.height,{type:Mn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ze({defines:Object.assign({},tc.defines),uniforms:Wn.clone(tc.uniforms),vertexShader:tc.vertexShader,fragmentShader:tc.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new rl,this.normalMaterial.blending=dn,this.pdMaterial=new ze({defines:Object.assign({},nc.defines),uniforms:Wn.clone(nc.uniforms),vertexShader:nc.vertexShader,fragmentShader:nc.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ze({defines:Object.assign({},ec.defines),uniforms:Wn.clone(ec.uniforms),vertexShader:ec.vertexShader,fragmentShader:ec.fragmentShader,blending:dn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ze({uniforms:Wn.clone(oa.uniforms),vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:pl,blendDst:ms,blendEquation:Si,blendSrcAlpha:dl,blendDstAlpha:ms,blendEquationAlpha:Si}),this.blendMaterial=new ze({uniforms:Wn.clone(lf.uniforms),vertexShader:lf.vertexShader,fragmentShader:lf.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:bu,blendSrc:pl,blendDst:ms,blendEquation:Si,blendSrcAlpha:dl,blendDstAlpha:ms,blendEquationAlpha:Si}),this._fsQuad=new er(null),this._originalClearColor=new ee,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Ki,this.depthTexture.format=ji,this.depthTexture.type=Zr,this.normalRenderTarget=new nn(this.width,this.height,{minFilter:fn,magFilter:fn,type:Mn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Yp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=dn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=dn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=dn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,r,s){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,r!=null&&(t.setClearColor(r),t.setClearAlpha(s||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,r,s){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,r=e.clearColor||r,s=e.clearAlpha||s,r!=null&&(t.setClearColor(r),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new cf,n=t*t*4,r=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;r[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,r[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,r[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,r[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let s=new xr(r,t,t,Jn,gn);return s.wrapS=si,s.wrapT=si,s.needsUpdate=!0,s}};ic.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var rc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var sc=class extends Yn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Wn.clone(rc.uniforms),this.material=new To({name:rc.name,uniforms:this.uniforms,vertexShader:rc.vertexShader,fragmentShader:rc.fragmentShader}),this._fsQuad=new er(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Se.getTransfer(this._outputColorSpace)===Ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ml?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===vl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var e_=new Te,uf=new D,la=class extends ul{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Re(t,3)),this.setAttribute("uv",new Re(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Hr(e,6,1);return this.setAttribute("instanceStart",new oi(n,3,0)),this.setAttribute("instanceEnd",new oi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Hr(e,6,1);return this.setAttribute("instanceColorStart",new oi(n,3,0)),this.setAttribute("instanceColorEnd",new oi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new il(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Te);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),e_.setFromBufferAttribute(e),this.boundingBox.union(e_))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)uf.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(uf)),uf.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(uf));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Nt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new gt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Xn.line={uniforms:Wn.merge([Nt.common,Nt.fog,Nt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var ca=class extends ze{constructor(t){super({type:"LineMaterial",uniforms:Wn.clone(Xn.line.uniforms),vertexShader:Xn.line.vertexShader,fragmentShader:Xn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Zp=new we,n_=new D,i_=new D,Pn=new we,In=new we,nr=new we,$p=new D,Jp=new Wt,Dn=new Ve,r_=new D,hf=new Te,ff=new xi,ir=new we,rr,Cs;function s_(i,t,e){return ir.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ir.multiplyScalar(1/ir.w),ir.x=Cs/e.width,ir.y=Cs/e.height,ir.applyMatrix4(i.projectionMatrixInverse),ir.multiplyScalar(1/ir.w),Math.abs(Math.max(ir.x,ir.y))}function eE(i,t){let e=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,r.count);for(let a=0,l=o;a<l;a++){Dn.start.fromBufferAttribute(r,a),Dn.end.fromBufferAttribute(s,a),Dn.applyMatrix4(e);let c=new D,h=new D;rr.distanceSqToSegment(Dn.start,Dn.end,h,c),h.distanceTo(c)<Cs*.5&&t.push({point:h,pointOnLine:c,distance:rr.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function nE(i,t,e){let n=t.projectionMatrix,s=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),d=-t.near;rr.at(1,nr),nr.w=1,nr.applyMatrix4(t.matrixWorldInverse),nr.applyMatrix4(n),nr.multiplyScalar(1/nr.w),nr.x*=s.x/2,nr.y*=s.y/2,nr.z=0,$p.copy(nr),Jp.multiplyMatrices(t.matrixWorldInverse,o);for(let p=0,g=h;p<g;p++){if(Pn.fromBufferAttribute(l,p),In.fromBufferAttribute(c,p),Pn.w=1,In.w=1,Pn.applyMatrix4(Jp),In.applyMatrix4(Jp),Pn.z>d&&In.z>d)continue;if(Pn.z>d){let m=Pn.z-In.z,u=(Pn.z-d)/m;Pn.lerp(In,u)}else if(In.z>d){let m=In.z-Pn.z,u=(In.z-d)/m;In.lerp(Pn,u)}Pn.applyMatrix4(n),In.applyMatrix4(n),Pn.multiplyScalar(1/Pn.w),In.multiplyScalar(1/In.w),Pn.x*=s.x/2,Pn.y*=s.y/2,In.x*=s.x/2,In.y*=s.y/2,Dn.start.copy(Pn),Dn.start.z=0,Dn.end.copy(In),Dn.end.z=0;let b=Dn.closestPointToPointParameter($p,!0);Dn.at(b,r_);let _=Rd.lerp(Pn.z,In.z,b),y=_>=-1&&_<=1,w=$p.distanceTo(r_)<Cs*.5;if(y&&w){Dn.start.fromBufferAttribute(l,p),Dn.end.fromBufferAttribute(c,p),Dn.start.applyMatrix4(o),Dn.end.applyMatrix4(o);let m=new D,u=new D;rr.distanceSqToSegment(Dn.start,Dn.end,u,m),e.push({point:u,pointOnLine:m,distance:rr.origin.distanceTo(u),object:i,face:null,faceIndex:p,uv:null,uv1:null})}}}var df=class extends ae{constructor(t=new la,e=new ca({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)n_.fromBufferAttribute(e,o),i_.fromBufferAttribute(n,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+n_.distanceTo(i_);let s=new Hr(r,2,1);return t.setAttribute("instanceDistanceStart",new oi(s,1,0)),t.setAttribute("instanceDistanceEnd",new oi(s,1,1)),this}raycast(t,e){let n=this.material.worldUnits,r=t.camera;if(r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;rr=t.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Cs=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),ff.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Cs*.5;else{let d=Math.max(r.near,ff.distanceToPoint(rr.origin));c=s_(r,d,l.resolution)}if(ff.radius+=c,rr.intersectsSphere(ff)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),hf.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=Cs*.5;else{let d=Math.max(r.near,hf.distanceToPoint(rr.origin));h=s_(r,d,l.resolution)}hf.expandByScalar(h),rr.intersectsBox(hf)!==!1&&(n?eE(this,e):nE(this,r,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Zp),this.material.uniforms.resolution.value.set(Zp.z,Zp.w))}};var je=Math.PI/180,He=(i,t)=>typeof i=="number"&&isFinite(i)?i:t,Le=(i,t,e)=>Math.max(t,Math.min(e,i));function p_(i,t,e){let n=1/0,r=-1/0,s=1/0,o=-1/0;for(let[a,l]of i)n=Math.min(n,a),r=Math.max(r,a),s=Math.min(s,l),o=Math.max(o,l);return i.map(([a,l])=>[-t+(a-n)/(r-n)*2*t,-e+(l-s)/(o-s)*2*e])}function sm(i,t,e){i=Le(Math.round(He(i,5)),3,12);let n=[];for(let r=0;r<2*i;r++){let s=Math.PI/2+r*Math.PI/i,o=r%2?.5:1;n.push([o*Math.cos(s),o*Math.sin(s)])}return p_(n,t,e)}function om(i,t){let e=[];for(let n=0;n<60;n++){let r=n*6*je,s=Math.sin(r);e.push([16*s*s*s,13*Math.cos(r)-5*Math.cos(2*r)-2*Math.cos(3*r)-Math.cos(4*r)])}return p_(e,i,t)}var am=(i,t)=>[[i,0],[i/2,t],[-i/2,t],[-i,0],[-i/2,-t],[i/2,-t]],Qn=(i,t,e)=>{let n=[];for(let r=0;r<e;r++){let s=r/e*Math.PI*2;n.push([i*Math.cos(s),t*Math.sin(s)])}return n},iE=i=>{let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t},Fs=i=>iE(i)<0?i.slice().reverse():i,zn=class{constructor(){this.p=[],this.n=[]}tri(t,e,n,r,s,o){if(this.p.push(t[0],t[1],t[2],e[0],e[1],e[2],n[0],n[1],n[2]),!r){let a=e[0]-t[0],l=e[1]-t[1],c=e[2]-t[2],h=n[0]-t[0],d=n[1]-t[1],p=n[2]-t[2],g=l*p-c*d,x=c*h-a*p,b=a*d-l*h,_=Math.hypot(g,x,b)||1;r=s=o=[g/_,x/_,b/_]}this.n.push(r[0],r[1],r[2],s[0],s[1],s[2],o[0],o[1],o[2])}quad(t,e,n,r,s,o,a,l){this.tri(t,e,n,s,o,a),this.tri(t,n,r,s,a,l)}geo(){let t=new De;return t.setAttribute("position",new Re(this.p,3)),t.setAttribute("normal",new Re(this.n,3)),t}},Ti=i=>{let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]};function cc(i,t,e,n,r){for(let[s,o,a]of r){let l=[t[s][0],t[s][1],e],c=[t[o][0],t[o][1],e],h=[t[a][0],t[a][1],e],d=[0,0,n?1:-1];n?i.tri(l,c,h,d,d,d):i.tri(l,h,c,d,d,d)}}var rE=i=>mi.triangulateShape(i.map(([t,e])=>new gt(t,e)),[]);function yf(i,t=32){let e=i.length,n=[];for(let o=0;o<e;o++){let[a,l]=i[o],[c,h]=i[(o+1)%e],d=Math.hypot(c-a,h-l)||1;n.push([(h-l)/d,-(c-a)/d])}let r=Math.cos(t*je),s=[];for(let o=0;o<e;o++){let a=n[(o+e-1)%e],l=n[o],c=n[(o+1)%e],h=a[0]*l[0]+a[1]*l[1]>r?Ti([a[0]+l[0],a[1]+l[1],0]):[l[0],l[1],0],d=c[0]*l[0]+c[1]*l[1]>r?Ti([c[0]+l[0],c[1]+l[1],0]):[l[0],l[1],0];s.push([h,d])}return s}function lc(i,t,e=!0){i=Fs(i);let n=new zn,r=rE(i),s=i.length,o=yf(i,e?32:0);cc(n,i,-t,!1,r),cc(n,i,t,!0,r);for(let a=0;a<s;a++){let[l,c]=i[a],[h,d]=i[(a+1)%s],[p,g]=o[a];n.quad([l,c,-t],[h,d,-t],[h,d,t],[l,c,t],p,g,g,p)}return n.geo()}function sE(i,t,e,n,r){let s=new zn,o=Qn(i,t,r),a=[];for(let h=1;h<r-1;h++)a.push([0,h,h+1]);cc(s,o,-e,!1,a),n>1e-4&&cc(s,o.map(([h,d])=>[h*n,d*n]),e,!0,a);let l=(1-n)/(2*e),c=h=>Ti([Math.cos(h)/i,Math.sin(h)/t,l]);for(let h=0;h<r;h++){let d=h/r*Math.PI*2,p=(h+1)/r*Math.PI*2,[g,x]=o[h],[b,_]=o[(h+1)%r],y=c(d),w=c(p);n>1e-4?s.quad([g,x,-e],[b,_,-e],[b*n,_*n,e],[g*n,x*n,e],y,w,w,y):s.tri([g,x,-e],[b,_,-e],[0,0,e],y,w,c((d+p)/2))}return s.geo()}function oE(i,t,e){let n=new zn,r=[[i,-t],[i,t],[-i,t],[-i,-t]].map(([o,a])=>[o,a,-e]),s=[0,0,e];n.tri(r[0],r[2],r[1]),n.tri(r[0],r[3],r[2]);for(let o=0;o<4;o++)n.tri(r[(o+3)%4],r[o],s);return n.geo()}function tm(i,t,e){let n=new zn,r=(s,o,a)=>[s*i,o*t,a*e];return n.quad(r(-1,-1,-1),r(-1,1,-1),r(1,1,-1),r(1,-1,-1)),n.quad(r(-1,-1,1),r(1,-1,1),r(1,1,1),r(-1,1,1)),n.quad(r(-1,-1,-1),r(1,-1,-1),r(1,-1,1),r(-1,-1,1)),n.quad(r(1,1,-1),r(-1,1,-1),r(-1,1,1),r(1,1,1)),n.quad(r(1,-1,-1),r(1,1,-1),r(1,1,1),r(1,-1,1)),n.quad(r(-1,1,-1),r(-1,-1,-1),r(-1,-1,1),r(-1,1,1)),n.geo()}function aE(i,t,e){let n=new zn,r=[-i,-t,-e],s=[i,-t,-e],o=[-i,-t,e],a=[-i,t,-e],l=[i,t,-e],c=[-i,t,e];return n.quad(r,a,l,s),n.quad(a,r,o,c),n.quad(s,l,c,o),n.tri(r,s,o),n.tri(a,c,l),n.geo()}function lE(i,t,e,n){let r=new zn,s=Math.max(8,n>>1),o=(a,l)=>{let c=a/n*Math.PI*2,h=-Math.PI/2+l/s*Math.PI,d=Math.cos(h),p=Math.sin(h);return[[i*d*Math.cos(c),t*d*Math.sin(c),e*p],Ti([d*Math.cos(c)/i,d*Math.sin(c)/t,p/e])]};for(let a=0;a<s;a++)for(let l=0;l<n;l++){let[c,h]=o(l,a),[d,p]=o(l+1,a),[g,x]=o(l+1,a+1),[b,_]=o(l,a+1);a===0?r.tri([0,0,-e],g,b,[0,0,-1],x,_):a===s-1?r.tri(c,d,[0,0,e],h,p,[0,0,1]):r.quad(c,d,g,b,h,p,x,_)}return r.geo()}function cE(i,t,e,n,r,s,o){let a=Math.min(.995,s/Math.min(n,r)),l=1-a,c=Math.max(12,Math.round(o*.4)),h=new zn,d=(p,g)=>{let x=p/o*Math.PI*2,b=g/c*Math.PI*2,_=l+a*Math.cos(b),y=Math.cos(x),w=Math.sin(x);return[[i*_*y,t*_*w,e*Math.sin(b)],Ti([Math.cos(b)*y/(a*i),Math.cos(b)*w/(a*t),Math.sin(b)/e])]};for(let p=0;p<c;p++)for(let g=0;g<o;g++){let[x,b]=d(g,p),[_,y]=d(g+1,p),[w,m]=d(g+1,p+1),[u,v]=d(g,p+1);h.quad(x,_,w,u,b,y,m,v)}return h.geo()}function uE(i,t,e,n,r){let s=i-n,o=t-n;if(s<.05||o<.05)return lc(Qn(i,t,r),e);let a=new zn,l=Qn(i,t,r),c=Qn(s,o,r),h=[0,0,1],d=[0,0,-1],p=x=>Ti([Math.cos(x)/i,Math.sin(x)/t,0]),g=x=>Ti([-Math.cos(x)/s,-Math.sin(x)/o,0]);for(let x=0;x<r;x++){let b=(x+1)%r,_=x/r*Math.PI*2,y=(x+1)/r*Math.PI*2,w=l[x],m=l[b],u=c[x],v=c[b];a.quad([w[0],w[1],e],[m[0],m[1],e],[v[0],v[1],e],[u[0],u[1],e],h,h,h,h),a.quad([w[0],w[1],-e],[u[0],u[1],-e],[v[0],v[1],-e],[m[0],m[1],-e],d,d,d,d),a.quad([w[0],w[1],-e],[m[0],m[1],-e],[m[0],m[1],e],[w[0],w[1],e],p(_),p(y),p(y),p(_)),a.quad([v[0],v[1],-e],[u[0],u[1],-e],[u[0],u[1],e],[v[0],v[1],e],g(y),g(_),g(_),g(y))}return a.geo()}function hE(i,t,e,n){let r=new zn,s=Math.max(6,n>>2),o=2*e,a=(h,d)=>{let p=h/n*Math.PI*2,g=d/s*Math.PI/2,x=Math.cos(g),b=Math.sin(g);return[[i*x*Math.cos(p),t*x*Math.sin(p),-e+o*b],Ti([x*Math.cos(p)/i,x*Math.sin(p)/t,b/o])]};for(let h=0;h<s;h++)for(let d=0;d<n;d++){let[p,g]=a(d,h),[x,b]=a(d+1,h),[_,y]=a(d+1,h+1),[w,m]=a(d,h+1);h===s-1?r.tri(p,x,[0,0,e],g,b,[0,0,1]):r.quad(p,x,_,w,g,b,y,m)}let l=Qn(i,t,n),c=[];for(let h=1;h<n-1;h++)c.push([0,h,h+1]);return cc(r,l,-e,!1,c),r.geo()}function fE(i,t,e){i=Fs(i),t=t.map(l=>Fs(l).slice().reverse());let n=new zn,r=[...i,...t.flat()],s=mi.triangulateShape(i.map(([l,c])=>new gt(l,c)),t.map(l=>l.map(([c,h])=>new gt(c,h)))),o=[0,0,1],a=[0,0,-1];for(let[l,c,h]of s){let d=r[l],p=r[c],g=r[h];n.tri([d[0],d[1],e],[p[0],p[1],e],[g[0],g[1],e],o,o,o),n.tri([d[0],d[1],-e],[g[0],g[1],-e],[p[0],p[1],-e],a,a,a)}for(let l of[i,...t]){let c=l.length,h=yf(l,0);for(let d=0;d<c;d++){let[p,g]=l[d],[x,b]=l[(d+1)%c],[_,y]=h[d];n.quad([p,g,-e],[x,b,-e],[x,b,e],[p,g,e],_,y,y,_)}}return n.geo()}function dE(i){let t=0;for(let o of i)t+=o.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),r=0;for(let o of i)e.set(o.attributes.position.array,r*3),n.set(o.attributes.normal.array,r*3),r+=o.attributes.position.count,o.dispose();let s=new De;return s.setAttribute("position",new Oe(e,3)),s.setAttribute("normal",new Oe(n,3)),s}function pE(i,t,e){let n=typeof globalThis.m3TextLay=="function"?globalThis.m3TextLay(i.txt):null;if(!n||!n.polys.length)return[];let r=2*t/n.W,s=2*e/n.H;return n.polys.map(o=>o.map(a=>a.map(([l,c])=>[-t+l*r,-e+c*s])))}function m_(i,t,e,n,r){let s=pE(i,t,e);return s.length?dE(s.map(([o,...a])=>r?Is(o,a,n,r,!1):fE(o,a,n))):tm(t,e,n)}var mE=(i,t,e,n)=>Math.max(0,Math.min(He(i.cr,3),t,e,n)),gE=["box","cyl","sph","cone","pyr","wedge","torus","tube","star","heart","hex","hsph","rbox","text"];function wr(i){let t=Array.isArray(i.s)?i.s:[20,20,20],e=Math.abs(He(t[0],20));return[Math.max(.05,e),Math.max(.05,Math.abs(He(t[1],e))),Math.max(.05,Math.abs(He(t[2],e)))]}function lm(i,t){let[e,n,r]=wr(i),s=gE.includes(i.t)?i.t:"box";return s+":"+e.toFixed(3)+","+n.toFixed(3)+","+r.toFixed(3)+(s==="cone"?","+Le(He(i.top,0),0,1).toFixed(3):"")+(s==="tube"?","+He(i.w,2).toFixed(3):"")+(s==="star"?","+Le(Math.round(He(i.n,5)),3,12):"")+(s==="rbox"?","+He(i.cr,3).toFixed(3):"")+(s==="text"?","+JSON.stringify(String(i.txt??"")):"")+"/"+t}var cm=(i,t)=>{let[e,n]=wr(i);return Math.max(24,Math.min(t,Math.round(Math.max(e,n)*.9+20)&-4))};function um(i,t=64){let[e,n,r]=wr(i),s=e/2,o=n/2,a=r/2,l=cm(i,t);switch(i.t){case"cyl":return lc(Qn(s,o,l),a);case"sph":return lE(s,o,a,l);case"cone":return sE(s,o,a,Le(He(i.top,0),0,1),l);case"pyr":return oE(s,o,a);case"wedge":return aE(s,o,a);case"torus":return cE(s,o,a,e,n,r,l);case"tube":return uE(s,o,a,Math.max(.2,He(i.w,2)),l);case"star":return lc(sm(i.n,s,o),a,!1);case"heart":return lc(om(s,o),a);case"hex":return lc(am(s,o),a,!1);case"hsph":return hE(s,o,a,l);case"rbox":{let c=mE(i,s,o,a);return c<.05?tm(s,o,a):g_(s,o,a,c,Math.max(3,Math.min(6,Math.round(c*1.2)+2)))}case"text":return m_(i,s,o,a,0);default:return tm(s,o,a)}}function Kp(i,t){let e=i.length,n=[];for(let r=0;r<e;r++){let[s,o]=i[(r+e-1)%e],[a,l]=i[r],[c,h]=i[(r+1)%e],d=a-s,p=l-o,g=c-a,x=h-l,b=Math.hypot(d,p)||1,_=Math.hypot(g,x)||1,y=[-p/b,d/b],w=[-x/_,g/_],m=y[0]+w[0],u=y[1]+w[1],v=Math.hypot(m,u)||1;m/=v,u/=v;let f=Math.min(3,1/Math.max(.2,m*y[0]+u*y[1]));n.push([a+m*t*f,l+u*t*f])}return n}function Is(i,t,e,n,r=!0,s=3){i=Fs(i),t=t.map(b=>Fs(b).slice().reverse());let o=new zn,a=[i,...t];n=Math.min(n,e*.45);let l=(b,_,y)=>{let w=_/s*Math.PI/2,m=n*(1-Math.cos(w)),u=y?e-n+n*Math.sin(w):-e+n-n*Math.sin(w);return{P:m>1e-6?Kp(b,m):b,z:u,c:Math.cos(w),s:Math.sin(w)*(y?1:-1)}};for(let b of a){let _=b.length,y=yf(b,r?32:0),w=[],m=[];for(let v=0;v<=s;v++)w.push(l(b,v,!1)),m.push(l(b,v,!0));let u=(v,f)=>{for(let C=0;C<_;C++){let M=(C+1)%_,[S,E]=y[C],T=Ti([S[0]*v.c,S[1]*v.c,v.s]),A=Ti([E[0]*v.c,E[1]*v.c,v.s]),R=Ti([S[0]*f.c,S[1]*f.c,f.s]),U=Ti([E[0]*f.c,E[1]*f.c,f.s]);o.quad([v.P[C][0],v.P[C][1],v.z],[v.P[M][0],v.P[M][1],v.z],[f.P[M][0],f.P[M][1],f.z],[f.P[C][0],f.P[C][1],f.z],T,A,U,R)}};for(let v=s;v>0;v--)u(w[v],w[v-1]);u(w[0],m[0]);for(let v=0;v<s;v++)u(m[v],m[v+1])}let c=Kp(i,n),h=t.map(b=>Kp(b,n)),d=mi.triangulateShape(c.map(([b,_])=>new gt(b,_)),h.map(b=>b.map(([_,y])=>new gt(_,y)))),p=[...c,...h.flat()],g=[0,0,1],x=[0,0,-1];for(let[b,_,y]of d){let w=p[b],m=p[_],u=p[y];o.tri([w[0],w[1],e],[m[0],m[1],e],[u[0],u[1],e],g,g,g),o.tri([w[0],w[1],-e],[u[0],u[1],-e],[m[0],m[1],-e],x,x,x)}return o.geo()}function g_(i,t,e,n,r=3){let s=new zn,o=[i,t,e],a=o.map(h=>h-n),l=a.map(h=>{let d=[-h-n];for(let p=r-1;p>=1;p--)d.push(-h-n*Math.tan(p/r*Math.PI/4));d.push(-h,h);for(let p=1;p<r;p++)d.push(h+n*Math.tan(p/r*Math.PI/4));return d.push(h+n),d}),c=h=>{let d=h.map((b,_)=>Le(b,-a[_],a[_])),p=[h[0]-d[0],h[1]-d[1],h[2]-d[2]],g=Math.hypot(p[0],p[1],p[2])||1,x=[p[0]/g,p[1]/g,p[2]/g];return[[d[0]+x[0]*n,d[1]+x[1]*n,d[2]+x[2]*n],x]};for(let h=0;h<3;h++)for(let d of[1,-1]){let p=(h+1)%3,g=(h+2)%3,x=l[p],b=l[g],_=(y,w)=>{let m=[0,0,0];return m[h]=d*o[h],m[p]=y,m[g]=w,c(m)};for(let y=0;y<x.length-1;y++)for(let w=0;w<b.length-1;w++){let m=_(x[y],b[w]),u=_(x[y+1],b[w]),v=_(x[y+1],b[w+1]),f=_(x[y],b[w+1]);d>0?s.quad(m[0],u[0],v[0],f[0],m[1],u[1],v[1],f[1]):s.quad(m[0],f[0],v[0],u[0],m[1],f[1],v[1],u[1])}}return s.geo()}function xE(i,t=64){let[e,n,r]=wr(i),s=e/2,o=n/2,a=r/2,l=cm(i,t),c=Math.min(e,n,r),h=Le(c*.035,.15,.6);switch(i.t){case"box":case void 0:return g_(s,o,a,Math.min(h,s*.4,o*.4,a*.4));case"cyl":return Is(Qn(s,o,l),[],a,h);case"tube":{let d=Math.max(.2,He(i.w,2));return s-d<.05||o-d<.05?Is(Qn(s,o,l),[],a,h):Is(Qn(s,o,l),[Qn(s-d,o-d,l)],a,Math.min(h,d*.3))}case"hex":return Is(am(s,o),[],a,h,!1);case"star":return Is(sm(i.n,s,o),[],a,h*.55,!1);case"heart":return Is(om(s,o),[],a,h*.5);case"text":return m_(i,s,o,a,Math.min(h*.45,a*.3,.25));default:return um(i,t)}}function o_(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=Math.max(1,Math.ceil(Math.hypot(s[0]-r[0],s[1]-r[1])/t));for(let a=0;a<o;a++)e.push([r[0]+(s[0]-r[0])*a/o,r[1]+(s[1]-r[1])*a/o])}return e}function a_(i,t,e){let n=!1;for(let r=0,s=i.length-1;r<i.length;s=r++){let o=i[r],a=i[s];o[1]>e!=a[1]>e&&t<(a[0]-o[0])*(e-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}var _E=(i,t,e,n)=>{let r=n[0]-e[0],s=n[1]-e[1],o=r*r+s*s||1,a=Le(((i-e[0])*r+(t-e[1])*s)/o,0,1),l=e[0]+r*a-i,c=e[1]+s*a-t;return l*l+c*c};function vE(i,t,e){let n=1/0,r=-1/0,s=1/0,o=-1/0;for(let[p,g]of i)n=Math.min(n,p),r=Math.max(r,p),s=Math.min(s,g),o=Math.max(o,g);let a=[i,...t],l=[],c=(e*.55)**2;for(let p=s+e/2;p<o;p+=e)for(let g=n+e/2+Math.round((p-s)/e)%2*e/2;g<r;g+=e){if(!a_(i,g,p)||t.some(b=>a_(b,g,p)))continue;let x=!0;for(let b of a){for(let _=0;_<b.length&&x;_++)_E(g,p,b[_],b[(_+1)%b.length])<c&&(x=!1);if(!x)break}x&&l.push([[g,p]])}let h=p=>p.map(([g,x])=>new gt(g,x)),d=mi.triangulateShape(h(i),[...t.map(h),...l.map(h)]);return{all:[...i,...t.flat(),...l.flat()],tris:d}}function ua(i,t,e,n,r=!0){i=Fs(o_(i,n)),t=t.map(d=>Fs(o_(d,n)).slice().reverse());let s=new zn,o=Math.max(1,Math.ceil(2*e/n)),a=[0,0,1],l=[0,0,-1],{all:c,tris:h}=vE(i,t,n);for(let[d,p,g]of h){let x=c[d],b=c[p],_=c[g];s.tri([x[0],x[1],e],[b[0],b[1],e],[_[0],_[1],e],a,a,a),s.tri([x[0],x[1],-e],[_[0],_[1],-e],[b[0],b[1],-e],l,l,l)}for(let d of[i,...t]){let p=d.length,g=yf(d,r?32:0);for(let x=0;x<p;x++){let[b,_]=d[x],[y,w]=d[(x+1)%p],[m,u]=g[x];for(let v=0;v<o;v++){let f=-e+2*e*v/o,C=-e+2*e*(v+1)/o;s.quad([b,_,f],[y,w,f],[y,w,C],[b,_,C],m,u,u,m)}}}return s.geo()}function yE(i,t,e,n){let r=new zn,s=[i,t,e],o=s.map(a=>Math.max(1,Math.ceil(2*a/n)));for(let a=0;a<3;a++)for(let l of[1,-1]){let c=(a+1)%3,h=(a+2)%3,d=[0,0,0];d[a]=l;let p=(g,x)=>{let b=[0,0,0];return b[a]=l*s[a],b[c]=-s[c]+2*s[c]*g/o[c],b[h]=-s[h]+2*s[h]*x/o[h],b};for(let g=0;g<o[c];g++)for(let x=0;x<o[h];x++){let b=p(g,x),_=p(g+1,x),y=p(g+1,x+1),w=p(g,x+1);l>0?r.quad(b,_,y,w,d,d,d,d):r.quad(b,w,y,_,d,d,d,d)}}return r.geo()}function ME(i,t=64,e=4){let[n,r,s]=wr(i),o=n/2,a=r/2,l=s/2,c=cm(i,t);switch(i.t){case"cyl":return ua(Qn(o,a,c),[],l,e);case"tube":{let h=Math.max(.2,He(i.w,2));return o-h<.05||a-h<.05?ua(Qn(o,a,c),[],l,e):ua(Qn(o,a,c),[Qn(o-h,a-h,c)],l,e)}case"hex":return ua(am(o,a),[],l,e,!1);case"star":return ua(sm(i.n,o,a),[],l,e,!1);case"heart":return ua(om(o,a),[],l,e);case"box":case void 0:return yE(o,a,l,e);default:return null}}var l_=new gi,SE=new Fn,em=new D,bE=new D(1,1,1);function x_(i,t=new Wt){if(Array.isArray(i.m)&&i.m.length===16&&i.m.every(r=>typeof r=="number"&&isFinite(r)))return t.fromArray(i.m);let e=Array.isArray(i.p)?i.p:[0,0,0],n=Array.isArray(i.r)?i.r:[0,0,0];return l_.set(He(n[0],0)*je,He(n[1],0)*je,He(n[2],0)*je,"ZYX"),t.compose(em.set(He(e[0],0),He(e[1],0),He(e[2],0)),SE.setFromEuler(l_),bE)}function xf(i){if(!i)return null;if(i.tree)return i.tree;if(i.op||i.prim)return i;if(i.prog!=null||i.src!=null)try{return typeof globalThis.m3Tree=="function"?globalThis.m3Tree(i):null}catch{return null}let t=(i.parts||[]).filter(a=>a&&typeof a=="object"&&a.s);if(!t.length)return null;let e=a=>a.length===1?a[0]:{op:"union",kids:a},n=(a,l)=>l.length?{op:"diff",kids:[e(a),e(l)]}:e(a),r=[],s=[],o=new Map;for(let a of t)a.g!=null&&a.g!==""?(o.has(a.g)||o.set(a.g,{s:[],h:[]}),o.get(a.g)[a.hole?"h":"s"].push({prim:a})):(a.hole?s:r).push({prim:a});for(let a of o.values())a.s.length?r.push(n(a.s,a.h)):s.push(e(a.h));return r.length?n(r,s):null}function hm(i,t=[],e=!1){return i?i.prim?(t.push({q:i.prim,neg:e}),t):((i.kids||[]).forEach((n,r)=>hm(n,t,i.op==="diff"&&r>0?!e:e)),t):t}function wE(i){return i?i.parts?i.parts.filter(t=>t&&typeof t=="object"&&t.s).map((t,e)=>({q:t,id:t.id!=null?String(t.id):"#"+e,hole:!!t.hole})):hm(xf(i)).map(({q:t,neg:e},n)=>({q:t,id:t.id!=null?String(t.id):"#"+n,hole:e||!!t.hole})):[]}var EE=0,TE=.02,Ds=new Map,Ls=new Map;function AE(i,t){let e="D"+lm(i,t),n=Ls.get(e);if(!n){try{n=xE(i,t)}catch{n=um(i,t)}if(n.computeBoundingBox(),n.computeBoundingSphere(),Ls.set(e,n),Ls.size>300){let r=Ls.keys().next().value;Ls.get(r).dispose(),Ls.delete(r)}}return n}function __(i,t){let e=lm(i,t),n=Ds.get(e);if(!n&&(n=um(i,t),n.computeBoundingBox(),Ds.set(e,n),Ds.size>400)){let r=Ds.keys().next().value;Ds.get(r).dispose(),Ds.delete(r)}return n}var _f=class extends bs{prepareGeometry(){let t=this.geometry,e=t.index,n=t.attributes.position,r=`${t.uuid}_${e?e.uuid+"_"+e.version:"-"}_${n.uuid}_${n.count}_${n.version}`;if(this._hash===r)return;this._hash=r,t.boundsTree=new Jo(t,{targetLeafSize:3,maxDepth:64,indirect:!0}),t.halfEdges||(t.halfEdges=new jo),t.halfEdges.updateFrom(t);let s=(e?e.count:n.count)/3|0;(!t.groupIndices||t.groupIndices.length!==s)&&(t.groupIndices=new Uint16Array(s));let o=t.groupIndices;o.fill(0),t.groups.forEach((a,l)=>{for(let c=a.start/3,h=Math.min(s,(a.start+a.count)/3);c<h;c++)o[c]=l})}},pf=new Wt,c_=new Wt;function RE(i,t,e,n){let[r,s,o]=wr(i),a=null;if(n)try{a=ME(i,e,n)}catch{a=null}return a||(a=__(i,e).clone()),x_(i,pf),t&&(c_.makeScale((r+2*t)/r,(s+2*t)/s,(o+2*t)/o),pf.multiply(c_)),a.applyMatrix4(pf),pf.determinant()<0&&CE(a),a.computeBoundingBox(),a}function CE(i){let t=i.attributes.position.array,e=i.attributes.normal.array;for(let n=0;n<t.length;n+=9)for(let r=0;r<3;r++){let s=t[n+3+r];t[n+3+r]=t[n+6+r],t[n+6+r]=s,s=e[n+3+r],e[n+3+r]=e[n+6+r],e[n+6+r]=s}i.attributes.position.needsUpdate=i.attributes.normal.needsUpdate=!0}var gf=(i,t,e=.001)=>i.min.x<=t.max.x+e&&i.max.x>=t.min.x-e&&i.min.y<=t.max.y+e&&i.max.y>=t.min.y-e&&i.min.z<=t.max.z+e&&i.max.z>=t.min.z-e;function PE(i){let t=i.attributes.position.array,e=i.attributes.normal.array,n=i.drawRange.start,r=Math.min(i.attributes.position.count,n+i.drawRange.count),s=new De;s.setAttribute("position",new Oe(t.slice(n*3,r*3),3)),s.setAttribute("normal",new Oe(e.slice(n*3,r*3),3));for(let o of i.groups){let a=Math.max(o.start,n),l=Math.min(r,o.start+o.count);l>a&&s.addGroup(a-n,l-a,o.materialIndex)}return s.computeBoundingBox(),s}function jp(i){let t=0;for(let{g:a}of i)t+=a.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),r=new De,s=[],o=0;for(let{g:a,mat:l}of i){let c=a.attributes.position.count,h=[].concat(l);e.set(a.attributes.position.array.subarray(0,c*3),o*3),n.set(a.attributes.normal.array.subarray(0,c*3),o*3);let d=a.groups.length?a.groups:[{start:0,count:c,materialIndex:0}];for(let p of d){let g=h[p.materialIndex||0]??h[0],x=s.indexOf(g);x<0&&(x=s.length,s.push(g)),r.addGroup(o+p.start,Math.min(p.count,c-p.start),x)}o+=c}return r.setAttribute("position",new Oe(e,3)),r.setAttribute("normal",new Oe(n,3)),r.computeBoundingBox(),{g:r,mat:s}}var da=class{constructor(t={}){this.ev=new sf,this.ev.attributes=["position","normal"],this.ev.useGroups=!0,this.seg=t.seg||64,this.matFor=t.matFor||(()=>null),this.cache=new Map,this.gen=0,this.ops=0}memo(t,e){let n=this.cache.get(t);return n||(n=e(),n.key=t,this.cache.set(t,n)),n.gen=this.gen,n}brush(t){return t.brush||(t.brush=new _f(t.g,t.mat),t.brush.updateMatrixWorld()),t.brush}op(t,e,n){this.ops++;let r=this.ev.evaluate(this.brush(t),this.brush(e),n,new _f),s=PE(r.geometry);return r.geometry.dispose(),{g:s,mat:r.material}}leaf(t,e,n,r){let s=this.matFor(t,e,n),o=e?TE:EE,a="L"+JSON.stringify([t.t,t.s,t.p,t.r,t.m,t.top,t.w,t.n,o,this.seg,s&&s.uuid?s.uuid:String(s)])+(r?"~"+r:""),l=this.memo(a,()=>({g:RE(t,o,this.seg,r),mat:s}));return l.src={q:t,neg:e,base:n},l}refine(t,e){if(!t.src||t.key.includes("~"))return t;let n=0,r=1/0;for(let h of e){n+=h.g.attributes.position.count/3;let d=h.g.boundingBox.getSize(em);r=Math.min(r,Math.max(Math.min(d.x,d.y,d.z),.5))}let s=t.g.boundingBox.getSize(em),o=s.x*s.y+s.y*s.z+s.x*s.z,a=t.g.attributes.position.count/3;if(e.length<4&&n<300)return t;let l=Math.round(Le(Math.max(r*1.1,Math.sqrt(o/6e3)),1.5,12)*2)/2;if(o/(l*l)<a*1.5)return t;let c=this.leaf(t.src.q,t.src.neg,t.src.base,l);return c.g.attributes.position.count?c:t}minus(t,e){let n=[];for(let r of t){let s=e.filter(o=>gf(r.g.boundingBox,o.g.boundingBox));s.length&&(r=this.refine(r,s));for(let o of IE(s)){let a=o.length===1?o[0]:this.memo("U"+o.map(h=>h.key).join("|"),()=>jp(o)),l=r,c=a;if(r=this.memo("("+l.key+")-("+c.key+")",()=>this.op(l,c,1)),!r.g.attributes.position.count)break}r.g.attributes.position.count&&n.push(r)}return n}inter(t,e){let n=[];for(let r of t)for(let s of e)if(gf(r.g.boundingBox,s.g.boundingBox)){let o=this.memo("("+r.key+")&("+s.key+")",()=>this.op(r,s,3));o.g.attributes.position.count&&n.push(o)}return n}node(t,e=!1,n=null){if(!t)return[];if(t.prim)return[this.leaf(t.prim,e,n)];let r=(t.kids||[]).filter(Boolean);if(!r.length)return[];if(t.op==="diff"){let s=n||v_(r[0]),o=this.node(r[0],e,n),a=r.slice(1).flatMap(l=>this.node(l,!e,s));return o.length&&a.length?this.minus(o,a):o}if(t.op==="inter"){let s=this.node(r[0],e,n);for(let o of r.slice(1)){if(!s.length)break;s=this.inter(s,this.node(o,e,n))}return s}return r.flatMap(s=>this.node(s,e,n))}pieces(t){this.gen++,this.ops=0;let e=[];try{e=this.node(xf(t)),this.failed=!1}catch(n){this.failed=!0,typeof console<"u"&&console.warn("m3 csg",n);try{e=hm(xf(t)).filter(r=>!r.neg).map(r=>this.leaf(r.q,!1,null))}catch{e=[]}}return e}sweep(t=1){for(let[e,n]of this.cache)this.gen-n.gen>=t&&(n.g.dispose(),n.brush&&(n.brush.geometry=null),this.cache.delete(e))}run(t){let e=u_(),n=this.pieces(t),r=n.length?jp(n):{g:new De,mat:[]};return this.sweep(2),r.ms=u_()-e,r.ops=this.ops,r}solid(t){let n=this.pieces(t).map(s=>({g:s.g,mat:s.mat,key:s.key})).slice();for(let s=!0;s;){s=!1;let o=new Set,a=[],l=n.map(c=>c.g.boundingBox.getCenter(new D));for(let c=0;c<n.length;c++){if(o.has(c))continue;let h=-1,d=1/0;for(let b=c+1;b<n.length;b++)if(!o.has(b)&&gf(n[c].g.boundingBox,n[b].g.boundingBox)){let _=l[c].distanceToSquared(l[b]);_<d&&(d=_,h=b)}if(h<0){a.push(n[c]),o.add(c);continue}let p=n[c],g=n[h],x=this.op(p,g,0);p.tmp&&p.g.dispose(),g.tmp&&g.g.dispose(),x.tmp=!0,a.push(x),o.add(c),o.add(h),s=!0}n=a}let r=n.length?jp(n).g:new De;return n.forEach(s=>s.tmp&&s.g.dispose()),this.sweep(2),r.attributes.position?fm(r):r}dispose(){for(let t of this.cache.values())t.g.dispose();this.cache.clear()}},u_=()=>typeof performance<"u"?performance.now():Date.now(),v_=i=>i.prim?i.prim:i.kids&&i.kids.length?v_(i.kids[0]):null;function IE(i){let t=[];for(let e of i){let n=t.find(r=>r.every(s=>!gf(s.g.boundingBox,e.g.boundingBox,.01)));n?n.push(e):t.push([e])}return t}function fm(i,t=.001){let e=i.attributes.position.array,n=[],r=new Map,s=x=>Math.round(x/t),o=(x,b,_)=>{let y=s(x)+","+s(b)+","+s(_),w=r.get(y);return w===void 0&&(w=n.length/3,r.set(y,w),n.push(x,b,_)),w},a=[];for(let x=0;x<e.length;x+=3)a.push(o(e[x],e[x+1],e[x+2]));let l=x=>n[x*3],c=x=>n[x*3+1],h=x=>n[x*3+2];for(let x=0;x<4;x++){let b=Mf(a),_=[];for(let[S,E]of b)if(E){let T=S%4194304,A=(S-T)/4194304;_.push([A,T])}if(!_.length)break;let y=new Set;_.forEach(([S,E])=>{y.add(S),y.add(E)});let w=1,m=new Map,u=t*3,v=(S,E,T)=>S+","+E+","+T;for(let S of y){let E=l(S),T=c(S),A=h(S),R=new Set;for(let U of[-u,u])for(let F of[-u,u])for(let z of[-u,u])R.add(v(Math.floor((E+U)/w),Math.floor((T+F)/w),Math.floor((A+z)/w)));for(let U of R){let F=m.get(U);F||m.set(U,F=[]),F.push(S)}}let f=(S,E)=>{let T=[l(S),c(S),h(S)],A=[l(E)-T[0],c(E)-T[1],h(E)-T[2]],R=A[0]*A[0]+A[1]*A[1]+A[2]*A[2];if(R<1e-12)return[];let U=[],F=new Set,z=T.map(q=>Math.floor(q/w)),V=[l(E),c(E),h(E)].map(q=>Math.floor(q/w)),Z=A.map(Math.sign),H=[0,1,2].map(q=>A[q]?((z[q]+(Z[q]>0?1:0))*w-T[q])/A[q]:1/0),tt=A.map(q=>q?w/Math.abs(q):1/0);for(let q=0;q<1e5;q++){for(let dt of m.get(v(z[0],z[1],z[2]))||[]){if(dt===S||dt===E||F.has(dt))continue;F.add(dt);let Et=l(dt)-T[0],St=c(dt)-T[1],Vt=h(dt)-T[2],J=(Et*A[0]+St*A[1]+Vt*A[2])/R;if(J<=1e-6||J>=1-1e-6)continue;let N=Et-A[0]*J,lt=St-A[1]*J,Mt=Vt-A[2]*J;N*N+lt*lt+Mt*Mt<t*t*4&&U.push([J,dt])}if(z[0]===V[0]&&z[1]===V[1]&&z[2]===V[2])break;let ut=H[0]<H[1]?H[0]<H[2]?0:2:H[1]<H[2]?1:2;if(H[ut]>1+1e-9)break;z[ut]+=Z[ut],H[ut]+=tt[ut]}return U.sort((q,ut)=>q[0]-ut[0]).map(q=>q[1])},C=new Map;for(let[S,E]of _){let T=f(S,E);T.length&&(C.set(S*4194304+E,T),C.set(E*4194304+S,T.slice().reverse()))}if(!C.size)break;let M=[];for(let S=0;S<a.length;S+=3){let E=[a[S],a[S+1],a[S+2]],T=[];for(let R=0;R<3;R++){let U=E[R],F=E[(R+1)%3];T.push(U);let z=C.get(U*4194304+F);z&&T.push(...z)}if(T.length===3){M.push(...E);continue}let A=[0,1,2].filter(R=>C.has(E[R]*4194304+E[(R+1)%3]));if(A.length===1){let R=T.indexOf(E[(A[0]+2)%3]);T=T.slice(R).concat(T.slice(0,R));for(let U=1;U<T.length-1;U++)M.push(T[0],T[U],T[U+1])}else{let R=n.length/3;n.push((l(E[0])+l(E[1])+l(E[2]))/3,(c(E[0])+c(E[1])+c(E[2]))/3,(h(E[0])+h(E[1])+h(E[2]))/3);for(let U=0;U<T.length;U++)M.push(R,T[U],T[(U+1)%T.length])}}a=M}let d=DE(a);if(d!==a&&fa(d)<=fa(a)&&(a=d),fa(a)){let x=LE(a,n);x!==a&&fa(x)<fa(a)&&(a=x)}let p=new Float32Array(a.length*3);for(let x=0;x<a.length;x++)p[x*3]=n[a[x]*3],p[x*3+1]=n[a[x]*3+1],p[x*3+2]=n[a[x]*3+2];let g=new De;return g.setAttribute("position",new Oe(p,3)),g.computeVertexNormals(),g.computeBoundingBox(),g}function Mf(i){let t=new Map;for(let e=0;e<i.length;e+=3)for(let n=0;n<3;n++){let r=i[e+n],s=i[e+(n+1)%3];if(r===s)continue;let o=r<s?r*4194304+s:s*4194304+r;t.set(o,(t.get(o)||0)+(r<s?1:-1))}return t}function fa(i){let t=0;for(let e of Mf(i).values())e&&t++;return t}function DE(i){let t=new Map,e=new Uint8Array(i.length/3).fill(1);for(let r=0;r<i.length/3;r++){let s=i[r*3],o=i[r*3+1],a=i[r*3+2];if(s===o||o===a||s===a){e[r]=0;continue}let l=[s,o,a].sort((x,b)=>x-b),c=l.join(","),h=[s,o,a].indexOf(l[0]),d=[s,o,a][(h+1)%3]===l[1]?1:-1,p=t.get(c);if(!p||!p.length){t.set(c,[[r,d]]);continue}let g=p.findIndex(([,x])=>x===-d);g>=0?(e[r]=0,e[p[g][0]]=0,p.splice(g,1)):e[r]=0}if(e.every(Boolean))return i;let n=[];for(let r=0;r<e.length;r++)e[r]&&n.push(i[r*3],i[r*3+1],i[r*3+2]);return n}function LE(i,t){let e=Mf(i),n=i.slice(),r=0,s=(a,l)=>a<l?a*4194304+l:l*4194304+a,o=(a,l)=>a<l?1:-1;for(let a=0;a<i.length;a+=3){let l=[n[a],n[a+1],n[a+2]];if(!(l[0]===l[1]||l[1]===l[2]||l[0]===l[2])&&[0,1,2].every(c=>e.get(s(l[c],l[(c+1)%3]))*o(l[c],l[(c+1)%3])===2)){for(let c=0;c<3;c++){let h=l[c],d=l[(c+1)%3];e.set(s(h,d),e.get(s(h,d))-2*o(h,d))}n[a+1]=l[2],n[a+2]=l[1],r++}}return r?n:i}function y_(i){let t=i.attributes.position.array,e=t.length/9|0,n=new ArrayBuffer(84+e*50),r=new DataView(n),s="Numi Tech 3D - STL binari en mm (z amunt)";for(let a=0;a<80;a++)r.setUint8(a,a<s.length?s.charCodeAt(a):32);r.setUint32(80,e,!0);let o=84;for(let a=0;a<e;a++){let l=a*9,c=t[l],h=t[l+1],d=t[l+2],p=t[l+3],g=t[l+4],x=t[l+5],b=t[l+6],_=t[l+7],y=t[l+8],w=p-c,m=g-h,u=x-d,v=b-c,f=_-h,C=y-d,M=m*C-u*f,S=u*v-w*C,E=w*f-m*v,T=Math.hypot(M,S,E)||1;r.setFloat32(o,M/T,!0),r.setFloat32(o+4,S/T,!0),r.setFloat32(o+8,E/T,!0),o+=12;for(let A=0;A<9;A++)r.setFloat32(o,t[l+A],!0),o+=4;r.setUint16(o,0,!0),o+=2}return n}function sD(i,t=.001){let e=i.attributes.position.array,n=o=>Math.round(e[o]/t)+","+Math.round(e[o+1]/t)+","+Math.round(e[o+2]/t),r=new Map;for(let o=0;o<e.length;o+=9){let a=[n(o),n(o+3),n(o+6)];for(let l=0;l<3;l++){let c=a[l],h=a[(l+1)%3];if(c===h)continue;let d=c<h?c+"|"+h:h+"|"+c,p=c<h?1:-1;r.set(d,(r.get(d)||0)+p)}}let s=0;for(let o of r.values())o!==0&&s++;return s}var oc=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,rn={sel:"#FFB21E",ghost:"#3D8BFF",ax:["#F0443A","#1FB45A","#2F7BFF"],ink:"#14204A",hole:"#9AA4B6"},M_="#7C5CFF",dm=i=>{let t=new ee(M_);try{typeof i=="string"&&i&&t.set(i)}catch{}return t};function Bs(i,t,e,n=!0){let r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);let s=new Xa(r);return n&&(s.colorSpace=Rn),s.anisotropy=8,s}function NE(i=256,t=7){let e=t,n=()=>(e=e*1664525+1013904223>>>0)/4294967296,r=Bs(i,i,(s,o,a)=>{let l=s.createImageData(o,a),c=l.data,h=new Float32Array(o*a);for(let p=0;p<o*a;p++)h[p]=n();let d=(p,g,x)=>{let b=Math.floor(p/x),_=Math.floor(g/x),y=p/x-b,w=g/x-_,m=o/x,u=(C,M)=>h[(M%m+m)%m*131%(o*a)+(C%m+m)%m*17%o],v=y*y*(3-2*y),f=w*w*(3-2*w);return(u(b,_)*(1-v)+u(b+1,_)*v)*(1-f)+(u(b,_+1)*(1-v)+u(b+1,_+1)*v)*f};for(let p=0;p<a;p++)for(let g=0;g<o;g++){let x=d(g,p,16)*.35+d(g,p,4)*.35+h[p*o+g]*.3,b=(p*o+g)*4;c[b]=c[b+1]=c[b+2]=x*255,c[b+3]=255}s.putImageData(l,0,0)},!1);return r.wrapS=r.wrapT=si,r}var nm={studio:{stops:[[0,"#F8FAFE"],[.5,"#E7ECF5"],[1,"#C7D0E0"]],glow:"rgba(255,255,255,.65)",floor:"#C9D1E0"},workshop:{stops:[[0,"#F3EBE1"],[.55,"#DDCDB9"],[1,"#B49B80"]],glow:"rgba(255,248,236,.6)",floor:"#B9A184"}};function S_(i){let t=nm[i]||nm.studio;return Bs(256,512,(e,n,r)=>{let s=e.createLinearGradient(0,0,0,r);t.stops.forEach(([c,h])=>s.addColorStop(c,h)),e.fillStyle=s,e.fillRect(0,0,n,r);let o=e.createRadialGradient(n*.5,r*.36,0,n*.5,r*.36,r*.55);o.addColorStop(0,t.glow),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,n,r);let a=e.getImageData(0,0,n,r),l=a.data;for(let c=0;c<l.length;c+=4){let h=(Math.random()-.5)*3;l[c]+=h,l[c+1]+=h,l[c+2]+=h}e.putImageData(a,0,0)})}var h_={studio:["#F4F7FC","#E9EEF6","#EDF1F7","#DDE3EE"],workshop:["#F6EEE4","#E3D3C0","#BCA387","#B39A7E"]};function UE(i){let t=(h_[i]||h_.studio).map(r=>new ee(r)),e=new ze({uniforms:{uTop:{value:t[0]},uHor:{value:t[1]},uLow:{value:t[2]},uFloor:{value:t[3]},uRes:{value:new gt(1,1)}},vertexShader:"varying vec3 vD; void main(){ vD = (modelMatrix * vec4(position, 1.)).xyz - cameraPosition; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position.z = gl_Position.w * .99999; }",fragmentShader:`uniform vec3 uTop, uHor, uLow, uFloor; uniform vec2 uRes; varying vec3 vD;
      void main(){ vec3 d = normalize(vD); float e = d.z;
        vec3 c = e > 0. ? mix(uHor, uTop, pow(clamp(e, 0., 1.), .55)) : mix(uLow, uFloor, smoothstep(0., -.35, e));
        c = mix(c, uHor, (1. - smoothstep(0., .06, abs(e))) * .5);
        vec2 q = gl_FragCoord.xy / uRes - .5; c *= 1. - .1 * smoothstep(.25, .85, length(q * vec2(1.1, 1.)));
        gl_FragColor = vec4(c, 1.); }`,side:ln,depthWrite:!1,depthTest:!1,fog:!1}),n=new ae(new nl(1,48,24),e);return n.renderOrder=-10,n.frustumCulled=!1,n.userData.fx=1,n.userData.dome=1,n}var b_=()=>Bs(128,128,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.45,"rgba(0,0,0,.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),mf=["#include <common>",`#include <common>
varying vec3 vPw;`,"#include <worldpos_vertex>",`#include <worldpos_vertex>
vPw = (modelMatrix * vec4(transformed, 1.0)).xyz;`],FE=`
float pgrid(vec2 uv, float lw) {
  vec4 dd = vec4(dFdx(uv), dFdy(uv)); vec2 d = vec2(length(dd.xz), length(dd.yw));
  vec2 tw = vec2(lw), dw = clamp(tw, d, vec2(.5)), aa = d * 1.5;
  vec2 g = 1. - abs(fract(uv) * 2. - 1.);
  vec2 g2 = smoothstep(dw + aa, dw - aa, g); g2 *= clamp(tw / dw, 0., 1.); g2 = mix(g2, tw, clamp(d * 2. - 1., 0., 1.));
  return mix(g2.x, 1., g2.y);
}
float pline(float x, float w) { float d = fwidth(x); float dw = max(w, d); return smoothstep(dw * .5 + d, dw * .5 - d, abs(x)) * clamp(w / dw, 0., 1.); }`;function pm(i){i.vertexShader=i.vertexShader.replace(mf[0],mf[1]).replace(mf[2],mf[3])}var Ps={base:"#2E323B",rough:.66,line:"#E9EEF8",a1:.07,a10:.24,a50:.4,edge:"#1C1F25"};function BE(i,t,e,n){let r=i/2+t+e,s=Math.round(2*r*n);return Bs(s,s,o=>{let a=p=>(p+r)*n,l=p=>(r-p)*n,c=i/2;o.clearRect(0,0,s,s),o.lineCap="round",o.strokeStyle="rgba(233,238,248,.62)",o.fillStyle="rgba(233,238,248,.62)",o.textAlign="center",o.textBaseline="middle",o.font=`700 ${2.5*n}px Lexend, system-ui, sans-serif`;for(let p=-c;p<=c+1e-6;p+=10){let g=Math.abs(p%50)<1e-6,x=g?2.4:1.3;o.lineWidth=(g?.32:.22)*n,o.beginPath(),o.moveTo(a(p),l(-c-.6)),o.lineTo(a(p),l(-c-.6-x)),o.stroke(),o.beginPath(),o.moveTo(a(-c-.6),l(p)),o.lineTo(a(-c-.6-x),l(p)),o.stroke(),g&&Math.abs(p)<c-1&&(o.fillText(String(p),a(p),l(-c-4.9)),o.save(),o.translate(a(-c-4.9),l(p)),o.rotate(-Math.PI/2),o.fillText(String(p),0,0),o.restore())}let h=(p,g,x,b,_,y)=>{o.strokeStyle=_,o.fillStyle=_,o.lineWidth=.55*n,o.beginPath(),o.moveTo(a(p),l(g)),o.lineTo(a(x),l(b)),o.stroke();let w=Math.atan2(-(b-g),x-p),m=2.6*n;o.beginPath(),o.moveTo(a(x)+Math.cos(w)*m*.3,l(b)+Math.sin(w)*m*.3),o.lineTo(a(x)-Math.cos(w-.45)*m,l(b)-Math.sin(w-.45)*m),o.lineTo(a(x)-Math.cos(w+.45)*m,l(b)-Math.sin(w+.45)*m),o.closePath(),o.fill(),o.font=`800 ${3.4*n}px Lexend, system-ui, sans-serif`,o.fillText(y,a(x)+Math.cos(w)*4.2*n,l(b)+Math.sin(w)*4.2*n)},d=-c+7;h(d,d,d+14,d,"rgba(255,110,100,.9)","X"),h(d,d,d,d+14,"rgba(90,225,140,.9)","Y"),o.fillStyle="rgba(233,238,248,.8)",o.beginPath(),o.arc(a(d),l(d),.9*n,0,7),o.fill(),o.fillStyle="rgba(233,238,248,.5)",o.font=`800 ${3.1*n}px Lexend, system-ui, sans-serif`,o.fillText("numi \xB7 3D",a(0),l(-c-t-e*.48)),o.font=`600 ${2*n}px Lexend, system-ui, sans-serif`,o.fillStyle="rgba(233,238,248,.42)",o.fillText(`${i} \xD7 ${i} mm`,a(c-14),l(-c-4.9))})}function f_(i,t,e,n,r,s){return i.moveTo(t+s,e),i.lineTo(n-s,e),i.quadraticCurveTo(n,e,n,e+s),i.lineTo(n,r-s),i.quadraticCurveTo(n,r,n-s,r),i.lineTo(t+s,r),i.quadraticCurveTo(t,r,t,r-s),i.lineTo(t,e+s),i.quadraticCurveTo(t,e,t+s,e),i}function OE(i,t,e){let n=new Un,r=7,s=8,o=i/2+r,a=9,l=40,c=3,h=5,d=new Fr;d.moveTo(-o+a,-o),d.lineTo(-l/2-c,-o),d.quadraticCurveTo(-l/2,-o,-l/2,-o-c),d.lineTo(-l/2,-o-s+h),d.quadraticCurveTo(-l/2,-o-s,-l/2+h,-o-s),d.lineTo(l/2-h,-o-s),d.quadraticCurveTo(l/2,-o-s,l/2,-o-s+h),d.lineTo(l/2,-o-c),d.quadraticCurveTo(l/2,-o,l/2+c,-o),d.lineTo(o-a,-o),d.quadraticCurveTo(o,-o,o,-o+a),d.lineTo(o,o-a),d.quadraticCurveTo(o,o,o-a,o),d.lineTo(-o+a,o),d.quadraticCurveTo(-o,o,-o,o-a),d.lineTo(-o,-o+a),d.quadraticCurveTo(-o,-o,-o+a,-o);let p=new ps(d,{depth:.7,bevelEnabled:!0,bevelThickness:.3,bevelSize:.4,bevelSegments:3,curveSegments:14}),g=NE(256,11);g.repeat.set(1/18,1/18);let x=BE(i,r,s,t==="low"?5:8),b=new _r({color:Ps.base,roughness:Ps.rough,metalness:0,roughnessMap:g,bumpMap:g,bumpScale:.45,clearcoat:.18,clearcoatRoughness:.6,sheen:.25,sheenRoughness:.7,sheenColor:new ee("#8A93A8")}),_=i/2+r+s,y=new ee(Ps.line);b.onBeforeCompile=V=>{pm(V),Object.assign(V.uniforms,{uHalf:{value:i/2},uE:{value:_},uDecal:{value:x},uLine:{value:y},uA:{value:new D(Ps.a1,Ps.a10,Ps.a50)},uAx:{value:new ee(rn.ax[0])},uAy:{value:new ee(rn.ax[1])}}),V.fragmentShader=V.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPw; uniform float uHalf, uE; uniform sampler2D uDecal; uniform vec3 uLine, uA, uAx, uAy;${FE}`).replace("#include <map_fragment>",`#include <map_fragment>
if (vPw.z > -.05) {
  vec2 p = vPw.xy; float inP = step(abs(p.x), uHalf + .3) * step(abs(p.y), uHalf + .3);
  float g1 = pgrid(p, .07), g10 = pgrid(p / 10., .028), g50 = pgrid(p / 50., .0095);
  float a = max(max(g1 * uA.x, g10 * uA.y), g50 * uA.z) * inP;
  diffuseColor.rgb = mix(diffuseColor.rgb, uLine, a);
  float ax = pline(p.y, .5) * step(abs(p.x), uHalf), ay = pline(p.x, .5) * step(abs(p.y), uHalf);
  diffuseColor.rgb = mix(diffuseColor.rgb, uAx, ax * .55); diffuseColor.rgb = mix(diffuseColor.rgb, uAy, ay * .55);
  vec4 dc = texture2D(uDecal, p / (2. * uE) + .5); diffuseColor.rgb = mix(diffuseColor.rgb, dc.rgb, dc.a);
}`)};let w=new _r({color:Ps.edge,roughness:.45,metalness:.2,clearcoat:.3}),m=new ae(p,[b,w]);m.position.z=-1,m.receiveShadow=!0,n.add(m);let u=new Fr;f_(u,-o-6,-o-6,o+6,o+6,a+5);let v=new ps(u,{depth:3,bevelEnabled:!0,bevelThickness:.6,bevelSize:.6,bevelSegments:3,curveSegments:14}),f=new _r({color:"#A9B1BD",metalness:.8,roughness:.42}),C=new ae(v,f);C.position.z=-1-.3-4.2+.6,C.receiveShadow=!0,C.castShadow=!0,n.add(C);let M=new Ur(2.4,2.4,1.1,24);M.rotateX(Math.PI/2);let S=new _r({color:"#8A92A0",metalness:.9,roughness:.25}),E=new Mi({color:"#2A2E36",roughness:.6}),T=new Ur(1.1,1.1,.3,6);T.rotateX(Math.PI/2);for(let V of[-1,1])for(let Z of[-1,1]){let H=V*(o+2.3),tt=Z*(o+2.3),q=new ae(M,S);q.position.set(H,tt,-1.3+.2),q.castShadow=!0,n.add(q);let ut=new ae(T,E);ut.position.set(H,tt,-1.3+.8),n.add(ut)}let A=new Fr;f_(A,-o-2,-o-2,o+2,o+2,a+2);let R=new ae(new ps(A,{depth:2.2,bevelEnabled:!1,curveSegments:10}),new Mi({color:"#1E2127",roughness:.8}));R.position.z=C.position.z-.6-2.2,n.add(R);let U=R.position.z,F=U-.05;if(e==="workshop"){let V=Bs(1024,1024,(H,tt,q)=>{let ut=3,dt=()=>(ut=ut*1664525+1013904223>>>0)/4294967296,Et=tt/5;for(let St=0;St<5;St++){let Vt=[[199,150,98],[186,136,86],[206,160,108],[192,143,92],[180,130,82]][St];H.fillStyle=`rgb(${Vt})`,H.fillRect(St*Et,0,Et,q);for(let J=0;J<70;J++){let N=St*Et+dt()*Et,lt=.05+dt()*.12;H.strokeStyle=`rgba(${90+dt()*40},${55+dt()*25},25,${lt})`,H.lineWidth=.6+dt()*2.2,H.beginPath(),H.moveTo(N,0);for(let Mt=0;Mt<=q;Mt+=64)H.lineTo(N+Math.sin(Mt*.01+J)*3+(dt()-.5)*2,Mt);H.stroke()}H.fillStyle="rgba(60,35,15,.35)",H.fillRect(St*Et,0,2,q)}});V.wrapS=V.wrapT=si,V.repeat.set(3,3);let Z=new ae(new yi(1500,1500),new Mi({map:V,roughness:.62,roughnessMap:g,metalness:0}));Z.position.z=F,Z.receiveShadow=!0,n.add(Z)}else{let V=new ae(new yi(i*4,i*4),new Eo({color:"#1B2440",opacity:.16,transparent:!0,depthWrite:!1}));V.position.z=F,V.receiveShadow=!0,V.userData.fx=1,n.add(V)}let z=new ae(new yi(2*o*1.32,2*o*1.32),new vi({map:b_(),color:"#0E1630",transparent:!0,opacity:e==="workshop"?.5:.32,depthWrite:!1}));return z.position.z=F+.02,z.userData.fx=1,z.renderOrder=-1,n.add(z),n.userData={S:o,bottom:U,floorZ:F,dispose(){n.traverse(V=>{V.geometry&&V.geometry.dispose(),[].concat(V.material||[]).forEach(Z=>{for(let H in Z)Z[H]&&Z[H].isTexture&&Z[H].dispose();Z.dispose()})}),x.dispose(),g.dispose()}},n}function w_(i,t){let e=new _r({color:dm(i),roughness:.36,metalness:0,clearcoat:.5,clearcoatRoughness:.2,specularIntensity:.6,ior:1.45});return e.onBeforeCompile=n=>{pm(n),n.uniforms.uLayers=t.layers,n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPw; uniform float uLayers;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
if (uLayers > 0.) { float zl = vPw.z / .2; float fw = fwidth(zl); float k = uLayers * clamp(1. - fw * 1.6, 0., 1.);
  if (k > 0.) { float s = sin(zl * 6.2831853); vec3 upV = normalize((viewMatrix * vec4(0., 0., 1., 0.)).xyz); float side = 1. - abs(dot(normal, upV));
    normal = normalize(normal + upV * s * .22 * k * side); } }`)},e.customProgramCacheKey=()=>"pla",e}function zE(){let i=t=>{let e=new Mi({color:t?"#8C96A8":"#6E7789",roughness:.55,metalness:0,transparent:!0,opacity:t?.58:.3,depthWrite:!1,side:t?ci:ln});return e.onBeforeCompile=n=>{pm(n),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPw;`).replace("#include <map_fragment>",`#include <map_fragment>
{ float s = (vPw.x + vPw.y + vPw.z) / 3.2; float f = abs(fract(s) - .5) * 2.; float w = fwidth(s) * 2.;
  float st = smoothstep(.5 - w, .5 + w, f); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.96, .97, 1.), st * ${t?".7":".35"}); diffuseColor.a *= mix(1., 1.3, st); }`)},e.customProgramCacheKey=()=>"hole"+t,e};return{front:i(!0),back:i(!1)}}function VE(){return new ze({uniforms:{uC:{value:new ee(rn.ghost)},uA:{value:1}},transparent:!0,depthWrite:!1,side:Tn,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.); vV = -mv.xyz; vN = normalMatrix * normal; gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform vec3 uC; uniform float uA; varying vec3 vN; varying vec3 vV;
      void main(){ vec3 n = normalize(vN), v = normalize(vV); float f = 1. - abs(dot(n, v)); float a = (gl_FrontFacing ? .1 + .5 * pow(f, 2.4) : .05) * uA;
        gl_FragColor = vec4(uC * (gl_FrontFacing ? 1.05 + .4 * f : .8), a); }`})}function is(i,t,e={}){return new ca({color:new ee(i).getHex(),linewidth:t,transparent:!0,opacity:e.opacity??1,depthTest:e.depthTest??!0,depthWrite:!1,dashed:!!e.dashed,dashSize:e.dash||2,gapSize:e.gap||1.6,worldUnits:!1})}function rs(i,t){let e=new la;e.setPositions(i);let n=new df(e,t);return t.dashed&&n.computeLineDistances(),n.userData.fx=1,n}var ac=new Map;function kE(i,t,e=24){let n=ac.get(t+"/"+e);if(!n){let r=new So(i,e);n=Array.from(r.attributes.position.array),r.dispose(),ac.set(t+"/"+e,n),ac.size>300&&ac.delete(ac.keys().next().value)}return n}var HE=i=>i.userData.fx||i.isLine2||i.isLineSegments2||i.isSprite||i.isLine||i.isPoints||i.material&&!Array.isArray(i.material)&&i.material.transparent&&i.material.depthWrite===!1,vf=class extends ic{setSize(t,e){let n=this.aoScale||1;super.setSize(Math.max(1,Math.round(t*n)),Math.max(1,Math.round(e*n)))}_overrideVisibility(){let t=this._visibilityCache;this.scene.traverse(e=>{e.visible&&(HE(e)||e.userData.noAO)&&(e.visible=!1,t.push(e))})}},E_=2,im=class extends Yn{constructor(t,e,n){super(),this.scene=t,this.camera=e,this.needsSwap=!1,this.active=!1;let r={type:gn};this.mask=new nn(4,4,r),this.b1=new nn(2,2,r),this.b2=this.b1.clone(),this.maskMat=new vi({color:"#ffffff",side:Tn}),this.blur=new ze({uniforms:{tMap:{value:null},uDir:{value:new gt}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:`uniform sampler2D tMap; uniform vec2 uDir; varying vec2 vUv;
        void main(){ float w0 = .2270, w1 = .1946, w2 = .1216, w3 = .0541, w4 = .0162;
          float s = texture2D(tMap, vUv).r * w0 + (texture2D(tMap, vUv + uDir).r + texture2D(tMap, vUv - uDir).r) * w1 + (texture2D(tMap, vUv + 2. * uDir).r + texture2D(tMap, vUv - 2. * uDir).r) * w2
            + (texture2D(tMap, vUv + 3. * uDir).r + texture2D(tMap, vUv - 3. * uDir).r) * w3 + (texture2D(tMap, vUv + 4. * uDir).r + texture2D(tMap, vUv - 4. * uDir).r) * w4;
          gl_FragColor = vec4(s, s, s, 1.); }`}),this.comp=new ze({uniforms:{tMask:{value:this.mask.texture},tBlur:{value:this.b2.texture},uC:{value:new ee(n)},uK:{value:new ee("#2A1A00")}},transparent:!0,depthTest:!1,depthWrite:!1,blending:Wr,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:`uniform sampler2D tMask, tBlur; uniform vec3 uC, uK; varying vec2 vUv;
        void main(){ float m = texture2D(tMask, vUv).r, b = texture2D(tBlur, vUv).r; float o = (1. - m);
          float ring = clamp(b * 3.2, 0., 1.) * o, glow = clamp(b * 1.4, 0., 1.) * o;
          vec3 c = mix(uK, uC, smoothstep(.0, .55, b)); gl_FragColor = vec4(mix(uC, c, .25), max(ring * .95, glow * .5)); }`}),this.q=new er(null)}setSize(t,e){this.mask.setSize(t,e);let n=Math.max(1,t>>1),r=Math.max(1,e>>1);this.b1.setSize(n,r),this.b2.setSize(n,r),this.px=[1/n,1/r]}render(t,e,n){if(!this.active)return;let r=this.camera,s=r.layers.mask,o=this.scene.background,a=this.scene.overrideMaterial,l=t.autoClear,c=t.getClearColor(new ee),h=t.getClearAlpha();r.layers.set(E_),this.scene.background=null,this.scene.overrideMaterial=this.maskMat,t.autoClear=!1,t.setRenderTarget(this.mask),t.setClearColor(0,1),t.clear(),t.render(this.scene,r),r.layers.mask=s,this.scene.background=o,this.scene.overrideMaterial=a;let d=1.35*(window.devicePixelRatio>1.4?1.4:1);this.blur.uniforms.tMap.value=this.mask.texture,this.blur.uniforms.uDir.value.set(this.px[0]*d,0),this.q.material=this.blur,t.setRenderTarget(this.b1),t.clear(),this.q.render(t),this.blur.uniforms.tMap.value=this.b1.texture,this.blur.uniforms.uDir.value.set(0,this.px[1]*d),t.setRenderTarget(this.b2),t.clear(),this.q.render(t),this.q.material=this.comp,t.setRenderTarget(this.renderToScreen?null:n),this.q.render(t),t.autoClear=l,t.setClearColor(c,h)}dispose(){this.mask.dispose(),this.b1.dispose(),this.b2.dispose(),this.blur.dispose(),this.comp.dispose(),this.maskMat.dispose(),this.q.dispose()}};function T_(i,t,e,n,r,s){let o=Math.cos(e),a=[o*Math.cos(t),o*Math.sin(t),Math.sin(e)],l=[-Math.sin(t),Math.cos(t),0],c=[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]],h=Math.tan(n*je/2),d=i.length/3;if(!d)return null;let p=1/0,g=-1/0,x=1/0,b=-1/0,_=1/0,y=-1/0,w=new Float32Array(d),m=new Float32Array(d),u=new Float32Array(d);for(let S=0;S<d;S++){let E=i[S*3],T=i[S*3+1],A=i[S*3+2];w[S]=E*l[0]+T*l[1]+A*l[2],m[S]=E*c[0]+T*c[1]+A*c[2],u[S]=E*a[0]+T*a[1]+A*a[2],p=Math.min(p,w[S]),g=Math.max(g,w[S]),x=Math.min(x,m[S]),b=Math.max(b,m[S]),_=Math.min(_,u[S]),y=Math.max(y,u[S])}let v=(p+g)/2,f=(x+b)/2,C=(_+y)/2,M=0;for(let S=0;S<3;S++){M=0;for(let F=0;F<d;F++){let z=(u[F]-C)*h;M=Math.max(M,Math.abs(m[F]-f)/s+z,Math.abs(w[F]-v)/(s*r)+z)}let E=M/h,T=1/0,A=-1/0,R=1/0,U=-1/0;for(let F=0;F<d;F++){let z=(E-(u[F]-C))*h,V=(w[F]-v)/(z*r),Z=(m[F]-f)/z;T=Math.min(T,V),A=Math.max(A,V),R=Math.min(R,Z),U=Math.max(U,Z)}v+=(T+A)/2*M*r*.9,f+=(R+U)/2*M*.9}return{c:new D(l[0]*v+c[0]*f+a[0]*C,l[1]*v+c[1]*f+a[1]*C,l[2]*v+c[2]*f+a[2]*C),F:M}}function A_(i,t=6e4){let e=0;for(let{g:o}of i)e+=o.attributes.position.count;let n=Math.max(1,Math.ceil(e/t)),r=[],s=new D;for(let{g:o,M:a}of i){let l=o.attributes.position;for(let c=0;c<l.count;c+=n)s.fromBufferAttribute(l,c),a&&s.applyMatrix4(a),r.push(s.x,s.y,s.z)}return r}function GE(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}var rm=i=>i?JSON.parse(JSON.stringify(i)):null,Wi=i=>String(Math.round(i*10)/10).replace(".",",").replace("-","\u2212"),WE=i=>(i=((i+180)%360+360)%360-180,Math.abs(i)<1e-9?0:i===-180?180:i),Ns={iso:[-52,28],front:[-90,0],back:[90,0],right:[0,0],left:[180,0],top:[-90,90],bottom:[-90,-90]},Us=30,R_=16;function XE(i,t){if(t==="high"||t==="low"||t==="mid")return t;let e="";try{let o=i.getContext(),a=o.getExtension("WEBGL_debug_renderer_info");e=a?String(o.getParameter(a.UNMASKED_RENDERER_WEBGL)):""}catch{}let n=navigator.userAgent||"",r=/Android|iPhone|iPad|iPod|Mobile/i.test(n)||navigator.maxTouchPoints>1&&/Macintosh/.test(n);return/SwiftShader|llvmpipe|softpipe|Mali-[4T]|Adreno \(TM\) [2-5]\d\d|PowerVR|Intel.*HD Graphics [2-5]\d{2,3}\b/i.test(e)||navigator.deviceMemory&&navigator.deviceMemory<=2||r&&navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4?"low":r?"mid":"high"}var qE={high:{dpr:2,ao:!0,sh:2048,seg:64},mid:{dpr:1.6,ao:!0,sh:2048,seg:56},low:{dpr:1.25,ao:!1,sh:1024,seg:40}};function oD(i,t={}){try{return ZE(i,t)}catch(e){return typeof console<"u"&&console.warn("m3 view",e),YE(t)}}function YE(){let i=null,t=()=>{};return{ok:!1,set(e){i=rm(e)},mode:t,select:t,target:t,view:t,fit:t,measure:t,snapshot:()=>"",resize:t,dispose:t,stl(){let e=new da,n=e.solid(i);return e.dispose(),y_(n.attributes.position?n:new De().setAttribute("position",new Re([],3)))}}}function ZE(i,t){let e=Object.assign({plate:200,snap:1,snapRot:15,quality:"auto",mode:"edit",editable:!0,bg:"studio",intro:!0,view:"iso",spin:!1,dims:!1,inset:null},t),n=()=>{let I=typeof e.inset=="function"?e.inset():e.inset;return{top:Math.max(0,He(I&&I.top,0)),bottom:Math.max(0,He(I&&I.bottom,0))}},r=Math.max(60,He(e.plate,200)),s=new Dl({antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),o=XE(s,e.quality),a=qE[o];s.outputColorSpace=Rn,s.toneMapping=Xr,s.toneMappingExposure=1,s.shadowMap.enabled=!0,s.shadowMap.type=Gr,s.shadowMap.autoUpdate=!1;let l=s.domElement;l.className="m3c",Object.assign(l.style,{display:"block",width:"100%",height:"100%",touchAction:"none",outline:"none",cursor:"default"}),getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(l);let c=document.createElement("div");c.className="m3hud",Object.assign(c.style,{position:"absolute",left:"0",top:"0",right:"0",bottom:"0",pointerEvents:"none",overflow:"hidden",fontFamily:"Lexend, system-ui, sans-serif"}),i.appendChild(c);let h=new gr,d=new En(Us,1,1,6e3);d.up.set(0,0,1);let p=S_(e.bg),g=UE(e.bg);h.add(g),g.onBeforeRender=(I,G,W)=>{g.position.copy(W.position),g.scale.setScalar(W.far*.9),g.updateMatrixWorld(),I.getDrawingBufferSize(g.material.uniforms.uRes.value)};let x=new vs(s),b=new Kl,_=x.fromScene(b,.035);b.dispose(),x.dispose(),h.environment=_.texture,h.environmentIntensity=e.bg==="workshop"?.55:.6,h.environmentRotation.set(Math.PI/2,0,0),e.bg==="workshop"&&(h.fog=new Ba(nm.workshop.floor,r*3.2,r*8));let y=new kr(e.bg==="workshop"?"#FFE9CC":"#FFF5E8",3.1);y.position.set(-r*.55,-r*1.15,r*2.1),y.castShadow=!0,y.shadow.mapSize.set(a.sh,a.sh);let w=r/2+40;Object.assign(y.shadow.camera,{left:-w,right:w,top:w,bottom:-w,near:r*.5,far:r*5}),y.shadow.camera.updateProjectionMatrix(),y.shadow.bias=-2e-4,y.shadow.normalBias=.35,y.shadow.radius=3,y.shadow.intensity=.85;let m=new kr("#DCE8FF",.75);m.position.set(r*.9,r*1.3,r*.9);let u=new Ro("#F4F8FF","#9A8E80",.3);u.position.set(0,0,1),h.add(y,m,u);let v=OE(r,o,e.bg);h.add(v);let f=new Un,C=new Un,M=new Un,S=new Un,E=new Un,T=new Un;h.add(f,C,M,T);let A=new gr;A.add(S,E);let R=s.extensions.has("EXT_color_buffer_float")||s.extensions.has("EXT_color_buffer_half_float"),U=new nn(4,4,{type:R?Mn:gn,samples:s.capabilities.maxSamples>=4?4:0});R||(a=Object.assign({},a,{ao:!1}));let F=new Ql(s,U);F.addPass(new aa(h,d));let z=new vf(h,d,4,4);z.updateGtaoMaterial({radius:15,distanceExponent:1.1,thickness:10,distanceFallOff:1,scale:1.7,samples:o==="high"?16:10,screenSpaceRadius:!1}),z.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:7,rings:2,samples:o==="high"?16:8}),z.blendIntensity=1,z.enabled=a.ao,F.addPass(z);let V=new im(h,d,rn.sel);F.addPass(V);let Z=new aa(A,d);Z.clear=!1,Z.clearDepth=!0,F.addPass(Z),F.addPass(new sc);let H={layers:{value:0}},tt=new Map,q=I=>{let G=dm(I).getHexString(),W=tt.get(G);return W||(W=w_("#"+G,H),tt.set(G,W)),W},ut=zE(),dt=VE(),Et=is("#4A5468",1.3,{opacity:.7}),St=is("#4A5468",1,{opacity:.22,depthTest:!1}),Vt=is(rn.ghost,1.6,{opacity:.7}),J=new ze({uniforms:{uC:{value:new ee(rn.sel)}},transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.); vV = -mv.xyz; vN = normalMatrix * normal; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 uC; varying vec3 vN; varying vec3 vV; void main(){ float f = 1. - abs(dot(normalize(vN), normalize(vV))); gl_FragColor = vec4(uC, .05 + .4 * pow(f, 2.5)); }"}),N={cv:1,cvSh:0,resIntro:!0,model:null,map:new Map,order:[],sel:[],mode:e.mode==="result"?"result":"edit",measure:!1,first:!0,resDirty:!0,lastRes:0,ghost:null,drag:null,hover:null,W:1,H:1,alive:!0,dirty:!0,lost:!1,userCam:!1},lt=new da({seg:a.seg,matFor:(I,G,W)=>q(G&&W&&W.c||I.c)}),Mt=new da({seg:a.seg,matFor:()=>dt}),xt=new ae(new De,[]);xt.castShadow=xt.receiveShadow=!0,C.add(xt);let bt={az:Ns.iso[0]*je,el:Ns.iso[1]*je,F:70,fov:Us,t:new D(0,0,10)},pt={az:bt.az,el:bt.el,F:bt.F,fov:bt.fov,t:bt.t.clone()},Q={elMin:-12*je,elMax:90*je,Fmin:6,Fmax:r*1.05},nt={az:0,el:0},ft=0,ct=(I,G)=>{let W=Math.cos(G),O=new D(W*Math.cos(I),W*Math.sin(I),Math.sin(G)),ot=new D(-Math.sin(I),Math.cos(I),0),_t=new D().crossVectors(O,ot);return{o:O,r:ot,u:_t}},Tt=new Wt;function Ct(){let{o:I,r:G,u:W}=ct(bt.az,bt.el),O=Math.tan(bt.fov*je/2),ot=bt.F/O;d.position.copy(bt.t).addScaledVector(I,ot),Tt.makeBasis(G,W,I),d.quaternion.setFromRotationMatrix(Tt),d.fov=bt.fov,d.aspect=N.W/N.H,d.near=Math.max(.5,ot*.03),d.far=ot+r*6,d.updateProjectionMatrix(),d.updateMatrixWorld(!0)}function Rt(I){if(nt.az||nt.el){pt.az+=nt.az*I,pt.el=Le(pt.el+nt.el*I,Q.elMin,Q.elMax);let O=Math.exp(-I*4.2);nt.az*=O,nt.el*=O,Math.abs(nt.az)+Math.abs(nt.el)<.02&&(nt.az=nt.el=0)}let G=1-Math.exp(-I*(ft?6:18)),W=!!(nt.az||nt.el);for(let O of["az","el","F","fov"]){let ot=pt[O]-bt[O];Math.abs(ot)>(O==="F"?.001:1e-4)?(bt[O]+=ot*G,W=!0):bt[O]=pt[O]}return bt.t.distanceToSquared(pt.t)>1e-6?(bt.t.lerp(pt.t,G),W=!0):bt.t.copy(pt.t),W||(ft=0),Ct(),W}function Ut(I,G,W,O,ot=.8){let{o:_t,r:Ht,u:vt}=ct(G,W),$t=Math.tan(O*je/2),Jt=I.getCenter(new D),Gt=N.W/N.H,ue=0;for(let _e of[I.min.x,I.max.x])for(let Me of[I.min.y,I.max.y])for(let ye of[I.min.z,I.max.z]){let Ke=new D(_e-Jt.x,Me-Jt.y,ye-Jt.z);ue=Math.max(ue,Math.max(Math.abs(Ke.dot(vt)),Math.abs(Ke.dot(Ht))/Gt)/ot+Ke.dot(_t)*$t)}return Le(ue,Q.Fmin,Q.Fmax)}function zt(){let I=new Te;for(let ot of N.map.values())I.union(or(ot));N.ghost&&I.union(N.ghost.box),I.isEmpty()&&I.set(new D(-45,-45,0),new D(45,45,20));let G=I.getCenter(new D),W=I.getSize(new D),O=46;return I.expandByVector(new D(Math.max(0,O-W.x)/2,Math.max(0,O-W.y)/2,Math.max(0,12-W.z)/2)),I.min.z<0&&G.z>0&&(I.min.z=Math.min(I.min.z,0)),I}function k(I){let G=[];for(let vt of N.map.values())G.push({g:vt.mesh.geometry,M:vt.M});N.ghost&&G.push({g:N.ghost.g});let W=n(),O=Math.max(60,N.H-W.top-W.bottom),ot=N.H/O,_t=A_(G),Ht=_t.length?T_(_t,pt.az,pt.el,pt.fov,N.W/O,.82):null;if(Ht)pt.t.copy(Ht.c),pt.F=Le(Math.max(Ht.F,26)*ot,Q.Fmin,Q.Fmax);else{let vt=zt();pt.t.copy(vt.getCenter(new D)),pt.F=Le(Ut(vt,pt.az,pt.el,pt.fov)*ot,Q.Fmin,Q.Fmax)}(W.top||W.bottom)&&pt.t.addScaledVector(ct(pt.az,pt.el).u,(W.top-W.bottom)*pt.F/N.H),I?(Object.assign(bt,{az:pt.az,el:pt.el,F:pt.F,fov:pt.fov}),bt.t.copy(pt.t)):ft=1,Be()}function fe(I,G){let W=Ns[I]||Ns.iso;N.viewName=Ns[I]?I:"iso";let O=W[0]*je;for(;O-bt.az>Math.PI;)O-=2*Math.PI;for(;O-bt.az<-Math.PI;)O+=2*Math.PI;pt.az=O,pt.el=Le(W[1]*je,Q.elMin,Q.elMax),pt.fov=N.viewName==="iso"?Us:R_,nt.az=nt.el=0,k(G)}let Yt=new Wt,B=new Wt;function P(I){let G=new ae(void 0,q(M_));G.matrixAutoUpdate=!1,G.castShadow=G.receiveShadow=!0;let W={id:I,mesh:G,M:new Wt,key:"",back:null,edges:null,anim:null,proxy:null};return G.userData.e=W,f.add(G),W}function X(I){N.cv++;let G=I.M;if(I.anim&&I.anim.t<1){let O=Math.max(0,I.anim.t),ot=K(O)*I.anim.h;B.makeTranslation(0,0,ot),G=Yt.multiplyMatrices(B,I.M)}let W=!(I.anim&&I.anim.t<0);for(let O of[I.mesh,I.back,I.edges])O&&(O.visible=W);for(let O of[I.mesh,I.back,I.edges,I.proxy])O&&(O.matrix.copy(G),O.matrixWorld.copy(G))}let K=I=>I<.62?1-(I/.62)**2:(()=>{let G=(I-.62)/.38;return .09*4*G*(1-G)})();function st(I,G,W){I.q=G,I.hole=W,I.fixed=Array.isArray(G.m)&&G.m.length===16;let O=lm(G,a.seg)+(W?"|H":"|S");if(O!==I.key&&(I.key=O,I.mesh.geometry=W?__(G,a.seg):AE(G,a.seg),I.edges&&(I.edges.removeFromParent(),I.edges.geometry.dispose(),I.edges=null),I.back&&(I.back.geometry=I.mesh.geometry),I.proxy&&(I.proxy.geometry=I.mesh.geometry)),x_(G,I.M),W){if(I.mesh.material=ut.front,I.mesh.castShadow=!1,I.mesh.renderOrder=4,I.back||(I.back=new ae(I.mesh.geometry,ut.back),I.back.matrixAutoUpdate=!1,I.back.renderOrder=3,f.add(I.back)),!I.edges){let ot=kE(I.mesh.geometry,O);I.edges=rs(ot,Et),I.edges.matrixAutoUpdate=!1,I.edges.renderOrder=5,f.add(I.edges);let _t=rs(ot,St);_t.matrixAutoUpdate=!1,_t.renderOrder=5,I.edges.add(_t)}}else I.mesh.material=q(G.c),I.mesh.castShadow=!0,I.mesh.renderOrder=0,I.back&&(I.back.removeFromParent(),I.back=null),I.edges&&(I.edges.removeFromParent(),I.edges.geometry.dispose(),I.edges=null);X(I)}function wt(I){for(let G of[I.mesh,I.back,I.edges,I.proxy])G&&G.removeFromParent();I.edges&&I.edges.geometry.dispose()}function At(I,G){N.model=rm(I)||{parts:[]};let W=wE(N.model),O=new Set,ot=!oc&&e.intro!==!1,_t=0;for(let{q:Ht,id:vt,hole:$t}of W){if(O.has(vt))continue;O.add(vt);let Jt=N.map.get(vt);Jt||(Jt=P(vt),N.map.set(vt,Jt),ot&&!(G&&G.still)&&!(N.drag&&N.drag.id===vt)&&(Jt.anim={t:-(N.first?Math.min(_t*.07,.9):0),h:N.first?34:46})),st(Jt,Ht,$t),_t++}for(let[Ht,vt]of N.map)O.has(Ht)||(wt(vt),N.map.delete(Ht));N.order=W.map(Ht=>Ht.id),N.sel.some(Ht=>!N.map.has(Ht))&&Pt(N.sel.filter(Ht=>N.map.has(Ht)),!1),N.first&&(N.first=!1,N.userCam||fe(N.viewName||e.view||"iso",!0)),N.resDirty=!0,It(),Be()}function ht(I){N.cv++,N.mode=I==="result"?"result":"edit",H.layers.value=N.mode==="result"?1:0,N.resDirty=!0,mt(),Be()}function mt(){f.visible=N.mode==="edit",C.visible=N.mode==="result"}function Dt(){let I=lt.run(N.model);xt.geometry.dispose(),xt.geometry=I.g,xt.material=I.mat,N.cv++,N.resDirty=!1,N.lastRes=performance.now(),N.resMs=I.ms,N.resIntro&&I.g.attributes.position&&I.g.attributes.position.count&&(N.resIntro=!1,!oc&&e.intro!==!1&&N.mode==="result"&&(N.resAnim={t:0}))}function te(I){if(M.children.slice().forEach(G=>{G.removeFromParent(),G.geometry&&G.geometry.dispose()}),N.ghost=null,I&&xf(I)){let G=Mt.run(I);if(G.g.attributes.position){let W=new ae(G.g,dt);W.renderOrder=2,W.userData.fx=1,M.add(W);let O=fm(G.g),ot=new So(O,22),_t=rs(Array.from(ot.attributes.position.array),Vt);O.dispose(),ot.dispose(),_t.renderOrder=2,M.add(_t),N.ghost={box:G.g.boundingBox.clone(),g:G.g}}}!N.userCam&&!N.first&&k(),Be()}function Pt(I,G){I=[].concat(I??[]).map(String).filter(O=>N.map.has(O));let W=I.length===N.sel.length&&I.every((O,ot)=>O===N.sel[ot]);N.sel=I,It(),G&&!W&&e.onPick&&e.onPick(I.length?I[0]:null),Be()}function It(){for(let I of N.map.values()){let G=N.sel.includes(I.id);G&&!I.proxy?(I.proxy=new ae(I.mesh.geometry,J),I.proxy.matrixAutoUpdate=!1,I.proxy.userData.noAO=1,I.proxy.userData.fx=1,I.proxy.castShadow=!1,I.proxy.renderOrder=6,I.proxy.layers.enable(E_),T.add(I.proxy),X(I)):!G&&I.proxy&&(I.proxy.removeFromParent(),I.proxy=null)}V.active=N.sel.length>0}let Zt=()=>N.sel.length===1?N.map.get(N.sel[0]):null,ne=Bs(64,64,(I,G)=>{I.shadowColor="rgba(10,20,50,.45)",I.shadowBlur=6,I.shadowOffsetY=2,I.fillStyle="#FFFFFF",I.strokeStyle=rn.ink,I.lineWidth=6;let W=10,O=12,ot=10,_t=40;I.beginPath(),I.moveTo(O+W,ot),I.arcTo(O+_t,ot,O+_t,ot+_t,W),I.arcTo(O+_t,ot+_t,O,ot+_t,W),I.arcTo(O,ot+_t,O,ot,W),I.arcTo(O,ot,O+_t,ot,W),I.closePath(),I.fill(),I.shadowColor="transparent",I.stroke()}),re=Bs(64,64,(I,G)=>{I.shadowColor="rgba(10,20,50,.45)",I.shadowBlur=6,I.shadowOffsetY=2,I.fillStyle=rn.sel,I.strokeStyle=rn.ink,I.lineWidth=6;let W=10,O=12,ot=10,_t=40;I.beginPath(),I.moveTo(O+W,ot),I.arcTo(O+_t,ot,O+_t,ot+_t,W),I.arcTo(O+_t,ot+_t,O,ot+_t,W),I.arcTo(O,ot+_t,O,ot,W),I.arcTo(O,ot,O+_t,ot,W),I.closePath(),I.fill(),I.shadowColor="transparent",I.stroke()}),$=[[1,1,-1],[-1,1,-1],[-1,-1,-1],[1,-1,-1],[1,0,-1],[-1,0,-1],[0,1,-1],[0,-1,-1],[0,0,1]],Lt=$.map((I,G)=>{let W=new ka(new yo({map:ne,depthTest:!1,depthWrite:!1,sizeAttenuation:!1,transparent:!0}));return W.renderOrder=20,W.userData={fx:1,ax:I,px:G<4||G===8?15:12},S.add(W),W}),at=new Un;{let I=new Ya(.42,.9,28);I.rotateX(Math.PI/2),I.translate(0,0,.95);let G=new Ur(.09,.09,.55,12);G.rotateX(Math.PI/2),G.translate(0,0,.25);let W=new vi({color:rn.ink,depthTest:!1,depthWrite:!1,transparent:!0});at.add(new ae(I,W),new ae(G,W)),at.children.forEach(O=>{O.renderOrder=19,O.userData.fx=1}),at.userData={mat:W},S.add(at)}let Ft=(()=>{let I=[];for(let G=0;G<96;G++){let W=G/96*Math.PI*2,O=(G+1)/96*Math.PI*2;I.push(Math.cos(W),Math.sin(W),0,Math.cos(O),Math.sin(O),0)}return I})(),Bt=rn.ax.map((I,G)=>{let W=rs(Ft,is(I,2.2,{depthTest:!1}));return W.material.transparent=!1,W.renderOrder=18,W.matrixAutoUpdate=!1,W.userData.i=G,S.add(W),W}),yt=(()=>{let I=[];for(let G=0;G<24;G++){let W=G/24*Math.PI*2,O=G%6?.94:.9;I.push(Math.cos(W)*O,Math.sin(W)*O,0,Math.cos(W),Math.sin(W),0)}return I})(),Xt=rs(yt,is(rn.ink,1.6,{depthTest:!1}));Xt.material.transparent=!1,Xt.matrixAutoUpdate=!1,Xt.renderOrder=18,Xt.visible=!1,S.add(Xt);let Qt=new De;Qt.setAttribute("position",new Oe(new Float32Array(576),3));let xe=new ae(Qt,new vi({color:rn.sel,transparent:!0,opacity:.28,depthTest:!1,depthWrite:!1,side:Tn}));xe.matrixAutoUpdate=!1,xe.renderOrder=17,xe.visible=!1,xe.userData.fx=1,S.add(xe);let be=new ae(new yi(1,1),new vi({color:rn.sel,transparent:!0,opacity:.2,depthWrite:!1}));be.userData.fx=1,be.visible=!1,be.renderOrder=1,T.add(be);let An=rs([-.5,-.5,0,.5,-.5,0,.5,-.5,0,.5,.5,0,.5,.5,0,-.5,.5,0,-.5,.5,0,-.5,-.5,0],is(rn.sel,2,{opacity:.95}));An.visible=!1,T.add(An),S.visible=!1;let le={rot:new Wt,c:new D,a:0,b:0,h:0,R:10,n:[new D,new D,new D],rq:[new Fn,new Fn,new Fn]},ss=I=>{let G=Os.copy(I).applyMatrix4(d.matrixWorldInverse).z;return Math.abs(G)*2*Math.tan(d.fov*je/2)/N.H},Os=new D,zs=new D,sr=new D,mm=new Fn,Er=new D(0,0,1);function Vs(I){let G=I.q,[W,O,ot]=wr(G);le.a=W/2,le.b=O/2,le.h=ot/2,le.rot.extractRotation(I.M),le.c.setFromMatrixPosition(I.M);let _t=(Array.isArray(G.r)?G.r:[0,0,0]).map(Ht=>He(Ht,0)*je);le.n[2].set(0,0,1),le.n[1].set(0,1,0).applyAxisAngle(Er,_t[2]),le.n[0].set(1,0,0).applyAxisAngle(new D(0,1,0),_t[1]).applyAxisAngle(Er,_t[2]);for(let Ht=0;Ht<3;Ht++)le.rq[Ht].setFromUnitVectors(Er,le.n[Ht])}let ti=(I,G)=>G.set(I[0]*le.a,I[1]*le.b,I[2]*le.h).applyMatrix4(le.rot).add(le.c);function pa(){let I=Zt(),G=!!(I&&e.editable&&!I.fixed&&!I.anim);if(S.visible=G,!G)return;Vs(I);let W=Math.tan(d.fov*je/2),O=N.drag,ot=Vn(ti($[0],Os)),_t=Vn(ti($[2],zs)),Ht=Vn(ti($[8],sr)),vt=Math.max(Math.hypot(ot[0]-_t[0],ot[1]-_t[1]),Math.hypot(ot[0]-Ht[0],ot[1]-Ht[1])),$t=vt<130,Jt=vt<(N.touch?80:56);Lt.forEach((ye,Ke)=>{ti(ye.userData.ax,ye.position);let me=ye.userData.px*2*W/N.H;ye.scale.set(me,me,1),ye.material.map=N.hover===ye||O&&O.h===ye?re:ne,ye.visible=(!O||O.h===ye)&&!Jt&&!($t&&Ke>=4&&Ke<8)});let Gt=or(I),ue=new D(le.c.x,le.c.y,Gt.max.z),_e=ss(ue);at.position.copy(ue).add(new D(0,0,24*_e)),at.scale.setScalar(26*_e),at.userData.mat.color.set(N.hover===at||O&&O.h===at?rn.sel:rn.ink),at.visible=!O||O.h===at;let Me=Math.hypot(le.a,le.b,le.h)+16*ss(le.c);le.R=Me,Bt.forEach((ye,Ke)=>{ye.matrix.compose(le.c,le.rq[Ke],new D(Me,Me,Me)),ye.matrixWorld.copy(ye.matrix);let me=N.hover===ye||O&&O.h===ye;ye.material.linewidth=me?4.2:2.2,ye.visible=!O||O.h===ye}),O&&O.k==="rot"?(Xt.visible=xe.visible=!0,Xt.matrix.compose(le.c,le.rq[O.i],new D(Me,Me,Me)),Xt.matrixWorld.copy(Xt.matrix),xe.matrix.copy(Xt.matrix),xe.matrixWorld.copy(Xt.matrix)):Xt.visible=xe.visible=!1}function or(I){let G=I.mesh.geometry;return G.boundingBox||G.computeBoundingBox(),G.boundingBox.clone().applyMatrix4(I.M)}function Vn(I){return sr.copy(I).project(d),[(sr.x+1)/2*N.W,(1-sr.y)/2*N.H,sr.z]}function ar(I,G,W){if(!S.visible)return null;let O=W?22:12,ot=null,_t=1e9,Ht=(vt,$t)=>{$t<_t&&(_t=$t,ot=vt)};for(let vt of Lt){if(!vt.visible)continue;let[$t,Jt,Gt]=Vn(vt.position);if(Gt>1)continue;let ue=Math.hypot($t-I,Jt-G)-vt.userData.px*.5;ue<O&&Ht(vt,ue)}{let vt=Vn(at.position),$t=Vn(Os.copy(at.position).add(zs.set(0,0,at.scale.z*1.4))),Jt=ma(I,G,vt,$t)-5;Jt<O&&Ht(at,Jt)}for(let vt of Bt){let $t=1e9,Jt=null;for(let Gt=0;Gt<=64;Gt++){let ue=Gt/64*Math.PI*2,_e=Vn(Os.set(Math.cos(ue),Math.sin(ue),0).applyMatrix4(vt.matrix));Jt&&($t=Math.min($t,ma(I,G,Jt,_e))),Jt=_e}$t<O*.8&&Ht(vt,$t+2)}return ar.d=_t,ot}let ma=(I,G,W,O)=>{let ot=O[0]-W[0],_t=O[1]-W[1],Ht=ot*ot+_t*_t||1,vt=Le(((I-W[0])*ot+(G-W[1])*_t)/Ht,0,1);return Math.hypot(W[0]+ot*vt-I,W[1]+_t*vt-G)},Tr=new fl,ga=new gt;function ks(I,G){return ga.set(I/N.W*2-1,-(G/N.H)*2+1),Tr.setFromCamera(ga,d),Tr.ray}function lr(I,G,W,O){let ot=ks(I,G),_t=ot.direction.dot(W);if(Math.abs(_t)<1e-6)return null;let Ht=zs.copy(O).sub(ot.origin).dot(W)/_t;return Ht>0?ot.origin.clone().addScaledVector(ot.direction,Ht):null}function xa(I,G,W){ks(I,G);let O=[];for(let Ht of N.order){let vt=N.map.get(Ht);vt&&(W==null||String(W)!==Ht)&&O.push(vt.mesh)}let ot=Tr.intersectObjects(O,!1),_t=N.mode==="result"&&ot.find(Ht=>!Ht.object.userData.e.hole)||ot[0];return _t?{e:_t.object.userData.e,point:_t.point,n:_t.face?_t.face.normal.clone().transformDirection(_t.object.matrixWorld):null}:null}function Sf(I,G,W){if(N.W<4)return null;let O=r*.75,ot=xa(I,G,W);if(ot&&!ot.e.hole&&ot.n&&ot.n.z>.55)return{p:[Le(ot.point.x,-O,O),Le(ot.point.y,-O,O)],z:Math.max(0,ot.point.z),on:ot.e.id};let _t=lr(I,G,Er,new D(0,0,0));return _t?{p:[Le(_t.x,-O,O),Le(_t.y,-O,O)],z:0,on:null}:null}let os=I=>{let G=He(e.snap,1);return G>0?Math.round(I/G)*G:I},Ai=I=>Math.round(I*1e3)/1e3;function L(I,G,W,O,ot,_t){let Ht=G.q,vt={k:I,id:G.id,e:G,h:ot,x0:W,y0:O,p0:(Ht.p||[0,0,0]).map(Gt=>He(Gt,0)),s0:wr(Ht).slice(),r0:(Ht.r||[0,0,0]).map(Gt=>He(Gt,0)),last:""};Vs(G),vt.rot=le.rot.clone(),vt.rotT=le.rot.clone().transpose(),vt.c=le.c.clone();let $t=d.getWorldDirection(new D),Jt=new D($t.x,$t.y,0);if(I==="move")vt.vert=Math.abs($t.z)<.26,vt.n=vt.vert?Jt.normalize():Er.clone(),vt.pp=_t.clone(),vt.hit0=lr(W,O,vt.n,vt.pp)||_t.clone(),vt.vert&&(vt.r=ct(bt.az,bt.el).r);else if(I==="lift")vt.top=Jt.lengthSq()<1e-4,vt.n=vt.top?null:Jt.normalize(),vt.pp=vt.c.clone(),vt.hit0=vt.top?null:lr(W,O,vt.n,vt.pp),vt.pw=ss(vt.c);else if(I==="rot")vt.i=ot.userData.i,vt.n=le.n[vt.i].clone(),vt.u=new D(1,0,0).applyQuaternion(le.rq[vt.i]),vt.v=new D(0,1,0).applyQuaternion(le.rq[vt.i]),vt.acc=0,vt.prev=Y(vt,W,O),vt.a0=vt.prev??0;else if(I==="scale"){vt.ax=ot.userData.ax;let Gt=new D(0,0,1).applyMatrix4(vt.rot);if(vt.ax[2]===1){let ue=$t.clone().addScaledVector(Gt,-$t.dot(Gt));vt.n=ue.lengthSq()>1e-4?ue.normalize():ct(bt.az,bt.el).u,vt.pp=vt.c.clone()}else vt.n=Gt,vt.pp=ti(vt.ax,new D)}vt.last=JSON.stringify(I==="rot"?{r:vt.r0}:I==="scale"?{s:vt.s0,p:vt.p0}:{p:vt.p0}),N.drag=vt,nt.az=nt.el=0,Be()}function Y(I,G,W){let O=ks(G,W);if(Math.abs(O.direction.dot(I.n))<.14)return null;let ot=lr(G,W,I.n,I.c);return ot?(ot.sub(I.c),Math.atan2(ot.dot(I.v),ot.dot(I.u))):null}function rt(I,G,W){let O=N.drag,ot=O.e,_t=null,Ht="";if(O.k==="move"){let $t=lr(I,G,O.n,O.pp);if(!$t)return;let Jt=$t.sub(O.hit0),Gt,ue;if(O.vert){let ye=Jt.dot(O.r);Gt=O.r.x*ye,ue=O.r.y*ye,Math.abs(O.r.x)>.92&&(ue=0),Math.abs(O.r.y)>.92&&(Gt=0)}else Gt=Jt.x,ue=Jt.y;W.altKey||(Gt=os(Gt),ue=os(ue));let _e=r*.75,Me=[Ai(Le(O.p0[0]+Gt,-_e,_e)),Ai(Le(O.p0[1]+ue,-_e,_e)),O.p0[2]];_t={p:Me},Ht=`x ${Wi(Me[0])}  \xB7  y ${Wi(Me[1])}`}else if(O.k==="lift"){let $t;if(O.top)$t=-(G-O.y0)*O.pw;else{let _e=lr(I,G,O.n,O.pp);if(!_e||!O.hit0)return;$t=_e.z-O.hit0.z}W.altKey||($t=os($t));let Jt=[O.p0[0],O.p0[1],Ai(Le(O.p0[2]+$t,-r*.5,r*1.5))];_t={p:Jt};let Gt=or(ot),ue=Gt.min.z+(Jt[2]-He(ot.q.p&&ot.q.p[2],0));Ht=`\u2191 ${Wi(ue)} mm`}else if(O.k==="rot"){let $t=Y(O,I,G);if($t==null){let me=(I-(O.lx??O.x0)-(G-(O.ly??O.y0)))*.012;O.acc+=me}else if(O.prev!=null){let me=$t-O.prev;for(;me>Math.PI;)me-=2*Math.PI;for(;me<-Math.PI;)me+=2*Math.PI;O.acc+=me}O.prev=$t,O.lx=I,O.ly=G;let Jt=W.shiftKey?1:He(e.snapRot,15),Gt=Math.round(O.acc/je/Jt)*Jt,ue=O.r0.slice();ue[O.i]=WE(O.r0[O.i]+Gt),_t={r:ue},Ht=`${Gt>0?"+":Gt<0?"\u2212":""}${Math.abs(Gt)}\xB0`;let _e=xe.geometry.attributes.position.array,Me=64,ye=O.a0,Ke=O.a0+Gt*je;_e.fill(0);for(let me=0;me<Me;me++){let Ar=ye+(Ke-ye)*me/Me,Gs=ye+(Ke-ye)*(me+1)/Me;_e.set([0,0,0,Math.cos(Ar)*.88,Math.sin(Ar)*.88,0,Math.cos(Gs)*.88,Math.sin(Gs)*.88,0],me*9)}xe.geometry.attributes.position.needsUpdate=!0,xe.geometry.computeBoundingSphere(),xe.material.color.set(rn.ax[O.i])}else if(O.k==="scale"){let $t=lr(I,G,O.n,O.pp);if(!$t)return;let Jt=$t.sub(O.c).applyMatrix4(O.rotT),Gt=O.s0.slice(),ue=[0,0,0],_e=Math.max(.5,He(e.snap,1));for(let Ke=0;Ke<3;Ke++){let me=O.ax[Ke];if(!me)continue;let Ar=-me*O.s0[Ke]/2,Xi=((Ke===0?Jt.x:Ke===1?Jt.y:Jt.z)-Ar)*me;Xi=W.altKey?Xi:os(Xi),Xi=Math.max(_e,Xi),Gt[Ke]=Ai(Xi),ue[Ke]=Ar+me*Xi/2}if(W.shiftKey&&O.ax[0]&&O.ax[1]){let Ke=Math.max(Gt[0]/O.s0[0],Gt[1]/O.s0[1]);for(let me=0;me<2;me++)Gt[me]=Ai(Math.max(_e,os(O.s0[me]*Ke))),ue[me]=-O.ax[me]*O.s0[me]/2+O.ax[me]*Gt[me]/2}let Me=new D(...ue).applyMatrix4(O.rot),ye=[Ai(O.p0[0]+Me.x),Ai(O.p0[1]+Me.y),Ai(O.p0[2]+Me.z)];_t={s:Gt,p:ye},Ht=O.ax[2]?`${Wi(Gt[2])} mm`:O.ax[0]&&O.ax[1]?`${Wi(Gt[0])} \xD7 ${Wi(Gt[1])} mm`:`${Wi(O.ax[0]?Gt[0]:Gt[1])} mm`}if(!_t)return;let vt=JSON.stringify(_t);vt!==O.last&&(O.last=vt,O.moved=!0,Object.assign(ot.q,_t),st(ot,ot.q,ot.hole),It(),N.resDirty=!0,e.onMove&&e.onMove(ot.id,rm(_t))),kn(Ht,I,G),Be()}function et(){let I=N.drag;N.drag=null,kn(null),be.visible=An.visible=!1,I&&I.moved&&e.onDone&&e.onDone(I.id,I.k),N.resDirty=!0,Be()}let j=new Map,it=null,qt=0,Ot=I=>{let G=l.getBoundingClientRect();return[I.clientX-G.left,I.clientY-G.top]};function jt(I){if(N.lost)return;try{l.setPointerCapture(I.pointerId)}catch{}let[G,W]=Ot(I);if(j.set(I.pointerId,{x:G,y:W}),nt.az=nt.el=0,ft=0,N.lastUser=performance.now(),j.size===2){if(it&&it.k==="drag")return;let[Ht,vt]=[...j.values()];it={k:"pinch",d0:Math.hypot(Ht.x-vt.x,Ht.y-vt.y)||1,m0:[(Ht.x+vt.x)/2,(Ht.y+vt.y)/2],F0:pt.F,t0:pt.t.clone()};return}if(j.size>2)return;let O=I.pointerType!=="mouse";if(N.touch!==O&&(N.touch=O,Be()),I.button===2||I.button===1){it={k:"pan",x:G,y:W,lx:G,ly:W,moved:!1};return}let ot=e.editable?ar(G,W,O):null,_t=xa(G,W);if(!ot&&!_t&&(I.shiftKey||I.ctrlKey||I.metaKey)){it={k:"pan",x:G,y:W,lx:G,ly:W,moved:!1};return}if(ot&&O&&_t&&N.sel.includes(_t.e.id)&&ar.d>6&&(ot=null),ot){it={k:"giz",h:ot,x0:G,y0:W,moved:!1},N.hover=ot,Be();return}_t?it={k:"part",e:_t.e,point:_t.point,x0:G,y0:W,lx:G,ly:W,moved:!1,can:e.editable&&!_t.e.fixed&&(I.pointerType==="mouse"||N.sel.includes(_t.e.id))}:it={k:"orbit",x0:G,y0:W,lx:G,ly:W,lt:performance.now(),moved:!1}}function ie(I){let G=j.get(I.pointerId),[W,O]=Ot(I);if(!G){I.pointerType==="mouse"&&Ze(W,O);return}if(G.x=W,G.y=O,!it)return;if(it.k==="pinch"){if(j.size<2)return;let[_t,Ht]=[...j.values()],vt=Math.hypot(_t.x-Ht.x,_t.y-Ht.y)||1,$t=[(_t.x+Ht.x)/2,(_t.y+Ht.y)/2];pt.F=Le(it.F0*it.d0/vt,Q.Fmin,Q.Fmax);let{r:Jt,u:Gt}=ct(pt.az,pt.el),ue=2*pt.F/N.H;pt.t.copy(it.t0).addScaledVector(Jt,-($t[0]-it.m0[0])*ue).addScaledVector(Gt,($t[1]-it.m0[1])*ue),ge(),N.userCam=!0,Be();return}let ot=I.pointerType==="mouse"?3:7;if(it.k==="giz"){if(!it.moved&&Math.hypot(W-it.x0,O-it.y0)<ot)return;if(!it.moved){it.moved=!0;let _t=it.h===at?"lift":Bt.includes(it.h)?"rot":"scale";L(_t,Zt(),it.x0,it.y0,it.h),it.k="drag"}}if(it.k==="part"){if(Math.hypot(W-it.x0,O-it.y0)<ot)return;it.can?(N.sel.includes(it.e.id)||Pt(it.e.id,!0),L("move",it.e,it.x0,it.y0,null,it.point),it.k="drag"):it={k:"orbit",x0:it.x0,y0:it.y0,lx:it.lx,ly:it.ly,lt:performance.now(),moved:!0}}if(it.k==="drag"){N.drag&&rt(W,O,I);return}if(it.k==="orbit"){if(!it.moved&&Math.hypot(W-it.x0,O-it.y0)<ot)return;it.moved=!0,N.userCam=!0;let _t=W-it.lx,Ht=O-it.ly,vt=performance.now(),$t=Math.max(1,vt-it.lt)/1e3,Jt=(I.pointerType==="mouse"?5.2:5.4)/Math.max(320,Math.min(N.W,N.H)*1.6),Gt=-_t*Jt*1.1,ue=Ht*Jt;pt.az+=Gt,pt.el=Le(pt.el+ue,Q.elMin,Q.elMax),pt.fov!==Us&&(pt.fov=Us,N.viewName="iso"),it.vaz=(it.vaz||0)*.5+Gt/$t*.5,it.vel=(it.vel||0)*.5+ue/$t*.5,it.lx=W,it.ly=O,it.lt=vt,Be();return}if(it.k==="pan"){let _t=W-it.lx,Ht=O-it.ly;it.lx=W,it.ly=O,it.moved=it.moved||Math.hypot(W-it.x,O-it.y)>ot,pe(_t,Ht)}}function pe(I,G){let{r:W,u:O}=ct(pt.az,pt.el),ot=2*pt.F/N.H;pt.t.addScaledVector(W,-I*ot).addScaledVector(O,G*ot),ge(),N.userCam=!0,Be()}function ge(){let I=r*.6;pt.t.x=Le(pt.t.x,-I,I),pt.t.y=Le(pt.t.y,-I,I),pt.t.z=Le(pt.t.z,-20,r*.6)}function Kt(I){let G=j.has(I.pointerId);j.delete(I.pointerId);try{l.releasePointerCapture(I.pointerId)}catch{}if(!G||!it)return;if(it.k==="pinch"){if(j.size===1){let[O]=[...j.values()];it={k:"orbit",x0:O.x,y0:O.y,lx:O.x,ly:O.y,lt:performance.now(),moved:!0}}else it=null;return}if(j.size)return;let W=it;if(it=null,W.k==="drag"){et(),N.hover=null;return}if(W.k==="giz"){N.hover=null,Be();return}if(W.k==="part"&&!W.moved){Pt(W.e.id,!0);return}if(W.k==="orbit"&&W.moved){performance.now()-W.lt<60&&(nt.az=Le(W.vaz||0,-9,9),nt.el=Le(W.vel||0,-5,5));return}if((W.k==="orbit"||W.k==="pan")&&!W.moved){let O=performance.now();O-qt<320?(k(),qt=0):qt=O,Pt([],!0)}}function Pe(I){I.preventDefault();let[G,W]=Ot(I),O=I.deltaY*(I.deltaMode===1?16:I.deltaMode===2?400:1);I.ctrlKey&&(O*=2.2),on(G,W,Math.exp(Le(O,-240,240)*.0016)),N.userCam=!0,ft=0,N.lastUser=performance.now()}function on(I,G,W){let O=Le(pt.F*W,Q.Fmin,Q.Fmax),ot=1-O/pt.F,{r:_t,u:Ht}=ct(pt.az,pt.el),vt=N.W/N.H,$t=(I/N.W*2-1)*pt.F*vt,Jt=(1-G/N.H*2)*pt.F;pt.t.addScaledVector(_t,$t*ot).addScaledVector(Ht,Jt*ot),pt.F=O,ge(),Be()}function Ze(I,G){if(N.drag||it)return;let W=e.editable?ar(I,G,!1):null,O="default";if(W)O=W===at?"ns-resize":Bt.includes(W)?"grab":"nwse-resize";else{let ot=xa(I,G);ot&&(O=e.editable&&!ot.e.fixed?"move":"pointer")}N.hover!==W&&(N.hover=W,Be()),l.style.cursor=O}l.addEventListener("pointerdown",jt),l.addEventListener("pointermove",ie),l.addEventListener("pointerup",Kt),l.addEventListener("pointercancel",Kt),l.addEventListener("pointerleave",()=>{!it&&N.hover&&(N.hover=null,Be())}),l.addEventListener("wheel",Pe,{passive:!1}),l.addEventListener("contextmenu",I=>I.preventDefault()),l.addEventListener("webglcontextlost",I=>{I.preventDefault(),N.lost=!0}),l.addEventListener("webglcontextrestored",()=>{N.lost=!1,N.resDirty=!0,N.cv++,Be()});let Ge={position:"absolute",left:"0",top:"0",transform:"translate(-50%,-50%)",padding:"3px 9px",borderRadius:"999px",background:"rgba(255,255,255,.95)",color:rn.ink,font:"800 12.5px/1.25 Lexend, system-ui, sans-serif",whiteSpace:"nowrap",boxShadow:"0 2px 10px rgba(20,32,74,.2)",letterSpacing:".01em",display:"none",willChange:"transform"},_n=(I={})=>{let G=document.createElement("div");return Object.assign(G.style,Ge,I),c.appendChild(G),G},kt=[rn.ax[0],rn.ax[1],rn.ax[2],"#E07A10"].map((I,G)=>{let W=_n({border:`2px solid ${I}`});return W.className="m3dim m3dim"+"xyzl"[G],W.addEventListener("pointerdown",O=>{!W._d||!e.onDim||(O.preventDefault(),O.stopPropagation(),e.onDim({...W._d,rect:W.getBoundingClientRect()}))}),W}),hn=_n({background:rn.ink,color:"#fff",padding:"5px 11px",fontSize:"13px",transform:"translate(14px,-130%)"}),Ee=()=>{let I=i.clientHeight;return I>0&&i.getBoundingClientRect().height/I||1};function kn(I,G,W){if(!I){hn.style.display="none";return}hn.textContent=I,hn.style.display="block";let O=Ee();hn.style.left=G/O+"px",hn.style.top=W/O+"px"}let Zn=rn.ax.map(I=>{let G=rs([0,0,0,1,0,0],is(I,2.2,{depthTest:!1}));return G.material.transparent=!1,G.renderOrder=16,E.add(G),G}),cr=Zn[0],$n=rs([0,0,0,0,0,1],is("#E07A10",1.8,{opacity:.95,depthTest:!1,dashed:!0,dash:1.6,gap:1.2}));$n.renderOrder=16,E.add($n);let Ne="";function en(){let I=Zt(),G=!!(e.dims&&e.editable&&N.mode==="edit"&&I&&!I.fixed&&!(N.drag&&N.drag.k==="rot")),W=N.measure&&N.map.size>0||G;E.visible=W;let O=G&&!N.drag;if(kt.forEach(de=>{de.style.pointerEvents=O?"auto":"none",de.style.cursor=O?"pointer":"default",de.classList.toggle("ed",O),O||(de._d=null)}),!W){kt.forEach(de=>de.style.display="none");return}let ot=Zt(),_t=[],Ht=[],vt,$t,Jt,Gt,ue;if(ot&&!ot.fixed)Vs(ot),vt=le.rot.clone().setPosition(le.c),$t=le.a,Jt=le.b,Gt=le.h,ue=wr(ot.q);else{let de=new Te;for(let Ci of N.sel.length?N.sel:[...N.map.keys()]){let Pi=N.map.get(Ci);Pi&&!Pi.hole&&de.union(or(Pi))}if(de.isEmpty()){E.visible=!1,kt.forEach(Ci=>Ci.style.display="none");return}let an=de.getCenter(new D),Qe=de.getSize(new D);vt=new Wt().makeTranslation(an.x,an.y,an.z),$t=Qe.x/2,Jt=Qe.y/2,Gt=Qe.z/2,ue=[Qe.x,Qe.y,Qe.z]}let _e=(de,an,Qe)=>new D(de,an,Qe).applyMatrix4(vt),Me=5+14*ss(_e(0,0,0)),ye=2.2*ss(_e(0,0,0))*3,Ke=[[],[],[]],me=(de,an,Qe)=>Ke[de].push(an.x,an.y,an.z,Qe.x,Qe.y,Qe.z),Ar=_e(-$t,-Jt-Me,-Gt),Gs=_e($t,-Jt-Me,-Gt);me(0,Ar,Gs),me(0,_e(-$t,-Jt,-Gt),_e(-$t,-Jt-Me-ye,-Gt)),me(0,_e($t,-Jt,-Gt),_e($t,-Jt-Me-ye,-Gt));let Xi=_e($t+Me,-Jt,-Gt),ym=_e($t+Me,Jt,-Gt);me(1,Xi,ym),me(1,_e($t,-Jt,-Gt),_e($t+Me+ye,-Jt,-Gt)),me(1,_e($t,Jt,-Gt),_e($t+Me+ye,Jt,-Gt));let Mm=_e($t+Me*.7,-Jt-Me*.7,-Gt),Sm=_e($t+Me*.7,-Jt-Me*.7,Gt);me(2,Mm,Sm);for(let de of[-Gt,Gt])me(2,_e($t+Me*.7-ye*.5,-Jt-Me*.7+ye*.5,de),_e($t+Me*.7+ye*.5,-Jt-Me*.7-ye*.5,de));_t=Ke.flat(),Ht.push([Ar.clone().add(Gs).multiplyScalar(.5),`${Wi(ue[0])} mm`,{k:"s",ax:0,v:ue[0]}],[Xi.clone().add(ym).multiplyScalar(.5),`${Wi(ue[1])} mm`,{k:"s",ax:1,v:ue[1]}],[Mm.clone().add(Sm).multiplyScalar(.5),`${Wi(ue[2])} mm`,{k:"s",ax:2,v:ue[2]}]);let bm=JSON.stringify(_t.map(de=>Math.round(de*100)));bm!==Ne&&(Ne=bm,Ke.forEach((de,an)=>Zn[an].geometry.setPositions(de)));let Rr=ot?or(ot):null;if(Rr&&Rr.min.z>.05){let de=new D(Rr.min.x,Rr.min.y,0);$n.visible=!0,$n.geometry.setPositions([de.x,de.y,0,de.x,de.y,Rr.min.z]),$n.computeLineDistances(),Ht.push([new D(de.x,de.y,Rr.min.z/2),`\u2191 ${Wi(Rr.min.z)} mm`,{k:"p",ax:2,v:Math.round(Rr.min.z*1e3)/1e3}])}else $n.visible=!1;let uc=Ee(),wm=kt.map((de,an)=>{let Qe=Ht[an];if(!Qe)return null;let[Ci,Pi,Ef]=Vn(Qe[0]);if(Ef>1)return null;de.textContent=Qe[1],de.style.display="block",de._d=O&&ot&&!ot.fixed?Qe[2]:null;let as=(de.offsetWidth||64)*uc,L_=(de.offsetHeight||22)*uc;return{t:de,x:Le(Ci,as/2+4,N.W-as/2-4),y:Pi,w:as,h:L_}}),hc=wm.filter(Boolean).sort((de,an)=>de.y-an.y);for(let de=0;de<4;de++)for(let an=0;an<hc.length;an++)for(let Qe=an+1;Qe<hc.length;Qe++){let Ci=hc[an],Pi=hc[Qe],Ef=(Ci.w+Pi.w)/2+4-Math.abs(Ci.x-Pi.x),as=(Ci.h+Pi.h)/2+3-Math.abs(Ci.y-Pi.y);Ef>0&&as>0&&(Ci.y-=as/2,Pi.y+=as/2)}let Em=n();kt.forEach((de,an)=>{let Qe=wm[an];if(!Qe){de.style.display="none";return}de.style.transform=`translate(${Qe.x/uc}px,${Le(Qe.y,Em.top+14,N.H-Em.bottom-14)/uc}px) translate(-50%,-50%)`})}function ei(){let I=i.getBoundingClientRect(),G=Math.max(2,Math.round(I.width)),W=Math.max(2,Math.round(I.height));if(G===N.W&&W===N.H&&s.getPixelRatio()===We())return;N.W=G,N.H=W;let O=We();s.setPixelRatio(O),s.setSize(G,W,!1),F.setPixelRatio(O),F.setSize(G,W);for(let ot of[Et,St,Vt,...Zn.map(_t=>_t.material),$n.material,An.material,Xt.material,...Bt.map(_t=>_t.material)])ot.resolution.set(G,W);!N.userCam&&!N.drag&&!N.first&&k(!0),Ct(),Be()}let We=()=>{let I=Math.min(a.dpr,window.devicePixelRatio||1);return z.aoScale=I>1.3?1/I:1,I},ni=typeof ResizeObserver=="function"?new ResizeObserver(()=>ei()):null;ni&&ni.observe(i);function Be(){N.dirty=!0}let Hs=0,gm=performance.now(),bf=0,wf=0,xm=0;function _m(){if(!N.alive)return;if(Hs=requestAnimationFrame(_m),!i.isConnected){++xm>90&&vm();return}xm=0;let I=performance.now(),G=Math.min(.05,(I-gm)/1e3);if(gm=I,N.lost||N.W<4)return;e.spin&&!oc&&!it&&!N.drag&&I-(N.lastUser||0)>3500&&(pt.az+=G*.32);let W=Rt(G)||e.spin&&!oc;if(e.onCam){let O=bt.az/je,ot=bt.el/je;if(N.camA==null||Math.abs(O-N.camA)>.05||Math.abs(ot-N.camE)>.05){N.camA=O,N.camE=ot;try{e.onCam(O,ot)}catch{}}}for(let O of N.map.values())O.anim&&(O.anim.t+=G/.52,O.anim.t>=1&&(O.anim=null),X(O),W=!0);N.resAnim&&(N.resAnim.t+=G/.6,N.resAnim.t>=1&&(N.resAnim=null),xt.position.z=N.resAnim?K(N.resAnim.t)*36:0,W=!0,N.cv++),N.mode==="result"&&N.resDirty&&I-N.lastRes>(N.drag?45:0)&&Dt(),!(!W&&!N.dirty)&&(N.dirty=!1,P_(),W&&e.quality==="auto"&&(wf++,G>.034&&bf++,wf>=45&&(bf>30&&C_(),wf=bf=0)))}function C_(){o==="high"?(o="mid",z.enabled=!1):o==="mid"&&(o="low",z.enabled=!1,a=Object.assign({},a,{dpr:Math.min(a.dpr,1.25)}),ei())}function P_(){pa(),en();let I=N.drag;if(I&&(I.k==="move"||I.k==="lift")){let G=or(I.e),W=G.getCenter(new D),O=G.getSize(new D);for(let ot of[be,An])ot.visible=!0,ot.position.set(W.x,W.y,.08),ot.scale.set(Math.max(1,O.x),Math.max(1,O.y),1)}N.cv!==N.cvSh&&(N.cvSh=N.cv,s.shadowMap.needsUpdate=!0),F.render()}function I_(I=640,G=400,W={}){let O=N.W,ot=N.H,_t=s.getPixelRatio(),Ht=S.visible,vt=E.visible,$t=V.active,Jt=T.visible;try{W.clean!==!1&&(S.visible=!1,E.visible=!1,V.active=!1,T.visible=!1);for(let Gt of N.map.values())Gt.anim&&(Gt.anim=null,X(Gt));return N.resAnim=null,xt.position.z=0,s.setPixelRatio(1),s.setSize(I,G,!1),F.setPixelRatio(1),F.setSize(I,G),N.W=I,N.H=G,Ct(),N.mode==="result"&&N.resDirty&&Dt(),en(),W.clean!==!1&&(E.visible=!1),s.shadowMap.needsUpdate=!0,F.render(),l.toDataURL(W.type||"image/png",W.q??.92)}catch{return""}finally{S.visible=Ht,E.visible=vt,V.active=$t,T.visible=Jt,s.setPixelRatio(_t),s.setSize(O,ot,!1),F.setPixelRatio(_t),F.setSize(O,ot),N.W=O,N.H=ot,Ct(),Be()}}function D_(){let I=lt.solid(N.model),G=y_(I.attributes.position?I:new De().setAttribute("position",new Re([],3)));return I.dispose(),G}function vm(){if(!N.alive)return;N.alive=!1,cancelAnimationFrame(Hs),ni&&ni.disconnect();for(let G of N.map.values())wt(G);N.map.clear(),lt.dispose(),Mt.dispose();let I=new Set([...Ds.values(),...Ls.values()]);for(let G of[h,A])G.traverse(W=>{W.geometry&&!I.has(W.geometry)&&W.geometry.dispose(),W.material&&W.material.isSpriteMaterial&&W.material.dispose()});v.userData.dispose(),tt.forEach(G=>G.dispose()),[ut.front,ut.back,dt,Et,St,Vt,J].forEach(G=>G.dispose()),ne.dispose(),re.dispose(),p.dispose(),_.dispose(),F.dispose(),U.dispose(),z.dispose(),V.dispose(),s.dispose();try{s.forceContextLoss()}catch{}l.remove(),c.remove()}mt(),H.layers.value=N.mode==="result"?1:0,ei(),fe(e.view||"iso",!0),Hs=requestAnimationFrame(_m);let Ri={ok:!0,set(I,G){return At(I,G),Ri},dropAt(I,G,W){return Sf(I,G,W)},drop(I){let G=N.map.get(String(I));return G&&!oc&&e.intro!==!1&&(G.anim={t:0,h:9},Be()),Ri},snap(I){return e.snap=He(I,e.snap),Ri},mode(I){return I==null?N.mode:(ht(I),Ri)},select(I){return I===void 0?N.sel.length?N.sel[0]:null:(Pt(I,!1),Ri)},target(I){return te(I),Ri},view(I,G){return fe(I,G),Ri},fit(I){return k(I),Ri},measure(I){return N.measure=I===void 0?!N.measure:!!I,Be(),Ri},snapshot:I_,stl:D_,dispose:vm,resize(){return N.W=0,ei(),Ri},get quality(){return o},get csgMs(){return N.resMs},_dbg:()=>({ao:z,sel:V,composer:F,scene:h,R:s,key:y,cam:d,S:N,wake:Be,scr:I=>Vn(new D(...I)),hs:()=>Lt.map(I=>Vn(I.position)),arrow:()=>Vn(at.position),ring:(I,G)=>Vn(new D(Math.cos(G),Math.sin(G),0).applyMatrix4(Bt[I].matrix))}),get camera(){return{az:bt.az/je,el:bt.el/je,F:bt.F,fov:bt.fov,t:bt.t.toArray()}}};return e.model&&At(e.model),e.target&&te(e.target),Ri}var Qp=null,ha=new Map,d_=Promise.resolve();function $E(){let i=new Dl({antialias:!1,alpha:!0,preserveDrawingBuffer:!0});i.outputColorSpace=Rn,i.toneMapping=Xr,i.shadowMap.enabled=!0,i.shadowMap.type=Gr,i.setPixelRatio(1);let t=new gr,e=new En(Us,1,1,6e3);e.up.set(0,0,1);let n=new vs(i),r=new Kl;t.environment=n.fromScene(r,.035).texture,r.dispose(),n.dispose(),t.environmentRotation.set(Math.PI/2,0,0),t.environmentIntensity=.95;let s=new kr("#FFF5E8",2.3);s.castShadow=!0,s.shadow.mapSize.set(1024,1024),s.shadow.bias=-2e-4,s.shadow.normalBias=.3,s.shadow.radius=3,s.shadow.intensity=.8;let o=new kr("#DCE8FF",.75),a=new Ro("#F4F8FF","#9A8E80",.35);a.position.set(0,0,1),t.add(s,s.target,o,a);let l=new ae(new yi(1,1),new Eo({color:"#1B2440",opacity:.2,transparent:!0,depthWrite:!1}));l.receiveShadow=!0,t.add(l);let c=new ae(new yi(1,1),new vi({map:b_(),color:"#0E1630",transparent:!0,opacity:.22,depthWrite:!1}));t.add(c);let h=new ae(new De,[]);h.castShadow=!0,h.receiveShadow=!0,t.add(h);let d=new Map,p={layers:{value:0}},g=u=>{let v=dm(u).getHexString();return d.has(v)||d.set(v,w_("#"+v,p)),d.get(v)},x=new da({seg:64,matFor:(u,v,f)=>g(v&&f&&f.c||u.c)}),b=i.extensions.has("EXT_color_buffer_float")||i.extensions.has("EXT_color_buffer_half_float"),_=new nn(4,4,{type:b?Mn:gn,samples:i.capabilities.maxSamples>=4?4:0}),y=new Ql(i,_);y.addPass(new aa(t,e));let w=new vf(t,e,4,4);return w.enabled=b,w.updateGtaoMaterial({radius:15,distanceExponent:1.1,thickness:10,scale:1.7,samples:16}),w.updatePdMaterial({radius:7,rings:2,samples:16}),w.blendIntensity=1,y.addPass(w),y.addPass(new sc),{R:i,scene:t,cam:e,key:s,rim:o,shadow:l,blob:c,mesh:h,csg:x,comp:y,bgs:{}}}function aD(i,t=320,e=240,n={}){let r=JSON.stringify([i,t,e,n]);if(ha.has(r))return Promise.resolve(ha.get(r));let s=d_.then(()=>{if(!GE())return"";try{Qp||(Qp=$E());let o=Qp,a=o.csg.run(i);o.csg.sweep(1),o.mesh.geometry.dispose(),o.mesh.geometry=a.g,o.mesh.material=a.mat;let l=a.g.boundingBox&&!a.g.boundingBox.isEmpty()?a.g.boundingBox.clone():new Te(new D(-10,-10,0),new D(10,10,10)),c=l.getCenter(new D),h=l.getSize(new D),d=Math.max(h.x,h.y,h.z,4),p=l.min.z;o.shadow.position.set(c.x,c.y,p-.01),o.shadow.scale.set(d*6,d*6,1),o.blob.position.set(c.x,c.y,p-.005),o.blob.scale.set(Math.max(h.x,h.y)*1.6+6,Math.max(h.x,h.y)*1.6+6,1),o.key.position.set(c.x-d*1.2,c.y-d*2.4,c.z+d*4.2),o.key.target.position.copy(c),o.rim.position.set(c.x+d*2,c.y+d*3,c.z+d*2);let g=o.key.shadow.camera;Object.assign(g,{left:-d*2,right:d*2,top:d*2,bottom:-d*2,near:d*.5,far:d*12}),g.updateProjectionMatrix(),o.R.setSize(t,e,!1),o.comp.setSize(t,e);let x=Ns[n.view]||Ns.iso,b=x[0]*je,_=x[1]*je,y=n.view&&n.view!=="iso"?R_:Us,w=Math.cos(_),m=new D(w*Math.cos(b),w*Math.sin(b),Math.sin(_)),u=new D(-Math.sin(b),Math.cos(b),0),v=new D().crossVectors(m,u),f=Math.tan(y*je/2),C=a.g.attributes.position?A_([{g:a.g}],3e4):[],M=C.length?T_(C,b,_,y,t/e,n.margin||.86):{c,F:d},S=Math.max(M.F,2),E=S/f;o.cam.position.copy(M.c).addScaledVector(m,E),o.cam.quaternion.setFromRotationMatrix(new Wt().makeBasis(u,v,m)),o.cam.fov=y,o.cam.aspect=t/e,o.cam.near=Math.max(.5,E*.03),o.cam.far=E*4+500,o.cam.updateProjectionMatrix(),o.cam.updateMatrixWorld(!0);let T=n.bg==="none"?"none":n.bg==="workshop"?"workshop":"studio";T==="none"?(o.scene.background=null,o.R.setClearColor(0,0)):o.scene.background=o.bgs[T]||(o.bgs[T]=S_(T)),o.comp.render();let A=o.R.domElement.toDataURL(T==="none"?"image/png":"image/webp",.9);return ha.set(r,A),ha.size>80&&ha.delete(ha.keys().next().value),A}catch(o){return typeof console<"u"&&console.warn("m3 thumb",o),""}});return d_=s.catch(()=>{}),s}var lD={weldTJunctions:fm,openCount:fa,edgeCounts:Mf};export{da as CSG,lD as _mesh,oD as create,xE as displayGeometry,ME as fineGeometry,om as heartPoly,hm as leavesOf,GE as ok,sD as openEdges,x_ as partMatrix,wE as partsOf,um as shapeGeometry,sm as starPoly,y_ as stlOf,aD as thumb,xf as treeOf};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
