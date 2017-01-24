/* SiteCatalyst code. Copyright 1996-2013 Adobe, Inc. All Rights Reserved More info available at http://www.omniture.com */

var s_accts = {
	mob: {
		dev: 'westpac-mob-dev', // TODO: confirm correct MOB DEV suite
		prod: 'westpac-mob', // TODO: confirm correct MOB PROD suite
		staff: 'westpac-staff-mob', // TODO: confirm correct STAFF MOB PROD suite
		timestamp: true // TODO: confirm MOB suite TIMESTAMP setting for this s_code
	},
	desktop: {
		dev: 'westpac-dev', // TODO: confirm correct DESKTOP DEV suite
		prod: 'westpac-prd', // TODO: confirm correct DESKTOP PROD suite
		staff: 'westpac-staff' // TODO: confirm correct STAFF DESKTOP PROD suite
	}
},
	s_account = s_accts.desktop.dev,
	s = s_gi(s_account), // create s object
	//pageDetails = window.pageDetails || {};
	pageDetails = window.pageDetails || window.digitalData || {}; // adding the new dataLayer object

// prod/brand/site settings etc. from analytics js files
s.w_config = ((window[window['AFSAnalyticsObject']] || {}).config) || {}; // leave this name as string to prevent renaming in obfuscation. do not change. confirm name if obfuscated twice.

// test page objects
s.w_wtT = window.testTracking || {};

// Detect experience initially set on page. May come from analytics.js
//s.w_exprnc = (pageDetails.experience || 'desktop').replace(/^titan$/i, 'mob'); // (titan is OTP mobile) // this may have been moved here to disable clickmap on mob when set by analytics.js


/******** DEV defaults ********/
// default mobile account
//s.w_acctMobDev = 'westpac-mob-dev'; // TODO: confirm correct mob default/dev suite
//s.w_acctMob = s.w_acctMobDev;
//s.w_ckExt = '_wp_dev'; // '_wp' for Westpac unique cookie. this value also used in debugging logic for dev (if device has a '..._dev' cookie name extension)
s.w_ckExt = '_' + (s.w_config.brand ? s.w_config.brand.replace(/^wbc$/i, 'wp') : 'wp') + '_dev'; // e.g. '_wp_dev'. '_wp' for Westpac unique cookie. this value also used in debugging logic for dev (if device has a '..._dev' cookie name extension)
//s.w_acctStf = s_account; // TODO: confirm correct staff desktop dev suite
//s.w_acctStfMob = s.w_acctMobDev; // TODO: confirm correct staff mob staff dev suite


/******** PROD overrides ********/
// Set boolean to identify dev/prod domain for each page load.
// other prod domains specified via rules in analytics js
//s.w_prod = /^(?:www|banking|forms|online|businessonline|search|hlc1)\.westpac\.com\.au$/i.test(location.hostname) || s.w_config.prod; // doesn't include emulation mode details
//s.w_prod = /^(?:www|banking|forms|online|businessonline|search|hlc1|locator)\.westpac\.com\.au$/i.test(location.hostname) || (/^g.*net\.westpac\.com\.au$/i.test(location.hostname) && /RM\/emulationbanking\b/i.test(location.pathname)) || s.w_config.prod; // with emulation mode details
s.w_prod = (/^(?:www|banking|forms|online|businessonline|search|hlc1|locator)\.westpac\.com\.au$/i).test(location.hostname) || ((/^gs.{8}net\.westpac\.com\.au$/i).test(location.hostname) && (/RM\/emulationbanking\b/i).test(location.pathname)) || s.w_config.prod; // with emulation mode details, regex excludes SIT SameView hostname
if (s.w_prod) {
	//s_account = 'westpac-prd'; // TODO: confirm correct desktop prod suite
	//s_account = s_accts.desktop.prod; // moved to each call for immediate responsive switching
	//s.sa(s_account);
	//s.w_acctMob = 'westpac-mob'; // TODO: confirm correct mob prod suite
	//s.w_ckExt = '_wp';
	s.w_ckExt = s.w_ckExt.replace(/_dev$/, '');
	//s.w_acctStf = 'westpac-staff'; // TODO: confirm correct staff desktop prod suite
	//s.w_acctStfMob = 'westpac-staff-mob'; // TODO: confirm correct staff mob staff prod suite
}

// Specify report suites for microsite domains (sites not under .westpac.com.au) in analytics.js


/************************** CONFIG SECTION **************************/

// Version = scode version, version date, scode group, collection server, override if used
// Code group name (www/forms/online/banking) is hard-coded to assist troubleshooting
// The site/host name value in this string tested for Oregon-specific operations in online+banking
s.w_codeVers = 'D="' + s.version + ' 20170123 dev "+Host'; // TODO: Code release date and site name for each site to be updated (dev -> www/forms/online/banking/search etc).

s.w_log = function (data) {
	if (s.c_rr('s_pers_wp_dev') || !s.w_prod) {
		try {
			console.info('s_code: ' + data); // debug logging only when dev, or dev cookies set. this should be on for live sites for debugging
		} catch (ignore) {
			// don't log if console unavailable
		}
	}
};

// OTP user GUID e.g. 22604399-008a-4b20-910f-c3ad9a28518b may be in URL path like /secure/banking/overview/accountdetails/ (e.g. Term Deposit account detail page)
s.w_guidRgx = /\b\w{8}-\w{4}-\w{4}-\w{4}-\w{12}\b/g;

// ClickMap DynamicObjectIDs config
s.getObjectID = function (obj) {
	/* Add code to identify whether an objectID should be created,
	 * parse the URLs and return objectID. If no objectID should be created, return ''.
	 */

	// Use link HREF to identify links
	// consider prefixing with navigation area or similar to make clickmap reports easier to interpret and higher accuracy than URL only when links move on page.
	var objId = obj.href.replace(/^file:(\/)+/i, 'file://'); // use object href for all links by default. Fix file links to allow correct objId to be applied
	//.replace(s.w_guidRgx, ''); // remove OTP user GUID. This is included in the cleanURL function

	return s.w_lCase(s.w_cleanURL(objId, 1).replace(/\?/g, '_')); // ensure overlays work correctly (Adobe KB404)
};

// Navigation menu ID config. define data-attribute to identify link groups
s.w_getNavMenuId = function (evt) {
	var lp,
		len,
		node = s.w_getEvtTrgt(evt),
		nav = '';

	// cycle through up to 'len' parent nodes to find a data-analytics-nav attribute
	for (lp = 0, len = 50; lp < len; lp++) {
		if (node) {
			if (node.nodeType === 1) {
				nav = node.getAttribute('data-analytics-nav');
				if (nav) {
					// set val in cookie
					//console.log('nav = ' + nav);
					s.c_w('nav', nav);
					break;
				}
			}
			node = node.parentNode;
		}
	}
};

