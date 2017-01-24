// prod = use production suite for domains in following sections
// brand = brand for pageName. e.g. 'wbc'. Subdomains of westpac.com.au are always 'wbc' brand
// site = site for pageName. e.g. 'www'. Subdomains of westpac.com.au are used automatically as site name


(function (win, doc) {
	var trackingObjectName = win['AFSAnalyticsObject'], // Do not change this name.
	pageConfig = win[trackingObjectName].config,
	testTracking = win.testTracking || {}, // test page objects
	helpers;
	
	// defaults for s_code. customisations below.
	pageConfig.prod = pageConfig.brand = pageConfig.site = 0;
	
	helpers = {
		location : testTracking.location || win.location,
		addHandler : function (element, event, handler) {
			if (element.addEventListener) {
				element.addEventListener(event, handler, false);
			} else {
				if (element.attachEvent) {
					element.attachEvent('on' + event, handler);
				}
			}
		},
		// use onReady to attach at window.load (or later) if required to reduce impact on load time (delay load script), or to track navigation timing data
		onReady : function (func) {
			if (/complete/.test(doc.readyState)) { // fire/attach immediately in case window load has already occured
				func();
			} else {
				helpers.addHandler(win, 'load', function () { // fire/attach when window loads. include a timeout to prevent Chrome/Safari spinner immediately after load
					setTimeout(func, 4); // should be 4
				});
			}
		},
		scriptElement : function (id) {
			var existing = doc.getElementById(id),
			scripts = doc.getElementsByTagName('script')[0],
			//sibling = scripts[scripts.length - 1],
			element;
			
			if (existing) {
				return existing;
			}
			
			element = doc.createElement('script');
			element.id = id;
			//element.type = 'text/javascript';
			element.async = 1;
			//element.defer = true;
			
			//sibling.parentNode.insertBefore(element, sibling.nextSibling);
			scripts.parentNode.insertBefore(element, scripts);
			
			return element;
		},
		cookieRead : function (sKey) {
			return decodeURIComponent(doc.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || '';
		},
		cookieWrite : function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
			if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
				return false;
			}
			var sExpires = '';
			if (vEnd && vEnd.constructor === Date) {
				sExpires = '; expires=' + vEnd.toUTCString();
			}
			doc.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
			return true;
		},
		cloneObject : function (oToBeCloned, clones) {
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
						oClone[prpty] = helpers.cloneObject(oToBeCloned[prpty], clones);
					}
				}
			}
			return oClone;
		},
		addCallback : function (scriptEl, readyCheck, callback) {
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
		},
		tracker : function () {
			var args = Array.prototype.slice.call(arguments),
			method = args.shift();
			if (method) {
				if (typeof method === 'function') {
					method();
				} else {
					// can do something special based on method name here if required
					if (helpers.send[method]) {
						helpers.send[method].apply(win, args);
					}
				}
			}
		},
		processQueue : function () {
			var queue = win[trackingObjectName].q,
			realTrackingFunction = helpers.tracker;
			realTrackingFunction.config = pageConfig;
			while (queue && queue.length) {
				realTrackingFunction.apply(win, queue.shift());
			}
			win[trackingObjectName] = realTrackingFunction;
		},
		pageSetup : function () {
			// config for initial page defaults/s_code load only
			//alert('running analytics.js pageSetup');
			
			var omnitureScriptElement = helpers.scriptElement('omniture-scode'),
			omnitureScriptSource = testTracking.location ? 's_code_btfg.js' : '//info.westpac.com.au/furniture/scripts/s_code_btfg.js',
			omnitureScriptReady = function () {
				return win.s && win.s.w_trackPage;
			},
			// customisations for sites using this file
			btfgRegexProd,
			btfgRegexAny,
			btFundsRegexProd,
			btFundsRegexAny,
			btSubdomain;
			
			// BT domain details
			// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
			//btfgRegexAny = /^(www\.|btsfl\.|managedaccounts\.)?(bt|panorama|panoramainvestor|panoramaadviser|btadvisercentre|gsso\.intranet\.westpac)\.com\.au$/i;
			btfgRegexProd = /^(www\.|btsfl\.|managedaccounts\.)?(bt|panorama|panoramainvestor|panoramaadviser|btadvisercentre|plannerassist)\.com\.au$/i; // intranet not prod?
			btfgRegexAny = /(^|\.)(bt|panorama|panoramainvestor|panoramaadviser|btadvisercentre|plannerassist)\.com\.au$/i; // intranet not prod?
			btFundsRegexProd = /^online\.btfunds\.com\.au$/i;
			btFundsRegexAny = /(^|\.)btfunds\.com\.au$/i;
			
			// to switch on live host only
			if (btfgRegexProd.test(location.hostname) || btFundsRegexProd.test(location.hostname)) {
				pageConfig.prod = true;
			}
			
			if (btfgRegexAny.test(helpers.location.hostname)) {
				pageConfig.brand = 'bt';
				
				if (/(^|\.)bt\.com\.au$/i.test(helpers.location.hostname)) {
					btSubdomain = /(.+)(?:\.bt\.com\.au$)/i.exec(helpers.location.hostname);
					btSubdomain = btSubdomain ? btSubdomain[1] : '(not set)';
					pageConfig.site = btSubdomain;
				}
				if (/panorama\.com\.au$/i.test(helpers.location.hostname)) {
					pageConfig.site = 'panorama';
				}
				if (/panoramainvestor\.com\.au$/i.test(helpers.location.hostname)) {
					pageConfig.site = 'panoramainvestor';
				}
				if (/panoramaadviser\.com\.au$/i.test(helpers.location.hostname)) {
					pageConfig.site = 'panoramaadviser';
				}
				if (/btadvisercentre\.com\.au$/i.test(helpers.location.hostname)) {
					pageConfig.site = 'advisercentre';
				}
			}
			
			if (btFundsRegexAny.test(helpers.location.hostname)) {
				pageConfig.brand = 'btfunds';
				btSubdomain = /(.+)(?:\.btfunds\.com\.au$)/i.exec(helpers.location.hostname);
				btSubdomain = btSubdomain ? btSubdomain[1] : '(not set)';
				pageConfig.site = btSubdomain;
			}
			
			// add files to attach to page (based on conditions if required)
			helpers.onReady(function () { // i.e. wait until window load to attach script. avoid gomez measurement + browser loading spinner.
				pageConfig.lc = (+new Date()); // lc = load complete time for browsers without native support
				
				// load any script required and check if required functions are ready
				omnitureScriptElement.src = omnitureScriptSource;
				
				// can add the process callback straight away
				helpers.addCallback(omnitureScriptElement, omnitureScriptReady, function () {
					helpers.processQueue();
				});
			});
		},
		send : {
			impression : function (impressions) {
				s.w_trackImpression(impressions);
			},
			page : function (details) {
				var pageDetails = helpers.cloneObject(details || {}); // copy object passed to leave original as-is
				
				// set this file date for version monitoring across all sites using this file
				if (!pageDetails.siteVersion) {
					pageDetails.siteVersion = 'analytics_btfg.js:20150325'; // TODO: ------ Code release date to be updated with changes
				}
				// completely override report suite if required for testing
				//pageDetails.s_un = 'westpac-dev-b'; // TODO: ------ confirm if override should be used
				
				
				// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
				
				// custom subSite config for BT Panorama subdomains in pageName path
				if (/\/\/managedaccounts\.bt\.com\.au\/goinvest(\/|$)/i.test(helpers.location.href)) {
					pageDetails.subSite = 'goinvest';
				}
				if (/\/btweb\/investor(\/|$)/i.test(helpers.location.pathname)) {
					pageDetails.subSite = 'investor';
				}
				if (/\/retailcorporate\/corporate(\/|$)/i.test(helpers.location.pathname)) {
					pageDetails.subSite = 'corporate';
				}
				
				s.w_trackPage(pageDetails);
			}
		}
	};
	
	if (trackingObjectName) {
		helpers.pageSetup();
	}
}
	(window, document));
