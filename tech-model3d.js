var Qm=0,cd=1,tg=2;var Vr=1,eg=2,Ro=3,ri=0,cn=1,An=2,dn=0,kr=1,ud=2,hd=3,fd=4,Su=5;var xi=100,ng=101,ig=102,rg=103,sg=104,ms=200,og=201,ag=202,lg=203,dd=204,pd=205,hl=206,cg=207,fl=208,ug=209,hg=210,fg=211,dg=212,pg=213,mg=214,Hc=0,Gc=1,Wc=2,ho=3,Xc=4,qc=5,Yc=6,Zc=7,bu=0,gg=1,xg=2,Li=0,dl=1,pl=2,ml=3,gl=4,xl=5,_l=6,Hr=7;var md=300,Gr=301,gs=302,wu=303,Eu=304,vl=306,ti=1e3,Yi=1001,$c=1002,fn=1003,_g=1004;var yl=1005;var Cn=1006,Tu=1007;var Wr=1008;var xn=1009,gd=1010,xd=1011,Co=1012,Au=1013,Ni=1014,_i=1015,Sn=1016,Ru=1017,Cu=1018,Xr=1020,_d=35902,vd=35899,yd=1021,Md=1022,Yn=1023,$i=1026,ji=1027,Pu=1028,Iu=1029,qr=1030,Du=1031;var Lu=1033,Ml=33776,Sl=33777,bl=33778,wl=33779,Nu=35840,Uu=35841,Fu=35842,Bu=35843,Ou=36196,zu=37492,Vu=37496,ku=37488,Hu=37489,El=37490,Gu=37491,Wu=37808,Xu=37809,qu=37810,Yu=37811,Zu=37812,$u=37813,Ju=37814,Ku=37815,ju=37816,Qu=37817,th=37818,eh=37819,nh=37820,ih=37821,rh=36492,sh=36494,oh=36495,ah=36283,lh=36284,Tl=36285,ch=36286;var Ca=2300,Jc=2301,Vc=2302,Jf=2303,Kf=2400,jf=2401,Qf=2402;var vg=3200;var Po=0,yg=1,xr="",Rn="srgb",Pa="srgb-linear",Ia="linear",Pe="srgb";var kc=7680;var Mg=519,Sg=512,bg=513,wg=514,uh=515,Eg=516,Tg=517,hh=518,Ag=519,Sd=35044;var bd="300 es",Pi=2e3,fo=2001;function b_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function w_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rg(){let i=Da("canvas");return i.style.display="block",i}var xm={},po=null;function La(...i){let t="THREE."+i.shift();po?po("log",t,...i):console.log(t,...i)}function Cg(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=Cg(i);let t="THREE."+i.shift();if(po)po("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=Cg(i);let t="THREE."+i.shift();if(po)po("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fs(...i){let t=i.join(" ");t in xm||(xm[t]=!0,oe(...i))}function Pg(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Ig={[Hc]:Gc,[Wc]:Yc,[Xc]:Zc,[ho]:qc,[Gc]:Hc,[Yc]:Wc,[Zc]:Xc,[qc]:ho},Ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_m=1234567,co=Math.PI/180,mo=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[e&63|128]+Nn[e>>8&255]+"-"+Nn[e>>16&255]+Nn[e>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function wd(i,t){return(i%t+t)%t}function E_(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function T_(i,t,e){return i!==t?(e-i)/(t-i):0}function Ta(i,t,e){return(1-e)*i+e*t}function A_(i,t,e,n){return Ta(i,t,1-Math.exp(-e*n))}function R_(i,t=1){return t-Math.abs(wd(i,t*2)-t)}function C_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function P_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function I_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function D_(i,t){return i+Math.random()*(t-i)}function L_(i){return i*(.5-Math.random())}function N_(i){i!==void 0&&(_m=i);let t=_m+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function U_(i){return i*co}function F_(i){return i*mo}function B_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function O_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function z_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function V_(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),f=o((t+n)/2),p=s((t-n)/2),d=o((t-n)/2),g=s((n-t)/2),x=o((n-t)/2);switch(r){case"XYX":i.set(a*f,l*p,l*d,a*c);break;case"YZY":i.set(l*d,a*f,l*p,a*c);break;case"ZXZ":i.set(l*p,l*d,a*f,a*c);break;case"XZX":i.set(a*f,l*x,l*g,a*c);break;case"YXY":i.set(l*g,a*f,l*x,a*c);break;case"ZYZ":i.set(l*x,l*g,a*f,a*c);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ed={DEG2RAD:co,RAD2DEG:mo,generateUUID:Zi,clamp:he,euclideanModulo:wd,mapLinear:E_,inverseLerp:T_,lerp:Ta,damp:A_,pingpong:R_,smoothstep:C_,smootherstep:P_,randInt:I_,randFloat:D_,randFloatSpread:L_,seededRandom:N_,degToRad:U_,radToDeg:F_,isPowerOfTwo:B_,ceilPowerOfTwo:O_,floorPowerOfTwo:z_,setQuaternionFromProperEuler:V_,normalize:ke,denormalize:Ci},Id=class Id{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Id.prototype.isVector2=!0;var _t=Id,Bn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],f=n[r+2],p=n[r+3],d=s[o+0],g=s[o+1],x=s[o+2],b=s[o+3];if(p!==b||l!==d||c!==g||f!==x){let _=l*d+c*g+f*x+p*b;_<0&&(d=-d,g=-g,x=-x,b=-b,_=-_);let y=1-a;if(_<.9995){let w=Math.acos(_),m=Math.sin(w);y=Math.sin(y*w)/m,a=Math.sin(a*w)/m,l=l*y+d*a,c=c*y+g*a,f=f*y+x*a,p=p*y+b*a}else{l=l*y+d*a,c=c*y+g*a,f=f*y+x*a,p=p*y+b*a;let w=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=w,c*=w,f*=w,p*=w}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],f=n[r+3],p=s[o],d=s[o+1],g=s[o+2],x=s[o+3];return t[e]=a*x+f*p+l*g-c*d,t[e+1]=l*x+f*d+c*p-a*g,t[e+2]=c*x+f*g+a*d-l*p,t[e+3]=f*x-a*p-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(r/2),p=a(s/2),d=l(n/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*f*p+c*g*x,this._y=c*g*p-d*f*x,this._z=c*f*x+d*g*p,this._w=c*f*p-d*g*x;break;case"YXZ":this._x=d*f*p+c*g*x,this._y=c*g*p-d*f*x,this._z=c*f*x-d*g*p,this._w=c*f*p+d*g*x;break;case"ZXY":this._x=d*f*p-c*g*x,this._y=c*g*p+d*f*x,this._z=c*f*x+d*g*p,this._w=c*f*p-d*g*x;break;case"ZYX":this._x=d*f*p-c*g*x,this._y=c*g*p+d*f*x,this._z=c*f*x-d*g*p,this._w=c*f*p+d*g*x;break;case"YZX":this._x=d*f*p+c*g*x,this._y=c*g*p+d*f*x,this._z=c*f*x-d*g*p,this._w=c*f*p-d*g*x;break;case"XZY":this._x=d*f*p-c*g*x,this._y=c*g*p-d*f*x,this._z=c*f*x+d*g*p,this._w=c*f*p+d*g*x;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],p=e[10],d=n+a+p;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(n>a&&n>p){let g=2*Math.sqrt(1+n-a-p);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>p){let g=2*Math.sqrt(1+a-n-p);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{let g=2*Math.sqrt(1+p-n-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-n*c,this._z=s*f+o*c+n*l-r*a,this._w=o*f-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dd=class Dd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),f=2*(a*e-s*r),p=2*(s*n-o*e);return this.x=e+l*c+o*p-a*f,this.y=n+l*f+a*c-s*p,this.z=r+l*p+s*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bf.copy(this).projectOnVector(t),this.sub(bf)}reflect(t){return this.sub(bf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dd.prototype.isVector3=!0;var D=Dd,bf=new D,vm=new Bn,Ld=class Ld{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=e,f[4]=s,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],p=n[7],d=n[2],g=n[5],x=n[8],b=r[0],_=r[3],y=r[6],w=r[1],m=r[4],u=r[7],v=r[2],h=r[5],C=r[8];return s[0]=o*b+a*w+l*v,s[3]=o*_+a*m+l*h,s[6]=o*y+a*u+l*C,s[1]=c*b+f*w+p*v,s[4]=c*_+f*m+p*h,s[7]=c*y+f*u+p*C,s[2]=d*b+g*w+x*v,s[5]=d*_+g*m+x*h,s[8]=d*y+g*u+x*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*s*f+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],p=f*o-a*c,d=a*l-f*s,g=c*s-o*l,x=e*p+n*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/x;return t[0]=p*b,t[1]=(r*c-f*n)*b,t[2]=(a*n-r*o)*b,t[3]=d*b,t[4]=(f*e-r*l)*b,t[5]=(r*s-a*e)*b,t[6]=g*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wf.makeScale(t,e)),this}rotate(t){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wf.makeRotation(-t)),this}translate(t,e){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ld.prototype.isMatrix3=!0;var ce=Ld,wf=new ce,ym=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mm=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k_(){let i={enabled:!0,workingColorSpace:Pa,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Pe&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pe&&(r.r=uo(r.r),r.g=uo(r.g),r.b=uo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xr?Ia:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pa]:{primaries:t,whitePoint:n,transfer:Ia,toXYZ:ym,fromXYZ:Mm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:t,whitePoint:n,transfer:Pe,toXYZ:ym,fromXYZ:Mm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),i}var xe=k_();function dr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function uo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gs,Kc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Gs===void 0&&(Gs=Da("canvas")),Gs.width=t.width,Gs.height=t.height;let r=Gs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Gs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Da("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=dr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dr(e[n]/255)*255):e[n]=dr(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},H_=0,go=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ef(r[o].image)):s.push(Ef(r[o]))}else s=Ef(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ef(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var G_=0,Tf=new D,Hn=class i extends Ji{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yi,r=Yi,s=Cn,o=Wr,a=Yn,l=xn,c=i.DEFAULT_ANISOTROPY,f=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Zi(),this.name="",this.source=new go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tf).x}get height(){return this.source.getSize(Tf).y}get depth(){return this.source.getSize(Tf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ti:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case $c:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ti:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case $c:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=md;Hn.DEFAULT_ANISOTROPY=1;var Nd=class Nd{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],f=l[4],p=l[8],d=l[1],g=l[5],x=l[9],b=l[2],_=l[6],y=l[10];if(Math.abs(f-d)<.01&&Math.abs(p-b)<.01&&Math.abs(x-_)<.01){if(Math.abs(f+d)<.1&&Math.abs(p+b)<.1&&Math.abs(x+_)<.1&&Math.abs(c+g+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let m=(c+1)/2,u=(g+1)/2,v=(y+1)/2,h=(f+d)/4,C=(p+b)/4,M=(x+_)/4;return m>u&&m>v?m<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(m),r=h/n,s=C/n):u>v?u<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(u),n=h/r,s=M/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=C/s,r=M/s),this.set(n,r,s,e),this}let w=Math.sqrt((_-x)*(_-x)+(p-b)*(p-b)+(d-f)*(d-f));return Math.abs(w)<.001&&(w=1),this.x=(_-x)/w,this.y=(p-b)/w,this.z=(d-f)/w,this.w=Math.acos((c+g+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nd.prototype.isVector4=!0;var _e=Nd,jc=class extends Ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new Hn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new go(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends jc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Na=class extends Hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qc=class extends Hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Mu=class Mu{constructor(t,e,n,r,s,o,a,l,c,f,p,d,g,x,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,f,p,d,g,x,b,_)}set(t,e,n,r,s,o,a,l,c,f,p,d,g,x,b,_){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=r,y[1]=s,y[5]=o,y[9]=a,y[13]=l,y[2]=c,y[6]=f,y[10]=p,y[14]=d,y[3]=g,y[7]=x,y[11]=b,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mu().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Ws.setFromMatrixColumn(t,0).length(),s=1/Ws.setFromMatrixColumn(t,1).length(),o=1/Ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){let d=o*f,g=o*p,x=a*f,b=a*p;e[0]=l*f,e[4]=-l*p,e[8]=c,e[1]=g+x*c,e[5]=d-b*c,e[9]=-a*l,e[2]=b-d*c,e[6]=x+g*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*f,g=l*p,x=c*f,b=c*p;e[0]=d+b*a,e[4]=x*a-g,e[8]=o*c,e[1]=o*p,e[5]=o*f,e[9]=-a,e[2]=g*a-x,e[6]=b+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*f,g=l*p,x=c*f,b=c*p;e[0]=d-b*a,e[4]=-o*p,e[8]=x+g*a,e[1]=g+x*a,e[5]=o*f,e[9]=b-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*f,g=o*p,x=a*f,b=a*p;e[0]=l*f,e[4]=x*c-g,e[8]=d*c+b,e[1]=l*p,e[5]=b*c+d,e[9]=g*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,g=o*c,x=a*l,b=a*c;e[0]=l*f,e[4]=b-d*p,e[8]=x*p+g,e[1]=p,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=g*p+x,e[10]=d-b*p}else if(t.order==="XZY"){let d=o*l,g=o*c,x=a*l,b=a*c;e[0]=l*f,e[4]=-p,e[8]=c*f,e[1]=d*p+b,e[5]=o*f,e[9]=g*p-x,e[2]=x*p-g,e[6]=a*f,e[10]=b*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(W_,t,X_)}lookAt(t,e,n){let r=this.elements;return jn.subVectors(t,e),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Tr.crossVectors(n,jn),Tr.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Tr.crossVectors(n,jn)),Tr.normalize(),hc.crossVectors(jn,Tr),r[0]=Tr.x,r[4]=hc.x,r[8]=jn.x,r[1]=Tr.y,r[5]=hc.y,r[9]=jn.y,r[2]=Tr.z,r[6]=hc.z,r[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],p=n[5],d=n[9],g=n[13],x=n[2],b=n[6],_=n[10],y=n[14],w=n[3],m=n[7],u=n[11],v=n[15],h=r[0],C=r[4],M=r[8],S=r[12],E=r[1],T=r[5],A=r[9],R=r[13],L=r[2],F=r[6],O=r[10],V=r[14],$=r[3],k=r[7],tt=r[11],q=r[15];return s[0]=o*h+a*E+l*L+c*$,s[4]=o*C+a*T+l*F+c*k,s[8]=o*M+a*A+l*O+c*tt,s[12]=o*S+a*R+l*V+c*q,s[1]=f*h+p*E+d*L+g*$,s[5]=f*C+p*T+d*F+g*k,s[9]=f*M+p*A+d*O+g*tt,s[13]=f*S+p*R+d*V+g*q,s[2]=x*h+b*E+_*L+y*$,s[6]=x*C+b*T+_*F+y*k,s[10]=x*M+b*A+_*O+y*tt,s[14]=x*S+b*R+_*V+y*q,s[3]=w*h+m*E+u*L+v*$,s[7]=w*C+m*T+u*F+v*k,s[11]=w*M+m*A+u*O+v*tt,s[15]=w*S+m*R+u*V+v*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],p=t[6],d=t[10],g=t[14],x=t[3],b=t[7],_=t[11],y=t[15],w=l*g-c*d,m=a*g-c*p,u=a*d-l*p,v=o*g-c*f,h=o*d-l*f,C=o*p-a*f;return e*(b*w-_*m+y*u)-n*(x*w-_*v+y*h)+r*(x*m-b*v+y*C)-s*(x*u-b*h+_*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],f=t[10];return e*(o*f-a*c)-n*(s*f-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],p=t[9],d=t[10],g=t[11],x=t[12],b=t[13],_=t[14],y=t[15],w=e*a-n*o,m=e*l-r*o,u=e*c-s*o,v=n*l-r*a,h=n*c-s*a,C=r*c-s*l,M=f*b-p*x,S=f*_-d*x,E=f*y-g*x,T=p*_-d*b,A=p*y-g*b,R=d*y-g*_,L=w*R-m*A+u*T+v*E-h*S+C*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return t[0]=(a*R-l*A+c*T)*F,t[1]=(r*A-n*R-s*T)*F,t[2]=(b*C-_*h+y*v)*F,t[3]=(d*h-p*C-g*v)*F,t[4]=(l*E-o*R-c*S)*F,t[5]=(e*R-r*E+s*S)*F,t[6]=(_*u-x*C-y*m)*F,t[7]=(f*C-d*u+g*m)*F,t[8]=(o*A-a*E+c*M)*F,t[9]=(n*E-e*A-s*M)*F,t[10]=(x*h-b*u+y*w)*F,t[11]=(p*u-f*h-g*w)*F,t[12]=(a*S-o*T-l*M)*F,t[13]=(e*T-n*S+r*M)*F,t[14]=(b*m-x*v-_*w)*F,t[15]=(f*v-p*m+d*w)*F,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,f=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+n,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,f=o+o,p=a+a,d=s*c,g=s*f,x=s*p,b=o*f,_=o*p,y=a*p,w=l*c,m=l*f,u=l*p,v=n.x,h=n.y,C=n.z;return r[0]=(1-(b+y))*v,r[1]=(g+u)*v,r[2]=(x-m)*v,r[3]=0,r[4]=(g-u)*h,r[5]=(1-(d+y))*h,r[6]=(_+w)*h,r[7]=0,r[8]=(x+m)*C,r[9]=(_-w)*C,r[10]=(1-(d+b))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Ws.set(r[0],r[1],r[2]).length(),a=Ws.set(r[4],r[5],r[6]).length(),l=Ws.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ti.copy(this);let c=1/o,f=1/a,p=1/l;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=f,Ti.elements[5]*=f,Ti.elements[6]*=f,Ti.elements[8]*=p,Ti.elements[9]*=p,Ti.elements[10]*=p,e.setFromRotationMatrix(Ti),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Pi,l=!1){let c=this.elements,f=2*s/(e-t),p=2*s/(n-r),d=(e+t)/(e-t),g=(n+r)/(n-r),x,b;if(l)x=s/(o-s),b=o*s/(o-s);else if(a===Pi)x=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===fo)x=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Pi,l=!1){let c=this.elements,f=2/(e-t),p=2/(n-r),d=-(e+t)/(e-t),g=-(n+r)/(n-r),x,b;if(l)x=1/(o-s),b=o/(o-s);else if(a===Pi)x=-2/(o-s),b=-(o+s)/(o-s);else if(a===fo)x=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Mu.prototype.isMatrix4=!0;var Wt=Mu,Ws=new D,Ti=new Wt,W_=new D(0,0,0),X_=new D(1,1,1),Tr=new D,hc=new D,jn=new D,Sm=new Wt,bm=new Bn,hi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],p=r[2],d=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-he(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bm.setFromEuler(this),this.setFromQuaternion(bm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},q_=0,wm=new D,Xs=new Bn,lr=new Wt,fc=new D,ga=new D,Y_=new D,Z_=new Bn,Em=new D(1,0,0),Tm=new D(0,1,0),Am=new D(0,0,1),Rm={type:"added"},$_={type:"removed"},qs={type:"childadded",child:null},Af={type:"childremoved",child:null},Mn=class i extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new hi,n=new Bn,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ce}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.premultiply(Xs),this}rotateX(t){return this.rotateOnAxis(Em,t)}rotateY(t){return this.rotateOnAxis(Tm,t)}rotateZ(t){return this.rotateOnAxis(Am,t)}translateOnAxis(t,e){return wm.copy(t).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Em,t)}translateY(t){return this.translateOnAxis(Tm,t)}translateZ(t){return this.translateOnAxis(Am,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fc.copy(t):fc.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(ga,fc,this.up):lr.lookAt(fc,ga,this.up),this.quaternion.setFromRotationMatrix(lr),r&&(lr.extractRotation(r.matrixWorld),Xs.setFromRotationMatrix(lr),this.quaternion.premultiply(Xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rm),qs.child=t,this.dispatchEvent(qs),qs.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($_),Af.child=t,this.dispatchEvent(Af),Af.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),lr.multiply(t.parent.matrixWorld)),t.applyMatrix4(lr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rm),qs.child=t,this.dispatchEvent(qs),qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,t,Y_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,Z_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),p=o(t.shapes),d=o(t.skeletons),g=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new D(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},J_={type:"move"},_o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let _=e.getJointPose(b,n),y=this._getHandJoint(c,b);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=f.position.distanceTo(p.position),g=.02,x=.005;c.inputState.pinching&&d>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Rf(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=xe.workingColorSpace){if(t=wd(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Rf(o,s,t+1/3),this.g=Rf(o,s,t),this.b=Rf(o,s,t-1/3)}return xe.colorSpaceToWorking(this,r),this}setStyle(t,e=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Rn){let n=Dg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}copyLinearToSRGB(t){return this.r=uo(t.r),this.g=uo(t.g),this.b=uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return xe.workingToColorSpace(Un.copy(this),t),Math.round(he(Un.r*255,0,255))*65536+Math.round(he(Un.g*255,0,255))*256+Math.round(he(Un.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(Un.copy(this),e);let n=Un.r,r=Un.g,s=Un.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=f<=.5?p/(o+a):p/(2-o-a),o){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(Un.copy(this),e),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=Rn){xe.workingToColorSpace(Un.copy(this),t);let e=Un.r,n=Un.g,r=Un.b;return t!==Rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ar),this.setHSL(Ar.h+t,Ar.s+e,Ar.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ar),t.getHSL(dc);let n=Ta(Ar.h,dc.h,e),r=Ta(Ar.s,dc.s,e),s=Ta(Ar.l,dc.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new Qt;Qt.NAMES=Dg;var Ua=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pr=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ai=new D,cr=new D,Cf=new D,ur=new D,Ys=new D,Zs=new D,Cm=new D,Pf=new D,If=new D,Df=new D,Lf=new _e,Nf=new _e,Uf=new _e,He=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ai.subVectors(t,e),r.cross(Ai);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ai.subVectors(r,e),cr.subVectors(n,e),Cf.subVectors(t,e);let o=Ai.dot(Ai),a=Ai.dot(cr),l=Ai.dot(Cf),c=cr.dot(cr),f=cr.dot(Cf),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;let d=1/p,g=(c*l-a*f)*d,x=(o*f-a*l)*d;return s.set(1-g-x,x,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ur.x),l.addScaledVector(o,ur.y),l.addScaledVector(a,ur.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Lf.setScalar(0),Nf.setScalar(0),Uf.setScalar(0),Lf.fromBufferAttribute(t,e),Nf.fromBufferAttribute(t,n),Uf.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Lf,s.x),o.addScaledVector(Nf,s.y),o.addScaledVector(Uf,s.z),o}static isFrontFacing(t,e,n,r){return Ai.subVectors(n,e),cr.subVectors(t,e),Ai.cross(cr).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Ai.cross(cr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Ys.subVectors(r,n),Zs.subVectors(s,n),Pf.subVectors(t,n);let l=Ys.dot(Pf),c=Zs.dot(Pf);if(l<=0&&c<=0)return e.copy(n);If.subVectors(t,r);let f=Ys.dot(If),p=Zs.dot(If);if(f>=0&&p<=f)return e.copy(r);let d=l*p-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(Ys,o);Df.subVectors(t,s);let g=Ys.dot(Df),x=Zs.dot(Df);if(x>=0&&g<=x)return e.copy(s);let b=g*c-l*x;if(b<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Zs,a);let _=f*x-g*p;if(_<=0&&p-f>=0&&g-x>=0)return Cm.subVectors(s,r),a=(p-f)/(p-f+(g-x)),e.copy(r).addScaledVector(Cm,a);let y=1/(_+b+d);return o=b*y,a=d*y,e.copy(n).addScaledVector(Ys,o).addScaledVector(Zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Me=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ri):Ri.fromBufferAttribute(s,o),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pc.copy(n.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xa),mc.subVectors(this.max,xa),$s.subVectors(t.a,xa),Js.subVectors(t.b,xa),Ks.subVectors(t.c,xa),Rr.subVectors(Js,$s),Cr.subVectors(Ks,Js),ls.subVectors($s,Ks);let e=[0,-Rr.z,Rr.y,0,-Cr.z,Cr.y,0,-ls.z,ls.y,Rr.z,0,-Rr.x,Cr.z,0,-Cr.x,ls.z,0,-ls.x,-Rr.y,Rr.x,0,-Cr.y,Cr.x,0,-ls.y,ls.x,0];return!Ff(e,$s,Js,Ks,mc)||(e=[1,0,0,0,1,0,0,0,1],!Ff(e,$s,Js,Ks,mc))?!1:(gc.crossVectors(Rr,Cr),e=[gc.x,gc.y,gc.z],Ff(e,$s,Js,Ks,mc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hr=[new D,new D,new D,new D,new D,new D,new D,new D],Ri=new D,pc=new Me,$s=new D,Js=new D,Ks=new D,Rr=new D,Cr=new D,ls=new D,xa=new D,mc=new D,gc=new D,cs=new D;function Ff(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){cs.fromArray(i,s);let a=r.x*Math.abs(cs.x)+r.y*Math.abs(cs.y)+r.z*Math.abs(cs.z),l=t.dot(cs),c=e.dot(cs),f=n.dot(cs);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var gn=new D,xc=new _t,K_=0,We=class extends Ji{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sd,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xc.fromBufferAttribute(this,e),xc.applyMatrix3(t),this.setXY(e,xc.x,xc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix3(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),r=ke(r,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Fa=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ba=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Te=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},j_=new Me,_a=new D,Bf=new D,fi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):j_.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_a.subVectors(t,this.center);let e=_a.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(_a,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_a.copy(t.center).add(Bf)),this.expandByPoint(_a.copy(t.center).sub(Bf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Q_=0,ui=new Wt,Of=new Mn,js=new D,Qn=new Me,va=new Me,En=new D,Le=class i extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(b_(t)?Ba:Fa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ce().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,e,n){return ui.makeTranslation(t,e,n),this.applyMatrix4(ui),this}scale(t,e,n){return ui.makeScale(t,e,n),this.applyMatrix4(ui),this}lookAt(t){return Of.lookAt(t),Of.updateMatrix(),this.applyMatrix4(Of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Me);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];Qn.setFromBufferAttribute(s),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];va.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(Qn.min,va.min),Qn.expandByPoint(En),En.addVectors(Qn.max,va.max),Qn.expandByPoint(En)):(Qn.expandByPoint(va.min),Qn.expandByPoint(va.max))}Qn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)En.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(En));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)En.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(t,c),En.add(js)),r=Math.max(r,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new D,l[M]=new D;let c=new D,f=new D,p=new D,d=new _t,g=new _t,x=new _t,b=new D,_=new D;function y(M,S,E){c.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),p.fromBufferAttribute(n,E),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),x.fromBufferAttribute(s,E),f.sub(c),p.sub(c),g.sub(d),x.sub(d);let T=1/(g.x*x.y-x.x*g.y);isFinite(T)&&(b.copy(f).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(T),_.copy(p).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(T),a[M].add(b),a[S].add(b),a[E].add(b),l[M].add(_),l[S].add(_),l[E].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let M=0,S=w.length;M<S;++M){let E=w[M],T=E.start,A=E.count;for(let R=T,L=T+A;R<L;R+=3)y(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let m=new D,u=new D,v=new D,h=new D;function C(M){v.fromBufferAttribute(r,M),h.copy(v);let S=a[M];m.copy(S),m.sub(v.multiplyScalar(v.dot(S))).normalize(),u.crossVectors(h,S);let T=u.dot(l[M])<0?-1:1;o.setXYZW(M,m.x,m.y,m.z,T)}for(let M=0,S=w.length;M<S;++M){let E=w[M],T=E.start,A=E.count;for(let R=T,L=T+A;R<L;R+=3)C(t.getX(R+0)),C(t.getX(R+1)),C(t.getX(R+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,f=new D,p=new D;if(t)for(let d=0,g=t.count;d<g;d+=3){let x=t.getX(d+0),b=t.getX(d+1),_=t.getX(d+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,_),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,_),a.add(f),l.add(f),c.add(f),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)En.fromBufferAttribute(t,e),En.normalize(),t.setXYZ(e,En.x,En.y,En.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,p=a.normalized,d=new c.constructor(l.length*f),g=0,x=0;for(let b=0,_=l.length;b<_;b++){a.isInterleavedBufferAttribute?g=l[b]*a.data.stride+a.offset:g=l[b]*f;for(let y=0;y<f;y++)d[x++]=c[g++]}return new We(d,f,p)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let f=0,p=c.length;f<p;f++){let d=c[f],g=t(d,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,d=c.length;p<d;p++){let g=c[p];f.push(g.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let f=r[c];this.setAttribute(c,f.clone(e))}let s=t.morphAttributes;for(let c in s){let f=[],p=s[c];for(let d=0,g=p.length;d<g;d++)f.push(p[d].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sd,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},kn=new D,ei=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.applyMatrix4(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.applyNormalMatrix(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.transformDirection(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ci(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ci(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ci(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ci(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),r=ke(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),r=ke(r,this.array),s=ke(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){La("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){La("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zf=new D,tv=new D,ev=new ce,yn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=zf.subVectors(n,e).cross(tv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(zf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ev.getNormalMatrix(t),r=this.coplanarPoint(zf).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},nv=0,di=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=kr,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=pd,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kc,this.stencilZFail=kc,this.stencilZPass=kc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vo=class extends di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qs,ya=new D,to=new D,eo=new D,no=new _t,Ma=new _t,Lg=new Wt,_c=new D,Sa=new D,vc=new D,Pm=new _t,Vf=new _t,Im=new _t,za=class extends Mn{constructor(t=new vo){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new Le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Oa(e,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new ei(n,3,0,!1)),Qs.setAttribute("uv",new ei(n,2,3,!1))}this.geometry=Qs,this.material=t,this.center=new _t(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),Lg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),eo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-eo.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;yc(_c.set(-.5,-.5,0),eo,o,to,r,s),yc(Sa.set(.5,-.5,0),eo,o,to,r,s),yc(vc.set(.5,.5,0),eo,o,to,r,s),Pm.set(0,0),Vf.set(1,0),Im.set(1,1);let a=t.ray.intersectTriangle(_c,Sa,vc,!1,ya);if(a===null&&(yc(Sa.set(-.5,.5,0),eo,o,to,r,s),Vf.set(0,1),a=t.ray.intersectTriangle(_c,vc,Sa,!1,ya),a===null))return;let l=t.ray.origin.distanceTo(ya);l<t.near||l>t.far||e.push({distance:l,point:ya.clone(),uv:He.getInterpolation(ya,_c,Sa,vc,Pm,Vf,Im,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function yc(i,t,e,n,r,s){no.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Ma.x=s*no.x-r*no.y,Ma.y=r*no.x+s*no.y):Ma.copy(no),i.copy(t),i.x+=Ma.x,i.y+=Ma.y,i.applyMatrix4(Lg)}var fr=new D,kf=new D,Mc=new D,Sc=new D,Di=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fr.copy(this.origin).addScaledVector(this.direction,e),fr.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){kf.copy(t).add(e).multiplyScalar(.5),Mc.copy(e).sub(t).normalize(),Sc.copy(this.origin).sub(kf);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Mc),a=Sc.dot(this.direction),l=-Sc.dot(Mc),c=Sc.lengthSq(),f=Math.abs(1-o*o),p,d,g,x;if(f>0)if(p=o*l-a,d=o*a-l,x=s*f,p>=0)if(d>=-x)if(d<=x){let b=1/f;p*=b,d*=b,g=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=s,p=Math.max(0,-(o*d+a)),g=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(o*d+a)),g=-p*p+d*(d+2*l)+c;else d<=-x?(p=Math.max(0,-(-o*s+a)),d=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+d*(d+2*l)+c):d<=x?(p=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(p=Math.max(0,-(o*s+a)),d=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+d*(d+2*l)+c);else d=o>0?-s:s,p=Math.max(0,-(o*d+a)),g=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(kf).addScaledVector(Mc,d),g}intersectSphere(t,e){if(t.radius<0)return null;fr.subVectors(t.center,this.origin);let n=fr.dot(this.direction),r=fr.dot(fr)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),f>=0?(s=(t.min.y-d.y)*f,o=(t.max.y-d.y)*f):(s=(t.max.y-d.y)*f,o=(t.min.y-d.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(a=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,fr)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,p=t.x-o.x,d=t.y-o.y,g=t.z-o.z,x=e.x-o.x,b=e.y-o.y,_=e.z-o.z,y=n.x-o.x,w=n.y-o.y,m=n.z-o.z,u=Math.abs(l),v=Math.abs(c),h=Math.abs(f),C,M,S,E,T,A,R,L,F,O,V,$;if(u>=v&&u>=h?(S=l,A=p,F=x,$=y,l>=0?(C=c,M=f,E=d,T=g,R=b,L=_,O=w,V=m):(C=f,M=c,E=g,T=d,R=_,L=b,O=m,V=w)):v>=h?(S=c,A=d,F=b,$=w,c>=0?(C=f,M=l,E=g,T=p,R=_,L=x,O=m,V=y):(C=l,M=f,E=p,T=g,R=x,L=_,O=y,V=m)):(S=f,A=g,F=_,$=m,f>=0?(C=l,M=c,E=p,T=d,R=x,L=b,O=y,V=w):(C=c,M=l,E=d,T=p,R=b,L=x,O=w,V=y)),S===0)return null;let k=C/S,tt=M/S,q=1/S,ct=E-k*A,ut=T-tt*A,Et=R-k*F,Mt=L-tt*F,kt=O-k*$,N=V-tt*$,Q=kt*Mt-N*Et,lt=ct*N-ut*kt,vt=Et*ut-Mt*ct;if(r){if(Q<0||lt<0||vt<0)return null}else if((Q<0||lt<0||vt<0)&&(Q>0||lt>0||vt>0))return null;let st=Q+lt+vt;if(st===0)return null;let dt=q*(Q*A+lt*F+vt*$);return(st>0?dt<0:dt>0)?null:this.at(dt/st,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pi=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Dm=new Wt,us=new Di,bc=new fi,Lm=new D,wc=new D,Ec=new D,Tc=new D,Hf=new D,Ac=new D,Nm=new D,Rc=new D,ae=class extends Mn{constructor(t=new Le,e=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Ac.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let f=a[l],p=s[l];f!==0&&(Hf.fromBufferAttribute(p,t),o?Ac.addScaledVector(Hf,f):Ac.addScaledVector(Hf.sub(e),f))}e.add(Ac)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bc.copy(n.boundingSphere),bc.applyMatrix4(s),us.copy(t.ray).recast(t.near),!(bc.containsPoint(us.origin)===!1&&(us.intersectSphere(bc,Lm)===null||us.origin.distanceToSquared(Lm)>(t.far-t.near)**2))&&(Dm.copy(s).invert(),us.copy(t.ray).applyMatrix4(Dm),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,b=d.length;x<b;x++){let _=d[x],y=o[_.materialIndex],w=Math.max(_.start,g.start),m=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let u=w,v=m;u<v;u+=3){let h=a.getX(u),C=a.getX(u+1),M=a.getX(u+2);r=Cc(this,y,t,n,c,f,p,h,C,M),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{let x=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let _=x,y=b;_<y;_+=3){let w=a.getX(_),m=a.getX(_+1),u=a.getX(_+2);r=Cc(this,o,t,n,c,f,p,w,m,u),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,b=d.length;x<b;x++){let _=d[x],y=o[_.materialIndex],w=Math.max(_.start,g.start),m=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let u=w,v=m;u<v;u+=3){let h=u,C=u+1,M=u+2;r=Cc(this,y,t,n,c,f,p,h,C,M),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{let x=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let _=x,y=b;_<y;_+=3){let w=_,m=_+1,u=_+2;r=Cc(this,o,t,n,c,f,p,w,m,u),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}};function iv(i,t,e,n,r,s,o,a){let l;if(t.side===cn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===ri,a),l===null)return null;Rc.copy(a),Rc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Rc);return c<e.near||c>e.far?null:{distance:c,point:Rc.clone(),object:i}}function Cc(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,wc),i.getVertexPosition(l,Ec),i.getVertexPosition(c,Tc);let f=iv(i,t,e,n,wc,Ec,Tc,Nm);if(f){let p=new D;He.getBarycoord(Nm,wc,Ec,Tc,p),r&&(f.uv=He.getInterpolatedAttribute(r,a,l,c,p,new _t)),s&&(f.uv1=He.getInterpolatedAttribute(s,a,l,c,p,new _t)),o&&(f.normal=He.getInterpolatedAttribute(o,a,l,c,p,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};He.getNormal(wc,Ec,Tc,d.normal),f.face=d,f.barycoord=p}return f}var mr=class extends Hn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=fn,f=fn,p,d){super(null,o,a,l,c,f,r,s,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Va=class extends We{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},io=new Wt,Um=new Wt,Pc=[],Fm=new Me,rv=new Wt,ba=new ae,wa=new fi,ka=class extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Va(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,rv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Me),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,io),Fm.copy(t.boundingBox).applyMatrix4(io),this.boundingBox.union(Fm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,io),wa.copy(t.boundingSphere).applyMatrix4(io),this.boundingSphere.union(wa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(n),t.ray.intersectsSphere(wa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,io),Um.multiplyMatrices(n,io),ba.matrixWorld=Um,ba.raycast(t,Pc);for(let o=0,a=Pc.length;o<a;o++){let l=Pc[o];l.instanceId=s,l.object=this,e.push(l)}Pc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Va(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new mr(new Float32Array(r*this.count),r,this.count,Pu,_i));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new fi,sv=new _t(.5,.5),Ic=new D,yo=class{constructor(t=new yn,e=new yn,n=new yn,r=new yn,s=new yn,o=new yn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pi,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],p=s[5],d=s[6],g=s[7],x=s[8],b=s[9],_=s[10],y=s[11],w=s[12],m=s[13],u=s[14],v=s[15];if(r[0].setComponents(c-o,g-f,y-x,v-w).normalize(),r[1].setComponents(c+o,g+f,y+x,v+w).normalize(),r[2].setComponents(c+a,g+p,y+b,v+m).normalize(),r[3].setComponents(c-a,g-p,y-b,v-m).normalize(),n)r[4].setComponents(l,d,_,u).normalize(),r[5].setComponents(c-l,g-d,y-_,v-u).normalize();else if(r[4].setComponents(c-l,g-d,y-_,v-u).normalize(),e===Pi)r[5].setComponents(c+l,g+d,y+_,v+u).normalize();else if(e===fo)r[5].setComponents(l,d,_,u).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(t){hs.center.set(0,0,0);let e=sv.distanceTo(t.center);return hs.radius=.7071067811865476+e,hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Ic.x=r.normal.x>0?t.max.x:t.min.x,Ic.y=r.normal.y>0?t.max.y:t.min.y,Ic.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ha=class extends Hn{constructor(t=[],e=Gr,n,r,s,o,a,l,c,f){super(t,e,n,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ga=class extends Hn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ki=class extends Hn{constructor(t,e,n=Ni,r,s,o,a=fn,l=fn,c,f=$i,p=1){if(f!==$i&&f!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,r,s,o,a,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},tu=class extends Ki{constructor(t,e=Ni,n=Gr,r,s,o=fn,a=fn,l,c=$i){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,e,n,r,s,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Wa=class extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ir=class i extends Le{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],f=[],p=[],d=0,g=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(p,2));function x(b,_,y,w,m,u,v,h,C,M,S){let E=u/C,T=v/M,A=u/2,R=v/2,L=h/2,F=C+1,O=M+1,V=0,$=0,k=new D;for(let tt=0;tt<O;tt++){let q=tt*T-R;for(let ct=0;ct<F;ct++){let ut=ct*E-A;k[b]=ut*w,k[_]=q*m,k[y]=L,c.push(k.x,k.y,k.z),k[b]=0,k[_]=0,k[y]=h>0?1:-1,f.push(k.x,k.y,k.z),p.push(ct/C),p.push(1-tt/M),V+=1}}for(let tt=0;tt<M;tt++)for(let q=0;q<C;q++){let ct=d+q+F*tt,ut=d+q+F*(tt+1),Et=d+(q+1)+F*(tt+1),Mt=d+(q+1)+F*tt;l.push(ct,ut,Mt),l.push(ut,Et,Mt),$+=6}a.addGroup(g,$,S),g+=$,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Dr=class i extends Le{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let f=[],p=[],d=[],g=[],x=0,b=[],_=n/2,y=0;w(),o===!1&&(t>0&&m(!0),e>0&&m(!1)),this.setIndex(f),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(g,2));function w(){let u=new D,v=new D,h=0,C=(e-t)/n;for(let M=0;M<=s;M++){let S=[],E=M/s,T=E*(e-t)+t;for(let A=0;A<=r;A++){let R=A/r,L=R*l+a,F=Math.sin(L),O=Math.cos(L);v.x=T*F,v.y=-E*n+_,v.z=T*O,p.push(v.x,v.y,v.z),u.set(F,C,O).normalize(),d.push(u.x,u.y,u.z),g.push(R,1-E),S.push(x++)}b.push(S)}for(let M=0;M<r;M++)for(let S=0;S<s;S++){let E=b[S][M],T=b[S+1][M],A=b[S+1][M+1],R=b[S][M+1];(t>0||S!==0)&&(f.push(E,T,R),h+=3),(e>0||S!==s-1)&&(f.push(T,A,R),h+=3)}c.addGroup(y,h,0),y+=h}function m(u){let v=x,h=new _t,C=new D,M=0,S=u===!0?t:e,E=u===!0?1:-1;for(let A=1;A<=r;A++)p.push(0,_*E,0),d.push(0,E,0),g.push(.5,.5),x++;let T=x;for(let A=0;A<=r;A++){let L=A/r*l+a,F=Math.cos(L),O=Math.sin(L);C.x=S*O,C.y=_*E,C.z=S*F,p.push(C.x,C.y,C.z),d.push(0,E,0),h.x=F*.5+.5,h.y=O*.5*E+.5,g.push(h.x,h.y),x++}for(let A=0;A<r;A++){let R=v+A,L=T+A;u===!0?f.push(L,L+1,R):f.push(L+1,L,R),M+=3}c.addGroup(y,M,u===!0?1:2),y+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xa=class i extends Dr{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Dc=new D,Lc=new D,Gf=new D,Nc=new He,Mo=class extends Le{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),s=Math.cos(co*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],p=new Array(3),d={},g=[];for(let x=0;x<l;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);let{a:b,b:_,c:y}=Nc;if(b.fromBufferAttribute(a,c[0]),_.fromBufferAttribute(a,c[1]),y.fromBufferAttribute(a,c[2]),Nc.getNormal(Gf),p[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,p[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,p[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let w=0;w<3;w++){let m=(w+1)%3,u=p[w],v=p[m],h=Nc[f[w]],C=Nc[f[m]],M=`${u}_${v}`,S=`${v}_${u}`;S in d&&d[S]?(Gf.dot(d[S].normal)<=s&&(g.push(h.x,h.y,h.z),g.push(C.x,C.y,C.z)),d[S]=null):M in d||(d[M]={index0:c[w],index1:c[m],normal:Gf.clone()})}}for(let x in d)if(d[x]){let{index0:b,index1:_}=d[x];Dc.fromBufferAttribute(a,b),Lc.fromBufferAttribute(a,_),g.push(Dc.x,Dc.y,Dc.z),g.push(Lc.x,Lc.y,Lc.z)}this.setAttribute("position",new Te(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let f=n[r],d=n[r+1]-f,g=(o-f)/d;return(r+g)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new _t:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,r=[],s=[],o=[],a=new D,l=new Wt;for(let g=0;g<=t;g++){let x=g/t;r[g]=this.getTangentAt(x,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,f=Math.abs(r[0].x),p=Math.abs(r[0].y),d=Math.abs(r[0].z);f<=c&&(c=f,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=t;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(he(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(a,x))}o[g].crossVectors(r[g],s[g])}if(e===!0){let g=Math.acos(he(s[0].dot(s[t]),-1,1));g/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(g=-g);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],g*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},So=class extends ni{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new _t){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,g=c-this.aY;l=d*f-g*p+this.aX,c=d*p+g*f+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},eu=class extends So{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Td(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,p){let d=(o-s)/c-(a-s)/(c+f)+(a-o)/f,g=(a-o)/f-(l-o)/(f+p)+(l-a)/p;d*=f,g*=f,r(o,a,d,g)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var Bm=new D,Om=new D,Wf=new Td,Xf=new Td,qf=new Td,nu=class extends ni{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(Om.subVectors(r[0],r[1]).add(r[0]),c=Om);let p=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Bm.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Bm),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(p),g),b=Math.pow(p.distanceToSquared(d),g),_=Math.pow(d.distanceToSquared(f),g);b<1e-4&&(b=1),x<1e-4&&(x=b),_<1e-4&&(_=b),Wf.initNonuniformCatmullRom(c.x,p.x,d.x,f.x,x,b,_),Xf.initNonuniformCatmullRom(c.y,p.y,d.y,f.y,x,b,_),qf.initNonuniformCatmullRom(c.z,p.z,d.z,f.z,x,b,_)}else this.curveType==="catmullrom"&&(Wf.initCatmullRom(c.x,p.x,d.x,f.x,this.tension),Xf.initCatmullRom(c.y,p.y,d.y,f.y,this.tension),qf.initCatmullRom(c.z,p.z,d.z,f.z,this.tension));return n.set(Wf.calc(l),Xf.calc(l),qf.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function zm(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function ov(i,t){let e=1-i;return e*e*t}function av(i,t){return 2*(1-i)*i*t}function lv(i,t){return i*i*t}function Aa(i,t,e,n){return ov(i,t)+av(i,e)+lv(i,n)}function cv(i,t){let e=1-i;return e*e*e*t}function uv(i,t){let e=1-i;return 3*e*e*i*t}function hv(i,t){return 3*(1-i)*i*i*t}function fv(i,t){return i*i*i*t}function Ra(i,t,e,n,r){return cv(i,t)+uv(i,e)+hv(i,n)+fv(i,r)}var qa=class extends ni{constructor(t=new _t,e=new _t,n=new _t,r=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new _t){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ra(t,r.x,s.x,o.x,a.x),Ra(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},iu=class extends ni{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ra(t,r.x,s.x,o.x,a.x),Ra(t,r.y,s.y,o.y,a.y),Ra(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ya=class extends ni{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ru=class extends ni{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends ni{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Aa(t,r.x,s.x,o.x),Aa(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},su=class extends ni{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Aa(t,r.x,s.x,o.x),Aa(t,r.y,s.y,o.y),Aa(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return n.set(zm(a,l.x,c.x,f.x,p.x),zm(a,l.y,c.y,f.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new _t().fromArray(r))}return this}},td=Object.freeze({__proto__:null,ArcCurve:eu,CatmullRomCurve3:nu,CubicBezierCurve:qa,CubicBezierCurve3:iu,EllipseCurve:So,LineCurve:Ya,LineCurve3:ru,QuadraticBezierCurve:Za,QuadraticBezierCurve3:su,SplineCurve:$a}),ou=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new td[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let f=l[c];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new td[r.type]().fromJSON(r))}return this}},Ja=class extends ou{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ya(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new Za(this.currentPoint.clone(),new _t(t,e),new _t(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new qa(this.currentPoint.clone(),new _t(t,e),new _t(n,r),new _t(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $a(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+c,e+f,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){let c=new So(t,e,n,r,s,o,a,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Lr=class extends Ja{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Ja().fromJSON(r))}return this}};function dv(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Ng(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=_v(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let f=a,p=l;for(let d=e;d<r;d+=e){let g=i[d],x=i[d+1];g<a&&(a=g),x<l&&(l=x),g>f&&(f=g),x>p&&(p=x)}c=Math.max(f-a,p-l),c=c!==0?32767/c:0}return Ka(s,o,e,a,l,c,0),o}function Ng(i,t,e,n,r){let s;if(r===Cv(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Vm(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Vm(o/n|0,i[o],i[o+1],s);return s&&bo(s,s.next)&&(Qa(s),s=s.next),s}function ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bo(e,e.next)||sn(e.prev,e,e.next)===0)){if(Qa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ka(i,t,e,n,r,s,o){if(!i)return;!o&&s&&bv(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?mv(i,n,r,s):pv(i)){t.push(l.i,i.i,c.i),Qa(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=gv(ds(i),t),Ka(i,t,e,n,r,s,2)):o===2&&xv(i,t,e,n,r,s):Ka(ds(i),t,e,n,r,s,1);break}}}function pv(i){let t=i.prev,e=i,n=i.next;if(sn(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,f=Math.min(r,s,o),p=Math.min(a,l,c),d=Math.max(r,s,o),g=Math.max(a,l,c),x=n.next;for(;x!==t;){if(x.x>=f&&x.x<=d&&x.y>=p&&x.y<=g&&Ea(r,a,s,l,o,c,x.x,x.y)&&sn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function mv(i,t,e,n){let r=i.prev,s=i,o=i.next;if(sn(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,f=r.y,p=s.y,d=o.y,g=Math.min(a,l,c),x=Math.min(f,p,d),b=Math.max(a,l,c),_=Math.max(f,p,d),y=ed(g,x,t,e,n),w=ed(b,_,t,e,n),m=i.prevZ,u=i.nextZ;for(;m&&m.z>=y&&u&&u.z<=w;){if(m.x>=g&&m.x<=b&&m.y>=x&&m.y<=_&&m!==r&&m!==o&&Ea(a,f,l,p,c,d,m.x,m.y)&&sn(m.prev,m,m.next)>=0||(m=m.prevZ,u.x>=g&&u.x<=b&&u.y>=x&&u.y<=_&&u!==r&&u!==o&&Ea(a,f,l,p,c,d,u.x,u.y)&&sn(u.prev,u,u.next)>=0))return!1;u=u.nextZ}for(;m&&m.z>=y;){if(m.x>=g&&m.x<=b&&m.y>=x&&m.y<=_&&m!==r&&m!==o&&Ea(a,f,l,p,c,d,m.x,m.y)&&sn(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;u&&u.z<=w;){if(u.x>=g&&u.x<=b&&u.y>=x&&u.y<=_&&u!==r&&u!==o&&Ea(a,f,l,p,c,d,u.x,u.y)&&sn(u.prev,u,u.next)>=0)return!1;u=u.nextZ}return!0}function gv(i,t){let e=i;do{let n=e.prev,r=e.next.next;!bo(n,r)&&Fg(n,e,e.next,r)&&ja(n,r)&&ja(r,n)&&(t.push(n.i,e.i,r.i),Qa(e),Qa(e.next),e=i=r),e=e.next}while(e!==i);return ds(e)}function xv(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tv(o,a)){let l=Bg(o,a);o=ds(o,o.next),l=ds(l,l.next),Ka(o,t,e,n,r,s,0),Ka(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function _v(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Ng(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Ev(c))}r.sort(vv);for(let s=0;s<r.length;s++)e=yv(r[s],e);return e}function vv(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function yv(i,t){let e=Mv(i,t);if(!e)return t;let n=Bg(e,i);return ds(n,n.next),ds(e,e.next)}function Mv(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(bo(i,e))return e;do{if(bo(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let p=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>s&&(s=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,f=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ug(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let p=Math.abs(r-e.y)/(n-e.x);ja(e,i)&&(p<f||p===f&&(e.x>o.x||e.x===o.x&&Sv(o,e)))&&(o=e,f=p)}e=e.next}while(e!==a);return o}function Sv(i,t){return sn(i.prev,i,t.prev)<0&&sn(t.next,i,i.next)<0}function bv(i,t,e,n){let r=i;do r.z===0&&(r.z=ed(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,wv(r)}function wv(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function ed(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ev(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ug(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Ea(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Ug(i,t,e,n,r,s,o,a)}function Tv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Av(i,t)&&(ja(i,t)&&ja(t,i)&&Rv(i,t)&&(sn(i.prev,i,t.prev)||sn(i,t.prev,t))||bo(i,t)&&sn(i.prev,i,i.next)>0&&sn(t.prev,t,t.next)>0)}function sn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bo(i,t){return i.x===t.x&&i.y===t.y}function Fg(i,t,e,n){let r=Fc(sn(i,t,e)),s=Fc(sn(i,t,n)),o=Fc(sn(e,n,i)),a=Fc(sn(e,n,t));return!!(r!==s&&o!==a||r===0&&Uc(i,e,t)||s===0&&Uc(i,n,t)||o===0&&Uc(e,i,n)||a===0&&Uc(e,t,n))}function Uc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fc(i){return i>0?1:i<0?-1:0}function Av(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fg(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ja(i,t){return sn(i.prev,i,i.next)<0?sn(i,t,i.next)>=0&&sn(i,i.prev,t)>=0:sn(i,t,i.prev)<0||sn(i,i.next,t)<0}function Rv(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bg(i,t){let e=nd(i.i,i.x,i.y),n=nd(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Vm(i,t,e,n){let r=nd(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Qa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nd(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cv(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var id=class{static triangulate(t,e,n=2){return dv(t,e,n)}},Ii=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];km(t),Hm(n,t);let o=t.length;e.forEach(km);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Hm(n,e[l]);let a=id.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function km(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Hm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ps=class i extends Le{constructor(t=new Lr([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Te(r,3)),this.setAttribute("uv",new Te(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:g-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3,y=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Pv,m,u=!1,v,h,C,M;if(y){m=y.getSpacedPoints(f),u=!0,d=!1;let j=y.isCatmullRomCurve3?y.closed:!1;v=y.computeFrenetFrames(f,j),h=new D,C=new D,M=new D}d||(_=0,g=0,x=0,b=0);let S=a.extractPoints(c),E=S.shape,T=S.holes;if(!Ii.isClockWise(E)){E=E.reverse();for(let j=0,rt=T.length;j<rt;j++){let ot=T[j];Ii.isClockWise(ot)&&(T[j]=ot.reverse())}}function R(j){let ot=10000000000000001e-36,ht=j[0];for(let bt=1;bt<=j.length;bt++){let Pt=bt%j.length,Tt=j[Pt],Ut=Tt.x-ht.x,Ft=Tt.y-ht.y,H=Ut*Ut+Ft*Ft,de=Math.max(Math.abs(Tt.x),Math.abs(Tt.y),Math.abs(ht.x),Math.abs(ht.y)),qt=ot*de*de;if(H<=qt){j.splice(Pt,1),bt--;continue}ht=Tt}}R(E),T.forEach(R);let L=T.length,F=E;for(let j=0;j<L;j++){let rt=T[j];E=E.concat(rt)}function O(j,rt,ot){return rt||se("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(rt,ot)}let V=E.length;function $(j,rt,ot){let ht,bt,Pt,Tt=j.x-rt.x,Ut=j.y-rt.y,Ft=ot.x-j.x,H=ot.y-j.y,de=Tt*Tt+Ut*Ut,qt=Tt*H-Ut*Ft;if(Math.abs(qt)>Number.EPSILON){let B=Math.sqrt(de),P=Math.sqrt(Ft*Ft+H*H),X=rt.x-Ut/B,K=rt.y+Tt/B,it=ot.x-H/P,St=ot.y+Ft/P,At=((it-X)*H-(St-K)*Ft)/(Tt*H-Ut*Ft);ht=X+Tt*At-j.x,bt=K+Ut*At-j.y;let at=ht*ht+bt*bt;if(at<=2)return new _t(ht,bt);Pt=Math.sqrt(at/2)}else{let B=!1;Tt>Number.EPSILON?Ft>Number.EPSILON&&(B=!0):Tt<-Number.EPSILON?Ft<-Number.EPSILON&&(B=!0):Math.sign(Ut)===Math.sign(H)&&(B=!0),B?(ht=-Ut,bt=Tt,Pt=Math.sqrt(de)):(ht=Tt,bt=Ut,Pt=Math.sqrt(de/2))}return new _t(ht/Pt,bt/Pt)}let k=[];for(let j=0,rt=F.length,ot=rt-1,ht=j+1;j<rt;j++,ot++,ht++)ot===rt&&(ot=0),ht===rt&&(ht=0),k[j]=$(F[j],F[ot],F[ht]);let tt=[],q,ct=k.concat();for(let j=0,rt=L;j<rt;j++){let ot=T[j];q=[];for(let ht=0,bt=ot.length,Pt=bt-1,Tt=ht+1;ht<bt;ht++,Pt++,Tt++)Pt===bt&&(Pt=0),Tt===bt&&(Tt=0),q[ht]=$(ot[ht],ot[Pt],ot[Tt]);tt.push(q),ct=ct.concat(q)}let ut;if(_===0)ut=Ii.triangulateShape(F,T);else{let j=[],rt=[];for(let ot=0;ot<_;ot++){let ht=ot/_,bt=g*Math.cos(ht*Math.PI/2),Pt=x*Math.sin(ht*Math.PI/2)+b;for(let Tt=0,Ut=F.length;Tt<Ut;Tt++){let Ft=O(F[Tt],k[Tt],Pt);lt(Ft.x,Ft.y,-bt),ht===0&&j.push(Ft)}for(let Tt=0,Ut=L;Tt<Ut;Tt++){let Ft=T[Tt];q=tt[Tt];let H=[];for(let de=0,qt=Ft.length;de<qt;de++){let B=O(Ft[de],q[de],Pt);lt(B.x,B.y,-bt),ht===0&&H.push(B)}ht===0&&rt.push(H)}}ut=Ii.triangulateShape(j,rt)}let Et=ut.length,Mt=x+b;for(let j=0;j<V;j++){let rt=d?O(E[j],ct[j],Mt):E[j];u?(C.copy(v.normals[0]).multiplyScalar(rt.x),h.copy(v.binormals[0]).multiplyScalar(rt.y),M.copy(m[0]).add(C).add(h),lt(M.x,M.y,M.z)):lt(rt.x,rt.y,0)}for(let j=1;j<=f;j++)for(let rt=0;rt<V;rt++){let ot=d?O(E[rt],ct[rt],Mt):E[rt];u?(C.copy(v.normals[j]).multiplyScalar(ot.x),h.copy(v.binormals[j]).multiplyScalar(ot.y),M.copy(m[j]).add(C).add(h),lt(M.x,M.y,M.z)):lt(ot.x,ot.y,p/f*j)}for(let j=_-1;j>=0;j--){let rt=j/_,ot=g*Math.cos(rt*Math.PI/2),ht=x*Math.sin(rt*Math.PI/2)+b;for(let bt=0,Pt=F.length;bt<Pt;bt++){let Tt=O(F[bt],k[bt],ht);lt(Tt.x,Tt.y,p+ot)}for(let bt=0,Pt=T.length;bt<Pt;bt++){let Tt=T[bt];q=tt[bt];for(let Ut=0,Ft=Tt.length;Ut<Ft;Ut++){let H=O(Tt[Ut],q[Ut],ht);u?lt(H.x,H.y+m[f-1].y,m[f-1].x+ot):lt(H.x,H.y,p+ot)}}}kt(),N();function kt(){let j=r.length/3;if(d){let rt=0,ot=V*rt;for(let ht=0;ht<Et;ht++){let bt=ut[ht];vt(bt[2]+ot,bt[1]+ot,bt[0]+ot)}rt=f+_*2,ot=V*rt;for(let ht=0;ht<Et;ht++){let bt=ut[ht];vt(bt[0]+ot,bt[1]+ot,bt[2]+ot)}}else{for(let rt=0;rt<Et;rt++){let ot=ut[rt];vt(ot[2],ot[1],ot[0])}for(let rt=0;rt<Et;rt++){let ot=ut[rt];vt(ot[0]+V*f,ot[1]+V*f,ot[2]+V*f)}}n.addGroup(j,r.length/3-j,0)}function N(){let j=r.length/3,rt=0;Q(F,rt),rt+=F.length;for(let ot=0,ht=T.length;ot<ht;ot++){let bt=T[ot];Q(bt,rt),rt+=bt.length}n.addGroup(j,r.length/3-j,1)}function Q(j,rt){let ot=j.length;for(;--ot>=0;){let ht=ot,bt=ot-1;bt<0&&(bt=j.length-1);for(let Pt=0,Tt=f+_*2;Pt<Tt;Pt++){let Ut=V*Pt,Ft=V*(Pt+1),H=rt+ht+Ut,de=rt+bt+Ut,qt=rt+bt+Ft,B=rt+ht+Ft;st(H,de,qt,B)}}}function lt(j,rt,ot){l.push(j),l.push(rt),l.push(ot)}function vt(j,rt,ot){dt(j),dt(rt),dt(ot);let ht=r.length/3,bt=w.generateTopUV(n,r,ht-3,ht-2,ht-1);Bt(bt[0]),Bt(bt[1]),Bt(bt[2])}function st(j,rt,ot,ht){dt(j),dt(rt),dt(ht),dt(rt),dt(ot),dt(ht);let bt=r.length/3,Pt=w.generateSideWallUV(n,r,bt-6,bt-3,bt-2,bt-1);Bt(Pt[0]),Bt(Pt[1]),Bt(Pt[3]),Bt(Pt[1]),Bt(Pt[2]),Bt(Pt[3])}function dt(j){r.push(l[j*3+0]),r.push(l[j*3+1]),r.push(l[j*3+2])}function Bt(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Iv(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new td[r.type]().fromJSON(r)),new i(n,t.options)}},Pv={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],f=t[r*3+1];return[new _t(s,o),new _t(a,l),new _t(c,f)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],f=t[n*3+1],p=t[n*3+2],d=t[r*3],g=t[r*3+1],x=t[r*3+2],b=t[s*3],_=t[s*3+1],y=t[s*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new _t(o,1-l),new _t(c,1-p),new _t(d,1-x),new _t(b,1-y)]:[new _t(a,1-l),new _t(f,1-p),new _t(g,1-x),new _t(_,1-y)]}};function Iv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var mi=class i extends Le{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,f=l+1,p=t/a,d=e/l,g=[],x=[],b=[],_=[];for(let y=0;y<f;y++){let w=y*d-o;for(let m=0;m<c;m++){let u=m*p-s;x.push(u,-w,0),b.push(0,0,1),_.push(m/a),_.push(1-y/l)}}for(let y=0;y<l;y++)for(let w=0;w<a;w++){let m=w+c*y,u=w+c*(y+1),v=w+1+c*(y+1),h=w+1+c*y;g.push(m,u,h),g.push(u,v,h)}this.setIndex(g),this.setAttribute("position",new Te(x,3)),this.setAttribute("normal",new Te(b,3)),this.setAttribute("uv",new Te(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var tl=class i extends Le{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,f=[],p=new D,d=new D,g=[],x=[],b=[],_=[];for(let y=0;y<=n;y++){let w=[],m=y/n,u=o+m*a,v=t*Math.cos(u),h=Math.sqrt(t*t-v*v),C=0;y===0&&o===0?C=.5/e:y===n&&l===Math.PI&&(C=-.5/e);for(let M=0;M<=e;M++){let S=M/e,E=r+S*s;p.x=-h*Math.cos(E),p.y=v,p.z=h*Math.sin(E),x.push(p.x,p.y,p.z),d.copy(p).normalize(),b.push(d.x,d.y,d.z),_.push(S+C,1-m),w.push(c++)}f.push(w)}for(let y=0;y<n;y++)for(let w=0;w<e;w++){let m=f[y][w+1],u=f[y][w],v=f[y+1][w],h=f[y+1][w+1];(y!==0||o>0)&&g.push(m,u,h),(y!==n-1||l<Math.PI)&&g.push(u,v,h)}this.setIndex(g),this.setAttribute("position",new Te(x,3)),this.setAttribute("normal",new Te(b,3)),this.setAttribute("uv",new Te(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var el=class extends Le{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,r=new D,s=new D;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,f=l.length;c<f;++c){let p=l[c],d=p.start,g=p.count;for(let x=d,b=d+g;x<b;x+=3)for(let _=0;_<3;_++){let y=a.getX(x+_),w=a.getX(x+(_+1)%3);r.fromBufferAttribute(o,y),s.fromBufferAttribute(o,w),Gm(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let f=3*a+c,p=3*a+(c+1)%3;r.fromBufferAttribute(o,f),s.fromBufferAttribute(o,p),Gm(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new Te(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Gm(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}var wo=class extends di{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Qt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function xs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Wm(r))r.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Wm(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function On(i){let t={};for(let e=0;e<i.length;e++){let n=xs(i[e]);for(let r in n)t[r]=n[r]}return t}function Wm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ad(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var Gn={clone:xs,merge:On},Lv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lv,this.fragmentShader=Nv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Dv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(r.value);break;case"v2":this.uniforms[n].value=new _t().fromArray(r.value);break;case"v3":this.uniforms[n].value=new D().fromArray(r.value);break;case"v4":this.uniforms[n].value=new _e().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ce().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Wt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Eo=class extends Oe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gi=class extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},gr=class extends gi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var nl=class extends di{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},il=class extends di{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=bu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},au=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},lu=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ro(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Yf(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Nr=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},cu=class extends Nr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kf,endingEnd:Kf}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case jf:s=t,a=2*e-n;break;case Qf:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jf:o=t,l=2*n-e;break;case Qf:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,g=this._weightNext,x=(n-e)/(r-e),b=x*x,_=b*x,y=-d*_+2*d*b-d*x,w=(1+d)*_+(-1.5-2*d)*b+(-.5+d)*x+1,m=(-1-g)*_+(1.5+g)*b+.5*x,u=g*_-g*b;for(let v=0;v!==a;++v)s[v]=y*o[f+v]+w*o[c+v]+m*o[l+v]+u*o[p+v];return s}},uu=class extends Nr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(n-e)/(r-e),p=1-f;for(let d=0;d!==a;++d)s[d]=o[c+d]*p+o[l+d]*f;return s}},hu=class extends Nr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},fu=class extends Nr{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this.inTangents,p=this.outTangents;if(!f||!p){let x=(n-e)/(r-e),b=1-x;for(let _=0;_!==a;++_)s[_]=o[c+_]*b+o[l+_]*x;return s}let d=a*2,g=t-1;for(let x=0;x!==a;++x){let b=o[c+x],_=o[l+x],y=g*d+x*2,w=p[y],m=p[y+1],u=t*d+x*2,v=f[u],h=f[u+1],C=Fv(n,e,w,v,r);s[x]=Og(C,b,m,h,_)}return s}};function Og(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function Uv(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function Fv(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=Og(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=Uv(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var ii=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ro(e,this.TimeBufferType),this.values=ro(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ro(t.times,Array),values:ro(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Yf(t.settings)&&(n.settings={inTangents:ro(t.settings.inTangents,Array),outTangents:ro(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ca:e=this.InterpolantFactoryMethodDiscrete;break;case Jc:e=this.InterpolantFactoryMethodLinear;break;case Vc:e=this.InterpolantFactoryMethodSmooth;break;case Jf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return Jc;case this.InterpolantFactoryMethodSmooth:return Vc;case this.InterpolantFactoryMethodBezier:return Jf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Yf(this.settings)&&(Xm(this.settings.inTangents,t),Xm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(se("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(se("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){se("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){se("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&w_(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){se("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Vc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(r)l=!0;else{let p=a*n,d=p-n,g=p+n;for(let x=0;x!==n;++x){let b=e[p+x];if(b!==e[d+x]||b!==e[g+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let p=a*n,d=o*n;for(let g=0;g!==n;++g)e[d+g]=e[p+g]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Yf(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Xm(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Jc;var Ur=class extends ii{constructor(t,e,n){super(t,e,n)}};Ur.prototype.ValueTypeName="bool";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=Ca;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var du=class extends ii{constructor(t,e,n,r){super(t,e,n,r)}};du.prototype.ValueTypeName="color";var pu=class extends ii{constructor(t,e,n,r){super(t,e,n,r)}};pu.prototype.ValueTypeName="number";var mu=class extends Nr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let f=c+a;c!==f;c+=4)Bn.slerpFlat(s,0,o,c-a,o,c,l);return s}},rl=class extends ii{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new mu(this.times,this.values,this.getValueSize(),t)}};rl.prototype.ValueTypeName="quaternion";rl.prototype.InterpolantFactoryMethodSmooth=void 0;var Fr=class extends ii{constructor(t,e,n){super(t,e,n)}};Fr.prototype.ValueTypeName="string";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=Ca;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var gu=class extends ii{constructor(t,e,n,r){super(t,e,n,r)}};gu.prototype.ValueTypeName="vector";var xu=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,d=c.length;p<d;p+=2){let g=c[p],x=c[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zg=new xu,_u=class{constructor(t){this.manager=t!==void 0?t:zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_u.DEFAULT_MATERIAL_NAME="__DEFAULT";var To=class extends Mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ao=class extends To{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Zf=new Wt,qm=new D,Ym=new D,sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;qm.setFromMatrixPosition(t.matrixWorld),e.position.copy(qm),Ym.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ym),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,r){Zf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Zf,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;t.coordinateSystem===fo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Zf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Bc=new D,Oc=new Bn,qi=new D,ol=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bc,Oc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Oc,qi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Bc,Oc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Oc,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pr=new D,Zm=new _t,$m=new _t,Tn=class extends ol{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pr.x,Pr.y).multiplyScalar(-t/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-t/Pr.z)}getViewSize(t,e){return this.getViewBounds(t,Zm,$m),e.subVectors($m,Zm)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(co*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var rd=class extends sl{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0}},al=class extends To{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new rd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Br=class extends ol{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},sd=class extends sl{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Or=class extends To{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new sd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ll=class extends Le{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var so=-90,oo=1,vu=class extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Tn(so,oo,t,e);r.layers=this.layers,this.add(r);let s=new Tn(so,oo,t,e);s.layers=this.layers,this.add(s);let o=new Tn(so,oo,t,e);o.layers=this.layers,this.add(o);let a=new Tn(so,oo,t,e);a.layers=this.layers,this.add(a);let l=new Tn(so,oo,t,e);l.layers=this.layers,this.add(l);let c=new Tn(so,oo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,f]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(p,d,g),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},yu=class extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},cl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Bv.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Bv(){this._document.hidden===!1&&this.reset()}var Rd="\\[\\]\\.:\\/",Ov=new RegExp("["+Rd+"]","g"),Cd="[^"+Rd+"]",zv="[^"+Rd.replace("\\.","")+"]",Vv=/((?:WC+[\/:])*)/.source.replace("WC",Cd),kv=/(WCOD+)?/.source.replace("WCOD",zv),Hv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cd),Gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cd),Wv=new RegExp("^"+Vv+kv+Hv+Gv+"$"),Xv=["material","materials","bones","map"],od=class{constructor(t,e,n){let r=n||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},je=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ov,"")}static parseTrackName(t){let e=Wv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Xv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){se("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){se("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){se("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){se("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){se("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){se("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;se("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){se("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=od;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FE=new Float32Array(1);var zr=class extends Oa{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Jm=new Wt,ul=class{constructor(t,e,n=0,r=1/0){this.ray=new Di(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jm),this}intersectObject(t,e=!0,n=[]){return ad(t,this,n,e),n.sort(Km),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)ad(t[r],this,n,e);return n.sort(Km),n}};function Km(i,t){return i.distance-t.distance}function ad(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)ad(s[o],t,e,!0)}}var Ud=class Ud{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Ud.prototype.isMatrix2=!0;var ld=Ud;var jm=new D,zc=new D,ao=new D,lo=new D,$f=new D,qv=new D,Yv=new D,ze=class{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){jm.subVectors(t,this.start),zc.subVectors(this.end,this.start);let n=zc.dot(zc);if(n===0)return 0;let s=zc.dot(jm)/n;return e&&(s=he(s,0,1)),s}closestPointToPoint(t,e,n){let r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=qv,n=Yv){let r=10000000000000001e-32,s,o,a=this.start,l=t.start,c=this.end,f=t.end;ao.subVectors(c,a),lo.subVectors(f,l),$f.subVectors(a,l);let p=ao.dot(ao),d=lo.dot(lo),g=lo.dot($f);if(p<=r&&d<=r)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(p<=r)s=0,o=g/d,o=he(o,0,1);else{let x=ao.dot($f);if(d<=r)o=0,s=he(-x/p,0,1);else{let b=ao.dot(lo),_=p*d-b*b;_!==0?s=he((b*g-x*d)/_,0,1):s=0,o=(b*s+g)/d,o<0?(o=0,s=he(-x/p,0,1)):o>1&&(o=1,s=he((b-x)/p,0,1))}}return e.copy(a).addScaledVector(ao,s),n.copy(l).addScaledVector(lo,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Pd(i,t,e,n){let r=Zv(n);switch(e){case yd:return i*t;case Pu:return i*t/r.components*r.byteLength;case Iu:return i*t/r.components*r.byteLength;case qr:return i*t*2/r.components*r.byteLength;case Du:return i*t*2/r.components*r.byteLength;case Md:return i*t*3/r.components*r.byteLength;case Yn:return i*t*4/r.components*r.byteLength;case Lu:return i*t*4/r.components*r.byteLength;case Ml:case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bl:case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uu:case Bu:return Math.max(i,16)*Math.max(t,8)/4;case Nu:case Fu:return Math.max(i,8)*Math.max(t,8)/2;case Ou:case zu:case ku:case Hu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vu:case El:case Gu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $u:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ju:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ku:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ju:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case th:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case eh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ih:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rh:case sh:case oh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ah:case lh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Tl:case ch:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zv(i){switch(i){case xn:case gd:return{byteLength:1,components:1};case Co:case xd:case Sn:return{byteLength:2,components:1};case Ru:case Cu:return{byteLength:2,components:4};case Ni:case Au:case _i:return{byteLength:4,components:1};case _d:case vd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function a0(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function $v(i){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,f),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let f=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,f);else{p.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<p.length;g++){let x=p[d],b=p[g];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++d,p[d]=b)}p.length=d+1;for(let g=0,x=p.length;g<x;g++){let b=p[g];i.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Jv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kv=`#ifdef USE_ALPHAHASH
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
#endif`,jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
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
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ry=`#ifdef USE_BATCHING
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
#endif`,sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ly=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cy=`#ifdef USE_IRIDESCENCE
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
#endif`,uy=`#ifdef USE_BUMPMAP
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
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vy=`#define PI 3.141592653589793
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
} // validated`,yy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,My=`vec3 transformedNormal = objectNormal;
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
#endif`,Sy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,By=`#ifdef USE_GRADIENTMAP
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
}`,Oy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ky=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yy=`PhysicalMaterial material;
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
#endif`,Zy=`uniform sampler2D dfgLUT;
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
}`,$y=`
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
#endif`,Jy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oM=`#if defined( USE_POINTS_UV )
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
#endif`,aM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`#ifdef USE_MORPHTARGETS
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
#endif`,dM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vM=`#ifdef USE_NORMALMAP
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
#endif`,yM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UM=`float getShadowMask() {
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
}`,FM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BM=`#ifdef USE_SKINNING
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
#endif`,OM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zM=`#ifdef USE_SKINNING
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
#endif`,VM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WM=`#ifdef USE_TRANSMISSION
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
#endif`,XM=`#ifdef USE_TRANSMISSION
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
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,JM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KM=`uniform sampler2D t2D;
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
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`#include <common>
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
}`,iS=`#if DEPTH_PACKING == 3200
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
}`,rS=`#define DISTANCE
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
}`,sS=`#define DISTANCE
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
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`uniform float scale;
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
}`,cS=`uniform vec3 diffuse;
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
}`,uS=`#include <common>
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
}`,hS=`uniform vec3 diffuse;
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
}`,fS=`#define LAMBERT
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
}`,dS=`#define LAMBERT
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
}`,pS=`#define MATCAP
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
}`,mS=`#define MATCAP
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
}`,gS=`#define NORMAL
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
}`,xS=`#define NORMAL
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
}`,_S=`#define PHONG
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
}`,vS=`#define PHONG
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
}`,yS=`#define STANDARD
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
}`,MS=`#define STANDARD
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
}`,SS=`#define TOON
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
}`,bS=`#define TOON
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
}`,wS=`uniform float size;
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
}`,ES=`uniform vec3 diffuse;
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
}`,TS=`#include <common>
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
}`,AS=`uniform vec3 color;
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
}`,RS=`uniform float rotation;
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
}`,CS=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:Jv,alphahash_pars_fragment:Kv,alphamap_fragment:jv,alphamap_pars_fragment:Qv,alphatest_fragment:ty,alphatest_pars_fragment:ey,aomap_fragment:ny,aomap_pars_fragment:iy,batching_pars_vertex:ry,batching_vertex:sy,begin_vertex:oy,beginnormal_vertex:ay,bsdfs:ly,iridescence_fragment:cy,bumpmap_pars_fragment:uy,clipping_planes_fragment:hy,clipping_planes_pars_fragment:fy,clipping_planes_pars_vertex:dy,clipping_planes_vertex:py,color_fragment:my,color_pars_fragment:gy,color_pars_vertex:xy,color_vertex:_y,common:vy,cube_uv_reflection_fragment:yy,defaultnormal_vertex:My,displacementmap_pars_vertex:Sy,displacementmap_vertex:by,emissivemap_fragment:wy,emissivemap_pars_fragment:Ey,colorspace_fragment:Ty,colorspace_pars_fragment:Ay,envmap_fragment:Ry,envmap_common_pars_fragment:Cy,envmap_pars_fragment:Py,envmap_pars_vertex:Iy,envmap_physical_pars_fragment:Hy,envmap_vertex:Dy,fog_vertex:Ly,fog_pars_vertex:Ny,fog_fragment:Uy,fog_pars_fragment:Fy,gradientmap_pars_fragment:By,lightmap_pars_fragment:Oy,lights_lambert_fragment:zy,lights_lambert_pars_fragment:Vy,lights_pars_begin:ky,lights_toon_fragment:Gy,lights_toon_pars_fragment:Wy,lights_phong_fragment:Xy,lights_phong_pars_fragment:qy,lights_physical_fragment:Yy,lights_physical_pars_fragment:Zy,lights_fragment_begin:$y,lights_fragment_maps:Jy,lights_fragment_end:Ky,lightprobes_pars_fragment:jy,logdepthbuf_fragment:Qy,logdepthbuf_pars_fragment:tM,logdepthbuf_pars_vertex:eM,logdepthbuf_vertex:nM,map_fragment:iM,map_pars_fragment:rM,map_particle_fragment:sM,map_particle_pars_fragment:oM,metalnessmap_fragment:aM,metalnessmap_pars_fragment:lM,morphinstance_vertex:cM,morphcolor_vertex:uM,morphnormal_vertex:hM,morphtarget_pars_vertex:fM,morphtarget_vertex:dM,normal_fragment_begin:pM,normal_fragment_maps:mM,normal_pars_fragment:gM,normal_pars_vertex:xM,normal_vertex:_M,normalmap_pars_fragment:vM,clearcoat_normal_fragment_begin:yM,clearcoat_normal_fragment_maps:MM,clearcoat_pars_fragment:SM,iridescence_pars_fragment:bM,opaque_fragment:wM,packing:EM,premultiplied_alpha_fragment:TM,project_vertex:AM,dithering_fragment:RM,dithering_pars_fragment:CM,roughnessmap_fragment:PM,roughnessmap_pars_fragment:IM,shadowmap_pars_fragment:DM,shadowmap_pars_vertex:LM,shadowmap_vertex:NM,shadowmask_pars_fragment:UM,skinbase_vertex:FM,skinning_pars_vertex:BM,skinning_vertex:OM,skinnormal_vertex:zM,specularmap_fragment:VM,specularmap_pars_fragment:kM,tonemapping_fragment:HM,tonemapping_pars_fragment:GM,transmission_fragment:WM,transmission_pars_fragment:XM,uv_pars_fragment:qM,uv_pars_vertex:YM,uv_vertex:ZM,worldpos_vertex:$M,background_vert:JM,background_frag:KM,backgroundCube_vert:jM,backgroundCube_frag:QM,cube_vert:tS,cube_frag:eS,depth_vert:nS,depth_frag:iS,distance_vert:rS,distance_frag:sS,equirect_vert:oS,equirect_frag:aS,linedashed_vert:lS,linedashed_frag:cS,meshbasic_vert:uS,meshbasic_frag:hS,meshlambert_vert:fS,meshlambert_frag:dS,meshmatcap_vert:pS,meshmatcap_frag:mS,meshnormal_vert:gS,meshnormal_frag:xS,meshphong_vert:_S,meshphong_frag:vS,meshphysical_vert:yS,meshphysical_frag:MS,meshtoon_vert:SS,meshtoon_frag:bS,points_vert:wS,points_frag:ES,shadow_vert:TS,shadow_frag:AS,sprite_vert:RS,sprite_frag:CS},Nt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Wn={basic:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:On([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:On([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:On([Nt.points,Nt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:On([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:On([Nt.common,Nt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:On([Nt.sprite,Nt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:On([Nt.common,Nt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:On([Nt.lights,Nt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Wn.physical={uniforms:On([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};var fh={r:0,b:0,g:0},PS=new Wt,l0=new ce;l0.set(-1,0,0,0,1,0,0,0,1);function IS(i,t,e,n,r,s){let o=new Qt(0),a=r===!0?0:1,l,c,f=null,p=0,d=null;function g(w){let m=w.isScene===!0?w.background:null;if(m&&m.isTexture){let u=w.backgroundBlurriness>0;m=t.get(m,u)}return m}function x(w){let m=!1,u=g(w);u===null?_(o,a):u&&u.isColor&&(_(u,1),m=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||m)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(w,m){let u=g(m);u&&(u.isCubeTexture||u.mapping===vl)?(c===void 0&&(c=new ae(new Ir(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:xs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,h,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=u,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(PS.makeRotationFromEuler(m.backgroundRotation)).transpose(),u.isCubeTexture&&u.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(l0),c.material.toneMapped=xe.getTransfer(u.colorSpace)!==Pe,(f!==u||p!==u.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=u,p=u.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):u&&u.isTexture&&(l===void 0&&(l=new ae(new mi(2,2),new Oe({name:"BackgroundMaterial",uniforms:xs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=u,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=xe.getTransfer(u.colorSpace)!==Pe,u.matrixAutoUpdate===!0&&u.updateMatrix(),l.material.uniforms.uvTransform.value.copy(u.matrix),(f!==u||p!==u.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=u,p=u.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function _(w,m){w.getRGB(fh,Ad(i)),e.buffers.color.setClear(fh.r,fh.g,fh.b,m,s)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,m=1){o.set(w),a=m,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,_(o,a)},render:x,addToRenderList:b,dispose:y}}function DS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(T,A,R,L,F){let O=!1,V=p(T,L,R,A);s!==V&&(s=V,c(s.object)),O=g(T,L,R,F),O&&x(T,L,R,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,u(T,A,R,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function f(T){return i.deleteVertexArray(T)}function p(T,A,R,L){let F=L.wireframe===!0,O=n[A.id];O===void 0&&(O={},n[A.id]=O);let V=T.isInstancedMesh===!0?T.id:0,$=O[V];$===void 0&&($={},O[V]=$);let k=$[R.id];k===void 0&&(k={},$[R.id]=k);let tt=k[F];return tt===void 0&&(tt=d(l()),k[F]=tt),tt}function d(T){let A=[],R=[],L=[];for(let F=0;F<e;F++)A[F]=0,R[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:R,attributeDivisors:L,object:T,attributes:{},index:null}}function g(T,A,R,L){let F=s.attributes,O=A.attributes,V=0,$=R.getAttributes();for(let k in $)if($[k].location>=0){let q=F[k],ct=O[k];if(ct===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(ct=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(ct=T.instanceColor)),q===void 0||q.attribute!==ct||ct&&q.data!==ct.data)return!0;V++}return s.attributesNum!==V||s.index!==L}function x(T,A,R,L){let F={},O=A.attributes,V=0,$=R.getAttributes();for(let k in $)if($[k].location>=0){let q=O[k];q===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(q=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(q=T.instanceColor));let ct={};ct.attribute=q,q&&q.data&&(ct.data=q.data),F[k]=ct,V++}s.attributes=F,s.attributesNum=V,s.index=L}function b(){let T=s.newAttributes;for(let A=0,R=T.length;A<R;A++)T[A]=0}function _(T){y(T,0)}function y(T,A){let R=s.newAttributes,L=s.enabledAttributes,F=s.attributeDivisors;R[T]=1,L[T]===0&&(i.enableVertexAttribArray(T),L[T]=1),F[T]!==A&&(i.vertexAttribDivisor(T,A),F[T]=A)}function w(){let T=s.newAttributes,A=s.enabledAttributes;for(let R=0,L=A.length;R<L;R++)A[R]!==T[R]&&(i.disableVertexAttribArray(R),A[R]=0)}function m(T,A,R,L,F,O,V){V===!0?i.vertexAttribIPointer(T,A,R,F,O):i.vertexAttribPointer(T,A,R,L,F,O)}function u(T,A,R,L){b();let F=L.attributes,O=R.getAttributes(),V=A.defaultAttributeValues;for(let $ in O){let k=O[$];if(k.location>=0){let tt=F[$];if(tt===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(tt=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(tt=T.instanceColor)),tt!==void 0){let q=tt.normalized,ct=tt.itemSize,ut=t.get(tt);if(ut===void 0)continue;let Et=ut.buffer,Mt=ut.type,kt=ut.bytesPerElement,N=Mt===i.INT||Mt===i.UNSIGNED_INT||tt.gpuType===Au;if(tt.isInterleavedBufferAttribute){let Q=tt.data,lt=Q.stride,vt=tt.offset;if(Q.isInstancedInterleavedBuffer){for(let st=0;st<k.locationSize;st++)y(k.location+st,Q.meshPerAttribute);T.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let st=0;st<k.locationSize;st++)_(k.location+st);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let st=0;st<k.locationSize;st++)m(k.location+st,ct/k.locationSize,Mt,q,lt*kt,(vt+ct/k.locationSize*st)*kt,N)}else{if(tt.isInstancedBufferAttribute){for(let Q=0;Q<k.locationSize;Q++)y(k.location+Q,tt.meshPerAttribute);T.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Q=0;Q<k.locationSize;Q++)_(k.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Q=0;Q<k.locationSize;Q++)m(k.location+Q,ct/k.locationSize,Mt,q,ct*kt,ct/k.locationSize*Q*kt,N)}}else if(V!==void 0){let q=V[$];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(k.location,q);break;case 3:i.vertexAttrib3fv(k.location,q);break;case 4:i.vertexAttrib4fv(k.location,q);break;default:i.vertexAttrib1fv(k.location,q)}}}}w()}function v(){S();for(let T in n){let A=n[T];for(let R in A){let L=A[R];for(let F in L){let O=L[F];for(let V in O)f(O[V].object),delete O[V];delete L[F]}}delete n[T]}}function h(T){if(n[T.id]===void 0)return;let A=n[T.id];for(let R in A){let L=A[R];for(let F in L){let O=L[F];for(let V in O)f(O[V].object),delete O[V];delete L[F]}}delete n[T.id]}function C(T){for(let A in n){let R=n[A];for(let L in R){let F=R[L];if(F[T.id]===void 0)continue;let O=F[T.id];for(let V in O)f(O[V].object),delete O[V];delete F[T.id]}}}function M(T){for(let A in n){let R=n[A],L=T.isInstancedMesh===!0?T.id:0,F=R[L];if(F!==void 0){for(let O in F){let V=F[O];for(let $ in V)f(V[$].object),delete V[$];delete F[O]}delete R[L],Object.keys(R).length===0&&delete n[A]}}}function S(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:E,dispose:v,releaseStatesOfGeometry:h,releaseStatesOfObject:M,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:_,disableUnusedAttributes:w}}function LS(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function a(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let d=0;for(let g=0;g<f;g++)d+=c[g];e.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function NS(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Yn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let M=C===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==xn&&C!==_i&&!M&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(oe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),u=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),h=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:w,maxVaryings:m,maxFragmentUniforms:u,maxSamples:v,samples:h}}function US(i){let t=this,e=null,n=0,r=!1,s=!1,o=new yn,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let g=p.length!==0||d||n!==0||r;return r=d,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){e=f(p,d,0)},this.setState=function(p,d,g){let x=p.clippingPlanes,b=p.clipIntersection,_=p.clipShadows,y=i.get(p);if(!r||x===null||x.length===0||s&&!_)s?f(null):c();else{let w=s?0:n,m=w*4,u=y.clippingState||null;l.value=u,u=f(x,d,m,g);for(let v=0;v!==m;++v)u[v]=e[v];y.clippingState=u,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(p,d,g,x){let b=p!==null?p.length:0,_=null;if(b!==0){if(_=l.value,x!==!0||_===null){let y=g+b*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(_===null||_.length<y)&&(_=new Float32Array(y));for(let m=0,u=g;m!==b;++m,u+=4)o.copy(p[m]).applyMatrix4(w,a),o.normal.toArray(_,u),_[u+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,_}}var Do=4,FS=6,BS=20,OS=256,Al=new Br,Vg=new Qt,Fd=null,Bd=0,Od=0,zd=!1,zS=new D,_s=new D,vs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=zS}=s;Fd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fd,Bd,Od),this._renderer.xr.enabled=zd,t.scissorTest=!1,Io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gr||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fd=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Sn,format:Yn,colorSpace:Pa,depthBuffer:!1},r=kg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=VS(s)),this._blurMaterial=HS(s,t,e),this._ggxMaterial=kS(s,t,e)}return r}_compileMaterial(t){let e=new ae(new Le,t);this._renderer.compile(e,Al)}_sceneToCubeUV(t,e,n,r,s){let l=new Tn(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,g=p.toneMapping;p.getClearColor(Vg),p.toneMapping=Li,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new Ir,new pi({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,_=b.material,y=!1,w=t.background;w?w.isColor&&(_.color.copy(w),t.background=null,y=!0):(_.color.copy(Vg),y=!0);for(let m=0;m<6;m++){let u=m%3;u===0?(l.up.set(0,c[m],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[m],s.y,s.z)):u===1?(l.up.set(0,0,c[m]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[m],s.z)):(l.up.set(0,c[m],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[m]));let v=this._cubeSize;Io(r,u*v,m>2?v:0,v,v),p.setRenderTarget(r),y&&p.render(b,l),p.render(t,l)}p.toneMapping=g,p.autoClear=d,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Gr||t.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hg());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Io(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Al)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),d=c*1.25,g=p*d,{_lodMax:x}=this,b=this._sizeLods[n],_=3*b*(n>x-Do?n-x+Do:0),y=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=x-e,Io(s,_,y,3*b,2*b),r.setRenderTarget(s),r.render(a,Al),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,Io(t,_,y,3*b,2*b),r.setRenderTarget(t),r.render(a,Al)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let f=this._sizeLods[r],p=3*f*(r>this._lodMax-Do?r-this._lodMax+Do:0),d=4*(this._cubeSize-f);Io(e,p,d,3*f,2*f),o.setRenderTarget(e),o.render(l,Al)}};function VS(i){let t=[],e=[],n=i,r=i-Do+1+FS;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,d=6,g=3,x=new Float32Array(g*d*p),b=new Float32Array(g*d*p);for(let y=0;y<p;y++){let w=y%3*2/3-1,m=y>2?0:-1,u=[w,m,0,w+2/3,m,0,w+2/3,m+1,0,w,m,0,w+2/3,m+1,0,w,m+1,0];x.set(u,g*d*y);for(let v=0;v<d;v++){let h=f[v*2]*2-1,C=f[v*2+1]*2-1;y===0?_s.set(1,C,h):y===1?_s.set(-h,1,-C):y===2?_s.set(-h,C,1):y===3?_s.set(-1,C,-h):y===4?_s.set(-h,-1,C):_s.set(h,C,-1),_s.toArray(b,(y*d+v)*g)}}let _=new Le;_.setAttribute("position",new We(x,g)),_.setAttribute("outputDirection",new We(b,g)),e.push(new ae(_,null)),n>Do&&n--}return{lodMeshes:e,sizeLods:t}}function kg(i,t,e){let n=new en(i,t,e);return n.texture.mapping=vl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Io(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function kS(i,t,e){return new Oe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gh(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function HS(i,t,e){return new Oe({name:"SphericalGaussianBlur",defines:{SAMPLES:BS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gh(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Hg(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Gg(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function gh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ph=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ha(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ir(5,5,5),s=new Oe({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:dn});s.uniforms.tEquirect.value=e;let o=new ae(r,s),a=e.minFilter;return e.minFilter===Wr&&(e.minFilter=Cn),new vu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function GS(i){let t=new WeakMap,e=new WeakMap,n=null;function r(d,g=!1){return d==null?null:g?o(d):s(d)}function s(d){if(d&&d.isTexture){let g=d.mapping;if(g===wu||g===Eu)if(t.has(d)){let x=t.get(d).texture;return a(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let b=new ph(x.height);return b.fromEquirectangularTexture(i,d),t.set(d,b),d.addEventListener("dispose",c),a(b.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let g=d.mapping,x=g===wu||g===Eu,b=g===Gr||g===gs;if(x||b){let _=e.get(d),y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new vs(i)),_=x?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{let w=d.image;return x&&w&&w.height>0||b&&w&&l(w)?(n===null&&(n=new vs(i)),_=x?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",f),_.texture):null}}}return d}function a(d,g){return g===wu?d.mapping=Gr:g===Eu&&(d.mapping=gs),d}function l(d){let g=0,x=6;for(let b=0;b<x;b++)d[b]!==void 0&&g++;return g===x}function c(d){let g=d.target;g.removeEventListener("dispose",c);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function f(d){let g=d.target;g.removeEventListener("dispose",f);let x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function WS(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&fs("WebGLRenderer: "+n+" extension not supported."),r}}}function XS(i,t,e,n){let r={},s=new WeakMap;function o(p){let d=p.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];let g=s.get(d);g&&(t.remove(g),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(p,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(p){let d=p.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER)}function c(p){let d=[],g=p.index,x=p.attributes.position,b=0;if(x===void 0)return;if(g!==null){let w=g.array;b=g.version;for(let m=0,u=w.length;m<u;m+=3){let v=w[m+0],h=w[m+1],C=w[m+2];d.push(v,h,h,C,C,v)}}else{let w=x.array;b=x.version;for(let m=0,u=w.length/3-1;m<u;m+=3){let v=m+0,h=m+1,C=m+2;d.push(v,h,h,C,C,v)}}let _=new(x.count>=65535?Ba:Fa)(d,1);_.version=b;let y=s.get(p);y&&t.remove(y),s.set(p,_)}function f(p){let d=s.get(p);if(d){let g=p.index;g!==null&&d.version<g.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:f}}function qS(i,t,e){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,s,p*o),e.update(d,n,1)}function c(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,p*o,g),e.update(d,n,g))}function f(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,p,0,g);let b=0;for(let _=0;_<g;_++)b+=d[_];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function YS(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ZS(i,t,e){let n=new WeakMap,r=new _e;function s(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=f!==void 0?f.length:0,d=n.get(a);if(d===void 0||d.count!==p){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],m=0;g===!0&&(m=1),x===!0&&(m=2),b===!0&&(m=3);let u=a.attributes.position.count*m,v=1;u>t.maxTextureSize&&(v=Math.ceil(u/t.maxTextureSize),u=t.maxTextureSize);let h=new Float32Array(u*v*4*p),C=new Na(h,u,v,p);C.type=_i,C.needsUpdate=!0;let M=m*4;for(let E=0;E<p;E++){let T=_[E],A=y[E],R=w[E],L=u*v*4*E;for(let F=0;F<T.count;F++){let O=F*M;g===!0&&(r.fromBufferAttribute(T,F),h[L+O+0]=r.x,h[L+O+1]=r.y,h[L+O+2]=r.z,h[L+O+3]=0),x===!0&&(r.fromBufferAttribute(A,F),h[L+O+4]=r.x,h[L+O+5]=r.y,h[L+O+6]=r.z,h[L+O+7]=0),b===!0&&(r.fromBufferAttribute(R,F),h[L+O+8]=r.x,h[L+O+9]=r.y,h[L+O+10]=r.z,h[L+O+11]=R.itemSize===4?r.w:1)}}d={count:p,texture:C,size:new _t(u,v)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let b=0;b<c.length;b++)g+=c[b];let x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function $S(i,t,e,n,r){let s=new WeakMap;function o(c){let f=r.render.frame,p=c.geometry,d=t.get(c,p);if(s.get(d)!==f&&(t.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){let g=c.skeleton;s.get(g)!==f&&(g.update(),s.set(g,f))}return d}function a(){s=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}var JS={[dl]:"LINEAR_TONE_MAPPING",[pl]:"REINHARD_TONE_MAPPING",[ml]:"CINEON_TONE_MAPPING",[gl]:"ACES_FILMIC_TONE_MAPPING",[_l]:"AGX_TONE_MAPPING",[Hr]:"NEUTRAL_TONE_MAPPING",[xl]:"CUSTOM_TONE_MAPPING"};function KS(i,t,e,n,r,s){let o=new en(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Le;c.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Te([0,2,0,0,2,0],2));let f=new Eo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ae(c,f),d=new Br(-1,1,1,-1,0,1),g=null,x=null,b=!1,_,y=null,w=[],m=!1;this.setSize=function(u,v){o.setSize(u,v),a!==null&&a.setSize(u,v),l!==null&&l.setSize(u,v);for(let h=0;h<w.length;h++){let C=w[h];C.setSize&&C.setSize(u,v)}},this.setEffects=function(u){w=u,m=w.length>0&&w[0].isRenderPass===!0;let v=o.width,h=o.height;w.length>0&&a===null&&(a=new en(v,h,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new en(v,h,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<w.length;C++){let M=w[C];M.setSize&&M.setSize(v,h)}},this.begin=function(u,v){if(b||u.toneMapping===Li&&w.length===0)return!1;if(y=v,v!==null){let h=v.width,C=v.height;(o.width!==h||o.height!==C)&&this.setSize(h,C)}return m===!1&&u.setRenderTarget(o),_=u.toneMapping,u.toneMapping=Li,!0},this.hasRenderPass=function(){return m},this.end=function(u,v){u.toneMapping=_,b=!0;let h=o,C=a;for(let M=0;M<w.length;M++){let S=w[M];S.enabled!==!1&&(S.render(u,C,h,v),S.needsSwap!==!1&&(h=C,C=C===a?l:a))}if(g!==u.outputColorSpace||x!==u.toneMapping){g=u.outputColorSpace,x=u.toneMapping,f.defines={},xe.getTransfer(g)===Pe&&(f.defines.SRGB_TRANSFER="");let M=JS[x];M&&(f.defines[M]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=h.texture,u.setRenderTarget(y),u.render(p,d),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var c0=new Hn,Hd=new Ki(1,1),u0=new Na,h0=new Qc,f0=new Ha,Wg=[],Xg=[],qg=new Float32Array(16),Yg=new Float32Array(9),Zg=new Float32Array(4);function No(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Wg[r];if(s===void 0&&(s=new Float32Array(r),Wg[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function bn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function wn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xh(i,t){let e=Xg[t];e===void 0&&(e=new Int32Array(t),Xg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function QS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bn(e,t))return;i.uniform2fv(this.addr,t),wn(e,t)}}function t1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(bn(e,t))return;i.uniform3fv(this.addr,t),wn(e,t)}}function e1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bn(e,t))return;i.uniform4fv(this.addr,t),wn(e,t)}}function n1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(bn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),wn(e,t)}else{if(bn(e,n))return;Zg.set(n),i.uniformMatrix2fv(this.addr,!1,Zg),wn(e,n)}}function i1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(bn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),wn(e,t)}else{if(bn(e,n))return;Yg.set(n),i.uniformMatrix3fv(this.addr,!1,Yg),wn(e,n)}}function r1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(bn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),wn(e,t)}else{if(bn(e,n))return;qg.set(n),i.uniformMatrix4fv(this.addr,!1,qg),wn(e,n)}}function s1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function o1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bn(e,t))return;i.uniform2iv(this.addr,t),wn(e,t)}}function a1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(bn(e,t))return;i.uniform3iv(this.addr,t),wn(e,t)}}function l1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bn(e,t))return;i.uniform4iv(this.addr,t),wn(e,t)}}function c1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function u1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bn(e,t))return;i.uniform2uiv(this.addr,t),wn(e,t)}}function h1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(bn(e,t))return;i.uniform3uiv(this.addr,t),wn(e,t)}}function f1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bn(e,t))return;i.uniform4uiv(this.addr,t),wn(e,t)}}function d1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Hd.compareFunction=e.isReversedDepthBuffer()?hh:uh,s=Hd):s=c0,e.setTexture2D(t||s,r)}function p1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||h0,r)}function m1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||f0,r)}function g1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||u0,r)}function x1(i){switch(i){case 5126:return jS;case 35664:return QS;case 35665:return t1;case 35666:return e1;case 35674:return n1;case 35675:return i1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return o1;case 35668:case 35672:return a1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return u1;case 36295:return h1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}function _1(i,t){i.uniform1fv(this.addr,t)}function v1(i,t){let e=No(t,this.size,2);i.uniform2fv(this.addr,e)}function y1(i,t){let e=No(t,this.size,3);i.uniform3fv(this.addr,e)}function M1(i,t){let e=No(t,this.size,4);i.uniform4fv(this.addr,e)}function S1(i,t){let e=No(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function b1(i,t){let e=No(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function w1(i,t){let e=No(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function E1(i,t){i.uniform1iv(this.addr,t)}function T1(i,t){i.uniform2iv(this.addr,t)}function A1(i,t){i.uniform3iv(this.addr,t)}function R1(i,t){i.uniform4iv(this.addr,t)}function C1(i,t){i.uniform1uiv(this.addr,t)}function P1(i,t){i.uniform2uiv(this.addr,t)}function I1(i,t){i.uniform3uiv(this.addr,t)}function D1(i,t){i.uniform4uiv(this.addr,t)}function L1(i,t,e){let n=this.cache,r=t.length,s=xh(e,r);bn(n,s)||(i.uniform1iv(this.addr,s),wn(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Hd:o=c0;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function N1(i,t,e){let n=this.cache,r=t.length,s=xh(e,r);bn(n,s)||(i.uniform1iv(this.addr,s),wn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||h0,s[o])}function U1(i,t,e){let n=this.cache,r=t.length,s=xh(e,r);bn(n,s)||(i.uniform1iv(this.addr,s),wn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||f0,s[o])}function F1(i,t,e){let n=this.cache,r=t.length,s=xh(e,r);bn(n,s)||(i.uniform1iv(this.addr,s),wn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||u0,s[o])}function B1(i){switch(i){case 5126:return _1;case 35664:return v1;case 35665:return y1;case 35666:return M1;case 35674:return S1;case 35675:return b1;case 35676:return w1;case 5124:case 35670:return E1;case 35667:case 35671:return T1;case 35668:case 35672:return A1;case 35669:case 35673:return R1;case 5125:return C1;case 36294:return P1;case 36295:return I1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return L1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return F1}}var Gd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=x1(e.type)}},Wd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B1(e.type)}},Xd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Vd=/(\w+)(\])?(\[|\.)?/g;function $g(i,t){i.seq.push(t),i.map[t.id]=t}function O1(i,t,e){let n=i.name,r=n.length;for(Vd.lastIndex=0;;){let s=Vd.exec(n),o=Vd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$g(e,c===void 0?new Gd(a,i,t):new Wd(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Xd(a),$g(e,p)),e=p}}}var Lo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);O1(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Jg(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var z1=37297,V1=0;function k1(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Kg=new ce;function H1(i){xe._getMatrix(Kg,xe.workingColorSpace,i);let t=`mat3( ${Kg.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case Ia:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jg(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+k1(i.getShaderSource(t),a)}else return s}function G1(i,t){let e=H1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var W1={[dl]:"Linear",[pl]:"Reinhard",[ml]:"Cineon",[gl]:"ACESFilmic",[_l]:"AgX",[Hr]:"Neutral",[xl]:"Custom"};function X1(i,t){let e=W1[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dh=new D;function q1(){xe.getLuminanceCoefficients(dh);let i=dh.x.toFixed(4),t=dh.y.toFixed(4),e=dh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cl).join(`
`)}function Z1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Cl(i){return i!==""}function Qg(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function t0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var J1=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(i){return i.replace(J1,j1)}var K1=new Map;function j1(i,t){let e=pe[t];if(e===void 0){let n=K1.get(t);if(n!==void 0)e=pe[n],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return qd(e)}var Q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(i){return i.replace(Q1,tb)}function tb(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function n0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var eb={[Vr]:"SHADOWMAP_TYPE_PCF",[Ro]:"SHADOWMAP_TYPE_VSM"};function nb(i){return eb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ib={[Gr]:"ENVMAP_TYPE_CUBE",[gs]:"ENVMAP_TYPE_CUBE",[vl]:"ENVMAP_TYPE_CUBE_UV"};function rb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ib[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var sb={[gs]:"ENVMAP_MODE_REFRACTION"};function ob(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":sb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ab={[bu]:"ENVMAP_BLENDING_MULTIPLY",[gg]:"ENVMAP_BLENDING_MIX",[xg]:"ENVMAP_BLENDING_ADD"};function lb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ab[i.combine]||"ENVMAP_BLENDING_NONE"}function cb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ub(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=nb(e),c=rb(e),f=ob(e),p=lb(e),d=cb(e),g=Y1(e),x=Z1(s),b=r.createProgram(),_,y,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Cl).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Cl).join(`
`),y.length>0&&(y+=`
`)):(_=[n0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cl).join(`
`),y=[n0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?pe.tonemapping_pars_fragment:"",e.toneMapping!==Li?X1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,G1("linearToOutputTexel",e.outputColorSpace),q1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cl).join(`
`)),o=qd(o),o=Qg(o,e),o=t0(o,e),a=qd(a),a=Qg(a,e),a=t0(a,e),o=e0(o),a=e0(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",e.glslVersion===bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let m=w+_+o,u=w+y+a,v=Jg(r,r.VERTEX_SHADER,m),h=Jg(r,r.FRAGMENT_SHADER,u);r.attachShader(b,v),r.attachShader(b,h),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function C(T){if(i.debug.checkShaderErrors){let A=r.getProgramInfoLog(b)||"",R=r.getShaderInfoLog(v)||"",L=r.getShaderInfoLog(h)||"",F=A.trim(),O=R.trim(),V=L.trim(),$=!0,k=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,v,h);else{let tt=jg(r,v,"vertex"),q=jg(r,h,"fragment");se("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+tt+`
`+q)}else F!==""?oe("WebGLProgram: Program Info Log:",F):(O===""||V==="")&&(k=!1);k&&(T.diagnostics={runnable:$,programLog:F,vertexShader:{log:O,prefix:_},fragmentShader:{log:V,prefix:y}})}r.deleteShader(v),r.deleteShader(h),M=new Lo(r,b),S=$1(r,b)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(b,z1)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=v,this.fragmentShader=h,this}var hb=0,Yd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zd(t),e.set(t,n)),n}},Zd=class{constructor(t){this.id=hb++,this.code=t,this.usedTimes=0}};function fb(i){return i===qr||i===El||i===Tl}function db(i,t,e,n,r,s){let o=new xo,a=new Yd,l=new Set,c=[],f=new Map,p=n.logarithmicDepthBuffer,d=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function b(M,S,E,T,A,R){let L=T.fog,F=A.geometry,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?T.environment:null,V=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,$=t.get(M.envMap||O,V),k=$&&$.mapping===vl?$.image.height:null,tt=g[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&oe("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ct=q!==void 0?q.length:0,ut=0;F.morphAttributes.position!==void 0&&(ut=1),F.morphAttributes.normal!==void 0&&(ut=2),F.morphAttributes.color!==void 0&&(ut=3);let Et,Mt,kt,N;if(tt){let we=Wn[tt];Et=we.vertexShader,Mt=we.fragmentShader}else{Et=M.vertexShader,Mt=M.fragmentShader;let we=a.getVertexShaderStage(M),ve=a.getFragmentShaderStage(M);a.update(M,we,ve),kt=we.id,N=ve.id}let Q=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),vt=A.isInstancedMesh===!0,st=A.isBatchedMesh===!0,dt=!!M.map,Bt=!!M.matcap,j=!!$,rt=!!M.aoMap,ot=!!M.lightMap,ht=!!M.bumpMap&&M.wireframe===!1,bt=!!M.normalMap,Pt=!!M.displacementMap,Tt=!!M.emissiveMap,Ut=!!M.metalnessMap,Ft=!!M.roughnessMap,H=M.anisotropy>0,de=M.clearcoat>0,qt=M.dispersion>0,B=M.retroreflectivity>0,P=M.iridescence>0,X=M.sheen>0,K=M.transmission>0,it=H&&!!M.anisotropyMap,St=de&&!!M.clearcoatMap,At=de&&!!M.clearcoatNormalMap,at=de&&!!M.clearcoatRoughnessMap,pt=P&&!!M.iridescenceMap,Dt=P&&!!M.iridescenceThicknessMap,$t=X&&!!M.sheenColorMap,Ct=X&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,Zt=!!M.specularColorMap,te=!!M.specularIntensityMap,re=K&&!!M.transmissionMap,J=K&&!!M.thicknessMap,wt=!!M.gradientMap,mt=!!M.alphaMap,It=M.alphaTest>0,Ht=!!M.alphaHash,xt=!!M.extensions,ne=Li;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ne=i.toneMapping);let Vt={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:Et,fragmentShader:Mt,defines:M.defines,customVertexShaderID:kt,customFragmentShaderID:N,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:st,batchingColor:st&&A._colorsTexture!==null,instancing:vt,instancingColor:vt&&A.instanceColor!==null,instancingMorph:vt&&A.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:dt,matcap:Bt,envMap:j,envMapMode:j&&$.mapping,envMapCubeUVHeight:k,aoMap:rt,lightMap:ot,bumpMap:ht,normalMap:bt,displacementMap:Pt,emissiveMap:Tt,normalMapObjectSpace:bt&&M.normalMapType===yg,normalMapTangentSpace:bt&&M.normalMapType===Po,packedNormalMap:bt&&M.normalMapType===Po&&fb(M.normalMap.format),metalnessMap:Ut,roughnessMap:Ft,anisotropy:H,anisotropyMap:it,clearcoat:de,clearcoatMap:St,clearcoatNormalMap:At,clearcoatRoughnessMap:at,dispersion:qt,retroreflection:B,iridescence:P,iridescenceMap:pt,iridescenceThicknessMap:Dt,sheen:X,sheenColorMap:$t,sheenRoughnessMap:Ct,specularMap:Rt,specularColorMap:Zt,specularIntensityMap:te,transmission:K,transmissionMap:re,thicknessMap:J,gradientMap:wt,opaque:M.transparent===!1&&M.blending===kr&&M.alphaToCoverage===!1,alphaMap:mt,alphaTest:It,alphaHash:Ht,combine:M.combine,mapUv:dt&&x(M.map.channel),aoMapUv:rt&&x(M.aoMap.channel),lightMapUv:ot&&x(M.lightMap.channel),bumpMapUv:ht&&x(M.bumpMap.channel),normalMapUv:bt&&x(M.normalMap.channel),displacementMapUv:Pt&&x(M.displacementMap.channel),emissiveMapUv:Tt&&x(M.emissiveMap.channel),metalnessMapUv:Ut&&x(M.metalnessMap.channel),roughnessMapUv:Ft&&x(M.roughnessMap.channel),anisotropyMapUv:it&&x(M.anisotropyMap.channel),clearcoatMapUv:St&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(M.sheenRoughnessMap.channel),specularMapUv:Rt&&x(M.specularMap.channel),specularColorMapUv:Zt&&x(M.specularColorMap.channel),specularIntensityMapUv:te&&x(M.specularIntensityMap.channel),transmissionMapUv:re&&x(M.transmissionMap.channel),thicknessMapUv:J&&x(M.thicknessMap.channel),alphaMapUv:mt&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(bt||H),vertexNormals:!!F.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!F.attributes.uv&&(dt||mt),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||F.attributes.normal===void 0&&bt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:lt,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:ut,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:R.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:dt&&M.map.isVideoTexture===!0&&xe.getTransfer(M.map.colorSpace)===Pe,decodeVideoTextureEmissive:Tt&&M.emissiveMap.isVideoTexture===!0&&xe.getTransfer(M.emissiveMap.colorSpace)===Pe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===An,flipSided:M.side===cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:xt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&M.extensions.multiDraw===!0||st)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function _(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let E in M.defines)S.push(E),S.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(y(S,M),w(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numSunLights),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numSunLightShadows),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function w(M,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function m(M){let S=g[M.type],E;if(S){let T=Wn[S];E=Gn.clone(T.uniforms)}else E=M.uniforms;return E}function u(M,S){let E=f.get(S);return E!==void 0?++E.usedTimes:(E=new ub(i,S,M,r),c.push(E),f.set(S,E)),E}function v(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),f.delete(M.cacheKey),M.destroy()}}function h(M){a.remove(M)}function C(){a.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:m,acquireProgram:u,releaseProgram:v,releaseShaderCache:h,programs:c,dispose:C}}function pb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function mb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function i0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function r0(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function a(d,g,x,b,_,y){let w=i[t];return w===void 0?(w={id:d.id,object:d,geometry:g,material:x,materialVariant:o(d),groupOrder:b,renderOrder:d.renderOrder,z:_,group:y},i[t]=w):(w.id=d.id,w.object=d,w.geometry=g,w.material=x,w.materialVariant=o(d),w.groupOrder=b,w.renderOrder=d.renderOrder,w.z=_,w.group=y),t++,w}function l(d,g,x,b,_,y,w){w.reversedDepth===!0&&(_=-_);let m=a(d,g,x,b,_,y);x.transmission>0?n.push(m):x.transparent===!0?r.push(m):e.push(m)}function c(d,g,x,b,_,y){let w=a(d,g,x,b,_,y);x.transmission>0?n.unshift(w):x.transparent===!0?r.unshift(w):e.unshift(w)}function f(d,g){e.length>1&&e.sort(d||mb),n.length>1&&n.sort(g||i0),r.length>1&&r.sort(g||i0)}function p(){for(let d=t,g=i.length;d<g;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:p,sort:f}}function gb(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new r0,i.set(n,[o])):r>=s.length?(o=new r0,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function xb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new Qt};break;case"SpotLight":e={position:new D,direction:new D,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function _b(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var vb=0;function yb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mb(i){let t=new xb,e=_b(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let r=new D,s=new Wt,o=new Wt;function a(c){let f=0,p=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let g=0,x=0,b=0,_=0,y=0,w=0,m=0,u=0,v=0,h=0,C=0,M=0,S=0,E=0;c.sort(yb);for(let A=0,R=c.length;A<R;A++){let L=c[A],F=L.color,O=L.intensity,V=L.distance,$=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===qr?$=L.shadow.map.texture:$=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=F.r*O,p+=F.g*O,d+=F.b*O;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],O);E++}else if(L.isSunLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let tt=L.shadow,q=e.get(L);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[x]=q,n.sunShadowMap[x]=$;let ct=tt.getViewportCount();for(let ut=0;ut<ct;ut++)n.sunShadowMatrix[b+ut]=tt.getMatrix(ut),n.sunShadowCascade[b+ut]=tt._cascadeData[ut];b+=ct,x++}n.sun[g]=k,g++}else if(L.isDirectionalLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let tt=L.shadow,q=e.get(L);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.directionalShadow[_]=q,n.directionalShadowMap[_]=$,n.directionalShadowMatrix[_]=L.shadow.matrix,v++}n.directional[_]=k,_++}else if(L.isSpotLight){let k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(F).multiplyScalar(O),k.distance=V,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[w]=k;let tt=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,tt.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[w]=tt.matrix,L.castShadow){let q=e.get(L);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.spotShadow[w]=q,n.spotShadowMap[w]=$,C++}w++}else if(L.isRectAreaLight){let k=t.get(L);k.color.copy(F).multiplyScalar(O),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=k,m++}else if(L.isPointLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let tt=L.shadow,q=e.get(L);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,q.shadowCameraNear=tt.camera.near,q.shadowCameraFar=tt.camera.far,n.pointShadow[y]=q,n.pointShadowMap[y]=$,n.pointShadowMatrix[y]=L.shadow.matrix,h++}n.point[y]=k,y++}else if(L.isHemisphereLight){let k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(O),k.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[u]=k,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=d;let T=n.hash;(T.sunLength!==g||T.directionalLength!==_||T.pointLength!==y||T.spotLength!==w||T.rectAreaLength!==m||T.hemiLength!==u||T.numSunShadows!==x||T.numDirectionalShadows!==v||T.numPointShadows!==h||T.numSpotShadows!==C||T.numSpotMaps!==M||T.numLightProbes!==E)&&(n.sun.length=g,n.directional.length=_,n.spot.length=w,n.rectArea.length=m,n.point.length=y,n.hemi.length=u,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=h,n.pointShadowMap.length=h,n.pointShadowMatrix.length=h,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+M-S,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,T.sunLength=g,T.directionalLength=_,T.pointLength=y,T.spotLength=w,T.rectAreaLength=m,T.hemiLength=u,T.numSunShadows=x,T.numDirectionalShadows=v,T.numPointShadows=h,T.numSpotShadows=C,T.numSpotMaps=M,T.numLightProbes=E,n.version=vb++)}function l(c,f){let p=0,d=0,g=0,x=0,b=0,_=0,y=f.matrixWorldInverse;for(let w=0,m=c.length;w<m;w++){let u=c[w];if(u.isSunLight){let v=n.sun[p];v.direction.setFromMatrixPosition(u.matrixWorld),v.direction.transformDirection(y),p++}else if(u.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(u.matrixWorld),r.setFromMatrixPosition(u.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(y),d++}else if(u.isSpotLight){let v=n.spot[x];v.position.setFromMatrixPosition(u.matrixWorld),v.position.applyMatrix4(y),v.direction.setFromMatrixPosition(u.matrixWorld),r.setFromMatrixPosition(u.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(y),x++}else if(u.isRectAreaLight){let v=n.rectArea[b];v.position.setFromMatrixPosition(u.matrixWorld),v.position.applyMatrix4(y),o.identity(),s.copy(u.matrixWorld),s.premultiply(y),o.extractRotation(s),v.halfWidth.set(u.width*.5,0,0),v.halfHeight.set(0,u.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),b++}else if(u.isPointLight){let v=n.point[g];v.position.setFromMatrixPosition(u.matrixWorld),v.position.applyMatrix4(y),g++}else if(u.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(u.matrixWorld),v.direction.transformDirection(y),_++}}}return{setup:a,setupView:l,state:n}}function s0(i){let t=new Mb(i),e=[],n=[],r=[];function s(d){p.camera=d,e.length=0,n.length=0,r.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){r.push(d)}function c(){t.setup(e)}function f(d){t.setupView(e,d)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Sb(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new s0(i),t.set(r,[a])):s>=o.length?(a=new s0(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
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
}`,Eb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Tb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],o0=new Wt,Rl=new D,kd=new D;function Ab(i,t,e){let n=new yo,r=new _t,s=new _t,o=new _e,a=new au,l=new lu,c={},f=e.maxTextureSize,p={[ri]:cn,[cn]:ri,[An]:An},d=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:bb,fragmentShader:wb}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let x=new Le;x.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ae(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vr;let y=this.type;this.render=function(h,C,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||h.length===0)return;this.type===eg&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vr);let S=i.getRenderTarget(),E=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),A=i.state;A.setBlending(dn),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let R=y!==this.type;R&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=h.length;L<F;L++){let O=h[L],V=O.shadow;if(V===void 0){oe("WebGLShadowMap:",O,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let $=V.getFrameExtents();r.multiply($),s.copy(V.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/$.x),r.x=s.x*$.x,V.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/$.y),r.y=s.y*$.y,V.mapSize.y=s.y));let k=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=k,V.map===null||R===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ro){if(O.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new en(r.x,r.y,{format:qr,type:Sn,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),V.map.texture.name=O.name+".shadowMap",V.map.depthTexture=new Ki(r.x,r.y,_i),V.map.depthTexture.name=O.name+".shadowMapDepth",V.map.depthTexture.format=$i,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fn,V.map.depthTexture.magFilter=fn}else O.isPointLight?(V.map=new ph(r.x),V.map.depthTexture=new tu(r.x,Ni)):(V.map=new en(r.x,r.y),V.map.depthTexture=new Ki(r.x,r.y,Ni)),V.map.depthTexture.name=O.name+".shadowMap",V.map.depthTexture.format=$i,this.type===Vr?(V.map.depthTexture.compareFunction=k?hh:uh,V.map.depthTexture.minFilter=Cn,V.map.depthTexture.magFilter=Cn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fn,V.map.depthTexture.magFilter=fn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);let tt=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();O.isPointLight!==!0&&V.updateMatrices(O,M);for(let q=0;q<tt;q++){let ct=V.getCamera(q);if(O.isPointLight){let ut=V.camera,Et=V.matrix,Mt=O.distance||ut.far;Mt!==ut.far&&(ut.far=Mt,ut.updateProjectionMatrix()),Rl.setFromMatrixPosition(O.matrixWorld),ut.position.copy(Rl),kd.copy(ut.position),kd.add(Eb[q]),ut.up.copy(Tb[q]),ut.lookAt(kd),ut.updateMatrixWorld(),Et.makeTranslation(-Rl.x,-Rl.y,-Rl.z),o0.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),V._frustum.setFromProjectionMatrix(o0,ut.coordinateSystem,ut.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,q),i.clear();else{q===0&&(i.setRenderTarget(V.map),i.clear());let ut=V.getViewport(q);o.set(s.x*ut.x,s.y*ut.y,s.x*ut.z,s.y*ut.w),A.viewport(o)}n=V.getFrustum(q),u(C,M,ct,O,this.type)}V.isPointLightShadow!==!0&&this.type===Ro&&w(V,M),V.needsUpdate=!1}y=this.type,_.needsUpdate=!1,i.setRenderTarget(S,E,T)};function w(h,C){let M=t.update(b);d.defines.VSM_SAMPLES!==h.blurSamples&&(d.defines.VSM_SAMPLES=h.blurSamples,g.defines.VSM_SAMPLES=h.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),h.mapPass===null?h.mapPass=new en(r.x,r.y,{format:qr,type:Sn}):(h.mapPass.width!==h.map.width||h.mapPass.height!==h.map.height)&&h.mapPass.setSize(h.map.width,h.map.height),d.uniforms.shadow_pass.value=h.map.depthTexture,d.uniforms.resolution.value.set(h.map.width,h.map.height),d.uniforms.radius.value=h.radius,i.setRenderTarget(h.mapPass),i.clear(),i.renderBufferDirect(C,null,M,d,b,null),g.uniforms.shadow_pass.value=h.mapPass.texture,g.uniforms.resolution.value.set(h.map.width,h.map.height),g.uniforms.radius.value=h.radius,i.setRenderTarget(h.map),i.clear(),i.renderBufferDirect(C,null,M,g,b,null)}function m(h,C,M,S){let E=null,T=M.isPointLight===!0?h.customDistanceMaterial:h.customDepthMaterial;if(T!==void 0)E=T;else if(E=M.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let A=E.uuid,R=C.uuid,L=c[A];L===void 0&&(L={},c[A]=L);let F=L[R];F===void 0&&(F=E.clone(),L[R]=F,C.addEventListener("dispose",v)),E=F}if(E.visible=C.visible,E.wireframe=C.wireframe,S===Ro?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:p[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,M.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let A=i.properties.get(E);A.light=M}return E}function u(h,C,M,S,E){if(h.visible===!1)return;if(h.layers.test(C.layers)&&(h.isMesh||h.isLine||h.isPoints)&&(h.castShadow||h.receiveShadow&&E===Ro)&&(!h.frustumCulled||h.intersectsFrustum(n))){h.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,h.matrixWorld);let R=t.update(h),L=h.material;if(Array.isArray(L)){let F=R.groups;for(let O=0,V=F.length;O<V;O++){let $=F[O],k=L[$.materialIndex];if(k&&k.visible){let tt=m(h,k,S,E);h.onBeforeShadow(i,h,C,M,R,tt,$),i.renderBufferDirect(M,null,R,tt,h,$),h.onAfterShadow(i,h,C,M,R,tt,$)}}}else if(L.visible){let F=m(h,L,S,E);h.onBeforeShadow(i,h,C,M,R,F,null),i.renderBufferDirect(M,null,R,F,h,null),h.onAfterShadow(i,h,C,M,R,F,null)}}let A=h.children;for(let R=0,L=A.length;R<L;R++)u(A[R],C,M,S,E)}function v(h){h.target.removeEventListener("dispose",v);for(let M in c){let S=c[M],E=h.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function Rb(i,t){function e(){let J=!1,wt=new _e,mt=null,It=new _e(0,0,0,0);return{setMask:function(Ht){mt!==Ht&&!J&&(i.colorMask(Ht,Ht,Ht,Ht),mt=Ht)},setLocked:function(Ht){J=Ht},setClear:function(Ht,xt,ne,Vt,we){we===!0&&(Ht*=Vt,xt*=Vt,ne*=Vt),wt.set(Ht,xt,ne,Vt),It.equals(wt)===!1&&(i.clearColor(Ht,xt,ne,Vt),It.copy(wt))},reset:function(){J=!1,mt=null,It.set(-1,0,0,0)}}}function n(){let J=!1,wt=!1,mt=null,It=null,Ht=null;return{setReversed:function(xt){if(wt!==xt){let ne=t.get("EXT_clip_control");xt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),wt=xt;let Vt=Ht;Ht=null,this.setClear(Vt)}},getReversed:function(){return wt},setTest:function(xt){xt?Q(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(xt){mt!==xt&&!J&&(i.depthMask(xt),mt=xt)},setFunc:function(xt){if(wt&&(xt=Ig[xt]),It!==xt){switch(xt){case Hc:i.depthFunc(i.NEVER);break;case Gc:i.depthFunc(i.ALWAYS);break;case Wc:i.depthFunc(i.LESS);break;case ho:i.depthFunc(i.LEQUAL);break;case Xc:i.depthFunc(i.EQUAL);break;case qc:i.depthFunc(i.GEQUAL);break;case Yc:i.depthFunc(i.GREATER);break;case Zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=xt}},setLocked:function(xt){J=xt},setClear:function(xt){Ht!==xt&&(Ht=xt,wt&&(xt=1-xt),i.clearDepth(xt))},reset:function(){J=!1,mt=null,It=null,Ht=null,wt=!1}}}function r(){let J=!1,wt=null,mt=null,It=null,Ht=null,xt=null,ne=null,Vt=null,we=null;return{setTest:function(ve){J||(ve?Q(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(ve){wt!==ve&&!J&&(i.stencilMask(ve),wt=ve)},setFunc:function(ve,le,Ln){(mt!==ve||It!==le||Ht!==Ln)&&(i.stencilFunc(ve,le,Ln),mt=ve,It=le,Ht=Ln)},setOp:function(ve,le,Ln){(xt!==ve||ne!==le||Vt!==Ln)&&(i.stencilOp(ve,le,Ln),xt=ve,ne=le,Vt=Ln)},setLocked:function(ve){J=ve},setClear:function(ve){we!==ve&&(i.clearStencil(ve),we=ve)},reset:function(){J=!1,wt=null,mt=null,It=null,Ht=null,xt=null,ne=null,Vt=null,we=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,f={},p={},d={},g=new WeakMap,x=[],b=null,_=!1,y=null,w=null,m=null,u=null,v=null,h=null,C=null,M=new Qt(0,0,0),S=0,E=!1,T=null,A=null,R=null,L=null,F=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,$=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=$>=1):k.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=$>=2);let tt=null,q={},ct=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),Et=new _e().fromArray(ct),Mt=new _e().fromArray(ut);function kt(J,wt,mt,It){let Ht=new Uint8Array(4),xt=i.createTexture();i.bindTexture(J,xt),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<mt;ne++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Ht):i.texImage2D(wt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ht);return xt}let N={};N[i.TEXTURE_2D]=kt(i.TEXTURE_2D,i.TEXTURE_2D,1),N[i.TEXTURE_CUBE_MAP]=kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[i.TEXTURE_2D_ARRAY]=kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),N[i.TEXTURE_3D]=kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(ho),ht(!1),bt(cd),Q(i.CULL_FACE),rt(dn);function Q(J){f[J]!==!0&&(i.enable(J),f[J]=!0)}function lt(J){f[J]!==!1&&(i.disable(J),f[J]=!1)}function vt(J,wt){return d[J]!==wt?(i.bindFramebuffer(J,wt),d[J]=wt,J===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=wt),J===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function st(J,wt){let mt=x,It=!1;if(J){mt=g.get(wt),mt===void 0&&(mt=[],g.set(wt,mt));let Ht=J.textures;if(mt.length!==Ht.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,ne=Ht.length;xt<ne;xt++)mt[xt]=i.COLOR_ATTACHMENT0+xt;mt.length=Ht.length,It=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,It=!0);It&&i.drawBuffers(mt)}function dt(J){return b!==J?(i.useProgram(J),b=J,!0):!1}let Bt={[xi]:i.FUNC_ADD,[ng]:i.FUNC_SUBTRACT,[ig]:i.FUNC_REVERSE_SUBTRACT};Bt[rg]=i.MIN,Bt[sg]=i.MAX;let j={[ms]:i.ZERO,[og]:i.ONE,[ag]:i.SRC_COLOR,[dd]:i.SRC_ALPHA,[hg]:i.SRC_ALPHA_SATURATE,[fl]:i.DST_COLOR,[hl]:i.DST_ALPHA,[lg]:i.ONE_MINUS_SRC_COLOR,[pd]:i.ONE_MINUS_SRC_ALPHA,[ug]:i.ONE_MINUS_DST_COLOR,[cg]:i.ONE_MINUS_DST_ALPHA,[fg]:i.CONSTANT_COLOR,[dg]:i.ONE_MINUS_CONSTANT_COLOR,[pg]:i.CONSTANT_ALPHA,[mg]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(J,wt,mt,It,Ht,xt,ne,Vt,we,ve){if(J===dn){_===!0&&(lt(i.BLEND),_=!1);return}if(_===!1&&(Q(i.BLEND),_=!0),J!==Su){if(J!==y||ve!==E){if((w!==xi||v!==xi)&&(i.blendEquation(i.FUNC_ADD),w=xi,v=xi),ve)switch(J){case kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ud:i.blendFunc(i.ONE,i.ONE);break;case hd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",J);break}else switch(J){case kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ud:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hd:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fd:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",J);break}m=null,u=null,h=null,C=null,M.set(0,0,0),S=0,y=J,E=ve}return}Ht=Ht||wt,xt=xt||mt,ne=ne||It,(wt!==w||Ht!==v)&&(i.blendEquationSeparate(Bt[wt],Bt[Ht]),w=wt,v=Ht),(mt!==m||It!==u||xt!==h||ne!==C)&&(i.blendFuncSeparate(j[mt],j[It],j[xt],j[ne]),m=mt,u=It,h=xt,C=ne),(Vt.equals(M)===!1||we!==S)&&(i.blendColor(Vt.r,Vt.g,Vt.b,we),M.copy(Vt),S=we),y=J,E=!1}function ot(J,wt){J.side===An?lt(i.CULL_FACE):Q(i.CULL_FACE);let mt=J.side===cn;wt&&(mt=!mt),ht(mt),J.blending===kr&&J.transparent===!1?rt(dn):rt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),o.setFunc(J.depthFunc),o.setTest(J.depthTest),o.setMask(J.depthWrite),s.setMask(J.colorWrite);let It=J.stencilWrite;a.setTest(It),It&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Tt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(J){T!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),T=J)}function bt(J){J!==Qm?(Q(i.CULL_FACE),J!==A&&(J===cd?i.cullFace(i.BACK):J===tg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),A=J}function Pt(J){J!==R&&(V&&i.lineWidth(J),R=J)}function Tt(J,wt,mt){J?(Q(i.POLYGON_OFFSET_FILL),(L!==wt||F!==mt)&&(L=wt,F=mt,o.getReversed()&&(wt=-wt),i.polygonOffset(wt,mt))):lt(i.POLYGON_OFFSET_FILL)}function Ut(J){J?Q(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function Ft(J){J===void 0&&(J=i.TEXTURE0+O-1),tt!==J&&(i.activeTexture(J),tt=J)}function H(J,wt,mt){mt===void 0&&(tt===null?mt=i.TEXTURE0+O-1:mt=tt);let It=q[mt];It===void 0&&(It={type:void 0,texture:void 0},q[mt]=It),(It.type!==J||It.texture!==wt)&&(tt!==mt&&(i.activeTexture(mt),tt=mt),i.bindTexture(J,wt||N[J]),It.type=J,It.texture=wt)}function de(){let J=q[tt];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function qt(){try{i.compressedTexImage2D(...arguments)}catch(J){se("WebGLState:",J)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(J){se("WebGLState:",J)}}function P(){try{i.texSubImage2D(...arguments)}catch(J){se("WebGLState:",J)}}function X(){try{i.texSubImage3D(...arguments)}catch(J){se("WebGLState:",J)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(J){se("WebGLState:",J)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(J){se("WebGLState:",J)}}function St(){try{i.texStorage2D(...arguments)}catch(J){se("WebGLState:",J)}}function At(){try{i.texStorage3D(...arguments)}catch(J){se("WebGLState:",J)}}function at(){try{i.texImage2D(...arguments)}catch(J){se("WebGLState:",J)}}function pt(){try{i.texImage3D(...arguments)}catch(J){se("WebGLState:",J)}}function Dt(J){return p[J]!==void 0?p[J]:i.getParameter(J)}function $t(J,wt){p[J]!==wt&&(i.pixelStorei(J,wt),p[J]=wt)}function Ct(J){Et.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),Et.copy(J))}function Rt(J){Mt.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),Mt.copy(J))}function Zt(J,wt){let mt=c.get(wt);mt===void 0&&(mt=new WeakMap,c.set(wt,mt));let It=mt.get(J);It===void 0&&(It=i.getUniformBlockIndex(wt,J.name),mt.set(J,It))}function te(J,wt){let It=c.get(wt).get(J);l.get(wt)!==It&&(i.uniformBlockBinding(wt,It,J.__bindingPointIndex),l.set(wt,It))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},p={},tt=null,q={},d={},g=new WeakMap,x=[],b=null,_=!1,y=null,w=null,m=null,u=null,v=null,h=null,C=null,M=new Qt(0,0,0),S=0,E=!1,T=null,A=null,R=null,L=null,F=null,Et.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:lt,bindFramebuffer:vt,drawBuffers:st,useProgram:dt,setBlending:rt,setMaterial:ot,setFlipSided:ht,setCullFace:bt,setLineWidth:Pt,setPolygonOffset:Tt,setScissorTest:Ut,activeTexture:Ft,bindTexture:H,unbindTexture:de,compressedTexImage2D:qt,compressedTexImage3D:B,texImage2D:at,texImage3D:pt,pixelStorei:$t,getParameter:Dt,updateUBOMapping:Zt,uniformBlockBinding:te,texStorage2D:St,texStorage3D:At,texSubImage2D:P,texSubImage3D:X,compressedTexSubImage2D:K,compressedTexSubImage3D:it,scissor:Ct,viewport:Rt,reset:re}}function Cb(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,f=new WeakMap,p=new Set,d,g=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(B,P){return x?new OffscreenCanvas(B,P):Da("canvas")}function _(B,P,X){let K=1,it=qt(B);if((it.width>X||it.height>X)&&(K=X/Math.max(it.width,it.height)),K<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let St=Math.floor(K*it.width),At=Math.floor(K*it.height);d===void 0&&(d=b(St,At));let at=P?b(St,At):d;return at.width=St,at.height=At,at.getContext("2d").drawImage(B,0,0,St,At),oe("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+St+"x"+At+")."),at}else return"data"in B&&oe("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),B;return B}function y(B){return B.generateMipmaps}function w(B){i.generateMipmap(B)}function m(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function u(B,P,X,K,it,St=!1){if(B!==null){if(i[B]!==void 0)return i[B];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let At;K&&(At=t.get("EXT_texture_norm16"),At||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=P;if(P===i.RED&&(X===i.FLOAT&&(at=i.R32F),X===i.HALF_FLOAT&&(at=i.R16F),X===i.UNSIGNED_BYTE&&(at=i.R8),X===i.UNSIGNED_SHORT&&At&&(at=At.R16_EXT),X===i.SHORT&&At&&(at=At.R16_SNORM_EXT)),P===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(at=i.R8UI),X===i.UNSIGNED_SHORT&&(at=i.R16UI),X===i.UNSIGNED_INT&&(at=i.R32UI),X===i.BYTE&&(at=i.R8I),X===i.SHORT&&(at=i.R16I),X===i.INT&&(at=i.R32I)),P===i.RG&&(X===i.FLOAT&&(at=i.RG32F),X===i.HALF_FLOAT&&(at=i.RG16F),X===i.UNSIGNED_BYTE&&(at=i.RG8),X===i.UNSIGNED_SHORT&&At&&(at=At.RG16_EXT),X===i.SHORT&&At&&(at=At.RG16_SNORM_EXT)),P===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(at=i.RG8UI),X===i.UNSIGNED_SHORT&&(at=i.RG16UI),X===i.UNSIGNED_INT&&(at=i.RG32UI),X===i.BYTE&&(at=i.RG8I),X===i.SHORT&&(at=i.RG16I),X===i.INT&&(at=i.RG32I)),P===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(at=i.RGB8UI),X===i.UNSIGNED_SHORT&&(at=i.RGB16UI),X===i.UNSIGNED_INT&&(at=i.RGB32UI),X===i.BYTE&&(at=i.RGB8I),X===i.SHORT&&(at=i.RGB16I),X===i.INT&&(at=i.RGB32I)),P===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),X===i.UNSIGNED_INT&&(at=i.RGBA32UI),X===i.BYTE&&(at=i.RGBA8I),X===i.SHORT&&(at=i.RGBA16I),X===i.INT&&(at=i.RGBA32I)),P===i.RGB&&(X===i.UNSIGNED_SHORT&&At&&(at=At.RGB16_EXT),X===i.SHORT&&At&&(at=At.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(at=i.R11F_G11F_B10F)),P===i.RGBA){let pt=St?Ia:xe.getTransfer(it);X===i.FLOAT&&(at=i.RGBA32F),X===i.HALF_FLOAT&&(at=i.RGBA16F),X===i.UNSIGNED_BYTE&&(at=pt===Pe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&At&&(at=At.RGBA16_EXT),X===i.SHORT&&At&&(at=At.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function v(B,P){let X;return B?P===null||P===Ni||P===Xr?X=i.DEPTH24_STENCIL8:P===_i?X=i.DEPTH32F_STENCIL8:P===Co&&(X=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Ni||P===Xr?X=i.DEPTH_COMPONENT24:P===_i?X=i.DEPTH_COMPONENT32F:P===Co&&(X=i.DEPTH_COMPONENT16),X}function h(B,P){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==fn&&B.minFilter!==Cn?Math.log2(Math.max(P.width,P.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?P.mipmaps.length:1}function C(B){let P=B.target;P.removeEventListener("dispose",C),S(P),P.isVideoTexture&&f.delete(P),P.isHTMLTexture&&p.delete(P)}function M(B){let P=B.target;P.removeEventListener("dispose",M),T(P)}function S(B){let P=n.get(B);if(P.__webglInit===void 0)return;let X=B.source,K=g.get(X);if(K){let it=K[P.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(B),Object.keys(K).length===0&&g.delete(X)}n.remove(B)}function E(B){let P=n.get(B);i.deleteTexture(P.__webglTexture);let X=B.source,K=g.get(X);delete K[P.__cacheKey],o.memory.textures--}function T(B){let P=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(P.__webglFramebuffer[K]))for(let it=0;it<P.__webglFramebuffer[K].length;it++)i.deleteFramebuffer(P.__webglFramebuffer[K][it]);else i.deleteFramebuffer(P.__webglFramebuffer[K]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[K])}else{if(Array.isArray(P.__webglFramebuffer))for(let K=0;K<P.__webglFramebuffer.length;K++)i.deleteFramebuffer(P.__webglFramebuffer[K]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let K=0;K<P.__webglColorRenderbuffer.length;K++)P.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[K]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let X=B.textures;for(let K=0,it=X.length;K<it;K++){let St=n.get(X[K]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(X[K])}n.remove(B)}let A=0;function R(){A=0}function L(){return A}function F(B){A=B}function O(){let B=A;return B>=r.maxTextures&&oe("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+r.maxTextures),A+=1,B}function V(B){let P=[];return P.push(B.wrapS),P.push(B.wrapT),P.push(B.wrapR||0),P.push(B.magFilter),P.push(B.minFilter),P.push(B.anisotropy),P.push(B.internalFormat),P.push(B.format),P.push(B.type),P.push(B.generateMipmaps),P.push(B.premultiplyAlpha),P.push(B.flipY),P.push(B.unpackAlignment),P.push(B.colorSpace),P.join()}function $(B,P){let X=n.get(B);if(B.isVideoTexture&&H(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&X.__version!==B.version){let K=B.image;if(K===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(X,B,P);return}}else B.isExternalTexture&&(X.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+P)}function k(B,P){let X=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&X.__version!==B.version){lt(X,B,P);return}else B.isExternalTexture&&(X.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+P)}function tt(B,P){let X=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&X.__version!==B.version){lt(X,B,P);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+P)}function q(B,P){let X=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&X.__version!==B.version){vt(X,B,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+P)}let ct={[ti]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[$c]:i.MIRRORED_REPEAT},ut={[fn]:i.NEAREST,[_g]:i.NEAREST_MIPMAP_NEAREST,[yl]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Tu]:i.LINEAR_MIPMAP_NEAREST,[Wr]:i.LINEAR_MIPMAP_LINEAR},Et={[Sg]:i.NEVER,[Ag]:i.ALWAYS,[bg]:i.LESS,[uh]:i.LEQUAL,[wg]:i.EQUAL,[hh]:i.GEQUAL,[Eg]:i.GREATER,[Tg]:i.NOTEQUAL};function Mt(B,P){if(P.type===_i&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Cn||P.magFilter===Tu||P.magFilter===yl||P.magFilter===Wr||P.minFilter===Cn||P.minFilter===Tu||P.minFilter===yl||P.minFilter===Wr)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,ct[P.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,ct[P.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,ct[P.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,ut[P.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,ut[P.minFilter]),P.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,Et[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===fn||P.minFilter!==yl&&P.minFilter!==Wr||P.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function kt(B,P){let X=!1;B.__webglInit===void 0&&(B.__webglInit=!0,P.addEventListener("dispose",C));let K=P.source,it=g.get(K);it===void 0&&(it={},g.set(K,it));let St=V(P);if(St!==B.__cacheKey){it[St]===void 0&&(it[St]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),it[St].usedTimes++;let At=it[B.__cacheKey];At!==void 0&&(it[B.__cacheKey].usedTimes--,At.usedTimes===0&&E(P)),B.__cacheKey=St,B.__webglTexture=it[St].texture}return X}function N(B,P,X){return Math.floor(Math.floor(B/X)/P)}function Q(B,P,X,K){let St=B.updateRanges;if(St.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,X,K,P.data);else{St.sort(($t,Ct)=>$t.start-Ct.start);let At=0;for(let $t=1;$t<St.length;$t++){let Ct=St[At],Rt=St[$t],Zt=Ct.start+Ct.count,te=N(Rt.start,P.width,4),re=N(Ct.start,P.width,4);Rt.start<=Zt+1&&te===re&&N(Rt.start+Rt.count-1,P.width,4)===te?Ct.count=Math.max(Ct.count,Rt.start+Rt.count-Ct.start):(++At,St[At]=Rt)}St.length=At+1;let at=e.getParameter(i.UNPACK_ROW_LENGTH),pt=e.getParameter(i.UNPACK_SKIP_PIXELS),Dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let $t=0,Ct=St.length;$t<Ct;$t++){let Rt=St[$t],Zt=Math.floor(Rt.start/4),te=Math.ceil(Rt.count/4),re=Zt%P.width,J=Math.floor(Zt/P.width),wt=te,mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,re),e.pixelStorei(i.UNPACK_SKIP_ROWS,J),e.texSubImage2D(i.TEXTURE_2D,0,re,J,wt,mt,X,K,P.data)}B.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,at),e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function lt(B,P,X){let K=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(K=i.TEXTURE_3D);let it=kt(B,P),St=P.source;e.bindTexture(K,B.__webglTexture,i.TEXTURE0+X);let At=n.get(St);if(St.version!==At.__version||it===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){let mt=xe.getPrimaries(xe.workingColorSpace),It=P.colorSpace===xr?null:xe.getPrimaries(P.colorSpace),Ht=P.colorSpace===xr||mt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment);let pt=_(P.image,!1,r.maxTextureSize);pt=de(P,pt);let Dt=s.convert(P.format,P.colorSpace),$t=s.convert(P.type),Ct=u(P.internalFormat,Dt,$t,P.normalized,P.colorSpace,P.isVideoTexture);Mt(K,P);let Rt,Zt=P.mipmaps,te=P.isVideoTexture!==!0,re=At.__version===void 0||it===!0,J=St.dataReady,wt=h(P,pt);if(P.isDepthTexture)Ct=v(P.format===ji,P.type),re&&(te?e.texStorage2D(i.TEXTURE_2D,1,Ct,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,pt.width,pt.height,0,Dt,$t,null));else if(P.isDataTexture)if(Zt.length>0){te&&re&&e.texStorage2D(i.TEXTURE_2D,wt,Ct,Zt[0].width,Zt[0].height);for(let mt=0,It=Zt.length;mt<It;mt++)Rt=Zt[mt],te?J&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Rt.width,Rt.height,Dt,$t,Rt.data):e.texImage2D(i.TEXTURE_2D,mt,Ct,Rt.width,Rt.height,0,Dt,$t,Rt.data);P.generateMipmaps=!1}else te?(re&&e.texStorage2D(i.TEXTURE_2D,wt,Ct,pt.width,pt.height),J&&Q(P,pt,Dt,$t)):e.texImage2D(i.TEXTURE_2D,0,Ct,pt.width,pt.height,0,Dt,$t,pt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){te&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Ct,Zt[0].width,Zt[0].height,pt.depth);for(let mt=0,It=Zt.length;mt<It;mt++)if(Rt=Zt[mt],P.format!==Yn)if(Dt!==null)if(te){if(J)if(P.layerUpdates.size>0){let Ht=Pd(Rt.width,Rt.height,P.format,P.type);for(let xt of P.layerUpdates){let ne=Rt.data.subarray(xt*Ht/Rt.data.BYTES_PER_ELEMENT,(xt+1)*Ht/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,xt,Rt.width,Rt.height,1,Dt,ne)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Rt.width,Rt.height,pt.depth,Dt,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Ct,Rt.width,Rt.height,pt.depth,0,Rt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?J&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Rt.width,Rt.height,pt.depth,Dt,$t,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Ct,Rt.width,Rt.height,pt.depth,0,Dt,$t,Rt.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{te&&re&&e.texStorage2D(i.TEXTURE_2D,wt,Ct,Zt[0].width,Zt[0].height);for(let mt=0,It=Zt.length;mt<It;mt++)Rt=Zt[mt],P.format!==Yn?Dt!==null?te?J&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Rt.width,Rt.height,Dt,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Ct,Rt.width,Rt.height,0,Rt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?J&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Rt.width,Rt.height,Dt,$t,Rt.data):e.texImage2D(i.TEXTURE_2D,mt,Ct,Rt.width,Rt.height,0,Dt,$t,Rt.data)}else if(P.isDataArrayTexture)if(te){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Ct,pt.width,pt.height,pt.depth),J)if(P.layerUpdates.size>0){let mt=Pd(pt.width,pt.height,P.format,P.type);for(let It of P.layerUpdates){let Ht=pt.data.subarray(It*mt/pt.data.BYTES_PER_ELEMENT,(It+1)*mt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,It,pt.width,pt.height,1,Dt,$t,Ht)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Dt,$t,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,pt.width,pt.height,pt.depth,0,Dt,$t,pt.data);else if(P.isData3DTexture)te?(re&&e.texStorage3D(i.TEXTURE_3D,wt,Ct,pt.width,pt.height,pt.depth),J&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Dt,$t,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,pt.width,pt.height,pt.depth,0,Dt,$t,pt.data);else if(P.isFramebufferTexture){if(re)if(te)e.texStorage2D(i.TEXTURE_2D,wt,Ct,pt.width,pt.height);else{let mt=pt.width,It=pt.height;for(let Ht=0;Ht<wt;Ht++)e.texImage2D(i.TEXTURE_2D,Ht,Ct,mt,It,0,Dt,$t,null),mt>>=1,It>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in i){let mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),pt.parentNode!==mt){mt.appendChild(pt),p.add(P),mt.onpaint=It=>{let Ht=It.changedElements;for(let xt of p)Ht.includes(xt.image)&&(xt.needsUpdate=!0)},mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pt);else{let Ht=i.RGBA,xt=i.RGBA,ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ht,xt,ne,pt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Zt.length>0){if(te&&re){let mt=qt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Ct,mt.width,mt.height)}for(let mt=0,It=Zt.length;mt<It;mt++)Rt=Zt[mt],te?J&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Dt,$t,Rt):e.texImage2D(i.TEXTURE_2D,mt,Ct,Dt,$t,Rt);P.generateMipmaps=!1}else if(te){if(re){let mt=qt(pt);e.texStorage2D(i.TEXTURE_2D,wt,Ct,mt.width,mt.height)}J&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,$t,pt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,Dt,$t,pt);y(P)&&w(K),At.__version=St.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function vt(B,P,X){if(P.image.length!==6)return;let K=kt(B,P),it=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+X);let St=n.get(it);if(it.version!==St.__version||K===!0){e.activeTexture(i.TEXTURE0+X);let At=xe.getPrimaries(xe.workingColorSpace),at=P.colorSpace===xr?null:xe.getPrimaries(P.colorSpace),pt=P.colorSpace===xr||At===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Dt=P.isCompressedTexture||P.image[0].isCompressedTexture,$t=P.image[0]&&P.image[0].isDataTexture,Ct=[];for(let xt=0;xt<6;xt++)!Dt&&!$t?Ct[xt]=_(P.image[xt],!0,r.maxCubemapSize):Ct[xt]=$t?P.image[xt].image:P.image[xt],Ct[xt]=de(P,Ct[xt]);let Rt=Ct[0],Zt=s.convert(P.format,P.colorSpace),te=s.convert(P.type),re=u(P.internalFormat,Zt,te,P.normalized,P.colorSpace),J=P.isVideoTexture!==!0,wt=St.__version===void 0||K===!0,mt=it.dataReady,It=h(P,Rt);Mt(i.TEXTURE_CUBE_MAP,P);let Ht;if(Dt){J&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,re,Rt.width,Rt.height);for(let xt=0;xt<6;xt++){Ht=Ct[xt].mipmaps;for(let ne=0;ne<Ht.length;ne++){let Vt=Ht[ne];P.format!==Yn?Zt!==null?J?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ne,0,0,Vt.width,Vt.height,Zt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ne,re,Vt.width,Vt.height,0,Vt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ne,0,0,Vt.width,Vt.height,Zt,te,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ne,re,Vt.width,Vt.height,0,Zt,te,Vt.data)}}}else{if(Ht=P.mipmaps,J&&wt){Ht.length>0&&It++;let xt=qt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,re,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if($t){J?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ct[xt].width,Ct[xt].height,Zt,te,Ct[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,re,Ct[xt].width,Ct[xt].height,0,Zt,te,Ct[xt].data);for(let ne=0;ne<Ht.length;ne++){let we=Ht[ne].image[xt].image;J?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ne+1,0,0,we.width,we.height,Zt,te,we.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ne+1,re,we.width,we.height,0,Zt,te,we.data)}}else{J?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Zt,te,Ct[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,re,Zt,te,Ct[xt]);for(let ne=0;ne<Ht.length;ne++){let Vt=Ht[ne];J?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ne+1,0,0,Zt,te,Vt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,ne+1,re,Zt,te,Vt.image[xt])}}}y(P)&&w(i.TEXTURE_CUBE_MAP),St.__version=it.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function st(B,P,X,K,it,St){let At=s.convert(X.format,X.colorSpace),at=s.convert(X.type),pt=u(X.internalFormat,At,at,X.normalized,X.colorSpace),Dt=n.get(P),$t=n.get(X);if($t.__renderTarget=P,!Dt.__hasExternalTextures){let Ct=Math.max(1,P.width>>St),Rt=Math.max(1,P.height>>St);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,St,pt,Ct,Rt,P.depth,0,At,at,null):e.texImage2D(it,St,pt,Ct,Rt,0,At,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),Ft(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,it,$t.__webglTexture,0,Ut(P)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,it,$t.__webglTexture,St),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(B,P,X){if(i.bindRenderbuffer(i.RENDERBUFFER,B),P.depthBuffer){let K=P.depthTexture,it=K&&K.isDepthTexture?K.type:null,St=v(P.stencilBuffer,it),At=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ft(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(P),St,P.width,P.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(P),St,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,St,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,B)}else{let K=P.textures;for(let it=0;it<K.length;it++){let St=K[it],At=s.convert(St.format,St.colorSpace),at=s.convert(St.type),pt=u(St.internalFormat,At,at,St.normalized,St.colorSpace);Ft(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(P),pt,P.width,P.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(P),pt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,pt,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(B,P,X){let K=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(P.depthTexture);if(it.__renderTarget=P,(!it.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),K){if(it.__webglInit===void 0&&(it.__webglInit=!0,P.depthTexture.addEventListener("dispose",C)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,P.depthTexture);let Dt=s.convert(P.depthTexture.format),$t=s.convert(P.depthTexture.type),Ct;P.depthTexture.format===$i?Ct=i.DEPTH_COMPONENT24:P.depthTexture.format===ji&&(Ct=i.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Ct,P.width,P.height,0,Dt,$t,null)}}else $(P.depthTexture,0);let St=it.__webglTexture,At=Ut(P),at=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,pt=P.depthTexture.format===ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===$i)Ft(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,at,St,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,pt,at,St,0);else if(P.depthTexture.format===ji)Ft(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,at,St,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,pt,at,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(B){let P=n.get(B),X=B.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==B.depthTexture){let K=B.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),K){let it=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,K.removeEventListener("dispose",it)};K.addEventListener("dispose",it),P.__depthDisposeCallback=it}P.__boundDepthTexture=K}if(B.depthTexture&&!P.__autoAllocateDepthBuffer)if(X)for(let K=0;K<6;K++)Bt(P.__webglFramebuffer[K],B,K);else{let K=B.texture.mipmaps;K&&K.length>0?Bt(P.__webglFramebuffer[0],B,0):Bt(P.__webglFramebuffer,B,0)}else if(X){P.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[K]),P.__webglDepthbuffer[K]===void 0)P.__webglDepthbuffer[K]=i.createRenderbuffer(),dt(P.__webglDepthbuffer[K],B,!1);else{let it=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=P.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,St)}}else{let K=B.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),dt(P.__webglDepthbuffer,B,!1);else{let it=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,St)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(B,P,X){let K=n.get(B);P!==void 0&&st(K.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&j(B)}function ot(B){let P=B.texture,X=n.get(B),K=n.get(P);B.addEventListener("dispose",M);let it=B.textures,St=B.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=P.version,o.memory.textures++),St){X.__webglFramebuffer=[];for(let at=0;at<6;at++)if(P.mipmaps&&P.mipmaps.length>0){X.__webglFramebuffer[at]=[];for(let pt=0;pt<P.mipmaps.length;pt++)X.__webglFramebuffer[at][pt]=i.createFramebuffer()}else X.__webglFramebuffer[at]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){X.__webglFramebuffer=[];for(let at=0;at<P.mipmaps.length;at++)X.__webglFramebuffer[at]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(At)for(let at=0,pt=it.length;at<pt;at++){let Dt=n.get(it[at]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&Ft(B)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let at=0;at<it.length;at++){let pt=it[at];X.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[at]);let Dt=s.convert(pt.format,pt.colorSpace),$t=s.convert(pt.type),Ct=u(pt.internalFormat,Dt,$t,pt.normalized,pt.colorSpace,B.isXRRenderTarget===!0),Rt=Ut(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Ct,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,X.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(X.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(St){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,P);for(let at=0;at<6;at++)if(P.mipmaps&&P.mipmaps.length>0)for(let pt=0;pt<P.mipmaps.length;pt++)st(X.__webglFramebuffer[at][pt],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else st(X.__webglFramebuffer[at],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);y(P)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let at=0,pt=it.length;at<pt;at++){let Dt=it[at],$t=n.get(Dt),Ct=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ct=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,$t.__webglTexture),Mt(Ct,Dt),st(X.__webglFramebuffer,B,Dt,i.COLOR_ATTACHMENT0+at,Ct,0),y(Dt)&&w(Ct)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(at=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),Mt(at,P),P.mipmaps&&P.mipmaps.length>0)for(let pt=0;pt<P.mipmaps.length;pt++)st(X.__webglFramebuffer[pt],B,P,i.COLOR_ATTACHMENT0,at,pt);else st(X.__webglFramebuffer,B,P,i.COLOR_ATTACHMENT0,at,0);y(P)&&w(at),e.unbindTexture()}B.depthBuffer&&j(B)}function ht(B){let P=B.textures;for(let X=0,K=P.length;X<K;X++){let it=P[X];if(y(it)){let St=m(B),At=n.get(it).__webglTexture;e.bindTexture(St,At),w(St),e.unbindTexture()}}}let bt=[],Pt=[];function Tt(B){if(B.samples>0){if(Ft(B)===!1){let P=B.textures,X=B.width,K=B.height,it=i.COLOR_BUFFER_BIT,St=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(B),at=P.length>1;if(at)for(let Dt=0;Dt<P.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);let pt=B.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Dt=0;Dt<P.length;Dt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Dt]);let $t=n.get(P[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,X,K,0,0,X,K,it,i.NEAREST),l===!0&&(bt.length=0,Pt.length=0,bt.push(i.COLOR_ATTACHMENT0+Dt),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(bt.push(St),Pt.push(St),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Dt=0;Dt<P.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Dt]);let $t=n.get(P[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&l){let P=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function Ut(B){return Math.min(r.maxSamples,B.samples)}function Ft(B){let P=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function H(B){let P=o.render.frame;f.get(B)!==P&&(f.set(B,P),B.update())}function de(B,P){let X=B.colorSpace,K=B.format,it=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||X!==Pa&&X!==xr&&(xe.getTransfer(X)===Pe?(K!==Yn||it!==xn)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",X)),P}function qt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=R,this.getTextureUnits=L,this.setTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=k,this.setTexture3D=tt,this.setTextureCube=q,this.rebindTextures=rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Pb(i,t){function e(n,r=xr){let s,o=xe.getTransfer(r);if(n===xn)return i.UNSIGNED_BYTE;if(n===Ru)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_d)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gd)return i.BYTE;if(n===xd)return i.SHORT;if(n===Co)return i.UNSIGNED_SHORT;if(n===Au)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===yd)return i.ALPHA;if(n===Md)return i.RGB;if(n===Yn)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===Pu)return i.RED;if(n===Iu)return i.RED_INTEGER;if(n===qr)return i.RG;if(n===Du)return i.RG_INTEGER;if(n===Lu)return i.RGBA_INTEGER;if(n===Ml||n===Sl||n===bl||n===wl)if(o===Pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nu||n===Uu||n===Fu||n===Bu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ou||n===zu||n===Vu||n===ku||n===Hu||n===El||n===Gu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ou||n===zu)return o===Pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ku)return s.COMPRESSED_R11_EAC;if(n===Hu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===El)return s.COMPRESSED_RG11_EAC;if(n===Gu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wu||n===Xu||n===qu||n===Yu||n===Zu||n===$u||n===Ju||n===Ku||n===ju||n===Qu||n===th||n===eh||n===nh||n===ih)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$u)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ju)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ku)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ju)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qu)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===th)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eh)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nh)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ih)return o===Pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rh||n===sh||n===oh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===rh)return o===Pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ah||n===lh||n===Tl||n===ch)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ah)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ch)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Db=`
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

}`,$d=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Wa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Oe({vertexShader:Ib,fragmentShader:Db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jd=class extends Ji{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,p=null,d=null,g=null,x=null,b=typeof XRWebGLBinding<"u",_=new $d,y={},w=e.getContextAttributes(),m=null,u=null,v=[],h=[],C=new _t,M=null,S=null,E=new Tn;E.viewport=new _e;let T=new Tn;T.viewport=new _e;let A=[E,T],R=new yu,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Q=v[N];return Q===void 0&&(Q=new _o,v[N]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(N){let Q=v[N];return Q===void 0&&(Q=new _o,v[N]=Q),Q.getGripSpace()},this.getHand=function(N){let Q=v[N];return Q===void 0&&(Q=new _o,v[N]=Q),Q.getHandSpace()};function O(N){let Q=h.indexOf(N.inputSource);if(Q===-1)return;let lt=v[Q];lt!==void 0&&(lt.update(N.inputSource,N.frame,c||o),lt.dispatchEvent({type:N.type,data:N.inputSource}))}function V(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",$);for(let N=0;N<v.length;N++){let Q=h[N];Q!==null&&(h[N]=null,v[N].disconnect(Q))}L=null,F=null,_.reset();for(let N in y)delete y[N];if(t.setRenderTarget(m),g=null,d=null,p=null,r=null,u=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(C.width,C.height,!1),S!==null){let N=S.camera;N.fov=S.fov,N.zoom=S.zoom,N.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",V),r.addEventListener("inputsourceschange",$),w.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,vt=null,st=null;w.depth&&(st=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=w.stencil?ji:$i,vt=w.stencil?Xr:Ni);let dt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(dt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),u=new en(d.textureWidth,d.textureHeight,{format:Yn,type:xn,depthTexture:new Ki(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let lt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,lt),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new en(g.framebufferWidth,g.framebufferHeight,{format:Yn,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),kt.setContext(r),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(N){for(let Q=0;Q<N.removed.length;Q++){let lt=N.removed[Q],vt=h.indexOf(lt);vt>=0&&(h[vt]=null,v[vt].disconnect(lt))}for(let Q=0;Q<N.added.length;Q++){let lt=N.added[Q],vt=h.indexOf(lt);if(vt===-1){for(let dt=0;dt<v.length;dt++)if(dt>=h.length){h.push(lt),vt=dt;break}else if(h[dt]===null){h[dt]=lt,vt=dt;break}if(vt===-1)break}let st=v[vt];st&&st.connect(lt)}}let k=new D,tt=new D;function q(N,Q,lt){k.setFromMatrixPosition(Q.matrixWorld),tt.setFromMatrixPosition(lt.matrixWorld);let vt=k.distanceTo(tt),st=Q.projectionMatrix.elements,dt=lt.projectionMatrix.elements,Bt=st[14]/(st[10]-1),j=st[14]/(st[10]+1),rt=(st[9]+1)/st[5],ot=(st[9]-1)/st[5],ht=(st[8]-1)/st[0],bt=(dt[8]+1)/dt[0],Pt=Bt*ht,Tt=Bt*bt,Ut=vt/(-ht+bt),Ft=Ut*-ht;if(Q.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ft),N.translateZ(Ut),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),st[10]===-1)N.projectionMatrix.copy(Q.projectionMatrix),N.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let H=Bt+Ut,de=j+Ut,qt=Pt-Ft,B=Tt+(vt-Ft),P=rt*j/de*H,X=ot*j/de*H;N.projectionMatrix.makePerspective(qt,B,P,X,H,de),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function ct(N,Q){Q===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Q.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;let Q=N.near,lt=N.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(lt=_.depthFar)),R.near=T.near=E.near=Q,R.far=T.far=E.far=lt,(L!==R.near||F!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),L=R.near,F=R.far),R.layers.mask=N.layers.mask|6,E.layers.mask=R.layers.mask&-5,T.layers.mask=R.layers.mask&-3;let vt=N.parent,st=R.cameras;ct(R,vt);for(let dt=0;dt<st.length;dt++)ct(st[dt],vt);st.length===2?q(R,E,T):R.projectionMatrix.copy(E.projectionMatrix),S===null&&N.isPerspectiveCamera&&(S={camera:N,fov:N.fov,zoom:N.zoom}),ut(N,R,vt)};function ut(N,Q,lt){lt===null?N.matrix.copy(Q.matrixWorld):(N.matrix.copy(lt.matrixWorld),N.matrix.invert(),N.matrix.multiply(Q.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(Q.projectionMatrix),N.projectionMatrixInverse.copy(Q.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=mo*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=N)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(R)},this.getCameraTexture=function(N){return y[N]};let Et=null;function Mt(N,Q){if(f=Q.getViewerPose(c||o),x=Q,f!==null){let lt=f.views;g!==null&&(t.setRenderTargetFramebuffer(u,g.framebuffer),t.setRenderTarget(u));let vt=!1;lt.length!==R.cameras.length&&(R.cameras.length=0,vt=!0);for(let j=0;j<lt.length;j++){let rt=lt[j],ot=null;if(g!==null)ot=g.getViewport(rt);else{let bt=p.getViewSubImage(d,rt);ot=bt.viewport,j===0&&(t.setRenderTargetTextures(u,bt.colorTexture,bt.depthStencilTexture),t.setRenderTarget(u))}let ht=A[j];ht===void 0&&(ht=new Tn,ht.layers.enable(j),ht.viewport=new _e,A[j]=ht),ht.matrix.fromArray(rt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(rt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ot.x,ot.y,ot.width,ot.height),j===0&&(R.matrix.copy(ht.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),vt===!0&&R.cameras.push(ht)}let st=r.enabledFeatures;if(st&&st.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let j=p.getDepthInformation(lt[0]);j&&j.isValid&&j.texture&&_.init(j,r.renderState)}if(st&&st.includes("camera-access")&&b){t.state.unbindTexture(),p=n.getBinding();for(let j=0;j<lt.length;j++){let rt=lt[j].camera;if(rt){let ot=y[rt];ot||(ot=new Wa,y[rt]=ot);let ht=p.getCameraImage(rt);ot.sourceTexture=ht}}}}for(let lt=0;lt<v.length;lt++){let vt=h[lt],st=v[lt];vt!==null&&st!==void 0&&st.update(vt,Q,c||o)}Et&&Et(N,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),x=null}let kt=new a0;kt.setAnimationLoop(Mt),this.setAnimationLoop=function(N){Et=N},this.dispose=function(){}}},Lb=new Wt,d0=new ce;d0.set(-1,0,0,0,1,0,0,0,1);function Nb(i,t){function e(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function n(_,y){y.color.getRGB(_.fogColor.value,Ad(i)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function r(_,y,w,m,u){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?s(_,y):y.isMeshLambertMaterial?(s(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(s(_,y),p(_,y)):y.isMeshPhongMaterial?(s(_,y),f(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(s(_,y),d(_,y),y.isMeshPhysicalMaterial&&g(_,y,u)):y.isMeshMatcapMaterial?(s(_,y),x(_,y)):y.isMeshDepthMaterial?s(_,y):y.isMeshDistanceMaterial?(s(_,y),b(_,y)):y.isMeshNormalMaterial?s(_,y):y.isLineBasicMaterial?(o(_,y),y.isLineDashedMaterial&&a(_,y)):y.isPointsMaterial?l(_,y,w,m):y.isSpriteMaterial?c(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function s(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,e(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,e(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===cn&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,e(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===cn&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,e(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,e(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);let w=t.get(y),m=w.envMap,u=w.envMapRotation;m&&(_.envMap.value=m,_.envMapRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(u)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(d0),_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,_.aoMapTransform))}function o(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,e(y.map,_.mapTransform))}function a(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function l(_,y,w,m){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*w,_.scale.value=m*.5,y.map&&(_.map.value=y.map,e(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function c(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,e(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,e(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function f(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function p(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function d(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function g(_,y,w){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===cn&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.retroreflectivity>0&&(_.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,y){y.matcap&&(_.matcap.value=y.matcap)}function b(_,y){let w=t.get(y).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ub(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,v){let h=v.program;n.uniformBlockBinding(u,h)}function c(u,v){let h=r[u.id];h===void 0&&(_(u),h=f(u),r[u.id]=h,u.addEventListener("dispose",w));let C=v.program;n.updateUBOMapping(u,C);let M=t.render.frame;s[u.id]!==M&&(d(u),s[u.id]=M)}function f(u){let v=p();u.__bindingPointIndex=v;let h=i.createBuffer(),C=u.__size,M=u.usage;return i.bindBuffer(i.UNIFORM_BUFFER,h),i.bufferData(i.UNIFORM_BUFFER,C,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,h),h}function p(){for(let u=0;u<a;u++)if(o.indexOf(u)===-1)return o.push(u),u;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(u){let v=r[u.id],h=u.uniforms,C=u.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let M=0,S=h.length;M<S;M++){let E=h[M];if(Array.isArray(E))for(let T=0,A=E.length;T<A;T++)g(E[T],M,T,C);else g(E,M,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(u,v,h,C){if(b(u,v,h,C)===!0){let M=u.__offset,S=u.value;if(Array.isArray(S)){let E=0;for(let T=0;T<S.length;T++){let A=S[T],R=y(A);x(A,u.__data,E),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(E+=R.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(S,u.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,u.__data)}}function x(u,v,h){typeof u=="number"||typeof u=="boolean"?v[0]=u:u.isMatrix3?(v[0]=u.elements[0],v[1]=u.elements[1],v[2]=u.elements[2],v[3]=0,v[4]=u.elements[3],v[5]=u.elements[4],v[6]=u.elements[5],v[7]=0,v[8]=u.elements[6],v[9]=u.elements[7],v[10]=u.elements[8],v[11]=0):ArrayBuffer.isView(u)?v.set(new u.constructor(u.buffer,u.byteOffset,v.length)):u.toArray(v,h)}function b(u,v,h,C){let M=u.value,S=v+"_"+h;if(C[S]===void 0)return typeof M=="number"||typeof M=="boolean"?C[S]=M:ArrayBuffer.isView(M)?C[S]=M.slice():C[S]=M.clone(),!0;{let E=C[S];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return C[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(E.equals(M)===!1)return E.copy(M),!0}}return!1}function _(u){let v=u.uniforms,h=0,C=16;for(let S=0,E=v.length;S<E;S++){let T=Array.isArray(v[S])?v[S]:[v[S]];for(let A=0,R=T.length;A<R;A++){let L=T[A],F=Array.isArray(L.value)?L.value:[L.value];for(let O=0,V=F.length;O<V;O++){let $=F[O],k=y($),tt=h%C,q=tt%k.boundary,ct=tt+q;h+=q,ct!==0&&C-ct<k.storage&&(h+=C-ct),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=h,h+=k.storage}}}let M=h%C;return M>0&&(h+=C-M),u.__size=h,u.__cache={},this}function y(u){let v={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(v.boundary=4,v.storage=4):u.isVector2?(v.boundary=8,v.storage=8):u.isVector3||u.isColor?(v.boundary=16,v.storage=12):u.isVector4?(v.boundary=16,v.storage=16):u.isMatrix3?(v.boundary=48,v.storage=48):u.isMatrix4?(v.boundary=64,v.storage=64):u.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(u)?(v.boundary=16,v.storage=u.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",u),v}function w(u){let v=u.target;v.removeEventListener("dispose",w);let h=o.indexOf(v.__bindingPointIndex);o.splice(h,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(let u in r)i.deleteBuffer(r[u]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}var Fb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qi=null;function Bb(){return Qi===null&&(Qi=new mr(Fb,16,16,qr,Sn),Qi.name="DFG_LUT",Qi.minFilter=Cn,Qi.magFilter=Cn,Qi.wrapS=Yi,Qi.wrapT=Yi,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}var Pl=class{constructor(t={}){let{canvas:e=Rg(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:g=xn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;let b=g,_=new Set([Lu,Du,Iu]),y=new Set([xn,Ni,Co,Xr,Ru,Cu]),w=new Uint32Array(4),m=new Int32Array(4),u=new D,v=null,h=null,C=[],M=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,T=!1,A=null,R=null,L=null,F=null;this._outputColorSpace=Rn;let O=0,V=0,$=null,k=-1,tt=null,q=new _e,ct=new _e,ut=null,Et=new Qt(0),Mt=0,kt=e.width,N=e.height,Q=1,lt=null,vt=null,st=new _e(0,0,kt,N),dt=new _e(0,0,kt,N),Bt=!1,j=new yo,rt=!1,ot=!1,ht=new Wt,bt=new D,Pt=new _e,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function Ft(){return $===null?Q:1}let H=n;function de(U,Z){return e.getContext(U,Z)}let qt,B,P,X,K,it,St,At,at,pt,Dt,$t,Ct,Rt,Zt,te,re,J,wt,mt,It,Ht,xt;try{let U={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",le,!1),H===null){let Z="webgl2";if(H=de(Z,U),H===null)throw de(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(U){throw e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",le,!1),se("WebGLRenderer: "+U.message),U}function ne(){qt=new WS(H),qt.init(),It=new Pb(H,qt),B=new NS(H,qt,t,It),P=new Rb(H,qt),B.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),R=H.createFramebuffer(),L=H.createFramebuffer(),F=H.createFramebuffer(),X=new YS(H),K=new pb,it=new Cb(H,qt,P,K,B,It,X),St=new GS(E),At=new $v(H),Ht=new DS(H,At),at=new XS(H,At,X,Ht),pt=new $S(H,at,At,Ht,X),J=new ZS(H,B,it),Zt=new US(K),Dt=new db(E,St,qt,B,Ht,Zt),$t=new Nb(E,K),Ct=new gb,Rt=new Sb(qt),re=new IS(E,St,P,pt,x,l),te=new Ab(E,pt,B),xt=new Ub(H,X,B,P),wt=new LS(H,qt,X),mt=new qS(H,qt,X),X.programs=Dt.programs,E.capabilities=B,E.extensions=qt,E.properties=K,E.renderLists=Ct,E.shadowMap=te,E.state=P,E.info=X}b!==xn&&(S=new KS(b,e.width,e.height,a,r,s));let Vt=new Jd(E,H);this.xr=Vt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let U=qt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=qt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(U){U!==void 0&&(Q=U,this.setSize(kt,N,!1))},this.getSize=function(U){return U.set(kt,N)},this.setSize=function(U,Z,nt=!0){if(Vt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=U,N=Z,e.width=Math.floor(U*Q),e.height=Math.floor(Z*Q),nt===!0&&(e.style.width=U+"px",e.style.height=Z+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,U,Z)},this.getDrawingBufferSize=function(U){return U.set(kt*Q,N*Q).floor()},this.setDrawingBufferSize=function(U,Z,nt){kt=U,N=Z,Q=nt,e.width=Math.floor(U*nt),e.height=Math.floor(Z*nt),this.setViewport(0,0,U,Z)},this.setEffects=function(U){if(b===xn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let Z=0;Z<U.length;Z++)if(U[Z].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(q)},this.getViewport=function(U){return U.copy(st)},this.setViewport=function(U,Z,nt,G){U.isVector4?st.set(U.x,U.y,U.z,U.w):st.set(U,Z,nt,G),P.viewport(q.copy(st).multiplyScalar(Q).round())},this.getScissor=function(U){return U.copy(dt)},this.setScissor=function(U,Z,nt,G){U.isVector4?dt.set(U.x,U.y,U.z,U.w):dt.set(U,Z,nt,G),P.scissor(ct.copy(dt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(U){P.setScissorTest(Bt=U)},this.setOpaqueSort=function(U){lt=U},this.setTransparentSort=function(U){vt=U},this.getClearColor=function(U){return U.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(U=!0,Z=!0,nt=!0){let G=0;if(U){let et=!1;if($!==null){let Ot=$.texture.format;et=_.has(Ot)}if(et){let Ot=$.texture.type,Yt=y.has(Ot),zt=re.getClearColor(),Jt=re.getClearAlpha(),jt=zt.r,fe=zt.g,me=zt.b;Yt?(w[0]=jt,w[1]=fe,w[2]=me,w[3]=Jt,H.clearBufferuiv(H.COLOR,0,w)):(m[0]=jt,m[1]=fe,m[2]=me,m[3]=Jt,H.clearBufferiv(H.COLOR,0,m))}else G|=H.COLOR_BUFFER_BIT}Z&&(G|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(G|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),A=U},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",le,!1),re.dispose(),Ct.dispose(),Rt.dispose(),K.dispose(),St.dispose(),pt.dispose(),Ht.dispose(),xt.dispose(),Dt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Os),Vt.removeEventListener("sessionend",wr),sr.stop()};function we(U){U.preventDefault(),La("WebGLRenderer: Context Lost."),T=!0}function ve(){La("WebGLRenderer: Context Restored."),T=!1;let U=X.autoReset,Z=te.enabled,nt=te.autoUpdate,G=te.needsUpdate,et=te.type;ne(),X.autoReset=U,te.enabled=Z,te.autoUpdate=nt,te.needsUpdate=G,te.type=et}function le(U){se("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Ln(U){let Z=U.target;Z.removeEventListener("dispose",Ln),Fs(Z)}function Fs(U){pa(U),K.remove(U)}function pa(U){let Z=K.get(U).programs;Z!==void 0&&(Z.forEach(function(nt){Dt.releaseProgram(nt)}),U.isShaderMaterial&&Dt.releaseShaderCache(U))}this.renderBufferDirect=function(U,Z,nt,G,et,Ot){Z===null&&(Z=Tt);let Yt=et.isMesh&&et.matrixWorld.determinantAffine()<0,zt=ss(U,Z,nt,G,et);P.setMaterial(G,Yt);let Jt=nt.index,jt=1;if(G.wireframe===!0){if(Jt=at.getWireframeAttribute(nt),Jt===void 0)return;jt=2}let fe=nt.drawRange,me=nt.attributes.position,Kt=fe.start*jt,Re=(fe.start+fe.count)*jt;Ot!==null&&(Kt=Math.max(Kt,Ot.start*jt),Re=Math.min(Re,(Ot.start+Ot.count)*jt)),Jt!==null?(Kt=Math.max(Kt,0),Re=Math.min(Re,Jt.count)):me!=null&&(Kt=Math.max(Kt,0),Re=Math.min(Re,me.count));let on=Re-Kt;if(on<0||on===1/0)return;Ht.setup(et,G,zt,nt,Jt);let Ge,Ce=wt;if(Jt!==null&&(Ge=At.get(Jt),Ce=mt,Ce.setIndex(Ge)),et.isMesh)G.wireframe===!0?(P.setLineWidth(G.wireframeLinewidth*Ft()),Ce.setMode(H.LINES)):Ce.setMode(H.TRIANGLES);else if(et.isLine){let an=G.linewidth;an===void 0&&(an=1),P.setLineWidth(an*Ft()),et.isLineSegments?Ce.setMode(H.LINES):et.isLineLoop?Ce.setMode(H.LINE_LOOP):Ce.setMode(H.LINE_STRIP)}else et.isPoints?Ce.setMode(H.POINTS):et.isSprite&&Ce.setMode(H.TRIANGLES);if(et.isBatchedMesh)if(qt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let an=et._multiDrawStarts,Xt=et._multiDrawCounts,vn=et._multiDrawCount,Se=Jt?At.get(Jt).bytesPerElement:1,mn=K.get(G).currentProgram.getUniforms();for(let Kn=0;Kn<vn;Kn++)mn.setValue(H,"_gl_DrawID",Kn),Ce.render(an[Kn]/Se,Xt[Kn])}else if(et.isInstancedMesh)Ce.renderInstances(Kt,on,et.count);else if(nt.isInstancedBufferGeometry){let an=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Xt=Math.min(nt.instanceCount,an);Ce.renderInstances(Kt,on,Xt)}else Ce.render(Kt,on)};function br(U,Z,nt,G){A!==null&&U.isNodeMaterial&&A.setObject(G,U),rt===!0&&Zt.setState(U,nt,!1),U.transparent===!0&&U.side===An&&U.forceSinglePass===!1?(U.side=cn,U.needsUpdate=!0,rs(U,Z,G),U.side=ri,U.needsUpdate=!0,rs(U,Z,G),U.side=An):rs(U,Z,G)}this.compile=function(U,Z,nt=null){nt===null&&(nt=U),A!==null&&A.renderStart(U,Z,nt),h=Rt.get(nt),h.init(Z),M.push(h),nt.traverseVisible(function(et){et.isLight&&et.layers.test(Z.layers)&&(h.pushLight(et),et.castShadow&&h.pushShadow(et))}),U!==nt&&U.traverseVisible(function(et){et.isLight&&et.layers.test(Z.layers)&&(h.pushLight(et),et.castShadow&&h.pushShadow(et))}),h.setupLights(),A!==null&&A.updateLights(h.state.lightsArray),ot=this.localClippingEnabled,rt=Zt.init(this.clippingPlanes,ot),rt===!0&&Zt.setGlobalState(this.clippingPlanes,Z),A!==null&&te.render(h.state.shadowsArray,nt,Z);let G=new Set;return U.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let Ot=et.material;if(Ot)if(Array.isArray(Ot))for(let Yt=0;Yt<Ot.length;Yt++){let zt=Ot[Yt];br(zt,nt,Z,et),G.add(zt)}else br(Ot,nt,Z,et),G.add(Ot)}),h=M.pop(),A!==null&&A.renderEnd(),G},this.compileAsync=function(U,Z,nt=null){let G=this.compile(U,Z,nt);return new Promise(et=>{function Ot(){if(G.forEach(function(Yt){let Jt=K.get(Yt).currentProgram;(Jt===void 0||Jt.isReady())&&G.delete(Yt)}),G.size===0){et(U);return}setTimeout(Ot,10)}qt.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let ac=null;function Bs(U){ac&&ac(U)}function Os(){sr.stop()}function wr(){sr.start()}let sr=new a0;sr.setAnimationLoop(Bs),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(U){ac=U,Vt.setAnimationLoop(U),U===null?sr.stop():sr.start()},Vt.addEventListener("sessionstart",Os),Vt.addEventListener("sessionend",wr),this.render=function(U,Z){if(Z!==void 0&&Z.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A!==null&&A.renderStart(U,Z);let nt=Vt.enabled===!0&&Vt.isPresenting===!0,G=S!==null&&($===null||nt)&&S.begin(E,$);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(Z),Z=Vt.getCamera()),U.isScene===!0&&U.onBeforeRender(E,U,Z,$),h=Rt.get(U,M.length),h.init(Z),h.state.textureUnits=it.getTextureUnits(),M.push(h),ht.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),j.setFromProjectionMatrix(ht,Pi,Z.reversedDepth),ot=this.localClippingEnabled,rt=Zt.init(this.clippingPlanes,ot),v=Ct.get(U,C.length),v.init(),C.push(v),Vt.enabled===!0&&Vt.isPresenting===!0){let Yt=E.xr.getDepthSensingMesh();Yt!==null&&Hi(Yt,Z,-1/0,E.sortObjects)}Hi(U,Z,0,E.sortObjects),v.finish(),A!==null&&A.updateLights(h.state.lightsArray),E.sortObjects===!0&&v.sort(lt,vt),Ut=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,Ut&&re.addToRenderList(v,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Zt.beginShadows();let et=h.state.shadowsArray;if(te.render(et,U,Z),rt===!0&&Zt.endShadows(),(G&&S.hasRenderPass())===!1){let Yt=v.opaque,zt=v.transmissive;if(h.setupLights(),Z.isArrayCamera){let Jt=Z.cameras;if(zt.length>0)for(let jt=0,fe=Jt.length;jt<fe;jt++){let me=Jt[jt];ns(Yt,zt,U,me)}Ut&&re.render(U);for(let jt=0,fe=Jt.length;jt<fe;jt++){let me=Jt[jt];Vn(v,U,me,me.viewport)}}else zt.length>0&&ns(Yt,zt,U,Z),Ut&&re.render(U),Vn(v,U,Z)}$!==null&&V===0&&(it.updateMultisampleRenderTarget($),it.updateRenderTargetMipmap($)),G&&S.end(E),U.isScene===!0&&U.onAfterRender(E,U,Z),Ht.resetDefaultState(),k=-1,tt=null,M.pop(),M.length>0?(h=M[M.length-1],it.setTextureUnits(h.state.textureUnits),rt===!0&&Zt.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,C.pop(),C.length>0?v=C[C.length-1]:v=null,A!==null&&A.renderEnd()};function Hi(U,Z,nt,G){if(U.visible===!1)return;if(U.layers.test(Z.layers)){if(U.isGroup)nt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Z);else if(U.isLightProbeGrid)h.pushLightProbeGrid(U);else if(U.isLight)h.pushLight(U),U.castShadow&&h.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(j)){G&&Pt.setFromMatrixPosition(U.matrixWorld).applyMatrix4(ht);let Yt=pt.update(U),zt=U.material;zt.visible&&v.push(U,Yt,zt,nt,Pt.z,null,Z)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(j))){let Yt=pt.update(U),zt=U.material;if(G&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Pt.copy(U.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),Pt.copy(Yt.boundingSphere.center)),Pt.applyMatrix4(U.matrixWorld).applyMatrix4(ht)),Array.isArray(zt)){let Jt=Yt.groups;for(let jt=0,fe=Jt.length;jt<fe;jt++){let me=Jt[jt],Kt=zt[me.materialIndex];Kt&&Kt.visible&&v.push(U,Yt,Kt,nt,Pt.z,me,Z)}}else zt.visible&&v.push(U,Yt,zt,nt,Pt.z,null,Z)}}let Ot=U.children;for(let Yt=0,zt=Ot.length;Yt<zt;Yt++)Hi(Ot[Yt],Z,nt,G)}function Vn(U,Z,nt,G){let{opaque:et,transmissive:Ot,transparent:Yt}=U;h.setupLightsView(nt),rt===!0&&Zt.setGlobalState(E.clippingPlanes,nt),G&&P.viewport(q.copy(G)),et.length>0&&is(et,Z,nt),Ot.length>0&&is(Ot,Z,nt),Yt.length>0&&is(Yt,Z,nt),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function ns(U,Z,nt,G){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(h.state.transmissionRenderTarget[G.id]===void 0){let Kt=qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float");h.state.transmissionRenderTarget[G.id]=new en(1,1,{generateMipmaps:!0,type:Kt?Sn:xn,minFilter:Wr,samples:Math.max(4,B.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let Ot=h.state.transmissionRenderTarget[G.id],Yt=G.viewport||q;Ot.setSize(Yt.z*E.transmissionResolutionScale,Yt.w*E.transmissionResolutionScale);let zt=E.getRenderTarget(),Jt=E.getActiveCubeFace(),jt=E.getActiveMipmapLevel();E.setRenderTarget(Ot),E.getClearColor(Et),Mt=E.getClearAlpha(),Mt<1&&E.setClearColor(16777215,.5),E.clear(),Ut&&re.render(nt);let fe=E.toneMapping;E.toneMapping=Li;let me=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),rt===!0&&Zt.setGlobalState(E.clippingPlanes,G),is(U,nt,G),it.updateMultisampleRenderTarget(Ot),it.updateRenderTargetMipmap(Ot),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Re=0,on=Z.length;Re<on;Re++){let Ge=Z[Re],{object:Ce,geometry:an,material:Xt,group:vn}=Ge;if(Xt.side===An&&Ce.layers.test(G.layers)){let Se=Xt.side;Xt.side=cn,Xt.needsUpdate=!0,zs(Ce,nt,G,an,Xt,vn),Xt.side=Se,Xt.needsUpdate=!0,Kt=!0}}Kt===!0&&(it.updateMultisampleRenderTarget(Ot),it.updateRenderTargetMipmap(Ot))}E.setRenderTarget(zt,Jt,jt),E.setClearColor(Et,Mt),me!==void 0&&(G.viewport=me),E.toneMapping=fe}function is(U,Z,nt){let G=Z.isScene===!0?Z.overrideMaterial:null;for(let et=0,Ot=U.length;et<Ot;et++){let Yt=U[et],{object:zt,geometry:Jt,group:jt}=Yt,fe=Yt.material;fe.allowOverride===!0&&G!==null&&(fe=G),zt.layers.test(nt.layers)&&zs(zt,Z,nt,Jt,fe,jt)}}function zs(U,Z,nt,G,et,Ot){A!==null&&et.isNodeMaterial&&A.setObject(U,et),U.onBeforeRender(E,Z,nt,G,et,Ot),U.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),et.onBeforeRender(E,Z,nt,G,U,Ot),et.transparent===!0&&et.side===An&&et.forceSinglePass===!1?(et.side=cn,et.needsUpdate=!0,E.renderBufferDirect(nt,Z,G,et,U,Ot),et.side=ri,et.needsUpdate=!0,E.renderBufferDirect(nt,Z,G,et,U,Ot),et.side=An):E.renderBufferDirect(nt,Z,G,et,U,Ot),U.onAfterRender(E,Z,nt,G,et,Ot)}function rs(U,Z,nt){Z.isScene!==!0&&(Z=Tt);let G=K.get(U),et=h.state.lights,Ot=h.state.shadowsArray,Yt=et.state.version,zt=Dt.getParameters(U,et.state,Ot,Z,nt,h.state.lightProbeGridArray),Jt=Dt.getProgramCacheKey(zt),jt=G.programs;G.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?Z.environment:null,G.fog=Z.fog;let fe=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;G.envMap=St.get(U.envMap||G.environment,fe),G.envMapRotation=G.environment!==null&&U.envMap===null?Z.environmentRotation:U.envMapRotation,jt===void 0&&(U.addEventListener("dispose",Ln),jt=new Map,G.programs=jt);let me=jt.get(Jt);if(me!==void 0){if(G.currentProgram===me&&G.lightsStateVersion===Yt)return or(U,zt),me}else zt.uniforms=Dt.getUniforms(U),A!==null&&U.isNodeMaterial&&A.build(U,nt,zt),U.onBeforeCompile(zt,E),me=Dt.acquireProgram(zt,Jt),jt.set(Jt,me),G.uniforms=zt.uniforms;let Kt=G.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Kt.clippingPlanes=Zt.uniform),or(U,zt),G.needsLights=cc(U),G.lightsStateVersion=Yt,G.needsLights&&(Kt.ambientLightColor.value=et.state.ambient,Kt.lightProbe.value=et.state.probe,Kt.sunLights.value=et.state.sun,Kt.sunLightShadows.value=et.state.sunShadow,Kt.directionalLights.value=et.state.directional,Kt.directionalLightShadows.value=et.state.directionalShadow,Kt.spotLights.value=et.state.spot,Kt.spotLightShadows.value=et.state.spotShadow,Kt.rectAreaLights.value=et.state.rectArea,Kt.ltc_1.value=et.state.rectAreaLTC1,Kt.ltc_2.value=et.state.rectAreaLTC2,Kt.pointLights.value=et.state.point,Kt.pointLightShadows.value=et.state.pointShadow,Kt.hemisphereLights.value=et.state.hemi,Kt.sunShadowMatrix.value=et.state.sunShadowMatrix,Kt.sunShadowCascade.value=et.state.sunShadowCascade,Kt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Kt.spotLightMatrix.value=et.state.spotLightMatrix,Kt.spotLightMap.value=et.state.spotLightMap,Kt.pointShadowMatrix.value=et.state.pointShadowMatrix),G.lightProbeGrid=h.state.lightProbeGridArray.length>0,G.currentProgram=me,G.uniformsList=null,me}function Vs(U){if(U.uniformsList===null){let Z=U.currentProgram.getUniforms();U.uniformsList=Lo.seqWithValue(Z.seq,U.uniforms)}return U.uniformsList}function or(U,Z){let nt=K.get(U);nt.outputColorSpace=Z.outputColorSpace,nt.batching=Z.batching,nt.batchingColor=Z.batchingColor,nt.instancing=Z.instancing,nt.instancingColor=Z.instancingColor,nt.instancingMorph=Z.instancingMorph,nt.skinning=Z.skinning,nt.morphTargets=Z.morphTargets,nt.morphNormals=Z.morphNormals,nt.morphColors=Z.morphColors,nt.morphTargetsCount=Z.morphTargetsCount,nt.numClippingPlanes=Z.numClippingPlanes,nt.numIntersection=Z.numClipIntersection,nt.vertexAlphas=Z.vertexAlphas,nt.vertexTangents=Z.vertexTangents,nt.toneMapping=Z.toneMapping}function lc(U,Z){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;u.setFromMatrixPosition(Z.matrixWorld);for(let nt=0,G=U.length;nt<G;nt++){let et=U[nt];if(et.texture!==null&&et.boundingBox.containsPoint(u))return et}return null}function ss(U,Z,nt,G,et){Z.isScene!==!0&&(Z=Tt),it.resetTextureUnits();let Ot=Z.fog,Yt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?Z.environment:null,zt=$===null?E.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:xe.workingColorSpace,Jt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,jt=St.get(G.envMap||Yt,Jt),fe=G.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,me=!!nt.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Kt=!!nt.morphAttributes.position,Re=!!nt.morphAttributes.normal,on=!!nt.morphAttributes.color,Ge=Li;G.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ge=E.toneMapping);let Ce=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,an=Ce!==void 0?Ce.length:0,Xt=K.get(G),vn=h.state.lights;if(rt===!0&&(ot===!0||U!==tt)){let Fe=U===tt&&G.id===k;Zt.setState(G,U,Fe)}let Se=!1;G.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==vn.state.version||Xt.outputColorSpace!==zt||et.isBatchedMesh&&Xt.batching===!1||!et.isBatchedMesh&&Xt.batching===!0||et.isBatchedMesh&&Xt.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Xt.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Xt.instancing===!1||!et.isInstancedMesh&&Xt.instancing===!0||et.isSkinnedMesh&&Xt.skinning===!1||!et.isSkinnedMesh&&Xt.skinning===!0||et.isInstancedMesh&&Xt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Xt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Xt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Xt.instancingMorph===!1&&et.morphTexture!==null||Xt.envMap!==jt||G.fog===!0&&Xt.fog!==Ot||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Zt.numPlanes||Xt.numIntersection!==Zt.numIntersection)||Xt.vertexAlphas!==fe||Xt.vertexTangents!==me||Xt.morphTargets!==Kt||Xt.morphNormals!==Re||Xt.morphColors!==on||Xt.toneMapping!==Ge||Xt.morphTargetsCount!==an||!!Xt.lightProbeGrid!=h.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Xt.__version=G.version);let mn=Xt.currentProgram;Se===!0&&(mn=rs(G,Z,et),A&&G.isNodeMaterial&&A.onUpdateProgram(G,mn,Xt));let Kn=!1,Mi=!1,Si=!1,Ie=mn.getUniforms(),$e=Xt.uniforms;if(P.useProgram(mn.program)&&(Kn=!0,Mi=!0,Si=!0),G.id!==k&&(k=G.id,Mi=!0),Xt.needsLights){let Fe=lc(h.state.lightProbeGridArray,et);Xt.lightProbeGrid!==Fe&&(Xt.lightProbeGrid=Fe,Mi=!0)}if(Kn||tt!==U){P.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Ie.setValue(H,"projectionMatrix",U.projectionMatrix),Ie.setValue(H,"viewMatrix",U.matrixWorldInverse);let bi=Ie.map.cameraPosition;bi!==void 0&&bi.setValue(H,bt.setFromMatrixPosition(U.matrixWorld)),B.logarithmicDepthBuffer&&Ie.setValue(H,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ie.setValue(H,"isOrthographic",U.isOrthographicCamera===!0),tt!==U&&(tt=U,Mi=!0,Si=!0)}if(Xt.needsLights&&(vn.state.sunShadowMap.length>0&&Ie.setValue(H,"sunShadowMap",vn.state.sunShadowMap,it),vn.state.directionalShadowMap.length>0&&Ie.setValue(H,"directionalShadowMap",vn.state.directionalShadowMap,it),vn.state.spotShadowMap.length>0&&Ie.setValue(H,"spotShadowMap",vn.state.spotShadowMap,it),vn.state.pointShadowMap.length>0&&Ie.setValue(H,"pointShadowMap",vn.state.pointShadowMap,it)),et.isSkinnedMesh){Ie.setOptional(H,et,"bindMatrix"),Ie.setOptional(H,et,"bindMatrixInverse");let Fe=et.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Ie.setValue(H,"boneTexture",Fe.boneTexture,it))}et.isBatchedMesh&&(Ie.setOptional(H,et,"batchingTexture"),Ie.setValue(H,"batchingTexture",et._matricesTexture,it),Ie.setOptional(H,et,"batchingIdTexture"),Ie.setValue(H,"batchingIdTexture",et._indirectTexture,it),Ie.setOptional(H,et,"batchingColorTexture"),et._colorsTexture!==null&&Ie.setValue(H,"batchingColorTexture",et._colorsTexture,it));let De=nt.morphAttributes;if((De.position!==void 0||De.normal!==void 0||De.color!==void 0)&&J.update(et,nt,mn),(Mi||Xt.receiveShadow!==et.receiveShadow)&&(Xt.receiveShadow=et.receiveShadow,Ie.setValue(H,"receiveShadow",et.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&Z.environment!==null&&($e.envMapIntensity.value=Z.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=Bb()),Mi){if(Ie.setValue(H,"toneMappingExposure",E.toneMappingExposure),Xt.needsLights&&Gi($e,Si),Ot&&G.fog===!0&&$t.refreshFogUniforms($e,Ot),$t.refreshMaterialUniforms($e,G,Q,N,h.state.transmissionRenderTarget[U.id]),Xt.needsLights&&Xt.lightProbeGrid){let Fe=Xt.lightProbeGrid;$e.probesSH.value=Fe.texture,$e.probesMin.value.copy(Fe.boundingBox.min),$e.probesMax.value.copy(Fe.boundingBox.max),$e.probesResolution.value.copy(Fe.resolution)}Lo.upload(H,Vs(Xt),$e,it)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Lo.upload(H,Vs(Xt),$e,it),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ie.setValue(H,"center",et.center),Ie.setValue(H,"modelViewMatrix",et.modelViewMatrix),Ie.setValue(H,"normalMatrix",et.normalMatrix),Ie.setValue(H,"modelMatrix",et.matrixWorld),G.uniformsGroups!==void 0){let Fe=G.uniformsGroups;for(let bi=0,Wi=Fe.length;bi<Wi;bi++){let ks=Fe[bi];xt.update(ks,mn),xt.bind(ks,mn)}}return mn}function Gi(U,Z){U.ambientLightColor.needsUpdate=Z,U.lightProbe.needsUpdate=Z,U.sunLights.needsUpdate=Z,U.sunLightShadows.needsUpdate=Z,U.directionalLights.needsUpdate=Z,U.directionalLightShadows.needsUpdate=Z,U.pointLights.needsUpdate=Z,U.pointLightShadows.needsUpdate=Z,U.spotLights.needsUpdate=Z,U.spotLightShadows.needsUpdate=Z,U.rectAreaLights.needsUpdate=Z,U.hemisphereLights.needsUpdate=Z}function cc(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(U,Z,nt){let G=K.get(U);G.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),K.get(U.texture).__webglTexture=Z,K.get(U.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:nt,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,Z){let nt=K.get(U);nt.__webglFramebuffer=Z,nt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(U,Z=0,nt=0){$=U,O=Z,V=nt;let G=null,et=!1,Ot=!1;if(U){let zt=K.get(U);if(zt.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(H.FRAMEBUFFER,zt.__webglFramebuffer),q.copy(U.viewport),ct.copy(U.scissor),ut=U.scissorTest,P.viewport(q),P.scissor(ct),P.setScissorTest(ut),k=-1;return}else if(zt.__webglFramebuffer===void 0)it.setupRenderTarget(U);else if(zt.__hasExternalTextures)it.rebindTextures(U,K.get(U.texture).__webglTexture,K.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let fe=U.depthTexture;if(zt.__boundDepthTexture!==fe){if(fe!==null&&K.has(fe)&&(U.width!==fe.image.width||U.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(U)}}let Jt=U.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ot=!0);let jt=K.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(jt[Z])?G=jt[Z][nt]:G=jt[Z],et=!0):U.samples>0&&it.useMultisampledRTT(U)===!1?G=K.get(U).__webglMultisampledFramebuffer:Array.isArray(jt)?G=jt[nt]:G=jt,q.copy(U.viewport),ct.copy(U.scissor),ut=U.scissorTest}else q.copy(st).multiplyScalar(Q).floor(),ct.copy(dt).multiplyScalar(Q).floor(),ut=Bt;if(nt!==0&&(G=R),P.bindFramebuffer(H.FRAMEBUFFER,G)&&P.drawBuffers(U,G),P.viewport(q),P.scissor(ct),P.setScissorTest(ut),et){let zt=K.get(U.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,zt.__webglTexture,nt)}else if(Ot){let zt=Z;for(let Jt=0;Jt<U.textures.length;Jt++){let jt=K.get(U.textures[Jt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Jt,jt.__webglTexture,nt,zt)}}else if(U!==null&&nt!==0){let zt=K.get(U.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,zt.__webglTexture,nt)}k=-1};function ma(U){let Z=K.get(U);return(Z.__readFormat!==U.format||Z.__readType!==U.type)&&(Z.__readFormat=U.format,Z.__readType=U.type,Z.__formatReadable=B.textureFormatReadable(U.format),Z.__typeReadable=B.textureTypeReadable(U.type)),Z}this.readRenderTargetPixels=function(U,Z,nt,G,et,Ot,Yt,zt=0){if(!(U&&U.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=K.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Yt!==void 0&&(Jt=Jt[Yt]),Jt){P.bindFramebuffer(H.FRAMEBUFFER,Jt);try{let jt=U.textures[zt],fe=jt.format,me=jt.type;U.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt);let Kt=ma(jt);if(Kt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=U.width-G&&nt>=0&&nt<=U.height-et&&H.readPixels(Z,nt,G,et,It.convert(fe),It.convert(me),Ot)}finally{let jt=$!==null?K.get($).__webglFramebuffer:null;P.bindFramebuffer(H.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(U,Z,nt,G,et,Ot,Yt,zt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=K.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Yt!==void 0&&(Jt=Jt[Yt]),Jt)if(Z>=0&&Z<=U.width-G&&nt>=0&&nt<=U.height-et){P.bindFramebuffer(H.FRAMEBUFFER,Jt);let jt=U.textures[zt],fe=jt.format,me=jt.type;U.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt);let Kt=ma(jt);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Re),H.bufferData(H.PIXEL_PACK_BUFFER,Ot.byteLength,H.STREAM_READ),H.readPixels(Z,nt,G,et,It.convert(fe),It.convert(me),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let on=$!==null?K.get($).__webglFramebuffer:null;P.bindFramebuffer(H.FRAMEBUFFER,on);let Ge=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Pg(H,Ge,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Re),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ot),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Re),H.deleteSync(Ge),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,Z=null,nt=0){let G=Math.pow(2,-nt),et=Math.floor(U.image.width*G),Ot=Math.floor(U.image.height*G),Yt=Z!==null?Z.x:0,zt=Z!==null?Z.y:0;it.setTexture2D(U,0),H.copyTexSubImage2D(H.TEXTURE_2D,nt,0,0,Yt,zt,et,Ot),P.unbindTexture()},this.copyTextureToTexture=function(U,Z,nt=null,G=null,et=0,Ot=0){let Yt,zt,Jt,jt,fe,me,Kt,Re,on,Ge=U.isCompressedTexture?U.mipmaps[Ot]:U.image;if(nt!==null)Yt=nt.max.x-nt.min.x,zt=nt.max.y-nt.min.y,Jt=nt.isBox3?nt.max.z-nt.min.z:1,jt=nt.min.x,fe=nt.min.y,me=nt.isBox3?nt.min.z:0;else{let $e=Math.pow(2,-et);Yt=Math.floor(Ge.width*$e),zt=Math.floor(Ge.height*$e),U.isDataArrayTexture?Jt=Ge.depth:U.isData3DTexture?Jt=Math.floor(Ge.depth*$e):Jt=1,jt=0,fe=0,me=0}G!==null?(Kt=G.x,Re=G.y,on=G.z):(Kt=0,Re=0,on=0);let Ce=It.convert(Z.format),an=It.convert(Z.type),Xt;Z.isData3DTexture?(it.setTexture3D(Z,0),Xt=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(it.setTexture2DArray(Z,0),Xt=H.TEXTURE_2D_ARRAY):(it.setTexture2D(Z,0),Xt=H.TEXTURE_2D),P.activeTexture(H.TEXTURE0),P.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),P.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),P.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);let vn=P.getParameter(H.UNPACK_ROW_LENGTH),Se=P.getParameter(H.UNPACK_IMAGE_HEIGHT),mn=P.getParameter(H.UNPACK_SKIP_PIXELS),Kn=P.getParameter(H.UNPACK_SKIP_ROWS),Mi=P.getParameter(H.UNPACK_SKIP_IMAGES);P.pixelStorei(H.UNPACK_ROW_LENGTH,Ge.width),P.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ge.height),P.pixelStorei(H.UNPACK_SKIP_PIXELS,jt),P.pixelStorei(H.UNPACK_SKIP_ROWS,fe),P.pixelStorei(H.UNPACK_SKIP_IMAGES,me);let Si=U.isDataArrayTexture||U.isData3DTexture,Ie=Z.isDataArrayTexture||Z.isData3DTexture;if(U.isDepthTexture){let $e=K.get(U),De=K.get(Z),Fe=K.get($e.__renderTarget),bi=K.get(De.__renderTarget);P.bindFramebuffer(H.READ_FRAMEBUFFER,Fe.__webglFramebuffer),P.bindFramebuffer(H.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Wi=0;Wi<Jt;Wi++)Si&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,K.get(U).__webglTexture,et,me+Wi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,K.get(Z).__webglTexture,Ot,on+Wi)),H.blitFramebuffer(jt,fe,Yt,zt,Kt,Re,Yt,zt,H.DEPTH_BUFFER_BIT,H.NEAREST);P.bindFramebuffer(H.READ_FRAMEBUFFER,null),P.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(et!==0||U.isRenderTargetTexture||K.has(U)){let $e=K.get(U),De=K.get(Z);P.bindFramebuffer(H.READ_FRAMEBUFFER,L),P.bindFramebuffer(H.DRAW_FRAMEBUFFER,F);for(let Fe=0;Fe<Jt;Fe++)Si?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.__webglTexture,et,me+Fe):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$e.__webglTexture,et),Ie?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,De.__webglTexture,Ot,on+Fe):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,De.__webglTexture,Ot),et!==0?H.blitFramebuffer(jt,fe,Yt,zt,Kt,Re,Yt,zt,H.COLOR_BUFFER_BIT,H.NEAREST):Ie?H.copyTexSubImage3D(Xt,Ot,Kt,Re,on+Fe,jt,fe,Yt,zt):H.copyTexSubImage2D(Xt,Ot,Kt,Re,jt,fe,Yt,zt);P.bindFramebuffer(H.READ_FRAMEBUFFER,null),P.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ie?U.isDataTexture||U.isData3DTexture?H.texSubImage3D(Xt,Ot,Kt,Re,on,Yt,zt,Jt,Ce,an,Ge.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(Xt,Ot,Kt,Re,on,Yt,zt,Jt,Ce,Ge.data):H.texSubImage3D(Xt,Ot,Kt,Re,on,Yt,zt,Jt,Ce,an,Ge):U.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ot,Kt,Re,Yt,zt,Ce,an,Ge.data):U.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ot,Kt,Re,Ge.width,Ge.height,Ce,Ge.data):H.texSubImage2D(H.TEXTURE_2D,Ot,Kt,Re,Yt,zt,Ce,an,Ge);P.pixelStorei(H.UNPACK_ROW_LENGTH,vn),P.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Se),P.pixelStorei(H.UNPACK_SKIP_PIXELS,mn),P.pixelStorei(H.UNPACK_SKIP_ROWS,Kn),P.pixelStorei(H.UNPACK_SKIP_IMAGES,Mi),Ot===0&&Z.generateMipmaps&&H.generateMipmap(Xt),P.unbindTexture()},this.initRenderTarget=function(U){K.get(U).__webglFramebuffer===void 0&&it.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?it.setTextureCube(U,0):U.isData3DTexture?it.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?it.setTexture2DArray(U,0):it.setTexture2D(U,0),P.unbindTexture()},this.resetState=function(){O=0,V=0,$=null,P.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var Uo=Math.pow(2,-24),Il=Symbol("SKIP_GENERATION"),_h={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Il]:!1};function qe(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Dl(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){let r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function Kd(i,t){t.set(i)}function jd(i,t,e){let n,r;for(let s=0;s<3;s++){let o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function Ll(i,t,e){for(let n=0;n<3;n++){let r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Fo(i){let t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function be(i,t){return t[i+15]===65535}function Ve(i,t){return t[i+6]}function Xe(i,t){return t[i+14]}function Ne(i){return i+8}function Ue(i,t){let e=t[i+6];return i+e*8}function Bo(i,t){return t[i+7]}function vh(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,f=-1/0,p=1/0,d=1/0,g=1/0,x=-1/0,b=-1/0,_=-1/0,y=i.offset||0;for(let w=(t-y)*6,m=(t+e-y)*6;w<m;w+=6){let u=i[w+0],v=i[w+1],h=u-v,C=u+v;h<s&&(s=h),C>l&&(l=C),u<p&&(p=u),u>x&&(x=u);let M=i[w+2],S=i[w+3],E=M-S,T=M+S;E<o&&(o=E),T>c&&(c=T),M<d&&(d=M),M>b&&(b=M);let A=i[w+4],R=i[w+5],L=A-R,F=A+R;L<a&&(a=L),F>f&&(f=F),A<g&&(g=A),A>_&&(_=A)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=f,r[0]=p,r[1]=d,r[2]=g,r[3]=x,r[4]=b,r[5]=_}var _r=32,kb=(i,t)=>i.candidate-t.candidate,Yr=new Array(_r).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),yh=new Float32Array(6);function m0(i,t,e,n,r,s){let o=-1,a=0;if(s===0)o=Dl(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===1)o=Dl(i),o!==-1&&(a=Hb(e,n,r,o));else if(s===2){let l=Fo(i),c=1.25*r,f=e.offset||0,p=(n-f)*6,d=(n+r-f)*6;for(let g=0;g<3;g++){let x=t[g],y=(t[g+3]-x)/_r;if(r<_r/4){let w=[...Yr];w.length=r;let m=0;for(let v=p;v<d;v+=6,m++){let h=w[m];h.candidate=e[v+2*g],h.count=0;let{bounds:C,leftCacheBounds:M,rightCacheBounds:S}=h;for(let E=0;E<3;E++)S[E]=1/0,S[E+3]=-1/0,M[E]=1/0,M[E+3]=-1/0,C[E]=1/0,C[E+3]=-1/0;Ll(v,e,C)}w.sort(kb);let u=r;for(let v=0;v<u;v++){let h=w[v];for(;v+1<u&&w[v+1].candidate===h.candidate;)w.splice(v+1,1),u--}for(let v=p;v<d;v+=6){let h=e[v+2*g];for(let C=0;C<u;C++){let M=w[C];h>=M.candidate?Ll(v,e,M.rightCacheBounds):(Ll(v,e,M.leftCacheBounds),M.count++)}}for(let v=0;v<u;v++){let h=w[v],C=h.count,M=r-h.count,S=h.leftCacheBounds,E=h.rightCacheBounds,T=0;C!==0&&(T=Fo(S)/l);let A=0;M!==0&&(A=Fo(E)/l);let R=1+1.25*(T*C+A*M);R<c&&(o=g,c=R,a=h.candidate)}}else{for(let u=0;u<_r;u++){let v=Yr[u];v.count=0,v.candidate=x+y+u*y;let h=v.bounds;for(let C=0;C<3;C++)h[C]=1/0,h[C+3]=-1/0}for(let u=p;u<d;u+=6){let C=~~((e[u+2*g]-x)/y);C>=_r&&(C=_r-1);let M=Yr[C];M.count++,Ll(u,e,M.bounds)}let w=Yr[_r-1];Kd(w.bounds,w.rightCacheBounds);for(let u=_r-2;u>=0;u--){let v=Yr[u],h=Yr[u+1];jd(v.bounds,h.rightCacheBounds,v.rightCacheBounds)}let m=0;for(let u=0;u<_r-1;u++){let v=Yr[u],h=v.count,C=v.bounds,S=Yr[u+1].rightCacheBounds;h!==0&&(m===0?Kd(C,yh):jd(C,yh,yh)),m+=h;let E=0,T=0;m!==0&&(E=Fo(yh)/l);let A=r-m;A!==0&&(T=Fo(S)/l);let R=1+1.25*(E*m+T*A);R<c&&(o=g,c=R,a=v.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function Hb(i,t,e,n){let r=0,s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}var Oo=class{constructor(){this.boundingData=new Float32Array(6)}};function g0(i,t,e,n,r,s){let o=n,a=n+r-1,l=s.pos,c=s.axis*2,f=e.offset||0;for(;;){for(;o<=a&&e[(o-f)*6+c]<l;)o++;for(;o<=a&&e[(a-f)*6+c]>=l;)a--;if(o<a){for(let p=0;p<t;p++){let d=i[o*t+p];i[o*t+p]=i[a*t+p],i[a*t+p]=d}for(let p=0;p<6;p++){let d=o-f,g=a-f,x=e[d*6+p];e[d*6+p]=e[g*6+p],e[g*6+p]=x}o++,a--}else return o}}var x0,Mh,Qd,_0,Gb=Math.pow(2,32);function Sh(i){return"count"in i?1:1+Sh(i.left)+Sh(i.right)}function v0(i,t,e){return x0=new Float32Array(e),Mh=new Uint32Array(e),Qd=new Uint16Array(e),_0=new Uint8Array(e),tp(i,t)}function tp(i,t){let e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)x0[e+o]=s[o];if(r)return t.buffer?(_0.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(Mh[e+6]=t.offset,Qd[n+14]=t.count,Qd[n+15]=65535,i+32);{let{left:o,right:a,splitAxis:l}=t,c=i+32,f=tp(c,o),p=i/32,g=f/32-p;if(g>Gb)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Mh[e+6]=g,Mh[e+7]=l,tp(f,a)}}function Wb(i,t,e,n,r,s){let{maxDepth:o,verbose:a,targetLeafSize:l,_strictLeafSize:c=1/0,strategy:f,onProgress:p}=r,d=i.primitiveBuffer,g=i.primitiveBufferStride,x=new Float32Array(6),b=!1,_=new Oo;return vh(t,e,n,_.boundingData,x),w(_,e,n,x),_;function y(m){p&&p((m-s.offset)/s.count)}function w(m,u,v,h=null,C=0){!b&&C>=o&&(b=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let M=v>c;if(v<=l&&!M||C>=o)return y(u+v),m.offset=u,m.count=v,m;let S=m0(m.boundingData,h,t,u,v,f),E=S.axis===-1?-1:g0(d,g,t,u,v,S);if(S.axis===-1||E===u||E===u+v){if(!M)return y(u+v),m.offset=u,m.count=v,m;S.axis=Math.max(0,Dl(m.boundingData)),E=u+Math.max(1,Math.floor(v/2))}m.splitAxis=S.axis;let T=new Oo,A=u,R=E-u;m.left=T,vh(t,A,R,T.boundingData,x),w(T,A,R,x,C+1);let L=new Oo,F=E,O=v-R;return m.right=L,vh(t,F,O,L.boundingData,x),w(L,F,O,x,C+1),m}}function y0(i,t){let e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),r=n[0],s=n[n.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(l=>{let c=Wb(i,a,l.offset,l.count,t,o),f=Sh(c),p=new e(32*f);return v0(0,c,p),p})}var Zr=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var ep=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},Ae=new ep;var $r,Vo,zo=[],bh=new Zr(()=>new Me);function M0(i,t,e,n,r,s){$r=bh.getPrimitive(),Vo=bh.getPrimitive(),zo.push($r,Vo),Ae.setBuffer(i._roots[t]);let o=np(0,i.geometry,e,n,r,s);Ae.clearBuffer(),bh.releasePrimitive($r),bh.releasePrimitive(Vo),zo.pop(),zo.pop();let a=zo.length;return a>0&&(Vo=zo[a-1],$r=zo[a-2]),o}function np(i,t,e,n,r=null,s=0,o=0){let{float32Array:a,uint16Array:l,uint32Array:c}=Ae,f=i*2;if(be(f,l)){let d=Ve(i,c),g=Xe(f,l);return qe(i,a,$r),n(d,g,!1,o,s+i/8,$r)}else{let E=function(A){let{uint16Array:R,uint32Array:L}=Ae,F=A*2;for(;!be(F,R);)A=Ne(A),F=A*2;return Ve(A,L)},T=function(A){let{uint16Array:R,uint32Array:L}=Ae,F=A*2;for(;!be(F,R);)A=Ue(A,L),F=A*2;return Ve(A,L)+Xe(F,R)},d=Ne(i),g=Ue(i,c),x=d,b=g,_,y,w,m;if(r&&(w=$r,m=Vo,qe(x,a,w),qe(b,a,m),_=r(w),y=r(m),y<_)){x=g,b=d;let A=_;_=y,y=A,w=m}w||(w=$r,qe(x,a,w));let u=be(x*2,l),v=e(w,u,_,o+1,s+x/8),h;if(v===2){let A=E(x),L=T(x)-A;h=n(A,L,!0,o+1,s+x/8,w)}else h=v&&np(x,t,e,n,r,s,o+1);if(h)return!0;m=Vo,qe(b,a,m);let C=be(b*2,l),M=e(m,C,y,o+1,s+b/8),S;if(M===2){let A=E(b),L=T(b)-A;S=n(A,L,!0,o+1,s+b/8,m)}else S=M&&np(b,t,e,n,r,s,o+1);return!!S}}var Nl=new Ae.constructor,wh=new Ae.constructor,Jr=new Zr(()=>new Me),ko=new Me,Ho=new Me,rp=new Me,sp=new Me,op=!1;function S0(i,t,e,n){if(op)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");op=!0;let r=i._roots,s=t._roots,o,a=0,l=0,c=new Wt().copy(e).invert();for(let f=0,p=r.length;f<p;f++){Nl.setBuffer(r[f]),l=0;let d=Jr.getPrimitive();qe(0,Nl.float32Array,d),d.applyMatrix4(c);for(let g=0,x=s.length;g<x&&(wh.setBuffer(s[g]),o=Ui(0,0,e,c,n,a,l,0,0,d),wh.clearBuffer(),l+=s[g].byteLength/32,!o);g++);if(Jr.releasePrimitive(d),Nl.clearBuffer(),a+=r[f].byteLength/32,o)break}return op=!1,o}function Ui(i,t,e,n,r,s=0,o=0,a=0,l=0,c=null,f=!1){let p,d;f?(p=wh,d=Nl):(p=Nl,d=wh);let g=p.float32Array,x=p.uint32Array,b=p.uint16Array,_=d.float32Array,y=d.uint32Array,w=d.uint16Array,m=i*2,u=t*2,v=be(m,b),h=be(u,w),C=!1;if(h&&v)f?C=r(Ve(t,y),Xe(t*2,w),Ve(i,x),Xe(i*2,b),l,o+t/8,a,s+i/8):C=r(Ve(i,x),Xe(i*2,b),Ve(t,y),Xe(t*2,w),a,s+i/8,l,o+t/8);else if(h){let M=Jr.getPrimitive();qe(t,_,M),M.applyMatrix4(e);let S=Ne(i),E=Ue(i,x);qe(S,g,ko),qe(E,g,Ho);let T=M.intersectsBox(ko),A=M.intersectsBox(Ho);C=T&&Ui(t,S,n,e,r,o,s,l,a+1,M,!f)||A&&Ui(t,E,n,e,r,o,s,l,a+1,M,!f),Jr.releasePrimitive(M)}else{let M=Ne(t),S=Ue(t,y);qe(M,_,rp),qe(S,_,sp);let E=c.intersectsBox(rp),T=c.intersectsBox(sp);if(E&&T)C=Ui(i,M,e,n,r,s,o,a,l+1,c,f)||Ui(i,S,e,n,r,s,o,a,l+1,c,f);else if(E)if(v)C=Ui(i,M,e,n,r,s,o,a,l+1,c,f);else{let A=Jr.getPrimitive();A.copy(rp).applyMatrix4(e);let R=Ne(i),L=Ue(i,x);qe(R,g,ko),qe(L,g,Ho);let F=A.intersectsBox(ko),O=A.intersectsBox(Ho);C=F&&Ui(M,R,n,e,r,o,s,l,a+1,A,!f)||O&&Ui(M,L,n,e,r,o,s,l,a+1,A,!f),Jr.releasePrimitive(A)}else if(T)if(v)C=Ui(i,S,e,n,r,s,o,a,l+1,c,f);else{let A=Jr.getPrimitive();A.copy(sp).applyMatrix4(e);let R=Ne(i),L=Ue(i,x);qe(R,g,ko),qe(L,g,Ho);let F=A.intersectsBox(ko),O=A.intersectsBox(Ho);C=F&&Ui(S,R,n,e,r,o,s,l,a+1,A,!f)||O&&Ui(S,L,n,e,r,o,s,l,a+1,A,!f),Jr.releasePrimitive(A)}}return C}var Eh=new class{constructor(){let i=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=s._roots[o],this.uint16Array=e=new Uint16Array(i),this.uint32Array=t=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!be(o,e);)s=Ne(s),o=s*2;return Ve(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!be(o,e);)s=Ue(s,t),o=s*2;return Ve(s,t)+Xe(o,e)};let r=(s,o,a)=>{let l=o*2,c=be(l,e);if(!s(a,c,o)&&!c){let p=Ne(o),d=Ue(o,t);r(s,p,a+1),r(s,d,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{r(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((o,a,l)=>{if(a){let c=l*2,f=t[l+6],p=e[c+14];return s(o,a,new Float32Array(i,l*4,6),f,p)}else{let c=Bo(l,t);return s(o,a,new Float32Array(i,l*4,6),c)}})}}};var b0=new Me,Go=new Float32Array(6),Th=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={..._h,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),y0(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,f=-1/0;for(let p=t,d=t+e;p<d;p++){this.writePrimitiveBounds(p,Go,0);let[g,x,b,_,y,w]=Go;g<s&&(s=g),_>l&&(l=_),x<o&&(o=x),y>c&&(c=y),b<a&&(a=b),w>f&&(f=w)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=l,n[r+4]=c,n[r+5]=f,n}computePrimitiveBounds(t,e,n){let r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,Go,0);let[a,l,c,f,p,d]=Go,g=(a+f)/2,x=(l+p)/2,b=(c+d)/2,_=(f-a)/2,y=(p-l)/2,w=(d-c)/2,m=(s-r)*6;n[m+0]=g,n[m+1]=_+(Math.abs(g)+_)*Uo,n[m+2]=x,n[m+3]=y+(Math.abs(x)+y)*Uo,n[m+4]=b,n[m+5]=w+(Math.abs(b)+w)*Uo}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{let n=this._roots;for(let r=0;r<n.length;r++){let s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),l=s.byteLength/32;for(let c=0;c<l;c++){let f=8*c,p=2*f;be(p,a)&&(o[f+6]+=t)}}}}traverse(t,e=0){Eh.setBVH(this,e),Eh.traverse(t),Eh.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),l=r.byteLength/32;for(let c=l-1;c>=0;c--){let f=c*8,p=f*2;if(be(p,o)){let g=Ve(f,s),x=Xe(p,o);this.writePrimitiveRangeBounds(g,x,Go,0),a.set(Go,f)}else{let g=Ne(f),x=Ue(f,s);for(let b=0;b<3;b++){let _=a[g+b],y=a[g+b+3],w=a[x+b],m=a[x+b+3];a[f+b]=_<w?_:w,a[f+b+3]=y>m?y:m}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{qe(0,new Float32Array(n),b0),t.union(b0)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){let p=r;r=(d,g,x,b,_)=>p(d,g,x,b,_)?!0:a(d,g,this,s,x,b,o)}else r||(s?r=(p,d,g,x)=>a(p,d,this,s,g,x,o):r=(p,d,g)=>g);let l=!1,c=0,f=this._roots;for(let p=0,d=f.length;p<d;p++){let g=f[p];if(l=M0(this,p,n,r,e,c),l)break;c+=g.byteLength/32}return l}bvhcast(t,e,n){let{intersectsRanges:r}=n;return S0(this,t,e,r)}};function w0(){return typeof SharedArrayBuffer<"u"}function ap(i){return i.index?i.index.count:i.attributes.position.count}function Kr(i){return ap(i)/3}function qb(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function E0(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=qb(e,n);i.setIndex(new We(r,1));for(let s=0;s<e;s++)r[s]=s}}function Yb(i,t,e){let n=ap(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),l=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function Zb(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function lp(i,t,e){let n=Yb(i,t,e),r=Zb(i,e);if(!r.length)return[n];let s=[],o=n.offset,a=n.offset+n.count,l=ap(i)/e,c=[];for(let d of r){let{offset:g,count:x}=d,b=g,_=isFinite(x)?x:l-g,y=g+_;b<a&&y>o&&(c.push({pos:Math.max(o,b),isStart:!0}),c.push({pos:Math.min(a,y),isStart:!1}))}c.sort((d,g)=>d.pos!==g.pos?d.pos-g.pos:d.type==="end"?-1:1);let f=0,p=null;for(let d of c){let g=d.pos;f!==0&&g!==p&&s.push({offset:p,count:g-p}),f+=d.isStart?1:-1,p=g}return s}function $b(i,t){let e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((c,f)=>c+f.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o),l=0;for(let c=0;c<i.length;c++){let{offset:f,count:p}=i[c];for(let d=0;d<p;d++)a[l+d]=f+d;l+=p}return a}var Ah=class extends Th{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!w0())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={..._h,...e},e[Il]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let r=lp(e,t.range,n),s=$b(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else E0(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Me))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:lp(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var si=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){let l=t[s][e];n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){let a=e[s],l=t.dot(a);n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}};si.prototype.setFromBox=(function(){let i=new D;return function(e,n){let r=n.min,s=n.max,o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let f=0;f<=1;f++){i.x=r.x*l+s.x*(1-l),i.y=r.y*c+s.y*(1-c),i.z=r.z*f+s.z*(1-f);let p=e.dot(i);o=Math.min(p,o),a=Math.max(p,a)}this.min=o,this.max=a}})();var Jb=(function(){let i=new D,t=new D,e=new D;return function(r,s,o){let a=r.start,l=i,c=s.start,f=t;e.subVectors(a,c),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);let p=e.dot(f),d=f.dot(l),g=f.dot(f),x=e.dot(l),_=l.dot(l)*g-d*d,y,w;_!==0?y=(p*d-x*g)/_:y=0,w=(p+y*d)/g,o.x=y,o.y=w}})(),Ul=(function(){let i=new _t,t=new D,e=new D;return function(r,s,o,a){Jb(r,s,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){r.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let f;l<0?f=r.start:f=r.end;let p;c<0?p=s.start:p=s.end;let d=t,g=e;if(r.closestPointToPoint(p,!0,t),s.closestPointToPoint(f,!0,e),d.distanceToSquared(p)<=g.distanceToSquared(f)){o.copy(d),a.copy(p);return}else{o.copy(f),a.copy(g);return}}}})(),T0=(function(){let i=new D,t=new D,e=new yn,n=new ze;return function(s,o){let{radius:a,center:l}=s,{a:c,b:f,c:p}=o;if(n.start=c,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=c,n.end=p,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=f,n.end=p,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;let b=o.getPlane(e);if(Math.abs(b.distanceToPoint(l))<=a){let y=b.projectPoint(l,t);if(o.containsPoint(y))return!0}return!1}})();var Kb=["x","y","z"],vr=1e-15,A0=vr*vr;function vi(i){return Math.abs(i)<vr}var un=class extends He{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new si),this.points=[this.a,this.b,this.c],this.plane=new yn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ze,this.needsUpdate=!0}intersectsSphere(t){return T0(t,this)}update(){let t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,r);let c=s[1],f=o[1];c.subVectors(t,e),f.setFromPoints(c,r);let p=s[2],d=o[2];p.subVectors(e,n),d.setFromPoints(p,r);let g=s[3],x=o[3];g.subVectors(n,t),x.setFromPoints(g,r);let b=c.length(),_=p.length(),y=g.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,b<vr?_<vr||y<vr?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):_<vr?y<vr?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):y<vr&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};un.prototype.closestPointToSegment=(function(){let i=new D,t=new D,e=new ze;return function(r,s=null,o=null){let{start:a,end:l}=r,c=this.points,f,p=1/0;for(let d=0;d<3;d++){let g=(d+1)%3;e.start.copy(c[d]),e.end.copy(c[g]),Ul(e,r,i,t),f=i.distanceToSquared(t),f<p&&(p=f,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),f=a.distanceToSquared(i),f<p&&(p=f,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),f=l.distanceToSquared(i),f<p&&(p=f,s&&s.copy(i),o&&o.copy(l)),Math.sqrt(p)}})();un.prototype.intersectsTriangle=(function(){let i=new un,t=new si,e=new si,n=new D,r=new D,s=new D,o=new D,a=new ze,l=new ze,c=new D,f=new _t,p=new _t;function d(m,u,v,h){let C=n;!m.isDegenerateIntoPoint&&!m.isDegenerateIntoSegment?C.copy(m.plane.normal):C.copy(u.plane.normal);let M=m.satBounds,S=m.satAxes;for(let A=1;A<4;A++){let R=M[A],L=S[A];if(t.setFromPoints(L,u.points),R.isSeparated(t)||(o.copy(C).cross(L),t.setFromPoints(o,m.points),e.setFromPoints(o,u.points),t.isSeparated(e)))return!1}let E=u.satBounds,T=u.satAxes;for(let A=1;A<4;A++){let R=E[A],L=T[A];if(t.setFromPoints(L,m.points),R.isSeparated(t)||(o.crossVectors(C,L),t.setFromPoints(o,m.points),e.setFromPoints(o,u.points),t.isSeparated(e)))return!1}return v&&(h||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}function g(m,u,v,h,C,M,S,E,T,A,R){let L=S/(S-E);A.x=h+(C-h)*L,R.start.subVectors(u,m).multiplyScalar(L).add(m),L=S/(S-T),A.y=h+(M-h)*L,R.end.subVectors(v,m).multiplyScalar(L).add(m)}function x(m,u,v,h,C,M,S,E,T,A,R){if(C>0)g(m.c,m.a,m.b,h,u,v,T,S,E,A,R);else if(M>0)g(m.b,m.a,m.c,v,u,h,E,S,T,A,R);else if(E*T>0||S!=0)g(m.a,m.b,m.c,u,v,h,S,E,T,A,R);else if(E!=0)g(m.b,m.a,m.c,v,u,h,E,S,T,A,R);else if(T!=0)g(m.c,m.a,m.b,h,u,v,T,S,E,A,R);else return!0;return!1}function b(m,u,v,h){let C=u.degenerateSegment,M=m.plane.distanceToPoint(C.start),S=m.plane.distanceToPoint(C.end);return vi(M)?vi(S)?d(m,u,v,h):(v&&(v.start.copy(C.start),v.end.copy(C.start)),m.containsPoint(C.start)):vi(S)?(v&&(v.start.copy(C.end),v.end.copy(C.end)),m.containsPoint(C.end)):m.plane.intersectLine(C,n)!=null?(v&&(v.start.copy(n),v.end.copy(n)),m.containsPoint(n)):!1}function _(m,u,v){let h=u.a;return vi(m.plane.distanceToPoint(h))&&m.containsPoint(h)?(v&&(v.start.copy(h),v.end.copy(h)),!0):!1}function y(m,u,v){let h=m.degenerateSegment,C=u.a;return h.closestPointToPoint(C,!0,n),C.distanceToSquared(n)<A0?(v&&(v.start.copy(C),v.end.copy(C)),!0):!1}function w(m,u,v,h){if(m.isDegenerateIntoSegment)if(u.isDegenerateIntoSegment){let C=m.degenerateSegment,M=u.degenerateSegment,S=r,E=s;C.delta(S),M.delta(E);let T=n.subVectors(M.start,C.start),A=S.x*E.y-S.y*E.x;if(vi(A))return!1;let R=(T.x*E.y-T.y*E.x)/A,L=-(S.x*T.y-S.y*T.x)/A;if(R<0||R>1||L<0||L>1)return!1;let F=C.start.z+S.z*R,O=M.start.z+E.z*L;return vi(F-O)?(v&&(v.start.copy(C.start).addScaledVector(S,R),v.end.copy(C.start).addScaledVector(S,R)),!0):!1}else return u.isDegenerateIntoPoint?y(m,u,v):b(u,m,v,h);else{if(m.isDegenerateIntoPoint)return u.isDegenerateIntoPoint?u.a.distanceToSquared(m.a)<A0?(v&&(v.start.copy(m.a),v.end.copy(m.a)),!0):!1:u.isDegenerateIntoSegment?y(u,m,v):_(u,m,v);if(u.isDegenerateIntoPoint)return _(m,u,v);if(u.isDegenerateIntoSegment)return b(m,u,v,h)}}return function(u,v=null,h=!1){this.needsUpdate&&this.update(),u.isExtendedTriangle?u.needsUpdate&&u.update():(i.copy(u),i.update(),u=i);let C=w(this,u,v,h);if(C!==void 0)return C;let M=this.plane,S=u.plane,E=S.distanceToPoint(this.a),T=S.distanceToPoint(this.b),A=S.distanceToPoint(this.c);vi(E)&&(E=0),vi(T)&&(T=0),vi(A)&&(A=0);let R=E*T,L=E*A;if(R>0&&L>0)return!1;let F=M.distanceToPoint(u.a),O=M.distanceToPoint(u.b),V=M.distanceToPoint(u.c);vi(F)&&(F=0),vi(O)&&(O=0),vi(V)&&(V=0);let $=F*O,k=F*V;if($>0&&k>0)return!1;r.copy(M.normal),s.copy(S.normal);let tt=r.cross(s),q=0,ct=Math.abs(tt.x),ut=Math.abs(tt.y);ut>ct&&(ct=ut,q=1),Math.abs(tt.z)>ct&&(q=2);let Mt=Kb[q],kt=this.a[Mt],N=this.b[Mt],Q=this.c[Mt],lt=u.a[Mt],vt=u.b[Mt],st=u.c[Mt];if(x(this,kt,N,Q,R,L,E,T,A,f,a))return d(this,u,v,h);if(x(u,lt,vt,st,$,k,F,O,V,p,l))return d(this,u,v,h);if(f.y<f.x){let dt=f.y;f.y=f.x,f.x=dt,c.copy(a.start),a.start.copy(a.end),a.end.copy(c)}if(p.y<p.x){let dt=p.y;p.y=p.x,p.x=dt,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return f.y<p.x||p.y<f.x?!1:(v&&(p.x>f.x?v.start.copy(l.start):v.start.copy(a.start),p.y<f.y?v.end.copy(l.end):v.end.copy(a.end)),!0)}})();un.prototype.distanceToPoint=(function(){let i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();un.prototype.distanceToTriangle=(function(){let i=new D,t=new D,e=["a","b","c"],n=new ze,r=new ze;return function(o,a=null,l=null){let c=a||l?n:null;if(this.intersectsTriangle(o,c,!0))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let f=1/0;for(let p=0;p<3;p++){let d,g=e[p],x=o[g];this.closestPointToPoint(x,i),d=x.distanceToSquared(i),d<f&&(f=d,a&&a.copy(i),l&&l.copy(x));let b=this[g];o.closestPointToPoint(b,i),d=b.distanceToSquared(i),d<f&&(f=d,a&&a.copy(b),l&&l.copy(i))}for(let p=0;p<3;p++){let d=e[p],g=e[(p+1)%3];n.set(this[d],this[g]);for(let x=0;x<3;x++){let b=e[x],_=e[(x+1)%3];r.set(o[b],o[_]),Ul(n,r,i,t);let y=i.distanceToSquared(t);y<f&&(f=y,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(f)}})();var hn=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new Wt,this.invMatrix=new Wt,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new si),this.alignedSatBounds=new Array(3).fill().map(()=>new si),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};hn.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,r=this.points;for(let c=0;c<=1;c++)for(let f=0;f<=1;f++)for(let p=0;p<=1;p++){let d=1*c|2*f|4*p,g=r[d];g.x=c?n.x:e.x,g.y=f?n.y:e.y,g.z=p?n.z:e.z,g.applyMatrix4(t)}let s=this.satBounds,o=this.satAxes,a=r[0];for(let c=0;c<3;c++){let f=o[c],p=s[c],d=1<<c,g=r[d];f.subVectors(a,g),p.setFromPoints(f,r)}let l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();hn.prototype.intersectsBox=(function(){let i=new si;return function(e){this.needsUpdate&&this.update();let n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){let c=o[l],f=s[l];if(i.setFromBox(c,e),f.isSeparated(i))return!1}return!0}})();hn.prototype.intersectsTriangle=(function(){let i=new un,t=new Array(3),e=new si,n=new si,r=new D;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let d=0;d<3;d++){let g=a[d],x=l[d];if(e.setFromPoints(x,t),g.isSeparated(e))return!1}let c=o.satBounds,f=o.satAxes,p=this.points;for(let d=0;d<3;d++){let g=c[d],x=f[d];if(e.setFromPoints(x,p),g.isSeparated(e))return!1}for(let d=0;d<3;d++){let g=l[d];for(let x=0;x<4;x++){let b=f[x];if(r.crossVectors(g,b),e.setFromPoints(r,t),n.setFromPoints(r,p),e.isSeparated(n))return!1}}return!0}})();hn.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();hn.prototype.distanceToPoint=(function(){let i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();hn.prototype.distanceToBox=(function(){let i=["x","y","z"],t=new Array(12).fill().map(()=>new ze),e=new Array(12).fill().map(()=>new ze),n=new D,r=new D;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),l&&l.copy(n),c&&c.copy(r)),0;let f=a*a,p=o.min,d=o.max,g=this.points,x=1/0;for(let _=0;_<8;_++){let y=g[_];r.copy(y).clamp(p,d);let w=y.distanceToSquared(r);if(w<x&&(x=w,l&&l.copy(y),c&&c.copy(r),w<f))return Math.sqrt(w)}let b=0;for(let _=0;_<3;_++)for(let y=0;y<=1;y++)for(let w=0;w<=1;w++){let m=(_+1)%3,u=(_+2)%3,v=y<<m|w<<u,h=1<<_|y<<m|w<<u,C=g[v],M=g[h];t[b].set(C,M);let E=i[_],T=i[m],A=i[u],R=e[b],L=R.start,F=R.end;L[E]=p[E],L[T]=y?p[T]:d[T],L[A]=w?p[A]:d[T],F[E]=d[E],F[T]=y?p[T]:d[T],F[A]=w?p[A]:d[T],b++}for(let _=0;_<=1;_++)for(let y=0;y<=1;y++)for(let w=0;w<=1;w++){r.x=_?d.x:p.x,r.y=y?d.y:p.y,r.z=w?d.z:p.z,this.closestPointToPoint(r,n);let m=r.distanceToSquared(n);if(m<x&&(x=m,l&&l.copy(n),c&&c.copy(r),m<f))return Math.sqrt(m)}for(let _=0;_<12;_++){let y=t[_];for(let w=0;w<12;w++){let m=e[w];Ul(y,m,n,r);let u=n.distanceToSquared(r);if(u<x&&(x=u,l&&l.copy(n),c&&c.copy(r),u<f))return Math.sqrt(u)}}return Math.sqrt(x)}})();var cp=class extends Zr{constructor(){super(()=>new un)}},Xn=new cp;var Fl=new D,up=new D;function R0(i,t,e={},n=0,r=1/0){let s=n*n,o=r*r,a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:f=>(Fl.copy(t).clamp(f.min,f.max),Fl.distanceToSquared(t)),intersectsBounds:(f,p,d)=>d<a&&d<o,intersectsTriangle:(f,p)=>{f.closestPointToPoint(t,Fl);let d=t.distanceToSquared(Fl);return d<a&&(up.copy(Fl),a=d,l=p),d<s}}),a===1/0)return null;let c=Math.sqrt(a);return e.point?e.point.copy(up):e.point=up.clone(),e.distance=c,e.faceIndex=l,e}var Rh=parseInt("186")>=169,jb=parseInt("186")<=161,ys=new D,Ms=new D,Ss=new D,Ch=new _t,Ph=new _t,Ih=new _t,C0=new D,P0=new D,I0=new D,Bl=new D;function Qb(i,t,e,n,r,s,o,a){let l;if(s===cn?l=i.intersectTriangle(n,e,t,!0,r):l=i.intersectTriangle(t,e,n,s!==An,r),l===null)return null;let c=i.origin.distanceTo(r);return c<o||c>a?null:{distance:c,point:r.clone()}}function D0(i,t,e,n,r,s,o,a,l,c,f){ys.fromBufferAttribute(t,s),Ms.fromBufferAttribute(t,o),Ss.fromBufferAttribute(t,a);let p=Qb(i,ys,Ms,Ss,Bl,l,c,f);if(p){if(n){Ch.fromBufferAttribute(n,s),Ph.fromBufferAttribute(n,o),Ih.fromBufferAttribute(n,a),p.uv=new _t;let g=He.getInterpolation(Bl,ys,Ms,Ss,Ch,Ph,Ih,p.uv);Rh||(p.uv=g)}if(r){Ch.fromBufferAttribute(r,s),Ph.fromBufferAttribute(r,o),Ih.fromBufferAttribute(r,a),p.uv1=new _t;let g=He.getInterpolation(Bl,ys,Ms,Ss,Ch,Ph,Ih,p.uv1);Rh||(p.uv1=g),jb&&(p.uv2=p.uv1)}if(e){C0.fromBufferAttribute(e,s),P0.fromBufferAttribute(e,o),I0.fromBufferAttribute(e,a),p.normal=new D;let g=He.getInterpolation(Bl,ys,Ms,Ss,C0,P0,I0,p.normal);p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1),Rh||(p.normal=g)}let d={a:s,b:o,c:a,normal:new D,materialIndex:0};if(He.getNormal(ys,Ms,Ss,d.normal),p.face=d,p.faceIndex=s,Rh){let g=new D;He.getBarycoord(Bl,ys,Ms,Ss,g),p.barycoord=g}}return p}function L0(i){return i&&i.isMaterial?i.side:i}function Wo(i,t,e,n,r,s,o){let a=n*3,l=a+0,c=a+1,f=a+2,{index:p,groups:d}=i;i.index&&(l=p.getX(l),c=p.getX(c),f=p.getX(f));let{position:g,normal:x,uv:b,uv1:_}=i.attributes;if(Array.isArray(t)){let y=n*3;for(let w=0,m=d.length;w<m;w++){let{start:u,count:v,materialIndex:h}=d[w];if(y>=u&&y<u+v){let C=L0(t[h]),M=D0(e,g,x,b,_,l,c,f,C,s,o);if(M)if(M.faceIndex=n,M.face.materialIndex=h,r)r.push(M);else return M}}}else{let y=L0(t),w=D0(e,g,x,b,_,l,c,f,y,s,o);if(w)if(w.faceIndex=n,w.face.materialIndex=0,r)r.push(w);else return w}return null}function Ye(i,t,e,n){let r=i.a,s=i.b,o=i.c,a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function N0(i,t,e,n,r,s,o,a){let{geometry:l,_indirectBuffer:c}=i;for(let f=n,p=n+r;f<p;f++)Wo(l,t,e,f,s,o,a)}function U0(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:l}=i,c=1/0,f=null;for(let p=n,d=n+r;p<d;p++){let g;g=Wo(a,t,e,p,null,s,o),g&&g.distance<c&&(f=g,c=g.distance)}return f}function F0(i,t,e,n,r,s,o){let{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let f=i,p=t+i;f<p;f++){let d;if(d=f,Ye(o,d*3,l,c),o.needsUpdate=!0,n(o,d,r,s))return!0}return!1}function B0(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,l,c=0,f=i._roots;for(let d=0,g=f.length;d<g;d++)s=f[d],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),p(0,c),c+=s.byteLength;function p(d,g,x=!1){let b=d*2;if(be(b,a)){let _=Ve(d,o),y=Xe(b,a),w=1/0,m=1/0,u=1/0,v=-1/0,h=-1/0,C=-1/0;for(let M=3*_,S=3*(_+y);M<S;M++){let E=n[M],T=r.getX(E),A=r.getY(E),R=r.getZ(E);T<w&&(w=T),T>v&&(v=T),A<m&&(m=A),A>h&&(h=A),R<u&&(u=R),R>C&&(C=R)}return l[d+0]!==w||l[d+1]!==m||l[d+2]!==u||l[d+3]!==v||l[d+4]!==h||l[d+5]!==C?(l[d+0]=w,l[d+1]=m,l[d+2]=u,l[d+3]=v,l[d+4]=h,l[d+5]=C,!0):!1}else{let _=Ne(d),y=Ue(d,o),w=x,m=!1,u=!1;if(t){if(!w){let E=_/8+g/32,T=y/8+g/32;m=t.has(E),u=t.has(T),w=!m&&!u}}else m=!0,u=!0;let v=w||m,h=w||u,C=!1;v&&(C=p(_,g,w));let M=!1;h&&(M=p(y,g,w));let S=C||M;if(S)for(let E=0;E<3;E++){let T=_+E,A=y+E,R=l[T],L=l[T+3],F=l[A],O=l[A+3];l[d+E]=R<F?R:F,l[d+E+3]=L>O?L:O}return S}}}function yi(i,t,e,n,r){let s,o,a,l,c,f,p=1/e.direction.x,d=1/e.direction.y,g=1/e.direction.z,x=e.origin.x,b=e.origin.y,_=e.origin.z,y=t[i],w=t[i+3],m=t[i+1],u=t[i+3+1],v=t[i+2],h=t[i+3+2];return p>=0?(s=(y-x)*p,o=(w-x)*p):(s=(w-x)*p,o=(y-x)*p),d>=0?(a=(m-b)*d,l=(u-b)*d):(a=(u-b)*d,l=(m-b)*d),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),g>=0?(c=(v-_)*g,f=(h-_)*g):(c=(h-_)*g,f=(v-_)*g),s>f||c>o)?!1:((c>s||s!==s)&&(s=c),(f<o||o!==o)&&(o=f),s<=r&&o>=n)}function O0(i,t,e,n,r,s,o,a){let{geometry:l,_indirectBuffer:c}=i;for(let f=n,p=n+r;f<p;f++){let d=c?c[f]:f;Wo(l,t,e,d,s,o,a)}}function z0(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:l}=i,c=1/0,f=null;for(let p=n,d=n+r;p<d;p++){let g;g=Wo(a,t,e,l?l[p]:p,null,s,o),g&&g.distance<c&&(f=g,c=g.distance)}return f}function V0(i,t,e,n,r,s,o){let{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let f=i,p=t+i;f<p;f++){let d;if(d=e.resolveTriangleIndex(f),Ye(o,d*3,l,c),o.needsUpdate=!0,n(o,d,r,s))return!0}return!1}function k0(i,t,e,n,r,s,o){Ae.setBuffer(i._roots[t]),hp(0,i,e,n,r,s,o),Ae.clearBuffer()}function hp(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:l,uint32Array:c}=Ae,f=i*2;if(be(f,l)){let d=Ve(i,c),g=Xe(f,l);N0(t,e,n,d,g,r,s,o)}else{let d=Ne(i);yi(d,a,n,s,o)&&hp(d,t,e,n,r,s,o);let g=Ue(i,c);yi(g,a,n,s,o)&&hp(g,t,e,n,r,s,o)}}var tw=["x","y","z"];function H0(i,t,e,n,r,s){Ae.setBuffer(i._roots[t]);let o=fp(0,i,e,n,r,s);return Ae.clearBuffer(),o}function fp(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:l}=Ae,c=i*2;if(be(c,a)){let p=Ve(i,l),d=Xe(c,a);return U0(t,e,n,p,d,r,s)}else{let p=Bo(i,l),d=tw[p],x=n.direction[d]>=0,b,_;x?(b=Ne(i),_=Ue(i,l)):(b=Ue(i,l),_=Ne(i));let w=yi(b,o,n,r,s)?fp(b,t,e,n,r,s):null;if(w){let v=w.point[d];if(x?v<=o[_+p]:v>=o[_+p+3])return w}let u=yi(_,o,n,r,s)?fp(_,t,e,n,r,s):null;return w&&u?w.distance<=u.distance?w:u:w||u||null}}var Dh=new Me,Xo=new un,qo=new un,Ol=new Wt,G0=new hn,Lh=new hn;function W0(i,t,e,n){Ae.setBuffer(i._roots[t]);let r=dp(0,i,e,n);return Ae.clearBuffer(),r}function dp(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=Ae,l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),G0.set(e.boundingBox.min,e.boundingBox.max,n),r=G0),be(l,o)){let f=t.geometry,p=f.index,d=f.attributes.position,g=e.index,x=e.attributes.position,b=Ve(i,a),_=Xe(l,o);if(Ol.copy(n).invert(),e.boundsTree)return qe(i,s,Lh),Lh.matrix.copy(Ol),Lh.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:w=>Lh.intersectsBox(w),intersectsTriangle:w=>{w.a.applyMatrix4(n),w.b.applyMatrix4(n),w.c.applyMatrix4(n),w.needsUpdate=!0;for(let m=b*3,u=(_+b)*3;m<u;m+=3)if(Ye(qo,m,p,d),qo.needsUpdate=!0,w.intersectsTriangle(qo))return!0;return!1}});{let y=Kr(e);for(let w=b*3,m=(_+b)*3;w<m;w+=3){Ye(Xo,w,p,d),Xo.a.applyMatrix4(Ol),Xo.b.applyMatrix4(Ol),Xo.c.applyMatrix4(Ol),Xo.needsUpdate=!0;for(let u=0,v=y*3;u<v;u+=3)if(Ye(qo,u,g,x),qo.needsUpdate=!0,Xo.intersectsTriangle(qo))return!0}}}else{let f=Ne(i),p=Ue(i,a);return qe(f,s,Dh),!!(r.intersectsBox(Dh)&&dp(f,t,e,n,r)||(qe(p,s,Dh),r.intersectsBox(Dh)&&dp(p,t,e,n,r)))}}var Nh=new Wt,pp=new hn,zl=new hn,ew=new D,nw=new D,iw=new D,rw=new D;function X0(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),pp.set(t.boundingBox.min,t.boundingBox.max,e),pp.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,c=a.index,f=t.attributes.position,p=t.index,d=Xn.getPrimitive(),g=Xn.getPrimitive(),x=ew,b=nw,_=null,y=null;r&&(_=iw,y=rw);let w=1/0,m=null,u=null;return Nh.copy(e).invert(),zl.matrix.copy(Nh),i.shapecast({boundsTraverseOrder:v=>pp.distanceToBox(v),intersectsBounds:(v,h,C)=>C<w&&C<o?(h&&(zl.min.copy(v.min),zl.max.copy(v.max),zl.needsUpdate=!0),!0):!1,intersectsRange:(v,h)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:M=>zl.distanceToBox(M),intersectsBounds:(M,S,E)=>E<w&&E<o,intersectsRange:(M,S)=>{for(let E=M,T=M+S;E<T;E++){Ye(g,3*E,p,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let A=v,R=v+h;A<R;A++){Ye(d,3*A,c,l),d.needsUpdate=!0;let L=d.distanceToTriangle(g,x,_);if(L<w&&(b.copy(x),y&&y.copy(_),w=L,m=A,u=E),L<s)return!0}}}});{let C=Kr(t);for(let M=0,S=C;M<S;M++){Ye(g,3*M,p,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let E=v,T=v+h;E<T;E++){Ye(d,3*E,c,l),d.needsUpdate=!0;let A=d.distanceToTriangle(g,x,_);if(A<w&&(b.copy(x),y&&y.copy(_),w=A,m=E,u=M),A<s)return!0}}}}}),Xn.releasePrimitive(d),Xn.releasePrimitive(g),w===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=w,n.faceIndex=m,r&&(r.point?r.point.copy(y):r.point=y.clone(),r.point.applyMatrix4(Nh),b.applyMatrix4(Nh),r.distance=b.sub(r.point).length(),r.faceIndex=u),n)}function q0(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,l,c=0,f=i._roots;for(let d=0,g=f.length;d<g;d++)s=f[d],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),p(0,c),c+=s.byteLength;function p(d,g,x=!1){let b=d*2;if(be(b,a)){let _=Ve(d,o),y=Xe(b,a),w=1/0,m=1/0,u=1/0,v=-1/0,h=-1/0,C=-1/0;for(let M=_,S=_+y;M<S;M++){let E=3*i.resolveTriangleIndex(M);for(let T=0;T<3;T++){let A=E+T;A=n?n[A]:A;let R=r.getX(A),L=r.getY(A),F=r.getZ(A);R<w&&(w=R),R>v&&(v=R),L<m&&(m=L),L>h&&(h=L),F<u&&(u=F),F>C&&(C=F)}}return l[d+0]!==w||l[d+1]!==m||l[d+2]!==u||l[d+3]!==v||l[d+4]!==h||l[d+5]!==C?(l[d+0]=w,l[d+1]=m,l[d+2]=u,l[d+3]=v,l[d+4]=h,l[d+5]=C,!0):!1}else{let _=Ne(d),y=Ue(d,o),w=x,m=!1,u=!1;if(t){if(!w){let E=_/8+g/32,T=y/8+g/32;m=t.has(E),u=t.has(T),w=!m&&!u}}else m=!0,u=!0;let v=w||m,h=w||u,C=!1;v&&(C=p(_,g,w));let M=!1;h&&(M=p(y,g,w));let S=C||M;if(S)for(let E=0;E<3;E++){let T=_+E,A=y+E,R=l[T],L=l[T+3],F=l[A],O=l[A+3];l[d+E]=R<F?R:F,l[d+E+3]=L>O?L:O}return S}}}function Y0(i,t,e,n,r,s,o){Ae.setBuffer(i._roots[t]),mp(0,i,e,n,r,s,o),Ae.clearBuffer()}function mp(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:l,uint32Array:c}=Ae,f=i*2;if(be(f,l)){let d=Ve(i,c),g=Xe(f,l);O0(t,e,n,d,g,r,s,o)}else{let d=Ne(i);yi(d,a,n,s,o)&&mp(d,t,e,n,r,s,o);let g=Ue(i,c);yi(g,a,n,s,o)&&mp(g,t,e,n,r,s,o)}}var sw=["x","y","z"];function Z0(i,t,e,n,r,s){Ae.setBuffer(i._roots[t]);let o=gp(0,i,e,n,r,s);return Ae.clearBuffer(),o}function gp(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:l}=Ae,c=i*2;if(be(c,a)){let p=Ve(i,l),d=Xe(c,a);return z0(t,e,n,p,d,r,s)}else{let p=Bo(i,l),d=sw[p],x=n.direction[d]>=0,b,_;x?(b=Ne(i),_=Ue(i,l)):(b=Ue(i,l),_=Ne(i));let w=yi(b,o,n,r,s)?gp(b,t,e,n,r,s):null;if(w){let v=w.point[d];if(x?v<=o[_+p]:v>=o[_+p+3])return w}let u=yi(_,o,n,r,s)?gp(_,t,e,n,r,s):null;return w&&u?w.distance<=u.distance?w:u:w||u||null}}var Uh=new Me,Yo=new un,Zo=new un,Vl=new Wt,$0=new hn,Fh=new hn;function J0(i,t,e,n){Ae.setBuffer(i._roots[t]);let r=xp(0,i,e,n);return Ae.clearBuffer(),r}function xp(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=Ae,l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),$0.set(e.boundingBox.min,e.boundingBox.max,n),r=$0),be(l,o)){let f=t.geometry,p=f.index,d=f.attributes.position,g=e.index,x=e.attributes.position,b=Ve(i,a),_=Xe(l,o);if(Vl.copy(n).invert(),e.boundsTree)return qe(i,s,Fh),Fh.matrix.copy(Vl),Fh.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:w=>Fh.intersectsBox(w),intersectsTriangle:w=>{w.a.applyMatrix4(n),w.b.applyMatrix4(n),w.c.applyMatrix4(n),w.needsUpdate=!0;for(let m=b,u=_+b;m<u;m++)if(Ye(Zo,3*t.resolveTriangleIndex(m),p,d),Zo.needsUpdate=!0,w.intersectsTriangle(Zo))return!0;return!1}});{let y=Kr(e);for(let w=b,m=_+b;w<m;w++){let u=t.resolveTriangleIndex(w);Ye(Yo,3*u,p,d),Yo.a.applyMatrix4(Vl),Yo.b.applyMatrix4(Vl),Yo.c.applyMatrix4(Vl),Yo.needsUpdate=!0;for(let v=0,h=y*3;v<h;v+=3)if(Ye(Zo,v,g,x),Zo.needsUpdate=!0,Yo.intersectsTriangle(Zo))return!0}}}else{let f=Ne(i),p=Ue(i,a);return qe(f,s,Uh),!!(r.intersectsBox(Uh)&&xp(f,t,e,n,r)||(qe(p,s,Uh),r.intersectsBox(Uh)&&xp(p,t,e,n,r)))}}var Bh=new Wt,_p=new hn,kl=new hn,ow=new D,aw=new D,lw=new D,cw=new D;function K0(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),_p.set(t.boundingBox.min,t.boundingBox.max,e),_p.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,c=a.index,f=t.attributes.position,p=t.index,d=Xn.getPrimitive(),g=Xn.getPrimitive(),x=ow,b=aw,_=null,y=null;r&&(_=lw,y=cw);let w=1/0,m=null,u=null;return Bh.copy(e).invert(),kl.matrix.copy(Bh),i.shapecast({boundsTraverseOrder:v=>_p.distanceToBox(v),intersectsBounds:(v,h,C)=>C<w&&C<o?(h&&(kl.min.copy(v.min),kl.max.copy(v.max),kl.needsUpdate=!0),!0):!1,intersectsRange:(v,h)=>{if(t.boundsTree){let C=t.boundsTree;return C.shapecast({boundsTraverseOrder:M=>kl.distanceToBox(M),intersectsBounds:(M,S,E)=>E<w&&E<o,intersectsRange:(M,S)=>{for(let E=M,T=M+S;E<T;E++){let A=C.resolveTriangleIndex(E);Ye(g,3*A,p,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let R=v,L=v+h;R<L;R++){let F=i.resolveTriangleIndex(R);Ye(d,3*F,c,l),d.needsUpdate=!0;let O=d.distanceToTriangle(g,x,_);if(O<w&&(b.copy(x),y&&y.copy(_),w=O,m=R,u=E),O<s)return!0}}}})}else{let C=Kr(t);for(let M=0,S=C;M<S;M++){Ye(g,3*M,p,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let E=v,T=v+h;E<T;E++){let A=i.resolveTriangleIndex(E);Ye(d,3*A,c,l),d.needsUpdate=!0;let R=d.distanceToTriangle(g,x,_);if(R<w&&(b.copy(x),y&&y.copy(_),w=R,m=E,u=M),R<s)return!0}}}}}),Xn.releasePrimitive(d),Xn.releasePrimitive(g),w===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=w,n.faceIndex=m,r&&(r.point?r.point.copy(y):r.point=y.clone(),r.point.applyMatrix4(Bh),b.applyMatrix4(Bh),r.distance=b.sub(r.point).length(),r.faceIndex=u),n)}function vp(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}var Oh=new hn,zh=new Di,j0=new D,Q0=new Wt,tx=new D,yp=["getX","getY","getZ"],$o=class i extends Ah{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(s));let a=new i(e,{...n,[Il]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){let c=e.getIndex();if(c===null){let f=new We(t.index,1,!1);e.setIndex(f)}else c.array!==r&&(c.array.set(r),c.needsUpdate=!0)}return a;function l(c){for(let f=0;f<c.length;f++){let p=c[f],d=new Uint32Array(p),g=new Uint16Array(p);for(let x=0,b=p.byteLength/32;x<b;x++){let _=8*x,y=2*_;be(y,g)||(d[_+6]=d[_+6]/8-x)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,c=(s?s[t]:t)*3,f=c+0,p=c+1,d=c+2;a&&(f=a[f],p=a[p],d=a[d]);for(let g=0;g<3;g++){let x=o[yp[g]](f),b=o[yp[g]](p),_=o[yp[g]](d),y=x;b<y&&(y=b),_<y&&(y=_);let w=x;b>w&&(w=b),_>w&&(w=_),e[n+g]=y,e[n+g+3]=w}return e}computePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,l=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let c=o.array,f=o.offset||0,p=3;o.isInterleavedBufferAttribute&&(p=o.data.stride);let d=["getX","getY","getZ"],g=n.offset;for(let x=t,b=t+e;x<b;x++){let y=(s?s[x]:x)*3,w=(x-g)*6,m=y+0,u=y+1,v=y+2;a&&(m=a[m],u=a[u],v=a[v]),l||(m=m*p+f,u=u*p+f,v=v*p+f);for(let h=0;h<3;h++){let C,M,S;l?(C=o[d[h]](m),M=o[d[h]](u),S=o[d[h]](v)):(C=c[m+h],M=c[u+h],S=c[v+h]);let E=C;M<E&&(E=M),S<E&&(E=S);let T=C;M>T&&(T=M),S>T&&(T=S);let A=(T-E)/2,R=h*2;n[w+R+0]=E+A,n[w+R+1]=A+(Math.abs(E)+A)*Uo}}return n}raycastObject3D(t,e,n=[]){let{material:r}=t;if(r===void 0)return;Q0.copy(t.matrixWorld).invert(),zh.copy(e.ray).applyMatrix4(Q0),tx.setFromMatrixScale(t.matrixWorld),j0.copy(zh.direction).multiply(tx);let s=j0.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let l=this.raycastFirst(zh,r,o,a);l=vp(l,t,e),l&&n.push(l)}else{let l=this.raycast(zh,r,o,a);for(let c=0,f=l.length;c<f;c++){let p=vp(l[c],t,e);p&&n.push(p)}}return n}refit(t=null){return(this.indirect?q0:B0)(this,t)}raycast(t,e=ri,n=0,r=1/0){let s=this._roots,o=[],a=this.indirect?Y0:k0;for(let l=0,c=s.length;l<c;l++)a(this,l,e,t,o,n,r);return o}raycastFirst(t,e=ri,n=0,r=1/0){let s=this._roots,o=null,a=this.indirect?Z0:H0;for(let l=0,c=s.length;l<c;l++){let f=a(this,l,e,t,n,r);f!=null&&(o==null||f.distance<o.distance)&&(o=f)}return o}intersectsGeometry(t,e){let n=!1,r=this._roots,s=this.indirect?J0:W0;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){let e=Xn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?V0:F0});return Xn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n,o=Xn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?x=>{let b=this.resolveTriangleIndex(x);Ye(o,b*3,a,l)}:x=>{Ye(o,x*3,a,l)},f=Xn.getPrimitive(),p=t.geometry.index,d=t.geometry.attributes.position,g=t.indirect?x=>{let b=t.resolveTriangleIndex(x);Ye(f,b*3,p,d)}:x=>{Ye(f,x*3,p,d)};if(s){if(!(t instanceof i))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let x=(b,_,y,w,m,u,v,h)=>{for(let C=y,M=y+w;C<M;C++){g(C),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let S=b,E=b+_;S<E;S++)if(c(S),o.needsUpdate=!0,s(o,f,S,C,m,u,v,h))return!0}return!1};if(r){let b=r;r=function(_,y,w,m,u,v,h,C){return b(_,y,w,m,u,v,h,C)?!0:x(_,y,w,m,u,v,h,C)}}else r=x}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return Oh.set(t.min,t.max,e),Oh.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Oh.intersectsBox(n),intersectsTriangle:n=>Oh.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?K0:X0)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return R0(this,t,e,n,r)}};var ex=Math.pow(10,-Math.log10(1e-6)),uw=5e-7*ex;function Fi(i){return~~(i*ex+uw)}function nx(i){return`${Fi(i.x)},${Fi(i.y)}`}function Mp(i){return`${Fi(i.x)},${Fi(i.y)},${Fi(i.z)}`}function ix(i){return`${Fi(i.x)},${Fi(i.y)},${Fi(i.z)},${Fi(i.w)}`}function rx(i,t,e){e.direction.subVectors(t,i).normalize();let n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function Vh(){return typeof SharedArrayBuffer<"u"}function sx(i){if(i.buffer instanceof SharedArrayBuffer)return i;let t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function hw(i){return i.index?i.index.count:i.attributes.position.count}function Jo(i){return hw(i)/3}var fw=1e-8,dw=new D;function ax(i){return~~(i/3)}function lx(i){return i%3}function ox(i,t){return i.start-t.start}function Sp(i,t){return dw.subVectors(t,i.origin).dot(i.direction)}function cx(i,t,e,n=fw){i.sort(ox),t.sort(ox);for(let a=0;a<i.length;a++){let l=i[a];for(let c=0;c<t.length;c++){let f=t[c];if(!(f.start>l.end)){if(l.end<f.start||f.end<l.start)continue;if(l.start<=f.start&&l.end>=f.end)s(f.end,l.end)||i.splice(a+1,0,{start:f.end,end:l.end,index:l.index}),l.end=f.start,f.start=0,f.end=0;else if(l.start>=f.start&&l.end<=f.end)s(l.end,f.end)||t.splice(c+1,0,{start:l.end,end:f.end,index:f.index}),f.end=l.start,l.start=0,l.end=0;else if(l.start<=f.start&&l.end<=f.end){let p=l.end;l.end=f.start,f.start=p}else if(l.start>=f.start&&l.end>=f.end){let p=f.end;f.end=l.start,l.start=p}else throw new Error}if(e.has(l.index)||e.set(l.index,[]),e.has(f.index)||e.set(f.index,[]),e.get(l.index).push(f.index),e.get(f.index).push(l.index),o(f)&&(t.splice(c,1),c--),o(l)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let l=0;l<a.length;l++)o(a[l])&&(a.splice(l,1),l--)}function s(a,l){return Math.abs(l-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}var kh=class{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){let e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let l=0,c=e.length;l<c;l++){let f=e[l];if(o(f,t)&&o(f,n))continue;let p=a(f,t),d=a(f,n),g=Math.min(p,d);g<r&&(r=g,s=f)}return s;function o(l,c){let f=l.origin.distanceTo(c.origin)>1e-5;return l.direction.angleTo(c.direction)>1e-4||f}function a(l,c){let f=l.origin.distanceTo(c.origin),p=l.direction.angleTo(c.direction);return f/1e-5+p/1e-4}}};var bp=new D,wp=new D,Hh=new Di;function ux(i,t,e){let n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,l=Array.from(t),c=new kh;for(let f=0,p=l.length;f<p;f++){let d=l[f],g=ax(d),x=lx(d),b=3*g+x,_=3*g+(x+1)%3;r&&(b=r.getX(b),_=r.getX(_)),bp.fromBufferAttribute(s,b),wp.fromBufferAttribute(s,_),rx(bp,wp,Hh);let y,w=c.findClosestRay(Hh);w===null&&(w=Hh.clone(),c.addRay(w)),a.has(w)||a.set(w,{forward:[],reverse:[],ray:w}),y=a.get(w);let m=Sp(w,bp),u=Sp(w,wp);m>u&&([m,u]=[u,m]),Hh.direction.dot(w.direction)<0?y.reverse.push({start:m,end:u,index:d}):y.forward.push({start:m,end:u,index:d})}return a.forEach(({forward:f,reverse:p},d)=>{cx(f,p,o,e),f.length===0&&p.length===0&&a.delete(d)}),{disjointConnectivityMap:o,fragmentMap:a}}var pw=new _t,Ep=new D,mw=new _e,Tp=["","",""],Ko=class{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){let n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){let n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){let{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?m:w,a=new Map,{attributes:l}=t,c=e?Object.keys(l):null,f=t.index,p=l.position,d=Jo(t),g=d,x=0;n&&(x=t.drawRange.start,t.drawRange.count!==1/0&&(d=~~(t.drawRange.count/3)));let b=this.data;(!b||b.length<3*g)&&(b=new Int32Array(3*g)),b.fill(-1);let _=0,y=new Set;for(let u=x,v=d*3+x;u<v;u+=3){let h=u;for(let C=0;C<3;C++){let M=h+C;f&&(M=f.getX(M)),Tp[C]=o(M)}for(let C=0;C<3;C++){let M=(C+1)%3,S=Tp[C],E=Tp[M],T=`${E}_${S}`;if(a.has(T)){let A=h+C,R=a.get(T);b[A]=R,b[R]=A,a.delete(T),_+=2,y.delete(R)}else{let A=`${S}_${E}`,R=h+C;a.set(A,R),y.add(R)}}}if(r){let{fragmentMap:u,disjointConnectivityMap:v}=ux(t,y,s);y.clear(),u.forEach(({forward:h,reverse:C})=>{h.forEach(({index:M})=>y.add(M)),C.forEach(({index:M})=>y.add(M))}),this.unmatchedDisjointEdges=u,this.disjointConnections=v,_=d*3-y.size}this.matchedEdges=_,this.unmatchedEdges=y.size,this.data=b;function w(u){return Ep.fromBufferAttribute(p,u),Mp(Ep)}function m(u){let v="";for(let h=0,C=c.length;h<C;h++){let M=l[c[h]],S;switch(M.itemSize){case 1:S=Fi(M.getX(u));break;case 2:S=nx(pw.fromBufferAttribute(M,u));break;case 3:S=Mp(Ep.fromBufferAttribute(M,u));break;case 4:S=ix(mw.fromBufferAttribute(M,u));break}v!==""&&(v+="|"),v+=S}return v}}};var bs=class extends ae{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Wt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){let{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){let t=this.geometry,e=t.attributes,n=Vh(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,l=`${t.uuid}_${o}_${a}`;if(this._hash===l)return;if(this._hash=l,n)for(let d in e){let g=e[d];if(g.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");g.array=sx(g.array)}t.boundsTree=new $o(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new Ko),t.halfEdges.updateFrom(t);let c=Jo(t);(!t.groupIndices||t.groupIndices.length!==c)&&(t.groupIndices=new Uint16Array(c));let f=t.groupIndices,p=t.groups;for(let d=0,g=p.length;d<g;d++){let{start:x,count:b}=p[d];for(let _=x/3,y=(x+b)/3;_<y;_++)f[_]=d}}disposeCacheData(){let{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}};var gw=Object.getOwnPropertyNames,oi=(i,t)=>function(){return t||(0,i[gw(i)[0]])((t={exports:{}}).exports,t),t.exports},Gh=oi({"node_modules/binary-search-bounds/search-bounds.js"(i,t){"use strict";function e(l,c,f,p,d){for(var g=d+1;p<=d;){var x=p+d>>>1,b=l[x],_=f!==void 0?f(b,c):b-c;_>=0?(g=x,d=x-1):p=x+1}return g}function n(l,c,f,p,d){for(var g=d+1;p<=d;){var x=p+d>>>1,b=l[x],_=f!==void 0?f(b,c):b-c;_>0?(g=x,d=x-1):p=x+1}return g}function r(l,c,f,p,d){for(var g=p-1;p<=d;){var x=p+d>>>1,b=l[x],_=f!==void 0?f(b,c):b-c;_<0?(g=x,p=x+1):d=x-1}return g}function s(l,c,f,p,d){for(var g=p-1;p<=d;){var x=p+d>>>1,b=l[x],_=f!==void 0?f(b,c):b-c;_<=0?(g=x,p=x+1):d=x-1}return g}function o(l,c,f,p,d){for(;p<=d;){var g=p+d>>>1,x=l[g],b=f!==void 0?f(x,c):x-c;if(b===0)return g;b<=0?p=g+1:d=g-1}return-1}function a(l,c,f,p,d,g){return typeof f=="function"?g(l,c,f,p===void 0?0:p|0,d===void 0?l.length-1:d|0):g(l,c,void 0,f===void 0?0:f|0,p===void 0?l.length-1:p|0)}t.exports={ge:function(l,c,f,p,d){return a(l,c,f,p,d,e)},gt:function(l,c,f,p,d){return a(l,c,f,p,d,n)},lt:function(l,c,f,p,d){return a(l,c,f,p,d,r)},le:function(l,c,f,p,d){return a(l,c,f,p,d,s)},eq:function(l,c,f,p,d){return a(l,c,f,p,d,o)}}}}),Ap=oi({"node_modules/two-product/two-product.js"(i,t){"use strict";t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var a=r*s,l=e*r,c=l-r,f=l-c,p=r-f,d=e*s,g=d-s,x=d-g,b=s-x,_=a-f*x,y=_-p*x,w=y-f*b,m=p*b-w;return o?(o[0]=m,o[1]=a,o):[m,a]}}}),hx=oi({"node_modules/robust-sum/robust-sum.js"(i,t){"use strict";t.exports=n;function e(r,s){var o=r+s,a=o-r,l=o-a,c=s-a,f=r-l,p=f+c;return p?[p,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var l=o+a,c=new Array(l),f=0,p=0,d=0,g=Math.abs,x=r[p],b=g(x),_=s[d],y=g(_),w,m;b<y?(m=x,p+=1,p<o&&(x=r[p],b=g(x))):(m=_,d+=1,d<a&&(_=s[d],y=g(_))),p<o&&b<y||d>=a?(w=x,p+=1,p<o&&(x=r[p],b=g(x))):(w=_,d+=1,d<a&&(_=s[d],y=g(_)));for(var u=w+m,v=u-w,h=m-v,C=h,M=u,S,E,T,A,R;p<o&&d<a;)b<y?(w=x,p+=1,p<o&&(x=r[p],b=g(x))):(w=_,d+=1,d<a&&(_=s[d],y=g(_))),m=C,u=w+m,v=u-w,h=m-v,h&&(c[f++]=h),S=M+u,E=S-M,T=S-E,A=u-E,R=M-T,C=R+A,M=S;for(;p<o;)w=x,m=C,u=w+m,v=u-w,h=m-v,h&&(c[f++]=h),S=M+u,E=S-M,T=S-E,A=u-E,R=M-T,C=R+A,M=S,p+=1,p<o&&(x=r[p]);for(;d<a;)w=_,m=C,u=w+m,v=u-w,h=m-v,h&&(c[f++]=h),S=M+u,E=S-M,T=S-E,A=u-E,R=M-T,C=R+A,M=S,d+=1,d<a&&(_=s[d]);return C&&(c[f++]=C),M&&(c[f++]=M),f||(c[f++]=0),c.length=f,c}}}),xw=oi({"node_modules/two-sum/two-sum.js"(i,t){"use strict";t.exports=e;function e(n,r,s){var o=n+r,a=o-n,l=o-a,c=r-a,f=n-l;return s?(s[0]=f+c,s[1]=o,s):[f+c,o]}}}),fx=oi({"node_modules/robust-scale/robust-scale.js"(i,t){"use strict";var e=Ap(),n=xw();t.exports=r;function r(s,o){var a=s.length;if(a===1){var l=e(s[0],o);return l[0]?l:[l[1]]}var c=new Array(2*a),f=[.1,.1],p=[.1,.1],d=0;e(s[0],o,f),f[0]&&(c[d++]=f[0]);for(var g=1;g<a;++g){e(s[g],o,p);var x=f[1];n(x,p[0],f),f[0]&&(c[d++]=f[0]);var b=p[1],_=f[1],y=b+_,w=y-b,m=_-w;f[1]=y,m&&(c[d++]=m)}return f[1]&&(c[d++]=f[1]),d===0&&(c[d++]=0),c.length=d,c}}}),dx=oi({"node_modules/robust-subtract/robust-diff.js"(i,t){"use strict";t.exports=n;function e(r,s){var o=r+s,a=o-r,l=o-a,c=s-a,f=r-l,p=f+c;return p?[p,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var l=o+a,c=new Array(l),f=0,p=0,d=0,g=Math.abs,x=r[p],b=g(x),_=-s[d],y=g(_),w,m;b<y?(m=x,p+=1,p<o&&(x=r[p],b=g(x))):(m=_,d+=1,d<a&&(_=-s[d],y=g(_))),p<o&&b<y||d>=a?(w=x,p+=1,p<o&&(x=r[p],b=g(x))):(w=_,d+=1,d<a&&(_=-s[d],y=g(_)));for(var u=w+m,v=u-w,h=m-v,C=h,M=u,S,E,T,A,R;p<o&&d<a;)b<y?(w=x,p+=1,p<o&&(x=r[p],b=g(x))):(w=_,d+=1,d<a&&(_=-s[d],y=g(_))),m=C,u=w+m,v=u-w,h=m-v,h&&(c[f++]=h),S=M+u,E=S-M,T=S-E,A=u-E,R=M-T,C=R+A,M=S;for(;p<o;)w=x,m=C,u=w+m,v=u-w,h=m-v,h&&(c[f++]=h),S=M+u,E=S-M,T=S-E,A=u-E,R=M-T,C=R+A,M=S,p+=1,p<o&&(x=r[p]);for(;d<a;)w=_,m=C,u=w+m,v=u-w,h=m-v,h&&(c[f++]=h),S=M+u,E=S-M,T=S-E,A=u-E,R=M-T,C=R+A,M=S,d+=1,d<a&&(_=-s[d]);return C&&(c[f++]=C),M&&(c[f++]=M),f||(c[f++]=0),c.length=f,c}}}),_w=oi({"node_modules/robust-orientation/orientation.js"(i,t){"use strict";var e=Ap(),n=hx(),r=fx(),s=dx(),o=5,a=11102230246251565e-32,l=(3+16*a)*a,c=(7+56*a)*a;function f(u,v,h,C){return function(S,E,T){var A=u(u(v(E[1],T[0]),v(-T[1],E[0])),u(v(S[1],E[0]),v(-E[1],S[0]))),R=u(v(S[1],T[0]),v(-T[1],S[0])),L=C(A,R);return L[L.length-1]}}function p(u,v,h,C){return function(S,E,T,A){var R=u(u(h(u(v(T[1],A[0]),v(-A[1],T[0])),E[2]),u(h(u(v(E[1],A[0]),v(-A[1],E[0])),-T[2]),h(u(v(E[1],T[0]),v(-T[1],E[0])),A[2]))),u(h(u(v(E[1],A[0]),v(-A[1],E[0])),S[2]),u(h(u(v(S[1],A[0]),v(-A[1],S[0])),-E[2]),h(u(v(S[1],E[0]),v(-E[1],S[0])),A[2])))),L=u(u(h(u(v(T[1],A[0]),v(-A[1],T[0])),S[2]),u(h(u(v(S[1],A[0]),v(-A[1],S[0])),-T[2]),h(u(v(S[1],T[0]),v(-T[1],S[0])),A[2]))),u(h(u(v(E[1],T[0]),v(-T[1],E[0])),S[2]),u(h(u(v(S[1],T[0]),v(-T[1],S[0])),-E[2]),h(u(v(S[1],E[0]),v(-E[1],S[0])),T[2])))),F=C(R,L);return F[F.length-1]}}function d(u,v,h,C){return function(S,E,T,A,R){var L=u(u(u(h(u(h(u(v(A[1],R[0]),v(-R[1],A[0])),T[2]),u(h(u(v(T[1],R[0]),v(-R[1],T[0])),-A[2]),h(u(v(T[1],A[0]),v(-A[1],T[0])),R[2]))),E[3]),u(h(u(h(u(v(A[1],R[0]),v(-R[1],A[0])),E[2]),u(h(u(v(E[1],R[0]),v(-R[1],E[0])),-A[2]),h(u(v(E[1],A[0]),v(-A[1],E[0])),R[2]))),-T[3]),h(u(h(u(v(T[1],R[0]),v(-R[1],T[0])),E[2]),u(h(u(v(E[1],R[0]),v(-R[1],E[0])),-T[2]),h(u(v(E[1],T[0]),v(-T[1],E[0])),R[2]))),A[3]))),u(h(u(h(u(v(T[1],A[0]),v(-A[1],T[0])),E[2]),u(h(u(v(E[1],A[0]),v(-A[1],E[0])),-T[2]),h(u(v(E[1],T[0]),v(-T[1],E[0])),A[2]))),-R[3]),u(h(u(h(u(v(A[1],R[0]),v(-R[1],A[0])),E[2]),u(h(u(v(E[1],R[0]),v(-R[1],E[0])),-A[2]),h(u(v(E[1],A[0]),v(-A[1],E[0])),R[2]))),S[3]),h(u(h(u(v(A[1],R[0]),v(-R[1],A[0])),S[2]),u(h(u(v(S[1],R[0]),v(-R[1],S[0])),-A[2]),h(u(v(S[1],A[0]),v(-A[1],S[0])),R[2]))),-E[3])))),u(u(h(u(h(u(v(E[1],R[0]),v(-R[1],E[0])),S[2]),u(h(u(v(S[1],R[0]),v(-R[1],S[0])),-E[2]),h(u(v(S[1],E[0]),v(-E[1],S[0])),R[2]))),A[3]),u(h(u(h(u(v(E[1],A[0]),v(-A[1],E[0])),S[2]),u(h(u(v(S[1],A[0]),v(-A[1],S[0])),-E[2]),h(u(v(S[1],E[0]),v(-E[1],S[0])),A[2]))),-R[3]),h(u(h(u(v(T[1],A[0]),v(-A[1],T[0])),E[2]),u(h(u(v(E[1],A[0]),v(-A[1],E[0])),-T[2]),h(u(v(E[1],T[0]),v(-T[1],E[0])),A[2]))),S[3]))),u(h(u(h(u(v(T[1],A[0]),v(-A[1],T[0])),S[2]),u(h(u(v(S[1],A[0]),v(-A[1],S[0])),-T[2]),h(u(v(S[1],T[0]),v(-T[1],S[0])),A[2]))),-E[3]),u(h(u(h(u(v(E[1],A[0]),v(-A[1],E[0])),S[2]),u(h(u(v(S[1],A[0]),v(-A[1],S[0])),-E[2]),h(u(v(S[1],E[0]),v(-E[1],S[0])),A[2]))),T[3]),h(u(h(u(v(E[1],T[0]),v(-T[1],E[0])),S[2]),u(h(u(v(S[1],T[0]),v(-T[1],S[0])),-E[2]),h(u(v(S[1],E[0]),v(-E[1],S[0])),T[2]))),-A[3]))))),F=u(u(u(h(u(h(u(v(A[1],R[0]),v(-R[1],A[0])),T[2]),u(h(u(v(T[1],R[0]),v(-R[1],T[0])),-A[2]),h(u(v(T[1],A[0]),v(-A[1],T[0])),R[2]))),S[3]),h(u(h(u(v(A[1],R[0]),v(-R[1],A[0])),S[2]),u(h(u(v(S[1],R[0]),v(-R[1],S[0])),-A[2]),h(u(v(S[1],A[0]),v(-A[1],S[0])),R[2]))),-T[3])),u(h(u(h(u(v(T[1],R[0]),v(-R[1],T[0])),S[2]),u(h(u(v(S[1],R[0]),v(-R[1],S[0])),-T[2]),h(u(v(S[1],T[0]),v(-T[1],S[0])),R[2]))),A[3]),h(u(h(u(v(T[1],A[0]),v(-A[1],T[0])),S[2]),u(h(u(v(S[1],A[0]),v(-A[1],S[0])),-T[2]),h(u(v(S[1],T[0]),v(-T[1],S[0])),A[2]))),-R[3]))),u(u(h(u(h(u(v(T[1],R[0]),v(-R[1],T[0])),E[2]),u(h(u(v(E[1],R[0]),v(-R[1],E[0])),-T[2]),h(u(v(E[1],T[0]),v(-T[1],E[0])),R[2]))),S[3]),h(u(h(u(v(T[1],R[0]),v(-R[1],T[0])),S[2]),u(h(u(v(S[1],R[0]),v(-R[1],S[0])),-T[2]),h(u(v(S[1],T[0]),v(-T[1],S[0])),R[2]))),-E[3])),u(h(u(h(u(v(E[1],R[0]),v(-R[1],E[0])),S[2]),u(h(u(v(S[1],R[0]),v(-R[1],S[0])),-E[2]),h(u(v(S[1],E[0]),v(-E[1],S[0])),R[2]))),T[3]),h(u(h(u(v(E[1],T[0]),v(-T[1],E[0])),S[2]),u(h(u(v(S[1],T[0]),v(-T[1],S[0])),-E[2]),h(u(v(S[1],E[0]),v(-E[1],S[0])),T[2]))),-R[3])))),O=C(L,F);return O[O.length-1]}}function g(u){var v=u===3?f:u===4?p:d;return v(n,e,r,s)}var x=g(3),b=g(4),_=[function(){return 0},function(){return 0},function(v,h){return h[0]-v[0]},function(v,h,C){var M=(v[1]-C[1])*(h[0]-C[0]),S=(v[0]-C[0])*(h[1]-C[1]),E=M-S,T;if(M>0){if(S<=0)return E;T=M+S}else if(M<0){if(S>=0)return E;T=-(M+S)}else return E;var A=l*T;return E>=A||E<=-A?E:x(v,h,C)},function(v,h,C,M){var S=v[0]-M[0],E=h[0]-M[0],T=C[0]-M[0],A=v[1]-M[1],R=h[1]-M[1],L=C[1]-M[1],F=v[2]-M[2],O=h[2]-M[2],V=C[2]-M[2],$=E*L,k=T*R,tt=T*A,q=S*L,ct=S*R,ut=E*A,Et=F*($-k)+O*(tt-q)+V*(ct-ut),Mt=(Math.abs($)+Math.abs(k))*Math.abs(F)+(Math.abs(tt)+Math.abs(q))*Math.abs(O)+(Math.abs(ct)+Math.abs(ut))*Math.abs(V),kt=c*Mt;return Et>kt||-Et>kt?Et:b(v,h,C,M)}];function y(u){var v=_[u.length];return v||(v=_[u.length]=g(u.length)),v.apply(void 0,u)}function w(u,v,h,C,M,S,E){return function(A,R,L,F,O){switch(arguments.length){case 0:case 1:return 0;case 2:return C(A,R);case 3:return M(A,R,L);case 4:return S(A,R,L,F);case 5:return E(A,R,L,F,O)}for(var V=new Array(arguments.length),$=0;$<arguments.length;++$)V[$]=arguments[$];return u(V)}}function m(){for(;_.length<=o;)_.push(g(_.length));t.exports=w.apply(void 0,[y].concat(_));for(var u=0;u<=o;++u)t.exports[u]=_[u]}m()}}),vw=oi({"node_modules/cdt2d/lib/monotone.js"(i,t){"use strict";var e=Gh(),n=_w()[3],r=0,s=1,o=2;t.exports=b;function a(_,y,w,m,u){this.a=_,this.b=y,this.idx=w,this.lowerIds=m,this.upperIds=u}function l(_,y,w,m){this.a=_,this.b=y,this.type=w,this.idx=m}function c(_,y){var w=_.a[0]-y.a[0]||_.a[1]-y.a[1]||_.type-y.type;return w||_.type!==r&&(w=n(_.a,_.b,y.b),w)?w:_.idx-y.idx}function f(_,y){return n(_.a,_.b,y)}function p(_,y,w,m,u){for(var v=e.lt(y,m,f),h=e.gt(y,m,f),C=v;C<h;++C){for(var M=y[C],S=M.lowerIds,T=S.length;T>1&&n(w[S[T-2]],w[S[T-1]],m)>0;)_.push([S[T-1],S[T-2],u]),T-=1;S.length=T,S.push(u);for(var E=M.upperIds,T=E.length;T>1&&n(w[E[T-2]],w[E[T-1]],m)<0;)_.push([E[T-2],E[T-1],u]),T-=1;E.length=T,E.push(u)}}function d(_,y){var w;return _.a[0]<y.a[0]?w=n(_.a,_.b,y.a):w=n(y.b,y.a,_.a),w||(y.b[0]<_.b[0]?w=n(_.a,_.b,y.b):w=n(y.b,y.a,_.b),w||_.idx-y.idx)}function g(_,y,w){var m=e.le(_,w,d),u=_[m],v=u.upperIds,h=v[v.length-1];u.upperIds=[h],_.splice(m+1,0,new a(w.a,w.b,w.idx,[h],v))}function x(_,y,w){var m=w.a;w.a=w.b,w.b=m;var u=e.eq(_,w,d),v=_[u],h=_[u-1];h.upperIds=v.upperIds,_.splice(u,1)}function b(_,y){for(var w=_.length,m=y.length,u=[],v=0;v<w;++v)u.push(new l(_[v],null,r,v));for(var v=0;v<m;++v){var h=y[v],C=_[h[0]],M=_[h[1]];C[0]<M[0]?u.push(new l(C,M,o,v),new l(M,C,s,v)):C[0]>M[0]&&u.push(new l(M,C,o,v),new l(C,M,s,v))}u.sort(c);for(var S=u[0].a[0]-(1+Math.abs(u[0].a[0]))*Math.pow(2,-52),E=[new a([S,1],[S,0],-1,[],[],[],[])],T=[],v=0,A=u.length;v<A;++v){var R=u[v],L=R.type;L===r?p(T,E,_,R.a,R.idx):L===o?g(E,_,R):x(E,_,R)}return T}}}),yw=oi({"node_modules/cdt2d/lib/triangulation.js"(i,t){"use strict";var e=Gh();t.exports=o;function n(a,l){this.stars=a,this.edges=l}var r=n.prototype;function s(a,l,c){for(var f=1,p=a.length;f<p;f+=2)if(a[f-1]===l&&a[f]===c){a[f-1]=a[p-2],a[f]=a[p-1],a.length=p-2;return}}r.isConstraint=(function(){var a=[0,0];function l(c,f){return c[0]-f[0]||c[1]-f[1]}return function(c,f){return a[0]=Math.min(c,f),a[1]=Math.max(c,f),e.eq(this.edges,a,l)>=0}})(),r.removeTriangle=function(a,l,c){var f=this.stars;s(f[a],l,c),s(f[l],c,a),s(f[c],a,l)},r.addTriangle=function(a,l,c){var f=this.stars;f[a].push(l,c),f[l].push(c,a),f[c].push(a,l)},r.opposite=function(a,l){for(var c=this.stars[l],f=1,p=c.length;f<p;f+=2)if(c[f]===a)return c[f-1];return-1},r.flip=function(a,l){var c=this.opposite(a,l),f=this.opposite(l,a);this.removeTriangle(a,l,c),this.removeTriangle(l,a,f),this.addTriangle(a,f,c),this.addTriangle(l,c,f)},r.edges=function(){for(var a=this.stars,l=[],c=0,f=a.length;c<f;++c)for(var p=a[c],d=0,g=p.length;d<g;d+=2)l.push([p[d],p[d+1]]);return l},r.cells=function(){for(var a=this.stars,l=[],c=0,f=a.length;c<f;++c)for(var p=a[c],d=0,g=p.length;d<g;d+=2){var x=p[d],b=p[d+1];c<Math.min(x,b)&&l.push([c,x,b])}return l};function o(a,l){for(var c=new Array(a),f=0;f<a;++f)c[f]=[];return new n(c,l)}}}),Mw=oi({"node_modules/robust-in-sphere/in-sphere.js"(i,t){"use strict";var e=Ap(),n=hx(),r=dx(),s=fx(),o=6;function a(m){var u=m===3?p:m===4?d:m===5?g:x;return u(n,r,e,s)}function l(){return 0}function c(){return 0}function f(){return 0}function p(m,u,v,h){function C(M,S,E){var T=v(M[0],M[0]),A=h(T,S[0]),R=h(T,E[0]),L=v(S[0],S[0]),F=h(L,M[0]),O=h(L,E[0]),V=v(E[0],E[0]),$=h(V,M[0]),k=h(V,S[0]),tt=m(u(k,O),u(F,A)),q=u($,R),ct=u(tt,q);return ct[ct.length-1]}return C}function d(m,u,v,h){function C(M,S,E,T){var A=m(v(M[0],M[0]),v(M[1],M[1])),R=h(A,S[0]),L=h(A,E[0]),F=h(A,T[0]),O=m(v(S[0],S[0]),v(S[1],S[1])),V=h(O,M[0]),$=h(O,E[0]),k=h(O,T[0]),tt=m(v(E[0],E[0]),v(E[1],E[1])),q=h(tt,M[0]),ct=h(tt,S[0]),ut=h(tt,T[0]),Et=m(v(T[0],T[0]),v(T[1],T[1])),Mt=h(Et,M[0]),kt=h(Et,S[0]),N=h(Et,E[0]),Q=m(m(h(u(N,ut),S[1]),m(h(u(kt,k),-E[1]),h(u(ct,$),T[1]))),m(h(u(kt,k),M[1]),m(h(u(Mt,F),-S[1]),h(u(V,R),T[1])))),lt=m(m(h(u(N,ut),M[1]),m(h(u(Mt,F),-E[1]),h(u(q,L),T[1]))),m(h(u(ct,$),M[1]),m(h(u(q,L),-S[1]),h(u(V,R),E[1])))),vt=u(Q,lt);return vt[vt.length-1]}return C}function g(m,u,v,h){function C(M,S,E,T,A){var R=m(v(M[0],M[0]),m(v(M[1],M[1]),v(M[2],M[2]))),L=h(R,S[0]),F=h(R,E[0]),O=h(R,T[0]),V=h(R,A[0]),$=m(v(S[0],S[0]),m(v(S[1],S[1]),v(S[2],S[2]))),k=h($,M[0]),tt=h($,E[0]),q=h($,T[0]),ct=h($,A[0]),ut=m(v(E[0],E[0]),m(v(E[1],E[1]),v(E[2],E[2]))),Et=h(ut,M[0]),Mt=h(ut,S[0]),kt=h(ut,T[0]),N=h(ut,A[0]),Q=m(v(T[0],T[0]),m(v(T[1],T[1]),v(T[2],T[2]))),lt=h(Q,M[0]),vt=h(Q,S[0]),st=h(Q,E[0]),dt=h(Q,A[0]),Bt=m(v(A[0],A[0]),m(v(A[1],A[1]),v(A[2],A[2]))),j=h(Bt,M[0]),rt=h(Bt,S[0]),ot=h(Bt,E[0]),ht=h(Bt,T[0]),bt=m(m(m(h(m(h(u(ht,dt),E[1]),m(h(u(ot,N),-T[1]),h(u(st,kt),A[1]))),S[2]),m(h(m(h(u(ht,dt),S[1]),m(h(u(rt,ct),-T[1]),h(u(vt,q),A[1]))),-E[2]),h(m(h(u(ot,N),S[1]),m(h(u(rt,ct),-E[1]),h(u(Mt,tt),A[1]))),T[2]))),m(h(m(h(u(st,kt),S[1]),m(h(u(vt,q),-E[1]),h(u(Mt,tt),T[1]))),-A[2]),m(h(m(h(u(ht,dt),S[1]),m(h(u(rt,ct),-T[1]),h(u(vt,q),A[1]))),M[2]),h(m(h(u(ht,dt),M[1]),m(h(u(j,V),-T[1]),h(u(lt,O),A[1]))),-S[2])))),m(m(h(m(h(u(rt,ct),M[1]),m(h(u(j,V),-S[1]),h(u(k,L),A[1]))),T[2]),m(h(m(h(u(vt,q),M[1]),m(h(u(lt,O),-S[1]),h(u(k,L),T[1]))),-A[2]),h(m(h(u(st,kt),S[1]),m(h(u(vt,q),-E[1]),h(u(Mt,tt),T[1]))),M[2]))),m(h(m(h(u(st,kt),M[1]),m(h(u(lt,O),-E[1]),h(u(Et,F),T[1]))),-S[2]),m(h(m(h(u(vt,q),M[1]),m(h(u(lt,O),-S[1]),h(u(k,L),T[1]))),E[2]),h(m(h(u(Mt,tt),M[1]),m(h(u(Et,F),-S[1]),h(u(k,L),E[1]))),-T[2]))))),Pt=m(m(m(h(m(h(u(ht,dt),E[1]),m(h(u(ot,N),-T[1]),h(u(st,kt),A[1]))),M[2]),h(m(h(u(ht,dt),M[1]),m(h(u(j,V),-T[1]),h(u(lt,O),A[1]))),-E[2])),m(h(m(h(u(ot,N),M[1]),m(h(u(j,V),-E[1]),h(u(Et,F),A[1]))),T[2]),h(m(h(u(st,kt),M[1]),m(h(u(lt,O),-E[1]),h(u(Et,F),T[1]))),-A[2]))),m(m(h(m(h(u(ot,N),S[1]),m(h(u(rt,ct),-E[1]),h(u(Mt,tt),A[1]))),M[2]),h(m(h(u(ot,N),M[1]),m(h(u(j,V),-E[1]),h(u(Et,F),A[1]))),-S[2])),m(h(m(h(u(rt,ct),M[1]),m(h(u(j,V),-S[1]),h(u(k,L),A[1]))),E[2]),h(m(h(u(Mt,tt),M[1]),m(h(u(Et,F),-S[1]),h(u(k,L),E[1]))),-A[2])))),Tt=u(bt,Pt);return Tt[Tt.length-1]}return C}function x(m,u,v,h){function C(M,S,E,T,A,R){var L=m(m(v(M[0],M[0]),v(M[1],M[1])),m(v(M[2],M[2]),v(M[3],M[3]))),F=h(L,S[0]),O=h(L,E[0]),V=h(L,T[0]),$=h(L,A[0]),k=h(L,R[0]),tt=m(m(v(S[0],S[0]),v(S[1],S[1])),m(v(S[2],S[2]),v(S[3],S[3]))),q=h(tt,M[0]),ct=h(tt,E[0]),ut=h(tt,T[0]),Et=h(tt,A[0]),Mt=h(tt,R[0]),kt=m(m(v(E[0],E[0]),v(E[1],E[1])),m(v(E[2],E[2]),v(E[3],E[3]))),N=h(kt,M[0]),Q=h(kt,S[0]),lt=h(kt,T[0]),vt=h(kt,A[0]),st=h(kt,R[0]),dt=m(m(v(T[0],T[0]),v(T[1],T[1])),m(v(T[2],T[2]),v(T[3],T[3]))),Bt=h(dt,M[0]),j=h(dt,S[0]),rt=h(dt,E[0]),ot=h(dt,A[0]),ht=h(dt,R[0]),bt=m(m(v(A[0],A[0]),v(A[1],A[1])),m(v(A[2],A[2]),v(A[3],A[3]))),Pt=h(bt,M[0]),Tt=h(bt,S[0]),Ut=h(bt,E[0]),Ft=h(bt,T[0]),H=h(bt,R[0]),de=m(m(v(R[0],R[0]),v(R[1],R[1])),m(v(R[2],R[2]),v(R[3],R[3]))),qt=h(de,M[0]),B=h(de,S[0]),P=h(de,E[0]),X=h(de,T[0]),K=h(de,A[0]),it=m(m(m(h(m(m(h(m(h(u(K,H),T[1]),m(h(u(X,ht),-A[1]),h(u(Ft,ot),R[1]))),E[2]),h(m(h(u(K,H),E[1]),m(h(u(P,st),-A[1]),h(u(Ut,vt),R[1]))),-T[2])),m(h(m(h(u(X,ht),E[1]),m(h(u(P,st),-T[1]),h(u(rt,lt),R[1]))),A[2]),h(m(h(u(Ft,ot),E[1]),m(h(u(Ut,vt),-T[1]),h(u(rt,lt),A[1]))),-R[2]))),S[3]),m(h(m(m(h(m(h(u(K,H),T[1]),m(h(u(X,ht),-A[1]),h(u(Ft,ot),R[1]))),S[2]),h(m(h(u(K,H),S[1]),m(h(u(B,Mt),-A[1]),h(u(Tt,Et),R[1]))),-T[2])),m(h(m(h(u(X,ht),S[1]),m(h(u(B,Mt),-T[1]),h(u(j,ut),R[1]))),A[2]),h(m(h(u(Ft,ot),S[1]),m(h(u(Tt,Et),-T[1]),h(u(j,ut),A[1]))),-R[2]))),-E[3]),h(m(m(h(m(h(u(K,H),E[1]),m(h(u(P,st),-A[1]),h(u(Ut,vt),R[1]))),S[2]),h(m(h(u(K,H),S[1]),m(h(u(B,Mt),-A[1]),h(u(Tt,Et),R[1]))),-E[2])),m(h(m(h(u(P,st),S[1]),m(h(u(B,Mt),-E[1]),h(u(Q,ct),R[1]))),A[2]),h(m(h(u(Ut,vt),S[1]),m(h(u(Tt,Et),-E[1]),h(u(Q,ct),A[1]))),-R[2]))),T[3]))),m(m(h(m(m(h(m(h(u(X,ht),E[1]),m(h(u(P,st),-T[1]),h(u(rt,lt),R[1]))),S[2]),h(m(h(u(X,ht),S[1]),m(h(u(B,Mt),-T[1]),h(u(j,ut),R[1]))),-E[2])),m(h(m(h(u(P,st),S[1]),m(h(u(B,Mt),-E[1]),h(u(Q,ct),R[1]))),T[2]),h(m(h(u(rt,lt),S[1]),m(h(u(j,ut),-E[1]),h(u(Q,ct),T[1]))),-R[2]))),-A[3]),h(m(m(h(m(h(u(Ft,ot),E[1]),m(h(u(Ut,vt),-T[1]),h(u(rt,lt),A[1]))),S[2]),h(m(h(u(Ft,ot),S[1]),m(h(u(Tt,Et),-T[1]),h(u(j,ut),A[1]))),-E[2])),m(h(m(h(u(Ut,vt),S[1]),m(h(u(Tt,Et),-E[1]),h(u(Q,ct),A[1]))),T[2]),h(m(h(u(rt,lt),S[1]),m(h(u(j,ut),-E[1]),h(u(Q,ct),T[1]))),-A[2]))),R[3])),m(h(m(m(h(m(h(u(K,H),T[1]),m(h(u(X,ht),-A[1]),h(u(Ft,ot),R[1]))),S[2]),h(m(h(u(K,H),S[1]),m(h(u(B,Mt),-A[1]),h(u(Tt,Et),R[1]))),-T[2])),m(h(m(h(u(X,ht),S[1]),m(h(u(B,Mt),-T[1]),h(u(j,ut),R[1]))),A[2]),h(m(h(u(Ft,ot),S[1]),m(h(u(Tt,Et),-T[1]),h(u(j,ut),A[1]))),-R[2]))),M[3]),h(m(m(h(m(h(u(K,H),T[1]),m(h(u(X,ht),-A[1]),h(u(Ft,ot),R[1]))),M[2]),h(m(h(u(K,H),M[1]),m(h(u(qt,k),-A[1]),h(u(Pt,$),R[1]))),-T[2])),m(h(m(h(u(X,ht),M[1]),m(h(u(qt,k),-T[1]),h(u(Bt,V),R[1]))),A[2]),h(m(h(u(Ft,ot),M[1]),m(h(u(Pt,$),-T[1]),h(u(Bt,V),A[1]))),-R[2]))),-S[3])))),m(m(m(h(m(m(h(m(h(u(K,H),S[1]),m(h(u(B,Mt),-A[1]),h(u(Tt,Et),R[1]))),M[2]),h(m(h(u(K,H),M[1]),m(h(u(qt,k),-A[1]),h(u(Pt,$),R[1]))),-S[2])),m(h(m(h(u(B,Mt),M[1]),m(h(u(qt,k),-S[1]),h(u(q,F),R[1]))),A[2]),h(m(h(u(Tt,Et),M[1]),m(h(u(Pt,$),-S[1]),h(u(q,F),A[1]))),-R[2]))),T[3]),h(m(m(h(m(h(u(X,ht),S[1]),m(h(u(B,Mt),-T[1]),h(u(j,ut),R[1]))),M[2]),h(m(h(u(X,ht),M[1]),m(h(u(qt,k),-T[1]),h(u(Bt,V),R[1]))),-S[2])),m(h(m(h(u(B,Mt),M[1]),m(h(u(qt,k),-S[1]),h(u(q,F),R[1]))),T[2]),h(m(h(u(j,ut),M[1]),m(h(u(Bt,V),-S[1]),h(u(q,F),T[1]))),-R[2]))),-A[3])),m(h(m(m(h(m(h(u(Ft,ot),S[1]),m(h(u(Tt,Et),-T[1]),h(u(j,ut),A[1]))),M[2]),h(m(h(u(Ft,ot),M[1]),m(h(u(Pt,$),-T[1]),h(u(Bt,V),A[1]))),-S[2])),m(h(m(h(u(Tt,Et),M[1]),m(h(u(Pt,$),-S[1]),h(u(q,F),A[1]))),T[2]),h(m(h(u(j,ut),M[1]),m(h(u(Bt,V),-S[1]),h(u(q,F),T[1]))),-A[2]))),R[3]),h(m(m(h(m(h(u(X,ht),E[1]),m(h(u(P,st),-T[1]),h(u(rt,lt),R[1]))),S[2]),h(m(h(u(X,ht),S[1]),m(h(u(B,Mt),-T[1]),h(u(j,ut),R[1]))),-E[2])),m(h(m(h(u(P,st),S[1]),m(h(u(B,Mt),-E[1]),h(u(Q,ct),R[1]))),T[2]),h(m(h(u(rt,lt),S[1]),m(h(u(j,ut),-E[1]),h(u(Q,ct),T[1]))),-R[2]))),M[3]))),m(m(h(m(m(h(m(h(u(X,ht),E[1]),m(h(u(P,st),-T[1]),h(u(rt,lt),R[1]))),M[2]),h(m(h(u(X,ht),M[1]),m(h(u(qt,k),-T[1]),h(u(Bt,V),R[1]))),-E[2])),m(h(m(h(u(P,st),M[1]),m(h(u(qt,k),-E[1]),h(u(N,O),R[1]))),T[2]),h(m(h(u(rt,lt),M[1]),m(h(u(Bt,V),-E[1]),h(u(N,O),T[1]))),-R[2]))),-S[3]),h(m(m(h(m(h(u(X,ht),S[1]),m(h(u(B,Mt),-T[1]),h(u(j,ut),R[1]))),M[2]),h(m(h(u(X,ht),M[1]),m(h(u(qt,k),-T[1]),h(u(Bt,V),R[1]))),-S[2])),m(h(m(h(u(B,Mt),M[1]),m(h(u(qt,k),-S[1]),h(u(q,F),R[1]))),T[2]),h(m(h(u(j,ut),M[1]),m(h(u(Bt,V),-S[1]),h(u(q,F),T[1]))),-R[2]))),E[3])),m(h(m(m(h(m(h(u(P,st),S[1]),m(h(u(B,Mt),-E[1]),h(u(Q,ct),R[1]))),M[2]),h(m(h(u(P,st),M[1]),m(h(u(qt,k),-E[1]),h(u(N,O),R[1]))),-S[2])),m(h(m(h(u(B,Mt),M[1]),m(h(u(qt,k),-S[1]),h(u(q,F),R[1]))),E[2]),h(m(h(u(Q,ct),M[1]),m(h(u(N,O),-S[1]),h(u(q,F),E[1]))),-R[2]))),-T[3]),h(m(m(h(m(h(u(rt,lt),S[1]),m(h(u(j,ut),-E[1]),h(u(Q,ct),T[1]))),M[2]),h(m(h(u(rt,lt),M[1]),m(h(u(Bt,V),-E[1]),h(u(N,O),T[1]))),-S[2])),m(h(m(h(u(j,ut),M[1]),m(h(u(Bt,V),-S[1]),h(u(q,F),T[1]))),E[2]),h(m(h(u(Q,ct),M[1]),m(h(u(N,O),-S[1]),h(u(q,F),E[1]))),-T[2]))),R[3]))))),St=m(m(m(h(m(m(h(m(h(u(K,H),T[1]),m(h(u(X,ht),-A[1]),h(u(Ft,ot),R[1]))),E[2]),h(m(h(u(K,H),E[1]),m(h(u(P,st),-A[1]),h(u(Ut,vt),R[1]))),-T[2])),m(h(m(h(u(X,ht),E[1]),m(h(u(P,st),-T[1]),h(u(rt,lt),R[1]))),A[2]),h(m(h(u(Ft,ot),E[1]),m(h(u(Ut,vt),-T[1]),h(u(rt,lt),A[1]))),-R[2]))),M[3]),m(h(m(m(h(m(h(u(K,H),T[1]),m(h(u(X,ht),-A[1]),h(u(Ft,ot),R[1]))),M[2]),h(m(h(u(K,H),M[1]),m(h(u(qt,k),-A[1]),h(u(Pt,$),R[1]))),-T[2])),m(h(m(h(u(X,ht),M[1]),m(h(u(qt,k),-T[1]),h(u(Bt,V),R[1]))),A[2]),h(m(h(u(Ft,ot),M[1]),m(h(u(Pt,$),-T[1]),h(u(Bt,V),A[1]))),-R[2]))),-E[3]),h(m(m(h(m(h(u(K,H),E[1]),m(h(u(P,st),-A[1]),h(u(Ut,vt),R[1]))),M[2]),h(m(h(u(K,H),M[1]),m(h(u(qt,k),-A[1]),h(u(Pt,$),R[1]))),-E[2])),m(h(m(h(u(P,st),M[1]),m(h(u(qt,k),-E[1]),h(u(N,O),R[1]))),A[2]),h(m(h(u(Ut,vt),M[1]),m(h(u(Pt,$),-E[1]),h(u(N,O),A[1]))),-R[2]))),T[3]))),m(m(h(m(m(h(m(h(u(X,ht),E[1]),m(h(u(P,st),-T[1]),h(u(rt,lt),R[1]))),M[2]),h(m(h(u(X,ht),M[1]),m(h(u(qt,k),-T[1]),h(u(Bt,V),R[1]))),-E[2])),m(h(m(h(u(P,st),M[1]),m(h(u(qt,k),-E[1]),h(u(N,O),R[1]))),T[2]),h(m(h(u(rt,lt),M[1]),m(h(u(Bt,V),-E[1]),h(u(N,O),T[1]))),-R[2]))),-A[3]),h(m(m(h(m(h(u(Ft,ot),E[1]),m(h(u(Ut,vt),-T[1]),h(u(rt,lt),A[1]))),M[2]),h(m(h(u(Ft,ot),M[1]),m(h(u(Pt,$),-T[1]),h(u(Bt,V),A[1]))),-E[2])),m(h(m(h(u(Ut,vt),M[1]),m(h(u(Pt,$),-E[1]),h(u(N,O),A[1]))),T[2]),h(m(h(u(rt,lt),M[1]),m(h(u(Bt,V),-E[1]),h(u(N,O),T[1]))),-A[2]))),R[3])),m(h(m(m(h(m(h(u(K,H),E[1]),m(h(u(P,st),-A[1]),h(u(Ut,vt),R[1]))),S[2]),h(m(h(u(K,H),S[1]),m(h(u(B,Mt),-A[1]),h(u(Tt,Et),R[1]))),-E[2])),m(h(m(h(u(P,st),S[1]),m(h(u(B,Mt),-E[1]),h(u(Q,ct),R[1]))),A[2]),h(m(h(u(Ut,vt),S[1]),m(h(u(Tt,Et),-E[1]),h(u(Q,ct),A[1]))),-R[2]))),M[3]),h(m(m(h(m(h(u(K,H),E[1]),m(h(u(P,st),-A[1]),h(u(Ut,vt),R[1]))),M[2]),h(m(h(u(K,H),M[1]),m(h(u(qt,k),-A[1]),h(u(Pt,$),R[1]))),-E[2])),m(h(m(h(u(P,st),M[1]),m(h(u(qt,k),-E[1]),h(u(N,O),R[1]))),A[2]),h(m(h(u(Ut,vt),M[1]),m(h(u(Pt,$),-E[1]),h(u(N,O),A[1]))),-R[2]))),-S[3])))),m(m(m(h(m(m(h(m(h(u(K,H),S[1]),m(h(u(B,Mt),-A[1]),h(u(Tt,Et),R[1]))),M[2]),h(m(h(u(K,H),M[1]),m(h(u(qt,k),-A[1]),h(u(Pt,$),R[1]))),-S[2])),m(h(m(h(u(B,Mt),M[1]),m(h(u(qt,k),-S[1]),h(u(q,F),R[1]))),A[2]),h(m(h(u(Tt,Et),M[1]),m(h(u(Pt,$),-S[1]),h(u(q,F),A[1]))),-R[2]))),E[3]),h(m(m(h(m(h(u(P,st),S[1]),m(h(u(B,Mt),-E[1]),h(u(Q,ct),R[1]))),M[2]),h(m(h(u(P,st),M[1]),m(h(u(qt,k),-E[1]),h(u(N,O),R[1]))),-S[2])),m(h(m(h(u(B,Mt),M[1]),m(h(u(qt,k),-S[1]),h(u(q,F),R[1]))),E[2]),h(m(h(u(Q,ct),M[1]),m(h(u(N,O),-S[1]),h(u(q,F),E[1]))),-R[2]))),-A[3])),m(h(m(m(h(m(h(u(Ut,vt),S[1]),m(h(u(Tt,Et),-E[1]),h(u(Q,ct),A[1]))),M[2]),h(m(h(u(Ut,vt),M[1]),m(h(u(Pt,$),-E[1]),h(u(N,O),A[1]))),-S[2])),m(h(m(h(u(Tt,Et),M[1]),m(h(u(Pt,$),-S[1]),h(u(q,F),A[1]))),E[2]),h(m(h(u(Q,ct),M[1]),m(h(u(N,O),-S[1]),h(u(q,F),E[1]))),-A[2]))),R[3]),h(m(m(h(m(h(u(Ft,ot),E[1]),m(h(u(Ut,vt),-T[1]),h(u(rt,lt),A[1]))),S[2]),h(m(h(u(Ft,ot),S[1]),m(h(u(Tt,Et),-T[1]),h(u(j,ut),A[1]))),-E[2])),m(h(m(h(u(Ut,vt),S[1]),m(h(u(Tt,Et),-E[1]),h(u(Q,ct),A[1]))),T[2]),h(m(h(u(rt,lt),S[1]),m(h(u(j,ut),-E[1]),h(u(Q,ct),T[1]))),-A[2]))),M[3]))),m(m(h(m(m(h(m(h(u(Ft,ot),E[1]),m(h(u(Ut,vt),-T[1]),h(u(rt,lt),A[1]))),M[2]),h(m(h(u(Ft,ot),M[1]),m(h(u(Pt,$),-T[1]),h(u(Bt,V),A[1]))),-E[2])),m(h(m(h(u(Ut,vt),M[1]),m(h(u(Pt,$),-E[1]),h(u(N,O),A[1]))),T[2]),h(m(h(u(rt,lt),M[1]),m(h(u(Bt,V),-E[1]),h(u(N,O),T[1]))),-A[2]))),-S[3]),h(m(m(h(m(h(u(Ft,ot),S[1]),m(h(u(Tt,Et),-T[1]),h(u(j,ut),A[1]))),M[2]),h(m(h(u(Ft,ot),M[1]),m(h(u(Pt,$),-T[1]),h(u(Bt,V),A[1]))),-S[2])),m(h(m(h(u(Tt,Et),M[1]),m(h(u(Pt,$),-S[1]),h(u(q,F),A[1]))),T[2]),h(m(h(u(j,ut),M[1]),m(h(u(Bt,V),-S[1]),h(u(q,F),T[1]))),-A[2]))),E[3])),m(h(m(m(h(m(h(u(Ut,vt),S[1]),m(h(u(Tt,Et),-E[1]),h(u(Q,ct),A[1]))),M[2]),h(m(h(u(Ut,vt),M[1]),m(h(u(Pt,$),-E[1]),h(u(N,O),A[1]))),-S[2])),m(h(m(h(u(Tt,Et),M[1]),m(h(u(Pt,$),-S[1]),h(u(q,F),A[1]))),E[2]),h(m(h(u(Q,ct),M[1]),m(h(u(N,O),-S[1]),h(u(q,F),E[1]))),-A[2]))),-T[3]),h(m(m(h(m(h(u(rt,lt),S[1]),m(h(u(j,ut),-E[1]),h(u(Q,ct),T[1]))),M[2]),h(m(h(u(rt,lt),M[1]),m(h(u(Bt,V),-E[1]),h(u(N,O),T[1]))),-S[2])),m(h(m(h(u(j,ut),M[1]),m(h(u(Bt,V),-S[1]),h(u(q,F),T[1]))),E[2]),h(m(h(u(Q,ct),M[1]),m(h(u(N,O),-S[1]),h(u(q,F),E[1]))),-T[2]))),A[3]))))),At=u(it,St);return At[At.length-1]}return C}var b=[l,c,f];function _(m){var u=b[m.length];return u||(u=b[m.length]=a(m.length)),u.apply(void 0,m)}function y(m,u,v,h,C,M,S,E){function T(A,R,L,F,O,V){switch(arguments.length){case 0:case 1:return 0;case 2:return h(A,R);case 3:return C(A,R,L);case 4:return M(A,R,L,F);case 5:return S(A,R,L,F,O);case 6:return E(A,R,L,F,O,V)}for(var $=new Array(arguments.length),k=0;k<arguments.length;++k)$[k]=arguments[k];return m($)}return T}function w(){for(;b.length<=o;)b.push(a(b.length));t.exports=y.apply(void 0,[_].concat(b));for(var m=0;m<=o;++m)t.exports[m]=b[m]}w()}}),Sw=oi({"node_modules/cdt2d/lib/delaunay.js"(i,t){"use strict";var e=Mw()[4],n=Gh();t.exports=s;function r(o,a,l,c,f,p){var d=a.opposite(c,f);if(!(d<0)){if(f<c){var g=c;c=f,f=g,g=p,p=d,d=g}a.isConstraint(c,f)||e(o[c],o[f],o[p],o[d])<0&&l.push(c,f)}}function s(o,a){for(var l=[],c=o.length,f=a.stars,p=0;p<c;++p)for(var d=f[p],g=1;g<d.length;g+=2){var x=d[g];if(!(x<p)&&!a.isConstraint(p,x)){for(var b=d[g-1],_=-1,y=1;y<d.length;y+=2)if(d[y-1]===x){_=d[y];break}_<0||e(o[p],o[x],o[b],o[_])<0&&l.push(p,x)}}for(;l.length>0;){for(var x=l.pop(),p=l.pop(),b=-1,_=-1,d=f[p],w=1;w<d.length;w+=2){var m=d[w-1],u=d[w];m===x?_=u:u===x&&(b=m)}b<0||_<0||e(o[p],o[x],o[b],o[_])>=0||(a.flip(p,x),r(o,a,l,b,p,_),r(o,a,l,p,_,b),r(o,a,l,_,x,b),r(o,a,l,x,b,_))}}}}),bw=oi({"node_modules/cdt2d/lib/filter.js"(i,t){"use strict";var e=Gh();t.exports=l;function n(c,f,p,d,g,x,b){this.cells=c,this.neighbor=f,this.flags=d,this.constraint=p,this.active=g,this.next=x,this.boundary=b}var r=n.prototype;function s(c,f){return c[0]-f[0]||c[1]-f[1]||c[2]-f[2]}r.locate=(function(){var c=[0,0,0];return function(f,p,d){var g=f,x=p,b=d;return p<d?p<f&&(g=p,x=d,b=f):d<f&&(g=d,x=f,b=p),g<0?-1:(c[0]=g,c[1]=x,c[2]=b,e.eq(this.cells,c,s))}})();function o(c,f){for(var p=c.cells(),d=p.length,g=0;g<d;++g){var x=p[g],b=x[0],_=x[1],y=x[2];_<y?_<b&&(x[0]=_,x[1]=y,x[2]=b):y<b&&(x[0]=y,x[1]=b,x[2]=_)}p.sort(s);for(var w=new Array(d),g=0;g<w.length;++g)w[g]=0;var m=[],u=[],v=new Array(3*d),h=new Array(3*d),C=null;f&&(C=[]);for(var M=new n(p,v,h,w,m,u,C),g=0;g<d;++g)for(var x=p[g],S=0;S<3;++S){var b=x[S],_=x[(S+1)%3],E=v[3*g+S]=M.locate(_,b,c.opposite(_,b)),T=h[3*g+S]=c.isConstraint(b,_);E<0&&(T?u.push(g):(m.push(g),w[g]=1),f&&C.push([_,b,-1]))}return M}function a(c,f,p){for(var d=0,g=0;g<c.length;++g)f[g]===p&&(c[d++]=c[g]);return c.length=d,c}function l(c,f,p){var d=o(c,p);if(f===0)return p?d.cells.concat(d.boundary):d.cells;for(var g=1,x=d.active,b=d.next,_=d.flags,y=d.cells,w=d.constraint,m=d.neighbor;x.length>0||b.length>0;){for(;x.length>0;){var u=x.pop();if(_[u]!==-g){_[u]=g;for(var v=y[u],h=0;h<3;++h){var C=m[3*u+h];C>=0&&_[C]===0&&(w[3*u+h]?b.push(C):(x.push(C),_[C]=g))}}}var M=b;b=x,x=M,b.length=0,g=-g}var S=a(y,_,f);return p?S.concat(d.boundary):S}}}),ww=oi({"node_modules/cdt2d/cdt2d.js"(i,t){var e=vw(),n=yw(),r=Sw(),s=bw();t.exports=f;function o(p){return[Math.min(p[0],p[1]),Math.max(p[0],p[1])]}function a(p,d){return p[0]-d[0]||p[1]-d[1]}function l(p){return p.map(o).sort(a)}function c(p,d,g){return d in p?p[d]:g}function f(p,d,g){Array.isArray(d)?(g=g||{},d=d||[]):(g=d||{},d=[]);var x=!!c(g,"delaunay",!0),b=!!c(g,"interior",!0),_=!!c(g,"exterior",!0),y=!!c(g,"infinity",!1);if(!b&&!_||p.length===0)return[];var w=e(p,d);if(x||b!==_||y){for(var m=n(p.length,l(d)),u=0;u<w.length;++u){var v=w[u];m.addTriangle(v[0],v[1],v[2])}return x&&r(p,m),_?b?y?s(m,0,y):m.cells():s(m,1,y):s(m,-1)}else return w}}}),px=ww();var ai=class{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}};var mx=1e-16,Ew=1e-16,ws=new D,gx=new D,xx=new ai(()=>({param:0,index:0})),Tw=new ai(()=>new D);function Aw(i,t,e,n){xx.clear(),t.length=0,e.length=0;for(let c=0,f=i.length;c<f;c++){let p=i[c];l(p.start),l(p.end)}for(let c=0,f=i.length;c<f;c++){let p=i[c];for(let d=c+1;d<f;d++){let g=i[d];p.distanceSqToLine3(g,ws,gx)<mx*n&&l(gx)}}let r=[];for(let c=0,f=i.length;c<f;c++){r.length=0;let p=i[c];for(let d=0,g=t.length;d<g;d++){let x=t[d],b=p.closestPointToPointParameter(x,!0);if(p.at(b,ws),x.distanceToSquared(ws)<mx*n){let _=xx.getInstance();_.param=b,_.index=d,r.push(_)}}r.sort(a);for(let d=0,g=r.length-1;d<g;d++){let x=r[d].index,b=r[d+1].index;x!==b&&e.push([x,b])}}let s=new Set,o=0;for(let c=0,f=e.length;c<f;c++){let p=e[c],d=Math.min(p[0],p[1]),g=Math.max(p[0],p[1]),x=d+","+g;s.has(x)||(s.add(x),e[o++]=p)}e.length=o;function a(c,f){return c.param-f.param}function l(c){for(let f=0;f<t.length;f++){let p=t[f];if(c===p||c.distanceToSquared(p)<Ew*n)return f}return t.push(Tw.getInstance().copy(c)),t.length-1}}var Hl=class{constructor(){this.trianglePool=new ai(()=>new un),this.linePool=new ai(()=>new ze),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new D,this.projOrigin=new D,this.projU=new D,this.projV=new D,this.baseTri=new un,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();let{normal:s,baseTri:o,projU:a,projV:l,projOrigin:c,constrainedEdges:f,linePool:p,baseIndices:d}=this;t.getNormal(s),o.copy(t),o.update(),d[0]=e,d[1]=n,d[2]=r,f.length=0;let g=p.getInstance();g.start.copy(o.a),g.end.copy(o.b);let x=p.getInstance();x.start.copy(o.b),x.end.copy(o.c);let b=p.getInstance();b.start.copy(o.c),b.end.copy(o.a),f.push(g,x,b),c.copy(o.a),a.subVectors(o.b,o.a).normalize(),l.crossVectors(s,a).normalize()}addConstraintEdge(t){let{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){let{projOrigin:n,projU:r,projV:s}=this;return ws.subVectors(t,n),e.set(ws.dot(r),ws.dot(s),0)}_from2D(t,e,n){let{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){let{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:l}=this;t.length=0,e.clear();let c=[];for(let y=0,w=a.length;y<w;y++){let m=a[y],u=s.getInstance();this._to2D(m.start,u.start),this._to2D(m.end,u.end),c.push(u)}let f=0;for(let y=0;y<3;y++){let w=this._to2D(o.points[y],ws);f=Math.max(f,Math.abs(w.x),Math.abs(w.y))}let p=[],d=[];Aw(c,p,d,f);let g=[];for(let y=0,w=p.length;y<w;y++){let m=p[y];g.push([m.x,m.y])}let x=px(g,d,{exterior:!1}),b=new Map;for(let y=0,w=d.length;y<w;y++){let m=d[y];b.set(`${m[0]}_${m[1]}`,-1),b.set(`${m[1]}_${m[0]}`,-1)}let _=`${l[0]}_${l[1]}_${l[2]}_`;for(let y=0,w=x.length;y<w;y++){let m=x[y],[u,v,h]=m,C=e.getInstance();this._from2D(g[u][0],g[u][1],C.a),this._from2D(g[v][0],g[v][1],C.b),this._from2D(g[h][0],g[h][1],C.c),t.push(C);let M=[];n.push(M);let S=[];r.push(S);for(let E=0;E<3;E++){let T=m[E];S.push(T<3?l[T]:_+T);let A=m[(E+1)%3],R=`${T}_${A}`;if(b.has(R)){let L=b.get(R);L!==-1&&(M.push(L),n[L].push(y))}else{let L=`${A}_${T}`;b.set(L,y)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}};var Rw=1e-14,Rp=new D,_x=new D,vx=new D;function Bi(i,t=Rw){Rp.subVectors(i.b,i.a),_x.subVectors(i.c,i.a),vx.subVectors(i.b,i.c);let e=Rp.angleTo(_x),n=Rp.angleTo(vx),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}var Cp=1e-10,Gl=1e-10,yr=new ze,pn=new ze,Mr=new D,yx=new D,Mx=new D,Wh=new yn,Pp=new un,Wl=class{constructor(){this.trianglePool=new ai(()=>new He),this.triangles=[],this.normal=new D}initialize(t){this.reset();let{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){let a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(Mr).dot(r))>Cp)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");let l=n.getInstance();l.copy(a),e.push(l)}else{t.getNormal(r);let s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){let{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){let a=n[s];a.coplanarCount=0}let r=[t.a,t.b,t.c];for(let s=0;s<3;s++){let o=(s+1)%3,a=r[s],l=r[o];t.getNormal(yx).normalize(),Mr.subVectors(l,a).normalize(),Mx.crossVectors(yx,Mr),Wh.setFromNormalAndCoplanarPoint(Mx,a),this.splitByPlane(Wh,t)}}else t.getPlane(Wh),this.splitByPlane(Wh,t)}splitByPlane(t,e){let{triangles:n,trianglePool:r}=this;Pp.copy(e),Pp.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){let a=n[s];if(!Pp.intersectsTriangle(a,yr,!0))continue;let{a:l,b:c,c:f}=a,p=0,d=-1,g=!1,x=[],b=[],_=[l,c,f];for(let y=0;y<3;y++){let w=(y+1)%3;yr.start.copy(_[y]),yr.end.copy(_[w]);let m=t.distanceToPoint(yr.start),u=t.distanceToPoint(yr.end);if(Math.abs(m)<Gl&&Math.abs(u)<Gl){g=!0;break}if(m>0?x.push(y):b.push(y),Math.abs(m)<Gl)continue;let v=!!t.intersectLine(yr,Mr);!v&&Math.abs(u)<Gl&&(Mr.copy(yr.end),v=!0),v&&!(Mr.distanceTo(yr.start)<Cp)&&(Mr.distanceTo(yr.end)<Cp&&(d=y),p===0?pn.start.copy(Mr):pn.end.copy(Mr),p++)}if(!g&&p===2&&pn.distance()>Gl)if(d!==-1){d=(d+1)%3;let y=0;y===d&&(y=(y+1)%3);let w=y+1;w===d&&(w=(w+1)%3);let m=r.getInstance();m.a.copy(_[w]),m.b.copy(pn.end),m.c.copy(pn.start),Bi(m)||n.push(m),a.a.copy(_[y]),a.b.copy(pn.start),a.c.copy(pn.end),Bi(a)&&(n.splice(s,1),s--,o--)}else{let y=x.length>=2?b[0]:x[0];if(y===0){let h=pn.start;pn.start=pn.end,pn.end=h}let w=(y+1)%3,m=(y+2)%3,u=r.getInstance(),v=r.getInstance();_[w].distanceToSquared(pn.start)<_[m].distanceToSquared(pn.end)?(u.a.copy(_[w]),u.b.copy(pn.start),u.c.copy(pn.end),v.a.copy(_[w]),v.b.copy(_[m]),v.c.copy(pn.start)):(u.a.copy(_[m]),u.b.copy(pn.start),u.c.copy(pn.end),v.a.copy(_[w]),v.b.copy(_[m]),v.c.copy(pn.end)),a.a.copy(_[y]),a.b.copy(pn.end),a.c.copy(pn.start),Bi(u)||n.push(u),Bi(v)||n.push(v),Bi(a)&&(n.splice(s,1),s--,o--)}else p===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}};var Xl=class{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){let{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){let{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}};var Ip=1e-10,Cw=1e-15,Pw=1e-10,Iw=1e-10,Sx=new ze,jo=new ze,bx=new D,wx=new D,Ex=new D,Dp=new yn,Qo=new D,Xh=new D;function Ax(i,t){i.getNormal(Qo),t.getNormal(Xh);let e=Qo.dot(Xh);if(Math.abs(1-Math.abs(e))>=Pw)return!1;let n=Qo.dot(i.a),r=Qo.dot(t.a);return Math.abs(n-r)<Iw}function Tx(i,t,e,n){let r=0,s=1;i.delta(bx);let o=[t.a,t.b,t.c];for(let a=0;a<3;a++){let l=o[a],c=o[(a+1)%3];wx.subVectors(c,l),Ex.crossVectors(e,wx),Dp.setFromNormalAndCoplanarPoint(Ex,l);let f=Dp.distanceToPoint(i.start),p=Dp.normal.dot(bx);if(Math.abs(p)<Cw){if(f<-Ip)return null;continue}let d=-f/p;if(p>0?r=Math.max(r,d):s=Math.min(s,d),r>s+Ip)return null}return s-r<Ip?null:(i.at(r,n.start),i.at(s,n.end),n)}function Lp(i,t,e){let n=0;i.getNormal(Qo),t.getNormal(Xh);let r=[t.a,t.b,t.c];for(let o=0;o<3;o++){jo.start.copy(r[o]),jo.end.copy(r[(o+1)%3]);let a=Tx(jo,i,Qo,Sx);a!==null&&(n>=e.length&&e.push(new ze),e[n].copy(a),n++)}let s=[i.a,i.b,i.c];for(let o=0;o<3;o++){jo.start.copy(s[o]),jo.end.copy(s[(o+1)%3]);let a=Tx(jo,t,Xh,Sx);a!==null&&(n>=e.length&&e.push(new ze),e[n].copy(a),n++)}return n}var ta=new Di,Rx=new Wt,qh=new ze,Np=[],Yh=new ai(()=>new ze),ea=-1,na=1,ql=-2,Yl=2,ia=0,Es=1,$h=2,Zh=null;function Up(i){Zh=i}function Fp(i,t,e=null){i.getMidpoint(ta.origin),i.getNormal(ta.direction),e&&(ta.origin.applyMatrix4(e),ta.direction.transformDirection(e));let n=t.raycastFirst(ta,An);return!!(n&&ta.direction.dot(n.face.normal)>0)?ea:na}function Dx(i,t){let e=new Xl,n=new Xl;return Yh.clear(),Rx.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Rx,{intersectsTriangles(r,s,o,a){if(!Bi(r)&&!Bi(s)){let c=(Ax(r,s)?Lp(r,s,Np):0)>2;if(c||r.intersectsTriangle(s,qh,!0)){let p=i.geometry.boundsTree.resolveTriangleIndex(o),d=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(p,d,c),n.add(d,p,c),c){let g=Lp(r,s,Np);for(let x=0;x<g;x++){let b=Yh.getInstance().copy(Np[x]);e.addIntersectionEdge(p,b),n.addIntersectionEdge(d,b)}}else{let g=Yh.getInstance().copy(qh),x=Yh.getInstance().copy(qh);e.addIntersectionEdge(p,g),n.addIntersectionEdge(d,x)}Zh&&(Zh.addEdge(qh),Zh.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function Bp(i,t,e=!1){switch(i){case 0:if(t===na||t===Yl&&!e)return Es;break;case 1:if(e){if(t===ea)return ia}else if(t===na||t===ql)return Es;break;case 2:if(e){if(t===na||t===ql)return Es}else if(t===ea)return ia;break;case 4:if(t===ea)return ia;if(t===na)return Es;break;case 3:if(t===ea||t===Yl&&!e)return Es;break;case 5:if(!e&&(t===na||t===ql))return Es;break;case 6:if(!e&&(t===ea||t===Yl))return Es;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return $h}var Op=class{constructor(t){this.triangle=new He().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new He().copy(e)}getIntersectArray(){let t=[],{intersects:e}=this;for(let n in e)t.push(e[n]);return t}},Jh=class{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){let{data:s}=this;s[t]||(s[t]=new Op(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){let{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(let r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){let{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){let{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{let l=n[a].intersects;for(let c in l)r.has(c)||(r.add(c),s.push(l[c]))}};if(t!==null)o(t);else for(let a in n)o(a);return s}reset(){this.data={}}},Kh=class{constructor(){this.enabled=!1,this.triangleIntersectsA=new Jh,this.triangleIntersectsB=new Jh,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){let{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Up(this))}complete(){this.enabled&&Up(null)}};var li=new Wt,Ts=new Wt,Zn=new Wt,Qr=new ce,Oi=new He,As=new He,zi=new He,jr=new He,Rs=[],tr=[],jh=new Set,Lx=new D,Nx=new D,Ux=new ai(()=>new He),Fx=new D,Qh=[];function zx(i,t,e,n,r,s={}){let{useGroups:o=!0}=s,{aIntersections:a,bIntersections:l}=Dx(i,t),c=[],f=null,p;return p=o?0:-1,Ox(i,t,a,e,!1,r,p),Bx(i,t,a,e,!1,n,r,p),e.findIndex(g=>g!==6&&g!==5)!==-1&&(r.forEach(g=>g.clearIndexMap()),p=o?i.geometry.groups.length||1:-1,Ox(t,i,l,e,!0,r,p),Bx(t,i,l,e,!0,n,r,p)),r.forEach(g=>g.clearIndexMap()),Rs.length=0,{groups:c,materials:f}}function Bx(i,t,e,n,r,s,o,a=0){li.copy(t.matrixWorld).invert().multiply(i.matrixWorld),Ts.copy(li).invert(),r?Zn.copy(li):Zn.identity();let l=Zn.determinant()<0;Qr.getNormalMatrix(Zn).multiplyScalar(l?-1:1);let c=i.geometry.groupIndices,f=i.geometry.index,p=i.geometry.attributes.position,d=t.geometry.boundsTree,g=t.geometry.index,x=t.geometry.attributes.position,b=e.ids;for(let _=0,y=b.length;_<y;_++){let w=b[_],m=a===-1?0:c[w]+a,u=3*w,v=u+0,h=u+1,C=u+2;f&&(v=f.getX(v),h=f.getX(h),C=f.getX(C)),Oi.a.fromBufferAttribute(p,v),Oi.b.fromBufferAttribute(p,h),Oi.c.fromBufferAttribute(p,C),r&&(Oi.a.applyMatrix4(li),Oi.b.applyMatrix4(li),Oi.c.applyMatrix4(li)),s.reset(),s.initialize(Oi,v,h,C),Qh.length=0,Ux.clear(),Oi.getNormal(Nx);let M=e.coplanarSet.get(w);if(M)for(let A of M){let R=3*A,L=R+0,F=R+1,O=R+2;g&&(L=g.getX(L),F=g.getX(F),O=g.getX(O));let V=Ux.getInstance();V.a.fromBufferAttribute(x,L),V.b.fromBufferAttribute(x,F),V.c.fromBufferAttribute(x,O),r||(V.a.applyMatrix4(Ts),V.b.applyMatrix4(Ts),V.c.applyMatrix4(Ts)),Qh.push(V)}if(s.addConstraintEdge){let A=e.getIntersectionEdges(w);if(A)for(let R of A)s.addConstraintEdge(R);s.triangulate()}else{let R=e.intersectionSet.get(w);for(let L=0,F=R.length;L<F;L++){let O=R[L],V=M&&M.has(O),$=3*O,k=$+0,tt=$+1,q=$+2;g&&(k=g.getX(k),tt=g.getX(tt),q=g.getX(q)),As.a.fromBufferAttribute(x,k),As.b.fromBufferAttribute(x,tt),As.c.fromBufferAttribute(x,q),r||(As.a.applyMatrix4(Ts),As.b.applyMatrix4(Ts),As.c.applyMatrix4(Ts)),s.splitByTriangle(As,V)}}let{triangles:S,triangleIndices:E=[],triangleConnectivity:T=[]}=s;for(let A=0,R=o.length;A<R;A++)o[A].initInterpolatedAttributeData(i.geometry,Zn,Qr,v,h,C);jh.clear();for(let A=0,R=S.length;A<R;A++){if(jh.has(A))continue;let L=S[A],F=r?null:li,O=null;L.getMidpoint(Lx);for(let V=0,$=Qh.length;V<$;V++){let k=Qh[V];if(k.containsPoint(Lx)){k.getNormal(Fx),O=Nx.dot(Fx)>0?Yl:ql;break}}O===null&&(O=Fp(L,d,F)),Rs.length=0,tr.length=0;for(let V=0,$=n.length;V<$;V++){let k=Bp(n[V],O,r);k!==$h&&(Rs.push(k),tr.push(o[V]))}if(tr.length!==0){let V=[A];for(;V.length>0;){let $=V.pop();if(jh.has($))continue;jh.add($);let k=E[$],tt=null,q=null,ct=null;k&&(tt=k[0],q=k[1],ct=k[2]);let ut=S[$];Oi.getBarycoord(ut.a,jr.a),Oi.getBarycoord(ut.b,jr.b),Oi.getBarycoord(ut.c,jr.c);for(let Et=0,Mt=tr.length;Et<Mt;Et++){let kt=tr[Et],Q=Rs[Et]===ia,lt=l!==Q;kt.appendInterpolatedAttributeData(m,jr.a,tt,lt),lt?(kt.appendInterpolatedAttributeData(m,jr.c,ct,lt),kt.appendInterpolatedAttributeData(m,jr.b,q,lt)):(kt.appendInterpolatedAttributeData(m,jr.b,q,lt),kt.appendInterpolatedAttributeData(m,jr.c,ct,lt))}}}}}return b.length}function Ox(i,t,e,n,r,s,o=0){li.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?Zn.copy(li):Zn.identity();let a=Zn.determinant()<0;Qr.getNormalMatrix(Zn).multiplyScalar(a?-1:1);let l=t.geometry.boundsTree,c=i.geometry.groupIndices,f=i.geometry.index,d=i.geometry.attributes.position,g=[],x=i.geometry.halfEdges,b=new Set(e.ids),_=Jo(i.geometry);for(let y=0;y<_&&b.size!==_;y++){if(b.has(y))continue;b.add(y),g.push(y);let w=3*y,m=w+0,u=w+1,v=w+2;f&&(m=f.getX(m),u=f.getX(u),v=f.getX(v)),zi.a.fromBufferAttribute(d,m),zi.b.fromBufferAttribute(d,u),zi.c.fromBufferAttribute(d,v),r&&(zi.a.applyMatrix4(li),zi.b.applyMatrix4(li),zi.c.applyMatrix4(li));let h=Fp(zi,l,r?null:li);Rs.length=0,tr.length=0;for(let C=0,M=n.length;C<M;C++){let S=Bp(n[C],h,r);S!==$h&&(Rs.push(S),tr.push(s[C]))}for(;g.length>0;){let C=g.pop();for(let M=0;M<3;M++){let S=x.getSiblingTriangleIndex(C,M);S!==-1&&!b.has(S)&&(g.push(S),b.add(S))}if(tr.length!==0){let M=3*C,S=M+0,E=M+1,T=M+2;f&&(S=f.getX(S),E=f.getX(E),T=f.getX(T));let A=o===-1?0:c[C]+o;if(zi.a.fromBufferAttribute(d,S),zi.b.fromBufferAttribute(d,E),zi.c.fromBufferAttribute(d,T),!Bi(zi))for(let R=0,L=tr.length;R<L;R++){let F=tr[R],$=Rs[R]===ia!==a;F.appendIndexFromGeometry(i.geometry,Zn,Qr,A,S,$),$?(F.appendIndexFromGeometry(i.geometry,Zn,Qr,A,T,$),F.appendIndexFromGeometry(i.geometry,Zn,Qr,A,E,$)):(F.appendIndexFromGeometry(i.geometry,Zn,Qr,A,E,$),F.appendIndexFromGeometry(i.geometry,Zn,Qr,A,T,$))}}}}}function Nw(i){return i=~~i,i+4-i%4}var tf=class{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");let e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;let e=this.type,n=Vh()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(Nw(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){let{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}};var $n=new D,zp=new D,Vp=new D,kp=new D,ef=new _e,Uw=new _e,Fw=new _e,Bw=new _e;function Ow(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function Vx(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}var Zl=class extends tf{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}},nf=class{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();let{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){let a=e[s],l=r[a],c=l.array.constructor;n[a]||(n[a]=new Zl(c)),n[a].setType(c),n[a].itemSize=l.itemSize,n[a].normalized=l.normalized}for(let s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){let{attributeData:a,interpolatedFields:l}=this,{attributes:c}=t;for(let f in a){let p=c[f];if(!p)throw new Error(`CSG Operations: Attribute ${f} not available on geometry.`);let d,g,x;if(f==="position"?(d=zp.fromBufferAttribute(p,r).applyMatrix4(e),g=Vp.fromBufferAttribute(p,s).applyMatrix4(e),x=kp.fromBufferAttribute(p,o).applyMatrix4(e)):f==="normal"?(d=zp.fromBufferAttribute(p,r).applyNormalMatrix(n),g=Vp.fromBufferAttribute(p,s).applyNormalMatrix(n),x=kp.fromBufferAttribute(p,o).applyNormalMatrix(n)):f==="tangent"?(d=zp.fromBufferAttribute(p,r).transformDirection(e),g=Vp.fromBufferAttribute(p,s).transformDirection(e),x=kp.fromBufferAttribute(p,o).transformDirection(e)):(d=Uw.fromBufferAttribute(p,r),g=Fw.fromBufferAttribute(p,s),x=Bw.fromBufferAttribute(p,o)),!l[f])l[f]=[d.clone(),g.clone(),x.clone()];else{let b=l[f];b[0].copy(d),b[1].copy(g),b[2].copy(x)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){let{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:l,invertedIndexMap:c}=this;for(;s.length<=t;)s.push(new Zl(Uint32Array));let f=r?c:l,p=s[t];if(n!==null&&f.has(n))p.push(f.get(n));else{f.set(n,o.position.count),p.push(o.position.count);for(let d in a){let g=o[d],x=d==="normal"||d==="tangent",b=r&&x,_=g.itemSize,[y,w,m]=a[d];Ow(y,w,m,e,ef,x,b),Vx(ef,_,g)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){let{groupIndices:a,attributeData:l,forwardIndexMap:c,invertedIndexMap:f}=this;for(;a.length<=r;)a.push(new Zl(Uint32Array));let p=o?f:c,d=a[r];if(s!==null&&p.has(s))d.push(p.get(s));else{p.set(s,l.position.count),d.push(l.position.count);let{attributes:g}=t;for(let x in l){let b=l[x],_=g[x];if(!_)throw new Error(`CSG Operations: Attribute ${x} not available on geometry.`);let y=_.itemSize;x==="position"?($n.fromBufferAttribute(_,s).applyMatrix4(e),b.push($n.x,$n.y,$n.z)):x==="normal"?($n.fromBufferAttribute(_,s).applyNormalMatrix(n),o&&$n.multiplyScalar(-1),b.push($n.x,$n.y,$n.z)):x==="tangent"?($n.fromBufferAttribute(_,s).transformDirection(e),o&&$n.multiplyScalar(-1),b.push($n.x,$n.y,$n.z)):(ef.fromBufferAttribute(_,s),Vx(ef,y,b))}}}buildGeometry(t,e){let n=!1,{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(let f in s){let p=s[f],{type:d,itemSize:g,normalized:x,length:b,count:_}=p,y=p.array.buffer,w=o[f];(!w||w.count<_||w.array.type!==d)&&(w=new We(new d(b),g,x),t.setAttribute(f,w),n=!0),w.array.set(new d(y,0,b),0),w.needsUpdate=!0}let l=r.reduce((f,p)=>p.count+f,0);(!t.index||a.count<l||a.array.type!==Uint32Array)&&(t.setIndex(new We(new Uint32Array(l),1)),n=!0),t.clearGroups();let c=0;for(let f=0,p=Math.min(e.length,r.length);f<p;f++){let{index:d,materialIndex:g}=e[f],{count:x}=r[d],b=r[d].array.buffer;x!==0&&(t.index.array.set(new Uint32Array(b,0,x),c),t.addGroup(c,x,g),c+=x)}t.setDrawRange(0,c),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){let{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(let n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}};function kx(i,t){for(let e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function Hx(i,t){let e=[];for(let n=0,r=i.length;n<r;n++){let s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function Gx(i,t){let e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){let o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function Wx(i){for(let t=0;t<i.length-1;t++){let e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){let r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function Hp(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}var rf=class{get useCDTClipping(){return this.triangleSplitter instanceof Hl}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new Hl:new Wl)}constructor(){this.triangleSplitter=new Wl,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new Kh}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new bs){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();let{triangleSplitter:o,geometryBuilders:a,attributes:l,useGroups:c,consolidateGroups:f,removeUnusedMaterials:p,debug:d}=this;for(;a.length<r.length;)a.push(new nf);r.forEach((m,u)=>{a[u].initFromGeometry(t.geometry,l),kx(m.geometry,l)}),d.init(),zx(t,e,n,o,a,{useGroups:c}),d.complete();let g=this.getGroupRanges(t.geometry),x=Hp(g,t.material),b=this.getGroupRanges(e.geometry),_=Hp(b,e.material);b.forEach(m=>m.materialIndex+=x.length);let y=[...x,..._],w=[...g,...b].map((m,u)=>({...m,index:u}));return c?c&&f&&(w=Hx(w,y),w.sort((m,u)=>m.materialIndex-u.materialIndex)):w=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((m,u)=>{let v=m.geometry;a[u].buildGeometry(v,w),t.matrixWorld.decompose(m.position,m.quaternion,m.scale),m.updateMatrix(),m.matrixWorld.copy(t.matrixWorld),c?(m.material=y,f&&Wx(v.groups),p&&(m.material=Gx(v.groups,y))):m.material=y[0]}),s?r:r[0]}evaluateHierarchy(t,e=new bs){t.updateMatrixWorld(!0);let n=(s,o)=>{let a=s.children;for(let l=0,c=a.length;l<c;l++){let f=a[l];f.isOperationGroup?n(f,o):o(f)}},r=s=>{let o=s.children,a=!1;for(let c=0,f=o.length;c<f;c++){let p=o[c];a=r(p)||a}let l=s.isDirty();if(l&&s.markUpdated(),a&&!s.isOperationGroup){let c;return n(s,f=>{c?c=this.evaluate(c,f,f.operation):c=this.evaluate(s,f,f.operation)}),s._cachedGeometry=c.geometry,s._cachedMaterials=c.material,!0}else return a||l};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}};var $l=class extends pr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ir;t.deleteAttribute("uv");let e=new gi({side:cn}),n=new gi,r=new al(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new ae(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new ka(t,n,6),a=new Mn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ae(t,ra(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ae(t,ra(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let f=new ae(t,ra(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let p=new ae(t,ra(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let d=new ae(t,ra(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let g=new ae(t,ra(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ra(i){return new il({color:0,emissive:16777215,emissiveIntensity:i})}var sa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var qn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Vw=new Br(-1,1,1,-1,0,1),Gp=class extends Le{constructor(){super(),this.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Te([0,2,0,0,2,0],2))}},kw=new Gp,er=class{constructor(t){this._mesh=new ae(kw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Vw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var sf=class extends qn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Gn.clone(t.uniforms),this.material=new Oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new er(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Jl=class extends qn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},of=class extends qn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Kl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new _t);this._width=n.width,this._height=n.height,e=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sf(sa),this.copyPass.material.blending=dn,this.timer=new cl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Jl!==void 0&&(o instanceof Jl?n=!0:o instanceof of&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new _t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var oa=class extends qn{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qt}render(t,e,n){let r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}};var jl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _t},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Wt},cameraProjectionMatrixInverse:{value:new Wt},cameraWorldMatrix:{value:new Wt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},Ql={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},af={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Xx(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=Hw(t),n=e.length,r=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new D(Math.cos(l),Math.sin(l),0).normalize();r[o*4]=(c.x*.5+.5)*255,r[o*4+1]=(c.y*.5+.5)*255,r[o*4+2]=127,r[o*4+3]=255}let s=new mr(r,t,t);return s.wrapS=ti,s.wrapT=ti,s.needsUpdate=!0,s}function Hw(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),r=Math.floor(t/2),s=t-1;for(let o=1;o<=e;){if(r===-1&&s===t?(s=t-2,r=0):(s===t&&(s=0),r<0&&(r=t-1)),n[r*t+s]!==0){s-=2,r++;continue}else n[r*t+s]=o++;s++,r--}return n}var tc={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Wp(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new _t},cameraProjectionMatrixInverse:{value:new Wt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Wp(i,t,e){let n=Gw(i,t,e),r="vec3[SAMPLES](";for(let s=0;s<i;s++){let o=n[s];r+=`vec3(${o.x}, ${o.y}, ${o.z})${s<i-1?",":")"}`}return r}function Gw(i,t,e){let n=[];for(let r=0;r<i;r++){let s=2*Math.PI*t*r/i,o=Math.pow(r/(i-1),e);n.push(new D(Math.cos(s),Math.sin(s),o))}return n}var lf=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,r,s,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),f=(3-Math.sqrt(3))/6,p=(l+c)*f,d=l-p,g=c-p,x=t-d,b=e-g,_,y;x>b?(_=1,y=0):(_=0,y=1);let w=x-_+f,m=b-y+f,u=x-1+2*f,v=b-1+2*f,h=l&255,C=c&255,M=this.perm[h+this.perm[C]]%12,S=this.perm[h+_+this.perm[C+y]]%12,E=this.perm[h+1+this.perm[C+1]]%12,T=.5-x*x-b*b;T<0?n=0:(T*=T,n=T*T*this._dot(this.grad3[M],x,b));let A=.5-w*w-m*m;A<0?r=0:(A*=A,r=A*A*this._dot(this.grad3[S],w,m));let R=.5-u*u-v*v;return R<0?s=0:(R*=R,s=R*R*this._dot(this.grad3[E],u,v)),70*(n+r+s)}noise3d(t,e,n){let r,s,o,a,c=(t+e+n)*.3333333333333333,f=Math.floor(t+c),p=Math.floor(e+c),d=Math.floor(n+c),g=1/6,x=(f+p+d)*g,b=f-x,_=p-x,y=d-x,w=t-b,m=e-_,u=n-y,v,h,C,M,S,E;w>=m?m>=u?(v=1,h=0,C=0,M=1,S=1,E=0):w>=u?(v=1,h=0,C=0,M=1,S=0,E=1):(v=0,h=0,C=1,M=1,S=0,E=1):m<u?(v=0,h=0,C=1,M=0,S=1,E=1):w<u?(v=0,h=1,C=0,M=0,S=1,E=1):(v=0,h=1,C=0,M=1,S=1,E=0);let T=w-v+g,A=m-h+g,R=u-C+g,L=w-M+2*g,F=m-S+2*g,O=u-E+2*g,V=w-1+3*g,$=m-1+3*g,k=u-1+3*g,tt=f&255,q=p&255,ct=d&255,ut=this.perm[tt+this.perm[q+this.perm[ct]]]%12,Et=this.perm[tt+v+this.perm[q+h+this.perm[ct+C]]]%12,Mt=this.perm[tt+M+this.perm[q+S+this.perm[ct+E]]]%12,kt=this.perm[tt+1+this.perm[q+1+this.perm[ct+1]]]%12,N=.6-w*w-m*m-u*u;N<0?r=0:(N*=N,r=N*N*this._dot3(this.grad3[ut],w,m,u));let Q=.6-T*T-A*A-R*R;Q<0?s=0:(Q*=Q,s=Q*Q*this._dot3(this.grad3[Et],T,A,R));let lt=.6-L*L-F*F-O*O;lt<0?o=0:(lt*=lt,o=lt*lt*this._dot3(this.grad3[Mt],L,F,O));let vt=.6-V*V-$*$-k*k;return vt<0?a=0:(vt*=vt,a=vt*vt*this._dot3(this.grad3[kt],V,$,k)),32*(r+s+o+a)}noise4d(t,e,n,r){let s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,f,p,d,g,x,b=(t+e+n+r)*l,_=Math.floor(t+b),y=Math.floor(e+b),w=Math.floor(n+b),m=Math.floor(r+b),u=(_+y+w+m)*c,v=_-u,h=y-u,C=w-u,M=m-u,S=t-v,E=e-h,T=n-C,A=r-M,R=S>E?32:0,L=S>T?16:0,F=E>T?8:0,O=S>A?4:0,V=E>A?2:0,$=T>A?1:0,k=R+L+F+O+V+$,tt=o[k][0]>=3?1:0,q=o[k][1]>=3?1:0,ct=o[k][2]>=3?1:0,ut=o[k][3]>=3?1:0,Et=o[k][0]>=2?1:0,Mt=o[k][1]>=2?1:0,kt=o[k][2]>=2?1:0,N=o[k][3]>=2?1:0,Q=o[k][0]>=1?1:0,lt=o[k][1]>=1?1:0,vt=o[k][2]>=1?1:0,st=o[k][3]>=1?1:0,dt=S-tt+c,Bt=E-q+c,j=T-ct+c,rt=A-ut+c,ot=S-Et+2*c,ht=E-Mt+2*c,bt=T-kt+2*c,Pt=A-N+2*c,Tt=S-Q+3*c,Ut=E-lt+3*c,Ft=T-vt+3*c,H=A-st+3*c,de=S-1+4*c,qt=E-1+4*c,B=T-1+4*c,P=A-1+4*c,X=_&255,K=y&255,it=w&255,St=m&255,At=a[X+a[K+a[it+a[St]]]]%32,at=a[X+tt+a[K+q+a[it+ct+a[St+ut]]]]%32,pt=a[X+Et+a[K+Mt+a[it+kt+a[St+N]]]]%32,Dt=a[X+Q+a[K+lt+a[it+vt+a[St+st]]]]%32,$t=a[X+1+a[K+1+a[it+1+a[St+1]]]]%32,Ct=.6-S*S-E*E-T*T-A*A;Ct<0?f=0:(Ct*=Ct,f=Ct*Ct*this._dot4(s[At],S,E,T,A));let Rt=.6-dt*dt-Bt*Bt-j*j-rt*rt;Rt<0?p=0:(Rt*=Rt,p=Rt*Rt*this._dot4(s[at],dt,Bt,j,rt));let Zt=.6-ot*ot-ht*ht-bt*bt-Pt*Pt;Zt<0?d=0:(Zt*=Zt,d=Zt*Zt*this._dot4(s[pt],ot,ht,bt,Pt));let te=.6-Tt*Tt-Ut*Ut-Ft*Ft-H*H;te<0?g=0:(te*=te,g=te*te*this._dot4(s[Dt],Tt,Ut,Ft,H));let re=.6-de*de-qt*qt-B*B-P*P;return re<0?x=0:(re*=re,x=re*re*this._dot4(s[$t],de,qt,B,P)),27*(f+p+d+g+x)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,r){return t[0]*e+t[1]*n+t[2]*r}_dot4(t,e,n,r,s){return t[0]*e+t[1]*n+t[2]*r+t[3]*s}};var ec=class i extends qn{constructor(t,e,n=512,r=512,s,o,a){super(),this.width=n,this.height=r,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Xx(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new en(this.width,this.height,{type:Sn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Oe({defines:Object.assign({},jl.defines),uniforms:Gn.clone(jl.uniforms),vertexShader:jl.vertexShader,fragmentShader:jl.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new nl,this.normalMaterial.blending=dn,this.pdMaterial=new Oe({defines:Object.assign({},tc.defines),uniforms:Gn.clone(tc.uniforms),vertexShader:tc.vertexShader,fragmentShader:tc.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Oe({defines:Object.assign({},Ql.defines),uniforms:Gn.clone(Ql.uniforms),vertexShader:Ql.vertexShader,fragmentShader:Ql.fragmentShader,blending:dn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Oe({uniforms:Gn.clone(sa.uniforms),vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:fl,blendDst:ms,blendEquation:xi,blendSrcAlpha:hl,blendDstAlpha:ms,blendEquationAlpha:xi}),this.blendMaterial=new Oe({uniforms:Gn.clone(af.uniforms),vertexShader:af.vertexShader,fragmentShader:af.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Su,blendSrc:fl,blendDst:ms,blendEquation:xi,blendSrcAlpha:hl,blendDstAlpha:ms,blendEquationAlpha:xi}),this._fsQuad=new er(null),this._originalClearColor=new Qt,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Ki,this.depthTexture.format=ji,this.depthTexture.type=Xr,this.normalRenderTarget=new en(this.width,this.height,{minFilter:fn,magFilter:fn,type:Sn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Wp(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=dn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=dn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=dn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=dn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,r,s){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,r!=null&&(t.setClearColor(r),t.setClearAlpha(s||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,r,s){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,r=e.clearColor||r,s=e.clearAlpha||s,r!=null&&(t.setClearColor(r),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new lf,n=t*t*4,r=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;r[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,r[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,r[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,r[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let s=new mr(r,t,t,Yn,xn);return s.wrapS=ti,s.wrapT=ti,s.needsUpdate=!0,s}};ec.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var nc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ic=class extends qn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Gn.clone(nc.uniforms),this.material=new Eo({name:nc.name,uniforms:this.uniforms,vertexShader:nc.vertexShader,fragmentShader:nc.fragmentShader}),this._fsQuad=new er(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===Pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===xl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var qx=new Me,cf=new D,aa=class extends ll{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Te(t,3)),this.setAttribute("uv",new Te(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new zr(e,6,1);return this.setAttribute("instanceStart",new ei(n,3,0)),this.setAttribute("instanceEnd",new ei(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new zr(e,6,1);return this.setAttribute("instanceColorStart",new ei(n,3,0)),this.setAttribute("instanceColorEnd",new ei(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new el(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Me);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),qx.setFromBufferAttribute(e),this.boundingBox.union(qx))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)cf.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(cf)),cf.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(cf));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Nt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new _t},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Wn.line={uniforms:Gn.merge([Nt.common,Nt.fog,Nt.line]),vertexShader:`
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
		`};var la=class extends Oe{constructor(t){super({type:"LineMaterial",uniforms:Gn.clone(Wn.line.uniforms),vertexShader:Wn.line.vertexShader,fragmentShader:Wn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Xp=new _e,Yx=new D,Zx=new D,Pn=new _e,In=new _e,nr=new _e,qp=new D,Yp=new Wt,Dn=new ze,$x=new D,uf=new Me,hf=new fi,ir=new _e,rr,Cs;function Jx(i,t,e){return ir.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ir.multiplyScalar(1/ir.w),ir.x=Cs/e.width,ir.y=Cs/e.height,ir.applyMatrix4(i.projectionMatrixInverse),ir.multiplyScalar(1/ir.w),Math.abs(Math.max(ir.x,ir.y))}function Ww(i,t){let e=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,r.count);for(let a=0,l=o;a<l;a++){Dn.start.fromBufferAttribute(r,a),Dn.end.fromBufferAttribute(s,a),Dn.applyMatrix4(e);let c=new D,f=new D;rr.distanceSqToSegment(Dn.start,Dn.end,f,c),f.distanceTo(c)<Cs*.5&&t.push({point:f,pointOnLine:c,distance:rr.origin.distanceTo(f),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function Xw(i,t,e){let n=t.projectionMatrix,s=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,f=Math.min(a.instanceCount,l.count),p=-t.near;rr.at(1,nr),nr.w=1,nr.applyMatrix4(t.matrixWorldInverse),nr.applyMatrix4(n),nr.multiplyScalar(1/nr.w),nr.x*=s.x/2,nr.y*=s.y/2,nr.z=0,qp.copy(nr),Yp.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,g=f;d<g;d++){if(Pn.fromBufferAttribute(l,d),In.fromBufferAttribute(c,d),Pn.w=1,In.w=1,Pn.applyMatrix4(Yp),In.applyMatrix4(Yp),Pn.z>p&&In.z>p)continue;if(Pn.z>p){let m=Pn.z-In.z,u=(Pn.z-p)/m;Pn.lerp(In,u)}else if(In.z>p){let m=In.z-Pn.z,u=(In.z-p)/m;In.lerp(Pn,u)}Pn.applyMatrix4(n),In.applyMatrix4(n),Pn.multiplyScalar(1/Pn.w),In.multiplyScalar(1/In.w),Pn.x*=s.x/2,Pn.y*=s.y/2,In.x*=s.x/2,In.y*=s.y/2,Dn.start.copy(Pn),Dn.start.z=0,Dn.end.copy(In),Dn.end.z=0;let b=Dn.closestPointToPointParameter(qp,!0);Dn.at(b,$x);let _=Ed.lerp(Pn.z,In.z,b),y=_>=-1&&_<=1,w=qp.distanceTo($x)<Cs*.5;if(y&&w){Dn.start.fromBufferAttribute(l,d),Dn.end.fromBufferAttribute(c,d),Dn.start.applyMatrix4(o),Dn.end.applyMatrix4(o);let m=new D,u=new D;rr.distanceSqToSegment(Dn.start,Dn.end,u,m),e.push({point:u,pointOnLine:m,distance:rr.origin.distanceTo(u),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var ff=class extends ae{constructor(t=new aa,e=new la({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)Yx.fromBufferAttribute(e,o),Zx.fromBufferAttribute(n,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Yx.distanceTo(Zx);let s=new zr(r,2,1);return t.setAttribute("instanceDistanceStart",new ei(s,1,0)),t.setAttribute("instanceDistanceEnd",new ei(s,1,1)),this}raycast(t,e){let n=this.material.worldUnits,r=t.camera;if(r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;rr=t.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Cs=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),hf.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Cs*.5;else{let p=Math.max(r.near,hf.distanceToPoint(rr.origin));c=Jx(r,p,l.resolution)}if(hf.radius+=c,rr.intersectsSphere(hf)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),uf.copy(a.boundingBox).applyMatrix4(o);let f;if(n)f=Cs*.5;else{let p=Math.max(r.near,uf.distanceToPoint(rr.origin));f=Jx(r,p,l.resolution)}uf.expandByScalar(f),rr.intersectsBox(uf)!==!1&&(n?Ww(this,e):Xw(this,r,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Xp),this.material.uniforms.resolution.value.set(Xp.z,Xp.w))}};var rn=Math.PI/180,Qe=(i,t)=>typeof i=="number"&&isFinite(i)?i:t,Ze=(i,t,e)=>Math.max(t,Math.min(e,i));function s_(i,t,e){let n=1/0,r=-1/0,s=1/0,o=-1/0;for(let[a,l]of i)n=Math.min(n,a),r=Math.max(r,a),s=Math.min(s,l),o=Math.max(o,l);return i.map(([a,l])=>[-t+(a-n)/(r-n)*2*t,-e+(l-s)/(o-s)*2*e])}function em(i,t,e){i=Ze(Math.round(Qe(i,5)),3,12);let n=[];for(let r=0;r<2*i;r++){let s=Math.PI/2+r*Math.PI/i,o=r%2?.5:1;n.push([o*Math.cos(s),o*Math.sin(s)])}return s_(n,t,e)}function nm(i,t){let e=[];for(let n=0;n<60;n++){let r=n*6*rn,s=Math.sin(r);e.push([16*s*s*s,13*Math.cos(r)-5*Math.cos(2*r)-2*Math.cos(3*r)-Math.cos(4*r)])}return s_(e,i,t)}var im=(i,t)=>[[i,0],[i/2,t],[-i/2,t],[-i,0],[-i/2,-t],[i/2,-t]],ci=(i,t,e)=>{let n=[];for(let r=0;r<e;r++){let s=r/e*Math.PI*2;n.push([i*Math.cos(s),t*Math.sin(s)])}return n},qw=i=>{let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t},oc=i=>qw(i)<0?i.slice().reverse():i,Jn=class{constructor(){this.p=[],this.n=[]}tri(t,e,n,r,s,o){if(this.p.push(t[0],t[1],t[2],e[0],e[1],e[2],n[0],n[1],n[2]),!r){let a=e[0]-t[0],l=e[1]-t[1],c=e[2]-t[2],f=n[0]-t[0],p=n[1]-t[1],d=n[2]-t[2],g=l*d-c*p,x=c*f-a*d,b=a*p-l*f,_=Math.hypot(g,x,b)||1;r=s=o=[g/_,x/_,b/_]}this.n.push(r[0],r[1],r[2],s[0],s[1],s[2],o[0],o[1],o[2])}quad(t,e,n,r,s,o,a,l){this.tri(t,e,n,s,o,a),this.tri(t,n,r,s,a,l)}geo(){let t=new Le;return t.setAttribute("position",new Te(this.p,3)),t.setAttribute("normal",new Te(this.n,3)),t}},ki=i=>{let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]};function xf(i,t,e,n,r){for(let[s,o,a]of r){let l=[t[s][0],t[s][1],e],c=[t[o][0],t[o][1],e],f=[t[a][0],t[a][1],e],p=[0,0,n?1:-1];n?i.tri(l,c,f,p,p,p):i.tri(l,f,c,p,p,p)}}var Yw=i=>Ii.triangulateShape(i.map(([t,e])=>new _t(t,e)),[]);function rm(i,t=32){let e=i.length,n=[];for(let o=0;o<e;o++){let[a,l]=i[o],[c,f]=i[(o+1)%e],p=Math.hypot(c-a,f-l)||1;n.push([(f-l)/p,-(c-a)/p])}let r=Math.cos(t*rn),s=[];for(let o=0;o<e;o++){let a=n[(o+e-1)%e],l=n[o],c=n[(o+1)%e],f=a[0]*l[0]+a[1]*l[1]>r?ki([a[0]+l[0],a[1]+l[1],0]):[l[0],l[1],0],p=c[0]*l[0]+c[1]*l[1]>r?ki([c[0]+l[0],c[1]+l[1],0]):[l[0],l[1],0];s.push([f,p])}return s}function sc(i,t,e=!0){i=oc(i);let n=new Jn,r=Yw(i),s=i.length,o=rm(i,e?32:0);xf(n,i,-t,!1,r),xf(n,i,t,!0,r);for(let a=0;a<s;a++){let[l,c]=i[a],[f,p]=i[(a+1)%s],[d,g]=o[a];n.quad([l,c,-t],[f,p,-t],[f,p,t],[l,c,t],d,g,g,d)}return n.geo()}function Zw(i,t,e,n,r){let s=new Jn,o=ci(i,t,r),a=[];for(let f=1;f<r-1;f++)a.push([0,f,f+1]);xf(s,o,-e,!1,a),n>1e-4&&xf(s,o.map(([f,p])=>[f*n,p*n]),e,!0,a);let l=(1-n)/(2*e),c=f=>ki([Math.cos(f)/i,Math.sin(f)/t,l]);for(let f=0;f<r;f++){let p=f/r*Math.PI*2,d=(f+1)/r*Math.PI*2,[g,x]=o[f],[b,_]=o[(f+1)%r],y=c(p),w=c(d);n>1e-4?s.quad([g,x,-e],[b,_,-e],[b*n,_*n,e],[g*n,x*n,e],y,w,w,y):s.tri([g,x,-e],[b,_,-e],[0,0,e],y,w,c((p+d)/2))}return s.geo()}function $w(i,t,e){let n=new Jn,r=[[i,-t],[i,t],[-i,t],[-i,-t]].map(([o,a])=>[o,a,-e]),s=[0,0,e];n.tri(r[0],r[2],r[1]),n.tri(r[0],r[3],r[2]);for(let o=0;o<4;o++)n.tri(r[(o+3)%4],r[o],s);return n.geo()}function Jw(i,t,e){let n=new Jn,r=(s,o,a)=>[s*i,o*t,a*e];return n.quad(r(-1,-1,-1),r(-1,1,-1),r(1,1,-1),r(1,-1,-1)),n.quad(r(-1,-1,1),r(1,-1,1),r(1,1,1),r(-1,1,1)),n.quad(r(-1,-1,-1),r(1,-1,-1),r(1,-1,1),r(-1,-1,1)),n.quad(r(1,1,-1),r(-1,1,-1),r(-1,1,1),r(1,1,1)),n.quad(r(1,-1,-1),r(1,1,-1),r(1,1,1),r(1,-1,1)),n.quad(r(-1,1,-1),r(-1,-1,-1),r(-1,-1,1),r(-1,1,1)),n.geo()}function Kw(i,t,e){let n=new Jn,r=[-i,-t,-e],s=[i,-t,-e],o=[-i,-t,e],a=[-i,t,-e],l=[i,t,-e],c=[-i,t,e];return n.quad(r,a,l,s),n.quad(a,r,o,c),n.quad(s,l,c,o),n.tri(r,s,o),n.tri(a,c,l),n.geo()}function jw(i,t,e,n){let r=new Jn,s=Math.max(8,n>>1),o=(a,l)=>{let c=a/n*Math.PI*2,f=-Math.PI/2+l/s*Math.PI,p=Math.cos(f),d=Math.sin(f);return[[i*p*Math.cos(c),t*p*Math.sin(c),e*d],ki([p*Math.cos(c)/i,p*Math.sin(c)/t,d/e])]};for(let a=0;a<s;a++)for(let l=0;l<n;l++){let[c,f]=o(l,a),[p,d]=o(l+1,a),[g,x]=o(l+1,a+1),[b,_]=o(l,a+1);a===0?r.tri([0,0,-e],g,b,[0,0,-1],x,_):a===s-1?r.tri(c,p,[0,0,e],f,d,[0,0,1]):r.quad(c,p,g,b,f,d,x,_)}return r.geo()}function Qw(i,t,e,n,r,s,o){let a=Math.min(.995,s/Math.min(n,r)),l=1-a,c=Math.max(12,Math.round(o*.4)),f=new Jn,p=(d,g)=>{let x=d/o*Math.PI*2,b=g/c*Math.PI*2,_=l+a*Math.cos(b),y=Math.cos(x),w=Math.sin(x);return[[i*_*y,t*_*w,e*Math.sin(b)],ki([Math.cos(b)*y/(a*i),Math.cos(b)*w/(a*t),Math.sin(b)/e])]};for(let d=0;d<c;d++)for(let g=0;g<o;g++){let[x,b]=p(g,d),[_,y]=p(g+1,d),[w,m]=p(g+1,d+1),[u,v]=p(g,d+1);f.quad(x,_,w,u,b,y,m,v)}return f.geo()}function tE(i,t,e,n,r){let s=i-n,o=t-n;if(s<.05||o<.05)return sc(ci(i,t,r),e);let a=new Jn,l=ci(i,t,r),c=ci(s,o,r),f=[0,0,1],p=[0,0,-1],d=x=>ki([Math.cos(x)/i,Math.sin(x)/t,0]),g=x=>ki([-Math.cos(x)/s,-Math.sin(x)/o,0]);for(let x=0;x<r;x++){let b=(x+1)%r,_=x/r*Math.PI*2,y=(x+1)/r*Math.PI*2,w=l[x],m=l[b],u=c[x],v=c[b];a.quad([w[0],w[1],e],[m[0],m[1],e],[v[0],v[1],e],[u[0],u[1],e],f,f,f,f),a.quad([w[0],w[1],-e],[u[0],u[1],-e],[v[0],v[1],-e],[m[0],m[1],-e],p,p,p,p),a.quad([w[0],w[1],-e],[m[0],m[1],-e],[m[0],m[1],e],[w[0],w[1],e],d(_),d(y),d(y),d(_)),a.quad([v[0],v[1],-e],[u[0],u[1],-e],[u[0],u[1],e],[v[0],v[1],e],g(y),g(_),g(_),g(y))}return a.geo()}var eE=["box","cyl","sph","cone","pyr","wedge","torus","tube","star","heart","hex"];function Sr(i){let t=Array.isArray(i.s)?i.s:[20,20,20],e=Math.abs(Qe(t[0],20));return[Math.max(.05,e),Math.max(.05,Math.abs(Qe(t[1],e))),Math.max(.05,Math.abs(Qe(t[2],e)))]}function sm(i,t){let[e,n,r]=Sr(i),s=eE.includes(i.t)?i.t:"box";return s+":"+e.toFixed(3)+","+n.toFixed(3)+","+r.toFixed(3)+(s==="cone"?","+Ze(Qe(i.top,0),0,1).toFixed(3):"")+(s==="tube"?","+Qe(i.w,2).toFixed(3):"")+(s==="star"?","+Ze(Math.round(Qe(i.n,5)),3,12):"")+"/"+t}var om=(i,t)=>{let[e,n]=Sr(i);return Math.max(24,Math.min(t,Math.round(Math.max(e,n)*.9+20)&-4))};function am(i,t=64){let[e,n,r]=Sr(i),s=e/2,o=n/2,a=r/2,l=om(i,t);switch(i.t){case"cyl":return sc(ci(s,o,l),a);case"sph":return jw(s,o,a,l);case"cone":return Zw(s,o,a,Ze(Qe(i.top,0),0,1),l);case"pyr":return $w(s,o,a);case"wedge":return Kw(s,o,a);case"torus":return Qw(s,o,a,e,n,r,l);case"tube":return tE(s,o,a,Math.max(.2,Qe(i.w,2)),l);case"star":return sc(em(i.n,s,o),a,!1);case"heart":return sc(nm(s,o),a);case"hex":return sc(im(s,o),a,!1);default:return Jw(s,o,a)}}function Zp(i,t){let e=i.length,n=[];for(let r=0;r<e;r++){let[s,o]=i[(r+e-1)%e],[a,l]=i[r],[c,f]=i[(r+1)%e],p=a-s,d=l-o,g=c-a,x=f-l,b=Math.hypot(p,d)||1,_=Math.hypot(g,x)||1,y=[-d/b,p/b],w=[-x/_,g/_],m=y[0]+w[0],u=y[1]+w[1],v=Math.hypot(m,u)||1;m/=v,u/=v;let h=Math.min(3,1/Math.max(.2,m*y[0]+u*y[1]));n.push([a+m*t*h,l+u*t*h])}return n}function ca(i,t,e,n,r=!0,s=3){i=oc(i),t=t.map(b=>oc(b).slice().reverse());let o=new Jn,a=[i,...t];n=Math.min(n,e*.45);let l=(b,_,y)=>{let w=_/s*Math.PI/2,m=n*(1-Math.cos(w)),u=y?e-n+n*Math.sin(w):-e+n-n*Math.sin(w);return{P:m>1e-6?Zp(b,m):b,z:u,c:Math.cos(w),s:Math.sin(w)*(y?1:-1)}};for(let b of a){let _=b.length,y=rm(b,r?32:0),w=[],m=[];for(let v=0;v<=s;v++)w.push(l(b,v,!1)),m.push(l(b,v,!0));let u=(v,h)=>{for(let C=0;C<_;C++){let M=(C+1)%_,[S,E]=y[C],T=ki([S[0]*v.c,S[1]*v.c,v.s]),A=ki([E[0]*v.c,E[1]*v.c,v.s]),R=ki([S[0]*h.c,S[1]*h.c,h.s]),L=ki([E[0]*h.c,E[1]*h.c,h.s]);o.quad([v.P[C][0],v.P[C][1],v.z],[v.P[M][0],v.P[M][1],v.z],[h.P[M][0],h.P[M][1],h.z],[h.P[C][0],h.P[C][1],h.z],T,A,L,R)}};for(let v=s;v>0;v--)u(w[v],w[v-1]);u(w[0],m[0]);for(let v=0;v<s;v++)u(m[v],m[v+1])}let c=Zp(i,n),f=t.map(b=>Zp(b,n)),p=Ii.triangulateShape(c.map(([b,_])=>new _t(b,_)),f.map(b=>b.map(([_,y])=>new _t(_,y)))),d=[...c,...f.flat()],g=[0,0,1],x=[0,0,-1];for(let[b,_,y]of p){let w=d[b],m=d[_],u=d[y];o.tri([w[0],w[1],e],[m[0],m[1],e],[u[0],u[1],e],g,g,g),o.tri([w[0],w[1],-e],[u[0],u[1],-e],[m[0],m[1],-e],x,x,x)}return o.geo()}function nE(i,t,e,n,r=3){let s=new Jn,o=[i,t,e],a=o.map(f=>f-n),l=a.map(f=>{let p=[-f-n];for(let d=r-1;d>=1;d--)p.push(-f-n*Math.tan(d/r*Math.PI/4));p.push(-f,f);for(let d=1;d<r;d++)p.push(f+n*Math.tan(d/r*Math.PI/4));return p.push(f+n),p}),c=f=>{let p=f.map((b,_)=>Ze(b,-a[_],a[_])),d=[f[0]-p[0],f[1]-p[1],f[2]-p[2]],g=Math.hypot(d[0],d[1],d[2])||1,x=[d[0]/g,d[1]/g,d[2]/g];return[[p[0]+x[0]*n,p[1]+x[1]*n,p[2]+x[2]*n],x]};for(let f=0;f<3;f++)for(let p of[1,-1]){let d=(f+1)%3,g=(f+2)%3,x=l[d],b=l[g],_=(y,w)=>{let m=[0,0,0];return m[f]=p*o[f],m[d]=y,m[g]=w,c(m)};for(let y=0;y<x.length-1;y++)for(let w=0;w<b.length-1;w++){let m=_(x[y],b[w]),u=_(x[y+1],b[w]),v=_(x[y+1],b[w+1]),h=_(x[y],b[w+1]);p>0?s.quad(m[0],u[0],v[0],h[0],m[1],u[1],v[1],h[1]):s.quad(m[0],h[0],v[0],u[0],m[1],h[1],v[1],u[1])}}return s.geo()}function iE(i,t=64){let[e,n,r]=Sr(i),s=e/2,o=n/2,a=r/2,l=om(i,t),c=Math.min(e,n,r),f=Ze(c*.035,.15,.6);switch(i.t){case"box":case void 0:return nE(s,o,a,Math.min(f,s*.4,o*.4,a*.4));case"cyl":return ca(ci(s,o,l),[],a,f);case"tube":{let p=Math.max(.2,Qe(i.w,2));return s-p<.05||o-p<.05?ca(ci(s,o,l),[],a,f):ca(ci(s,o,l),[ci(s-p,o-p,l)],a,Math.min(f,p*.3))}case"hex":return ca(im(s,o),[],a,f,!1);case"star":return ca(em(i.n,s,o),[],a,f*.55,!1);case"heart":return ca(nm(s,o),[],a,f*.5);default:return am(i,t)}}function Kx(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=Math.max(1,Math.ceil(Math.hypot(s[0]-r[0],s[1]-r[1])/t));for(let a=0;a<o;a++)e.push([r[0]+(s[0]-r[0])*a/o,r[1]+(s[1]-r[1])*a/o])}return e}function jx(i,t,e){let n=!1;for(let r=0,s=i.length-1;r<i.length;s=r++){let o=i[r],a=i[s];o[1]>e!=a[1]>e&&t<(a[0]-o[0])*(e-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}var rE=(i,t,e,n)=>{let r=n[0]-e[0],s=n[1]-e[1],o=r*r+s*s||1,a=Ze(((i-e[0])*r+(t-e[1])*s)/o,0,1),l=e[0]+r*a-i,c=e[1]+s*a-t;return l*l+c*c};function sE(i,t,e){let n=1/0,r=-1/0,s=1/0,o=-1/0;for(let[d,g]of i)n=Math.min(n,d),r=Math.max(r,d),s=Math.min(s,g),o=Math.max(o,g);let a=[i,...t],l=[],c=(e*.55)**2;for(let d=s+e/2;d<o;d+=e)for(let g=n+e/2+Math.round((d-s)/e)%2*e/2;g<r;g+=e){if(!jx(i,g,d)||t.some(b=>jx(b,g,d)))continue;let x=!0;for(let b of a){for(let _=0;_<b.length&&x;_++)rE(g,d,b[_],b[(_+1)%b.length])<c&&(x=!1);if(!x)break}x&&l.push([[g,d]])}let f=d=>d.map(([g,x])=>new _t(g,x)),p=Ii.triangulateShape(f(i),[...t.map(f),...l.map(f)]);return{all:[...i,...t.flat(),...l.flat()],tris:p}}function ua(i,t,e,n,r=!0){i=oc(Kx(i,n)),t=t.map(p=>oc(Kx(p,n)).slice().reverse());let s=new Jn,o=Math.max(1,Math.ceil(2*e/n)),a=[0,0,1],l=[0,0,-1],{all:c,tris:f}=sE(i,t,n);for(let[p,d,g]of f){let x=c[p],b=c[d],_=c[g];s.tri([x[0],x[1],e],[b[0],b[1],e],[_[0],_[1],e],a,a,a),s.tri([x[0],x[1],-e],[_[0],_[1],-e],[b[0],b[1],-e],l,l,l)}for(let p of[i,...t]){let d=p.length,g=rm(p,r?32:0);for(let x=0;x<d;x++){let[b,_]=p[x],[y,w]=p[(x+1)%d],[m,u]=g[x];for(let v=0;v<o;v++){let h=-e+2*e*v/o,C=-e+2*e*(v+1)/o;s.quad([b,_,h],[y,w,h],[y,w,C],[b,_,C],m,u,u,m)}}}return s.geo()}function oE(i,t,e,n){let r=new Jn,s=[i,t,e],o=s.map(a=>Math.max(1,Math.ceil(2*a/n)));for(let a=0;a<3;a++)for(let l of[1,-1]){let c=(a+1)%3,f=(a+2)%3,p=[0,0,0];p[a]=l;let d=(g,x)=>{let b=[0,0,0];return b[a]=l*s[a],b[c]=-s[c]+2*s[c]*g/o[c],b[f]=-s[f]+2*s[f]*x/o[f],b};for(let g=0;g<o[c];g++)for(let x=0;x<o[f];x++){let b=d(g,x),_=d(g+1,x),y=d(g+1,x+1),w=d(g,x+1);l>0?r.quad(b,_,y,w,p,p,p,p):r.quad(b,w,y,_,p,p,p,p)}}return r.geo()}function aE(i,t=64,e=4){let[n,r,s]=Sr(i),o=n/2,a=r/2,l=s/2,c=om(i,t);switch(i.t){case"cyl":return ua(ci(o,a,c),[],l,e);case"tube":{let f=Math.max(.2,Qe(i.w,2));return o-f<.05||a-f<.05?ua(ci(o,a,c),[],l,e):ua(ci(o,a,c),[ci(o-f,a-f,c)],l,e)}case"hex":return ua(im(o,a),[],l,e,!1);case"star":return ua(em(i.n,o,a),[],l,e,!1);case"heart":return ua(nm(o,a),[],l,e);case"box":case void 0:return oE(o,a,l,e);default:return null}}var Qx=new hi,lE=new Bn,Kp=new D,cE=new D(1,1,1);function o_(i,t=new Wt){if(Array.isArray(i.m)&&i.m.length===16&&i.m.every(r=>typeof r=="number"&&isFinite(r)))return t.fromArray(i.m);let e=Array.isArray(i.p)?i.p:[0,0,0],n=Array.isArray(i.r)?i.r:[0,0,0];return Qx.set(Qe(n[0],0)*rn,Qe(n[1],0)*rn,Qe(n[2],0)*rn,"ZYX"),t.compose(Kp.set(Qe(e[0],0),Qe(e[1],0),Qe(e[2],0)),lE.setFromEuler(Qx),cE)}function _f(i){if(!i)return null;if(i.tree)return i.tree;if(i.op||i.prim)return i;if(i.prog!=null||i.src!=null)try{return typeof globalThis.m3Tree=="function"?globalThis.m3Tree(i):null}catch{return null}let t=(i.parts||[]).filter(a=>a&&typeof a=="object"&&a.s);if(!t.length)return null;let e=a=>a.length===1?a[0]:{op:"union",kids:a},n=(a,l)=>l.length?{op:"diff",kids:[e(a),e(l)]}:e(a),r=[],s=[],o=new Map;for(let a of t)a.g!=null&&a.g!==""?(o.has(a.g)||o.set(a.g,{s:[],h:[]}),o.get(a.g)[a.hole?"h":"s"].push({prim:a})):(a.hole?s:r).push({prim:a});for(let a of o.values())a.s.length?r.push(n(a.s,a.h)):s.push(e(a.h));return r.length?n(r,s):null}function lm(i,t=[],e=!1){return i?i.prim?(t.push({q:i.prim,neg:e}),t):((i.kids||[]).forEach((n,r)=>lm(n,t,i.op==="diff"&&r>0?!e:e)),t):t}function uE(i){return i?i.parts?i.parts.filter(t=>t&&typeof t=="object"&&t.s).map((t,e)=>({q:t,id:t.id!=null?String(t.id):"#"+e,hole:!!t.hole})):lm(_f(i)).map(({q:t,neg:e},n)=>({q:t,id:t.id!=null?String(t.id):"#"+n,hole:e||!!t.hole})):[]}var hE=0,fE=.02,Is=new Map,Ds=new Map;function dE(i,t){let e="D"+sm(i,t),n=Ds.get(e);if(!n){try{n=iE(i,t)}catch{n=am(i,t)}if(n.computeBoundingBox(),n.computeBoundingSphere(),Ds.set(e,n),Ds.size>300){let r=Ds.keys().next().value;Ds.get(r).dispose(),Ds.delete(r)}}return n}function a_(i,t){let e=sm(i,t),n=Is.get(e);if(!n&&(n=am(i,t),n.computeBoundingBox(),Is.set(e,n),Is.size>400)){let r=Is.keys().next().value;Is.get(r).dispose(),Is.delete(r)}return n}var vf=class extends bs{prepareGeometry(){let t=this.geometry,e=t.index,n=t.attributes.position,r=`${t.uuid}_${e?e.uuid+"_"+e.version:"-"}_${n.uuid}_${n.count}_${n.version}`;if(this._hash===r)return;this._hash=r,t.boundsTree=new $o(t,{targetLeafSize:3,maxDepth:64,indirect:!0}),t.halfEdges||(t.halfEdges=new Ko),t.halfEdges.updateFrom(t);let s=(e?e.count:n.count)/3|0;(!t.groupIndices||t.groupIndices.length!==s)&&(t.groupIndices=new Uint16Array(s));let o=t.groupIndices;o.fill(0),t.groups.forEach((a,l)=>{for(let c=a.start/3,f=Math.min(s,(a.start+a.count)/3);c<f;c++)o[c]=l})}},df=new Wt,t_=new Wt;function pE(i,t,e,n){let[r,s,o]=Sr(i),a=null;if(n)try{a=aE(i,e,n)}catch{a=null}return a||(a=a_(i,e).clone()),o_(i,df),t&&(t_.makeScale((r+2*t)/r,(s+2*t)/s,(o+2*t)/o),df.multiply(t_)),a.applyMatrix4(df),df.determinant()<0&&mE(a),a.computeBoundingBox(),a}function mE(i){let t=i.attributes.position.array,e=i.attributes.normal.array;for(let n=0;n<t.length;n+=9)for(let r=0;r<3;r++){let s=t[n+3+r];t[n+3+r]=t[n+6+r],t[n+6+r]=s,s=e[n+3+r],e[n+3+r]=e[n+6+r],e[n+6+r]=s}i.attributes.position.needsUpdate=i.attributes.normal.needsUpdate=!0}var gf=(i,t,e=.001)=>i.min.x<=t.max.x+e&&i.max.x>=t.min.x-e&&i.min.y<=t.max.y+e&&i.max.y>=t.min.y-e&&i.min.z<=t.max.z+e&&i.max.z>=t.min.z-e;function gE(i){let t=i.attributes.position.array,e=i.attributes.normal.array,n=i.drawRange.start,r=Math.min(i.attributes.position.count,n+i.drawRange.count),s=new Le;s.setAttribute("position",new We(t.slice(n*3,r*3),3)),s.setAttribute("normal",new We(e.slice(n*3,r*3),3));for(let o of i.groups){let a=Math.max(o.start,n),l=Math.min(r,o.start+o.count);l>a&&s.addGroup(a-n,l-a,o.materialIndex)}return s.computeBoundingBox(),s}function $p(i){let t=0;for(let{g:a}of i)t+=a.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),r=new Le,s=[],o=0;for(let{g:a,mat:l}of i){let c=a.attributes.position.count,f=[].concat(l);e.set(a.attributes.position.array.subarray(0,c*3),o*3),n.set(a.attributes.normal.array.subarray(0,c*3),o*3);let p=a.groups.length?a.groups:[{start:0,count:c,materialIndex:0}];for(let d of p){let g=f[d.materialIndex||0]??f[0],x=s.indexOf(g);x<0&&(x=s.length,s.push(g)),r.addGroup(o+d.start,Math.min(d.count,c-d.start),x)}o+=c}return r.setAttribute("position",new We(e,3)),r.setAttribute("normal",new We(n,3)),r.computeBoundingBox(),{g:r,mat:s}}var da=class{constructor(t={}){this.ev=new rf,this.ev.attributes=["position","normal"],this.ev.useGroups=!0,this.seg=t.seg||64,this.matFor=t.matFor||(()=>null),this.cache=new Map,this.gen=0,this.ops=0}memo(t,e){let n=this.cache.get(t);return n||(n=e(),n.key=t,this.cache.set(t,n)),n.gen=this.gen,n}brush(t){return t.brush||(t.brush=new vf(t.g,t.mat),t.brush.updateMatrixWorld()),t.brush}op(t,e,n){this.ops++;let r=this.ev.evaluate(this.brush(t),this.brush(e),n,new vf),s=gE(r.geometry);return r.geometry.dispose(),{g:s,mat:r.material}}leaf(t,e,n,r){let s=this.matFor(t,e,n),o=e?fE:hE,a="L"+JSON.stringify([t.t,t.s,t.p,t.r,t.m,t.top,t.w,t.n,o,this.seg,s&&s.uuid?s.uuid:String(s)])+(r?"~"+r:""),l=this.memo(a,()=>({g:pE(t,o,this.seg,r),mat:s}));return l.src={q:t,neg:e,base:n},l}refine(t,e){if(!t.src||t.key.includes("~"))return t;let n=0,r=1/0;for(let f of e){n+=f.g.attributes.position.count/3;let p=f.g.boundingBox.getSize(Kp);r=Math.min(r,Math.max(Math.min(p.x,p.y,p.z),.5))}let s=t.g.boundingBox.getSize(Kp),o=s.x*s.y+s.y*s.z+s.x*s.z,a=t.g.attributes.position.count/3;if(e.length<4&&n<300)return t;let l=Math.round(Ze(Math.max(r*1.1,Math.sqrt(o/6e3)),1.5,12)*2)/2;if(o/(l*l)<a*1.5)return t;let c=this.leaf(t.src.q,t.src.neg,t.src.base,l);return c.g.attributes.position.count?c:t}minus(t,e){let n=[];for(let r of t){let s=e.filter(o=>gf(r.g.boundingBox,o.g.boundingBox));s.length&&(r=this.refine(r,s));for(let o of xE(s)){let a=o.length===1?o[0]:this.memo("U"+o.map(f=>f.key).join("|"),()=>$p(o)),l=r,c=a;if(r=this.memo("("+l.key+")-("+c.key+")",()=>this.op(l,c,1)),!r.g.attributes.position.count)break}r.g.attributes.position.count&&n.push(r)}return n}inter(t,e){let n=[];for(let r of t)for(let s of e)if(gf(r.g.boundingBox,s.g.boundingBox)){let o=this.memo("("+r.key+")&("+s.key+")",()=>this.op(r,s,3));o.g.attributes.position.count&&n.push(o)}return n}node(t,e=!1,n=null){if(!t)return[];if(t.prim)return[this.leaf(t.prim,e,n)];let r=(t.kids||[]).filter(Boolean);if(!r.length)return[];if(t.op==="diff"){let s=n||l_(r[0]),o=this.node(r[0],e,n),a=r.slice(1).flatMap(l=>this.node(l,!e,s));return o.length&&a.length?this.minus(o,a):o}if(t.op==="inter"){let s=this.node(r[0],e,n);for(let o of r.slice(1)){if(!s.length)break;s=this.inter(s,this.node(o,e,n))}return s}return r.flatMap(s=>this.node(s,e,n))}pieces(t){this.gen++,this.ops=0;let e=[];try{e=this.node(_f(t)),this.failed=!1}catch(n){this.failed=!0,typeof console<"u"&&console.warn("m3 csg",n);try{e=lm(_f(t)).filter(r=>!r.neg).map(r=>this.leaf(r.q,!1,null))}catch{e=[]}}return e}sweep(t=1){for(let[e,n]of this.cache)this.gen-n.gen>=t&&(n.g.dispose(),n.brush&&(n.brush.geometry=null),this.cache.delete(e))}run(t){let e=e_(),n=this.pieces(t),r=n.length?$p(n):{g:new Le,mat:[]};return this.sweep(2),r.ms=e_()-e,r.ops=this.ops,r}solid(t){let n=this.pieces(t).map(s=>({g:s.g,mat:s.mat,key:s.key})).slice();for(let s=!0;s;){s=!1;let o=new Set,a=[],l=n.map(c=>c.g.boundingBox.getCenter(new D));for(let c=0;c<n.length;c++){if(o.has(c))continue;let f=-1,p=1/0;for(let b=c+1;b<n.length;b++)if(!o.has(b)&&gf(n[c].g.boundingBox,n[b].g.boundingBox)){let _=l[c].distanceToSquared(l[b]);_<p&&(p=_,f=b)}if(f<0){a.push(n[c]),o.add(c);continue}let d=n[c],g=n[f],x=this.op(d,g,0);d.tmp&&d.g.dispose(),g.tmp&&g.g.dispose(),x.tmp=!0,a.push(x),o.add(c),o.add(f),s=!0}n=a}let r=n.length?$p(n).g:new Le;return n.forEach(s=>s.tmp&&s.g.dispose()),this.sweep(2),r.attributes.position?cm(r):r}dispose(){for(let t of this.cache.values())t.g.dispose();this.cache.clear()}},e_=()=>typeof performance<"u"?performance.now():Date.now(),l_=i=>i.prim?i.prim:i.kids&&i.kids.length?l_(i.kids[0]):null;function xE(i){let t=[];for(let e of i){let n=t.find(r=>r.every(s=>!gf(s.g.boundingBox,e.g.boundingBox,.01)));n?n.push(e):t.push([e])}return t}function cm(i,t=.001){let e=i.attributes.position.array,n=[],r=new Map,s=x=>Math.round(x/t),o=(x,b,_)=>{let y=s(x)+","+s(b)+","+s(_),w=r.get(y);return w===void 0&&(w=n.length/3,r.set(y,w),n.push(x,b,_)),w},a=[];for(let x=0;x<e.length;x+=3)a.push(o(e[x],e[x+1],e[x+2]));let l=x=>n[x*3],c=x=>n[x*3+1],f=x=>n[x*3+2];for(let x=0;x<4;x++){let b=Mf(a),_=[];for(let[S,E]of b)if(E){let T=S%4194304,A=(S-T)/4194304;_.push([A,T])}if(!_.length)break;let y=new Set;_.forEach(([S,E])=>{y.add(S),y.add(E)});let w=1,m=new Map,u=t*3,v=(S,E,T)=>S+","+E+","+T;for(let S of y){let E=l(S),T=c(S),A=f(S),R=new Set;for(let L of[-u,u])for(let F of[-u,u])for(let O of[-u,u])R.add(v(Math.floor((E+L)/w),Math.floor((T+F)/w),Math.floor((A+O)/w)));for(let L of R){let F=m.get(L);F||m.set(L,F=[]),F.push(S)}}let h=(S,E)=>{let T=[l(S),c(S),f(S)],A=[l(E)-T[0],c(E)-T[1],f(E)-T[2]],R=A[0]*A[0]+A[1]*A[1]+A[2]*A[2];if(R<1e-12)return[];let L=[],F=new Set,O=T.map(q=>Math.floor(q/w)),V=[l(E),c(E),f(E)].map(q=>Math.floor(q/w)),$=A.map(Math.sign),k=[0,1,2].map(q=>A[q]?((O[q]+($[q]>0?1:0))*w-T[q])/A[q]:1/0),tt=A.map(q=>q?w/Math.abs(q):1/0);for(let q=0;q<1e5;q++){for(let ut of m.get(v(O[0],O[1],O[2]))||[]){if(ut===S||ut===E||F.has(ut))continue;F.add(ut);let Et=l(ut)-T[0],Mt=c(ut)-T[1],kt=f(ut)-T[2],N=(Et*A[0]+Mt*A[1]+kt*A[2])/R;if(N<=1e-6||N>=1-1e-6)continue;let Q=Et-A[0]*N,lt=Mt-A[1]*N,vt=kt-A[2]*N;Q*Q+lt*lt+vt*vt<t*t*4&&L.push([N,ut])}if(O[0]===V[0]&&O[1]===V[1]&&O[2]===V[2])break;let ct=k[0]<k[1]?k[0]<k[2]?0:2:k[1]<k[2]?1:2;if(k[ct]>1+1e-9)break;O[ct]+=$[ct],k[ct]+=tt[ct]}return L.sort((q,ct)=>q[0]-ct[0]).map(q=>q[1])},C=new Map;for(let[S,E]of _){let T=h(S,E);T.length&&(C.set(S*4194304+E,T),C.set(E*4194304+S,T.slice().reverse()))}if(!C.size)break;let M=[];for(let S=0;S<a.length;S+=3){let E=[a[S],a[S+1],a[S+2]],T=[];for(let R=0;R<3;R++){let L=E[R],F=E[(R+1)%3];T.push(L);let O=C.get(L*4194304+F);O&&T.push(...O)}if(T.length===3){M.push(...E);continue}let A=[0,1,2].filter(R=>C.has(E[R]*4194304+E[(R+1)%3]));if(A.length===1){let R=T.indexOf(E[(A[0]+2)%3]);T=T.slice(R).concat(T.slice(0,R));for(let L=1;L<T.length-1;L++)M.push(T[0],T[L],T[L+1])}else{let R=n.length/3;n.push((l(E[0])+l(E[1])+l(E[2]))/3,(c(E[0])+c(E[1])+c(E[2]))/3,(f(E[0])+f(E[1])+f(E[2]))/3);for(let L=0;L<T.length;L++)M.push(R,T[L],T[(L+1)%T.length])}}a=M}let p=_E(a);if(p!==a&&fa(p)<=fa(a)&&(a=p),fa(a)){let x=vE(a,n);x!==a&&fa(x)<fa(a)&&(a=x)}let d=new Float32Array(a.length*3);for(let x=0;x<a.length;x++)d[x*3]=n[a[x]*3],d[x*3+1]=n[a[x]*3+1],d[x*3+2]=n[a[x]*3+2];let g=new Le;return g.setAttribute("position",new We(d,3)),g.computeVertexNormals(),g.computeBoundingBox(),g}function Mf(i){let t=new Map;for(let e=0;e<i.length;e+=3)for(let n=0;n<3;n++){let r=i[e+n],s=i[e+(n+1)%3];if(r===s)continue;let o=r<s?r*4194304+s:s*4194304+r;t.set(o,(t.get(o)||0)+(r<s?1:-1))}return t}function fa(i){let t=0;for(let e of Mf(i).values())e&&t++;return t}function _E(i){let t=new Map,e=new Uint8Array(i.length/3).fill(1);for(let r=0;r<i.length/3;r++){let s=i[r*3],o=i[r*3+1],a=i[r*3+2];if(s===o||o===a||s===a){e[r]=0;continue}let l=[s,o,a].sort((x,b)=>x-b),c=l.join(","),f=[s,o,a].indexOf(l[0]),p=[s,o,a][(f+1)%3]===l[1]?1:-1,d=t.get(c);if(!d||!d.length){t.set(c,[[r,p]]);continue}let g=d.findIndex(([,x])=>x===-p);g>=0?(e[r]=0,e[d[g][0]]=0,d.splice(g,1)):e[r]=0}if(e.every(Boolean))return i;let n=[];for(let r=0;r<e.length;r++)e[r]&&n.push(i[r*3],i[r*3+1],i[r*3+2]);return n}function vE(i,t){let e=Mf(i),n=i.slice(),r=0,s=(a,l)=>a<l?a*4194304+l:l*4194304+a,o=(a,l)=>a<l?1:-1;for(let a=0;a<i.length;a+=3){let l=[n[a],n[a+1],n[a+2]];if(!(l[0]===l[1]||l[1]===l[2]||l[0]===l[2])&&[0,1,2].every(c=>e.get(s(l[c],l[(c+1)%3]))*o(l[c],l[(c+1)%3])===2)){for(let c=0;c<3;c++){let f=l[c],p=l[(c+1)%3];e.set(s(f,p),e.get(s(f,p))-2*o(f,p))}n[a+1]=l[2],n[a+2]=l[1],r++}}return r?n:i}function c_(i){let t=i.attributes.position.array,e=t.length/9|0,n=new ArrayBuffer(84+e*50),r=new DataView(n),s="Numi Tech 3D - STL binari en mm (z amunt)";for(let a=0;a<80;a++)r.setUint8(a,a<s.length?s.charCodeAt(a):32);r.setUint32(80,e,!0);let o=84;for(let a=0;a<e;a++){let l=a*9,c=t[l],f=t[l+1],p=t[l+2],d=t[l+3],g=t[l+4],x=t[l+5],b=t[l+6],_=t[l+7],y=t[l+8],w=d-c,m=g-f,u=x-p,v=b-c,h=_-f,C=y-p,M=m*C-u*h,S=u*v-w*C,E=w*h-m*v,T=Math.hypot(M,S,E)||1;r.setFloat32(o,M/T,!0),r.setFloat32(o+4,S/T,!0),r.setFloat32(o+8,E/T,!0),o+=12;for(let A=0;A<9;A++)r.setFloat32(o,t[l+A],!0),o+=4;r.setUint16(o,0,!0),o+=2}return n}function X3(i,t=.001){let e=i.attributes.position.array,n=o=>Math.round(e[o]/t)+","+Math.round(e[o+1]/t)+","+Math.round(e[o+2]/t),r=new Map;for(let o=0;o<e.length;o+=9){let a=[n(o),n(o+3),n(o+6)];for(let l=0;l<3;l++){let c=a[l],f=a[(l+1)%3];if(c===f)continue;let p=c<f?c+"|"+f:f+"|"+c,d=c<f?1:-1;r.set(p,(r.get(p)||0)+d)}}let s=0;for(let o of r.values())o!==0&&s++;return s}var pf=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,nn={sel:"#FFB21E",ghost:"#3D8BFF",ax:["#F0443A","#1FB45A","#2F7BFF"],ink:"#14204A",hole:"#9AA4B6"},u_="#7C5CFF",um=i=>{let t=new Qt(u_);try{typeof i=="string"&&i&&t.set(i)}catch{}return t};function Us(i,t,e,n=!0){let r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);let s=new Ga(r);return n&&(s.colorSpace=Rn),s.anisotropy=8,s}function yE(i=256,t=7){let e=t,n=()=>(e=e*1664525+1013904223>>>0)/4294967296,r=Us(i,i,(s,o,a)=>{let l=s.createImageData(o,a),c=l.data,f=new Float32Array(o*a);for(let d=0;d<o*a;d++)f[d]=n();let p=(d,g,x)=>{let b=Math.floor(d/x),_=Math.floor(g/x),y=d/x-b,w=g/x-_,m=o/x,u=(C,M)=>f[(M%m+m)%m*131%(o*a)+(C%m+m)%m*17%o],v=y*y*(3-2*y),h=w*w*(3-2*w);return(u(b,_)*(1-v)+u(b+1,_)*v)*(1-h)+(u(b,_+1)*(1-v)+u(b+1,_+1)*v)*h};for(let d=0;d<a;d++)for(let g=0;g<o;g++){let x=p(g,d,16)*.35+p(g,d,4)*.35+f[d*o+g]*.3,b=(d*o+g)*4;c[b]=c[b+1]=c[b+2]=x*255,c[b+3]=255}s.putImageData(l,0,0)},!1);return r.wrapS=r.wrapT=ti,r}var jp={studio:{stops:[[0,"#F8FAFE"],[.5,"#E7ECF5"],[1,"#C7D0E0"]],glow:"rgba(255,255,255,.65)",floor:"#C9D1E0"},workshop:{stops:[[0,"#F3EBE1"],[.55,"#DDCDB9"],[1,"#B49B80"]],glow:"rgba(255,248,236,.6)",floor:"#B9A184"}};function h_(i){let t=jp[i]||jp.studio;return Us(256,512,(e,n,r)=>{let s=e.createLinearGradient(0,0,0,r);t.stops.forEach(([c,f])=>s.addColorStop(c,f)),e.fillStyle=s,e.fillRect(0,0,n,r);let o=e.createRadialGradient(n*.5,r*.36,0,n*.5,r*.36,r*.55);o.addColorStop(0,t.glow),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,n,r);let a=e.getImageData(0,0,n,r),l=a.data;for(let c=0;c<l.length;c+=4){let f=(Math.random()-.5)*3;l[c]+=f,l[c+1]+=f,l[c+2]+=f}e.putImageData(a,0,0)})}var n_={studio:["#F4F7FC","#E9EEF6","#EDF1F7","#DDE3EE"],workshop:["#F6EEE4","#E3D3C0","#BCA387","#B39A7E"]};function ME(i){let t=(n_[i]||n_.studio).map(r=>new Qt(r)),e=new Oe({uniforms:{uTop:{value:t[0]},uHor:{value:t[1]},uLow:{value:t[2]},uFloor:{value:t[3]},uRes:{value:new _t(1,1)}},vertexShader:"varying vec3 vD; void main(){ vD = (modelMatrix * vec4(position, 1.)).xyz - cameraPosition; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); gl_Position.z = gl_Position.w * .99999; }",fragmentShader:`uniform vec3 uTop, uHor, uLow, uFloor; uniform vec2 uRes; varying vec3 vD;
      void main(){ vec3 d = normalize(vD); float e = d.z;
        vec3 c = e > 0. ? mix(uHor, uTop, pow(clamp(e, 0., 1.), .55)) : mix(uLow, uFloor, smoothstep(0., -.35, e));
        c = mix(c, uHor, (1. - smoothstep(0., .06, abs(e))) * .5);
        vec2 q = gl_FragCoord.xy / uRes - .5; c *= 1. - .1 * smoothstep(.25, .85, length(q * vec2(1.1, 1.)));
        gl_FragColor = vec4(c, 1.); }`,side:cn,depthWrite:!1,depthTest:!1,fog:!1}),n=new ae(new tl(1,48,24),e);return n.renderOrder=-10,n.frustumCulled=!1,n.userData.fx=1,n.userData.dome=1,n}var f_=()=>Us(128,128,(i,t)=>{let e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.45,"rgba(0,0,0,.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),mf=["#include <common>",`#include <common>
varying vec3 vPw;`,"#include <worldpos_vertex>",`#include <worldpos_vertex>
vPw = (modelMatrix * vec4(transformed, 1.0)).xyz;`],SE=`
float pgrid(vec2 uv, float lw) {
  vec4 dd = vec4(dFdx(uv), dFdy(uv)); vec2 d = vec2(length(dd.xz), length(dd.yw));
  vec2 tw = vec2(lw), dw = clamp(tw, d, vec2(.5)), aa = d * 1.5;
  vec2 g = 1. - abs(fract(uv) * 2. - 1.);
  vec2 g2 = smoothstep(dw + aa, dw - aa, g); g2 *= clamp(tw / dw, 0., 1.); g2 = mix(g2, tw, clamp(d * 2. - 1., 0., 1.));
  return mix(g2.x, 1., g2.y);
}
float pline(float x, float w) { float d = fwidth(x); float dw = max(w, d); return smoothstep(dw * .5 + d, dw * .5 - d, abs(x)) * clamp(w / dw, 0., 1.); }`;function hm(i){i.vertexShader=i.vertexShader.replace(mf[0],mf[1]).replace(mf[2],mf[3])}var Ps={base:"#2E323B",rough:.66,line:"#E9EEF8",a1:.07,a10:.24,a50:.4,edge:"#1C1F25"};function bE(i,t,e,n){let r=i/2+t+e,s=Math.round(2*r*n);return Us(s,s,o=>{let a=d=>(d+r)*n,l=d=>(r-d)*n,c=i/2;o.clearRect(0,0,s,s),o.lineCap="round",o.strokeStyle="rgba(233,238,248,.62)",o.fillStyle="rgba(233,238,248,.62)",o.textAlign="center",o.textBaseline="middle",o.font=`700 ${2.5*n}px Lexend, system-ui, sans-serif`;for(let d=-c;d<=c+1e-6;d+=10){let g=Math.abs(d%50)<1e-6,x=g?2.4:1.3;o.lineWidth=(g?.32:.22)*n,o.beginPath(),o.moveTo(a(d),l(-c-.6)),o.lineTo(a(d),l(-c-.6-x)),o.stroke(),o.beginPath(),o.moveTo(a(-c-.6),l(d)),o.lineTo(a(-c-.6-x),l(d)),o.stroke(),g&&Math.abs(d)<c-1&&(o.fillText(String(d),a(d),l(-c-4.9)),o.save(),o.translate(a(-c-4.9),l(d)),o.rotate(-Math.PI/2),o.fillText(String(d),0,0),o.restore())}let f=(d,g,x,b,_,y)=>{o.strokeStyle=_,o.fillStyle=_,o.lineWidth=.55*n,o.beginPath(),o.moveTo(a(d),l(g)),o.lineTo(a(x),l(b)),o.stroke();let w=Math.atan2(-(b-g),x-d),m=2.6*n;o.beginPath(),o.moveTo(a(x)+Math.cos(w)*m*.3,l(b)+Math.sin(w)*m*.3),o.lineTo(a(x)-Math.cos(w-.45)*m,l(b)-Math.sin(w-.45)*m),o.lineTo(a(x)-Math.cos(w+.45)*m,l(b)-Math.sin(w+.45)*m),o.closePath(),o.fill(),o.font=`800 ${3.4*n}px Lexend, system-ui, sans-serif`,o.fillText(y,a(x)+Math.cos(w)*4.2*n,l(b)+Math.sin(w)*4.2*n)},p=-c+7;f(p,p,p+14,p,"rgba(255,110,100,.9)","X"),f(p,p,p,p+14,"rgba(90,225,140,.9)","Y"),o.fillStyle="rgba(233,238,248,.8)",o.beginPath(),o.arc(a(p),l(p),.9*n,0,7),o.fill(),o.fillStyle="rgba(233,238,248,.5)",o.font=`800 ${3.1*n}px Lexend, system-ui, sans-serif`,o.fillText("numi \xB7 3D",a(0),l(-c-t-e*.48)),o.font=`600 ${2*n}px Lexend, system-ui, sans-serif`,o.fillStyle="rgba(233,238,248,.42)",o.fillText(`${i} \xD7 ${i} mm`,a(c-14),l(-c-4.9))})}function i_(i,t,e,n,r,s){return i.moveTo(t+s,e),i.lineTo(n-s,e),i.quadraticCurveTo(n,e,n,e+s),i.lineTo(n,r-s),i.quadraticCurveTo(n,r,n-s,r),i.lineTo(t+s,r),i.quadraticCurveTo(t,r,t,r-s),i.lineTo(t,e+s),i.quadraticCurveTo(t,e,t+s,e),i}function wE(i,t,e){let n=new Fn,r=7,s=8,o=i/2+r,a=9,l=40,c=3,f=5,p=new Lr;p.moveTo(-o+a,-o),p.lineTo(-l/2-c,-o),p.quadraticCurveTo(-l/2,-o,-l/2,-o-c),p.lineTo(-l/2,-o-s+f),p.quadraticCurveTo(-l/2,-o-s,-l/2+f,-o-s),p.lineTo(l/2-f,-o-s),p.quadraticCurveTo(l/2,-o-s,l/2,-o-s+f),p.lineTo(l/2,-o-c),p.quadraticCurveTo(l/2,-o,l/2+c,-o),p.lineTo(o-a,-o),p.quadraticCurveTo(o,-o,o,-o+a),p.lineTo(o,o-a),p.quadraticCurveTo(o,o,o-a,o),p.lineTo(-o+a,o),p.quadraticCurveTo(-o,o,-o,o-a),p.lineTo(-o,-o+a),p.quadraticCurveTo(-o,-o,-o+a,-o);let d=new ps(p,{depth:.7,bevelEnabled:!0,bevelThickness:.3,bevelSize:.4,bevelSegments:3,curveSegments:14}),g=yE(256,11);g.repeat.set(1/18,1/18);let x=bE(i,r,s,t==="low"?5:8),b=new gr({color:Ps.base,roughness:Ps.rough,metalness:0,roughnessMap:g,bumpMap:g,bumpScale:.45,clearcoat:.18,clearcoatRoughness:.6,sheen:.25,sheenRoughness:.7,sheenColor:new Qt("#8A93A8")}),_=i/2+r+s,y=new Qt(Ps.line);b.onBeforeCompile=V=>{hm(V),Object.assign(V.uniforms,{uHalf:{value:i/2},uE:{value:_},uDecal:{value:x},uLine:{value:y},uA:{value:new D(Ps.a1,Ps.a10,Ps.a50)},uAx:{value:new Qt(nn.ax[0])},uAy:{value:new Qt(nn.ax[1])}}),V.fragmentShader=V.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPw; uniform float uHalf, uE; uniform sampler2D uDecal; uniform vec3 uLine, uA, uAx, uAy;${SE}`).replace("#include <map_fragment>",`#include <map_fragment>
if (vPw.z > -.05) {
  vec2 p = vPw.xy; float inP = step(abs(p.x), uHalf + .3) * step(abs(p.y), uHalf + .3);
  float g1 = pgrid(p, .07), g10 = pgrid(p / 10., .028), g50 = pgrid(p / 50., .0095);
  float a = max(max(g1 * uA.x, g10 * uA.y), g50 * uA.z) * inP;
  diffuseColor.rgb = mix(diffuseColor.rgb, uLine, a);
  float ax = pline(p.y, .5) * step(abs(p.x), uHalf), ay = pline(p.x, .5) * step(abs(p.y), uHalf);
  diffuseColor.rgb = mix(diffuseColor.rgb, uAx, ax * .55); diffuseColor.rgb = mix(diffuseColor.rgb, uAy, ay * .55);
  vec4 dc = texture2D(uDecal, p / (2. * uE) + .5); diffuseColor.rgb = mix(diffuseColor.rgb, dc.rgb, dc.a);
}`)};let w=new gr({color:Ps.edge,roughness:.45,metalness:.2,clearcoat:.3}),m=new ae(d,[b,w]);m.position.z=-1,m.receiveShadow=!0,n.add(m);let u=new Lr;i_(u,-o-6,-o-6,o+6,o+6,a+5);let v=new ps(u,{depth:3,bevelEnabled:!0,bevelThickness:.6,bevelSize:.6,bevelSegments:3,curveSegments:14}),h=new gr({color:"#A9B1BD",metalness:.8,roughness:.42}),C=new ae(v,h);C.position.z=-1-.3-4.2+.6,C.receiveShadow=!0,C.castShadow=!0,n.add(C);let M=new Dr(2.4,2.4,1.1,24);M.rotateX(Math.PI/2);let S=new gr({color:"#8A92A0",metalness:.9,roughness:.25}),E=new gi({color:"#2A2E36",roughness:.6}),T=new Dr(1.1,1.1,.3,6);T.rotateX(Math.PI/2);for(let V of[-1,1])for(let $ of[-1,1]){let k=V*(o+2.3),tt=$*(o+2.3),q=new ae(M,S);q.position.set(k,tt,-1.3+.2),q.castShadow=!0,n.add(q);let ct=new ae(T,E);ct.position.set(k,tt,-1.3+.8),n.add(ct)}let A=new Lr;i_(A,-o-2,-o-2,o+2,o+2,a+2);let R=new ae(new ps(A,{depth:2.2,bevelEnabled:!1,curveSegments:10}),new gi({color:"#1E2127",roughness:.8}));R.position.z=C.position.z-.6-2.2,n.add(R);let L=R.position.z,F=L-.05;if(e==="workshop"){let V=Us(1024,1024,(k,tt,q)=>{let ct=3,ut=()=>(ct=ct*1664525+1013904223>>>0)/4294967296,Et=tt/5;for(let Mt=0;Mt<5;Mt++){let kt=[[199,150,98],[186,136,86],[206,160,108],[192,143,92],[180,130,82]][Mt];k.fillStyle=`rgb(${kt})`,k.fillRect(Mt*Et,0,Et,q);for(let N=0;N<70;N++){let Q=Mt*Et+ut()*Et,lt=.05+ut()*.12;k.strokeStyle=`rgba(${90+ut()*40},${55+ut()*25},25,${lt})`,k.lineWidth=.6+ut()*2.2,k.beginPath(),k.moveTo(Q,0);for(let vt=0;vt<=q;vt+=64)k.lineTo(Q+Math.sin(vt*.01+N)*3+(ut()-.5)*2,vt);k.stroke()}k.fillStyle="rgba(60,35,15,.35)",k.fillRect(Mt*Et,0,2,q)}});V.wrapS=V.wrapT=ti,V.repeat.set(3,3);let $=new ae(new mi(1500,1500),new gi({map:V,roughness:.62,roughnessMap:g,metalness:0}));$.position.z=F,$.receiveShadow=!0,n.add($)}else{let V=new ae(new mi(i*4,i*4),new wo({color:"#1B2440",opacity:.16,transparent:!0,depthWrite:!1}));V.position.z=F,V.receiveShadow=!0,V.userData.fx=1,n.add(V)}let O=new ae(new mi(2*o*1.32,2*o*1.32),new pi({map:f_(),color:"#0E1630",transparent:!0,opacity:e==="workshop"?.5:.32,depthWrite:!1}));return O.position.z=F+.02,O.userData.fx=1,O.renderOrder=-1,n.add(O),n.userData={S:o,bottom:L,floorZ:F,dispose(){n.traverse(V=>{V.geometry&&V.geometry.dispose(),[].concat(V.material||[]).forEach($=>{for(let k in $)$[k]&&$[k].isTexture&&$[k].dispose();$.dispose()})}),x.dispose(),g.dispose()}},n}function d_(i,t){let e=new gr({color:um(i),roughness:.36,metalness:0,clearcoat:.5,clearcoatRoughness:.2,specularIntensity:.6,ior:1.45});return e.onBeforeCompile=n=>{hm(n),n.uniforms.uLayers=t.layers,n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPw; uniform float uLayers;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
if (uLayers > 0.) { float zl = vPw.z / .2; float fw = fwidth(zl); float k = uLayers * clamp(1. - fw * 1.6, 0., 1.);
  if (k > 0.) { float s = sin(zl * 6.2831853); vec3 upV = normalize((viewMatrix * vec4(0., 0., 1., 0.)).xyz); float side = 1. - abs(dot(normal, upV));
    normal = normalize(normal + upV * s * .22 * k * side); } }`)},e.customProgramCacheKey=()=>"pla",e}function EE(){let i=t=>{let e=new gi({color:t?"#8C96A8":"#6E7789",roughness:.55,metalness:0,transparent:!0,opacity:t?.58:.3,depthWrite:!1,side:t?ri:cn});return e.onBeforeCompile=n=>{hm(n),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPw;`).replace("#include <map_fragment>",`#include <map_fragment>
{ float s = (vPw.x + vPw.y + vPw.z) / 3.2; float f = abs(fract(s) - .5) * 2.; float w = fwidth(s) * 2.;
  float st = smoothstep(.5 - w, .5 + w, f); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.96, .97, 1.), st * ${t?".7":".35"}); diffuseColor.a *= mix(1., 1.3, st); }`)},e.customProgramCacheKey=()=>"hole"+t,e};return{front:i(!0),back:i(!1)}}function TE(){return new Oe({uniforms:{uC:{value:new Qt(nn.ghost)},uA:{value:1}},transparent:!0,depthWrite:!1,side:An,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.); vV = -mv.xyz; vN = normalMatrix * normal; gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform vec3 uC; uniform float uA; varying vec3 vN; varying vec3 vV;
      void main(){ vec3 n = normalize(vN), v = normalize(vV); float f = 1. - abs(dot(n, v)); float a = (gl_FrontFacing ? .1 + .5 * pow(f, 2.4) : .05) * uA;
        gl_FragColor = vec4(uC * (gl_FrontFacing ? 1.05 + .4 * f : .8), a); }`})}function ts(i,t,e={}){return new la({color:new Qt(i).getHex(),linewidth:t,transparent:!0,opacity:e.opacity??1,depthTest:e.depthTest??!0,depthWrite:!1,dashed:!!e.dashed,dashSize:e.dash||2,gapSize:e.gap||1.6,worldUnits:!1})}function es(i,t){let e=new aa;e.setPositions(i);let n=new ff(e,t);return t.dashed&&n.computeLineDistances(),n.userData.fx=1,n}var rc=new Map;function AE(i,t,e=24){let n=rc.get(t+"/"+e);if(!n){let r=new Mo(i,e);n=Array.from(r.attributes.position.array),r.dispose(),rc.set(t+"/"+e,n),rc.size>300&&rc.delete(rc.keys().next().value)}return n}var RE=i=>i.userData.fx||i.isLine2||i.isLineSegments2||i.isSprite||i.isLine||i.isPoints||i.material&&!Array.isArray(i.material)&&i.material.transparent&&i.material.depthWrite===!1,yf=class extends ec{setSize(t,e){let n=this.aoScale||1;super.setSize(Math.max(1,Math.round(t*n)),Math.max(1,Math.round(e*n)))}_overrideVisibility(){let t=this._visibilityCache;this.scene.traverse(e=>{e.visible&&(RE(e)||e.userData.noAO)&&(e.visible=!1,t.push(e))})}},p_=2,Qp=class extends qn{constructor(t,e,n){super(),this.scene=t,this.camera=e,this.needsSwap=!1,this.active=!1;let r={type:xn};this.mask=new en(4,4,r),this.b1=new en(2,2,r),this.b2=this.b1.clone(),this.maskMat=new pi({color:"#ffffff",side:An}),this.blur=new Oe({uniforms:{tMap:{value:null},uDir:{value:new _t}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:`uniform sampler2D tMap; uniform vec2 uDir; varying vec2 vUv;
        void main(){ float w0 = .2270, w1 = .1946, w2 = .1216, w3 = .0541, w4 = .0162;
          float s = texture2D(tMap, vUv).r * w0 + (texture2D(tMap, vUv + uDir).r + texture2D(tMap, vUv - uDir).r) * w1 + (texture2D(tMap, vUv + 2. * uDir).r + texture2D(tMap, vUv - 2. * uDir).r) * w2
            + (texture2D(tMap, vUv + 3. * uDir).r + texture2D(tMap, vUv - 3. * uDir).r) * w3 + (texture2D(tMap, vUv + 4. * uDir).r + texture2D(tMap, vUv - 4. * uDir).r) * w4;
          gl_FragColor = vec4(s, s, s, 1.); }`}),this.comp=new Oe({uniforms:{tMask:{value:this.mask.texture},tBlur:{value:this.b2.texture},uC:{value:new Qt(n)},uK:{value:new Qt("#2A1A00")}},transparent:!0,depthTest:!1,depthWrite:!1,blending:kr,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:`uniform sampler2D tMask, tBlur; uniform vec3 uC, uK; varying vec2 vUv;
        void main(){ float m = texture2D(tMask, vUv).r, b = texture2D(tBlur, vUv).r; float o = (1. - m);
          float ring = clamp(b * 3.2, 0., 1.) * o, glow = clamp(b * 1.4, 0., 1.) * o;
          vec3 c = mix(uK, uC, smoothstep(.0, .55, b)); gl_FragColor = vec4(mix(uC, c, .25), max(ring * .95, glow * .5)); }`}),this.q=new er(null)}setSize(t,e){this.mask.setSize(t,e);let n=Math.max(1,t>>1),r=Math.max(1,e>>1);this.b1.setSize(n,r),this.b2.setSize(n,r),this.px=[1/n,1/r]}render(t,e,n){if(!this.active)return;let r=this.camera,s=r.layers.mask,o=this.scene.background,a=this.scene.overrideMaterial,l=t.autoClear,c=t.getClearColor(new Qt),f=t.getClearAlpha();r.layers.set(p_),this.scene.background=null,this.scene.overrideMaterial=this.maskMat,t.autoClear=!1,t.setRenderTarget(this.mask),t.setClearColor(0,1),t.clear(),t.render(this.scene,r),r.layers.mask=s,this.scene.background=o,this.scene.overrideMaterial=a;let p=1.35*(window.devicePixelRatio>1.4?1.4:1);this.blur.uniforms.tMap.value=this.mask.texture,this.blur.uniforms.uDir.value.set(this.px[0]*p,0),this.q.material=this.blur,t.setRenderTarget(this.b1),t.clear(),this.q.render(t),this.blur.uniforms.tMap.value=this.b1.texture,this.blur.uniforms.uDir.value.set(0,this.px[1]*p),t.setRenderTarget(this.b2),t.clear(),this.q.render(t),this.q.material=this.comp,t.setRenderTarget(this.renderToScreen?null:n),this.q.render(t),t.autoClear=l,t.setClearColor(c,f)}dispose(){this.mask.dispose(),this.b1.dispose(),this.b2.dispose(),this.blur.dispose(),this.comp.dispose(),this.maskMat.dispose(),this.q.dispose()}};function m_(i,t,e,n,r,s){let o=Math.cos(e),a=[o*Math.cos(t),o*Math.sin(t),Math.sin(e)],l=[-Math.sin(t),Math.cos(t),0],c=[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]],f=Math.tan(n*rn/2),p=i.length/3;if(!p)return null;let d=1/0,g=-1/0,x=1/0,b=-1/0,_=1/0,y=-1/0,w=new Float32Array(p),m=new Float32Array(p),u=new Float32Array(p);for(let S=0;S<p;S++){let E=i[S*3],T=i[S*3+1],A=i[S*3+2];w[S]=E*l[0]+T*l[1]+A*l[2],m[S]=E*c[0]+T*c[1]+A*c[2],u[S]=E*a[0]+T*a[1]+A*a[2],d=Math.min(d,w[S]),g=Math.max(g,w[S]),x=Math.min(x,m[S]),b=Math.max(b,m[S]),_=Math.min(_,u[S]),y=Math.max(y,u[S])}let v=(d+g)/2,h=(x+b)/2,C=(_+y)/2,M=0;for(let S=0;S<3;S++){M=0;for(let F=0;F<p;F++){let O=(u[F]-C)*f;M=Math.max(M,Math.abs(m[F]-h)/s+O,Math.abs(w[F]-v)/(s*r)+O)}let E=M/f,T=1/0,A=-1/0,R=1/0,L=-1/0;for(let F=0;F<p;F++){let O=(E-(u[F]-C))*f,V=(w[F]-v)/(O*r),$=(m[F]-h)/O;T=Math.min(T,V),A=Math.max(A,V),R=Math.min(R,$),L=Math.max(L,$)}v+=(T+A)/2*M*r*.9,h+=(R+L)/2*M*.9}return{c:new D(l[0]*v+c[0]*h+a[0]*C,l[1]*v+c[1]*h+a[1]*C,l[2]*v+c[2]*h+a[2]*C),F:M}}function g_(i,t=6e4){let e=0;for(let{g:o}of i)e+=o.attributes.position.count;let n=Math.max(1,Math.ceil(e/t)),r=[],s=new D;for(let{g:o,M:a}of i){let l=o.attributes.position;for(let c=0;c<l.count;c+=n)s.fromBufferAttribute(l,c),a&&s.applyMatrix4(a),r.push(s.x,s.y,s.z)}return r}function CE(){try{let i=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&i.getContext("webgl2"))}catch{return!1}}var tm=i=>i?JSON.parse(JSON.stringify(i)):null,Vi=i=>String(Math.round(i*10)/10).replace(".",",").replace("-","\u2212"),PE=i=>(i=((i+180)%360+360)%360-180,Math.abs(i)<1e-9?0:i===-180?180:i),Ls={iso:[-52,28],front:[-90,0],back:[90,0],right:[0,0],left:[180,0],top:[-90,90],bottom:[-90,-90]},Ns=30,x_=16;function IE(i,t){if(t==="high"||t==="low"||t==="mid")return t;let e="";try{let o=i.getContext(),a=o.getExtension("WEBGL_debug_renderer_info");e=a?String(o.getParameter(a.UNMASKED_RENDERER_WEBGL)):""}catch{}let n=navigator.userAgent||"",r=/Android|iPhone|iPad|iPod|Mobile/i.test(n)||navigator.maxTouchPoints>1&&/Macintosh/.test(n);return/SwiftShader|llvmpipe|softpipe|Mali-[4T]|Adreno \(TM\) [2-5]\d\d|PowerVR|Intel.*HD Graphics [2-5]\d{2,3}\b/i.test(e)||navigator.deviceMemory&&navigator.deviceMemory<=2||r&&navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4?"low":r?"mid":"high"}var DE={high:{dpr:2,ao:!0,sh:2048,seg:64},mid:{dpr:1.6,ao:!0,sh:2048,seg:56},low:{dpr:1.25,ao:!1,sh:1024,seg:40}};function q3(i,t={}){try{return NE(i,t)}catch(e){return typeof console<"u"&&console.warn("m3 view",e),LE(t)}}function LE(){let i=null,t=()=>{};return{ok:!1,set(e){i=tm(e)},mode:t,select:t,target:t,view:t,fit:t,measure:t,snapshot:()=>"",resize:t,dispose:t,stl(){let e=new da,n=e.solid(i);return e.dispose(),c_(n.attributes.position?n:new Le().setAttribute("position",new Te([],3)))}}}function NE(i,t){let e=Object.assign({plate:200,snap:1,snapRot:15,quality:"auto",mode:"edit",editable:!0,bg:"studio",intro:!0,view:"iso",spin:!1},t),n=Math.max(60,Qe(e.plate,200)),r=new Pl({antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),s=IE(r,e.quality),o=DE[s];r.outputColorSpace=Rn,r.toneMapping=Hr,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=Vr,r.shadowMap.autoUpdate=!1;let a=r.domElement;a.className="m3c",Object.assign(a.style,{display:"block",width:"100%",height:"100%",touchAction:"none",outline:"none",cursor:"default"}),getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(a);let l=document.createElement("div");l.className="m3hud",Object.assign(l.style,{position:"absolute",left:"0",top:"0",right:"0",bottom:"0",pointerEvents:"none",overflow:"hidden",fontFamily:"Lexend, system-ui, sans-serif"}),i.appendChild(l);let c=new pr,f=new Tn(Ns,1,1,6e3);f.up.set(0,0,1);let p=h_(e.bg),d=ME(e.bg);c.add(d),d.onBeforeRender=(I,W,Y)=>{d.position.copy(Y.position),d.scale.setScalar(Y.far*.9),d.updateMatrixWorld(),I.getDrawingBufferSize(d.material.uniforms.uRes.value)};let g=new vs(r),x=new $l,b=g.fromScene(x,.035);x.dispose(),g.dispose(),c.environment=b.texture,c.environmentIntensity=e.bg==="workshop"?.55:.6,c.environmentRotation.set(Math.PI/2,0,0),e.bg==="workshop"&&(c.fog=new Ua(jp.workshop.floor,n*3.2,n*8));let _=new Or(e.bg==="workshop"?"#FFE9CC":"#FFF5E8",3.1);_.position.set(-n*.55,-n*1.15,n*2.1),_.castShadow=!0,_.shadow.mapSize.set(o.sh,o.sh);let y=n/2+40;Object.assign(_.shadow.camera,{left:-y,right:y,top:y,bottom:-y,near:n*.5,far:n*5}),_.shadow.camera.updateProjectionMatrix(),_.shadow.bias=-2e-4,_.shadow.normalBias=.35,_.shadow.radius=3,_.shadow.intensity=.85;let w=new Or("#DCE8FF",.75);w.position.set(n*.9,n*1.3,n*.9);let m=new Ao("#F4F8FF","#9A8E80",.3);m.position.set(0,0,1),c.add(_,w,m);let u=wE(n,s,e.bg);c.add(u);let v=new Fn,h=new Fn,C=new Fn,M=new Fn,S=new Fn,E=new Fn;c.add(v,h,C,E);let T=new pr;T.add(M,S);let A=r.extensions.has("EXT_color_buffer_float")||r.extensions.has("EXT_color_buffer_half_float"),R=new en(4,4,{type:A?Sn:xn,samples:r.capabilities.maxSamples>=4?4:0});A||(o=Object.assign({},o,{ao:!1}));let L=new Kl(r,R);L.addPass(new oa(c,f));let F=new yf(c,f,4,4);F.updateGtaoMaterial({radius:15,distanceExponent:1.1,thickness:10,distanceFallOff:1,scale:1.7,samples:s==="high"?16:10,screenSpaceRadius:!1}),F.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:7,rings:2,samples:s==="high"?16:8}),F.blendIntensity=1,F.enabled=o.ao,L.addPass(F);let O=new Qp(c,f,nn.sel);L.addPass(O);let V=new oa(T,f);V.clear=!1,V.clearDepth=!0,L.addPass(V),L.addPass(new ic);let $={layers:{value:0}},k=new Map,tt=I=>{let W=um(I).getHexString(),Y=k.get(W);return Y||(Y=d_("#"+W,$),k.set(W,Y)),Y},q=EE(),ct=TE(),ut=ts("#4A5468",1.3,{opacity:.7}),Et=ts("#4A5468",1,{opacity:.22,depthTest:!1}),Mt=ts(nn.ghost,1.6,{opacity:.7}),kt=new Oe({uniforms:{uC:{value:new Qt(nn.sel)}},transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.); vV = -mv.xyz; vN = normalMatrix * normal; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 uC; varying vec3 vN; varying vec3 vV; void main(){ float f = 1. - abs(dot(normalize(vN), normalize(vV))); gl_FragColor = vec4(uC, .05 + .4 * pow(f, 2.5)); }"}),N={cv:1,cvSh:0,resIntro:!0,model:null,map:new Map,order:[],sel:[],mode:e.mode==="result"?"result":"edit",measure:!1,first:!0,resDirty:!0,lastRes:0,ghost:null,drag:null,hover:null,W:1,H:1,alive:!0,dirty:!0,lost:!1,userCam:!1},Q=new da({seg:o.seg,matFor:(I,W,Y)=>tt(W&&Y&&Y.c||I.c)}),lt=new da({seg:o.seg,matFor:()=>ct}),vt=new ae(new Le,[]);vt.castShadow=vt.receiveShadow=!0,h.add(vt);let st={az:Ls.iso[0]*rn,el:Ls.iso[1]*rn,F:70,fov:Ns,t:new D(0,0,10)},dt={az:st.az,el:st.el,F:st.F,fov:st.fov,t:st.t.clone()},Bt={elMin:-12*rn,elMax:90*rn,Fmin:6,Fmax:n*1.05},j={az:0,el:0},rt=0,ot=(I,W)=>{let Y=Math.cos(W),z=new D(Y*Math.cos(I),Y*Math.sin(I),Math.sin(W)),ft=new D(-Math.sin(I),Math.cos(I),0),gt=new D().crossVectors(z,ft);return{o:z,r:ft,u:gt}},ht=new Wt;function bt(){let{o:I,r:W,u:Y}=ot(st.az,st.el),z=Math.tan(st.fov*rn/2),ft=st.F/z;f.position.copy(st.t).addScaledVector(I,ft),ht.makeBasis(W,Y,I),f.quaternion.setFromRotationMatrix(ht),f.fov=st.fov,f.aspect=N.W/N.H,f.near=Math.max(.5,ft*.03),f.far=ft+n*6,f.updateProjectionMatrix(),f.updateMatrixWorld(!0)}function Pt(I){if(j.az||j.el){dt.az+=j.az*I,dt.el=Ze(dt.el+j.el*I,Bt.elMin,Bt.elMax);let z=Math.exp(-I*4.2);j.az*=z,j.el*=z,Math.abs(j.az)+Math.abs(j.el)<.02&&(j.az=j.el=0)}let W=1-Math.exp(-I*(rt?6:18)),Y=!!(j.az||j.el);for(let z of["az","el","F","fov"]){let ft=dt[z]-st[z];Math.abs(ft)>(z==="F"?.001:1e-4)?(st[z]+=ft*W,Y=!0):st[z]=dt[z]}return st.t.distanceToSquared(dt.t)>1e-6?(st.t.lerp(dt.t,W),Y=!0):st.t.copy(dt.t),Y||(rt=0),bt(),Y}function Tt(I,W,Y,z,ft=.8){let{o:gt,r:Lt,u:yt}=ot(W,Y),ie=Math.tan(z*rn/2),ee=I.getCenter(new D),Gt=N.W/N.H,ue=0;for(let Je of[I.min.x,I.max.x])for(let Be of[I.min.y,I.max.y])for(let Ee of[I.min.z,I.max.z]){let Ke=new D(Je-ee.x,Be-ee.y,Ee-ee.z);ue=Math.max(ue,Math.max(Math.abs(Ke.dot(yt)),Math.abs(Ke.dot(Lt))/Gt)/ft+Ke.dot(gt)*ie)}return Ze(ue,Bt.Fmin,Bt.Fmax)}function Ut(){let I=new Me;for(let ft of N.map.values())I.union(Hi(ft));N.ghost&&I.union(N.ghost.box),I.isEmpty()&&I.set(new D(-45,-45,0),new D(45,45,20));let W=I.getCenter(new D),Y=I.getSize(new D),z=46;return I.expandByVector(new D(Math.max(0,z-Y.x)/2,Math.max(0,z-Y.y)/2,Math.max(0,12-Y.z)/2)),I.min.z<0&&W.z>0&&(I.min.z=Math.min(I.min.z,0)),I}function Ft(I){let W=[];for(let ft of N.map.values())W.push({g:ft.mesh.geometry,M:ft.M});N.ghost&&W.push({g:N.ghost.g});let Y=g_(W),z=Y.length?m_(Y,dt.az,dt.el,dt.fov,N.W/N.H,.82):null;if(z)dt.t.copy(z.c),dt.F=Ze(Math.max(z.F,26),Bt.Fmin,Bt.Fmax);else{let ft=Ut();dt.t.copy(ft.getCenter(new D)),dt.F=Tt(ft,dt.az,dt.el,dt.fov)}I?(Object.assign(st,{az:dt.az,el:dt.el,F:dt.F,fov:dt.fov}),st.t.copy(dt.t)):rt=1,De()}function H(I,W){let Y=Ls[I]||Ls.iso;N.viewName=Ls[I]?I:"iso";let z=Y[0]*rn;for(;z-st.az>Math.PI;)z-=2*Math.PI;for(;z-st.az<-Math.PI;)z+=2*Math.PI;dt.az=z,dt.el=Ze(Y[1]*rn,Bt.elMin,Bt.elMax),dt.fov=N.viewName==="iso"?Ns:x_,j.az=j.el=0,Ft(W)}let de=new Wt,qt=new Wt;function B(I){let W=new ae(void 0,tt(u_));W.matrixAutoUpdate=!1,W.castShadow=W.receiveShadow=!0;let Y={id:I,mesh:W,M:new Wt,key:"",back:null,edges:null,anim:null,proxy:null};return W.userData.e=Y,v.add(W),Y}function P(I){N.cv++;let W=I.M;if(I.anim&&I.anim.t<1){let z=Math.max(0,I.anim.t),ft=X(z)*I.anim.h;qt.makeTranslation(0,0,ft),W=de.multiplyMatrices(qt,I.M)}let Y=!(I.anim&&I.anim.t<0);for(let z of[I.mesh,I.back,I.edges])z&&(z.visible=Y);for(let z of[I.mesh,I.back,I.edges,I.proxy])z&&(z.matrix.copy(W),z.matrixWorld.copy(W))}let X=I=>I<.62?1-(I/.62)**2:(()=>{let W=(I-.62)/.38;return .09*4*W*(1-W)})();function K(I,W,Y){I.q=W,I.hole=Y,I.fixed=Array.isArray(W.m)&&W.m.length===16;let z=sm(W,o.seg)+(Y?"|H":"|S");if(z!==I.key&&(I.key=z,I.mesh.geometry=Y?a_(W,o.seg):dE(W,o.seg),I.edges&&(I.edges.removeFromParent(),I.edges.geometry.dispose(),I.edges=null),I.back&&(I.back.geometry=I.mesh.geometry),I.proxy&&(I.proxy.geometry=I.mesh.geometry)),o_(W,I.M),Y){if(I.mesh.material=q.front,I.mesh.castShadow=!1,I.mesh.renderOrder=4,I.back||(I.back=new ae(I.mesh.geometry,q.back),I.back.matrixAutoUpdate=!1,I.back.renderOrder=3,v.add(I.back)),!I.edges){let ft=AE(I.mesh.geometry,z);I.edges=es(ft,ut),I.edges.matrixAutoUpdate=!1,I.edges.renderOrder=5,v.add(I.edges);let gt=es(ft,Et);gt.matrixAutoUpdate=!1,gt.renderOrder=5,I.edges.add(gt)}}else I.mesh.material=tt(W.c),I.mesh.castShadow=!0,I.mesh.renderOrder=0,I.back&&(I.back.removeFromParent(),I.back=null),I.edges&&(I.edges.removeFromParent(),I.edges.geometry.dispose(),I.edges=null);P(I)}function it(I){for(let W of[I.mesh,I.back,I.edges,I.proxy])W&&W.removeFromParent();I.edges&&I.edges.geometry.dispose()}function St(I){N.model=tm(I)||{parts:[]};let W=uE(N.model),Y=new Set,z=!pf&&e.intro!==!1,ft=0;for(let{q:gt,id:Lt,hole:yt}of W){if(Y.has(Lt))continue;Y.add(Lt);let ie=N.map.get(Lt);ie||(ie=B(Lt),N.map.set(Lt,ie),z&&!(N.drag&&N.drag.id===Lt)&&(ie.anim={t:-(N.first?Math.min(ft*.07,.9):0),h:N.first?34:46})),K(ie,gt,yt),ft++}for(let[gt,Lt]of N.map)Y.has(gt)||(it(Lt),N.map.delete(gt));N.order=W.map(gt=>gt.id),N.sel.some(gt=>!N.map.has(gt))&&$t(N.sel.filter(gt=>N.map.has(gt)),!1),N.first&&(N.first=!1,N.userCam||H(N.viewName||e.view||"iso",!0)),N.resDirty=!0,Ct(),De()}function At(I){N.cv++,N.mode=I==="result"?"result":"edit",$.layers.value=N.mode==="result"?1:0,N.resDirty=!0,at(),De()}function at(){v.visible=N.mode==="edit",h.visible=N.mode==="result"}function pt(){let I=Q.run(N.model);vt.geometry.dispose(),vt.geometry=I.g,vt.material=I.mat,N.cv++,N.resDirty=!1,N.lastRes=performance.now(),N.resMs=I.ms,N.resIntro&&I.g.attributes.position&&I.g.attributes.position.count&&(N.resIntro=!1,!pf&&e.intro!==!1&&N.mode==="result"&&(N.resAnim={t:0}))}function Dt(I){if(C.children.slice().forEach(W=>{W.removeFromParent(),W.geometry&&W.geometry.dispose()}),N.ghost=null,I&&_f(I)){let W=lt.run(I);if(W.g.attributes.position){let Y=new ae(W.g,ct);Y.renderOrder=2,Y.userData.fx=1,C.add(Y);let z=cm(W.g),ft=new Mo(z,22),gt=es(Array.from(ft.attributes.position.array),Mt);z.dispose(),ft.dispose(),gt.renderOrder=2,C.add(gt),N.ghost={box:W.g.boundingBox.clone(),g:W.g}}}!N.userCam&&!N.first&&Ft(),De()}function $t(I,W){I=[].concat(I??[]).map(String).filter(z=>N.map.has(z));let Y=I.length===N.sel.length&&I.every((z,ft)=>z===N.sel[ft]);N.sel=I,Ct(),W&&!Y&&e.onPick&&e.onPick(I.length?I[0]:null),De()}function Ct(){for(let I of N.map.values()){let W=N.sel.includes(I.id);W&&!I.proxy?(I.proxy=new ae(I.mesh.geometry,kt),I.proxy.matrixAutoUpdate=!1,I.proxy.userData.noAO=1,I.proxy.userData.fx=1,I.proxy.castShadow=!1,I.proxy.renderOrder=6,I.proxy.layers.enable(p_),E.add(I.proxy),P(I)):!W&&I.proxy&&(I.proxy.removeFromParent(),I.proxy=null)}O.active=N.sel.length>0}let Rt=()=>N.sel.length===1?N.map.get(N.sel[0]):null,Zt=Us(64,64,(I,W)=>{I.shadowColor="rgba(10,20,50,.45)",I.shadowBlur=6,I.shadowOffsetY=2,I.fillStyle="#FFFFFF",I.strokeStyle=nn.ink,I.lineWidth=6;let Y=10,z=12,ft=10,gt=40;I.beginPath(),I.moveTo(z+Y,ft),I.arcTo(z+gt,ft,z+gt,ft+gt,Y),I.arcTo(z+gt,ft+gt,z,ft+gt,Y),I.arcTo(z,ft+gt,z,ft,Y),I.arcTo(z,ft,z+gt,ft,Y),I.closePath(),I.fill(),I.shadowColor="transparent",I.stroke()}),te=Us(64,64,(I,W)=>{I.shadowColor="rgba(10,20,50,.45)",I.shadowBlur=6,I.shadowOffsetY=2,I.fillStyle=nn.sel,I.strokeStyle=nn.ink,I.lineWidth=6;let Y=10,z=12,ft=10,gt=40;I.beginPath(),I.moveTo(z+Y,ft),I.arcTo(z+gt,ft,z+gt,ft+gt,Y),I.arcTo(z+gt,ft+gt,z,ft+gt,Y),I.arcTo(z,ft+gt,z,ft,Y),I.arcTo(z,ft,z+gt,ft,Y),I.closePath(),I.fill(),I.shadowColor="transparent",I.stroke()}),re=[[1,1,-1],[-1,1,-1],[-1,-1,-1],[1,-1,-1],[1,0,-1],[-1,0,-1],[0,1,-1],[0,-1,-1],[0,0,1]],J=re.map((I,W)=>{let Y=new za(new vo({map:Zt,depthTest:!1,depthWrite:!1,sizeAttenuation:!1,transparent:!0}));return Y.renderOrder=20,Y.userData={fx:1,ax:I,px:W<4||W===8?15:12},M.add(Y),Y}),wt=new Fn;{let I=new Xa(.42,.9,28);I.rotateX(Math.PI/2),I.translate(0,0,.95);let W=new Dr(.09,.09,.55,12);W.rotateX(Math.PI/2),W.translate(0,0,.25);let Y=new pi({color:nn.ink,depthTest:!1,depthWrite:!1,transparent:!0});wt.add(new ae(I,Y),new ae(W,Y)),wt.children.forEach(z=>{z.renderOrder=19,z.userData.fx=1}),wt.userData={mat:Y},M.add(wt)}let mt=(()=>{let I=[];for(let W=0;W<96;W++){let Y=W/96*Math.PI*2,z=(W+1)/96*Math.PI*2;I.push(Math.cos(Y),Math.sin(Y),0,Math.cos(z),Math.sin(z),0)}return I})(),It=nn.ax.map((I,W)=>{let Y=es(mt,ts(I,2.2,{depthTest:!1}));return Y.material.transparent=!1,Y.renderOrder=18,Y.matrixAutoUpdate=!1,Y.userData.i=W,M.add(Y),Y}),Ht=(()=>{let I=[];for(let W=0;W<24;W++){let Y=W/24*Math.PI*2,z=W%6?.94:.9;I.push(Math.cos(Y)*z,Math.sin(Y)*z,0,Math.cos(Y),Math.sin(Y),0)}return I})(),xt=es(Ht,ts(nn.ink,1.6,{depthTest:!1}));xt.material.transparent=!1,xt.matrixAutoUpdate=!1,xt.renderOrder=18,xt.visible=!1,M.add(xt);let ne=new Le;ne.setAttribute("position",new We(new Float32Array(576),3));let Vt=new ae(ne,new pi({color:nn.sel,transparent:!0,opacity:.28,depthTest:!1,depthWrite:!1,side:An}));Vt.matrixAutoUpdate=!1,Vt.renderOrder=17,Vt.visible=!1,Vt.userData.fx=1,M.add(Vt);let we=new ae(new mi(1,1),new pi({color:nn.sel,transparent:!0,opacity:.2,depthWrite:!1}));we.userData.fx=1,we.visible=!1,we.renderOrder=1,E.add(we);let ve=es([-.5,-.5,0,.5,-.5,0,.5,-.5,0,.5,.5,0,.5,.5,0,-.5,.5,0,-.5,.5,0,-.5,-.5,0],ts(nn.sel,2,{opacity:.95}));ve.visible=!1,E.add(ve),M.visible=!1;let le={rot:new Wt,c:new D,a:0,b:0,h:0,R:10,n:[new D,new D,new D],rq:[new Bn,new Bn,new Bn]},Ln=I=>{let W=Fs.copy(I).applyMatrix4(f.matrixWorldInverse).z;return Math.abs(W)*2*Math.tan(f.fov*rn/2)/N.H},Fs=new D,pa=new D,br=new D,ac=new Bn,Bs=new D(0,0,1);function Os(I){let W=I.q,[Y,z,ft]=Sr(W);le.a=Y/2,le.b=z/2,le.h=ft/2,le.rot.extractRotation(I.M),le.c.setFromMatrixPosition(I.M);let gt=(Array.isArray(W.r)?W.r:[0,0,0]).map(Lt=>Qe(Lt,0)*rn);le.n[2].set(0,0,1),le.n[1].set(0,1,0).applyAxisAngle(Bs,gt[2]),le.n[0].set(1,0,0).applyAxisAngle(new D(0,1,0),gt[1]).applyAxisAngle(Bs,gt[2]);for(let Lt=0;Lt<3;Lt++)le.rq[Lt].setFromUnitVectors(Bs,le.n[Lt])}let wr=(I,W)=>W.set(I[0]*le.a,I[1]*le.b,I[2]*le.h).applyMatrix4(le.rot).add(le.c);function sr(){let I=Rt(),W=!!(I&&e.editable&&!I.fixed&&!I.anim);if(M.visible=W,!W)return;Os(I);let Y=Math.tan(f.fov*rn/2),z=N.drag,ft=Vn(wr(re[0],Fs)),gt=Vn(wr(re[2],pa)),Lt=Vn(wr(re[8],br)),yt=Math.max(Math.hypot(ft[0]-gt[0],ft[1]-gt[1]),Math.hypot(ft[0]-Lt[0],ft[1]-Lt[1])),ie=yt<130,ee=yt<(N.touch?80:56);J.forEach((Ee,Ke)=>{wr(Ee.userData.ax,Ee.position);let ye=Ee.userData.px*2*Y/N.H;Ee.scale.set(ye,ye,1),Ee.material.map=N.hover===Ee||z&&z.h===Ee?te:Zt,Ee.visible=(!z||z.h===Ee)&&!ee&&!(ie&&Ke>=4&&Ke<8)});let Gt=Hi(I),ue=new D(le.c.x,le.c.y,Gt.max.z),Je=Ln(ue);wt.position.copy(ue).add(new D(0,0,24*Je)),wt.scale.setScalar(26*Je),wt.userData.mat.color.set(N.hover===wt||z&&z.h===wt?nn.sel:nn.ink),wt.visible=!z||z.h===wt;let Be=Math.hypot(le.a,le.b,le.h)+16*Ln(le.c);le.R=Be,It.forEach((Ee,Ke)=>{Ee.matrix.compose(le.c,le.rq[Ke],new D(Be,Be,Be)),Ee.matrixWorld.copy(Ee.matrix);let ye=N.hover===Ee||z&&z.h===Ee;Ee.material.linewidth=ye?4.2:2.2,Ee.visible=!z||z.h===Ee}),z&&z.k==="rot"?(xt.visible=Vt.visible=!0,xt.matrix.compose(le.c,le.rq[z.i],new D(Be,Be,Be)),xt.matrixWorld.copy(xt.matrix),Vt.matrix.copy(xt.matrix),Vt.matrixWorld.copy(xt.matrix)):xt.visible=Vt.visible=!1}function Hi(I){let W=I.mesh.geometry;return W.boundingBox||W.computeBoundingBox(),W.boundingBox.clone().applyMatrix4(I.M)}function Vn(I){return br.copy(I).project(f),[(br.x+1)/2*N.W,(1-br.y)/2*N.H,br.z]}function ns(I,W,Y){if(!M.visible)return null;let z=Y?22:12,ft=null,gt=1e9,Lt=(yt,ie)=>{ie<gt&&(gt=ie,ft=yt)};for(let yt of J){if(!yt.visible)continue;let[ie,ee,Gt]=Vn(yt.position);if(Gt>1)continue;let ue=Math.hypot(ie-I,ee-W)-yt.userData.px*.5;ue<z&&Lt(yt,ue)}{let yt=Vn(wt.position),ie=Vn(Fs.copy(wt.position).add(pa.set(0,0,wt.scale.z*1.4))),ee=is(I,W,yt,ie)-5;ee<z&&Lt(wt,ee)}for(let yt of It){let ie=1e9,ee=null;for(let Gt=0;Gt<=64;Gt++){let ue=Gt/64*Math.PI*2,Je=Vn(Fs.set(Math.cos(ue),Math.sin(ue),0).applyMatrix4(yt.matrix));ee&&(ie=Math.min(ie,is(I,W,ee,Je))),ee=Je}ie<z*.8&&Lt(yt,ie+2)}return ns.d=gt,ft}let is=(I,W,Y,z)=>{let ft=z[0]-Y[0],gt=z[1]-Y[1],Lt=ft*ft+gt*gt||1,yt=Ze(((I-Y[0])*ft+(W-Y[1])*gt)/Lt,0,1);return Math.hypot(Y[0]+ft*yt-I,Y[1]+gt*yt-W)},zs=new ul,rs=new _t;function Vs(I,W){return rs.set(I/N.W*2-1,-(W/N.H)*2+1),zs.setFromCamera(rs,f),zs.ray}function or(I,W,Y,z){let ft=Vs(I,W),gt=ft.direction.dot(Y);if(Math.abs(gt)<1e-6)return null;let Lt=pa.copy(z).sub(ft.origin).dot(Y)/gt;return Lt>0?ft.origin.clone().addScaledVector(ft.direction,Lt):null}function lc(I,W){Vs(I,W);let Y=[];for(let gt of N.order){let Lt=N.map.get(gt);Lt&&Y.push(Lt.mesh)}let z=zs.intersectObjects(Y,!1),ft=N.mode==="result"&&z.find(gt=>!gt.object.userData.e.hole)||z[0];return ft?{e:ft.object.userData.e,point:ft.point}:null}let ss=I=>{let W=Qe(e.snap,1);return W>0?Math.round(I/W)*W:I},Gi=I=>Math.round(I*1e3)/1e3;function cc(I,W,Y,z,ft,gt){let Lt=W.q,yt={k:I,id:W.id,e:W,h:ft,x0:Y,y0:z,p0:(Lt.p||[0,0,0]).map(Gt=>Qe(Gt,0)),s0:Sr(Lt).slice(),r0:(Lt.r||[0,0,0]).map(Gt=>Qe(Gt,0)),last:""};Os(W),yt.rot=le.rot.clone(),yt.rotT=le.rot.clone().transpose(),yt.c=le.c.clone();let ie=f.getWorldDirection(new D),ee=new D(ie.x,ie.y,0);if(I==="move")yt.vert=Math.abs(ie.z)<.26,yt.n=yt.vert?ee.normalize():Bs.clone(),yt.pp=gt.clone(),yt.hit0=or(Y,z,yt.n,yt.pp)||gt.clone(),yt.vert&&(yt.r=ot(st.az,st.el).r);else if(I==="lift")yt.top=ee.lengthSq()<1e-4,yt.n=yt.top?null:ee.normalize(),yt.pp=yt.c.clone(),yt.hit0=yt.top?null:or(Y,z,yt.n,yt.pp),yt.pw=Ln(yt.c);else if(I==="rot")yt.i=ft.userData.i,yt.n=le.n[yt.i].clone(),yt.u=new D(1,0,0).applyQuaternion(le.rq[yt.i]),yt.v=new D(0,1,0).applyQuaternion(le.rq[yt.i]),yt.acc=0,yt.prev=ma(yt,Y,z),yt.a0=yt.prev??0;else if(I==="scale"){yt.ax=ft.userData.ax;let Gt=new D(0,0,1).applyMatrix4(yt.rot);if(yt.ax[2]===1){let ue=ie.clone().addScaledVector(Gt,-ie.dot(Gt));yt.n=ue.lengthSq()>1e-4?ue.normalize():ot(st.az,st.el).u,yt.pp=yt.c.clone()}else yt.n=Gt,yt.pp=wr(yt.ax,new D)}yt.last=JSON.stringify(I==="rot"?{r:yt.r0}:I==="scale"?{s:yt.s0,p:yt.p0}:{p:yt.p0}),N.drag=yt,j.az=j.el=0,De()}function ma(I,W,Y){let z=Vs(W,Y);if(Math.abs(z.direction.dot(I.n))<.14)return null;let ft=or(W,Y,I.n,I.c);return ft?(ft.sub(I.c),Math.atan2(ft.dot(I.v),ft.dot(I.u))):null}function U(I,W,Y){let z=N.drag,ft=z.e,gt=null,Lt="";if(z.k==="move"){let ie=or(I,W,z.n,z.pp);if(!ie)return;let ee=ie.sub(z.hit0),Gt,ue;if(z.vert){let Ee=ee.dot(z.r);Gt=z.r.x*Ee,ue=z.r.y*Ee,Math.abs(z.r.x)>.92&&(ue=0),Math.abs(z.r.y)>.92&&(Gt=0)}else Gt=ee.x,ue=ee.y;Y.altKey||(Gt=ss(Gt),ue=ss(ue));let Je=n*.75,Be=[Gi(Ze(z.p0[0]+Gt,-Je,Je)),Gi(Ze(z.p0[1]+ue,-Je,Je)),z.p0[2]];gt={p:Be},Lt=`x ${Vi(Be[0])}  \xB7  y ${Vi(Be[1])}`}else if(z.k==="lift"){let ie;if(z.top)ie=-(W-z.y0)*z.pw;else{let Je=or(I,W,z.n,z.pp);if(!Je||!z.hit0)return;ie=Je.z-z.hit0.z}Y.altKey||(ie=ss(ie));let ee=[z.p0[0],z.p0[1],Gi(Ze(z.p0[2]+ie,-n*.5,n*1.5))];gt={p:ee};let Gt=Hi(ft),ue=Gt.min.z+(ee[2]-Qe(ft.q.p&&ft.q.p[2],0));Lt=`\u2191 ${Vi(ue)} mm`}else if(z.k==="rot"){let ie=ma(z,I,W);if(ie==null){let ye=(I-(z.lx??z.x0)-(W-(z.ly??z.y0)))*.012;z.acc+=ye}else if(z.prev!=null){let ye=ie-z.prev;for(;ye>Math.PI;)ye-=2*Math.PI;for(;ye<-Math.PI;)ye+=2*Math.PI;z.acc+=ye}z.prev=ie,z.lx=I,z.ly=W;let ee=Y.shiftKey?1:Qe(e.snapRot,15),Gt=Math.round(z.acc/rn/ee)*ee,ue=z.r0.slice();ue[z.i]=PE(z.r0[z.i]+Gt),gt={r:ue},Lt=`${Gt>0?"+":Gt<0?"\u2212":""}${Math.abs(Gt)}\xB0`;let Je=Vt.geometry.attributes.position.array,Be=64,Ee=z.a0,Ke=z.a0+Gt*rn;Je.fill(0);for(let ye=0;ye<Be;ye++){let Er=Ee+(Ke-Ee)*ye/Be,Hs=Ee+(Ke-Ee)*(ye+1)/Be;Je.set([0,0,0,Math.cos(Er)*.88,Math.sin(Er)*.88,0,Math.cos(Hs)*.88,Math.sin(Hs)*.88,0],ye*9)}Vt.geometry.attributes.position.needsUpdate=!0,Vt.geometry.computeBoundingSphere(),Vt.material.color.set(nn.ax[z.i])}else if(z.k==="scale"){let ie=or(I,W,z.n,z.pp);if(!ie)return;let ee=ie.sub(z.c).applyMatrix4(z.rotT),Gt=z.s0.slice(),ue=[0,0,0],Je=Math.max(.5,Qe(e.snap,1));for(let Ke=0;Ke<3;Ke++){let ye=z.ax[Ke];if(!ye)continue;let Er=-ye*z.s0[Ke]/2,Xi=((Ke===0?ee.x:Ke===1?ee.y:ee.z)-Er)*ye;Xi=Y.altKey?Xi:ss(Xi),Xi=Math.max(Je,Xi),Gt[Ke]=Gi(Xi),ue[Ke]=Er+ye*Xi/2}if(Y.shiftKey&&z.ax[0]&&z.ax[1]){let Ke=Math.max(Gt[0]/z.s0[0],Gt[1]/z.s0[1]);for(let ye=0;ye<2;ye++)Gt[ye]=Gi(Math.max(Je,ss(z.s0[ye]*Ke))),ue[ye]=-z.ax[ye]*z.s0[ye]/2+z.ax[ye]*Gt[ye]/2}let Be=new D(...ue).applyMatrix4(z.rot),Ee=[Gi(z.p0[0]+Be.x),Gi(z.p0[1]+Be.y),Gi(z.p0[2]+Be.z)];gt={s:Gt,p:Ee},Lt=z.ax[2]?`${Vi(Gt[2])} mm`:z.ax[0]&&z.ax[1]?`${Vi(Gt[0])} \xD7 ${Vi(Gt[1])} mm`:`${Vi(z.ax[0]?Gt[0]:Gt[1])} mm`}if(!gt)return;let yt=JSON.stringify(gt);yt!==z.last&&(z.last=yt,z.moved=!0,Object.assign(ft.q,gt),K(ft,ft.q,ft.hole),Ct(),N.resDirty=!0,e.onMove&&e.onMove(ft.id,tm(gt))),Xt(Lt,I,W),De()}function Z(){let I=N.drag;N.drag=null,Xt(null),we.visible=ve.visible=!1,I&&I.moved&&e.onDone&&e.onDone(I.id,I.k),N.resDirty=!0,De()}let nt=new Map,G=null,et=0,Ot=I=>{let W=a.getBoundingClientRect();return[I.clientX-W.left,I.clientY-W.top]};function Yt(I){if(N.lost)return;try{a.setPointerCapture(I.pointerId)}catch{}let[W,Y]=Ot(I);if(nt.set(I.pointerId,{x:W,y:Y}),j.az=j.el=0,rt=0,N.lastUser=performance.now(),nt.size===2){if(G&&G.k==="drag")return;let[Lt,yt]=[...nt.values()];G={k:"pinch",d0:Math.hypot(Lt.x-yt.x,Lt.y-yt.y)||1,m0:[(Lt.x+yt.x)/2,(Lt.y+yt.y)/2],F0:dt.F,t0:dt.t.clone()};return}if(nt.size>2)return;let z=I.pointerType!=="mouse";if(N.touch!==z&&(N.touch=z,De()),I.button===2||I.button===1){G={k:"pan",x:W,y:Y,lx:W,ly:Y,moved:!1};return}let ft=e.editable?ns(W,Y,z):null,gt=lc(W,Y);if(!ft&&!gt&&(I.shiftKey||I.ctrlKey||I.metaKey)){G={k:"pan",x:W,y:Y,lx:W,ly:Y,moved:!1};return}if(ft&&z&&gt&&N.sel.includes(gt.e.id)&&ns.d>6&&(ft=null),ft){G={k:"giz",h:ft,x0:W,y0:Y,moved:!1},N.hover=ft,De();return}gt?G={k:"part",e:gt.e,point:gt.point,x0:W,y0:Y,lx:W,ly:Y,moved:!1,can:e.editable&&!gt.e.fixed&&(I.pointerType==="mouse"||N.sel.includes(gt.e.id))}:G={k:"orbit",x0:W,y0:Y,lx:W,ly:Y,lt:performance.now(),moved:!1}}function zt(I){let W=nt.get(I.pointerId),[Y,z]=Ot(I);if(!W){I.pointerType==="mouse"&&Re(Y,z);return}if(W.x=Y,W.y=z,!G)return;if(G.k==="pinch"){if(nt.size<2)return;let[gt,Lt]=[...nt.values()],yt=Math.hypot(gt.x-Lt.x,gt.y-Lt.y)||1,ie=[(gt.x+Lt.x)/2,(gt.y+Lt.y)/2];dt.F=Ze(G.F0*G.d0/yt,Bt.Fmin,Bt.Fmax);let{r:ee,u:Gt}=ot(dt.az,dt.el),ue=2*dt.F/N.H;dt.t.copy(G.t0).addScaledVector(ee,-(ie[0]-G.m0[0])*ue).addScaledVector(Gt,(ie[1]-G.m0[1])*ue),jt(),N.userCam=!0,De();return}let ft=I.pointerType==="mouse"?3:7;if(G.k==="giz"){if(!G.moved&&Math.hypot(Y-G.x0,z-G.y0)<ft)return;if(!G.moved){G.moved=!0;let gt=G.h===wt?"lift":It.includes(G.h)?"rot":"scale";cc(gt,Rt(),G.x0,G.y0,G.h),G.k="drag"}}if(G.k==="part"){if(Math.hypot(Y-G.x0,z-G.y0)<ft)return;G.can?(N.sel.includes(G.e.id)||$t(G.e.id,!0),cc("move",G.e,G.x0,G.y0,null,G.point),G.k="drag"):G={k:"orbit",x0:G.x0,y0:G.y0,lx:G.lx,ly:G.ly,lt:performance.now(),moved:!0}}if(G.k==="drag"){N.drag&&U(Y,z,I);return}if(G.k==="orbit"){if(!G.moved&&Math.hypot(Y-G.x0,z-G.y0)<ft)return;G.moved=!0,N.userCam=!0;let gt=Y-G.lx,Lt=z-G.ly,yt=performance.now(),ie=Math.max(1,yt-G.lt)/1e3,ee=(I.pointerType==="mouse"?5.2:5.4)/Math.max(320,Math.min(N.W,N.H)*1.6),Gt=-gt*ee*1.1,ue=Lt*ee;dt.az+=Gt,dt.el=Ze(dt.el+ue,Bt.elMin,Bt.elMax),dt.fov!==Ns&&(dt.fov=Ns,N.viewName="iso"),G.vaz=(G.vaz||0)*.5+Gt/ie*.5,G.vel=(G.vel||0)*.5+ue/ie*.5,G.lx=Y,G.ly=z,G.lt=yt,De();return}if(G.k==="pan"){let gt=Y-G.lx,Lt=z-G.ly;G.lx=Y,G.ly=z,G.moved=G.moved||Math.hypot(Y-G.x,z-G.y)>ft,Jt(gt,Lt)}}function Jt(I,W){let{r:Y,u:z}=ot(dt.az,dt.el),ft=2*dt.F/N.H;dt.t.addScaledVector(Y,-I*ft).addScaledVector(z,W*ft),jt(),N.userCam=!0,De()}function jt(){let I=n*.6;dt.t.x=Ze(dt.t.x,-I,I),dt.t.y=Ze(dt.t.y,-I,I),dt.t.z=Ze(dt.t.z,-20,n*.6)}function fe(I){let W=nt.has(I.pointerId);nt.delete(I.pointerId);try{a.releasePointerCapture(I.pointerId)}catch{}if(!W||!G)return;if(G.k==="pinch"){if(nt.size===1){let[z]=[...nt.values()];G={k:"orbit",x0:z.x,y0:z.y,lx:z.x,ly:z.y,lt:performance.now(),moved:!0}}else G=null;return}if(nt.size)return;let Y=G;if(G=null,Y.k==="drag"){Z(),N.hover=null;return}if(Y.k==="giz"){N.hover=null,De();return}if(Y.k==="part"&&!Y.moved){$t(Y.e.id,!0);return}if(Y.k==="orbit"&&Y.moved){performance.now()-Y.lt<60&&(j.az=Ze(Y.vaz||0,-9,9),j.el=Ze(Y.vel||0,-5,5));return}if((Y.k==="orbit"||Y.k==="pan")&&!Y.moved){let z=performance.now();z-et<320?(Ft(),et=0):et=z,$t([],!0)}}function me(I){I.preventDefault();let[W,Y]=Ot(I),z=I.deltaY*(I.deltaMode===1?16:I.deltaMode===2?400:1);I.ctrlKey&&(z*=2.2),Kt(W,Y,Math.exp(Ze(z,-240,240)*.0016)),N.userCam=!0,rt=0,N.lastUser=performance.now()}function Kt(I,W,Y){let z=Ze(dt.F*Y,Bt.Fmin,Bt.Fmax),ft=1-z/dt.F,{r:gt,u:Lt}=ot(dt.az,dt.el),yt=N.W/N.H,ie=(I/N.W*2-1)*dt.F*yt,ee=(1-W/N.H*2)*dt.F;dt.t.addScaledVector(gt,ie*ft).addScaledVector(Lt,ee*ft),dt.F=z,jt(),De()}function Re(I,W){if(N.drag||G)return;let Y=e.editable?ns(I,W,!1):null,z="default";if(Y)z=Y===wt?"ns-resize":It.includes(Y)?"grab":"nwse-resize";else{let ft=lc(I,W);ft&&(z=e.editable&&!ft.e.fixed?"move":"pointer")}N.hover!==Y&&(N.hover=Y,De()),a.style.cursor=z}a.addEventListener("pointerdown",Yt),a.addEventListener("pointermove",zt),a.addEventListener("pointerup",fe),a.addEventListener("pointercancel",fe),a.addEventListener("pointerleave",()=>{!G&&N.hover&&(N.hover=null,De())}),a.addEventListener("wheel",me,{passive:!1}),a.addEventListener("contextmenu",I=>I.preventDefault()),a.addEventListener("webglcontextlost",I=>{I.preventDefault(),N.lost=!0}),a.addEventListener("webglcontextrestored",()=>{N.lost=!1,N.resDirty=!0,N.cv++,De()});let on={position:"absolute",left:"0",top:"0",transform:"translate(-50%,-50%)",padding:"3px 9px",borderRadius:"999px",background:"rgba(255,255,255,.95)",color:nn.ink,font:"800 12.5px/1.25 Lexend, system-ui, sans-serif",whiteSpace:"nowrap",boxShadow:"0 2px 10px rgba(20,32,74,.2)",letterSpacing:".01em",display:"none",willChange:"transform"},Ge=(I={})=>{let W=document.createElement("div");return Object.assign(W.style,on,I),l.appendChild(W),W},Ce=[nn.ax[0],nn.ax[1],nn.ax[2],"#E07A10"].map(I=>Ge({border:`2px solid ${I}`})),an=Ge({background:nn.ink,color:"#fff",padding:"5px 11px",fontSize:"13px",transform:"translate(14px,-130%)"});function Xt(I,W,Y){if(!I){an.style.display="none";return}an.textContent=I,an.style.display="block",an.style.left=W+"px",an.style.top=Y+"px"}let vn=nn.ax.map(I=>{let W=es([0,0,0,1,0,0],ts(I,2.2,{depthTest:!1}));return W.material.transparent=!1,W.renderOrder=16,S.add(W),W}),Se=vn[0],mn=es([0,0,0,0,0,1],ts("#E07A10",1.8,{opacity:.95,depthTest:!1,dashed:!0,dash:1.6,gap:1.2}));mn.renderOrder=16,S.add(mn);let Kn="";function Mi(){let I=N.measure&&N.map.size>0;if(S.visible=I,!I){Ce.forEach(ge=>ge.style.display="none");return}let W=Rt(),Y=[],z=[],ft,gt,Lt,yt,ie;if(W&&!W.fixed)Os(W),ft=le.rot.clone().setPosition(le.c),gt=le.a,Lt=le.b,yt=le.h,ie=Sr(W.q);else{let ge=new Me;for(let wi of N.sel.length?N.sel:[...N.map.keys()]){let Ei=N.map.get(wi);Ei&&!Ei.hole&&ge.union(Hi(Ei))}if(ge.isEmpty()){S.visible=!1,Ce.forEach(wi=>wi.style.display="none");return}let ln=ge.getCenter(new D),tn=ge.getSize(new D);ft=new Wt().makeTranslation(ln.x,ln.y,ln.z),gt=tn.x/2,Lt=tn.y/2,yt=tn.z/2,ie=[tn.x,tn.y,tn.z]}let ee=(ge,ln,tn)=>new D(ge,ln,tn).applyMatrix4(ft),Gt=5+14*Ln(ee(0,0,0)),ue=2.2*Ln(ee(0,0,0))*3,Je=[[],[],[]],Be=(ge,ln,tn)=>Je[ge].push(ln.x,ln.y,ln.z,tn.x,tn.y,tn.z),Ee=ee(-gt,-Lt-Gt,-yt),Ke=ee(gt,-Lt-Gt,-yt);Be(0,Ee,Ke),Be(0,ee(-gt,-Lt,-yt),ee(-gt,-Lt-Gt-ue,-yt)),Be(0,ee(gt,-Lt,-yt),ee(gt,-Lt-Gt-ue,-yt));let ye=ee(gt+Gt,-Lt,-yt),Er=ee(gt+Gt,Lt,-yt);Be(1,ye,Er),Be(1,ee(gt,-Lt,-yt),ee(gt+Gt+ue,-Lt,-yt)),Be(1,ee(gt,Lt,-yt),ee(gt+Gt+ue,Lt,-yt));let Hs=ee(gt+Gt*.7,-Lt-Gt*.7,-yt),Xi=ee(gt+Gt*.7,-Lt-Gt*.7,yt);Be(2,Hs,Xi);for(let ge of[-yt,yt])Be(2,ee(gt+Gt*.7-ue*.5,-Lt-Gt*.7+ue*.5,ge),ee(gt+Gt*.7+ue*.5,-Lt-Gt*.7-ue*.5,ge));Y=Je.flat(),z.push([Ee.clone().add(Ke).multiplyScalar(.5),`${Vi(ie[0])} mm`],[ye.clone().add(Er).multiplyScalar(.5),`${Vi(ie[1])} mm`],[Hs.clone().add(Xi).multiplyScalar(.5),`${Vi(ie[2])} mm`]);let mm=JSON.stringify(Y.map(ge=>Math.round(ge*100)));mm!==Kn&&(Kn=mm,Je.forEach((ge,ln)=>vn[ln].geometry.setPositions(ge)));let os=W?Hi(W):null;if(os&&os.min.z>.05){let ge=new D(os.min.x,os.min.y,0);mn.visible=!0,mn.geometry.setPositions([ge.x,ge.y,0,ge.x,ge.y,os.min.z]),mn.computeLineDistances(),z.push([new D(ge.x,ge.y,os.min.z/2),`\u2191 ${Vi(os.min.z)} mm`])}else mn.visible=!1;let gm=Ce.map((ge,ln)=>{let tn=z[ln];if(!tn)return null;let[wi,Ei,Sf]=Vn(tn[0]);if(Sf>1)return null;ge.textContent=tn[1],ge.style.display="block";let as=ge.offsetWidth||64,S_=ge.offsetHeight||22;return{t:ge,x:Ze(wi,as/2+4,N.W-as/2-4),y:Ei,w:as,h:S_}}),uc=gm.filter(Boolean).sort((ge,ln)=>ge.y-ln.y);for(let ge=0;ge<4;ge++)for(let ln=0;ln<uc.length;ln++)for(let tn=ln+1;tn<uc.length;tn++){let wi=uc[ln],Ei=uc[tn],Sf=(wi.w+Ei.w)/2+4-Math.abs(wi.x-Ei.x),as=(wi.h+Ei.h)/2+3-Math.abs(wi.y-Ei.y);Sf>0&&as>0&&(wi.y-=as/2,Ei.y+=as/2)}Ce.forEach((ge,ln)=>{let tn=gm[ln];if(!tn){ge.style.display="none";return}ge.style.transform=`translate(${tn.x}px,${Ze(tn.y,14,N.H-14)}px) translate(-50%,-50%)`})}function Si(){let I=i.getBoundingClientRect(),W=Math.max(2,Math.round(I.width)),Y=Math.max(2,Math.round(I.height));if(W===N.W&&Y===N.H&&r.getPixelRatio()===Ie())return;N.W=W,N.H=Y;let z=Ie();r.setPixelRatio(z),r.setSize(W,Y,!1),L.setPixelRatio(z),L.setSize(W,Y);for(let ft of[ut,Et,Mt,...vn.map(gt=>gt.material),mn.material,ve.material,xt.material,...It.map(gt=>gt.material)])ft.resolution.set(W,Y);!N.userCam&&!N.drag&&!N.first&&Ft(!0),bt(),De()}let Ie=()=>{let I=Math.min(o.dpr,window.devicePixelRatio||1);return F.aoScale=I>1.3?1/I:1,I},$e=typeof ResizeObserver=="function"?new ResizeObserver(()=>Si()):null;$e&&$e.observe(i);function De(){N.dirty=!0}let Fe=0,bi=performance.now(),Wi=0,ks=0,fm=0;function dm(){if(!N.alive)return;if(Fe=requestAnimationFrame(dm),!i.isConnected){++fm>90&&pm();return}fm=0;let I=performance.now(),W=Math.min(.05,(I-bi)/1e3);if(bi=I,N.lost||N.W<4)return;e.spin&&!pf&&!G&&!N.drag&&I-(N.lastUser||0)>3500&&(dt.az+=W*.32);let Y=Pt(W)||e.spin&&!pf;for(let z of N.map.values())z.anim&&(z.anim.t+=W/.52,z.anim.t>=1&&(z.anim=null),P(z),Y=!0);N.resAnim&&(N.resAnim.t+=W/.6,N.resAnim.t>=1&&(N.resAnim=null),vt.position.z=N.resAnim?X(N.resAnim.t)*36:0,Y=!0,N.cv++),N.mode==="result"&&N.resDirty&&I-N.lastRes>(N.drag?45:0)&&pt(),!(!Y&&!N.dirty)&&(N.dirty=!1,v_(),Y&&e.quality==="auto"&&(ks++,W>.034&&Wi++,ks>=45&&(Wi>30&&__(),ks=Wi=0)))}function __(){s==="high"?(s="mid",F.enabled=!1):s==="mid"&&(s="low",F.enabled=!1,o=Object.assign({},o,{dpr:Math.min(o.dpr,1.25)}),Si())}function v_(){sr(),Mi();let I=N.drag;if(I&&(I.k==="move"||I.k==="lift")){let W=Hi(I.e),Y=W.getCenter(new D),z=W.getSize(new D);for(let ft of[we,ve])ft.visible=!0,ft.position.set(Y.x,Y.y,.08),ft.scale.set(Math.max(1,z.x),Math.max(1,z.y),1)}N.cv!==N.cvSh&&(N.cvSh=N.cv,r.shadowMap.needsUpdate=!0),L.render()}function y_(I=640,W=400,Y={}){let z=N.W,ft=N.H,gt=r.getPixelRatio(),Lt=M.visible,yt=S.visible,ie=O.active,ee=E.visible;try{Y.clean!==!1&&(M.visible=!1,S.visible=!1,O.active=!1,E.visible=!1);for(let Gt of N.map.values())Gt.anim&&(Gt.anim=null,P(Gt));return N.resAnim=null,vt.position.z=0,r.setPixelRatio(1),r.setSize(I,W,!1),L.setPixelRatio(1),L.setSize(I,W),N.W=I,N.H=W,bt(),N.mode==="result"&&N.resDirty&&pt(),Mi(),Y.clean!==!1&&(S.visible=!1),r.shadowMap.needsUpdate=!0,L.render(),a.toDataURL(Y.type||"image/png",Y.q??.92)}catch{return""}finally{M.visible=Lt,S.visible=yt,O.active=ie,E.visible=ee,r.setPixelRatio(gt),r.setSize(z,ft,!1),L.setPixelRatio(gt),L.setSize(z,ft),N.W=z,N.H=ft,bt(),De()}}function M_(){let I=Q.solid(N.model),W=c_(I.attributes.position?I:new Le().setAttribute("position",new Te([],3)));return I.dispose(),W}function pm(){if(!N.alive)return;N.alive=!1,cancelAnimationFrame(Fe),$e&&$e.disconnect();for(let W of N.map.values())it(W);N.map.clear(),Q.dispose(),lt.dispose();let I=new Set([...Is.values(),...Ds.values()]);for(let W of[c,T])W.traverse(Y=>{Y.geometry&&!I.has(Y.geometry)&&Y.geometry.dispose(),Y.material&&Y.material.isSpriteMaterial&&Y.material.dispose()});u.userData.dispose(),k.forEach(W=>W.dispose()),[q.front,q.back,ct,ut,Et,Mt,kt].forEach(W=>W.dispose()),Zt.dispose(),te.dispose(),p.dispose(),b.dispose(),L.dispose(),R.dispose(),F.dispose(),O.dispose(),r.dispose();try{r.forceContextLoss()}catch{}a.remove(),l.remove()}at(),$.layers.value=N.mode==="result"?1:0,Si(),H(e.view||"iso",!0),Fe=requestAnimationFrame(dm);let ar={ok:!0,set(I){return St(I),ar},mode(I){return I==null?N.mode:(At(I),ar)},select(I){return I===void 0?N.sel.length?N.sel[0]:null:($t(I,!1),ar)},target(I){return Dt(I),ar},view(I,W){return H(I,W),ar},fit(I){return Ft(I),ar},measure(I){return N.measure=I===void 0?!N.measure:!!I,De(),ar},snapshot:y_,stl:M_,dispose:pm,resize(){return N.W=0,Si(),ar},get quality(){return s},get csgMs(){return N.resMs},_dbg:()=>({ao:F,sel:O,composer:L,scene:c,R:r,key:_,cam:f,S:N,wake:De,scr:I=>Vn(new D(...I)),hs:()=>J.map(I=>Vn(I.position)),arrow:()=>Vn(wt.position),ring:(I,W)=>Vn(new D(Math.cos(W),Math.sin(W),0).applyMatrix4(It[I].matrix))}),get camera(){return{az:st.az/rn,el:st.el/rn,F:st.F,fov:st.fov,t:st.t.toArray()}}};return e.model&&St(e.model),e.target&&Dt(e.target),ar}var Jp=null,ha=new Map,r_=Promise.resolve();function UE(){let i=new Pl({antialias:!1,alpha:!0,preserveDrawingBuffer:!0});i.outputColorSpace=Rn,i.toneMapping=Hr,i.shadowMap.enabled=!0,i.shadowMap.type=Vr,i.setPixelRatio(1);let t=new pr,e=new Tn(Ns,1,1,6e3);e.up.set(0,0,1);let n=new vs(i),r=new $l;t.environment=n.fromScene(r,.035).texture,r.dispose(),n.dispose(),t.environmentRotation.set(Math.PI/2,0,0),t.environmentIntensity=.95;let s=new Or("#FFF5E8",2.3);s.castShadow=!0,s.shadow.mapSize.set(1024,1024),s.shadow.bias=-2e-4,s.shadow.normalBias=.3,s.shadow.radius=3,s.shadow.intensity=.8;let o=new Or("#DCE8FF",.75),a=new Ao("#F4F8FF","#9A8E80",.35);a.position.set(0,0,1),t.add(s,s.target,o,a);let l=new ae(new mi(1,1),new wo({color:"#1B2440",opacity:.2,transparent:!0,depthWrite:!1}));l.receiveShadow=!0,t.add(l);let c=new ae(new mi(1,1),new pi({map:f_(),color:"#0E1630",transparent:!0,opacity:.22,depthWrite:!1}));t.add(c);let f=new ae(new Le,[]);f.castShadow=!0,f.receiveShadow=!0,t.add(f);let p=new Map,d={layers:{value:0}},g=u=>{let v=um(u).getHexString();return p.has(v)||p.set(v,d_("#"+v,d)),p.get(v)},x=new da({seg:64,matFor:(u,v,h)=>g(v&&h&&h.c||u.c)}),b=i.extensions.has("EXT_color_buffer_float")||i.extensions.has("EXT_color_buffer_half_float"),_=new en(4,4,{type:b?Sn:xn,samples:i.capabilities.maxSamples>=4?4:0}),y=new Kl(i,_);y.addPass(new oa(t,e));let w=new yf(t,e,4,4);return w.enabled=b,w.updateGtaoMaterial({radius:15,distanceExponent:1.1,thickness:10,scale:1.7,samples:16}),w.updatePdMaterial({radius:7,rings:2,samples:16}),w.blendIntensity=1,y.addPass(w),y.addPass(new ic),{R:i,scene:t,cam:e,key:s,rim:o,shadow:l,blob:c,mesh:f,csg:x,comp:y,bgs:{}}}function Y3(i,t=320,e=240,n={}){let r=JSON.stringify([i,t,e,n]);if(ha.has(r))return Promise.resolve(ha.get(r));let s=r_.then(()=>{if(!CE())return"";try{Jp||(Jp=UE());let o=Jp,a=o.csg.run(i);o.csg.sweep(1),o.mesh.geometry.dispose(),o.mesh.geometry=a.g,o.mesh.material=a.mat;let l=a.g.boundingBox&&!a.g.boundingBox.isEmpty()?a.g.boundingBox.clone():new Me(new D(-10,-10,0),new D(10,10,10)),c=l.getCenter(new D),f=l.getSize(new D),p=Math.max(f.x,f.y,f.z,4),d=l.min.z;o.shadow.position.set(c.x,c.y,d-.01),o.shadow.scale.set(p*6,p*6,1),o.blob.position.set(c.x,c.y,d-.005),o.blob.scale.set(Math.max(f.x,f.y)*1.6+6,Math.max(f.x,f.y)*1.6+6,1),o.key.position.set(c.x-p*1.2,c.y-p*2.4,c.z+p*4.2),o.key.target.position.copy(c),o.rim.position.set(c.x+p*2,c.y+p*3,c.z+p*2);let g=o.key.shadow.camera;Object.assign(g,{left:-p*2,right:p*2,top:p*2,bottom:-p*2,near:p*.5,far:p*12}),g.updateProjectionMatrix(),o.R.setSize(t,e,!1),o.comp.setSize(t,e);let x=Ls[n.view]||Ls.iso,b=x[0]*rn,_=x[1]*rn,y=n.view&&n.view!=="iso"?x_:Ns,w=Math.cos(_),m=new D(w*Math.cos(b),w*Math.sin(b),Math.sin(_)),u=new D(-Math.sin(b),Math.cos(b),0),v=new D().crossVectors(m,u),h=Math.tan(y*rn/2),C=a.g.attributes.position?g_([{g:a.g}],3e4):[],M=C.length?m_(C,b,_,y,t/e,n.margin||.86):{c,F:p},S=Math.max(M.F,2),E=S/h;o.cam.position.copy(M.c).addScaledVector(m,E),o.cam.quaternion.setFromRotationMatrix(new Wt().makeBasis(u,v,m)),o.cam.fov=y,o.cam.aspect=t/e,o.cam.near=Math.max(.5,E*.03),o.cam.far=E*4+500,o.cam.updateProjectionMatrix(),o.cam.updateMatrixWorld(!0);let T=n.bg==="none"?"none":n.bg==="workshop"?"workshop":"studio";T==="none"?(o.scene.background=null,o.R.setClearColor(0,0)):o.scene.background=o.bgs[T]||(o.bgs[T]=h_(T)),o.comp.render();let A=o.R.domElement.toDataURL(T==="none"?"image/png":"image/webp",.9);return ha.set(r,A),ha.size>80&&ha.delete(ha.keys().next().value),A}catch(o){return typeof console<"u"&&console.warn("m3 thumb",o),""}});return r_=s.catch(()=>{}),s}var Z3={weldTJunctions:cm,openCount:fa,edgeCounts:Mf};export{da as CSG,Z3 as _mesh,q3 as create,iE as displayGeometry,aE as fineGeometry,nm as heartPoly,lm as leavesOf,CE as ok,X3 as openEdges,o_ as partMatrix,uE as partsOf,am as shapeGeometry,em as starPoly,c_ as stlOf,Y3 as thumb,_f as treeOf};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