// clean and shorten the captured location and referrer URLs
s.w_cleanURL = function (loc, locType) {
	var cleanedUrl = (loc || '')
		.replace(/(\w)\/\/+/g, '$1/') // replace multiple slashes after a word char. with single slash (except for ://) for clean pageName (from location)
		.replace(/((?:&|\?)referrer=.*?(?=&|$))/ig, '') // always remove referrer querystring parameter - it was generated for unica
		.replace(/(^https?:.+?(?:online|banking).+\/cust\/wps\/(my)?portal\/[pw]ol\/)!ut\/.*/i, '$1oregon-application') // Oregon - portal/pol|wol. remove session ID in path
		//.replace(/(^https?:.+?(www.)?forms.+\.nsf)(?:.*\w{32}.*)/i,'$1$2'); // Remove session ID only from Domino path $1 adds www. ???
		.replace(/(^https?:.+?(forms|online)(?:\.|-).*\.nsf.*?)(?:\/\w{32}(?=\?))/i, '$1') // Remove session ID only from Domino path $1 adds www. ???
		.replace(s.w_guidRgx, '') // remove OTP user GUID
		.replace(/#+!*$/, '') // remove hash or hashbang (or multiples of these characters) at end of loc (only) to unify URLs that would otherwise match
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

// return full current URL for test or prod
s.w_getLoc = function () {
	return s.w_wtT.location || window.location;
};

// URL handling -
// Full URL object for getQueryParam and ChannelManager
//s.w_fullLoc=(window.testTracking && window.testTracking.location ? window.testTracking.location : window.location);
//s.w_fullLoc = s.w_getLoc();

// boolean for core first party cookie domain
s.w_coreDomain = /\.westpac\.com\.au$/i.test(s.w_getLoc().hostname);

// Suffix for non-core-domain cookie values (to split distinct data sets)
s.w_extCkSfx = s.w_coreDomain ? '' : ' (ext.)';

// Are there specific params we need/want to keep for pageNames, or just use pageDetails values?
// s.pageURL=s.w_getLoc().href
// .replace(/(\w)\/\/+/g,'$1/') // replace multiple slashes after a word char. with single slash (except for ://) for clean pageName
// .replace(/((?:&|\?)referrer=.*?(?=&|$))/ig,'') // always remove referrer querystring parameter - it was generated for unica
// .replace(/\?(?!(?:openform|readform|opendocument|funcreqd)).*/i,'') // remove complete querystring for privacy/security/uniqueness if not on Domino/oregon? form (handled separately)
// .replace(/(^https?:.+?online.+\/cust\/wps\/(my)?portal\/[pw]ol\/)!ut\/.*/i,'$1oregon-application') // Oregon - portal/pol|wol. remove session ID in path
// //.replace(/(^https?:.+?(www.)?forms.+\.nsf)(?:.*\w{32}.*)/i,'$1$2'); // Remove session ID only from Domino path $1 adds www. ???
// .replace(/(^https?:.+?forms(?:\.|-).*\.nsf.*?)(?:\/\w{32}(?=\?))/i,'$1'); // Remove session ID only from Domino path $1 adds www. ???

// default/initialised s.pageURL
s.pageURL = s.w_cleanURL(s.w_getLoc().href, 1);

// Use secure on https:
s.ssl = s.w_getLoc().protocol === 'https:';

// pageName config
// s.siteID set in doPlugins to allow changing to 'app' based on visitorID cookie from apps
s.defaultPage = /^\/+$/.test(s.w_getLoc().pathname) ? 'home' : ''; // filename to add when none exists (www home page)
//s.queryVarsList=''; // query parameters to keep
s.pathExcludeDelim = ';'; // portion of the path to exclude - was ;
s.pathConcatDelim = ':'; // page name component separator
//s.pathExcludeList=''; // elements to exclude from the path - index.html? default.aspx for info?

// other default config
s.charSet = 'UTF-8';
// Periods in collection domain. e.g. smetrics.westpac.com.au = 3
s.cookieDomainPeriods = 3;
// Level to set first-party (visitor data) cookies. e.g. www.westpac.asia = 2 (override set in analytics.js)
// Overrides (if any) need to be set here before cookie operations. This setting defaults to s.cookieDomainPeriods if undefined.
//s.fpCookieDomainPeriods = pageDetails.s_fpCookieDomainPeriods;
s.fpCookieDomainPeriods = s.w_config.fpCookieDomainPeriods; // set in analytics.js before this file loads

// Link Tracking Config
//s.trackDownloadLinks=false; // use custom tracking for downloads and product disclosures. undeclared is false (default)
//s.trackExternalLinks=false; // use custom tracking for social links etc. undeclared is false (default)

// Clickmap. using value from pageDetails RESX to allow OTP to disable link handling functions and onclick code. default is true.
// ClickMap addon curently requires sObjectID in onclick of each link at page load time to generate overlays
//s.trackInlineStats=true; // clickmap // consider using value from pageDetails RESX to allow OTP to disable?
//s.trackInlineStats = !(/false/i.test(pageDetails.trackInlineStats) || /^(?:mob.*|tab.*)/i.test(s.w_exprnc)); // don't allow clickmap on mobile. doesn't track every screen, overlays can't be viewed
//s.trackInlineStats = !/false/i.test(pageDetails.trackInlineStats); // allow clickmap on mobile, it will only work for full page loads. It now doesn't fire on every SPA trackPage
//s.trackInlineStats = 0; // allow clickmap on mobile, it will only work for full page loads. It now doesn't fire on every SPA trackPage

s.linkDownloadFileTypes = 'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
s.linkInternalFilters = 'tel:,javascript:,mailto:,westpac.com.au,' + s.w_getLoc().hostname + ',' + location.hostname;
//s.linkLeaveQueryString=false;
s.linkTrackVars = 'None';
s.linkTrackEvents = 'None';
s.w_ltv = 'server,channel,eVar7,prop15,prop25,eVar25,prop35,eVar35,prop39,prop69,eVar21'; // default vars required in all click tracking functions (linkTrackVars)


//s.w_inlErr='auto validation errors';

/************************** END CONFIG SECTION **************************/

s.usePlugins = true;

function s_doPlugins(s) {
	//console.log('start doPlugins: '+JSON.stringify(s.w_queue));

	//console.log('s.eo = ' + s.eo); // event object
	//console.log('s.lnk = ' + s.lnk); // link tracking
	//console.log('s.linkType = ' + s.linkType); // undefined on initial page load only

	var domClickEvent = !!s.eo, // any random click on page passed through s_doPlugins
		trackingLink = !!s.lnk && !domClickEvent, // represents link tracking call
		trackingPage = !trackingLink && !domClickEvent, // represents page tracking call
		//doPluginsAsPageLoad = s.linkType === undefined, // Don't use. Not required with new trackingToBeDropped var. only true on first tracking sent.
		notSet = '(not set)', // to identify missing values
		lowerCaseVal = s.w_lCase,
		dVar = s.w_dVar,
		fullLocObj = s.w_getLoc(), // update each call
		//fullLocHostname = lowerCaseVal(fullLocObj.hostname),
		evtTimer = s.w_evtTimer,
		//getSearchTerm = s.w_srchTerm,
		cleanText = s.w_clean,
		appendEvent = s.w_addEvt,
		getQuerystringParam = s.getQueryParam, // local variable for frequent usage in this function
		crossVisitPrtcptn = s.crossVisitParticipation, // local variable for frequent usage in this function
		getValueOnce = s.getValOnce,
		getTimeToCmplt = s.getTimeToComplete,
		//pageDetails = window.pageDetails, // local variable for frequent reference - sync method
		//pageDetails = domClickEvent ? ({}) : s.w_queue.shift() || window.pageDetails, // only shift if not domClickEvent. local variable for frequent reference - new async/timeout queue method for mktg tags and avoid Safari spinner if latency
		//pageDetails = trackingPage ? s.w_queue.shift() || window.pageDetails : (trackingLink ? s.w_tempPageDetails || window.pageDetails : ({})), // links need to get details from any previous page call if available. In OTP window.pageDetails is not necessarily what was passed to trackPage()
		pageDetails = trackingPage ? s.w_queue.shift() || window.pageDetails : (trackingLink ? s.w_queue.shift() || (s.w_tempPageDetails || window.pageDetails) : {}), // links need to get details from any previous page call if available. In OTP window.pageDetails is not necessarily what was passed to trackPage()
		//trackingToBeDropped = !!pageDetails.s_abort || domClickEvent, // intitial assumption
		trackingToBeDropped = !!pageDetails._drop || domClickEvent, // intitial assumption
		pdPageName = cleanText(pageDetails.pageName),
		pdDialogTitle = cleanText(pageDetails.dialogTitle), // captures titles of dialogs in OTP and CTRT code for dynamic campaign landing page. Value is appended to end of page name.
		sPageNameTemp = '',
		pdPageType = lowerCaseVal(pageDetails.pageType), // local var reference
		pageTypeAlt, // for tracking other page types, and applying a rule to classify other pages
		pdProductID = s.w_prodArr(pageDetails.productID || ''), // products string converted into array
		paymentProduct, // for products string where required
		pdPageStep = lowerCaseVal(pageDetails.pageStep, 1), // local var reference
		pdFormName = lowerCaseVal(cleanText(pageDetails.formName)),
		pdFormType = lowerCaseVal(cleanText(pageDetails.formType)),
		pdInSession = false, // if page is in secure/unsecure area
		pdSelfserviceDetails = lowerCaseVal(cleanText(pageDetails.selfserviceDetail)), // for selfservice details tracking
		pdTransactionType = lowerCaseVal(pageDetails.transactionType), // for transactions
		pdTransactionAmount = pageDetails.transactionAmount || '', // for transactions, value should be in nnnn[.nn] format - without thousand separator. decimal is optional, but should be separated by dot (period)
		transactionMerch = [], // for transactions - quantity + details etc.
		pdTransactionQty = pageDetails.transactionQty || '', // for transactions - multiple payments quantity
		pdTransactionDetails = lowerCaseVal(cleanText(pageDetails.transactionDetails || '')), // for transactions - multiple payments quantity
		formNameAlt, // Payments use pdTransactionType as part of form name, instead of formName
		pdTransactionId = pageDetails.transactionID || '', // for transactions - confirm uniqueness - '[CID:...]' on Domino
		prchId = pdTransactionId || '', // local copy for purchaseID manipulation
		pdFormStatus = lowerCaseVal(cleanText(pageDetails.formStatus)), // local var reference
		pdPidQueryString = lowerCaseVal(pageDetails.pidQueryString), // no landing page with pid param instead cmp clickthu a dialog. pid inserted into details to track cmp related vars *au
		savedCustId, // capture visitors using save custid feature, set into navigation area prop59 *au
		pdHlAttributes = pageDetails.hlAttributes, // wonder homeloan customer attribute variables *au
		fromLogin, // used in conjunction with savedCustId, if last page is login and custID is saved track it
		fromDeepLinkMobileApp = lowerCaseVal(pageDetails.deepLinkName), // used to track deeplinks into service area from mobile app quick zone screen
		fromDashboardToAccountActivity = lowerCaseVal(pageDetails.prodName), // used to track popular product tiles clicked from dashboard, applies only for accounts which land on account activity page
		pdSearchTerm = cleanText(pageDetails.searchTerm),
		//pdSearchResults = s.w_cap(pageDetails.searchResults, 5000) || notSet, // reduce result counts for classification
		//pdSearchResults = s.w_cap(String(pageDetails.searchResults > -1 ? +pageDetails.searchResults : ''), 5000) || notSet, // cap to reduce result counts for classification. '0' results as string
		pdSearchResults = String((String(pageDetails.searchResults) || notSet) > -1 ? s.w_cap(pageDetails.searchResults, 5000) : notSet), // need to differentiate between undefined, 0, '0' and ''.
		pdItemName = cleanText(pageDetails.itemName), // item name for faq and atm
		//	cssExperienceMob = s.w_isVis('.pagedetails-experience-mob') || s.w_isVis('.analytics-experience-mob'), // responsive site mobile class visible check. name changed to analytics-... to be more relevant
		//	cssExperienceTab = s.w_isVis('.pagedetails-experience-tab') || s.w_isVis('.analytics-experience-tab'), // responsive site tablet class visible check. name changed to analytics-... to be more relevant
		//	cssExperienceDesktop = s.w_isVis('.analytics-experience-desktop'), // responsive site tablet class visible check. name changed to analytics-... to be more relevant
		//pageExperience = cssExperienceMob === null && cssExperienceTab === null ? 'desktop' : (cssExperienceMob ? 'mob' : (cssExperienceTab ? 'tab' : 'responsive')),
		//cssExperience = cssExperienceMob ? 'mob' : (cssExperienceTab ? 'tab' : 'desktop'), // ORIG
		//	cssExperience = (cssExperienceMob || (cssExperienceMob !== false && cssExperienceDesktop === false && !cssExperienceTab)) ? 'mob' : ((cssExperienceTab || (cssExperienceTab !== false && cssExperienceDesktop === false && !cssExperienceMob)) ? 'tab' : 'desktop'), // TESTING with !desktop options etc.
		//	pageExperience,
		pageExperience = (pageDetails.siteExperience || pageDetails.experience || s.w_getExp()).replace(/^titan$/i, 'mob'), //*au added new experience convention
		//pageExperience = (pageDetails.experience || cssExperienceTab).replace(/^titan$/i, 'mob'),
		//pageExperience = (pageDetails.experience || s.w_exprnc).replace(/^titan$/i, 'mob'),
		//useMobileSuite = /^(mob|tab)/i.test(pageExperience),
		useMobileSuite,
		trackingOverrideEnabled = false, // for trackingOverride
		prpty, // local var for looping properties
		//pdModules = (pageDetails.modules || '').split(','),
		friendlyModules,
		//testTrackingObj = s.w_wtT,
		channelManagerKeywords,
		channelManagerSearchType = false,
		clickMapOid,
		visitorLifecycle,
		visitorLifecycleAware = 'Aware',
		visitorLifecycleEngaged = 'Engaged',
		visitorLifecycleConverted = 'Converted',
		visitorLifecycleRetained = 'Retained',
		pageNameDynamicVariable = 'D=pageName', // zzzzz change to D.pageName to reduce pixel
		dateZero = new Date(0), // old date used to clear cookies
		datePlusOneYear = new Date(+new Date() + 31536000000), // 31536000000 = 365*24*60*60*1000 = 1 year
		//customVisitorID,
		customVisitorID = getQuerystringParam('s_vid', '', fullLocObj.href) || (s.c_rr('s_vid') || s.c_r('s_vid')),
		pageNamePathArray,
		pageBrand = s.w_config.brand || notSet, //notSet,
		pageSite = s.w_config.site || notSet, //notSet,
		//pageStatus = 'unsecure',
		pdPageNumber = pageDetails.pageNumber,
		//repeatCall,
		lastSentPage = s.c_r('lastPg'),
		pdSubSite = cleanText(pageDetails.subSite),
		pdPageNamePrefixPair = cleanText(pageDetails.pageNamePrefixes).split('|'),
		pdPageNamePrefix,
		formTypeOverride,
		pdPreImprs = pageDetails.preImprs,
		eventSerialisationKey,
		nativeAppVersion = s.c_rr('AppVersion'),
		voyagerLoadBalancerID = s.c_rr('LBWeb'), // to identify issues with load balancers in voyager/OTP not reading RESX values correctly
		pidQuerystring,
		isSearchSection, // included to add wbc:search as evar1 for all search related pages
		//wbcfromQuerystring, // used to track search results clicked from suggested search dropdown *au
		isSearchResultLanding, // new search results details tracking var *au
		wbcSearchType, // new search type tracking var *au
		pdFormCompleteStatus = pageDetails.formCompleteStatus, // new search form complete status evar bankwow stp tracking *au
		custTrackingId,
		custTrackingIdPrevious,
		custProfileId,
		custProfileIdPrevious,
		userSwitchedProfile,
		nativeExitToBrowser = customVisitorID && (((/\b(appAction=exit|exitapp=yes)\b/i).test(fullLocObj.href)) || s.c_r('s_exitapp')); // appAction=exit querystring for app safari/browser links that exit the app to desktop-style pages that should go to mob suite to retain app visitor journey

	// default to desktop each call. experience, native app, staff or visible responsive CSS class will override
	s_account = s_accts.desktop[s.w_prod ? 'prod' : 'dev'];
	s.sa(s_account);

	//	pageExperience = (pageDetails.experience || cssExperience).replace(/^titan$/i, 'mob'); // zzzzz replace responsive with desktop? or update pages over time?
	//useMobileSuite = /^(mob|tab)/i.test(pageExperience);
	//useMobileSuite = /^(mob|tab)/i.test(pageExperience) || nativeAppVersion; // cookie e.g. iPadTablet-MobBank-WBC/2.57; set by all MAD webviews. tab browser should go to desktop.
	//useMobileSuite = pageExperience === 'mob' || nativeAppVersion; // cookie e.g. iPadTablet-MobBank-WBC/2.57; set by all MAD webviews. tab native webviews should go to mob.
	useMobileSuite = pageExperience === 'mob' || (nativeAppVersion || nativeExitToBrowser); // cookie e.g. iPadTablet-MobBank-WBC/2.57; set by all MAD webviews. tab native webviews should go to mob. Also check if native app link to safari (e.g. ipad sales pathway - keep sales pathway visit in mobile suite)

	//console.log('pageDetails = ' + JSON.stringify(pageDetails)); // debug
	//console.log('pageExperience = ' + pageExperience); // debug

	//console.log('domClickEvent = ' + domClickEvent); // true when any random click on document
	//console.log('trackingLink = ' + trackingLink); // true when tracking a link
	//console.log('trackingPage = ' + trackingPage); // true when tracking a page
	//console.log('trackingToBeDropped = ' + trackingToBeDropped); // tracking was a random click or will be aborted. based on above booleans.

	// update s.pageURL with every call
	s.pageURL = s.w_cleanURL(fullLocObj.href, 1);

	if (!trackingToBeDropped) {
		// store copy in s object for clicks etc to refer to previous details (pageName etc.)
		s.w_tempPageDetails = pageDetails;

		// default currency for every request. May be overwritten by different currencies in product string transaction value processing
		s.currencyCode = 'AUD';

		// clean short version of transactionID for purchaseID to serialise
		if (/^\[CID:.+\]/i.test(prchId)) {
			// if using CID format, take last 20 chars of CID cookie (if exists)+timestamp
			prchId = /.{1,20}(?=\])/.exec(prchId.replace(/(-|\s|:|^\[CID)/gi, ''))[0];
		}
		// always trim purchaseID to first 20 chars only
		prchId = prchId.substring(0, 20);

		// clean product details if set
		//s.products = (pageDetails.productID ? ';'+lowerCaseVal(pageDetails.productID).replace(/^,+|,+$/g,'').replace(/,+/g,',;') : ''); // legacy pageDetails.productID approach

		//pdProductID = s.w_prodArr(pdProductID);


		// variable to help exclude s_doPlugins tracking from every page click when necessary
		//s.w_nonLink=(typeof s.linkType==='undefined');
		//s.w_pgLoad=(!s.linkType&&s.linkType!=='');
		//s.w_pgLoad = s.linkType===undefined;

		// getPageName plugin settings
		// Default settings
		//s.w_site=notSet;

		// only change experience with full page loads (assists testing)
		//if(s.w_pgLoad){
		//alert('plugins = '+fullLocObj.href);
		//alert('plugins = '+pageDetails.experience);

		// getQueryParam must be first priority to override mob pages from app (hybrid views), cookies must be second so pageDetails doesnt override it
		//s.w_exprnc=(getQuerystringParam('s_experience','',fullLocObj.href)||s.c_r('s_experience')||pageDetails.experience||'none'); // priority to detail passed from app in querystring - so we know if in mob or tab experience
		//s.w_exprnc=(pageDetails.experience||'desktop').replace(/^titan$/i,'mob'); // default is desktop when no value specified. titan is Voyager mob experience

		//if(w_exprnc!=='desktop'){
		//s.c_w('s_experience',s.w_exprnc,new Date(+new Date()+365*24*60*60*1000));
		//}
		//}
		//s.w_path='';
		//s.w_pgStatus='unsecure';

		// Brand specific
		//if (/(?:^|\.)westpac\.com\.au$/i.test(fullLocHostname) || (window.s_w_wbcrgx && window.s_w_wbcrgx.test(fullLocHostname))) {
		if (/(?:^|\.)westpac\.com\.au$/i.test(fullLocObj.hostname) || s.w_config.brand === 'wbc') {
			pageBrand = 'wbc';
			// Site, Path, Status from context -
			//s.w_site = /(.+)(?:\.westpac\.com\.au$)/i.exec(fullLocObj.hostname) || false;
			pageSite = /(.+)(?:\.westpac\.com\.au$)/i.exec(fullLocObj.hostname); // || [];
			//s.w_site = (s.w_site&&s.w_site[1]?s.w_site[1]:notSet);
			pageSite = pageSite ? pageSite[1] : notSet;
			pageSite = s.w_config.site || pageSite;
			//s.w_site='pub';

			// OTP secure, oregon secure forms, oregon secure domino forms -
			//if(pageSite === 'banking' && /^\/+secure\/+banking(?:\/|$)/i.test(fullLocObj.pathname)){
			//if (/\bbanking\b/i.test(pageSite) && /^(?:\/secure\/|\/cust\/wps\/(?:my)?portal\/wol\/)/i.test(fullLocObj.pathname)) {
			if ((/\bbanking\b/i).test(pageSite) && (/^(?:\/secure\/|\/cust\/wps\/(?:my)?portal\/wol\/|\/oregon\/[^\/]+?\/wol\/)/i).test(fullLocObj.pathname)) {
				pdInSession = true;
				//pageStatus = 'secure'; // extended to in/out of session for all platforms and for formType
			}

			// OTP SameView staff emulation mode
			if ((/net$/i).test(pageSite) && (/\/emulationbanking\b/i).test(fullLocObj.pathname)) {
				pdInSession = true;
				userSwitchedProfile = true; // in staff sameview, staff change between different profiles constantly

				// Change pageSite to 'banking' to consolidate OTP page names when in emulation in prod (necessary due to different domains)
				if (s.w_prod) {
					pageSite = 'banking';
				}

				// if staff assist emulation/'SameView' mode, set event60 for segmentation and switch to staff suite
				//if (!!document.getElementById('emulation') || s.c_r('emuMod')) { // was using s.w_emulMde... and initially 'analytics-emulation-mode' ID in FiServ FBS
				//if (/^(?:\/voyagerRM\/emulationbanking\b)/i.test(fullLocObj.pathname)) {
				//s_account = useMobileSuite ? s.w_acctStfMob : s.w_acctStf;
				s_account = s_accts[useMobileSuite ? 'mob' : 'desktop'][s.w_prod ? 'staff' : 'dev'];
				s.sa(s_account);

				if (getValueOnce(s.c_rr('s_wbc-pi'), 'emul', 30, 'm')) { // fire event once per customer profile ID, only when cookie unavailable (in session)
					appendEvent(60);
				}
				//}
			}

			//if(/online/i.test(pageSite)){
			//if(pageSite === 'online'){
			if ((/\bonline\b/i).test(pageSite) && (/^(?:\/dforms\/forms\/secure\/|\/cust\/wps\/(?:my)?portal\/wol\/|\/oregon\/[^\/]+?\/wol\/)/i).test(fullLocObj.pathname)) {
				pdInSession = true;
			}

			// zzzzz confirm if Oregon form name shortening required in this s_code version (for Oregon / online.westpac.com.au)
			// replace long names on Oregon forms
			/*
			if (/\s(online|dev)\s/i.test(s.w_codeVers)) { // if Oregon platform JS (s.w_codeVers) (used in online and banking subdomains) reduce long form names
			pdFormName = cleanText(pdFormName
			.replace(/(.*?\b.*?\b.*)\b(.*)\b\1\b/g, '$1$2') // replacing duplicate sets of words
			.replace(/\u00ae/g, '') // \u00ae = unicode Registered symbol ® - escaped for compatibility
			.replace(/\bwestpac\b/gi, '')
			.replace(/\bsingapore airlines\b/gi, 'sg air')
			.replace(/\bbusiness\b/gi, 'bus')
			.replace(/\band\b/gi, '&')
			.replace(/\baltitude\b/gi, 'alt')
			.replace(/\bmastercard\b/gi, 'mc')
			.replace(/\bvisa card\b/gi, 'visa')
			.replace(/\bamerican express(?: cards?\b)?/gi, 'amex')
			.replace(/\bplatinum\b/gi, 'plat'));
			}
			 */
		}

		// Set values for microsites. This may be commented out for other domains
		/*
		// phase 2 microsites TBA -
		if(/(?:^|\.)rubyconnection\.com\.au$/i.test(fullLocObj.hostname)){
		s.w_brand='wbc';
		s.w_site='ruby';
		if(/^\/+forum(?:\/|$)/i.test(fullLocObj.pathname)){
		s.w_pgStatus='secure'; // Confirm
		}
		}
		if(/(?:^|\.)davidsoninstitute\.edu\.au$/i.test(fullLocObj.hostname)){
		s.w_brand='wbc';
		s.w_site='dav';
		if(/^\/+signin(?:\/|$)/i.test(fullLocObj.pathname)){
		s.w_pgStatus='secure'; // Confirm
		}
		}
		 */

		// Example code for other group domains. This would be in another scode version
		//if (s.w_config.brand === 'stg') {
		//	pageBrand = 'stg';
		//	pageSite = s.w_config.site || notSet;
		//}

		// check if analytics JS has tested current URL as authenticated location
		if (s.w_config.authUrl) {
			pdInSession = true;
		}

		// Consider setting detected session status into property in pageDetails for reference/marketing tags? otherwise not available outside this function
		//pageDetails.inSession = pdInSession;

		//since search moved from search.westpac to .com.au/search.. pageSite needs to be set here *au

		isSearchSection = /search/i.test(pageDetails.siteSection);
		if (isSearchSection) {
			pageSite = 'search';
		}

		// Leftmost value for getPageName plugin based on platform/experience and URL details
		// s.siteID=s.w_brand+':'+s.w_exprnc+':'+s.w_site; // with experience in pageName
		//s.siteID = pageBrand + ':' + pageSite; // without experience in pageName
		//s.siteID = pageBrand + ':' + pageSite + (pdSubSite ? ':' + pdSubSite : ''); // with subSite like COL - brand:site:subSite:section (set as colon in subSiteSeparator)
		s.siteID = pageBrand + ':' + pageSite + (pdSubSite ? (pageDetails.subSiteSeparator || '-') + pdSubSite : ''); // with subSite like APPS - brand:site-subSite:section.


		// get s_vid (was s_visitorID) parameter passed from app wrapper
		//customVisitorID = getQuerystringParam('s_vid', '', fullLocObj.href) || (s.c_rr('s_vid') || s.c_r('s_vid')); // s_vid may be set directly in real cookie by apps
		//if (customVisitorID && customVisitorID !== '_custsvid_') { // don't set visitor ID to a generic placeholder vid from NBA links inserted in apps etc. may not need to check for _custsvid_ now that custom VID set in cookie by apps - confirm also set for e.g. NBA links from app
		if (customVisitorID) { // don't set visitor ID to a generic placeholder vid from NBA links inserted in apps etc.
			s.visitorID = customVisitorID;
			// extend cookie for 1 year -
			s.c_w('s_vid', customVisitorID, datePlusOneYear);
		}

		if (/^dev_/.test(customVisitorID)) { // if starts with dev_ change to respective dev suite. native apps may use prod target hard-coded to dev suite for native tracking only - hybrid screen tracking then goes to prod.
			s.w_prod = false;
			s_account = s_accts[useMobileSuite ? 'mob' : 'desktop'].dev;
			s.sa(s_account);
		}

		if (nativeExitToBrowser) {
			// keep cookie for 2 hours to tie this visit to a native mobile app link to safari
			s.c_w('s_exitapp', '1', new Date(+new Date() + 7200000));
		}

		// switch to timestamped suite for all mobile, tablet, app and hybrid experiences (including those not hitting JS, eg. tabapp, for clarity in testing)
		//if (/^(?:mob.*|tab.*)/i.test(pageExperience)) { // 'titan' from OTP is changed to 'mob' for consistency
		if (useMobileSuite) { // 'titan' from OTP is changed to 'mob' for consistency
			// switch to timestamped suite
			if (s_accts.mob.timestamp) {
				s.timestamp = Math.round(new Date() / 1000);
			}

			// switch between dev and prod timestamped suites based on domain list in config at top
			//s_account = s.w_acctMob;
			s_account = s_accts.mob[s.w_prod ? 'prod' : 'dev'];
			s.sa(s_account);

			//if (customVisitorID) {
			//if (customVisitorID || s.c_rr('AppVersion')) { // added for Corp - if apps dont have native tracking, they should at least have this cookie. Android may sync this with browsers outside the app??
			//if (s.c_rr('AppVersion')) { // added for Corp - if apps dont have native tracking, they should at least have this cookie. Android may sync this with browsers outside the app??
			// View mode if app visitorID detected
			//s.prop12 = 'native app';
			//s.prop12 = 'D="native app:"+AppVersion'; // dynamic cookie names must start with 's_'
			//s.prop12 = nativeAppVersion ? 'native app:' + nativeAppVersion : ''; // eg. native app:iPadTablet-MobBank-WBC/2.57;
			s.prop12 = (nativeAppVersion || nativeExitToBrowser) ? 'native app:' + (nativeAppVersion || '(exit app)') : ''; // eg. native app:iPadTablet-MobBank-WBC/2.57;
			//}

			// if app/hybrid cookie has dev_ prefix, force to dev suite
			/*
			if (/^dev_/.test(customVisitorID)) { // move this out of mobile-only condition. if starts with dev_ change to respective dev suite for current experience? Maybe object of suite names for relevant experience?
			//s_account = s.w_acctMobDev;
			s_account = s_accts[useMobileSuite ? 'mob' : 'desktop'].dev;
			s.sa(s_account);
			}
			 */
			//}

			// cookie passed from app to connect hybrid page views. now will be querystring - Android can't reliably pass cookie
			//s.visitorID=s.c_rr('s_vid');
			//alert(fullLocObj.href);
			//s.visitorID=(getQuerystringParam('s_vid','',fullLocObj.href)||s.c_r('s_vid'));
		}

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
		if (pdPageType && pdFormName) {
			//if (pdPageStep === 'start') {
			//if (pdPageStep === 'start' && pdPageType !== 'login') { // login form start step breaks long-short formType setting in the middle of other form journeys
			if ((pdPageStep === 'start' || pdPageStep === 'intro') && pdPageType !== 'login') { // login form start step breaks long-short formType setting in the middle of other form journeys. intro pageStep forces any pages prior to a start step to use a static formType (not crossover like long-short etc.)
				s.c_w('frmTypOv', pdPageType + pdFormName + '-' + pdFormType); // prefix should also include pdSubSite to avoid clash on multi-sites?
			} else {
				formTypeOverride = /(.*)-(.*)/.exec(s.c_r('frmTypOv'));
				//console.log('formTypeOverride[1] = ' + formTypeOverride[1]);
				//console.log('formTypeOverride[2] = ' + formTypeOverride[2]);

				// if the override matches the current form
				if (formTypeOverride && formTypeOverride[1] === pdPageType + pdFormName) { // prefix should also include pdSubSite to avoid clash on multi-sites?
					pdFormType = formTypeOverride[2] + (pdFormType && pdFormType !== formTypeOverride[2] ? '-' + pdFormType : '');
				}
			}
		}
		//console.log('pdFormType = ' + pdFormType);

		// Dynamic pageName prefix for in- and out-of-session pages to uniquely identify the page in separate path/section
		// Prefix value should be two pipe delimited values. The values can be matching, or either value may be blank.
		pdPageNamePrefix = pdPageNamePrefixPair.length === 2 ? cleanText(pdInSession ? pdPageNamePrefixPair[0] : pdPageNamePrefixPair[1]) : '';

		// Payments use pdTransactionType as part of page and form name, instead of formName
		//formNameAlt = pdFormName || pdTransactionType;
		formNameAlt = pdFormName ? (pdFormName + (pdFormType ? ':' + pdFormType : '')) : pdTransactionType; // to switch short/long form type when required


		// set pageName syntax for forms
		if (formNameAlt || (/^(?:tool|survey|selfservice|registration|payment|login|enquiry|application)$/).test(pdPageType)) { // pageType considered to be a form, use form syntax for pageName
			formNameAlt = formNameAlt || notSet;
			sPageNameTemp = s.siteID + ':' + (pdPageType || notSet) + ':' + formNameAlt + (pdPageName ? ':' + pdPageName : ''); // with subSite coming from s.siteID
			//sPageNameTemp = s.siteID + ':' + (pdSubSite ? pdSubSite + ':' : '') + (pdPageType || notSet) + ':' + formNameAlt + (pdPageName ? ':' + pdPageName : '');
		} else {
			if (pdPageName) {
				// orig name code -
				//sPageNameTemp = s.siteID + ':' + pdPageName;
				// now with switch for in/out of session prefix -
				//sPageNameTemp = s.siteID + ':' + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName;
				//sPageNameTemp = s.siteID + ':' + (pdSubSite ? pdSubSite + ':' : '') + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName;
				sPageNameTemp = s.siteID + ':' + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName; // with subSite coming from s.siteID
			} else {
				// else use getPageName plugin to get details directly from URL
				//sPageNameTemp = s.getPageName(s.pageURL); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				//sPageNameTemp = decodeURIComponent(s.getPageName(s.pageURL)); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				//sPageNameTemp = decodeURIComponent(s.getPageName(s.pageURL)).replace(/^(.+?:.+?:)/, '$1' + (pdSubSite ? pdSubSite + ':' : '')); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				sPageNameTemp = decodeURIComponent(s.getPageName(s.pageURL)); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				//console.log(sPageNameTemp);
			}
		}

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

		// pageName eVar
		s.eVar21 = pageNameDynamicVariable;
		// hierarchy
		s.hier1 = pageNameDynamicVariable;

		// common event58 for branchdetail, atmdetail, teamdetail pages
		if (/^(?:branch|atm|team)detail$/.test(pdPageType)) {
			//s.events = s.apl(s.events, 'event58', ',', 2); // using shorter function call like appendEvent(58);
			appendEvent(58);
		}

		// this should work for identifying both application and enquiry forms for serialisation
		eventSerialisationKey = ((pdProductID && pdProductID[0] && pdProductID[0].prod) || '') + pdFormName; // if the product or form name changes between start and complete steps, or journey crosses domain origin (localStorage), the serialisation won't reset at complete step in that serial range (e.g. visit).
		eventSerialisationKey = eventSerialisationKey ? eventSerialisationKey + pdFormType : false; // without formType, the same product or form name in a different journeys could be deduped, e.g. skipping some start events. If prod and form are blank, dont use only formType - it could dedupe many other forms of the same type. Would require subSite in key if same pageType + formName shouldn't be joined across different subSite + formType (e.g. should long-short form across two different subSites match?)

		// determine tracking scenario
		switch (pdPageType) {
			case 'form':
				if (pdPageStep && pdTransactionId) {
					s.transactionID = pdPageStep + '_' + pdTransactionId;
					s.eVar39 = 'D=xact';
				}
				if (pdPageStep === 'save') {
					//s.transactionID = pdTransactionId ? 'save_' + pdTransactionId : '';
					//s.eVar39 = 'D=xact';
					appendEvent(73);
				}
				if (pdPageStep === 'retrieve') {
					appendEvent(74);
				}
				break;
			case 'tool':
				//s.eVar23 = 'tool:'+pdFormName; // remove all these from switch cases, capture once for all forms
				//s.prop23 = 'D=v23';
				//s.eVar62 = lowerCaseVal(pdFormName,1);
				s.eVar62 = pdFormName || notSet;
				s.prop62 = dVar(62);
				appendEvent(68);
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
					s.eVar28 = s.w_fixZero(pageDetails.surveyScore) || notSet;
					appendEvent(64);
				}
				break;
			case 'selfservice':
				//s.eVar23 = 'selfserv:'+pdFormName;
				//s.prop23 = 'D=v23';
				//s.eVar38 = lowerCaseVal(pdFormName,1);
				s.eVar38 = pdFormName || notSet;
				s.prop38 = dVar(38);

				s.eVar64 = lowerCaseVal(pageDetails.externalSiteName);

				switch (pdPageStep) {
					case 'start':
						appendEvent(35);
						break;
					case 'complete':
						appendEvent(36);
						if (pdSelfserviceDetails) {
							s.eVar46 = pdSelfserviceDetails || notSet;
							s.prop46 = dVar(46);
							// self service detail var to capture type of self service, introduced as part of Nov 16E1  Wlive release  *au
						}
						break;
					case 'forgotpasswordstart':
						appendEvent(48);
						appendEvent(35);
						break;
					case 'forgotpasswordcomplete':
						appendEvent(36);
						break;
				}
				break;
			case 'sitesearch':
				//if(s.w_pgLoad){ // getValOnce would be cleared on every page click/doPlugins in this pageType case required???? test.

				/*
				if(s.w_pgLoad){
				alert(1);
				s.w_trackLinkIntSearch(); // move to linkTracking section to run after every trackPage
				}
				 */

				//s.eVar14 = getValueOnce(lowerCaseVal(getQuerystringParam('query','',fullLocObj.href)).replace(/\d/g,'#').replace(/\s+/g,' ').replace(/^\s|\s$/g,''),'s_stv',0); // getValOnce after #. Hash only 5+ digits?
				//s.eVar14 = getValueOnce(lowerCaseVal(pageDetails.searchTerm,1).replace(/\d/g,'#').replace(/\s+/g,' ').replace(/^\s|\s$/g,''),'s_stv',0); // getValOnce after #. Hash only 5+ digits?
				s.eVar14 = getValueOnce(s.w_srchTerm(pdSearchTerm), 'stv', 30, 'm'); // getValOnce after #. Hash only 5+ digits?
				if (s.eVar14) {
					s.prop14 = dVar(14);
					// split search term into keywords
					s.list1 = cleanText(s.eVar14.replace(/[^a-z]+/gi, ' ')).replace(/\s/g, ','); // ,4); // for list prop, remove all chars outside a-z
					//s.eVar15 = pageBrand + ':' + (pageSite==='banking'?'secure':'public'); // OTP doesnt have site search
					appendEvent(14);
					//s.eVar30 = 'sitesearch:' + pdSearchResults; // use pdPageType here in place of text sitesearch string
					s.eVar30 = pdPageType + ':' + pdSearchResults;
					//if(s.eVar30==='sitesearch:0'){
					//console.log(pdSearchResults);
					//if (s.eVar30 === pdPageType + ':0') {
					if (pdSearchResults === '0') {
						appendEvent(16);
					}
				} //else{
				//	s.eVar14 = notSet;
				//}
				//}
				break;
			case 'faqsearch':
				// pageDetails passed from function call on faq search result div load
				s.eVar58 = getValueOnce(s.w_srchTerm(pdSearchTerm), 'faq', 30, 'm');
				if (s.eVar58) {
					s.prop58 = dVar(58);
					appendEvent(65);
					//s.eVar30 = 'faqsearch:' + pdSearchResults;
					s.eVar30 = pdPageType + ':' + pdSearchResults;
				}
				break;
			case 'branchsearch':
				// pageDetails passed from function call on branch search result div load
				sPageNameTemp += ':searchresults';

				//if(s.w_pgLoad){ // getValOnce would be cleared on every page click/doPlugins in this pageType case
				//s.eVar44 = getValueOnce(lowerCaseVal(pageDetails.searchTerm,1).replace(/\d/g,'#').replace(/\s+/g,' ').replace(/^\s|\s$/g,''),'s_brnch',0); // hash numbers, postcodes
				//s.eVar44 = getValueOnce(s.w_srchTerm(),'s_brnch',0); // hash numbers, keep postcodes in function
				s.eVar44 = s.w_srchTerm(pdSearchTerm); // hash numbers, keep postcodes. not val once, every time
				if (s.eVar44) {
					s.prop44 = dVar(44);
					s.prop45 = pageDetails.searchFilters || notSet;
					appendEvent(57);
					//s.eVar30 = 'branchsearch:' + pdSearchResults;
					s.eVar30 = pdPageType + ':' + pdSearchResults;
					//if(s.eVar30==='branchsearch:0'){
					//if (s.eVar30 === pdPageType + ':0') {
					if (pdSearchResults === '0') {
						appendEvent(16);
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
						appendEvent(51);
						break;
					case 'complete':
						appendEvent(52);
						//appendEvent(46); // this should be set automatically by session/cookie server-side process in OTP/online banking
						break;
				}
				break;
			case 'product':
				//s.products = ';' + (pageDetails.productID||notSet).replace(/,/g,',;');
				switch (pdPageStep) {
					case 'view':
						appendEvent(13);
						break;
					//case 'selection': // product selection event/page not applicable/required
					//	appendEvent(32);
					//	break;
					case 'comparison':
						appendEvent(30);
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
					'prod': 'payment:' + (pdTransactionType || notSet),
					//'events' : ((pdPageStep === 'complete' || pdPageStep === 'effectpayment') ? 'payment:' + (pdTransactionType || notSet) + '=' + pdTransactionAmount : '') // complete or effectpayment should set the payment/product details.
					'events': /^(complete|effectpayment|bulkpaymentapproval)$/.test(pdPageStep) ? 'payment:' + (pdTransactionType || notSet) + '=' + pdTransactionAmount : '', // complete or effectpayment should set the payment/product details.
					//'merch' : pdTransactionQty ? 'options=payment:qty:' + pdTransactionQty : ''
					'merch': transactionMerch.length ? 'options=' + transactionMerch.join('+') : ''
				}
				];

				switch (pdPageStep) {
					case 'start':
						appendEvent(38);
						pdProductID = paymentProduct;
						break;
					//case 'pinauthorisation':
					//	appendEvent(42); // not used
					//	break;
					case 'complete':
						appendEvent(39);
						pdProductID = paymentProduct;

						// removed to reduce reference IDs. payment ref not required
						//s.transactionID = pdTransactionId ? 'pay_' + pdTransactionId : ''; // prefix to avoid duplicates with other applications etc. only capture ID if set
						//s.eVar39 = 'D=xact';

						//s.purchaseID = prchId; // serialise all events with revenue/value. confirm uniqueness. maybe only capture in transactionID/xact
						//appendEvent('purchase'); // TODO. serialise payments to de-dupe amounts?

						break;
					case 'businessstart':
						// payment submitted/created, awating approval. business OTP 1.2
						appendEvent(42);
						pdProductID = paymentProduct;
						break;
					case 'createpayment':
						// payment submitted/created, awating approval. business OTP 1.2
						appendEvent(43);
						pdProductID = paymentProduct;
						break;
					case 'authorisepayment':
						// intermediate approval step. business OTP 1.2
						//s.eVar42 = lowerCaseVal(pageDetails.businessAuthType, 1); // not used
						//s.prop42 = dVar(42);
						appendEvent(44);
						pdProductID = paymentProduct;
						break;
					case 'effectpayment':
						// final approval step, payment processed/scheduled. business OTP 1.2
						appendEvent(45);
						pdProductID = paymentProduct;
						break;
					case 'bulkpaymentapproval':
						// final bulk approval step. business OTP 1.2 step name also above, in setting paymentProduct
						appendEvent(37); // bulk payment approval completed step
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
					appendEvent(46);
				}

				break;
			case 'logout':
				//s.eVar23 = 'logout:'+s.eVar6+':'+pdFormName; // does the brand from the URL make sense here? Is it required, or should it be external site name?
				s.eVar40 = 'logged out';
				//s.prop40 = 'D=v40';
				break;

			/*
			case 'livechat': // triggered on live person popup window, not on page or click
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
						appendEvent(53);
						// serialise enquiry start
						appendEvent('event28' + s.w_serialise(eventSerialisationKey, pdPageStep));
						break;
					case 'complete':
						appendEvent(54);
						// serialise enquiry complete
						appendEvent('event29' + s.w_serialise(eventSerialisationKey, pdPageStep));

						//s.transactionID='enq_'+pdTransactionId; // prefix to avoid duplicates with other applications etc.
						s.transactionID = pdTransactionId ? 'enq_' + pdTransactionId : ''; // prefix to avoid duplicates with other applications etc. only capture ID if set
						s.eVar39 = 'D=xact';

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
					s.transactionID = pdPageStep + '_' + pdTransactionId;
					s.eVar39 = 'D=xact';
				}

				switch (pdPageStep) {
					case 'start':
						appendEvent(21);
						appendEvent('event26' + s.w_serialise(eventSerialisationKey, pdPageStep));

						//console.log('s.events = ' + s.events);
						//s.eVar31 = 'start';

						break;
					case 'save':
						appendEvent(24);
						break;
					case 'retrieve':
						appendEvent(23);
						break;
					case 'complete':
						appendEvent(22);
						// mark serial stamp as complete once hit. re-use same stamp if starting same form again if not completed, generate new serial if form has been completed (in the same origin)
						appendEvent('event27' + s.w_serialise(eventSerialisationKey, pdPageStep));
						//console.log(eventSerialisationKey);

						s.transactionID = pdTransactionId;
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

						s.purchaseID = prchId; // confirm uniqueness
						//s.events = s.apl(s.events,'purchase',',',2);
						appendEvent('purchase'); // only when approved? (not declined, referred, customer declined). Only really used for serialising, so maybe always fire?...

						//s.eVar31 = 'stop';
						//s.eVar32 = 'start';
						//s.eVar33 = 'stop';

						// apply transactionType and transactionAmount against first product if legacy values exist
						if (pdProductID && pdProductID[0] && !pdProductID[0].events) {
							//pdProductID[0].events=lowerCaseVal(pdTransactionType,1)+(pdFormStatus?':'+pdFormStatus:'')+'='+pdTransactionAmount; // apply status directly to first product
							//pdProductID[0].events=lowerCaseVal(pdTransactionType,1)+'='+pdTransactionAmount; // generic pdFormStatus applied during prod string processing
							pdProductID[0].events = (pdTransactionType || notSet) + '=' + pdTransactionAmount; // generic pdFormStatus applied during prod string processing
						}

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

						// bankwow form complete status, will be set on successful confirmation and exception pages as well *au
						// example1 accStatus:opened|proStatus:created|verStatus:idv|exceCode:0001
						// example2 accStatus:not_opened|proStatus:not_created|verStatus:idnp|exceCode:34d4
						if (pdFormCompleteStatus) {
							s.w_setFormStatusDetail(pdFormCompleteStatus);
						}


						//if (/^approved($|:upsell|:downsell$)/i.test(pdFormStatus)) {
						if (/^approved(?!:downselldeclined)/i.test(pdFormStatus)) {
							appendEvent(18);
						}
						//if (pdFormStatus === 'declined') {
						if (/^declined/i.test(pdFormStatus)) {
							appendEvent(19);
						}
						//if (pdFormStatus === 'referred') {
						if (/^referred/i.test(pdFormStatus)) {
							appendEvent(20);
						}
						if (pdFormStatus === 'approved:downselldeclined') {
							appendEvent(25);
						}

						break;
				}
				break;
			case 'servererror':
				// 404, 500 etc. on page load
				// align pageName for errors to correspond to similar section details of other pages
				sPageNameTemp = s.siteID + ':err:' + lowerCaseVal(pageDetails.errorCode, 1) + ':' + s.pageURL;
				//console.log(sPageNameTemp);
				pageNamePathArray = sPageNameTemp.split(':').slice(0, 4); // provide truncated path for section details, if error page (remove URL)
				if (String(pageDetails.errorCode) === '404') {
					s.pageType = 'errorPage';
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
		sPageNameTemp = s.w_valReplace(s.w_valReplace(sPageNameTemp, s.w_lStor('get', 'analytics_pageNameReplace')), pageDetails.pageNameReplace); // global + local replace
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
		//s.w_pathArr = pageNamePathArray; // for use outside this function
		// New version with experience removed from pageName -
		s.eVar6 = pageNamePathArray[0]; // Brand
		s.prop6 = dVar(6);
		//if (pageNamePathArray[1]) { // Site
		s.eVar1 = pageNamePathArray.slice(0, 2).join(':');
		s.prop1 = dVar(1);
		//}
		//if (pageNamePathArray[2]) { // Site section
		s.eVar2 = pageNamePathArray.slice(0, 3).join(':');
		s.prop2 = dVar(2);
		if (s.eVar2 === sPageNameTemp) {
			s.eVar2 = s.prop2 = pageNameDynamicVariable;
		}
		//}
		//if (pageNamePathArray[3]) { // Sub section
		s.eVar3 = pageNamePathArray.slice(0, 4).join(':');
		s.prop3 = dVar(3);
		if (s.eVar3 === sPageNameTemp) {
			s.eVar3 = s.prop3 = pageNameDynamicVariable;
		}
		//}
		//if (pageNamePathArray[4]) { // Sub sub section
		s.eVar4 = pageNamePathArray.slice(0, 5).join(':');
		s.prop4 = dVar(4);
		if (s.eVar4 === sPageNameTemp) {
			s.eVar4 = s.prop4 = pageNameDynamicVariable;
		}
		//}
		//if (pageNamePathArray[5]) { // Sub sub sub section
		s.eVar5 = pageNamePathArray.slice(0, 6).join(':');
		s.prop5 = dVar(5);
		if (s.eVar5 === sPageNameTemp) {
			s.eVar5 = s.prop5 = pageNameDynamicVariable;
		}
		//}

		// server from full domain
		//s.server = lowerCaseVal(fullLocObj.hostname);
		s.server = lowerCaseVal(fullLocObj.hostname + (/\s(banking|dev)\s/i.test(s.w_codeVers) && voyagerLoadBalancerID ? '-' + voyagerLoadBalancerID : '')); // capture server/load balancer ID R01 = Ryde, WS01 = Western Sydney

		// experience from app/pageDetails
		//s.eVar7=pageExperience; // mob/mobapp/tab/tabapp is mobile suite, everything else is desktop
		//s.eVar7 = s.linkName ? 'link' : pageExperience; // switch to 'link' for link tracking
		// switch to '(link)' for link tracking where experience may not be set/available in pageDetails?
		//s.eVar7 = s.linkName ? (pageExperience || '(link)') : pageExperience;
		s.eVar7 = pageExperience;
		s.channel = dVar(7);

		// standard form name details
		//formNameAlt=(pdFormName||pdTransactionType); // Payments use pdTransactionType as part of form name, not the formName from pageDetails
		if (pdPageType && formNameAlt) {
			//s.eVar23 = s.eVar6+':'+pdPageType+':'+formNameAlt; // excludes sub-domain, e.g. - wbc:application
			s.eVar23 = s.siteID + ':' + pdPageType + ':' + formNameAlt; // includes sub-domain, e.g. - wbc:online:application // if this matches v3, D=v3 could be used here
			s.prop23 = dVar(23);
			if (pdPageStep === 'start') {
				appendEvent(55);
			}
			if (pdPageStep === 'complete') {
				appendEvent(56);
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
		s.prop7 = pdPageType || pageTypeAlt;

		// track page number for search results etc.
		s.prop8 = pdPageNumber ? ((pdPageType || notSet) + ':' + pdPageNumber) : '';

		// Visit number
		//s.eVar8 = s.w_cap(s.getVisitNum(365), 1000);
		s.eVar8 = s.w_cap(s.getVisitNum(365), 1000) + s.w_extCkSfx; // appends if external cookie data
		//if(s.eVar8>1000){
		//	s.eVar8='1000+';
		//}

		// days since last visit
		//s.eVar29=s.getDaysSinceLastVisit('s_lv',1);
		//s.eVar29=(s.eVar29==='0'?'zero':s.eVar29);
		//s.eVar29=s.w_fixZero(s.eVar29);
		s.eVar29 = s.w_cap(s.w_fixZero(s.getDaysSinceLastVisit('s_lv', 1)), 1000) + s.w_extCkSfx; // appends if external cookie data
		//if(s.eVar29>1000){
		//	s.eVar29='1000+';
		//}

		// visitor id
		s.eVar25 = s.prop25 = (customVisitorID ? 'D=vid' : 'D=s_vi'); // if s.visitorID passed from mobile app to hybrid pages, variable will be vid, else use FP-cookie name
		//s.prop25 = s.eVar25;

		// generic account ID - value in cookie should have a prefix like 'corp_'. These will get overwritten through different sites, but could be tied together with visitor ID etc.
		// included for CORP and other sites that require tracking ID
		s.eVar34 = s.prop34 = 'D=s_wbc-gi';
		//s.prop34 = s.eVar34;

		// customer tracking ID
		s.eVar35 = s.prop35 = 'D=s_wbc-ti'; // cookie is set at .westpac.com.au
		//s.prop35 = s.eVar35;

		// business account ID
		//s.eVar41 = 'D=BUS-ACCOUNT-ID'; // was originally proposed for OTP 1.2. currently not required
		//s.prop41 = dVar(41);

		// customer otp profile
		//s.eVar47 = getValueOnce(s.c_rr('s_wbc-pi'), 'pi', 30, 'm'); // cookie is set at full domain - banking.westpac.com.au. Could be dynamic value if these cookies available at .westpac.com.au
		s.eVar47 = s.prop47 = 'D=s_wbc-pi';
		//s.prop47 = dVar(47);

		// Webseal ID proxy
		//s.eVar48 = getValueOnce(s.c_rr('s_wbc-ses'), 'ses', 30, 'm'); // cookie is set at banking.westpac.com.au. wouldnt be able to access from smetrics if was httpOnly, as set on banking.westpac.com.au ...
		//s.prop48 = dVar(48);
		s.eVar48 = s.prop48 = 'D=s_wbc-ses';

		// customer type segment
		//s.eVar50 = getValueOnce(s.c_rr('s_wbc-seg'), 'seg', 30, 'm'); // cookie is set at .westpac.com.au, but value is short and may be useful on page
		//s.prop50 = dVar(50);
		//s.eVar50 = s.prop50 = 'D=s_wbc-seg';
		s.eVar50 = s.prop50 = s.c_rr('s_wbc-seg'); // if values are short capture as-is, else use dynamic value to get value server-side.

		// detect OTP/online banking profile switching
		custTrackingId = s.c_rr('s_wbc-ti');
		if (custTrackingId) {
			custTrackingIdPrevious = s.c_r('ti');
			s.c_w('ti', custTrackingId); // update to current
		}
		custProfileId = s.c_rr('s_wbc-pi');
		if (custProfileId) {
			custProfileIdPrevious = s.c_r('pi');
			s.c_w('pi', custProfileId); // update to current
		}
		if (custTrackingId && custTrackingId === custTrackingIdPrevious && custProfileId && custProfileIdPrevious && custProfileId !== custProfileIdPrevious) {
			userSwitchedProfile = true;
			s.prop59 = '(switch profile)';
			//console.log('Profile switched'); // detect when only switching profiles and landing on dashboard vs. a new login to dashboard
		}

		// occurs on dashboard/or any landing page once they sign in? *au *TODO-A
		savedCustId = s.c_rr('RememberMe');
		fromLogin = /olb:enter your customer id/i.test(lastSentPage);
		if (savedCustId === 'Yes' && fromLogin) {
			s.prop59 = '(saved customer-id)';
		}

		// page status
		//s.prop40 = pageStatus;
		//s.prop40 = pdInSession ? 'secure' : 'unsecure'; // switching based on URL
		s.prop40 = pdInSession ? 'logged in' : 'public'; // switching based on URL

		// site language from page if set
		//s.eVar63 = lowerCaseVal(pageDetails.language||'en'); // only captured in prop63
		s.prop63 = lowerCaseVal(pageDetails.language || 'en');
		//s.prop63 = 'D=v63';

		// Day Of Week, Time Of Day
		//var s_tpA = s.getTimeParting('s','+10');
		//s.eVar10 = s_tpA[1]+'|'+s_tpA[2]; // Adobe orig converted format
		s.eVar10 = s.w_timePart(); // local time in shorter format
		s.prop10 = dVar(10);

		// External Campaigns
		//if(!s.campaign){
		//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
		s.campaign = getValueOnce(lowerCaseVal(getQuerystringParam('cid', '', fullLocObj.href)), 's_cid', 30, 'm'); // getValueOnce only if data will be sent, else value may not be sent
		//}
		if (s.campaign) {
			s.eVar16 = 'D=v0';
			s.eVar17 = 'D=v0';
			s.eVar18 = crossVisitPrtcptn(s.campaign, 's_ev18', '30', '5', '>', 'event22'); // this is cleared every time event22 fires. i.e. Application Complete step
		}

		//console.log('ORIG s.list2  = ' + s.list2); // impressions from banner cookie related to previous page, collected after it loaded
		//console.log('pdPreImprs    = ' + pdPreImprs); // any other impressions passed for the current page after trackPage was called, but before it completed (and scanning links)
		pdPreImprs = pdPreImprs ? pdPreImprs.split(',') : [];
		for (prpty = 0; prpty < pdPreImprs.length; prpty++) {
			s.list2 = s.apl(s.list2, pdPreImprs[prpty], ',', 2);
		}
		//console.log('NEW s.list2   = ' + s.list2); // combined list of impressions for previous page
		if (s.list2) {
			s.w_addEvt(11);
		}

		// Internal banner clicks
		pidQuerystring = lowerCaseVal(getQuerystringParam('pid', '', fullLocObj.href)) || pdPidQueryString; // pdPidQueryString comes from pageDetails *au
		//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)

		// Internal banner clicks for mobile when pid is not a query parameter 
		/* examples 
		/dashboard#/products/credit-card-type-list/pid=nba:CTRT553:MBAccountOverviewBottomDISB
		/dashboard#/products/credit-card-list/Low rate card/pid=nba:CTRT553:MBAccountOverviewBottomDISB
		/dashboard#/products/product-detail/btsfl_product/pid=nba:CTRT553:MBAccountOverviewBottomDISB
		*/
		var getPidRegex,
			currentHashUrl,
			pidVal;

		getPidRegex = /(?:pid=)(nba:(?:.*?\/)|(?:.*))/
		currentHashUrl = fullLocObj.hash;

		pidFromHashUrl = getPidRegex.exec(currentHashUrl);
		if (pidFromHashUrl) {
			pidQuerystring = pidFromHashUrl[1];
		}

		s.eVar22 = getValueOnce(pidQuerystring, 's_pid', 30, 'm');
		//}

		// count every pid click for comparison to getValueOnce count
		if (pidQuerystring) {
			appendEvent(10);
		}

		// wonder home loan attributes, captured on wonder landing page *au
		if (pdHlAttributes) {
			var properties,
				offers,
				customer,
				occupancy,
				formattedAttributes;

			offers = pdHlAttributes.offers;
			customer = pdHlAttributes.customer;
			occupancy = pdHlAttributes.occupancy;
			properties = pdHlAttributes.properties;

			formattedAttributes = (properties ? properties + '|' : '') + offers + '|' + customer + '|' + occupancy

			s.eVar68 = 'wonder_' + formattedAttributes
		}

		//if(s.eVar22&&!s.eVar65){
		if (s.eVar22) {
			appendEvent(12);
			s.eVar20 = crossVisitPrtcptn(s.eVar22, 's_ev20', '30', '5', '>', 'event22');
		}
		//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
		s.eVar65 = getValueOnce(lowerCaseVal(getQuerystringParam('ref', '', fullLocObj.href)), 'refPrm', 30, 'm');
		//}
		// incoming links from AFS-group sites
		//if(s.eVar22&&s.eVar65){
		// ref is now just an additional parameter for tracking links from other sites
		if (s.eVar65) {
			appendEvent(72);
		}
		//else{
		//	s.eVar65='';
		//}

		// Page modules shown on dashboard
		// refer to widget name mapping in resx to lookup friendly names
		//pdModules=lowerCaseVal((pageDetails.modules||'').replace(/\B[aeiou]\B|\s|widget/gi,'').replace(/accnts/gi,'acts').replace(/pymnts/gi,'pmts'));
		//pdModules=(pageDetails.modules||'').replace(/\B[aeiou]\B|\s|widget/gi,'').replace(/accnts/gi,'acts').replace(/pymnts/gi,'pmts');
		//pdModules=(pageDetails.modules||'').split(',');
		//pdModules = pdModules.split(',');
		friendlyModules = s.w_moduleLookup((pageDetails.modules || '').split(','), (pageDetails.moduleKey || '').split(','));

		//s.eVar55 = getValueOnce((friendlyModules ? (/:overview:dashboard$/i.test(sPageNameTemp) ? 'grid' : 'list') + ',' + friendlyModules : ''), 'mdlVar', 0); // modules will be in grid format on overview/dashboard
		s.eVar55 = getValueOnce((pageDetails.moduleLayout || '') + (friendlyModules ? ',' + friendlyModules : ''), 'mdlVar', 30, 'm'); // modules will be in grid format on overview/dashboard

		//s.prop55 = 'D=v55';
		s.prop55 = dVar(55);

		// call every time on dashboard page to compare current to previous modules and diff for added/removed
		// except when only switching profiles. when switching profile, modules change, but not through direct modification.
		if (userSwitchedProfile) {
			// when switching, update stored module set to current profile modules
			s.c_w('mdlSet', friendlyModules);
		} else {
			// track as a module change
			s.prop64 = s.w_checkModuleChanges('mdlSet', friendlyModules);
			if (s.prop64) {
				appendEvent(70);
			}
		}

		// clear invalid clickmap values generated for custom links
		clickMapOid = (/(.*oid%3D)(.*?)(%26|$)/).exec(s.c_r('s_sq'));
		if (clickMapOid && clickMapOid[2]) {
			if (!(/_[0-9]+$/).test(clickMapOid[2])) {
				s.c_w('s_sq', 0, dateZero); // remove invalid s_sq cookie
			}
		}

		// Featured content - fid/wbcfrom - for secondary promo tracking (Patrick)
		//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
		s.eVar60 = getValueOnce(lowerCaseVal(getQuerystringParam('fid', '', fullLocObj.href) || getQuerystringParam('wbcfrom', '', fullLocObj.href)), 'feat', 30, 'm');
		// record the deeplink name set on dashboard for mobile only, set to featured content eVar *au
		if (fromDeepLinkMobileApp) {
			s.eVar60 = 'deeplinkName_' + fromDeepLinkMobileApp;
		}
		// record the product name on the account activity page, to measure popular tiles clicked from dashboard 17E1 BT panorama requirement *au
		if (fromDashboardToAccountActivity) {
			s.eVar60 = 'AccountClickThru_' + fromDashboardToAccountActivity;
		}
		//}
		if (s.eVar60) {
			appendEvent(66);
			s.prop60 = dVar(60);
		}

		// Combined Internal External Stack
		if (s.eVar22) {
			s.eVar19 = crossVisitPrtcptn(s.eVar22, 's_ev19', '30', '10', '>', 'event22');
		}
		if (s.campaign) {
			s.eVar19 = crossVisitPrtcptn(s.campaign, 's_ev19', '30', '10', '>', 'event22');
		}

		// Paid/Natural Search Keyword
		s.prop18 = pageNameDynamicVariable; // set to just pageName as default
		s._channelParameter = 'Campaign|cid';
		s.w_channelManager('cid');

		//channelManagerKeywords = cleanText(s._keywords || ''); // filter search keywords a bit - strip multiple spaces etc.
		channelManagerKeywords = cleanText(s._keywords); // filter search keywords a bit - strip multiple spaces etc.

		if (s._channel === 'Natural Search') {
			channelManagerSearchType = 'NS';
			// prop18 seo keywords and entry page
			s.prop18 = 'D="' + channelManagerKeywords + '|"+pageName';
		}
		//if(s._channel==='Campaign'&&/^sem:/i.test(s._campaign)){ // if cid param, and value starts with 'sem:' (just check for any CID). confirm identifier for PPC tracking codes
		if (s._channel === 'Campaign' && channelManagerKeywords !== 'n/a') { // only if cid param exists and keywords are found, it's paid search. We may not have keywords if they are not passed by the search engine (usually for NS)
			channelManagerSearchType = 'PS';
		}
		if (channelManagerSearchType) {
			s.eVar11 = channelManagerKeywords === 'n/a' ? 'Keyword Unavailable' : channelManagerKeywords;
			s.prop11 = dVar(11);

			s.eVar12 = crossVisitPrtcptn(channelManagerSearchType + '|' + channelManagerKeywords, 's_ev12', '30', '5', '>', 'event22');
		}

		// Lifecycle. consider re-setting to avoid build up to later levels?
		visitorLifecycle = s.c_r('s_lfcl');
		if (visitorLifecycle === '') { // No previous lifecycle cookie
			if (!s.c_w('testCkie', 'set', new Date(+new Date() + 10000))) { // test if lifecycle cookie can be set to prevent events from re-firing
				visitorLifecycle = 'No cookies';
			} else {
				s.c_w('testCkie', 0, dateZero);
				visitorLifecycle = visitorLifecycleAware;
				appendEvent(6);
			}
		}
		if (visitorLifecycle === visitorLifecycleAware && (/\b(event(13|21|30|31|54|61|63|68))\b/i).test(s.events)) { // Confirm Engagement status criteria
			visitorLifecycle = visitorLifecycleEngaged;
			appendEvent(7);
		}
		if (visitorLifecycle === visitorLifecycleEngaged && (/\b(event(22))\b/i).test(s.events)) { // Conversion status criteria
			visitorLifecycle = visitorLifecycleConverted;
			appendEvent(8);
		}
		if (visitorLifecycle === visitorLifecycleConverted && (/\b(event(46))\b/i).test(s.events) && s.getVisitNum(365) > 1) { // Retention status criteria
			visitorLifecycle = visitorLifecycleRetained;
			appendEvent(9);
		}
		s.c_w('s_lfcl', visitorLifecycle, datePlusOneYear);
		s.eVar36 = visitorLifecycle + s.w_extCkSfx; // appends if external cookie data
		s.prop36 = dVar(36);

		// search results clickthru event for auto suggest results only *au
		// commented out since new aem search covers this as well *au
		/* 		wbcfromQuerystring = lowerCaseVal(getQuerystringParam('wbcfrom', '', fullLocObj.href));
		if (/sitesearch:autosuggest:results/i.test(wbcfromQuerystring)) {
		s.w_addEvt(15);
		// clickthru event from "search results page" is triggered when prop16 is set
		} */

		// search results details *au
		// new way to track clickthru, rank, result category etc
		// convention for search result details eVar
		//search-source|result-type|searched-keyword|result-category|result-rank
		// example output: source:search-page|type:natural|kw:low-rate-card|cat:services|rank:1
		// example output non natural type: source:search-page|type:recommended|kw:low-rate-card
		// example output non natural type: source:search-page|type:quicklinks|kw:low-rate-card
		// AEM release 1.1 updated type query param to result-type
		isSearchResultLanding = lowerCaseVal(getQuerystringParam('searchsource', '', fullLocObj.href));
		if (isSearchResultLanding) {
			var searchOrigin,
				searchResultType,
				searchKeyword,
				searchResultCategory,
				searchResultRank;
			searchOrigin = lowerCaseVal(getQuerystringParam('searchsource', '', fullLocObj.href));
			searchResultType = lowerCaseVal(getQuerystringParam('result-type', '', fullLocObj.href));
			searchKeyword = lowerCaseVal(getQuerystringParam('kw', '', fullLocObj.href));
			searchResultCategory = lowerCaseVal(getQuerystringParam('cat', '', fullLocObj.href));


			switch (searchResultType) {
				case 'natural':
					searchResultRank = lowerCaseVal(getQuerystringParam('rank', '', fullLocObj.href));
					s.prop16 = searchResultRank;
					if (s.prop16) {
						s.w_addEvt(15);
					}
					s.eVar13 = 'source:' + searchOrigin + '|' + 'type:' + searchResultType + '|' + 'kw:' + searchKeyword + '|' + 'cat:' + searchResultCategory + '|' + 'rank:' + searchResultRank;
					break;
				case 'recommended':
				case 'quicklinks':
					s.eVar13 = 'source:' + searchOrigin + '|' + 'type:' + searchResultType + '|' + 'kw:' + searchKeyword;
					// added event15 to include recommend and quicklinks for clickthru tracing *au 24/08
					s.w_addEvt(15);
					break;
			}
		}
		//search type var to understand type of search feature used .. suggested/predictive/simillar to ..
		wbcSearchType = lowerCaseVal(getQuerystringParam('searchtype', '', fullLocObj.href));
		if (wbcSearchType) {
			s.eVar15 = 'searchtype:' + wbcSearchType;
		}

		// Previous Page name
		//s.prop15 = s.getPreviousValue(sPageNameTemp, 'gpv_p15', '');
		//if (s.prop15 === sPageNameTemp) {
		//	s.prop15 = pageNameDynamicVariable;
		//}
		// refactored and referencing lastPg cookie
		s.prop15 = lastSentPage === sPageNameTemp ? pageNameDynamicVariable : lastSentPage;

		// Previous pixel length
		s.prop69 = s.w_cap(s.c_r('lastReqLen'), 5000);
		//if(s.prop69>5000){
		//	s.prop69='5000+';
		//}

		// capture URL
		//s.eVar26 = 'D=Referer'; // this is the full unprocessed page URL from HTTP header (excludes hash)
		//s.eVar26 = 'D=Referer' + (fullLocObj.hash ? '+"' + fullLocObj.hash + '"' : ''); // this is the full unprocessed page URL from HTTP header (includes hash)
		s.eVar26 = 'D=Referer+"' + fullLocObj.hash.replace(s.w_guidRgx, '(GUID)') + '"'; // this is the full unprocessed page URL from HTTP header (includes hash)

		s.prop26 = 'D=g'; // this is the filtered page URL from JS document (will include hash if any)

		// capture user-agent
		//s.prop27 = 'D=User-Agent'; // capture with proc rule to increase capture (non-JS), reduce JS size and reduce pixel length

		// track scode version
		s.prop39 = s.w_codeVers;

		// track site + source data version/details + pageKey for page audit.
		// dont capture in IE - makes pixel too long
		if (!s.isie) { // as of s_code version H.26.2, s.isie == false in IE11 due to useragent change in IE 11 to distinguish its DOM compatibility vs. older versions
			s.prop13 = pageSite + ':' + lowerCaseVal(pageDetails.src, 1) + ':' + lowerCaseVal(pageDetails.pageKey, 1);
		}

		// Site release version - set on OTP pages, apps, public? etc.
		s.eVar52 = pageSite + ':' + lowerCaseVal(pageDetails.siteVersion, 1);
		s.prop52 = dVar(52);

		// fid (3rd-party fallback visitor ID) not required when on first party collection domain (i.e. westpac.com.au). What if other domain? (we capture s_vi not fid)
		//if(/\.westpac\.com\.au$/i.test(location.hostname)){
		//if (/\.westpac\.com\.au$/i.test(fullLocObj.hostname)) {
		if (s.w_coreDomain) {
			s.fid = ''; // Not used for implementations that use first-party cookies.
		}

		s.plugins = ''; // empty to prevent tracking plugins. not available for reporting in SC15

		// clean referrer to reduce length and remove session details (creates too many values), etc.
		//s.testRef='https://uat.banking.westpac.com.au/cust/wps/portal/wodp/c1/04_SB8K8xLLM9MSSzPy8xBz9CP0os3gvRx9X04_SB8K8xLLM9MSSzPy8xBz9CP0os3gvRx9X04_SB8K8xLLM9MSSzPy8xBz9CP0os3gvRx9X';
		//s.referrer=s.w_cleanURL(s.testRef,2);
		//s.referrer=s.w_cleanURL('',2);
		//s.referrer=s.w_cleanURL(null,2);
		if (!s.w_refSent) { // added to match adobe approach in AppMeasurement v1.4.3
			s.w_refSent = true;

			s.referrer = s.w_cleanURL(document.referrer, 2);

			// set s.referrer here if able to identify sources otherwise incorrectly tracked as 'None' or 'Unspecified'. e.g. app links etc...
			// nativeAppVersion
			// file://native.app/?cid=app_abc_123

			// edm
			if (/\:edm\:/i.test(s.campaign)) {
				s.referrer = 'mail://edm.cid/?cid=' + cleanText(s.campaign) + '&referrer=' + (s.referrer || notSet); // Force any :edm: CID to Email Referrer Type
			}
		}

		// convert product array into Omniture-format string
		//sProductsTemp = s.w_prodStr(pdProductID, pageDetails);
		// run replace function on s.products
		//console.log('ORIG s.products = ' + s.products);
		//s.products = s.w_valReplace(s.w_prodStr(pdProductID, pageDetails), 'analytics_productsReplace');  // global replace
		s.products = s.w_valReplace(s.w_valReplace(s.w_prodStr(pdProductID, pageDetails), s.w_lStor('get', 'analytics_productsReplace')), pageDetails.productsReplace); // global + local replace
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
		s.pageName = sPageNameTemp;

		/******** Don't set any variables after this line ********/

		// for success messages etc. option to use pageDetails process, but send as link
		//if(pageDetails.trackAsLink==='true'){
		if (/true/i.test(pageDetails.trackAsLink)) {
			//console.log('Tracking as link - '+sPageNameTemp);
			// prevent looping
			delete pageDetails.trackAsLink;

			// make tracking request as link instead of page
			// filtered pageURL or custom passed property into href of custom link 'location' object
			s.lnk = {
				href: pageDetails.s_linkUrl || s.pageURL
			};
			s.w_trackLinkCustom(true, 'D="page:"+pageName', 'o', s); // default values if no overrides set in pageDetails

			// abort initial page tracking
			s.abort = true;
		}

		// set override values for trackLinkCustom and 'trackAsLink' calls, before final s_ overrides
		for (prpty in pageDetails) {
			if (pageDetails.hasOwnProperty(prpty)) {
				if (/^temp_/.test(prpty)) {
					s[prpty.replace(/^temp_/, '')] = pageDetails[prpty];
					// always remove all temp_ overrides - they are only for s.w_trackLinkCustom and shouldnt persist on the page (in s.w_tempPageDetails)
					delete pageDetails[prpty]; // only allow overrides to fire once, otherwise they persist to all subsequent calls (links, single-page-form pages etc.) // may not need to delete these as obj is temp, not on page... Needed to delete these for normal links following full custom links (the custom _temp details remain in the temp object for page name etc.) zzzzz test this change
				}
			}
		}
		for (prpty in pageDetails) {
			if (pageDetails.hasOwnProperty(prpty)) {
				if (/^s_/.test(prpty)) {
					s[prpty.replace(/^s_/, '')] = pageDetails[prpty];
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
			s.prop39 += '+" (with override)"';
		}

		// set timers based on events being set/passed by logic or overrides (moved to this block to capture ALL overrides)
		s.eVar31 = getTimeToCmplt(evtTimer(21, 22), 's_app_s_c', 365); // app start - complete
		//s.eVar32 = getTimeToCmplt(evtTimer(22, 47), 's_app_c_l', 365); // app complete - first login ... first login event removed...
		s.eVar33 = getTimeToCmplt(evtTimer(46, 22), 's_app_l_c', 365); // login - app complete. eVar33 not required to be set - use events to determine timers

		// getTimeToComplete functions like getValOnce and will clear the timers as soon as the respective events are seen in s.events. The values should only be retrieved if they will actually be sent (i.e. not dom click or s.abort)
		//console.log('s.events = ' + s.events);
		//console.log('s.eVar32 = ' + s.eVar32);

		//s.prop31 = s.eVar31 ? 'D=v31' : '';
		//s.prop32 = s.eVar32 ? 'D=v32' : '';
		//s.prop33 = s.eVar33 ? 'D=v33' : '';
		s.prop31 = dVar(31);
		//s.prop32 = dVar(32);
		s.prop33 = dVar(33);

		// set logged in status based on event being set/passed by logic or override
		if (/\bevent46\b/i.test(s.events)) {
			s.eVar40 = 'logged in';
		}

		// change any s object values async (in order of calls)
		//s.w_changeIf(pageDetails, true); // zzzzz enable to change any values with replace etc. for weird issues that may come up.
	}

	// override s.abort directly, because s_abort'ed calls don't pass through standard s_... override process like other s... overrides (dupe calls do though)
	//s.abort = pageDetails.s_abort || s.abort;
	s.abort = pageDetails._drop || s.abort;

	// TNT integrations
	/*
	if (!s.abort) {
	s.tnt = s.trackTNT(); // TNT to SC integration - TNT campaign details collected in SC. zzzzz SPA pages - if pulling from querystring, more than once?
	s.eVar70 = s.tnt && window.s_tntName; // add TNT details in evar for additional reporting capability
	window.s_tntName = '';

	try {
	mboxLoadSCPlugin(s); // SC to TNT integration - SC tracking details collected in TNT. zzzzz SPA pages - fire more than once?
	} catch (ignore) {
	// don't break
	}
	}
	 */

	// pass final s object to test function if available
	//if(testTrackingFunction && typeof testTrackingFunction.complete==='function'){
	if (typeof s.w_wtT.complete === 'function') {
		s.w_wtT.complete(s);
	}

	// Testing for marketing tags
	// send pageDetails object to marketing tag functions to determine tracking required.
	// s.w_prod boolean to switch dev/prod tags or pageDetails properties if reqd. e.g. switch between property names - {property-dev: 'dev val', property-prod: 'prod val'}
	// simulate marketing pixel latency/server down. Pending request activity (including Omniture pixel) causes loading spinner in Safari if not async.
	//bbb=new Image;
	//bbb.src = '//blackhole.webpagetest.org/bbb.gif?'+(+new Date());
	//bbb.src = '//blackhole.webpagetest.org/aaa.gif?'+(+new Date());

}
s.doPlugins = s_doPlugins;

/************************** PLUGINS SECTION *************************/

// - - - Start Westpac custom plugin details - - -

// helper to do things when the page is ready (or after the load event has fired)
// e.g. track page and apply link tracking and clickmap custom object IDs (via s.setOIDs()) when the page is ready
s.w_onReady = function (func) {
	//var test=[];
	//console.log(document.readyState);
	//	if(/loaded|interactive|complete/.test(document.readyState)){ // some platform page code may have attached s_code script before page complete. this would have fired func (usually tracking page and links) as soon as DOM loaded event occured, to reduce delay applying link tracking etc., but could fire before timing data available
	// regardless of s_code script attaching method, this will force waiting until complete to do tracking, to ensure timing data is available
	if (/complete/.test(document.readyState)) {
		// script was post-loaded
		func();
		//test.push('function called post-interactive, fired instantly');
	} else {
		// script was loaded inline
		s.w_addHandler(window, 'load', function () { // fire in setTimeout to avoid spinner in Chrome continuing after assets in window loaded
			setTimeout(func, 4);
		});
		//test.push('function called before DOM interactive, attached to window load');
	}
	//console.log(test.join('\n'));
};

// cookie combining utility
// read combined cookies v 0.37-Westpac append _wp for custom cookie names
// reformatted to move functions out of conditional logic
/*
if(!s.__ccucr){s.c_rr=s.c_r;s.__ccucr=true;function c_r(k){k+='_wp';
var s=this,d=new Date,v=s.c_rr(k),c=s.c_rspers(),i, m, e;
if(v)return v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess_wp'):c;
i=c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|', i);e=i<0?i:c.indexOf(';', i);
m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length, m<0?c.length:m));
return v;}function c_rspers(){var cv=s.c_rr('s_pers_wp');var date=new Date().getTime();var expd=null;
var cvarr=[];var vcv="";if(!cv)return vcv;cvarr=cv.split(";");for(var i=0,l=cvarr.length;i<l;i++)
{expd=cvarr[i].match(/\|([0-9]+)$/);if(expd && parseInt(expd[1]) >= date){vcv += cvarr[i]+";";}}return vcv;
}s.c_rspers=c_rspers;s.c_r=c_r;}if(!s.__ccucw){s.c_wr=s.c_w;s.__ccucw=true;function c_w(k, v, e){k+='_wp';
var s=this,d=new Date,ht=0,pn='s_pers_wp',sn='s_sess_wp',pc=0,sc=0,pv, sv, c, i, t;d.setTime(d.getTime() - 60000);
if(s.c_rr(k))s.c_wr(k, '', d);k=s.ape(k);pv=s.c_rspers();i=pv.indexOf(' '+k+'=');if(i>-1){
pv=pv.substring(0, i)+pv.substring(pv.indexOf(';', i)+1);pc=1;}sv=s.c_rr(sn);i=sv.indexOf(' '+k+'=');
if(i>-1){sv=sv.substring(0, i)+sv.substring(sv.indexOf(';', i)+1);sc=1;}d=new Date;
if(e){if(e.getTime()>d.getTime()){pv += ' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}
else{sv += ' '+k+'='+s.ape(v)+';';sc=1;}sv=sv.replace(/%00/g, '');pv=pv.replace(/%00/g, '');
if(sc)s.c_wr(sn, sv, 0);if(pc){t=pv;while(t && t.indexOf(';') != -1){var t1=parseInt(t.substring(t.indexOf('|')+1, t.indexOf(';')));
t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.setTime(ht);s.c_wr(pn, pv, d);}return v==s.c_r(s.epa(k.replace(/_wp$/,'')))}s.c_w=c_w;}
 */

s.w_ckCmbnng_c_r = function (k) {
	//k+='_wp';
	var s = this,
		v,
		c,
		i,
		m,
		e;

	if (!s.c_r) {
		s = window.s; // added alternate for when called outside of this scope
	}
	//var d = new Date(), // not used?
	v = s.c_rr(k);
	c = s.c_rspers();

	if (v) {
		return v;
	}
	k = s.ape(k);
	i = c.indexOf(' ' + k + '=');
	c = i < 0 ? s.c_rr('s_sess' + s.w_ckExt) : c;
	i = c.indexOf(' ' + k + '=');
	m = i < 0 ? i : c.indexOf('|', i);
	e = i < 0 ? i : c.indexOf(';', i);
	m = m > 0 ? m : e;
	v = i < 0 ? '' : s.epa(c.substring(i + 2 + k.length, m < 0 ? c.length : m));

	return v;
};
s.w_ckCmbnng_c_rspers = function () {
	var cv = s.c_rr('s_pers' + s.w_ckExt),
		date = new Date().getTime(),
		expd = null,
		cvarr = [],
		vcv = '',
		i,
		l;
	if (!cv) {
		return vcv;
	}
	cvarr = cv.split(';');
	for (i = 0, l = cvarr.length; i < l; i++) {
		expd = cvarr[i].match(/\|([0-9]+)$/);
		//console.log(parseInt(expd[1]) == parseInt(expd[1],10));
		if (expd && parseInt(expd[1], 10) >= date) {
			vcv += cvarr[i] + ';';
		}
	}
	return vcv;
};
s.w_ckCmbnng_c_w = function (k, v, e) {
	//k+='_wp';
	var s = this,
		d = new Date(),
		ht = 0,
		pn,
		sn,
		pc = 0,
		sc = 0,
		pv,
		sv,
		i,
		t,
		t1;
	if (!s.c_r) {
		s = window.s; // added alternate for when called outside of this scope
	}
	pn = 's_pers' + s.w_ckExt;
	sn = 's_sess' + s.w_ckExt;
	d.setTime(d.getTime() - 60000);
	if (s.c_rr(k)) {
		s.c_wr(k, '', d);
	}
	k = s.ape(k);
	pv = s.c_rspers();
	i = pv.indexOf(' ' + k + '=');
	if (i > -1) {
		pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1);
		pc = 1;
	}
	sv = s.c_rr(sn);
	i = sv.indexOf(' ' + k + '=');
	if (i > -1) {
		sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1);
		sc = 1;
	}
	d = new Date();
	if (e) {
		if (e.getTime() > d.getTime()) {
			pv += ' ' + k + '=' + s.ape(v) + '|' + e.getTime() + ';';
			pc = 1;
		}
	} else {
		sv += ' ' + k + '=' + s.ape(v) + ';';
		sc = 1;
	}
	sv = sv.replace(/%00/g, '');
	pv = pv.replace(/%00/g, '');
	if (sc) {
		s.c_wr(sn, sv, 0);
	}
	if (pc) {
		t = pv;
		while (t && t.indexOf(';') !== -1) {
			//console.log(parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';'))) == parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')), 10));
			t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')), 10);
			t = t.substring(t.indexOf(';') + 1);
			ht = ht < t1 ? t1 : ht;
		}
		d.setTime(ht);
		s.c_wr(pn, pv, d);
	}
	//return v == s.c_r(s.epa(k.replace(/_wp$/, '')));
	return v == s.c_r(s.epa(k));
};
if (!s.__ccucr) {
	s.c_rr = s.c_r;
	s.__ccucr = true;
	s.c_rspers = s.w_ckCmbnng_c_rspers;
	s.c_r = s.w_ckCmbnng_c_r; // cookie reading with the s.c_r function is only possible after the function is assigned to it here
}
if (!s.__ccucw) {
	s.c_wr = s.c_w;
	s.__ccucw = true;
	s.c_w = s.w_ckCmbnng_c_w; // cookie writing with the s.c_r function is only possible after the function is assigned to it here
}

// TODO: zzzzz review requirement if duplicate cookie issue not resolved in webseal. This removes duplicate cookies set at full path by oregon applications
/*
(function (doc, cookieDateZero, testCookie) {
var cookiePath = location.pathname.replace(/\/+/g, '/'),
cookiePathSlash = cookiePath.lastIndexOf('/'),
arrCookies = [testCookie, 's_vi', 's_pers' + s.w_ckExt, 's_sess' + s.w_ckExt, 's_wbc-ti', 's_wbc-pi', 's_wbc-seg', 's_wbc-ses'];

//cookiePath = cookiePathSlash ? cookiePath.slice(0, cookiePathSlash) : cookiePath;
cookiePath = cookiePath.slice(0, cookiePathSlash || 1);

doc.cookie = testCookie + '=1;';
doc.cookie = testCookie + '=0; expires=' + cookieDateZero + '; path=' + cookiePath + ';';

if (s.c_rr(testCookie)) {
// in case of browser differences in cookie path handling
cookiePath += '/';
}

if (cookiePath !== '/') {
while (arrCookies.length) {
doc.cookie = arrCookies.shift() + '=0; expires=' + cookieDateZero + '; path=' + cookiePath + ';';
}
}
}
(document, (new Date(0)).toUTCString(), 'analytics_ckPath'));
 */

// serialisation value for events
s.w_serial = function () {
	var serial = ('0000000' + Math.floor(Math.random() * (268435455 + 1)).toString(16)).slice(-7) + String(+new Date());
	//console.log('serial = ' + serial + ' ....... length ==== ' + serial.length);
	return String(serial).length === 20 ? serial : '';
};

// maintain serialisation for the same form/product/any item and reset after complete of same form
s.w_serialise = function (serialKey, formStep) {
	var lStorKey = 'analytics_aoSerials',
		keyName = serialKey && String(serialKey).replace(/\W/g, ''),
		serialStore = s.w_lStor('get', lStorKey),
		dateStamp = new Date(),
		serialDay = String(dateStamp.getFullYear()) + (dateStamp.getMonth() + 1) + dateStamp.getDate(), // serial memory persists for current day
		serialVisit = s.getVisitNum(365), // serial memory persists for current visit
		//serialRange = serialVisit >= 1 ? serialVisit : serialDay, // persist for visit if number returned, else day
		serialRange = serialDay + (serialVisit >= 1 ? serialVisit : 0), // persist for visit per day if number returned, else day + 0
		newSerial = s.w_serial(),
		setSerial = '';

	//console.log('serialStore = ' + serialStore);
	//console.log('newSerial = ' + newSerial);
	//console.log('serialDay = ' + serialDay);
	//console.log('serialVisit = ' + serialVisit);

	if (keyName && (formStep === 'start' || formStep === 'complete')) {
		if (serialStore.indexOf(serialRange + ',') !== 0) {
			// reset the store each day or if incorrect format
			s.w_lStor('set', lStorKey, serialRange + ',' + keyName + '=' + newSerial + formStep);
		}

		// check if localStorage is working
		serialStore = s.w_lStor('get', lStorKey);

		if (serialStore) {
			// if storage found, check if this thing has been hit already and get the serial
			setSerial = serialStore.match(new RegExp(',' + keyName + '=(.{20}(start|complete)?)(?=,|$)'));
			setSerial = setSerial && setSerial[1] ? setSerial[1] : '';

			//console.log('setSerial 1 = ' + setSerial);

			if (!setSerial) {
				// if this thing is not serialised yet, add the details
				s.w_lStor('set', lStorKey, serialStore + ',' + keyName + '=' + newSerial + formStep);
				setSerial = newSerial;
			} else {
				// if complete step of a serialised form, set to complete if was previously start
				if (formStep === 'complete' && setSerial.indexOf('start') === 20) {
					s.w_lStor('set', lStorKey, serialStore.replace(new RegExp('(,' + keyName + '=.{20})(start)(?=,|$)'), '$1' + formStep));
				}
				// if start step of a previously completed serial form, set a new serial
				if (formStep === 'start' && setSerial.indexOf('complete') === 20) {
					s.w_lStor('set', lStorKey, serialStore.replace(new RegExp('(,' + keyName + '=)(.{20})(complete)(?=,|$)'), '$1' + newSerial + formStep));
					setSerial = newSerial;
				}

				// if start/start or complete/complete, just trim the serial taken from the storage
				setSerial = setSerial.slice(0, 20);

				//console.log('setSerial 2 = ' + setSerial);
			}
		}
	}
	//console.log('setSerial 3 = ' + setSerial);
	return String(setSerial).length === 20 ? ':' + setSerial : '';
};

// function to capture form status detail for bankwow forms, scales to multiple prdocuts *au
s.w_setFormStatusDetail = function (statusArray) {
	var formStatusArray = statusArray,
		finalVal = [
		],
		formStatusDetail;
	for (var _i = 0, formStatusArray_1 = formStatusArray; _i < formStatusArray_1.length; _i++) {
		var items = formStatusArray_1[_i],
			frmStVal;
		frmStVal = 'accStatus:' + items.accountStatus + '|' + 'proStatus:' + items.profileStatus + '|' + 'verStatus:' + items.verificationStatus + '|' + 'exceCode:' + items.execeptionCode;
		finalVal.push(frmStVal);
	}
	//console.info(finalVal);
	formStatusDetail = finalVal.join(';');
	s.eVar72 = formStatusDetail;
	//console.info('stringVal = ', formStatusDetail);
}


s.w_valReplace = function (initialVal, replaceDetails) {
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

// only set prop to dynamic copy if eVar has a value to reduce pixel length
s.w_dVar = function (id) {
	return s['eVar' + id] ? 'D=v' + id : '';
};

// time to complete timer checking. now works when events are set with s.w_addEvt overrides
s.w_evtTimer = function (eventStart, eventStop) {
	var timerStatus = '',
		evts = s.events;

	if (new RegExp('\\bevent' + eventStart + '\\b', 'i').test(evts)) {
		timerStatus = 'start';
	}
	if (new RegExp('\\bevent' + eventStop + '\\b', 'i').test(evts)) {
		timerStatus = 'stop';
	}
	return timerStatus;
};

// cap numbers to reduce number of items for classifactions
s.w_cap = function (item, cap) {
	return item >= cap ? cap + '+' : item; // if item value is greater than, or equal to cap, append '+'. event50 (page load time) removes the '+', because the event value must be numeric.
};

// Helper function for standard numeric s.apl event call to reduce frequently used code
s.w_addEvt = function (evt) {
	// allow text or numeric events to be passed
	s.events = s.apl(s.events, isNaN(evt) ? evt || '' : 'event' + evt, ',', 2);
};

// convert prodVal into an array if it was only a string (single product or comma separated)
s.w_prodArr = function (prodVal) {
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
					'prod': prodTemp[lp]
				});
			}
		}
	} else {
		prodArr = prodVal || [];
	}
	return prodArr;
};

