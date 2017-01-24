
	/*
	 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============
	 Adobe Visitor API for JavaScript version: 1.9.0
	 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
	 More info available at http://www.omniture.com
	*/
	function Visitor(q,v){if(!q)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.9.0";var m=window,l=m.Visitor;l.version=a.version;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);a._c="Visitor";a._il=m.s_c_il;a._in=m.s_c_in;a._il[a._in]=a;m.s_c_in++;a.ha={Da:[]};var t=m.document,i=l.Bb;i||(i=null);var D=l.Cb;D||(D=void 0);var j=l.La;j||(j=!0);var k=l.Ja;k||(k=!1);a.da=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.r=function(a,c){var b=
	"0123456789",e="",f="",g,h,i=8,k=10,l=10;c===n&&(w.isClientSideMarketingCloudVisitorID=j);if(1==a){b+="ABCDEF";for(g=0;16>g;g++)h=Math.floor(Math.random()*i),e+=b.substring(h,h+1),h=Math.floor(Math.random()*i),f+=b.substring(h,h+1),i=16;return e+"-"+f}for(g=0;19>g;g++)h=Math.floor(Math.random()*k),e+=b.substring(h,h+1),0==g&&9==h?k=3:(1==g||2==g)&&10!=k&&2>h?k=10:2<g&&(k=10),h=Math.floor(Math.random()*l),f+=b.substring(h,h+1),0==g&&9==h?l=3:(1==g||2==g)&&10!=l&&2>h?l=10:2<g&&(l=10);return e+f};a.Pa=
	function(){var a;!a&&m.location&&(a=m.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a="";else{var c=a.split("."),b=c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
	c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+t.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0,10):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=
	b.getYear(),b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(t.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.h=i;a.J=function(a,c){try{"function"==typeof a?a.apply(m,c):a[1].apply(a[0],c)}catch(b){}};a.Va=function(d,c){c&&(a.h==i&&(a.h={}),a.h[d]==D&&(a.h[d]=[]),a.h[d].push(c))};a.q=function(d,c){if(a.h!=i){var b=a.h[d];if(b)for(;0<b.length;)a.J(b.shift(),
	c)}};a.v=function(a,c,b,e){b=encodeURIComponent(c)+"="+encodeURIComponent(b);c=x.ub(a);a=x.lb(a);if(-1===a.indexOf("?"))return a+"?"+b+c;var f=a.split("?"),a=f[0]+"?",e=x.Ya(f[1],b,e);return a+e+c};a.Oa=function(a,c){var b=RegExp("[\\?&#]"+c+"=([^&#]*)").exec(a);if(b&&b.length)return decodeURIComponent(b[1])};a.Ua=function(){var d=i,c=m.location.href;try{var b=a.Oa(c,r.Y);if(b)for(var d={},e=b.split("|"),c=0,f=e.length;c<f;c++){var g=e[c].split("=");d[g[0]]=decodeURIComponent(g[1])}return d}catch(h){}};
	a.Ma=function(){var d=a.Ua();if(d){var c=d[n],b=a.setMarketingCloudVisitorID;c&&c.match(r.u)&&b(c);a.j(s,-1);d=d[p];c=a.setAnalyticsVisitorID;d&&d.match(r.u)&&c(d)}};a.Ta=function(d){function c(d){x.ob(d)&&a.setCustomerIDs(d)}function b(d){d=d||{};a._supplementalDataIDCurrent=d.supplementalDataIDCurrent||"";a._supplementalDataIDCurrentConsumed=d.supplementalDataIDCurrentConsumed||{};a._supplementalDataIDLast=d.supplementalDataIDLast||"";a._supplementalDataIDLastConsumed=d.supplementalDataIDLastConsumed||
	{}}d&&d[a.marketingCloudOrgID]&&(d=d[a.marketingCloudOrgID],c(d.customerIDs),b(d.sdid))};a.l=i;a.Ra=function(d,c,b,e){c=a.v(c,"d_fieldgroup",d,1);e.url=a.v(e.url,"d_fieldgroup",d,1);e.m=a.v(e.m,"d_fieldgroup",d,1);w.d[d]=j;e===Object(e)&&e.m&&"XMLHttpRequest"===a.ja.C.D?a.ja.hb(e,b,d):a.useCORSOnly||a.ga(d,c,b)};a.ga=function(d,c,b){var e=0,f=0,g;if(c&&t){for(g=0;!e&&2>g;){try{e=(e=t.getElementsByTagName(0<g?"HEAD":"head"))&&0<e.length?e[0]:0}catch(h){e=0}g++}if(!e)try{t.body&&(e=t.body)}catch(k){e=
	0}if(e)for(g=0;!f&&2>g;){try{f=t.createElement(0<g?"SCRIPT":"script")}catch(l){f=0}g++}}!c||!e||!f?b&&b():(f.type="text/javascript",f.src=c,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),e=a.loadTimeout,o.d[d]={requestStart:o.o(),url:c,sa:e,qa:o.wa(),ra:0},b&&(a.l==i&&(a.l={}),a.l[d]=setTimeout(function(){b(j)},e)),a.ha.Da.push(c))};a.Na=function(d){a.l!=i&&a.l[d]&&(clearTimeout(a.l[d]),a.l[d]=0)};a.ea=k;a.fa=k;a.isAllowed=function(){if(!a.ea&&(a.ea=j,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,
	"T",1)))a.fa=j;return a.fa};a.b=i;a.c=i;var E=l.Tb;E||(E="MC");var n=l.Zb;n||(n="MCMID");var G=l.Ub;G||(G="MCCIDH");var J=l.Xb;J||(J="MCSYNCS");var H=l.Yb;H||(H="MCSYNCSOP");var I=l.Vb;I||(I="MCIDTS");var A=l.Wb;A||(A="MCOPTOUT");var C=l.Rb;C||(C="A");var p=l.Ob;p||(p="MCAID");var B=l.Sb;B||(B="AAM");var y=l.Qb;y||(y="MCAAMLH");var s=l.Pb;s||(s="MCAAMB");var u=l.$b;u||(u="NONE");a.L=0;a.ca=function(){if(!a.L){var d=a.version;a.audienceManagerServer&&(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&
	(d+="|"+a.audienceManagerServerSecure);a.L=a.da(d)}return a.L};a.ia=k;a.f=function(){if(!a.ia){a.ia=j;var d=a.ca(),c=k,b=a.cookieRead(a.cookieName),e,f,g,h,l=new Date;a.b==i&&(a.b={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0],10)!=d&&(c=j),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)if(e=b[d].split("-"),f=e[0],g=b[d+1],1<e.length?(h=parseInt(e[1],10),e=0<e[1].indexOf("s")):(h=0,e=k),c&&(f==G&&(g=""),0<h&&(h=l.getTime()/1E3-60)),f&&g&&(a.e(f,g,1),0<h&&(a.b["expire"+
	f]=h+(e?"s":""),l.getTime()>=1E3*h||e&&!a.cookieRead(a.sessionCookieName))))a.c||(a.c={}),a.c[f]=j}c=a.loadSSL?!!a.trackingServerSecure:!!a.trackingServer;if(!a.a(p)&&c&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(r.u)&&a.e(p,g))}};a.Xa=function(){var d=a.ca(),c,b;for(c in a.b)!Object.prototype[c]&&a.b[c]&&"expire"!=c.substring(0,6)&&(b=a.b[c],d+=(d?"|":"")+c+(a.b["expire"+c]?"-"+a.b["expire"+c]:"")+"|"+
	b);a.cookieWrite(a.cookieName,d,1)};a.a=function(d,c){return a.b!=i&&(c||!a.c||!a.c[d])?a.b[d]:i};a.e=function(d,c,b){a.b==i&&(a.b={});a.b[d]=c;b||a.Xa()};a.Qa=function(d,c){var b=a.a(d,c);return b?b.split("*"):i};a.Wa=function(d,c,b){a.e(d,c?c.join("*"):"",b)};a.Ib=function(d,c){var b=a.Qa(d,c);if(b){var e={},f;for(f=0;f<b.length;f+=2)e[b[f]]=b[f+1];return e}return i};a.Kb=function(d,c,b){var e=i,f;if(c)for(f in e=[],c)Object.prototype[f]||(e.push(f),e.push(c[f]));a.Wa(d,e,b)};a.j=function(d,c,b){var e=
	new Date;e.setTime(e.getTime()+1E3*c);a.b==i&&(a.b={});a.b["expire"+d]=Math.floor(e.getTime()/1E3)+(b?"s":"");0>c?(a.c||(a.c={}),a.c[d]=j):a.c&&(a.c[d]=k);b&&(a.cookieRead(a.sessionCookieName)||a.cookieWrite(a.sessionCookieName,"1"))};a.ba=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=u)),!a||a!=u&&!a.match(r.u)))a="";return a};a.k=function(d,c){a.Na(d);a.i!=i&&(a.i[d]=k);o.d[d]&&(o.d[d].zb=o.o(),
	o.I(d));w.d[d]&&w.Fa(d,k);if(d==E){w.isClientSideMarketingCloudVisitorID!==j&&(w.isClientSideMarketingCloudVisitorID=k);var b=a.a(n);if(!b){b="object"==typeof c&&c.mid?c.mid:a.ba(c);if(!b){if(a.B){a.getAnalyticsVisitorID(i,k,j);return}b=a.r(0,n)}a.e(n,b)}if(!b||b==u)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.k(B,c),a.B&&c.mid&&a.k(C,{id:c.id}));a.q(n,[b])}if(d==B&&"object"==typeof c){b=604800;c.id_sync_ttl!=D&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl,10));var e=a.a(y);
	e||((e=c.d_region)||(e=c.dcs_region),e&&(a.j(y,b),a.e(y,e)));e||(e="");a.q(y,[e]);e=a.a(s);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),a.j(s,b),a.e(s,e);e||(e="");a.q(s,[e]);!c.error_msg&&a.A&&a.e(G,a.A)}if(d==C){b=a.a(p);b||((b=a.ba(c))?b!==u&&a.j(s,-1):b=u,a.e(p,b));if(!b||b==u)b="";a.q(p,[b])}a.idSyncDisableSyncs?z.xa=j:(z.xa=k,b={},b.ibs=c.ibs,b.subdomain=c.subdomain,z.vb(b));if(c===Object(c)){var f;a.isAllowed()&&(f=a.a(A));f||(f=u,c.d_optout&&c.d_optout instanceof Array&&(f=c.d_optout.join(",")),
	b=parseInt(c.d_ottl,10),isNaN(b)&&(b=7200),a.j(A,b,j),a.e(A,f));a.q(A,[f])}};a.i=i;a.s=function(d,c,b,e,f){var g="",h,k=x.nb(d);if(a.isAllowed()&&(a.f(),g=a.a(d,K[d]===j),a.disableThirdPartyCalls&&!g&&(d===n?(g=a.r(0,n),a.setMarketingCloudVisitorID(g)):d===p&&!k&&(g="",a.setAnalyticsVisitorID(g))),(!g||a.c&&a.c[d])&&(!a.disableThirdPartyCalls||k)))if(d==n||d==A?h=E:d==y||d==s?h=B:d==p&&(h=C),h){if(c&&(a.i==i||!a.i[h]))a.i==i&&(a.i={}),a.i[h]=j,a.Ra(h,c,function(b,c){if(!a.a(d))if(o.d[h]&&(o.d[h].timeout=
	o.o(),o.d[h].mb=!!b,o.I(h)),c===Object(c)&&!a.useCORSOnly)a.ga(h,c.url,c.G);else{b&&w.Fa(h,j);var e="";d==n?e=a.r(0,n):h==B&&(e={error_msg:"timeout"});a.k(h,e)}},f);if(g)return g;a.Va(d,b);c||a.k(h,{id:u});return""}if((d==n||d==p)&&g==u)g="",e=j;b&&e&&a.J(b,[g]);return g};a._setMarketingCloudFields=function(d){a.f();a.k(E,d)};a.setMarketingCloudVisitorID=function(d){a._setMarketingCloudFields(d)};a.B=k;a.getMarketingCloudVisitorID=function(d,c){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&
	(a.B=j);var b=a.z("_setMarketingCloudFields");return a.s(n,b.url,d,c,b)}return""};a.Sa=function(){a.getAudienceManagerBlob()};l.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};a.w={};a.aa=k;a.A="";a.setCustomerIDs=function(d){if(a.isAllowed()&&d){a.f();var c,b;for(c in d)if(!Object.prototype[c]&&(b=d[c]))if("object"==typeof b){var e={};b.id&&(e.id=b.id);b.authState!=D&&(e.authState=b.authState);a.w[c]=e}else a.w[c]={id:b};var d=a.getCustomerIDs(),e=a.a(G),f="";e||(e=0);for(c in d)Object.prototype[c]||
	(b=d[c],f+=(f?"|":"")+c+"|"+(b.id?b.id:"")+(b.authState?b.authState:""));a.A=a.da(f);a.A!=e&&(a.aa=j,a.Sa())}};a.getCustomerIDs=function(){a.f();var d={},c,b;for(c in a.w)Object.prototype[c]||(b=a.w[c],d[c]||(d[c]={}),b.id&&(d[c].id=b.id),d[c].authState=b.authState!=D?b.authState:l.AuthState.UNKNOWN);return d};a._setAnalyticsFields=function(d){a.f();a.k(C,d)};a.setAnalyticsVisitorID=function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,
	j)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));var h={};if(f){var f="http"+(a.loadSSL?"s":"")+"://"+f+"/id",e="d_visid_ver="+a.version+"&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":""),i=["s_c_il",a._in,"_set"+(b?"MarketingCloud":"Analytics")+"Fields"],g=f+"?"+
	e+"&callback=s_c_il%5B"+a._in+"%5D._set"+(b?"MarketingCloud":"Analytics")+"Fields";h.m=f+"?"+e;h.na=i}h.url=g;return a.s(b?n:p,g,d,c,h)}}return""};a._setAudienceManagerFields=function(d){a.f();a.k(B,d)};a.z=function(d){var c=a.audienceManagerServer,b="",e=a.a(n),f=a.a(s,j),g=a.a(p),g=g&&g!=u?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";a.loadSSL&&a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){var b=a.getCustomerIDs(),h,i;if(b)for(h in b)Object.prototype[h]||(i=b[h],g+="&d_cid_ic="+
	encodeURIComponent(h)+"%01"+encodeURIComponent(i.id?i.id:"")+(i.authState?"%01"+i.authState:""));d||(d="_setAudienceManagerFields");c="http"+(a.loadSSL?"s":"")+"://"+c+"/id";e="d_visid_ver="+a.version+"&d_rtbd=json&d_ver=2"+(!e&&a.B?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+"&d_nsid="+(a.idSyncContainerID||0)+(e?"&d_mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(f?"&d_blob="+encodeURIComponent(f):"")+g;f=["s_c_il",a._in,d];b=c+"?"+
	e+"&d_cb=s_c_il%5B"+a._in+"%5D."+d;return{url:b,m:c+"?"+e,na:f}}return{url:b}};a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,j)})){var b=a.a(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,j)}));if(b)return b=a.z(),a.s(y,b.url,d,c,b)}return""};a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,j)})){var b=
	a.a(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,j)}));if(b){var b=a.z(),e=b.url;a.aa&&a.j(s,-1);return a.s(s,e,d,c,b)}}return""};a._supplementalDataIDCurrent="";a._supplementalDataIDCurrentConsumed={};a._supplementalDataIDLast="";a._supplementalDataIDLastConsumed={};a.getSupplementalDataID=function(d,c){!a._supplementalDataIDCurrent&&!c&&(a._supplementalDataIDCurrent=a.r(1));var b=a._supplementalDataIDCurrent;a._supplementalDataIDLast&&!a._supplementalDataIDLastConsumed[d]?
	(b=a._supplementalDataIDLast,a._supplementalDataIDLastConsumed[d]=j):b&&(a._supplementalDataIDCurrentConsumed[d]&&(a._supplementalDataIDLast=a._supplementalDataIDCurrent,a._supplementalDataIDLastConsumed=a._supplementalDataIDCurrentConsumed,a._supplementalDataIDCurrent=b=!c?a.r(1):"",a._supplementalDataIDCurrentConsumed={}),b&&(a._supplementalDataIDCurrentConsumed[d]=j));return b};l.OptOut={GLOBAL:"global"};a.getOptOut=function(d,c){if(a.isAllowed()){var b=a.z("_setMarketingCloudFields");return a.s(A,
	b.url,d,c,b)}return""};a.isOptedOut=function(d,c,b){return a.isAllowed()?(c||(c=l.OptOut.GLOBAL),(b=a.getOptOut(function(b){a.J(d,[b==l.OptOut.GLOBAL||0<=b.indexOf(c)])},b))?b==l.OptOut.GLOBAL||0<=b.indexOf(c):i):k};a.appendVisitorIDsTo=function(d){for(var c=r.Y,b=[[n,a.a(n)],[p,a.a(p)]],e="",f=0,g=b.length;f<g;f++){var h=b[f],j=h[0],h=h[1];h!=i&&h!==u&&(e=e?e+="|":e,e+=j+"="+encodeURIComponent(h))}try{return a.v(d,c,e)}catch(k){return d}};var r={p:!!m.postMessage,Ia:1,$:864E5,Y:"adobe_mc",u:/^[0-9a-fA-F\-]+$/};
	a.Db=r;a.la={postMessage:function(a,c,b){var e=1;c&&(r.p?b.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(b.location=c.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+a))},T:function(a,c){var b;try{if(r.p)if(a&&(b=function(b){if("string"===typeof c&&b.origin!==c||"[object Function]"===Object.prototype.toString.call(c)&&!1===c(b.origin))return!1;a(b)}),window.addEventListener)window[a?"addEventListener":"removeEventListener"]("message",b,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",
	b)}catch(e){}}};var x={M:function(){if(t.addEventListener)return function(a,c,b){a.addEventListener(c,function(a){"function"===typeof b&&b(a)},k)};if(t.attachEvent)return function(a,c,b){a.attachEvent("on"+c,function(a){"function"===typeof b&&b(a)})}}(),map:function(a,c){if(Array.prototype.map)return a.map(c);if(void 0===a||a===i)throw new TypeError;var b=Object(a),e=b.length>>>0;if("function"!==typeof c)throw new TypeError;for(var f=Array(e),g=0;g<e;g++)g in b&&(f[g]=c.call(c,b[g],g,b));return f},
	gb:function(a,c){return this.map(a,function(a){return encodeURIComponent(a)}).join(c)},ub:function(a){var c=a.indexOf("#");return 0<c?a.substr(c):""},lb:function(a){var c=a.indexOf("#");return 0<c?a.substr(0,c):a},Ya:function(a,c,b){a=a.split("&");b=b!=i?b:a.length;a.splice(b,0,c);return a.join("&")},nb:function(d,c,b){if(d!==p)return k;c||(c=a.trackingServer);b||(b=a.trackingServerSecure);d=a.loadSSL?b:c;return"string"===typeof d&&d.length?0>d.indexOf("2o7.net")&&0>d.indexOf("omtrdc.net"):k},ob:function(a){return Boolean(a&&
	a===Object(a))}};a.Jb=x;var L={C:function(){var a="none",c=j;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?a="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(c=k),0<Object.prototype.toString.call(window.Ab).indexOf("Constructor")&&(c=k));return{D:a,Mb:c}}(),ib:function(){return"none"===this.C.D?
	i:new window[this.C.D]},hb:function(d,c,b){var e=this;c&&(d.G=c);try{var f=this.ib();f.open("get",d.m+"&ts="+(new Date).getTime(),j);"XMLHttpRequest"===this.C.D&&(f.withCredentials=j,f.timeout=a.loadTimeout,f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var a;try{if(a=JSON.parse(this.responseText),a!==Object(a)){e.n(d,i,"Response is not JSON");break a}}catch(b){e.n(d,b,"Error parsing response as JSON");
	break a}try{for(var c=d.na,f=window,g=0;g<c.length;g++)f=f[c[g]];f(a)}catch(j){e.n(d,j,"Error forming callback function")}}});f.onerror=function(a){e.n(d,a,"onerror")};f.ontimeout=function(a){e.n(d,a,"ontimeout")};f.send();o.d[b]={requestStart:o.o(),url:d.m,sa:f.timeout,qa:o.wa(),ra:1};a.ha.Da.push(d.m)}catch(g){this.n(d,g,"try-catch")}},n:function(d,c,b){a.CORSErrors.push({Nb:d,error:c,description:b});d.G&&("ontimeout"===b?d.G(j):d.G(k,d))}};a.ja=L;var z={Ka:3E4,Z:649,Ha:k,id:i,S:[],P:i,va:function(a){if("string"===
	typeof a)return a=a.split("/"),a[0]+"//"+a[2]},g:i,url:i,jb:function(){var d="http://fast.",c="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(t.location.href);this.g||(this.g="nosubdomainreturned");a.loadSSL&&(d=a.idSyncSSLUseAkamai?"https://fast.":"https://");d=d+this.g+".demdex.net/dest5.html"+c;this.P=this.va(d);this.id="destination_publishing_iframe_"+this.g+"_"+a.idSyncContainerID;return d},ab:function(){var d="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(t.location.href);"string"===
	typeof a.K&&a.K.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+a.idSyncContainerID,this.P=this.va(a.K),this.url=a.K+d)},xa:i,ta:k,V:k,F:i,ac:i,tb:i,bc:i,U:k,H:[],rb:[],sb:[],za:r.p?15:100,Q:[],pb:[],oa:j,Ca:k,Ba:function(){return!a.idSyncDisable3rdPartySyncing&&(this.ta||a.Fb)&&this.g&&"nosubdomainreturned"!==this.g&&this.url&&!this.V},N:function(){function a(){e=document.createElement("iframe");e.sandbox="allow-scripts allow-same-origin";e.title="Adobe ID Syncing iFrame";
	e.id=b.id;e.style.cssText="display: none; width: 0; height: 0;";e.src=b.url;b.tb=j;c();document.body.appendChild(e)}function c(){x.M(e,"load",function(){e.className="aamIframeLoaded";b.F=j;b.t()})}this.V=j;var b=this,e=document.getElementById(this.id);e?"IFRAME"!==e.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==e.className?c():(this.F=j,this.ya=e,this.t()):a();this.ya=e},t:function(d){var c=this;d===Object(d)&&(this.Q.push(d),this.wb(d));if((this.Ca||!r.p||this.F)&&this.Q.length)this.I(this.Q.shift()),
	this.t();!a.idSyncDisableSyncs&&this.F&&this.H.length&&!this.U&&(this.Ha||(this.Ha=j,setTimeout(function(){c.za=r.p?15:150},this.Ka)),this.U=j,this.Ea())},wb:function(a){var c,b,e;if((c=a.ibs)&&c instanceof Array&&(b=c.length))for(a=0;a<b;a++)e=c[a],e.syncOnPage&&this.pa(e,"","syncOnPage")},I:function(a){var c=encodeURIComponent,b,e,f,g,h;if((b=a.ibs)&&b instanceof Array&&(e=b.length))for(f=0;f<e;f++)g=b[f],h=[c("ibs"),c(g.id||""),c(g.tag||""),x.gb(g.url||[],","),c(g.ttl||""),"","",g.fireURLSync?
	"true":"false"],g.syncOnPage||(this.oa?this.ma(h.join("|")):g.fireURLSync&&this.pa(g,h.join("|")));this.pb.push(a)},pa:function(d,c,b){var e=(b="syncOnPage"===b?j:k)?H:J;a.f();var f=a.a(e),g=k,h=k,i=Math.ceil((new Date).getTime()/r.$);f?(f=f.split("*"),h=this.xb(f,d.id,i),g=h.eb,h=h.fb,(!g||!h)&&this.ua(b,d,c,f,e,i)):(f=[],this.ua(b,d,c,f,e,i))},xb:function(a,c,b){var e=k,f=k,g,h,i;for(h=0;h<a.length;h++)g=a[h],i=parseInt(g.split("-")[1],10),g.match("^"+c+"-")?(e=j,b<i?f=j:(a.splice(h,1),h--)):b>=
	i&&(a.splice(h,1),h--);return{eb:e,fb:f}},qb:function(a){if(a.join("*").length>this.Z)for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)});a.join("*").length>this.Z;)a.shift()},ua:function(d,c,b,e,f,g){var h=this;if(d){if("img"===c.tag){var d=c.url,b=a.loadSSL?"https:":"http:",j,k,l;for(e=0,j=d.length;e<j;e++){k=d[e];l=/^\/\//.test(k);var m=new Image;x.M(m,"load",function(b,c,d,e){return function(){h.S[b]=i;a.f();var g=a.a(f),j=[];if(g){var g=g.split("*"),k,
	l,m;for(k=0,l=g.length;k<l;k++)m=g[k],m.match("^"+c.id+"-")||j.push(m)}h.Ga(j,c,d,e)}}(this.S.length,c,f,g));m.src=(l?b:"")+k;this.S.push(m)}}}else this.ma(b),this.Ga(e,c,f,g)},ma:function(d){var c=encodeURIComponent;this.H.push((a.Gb?c("---destpub-debug---"):c("---destpub---"))+d)},Ga:function(d,c,b,e){d.push(c.id+"-"+(e+Math.ceil(c.ttl/60/24)));this.qb(d);a.e(b,d.join("*"))},Ea:function(){var d=this,c;this.H.length?(c=this.H.shift(),a.la.postMessage(c,this.url,this.ya.contentWindow),this.rb.push(c),
	setTimeout(function(){d.Ea()},this.za)):this.U=k},T:function(a){var c=/^---destpub-to-parent---/;"string"===typeof a&&c.test(a)&&(c=a.replace(c,"").split("|"),"canSetThirdPartyCookies"===c[0]&&(this.oa="true"===c[1]?j:k,this.Ca=j,this.t()),this.sb.push(a))},vb:function(d){if(this.url===i||d.subdomain&&"nosubdomainreturned"===this.g)this.g="string"===typeof a.ka&&a.ka.length?a.ka:d.subdomain||"",this.url=this.jb();d.ibs instanceof Array&&d.ibs.length&&(this.ta=j);this.Ba()&&(a.idSyncAttachIframeOnWindowLoad?
	(l.X||"complete"===t.readyState||"loaded"===t.readyState)&&this.N():this.Za());"function"===typeof a.idSyncIDCallResult?a.idSyncIDCallResult(d):this.t(d);"function"===typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(d)},$a:function(d,c){return a.Hb||!d||c-d>r.Ia},Za:function(){function a(){c.V||(document.body?c.N():setTimeout(a,30))}var c=this;a()}};a.Eb=z;a.timeoutMetricsLog=[];var o={cb:window.performance&&window.performance.timing?1:0,Aa:window.performance&&window.performance.timing?
	window.performance.timing:i,W:i,O:i,d:{},R:[],send:function(d){if(a.takeTimeoutMetrics&&d===Object(d)){var c=[],b=encodeURIComponent,e;for(e in d)d.hasOwnProperty(e)&&c.push(b(e)+"="+b(d[e]));d="http"+(a.loadSSL?"s":"")+"://dpm.demdex.net/event?d_visid_ver="+a.version+"&d_visid_stg_timeout="+a.loadTimeout+"&"+c.join("&")+"&d_orgid="+b(a.marketingCloudOrgID)+"&d_timingapi="+this.cb+"&d_winload="+this.kb()+"&d_ld="+this.o();(new Image).src=d;a.timeoutMetricsLog.push(d)}},kb:function(){this.O===i&&(this.O=
	this.Aa?this.W-this.Aa.navigationStart:this.W-l.bb);return this.O},o:function(){return(new Date).getTime()},I:function(a){var c=this.d[a],b={};b.d_visid_stg_timeout_captured=c.sa;b.d_visid_cors=c.ra;b.d_fieldgroup=a;b.d_settimeout_overriden=c.qa;c.timeout?c.mb?(b.d_visid_timedout=1,b.d_visid_timeout=c.timeout-c.requestStart,b.d_visid_response=-1):(b.d_visid_timedout="n/a",b.d_visid_timeout="n/a",b.d_visid_response="n/a"):(b.d_visid_timedout=0,b.d_visid_timeout=-1,b.d_visid_response=c.zb-c.requestStart);
	b.d_visid_url=c.url;l.X?this.send(b):this.R.push(b);delete this.d[a]},yb:function(){for(var a=0,c=this.R.length;a<c;a++)this.send(this.R[a])},wa:function(){return"function"===typeof setTimeout.toString?-1<setTimeout.toString().indexOf("[native code]")?0:1:-1}};a.Lb=o;var w={isClientSideMarketingCloudVisitorID:i,MCIDCallTimedOut:i,AnalyticsIDCallTimedOut:i,AAMIDCallTimedOut:i,d:{},Fa:function(a,c){switch(a){case E:c===k?this.MCIDCallTimedOut!==j&&(this.MCIDCallTimedOut=k):this.MCIDCallTimedOut=c;break;
	case C:c===k?this.AnalyticsIDCallTimedOut!==j&&(this.AnalyticsIDCallTimedOut=k):this.AnalyticsIDCallTimedOut=c;break;case B:c===k?this.AAMIDCallTimedOut!==j&&(this.AAMIDCallTimedOut=k):this.AAMIDCallTimedOut=c}}};a.isClientSideMarketingCloudVisitorID=function(){return w.isClientSideMarketingCloudVisitorID};a.MCIDCallTimedOut=function(){return w.MCIDCallTimedOut};a.AnalyticsIDCallTimedOut=function(){return w.AnalyticsIDCallTimedOut};a.AAMIDCallTimedOut=function(){return w.AAMIDCallTimedOut};a.idSyncGetOnPageSyncInfo=
	function(){a.f();return a.a(H)};0>q.indexOf("@")&&(q+="@AdobeOrg");a.marketingCloudOrgID=q;a.cookieName="AMCV_"+q;a.sessionCookieName="AMCVS_"+q;a.cookieDomain=a.Pa();a.cookieDomain==m.location.hostname&&(a.cookieDomain="");a.loadSSL=0<=m.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=3E4;a.CORSErrors=[];a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";var K={};K[y]=j;K[s]=j;a.Ma();if(v&&"object"==typeof v){for(var F in v)!Object.prototype[F]&&(a[F]=v[F]);a.idSyncContainerID=
	a.idSyncContainerID||0;a.f();L=a.a(I);F=Math.ceil((new Date).getTime()/r.$);!a.idSyncDisableSyncs&&z.$a(L,F)&&(a.j(s,-1),a.e(I,F));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();a.getAudienceManagerBlob();a.Ta(a.serverState)}if(!a.idSyncDisableSyncs){z.ab();x.M(window,"load",function(){l.X=j;o.W=o.o();o.yb();var a=z;a.Ba()&&a.N()});try{a.la.T(function(a){z.T(a.data)},z.P)}catch(M){}}}
	Visitor.getInstance=function(q,v){var a,m=window.s_c_il,l;0>q.indexOf("@")&&(q+="@AdobeOrg");if(m)for(l=0;l<m.length;l++)if((a=m[l])&&"Visitor"==a._c&&a.marketingCloudOrgID==q)return a;return new Visitor(q,v)};(function(){function q(){v.X=a}var v=window.Visitor,a=v.La,m=v.Ja;a||(a=!0);m||(m=!1);window.addEventListener?window.addEventListener("load",q):window.attachEvent&&window.attachEvent("onload",q);v.bb=(new Date).getTime()})();
	/******** VISITOR ID SERVICE CONFIG - REQUIRES VisitorAPI.js ********/
	var visitor = Visitor.getInstance("3A4B7BAF56F01DA67F000101@AdobeOrg", {
		trackingServer: "westpacbankinggroup.sc.omtrdc.net", // same as s.trackingServer
		trackingServerSecure: "westpacbankinggroup.sc.omtrdc.net", // same as s.trackingServerSecure
		cookieDomain: (/[0-9]{1,3}$/i).test(location.hostname)? location.hostname : location.hostname.split('.').slice(1).join('.'),
		overwriteCrossDomainMCIDAndAID: true //Set overwrite property 
	});

	var util = window.util || {};
	util.w_wtT =window.w_wtT || window.testTracking || {};//test environment variables
	util.pathConcatDelim = ':';
	util.queryVarsList= '';
	util.pathExcludeList=''; // elements to exclude from the path - index.html? default.aspx for info?
	util.pathExcludeDelim = ';'; // portion of the path to exclude - was ;
	util.siteID= '';  //s.siteID set in doPlugins to allow changing to 'app' based on visitorID cookie from apps
	util.version = 'U0.02';
	//util.codeVers="vid"+visitor.version+","+util.version;
	util.location = window.location;
	// moved from original responsive CSS function in analytics.js
	util.isVisible_ex = "util.isVisible(@selector, @element) \nreturn true if the item is not hidded";
	util.isVisible = function (selector, element) {
		var elem = selector ? document.querySelector && document.querySelector(selector) : element, ieDisplayNoneBug;
		// fix for IE bug with inline and block elements stating offsets incorrectly
		ieDisplayNoneBug = elem && elem.currentStyle && elem.currentStyle.display === 'none' ? true : false;
		//console.log('tabIndex: '+elem.tabIndex);
		return elem && ((elem.offsetWidth > 0 && elem.offsetHeight > 0) && elem.tabIndex > -1) && !ieDisplayNoneBug; // other conditions can be added if required
	};
	util.random_ex ="util.random() \nreturn an rendom number";
	util.random = function(){
		var dd = new Date(); 
		return Math.round(Math.abs(Math.sin(dd.getTime()))*1000000000)%10000000;
	};
	util.loadScript_ex ="util.loadScript(@url,@delay,@random, @idVal) \nload an script async \n@url destination URL, \n@delay is use for setTimeout defauel 4000ms  \n@random supply string which will be replaced by rendom number at runtime\n @idVal any value supplied this will replace {ID} paramer inside the URL  \n@example util.loadScript('//abc.abc.com/pages/scripts/abc.js?id={ID}&g=RAND',4,'RAND','abc123')";
	util.loadScript = function(url,delay,random,idVal){
		var d = delay ? d=delay : 4000; //default delay 4000ms
		url = random ? String(url).replace(new RegExp(random),util.random()) : String(url);
		url = idVal ? String(url).replace(/\{ID\}/g,idVal) : String(url);
		setTimeout(function(){
			var a=document.createElement("script");
			var b=document.getElementsByTagName("script")[0];
			a.src=document.location.protocol+url;
			a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)
		}, d);
	};
	util.loadImgPixel_ex ="util.loadImgPixel(@url,@delay,@random, @idVal) \nload an image \n@url destination URL, \n@delay is use for setTimeout defauel 4000ms  \n@random supply string which will be replaced by rendom number at runtime\n @idVal any value supplied this will replace {ID} paramer inside the URL  \n@example util.loadScript('//abc.abc.com/pages/scripts/abc.js?id={ID}&g=RAND',4,'RAND','abc123')";
	util.loadImgPixel = function(url,delay,random,idVal){
		var d = delay ? d=delay : 4000; //default delay 4000ms
		url = random ? String(url).replace(new RegExp(random),util.random()) : String(url);
		url = idVal ? String(url).replace(/\{ID\}/g,idVal) : String(url);
		setTimeout(function(){
			var ad_image = new Image(1,1);
			ad_image.src = document.location.protocol+url;
			document.body.appendChild(ad_image)
		}, d);
	};
	util.getExp_ex="util.getExp() \nreturn responsive experence as mob, tab or desktop\based on css class .analytics-experience .pagedetails-experience";
	util.getExp = function () {
		var isVis = util.isVisible,
		cssExperienceMob = isVis('.pagedetails-experience-mob') || isVis('.analytics-experience-mob'), // responsive site mobile class visible check. name changed to analytics-... to be more relevant
		cssExperienceTab = isVis('.pagedetails-experience-tab') || isVis('.analytics-experience-tab'), // responsive site tablet class visible check. name changed to analytics-... to be more relevant
		cssExperienceDesktop = isVis('.analytics-experience-desktop'), // responsive site tablet class visible check. name changed to analytics-... to be more relevant
		cssNotDetected = cssExperienceMob === null && cssExperienceTab === null && cssExperienceDesktop === null,
		experienceResult;

		// logic to determine experience based on elements with classes being found/hidden/visible
		experienceResult = (cssExperienceMob || (cssExperienceMob !== false && cssExperienceDesktop === false && !cssExperienceTab)) ? 'mob' : ((cssExperienceTab || (cssExperienceTab !== false && cssExperienceDesktop === false && !cssExperienceMob)) ? 'tab' : 'desktop'); // TESTING with !desktop options etc.

		// save the experience determined by the logic
		util.expOrig = util.expOrig || experienceResult;

		// if no elements with classes detected, use the first saved experience
		if (cssNotDetected) {
			experienceResult = util.expOrig;
		}

		return experienceResult;
	};
	util.addHandler_ex="util.addHandler(@element, @event, @handler) add event Listener";
	util.addHandler = function (element, event, handler) {
		if (element.addEventListener) {
			element.addEventListener(event, handler, false);
		} else {
			if (element.attachEvent) {
				element.attachEvent('on' + event, handler);
			}
		}
	};
	util.onReady = function (func) {
		if (/complete/.test(document.readyState)) { // fire/attach immediately in case window load has already occured
				func();
			} else {
				util.addHandler(win, 'load', function () { // fire/attach when window loads. include a timeout to prevent Chrome/Safari spinner immediately after load
				setTimeout(func, 4); // should be 4
			});
		}
	};
	util.cookieRead_ex="util.cookieRead(@sKey) \nreturn the value of a given cookie \@sKey =cookie name";
	util.cookieRead = function (sKey) {
		return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || '';
	};
	util.combinedcookieRead_ex ="util.combinedcookieRead(@sKey,@cKey) \nreturn the value of a given combined cookie rata \@sKey =cookie name \@cKey =Combined cookie name \n\@return as single value or an array of objects";
	util.combinedcookieRead = function (sKey,cKey) {
		var temp = decodeURIComponent(util.cookieRead(sKey)).match(new RegExp(cKey+'=(.+?)\\|\\d{13}\\;'),'$1');
		temp =temp ? temp[1].replace(/\[(\[.*?\])\]/g,'$1'): '';
		temp = temp.match(/\'(.+?)\'/g)? temp.match(/\'(.+?)\'/g, $1 ): temp;
		return temp;
	};
	util.cookieWrite_ex="util.cookieWrite(@sKey, @sValue, @vEnd, @sPath, @sDomain, @bSecure) \nWrite a cookie with given value \n@sKey =cookie name \n@sValue = cookie value, \n@vEnd = cookie expiry \n@sPath = domain path \n@sDomain = cookie domain \n@bSecure = secure flug";
	util.cookieWrite = function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
		if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
			return false;
		}
		var sExpires = '';
		if (vEnd && vEnd.constructor === Date) {
			sExpires = '; expires=' + vEnd.toUTCString();
		}
		document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
		return true;
	};

	util.scriptElement = function (id) {
		var existing = document.getElementById(id),
		scripts = document.getElementsByTagName('script')[0],
		//sibling = scripts[scripts.length - 1],
		element;
		
		if (existing) {
			return existing;
		}
		
		element = document.createElement('script');
		element.id = id;
		//element.type = 'text/javascript';
		element.async = 1;
		//element.defer = true;
		
		//sibling.parentNode.insertBefore(element, sibling.nextSibling);
		scripts.parentNode.insertBefore(element, scripts);
		
		return element;
	};
	util.cloneObject_ex ="util.cloneObject(@oToBeCloned, @clones)";
	util.cloneObject=function (oToBeCloned, clones) {
		var oClone,
		Constr = oToBeCloned && oToBeCloned.constructor ? oToBeCloned.constructor : undefined,
		lp,
		len,
		cloneRef,
		alreadyCloned,
		prpty;
		
		if (!oToBeCloned || (Constr !== RegExp && Constr !== Date && Constr !== Function && Constr !== Object && Constr !== Array)) {
			return oToBeCloned;
		}
		
		switch (Constr) {
			// handle special object types
		case RegExp:
			oClone = new Constr(oToBeCloned.source, 'g'.substr(0, Number(oToBeCloned.global)) + 'i'.substr(0, Number(oToBeCloned.ignoreCase)) + 'm'.substr(0, Number(oToBeCloned.multiline)));
			break;
		case Date:
			oClone = new Constr(oToBeCloned.getTime());
			break;
		case Function:
			oClone = oToBeCloned;
			break;
		default:
			// should only be plain objects and arrays that need looping
			oClone = new Constr();
		}
		
		clones = clones || [];
		for (lp = 0, len = clones.length; lp < len; lp++) {
			cloneRef = clones[lp];
			if (cloneRef[0] === oToBeCloned) {
				alreadyCloned = cloneRef[1];
				break;
			}
		}
		if (alreadyCloned) {
			return alreadyCloned;
		}
		clones.push([oToBeCloned, oClone]); // keep track of objects we've cloned
		for (prpty in oToBeCloned) {
			if (oToBeCloned.hasOwnProperty(prpty)) {
				if (oToBeCloned[prpty] === oToBeCloned) {
					oClone[prpty] = oClone;
				} else {
					oClone[prpty] = util.cloneObject(oToBeCloned[prpty], clones);
				}
			}
		}
		return oClone;
	};
	util.qSA_ex ="util.qSA(@doc, @selector, @tag, @attr, @regex) return selected elements \n@doc = document  \n@selector = any selecton \nFor non supported browser: \n@tag, @attr, @regex"; 
	util.qSA = function (doc, selector, tag, attr, regex) {
		var lp,
		len,
		result = [],
		target,
		tempAttr;
		
		if (doc && doc.querySelectorAll) {
			result = doc.querySelectorAll(selector);
		} else {
			target = doc && doc.getElementsByTagName(tag);
			if (attr && regex) {
				for (lp = 0, len = target.length; lp < len; lp++) {
					tempAttr = (attr === 'class' ? target[lp].className : target[lp].getAttribute(attr));
					if (tempAttr && regex.test(tempAttr)) {
						result.push(target[lp]);
					}
				}
			} else if (regex) {
				for (lp = 0, len = target.length; lp < len; lp++) {
					if (regex.test(target[lp].innerHTML)) {
						result.push(target[lp]);
					}
				}
			} else {
				return target || 0;
			}
		}
		return result;
	};
	util.getText_ex = "util.getText(@elem) \nreturn text of any element"
	util.getText = function (elem) {
		var elemText;
		if (elem) {
			elemText = elem.innerText || elem.textContent;
		} else {
			elemText = '';
		}
		return elemText.replace(/^\s+|\s+$/g, ''); // trim
	};
	util.removeNumbers_ex = "util.removeNumbers(@str) \nremove number from a given string" 
	util.removeNumbers = function (str) {
		return str.replace(/\s+\(\s*\d+\s*\)$/g, ''); // remove numbers and trim
	};
	util.addCallback = function (scriptEl, readyCheck, callback) {
		var thisFunction = helpers.addCallback;
		thisFunction.q = thisFunction.q || [];
		
		if (scriptEl.readyState) {
			thisFunction.q.push(callback); // ability to add multiple callbacks in IE
			
			scriptEl.onreadystatechange = function () {
				var callbackItem;
				
				//console.log('readyState = ' + scriptEl.readyState);
				//console.log('s = ' + win.s);
				//console.log('readyCheck IE = ' + readyCheck());
				
				if (/loaded|complete/.test(scriptEl.readyState) && readyCheck()) { // readyCheck to verify that all scripts required are actually ready (mainly to confirm IE readystate)
					scriptEl.onreadystatechange = null;
					while (thisFunction.q.length) {
						callbackItem = thisFunction.q.shift();
						callbackItem();
					}
				}
			};
		} else {
			//console.log('readyCheck non-IE = ' + readyCheck());
			helpers.addHandler(scriptEl, 'load', function () {
				if (readyCheck()) { // in case the file loaded is not actually s_code
					callback();
				}
			});
		}
	};
	util.guidRgx = /\b\w{8}-\w{4}-\w{4}-\w{4}-\w{12}\b/g;
	util.cleanJSON_ex = "util.cleanJSON(@JSONdata) \n remove non-printable and other non-valid JSON chars";
	util.cleanJSON = function (JSONdata) {
		JSONdata = JSONdata.replace(/\\n/g, "\\n")  
					   .replace(/\\'/g, "\\'")
					   .replace(/\\"/g, '\\"')
					   .replace(/\\&/g, "\\&")
					   .replace(/\\r/g, "\\r")
					   .replace(/\\t/g, "\\t")
					   .replace(/\\b/g, "\\b")
					   .replace(/\\f/g, "\\f");
		// remove non-printable and other non-valid JSON chars
		JSONdata = JSONdata.replace(/[\u0000-\u0019]+/g,""); 
		return JSONdata = JSON.parse(JSONdata);
	};

	util.cleanURL_ex = "util.cleanURL(@loc, @locType) \nremove guidRgx,referrer querystring parameter, multiple slashes, session ID,hash or hashbang\@locType = 1 remove cid";
	util.cleanURL = function (loc, locType) {
		var cleanedUrl = (loc || '')
		.replace(/(\w)\/\/+/g, '$1/') // replace multiple slashes after a word char. with single slash (except for ://) for clean pageName (from location)
		.replace(/((?:&|\?)referrer=.*?(?=&|$))/ig, '') // always remove referrer querystring parameter - it was generated for unica
		.replace(/(^https?:.+?(?:online|banking).+\/cust\/wps\/(my)?portal\/[pw]ol\/)!ut\/.*/i, '$1oregon-application') // Oregon - portal/pol|wol. remove session ID in path
		//.replace(/(^https?:.+?(www.)?forms.+\.nsf)(?:.*\w{32}.*)/i,'$1$2'); // Remove session ID only from Domino path $1 adds www. ???
		.replace(/(^https?:.+?(forms|online)(?:\.|-).*\.nsf.*?)(?:\/\w{32}(?=\?))/i, '$1') // Remove session ID only from Domino path $1 adds www. ???
		.replace(util.guidRgx, '') // remove OTP user GUID
		.replace(/#+!*$/, '') // remove hash or hashbang (or multiples of these characters) at end of loc (only) to unify URLs that would otherwise match
		.replace(/(default|index)(\.html|\.htm)/, '')
		.replace(/\.html|\.htm/, '')
	;

		if (locType === 1) {
			// locType 1 is page location
			// Keep querystring if it contains cid parameter for paid search detection
			// remove complete querystring for privacy/security/uniqueness/shorter request if not on Domino/oregon? form (handled separately)
			//cleanedUrl = cleanedUrl.replace(/\?(?!(?:openform|readform|opendocument|funcreqd)).*/i, '');
			//cleanedUrl = cleanedUrl.replace(/\?(?!(?:cid=.+|.*&cid=.+|openform|readform|opendocument|funcreqd)).*/i, '');
			//cleanedUrl = cleanedUrl.replace(/(\?|&)(?!(?:cid=.+|openform|readform|opendocument|funcreqd)).*/i, '');
			//cleanedUrl = cleanedUrl.replace(/((\?|&)(?!(?:cid=.+|openform|readform|opendocument|funcreqd))|#).*/i, ''); // this regex doesn't work. Still replaces if CID somewhere in querystring

			// if querystring doesn't contain things we want to keep, remove it. Remove hash and append it to eVar only.
			if (!(/(\?|&)(cid=.+|openform|readform|opendocument|funcreqd)/i).test(cleanedUrl)) {
				//cleanedUrl = cleanedUrl.replace(/(\?|&).*/, '');
				cleanedUrl = cleanedUrl.replace(/(\?|&|#).*/, '');
			}
		}
		if (locType === 2) {
			cleanedUrl = cleanedUrl.replace(/(\?|&|#).*/, '');
		}
		//if (locType === 2) {
		// locType 2 is referrer.

		// truncate to avoid excessive pixel length (2047 IE limit)
		// trim to 150 chars.
		//if (cleanedUrl.length > 150) {
		//	cleanedUrl = cleanedUrl.substring(0, 150) + '...';
		//}

		// extended to 400 chars. to capture longer search referrers with q=keyword
		// standard s_code trims to 255...
		//cleanedUrl = cleanedUrl.length > 400 ? cleanedUrl.substring(0, 400) + '...' : cleanedUrl;
		//}

		return cleanedUrl;
	};
	util.getLoc_ex = "util.getLoc() return full current URL for test or prod"; 
	util.getLoc = function () {
		return util.w_wtT.location || window.location;
	};
	util.defaultPage = /^\/((default|index)\.html?)?$/.test(util.getLoc().pathname) ? 'home' : ''; // filename to add when none exists (www home page)
	// default/initialised s.pageURL
	util.pageURL = util.cleanURL(util.getLoc().href, 1);

	// Use secure on https:
	util.ssl = util.getLoc().protocol === 'https:';
	// time parting
	util.timePart = function () {
		var dateNow = new Date(),
		dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return dayNames[dateNow.getDay()] + ' ' + ('00' + dateNow.getHours()).slice(-2) + ':' + (dateNow.getMinutes() > 29 ? '30' : '00');
	};

	util.lCase_ex ="util.lCase(@val, @alt) \nlower case strings or (not set) if empty";
	util.lCase = function (val, alt) {
		var altVal = alt ? '(not set)' : '';
		return String(val || altVal).toLowerCase();
	};
	util.clean_ex ="util.clean(@str) \nclean strings - trim and remove multiple spaces for consistency";
	util.clean = function (str) {
		return (str ? String(str) : '').replace(/\s+/g, ' ').replace(/^\s|\s$/g, '');
	};

	util.fixZero_ex = "util.fixZero(@val) return 'zero' for '0' value";
	util.fixZero = function (val) {
		return String(val) === '0' ? 'zero' : val;
	};
	// return filtered search terms and replace numbers if necessary
	util.srchTerm = function (val) {
		var srchTerm = val,
		lp = 8,
		hashes = '########'; //,hashes=new Array(lp).join('#')

		if (srchTerm) {
			//srchTerm=s.w_clean(s.w_lCase(srchTerm));
			srchTerm = util.lCase(srchTerm);
			while (lp--) {
				srchTerm = srchTerm.replace(new RegExp('(\\d{4}.?)\\d{' + (lp + 1) + ',}', 'g'), '$1' + hashes.substring(0, lp + 1));
			}
		}
		//console.log(srchTerm);
		return srchTerm;
	};
	// cap numbers to reduce number of items for classifactions
	util.cap_ex = "util.cap(@item, @cap) \nif item value is greater than, or equal to cap, append '+'";
	util.cap = function (item, cap) {
		return item >= cap ? cap + '+' : item; // if item value is greater than, or equal to cap, append '+'. event50 (page load time) removes the '+', because the event value must be numeric.
	};

	// Helper function for standard numeric s.apl event call to reduce frequently used code
	util.addEvt = function (obj,evtName,evtValue){
		// allow text or numeric events to be passed
		obj['ev_'+ evtName] = evtValue ? evtValue : 1; 
		//s2.events = s2.apl(s2.events, isNaN(evt) ? evt || '' : 'event' + evt, ',', 2);
	};
	util.addSerialiseEvt = function (obj,evtNumber,evtValue){
		// allow text or numeric events to be passed
		obj['&&events'] = evtValue ? evtNumber + ':'+evtValue : evtNumber + ':1'; 
		//s2.events = s2.apl(s2.events, isNaN(evt) ? evt || '' : 'event' + evt, ',', 2);
	};
	util.fl_ex = "util.fl(@str, @len) \nreturn substring of a given length";
	util.fl = function(x,l){
	return x?(''+x).substring(0,l):x
	};

	util.p_c = function (v, c) {
		var x = v.indexOf('=');
		return c.toLowerCase() == v.substring(0, x < 0 ? v.length : x).toLowerCase() ? v : 0;
	};

	util.pt_ex ="pt - runs function in f argument against list of \nvariables declared in x (delimited by d), with a as an optional \nargument to be included in f function call";
	util.pt=function(x,d,f,a){
		var t=x,
		z=0,
		y,
		r;
		while (t){
			y = t.indexOf(d);
			y = y < 0 ? t.length : y;
			t = t.substring(0, y);
			r = util.p_c(t, a);
			if (r)
				return r;
			z += y + d.length;
			t = x.substring(z, x.length);
			t = z < x.length ? t : ''
		}
		return '';
	};
	util.isPageHidden_ex ="check if whole page is hidden/visible";
	util.isPageHidden = function (u) {
		return document.hidden || (document.msHidden || document.webkitHidden);
	};
	util.isHomePage_ex ="check if the page is home page";
	util.isHomePage = function (u) {
		return /^\/((default|index)\.html?)?$/.test(util.getLoc().pathname);
	};
	util.trackImprs = function () {
		var lp,
		targetSet,
		targetItem,
		linkHref,
		attrHref,
		linkPid,
		pidRecordedFlag = 'data-analytics-pid-imp',
		arrImprs = [];

		//targetSet = document.getElementsByTagName('A');
		targetSet = util.qSA(document, "a[href*='pid\\=']", 'A', 'href', (/pid=/i));

		lp = targetSet.length;
		while (lp--) {
			// check for any links with pid= and add them to the impressions list
			// THIS BLOCK SHOULD RUN AFTER S.T(), ELSE DOPLUGINS WILL TRACK IMPRESSIONS WITH THE CURRENT PAGE (post-load impressions are only meaningfully reported against previous page)
			targetItem = targetSet[lp];

			// if it's an anchor link, look in the anchor only, not full URL in case already a pid click parameter in current querystring
			attrHref = targetItem.getAttribute('href');
			linkHref = /^#/.test(attrHref) ? attrHref : targetItem.href;
			linkPid = util.getQueryParam('pid', '', linkHref);

			
			if (linkPid) {
			console.log(targetItem.href);
			console.log('s.w_trackImprs found pid: ' + linkPid);
			console.log('Visible size?: ' + targetItem.offsetWidth + 'x' + targetItem.offsetHeight + '. Vis test === ' + (linkPid && util.isVisible(0, targetItem)));
			}
			

			// fix for IE bug with inline and block elements stating offsets incorrectly
			//ieDisplayNoneBug = target[lp].currentStyle && target[lp].currentStyle.display === 'none' ? true : false;

			// not an impression if the element is not visible
			//if (linkPid && (target[lp].offsetWidth > 0 && target[lp].offsetHeight > 0)) {
			//if (linkPid && (target[lp].offsetWidth > 0 && target[lp].offsetHeight > 0) && !ieDisplayNoneBug) {
			//if (linkPid && s.w_isVis(0, targetItem)) {
			if (linkPid && util.isVisible(0, targetItem) && !targetItem.getAttribute(pidRecordedFlag)) {

				// if not already collected on this window load
				//window.console && console.log(linkPid + ' collected? = ' + targetItem.getAttribute(pidRecordedFlag));

				arrImprs.push(linkPid.replace(/,/g, '%2C')); // encode commas in url pid's so they arent split into multiple impressions

				// set a flag
				targetItem.setAttribute(pidRecordedFlag, '1');
			}
		}
		if (arrImprs) {
			window.console && console.log('s.w_trackImprs to send = ' + arrImprs.join(','));
			util.trackImpression(arrImprs.join(','));
		}
	};
	util.trackImpression = function (detail) {
		var lp,
		len,
		newData,
		items,
		ckName = 'visImpTmp',
		detailObj = detail,
		attrHref,
		linkHref,
		pidRecordedFlag = 'data-analytics-pid-imp';
		if (!util.isPageHidden()) {
			if (detailObj && detailObj.nodeName === 'A') {
				if (util.isVisible(0, detailObj) && !detailObj.getAttribute(pidRecordedFlag)) {
					attrHref = detailObj.getAttribute('href');
					linkHref = /^#/.test(attrHref) ? attrHref : detailObj.href;
					detail = util.getQueryParam('pid', '', linkHref);
					if (detail) {
						detailObj.setAttribute(pidRecordedFlag, '1');
					}
				} else {
					detail = 0;
				}
			}
			if (detail && ckName) {
				newData = String(detail || '');
				items = newData.split(',');
				newData = s3.c_r(ckName) || '';
				for (lp = 0, len = items.length; lp < len; lp++) {
					if (items[lp]) {
						newData = s3.apl(newData, util.lCase(items[lp]), ',', 2);
					}
				}
				// if the cookie has more than five banners send a custom request to prevent the string becoming truncated? How long are the pid's? evar=255 chars
				//s.c_w('banners',newData);
					s3.c_w(ckName, newData, new Date(+new Date() + (24 * 60 * 60 * 1000))); // keep impressions in cookie for 24 hours
				
			}
		}
		return newData;
	};
	util.getPageName = function (u) {
		var v = u || String(util.pageURL),
		x = v.indexOf(':'),
		y = v.indexOf('/', x + 4),
		z = v.indexOf('?'),
		c = util.pathConcatDelim,
		e = util.pathExcludeDelim,
		g = util.queryVarsList,
		d = util.siteID,
		n = d || '',
		q = z < 0 ? '' : v.substring(z + 1),
		p = v.substring(y + 1, q ? z : v.length);
		z = p.indexOf('#');
		p = z < 0 ? p : util.fl(p, z);
		x = e ? p.indexOf(e) : -1;
		p = x < 0 ? p : util.fl(p, x);
		p += !p || p.charAt(p.length - 1) == '/' ? util.defaultPage : '';
		y = c || '/';
		while (p) {
			x = p.indexOf('/');
			x = x < 0 ? p.length : x;
			z = util.fl(p, x);
			if (!util.pt(util.pathExcludeList, ',', 'p_c', z)) {
				n += n ? y + z : z;
			}
			p = p.substring(x + 1);
		}
		y = c || '?';
		while (g) {
			x = g.indexOf(',');
			x = x < 0 ? g.length : x;
			z = util.fl(g, x);
			z = util.pt(q, '&', 'p_c', z);
			if (z) {
				n += n ? y + z : z;
				y = c || '&';
			}
			g = g.substring(x + 1);
		}
		return n;
	};

	/*
	 * Plugin: getValOnce_v1.1
	 */
	util.getValOnce = function (v, c, e, t) {
		// value, cookie, time amount, time type (mins/days)
		var a = new Date(),
		vv = v || '',
		cc = c || 'u_gvo',
		ee = e || 0,
		i = t == 'm' ? 60000 : 86400000,
		k;
		k = util.cookieRead(c);
		if (vv) {
			a.setTime(a.getTime() + ee * i);
			util.cookieWrite(cc, vv, ee == 0 ? 0 : a);
		}
		return vv == k ? '' : vv;
	};
	/*
	 * Plugin: getVisitNum - version 3.0
	 */
	util.getVisitNum = function (tp, c, c2) {
		var e = new Date,
		cval,
		cvisit,
		ct = e.getTime(),
		d;
		if (!tp) {
			tp = 'm';
		}
		if (tp == 'm' || tp == 'w' || tp == 'd') {
			eo = util.endof(tp),
			y = eo.getTime();
			e.setTime(y);
		} else {
			d = tp * 86400000;
			e.setTime(ct + d);
		}
		if (!c) {
			c = 's3_vnum';
		}
		if (!c2) {
			c2 = 's3_invisit';
		}
		cval = util.cookieRead(c);
		if (cval) {
			var i = cval.indexOf('&vn='),
			str = cval.substring(i + 4, cval.length),
			k;
		}
		cvisit = util.cookieRead(c2);
		if (cvisit) {
			if (str) {
				e.setTime(ct + 1800000);
				util.cookieWrite(c2, 'true', e);
				return str;
			} else {
				return 'unknown visit number';
			}
		} else {
			if (str) {
				str++;
				k = cval.substring(0, i);
				e.setTime(k);
				util.cookieWrite(c, k + '&vn=' + str, e);
				e.setTime(ct + 1800000);
				util.cookieWrite(c2, 'true', e);
				return str;
			} else {
				util.cookieWrite(c, e.getTime() + '&vn=1', e);
				e.setTime(ct + 1800000);
				util.cookieWrite(c2, 'true', e);
				return 1;
			}
		}
	};
	util.dimo = function (m, y) {
		var d = new Date(y, m + 1, 0);
		return d.getDate();
	};
	util.endof = function (x) {
		var t = new Date;
		t.setHours(0);
		t.setMinutes(0);
		t.setSeconds(0);
		if (x == 'm') {
			d = util.dimo(t.getMonth(), t.getFullYear()) - t.getDate() + 1;
		} else if (x == 'w') {
			d = 7 - t.getDay();
		} else {
			d = 1;
		}
		t.setDate(t.getDate() + d);
		return t;
	};

	// serialisation value for events
	util.serial = function () {
		var serial = ('0000000' + Math.floor(Math.random() * (268435455 + 1)).toString(16)).slice(-7) + String(+new Date());
		//console.log('serial = ' + serial + ' ....... length ==== ' + serial.length);
		return String(serial).length === 20 ? serial : '';
	};

	// maintain serialisation for the same form/product/any item and reset after complete of same form
	util.serialise = function (serialKey, formStep) {
		var lStorKey = 'analytics_aoSerials',
		keyName = serialKey && String(serialKey).replace(/\W/g, ''),
		serialStore = util.lStor('get', lStorKey),
		dateStamp = new Date(),
		serialDay = String(dateStamp.getFullYear()) + (dateStamp.getMonth() + 1) + dateStamp.getDate(), // serial memory persists for current day
		serialVisit = util.getVisitNum(365), // serial memory persists for current visit
		//serialRange = serialVisit >= 1 ? serialVisit : serialDay, // persist for visit if number returned, else day
		serialRange = serialDay + (serialVisit >= 1 ? serialVisit : 0), // persist for visit per day if number returned, else day + 0
		newSerial = util.serial(),
		setSerial = '';

		//console.log('serialStore = ' + serialStore);
		//console.log('newSerial = ' + newSerial);
		//console.log('serialDay = ' + serialDay);
		//console.log('serialVisit = ' + serialVisit);

		if (keyName && (formStep === 'start' || formStep === 'complete')) {
			if (serialStore.indexOf(serialRange + ',') !== 0) {
				// reset the store each day or if incorrect format
				util.lStor('set', lStorKey, serialRange + ',' + keyName + '=' + newSerial + formStep);
			}

			// check if localStorage is working
			serialStore = util.lStor('get', lStorKey);

			if (serialStore) {
				// if storage found, check if this thing has been hit already and get the serial
				setSerial = serialStore.match(new RegExp(',' + keyName + '=(.{20}(start|complete)?)(?=,|$)'));
				setSerial = setSerial && setSerial[1] ? setSerial[1] : '';

				//console.log('setSerial 1 = ' + setSerial);

				if (!setSerial) {
					// if this thing is not serialised yet, add the details
					util.lStor('set', lStorKey, serialStore + ',' + keyName + '=' + newSerial + formStep);
					setSerial = newSerial;
				} else {
					// if complete step of a serialised form, set to complete if was previously start
					if (formStep === 'complete' && setSerial.indexOf('start') === 20) {
						util.lStor('set', lStorKey, serialStore.replace(new RegExp('(,' + keyName + '=.{20})(start)(?=,|$)'), '$1' + formStep));
					}
					// if start step of a previously completed serial form, set a new serial
					if (formStep === 'start' && setSerial.indexOf('complete') === 20) {
						util.lStor('set', lStorKey, serialStore.replace(new RegExp('(,' + keyName + '=)(.{20})(complete)(?=,|$)'), '$1' + newSerial + formStep));
						setSerial = newSerial;
					}

					// if start/start or complete/complete, just trim the serial taken from the storage
					setSerial = setSerial.slice(0, 20);

					//console.log('setSerial 2 = ' + setSerial);
				}
			}
		}
		console.log('setSerial 3 = ' + setSerial);
		//console.log('length = ' + setSerial.length);
		return String(setSerial).length === 20 ? setSerial : '';
	};
	util.lStor = function (action, key, data) {
		try {
			if (action === 'set') {
				if (/^reset$/i.test(data)) {
					localStorage.removeItem(key);
					//sessionStorage.removeItem(key); // zzzzz consider session storage only
				} else {
					if (typeof data !== 'string') {
						try {
							data = JSON.stringify(data);
						} catch (err) {
							//s.w_log(err);
							data = '';
						}
					}
					localStorage.setItem(key, data);
					//sessionStorage.setItem(key, data);
				}
				return true;
			}
			if (action === 'get') {
				return localStorage.getItem(key) || '';
				//return sessionStorage.getItem(key);
			}
		} catch (err) {
			//console.log(err);
			return '';
		}
	};
	util.valReplace = function (initialVal, replaceDetails) {
		//console.log('initialVal = ' + initialVal);
		var prpty,
		//replaceSet = s.w_lStor('get', replaceDetails) || '[]',
		replaceSet = replaceDetails || [],
		replaceSetLength,
		replaceItem,
		resultName = initialVal;

		try {
			if (typeof replaceSet === 'string') {
				replaceSet = JSON.parse(replaceSet);
			}
		} catch (err) {
			//s.w_log(err);
			replaceSet = [];
		}
		//console.log('replaceSet = ' + replaceSet);
		//console.log(replaceSet);

		replaceSetLength = replaceSet.length;

		for (prpty = 0; prpty < replaceSetLength; prpty++) {
			//replaceItem = replaceSet[prpty].split('\r');
			replaceItem = replaceSet[prpty];

			//console.log('replaceItem = ' + replaceItem);
			//console.log('replaceItem.length = ' + replaceItem.length);

			//if (replaceItem.length === 3) {
			if (replaceItem.exp) {
				//resultName = resultName.replace(new RegExp(replaceItem[0], replaceItem[1]), replaceItem[2]);
				resultName = resultName.replace(new RegExp(replaceItem.exp, replaceItem.flags || ''), replaceItem.subs || '');

				//console.log('new RegExp(replaceItem[0], replaceItem[1]) = ' + new RegExp(replaceItem[0], replaceItem[1]));
				//console.log('re = ' + new RegExp(replaceItem.exp, replaceItem.flags || '') + ', repl = ' + replaceItem.subs || '');
				//console.log('resultName = ' + resultName);
			}
		}

		//console.log('resultName = ' + resultName);
		return resultName;
	};
	util.getQueryParam ="util.getQueryParam(@parameters, @delimiter, @url, @startFromHash) \nReturn a Query Param value(s)";
	util.getQueryParam = function (parameters, delimiter, url, startFromHash) {
		var params = parameters.split(','),
		delim = delimiter || '',
		//ABU loc = String(url === 'f' ? s2.gtfs().location : url || (s2.w_getLoc().href || (s2.pageURL || s2.wd.location))), // 'f' from original function - used in case of frames?
		loc = String(url|| (util.getLoc().href || window.location)),
		lp = 0,
		len = params.length,
		rgx,
		rgxStart = startFromHash === 1 ? '#(?:.*?&)?' : '(?:\\?|&|;|#)',
		val,
		values = [];

		//console.log('delim = ' + delim);
		//console.log('loc = ' + loc);
		//console.log('startFromHash = ' + startFromHash);

		if (parameters) {
			for (lp = 0; lp < len; lp++) {
				rgx = new RegExp(rgxStart + params[lp] + '=(.*?)(?=\\?|&|;|#|/|$)', 'i');
				val = rgx.exec(loc);

				//console.log(params[lp] + ' = ' + (val && val[1]));

				if (val) {
					values.push(decodeURIComponent(val[1].replace(/\+/g, '%20')));
				}
			}
		}
		return values.join(delim);
	};
	// convert prodVal into an array if it was only a string (single product or comma separated)
	util.prodArr = function (prodVal) {
		var prodTemp,
		prodArr,
		lp = 0,
		len;

		if (prodVal && typeof prodVal !== 'object') {
			//prodTemp = String(prodVal).replace(/^,+|,+$/g,'').split(',');
			prodTemp = String(prodVal).split(',');
			prodArr = [];
			for (len = prodTemp.length; lp < len; lp++) {
				// push individual product objects into prodArr array
				if (prodTemp[lp]) {
					prodArr.push({
						'prod' : prodTemp[lp]
					});
				}
			}
		} else {
			prodArr = prodVal || [];
		}
		return prodArr;
	};
	util.moduleLookup = function (mods, modKey) {
		// may be simpler if lookup could be passed directly as object, but following code will turn a string (key=name[,key=name]) into an object
		//var modKey = (pageDetails.moduleKey || '').split(','),
		var lp,
		len,
		moduleFriendlyLookup = {},
		moduleFriendlyNames = [];

		for (lp = 0, len = modKey.length; lp < len; lp++) {
			moduleFriendlyLookup[modKey[lp].split('=')[0]] = modKey[lp].split('=')[1];
		}
		for (lp = 0, len = mods.length; lp < len; lp++) {
			// dont add module if value is blank (key=,key=...)
			//if (moduleFriendlyLookup[mods[lp]] !== '') {
			// if key has value or is undefined, use value or default to key name
			//	moduleFriendlyNames.push(moduleFriendlyLookup[mods[lp]] || mods[lp]);
			// track modules by moduleKey opt-in only. (previously module name captured by default for modeuls without key)
			if (moduleFriendlyLookup[mods[lp]]) {
				moduleFriendlyNames.push(moduleFriendlyLookup[mods[lp]]);
			}
		}
		moduleFriendlyNames = moduleFriendlyNames.join(',');
		//console.log('moduleFriendlyNames = '+moduleFriendlyNames);
		// add ',+' to indicate more than 100 chars of module string was detected (including 'list,'/'grid,') to avoid truncating when many values
		if (moduleFriendlyNames.length > 95 && moduleFriendlyNames.indexOf(',') > -1) {
			moduleFriendlyNames = moduleFriendlyNames.substring(0, moduleFriendlyNames.lastIndexOf(',', 93)) + ',+';
		}
		return moduleFriendlyNames;
	};
	util.amntBnds_ex = "util.amntBnds(@type, @Value) \nReturns bands of any value";
	util.amntBnds = function (type, transactionValue) { // type not required? all use the same bands
		var bands,
		band = {
			'range' : type +':NaN', // default to unknown currency/value
			'avg' : 0 // default
		},
		lp;
		//transactionDetails=(transactionValue||'').match(/(^\D*)(.*)/), // Values may be like '1200', '$123.45' ($=AUD), 'USD123.45', 'EUR123' etc.
		//currency,
		//amount;

		//currency=(transactionDetails[1]||'AUD').toUpperCase(); // default to AUD if currency missing
		//if(currency==='$'){ // default to AUD if currency prefix = $
		//	currency='AUD';
		//}
		//s.currencyCode=currency; // how to ensure reverts to AUD and any currency specified is used for all/appropriate items in request? i.e. not overwritten if set

		//amount=(transactionDetails[2]||'x'); // make amount 'x' (NaN - Not a Number) and exit function if no value set, instead of defaulting to zero and looping through bands
		//if(isNaN(amount)){
		if (isNaN(transactionValue)) {
			//band.range=type+':'+currency+':'+'NaN';
			//band.range=type+':NaN';
			//band.avg=0;
			return band;
		}
		//amount=Math.round(amount)/1000;
		transactionValue = Math.round(transactionValue) / 1000;

		bands = {
			'0' : {
				min : -1,
				max : 0,
				avg : 0
			},
			'0-100' : {
				min : 0,
				max : 0.1,
				avg : 0.05
			},
			'100-500' : {
				min : 0.1,
				max : 0.5,
				avg : 0.3
			},
			'500-1K' : {
				min : 0.5,
				max : 1,
				avg : 0.75
			},
			'1K-2K' : {
				min : 1,
				max : 2,
				avg : 1.5
			},
			'2K-5K' : {
				min : 2,
				max : 5,
				avg : 3.5
			},
			'5K-10K' : {
				min : 5,
				max : 10,
				avg : 7.5
			},
			'10K-20K' : {
				min : 10,
				max : 20,
				avg : 15
			},
			'20K-30K' : {
				min : 20,
				max : 30,
				avg : 25
			},
			'30K-50K' : {
				min : 30,
				max : 50,
				avg : 40
			},
			'50K-100K' : {
				min : 50,
				max : 100,
				avg : 75
			},
			'100K-150K' : {
				min : 100,
				max : 150,
				avg : 125
			},
			'150K-200K' : {
				min : 150,
				max : 200,
				avg : 175
			},
			'200K-250K' : {
				min : 200,
				max : 250,
				avg : 225
			},
			'250K-300K' : {
				min : 250,
				max : 300,
				avg : 275
			},
			'300K-400K' : {
				min : 300,
				max : 400,
				avg : 350
			},
			'400K-500K' : {
				min : 400,
				max : 500,
				avg : 450
			},
			'500K-600K' : {
				min : 500,
				max : 600,
				avg : 550
			},
			'600K-700K' : {
				min : 600,
				max : 700,
				avg : 650
			},
			'700K-800K' : {
				min : 700,
				max : 800,
				avg : 750
			},
			'800K-1M' : {
				min : 800,
				max : 1000,
				avg : 900
			},
			'1M+' : {
				min : 1000,
				max : '+',
				avg : 1000
			}
		};

		//}
		// determine band
		for (lp in bands) {
			if (bands.hasOwnProperty(lp)) {
				//if(amount>bands[lp][0] && (bands[lp][1]==='+'?true:amount<=bands[lp][1])){
				//if(amount>bands[lp][0][0] && (bands[lp][0][1]==='+'?true:amount<=bands[lp][0][1])){
				if (transactionValue > bands[lp].min && (bands[lp].max === '+' ? true : transactionValue <= bands[lp].max)) {
					//band.range=type+':'+currency+lp.replace(/-/,'-$');
					//band.range=type+':'+currency+':'+lp;
					band.range = type + ':' + lp;
					band.avg = bands[lp].avg * 1000;
					break;
				}
			}
		}
		return band;
	};
	// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -
	util.appStatusSetup = function (status) {
		var formStatusArray = status,
			finalVal = [],
			formStatusDetail;
		for (var _i = 0, formStatusArray_1 = formStatusArray; _i < formStatusArray_1.length; _i++) {
			var items = formStatusArray_1[_i],
				frmStVal;
			frmStVal = 'accStatus:' + items.accountStatus + '|' + 'proStatus:' + items.profileStatus + '|' + 'verStatus:' + items.verificationStatus + '|' + 'exceCode:' + items.exceptionCode;
			finalVal.push(frmStVal);
		}
		//console.info(finalVal);
		formStatusDetail = finalVal.join(';');
		return formStatusDetail;
		//console.info('stringVal = ', formStatusDetail);
	};

	util.createTransID = function (prodArray) {
		var transIDArray = prodArray,
			finalVal = [],
			combinedtransID;
		for (var _i = 0, transIDArray_1 = transIDArray; _i < transIDArray_1.length; _i++) {
			var items = transIDArray_1[_i],
				transIDVal;
			transIDVal = items.prod + '_' + items.Id;
			finalVal.push(transIDVal);
		}
		//console.info(finalVal);
		combinedtransID = finalVal.join(';');
		return combinedtransID;
	};
	// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -


	/******** Don't set any variables after this line ********/

	// for success messages etc. option to use pageDetails process, but send as link
	//if(pageDetails.trackAsLink==='true'){
	/*
	if (/true/i.test(pageDetails.trackAsLink)) {
		//console.log('Tracking as link - '+sPageNameTemp);
		// prevent looping
		delete pageDetails.trackAsLink;

		// make tracking request as link instead of page
		// filtered pageURL or custom passed property into href of custom link 'location' object
		s2.lnk = {
			href : pageDetails.s_linkUrl || s2.pageURL
		};
		s2.w_trackLinkCustom(true, 'D="page:"+pageName', 'o', s2); // default values if no overrides set in pageDetails

		// abort initial page tracking
		s2.abort = true;
	}

	// set override values for trackLinkCustom and 'trackAsLink' calls, before final s_ overrides
	for (prpty in pageDetails) {
		if (pageDetails.hasOwnProperty(prpty)) {
			if (/^temp_/.test(prpty)) {
				//ABU sq[prpty.replace(/^temp_/, '')] = pageDetails[prpty];
				s2[prpty.replace(/^temp_/, '')] = pageDetails[prpty];
				// always remove all temp_ overrides - they are only for s.w_trackLinkCustom and shouldnt persist on the page (in s.w_tempPageDetails)
				delete pageDetails[prpty]; // only allow overrides to fire once, otherwise they persist to all subsequent calls (links, single-page-form pages etc.) // may not need to delete these as obj is temp, not on page... Needed to delete these for normal links following full custom links (the custom _temp details remain in the temp object for page name etc.) zzzzz test this change
			}
		}
	}
	for (prpty in pageDetails) {
		if (pageDetails.hasOwnProperty(prpty)) {
			if (/^s_/.test(prpty)) {
				s2[prpty.replace(/^s_/, '')] = pageDetails[prpty];
				if (prpty !== 's_pageName') {
					// remove all overrides except s_pageName (to identify page name for custom links). Other valus may impact link tracking vars. zzzzz test this change
					delete pageDetails[prpty]; // only allow overrides (e.g. s_abort) to fire once, otherwise they persist to all subsequent calls (links, single-page-form pages etc.) // may not need to delete these as obj is temp, not on page
				}
				trackingOverrideEnabled = true;
			}
		}
	}
	if (trackingOverrideEnabled) {
		// append override when in use
		s2.prop39 += '+" (with override)"';
	}

	// set timers based on events being set/passed by logic or overrides (moved to this block to capture ALL overrides)
	s2.eVar31 = getTimeToCmplt(evtTimer(21, 22), 's_app_s_c', 365); // app start - complete
	//s.eVar32 = getTimeToCmplt(evtTimer(22, 47), 's_app_c_l', 365); // app complete - first login ... first login event removed...
	s2.eVar33 = getTimeToCmplt(evtTimer(46, 22), 's_app_l_c', 365); // login - app complete. eVar33 not required to be set - use events to determine timers

	// getTimeToComplete functions like getValOnce and will clear the timers as soon as the respective events are seen in s.events. The values should only be retrieved if they will actually be sent (i.e. not dom click or s.abort)
	//console.log('s.events = ' + s.events);
	//console.log('s.eVar32 = ' + s.eVar32);

	//s.prop31 = s.eVar31 ? 'D=v31' : '';
	//s.prop32 = s.eVar32 ? 'D=v32' : '';
	//s.prop33 = s.eVar33 ? 'D=v33' : '';
	s2.prop31 = dVar(31);
	//s.prop32 = dVar(32);
	s2.prop33 = dVar(33);

	// set logged in status based on event being set/passed by logic or override
	if (/\bevent46\b/i.test(s2.events)) {
		s2.eVar40 = 'logged in';
	}
	*/
	// change any s object values async (in order of calls)
	//s.w_changeIf(pageDetails, true); // zzzzz enable to change any values with replace etc. for weird issues that may come up.

	/******** initial config ********/
	var pageBrand='',
	pageSite='',
	digital={},
	pdProductID = '',
	pdInSession = false, // if page is in secure/unsecure area
	pdPageType = '',
	pdPageStep = '',
	channelManagerKeywords,
	channelManagerSearchType = false,
	pageDetails = window.pageDetails || {};
	pageNameDynamicVariable = 'D=pageName'; // zzzzz change to D.pageName to reduce pixel
	lastSentPage = util.cookieRead('lastPage')|| '';

	// Brand specific
	if (/(?:^|\.)banksa\.com\.au$/i.test(util.getLoc().hostname)) {
		pageBrand = 'bsa';
		pageSite = /(.+)(?:\.bankofmelbourne\.com\.au$)/i.exec(util.getLoc().hostname); // || [];
		pageSite = pageSite ? pageSite[1] : notSet;
	}
	// Brand specific
	if (/(?:^|\.)bankofmelbourne\.com\.au$/i.test(util.getLoc().hostname)) {
		pageBrand = 'bom';
		pageSite = /(.+)(?:\.bankofmelbourne\.com\.au$)/i.exec(util.getLoc().hostname); // || [];
		pageSite = pageSite ? pageSite[1] : notSet;
	}

	// Brand specific
	if (/(?:^|\.)stgeorge\.com\.au$/i.test(util.getLoc().hostname)) {
		pageBrand = 'stg';
		pageSite = /(.+)(?:\.stgeorge\.com\.au$)/i.exec(util.getLoc().hostname); // || [];
		pageSite = pageSite ? pageSite[1] : notSet;
	}

	// Brand specific
	if (/(?:^|\.)bt\.com\.au$/i.test(util.getLoc().hostname)) {
		pageBrand = 'bt';
		pageSite = /(.+)(?:\.bt\.com\.au$)/i.exec(util.getLoc().hostname); // || [];
		pageSite = pageSite ? pageSite[1] : notSet;
	}

	//if (/(?:^|\.)westpac\.com\.au$/i.test(fullLocHostname) || (window.s_w_wbcrgx && window.s_w_wbcrgx.test(fullLocHostname))) {
	if (/(?:^|\.)westpac\.com\.au$/i.test(util.getLoc().hostname)) {
		pageBrand = 'wbc';
		pageSite = /(.+)(?:\.westpac\.com\.au$)/i.exec(util.getLoc().hostname); // || [];
		pageSite = pageSite ? pageSite[1] : notSet;

		// OTP secure, oregon secure forms, oregon secure domino forms -
		//if(pageSite === 'banking' && /^\/+secure\/+banking(?:\/|$)/i.test(fullLocObj.pathname)){
		//if (/\bbanking\b/i.test(pageSite) && /^(?:\/secure\/|\/cust\/wps\/(?:my)?portal\/wol\/)/i.test(fullLocObj.pathname)) {
		if ((/\bbanking\b/i).test(pageSite) && (/^(?:\/secure\/|\/cust\/wps\/(?:my)?portal\/wol\/|\/oregon\/[^\/]+?\/wol\/)/i).test(util.getLoc().pathname)) {
			pdInSession = true;
			//pageStatus = 'secure'; // extended to in/out of session for all platforms and for formType
		}

		// OTP SameView staff emulation mode
		if ((/net$/i).test(pageSite) && (/\/emulationbanking\b/i).test(util.getLoc().pathname)) {
			pdInSession = true;

			// Change pageSite to 'banking' to consolidate OTP page names when in emulation in prod (necessary due to different domains)
			if (s3.w_prod) {
				pageSite = 'banking';
			}
		}

		//if(/online/i.test(pageSite)){
		//if(pageSite === 'online'){
		if ((/\bonline\b/i).test(pageSite) && (/^(?:\/dforms\/forms\/secure\/|\/cust\/wps\/(?:my)?portal\/wol\/|\/oregon\/[^\/]+?\/wol\/)/i).test(util.getLoc().pathname)) {
			pdInSession = true;
		}
		
		var corpSubDomain = /(.+)(?:\.corp(?:.*?)\.westpac\.(?:com\.au|co\.nz)$)/i.exec(util.getLoc().hostname);
			if (corpSubDomain) {
				pageSite = 'corp';
				//pageDetails.subSite = corpSubDomain[1];
				pdSubSite = corpSubDomain[1];
				// A custom subSiteSeparator may be used for concatenating subSite into pageName in s_code (Westpac uses default value of hyphen)
				pageDetails.subSiteSeparator = ':';
			}

	}
		
	//initialize AppMeasurement
	var s3_account="wbg-banking-dev"
	/******** PROD overrides ********/
	/****WBC****/
	var s3=s3_gi(s3_account)
	// prod/brand/site settings etc. from analytics js files
	s3.w_config = ((window[window['AFSAnalyticsObject']] || {}).config) || {}; // leave this name as string to prevent renaming in obfuscation. do not change. confirm name if obfuscated twice.
	s3.w_prod = (/^(?:www|banking|forms|online|businessonline|search|hlc1|locator)\.westpac\.com\.au$/i).test(location.hostname) || ((/^gs.{8}net\.westpac\.com\.au$/i).test(location.hostname) && (/RM\/emulationbanking\b/i).test(location.pathname)) || s3.w_config.prod; // with emulation mode details, regex excludes SIT SameView hostname
	
	if (s3.w_prod) {
		s3_account ="wbg-banking-prd"
		s3.sa(s_account);
	}
	s3.visitor=Visitor.getInstance("3A4B7BAF56F01DA67F000101@AdobeOrg")
	/************************** CONFIG SECTION **************************/
	/* You may add or alter any code config here. */
	s3.charSet="UTF-8"
	s3.cookieDomainPeriods=3
	/* Conversion Config */
	s3.currencyCode="AUD"
	/* Link Tracking Config */
	s3.trackDownloadLinks=true
	s3.trackExternalLinks=true
	s3.trackInlineStats=true
	s3.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
	//common Settings
	s3.linkInternalFilters="javascript:,tel:,mailto:," + util.getLoc().hostname+','+location.hostname
	//WBC Settings
	//s3.linkInternalFilters="javascript:,tel:,mailto:,movingtoaustralia.westpac.asia,westpac.com.au,movingtoaustralia.westpac.co.nz,movingtoaustralia.westpac.co.uk," + util.getLoc().hostname+','+location.hostname
	//STG Settings
	//s3.linkInternalFilters="javascript:,tel:,mailto:,stgeorge.com.au," + util.getLoc().hostname+','+location.hostname
	//BOM Settings
	//s3.linkInternalFilters="javascript:,tel:,mailto:,bankofmelbourne.com.au," + util.getLoc().hostname+','+location.hostname
	//BSA Settings
	//s3.linkInternalFilters="javascript:,tel:,mailto:,banksa.com.au," + util.getLoc().hostname+','+location.hostname
	s3.linkLeaveQueryString=false
	s3.linkTrackVars="None"
	s3.linkTrackEvents="None"
	//Abu zzz
	s3.w_ltv = 'server,channel,eVar7,prop15,prop25,eVar25,prop35,eVar35,prop39,prop69,eVar21'; // default vars required in all click tracking functions (linkTrackVars)

	/* uncomment below to use doPlugins */
	s3.usePlugins=true
	function s_doPlugins(s3) {

	var pdPreImprs = pageDetails.preImprs,
	//channelManagerKeywords,
	//channelManagerSearchType = false,
	//dVar = s3.w_dVar,
	pidQuerystring;

	s3.pageName = digital['dd.pageName'];
	s3.products = util.valReplace(util.valReplace(s3.w_prodStr(pdProductID, pageDetails), util.lStor('get', 'analytics_productsReplace')), pageDetails.productsReplace); // global + local replace
	//Visit number
	s3.eVar8 = util.cap(util.getVisitNum(365), 1000);
	s3.eVar21 = pageNameDynamicVariable; // pageName eVar
	//s3.w_addEvt('26:' + util.serialise(eventSerialisationKey, pdPageStep));
	//s3.events = s3.apl(s3.events,'event26' + ':' + util.serialise(eventSerialisationKey, pdPageStep), '', 1);
	// hierarchy
	s3.hier1 = pageNameDynamicVariable;
	//s3.eVar25 = s3.marketingCloudVisitorID;
	//s3.server = lowerCaseVal(fullLocObj.hostname);
	s3.server  = util.lCase(util.getLoc().hostname); //ABU remove + (/\s(banking|dev)\s/i.test(util.codeVers) && voyagerLoadBalancerID ? '-' + voyagerLoadBalancerID : '')); // capture server/load balancer ID R01 = Ryde, WS01 = Western Sydney
	//s2.server = lowerCaseVal(fullLocObj.hostname + (/\s(banking|dev)\s/i.test(s2.w_codeVers) && voyagerLoadBalancerID ? '-' + voyagerLoadBalancerID : '')); // capture server/load balancer ID R01 = Ryde, WS01 = Western Sydney

	// use implementation plug-ins that are defined below
	// in this section. For example, if you copied the append
	// list plug-in code below, you could call:
	s3.events=s3.apl(s3.events,"event1",",",1);

	if (typeof util.w_wtT.complete === 'function') {
		util.w_wtT.complete(s3);
	}
	/* s3.AudienceManagement.setup({
		  "partner": "wbg",
		  "containerNSID": 0,
		  "uuidCookie": {
			  "name": "aam_uuid",
			  "days": 30
		  },
	"disableDefaultRequest": true,
	"disableScriptAttachment": true
	}); */

	}
	s3.doPlugins=s_doPlugins

	/* WARNING: Changing any of the below variables will cause drastic
	changes to how your visitor data is collected.  Changes should only be
	made when instructed to do so by your account manager.*/

	s3.visitorNamespace="westpacbankinggroup"
	s3.trackingServer="westpacbankinggroup.sc.omtrdc.net"
	s3.trackingServerSecure= "westpacbankinggroup.sc.omtrdc.net" // same as s.trackingServerSecure
	console.log(typeof(Visitor) != "undefined" ? "VisitorAPI Present" : "VisitorAPI Missing");

	/************************** PLUGINS SECTION *************************/

	// copy and paste implementation plug-ins here - See "Implementation Plug-ins" @
	// https://marketing.adobe.com/resources/help/en_US/sc/implement/#Implementation_Plugins
	// Plug-ins can then be used in the s_doPlugins(s) function above 
	s3.AnalyticsContextData = function (pageData) {
		var _tempContext = {},
		context={},
		//pageBrand='',
		//pageSite='',
		notSet = '(not set)', // to identify missing values
		lowerCaseVal = util.lCase,
		fullLocObj = util.getLoc(), // update each call
		cleanText = util.clean,
		appendEvent = util.addEvt,
		// store copy in s object for clicks etc to refer to previous details (pageName etc.)
		pageDetails = pageData || util.w_wtT.pageDetails || window.digitalData || window.pageDetails || {},
		pdPageName = cleanText(pageDetails.pageName),
		pdDialogTitle = cleanText(pageDetails.dialogTitle), // captures titles of dialogs in OTP and CTRT code for dynamic campaign landing page. Value is appended to end of page name.
		sPageNameTemp = '',
		pageTypeAlt, // for tracking other page types, and applying a rule to classify other pages
		pdProductID = util.prodArr(pageDetails.productID || ''), // products string converted into array
		paymentProduct, // for products string where required
		pdFormName = lowerCaseVal(cleanText(pageDetails.formName)),
		pdFormType = lowerCaseVal(cleanText(pageDetails.formType)),
		//---- wbg|form|app|*au ---- 
		pdnewFormName = lowerCaseVal(cleanText(pageDetails.newFormName)),
		pdJourneyType = lowerCaseVal(cleanText(pageDetails.journeyType)),
		pdAccountType = lowerCaseVal(cleanText(pageDetails.accountType)),
		pdBusinessType = lowerCaseVal(cleanText(pageDetails.businessType)),
		pdFormIsStp = lowerCaseVal(cleanText(pageDetails.formIsSTP)),
		pdFormVariant = lowerCaseVal(cleanText(pageDetails.formVariant)),
		journeyTypeOverride,
		pdProductCount,
		pdAppStatus = pageDetails.applicationStatus,
		//--- wbg|form|app|*au ----
		//pdInSession = false, // if page is in secure/unsecure area
		pdSelfserviceDetails = lowerCaseVal(cleanText(pageDetails.selfserviceDetail)), // for selfservice details tracking
		pdTransactionType = lowerCaseVal(pageDetails.transactionType), // for transactions
		pdTransactionAmount = pageDetails.transactionAmount || '', // for transactions, value should be in nnnn[.nn] format - without thousand separator. decimal is optional, but should be separated by dot (period)
		transactionMerch = [], // for transactions - quantity + details etc.
		pdTransactionQty = pageDetails.transactionQty || '', // for transactions - multiple payments quantity
		pdTransactionDetails = lowerCaseVal(cleanText(pageDetails.transactionDetails || '')), // for transactions - multiple payments quantity
		formNameAlt, // Payments use pdTransactionType as part of form name, instead of formName
		//pdTransactionId = pageDetails.transactionID || '', // for transactions - confirm uniqueness - '[CID:...]' on Domino
		//prchId = pdTransactionId || '', // local copy for purchaseID manipulation
		//Anil new appReference
		pdTransactionId = pageDetails.appReference || '',
		prchId,
		pdFormStatus = lowerCaseVal(cleanText(pageDetails.formStatus)), // local var reference
		pdSearchTerm = cleanText(pageDetails.searchTerm),
		pdSearchResults = String((String(pageDetails.searchResults) || notSet) > -1 ? util.cap(pageDetails.searchResults, 5000) : notSet), // need to differentiate between undefined, 0, '0' and ''.
		pdItemName = cleanText(pageDetails.itemName), // item name for faq and atm
		pageExperience = pageDetails.experience || pageDetails.siteExperience || '',
		trackingOverrideEnabled = false, // for trackingOverride
		prpty, // local var for looping properties
		friendlyModules,
		//channelManagerKeywords,
		//channelManagerSearchType = false,
		clickMapOid,
		visitorLifecycle,
		visitorLifecycleAware = 'Aware',
		visitorLifecycleEngaged = 'Engaged',
		visitorLifecycleConverted = 'Converted',
		visitorLifecycleRetained = 'Retained',
		dateZero = new Date(0), // old date used to clear cookies
		datePlusOneYear = new Date(+new Date() + 31536000000), // 31536000000 = 365*24*60*60*1000 = 1 year
		pageNamePathArray,
		pdPageNumber = pageDetails.pageNumber,
		pdSubSite = cleanText(pageDetails.subSite),
		pdPageNamePrefixPair = cleanText(pageDetails.pageNamePrefixes).split('|'),
		pdPageNamePrefix,
		pdFeaturedContent,
		formTypeOverride,
		//lastSentPage = util.cookieRead('lastPage')|| '',
		getValueOnce = util.getValOnce,
		getQuerystringParam = util.getQueryParam ;//, 
		//pdPreImprs = cleanText(pageDetails.preImprs);
		pdPageType = lowerCaseVal(pageDetails.pageType); // local var reference
		pdPageStep = lowerCaseVal(pageDetails.pageStep, 1); // local var reference
		// Set values for microsites. This may be commented out for other domains
		/*ABU: TODO Other domain*/
		//digital['dd.brand']= pageBrand
		//digital['dd.site'] = pageBrand + ':' + pageSite + (pdSubSite ? (pageDetails.subSiteSeparator || '-') + pdSubSite : ''); // with subSite like APPS - brand:site-subSite:section.
		//util.siteID = digital['dd.site'];
		util.siteID = pageBrand + ':' + pageSite + (pdSubSite ? (pageDetails.subSiteSeparator || '-') + pdSubSite : ''); // with subSite like APPS - brand:site-subSite:section.
		// switch short/long forms based on in/out of session URLs
		if (pdFormType === 'checkurl') {
			pdFormType = pdInSession ? 'short' : 'long';
		}

		// Store formName when starting on a long version, to keep tracking as long after logging in and using short form.
		// When same form in same session, keep as 'long'. Reset at any long start step, or non-long version of the same form
		/*
		if (pdPageStep === 'start') {
		if (pdFormName && pdFormType === 'long') {
		s.c_w('frmTypOv', pdPageType + pdFormName);
		} else {
		if (s.c_r('frmTypOv') === pdPageType + pdFormName) { // only remove cookie if on same form again
		s.c_w('frmTypOv', 0, dateZero);
		}
		}
		} else {
		if (s.c_r('frmTypOv') === pdPageType + pdFormName) {
		pdFormType = 'long-' + pdFormType; // only if pdFormType is different to current...
		}
		}
		 */

		// adjusted to adapt to the journey - e.g. long-short, long-concise
		//if (pdFormType) {
		/*if (pdPageType && pdFormName) {
			//if (pdPageStep === 'start') {
			//if (pdPageStep === 'start' && pdPageType !== 'login') { // login form start step breaks long-short formType setting in the middle of other form journeys
			if ((pdPageStep === 'start' || pdPageStep === 'intro') && pdPageType !== 'login') { // login form start step breaks long-short formType setting in the middle of other form journeys. intro pageStep forces any pages prior to a start step to use a static formType (not crossover like long-short etc.)
				util.cookieWrite('frmTypOv', pdPageType + pdFormName + '-' + pdFormType);  
				//s2.c_w('frmTypOv', pdPageType + pdFormName + '-' + pdFormType); // prefix should also include pdSubSite to avoid clash on multi-sites?
			} else {
				formTypeOverride = /(.*)-(.*)/.exec(util.cookieRead('frmTypOv'));
				//formTypeOverride = /(.*)-(.*)/.exec(s2.c_r('frmTypOv'));
				//console.log('formTypeOverride[1] = ' + formTypeOverride[1]);
				//console.log('formTypeOverride[2] = ' + formTypeOverride[2]);

				// if the override matches the current form
				if (formTypeOverride && formTypeOverride[1] === pdPageType + pdFormName) { // prefix should also include pdSubSite to avoid clash on multi-sites?
					pdFormType = formTypeOverride[2] + (pdFormType && pdFormType !== formTypeOverride[2] ? '-' + pdFormType : '');
				}
			}
		}*/
		//---- wbg|form|app|*au ---- 
		if (pdPageType && pdnewFormName) {
			//if (pdPageStep === 'start') {
			//if (pdPageStep === 'start' && pdPageType !== 'login') { // login form start step breaks long-short formType setting in the middle of other form journeys
			//if ((pdPageStep === 'start' || pdPageStep === 'intro' || pdPageStep === 'welcome') && pdPageType !== 'login') { // login form start step breaks long-short formType setting in the middle of other form journeys. intro pageStep forces any pages prior to a start step to use a static formType (not crossover like long-short etc.)
			if ((pdPageStep === 'intro' || pdPageStep === 'welcome') && pdPageType !== 'login') { // login form start step breaks long-short formType setting in the middle of other form journeys. intro pageStep forces any pages prior to a start step to use a static formType (not crossover like long-short etc.)
				util.cookieWrite('journeyTypOv', pdPageType + pdnewFormName + '-' + pdJourneyType);
				//s2.c_w('frmTypOv', pdPageType + pdFormName + '-' + pdFormType); // prefix should also include pdSubSite to avoid clash on multi-sites?
			} else {
				journeyTypeOverride = /(.*)-(.*)/.exec(util.cookieRead('journeyTypOv'));
				//console.info('journeyTypeOverride', journeyTypeOverride)
				//journeyTypeOverride = /(.*)-(.*)/.exec(s2.c_r('frmTypOv'));
				//console.log('journeyTypeOverride[1] = ' + journeyTypeOverride[1]);
				//console.log('journeyTypeOverride[2] = ' + journeyTypeOverride[2]);

				// if the override matches the current form
				if (journeyTypeOverride && journeyTypeOverride[1] === pdPageType + pdnewFormName) { // prefix should also include pdSubSite to avoid clash on multi-sites?
					pdJourneyType = journeyTypeOverride[2] + (pdJourneyType && pdJourneyType !== journeyTypeOverride[2] ? '-' + pdJourneyType : '');

				}
			}
		}
		//---- wbg|form|app|*au ---- 
			
		//console.log('pdFormType = ' + pdFormType);

		// Dynamic pageName prefix for in- and out-of-session pages to uniquely identify the page in separate path/section
		// Prefix value should be two pipe delimited values. The values can be matching, or either value may be blank.
		pdPageNamePrefix = pdPageNamePrefixPair.length === 2 ? cleanText(pdInSession ? pdPageNamePrefixPair[0] : pdPageNamePrefixPair[1]) : '';

		// Payments use pdTransactionType as part of page and form name, instead of formName
		//formNameAlt = pdFormName || pdTransactionType;
		//formNameAlt = pdFormName ? (pdFormName + (pdFormType ? ':' + pdFormType : '')) : pdTransactionType; // to switch short/long form type when required
		//---- wbg|form|app|*au ---- 
		formNameAlt = pdnewFormName || pdTransactionType; // to switch short/long form type when required
		//---- wbg|form|app|*au ---- 


		// set pageName syntax for forms
		if (formNameAlt || (/^(?:tool|survey|selfservice|registration|payment|login|enquiry|application)$/).test(pdPageType)) { // pageType considered to be a form, use form syntax for pageName
			formNameAlt = formNameAlt || notSet;
			var newPageType;
			newPageType = pdPageType;

			newPageType = lowerCaseVal(
				newPageType.replace(/application/i, 'app')
					.replace(/enquiry/i, 'enq')
					.replace(/quote/i, 'quo')
					.replace(/selfservice/i, 'ser')
					.replace(/registration/i, 'reg')
					.replace(/payment/i, 'pay')
					.replace(/survey/i, 'sur')
			);
			sPageNameTemp = util.siteID + ':' + (newPageType || notSet) + ':' + formNameAlt + (pdPageName ? ':' + pdPageName : ''); // with subSite coming from s.siteID
			//sPageNameTemp = s2.siteID + ':' + (pdPageType || notSet) + ':' + formNameAlt + (pdPageName ? ':' + pdPageName : ''); // with subSite coming from s.siteID
			//sPageNameTemp = s.siteID + ':' + (pdSubSite ? pdSubSite + ':' : '') + (pdPageType || notSet) + ':' + formNameAlt + (pdPageName ? ':' + pdPageName : '');
		} else {
			if (pdPageName) {
				// orig name code -
				//sPageNameTemp = s.siteID + ':' + pdPageName;
				// now with switch for in/out of session prefix -
				//sPageNameTemp = s.siteID + ':' + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName;
				//sPageNameTemp = s.siteID + ':' + (pdSubSite ? pdSubSite + ':' : '') + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName;
				//sPageNameTemp = s2.siteID + ':' + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName; // with subSite coming from s.siteID
				sPageNameTemp = util.siteID + ':' + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName; // with subSite coming from s.siteID
			} else {
				// else use getPageName plugin to get details directly from URL
				//sPageNameTemp = s.getPageName(s.pageURL); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				//sPageNameTemp = decodeURIComponent(s.getPageName(s.pageURL)); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				//sPageNameTemp = decodeURIComponent(s.getPageName(s.pageURL)).replace(/^(.+?:.+?:)/, '$1' + (pdSubSite ? pdSubSite + ':' : '')); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				//sPageNameTemp = decodeURIComponent(s2.getPageName(s2.pageURL)); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				sPageNameTemp = decodeURIComponent(util.getPageName(util.pageURL)); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				//console.log(sPageNameTemp);
			}
		}
		//alert(sPageNameTemp +'||||'+ pdPageName);
		// If pageName override (overrides are any pageDetails properties named as 's_...') set, use it to replace all path and section details, else all those details must be passed as individual overrides (Individual overrides can still be set though)
		sPageNameTemp = cleanText((pageDetails.s_pageName || sPageNameTemp) + (pdDialogTitle ? ':' + pdDialogTitle : ''));

		// format pageName and replace long URL details
		sPageNameTemp = lowerCaseVal(
				sPageNameTemp.replace(/:personal-banking(\:|$)/i, ':pers$1')
				.replace(/:business-banking(\:|$)/i, ':bus$1')
				.replace(/:corporate-banking(\:|$)/i, ':corp$1')
				.replace(/:about-westpac(\:|$)/i, ':about$1')
				.replace(/:secure:banking(\:|$)/i, ':olb$1') // Abbreviate the path for olb
				.replace(/(.*:)(.*?:emulationbanking)(\:|$)/i, '$1olb$3') // Abbreviate the path for emulation
				.replace(/^((?:[\.\w\-]*?:){2})mobile$/i, '$1mobile:home') // set mobile root pages as a type of home page. mobile home page being overtaken by OTP and may be different?
				.replace(/(.+:atm:.+):-?\d+(.\d+)?:\d+(.\d+)$/i, '$1') // remove coords from atm detail pages
				//.replace(/(?:\s|%20)+/g, ' ') // replace these characters (or multiples of) with single space
				.replace(/(?:-|_)+/g, '-') // replace these characters (or multiples of) with single dash
		);
		/*ABU: TODO Dynamic variable not supported 
		// pageName eVar
		//ABU dd.pageName
		s2.eVar21 = pageNameDynamicVariable;
		
		// hierarchy
		s2.hier1 = pageNameDynamicVariable;
		*/
		
		// common event58 for branchdetail, atmdetail, teamdetail pages
		if (/^(?:branch|atm|team)detail$/.test(pdPageType)) {
			//s.events = s.apl(s.events, 'event58', ',', 2); // using shorter function call like appendEvent(58);
			appendEvent(context,'branchATMdetail');
			//appendEvent(58);
		}

		// this should work for identifying both application and enquiry forms for serialisation
		//ABU TODO
		eventSerialisationKey = ((pdProductID && pdProductID[0] && pdProductID[0].prod) || '') + pdFormName; // if the product or form name changes between start and complete steps, or journey crosses domain origin (localStorage), the serialisation won't reset at complete step in that serial range (e.g. visit).
		eventSerialisationKey = eventSerialisationKey ? eventSerialisationKey + pdFormType : false; // without formType, the same product or form name in a different journeys could be deduped, e.g. skipping some start events. If prod and form are blank, dont use only formType - it could dedupe many other forms of the same type. Would require subSite in key if same pageType + formName shouldn't be joined across different subSite + formType (e.g. should long-short form across two different subSites match?)
		
		// determine tracking scenario
		switch (pdPageType) {
		case 'form':
			if (pdPageStep && pdTransactionId) {
				context['dd.applicationID'] = context['dd.transactionID'] = pdPageStep + '_' + pdTransactionId[0].Id;
				//s2.transactionID = pdPageStep + '_' + pdTransactionId;
				//s2.eVar39 = 'D=xact';
			}
			if (pdPageStep === 'save') {
				//s.transactionID = pdTransactionId ? 'save_' + pdTransactionId : '';
				//s.eVar39 = 'D=xact';
				appendEvent(context,'formSave');
				//appendEvent(73);
			}
			if (pdPageStep === 'retrieve') {
				appendEvent(context,'formRetrieve');
				//appendEvent(74);
			}
			break;
		case 'tool':
			//s.eVar23 = 'tool:'+pdFormName; // remove all these from switch cases, capture once for all forms
			//s.prop23 = 'D=v23';
			//s.eVar62 = lowerCaseVal(pdFormName,1);
			context['dd.toolName']= pdFormName || notSet;
			appendEvent(context,'toolUsage');
			
			//s2.eVar62 = pdFormName || notSet;
			//s2.prop62 = dVar(62);
			//appendEvent(68);
			break;
		case 'survey':
			//s.eVar23 = 'survey:'+pdFormName;
			//s.prop23 = 'D=v23';
			/*
			switch(pdPageStep){
			//case 'start':
			//	appendEvent(55); // now common for all forms
			//	break;
			case 'complete':
			s.eVar28 = (pageDetails.surveyScore||notSet);
			appendEvent(64);
			break;
			}
			 */
			if (pdPageStep === 'complete') {
				context['dd.score'] = util.fixZero(pageDetails.surveyScore) || notSet;
				appendEvent(context,'surveyResponse');
				//s2.eVar28 = s2.w_fixZero(pageDetails.surveyScore) || notSet;
				//appendEvent(64);
			}
			break;
		case 'selfservice':
			//s.eVar23 = 'selfserv:'+pdFormName;
			//s.prop23 = 'D=v23';
			//s.eVar38 = lowerCaseVal(pdFormName,1);
			context['dd.selfserviceName'] = pdFormName || notSet;
			//s2.eVar38 = pdFormName || notSet;
			//s2.prop38 = dVar(38);
			
			context['dd.ExtAcct'] = lowerCaseVal(pageDetails.externalSiteName);
			//s2.eVar64 = lowerCaseVal(pageDetails.externalSiteName);

			switch (pdPageStep) {
			case 'start':
				appendEvent(context,'selfServiceStart');
				//appendEvent(35);
				break;
			case 'complete':
				appendEvent(context,'selfServiceComplete');
				//appendEvent(36);
				if (pdSelfserviceDetails) {
					context['dd.selfserviceDetails']= pdSelfserviceDetails || notSet;
					//s2.eVar46 = pdSelfserviceDetails || notSet;
					//s2.prop46 = dVar(46);
					// self service detail var to capture type of self service, introduced as part of Nov 16E1  Wlive release  *au
				}
				break;
			case 'forgotpasswordstart':
				appendEvent(context,'forgotPassword');
				appendEvent(context,'selfServiceStart');
				//appendEvent(48);
				//appendEvent(35);
				break;
			case 'forgotpasswordcomplete':
				appendEvent(context,'selfServiceComplete');
				//appendEvent(36);
				break;
			}
			break;
		/*ABU moving this section to doPlugins section 
		case 'sitesearch':
			//if(s.w_pgLoad){ // getValOnce would be cleared on every page click/doPlugins in this pageType case required???? test.

			/ *
			if(s.w_pgLoad){
			alert(1);
			s.w_trackLinkIntSearch(); // move to linkTracking section to run after every trackPage
			}
			 * /

			//s.eVar14 = getValueOnce(lowerCaseVal(getQuerystringParam('query','',fullLocObj.href)).replace(/\d/g,'#').replace(/\s+/g,' ').replace(/^\s|\s$/g,''),'s_stv',0); // getValOnce after #. Hash only 5+ digits?
			//s.eVar14 = getValueOnce(lowerCaseVal(pageDetails.searchTerm,1).replace(/\d/g,'#').replace(/\s+/g,' ').replace(/^\s|\s$/g,''),'s_stv',0); // getValOnce after #. Hash only 5+ digits?
			context['dd.searchTerm'] = getValueOnce(util.srchTerm(pdSearchTerm), 'stv', 30, 'm'); // getValOnce after #. Hash only 5+ digits?
			//s2.eVar14 = getValueOnce(s2.w_srchTerm(pdSearchTerm), 'stv', 30, 'm'); // getValOnce after #. Hash only 5+ digits?
			
			if (context['dd.searchTerm']) {
				//s2.prop14 = dVar(14); //Not required
				// split search term into keywords
				context['dd.list1'] = cleanText(context['dd.searchTerm'].replace(/[^a-z]+/gi, ' ')).replace(/\s/g, ','); // ,4); // for list prop, remove all chars outside a-z
				//s2.list1 = cleanText(s2.eVar14.replace(/[^a-z]+/gi, ' ')).replace(/\s/g, ','); // ,4); // for list prop, remove all chars outside a-z
				//s.eVar15 = pageBrand + ':' + (pageSite==='banking'?'secure':'public'); // OTP doesnt have site search
				appendEvent(context,'intSearch');
				//appendEvent(14);
				//s.eVar30 = 'sitesearch:' + pdSearchResults; // use pdPageType here in place of text sitesearch string
				context['dd.itemCount'] = pdPageType + ':' + pdSearchResults;
				//s2.eVar30 = pdPageType + ':' + pdSearchResults;
				//if(s.eVar30==='sitesearch:0'){
				//console.log(pdSearchResults);
				//if (s.eVar30 === pdPageType + ':0') {
				if (pdSearchResults === '0') {
					appendEvent(context,'intSearchZeroResults');
					//appendEvent(16);
				}
			} //else{
			//	s.eVar14 = notSet;
			//}
			//}
			break;***/
		case 'faqsearch':
			// pageDetails passed from function call on faq search result div load
			context['dd.faqSearchTerm'] = getValueOnce(util.srchTerm(pdSearchTerm), 'faq', 30, 'm');
			//s2.eVar58 = getValueOnce(s2.w_srchTerm(pdSearchTerm), 'faq', 30, 'm');
			if (context['dd.faqSearchTerm']) {
				//s2.prop58 = dVar(58);
				appendEvent(context,'faqSearch');
				//appendEvent(65);
				//s.eVar30 = 'faqsearch:' + pdSearchResults;
				context['dd.itemCount'] = pdPageType + ':' + pdSearchResults;
				//s2.eVar30 = pdPageType + ':' + pdSearchResults;
			}
			break;
		case 'branchsearch':
			// pageDetails passed from function call on branch search result div load
			sPageNameTemp += ':searchresults';

			//if(s.w_pgLoad){ // getValOnce would be cleared on every page click/doPlugins in this pageType case
			//s.eVar44 = getValueOnce(lowerCaseVal(pageDetails.searchTerm,1).replace(/\d/g,'#').replace(/\s+/g,' ').replace(/^\s|\s$/g,''),'s_brnch',0); // hash numbers, postcodes
			//s.eVar44 = getValueOnce(s.w_srchTerm(),'s_brnch',0); // hash numbers, keep postcodes in function
			context['dd.branchSearchLocation'] = util.srchTerm(pdSearchTerm); // hash numbers, keep postcodes. not val once, every time
			//s2.eVar44 = s2.w_srchTerm(pdSearchTerm); // hash numbers, keep postcodes. not val once, every time
			if (context['dd.branchSearchLocation']) {
				//s2.prop44 = dVar(44);
				context['dd.branchSearchFilters'] = pageDetails.searchFilters || notSet;
				appendEvent(context,'branchSearch');
				//s2.prop45 = pageDetails.searchFilters || notSet;
				//appendEvent(57);
				//s.eVar30 = 'branchsearch:' + pdSearchResults;
				context['dd.itemCount'] = pdPageType + ':' + pdSearchResults;
				//s2.eVar30 = pdPageType + ':' + pdSearchResults;
				//if(s.eVar30==='branchsearch:0'){
				//if (s.eVar30 === pdPageType + ':0') {
				if (pdSearchResults === '0') {
					appendEvent(context,'intSearchZeroResults');
					//appendEvent(16);
				}
			}
			//}
			break;
			//case 'branchdetail':
			//appendEvent(58);
			// common events set above
			//	break;
		case 'atmdetail':
			//sPageNameTemp=sPageNameTemp.replace(/:-?\d+(.\d+)?:\d+(.\d+)$/i,':'+lowerCaseVal(pageDetails.itemName,1));
			sPageNameTemp += ':' + lowerCaseVal(pdItemName.replace(/\s/g, ''), 1);
			// common events set above
			//appendEvent(58);
			break;
			//case 'teamdetail':
			// common events set above
			//appendEvent(58);
			//	break;
		case 'registration':
			//s.eVar23 = 'reg:'+s.eVar6+':'+pdFormName; // does the brand from the URL make sense here? Is it required, or should it be external site name?
			//s.prop23 = 'D=v23';
			//s.eVar45 = lowerCaseVal(pdFormName,1); // should brand and external site name be included here?
			switch (pdPageStep) {
			case 'start':
				appendEvent(context,'registrationStart');
				//appendEvent(51);
				break;
			case 'complete':
				appendEvent(context,'registrationComplete');
				//appendEvent(52);
				//appendEvent(46); // this should be set automatically by session/cookie server-side process in OTP/online banking
				break;
			}
			break;
		case 'product':
			//s.products = ';' + (pageDetails.productID||notSet).replace(/,/g,',;');
			switch (pdPageStep) {
			case 'view':
				appendEvent(context,'customProdView');
				//appendEvent(13);
				break;
				//case 'selection': // product selection event/page not applicable/required
				//	appendEvent(32);
				//	break;
			case 'comparison':
				appendEvent(context,'prodCompare');
				//appendEvent(30);
				break;
			}
			break;
		case 'payment':
			// s.eVar37 = lowerCaseVal(pdTransactionType,1);

			// payment status captured as merchandising eVar to relate to payment amount. two methods -
			//pdProductID=[{'prod':'payment:'+lowerCaseVal(pdTransactionType,1),'events':(pdPageStep==='complete'?'payment:'+lowerCaseVal(pdTransactionType,1)+(pdFormStatus?':'+pdFormStatus:'')+'='+pdTransactionAmount:'')}]; // capture status directly appended to pdTransactionType details
			//pdProductID=[{'prod':'payment:'+lowerCaseVal(pdTransactionType,1),'events':(pdPageStep==='complete'?'payment:'+lowerCaseVal(pdTransactionType,1)+'='+pdTransactionAmount:'')}]; // generic form status applied to merch in prod string processing
			// generic form status applied to merch in prod string processing

			if (pdTransactionQty) {
				transactionMerch.push('payment:qty:' + pdTransactionQty);
			}
			if (pdTransactionDetails) {
				transactionMerch.push(pdTransactionDetails);
			}

			// Currently set only for steps below. Otherwise products tracks as 'payment:(not set)' in review step etc.
			paymentProduct = [{
					'prod' : 'payment:' + (pdTransactionType || notSet),
					//'events' : ((pdPageStep === 'complete' || pdPageStep === 'effectpayment') ? 'payment:' + (pdTransactionType || notSet) + '=' + pdTransactionAmount : '') // complete or effectpayment should set the payment/product details.
					'events' : /^(complete|effectpayment|bulkpaymentapproval)$/.test(pdPageStep) ? 'payment:' + (pdTransactionType || notSet) + '=' + pdTransactionAmount : '', // complete or effectpayment should set the payment/product details.
					//'merch' : pdTransactionQty ? 'options=payment:qty:' + pdTransactionQty : ''
					'merch' : transactionMerch.length ? 'options=' + transactionMerch.join('+') : ''
				}
			];

			switch (pdPageStep) {
			case 'start':
				appendEvent(context,'paymentStart');
				//appendEvent(38);
				pdProductID = paymentProduct;
				break;
				//case 'pinauthorisation':
				//	appendEvent(42); // not used
				//	break;
			case 'complete':
				appendEvent(context,'paymentComplete');
				//appendEvent(39);
				pdProductID = paymentProduct;

				// removed to reduce reference IDs. payment ref not required
				//s.transactionID = pdTransactionId ? 'pay_' + pdTransactionId : ''; // prefix to avoid duplicates with other applications etc. only capture ID if set
				//s.eVar39 = 'D=xact';

				//s.purchaseID = prchId; // serialise all events with revenue/value. confirm uniqueness. maybe only capture in transactionID/xact
				//appendEvent('purchase'); // TODO. serialise payments to de-dupe amounts?

				break;
			case 'businessstart':
				// payment submitted/created, awating approval. business OTP 1.2
				appendEvent(context,'busPaymentStart');
				//appendEvent(42);
				pdProductID = paymentProduct;
				break;
			case 'createpayment':
				// payment submitted/created, awating approval. business OTP 1.2
				appendEvent(context,'busPaymentCreated');
				//appendEvent(43);
				pdProductID = paymentProduct;
				break;
			case 'authorisepayment':
				// intermediate approval step. business OTP 1.2
				//s.eVar42 = lowerCaseVal(pageDetails.businessAuthType, 1); // not used
				//s.prop42 = dVar(42);
				appendEvent(context,'busPaymentAuthorised');
				//appendEvent(44);
				pdProductID = paymentProduct;
				break;
			case 'effectpayment':
				// final approval step, payment processed/scheduled. business OTP 1.2
				appendEvent(context,'busPaymentEffected');
				//appendEvent(45);
				pdProductID = paymentProduct;
				break;
			case 'bulkpaymentapproval':
				// final bulk approval step. business OTP 1.2 step name also above, in setting paymentProduct
				appendEvent(context,'busBulkApprovals');
				//appendEvent(37); // bulk payment approval completed step
				pdProductID = paymentProduct;
				break;
			}
			break;
		case 'login':
			//s.eVar23 = 'login:'+s.eVar6+':'+pdFormName; // does the brand from the URL make sense here? Is it required, or should it be external site name? eWise?
			//if(/^(?:firsttime|complete)$/i.test(pdPageStep)){
			//	s.eVar40 = 'logged in';
			//s.prop40 = 'D=v40';
			//}

			/*
			switch (pdPageStep) {
			case 'lockout':
			appendEvent(49);
			break;
			//case 'firsttime':
			//	appendEvent(47); // removed due to inaccurate implementation
			//appendEvent(46); // this should be set automatically by session/cookie server-side process in OTP/online banking
			//s.eVar32 = 'stop';
			//	break;
			case 'complete':
			// login complete step probably won't be used directly in OTP
			appendEvent(46);
			//	//s.eVar33 = 'start';
			break;
			}
			 */

			if (pdPageStep === 'complete') {
				appendEvent(context,'login');
				//appendEvent(46);
			}

			break;
		case 'logout':
			//s.eVar23 = 'logout:'+s.eVar6+':'+pdFormName; // does the brand from the URL make sense here? Is it required, or should it be external site name?
			context['dd.loginStatus'] = 'logged out';
			//s2.eVar40 = 'logged out';
			//s.prop40 = 'D=v40';
			break;

			/*
			case 'livechat': // triggered on live person popup winfdow, not on page or click
			switch(pdPageStep){
			case 'start':
			s.eVar57 = (s.eVar57||'{LivePerson Session ID}'); // check value
			s.prop57 = 'D=v57';
			appendEvent(63);
			break;
			}
			break;
			 */
		case 'enquiry':
			// was 'lead'
			//s.eVar23 = 'lead:'+pdFormName;
			//s.prop23 = 'D=v23';
			//s.products = (pageDetails.productID?';' + pageDetails.productID.replace(/,/g,',;'):'');
			switch (pdPageStep) {
			case 'start':
				appendEvent(context,'enqStart');
				//appendEvent(53);
				// serialise enquiry start
				//Abu todo serialise event ZZZZ
				//util.addSerialiseEvt(context,'event28',util.serialise(eventSerialisationKey, pdPageStep));
				//appendEvent('event28' + util.serialise(eventSerialisationKey, pdPageStep));
				break;
			case 'complete':
				appendEvent(context,'enqComplete');
				//appendEvent(54);
				// serialise enquiry complete
				//Abu todo serialise event ZZZZ
				//appendEvent(context,'enqCompleteSerialised', util.serialise(eventSerialisationKey, pdPageStep));
				//util.addSerialiseEvt(context,'event29',util.serialise(eventSerialisationKey, pdPageStep));
				//appendEvent('event29' + s2.w_serialise(eventSerialisationKey, pdPageStep));
				if (pdTransactionId) {
					context['dd.transactionID'] = context['dd.applicationID'] = 'enq_' + util.createTransID(pdTransactionId);
				}
				//s.transactionID='enq_'+pdTransactionId; // prefix to avoid duplicates with other applications etc.
				//context['dd.applicationID']  = context['dd.transactionID'] = pdTransactionId[0].Id ? 'enq_' + pdTransactionId[0].Id : ''; // prefix to avoid duplicates with other applications etc. only capture ID if set
				//s2.transactionID = pdTransactionId ? 'enq_' + pdTransactionId : ''; // prefix to avoid duplicates with other applications etc. only capture ID if set
				//s2.eVar39 = 'D=xact'; //ABU not sure 'D=xact' replacemint  ZZZ 

				//s.purchaseID = prchId; // serialise all events like application complete. confirm uniqueness across all types and platforms
				//appendEvent('purchase');

				break;
			}
			break;
		case 'faq':
			//s.eVar58 = lowerCaseVal(pageDetails.itemName,1);
			//s.prop58 = 'D=v58';
			//appendEvent(65);
			sPageNameTemp += ':' + lowerCaseVal(pdItemName, 1);
			break;

			/*
			case 'enquiry':
			//s.eVar23 = 'enquiry:'+pdFormName;
			//s.prop23 = 'D=v23';
			s.eVar43 = lowerCaseVal(pdFormName,1);
			s.prop43 = 'D=v43';
			//s.products = ';' + (pageDetails.productID||notSet).replace(/,/g,',;');
			switch(pdPageStep){
			case 'complete':
			appendEvent(50);
			s.transactionID=pdTransactionId;
			s.eVar39='D=xact'; // for enquiry? capture whenever set?
			break;
			}
			break;
			 */

		case 'application':
			//s.eVar23 = 'appl:'+pdFormName;
			//s.prop23 = 'D=v23';
			//s.products = (pageDetails.productID?';' + pageDetails.productID.replace(/,/g,',;'):'');

			//s.prop68 = (pageDetails.businessABN||notSet); // ABN not required

			//		s.eVar37 = lowerCaseVal(pdTransactionType,1);

			/*
			if(/^(?:save|complete)$/i.test(pdPageStep)){ // different reference number specified between save and complete?
			//s.eVar39=pdTransactionId;
			//s.transactionID='D=v39';
			s.transactionID=pdTransactionId;
			s.eVar39='D=xact';
			}
			 */

			//eventSerialisationKey = (pdProductID && pdProductID[0] && pdProductID[0].prod) || pdFormName;
			//eventSerialisationKey = eventSerialisationKey ? eventSerialisationKey + pdFormType : 0;

			//eventSerialisationKey = ((pdProductID && pdProductID[0] && pdProductID[0].prod) || '') + pdFormName; // if the product or form name changes between start and complete steps, or journey crosses domain origin (localStorage), the serialisation won't reset at complete step in that serial range (e.g. visit).
			//eventSerialisationKey = eventSerialisationKey ? eventSerialisationKey + pdFormType : false; // without formType, the same product or form name in a different journeys could be deduped, e.g. skipping some start events. If prod and form are blank, dont use only formType - it could dedupe many other forms of the same type.

			if (pdPageStep && pdTransactionId) {
				context['dd.transactionID'] = context['dd.applicationID'] = pdPageStep + '_' + pdTransactionId[0].Id;
				//s2.transactionID = pdPageStep + '_' + pdTransactionId;
				//s2.eVar39 = 'D=xact';
			}
			// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -
			if (pdJourneyType) {
				context['dd.journeyType'] = lowerCaseVal(pdJourneyType);
			}
			// form-type
			if (pdFormIsStp) {
				context['dd.formType'] = 'stp' + '_' + (lowerCaseVal(pdFormVariant) || 'na');
			} else {
				context['dd.formType'] = 'non-stp';
			}
			// account-type
			if(pdAccountType){
				context['dd.accountType'] = lowerCaseVal(pdAccountType);
			}
			//business-type
			if(pdBusinessType){
				context['dd.businessType'] = lowerCaseVal(pdBusinessType);
			}

			// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -

			switch (pdPageStep) {
				// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -
				case 'welcome':
					appendEvent(context, 'welcome');

					break;
				// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -
				case 'start':
					appendEvent(context,'appStart');
					//appendEvent(21);
					//ABU todo serilize event ZZZZ
					//appendEvent(context,'appStartSerialised',util.serialise(eventSerialisationKey, pdPageStep));
					//util.addSerialiseEvt(context,'event26',util.serialise(eventSerialisationKey, pdPageStep));
					//appendEvent('event26' + s2.w_serialise(eventSerialisationKey, pdPageStep));

					//console.log('s.events = ' + s.events);
					//s.eVar31 = 'start';

					break;
				case 'save':
					appendEvent(context,'appSaved');
					//appendEvent(24);
					break;
				case 'retrieve':
					appendEvent(context,'appRetrieved');
					//appendEvent(23);
					break;
				case 'complete':
					appendEvent(context,'appComplete');
					//appendEvent(22);
					// mark serial stamp as complete once hit. re-use same stamp if starting same form again if not completed, generate new serial if form has been completed (in the same origin)
					//ABU todo serilize event ZZZZ
					//util.addSerialiseEvt(context,'event27',util.serialise(eventSerialisationKey, pdPageStep));
					//s3.events = s3.apl(s3.events, 'event71' + ':' + util.serialise(eventSerialisationKey, pdPageStep), '', 1);
					//s3.events=s3.apl(s3.events,"event1",",",1);
					//appendEvent('event27' + util.serialise(eventSerialisationKey, pdPageStep));
					//console.log(eventSerialisationKey);
					//context['dd.transactionID'] = pdTransactionId;
					// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -
					if (pdTransactionId) {
						context['dd.transactionID'] =  context['dd.applicationID'] = util.createTransID(pdTransactionId);
					}
					// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -
					//s2.transactionID = pdTransactionId;
					//s.eVar39 = 'D=xact'; // if multiple transacation ID's, what happens on forms without productID? are there any without products? Have form txn ID + multi prod IDs?
					//s.purchaseID = 'D=v39';
					//s.purchaseID = 'D=xact';

					/*
					if(/^\[CID:.+\]/i.test(prchId)){ // updated to ignore case for some domino forms
					// if using CID format, take last 20 chars of CID cookie (if exists)+timestamp
					prchId = /.{1,20}(?=\])/.exec(prchId.replace(/(-|\s|:|^\[CID)/gi,''))[0];
					}
					// always trim purchaseID to first 20 chars only
					s.purchaseID = prchId.substring(0,20);
					 */
					if (pdTransactionId) {
						prchId = lowerCaseVal(cleanText(pageDetails.appReference[0].Id || ''))
					}
					context['dd.purchaseID'] = prchId; 
					//s2.purchaseID = prchId; // confirm uniqueness
					//s.events = s.apl(s.events,'purchase',',',2);
					appendEvent(context,'purchase');
					//appendEvent('purchase'); // only when approved? (not declined, referred, customer declined). Only really used for serialising, so maybe always fire?...

					//s.eVar31 = 'stop';
					//s.eVar32 = 'start';
					//s.eVar33 = 'stop';

					// apply transactionType and transactionAmount against first product if legacy values exist
					if (pdProductID && pdProductID[0] && !pdProductID[0].events) {
						//pdProductID[0].events=lowerCaseVal(pdTransactionType,1)+(pdFormStatus?':'+pdFormStatus:'')+'='+pdTransactionAmount; // apply status directly to first product
						//pdProductID[0].events=lowerCaseVal(pdTransactionType,1)+'='+pdTransactionAmount; // generic pdFormStatus applied during prod string processing
						pdProductID[0].events = (pdTransactionType || notSet) + '=' + pdTransactionAmount; // generic pdFormStatus applied during prod string processing
					}
					// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -
					if (pdFormIsStp && pdAppStatus) {
						// call applicationStatus function here with pdAppStatus as argument
						context['dd.applicationStatus'] = util.appStatusSetup(pdAppStatus);
					}
					// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -

					// track status of whole form submission (even though form may include multiple products)
					// pdFormStatus is applied directly to merchandising with every transaction amount band
					/*
					switch (pdFormStatus) {
					case 'approved':
					appendEvent(18);
					break;
					case 'declined':
					appendEvent(19);
					break;
					case 'referred':
					appendEvent(20);
					break;
					}
					 */

					//if (/^approved($|:upsell|:downsell$)/i.test(pdFormStatus)) {
					if (/^approved(?!:downselldeclined)/i.test(pdFormStatus)) {
						appendEvent(context,'appApproved');
						//appendEvent(18);
					}
					//if (pdFormStatus === 'declined') {
					if (/^declined/i.test(pdFormStatus)) {
						appendEvent(context,'appDeclined');
						//appendEvent(19);
					}
					//if (pdFormStatus === 'referred') {
					if (/^referred/i.test(pdFormStatus)) {
						appendEvent(context,'appReferred');
						//appendEvent(20);
					}
					if (pdFormStatus === 'approved:downselldeclined') {
						appendEvent(context,'appCustDeclined');
						//appendEvent(25);
					}

					break;
			}
			break;
		// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -
		case 'quote':
			// *au
			switch (pdPageStep) {
				case 'start':
					appendEvent(context, 'quoteStart');
					if (pdTransactionId) {
						context['dd.transactionID'] = context['dd.applicationID'] = 'quote_' + util.createTransID(pdTransactionId);
					}

					break;
				case 'save':
					appendEvent(context, 'quoteSaved');
					if (pdTransactionId) {
						context['dd.transactionID'] = context['dd.applicationID'] = 'quote_' + util.createTransID(pdTransactionId);
					}

					break;
				case 'retrieve':
					appendEvent(context, 'quoteRetrieved');

					break;
				case 'complete':
					appendEvent(context, 'quoteComplete');
					if (pdTransactionId) {
						context['dd.transactionID'] =  context['dd.applicationID'] = 'quote_' + util.createTransID(pdTransactionId);
					}
					break;
			}
			break;
		// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -
			case 'servererror':
				// 404, 500 etc. on page load
				// align pageName for errors to correspond to similar section details of other pages
				sPageNameTemp = util.siteID + ':err:' + lowerCaseVal(pageDetails.errorCode, 1) + ':' + util.pageURL;
				//console.log(sPageNameTemp);
				pageNamePathArray = sPageNameTemp.split(':').slice(0, 4); // provide truncated path for section details, if error page (remove URL)
				if (String(pageDetails.errorCode) === '404') {
					context['dd.pageType'] = 'errorPage';
					//s2.pageType = 'errorPage';
				}
				break;

				// pageerror pageType doesn't make sense - errors would usually occur on another pageType
				//case 'pageerror': // not required? always capture errors if set?
				//s.prop17=s.siteID+':'+lowerCaseVal(s.prop17||pageDetails.errorCode,1); // different approach for form errors below
				//	s.prop17=lowerCaseVal(s.prop17||pageDetails.errorCode,1); // stored in list prop
				//	break;
			}

			// apply any global pageName replace
			//sPageNameTemp = s.w_valReplace(sPageNameTemp, 'analytics_pageNameReplace');
			sPageNameTemp = util.valReplace(util.valReplace(sPageNameTemp, util.lStor('get', 'analytics_pageNameReplace')), pageDetails.pageNameReplace); // global + local replace
			//sPageNameTemp = s2.w_valReplace(s2.w_valReplace(sPageNameTemp, s2.w_lStor('get', 'analytics_pageNameReplace')), pageDetails.pageNameReplace); // global + local replace
			// standard changeIf syntax, operating on pageName property only
			//sPageNameTemp = changeIf({
			//		'pageName' : sPageNameTemp,
			//		'changeIf' : s.w_lStor('get', 'analytics_pageNameReplace')
			//	}).pageName; // analytics_pageNameReplace > analytics_pageNameChange = originPageNameChange

			// remove any detail for this page only
			//sPageNameTemp = sPageNameTemp.replace(new RegExp(pageDetails.pageNameReplace, 'gi'), ''); // remove anything matching pageNameReplace regex. if not used, use changeIf instead?
			//sPageNameTemp = changeIf({
			//		'pageName' : sPageNameTemp,
			//		'changeIf' : pageDetails.pageNameReplace
			//	}).pageName; // pageNameReplace > pageNameChange = pageNameChange

			// copy pageName details to section eVars -
			// now copying longest detail to all section vars for more accurate reporting on page views in/below that section
			// -----------------------------------------------------------------------------------------------------------------------------
			pageNamePathArray = pageNamePathArray || sPageNameTemp.split(':');
			console.log(pageNamePathArray);
			console.log(sPageNameTemp);
			//s.w_pathArr = pageNamePathArray; // for use outside this function
			// New version with experience removed from pageName -
			
			//Abu to investigate ZZZ
			context['dd.brand']= pageNamePathArray[0]; // Brand
			context['dd.site']     = pageNamePathArray[1]? pageNamePathArray.slice(0, 2).join(':') : context['dd.brand'];
			context['dd.section1'] = pageNamePathArray[2]? pageNamePathArray.slice(0, 3).join(':') : context['dd.site'] ;
			context['dd.section2'] = pageNamePathArray[3]? pageNamePathArray.slice(0, 4).join(':') : context['dd.section1'] ;
			context['dd.section3'] = pageNamePathArray[4]? pageNamePathArray.slice(0, 5).join(':') : context['dd.section2'] ;
			context['dd.section4'] = pageNamePathArray[5]? pageNamePathArray.slice(0, 6).join(':') : context['dd.section3'] ;
					
			//dd.brand = pageNamePathArray[0]; // Brand
			//s2.eVar6 = pageNamePathArray[0]; // Brand
			//s2.prop6 = dVar(6);
			//if (pageNamePathArray[1]) { // Site
			
			//Abu to investigate ZZZ
			//dd.site =  pageNamePathArray.slice(0, 2).join(':');
			//s2.eVar1 = pageNamePathArray.slice(0, 2).join(':');
			//s2.prop1 = dVar(1);
			//}
			//if (pageNamePathArray[2]) { // Site section


			
			//s2.eVar2 = pageNamePathArray.slice(0, 3).join(':');
			//s2.prop2 = dVar(2);
			
			//ABU Not required DynamicVariable
			//if (s2.eVar2 === sPageNameTemp) {
			//	s2.eVar2 = s2.prop2 = pageNameDynamicVariable;
			//}
			//}
			//if (pageNamePathArray[3]) { // Sub section
			
			//s2.eVar3 = pageNamePathArray.slice(0, 4).join(':');
			//s2.prop3 = dVar(3);
			//ABU Not required DynamicVariable
			//if (s2.eVar3 === sPageNameTemp) {
			//	s2.eVar3 = s2.prop3 = pageNameDynamicVariable;
			//}
			//}
			//if (pageNamePathArray[4]) { // Sub sub section
			
			//s2.eVar4 = pageNamePathArray.slice(0, 5).join(':');
			//s2.prop4 = dVar(4);
			//ABU Not required DynamicVariable
			//if (s2.eVar4 === sPageNameTemp) {
			//	s2.eVar4 = s2.prop4 = pageNameDynamicVariable;
			//}
			//}
			//if (pageNamePathArray[5]) { // Sub sub sub section
			
			//s2.eVar5 = pageNamePathArray.slice(0, 6).join(':');
			//s2.prop5 = dVar(5);
			//ABU Not required DynamicVariable
			//if (s2.eVar5 === sPageNameTemp) {
			//	s2.eVar5 = s2.prop5 = pageNameDynamicVariable;
			//}
			//}

			// server from full domain
			//ABU server is move to do_plugins
			//s.server = lowerCaseVal(fullLocObj.hostname);
			//context['dd.server'] = lowerCaseVal(fullLocObj.hostname + (/\s(banking|dev)\s/i.test(util.codeVers) && voyagerLoadBalancerID ? '-' + voyagerLoadBalancerID : '')); // capture server/load balancer ID R01 = Ryde, WS01 = Western Sydney
			//s2.server = lowerCaseVal(fullLocObj.hostname + (/\s(banking|dev)\s/i.test(s2.w_codeVers) && voyagerLoadBalancerID ? '-' + voyagerLoadBalancerID : '')); // capture server/load balancer ID R01 = Ryde, WS01 = Western Sydney

			// experience from app/pageDetails
			//s.eVar7=pageExperience; // mob/mobapp/tab/tabapp is mobile suite, everything else is desktop
			//s.eVar7 = s.linkName ? 'link' : pageExperience; // switch to 'link' for link tracking
			// switch to '(link)' for link tracking where experience may not be set/available in pageDetails?
			//s.eVar7 = s.linkName ? (pageExperience || '(link)') : pageExperience;
			context['dd.experience'] = context['dd.channel'] = pageExperience||util.getExp();
			
			//s2.eVar7 = pageExperience;
			//s2.channel = dVar(7);

			// standard form name details
			//formNameAlt=(pdFormName||pdTransactionType); // Payments use pdTransactionType as part of form name, not the formName from pageDetails
			if (pdPageType && formNameAlt) {
				//s.eVar23 = s.eVar6+':'+pdPageType+':'+formNameAlt; // excludes sub-domain, e.g. - wbc:application
				var newPageType;
				newPageType = pdPageType;

				newPageType = lowerCaseVal(
					newPageType.replace(/application/i, 'app')
						.replace(/enquiry/i, 'enq')
						.replace(/quote/i, 'quo')
						.replace(/selfservice/i, 'ser')
						.replace(/registration/i, 'reg')
						.replace(/payment/i, 'pay')
						.replace(/survey/i, 'sur')
				);
				context['dd.formName'] = util.siteID + ':' + newPageType + ':' + formNameAlt; // includes sub-domain, e.g. - wbc:online:application // if this matches v3, D=v3 could be used here
				//s2.eVar23 = util.siteID + ':' + pdPageType + ':' + formNameAlt; // includes sub-domain, e.g. - wbc:online:application // if this matches v3, D=v3 could be used here
				//s2.prop23 = dVar(23);

				if (pdPageStep === 'start') {
					appendEvent(context,'formStart');
					//appendEvent(55);
				}
				if (pdPageStep === 'complete') {
					appendEvent(context,'formComplete');
					//appendEvent(56);
				}
			}

			// details to track on full page loads only. i.e. not on every click...
			/*
			if(s.w_pgLoad){
			// if available after page load
			s.list2=s.c_r('banners'); // check suitable cookie name. this should contain a comma separated list of banners seen on previous page
			if(s.list2){
			appendEvent(11);
			s.c_w('banners',0,new Date(0));
			}

			// capture number of form validation errors from cookie
			if(s.c_r('errCount')){
			s.prop17=s.c_r('errCode');
			//s.eVar30 = (s.prop17.indexOf(s.w_inlErr+',')>-1? s.prop17 : 'defined errors') + ':' + s.c_r('errCount');
			s.eVar30 = 'errors:' + s.c_r('errCount');
			s.c_w('errCode',0,new Date(0));
			s.c_w('errCount',0,new Date(0));
			}

			// Navigation menu ID
			s.prop59=s.c_r('s_nav');
			s.c_w('s_nav','',new Date(0)); // remove s_nav cookie after tracking

			// if search results 'click past' rank cookie has been set from result link click, track the rank and click event and delete the cookie.
			s.prop16=s.c_r('cpr'); // The cookie is set on search results link clicks with the rank of the link
			if(s.prop16){
			appendEvent(15);
			s.c_w('cpr','',new Date(0)); // delete cookie after tracking
			}
			}
			 */

			// Rules to track a cross-section of key page types without pageType specified
			if (pageSite === 'www') {
				pageTypeAlt = 'www:' + notSet; // default for unspecified pages
				//if(sPageNameTemp==='wbc:www:home'){
				if (/^wbc:www:(?:mobile:)?home$/i.test(sPageNameTemp)) { // desktop or mobile home page as www:home page type
					pageTypeAlt = 'www:home';
				}
				//console.log(pageNamePathArray);
				if (/^(?:pers|bus|corp)$/.test(pageNamePathArray[2])) {
					//if (!s.eVar3) {
					if (pageNamePathArray.length === 3) {
						pageTypeAlt = 'www:section home'; // i.e. 1st directory only.
					}
					//if (!s.eVar4) {
					if (pageNamePathArray.length === 4) {
						pageTypeAlt = 'www:product home'; // i.e. to 2nd directory only.
					}
				}
			}
			/*
			if(s.w_site==='banking'){
			pageTypeAlt='banking:'+notSet; // page types on banking - can be populated in pageType key in RESX if required
			}
			if(/^(?:info|ruby|dav)$/i.test(s.w_site)){
			pageTypeAlt='microsite'; // page types for mactel etc.?
			}
			 */
			context['dd.pageType'] = pdPageType || pageTypeAlt;
			//s2.prop7 = pdPageType || pageTypeAlt;

			// track page number for search results etc.
			if(pdPageNumber){
				context['dd.visitNumber'] = pdPageNumber ? ((pdPageType || notSet) + ':' + pdPageNumber) : '';
			}
			//s2.prop8 = pdPageNumber ? ((pdPageType || notSet) + ':' + pdPageNumber) : '';

			// Visit number
			//s.eVar8 = s.w_cap(s.getVisitNum(365), 1000);
			//ABU TODO   zzzz
			//s2.eVar8 = s2.w_cap(s2.getVisitNum(365), 1000) + s2.w_extCkSfx; // appends if external cookie data
			//if(s.eVar8>1000){
			//	s.eVar8='1000+';
			//}

			// days since last visit
			//s.eVar29=s.getDaysSinceLastVisit('s_lv',1);
			//s.eVar29=(s.eVar29==='0'?'zero':s.eVar29);
			//s.eVar29=s.w_fixZero(s.eVar29);
			//ABU TODO ZZZZ
			//s2.eVar29 = s2.w_cap(s2.w_fixZero(s2.getDaysSinceLastVisit('s_lv', 1)), 1000) + s2.w_extCkSfx; // appends if external cookie data
			//if(s.eVar29>1000){
			//	s.eVar29='1000+';
			//}

			// visitor id
			//ABU s2.eVar25 = s2.prop25 = (customVisitorID ? 'D=vid' : 'D=s_vi'); // if s.visitorID passed from mobile app to hybrid pages, variable will be vid, else use FP-cookie name
			
			//ABU TODO ZZZZ
			//s2.eVar25 = s2.prop25 = (customVisitorID ? 'D=vid' : 'D=s_mid');
			//s.prop25 = s.eVar25;
			


			// page status
			//s.prop40 = pageStatus;
			//s.prop40 = pdInSession ? 'secure' : 'unsecure'; // switching based on URL
			context['dd.pageStatus'] = pdInSession ? 'logged in' : 'public'; // switching based on URL
			//s2.prop40 = pdInSession ? 'logged in' : 'public'; // switching based on URL

			// site language from page if set
			//s.eVar63 = lowerCaseVal(pageDetails.language||'en'); // only captured in prop63
			context['dd.lang'] = lowerCaseVal(pageDetails.language || 'en');
			//s2.prop63 = lowerCaseVal(pageDetails.language || 'en');
			//s.prop63 = 'D=v63';

			// Day Of Week, Time Of Day
			//var s_tpA = s.getTimeParting('s','+10');
			//s.eVar10 = s_tpA[1]+'|'+s_tpA[2]; // Adobe orig converted format
			context['dd.dayTime'] = util.timePart(); // local time in shorter format
			//s2.eVar10 = s2.w_timePart(); // local time in shorter format
			//s2.prop10 = dVar(10);

			// External Campaigns
			//if(!s.campaign){
			//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
			//context['dd.campaign'] = getValueOnce(lowerCaseVal(getQuerystringParam('cid', '', fullLocObj.href)), 's_cid', 30, 'm'); // getValueOnce only if data will be sent, else value may not be sent
			//s2.campaign = getValueOnce(lowerCaseVal(getQuerystringParam('cid', '', fullLocObj.href)), 's_cid', 30, 'm'); // getValueOnce only if data will be sent, else value may not be sent
			//}

			//ABU TODO
			/*if (s2.campaign) {
				s2.eVar16 = 'D=v0';
				s2.eVar17 = 'D=v0';
				s2.eVar18 = crossVisitPrtcptn(s2.campaign, 's_ev18', '30', '5', '>', 'event22'); // this is cleared every time event22 fires. i.e. Application Complete step
			}

			//console.log('ORIG s.list2  = ' + s.list2); // impressions from banner cookie related to previous page, collected after it loaded
			//console.log('pdPreImprs    = ' + pdPreImprs); // any other impressions passed for the current page after trackPage was called, but before it completed (and scanning links)
			pdPreImprs = pdPreImprs ? (pdPreImprs||'').split(',') : [];
			for (prpty = 0; prpty < pdPreImprs.length; prpty++) {
				context['dd.list2'] = util.apl(context['dd.list2'], pdPreImprs[prpty], ',', 2);
				//s2.list2 = s2.apl(s2.list2, pdPreImprs[prpty], ',', 2);
			}
			//console.log('NEW s.list2   = ' + s.list2); // combined list of impressions for previous page
			
			if (context['dd.list2']) {
				appendEvent(context,'intImpressions');
				//s2.w_addEvt(11);
			}

			// Internal banner clicks
			pidQuerystring = lowerCaseVal(getQuerystringParam('pid', '', fullLocObj.href));
			//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
			context['dd.intCampaign']  = getValueOnce(pidQuerystring, 'u_pid', 30, 'm');
			//s2.eVar22 = getValueOnce(pidQuerystring, 's_pid', 30, 'm');
			//}

			// count every pid click for comparison to getValueOnce count
			if (pidQuerystring) {
				appendEvent(context,'pidTotalClicks');
				//appendEvent(10);
			}

			//if(s.eVar22&&!s.eVar65){
			if (context['dd.intCampaign']) {
				appendEvent(context,'intClickThroughs');
				//appendEvent(12);
				//ABU todo zzz`
				//s2.eVar20 = crossVisitPrtcptn(s2.eVar22, 's_ev20', '30', '5', '>', 'event22');
			}
			//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
			context['dd.extSite']  = getValueOnce(lowerCaseVal(getQuerystringParam('ref', '', fullLocObj.href)), 'refPrm', 30, 'm');
			//s2.eVar65 = getValueOnce(lowerCaseVal(getQuerystringParam('ref', '', fullLocObj.href)), 'refPrm', 30, 'm');
			//}
			// incoming links from AFS-group sites
			//if(s.eVar22&&s.eVar65){
			// ref is now just an additional parameter for tracking links from other sites
			if (context['dd.extSite'] ) {
				appendEvent(context,'linkClicksAFS');
				//appendEvent(72);
			}
			//else{
			//	s.eVar65='';
			//}
			*/
			// Page modules shown on dashboard
			// refer to widget name mapping in resx to lookup friendly names
			//pdModules=lowerCaseVal((pageDetails.modules||'').replace(/\B[aeiou]\B|\s|widget/gi,'').replace(/accnts/gi,'acts').replace(/pymnts/gi,'pmts'));
			//pdModules=(pageDetails.modules||'').replace(/\B[aeiou]\B|\s|widget/gi,'').replace(/accnts/gi,'acts').replace(/pymnts/gi,'pmts');
			//pdModules=(pageDetails.modules||'').split(',');
			//pdModules = pdModules.split(',');
			//ABU REMOVE MODULE 
			/*friendlyModules = util.moduleLookup((pageDetails.modules || '').split(','), (pageDetails.moduleKey || '').split(','));

			//s.eVar55 = getValueOnce((friendlyModules ? (/:overview:dashboard$/i.test(sPageNameTemp) ? 'grid' : 'list') + ',' + friendlyModules : ''), 'mdlVar', 0); // modules will be in grid format on overview/dashboard
			dd.pageModuleSet = getValueOnce((pageDetails.moduleLayout || '') + (friendlyModules ? ',' + friendlyModules : ''), 'mdlVar', 30, 'm'); // modules will be in grid format on overview/dashboard
			//s2.eVar55 = getValueOnce((pageDetails.moduleLayout || '') + (friendlyModules ? ',' + friendlyModules : ''), 'mdlVar', 30, 'm'); // modules will be in grid format on overview/dashboard

			//s.prop55 = 'D=v55';
			//s2.prop55 = dVar(55);

			// call every time on dashboard page to compare current to previous modules and diff for added/removed
			// except when only switching profiles. when switching profile, modules change, but not through direct modification.
			if (userSwitchedProfile) {
				// when switching, update stored module set to current profile modules
				s2.c_w('mdlSet', friendlyModules);
			} else {
				// track as a module change
				s2.prop64 = s2.w_checkModuleChanges('mdlSet', friendlyModules);
				if (s2.prop64) {
					appendEvent(70);
				}
			} */

			/*ABU TODO Click map to Actifity MAP
			// clear invalid clickmap values generated for custom links
			clickMapOid = (/(.*oid%3D)(.*?)(%26|$)/).exec(s2.c_r('s_sq'));
			if (clickMapOid && clickMapOid[2]) {
				if (!(/_[0-9]+$/).test(clickMapOid[2])) {
					s.c_w('s_sq', 0, dateZero); // remove invalid s_sq cookie
				}
			}*/

			// Featured content - fid/wbcfrom - for secondary promo tracking (Patrick)
			//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
			pdFeaturedContent = getValueOnce(lowerCaseVal(getQuerystringParam('fid', '', fullLocObj.href) || getQuerystringParam('wbcfrom', '', fullLocObj.href)), 'feat', 30, 'm');
			//s2.eVar60 = getValueOnce(lowerCaseVal(getQuerystringParam('fid', '', fullLocObj.href) || getQuerystringParam('wbcfrom', '', fullLocObj.href)), 'feat', 30, 'm');
			//}
			if (pdFeaturedContent) {
				context['dd.featuredContent'] = pdFeaturedContent;
				appendEvent(context,'featuredContent');
				//appendEvent(66);
				//s2.prop60 = dVar(60);
			}
			
			//ABU toDO crossVisitPrtcptn 
			// Combined Internal External Stack
			/*if (s2.eVar22) {
				s2.eVar19 = crossVisitPrtcptn(s2.eVar22, 's_ev19', '30', '10', '>', 'event22');
			}
			if (s2.campaign) {
				s2.eVar19 = crossVisitPrtcptn(s2.campaign, 's_ev19', '30', '10', '>', 'event22');
			}*/

			// Paid/Natural Search Keyword
			//ABU toDO
			/*s2.prop18 = pageNameDynamicVariable; // set to just pageName as default
			s2._channelParameter = 'Campaign|cid';
			s2.w_channelManager('cid');

			//channelManagerKeywords = cleanText(s._keywords || ''); // filter search keywords a bit - strip multiple spaces etc.
			channelManagerKeywords = cleanText(s2._keywords); // filter search keywords a bit - strip multiple spaces etc.

			if (s2._channel === 'Natural Search') {
				channelManagerSearchType = 'NS';
				// prop18 seo keywords and entry page
				s2.prop18 = 'D="' + channelManagerKeywords + '|"+pageName';
			}
			//if(s._channel==='Campaign'&&/^sem:/i.test(s._campaign)){ // if cid param, and value starts with 'sem:' (just check for any CID). confirm identifier for PPC tracking codes
			if (s2._channel === 'Campaign' && channelManagerKeywords !== 'n/a') { // only if cid param exists and keywords are found, it's paid search. We may not have keywords if they are not passed by the search engine (usually for NS)
				channelManagerSearchType = 'PS';
			}
			if (channelManagerSearchType) {
				s2.eVar11 = channelManagerKeywords === 'n/a' ? 'Keyword Unavailable' : channelManagerKeywords;
				s2.prop11 = dVar(11);

				s2.eVar12 = crossVisitPrtcptn(channelManagerSearchType + '|' + channelManagerKeywords, 's_ev12', '30', '5', '>', 'event22');
			}*/

			// Lifecycle. consider re-setting to avoid build up to later levels?
			//ABU toDO
			/*visitorLifecycle = s2.c_r('s_lfcl');
			if (visitorLifecycle === '') { // No previous lifecycle cookie
				if (!s2.c_w('testCkie', 'set', new Date(+new Date() + 10000))) { // test if lifecycle cookie can be set to prevent events from re-firing
					visitorLifecycle = 'No cookies';
				} else {
					s2.c_w('testCkie', 0, dateZero);
					visitorLifecycle = visitorLifecycleAware;
					appendEvent(6);
				}
			}
			if (visitorLifecycle === visitorLifecycleAware && (/\b(event(13|21|30|31|54|61|63|68))\b/i).test(s2.events)) { // Confirm Engagement status criteria
				visitorLifecycle = visitorLifecycleEngaged;
				appendEvent(7);
			}
			if (visitorLifecycle === visitorLifecycleEngaged && (/\b(event(22))\b/i).test(s2.events)) { // Conversion status criteria
				visitorLifecycle = visitorLifecycleConverted;
				appendEvent(8);
			}
			if (visitorLifecycle === visitorLifecycleConverted && (/\b(event(46))\b/i).test(s2.events) && s2.getVisitNum(365) > 1) { // Retention status criteria
				visitorLifecycle = visitorLifecycleRetained;
				appendEvent(9);
			}
			s2.c_w('s_lfcl', visitorLifecycle, datePlusOneYear);
			s2.eVar36 = visitorLifecycle + s2.w_extCkSfx; // appends if external cookie data
			s2.prop36 = dVar(36);
			*/
			// search results clickthru event for auto suggest results only *au
			wbcfromQuerystring = lowerCaseVal(getQuerystringParam('wbcfrom', '', fullLocObj.href));
			if (/sitesearch:autosuggest:results/i.test(wbcfromQuerystring)) {
				appendEvent(context,'intSearchClickThru');
				//s2.w_addEvt(15);
				// clickthru event from "search results page" is triggered when prop16 is set
			}

			// Previous Page name
			//s.prop15 = s.getPreviousValue(sPageNameTemp, 'gpv_p15', '');
			//if (s.prop15 === sPageNameTemp) {
			//	s.prop15 = pageNameDynamicVariable;
			//}
			// refactored and referencing lastPg cookie

			//s2.prop15 = lastSentPage === sPageNameTemp ? pageNameDynamicVariable : lastSentPage;
			
			
			// Previous pixel length
			//s2.prop69 = s2.w_cap(s2.c_r('lastReqLen'), 5000);
			//if(s.prop69>5000){
			//	s.prop69='5000+';
			//}

			// capture URL
			//s.eVar26 = 'D=Referer'; // this is the full unprocessed page URL from HTTP header (excludes hash)
			//s.eVar26 = 'D=Referer' + (fullLocObj.hash ? '+"' + fullLocObj.hash + '"' : ''); // this is the full unprocessed page URL from HTTP header (includes hash)
			//s2.eVar26 = 'D=Referer+"' + fullLocObj.hash.replace(s2.w_guidRgx, '(GUID)') + '"'; // this is the full unprocessed page URL from HTTP header (includes hash)

			//s2.prop26 = 'D=g'; // this is the filtered page URL from JS document (will include hash if any)


			// track scode version
			//context['dd.analyticsVersion'] = util.codeVers;
			//s2.prop39 = s2.w_codeVers;

			// track site + source data version/details + pageKey for page audit.
			// dont capture in IE - makes pixel too long
			//ABU TODO no if (!s.isie) { // as of s_code version H.26.2, s.isie == false in IE11 due to useragent change in IE 11 to distinguish its DOM compatibility vs. older versions
				context['dd.pageAudit']= pageSite + ':' + lowerCaseVal(pageDetails.src, 1) + ':' + lowerCaseVal(pageDetails.pageKey, 1);
				//s2.prop13 = pageSite + ':' + lowerCaseVal(pageDetails.src, 1) + ':' + lowerCaseVal(pageDetails.pageKey, 1);
			//}

			// Site release version - set on OTP pages, apps, public? etc.
			context['dd.siteVersion'] = pageSite + ':' + lowerCaseVal(pageDetails.siteVersion, 1);
			//s2.eVar52 = pageSite + ':' + lowerCaseVal(pageDetails.siteVersion, 1);
			//s2.prop52 = dVar(52);

			// fid (3rd-party fallback visitor ID) not required when on first party collection domain (i.e. westpac.com.au). What if other domain? (we capture s_vi not fid)
			//if(/\.westpac\.com\.au$/i.test(location.hostname)){
			//if (/\.westpac\.com\.au$/i.test(fullLocObj.hostname)) {
			//if (s2.w_coreDomain) {
			//	s2.fid = ''; // Not used for implementations that use first-party cookies.
			//}

			/*s2.plugins = ''; // empty to prevent tracking plugins. not available for reporting in SC15

			// clean referrer to reduce length and remove session details (creates too many values), etc.
			//s.testRef='https://uat.banking.westpac.com.au/cust/wps/portal/wodp/c1/04_SB8K8xLLM9MSSzPy8xBz9CP0os3gvRx9X04_SB8K8xLLM9MSSzPy8xBz9CP0os3gvRx9X04_SB8K8xLLM9MSSzPy8xBz9CP0os3gvRx9X';
			//s.referrer=s.w_cleanURL(s.testRef,2);
			//s.referrer=s.w_cleanURL('',2);
			//s.referrer=s.w_cleanURL(null,2);
			if (!s2.w_refSent) { // added to match adobe approach in AppMeasurement v1.4.3
				s2.w_refSent = true;

				s2.referrer = s2.w_cleanURL(document.referrer, 2);

				// set s.referrer here if able to identify sources otherwise incorrectly tracked as 'None' or 'Unspecified'. e.g. app links etc...
				// nativeAppVersion
				// file://native.app/?cid=app_abc_123

				// edm
				if (/\:edm\:/i.test(s2.campaign)) {
					s2.referrer = 'mail://edm.cid/?cid=' + cleanText(s2.campaign) + '&referrer=' + (s2.referrer || notSet); // Force any :edm: CID to Email Referrer Type
				}
			}*/

			// convert product array into Omniture-format string
			//sProductsTemp = s.w_prodStr(pdProductID, pageDetails);
			// run replace function on s.products
			//console.log('ORIG s.products = ' + s.products);
			//s.products = s.w_valReplace(s.w_prodStr(pdProductID, pageDetails), 'analytics_productsReplace');  // global replace
			//s2.products = s2.w_valReplace(s2.w_valReplace(s2.w_prodStr(pdProductID, pageDetails), s2.w_lStor('get', 'analytics_productsReplace')), pageDetails.productsReplace); // global + local replace
			//s.products = changeIf({
			//		's.products' : s.w_prodStr(pdProductID, pageDetails),
			//		'changeIf' : s.w_lStor('get', 'analytics_productsReplace')
			//	})['s.products'];
			//console.log('NEW  s.products = ' + s.products);

			// option to prevent sending two matching pageNames in a row
			//if (!pageDetails.s_abort) {
			//	clicks on page overwriting the stored value with this logic
			//
			//	repeatCall = !getValueOnce(sPageNameTemp, 'lastPg', 0); // this should prevent consecutive calls of same pageName. e.g. mobile 'select' screen nav, and confirmation screens as a way to serialise events
			//	if (/true/i.test(pageDetails.trackDedupe) && repeatCall) {
			//		s.abort = true;
			//	}
			//}


			// only compare to the cookie value that was read, don't write at the same time (with getValOnce)
			// this logic needs to match logic in trackPage function to prevent impressions being collected etc.

			//if (/true/i.test(pageDetails.trackDedupe) && lastSentPage === sPageNameTemp) {
			//if ((/true/i.test(pageDetails.trackDedupe) && lastSentPage === sPageNameTemp) || (/true/i.test(pageDetails.trackOnce) && s.w_pageTracked(sPageNameTemp))) {
			//if ((/true/i.test(pageDetails.trackDedupe) && lastSentPage === sPageNameTemp) || ((/true/i.test(pageDetails.trackOnce) && s.w_pageTracked(sPageNameTemp)) || s.w_globalDrop(pageDetails))) {
			// check if this page should be fired or has met a condition to drop
			//if (pageDetails._drop) {
			//	s.abort = true;

			//s.w_pgTrkStatus = 'blocked';
			//s.c_w('impTmp', 0, new Date(0)); // clear any tmp banners of aborted pages
			//}

			// populate s.pageName from local var
			//s2.pageName = sPageNameTemp;
			context['dd.pageName'] = sPageNameTemp;
		return context;
	};
	/*
	* Plugin: Compatibility v1.0.
	*/
	s3.wd=window;
	s3.fl=new Function("x","l",""
	+"return x?(''+x).substring(0,l):x;");
	// JS 1.1 split
	s3.split = function (l, d) {
		return l ? l.split(d) : [];
	};
	/*
	 * Utility Function: p_c
	 */
	s3.p_c = function (v, c) {
		var x = v.indexOf('=');
		return c.toLowerCase() == v.substring(0, x < 0 ? v.length : x).toLowerCase() ? v : 0;
	};
	/*
	 * s.join: 1.0 - Joins an array into a string
	 */
	s3.join = function (v, p) {
		var s3 = this,
		x,
		f,
		b,
		d,
		w,
		str;
		if (p) {
			f = p.front || '';
			b = p.back || '';
			d = p.delim || '';
			w = p.wrap || '';
		}
		str = '';
		for (x = 0; x < v.length; x++) {
			if (typeof(v[x]) == 'object') {
				str += s3.join(v[x], p);
			} else {
				str += w + v[x] + w;
			}
			if (x < v.length - 1) {
				str += d;
			}
		}
		return f + str + b;
	};
	/*
	 * Plugin Utility: pt - runs function in f argument against list of
	 * variables declared in x (delimited by d), with a as an optional
	 * argument to be included in f function call
	 */
	s3.pt=new Function("x","d","f","a",""
	+"var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t"
	+".substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substri"
	+"ng(z,x.length);t=z<x.length?t:''}return'';");

	/*
	 * Plugin Utility: Replace v1.0
	 */
	s3.repl = function (x, o, n) {
		var i = x.indexOf(o),
		l = n.length;
		while (x && i >= 0) {
			x = x.substring(0, i) + n + x.substring(i + o.length);
			i = x.indexOf(o, i + l);
		}
		return x;
	};
	/*
	 * Plugin Utility: apl v1.1 - append item to list
	 */
	s3.apl = function (l, v, d, u) {
		var s3 = this,
		m = 0,
		i,
		n,
		a;
		if (!l) {
			l = '';
		}
		if (u) {
			a = s3.split(l, d);
			for (i = 0; i < a.length; i++) {
				n = a[i];
				m = m || (u == 1 ? n == v : n.toLowerCase() == v.toLowerCase());
			}
		}
		if (!m) {
			l = l ? l + d + v : v;
		}
		return l;
	};
	// only set prop to dynamic copy if eVar has a value to reduce pixel length
	s3.dVar = function (id) {
		return s3['eVar' + id] ? 'D=v' + id : '';
	};
	/*
	 * Cookie Combining Utility v.5
	 */

	if(!s3.__ccucr)
	{
		s3.c_rr = s3.c_r;
		s3.__ccucr = true;
		function c_r(k)
		{
			var s = this, d = new Date, v = s3.c_rr(k), c = s3.c_rspers(), i, m, e;
			if(v) return v; k = s3.escape ? s3.escape(k) : encodeURIComponent(k);
			i = c.indexOf(' ' + k + '='); c = i < 0 ? s3.c_rr('s3_sess') : c;
			i = c.indexOf(' ' + k + '='); m = i < 0 ? i : c.indexOf('|', i);
			e = i < 0 ? i : c.indexOf(';', i); m = m > 0 ? m : e;
			v = i < 0 ? '' : s3.unescape ? s3.unescape(c.substring(i + 2 + k.length, m < 0 ? c.length : m)) : decodeURIComponent(c.substring(i + 2 + k.length, m < 0 ? c.length : m));
			return v;
		}
		function c_rspers()
		{
			var s = this, cv = s3.c_rr("s3_pers"), date = new Date().getTime(), expd = null, cvarr = [], vcv = "";
			if(!cv) return vcv; cvarr = cv.split(";"); for(var i = 0, l = cvarr.length; i < l; i++)  { expd = cvarr[i].match(/\|([0-9]+)$/);
			if(expd && parseInt(expd[1]) >= date) { vcv += cvarr[i] + ";"; } } return vcv;
		}
		s3.c_rspers = c_rspers;
		s3.c_r = s3.cookieRead = c_r;
	}
	if(!s3.__ccucw)
	{
		s3.c_wr = s3.c_w;
		s3.__ccucw = true;
		function c_w(k, v, e)
		{
			var s3 = this, d = new Date, ht = 0, pn = 's3_pers', sn = 's3_sess', pc = 0, sc = 0, pv, sv, c, i, t, f;
			d.setTime(d.getTime() - 60000); if(s3.c_rr(k)) s3.c_wr(k, '', d); k = s3.escape ? s3.escape(k) : encodeURIComponent(k);
			pv = s3.c_rspers(); i = pv.indexOf(' ' + k + '='); if(i > -1) { pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1); pc = 1; }
			sv = s3.c_rr(sn); i = sv.indexOf(' ' + k + '='); if(i > -1) { sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1);
			sc = 1; } d = new Date; if(e) { if(e == 1) e = new Date, f = e.getYear(), e.setYear(f + 5 + (f < 1900 ? 1900 : 0));
			if(e.getTime() > d.getTime()) {  pv += ' ' + k + '=' + (s3.escape ? s3.escape(v) : encodeURIComponent(v)) + '|' + e.getTime() + ';';
			pc = 1; } } else { sv += ' ' + k + '=' + (s3.escape ? s3.escape(v) : encodeURIComponent(v)) + ';';
			sc = 1; } sv = sv.replace(/%00/g, ''); pv = pv.replace(/%00/g, ''); if(sc) s3.c_wr(sn, sv, 0);
			if(pc) { t = pv; while(t && t.indexOf(';') != -1) { var t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')));
			t = t.substring(t.indexOf(';') + 1); ht = ht < t1 ? t1 : ht; } d.setTime(ht); s3.c_wr(pn, pv, d); }
			return v == s3.c_r(s3.unescape ? s3.unescape(k) : decodeURIComponent(k));
		}
		s3.c_w = s3.cookieWrite = c_w;
	}


	/*
	 * Plugin channelManager v3.01 - Tracking External Traffic
	 */
	s3.channelManager = function (a, b, c, d, e, f, g) {
		var s3 = this,
		h = new Date,
		i = 0,
		j,
		k,
		l,
		m,
		n,
		o,
		p,
		q,
		r,
		t,
		u,
		v,
		w,
		x,
		y,
		z,
		A,
		B,
		C,
		D,
		E,
		F,
		G,
		H,
		I,
		J,
		K,
		L,
		M,
		N,
		O,
		P,
		Q,
		R,
		S,
		T,
		U,
		V;
		U = s3.getQueryParam ? 1 : 0;
		V = s3.repl ? 1 : 0;
		h.setTime(h.getTime() + 1800000);
		if (e) {
			i = 1;
			if (s3.c_r(e))
				i = 0;
			if (!s3.c_w(e, 1, h))
				s3.c_w(e, 1, 0);
			if (!s3.c_r(e))
				i = 0;
			if (f && s3.c_r('s3_tbm' + f))
				i = 0;
		}
		j = s3.referrer ? s3.referrer : document.referrer;
		j = decodeURIComponent(j.toLowerCase());
		if (!j)
			k = 1;
		else {
			l = j.indexOf('?') > -1 ? j.indexOf('?') : j.length;
			m = j.substring(0, l);
			n = j.split('/');
			n = n[2].split('?');
			o = n[0].toLowerCase();
			p = s3.linkInternalFilters.toLowerCase();
			p = p.split(',');
			for (q = 0; q < p.length; q++) {
				r = o.indexOf(p[q]) == -1 ? '' : j;
				if (r)
					break;
			}
		}
		if (!r && !k) {
			t = j;
			u = o;
			w = 'Other Natural Referrers';
			v = w + ' ' + o;
			x = s3.seList + '>' + s3._extraSearchEngines;
			if (d == 1) {
				m = V ? s3.repl(m, 'oogle', '%') : s3.replace(m, 'oogle', '%');
				m = V ? s3.repl(m, 'ahoo', '^') : s3.replace(m, 'ahoo', '^');
				j = V ? s3.repl(j, 'as_q', '*') : s3.replace(j, 'as_q', '*');
			}
			y = x.split('>');
			for (z = 0; z < y.length; z++) {
				A = y[z];
				A = A.split('|');
				B = A[0].split(',');
				for (C = 0; C < B.length; C++) {
					D = m.indexOf(B[C]);
					if (D > -1) {
						if (A[2])
							E = v = A[2];
						else
							E = o;
						if (d == 1) {
							E = V ? s3.repl(E, '#', ' - ') : s3.replace(E, '#', ' - ');
							j = V ? s3.repl(j, '*', 'as_q') : s3.replace(j, '*', 'as_q');
							E = V ? s3.repl(E, '^', 'ahoo') : s3.replace(E, '^', 'ahoo');
							E = V ? s3.repl(E, '%', 'oogle') : s3.replace(E, '%', 'oogle');
						}
						F = A[1].split(',');
						for (G = 0; G < F.length; G++) {
							if (j.indexOf(F[G] + '=') > -1 || j.indexOf('https://www.google.') == 0 || j.indexOf('http://r.search.yahoo.com') == 0)
								H = 1;
							I = U ? s3.getQueryParam(F[G], '', j).toLowerCase() : s3.Util.getQueryParam(F[G], j).toLowerCase();
							if (H || I)
								break;
						}
					}
					if (H || I)
						break;
				}
				if (H || I)
					break;
			}
		}
		if (!r || g != '1') {
			J = a.split(',');
			for (var q in J) {
				if (J.hasOwnProperty(q)) {
					if (U ? s3.getQueryParam(J[q]) : s3.Util.getQueryParam(J[q])) {
						T = T ? T + b + (U ? s3.getQueryParam(J[q]) : s3.Util.getQueryParam(J[q])) : (U ? s3.getQueryParam(J[q]) : s3.Util.getQueryParam(J[q]));
					}
				}
			}
			if (T) {
				v = T;
				if (E)
					w = 'Paid Search';
				else
					w = 'Unknown Paid Channel';
			}
			if (!T && E && H) {
				w = 'Natural Search';
				v = w + ' ' + E;
			}
		}
		if (i && k && !T)
			t = u = v = w = 'Typed/Bookmarked';
		J = s3._channelDomain;
		if (J && o && !r) {
			K = J.split('>');
			for (L = 0; L < K.length; L++) {
				M = K[L] ? K[L].split('|') : '';
				N = M[1] ? M[1].split(',') : '';
				O = N.length;
				for (P = 0; P < O; P++) {
					Q = N[P].toLowerCase();
					R = ('/' + o).indexOf(Q);
					if (R > -1) {
						w = M[0];
						break;
					}
				}
				if (R > -1)
					break;
			}
		}
		J = s3._channelParameter;
		if (J) {
			K = J.split('>');
			for (L = 0; L < K.length; L++) {
				M = K[L] ? K[L].split('|') : '';
				N = M[1] ? M[1].split(',') : '';
				O = N.length;
				for (P = 0; P < O; P++) {
					R = U ? s3.getQueryParam(N[P]) : s3.Util.getQueryParam(N[P]);
					if (R) {
						w = M[0];
						break;
					}
				}
				if (R)
					break;
			}
		}
		J = s3._channelPattern;
		if (J) {
			K = J.split('>');
			for (L = 0; L < K.length; L++) {
				M = K[L] ? K[L].split('|') : '';
				N = M[1] ? M[1].split(',') : '';
				O = N.length;
				for (P = 0; P < O; P++) {
					Q = N[P].toLowerCase();
					R = T ? T.toLowerCase() : '';
					S = R.indexOf(Q);
					if (S == 0) {
						w = M[0];
						break;
					}
				}
				if (S == 0)
					break;
			}
		}
		S = w ? T + u + w + I : '';
		c = c ? c : 'c_m';
		if (c != '0')
			S = util.getValOnce(S, c, 0); //getValOnce move to util 
		if (S) {
			s3._campaignID = T ? T : 'n/a';
			s3._referrer = t ? t : 'n/a';
			s3._referringDomain = u ? u : 'n/a';
			s3._campaign = v ? v : 'n/a';
			s3._channel = w ? w : 'n/a';
			s3._partner = E ? E : 'n/a';
			s3._keywords = H ? I ? I : 'Keyword Unavailable' : 'n/a';
			if (f && w != 'Typed/Bookmarked') {
				h.setTime(h.getTime() + f * 86400000);
				s3.c_w('s3_tbm' + f, 1, h);
			}
		} else
			s3._campaignID = s3._referrer = s3._referringDomain = s3._campaign = s3._channel = s3._partner = s3._keywords = '';
	}
	/* Top 130 - Grouped */
	s3.seList="google.,googlesyndication.com,.googleadservices.com|q,as_q|"
	+"Google>bing.com|q|Bing>yahoo.com,yahoo.co.jp|p,va|Yahoo!>ask.jp,ask"
	+".co|q,ask|Ask>search.aol.,suche.aolsvc.de|q,query|AOL>altavista.co,"
	+"altavista.de|q,r|AltaVista>.mywebsearch.com|searchfor|MyWebSearch>w"
	+"ebcrawler.com|q|WebCrawler>wow.com|q|Wow>infospace.com|q|InfoSpace>"
	+"blekko.com|q|Blekko>dogpile.com|q|DogPile>alhea.com|q|Alhea>goduckg"
	+"o.com|q|GoDuckGo>info.com|qkw|Info.com>contenko.com|q|Contenko>baid"
	+"u.com|word,wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q|icq"
	+">myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|Nav"
	+"er>netscape.com|query,search|Netscape Search>reference.com|q|Refere"
	+"nce.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.ti"
	+"scali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|text|Y"
	+"andex.ru>optimum.net|q|Optimum Search>search.earthlink.net|q|Earthl"
	+"ink>search.comcast.net|q|Comcast>libero.it|query|libero.it>excite.c"
	+"o|search|Excite>mail.ru|q|Mail.ru>isearch.avg.com|q|AVG>msn.com|q|M"
	+"SN>seznam.cz|q|seznam.cz>so.com|q|so.com>ixquick.com|query|ixquick."
	+"com>sogou.com|query|sogou.com>360.cn|q|360.cn";

	/*
	 * Plug-in: crossVisitParticipation v1.7
	 */
	//s3.crossVisitParticipation(s3.campaign, 's3_ev18', '30', '5', '>', 'event22');
	s3.crossVisitParticipation = function (v, cn, ex, ct, dl, ev, dv) {
		var s3 = this,
		ce,
		u,
		x,
		diff,
		q,
		z,
		ay,
		ea,
		arry = [],
		a = [],
		c,
		g,
		h = [],
		e,
		start,
		td,
		data,
		r;
		if (!s3.c_r) {
			s3 = window.s3; // added alternate for when called outside of this scope
		}
		if (typeof dv === 'undefined') {
			dv = 0;
		}
		if (s3.events && ev) {
			ay = s3.split(ev, ',');
			ea = s3.split(s3.events, ',');
			for (u = 0; u < ay.length; u++) {
				for (x = 0; x < ea.length; x++) {
					if (ay[u] == ea[x]) {
						ce = 1;
					}
				}
			}
		}
		if (!v || v == '') {
			if (ce) {
				s3.c_w(cn, '');
			}
			return '';
		}
		v = escape(v);
		c = s3.c_r(cn);
		g = 0;
		if (c && c != '') {
			arry = s3.split(c, '],[');
			for (q = 0; q < arry.length; q++) {
				z = arry[q];
				z = s3.repl(z, '[', '');
				z = s3.repl(z, ']', '');
				z = s3.repl(z, '\'', '');
				arry[q] = s3.split(z, ',');
			}
		}
		e = new Date();
		e.setFullYear(e.getFullYear() + 5);
		if (dv == 0 && arry.length > 0 && arry[arry.length - 1][0] == v) {
			arry[arry.length - 1] = [v, new Date().getTime()];
		} else {
			arry[arry.length] = [v, new Date().getTime()];
		}
		start = arry.length - ct < 0 ? 0 : arry.length - ct;
		td = new Date();
		for (x = start; x < arry.length; x++) {
			diff = Math.round((td.getTime() - arry[x][1]) / 86400000);
			if (diff < ex) {
				h[g] = unescape(arry[x][0]);
				a[g] = [arry[x][0], arry[x][1]];
				g++;
			}
		}
		data = s3.join(a, {
				delim : ',',
				front : '[',
				back : ']',
				wrap : '\''
			});
		s3.c_w(cn, data, e);
		r = s3.join(h, {
				delim : dl
			});
		if (ce) {
			s3.c_w(cn, '');
		}
		return r;
	};

	/*
	 * Plugin: Days since last Visit 1.1.H - capture time from last visit
	 */
	s3.getDaysSinceLastVisit = function (c) {
		var s3 = this,
		e = new Date(),
		es = new Date(),
		cval,
		cval_s,
		cval_ss,
		ct = e.getTime(),
		day = 24 * 60 * 60 * 1000,
		f1,
		f2,
		f3,
		f4,
		f5;
		e.setTime(ct + 3 * 365 * day);
		es.setTime(ct + 30 * 60 * 1000);
		f0 = 'Cookies Not Supported';
		f1 = 'First Visit';
		f2 = 'More than 30 days';
		f3 = 'More than 7 days';
		f4 = 'Less than 7 days';
		f5 = 'Less than 1 day';
		cval = s3.c_r(c);
		if (cval.length == 0) {
			s3.c_w(c, ct, e);
			s3.c_w(c + '_s', f1, es);
		} else {
			var d = ct - cval;
			if (d > 30 * 60 * 1000) {
				if (d > 30 * day) {
					s3.c_w(c, ct, e);
					s3.c_w(c + '_s', f2, es);
				} else if (d < 30 * day + 1 && d > 7 * day) {
					s3.c_w(c, ct, e);
					s3.c_w(c + '_s', f3, es);
				} else if (d < 7 * day + 1 && d > day) {
					s3.c_w(c, ct, e);
					s3.c_w(c + '_s', f4, es);
				} else if (d < day + 1) {
					s3.c_w(c, ct, e);
					s3.c_w(c + '_s', f5, es);
				}
			} else {
				s3.c_w(c, ct, e);
				cval_ss = s3.c_r(c + '_s');
				s3.c_w(c + '_s', cval_ss, es);
			}
		}
		cval_s = s3.c_r(c + '_s');
		if (cval_s.length == 0)
			return f0;
		else if (cval_s != f1 && cval_s != f2 && cval_s != f3 && cval_s != f4 && cval_s != f5)
			return '';
		else
			return cval_s;
	}
	// Helper function for standard numeric s.apl event call to reduce frequently used code
	s3.w_addEvt = function (evt) {
		// allow text or numeric events to be passed
		s3.events = s3.apl(s3.events, isNaN(evt) ? evt || '' : 'event' + evt, ',', 2);
	};
	// handler functions for event listening for custom link tracking
	s3.w_getEvtTrgt = function (evt, attrRequired) {
		var evtTarget = evt || window.event,
		lp,
		max = 10; // search 10 ancestors up from clicked element to find suitable target

		evtTarget = evtTarget ? evtTarget.target || evtTarget.srcElement : 0;

		//if (evtTarget && (evtTarget.target || evtTarget.srcElement)) {
		//	evtTarget = evtTarget.target || evtTarget.srcElement; // should really just be able to use 'this' inside handler to refer to calling element, but doesn't work in older IE

		// Safari may target a non-element node, so move to parent
		for (lp = 0; evtTarget && evtTarget.nodeType !== 1 && lp <= max; lp++) {
			evtTarget = evtTarget.parentNode;
		}

		//console.log('attrRequired = ' + attrRequired + ' ================ ')
		//console.log('attrRequired = ' + attrRequired + ', nodeName = ' + evtTarget.nodeName + ', type = ' + (evtTarget.getAttribute && evtTarget.getAttribute(attrRequired)));

		if (attrRequired) {
			// find the element the handler should be referring to, in case the event target is a child node
			for (lp = 0; evtTarget && evtTarget.getAttribute && !evtTarget.getAttribute(attrRequired) && lp <= max; lp++) {
				// work up to find first parent with attrRequired - should be the el with handler attached
				evtTarget = evtTarget.parentNode;

				//console.log('attrRequired = ' + attrRequired + ', nodeName = ' + evtTarget.nodeName + ', type = ' + (evtTarget.getAttribute && evtTarget.getAttribute(attrRequired)));
			}

			// set to zero if node with required attribute not found in parents
			//if (evtTarget && evtTarget.getAttribute && !evtTarget.getAttribute(attrRequired)) {
			if ((evtTarget && !evtTarget.getAttribute) || (evtTarget && evtTarget.getAttribute && !evtTarget.getAttribute(attrRequired))) {
				evtTarget = 0;
			}
		}
		//} else {
		//	evtTarget = 0;
		//}
		//evtTarget=0; // this line only for testing if node not found. should be commented
		return evtTarget || 0;
	};
	// Navigation menu ID config. define data-attribute to identify link groups
	s3.w_getNavMenuId = function (evt) {
		var lp,
		len,
		node = s3.w_getEvtTrgt(evt),
		nav = '';

		// cycle through up to 'len' parent nodes to find a data-analytics-nav attribute
		for (lp = 0, len = 50; lp < len; lp++) {
			if (node) {
				if (node.nodeType === 1) {
					nav = node.getAttribute('data-analytics-nav');
					if (nav) {
						// set val in cookie
						//console.log('nav = ' + nav);
						s3.c_w('nav', nav);
						break;
					}
				}
				node = node.parentNode;
			}
		}
	};
	s3.w_trackLink = function (evt,type) {
		
		var eTarg = s3.w_getEvtTrgt(evt, 'href');
		s3 = s3_gi(s3_account);
		//s.events = 'event71';
		if(/^social/i.test(type)){
			s3.linkTrackEvents = s3.events = 'event71';
			s3.linkTrackVars = s3.w_ltv + ',eVar56,prop56,events'; // includes eVar21 and c39
			s3.eVar56 = util.lCase(eTarg.href, 1);
			s3.prop56 = 'D=v56';
			s3.tl(eTarg || true, 'e', 'social:' + util.lCase(eTarg.href, 1)); // 'eTarg' assumes this function only called from link clicks
			console.log('tl() link:'+type)
		}
		if(/^exit/i.test(type)){
			s3.linkTrackEvents = s3.events = '';
			s3.linkTrackVars = s3.w_ltv;
			s3.tl(eTarg || true, 'e', util.lCase(eTarg.href, 1)); // 'eTarg' assumes this function only called from link clicks
			console.log('tl() link:'+type)
		}
		if(/^download/i.test(type)){
			s3.events = 'event67';
			var pd = (((/pds\.pdf(?:\?|$)/i).test(eTarg.href) || ((/\b(terms\ and\ conditions|product\ disclosure\ statement)\b/i).test(eTarg.innerHTML) && (/\.pdf(?:\?|$)/i).test(eTarg.href))) ? 'pds:' : ''); // ...pds.pdf in href or T and C in link text to identify product disclosure downloads
			if (pd) {
				s3.events+=',event31';
			}
			s3.linkTrackEvents = s3.events;
			s3.linkTrackVars = s3.w_ltv + ',eVar61,prop61,events';
			s3.eVar61 = pd + (util.lCase(eTarg.href, 1).replace(/(.*\/)?(\.*?)/, '$2')); // record file name only
			s3.prop61 = 'D=v61';
			s3.tl(eTarg || true, 'd', pd + util.lCase(eTarg.href, 1)); // 'eTarg' assumes this function only called from link clicks
			console.log('tl() link:'+type)
		}
		if(/^call/i.test(type)){
			var detail = decodeURI(util.lCase(eTarg.href, 1)).replace(/^tel:|\s+/gi, ''); // Appears in the Page interactions name report (v54). custom call links may not have friendly href
			s3.linkTrackEvents = s3.events = 'event61,event69';
			//s.linkTrackVars='prop15,prop69,eVar54,prop54,eVar59,events';
			s3.linkTrackVars = s3.w_ltv + ',eVar54,prop54,eVar59,events';
			s3.eVar54 = 'call:' + detail;
			s3.prop54 = 'D=v54';
			s3.eVar59 = detail;

			//s.forcedLinkTrackingTimeout = 500;
			//s.useForcedLinkTracking = false;

			s3.tl(eTarg || true, 'o', 'interaction:call:' + detail); // 'eTarg' assumes this function only called from link clicks
			//s.tl(eTarg||true,'o','interaction:call:'+detail, null, 'navigate'); // 'eTarg' assumes this function only called from link clicks // this or 'navigate' breaks FF in test page?
			console.log('tl() link:'+type)
		}
		s3.w_endTrckng();
	};
	s3.w_trackLiveChat = function (evt, args) {
		// this function is called directly by LivePerson code when the Interactive Chat event is fired in LivePerson
		var eTarg = s3.w_getEvtTrgt(evt),
		argsObj = args || {},
		detail = util.lCase(argsObj.detail, 1); // details passed from LivePerson rule
		s3 = s3_gi(s3_account);
		//s.events = 'event63,event69';
		s3.linkTrackEvents = s3.events = 'event63,event69';
		//s.linkTrackVars='prop15,prop69,eVar54,prop54,eVar57,prop57,events';
		s3.linkTrackVars = s3.w_ltv + ',eVar54,prop54,eVar57,prop57,events';
		s3.eVar54 = 'live chat:' + detail;
		s3.prop54 = 'D=v54';
		s3.eVar57 = util.lCase(argsObj.session, 1);
		s3.prop57 = 'D=v57';
		s3.tl(eTarg || true, 'o', 'interaction:live chat:' + detail); // (eTarg||true) allows this function to be called from script or link clicks
		s3.w_endTrckng();
	};
	s3.w_trackRank = function (evt) {
		// Track search result rank clicks
		// this refers to data set by another script on the funnelback search results page
		var eTarg = s3.w_getEvtTrgt(evt, 'data-analytics-rank'),
		detail = util.lCase(eTarg && eTarg.getAttribute('data-analytics-rank'), 1);

		s3.c_w('cpr', detail);
		//alert('Set cookie, rank: '+detail);
		//s.w_stopEvt(evt);
	};
	s3.w_trackInteraction = function (evt, args) {
		console.log('w_trackInteraction:')
		var argsObj = args || {},
		eTarg = s3.w_getEvtTrgt(evt, argsObj.detail ? 'href' : 'data-analytics-link'),
		detail = util.clean(decodeURIComponent(util.lCase(argsObj.detail || (eTarg && eTarg.getAttribute('data-analytics-link')), 1))); // tracks details from object passed or event target with data-analytics-link attribute

		if (detail === 'download') {
			s3.w_trackLink(evt,'download'); // Some downloads in OTP are tagged directly as a 'download' (button tags etc. instead of a href)
			return;
		}

		s3 = s3_gi(s3_account);
		//s.events = 'event69';
		s3.linkTrackEvents = s3.events = 'event69';
		//s.linkTrackVars='prop15,prop69,eVar54,prop54,events';
		s3.linkTrackVars = s3.w_ltv + ',eVar54,prop54,events';
		s3.eVar54 = detail;
		s3.prop54 = 'D=v54';
		s3.tl(eTarg || true, 'o', 'interaction:' + detail); // 'eTarg' assumes this function only called from link clicks

		if (argsObj.stopDefault) {
			// dont stop default event unless specified
			s3.w_stopEvt(evt);
		}
		s3.w_endTrckng();
	};
	// link tracking handler
	s3.w_linkTracking = function (evt) {
		console.log('w_linkTracking:')
		var target = s3.w_getEvtTrgt(evt, 'href'),
		linkRegexInternal = new RegExp(s3.linkInternalFilters.replace(/^,|,$/g, '').replace(/,/g, '|'), 'i'),
		linkRegexDownload = new RegExp('\\.(?:' + s3.linkDownloadFileTypes.replace(/,/g, '|') + ')(?:\\?|$)', 'i'),
		linkRegexSocial = (/(?:\/\/|\.)(?:youtube|facebook|twitter|linkedin|plus\.google)\.com/i), // need to confirm list. required to fire event71 if social exit link
		dataAnalyticsLink;

		//console.log('linkRegexDownload = ' + linkRegexDownload);

		// set custom object IDs for clickmap
		// only apply link handlers etc. if trackInlineStats is true
		//if(s.trackInlineStats){
		//	s.setOIDs(); // this probably should only be set once after window load, else link IDs generated every click on page...
		//}

		if (target.nodeName === 'A') {
			// set nav area in cookie
			s3.w_getNavMenuId(evt);

			// social link handling (social link event)
			if ((!linkRegexInternal.test(target.href)) && (linkRegexSocial.test(target.href))) {
				s3.w_trackLink(evt,'social');
			}
			// exit link handling
			if (target.href && (!linkRegexInternal.test(target.href)) && (!linkRegexSocial.test(target.href))) {
				s3.w_trackLink(evt,'exit');
			}
			// download link handling. data-analytics-link attribute used in OTP to define some download links/buttons
			if (linkRegexDownload.test(target.href)) {
				s3.w_trackLink(evt,'download');
			}// site search results link tracking
			if (target.getAttribute('data-analytics-rank')) { // && /.+/.test(target.getAttribute('data-analytics-rank'))) { // previously in selenium two commands were required to capture the rank and click-past. The listener now captures the details in the first click
				s3.w_trackRank(evt);
			}
			// mailto: links?
			if (/^mailto:/i.test(target.href)) {
				target.setAttribute('data-analytics-link', 'email:' + decodeURI(target.href.replace(/^mailto:/i, '').replace(/((?:&|\?)body=.*?(?=&|$))/ig, ''))); // added .replace(/^mailto:/i,'')
				//ABU tpo FIX:  s3.w_trackInteraction(evt);
			}

			// Print link on branch detail page has class=print
			//if (target.getAttribute('data-analytics-link')) { // && /.+/.test(target.getAttribute('data-analytics-rank'))) {
			dataAnalyticsLink = target.getAttribute('data-analytics-link');
			//console.log('dataAnalyticsLink = ' + dataAnalyticsLink);
			if (dataAnalyticsLink) { // && /.+/.test(target.getAttribute('data-analytics-rank'))) {
				if (!linkRegexDownload.test(target.href)) { // only if hasn't already been matched by linkRegexDownload regex above (OTP downloads may use data-attrs instead)
					s3.w_trackInteraction(evt);

					if (/^trackonce:/i.test(dataAnalyticsLink)) { // if the link name (data-analytics-link attribute value) starts with 'trackonce:', only track once, then remove the value to prevent subsequent click tracking
						target.setAttribute('data-analytics-link', '');
					}
				}
			}
			// tel: links
			if (/^tel:/i.test(target.href)) {
				s3.w_trackLink(evt,'call');
			}

			// automatic banner dismiss auto-tracking. function for manual dismiss tracking available
			// this probably requires more than just className selection? may need to be by data-attribute?
			/*
			target = s.w_altGetElemsByClassName(doc.body,'A','pid-dismiss');
			//s.w_addHandler(target[lp],'click',function(evt){s.w_trackBannerDismiss(evt,'text',true)});
			s.w_addHandler(target[lp],'click',s.w_trackBannerDismiss);
			 */

		}

		// update time with every click
		if (!window.performance) {
			s3.c_w('navt',  + new Date(), new Date(+new Date() + 30000)); // cookie updated every click and only lasts for 30 seconds
		}
	};

	// convert prodVal into an array if it was only a string (single product or comma separated)
	s3.w_prodArr = function (prodVal) {
		var prodTemp,
		prodArr,
		lp = 0,
		len;

		if (prodVal && typeof prodVal !== 'object') {
			//prodTemp = String(prodVal).replace(/^,+|,+$/g,'').split(',');
			prodTemp = String(prodVal).split(',');
			prodArr = [];
			for (len = prodTemp.length; lp < len; lp++) {
				// push individual product objects into prodArr array
				if (prodTemp[lp]) {
					prodArr.push({
						'prod' : prodTemp[lp]
					});
				}
			}
		} else {
			prodArr = prodVal || [];
		}
		return prodArr;
	};

	// convert product array into Omniture format product string
	s3.w_prodStr = function (prodArr, details) {
		// join product object array into Omniture formatted prod string for tracking
		var prodSyntax = [],
			//pdFormStatus = pageDetails.formStatus,
			pdFormStatus = util.lCase(util.clean(details.formStatus)),
			pdPageType = util.lCase(util.clean(details.pageType)),
			lp1,
			lp2,
			prodArrLen = prodArr.length,
			productCount,
			pCount = [],
			prodEvents,
			prodEventDetails,
			prodMerch,
			txnType,
			txnEvt,
			txnBand,
			transactionDetails,
			currency,
			amount,
			currencySpecified = false,
			//primaryProduct,
			//primaryProductSpecified = false;
			validProductCount = 0,
			crossSellCheckLen = prodArrLen,
			crossSellProduct,
			crossSellProductSpecified = false,
			primaryProduct,
			secondaryProduct;

		// loop through all products in the prodArr to set transaction amounts (band and average) and translate friendly transaction types into correct event numbers
		//console.log('prodArr = ' + prodArr);
		while (crossSellCheckLen--) { // loop to check if a 'crossSell' item has been explicitly defined. if so, use the details supplied, else assume all products after the first are cross-sell
			if (prodArr[crossSellCheckLen].prod && (/true/i).test(prodArr[crossSellCheckLen].crossSell)) {
				crossSellProductSpecified = true;
				break;
			}
		}

		for (lp1 = 0; lp1 < prodArrLen; lp1++) {
			if (prodArr[lp1].prod) {
				validProductCount += 1;

				if (crossSellProductSpecified) {
					crossSellProduct = /true/i.test(prodArr[lp1].crossSell); // assume crossSell will be specified correctly in details
				} //else {
				//crossSellProduct = validProductCount > 1 ? true : false; // if nothing specified, anything after first valid product is assumed to be cross-sell
				//}
				// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -
				// commented default crossell for second product without crossel property
				// append primaryProduct or secondaryProduct prefix (1- or 2-) in product string
				if (prodArr[lp1].primaryProd === 'true') {
					primaryProduct = true;
					console.info('primaryProduct', primaryProduct);
				}
				if (prodArr[lp1].secondaryProd === 'true') {
					secondaryProduct = true;
					console.info('secondaryProduct', secondaryProduct);
				}
				// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -


				// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -
				if (prodArr[lp1].qty) {
					var totalProductsSold = 0;
					pCount.push(prodArr[lp1].qty);
					pCount = pCount.map(parseFloat);

					for (var i in pCount) {
						totalProductsSold += pCount[i];
					}
					productCount = totalProductsSold;
				}
				if (productCount && pdPageStep === 'complete' && pdPageType === 'application') {
					pdProductCount = productCount;
					digital['dd.productCount'] = productCount;
				}
				// - - - - - - - - -  wbg|form|app|*au - - - - - - - - - - -

				prodEvents = prodArr[lp1].events;
				prodMerch = prodArr[lp1].merch;
				prodMerch = prodMerch === 'options=' ? '' : prodMerch; // remove redundant options if none specified

				if (prodEvents) { // only need to add transaction bands to merch vars if there is a transaction event
					prodEvents = prodEvents.split('|');
					prodMerch = prodMerch ? prodMerch.split('|') : [];

					for (lp2 = 0; lp2 < prodEvents.length; lp2++) {
						prodEventDetails = prodEvents[lp2].split('=');
						txnType = prodEventDetails[0];
						txnEvt = txnType; // default is value passed in object

						// ensure all events specified in s.products are also set in s.events
						if (/^deposit\b/.test(txnType)) { // event5 for deposit amount event
							txnEvt = 'event5';
						}
						/*else{
						if(/^event5\b/.test(txnType)){ // 'deposit' for amount band merch evar if event5 specified
						txnType='deposit';
						}
						}*/
						if (/^payment\b/.test(txnType)) {
							txnEvt = 'event40';
						}
						/*else{
						if(/^event40\b/.test(txnType)){
						txnType='payment';
						}
						}*/
						if (/^loan\b/.test(txnType)) {
							txnEvt = 'event41';
						}
						/*else{
						if(/^event41\b/.test(txnType)){
						txnType='loan';
						}
						}*/

						if ((/^(?:deposit|payment|loan|\(not\ set\))(?::|$)/).test(txnType)) {
							// values may be like 'payment:processing...', 'loan:approved...'
							// could check end of txnType for status (:processing/:approved/:declined) of individual products to set relevant events (e.g. 18, 19, 20) here, if multiple respective status of products in a form is ever required/possible.
							// pdFormStatus as the generic value could be removed from the s.w_amntBnds parameters to allow respective product values to be used instead


							// Transaction values may be like '1200', '$123.45' ($=AUD), 'USD123.45', 'EUR123' etc. default to AUD if currency missing
							transactionDetails = (prodEventDetails[1] || '').match(/^(\D*)(.*)/); // get currency and amount
							currency = (transactionDetails[1] || '$').toUpperCase(); // default to $ if currency missing
							if (currency === '$') { // Set to AUD if currency prefix was set, or defaulted to '$'
								currency = 'AUD';
							}
							if (!currencySpecified) {
								currencySpecified = true; // set base currency to first detected in product set only
								s3.currencyCode = currency;
							}
							if (currency !== s3.currencyCode) {
								// if different to 1st product currency, append '-mix' to currency. Only one currency allowed per request. keep only values matching 1st currency
								currency += '-mix';
							}
							amount = transactionDetails[2];

							// get amount band. pass status from generic pageDetails value, or use status set in txnType set against each respective product in array
							txnBand = util.amntBnds(txnType + (pdFormStatus ? ':' + pdFormStatus : '') + ':' + currency, amount); // set all products in a form to the generic form status
							//txnBand=s.w_amntBnds(txnType+':'+currency, amount); // txnType passed with product array item could specify respective status for each product, like 'loan:approved=123'

							if (/^(?:\(not\ set\))(?::|$)/.test(txnType)) {
								// if application transactionType not set, we don't know which event to set the txn amount into
								prodEvents[lp2] = '';
							} else {
								// only set s.events and prod events if valid event
								prodEvents[lp2] = txnEvt + '=' + (currency === s3.currencyCode ? txnBand.avg : 0); // set value of different currency amounts to zero to avoid incorrect conversion to base currency of request (taken from first value)
								//s.events = s.apl(s.events,txnEvt,',',2);
								s3.w_addEvt(txnEvt);
							}
							// always set bands even if some values not set. Dont set transaction type and amount if both values empty
							//prodMerch.push('eVar37='+txnType); // txnType doesn't set any merch details. eVar37 now product options
							if (txnBand.avg !== 0 || txnType !== '(not set)') {
								prodMerch.push('eVar51=' + txnBand.range);
							}
						}
					}
					prodEvents = prodEvents.join('|');
					prodMerch = prodMerch.join('|');
				}

				// translate product object into an omniture-formatted string and add it to an array. set qty as 1 by default
				//console.log('prod = ' + prodArr[lp1].prod);

				prodSyntax.push(
					util.lCase(prodArr[lp1].cat || '') + ';' +
					//s.w_lCase(prodArr[lp1].prod) + (pdPageType === 'application' && !primaryProduct ? '-x' : '') + ';' + // identify primary product/s for enhanced cross-sell reporting
					//s.w_lCase(s.w_clean(prodArr[lp1].prod.replace(/,/g, ' '))) + (pdPageType === 'application' && !primaryProduct ? '-x' : '') + ';' + // identify primary product/s for enhanced cross-sell reporting
					(pdPageType === 'application' && crossSellProduct ? 'x-' : '' || secondaryProduct ? '2-' : '' || primaryProduct ? '1-' : '') + util.lCase(util.clean(prodArr[lp1].prod.replace(/,/g, ' '))) + ';' +  // identify primary product/s for enhanced cross-sell reporting
					(prodArr[lp1].qty || '1') + ';' + (prodArr[lp1].total || '') + ';' + (prodEvents || '') + ';' +
					//.replace(/deposit(?==)/g,'event5') // replace friendly product event names with event numbers
					//.replace(/loan(?==)/g,'event41')
					//.replace(/payment(?==)/g,'event40')+';'+
					(prodMerch || '')
						.replace(/(^|\|)options=/g, '$1eVar37=') // set product options into eVar37
					//.replace(/(^|\|)merchVar(?==)/g,'eVarX') // example only, replace friendly merchandising names with eVar numbers
				);
			}
		}
		// if only one product, or if more than one product and no primary specified, only the first product is primary.
		/*
		if (prodSyntax.length === 1 || (prodSyntax.length > 1 && !primaryProductSpecified)) {
		prodSyntax[0] = prodSyntax[0].replace(/(.*?;.*?)-x(?:;|$)/, '$1;');
		}
		 */
		return prodSyntax.join(',').replace(/;;;,/g, ',').replace(/;;;$/, ''); // join product string array and remove unnecessary delimiters to reduce pixel length
	};
	s3.w_log = function (type, data) {
		if (s3.c_rr('s3_pers_wp_dev') || !s3.w_prod) {
			try {
				console.info( type + ' : ' + data); // debug logging only when dev, or dev cookies set. this should be on for live sites for debugging
			} catch (ignore) {
				// don't log if console unavailable
			}
		}
	};
	s3.w_collectStoredData = function () {
		// epoch date used to clear cookies
		var dateZero = new Date(0); //,
		//impTmp = s.c_r('impTmp'); //

		// collect pid impressions from after previous page load
		s3.list2 = s3.c_r('visImpTmp');

		// put the temp banners into the normal cookie
		//s.c_w('banners', impTmp, impTmp ? new Date(+new Date() + (24 * 60 * 60 * 1000)) : dateZero); // store new banners from this page. keep impressions in cookie for 24 hours
		//s.c_w('impTmp', 0, dateZero); // clear banner cookie after adding to cookie for sending

		//console.log('COLLECT STORED - impTmp = ' + impTmp);

		s3.c_w('visImpTmp', 0, dateZero); // clear after sending
		//s.w_prevPgCkiesSent = true;

		// capture number of form validation errors from cookie
		if (s3.c_r('errCount')) {
			s3.prop17 = s3.c_r('errCode');
			//s.eVar30 = (s.prop17.indexOf(s.w_inlErr+',')>-1? s.prop17 : 'defined errors') + ':' + s.c_r('errCount');
			s3.eVar30 = 'errors:' + util.cap(s3.c_r('errCount'), 50);
			s3.c_w('errCode', 0, dateZero);
			s3.c_w('errCount', 0, dateZero);
		}

		// Navigation menu ID
		//s3.prop59 = s3.c_r('nav');
		// remove nav cookie after tracking
		//s3.c_w('nav', 0, dateZero);

		// if search results 'click past rank' cookie has been set from result link click, track the rank and click event and delete the cookie.
		// The cookie is set on search results link clicks with the rank of the link
		s3.prop16 = util.cap(s3.c_r('cpr'), 101);
		if (s3.prop16) {
			s3.w_addEvt(15);
			// delete cookie after tracking
			s3.c_w('cpr', 0, dateZero);
		}
	};
	/*s3.w_clearOmniVars = function () {
		var lp,
		len,
		//sVarArr,
		empty = '';

		for (lp = 0, len = 75; lp <= len; lp++) {
			s['prop' + lp] = empty;
			s['eVar' + lp] = empty;

			if (lp <= 5) {
				s['hier' + lp] = empty;
				s['list' + lp] = empty;
				s['pev' + lp] = empty;
			}
		}
		s3.pageName = s3.pageType = s3.channel = s3.products = s3.productsList = s3.events = s3.eventList = s3.campaign = s3.purchaseID = s3.transactionID = s3.state = s3.zip = s3.server = s3.linkName = empty;

	};*/
	// test global drop list to decide if the page should be aborted
	s3.w_globalDrop = function (refObj) {
		var testResult = 0,
		siteDropList = util.lStor('get', 'analytics_nameKeyDrop'); //,
		//pageDropCondition = String(refObj.abortIf).split('=', 2),
		//pageDropCompare;

		// global (within origin) drops
		if (siteDropList) {
			testResult = new RegExp('(^|,)' + String(refObj._nameKey).replace(/([.*+?\^=!:${}()\|\[\]\/\\])/g, '\\$1') + '(,|$)').test(siteDropList);
		}

		//console.log('testResult = ' + testResult);

		return testResult;
	};
	// test specific values to decide if the pageDetails should be aborted, changed etc.
	//s.w_changeIf = function (refObj, sObjectProperties) // dynamically change pageDetails or s object
	s3.w_changeIf = function (refObj) { // dynamically change pageDetails
		var prpty,
		expressionSet = refObj.changeIf || [],
		expressionSetLength,
		expressionItem,
		//sObjectItem,
		//getSObjectProperty = function (item) {
		//	return sObjectProperties && /^s\.(prop|eVar)/.test(item) && item.replace(/^s\./, '');
		//},
		ifItemVal,
		equalsItemVal,
		andIf,
		andEvaluation,
		dynamicItems = {
			'(lastpage)' : s3.c_r('lastPg'),
			'(location)' : util.getLoc().href,
			'(referrer)' : document.referrer,
			'(s_pers)' : s3.c_rr('s_pers'), // these cookie values can only be used in the if expression, not equals
			'(s_sess)' : s3.c_rr('s_sess') // these cookie values can only be used in the if expression, not equals
		};
		//console.log(dynamicItems);

		try {
			if (typeof expressionSet === 'string') {
				expressionSet = JSON.parse(expressionSet);
			}
		} catch (err) {
			//s.w_log(err);
			expressionSet = [];
		}

		//console.log('expressionSet = ');
		//console.log(expressionSet);

		expressionSetLength = expressionSet.length;

		for (prpty = 0; prpty < expressionSetLength; prpty++) {
			expressionItem = expressionSet[prpty];
			//console.log(expressionItem);

			if (expressionItem.item && expressionItem.like && expressionItem.then) {
				//console.log('expressionItem = ');
				//console.log(expressionItem);
				//sObjectItem = getSObjectProperty(expressionItem.item);
				//ifItemVal = String(dynamicItems[expressionItem.item] || refObj[expressionItem.item] || (sObjectItem && window.s[sObjectItem]) || ''); // only when called from end of doPlugins, for async
				ifItemVal = String(dynamicItems[expressionItem.item] || refObj[expressionItem.item] || ''); // only when called from end of doPlugins, for async
				//console.log('ifItemVal = ');
				//console.log(ifItemVal);
				//sObjectItem = getSObjectProperty(expressionItem.equals);
				//equalsItemVal = String(dynamicItems[expressionItem.equals] || refObj[expressionItem.equals] || (sObjectItem && window.s[sObjectItem]) || expressionItem.equals || ''); // added option to set a property to one of the dynamic values
				equalsItemVal = String(dynamicItems[(expressionItem.equals || '').replace(/\((s_pers|s_sess)\)/i, '')] || refObj[expressionItem.equals] || expressionItem.equals || ''); // added option to set a property to one of the dynamic values
				//console.log('equalsItemVal = ');
				//console.log(equalsItemVal);

				andEvaluation = true;
				andIf = expressionItem.and;
				if (andIf && andIf.item && andIf.like) {
					andEvaluation = new RegExp(andIf.like, 'i').test(String(dynamicItems[andIf.item] || refObj[andIf.item] || ''));
				}

				if (new RegExp(expressionItem.like, 'i').test(ifItemVal) && andEvaluation) {
					if (expressionItem.replace) {
						//console.log('regex = ' + new RegExp(expressionItem.replace.exp, expressionItem.replace.flags || ''));
						equalsItemVal = equalsItemVal.replace(new RegExp(expressionItem.replace.exp, expressionItem.replace.flags || ''), expressionItem.replace.subs || '');
					}
					//console.log('equalsItemVal = ' + equalsItemVal);
					refObj[expressionItem.then] = equalsItemVal;
					//sObjectItem = getSObjectProperty(expressionItem.then);
					//if (sObjectItem) {
					//	window.s[sObjectItem] = equalsItemVal;
					//}
				}
			}
		}

		//console.log('refObj = ');
		//console.log(refObj);
	};
	// track a page only once per window load (for single page applications). All names sent stored in array to compare for all further calls until reset or page reloaded (array cleared)
	s3.w_pageTracked = function (pgName) {
		var lp,
		tracked = false;

		s3.w_trackedPages = s3.w_trackedPages || [];
		lp = s3.w_trackedPages.length;
		while (lp--) {
			if (s3.w_trackedPages[lp] === pgName) {
				// already been tracked this page load
				tracked = true;
				break;
			}
		}
		if (!tracked) {
			s3.w_trackedPages.push(pgName);
		}
		//console.log('tracked '+pgName+'? '+tracked + '. s.w_trackedPages = '+s.w_trackedPages);
		return tracked;
	};
	// track a page load
	s3.w_trackPage = function (details) {
		var referenceObj = details || pageDetails,
		lastPredictedPageName = s3.c_r('lppn'),
		currPredictedPageName,
		detailsCopy; //,
		
		// remove this property in case it was set manually. This is for internal code logic only
		delete referenceObj._drop;

		if (referenceObj.originNameKeyDrop) {
			util.lStor('set', 'analytics_nameKeyDrop', referenceObj.originNameKeyDrop);
		}
		if (referenceObj.originPageNameReplace) {
			util.lStor('set', 'analytics_pageNameReplace', referenceObj.originPageNameReplace);
		}
		if (referenceObj.originProductsReplace) {
			util.lStor('set', 'analytics_productsReplace', referenceObj.originProductsReplace);
		}
		
		s3.w_pgTrkStatus = referenceObj.s_abort ? 'blocked' : 'started'; // any new impressions passed should now be associated with this page if not being dropped
		
		
		// make object copy for async pageDetails delayed tracking (can't operate async on a single object)
		//detailsCopy = JSON.parse(JSON.stringify(details));
		detailsCopy = util.cloneObject(referenceObj);
		
		// after object passed has been copied, clear window.pageDetails ready for new values
		if (/true/i.test(detailsCopy.reset)) {
			pageDetails = {};
		}
		
		// Always remove these page/screen specific properties from any reference object so they doesn't persist to any subsequent pages/screens if the whole context is used in the next screen/dialog in fiserv OTP code
		// s_ override keys may also need to be removed if set and persisted by single page apps etc.
		delete referenceObj.trackAsLink;
		delete referenceObj.s_linkType;
		delete referenceObj.trackOnce;
		delete referenceObj.s_abort;
		delete referenceObj.addEvents;
		delete referenceObj.sendDelay;
		
		// initialise siteID for consistent getPageName prediction below. Real site ID determined in doPlugins
		s3.siteID = false;

		// Predict expected pageName for dupe/trackOnce to decide whether to keep or ignore new impressions being passed
		dcPageName = detailsCopy.pageName || '0';
		// change any details async (in order of calls)
		s3.w_changeIf(detailsCopy);
		currPredictedPageName = (detailsCopy.s_pageName || (detailsCopy.formName ? detailsCopy.formName + (detailsCopy.formType || '0') + dcPageName : (detailsCopy.transactionType ? detailsCopy.transactionType + dcPageName : (detailsCopy.subSite || '0') + (detailsCopy.pageName ? (detailsCopy.pageNamePrefixes || '0') + dcPageName : decodeURIComponent(util.getPageName(util.pageURL)))))) + (detailsCopy.pageType || '0') + (detailsCopy.dialogTitle || '0') + (detailsCopy.itemName || '0') + (detailsCopy.pageNameReplace || '0'); // replace undefined's with '0' to shorten value
		/*
		console.log('s.getPageName(s.pageURL) ' + s.getPageName(s.pageURL));
		console.log('s.getPageName(s.pageURL) ' + decodeURI(s.getPageName(s.pageURL)));
		console.log('s.getPageName(s.pageURL) ' + decodeURIComponent(s.getPageName(s.pageURL)));
		 */
		detailsCopy._nameKey = ((detailsCopy.pageKey || '0') + (detailsCopy.experience || '0') + currPredictedPageName).replace(/,/g, '_'); // replace commas with underscore (stored drop string is comma separated)
		
		// reset trackOnce data to allow SPA pages to be sent again
		if (/reset/i.test(detailsCopy.trackOnce)) {
			s3.w_trackedPages = 0;
		}
		
		if (detailsCopy.s_abort || ((/true/i.test(detailsCopy.trackDedupe) && lastPredictedPageName === currPredictedPageName) || ((/true/i.test(detailsCopy.trackOnce) && s3.w_pageTracked('pre_' + currPredictedPageName)) || s3.w_globalDrop(detailsCopy)))) {
			//if (detailsCopy.s_abort || ((/true/i.test(detailsCopy.trackDedupe) && lastPredictedPageName === currPredictedPageName) || ((/true/i.test(detailsCopy.trackOnce) && s3.w_pageTracked('pre_' + currPredictedPageName)) || globalDrop))) {
			// stop trackDedupe and trackOnce calls from collecting impressions
			//trackingToBeSent = 0;
			// allow trackDedupe calls to continue tracking process until accurate dedupe name is determined in doPlugins
			detailsCopy._drop = 1;
			s3.w_pgTrkStatus = 'blocked'; // don't collect banners for pages being aborted or meeting trackDedupe/trackOnce rules
		} else {

			// set 'Last Predicted PageName' to current name being sent, to compare next call
			s3.c_w('lppn', currPredictedPageName, new Date(+new Date() + (30 * 60 * 1000))); // keep last page name in cookie for 24 hours for impressions etc.
		}
		// always reset after first trackPage call
		// clear s object vars ready for new step of 1-page	 forms
		//s3.w_clearOmniVars();
		s3.clearVars
		s3.w_log('pageDetails',unescape(JSON.stringify(detailsCopy, null, 4).replace(/\\u([\w\d]{4})/g, '%u$1')));
		if (!detailsCopy._drop) {
			s3.w_pgTrkStatus = 'sent'; // ok to start collecting banners for this page
			s3.w_perfTracked = true; // prevent from re-running
			digital = s3.AnalyticsContextData(detailsCopy)
			s3.contextData = digital;
			if (digital['ev_appStart']){
				s3.events = s3.apl(s3.events, 'event26' + ':' + util.serialise(eventSerialisationKey, pdPageStep), '', 1);
			}
			if (digital['ev_appComplete']){
				s3.events = s3.apl(s3.events, 'event27' + ':' + util.serialise(eventSerialisationKey, pdPageStep), '', 1);
			}
			if (digital['ev_enqStart']){
				s3.events = s3.apl(s3.events, 'event28' + ':' + util.serialise(eventSerialisationKey, pdPageStep), '', 1);
			}
			if (digital['ev_enqComplete']){
				s3.events = s3.apl(s3.events, 'event29' + ':' + util.serialise(eventSerialisationKey, pdPageStep), '', 1);
			}
			// collect and remove data only if it is likely to actually be sent
			s3.w_collectStoredData();
			s3.t();
			console.log('f():w_trackPage s3.t()');
			util.trackImprs();
			s3.w_endTrckng();
			s3.w_log('context data', unescape(JSON.stringify(digital, null, 4).replace(/\\u([\w\d]{4})/g, '%u$1')));
		}else{
			s3.w_log('drop',true)
			
		}
		
	}

	// Do things after pixel sent
	s3.w_endTrckng = function () {
		console.log('w_endTrckng:'+s3.kb);
		// record length of last pixel	
		//var sVisitorNamespace = s.visitorNamespace,
		//s = s.rc ? s.rc[sVisitorNamespace] : 0,
		//var lastPixel = window['s_i_' + s3.account],
		//lastPixelSrc = lastPixel && lastPixel.getAttribute('src'),
		//lastPixelSrc = lastPixel && lastPixel.src,
		//var lastPixelSrc = window['s_i_' + s3.account].src === 'undefined' ? window['s_i_' + s3.account].src: s3.kb,
		setTimeout(function(){
			console.log('timeout:'+s3.kb);
			var lastPixelSrc = s3.kb||'';
			lastPixelLength = 0;
			s3.w_log('s_code', s3.pageName);

			//var lastPixelSrc = window["s2"].kb
			if (lastPixelSrc) { // changed to lastPixel.getAttribute('src') to avoid invalid pointer error in IE11 when reading .src
				lastPixelLength = lastPixelSrc.length;

				// add pixels to an array to simplify testing
				s3.w_pixels = s3.w_pixels || [];
				s3.w_pixels.push(lastPixelSrc);

				// store length of the pixel just fired in a cookie, to extract on next page load
				s3.c_w('lastPixelLen', lastPixelLength);
				if (!digital._drop) {
						util.cookieWrite('lastPage', s3.pageName, new Date(+new Date() + (24 * 60 * 60 * 1000)));
						console.log('previousPage'+ s3.pageName);	
						s3.w_pgTrkStatus = 'sent';
				}
				
			}
		}, 1000);
		//return lastPixelLength;
	};
	//ABU zzz Try Dynamic value 'D=mid' or capture mid manual
	/*if(typeof visitor != 'undefined'){
		s3.eVar25 = s3.prop25 = visitor.getMarketingCloudVisitorID(visitor.cookieName);
	}*/
	s3.eVar25 = 'D=mid'; //s3.prop25 =

	//ABU: Analytics ID tracking 
	var ctid ={};
	//STG ID
	/*if (s3.c_r("s_stg_ti")){ctid.stgid = {"id" : s3.c_r("s_stg_ti"), "authState": (s3.c_r("s_stg_auth") === '1' ? Visitor.AuthState.AUTHENTICATED:Visitor.AuthState.UNKNOWN)}}
	if (s3.c_r("s_bom_ti")){ctid.bomid = {"id" : s3.c_r("s_bom_ti"), "authState": (s3.c_r("s_bom_auth") === '1' ? Visitor.AuthState.AUTHENTICATED:Visitor.AuthState.UNKNOWN)}}
	if (s3.c_r("s_bsa_ti")){ctid.bsaid = {"id" : s3.c_r("s_bsa_ti"), "authState": (s3.c_r("s_bsa_auth") === '1' ? Visitor.AuthState.AUTHENTICATED:Visitor.AuthState.UNKNOWN)}}
	if (s3.c_r("s_wbc-ti")){ctid.wbcid = {"id" : s3.c_r("s_wbc-ti"), "authState": Visitor.AuthState.UNKNOWN}}
	if (s3.c_r("s_wbc-gi")){ctid.wbcgid = {"id" : s3.c_r("s_wbc-gi"), "authState": Visitor.AuthState.UNKNOWN}}*/

	if (s3.c_r("s_stg_ti")){ctid.stgid = {"id" : s3.c_r("s_stg_ti")}}
	if (s3.c_r("s_bom_ti")){ctid.bomid = {"id" : s3.c_r("s_bom_ti")}}
	if (s3.c_r("s_bsa_ti")){ctid.bsaid = {"id" : s3.c_r("s_bsa_ti")}}
	if (s3.c_r("s_wbc-ti")){ctid.wbcid = {"id" : s3.c_r("s_wbc-ti")}}
	if (s3.c_r("s_wbc-gi")){ctid.wbcgid = {"id" : s3.c_r("s_wbc-gi")}}

	//Multiple IDs with a single authentication state
	console.log(ctid);
	s3.visitor.setCustomerIDs(ctid);

	if (pageBrand === 'wbc'){
	// === WESTPAC == //
	// generic account ID - value in cookie should have a prefix like 'corp_'. These will get overwritten through different sites, but could be tied together with visitor ID etc.
	// included for CORP and other sites that require tracking ID
	s3.eVar34 = 'D=s_wbc-gi'; //s3.prop34 =
	// customer tracking ID
	s3.eVar35 =  'D=s_wbc-ti'; //s3.prop35 =// cookie is set at .westpac.com.au
	// customer otp profile
	s3.eVar47 = 'D=s_wbc-pi'; //s3.prop47 =
	// Webseal ID proxy
	s3.eVar48  = 'D=s_wbc-ses'; //= s3.prop48
	// customer type segment
	s3.eVar50 = s3.c_rr('s_wbc-seg'); //s3.prop50 = // if values are short capture as-is, else use dynamic value to get value server-side.
	}
	// === STG == //
	pageBrand === 'stg'? s3.eVar34 = 'D=s_stg_ti' : '';//s3.prop34 =

	// === BOM == //
	pageBrand === 'bom'? s3.eVar34 = 'D=s_bom_ti' : ''; //s3.prop34 =

	// === BSA == //
	pageBrand === 'bsa'? s3.eVar34 = 'D=s_bsa_ti': ''; //s3.prop34 =

	// detect OTP/online banking profile switching
	custTrackingId = s3.c_rr('s_wbc-ti');
	if (custTrackingId) {
		custTrackingIdPrevious = s3.c_r('temp-ti');
		s3.c_w('temp-ti', custTrackingId); // update to current
	}
	custProfileId = s3.c_rr('s_wbc-pi');
	if (custProfileId) {
		custProfileIdPrevious = s3.c_r('temp-pi');
		s3.c_w('temp-pi', custProfileId); // update to current
	}
	if (custTrackingId && custTrackingId === custTrackingIdPrevious && custProfileId && custProfileIdPrevious && custProfileId !== custProfileIdPrevious) {
		userSwitchedProfile = true;
		s3.prop59 = '(switch profile)';
		console.log('Profile switched'); // detect when only switching profiles and landing on dashboard vs. a new login to dashboard
	}

	// capture user-agent
	s3.prop27 = 'D=User-Agent'; // capture with proc rule to increase capture (non-JS), reduce JS size and reduce pixel length

	//Previous page
	if(lastSentPage){
		digital['dd.previousPage'] = lastSentPage;
		var lastPixelLength = s3.c_r('lastPixelLen')
		digital['dd.lastPixelLength'] = lastPixelLength;
	}

	// External Campaigns
	//if(!s.campaign){
	//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
	s3.campaign = util.getValOnce(util.lCase(util.getQueryParam('cid', '', util.getLoc().href)), 's3_cid', 30, 'm'); // getValueOnce only if data will be sent, else value may not be sent
	//}
	if (s3.campaign) {
		s3.eVar16 = 'D=v0';
		s3.eVar17 = 'D=v0';
		s3.eVar18 = s3.crossVisitParticipation(s3.campaign, 's3_ev18', '30', '5', '>', 'event22'); // this is cleared every time event22 fires. i.e. Application Complete step
	}

	//console.log('ORIG s.list2  = ' + s.list2); // impressions from banner cookie related to previous page, collected after it loaded
	//console.log('pdPreImprs    = ' + pdPreImprs); // any other impressions passed for the current page after trackPage was called, but before it completed (and scanning links)
	/* ABU var pdPreImprs = pageDetails.preImprs;
	pdPreImprs = pdPreImprs ? pdPreImprs.split(',') : [];
	for (prpty = 0; prpty < pdPreImprs.length; prpty++) {
		s3.list2 = s3.apl(s3.list2, pdPreImprs[prpty], ',', 2);
	}*/
	//console.log('NEW s.list2   = ' + s.list2); // combined list of impressions for previous page
	if (s3.list2) {
		//s3.w_addEvt(11);
		util.addEvt(digital,'intImpressions');
	}

	// Internal banner clicks
	pidQuerystring = util.lCase(util.getQueryParam('pid', '', util.getLoc().href));
	//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
	s3.eVar22 = util.getValOnce(pidQuerystring, 's3_pid', 30, 'm');
	//}

	// count every pid click for comparison to getValueOnce count
	if (pidQuerystring) {
		//appendEvent(10);
		util.addEvt(digital,'pidTotalClicks');
	}

	//if(s.eVar22&&!s.eVar65){
	if (s3.eVar22) {
		//appendEvent(12);
		util.addEvt(digital,'intClickThroughs');
		s3.eVar20 = s3.crossVisitParticipation(s3.eVar22, 's3_ev20', '30', '5', '>', 'event22');
	}
	//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
	s3.eVar65 = util.getValOnce(util.lCase(util.getQueryParam('ref', '', util.getLoc().href)), 'refPrm', 30, 'm');
	//}
	// incoming links from AFS-group sites
	//if(s.eVar22&&s.eVar65){
	// ref is now just an additional parameter for tracking links from other sites
	if (s3.eVar65) {
		//appendEvent(72);
		util.addEvt(digital,'afs-group');
	}
	//else{
	//	s.eVar65='';
	//}

	// Combined Internal External Stack
	if (s3.eVar22) {
		s3.eVar19 = s3.crossVisitParticipation(s3.eVar22, 's3_ev19', '30', '10', '>', 'event22');
	}
	if (s3.campaign) {
		s3.eVar19 = s3.crossVisitParticipation(s3.campaign, 's3_ev19', '30', '10', '>', 'event22');
	}

	// Paid/Natural Search Keyword
	s3.prop18 = pageNameDynamicVariable; // set to just pageName as default
	s3._channelParameter = 'Campaign|cid';
	s3.channelManager('cid','','s3_c_m');

	//channelManagerKeywords = cleanText(s._keywords || ''); // filter search keywords a bit - strip multiple spaces etc.
	channelManagerKeywords = util.clean(s3._keywords); // filter search keywords a bit - strip multiple spaces etc.

	if (s3._channel === 'Natural Search') {
		channelManagerSearchType = 'NS';
		// prop18 seo keywords and entry page
		s3.prop18 = 'D="' + channelManagerKeywords + '|"+pageName';
	}
	//if(s._channel==='Campaign'&&/^sem:/i.test(s._campaign)){ // if cid param, and value starts with 'sem:' (just check for any CID). confirm identifier for PPC tracking codes
	if (s3._channel === 'Campaign' && channelManagerKeywords !== 'n/a') { // only if cid param exists and keywords are found, it's paid search. We may not have keywords if they are not passed by the search engine (usually for NS)
		channelManagerSearchType = 'PS';
	}
	if (channelManagerSearchType) {
		s3.eVar11 = channelManagerKeywords === 'n/a' ? 'Keyword Unavailable' : channelManagerKeywords;
		s3.prop11 = s3.dVar(11);

		s3.eVar12 = s3.crossVisitParticipation(channelManagerSearchType + '|' + channelManagerKeywords, 's3_ev12', '30', '5', '>', 'event22');
	}

	s3.eVar29 = s3.getDaysSinceLastVisit('s3_lv');
	s3.prop39 = "vid"+Visitor.version+","+util.version+",App"+ s3.version;

	if (/^sitesearch$/.test(pdPageType)) {
		//s.eVar14 = getValueOnce(lowerCaseVal(pageDetails.searchTerm,1).replace(/\d/g,'#').replace(/\s+/g,' ').replace(/^\s|\s$/g,''),'s_stv',0); // getValOnce after #. Hash only 5+ digits?
		s3.eVar14 = util.getValOnce(util.srchTerm(pdSearchTerm), 's3tv', 30, 'm'); // getValOnce after #. Hash only 5+ digits?
		if (s3.eVar14) {
			s3.prop14 = s3.dVar(14);
			// split search term into keywords
			s3.list1 = util.clean(s3.eVar14.replace(/[^a-z]+/gi, ' ')).replace(/\s/g, ','); // ,4); // for list prop, remove all chars outside a-z
			//s.eVar15 = pageBrand + ':' + (pageSite==='banking'?'secure':'public'); // OTP doesnt have site search
			s3.w_addEvt(14);
			//s.eVar30 = 'sitesearch:' + pdSearchResults; // use pdPageType here in place of text sitesearch string
			s3.eVar30 = pdPageType + ':' + pdSearchResults;
			//if(s.eVar30==='sitesearch:0'){
			//console.log(pdSearchResults);
			//if (s.eVar30 === pdPageType + ':0') {
			if (pdSearchResults === '0') {
				s3.w_addEvt(16);
			}
		} //else{
		//	s.eVar14 = notSet;
		//}
		//}
	}
	// capture URL
	s3.eVar26 = 'D=Referer+"' + util.getLoc().hash.replace(util.guidRgx, '(GUID)') + '"'; // this is the full unprocessed page URL from HTTP header (includes hash)
	s3.prop26 = 'D=g'; // this is the filtered page URL from JS document (will include hash if any)
	/*s3.ActivityMap.link = function(ele, linkName) {
		if (ele) {
			var objectId = ele.getAttribute('data-s-object-id');
			if (objectId) {
				return objectId;
			}
		
			if (ele.tagName == 'A' && ele.href) {
				return ele.href;
			}
		}
		if (linkName) {
			return linkName;
		}
	}*/
	s3.ActivityMap.link = function(ele, linkName) {
		 if (ele) {
			 var objectId = ele.getAttribute('data-s-object-id');
			 if (objectId) {
				 return objectId;
			 }

			 if (ele.tagName == 'A' && ele.href) {
				 // mailto: links?
				 if (/^mailto:/i.test(ele.href)) {
					 return 'email:' + decodeURI(ele.href.replace(/^mailto:/i, '').replace(/((?:&|\?)body=.*?(?=&|$))/ig, '')); // added .replace(/^mailto:/i,'')
				 } else if (/^tel:/i.test(ele.href)) {
					 return 'call:' + decodeURI(util.lCase(ele.href, 1)).replace(/^tel:|\s+/gi, '');
				 }
				 return ele.href;
			 }
		 }
		 if (linkName) {
			 return linkName;
		 }
		 return "";
	};

	s3.ActivityMap.region = function(ele) {
		var nav='';
		var ele_orig = ele;
		// for westpac.com.au
		while ((ele && (ele = ele.parentNode))) {
			if (ele.nodeType === 1) {
				nav = ele.getAttribute('data-analytics-nav');
				if (nav) {
					return nav;
				}
			}
		}

		// for stg
		ele = ele_orig;
		var classNameArray;
		var className,
			classNames = {
				'top-header': 1,
				'topnav': 1,
				'header': 1,
				'breadcrumb': 1,
				'leftside-navigation':1,
				'asideright':1,
				'content':1,
				'footer': 1,
			};
		while ((ele && (ele = ele.parentNode))) {
			classNameArray = ele.className.split(" ");

			for (var i = 0; i < classNameArray.length; ++i) {
				if ((className = classNameArray[i]) && classNames[className]) {
					return className;
				}
			}
		}
		return "BODY";
	} 

	// attach link handler to document
	util.addHandler(document, 'click', s3.w_linkTracking); // testing handler on document instead of applying directly to every link. Simulate jQuery .on()


	/****************************** MODULES *****************************/

	// copy and paste implementation modules (Media, Integrate) here
	// AppMeasurement_Module_Media.js - Media Module, included in AppMeasurement zip
	// AppMeasurement_Module_Integrate.js - Integrate Module, included in AppMeasurement zip

	/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/ 


	/*
	 Start ActivityMap Module

	 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
	 allows you to view data overlays on your links and content to understand how
	 users engage with your web site. If you do not intend to use ActivityMap, you
	 can remove the following block of code from your AppMeasurement.js file.
	 Additional documentation on how to configure ActivityMap is available at:
	 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
	*/
	s3.loadModule("AudienceManagement");

	function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
	if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
	b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
	"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
	255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
	"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
	/* End ActivityMap Module */

	function AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableScriptAttachment=!0,c.disableCORS=!0,c.secureDataCollection=!1,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?
	a.instance.api.getEventCallConfigParams():{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}
	"function"!==typeof window.DIL&&(window.DIL=function(a,c){var e=[],d,g;a!==Object(a)&&(a={});var h,l,t,v,p,n,w,E,r,A,L,B,C,F;h=a.partner;l=a.containerNSID;t=!!a.disableDestinationPublishingIframe;v=a.iframeAkamaiHTTPS;p=a.mappings;n=a.uuidCookie;w=!0===a.enableErrorReporting;E=a.visitorService;r=a.declaredId;A=!0===a.removeFinishedScriptsAndCallbacks;L=!0===a.delayAllUntilWindowLoad;B=!0===a.disableIDSyncs;C="undefined"===typeof a.secureDataCollection||!0===a.secureDataCollection;F=!0===a.useCORSOnly;
	var M,N,I,G,O,P,Q,R;M=!0===a.disableScriptAttachment;N=!0===a.disableDefaultRequest;I=a.afterResultForDefaultRequest;G=a.dpIframeSrc;O=!0===a.testCORS;P=!0===a.useJSONPOnly;Q=a.visitorConstructor;R=!0===a.disableCORS;w&&DIL.errorModule.activate();var T=!0===window._dil_unit_tests;(d=c)&&e.push(d+"");if(!h||"string"!==typeof h)return d="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:d,filename:"dil.js"}),Error(d);d="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";
	if(l||"number"===typeof l)l=parseInt(l,10),!isNaN(l)&&0<=l&&(d="");d&&(l=0,e.push(d),d="");g=DIL.getDil(h,l);if(g instanceof DIL&&g.api.getPartner()===h&&g.api.getContainerNSID()===l)return g;if(this instanceof DIL)DIL.registerDil(this,h,l);else return new DIL(a,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+h+" and containerNSID = "+l);var y={IS_HTTPS:C||"https:"===document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC",
	MILLIS_PER_DAY:864E5,DIL_COOKIE_NAME:"AAMC_"+encodeURIComponent(h)+"_"+l,FIRST_PARTY_SYNCS:"AMSYNCS",FIRST_PARTY_SYNCS_ON_PAGE:"AMSYNCSOP"},J={stuffed:{}},s={},q={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],
	num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,platformParams:{d_nsid:l+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,mid:null,noVisitorAPI:!1,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(b){try{if(!this.admsProcessingStarted){this.admsProcessingStarted=
	!0;var k=this,m,f,a,d;if("function"===typeof b&&"function"===typeof b.getInstance){if(E===Object(E)&&(m=E.namespace)&&"string"===typeof m)f=b.getInstance(m,{idSyncContainerID:l});else{this.releaseType="no namespace";this.releaseRequests();return}if(f===Object(f)&&f instanceof b&&"function"===typeof f.isAllowed&&"function"===typeof f.getMarketingCloudVisitorID&&"function"===typeof f.getCustomerIDs&&"function"===typeof f.isOptedOut){this.VisitorAPI=b;if(!f.isAllowed()){this.releaseType="VisitorAPI not allowed";
	this.releaseRequests();return}this.instance=f;a=function(b){"VisitorAPI"!==k.releaseType&&(k.mid=b,k.releaseType="VisitorAPI",k.releaseRequests())};d=f.getMarketingCloudVisitorID(a);if("string"===typeof d&&d.length){a(d);return}setTimeout(function(){"VisitorAPI"!==k.releaseType&&(k.releaseType="timeout",k.releaseRequests())},this.getLoadTimeout());return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(e){this.releaseRequests()}},releaseRequests:function(){this.calledBack=
	!0;q.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var b=x.isPopulatedString,k=this.getMarketingCloudVisitorID();b(this.mid)&&this.mid===k||(this.mid=k);return b(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(b){if(b===Object(b)){var k="",m=[],f=[],a,d;for(a in b)b.hasOwnProperty(a)&&
	(f[0]=a,d=b[a],d===Object(d)&&(f[1]=d.id||"",f[2]=d.authState||0,m.push(f),f=[]));if(f=m.length)for(b=0;b<f;b++)k+="&d_cid_ic="+u.encodeAndBuildRequest(m[b],"%01");return k}return""},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)},isOptedOutCallback:function(b){this.isOptedOut=b;this.isOptedOutCallbackCalled=!0;q.registerRequest()},getLoadTimeout:function(){var b=
	this.instance;if(b){if("function"===typeof b.getLoadTimeout)return b.getLoadTimeout();if("undefined"!==typeof b.loadTimeout)return b.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(b,k){var m=x.isPopulatedString,f=encodeURIComponent;if(b===Object(b)&&m(k)){var a=b.dpid,d=b.dpuuid,e=null;if(m(a)&&m(d)){e=f(a)+"$"+f(d);if(!0===this.declaredIdCombos[e])return"setDeclaredId: combo exists for type '"+
	k+"'";this.declaredIdCombos[e]=!0;this.declaredId[k]={dpid:a,dpuuid:d};return"setDeclaredId: succeeded for type '"+k+"'"}}return"setDeclaredId: failed for type '"+k+"'"},getDeclaredIdQueryString:function(){var b=this.declaredId.request,k=this.declaredId.init,m=encodeURIComponent,f="";null!==b?f="&d_dpid="+m(b.dpid)+"&d_dpuuid="+m(b.dpuuid):null!==k&&(f="&d_dpid="+m(k.dpid)+"&d_dpuuid="+m(k.dpuuid));return f}},registerRequest:function(b){var k=this.firingQueue;b===Object(b)&&k.push(b);this.firing||
	!k.length||L&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(this.adms.isOptedOutCallbackCalled=!1,b=k.shift(),b.src=b.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),x.isPopulatedString(b.corsPostData)&&(b.corsPostData=b.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+"d_nsid=")),D.fireRequest(b),this.firstRequestHasFired||
	"script"!==b.tag&&"cors"!==b.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(Q||window.Visitor)},requestRemoval:function(b){if(!A)return"removeFinishedScriptsAndCallbacks is not boolean true";var k=this.toRemove,m,f;b===Object(b)&&(m=b.script,f=b.callbackName,(m===Object(m)&&"SCRIPT"===m.nodeName||"no script created"===m)&&"string"===typeof f&&f.length&&k.push(b));if(this.readyToRemove&&k.length){f=k.shift();m=f.script;f=f.callbackName;"no script created"!==m?
	(b=m.src,m.parentNode.removeChild(m)):b=m;window[f]=null;try{delete window[f]}catch(a){}this.removed.push({scriptSrc:b,callbackName:f});DIL.variables.scriptsRemoved.push(b);DIL.variables.callbacksRemoved.push(f);return this.requestRemoval()}return"requestRemoval() processed"}};g=function(){var b="http://fast.",k="?d_nsid="+l+"#"+encodeURIComponent(document.location.href);if("string"===typeof G&&G.length)return G+k;y.IS_HTTPS&&(b=!0===v?"https://fast.":"https://");return b+h+".demdex.net/dest5.html"+
	k};var z={THROTTLE_START:3E4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:"destination_publishing_iframe_"+h+"_"+l,url:g(),onPagePixels:[],iframeHost:null,getIframeHost:function(b){if("string"===typeof b){var k=b.split("/");if(3<=k.length)return k[0]+"//"+k[2];e.push("getIframeHost: url is malformed: "+b);return b}},iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:y.POST_MESSAGE_ENABLED?15:100,ibsDeleted:[],jsonWaiting:[],jsonProcessed:[],
	canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,newIframeCreated:null,iframeIdChanged:!1,originalIframeHasLoadedAlready:null,attachIframe:function(){function b(){f=document.createElement("iframe");f.sandbox="allow-scripts allow-same-origin";f.title="Adobe ID Syncing iFrame";f.id=m.id;f.style.cssText="display: none; width: 0; height: 0;";f.src=m.url;m.newIframeCreated=!0;k();document.body.appendChild(f)}function k(){u.addListener(f,"load",function(){f.className="aamIframeLoaded";
	m.iframeHasLoaded=!0;m.requestToProcess()})}var m=this,f=document.getElementById(this.id);f?"IFRAME"!==f.nodeName?(this.id+="_2",this.iframeIdChanged=!0,b()):(this.newIframeCreated=!1,"aamIframeLoaded"!==f.className?(this.originalIframeHasLoadedAlready=!1,k()):(this.iframeHasLoaded=this.originalIframeHasLoadedAlready=!0,this.iframe=f,this.requestToProcess())):b();this.iframe=f},requestToProcess:function(b,k){var m=this;b&&!x.isEmptyObject(b)&&this.jsonWaiting.push([b,k]);if((this.receivedThirdPartyCookiesNotification||
	!y.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var f=this.jsonWaiting.shift();this.process(f[0],f[1]);this.requestToProcess()}this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){m.messageSendingInterval=y.POST_MESSAGE_ENABLED?15:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},processSyncOnPage:function(b){var k,m,f;if((k=b.ibs)&&k instanceof Array&&(m=k.length))for(b=
	0;b<m;b++)f=k[b],f.syncOnPage&&this.checkFirstPartyCookie(f,"","syncOnPage")},process:function(b,k){var m=encodeURIComponent,f,a,d,e,c,h;k===Object(k)&&(h=u.encodeAndBuildRequest(["",k.dpid||"",k.dpuuid||""],","));if((f=b.dests)&&f instanceof Array&&(a=f.length))for(d=0;d<a;d++)e=f[d],c=[m("dests"),m(e.id||""),m(e.y||""),m(e.c||"")],this.addMessage(c.join("|"));if((f=b.ibs)&&f instanceof Array&&(a=f.length))for(d=0;d<a;d++)e=f[d],c=[m("ibs"),m(e.id||""),m(e.tag||""),u.encodeAndBuildRequest(e.url||
	[],","),m(e.ttl||""),"",h,e.fireURLSync?"true":"false"],e.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(c.join("|")):e.fireURLSync&&this.checkFirstPartyCookie(e,c.join("|")));if((f=b.dpcalls)&&f instanceof Array&&(a=f.length))for(d=0;d<a;d++)e=f[d],c=e.callback||{},c=[c.obj||"",c.fn||"",c.key||"",c.tag||"",c.url||""],c=[m("dpm"),m(e.id||""),m(e.tag||""),u.encodeAndBuildRequest(e.url||[],","),m(e.ttl||""),u.encodeAndBuildRequest(c,","),h],this.addMessage(c.join("|"));this.jsonProcessed.push(b)},
	checkFirstPartyCookie:function(b,k,a){var f=(a="syncOnPage"===a?!0:!1)?y.FIRST_PARTY_SYNCS_ON_PAGE:y.FIRST_PARTY_SYNCS,d=this.getOnPageSyncData(f),e=!1,c=!1,h=Math.ceil((new Date).getTime()/y.MILLIS_PER_DAY);d?(d=d.split("*"),c=this.pruneSyncData(d,b.id,h),e=c.dataPresent,c=c.dataValid,e&&c||this.fireSync(a,b,k,d,f,h)):(d=[],this.fireSync(a,b,k,d,f,h))},getOnPageSyncData:function(b){var k=q.adms.instance;return k&&"function"===typeof k.idSyncGetOnPageSyncInfo?k.idSyncGetOnPageSyncInfo():u.getDilCookieField(b)},
	pruneSyncData:function(b,k,a){var f=!1,d=!1,e,c,h;if(b instanceof Array)for(c=0;c<b.length;c++)e=b[c],h=parseInt(e.split("-")[1],10),e.match("^"+k+"-")?(f=!0,a<h?d=!0:(b.splice(c,1),c--)):a>=h&&(b.splice(c,1),c--);return{dataPresent:f,dataValid:d}},manageSyncsSize:function(b){if(b.join("*").length>this.MAX_SYNCS_LENGTH)for(b.sort(function(b,a){return parseInt(b.split("-")[1],10)-parseInt(a.split("-")[1],10)});b.join("*").length>this.MAX_SYNCS_LENGTH;)b.shift()},fireSync:function(b,k,a,f,d,e){function c(b,
	k,a,f){return function(){h.onPagePixels[b]=null;var m=h.getOnPageSyncData(a),d=[];if(m){var m=m.split("*"),e,c,g;e=0;for(c=m.length;e<c;e++)g=m[e],g.match("^"+k.id+"-")||d.push(g)}h.setSyncTrackingData(d,k,a,f)}}var h=this;if(b){if("img"===k.tag){b=k.url;a=y.IS_HTTPS?"https:":"http:";var g,l,n;f=0;for(g=b.length;f<g;f++){l=b[f];n=/^\/\//.test(l);var r=new Image;u.addListener(r,"load",c(this.onPagePixels.length,k,d,e));r.src=(n?a:"")+l;this.onPagePixels.push(r)}}}else this.addMessage(a),this.setSyncTrackingData(f,
	k,d,e)},addMessage:function(b){var k=encodeURIComponent,k=w?k("---destpub-debug---"):k("---destpub---");this.messages.push(k+b)},setSyncTrackingData:function(b,k,a,f){b.push(k.id+"-"+(f+Math.ceil(k.ttl/60/24)));this.manageSyncsSize(b);u.setDilCookieField(a,b.join("*"))},sendMessages:function(){var b=this,k;this.messages.length?(k=this.messages.shift(),DIL.xd.postMessage(k,this.url,this.iframe.contentWindow),this.messagesPosted.push(k),setTimeout(function(){b.sendMessages()},this.messageSendingInterval)):
	this.sendingMessages=!1},receiveMessage:function(b){var k=/^---destpub-to-parent---/;"string"===typeof b&&k.test(b)&&(k=b.replace(k,"").split("|"),"canSetThirdPartyCookies"===k[0]&&(this.canSetThirdPartyCookies="true"===k[1]?!0:!1,this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(b))}},K={traits:function(b){x.isValidPdata(b)&&(s.sids instanceof Array||(s.sids=[]),u.extendArray(s.sids,b));return this},pixels:function(b){x.isValidPdata(b)&&(s.pdata instanceof
	Array||(s.pdata=[]),u.extendArray(s.pdata,b));return this},logs:function(b){x.isValidLogdata(b)&&(s.logdata!==Object(s.logdata)&&(s.logdata={}),u.extendObject(s.logdata,b));return this},customQueryParams:function(b){x.isEmptyObject(b)||u.extendObject(s,b,q.reservedKeys);return this},signals:function(b,k){var a,f=b;if(!x.isEmptyObject(f)){if(k&&"string"===typeof k)for(a in f={},b)b.hasOwnProperty(a)&&(f[k+a]=b[a]);u.extendObject(s,f,q.reservedKeys)}return this},declaredId:function(b){q.declaredId.setDeclaredId(b,
	"request");return this},result:function(b){"function"===typeof b&&(s.callback=b);return this},afterResult:function(b){"function"===typeof b&&(s.postCallbackFn=b);return this},useImageRequest:function(){s.useImageRequest=!0;return this},clearData:function(){s={};return this},submit:function(){D.submitRequest(s);s={};return this},getPartner:function(){return h},getContainerNSID:function(){return l},getEventLog:function(){return e},getState:function(){var b={},k={};u.extendObject(b,q,{callbackPrefix:!0,
	useJSONP:!0,registerRequest:!0});u.extendObject(k,z,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{initConfig:a,pendingRequest:s,otherRequestInfo:b,destinationPublishingInfo:k}},idSync:function(b){if(B)return"Error: id syncs have been disabled";if(b!==Object(b)||"string"!==typeof b.dpid||!b.dpid.length)return"Error: config or config.dpid is empty";if("string"!==typeof b.url||!b.url.length)return"Error: config.url is empty";var k=b.url,a=b.minutesToLive,f=encodeURIComponent,
	d,k=k.replace(/^https:/,"").replace(/^http:/,"");if("undefined"===typeof a)a=20160;else if(a=parseInt(a,10),isNaN(a)||0>=a)return"Error: config.minutesToLive needs to be a positive number";d=u.encodeAndBuildRequest(["",b.dpid,b.dpuuid||""],",");b=["ibs",f(b.dpid),"img",f(k),a,"",d];z.addMessage(b.join("|"));q.firstRequestHasFired&&z.requestToProcess();return"Successfully queued"},aamIdSync:function(b){if(B)return"Error: id syncs have been disabled";if(b!==Object(b)||"string"!==typeof b.dpuuid||!b.dpuuid.length)return"Error: config or config.dpuuid is empty";
	b.url="//dpm.demdex.net/ibs:dpid="+b.dpid+"&dpuuid="+b.dpuuid;return this.idSync(b)},passData:function(b){if(x.isEmptyObject(b))return"Error: json is empty or not an object";z.ibsDeleted.push(b.ibs);delete b.ibs;D.defaultCallback(b);return b},getPlatformParams:function(){return q.platformParams},getEventCallConfigParams:function(){var b=q,k=b.modStatsParams,a=b.platformParams,f;if(!k){k={};for(f in a)a.hasOwnProperty(f)&&!b.nonModStatsParams[f]&&(k[f.replace(/^d_/,"")]=a[f]);b.modStatsParams=k}return k}},
	D={corsMetadata:function(){var b="none",a=!0;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?b="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?b="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(a=!1),0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&(a=!1));return{corsType:b,corsCookiesEnabled:a}}(),getCORSInstance:function(){return"none"===
	this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(b){q.registerRequest(D.createQueuedRequest(b));return!0},createQueuedRequest:function(b){var a=q,d,f=b.callback,e="img",c;if(!x.isEmptyObject(p)){var h,g,n;for(h in p)p.hasOwnProperty(h)&&(g=p[h],null!=g&&""!==g&&h in b&&!(g in b||g in q.reservedKeys)&&(n=b[h],null!=n&&""!==n&&(b[g]=n)))}x.isValidPdata(b.sids)||(b.sids=[]);x.isValidPdata(b.pdata)||(b.pdata=[]);x.isValidLogdata(b.logdata)||(b.logdata={});
	b.logdataArray=u.convertObjectToKeyValuePairs(b.logdata,"=",!0);b.logdataArray.push("_ts="+(new Date).getTime());"function"!==typeof f&&(f=this.defaultCallback);a.useJSONP=!0!==b.useImageRequest;a.useJSONP&&(e="script",d=a.callbackPrefix+"_"+l+"_"+(new Date).getTime());a=this.makeRequestSrcData(b,d);P&&!F||!(c=this.getCORSInstance())||(e="cors");return{tag:e,src:a.src,corsSrc:a.corsSrc,internalCallbackName:d,callbackFn:f,postCallbackFn:b.postCallbackFn,useImageRequest:!!b.useImageRequest,requestData:b,
	corsInstance:c,corsPostData:a.corsPostData}},defaultCallback:function(b,a){z.processSyncOnPage(b);var d,f,e,c,h,g,l,r,w;if((d=b.stuff)&&d instanceof Array&&(f=d.length))for(e=0;e<f;e++)if((c=d[e])&&c===Object(c)){h=c.cn;g=c.cv;l=c.ttl;if("undefined"===typeof l||""===l)l=Math.floor(u.getMaxCookieExpiresInMinutes()/60/24);r=c.dmn||"."+document.domain.replace(/^www\./,"");w=c.type;h&&(g||"number"===typeof g)&&("var"!==w&&(l=parseInt(l,10))&&!isNaN(l)&&u.setCookie(h,g,1440*l,"/",r,!1),J.stuffed[h]=g)}d=
	b.uuid;x.isPopulatedString(d)&&!x.isEmptyObject(n)&&(f=n.path,"string"===typeof f&&f.length||(f="/"),e=parseInt(n.days,10),isNaN(e)&&(e=100),u.setCookie(n.name||"aam_did",d,1440*e,f,n.domain||"."+document.domain.replace(/^www\./,""),!0===n.secure));t||q.abortRequests||z.requestToProcess(b,a)},makeRequestSrcData:function(b,a){b.sids=x.removeEmptyArrayValues(b.sids||[]);b.pdata=x.removeEmptyArrayValues(b.pdata||[]);var d=q,f=d.platformParams,e=u.encodeAndBuildRequest(b.sids,","),c=u.encodeAndBuildRequest(b.pdata,
	","),g=(b.logdataArray||[]).join("&");delete b.logdataArray;var n=y.IS_HTTPS?"https://":"http://",r=d.declaredId.getDeclaredIdQueryString(),w=d.adms.instance?d.adms.getCustomerIDsQueryString(d.adms.getCustomerIDs()):"",p;p=[];var s,t,v,A;for(s in b)if(!(s in d.reservedKeys)&&b.hasOwnProperty(s))if(t=b[s],s=encodeURIComponent(s),t instanceof Array)for(v=0,A=t.length;v<A;v++)p.push(s+"="+encodeURIComponent(t[v]));else p.push(s+"="+encodeURIComponent(t));p=p.length?"&"+p.join("&"):"";e="d_nsid="+f.d_nsid+
	r+w+(e.length?"&d_sid="+e:"")+(c.length?"&d_px="+c:"")+(g.length?"&d_ld="+encodeURIComponent(g):"");f="&d_rtbd="+f.d_rtbd+"&d_jsonv="+f.d_jsonv+"&d_dst="+f.d_dst;n=n+h+".demdex.net/event";c=d=n+"?"+e+(d.useJSONP?f+"&d_cb="+(a||""):"")+p;2048<d.length&&(d=d.substring(0,2048).substring(0,d.lastIndexOf("&")));return{corsSrc:n+"?"+(O?"testcors=1&d_nsid="+l+"&":"")+"_ts="+(new Date).getTime(),src:d,originalSrc:c,corsPostData:e+f+p,isDeclaredIdCall:""!==r}},fireRequest:function(b){if("img"===b.tag)this.fireImage(b);
	else{var a=q.declaredId,a=a.declaredId.request||a.declaredId.init||{},a={dpid:a.dpid||"",dpuuid:a.dpuuid||""};"script"===b.tag?this.fireScript(b,a):"cors"===b.tag&&this.fireCORS(b,a)}},fireImage:function(b){var a=q,c,f;a.abortRequests||(a.firing=!0,c=new Image(0,0),a.sent.push(b),c.onload=function(){a.firing=!1;a.fired.push(b);a.num_of_img_responses++;a.registerRequest()},f=function(f){d="imgAbortOrErrorHandler received the event of type "+f.type;e.push(d);a.abortRequests=!0;a.firing=!1;a.errored.push(b);
	a.num_of_img_errors++;a.registerRequest()},c.addEventListener?(c.addEventListener("error",f,!1),c.addEventListener("abort",f,!1)):c.attachEvent&&(c.attachEvent("onerror",f),c.attachEvent("onabort",f)),c.src=b.src)},fireScript:function(b,a){var c=this,f=q,g,l,n=b.src,r=b.postCallbackFn,w="function"===typeof r,p=b.internalCallbackName;f.abortRequests||(f.firing=!0,window[p]=function(c){try{c!==Object(c)&&(c={});B&&(z.ibsDeleted.push(c.ibs),delete c.ibs);var m=b.callbackFn;f.firing=!1;f.fired.push(b);
	f.num_of_jsonp_responses++;m(c,a);w&&r(c,a)}catch(g){g.message="DIL jsonp callback caught error with message "+g.message;d=g.message;e.push(d);g.filename=g.filename||"dil.js";g.partner=h;DIL.errorModule.handleError(g);try{m({error:g.name+"|"+g.message},a),w&&r({error:g.name+"|"+g.message},a)}catch(n){}}finally{f.requestRemoval({script:l,callbackName:p}),f.registerRequest()}},M||F?(f.firing=!1,f.requestRemoval({script:"no script created",callbackName:p})):(l=document.createElement("script"),l.addEventListener&&
	l.addEventListener("error",function(a){f.requestRemoval({script:l,callbackName:p});d="jsonp script tag error listener received the event of type "+a.type+" with src "+n;c.handleScriptError(d,b)},!1),l.type="text/javascript",l.src=n,g=DIL.variables.scriptNodeList[0],g.parentNode.insertBefore(l,g)),f.sent.push(b),f.declaredId.declaredId.request=null)},fireCORS:function(b,a){var c=this,f=q,g=this.corsMetadata.corsType,l=b.corsSrc,n=b.corsInstance,r=b.corsPostData,p=b.postCallbackFn,w="function"===typeof p;
	if(!f.abortRequests&&!R){f.firing=!0;try{n.open("post",l,!0),"XMLHttpRequest"===g&&(n.withCredentials=!0,n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var g;try{if(g=JSON.parse(this.responseText),g!==Object(g)){c.handleCORSError(b,a,"Response is not JSON");break a}}catch(l){c.handleCORSError(b,a,"Error parsing response as JSON");break a}B&&(z.ibsDeleted.push(g.ibs),delete g.ibs);try{var n=b.callbackFn;
	f.firing=!1;f.fired.push(b);f.num_of_cors_responses++;n(g,a);w&&p(g,a)}catch(r){r.message="DIL handleCORSResponse caught error with message "+r.message;d=r.message;e.push(d);r.filename=r.filename||"dil.js";r.partner=h;DIL.errorModule.handleError(r);try{n({error:r.name+"|"+r.message},a),w&&p({error:r.name+"|"+r.message},a)}catch(V){}}finally{f.registerRequest()}}}),n.onerror=function(){c.handleCORSError(b,a,"onerror")},n.ontimeout=function(){c.handleCORSError(b,a,"ontimeout")},n.send(r)}catch(s){this.handleCORSError(b,
	a,"try-catch")}f.sent.push(b);f.declaredId.declaredId.request=null}},handleCORSError:function(b,a,c){q.num_of_cors_errors++;q.corsErrorSources.push(c);"ontimeout"===c||F||(b.tag="script",this.fireScript(b,a))},handleScriptError:function(b,a){q.num_of_jsonp_errors++;this.handleRequestError(b,a)},handleRequestError:function(b,a){var c=q;e.push(b);c.abortRequests=!0;c.firing=!1;c.errored.push(a);c.registerRequest()}},x={isValidPdata:function(b){return b instanceof Array&&this.removeEmptyArrayValues(b).length?
	!0:!1},isValidLogdata:function(b){return!this.isEmptyObject(b)},isEmptyObject:function(b){if(b!==Object(b))return!0;for(var a in b)if(b.hasOwnProperty(a))return!1;return!0},removeEmptyArrayValues:function(b){for(var a=0,c=b.length,f,d=[],a=0;a<c;a++)f=b[a],"undefined"!==typeof f&&null!==f&&""!==f&&d.push(f);return d},isPopulatedString:function(b){return"string"===typeof b&&b.length}},u={addListener:function(){if(document.addEventListener)return function(b,a,c){b.addEventListener(a,function(b){"function"===
	typeof c&&c(b)},!1)};if(document.attachEvent)return function(b,a,c){b.attachEvent("on"+a,function(b){"function"===typeof c&&c(b)})}}(),convertObjectToKeyValuePairs:function(b,a,c){var f=[],d,e;a||(a="=");for(d in b)b.hasOwnProperty(d)&&(e=b[d],"undefined"!==typeof e&&null!==e&&""!==e&&f.push(d+a+(c?encodeURIComponent(e):e)));return f},encodeAndBuildRequest:function(b,a){return this.map(b,function(b){return encodeURIComponent(b)}).join(a)},map:function(b,a){if(Array.prototype.map)return b.map(a);if(void 0===
	b||null===b)throw new TypeError;var c=Object(b),d=c.length>>>0;if("function"!==typeof a)throw new TypeError;for(var e=Array(d),g=0;g<d;g++)g in c&&(e[g]=a.call(a,c[g],g,c));return e},filter:function(b,a){if(!Array.prototype.filter){if(void 0===b||null===b)throw new TypeError;var c=Object(b),d=c.length>>>0;if("function"!==typeof a)throw new TypeError;for(var e=[],g=0;g<d;g++)if(g in c){var h=c[g];a.call(a,h,g,c)&&e.push(h)}return e}return b.filter(a)},getCookie:function(b){b+="=";var a=document.cookie.split(";"),
	c,d,e;c=0;for(d=a.length;c<d;c++){for(e=a[c];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return decodeURIComponent(e.substring(b.length,e.length))}return null},setCookie:function(b,a,c,d,e,g){var h=new Date;c&&(c*=6E4);document.cookie=b+"="+encodeURIComponent(a)+(c?";expires="+(new Date(h.getTime()+c)).toUTCString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(g?";secure":"")},extendArray:function(b,a){return b instanceof Array&&a instanceof Array?(Array.prototype.push.apply(b,
	a),!0):!1},extendObject:function(b,a,c){var d;if(b===Object(b)&&a===Object(a)){for(d in a)!a.hasOwnProperty(d)||!x.isEmptyObject(c)&&d in c||(b[d]=a[d]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return((new Date(y.COOKIE_MAX_EXPIRATION_DATE)).getTime()-(new Date).getTime())/1E3/60},getCookieField:function(b,a){var c=this.getCookie(b),d=decodeURIComponent;if("string"===typeof c){var c=c.split("|"),e,g;e=0;for(g=c.length-1;e<g;e++)if(d(c[e])===a)return d(c[e+1])}return null},getDilCookieField:function(b){return this.getCookieField(y.DIL_COOKIE_NAME,
	b)},setCookieField:function(b,a,c){var d=this.getCookie(b),e=!1,g=encodeURIComponent;a=g(a);c=g(c);if("string"===typeof d){var d=d.split("|"),h,g=0;for(h=d.length-1;g<h;g++)if(d[g]===a){d[g+1]=c;e=!0;break}e||(g=d.length,d[g]=a,d[g+1]=c)}else d=[a,c];this.setCookie(b,d.join("|"),this.getMaxCookieExpiresInMinutes(),"/",this.getDomain(),!1)},setDilCookieField:function(b,a){return this.setCookieField(y.DIL_COOKIE_NAME,b,a)},getDomain:function(b){!b&&window.location&&(b=window.location.hostname);if(b)if(/^[0-9.]+$/.test(b))b=
	"";else{var a=b.split("."),c=a.length-1,d=c-1;1<c&&2>=a[c].length&&(2===a[c-1].length||0>",DOMAIN_2_CHAR_EXCEPTIONS,".indexOf(","+a[c]+","))&&d--;if(0<d)for(b="";c>=d;)b=a[c]+(b?".":"")+b,c--}return b}};"error"===h&&0===l&&u.addListener(window,"load",function(){DIL.windowLoaded=!0});var S=!1,H=function(){S||(S=!0,q.registerRequest(),U(),t||q.abortRequests||z.attachIframe(),q.readyToRemove=!0,q.requestRemoval())},U=function(){t||setTimeout(function(){N||q.firstRequestHasFired||("function"===typeof I?
	K.afterResult(I).submit():K.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)};C=document;"error"!==h&&(DIL.windowLoaded?H():"complete"!==C.readyState&&"loaded"!==C.readyState?u.addListener(window,"load",function(){DIL.windowLoaded=!0;H()}):(DIL.windowLoaded=!0,H()));if("error"!==h)try{DIL.xd.receiveMessage(function(b){z.receiveMessage(b.data)},z.getIframeHost(z.url))}catch(W){}q.declaredId.setDeclaredId(r,"init");q.processVisitorAPI();this.api=K;this.getStuffedVariable=function(b){var a=J.stuffed[b];
	a||"number"===typeof a||(a=u.getCookie(b))||"number"===typeof a||(a="");return a};this.validators=x;this.helpers=u;this.constants=y;this.log=e;T&&(this.pendingRequest=s,this.requestController=q,this.setDestinationPublishingUrl=g,this.destinationPublishing=z,this.requestProcs=D,this.variables=J,this.callWindowLoadFunctions=H)},function(){var a=document,c;null==a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",c=function(){a.removeEventListener("DOMContentLoaded",
	c,!1);a.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(a){var c;if(a===Object(a))for(c in a)a.hasOwnProperty(c)&&(this[c]=a[c])},DIL.extendStaticPropertiesAndMethods({version:"6.6",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(a){this.windowLoaded="function"===typeof a?!!a():"boolean"===typeof a?a:!0},create:function(a){try{return new DIL(a)}catch(c){return(new Image(0,
	0)).src="http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+(new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},registerDil:function(a,c,e){c=c+"$"+e;c in this.dils||(this.dils[c]=a)},getDil:function(a,c){var e;"string"!==typeof a&&(a="");c||(c=0);e=a+"$"+c;return e in this.dils?this.dils[e]:
	Error("The DIL instance with partner = "+a+" and containerNSID = "+c+" was not found")},dexGetQSVars:function(a,c,e){c=this.getDil(c,e);return c instanceof this?c.getStuffedVariable(a):""},xd:{postMessage:function(a,c,e){var d=1;c&&(window.postMessage?e.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(e.location=c.replace(/#.*$/,"")+"#"+ +new Date+d++ +"&"+a))},receiveMessage:function(a,c){var e;try{if(window.postMessage)if(a&&(e=function(d){if("string"===typeof c&&d.origin!==c||"[object Function]"===
	Object.prototype.toString.call(c)&&!1===c(d.origin))return!1;a(d)}),window.addEventListener)window[a?"addEventListener":"removeEventListener"]("message",e,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",e)}catch(d){}}}}),DIL.errorModule=function(){var a=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),c={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,
	typeerror:15019,urierror:15020},e=!1;return{activate:function(){e=!0},handleError:function(d){if(!e)return"DIL error module has not been activated";d!==Object(d)&&(d={});var g=d.name?(d.name+"").toLowerCase():"",h=[];d={name:g,filename:d.filename?d.filename+"":"",partner:d.partner?d.partner+"":"no_partner",site:d.site?d.site+"":document.location.href,message:d.message?d.message+"":""};h.push(g in c?c[g]:c.noerrortypedefined);a.api.pixels(h).logs(d).useImageRequest().submit();return"DIL error report sent"},
	pixelMap:c}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(a,c,e){var d="";c=c||"Error caught in DIL module/submodule: ";a===Object(a)?d=c+(a.message||"err has no message"):(d=c+"err is not a valid object",a={});a.message=d;e instanceof DIL&&(a.partner=e.api.getPartner());DIL.errorModule.handleError(a);return this.errorMessage=d}}});
	DIL.tools.getSearchReferrer=function(a,c){var e=DIL.getDil("error"),d=DIL.tools.decomposeURI(a||document.referrer),g="",h="",l={queryParam:"q"};return(g=e.helpers.filter([c===Object(c)?c:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(a){return!(!a.hasOwnProperty("hostPattern")||!d.hostname.match(a.hostPattern))}).shift())?{valid:!0,name:d.hostname,keywords:(e.helpers.extendObject(l,g),h=l.queryPattern?
	(g=(""+d.search).match(l.queryPattern))?g[1]:"":d.uriParams[l.queryParam],decodeURIComponent(h||"").replace(/\+|%20/g," "))}:{valid:!1,name:"",keywords:""}};
	DIL.tools.decomposeURI=function(a){var c=DIL.getDil("error"),e=document.createElement("a");e.href=a||document.referrer;return{hash:e.hash,host:e.host.split(":").shift(),hostname:e.hostname,href:e.href,pathname:e.pathname.replace(/^\//,""),protocol:e.protocol,search:e.search,uriParams:function(a,e){c.helpers.map(e.split("&"),function(c){c=c.split("=");a[c.shift()]=c.shift()});return a}({},e.search.replace(/^(\/|\?)?|\/$/g,""))}};
	DIL.tools.getMetaTags=function(){var a={},c=document.getElementsByTagName("meta"),e,d,g,h,l;e=0;for(g=arguments.length;e<g;e++)if(h=arguments[e],null!==h)for(d=0;d<c.length;d++)if(l=c[d],l.name===h){a[h]=l.content;break}return a};
	DIL.modules.siteCatalyst={dil:null,handle:DIL.modules.helpers.handleModuleError,init:function(a,c,e,d){try{var g=this,h={name:"DIL Site Catalyst Module Error"},l=function(a){h.message=a;DIL.errorModule.handleError(h);return a};this.options=d===Object(d)?d:{};this.dil=null;if(c instanceof DIL)this.dil=c;else return l("dilInstance is not a valid instance of DIL");h.partner=c.api.getPartner();if(a!==Object(a))return l("siteCatalystReportingSuite is not an object");window.AppMeasurement_Module_DIL=a.m_DIL=
	function(a){var c="function"===typeof a.m_i?a.m_i("DIL"):this;if(c!==Object(c))return l("m is not an object");c.trackVars=g.constructTrackVars(e);c.d=0;c.s=a;c._t=function(){var a,c,d=","+this.trackVars+",",e=this.s,h,p=[];h=[];var t={},v=!1;if(e!==Object(e))return l("Error in m._t function: s is not an object");if(this.d){if("function"===typeof e.foreachVar)e.foreachVar(function(a,c){"undefined"!==typeof c&&(t[a]=c,v=!0)},this.trackVars);else{if(!(e.va_t instanceof Array))return l("Error in m._t function: s.va_t is not an array");
	if(e.lightProfileID)(a=e.lightTrackVars)&&(a=","+a+","+e.vl_mr+",");else if(e.pe||e.linkType)a=e.linkTrackVars,e.pe&&(c=e.pe.substring(0,1).toUpperCase()+e.pe.substring(1),e[c]&&(a=e[c].trackVars)),a&&(a=","+a+","+e.vl_l+","+e.vl_l2+",");if(a){c=0;for(p=a.split(",");c<p.length;c++)0<=d.indexOf(","+p[c]+",")&&h.push(p[c]);h.length&&(d=","+h.join(",")+",")}h=0;for(c=e.va_t.length;h<c;h++)a=e.va_t[h],0<=d.indexOf(","+a+",")&&"undefined"!==typeof e[a]&&null!==e[a]&&""!==e[a]&&(t[a]=e[a],v=!0)}g.includeContextData(e,
	t).store_populated&&(v=!0);v&&this.d.api.signals(t,"c_").submit()}}};a.loadModule("DIL");a.DIL.d=c;return h.message?h.message:"DIL.modules.siteCatalyst.init() completed with no errors"}catch(t){return this.handle(t,"DIL.modules.siteCatalyst.init() caught error with message ",this.dil)}},constructTrackVars:function(a){var c=[],e,d,g,h,l;if(a===Object(a)){e=a.names;if(e instanceof Array&&(g=e.length))for(d=0;d<g;d++)h=e[d],"string"===typeof h&&h.length&&c.push(h);a=a.iteratedNames;if(a instanceof Array&&
	(g=a.length))for(d=0;d<g;d++)if(e=a[d],e===Object(e)&&(h=e.name,l=parseInt(e.maxIndex,10),"string"===typeof h&&h.length&&!isNaN(l)&&0<=l))for(e=0;e<=l;e++)c.push(h+e);if(c.length)return c.join(",")}return this.constructTrackVars({names:"pageName channel campaign products events pe pev1 pev2 pev3".split(" "),iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:250}]})},includeContextData:function(a,c){var e={},d=!1;if(a.contextData===Object(a.contextData)){var g=a.contextData,h=this.options.replaceContextDataPeriodsWith,
	l=this.options.filterFromContextVariables,t={},v,p,n,w;"string"===typeof h&&h.length||(h="_");if(l instanceof Array)for(v=0,p=l.length;v<p;v++)n=l[v],this.dil.validators.isPopulatedString(n)&&(t[n]=!0);for(w in g)!g.hasOwnProperty(w)||t[w]||!(l=g[w])&&"number"!==typeof l||(w=("contextData."+w).replace(/\./g,h),c[w]=l,d=!0)}e.store_populated=d;return e}};
	DIL.modules.GA={dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,handle:DIL.modules.helpers.handleModuleError,init:function(a,c,e){try{this.tv=this.arr=this.dil=null;this.errorMessage="";this.signals={};this.hasSignals=!1;var d={name:"DIL GA Module Error"},g="";c instanceof DIL?(this.dil=c,d.partner=this.dil.api.getPartner()):(g="dilInstance is not a valid instance of DIL",
	d.message=g,DIL.errorModule.handleError(d));a instanceof Array&&a.length?this.arr=a:(g="gaArray is not an array or is empty",d.message=g,DIL.errorModule.handleError(d));this.tv=this.constructTrackVars(e);this.errorMessage=g}catch(h){this.handle(h,"DIL.modules.GA.init() caught error with message ",this.dil)}finally{return this}},constructTrackVars:function(a){var c=[],e,d,g,h;if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){g=this.defaultTrackVars;h={};e=0;for(d=g.length;e<d;e++)h[g[e]]=
	!0;this.defaultTrackVarsObj=h}else h=this.defaultTrackVarsObj;if(a===Object(a)){a=a.names;if(a instanceof Array&&(d=a.length))for(e=0;e<d;e++)g=a[e],"string"===typeof g&&g.length&&g in h&&c.push(g);if(c.length)return c}return this.defaultTrackVars},constructGAObj:function(a){var c={};a=a instanceof Array?a:this.arr;var e,d,g,h;e=0;for(d=a.length;e<d;e++)g=a[e],g instanceof Array&&g.length&&(g=[],h=a[e],g instanceof Array&&h instanceof Array&&Array.prototype.push.apply(g,h),h=g.shift(),"string"===
	typeof h&&h.length&&(c[h]instanceof Array||(c[h]=[]),c[h].push(g)));return c},addToSignals:function(a,c){if("string"!==typeof a||""===a||null==c||""===c)return!1;this.signals[a]instanceof Array||(this.signals[a]=[]);this.signals[a].push(c);return this.hasSignals=!0},constructSignals:function(){var a=this.constructGAObj(),c={_setAccount:function(a){this.addToSignals("c_accountId",a)},_setCustomVar:function(a,c,d){"string"===typeof c&&c.length&&this.addToSignals("c_"+c,d)},_addItem:function(a,c,d,e,
	g,h){this.addToSignals("c_itemOrderId",a);this.addToSignals("c_itemSku",c);this.addToSignals("c_itemName",d);this.addToSignals("c_itemCategory",e);this.addToSignals("c_itemPrice",g);this.addToSignals("c_itemQuantity",h)},_addTrans:function(a,c,d,e,g,h,l,t){this.addToSignals("c_transOrderId",a);this.addToSignals("c_transAffiliation",c);this.addToSignals("c_transTotal",d);this.addToSignals("c_transTax",e);this.addToSignals("c_transShipping",g);this.addToSignals("c_transCity",h);this.addToSignals("c_transState",
	l);this.addToSignals("c_transCountry",t)},_trackSocial:function(a,c,d,e){this.addToSignals("c_socialNetwork",a);this.addToSignals("c_socialAction",c);this.addToSignals("c_socialTarget",d);this.addToSignals("c_socialPagePath",e)}},e=this.tv,d,g,h,l,t,v;d=0;for(g=e.length;d<g;d++)if(h=e[d],a.hasOwnProperty(h)&&c.hasOwnProperty(h)&&(v=a[h],v instanceof Array))for(l=0,t=v.length;l<t;l++)c[h].apply(this,v[l])},submit:function(){try{if(""!==this.errorMessage)return this.errorMessage;this.constructSignals();
	return this.hasSignals?(this.dil.api.signals(this.signals).submit(),"Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"=",!0)+this.dil.log):"No signals present"}catch(a){return this.handle(a,"DIL.modules.GA.submit() caught error with message ",this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:"",handle:DIL.modules.helpers.handleModuleError,callback:null,v:function(){return!1},init:function(a,c,e){try{this.callback=this.dil=null,this.errorMessage=
	"",a instanceof DIL?(this.dil=a,this.v=this.dil.validators.isPopulatedString,this.cookieName=this.v(c)?c:"aam_ga",this.delimiter=this.v(e)?e:"|"):this.handle({message:"dilInstance is not a valid instance of DIL"},"DIL.modules.GA.Stuffer.init() error: ")}catch(d){this.handle(d,"DIL.modules.GA.Stuffer.init() caught error with message ",this.dil)}finally{return this}},process:function(a){var c,e,d,g,h,l;l=!1;var t=1;if(a===Object(a)&&(c=a.stuff)&&c instanceof Array&&(e=c.length))for(a=0;a<e;a++)if((d=
	c[a])&&d===Object(d)&&(g=d.cn,h=d.cv,g===this.cookieName&&this.v(h))){l=!0;break}if(l){c=h.split(this.delimiter);"undefined"===typeof window._gaq&&(window._gaq=[]);d=window._gaq;a=0;for(e=c.length;a<e&&!(l=c[a].split("="),h=l[0],l=l[1],this.v(h)&&this.v(l)&&d.push(["_setCustomVar",t++,h,l,1]),t>this.LIMIT);a++);this.errorMessage=1<t?"No errors - stuffing successful":"No valid values to stuff"}else this.errorMessage="Cookie name and value not found in json";if("function"===typeof this.callback)return this.callback()},
	submit:function(){try{var a=this;if(""!==this.errorMessage)return this.errorMessage;this.dil.api.afterResult(function(c){a.process(c)}).submit();return"DIL.modules.GA.Stuffer.submit() successful"}catch(c){return this.handle(c,"DIL.modules.GA.Stuffer.submit() caught error with message ",this.dil)}}}};
	DIL.modules.Peer39={aid:"",dil:null,optionals:null,errorMessage:"",calledBack:!1,script:null,scriptsSent:[],returnedData:[],handle:DIL.modules.helpers.handleModuleError,init:function(a,c,e){try{this.dil=null;this.errorMessage="";this.calledBack=!1;this.optionals=e===Object(e)?e:{};e={name:"DIL Peer39 Module Error"};var d=[],g="";this.isSecurePageButNotEnabled(document.location.protocol)&&(g="Module has not been enabled for a secure page",d.push(g),e.message=g,DIL.errorModule.handleError(e));c instanceof
	DIL?(this.dil=c,e.partner=this.dil.api.getPartner()):(g="dilInstance is not a valid instance of DIL",d.push(g),e.message=g,DIL.errorModule.handleError(e));"string"===typeof a&&a.length?this.aid=a:(g="aid is not a string or is empty",d.push(g),e.message=g,DIL.errorModule.handleError(e));this.errorMessage=d.join("\n")}catch(h){this.handle(h,"DIL.modules.Peer39.init() caught error with message ",this.dil)}finally{return this}},isSecurePageButNotEnabled:function(a){return"https:"===a&&!0!==this.optionals.enableHTTPS?
	!0:!1},constructSignals:function(){var a=this,c=this.constructScript(),e=DIL.variables.scriptNodeList[0];window["afterFinished_"+this.aid]=function(){try{var c=a.processData(p39_KVP_Short("c_p","|").split("|"));c.hasSignals&&a.dil.api.signals(c.signals).submit()}catch(e){}finally{a.calledBack=!0,"function"===typeof a.optionals.afterResult&&a.optionals.afterResult()}};e.parentNode.insertBefore(c,e);this.scriptsSent.push(c);return"Request sent to Peer39"},processData:function(a){var c,e,d,g,h={},l=
	!1;this.returnedData.push(a);if(a instanceof Array)for(c=0,e=a.length;c<e;c++)d=a[c].split("="),g=d[0],d=d[1],g&&isFinite(d)&&!isNaN(parseInt(d,10))&&(h[g]instanceof Array||(h[g]=[]),h[g].push(d),l=!0);return{hasSignals:l,signals:h}},constructScript:function(){var a=document.createElement("script"),c=this.optionals,e=c.scriptId,d=c.scriptSrc,c=c.scriptParams;a.id="string"===typeof e&&e.length?e:"peer39ScriptLoader";a.type="text/javascript";"string"===typeof d&&d.length?a.src=d:(a.src=document.location.protocol+
	"//stags.peer39.net/"+this.aid+"/trg_"+this.aid+".js","string"===typeof c&&c.length&&(a.src+="?"+c));return a},submit:function(){try{return""!==this.errorMessage?this.errorMessage:this.constructSignals()}catch(a){return this.handle(a,"DIL.modules.Peer39.submit() caught error with message ",this.dil)}}};

	/*
	 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

	AppMeasurement for JavaScript version: 1.7.0
	Copyright 1996-2016 Adobe, Inc. All Rights Reserved
	More info available at http://www.adobe.com/marketing-cloud.html
	*/
	function AppMeasurement(){var a=this;a.version="1.7.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.Jb;q||(q=null);var r=k,n,t;try{for(n=r.parent,t=r.location;n&&n.location&&t&&""+n.location!=""+t&&r.location&&""+n.location!=""+r.location&&n.location.host==t.host;)r=n,n=r.parent}catch(u){}a.yb=function(a){try{console.log(a)}catch(b){}};a.Ha=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
	0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.pb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
	!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.pb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
	e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.K=[];a.ha=function(c,b,d){if(a.Aa)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,m=["webkitvisibilitychange",
	"visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ia)for(a.ia=1,d=0;d<m.length;d++)a.d.addEventListener(m[d],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&(a.ia=0,a.delayReady())});f=1;e=0}else d||a.p("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.ia||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.p("_d")?b=1:a.va();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);
	setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Aa=1;a[d.m].apply(a,d.a);a.Aa=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ha("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,m="";e=f="";if(a.lightProfileID)d=a.O,(m=a.lightTrackVars)&&(m=","+m+","+a.ma.join(",")+",");else{d=a.g;if(a.pe||
	a.linkType)m=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(m=a[e].Hb,f=a[e].Gb));m&&(m=","+m+","+a.G.join(",")+",");f&&m&&(m+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!m||0<=m.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.r=function(c,b,d,f,e){var g="",m,p,k,w,n=0;"contextData"==c&&(c="c");if(b){for(m in b)if(!(Object.prototype[m]||e&&m.substring(0,e.length)!=e)&&b[m]&&(!d||0<=d.indexOf(","+(f?f+
	".":"")+m+","))){k=!1;if(n)for(p=0;p<n.length;p++)m.substring(0,n[p].length)==n[p]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),p=b[m],e&&(m=m.substring(e.length)),0<m.length))if(k=m.indexOf("."),0<k)p=m.substring(0,k),k=(e?e:"")+p+".",n||(n=[]),n.push(k),g+=a.r(p,b,d,f,k);else if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=m.substring(0,4),w=m.substring(4),m){case "transactionID":m="xact";break;case "channel":m="ch";break;case "campaign":m=
	"v0";break;default:a.Ha(w)&&("prop"==k?m="c"+w:"eVar"==k?m="v"+w:"list"==k?m="l"+w:"hier"==k&&(m="h"+w,p=p.substring(0,255)))}g+="&"+a.escape(m)+"="+a.escape(p)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.sb=function(){var c="",b,d,f,e,g,m,p,k,n="",r="",s=e="";if(a.lightProfileID)b=a.O,(n=a.lightTrackVars)&&(n=","+n+","+a.ma.join(",")+",");else{b=a.g;if(a.pe||a.linkType)n=a.linkTrackVars,r=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].Hb,r=a[e].Gb));
	n&&(n=","+n+","+a.G.join(",")+",");r&&(r=","+r+",",n&&(n+=",events,"));a.events2&&(s+=(""!=s?",":"")+a.events2)}if(a.visitor&&1.5<=parseFloat(a.visitor.version)&&a.visitor.getCustomerIDs){e=q;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState));e&&(c+=a.r("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.r("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];
	g=a[e];f=e.substring(0,4);m=e.substring(4);!g&&"events"==e&&s&&(g=s,s="");if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&
	(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e=
	"vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":s&&
	(g+=(""!=g?",":"")+s);if(r)for(m=g.split(","),g="",f=0;f<m.length;f++)p=m[f],k=p.indexOf("="),0<=k&&(p=p.substring(0,k)),k=p.indexOf(":"),0<=k&&(p=p.substring(0,k)),0<=r.indexOf(","+p+",")&&(g+=(g?",":"")+m[f]);break;case "events2":g="";break;case "contextData":c+=a.r("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;
	case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.r("mts",a[e],n,e));g="";break;default:a.Ha(m)&&("prop"==f?e="c"+m:"eVar"==f?e="v"+m:"list"==f?e="l"+m:"hier"==f&&(e="h"+m,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.D=function(a){var b=a.tagName;if("undefined"!=""+a.Mb||"undefined"!=""+a.Cb&&"HTML"!=(""+a.Cb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==
	b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Da=function(a){var b=a.href?a.href:"",d,f,e;d=b.indexOf(":");f=b.indexOf("?");e=b.indexOf("/");b&&(0>d||0<=f&&d>f||0<=e&&d>e)&&(f=a.protocol&&1<a.protocol.length?a.protocol:l.protocol?l.protocol:"",d=l.pathname.lastIndexOf("/"),b=(f?f+"//":"")+(a.host?a.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>d?0:d)+"/":"")+b);return b};a.L=function(c){var b=a.D(c),
	d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Da(c),e)?{id:e.substring(0,100),type:g}:0};a.Kb=function(c){for(var b=a.D(c),d=a.L(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=
	a.D(c),d=a.L(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Bb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,m;a.na=1;d||(a.na=0,d=a.clickObject);if(d){c=a.D(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.D(d),b=a.L(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var p=d.onclick?""+d.onclick:"";if(0<=p.indexOf(".tl(")||0<=p.indexOf(".trackLink("))d=0}}else a.na=1;!e&&d&&
	(e=a.Da(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var n=0,r=0,q;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(p=e.toLowerCase(),g=p.indexOf("?"),m=p.indexOf("#"),0<=g?0<=m&&m<g&&(g=m):g=m,0<=g&&(p=p.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),m=0;m<g.length;m++)(q=g[m])&&p.substring(p.length-(q.length+1))=="."+q&&(f="d");if(a.trackExternalLinks&&!f&&(p=e.toLowerCase(),a.Ga(p)&&(a.linkInternalFilters||(a.linkInternalFilters=
	k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),n=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(m=0;m<g.length;m++)q=g[m],0<=p.indexOf(q)&&(r=1);r?n&&(f="e"):n||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+
	(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.tb=function(){var c=a.na,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,m,p,k,e=0;if(g)for(m=0;m<g.length;m++)p=g[m].split("="),f=a.unescape(p[0]).split(","),
	p=a.unescape(p[1]),b[p]=f;f=a.account.split(",");m={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(m[k]=a.contextData[k],a.contextData[k]="");a.e=a.r("c",m)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(p in b)if(!Object.prototype[p])for(k=0;k<f.length;k++)for(e&&(g=b[p].join(","),g==a.account&&(a.e+=("&"!=p.charAt(0)?"&":"")+p,b[p]=[],d=1)),m=0;m<b[p].length;m++)g=b[p][m],g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=p.charAt(0)?"&":"")+p+"&u=0"),b[p].splice(m,
	1),d=1);c||(d=1);if(d){e="";m=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),m=1);for(p in b)!Object.prototype[p]&&0<m&&0<b[p].length&&(e+=(e?"&":"")+a.escape(b[p].join(","))+"="+a.escape(p),m--);a.cookieWrite("s_sq",e)}}}return c};a.ub=function(){if(!a.Fb){var c=new Date,b=r.location,d,f,e=f=d="",g="",m="",k="1.2",n=a.cookieWrite("s_cc","true",0)?"Y":"N",q="",s="";if(c.setUTCDate&&(k="1.3",(0).toPrecision&&(k="1.5",c=[],c.forEach))){k="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(k="1.7",
	c.reduce&&(k="1.8",k.trim&&(k="1.8.1",Date.parse&&(k="1.8.2",Object.create&&(k="1.8.5")))))}catch(t){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;m=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),q=a.b.Lb(b)?"Y":"N"}catch(u){}try{a.b.addBehavior("#default#clientCaps"),s=a.b.connectionType}catch(x){}a.resolution=
	d;a.colorDepth=f;a.javascriptVersion=k;a.javaEnabled=e;a.cookiesEnabled=n;a.browserWidth=g;a.browserHeight=m;a.connectionType=s;a.homepage=q;a.Fb=1}};a.P={};a.loadModule=function(c,b){var d=a.P[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.P[c]=a[c]=d;d.Xa=function(){return d.ab};d.bb=function(b){if(d.ab=b)a[c+"_onLoad"]=b,a.ha(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Xa,set:d.bb}):d._olc=1}catch(f){d._olc=
	1}}b&&(a[c+"_onLoad"]=b,a.ha(c+"_onLoad",[a,d],1)||b(a,d))};a.p=function(c){var b,d;for(b in a.P)if(!Object.prototype[b]&&(d=a.P[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.wb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>v)return 0}return 1};a.Q=
	function(c,b){var d,f,e,g,m,k;for(d=0;2>d;d++)for(f=0<d?a.wa:a.g,e=0;e<f.length;e++)if(g=f[e],(m=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])m[k]||(m[k]=a[g][k]);a[g]=m}};a.Qa=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.wa:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.ob=function(a){var b,d,f,e,g,k=0,p,n="",q="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(p=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==
	e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(k=",p,ei,"),k&&p)))){if((a=p.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?n+=(n?"&":"")+e:q+=(q?"&":"")+e;n&&q?p=n+"&"+q:q=""}d=253-(p.length-q.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+p}return a};
	a.Wa=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.da=!1;a.I=!1;a.eb=function(){a.I=!0;a.j()};a.ba=!1;a.U=!1;a.$a=function(c){a.marketingCloudVisitorID=c;a.U=!0;a.j()};a.ea=!1;a.V=!1;a.fb=function(c){a.visitorOptedOut=c;a.V=!0;a.j()};a.Y=!1;
	a.R=!1;a.Sa=function(c){a.analyticsVisitorID=c;a.R=!0;a.j()};a.aa=!1;a.T=!1;a.Ua=function(c){a.audienceManagerLocationHint=c;a.T=!0;a.j()};a.Z=!1;a.S=!1;a.Ta=function(c){a.audienceManagerBlob=c;a.S=!0;a.j()};a.Va=function(c){a.maxDelay||(a.maxDelay=250);return a.p("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.ca=!1;a.H=!1;a.va=function(){a.H=!0;a.j()};a.isReadyToTrack=function(){var c=!0,b=a.visitor,d,f,e;a.da||a.I||(a.Wa(a.eb)?a.I=!0:a.da=!0);if(a.da&&!a.I)return!1;b&&b.isAllowed()&&
	(a.ba||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.ba=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.$a]),a.marketingCloudVisitorID&&(a.U=!0)),a.ea||a.visitorOptedOut||!b.isOptedOut||(a.ea=!0,a.visitorOptedOut=b.isOptedOut([a,a.fb]),a.visitorOptedOut!=q&&(a.V=!0)),a.Y||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.Y=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Sa]),a.analyticsVisitorID&&(a.R=!0)),a.aa||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||
	(a.aa=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Ua]),a.audienceManagerLocationHint&&(a.T=!0)),a.Z||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.Z=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ta]),a.audienceManagerBlob&&(a.S=!0)),c=a.ba&&!a.U&&!a.marketingCloudVisitorID,b=a.Y&&!a.R&&!a.analyticsVisitorID,d=a.aa&&!a.T&&!a.audienceManagerLocationHint,f=a.Z&&!a.S&&!a.audienceManagerBlob,e=a.ea&&!a.V,c=c||b||d||f||e?!1:!0);a.ca||a.H||(a.Va(a.va)?a.H=!0:a.ca=
	!0);a.ca&&!a.H&&(c=!1);return c};a.o=q;a.u=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.jb=c;f.ib=b;f.gb=d;a.o==q&&(a.o=[]);a.o.push(f);0==a.u&&(a.u=setInterval(a.j,100))};a.j=function(){var c;if(a.isReadyToTrack()&&(a.cb(),a.o!=q))for(;0<a.o.length;)c=a.o.shift(),c.ib.apply(c.jb,c.gb)};a.cb=function(){a.u&&(clearInterval(a.u),a.u=0)};a.Ya=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Qa(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,
	a.track,b);return!0}return!1};a.qb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+
	"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&(a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState()),!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)));a.p("_s");a.Ya(c)||(b&&a.Q(b),c&&(d={},a.Qa(d,0),a.Q(c)),a.wb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=
	a.qb()),a.Bb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Ra||(a.referrer=r.document.referrer),a.Ra=1,a.referrer=a.ob(a.referrer),a.p("_g")),a.tb()&&!a.abort&&(a.ub(),g+=a.sb(),a.Ab(e,g),a.p("_t"),a.referrer=""))),c&&a.Q(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=
	a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.l=c,a.A=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==
	b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.Ab=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",k=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(k||(k=a.account,f=k.indexOf(","),0<=f&&(k=k.substring(0,f)),k=k.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=k+"."+e+"."+g+d);d=a.ssl?
	"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks;d+=f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.Eb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.mb(d);a.ja()};a.Pa=/{(%?)(.*?)(%?)}/;a.Ib=RegExp(a.Pa.source,"g");a.nb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b)if(o=c.dests[b],"string"==
	typeof o.c&&"aa."==o.id.substr(0,3))for(var d=o.c.match(a.Ib),b=0;b<d.length;++b){match=d[b];var f=match.match(a.Pa),e="";"%"==f[1]&&"timezone_offset"==f[2]?e=(new Date).getTimezoneOffset():"%"==f[1]&&"timestampz"==f[2]&&(e=a.rb());o.c=o.c.replace(match,a.escape(e))}};a.rb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+
	(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.ra={};a.doPostbacks=function(c){if("object"==typeof c)if(a.nb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b)dest=
	c.dests[b],"object"==typeof dest&&"string"==typeof dest.c&&"string"==typeof dest.id&&"aa."==dest.id.substr(0,3)&&(a.ra[dest.id]=new Image,a.ra[dest.id].alt="",a.ra[dest.id].src=dest.c)};a.mb=function(c){a.i||a.vb();a.i.push(c);a.la=a.C();a.Na()};a.vb=function(){a.i=a.xb();a.i||(a.i=[])};a.xb=function(){var c,b;if(a.qa()){try{(b=k.localStorage.getItem(a.oa()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.qa=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};
	a.Ea=function(){var c=0;a.i&&(c=a.i.length);a.q&&c++;return c};a.ja=function(){if(a.q&&(a.B&&a.B.complete&&a.B.F&&a.B.ua(),a.q))return;a.Fa=q;if(a.pa)a.la>a.N&&a.La(a.i),a.ta(500);else{var c=a.hb();if(0<c)a.ta(c);else if(c=a.Ba())a.q=1,a.zb(c),a.Db(c)}};a.ta=function(c){a.Fa||(c||(c=0),a.Fa=setTimeout(a.ja,c))};a.hb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.C()-a.Ka;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ba=function(){if(0<a.i.length)return a.i.shift()};
	a.zb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.yb(b)}};a.Za=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.X=!1;var s;try{s=JSON.parse('{"x":"y"}')}catch(x){s=null}s&&"y"==s.x?(a.X=!0,a.W=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.W=function(a){return k.$.parseJSON(a)},a.X=!0):a.W=function(){return null};a.Db=function(c){var b,d,f;a.Za()&&2047<c.length&&("undefined"!=
	typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.X?b.xa=!0:b=0));!b&&a.Oa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",
	b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||(b.abort=function(){b.src=q}));b.za=function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.ua=function(){b.za();a.lb();a.fa();a.q=0;a.ja();if(b.xa){b.xa=!1;try{a.doPostbacks(a.W(b.responseText))}catch(c){}}};b.onabort=b.onerror=b.Ca=function(){b.za();(a.trackOffline||a.pa)&&a.q&&a.i.unshift(a.kb);a.q=0;a.la>a.N&&a.La(a.i);a.fa();a.ta(500)};b.onreadystatechange=function(){4==
	b.readyState&&(200==b.status?b.ua():b.Ca())};a.Ka=a.C();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ia)try{f.removeChild(a.Ia)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ia=a.B}b.F=setTimeout(function(){b.F&&(b.complete?b.ua():(a.trackOffline&&b.abort&&b.abort(),b.Ca()))},5E3);a.kb=c;a.B=k["s_i_"+
	a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.J||a.A)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ga=setTimeout(a.fa,a.forcedLinkTrackingTimeout)};a.lb=function(){if(a.qa()&&!(a.Ja>a.N))try{k.localStorage.removeItem(a.oa()),a.Ja=a.C()}catch(c){}};a.La=function(c){if(a.qa()){a.Na();try{k.localStorage.setItem(a.oa(),k.JSON.stringify(c)),a.N=a.C()}catch(b){}}};a.Na=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>
	a.offlineLimit;)a.Ba()}};a.forceOffline=function(){a.pa=!0};a.forceOnline=function(){a.pa=!1};a.oa=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.C=function(){return(new Date).getTime()};a.Ga=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Eb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.Q(d);if(d.lmq)for(b=
	0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,
	getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:k.location);d||(d="&");return c&&b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
	a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ma="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.ma.slice(0);a.wa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks AudienceManagement".split(" ");
	for(n=0;250>=n;n++)76>n&&(a.g.push("prop"+n),a.O.push("prop"+n)),a.g.push("eVar"+n),a.O.push("eVar"+n),6>n&&a.g.push("hier"+n),4>n&&a.g.push("list"+n);n="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");a.g=a.g.concat(n);a.G=a.G.concat(n);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename=
	"AppMeasurement.offline";a.Ka=0;a.la=0;a.N=0;a.Ja=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Oa=!1,navigator){var y=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=y.indexOf("MSIE ")||0<=y.indexOf("Trident/")&&0<=y.indexOf("Windows NT 6"))a.Oa=!0}}catch(z){}a.fa=function(){a.ga&&(k.clearTimeout(a.ga),a.ga=q);a.l&&a.J&&a.l.dispatchEvent(a.J);a.A&&("function"==typeof a.A?a.A():a.l&&a.l.href&&(a.d.location=
	a.l.href));a.l=a.J=a.A=0};a.Ma=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.ya)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.ya=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
	0;else{var m=a.M=a.clickObject;a.ka&&(clearTimeout(a.ka),a.ka=0);a.ka=setTimeout(function(){a.M==m&&(a.M=0)},1E4);f=a.Ea();a.track();if(f<a.Ea()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Ga(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(n){b=new k.MouseEvent}if(b){try{b.initMouseEvent("click",
	c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(q){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.l=c.target,a.J=b)}}}}}catch(r){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&
	k.MouseEvent)&&(a.ya=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Ma,30)};a.Ma();a.loadModule("ActivityMap")}

	/*This function is modified to support s2*/
	function s3_gi(a){var k,q=window.s_c_il,r,n,t=a.split(","),u,s,x=0;if(q)for(r=0;!x&&r<q.length;){k=q[r];if("s_c"==k._c&&(k.account||k.oun))if(k.account&&k.account==a)x=1;else for(n=k.account?k.account:k.oun,n=k.allAccounts?k.allAccounts:n.split(","),u=0;u<t.length;u++)for(s=0;s<n.length;s++)t[u]==n[s]&&(x=1);r++}x||(k=new AppMeasurement);k.setAccount?k.setAccount(a):k.sa&&k.sa(a);return k}AppMeasurement.getInstance=s3_gi;window.s_objectID||(window.s_objectID=0);
	function s_pgicq(){var a=window,k=a.s_giq,q,r,n;if(k)for(q=0;q<k.length;q++)r=k[q],n=s3_gi(r.oun),n.setAccount(r.un),n.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();
	
	//s3.w_trackPage(digitalData);
	//s3.w_trackPage(digital);
	//s3.t();