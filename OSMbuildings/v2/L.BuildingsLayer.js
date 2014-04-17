(function(g){var v=v||Array,xa=Math.exp,ya=Math.log,za=Math.tan,Aa=Math.atan,ja=Math.min,Ba=Math.max,ka=g.document,x=function(){function W(e,h,l){if(l<0)l+=1;if(l>1)l-=1;if(l<1/6)return e+(h-e)*6*l;if(l<0.5)return h;if(l<2/3)return e+(h-e)*(2/3-l)*6;return e}function C(e,h,l,m){this.r=e;this.g=h;this.b=l;this.a=arguments.length<4?1:m}var X=C.prototype;X.toString=function(){return"rgba("+[this.r,this.g,this.b,this.a.toFixed(2)].join(",")+")"};X.adjustLightness=function(e){var h=x.toHSLA(this);h.l*=
e;h.l=Math.min(1,Math.max(0,h.l));var l,m;if(h.s===0)e=l=m=h.l;else{m=h.l<0.5?h.l*(1+h.s):h.l+h.s-h.l*h.s;var w=2*h.l-m;e=W(w,m,h.h+1/3);l=W(w,m,h.h);m=W(w,m,h.h-1/3)}return new x(~~(e*255),~~(l*255),~~(m*255),h.a)};X.adjustAlpha=function(e){return new x(this.r,this.g,this.b,this.a*e)};C.parse=function(e){e+="";if(~e.indexOf("#")){e=e.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/);return new x(parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),e[4]?parseInt(e[4],16)/255:1)}if(e=e.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new x(parseInt(e[1],
10),parseInt(e[2],10),parseInt(e[3],10),e[4]?parseFloat(e[5],10):1)};C.toHSLA=function(e){var h=e.r/255,l=e.g/255,m=e.b/255,w=Math.max(h,l,m),y=Math.min(h,l,m),D,K=(w+y)/2,E;if(w===y)D=y=0;else{E=w-y;y=K>0.5?E/(2-w-y):E/(w+y);switch(w){case h:D=(l-m)/E+(l<m?6:0);break;case l:D=(m-h)/E+2;break;case m:D=(h-l)/E+4;break}D/=6}return{h:D,s:y,l:K,a:e.a}};return C}(),Y=Math.PI,va=Y/2,Ca=Y/4,Da=180/Y,Ea=256,la=14,ma=400,wa=ma-50,Z="latitude",$="longitude",M=0,I=1,A=2,ga=3;g.OSMBuildings=function(W){function C(a,
c){var b={};a/=aa;c/=aa;b[Z]=c<=0?90:c>=1?-90:Da*(2*Aa(xa(Y*(1-2*c)))-va);b[$]=(a===1?1:(a%1+1)%1)*360-180;return b}function X(a,c){return a.replace(/\{ *([\w_]+) *\}/g,function(b,d){return c[d]})}function e(a,c){var b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===4)!b.status||b.status<200||b.status>299||b.responseText&&c(JSON.parse(b.responseText))};b.open("GET",a);b.send(null);return b}function h(){if(!(!na||z<la)){var a=C(Q-ba,R-oa),c=C(Q+N+ba,R+F+oa);ha&&ha.abort();ha=e(X(na,
{w:a[$],n:a[Z],e:c[$],s:c[Z],z:z}),l)}}function l(a){var c,b,d,f=[],i=0,j=0;ca=la;K(z);ha=null;if(!(!a||a.meta.z!==z)){d=a.meta;b=a.data;if(t&&n&&t.z===d.z){i=t.x-d.x;j=t.y-d.y;a=0;for(c=n.length;a<c;a++)f[a]=n[a][I][0]+i+","+(n[a][I][1]+j)}t=d;n=[];a=0;for(c=b.length;a<c;a++){n[a]=b[a];n[a][M]=ja(n[a][M],wa);d=n[a][I][0]+","+n[a][I][1];n[a][ga]=!(f&&~f.indexOf(d))}E()}}function m(a,c){var b=[],d,f,i,j,k,q,p,o,r=pa-z;d=0;for(f=a.length;d<f;d++){k=a[d];q=k[I];p=new v(q.length);i=0;for(j=q.length-1;i<
j;i+=2){o=q[i+1];var G=ja(1,Ba(0,0.5-ya(za(Ca+va*q[i]/180))/Y/2));o={x:~~((o/360+0.5)*aa),y:~~(G*aa)};p[i]=o.x;p[i+1]=o.y}b[d]=[];b[d][M]=ja(k[M]>>r,wa);b[d][I]=p;b[d][A]=k[A];b[d][ga]=c}return b}function w(a,c){if(typeof a==="object")D(a,!c);else{var b=ka.documentElement,d=ka.createElement("script");g.jsonpCallback=function(f){delete g.jsonpCallback;b.removeChild(d);D(f,!c)};b.insertBefore(d,b.lastChild).src=a.replace(/\{callback\}/,"jsonpCallback")}}function y(a,c,b){if(b===undefined)b=[];var d,
f,i,j=a[0]?a:a.features,k,q,p,o,r,G=c?1:0,S=c?0:1;if(j){d=0;for(a=j.length;d<a;d++)y(j[d],c,b);return b}if(a.type==="Feature"){f=a.geometry;d=a.properties}if(f.type==="Polygon")k=[f.coordinates];if(f.type==="MultiPolygon")k=f.coordinates;if(k){c=d.height;if(d.color||d.wallColor)o=x.parse(d.color||d.wallColor);if(d.roofColor)r=x.parse(d.roofColor);d=0;for(a=k.length;d<a;d++){q=k[d][0];j=[];f=p=0;for(i=q.length;f<i;f++){j.push(q[f][G],q[f][S]);p+=c||q[f][2]||0}if(p){f=[];f[M]=~~(p/q.length);q=I;p=void 0;
i=void 0;var O=void 0,B=void 0,T=0,H=void 0,da=void 0;H=0;for(da=j.length-3;H<da;H+=2){p=j[H];i=j[H+1];O=j[H+2];B=j[H+3];T+=p*B-O*i}if((T/2>0?"CW":"CCW")==="CW")j=j;else{p=[];for(i=j.length-2;i>=0;i-=2)p.push(j[i],j[i+1]);j=p}f[q]=j;if(o||r)f[A]=[o,r];b.push(f)}}}return b}function D(a,c){if(a){ea=y(a,c);ca=0;K(z);t={n:90,w:-180,s:-90,e:180,x:0,y:0,z:z};n=m(ea,true);E()}else{ea=null;J()}}function K(a){z=a;aa=Ea<<z;P=1-(z-ca)*0.3/(pa-ca)}function E(){fa=0;clearInterval(qa);qa=setInterval(function(){fa+=
0.1;if(fa>1){clearInterval(qa);fa=1;for(var a=0,c=n.length;a<c;a++)n[a][ga]=0}J()},33)}function J(){s.clearRect(0,0,N,F);if(t&&n)if(!(z<ca||ra)){var a,c,b,d,f,i,j,k,q=Q-t.x,p=R-t.y,o,r,G,S,O,B,T,H=sa.adjustAlpha(P)+"",da=(ta||sa.adjustLightness(1.2)).adjustAlpha(P)+"";if(ia)s.strokeStyle=Fa.adjustAlpha(P)+"";a=0;for(c=n.length;a<c;a++){f=n[a];r=false;i=f[I];o=[];b=0;for(d=i.length-1;b<d;b+=2){o[b]=j=i[b]-q;o[b+1]=k=i[b+1]-p;r||(r=j>0&&j<N&&k>0&&k<F)}if(r){s.fillStyle=f[A]&&f[A][0]?f[A][0].adjustAlpha(P)+
"":H;b=f[ga]?f[M]*fa:f[M];i=ma/(ma-b);j=[];k=[];b=0;for(d=o.length-3;b<d;b+=2){r=o[b];G=o[b+1];S=o[b+2];O=o[b+3];B={x:~~((r-U)*i+U)+0.5,y:~~((G-V)*i+V)+0.5};T={x:~~((S-U)*i+U)+0.5,y:~~((O-V)*i+V)+0.5};if((S-r)*(B.y-G)>(B.x-r)*(O-G)){if(!k.length){k.unshift(G+0.5);k.unshift(r+0.5);k.push(B.x,B.y)}k.unshift(O+0.5);k.unshift(S+0.5);k.push(T.x,T.y)}else{ua(k);k=[]}j[b]=B.x;j[b+1]=B.y}ua(k);s.fillStyle=!f[A]?da:f[A][1]?f[A][1].adjustAlpha(P)+"":ta?da:f[A][0].adjustLightness(1.2).adjustAlpha(P)+"";ua(j,
ia)}}}}function ua(a,c){if(a.length){s.beginPath();s.moveTo(a[0],a[1]);for(var b=2,d=a.length;b<d;b+=2)s.lineTo(a[b],a[b+1]);s.closePath();c&&s.stroke();s.fill()}}var N=0,F=0,ba=0,oa=0,Q=0,R=0,z,aa,ha,u,s,na,ia,sa=new x(200,190,180),ta,Fa=new x(145,140,135),ea,t,n,P=1,fa=1,qa,ca=la,pa=20,U,V,ra;this.setStyle=function(a){a=(a=a)||{};ia=a.strokeRoofs!==undefined?a.strokeRoofs:ia;if(a.color||a.wallColor)sa=x.parse(a.color||a.wallColor);if(a.roofColor!==undefined)ta=x.parse(a.roofColor);J();return this};
this.geoJSON=function(a,c){w(a,c);return this};this.setCamOffset=function(a,c){U=ba+a;V=F+c};this.setMaxZoom=function(a){pa=a};this.createCanvas=function(a){u=ka.createElement("canvas");u.style.webkitTransform="translate3d(0,0,0)";u.style.imageRendering="optimizeSpeed";u.style.position="absolute";u.style.pointerEvents="none";u.style.left=0;u.style.top=0;a.appendChild(u);s=u.getContext("2d");s.lineCap="round";s.lineJoin="round";s.lineWidth=1;try{s.mozImageSmoothingEnabled=false}catch(c){}return u};
this.destroyCanvas=function(){u.parentNode.removeChild(u)};this.loadData=h;this.onMoveEnd=function(){var a=C(Q,R),c=C(Q+N,R+F);J();if(t&&(a[Z]>t.n||a[$]<t.w||c[Z]<t.s||c[$]>t.e))h()};this.onZoomEnd=function(a){ra=false;K(a.zoom);if(ea){n=m(ea);J()}else{J();h()}};this.onZoomStart=function(){ra=true;J()};this.render=J;this.setOrigin=function(a,c){Q=a;R=c};this.setSize=function(a,c){N=a;F=c;ba=~~(N/2);oa=~~(F/2);U=ba;V=F;u.width=N;u.height=F};this.setZoom=K;na=W};g.OSMBuildings.VERSION="0.1.7a";g.OSMBuildings.ATTRIBUTION=
'&copy; <a href="http://osmbuildings.org">OSM Buildings</a>'})(this);
L.BuildingsLayer=L.Class.extend({map:null,osmb:null,canvas:null,blockMoveEvent:null,lastX:0,lastY:0,initialize:function(g){L.Util.setOptions(this,g)},onMove:function(){var g=L.DomUtil.getPosition(this.map._mapPane);this.osmb.setCamOffset(this.lastX-g.x,this.lastY-g.y);this.osmb.render()},onMoveEnd:function(){if(this.blockMoveEvent)this.blockMoveEvent=false;else{var g=L.DomUtil.getPosition(this.map._mapPane),v=this.map.getPixelOrigin();this.lastX=g.x;this.lastY=g.y;this.canvas.style.left=-g.x+"px";
this.canvas.style.top=-g.y+"px";this.osmb.setCamOffset(0,0);this.osmb.setSize(this.map._size.x,this.map._size.y);this.osmb.setOrigin(v.x-g.x,v.y-g.y);this.osmb.onMoveEnd()}},onZoomStart:function(){this.osmb.onZoomStart()},onZoomEnd:function(){var g=L.DomUtil.getPosition(this.map._mapPane),v=this.map.getPixelOrigin();this.osmb.setOrigin(v.x-g.x,v.y-g.y);this.osmb.onZoomEnd({zoom:this.map._zoom});this.blockMoveEvent=true},addTo:function(g){g.addLayer(this);return this},onAdd:function(g){this.map=g;
this.osmb=new OSMBuildings(this.options.url);this.canvas=this.osmb.createCanvas(this.map._panes.overlayPane);this.osmb.maxZoom=this.map._layersMaxZoom;g=L.DomUtil.getPosition(this.map._mapPane);var v=this.map.getPixelOrigin();this.osmb.setSize(this.map._size.x,this.map._size.y);this.osmb.setOrigin(v.x-g.x,v.y-g.y);this.osmb.setZoom(this.map._zoom);this.canvas.style.left=-g.x+"px";this.canvas.style.top=-g.y+"px";this.map.on({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd},
this);if(this.map.options.zoomAnimation)this.canvas.className="leaflet-zoom-animated";this.map.attributionControl.addAttribution(OSMBuildings.ATTRIBUTION);this.osmb.loadData();this.osmb.render()},onRemove:function(g){g.attributionControl.removeAttribution(OSMBuildings.ATTRIBUTION);g.off({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd},this);this.canvas=this.osmb.destroyCanvas();this.osmb=this.map=null},geoJSON:function(g,v){return this.osmb.geoJSON(g,v)},
setStyle:function(g){return this.osmb.setStyle(g)}});