// convert product array into Omniture format product string
s.w_prodStr = function (prodArr, details) {
	// join product object array into Omniture formatted prod string for tracking
	var prodSyntax = [],
		//pdFormStatus = pageDetails.formStatus,
		pdFormStatus = s.w_lCase(s.w_clean(details.formStatus)),
		pdPageType = s.w_lCase(s.w_clean(details.pageType)),
		lp1,
		lp2,
		prodArrLen = prodArr.length,
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
		crossSellProductSpecified = false;

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
			} else {
				crossSellProduct = validProductCount > 1 ? true : false; // if nothing specified, anything after first valid product is assumed to be cross-sell
			}

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
							s.currencyCode = currency;
						}
						if (currency !== s.currencyCode) {
							// if different to 1st product currency, append '-mix' to currency. Only one currency allowed per request. keep only values matching 1st currency
							currency += '-mix';
						}
						amount = transactionDetails[2];

						// get amount band. pass status from generic pageDetails value, or use status set in txnType set against each respective product in array
						txnBand = s.w_amntBnds(txnType + (pdFormStatus ? ':' + pdFormStatus : '') + ':' + currency, amount); // set all products in a form to the generic form status
						//txnBand=s.w_amntBnds(txnType+':'+currency, amount); // txnType passed with product array item could specify respective status for each product, like 'loan:approved=123'

						if (/^(?:\(not\ set\))(?::|$)/.test(txnType)) {
							// if application transactionType not set, we don't know which event to set the txn amount into
							prodEvents[lp2] = '';
						} else {
							// only set s.events and prod events if valid event
							prodEvents[lp2] = txnEvt + '=' + (currency === s.currencyCode ? txnBand.avg : 0); // set value of different currency amounts to zero to avoid incorrect conversion to base currency of request (taken from first value)
							//s.events = s.apl(s.events,txnEvt,',',2);
							s.w_addEvt(txnEvt);
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
				s.w_lCase(prodArr[lp1].cat || '') + ';' +
				//s.w_lCase(prodArr[lp1].prod) + (pdPageType === 'application' && !primaryProduct ? '-x' : '') + ';' + // identify primary product/s for enhanced cross-sell reporting
				//s.w_lCase(s.w_clean(prodArr[lp1].prod.replace(/,/g, ' '))) + (pdPageType === 'application' && !primaryProduct ? '-x' : '') + ';' + // identify primary product/s for enhanced cross-sell reporting
				s.w_lCase(s.w_clean(prodArr[lp1].prod.replace(/,/g, ' '))) + (pdPageType === 'application' && crossSellProduct ? '-x' : '') + ';' + // identify primary product/s for enhanced cross-sell reporting
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

// clean strings - trim and remove multiple spaces for consistency
s.w_clean = function (str) {
	return (str ? String(str) : '').replace(/\s+/g, ' ').replace(/^\s|\s$/g, '');
};

// return 'zero' for '0' value to allow SAINT classification
s.w_fixZero = function (val) {
	return String(val) === '0' ? 'zero' : val;
};

// return filtered search terms and replace numbers if necessary
s.w_srchTerm = function (val) {
	var srchTerm = val,
		lp = 8,
		hashes = '########'; //,hashes=new Array(lp).join('#')

	if (srchTerm) {
		//srchTerm=s.w_clean(s.w_lCase(srchTerm));
		srchTerm = s.w_lCase(srchTerm);
		while (lp--) {
			srchTerm = srchTerm.replace(new RegExp('(\\d{4}.?)\\d{' + (lp + 1) + ',}', 'g'), '$1' + hashes.substring(0, lp + 1));
		}
	}
	//console.log(srchTerm);
	return srchTerm;
};

// time parting
s.w_timePart = function () {
	var dateNow = new Date(),
		dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	return dayNames[dateNow.getDay()] + ' ' + ('00' + dateNow.getHours()).slice(-2) + ':' + (dateNow.getMinutes() > 29 ? '30' : '00');
};

// lower case strings or (not set) if empty
s.w_lCase = function (val, alt) {
	var altVal = alt ? '(not set)' : '';
	return String(val || altVal).toLowerCase();
};

// cross-browser getElementsByClassName. fiServ will use data attributes
// this function works, but is now not required
/*
s.w_altGetElemsByClassName=function(oElm,strTagName,strClassName){
var doc=document,lp,len,arrReturnElements,oElement,arrElements,oRegExp;
if(doc.getElementsByClassName){
arrReturnElements=doc.getElementsByClassName(strClassName);
}else{
arrElements = ((strTagName === '*' && oElm.all) ? oElm.all : oElm.getElementsByTagName(strTagName));
arrReturnElements=[];
strClassName=strClassName.replace(/\-/g, '\\-');
oRegExp=new RegExp('(?:^|\\s)'+strClassName+'(?:\\s|$)');
for(lp=0,len=arrElements.length;lp<len;lp++){
oElement=arrElements[lp];
if(oRegExp.test(oElement.className)){
arrReturnElements.push(oElement);
}
}
}
return arrReturnElements;
};
 */

// cross-browser querySelectorAll
// working, but not currently required
s.w_qSA = function (doc, selector, tag, attr, regex) {
	var lp,
		len,
		result = [],
		target,
		tempAttr;

	if (doc && doc.querySelectorAll) {
		result = doc.querySelectorAll(selector);
	} else {
		target = doc && doc.getElementsByTagName(tag);
		for (lp = 0, len = target.length; lp < len; lp++) {
			tempAttr = target[lp].getAttribute(attr);
			if (attr === 'class') {
				tempAttr = tempAttr || target[lp].getAttribute('className');
			}
			if (tempAttr && regex.test(tempAttr)) {
				result.push(target[lp]);
			}
		}
	}
	return result;
};

// handler functions for event listening for custom link tracking
s.w_getEvtTrgt = function (evt, attrRequired) {
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

s.w_stopEvt = function (evt) {
	evt = evt || window.event;
	if (evt) {
		if (evt.preventDefault) {
			evt.preventDefault();
		} else {
			evt.returnValue = false;
		}
		//}else{
		//	evt=0;
	}
	//return evt;
};

s.w_addHandler = function (elem, elemEvent, handler) {
	//console.log(elem);
	if (elem.addEventListener) {
		elem.addEventListener(elemEvent, handler, false);
	} else {
		if (elem.attachEvent) {
			elem.attachEvent('on' + elemEvent, handler);
		}
	}
};

s.w_clearOmniVars = function () {
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

	/*
	sVarArr = ['pageName', 'pageType', 'channel', 'products', 'productsList', 'events', 'eventList', 'campaign', 'purchaseID', 'transactionID', 'state', 'zip', 'server', 'linkName'];
	for (lp = 0, len = sVarArr.length; lp <= len; lp++) {
	s[sVarArr[lp]]= empty;
	}
	 */

	/*
	s.pageName = empty;
	s.pageType = empty;
	s.channel = empty;
	s.products = empty;
	s.productsList = empty;
	s.events = empty;
	s.eventList = empty;
	s.campaign = empty;
	s.purchaseID = empty;
	s.transactionID = empty;
	s.state = empty;
	s.zip = empty;
	s.server = empty;
	s.linkName = empty;
	 */

	s.pageName = s.pageType = s.channel = s.products = s.productsList = s.events = s.eventList = s.campaign = s.purchaseID = s.transactionID = s.state = s.zip = s.server = s.linkName = empty;

};

s.w_collectStoredData = function () {
	// epoch date used to clear cookies
	var dateZero = new Date(0); //,
	//impTmp = s.c_r('impTmp'); //

	// collect pid impressions from after previous page load
	s.list2 = s.c_r('banners');

	// put the temp banners into the normal cookie
	//s.c_w('banners', impTmp, impTmp ? new Date(+new Date() + (24 * 60 * 60 * 1000)) : dateZero); // store new banners from this page. keep impressions in cookie for 24 hours
	//s.c_w('impTmp', 0, dateZero); // clear banner cookie after adding to cookie for sending

	//console.log('COLLECT STORED - impTmp = ' + impTmp);

	s.c_w('banners', 0, dateZero); // clear after sending
	//s.w_prevPgCkiesSent = true;

	// capture number of form validation errors from cookie
	if (s.c_r('errCount')) {
		s.prop17 = s.c_r('errCode');
		//s.eVar30 = (s.prop17.indexOf(s.w_inlErr+',')>-1? s.prop17 : 'defined errors') + ':' + s.c_r('errCount');
		s.eVar30 = 'errors:' + s.w_cap(s.c_r('errCount'), 50);
		s.c_w('errCode', 0, dateZero);
		s.c_w('errCount', 0, dateZero);
	}

	// Navigation menu ID
	s.prop59 = s.c_r('nav');
	// remove nav cookie after tracking
	s.c_w('nav', 0, dateZero);

	// if search results 'click past rank' cookie has been set from result link click, track the rank and click event and delete the cookie.
	// The cookie is set on search results link clicks with the rank of the link
	/* 	s.prop16 = s.w_cap(s.c_r('cpr'), 101);
	if (s.prop16) {
	s.w_addEvt(15);
	// delete cookie after tracking
	s.c_w('cpr', 0, dateZero);
	} */
};

// Do things after pixel sent
s.w_endTrckng = function () {
	// record length of last pixel
	var sVisitorNamespace = s.visitorNamespace,
		requestCount = s.rc ? s.rc[sVisitorNamespace] : 0,
		lastPixel = window['s_i_' + s._in + '_' + sVisitorNamespace + (requestCount > 1 ? '_' + (requestCount - 1) : '')],
		lastPixelSrc = lastPixel && lastPixel.getAttribute('src'),
		lastPixelLength = 0;

	if (lastPixelSrc) { // changed to lastPixel.getAttribute('src') to avoid invalid pointer error in IE11 when reading .src
		lastPixelLength = lastPixelSrc.length;

		// add pixels to an array to simplify testing
		s.w_pixels = s.w_pixels || [];
		s.w_pixels.push(lastPixelSrc);

		// store length of the pixel just fired in a cookie, to extract on next page load
		s.c_w('lastReqLen', lastPixelLength);
	}

	//return lastPixelLength;
};

// track a page only once per window load (for single page applications). All names sent stored in array to compare for all further calls until reset or page reloaded (array cleared)
s.w_pageTracked = function (pgName) {
	var lp,
		tracked = false;

	s.w_trackedPages = s.w_trackedPages || [];
	lp = s.w_trackedPages.length;
	while (lp--) {
		if (s.w_trackedPages[lp] === pgName) {
			// already been tracked this page load
			tracked = true;
			break;
		}
	}
	if (!tracked) {
		s.w_trackedPages.push(pgName);
	}
	//console.log('tracked '+pgName+'? '+tracked + '. s.w_trackedPages = '+s.w_trackedPages);
	return tracked;
};

// function to clone pageDetails context object
// also in analytics js
s.w_clone = function (oToBeCloned, clones) {
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
				oClone[prpty] = s.w_clone(oToBeCloned[prpty], clones);
			}
		}
	}
	return oClone;
};

