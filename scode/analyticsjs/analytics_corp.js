// prod = use production suite for domains in following sections
// brand = brand for pageName. e.g. 'wbc'. Subdomains of westpac.com.au are always 'wbc' brand
// site = site for pageName. e.g. 'www'. Subdomains of westpac.com.au are used automatically as site name

// setup object without code in page head
(function (win, doc, scr, loc, objName, collectLoadStartTime) {
	var element,
	scripts;
	win['AFSAnalyticsObject'] = objName; // Reference object named with string to avoid property renaming in advanced obfuscation. Do not change this name.
	win[objName] = win[objName] || function () {
		(win[objName].q = win[objName].q || []).push(arguments);
	};
	win[objName].config = {};
	
	// if this script is in head (high in HTML) capture time as start of page load time (for safari and old IE without native timing support)
	win[objName].config.ls = collectLoadStartTime ? (+new Date()) : 0; // ls = load start time
}
	(window, document, 'script', '', 'wa', 0));

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
			omnitureScriptSource = testTracking.location ? 's_code_dev.js' : '//online.' + location.hostname.split('.').slice(1).join('.') + '/common/scripts/s_code_corp.js',
			omnitureScriptReady = function () {
				return win.s && win.s.w_trackPage;
			};
			
			// standard mactel subdomains of westpac.com.au that should be prod
			// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
			// to switch on live host only
			if (/^(?:online|accountinfo|payments|receipts|administration|termdeposit|agency|onlinefx|research)\.corp\.westpac\.(com\.au|co\.nz)$/i.test(location.hostname)) {
				pageConfig.prod = true;
			}
			if (/\.corp(.*?)\.westpac\.(com\.au|co\.nz)$/i.test(helpers.location.hostname)) {
				pageConfig.brand = 'wbc';
				pageConfig.site = 'corp';
				
				// adjust cookie name from ASP add prefix 'corp_' and fix domain property
				if (helpers.cookieRead('COTid')) {
					helpers.cookieWrite('s_wbc-gi', 'corp_' + helpers.cookieRead('COTid'), 0, '/', '.' + location.hostname.split('.').slice(-3).join('.'));
				} else {
					helpers.cookieWrite('s_wbc-gi', 0, new Date(0), '/', '.' + location.hostname.split('.').slice(-3).join('.'));
				}
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
		qSA : function (doc, selector, tag, attr, regex) {
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
		},
		getText : function (elem) {
			var elemText;
			if (elem) {
				elemText = elem.innerText || elem.textContent;
			} else {
				elemText = '';
			}
			return elemText.replace(/^\s+|\s+$/g, ''); // trim
		},
		removeNumbers : function (str) {
			return str.replace(/\s+\(\s*\d+\s*\)$/g, ''); // remove numbers and trim
		},
		send : {
			impression : function (impressions) {
				s.w_trackImpression(impressions);
			},
			page : function (details) {
				var pageDetails = helpers.cloneObject(details || {}); // copy object passed to leave original as-is
				
				// set this file date for version monitoring across all sites using this file
				if (!pageDetails.siteVersion) {
					pageDetails.siteVersion = 'analytics_corp.js:20150612'; // TODO: ------ Code release date to be updated with changes
				}
				// completely override report suite if required for testing
				//pageDetails.s_un = 'westpac-dev-b'; // TODO: ------ confirm if override should be used
				
				
				// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
				
				
				var corpSubDomain,
				corpModules = helpers.cookieRead('COApps'),
				pageNameFromElements,
				leftNavName,
				heading1,
				heading2;
				
				// custom subSite config for CORP subdomains in pageName path
				corpSubDomain = /(.+)(?:\.corp(?:.*?)\.westpac\.(?:com\.au|co\.nz)$)/i.exec(helpers.location.hostname);
				if (corpSubDomain) {
					pageDetails.subSite = corpSubDomain[1];
					// A custom subSiteSeparator may be used for concatenating subSite into pageName in s_code (Westpac uses default value of hyphen)
					pageDetails.subSiteSeparator = ':';
				}
				
				// corp desktop customisation
				if (helpers.cookieRead('LoginStatusCookie')) {
					helpers.cookieWrite('LoginStatusCookie', 0, new Date(0), '/', '.' + location.hostname.split('.').slice(-4).join('.')); // helpers.cookieWrite(sKey, sValue, vEnd, sPath, sDomain, bSecure)
					pageDetails.addEvents = 'event46';
					
					if (corpModules) {
						//pageDetails.modules = corpModules;
						//pageDetails.moduleKey = corpModules.replace(/\w+?(?=,|$)/g, '$&=$&');
						//pageDetails.moduleLayout = 'corp-list';
						//pageDetails.s_eVar55 = 'D="corp-list,"+COApps'; // avoid mixing with OTP modules cookie on westpac.com.au. Differences between the module sets may be tracked as module add/remove
						pageDetails.s_eVar55 = 'corp-list,' + corpModules; // avoid mixing with OTP modules cookie on westpac.com.au. Differences between the module sets may be tracked as module add/remove
					}
				}
				
				if (!pageDetails.pageName) {
					// page name rules
					if (/^(payments|online)\.corp/i.test(helpers.location.hostname)) {
						leftNavName = helpers.getText(helpers.qSA(document, '.corporate', 'li', 'class', /corporate/)[0] ||
								(helpers.qSA(document, '.selectedSubMenuItem', 'td', 'class', /selectedSubMenuItem/)[0] ||
									helpers.qSA(document, 'tr.bgR', 'tr', 'class', /bgR/)[0]));
						
						heading1 = helpers.getText(helpers.qSA((helpers.qSA(document, 'h1', 'h1', '', '')[0]), 'a', 'a', '')[0] ||
								helpers.qSA(document, 'h1', 'h1', '', '')[1]);
						
						heading2 = helpers.getText(helpers.qSA(document, 'h2', 'h2', '', '')[0] ||
								(helpers.qSA(document, 'td.bgW', 'td', 'class', /bgW/)[1] ||
									helpers.qSA(document, 'td.bgGy', 'td', 'class', /bgGy/)[1]));
					}
					if (/^(accountinfo|agency|receipts)\.corp/i.test(helpers.location.hostname)) {
						leftNavName = helpers.getText(helpers.qSA(document, '.selectedSubMenuItem', 'td', 'class', /selectedSubMenuItem/)[0] ||
								helpers.qSA(document, '.bgR', 'tr', 'class', /bgR/)[0]);
						
						heading1 = helpers.getText(helpers.qSA((helpers.qSA(document, 'h1', 'h1', '', '')[1]), 'a', 'a', '')[0] ||
								(helpers.qSA(document, 'h1', 'h1', '', '')[1] ||
									(helpers.qSA(helpers.qSA(document, 'tr.bgR', 'tr', 'class', /bgR/)[1], 'a', 'a', '')[0] ||
										helpers.qSA(helpers.qSA(document, 'tr.bgR', 'tr', 'class', /bgR/)[0], 'a', 'a', '')[0])));
						
						heading2 = helpers.getText(helpers.qSA(document, 'td.bgW', 'td', 'class', /bgW/)[1] ||
								(helpers.qSA(document, 'td.bgGy', 'td', 'class', /bgGy/)[1] ||
									(helpers.qSA(document, 'h2', 'h2', '', '')[0] ||
										helpers.qSA(document, 'td.bgGy', 'td', 'class', /bgGy/)[0])));
					}
					if (/^(administrationi?|termdeposit)\.corp/i.test(helpers.location.hostname)) {
						leftNavName = helpers.getText(helpers.qSA(document, '.menuBgActive', 'td', 'class', /menuBgActive/)[0] ||
								(helpers.qSA(document, '.selectedSubMenuItem', 'td', 'class', /selectedSubMenuItem/)[0] ||
									helpers.qSA(document, '.bgR', 'div', 'class', /bgR/)[0]));
						
						heading1 = helpers.getText(helpers.qSA((helpers.qSA(document, 'h1', 'h1', '', '')[1]), 'a', 'a', '')[0] ||
								(helpers.qSA(document, 'h1', 'h1', '', '')[1] ||
									(helpers.qSA((helpers.qSA(document, 'tr.bgR', 'tr', 'class', /bgR/)[1]), 'a', 'a', '')[0] ||
										helpers.qSA(document, 'tr.bgR', 'tr', 'class', /bgR/i)[0])));
						
						heading2 = helpers.getText(helpers.qSA(document, '.bgW', 'td', 'class', /bgW/)[1] ||
								(helpers.qSA(document, 'tr.bgGy', 'tr', 'class', /bgGy/)[0] ||
									helpers.qSA(document, 'h2', 'h2', '', '')[0]));
					}
					// Page name for popup pages
					if (helpers.qSA(document, 'input[name$="btnCloseTop"]', 'input', 'name', /btnCloseTop/)[0] ||
						(helpers.qSA(document, 'input[name="btnClosetop"]', 'input', 'name', /btnClosetop/)[0] ||
							helpers.qSA(document, 'input[name="btnClose"]', 'input', 'name', /btnClose/)[0])) { // was input[name$="btnClose"
						
						leftNavName = '(popup)';
						
						heading1 = helpers.getText(helpers.qSA(document, 'td.ReportHeaderFooterLabel', 'td', 'class', /ReportHeaderFooterLabel/)[0] ||
								(helpers.qSA(document, 'th.fwB', 'th', 'class', /fwB/)[0] ||
									(helpers.qSA((helpers.qSA(document, 'tr.fwB', 'tr', 'class', /fwB/)[0]), 'td', 'td', '', '')[0] ||
										(helpers.qSA(helpers.qSA(document, 'table', 'table', '', '')[3], 'td span.label', 'span', 'class', /label/i)[0] ||
											(helpers.qSA(document, 'td.fwB', 'td', 'class', /fwB/)[0] ||
												helpers.qSA(helpers.qSA(document, 'table', 'table', '', '')[4], 'td span.label', 'span', 'class', /label/i)[0])))));
						
						heading2 = '';
					}
					
					pageNameFromElements = ((leftNavName || '(no nav)') + (heading1 ? ':' + heading1 : '') + (heading2 ? ':' + helpers.removeNumbers(heading2) : ''))
					.replace(/corporate online/gi, 'col')
					.replace(/\(this section\)/gi, '')
					.replace(/You are now signed out of col/gi, 'signed out')
					.replace(/administrators/gi, 'admins');
					
					if (!/^(\(no nav\)|\(popup\)|x)$/i.test(pageNameFromElements)) {
						pageDetails.pageName = pageNameFromElements;
					}
					
				}
				
				// abort any pages if required
				if (/^(zzz|yyy)$/.test(helpers.location.pathname)) {
					pageDetails.s_abort = 'true';
				}
				
				pageDetails.trackDedupe = 'true';
				s.w_trackPage(pageDetails);
			}
		}
	};
	
	if (trackingObjectName) {
		helpers.pageSetup();
	}
	
	// fire page tracking automatically
	if (trackingObjectName) {
		helpers.onReady(function () { // wait until details can be retrieved from headings etc.
			wa('page', window.pageDetails);
		});
	}
	
}
	(window, document));
