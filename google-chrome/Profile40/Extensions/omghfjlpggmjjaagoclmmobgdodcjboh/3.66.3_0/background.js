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
  'promoTabNewBehaviour': {
    'id': 'XKpOnhmgR--fHmjGtLStTw',
    'event': 'onboarding.install',
    'taskNumber': 340,
    // 1039
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
  'apiServerUrls': ['https://browsec.com/api/', 'https://d1x4hy42qmcf1r.cloudfront.net/', 'https://d3nk1h28ovn7w2.cloudfront.net/', 'https://d2okhdofabytgz.cloudfront.net/'],
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

/***/ }),

/***/ 2522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ bg_Counters)
});

// UNUSED EXPORTS: Counters

// EXTERNAL MODULE: ./config/production.js
var production = __webpack_require__(4019);
var production_default = /*#__PURE__*/__webpack_require__.n(production);
// EXTERNAL MODULE: ./src/general/storage.ts
var storage = __webpack_require__(6264);
;// CONCATENATED MODULE: ./src/bg/Counters/getDefaultState.ts

/* harmony default export */ const getDefaultState = (async () => {
  let statisticsState = await storage/* default.get */.Z.get('statistics');
  if (!statisticsState) return {};
  return {
    // Count of location country changes
    'country changes': statisticsState.countryChanges || 0,
    // Number of clicks on browser icon
    'icon clicks': statisticsState.iconClicks || 0,
    // Count of transitions to location page
    'popup: location page shows': statisticsState.locationPageShows || 0,
    // Global proxy ON click times
    'popup: proxy on': statisticsState.proxyOn || 0,
    // Count of successfully loaded proxied pages
    'proxied pages': statisticsState.proxiedPages || 0,
    // Count of proxy.onError errors
    'proxy errors': statisticsState.proxyErrors || 0,
    // How much times user successfully logined
    'user login': statisticsState.userLoginCount || 0
  };
});
// EXTERNAL MODULE: ./src/general/store/index.ts + 5 modules
var store = __webpack_require__(4501);
;// CONCATENATED MODULE: ./src/bg/Counters/listeners.ts

/* harmony default export */ const listeners = (async Counters => {
  // Save location country changes
  store/* default.onChange */.Z.onChange(({
    'userPac': {
      mode,
      country
    }
  }) => ({
    'enabled': mode === 'proxy',
    country
  }), ({
    enabled,
    'country': newCountry
  }, {
    'country': oldCountry
  }) => {
    if (!enabled) return; // Proxy OFF

    if (newCountry === oldCountry) return; // Same country

    Counters.increase('country changes');
  }); // Count of Proxy OFF to ON

  store/* default.onChange */.Z.onChange(({
    userPac
  }) => userPac.mode === 'proxy', enabled => {
    if (enabled) Counters.increase('popup: proxy on');
  }); // How much times user successfully logined

  store/* default.onChange */.Z.onChange(({
    'user': {
      email
    }
  }) => Boolean(email), logined => {
    if (logined) Counters.increase('user login');
  });
});
// EXTERNAL MODULE: ./src/dualUse/log/index.ts
var log = __webpack_require__(6699);
;// CONCATENATED MODULE: ./src/bg/Counters/index.ts
/** System of counters saved globally in stirage for statistics */





const bgRequest = location.href.includes('background');
class Counters {
  // @ts-ignore
  constructor() {
    this._ready = (async () => {
      let storageState = await storage/* default.get */.Z.get('counters');

      if (storageState) {
        this.state = storageState;
        return;
      }

      this.state = await getDefaultState();
    })();

    this._listeners = [];
    if (bgRequest) listeners(this);
  }
  /** @method */


  addListener(property, listener)
  /*: void*/
  {
    this._listeners.push({
      listener,
      property
    });
  }
  /** @method */


  removeListener(params)
  /*: void*/
  {
    // Remove by property
    if (typeof params === 'string') {
      this._listeners = this._listeners.filter(({
        property
      }) => property !== params);
      return;
    } // Remove by callback function


    this._listeners = this._listeners.filter(({
      listener
    }) => listener !== params);
  }
  /** Get property value
  @method
  @return - property value in state */


  async get(property) {
    await this._ready;
    return this.state[property] || 0;
  }
  /** Increase some counter property
  @method
  @return - new value */


  async increase(property) {
    await this._ready;
    if (!this.state[property]) this.state[property] = 0;
    this.state[property]++;

    if ((production_default()).type === 'development') {
      (0,log/* default */.Z)(`Counters. Increase ${property}. New value: `, this.state[property]);
    }

    storage/* default.set */.Z.set('counters', this.state);

    this._listeners.forEach(({
      listener,
      'property': listenerProperty
    }) => {
      if (listenerProperty !== property) return;
      listener(this.state[property]);
    });

    return this.state[property];
  }

}
/** @class singleton */

/* harmony default export */ const bg_Counters = (new Counters());

/***/ }),

/***/ 7027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global Price */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  'currency': 'USD',
  'value': 71.99,
  'duration': 24
}]);

/***/ }),

/***/ 7437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var servers_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6567);
/* harmony import */ var storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6264);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => (await storage__WEBPACK_IMPORTED_MODULE_1__/* ["default"].get */ .Z.get('serversObject')) || servers_json__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ 96:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ chrome)
});

// EXTERNAL MODULE: ./node_modules/crossbrowser-webextension/code/index.js
var code = __webpack_require__(3552);
var code_default = /*#__PURE__*/__webpack_require__.n(code);
// EXTERNAL MODULE: ./src/general/tools/generateRfc4122Id.ts
var generateRfc4122Id = __webpack_require__(8459);
// EXTERNAL MODULE: ./config/production.js
var production = __webpack_require__(4019);
var production_default = /*#__PURE__*/__webpack_require__.n(production);
// EXTERNAL MODULE: ./src/general/storage.ts
var storage = __webpack_require__(6264);
;// CONCATENATED MODULE: ./src/dualUse/ga/full/gaUserIdPromise.ts



/* harmony default export */ const gaUserIdPromise = ((async () => {
  let id = await storage/* default.get */.Z.get('gaRareUserId');
  if (id) return id;
  let timeReason = false;

  try {
    await new Promise(async (resolve, reject) => {
      setTimeout(() => {
        timeReason = true;
        reject(new Error('Initial GA request timeout reached'));
      }, 10000);
      const response = await fetch((production_default()).baseUrl + '/api/v1/attributes/extintid', {
        'credentials': 'include',
        'headers': {
          'Content-Type': 'application/json'
        },
        'method': 'GET'
      });
      const json = await response.json();
      if (typeof (json === null || json === void 0 ? void 0 : json.extintid) === 'string') id = json.extintid;

      if (typeof (json === null || json === void 0 ? void 0 : json.created) === 'boolean') {
        await storage/* default.set */.Z.set('gaRareUserIsNew', json.created);
      }
    });
  } catch (x) {}

  if (id) {
    storage/* default.set */.Z.set('gaRareUserId', id);
    return id;
  } // No response from fetch


  id = (0,generateRfc4122Id/* default */.Z)();
  storage/* default.set */.Z.set('gaRareUserId', id);

  if (timeReason) {
    fetch((production_default()).baseUrl + '/api/v1/attributes', {
      'body': JSON.stringify({
        'data': {
          'extintid': id
        }
      }),
      'credentials': 'include',
      'headers': {
        'Content-Type': 'application/json'
      },
      'method': 'POST'
    });
  }

  return id;
})());
// EXTERNAL MODULE: ./src/dualUse/log/index.ts
var log = __webpack_require__(6699);
// EXTERNAL MODULE: ./src/general/tools/ajax.ts
var ajax = __webpack_require__(7493);
;// CONCATENATED MODULE: ./src/dualUse/ga/full/chrome/getSessionId.ts

const sessionId = (0,generateRfc4122Id/* default */.Z)();
/** @function */

/* harmony default export */ const getSessionId = (() => sessionId);
;// CONCATENATED MODULE: ./src/dualUse/ga/full/chrome/request.ts



/** @function */

const getTimeStamp = () => {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hour = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  return `${year}-${month}-${day}T${hour}:${minutes}:${seconds}`;
};
/** Request to GA server
@function */


/* harmony default export */ const request = (async (gaUserId, params) => {
  if (!(production_default()).ga.fullTrackingId) return;
  const {
    type,
    action,
    category,
    label,
    noninteraction,
    value
  } = params;
  const sessionId = gaUserId + '.' + getSessionId();
  const timestamp = getTimeStamp();

  const gaPromise = (() => {
    const data = {
      'v': '1',
      // Version
      'tid': (production_default()).ga.fullTrackingId,
      // Tracking ID / Property ID.
      'cid': gaUserId,
      // Anonymous Client ID (every time unique)
      't': type // Hit Type. / The type of hit. Must be one of 'pageview', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'.

    };

    if (type === 'event') {
      if (action) data.ea = action; // Event action

      if (category) data.ec = category; // Event category

      if (label) data.el = label; // Event label / https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters?hl=en#ec

      if (value) data.ev = value;
      data.cd1 = sessionId; // Session ID

      data.cd2 = gaUserId; // Client ID

      data.cd3 = timestamp; // Hit Timestamp
    }

    if (noninteraction) data.ni = '1';
    const body = Object.entries(data).map(([key, value]) => key + '=' + encodeURIComponent(value)).join('&');
    return (0,ajax/* default */.Z)('https://www.google-analytics.com/collect', {
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      'method': 'POST',
      'mode': 'cors',
      body
    });
  })();

  const ga4promise = (async () => {
    if (!(production_default()).ga4.full) return;
    const apiSecret = (production_default()).ga4.full.apiSecret;
    const measurementId = (production_default()).ga4.full.measurementId;
    const url = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`;
    const data = {
      'client_id': gaUserId,
      'events': [{
        'name': action,
        'params': {
          category,
          label,
          noninteraction,
          sessionId,
          timestamp,
          value
        }
      }]
    };
    return (0,ajax/* default */.Z)(url, {
      'method': 'POST',
      'mode': 'cors',
      'body': JSON.stringify(data)
    });
  })();

  return Promise.all([gaPromise.catch(() => undefined), ga4promise.catch(() => undefined)]);
});
// EXTERNAL MODULE: ./src/general/tools/sendMessage.ts
var sendMessage = __webpack_require__(1748);
;// CONCATENATED MODULE: ./src/dualUse/ga/full/chrome/index.ts






const config = (production_default()).ga;
const bgRequest = location.href.includes('background');
const condition = config.enabled && (!config.extension_id // For qa / qa2 profiles
|| Array.isArray(config.extension_id) && config.extension_id.includes((code_default()).runtime.id));
const ga = Object.assign(async ({
  category,
  action,
  label,
  value,
  noninteraction
}) => {
  if (!bgRequest) {
    return (0,sendMessage/* default */.Z)({
      'type': 'ga.full',
      'data': {
        category,
        action,
        label,
        value,
        noninteraction
      }
    });
  }

  const type = condition ? 'TRACK' : 'DISABLED';
  (0,log/* default */.Z)('GA full', `[${type}]`, {
    category,
    action,
    label,
    value,
    noninteraction
  });
  if (type !== 'TRACK') return;
  const gaUserId = await gaUserIdPromise;
  return request(gaUserId, {
    'type': 'event',
    action,
    category,
    label,
    noninteraction,
    value
  });
}, {
  'userIdPromise': gaUserIdPromise
});
/* harmony default export */ const chrome = (ga);

/***/ }),

/***/ 7457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = typeof browser !== 'undefined' ? __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './firefox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) : __webpack_require__(96);

/***/ }),

/***/ 8729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ chrome)
});

// EXTERNAL MODULE: ./node_modules/crossbrowser-webextension/code/index.js
var code = __webpack_require__(3552);
var code_default = /*#__PURE__*/__webpack_require__.n(code);
// EXTERNAL MODULE: ./src/general/tools/generateRfc4122Id.ts
var generateRfc4122Id = __webpack_require__(8459);
// EXTERNAL MODULE: ./src/bg/Counters/index.ts + 2 modules
var Counters = __webpack_require__(2522);
;// CONCATENATED MODULE: ./src/dualUse/ga/partial/chrome/listeners.ts

/* harmony default export */ const listeners = (ga => {
  Counters/* default.addListener */.Z.addListener('popup: menu: smart settings click', () => {
    ga({
      'category': 'Smart Settings',
      'action': 'Menu click'
    });
  });
  Counters/* default.addListener */.Z.addListener('popup: smart settings: open help', () => {
    ga({
      'category': 'Smart Settings',
      'action': 'Open help'
    });
  });
  Counters/* default.addListener */.Z.addListener('popup: smart settings: open list', () => {
    ga({
      'category': 'Smart Settings',
      'action': 'Open edit page'
    });
  });
  Counters/* default.addListener */.Z.addListener('popup: smart settings: add rule', () => {
    ga({
      'category': 'Smart Settings',
      'action': 'Add rule'
    });
  });
});
// EXTERNAL MODULE: ./src/dualUse/log/index.ts
var log = __webpack_require__(6699);
// EXTERNAL MODULE: ./config/production.js
var production = __webpack_require__(4019);
var production_default = /*#__PURE__*/__webpack_require__.n(production);
// EXTERNAL MODULE: ./src/general/tools/ajax.ts
var ajax = __webpack_require__(7493);
;// CONCATENATED MODULE: ./src/dualUse/ga/partial/chrome/request.ts


/** Request to GA server
@function */

/* harmony default export */ const request = (async (gaUserId, params) => {
  if (!(production_default()).ga.tracking_id) return;
  let {
    type,
    action,
    category,
    label,
    noninteraction,
    value
  } = params;

  const gaPromise = (() => {
    let data = {
      'v': '1',
      // Version
      'tid': (production_default()).ga.tracking_id,
      // Tracking ID / Property ID.
      'cid': gaUserId,
      // Anonymous Client ID (every time unique)
      't': type // Hit Type. / The type of hit. Must be one of 'pageview', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'.

    };

    if (type === 'event') {
      if (action) data.ea = action; // Event action

      if (category) data.ec = category; // Event category

      if (label) data.el = label; // Event label / https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters?hl=en#ec

      if (value) data.ev = value;
    }

    if (noninteraction) data.ni = '1';
    const body = Object.entries(data).map(([key, value]) => key + '=' + encodeURIComponent(value)).join('&');
    return (0,ajax/* default */.Z)('https://www.google-analytics.com/collect', {
      'credentials': 'omit',
      // No cross between mectrics
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      'method': 'POST',
      'mode': 'cors',
      body
    });
  })();

  const ga4promise = (async () => {
    if (!(production_default()).ga4.partial) return;
    const apiSecret = (production_default()).ga4.partial.apiSecret;
    const measurementId = (production_default()).ga4.partial.measurementId;
    const url = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`;
    const data = {
      'client_id': gaUserId,
      'events': [{
        'name': action,
        'params': {
          category,
          label,
          noninteraction,
          value
        }
      }]
    };
    return (0,ajax/* default */.Z)(url, {
      'method': 'POST',
      'mode': 'cors',
      'body': JSON.stringify(data)
    });
  })();

  return Promise.all([gaPromise.catch(() => undefined), ga4promise.catch(() => undefined)]);
});
// EXTERNAL MODULE: ./src/general/tools/sendMessage.ts
var sendMessage = __webpack_require__(1748);
// EXTERNAL MODULE: ./src/general/storage.ts
var storage = __webpack_require__(6264);
;// CONCATENATED MODULE: ./src/dualUse/ga/partial/chrome/index.ts








const config = (production_default()).ga;
const bgRequest = location.href.includes('background');

const sendTypePromise = (async () => {
  const condition = config.enabled && (!config.extension_id // For qa / qa2 profiles
  || Array.isArray(config.extension_id) && config.extension_id.includes((code_default()).runtime.id));
  if (!condition) return 'DISABLED';
  const storageValue = await storage/* default.get */.Z.get('useGa');

  let useGa = (() => {
    if (typeof storageValue === 'boolean') return storageValue; // Chance to be in GA tracking, from 0 to 1

    let chance
    /*: number*/
    = config.chance || 0.01; // Use GA for only 1% of users to not exceed GA limits

    let use
    /*: boolean*/
    = Math.random() < chance;
    storage/* default.set */.Z.set('useGa', use);
    return use;
  })();

  return useGa ? 'TRACK' : 'FILTERED';
})(); // Random GA user ID


const gaUserIdPromise
/*: Promise<string | void>*/
= (async () => {
  let sendType = await sendTypePromise;
  if (sendType !== 'TRACK') return;
  let id = await storage/* default.get */.Z.get('gaUserId');
  if (id) return id;
  id = (0,generateRfc4122Id/* default */.Z)();
  storage/* default.set */.Z.set('gaUserId', id);
  return id;
})(); // Initial


(async () => {
  const gaUserId = await gaUserIdPromise;
  if (!gaUserId || !bgRequest) return;
  request(gaUserId, {
    'type': 'pageview'
  }); // One time at browser start
})();
/** @function */


const ga = Object.assign(async ({
  category,
  action,
  label,
  value,
  noninteraction
}) => {
  if (!bgRequest) {
    return (0,sendMessage/* default */.Z)({
      'type': 'ga.partial',
      'data': {
        category,
        action,
        label,
        value,
        noninteraction
      }
    });
  }

  const sendType = await sendTypePromise;
  const gaUserId = await gaUserIdPromise;
  (0,log/* default */.Z)('GA', `[${sendType}]`, {
    category,
    action,
    label,
    value,
    noninteraction
  });
  if (sendType !== 'TRACK' || !gaUserId) return; // Flow crap

  await request(gaUserId, {
    'type': 'event',
    action,
    category,
    label,
    noninteraction,
    value
  });
}, {
  'isTrackedPromise': (async () => {
    const sendType = await sendTypePromise;
    return sendType === 'TRACK';
  })()
});
listeners(ga);
/* harmony default export */ const chrome = (ga);

/***/ }),

/***/ 9480:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = typeof browser !== 'undefined' ? __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './firefox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) : __webpack_require__(8729);

/***/ }),

/***/ 5713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ db)
});

// UNUSED EXPORTS: LogDb

// EXTERNAL MODULE: ./node_modules/crossbrowser-webextension/code/index.js
var code = __webpack_require__(3552);
var code_default = /*#__PURE__*/__webpack_require__.n(code);
// EXTERNAL MODULE: ./config/production.js
var production = __webpack_require__(4019);
var production_default = /*#__PURE__*/__webpack_require__.n(production);
;// CONCATENATED MODULE: ./src/dualUse/log/db/limit.ts
/* harmony default export */ const limit = (1000);
;// CONCATENATED MODULE: ./src/dualUse/log/db/methods/fillWithCrap.ts

/** @function */

const generatePart = () => Math.random().toString(36).substr(2, 5);
/** @function */


const generateString = () => Array(6).fill(0).map(() => generatePart()).join('');
/** Fill db up to limit with crap (for testing purposes)
@method */


/* harmony default export */ function fillWithCrap() {
  let list = this.state;
  let delta = limit - list.length;
  if (delta <= 0) return;
  let fillData = Array(delta).fill(0).map(() => ({
    'record': generateString(),
    'timestamp': Date.now(),
    'type': 'log'
  }));
  list.push.apply(list, fillData);
  this.state = list;
}
;
// EXTERNAL MODULE: ./src/general/storage.ts
var storage = __webpack_require__(6264);
// EXTERNAL MODULE: ./src/general/time.ts
var time = __webpack_require__(8575);
;// CONCATENATED MODULE: ./src/dualUse/log/db/index.ts






const bgRequest = location.href.includes('background');
/** @function */

const calcByteSize = data => new TextEncoder().encode(JSON.stringify(data)).length;

class LogDb {
  constructor() {
    this.state = [];
    this.delayedState = [];
    this.initiated = false;

    if ((production_default()).type !== 'production') {
      // Fill db up to limit with crap (for testing purposes)
      this.fillWithCrap = fillWithCrap.bind(this);
    } // Initial


    this.ready = (async () => {
      const value = (await storage/* default.get */.Z.get('log')) || []; // @ts-ignore

      Array.prototype.push.apply(value, this.delayedState);
      this.state = value;
      this.initiated = true;
      return value;
    })();

    if (bgRequest) {
      /** @function */
      const loop = async () => {
        await this.ready;
        const totalSize = calcByteSize(this.state);

        if (totalSize > 4000000) {
          // Step 1: check size of every entity to get how much to cut
          const difference = totalSize - 4000000;
          let size = 0;
          let count = 0;

          for (const record of this.state) {
            size += calcByteSize(record);
            count++;
            if (size > difference) break;
          }

          this.state.splice(0, count); // Step 2: cut to make whole size less then 4,000,000 ( comma have size too )

          while (calcByteSize(this.state) > 4000000) {
            this.state.splice(0, 10);
          }
        }

        if (typeof browser === 'undefined') {
          // Only Chrone have 'storage.local.getBytesInUse' function
          const bytesUsage = await code_default().storage.local.getBytesInUse('log');

          if (bytesUsage > 4000000) {
            this.state.splice(0, 10);
          }
        }

        try {
          await storage/* default.set */.Z.set('log', this.state);
        } catch (error) {
          this.state.splice(0, 10);
        }
      };

      time/* default.onStart */.Z.onStart({
        'name': 'log db',
        'startDelayInMs': 30 * 1000,
        'repeatInMinutes': 1
      }, loop);
    }
  }
  /** Add row to database
  @method */


  async add({
    timestamp,
    type = 'log',
    record
  }) {
    const data = {
      timestamp,
      type,
      record
    };

    if (!this.initiated) {
      this.delayedState.push(data);
      return;
    }

    this.state.push(data);

    if (this.state.length > limit) {
      this.state.splice(0, this.state.length - limit);
    }
  }
  /** Get all data from database
  @function */


  async clear() {
    return storage/* default.set */.Z.set('log', []);
  }
  /** Get all data from database
  @method */


  async getAll() {
    if (this.initiated) return this.state;
    return this.ready;
  }

}
/* harmony default export */ const db = (new LogDb());

/***/ }),

/***/ 6699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4019);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5713);
/* harmony import */ var tools_sendMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1748);



const {
  _
} = self;
;
const bgRequest = location.href.includes('background');
/** @function */

const stringify = data => data.map(item => {
  if (_.isObject(item)) return JSON.stringify(item);
  return typeof item === 'string' ? item : String(item);
}).join(', ');
/** @function */


const storageLogger = async ({
  type,
  data
}) => {
  const dbStringData = stringify(data);
  const date = new Date();

  const time = (() => {
    let date = new Date();
    let [day, hours, minutes, seconds] = [date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()].map(value => String(value).padStart(2, '0'));
    return `[${day}, ${hours}:${minutes}:${seconds}]`;
  })();

  data.unshift(time); // Console output

  (() => {
    if ((config__WEBPACK_IMPORTED_MODULE_0___default().type) !== 'production') {
      console[type].apply(console, data);
      return;
    }

    console[type](time + ', ' + dbStringData);
  })();

  await new Promise(resolve => {
    setTimeout(resolve, 0);
  }); // NOTE GAP!
  // Storing all logs

  _db__WEBPACK_IMPORTED_MODULE_1__/* ["default"].add */ .Z.add({
    'timestamp': date.getTime(),
    type,
    'record': dbStringData
  });
};
/** @function */


const logger = ({
  type,
  data
}) => {
  if (bgRequest) {
    storageLogger({
      type,
      data
    });
    return;
  } // Console


  switch (type) {
    case 'log':
      console.log.apply(console, data);
      break;

    case 'warn':
      console.warn.apply(console, data);
      break;

    case 'error':
      console.error.apply(console, data);
      break;
  } // Send message to background


  const messageType = (() => {
    switch (type) {
      case 'log':
        return 'log';

      case 'warn':
        return 'log.warn';

      case 'error':
        return 'log.error';
    }
  })();

  (0,tools_sendMessage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    'type': messageType,
    data
  });
};

let log = Object.assign((...args) => {
  logger({
    'type': 'log',
    'data': args
  });
}, {
  /** console.warn analog */
  'warn': (...args) => {
    logger({
      'type': 'warn',
      'data': args
    });
  },

  /** console.error analog */
  'error': (...args) => {
    logger({
      'type': 'error',
      'data': args
    });
  },

  /** console.group() + console.log[] + console.groupEnd() */
  'group': (name, entries) => {
    console.group(name);
    entries.forEach(entry => {
      logger({
        'type': 'log',
        'data': entry
      });
    });
    console.groupEnd();
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (log);

/***/ }),

/***/ 3357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ alarms)
});

// EXTERNAL MODULE: ./node_modules/crossbrowser-webextension/code/index.js
var code = __webpack_require__(3552);
var code_default = /*#__PURE__*/__webpack_require__.n(code);
;// CONCATENATED MODULE: ./src/general/alarms/generate.ts
/* global NodeJS */
let firstEventLoopTask = true;
setTimeout(() => {
  firstEventLoopTask = false;
}, 0);
/* harmony default export */ const generate = (alarmsObject => {
  const alarmsPermission = Boolean(alarmsObject);
  let alarms = [];
  let listeners = [];
  /** @function */

  const callListeners = name => {
    listeners.forEach(listener => {
      listener({
        name
      });
    });
  };
  /** @function */


  const create = (name, {
    when,
    periodInMinutes
  }) => {
    if (alarmsPermission) {
      return alarmsObject.create(name, {
        when,
        periodInMinutes
      });
    }

    const object = {
      name,
      when,
      periodInMinutes
    };

    const startDelay = (() => {
      if (typeof when === 'number') return when - Date.now();

      if (typeof periodInMinutes === 'number') {
        return periodInMinutes * 60 * 1000;
      }

      throw new Error('Both "when" and "periodInMinutes" are not specified');
    })();

    object.timeoutId = setTimeout(() => {
      callListeners(name);
      if (!periodInMinutes) return;
      /** @function */

      const loop = () => {
        callListeners(name);
        object.timeoutId = setTimeout(loop, periodInMinutes * 60 * 1000);
      };

      object.timeoutId = setTimeout(loop, periodInMinutes * 60 * 1000);
    }, startDelay); // Remove alarm with same name (as in specification of original alarm https://developer.chrome.com/docs/extensions/reference/alarms/#method-create )

    const index = alarms.findIndex(item => item.name === name);
    if (index !== -1) alarms.splice(index, 1);
    alarms.push(object);
  };

  return {
    /** @method */
    'clear': async name => {
      if (alarmsPermission) return alarmsObject.clear(name); // Clear timeouts

      for (const {
        'name': alarmName,
        timeoutId
      } of alarms) {
        if (alarmName === name && timeoutId) clearTimeout(timeoutId);
      } // Remove alarm itself


      const oldArray = alarms.slice();
      alarms = alarms.filter(item => item.name !== name);
      return oldArray.length !== alarms.length;
    },

    /** @method */
    'createOneTime': (name, {
      delay
    }) => {
      create(name, {
        'when': Date.now() + delay
      });
    },

    /** @method */
    'createCycle': (name, {
      delay,
      periodInMinutes
    }) => {
      create(name, typeof delay === 'number' ? {
        'when': Date.now() + delay,
        periodInMinutes
      } : {
        periodInMinutes
      });
    },

    /** @method */
    'hasAlarm': async name => {
      if (alarmsPermission) {
        const alarm = await alarmsObject.get(name);
        return Boolean(alarm);
      }

      return alarms.some(item => item.name === name);
    },

    /** @method */
    'on': listener => {
      if (!firstEventLoopTask) {
        throw new Error('Alarms.on called after first event loop task');
      }

      if (alarmsPermission) {
        alarmsObject.onAlarm.addListener(listener);
        return;
      }

      listeners.push(listener);
    },

    /** @method */
    'off': listener => {
      if (alarmsPermission) {
        alarmsObject.onAlarm.removeListener(listener);
        return;
      }

      listeners = listeners.filter(item => item !== listener);
    },

    /** @method */
    'hasListener': listener => {
      if (alarmsPermission) {
        return alarmsObject.onAlarm.hasListener(listener);
      }

      return listeners.includes(listener);
    }
  };
});
;// CONCATENATED MODULE: ./src/general/alarms/index.ts


const alarmsPermission = code_default().runtime.getManifest().permissions.includes('alarms');
/* harmony default export */ const alarms = (alarmsPermission ? generate((code_default()).alarms) : generate());

/***/ }),

/***/ 6264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3552);
/* harmony import */ var crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0__);
/* global StorageChange */

const {
  _
} = self;
let listeners = [];
/** @class singleton */

const storage = new class {
  constructor() {
    this._data = {};
    /** @type {Promise} */

    this.ready = crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.get().then(data => {
      this._data = data;
    });
    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
    this.remove = this.remove.bind(this);
  }
  /** @function */


  addListener(listener) {
    listeners.push(listener);
  }
  /** @function */


  removeListener(listner) {
    listeners = listeners.filter(item => item !== listner);
  }
  /** Read async
  @method */


  async get(key) {
    let data = await crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.get(key);
    if (typeof key === 'string') return data[key];
    return data;
  }
  /** Read sync
  @method */


  getSync(key) {
    return _.cloneDeep(this._data[key]);
  }
  /** Write async
  @method */


  set(key, value) {
    value = _.cloneDeep(value);
    this._data[key] = value;
    return crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.set({
      [key]: value
    });
  }
  /** Write sync
  @method */


  setSync(key, value) {
    value = _.cloneDeep(value);
    this._data[key] = value;
    crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.set({
      [key]: value
    });
  }
  /** Remove async
  @method */


  // eslint-disable-line no-dupe-class-members
  async remove(...args) {
    // eslint-disable-line no-dupe-class-members
    const keys = args.flat();
    keys.forEach(key => {
      delete this._data[key];
    });
    return crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.remove(keys);
  }
  /** Remove sync
  @method */


  removeSync(...args) {
    let keys = args.flat();
    keys.forEach(key => {
      delete this._data[key];
    });
    crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.remove(keys);
  }
  /** @method */


  onChange(options) {
    const ignoreList = options.ignore;
    /** @function */

    const listener = (changes, state, oldState) => {
      const keys = Object.keys(changes);
      if (!options.for.some(key => keys.includes(key))) return; // Remove ignored pairs key => value

      if (ignoreList) {
        for (const {
          property,
          value
        } of ignoreList) {
          if (!keys.includes(property)) continue;
          if (changes[property].oldValue !== value) continue;
          delete changes[property];
        }
      }

      if (!Object.keys(changes).length) return;

      if ('compile' in options) {
        const {
          compile,
          'do': action
        } = options;
        const newCompiled = compile(state);
        const oldCompiled = compile(oldState);
        if (_.isEqual(newCompiled, oldCompiled)) return;
        action(newCompiled, state);
      } else if ('changeCompilation' in options) {
        const value = options.changeCompilation(state, oldState);
        if (!value) return;
        options.do(state);
      } else {
        options.do(state);
      }
    };

    onChangeListeners.push(listener);
    return () => {
      onChangeListeners = onChangeListeners.filter(item => item !== listener);
    };
  }

}();
let onChangeListeners = [];
crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.onChanged.addListener((changes, area) => {
  if (area !== 'local') return;
  listeners.forEach(listener => {
    listener(changes);
  });

  (async () => {
    const state = await crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_0___default().storage.local.get(null);
    const oldChanges = Object.fromEntries(Object.entries(changes).map(([key, {
      oldValue
    }]) => [key, oldValue]));
    const oldState = Object.assign({}, state, oldChanges);
    if (_.isEqual(state, oldState)) return;

    for (const listener of onChangeListeners) {
      listener(Object.assign({}, changes), state, oldState);
    }
  })();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Proxy(storage, {
  get(target, key) {
    if (typeof key === 'string') {
      switch (key) {
        case 'addListener':
          return storage.addListener;

        case 'get':
          return storage.get;

        case 'onChange':
          return storage.onChange;

        case 'remove':
          return storage.remove;

        case 'removeListener':
          return storage.removeListener;

        case 'ready':
          return storage.ready;

        case 'set':
          return storage.set;

        default:
          return storage.getSync(key);
      }
    }

    if (typeof key === 'number') return storage.getSync(String(key));
    throw new Error('storage called with not string method');
  },

  set(target, key, value) {
    if (typeof key === 'string') {
      storage.setSync(key, value);
      return true;
    }

    if (typeof key === 'number') {
      storage.setSync(String(key), value);
      return true;
    }

    return false;
  },

  deleteProperty(target, key) {
    if (typeof key === 'string') {
      storage.removeSync(key);
      return true;
    }

    if (typeof key === 'number') {
      storage.removeSync(String(key));
      return true;
    }

    return false;
  }

}));

/***/ }),

/***/ 4501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ general_store)
});

// UNUSED EXPORTS: StoreClass

;// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {}

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = (/* unused pure expression or super */ null && (createStore));

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 0);
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread(_objectSpread({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}



// EXTERNAL MODULE: ./config/production.js
var production = __webpack_require__(4019);
var production_default = /*#__PURE__*/__webpack_require__.n(production);
// EXTERNAL MODULE: ./src/general/tools/hideStoreAccountData.ts
var hideStoreAccountData = __webpack_require__(5134);
// EXTERNAL MODULE: ./src/dualUse/log/index.ts
var log = __webpack_require__(6699);
// EXTERNAL MODULE: ./src/general/storage.ts
var storage = __webpack_require__(6264);
;// CONCATENATED MODULE: ./src/general/store/createReducer.ts
/* global AjaxAccount, LowLevelPac, PingRating, Price, Promotion, ProxyServers, StoreAccount, StoreGuestAccount, StoreLoginedInAccount, StoreState, StoreAction, UserPac */




const {
  _
} = self;
const showLogs = location.href.includes('background');
const makeAction = {
  /** @method */
  'Cache removal: set': ({
    noStorage,
    action,
    state
  }) => {
    let {
      data
    } = action;

    if (showLogs) {
      (0,log/* default */.Z)('Store: cache removal update. New: ', data, '. Old: ', state.cacheRemoval);
    }

    if (!noStorage) storage/* default.set */.Z.set('cacheRemoval', data);
    return Object.assign({}, state, {
      'cacheRemoval': data
    });
  },

  /** @method */
  'Days after install: set': ({
    noStorage,
    action,
    state
  }) => {
    let {
      days
    } = action;

    if (showLogs) {
      (0,log/* default */.Z)('Store: days after install update. New: ', days, '. Old: ', state.daysAfterInstall);
    }

    return Object.assign({}, state, {
      'daysAfterInstall': days
    });
  },

  /** @method */
  'Domain: set': ({
    noStorage,
    action,
    state
  }) => {
    let {
      domain
    } = action;

    if ((production_default()).type === 'development' && showLogs) {
      (0,log/* default */.Z)('Store: domain update. New: ', domain, '. Old: ', state.domain);
    }

    if (!noStorage) storage/* default.set */.Z.set('domain', domain);
    return Object.assign({}, state, {
      domain
    });
  },

  /** @method */
  'Experiments: add': ({
    noStorage,
    action,
    state
  }) => {
    let {
      experimentId,
      value
    } = action;
    let oldValue = state.experiments;
    let newValue = Object.assign({}, oldValue);
    newValue[experimentId] = value;

    if (!noStorage) {
      storage/* default.set */.Z.set('experiments', newValue);
    }

    if (showLogs) {
      (0,log/* default */.Z)('Store: experiments update. New: ', newValue, '. Old: ', oldValue);
    }

    return Object.assign({}, state, {
      'experiments': newValue
    });
  },

  /** @method */
  'Experiments: remove': ({
    noStorage,
    action,
    state
  }) => {
    let {
      experimentId
    } = action;
    let oldValue = state.experiments;
    let newValue = Object.assign({}, oldValue);
    delete newValue[experimentId];
    if (!noStorage) storage/* default.set */.Z.set('experiments', newValue);

    if (showLogs) {
      (0,log/* default */.Z)('Store: experiments update. New: ', newValue, '. Old: ', oldValue);
    }

    return Object.assign({}, state, {
      'experiments': newValue
    });
  },

  /** @method */
  'Experiments: set': ({
    noStorage,
    action,
    state
  }) => {
    const newValue = Object.assign({}, action.data);
    const oldValue = state.experiments;
    if (!noStorage) storage/* default.set */.Z.set('experiments', newValue);

    if (showLogs) {
      (0,log/* default */.Z)('Store: experiments update. New: ', newValue, '. Old: ', oldValue);
    }

    return Object.assign({}, state, {
      'experiments': newValue
    });
  },

  /** @method */
  'Favorites: set': ({
    noStorage,
    action,
    state
  }) => {
    let favorites = action.data.slice();
    if (!noStorage) storage/* default.set */.Z.set('favorites', favorites);

    if (showLogs) {
      (0,log/* default */.Z)('Store: favorites update. New: ', favorites, '. Old: ', state.favorites);
    }

    return Object.assign({}, state, {
      favorites
    });
  },

  /** @method */
  'Ignored experiments: add': ({
    noStorage,
    action,
    state
  }) => {
    const {
      experimentId
    } = action;
    const oldValue = state.ignoredExperiments;
    const newValue = oldValue.slice();
    newValue.push(experimentId);
    newValue.sort();

    if (!noStorage) {
      storage/* default.set */.Z.set('ignoredExperiments', newValue);
    }

    if (showLogs) {
      (0,log/* default */.Z)('Store: ignored experiments update. New: ', newValue, '. Old: ', oldValue);
    }

    return Object.assign({}, state, {
      'ignoredExperiments': newValue
    });
  },

  /** @method */
  'Ignored experiments: remove': ({
    noStorage,
    action,
    state
  }) => {
    const {
      experimentId
    } = action;
    const oldValue = state.ignoredExperiments;
    const newValue = oldValue.filter(item => item !== experimentId);

    if (!noStorage) {
      storage/* default.set */.Z.set('ignoredExperiments', newValue);
    }

    if (showLogs) {
      (0,log/* default */.Z)('Store: ignored experiments update. New: ', newValue, '. Old: ', oldValue);
    }

    return Object.assign({}, state, {
      'ignoredExperiments': newValue
    });
  },

  /** @method */
  'Ignored experiments: set': ({
    noStorage,
    action,
    state
  }) => {
    const newValue = action.data.slice();
    const oldValue = state.ignoredExperiments;
    if (!noStorage) storage/* default.set */.Z.set('ignoredExperiments', newValue);

    if (showLogs) {
      (0,log/* default */.Z)('Store: ignored experiments update. New: ', newValue, '. Old: ', oldValue);
    }

    return Object.assign({}, state, {
      'ignoredExperiments': newValue
    });
  },

  /** @method */
  'Low level PAC: set': ({
    noStorage,
    action,
    state
  }) => {
    const lowLevelPac = _.cloneDeep(action.data);

    if (!noStorage) storage/* default.set */.Z.set('lowLevelPac', lowLevelPac);

    if (showLogs) {
      (0,log/* default */.Z)('Store: low leverl PAC update. New: ', lowLevelPac, '. Old: ', state.lowLevelPac);
    }

    return Object.assign({}, state, {
      lowLevelPac
    });
  },

  /** @method */
  'Low level PAC: update': ({
    noStorage,
    action,
    state
  }) => {
    const lowLevelPac = _.cloneDeep(Object.assign({}, state.lowLevelPac, action.data));

    if (!noStorage) storage/* default.set */.Z.set('lowLevelPac', lowLevelPac);

    if (showLogs) {
      (0,log/* default */.Z)('Store: low leverl PAC update. New: ', lowLevelPac, '. Old: ', state.lowLevelPac);
    }

    return Object.assign({}, state, {
      lowLevelPac
    });
  },

  /** @method */
  'Page: set': ({
    noStorage,
    action,
    state
  }) => {
    let oldPage = state.page;
    let newState = Object.assign({}, state);
    newState.page = action.page;

    if (showLogs) {
      (0,log/* default */.Z)('Store: page change. New: ', newState.page, 'Old: ', oldPage);
    }

    return newState;
  },

  /** @method */
  'Ping: set': ({
    noStorage,
    action,
    state
  }) => {
    /** @type {Object<Number>} */
    let ping = _.cloneDeep(action.data);

    if (!noStorage) storage/* default.set */.Z.set('ping', ping);

    if (showLogs) {
      (0,log/* default */.Z)('Store: ping data update. New: ', ping, '. Old: ', state.ping);
    }

    return Object.assign({}, state, {
      ping
    });
  },

  /** @method */
  'Prices: set': ({
    noStorage,
    action,
    state
  }) => {
    let {
      prices
    } = action;
    if (!noStorage) storage/* default.set */.Z.set('prices', prices);

    if (showLogs) {
      (0,log/* default */.Z)('Store: prices update. New: ', prices, '. Old: ', state.prices);
    }

    return Object.assign({}, state, {
      prices
    });
  },

  /** @method */
  'Price trial: set': ({
    noStorage,
    action,
    state
  }) => {
    let {
      priceTrial
    } = action;
    if (!noStorage) storage/* default.set */.Z.set('priceTrial', priceTrial);

    if (showLogs) {
      (0,log/* default */.Z)('Store: price trial update. New: ', priceTrial, '. Old: ', state.priceTrial);
    }

    return Object.assign({}, state, {
      priceTrial
    });
  },

  /** @method */
  'Promotions block: set': ({
    noStorage,
    action,
    state
  }) => {
    let oldValue = state.promotionsBlock;
    let value = action.data;
    if (!noStorage) storage/* default.set */.Z.set('promotionsBlock', value);

    if (showLogs) {
      (0,log/* default */.Z)('Store: Promotions block update. New: ', value, '. Old: ', oldValue);
    }

    return Object.assign({}, state, {
      'promotionsBlock': value
    });
  },

  /** @method */
  'Promotions: set': ({
    noStorage,
    action,
    state
  }) => {
    let promotions = _.cloneDeep(action.data);

    if (!noStorage) storage/* default.set */.Z.set('promotions', promotions);

    if (showLogs) {
      (0,log/* default */.Z)('Store: promotions update. New: ', promotions, '. Old: ', state.promotions);
    }

    return Object.assign({}, state, {
      promotions
    });
  },

  /** @method */
  'Proxy domains: set': ({
    noStorage,
    action,
    state
  }) => {
    const oldValue = state.proxyDomains;
    const value = action.data;

    if (showLogs) {
      (0,log/* default */.Z)('Store: proxy domains update. New: ', value, '. Old: ', oldValue);
    }

    return Object.assign({}, state, {
      'proxyDomains': value
    });
  },

  /** @method */
  'Proxy domains: set free': ({
    noStorage,
    action,
    state
  }) => {
    let {
      'free': oldValue,
      premium
    } = state.proxyDomains;
    let value = action.data;

    if (showLogs) {
      (0,log/* default */.Z)('Store: free proxy domains update. New: ', value, '. Old: ', oldValue);
    }

    return Object.assign({}, state, {
      'proxyDomains': {
        'free': value,
        premium
      }
    });
  },

  /** @method */
  'Proxy domains: set premium': ({
    noStorage,
    action,
    state
  }) => {
    let {
      free,
      'premium': oldValue
    } = state.proxyDomains;
    let value = action.data;

    if (showLogs) {
      (0,log/* default */.Z)('Store: premium proxy domains update. New: ', value, '. Old: ', oldValue);
    }

    return Object.assign({}, state, {
      'proxyDomains': {
        free,
        'premium': value
      }
    });
  },

  /** @method */
  'Proxy servers: set': ({
    noStorage,
    action,
    state
  }) => {
    const servers = action.data;
    if (showLogs) (0,log/* default */.Z)('Store: proxy servers update. ', servers);
    return Object.assign({}, state, {
      'proxyServers': servers
    });
  },

  /** @method */
  'Timezone change: set': ({
    noStorage,
    action,
    state
  }) => {
    let oldValue = state.timezoneChange;
    let value = action.data;
    if (!noStorage) storage/* default.set */.Z.set('timezoneChange', value);

    if (showLogs) {
      (0,log/* default */.Z)('Store: timezone change update. New: ', value, '. Old: ', oldValue);
    }

    return Object.assign({}, state, {
      'timezoneChange': value
    });
  },

  /** @method */
  'Timezones: set': ({
    noStorage,
    action,
    state
  }) => {
    let oldValue = state.timezones;
    let value = action.data;

    if (showLogs) {
      (0,log/* default */.Z)('Store: timezones update. New: ', value, '. Old: ', oldValue);
    }

    return Object.assign({}, state, {
      'timezones': value
    });
  },

  /** @method */
  'User: set': ({
    noStorage,
    action,
    state
  }) => {
    const oldAccount = state.user;

    const account = (() => {
      const timestamp = {
        'validUntil': Date.now() + 5 * 60 * 1000,
        // TODO make Refresh time separate constant
        'version': Date.now()
      }; // Guest
      // @ts-ignore

      if (typeof action.data.email !== 'string') {
        return {
          'premium': false,
          timestamp,
          'type': 'guest'
        };
      } // Logined


      return {
        // @ts-ignore
        'email': action.data.email,
        'loginData': {
          // @ts-ignore
          'id': action.data.id,
          // @ts-ignore
          'credentials': action.data.credentials,
          // @ts-ignore
          'subscription': action.data.subscription
        },
        // @ts-ignore
        'premium': action.data.premium,
        timestamp,
        'type': 'logined'
      };
    })();

    if (!noStorage) storage/* default.set */.Z.set('account', account);
    {
      let oldState = _.cloneDeep(oldAccount);

      let newState = _.cloneDeep(account);

      if ((production_default()).type !== 'development') {
        delete oldState.email;

        if (oldState.type === 'logined') {
          // @ts-ignore
          delete oldState.loginData.credentials.email;
        }

        delete newState.email;

        if (newState.type === 'logined') {
          // @ts-ignore
          delete newState.loginData.credentials.email;
        }
      }

      (0,log/* default */.Z)('Store: account update. New: ', (0,hideStoreAccountData/* default */.Z)(newState), '. Old: ', (0,hideStoreAccountData/* default */.Z)(oldState));
    }
    return Object.assign({}, state, {
      'user': account
    });
  },

  /** @method */
  'User PAC: set': ({
    noStorage,
    action,
    state
  }) => {
    const pac = _.cloneDeep(action.data);

    if (!noStorage) {
      // Convert RegEx to string for JSON
      let filters = pac.filters.map(filter => {
        filter = _.cloneDeep(filter);

        if (filter.value instanceof RegExp) {
          filter.value = filter.value.toString();
        }

        return filter;
      });
      storage/* default.set */.Z.set('userPac', Object.assign({}, pac, {
        filters
      }));
    }

    if (showLogs) {
      (0,log/* default */.Z)('Store: PAC update. New: ', pac, '. Old: ', state.userPac);
    }

    return Object.assign({}, state, {
      'userPac': pac
    });
  },

  /** @method */
  'User PAC: update': ({
    noStorage,
    action,
    state
  }) => {
    const pac = Object.assign({}, state.userPac, _.cloneDeep(action.data));

    if (!noStorage) {
      // Convert RegEx to string for JSON
      let filters = pac.filters.map(filter => {
        filter = _.cloneDeep(filter);

        if (filter.value instanceof RegExp) {
          filter.value = filter.value.toString();
        }

        return filter;
      });
      storage/* default.set */.Z.set('userPac', Object.assign({}, pac, {
        filters
      }));
    }

    if (showLogs) {
      (0,log/* default */.Z)('Store: PAC update. New: ', pac, '. Old: ', state.userPac);
    }

    return Object.assign({}, state, {
      'userPac': pac
    });
  },

  /** @method */
  'Viewed personal banners: add': ({
    noStorage,
    action,
    state
  }) => {
    let {
      banner
    } = action;
    let viewedPersonalBanners = Array.from(new Set(state.viewedPersonalBanners.concat([banner]))).sort();

    if (!noStorage) {
      storage/* default.set */.Z.set('viewed personal banners', viewedPersonalBanners);
    }

    if (showLogs) {
      (0,log/* default */.Z)('Store: viewed personal banners update. New: ', viewedPersonalBanners, '. Old: ', state.viewedPersonalBanners);
    }

    return Object.assign({}, state, {
      viewedPersonalBanners
    });
  },

  /** @method */
  'Viewed personal banners: set': ({
    noStorage,
    action,
    state
  }) => {
    let {
      banners
    } = action;
    if (!noStorage) storage/* default.set */.Z.set('viewed personal banners', banners);

    if (showLogs) {
      (0,log/* default */.Z)('Store: viewed personal banners update. New: ', banners, '. Old: ', state.viewedPersonalBanners);
    }

    return Object.assign({}, state, {
      'viewedPersonalBanners': banners
    });
  },

  /** @method */
  'WebRTC blocking: set': ({
    noStorage,
    action,
    state
  }) => {
    let oldValue = state.webrtcBlock;
    let value = action.data;
    if (!noStorage) storage/* default.set */.Z.set('webrtcBlock', value);

    if (showLogs) {
      (0,log/* default */.Z)('Store: WebRTC blocking update. New: ', value, '. Old: ', oldValue);
    }

    return Object.assign({}, state, {
      'webrtcBlock': value
    });
  }
};
/** @function */

/* harmony default export */ const createReducer = (initialState => {
  return (state = initialState, action) => {
    let noStorage = Boolean(action.noStorage);
    let type = action.type;
    delete action.noStorage; // Wrong type

    if (!(type in makeAction)) return state; // Existing type
    // @ts-ignore

    return makeAction[type]({
      noStorage,
      action,
      state
    });
  };
});
// EXTERNAL MODULE: ./src/general/tools/Deferred.ts
var Deferred = __webpack_require__(5691);
// EXTERNAL MODULE: ./node_modules/crossbrowser-webextension/code/index.js
var code = __webpack_require__(3552);
var code_default = /*#__PURE__*/__webpack_require__.n(code);
// EXTERNAL MODULE: ./src/bg/defaultPrices.ts
var defaultPrices = __webpack_require__(7027);
;// CONCATENATED MODULE: ./src/general/tools/isObject.ts
/* harmony default export */ const isObject = (object => Boolean(object && typeof object === 'object'));
// EXTERNAL MODULE: ./src/general/tools/makeProxyServersMap.ts
var makeProxyServersMap = __webpack_require__(7542);
// EXTERNAL MODULE: ./src/general/tools/pacHostsToCountryPrefixPorts.ts
var pacHostsToCountryPrefixPorts = __webpack_require__(8760);
// EXTERNAL MODULE: ./src/bg/serversObject/get.ts
var get = __webpack_require__(7437);
;// CONCATENATED MODULE: ./src/general/store/getInitialState.ts
/* global LowLevelPac, MigrationStoreAccount, PingRating, Price, Promotion, ProxyServerCountryData, StoreAccount, StoreGuestAccount, StoreState, UserPac */






/** @function */

const getDefaultPac = () => ({
  'mode': 'direct',
  'country': null,
  'broken': false,
  'filters': []
});
/** @function */


const getDefaultUser = () => {
  const defaultUser = {
    'type': 'guest',
    'premium': false,
    'timestamp': {}
  };
  return defaultUser;
};
/** @function */


/* harmony default export */ const getInitialState = (async argStorageValue => {
  let state = {
    // Page: index:home, index:changeLocation, login
    'page': 'index:home'
  };
  const storageValue = argStorageValue || (await code_default().storage.local.get(['account', 'cacheRemoval', 'daysAfterInstall', 'domain', 'experiments', 'favorites', 'ignoredExperiments', 'lowLevelPac', 'ping', 'prices', 'priceTrial', 'promotions', 'promotionsBlock', 'proxyIsBroken', 'reserveDomains', 'timezoneChange', 'userPac', 'viewed personal banners', 'webrtc', 'webrtcBlock']));
  const serversObject = await (0,get/* default */.Z)();
  const serversObjectKeys = Object.keys(serversObject.countries);
  let {
    account,
    cacheRemoval,
    daysAfterInstall,
    domain,
    experiments,
    favorites,
    ignoredExperiments,
    lowLevelPac,
    ping,
    prices,
    priceTrial,
    promotions,
    promotionsBlock,
    proxyIsBroken,
    reserveDomains,
    timezoneChange,
    userPac,
    'viewed personal banners': viewedPersonalBanners,
    webrtc,
    webrtcBlock
  } = storageValue;
  return Object.assign(state, {
    // Remove cache to resolve onAuthRequired problems
    'cacheRemoval': (() => {
      return cacheRemoval !== null && cacheRemoval !== void 0 ? cacheRemoval : false;
    })(),
    // Days after instllation
    'daysAfterInstall': (() => {
      if (typeof daysAfterInstall !== 'number') return 0;
      return Math.floor((Date.now() - daysAfterInstall) / (24 * 3600 * 1000));
    })(),
    // Current URL domain
    'domain': (() => {
      if (location.href.includes('background')) return null;
      return domain || null;
    })(),
    'experiments': (() => {
      if (!isObject(experiments)) return {};
      const values = Object.values(experiments);
      const condition = values.length && values.every(item => typeof item === 'string');
      if (!condition) return {};
      return experiments;
    })(),
    // Favorite countries (only for premium user)
    'favorites': (() => {
      const condition = Array.isArray(favorites) && favorites.every(item => typeof item === 'string');
      return condition ? favorites : [];
    })(),
    // Ignored experiments (ids)
    'ignoredExperiments': (() => {
      const condition = Array.isArray(ignoredExperiments) && ignoredExperiments.every(item => typeof item === 'string');
      return condition ? ignoredExperiments : [];
    })(),
    // Low level PAC
    'lowLevelPac': (() => {
      return lowLevelPac || {
        'browsecCountry': null,
        'countries': {},
        // { [ country: string ]: any },
        'globalReturn': null,
        'ignoredDomains': [],
        'premiumCountries': {},
        // { [ country: string ]: any },
        'siteFilters': []
      };
    })(),
    // Ping to our servers
    'ping': (() => {
      if (!Array.isArray(ping)) return [];
      let codition = ping.every(item => isObject(item) && typeof item.country === 'string' && typeof item.premium === 'boolean' && typeof item.delay === 'number' && typeof item.mark === 'number');
      return codition ? ping : [];
    })(),
    // Internal tarrifs
    'prices': (() => {
      if (!Array.isArray(prices) || !prices.length) return defaultPrices/* default */.Z;
      const condition = prices.every(item => isObject(item) && typeof item.currency === 'string' && typeof item.value === 'number' && typeof item.duration === 'number');
      return condition ? prices : defaultPrices/* default */.Z;
    })(),
    // Trial days if present
    'priceTrial': (() => typeof priceTrial === 'number' ? priceTrial : undefined)(),
    // Raw promotions
    'promotions': (() => {
      if (!Array.isArray(promotions)) return [];
      return promotions.filter(item => {
        var _item$banner, _item$banner2;

        return isObject(item) && (!item.banner || typeof (item === null || item === void 0 ? void 0 : (_item$banner = item.banner) === null || _item$banner === void 0 ? void 0 : _item$banner.link) === 'string' && typeof (item === null || item === void 0 ? void 0 : (_item$banner2 = item.banner) === null || _item$banner2 === void 0 ? void 0 : _item$banner2.structure) === 'object') && typeof item.id === 'string' && typeof item.from === 'number' && ['common', 'personal'].includes(item.kind) && (!item.page || typeof item.page === 'string') && typeof item.till === 'number';
      });
    })(),
    // Block promotions for free users
    'promotionsBlock': (() => typeof promotionsBlock === 'boolean' ? promotionsBlock : false)(),
    // List of domains for onAuthRequired
    'proxyDomains': (() => {
      if (!reserveDomains) return serversObject.domains;
      let {
        free,
        premium
      } = reserveDomains;
      if (!free.length) free = serversObject.domains.free;
      if (!premium.length) premium = serversObject.domains.premium;
      return {
        free,
        premium
      };
    })(),
    // Is proxy broken?
    'proxyIsBroken': (() => typeof proxyIsBroken === 'boolean' ? proxyIsBroken : false)(),
    // List of proxy servers
    'proxyServers': (() => {
      const object = new Map();

      for (const country of serversObjectKeys) {
        const item = serversObject.countries[country];
        const countryData = {};

        if (item.fast_servers) {
          countryData.fast = (0,pacHostsToCountryPrefixPorts/* default */.Z)(item.fast_servers);
        }

        if (item.premium_servers) {
          countryData.premium = (0,pacHostsToCountryPrefixPorts/* default */.Z)(item.premium_servers);
        }

        if (item.servers) {
          countryData.free = (0,pacHostsToCountryPrefixPorts/* default */.Z)(item.servers);
        }

        object.set(country, countryData);
      }

      return (0,makeProxyServersMap/* default */.Z)(object);
    })(),
    'timezones': (() => {
      const object = new Map();

      for (const country of serversObjectKeys) {
        const offset = serversObject.countries[country].timezoneOffset;
        if (typeof offset === 'number') object.set(country, offset);
      }

      return object;
    })(),
    'timezoneChange': (() => typeof timezoneChange === 'boolean' ? timezoneChange : false)(),
    // Information about owner
    'user': (() => {
      const storageValue = account;
      if (!storageValue) return getDefaultUser();
      if (storageValue.type) return storageValue;
      const oldAccount = storageValue;
      if (!('email' in oldAccount)) return getDefaultUser();
      return {
        'email': oldAccount.email,
        'loginData': {
          'id': oldAccount.id,
          'credentials': oldAccount.credentials,
          'subscription': oldAccount.subscription
        },
        'premium': oldAccount.premium,
        'timestamp': {
          'validUntil': oldAccount.validUntil,
          'version': oldAccount.version
        },
        'type': 'logined'
      };
    })(),
    // Pac script state
    'userPac': (() => {
      if (!isObject(userPac)) return getDefaultPac();
      const condition = ['direct', 'proxy'].includes(userPac.mode) && (userPac.country === null || typeof userPac.country === 'string') && Array.isArray(userPac.filters);
      if (!condition) return getDefaultPac();

      if (userPac.filters.length) {
        // Migration
        if (userPac.filters.some(filter => filter.domain)) {
          userPac.filters = userPac.filters.map(({
            country,
            disabled,
            domain,
            proxyMode
          }) => ({
            country,
            disabled,
            'format': 'domain',
            'value': domain,
            proxyMode
          }));
        } else {
          for (const filter of userPac.filters) {
            if (filter.format !== 'regex') continue;
            filter.value = new RegExp(filter.value.slice(1, -1));
          }
        }
      }

      return userPac;
    })(),
    // Personal banners that user viewed in popup
    'viewedPersonalBanners': (() => {
      if (!Array.isArray(viewedPersonalBanners)) return [];
      let condition = viewedPersonalBanners.length && viewedPersonalBanners.every(item => typeof item === 'string');
      return condition ? viewedPersonalBanners : [];
    })(),
    // Block WebRTC (enable protection and activate it if proxy enabled)
    'webrtcBlock': (() => {
      if (typeof webrtcBlock === 'boolean') return webrtcBlock;
      return typeof webrtc === 'boolean' ? webrtc : null;
    })()
  });
});
// EXTERNAL MODULE: ./src/general/tools/proxyServersDispatchChanges.ts
var proxyServersDispatchChanges = __webpack_require__(4516);
;// CONCATENATED MODULE: ./src/general/store/storageListener.ts
/* global AjaxAccount, StoreAccount */


const {
  _: storageListener_
} = self;
/* harmony default export */ const storageListener = (store => {
  storage/* default.addListener */.Z.addListener(async changes => {
    if (changes.account) {
      const {
        oldValue,
        newValue
      } = changes.account;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        const data = newValue.type === 'logined' ? {
          'credentials': newValue.loginData.credentials,
          'email': newValue.email,
          'id': newValue.loginData.id,
          'premium': newValue.premium,
          'subscription': newValue.loginData.subscription,
          'type': 'logined'
        } : {
          'guest': true,
          'type': 'guest'
        };
        store.dispatch({
          'type': 'User: set',
          data,
          'noStorage': true
        });
      }
    }

    if (changes.cacheRemoval) {
      let {
        oldValue,
        newValue
      } = changes.cacheRemoval;

      if (oldValue !== newValue) {
        store.dispatch({
          'type': 'Cache removal: set',
          'data': newValue,
          'noStorage': true
        });
      }
    }

    if (changes.domain) {
      let {
        oldValue,
        newValue
      } = changes.domain;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'Domain: set',
          'domain': newValue,
          'noStorage': true
        });
      }
    }

    if (changes.experiments) {
      let {
        oldValue,
        newValue
      } = changes.experiments;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'Experiments: set',
          'data': newValue,
          'noStorage': true
        });
      }
    }

    if (changes.favorites) {
      let {
        oldValue,
        newValue
      } = changes.favorites;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'Favorites: set',
          'data': newValue,
          'noStorage': true
        });
      }
    }

    if (changes.ignoredExperiments) {
      let {
        oldValue,
        newValue
      } = changes.ignoredExperiments;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'Ignored experiments: set',
          'data': newValue,
          'noStorage': true
        });
      }
    }

    if (changes.lowLevelPac) {
      let {
        oldValue,
        newValue
      } = changes.lowLevelPac;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'Low level PAC: set',
          'data': newValue,
          'noStorage': true
        });
      }
    }

    if (changes.userPac) {
      let {
        oldValue,
        newValue
      } = changes.userPac;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'User PAC: set',
          'data': newValue,
          'noStorage': true
        });
      }
    }

    if (changes.ping) {
      let {
        oldValue,
        newValue
      } = changes.ping;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'Ping: set',
          'data': newValue,
          'noStorage': true
        });
      }
    }

    if (changes.prices) {
      let {
        oldValue,
        newValue
      } = changes.prices;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'Prices: set',
          'prices': newValue,
          'noStorage': true
        });
      }
    }

    if (changes.priceTrial) {
      let {
        oldValue,
        newValue
      } = changes.priceTrial;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'Price trial: set',
          'priceTrial': newValue,
          'noStorage': true
        });
      }
    }

    if (changes.promotionsBlock) {
      let {
        oldValue,
        newValue
      } = changes.promotionsBlock;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'Promotions block: set',
          'data': newValue,
          'noStorage': true
        });
      }
    }

    if (changes.promotions) {
      let {
        oldValue,
        newValue
      } = changes.promotions;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'Promotions: set',
          'data': newValue,
          'noStorage': true
        });
      }
    }

    if (changes.reserveDomains) {
      let {
        oldValue,
        newValue
      } = changes.reserveDomains;
      const {
        proxyDomains
      } = await store.getStateAsync();

      if (!storageListener_.isEqual(oldValue, newValue)) {
        let {
          free,
          premium
        } = newValue;
        if (!free.length) free = proxyDomains.free;
        if (!premium.length) premium = proxyDomains.premium;

        if (!storageListener_.isEqual(proxyDomains, {
          free,
          premium
        })) {
          store.dispatch({
            'type': 'Proxy domains: set',
            'data': {
              free,
              premium
            },
            'noStorage': true
          });
        }
      }
    }

    if (changes.serversObject) {
      const {
        oldValue,
        newValue
      } = changes.serversObject;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        (0,proxyServersDispatchChanges/* default */.Z)({
          'object': newValue,
          'noStorage': true,
          store
        });
      }
    }

    if (changes.timezoneChange) {
      let {
        oldValue,
        newValue
      } = changes.timezoneChange;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'Timezone change: set',
          'data': newValue,
          'noStorage': true
        });
      }
    }

    if (changes['viewed personal banners']) {
      let {
        oldValue,
        newValue
      } = changes['viewed personal banners'];

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'Viewed personal banners: set',
          'banners': newValue,
          'noStorage': true
        });
      }
    }

    if (changes.webrtcBlock) {
      let {
        oldValue,
        newValue
      } = changes.webrtcBlock;

      if (!storageListener_.isEqual(oldValue, newValue)) {
        store.dispatch({
          'type': 'WebRTC blocking: set',
          'data': newValue,
          'noStorage': true
        });
      }
    }
  });
});
;// CONCATENATED MODULE: ./src/general/store/index.ts
/* global StoreState, StoreAction */






const {
  _: store_
} = self;
;
class StoreClass {
  constructor() {
    this._callbacks = [];
    this._dispatchDelayedData = [];
    this.initiated = false;
    this.ready = new Deferred/* default */.Z();
    this.ready.then(() => {
      this._dispatchDelayedData.forEach(data => {
        this.dispatch(data);
      });
    });
  }
  /** @method */


  dispatch(data) {
    var _this$_realStore;

    if (typeof ((_this$_realStore = this._realStore) === null || _this$_realStore === void 0 ? void 0 : _this$_realStore.dispatch) === 'function') {
      this._realStore.dispatch(data);

      return;
    }

    this._dispatchDelayedData.push(data);
  }
  /** @method */


  getState() {
    return this.getStateSync();
  }
  /** @method */


  async getStateAsync() {
    await this.ready;
    return this._realStore.getState();
  }
  /** @method */


  getStateSync() {
    var _this$_realStore2;

    if (typeof ((_this$_realStore2 = this._realStore) === null || _this$_realStore2 === void 0 ? void 0 : _this$_realStore2.getState) !== 'function') {
      throw new Error('store.getStateSync called too early');
    }

    return this._realStore.getState();
  }
  /** @method */


  // eslint-disable-line no-dupe-class-members
  async initiate(arg) {
    // eslint-disable-line no-dupe-class-members
    if (this.initiated) return store.ready;
    this.initiated = true;
    const initialState = await (() => {
      if ((arg === null || arg === void 0 ? void 0 : arg.type) === 'store state') {
        const {
          value
        } = arg;
        value.proxyServers = (0,makeProxyServersMap/* default */.Z)(new Map(Object.entries(value.proxyServers)));
        value.timezones = new Map(Object.entries(value.timezones));
        return value;
      }

      if (arg === undefined) return getInitialState();
      return getInitialState(arg.value);
    })(); // @ts-ignore

    const realStore = createStore(createReducer(initialState));
    this._realStore = realStore;
    let state = realStore.getState();
    realStore.subscribe(() => {
      const newState = realStore.getState();
      const actions = [];

      for (const {
        property,
        compare
      } of this._callbacks) {
        const value0 = property(newState);
        const value1 = property(state);

        const haveChanges = (() => {
          if (value0 instanceof Map && value1 instanceof Map) {
            if (value0 === value1) return false;
            if (value0.size !== value1.size) return true;

            for (const [key0, val0] of value0) {
              if (!store_.isEqual(value1.get(key0), val0)) return true;
            }

            return false;
          }

          return !store_.isEqual(value0, value1);
        })();

        if (!haveChanges) continue;
        actions.push({
          compare,
          'values': [value0, value1]
        });
      }

      state = newState;

      for (const {
        compare,
        values
      } of actions) {
        compare(values[0], values[1], newState);
      }
    });
    this.ready.resolve(state);
    return state;
  }
  /** Subscribe to changes like in React-Redux
  @method
  @param property - used to get changes only from specific property
  @param compare - callback
  @return unsubscribe function */


  onChange(property, compare) {
    const object = {
      property,
      compare
    };

    this._callbacks.push(object);

    return () => {
      this._callbacks = this._callbacks.filter(item => item !== object);
    };
  }
  /** @method */


  onOneChange(property, compare) {
    if (typeof compare !== 'function') {
      return new Promise(resolve => {
        const unsubscribe = this.onChange(property, newState => {
          unsubscribe();
          resolve(newState);
        });
      });
    }

    return new Promise(resolve => {
      const unsubscribe = this.onChange(property, async (newState, oldState, storeState) => {
        const output = await compare(newState, oldState, storeState);
        if (!output) return;
        unsubscribe();
        resolve(newState);
      });
    });
  }
  /** @method */


  subscribe(listener) {
    var _this$_realStore3;

    if (typeof ((_this$_realStore3 = this._realStore) === null || _this$_realStore3 === void 0 ? void 0 : _this$_realStore3.subscribe) !== 'function') {
      throw new Error('store.subscribe called too early');
    }

    return this._realStore.subscribe(listener);
  }

}
;
const store = new StoreClass();
storageListener(store);
/* harmony default export */ const general_store = (store);

/***/ }),

/***/ 8575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var alarms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3357);
/* harmony import */ var crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3552);
/* harmony import */ var crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6264);



const manifestVersion = chrome.runtime.getManifest().manifest_version;
/** @function */

const onStartAction = action => {
  if (manifestVersion === 2) action();else {
    crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_1___default().runtime.onInstalled.addListener(action);
    crossbrowser_webextension__WEBPACK_IMPORTED_MODULE_1___default().runtime.onStartup.addListener(action);
  }
};

let started = false;
setTimeout(() => {
  started = true;
}, 0);
const names = new Set();
/** @function */

const onMark = async ({
  name,
  repeatInMinutes
}, action) => {
  if (started) throw new Error('time.onMark called after first event loop');

  if (names.has(name)) {
    throw new Error(`time.onMark: duplicate entry with name "${name}"`);
  }

  names.add(name);
  alarms__WEBPACK_IMPORTED_MODULE_0__/* ["default"].on */ .Z.on(alarmInfo => {
    if (alarmInfo.name === name) action();
  });
  onStartAction(async () => {
    const mark = await storage__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get('timemark: ' + name);

    if (!mark) {
      action();
      storage__WEBPACK_IMPORTED_MODULE_2__/* ["default"].set */ .Z.set('timemark: ' + name, Date.now());
      alarms__WEBPACK_IMPORTED_MODULE_0__/* ["default"].createCycle */ .Z.createCycle(name, {
        'periodInMinutes': repeatInMinutes
      });
      return;
    }

    const timePassed = Date.now() - mark;

    if (timePassed < 0 || timePassed >= repeatInMinutes * 60 * 1000) {
      action();
      storage__WEBPACK_IMPORTED_MODULE_2__/* ["default"].set */ .Z.set('timemark: ' + name, Date.now());
      alarms__WEBPACK_IMPORTED_MODULE_0__/* ["default"].createCycle */ .Z.createCycle(name, {
        'periodInMinutes': repeatInMinutes
      });
    } else {
      alarms__WEBPACK_IMPORTED_MODULE_0__/* ["default"].createCycle */ .Z.createCycle(name, {
        'delay': repeatInMinutes * 60 * 1000 - timePassed,
        'periodInMinutes': repeatInMinutes
      });
    }
  });
};
/** @function */


const onStart = (options, action) => {
  if (started) throw new Error('time.onStart called after first event loop');
  const {
    name,
    repeatInMinutes
  } = options;

  if (names.has(name)) {
    throw new Error(`time.onStart: duplicate entry with name "${name}"`);
  }

  names.add(name);
  let {
    startDelayInMs
  } = options;

  if (typeof startDelayInMs !== 'number' && !repeatInMinutes) {
    throw new Error('Both startDelayInMs and repeatInMinutes are not specified');
  }

  if (typeof startDelayInMs !== 'number') {
    startDelayInMs = repeatInMinutes * 60 * 1000;
  }

  if (startDelayInMs === 0) {
    onStartAction(action);
    if (!repeatInMinutes) return;
    startDelayInMs = repeatInMinutes * 60 * 1000;
  }

  if (repeatInMinutes) {
    alarms__WEBPACK_IMPORTED_MODULE_0__/* ["default"].createCycle */ .Z.createCycle(name, {
      'delay': startDelayInMs,
      'periodInMinutes': repeatInMinutes
    });
  } else {
    alarms__WEBPACK_IMPORTED_MODULE_0__/* ["default"].createOneTime */ .Z.createOneTime(name, {
      'delay': startDelayInMs
    });
  }

  alarms__WEBPACK_IMPORTED_MODULE_0__/* ["default"].on */ .Z.on(alarmInfo => {
    if (alarmInfo.name === name) action();
  });
};
/*
/ @function /
const add = (
  { name, startDelayInMs, repeatInMinutes }: {
    'name'?: string,
    'startDelayInMs'?: number,
    'repeatInMinutes'?: integer
  },
  action
) => {
  if( !startDelayInMs && !repeatInMinutes ){
    throw new Error( 'Both startDelayInMs and repeatInMinutes are not specified' );
  }
  

};


/ @function /
const remove = ( listener ) => {

};*/


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  onMark,
  onStart
});

/***/ }),

/***/ 5691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Deferred based on Promise
class Deferred extends Promise {
  constructor(callback = (resolve, reject) => {}) {
    let res, rej;
    super((resolve, reject) => {
      res = resolve;
      rej = reject;
      callback(resolve, reject);
    });
    this._resolve = res;
    this._reject = rej;
  }

  resolve(result) {
    this._resolve(result);

    return this;
  }

  reject(error) {
    this._reject(error);

    return this;
  }

}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Deferred);

/***/ }),

/***/ 7493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global RequestInit */

/** Simplified AJAX function, POST by default */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (url, params) => {
  const {
    data,
    method
  } = params;
  const dataType = params.dataType || 'text'; // Headers

  const headers = (() => {
    if (params.headers) return params.headers;

    if (method === 'POST' && !data && !params.body) {
      return {
        'Content-Type': 'application/x-www-form-urlencoded'
      };
    }

    return {};
  })();

  params = Object.assign({}, params);
  delete params.data;
  delete params.dataType;
  delete params.headers; // Result options object for fetch

  let options = {
    method
  }; // Body

  if (data) {
    if (method === 'POST') {
      options.body = JSON.stringify(data);

      if (!headers['Content-Type']) {
        headers['Content-Type'] = 'application/json';
      }
    } else {
      options.body = Object.entries(data).map(([key, value]) => key + '=' + encodeURIComponent(value)).join('&');
    }
  } // Credentials


  options.credentials = params.credentials || 'include';
  Object.assign(options, params);
  if (Object.keys(headers).length) Object.assign(options, {
    headers
  });
  const response = await fetch(url, options);

  if (response.ok) {
    return dataType === 'json' ? response.json()
    /*: Promise<Object>*/
    : response.text()
    /*: Promise<string>*/
    ;
  }

  const error = new Error(response.statusText);
  error.status = response.status;

  try {
    error.responseText = await response.text();
  } catch (error) {}

  throw error;
});

/***/ }),

/***/ 8459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// @flow

/** http://www.ietf.org/rfc/rfc4122.txt */

/** @function */
let chr4 = () => Math.random().toString(16).slice(-4);
/** @function */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4());

/***/ }),

/***/ 5134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4019);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);
/* global StoreAccount */

const emailValue = '--@--.--';
/** @function */

let development = account => account;
/** @function */


let production = base => {
  let account = JSON.parse(JSON.stringify(base));

  if (account.type === 'logined') {
    account.email = emailValue;
    account.loginData.credentials.email = emailValue;
    account.loginData.credentials.access_token = 'exist';
    account.loginData.credentials.ipsec_password = 'exist';
  }

  return account;
};
/** @function */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((config__WEBPACK_IMPORTED_MODULE_0___default().type) === 'development' ? development : production);

/***/ }),

/***/ 7542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global ProxyServerCountryData */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proxyServers => Object.assign(proxyServers, {
  /** @method */
  freeCountries() {
    const iterator = // @ts-ignore
    this.entries();
    return {
      [Symbol.iterator]: () => ({
        next() {
          while (true) {
            const {
              value,
              done
            } = iterator.next();
            if (done) return {
              'value': undefined,
              'done': true
            };
            let [country, {
              'free': servers
            }] = value;
            if (servers) return {
              'value': country,
              'done': false
            };
          }
        }

      })
    };
  },

  /** @method */
  premiumCountries() {
    const iterator = // @ts-ignore
    this.entries();
    return {
      [Symbol.iterator]: () => ({
        next() {
          while (true) {
            const {
              value,
              done
            } = iterator.next();
            if (done) return {
              'value': undefined,
              'done': true
            };
            let [country, {
              'premium': servers
            }] = value;
            if (servers) return {
              'value': country,
              'done': false
            };
          }
        }

      })
    };
  }

}));

/***/ }),

/***/ 8760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global CountryPrefixPort, PacHost */

/** @function */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servers => servers.map(({
  host,
  port
}) => {
  const countryWithNumber = host.split('.')[0];
  return {
    'prefix': countryWithNumber,
    port
  };
}));

/***/ }),

/***/ 4516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tools_makeProxyServersMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7542);
/* harmony import */ var tools_pacHostsToCountryPrefixPorts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8760);
/* global ProxyServerCountryData, RawServersObject */



/** @function */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  noStorage = false,
  object,
  store
}) => {
  const proxyServers = new Map();
  const timezones = new Map();

  for (const country of Object.keys(object.countries)) {
    const item = object.countries[country];
    const countryData = {};

    if (item.fast_servers) {
      countryData.fast = (0,tools_pacHostsToCountryPrefixPorts__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(item.fast_servers);
    }

    if (item.premium_servers) {
      countryData.premium = (0,tools_pacHostsToCountryPrefixPorts__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(item.premium_servers);
    }

    if (item.servers) {
      countryData.free = (0,tools_pacHostsToCountryPrefixPorts__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(item.servers);
    }

    proxyServers.set(country, countryData);
    const offset = item.timezoneOffset;
    if (typeof offset === 'number') timezones.set(country, offset);
  }

  store.dispatch({
    'type': 'Proxy servers: set',
    'data': (0,tools_makeProxyServersMap__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(proxyServers),
    noStorage
  });
  store.dispatch({
    'type': 'Proxy domains: set',
    'data': {
      'free': object.domains.free,
      'premium': object.domains.premium
    }
  });
  store.dispatch({
    'type': 'Timezones: set',
    'data': timezones,
    noStorage
  });
});

/***/ }),

/***/ 1748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @function */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((...args) => {
  if (typeof browser !== 'undefined') {
    return browser.runtime.sendMessage.apply(browser.runtime, args);
  }

  return new Promise((resolve, reject) => {
    /** @function */
    const callback = response => {
      if (chrome.runtime.lastError) reject(chrome.runtime.lastError);else resolve(response);
    };

    args.push(callback);
    chrome.runtime.sendMessage.apply(chrome.runtime, args);
  });
});

/***/ }),

/***/ 8050:
/***/ (() => {

if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth = 1) {
    // eslint-disable-line no-extend-native
    depth = isNaN(depth) ? 0 : Math.floor(depth);
    if (depth < 1) return this.slice();
    if (depth === 1) return [].concat(...this);
    return [].concat(...this.map(v => Array.isArray(v) ? v.flat(depth - 1) : v));
  };
}

/***/ }),

/***/ 2893:
/***/ (() => {

if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function (callback, thisArg = this) {
    // eslint-disable-line no-extend-native
    return this.map(callback, thisArg).flat();
  };
}

/***/ }),

/***/ 8562:
/***/ (() => {

if (!Object.fromEntries) {
  Object.fromEntries = iterable => {
    return [...iterable].reduce((obj, [key, val]) => {
      obj[key] = val;
      return obj;
    }, {});
  };
}

/***/ }),

/***/ 651:
/***/ (() => {

(() => {
  if (self.Promise.prototype.finally) return;
  /**
  @method
  @param {Function}
  @return {Promise} initial */

  self.Promise.prototype.finally = function (onFinally) {
    // eslint-disable-line no-extend-native
    this.then(onFinally, onFinally);
    return this;
  };
})();

/***/ }),

/***/ 7554:
/***/ (() => {

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
if (!String.prototype.padEnd) {
  String.prototype.padEnd = function padEnd(targetLength, padString) {
    // eslint-disable-line
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;

    padString = String(typeof padString !== 'undefined' ? padString : ' ');

    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;

      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }

      return String(this) + padString.slice(0, targetLength);
    }
  };
}

/***/ }),

/***/ 3498:
/***/ (() => {

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    // eslint-disable-line
    targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;

    padString = String(typeof padString !== 'undefined' ? padString : ' ');

    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;

      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }

      return padString.slice(0, targetLength) + String(this);
    }
  };
}

/***/ }),

/***/ 6098:
/***/ ((module) => {

/** Deferred based on Promise
@function
@return {Promise} */
module.exports = () => {
  let res, rej;
  let deferred = new Promise( ( resolve, reject ) => {
    res = resolve;
    rej = reject;
  });
  deferred.resolve = res;
  deferred.reject = rej;

  return deferred;
};


/***/ }),

/***/ 7426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** accessibilityFeatures (Chrome only)
https://developer.chrome.com/extensions/accessibilityFeatures */
const bindObjects = __webpack_require__( 3703 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.accessibilityFeatures || promiseSupport ) return ns.accessibilityFeatures;

  return bindObjects({}, ns.accessibilityFeatures, [
    'animationPolicy',
    'autoclick',
    'caretHighlight',
    'cursorHighlight',
    'focusHighlight',
    'highContrast',
    'largeCursor',
    'screenMagnifier',
    'selectToSpeak',
    'spokenFeedback',
    'stickyKeys',
    'switchAccess',
    'virtualKeyboard'
  ] );
};


/***/ }),

/***/ 552:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Alarms
https://developer.chrome.com/extensions/alarms
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/alarms */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.alarms || promiseSupport ) return ns.alarms;

  return bindAll({}, ns.alarms, {
    'objects': [ 'onAlarm' ],
    'methods': [ 'create' ],
    'promises': {
      '0': [ 'getAll', 'clearAll' ],
      '0-1': [ 'clear', 'get' ]
    }
  });
};


/***/ }),

/***/ 4584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Bookmarks
https://developer.chrome.com/extensions/bookmarks
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/bookmarks */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.bookmarks || promiseSupport ) return ns.bookmarks;

  return bindAll({}, ns.bookmarks, {
    'objects': [
      'onCreated', 'onRemoved', 'onChanged', 'onMoved',
      'onChildrenReordered', 'onImportBegan', 'onImportEnded'
    ],
    'promises': {
      '0': [ 'getTree' ],
      '1': [
        'create', 'get', 'getChildren', 'getRecent', 'getSubTree',
        'removeTree', 'search'
      ],
      '2': [ 'move', 'update' ]
    }
  });
};


/***/ }),

/***/ 2498:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** BrowserAction
https://developer.chrome.com/extensions/browserAction
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction */
const bindAll = __webpack_require__( 3878 );
const bindMethods = __webpack_require__( 9955 );
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );
const transform = __webpack_require__( 3933 );


module.exports = () => {
  if( !ns.browserAction ) return;

  let browserAction = bindAll({}, ns.browserAction, {
    'objects': [ 'onClicked' ],
    'methods': [
      'setTitle', 'setPopup', 'enable', 'disable'
    ]
  });
  if( !promiseSupport ) {
    bindPromiseReturn(
      browserAction, ns.browserAction, { '1': [ 'setIcon' ] }
    );
  }
  else {
    bindMethods( browserAction, ns.browserAction, [ 'setIcon' ] );
  }

  if( ns.browserAction.setBadgeText ) {
    browserAction.setBadgeText = details => {
      if( typeof details === 'number' || typeof details === 'string' ) {
        details = { 'text': String( details ) };
      }
      ns.browserAction.setBadgeText( details );
    };
    browserAction.removeBadgeText = () => {
      browserAction.setBadgeText( '' );
    };
  }
  if( ns.browserAction.setBadgeBackgroundColor ) {
    browserAction.setBadgeBackgroundColor = details => {
      if( typeof details === 'string' || Array.isArray( details ) ) {
        details = { 'color': details };
      }
      ns.browserAction.setBadgeBackgroundColor( details );
    };
  }

  // 0 arguments support
  return transform(
    [ 'getBadgeText', 'getTitle', 'getPopup', 'getBadgeBackgroundColor' ],
    ( carry, property ) => {
      if( !ns.browserAction[ property ] ) return;
      carry[ property ] = ( details = {}) => {
        if( typeof details === 'number' ) details = { 'tabId': details };

        return (
          !promiseSupport
            ? new Promise( resolve => {
              ns.browserAction[ property ]( details, resolve );
            })
            : ns.browserAction[ property ]( details )
        );
      };
    },
    browserAction
  );
};


/***/ }),

/***/ 7012:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** browserSettings (FF only)
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserSettings */
const ns = __webpack_require__( 1509 );


module.exports = () => ns.browserSettings;


/***/ }),

/***/ 2804:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** BrowsingData (complete)
https://developer.chrome.com/extensions/browsingData
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browsingData */
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.browsingData || promiseSupport ) return ns.browsingData;

  return bindPromiseReturn({}, ns.browsingData, {
    '0': [ 'settings' ],
    '1': [
      'removeAppcache', 'removeCache', 'removeCookies', 'removeDownloads',
      'removeFileSystems', 'removeFormData', 'removeHistory',
      'removeIndexedDB', 'removeLocalStorage', 'removePluginData',
      'removePasswords', 'removeWebSQL'
    ],
    '2': [ 'remove' ]
  });
};


/***/ }),

/***/ 6632:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** certificateProvider (Chrome only)
https://developer.chrome.com/extensions/certificateProvider */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.certificateProvider || promiseSupport ) return ns.certificateProvider;

  return bindAll({}, ns.certificateProvider, {
    'objects': [ 'onCertificatesRequested', 'onSignDigestRequested' ],
    'promises': {
      '1': [ 'requestPin', 'stopPinRequest' ]
    }
  });
};


/***/ }),

/***/ 4081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Commands
https://developer.chrome.com/extensions/commands
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/commands */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.commands || promiseSupport ) return ns.commands;

  return bindAll({}, ns.commands, {
    'objects': [ 'onCommand' ],
    'promises': { '0': [ 'getAll' ] }
  });
};


/***/ }),

/***/ 4704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** ContextMenus
https://developer.chrome.com/extensions/contextMenus
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/contextMenus */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.contextMenus || promiseSupport ) return ns.contextMenus;

  let contextMenus = {
    get 'ACTION_MENU_TOP_LEVEL_LIMIT'() {
      return ns.contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT;
    }
  };

  return bindAll( contextMenus, ns.contextMenus, {
    'objects': [ 'onClicked' ],
    'fullPromises': {
      '1': [ 'create', 'remove' ],
      '2': [ 'update' ]
    },
    'promises': {
      '0': [ 'removeAll' ]
    }
  });
};


/***/ }),

/***/ 7191:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** ContextualIdentities (FF only, complete)
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/contextualIdentities */
const bindMethods = __webpack_require__( 9955 );
const ns = __webpack_require__( 1509 );


module.exports = () => {
  if( !ns.contextualIdentities ) return;

  let contextualIdentities = bindMethods({}, ns.contextualIdentities, [
    'create', 'get', 'remove', 'update'
  ] );

  if( ns.contextualIdentities.query ) {
    contextualIdentities.query = details => {
      if( typeof details === 'string' ) details = { 'name': details };
      return ns.contextualIdentities.query( details );
    };
  }

  return contextualIdentities;
};


/***/ }),

/***/ 9439:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Cookies
https://developer.chrome.com/extensions/cookies
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/cookies */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.cookies || promiseSupport ) return ns.cookies;

  return bindAll({}, ns.cookies, {
    'objects': [ 'onChanged' ],
    'promises': {
      '0': [ 'getAllCookieStores' ],
      '1': [ 'get', 'getAll', 'set', 'remove' ]
    }
  });
};


/***/ }),

/***/ 8952:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** debugger (Chrome only)
https://developer.chrome.com/extensions/debugger */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.debugger || promiseSupport ) return ns.debugger;

  return bindAll({}, ns.debugger, {
    'objects': [ 'onDetach', 'onEvent' ],
    'promises': {
      '0': [ 'getTargets' ],
      '1': [ 'detach' ],
      '2': [ 'attach' ],
      '2-3': [ 'sendCommand' ]
    }
  });
};


/***/ }),

/***/ 9315:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** declarativeContent (Chrome only)
https://developer.chrome.com/extensions/declarativeContent */
const bindObjects = __webpack_require__( 3703 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.declarativeContent || promiseSupport ) return ns.declarativeContent;

  return bindObjects({}, ns.declarativeContent, [ 'onPageChanged' ] );
};


/***/ }),

/***/ 4464:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** desktopCapture (Chrome only)
https://developer.chrome.com/extensions/desktopCapture */
const bindAll = __webpack_require__( 3878 );
const Deferred = __webpack_require__( 6098 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


/** @function */
module.exports = () => {
  if( !ns.desktopCapture || promiseSupport ) return ns.desktopCapture;

  /** @type {Object} */
  let desktopCapture = bindAll({}, ns.desktopCapture, {
    'methods': [ 'cancelChooseDesktopMedia' ]
  });

  /**
  @method
  @return {Promise} */
  desktopCapture.chooseDesktopMedia = ( ...args ) => {
    let promise = Deferred();

    /** @type {Array} */
    let newArgs = ( () => {
      /** @type {integer} */
      let length = ( () => {
        let length = args.length > 1 ? args.length : 1;
        if( length > 2 ) length = 2;
        return length;
      })();

      return Array.apply( Array, Array( length ) ).map(
        ( x, index ) => args[ index ]
      );
    })();

    // Adding callback as last argument
    newArgs.push( ( streamId, options = {}) => {
      promise.resolve( Object.assign({}, options, { streamId }) );
    });

    /** @type {integer} */
    promise.desktopMediaRequestId =
      ns.desktopCapture.chooseDesktopMedia.apply( ns.desktopCapture, newArgs );

    return promise;
  };

  return desktopCapture;
};


/***/ }),

/***/ 2345:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ns = __webpack_require__( 1509 );

// APIs
const inspectedWindow = __webpack_require__( 9146 );
const network = __webpack_require__( 729 );
const panels = __webpack_require__( 8112 );


module.exports = () => {
  if( !ns.devtools ) return;

  return {
    'inspectedWindow': inspectedWindow(),
    'network': network(),
    'panels': panels()
  };
};


/***/ }),

/***/ 9146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** devtools.inspectedWindow
https://developer.chrome.com/extensions/devtools_inspectedWindow
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.inspectedWindow */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.devtools.inspectedWindow || promiseSupport ) return ns.devtools.inspectedWindow;

  let inspectedWindow = {
    get 'tabId'() { return ns.devtools.inspectedWindow.tabId; }
  };

  return bindAll( inspectedWindow, ns.devtools.inspectedWindow, {
    'objects': [ 'onResourceAdded', 'onResourceContentCommitted' ],
    'methods': [ 'reload' ],
    'promises': {
      '0': [ 'getResources' ],
      '1-2': [ 'eval' ]
    }
  });
};


/***/ }),

/***/ 729:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** devtools.network
https://developer.chrome.com/extensions/devtools_network
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.network */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.devtools.network || promiseSupport ) return ns.devtools.network;

  return bindAll({}, ns.devtools.network, {
    'objects': [ 'onNavigated', 'onRequestFinished' ],
    'promises': { '0': [ 'getHAR' ] }
  });
};


/***/ }),

/***/ 8112:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** devtools.panels
https://developer.chrome.com/extensions/devtools_panels
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/devtools.panels */
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.devtools.panels || promiseSupport ) return ns.devtools.panels;

  let panels = {
    get 'elements'() { return ns.devtools.panels.elements; },
    get 'sources'() { return ns.devtools.panels.sources; },
    get 'themeName'() { return ns.devtools.panels.themeName; }
  };

  return bindPromiseReturn( panels, ns.devtools.panels, {
    '0': [ 'setOpenResourceHandler' ],
    '2': [ 'openResource' ],
    '3': [ 'create' ]
  });
};


/***/ }),

/***/ 9398:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** documentScan (Chrome only)
https://developer.chrome.com/extensions/documentScan */
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.documentScan || promiseSupport ) return ns.documentScan;

  return bindPromiseReturn({}, ns.documentScan, {
    '1': [ 'documentScan' ]
  });
};


/***/ }),

/***/ 3341:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Downloads
https://developer.chrome.com/extensions/downloads
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/downloads */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.downloads || promiseSupport ) return ns.downloads;

  return bindAll({}, ns.downloads, {
    'objects': [
      'onCreated', 'onErased', 'onChanged', 'onDeterminingFilename'
    ],
    'methods': [
      'drag', 'open', 'setShelfEnabled', 'show', 'showDefaultFolder'
    ],
    'promises': {
      '1': [
        'acceptDanger', 'cancel', 'download', 'erase', 'pause',
        'removeFile', 'resume', 'search'
      ],
      '1-2': [ 'getFileIcon' ]
    }
  });
};


/***/ }),

/***/ 9749:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** enterprise.deviceAttributes (Chrome only)
https://developer.chrome.com/extensions/enterprise_deviceAttributes */
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.enterprise.deviceAttributes || promiseSupport ) {
    return ns.enterprise.deviceAttributes;
  }

  return bindPromiseReturn({}, ns.enterprise.deviceAttributes, {
    '0': [ 'getDirectoryDeviceId' ]
  });
};


/***/ }),

/***/ 6463:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ns = __webpack_require__( 1509 );

// APIs
const deviceAttributes = __webpack_require__( 9749 );
const platformKeys = __webpack_require__( 1043 );


module.exports = () => {
  if( !ns.enterprise ) return;

  return {
    'deviceAttributes': deviceAttributes(),
    'platformKeys': platformKeys()
  };
};


/***/ }),

/***/ 1043:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** enterprise.platformKeys (Chrome only)
https://developer.chrome.com/extensions/enterprise_platformKeys */
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.enterprise.platformKeys || promiseSupport ) {
    return ns.enterprise.platformKeys;
  }

  return bindPromiseReturn({}, ns.enterprise.platformKeys, {
    '0': [ 'getTokens' ],
    '1': [ 'getCertificates' ],
    '2': [ 'challengeUserKey', 'importCertificate', 'removeCertificate' ],
    '1-2': [ 'challengeMachineKey' ]
  });
};


/***/ }),

/***/ 2178:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Extension
https://developer.chrome.com/extensions/extension
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/extension */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.extension || promiseSupport ) return ns.extension;

  let extension = {
    get 'lastError'() {
      return ns.extension.lastError;
    },
    get 'inIncognitoContext'() {
      return ns.extension.inIncognitoContext;
    }
  };

  return bindAll( extension, ns.extension, {
    'methods': [ 'getViews', 'getBackgroundPage', 'getURL', 'setUpdateUrlData' ],
    'promises': {
      '0': [ 'isAllowedIncognitoAccess', 'isAllowedFileSchemeAccess' ]
    }
  });
};


/***/ }),

/***/ 4717:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** fileBrowserHandler (Chrome only)
https://developer.chrome.com/extensions/fileBrowserHandler */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.fileBrowserHandler || promiseSupport ) return ns.fileBrowserHandler;

  return bindAll({}, ns.fileBrowserHandler, {
    'objects': [ 'onExecute' ],
    'promises': { '1': [ 'selectFile' ] }
  });
};


/***/ }),

/***/ 7190:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** fileSystemProvider (Chrome only)
https://developer.chrome.com/extensions/fileSystemProvider */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.fileSystemProvider || promiseSupport ) return ns.fileSystemProvider;

  return bindAll({}, ns.fileSystemProvider, {
    'objects': [
      'onAbortRequested', 'onAddWatcherRequested', 'onCloseFileRequested',
      'onCreateDirectoryRequested', 'onCreateFileRequested',
      'onConfigureRequested', 'onCopyEntryRequested', 'onDeleteEntryRequested',
      'onExecuteActionRequested', 'onGetActionsRequested',
      'onGetMetadataRequested', 'onMountRequested', 'onMoveEntryRequested',
      'onOpenFileRequested', 'onReadDirectoryRequested', 'onReadFileRequested',
      'onRemoveWatcherRequested', 'onTruncateRequested', 'onUnmountRequested',
      'onWriteFileRequested'
    ],
    'promises': {
      '0': [ 'getAll' ],
      '1': [ 'get', 'mount', 'notify', 'unmount' ]
    }
  });
};


/***/ }),

/***/ 3265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Find (FF only)
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/find */
const ns = __webpack_require__( 1509 );


module.exports = () => ns.find;


/***/ }),

/***/ 2917:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** fontSettings (Chrome only)
https://developer.chrome.com/extensions/fontSettings */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.fontSettings || promiseSupport ) return ns.fontSettings;

  return bindAll({}, ns.fontSettings, {
    'objects': [
      'onDefaultFixedFontSizeChanged', 'onDefaultFontSizeChanged',
      'onFontChanged', 'onMinimumFontSizeChanged'
    ],
    'promises': {
      '0': [ 'getFontList' ],
      '1': [
        'clearFont', 'getFont', 'setDefaultFixedFontSize',
        'setDefaultFontSize', 'setMinimumFontSize', 'setFont'
      ],
      '0-1': [
        'clearDefaultFixedFontSize', 'clearDefaultFontSize',
        'clearMinimumFontSize', 'getDefaultFixedFontSize', 'getDefaultFontSize',
        'getMinimumFontSize'
      ]
    }
  });
};


/***/ }),

/***/ 2414:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** gcm (Chrome only)
https://developer.chrome.com/extensions/gcm */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.gcm || promiseSupport ) return ns.gcm;

  return bindAll({}, ns.gcm, {
    'methods': [ 'onMessage', 'onMessagesDeleted', 'onSendError' ],
    'promises': {
      '0': [ 'unregister' ],
      '1': [ 'register', 'send' ]
    }
  });
};


/***/ }),

/***/ 6319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** History
https://developer.chrome.com/extensions/history
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/history */
const bindMethods = __webpack_require__( 9955 );
const bindObjects = __webpack_require__( 3703 );
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );
const transform = __webpack_require__( 3933 );


module.exports = () => {
  if( !ns.history ) return;

  let history = bindObjects(
    {}, ns.history, [ 'onVisited', 'onVisitRemoved' ]
  );

  if( !promiseSupport ) {
    bindPromiseReturn( history, ns.history, {
      '0': [ 'deleteAll' ],
      '1': [ 'deleteRange', 'search' ]
    });
  }
  else {
    bindMethods( history, ns.history, [
      'deleteAll', 'deleteRange', 'search'
    ] );
  }

  // Support of url as argument
  return transform(
    [ 'addUrl', 'deleteUrl', 'getVisits' ],
    ( carry, property ) => {
      if( !ns.history[ property ] ) return;
      carry[ property ] = details => {
        if( typeof details === 'string' ) details = { 'url': details };

        return (
          !promiseSupport
            ? new Promise( resolve => {
              ns.history[ property ]( details, resolve );
            })
            : ns.history[ property ]( details )
        );
      };
    },
    history
  );
};


/***/ }),

/***/ 2582:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** i18n
https://developer.chrome.com/extensions/i18n
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/i18n */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.i18n || promiseSupport ) return ns.i18n;

  let i18n = bindAll({}, ns.i18n, {
    'methods': [ 'getMessage' ],
    'promises': {
      '0': [ 'getAcceptLanguages' ],
      '1': [ 'detectLanguage' ]
    }
  });

  /** @return {String} */
  i18n.getUILanguage = () => (
    ns.i18n.getUILanguage && ns.i18n.getUILanguage() ||
      navigator.language || navigator.userLanguage
  );

  return i18n;
};


/***/ }),

/***/ 6631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Identity
https://developer.chrome.com/extensions/identity
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/identity */
const bindAll = __webpack_require__( 3878 );
const bindMethods = __webpack_require__( 9955 );
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.identity ) return;

  let identity = bindAll({}, ns.identity, {
    'objects': [ 'onSignInChanged' ],
    'methods': [ 'getRedirectURL' ]
  });

  if( !promiseSupport ) {
    bindPromiseReturn( identity, ns.identity, {
      '0': [ 'getAccounts', 'getProfileUserInfo' ],
      '0-1': [ 'getAuthToken' ],
      '1': [ 'launchWebAuthFlow' ]
    });
  }
  else {
    bindMethods( identity, ns.identity, [
      'getAccounts', 'getProfileUserInfo', 'getAuthToken',
      'launchWebAuthFlow'
    ] );
  }

  if( ns.identity.removeCachedAuthToken ) {
    identity.removeCachedAuthToken = details => {
      if( typeof details === 'string' ) details = { 'token': details };

      return (
        !promiseSupport
          ? new Promise( resolve => {
            ns.identity.removeCachedAuthToken( details, resolve );
          })
          : ns.identity.removeCachedAuthToken( details )
      );
    };
  }

  return identity;
};


/***/ }),

/***/ 9002:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Idle (complete)
https://developer.chrome.com/extensions/idle
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/idle */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.idle || promiseSupport ) return ns.idle;

  return bindAll({}, ns.idle, {
    'objects': [ 'onStateChanged' ],
    'methods': [ 'setDetectionInterval' ],
    'promises': { '1': [ 'queryState' ] }
  });
};


/***/ }),

/***/ 5597:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** input.ime (Chrome only)
https://developer.chrome.com/extensions/input_ime */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.input || !ns.input.ime ) return;
  if( promiseSupport ) return ns.input.ime;

  return bindAll({}, ns.input.ime, {
    'objects': [
      'onActivate', 'onBlur', 'onCandidateClicked',
      'onCompositionBoundsChanged', 'onDeactivated', 'onFocus',
      'onInputContextUpdate', 'onKeyEvent', 'onMenuItemActivated',
      'onReset', 'onSurroundingTextChanged'
    ],
    'methods': [ 'hideInputView', 'keyEventHandled' ],
    'promises': {
      '0': [ 'activate', 'deactivate' ],
      '1': [
        'clearComposition', 'commitText', 'createWindow',
        'deleteSurroundingText', 'hideWindow', 'sendKeyEvents', 'setMenuItems',
        'setCandidates', 'setCandidateWindowProperties', 'setComposition',
        'setCursorPosition', 'showWindow', 'updateMenuItems'
      ]
    }
  });
};


/***/ }),

/***/ 8739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** instanceID (Chrome only)
https://developer.chrome.com/extensions/instanceID */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.instanceID || promiseSupport ) return ns.instanceID;

  return bindAll({}, ns.instanceID, {
    'objects': [ 'onTokenRefresh' ],
    'promises': {
      '0': [ 'deleteID', 'getCreationTime', 'getID' ],
      '1': [ 'deleteToken', 'getToken' ]
    }
  });
};


/***/ }),

/***/ 4524:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Management
https://developer.chrome.com/extensions/management
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/management */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.management || promiseSupport ) return ns.management;

  return bindAll({}, ns.management, {
    'objects': [
      'onInstalled', 'onUninstalled', 'onEnabled', 'onDisabled',
      'ExtensionInfo'
    ],
    'promises': {
      '0': [ 'getAll', 'getSelf' ],
      '1': [
        'get', 'getPermissionWarningsById',
        'getPermissionWarningsByManifest', 'uninstallSelf', 'launchApp',
        'createAppShortcut'
      ],
      '2': [ 'setEnabled', 'uninstall', 'setLaunchType', 'generateAppForLink' ]
    }
  });
};


/***/ }),

/***/ 4811:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** networking.config (Chrome only)
https://developer.chrome.com/extensions/networking_config */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.networking || !ns.networking.config ) return;
  if( promiseSupport ) return ns.networking.config;

  return bindAll({}, ns.networking.config, {
    'objects': [ 'onCaptivePortalDetected' ],
    'promises': {
      '1': [ 'setNetworkFilter' ],
      '2': [ 'finishAuthentication' ]
    }
  });
};


/***/ }),

/***/ 2457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Notifications (complete)
https://developer.chrome.com/extensions/notifications
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/notifications */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.notifications || promiseSupport ) return ns.notifications;

  return bindAll({}, ns.notifications, {
    'objects': [
      'onClosed', 'onClicked', 'onButtonClicked',
      'onPermissionLevelChanged', 'onShowSettings'
    ],
    'promises': {
      '0': [ 'getAll', 'getPermissionLevel' ],
      '1': [ 'clear' ],
      '1-2': [ 'create' ],
      '2': [ 'update' ]
    }
  });
};


/***/ }),

/***/ 17:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Omnibox (no async methods)
https://developer.chrome.com/extensions/omnibox
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/omnibox */
const ns = __webpack_require__( 1509 );


module.exports = () => ns.omnibox;


/***/ }),

/***/ 8218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** PageAction
https://developer.chrome.com/extensions/pageAction
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/pageAction */
const bindAll = __webpack_require__( 3878 );
const bindMethods = __webpack_require__( 9955 );
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );
const transform = __webpack_require__( 3933 );


module.exports = () => {
  if( !ns.pageAction ) return;

  let pageAction = bindAll({}, ns.pageAction, {
    'objects': [ 'onClicked' ],
    'methods': [ 'hide', 'show', 'setTitle', 'setPopup' ]
  });

  if( !promiseSupport ) {
    bindPromiseReturn(
      pageAction, ns.pageAction, { '1': [ 'setIcon' ] }
    );
  }
  else {
    bindMethods( pageAction, ns.pageAction, [ 'setIcon' ] );
  }

  // tabId without object
  return transform(
    [ 'getTitle', 'getPopup' ],
    ( carry, property ) => {
      if( !ns.pageAction[ property ] ) return;

      carry[ property ] = details => {
        if( typeof details === 'number' ) details = { 'tabId': details };

        return (
          !promiseSupport
            ? new Promise( resolve => {
              ns.pageAction[ property ]( details, resolve );
            })
            : ns.pageAction[ property ]( details )
        );
      };
    },
    pageAction
  );
};


/***/ }),

/***/ 4683:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** pageCapture (Chrome only)
https://developer.chrome.com/extensions/pageCapture */
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.pageCapture || promiseSupport ) return ns.pageCapture;

  return bindPromiseReturn({}, ns.pageCapture, {
    '1': [ 'saveAsMHTML' ]
  });
};


/***/ }),

/***/ 5921:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Permissions
https://developer.chrome.com/extensions/permissions // F55+
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/permissions */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


/**
@function
@param {Browser} */
module.exports = Browser => {
  if( !ns.permissions || promiseSupport ) return ns.permissions;

  let permissions = bindAll({}, ns.permissions, {
    'objects': [ 'onAdded', 'onRemoved' ],
    'promises': {
      '0': [ 'getAll' ],
      '1': [ 'contains', 'remove' ]
    }
  });

  /**
  @method
  @param {Object<Array<String>>} permissions - https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/permissions/Permissions
  @return {Promise} */
  permissions.request = permissions => {
    /** @type {(Array<String>|null)} */
    let apis = permissions.permissions || null;

    return new Promise( ( resolve, reject ) => {
      ns.permissions.request( permissions, allowed => {
        if( ns.runtime.lastError ) { // Error case
          reject( ns.runtime.lastError ); return;
        }

        if( allowed ) apis.forEach( api => { Browser.resetAPI( api ); });

        resolve( allowed );
      });
    });
  };

  return permissions;
};


/***/ }),

/***/ 7492:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** platformKeys (Chrome only)
https://developer.chrome.com/extensions/platformKeys */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.platformKeys || promiseSupport ) return ns.platformKeys;

  return bindAll({}, ns.platformKeys, {
    'methods': [ 'subtleCrypto' ],
    'promises': {
      '1': [ 'selectClientCertificates', 'verifyTLSServerCertificate' ],
      '2': [ 'getKeyPair' ]
    }
  });
};


/***/ }),

/***/ 4800:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** power (Chrome only)
https://developer.chrome.com/extensions/power */
const bindMethods = __webpack_require__( 9955 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.power || promiseSupport ) return ns.power;

  return bindMethods({}, ns.power, [ 'releaseKeepAwake', 'requestKeepAwake' ] );
};


/***/ }),

/***/ 9961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** printerProvider (Chrome only)
https://developer.chrome.com/extensions/printerProvider */
const bindObjects = __webpack_require__( 3703 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.printerProvider || promiseSupport ) return ns.printerProvider;

  return bindObjects({}, ns.printerProvider, [
    'onGetCapabilityRequested',
    'onGetPrintersRequested',
    'onGetUsbPrinterInfoRequested',
    'onPrintRequested'
  ] );
};


/***/ }),

/***/ 4802:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Privacy
https://developer.chrome.com/extensions/privacy
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/privacy */
const bindBrowserSettings = __webpack_require__( 6176 );
const buildBrowserSetting = __webpack_require__( 3217 );
const ns = __webpack_require__( 1509 );
const transform = __webpack_require__( 3933 );


module.exports = () => {
  let privacy = {};
  if( !ns.privacy ) return ns.privacy;

  transform(
    [ 'IPHandlingPolicy', 'services', 'websites' ],
    ( carry, property ) => {
      carry[ property ] = ns.privacy[ property ];
    },
    privacy
  );

  // FF54+, chrome
  if( ns.privacy.network ) {
    // BrowserSettings
    let network = bindBrowserSettings({}, ns.privacy.network, [
      'networkPredictionEnabled',
      'peerConnectionEnabled' // FF only feature
    ] );

    // WebRTC
    if( ns.privacy.network.webRTCIPHandlingPolicy ) {
      network.webRTCIPHandlingPolicy = buildBrowserSetting(
        ns.privacy.network.webRTCIPHandlingPolicy
      );
    }
    // Deprecated features will be only if new version is not available
    else if( ns.privacy.network.webRTCNonProxiedUdpEnabled || ns.privacy.network.webRTCMultipleRoutesEnabled ) {
      bindBrowserSettings( network, ns.privacy.network, [
        'webRTCNonProxiedUdpEnabled', 'webRTCMultipleRoutesEnabled'
      ] );
    }

    privacy.network = network;
  }

  // FF54+, chrome
  if( ns.privacy.websites ) {
    let websites = bindBrowserSettings({}, ns.privacy.websites, [
      'hyperlinkAuditingEnabled', // FF54 + chrome
      'thirdPartyCookiesAllowed', // other only Chrome
      'referrersEnabled',
      'protectedContentEnabled'
    ] );

    privacy.websites = websites;
  }

  if( ns.privacy.services ) { // Chrome only
    let services = bindBrowserSettings({}, ns.privacy.services, [
      'alternateErrorPagesEnabled',
      'autofillEnabled',
      'hotwordSearchEnabled',
      'passwordSavingEnabled',
      'safeBrowsingEnabled',
      'safeBrowsingExtendedReportingEnabled',
      'searchSuggestEnabled',
      'spellingServiceEnabled',
      'translationServiceEnabled'
    ] );

    privacy.services = services;
  }

  return privacy;
};


/***/ }),

/***/ 4825:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Proxy
https://developer.chrome.com/extensions/proxy
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/proxy */
const bindAll = __webpack_require__( 3878 );
const promiseSupport = __webpack_require__( 2814 );
const ns = __webpack_require__( 1509 );


module.exports = () => {
  if( typeof ns.proxy !== 'object' ) return ns.proxy;

  // FF
  if( promiseSupport ) {
    return bindAll({
      'onError': ns.proxy.onError || ns.proxy.onProxyError
    }, ns.proxy, {
      'methods': [ 'register', 'registerProxyScript', 'unregister' ],
      'objects': [ 'onProxyError', 'onRequest', 'settings' ]
    });
  }
  
  // Chrome
  return bindAll({
    'onError': ns.proxy.onError || ns.proxy.onProxyError
  }, ns.proxy, {
    'objects': [ 'onProxyError' ],
    'browserSettings': [ 'settings' ]
  });
};


/***/ }),

/***/ 3446:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Runtime
https://developer.chrome.com/extensions/runtime
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.runtime || promiseSupport ) return ns.runtime;

  let runtime = {
    get 'lastError'() { return ns.runtime.lastError; }
  };

  bindAll( runtime, ns.runtime, {
    'objects': [
      'id', 'onStartup', 'onInstalled', 'onSuspend', 'onSuspendCanceled',
      'onUpdateAvailable', 'onConnect', 'onConnectExternal',
      'onMessageExternal'
    ],
    'methods': [
      'getManifest', 'getURL', 'reload', 'restart', 'connect',
      'connectNative'
    ],
    'promises': {
      '0': [
        'openOptionsPage', 'requestUpdateCheck', 'getPlatformInfo',
        'getPackageDirectoryEntry'
      ],
      '1': [ 'setUninstallURL', 'restartAfterDelay' ],
      '2': [ 'sendNativeMessage' ],
      '1-3': [ 'sendMessage' ]
    }
  });

  if( ns.runtime.onRestartRequired || ns.runtime.onBrowserUpdateAvailable ) {
    runtime.onRestartRequired =
      ns.runtime.onRestartRequired || ns.runtime.onBrowserUpdateAvailable;
  }

  runtime.onMessage = {};
  {
    /** @type {Array<Object>} */
    let listeners = [];
    runtime.onMessage.addListener = callback => {
      let listener = ( message, sender, reply ) => {
        let returnValue = callback( message, sender, reply );
        if( returnValue instanceof Promise ) {
          returnValue.then( arg => { reply( arg ); });
        }
        return true;
        // Chrome: If you want to asynchronously use sendResponse, add return true;
        // to the onMessage event handler.
        // FF: The listener function can return either a Boolean or a Promise.
      };
      ns.runtime.onMessage.addListener( listener );
      listeners.push({ 'original': callback, 'modified': listener });
    };

    runtime.onMessage.hasListener = callback => Boolean(
      listeners.find( ({ original }) => original === callback )
    );

    runtime.onMessage.removeListener = callback => {
      /** @type {Array<Object>} */
      let removed = listeners.filter( ({ original }) => original === callback );
      if( !removed.length ) return;

      listeners = listeners.filter( ({ original }) => original !== callback );
      removed.forEach( ({ modified }) => {
        ns.runtime.onMessage.removeListener( modified );
      });
    };
  }

  runtime.getBackgroundPage = () => {
    let returnValue;
    let returnPromise = new Promise( resolve => {
      returnValue = ns.runtime.getBackgroundPage( bgPage => {
        resolve( bgPage );
      });
    });

    return returnValue || returnPromise;
  };

  return runtime;
};


/***/ }),

/***/ 3031:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Sessions (complete)
https://developer.chrome.com/extensions/sessions
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/sessions */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.sessions || promiseSupport ) return ns.sessions;

  let sessions = {
    get 'MAX_SESSION_RESULTS'() { return ns.sessions.MAX_SESSION_RESULTS; }
  };

  return bindAll( sessions, ns.sessions, {
    'objects': [ 'onChanged' ],
    'promises': { '0-1': [ 'getDevices', 'getRecentlyClosed', 'restore' ] }
  });
};


/***/ }),

/***/ 8470:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** SidebarAction (FF only)
https://developer.mozilla.org/ru/Add-ons/WebExtensions/API/sidebarAction */
const bindMethods = __webpack_require__( 9955 );
const ns = __webpack_require__( 1509 );
const transform = __webpack_require__( 3933 );


module.exports = () => {
  if( !ns.sidebarAction ) return;

  let sidebarAction = bindMethods({}, ns.sidebarAction, [
    'setPanel', 'setTitle', 'setIcon'
  ] );

  // 0 arguments support
  return transform(
    [ 'getPanel', 'getTitle' ],
    ( carry, property ) => {
      if( !ns.sidebarAction[ property ] ) return;
      carry[ property ] = ( details = {}) => {
        if( typeof details === 'number' ) details = { 'tabId': details };
        return ns.sidebarAction[ property ]( details );
      };
    },
    sidebarAction
  );
};


/***/ }),

/***/ 4840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Storage
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/storage
https://developer.chrome.com/extensions/storage */
const bindObjects = __webpack_require__( 3703 );
const bindFullPromiseReturn = __webpack_require__( 1871 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );
const transform = __webpack_require__( 3933 );


module.exports = () => {
  if( !ns.storage || promiseSupport ) return ns.storage;

  let storage = bindObjects({}, ns.storage, [ 'onChanged' ] );

  return transform(
    [ 'sync', 'local', 'managed' ],
    ( carry, property ) => {
      if( !ns.storage[ property ] ) return;
      carry[ property ] = bindFullPromiseReturn({}, ns.storage[ property ], {
        '0': [ 'clear' ],
        '1': [ 'remove', 'set', 'get', 'getBytesInUse' ]
      });
    },
    storage
  );
};


/***/ }),

/***/ 9594:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** system.cpu (Chrome only)
https://developer.chrome.com/extensions/system_cpu */
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.system.cpu || promiseSupport ) return ns.system.cpu;

  return bindPromiseReturn({}, ns.system.cpu, { '0': [ 'getInfo' ] });
};


/***/ }),

/***/ 6842:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ns = __webpack_require__( 1509 );

// APIs
const cpu = __webpack_require__( 9594 );
const memory = __webpack_require__( 9481 );
const storage = __webpack_require__( 5221 );


module.exports = () => {
  if( !ns.system ) return;

  return {
    'cpu': cpu(),
    'memory': memory(),
    'storage': storage()
  };
};


/***/ }),

/***/ 9481:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** system.memory (Chrome only)
https://developer.chrome.com/extensions/system_memory */
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.system.memory || promiseSupport ) return ns.system.memory;

  return bindPromiseReturn({}, ns.system.memory, { '0': [ 'getInfo' ] });
};


/***/ }),

/***/ 5221:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** system.storage (Chrome only)
https://developer.chrome.com/extensions/system_storage */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.system.storage || promiseSupport ) return ns.system.storage;

  return bindAll({}, ns.system.storage, {
    'objects': [ 'onAttached', 'onDetached' ],
    'promises': {
      '0': [ 'getInfo' ],
      '1': [ 'ejectDevice', 'getAvailableCapacity' ]
    }
  });
};


/***/ }),

/***/ 3062:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** tabCapture (Chrome only)
https://developer.chrome.com/extensions/tabCapture */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.tabCapture || promiseSupport ) return ns.tabCapture;

  return bindAll({}, ns.tabCapture, {
    'objects': [ 'onStatusChanged' ],
    'promises': {
      '0': [ 'getCapturedTabs' ],
      '1': [ 'capture' ],
      '2': [ 'captureOffscreenTab' ]
    }
  });
};


/***/ }),

/***/ 6132:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Tabs
https://developer.chrome.com/extensions/tabs
https://developer.mozilla.org/ru/Add-ons/WebExtensions/API/tabs */
const bindAll = __webpack_require__( 3878 );
const bindFullPromiseReturn = __webpack_require__( 1871 );
const bindMethods = __webpack_require__( 9955 );
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.tabs ) return;

  let tabs = bindAll({}, ns.tabs, {
    'objects': [
      'onCreated', 'onUpdated', 'onMoved', 'onSelectionChanged',
      'onActiveChanged', 'onActivated', 'onHighlightChanged',
      'onHighlighted', 'onDetached', 'onAttached', 'onRemoved',
      'onReplaced', 'onZoomChange', 'TAB_ID_NONE'
    ],
    'methods': [ 'connect' ]
  });

  if( !promiseSupport ) {
    bindPromiseReturn( tabs, ns.tabs, {
      '0': [ 'getCurrent' ],
      '1': [
        'duplicate', 'highlight', 'remove', 'detectLanguage',
        'getZoom', 'discard'
      ],
      '2': [
        'update', 'move', 'captureVisibleTab',
        'executeScript', 'insertCSS', 'setZoom', 'setZoomSettings'
      ],
      '2-3': [ 'sendMessage' ] // 3 only = require(Chrome 41+
    });
    bindFullPromiseReturn( tabs, ns.tabs, {
      '1': [ 'get' ]
    });
  }
  else {
    bindMethods( tabs, ns.tabs, [
      'getCurrent', 'get', 'duplicate', 'highlight',
      'remove', 'detectLanguage', 'getZoom', 'discard', 'update', 'move',
      'captureVisibleTab', 'executeScript', 'insertCSS', 'setZoom',
      'setZoomSettings', 'sendMessage'
    ] );
  }

  if( ns.tabs.create ) {
    tabs.create = createProperties => {
      if( typeof createProperties === 'string' ) {
        createProperties = { 'url': createProperties };
      }

      return (
        !promiseSupport
          ? new Promise( resolve => {
            ns.tabs.create( createProperties, resolve );
          })
          : ns.tabs.create( createProperties )
      );
    };
  }

  if( ns.tabs.query ) {
    // 0 arguments support
    tabs.query = ( queryInfo = {}) => (
      !promiseSupport
        ? new Promise( resolve => { ns.tabs.query( queryInfo, resolve ); })
        : ns.tabs.query( queryInfo )
    );
  }

  if( ns.tabs.reload ) {
    /** @type {function} */
    let reload = !promiseSupport
      ? bindFullPromiseReturn({}, ns.tabs, { '0-2': [ 'reload' ] }).reload
      : ns.tabs.reload.bind( ns.tabs );

    tabs.reload = ( ...args ) => {
      let tabs, reloadProperties;

      if( args.length === 2 ) {
        [ tabs, reloadProperties ] = args;
      }
      else if( args.length === 1 ) {
        let [ arg ] = args;
        if( typeof arg === 'boolean' ) {
          reloadProperties = arg;
        }
        else if( typeof arg === 'number' ) {
          tabs = arg;
        }
        else if( Array.isArray( arg ) ) {
          tabs = arg;
        }
        else if( arg && typeof arg === 'object' ) {
          reloadProperties = arg;
        }
      }
      if( tabs !== undefined && !Array.isArray( tabs ) ) {
        tabs = [ tabs ];
      }
      if( typeof reloadProperties === 'boolean' ) {
        reloadProperties = { 'bypassCache': reloadProperties };
      }

      if( tabs ) {
        return Promise.all( tabs.map( id => {
          let reloadArgs = [ id ];
          if( reloadProperties ) reloadArgs.push( reloadProperties );

          return reload.apply({}, reloadArgs );
        }) );
      }
      else {
        args = [];
        if( reloadProperties ) args.push( reloadProperties );
        return reload.apply({}, args );
      }
    };
  }

  return tabs;
};


/***/ }),

/***/ 8475:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Theme (FF only)
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/theme */
const ns = __webpack_require__( 1509 );


module.exports = () => ns.theme;


/***/ }),

/***/ 3698:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** TopSites
https://developer.chrome.com/extensions/topSites
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/topSites */
const bindPromiseReturn = __webpack_require__( 5145 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.topSites || promiseSupport ) return ns.topSites;

  return bindPromiseReturn({}, ns.topSites, { '0': [ 'get' ] });
};


/***/ }),

/***/ 1166:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** tts (Chrome only)
https://developer.chrome.com/extensions/tts */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.tts || promiseSupport ) return ns.tts;

  return bindAll({}, ns.tts, {
    'methods': [ 'pause', 'resume', 'stop' ],
    'promises': {
      '0': [ 'getVoices', 'isSpeaking' ],
      '1-2': [ 'speak' ]
    }
  });
};


/***/ }),

/***/ 1545:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** ttsEngine (Chrome only)
https://developer.chrome.com/extensions/ttsEngine */
const bindObjects = __webpack_require__( 3703 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.ttsEngine || promiseSupport ) return ns.ttsEngine;

  return bindObjects(
    {}, ns.ttsEngine, [ 'onPause', 'onResume', 'onSpeak', 'onStop' ]
  );
};


/***/ }),

/***/ 1259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** vpnProvider (Chrome only)
https://developer.chrome.com/extensions/vpnProvider */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.vpnProvider || promiseSupport ) return ns.vpnProvider;

  return bindAll({}, ns.vpnProvider, {
    'objects': [
      'onConfigCreated', 'onConfigRemoved', 'onPacketReceived',
      'onPlatformMessage', 'onUIEvent'
    ],
    'promises': {
      '1': [
        'createConfig', 'destroyConfig', 'notifyConnectionStateChanged',
        'sendPacket', 'setParameters'
      ]
    }
  });
};


/***/ }),

/***/ 4061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** WebNavigation
https://developer.chrome.com/extensions/webNavigation
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/webNavigation */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.webNavigation || promiseSupport ) return ns.webNavigation;

  let webNavigation = {};

  bindAll( webNavigation, ns.webNavigation, {
    'objects': [
      'onBeforeNavigate', 'onCommitted', 'onDOMContentLoaded',
      'onCompleted', 'onErrorOccurred', 'onCreatedNavigationTarget',
      'onReferenceFragmentUpdated', 'onTabReplaced',
      'onHistoryStateUpdated'
    ],
    'promises': {
      '1': [ 'getFrame', 'getAllFrames' ]
    }
  });

  return webNavigation;
};


/***/ }),

/***/ 5431:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const bindMethods = __webpack_require__( 9955 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


/**
@param {Object} webRequest
@param {String} property
@return {undefined} */
let bindStandardFilter = ( webRequest, property ) => {
  if( !ns.webRequest[ property ] ) return;

  /** @type {Object} */
  let apiPart = bindMethods(
    {},
    ns.webRequest[ property ],
    [ 'hasListener', 'removeListener' ]
  );

  apiPart.addListener = ( ...args ) => {
    if( typeof args[ 1 ] === 'string' ) args[ 1 ] = { 'urls': [ args[ 1 ] ] };
    else if( Array.isArray( args[ 1 ] ) ) args[ 1 ] = { 'urls': args[ 1 ] };

    if( typeof args[ 2 ] === 'string' ) args[ 2 ] = [ args[ 2 ] ];

    return ns.webRequest[ property ].addListener.apply(
      ns.webRequest[ property ], args
    );
  };

  webRequest[ property ] = apiPart;
};


module.exports = () => {
  if( !ns.webRequest ) return;

  let webRequest = {};

  if( ns.webRequest.onAuthRequired ) {
    let listeners = [];
    webRequest.onAuthRequired = {
      'addListener': ( ...args ) => {
        // Arguments
        if( typeof args[ 1 ] === 'string' ) {
          args[ 1 ] = { 'urls': [ args[ 1 ] ] };
        }
        else if( Array.isArray( args[ 1 ] ) ) {
          args[ 1 ] = { 'urls': args[ 1 ] };
        }

        if( args.length === 3 && typeof args[ 2 ] === 'string' ) {
          args[ 2 ] = [ args[ 2 ] ];
        }

        let original = args[ 0 ];
        let asyncBlocking =
          args.length === 3 && args[ 2 ].includes( 'asyncBlocking' );

        /** To handle the request asynchronously, include "blocking"
        in the extraInfoSpec parameter (3rd argument) and return a Promise that is resolved with
        a BlockingResponse object, with its cancel or its authCredentials
        properties set. */

        // FF change asyncBlocking -> blocking
        if( asyncBlocking && promiseSupport ) {
          args[ 2 ] = args[ 2 ].map(
            item => item === 'asyncBlocking' ? 'blocking' : item
          );
        }

        // Chrome - use callback for promises
        let modified = original;
        if( asyncBlocking && !promiseSupport ) {
          let callback = args[ 0 ];
          let chromeCallback = ( details, asyncCallback ) => {
            callback( details ).then( asyncCallback );
          };
          args[ 0 ] = modified = chromeCallback;
        }
        listeners.push({ original, modified });

        return ns.webRequest.onAuthRequired.addListener.apply(
          ns.webRequest.onAuthRequired, args
        );
      },
      'hasListener': callback => Boolean(
        listeners.find( ({ original }) => original === callback )
      ),
      'removeListener': callback => {
        /** @type {Array<Object>} */
        let list = listeners.filter( ({ original }) => original === callback );
        listeners = listeners.filter( ({ original }) => original !== callback );

        list.forEach( ({ modified }) => {
          ns.webRequest.onAuthRequired.removeListener( modified );
        });
      }
    };
  }

  [
    'onBeforeRedirect', 'onBeforeRequest', 'onBeforeSendHeaders',
    'onCompleted', 'onErrorOccurred', 'onHeadersReceived', 'onResponseStarted',
    'onSendHeaders'
  ].forEach( property => { bindStandardFilter( webRequest, property ); });

  return webRequest;
};


/***/ }),

/***/ 225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Web store (Chrome only)
https://developer.chrome.com/extensions/webstore */
const bindObjects = __webpack_require__( 3703 );
const ns = __webpack_require__( 1509 );


module.exports = () => {
  if( !ns.webstore ) return ns.webstore;

  let webstore = bindObjects(
    {}, ns.webstore, [ 'onDownloadProgress', 'onInstallStageChanged' ]
  );

  if( ns.webstore.install ) {
    /**
    @param {String} [url]
    @return {Promise} */
    webstore.install = url => new Promise( ( resolve, reject ) => {
      let args = [];
      if( url ) args.push( url );
      args.push( resolve );
      args.push( ( error, errorCode ) => { reject( new Error( error ) ); });

      ns.webstore.install.apply( ns.webstore, args );
    });
  }

  return webstore;
};


/***/ }),

/***/ 1679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Windows
https://developer.chrome.com/extensions/windows
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/windows */
const bindAll = __webpack_require__( 3878 );
const ns = __webpack_require__( 1509 );
const promiseSupport = __webpack_require__( 2814 );


module.exports = () => {
  if( !ns.windows || promiseSupport ) return ns.windows;

  let windows = {
    get 'WINDOW_ID_NONE'() { return ns.windows.WINDOW_ID_NONE; },
    get 'WINDOW_ID_CURRENT'() { return ns.windows.WINDOW_ID_CURRENT; }
  };

  return bindAll( windows, ns.windows, {
    'objects': [ 'onCreated', 'onRemoved', 'onFocusChanged' ],
    'promises': {
      '1': [ 'remove' ],
      '2': [ 'update' ],
      '0-1': [ 'getCurrent', 'getLastFocused', 'getAll', 'create' ],
      '1-2': [ 'get' ]
    }
  });
};


/***/ }),

/***/ 3878:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const bindBrowserSettings = __webpack_require__( 6176 );
const bindFullPromiseReturn = __webpack_require__( 1871 );
const bindMethods = __webpack_require__( 9955 );
const bindObjects = __webpack_require__( 3703 );
const bindPromiseReturn = __webpack_require__( 5145 );


/** Bind objects, methods, promise return
@param {object} object
@param {object} browserObject
@param {object} properties
@param {array<string>} [properties.objects]
@param {array<string>} [properties.browserSettings]
@param {array} [properties.methods]
@param {object<array>} [properties.promises]
@return {object} same object */
module.exports = ( object, browserObject, properties ) => {
  if( properties.objects ) {
    bindObjects( object, browserObject, properties.objects );
  }
  if( properties.browserSettings ) {
    bindBrowserSettings( object, browserObject, properties.browserSettings );
  }
  if( properties.fullPromises ) {
    bindFullPromiseReturn( object, browserObject, properties.fullPromises );
  }
  if( properties.methods ) {
    bindMethods( object, browserObject, properties.methods );
  }
  if( properties.promises ) {
    bindPromiseReturn( object, browserObject, properties.promises );
  }

  return object;
};


/***/ }),

/***/ 6176:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const buildBrowserSetting = __webpack_require__( 3217 );
const transform = __webpack_require__( 3933 );


/** Bind BrowserSetting objects
@param {Object} object
@param {Object} browserObject
@param {Array<String>} properties
@return {Object} same object */
module.exports = ( object, browserObject, properties ) => transform(
  properties,
  ( carry, property ) => {
    if( !browserObject[ property ] ) return;
    carry[ property ] = buildBrowserSetting( browserObject[ property ] );
  },
  object
);


/***/ }),

/***/ 1871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ns = __webpack_require__( 1509 );
const transform = __webpack_require__( 3933 );


/** Modifies object for typical case of promise return binding
@param {Object} object
@param {Object} browserObject
@param {Object<Array>} properties - NOTE number of agruments does not count callback
@return {Object} same object */
module.exports = ( object, browserObject, properties ) => {
  if( Array.isArray( properties ) ) properties = { '1': properties };

  Object.keys( properties ).forEach( argsCount => {
    /** @type {Array<String>} */
    let list = properties[ argsCount ];

    /** @type {(integer|Array<integer>)} */
    argsCount = !/\-/.test( argsCount )
      ? Number( argsCount )
      : argsCount.split( '-' ).map( item => Number( item ) );

    transform(
      list,
      ( carry, property ) => {
        if( !browserObject[ property ] ) return;
        carry[ property ] = ( ...args ) => new Promise( ( resolve, reject ) => {
          let newArgs = ( () => {
            /** @type {integer} */
            let length = ( () => {
              if( typeof argsCount === 'number' ) return argsCount;

              let length = argsCount[ 0 ];
              if( args.length > length ) length = args.length;
              if( length > argsCount[ 1 ] ) length = argsCount[ 1 ];
              return length;
            })();

            return Array.apply( Array, Array( length ) ).map(
              ( x, index ) => args[ index ]
            );
          })();

          // Adding callback as last argument
          newArgs.push( firstArg => {
            if( ns.runtime.lastError ) {
              reject( ns.runtime.lastError ); return;
            }

            if( firstArg === undefined ) resolve();
            else resolve( firstArg );
          });

          browserObject[ property ].apply( browserObject, newArgs );
        });
      },
      object
    );
  });

  return object;
};


/***/ }),

/***/ 9955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const transform = __webpack_require__( 3933 );


/** Bind methods
@param {Object} object
@param {Object} browserObject
@param {Array<String>} properties
@return {Object} same object */
module.exports = ( object, browserObject, properties ) => transform(
  properties,
  ( carry, property ) => {
    if( !browserObject[ property ] ) return;
    carry[ property ] = browserObject[ property ].bind( browserObject );
  },
  object
);


/***/ }),

/***/ 3703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const transform = __webpack_require__( 3933 );


/** Copy links to objects
@param {Object} object
@param {Object} browserObject
@param {Array<String>} properties
@return {Object} same object */
module.exports = ( object, browserObject, properties ) => transform(
  properties,
  ( carry, property ) => {
    if( !browserObject[ property ] ) return;
    carry[ property ] = browserObject[ property ];
  },
  object
);


/***/ }),

/***/ 5145:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const transform = __webpack_require__( 3933 );


/** Modifies object for typical case of promise return binding
@param {Object} object
@param {Object} browserObject
@param {Object<Array>} properties - NOTE number of agruments does not count callback
@return {Object} same object */
module.exports = ( object, browserObject, properties ) => {
  if( Array.isArray( properties ) ) properties = { '1': properties };

  Object.keys( properties ).forEach( argsCount => {
    /** @type {Array<String>} */
    let list = properties[ argsCount ];

    /** @type {(integer|Array<integer>)} */
    argsCount = !/\-/.test( argsCount )
      ? Number( argsCount )
      : argsCount.split( '-' ).map( item => Number( item ) );

    transform(
      list,
      ( carry, property ) => {
        if( !browserObject[ property ] ) return;
        carry[ property ] = ( ...args ) => new Promise( resolve => {
          let newArgs = ( () => {
            /** @type {integer} */
            let length = ( () => {
              if( typeof argsCount === 'number' ) return argsCount;

              let length = argsCount[ 0 ];
              if( args.length > length ) length = args.length;
              if( length > argsCount[ 1 ] ) length = argsCount[ 1 ];
              return length;
            })();

            return Array.apply( Array, Array( length ) ).map(
              ( x, index ) => args[ index ]
            );
          })();

          // Adding callback as last argument
          newArgs.push( firstArg => {
            if( firstArg === undefined ) resolve();
            else resolve( firstArg );
          });

          browserObject[ property ].apply( browserObject, newArgs );
        });
      },
      object
    );
  });

  return object;
};


/***/ }),

/***/ 4351:
/***/ ((module) => {

/** @type {String} */
module.exports = ( () => {
  if( typeof browser === 'undefined' ) return 'chrome';
  return 'webkitAppearance' in CSSStyleDeclaration.prototype ? 'edge' : 'firefox';
})();


/***/ }),

/***/ 3217:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const bindMethods = __webpack_require__( 9955 );
const bindPromiseReturn = __webpack_require__( 5145 );
const promiseSupport = __webpack_require__( 2814 );
const transform = __webpack_require__( 3933 );


/** Create BrowserSetting object with promise-based return
@param {Object} browserObject
@return {Object} */
module.exports = browserObject => {
  if( !browserObject ) return undefined;

  let returnObject = {};

  if( !promiseSupport ) {
    bindPromiseReturn( returnObject, browserObject, { '1': [ 'set' ] });
  }
  else bindMethods( returnObject, browserObject, [ 'set' ] );

  transform(
    [ 'get', 'clear' ],
    ( carry, property ) => {
      // Support of 0 arguments
      carry[ property ] = ( arg = {}) => (
        !promiseSupport
          ? new Promise( resolve => {
            browserObject[ property ]( arg, firstArg => {
              if( firstArg === undefined ) resolve( true );
              else resolve( firstArg );
            });
          })
          : browserObject[ property ]( arg )
      );
    },
    returnObject
  );

  if( browserObject.onChange ) returnObject.onChange = browserObject.onChange;

  return returnObject;
};


/***/ }),

/***/ 3552:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Mechanism to create similar output for both firefox anf chrome for browser|chrome */

// APIs
const accessibilityFeatures = __webpack_require__( 7426 );
const alarms = __webpack_require__( 552 );
const bookmarks = __webpack_require__( 4584 );
const browserAction = __webpack_require__( 2498 );
const browserSettings = __webpack_require__( 7012 );
const browsingData = __webpack_require__( 2804 );
const certificateProvider = __webpack_require__( 6632 );
const commands = __webpack_require__( 4081 );
const contextMenus = __webpack_require__( 4704 );
const contextualIdentities = __webpack_require__( 7191 );
const cookies = __webpack_require__( 9439 );
const declarativeContent = __webpack_require__( 9315 );
const debuggerFunction = __webpack_require__( 8952 );
const desktopCapture = __webpack_require__( 4464 );
const devtools = __webpack_require__( 2345 );
const documentScan = __webpack_require__( 9398 );
const downloads = __webpack_require__( 3341 );
const enterprise = __webpack_require__( 6463 );
const extension = __webpack_require__( 2178 );
const fileBrowserHandler = __webpack_require__( 4717 );
const fileSystemProvider = __webpack_require__( 7190 );
const find = __webpack_require__( 3265 );
const fontSettings = __webpack_require__( 2917 );
const gcm = __webpack_require__( 2414 );
const history = __webpack_require__( 6319 );
const identity = __webpack_require__( 6631 );
const idle = __webpack_require__( 9002 );
const inputIme = __webpack_require__( 5597 );
const instanceID = __webpack_require__( 8739 );
const i18n = __webpack_require__( 2582 );
const management = __webpack_require__( 4524 );
const networkingConfig = __webpack_require__( 4811 );
const notifications = __webpack_require__( 2457 );
const omnibox = __webpack_require__( 17 );
const pageAction = __webpack_require__( 8218 );
const pageCapture = __webpack_require__( 4683 );
const permissions = __webpack_require__( 5921 );
const platformKeys = __webpack_require__( 7492 );
const power = __webpack_require__( 4800 );
const printerProvider = __webpack_require__( 9961 );
const privacy = __webpack_require__( 4802 );
const proxy = __webpack_require__( 4825 );
const runtime = __webpack_require__( 3446 );
const sessions = __webpack_require__( 3031 );
const sidebarAction = __webpack_require__( 8470 );
const storage = __webpack_require__( 4840 );
const system = __webpack_require__( 6842 );
const tabCapture = __webpack_require__( 3062 );
const tabs = __webpack_require__( 6132 );
const theme = __webpack_require__( 8475 );
const topSites = __webpack_require__( 3698 );
const tts = __webpack_require__( 1166 );
const ttsEngine = __webpack_require__( 1545 );
const vpnProvider = __webpack_require__( 1259 );
const webNavigation = __webpack_require__( 4061 );
const webRequest = __webpack_require__( 5431 );
const webstore = __webpack_require__( 225 );
const windows = __webpack_require__( 1679 );


/** Used for adding permissions
@type {Object<Function>} */
let apis = {
  accessibilityFeatures,
  alarms,
  bookmarks,
  browserAction,
  browserSettings,
  browsingData,
  certificateProvider,
  commands,
  contextMenus,
  contextualIdentities,
  cookies,
  declarativeContent,
  'debugger': debuggerFunction,
  desktopCapture,
  devtools,
  documentScan,
  downloads,
  enterprise,
  extension,
  fileBrowserHandler,
  fileSystemProvider,
  find,
  fontSettings,
  gcm,
  history,
  identity,
  idle,
  instanceID,
  i18n,
  management,
  notifications,
  omnibox,
  pageAction,
  pageCapture,
  permissions,
  platformKeys,
  power,
  printerProvider,
  privacy,
  proxy,
  runtime,
  sessions,
  sidebarAction,
  storage,
  system,
  tabCapture,
  tabs,
  theme,
  topSites,
  tts,
  ttsEngine,
  vpnProvider,
  webNavigation,
  webRequest,
  webstore,
  windows
};


/** @type {Object} - analog of chrome|browser */
let Browser = ( () => {
  /** @type {Object} */
  let output = {};

  Object.assign(
    output,
    {
      'accessibilityFeatures': accessibilityFeatures(),
      'alarms': alarms(),
      'bookmarks': bookmarks(),
      'browserAction': browserAction(),
      'browserSettings': browserSettings(),
      'browsingData': browsingData(),
      'certificateProvider': certificateProvider(),
      'commands': commands(),
      'contextMenus': contextMenus(),
      'contextualIdentities': contextualIdentities(),
      'cookies': cookies(),
      'declarativeContent': declarativeContent(),
      'debugger': debuggerFunction(),
      'desktopCapture': desktopCapture(),
      'devtools': devtools(),
      'documentScan': documentScan(),
      'downloads': downloads(),
      'enterprise': enterprise(),
      'extension': extension(),
      'fileBrowserHandler': fileBrowserHandler(),
      'fileSystemProvider': fileSystemProvider(),
      'find': find(),
      'fontSettings': fontSettings(),
      'gcm': gcm(),
      'history': history(),
      'identity': identity(),
      'idle': idle(),

      // input.ime
      'input': ( () => {
        let output = inputIme();
        if( !output ) return;

        return { 'ime': output };
      })(),

      'instanceID': instanceID(),
      'i18n': i18n(),
      'management': management(),

      // networking.config
      'networking': ( () => {
        let output = networkingConfig();
        if( !output ) return;

        return { 'config': output };
      })(),

      // Notifications
      'notifications': notifications(),
      'omnibox': omnibox(),
      'pageAction': pageAction(),
      'pageCapture': pageCapture(),
      'permissions': permissions( output ),
      'platformKeys': platformKeys(),
      'power': power(),
      'printerProvider': printerProvider(),
      'privacy': privacy(),
      'proxy': proxy(),
      'runtime': runtime(),
      'sessions': sessions(),
      'sidebarAction': sidebarAction(),
      'storage': storage(),
      'system': system(),
      'tabCapture': tabCapture(),
      'tabs': tabs(),
      'theme': theme(),
      'topSites': topSites(),
      'tts': tts(),
      'ttsEngine': ttsEngine(),
      'vpnProvider': vpnProvider(),
      'webNavigation': webNavigation(),
      'webRequest': webRequest(),
      'webstore': webstore(),
      'windows': windows()
    }
  );

  // Delete all unused object keys
  Object.keys( output ).forEach( key => {
    let value = output[ key ];
    if( !value ) delete output[ key ];
  });

  return output;
})();


/** Set optional API OR disable it
@param {String} api
@return {undefined} */
Browser.resetAPI = api => {
  if( !apis[ api ] ) return;

  let value = apis[ api ]();
  Browser[ api ] = value;
};


module.exports = Browser;


/***/ }),

/***/ 1509:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const browserName = __webpack_require__( 4351 );


/** @type {Object} */
module.exports = ( () => {
  if( browserName === 'chrome' && typeof chrome === 'undefined' ) return {};
  return browserName === 'chrome' ? chrome : browser;
})();


/***/ }),

/***/ 2814:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const browserName = __webpack_require__( 4351 );


/** @type {Boolean} */
module.exports = browserName === 'firefox';


/***/ }),

/***/ 3933:
/***/ ((module) => {

/** @function */
module.exports = ( original, reducer, output ) => {
  // Array
  if( Array.isArray( original ) ) {
    return original.reduce(
      ( carry, value, key ) => {
        reducer( carry, value, key );
        return carry;
      },
      output
    );
  }

  // Object
  Object.keys( original ).forEach( key => {
    let value = original[ key ];
    reducer( output, value, key );
  });
  return output;
};


/***/ }),

/***/ 6567:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"version":20230220071004,"countries":{"at":{"timezoneOffset":60,"premium_servers":[{"host":"at11.prmsrvs.com","port":440}]},"au":{"timezoneOffset":660,"premium_servers":[{"host":"au1.prmsrvs.com","port":440},{"host":"au2.prmsrvs.com","port":440},{"host":"au3.prmsrvs.com","port":440},{"host":"au4.prmsrvs.com","port":440},{"host":"au5.prmsrvs.com","port":440},{"host":"au6.prmsrvs.com","port":440},{"host":"au7.prmsrvs.com","port":440},{"host":"au8.prmsrvs.com","port":440}]},"be":{"timezoneOffset":60,"premium_servers":[{"host":"be51.prmsrvs.com","port":440},{"host":"be52.prmsrvs.com","port":440},{"host":"be53.prmsrvs.com","port":440},{"host":"be54.prmsrvs.com","port":440},{"host":"be55.prmsrvs.com","port":440},{"host":"be56.prmsrvs.com","port":440},{"host":"be57.prmsrvs.com","port":440},{"host":"be58.prmsrvs.com","port":440},{"host":"be59.prmsrvs.com","port":440},{"host":"be60.prmsrvs.com","port":440},{"host":"be61.prmsrvs.com","port":440},{"host":"be62.prmsrvs.com","port":440},{"host":"be63.prmsrvs.com","port":440},{"host":"be64.prmsrvs.com","port":440},{"host":"be65.prmsrvs.com","port":440},{"host":"be66.prmsrvs.com","port":440},{"host":"be67.prmsrvs.com","port":440},{"host":"be68.prmsrvs.com","port":440}]},"bg":{"timezoneOffset":120,"premium_servers":[{"host":"bg1.prmsrvs.com","port":440},{"host":"bg2.prmsrvs.com","port":440},{"host":"bg3.prmsrvs.com","port":440},{"host":"bg4.prmsrvs.com","port":440}]},"br":{"timezoneOffset":-180,"premium_servers":[{"host":"br2.prmsrvs.com","port":440},{"host":"br3.prmsrvs.com","port":440}]},"ca":{"timezoneOffset":-240,"premium_servers":[{"host":"ca1.prmsrvs.com","port":440},{"host":"ca2.prmsrvs.com","port":440}]},"ch":{"timezoneOffset":60,"premium_servers":[{"host":"ch2.prmsrvs.com","port":440}]},"cl":{"timezoneOffset":-180,"premium_servers":[{"host":"cl1.prmsrvs.com","port":440}]},"cz":{"timezoneOffset":60,"premium_servers":[{"host":"cz6.prmsrvs.com","port":440}]},"de":{"timezoneOffset":60,"premium_servers":[{"host":"de1.prmsrvs.com","port":440},{"host":"de2.prmsrvs.com","port":440},{"host":"de3.prmsrvs.com","port":440},{"host":"de4.prmsrvs.com","port":440},{"host":"de5.prmsrvs.com","port":440},{"host":"de6.prmsrvs.com","port":440},{"host":"de7.prmsrvs.com","port":440},{"host":"de8.prmsrvs.com","port":440},{"host":"de9.prmsrvs.com","port":440},{"host":"de10.prmsrvs.com","port":440},{"host":"de11.prmsrvs.com","port":440},{"host":"de12.prmsrvs.com","port":440}]},"dk":{"timezoneOffset":60,"premium_servers":[{"host":"dk8.prmsrvs.com","port":440},{"host":"dk9.prmsrvs.com","port":440},{"host":"dk10.prmsrvs.com","port":440},{"host":"dk11.prmsrvs.com","port":440},{"host":"dk12.prmsrvs.com","port":440},{"host":"dk17.prmsrvs.com","port":440},{"host":"dk18.prmsrvs.com","port":440},{"host":"dk19.prmsrvs.com","port":440},{"host":"dk20.prmsrvs.com","port":440}]},"es":{"timezoneOffset":60,"premium_servers":[{"host":"es1.prmsrvs.com","port":440},{"host":"es2.prmsrvs.com","port":440},{"host":"es3.prmsrvs.com","port":440}]},"fi":{"timezoneOffset":120,"premium_servers":[{"host":"fi31.prmsrvs.com","port":440},{"host":"fi32.prmsrvs.com","port":440},{"host":"fi33.prmsrvs.com","port":440},{"host":"fi34.prmsrvs.com","port":440},{"host":"fi35.prmsrvs.com","port":440},{"host":"fi36.prmsrvs.com","port":440},{"host":"fi37.prmsrvs.com","port":440},{"host":"fi38.prmsrvs.com","port":440},{"host":"fi39.prmsrvs.com","port":440},{"host":"fi40.prmsrvs.com","port":440},{"host":"fi41.prmsrvs.com","port":440},{"host":"fi42.prmsrvs.com","port":440},{"host":"fi43.prmsrvs.com","port":440},{"host":"fi44.prmsrvs.com","port":440},{"host":"fi45.prmsrvs.com","port":440}]},"fr":{"timezoneOffset":60,"premium_servers":[{"host":"fr1.prmsrvs.com","port":440},{"host":"fr2.prmsrvs.com","port":440},{"host":"fr3.prmsrvs.com","port":440},{"host":"fr4.prmsrvs.com","port":440},{"host":"fr5.prmsrvs.com","port":440},{"host":"fr6.prmsrvs.com","port":440},{"host":"fr7.prmsrvs.com","port":440},{"host":"fr8.prmsrvs.com","port":440},{"host":"fr9.prmsrvs.com","port":440},{"host":"fr10.prmsrvs.com","port":440},{"host":"fr11.prmsrvs.com","port":440},{"host":"fr12.prmsrvs.com","port":440},{"host":"fr13.prmsrvs.com","port":440},{"host":"fr14.prmsrvs.com","port":440},{"host":"fr15.prmsrvs.com","port":440}]},"hk":{"timezoneOffset":480,"premium_servers":[{"host":"hk1.prmsrvs.com","port":440},{"host":"hk2.prmsrvs.com","port":440},{"host":"hk3.prmsrvs.com","port":440}]},"hu":{"timezoneOffset":120,"premium_servers":[{"host":"hu1.prmsrvs.com","port":440},{"host":"hu2.prmsrvs.com","port":440},{"host":"hu3.prmsrvs.com","port":440},{"host":"hu4.prmsrvs.com","port":440},{"host":"hu5.prmsrvs.com","port":440}]},"ie":{"timezoneOffset":0,"premium_servers":[{"host":"ie1.prmsrvs.com","port":440},{"host":"ie2.prmsrvs.com","port":440},{"host":"ie3.prmsrvs.com","port":440},{"host":"ie4.prmsrvs.com","port":440},{"host":"ie5.prmsrvs.com","port":440},{"host":"ie6.prmsrvs.com","port":440},{"host":"ie7.prmsrvs.com","port":440},{"host":"ie8.prmsrvs.com","port":440},{"host":"ie9.prmsrvs.com","port":440},{"host":"ie10.prmsrvs.com","port":440}]},"il":{"timezoneOffset":180,"premium_servers":[{"host":"il1.prmsrvs.com","port":440},{"host":"il2.prmsrvs.com","port":440}]},"in":{"timezoneOffset":330,"premium_servers":[{"host":"in3.prmsrvs.com","port":440},{"host":"in4.prmsrvs.com","port":440},{"host":"in5.prmsrvs.com","port":440},{"host":"in6.prmsrvs.com","port":440}]},"is":{"timezoneOffset":0,"premium_servers":[{"host":"is1.prmsrvs.com","port":440},{"host":"is2.prmsrvs.com","port":440},{"host":"is3.prmsrvs.com","port":440},{"host":"is4.prmsrvs.com","port":440}]},"it":{"timezoneOffset":60,"premium_servers":[{"host":"it1.prmsrvs.com","port":440},{"host":"it2.prmsrvs.com","port":440},{"host":"it3.prmsrvs.com","port":440}]},"jp":{"timezoneOffset":540,"premium_servers":[{"host":"jp1.prmsrvs.com","port":440},{"host":"jp2.prmsrvs.com","port":440},{"host":"jp3.prmsrvs.com","port":440},{"host":"jp4.prmsrvs.com","port":440},{"host":"jp5.prmsrvs.com","port":440},{"host":"jp6.prmsrvs.com","port":440},{"host":"jp7.prmsrvs.com","port":440},{"host":"jp8.prmsrvs.com","port":440},{"host":"jp9.prmsrvs.com","port":440},{"host":"jp10.prmsrvs.com","port":440},{"host":"jp11.prmsrvs.com","port":440},{"host":"jp12.prmsrvs.com","port":440},{"host":"jp13.prmsrvs.com","port":440},{"host":"jp14.prmsrvs.com","port":440},{"host":"jp15.prmsrvs.com","port":440},{"host":"jp16.prmsrvs.com","port":440},{"host":"jp17.prmsrvs.com","port":440},{"host":"jp18.prmsrvs.com","port":440},{"host":"jp19.prmsrvs.com","port":440},{"host":"jp20.prmsrvs.com","port":440},{"host":"jp21.prmsrvs.com","port":440},{"host":"jp22.prmsrvs.com","port":440},{"host":"jp23.prmsrvs.com","port":440},{"host":"jp24.prmsrvs.com","port":440},{"host":"jp25.prmsrvs.com","port":440},{"host":"jp26.prmsrvs.com","port":440},{"host":"jp27.prmsrvs.com","port":440},{"host":"jp28.prmsrvs.com","port":440},{"host":"jp29.prmsrvs.com","port":440},{"host":"jp30.prmsrvs.com","port":440},{"host":"jp31.prmsrvs.com","port":440},{"host":"jp32.prmsrvs.com","port":440},{"host":"jp33.prmsrvs.com","port":440},{"host":"jp34.prmsrvs.com","port":440},{"host":"jp35.prmsrvs.com","port":440},{"host":"jp36.prmsrvs.com","port":440},{"host":"jp37.prmsrvs.com","port":440},{"host":"jp38.prmsrvs.com","port":440},{"host":"jp39.prmsrvs.com","port":440},{"host":"jp40.prmsrvs.com","port":440},{"host":"jp41.prmsrvs.com","port":440},{"host":"jp42.prmsrvs.com","port":440},{"host":"jp43.prmsrvs.com","port":440},{"host":"jp44.prmsrvs.com","port":440},{"host":"jp45.prmsrvs.com","port":440},{"host":"jp46.prmsrvs.com","port":440},{"host":"jp47.prmsrvs.com","port":440},{"host":"jp48.prmsrvs.com","port":440},{"host":"jp49.prmsrvs.com","port":440},{"host":"jp50.prmsrvs.com","port":440}]},"kr":{"timezoneOffset":540,"premium_servers":[{"host":"kr1.prmsrvs.com","port":440},{"host":"kr2.prmsrvs.com","port":440},{"host":"kr3.prmsrvs.com","port":440},{"host":"kr4.prmsrvs.com","port":440},{"host":"kr5.prmsrvs.com","port":440},{"host":"kr6.prmsrvs.com","port":440},{"host":"kr7.prmsrvs.com","port":440},{"host":"kr8.prmsrvs.com","port":440},{"host":"kr9.prmsrvs.com","port":440},{"host":"kr10.prmsrvs.com","port":440},{"host":"kr11.prmsrvs.com","port":440},{"host":"kr12.prmsrvs.com","port":440}]},"lt":{"timezoneOffset":120,"premium_servers":[{"host":"lt1.prmsrvs.com","port":440},{"host":"lt2.prmsrvs.com","port":440},{"host":"lt3.prmsrvs.com","port":440}]},"lu":{"timezoneOffset":60,"premium_servers":[{"host":"lu2.prmsrvs.com","port":440}]},"lv":{"timezoneOffset":120,"premium_servers":[{"host":"lv2.prmsrvs.com","port":440}]},"mx":{"timezoneOffset":-300,"premium_servers":[{"host":"mx1.prmsrvs.com","port":440}]},"nl":{"timezoneOffset":60,"servers":[{"host":"nl41.trafcfy.com","port":440},{"host":"nl42.trafcfy.com","port":440},{"host":"nl43.trafcfy.com","port":440},{"host":"nl44.trafcfy.com","port":440},{"host":"nl45.trafcfy.com","port":440},{"host":"nl51.trafcfy.com","port":440},{"host":"nl52.trafcfy.com","port":440},{"host":"nl53.trafcfy.com","port":440},{"host":"nl54.trafcfy.com","port":440},{"host":"nl55.trafcfy.com","port":440},{"host":"nl56.trafcfy.com","port":440},{"host":"nl57.trafcfy.com","port":440},{"host":"nl58.trafcfy.com","port":440},{"host":"nl59.trafcfy.com","port":440},{"host":"nl60.trafcfy.com","port":440},{"host":"nl61.trafcfy.com","port":440},{"host":"nl62.trafcfy.com","port":440},{"host":"nl63.trafcfy.com","port":440},{"host":"nl64.trafcfy.com","port":440},{"host":"nl65.trafcfy.com","port":440},{"host":"nl66.trafcfy.com","port":440},{"host":"nl67.trafcfy.com","port":440},{"host":"nl68.trafcfy.com","port":440},{"host":"nl69.trafcfy.com","port":440},{"host":"nl70.trafcfy.com","port":440},{"host":"nl71.trafcfy.com","port":440},{"host":"nl72.trafcfy.com","port":440},{"host":"nl73.trafcfy.com","port":440},{"host":"nl74.trafcfy.com","port":440},{"host":"nl75.trafcfy.com","port":440},{"host":"nl76.trafcfy.com","port":440},{"host":"nl77.trafcfy.com","port":440},{"host":"nl78.trafcfy.com","port":440},{"host":"nl79.trafcfy.com","port":440},{"host":"nl80.trafcfy.com","port":440},{"host":"nl81.trafcfy.com","port":440},{"host":"nl82.trafcfy.com","port":440},{"host":"nl83.trafcfy.com","port":440},{"host":"nl84.trafcfy.com","port":440},{"host":"nl85.trafcfy.com","port":440},{"host":"nl86.trafcfy.com","port":440},{"host":"nl87.trafcfy.com","port":440},{"host":"nl88.trafcfy.com","port":440},{"host":"nl89.trafcfy.com","port":440},{"host":"nl90.trafcfy.com","port":440},{"host":"nl91.trafcfy.com","port":440},{"host":"nl92.trafcfy.com","port":440},{"host":"nl93.trafcfy.com","port":440},{"host":"nl94.trafcfy.com","port":440},{"host":"nl95.trafcfy.com","port":440}],"premium_servers":[{"host":"nl41.prmsrvs.com","port":440},{"host":"nl42.prmsrvs.com","port":440},{"host":"nl43.prmsrvs.com","port":440},{"host":"nl44.prmsrvs.com","port":440},{"host":"nl45.prmsrvs.com","port":440},{"host":"nl46.prmsrvs.com","port":440},{"host":"nl47.prmsrvs.com","port":440},{"host":"nl48.prmsrvs.com","port":440}]},"no":{"timezoneOffset":60,"premium_servers":[{"host":"no1.prmsrvs.com","port":440},{"host":"no2.prmsrvs.com","port":440},{"host":"no3.prmsrvs.com","port":440},{"host":"no4.prmsrvs.com","port":440},{"host":"no5.prmsrvs.com","port":440},{"host":"no6.prmsrvs.com","port":440},{"host":"no7.prmsrvs.com","port":440}]},"nz":{"timezoneOffset":780,"premium_servers":[{"host":"nz1.prmsrvs.com","port":440}]},"pl":{"timezoneOffset":60,"premium_servers":[{"host":"pl1.prmsrvs.com","port":440},{"host":"pl2.prmsrvs.com","port":440},{"host":"pl3.prmsrvs.com","port":440}]},"ro":{"timezoneOffset":120,"premium_servers":[{"host":"ro4.prmsrvs.com","port":440},{"host":"ro5.prmsrvs.com","port":440}]},"rs":{"timezoneOffset":120,"premium_servers":[{"host":"rs1.prmsrvs.com","port":440}]},"ru":{"timezoneOffset":180,"premium_servers":[{"host":"ru6.prmsrvs.com","port":440},{"host":"ru7.prmsrvs.com","port":440},{"host":"ru8.prmsrvs.com","port":440},{"host":"ru9.prmsrvs.com","port":440},{"host":"ru10.prmsrvs.com","port":440},{"host":"ru11.prmsrvs.com","port":440},{"host":"ru12.prmsrvs.com","port":440},{"host":"ru13.prmsrvs.com","port":440}]},"se":{"timezoneOffset":60,"premium_servers":[{"host":"se10.prmsrvs.com","port":440},{"host":"se11.prmsrvs.com","port":440},{"host":"se12.prmsrvs.com","port":440}]},"sg":{"timezoneOffset":480,"servers":[{"host":"sg1.trafcfy.com","port":440},{"host":"sg2.trafcfy.com","port":440},{"host":"sg3.trafcfy.com","port":440},{"host":"sg4.trafcfy.com","port":440},{"host":"sg5.trafcfy.com","port":440},{"host":"sg6.trafcfy.com","port":440},{"host":"sg7.trafcfy.com","port":440},{"host":"sg8.trafcfy.com","port":440},{"host":"sg9.trafcfy.com","port":440},{"host":"sg10.trafcfy.com","port":440}],"premium_servers":[{"host":"sg5.prmsrvs.com","port":440},{"host":"sg6.prmsrvs.com","port":440},{"host":"sg7.prmsrvs.com","port":440},{"host":"sg8.prmsrvs.com","port":440},{"host":"sg9.prmsrvs.com","port":440},{"host":"sg10.prmsrvs.com","port":440},{"host":"sg11.prmsrvs.com","port":440},{"host":"sg12.prmsrvs.com","port":440}]},"si":{"timezoneOffset":120,"premium_servers":[{"host":"si1.prmsrvs.com","port":440},{"host":"si2.prmsrvs.com","port":440}]},"tr":{"timezoneOffset":180,"premium_servers":[{"host":"tr4.prmsrvs.com","port":440},{"host":"tr7.prmsrvs.com","port":440},{"host":"tr8.prmsrvs.com","port":440}]},"ua":{"timezoneOffset":180,"premium_servers":[{"host":"ua2.prmsrvs.com","port":440}]},"uk":{"timezoneOffset":0,"premium_servers":[{"host":"uk1.prmsrvs.com","port":440},{"host":"uk2.prmsrvs.com","port":440},{"host":"uk3.prmsrvs.com","port":440},{"host":"uk4.prmsrvs.com","port":440},{"host":"uk5.prmsrvs.com","port":440},{"host":"uk6.prmsrvs.com","port":440},{"host":"uk8.prmsrvs.com","port":440},{"host":"uk10.prmsrvs.com","port":440},{"host":"uk11.prmsrvs.com","port":440},{"host":"uk12.prmsrvs.com","port":440},{"host":"uk13.prmsrvs.com","port":440},{"host":"uk14.prmsrvs.com","port":440},{"host":"uk15.prmsrvs.com","port":440},{"host":"uk16.prmsrvs.com","port":440},{"host":"uk17.prmsrvs.com","port":440},{"host":"uk18.prmsrvs.com","port":440},{"host":"uk19.prmsrvs.com","port":440},{"host":"uk20.prmsrvs.com","port":440},{"host":"uk21.prmsrvs.com","port":440},{"host":"uk23.prmsrvs.com","port":440},{"host":"uk24.prmsrvs.com","port":440},{"host":"uk25.prmsrvs.com","port":440},{"host":"uk26.prmsrvs.com","port":440},{"host":"uk27.prmsrvs.com","port":440},{"host":"uk28.prmsrvs.com","port":440},{"host":"uk30.prmsrvs.com","port":440},{"host":"uk31.prmsrvs.com","port":440},{"host":"uk35.prmsrvs.com","port":440},{"host":"uk36.prmsrvs.com","port":440},{"host":"uk53.prmsrvs.com","port":440},{"host":"uk61.prmsrvs.com","port":440}],"servers":[{"host":"uk22.trafcfy.com","port":440},{"host":"uk23.trafcfy.com","port":440},{"host":"uk24.trafcfy.com","port":440},{"host":"uk25.trafcfy.com","port":440},{"host":"uk26.trafcfy.com","port":440},{"host":"uk27.trafcfy.com","port":440},{"host":"uk28.trafcfy.com","port":440},{"host":"uk29.trafcfy.com","port":440},{"host":"uk30.trafcfy.com","port":440},{"host":"uk31.trafcfy.com","port":440},{"host":"uk32.trafcfy.com","port":440},{"host":"uk33.trafcfy.com","port":440},{"host":"uk34.trafcfy.com","port":440},{"host":"uk35.trafcfy.com","port":440},{"host":"uk36.trafcfy.com","port":440},{"host":"uk37.trafcfy.com","port":440}]},"us":{"timezoneOffset":-300,"premium_servers":[{"host":"us1.prmsrvs.com","port":440},{"host":"us2.prmsrvs.com","port":440},{"host":"us7.prmsrvs.com","port":440},{"host":"us10.prmsrvs.com","port":440},{"host":"us11.prmsrvs.com","port":440},{"host":"us12.prmsrvs.com","port":440},{"host":"us13.prmsrvs.com","port":440},{"host":"us14.prmsrvs.com","port":440}],"servers":[{"host":"us21.trafcfy.com","port":440},{"host":"us23.trafcfy.com","port":440},{"host":"us24.trafcfy.com","port":440},{"host":"us25.trafcfy.com","port":440},{"host":"us26.trafcfy.com","port":440},{"host":"us28.trafcfy.com","port":440},{"host":"us29.trafcfy.com","port":440},{"host":"us30.trafcfy.com","port":440},{"host":"us31.trafcfy.com","port":440},{"host":"us32.trafcfy.com","port":440},{"host":"us34.trafcfy.com","port":440},{"host":"us35.trafcfy.com","port":440}]},"usw":{"timezoneOffset":-360,"premium_servers":[{"host":"usw1.prmsrvs.com","port":440},{"host":"usw2.prmsrvs.com","port":440},{"host":"usw3.prmsrvs.com","port":440},{"host":"usw4.prmsrvs.com","port":440},{"host":"usw5.prmsrvs.com","port":440},{"host":"usw6.prmsrvs.com","port":440},{"host":"usw7.prmsrvs.com","port":440},{"host":"usw8.prmsrvs.com","port":440},{"host":"usw9.prmsrvs.com","port":440},{"host":"usw10.prmsrvs.com","port":440},{"host":"usw11.prmsrvs.com","port":440},{"host":"usw12.prmsrvs.com","port":440},{"host":"usw13.prmsrvs.com","port":440},{"host":"usw14.prmsrvs.com","port":440},{"host":"usw15.prmsrvs.com","port":440},{"host":"usw16.prmsrvs.com","port":440},{"host":"usw17.prmsrvs.com","port":440}]},"za":{"timezoneOffset":120,"premium_servers":[{"host":"za1.prmsrvs.com","port":440},{"host":"za2.prmsrvs.com","port":440},{"host":"za3.prmsrvs.com","port":440},{"host":"za4.prmsrvs.com","port":440},{"host":"za5.prmsrvs.com","port":440},{"host":"za6.prmsrvs.com","port":440},{"host":"za7.prmsrvs.com","port":440}]}},"domains":{"free":["trafcfy.com"],"premium":["prmsrvs.com"]}}');

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/polyfills/Array.flat.js
var Array_flat = __webpack_require__(8050);
// EXTERNAL MODULE: ./src/polyfills/Array.flatMap.js
var Array_flatMap = __webpack_require__(2893);
// EXTERNAL MODULE: ./src/polyfills/Object.fromEntries.js
var Object_fromEntries = __webpack_require__(8562);
// EXTERNAL MODULE: ./src/polyfills/Promise.prototype.finally.js
var Promise_prototype_finally = __webpack_require__(651);
// EXTERNAL MODULE: ./src/polyfills/String.prototype.padEnd.js
var String_prototype_padEnd = __webpack_require__(7554);
// EXTERNAL MODULE: ./src/polyfills/String.prototype.padStart.js
var String_prototype_padStart = __webpack_require__(3498);
// EXTERNAL MODULE: ./node_modules/crossbrowser-webextension/code/index.js
var code = __webpack_require__(3552);
var code_default = /*#__PURE__*/__webpack_require__.n(code);
// EXTERNAL MODULE: ./src/general/tools/ajax.ts
var ajax = __webpack_require__(7493);
// EXTERNAL MODULE: ./config/production.js
var production = __webpack_require__(4019);
var production_default = /*#__PURE__*/__webpack_require__.n(production);
// EXTERNAL MODULE: ./src/general/tools/sendMessage.ts
var sendMessage = __webpack_require__(1748);
;// CONCATENATED MODULE: ./src/dualUse/ajaxes/availableServerServerList.ts



const bgRequest = location.href.includes('background');
/* harmony default export */ const availableServerServerList = (() => {
  if (!bgRequest) {
    return (0,sendMessage/* default */.Z)({
      'type': 'ajaxes.availableServerServerList'
    });
  }

  return (0,ajax/* default */.Z)(`https://brwinfo.github.io/api_urls/${(production_default()).type}.json`, {
    'dataType': 'json',
    'headers': {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache'
    },
    'method': 'GET'
  });
});
;// CONCATENATED MODULE: ./src/dualUse/ajaxes/availableServerTest.ts


const availableServerTest_bgRequest = location.href.includes('background');
/** Get list of all servers
@function */

/* harmony default export */ const availableServerTest = (async url => {
  if (!availableServerTest_bgRequest) {
    return (0,sendMessage/* default */.Z)({
      'type': 'ajaxes.availableServerTest',
      url
    });
  }

  const data = await (0,ajax/* default */.Z)(url, {
    'dataType': 'json',
    'headers': {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache'
    },
    'method': 'GET'
  });
  if ((data === null || data === void 0 ? void 0 : data.ok) === true) return;
  throw new Error('Server test request: incorrect request return');
});
;// CONCATENATED MODULE: ./src/general/tools/encodeTokenCredentials.ts
/* global Credentials */
// Convert credentials object to string for header in request
/* harmony default export */ const encodeTokenCredentials = (({
  access_token
}) => `Token token="${access_token}"`);
;// CONCATENATED MODULE: ./src/general/tools/apiRequest.ts
/* global Credentials */

 // @ts-ignore

const projectVersion = "3.66.3";
/** @function */

/* harmony default export */ const apiRequest = ((url, options) => {
  let {
    body,
    cache,
    credentials,
    data,
    dataType,
    headers,
    method,
    tokenCredentials
  } = options;
  let newHeaders = headers || {};
  newHeaders['X-Browsec-Version'] = projectVersion;

  if (tokenCredentials) {
    newHeaders.Authorization = encodeTokenCredentials(tokenCredentials);
  }

  let ajaxOptions = {
    body,
    cache,
    credentials,
    data,
    dataType,
    'headers': newHeaders,
    method
  };
  Object.keys(ajaxOptions).forEach(property => {
    if (ajaxOptions[property] === undefined) delete ajaxOptions[property];
  });
  return (0,ajax/* default */.Z)(url, ajaxOptions);
});
// EXTERNAL MODULE: ./src/general/alarms/index.ts + 1 modules
var alarms = __webpack_require__(3357);
;// CONCATENATED MODULE: ./src/dualUse/availableServer/timeout.ts
/* harmony default export */ const timeout = (5 * 1000);
;// CONCATENATED MODULE: ./src/dualUse/availableServer/algorithm.ts

/** Separate function especially for unit testing
@function
@param promises - just promises without any data in resolved state */

/* harmony default export */ const algorithm = (promises => new Promise(resolve => {
  const respondedServers = [];
  promises.forEach(async (promise, index) => {
    try {
      await promise;
      respondedServers.push(index);
    } catch (x) {}
  }); // in 5 seconds and first server

  (async () => {
    try {
      await new Promise((resolve, reject) => {
        promises[0].then(resolve);
        setTimeout(() => {
          reject(new Error('Too big timeout for first request'));
        }, timeout);
      });
      resolve(0);
    } catch (error) {}
  })();

  (async () => {
    await new Promise(resolve => {
      setTimeout(resolve, timeout);
    }); // in 5 seconds and at least one server responded

    if (respondedServers.length) {
      const lowestIndex = Math.min.apply(null, respondedServers);
      resolve(lowestIndex);
    } // After 5 seconds and no response
    else {
      promises.forEach(async (promise, index) => {
        await promise;
        resolve(index);
      });
    }
  })(); // Total rejection


  (async () => {
    try {
      await Promise.all(promises.map(promise => promise.then(() => {
        throw new Error('Some error');
      }, () => undefined)));
      resolve(0);
    } catch (x) {}
  })();
}));
// EXTERNAL MODULE: ./src/dualUse/log/index.ts
var log = __webpack_require__(6699);
;// CONCATENATED MODULE: ./src/dualUse/DelayRecord.ts


const DelayRecord_bgRequest = location.href.includes('background');
const counts = {};
let internalCounter
/*: integer*/
= 0;
const prefix
/*: string*/
= Math.floor(Math.random() * 1000000000) + '_'; // Every popup is unique

/** @class */

/* harmony default export */ const DelayRecord = (class {
  // @ts-ignore
  constructor(name) {
    this._name = name;
    let id = DelayRecord_bgRequest ? counts[name] || 0 : internalCounter++;
    this._id = id; // Increase count

    if (DelayRecord_bgRequest) counts[name] = id + 1;
    if (DelayRecord_bgRequest) (0,log/* default */.Z)(`Delay. ${name} #${id} started`);

    if (DelayRecord_bgRequest) {
      this._startPoint = performance.now();
    } else {
      (async () => {
        this._startPoint = await (0,sendMessage/* default */.Z)({
          'id': prefix + id,
          name,
          'type': 'DelayRecord start'
        });
      })();
    }
  }

  get startStamp() {
    return this._startPoint;
  }
  /** @method */


  end() {
    if (DelayRecord_bgRequest) {
      // delay in milliseconds
      let delay = Math.round(performance.now() - this._startPoint);
      (0,log/* default */.Z)(`Delay. ${this._name} #${this._id} ended: ${delay} milliseconds`);
      return delay;
    }

    (0,sendMessage/* default */.Z)({
      'id': prefix + this._id,
      'name': this._name,
      'type': 'DelayRecord end'
    });
    return 0; // Type crap
  }

});
;
;// CONCATENATED MODULE: ./src/dualUse/availableServer/serverList/validate.ts
/* harmony default export */ const validate = (serverList => {
  const valid = Array.isArray(serverList) && Boolean(serverList.length) && serverList.every(item => typeof item === 'string');
  if (!valid) throw new Error('Invalid data in server list request');
});
;// CONCATENATED MODULE: ./src/dualUse/availableServer/serverList/request.ts



/** @function */

/* harmony default export */ const request = (async () => {
  const timer = new DelayRecord('Available server. Request servers list');
  await new Promise(resolve => {
    setTimeout(resolve, 0);
  }); // Critical

  const serverList = await ajaxes.availableServerServerList();

  try {
    validate(serverList);
    timer.end();
  } catch (error) {
    timer.end();
    throw error;
  }

  return serverList.map(item => item + 'v1');
});
// EXTERNAL MODULE: ./src/general/storage.ts
var general_storage = __webpack_require__(6264);
;// CONCATENATED MODULE: ./src/bg/timemarks.ts
/* global NodeJS */
// Special object for cycled ajaxes with condition like "every 24 hours"

/* harmony default export */ const timemarks = (new class {
  // @ts-ignore
  constructor() {
    this._timeoutIds = {};

    this._ready = (async () => {
      this._state = (await general_storage/* default.get */.Z.get('timemarks')) || {};
    })();
  }
  /** @method */


  async get(property) {
    await this._ready;

    if (typeof this._state !== 'object') {
      throw new Error(`Timemark for ${property} called before storage initialization`);
    }

    return this._state[property];
  }

  async getAsync(property) {
    const state = (await general_storage/* default.get */.Z.get('timemarks')) || {};
    return state[property];
  }
  /** @method */


  async set(property, value = Date.now()) {
    await this._ready;
    this._state[property] = value;
    general_storage/* default.set */.Z.set('timemarks', this._state);
  }
  /**
  @method
  @return - if true -> start immediately */


  async start({
    action,
    delay,
    getOldMark = () => {},
    name
  }) {
    await this._ready;
    const mark = (await this.get(name)) || getOldMark();
    const timePassed = mark ? Date.now() - mark : undefined;
    let condition = !mark || typeof timePassed === 'number' && (timePassed < 0 || timePassed >= delay);

    if (condition) {
      return {
        'startImmediately': true,
        'actionPromise': action() // Execution here

      };
    }

    if (typeof timePassed === 'number') {
      // Type crap
      if (this._timeoutIds[name] !== undefined) {
        clearTimeout(this._timeoutIds[name]);
      }

      this._timeoutIds[name] = setTimeout(action, delay - timePassed);
    }

    return {
      'startImmediately': false
    };
  }
  /** Like start, but with set of mark in storage and eternal re-using
  @method */


  async loop({
    action,
    delay,
    name
  }) {
    let output = await this.start({
      action,
      delay,
      name
    });
    if (output.startImmediately) this.set(name);
  }

}());
;// CONCATENATED MODULE: ./src/dualUse/availableServer/index.ts









const refreshDelay = 24 * 3600 * 1000; // 1 day

const testUrl = '/test';
const availableServer_bgRequest = location.href.includes('background');
const manifestVersion = chrome.runtime.getManifest().manifest_version;
/** @function */

const onStartAction = action => {
  if (manifestVersion === 2) {
    action();
    return;
  }

  code_default().runtime.onInstalled.addListener(action);
  code_default().runtime.onStartup.addListener(action);
};

/** @function */
const loop = async () => {
  if (loop._activePromise) return loop._activePromise;

  const promise = (async () => {
    const newServers = await request();
    await general_storage/* default.set */.Z.set('availableServerList', newServers);
    return newServers;
  })();

  loop._activePromise = promise;

  try {
    const newServers = await promise;
    delete loop._activePromise;
    return newServers;
  } catch (error) {
    delete loop._activePromise;
    throw error;
  }
};

if (availableServer_bgRequest) {
  onStartAction(() => {
    loop(); // Initial

    alarms/* default.createCycle */.Z.createCycle('available server: list', {
      'periodInMinutes': 24 * 60
    });
  });
  alarms/* default.on */.Z.on(({
    name
  }) => {
    if (name === 'available server: list') loop();
  });
}

class AvailableServerClass {
  // @ts-ignore
  // used to block 2 parallel requests
  // Called during first event task loop
  constructor() {
    this._generatePromise = this._generatePromise.bind(this);
    alarms/* default.on */.Z.on(({
      name
    }) => {
      if (name !== 'available server: generate promise') return;

      this._generatePromise();
    });
    this._processed = false;

    this.initialRequestComplete = (async () => {
      const mark = await timemarks.get('available server'); // on install

      if (!mark) {
        await new Promise(async resolve => {
          setTimeout(() => {
            resolve();
          }, 15000);

          try {
            await loop();
          } catch (x) {}

          resolve();
        });

        try {
          await loop();
        } catch (x) {}

        await this._generatePromise(true);
        return;
      }

      const timePassed = Date.now() - mark;

      if (timePassed < 0 || timePassed >= refreshDelay) {
        await this._generatePromise();
        return;
      }

      alarms/* default.createOneTime */.Z.createOneTime('available server: generate promise', {
        'delay': refreshDelay - timePassed
      });
    })();
  }
  /** @method */


  async _generatePromise(withBrowsec) {
    if ((production_default()).type === 'development') {
      (0,log/* default */.Z)('AJAX: /test');
    }

    this._processed = true;
    const servers = (await general_storage/* default.get */.Z.get('availableServerList')) || production_default().apiServerUrls.map(item => item + 'v1');

    if (withBrowsec && !servers.some(url => url.includes('/browsec.com/'))) {
      servers.push('https://browsec.com/api/v1');
    }

    const browsecComIndex = servers.findIndex(url => new URL(url).host === 'browsec.com'); //const controller = typeof AbortController === 'function'
    //  ? new AbortController()
    //  : undefined;

    const ajaxesData = servers.map(async server => {
      const url = server + testUrl;
      const options = {
        'dataType': 'json',
        'headers': {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        },
        'method': 'GET'
      }; //if( controller ) options.signal = controller.signal;

      const data = await (0,ajax/* default */.Z)(url, options);
      if ((data === null || data === void 0 ? void 0 : data.ok) === true) return;
      throw new Error('Server test request: incorrect request return');
    });

    if (browsecComIndex !== -1) {
      (async () => {
        const value = await new Promise(resolve => {
          ajaxesData[browsecComIndex].then(() => {
            resolve(true);
          }, () => {
            resolve(false);
          });
          setTimeout(() => {
            resolve(false);
          }, 5200); // 5200 to make this algorithm appear later then main for availiable server
        });
        general_storage/* default.set */.Z.set('browsec.com available', value);
      })();
    }

    const activePromise = (async () => {
      const index = await algorithm(ajaxesData);
      await general_storage/* default.set */.Z.set('available server current server', servers[index]);
      return servers[index];
    })();

    this._activePromise = activePromise;
    activePromise.then(() => {
      timemarks.set('available server');
      this._processed = false; //controller?.abort?.();

      alarms/* default.createOneTime */.Z.createOneTime('available server: generate promise', {
        'delay': refreshDelay
      });
    });
    return activePromise;
  }
  /** @method */


  async getServer() {
    const {
      'availableServerList': list,
      'available server current server': currentServer
    } = await code_default().storage.local.get(['availableServerList', 'available server current server']);
    const servers = list || production_default().apiServerUrls.map(item => item + 'v1');
    return currentServer || servers[0];
  }
  /** @method */


  refreshList() {
    return loop();
  }
  /** @method */


  restart() {
    if (this._processed) return this._activePromise;
    return this._generatePromise();
  }

}

;
/* harmony default export */ const availableServer = (availableServer_bgRequest ? new AvailableServerClass() : {});

;// CONCATENATED MODULE: ./src/dualUse/ajaxes/account.ts
/* global AjaxAccount, Credentials */



const account_bgRequest = location.href.includes('background');
/** Get user data from server
@function */

/* harmony default export */ const account = (async credentials => {
  if (!account_bgRequest) {
    return (0,sendMessage/* default */.Z)({
      'type': 'ajaxes.account',
      credentials
    });
  }

  const baseUrl = await availableServer.getServer();

  try {
    let preData = await apiRequest(baseUrl + '/account', {
      'method': 'GET',
      'dataType': 'json',
      'tokenCredentials': credentials
    });
    let data = Object.assign(preData, {
      'type': preData.guest ? 'guest' : 'logined'
    });
    return data;
  } catch (error) {
    // Network level error
    availableServer.restart();
    throw error;
  }
});
;// CONCATENATED MODULE: ./src/dualUse/ajaxes/getUserProperties.ts
/* global Credentials, SiteFilter */



const getUserProperties_bgRequest = location.href.includes('background');
/** Get list of smart settings from server
@function */

/* harmony default export */ const getUserProperties = (async credentials => {
  var _ajaxReturn, _output$timezoneChang;

  if (!credentials) {
    throw new Error('ajaxes.getUserProperties called without credentials');
  }

  if (!getUserProperties_bgRequest) {
    return (0,sendMessage/* default */.Z)({
      credentials,
      'type': 'ajaxes.getUserProperties'
    });
  }

  const baseUrl = await availableServer.getServer();
  let ajaxReturn;

  try {
    ajaxReturn = await apiRequest(baseUrl + '/properties', {
      'dataType': 'json',
      'method': 'GET',
      'tokenCredentials': credentials
    });
  } catch (error) {
    // Network level error
    if (error.status === 401) throw new Error('Not authorized user');
    availableServer.restart();
    throw error;
  } // Wrong AJAX format


  if (typeof ((_ajaxReturn = ajaxReturn) === null || _ajaxReturn === void 0 ? void 0 : _ajaxReturn.ok) !== 'boolean') {
    throw new Error('Get user properties: incorrect ajax format');
  }

  let {
    properties,
    ok
  } = ajaxReturn;
  if (!ok) throw new Error('Unathorized user');
  let output = Object.assign({}, properties);
  Object.entries(output).forEach(([property
  /*: string*/
  , value]) => {
    if (value === null) delete output[property];
  });
  output.smartSettings = output.smart_settings || [];
  delete output.smart_settings;
  output.favorites = output.favorites || [];
  output.timezoneChange = (_output$timezoneChang = output.timezoneChange) !== null && _output$timezoneChang !== void 0 ? _output$timezoneChang : false;
  output.webrtcBlock = output.webrtcBlock !== undefined ? output.webrtcBlock : null;
  return output;
});
;// CONCATENATED MODULE: ./src/dualUse/ajaxes/servers.ts



const servers_bgRequest = location.href.includes('background');
/** Get list of all servers
@function */

/* harmony default export */ const servers = (async () => {
  if (!servers_bgRequest) return (0,sendMessage/* default */.Z)({
    'type': 'ajaxes.servers'
  });
  const baseUrl = await availableServer.getServer();

  try {
    return await apiRequest(baseUrl + '/servers', {
      'dataType': 'json',
      'method': 'GET'
    });
  } catch (error) {
    // Network level error
    availableServer.restart();
    throw error;
  }
});
;// CONCATENATED MODULE: ./src/dualUse/ajaxes/setFavorites.ts
/* global Credentials */



const setFavorites_bgRequest = location.href.includes('background');
/** Set new smart settings
@function */

/* harmony default export */ const setFavorites = (async ({
  credentials,
  favorites
}) => {
  if (!setFavorites_bgRequest) {
    return (0,sendMessage/* default */.Z)({
      credentials,
      favorites,
      'type': 'ajaxes.setFavorites'
    });
  }

  const baseUrl = await availableServer.getServer();

  try {
    return await apiRequest(baseUrl + '/properties/favorites', {
      'body': JSON.stringify({
        'data': favorites
      }),
      'dataType': 'json',
      'headers': {
        'Content-Type': 'application/json'
      },
      'method': 'PUT',
      'tokenCredentials': credentials
    });
  } catch (error) {
    availableServer.restart();
    throw error;
  }
});
;// CONCATENATED MODULE: ./src/dualUse/ajaxes/setPromotionsBlock.ts
/* global Credentials */



const setPromotionsBlock_bgRequest = location.href.includes('background');
/** Set new promotions blocking state
@function */

/* harmony default export */ const setPromotionsBlock = (async ({
  credentials,
  promotionsBlock
}) => {
  if (!setPromotionsBlock_bgRequest) {
    return (0,sendMessage/* default */.Z)({
      credentials,
      promotionsBlock,
      'type': 'ajaxes.setPromotionsBlock'
    });
  }

  const baseUrl = await availableServer.getServer();

  try {
    return await apiRequest(baseUrl + '/properties/promotionsBlock', {
      'body': JSON.stringify({
        'data': promotionsBlock
      }),
      'dataType': 'json',
      'headers': {
        'Content-Type': 'application/json'
      },
      'method': 'PUT',
      'tokenCredentials': credentials
    });
  } catch (error) {
    availableServer.restart();
    throw error;
  }
});
;// CONCATENATED MODULE: ./src/dualUse/ajaxes/setSmartSettings.ts
/* global Credentials, SiteFilter */



const setSmartSettings_bgRequest = location.href.includes('background');
/** Set new smart settings
@function */

/* harmony default export */ const setSmartSettings = (async ({
  credentials,
  filters
}) => {
  if (!setSmartSettings_bgRequest) {
    return (0,sendMessage/* default */.Z)({
      'type': 'ajaxes.setSmartSettings',
      credentials,
      filters
    });
  }

  const baseUrl = await availableServer.getServer();

  try {
    return await apiRequest(baseUrl + '/properties/smart_settings', {
      'body': JSON.stringify({
        'data': filters
      }),
      'dataType': 'json',
      'headers': {
        'Content-Type': 'application/json'
      },
      'method': 'PUT',
      'tokenCredentials': credentials
    });
  } catch (error) {
    availableServer.restart();
    throw error;
  }
});
;// CONCATENATED MODULE: ./src/dualUse/ajaxes/setTimezoneChange.ts
/* global Credentials */



const setTimezoneChange_bgRequest = location.href.includes('background');
/** Set new timezone change state
@function */

/* harmony default export */ const setTimezoneChange = (async ({
  credentials,
  timezoneChange
}) => {
  if (!setTimezoneChange_bgRequest) {
    return (0,sendMessage/* default */.Z)({
      credentials,
      timezoneChange,
      'type': 'ajaxes.setTimezoneChange'
    });
  }

  const baseUrl = await availableServer.getServer();

  try {
    return await apiRequest(baseUrl + '/properties/timezoneChange', {
      'body': JSON.stringify({
        'data': timezoneChange
      }),
      'dataType': 'json',
      'headers': {
        'Content-Type': 'application/json'
      },
      'method': 'PUT',
      'tokenCredentials': credentials
    });
  } catch (error) {
    availableServer.restart();
    throw error;
  }
});
;// CONCATENATED MODULE: ./src/dualUse/ajaxes/setWebrtcBlock.ts
/* global Credentials */



const setWebrtcBlock_bgRequest = location.href.includes('background');
/** Set new WebRTC blocking state
@function */

/* harmony default export */ const setWebrtcBlock = (async ({
  credentials,
  webrtcBlock
}) => {
  if (!setWebrtcBlock_bgRequest) {
    return (0,sendMessage/* default */.Z)({
      credentials,
      'type': 'ajaxes.setWebrtcBlock',
      webrtcBlock
    });
  }

  const baseUrl = await availableServer.getServer();

  try {
    return await apiRequest(baseUrl + '/properties/webrtcBlock', {
      'body': JSON.stringify({
        'data': webrtcBlock
      }),
      'dataType': 'json',
      'headers': {
        'Content-Type': 'application/json'
      },
      'method': 'PUT',
      'tokenCredentials': credentials
    });
  } catch (error) {
    availableServer.restart();
    throw error;
  }
});
;// CONCATENATED MODULE: ./src/dualUse/ajaxes/index.ts










/* harmony default export */ const ajaxes = ({
  account: account,
  availableServerServerList: availableServerServerList,
  availableServerTest: availableServerTest,
  getUserProperties: getUserProperties,
  servers: servers,
  setFavorites: setFavorites,
  setPromotionsBlock: setPromotionsBlock,
  setSmartSettings: setSmartSettings,
  setTimezoneChange: setTimezoneChange,
  setWebrtcBlock: setWebrtcBlock
});
// EXTERNAL MODULE: ./src/dualUse/ga/full/index.js
var full = __webpack_require__(7457);
var full_default = /*#__PURE__*/__webpack_require__.n(full);
// EXTERNAL MODULE: ./src/dualUse/ga/partial/index.js
var partial = __webpack_require__(9480);
var partial_default = /*#__PURE__*/__webpack_require__.n(partial);
;// CONCATENATED MODULE: ./src/dualUse/ga/index.ts
 // eslint-disable-line import/no-unresolved

 // eslint-disable-line import/no-unresolved

/* harmony default export */ const dualUse_ga = ({
  full: (full_default()),
  partial: (partial_default())
});
;// CONCATENATED MODULE: ./src/general/tools/hideAjaxAccountData.ts
/* global AjaxAccount */

const emailValue = '--@--.--';
/** @function */

let development = account => account;
/** @function */


let hideAjaxAccountData_production = base => {
  let account = JSON.parse(JSON.stringify(base));

  if (account.type === 'logined') {
    account.credentials.email = emailValue;
    account.credentials.access_token = 'exist';
    account.credentials.ipsec_password = 'exist';
  }

  return account;
};
/** @function */


/* harmony default export */ const hideAjaxAccountData = ((production_default()).type === 'development' ? development : hideAjaxAccountData_production);
// EXTERNAL MODULE: ./src/general/tools/hideStoreAccountData.ts
var hideStoreAccountData = __webpack_require__(5134);
// EXTERNAL MODULE: ./src/general/store/index.ts + 5 modules
var general_store = __webpack_require__(4501);
// EXTERNAL MODULE: ./src/general/time.ts
var time = __webpack_require__(8575);
;// CONCATENATED MODULE: ./src/bg/account.ts
/* global StoreAccount */









/** Direct load of account without any delay
@function */

const directLoad = async () => {
  var _user$loginData;

  const timer = new DelayRecord('Account direct load');
  const {
    user
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  if ((production_default()).type === 'development') (0,log/* default */.Z)('AJAX: /account');
  return ajaxes.account((_user$loginData = user.loginData) === null || _user$loginData === void 0 ? void 0 : _user$loginData.credentials).finally(() => {
    timer.end();
  }).then(data => {
    (0,log/* default */.Z)('ajaxes.account', 'data', hideAjaxAccountData(data));
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'User: set',
      data
    });
    return general_store/* default.getStateSync */.Z.getStateSync().user; // With validUntil!
  }, error => {
    dualUse_ga.partial({
      'category': 'error',
      'action': 'browsec.account',
      'label': JSON.stringify({
        'status': error.message,
        error
      })
    });
    log/* default.warn */.Z.warn('Account load error: ', error);
    return Promise.reject(error);
  });
};
/** Load with check of user data change
@function */


const loadWithCheck = async (delayRecordName = 'Account load') => {
  var _oldAccount$loginData;

  const timer = new DelayRecord(delayRecordName);
  const {
    'user': oldAccount
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  return ajaxes.account((_oldAccount$loginData = oldAccount.loginData) === null || _oldAccount$loginData === void 0 ? void 0 : _oldAccount$loginData.credentials).finally(() => {
    timer.end();
  }).then(async newAccount => {
    (0,log/* default */.Z)('ajaxes.account', 'data', hideAjaxAccountData(newAccount));
    const {
      user
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();

    if (user === oldAccount) {
      // If old account not changed
      general_store/* default.dispatch */.Z.dispatch({
        'type': 'User: set',
        'data': newAccount
      });
    }

    return (await general_store/* default.getStateAsync */.Z.getStateAsync()).user; // With .validUntil !
  }, error => {
    dualUse_ga.partial({
      'category': 'error',
      'action': 'browsec.account',
      'label': JSON.stringify({
        'status': error.message,
        error
      })
    });
    log/* default.warn */.Z.warn('Account load error: ', error);
    return Promise.reject(error);
  });
};
/** Load account data from local storage and ... (async function)
@function */


const load = async () => {
  let {
    'user': account
  } = await general_store/* default.getStateAsync */.Z.getStateAsync(); // Does property .validUntil valid and not expired? true = yes

  const validAccount = typeof account.timestamp.validUntil === 'number' && account.timestamp.validUntil >= Date.now();
  if (validAccount) return account;

  if (account.type === 'logined') {
    (0,log/* default */.Z)('revalidating invalid account, ', (0,hideStoreAccountData/* default */.Z)(account));
    (0,log/* default */.Z)('Account load: current=%o fetched=%o', account.timestamp.version, (0,hideStoreAccountData/* default */.Z)(account));
  } // In case of guest used to make autologin through site cookies


  return loadWithCheck('Account load');
};
/** Used in external management of this extension
@function */


const reload = async () => {
  try {
    return await loadWithCheck('Account reload');
  } catch (error) {
    log/* default.error */.Z.error('failed to load account', error);
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'User: set',
      'data': {
        'guest': true,
        'type': 'guest'
      }
    });
    throw error;
  }
}; // Update every 24 hours


time/* default.onStart */.Z.onStart({
  'name': 'account load loop',
  'repeatInMinutes': 24 * 60
}, loadWithCheck);
/* harmony default export */ const bg_account = ({
  directLoad,
  load,
  reload
});
;// CONCATENATED MODULE: ./src/general/tools/QueueRequest.ts
/** @class */
/* harmony default export */ const QueueRequest = (class {
  constructor({
    request,
    syncAction
  }) {
    this._inProcess = false;
    this._queue
    /*: Array<any> | Object | string | number | null*/
    = null;
    this._request = request;
    this._syncAction = syncAction;
  }

  get currentQueueItem() {
    return this._queue;
  }

  get inProcess() {
    return this._inProcess;
  }
  /** @method */


  async set(value) {
    if (this._inProcess) {
      this._queue = value;

      this._syncAction(value);

      return;
    }

    this._inProcess = true;

    this._syncAction(value);

    return new Promise(resolve => {
      /** @function */
      let loop = async loopValue => {
        let lastQueue = loopValue;
        await this._request(loopValue);

        if (lastQueue === this._queue || this._queue === null) {
          this._queue = null;
          this._inProcess = false;
          resolve();
          return;
        }

        loop(this._queue);
      };

      loop(value); // Initial
    });
  }

});
;
;// CONCATENATED MODULE: ./src/bg/actions/favorites.ts
/* global Credentials */



const queueRequest = new QueueRequest({
  'request': async favorites => {
    var _user$loginData;

    const {
      user
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const credentials = (_user$loginData = user.loginData) === null || _user$loginData === void 0 ? void 0 : _user$loginData.credentials;
    if (!credentials) return;

    try {
      return await setFavorites({
        credentials,
        favorites
      });
    } catch (error) {}
  },
  'syncAction': favorites => {
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Favorites: set',
      'data': favorites
    });
  }
});
/** @function */

const set = queueRequest.set.bind(queueRequest);
/** @function */

const add = async country => {
  const storeState = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const favorites = new Set(storeState.favorites.slice());
  favorites.add(country);
  return set(Array.from(favorites).sort());
};
/** @function */


const remove = async country => {
  const {
    favorites
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  return set(favorites.filter(item => item !== country));
};

/* harmony default export */ const favorites = ({
  add,
  remove,
  set
});
;// CONCATENATED MODULE: ./src/bg/actions/login.ts






/** @function */

const oneCall = ({
  baseUrl,
  email,
  password
}) => apiRequest(baseUrl + '/authentication', {
  'data': {
    email,
    password
  },
  'dataType': 'json',
  'method': 'POST'
}); // Authenticate user and obtain access credentials

/** @function */


/* harmony default export */ const login = (async ({
  email,
  password
}) => {
  let baseUrl = await availableServer.getServer();

  try {
    let timer = new DelayRecord('Login');
    let account = await (async () => {
      try {
        // 2 attempts
        return await oneCall({
          baseUrl,
          email,
          password
        });
      } catch (error) {
        return oneCall({
          baseUrl,
          email,
          password
        });
      }
    })();
    timer.end();
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'User: set',
      'data': account
    });
    return account;
  } catch (error) {
    let {
      message,
      status
    } = error;
    let errorOutput
    /*: Object*/
    = {
      'error': status === 401 ? 'unauthorized' : message,
      status
    };
    if (status !== 401) availableServer.restart();
    (0,log/* default */.Z)('browsec.authenticate', 'ERROR', errorOutput);
    dualUse_ga.partial({
      'category': 'error',
      'action': 'browsec.authenticate',
      'label': JSON.stringify(errorOutput)
    });
    throw error;
  }
});
;// CONCATENATED MODULE: ./src/bg/actions/logout.ts
/* global Credentials */






/** @function */

const storeAction = () => {
  general_store/* default.dispatch */.Z.dispatch({
    'type': 'User: set',
    'data': {
      'guest': true,
      'type': 'guest'
    }
  });
};
/** Un-registers current set of credentials with the server.
@function */


/* harmony default export */ const logout = (async () => {
  var _user$loginData;

  (0,log/* default */.Z)('Logout');
  const {
    user
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const credentials = (_user$loginData = user.loginData) === null || _user$loginData === void 0 ? void 0 : _user$loginData.credentials; // Clear account data

  if (!credentials) {
    storeAction();
    return;
  }

  const baseUrl = await availableServer.getServer(); // Remove token from server

  try {
    const timer = new DelayRecord('Logout'); // Ensure that tokens/sessions have been deleted on the server, otherwise ignore

    let ajaxReturn = await apiRequest(baseUrl + '/authentication', {
      'method': 'DELETE',
      'tokenCredentials': credentials
    });
    timer.end();
    storeAction();
    return ajaxReturn;
  } catch (originalError) {
    storeAction();
    const {
      message,
      status
    } = originalError;
    const error = {
      'error': status === 401 ? 'unauthorized' : message,
      status
    };
    availableServer.restart();
    log/* default.error */.Z.error('Logout error', error);
    dualUse_ga.partial({
      'category': 'error',
      'action': 'browsec.deauthenticate',
      'label': JSON.stringify(error)
    });
  }
});
;// CONCATENATED MODULE: ./src/bg/actions/index.ts



/* harmony default export */ const actions = ({
  favorites: favorites,
  login: login,
  logout: logout
});
// EXTERNAL MODULE: ./src/bg/Counters/index.ts + 2 modules
var Counters = __webpack_require__(2522);
;// CONCATENATED MODULE: ./src/general/tools/createElement.ts
/* global TreeElement, TreeTextNode */
const possibleAttributes = Object.freeze(['autocomplete', 'colspan', 'height', 'href', 'name', 'rowspan', 'src', 'target', 'type', 'width']);
/** @function */

let typescriptConverter = preObject => Object.assign({}, preObject, // @ts-ignore
{
  'type': typeof preObject.tag === 'string' ? 'element' : 'node'
});
/** Self-looped function to create elements tree
@function */


const createElement = (preObject, classModification = className => className) => {
  let object = typescriptConverter(preObject); // Node case

  if (object.type === 'node') {
    if (typeof object.text !== 'string') {
      throw new Error('createElement called without text property');
    }

    return document.createTextNode(object.text);
  } // Element case


  const {
    attributes,
    tag
  } = object;
  let element = document.createElement(tag);

  if (object.class) {
    let className = classModification(object.class);
    element.setAttribute('class', className);
  }

  if (object.style) element.setAttribute('style', object.style);

  if (attributes) {
    for (const [attribute, value] of Object.entries(attributes)) {
      const incompatibleAttributes = !possibleAttributes.includes(attribute) && !attribute.startsWith('data-');
      if (incompatibleAttributes) continue;
      if (attribute === 'src' && tag !== 'img') continue;
      element.setAttribute(attribute, value);
    }
  }

  if (object.node) object.node(element);
  if (object.text) element.textContent = object.text;

  if (object.children) {
    const children = object.children.map(child => createElement(child, classModification));
    children.forEach(child => {
      element.appendChild(child);
    });
  }

  return element;
};

/* harmony default export */ const tools_createElement = (createElement);
// EXTERNAL MODULE: ./src/general/tools/Deferred.ts
var Deferred = __webpack_require__(5691);
;// CONCATENATED MODULE: ./src/bg/Diagnostics/close.ts

const desiredPage = code_default().runtime.getURL('/pages/diagnostics/diagnostics.html');
/** @method */

/* harmony default export */ async function Diagnostics_close() {
  if (typeof browser !== 'undefined') {
    let tabs = await code_default().tabs.query();
    let ids = tabs.filter(({
      url
    }) => url === desiredPage).map(({
      id
    }) => id);
    if (ids.length) code_default().tabs.remove(ids);
    return;
  } // Chrome


  let tabs = code_default().extension.getViews({
    'type': 'tab'
  });
  tabs.filter(({
    location
  }) => location.href === desiredPage).forEach(tab => {
    tab.close();
  });
}
;
;// CONCATENATED MODULE: ./src/bg/Diagnostics/open.ts

const open_desiredPage = code_default().runtime.getURL('/pages/diagnostics/diagnostics.html');
const open_manifestVersion = chrome.runtime.getManifest().manifest_version;
/** @method */

/* harmony default export */ async function Diagnostics_open() {
  const existenceCheck = await (async () => {
    if (open_manifestVersion === 2) {
      const tabs = code_default().extension.getViews({
        'type': 'tab'
      });
      return tabs.some(({
        location
      }) => location.href === open_desiredPage);
    } else {
      const existenceCheck = await code_default().runtime.sendMessage({
        'type': 'Diagnostics page existence check'
      });
      return existenceCheck;
    }
  })();

  if (existenceCheck) {
    // Focus tab
    // Browser.tabs.query does not work in Chrome due to lack of 'tabs' permission
    if (typeof browser !== 'undefined' || open_manifestVersion === 3) {
      const tabs = await code_default().tabs.query({
        'url': open_desiredPage
      });

      if (tabs.length) {
        code_default().tabs.update(tabs[0].id, {
          'active': true,
          'highlighted': true
        });
      }
    } else {
      const pseudoTabs = code_default().extension.getViews({
        'type': 'tab'
      }).filter(({
        location
      }) => location.href === open_desiredPage);
      if (pseudoTabs.length) pseudoTabs[0].focus();
    }

    return;
  }

  this.terminate();
  code_default().tabs.create('/pages/diagnostics/diagnostics.html');
}
;
;// CONCATENATED MODULE: ./src/bg/Diagnostics/possibleSteps.ts
// List of possible steps in this browser. Order matters
const possibleSteps = typeof browser === 'undefined' ? [// Chrome
'proxyApi', 'noProxyExtensions', 'httpConnection', 'httpsConnection', 'browsecApi', 'httpProxyConnection', 'httpsProxyConnection'] : [// FF
'httpConnection', 'httpsConnection', 'browsecApi'];
/* harmony default export */ const Diagnostics_possibleSteps = (Object.freeze(possibleSteps));
;// CONCATENATED MODULE: ./src/bg/Diagnostics/domainsRequest.ts
/* global DiagnosticsRequestState, OnErrorOccurredDetails */


const {
  _
} = self;
/** @function */

/* harmony default export */ const domainsRequest = (async domains => {
  // Add extra randomized string to domain urls to ignore cache
  let urls = domains.map(domain => domain + '?_=' + Math.floor(Math.random() * 1000000000));
  let errors = [];
  /** @function */

  let listener = ({
    error,
    url
  }) => {
    if (!urls.includes(url)) return;
    errors.push('Browser internal: ' + error);
  };

  code_default().webRequest.onErrorOccurred.addListener(listener, {
    'urls': ['<all_urls>']
  });
  let states = await Promise.all(urls.map(domain => new Promise(resolve => {
    let resolved
    /*: boolean*/
    = false;
    const controller = typeof AbortController === 'function' ? new AbortController() : undefined;

    (async () => {
      try {
        let options = {
          'method': 'GET'
        };
        if (controller) options.signal = controller.signal;
        await (0,ajax/* default */.Z)(domain, options);
        resolved = true;
        resolve(true);
      } catch (error) {
        let {
          message,
          status
        } = error;
        errors.push(`Browser external error |${status || 'no status'}| for domain ${domain}: ` + message);
        resolved = true;
        resolve(false);
      }
    })();

    setTimeout(() => {
      var _controller$abort;

      if (resolved) return;
      controller === null || controller === void 0 ? void 0 : (_controller$abort = controller.abort) === null || _controller$abort === void 0 ? void 0 : _controller$abort.call(controller);
      errors.push('Browsec: timeout reached');
      resolve(false);
    }, 30 * 1000);
  })));
  code_default().webRequest.onErrorOccurred.removeListener(listener);
  let requests = {
    'total': states.length,
    'success': states.filter(value => value).length
  };

  let state = (() => {
    if (!requests.success) return 'error';
    if (requests.success === requests.total) return 'success';
    return 'warning';
  })(); // Remove dublicate errors


  errors = _.uniq(errors);
  return {
    errors,
    requests,
    state
  };
});
;// CONCATENATED MODULE: ./src/pacScript.js
/* harmony default export */ const pacScript = ("/*global dnsDomainIs, isPlainHostName, isInNet, isInNetEx, __Countries__, __IgnoreDomains__, __SiteFilters__, __GlobalReturn__ */\n\n/**\nNOTE Never use dnsResolve!*/\nconst countries = __Countries__;\nconst globalReturn = __GlobalReturn__;\n\nconst siteFilters = __SiteFilters__.map(({\n  format,\n  value,\n  country\n}) => {\n  if (format === 'regex') value = new RegExp(value);\n  return {\n    format,\n    value,\n    country\n  };\n});\n\nconst ipRanges = [['0.0.0.0', '255.0.0.0'], ['10.0.0.0', '255.0.0.0'], ['127.0.0.0', '255.0.0.0'], ['169.254.0.0', '255.255.0.0'], ['172.16.0.0', '255.240.0.0'], ['192.0.2.0', '255.255.255.0'], ['192.88.99.0', '255.255.255.0'], ['192.168.0.0', '255.255.0.0'], ['198.18.0.0', '255.254.0.0'], ['224.0.0.0', '240.0.0.0'], ['240.0.0.0', '240.0.0.0']];\n\nfunction FindProxyForURL(url, host) {\n  // eslint-disable-line\n  host = host.toLowerCase();\n  /** @type {string} */\n\n  const domain = host.split(':')[0]; // By docs it could contain port, in FF does not contain port\n\n  const domainIs = function (host, domain) {\n    return host === domain || dnsDomainIs(host, '.' + domain);\n  };\n\n  const directCondition\n  /*: boolean*/\n  = (() => {\n    if (isPlainHostName(host)) return true;\n\n    if (typeof isInNetEx !== 'undefined') {\n      if (isInNetEx(host, 'fc00::/7') || isInNetEx(host, 'fe80::/10')) {\n        return true;\n      }\n    }\n\n    if (!/^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$/.test(host)) {\n      return false;\n    } // Don't proxy non-routable addresses (RFC 3330)\n\n\n    return ipRanges.some(([start, end]) => isInNet(host, start, end));\n  })();\n\n  if (directCondition) return 'DIRECT';\n\n  if (__IgnoreDomains__.some(item => domainIs(host, item))) {\n    return 'DIRECT';\n  } // Site filters looping\n\n\n  const siteFilter = siteFilters.find(filter => {\n    switch (filter.format) {\n      case 'domain':\n        return domain === filter.value || domain.endsWith('.' + filter.value);\n\n      case 'full domain':\n        return domain === filter.value;\n\n      case 'regex':\n        return filter.value.test(domain);\n\n      default:\n        return false;\n    }\n  });\n\n  if (!siteFilter) {\n    return globalReturn ? countries[globalReturn] : 'DIRECT';\n  }\n\n  return siteFilter.country ? countries[siteFilter.country] : 'DIRECT';\n}");
;// CONCATENATED MODULE: ./src/dualUse/proxy/setActualPac/chrome.ts
/* global LowLevelPac */
 // @ts-ignore


const chrome_pacScript = pacScript.replace(/\/\/.*/g, '') // Remove comments
.replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
.replace(/\r/g, '').replace(/\n/g, ' ') // Remove new line symbols
.replace(/\s{2,}/g, ' ').trim(); // Less spaces

/* harmony default export */ const setActualPac_chrome = (async lowLevelPac => {
  const {
    browsecCountry,
    countries,
    globalReturn,
    ignoredDomains,
    premiumCountries,
    siteFilters
  } = lowLevelPac;

  if (!browsecCountry && !globalReturn && !siteFilters.length) {
    await code_default().proxy.settings.clear({
      'scope': 'regular'
    });
  } else {
    const jsonCountries = Object.fromEntries(Object.entries(Object.assign({}, premiumCountries, countries)).map(([key, value]) => [key, value.join('; ')]));
    const filters = siteFilters.slice();

    if (browsecCountry) {
      filters.push({
        'format': 'domain',
        'country': browsecCountry,
        'value': 'browsec.com'
      });
    }

    const pacScriptText = chrome_pacScript.replace(/__Countries__/g, JSON.stringify(jsonCountries)).replace(/__IgnoreDomains__/g, JSON.stringify(ignoredDomains)).replace(/__GlobalReturn__/g, JSON.stringify(globalReturn)).replace(/__SiteFilters__/g, JSON.stringify(filters));
    await code_default().proxy.settings.set({
      'scope': 'regular',
      'value': {
        'mode': 'pac_script',
        'pacScript': {
          'data': pacScriptText
        }
      }
    });
  }
});
;// CONCATENATED MODULE: ./src/general/tools/findMatchingFilterForDomain.ts
/* harmony default export */ const findMatchingFilterForDomain = ((filters, domain) => {
  return filters.find(item => {
    if (item.disabled) return false; // Ignore disabled filters

    switch (item.format) {
      case 'domain':
        return domain.endsWith('.' + item.value) || domain === item.value;

      case 'full domain':
        return domain === item.value;

      case 'regex':
        return item.value.test(domain);
    }

    return false; // Error case
  });
});
;// CONCATENATED MODULE: ./src/dualUse/proxy/setActualPac/firefox.ts
/* global LowLevelPac, PacSiteFilter, ProxyProxyinfo */


const directValue = {
  'type': 'direct'
};
/** @function */

const convertAddr = ipchars => {
  const bytes = ipchars.split('.').map(item => Number(item));
  return (bytes[0] & 0xff) << 24 | (bytes[1] & 0xff) << 16 | (bytes[2] & 0xff) << 8 | bytes[3] & 0xff;
};
/** @function */


const dnsDomainIs = (host, domain) => host.length >= domain.length && host.substring(host.length - domain.length) === domain;
/** @function */


const domainIs = (host, domain) => host === domain || dnsDomainIs(host, '.' + domain);
/** @function */


const isIpv6 = address => {
  if (!/^[0-9a-f:]+$/.test(address)) return false;
  const matches = address.match(/::/g);
  if (matches && matches.length >= 2) return false; // Not correct IPv6 address

  const parts = address.replace(/^::/, '').replace(/::$/, '').replace('::', ':').split(':');
  return !parts.some(part => !/^[0-9a-f]{1,4}$/.test(part));
};
/** @function */


const isInNet = (ipaddr, pattern, maskstr) => {
  let preTest
  /*: string[] | null*/
  = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(ipaddr);
  if (preTest === null) return false;
  let test = preTest.map(item => Number(item));
  const condition = test[1] > 255 || test[2] > 255 || test[3] > 255 || test[4] > 255;
  if (condition) return false; // not an IP address

  const host = convertAddr(ipaddr);
  const pat = convertAddr(pattern);
  const mask = convertAddr(maskstr);
  return (host & mask) === (pat & mask);
};
/**
@function
@param ipAddress - IP6 address
@param ipPrefix - A string containing colon delimited IP prefix with top n bits specified
  in the bit field (i.e. 3ffe:8311:ffff::/48 or 123.112.0.0/16)
@return - true if the host is in the given subnet, else false */


const isInNetEx = (ipAddress, ipPrefix) => {
  // 1. Testing ipAddress is correct IPv6 address
  if (!isIpv6(ipAddress)) return false; // 2. Testing ipPrefix is correct IPv6 + correct limitation

  if (!ipPrefix.includes('/')) return false;
  let [ipPrefixHost, ipPrefixLimitString] = ipPrefix.split('/');
  if (!isIpv6(ipPrefixHost)) return false;
  let ipPrefixLimit = Number(ipPrefixLimitString);
  if (!ipPrefixLimit || ipPrefixLimit < 0 || ipPrefixLimit > 128) return false; // Converting :: to full zeros

  ipAddress = ipv6ToBinaryString(ipAddress).slice(0, ipPrefixLimit);
  ipPrefixHost = ipv6ToBinaryString(ipPrefixHost).slice(0, ipPrefixLimit);
  return ipAddress === ipPrefixHost; // If all correct -> return true
};
/** Convert IPv6 address to view like 10010100
@function */


const ipv6ToBinaryString = address => {
  /**
  @function
  @param part - with length 4
  @return with length 4 */
  let convertPartToBinary = part => parseInt(part, 16).toString(2).padStart(16, '0'); // No double colon


  if (!address.includes('::')) {
    return address.split(':').map(part => convertPartToBinary(part)).join('');
  } // Double colon at end


  if (address.endsWith('::')) {
    let parts
    /*: Array<string>*/
    = address.replace(/::$/, '').split(':').map(part => convertPartToBinary(part));
    const zeroParts = Array(8 - parts.length).fill('0000000000000000');
    return parts.concat(zeroParts).join('');
  } // Double colon in middle


  let sections
  /*: string[][]*/
  = address.split('::').map(section => section.split(':').map(part => convertPartToBinary(part)));
  const length = sections.reduce((carry, section) => carry + section.length, 0); // Insert zero parts in middle

  sections.splice(1, 0, Array(8 - length).fill('0000000000000000'));
  const parts = sections.flat();
  return parts.join('');
};
/** @function */


const isPlainHostName = host => host.search('\\.') === -1;
/** @function */


/* harmony default export */ const firefox = ((() => {
  if (typeof browser === 'undefined') {
    // Chrome
    return lowLevelPac => {};
  } // Firefox


  let ignoredDomains = [];
  let countries = {};
  let globalReturn = directValue;
  let siteFilters = [];
  /*let onRequestFilters: Array<{
    'value': string,
    'format': 'domain',
    'pacReturn': ProxyProxyinfo | ProxyProxyinfo[]
  } | {
    'value': string,
    'format': 'full domain',
    'pacReturn': ProxyProxyinfo | ProxyProxyinfo[]
  } | {
    'value': RegExp,
    'format': 'regex',
    'pacReturn': ProxyProxyinfo | ProxyProxyinfo[]
  }> = [];*/

  code_default().proxy.onRequest.addListener(({
    fromCache,
    url
  }) => {
    let urlObject;

    try {
      urlObject = new URL(url);
    } catch (error) {
      return directValue;
    }

    let {
      'hostname': host,
      protocol
    } = urlObject;

    if (!['ftp:', 'http:', 'https:', 'wss:'].includes(protocol)) {
      return directValue;
    }

    const directCondition = (() => {
      const condition1 = isPlainHostName(host);
      const hostIP = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/.test(host) ? host : null; // Don't proxy non-routable addresses (RFC 3330)

      const condition2 = hostIP && (isInNet(hostIP, '0.0.0.0', '255.0.0.0') || isInNet(hostIP, '10.0.0.0', '255.0.0.0') || isInNet(hostIP, '127.0.0.0', '255.0.0.0') || isInNet(hostIP, '169.254.0.0', '255.255.0.0') || isInNet(hostIP, '172.16.0.0', '255.240.0.0') || isInNet(hostIP, '192.0.2.0', '255.255.255.0') || isInNet(hostIP, '192.88.99.0', '255.255.255.0') || isInNet(hostIP, '192.168.0.0', '255.255.0.0') || isInNet(hostIP, '198.18.0.0', '255.254.0.0') || isInNet(hostIP, '224.0.0.0', '240.0.0.0') || isInNet(hostIP, '240.0.0.0', '240.0.0.0'));
      const condition3 = isInNetEx(host, 'fc00::/7') || isInNetEx(host, 'fe80::/10');
      return Boolean(condition1 || condition2 || condition3);
    })();

    if (directCondition) return directValue;
    if (fromCache) return directValue;
    if (ignoredDomains.some(item => domainIs(host, item))) return directValue; // Site filters looping
    // @ts-ignore

    const filter = findMatchingFilterForDomain( // @ts-ignore
    siteFilters, host);
    if (!filter || !filter.country) return globalReturn;
    return countries[filter.country];
  }, {
    'urls': ['<all_urls>']
  });
  return lowLevelPac => {
    const {
      browsecCountry
    } = lowLevelPac;
    ignoredDomains = lowLevelPac.ignoredDomains;
    countries = Object.fromEntries(Object.entries(Object.assign({}, lowLevelPac.premiumCountries, lowLevelPac.countries)).map(([country, value]) => {
      const proxyEntries = [];

      for (const entry of value) {
        let [typeUppercase, other] = entry.split(' ');
        const type = typeUppercase.toLowerCase();
        if (type !== 'https' && type !== 'proxy' && type !== 'socks') continue;
        const [host, port] = other.split(':');
        proxyEntries.push({
          type,
          host,
          port,
          'failoverTimeout': 15
        });
      }

      return [country, proxyEntries];
    }));
    siteFilters = lowLevelPac.siteFilters.slice();

    if (browsecCountry) {
      siteFilters.push({
        'format': 'domain',
        'country': browsecCountry,
        'value': 'browsec.com'
      });
    }

    globalReturn = (() => {
      if (!lowLevelPac.globalReturn) return directValue;
      return countries[lowLevelPac.globalReturn];
    })();
  };
})());
;// CONCATENATED MODULE: ./src/dualUse/proxy/setActualPac/index.ts
/* global LowLevelPac */


/* harmony default export */ const setActualPac = (lowLevelPac => {
  if (typeof browser === 'undefined') setActualPac_chrome(lowLevelPac);else firefox(lowLevelPac);
});
;// CONCATENATED MODULE: ./src/dualUse/proxy/index.ts
/* global LowLevelPac */



const controlledStates = Object.freeze(['controllable_by_this_extension', 'controlled_by_this_extension']);
/** @function */

const isControlled = async () => {
  if (typeof browser !== 'undefined') return true; // FF always true

  const {
    levelOfControl
  } = await code_default().proxy.settings.get({
    'incognito': false
  });
  return controlledStates.includes(levelOfControl);
};
/** @function */


const proxy_set = async lowLevelPac => {
  await setActualPac(lowLevelPac);
};
/** @function */


const setFromStore = async () => {
  const {
    lowLevelPac
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  await setActualPac(lowLevelPac);
};

/* harmony default export */ const proxy = ({
  isControlled,
  set: proxy_set,
  setFromStore
});
;// CONCATENATED MODULE: ./src/bg/Diagnostics/steps/httpConnection.ts
/* global DiagnosticsStepState */



const domains = Object.freeze(['http://example.com', 'http://www.root-servers.org/']);
/** Check HTTP connection without proxy
@function */

/* harmony default export */ const httpConnection = (async () => {
  // Save old proxy state
  const {
    lowLevelPac
  } = await general_store/* default.getStateAsync */.Z.getStateAsync(); // Change proxy state to full direct mode

  await proxy.set({
    'browsecCountry': null,
    'countries': {},
    'globalReturn': null,
    'ignoredDomains': [],
    'premiumCountries': {},
    'siteFilters': []
  }); // Make ajax requests

  const domainsRequestState = await domainsRequest(domains.slice()); // Set old proxy state

  await proxy.set(lowLevelPac); // Return test result

  return Object.assign({
    'name': 'httpConnection'
  }, domainsRequestState);
});
;// CONCATENATED MODULE: ./src/bg/Diagnostics/steps/httpsConnection.ts
/* global DiagnosticsStepState */



const httpsConnection_domains = Object.freeze(['https://example.com', 'https://www.iana.org/favicon.ico', 'https://www.ripe.net/favicon.ico', 'https://www.mozilla.org/favicon.ico']);
/** Check HTTPS connection without proxy
@function */

/* harmony default export */ const httpsConnection = (async () => {
  // Save old proxy state
  const {
    lowLevelPac
  } = await general_store/* default.getStateAsync */.Z.getStateAsync(); // Change proxy state to full direct mode

  await proxy.set({
    'browsecCountry': null,
    'countries': {},
    'globalReturn': null,
    'ignoredDomains': [],
    'premiumCountries': {},
    'siteFilters': []
  }); // Make ajax requests

  const domainsRequestState = await domainsRequest(httpsConnection_domains.slice()); // Set old proxy state and

  await proxy.set(lowLevelPac); // Return test result

  return Object.assign({
    'name': 'httpsConnection'
  }, domainsRequestState);
});
;// CONCATENATED MODULE: ./src/bg/Diagnostics/steps/browsecApi.ts
/* global DiagnosticsStepState */






/** Check Browsec API availability without proxy
@function */
/* harmony default export */ const browsecApi = (async () => {
  const testUrls = (await general_storage/* default.get */.Z.get('availableServerList')) || production_default().apiServerUrls.map(item => item + 'v1');

  if (!testUrls.some(url => url.includes('/browsec.com/'))) {
    testUrls.push('https://browsec.com/api/v1');
  } // Save old proxy state


  const {
    lowLevelPac
  } = await general_store/* default.getStateAsync */.Z.getStateAsync(); // Change proxy state to full direct mode

  await proxy.set({
    'browsecCountry': null,
    'countries': {},
    'globalReturn': null,
    'ignoredDomains': [],
    'premiumCountries': {},
    'siteFilters': []
  });
  const requests = {
    'success': 0,
    'total': 0
  }; // Make ajax requests

  let errors = [];
  const states = [];
  let success = false;

  for (const testUrl of testUrls) {
    var _state$requests, _state$requests2, _state$requests3;

    const state = await domainsRequest([testUrl + '/servers']);
    {
      const {
        errors
      } = state;
      const output = {
        'state': state.state,
        'url': testUrl
      };

      if (errors && errors.length) {
        output.error = errors[0];
      }

      states.push(output);
    }
    if ((_state$requests = state.requests) !== null && _state$requests !== void 0 && _state$requests.success) success = true;
    requests.success += ((_state$requests2 = state.requests) === null || _state$requests2 === void 0 ? void 0 : _state$requests2.success) || 0;
    requests.total += ((_state$requests3 = state.requests) === null || _state$requests3 === void 0 ? void 0 : _state$requests3.total) || 0; // @ts-ignore

    Array.prototype.push.apply(errors, state.errors);
  }

  errors = Array.from(new Set(errors)); // Set old proxy state

  await proxy.set(lowLevelPac); // Return test result

  const state = success ? 'success' : 'error';
  const output = {
    'name': 'browsecApi',
    errors,
    'extra': states,
    requests,
    state
  };
  return output;
});
;// CONCATENATED MODULE: ./src/bg/Diagnostics/filterProxyExtensions.ts
/* global Extension, ExtensionInfo */

/** No other proxy extensions (Chrome only)
@function */

/* harmony default export */ const filterProxyExtensions = (extensions => {
  if (!extensions) return [];
  return extensions.filter(({
    enabled,
    id,
    permissions
  }) => enabled && permissions.includes('proxy') && (code_default()).runtime.id !== id // Ignore our extension
  ).map(({
    icons,
    id,
    name
  }) => {
    var _ref;

    let extension = {
      id,
      name
    };
    let iconUrl = (_ref = icons[1] || icons[0]) === null || _ref === void 0 ? void 0 : _ref.url;

    if (iconUrl) {
      extension.icon = `chrome://favicon/size/38/chrome-extension://${id}/`;
    }

    return extension;
  });
});
;// CONCATENATED MODULE: ./src/bg/Diagnostics/steps/proxyApi.ts
/* global Extension, ExtensionInfo */


const proxyApi_name = 'proxyApi';
/** Proxy API is available
@function */

/* harmony default export */ const proxyApi = (async rawExtensions => {
  // FF -> always exist
  if (typeof browser !== 'undefined') return {
    name: proxyApi_name,
    'state': 'success'
  }; // Chrome

  const underControl = await proxy.isControlled();
  if (underControl) return {
    name: proxyApi_name,
    'state': 'success'
  };
  const extensions = filterProxyExtensions(rawExtensions);
  return {
    name: proxyApi_name,
    'state': 'error',
    extensions
  };
});
;// CONCATENATED MODULE: ./src/bg/Diagnostics/steps/noProxyExtensions.ts
/* global DiagnosticsStepState, Extension, ExtensionInfo */

/** No other proxy extensions (Chrome only)
@function */

/* harmony default export */ const noProxyExtensions = (async (rawExtensions, proxyApiError) => {
  if (typeof browser !== 'undefined' || proxyApiError) {
    return {
      'name': 'noProxyExtensions',
      'state': 'skip'
    };
  }

  let extensions = filterProxyExtensions(rawExtensions);
  return {
    'name': 'noProxyExtensions',
    'state': extensions.length ? 'warning' : 'success',
    extensions
  };
});
;// CONCATENATED MODULE: ./src/bg/Diagnostics/steps/httpProxyConnection.ts
/* global DiagnosticsStepState */




const defaultCountry = (production_default()).proxy.defaultCountry || 'nl';
const httpProxyConnection_domains = Object.freeze(['http://example.com', 'http://www.root-servers.org/']);
/** Check HTTP connection under proxy
@function */

/* harmony default export */ const httpProxyConnection = (async () => {
  if (typeof browser !== 'undefined') {
    return {
      'name': 'httpProxyConnection',
      'state': 'skip'
    };
  } // Save old proxy state


  const {
    lowLevelPac,
    userPac
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const country = userPac.country || defaultCountry; // Change proxy state to full proxy mode

  await proxy.set({
    'browsecCountry': null,
    'countries': lowLevelPac.countries,
    'globalReturn': country,
    'ignoredDomains': [],
    'premiumCountries': {},
    'siteFilters': []
  }); // Make ajax requests

  const state = await domainsRequest(httpProxyConnection_domains.slice()); // Set old proxy state

  await proxy.set(lowLevelPac); // Return test result

  return Object.assign(state, {
    'name': 'httpProxyConnection'
  });
});
;// CONCATENATED MODULE: ./src/bg/Diagnostics/steps/httpsProxyConnection.ts
/* global DiagnosticsStepState */




const httpsProxyConnection_defaultCountry = (production_default()).proxy.defaultCountry || 'nl';
const httpsProxyConnection_domains = Object.freeze(['https://example.com', 'https://www.iana.org/favicon.ico', 'https://www.ripe.net/favicon.ico', 'https://www.mozilla.org/favicon.ico']);
/** Check HTTPS connection under proxy
@function */

/* harmony default export */ const httpsProxyConnection = (async () => {
  if (typeof browser !== 'undefined') {
    return {
      'name': 'httpsProxyConnection',
      'state': 'skip'
    };
  } // Save old proxy state


  const {
    lowLevelPac,
    userPac
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const country = userPac.country || httpsProxyConnection_defaultCountry; // Change proxy state to full proxy mode

  await proxy.set({
    'browsecCountry': null,
    'countries': lowLevelPac.countries,
    'globalReturn': country,
    'ignoredDomains': [],
    'premiumCountries': {},
    'siteFilters': []
  }); // Make ajax requests

  const state = await domainsRequest(httpsProxyConnection_domains.slice()); // Set old proxy state

  await proxy.set(lowLevelPac); // Return test result

  return Object.assign(state, {
    'name': 'httpsProxyConnection'
  });
});
;// CONCATENATED MODULE: ./src/bg/Diagnostics/start.ts
/* global DiagnosticsStepState, ExtensionInfo */
// General

 // Diagnostics only

 // Steps








/** Start process of diagnostics
@method */

/* harmony default export */ function start(extensions) {
  /** @function */
  let setSingleState = newState => {
    let name
    /*: string*/
    = newState.name;

    let index
    /*: integer*/
    = this._states.findIndex(step => step.name === name);

    this._states[index] = newState;

    this._listeners.forEach(listener => {
      listener(this._states);
    });
  };

  let currentStamp
  /*: integer*/
  = this._stamp; // Deferreds which initiates step start

  let startDeferreds = Object.fromEntries(Diagnostics_possibleSteps.map((stepName
  /*: string*/
  ) => {
    let deferred = new Deferred/* default */.Z();
    deferred.then(() => {
      setSingleState({
        'name': stepName,
        'state': 'in process'
      });
    });
    return [stepName, deferred];
  })); // Deferreds of end state

  let endDeferreds = Object.fromEntries(Diagnostics_possibleSteps.map((stepName
  /*: string*/
  ) => {
    let deferred = new Deferred/* default */.Z();
    deferred.then(value => {
      setSingleState(Object.assign({
        'name': stepName
      }, value));
    });
    return [stepName, deferred];
  }));
  /** @function */

  let getIndexDeferred = stepName => {
    let index
    /*: integer*/
    = Diagnostics_possibleSteps.indexOf(stepName);
    return {
      index,
      'deferred': {
        'start': startDeferreds[stepName],
        'end': endDeferreds[stepName]
      }
    };
  }; // Step: Proxy API is available


  if (Diagnostics_possibleSteps.includes('proxyApi')) {
    let {
      index,
      deferred
    } = getIndexDeferred('proxyApi');

    (async () => {
      await deferred.start;
      let state = await proxyApi(extensions);
      if (currentStamp !== this._stamp) return;
      deferred.end.resolve(state);
      (0,log/* default */.Z)('Diagnostics. Proxy API: ', state); // Next iteration

      let nextStep
      /*: string | void*/
      = Diagnostics_possibleSteps[index + 1];

      if (nextStep) {
        deferred.end.then(() => {
          startDeferreds[nextStep].resolve();
        });
      }
    })();
  } // Step: Other extensions with proxy (Chrome only)


  if (Diagnostics_possibleSteps.includes('noProxyExtensions')) {
    let {
      index,
      deferred
    } = getIndexDeferred('noProxyExtensions');

    (async () => {
      await deferred.start;
      let state = await noProxyExtensions(extensions, this._states.find(({
        name
      }) => name === 'proxyApi').state !== 'error');
      if (currentStamp !== this._stamp) return;
      deferred.end.resolve(state);
      (0,log/* default */.Z)('Diagnostics. No other proxy extensions: ', state); // Next iteration

      let nextStep
      /*: string | void*/
      = Diagnostics_possibleSteps[index + 1];

      if (nextStep) {
        deferred.end.then(() => {
          startDeferreds[nextStep].resolve();
        });
      }
    })();
  } // Step: HTTP connection


  if (Diagnostics_possibleSteps.includes('httpConnection')) {
    let {
      index,
      deferred
    } = getIndexDeferred('httpConnection');

    (async () => {
      await deferred.start;

      let proxyApiState = this._states.find(({
        name
      }) => name === 'proxyApi');

      let state = (proxyApiState === null || proxyApiState === void 0 ? void 0 : proxyApiState.state) !== 'error' ? await httpConnection() : {
        'name': 'httpConnection',
        'state': 'skip'
      }; // No need to make any tests in case of error

      if (currentStamp !== this._stamp) return;
      deferred.end.resolve(state);
      (0,log/* default */.Z)('Diagnostics. HTTP connection: ', state); // Next iteration

      let nextStep
      /*: string | void*/
      = Diagnostics_possibleSteps[index + 1];
      if (!nextStep) return;
      deferred.end.then(() => {
        startDeferreds[nextStep].resolve();
      });
    })();
  } // Step: HTTPS connection


  if (Diagnostics_possibleSteps.includes('httpsConnection')) {
    let {
      index,
      deferred
    } = getIndexDeferred('httpsConnection');

    (async () => {
      await deferred.start;

      let proxyApiState = this._states.find(({
        name
      }) => name === 'proxyApi');

      let state = (proxyApiState === null || proxyApiState === void 0 ? void 0 : proxyApiState.state) !== 'error' ? await httpsConnection() : {
        'name': 'httpsConnection',
        'state': 'skip'
      }; // No need to make any tests in case of error

      if (currentStamp !== this._stamp) return;
      deferred.end.resolve(state);
      (0,log/* default */.Z)('Diagnostics. HTTPS connection: ', state);
      let nextStep
      /*: string | void*/
      = Diagnostics_possibleSteps[index + 1];
      if (!nextStep) return;
      deferred.end.then(() => {
        startDeferreds[nextStep].resolve();
      });
    })();
  } // Step: Ajax Browsec API is available


  if (Diagnostics_possibleSteps.includes('browsecApi')) {
    let {
      index,
      deferred
    } = getIndexDeferred('browsecApi');
    deferred.start.then(() => {
      /** @type {Boolean} */
      let condition = ['httpConnection', 'httpsConnection'].map(stepName => {
        let state = this._states.find(({
          name
        }) => name === stepName).state;

        return !['error', 'skip'].includes(state);
      }).some(value => value);
      return condition ? browsecApi() : {
        'name': 'browsecApi',
        'state': 'skip'
      }; // No need to make any tests in case of error
    }).then(state => {
      if (currentStamp !== this._stamp) return;
      deferred.end.resolve(state);
      (0,log/* default */.Z)('Diagnostics. Browsec API: ', state);
      /** @type {(String|undefined)} - Next iteration */

      let nextStep = Diagnostics_possibleSteps[index + 1];

      if (nextStep) {
        deferred.end.then(() => {
          startDeferreds[nextStep].resolve();
        });
      }
    });
  } // Step: Connect to proxy and make HTTP request (Chrome only)


  if (Diagnostics_possibleSteps.includes('httpProxyConnection')) {
    let {
      index,
      deferred
    } = getIndexDeferred('httpProxyConnection');
    deferred.start.then(() => {
      /** @type {Boolean} */
      let condition = ['noProxyExtensions', 'proxyApi'].map(stepName => this._states.find(({
        name
      }) => name === stepName).state !== 'error').every(value => value);
      return condition ? httpProxyConnection() : {
        'name': 'httpProxyConnection',
        'state': 'skip'
      }; // No need to make any tests in case of error
    }).then(state => {
      if (currentStamp !== this._stamp) return;
      deferred.end.resolve(state);
      (0,log/* default */.Z)('Diagnostics. Connect to proxy and make ajax request: ', state);
      /** @type {(String|undefined)} - Next iteration */

      let nextStep = Diagnostics_possibleSteps[index + 1];

      if (nextStep) {
        deferred.end.then(() => {
          startDeferreds[nextStep].resolve();
        });
      }
    });
  } // Step: Connect to proxy and make HTTP request (Chrome only)


  if (Diagnostics_possibleSteps.includes('httpsProxyConnection')) {
    let {
      index,
      deferred
    } = getIndexDeferred('httpsProxyConnection');
    deferred.start.then(() => {
      /** @type {} */
      let condition
      /*: boolean*/
      = ['noProxyExtensions', 'proxyApi'].map(stepName => this._states.find(({
        name
      }) => name === stepName).state !== 'error').every(value => value);
      return condition ? httpsProxyConnection() : {
        'name': 'httpsProxyConnection',
        'state': 'skip'
      }; // No need to make any tests in case of error
    }).then(state => {
      if (currentStamp !== this._stamp) return;
      deferred.end.resolve(state);
      (0,log/* default */.Z)('Diagnostics. Connect to proxy and make ajax request: ', state);
      /** @type {(String|undefined)} - Next iteration */

      let nextStep = Diagnostics_possibleSteps[index + 1];

      if (nextStep) {
        deferred.end.then(() => {
          startDeferreds[nextStep].resolve();
        });
      }
    });
  } // Initial start


  startDeferreds[Diagnostics_possibleSteps[0]].resolve();
}
;
;// CONCATENATED MODULE: ./src/bg/Diagnostics/index.ts
/* global DiagnosticsStepState, ExtensionInfo */




class Diagnostics {
  constructor() {
    this._listeners = []; // States of loading of each specific test

    this._states = Diagnostics_possibleSteps.map(name => ({
      name,
      'state': 'not started'
    })); // Stamp used to get current iteration

    this._stamp = Math.floor(Math.random() * 1000000000);
  }
  /** Close all opened dignostic pages
  @method */


  close() {
    return Diagnostics_close.call(this);
  }
  /** Open diagnostics page
  @method */


  open() {
    return Diagnostics_open.call(this);
  }
  /** Start process of diagnostics
  @method */


  start(extensions) {
    return start.call(this, extensions);
  }
  /** Terminate process of diagnostics if user closes page
  @method */


  terminate() {
    // Reset states
    this._states = Diagnostics_possibleSteps.map(name => ({
      name,
      'state': 'not started'
    }));

    this._listeners.forEach(listener => {
      listener(this._states);
    }); // Renew stamp


    this._stamp = Math.floor(Math.random() * 1000000000);
  }
  /** Get list of possible steps in this browser
  @method */


  getSteps() {
    return Diagnostics_possibleSteps;
  }
  /** Get current state
  @method */


  getState() {
    return this._states;
  }
  /** @method */


  addListener(listener) {
    this._listeners.push(listener);
  }
  /** @method */


  removeListener(listener) {
    this._listeners = this._listeners.filter(item => item !== listener);
  }

}
;
/* harmony default export */ const bg_Diagnostics = (new Diagnostics());
;// CONCATENATED MODULE: ./src/bg/domainZoneList/defaultList.json
const defaultList_namespaceObject = JSON.parse('["ac","ad","ae","aero","af","ag","ai","al","am","ao","aq","ar","arpa","as","asia","at","au","aw","ax","az","ba","bb","bd","be","bf","bg","bh","bi","biz","bj","bm","bn","bo","br","bs","bt","bv","bw","by","bz","ca","cat","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","com","coop","cr","cu","cv","cw","cx","cy","cz","de","dj","dk","dm","do","dz","ec","edu","ee","eg","er","es","et","eu","fi","fj","fk","fm","fo","fr","ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gov","gp","gq","gr","gs","gt","gu","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","info","int","io","iq","ir","is","it","je","jm","jo","jobs","jp","ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mg","mh","mil","mk","ml","mm","mn","mo","mobi","mp","mq","mr","ms","mt","mu","museum","mv","mw","mx","my","mz","na","name","nc","ne","net","nf","ng","ni","nl","no","np","nr","nu","nz","om","onion","org","pa","pe","pf","pg","ph","pk","pl","pm","pn","post","pr","pro","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","st","su","sv","sx","sy","sz","tc","td","tel","tf","tg","th","tj","tk","tl","tm","tn","to","tr","travel","tt","tv","tw","tz","ua","ug","uk","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","yt","xn--mgbaam7a8h","xn--y9a3aq","xn--54b7fta0cc","xn--90ae","xn--90ais","xn--fiqs8s","xn--fiqz9s","xn--lgbbat1ad8j","xn--wgbh1c","xn--e1a4c","xn--node","xn--qxam","xn--j6w193g","xn--2scrj9c","xn--3hcrj9c","xn--45br5cyl","xn--h2breg3eve","xn--h2brj9c8c","xn--mgbgu82a","xn--rvc1e0am3e","xn--h2brj9c","xn--mgbbh1a71e","xn--fpcrj9c3d","xn--gecrj9c","xn--s9brj9c","xn--45brj9c","xn--xkc2dl3a5ee0h","xn--mgba3a4f16a","xn--mgba3a4fra","xn--mgbtx2b","xn--mgbayh7gpa","xn--3e0b707e","xn--80ao21a","xn--fzc2c9e2c","xn--xkc2al3hye2a","xn--mgbc0a9azcg","xn--d1alf","xn--l1acc","xn--mix891f","xn--mix082f","xn--mgbx4cd0ab","xn--mgb9awbf","xn--mgbai9azgqp6j","xn--mgbai9a5eva00b","xn--ygbi2ammx","xn--90a3ac","xn--p1ai","xn--wgbl6a","xn--mgberp4a5d4ar","xn--mgberp4a5d4a87g","xn--mgbqly7c0a67fbc","xn--mgbqly7cvafr","xn--mgbpl2fh","xn--yfro4i67o","xn--clchc0ea0b2g2a9gcd","xn--ogbpf8fl","xn--mgbtf8fl","xn--o3cw4h","xn--pgbs0dh","xn--kpry57d","xn--kprw13d","xn--nnx388a","xn--j1amh","xn--mgb2ddes","xxx","ye","za","zm","zw","aaa","aarp","abarth","abb","abbott","abbvie","abc","able","abogado","abudhabi","academy","accenture","accountant","accountants","aco","active","actor","adac","ads","adult","aeg","aetna","afamilycompany","afl","africa","agakhan","agency","aig","aigo","airbus","airforce","airtel","akdn","alfaromeo","alibaba","alipay","allfinanz","allstate","ally","alsace","alstom","americanexpress","americanfamily","amex","amfam","amica","amsterdam","analytics","android","anquan","anz","aol","apartments","app","apple","aquarelle","arab","aramco","archi","army","art","arte","asda","associates","athleta","attorney","auction","audi","audible","audio","auspost","author","auto","autos","avianca","aws","axa","azure","baby","baidu","banamex","bananarepublic","band","bank","bar","barcelona","barclaycard","barclays","barefoot","bargains","baseball","basketball","bauhaus","bayern","bbc","bbt","bbva","bcg","bcn","beats","beauty","beer","bentley","berlin","best","bestbuy","bet","bharti","bible","bid","bike","bing","bingo","bio","black","blackfriday","blanco","blockbuster","blog","bloomberg","blue","bms","bmw","bnl","bnpparibas","boats","boehringer","bofa","bom","bond","boo","book","booking","boots","bosch","bostik","boston","bot","boutique","box","bradesco","bridgestone","broadway","broker","brother","brussels","budapest","bugatti","build","builders","business","buy","buzz","bzh","cab","cafe","cal","call","calvinklein","cam","camera","camp","cancerresearch","canon","capetown","capital","capitalone","car","caravan","cards","care","career","careers","cars","cartier","casa","case","caseih","cash","casino","catering","catholic","cba","cbn","cbre","cbs","ceb","center","ceo","cern","cfa","cfd","chanel","channel","chase","chat","cheap","chintai","chloe","christmas","chrome","chrysler","church","cipriani","circle","cisco","citadel","citi","citic","city","cityeats","claims","cleaning","click","clinic","clinique","clothing","cloud","club","clubmed","coach","codes","coffee","college","cologne","comcast","commbank","community","company","compare","computer","comsec","condos","construction","consulting","contact","contractors","cooking","cookingchannel","cool","corsica","country","coupon","coupons","courses","credit","creditcard","creditunion","cricket","crown","crs","cruise","cruises","csc","cuisinella","cymru","cyou","dabur","dad","dance","data","date","dating","datsun","day","dclk","dds","deal","dealer","deals","degree","delivery","dell","deloitte","delta","democrat","dental","dentist","desi","design","dev","dhl","diamonds","diet","digital","direct","directory","discount","discover","dish","diy","dnp","docs","doctor","dodge","dog","doha","domains","dot","download","drive","dtv","dubai","duck","dunlop","duns","dupont","durban","dvag","dvr","earth","eat","eco","edeka","education","email","emerck","energy","engineer","engineering","enterprises","epost","epson","equipment","ericsson","erni","esq","estate","esurance","etisalat","eurovision","eus","events","everbank","exchange","expert","exposed","express","extraspace","fage","fail","fairwinds","faith","family","fan","fans","farm","farmers","fashion","fast","fedex","feedback","ferrari","ferrero","fiat","fidelity","fido","film","final","finance","financial","fire","firestone","firmdale","fish","fishing","fit","fitness","flickr","flights","flir","florist","flowers","fly","foo","food","foodnetwork","football","ford","forex","forsale","forum","foundation","fox","free","fresenius","frl","frogans","frontdoor","frontier","ftr","fujitsu","fujixerox","fun","fund","furniture","futbol","fyi","gal","gallery","gallo","gallup","game","games","gap","garden","gbiz","gdn","gea","gent","genting","george","ggee","gift","gifts","gives","giving","glade","glass","gle","global","globo","gmail","gmbh","gmo","gmx","godaddy","gold","goldpoint","golf","goo","goodhands","goodyear","goog","google","gop","got","grainger","graphics","gratis","green","gripe","grocery","group","guardian","gucci","guge","guide","guitars","guru","hair","hamburg","hangout","haus","hbo","hdfc","hdfcbank","health","healthcare","help","helsinki","here","hermes","hgtv","hiphop","hisamitsu","hitachi","hiv","hkt","hockey","holdings","holiday","homedepot","homegoods","homes","homesense","honda","honeywell","horse","hospital","host","hosting","hot","hoteles","hotels","hotmail","house","how","hsbc","htc","hughes","hyatt","hyundai","ibm","icbc","ice","icu","ieee","ifm","ikano","imamat","imdb","immo","immobilien","industries","infiniti","ing","ink","institute","insurance","insure","intel","international","intuit","investments","ipiranga","irish","iselect","ismaili","ist","istanbul","itau","itv","iveco","iwc","jaguar","java","jcb","jcp","jeep","jetzt","jewelry","jio","jlc","jll","jmp","jnj","joburg","jot","joy","jpmorgan","jprs","juegos","juniper","kaufen","kddi","kerryhotels","kerrylogistics","kerryproperties","kfh","kia","kim","kinder","kindle","kitchen","kiwi","koeln","komatsu","kosher","kpmg","kpn","krd","kred","kuokgroup","kyoto","lacaixa","ladbrokes","lamborghini","lamer","lancaster","lancia","lancome","land","landrover","lanxess","lasalle","lat","latino","latrobe","law","lawyer","lds","lease","leclerc","lefrak","legal","lego","lexus","lgbt","liaison","lidl","life","lifeinsurance","lifestyle","lighting","like","lilly","limited","limo","lincoln","linde","link","lipsy","live","living","lixil","loan","loans","locker","locus","loft","lol","london","lotte","lotto","love","lpl","lplfinancial","ltd","ltda","lundbeck","lupin","luxe","luxury","macys","madrid","maif","maison","makeup","man","management","mango","map","market","marketing","markets","marriott","marshalls","maserati","mattel","mba","mcd","mcdonalds","mckinsey","med","media","meet","melbourne","meme","memorial","men","menu","meo","merckmsd","metlife","miami","microsoft","mini","mint","mit","mitsubishi","mlb","mls","mma","mobile","mobily","moda","moe","moi","mom","monash","money","monster","montblanc","mopar","mormon","mortgage","moscow","moto","motorcycles","mov","movie","movistar","msd","mtn","mtpc","mtr","mutual","nab","nadex","nagoya","nationwide","natura","navy","nba","nec","netbank","netflix","network","neustar","new","newholland","news","next","nextdirect","nexus","nfl","ngo","nhk","nico","nike","nikon","ninja","nissan","nissay","nokia","northwesternmutual","norton","now","nowruz","nowtv","nra","nrw","ntt","nyc","obi","observer","off","office","okinawa","olayan","olayangroup","oldnavy","ollo","omega","one","ong","onl","online","onyourside","ooo","open","oracle","orange","organic","origins","osaka","otsuka","ott","ovh","page","pamperedchef","panasonic","panerai","paris","pars","partners","parts","party","passagens","pay","pccw","pet","pfizer","pharmacy","phd","philips","phone","photo","photography","photos","physio","piaget","pics","pictet","pictures","pid","pin","ping","pink","pioneer","pizza","place","play","playstation","plumbing","plus","pnc","pohl","poker","politie","porn","pramerica","praxi","press","prime","prod","productions","prof","progressive","promo","properties","property","protection","pru","prudential","pub","pwc","qpon","quebec","quest","qvc","racing","radio","raid","read","realestate","realtor","realty","recipes","red","redstone","redumbrella","rehab","reise","reisen","reit","reliance","ren","rent","rentals","repair","report","republican","rest","restaurant","review","reviews","rexroth","rich","richardli","ricoh","rightathome","ril","rio","rip","rmit","rocher","rocks","rodeo","rogers","room","rsvp","rugby","ruhr","run","rwe","ryukyu","saarland","safe","safety","sakura","sale","salon","samsclub","samsung","sandvik","sandvikcoromant","sanofi","sap","sapo","sarl","sas","save","saxo","sbi","sbs","sca","scb","schaeffler","schmidt","scholarships","school","schule","schwarz","science","scjohnson","scor","scot","search","seat","secure","security","seek","select","sener","services","ses","seven","sew","sex","sexy","sfr","shangrila","sharp","shaw","shell","shia","shiksha","shoes","shop","shopping","shouji","show","showtime","shriram","silk","sina","singles","site","ski","skin","sky","skype","sling","smart","smile","sncf","soccer","social","softbank","software","sohu","solar","solutions","song","sony","soy","space","spiegel","spot","spreadbetting","srl","srt","stada","staples","star","starhub","statebank","statefarm","statoil","stc","stcgroup","stockholm","storage","store","stream","studio","study","style","sucks","supplies","supply","support","surf","surgery","suzuki","swatch","swiftcover","swiss","sydney","symantec","systems","tab","taipei","talk","taobao","target","tatamotors","tatar","tattoo","tax","taxi","tci","tdk","team","tech","technology","telecity","telefonica","temasek","tennis","teva","thd","theater","theatre","tiaa","tickets","tienda","tiffany","tips","tires","tirol","tjmaxx","tjx","tkmaxx","tmall","today","tokyo","tools","top","toray","toshiba","total","tours","town","toyota","toys","trade","trading","training","travelchannel","travelers","travelersinsurance","trust","trv","tube","tui","tunes","tushu","tvs","ubank","ubs","uconnect","unicom","university","uno","uol","ups","vacations","vana","vanguard","vegas","ventures","verisign","versicherung","vet","viajes","video","vig","viking","villas","vin","vip","virgin","visa","vision","vista","vistaprint","viva","vivo","vlaanderen","vodka","volkswagen","volvo","vote","voting","voto","voyage","vuelos","wales","walmart","walter","wang","wanggou","warman","watch","watches","weather","weatherchannel","webcam","weber","website","wed","wedding","weibo","weir","whoswho","wien","wiki","williamhill","win","windows","wine","winners","wme","wolterskluwer","woodside","work","works","world","wow","wtc","wtf","xbox","xerox","xfinity","xihuan","xin","xn--11b4c3d","xn--1ck2e1b","xn--1qqw23a","xn--30rr7y","xn--3bst00m","xn--3ds443g","xn--3oq18vl8pn36a","xn--3pxu8k","xn--42c2d9a","xn--45q11c","xn--4gbrim","xn--55qw42g","xn--55qx5d","xn--5su34j936bgsg","xn--5tzm5g","xn--6frz82g","xn--6qq986b3xl","xn--80adxhks","xn--80aqecdr1a","xn--80asehdb","xn--80aswg","xn--8y0a063a","xn--9dbq2a","xn--9et52u","xn--9krt00a","xn--b4w605ferd","xn--bck1b9a5dre4c","xn--c1avg","xn--c2br7g","xn--cck2b3b","xn--cg4bki","xn--czr694b","xn--czrs0t","xn--czru2d","xn--d1acj3b","xn--eckvdtc9d","xn--efvy88h","xn--estv75g","xn--fct429k","xn--fhbei","xn--fiq228c5hs","xn--fiq64b","xn--fjq720a","xn--flw351e","xn--fzys8d69uvgm","xn--g2xx48c","xn--gckr3f0f","xn--gk3at1e","xn--hxt814e","xn--i1b6b1a6a2e","xn--imr513n","xn--io0a7i","xn--j1aef","xn--jlq61u9w7b","xn--jvr189m","xn--kcrx77d1x4a","xn--kpu716f","xn--kput3i","xn--mgba3a3ejt","xn--mgba7c0bbn0a","xn--mgbaakc7dvf","xn--mgbab2bd","xn--mgbb9fbpob","xn--mgbca7dzdo","xn--mgbi4ecexp","xn--mgbt3dhd","xn--mk1bu44c","xn--mxtq1m","xn--ngbc5azd","xn--ngbe9e0a","xn--ngbrx","xn--nqv7f","xn--nqv7fs00ema","xn--nyqy26a","xn--p1acf","xn--pbt977c","xn--pssy2u","xn--q9jyb4c","xn--qcka1pmc","xn--rhqv96g","xn--rovu88b","xn--ses554g","xn--t60b56a","xn--tckwe","xn--tiq49xqyj","xn--unup4y","xn--vermgensberater-ctb","xn--vermgensberatung-pwb","xn--vhquv","xn--vuq861b","xn--w4r85el8fhu5dnra","xn--w4rs40l","xn--xhq521b","xn--zfr164b","xperia","xyz","yachts","yahoo","yamaxun","yandex","yodobashi","yoga","yokohama","you","youtube","yun","zappos","zara","zero","zip","zippo","zone","zuerich"]');
;// CONCATENATED MODULE: ./node_modules/punycode/punycode.es6.js


/** Highest positive signed 32-bit float value */
const maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

/** Bootstring parameters */
const base = 36;
const tMin = 1;
const tMax = 26;
const skew = 38;
const damp = 700;
const initialBias = 72;
const initialN = 128; // 0x80
const delimiter = '-'; // '\x2D'

/** Regular expressions */
const regexPunycode = /^xn--/;
const regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

/** Error messages */
const errors = {
	'overflow': 'Overflow: input needs wider integers to process',
	'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
	'invalid-input': 'Invalid input'
};

/** Convenience shortcuts */
const baseMinusTMin = base - tMin;
const floor = Math.floor;
const stringFromCharCode = String.fromCharCode;

/*--------------------------------------------------------------------------*/

/**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */
function error(type) {
	throw new RangeError(errors[type]);
}

/**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */
function map(array, fn) {
	const result = [];
	let length = array.length;
	while (length--) {
		result[length] = fn(array[length]);
	}
	return result;
}

/**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {Array} A new string of characters returned by the callback
 * function.
 */
function mapDomain(string, fn) {
	const parts = string.split('@');
	let result = '';
	if (parts.length > 1) {
		// In email addresses, only the domain name should be punycoded. Leave
		// the local part (i.e. everything up to `@`) intact.
		result = parts[0] + '@';
		string = parts[1];
	}
	// Avoid `split(regex)` for IE8 compatibility. See #17.
	string = string.replace(regexSeparators, '\x2E');
	const labels = string.split('.');
	const encoded = map(labels, fn).join('.');
	return result + encoded;
}

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */
function ucs2decode(string) {
	const output = [];
	let counter = 0;
	const length = string.length;
	while (counter < length) {
		const value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// It's a high surrogate, and there is a next character.
			const extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// It's an unmatched surrogate; only append this code unit, in case the
				// next code unit is the high surrogate of a surrogate pair.
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

/**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */
const ucs2encode = array => String.fromCodePoint(...array);

/**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */
const basicToDigit = function(codePoint) {
	if (codePoint - 0x30 < 0x0A) {
		return codePoint - 0x16;
	}
	if (codePoint - 0x41 < 0x1A) {
		return codePoint - 0x41;
	}
	if (codePoint - 0x61 < 0x1A) {
		return codePoint - 0x61;
	}
	return base;
};

/**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */
const digitToBasic = function(digit, flag) {
	//  0..25 map to ASCII a..z or A..Z
	// 26..35 map to ASCII 0..9
	return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */
const adapt = function(delta, numPoints, firstTime) {
	let k = 0;
	delta = firstTime ? floor(delta / damp) : delta >> 1;
	delta += floor(delta / numPoints);
	for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
		delta = floor(delta / baseMinusTMin);
	}
	return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */
const decode = function(input) {
	// Don't use UCS-2.
	const output = [];
	const inputLength = input.length;
	let i = 0;
	let n = initialN;
	let bias = initialBias;

	// Handle the basic code points: let `basic` be the number of input code
	// points before the last delimiter, or `0` if there is none, then copy
	// the first basic code points to the output.

	let basic = input.lastIndexOf(delimiter);
	if (basic < 0) {
		basic = 0;
	}

	for (let j = 0; j < basic; ++j) {
		// if it's not a basic code point
		if (input.charCodeAt(j) >= 0x80) {
			error('not-basic');
		}
		output.push(input.charCodeAt(j));
	}

	// Main decoding loop: start just after the last delimiter if any basic code
	// points were copied; start at the beginning otherwise.

	for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

		// `index` is the index of the next character to be consumed.
		// Decode a generalized variable-length integer into `delta`,
		// which gets added to `i`. The overflow checking is easier
		// if we increase `i` as we go, then subtract off its starting
		// value at the end to obtain `delta`.
		let oldi = i;
		for (let w = 1, k = base; /* no condition */; k += base) {

			if (index >= inputLength) {
				error('invalid-input');
			}

			const digit = basicToDigit(input.charCodeAt(index++));

			if (digit >= base || digit > floor((maxInt - i) / w)) {
				error('overflow');
			}

			i += digit * w;
			const t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

			if (digit < t) {
				break;
			}

			const baseMinusT = base - t;
			if (w > floor(maxInt / baseMinusT)) {
				error('overflow');
			}

			w *= baseMinusT;

		}

		const out = output.length + 1;
		bias = adapt(i - oldi, out, oldi == 0);

		// `i` was supposed to wrap around from `out` to `0`,
		// incrementing `n` each time, so we'll fix that now:
		if (floor(i / out) > maxInt - n) {
			error('overflow');
		}

		n += floor(i / out);
		i %= out;

		// Insert `n` at position `i` of the output.
		output.splice(i++, 0, n);

	}

	return String.fromCodePoint(...output);
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */
const encode = function(input) {
	const output = [];

	// Convert the input in UCS-2 to an array of Unicode code points.
	input = ucs2decode(input);

	// Cache the length.
	let inputLength = input.length;

	// Initialize the state.
	let n = initialN;
	let delta = 0;
	let bias = initialBias;

	// Handle the basic code points.
	for (const currentValue of input) {
		if (currentValue < 0x80) {
			output.push(stringFromCharCode(currentValue));
		}
	}

	let basicLength = output.length;
	let handledCPCount = basicLength;

	// `handledCPCount` is the number of code points that have been handled;
	// `basicLength` is the number of basic code points.

	// Finish the basic string with a delimiter unless it's empty.
	if (basicLength) {
		output.push(delimiter);
	}

	// Main encoding loop:
	while (handledCPCount < inputLength) {

		// All non-basic code points < n have been handled already. Find the next
		// larger one:
		let m = maxInt;
		for (const currentValue of input) {
			if (currentValue >= n && currentValue < m) {
				m = currentValue;
			}
		}

		// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
		// but guard against overflow.
		const handledCPCountPlusOne = handledCPCount + 1;
		if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
			error('overflow');
		}

		delta += (m - n) * handledCPCountPlusOne;
		n = m;

		for (const currentValue of input) {
			if (currentValue < n && ++delta > maxInt) {
				error('overflow');
			}
			if (currentValue == n) {
				// Represent delta as a generalized variable-length integer.
				let q = delta;
				for (let k = base; /* no condition */; k += base) {
					const t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
					if (q < t) {
						break;
					}
					const qMinusT = q - t;
					const baseMinusT = base - t;
					output.push(
						stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
					);
					q = floor(qMinusT / baseMinusT);
				}

				output.push(stringFromCharCode(digitToBasic(q, 0)));
				bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
				delta = 0;
				++handledCPCount;
			}
		}

		++delta;
		++n;

	}
	return output.join('');
};

/**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */
const toUnicode = function(input) {
	return mapDomain(input, function(string) {
		return regexPunycode.test(string)
			? decode(string.slice(4).toLowerCase())
			: string;
	});
};

/**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */
const toASCII = function(input) {
	return mapDomain(input, function(string) {
		return regexNonASCII.test(string)
			? 'xn--' + encode(string)
			: string;
	});
};

/*--------------------------------------------------------------------------*/

/** Define the public API */
const punycode = {
	/**
	 * A string representing the current Punycode.js version number.
	 * @memberOf punycode
	 * @type String
	 */
	'version': '2.1.0',
	/**
	 * An object of methods to convert from JavaScript's internal character
	 * representation (UCS-2) to Unicode code points, and back.
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode
	 * @type Object
	 */
	'ucs2': {
		'decode': ucs2decode,
		'encode': ucs2encode
	},
	'decode': decode,
	'encode': encode,
	'toASCII': toASCII,
	'toUnicode': toUnicode
};


/* harmony default export */ const punycode_es6 = (punycode);

;// CONCATENATED MODULE: ./src/bg/domainZoneList/index.ts



 // eslint-disable-line



let domainZoneList = {
  'data': defaultList_namespaceObject
};

(async () => {
  // Initial
  let storageValue = await general_storage/* default.get */.Z.get('domainZoneList');
  if (Array.isArray(storageValue)) domainZoneList.data = storageValue;else general_storage/* default.set */.Z.set('domainZoneList', domainZoneList.data);
})();
/** @function */


const domainZoneList_loop = async () => {
  let timer = new DelayRecord('Domain zone list');
  let data = await (0,ajax/* default */.Z)('https://publicsuffix.org/list/public_suffix_list.dat', {
    'method': 'GET'
  });
  timer.end();
  let strings = data.replace(/\r/g, '').split(/\n/g).map(string => string.trim()).filter(string => string && !/\/\//.test(string)) // Not comment
  .map(string => string.split('.').pop());
  domainZoneList.data = Array.from(new Set(strings)).map(item => /[^a-z0-9_\-]/.test(item) ? punycode_es6.toASCII(item) : item);
  general_storage/* default.set */.Z.set('domainZoneList', domainZoneList.data);
};

time/* default.onStart */.Z.onStart({
  'name': 'domain zone list',
  'startDelayInMs': 0,
  'repeatInMinutes': 24 * 60
}, domainZoneList_loop);
/* harmony default export */ const bg_domainZoneList = (domainZoneList); // https://publicsuffix.org/list/public_suffix_list.dat
;// CONCATENATED MODULE: ./src/general/LocalDelayRecord.ts

const LocalDelayRecord_counts = {};
/** @class */

/* harmony default export */ const LocalDelayRecord = (class {
  constructor(name, type = 'log') {
    this._name = name;
    this._startPoint = performance.now();
    this._type = type;
    const id = LocalDelayRecord_counts[name] || 0;
    this._id = id; // Increase count

    LocalDelayRecord_counts[name] = id + 1;
  }
  /** @method */


  end() {
    // delay in milliseconds
    const delay = Math.round(performance.now() - this._startPoint);
    const message = `Local delay. ${this._name} #${this._id}: ${delay} milliseconds`;

    switch (this._type) {
      case 'log':
        (0,log/* default */.Z)(message);
        break;

      case 'warn':
        log/* default.warn */.Z.warn(message);
        break;

      case 'error':
        log/* default.error */.Z.error(message);
        break;
    }

    return delay;
  }

});
;
;// CONCATENATED MODULE: ./src/dualUse/userProperties.ts
/* global Credentials, SiteFilter */



const userProperties_bgRequest = location.href.includes('background');
let inAction = false;
const queue = [];

if (userProperties_bgRequest) {
  // Only logout
  setTimeout(() => {
    general_store/* default.onChange */.Z.onChange(({
      user
    }) => Boolean(user.email), (userIsLogined, x, storeState) => {
      if (userIsLogined) return; // Break every active ajax

      for (const action of queue) {
        var _action$break;

        if (action.complete) continue;
        (_action$break = action.break) === null || _action$break === void 0 ? void 0 : _action$break.call(action);
      } // Clear queue


      queue.splice(0, queue.length);
    });
  }, 0);
}
/** @function */


const makeAjax = action => {
  const {
    credentials
  } = action;
  /** @function */

  const request = () => {
    if (action.type === 'get') {
      return ajaxes.getUserProperties(credentials);
    } else if (action.type === 'save promotions block') {
      return ajaxes.setPromotionsBlock({
        credentials,
        'promotionsBlock': action.promotionsBlock
      });
    } else if (action.type === 'save smart settings') {
      return ajaxes.setSmartSettings({
        credentials,
        'filters': action.filters
      });
    }
  };

  let tryCount = 0;
  let broken = false;
  const promise = new Promise((resolve, reject) => {
    const loop = async () => {
      if (broken) return;

      try {
        const output = await request();
        resolve(output);
        return;
      } catch (error) {
        if (error.message === 'Unathorized user') {
          reject(error);
          return;
        }

        tryCount++;

        if (tryCount > 20) {
          reject(error);
          return;
        }

        const timeout = (() => {
          if (tryCount <= 5) return 10000;
          return (tryCount - 4) * 10000;
        })();

        await new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
        loop();
      }
    };

    loop(); // Initial
  });
  return {
    'break': () => {
      broken = true;
    },
    promise
  };
};
/** @function */


const activateLoop = async () => {
  inAction = true;

  for (const action of queue) {
    const {
      promise,
      'break': breakFunction
    } = makeAjax(action);
    action.break = breakFunction;

    try {
      const output = await promise;
      action.deferred.resolve(output);
    } catch (error) {
      action.deferred.reject(error);
    }

    action.complete = true;
  }

  ; // Clear queue

  queue.splice(0, queue.length);
  inAction = false;
};
/** @function */


const makeAction = action => {
  const deferred = new Deferred/* default */.Z();
  queue.push(Object.assign({}, action, {
    deferred
  }));
  if (!inAction) activateLoop();
  return deferred;
};

/* harmony default export */ const userProperties = ({
  /** @method */
  get(credentials) {
    return makeAction({
      'type': 'get',
      credentials
    });
  },

  /** @method */
  savePromotionsBlock({
    credentials,
    promotionsBlock
  }) {
    return makeAction({
      'type': 'save promotions block',
      credentials,
      promotionsBlock
    });
  },

  /** @method */
  saveSmartSettings({
    credentials,
    filters
  }) {
    return makeAction({
      'type': 'save smart settings',
      credentials,
      filters
    });
  }

});
;// CONCATENATED MODULE: ./src/dualUse/highLevelPac/storeListeners.ts



/* harmony default export */ const storeListeners = (() => {
  // Send every smart settings change to server
  general_store/* default.onChange */.Z.onChange(({
    userPac
  }) => userPac.filters, async (filters, x, storeState) => {
    var _storeState$user, _storeState$user$logi;

    const credentials = (_storeState$user = storeState.user) === null || _storeState$user === void 0 ? void 0 : (_storeState$user$logi = _storeState$user.loginData) === null || _storeState$user$logi === void 0 ? void 0 : _storeState$user$logi.credentials;
    if (!credentials) return;
    const oldSupportFilters = filters.map(base => Object.assign({}, base, {
      'domain': base.value.toString()
    } // Support of old clients after migrtion
    ));
    const timer = new LocalDelayRecord('Set smart settings');
    await userProperties.saveSmartSettings({
      credentials,
      'filters': oldSupportFilters
    }).finally(() => {
      timer.end();
    });
  });
});
;// CONCATENATED MODULE: ./src/general/tools/internationalize.ts
const _browser = typeof browser !== 'undefined' ? browser : chrome;
/** Get data from locales through chrome.i18n.getMessage
@function */


/* harmony default export */ const internationalize = (key => {
  try {
    return _browser.i18n.getMessage(key) || key;
  } catch (error) {
    // Firefox
    return key;
  }
});
;// CONCATENATED MODULE: ./src/dualUse/jitsu.ts







const jitsu_bgRequest = location.href.includes('background');
/* harmony default export */ const jitsu = ({
  'track': async (eventName, data = {}) => {
    if (!jitsu_bgRequest) {
      return (0,sendMessage/* default */.Z)({
        'type': 'jitsu.track',
        eventName,
        data
      });
    }

    const id = await dualUse_ga.full.userIdPromise;
    const storeState = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const {
      user
    } = storeState;

    const experimentsEntries = (() => {
      const {
        experiments,
        ignoredExperiments
      } = storeState;
      return Object.fromEntries(Object.entries(experiments).filter(([experimentId]) => !ignoredExperiments.includes(experimentId)));
    })();

    {
      const variant = await general_storage/* default.get */.Z.get('Experiment 346: variant');

      if (typeof variant === 'number') {
        experimentsEntries.exp346 = String(variant);
      }
    }
    const experimentsString = Object.entries(experimentsEntries).map(([id, variant]) => id + '_' + variant).join(',');
    const manifestVersion = await general_storage/* default.get */.Z.get('installVersion');
    const statistics = (await general_storage/* default.get */.Z.get('statistics')) || {};
    const installDate = statistics.installDate;
    const extraData = Object.assign({
      'cid': id,
      'experiments': experimentsString,
      'premium': user.premium ? '1' : '0'
    }, data, {
      'app_version': code_default().runtime.getManifest().version,
      'client_event_timestamp': String(Date.now()),
      'platform': 'extension'
    });

    if (manifestVersion) {
      Object.assign(extraData, {
        'install_app_version': manifestVersion
      });
    }

    if (installDate) {
      Object.assign(extraData, {
        'install_timestamp': String(Math.round(installDate / 1000))
      });
    }

    const domain = production_default().type.startsWith('qa') ? 'qa.bmetrics.org' : 'bmetrics.org';
    const urlObject = new URL(`https://${domain}/api/st/event`);

    for (const [key, value] of Object.entries(extraData)) {
      urlObject.searchParams.append(key, value);
    }

    urlObject.searchParams.append('event_name', eventName);
    return (0,ajax/* default */.Z)(urlObject.toString(), {
      'method': 'GET'
    });
  }
});
;// CONCATENATED MODULE: ./src/dualUse/lowLevelPac/domainDependencies.ts
/* global DomainDependency, DOMAIN_DEPENDENCIES */
// @ts-ignore
  const domain = [];
  const fullDomain = [];
  const regex = [];

  for (const {
    format,
    value
  } of block) {
    switch (format) {
      case 'domain':
        domain.push(value);
        break;

      case 'full domain':
        fullDomain.push(value);
        break;

      case 'regex':
        regex.push(new RegExp(value));
        break;
    }
  }

  return {
    domain,
    fullDomain,
    regex
  };
});
/* harmony default export */ const domainDependencies = (dependencies);
;// CONCATENATED MODULE: ./src/general/tools/filtersSorting.ts
/* global SiteFilter, PacSiteFilter */

/** @function */
const formatToFormatValue = format => {
  switch (format) {
    case 'full domain':
      return 0;

    case 'domain':
      return 1;

    case 'regex':
      return 2;

    default:
      throw new Error('Incorrect format ' + format);
  }
}; // Base sorting algorithm for pac.filters

/** @function */


/* harmony default export */ const filtersSorting = ((a, b) => {
  let aFormatValue = formatToFormatValue(a.format);
  let bFormatValue = formatToFormatValue(b.format);

  if (aFormatValue !== bFormatValue) {
    if (aFormatValue > bFormatValue) return 1;
    if (aFormatValue < bFormatValue) return -1;
  }

  let aValue = a.value;
  let bValue = b.value;

  if (typeof aValue === 'string' && typeof bValue === 'string') {
    let levels = {
      'a': aValue.split('.').length,
      'b': bValue.split('.').length
    };
    if (levels.a > levels.b) return -1;
    if (levels.a < levels.b) return 1;
    if (aValue > bValue) return 1;
    if (aValue < bValue) return -1;
  }

  return 0;
});
;// CONCATENATED MODULE: ./src/dualUse/lowLevelPac/adaptFiltersForPac.ts
/* global PacSiteFilter, SiteFilter */


const {
  _: adaptFiltersForPac_
} = self;

/** @function */
/* harmony default export */ const adaptFiltersForPac = (({
  countries,
  defaultCountry,
  filters
}) => {
  // User's own filters
  const siteFilters = [];

  for (const {
    disabled,
    country,
    format,
    proxyMode,
    value
  } of filters) {
    if (disabled) continue; // No disabled rules

    siteFilters.push({
      format,
      'value': value instanceof RegExp ? value.toString().slice(1, -1) : value,
      'country': proxyMode ? countries.includes(country) ? country : defaultCountry : undefined
    });
  } // Filters including dependencies


  const priorityFilters = siteFilters.map(({
    format,
    value,
    country
  }) => ({
    format,
    value,
    country,
    'priority': 1
  }));

  for (const {
    'value': domain,
    country
  } of siteFilters) {
    if (typeof domain !== 'string') continue;

    for (const {
      'domain': domainArray,
      fullDomain,
      regex
    } of domainDependencies) {
      const condition = domainArray.includes(domain) || fullDomain.includes(domain);
      if (!condition) continue;

      for (const value of domainArray) {
        if (value === domain) continue;
        priorityFilters.push({
          'format': 'domain',
          value,
          country,
          'priority': 0
        });
      }

      for (const value of fullDomain) {
        if (value === domain) continue;
        priorityFilters.push({
          'format': 'full domain',
          value,
          country,
          'priority': 0
        });
      }

      for (const value of regex) {
        priorityFilters.push({
          'format': 'regex',
          'value': value.toString().slice(1, -1),
          country,
          'priority': 0
        });
      }
    }
  }

  priorityFilters.sort((a, b) => b.priority - a.priority); // Removing doubles (intersection between original rules and
  // dependecies rules will be cleared in priority of original user rules)

  const output = adaptFiltersForPac_.uniqBy(priorityFilters, ({
    value
  }) => value).sort(filtersSorting); // Sorting with priority of level of domain
  // @ts-ignore


  for (const item of output) delete item.priority;

  return output;
});
;// CONCATENATED MODULE: ./src/dualUse/lowLevelPac/globalIgnoredDomains.ts
/* harmony default export */ const globalIgnoredDomains = (Object.freeze([// not real domains used in local networks
'corp', 'dns', 'eth', 'home', 'ip', 'intra', 'intranet', 'local', 'onion', 'tenet', // real domains which are resolved to 127.0.0.1
'discordapp.io', 'edit.boxlocalhost.com', 'localhost.megasyncloopback.mega.nz', 'localhost.wwbizsrv.alibaba.com', 'localtest.me', 'lvh.me', 'spotilocal.com', 'vcap.me', 'www.amazonmusiclocal.com', // exclusions needed for the extension
'bmetrics.org', 'google-analytics.com', 'secure.gate2shop.com', 'cdn.safecharge.com', 'paddle.com']));
;// CONCATENATED MODULE: ./src/general/tools/urlToDomain.ts
/** Get domain from URL. Returns domain or null in case of error
@function */
/* harmony default export */ const urlToDomain = (url => {
  if (!url) return null;
  if (url.startsWith('about:')) return null;

  try {
    let {
      protocol,
      'hostname': domain
    } = new URL(url);
    if (!['http:', 'https:'].includes(protocol)) return null;
    return domain;
  } catch (e) {
    return null;
  }
});
;// CONCATENATED MODULE: ./src/dualUse/lowLevelPac/getIgnoredDomains.ts
/* global PacHost */


/* harmony default export */ const getIgnoredDomains = (({
  availableServerUrls,
  proxyDomains,
  servers
}) => {
  const availableServerDomains = availableServerUrls.map(url => urlToDomain(url));
  const domains = new Set(); // unique second level domains

  for (const pacHosts of servers.values()) {
    for (const {
      host
    } of pacHosts) {
      // Getting 2nd domain level only
      domains.add(host.split('.').slice(-2).join('.'));
    }
  }

  for (const domain of availableServerDomains) {
    if (domain !== 'browsec.com') domains.add(domain);
  }

  for (const domain of proxyDomains) domains.add(domain);

  return globalIgnoredDomains.concat(Array.from(domains));
});
;// CONCATENATED MODULE: ./src/dualUse/lowLevelPac/getServersArray.ts
/* global HostPing, PacHost */
const {
  _: getServersArray_
} = self;
/** @function */

/* harmony default export */ const getServersArray = ((servers, pings) => {
  const groups = getServersArray_.groupBy(servers, ({
    host
  }) => {
    if (!pings.length) return 'unchecked';
    let ping = pings.find(item => item.host === host);
    if (!ping) return 'unchecked';
    return ping.valid ? 'working' : 'non-working';
  });

  const result = {
    'non-working': getServersArray_.shuffle(groups['non-working'] || []),
    'unchecked': getServersArray_.shuffle(groups.unchecked || []),
    'working': getServersArray_.shuffle(groups.working || [])
  };
  let output = [].concat(result.working, result.unchecked, result['non-working']).map(({
    port,
    host
  }) => `HTTPS ${host}:${port}`);

  if (typeof browser === 'undefined') {
    // Only chrome
    output = output.slice(0, 10);
  }

  return output;
});
;// CONCATENATED MODULE: ./src/dualUse/lowLevelPac/index.ts
/* global HostPing, PacHost */






/** @function */

const shuffle = async () => {
  const storeState = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const {
    proxyServers,
    user,
    userPac
  } = storeState;
  const globalReturn = userPac.mode === 'proxy' ? userPac.country : null;
  const availableServerUrls = (await general_storage/* default.get */.Z.get('availableServerList')) || production_default().apiServerUrls.map(item => item + 'v1');
  const rawPings = (await general_storage/* default.get */.Z.get('pingsRaw')) || [];
  const proxyDomains = user.premium ? storeState.proxyDomains.premium : storeState.proxyDomains.free;
  const servers = new Map();
  const premiumCountries = {};

  for (const [country, value] of proxyServers) {
    // Premium servers
    if (value.premium) {
      const hosts = [];

      for (const domain of storeState.proxyDomains.premium) {
        for (const {
          prefix,
          port
        } of value.premium) {
          hosts.push({
            'host': prefix + '.' + domain,
            port
          });
        }
      }

      premiumCountries[country] = getServersArray(hosts, rawPings);
    } // General servers


    const countryPrefixPorts = user.premium ? value.premium : value.free;
    if (!countryPrefixPorts) continue;
    const hosts = [];

    for (const domain of proxyDomains) {
      for (const {
        prefix,
        port
      } of countryPrefixPorts) {
        hosts.push({
          'host': prefix + '.' + domain,
          port
        });
      }
    }

    servers.set(country, hosts);
  }

  const ignoredDomains = getIgnoredDomains({
    availableServerUrls,
    'proxyDomains': storeState.proxyDomains.free.concat(storeState.proxyDomains.premium),
    servers
  });
  const countries = {};

  for (const [country, server] of servers) {
    countries[country] = getServersArray(server, rawPings); // getServerString( server, rawPings );
  }

  const siteFilters = adaptFiltersForPac({
    'countries': Object.keys(countries),
    'defaultCountry': 'fi',
    'filters': userPac.filters
  });
  general_store/* default.dispatch */.Z.dispatch({
    'type': 'Low level PAC: update',
    'data': {
      countries,
      globalReturn,
      ignoredDomains,
      premiumCountries,
      siteFilters
    }
  });
};

/* harmony default export */ const lowLevelPac = ({
  shuffle
});
;// CONCATENATED MODULE: ./src/dualUse/lowLevelPac/storeListeners.ts
/* global HostPing, PacHost */






 // const bgRequest: boolean = location.href.includes( 'background' );

/* harmony default export */ const lowLevelPac_storeListeners = (() => {
  // High level change leads to low level change
  general_store/* default.onChange */.Z.onChange(({
    proxyDomains,
    proxyServers,
    userPac
  }) => ({
    proxyDomains,
    proxyServers,
    userPac
  }), async (x, xx, storeState) => {
    const {
      proxyServers,
      user,
      userPac
    } = storeState; //changeLevelPac
    //recompilePacScript( storeState );

    const globalReturn = userPac.mode === 'proxy' ? userPac.country : null;
    const availableServerUrls = (await general_storage/* default.get */.Z.get('availableServerList')) || production_default().apiServerUrls.map(item => item + 'v1');
    const rawPings = (await general_storage/* default.get */.Z.get('pingsRaw')) || [];
    const proxyDomains = user.premium ? storeState.proxyDomains.premium : storeState.proxyDomains.free;
    const servers = new Map();
    const premiumCountries = {};

    for (const [country, value] of proxyServers) {
      // Premium servers
      if (value.premium) {
        const hosts = [];

        for (const domain of storeState.proxyDomains.premium) {
          for (const {
            prefix,
            port
          } of value.premium) {
            hosts.push({
              'host': prefix + '.' + domain,
              port
            });
          }
        }

        premiumCountries[country] = getServersArray(hosts, rawPings);
      } // General servers


      const countryPrefixPorts = user.premium ? value.premium : value.free;
      if (!countryPrefixPorts) continue;
      const hosts = [];

      for (const domain of proxyDomains) {
        for (const {
          prefix,
          port
        } of countryPrefixPorts) {
          hosts.push({
            'host': prefix + '.' + domain,
            port
          });
        }
      }

      servers.set(country, hosts);
    }

    const ignoredDomains = getIgnoredDomains({
      availableServerUrls,
      'proxyDomains': storeState.proxyDomains.free.concat(storeState.proxyDomains.premium),
      servers
    });
    const countries = {};

    for (const [country, server] of servers) {
      countries[country] = getServersArray(server, rawPings); // getServerString( server, rawPings );
    }

    const siteFilters = adaptFiltersForPac({
      'countries': Object.keys(countries),
      'defaultCountry': 'fi',
      'filters': userPac.filters
    });
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Low level PAC: update',
      'data': {
        countries,
        globalReturn,
        ignoredDomains,
        premiumCountries,
        siteFilters
      }
    });
  }); // Low level change affects everything

  general_store/* default.onChange */.Z.onChange(({
    lowLevelPac
  }) => lowLevelPac, lowLevelPac => {
    proxy.set(lowLevelPac);
  });
});
;// CONCATENATED MODULE: ./src/general/tools/numberToAlphabetLetter.ts
/* Converts number to uppercase alphabet letter
0 -> A, 1 -> B, 2 -> C, etc */
/* harmony default export */ const numberToAlphabetLetter = (number => {
  if (typeof number !== 'number') {
    throw new Error( // @ts-ignore
    `Not numeric value ${number.toString()} passed to numberToAlphabetLetter function`);
  }

  return String.fromCharCode(number + 65);
});
;// CONCATENATED MODULE: ./src/bg/optimizeExperiments.ts




const trackerId = production_default().type.startsWith('qa') ? 'UA-60149654-7' : 'UA-43024042-3';
const optimizeId = production_default().type.startsWith('qa') ? 'OPT-T7HXR72' : 'OPT-PTBVFMF';
const optimizeExperiments_manifestVersion = code_default().runtime.getManifest().manifest_version;
/** @method */

const initiate = async reason => {
  if (typeof browser !== 'undefined') return; // Only for Chrome

  if (optimizeExperiments_manifestVersion === 3) return; // Only for Manifest V2
  //let { experiments } = await store.getStateAsync();
  //if( Object.keys( experiments ).length ) return;

  const optimizeData = [];
  let returnPromiseResolved = false;
  const clientId = await dualUse_ga.full.userIdPromise; // @ts-ignore

  self.dataLayer = self.dataLayer || [];

  const gtag = function (...args) {
    // @ts-ignore
    self.dataLayer.push(arguments);
  };

  gtag('js', new Date());
  gtag('config', trackerId, {
    'optimize_id': optimizeId,
    'send_page_view': true,
    // Includes pageview
    'client_storage': 'none',
    // not documented feature -> cookie still exist
    //'user_id': clientId, // documented feature -> it's NOT working
    'client_id': clientId,
    // not documented feature -> it's working
    'transport_type': 'xhr' // No image sending

  });
  gtag('event', 'optimize.callback', {
    'callback': (value, name) => {
      var _Object$entries$find;

      for (const listener of listeners) listener({
        name,
        'variant': value
      });

      if (returnPromiseResolved) return;
      optimizeData.push({
        value,
        name
      });
      const experimentData = (_Object$entries$find = Object.entries((production_default()).experiments).find(([experimentName, data]) => experimentName === name)) === null || _Object$entries$find === void 0 ? void 0 : _Object$entries$find[1];
      const makeDispatch = Boolean(reason === 'install' || experimentData && experimentData.type !== 'event');
      if (!makeDispatch) return; // NOTE !

      general_store/* default.dispatch */.Z.dispatch({
        'type': 'Experiments: add',
        'experimentId': name,
        value
      });
    }
  });
  await new Promise(resolve => {
    const script = document.createElement('script');
    script.src = '/scripts/gtag.js'; // script.src = `https://www.googletagmanager.com/gtag/js?id=${trackerId}`;

    script.async = true;
    script.addEventListener('load', resolve);
    document.head.append(script);
  });
  const returnPromise = new Promise(resolve => {
    if (optimizeData.length) {
      resolve(optimizeData);
      return;
    }
    /** @function */


    const loop = loopCount => {
      if (loopCount > 100) {
        resolve();
        return;
      }

      if (optimizeData.length) resolve(optimizeData);else {
        setTimeout(() => {
          loop(++loopCount);
        }, 50);
      }
    };

    loop(0);
  });
  returnPromise.then(() => {
    returnPromiseResolved = true;
  });

  try {
    return await returnPromise;
  } catch (error) {} // Do nothing

};
/** @method */


const oneTimeCallOnNewExperiment = (property, callback) => {
  var _config$experiments$p;

  // @ts-ignore
  const experimentId = (_config$experiments$p = (production_default()).experiments[property]) === null || _config$experiments$p === void 0 ? void 0 : _config$experiments$p.id;
  if (!experimentId) return;
  const unsubscribe = general_store/* default.onChange */.Z.onChange(({
    experiments
  }) => experiments, (current, old) => {
    if (current[experimentId] && !old[experimentId]) {
      unsubscribe();
      callback(current[experimentId]);
    }
  });
};

const listeners = [];
/** @function */

const addNewExperimentListener = listener => {
  listeners.push(listener);
};

/* harmony default export */ const optimizeExperiments = ({
  addNewExperimentListener,
  initiate,
  oneTimeCallOnNewExperiment
});
;// CONCATENATED MODULE: ./src/bg/Statistics/getInitialState.ts



/* harmony default export */ const getInitialState = (async () => {
  let statistics = await general_storage/* default.get */.Z.get('statistics');
  const {
    user
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  let state = statistics || {
    /** days_before_uninstall - dbu - Integer count of full days from installation to removal
    @type {(integer|null)} */
    'daysLive': null,

    /** install_date - id - Installation date (UTC) in format of Date.now()
    @type {(integer|null)} - after convertion {String} in format YYYYMMDDhhmm */
    'installDate': null,

    /** logged_in - li - User is logined */
    'userLogined': Boolean(user.email)
  };
  /** changed_location_times - cl - Count of location country changes
  @type {integer} */

  state.countryChanges = await Counters/* default.get */.Z.get('country changes');
  /** browsec_action_clicks - bac - Number of clicks on browser icon
  @type {integer} */

  state.iconClicks = await Counters/* default.get */.Z.get('icon clicks');
  /** change_location_opened_times - clo - Count of transitions to locations page
  @type {integer} */

  state.locationPageShows = await Counters/* default.get */.Z.get('popup: location page shows');
  /** successful_resources_loaded_number - s (Old: sl) -
  Count of successfully loaded proxied pages.
  @type {integer} */

  state.proxiedPages = await Counters/* default.get */.Z.get('proxied pages');
  /** proxy_errors_number - pe - Count of proxy.onError errors
  @type {integer} */

  state.proxyErrors = await Counters/* default.get */.Z.get('proxy errors');
  /** turned_on_times - to - Global proxy ON click times
  @type {integer} */

  state.proxyOn = await Counters/* default.get */.Z.get('popup: proxy on');
  /** logged_in_times - lit - How much times user successfully logined
  @type {integer} */

  state.userLoginCount = await Counters/* default.get */.Z.get('user login');
  return state;
});
;// CONCATENATED MODULE: ./src/bg/onStartAction.ts

const onStartAction_manifestVersion = code_default().runtime.getManifest().manifest_version;
/** @function */

/* harmony default export */ const bg_onStartAction = (action => {
  if (onStartAction_manifestVersion === 2) {
    action();
    return;
  }

  code_default().runtime.onInstalled.addListener(action);
  code_default().runtime.onStartup.addListener(action);
});
;// CONCATENATED MODULE: ./src/bg/Statistics/listeners.ts





/* harmony default export */ const Statistics_listeners = (Statistics => {
  // Setup of language
  Statistics.set('language', code_default().i18n.getUILanguage().slice(0, 2).toLowerCase()); // Save location country changes

  Counters/* default.addListener */.Z.addListener('country changes', value => {
    Statistics.set('countryChanges', value);
  }); // Number of clicks on browser icon

  Counters/* default.addListener */.Z.addListener('icon clicks', value => {
    Statistics.set('iconClicks', value);
  }); // Count of transitions to locations page

  Counters/* default.addListener */.Z.addListener('popup: location page shows', value => {
    Statistics.set('locationPageShows', value);
  }); // Count of Proxy OFF to ON

  Counters/* default.addListener */.Z.addListener('popup: proxy on', value => {
    Statistics.set('proxyOn', value);
  }); // Count of successfully loaded proxied pages.

  Counters/* default.addListener */.Z.addListener('proxied pages', value => {
    Statistics.set('proxiedPages', value);
  }); // Count of proxy.onError errors

  Counters/* default.addListener */.Z.addListener('proxy errors', value => {
    Statistics.set('proxyErrors', value);
  }); // How much times user successfully logined

  Counters/* default.addListener */.Z.addListener('user login', value => {
    Statistics.set('userLoginCount', value);
  }); // Integer count of full days from installation to removal

  /** @function */

  const loop = async () => {
    const installDate = await Statistics.get('installDate');
    if (!installDate) return;
    let days = Math.floor((Date.now() - installDate) / (24 * 3600 * 1000));
    if (days < 0) days = 0;
    Statistics.set('daysLive', days);
  };

  bg_onStartAction(() => {
    alarms/* default.createCycle */.Z.createCycle('Statistics', {
      'delay': 30 * 1000,
      'periodInMinutes': 60
    });
  });
  alarms/* default.on */.Z.on(({
    name
  }) => {
    if (name === 'Statistics') loop();
  }); // Is user logined?

  general_store/* default.onChange */.Z.onChange(({
    'user': {
      email
    }
  }) => Boolean(email), logined => {
    Statistics.set('userLogined', logined);
  });
});
;// CONCATENATED MODULE: ./src/bg/runtime.setUninstallURL.ts


/**
@function
@param url - 255 symbols maximum */

/* harmony default export */ const runtime_setUninstallURL = (async url => {
  try {
    await code_default().runtime.setUninstallURL(url);
  } catch (error) {
    log/* default.error */.Z.error(error);
  }
});
;// CONCATENATED MODULE: ./src/general/tools/urlModifyParameters.ts
/** @function */
/* harmony default export */ const urlModifyParameters = ((url, action) => {
  let urlObject = new URL(url);
  let search = urlObject.search ? Object.fromEntries(urlObject.search.replace(/^\?/, '').split('&').map(part => {
    let [left, right] = part.split('=');
    return [left, right ? decodeURIComponent(right) : true];
  })) : {};
  search = action(search);

  urlObject.search = (() => {
    let parts = Object.entries(search).map(([property, value]) => encodeURIComponent(property) + '=' + encodeURIComponent(value));
    return parts.length ? '?' + parts.join('&') : '';
  })();

  return urlObject.toString();
});
;// CONCATENATED MODULE: ./src/bg/Statistics/index.ts
/* This statistics used only during extension removal. */










const uninstallURL = (() => {
  if (production_default().type.startsWith('qa')) {
    return 'https://browsec-uninstall.s3.eu-central-1.amazonaws.com/test/main.html';
  }

  return 'http://browsec-uninstall.s3-website.eu-central-1.amazonaws.com/';
})();

class Statistics {
  // @ts-ignore
  constructor() {
    this.ready = (async () => {
      // Set current state
      this.state = await getInitialState(); // Initial set of uninstall URL

      this.setUninstallUrl();
    })();
  }
  /** Set uninstall URL */

  /** @method */


  async setUninstallUrl() {
    const userId = await dualUse_ga.full.userIdPromise;
    let data = Object.fromEntries(Object.entries(this.state).map(([property, value]) => {
      // eslint-disable-line array-callback-return
      switch (property) {
        case 'countryChanges':
          return ['cl', value];

        case 'daysLive':
          if (value === null) return;
          return ['dbu', value];

        case 'iconClicks':
          return ['bac', value];

        case 'installDate':
          {
            if (!value) return;
            return ['id', (date => date.getUTCFullYear() + String(date.getUTCMonth() + 1).padStart(2, '0') + String(date.getUTCDate()).padStart(2, '0') + String(date.getUTCHours()).padStart(2, '0') + String(date.getUTCMinutes()).padStart(2, '0') // $FlowExpectedError[incompatible-call]
            )(new Date(value))];
          }

        case 'language':
          if (!value) return;
          return ['l', value];

        case 'locationPageShows':
          return ['clo', value];

        case 'userLoginCount':
          return ['lit', value];

        case 'userLogined':
          return ['li', value ? '1' : '0'];

        case 'proxiedPages':
          return ['s', value];

        case 'proxyErrors':
          return ['pe', value];

        case 'proxyOn':
          return ['to', value];
      }
    }).filter(item => Boolean(item)));
    data.du = userId;
    {
      const installVersion = await general_storage/* default.get */.Z.get('installVersion');
      if (installVersion) data.aiv = installVersion;
    }
    data.av = code_default().runtime.getManifest().version;
    runtime_setUninstallURL(urlModifyParameters(uninstallURL, search => Object.assign(search, data)));
  }
  /** Get proeprty value
  @method
  @return property value in state */


  async get(property) {
    await this.ready;
    return this.state[property];
  }
  /** Set some property
  @method */


  async set(property, value)
  /*: Promise<void>*/
  {
    await this.ready;
    this.state[property] = value;

    if ((production_default()).type === 'development') {
      (0,log/* default */.Z)(`Statistics. Set ${property}. New value: `, value);
    }

    general_storage/* default.set */.Z.set('statistics', this.state);
    this.setUninstallUrl();
  }
  /** Increase counter property
  @method */


  increase(property) {
    if (typeof this.state[property] !== 'number') return; // @ts-ignore

    this.state[property]++;

    if ((production_default()).type === 'development') {
      (0,log/* default */.Z)(`Statistics. Increase ${property}. New value: `, this.state[property]);
    }

    general_storage/* default.set */.Z.set('statistics', this.state);
    this.setUninstallUrl();
  }

}
;
const object = new Statistics();
Statistics_listeners(object);
/* harmony default export */ const bg_Statistics = (object);
;// CONCATENATED MODULE: ./src/general/tools/versionCompare.ts
/**
@function */
/* harmony default export */ const versionCompare = ((v0, sign, v1) => {
  /**
  1 if v0 > v1
  -1 if v0 < v1
  0 if v0 === v1 */
  const comparisonResult = (() => {
    if (v0 === v1) return 0;
    let a = v0.split('.').map(n => Number(n));
    let b = v1.split('.').map(n => Number(n)); // loop while the components are equal

    let len = Math.min(a.length, b.length);

    for (let i = 0; i < len; i++) {
      if (a[i] > b[i]) return 1; // A bigger than B

      if (a[i] < b[i]) return -1; // B bigger than A
    } // If one's a prefix of the other, the longer one is greater.


    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1; // Otherwise they are the same.

    return 0;
  })();

  switch (sign) {
    case '<':
      return comparisonResult < 0;

    case '>':
      return comparisonResult > 0;

    case '<=':
      return comparisonResult <= 0;

    case '>=':
      return comparisonResult >= 0;

    case '===':
      return comparisonResult === 0;
  }
});
;// CONCATENATED MODULE: ./src/bg/runtime.onInstalled.ts
/* global Tab */















const {
  _: runtime_onInstalled_
} = self;

/** @class singleton */
const onInstalled = new class {
  constructor() {
    this.listeners = [];
    code_default().runtime.onInstalled.addListener(details => {
      if (details.reason === 'install') {
        for (const {
          type,
          callback
        } of this.listeners) {
          if (type === 'install') callback();
        }
      } else if (details.reason === 'update') {
        for (const {
          type,
          callback
        } of this.listeners) {
          if (type === 'update') callback(details.previousVersion);
        }
      }
    });
  }
  /** @method */


  addListener(type, callback) {
    this.listeners.push({
      type,
      callback
    });
  }
  /** @method */


  removeListener(params) {
    if (typeof params === 'string') {
      this.listeners = this.listeners.filter(({
        type
      }) => type !== params);
    } else if (typeof params === 'function') {
      this.listeners = this.listeners.filter(({
        callback
      }) => callback !== params);
    }
  }

}();
alarms/* default.on */.Z.on(async ({
  name
}) => {////if( name !== 'runtime.onInstalled: congratulations' ) return;
  ////ga.full({
  ////  'category': 'onboarding',
  ////  'action': 'congratsOpen',
  ////  'label': 'newTab'
  ////});
  ////await Browser.tabs.create( '/pages/congratulations/congratulations.html' );
});
const ourExtensionIds = // Only chrome ids (to ignore Edge / Opera)
production_default().type.startsWith('qa') ? ['nmnhopbcmfpjkmkdalcdakkppkaegoof'] : ['omghfjlpggmjjaagoclmmobgdodcjboh', 'ikjnacbhmajnfdhilmdcjdggbcjiimkm'];
/** Runs when user has just installed the plugin OR updated
@function */

/* harmony default export */ const runtime_onInstalled = (() => {
  // New installation
  onInstalled.addListener('install', async () => {
    // Show congratulations tab
    (async () => {
      var _tabs$find;

      if (typeof browser !== 'undefined') return; // Not Firefox

      if (!navigator.userAgent.includes('(Windows')) return; // Only Windows

      if (!ourExtensionIds.includes((code_default()).runtime.id)) return; // Only real extensions

      const variant = Math.random() > 0.5 ? 1 : 0; // Get tab with chrome store page

      const tabs = await code_default().tabs.query();
      const tabId = (_tabs$find = tabs.find(({
        url
      }) => url && url.startsWith('https://chrome.google.com/webstore/detail/') && ourExtensionIds.some(extensionId => url.includes(extensionId)))) === null || _tabs$find === void 0 ? void 0 : _tabs$find.id;
      await general_storage/* default.set */.Z.set('Experiment 346: variant', variant);
      jitsu.track(tabId ? 'store_tab_opened' : 'store_tab_closed');
      jitsu.track('experiment_tag', {
        'expvarid': 'exp346_' + String(variant)
      });

      if (variant === 1 || tabId) {
        dualUse_ga.full({
          'category': 'onboarding',
          'action': 'congratsOpen'
        });
      }

      const url = '/pages/congratulations/congratulations.html';

      if (tabId) {
        // Tab exist
        // Change Chrome Webstore tab
        await code_default().tabs.update(tabId, {
          url
        });
      } else if (variant === 1) {
        // Open new tab
        await code_default().tabs.create(url);
      } // else do nothing

    })();

    const manifestVersion = code_default().runtime.getManifest().version;
    (0,log/* default */.Z)('browser.runtime.onInstalled', 'install');
    dualUse_ga.partial({
      'category': 'extension',
      'action': 'install',
      'label': manifestVersion
    });
    dualUse_ga.full({
      'category': 'onboarding',
      'action': 'install'
    });
    jitsu.track('install');
    general_storage/* default.set */.Z.set('installVersion', manifestVersion);
    general_storage/* default.set */.Z.set('First start tips: phase', 0);
    general_storage/* default.set */.Z.set('Experiment 343: phase', 0);

    (async () => {
      var _await$storage$get;

      // Get experiments
      const optimizePromise = optimizeExperiments.initiate('install');
      optimizePromise.then(() => {
        general_storage/* default.set */.Z.set('Optimize experiments initiated', true);
      });
      await dualUse_ga.full.userIdPromise;
      const newUser = (_await$storage$get = await general_storage/* default.get */.Z.get('gaRareUserIsNew')) !== null && _await$storage$get !== void 0 ? _await$storage$get : true; // Optimize events for installation

      const optimizeEvents = new Set();

      for (const {
        type,
        event
      } of Object.values((production_default()).experiments)) {
        if (event === 'stepsForFirstProxyOn') {
          if (newUser) optimizeEvents.add(event);
        } else if (type === 'event' && event) optimizeEvents.add(event);
      } // @ts-ignore


      self.dataLayer = self.dataLayer || []; // @ts-ignore

      for (const event of optimizeEvents) self.dataLayer.push({
        event
      });

      timemarks.set('experiments');

      (async () => {
        const {
          user
        } = await general_store/* default.getStateAsync */.Z.getStateAsync();
        if (user.premium) return;
        general_storage/* default.set */.Z.set('Experiment 330.2: phase', 0);
      })();

      optimizeExperiments.oneTimeCallOnNewExperiment('premiumComparisonOnFirstPopup', async variant => {
        const {
          user
        } = await general_store/* default.getStateAsync */.Z.getStateAsync();
        if (user.premium) return;
        const label = numberToAlphabetLetter(Number(variant));
        dualUse_ga.full({
          'category': 'Exp262_Tag',
          'action': label
        });
        jitsu.track('experiment_tag', {
          'expvarid': (production_default()).experiments.premiumComparisonOnFirstPopup.id + '_' + variant
        });
      });
      optimizeExperiments.oneTimeCallOnNewExperiment('premiumOverlayOnPopupOpen', async variant => {
        const {
          user
        } = await general_store/* default.getStateAsync */.Z.getStateAsync();
        if (user.premium) return;
        const label = numberToAlphabetLetter(Number(variant));
        dualUse_ga.full({
          'category': 'Exp252_Tag',
          'action': label
        });
        jitsu.track('experiment_tag', {
          'expvarid': (production_default()).experiments.premiumOverlayOnPopupOpen.id + '_' + variant
        });
      });
      optimizeExperiments.oneTimeCallOnNewExperiment('promoTabNewBehaviour', async variant => {
        const {
          user
        } = await general_store/* default.getStateAsync */.Z.getStateAsync();
        if (user.premium) return;
        jitsu.track('experiment_tag', {
          'expvarid': (production_default()).experiments.promoTabNewBehaviour.id + '_' + variant
        });
      });
    })(); // Experiment 254


    if (versionCompare(manifestVersion, '>=', '3.50.0')) {
      general_storage/* default.set */.Z.set('Experiment 254: phase', 0);
    } // Experiment 340


    general_storage/* default.set */.Z.set('Experiment 340: phase', 0); // First Proxy ON after install

    general_storage/* default.set */.Z.set('onboarding firstStart', false);
    bg_Statistics.set('installDate', Date.now());
    general_storage/* default.set */.Z.set('firstPopupOpen', 'installed');
    /** Congratulations for all first users
    congratulations tab id for changaing tab url in future (237 experiment) */

    (async () => {
      var _tabs$find2;

      const experimentVersion = typeof browser === 'undefined' && !self.navigator.appVersion.includes('OPR/');
      if (!experimentVersion) return;
      const tabs = await code_default().tabs.query();
      const tabId
      /*: integer | void*/
      = (_tabs$find2 = tabs.find(({
        url
      }) => url && url.startsWith('https://chrome.google.com/webstore/detail/') && (url.includes('omghfjlpggmjjaagoclmmobgdodcjboh') || url.includes('ikjnacbhmajnfdhilmdcjdggbcjiimkm')))) === null || _tabs$find2 === void 0 ? void 0 : _tabs$find2.id; // If Chrome Webstore tab open -> change it's tab

      if (tabId) {
        ////ga.full({
        ////  'category': 'onboarding',
        ////  'action': 'congratsOpen',
        ////  'label': 'chromeWebStore'
        ////});
        ////await Browser.tabs.update(
        ////  tabId,
        ////  { 'url': '/pages/congratulations/congratulations.html' }
        ////);
        return;
      } // Otherwise - with delay 10 seconds show separate congratulations tab


      alarms/* default.createOneTime */.Z.createOneTime('runtime.onInstalled: congratulations', {
        'delay': 10 * 1000
      });
    })();
  }); // Update of installed extention

  onInstalled.addListener('update', async previousVersion => {
    // Each like '2.2.99'
    const version = {
      'previous': previousVersion,
      'current': code_default().runtime.getManifest().version
    };
    (0,log/* default */.Z)('browser.runtime.onInstalled', 'update', version.previous);
    dualUse_ga.partial({
      'category': 'extension',
      'action': 'update',
      'label': version.current
    });
    const installDate = await bg_Statistics.get('installDate');
    if (!installDate) bg_Statistics.set('installDate', Date.now()); // Get experiments

    const optimizePromise = optimizeExperiments.initiate();
    const installVersion = await general_storage/* default.get */.Z.get('installVersion');
    const optimizeEvents = new Set();

    for (const entry of Object.values((production_default()).experiments)) {
      const {
        event,
        type,
        version
      } = entry;
      if (type !== 'event') continue;
      if (!event) continue;
      if (version && !installVersion) continue;
      if (version && versionCompare(installVersion, '<', version)) continue;
      optimizeEvents.add(event);
    } // @ts-ignore


    self.dataLayer = self.dataLayer || []; // @ts-ignore

    for (const event of optimizeEvents) self.dataLayer.push({
      event
    });

    (async () => {
      const data = await optimizePromise;
      const existingKeys = data ? data.map(({
        name
      }) => name) : [];
      const {
        experiments
      } = await general_store/* default.getStateAsync */.Z.getStateAsync();
      const storeKeys = Object.keys(experiments);

      const deletedKeys = runtime_onInstalled_.difference(storeKeys, existingKeys);

      for (const experimentId of deletedKeys) {
        general_store/* default.dispatch */.Z.dispatch({
          'type': 'Experiments: remove',
          experimentId
        });
      }
    })();

    timemarks.set('experiments');
    await lowLevelPac.shuffle();
    proxy.setFromStore();
  });
});
;// CONCATENATED MODULE: ./src/bg/runtime.onMessage.ts
/* global RuntimeMessageSender */



let runtime_onMessage_listeners = [];
code_default().runtime.onMessage.addListener((message, sender) => new Promise(resolve => {
  const type = message === null || message === void 0 ? void 0 : message.type;
  if (!type) return;

  if (production.type === 'development') {
    (0,log/* default */.Z)('browser.runtime.onMessage', message, sender);
  }

  const onlyCertifiedPagesAllowed = typeof sender.url === 'string' && [code_default().runtime.getURL('/popup/popup.html'), code_default().runtime.getURL('/pages/congratulations/congratulations.html'), code_default().runtime.getURL('/pages/diagnostics/diagnostics.html'), code_default().runtime.getURL('/pages/unblock_proxy/unblock_proxy.html')].includes(sender.url); // NOTE: Only one listener for the certain type!

  const listener = runtime_onMessage_listeners.find(item => item.type === type && onlyCertifiedPagesAllowed === Boolean(item.popupOnly));
  if (!listener) return;
  const result = listener.callback(message, sender);
  if (result instanceof Promise) result.then(resolve);else resolve(result);
}));
/** Async and only version of runtime.onMessage (NOTE critical -> must be the ONLY!)
@class singleton */

/* harmony default export */ const runtime_onMessage = ({
  /** @method */
  'addListener': listener => {
    runtime_onMessage_listeners.push(listener);
  },

  /** @method */
  'removeListener': params => {
    switch (typeof params) {
      case 'string':
        runtime_onMessage_listeners = runtime_onMessage_listeners.filter(({
          type
        }) => type !== params);
        break;

      case 'function':
        runtime_onMessage_listeners = runtime_onMessage_listeners.filter(({
          callback
        }) => callback !== params);
        break;
    }
  }
});
;// CONCATENATED MODULE: ./src/bg/permissions.ts
var _Browser$permissions$, _Browser$permissions$2, _Browser$permissions$3, _Browser$permissions$4;

// NOTE: in fact works only in Chrome!

const permissions = new class {
  constructor() {
    this._state = [];
    this.listeners = [];

    this.ready = (async () => {
      let {
        permissions
      } = await code_default().permissions.getAll();
      this._state = permissions;
    })();
  }
  /** @method */


  async get() {
    await this.ready;
    return this._state.slice();
  }
  /** @method */


  async includes(permission) {
    await this.ready;
    return this._state.includes(permission);
  }
  /** @method */


  set(value) {
    this._state = value.slice();
  }
  /** @method */


  addListener(listener) {
    this.listeners.push(listener);
  }
  /** @method */


  removeListener(listener) {
    this.listeners = this.listeners.filter(item => item !== listener);
  }

}();
/** @function */

let permissionsListener = async () => {
  let {
    'permissions': list
  } = await code_default().permissions.getAll();
  permissions.set(list);
  permissions.listeners.forEach(listener => {
    listener(list);
  });
};

(_Browser$permissions$ = (code_default()).permissions.onAdded) === null || _Browser$permissions$ === void 0 ? void 0 : (_Browser$permissions$2 = _Browser$permissions$.addListener) === null || _Browser$permissions$2 === void 0 ? void 0 : _Browser$permissions$2.call(_Browser$permissions$, permissionsListener);
(_Browser$permissions$3 = (code_default()).permissions.onRemoved) === null || _Browser$permissions$3 === void 0 ? void 0 : (_Browser$permissions$4 = _Browser$permissions$3.addListener) === null || _Browser$permissions$4 === void 0 ? void 0 : _Browser$permissions$4.call(_Browser$permissions$3, permissionsListener);
/* harmony default export */ const bg_permissions = (permissions);
// EXTERNAL MODULE: ./src/bg/defaultPrices.ts
var defaultPrices = __webpack_require__(7027);
;// CONCATENATED MODULE: ./src/bg/promotions/notifications.ts

/** List of activated notifications
@class singleton */

/* harmony default export */ const notifications = (new class {
  /** @method */
  async get() {
    let storageValue = await general_storage/* default.get */.Z.get('promotionsNotifications');
    return storageValue || [];
  }
  /** @method */


  async add(id) {
    let storageValue = await general_storage/* default.get */.Z.get('promotionsNotifications');
    let list = new Set(storageValue || []);
    list.add(id);
    await general_storage/* default.set */.Z.set('promotionsNotifications', Array.from(list));
  }

}());
;// CONCATENATED MODULE: ./src/bg/promotions/activation.ts

/** List of activated promotions
@class singleton */

/* harmony default export */ const activation = (new class {
  /** @method */
  async add(id) {
    let promotionsActivation = (await general_storage/* default.get */.Z.get('promotionsActivation')) || [];
    let list = new Set(promotionsActivation);
    list.add(id);
    await general_storage/* default.set */.Z.set('promotionsActivation', Array.from(list));
  }
  /** @method */


  async get() {
    let promotionsActivation = (await general_storage/* default.get */.Z.get('promotionsActivation')) || [];
    return promotionsActivation;
  }

}());
;// CONCATENATED MODULE: ./src/bg/promotions/convertRawTariffs.ts
/* global Tariff, RawTariff */
/* harmony default export */ const convertRawTariffs = (rawTarrifs => {
  let validRawTariffs = rawTarrifs.filter(({
    kind,
    'price': rawPrice,
    'duration': rawDuration
  }) => typeof (rawPrice === null || rawPrice === void 0 ? void 0 : rawPrice.amount) === 'number' && typeof (rawDuration === null || rawDuration === void 0 ? void 0 : rawDuration.months) === 'number');
  let tariffs = validRawTariffs.map(({
    kind,
    'price': rawPrice,
    'duration': rawDuration
  }) => {
    let oldValue;

    if (rawPrice.base_amount && rawPrice.base_amount > rawPrice.amount) {
      oldValue = rawPrice.base_amount;
    }

    let price
    /*: Object*/
    = {
      'currency': rawPrice.currency,
      'value': rawPrice.amount
    };
    if (oldValue) Object.assign(price, {
      oldValue
    });
    return {
      kind,
      price,
      'duration': rawDuration.months
    };
  });
  let trialDays = validRawTariffs.length ? Math.max.apply({}, validRawTariffs.map(({
    'trial_days': trialDays
  }) => trialDays)) : 0;
  return {
    tariffs,
    trialDays
  };
});
;// CONCATENATED MODULE: ./src/bg/promotions/validateRawTariffs.ts
/* global RawTariff */
/* harmony default export */ const validateRawTariffs = (rawTarrifs => {
  if (!rawTarrifs || !Array.isArray(rawTarrifs)) return [];
  return rawTarrifs.filter(({
    kind,
    'price': rawPrice,
    'duration': rawDuration
  }) => typeof (rawPrice === null || rawPrice === void 0 ? void 0 : rawPrice.amount) === 'number' && typeof (rawDuration === null || rawDuration === void 0 ? void 0 : rawDuration.months) === 'number');
});
;// CONCATENATED MODULE: ./src/bg/promotions/request.ts
/* global Credentials, Promotion, RawTariff */








/** @function */
/* harmony default export */ const promotions_request = (async credentials => {
  let baseUrl = await availableServer.getServer();
  let ajaxReturn;

  try {
    ajaxReturn = await apiRequest(baseUrl + '/promo/extension?_=' + Math.floor(Math.random() * 1000000000), {
      'dataType': 'json',
      'cache': 'no-store',
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      'method': 'GET',
      'tokenCredentials': credentials
    });
  } catch (error) {
    availableServer.restart();
    throw error;
  }

  let {
    'error_message': error,
    'promo': list,
    ok
  } = ajaxReturn;
  if (!ok) throw new Error(error);
  let promises = list.filter(item => Boolean(item.media && typeof item.media === 'object')).map(item => {
    const {
      banner,
      'inpage_notifications': notifications,
      'promo_page': promoPage
    } = item.media;
    const bannerAvailable = Boolean((banner === null || banner === void 0 ? void 0 : banner.json_url) || (banner === null || banner === void 0 ? void 0 : banner.json));
    const notificationsAvailable = Boolean(notifications);
    const promoPageAvailable = Boolean(promoPage === null || promoPage === void 0 ? void 0 : promoPage.url);
    return Object.assign({}, item, {
      banner,
      notifications,
      promoPage,
      bannerAvailable,
      notificationsAvailable,
      promoPageAvailable
    });
  }).filter(({
    bannerAvailable,
    media,
    notificationsAvailable,
    promoPageAvailable
  }) => {
    const condition = bannerAvailable || notificationsAvailable || promoPageAvailable;

    if (!condition) {
      log/* default.error */.Z.error('Banner, page notifications and promo page not specified. Promotion media object:', media);
    }

    return condition;
  }).map(async ({
    'click_url': clickUrl,
    from,
    kind = 'common',
    'tariffs': rawTariffs,
    till,
    'uid': id,
    banner,
    notifications,
    promoPage,
    bannerAvailable,
    notificationsAvailable,
    promoPageAvailable
  }) => {
    const bannerLink = bannerAvailable ? banner.click_url || (production_default()).baseUrl + '/en/orders/new?plan_id=annual' : undefined;

    const structurePromise = (async () => {
      if (!bannerAvailable) return;
      const ajaxUrl = banner.json_url;

      if (ajaxUrl) {
        return (0,ajax/* default */.Z)(ajaxUrl, {
          'dataType': 'json',
          'method': 'GET'
        });
      }

      if (banner.json) {
        return JSON.parse(banner.json);
      }
    })();

    const notificationsPromise = !notifications ? Promise.resolve([]) : Promise.all(notifications.map(async ({
      domains,
      'json_url': jsonUrl,
      json
    }) => {
      if (jsonUrl && !json) {
        json = await (0,ajax/* default */.Z)(jsonUrl, {
          'dataType': 'json',
          'method': 'GET'
        });
      }

      if (!json) {
        // Flow crap
        throw new Error('No json or jsonUrl property specified');
      }

      const {
        html,
        texts
      }
      /*: { 'html': Object, 'texts': { [ string ]: { [ string ]: string } } }*/
      = json;
      return {
        domains,
        html,
        texts
      };
    })); // Url of page, opened only one time

    const page = promoPageAvailable ? promoPage === null || promoPage === void 0 ? void 0 : promoPage.url : undefined;
    const pageActive = promoPageAvailable ? Boolean(promoPage === null || promoPage === void 0 ? void 0 : promoPage.active_tab) : false;
    const pageScope = (promoPage === null || promoPage === void 0 ? void 0 : promoPage.scope) || 'all';
    {
      // Make it parallel
      const [notifications, structure] = await Promise.all([(async () => {
        try {
          return await notificationsPromise;
        } catch (error) {
          return [];
        }
      })(), (async () => {
        try {
          return await structurePromise;
        } catch (error) {}
      })()]);
      const output = {
        clickUrl,
        id,
        'from': Date.parse(from),
        kind,
        notifications,
        'till': Date.parse(till)
      };

      try {
        if (bannerAvailable && structure) {
          output.banner = {
            'link': bannerLink,
            structure
          };
        }

        if (promoPageAvailable) {
          output.page = page;
          output.pageActive = pageActive;
          output.pageScope = pageScope;
        }

        rawTariffs = validateRawTariffs(rawTariffs);

        if (rawTariffs.length) {
          const {
            tariffs,
            trialDays
          } = convertRawTariffs(rawTariffs);
          output.tariffs = tariffs;
          if (trialDays) output.trialDays = trialDays;
        }

        return output;
      } catch (error) {
        log/* default.error */.Z.error('Incorrect data format in promotions');
        throw error;
      }
    }
  });
  return Promise.all(promises);
});
;// CONCATENATED MODULE: ./src/bg/promotions/index.ts
/* global Price, Promotion */













const {
  _: promotions_
} = self;
const promotions_manifestVersion = code_default().runtime.getManifest().manifest_version;
const promotions_refreshDelay = 24 * 3600 * 1000;
let newInstallation = false;
code_default().runtime.onInstalled.addListener(details => {
  if (details.reason === 'install') {
    newInstallation = true;
  }
});
/** @function */

const setPrices = async () => {
  const now = Date.now();
  const storeState = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const activePromotionWithTariff = storeState.promotions.find(({
    from,
    till,
    tariffs
  }) => from <= now && now <= till && tariffs);

  const prices = (() => {
    if (!(activePromotionWithTariff !== null && activePromotionWithTariff !== void 0 && activePromotionWithTariff.tariffs)) return defaultPrices/* default */.Z;
    return activePromotionWithTariff.tariffs.map(tariff => ({
      'currency': tariff.price.currency,
      'value': tariff.price.value,
      'oldValue': tariff.price.oldValue,
      'duration': tariff.duration
    }));
  })();

  const priceTrial = activePromotionWithTariff === null || activePromotionWithTariff === void 0 ? void 0 : activePromotionWithTariff.trialDays;

  if (!promotions_.isEqual(storeState.prices, prices)) {
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Prices: set',
      prices
    });
  }

  if (storeState.priceTrial !== priceTrial) {
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Price trial: set',
      priceTrial
    });
  }
};
/** @function */


const putData = async () => {
  var _user$loginData;

  await availableServer.initialRequestComplete;
  const {
    user
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const promotions = await promotions_request((_user$loginData = user.loginData) === null || _user$loginData === void 0 ? void 0 : _user$loginData.credentials);
  general_store/* default.dispatch */.Z.dispatch({
    'type': 'Promotions: set',
    'data': promotions
  });
  setPrices();
  timemarks.set('promotions');
};

const contentScriptUrl = '/promoPageExecutor.js';
/** @function */

const showPromotions = async () => {
  const state = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const premiumUser = state.user.premium;
  const promotionsBlock = state.promotionsBlock;
  const usedPromotions = await activation.get();
  const now = Date.now(); // Not activated promotions in time of need

  let activePromotions = [];

  if (!promotionsBlock) {
    activePromotions = state.promotions.filter(({
      id,
      from,
      till,
      page
    }) => page && !usedPromotions.includes(id) && from <= now && now <= till).filter(({
      kind
    }) => kind === 'personal' || !premiumUser); // For free all, for premium -> only personal

    if (!newInstallation) {
      activePromotions = activePromotions.filter(({
        pageScope
      }) => pageScope !== 'new');
    }
  }

  const executeContentScript = typeof browser === 'undefined'; // Only for Chrome

  activePromotions.forEach(async ({
    id,
    page,
    pageActive,
    pageScope
  }) => {
    activation.add(id);
    jitsu.track('promo_tab', {
      'campaign': id,
      'pageActive': pageActive ? '1' : '0',
      'scope': pageScope || 'all'
    });
    const {
      'id': tabId
    } = await code_default().tabs.create({
      'active': Boolean(pageActive),
      'url': page
    });

    if (executeContentScript) {
      // Chrome only
      if (promotions_manifestVersion === 3) {
        chrome.scripting.executeScript({
          'target': {
            tabId
          },
          'files': [contentScriptUrl]
        });
      } else {
        code_default().tabs.executeScript(tabId, {
          'file': contentScriptUrl
        });
      }
    }
  });
  setPrices();
};
/** @function */


const showNotifications = async () => {
  const state = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const premiumUser = state.user.premium;
  const now = Date.now();

  if (!premiumUser) {
    const usedPromotions
    /*: string[]*/
    = await notifications.get();
    const activePromotions
    /*: Promotion[]*/
    = state.promotions.filter(({
      id,
      from,
      till,
      notifications
    }) => notifications && notifications.length && !usedPromotions.includes(id) && from <= now && now <= till);
    const activePromotion = activePromotions[0];

    if (activePromotion) {
      general_storage/* default.remove */.Z.remove('notificationHidden');
      notifications.add(activePromotion.id);
    }
  }
};

bg_onStartAction(async () => {
  alarms/* default.createCycle */.Z.createCycle('promotions/notifications', {
    'periodInMinutes': 3
  });
  alarms/* default.createCycle */.Z.createCycle('promotions/promotions', {
    'periodInMinutes': 60
  }); // Initial show

  showPromotions(); // Due to 2 promos for first installation -> too much for first time

  showNotifications(); // Initial AJAX

  const periodInMinutes = promotions_refreshDelay / 60000;
  const mark = await timemarks.get('promotions');

  if (!mark) {
    putData();
    alarms/* default.createCycle */.Z.createCycle('promotions/putData', {
      periodInMinutes
    });
    return;
  }

  const timePassed = Date.now() - mark;

  if (timePassed < 0 || timePassed >= promotions_refreshDelay) {
    putData();
    alarms/* default.createCycle */.Z.createCycle('promotions/putData', {
      periodInMinutes
    });
    return;
  }

  alarms/* default.createCycle */.Z.createCycle('promotions/putData', {
    'delay': promotions_refreshDelay - timePassed,
    periodInMinutes
  });
});
alarms/* default.on */.Z.on(({
  name
}) => {
  switch (name) {
    case 'promotions/notifications':
      showNotifications();
      return;

    case 'promotions/promotions':
      showPromotions();
      return;

    case 'promotions/putData':
      putData();
  }
}); // Subscribe to account changes: registered -> unregistered OR premium -> not premium

general_store/* default.onChange */.Z.onChange(({
  'user': {
    loginData,
    email,
    'premium': premiumUser
  }
}) => {
  const registeredUser = Boolean(email);
  return {
    'credentials': loginData === null || loginData === void 0 ? void 0 : loginData.credentials,
    premiumUser,
    registeredUser,
    'subscription': loginData === null || loginData === void 0 ? void 0 : loginData.subscription
  };
}, putData); // Experiment 340

if (promotions_manifestVersion !== 3 && typeof browser === 'undefined') {
  const experimentId = (production_default()).experiments.promoTabNewBehaviour.id; // Phase 0 -> 1: runtime.onInstalled event

  (async () => {
    // Wait for phase 0
    await new Promise(async resolve => {
      const phase = await general_storage/* default.get */.Z.get('Experiment 340: phase');
      if (phase === 0) resolve();
      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Experiment 340: phase'],
        'do': storegeData => {
          const value = storegeData['Experiment 340: phase'];

          if (value === 0) {
            unsubscribe();
            resolve();
          }
        }
      });
    });
    await general_storage/* default.set */.Z.set('Experiment 340: phase', 1);
  })(); // Phase 1 -> 2: get experiment


  (async () => {
    // Wait for phase 1
    await new Promise(async resolve => {
      const phase = await general_storage/* default.get */.Z.get('Experiment 340: phase');
      if (phase === 1) resolve();
      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Experiment 340: phase'],
        'do': storegeData => {
          const value = storegeData['Experiment 340: phase'];

          if (value === 1) {
            unsubscribe();
            resolve();
          }
        }
      });
    }); // Wait for experiment

    const variant = await new Promise(async resolve => {
      const storeState = await general_store/* default.getStateAsync */.Z.getStateAsync();

      const experiments = (() => {
        const {
          experiments,
          ignoredExperiments
        } = storeState;
        return Object.fromEntries(Object.entries(experiments).filter(([experimentId]) => !ignoredExperiments.includes(experimentId)));
      })();

      const variant = experiments[experimentId];

      if (variant) {
        resolve(variant);
        return;
      }

      const unsubscribe = general_store/* default.onChange */.Z.onChange(({
        experiments
      }) => experiments, experiments => {
        const variant = experiments[experimentId];
        if (!variant) return;
        unsubscribe();
        resolve(variant);
      });
    });
    if (variant === '1') await general_storage/* default.set */.Z.set('Experiment 340: phase', 2);else await general_storage/* default.set */.Z.set('Experiment 340: phase', 3);
  })(); // Phase 2 -> 3: activate trigger


  (async () => {
    // Wait for phase 2
    await new Promise(async resolve => {
      const phase = await general_storage/* default.get */.Z.get('Experiment 340: phase');
      if (phase === 2) resolve();
      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Experiment 340: phase'],
        'do': storegeData => {
          const value = storegeData['Experiment 340: phase'];

          if (value === 2) {
            unsubscribe();
            resolve();
          }
        }
      });
    }); // Wait for storage's 'first connection'

    await new Promise(async resolve => {
      const value = await general_storage/* default.get */.Z.get('first connection');

      if (value === true) {
        resolve();
        return;
      }

      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['first connection'],
        'do': storegeData => {
          const value = storegeData['first connection'];

          if (value === true) {
            unsubscribe();
            resolve();
          }
        }
      });
    });
    const {
      ignoredExperiments
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();

    if (!ignoredExperiments.includes(experimentId)) {
      showPromotions();
    }

    await general_storage/* default.set */.Z.set('Experiment 340: phase', 3);
  })();
}

/* harmony default export */ const promotions = ({
  'clear': () => {
    general_storage/* default.set */.Z.set('promotionsActivation', []);
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Promotions: set',
      'data': []
    });
  },
  'request': putData,
  setPrices,
  'show': showPromotions
});
;// CONCATENATED MODULE: ./src/bg/ShowedOffers.ts

/** Array-like object directly associated with storage
@class singleton */

/* harmony default export */ const ShowedOffers = (new class {
  constructor() {
    (async () => {
      let showedOffers = await general_storage/* default.get */.Z.get('showedOffers');
      this.state = new Set(showedOffers || [])
      /*: Set<string>*/
      ;
    })();
  }
  /** Add
  @method */


  push(...args) {
    const state = this.state;
    if (!state) throw new Error('ShowedOffers.push called too early');
    args.forEach(offerName => {
      state.add(offerName);
    });
    general_storage/* default.set */.Z.set('showedOffers', Array.from(state));
    return state.size;
  }
  /** Remove
  @method */


  pull(...args) {
    const state = this.state;
    if (!state) throw new Error('ShowedOffers.pull called too early');
    args.forEach(offerName => {
      state.delete(offerName);
    });
    general_storage/* default.set */.Z.set('showedOffers', Array.from(state));
  }
  /** Check value in array
  @method */


  includes(value) {
    if (!this.state) {
      throw new Error('ShowedOffers.includes called too early');
    }

    return this.state.has(value);
  }

}());
;// CONCATENATED MODULE: ./src/bg/contentScripts/timezoneChange/index.ts
/* global Credentials */


/* harmony default export */ const timezoneChange = ({
  /** @method */
  'get': () => general_store/* default.getStateSync */.Z.getStateSync().timezoneChange,

  /** @method */
  'set': value => {
    var _user$loginData;

    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Timezone change: set',
      'data': value
    });
    const {
      user
    } = general_store/* default.getStateSync */.Z.getStateSync();
    const premium = user.premium;
    const credentials = (_user$loginData = user.loginData) === null || _user$loginData === void 0 ? void 0 : _user$loginData.credentials;
    if (!credentials || !premium) return;
    ajaxes.setTimezoneChange({
      credentials,
      'timezoneChange': value
    });
  }
});
;// CONCATENATED MODULE: ./src/bg/trySendDailyRetention.ts






/** @function */

/* harmony default export */ const trySendDailyRetention = (async () => {
  const currentMark = await timemarks.get('GA Rare dailyRetention');

  if (currentMark && Date.now() < currentMark + 24 * 3600 * 1000) {
    return;
  }

  timemarks.set('GA Rare dailyRetention');

  (async () => {
    const igrnoredState = await general_storage/* default.get */.Z.get('Experiment 254: ignore');
    if (igrnoredState) return;
    const {
      experiments
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const variant = experiments[(production_default()).experiments.pollBanner.id];
    if (!variant) return;
    const letter = numberToAlphabetLetter(Number(variant));
    dualUse_ga.full({
      'category': 'Exp254_dailyRetention',
      'action': letter
    });
  })();
});
;// CONCATENATED MODULE: ./src/bg/UserPropertiesObserver/affectAjaxUserProperties.ts
/* global Credentials, SiteFilter */



const {
  _: affectAjaxUserProperties_
} = self;
/** @function */

/* harmony default export */ const affectAjaxUserProperties = (async ({
  credentials,
  'properties': {
    favorites,
    filters,
    promotionsBlock,
    timezoneChange,
    webrtcBlock
  }
}) => {
  // Migration and validation
  let condition = filters.some( // @ts-ignore
  item => typeof (item === null || item === void 0 ? void 0 : item.domain) === 'string');

  if (condition) {
    // Migration
    // @ts-ignore
    filters = filters.filter(item => affectAjaxUserProperties_.isObject(item)) // @ts-ignore
    .map(({
      country,
      domain,
      format,
      value,
      proxyMode
    }) => {
      if (typeof domain === 'string') {
        return {
          country,
          'format': 'domain',
          'value': domain,
          proxyMode
        };
      }

      return {
        country,
        format,
        value,
        proxyMode
      };
    });
  }

  ; // Filters validation

  filters = filters.filter(item => affectAjaxUserProperties_.isObject(item) && typeof item.country === 'string' && ['domain', 'full domain', 'regex'].includes(item.format) && typeof item.proxyMode === 'boolean' && typeof item.value === 'string').map(item => {
    if (item.format === 'regex') item.value = new RegExp(item.value);
    return item;
  });
  let state = general_store/* default.getStateSync */.Z.getStateSync();

  if (typeof promotionsBlock !== 'boolean') {
    promotionsBlock = general_storage/* default.promotionsBlock */.Z.promotionsBlock || false;
    userProperties.savePromotionsBlock({
      credentials,
      promotionsBlock
    });
  }

  let oldFavorites
  /*: string[]*/
  = state.favorites;
  let oldFilters
  /*: SiteFilter[]*/
  = state.userPac.filters;
  let oldPromotionsBlock
  /*: boolean*/
  = state.promotionsBlock;
  let oldTimezoneChange
  /*: boolean*/
  = state.timezoneChange;
  let oldWebrtcBlock
  /*: boolean | null*/
  = state.webrtcBlock; // Update favorites

  if (!affectAjaxUserProperties_.isEqual(oldFavorites, favorites)) {
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Favorites: set',
      'data': favorites
    });
  } // Update promotions blocking


  if (oldPromotionsBlock !== promotionsBlock) {
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Promotions block: set',
      'data': promotionsBlock
    });
  } // Update timezone change


  if (oldTimezoneChange !== timezoneChange) {
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Timezone change: set',
      'data': timezoneChange
    });
  } // Update WebRTC blocking


  if (webrtcBlock !== null && oldWebrtcBlock !== webrtcBlock) {
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'WebRTC blocking: set',
      'data': webrtcBlock
    });
  } // Update site filters


  if (affectAjaxUserProperties_.isEqual(oldFilters, filters)) return; // No changes

  general_store/* default.dispatch */.Z.dispatch({
    'type': 'User PAC: update',
    'data': {
      filters
    }
  });
});
;// CONCATENATED MODULE: ./src/bg/UserPropertiesObserver/removeWrongFilters.ts
/* global SiteFilter, UserPac */
const {
  _: removeWrongFilters_
} = self;
/** (Only for logined user)
@function */

/* harmony default export */ const removeWrongFilters = (({
  filters,
  premiumUser,
  setProxyState
}) => {
  filters = removeWrongFilters_.cloneDeep(filters);

  if (premiumUser) {
    // Logined and premium
    if (filters.filter(({
      disabled
    }) => disabled).length) {
      filters.forEach(filter => {
        filter.disabled = false;
      });
      setProxyState({
        filters
      });
    }
  } else {
    // Logined, but not premium
    if (filters.filter(({
      disabled
    }) => !disabled).length > 1) {
      filters.slice(1).forEach(filter => {
        filter.disabled = true;
      });
      setProxyState({
        filters
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/bg/UserPropertiesObserver/index.ts
/* global Credentials, SiteFilter, UserPac */









const {
  _: UserPropertiesObserver_
} = self;
const delay = 10 * 60 * 1000;
/** @function */

const logFilters = pre => {
  if (!['qa', 'development'].includes((production_default()).type)) return;
  const filters = JSON.stringify(general_store/* default.getStateSync */.Z.getStateSync().userPac.filters);
  if (pre) (0,log/* default */.Z)('371: ' + pre, filters);else (0,log/* default */.Z)(filters);
};
/** @class singleton */


const UserPropertiesObserver = new class {
  /** @method */
  async directUpdate() {
    var _user$loginData;

    const {
      user
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const credentials = (_user$loginData = user.loginData) === null || _user$loginData === void 0 ? void 0 : _user$loginData.credentials;
    if (!credentials) return;
    if ((production_default()).type === 'development') (0,log/* default */.Z)('AJAX: get user properties');
    const {
      favorites,
      promotionsBlock,
      'smartSettings': filters,
      timezoneChange,
      webrtcBlock
    } = await userProperties.get(credentials);
    if (!general_store/* default.getStateSync */.Z.getStateSync().user.email) return; // If user not logined -> ignore

    await affectAjaxUserProperties({
      credentials,
      'properties': {
        favorites,
        filters,
        promotionsBlock,
        timezoneChange,
        webrtcBlock
      }
    });
  }
  /** Activate observer
  @method */


  async enable() {
    await general_storage/* default.set */.Z.set('user properties observer', true);
    return UserPropertiesObserver_loop();
  }
  /** Deactivate observer
  @method */


  disable() {
    alarms/* default.clear */.Z.clear('user properties observer');
    general_storage/* default.set */.Z.set('user properties observer', false);
  }

}();
/** @function */

const UserPropertiesObserver_loop = async () => {
  var _user$loginData2;

  const {
    user
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const credentials = (_user$loginData2 = user.loginData) === null || _user$loginData2 === void 0 ? void 0 : _user$loginData2.credentials;
  if (!credentials) return; // Not blocked

  if ((production_default()).type === 'development') (0,log/* default */.Z)('AJAX: get user properties');

  try {
    const {
      favorites,
      promotionsBlock,
      'smartSettings': filters,
      timezoneChange,
      webrtcBlock
    } = await userProperties.get(credentials);
    const storageValue = await general_storage/* default.get */.Z.get('user properties observer');
    if (!storageValue) return;
    if (!general_store/* default.getStateSync */.Z.getStateSync().user.email) return; // If user not logined -> ignore

    return affectAjaxUserProperties({
      credentials,
      'properties': {
        favorites,
        filters,
        promotionsBlock,
        timezoneChange,
        webrtcBlock
      }
    });
  } finally {
    const storageValue = await general_storage/* default.get */.Z.get('user properties observer');

    if (storageValue) {
      // Every 10 minutes fetch data from server
      alarms/* default.createOneTime */.Z.createOneTime('user properties observer', {
        delay
      });
    }
  }
};

alarms/* default.on */.Z.on(({
  name
}) => {
  if (name === 'user properties observer') UserPropertiesObserver_loop();
}); // On login / logout

general_store/* default.onChange */.Z.onChange(({
  'user': {
    email
  }
}) => Boolean(email), async (userLogined, oldvalue, storeState) => {
  // Enabled only if user logined
  const promise = userLogined ? UserPropertiesObserver.enable() : UserPropertiesObserver.disable(); // Logout

  if (!userLogined) {
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Favorites: set',
      'data': []
    });

    if (storeState.timezoneChange) {
      general_store/* default.dispatch */.Z.dispatch({
        'type': 'Timezone change: set',
        'data': false
      });
    }

    general_store/* default.dispatch */.Z.dispatch({
      'type': 'User PAC: update',
      'data': {
        'filters': []
      }
    });
    logFilters('User not logined: '); // proxy.setState({ 'filters': [], 'refresh': true }).finally( () => {
    //  logFilters( 'User not logined: ' );
    // });

    return;
  }

  try {
    await promise;
  } catch (error) {}

  storeState = await general_store/* default.getStateAsync */.Z.getStateAsync();
  logFilters('User logined, before removing wrong filters: ');
  removeWrongFilters({
    'filters': storeState.userPac.filters,
    'premiumUser': storeState.user.premium,
    'setProxyState': data => {
      general_store/* default.dispatch */.Z.dispatch({
        'type': 'User PAC: update',
        data
      });
    }
  });
}); // On premium loose OR gain event

general_store/* default.onChange */.Z.onChange(({
  'user': {
    email,
    premium
  }
}) => ({
  'logined': Boolean(email),
  premium
}), (newState, oldState, storeState) => {
  if (!newState.logined || !oldState.logined) return; // Must be no changes in login state

  let filters = UserPropertiesObserver_.cloneDeep(storeState.userPac.filters); // Premium gain


  if (newState.premium) {
    (0,log/* default */.Z)('Premium gain');
    if (!filters.find(({
      disabled
    }) => disabled)) return;
    filters.forEach(filter => {
      if (filter.disabled) delete filter.disabled;
    });
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'User PAC: update',
      'data': {
        filters
      }
    });
    logFilters('Premium gain: '); //proxy.setState({ filters }).finally( () => {
    //  logFilters( 'Premium gain: ' );
    //});

    return;
  } // Premium loose


  (0,log/* default */.Z)('Premium loose');
  if (filters.length <= 1) return; // For all filters except first -> set 'disabled' property to true

  filters.slice(1).forEach(filter => {
    filter.disabled = true;
  });
  general_store/* default.dispatch */.Z.dispatch({
    'type': 'User PAC: update',
    'data': {
      filters
    }
  });
  logFilters('Premium loose: '); // proxy.setState({ filters }).finally( () => {
  //  logFilters( 'Premium loose: ' );
  //});
});
bg_onStartAction(async () => {
  general_storage/* default.set */.Z.set('user properties observer', false);
  const {
    'userPac': pac,
    user
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  if (!user.email) return; // Not logined

  try {
    await UserPropertiesObserver.enable();
  } catch (error) {}

  removeWrongFilters({
    'filters': pac.filters,
    'premiumUser': user.premium,
    'setProxyState': data => {
      general_store/* default.dispatch */.Z.dispatch({
        'type': 'User PAC: update',
        data
      });
    }
  });
});
/* harmony default export */ const bg_UserPropertiesObserver = (UserPropertiesObserver);
;// CONCATENATED MODULE: ./src/bg/webRequest/checkAuthLimitExceeded.ts
/* global OnAuthRequiredDetails */



const sectionName
/*: string*/
= 'Check auth limit. ';
const timeFrameMs
/*: integer*/
= 10000;
const authRequestsLimit
/*: integer*/
= typeof browser !== 'undefined' ? 200 : 10;
/** @function */

const makeHostDecision = (hostInfo, timestamp) => {
  // No information
  if (!hostInfo || !hostInfo.periodStart || !hostInfo.authRequestsNum) {
    let object = {
      'periodStart': timestamp,
      'authRequestsNum': 1
    };
    return {
      'breakAuthProccess': false,
      'newHostInfo': object,
      'logs': [[sectionName + 'No host auth history. Create record: ', object]]
    };
  }

  hostInfo = Object.assign({}, hostInfo);
  let logs = [[sectionName + 'Host history record already exists: ', hostInfo]];
  let {
    periodStart
  } = hostInfo; // Timeframe expired

  if (timestamp - periodStart > timeFrameMs) {
    logs.push([sectionName + 'Time frame already finished. Create new row.']);
    return {
      'breakAuthProccess': false,
      'newHostInfo': {
        'periodStart': timestamp,
        'authRequestsNum': 1
      },
      logs
    };
  }

  logs.push([sectionName + 'We are still in tracked time frame. Increase auth requests counter']);
  let newCount = hostInfo.authRequestsNum + 1;

  if (newCount < authRequestsLimit) {
    hostInfo.authRequestsNum++;
    return {
      'breakAuthProccess': false,
      'newHostInfo': hostInfo,
      logs
    };
  } else {
    logs.push([sectionName + 'Limit exceeded. Return true and clear host auth history']);
    return {
      'breakAuthProccess': true,
      'newHostInfo': undefined,
      logs
    };
  }
};
/** @function */


/* harmony default export */ const checkAuthLimitExceeded = (async ({
  'challenger': {
    host
  },
  'timeStamp': timestamp
}) => {
  let authHistory = (await general_storage/* default.get */.Z.get('authHistory')) || {};
  let {
    breakAuthProccess,
    newHostInfo,
    logs
  } = makeHostDecision(authHistory[host], timestamp);
  if (newHostInfo) authHistory[host] = newHostInfo;else delete authHistory[host];

  if (!breakAuthProccess) {
    dualUse_ga.partial({
      'category': 'auth_request_limit_exceeded'
    });
  }

  logs.push([sectionName + 'Save auth history: ', authHistory]);
  log/* default.group */.Z.group('Check onAuthRequired limit exceeded', logs);
  general_storage/* default.set */.Z.set('authHistory', authHistory);
  return breakAuthProccess;
});
;// CONCATENATED MODULE: ./src/bg/chromeVersion.ts
/* harmony default export */ const chromeVersion = ((() => {
  if (typeof browser !== 'undefined') return;
  let matches = navigator.userAgent.match(/Chrome\/([0-9]+)/);
  if (!matches) return;
  return Number(matches[1]);
})());
;// CONCATENATED MODULE: ./src/dualUse/highLevelPac/index.ts
/* global SiteFilter, UserPac */




const {
  _: highLevelPac_
} = self;
const highLevelPac_defaultCountry = (production_default()).proxy.defaultCountry || 'nl';
/** Enable proxy with desired country
@method
@param country - 2 letter code */

const setCountry = async country => {
  const {
    userPac
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const pac = Object.assign(highLevelPac_.cloneDeep(userPac), {
    'mode': 'proxy',
    country
  });
  general_store/* default.dispatch */.Z.dispatch({
    'type': 'User PAC: set',
    'data': pac
  });
  return pac;
};
/** Enable proxy
@method */


const enable = async () => {
  const {
    userPac
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  return setCountry(userPac.country || highLevelPac_defaultCountry);
};
/** Disable proxy
@method */


const disable = async () => {
  const {
    userPac
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const pac = Object.assign(highLevelPac_.cloneDeep(userPac), {
    'mode': 'direct'
  });
  general_store/* default.dispatch */.Z.dispatch({
    'type': 'User PAC: set',
    'data': pac
  });
  return pac;
};

const siteFilters = {
  /** Add filter to filters list
  @method */
  'add': async ({
    'country': argCountry,
    domain,
    type
  }) => {
    const {
      userPac
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const country = argCountry || userPac.country || highLevelPac_defaultCountry;
    const filters = userPac.filters.slice();
    filters.push({
      country,
      'format': 'domain',
      'proxyMode': type === 'proxy',
      'value': domain
    });
    filters.sort(filtersSorting);
    const pac = Object.assign(highLevelPac_.cloneDeep(userPac), {
      filters
    });
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'User PAC: set',
      'data': pac
    });
    return pac;
  },

  /** Remove filter with this domain from filters list
  @method */
  'remove': async domain => {
    const {
      userPac
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const filters = userPac.filters.slice();

    highLevelPac_.remove(filters, item => item.value === domain);

    const pac = Object.assign(highLevelPac_.cloneDeep(userPac), {
      filters
    });
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'User PAC: set',
      'data': pac
    });
    return pac;
  },

  /** Convert proxy filter to direct OR direct to proxy
  @method */
  'toggle': async domain => {
    const {
      userPac
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const filter = userPac.filters.find(item => item.format !== 'regex' && item.value === domain);

    if (!filter) {
      throw new Error(`Nonexistent domain ${domain} passed to highLevelPac.toggle`);
    }

    const country = !filter.proxyMode ? filter.country : null;
    return siteFilters.changeCountry({
      domain,
      country
    });
  },

  /** Change country for proxy filter
  @method */
  'changeCountry': async ({
    country,
    domain
  }) => {
    const {
      userPac
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();

    const filters = highLevelPac_.cloneDeep(userPac.filters);

    const filter = findMatchingFilterForDomain(filters, domain); // Change country for existing filter

    if (filter) {
      if (country) filter.country = country;
      filter.proxyMode = Boolean(country);
      const pac = Object.assign(highLevelPac_.cloneDeep(userPac), {
        filters
      });
      general_store/* default.dispatch */.Z.dispatch({
        'type': 'User PAC: set',
        'data': pac
      });
      return pac;
    } // Add new filter


    if (!country) return siteFilters.add({
      domain,
      'type': 'proxy'
    });
    return siteFilters.add({
      country,
      domain,
      'type': 'proxy'
    });
  }
};
/* harmony default export */ const highLevelPac = ({
  disable,
  enable,
  setCountry,
  siteFilters
});
;// CONCATENATED MODULE: ./src/bg/webRequest/onAuthRequired.ts
/* global OnAuthRequiredDetails */










const {
  _: onAuthRequired_
} = self;
/** @function */

/* harmony default export */ const onAuthRequired = (() => {
  code_default().webRequest.onAuthRequired.addListener(async details => {
    const {
      proxyDomains,
      proxyServers
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const storageDomains = await general_storage/* default.get */.Z.get('onAuthRequired domains');
    const secondLevelDomains = storageDomains || proxyDomains.premium;
    const ports = new Set();

    for (const {
      'premium': list
    } of proxyServers.values()) {
      if (list) for (const {
        port
      } of list) ports.add(port);
    }

    {
      const logDetails = onAuthRequired_.cloneDeep(details);

      if ((production_default()).type !== 'development') {
        // Hide user details from logging
        delete logDetails.ip;
        delete logDetails.url;
      }

      (0,log/* default */.Z)('onAuthRequired. Details', logDetails);
    }
    const {
      challenger
    } = details;

    const ourProxy = (() => {
      if (!secondLevelDomains.length) return false;
      return secondLevelDomains.some(domain => challenger.host === domain || challenger.host.endsWith('.' + domain)) && ports.has(challenger.port);
    })(); // If auth request is not from browsec proxy, do not handle it.


    if (!details.isProxy || details.realm !== 'Browsec' || !ourProxy) {
      return Promise.resolve();
    }

    const {
      user
    } = general_store/* default.getStateSync */.Z.getStateSync();
    return new Promise(async resolve => {
      if (user.type === 'guest') {
        // TS crap
        highLevelPac.disable();
        dualUse_ga.partial({
          'category': 'extension',
          'action': 'auth_error'
        });
        alert(internationalize('cant_authenticate_please_contact_browsec_support'));
        return;
      }

      let email = user.email;
      let password = user.loginData.credentials.access_token;

      if (await checkAuthLimitExceeded(details)) {
        // Limit reached
        highLevelPac.disable();
        dualUse_ga.partial({
          'category': 'extension',
          'action': 'auth_limit_error'
        });
        alert(internationalize('premium_server_authentication_error'));
      } else {
        // Limit not reached
        if ((production_default()).type !== 'development') {
          (0,log/* default */.Z)('Authenticate on proxy with email');
        } else {
          (0,log/* default */.Z)('Authenticate on proxy with email: ', email);
        }

        resolve({
          'authCredentials': {
            'username': email,
            password
          }
        });
      }
    });
  }, '<all_urls>', chromeVersion && chromeVersion >= 73 ? ['asyncBlocking', 'extraHeaders'] : ['asyncBlocking']);
});
;// CONCATENATED MODULE: ./src/bg/webRequest/onBeforeSendHeaders.ts
/* global WebRequestHttpHeader */




const onBeforeSendHeaders_manifestVersion = chrome.runtime.getManifest().manifest_version;
/* harmony default export */ const onBeforeSendHeaders = (async () => {
  if (onBeforeSendHeaders_manifestVersion === 3) return;
  await general_store/* default.ready */.Z.ready;
  /** Especially for site browsec.com -> modify headers to know user installed
  extension and credentials for automatic login */

  code_default().webRequest.onBeforeSendHeaders.addListener(({
    url,
    requestHeaders
  }) => {
    if (!url.includes('/api/') && !url.includes('/assets/')) {
      var _store$getStateSync$u;

      requestHeaders.push({
        'name': 'X-Browsec-Installed',
        'value': '1'
      });
      const credentials = (_store$getStateSync$u = general_store/* default.getStateSync */.Z.getStateSync().user.loginData) === null || _store$getStateSync$u === void 0 ? void 0 : _store$getStateSync$u.credentials;

      if (credentials) {
        requestHeaders.push({
          'name': 'Authorization',
          'value': encodeTokenCredentials(credentials)
        });
      }
    }

    return {
      requestHeaders
    };
  }, {
    'urls': production_default().siteAuthorizationDomains.map(domain => `https://${domain}/*`)
  }, ['blocking', 'requestHeaders']);
});
;// CONCATENATED MODULE: ./src/general/tools/findMatchingDependencyForDomain.ts
/* global DomainDependency */

/** @function */

/* harmony default export */ const findMatchingDependencyForDomain = ((dependencies, domain) => dependencies.find(({
  'domain': domainArray,
  fullDomain,
  regex
}) => findMatchingFilterForDomain(domainArray.map(value => ({
  value,
  'format': 'domain'
})), domain) || findMatchingFilterForDomain(fullDomain.map(value => ({
  value,
  'format': 'full domain'
})), domain) || findMatchingFilterForDomain(regex.map(value => ({
  value,
  'format': 'regex'
})), domain)));
;// CONCATENATED MODULE: ./src/bg/trafficCounter.ts



const limits = {
  'traffic_in_1mb': Math.pow(1024, 2) * 1,
  'traffic_in_3mb': Math.pow(1024, 2) * 3,
  'traffic_in_5mb': Math.pow(1024, 2) * 5,
  'traffic_in_10mb': Math.pow(1024, 2) * 10,
  'traffic_in_100mb': Math.pow(1024, 2) * 100,
  'traffic_in_1gb': Math.pow(1024, 3) * 1,
  'traffic_in_3gb': Math.pow(1024, 3) * 3,
  'traffic_in_5gb': Math.pow(1024, 3) * 5,
  'traffic_in_10gb': Math.pow(1024, 3) * 10,
  'traffic_in_100gb': Math.pow(1024, 3) * 100,
  'traffic_in_1tb': Math.pow(1024, 4) * 1,
  'traffic_in_3tb': Math.pow(1024, 4) * 3,
  'traffic_in_5tb': Math.pow(1024, 4) * 5,
  'traffic_in_10tb': Math.pow(1024, 4) * 10,
  'traffic_in_100tb': Math.pow(1024, 4) * 100
};
/* harmony default export */ const trafficCounter = (new class {
  constructor() {
    this.delayedSize = 0;
    this.size = 0;
    this.initiated = false;
    this.listeners = [];

    this.sizePromise = (async () => {
      const size = (await general_storage/* default.get */.Z.get('trafficCounter')) || 0; // @ts-ignore

      this.size = this.delayedSize + size;
      this.initiated = true;
      return this.size;
    })();
    /** @function */


    const loop = () => {
      general_storage/* default.set */.Z.set('trafficCounter', this.size);
      setTimeout(loop, 30 * 1000);
    };

    setTimeout(loop, 30 * 1000);
  }
  /** @method */


  add(size) {
    var _Object$entries$find;

    if (!size) return;
    const old = this.initiated ? this.size : this.delayedSize;
    const recent = old + size;
    if (this.initiated) this.size = recent;else this.delayedSize = recent;
    const key = (_Object$entries$find = Object.entries(limits).find(([key, limit]) => old < limit && limit <= recent)) === null || _Object$entries$find === void 0 ? void 0 : _Object$entries$find[0];
    if (!key) return; // Limit breach

    dualUse_ga.full({
      'category': 'traffic',
      'action': key
    });
    jitsu.track(key);

    if (this.initiated) {
      this.listeners.forEach(listener => {
        listener(recent, old);
      });
    }
  }
  /** @method */


  async get() {
    return this.initiated ? this.size : this.sizePromise;
  }
  /** @method */


  addListener(listener) {
    this.listeners.push(listener);
  }
  /** @method */


  removeListener(listener) {
    this.listeners = this.listeners.filter(item => item !== listener);
  }

}());
;// CONCATENATED MODULE: ./src/bg/webRequest/onCompleted.ts
/* global OnCompletedDetails, SiteFilter */










/** @function */

/* harmony default export */ const onCompleted = (() => {
  code_default().webRequest.onCompleted.addListener(async ({
    parentFrameId,
    url
  }) => {
    if (parentFrameId !== -1) return;
    let domain = urlToDomain(url);
    if (!domain) return; // Case of local browser page

    let {
      'userPac': pac
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    let {
      mode,
      filters
    } = pac;
    let filter = findMatchingFilterForDomain(filters, domain);

    if (filter ? filter.proxyMode : mode === 'proxy') {
      Counters/* default.increase */.Z.increase('proxied pages');
      jitsu.track('connection');
      trySendDailyRetention();
    }
  }, {
    'urls': ['<all_urls>'],
    'types': ['main_frame']
  });
  code_default().webRequest.onCompleted.addListener(async details => {
    const domain = (() => {
      try {
        return new URL(details.url).hostname;
      } catch (x) {}
    })();

    if (!domain) return;
    const {
      'userPac': pac
    } = await general_store/* default.getStateAsync */.Z.getStateAsync(); // Traffic counter

    const proxyRequest = (() => {
      const filters = pac.filters.filter(({
        disabled
      }) => !disabled);
      let filter = findMatchingFilterForDomain(filters, domain);

      (() => {
        const dependency = findMatchingDependencyForDomain(domainDependencies, domain);
        if (!dependency) return;
        filter = filters.find(({
          value
        }) => typeof value === 'string' && (dependency.domain.some(item => value === item || value.endsWith('.' + item)) || dependency.fullDomain.includes(value)));
      })();

      if (filter) return filter.proxyMode;
      return pac.mode === 'proxy';
    })();

    if (proxyRequest) {
      var _details$responseHead;

      const bytes = Number((_details$responseHead = details.responseHeaders.find(({
        name
      }) => name.toLowerCase() === 'content-length')) === null || _details$responseHead === void 0 ? void 0 : _details$responseHead.value);
      if (bytes) trafficCounter.add(bytes);
    }
  }, {
    'urls': ['<all_urls>']
  }, typeof browser === 'undefined' ? ['responseHeaders', 'extraHeaders'] // extraHeaders only for Chrome
  : ['responseHeaders']);
});
;// CONCATENATED MODULE: ./src/bg/webRequest/onHeadersReceived.ts



/* harmony default export */ const onHeadersReceived = (() => {
  if (typeof browser !== 'undefined') return; // Only for Chrome

  const version = code_default().runtime.getManifest().version;
  const sentDomains = [];
  code_default().webRequest.onHeadersReceived.addListener(async details => {
    var _details$responseHead;

    const domain = (() => {
      try {
        return new URL(details.url).hostname;
      } catch (x) {}
    })();

    if (!domain) return;
    const {
      user
    } = await general_store/* default.getStateAsync */.Z.getStateAsync(); // Proxy error GA requests

    if (!user.premium) return;
    if (details.statusCode !== 407) return;
    const headerValue = (_details$responseHead = details.responseHeaders.find(({
      name
    }) => name === 'proxy-authenticate')) === null || _details$responseHead === void 0 ? void 0 : _details$responseHead.value;
    if (headerValue !== 'Basic realm="Browsec"') return;
    const sameDomainEntry = sentDomains.find(item => item.domain === domain);
    const currentStamp = performance.now();
    const makeRequest = !sameDomainEntry || sameDomainEntry.timestamp + 3600 * 1000 < currentStamp;
    if (!makeRequest) return;
    if (sameDomainEntry) sameDomainEntry.timestamp = currentStamp;else sentDomains.push({
      domain,
      'timestamp': currentStamp
    });
    dualUse_ga.full({
      'category': 'extension',
      'action': 'proxyAuthError',
      'label': `${domain} | ${version}`
    });
  }, {
    'urls': ['<all_urls>']
  }, ['extraHeaders', 'responseHeaders']);
});
;// CONCATENATED MODULE: ./src/bg/webRequest/index.ts





/** @function */

/* harmony default export */ const webRequest = (() => {
  if (!(code_default()).webRequest) return; // Count of proxied pages

  /*Browser.webRequest.onBeforeSendHeaders.addListener(
    ({ url }) => {
      if( !store.getStateSync().proxy.connected ) return;
      Counters.increase( 'proxied pages' );
    },
    { 'urls': [ '<all_urls>' ], 'types': [ 'main_frame' ] }
  );*/

  onAuthRequired();
  onBeforeSendHeaders();
  onCompleted();
  onHeadersReceived();
});
;// CONCATENATED MODULE: ./src/bg/webrtc.ts
/* global Credentials, StoreState */





;
const constrolStates = Object.freeze(['controllable_by_this_extension', 'controlled_by_this_extension']);

let whenWebrtcAvailable = (async () => {
  if (typeof browser !== 'undefined') {
    let {
      version
    } = await code_default().runtime.getBrowserInfo();
    let majorVersion = Number(version.split('.')[0]);
    return majorVersion > 55;
  }

  try {
    new ImageData(100, 100);
    return true;
  } catch (error) {
    return false;
  }
})();
/** Do we have control over WebRTC settings
@function */


const getControlState = async () => {
  let webrtcAvailable = await whenWebrtcAvailable;
  if (!webrtcAvailable) return 'not available';
  let {
    permissions
  } = await code_default().permissions.getAll();
  if (!permissions.includes('privacy')) return 'permission not granted';
  let network = (code_default()).privacy.network;
  let {
    levelOfControl
  } = await network.webRTCIPHandlingPolicy.get();
  return constrolStates.includes(levelOfControl) ? 'controlled' : 'not controlled';
};
/** @function */


const storeWebrtcBlock = value => {
  general_store/* default.dispatch */.Z.dispatch({
    'type': 'WebRTC blocking: set',
    'data': value
  });
  let {
    user
  } = general_store/* default.getStateSync */.Z.getStateSync();
  if (user.type === 'guest') return;
  let credentials = user.loginData.credentials;
  if (credentials) ajaxes.setWebrtcBlock({
    credentials,
    'webrtcBlock': value
  });
};

let webRtc = new class {
  /** @private @method */
  async _setWithPermissionRequest(protection) {
    code_default().resetAPI('privacy'); // Eternal privacy permission will not update API !

    await this.set(protection);
  }
  /** Disable protection and deactivate it
  @method */


  async disable() {
    await this._setWithPermissionRequest(false);
    storeWebrtcBlock(false);
  }
  /** Enable protection and activate it if proxy enabled
  @method */


  async enable() {
    let {
      userPac
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    let proxyEnabled = userPac.mode === 'proxy';
    await this._setWithPermissionRequest(proxyEnabled);
    storeWebrtcBlock(true);
  }
  /** @method */


  async get() {
    let {
      webrtcBlock
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    return webrtcBlock;
  }
  /** @method */


  getControlState() {
    return getControlState();
  }
  /** @method */


  isAvailable() {
    return whenWebrtcAvailable;
  }
  /** Set actual WebRTC
  @method
  @param protection - true -> block WebRTC */


  async set(protection) {
    let controlState = await getControlState();

    if (controlState !== 'controlled') {
      throw new Error('WebRTC settings are controlled by another extension');
    }

    let network = (code_default()).privacy.network; // Chrome 48+ & FF 54+

    let value = await (async () => {
      if (!protection) return 'default'; // Chrome

      if (typeof browser === 'undefined') return 'disable_non_proxied_udp'; // FF

      let {
        version
      } = await code_default().runtime.getBrowserInfo();
      let versionNumber = Number(version.split('.')[0]);
      return versionNumber >= 70 ? 'proxy_only' : 'disable_non_proxied_udp';
    })();
    await network.webRTCIPHandlingPolicy.set({
      value
    });
  }

}();
general_store/* default.onChange */.Z.onChange(({
  'userPac': pac
}) => pac.mode === 'proxy', async proxyEnabled => {
  let blocking = await webRtc.get();
  if (!blocking) return;

  try {
    await webRtc.set(proxyEnabled);
  } catch (error) {}
}); // Initial

bg_onStartAction(async () => {
  let block = await webRtc.get();
  if (block === null) return; // Try to set settings again on every startup

  let controlState = await webRtc.getControlState();
  if (controlState !== 'controlled') return;

  try {
    if (block) await webRtc.enable();else await webRtc.disable();
  } catch (error) {
    log/* default.warn */.Z.warn('Initial WebRTC setup failed');
  }
});
/* harmony default export */ const webrtc = (webRtc);
;// CONCATENATED MODULE: ./src/general/tools/weightedRandom.ts
/** Returns random int value between 0 (inclusive) and the specified value (exclusive)
@function */
let randomInt = max => Math.floor(Math.random() * max);
/**
Returns random array element using weights. Element weight should be stored in 'weight' property of array element.
If 'weight' property is absent then weight for this element is 1.
@function
@return - one of array elements */


/* harmony default export */ const weightedRandom = (array => {
  let totalWeight = 0;
  let map = array.map(({
    weight
  }) => {
    weight = weight || 1;
    let start = totalWeight;
    totalWeight += weight;
    return {
      start,
      'end': totalWeight
    };
  });
  let random = randomInt(totalWeight);

  for (let i = 0; i < map.length; i++) {
    if (random >= map[i].start && random < map[i].end) {
      return array[i];
    }
  }

  throw new Error('Error with weightedRandom return');
});
// EXTERNAL MODULE: ./src/general/tools/proxyServersDispatchChanges.ts
var proxyServersDispatchChanges = __webpack_require__(4516);
// EXTERNAL MODULE: ./src/servers.json
var src_servers = __webpack_require__(6567);
;// CONCATENATED MODULE: ./src/bg/serversObject/validateServersObject.ts
/* global RawServersObject */

/** ! Partially mutates initial object
@function */
/* harmony default export */ const validateServersObject = (object => {
  if (!object || typeof object !== 'object') {
    throw new Error('Servers object should be an object');
  } /// Countries


  const {
    countries,
    domains,
    version
  } = object;

  if (!countries || typeof countries !== 'object') {
    throw new Error('Servers.countries should be an object');
  }

  const keys = Object.keys(countries);

  if (keys.length === 0) {
    throw new Error('Servers.countries should have at least one country');
  }

  for (const key of keys) {
    const value = countries[key]; // Country value is not an object

    if (!value || typeof value !== 'object') {
      delete countries[key];
      continue;
    }

    let freeExist = true;

    if (!Array.isArray(value.servers)) {
      freeExist = false;
    } else {
      value.servers = value.servers.filter(server => typeof (server === null || server === void 0 ? void 0 : server.host) === 'string' && typeof (server === null || server === void 0 ? void 0 : server.port) === 'number');

      if (!value.servers.length) {
        freeExist = false;
        delete value.servers;
      }
    }

    let premiumExist = true;

    if (!Array.isArray(value.premium_servers)) {
      premiumExist = false;
    } else {
      // @ts-ignore
      value.premium_servers = value.premium_servers.filter(server => typeof (server === null || server === void 0 ? void 0 : server.host) === 'string' && typeof (server === null || server === void 0 ? void 0 : server.port) === 'number');

      if (!value.premium_servers.length) {
        premiumExist = false;
        delete value.premium_servers;
      }
    }

    if (!freeExist && !premiumExist) {
      delete countries[key];
      continue;
    }

    if (Array.isArray(value.fast_servers)) {
      value.fast_servers = value.fast_servers.filter(server => typeof (server === null || server === void 0 ? void 0 : server.host) === 'string' && typeof (server === null || server === void 0 ? void 0 : server.port) === 'number');
      if (!value.fast_servers.length) delete value.fast_servers;
    }

    if ('timezoneOffset' in value && typeof value.timezoneOffset !== 'number') {
      delete value.timezoneOffset;
    }
  }

  if (Object.keys(countries).length === 0) {
    throw new Error('Servers.countries should have at least one valid country');
  } /// Domains


  if (!domains || typeof domains !== 'object') {
    throw new Error('Servers.domains should be an object');
  }

  if (!Array.isArray(domains.free)) {
    throw new Error('Servers.domains.free should be an array');
  }

  if (!Array.isArray(domains.premium)) {
    throw new Error('Servers.domains should be an an array');
  } // Remove not strings


  domains.free = domains.free.filter(item => typeof item === 'string');
  domains.premium = domains.premium.filter(item => typeof item === 'string');

  if (!domains.free.length) {
    throw new Error('Servers.domains.free should be not empty array of strings');
  }

  if (!domains.premium.length) {
    throw new Error('Servers.domains.premium should be not empty array of strings');
  }

  return {
    countries,
    domains,
    version
  };
});
;// CONCATENATED MODULE: ./src/bg/serversObject/index.ts
/* global RawServersObject */















const {
  _: serversObject_
} = self;
const serversObject_timeout = Object.freeze({
  'retry': 5 * 60 * 1000,
  'refreshFree': 6 * 3600 * 1000,
  'refreshPremium': 3600 * 1000
});
const disableUpdate = false; // NOTE Used only for developer purposes

const alarmName = 'server list update';
/** @function */

const getDataAndUpdateServers = async () => {
  const oldServers = (await general_storage/* default.get */.Z.get('serversObject')) || src_servers; // Not validated object

  let servers = await ajaxes.servers(); // Validate servers object

  servers = validateServersObject(servers);
  {
    // Store authorization domains
    const storageDomains = (await general_storage/* default.get */.Z.get('onAuthRequired domains')) || [];
    const domains = new Set(storageDomains);

    for (const domain of servers.domains.premium) {
      domains.add(domain);
    }

    general_storage/* default.set */.Z.set('onAuthRequired domains', Array.from(domains));
  }
  general_storage/* default.set */.Z.set('serversObject', servers);
  timemarks.set('servers');
  (0,proxyServersDispatchChanges/* default */.Z)({
    'object': servers,
    store: general_store/* default */.Z
  }); // Update proxy settings if server list changed

  if (!serversObject_.isEqual(servers, oldServers)) {
    try {
      await proxy.setFromStore();
    } catch (x) {
      throw new Error('Server list update: failed to update proxy settings');
    }
  }
};
/** @function */


const loopAction = async () => {
  try {
    const oldServers = (await general_storage/* default.get */.Z.get('serversObject')) || src_servers; // let { 'servers': oldServers } = await store.getStateAsync();

    let servers;
    const timer = new DelayRecord('Server list');
    await availableServer.initialRequestComplete;

    try {
      // Not validated object
      servers = await ajaxes.servers();
    } catch (originalError) {
      let {
        message,
        status
      } = originalError;
      let error = {
        status,
        'error': message
      };
      log/* default.error */.Z.error('ajaxes.servers', error);
      dualUse_ga.partial({
        'category': 'error',
        'action': 'browsec.servers',
        'label': JSON.stringify(error)
      });
      throw originalError;
    } finally {
      timer.end();
    } // Validate servers object


    servers = validateServersObject(servers);
    {
      // Store authorization domains
      const storageDomains = (await general_storage/* default.get */.Z.get('onAuthRequired domains')) || [];
      const domains = new Set(storageDomains);

      for (const domain of servers.domains.premium) {
        domains.add(domain);
      }

      general_storage/* default.set */.Z.set('onAuthRequired domains', Array.from(domains));
    }
    general_storage/* default.set */.Z.set('serversObject', servers);
    timemarks.set('servers');
    (0,proxyServersDispatchChanges/* default */.Z)({
      'object': servers,
      store: general_store/* default */.Z
    }); // Update proxy settings if server list changed

    if (!serversObject_.isEqual(servers, oldServers)) {
      try {
        await lowLevelPac.shuffle();
        await proxy.setFromStore();
      } catch (x) {
        throw new Error('Server list update: failed to update proxy settings');
      }
    }

    alarms/* default.clear */.Z.clear(alarmName);
    alarms/* default.createOneTime */.Z.createOneTime(alarmName, {
      'delay': general_store/* default.getStateSync */.Z.getStateSync().user.premium ? serversObject_timeout.refreshPremium : serversObject_timeout.refreshFree
    });
  } catch (error) {
    const minutes
    /*: number*/
    = serversObject_timeout.retry / (60 * 1000);
    log/* default.warn */.Z.warn(`Server list update. Error, retrying in ${minutes} minutes`, error);
    alarms/* default.clear */.Z.clear(alarmName);
    alarms/* default.createOneTime */.Z.createOneTime(alarmName, {
      'delay': serversObject_timeout.retry
    });
  }
};

bg_onStartAction(async () => {
  if (disableUpdate) return;
  general_store/* default.onChange */.Z.onChange(({
    'user': {
      premium
    }
  }) => premium, premium => {
    alarms/* default.clear */.Z.clear(alarmName);
    alarms/* default.createOneTime */.Z.createOneTime(alarmName, {
      'delay': premium ? serversObject_timeout.refreshPremium : serversObject_timeout.refreshFree
    });
  }); // import from import intersection bugfix

  await new Promise(resolve => {
    setTimeout(resolve, 0);
  });
  const {
    user
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const delay = user.premium ? serversObject_timeout.refreshPremium : serversObject_timeout.refreshFree;
  const mark = await timemarks.get('servers');

  if (!mark) {
    loopAction();
    return;
  }

  const timePassed = Date.now() - mark;

  if (timePassed < 0 || timePassed >= delay) {
    loopAction();
    return;
  }

  alarms/* default.createOneTime */.Z.createOneTime(alarmName, {
    'delay': delay - timePassed
  });
});
alarms/* default.on */.Z.on(({
  name
}) => {
  if (name === alarmName) loopAction();
});

;// CONCATENATED MODULE: ./src/bg/browserIcon/browserAction.ts

const browserAction_manifestVersion = code_default().runtime.getManifest().manifest_version;
/* harmony default export */ const browserAction = (browserAction_manifestVersion === 3 ? chrome.action : (code_default()).browserAction);
;// CONCATENATED MODULE: ./src/bg/browserIcon/setIcon.ts

/** @function */

const generateIconSet = fileName => ({
  'path': {
    '16': 'images/icons/16x16' + fileName,
    '19': 'images/icons/19x19' + fileName,
    '24': 'images/icons/24x24' + fileName,
    '32': 'images/icons/32x32' + fileName,
    '38': 'images/icons/38x38' + fileName
  }
});
/** @function */


/* harmony default export */ const setIcon = (type => {
  const iconPath = (() => {
    switch (type) {
      case 'disabled':
        return '/disabled.png';

      case 'disabled notification':
        return '/disabled_notification.png';

      case 'enabled':
        return '/enabled.png';

      case 'enabled notification':
        return '/enabled_notification.png';

      case 'error':
        return '/error.png';

      default:
        throw new Error(`Incorrect type ${type} in setIcon`);
    }
  })();

  browserAction.setIcon(generateIconSet(iconPath));
});
;// CONCATENATED MODULE: ./src/bg/browserIcon/index.ts
/* global DomainDependency, Promotion, ProxyServers, SiteFilter, StoreState */









const {
  _: browserIcon_
} = self;
const browserIcon_defaultCountry = (production_default()).proxy.defaultCountry || 'nl';
const browserIcon_manifestVersion = code_default().runtime.getManifest().manifest_version;
/** @class singleton */

const Icon = new class {
  constructor() {
    this.state = {
      'broken': false,
      'country': null,
      'notification': false
    };
  } // Puts browser icon


  setState({
    broken,
    countries,
    country,
    domain,
    filters,
    mode,
    userHasUnviewedBanners
  }, forceUpdate = false) {
    filters = filters.filter(({
      disabled
    }) => !disabled); // No disabled filters

    let proxyCountry = (() => {
      if (broken) return null; // Proxy broken -> like DIRECT

      if (mode === 'direct') country = null; // NOTE

      if (!domain) return country; // Filters -> direct domain intersection

      let filter = findMatchingFilterForDomain(filters, domain); // Filters -> domain dependency

      if (!filter) {
        (() => {
          const domainDependenciesBlock = findMatchingDependencyForDomain(domainDependencies, domain);
          if (!domainDependenciesBlock) return;
          const {
            'domain': domainArray,
            fullDomain,
            regex
          } = domainDependenciesBlock;
          filter = filters.find(({
            value
          }) => typeof value === 'string' && (findMatchingFilterForDomain(domainArray.map(value => ({
            value,
            'format': 'domain'
          })), value) || findMatchingFilterForDomain(fullDomain.map(value => ({
            value,
            'format': 'full domain'
          })), value) || findMatchingFilterForDomain(regex.map(value => ({
            value,
            'format': 'regex'
          })), value)));
        })();
      }

      if (filter) {
        if (!filter.proxyMode) return null; // Direct filter

        let {
          country
        } = filter;
        return countries.includes(country) ? country : browserIcon_defaultCountry; // Proxy filter
      } // No filter matched


      return country;
    })();

    if (!forceUpdate) {
      let condition = browserIcon_.isEqual(this.state, {
        broken,
        'country': proxyCountry,
        'notification': userHasUnviewedBanners
      });

      if (condition) return; // Do nothing - no changes needed
    }

    const errorIcon = broken && (mode === 'proxy' || filters.some(({
      proxyMode
    }) => proxyMode));

    const iconState = (() => {
      if (errorIcon) return 'error';
      if (proxyCountry) return userHasUnviewedBanners ? 'enabled notification' : 'enabled';
      return userHasUnviewedBanners ? 'disabled notification' : 'disabled';
    })();

    setIcon(iconState);

    if (proxyCountry) {
      browserAction.setBadgeText({
        'text': proxyCountry.toUpperCase()
      });

      if (typeof browser !== 'undefined') {
        browser.browserAction.setBadgeTextColor({
          'color': '#fff'
        });
      }
    } else {
      browserAction.setBadgeText({
        'text': ''
      });

      if (typeof browser !== 'undefined') {
        browser.browserAction.setBadgeTextColor({
          'color': '#fff'
        });
      }
    }

    this.state = {
      broken,
      'country': proxyCountry,
      'notification': userHasUnviewedBanners
    };
  }

}();
/** @function */

const storeStateConversion = state => {
  const {
    domain,
    promotions,
    'proxyIsBroken': broken,
    'proxyServers': servers,
    'user': {
      'premium': premiumUser
    },
    'userPac': {
      country,
      filters,
      mode
    },
    viewedPersonalBanners
  } = state;
  return {
    broken,
    country,
    domain,
    filters,
    mode,
    premiumUser,
    promotions,
    servers,
    viewedPersonalBanners
  };
};
/** @function */


const stateChange = ({
  broken,
  country,
  domain,
  filters,
  mode,
  premiumUser,
  promotions,
  servers,
  viewedPersonalBanners
}, forceUpdate = false) => {
  const countries = Array.from(premiumUser ? servers.premiumCountries() : servers.freeCountries());
  const now = Date.now();
  let userHasUnviewedBanners = false;

  for (const {
    from,
    id,
    kind,
    till
  } of promotions) {
    if (from > now || now > till || kind !== 'personal') continue;
    if (viewedPersonalBanners.includes(id)) continue;
    userHasUnviewedBanners = true;
    break;
  }

  Icon.setState({
    broken,
    countries,
    country,
    domain,
    filters,
    mode,
    userHasUnviewedBanners
  }, forceUpdate);
};

bg_onStartAction(() => {
  // Initial icon state
  browserAction.setBadgeBackgroundColor({
    'color': '#1c304e'
  });

  (async () => {
    const state = await general_store/* default.getStateAsync */.Z.getStateAsync(); // After getting all data from store

    stateChange(storeStateConversion(state), true);
  })();
}); // Store changes subscription

general_store/* default.onChange */.Z.onChange(storeStateConversion, convertedState => {
  stateChange(convertedState, browserIcon_manifestVersion === 3);
});
;// CONCATENATED MODULE: ./src/bg/contentScripts/index.ts
/* global Tab */



const contentScriptDomains = Object.freeze(['bbc.co.uk', 'bbc.com', 'channel4.com', 'chaturbate.com', 'dailymotion.com', 'eporner.com', 'hdrezka.ag', 'hentaihaven.org', 'hitomi.la', 'hotstar.com', 'itv.com', 'myfreecams.com', 'netflix.com', 'nhentai.net', 'pandora.com', 'pornreactor.cc', 'rezka.ag', 'seasonvar.ru', 'spankbang.com', 'spotify.com', 'twitch.tv', 'vimeo.com', 'xhamster.com', 'xnxx.com', 'xvideos.com', 'youtube.com']);
const contentScripts_contentScriptUrl = '/notification.js';
const contentScripts_manifestVersion = code_default().runtime.getManifest().manifest_version;
const usedTabs = new Set();
/** @function */

const inject = (tabId, contentScriptUrl) => {
  usedTabs.add(tabId);

  if (contentScripts_manifestVersion === 3) {
    return chrome.scripting.executeScript({
      'target': {
        tabId
      },
      'files': [contentScriptUrl]
    });
  }

  return code_default().tabs.executeScript(tabId, {
    'file': contentScriptUrl
  });
};
/** @function */


const checkUrlInList = url => {
  const domain = urlToDomain(url);
  if (!domain) return false;
  return contentScriptDomains.includes(domain) || contentScriptDomains.some(item => domain.endsWith('.' + item));
};

code_default().tabs.onUpdated.addListener((tabId, {
  status
}, {
  url
}) => {
  if (status !== 'complete' || !checkUrlInList(url)) return;
  if (usedTabs.has(tabId)) return;
  inject(tabId, contentScripts_contentScriptUrl);
}); // Initial

bg_onStartAction(async () => {
  const tabs = await code_default().tabs.query();
  const loadedTabs = tabs.filter(({
    url,
    status
  }) => checkUrlInList(url) && status === 'complete'); // Inject

  for (const {
    id
  } of loadedTabs) inject(id, contentScripts_contentScriptUrl);
});
;// CONCATENATED MODULE: ./src/bg/daysAfterInstall.ts



/** @function */

const daysAfterInstall_loop = async () => {
  let timestamp = await general_storage/* default.get */.Z.get('daysAfterInstall');

  if (typeof timestamp !== 'number') {
    const now = Date.now();
    general_storage/* default.set */.Z.set('daysAfterInstall', now);
    timestamp = now;
  }

  const days = Math.floor((Date.now() - timestamp) / (24 * 3600 * 1000));
  const {
    'daysAfterInstall': oldValue
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();

  if (days !== oldValue) {
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Days after install: set',
      days
    });
  }
};

time/* default.onStart */.Z.onStart({
  'name': 'days after install',
  'startDelayInMs': 0,
  'repeatInMinutes': 60 // Delay between calculations of day count

}, daysAfterInstall_loop);
;// CONCATENATED MODULE: ./src/bg/declarativeNetRequest.ts
/* global Credentials, DeclarativeNetRequestRule */




const declarativeNetRequest_manifestVersion = chrome.runtime.getManifest().manifest_version;
/** @function */

const setRules = async credentials => {
  if (!credentials) {
    await chrome.declarativeNetRequest.updateDynamicRules({
      'removeRuleIds': [2, 3, 4]
    });
    return;
  }

  const rules = await chrome.declarativeNetRequest.getDynamicRules();
  if (rules.some(({
    id
  }) => id === 2)) return;
  await chrome.declarativeNetRequest.updateDynamicRules({
    'addRules': [{
      'id': 2,
      'priority': 1,
      'action': {
        'type': 'modifyHeaders',
        'requestHeaders': [{
          'header': 'Authorization',
          'operation': 'set',
          'value': encodeTokenCredentials(credentials)
        }]
      },
      'condition': {
        'regexFilter': `^${production_default().baseUrl.replace(/\./g, '\\.')}/.*`,
        'resourceTypes': ['main_frame', 'sub_frame', 'xmlhttprequest']
      }
    }, {
      'id': 3,
      'priority': 2,
      'action': {
        'type': 'modifyHeaders',
        'requestHeaders': [{
          'header': 'Authorization',
          'operation': 'remove'
        }]
      },
      'condition': {
        'regexFilter': `^${production_default().baseUrl.replace(/\./g, '\\.')}/api/.*`,
        'resourceTypes': ['main_frame', 'sub_frame', 'xmlhttprequest']
      }
    }, {
      'id': 4,
      'priority': 2,
      'action': {
        'type': 'modifyHeaders',
        'requestHeaders': [{
          'header': 'Authorization',
          'operation': 'remove'
        }]
      },
      'condition': {
        'regexFilter': `^${production_default().baseUrl.replace(/\./g, '\\.')}/assets/.*`,
        'resourceTypes': ['main_frame', 'sub_frame', 'xmlhttprequest']
      }
    }]
  });
};

(() => {
  if (declarativeNetRequest_manifestVersion !== 3) return; // On status change

  general_store/* default.onChange */.Z.onChange(({
    user
  }) => {
    var _user$loginData;

    return (_user$loginData = user.loginData) === null || _user$loginData === void 0 ? void 0 : _user$loginData.credentials;
  }, credentials => {
    setRules(credentials);
  });
  bg_onStartAction(async () => {
    var _storeState$user$logi;

    // Initial
    const storeState = await general_store/* default.getStateAsync */.Z.getStateAsync();
    setRules((_storeState$user$logi = storeState.user.loginData) === null || _storeState$user$logi === void 0 ? void 0 : _storeState$user$logi.credentials);
  });
})();
;// CONCATENATED MODULE: ./src/bg/FirstPremiumBuy.ts




/** Collect count of days from Statistics.installDate until first login with premium
@class singleton */

let FirstPremiumBuy = new class {
  constructor() {
    this.called = undefined;
    Object.getOwnPropertyNames(this.constructor.prototype).filter(name => name !== 'constructor').forEach(property => {
      // @ts-ignore
      this[property] = this[property].bind(this);
    });
  }
  /** @method */


  async initiate() {
    let value = await general_storage/* default.get */.Z.get('FirstPremiumBuy');
    this.called = value !== '-';
  }
  /** @method */


  async call() {
    if (this.called) return;
    let installDate = await bg_Statistics.get('installDate');
    if (!installDate) return;
    let days = Math.floor((Date.now() - installDate) / (24 * 3600 * 1000));
    general_storage/* default.set */.Z.set('FirstPremiumBuy', String(days));
    this.called = true;
  }

}();
bg_onStartAction(async () => {
  // If user initially logined -> then his data will not be sent
  const storageValue = await general_storage/* default.get */.Z.get('FirstPremiumBuy');

  if (!storageValue) {
    let {
      user
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    general_storage/* default.set */.Z.set('FirstPremiumBuy', user.premium ? 'before' : '-');
  }

  await FirstPremiumBuy.initiate();
  await general_store/* default.ready */.Z.ready; // Subscription to store

  general_store/* default.onChange */.Z.onChange(({
    'user': {
      email,
      premium
    }
  }) => ({
    email,
    premium
  }), (newUser, oldUser) => {
    if (!newUser.email || !oldUser.email) return;
    if (newUser.premium || !oldUser.premium) FirstPremiumBuy.call();
  });
});
/* harmony default export */ const bg_FirstPremiumBuy = ((/* unused pure expression or super */ null && (FirstPremiumBuy)));
;// CONCATENATED MODULE: ./src/bg/ping/countryDelaysToCountryRatings.ts
/* global PingCountryAverage, PingSortedServer, PingRating */
// Actual count of grades
const pieces
/*: integer*/
= 4;
const keyLowLimit
/*: number*/
= 1.8;
const keyHighLimit
/*: number*/
= 2.4;
/** @function */

/* harmony default export */ const countryDelaysToCountryRatings = (({
  delayData,
  servers
}) => {
  // Add little inflation to doubles
  delayData.forEach(delayElement => {
    const delay
    /*: number*/
    = delayElement.delay;
    const doubles
    /*: Array<PingCountryAverage>*/
    = delayData.filter(({
      'delay': ownDelay
    }) => ownDelay === delay);
    if (doubles.length === 1) return;
    doubles.forEach(double => {
      double.delay += Math.random() * 2 - 1;
    });
  });
  if (!delayData.length) throw new Error('delayData is empty');
  let min = delayData[0].delay;
  let max = delayData[0].delay;

  for (const {
    delay
  } of delayData) {
    if (delay < min) min = delay;
    if (delay > max) max = delay;
  }

  const delta = (max - min) / pieces;
  let data = delayData.map(({
    country,
    premium,
    delay
  }) => {
    let mark
    /*: integer*/
    = (() => {
      let floatValue
      /*: number*/
      = (delay - min) / delta; // from 0 to 8 -> 0 - best, 8 - worst

      return pieces - floatValue;
    })();

    return {
      country,
      premium,
      delay,
      mark
    };
  });
  let sorted = data.slice().sort((a, b) => a.mark - b.mark);
  let segments = sorted.slice(0, -1) // Cut end array element
  .map((current, index) => {
    let next = sorted[index + 1];
    let value
    /*: number*/
    = next.mark - current.mark;
    return {
      'start': current,
      'end': next,
      value
    };
  });
  let sortedSegments
  /*: Segment[]*/
  = segments.slice().sort((a, b) => a.value - b.value); // .filter( ({ value }) => value > 0.1 )

  let multipliers = sortedSegments.slice(0, -1) // Cut end array element
  .map((current
  /*: Segment*/
  , index) => {
    let next
    /*: Segment*/
    = sortedSegments[index + 1];
    let multiplier
    /*: number*/
    = next.value / current.value;
    return {
      'denominator': current,
      'numerator': next,
      multiplier
    };
  });
  let modifiedMultipliers
  /*: Multiplier[]*/
  = multipliers.slice().sort((a, b) => a.multiplier - b.multiplier); // Decreasing multipliers more then keyLowLimit to range keyLowLimit - keyHighLimit

  const logBase
  /*: number*/
  = (() => {
    let prevMax
    /*: number*/
    = (modifiedMultipliers.filter(({
      multiplier
    }) => multiplier <= keyLowLimit).pop() || {}).multiplier || 0;
    return Math.max(prevMax * 1.1, keyLowLimit);
  })(); // Change gaps into range [keyLowLimit - keyHighLimit]


  let criticalValues
  /*: Multiplier[]*/
  = modifiedMultipliers.filter(({
    multiplier,
    denominator,
    numerator
  }) => multiplier !== Infinity && multiplier >= keyLowLimit && (denominator.value > 0.1 || numerator.value > 0.1) // Remove too short ranges (they don't create entropy)
  );

  if (criticalValues.length) {
    if (criticalValues.length === 1) criticalValues[0].multiplier = logBase;else {
      let min
      /*: number*/
      = criticalValues[0].multiplier;
      let max
      /*: number*/
      = Math.max(criticalValues[criticalValues.length - 1].multiplier, keyHighLimit);
      let delta
      /*: number*/
      = keyHighLimit - logBase;
      criticalValues.forEach(multiplierData => {
        multiplierData.multiplier = delta * (multiplierData.multiplier - min) / (max - min) + logBase;
      });
    }
    /** Restoring segments */

    let newSegments
    /*: Segment[]*/
    = (() => {
      let currentValues
      /*: number[]*/
      = (() => {
        let previousValue;
        return multipliers.map(({
          denominator,
          numerator,
          multiplier
        }
        /*:
        { 'denominator': Segment, 'numerator': Segment, 'multiplier': number }*/
        ) => {
          var _previousValue;

          let base
          /*: number*/
          = (_previousValue = previousValue) !== null && _previousValue !== void 0 ? _previousValue : denominator.value;
          let currentValue
          /*: number*/
          = base * multiplier;
          previousValue = currentValue; // Loop

          return currentValue;
        });
      })();

      return [multipliers[0].denominator].concat(multipliers.map(({
        numerator
      }
      /*: { 'numerator': Segment }*/
      , index) => {
        numerator.value = currentValues[index];
        return numerator;
      }));
    })();

    {
      let sum
      /*: number*/
      = newSegments.map(({
        value
      }) => value).reduce((carry, value) => carry + value, 0);
      let multiplier
      /*: number*/
      = pieces / sum;
      newSegments = newSegments.map(segment => {
        segment.value *= multiplier;
        return segment;
      });
    }
    {
      let previousValue;
      segments.forEach(({
        start,
        end,
        value
      }
      /*:
      { 'start': PingRating, 'end': PingRating, 'value': number }*/
      , index) => {
        var _previousValue2;

        let base
        /*: number*/
        = (_previousValue2 = previousValue) !== null && _previousValue2 !== void 0 ? _previousValue2 : start.mark;
        end.mark = base + value;
        previousValue = base + value;
      });
    }
  }

  data.forEach((dataElement
  /*: PingRating*/
  ) => {
    var _servers$find;

    const serverLoad = (_servers$find = servers.find(({
      country,
      premium
    }) => dataElement.country === country && dataElement.premium === premium)) === null || _servers$find === void 0 ? void 0 : _servers$find.serverLoad;
    if (typeof serverLoad !== 'number') return;
    let difference
    /*: number*/
    = (1 - serverLoad) * dataElement.mark;
    if (difference > 0 && difference < 1) difference = 1;
    dataElement.mark -= difference;
    if (dataElement.mark < 0) dataElement.mark = 0;
  });
  data.forEach((dataElement
  /*: PingRating*/
  ) => {
    dataElement.mark = Math.floor(2 + dataElement.mark);
    if (dataElement.mark === 6) dataElement.mark = 5;
    dataElement.delay = Math.round(dataElement.delay);
  });
  return data;
});
;// CONCATENATED MODULE: ./src/bg/ping/delaysToCountryDelays.ts
/* global HostPing, PingCountryAverage, PingSortedServer */

/** Convert host-based ping data to country-based ping data
@function */
/* harmony default export */ const delaysToCountryDelays = (({
  servers,
  'pings': prePings
}) => {
  const pings = [];

  for (const {
    host,
    valid,
    delay
  } of prePings) {
    if (valid && delay) pings.push({
      host,
      delay
    });
  } // Get delays per country


  const countryDelays = [];

  for (const {
    country,
    premium,
    hosts
  } of servers) {
    const delays = [];

    for (const host of hosts) {
      var _pings$find;

      const delay = (_pings$find = pings.find(ping => ping.host === host)) === null || _pings$find === void 0 ? void 0 : _pings$find.delay;
      if (delay) delays.push(delay);
    }

    if (delays.length) countryDelays.push({
      country,
      premium,
      delays
    });
  } // Remove most bad 10% of delays per each country


  return countryDelays.map(({
    country,
    premium,
    delays
  }) => {
    if (delays.length === 1) {
      return {
        country,
        premium,
        'delay': delays[0]
      };
    }

    let cropLimit
    /*: integer*/
    = Math.floor(delays.length * 0.1) || 1;
    delays = delays.sort((a, b) => a - b).slice(0, delays.length - cropLimit);
    let delay
    /*: integer*/
    = Math.round(delays.reduce((carry, value) => carry + value, 0) / delays.length);
    return {
      country,
      premium,
      delay
    };
  });
});
;// CONCATENATED MODULE: ./src/bg/ping/getSortedServers.ts
/* global PingSortedServer, ProxyServers */
const serverLoad = Object.freeze([{
  'country': 'at',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'au',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'be',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'bg',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'ca',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'ch',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'de',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'dk',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'es',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'fi',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'fr',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'hk',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'ie',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'in',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'it',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'jp',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'lt',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'lv',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'nl',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'nl',
  'premium': false,
  'serverLoad': 0.5
}, {
  'country': 'no',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'ro',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'ru',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'se',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'sg',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'sg',
  'premium': false,
  'serverLoad': 0.5
}, {
  'country': 'tr',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'ua',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'uk',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'uk',
  'premium': false,
  'serverLoad': 0.5
}, {
  'country': 'us',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'us',
  'premium': false,
  'serverLoad': 0.5
}, {
  'country': 'usw',
  'premium': true,
  'serverLoad': 1
}, {
  'country': 'za',
  'premium': true,
  'serverLoad': 1
}]);
/** @function */

/* harmony default export */ const getSortedServers = (({
  freeDomain,
  preiumDomain,
  proxyServers
}) => {
  const output = [];

  for (const [country, {
    free,
    premium
  }] of proxyServers) {
    if (premium) {
      var _serverLoad$find;

      const load
      /*: number*/
      = ((_serverLoad$find = serverLoad.find(({
        'country': ownCountry,
        premium
      }) => ownCountry === country && premium)) === null || _serverLoad$find === void 0 ? void 0 : _serverLoad$find.serverLoad) || 1;
      output.push({
        country,
        'premium': true,
        'serverLoad': load,
        'hosts': premium.map(({
          prefix
        }) => prefix + '.' + preiumDomain)
      });
    }

    if (free) {
      var _serverLoad$find2;

      const load
      /*: number*/
      = ((_serverLoad$find2 = serverLoad.find(({
        'country': ownCountry,
        premium
      }) => ownCountry === country && !premium)) === null || _serverLoad$find2 === void 0 ? void 0 : _serverLoad$find2.serverLoad) || 1;
      output.push({
        country,
        'premium': false,
        'serverLoad': load,
        'hosts': free.map(({
          prefix
        }) => prefix + '.' + freeDomain)
      });
    }
  }

  return output;
});
;// CONCATENATED MODULE: ./src/general/tools/checkServerTestUrl.ts
/** @function */
/* harmony default export */ const tools_checkServerTestUrl = ((url, delay) => {
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : undefined;
  const signal = controller === null || controller === void 0 ? void 0 : controller.signal;

  const promise = (async () => {
    var _data;

    const stamp = performance.now();
    const response = await new Promise((resolve, reject) => {
      const options = {
        'method': 'GET'
      };
      if (signal) Object.assign(options, {
        signal
      });
      fetch(url, options).then(resolve, reject);

      if (!controller) {
        setTimeout(() => {
          reject(new Error(`Test server request for ${url}: timeout reached`));
        }, delay);
      }
    });
    if (!response.ok) throw new Error(response.statusText);
    let data;

    try {
      data = await response.json();
    } catch (error) {
      if (signal !== null && signal !== void 0 && signal.aborted) return 0; // Nothing to do, request aborted

      throw new Error(`Test server request for ${url}: not correct response data`);
    }

    if (((_data = data) === null || _data === void 0 ? void 0 : _data.ok) !== true) {
      throw new Error(`Test server request for ${url}: not correct response data`);
    }

    return performance.now() - stamp;
  })();

  if (controller) setTimeout(() => {
    controller.abort();
  }, delay);
  return {
    'cancel': () => {
      var _controller$abort;

      controller === null || controller === void 0 ? void 0 : (_controller$abort = controller.abort) === null || _controller$abort === void 0 ? void 0 : _controller$abort.call(controller);
    },
    promise
  };
});
;// CONCATENATED MODULE: ./src/bg/ping/hostsToPings.ts
/* global HostPing */


const connectionsLimit = 6;
/** Get pure not any-how changed pings on every host
@function */

/* harmony default export */ const hostsToPings = (async hosts => {
  const pings = [];
  const deferreds = hosts.map(host => {
    const url
    /*: string*/
    = `http://${host}/api/test?` + Math.floor(Math.random() * 1000000000000);
    const start = new Deferred/* default */.Z();
    const end = new Deferred/* default */.Z();
    const deferredItem = {
      end,
      host,
      start,
      'started': false
    };
    start.then(() => {
      deferredItem.started = true;

      (async () => {
        try {
          const controlObject = tools_checkServerTestUrl(url, 10 * 1000);
          const delay = await controlObject.promise;
          pings.push({
            host,
            delay,
            'valid': true
          });
        } catch (error) {
          pings.push({
            host,
            'valid': false
          });
        } finally {
          end.resolve();
        }
      })();
    });
    end.then(() => {
      const next = deferreds.find(({
        started
      }) => !started);
      if (next) next.start.resolve();
    });
    return deferredItem;
  }); // Initial start

  deferreds.slice(0, connectionsLimit).forEach(({
    start
  }) => {
    start.resolve();
  });
  await Promise.all(deferreds.map(({
    end
  }) => end));
  return pings;
});
;// CONCATENATED MODULE: ./src/bg/ping/getRatings.ts
/* global HostPing, PingCountryAverage, PingRating, PingSortedServer */






const {
  _: getRatings_
} = self;
/** @function */

/* harmony default export */ const getRatings = (async () => {
  const {
    proxyDomains,
    proxyServers
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();

  const freeDomain = getRatings_.shuffle(proxyDomains.free)[0];

  const preiumDomain = getRatings_.shuffle(proxyDomains.premium)[0];

  const servers = getSortedServers({
    freeDomain,
    preiumDomain,
    proxyServers
  }).map(serverData => {
    let hosts = serverData.hosts; // Remove half of hosts to decrease requests count

    hosts = getRatings_.shuffle(hosts).slice(0, Math.ceil(hosts.length / 2));
    return Object.assign({}, serverData, {
      hosts
    });
  });
  const hosts = servers.flatMap(({
    hosts
  }) => hosts);
  const pings = await hostsToPings(hosts); // Save raw pings for PAC server sorting purpose

  general_storage/* default.remove */.Z.remove('rawPings');
  general_storage/* default.set */.Z.set('pingsRaw', pings); // Merge data about hosts in countries list

  const countryDelayData = delaysToCountryDelays({
    servers,
    pings
  });
  const countryRatings = countryDelaysToCountryRatings({
    'delayData': countryDelayData,
    servers
  });
  general_store/* default.dispatch */.Z.dispatch({
    'type': 'Ping: set',
    'data': countryRatings
  });
});
// EXTERNAL MODULE: ./src/bg/serversObject/get.ts
var get = __webpack_require__(7437);
;// CONCATENATED MODULE: ./src/bg/reserveDomains.ts
/* global CountryPrefixPort, ProxyServers */





const {
  _: reserveDomains_
} = self;
/** @function */

const checkHost = urls => new Promise((resolve, reject) => {
  const controlObjects = urls.map(url => {
    const controlObject = checkServerTestUrl(url, 30 * 1000);
    controlObject.promise.then(() => {
      resolve();
      controlObjects.forEach(object => {
        object.cancel();
      });
    });
    return controlObject;
  }); // When everything failed

  Promise.all(controlObjects.map(({
    promise
  }) => promise.then(() => Promise.reject(new Error('')), error => undefined // eslint-disable-line n/handle-callback-err
  ))).then(reject);
});
/** @function */


const randomCutOfList = list => reserveDomains_.shuffle(list).slice(0, 5);
/** @function */


const action = async ({
  free,
  premium
}, proxyServers) => {
  const freePrefixes = [];

  for (const country of proxyServers.freeCountries()) {
    var _proxyServers$get;

    const list = (_proxyServers$get = proxyServers.get(country)) === null || _proxyServers$get === void 0 ? void 0 : _proxyServers$get.free;

    for (const {
      prefix
    } of list) freePrefixes.push(prefix);
  }

  const premiumPrefixes = [];

  for (const country of proxyServers.premiumCountries()) {
    var _proxyServers$get2;

    const list = (_proxyServers$get2 = proxyServers.get(country)) === null || _proxyServers$get2 === void 0 ? void 0 : _proxyServers$get2.premium;

    for (const {
      prefix
    } of list) premiumPrefixes.push(prefix);
  } // let domains = free.concat( premium );


  const validFreeDomains = [];
  const freePromises = free.map(domain => {
    const list = freePrefixes.map(prefix => prefix + '.' + domain);
    const urls = randomCutOfList(list).map(host => `http://${host}/api/test?` + Math.floor(Math.random() * 1000000000000));
    const domainPromise = checkHost(urls);
    domainPromise.then(() => {
      validFreeDomains.push(domain);
      store.dispatch({
        'type': 'Proxy domains: set free',
        'data': validFreeDomains
      });
    });
    return domainPromise.catch(() => undefined);
  });
  const validPremiumDomains = [];
  const premiumPromises = premium.map(domain => {
    const list = premiumPrefixes.map(prefix => prefix + '.' + domain);
    const urls = randomCutOfList(list).map(host => `http://${host}/api/test?` + Math.floor(Math.random() * 1000000000000));
    const domainPromise = checkHost(urls);
    domainPromise.then(() => {
      validPremiumDomains.push(domain);
      store.dispatch({
        'type': 'Proxy domains: set premium',
        'data': validPremiumDomains
      });
    });
    return domainPromise.catch(() => undefined);
  });
  await Promise.all(freePromises.concat(premiumPromises));
  const {
    proxyDomains
  } = await store.getStateAsync();
  const storeFreeDomains = validFreeDomains.length ? validFreeDomains : free;

  if (!reserveDomains_.isEqual(storeFreeDomains, proxyDomains.free)) {
    store.dispatch({
      'type': 'Proxy domains: set free',
      'data': storeFreeDomains
    });
  }

  const storePremiumDomains = validPremiumDomains.length ? validPremiumDomains : premium;

  if (!reserveDomains_.isEqual(storePremiumDomains, proxyDomains.premium)) {
    store.dispatch({
      'type': 'Proxy domains: set premium',
      'data': storePremiumDomains
    });
  }

  storage.set('reserveDomains', {
    'free': validFreeDomains,
    'premium': validPremiumDomains
  });

  (async () => {
    if (validFreeDomains.length && validPremiumDomains.length) return;
    const storageValue = await storage.get('emptyReserveDomains');
    if (storageValue) return;

    const label = (() => {
      if (validFreeDomains.length) return 'premium';
      if (validPremiumDomains.length) return 'free';
      return 'all';
    })();

    ga.partial({
      'category': 'error',
      'action': 'browsec.select_domain',
      label
    });
    storage.set('emptyReserveDomains', true);
  })();
};
/** @function */


const reserveDomains_loop = async () => {
  const object = await getServersObject();
  const domains = object.domains;
  const {
    proxyServers
  } = await store.getStateAsync();
  const promise = action(domains, proxyServers);
  setTimeout(reserveDomains_loop, 24 * 3600 * 1000);
  return promise;
};

const initialPromise = Promise.resolve(); // loop(); // Start here

/*storage.addListener( async( changes ) => {
  if( !changes.serversObject ) return;

  const { oldValue, newValue } = changes.serversObject;
  if( _.isEqual( oldValue, newValue ) ) return;

  const { domains } = newValue as RawServersObject;
  const { proxyServers } = await store.getStateAsync();

  action( domains, proxyServers );
});*/

/* harmony default export */ const reserveDomains = (() => initialPromise);
;// CONCATENATED MODULE: ./src/bg/ping/index.ts










const refreshTimeout
/*: integer*/
= ['qa', 'qa2'].includes(production.type) ? 5 * 60 * 1000 // 5 minutes
: 48 * 3600 * 1000; // 2 days

/** @function */

const ping_loop = () => {
  getRatings();
  timemarks.set('ping');
  alarms/* default.clear */.Z.clear('ping');
  alarms/* default.createOneTime */.Z.createOneTime('ping', {
    'delay': refreshTimeout
  });
};

bg_onStartAction(async () => {
  await reserveDomains();
  await availableServer.initialRequestComplete;
  const mark = await timemarks.get('ping');

  if (!mark) {
    ping_loop();
    return;
  }

  const timePassed = Date.now() - mark + (2 * Math.random() - 1) * 0.125 * refreshTimeout;

  if (timePassed < 0 || timePassed >= refreshTimeout) {
    ping_loop();
    return;
  }

  alarms/* default.createOneTime */.Z.createOneTime('ping', {
    'delay': refreshTimeout - timePassed
  });
});
alarms/* default.on */.Z.on(({
  name
}) => {
  if (name === 'ping') ping_loop();
}); // Change proxy at each ping update

general_store/* default.onChange */.Z.onChange(({
  ping
}) => ping, async () => {
  await lowLevelPac.shuffle();
  await proxy.setFromStore();
});
;// CONCATENATED MODULE: ./src/bg/proxyIsBroken.ts

const proxyIsBroken_controlledStates = Object.freeze(['controllable_by_this_extension', 'controlled_by_this_extension']);

if (typeof browser === 'undefined') {
  chrome.proxy.settings.onChange.addListener(async ({
    levelOfControl
  }) => {
    const extensionNotControlled = !proxyIsBroken_controlledStates.includes(levelOfControl);
    const {
      'proxyIsBroken': oldState
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    if (oldState === extensionNotControlled) return;
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Proxy is broken: set',
      'data': extensionNotControlled
    });
  });
}
;// CONCATENATED MODULE: ./src/bg/popupListeners/ajaxes.ts


runtime_onMessage.addListener({
  'callback': ({
    credentials,
    filters
  }) => ajaxes.setSmartSettings({
    credentials,
    filters
  }),
  'type': 'ajaxes.setSmartSettings',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': ({
    url
  }) => ajaxes.availableServerTest(url),
  'type': 'ajaxes.availableServerTest',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': () => ajaxes.availableServerServerList(),
  'type': 'ajaxes.availableServerServerList',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/actions.ts


runtime_onMessage.addListener({
  'callback': ({
    country
  }
  /*: { 'country': string }*/
  ) => {
    return actions.favorites.add(country);
  },
  'type': 'actions.favorites.add',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': ({
    country
  }
  /*: { 'country': string }*/
  ) => {
    return actions.favorites.remove(country);
  },
  'type': 'actions.favorites.remove',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': async ({
    'data': {
      email,
      password
    }
  }
  /*:
  { 'data': { 'email': string, 'password': string } }*/
  ) => {
    try {
      let account = await actions.login({
        email,
        password
      });
      return {
        'success': account
      };
    } catch (error) {
      let {
        status,
        responseText,
        message
      } = error;
      return {
        'error': {
          status,
          responseText,
          message
        }
      };
    }
  },
  'type': 'actions.login',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': () => actions.logout(),
  'type': 'actions.logout',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/changeSiteFilter.ts
/* global SiteFilter */





const {
  _: changeSiteFilter_
} = self;
runtime_onMessage.addListener({
  'callback': async ({
    'country': newCountry,
    domain,
    selectedDomain
  }) => {
    const {
      userPac
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();

    const filters = changeSiteFilter_.cloneDeep(userPac.filters);

    dualUse_ga.full({
      'action': 'smartSettingsEdit',
      'category': 'smartSettings'
    });
    jitsu.track('smartSettingsEdit'); // Remove same domain

    let [{
      country
    }] = changeSiteFilter_.remove(filters, ({
      format,
      value
    }) => selectedDomain === value); // Add new entity


    filters.push({
      'country': newCountry || country,
      'format': 'domain',
      'proxyMode': Boolean(newCountry),
      'value': domain
    });
    filters.sort(filtersSorting);
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'User PAC: update',
      'data': {
        filters
      }
    });
  },
  'type': 'change site filter',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/counters.ts


runtime_onMessage.addListener({
  'callback': ({
    property
  }) => {
    Counters/* default.increase */.Z.increase(property);
  },
  'type': 'counters.increase',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/createTab.ts


runtime_onMessage.addListener({
  'callback': ({
    options
  }
  /*: { 'options': any }*/
  ) => {
    return code_default().tabs.create(options);
  },
  'type': 'create tab',
  'popupOnly': true
});
// EXTERNAL MODULE: ./src/dualUse/log/db/index.ts + 2 modules
var db = __webpack_require__(5713);
;// CONCATENATED MODULE: ./src/bg/popupListeners/db.ts


runtime_onMessage.addListener({
  'callback': () => db/* default.getAll */.Z.getAll(),
  'type': 'db.getAll',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/DelayRecord.ts


const {
  _: DelayRecord_
} = self;
let records = [];
runtime_onMessage.addListener({
  'callback': ({
    id,
    name
  }) => {
    let object = new DelayRecord(name);
    records.push({
      id,
      name,
      object
    });
    return object.startStamp;
  },
  'type': 'DelayRecord start',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': ({
    id,
    name
  }) => {
    let item = records.find(item => item.id === id && item.name === name);
    if (!item) return;
    item.object.end(); // Clear memory in 30 minutes

    (async () => {
      await new Promise(resolve => {
        setTimeout(resolve, 30 * 60 * 1000);
      });

      DelayRecord_.remove(records, item => item.id === id && item.name === name);
    })();
  },
  'type': 'DelayRecord end',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/diagnostics.ts
/* global ExtensionInfo */



const typeMap = {
  'proxyApi': 'Check proxy settings',
  'noProxyExtensions': 'Check conflicts with other extensions',
  'httpConnection': 'Check HTTP Internet connection',
  'httpsConnection': 'Check HTTPS Internet connection',
  'browsecApi': 'Check Browsec API',
  'httpProxyConnection': 'Check HTTP Internet connection with Browsec',
  'httpsProxyConnection': 'Check HTTPS Internet connection with Browsec'
};
runtime_onMessage.addListener({
  'callback': () => bg_Diagnostics.close(),
  'type': 'Diagnostics.close',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': async () => {
    let data = await db/* default.getAll */.Z.getAll();
    let text = data.map(({
      timestamp,
      type,
      record
    }) => {
      let date = new Date(timestamp);
      let dateString
      /*: string*/
      = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear() + ' ' + String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0') + ':' + String(date.getSeconds()).padStart(2, '0') + ':' + String(date.getMilliseconds()).padStart(3, '0');
      return dateString + ' | ' + type + ' | ' + record;
    }).join('\n');

    let start = bg_Diagnostics._states.map(item => {
      let {
        name
      } = item;
      let state = Object.assign({}, item);
      delete state.name;
      return typeMap[name] + '\n' + JSON.stringify(state);
    }).join('\n\n');

    return start + '\n\n' + text;
  },
  'type': 'Diagnostics.getLog',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': () => bg_Diagnostics.getState(),
  'type': 'Diagnostics.getState',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': () => bg_Diagnostics.getSteps(),
  'type': 'Diagnostics.getSteps',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': () => bg_Diagnostics.open(),
  'type': 'Diagnostics.open',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': ({
    extensions
  }) => {
    return bg_Diagnostics.start(extensions);
  },
  'type': 'Diagnostics.start',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': () => bg_Diagnostics.terminate(),
  'type': 'Diagnostics.terminate',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/domainZoneList.ts


runtime_onMessage.addListener({
  'callback': () => bg_domainZoneList.data,
  'type': 'domain zone list',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/ga.ts


runtime_onMessage.addListener({
  'callback': ({
    data
  }
  /*: { 'data': { 'category'?: string, 'action'?: string, 'label'?: string, 'value'?: string, 'noninteraction'?: boolean } }*/
  ) => {
    dualUse_ga.partial(data);
  },
  'type': 'ga.partial',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': ({
    data
  }
  /*: { 'data': { 'category'?: string, 'action'?: string, 'label'?: string, 'value'?: string, 'noninteraction'?: boolean } }*/
  ) => {
    dualUse_ga.full(data);
  },
  'type': 'ga.full',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/jitsu.ts


runtime_onMessage.addListener({
  'callback': ({
    eventName,
    data
  }) => {
    jitsu.track(eventName, data);
  },
  'type': 'jitsu.track',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/log.ts


runtime_onMessage.addListener({
  'callback': ({
    data
  }
  /*: { 'data': Array<any> }*/
  ) => {
    log/* default.apply */.Z.apply({}, data);
  },
  'type': 'log',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': ({
    data
  }
  /*: { 'data': Array<any> }*/
  ) => {
    log/* default.warn.apply */.Z.warn.apply(log/* default */.Z, data);
  },
  'type': 'log.warn',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': ({
    data
  }
  /*: { 'data': Array<any> }*/
  ) => {
    log/* default.error.apply */.Z.error.apply(log/* default */.Z, data);
  },
  'type': 'log.error',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/permissions.ts


runtime_onMessage.addListener({
  'callback': ({
    permission
  }) => bg_permissions.includes(permission),
  'type': 'permissions.includes',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': () => bg_permissions.get(),
  'type': 'permissions.get',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/personalBannerView.ts


runtime_onMessage.addListener({
  'callback': ({
    id
  }) => {
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Viewed personal banners: add',
      'banner': id
    });
  },
  'type': 'personal banner view',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/general/tools/format.ts
/** Replaces in initial string things like '{1}' to value of args[1]
@param {string} str
@param {*} args
@return {string} */
/* harmony default export */ const format = ((str, ...args) => str.replace(/\{(\d+)\}/g, (match, number) => args[number] !== undefined ? args[number] : match));
;// CONCATENATED MODULE: ./src/bg/popupListeners/popupErrorHandler.ts
// Popup error handler





const extensionVersion
/*: string*/
= code_default().runtime.getManifest().version || 'n/a';
runtime_onMessage.addListener({
  'callback': ({
    'data': {
      message,
      fileName,
      lineNumber
    }
  }) => {
    try {
      log/* default.error */.Z.error(format('message: {0}\nfilename: {1}\nlineno: {2}', message, fileName, lineNumber));
      dualUse_ga.partial({
        'category': 'error',
        'action': extensionVersion,
        'label': format('{0} at {1}:{2}', message, fileName, lineNumber),
        'value': '0',
        'noninteraction': false
      });
    } catch (error) {
      log/* default.error */.Z.error(error);
    }
  },
  'type': 'popup error',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/popupOpen.ts




runtime_onMessage.addListener({
  'callback': async () => {
    promotions.setPrices();
    Counters/* default.increase */.Z.increase('icon clicks'); // On each popup open every 5 minutes load account to check

    bg_account.load();
  },
  'type': 'popup open',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/PopupPremium.ts






runtime_onMessage.addListener({
  'type': 'popup-premium button click',
  'callback': async ({
    feature,
    promotionId
  }) => {
    dualUse_ga.partial({
      'category': 'premium',
      'action': 'click'
    });
    dualUse_ga.full({
      'category': 'locations_premium_div',
      'action': 'button_click'
    });
    jitsu.track('premium_div_click', {
      'campaign': promotionId || 'default',
      feature
    });
    const {
      daysAfterInstall,
      experiments,
      user
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();

    (() => {
      // 252
      const variant = experiments[(production_default()).experiments.premiumOverlayOnPopupOpen.id];

      if (variant && !user.premium) {
        dualUse_ga.full({
          'category': 'Exp252_Get_premium',
          'action': numberToAlphabetLetter(Number(variant))
        });
      }
    })();

    (() => {
      // 262
      const variant = experiments[(production_default()).experiments.premiumComparisonOnFirstPopup.id];

      if (variant && !user.premium) {
        dualUse_ga.full({
          'category': 'Exp262_Get_premium',
          'action': numberToAlphabetLetter(Number(variant))
        });
      }
    })();

    (() => {
      // 330
      const variant = experiments[(production_default()).experiments.freeServersOverloaded.id];

      if (variant && !user.premium) {
        dualUse_ga.full({
          'category': 'premium_div_330v2click',
          'action': numberToAlphabetLetter(Number(variant)),
          'label': String(daysAfterInstall)
        });
      }
    })();
  },
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/PopupPremiumOnerule.ts






runtime_onMessage.addListener({
  'type': 'popup-premium-onerule button click',
  'callback': async ({
    promotionId
  }) => {
    dualUse_ga.partial({
      'category': 'premium',
      'action': 'click'
    });
    jitsu.track('premium_div_click', {
      'campaign': promotionId || 'default',
      'feature': 'smartsettings'
    });
    const {
      daysAfterInstall,
      experiments,
      user
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();

    (() => {
      // 252
      const variant = experiments[(production_default()).experiments.premiumOverlayOnPopupOpen.id];

      if (variant && !user.premium) {
        dualUse_ga.full({
          'category': 'Exp252_Get_premium',
          'action': numberToAlphabetLetter(Number(variant))
        });
      }
    })();

    (() => {
      // 262
      const variant = experiments[(production_default()).experiments.premiumComparisonOnFirstPopup.id];

      if (variant && !user.premium) {
        dualUse_ga.full({
          'category': 'Exp262_Get_premium',
          'action': numberToAlphabetLetter(Number(variant))
        });
      }
    })();

    (() => {
      // 330
      const variant = experiments[(production_default()).experiments.freeServersOverloaded.id];

      if (variant && !user.premium) {
        dualUse_ga.full({
          'category': 'premium_div_330v2click',
          'action': numberToAlphabetLetter(Number(variant)),
          'label': String(daysAfterInstall)
        });
      }
    })();
  },
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/promotionsBlock.ts



runtime_onMessage.addListener({
  'callback': ({
    value
  }) => {
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Promotions block: set',
      'data': value
    });
    const {
      user
    } = general_store/* default.getStateSync */.Z.getStateSync();
    if (user.type === 'guest') return;
    ajaxes.setPromotionsBlock({
      'credentials': user.loginData.credentials,
      'promotionsBlock': value
    });
  },
  'type': 'promotionsBlock.set',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/proxy.ts





runtime_onMessage.addListener({
  'callback': async () => {
    try {
      const output = await highLevelPac.disable();
      return {
        'success': output
      };
    } catch (error) {
      return {
        error
      };
    }
  },
  'type': 'proxy.disable',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': async () => {
    try {
      const output = await highLevelPac.enable();
      return {
        'success': output
      };
    } catch (error) {
      return {
        error
      };
    }
  },
  'type': 'proxy.enable',
  'popupOnly': true
});
/*runtimeOnMessage.addListener({
  'callback': ({ premiumServers, servers, state }: {
    premiumServers: { [ country: string ]: PacHost[] },
    servers: { [ country: string ]: PacHost[] },
    state: UserPac,
  }) => originalSetState({
    'premiumServers': new Map( Object.entries( premiumServers ) ),
    'servers': new Map( Object.entries( servers ) ),
    state,
  }),
  'type': 'proxy.internalSetState',
  'popupOnly': true
});*/

runtime_onMessage.addListener({
  'callback': () => proxy.isControlled(),
  'type': 'proxy.isControlled',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': async ({
    country
  }
  /*: { 'country': string }*/
  ) => {
    try {
      const output = await highLevelPac.setCountry(country);
      return {
        'success': output
      };
    } catch (error) {
      return {
        error
      };
    }
  },
  'type': 'proxy.setCountry',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': async ({
    'data': {
      country,
      domain,
      type
    }
  }
  /*:
  { 'data': {
  'country'?: string,
  'domain': string,
  'type': 'proxy' | 'direct'
  } }*/
  ) => {
    try {
      let output = await highLevelPac.siteFilters.add({
        country,
        domain,
        type
      });
      return {
        'success': output
      };
    } catch (error) {
      return {
        error
      };
    }
  },
  'type': 'proxy.siteFilters.add',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': async ({
    country,
    domain
  }) => {
    try {
      let output = await highLevelPac.siteFilters.changeCountry({
        country,
        domain
      });
      dualUse_ga.full({
        'action': 'smartSettingsEdit',
        'category': 'smartSettings'
      });
      jitsu.track('smartSettingsEdit');
      return {
        'success': output
      };
    } catch (error) {
      return {
        error
      };
    }
  },
  'type': 'proxy.siteFilters.changeCountry',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': async ({
    domain
  }) => {
    try {
      let output = await highLevelPac.siteFilters.remove(domain);
      return {
        'success': output
      };
    } catch (error) {
      return {
        error
      };
    }
  },
  'type': 'proxy.siteFilters.remove',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': async ({
    domain
  }) => {
    try {
      let output = await highLevelPac.siteFilters.toggle(domain);
      return {
        'success': output
      };
    } catch (error) {
      return {
        error
      };
    }
  },
  'type': 'proxy.siteFilters.toggle',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/proxyDisableBrokenMode.ts



runtime_onMessage.addListener({
  'callback': async () => {
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Proxy is broken: set',
      'data': false
    });

    try {
      await proxy.setFromStore();
      return {
        'success': true
      };
    } catch (error) {
      return {
        error
      };
    }
  },
  'type': 'proxy disable broken mode',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/selectDisabledSiteFilter.ts
/* global SiteFilter */


const {
  _: selectDisabledSiteFilter_
} = self;
runtime_onMessage.addListener({
  'callback': async ({
    'value': domain
  }) => {
    const storeState = await general_store/* default.getStateAsync */.Z.getStateAsync();

    const filters = selectDisabledSiteFilter_.cloneDeep(storeState.userPac.filters); // First disable currently enabled filter


    let filter = filters.find(({
      disabled
    }) => !disabled);
    if (filter) filter.disabled = true;
    {
      // Enable clicked one
      let filter = filters.find(({
        format,
        value
      }) => format !== 'regex' && domain === value);
      if (filter) delete filter.disabled; // Flow crap
    }
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'User PAC: update',
      'data': {
        filters
      }
    });
  },
  'type': 'select disabled site filter',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/ShowedOffers.ts


runtime_onMessage.addListener({
  'callback': ({
    offer
  }) => ShowedOffers.includes(offer),
  'type': 'ShowedOffers.includes',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': ({
    offer
  }) => ShowedOffers.push(offer),
  'type': 'ShowedOffers.push',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/store.ts


runtime_onMessage.addListener({
  'callback': async () => {
    const state = Object.assign({}, await general_store/* default.getStateAsync */.Z.getStateAsync());

    for (const key of Object.keys(state)) {
      const initialValue = state[key];
      if (initialValue instanceof Map) state[key] = Object.fromEntries(initialValue);
    }

    return state;
  },
  'type': 'store: get state',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/timezoneChange.ts


runtime_onMessage.addListener({
  'callback': ({
    value
  }) => timezoneChange.set(value),
  'type': 'timezoneChange.set',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/webrtc.ts


runtime_onMessage.addListener({
  'callback': () => webrtc.isAvailable(),
  'type': 'webrtc.available',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': () => webrtc.getControlState(),
  'type': 'webrtc.getControlState',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': () => webrtc.disable(),
  'type': 'webrtc.disable',
  'popupOnly': true
});
runtime_onMessage.addListener({
  'callback': () => webrtc.enable(),
  'type': 'webrtc.enable',
  'popupOnly': true
});
;// CONCATENATED MODULE: ./src/bg/popupListeners/index.ts


























;// CONCATENATED MODULE: ./src/bg/runtime.onConnect.ts
/* global DiagnosticsStepState */




code_default().runtime.onConnect.addListener(port => {
  switch (port.name) {
    case 'diagnostics':
      {
        /** @function */
        const listener = data => {
          port.postMessage(data);
        };

        bg_Diagnostics.addListener(listener);
        port.onDisconnect.addListener(() => {
          bg_Diagnostics.removeListener(listener);
        });
        break;
      }

    case 'permissions':
      {
        /** @function */
        const listener = permissions => {
          port.postMessage(permissions);
        };

        bg_permissions.addListener(listener);
        port.onDisconnect.addListener(() => {
          bg_permissions.removeListener(listener);
        });
        break;
      }

    case 'store':
      {
        const unsubscribe
        /*: Function*/
        = general_store/* default.subscribe */.Z.subscribe(() => {
          let state = general_store/* default.getStateSync */.Z.getStateSync();
          port.postMessage(state);
        });
        port.onDisconnect.addListener(() => {
          unsubscribe();
        });
        break;
      }
  }
});
;// CONCATENATED MODULE: ./src/bg/urlListener.ts
var _Browser$tabs$onActiv, _Browser$tabs$onActiv2, _Browser$tabs$onUpdat, _Browser$tabs$onUpdat2, _Browser$windows, _Browser$windows$onFo, _Browser$windows$onFo2;

/* global Tab */

/** Part of background.js */









const state = {
  'id': null,
  'url': null,
  'domain': null
};
let firstConnectionGaSent = false;
/** @function */

const dispatch = async (url = null) => {
  // URL level
  if (state.url === url) return;
  state.url = url; // Domain level

  const domain = urlToDomain(url);
  if (state.domain === domain) return;
  state.domain = domain;
  general_store/* default.dispatch */.Z.dispatch({
    'type': 'Domain: set',
    domain
  });
  if (!domain) return;
  const {
    'userPac': pac
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const matchedSmartSettingsDomain = findMatchingFilterForDomain(pac.filters, domain);
  const {
    firstPopupOpen,
    'first connection': firstConnection
  } = await code_default().storage.local.get(['firstPopupOpen', 'first connection']);
  const condition = firstPopupOpen === 'fulfilled' && firstConnection !== true && !firstConnectionGaSent && Boolean(pac.mode === 'proxy' || matchedSmartSettingsDomain);

  if (condition) {
    firstConnectionGaSent = true;
    await general_storage/* default.set */.Z.set('first connection', true);
    dualUse_ga.full({
      'category': 'onboarding',
      'action': 'first_connection',
      'label': code_default().runtime.getManifest().version
    });
    jitsu.track('first_connection');
  }

  if (matchedSmartSettingsDomain) {
    // Only once per 24 hours
    const mark = await timemarks.get('GA Rare smartSettingsUseDaily');

    if (!mark || Date.now() >= mark + 24 * 3600 * 1000) {
      timemarks.set('GA Rare smartSettingsUseDaily');
      dualUse_ga.full({
        'category': 'smartSettings',
        'action': 'smartSettingsUseDaily'
      });
      jitsu.track('smartSettingsUseDaily');
    }
  }
};

(_Browser$tabs$onActiv = (code_default()).tabs.onActivated) === null || _Browser$tabs$onActiv === void 0 ? void 0 : (_Browser$tabs$onActiv2 = _Browser$tabs$onActiv.addListener) === null || _Browser$tabs$onActiv2 === void 0 ? void 0 : _Browser$tabs$onActiv2.call(_Browser$tabs$onActiv, async ({
  tabId
}) => {
  const {
    id,
    url
  } = await code_default().tabs.get(tabId);
  state.id = id;
  dispatch(url);
});
(_Browser$tabs$onUpdat = (code_default()).tabs.onUpdated) === null || _Browser$tabs$onUpdat === void 0 ? void 0 : (_Browser$tabs$onUpdat2 = _Browser$tabs$onUpdat.addListener) === null || _Browser$tabs$onUpdat2 === void 0 ? void 0 : _Browser$tabs$onUpdat2.call(_Browser$tabs$onUpdat, (tabId, x, {
  url
}) => {
  if (state.id !== tabId) return;
  dispatch(url);
}); // Firefox for Android has no browser.windows API at all

(_Browser$windows = (code_default()).windows) === null || _Browser$windows === void 0 ? void 0 : (_Browser$windows$onFo = _Browser$windows.onFocusChanged) === null || _Browser$windows$onFo === void 0 ? void 0 : (_Browser$windows$onFo2 = _Browser$windows$onFo.addListener) === null || _Browser$windows$onFo2 === void 0 ? void 0 : _Browser$windows$onFo2.call(_Browser$windows$onFo, async windowId => {
  if (windowId === -1) return;
  const [data] = await code_default().tabs.query({
    windowId,
    'active': true
  });

  if (!data) {
    state.id = null;
    dispatch();
    return;
  }

  let {
    id,
    url
  } = data;
  state.id = id;
  dispatch(url);
}); // Initial URL

bg_onStartAction(async () => {
  let tabs = await code_default().tabs.query({
    'active': true,
    'currentWindow': true
  });
  if (!tabs.length) tabs = await code_default().tabs.query({
    'active': true
  }); // For strange popups like google proxy permission

  const tab = tabs[0];

  if (!tab) {
    // Impossible, but https://bugs.chromium.org/p/chromium/issues/detail?id=298114
    dispatch();
    return;
  }

  const {
    id,
    url
  } = tab;
  state.id = id;
  dispatch(url);
});
;// CONCATENATED MODULE: ./src/bg/browsecLink.ts
// Any link to browsec.com must contain count of days after installation
// Syntax like urlModifyParameters



/** @function */
/* harmony default export */ const browsecLink = ((url, action = search => search) => {
  /** @function */
  let daysAction = search => Object.assign(action(search), {
    'instd': general_store/* default.getStateSync */.Z.getStateSync().daysAfterInstall
  });

  return urlModifyParameters(url, daysAction);
});
;// CONCATENATED MODULE: ./src/bg/contentScripts/notification/changeLinkDeepLoop.js
/** @function */
const deepLoop
/*: ( object: any, linkModification: ( originalLink: string ) => string ) => void */
= (object, linkModification) => {
  if (object.tag === 'a') {
    if (!object.attributes) return;
    object.attributes.href = linkModification(object.attributes.href);
  }

  if (!object.children) return;
  object.children.forEach(child => {
    deepLoop(child, linkModification);
  });
};

/* harmony default export */ const changeLinkDeepLoop = (deepLoop);
;// CONCATENATED MODULE: ./src/general/pageLinks.ts
/* Some links for the popup */

const baseUrl = (production_default()).baseUrl;
const extra = '?source=extension&utm_source=chromium+extension&utm_medium=link&utm_campaign=default_campaign';
/* harmony default export */ const pageLinks = ({
  'base': baseUrl,
  'contactUs': baseUrl + '/contact_us' + extra,
  'newUser': baseUrl + '/users/new' + extra,
  'premium': baseUrl + '/orders/new?plan_id=biennial',
  'resetPassword': `${baseUrl}/login${extra}#forgot_password`
});
;// CONCATENATED MODULE: ./src/general/tools/pricesPreView.ts
/* global Price */

/** @function */
/* harmony default export */ const pricesPreView = (({
  prices,
  priceTrial
}) => {
  const cheapObject = prices.slice().sort((a, b) => a.value / a.duration - b.value / b.duration)[0];
  const expensiveObject = prices.slice().sort((a, b) => b.value / b.duration - a.value / a.duration)[0];
  let {
    currency,
    oldValue
  } = expensiveObject;
  if (currency === 'USD') currency = '$';
  let price = Math.floor(100 * cheapObject.value / cheapObject.duration) / 100;
  let oldPrice = oldValue ? Math.floor(100 * oldValue / expensiveObject.duration) / 100 : 0;
  const trialDays = priceTrial || 0;
  return {
    currency,
    'duration': cheapObject.duration,
    oldPrice,
    price,
    trialDays
  };
});
;// CONCATENATED MODULE: ./src/bg/contentScripts/notification/translation.json
const translation_namespaceObject = JSON.parse('[{"language":"en","general":{"title":"You’re using Browsec Free","price_description":"Buy Browsec Premium for only $XXX with Turbo Speed for HD quality streaming!","upgrade_to_premium_now":"Upgrade to Premium Now","remind_me_later":"Remind me later"},"bbc":{"title":"Upgrade to watch BBC iPlayer","price_description":"BBC iPlayer is only available using UK Premium virtual location","upgrade_to_premium_now":"Upgrade now to watch iPlayer","remind_me_later":"Remind me later"},"netflix":{"title":"Upgrade to watch Netflix","price_description":"Netflix is only available using US West Premium virtual location","upgrade_to_premium_now":"Upgrade now to watch Netflix","remind_me_later":"Remind me later"}},{"language":"ar","general":{"title":"أنت تستخدم Browsec المجاني","price_description":"اشتري Browsec الرئيسي مقابل XXX دولار فقط مع سرعة تيربو للبث بسرعة فائقة HD!","upgrade_to_premium_now":"قم بالترقية إلى الإصدار الأساسي الآن","remind_me_later":"تذكير لاحقًا"}},{"language":"de","general":{"title":"Sie nutzen die kostenlose Version von Browsec","price_description":"Kaufen Sie für nur 3,33 $ Browsec Premium mit Turbo-Geschwindigkeit und HD Streaming in hoher Qualität!","upgrade_to_premium_now":"Jetzt auf Premium upgraden","remind_me_later":"Später erinnern"}},{"language":"es","general":{"title":"Estás usando Browsec Free","price_description":"¡Compra Browsec Premium por solo $3,33 con Velocidad Turbo para transmisión en calidad HD!","upgrade_to_premium_now":"Pasar a Premium ahora","remind_me_later":"Recordarme más tarde"}},{"language":"fr","general":{"title":"Vous utilisez la version gratuite de Browsec","price_description":"Achetez la version premium de Browsec pour 3,33 $ seulement avec Turbo Speed pour une diffusion en qualité HD !","upgrade_to_premium_now":"Devenez premium dès maintenant","remind_me_later":"Me le rappeler plus tard"}},{"language":"id","general":{"title":"Anda sedang menggunakan Browsec Gratis","price_description":"Beli Browsec Premiun hanya seharga $3,33 dengan Kecepatan Turbo untuk streaming berkualitas HD!","upgrade_to_premium_now":"Tingkatkan ke Premium Sekarang","remind_me_later":"Ingatkan saya nanti"}},{"language":"it","general":{"title":"Stai usando Browsec Free","price_description":"Acquista Browsec Premium per soli $XXX con Turbo Speed per streaming ad alta qualità!","upgrade_to_premium_now":"Passa subito a Premium","remind_me_later":"Ricordamelo più tardi"}},{"language":"ko","general":{"title":"Browsec Free를 사용 중입니다","price_description":"단 $XXX에 HD 품질 스트리밍을 위한 터보 속도를 갖춘 Browsec Premium을 구입하세요!","upgrade_to_premium_now":"지금 프리미엄으로 업그레이드","remind_me_later":"나중에 알림"}},{"language":"pt","general":{"title":"Está a utilizar o Browsec Free","price_description":"Comprar Browsec Premium por apenas $XXX com Turbo Speed para streaming em qualidade HD!","upgrade_to_premium_now":"Fazer upgrade agora para o Premium","remind_me_later":"Lembrar-me mais tarde"}},{"language":"ru","general":{"title":"Вы используете бесплатный план Browsec","price_description":"Купите Премиум всего за $XXX для просмотра видео в HD-качестве!","upgrade_to_premium_now":"Купить премиум","remind_me_later":"Напомните мне позже"}},{"language":"th","general":{"title":"คุณกำลังใช้งาน Browsec Free","price_description":"ซื้อ Browsec Premium ในราคาเพียง $XXX พร้อมด้วย Turbo Speed สำหรับสตรีมมิ่งคุณภาพระดับ HD!","upgrade_to_premium_now":"อัปเกรดเป็น Premium ตอนนี้เลย","remind_me_later":"เตือนฉันภายหลัง"}},{"language":"tr","general":{"title":"Ücretsiz Browsec kullanıyorsunuz","price_description":"Sadece XXX$ \'a Browsec Premium\'u Turbo Hız ve HD yayın kalitesi için satın alın!","upgrade_to_premium_now":"Şimdi Premium\'a Geç!","remind_me_later":"Daha sonra hatırlat"}},{"language":"vi","general":{"title":"Bạn đang sử dụng Browsec Miễn phí","price_description":"Mua Browsec Cao cấp chỉ với 3,33$ với Turbo Speed cho tốc độ truyền dữ liệu chất lượng HD!","upgrade_to_premium_now":"Nâng cấp ngay lên hạng Cao cấp.","remind_me_later":"Nhắc lại sau."}},{"language":"uk","general":{"title":"Ви використовуєте безкоштовний план Browsec","price_description":"Купуйте Преміум всього за $ XXX для перегляду відео в HD-якості!","upgrade_to_premium_now":"Купити преміум","remind_me_later":"Нагадати мені пізніше"}}]');
;// CONCATENATED MODULE: ./src/bg/contentScripts/notification/translationReplaceCrawler.js
// @flow
const variableRegExp = /%[a-z0-9_]+%/ig;
/** @function */

let translationReplaceCrawler
/*: ( object: Object, translation: { [ string ]: string } ) => Object*/
= (object, translation) => {
  let keys
  /*: string[]*/
  = Object.keys(translation);

  if (object.text) {
    let matches = object.text.match(variableRegExp);

    if (matches) {
      let foundKeys = Array.from(new Set(matches)).map(item => item.slice(1, -1)).filter(item => keys.includes(item));
      foundKeys.forEach(key => {
        object.text = object.text.replace(new RegExp(`%${key}%`, 'g'), translation[key]);
      });
    }
  }

  if (object.style) {
    let matches = object.style.match(variableRegExp);

    if (matches) {
      let foundKeys = Array.from(new Set(matches)).map(item => item.slice(1, -1)).filter(item => keys.includes(item));
      foundKeys.forEach(key => {
        object.style = object.style.replace(new RegExp(`%${key}%`, 'g'), translation[key]);
      });
    }
  }

  if (object.children) {
    object.children.forEach(child => {
      translationReplaceCrawler(child, translation);
    });
  }

  return object;
};

/* harmony default export */ const notification_translationReplaceCrawler = (translationReplaceCrawler);
;// CONCATENATED MODULE: ./src/bg/contentScripts/notification/messageSystem.ts
/* global SiteFilter, TreeElement */
















const configExperiments = new Map();

for (const [name, {
  id,
  taskNumber
}] of Object.entries((production_default()).experiments)) {
  configExperiments.set(id, {
    name,
    taskNumber
  });
}
/** All possible languages for translation */


const languages = translation_namespaceObject.map(({
  language
}) => language);
/** Initial call to get status + all translations */

runtime_onMessage.addListener({
  'type': 'notification:request:initial',
  'callback': async ({
    language,
    url
  }) => {
    const domain = urlToDomain(url) || '';
    const secondLevelDomain = domain.split('.').slice(-2).join('.'); // For experiment 120

    if (secondLevelDomain === 'youtube.com') language = 'en';
    const storeState = await general_store/* default.getStateAsync */.Z.getStateAsync(); // Is user premium?

    const premium = storeState.user.premium; // Are promotions blocked?

    const promotionsBlock = storeState.promotionsBlock; // Is proxy enabled

    const proxyEnabled = (() => {
      const {
        mode,
        filters
      } = storeState.userPac;
      if (!domain) return false;
      const filter = findMatchingFilterForDomain(filters, domain);
      if (filter) return filter.proxyMode;
      return mode === 'proxy';
    })();

    let {
      currency,
      duration,
      oldPrice,
      price,
      trialDays
    } = pricesPreView({
      'prices': storeState.prices,
      'priceTrial': storeState.priceTrial
    });
    const discount
    /*: integer*/
    = !oldPrice ? 0 : Math.floor(100 * (oldPrice - price) / oldPrice); // Do we need to show popup?

    const showPopup
    /*: boolean*/
    = proxyEnabled && !premium && !promotionsBlock;
    (0,log/* default */.Z)('Notification. Show: ', showPopup, '. Proxy: ', proxyEnabled, '. Premium user: ', premium);
    if (!showPopup) return {
      'show': false
    }; // NOTE very important to make this return

    const hidden = (await general_storage/* default.get */.Z.get('notificationHidden')) || null;
    const days = 7;
    const now = Date.now(); // Is popup big?

    const visible = (() => {
      // Old variant or no data
      if (!hidden) return true;
      const breakPoint = hidden + 1000 * 60 * 60 * 24 * days;
      return now > breakPoint;
    })();

    const {
      promotions
    } = storeState;
    const promotion = promotions.find(({
      from,
      till,
      notifications
    }) => notifications && notifications.length && notifications.filter(({
      domains
    }) => !domains || domains.includes(domain) || domains.some(item => domain.endsWith('.' + item))).length && from <= now && now <= till);
    const expvarid = [];

    for (const [id, variant] of Object.entries(storeState.experiments)) {
      if (!configExperiments.has(id)) continue;
      const {
        taskNumber
      } = configExperiments.get(id);
      expvarid.push(`exp${taskNumber}_${variant}`);
    }

    {
      const variant = await general_storage/* default.get */.Z.get('Experiment 346: variant');

      if (typeof variant === 'number') {
        expvarid.push('exp346_' + variant);
      }
    }
    const html = await (async () => {
      // Dynamic banner
      if (promotion) {
        const {
          notifications
        } = promotion;
        const notification = notifications.find(({
          domains
        }) => !domains || domains.includes(domain) || domains.some(item => domain.endsWith('.' + item)));

        if (!notification) {
          throw new Error('No notification object'); // Flow crap
        }

        const {
          html,
          texts
        } = notification; // Change link

        changeLinkDeepLoop(html, originalUrl => {
          let url = new URL(originalUrl);
          url.searchParams.set('utm_content', secondLevelDomain);

          if (expvarid.length) {
            url.searchParams.set('expvarid', expvarid.join(','));
          }

          return url.toString();
        });
        const selectedLanguage = Object.keys(texts).includes(language) ? language : 'en';
        return notification_translationReplaceCrawler(html, texts[selectedLanguage]);
      } // Static banner


      const bbcBanner = domain.endsWith('.bbc.com') || domain.endsWith('.bbc.co.uk');

      const translationLanguage
      /*: string*/
      = (() => {
        if (bbcBanner) return 'en';
        return languages.includes(language) ? language : 'en';
      })();

      const threeWaysAlgorithm
      /*: boolean*/
      = language === 'en' || !languages.includes(language);
      const now
      /*: integer*/
      = Date.now();
      const activePromotionWithTariff = storeState.promotions.find(({
        from,
        till,
        tariffs
      }) => from <= now && now <= till && tariffs);
      const campaign = (activePromotionWithTariff === null || activePromotionWithTariff === void 0 ? void 0 : activePromotionWithTariff.id) || 'default_campaign';

      const plan
      /*: string*/
      = (() => {
        switch (duration) {
          case 1:
            return 'monthly';

          case 12:
            return 'annual';

          case 24:
            return 'biennial';

          default:
            throw new Error('Incorrect duration');
        }
      })();

      const linkParams = {
        'plan_id': plan,
        'utm_campaign': campaign,
        'utm_content': secondLevelDomain,
        'utm_medium': 'inpage_notification',
        'utm_source': 'chromium extension',
        'utm_term': translationLanguage
      };

      if (expvarid.length) {
        linkParams.expvarid = expvarid.join(',');
      }

      const link = browsecLink((activePromotionWithTariff === null || activePromotionWithTariff === void 0 ? void 0 : activePromotionWithTariff.clickUrl) || pageLinks.premium, search => Object.assign(search, linkParams));

      const usedTranslation = (() => {
        const property = bbcBanner ? 'bbc' : 'general';
        const selectedTranslation = translation_namespaceObject.find(({
          language
        }) => language === translationLanguage);

        if (!selectedTranslation) {
          throw new Error('Incompatible language in notification/messageSystem');
        }

        return selectedTranslation[property];
      })();

      if (!bbcBanner) {
        usedTranslation.price_description = usedTranslation.price_description.replace(/XXX/g, String(price));
      }

      const buttonText = (() => {
        if (threeWaysAlgorithm) {
          if (trialDays) {
            return internationalize('get_N_days_free_premium_trial').replace(/XXX/g, String(trialDays));
          }

          if (discount) {
            return internationalize('get_monthly_premium');
          }
        }

        return usedTranslation.upgrade_to_premium_now;
      })();

      const bigButtonChildren = [{
        'tag': 'span',
        'class': '_Notification_Big_Button_Name' + (threeWaysAlgorithm && trialDays ? ' _Notification_Big_Button_Name_uppercase' : ''),
        'text': buttonText
      }];

      if (threeWaysAlgorithm && !trialDays && discount) {
        bigButtonChildren.push({
          'tag': 'span',
          'class': '_Notification_Big_Button_Price',
          'children': [{
            'text': 'for only '
          }, {
            'tag': 'span',
            'class': '_Notification_Big_Button_Price_Value',
            'text': currency + price
          }, {
            'text': ' '
          }, {
            'tag': 'span',
            'class': '_Notification_Big_Button_Price_OldValue',
            'text': currency + oldPrice
          }]
        });
        bigButtonChildren.push({
          'tag': 'span',
          'class': '_Notification_Big_Button_Discount',
          'children': [{
            'tag': 'span',
            'class': '_Notification_Big_Button_Discount_In',
            'children': [{
              'tag': 'span',
              'class': '_Notification_Big_Button_Discount_In_In',
              'children': [{
                'tag': 'span',
                'class': '_Notification_Big_Button_Discount_Minus',
                'text': '-'
              }, {
                'tag': 'span',
                'class': '_Notification_Big_Button_Discount_Value',
                'text': String(discount)
              }, {
                'tag': 'span',
                'class': '_Notification_Big_Button_Discount_Percent',
                'text': '%'
              }]
            }]
          }]
        });
      }

      return {
        'tag': 'div',
        'class': '_Notification_Big_In',
        'children': [{
          'tag': 'div',
          'class': '_Notification_Big_In_In',
          'children': [{
            'tag': 'div',
            'class': '_Notification_Big_Title',
            'text': usedTranslation.title
          }, {
            'tag': 'div',
            'class': '_Notification_Big_Text',
            'text': usedTranslation.price_description
          }, {
            'tag': 'a',
            'class': '_Notification_Big_Button' + (threeWaysAlgorithm && !trialDays && discount ? ' _Notification_Big_Button_long' : ''),
            'attributes': {
              'href': link,
              'target': '_blank'
            },
            'children': [{
              'tag': 'span',
              'class': '_Notification_Big_Button_In',
              'children': bigButtonChildren
            }]
          }, {
            'tag': 'div',
            'class': '_Notification_Later',
            'children': [{
              'attributes': {
                'data-click': 'close'
              },
              'tag': 'div',
              'class': '_Notification_Later_In',
              'text': usedTranslation.remind_me_later
            }]
          }]
        }]
      };
    })();
    return {
      html,
      'promotionId': promotion === null || promotion === void 0 ? void 0 : promotion.id,
      'show': true,
      'size': visible ? 'big' : 'small'
    };
  }
});
/** Set visibility state */

runtime_onMessage.addListener({
  'type': 'notification:request:setVisibility',
  'callback': async ({
    'visible': popupVisible,
    url
  }) => {
    if (popupVisible) {
      general_storage/* default.remove */.Z.remove('notificationHidden');
      return;
    }

    general_storage/* default.set */.Z.set('notificationHidden', Date.now());
  }
});
/** Popup literally shown up */

runtime_onMessage.addListener({
  'type': 'notification:request:popupShow',
  'callback': ({
    promotionId,
    url
  }) => {
    const domain = urlToDomain(url) || '';
    const label = domain.split('.').slice(-2).join('.');
    if (!label) return;
    dualUse_ga.partial({
      'category': 'inpageNotification',
      'action': 'show',
      label
    });
    jitsu.track('inpage_notification', {
      'campaign': promotionId || 'default',
      'inpage_notification_domain': domain
    });
  }
});
/** Click on link */

runtime_onMessage.addListener({
  'type': 'notification:request:click',
  'callback': ({
    promotionId,
    url
  }) => {
    const domain = urlToDomain(url) || '';
    const label = domain.split('.').slice(-2).join('.');
    if (!label) return;
    dualUse_ga.partial({
      'category': 'inpageNotification',
      'action': 'click',
      label
    });
    jitsu.track('inpage_notification_click', {
      'campaign': promotionId || 'default',
      'inpage_notification_domain': domain
    });
  }
});
/** Ping for content script */

runtime_onMessage.addListener({
  'type': 'notification:ping',
  'callback': () => 'ok'
});
;// CONCATENATED MODULE: ./src/bg/contentScripts/promoPageExecutor/messageSystem.ts
/* global Promotion */





runtime_onMessage.addListener({
  'type': 'promo page: get information',
  'callback': async ({
    url
  }) => {
    let {
      daysAfterInstall,
      experiments,
      promotions
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const promotion = promotions.find(({
      page
    }) => page === url);
    const variant = await general_storage/* default.get */.Z.get('Experiment 346: variant');

    if (typeof variant === 'number') {
      experiments = Object.assign({}, experiments, {
        'exp346': String(variant)
      });
    }

    return {
      daysAfterInstall,
      experiments,
      promotion
    };
  }
});
runtime_onMessage.addListener({
  'type': 'promo page: click',
  'callback': async ({
    promotion
  }) => {
    const isTracked = await dualUse_ga.partial.isTrackedPromise;

    if (isTracked) {
      dualUse_ga.partial({
        'category': 'promotab',
        'action': 'click'
      });
    }

    const extraData = {
      'campaign': 'default'
    };

    if (promotion) {
      Object.assign(extraData, {
        'campaign': promotion.id,
        'pageActive': promotion.pageActive ? '1' : '0',
        'scope': promotion.pageScope || 'all'
      });
    }

    jitsu.track('promo_tab_click', extraData);
  }
});
;// CONCATENATED MODULE: ./src/bg/contentScripts/timezoneChange/messageSystem.ts
/* global SiteFilter */






const messageSystem_defaultCountry = (production_default()).proxy.defaultCountry || 'nl';
runtime_onMessage.addListener({
  'type': 'date',
  'callback': async ({
    url
  }) => {
    const domain = urlToDomain(url);
    const {
      'userPac': {
        country,
        filters,
        mode
      },
      'proxyIsBroken': proxyBroken,
      proxyServers,
      timezones,
      'user': {
        'premium': premiumUser
      }
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();

    const proxyTimeZoneOffset = (() => {
      var _timezones$get;

      if (!premiumUser || proxyBroken || !timezoneChange.get()) return null;
      const countries = Array.from(premiumUser ? proxyServers.premiumCountries() : proxyServers.freeCountries());

      const proxyCountry = (country => {
        if (mode === 'direct') country = null; // NOTE

        if (!domain) return country; // Filters -> domain intersection

        const filter = findMatchingFilterForDomain(filters, domain);

        if (filter) {
          if (!filter.proxyMode) return null; // Direct filter

          const {
            country
          } = filter;
          return countries.includes(country) ? country : messageSystem_defaultCountry; // Proxy filter
        } // No filter matched


        return country;
      })(country);

      if (!proxyCountry) return null;
      return (_timezones$get = timezones.get(proxyCountry)) !== null && _timezones$get !== void 0 ? _timezones$get : null;
    })();

    return {
      'original': -new Date().getTimezoneOffset(),
      'proxy': proxyTimeZoneOffset
    };
  }
});
;// CONCATENATED MODULE: ./src/background.ts
/* global AjaxAccount, Credentials, OnErrorOccurredDetails, RuntimePort, RuntimeMessageSender, StoreState */
 // must be top level
// Polyfills






 // Libraries

 // Code parts




























 // @ts-ignore

 // eslint-disable-line































const {
  _: background_
} = self;
const background_manifestVersion = code_default().runtime.getManifest().manifest_version;
/**
@function
@return - true if account valid */

const validateAccount = account => {
  if (account.type === 'guest') return true;
  const token = account.credentials.access_token;
  return Boolean(token && token.match(/^[a-zA-Z0-9]{20}$/));
};
/** @function */


const reloadFullServersChain = async () => {
  await loop();
  await availableServer.restart();
  await getDataAndUpdateServers();
  await proxy.setFromStore();
}; // Global assigments (needed for access from other pages / content script)


Object.assign(self, {
  account: bg_account,
  actions: actions,
  ajaxes: ajaxes,
  availableServer: availableServer,
  Browser: (code_default()),
  config: (production_default()),
  Diagnostics: bg_Diagnostics,
  domainZoneList: bg_domainZoneList,
  optimizeExperiments: optimizeExperiments,
  permissions: bg_permissions,
  promotions: promotions,
  proxy: proxy,
  punycode: punycode_es6,
  reloadFullServersChain,
  ShowedOffers: ShowedOffers,
  UserPropertiesObserver: bg_UserPropertiesObserver,
  Statistics: bg_Statistics,
  storage: general_storage/* default */.Z,
  store: general_store/* default */.Z,
  timezoneChange: timezoneChange,
  'tools': {
    createElement: tools_createElement,
    Deferred: Deferred/* default */.Z,
    internationalize: internationalize,
    urlModifyParameters: urlModifyParameters,
    urlToDomain: urlToDomain,
    weightedRandom: weightedRandom
  },
  webrtc: webrtc
}); // @ts-ignore

self.getFirstServerByCountry = async () => {
  const {
    lowLevelPac
  } = await general_store/* default.getStateAsync */.Z.getStateAsync();
  return Object.fromEntries(Object.entries(lowLevelPac.countries).map(([country, servers]) => {
    return [country, servers[0]];
  }));
};

code_default().proxy.onError.addListener(async details => {
  (0,log/* default */.Z)('proxy.onError', details);
  Counters/* default.increase */.Z.increase('proxy errors');
});
general_store/* default.initiate */.Z.initiate();
runtime_onInstalled();
code_default().runtime.onStartup.addListener(() => {
  (0,log/* default */.Z)('browser.runtime.onStartup');
  dualUse_ga.partial({
    'category': 'extension',
    'action': 'start',
    'label': code_default().runtime.getManifest().version
  });
});
webRequest(); // NOTE very critical
// First user premium gain

general_store/* default.onChange */.Z.onChange(({
  user
}) => user.premium, async userIsPremium => {
  if (!userIsPremium) return;
  const value = await general_storage/* default.get */.Z.get('User premium first gain');
  if (value) return;
  general_storage/* default.set */.Z.set('User premium first gain', true);
  jitsu.track('premium');
});
{
  // Startup tips shown

  /** @function */
  const listener = async () => {
    const startupTipsShown = await general_storage/* default.get */.Z.get('startup tips shown');
    if (startupTipsShown === true) return;
    general_storage/* default.set */.Z.set('startup tips shown', true);
  };

  general_store/* default.onChange */.Z.onChange(({
    userPac
  }) => userPac, listener);
  general_store/* default.onChange */.Z.onChange(({
    user
  }) => Boolean(user.email), listener);
} // First Proxy ON after install

(() => {
  if (typeof browser !== 'undefined') return; // Only chrome

  general_store/* default.onChange */.Z.onChange(({
    userPac
  }) => userPac.mode, async () => {
    const storageValue = await general_storage/* default.get */.Z.get('onboarding firstStart');
    if (storageValue !== false) return;
    dualUse_ga.full({
      'category': 'onboarding',
      'action': 'firstStart'
    });
    jitsu.track('firstStart');
    general_storage/* default.set */.Z.set('onboarding firstStart', true);
    const storeState = await general_store/* default.getStateAsync */.Z.getStateAsync();

    const experiments = (() => {
      const {
        experiments,
        ignoredExperiments
      } = storeState;
      return Object.fromEntries(Object.entries(experiments).filter(([experimentId]) => !ignoredExperiments.includes(experimentId)));
    })();

    {
      // 262
      const experimentId = (production_default()).experiments.premiumComparisonOnFirstPopup.id;
      const variant = experiments[experimentId];

      if (variant) {
        dualUse_ga.full({
          'category': 'Exp262_firstStart',
          'action': numberToAlphabetLetter(Number(variant)),
          'label': code_default().runtime.getManifest().version
        });
      }
    }
  });
})();

bg_onStartAction(() => {
  (0,log/* default */.Z)((background_manifestVersion === 3 ? 'Service worker' : 'Background') + ' start'); // File system state

  (async () => {
    try {
      await code_default().storage.local.set({
        'file_system_state': true
      });
      await code_default().storage.local.get('file_system_state');
      (0,log/* default */.Z)('File system OK');
    } catch (error) {
      log/* default.error */.Z.error('File system broken');
    }
  })();
});
bg_onStartAction(async () => {
  await general_storage/* default.set */.Z.set('User data promise', 0);
  /** Initial load of account data (especially for FF proxy check)
  @type {Promise} - with user data */

  (async () => {
    await general_storage/* default.set */.Z.set('User data promise', 1);
    const user = await (async () => {
      try {
        return await bg_account.load();
      } catch (error) {
        availableServer.initialRequestComplete.then(() => {
          bg_account.load();
        });
        const {
          user
        } = await general_store/* default.getStateAsync */.Z.getStateAsync();
        return user; // No broken chain
      }
    })();
    await lowLevelPac.shuffle();
    await proxy.setFromStore(); // Set initial proxy state

    await general_storage/* default.set */.Z.set('User data promise', 2);
    return user;
  })();
});
/** We need this only after initial full authorization.
Account change from premium to not premium triggers proxy update */

general_store/* default.onChange */.Z.onChange(({
  'user': {
    email,
    'premium': premiumUser
  }
}) => ({
  'logined': Boolean(email),
  premiumUser
}), async ({
  'logined': newLogined,
  'premiumUser': premiumOld
}, {
  'logined': oldLogined,
  'premiumUser': premiumNew
}) => {
  if (newLogined !== oldLogined) return; // No change logined <--> unlogined

  const userDataPromiseValue = await general_storage/* default.get */.Z.get('User data promise');
  if (userDataPromiseValue !== 2) return;
  const action = !premiumOld && premiumNew ? 'From free to premium' : 'From premium to free';
  const name = `Proxy: switching ${action.toLowerCase()} servers`;

  if (newLogined) {
    // Only on login
    const timer = new DelayRecord(name);
    await lowLevelPac.shuffle();
    await proxy.setFromStore();
    timer.end();
  } else {
    (0,log/* default */.Z)(name);
  }
}); // Inject optimize every 24 hours

(async () => {
  if (background_manifestVersion === 3) return;
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
  timemarks.loop({
    'action': async () => {
      var _await$storage$get;

      // @ts-ignore
      if (self.ga) return;
      const optimizePromise = optimizeExperiments.initiate();
      optimizePromise.then(async () => {
        const value = await general_storage/* default.get */.Z.get('Optimize experiments initiated');
        if (value) return;
        general_storage/* default.set */.Z.set('Optimize experiments initiated', true);
      });
      const installVersion = await general_storage/* default.get */.Z.get('installVersion');
      await dualUse_ga.full.userIdPromise;
      const newUser = (_await$storage$get = await general_storage/* default.get */.Z.get('gaRareUserIsNew')) !== null && _await$storage$get !== void 0 ? _await$storage$get : true; // eslint-disable-line no-unused-vars

      const optimizeEvents = new Set();

      for (const entry of Object.values((production_default()).experiments)) {
        const {
          event,
          type,
          version
        } = entry;
        if (type !== 'event') continue;
        if (!event) continue;
        if (version && !installVersion) continue;
        if (version && versionCompare(installVersion, '<', version)) continue;
        optimizeEvents.add(event);
      } // @ts-ignore


      self.dataLayer = self.dataLayer || []; // @ts-ignore

      for (const event of optimizeEvents) self.dataLayer.push({
        event
      });

      const data = await optimizePromise;
      const existingKeys = data ? data.map(({
        name
      }) => name) : [];
      const {
        experiments
      } = await general_store/* default.getStateAsync */.Z.getStateAsync();
      const storeKeys = Object.keys(experiments);

      const deletedKeys = background_.difference(storeKeys, existingKeys);

      for (const experimentId of deletedKeys) {
        general_store/* default.dispatch */.Z.dispatch({
          'type': 'Experiments: remove',
          experimentId
        });
      }
    },
    'delay': 24 * 3600 * 1000,
    'name': 'experiments'
  });
})(); // browser.runtime.onMessage
// Change authentication data from site login


runtime_onMessage.addListener({
  'type': 'auth',
  'callback': ({
    account
  }, sender) => {
    const accountData = account;
    const senderUrl = sender.url;
    if (typeof senderUrl !== 'string') return;
    if (!senderUrl.startsWith('https://')) return;
    const senderDomain = urlToDomain(senderUrl);
    if (!senderDomain) return;
    const {
      siteAuthorizationDomains
    } = (production_default());
    if (!siteAuthorizationDomains.length) return;

    if (!siteAuthorizationDomains.includes(senderDomain)) {
      log/* default.warn */.Z.warn('Message from an untrusted sender: ' + sender);
      return;
    }

    if (typeof accountData !== 'object' || !accountData) return; // @ts-ignore

    accountData.type = accountData.email ? 'logined' : 'guest'; // @ts-ignore

    if (!validateAccount(accountData)) {
      throw new Error('invalid credentials: ' + JSON.stringify(accountData));
    }

    general_store/* default.dispatch */.Z.dispatch({
      'type': 'User: set',
      'data': accountData
    });
  }
});
/** Reload account */

runtime_onMessage.addListener({
  'type': 'reload',
  'callback': (x, sender) => {
    const senderUrl = sender.url;
    if (typeof senderUrl !== 'string') return;
    let urls = [senderUrl, (production_default()).baseUrl].map(item => new URL(item).origin);

    if (urls[0] !== urls[1]) {
      log/* default.warn */.Z.warn('Message from an untrusted sender: ' + sender);
      return;
    }

    bg_account.reload();
  }
});
code_default().tabs.onUpdated.addListener(async (tabId, {
  status
}, tab) => {
  var _tab$url, _tab$url$split, _tab$url$split$call;

  if (status !== 'complete') return;
  const url = (_tab$url = tab.url) === null || _tab$url === void 0 ? void 0 : (_tab$url$split = _tab$url.split) === null || _tab$url$split === void 0 ? void 0 : (_tab$url$split$call = _tab$url$split.call(_tab$url, '?')) === null || _tab$url$split$call === void 0 ? void 0 : _tab$url$split$call[0];
  if (url !== (production_default()).baseUrl + '/en/accounts/index') return;
  const storageValue = await general_storage/* default.get */.Z.get('account suspended restore');
  if (storageValue !== 'initiated') return;
  general_storage/* default.set */.Z.set('account suspended restore', 'fullfilled');
  code_default().tabs.sendMessage(tabId, {
    'show update payment info': true
  });
});
{
  /** @function */
  const action = async storeState => {
    const hasSmartSetting = storeState.userPac.filters.some(({
      value
    }) => typeof value === 'string' && (value === 'firefox.com' || value.endsWith('.firefox.com')));
    if (hasSmartSetting) return;
    await new Promise(resolve => {
      setTimeout(resolve, 50);
    });
    const {
      lowLevelPac
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const {
      countries,
      globalReturn
    } = lowLevelPac;
    if (!globalReturn) return;
    const requestResult = await new Promise(async (resolve, reject) => {
      setTimeout(() => {
        resolve(false);
      }, 10000);

      try {
        const output = await (0,ajax/* default */.Z)('http://detectportal.firefox.com/success.txt', {
          'method': 'GET'
        });
        resolve(output.trim() === 'success');
      } catch (error) {
        resolve(false);
      }
    });
    const [domain, port] = countries[globalReturn][0].split(' ')[1].split(':');
    jitsu.track('connection_attempt', {
      'success': String(requestResult ? 1 : 0),
      'server_domain': domain,
      'server_port': port
    });
  };

  general_store/* default.onChange */.Z.onChange(({
    userPac
  }) => userPac.mode === 'direct' ? null : userPac.country, async (pacCountry, x, storeState) => {
    if (!pacCountry) return; // Only with country

    action(storeState);
  });
} // dailyRetention section

general_store/* default.onChange */.Z.onChange(({
  'userPac': pac
}) => ({
  'filters': pac.filters,
  'mode': pac.mode
}), () => {
  trySendDailyRetention();
}); // Optimize site requests

(() => {
  if (typeof browser !== 'undefined') return; // Only for Chrome

  /** @function */

  const request = async (credentials, object) => {
    const baseUrl = await availableServer.getServer();
    const data = {
      'experiments': Object.entries(object).map(([experimentId, variant]) => ({
        'exp_id': experimentId,
        'variant_id': variant
      }))
    };
    apiRequest(baseUrl + '/users/experiments', {
      'method': 'POST',
      'tokenCredentials': credentials,
      data
    });
  }; // On login


  general_store/* default.onChange */.Z.onChange(({
    user
  }) => Boolean(user.email), (userLogined, x, storeState) => {
    var _storeState$user$logi;

    if (!userLogined) return;

    const experiments = (() => {
      const {
        experiments,
        ignoredExperiments
      } = storeState;
      return Object.fromEntries(Object.entries(experiments).filter(([experimentId]) => !ignoredExperiments.includes(experimentId)));
    })();

    if (!Object.keys(experiments).length) return;
    const credentials = (_storeState$user$logi = storeState.user.loginData) === null || _storeState$user$logi === void 0 ? void 0 : _storeState$user$logi.credentials;
    request(credentials, experiments);
  }); // On experiment change

  general_store/* default.onChange */.Z.onChange(({
    experiments,
    ignoredExperiments
  }) => Object.fromEntries(Object.entries(experiments).filter(([experimentId]) => !ignoredExperiments.includes(experimentId))), (experiments, oldExperiments, {
    user
  }) => {
    if (user.type !== 'logined') return;
    if (!Object.keys(experiments).length) return;
    const keys = Object.keys(experiments);
    const oldKeys = Object.keys(oldExperiments); // Only additions

    const additions = keys.filter(key => !oldKeys.includes(key));
    if (!additions.length) return;
    const newExperiments = Object.fromEntries(additions.map(key => [key, experiments[key]]));
    request(user.loginData.credentials, newExperiments);
  });
})(); // Experiment 252: listeners


(async () => {
  if (background_manifestVersion === 3) return;
  const experimentId = (production_default()).experiments.premiumOverlayOnPopupOpen.id;
  const ignoreState = await general_storage/* default.get */.Z.get('Experiment 252: ignore');
  if (ignoreState) return;
  const storeState = await general_store/* default.getStateAsync */.Z.getStateAsync();
  const {
    user
  } = storeState;

  const experiments = (() => {
    const {
      experiments,
      ignoredExperiments
    } = storeState;
    return Object.fromEntries(Object.entries(experiments).filter(([experimentId]) => !ignoredExperiments.includes(experimentId)));
  })();

  if (user.premium) {
    const variant = experiments[experimentId];
    const label = variant ? numberToAlphabetLetter(Number(variant)) : undefined;
    dualUse_ga.full({
      'category': 'Exp252',
      'action': 'Ignore',
      label
    });
    general_storage/* default.set */.Z.set('Experiment 252: ignore', true);
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Ignored experiments: add',
      experimentId
    });
    return;
  }

  const variant = experiments[experimentId]; // User is inside experiment

  if (!variant) {
    await general_store/* default.onOneChange */.Z.onOneChange(({
      experiments,
      ignoredExperiments
    }) => Object.fromEntries(Object.entries(experiments).filter(([experimentId]) => !ignoredExperiments.includes(experimentId))), experiments => {
      if (experiments[experimentId]) return true;
    });
  } // User got premium somehow


  {
    const {
      user
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();

    if (!user.premium) {
      // else -> premium obtained during waiting for experiments
      await general_store/* default.onOneChange */.Z.onOneChange(({
        user
      }) => user.premium, premiumUser => {
        // free -> premium
        if (premiumUser) return true;
      });
    }
  }
  {
    const {
      experiments
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const variant = experiments[experimentId];
    const label = variant ? numberToAlphabetLetter(Number(variant)) : undefined;
    dualUse_ga.full({
      'category': 'Exp252',
      'action': 'Ignore',
      label
    });
    general_storage/* default.set */.Z.set('Experiment 252: ignore', true);
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Ignored experiments: add',
      experimentId
    });
  }
})(); // Experiment 254


if (background_manifestVersion !== 3 && typeof browser === 'undefined') {
  const experimentId = (production_default()).experiments.pollBanner.id; // Phase 0 -> 1: runtime.onInstalled event

  (async () => {
    // Wait for phase 0
    await new Promise(async resolve => {
      const phase = await general_storage/* default.get */.Z.get('Experiment 254: phase');
      if (phase === 0) resolve();
      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Experiment 254: phase'],
        'do': storegeData => {
          const value = storegeData['Experiment 254: phase'];

          if (value === 0) {
            unsubscribe();
            resolve();
          }
        }
      });
    });
    await general_storage/* default.set */.Z.set('Experiment 254: phase', 1);
  })(); // Phase 1 -> 2: first proxy on


  (async () => {
    // Wait for phase 1
    await new Promise(async resolve => {
      const phase = await general_storage/* default.get */.Z.get('Experiment 254: phase');
      if (phase === 1) resolve();
      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Experiment 254: phase'],
        'do': storegeData => {
          const value = storegeData['Experiment 254: phase'];

          if (value === 1) {
            unsubscribe();
            resolve();
          }
        }
      });
    });
    await general_store/* default.onOneChange */.Z.onOneChange(({
      userPac
    }) => userPac.mode, mode => {
      if (mode === 'proxy') return true;
    });
    optimizeExperiments.addNewExperimentListener(({
      name,
      variant
    }) => {
      if (name !== experimentId) return;
      general_store/* default.dispatch */.Z.dispatch({
        'type': 'Experiments: add',
        'experimentId': name,
        'value': variant
      });
    }); // @ts-ignore

    self.dataLayer = self.dataLayer || []; // @ts-ignore

    self.dataLayer.push({
      'event': 'pollBanner'
    });
    await general_storage/* default.set */.Z.set('Experiment 254: phase', 2);
  })();

  (async () => {
    const premiumUsed = await general_storage/* default.get */.Z.get('Experiment 254: ignore');
    if (premiumUsed) return;
    const unsubscribe = general_store/* default.onChange */.Z.onChange(({
      user
    }) => user.premium, async (userIsPremium, x, {
      daysAfterInstall,
      experiments
    }) => {
      if (!userIsPremium) return;
      const variant = experiments[experimentId];
      if (!variant) return;
      const premiumUsed = await general_storage/* default.get */.Z.get('Experiment 254: ignore');

      if (premiumUsed) {
        unsubscribe();
        return;
      }

      const letter = numberToAlphabetLetter(Number(variant));
      dualUse_ga.full({
        'category': 'Exp254_premium',
        'action': letter,
        'label': String(daysAfterInstall)
      });
      general_storage/* default.set */.Z.set('Experiment 254: ignore', true);
      general_storage/* default.set */.Z.set('Experiment 254: phase', 3);
      general_store/* default.dispatch */.Z.dispatch({
        'type': 'Ignored experiments: add',
        experimentId
      });
      unsubscribe();
    });
  })();
} // Experiment 262: listeners


(async () => {
  if (background_manifestVersion === 3) return;
  const experimentId = (production_default()).experiments.premiumComparisonOnFirstPopup.id;
  const ignoreState = await general_storage/* default.get */.Z.get('Experiment 262: ignore');
  if (ignoreState) return;
  const storeState = await general_store/* default.getStateAsync */.Z.getStateAsync();

  const experiments = (() => {
    const {
      experiments,
      ignoredExperiments
    } = storeState;
    return Object.fromEntries(Object.entries(experiments).filter(([experimentId]) => !ignoredExperiments.includes(experimentId)));
  })();

  const {
    user
  } = storeState;

  if (user.premium) {
    const variant = experiments[experimentId];
    const label = variant ? numberToAlphabetLetter(Number(variant)) : undefined;
    dualUse_ga.full({
      'category': 'Exp262',
      'action': 'Ignore',
      label
    });
    general_storage/* default.set */.Z.set('Experiment 262: ignore', true);
    return;
  }

  const variant = experiments[experimentId]; // User is inside experiment

  if (!variant) {
    await general_store/* default.onOneChange */.Z.onOneChange(({
      experiments,
      ignoredExperiments
    }) => Object.fromEntries(Object.entries(experiments).filter(([experimentId]) => !ignoredExperiments.includes(experimentId))), experiments => {
      if (experiments[experimentId]) return true;
    });
  } // User got premium somehow


  {
    const {
      user
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();

    if (!user.premium) {
      // else -> premium obtained during waiting for experiments
      await general_store/* default.onOneChange */.Z.onOneChange(({
        user
      }) => user.premium, premiumUser => {
        // only free -> premium
        if (premiumUser) return true;
      });
    }
  }
  {
    const {
      experiments
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const variant = experiments[experimentId];
    dualUse_ga.full({
      'category': 'Exp262',
      'action': 'Ignore',
      'label': variant ? numberToAlphabetLetter(Number(variant)) : undefined
    });
    general_storage/* default.set */.Z.set('Experiment 262: ignore', true);
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Ignored experiments: add',
      experimentId
    });
  }
})(); // Experiment 330.2: listeners


if (background_manifestVersion !== 3 && typeof browser === 'undefined') {
  const experimentId = (production_default()).experiments.freeServersOverloaded.id; // Phase 0 -> 1: runtime.onInstalled event

  (async () => {
    // Wait for phase 0
    await new Promise(async resolve => {
      const phase = await general_storage/* default.get */.Z.get('Experiment 330.2: phase');
      if (phase === 0) resolve();
      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Experiment 330.2: phase'],
        'do': storegeData => {
          const value = storegeData['Experiment 330.2: phase'];

          if (value === 0) {
            unsubscribe();
            resolve();
          }
        }
      });
    });
    await general_store/* default.onOneChange */.Z.onOneChange(({
      userPac
    }) => userPac.mode, mode => {
      if (mode === 'proxy') return true;
    });
    await general_storage/* default.set */.Z.set('Experiment 330.2: phase', 1);
  })(); // Phase 1 -> 2: optimize event activation


  (async () => {
    // Wait for phase 1
    await new Promise(async resolve => {
      const phase = await general_storage/* default.get */.Z.get('Experiment 330.2: phase');
      if (phase === 1) resolve();
      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Experiment 330.2: phase'],
        'do': storegeData => {
          const value = storegeData['Experiment 330.2: phase'];

          if (value === 1) {
            unsubscribe();
            resolve();
          }
        }
      });
    }); // Wait for optimize initiated

    await new Promise(async resolve => {
      const initiated = await general_storage/* default.get */.Z.get('Optimize experiments initiated');

      if (initiated) {
        resolve();
        return;
      }

      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Optimize experiments initiated'],
        'do': storegeData => {
          const value = storegeData['Optimize experiments initiated'];

          if (value) {
            unsubscribe();
            resolve();
          }
        }
      });
    });
    await general_storage/* default.set */.Z.set('Experiment 330.2: phase', 2);
  })(); // Phase 2 -> 3: initiate experiment


  (async () => {
    // Wait for phase 2
    await new Promise(async resolve => {
      const phase = await general_storage/* default.get */.Z.get('Experiment 330.2: phase');
      if (phase === 2) resolve();
      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Experiment 330.2: phase'],
        'do': storegeData => {
          const value = storegeData['Experiment 330.2: phase'];

          if (value === 2) {
            unsubscribe();
            resolve();
          }
        }
      });
    });
    await general_store/* default.onOneChange */.Z.onOneChange(({
      userPac
    }) => userPac.mode, mode => {
      if (mode === 'proxy') return true;
    });
    await general_storage/* default.set */.Z.set('Experiment 330.2: phase', 3);
    const variant = await new Promise(resolve => {
      optimizeExperiments.addNewExperimentListener(({
        name,
        variant
      }) => {
        if (name !== experimentId) return;
        resolve(variant);
      });
      optimizeExperiments.initiate(); // @ts-ignore

      self.dataLayer = self.dataLayer || []; // @ts-ignore

      self.dataLayer.push({
        'event': 'next12hVpnOnAfterFirstProxyOnClick'
      });
    });
    jitsu.track('experiment_tag', {
      'expvarid': experimentId + '_' + variant
    });
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Experiments: add',
      experimentId,
      'value': variant
    });
  })(); // Phase 3 -> 4: user premium gain


  (async () => {
    // Wait for phase 3
    await new Promise(async resolve => {
      const phase = await general_storage/* default.get */.Z.get('Experiment 330.2: phase');
      if (phase === 3) resolve();
      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Experiment 330.2: phase'],
        'do': storegeData => {
          const value = storegeData['Experiment 330.2: phase'];

          if (value === 3) {
            unsubscribe();
            resolve();
          }
        }
      }); // In case of phase 0/1/2 - do nothing
    });
    await general_store/* default.onOneChange */.Z.onOneChange(({
      user
    }) => user.premium, premium => {
      if (premium) return true;
    });
    const {
      daysAfterInstall,
      experiments,
      ignoredExperiments
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const variant = experiments[experimentId];

    if (variant) {
      dualUse_ga.full({
        'category': 'got_premium_330v2',
        'action': numberToAlphabetLetter(Number(variant)),
        'label': String(daysAfterInstall)
      });
    }

    await general_storage/* default.set */.Z.set('Experiment 330.2: phase', 4);

    if (!ignoredExperiments.includes(experimentId)) {
      general_store/* default.dispatch */.Z.dispatch({
        'type': 'Ignored experiments: add',
        experimentId
      });
    }
  })(); // Premium gain before phase 1


  (async () => {
    const currentPhase = await general_storage/* default.get */.Z.get('Experiment 330.2: phase');
    if (currentPhase === 4) return;
    const unsubscribe = general_store/* default.onChange */.Z.onChange(({
      user
    }) => user.premium, async (premium, x, {
      ignoredExperiments
    }) => {
      if (!premium) return;
      const currentPhase = await general_storage/* default.get */.Z.get('Experiment 330.2: phase');
      const ignoredPhases = [0, 1, 2, undefined];

      if (ignoredPhases.includes(currentPhase)) {
        await general_storage/* default.set */.Z.set('Experiment 330.2: phase', 4);
        unsubscribe();
      }

      if (!ignoredExperiments.includes(experimentId)) {
        general_store/* default.dispatch */.Z.dispatch({
          'type': 'Ignored experiments: add',
          experimentId
        });
      }
    });
  })();
} // Experiment 343


(() => {
  const experimentId = (production_default()).experiments.countryChangeOverlay.id; // Phase 0 -> 1: runtime.onInstalled event

  (async () => {
    // Wait for phase 0
    await new Promise(async resolve => {
      const phase = await general_storage/* default.get */.Z.get('Experiment 343: phase');
      if (phase === 0) resolve();
      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Experiment 343: phase'],
        'do': storegeData => {
          const value = storegeData['Experiment 343: phase'];

          if (value === 0) {
            unsubscribe();
            resolve();
          }
        }
      });
    });
    await general_storage/* default.set */.Z.set('Experiment 343: phase', 1);
  })(); // Phase 1 -> 2: optimize event activation


  (async () => {
    // Wait for phase 1
    await new Promise(async resolve => {
      const phase = await general_storage/* default.get */.Z.get('Experiment 343: phase');

      if (phase === 1) {
        resolve();
        return;
      }

      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Experiment 343: phase'],
        'do': storegeData => {
          const value = storegeData['Experiment 343: phase'];

          if (value === 1) {
            unsubscribe();
            resolve();
          }
        }
      });
    }); // Wait for optimize initiated

    await new Promise(async resolve => {
      const initiated = await general_storage/* default.get */.Z.get('Optimize experiments initiated');

      if (initiated) {
        resolve();
        return;
      }

      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Optimize experiments initiated'],
        'do': storegeData => {
          const value = storegeData['Optimize experiments initiated'];

          if (value) {
            unsubscribe();
            resolve();
          }
        }
      });
    });
    await general_storage/* default.set */.Z.set('Experiment 343: phase', 2);
  })(); // Phase 2 -> 3: initiate experiment


  (async () => {
    // Wait for phase 2
    await new Promise(async resolve => {
      const phase = await general_storage/* default.get */.Z.get('Experiment 343: phase');

      if (phase === 2) {
        resolve();
        return;
      }

      const unsubscribe = general_storage/* default.onChange */.Z.onChange({
        'for': ['Experiment 343: phase'],
        'do': storegeData => {
          const value = storegeData['Experiment 343: phase'];

          if (value === 2) {
            unsubscribe();
            resolve();
          }
        }
      });
    }); // Activate optimize experiment

    const variant = await new Promise(resolve => {
      optimizeExperiments.addNewExperimentListener(({
        name,
        variant
      }) => {
        if (name !== experimentId) return;
        resolve(variant);
      });
      optimizeExperiments.initiate(); // @ts-ignore

      self.dataLayer = self.dataLayer || []; // @ts-ignore

      self.dataLayer.push({
        'event': 'countrychangeoverlay'
      });
    });
    jitsu.track('experiment_tag', {
      'expvarid': experimentId + '_' + variant
    });
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Experiments: add',
      experimentId,
      'value': variant
    });
    if (variant === '1') general_storage/* default.set */.Z.set('Experiment 343: phase', 3);
  })();
})();

(() => {
  var _config$experiments$d;

  // Experiment 1052
  const experimentId = // @ts-ignore
  (_config$experiments$d = (production_default()).experiments.deleteExperiment) === null || _config$experiments$d === void 0 ? void 0 : _config$experiments$d.id;
  if (!experimentId) return;
  general_store/* default.onChange */.Z.onChange(({
    user
  }) => user.premium, (premiumUser, x, {
    ignoredExperiments
  }) => {
    if (!premiumUser) return;
    if (ignoredExperiments.includes(experimentId)) return;
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Ignored experiments: add',
      experimentId
    });
  });
})();

{
  // onAuth cache removal feature
  const listener = async ({
    url,
    error
  }) => {
    if (error !== 'net::ERR_TUNNEL_CONNECTION_FAILED') return;
    const domain = urlToDomain(url);
    if (!domain) return;
    const {
      cacheRemoval
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    if (!cacheRemoval) return;
    code_default().browsingData.remove({
      'origins': [`http://${domain}`, `https://${domain}`]
    }, {
      'appcache': true,
      'cache': true,
      'cacheStorage': true,
      'serviceWorkers': true
    });
  };

  code_default().webRequest.onErrorOccurred.addListener(listener, {
    'urls': ['<all_urls>']
  });
  general_store/* default.onChange */.Z.onChange(({
    cacheRemoval
  }) => cacheRemoval, cacheRemoval => {
    if (cacheRemoval) code_default().resetAPI('browsingData');
  });
} // Link storage's browsec.com available change to store's lowLevelPac.browsecCountry

general_storage/* default.onChange */.Z.onChange({
  'for': ['browsec.com available'],
  'do': async storegeData => {
    const newValue = !storegeData['browsec.com available'];
    const {
      lowLevelPac
    } = await general_store/* default.getStateAsync */.Z.getStateAsync();
    const currentStoreValue = Boolean(lowLevelPac.browsecCountry);
    if (newValue === currentStoreValue) return;
    general_store/* default.dispatch */.Z.dispatch({
      'type': 'Low level PAC: update',
      'data': {
        'browsecCountry': newValue ? 'fi' : null
      }
    });
  }
});
lowLevelPac_storeListeners();
storeListeners();
general_store/* default.onChange */.Z.onChange(({
  userPac
}) => userPac.mode, (newState, oldState) => {
  const action = newState === 'proxy' ? 'vpnOn' : 'vpnOff'; ////ga({ action, 'category': 'retention' });

  jitsu.track(action);
});
general_store/* default.onChange */.Z.onChange(({
  userPac
}) => userPac.filters, (newState, oldState) => {
  if (newState.length !== oldState.length + 1) return;
  dualUse_ga.full({
    'action': 'smartSettingsAdd',
    'category': 'smartSettings'
  });
  jitsu.track('smartSettingsAdd');
});
{
  const channels = {};
  code_default().runtime.onConnect.addListener(runtimePort => {
    if (!runtimePort.name.startsWith('popup connection ')) return;
    const id = runtimePort.name.split('popup connection ')[1];
    const openedPopups = Object.keys(channels);

    if (openedPopups.length) {
      for (const id of openedPopups) {
        try {
          channels[id].postMessage('close');
        } catch (x) {}

        delete channels[id];
      }
    }

    channels[id] = runtimePort;
    runtimePort.onDisconnect.addListener(() => {
      delete channels[id];
      jitsu.track('popup_close');
    });
  });
} // First proxy on

general_store/* default.onChange */.Z.onChange(({
  userPac
}) => userPac.mode, async proxyMode => {
  if (proxyMode === 'direct') return;
  const value = await general_storage/* default.get */.Z.get('First proxy on');
  if (value) return;
  general_storage/* default.set */.Z.set('First proxy on', true);
});
})();

/******/ })()
;