// estimate page load timing for browsers without native support
// polyfill for page load time - requires cookie reading and s.w_onReady functions to be available
s.w_navtS = (+s.c_r('navt') || (s.w_config.ls ? s.w_config.ls - 50 : 0)); // get timestamp from previous click or ls (load start time) from async code in page (reliable if set in head/top of page)
s.c_w('navt', 0, new Date(0)); // remove cookie
if (s.w_navtS && !window.performance) {
	s.w_onReady(function () {
		//s.w_navtS = (+s.w_navtCk) + 4; // add estimated time difference between click and typical navigationStart
		//s.w_navtE = (+new Date()) - 44; // subtract estimated time difference between onload and this line firing just after window load. note: latency in loading this script will artifically increase 'page load' time
		// get time at window load event from analytics.js onReady call loading this file
		s.w_navtE = s.w_config.lc || +new Date(); // note: if not using analytics async, long latency in loading this script will artifically increase 'page load' time

		/*
		console.log('==================================================');
		console.log('s.w_navtS                    = ' + s.w_navtS);
		console.log('navigationStart              = ' + (window.performance && performance.timing.navigationStart));
		console.log('s.w_navtE                    = ' + s.w_navtE); // and compensate for any differences to native
		console.log('loadEventEnd                 = ' + (window.performance && performance.timing.loadEventEnd));
		console.log('navigationStart - s.w_navtS  = ' + (window.performance && performance.timing.navigationStart - s.w_navtS));
		console.log('loadEventEnd - s.w_navtE     = ' + (window.performance && performance.timing.loadEventEnd - s.w_navtE));
		console.log('native time                  = ' + (window.performance && performance.timing.loadEventEnd - performance.timing.navigationStart));
		console.log('s.w_navtE - s.w_navtS        = ' + (s.w_navtE - s.w_navtS));
		 */

	});
}

