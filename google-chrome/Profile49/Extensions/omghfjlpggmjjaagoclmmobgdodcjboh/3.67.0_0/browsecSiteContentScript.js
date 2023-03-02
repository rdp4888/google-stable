/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8950:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gaConnections = __webpack_require__(789);
/** Modifies input config objects
@function */


module.exports = config => {
  if (!config.ga.enabled) return config;
  config.ga4 = {};

  if (config.ga.tracking_id) {
    const counterpart = gaConnections.find(({
      track
    }) => track === config.ga.tracking_id);

    if (counterpart) {
      config.ga4.partial = {};
      config.ga4.partial.measurementId = counterpart.ga4MeasurementId;
      config.ga4.partial.apiSecret = counterpart.ga4ApiSecret;
    }
  }

  if (config.ga.fullTrackingId) {
    const counterpart = gaConnections.find(({
      track
    }) => track === config.ga.fullTrackingId);

    if (counterpart) {
      config.ga4.full = {};
      config.ga4.full.measurementId = counterpart.ga4MeasurementId;
      config.ga4.full.apiSecret = counterpart.ga4ApiSecret;
    }
  }

  return config;
};

/***/ }),

/***/ 4284:
/***/ ((module) => {

module.exports = {
  'countryChangeOverlay': {
    'id': '8ghnWBUlQQq-ogIBZhEuOg',
    'event': 'onboarding.install',
    'taskNumber': 343,
    // 1046
    'type': 'event'
  },

  /*'deleteExperiment': {
    'id': '----------',
    'taskNumber': 1052,
    'type': 'event',
    'event': 'onboarding.install'
  },*/
  'freeServersOverloaded': {
    'id': '932qos_SSoSKXyFHd1XvwA',
    //'event': 'next12hVpnOnAfterFirstProxyOnClick',
    'taskNumber': 330.2,
    // 1057
    'type': 'event'
  },
  'missingLocationLink': {
    'id': 'DWeBbv86SGeGNI1ybCjN7g',
    'taskNumber': 243,
    'type': 'event',
    'event': 'onboarding.install'
  },
  'pollBanner': {
    'id': 'HMjiQzYTS3C2C6cBKhU3kw',
    'event': 'onboarding.install',
    'taskNumber': 254,
    // 928
    'type': 'event'
  },
  'premiumComparisonOnFirstPopup': {
    'id': 'RbZW13_0RoebnWwdw-4EoQ',
    'event': 'onboarding.install',
    'taskNumber': 262,
    // 879
    'type': 'event'
  },
  'premiumOverlayOnPopupOpen': {
    'id': 'Ei89c9qLRLeTZiCbZTieRw',
    'event': 'onboarding.install',
    'taskNumber': 252,
    // 882
    'type': 'event'
  },
  'promotionPageAfterInstall': {
    'id': 'F7-JutvlRxyTa7TXyce1hg',
    'event': 'onboarding.install',
    'taskNumber': 284,
    // 892
    'type': 'event'
  }
};

/***/ }),

/***/ 789:
/***/ ((module) => {

module.exports = [{
  'track': 'UA-60149654-2',
  'ga4ApiSecret': 'CLWDMTsYQBu_t0DpVPT6Rg',
  'ga4MeasurementId': 'G-0GHZ1332D6'
}, {
  'track': 'UA-60149654-6',
  'ga4ApiSecret': 'NtMfEM5JR6Wfsd_P5WnilA',
  'ga4MeasurementId': 'G-FELBYBMRB5'
}, {
  'track': 'UA-60149654-1',
  'ga4ApiSecret': 'N6slLr4CTJKIchgxA6ty7Q',
  'ga4MeasurementId': 'G-D6RC78PG86'
}, {
  'track': 'UA-60149654-7',
  'ga4ApiSecret': 'tsFNPU06TGC2XIMRNErFig',
  'ga4MeasurementId': 'G-WKQJ3BZN1Z'
}, {
  'track': 'UA-43024042-1',
  'ga4ApiSecret': 'Swcg9hbKQJOb9PaDQ2M_8g',
  'ga4MeasurementId': 'G-1N07RLQVY3'
}, {
  'track': 'UA-43024042-3',
  'ga4ApiSecret': 'BPXQcy5JT46KOjbgWy_QDg',
  'ga4MeasurementId': 'G-J9001B3EEV'
}];

/***/ }),

/***/ 4019:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const applyGa4 = __webpack_require__(8950);

const experiments = __webpack_require__(4284);

const config = {
  'type': 'production',
  'name': {
    'chrome': '__MSG_extension_name_chrome__',
    'edge': 'Browsec VPN - Free VPN for Edge',
    'firefox': 'Browsec VPN - Free VPN for Firefox',
    'opera': 'Browsec VPN - Free VPN for Opera'
  },
  'shortName': 'Browsec VPN',
  'description': {
    'chrome': '__MSG_extension_description_chrome__',
    'edge': 'Browsec VPN is an Edge VPN extension that protects your IP from Internet threats and lets you browse privately for free.',
    'firefox': 'Browsec VPN is a Firefox VPN extension that protects your IP from Internet threats and lets you browse privately for free.',
    'opera': 'Browsec VPN is an Opera VPN extension that protects your IP from Internet threats and lets you browse privately for free.'
  },
  'apiServerUrls': ['https://browsec.com/api/', 'https://d1mtjov42o6r4u.cloudfront.net/', 'https://d2mew6mekwj3l1.cloudfront.net/', 'https://d3qpjpdtuumbvr.cloudfront.net/'],
  'auth': {
    // When disabled, users can't login/register
    'enabled': true
  },
  'baseUrl': 'https://browsec.com',
  experiments,
  'ga': {
    'enabled': true,
    'extension_id': ['omghfjlpggmjjaagoclmmobgdodcjboh', 'dknfpcdpbkjijldegonllfnnfhabjpde', '05908b89-695d-4687-aa36-6d87f42a464d' // NOTE temporary
    ],
    'tracking_id': 'UA-43024042-1',
    'chance': 0.01,
    'fullTrackingId': 'UA-43024042-3'
  },
  'proxy': {
    'defaultCountry': 'nl'
  },
  'siteAuthorizationDomains': ['browsec.com', 'd3k73twqqvofzb.cloudfront.net']
};
module.exports = applyGa4(config);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4019);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);


const _browser = typeof browser !== 'undefined' ? browser : chrome;

const siteAuthorizationDomains = config__WEBPACK_IMPORTED_MODULE_0___default().siteAuthorizationDomains.map(domain => 'https://' + domain);
self.addEventListener('message', event => {
  const sourceDomain = (() => {
    try {
      return new URL(event.origin).origin;
    } catch (e) {}
  })();

  if (!sourceDomain) return;
  if (!siteAuthorizationDomains.includes(sourceDomain)) return;

  _browser.runtime.sendMessage(event.data);
});
})();

/******/ })()
;