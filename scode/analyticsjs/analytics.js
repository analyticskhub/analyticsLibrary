// prod = use production suite for domains in following sections
// brand = brand for pageName. e.g. 'wbc'. Subdomains of westpac.com.au are always 'wbc' brand
// site = site for pageName. e.g. 'www'. Subdomains of westpac.com.au are used automatically as site name

// reset all values
var pageDetails = window.pageDetails || {};

(function (win, doc) {
	//alert('running analytics.js function');
	
	var trackingObjectName = 'AFSTrackerObject', // 'AFSTrackerObject' to be more specific than just 'wa' as this legacy file is referenced by many microsites
	pageConfig,
	analyticsCodeVersion = 'analytics.js:20141112', // TODO. ------ Code release date to be updated with changes
	testTracking = win.testTracking || {}, // test page objects
	fullLoc = testTracking.location || win.location,
	fullLocHostname = fullLoc.hostname,
	scriptSource = testTracking.location ? 's_code_dev.js' : '//info.westpac.com.au/furniture/scripts/s_code_info.js',
	movingtoaustraliaRegex,
	stGeorgeRegex,
	paywayRegex;
	// cssExperienceMob;
	
	// for compatibility with new s_code
	win['AFSAnalyticsObject'] = trackingObjectName; // string to avoid obfuscation
	win[trackingObjectName] = {};
	pageConfig = win[trackingObjectName].config = {};
	pageConfig.prod = pageConfig.brand = pageConfig.site = 0;
	
	// addHandler used if attaching to window load event for performance constraints (avoid Gomez measurement)
	function addHandler(element, event, handler) {
		if (element.addEventListener) {
			element.addEventListener(event, handler, false);
		} else {
			if (element.attachEvent) {
				element.attachEvent('on' + event, handler);
			}
		}
	}
	
	function omnitureScriptReady() {
		return window.s && window.s.w_trackPage;
	}
	
	// attach file once per unique element ID (2nd argument) -
	function loadScript(url, id, async, defer, readyCheck, callback) {
		// insert before
		var scripts = doc.getElementsByTagName('script')[0],
		element = doc.createElement('script');
		// insert after
		//var scripts = doc.getElementsByTagName('script'),
		//sibling = scripts[scripts.length - 1],
		//element = doc.createElement('script');
		
		if (doc.getElementById(id)) {
			// prevent loading same script element ID twice
			return;
		}
		element.id = id;
		element.type = 'text/javascript';
		element.async = async;
		element.defer = defer;
		if (element.readyState) {
			element.onreadystatechange = function () {
				//if(element.readyState === 'loaded' || element.readyState === 'complete') {
				if (/loaded|complete/.test(element.readyState) && readyCheck()) {
					element.onreadystatechange = null;
					callback();
				}
			};
		} else {
			// could use listener for load event here...
			//element.onload = function () {
			//	callback();
			//};
			addHandler(element, 'load', function () {
				if (readyCheck()) { // in case the file loaded is not actually s_code
					callback();
				}
			});
		}
		element.src = url;
		// insert before
		scripts.parentNode.insertBefore(element, scripts);
		// insert after
		//sibling.parentNode.insertBefore(element, sibling.nextSibling);
	}
	// use onReady to attach at window.load (or after) if required to reduce impact on load time (delay load script), or to track navigation timing data
	function onReady(func) {
		if (/complete/.test(doc.readyState)) { // fire/attach immediately in case window load has already occured
			func();
		} else {
			addHandler(win, 'load', func); // fire/attach when window loads
		}
	}
	// check for mobile-specific link on responsive pages
	// this is now standard in s_code ------
	/*
	function elementIsVisible(selector) {
	var elem = doc.querySelector && doc.querySelector(selector),
	ieDisplayNoneBug;
	// fix for IE bug with inline and block elements stating offsets incorrectly
	ieDisplayNoneBug = elem && elem.currentStyle && elem.currentStyle.display === 'none' ? true : false;
	return elem && (elem.offsetWidth > 0 && elem.offsetHeight > 0) && !ieDisplayNoneBug; // other conditions can be added if required
	}
	 */
	
	// create global pageDetails object for tracking
	//pageDetails = win.pageDetails || {};
	
	// set this file date for version monitoring across all sites using this file
	pageDetails.siteVersion = analyticsCodeVersion;
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	
	// standard mactel subdomains of westpac.com.au that should be prod
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// to switch on live host only
	if (/^(?:info|explore|wib|help|ww2)\.westpac\.com\.au$/i.test(location.hostname)) { // help and ww2 due to incorrect URLs used by CORP etc. (should be www) ------
		pageConfig.prod = true;
	}
	// for live host and test page
	// brand and site are set automatically in s_code for westpac.com.au subdomains
	if (/^info\.westpac\.com\.au$/i.test(fullLocHostname) && (/\/m\//i.test(fullLoc.pathname) || /\/mobile\//i.test(fullLoc.pathname))) {
		if (!pageDetails.experience) {
			pageDetails.experience = 'mob';
		}
	}
	// check if mobile-specific link is visible on responsive pages. null if class not found.
	// this is now standard in s_code
	/*
	cssExperienceMob = elementIsVisible('.pagedetails-experience-mob');
	if (cssExperienceMob !== null) {
	pageDetails.experience = cssExperienceMob ? 'mob' : 'responsive';
	}
	 */
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	
	// movingtoaustralia microsites
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	movingtoaustraliaRegex = /^movingtoaustralia\.westpac\.(?:com\.au|co\.nz|co\.uk|asia)$/i;
	// to switch on live host only
	if (movingtoaustraliaRegex.test(location.hostname)) {
		pageConfig.prod = true;
	}
	// for live host and test page
	if (movingtoaustraliaRegex.test(fullLocHostname)) {
		pageConfig.brand = 'wbc';
		pageConfig.site = fullLocHostname.replace(/(movingtoaustralia)\.westpac(\.com?)?/i, '$1');
	}
	if (/^movingtoaustralia\.westpac\.asia$/i.test(fullLocHostname)) {
		pageDetails.language = 'cn';
		//pageDetails.s_fpCookieDomainPeriods = 2;
		pageConfig.fpCookieDomainPeriods = 2;
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	
	// St. George microsites
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// for live host and test page
	stGeorgeRegex = /(.+)(?:\.stgeorge\.com\.au$)/i;
	if (stGeorgeRegex.exec(fullLocHostname)) {
		pageConfig.brand = 'stg';
		pageConfig.site = stGeorgeRegex.exec(fullLocHostname)[1];
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	
	// Payway
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	paywayRegex = /^www\.payway\.com\.au$/i;
	// to switch on live host only
	if (paywayRegex.test(location.hostname)) {
		pageConfig.prod = true;
	}
	// for live host and test page
	if (paywayRegex.test(fullLocHostname)) {
		pageConfig.brand = 'wbc';
		pageConfig.site = 'payway';
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	
	// Westpac Insurance
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	// to switch on live host only
	//if (/^www\.westpacinsurance\.com\.au$/i.test(location.hostname + 'pending-prod-validation')) { // keep in dev until prod validation ------
	if (/^www\.westpacinsurance\.com\.au$/i.test(location.hostname)) {
		pageConfig.prod = true;
	}
	// for live host and test page
	if (/\.westpacinsurance\.com\.au$/i.test(fullLocHostname)) {
		pageConfig.brand = 'wbc';
		pageConfig.site = 'insurance';
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	
	// completely override report suite if required for testing
	//pageDetails.s_un = 'westpac-dev-b'; // TODO ------ confirm if override should be used
	
	
	// add files to attach to page (based on conditions if required)
	onReady(function () { // i.e. wait until window load to attach script
		pageConfig.lc = (+new Date()); // lc = load complete time for browsers without native support
		
		//loadScript('s_code_dev.js', 'omniture-scode', true, true, function () {
		//loadScript('//info.westpac.com.au/furniture/scripts/s_code_info.js', 'omniture-scode', true, true, function () {
		loadScript(scriptSource, 'omniture-scode', true, true, omnitureScriptReady, function () {
			// Set s_abort=true on the base page to avoid firing this automatic call on a page load if all calls are being made manually (e.g. SPA pages)
			s.w_trackPage();
		});
	});
	
}
	(window, document));