s.w_lStor = function (action, key, data) {
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

// change details based on something
/*
s.w_OLDchangeIf = function (refObj) {
var prpty = 0,
expressionSet = s.w_lStor('get', 'analytics_originChangeIf'),
expressionItem;

try {
expressionSet = JSON.parse(expressionSet || '[]');
} catch (err) {
s.w_log(err);
expressionSet = [];
}
//console.log('expressionSet = ' + expressionSet);
//console.log(expressionSet);

for (prpty = 0; prpty < expressionSet.length; prpty++) {
expressionItem = expressionSet[prpty];
//console.log('expressionItem = ' + expressionItem);

if (refObj[expressionItem.ifItem] === expressionItem.ifVal) {
refObj[pageDetails.thenItem] = expressionItem.thenVal;
}
}

console.log(refObj);
};
 */

// test global drop list to decide if the page should be aborted
s.w_globalDrop = function (refObj) {
	var testResult = 0,
		siteDropList = s.w_lStor('get', 'analytics_nameKeyDrop'); //,
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
//s.w_changeIf = function (refObj, sObjectProperties) { // dynamically change pageDetails or s object
s.w_changeIf = function (refObj) { // dynamically change pageDetails
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
			'(lastpage)': s.c_r('lastPg'),
			'(location)': s.w_getLoc().href,
			'(referrer)': document.referrer,
			'(s_pers)': s.c_rr('s_pers' + s.w_ckExt), // these cookie values can only be used in the if expression, not equals
			'(s_sess)': s.c_rr('s_sess' + s.w_ckExt) // these cookie values can only be used in the if expression, not equals
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

s.w_getExp = function () {
	var isVis = s.w_isVis,
		cssExperienceMob = isVis('.pagedetails-experience-mob') || isVis('.analytics-experience-mob'), // responsive site mobile class visible check. name changed to analytics-... to be more relevant
		cssExperienceTab = isVis('.pagedetails-experience-tab') || isVis('.analytics-experience-tab'), // responsive site tablet class visible check. name changed to analytics-... to be more relevant
		cssExperienceDesktop = isVis('.analytics-experience-desktop'), // responsive site tablet class visible check. name changed to analytics-... to be more relevant
		cssNotDetected = cssExperienceMob === null && cssExperienceTab === null && cssExperienceDesktop === null,
		experienceResult;

	// logic to determine experience based on elements with classes being found/hidden/visible
	experienceResult = (cssExperienceMob || (cssExperienceMob !== false && cssExperienceDesktop === false && !cssExperienceTab)) ? 'mob' : ((cssExperienceTab || (cssExperienceTab !== false && cssExperienceDesktop === false && !cssExperienceMob)) ? 'tab' : 'desktop'); // TESTING with !desktop options etc.

	// save the experience determined by the logic
	s.w_expOrig = s.w_expOrig || experienceResult;

	// if no elements with classes detected, use the first saved experience
	if (cssNotDetected) {
		experienceResult = s.w_expOrig;
	}

	return experienceResult;
};

//s.w_trackPage=function(details,fullDetails){ // original arguments set partial update as default. may create ambiguous details if only editing existing object with each call
//s.w_trackPage=function(details,partialDetails){ // full update as default

// Start with 0 offset for call delay for multiple requests
s.w_sendDelayOffset = 0;

s.w_queue = [];

// track a page load
s.w_trackPage = function (details) { // details may not be passed. Data from single object in DOM may be used at runtime and be out of sync with function calls and properties being set (e.g. s_abort = true between two blank trackPage calls would have aborted the frst call without 'async' object copying)
	var referenceObj = details || pageDetails,
		detailsCopy, // to hold copy of data passed for async calls
		//trackingToBeSent = 1, // to avoid tracking processing for any conditions where not required. aborted and deduped calls can continue for debugging
		dcPageName,
		lastPredictedPageName = s.c_r('lppn'),
		currPredictedPageName,
		tempImpressions; //,
	// globalDrop;

	// remove this property in case it was set manually. This is for internal code logic only
	delete referenceObj._drop;

	if (referenceObj.originNameKeyDrop) {
		s.w_lStor('set', 'analytics_nameKeyDrop', referenceObj.originNameKeyDrop);
	}
	if (referenceObj.originPageNameReplace) {
		s.w_lStor('set', 'analytics_pageNameReplace', referenceObj.originPageNameReplace);
	}
	if (referenceObj.originProductsReplace) {
		s.w_lStor('set', 'analytics_productsReplace', referenceObj.originProductsReplace);
	}

	// collect any data to be tracked with this call (should only happen if call will actually be sent, otherwise cookies are cleared before they can be re-sent)
	//s.w_collectStoredData(); // moved to w_sendPage function, to collect and remove data only if sending confirmed
	//	if(details){
	//if(partialDetails){
	// only partial update to any existing pageDetails object
	//	for(prpty in details){
	//		if(details.hasOwnProperty(prpty)) {
	//			window.pageDetails[prpty]=details[prpty];
	//		}
	//	}
	//}else{
	// track passed pageDetails object
	//			window.pageDetails = details; // override page details with details passed in
	//}
	//	}
	//pageDetails = window.pageDetails || {}; // if page and argument is empty, set as empty object

	//if (!details) {
	//	details = pageDetails; // if no details passed, get from default pageDetails in window
	//}

	//s.w_prevPgCkiesSent = false;
	s.w_pgTrkStatus = referenceObj.s_abort ? 'blocked' : 'started'; // any new impressions passed should now be associated with this page if not being dropped

	// make object copy for async pageDetails delayed tracking (can't operate async on a single object)
	//detailsCopy = JSON.parse(JSON.stringify(details));
	detailsCopy = s.w_clone(referenceObj);
	//console.log(detailsCopy === details);
	//console.log(pageDetails === details);
	//console.log(pageDetails === detailsCopy);

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
	s.siteID = false;

	// Predict expected pageName for dupe/trackOnce to decide whether to keep or ignore new impressions being passed
	dcPageName = detailsCopy.pageName || '0';

	currPredictedPageName = (detailsCopy.s_pageName || (detailsCopy.formName ? detailsCopy.formName + (detailsCopy.formType || '0') + dcPageName : (detailsCopy.transactionType ? detailsCopy.transactionType + dcPageName : (detailsCopy.subSite || '0') + (detailsCopy.pageName ? (detailsCopy.pageNamePrefixes || '0') + dcPageName : decodeURIComponent(s.getPageName(s.pageURL)))))) + (detailsCopy.pageType || '0') + (detailsCopy.dialogTitle || '0') + (detailsCopy.itemName || '0') + (detailsCopy.pageNameReplace || '0'); // replace undefined's with '0' to shorten value

	/*
	console.log('s.getPageName(s.pageURL) ' + s.getPageName(s.pageURL));
	console.log('s.getPageName(s.pageURL) ' + decodeURI(s.getPageName(s.pageURL)));
	console.log('s.getPageName(s.pageURL) ' + decodeURIComponent(s.getPageName(s.pageURL)));
	 */

	detailsCopy._nameKey = ((detailsCopy.pageKey || '0') + (detailsCopy.experience || '0') + currPredictedPageName).replace(/,/g, '_'); // replace commas with underscore (stored drop string is comma separated)

	//console.log('lastPredictedPageName = ' + lastPredictedPageName);
	//console.log('currPredictedPageName = ' + currPredictedPageName + '\n- - - -');


	/*
	if (/true/i.test(detailsCopy.trackOnce) && s.w_pageTracked(detailsCopy.pageName)) {
	trackingToBeSent = 0;
	s.w_pgTrkStatus = 'blocked';
	//s.c_w('impTmp', 0, new Date(0)); // clear any tmp banners of aborted pages
	}
	 */

	//if (/true/i.test(detailsCopy.trackOnce) && s.w_pageTracked(currPredictedPageName)) {
	// stop trackOnce calls from collecting impressions and completely skip tracking process
	//	trackingToBeSent = 0;
	//}
	// reset trackOnce data to allow SPA pages to be sent again
	if (/reset/i.test(detailsCopy.trackOnce)) {
		s.w_trackedPages = 0;
	}

	//console.log('s.w_globalDrop(detailsCopy) = ' + s.w_globalDrop(detailsCopy));
	// replace s.w_globalDrop function call with s.w_changeIf
	// globalDrop = s.w_changeIf({
	//		'_nameKey' : detailsCopy._nameKey,
	//		'changeIf' : s.w_lStor('get', 'analytics_nameKeyDrop')
	//	}).s_abort;
	//console.log('globalDrop = ' + globalDrop);

	if (detailsCopy.s_abort || ((/true/i.test(detailsCopy.trackDedupe) && lastPredictedPageName === currPredictedPageName) || ((/true/i.test(detailsCopy.trackOnce) && s.w_pageTracked('pre_' + currPredictedPageName)) || s.w_globalDrop(detailsCopy)))) {
		//if (detailsCopy.s_abort || ((/true/i.test(detailsCopy.trackDedupe) && lastPredictedPageName === currPredictedPageName) || ((/true/i.test(detailsCopy.trackOnce) && s.w_pageTracked('pre_' + currPredictedPageName)) || globalDrop))) {
		// stop trackDedupe and trackOnce calls from collecting impressions
		//trackingToBeSent = 0;
		// allow trackDedupe calls to continue tracking process until accurate dedupe name is determined in doPlugins
		detailsCopy._drop = 1;
		s.w_pgTrkStatus = 'blocked'; // don't collect banners for pages being aborted or meeting trackDedupe/trackOnce rules
	} else {
		//console.log('s.c_r(impTmp) = ' + s.c_r('impTmp'));
		// merge any previous temp impressions from cookie from last page call
		tempImpressions = s.c_r('impTmp');
		if (tempImpressions) {
			detailsCopy.preImprs = tempImpressions; // add any passed impressions for this page to the pageDetails
			s.c_w('impTmp', 0, new Date(0));
		}

		// add any async impressions sent before very first trackPage in window load the impTmp cookie for next track (combine with other impTmp values collected after trackPage in 'started' mode)
		s.w_trackImpression(s.w_asyncImp);

		// set 'Last Predicted PageName' to current name being sent, to compare next call
		s.c_w('lppn', currPredictedPageName, new Date(+new Date() + (30 * 60 * 1000))); // keep last page name in cookie for 24 hours for impressions etc.
	}
	// always reset after first trackPage call
	s.w_asyncImp = '';

	//if (trackingToBeSent) {
	// track page navigation type and load time
	s.w_onReady(function () {
		// optional variable send delay after window.load. Min. 100ms, Max. 5000ms.
		// Pages will be tracked in the order of request sending, not the order of calling trackPage. 'Previous page' tracking corresponds to sending order, not calling order.
		var sendDelayMin = s.w_perfTracked ? 25 : 100, // first tracking after page load = 100ms to allow timing data if available. Subsequent calls faster. Delay set equally for all browsers regardless of timing support.
			sendDelayMax = 5000,
			sendDelay = parseInt(detailsCopy.sendDelay, 10) || sendDelayMin;

		// check if in min-max range
		sendDelay = sendDelay < sendDelayMin ? sendDelayMin : sendDelay > sendDelayMax ? sendDelayMax : sendDelay;

		// Keep calls in sequence by incrementing delays between each call
		s.w_sendDelayOffset += sendDelay;
		//console.log('--- sendDelay = ' + sendDelay);

		setTimeout(function () {
			var loadTime = 0,
				perfNav,
				perfTiming,
				timeStart,
				timeEnd,
				storedEvents = s.c_r('addEvts'),
				storedEventsArray = storedEvents ? storedEvents.split(',') : [],
				storedEventsCount = storedEventsArray.length,
				newAddEvents,
				newAddEventsCount;

			// Reduce total delay as calls made
			s.w_sendDelayOffset -= sendDelay;

			// Responsive pages may need to wait for document ready (or later) to be able to test experience based on CSS element visibility
			if (!detailsCopy.experience) {
				detailsCopy.experience = s.w_getExp();
			}

			// change any pageDetails values async (in order of calls)
			s.w_changeIf(detailsCopy);

			//s.w_queue.push(JSON.parse(JSON.stringify(pageDetails))); // copy object into queue
			s.w_queue.push(detailsCopy); // store details in pageDetailsArray
			//console.log('1 - '+JSON.stringify(s.w_queue));

			// clear s object vars ready for new step of 1-page forms
			s.w_clearOmniVars();

			if (detailsCopy.s_abort) { // any value in s.abort (or s_abort) will prevent tracking from being sent
				// re-set abort details after changeIf
				detailsCopy._drop = 1;
				s.w_pgTrkStatus = 'blocked'; // don't collect banners for pages being aborted or meeting trackDedupe/trackOnce rules

				// if any, store the addEvents that will not be sent. These will be sent with the next available call
				if (detailsCopy.addEvents) {

					//storedEventsArray.push(detailsCopy.addEvents);
					//s.c_w('addEvts', storedEventsArray.join(','));

					newAddEvents = detailsCopy.addEvents.split(',');
					newAddEventsCount = newAddEvents.length;
					while (newAddEventsCount--) {
						storedEvents = s.apl(storedEvents, newAddEvents[newAddEventsCount], ',', 2);
					}
					s.c_w('addEvts', storedEvents);

				}
			} else {
				if (!detailsCopy._drop) {
					s.w_pgTrkStatus = 'sent'; // ok to start collecting banners for this page
					//s.w_pgCount = s.w_pgCount || 0; // zzzzz to store reference of current page for trackOnce things (that should fire again with next page, even if window has not reloaded. e.g. SPA pages)
					//s.w_pgCount++; // zzzzz compare to count set in attribute at time of trackOnce thing to see if it can track again

					// include any events that should be added to the standard events for this request
					//s.events = pageDetails.addEvents;
					//delete pageDetails.addEvents;
					s.events = detailsCopy.addEvents; // values set in setTimeout for when tracking actually runs

					// always include a custom page view in the event list
					s.w_addEvt(1);

					// only get/send these details if not going to be aborted
					if (!s.w_perfTracked) { // only once per page load - dont repeat with each trackPage
						if (window.performance) { // native support
							// performance timing data from modern browsers. loadEventEnd time only available after window load
							perfNav = window.performance.navigation;
							perfTiming = window.performance.timing || {};
							timeStart = perfTiming.navigationStart;
							timeEnd = perfTiming.loadEventEnd;
							//timeEnd = perfTiming.loadEventEnd,
							//loadTimeRound,
							//redirCount;
						} else {
							perfNav = {
								type: 0,
								redirectCount: 'na'
							};
							timeStart = s.w_navtS;
							timeEnd = s.w_navtE;
						}

						if (timeEnd > timeStart && timeStart > 0) { // fix for IE9 cross-domain/schema issue, missing navigationStart
							loadTime = timeEnd - timeStart; // thousandths of a second
						}

						// if any loadTime
						if (loadTime) {
							//loadTimeRound=Math.round((loadTime/1000)*10)/10;
							//loadTimeRound=loadTimeRound>=10?'10+':loadTimeRound.toFixed(1);

							// zzzzz capture load time at tenths of a second instead of thousandths for smaller captured data?
							s.eVar43 = 't:' + perfNav.type + '|r:' + s.w_cap(perfNav.redirectCount, 5) + '|s:' + s.w_cap((Math.round((loadTime / 1000) * 10) / 10).toFixed(1), 10); // navigation details. e.g. navigate, reload, back-forward and redirects|redirectCount|time in seconds rounded to one decimal
							s.prop43 = 'D=v43';

							// loadTime = Math.round((timeEnd - timeStart) / 100); // tenths of a second (if required, to reduce size of integer in reports). Should be capped at 600
							s.w_addEvt(('event50=' + s.w_cap(loadTime, 60000)).replace(/\+$/, '')); // remove + from event50 value if capped as '60000+'.  Value must be numeric
						}
					}
					s.w_perfTracked = true; // prevent from re-running

					/*
					console.log('=== loadTime       = ' + loadTime);
					console.log('=== native timing  = ' + (window.performance && window.performance.timing.loadEventEnd - window.performance.timing.navigationStart));
					console.log('===         diff   = ' + (s.w_navtE - s.w_navtS - (window.performance && window.performance.timing.loadEventEnd - window.performance.timing.navigationStart)));
					 */

					//console.log('___ s.events = '+s.events);
					//console.log(s.contextData.pageDetails); // testing s. changes before async. anything in the timeout will be runtime
					//s.w_sendPage(detailsCopy); // inlined this function below

					// moved this block to surrounding block to capture timing only when not s_abort
					//if (detailsCopy.s_abort) { // any value in s.abort (or s_abort) will prevent tracking from being sent
					//	// if any, store the addEvents that are not going to be sent, for the next available call
					//	detailsCopy.addEvents && storedEventsArray.push(detailsCopy.addEvents) && s.c_w('addEvts', storedEventsArray.join(','));
					//} else {


					// collect and remove data only if it is likely to actually be sent
					s.w_collectStoredData();

					// collect any previous addEvents that were not sent, then clear the cookie
					while (storedEventsCount--) {
						s.w_addEvt(storedEventsArray[storedEventsCount]);
					}
					s.c_w('addEvts', 0, new Date(0));
				}
			}

			// debug the data about to be used in s.t
			// this may be commented in PROD after initial testing period
			if (window.JSON && (s.c_rr('s_pers_wp_dev') || !s.w_prod)) {
				s.w_log(unescape(JSON.stringify(detailsCopy, null, 4).replace(/\\u([\w\d]{4})/g, '%u$1'))); // log pageDetails JSON in dev if console available
				//s.contextData.pageDetails = s.isie ? '(See console)' : JSON.stringify(detailsCopy).replace(/\./g, '.'); // replace dots here to fix bug in Omniture debugger context data display
				s.contextData.pageDetails = s.isie ? '' : JSON.stringify(detailsCopy).replace(/\./g, '.'); // replace dots here to fix bug in Omniture debugger context data display
			}

			//console.log('2 - '+JSON.stringify(s.w_queue));
			s.t();
			s.w_log(s.pageName); // log page name in dev if console available
			s.w_endTrckng();

			// update the last/previous page value if it was likely sent. This is used by previous page (prop15), trackDedupe
			//console.log('detailsCopy.s_abort = ' + detailsCopy.s_abort);

			//console.log('trackingToBeSent = ' + trackingToBeSent);
			//console.log('s.c_w(\'lastPg\') = ' + s.c_r('lastPg'));

			if (!detailsCopy.s_abort) {
				if (!detailsCopy._drop) {
					// if two calls are fired; the 1st with a 5 sec delay, 2nd with 1 sec delay; the 2nd call will fire before the 1st, and 'previous page' will update according to the sequence the requests are sent
					s.c_w('lastPg', s.pageName, new Date(+new Date() + (24 * 60 * 60 * 1000))); // keep last page name in cookie for 24 hours to match with impressions

					// apply link tracking after every trackPage to handle any new links added to the DOM, and collect any new impressions to send with next page load
					// assumes any page requiring link tracking will also be tracked as a page (using this function)
					// s.w_linkTracking could be used as the success callback if a page should have link tracking, but not be tracked as a page

					//s.w_linkTrackingOrig(detailsCopy); // testing moving to doPlugins for click handler

					// collect impressions after page view if not s_abort (collecting for s_abort calls may cause double counting if also tracked with same call not aborted)
					// if trackDedupe or trackOnce, accuracy of prevous page data for any impressions would be impacted, so they also don't fire this
					if (!(/false/i).test(detailsCopy.autoImpr)) {
						s.w_trackImprs();
					}
				}

				// update for each call
				//s.trackInlineStats = !/false/i.test(detailsCopy.trackInlineStats);
				s.trackInlineStats = !(/false/i).test(detailsCopy.trackInlineStats) && (detailsCopy.experience !== 'titan'); // too many links in Voyager Titan experience for Android devices. zzzzz Data is not sent in Titan with trackPage anyway? Compare to s object when s.t() fires and sends
				//console.info('s.trackInlineStats = ' + s.trackInlineStats);

				// for mobile/SPA pages instead of only setting once at window load.
				// run only after page to ensure pageName in ClickMap matches tracked pageName
				// Once link IDs are set on any links, they are not removed, but new IDs will not be added to new SPA page links when trackInlineStats=false
				if (s.trackInlineStats) {
					// Need to decide which method to use before launch. www/forms/online use OnClick, OTP preference may be data-attribute
					// the version of the function not required anymore may be removed to reduce file size
					//s.setOIDsOnClick(); // legacy onclick method. 20140904: google indexing onclick details generated by this. changing to data attributes.
					s.setOIDsData(); // new data-attribute method
				}
			}

			//console.log('s.c_w(\'lastPg\') = ' + s.c_r('lastPg'));

			//}, sendDelay); // Default is 100ms. This is the time to wait after onload/trackPage call to ensure loadEventEnd measurement is available. Delay longer for Gomez
		}, s.w_sendDelayOffset); // Default is 100ms. This is the time to wait after onload/trackPage call to ensure loadEventEnd measurement is available. Delay longer for Gomez
	});
	//}
};

//s.w_sendPage=function(details){
//	var trackingToBeSent = 1;
//, winNav = window.navigator || {};

//	console.log('___ '+JSON.stringify(details));
//	console.log('___ s.events = '+s.events);

//if(pageDetails.trackOnce==='true' && s.w_pageTracked()){ // only track a pageName once per window load (e.g for single-page-application forms)
//	if(/true/i.test(details.trackOnce) && s.w_pageTracked(details.pageName)){ // only track a pageName once per window load (e.g for single-page-application forms)
//		trackingToBeSent=0;
//	}

//	if(trackingToBeSent){
// collect any data to be tracked with this call
//if(!/true/i.test(pageDetails.s_abort)){
//		if(!details.s_abort){ // any value in s.abort (or s_abort) will prevent tracking from being sent
//			s.w_collectStoredData(); // collect and remove data only if it is likely to actually be sent
//		}

//		s.t();
//		s.w_log(s.pageName); // log page name in dev if console available
//		s.w_endTrckng();

// apply link tracking after every trackPage to handle any new links added to the DOM, and collect any new impressions to send with next page load
// assumes any page requiring link tracking will also be tracked as a page
// s.w_linkTracking could be used as the success callback if a page should have link tracking, but not be tracked as a page

//		s.w_onReady(s.w_linkTracking);

//s.setOIDs(); // re-set clickmap custom objectIDs after each call, in case new links were added. reqd? also runs at start of trackPage


// After each page/step tracked, clear following pageDetails properties ready for next request.
// Clearing the whole object would require a complete new object for every page/step tracked
// Full pageDetails object for every request is now required
//delete pageDetails.externalSiteName;
//delete pageDetails.impressions;
//delete pageDetails.modules;
//delete pageDetails.errorCode;
//	}
//};


// check the difference between current and previous module sets
/*
s.w_checkModuleChanges_OrigVersion_doesntDetectMultiples=function(curr){
var lp,len,prev=s.c_r('s_mdls'),prevArray=prev.split(','),currArray=curr.split(','),changeArray=[];
if(curr){
// always update to latest modules if set
s.c_w('s_mdls',curr);
}
if((prev&&curr)&&(prev!==curr)){
// check for difference between both versions
//currArray.sort();
//prevArray.sort();

// need to add IE prototype
for(lp=0,len=currArray.length;lp<len;lp++){
if(prevArray.indexOf(currArray[lp])===-1){
changeArray.push('add:'+currArray[lp]);
}
}
for(lp=0,len=prevArray.length;lp<len;lp++){
if(currArray.indexOf(prevArray[lp])===-1){
changeArray.push('remove:'+prevArray[lp]);
}
}
}
// unless no difference, re-ordered only, or added/removed same module type, changeArray will be populated with details
//if(changeArray.length){
//	alert('diff');
//}
return changeArray.join(',');
};
 */

s.w_moduleLookup = function (mods, modKey) {
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

s.w_summarise = function (str) {
	//console.log(str);
	// function to summarise number of elements in a string to an object with the key of each item and value=count
	var lp,
		len,
		arr = str.split(','),
		sumObj = {};

	for (lp = 0, len = arr.length; lp < len; lp++) {
		sumObj[arr[lp]] = (str.match(new RegExp('(?:^|,)' + arr[lp] + '(?=,|$)', 'g')) || '').length;
	}
	return sumObj;
};

s.w_checkModuleChanges = function (prevCookie, curr) {
	var prev = s.c_r(prevCookie),
		summary = {},
		item,
		lp,
		changes = [];

	//console.log(prev);
	//console.log(curr);

	if ((prev && curr) && (prev !== curr)) {
		// summarise the two sets into the number of each item
		summary.cur = s.w_summarise(curr);
		summary.pre = s.w_summarise(prev);

		for (item in summary.cur) {
			// debug cur
			//console.log('cur '+item+': cur='+summary.cur[item]+' pre='+summary.pre[item]);
			if (summary.cur.hasOwnProperty(item)) {
				for (lp = 0; lp < (summary.cur[item] - (summary.pre[item] || 0)); lp++) {
					changes.push('+' + item);
				}
			}
		}
		for (item in summary.pre) {
			// debug pre
			//console.log('pre '+item+': cur='+summary.cur[item]+' pre='+summary.pre[item]);
			if (summary.pre.hasOwnProperty(item)) {
				for (lp = 0; lp < (summary.pre[item] - (summary.cur[item] || 0)); lp++) {
					changes.push('-' + item);
				}
			}
		}
	}
	if (curr) {
		// always update to latest modules when available
		s.c_w(prevCookie, curr);
	}
	// debug
	//console.log(summary);
	//if(changes.length){
	//	console.log('Changes = \n'+changes);
	//}
	// unless no difference, re-ordered only, or added/removed same module type, changeArray will be populated with details
	return changes.join(',');
};

// functions for custom link tracking
s.w_trackImpression = function (detail) {
	// function to store banner impressions if they are rendered post-load. updated to exclude undefined cookie read and blank values passed
	//var lp,len,target=detail.replace(/^,|,$/,'').split(',');
	var lp,
		len,
		newData,
		items,
		ckName,
		detailObj = detail,
		attrHref,
		linkHref,
		pidRecordedFlag = 'data-analytics-pid-rec';

	//console.log('==== s.c_r(banners) 1: len = ' + s.c_r('banners').split(',').length + '. ' + s.c_r('banners'));

	// only track banners if page not hidden? Prevent incorrect impression counts on wrong pages if multiple tabs, carousels scrolling, etc...
	//console.log('!s.w_pageHidden = ' + !s.w_pageHidden());
	if (!s.w_pageHidden()) {

		if (!s.w_pgTrkStatus && !pageDetails.s_abort) { // for imprs sent before trackPage runs first time on page
			ckName = 'asyncImp'; // impressions being collected on this page before any tracking sent. These impressions assumed to be for the current (non-SPA) page, with non-standard sequence of async calls. e.g impression, trackPage, impression
		}
		//if (!s.w_prevPgCkiesSent) {
		if (s.w_pgTrkStatus === 'started') {
			ckName = 'impTmp'; // impressions being collected on this page before previous tracking sent
		}
		if (s.w_pgTrkStatus === 'sent') {
			ckName = 'banners'; // from previous page, or after previous impressions have been sent
		}

		//if (s.w_pgTrkStatus === 'blocked') {
		//	newData = false;
		//}

		//console.log('s.w_trackImpression = ' + detail);
		//console.log('s.w_prevPgCkiesSent = ' + s.w_prevPgCkiesSent);
		//console.log('s.w_pgTrkStatus = ' + s.w_pgTrkStatus);

		//console.log('1. --- ' + newData);

		// allowing argument passed as link object (instead of pid string) so we can check element visibility directly, set recorded attribute to avoid double-counting.
		if (detailObj && detailObj.nodeName === 'A') {
			if (s.w_isVis(0, detailObj) && !detailObj.getAttribute(pidRecordedFlag)) {
				attrHref = detailObj.getAttribute('href');
				linkHref = /^#/.test(attrHref) ? attrHref : detailObj.href;
				detail = s.getQueryParam('pid', '', linkHref);
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
			newData = ckName === 'asyncImp' ? (s.w_asyncImp || '') : (s.c_r(ckName) || '');
			for (lp = 0, len = items.length; lp < len; lp++) {
				if (items[lp]) {
					newData = s.apl(newData, s.w_lCase(items[lp]), ',', 2);
				}
			}
			// if the cookie has more than five banners send a custom request to prevent the string becoming truncated? How long are the pid's? evar=255 chars
			//s.c_w('banners',newData);
			if (ckName === 'asyncImp') {
				s.w_asyncImp = newData; // impressions passed before trackPage has been called for the first time on a page load (to be associated with current page, sent on next page)
			} else {
				s.c_w(ckName, newData, new Date(+new Date() + (24 * 60 * 60 * 1000))); // keep impressions in cookie for 24 hours
			}
		}
	}
	//console.log('==== s.c_r(impTmp) = ' + s.c_r('impTmp'));
	//console.log('==== s.c_r(banners) 2: len = ' + s.c_r('banners').split(',').length + '. ' + s.c_r('banners') + '\n===================================================');
	return newData;
};

s.w_trackLinkSocial = function (evt) {
	var eTarg = s.w_getEvtTrgt(evt, 'href');
	s = s_gi(s_account);
	//s.events = 'event71';
	s.linkTrackEvents = s.events = 'event71';
	//s.linkTrackVars='prop15,prop69,eVar56,prop56,events';
	s.linkTrackVars = s.w_ltv + ',eVar56,prop56,events'; // includes eVar21 and c39
	s.eVar56 = s.w_lCase(eTarg.href, 1);
	s.prop56 = 'D=v56';
	s.tl(eTarg || true, 'e', 'social:' + s.w_lCase(eTarg.href, 1)); // 'eTarg' assumes this function only called from link clicks
	s.w_endTrckng();
};

s.w_trackLinkExit = function (evt) {
	var eTarg = s.w_getEvtTrgt(evt, 'href');
	s = s_gi(s_account);
	//s.events = ''; // no specific event for exit, but need to clear any events set by previous calls
	s.linkTrackEvents = s.events = '';
	//s.linkTrackVars='prop15,prop69';
	s.linkTrackVars = s.w_ltv;
	//eTarg.s_oid=s_objectID; // makes clickmap cookie record correct ID, but cookie shouldnt even be set - correct clickmap data sent immediately for e,o,d links
	s.tl(eTarg || true, 'e', s.w_lCase(eTarg.href, 1)); // 'eTarg' assumes this function only called from link clicks
	s.w_endTrckng();
};

s.w_trackLinkDownload = function (evt) {
	var eTarg = s.w_getEvtTrgt(evt, 'href'),
		//pd=(/(?:^|\s)disclosure(?:\s|$)/.test(eTarg.className)?'pds:':''); // class or data-attribute to identify product disclosure downloads
		pd = (((/pds\.pdf(?:\?|$)/i).test(eTarg.href) || ((/\b(terms\ and\ conditions|product\ disclosure\ statement)\b/i).test(eTarg.innerHTML) && (/\.pdf(?:\?|$)/i).test(eTarg.href))) ? 'pds:' : ''); // ...pds.pdf in href or T and C in link text to identify product disclosure downloads
	s = s_gi(s_account);
	s.events = 'event67';
	if (pd) {
		//s.events+=',event31';
		s.w_addEvt(31);
	}
	s.linkTrackEvents = s.events;
	//s.linkTrackVars='prop15,prop69,eVar61,prop61,events';
	s.linkTrackVars = s.w_ltv + ',eVar61,prop61,events';
	s.eVar61 = pd + (s.w_lCase(eTarg.href, 1).replace(/(.*\/)?(\.*?)/, '$2')); // record file name only
	s.prop61 = 'D=v61';
	s.tl(eTarg || true, 'd', pd + s.w_lCase(eTarg.href, 1)); // 'eTarg' assumes this function only called from link clicks
	s.w_endTrckng();
};

s.w_trackInteraction = function (evt, args) {
	var argsObj = args || {},
		eTarg = s.w_getEvtTrgt(evt, argsObj.detail ? 'href' : 'data-analytics-link'),
		detail = s.w_clean(decodeURIComponent(s.w_lCase(argsObj.detail || (eTarg && eTarg.getAttribute('data-analytics-link')), 1))); // tracks details from object passed or event target with data-analytics-link attribute

	if (detail === 'download') {
		s.w_trackLinkDownload(evt); // Some downloads in OTP are tagged directly as a 'download' (button tags etc. instead of a href)
		return;
	}

	s = s_gi(s_account);
	//s.events = 'event69';
	s.linkTrackEvents = s.events = 'event69';
	//s.linkTrackVars='prop15,prop69,eVar54,prop54,events';
	s.linkTrackVars = s.w_ltv + ',eVar54,prop54,events';
	s.eVar54 = detail;
	s.prop54 = 'D=v54';
	s.tl(eTarg || true, 'o', 'interaction:' + detail); // 'eTarg' assumes this function only called from link clicks

	if (argsObj.stopDefault) {
		// dont stop default event unless specified
		s.w_stopEvt(evt);
	}
	s.w_endTrckng();
};

/*
// s.w_trackPersonalisation replaced by function to call every time on dashboard page to compare current to previous modules and diff for added/removed
s.w_trackPersonalisation=function(evt){
var eTarg=s.w_getEvtTrgt(evt),name=s.w_lCase(eTarg.getAttribute('data-analytics-name'),1),action=s.w_lCase(eTarg.getAttribute('data-analytics-action'),1),extSiteName=s.w_lCase(eTarg.getAttribute('data-analytics-extSiteName')); // data attributes TBC
s=s_gi(s_account);
s.events='event70';
s.linkTrackEvents=s.events;
s.linkTrackVars='prop15,prop69,prop64,events';
s.prop64='list of modules';
s.tl(eTarg,'o','personalisation:edit modules'); // 'eTarg' assumes this function only called from link clicks
s.w_endTrckng();
};
 */

//s.w_trackBannerDismiss=function(evt,detail,stopDefault){
/*
s.w_trackBannerDismiss=function(evt,argsObj){
var eTarg=s.w_getEvtTrgt(evt),argsObj=(argsObj||{});
detail=s.w_lCase(argsObj.detail||(eTarg ? eTarg.getAttribute('data-analytics-pid') : ''), 1); // data attribute or href querystring for PID value TBC
s=s_gi(s_account);
s.events='event17';
s.linkTrackEvents=s.events;
s.linkTrackVars='prop15,prop69,eVar24,events';
s.eVar24=detail;
s.tl((eTarg || true),'o','internal campaign dismiss'); // details passed or from event target

if(argsObj.stopDefault){
// dont stop default event unless specified
s.w_stopEvt(evt);
}
s.w_endTrckng();
};
 */

s.w_trackBannerDismiss = function (detail) {
	detail = s.w_lCase(detail, 1); // href querystring PID value passed into this function
	s = s_gi(s_account);
	//s.events = 'event17';
	s.linkTrackEvents = s.events = 'event17';
	//s.linkTrackVars='prop15,prop69,eVar24,events';
	s.linkTrackVars = s.w_ltv + ',eVar24,events';
	s.eVar24 = detail;
	s.tl(true, 'o', 'internal campaign dismiss');
	s.w_endTrckng();
};

s.w_trackClickToCall = function (evt) {
	var eTarg = s.w_getEvtTrgt(evt, 'href'),
		detail = decodeURI(s.w_lCase(eTarg.href, 1)).replace(/^tel:|\s+/gi, ''); // Appears in the Page interactions name report (v54). custom call links may not have friendly href
	s = s_gi(s_account);
	//s.events = 'event61,event69';
	s.linkTrackEvents = s.events = 'event61,event69';
	//s.linkTrackVars='prop15,prop69,eVar54,prop54,eVar59,events';
	s.linkTrackVars = s.w_ltv + ',eVar54,prop54,eVar59,events';
	s.eVar54 = 'call:' + detail;
	s.prop54 = 'D=v54';
	s.eVar59 = detail;

	//s.forcedLinkTrackingTimeout = 500;
	//s.useForcedLinkTracking = false;

	s.tl(eTarg || true, 'o', 'interaction:call:' + detail); // 'eTarg' assumes this function only called from link clicks
	//s.tl(eTarg||true,'o','interaction:call:'+detail, null, 'navigate'); // 'eTarg' assumes this function only called from link clicks // this or 'navigate' breaks FF in test page?
	s.w_endTrckng();
	//s.w_stopEvt(evt); // this or navigate breaks FF in test page?
};

s.w_trackLiveChat = function (evt, args) {
	// this function is called directly by LivePerson code when the Interactive Chat event is fired in LivePerson
	var eTarg = s.w_getEvtTrgt(evt),
		argsObj = args || {},
		detail = s.w_lCase(argsObj.detail, 1); // details passed from LivePerson rule
	s = s_gi(s_account);
	//s.events = 'event63,event69';
	s.linkTrackEvents = s.events = 'event63,event69';
	//s.linkTrackVars='prop15,prop69,eVar54,prop54,eVar57,prop57,events';
	s.linkTrackVars = s.w_ltv + ',eVar54,prop54,eVar57,prop57,events';
	s.eVar54 = 'live chat:' + detail;
	s.prop54 = 'D=v54';
	s.eVar57 = s.w_lCase(argsObj.session, 1);
	s.prop57 = 'D=v57';
	s.tl(eTarg || true, 'o', 'interaction:live chat:' + detail); // (eTarg||true) allows this function to be called from script or link clicks
	s.w_endTrckng();
};

s.w_trackRank = function (evt) {
	// Track search result rank clicks
	// this refers to data set by another script on the funnelback search results page
	var eTarg = s.w_getEvtTrgt(evt, 'data-analytics-rank'),
		detail = s.w_lCase(eTarg && eTarg.getAttribute('data-analytics-rank'), 1);

	s.c_w('cpr', detail);
	//alert('Set cookie, rank: '+detail);
	//s.w_stopEvt(evt);
};

/*
s.w_trackLinkIntSearch=function(){
// track internal search result click-throughs with rank
var lp,len,target;
//var lp,len,rank,target=s.w_altGetElemsByClassName(document.body,'A','search-results'); // confirm class etc.
//for(lp=0,len=target.length,rank=(getQuerystringParam('start_rank','',s.w_getLoc().href)||1);lp<len;lp++){
//	target[lp].setAttribute('data-analytics-rank',rank);
target=s.w_qSA(document,'a[data-analytics-rank]', 'a', 'data-analytics-rank', /.+/); // data-attribute are set by code on page
for(lp=0,len=target.length;lp<len;lp++){
s.w_addHandler(target[lp],'click',s.w_trackRank);
}
};
 */

s.w_trackErrorCount = function (count, errCodes) {
	if (count && count > s.c_r('errCount')) {
		if (!errCodes) {
			s.c_w('errCode', s.apl(s.c_r('errCode'), '(count)', ',', 2));
		}
		s.c_w('errCount', count);
	}
};

s.w_trackError = function (detail) {
	//var doc = document,
	var lp,
		len,
		target;

	// if function called with no detail passed, scan page and track errors/count of errors found by className/data-attr?
	if (!detail) {
		// capture any error message elements tagged with a data-attr or className containing the error code
		//target = s.w_qSA(doc, '[data-analytics-error]', '*', 'data-analytics-error', /.*/);
		//var target = s.w_altGetElemsByClassName(doc.body,'span','error-label'); // look for number of li in errorLinks div id
		target = document.getElementById('error-message'); //.getElementsByTagName('li'); // look for number of li in errorLinks div id
		if (target) {
			len = target.getElementsByTagName('li').length; // look for number of li in errorLinks div id
			// store number of errors if more then previously stored (capture the highest number of errors the user has seen per page)
			//if(len&&len>s.c_r('errCount')){
			//	s.c_w('errCode',s.w_inlErr); // this text is matched on page load to determine error count prefix
			//	s.c_w('errCount',len);
			//}
			s.c_w('errCode', s.apl(s.c_r('errCode'), '(auto)', ',', 2));
			s.w_trackErrorCount(len, true);
		}

		// capture all error item text. put value into list? prop17?
		/*
		for(lp=0,len=target.length;lp<len;lp++){
		// store errors in var and send list to function?
		detail=s.apl(detail,(target[lp].textContent||target[lp].innerText),',',2);
		}
		 */
	}
	// send errors if any as custom link request
	/*
	if(detail){
	detail=s.w_lCase(detail,1);
	s=s_gi(s_account);
	s.linkTrackVars='prop15,prop69,prop17';
	//s.prop17=s.siteID+':'+detail;
	s.prop17=detail; // capture as list prop?
	s.tl(true,'o','page code error'); // 'true' assumes this function only called from script, not link clicks
	s.w_endTrckng();
	}
	 */

	// always store errors in cookie for next page
	else {
		// Split error fields from Domino like -
		// NumApplicants;ConfirmCompared;ConfirmResident;ReadConsent;ConfirmElectronic;Email_1;EmailConfirm_1;
		// NumApplicants,ConfirmCompared,ConfirmResident,ReadConsent,ConfirmElectronic,Email_1,EmailConfirm_1,
		//target=detail.replace(/^,|,$/,'').split(',');
		target = String(detail || '').split(',');

		detail = s.c_r('errCode');
		for (lp = 0, len = target.length; lp < len; lp++) {
			if (target[lp]) {
				//detail=s.apl(detail,s.w_lCase(target[lp]),',',2);
				detail = s.apl(detail, s.w_lCase(s.w_clean(s.w_clean(target[lp]).substring(0, 50))), ',', 2); // trimmed length to 50 chars to ensure useful data and minimise pixel length
			}
		}
		//s.c_w('errCode',s.apl(s.c_r('errCode'),s.w_lCase(detail),',',2));
		//s.c_w('errCount',(+s.c_r('errCount'))+1); // increment number of errors seen
		s.c_w('errCode', detail);
		s.w_trackErrorCount(detail.split(',').length, true);
	}
};

/*
Custom link tracking function. Arguments are -
event
Custom link name
Custom link type (e,o,d)
Omniture s object of variables. e.g. {'events':'event46,event53','eVar23':'custom details','prop23':'D=v23'}
 */
s.w_trackLinkCustom = function (evt, linkName, linkType, s_obj) {
	//console.log('=== 1 '+s_obj);
	var eTarg = s.w_getEvtTrgt(evt),
		prpty,
		passedLinkTrackVars = [],
		//tempPageDetails = {};
		tempPageDetails = s.w_tempPageDetails || {}; // to automatically get page name etc. from previous page calls. pageName can also be set in s_obj with other custom details

	s = s_gi(s_account);

	for (prpty in s_obj) {
		// allow any property set in custom link call to pass into temp details, then apply a filter only once as vars are set onto s object
		if (s_obj.hasOwnProperty(prpty) && s_obj[prpty] && typeof s_obj[prpty] !== 'function') {
			passedLinkTrackVars.push(prpty);
			//pageDetails['temp_'+prpty]=s_obj[prpty]; // set the custom link details as temp override values on the s object to bypass doPlugins rules overriding the custom values passed
			tempPageDetails['temp_' + prpty] = s_obj[prpty]; // copying details to new object for async instead of window.pageDetails
			//console.log(prpty+' = '+pageDetails['s_'+prpty]+' - '+typeof prpty);
		}
	}
	//passedLinkTrackVars.join(',');
	//console.log(passedLinkTrackVars);
	//passedLinkTrackVars+=',prop15,prop69'; // always include prev page name + req length
	//passedLinkTrackVars+=','+s.w_ltv; // always include prev page name + req length and other default linkTrackVars

	// ensure all vars set above in custom override are included in filter (also in override)
	//console.log('=== 2 '+s_obj.linkTrackVars);
	//pageDetails.temp_linkTrackVars = s.w_ltv + ',' + passedLinkTrackVars; // the array above is converted to comma-string when appended
	tempPageDetails.temp_linkTrackVars = s.w_ltv + ',' + passedLinkTrackVars; // the array above is converted to comma-string when appended
	//console.log('---'+pageDetails.temp_linkTrackVars);

	// ensure all events set above in custom override are included in filter (also in override)
	if (s_obj.events) {
		//pageDetails.temp_linkTrackEvents=s_obj.events.replace(/\=.*?(?=,|$)/g,''); // automatically track all events passed. remove value from any numeric/currency events like event5=100 or they will be filtered out
		tempPageDetails.temp_linkTrackEvents = s_obj.events.replace(/\=.*?(?=,|$)/g, ''); // automatically track all events passed. remove value from any numeric/currency events like event5=100 or they will be filtered out
	}

	//console.log(tempPageDetails);
	s.w_queue.unshift(tempPageDetails); // unshift to insert at bottom of array for the following s.tl
	s.tl(eTarg || true, linkType, linkName, s_obj); // (eTarg||true) allows this function to be called from script or link clicks
	s.w_endTrckng();
};

s.w_amntBnds = function (type, transactionValue) { // type not required? all use the same bands
	var bands,
		band = {
			'range': type + ':NaN', // default to unknown currency/value
			'avg': 0 // default
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
	/*
	if(type==='personal loan'){
	bands={
	// use same bands as car loans?
	'0-4K':[0,4],
	'4K-10K':[4,10],
	'10K-20K':[10,20],
	'20K-30K':[20,30],
	'30K-50K':[30,50],
	'50K+':[50,'+']
	};
	}
	if(type==='car loan'){
	bands={
	'0-5K':[0,5],
	'5K-10K':[5,10],
	'10K-20K':[10,20],
	'20K-30K':[20,30],
	'30K-50K':[30,50],
	'50K+':[50,'+']
	};
	}
	 */

	// all bands can use the same grouping. different payment types may only use a subset of these bands

	//if(/anyone|transfer|bpay|internat/i.test(type)){ // confirm types. Extend bands to allow for Home loans?
	/*bands_Orig={
	'0-100':[0,0.1],
	'100-500':[0.1,0.5],
	'500-1K':[0.5,1],
	'1K-2K':[1,2],
	'2K-5K':[2,5],
	'5K-10K':[5,10],
	'10K-20K':[10,20],
	'20K-30K':[20,30],
	'30K-50K':[30,50],
	'50K-100K':[50,100],
	'100K-150K':[100,150],
	'150K-200K':[150,200],
	'200K-250K':[200,250],
	'250K+':[250,'+']
	};*/

	/*
	bands = {
	'0' : [[-1, 0], 0],
	'0-100' : [[0, 0.1], 0.05],
	'100-500' : [[0.1, 0.5], 0.3],
	'500-1K' : [[0.5, 1], 0.75],
	'1K-2K' : [[1, 2], 1.5],
	'2K-5K' : [[2, 5], 3.5],
	'5K-10K' : [[5, 10], 7.5],
	'10K-20K' : [[10, 20], 15],
	'20K-30K' : [[20, 30], 25],
	'30K-50K' : [[30, 50], 40],
	'50K-100K' : [[50, 100], 75],
	'100K-150K' : [[100, 150], 125],
	'150K-200K' : [[150, 200], 175],
	'200K-250K' : [[200, 250], 225],
	'250K+' : [[250, '+'], 275]
	};
	 */

	bands = {
		'0': {
			min: -1,
			max: 0,
			avg: 0
		},
		'0-100': {
			min: 0,
			max: 0.1,
			avg: 0.05
		},
		'100-500': {
			min: 0.1,
			max: 0.5,
			avg: 0.3
		},
		'500-1K': {
			min: 0.5,
			max: 1,
			avg: 0.75
		},
		'1K-2K': {
			min: 1,
			max: 2,
			avg: 1.5
		},
		'2K-5K': {
			min: 2,
			max: 5,
			avg: 3.5
		},
		'5K-10K': {
			min: 5,
			max: 10,
			avg: 7.5
		},
		'10K-20K': {
			min: 10,
			max: 20,
			avg: 15
		},
		'20K-30K': {
			min: 20,
			max: 30,
			avg: 25
		},
		'30K-50K': {
			min: 30,
			max: 50,
			avg: 40
		},
		'50K-100K': {
			min: 50,
			max: 100,
			avg: 75
		},
		'100K-150K': {
			min: 100,
			max: 150,
			avg: 125
		},
		'150K-200K': {
			min: 150,
			max: 200,
			avg: 175
		},
		'200K-250K': {
			min: 200,
			max: 250,
			avg: 225
		},
		'250K+': {
			min: 250,
			max: '+',
			avg: 275
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

// check if whole page is hidden/visible
s.w_pageHidden = function () {
	return document.hidden || (document.msHidden || document.webkitHidden);
};

// moved from original responsive CSS function in analytics.js
s.w_isVis = function (selector, element) {
	var elem = selector ? document.querySelector && document.querySelector(selector) : element,
		ieDisplayNoneBug;
	// fix for IE bug with inline and block elements stating offsets incorrectly
	ieDisplayNoneBug = elem && elem.currentStyle && elem.currentStyle.display === 'none' ? true : false;
	return elem && (elem.offsetWidth > 0 && elem.offsetHeight > 0) && !ieDisplayNoneBug; // other conditions can be added if required
};

s.w_trackImprs = function () {
	var lp,
		targetSet,
		targetItem,
		linkHref,
		attrHref,
		linkPid,
		pidRecordedFlag = 'data-analytics-pid-rec',
		arrImprs = [];

	//targetSet = document.getElementsByTagName('A');
	targetSet = s.w_qSA(document, "a[href*='pid\\=']", 'A', 'href', (/pid=/i));

	lp = targetSet.length;
	while (lp--) {
		// check for any links with pid= and add them to the impressions list
		// THIS BLOCK SHOULD RUN AFTER S.T(), ELSE DOPLUGINS WILL TRACK IMPRESSIONS WITH THE CURRENT PAGE (post-load impressions are only meaningfully reported against previous page)
		targetItem = targetSet[lp];

		// if it's an anchor link, look in the anchor only, not full URL in case already a pid click parameter in current querystring
		attrHref = targetItem.getAttribute('href');
		linkHref = /^#/.test(attrHref) ? attrHref : targetItem.href;
		linkPid = s.getQueryParam('pid', '', linkHref);

		/*
		if (linkPid) {
		console.log(targetItem.href);
		console.log('s.w_trackImprs found pid: ' + linkPid);
		console.log('Visible size?: ' + targetItem.offsetWidth + 'x' + targetItem.offsetHeight + '. Vis test === ' + (linkPid && s.w_isVis(0, targetItem)));
		}
		 */

		// fix for IE bug with inline and block elements stating offsets incorrectly
		//ieDisplayNoneBug = target[lp].currentStyle && target[lp].currentStyle.display === 'none' ? true : false;

		// not an impression if the element is not visible
		//if (linkPid && (target[lp].offsetWidth > 0 && target[lp].offsetHeight > 0)) {
		//if (linkPid && (target[lp].offsetWidth > 0 && target[lp].offsetHeight > 0) && !ieDisplayNoneBug) {
		//if (linkPid && s.w_isVis(0, targetItem)) {
		if (linkPid && s.w_isVis(0, targetItem) && !targetItem.getAttribute(pidRecordedFlag)) {

			// if not already collected on this window load
			//window.console && console.log(linkPid + ' collected? = ' + targetItem.getAttribute(pidRecordedFlag));

			arrImprs.push(linkPid.replace(/,/g, '%2C')); // encode commas in url pid's so they arent split into multiple impressions

			// set a flag
			targetItem.setAttribute(pidRecordedFlag, '1');
		}
	}
	if (arrImprs) {
		//window.console && console.log('s.w_trackImprs to send = ' + arrImprs.join(','));
		s.w_trackImpression(arrImprs.join(','));
	}
};

// moved up for use by new setOIDs function when added to window load listener
/*
 * Plugin Utility: Replace v1.0
 */
s.repl = function (x, o, n) {
	var i = x.indexOf(o),
		l = n.length;
	while (x && i >= 0) {
		x = x.substring(0, i) + n + x.substring(i + o.length);
		i = x.indexOf(o, i + l);
	}
	return x;
};

// functions to apply automatic link tracking

/*
 * DynamicObjectIDs v1.4: Setup Dynamic Object IDs based on URL
 */

/*
s.setupDynamicObjectIDs=new Function("" // adds listener to call s.setOIDs at window.onload
+"var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv"
+">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else"
+" if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa"
+"lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho"
+"re=1}");
 */

// documentation says non-zero means clickmap data not yet ready to be accessed by ClickMap plugin
//s.wd.s_semaphore = 1; // clickmap data not ready to be accessed by ClickMap plugin...

// Original setOIDs function sets custom object IDs in onclick. Modified to add object-id attribute to provide unique clickmap ID for custom links
/*
s.setOIDsOnClick = function (e) {
var z,
s = s_c_il[window.s._in],
b = s.eh(s.wd, 'onload'),
o = 'onclick',
x,
l,
u,
c,
i,
a = [];
if (s.doiol) {
if (b) {
s[b] = s.wd[b];
}
s.doiol(e);
}
if (s.d.links) {
for (i = 0; i < s.d.links.length; i++) {
l = s.d.links[i];
c = l[o] ? String(l[o]) : '';
b = s.eh(l, o);
z = l[b] ? String(l[b]) : '';
u = s.getObjectID(l);
if (u && c.indexOf('s_objectID') < 0 && z.indexOf('s_objectID') < 0) {
u = s.repl(u, '\"', '');
u = s.repl(u, '\\n', '').substring(0, 97);
l.s_oc = l[o];
a[u] = a[u] ? a[u] + 1 : 1;
x = '';
if (c.indexOf('.t(') >= 0 || c.indexOf('.tl(') >= 0 || c.indexOf('s_gs(') >= 0) {
x = 'var x=\".tl(\";';
}
x += 's_objectID=\"' + u + '_' + a[u] + '\";return this.s_oc?this.s_oc(e):true';
if (s.isns && s.apv >= 5) {
l.setAttribute(o, x);
}

// add data-attribute for clickmap (as well as onclick above), otherwise custom links don't record their respective unique link IDs
l.setAttribute('data-s-object-id', u + '_' + a[u]);

l[o] = new Function('e', x);
}
}
}
s.wd.s_semaphore = 0;
return true;
};
 */

// New setOIDs method to set ID in data-attribute. Requires update to ClickMap addon to recognise the data-attribute
// Legacy clickmap addon doesn't detect these link IDs to display overlay
s.setOIDsData = function () { // TODO: zzzzz maybe pass in element to scan links within, instead of whole document. (e.g. maybe only current view div)
	var sObj = s_c_il[window.s._in],
		theLink,
		uniqueId,
		loop,
		linkIdArray = [],
		docLinks = document.links,
		docLinksLen = docLinks.length;

	if (docLinks) {
		for (loop = 0; loop < docLinksLen; loop++) {
			theLink = docLinks[loop];
			uniqueId = sObj.getObjectID(theLink);
			if (uniqueId) {
				uniqueId = sObj.repl(uniqueId, '\"', '');
				uniqueId = sObj.repl(uniqueId, '\\n', '').substring(0, 97);
				linkIdArray[uniqueId] = linkIdArray[uniqueId] ? linkIdArray[uniqueId] + 1 : 1;

				theLink.setAttribute('data-s-object-id', uniqueId + '_' + linkIdArray[uniqueId]);
			}
		}
	}
	//sObj.wd.s_semaphore = 0; // old Omniture documentation says zero signals ready
	return true;
};

// Apply clickmap details - at initial window load only. Moved to fire after each trackPage instead of only once per window load
// // s.setupDynamicObjectIDs(); // just adds the s.setOIDs handler to window.onload
//if (s.trackInlineStats) { //  && s_account==s.w_acctMob;){
//	//s.w_onReady(s.setOIDsOnClick);
//	s.w_onReady(s.setOIDsData);
//}

// link tracking handler
s.w_linkTracking = function (evt) {
	var target = s.w_getEvtTrgt(evt, 'href'),
		linkRegexInternal = new RegExp(s.linkInternalFilters.replace(/^,|,$/g, '').replace(/,/g, '|'), 'i'),
		linkRegexDownload = new RegExp('\\.(?:' + s.linkDownloadFileTypes.replace(/,/g, '|') + ')(?:\\?|$)', 'i'),
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
		s.w_getNavMenuId(evt);

		// social link handling (social link event)
		if ((!linkRegexInternal.test(target.href)) && (linkRegexSocial.test(target.href))) {
			s.w_trackLinkSocial(evt);
		}
		// exit link handling
		if (target.href && (!linkRegexInternal.test(target.href)) && (!linkRegexSocial.test(target.href))) {
			s.w_trackLinkExit(evt);
		}
		// download link handling. data-analytics-link attribute used in OTP to define some download links/buttons
		if (linkRegexDownload.test(target.href)) {
			s.w_trackLinkDownload(evt);
		}
		// site search results link tracking
		if (target.getAttribute('data-analytics-rank')) { // && /.+/.test(target.getAttribute('data-analytics-rank'))) { // previously in selenium two commands were required to capture the rank and click-past. The listener now captures the details in the first click
			s.w_trackRank(evt);
		}
		// Print link on branch detail page has class=print
		//if (target.getAttribute('data-analytics-link')) { // && /.+/.test(target.getAttribute('data-analytics-rank'))) {
		dataAnalyticsLink = target.getAttribute('data-analytics-link');
		//console.log('dataAnalyticsLink = ' + dataAnalyticsLink);
		if (dataAnalyticsLink) { // && /.+/.test(target.getAttribute('data-analytics-rank'))) {
			if (!linkRegexDownload.test(target.href)) { // only if hasn't already been matched by linkRegexDownload regex above (OTP downloads may use data-attrs instead)
				s.w_trackInteraction(evt);

				if (/^trackonce:/i.test(dataAnalyticsLink)) { // if the link name (data-analytics-link attribute value) starts with 'trackonce:', only track once, then remove the value to prevent subsequent click tracking
					target.setAttribute('data-analytics-link', '');
				}
			}
		}
		// tel: links
		if (/^tel:/i.test(target.href)) {
			s.w_trackClickToCall(evt);
		}
		// mailto: links?
		if (/^mailto:/i.test(target.href)) {
			target.setAttribute('data-analytics-link', 'email:' + decodeURI(target.href.replace(/^mailto:/i, ''))); // added .replace(/^mailto:/i,'')
			s.w_trackInteraction(evt);
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
		s.c_w('navt', + new Date(), new Date(+new Date() + 30000)); // cookie updated every click and only lasts for 30 seconds
	}
};
// attach link handler to document
s.w_addHandler(document, 'click', s.w_linkTracking); // testing handler on document instead of applying directly to every link. Simulate jQuery .on()


/*
 * s.w_channelManager = channelManager v2.8 - Tracking External Traffic (with mod for full URL: s.w_getLoc().href)
 */
s.w_channelManager = function (a, b, c, d, e, f, g) {
	var s = this,
		h = new Date(),
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
		S;
	h.setTime(h.getTime() + 1800000);
	if (e) {
		i = 1;
		if (s.c_r(e)) {
			i = 0;
		}
		if (!s.c_w(e, 1, h)) {
			s.c_w(e, 1, 0);
		}
		if (!s.c_r(e)) {
			i = 0;
		}
		if (f && s.c_r('s_tbm' + f)) {
			i = 0;
		}
	}
	j = s.referrer || document.referrer;
	j = j.toLowerCase();
	if (!j) {
		k = 1;
	} else {
		l = j.indexOf('?') > -1 ? j.indexOf('?') : j.length;
		m = j.substring(0, l);
		n = s.split(j, '/');
		o = n[2].toLowerCase();
		p = s.linkInternalFilters.toLowerCase();
		p = s.split(p, ',');
		for (q = 0; q < p.length; q++) {
			r = o.indexOf(p[q]) == -1 ? '' : j;
			if (r) {
				break;
			}
		}
	}
	if (!r && !k) {
		t = j;
		u = v = o;
		w = 'Other Natural Referrers';
		x = s.seList + '>' + s._extraSearchEngines;
		if (d == 1) {
			m = s.repl(m, 'oogle', '%');
			m = s.repl(m, 'ahoo', '^');
			j = s.repl(j, 'as_q', '*');
		}
		y = s.split(x, '>');
		for (z = 0; z < y.length; z++) {
			A = y[z];
			A = s.split(A, '|');
			B = s.split(A[0], ',');
			for (C = 0; C < B.length; C++) {
				D = m.indexOf(B[C]);
				if (D > -1) {
					if (A[2]) {
						E = v = A[2];
					} else {
						E = o;
					}
					if (d == 1) {
						E = s.repl(E, '#', ' - ');
						j = s.repl(j, '*', 'as_q');
						E = s.repl(E, '^', 'ahoo');
						E = s.repl(E, '%', 'oogle');
					}
					F = s.split(A[1], ',');
					for (G = 0; G < F.length; G++) {
						if (j.indexOf(F[G] + '=') > -1 || j.indexOf('https://www.google.') == 0) {
							H = 1;
						}
						I = s.getQueryParam(F[G], '', j).toLowerCase();
						if (H || I) {
							break;
						}
					}
				}
				if (H || I) {
					break;
				}
			}
			if (H || I) {
				break;
			}
		}
	}
	if (!r || g != '1') {
		r = s.getQueryParam(a, b, s.w_getLoc().href);
		if (r) {
			v = r;
			if (E) {
				w = 'Paid Search';
			} else {
				w = 'Unknown Paid Channel';
			}
		}
		if (!r && E) {
			v = E;
			w = 'Natural Search';
		}
	}
	if (k == 1 && !r && i == 1) {
		t = u = v = w = 'Typed/Bookmarked';
	}
	J = s._channelDomain;
	if (J && o) {
		K = s.split(J, '>');
		for (L = 0; L < K.length; L++) {
			M = s.split(K[L], '|');
			N = s.split(M[1], ',');
			O = N.length;
			for (P = 0; P < O; P++) {
				Q = N[P].toLowerCase();
				R = o.indexOf(Q);
				if (R > -1) {
					w = M[0];
					break;
				}
			}
			if (R > -1) {
				break;
			}
		}
	}
	J = s._channelParameter;
	if (J) {
		K = s.split(J, '>');
		for (L = 0; L < K.length; L++) {
			M = s.split(K[L], '|');
			N = s.split(M[1], ',');
			O = N.length;
			for (P = 0; P < O; P++) {
				R = s.getQueryParam(N[P], '', s.w_getLoc().href);
				if (R) {
					w = M[0];
					break;
				}
			}
			if (R) {
				break;
			}
		}
	}
	J = s._channelPattern;
	if (J) {
		K = s.split(J, '>');
		for (L = 0; L < K.length; L++) {
			M = s.split(K[L], '|');
			N = s.split(M[1], ',');
			O = N.length;
			for (P = 0; P < O; P++) {
				Q = N[P].toLowerCase();
				R = r.toLowerCase();
				S = R.indexOf(Q);
				if (S == 0) {
					w = M[0];
					break;
				}
			}
			if (S == 0) {
				break;
			}
		}
	}
	S = w ? r + u + w + I : '';
	c = c || 'c_m';
	if (c != '0') {
		S = s.getValOnce(S, c, 0);
	}
	if (S) {
		s._campaignID = r || 'n/a';
		s._referrer = t || 'n/a';
		s._referringDomain = u || 'n/a';
		s._campaign = v || 'n/a';
		s._channel = w || 'n/a';
		s._partner = E || 'n/a';
		s._keywords = H ? I || 'Keyword Unavailable' : 'n/a';
		if (f && w != 'Typed/Bookmarked') {
			h.setTime(h.getTime() + f * 86400000);
			s.c_w('s_tbm' + f, 1, h);
		}
	}
};

/*
 * Plugin: getTimeToComplete 0.5a Westpac - modified so it actually works... return the time from start to stop. runs once per cookie
 */
s.getTimeToComplete = function (v, cn, e) {
	var s = this,
		d = new Date(),
		x = d,
		k,
		td = 86400,
		th = 3600,
		tm = 60,
		r = 5,
		u,
		un;
	if (!s.c_r) {
		s = window.s; // added alternate for when called outside of this scope
	}
	if (!s['getTime_' + cn] || v == 'stop') {
		e = e || 0;
		if (v == 'start' || v == 'stop') {
			s['getTime_' + cn] = 1;
		}
		x.setTime(x.getTime() + e * 86400000);
		if (v == 'start') {
			//console.log('start...');
			s.c_w(cn, d.getTime(), e ? x : 0);
			return '';
		}
		if (v == 'stop') {
			//console.log('stop...');
			k = s.c_r(cn);
			//console.log('c_w = '+s.c_w(cn, '', d));
			//console.log('c_w = '+s.c_w(cn, '', new Date));
			if (!s.c_w(cn, '', new Date()) || !k) {
				return '';
			}
			v = (d.getTime() - k) / 1000;
			if (v > td) {
				u = td;
				un = 'days';
			} else {
				if (v > th) {
					u = th;
					un = 'hrs';
				} else {
					if (v > tm) {
						r = 2;
						u = tm;
						un = 'mins';
					} else {
						r = 0.2;
						u = 1;
						un = 'secs';
					}
				}
			}
			v = v * r / u;
			//console.log('time = '+(Math.round(v) / r) + ' ' + un);
			return (Math.round(v) / r) + ' ' + un;
		}
	}
	return '';
};

/*
s.getTimeToComplete = function (v, cn, e) {
var s = this,d = new Date(),x = d,k;
if(!s.c_r){s=window.s;} // added alternate for when called outside of this scope
if (!s[cn] || v == 'stop') {e = e || 0;if (v == 'start' || v == 'stop') {s[cn] = 1;}x.setTime(x.getTime() + e * 86400000);if (v == 'start') {s.c_w(cn, d.getTime(), e ? x : 0);return '';}if (v == 'stop') {k = s.c_r(cn);if (!s.c_w(cn, '', d) || !k) {return '';}v = (d.getTime() - k) / 1000;var td = 86400,th = 3600,tm = 60,r = 5,u, un;if (v > td) {u = td;un = 'days';} else {if (v > th) {u = th;un = 'hours';} else {if (v > tm) {r = 2;u = tm;un = 'minutes';} else {r = 0.2;u = 1;un = 'seconds';}}}v = v * r / u;return (Math.round(v) / r) + ' ' + un;}}return '';
};
 */

/* Top 130 Search Engines - Grouped */
s.seList = 'google.,googlesyndication.com|q,as_q|Google>yahoo.com,yahoo.co.jp|p,va|Yahoo!>bing.com|q|Bing>altavista.co,altavista.de|q,r|AltaVista>.aol.,suche.aolsvc.de|q,query|AOL>ask.jp,ask.co|q,ask|Ask>www.baidu.com|wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q|icq>myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|query,search|Netscape Search>reference.com|q|Reference.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|text|Yandex.ru>search.cnn.com|query|CNN Web Search>search.earthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Search>search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Search';

/*
 * Plugin Utility: apl v1.1 - append item to list
 */
s.apl = function (l, v, d, u) {
	var s = this,
		m = 0,
		i,
		n,
		a;
	if (!l) {
		l = '';
	}
	if (u) {
		a = s.split(l, d);
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

/*
 * Plug-in: crossVisitParticipation v1.7
 */
s.crossVisitParticipation = function (v, cn, ex, ct, dl, ev, dv) {
	var s = this,
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
	if (!s.c_r) {
		s = window.s; // added alternate for when called outside of this scope
	}
	if (typeof dv === 'undefined') {
		dv = 0;
	}
	if (s.events && ev) {
		ay = s.split(ev, ',');
		ea = s.split(s.events, ',');
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
			s.c_w(cn, '');
		}
		return '';
	}
	v = escape(v);
	c = s.c_r(cn);
	g = 0;
	if (c && c != '') {
		arry = s.split(c, '],[');
		for (q = 0; q < arry.length; q++) {
			z = arry[q];
			z = s.repl(z, '[', '');
			z = s.repl(z, ']', '');
			z = s.repl(z, '\'', '');
			arry[q] = s.split(z, ',');
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
	data = s.join(a, {
		delim: ',',
		front: '[',
		back: ']',
		wrap: '\''
	});
	s.c_w(cn, data, e);
	r = s.join(h, {
		delim: dl
	});
	if (ce) {
		s.c_w(cn, '');
	}
	return r;
};

/*
 * Plugin: Days since last Visit 2.0 - capture time from last visit
 */
s.getDaysSinceLastVisit = function (c, td) {
	var s = this,
		e = new Date(),
		es = new Date(),
		cval,
		cval_s,
		cval_ss,
		ct = e.getTime(),
		day = 24 * 60 * 60 * 1000,
		f0,
		f1,
		f2,
		f3,
		f4,
		f5,
		d,
		dsl;
	e.setTime(ct + 3 * 365 * day);
	es.setTime(ct + 30 * 60 * 1000);
	f0 = 'Cookies Not Supported';
	f1 = 'First Visit';
	f2 = 'More than 30 days';
	f3 = 'More than 7 days';
	f4 = 'Less than 7 days';
	f5 = 'Less than 1 day';
	cval = s.c_r(c);
	if (cval.length == 0) {
		s.c_w(c, ct, e);
		s.c_w(c + '_s', f1, es);
	} else {
		d = ct - cval;
		dsl = Math.floor(d / day);
		if (d > 30 * 60 * 1000) {
			if (d > 30 * day) {
				s.c_w(c, ct, e);
				s.c_w(c + '_s', f2 + '|' + dsl, es);
			} else {
				if (d < 30 * day + 1 && d > 7 * day) {
					s.c_w(c, ct, e);
					s.c_w(c + '_s', f3 + '|' + dsl, es);
				} else {
					if (d < 7 * day + 1 && d > day) {
						s.c_w(c, ct, e);
						s.c_w(c + '_s', f4 + '|' + dsl, es);
					} else {
						if (d < day + 1) {
							s.c_w(c, ct, e);
							s.c_w(c + '_s', f5 + '|' + dsl, es);
						}
					}
				}
			}
		} else {
			s.c_w(c, ct, e);
			cval_ss = s.c_r(c + '_s');
			s.c_w(c + '_s', cval_ss, es);
		}
	}
	cval_s = s.c_r(c + '_s');
	cval_s = cval_s.split('|');
	/*
	if (cval_s.length == 0) {
	return f0;
	} else {
	if (cval_s[0] != f1 && cval_s[0] != f2 && cval_s[0] != f3 && cval_s[0] != f4 && cval_s[0] != f5) {
	return '';
	} else {
	if (td && cval_s.length > 1) {
	return cval_s[1];
	} else {
	return cval_s[0];
	}
	}
	}
	 */
	// removed unnecessary else after each return
	if (cval_s.length == 0) {
		return f0;
	}
	if (cval_s[0] != f1 && cval_s[0] != f2 && cval_s[0] != f3 && cval_s[0] != f4 && cval_s[0] != f5) {
		return '';
	}
	if (td && cval_s.length > 1) {
		return cval_s[1];
	}
	return cval_s[0];
};

/*
 * Plugin: getPageName v2.1 - parse URL and return
 */
s.getPageName = function (u) {
	var s = this,
		v = u || String(s.wd.location),
		x = v.indexOf(':'),
		y = v.indexOf('/', x + 4),
		z = v.indexOf('?'),
		c = s.pathConcatDelim,
		e = s.pathExcludeDelim,
		g = s.queryVarsList,
		d = s.siteID,
		n = d || '',
		q = z < 0 ? '' : v.substring(z + 1),
		p = v.substring(y + 1, q ? z : v.length);
	z = p.indexOf('#');
	p = z < 0 ? p : s.fl(p, z);
	x = e ? p.indexOf(e) : -1;
	p = x < 0 ? p : s.fl(p, x);
	p += !p || p.charAt(p.length - 1) == '/' ? s.defaultPage : '';
	y = c || '/';
	while (p) {
		x = p.indexOf('/');
		x = x < 0 ? p.length : x;
		z = s.fl(p, x);
		if (!s.pt(s.pathExcludeList, ',', 'p_c', z)) {
			n += n ? y + z : z;
		}
		p = p.substring(x + 1);
	}
	y = c || '?';
	while (g) {
		x = g.indexOf(',');
		x = x < 0 ? g.length : x;
		z = s.fl(g, x);
		z = s.pt(q, '&', 'p_c', z);
		if (z) {
			n += n ? y + z : z;
			y = c || '&';
		}
		g = g.substring(x + 1);
	}
	return n;
};

/*
 * Plugin: getPreviousValue v1.0 - return previous value of designated variable (requires split utility)
 */

/*
s.getPreviousValue = function (v, c, el) {
var s = this,
t = new Date(),
i,
j,
r = '',
x,
y;
t.setTime(t.getTime() + 1800000);
if (el) {
if (s.events) {
i = s.split(el, ',');
j = s.split(s.events, ',');
for (x in i) {
if (i.hasOwnProperty(x)) {
for (y in j) {
if (j.hasOwnProperty(y)) {
if (i[x] == j[y]) {
if (s.c_r(c)) {
r = s.c_r(c);
}
if (v) {
s.c_w(c, v, t);
} else {
s.c_w(c, 'no value', t);
}
return r;
}
}
}
}
}
}
} else {
if (s.c_r(c)) {
r = s.c_r(c);
}
if (v) {
s.c_w(c, v, t);
} else {
s.c_w(c, 'no value', t);
}
return r;
}
};
 */

/*
 * Plugin: getQueryParam - WBC version to find parameters in mobile SPA fragment
 */

// Usage = s.getQueryParam(parameter(s), delimiter (if multiple params), url, search from hash onward only (1));

// Sample =
// s.getQueryParam('b', '', 'https://uat.banking.westpac.com.au/wbc/banking/handler?a=a1&a=a2&b=b&c=cc&s-vid=dev-2c9e8f5a01fe804b840942f0d43752830daf');

s.getQueryParam = function (parameters, delimiter, url, startFromHash) {
	var s = this,
		params = parameters.split(','),
		delim = delimiter || '',
		loc = String(url === 'f' ? s.gtfs().location : url || (s.w_getLoc().href || (s.pageURL || s.wd.location))), // 'f' from original function - used in case of frames?
		lp = 0,
		len = params.length,
		rgx,
		rgxStart = startFromHash === 1 ? '#(?:.*?&)?' : '(?:\\?|&|;|#)',
		val,
		values = [];

	if (!s.c_r) {
		s = window.s; // added alternate for when called outside of this scope
	}

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

/*
 * Plugin: getTimeParting 3.3
 */
/*
s.getTimeParting=new Function("h","z",""
+"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
+"h()!=0){return'Data Not Available';}else{var H,M,D,W,U,ds,de,tm,tt,"
+"da=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Sa"
+"turday'],d=new Date(),a=[];z=z?z:0;z=parseFloat(z);if(s._tpDST){var"
+" dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d."
+"getFullYear());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d"
+">ds&&d<de){z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime"
+"()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getH"
+"ours();M=d.getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U='AM';W='Wee"
+"kday';if(H>=12){U='PM';H=H-12;}if(H==0){H=12;}if(D==6||D==0){W='Wee"
+"kend';}D=da[D];tm=H+':'+M+U;tt=H+':'+((M>30)?'30':'00')+U;a=[tm,tt,"
+"D,W];return a;}");
 */

/*
 * Plugin: getValOnce_v1.1
 */
s.getValOnce = function (v, c, e, t) {
	// value, cookie, time amount, time type (mins/days)
	var s = this,
		a = new Date(),
		vv = v || '',
		cc = c || 's_gvo',
		ee = e || 0,
		i = t == 'm' ? 60000 : 86400000,
		k;
	if (!s.c_r) {
		s = window.s; // added alternate for when called outside of this scope
	}
	k = s.c_r(c);
	if (vv) {
		a.setTime(a.getTime() + ee * i);
		s.c_w(cc, vv, ee == 0 ? 0 : a);
	}
	return vv == k ? '' : vv;
};

/*
 * Plugin: getVisitNum - version 3.0
 */
s.getVisitNum = function (tp, c, c2) {
	var s = this,
		e = new Date(),
		cval,
		cvisit,
		ct = e.getTime(),
		d,
		eo,
		y,
		i,
		str,
		k;
	if (!tp) {
		tp = 'm';
	}
	if (tp == 'm' || tp == 'w' || tp == 'd') {
		eo = s.endof(tp);
		y = eo.getTime();
		e.setTime(y);
	} else {
		d = tp * 86400000;
		e.setTime(ct + d);
	}
	if (!c) {
		c = 's_vnum';
	}
	if (!c2) {
		c2 = 's_invisit';
	}
	cval = s.c_r(c);
	if (cval) {
		i = cval.indexOf('&vn=');
		str = cval.substring(i + 4, cval.length);
	}
	cvisit = s.c_r(c2);
	if (cvisit) {
		if (str) {
			e.setTime(ct + 1800000);
			s.c_w(c2, 'true', e);
			return str;
		}
		return 'unknown visit number';
	}
	if (str) {
		str++;
		k = cval.substring(0, i);
		e.setTime(k);
		s.c_w(c, k + '&vn=' + str, e);
		e.setTime(ct + 1800000);
		s.c_w(c2, 'true', e);
		return str;
	}
	s.c_w(c, e.getTime() + '&vn=1', e);
	e.setTime(ct + 1800000);
	s.c_w(c2, 'true', e);
	return 1;
};
s.dimo = function (m, y) {
	var d = new Date(y, m + 1, 0);
	return d.getDate();
};
s.endof = function (x) {
	var t = new Date(),
		d;
	t.setHours(0);
	t.setMinutes(0);
	t.setSeconds(0);
	if (x == 'm') {
		d = s.dimo(t.getMonth(), t.getFullYear()) - t.getDate() + 1;
	} else if (x == 'w') {
		d = 7 - t.getDay();
	} else {
		d = 1;
	}
	t.setDate(t.getDate() + d);
	return t;
};

/*
 * s.join: 1.0 - Joins an array into a string
 */
s.join = function (v, p) {
	var s = this,
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
		if (typeof (v[x]) == 'object') {
			str += s.join(v[x], p);
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
 * Plugin: linkHandler 0.8 - identify and report custom links
 */
/*
s.linkHandler=new Function("p","t","e",""
+"var s=this,o=s.p_gh(),h=o.href,i,l;t=t?t:'o';if(!h||(s.linkType&&(h"
+"||s.linkName)))return'';i=h.indexOf('?');h=s.linkLeaveQueryString||"
+"i<0?h:h.substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s"
+".linkName=l=='[['?'':l;s.linkType=t;return e?o:h;}return'';");
s.p_gh=new Function("",""
+"var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o"
+"),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o"
+"=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot"
+"(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';");
s.p_gn=new Function("t","h",""
+"var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+"t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+"return 0;");
 */

/*
 * Utility Function: p_c
 */
s.p_c = function (v, c) {
	var x = v.indexOf('=');
	return c.toLowerCase() == v.substring(0, x < 0 ? v.length : x).toLowerCase() ? v : 0;
};

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
/*
s.split = function (l, d) {
var i,
x = 0,
a = [];
while (l) {
i = l.indexOf(d);
i = i > -1 ? i : l.length;
a[x++] = l.substring(0, i);
l = l.substring(i + d.length);
}
return a;
};
 */

// JS 1.1 split
s.split = function (l, d) {
	return l ? l.split(d) : [];
};

/* Plugin: TNT Integration v1.0 edited for lint */
/*
s.trackTNT = function (v, p, b) {
var s = this,
n = 's_tnt',
wpp = p || n,
wpv = v || n,
r = '',
pm = false,
wpb = b || true;
if (s.getQueryParam) {
pm = s.getQueryParam(wpp);
}
if (pm) {
r += (pm + ',');
}
if (s.wd[wpv] != undefined) {
r += s.wd[wpv];
}
if (wpb) {
s.wd[wpv] = '';
}
return r;
};
 */

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected. Changes should only be
made when instructed to do so by your account manager.*/

//s.debugTracking=true;
s.visitorNamespace = 'westpac';
s.trackingServer = 'metrics.westpac.com.au';
s.trackingServerSecure = 'smetrics.westpac.com.au';

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code = '',
	s_objectID;

function s_gi(un, pg, ss) {
	var c = "s.version='H.27.5';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=[];l=s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c={};c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=[];l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]={}}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.tagContainerMarker='';s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r={},l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+(s.tagContainerMarker?\"-\"+s.tagContainerMarker:\"\")+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc={};if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl={};s.rl[un]=[];setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.alt=\"\";im.s_l=0;im.onload=im.onerror=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=[];nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='supplementalDataID')q='sdid';else if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='marketingCloudVisitorID')q='mid';else if(k=='analyticsVisitorID')q='aid';else if(k=='audienceManagerLocationHint')q='aamlh';else if(k=='audienceManagerBlob')q='aamb';else if(k=='authState')q='as';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(255);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?'),hi=h.indexOf('#');if(qi>=0){if(hi>=0&&hi<qi)qi=hi;}else qi=hi;h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent\"||(s.wd.name&&t==s.wd.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEvent}return n\");n=tcf(s);if(n){tcf=new Function(\"n\",\"e\",\"var x;try{n.initMouseEvent(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(x){n=0}return n\");n=tcf(n,e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.target;s.bce=n}}}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq={};s.squ={};s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('Firefox/2')>=0&&s.wd.MouseEvent))){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l={};if(!s.m_nl)s.m_nl=[];m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m={},m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=['_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l'];s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o={};o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=[];i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo,onlySet){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!onlySet&&!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo={};s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=[];s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s._waitingForMarketingCloudVisitorID = false;s._doneWaitingForMarketingCloudVisitorID = false;s._marketingCloudVisitorIDCallback=function(marketingCloudVisitorID) {var s=this;s.marketingCloudVisitorID = marketingCloudVisitorID;s._doneWaitingForMarketingCloudVisitorID = true;s._callbackWhenReadyToTrackCheck();};s._waitingForAnalyticsVisitorID = false;s._doneWaitingForAnalyticsVisitorID = false;s._analyticsVisitorIDCallback=function(analyticsVisitorID) {var s=this;s.analyticsVisitorID = analyticsVisitorID;s._doneWaitingForAnalyticsVisitorID = true;s._callbackWhenReadyToTrackCheck();};s._waitingForAudienceManagerLocationHint = false;s._doneWaitingForAudienceManagerLocationHint = false;s._audienceManagerLocationHintCallback=function(audienceManagerLocationHint) {var s=this;s.audienceManagerLocationHint = audienceManagerLocationHint;s._doneWaitingForAudienceManagerLocationHint = true;s._callbackWhenReadyToTrackCheck();};s._waitingForAudienceManagerBlob = false;s._doneWaitingForAudienceManagerBlob = false;s._audienceManagerBlobCallback=function(audienceManagerBlob) {var s=this;s.audienceManagerBlob = audienceManagerBlob;s._doneWaitingForAudienceManagerBlob = true;s._callbackWhenReadyToTrackCheck();};s.isReadyToTrack=function() {var s=this,readyToTrack = true,visitor = s.visitor;if ((visitor) && (visitor.isAllowed())) {if ((!s._waitingForMarketingCloudVisitorID) && (!s.marketingCloudVisitorID) && (visitor.getMarketingCloudVisitorID)) {s._waitingForMarketingCloudVisitorID = true;s.marketingCloudVisitorID = visitor.getMarketingCloudVisitorID([s,s._marketingCloudVisitorIDCallback]);if (s.marketingCloudVisitorID) {s._doneWaitingForMarketingCloudVisitorID = true;}}if ((!s._waitingForAnalyticsVisitorID) && (!s.analyticsVisitorID) && (visitor.getAnalyticsVisitorID)) {s._waitingForAnalyticsVisitorID = true;s.analyticsVisitorID = visitor.getAnalyticsVisitorID([s,s._analyticsVisitorIDCallback]);if (s.analyticsVisitorID) {s._doneWaitingForAnalyticsVisitorID = true;}}if ((!s._waitingForAudienceManagerLocationHint) && (!s.audienceManagerLocationHint) && (visitor.getAudienceManagerLocationHint)) {s._waitingForAudienceManagerLocationHint = true;s.audienceManagerLocationHint = visitor.getAudienceManagerLocationHint([s,s._audienceManagerLocationHintCallback]);if (s.audienceManagerLocationHint) {s._doneWaitingForAudienceManagerLocationHint = true;}}if ((!s._waitingForAudienceManagerBlob) && (!s.audienceManagerBlob) && (visitor.getAudienceManagerBlob)) {s._waitingForAudienceManagerBlob = true;s.audienceManagerBlob = visitor.getAudienceManagerBlob([s,s._audienceManagerBlobCallback]);if (s.audienceManagerBlob) {s._doneWaitingForAudienceManagerBlob = true;}}if (((s._waitingForMarketingCloudVisitorID) && (!s._doneWaitingForMarketingCloudVisitorID) && (!s.marketingCloudVisitorID)) ||((s._waitingForAnalyticsVisitorID) && (!s._doneWaitingForAnalyticsVisitorID) && (!s.analyticsVisitorID)) ||((s._waitingForAudienceManagerLocationHint) && (!s._doneWaitingForAudienceManagerLocationHint) && (!s.audienceManagerLocationHint)) ||((s._waitingForAudienceManagerBlob) && (!s._doneWaitingForAudienceManagerBlob) && (!s.audienceManagerBlob))) {readyToTrack = false;}}return readyToTrack;};s._callbackWhenReadyToTrackQueue = null;s._callbackWhenReadyToTrackInterval = 0;s.callbackWhenReadyToTrack=function(callbackThis,callback,args) {var s=this,callbackInfo;callbackInfo = {};callbackInfo.callbackThis = callbackThis;callbackInfo.callback = callback;callbackInfo.args = args;if (s._callbackWhenReadyToTrackQueue == null) {s._callbackWhenReadyToTrackQueue = [];}s._callbackWhenReadyToTrackQueue.push(callbackInfo);if (s._callbackWhenReadyToTrackInterval == 0) {s._callbackWhenReadyToTrackInterval = setInterval(s._callbackWhenReadyToTrackCheck,100);}};s._callbackWhenReadyToTrackCheck=new Function('var s=s_c_il['+s._in+'],callbackNum,callbackInfo;if (s.isReadyToTrack()) {if (s._callbackWhenReadyToTrackInterval) {clearInterval(s._callbackWhenReadyToTrackInterval);s._callbackWhenReadyToTrackInterval = 0;}if (s._callbackWhenReadyToTrackQueue != null) {while (s._callbackWhenReadyToTrackQueue.length > 0) {callbackInfo = s._callbackWhenReadyToTrackQueue.shift();callbackInfo.callback.apply(callbackInfo.callbackThis,callbackInfo.args);}}}');s._handleNotReadyToTrack=function(variableOverrides) {var s=this,args,varKey,variableOverridesCopy = null,setVariables = null;if (!s.isReadyToTrack()) {args = [];if (variableOverrides != null) {variableOverridesCopy = {};for (varKey in variableOverrides) {variableOverridesCopy[varKey] = variableOverrides[varKey];}}setVariables = {};s.vob(setVariables,true);args.push(variableOverridesCopy);args.push(setVariables);s.callbackWhenReadyToTrack(s,s.track,args);return true;}return false;};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return fid};s.track=s.t=function(vo,setVariables){var s=this,notReadyToTrack,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb={};if (s.visitor) {if (s.visitor.getAuthState) {s.authState = s.visitor.getAuthState();}if ((!s.supplementalDataID) && (s.visitor.getSupplementalDataID)) {s.supplementalDataID = s.visitor.getSupplementalDataID(\"AppMeasurement:\" + s._in,(s.expectSupplementalData ? false : true));}}if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();notReadyToTrack = s._handleNotReadyToTrack(vo);if (!notReadyToTrack) {if (setVariables) {s.voa(setVariables);}if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=[];if(a.forEach){j='1.6';i=0;o={};tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if(!s.analyticsVisitorID&&!s.marketingCloudVisitorID)s.fid=s.gfid();if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer)s.referrer=r;s._1_referrer=1;s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);}s.abort=0;s.supplementalDataID=s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='supplementalDataID,timestamp,dynamicVariablePrefix,visitorID,marketingCloudVisitorID,analyticsVisitorID,audienceManagerLocationHint,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,audienceManagerBlob,authState,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData={};s.retrieveLightData={};if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
		w = window,
		l = w.s_c_il,
		n = navigator,
		u = n.userAgent,
		v = n.appVersion,
		e = v.indexOf('MSIE '),
		m = u.indexOf('Netscape6/'),
		a,
		i,
		j,
		x,
		s;
	if (un) {
		un = un.toLowerCase();
		if (l) {
			for (j = 0; j < 2; j++) {
				for (i = 0; i < l.length; i++) {
					s = l[i];
					x = s._c;
					if ((!x || x == 's_c' || (j > 0 && x == 's_l')) && (s.oun == un || (s.fs && s.sa && s.fs(s.oun, un)))) {
						if (s.sa) {
							s.sa(un);
						}
						if (x == 's_c') {
							return s;
						}
					} else {
						s = 0;
					}
				}
			}
		}
	}
	w.s_an = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	//w.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
	// JS 1.1 split
	w.s_sp = function (x, d) {
		return x ? x.split(d) : [];
	};
	//w.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
	// JS 1.1 join
	w.s_jn = function (a, d) {
		return a ? a.join(d) : '';
	};
	//w.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
	w.s_rep = function (x, o, n) {
		return w.s_jn(w.s_sp(x, o), n);
	};
	//w.s_d = new Function("x", "var t='`^@$#',l=s_an,l2={},x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
	w.s_d = function (x) {
		var t = '`^@$#',
			ll = w.s_an,
			l2 = {},
			x2,
			d,
			b = 0,
			k,
			ii = x.lastIndexOf('~~'),
			jj,
			vv,
			ww;
		if (ii > 0) {
			d = x.substring(0, ii);
			x = x.substring(ii + 2);
			ll = w.s_sp(ll, '');
			for (ii = 0; ii < 62; ii++) {
				l2[ll[ii]] = ii;
			}
			t = w.s_sp(t, '');
			d = w.s_sp(d, '~');
			ii = 0;
			while (ii < 5) {
				vv = 0;
				if (x.indexOf(t[ii]) >= 0) {
					x2 = w.s_sp(x, t[ii]);
					for (jj = 1; jj < x2.length; jj++) {
						k = x2[jj].substring(0, 1);
						ww = t[ii] + k;
						if (k != ' ') {
							vv = 1;
							ww = d[b + l2[k]];
						}
						x2[jj] = ww + x2[jj].substring(1);
					}
				}
				if (vv) {
					x = w.s_jn(x2, '');
				} else {
					ww = t[ii] + ' ';
					if (x.indexOf(ww) >= 0) {
						x = w.s_rep(x, ww, t[ii]);
					}
					ii++;
					b += 62;
				}
			}
		}
		return x;
	};
	//w.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
	w.s_fe = function (c) {
		return w.s_rep(w.s_rep(w.s_rep(c, '\\', '\\\\'), '"', '\\"'), '\n', '\\n');
	};
	//w.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':a");
	w.s_fa = function (f) {
		var sss = f.indexOf('(') + 1,
			eee = f.indexOf(')'),
			aaa = '',
			ccc;
		while (sss >= 0 && sss < eee) {
			ccc = f.substring(sss, sss + 1);
			if (ccc == ',') {
				aaa += '","';
			} else {
				if (('\n\r\t ').indexOf(ccc) < 0) {
					aaa += ccc;
				}
			}
			sss++;
		}
		return aaa ? '"' + aaa + '"' : aaa;
	};
	//w.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
	w.s_ft = function (c) {
		c += '';
		var sss,
			ee,
			o,
			aa,
			d,
			q,
			f,
			h,
			xx;
		sss = c.indexOf('=function(');
		while (sss >= 0) {
			sss++;
			d = 1;
			q = '';
			xx = 0;
			f = c.substring(sss);
			aa = w.s_fa(f);
			ee = o = c.indexOf('{', sss);
			ee++;
			while (d > 0) {
				h = c.substring(ee, ee + 1);
				if (q) {
					if (h == q && !xx) {
						q = '';
					}
					if (h == '\\') {
						xx = xx ? 0 : 1;
					} else {
						xx = 0;
					}
				} else {
					if (h == '"' || h == "'") {
						q = h;
					}
					if (h == '{') {
						d++;
					}
					if (h == '}') {
						d--;
					}
				}
				if (d > 0) {
					ee++;
				}
			}
			c = c.substring(0, sss) + 'new Function(' + (aa ? aa + ',' : '') + '"' + w.s_fe(c.substring(o + 1, ee)) + '")' + c.substring(ee + 1);
			sss = c.indexOf('=function(');
		}
		return c;
	};
	c = s_d(c);
	if (e > 0) {
		a = parseInt(i = v.substring(e + 5), 10);
		if (a > 3) {
			a = parseFloat(i);
		}
	} else {
		if (m > 0) {
			a = parseFloat(u.substring(m + 10));
		} else {
			a = parseFloat(v);
		}
	}
	if (a < 5 || v.indexOf('Opera') >= 0 || u.indexOf('Opera') >= 0) {
		c = s_ft(c);
	}
	if (!s) {
		s = {};
		if (!w.s_c_in) {
			w.s_c_il = [];
			w.s_c_in = 0;
		}
		s._il = w.s_c_il;
		s._in = w.s_c_in;
		s._il[s._in] = s;
		w.s_c_in++;
	}
	s._c = 's_c';
	(new Function('s', 'un', 'pg', 'ss', c))(s, un, pg, ss);
	return s;
}

function s_giqf() {
	var w = window,
		q = w.s_giq,
		i,
		t,
		s;
	if (q) {
		for (i = 0; i < q.length; i++) {
			t = q[i];
			s = s_gi(t.oun);
			s.sa(t.un);
			s.setTagContainer(t.tagContainerName);
		}
	}
	w.s_giq = 0;
}
s_giqf();
