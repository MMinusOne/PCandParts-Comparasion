function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b) J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2) a = null;
  var h = false;
  if (null === a) h = true;
  else switch (k2) {
    case "string":
    case "number":
      h = true;
      break;
    case "object":
      switch (a.$$typeof) {
        case l$1:
        case n$1:
          h = true;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
    return a2;
  })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a)) for (var g = 0; g < a.length; g++) {
    k2 = a[g];
    var f2 = d + Q$1(k2, g);
    h += R$1(k2, b, e, f2, c);
  }
  else if (f2 = A$1(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
  else if ("object" === k2) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a, b, e) {
  if (null == a) return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
function X$1() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.act = X$1;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f2 in b) J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = X$1;
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U$1.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U$1.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U$1.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a: for (; 0 < c; ) {
      var d = c - 1 >>> 1, e = a[d];
      if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
      else break a;
    }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length) return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a: for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
        var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
        if (0 > g(C2, c)) n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
        else if (n2 < e && 0 > g(x2, c)) a[d] = x2, a[n2] = c, d = n2;
        else break a;
      }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h(t2); null !== b; ) {
      if (null === b.callback) k2(t2);
      else if (b.startTime <= a) k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else break;
      b = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2) if (null !== h(r2)) A2 = true, I2(J2);
    else {
      var b = h(t2);
      null !== b && K2(H2, b.startTime - a);
    }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b);
        } else k2(r2);
        v2 = h(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++) da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a)) return true;
  if (ja.call(la, a)) return false;
  if (ka.test(a)) return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type) return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d) return false;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
  if (d) return false;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;
    case 4:
      return false === b;
    case 5:
      return isNaN(b);
    case 6:
      return isNaN(b) || 1 > b;
  }
  return false;
}
function v(a, b, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La) try {
    throw Error();
  } catch (c) {
    var b = c.stack.trim().match(/\n( *(at )?)/);
    La = b && b[1] || "";
  }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na) return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b) if (b = function() {
      throw Error();
    }, Object.defineProperty(b.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b, []);
      } catch (l2) {
        var d = l2;
      }
      Reflect.construct(a, [], b);
    } else {
      try {
        b.call();
      } catch (l2) {
        d = l2;
      }
      a.call(b.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; ) h--;
      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f2[h]) {
        if (1 !== g || 1 !== h) {
          do
            if (g--, h--, 0 > h || e[g] !== f2[h]) {
              var k2 = "\n" + e[g].replace(" at new ", " at ");
              a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
              return k2;
            }
          while (1 <= g && 0 <= h);
        }
        break;
      }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case Ca:
      return (a.displayName || "Context") + ".Consumer";
    case Ba:
      return (a._context.displayName || "Context") + ".Provider";
    case Da:
      var b = a.render;
      a = a.displayName;
      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      return a;
    case Ga:
      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
    case Ha:
      b = a._payload;
      a = a._init;
      try {
        return Qa(a(b));
      } catch (c) {
      }
  }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b) return b.displayName || b.name || null;
      if ("string" === typeof b) return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a) return false;
  var b = a._valueTracker;
  if (!b) return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c) if ("number" === d) {
    if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
  } else a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b) throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length) throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
    for (; b.firstChild; ) a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b) if (b.hasOwnProperty(c)) {
    var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
    "float" === c && (c = "cssFloat");
    d ? a.setProperty(c, e) : a[c] = e;
  }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb) throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib) return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c) return null;
  var d = Db(c);
  if (null === d) return null;
  c = d[b];
  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;
    default:
      a = false;
  }
  if (a) return null;
  if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a) {
  Lb = false;
}
function Nb(a, b, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate) for (; b.return; ) b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b) return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a) throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b) throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e) break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c) return Xb(e), a;
        if (f2 === d) return Xb(e), b;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return) c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g) throw Error(p(189));
      }
    }
    if (c.alternate !== d) throw Error(p(190));
  }
  if (3 !== c.tag) throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag) return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b) return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
  } catch (b) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c) return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d) return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
    } else k2 <= b && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++) b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn) return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e) hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e, a, b, c, d)) d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e) break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a) if (b = Vb(a), null === b) a = null;
  else if (c = b.tag, 13 === c) {
    a = Wb(b);
    if (null !== a) return a;
    a = null;
  } else if (3 === c) {
    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
    a = null;
  } else b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++) ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++) ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a) return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b) return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which) return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b)) return a;
}
function ve(a, b) {
  if ("change" === a) return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
}
function Ee(a, b) {
  if ("click" === a) return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a) return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b)) return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length) return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e])) return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; ) a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c) a = b.contentWindow;
    else break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a]) return Xe[a];
  if (!We[a]) return a;
  var b = We[a], c;
  for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b) for (var g = d.length - 1; 0 <= g; g--) {
        var h = d[g], k2 = h.instance, l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
      else for (g = 0; g < d.length; g++) {
        h = d[g];
        k2 = h.instance;
        l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
    if (null === d) return;
    var g = d.tag;
    if (3 === g || 4 === g) {
      var h = d.stateNode.containerInfo;
      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
      if (4 === g) for (g = d.return; null !== g; ) {
        var k2 = g.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
        }
        g = g.return;
      }
      for (; null !== h; ) {
        g = Wc(h);
        if (null === g) return;
        k2 = g.tag;
        if (5 === k2 || 6 === k2) {
          d = f2 = g;
          continue a;
        }
        h = h.parentNode;
      }
    }
    d = d.return;
  }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n2 ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type) var na = ve;
        else if (me(h2)) if (we) na = Fe;
        else {
          na = De;
          var xa = Ce;
        }
        else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae) b: {
        switch (a) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a) return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d) break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c) throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
      if (0 === d) {
        a.removeChild(e);
        bd(b);
        return;
      }
      d--;
    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b) break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b) break;
      if ("/$" === b) return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b) return a;
        b--;
      } else "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b) return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
        if (c = a[Of]) return c;
        a = Mf(a);
      }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c) return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c) e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf) throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();
  for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d) throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f2 + a;
  } else rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a)) throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a)) throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg) return false;
  if (!I) return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a)) throw Hg(), Error(p(418));
    for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; ) a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag) throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d) throw Error(p(147, a));
      var e = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a) throw Error(p(284));
    if (!c._owner) throw Error(p(290, a));
  }
  return a;
}
function Mg(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function Ng(a) {
  var b = a._init;
  return b(a._payload);
}
function Og(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a) return null;
    for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Pg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a) return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya) return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
    d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Lg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Mg(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b2,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2)) return null !== e2 ? null : m2(a2, b2, c2, d2, null);
      Mg(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
      Mg(b2, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length) return c(e2, u2), I && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++) u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++) x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3) throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2) throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c(
      e2,
      m3
    ), I && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next()) n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next()) n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = Lg(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                c(a2, d2.sibling);
                d2 = e(d2, f3.children || []);
                d2.return = a2;
                a2 = d2;
                break a;
              } else {
                c(a2, d2);
                break;
              }
              else b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Sg(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3)) return n2(a2, d2, f3, h2);
      if (Ka(f3)) return t2(a2, d2, f3, h2);
      Mg(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a) {
  var b = Wg.current;
  E(Wg);
  a._currentValue = b;
}
function bh(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c) break;
    a = a.return;
  }
}
function ch(a, b) {
  Xg = a;
  Zg = Yg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
}
function eh(a) {
  var b = a._currentValue;
  if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
    if (null === Xg) throw Error(p(308));
    Yg = a;
    Xg.dependencies = { lanes: 0, firstContext: a };
  } else Yg = Yg.next = a;
  return b;
}
var fh = null;
function gh(a) {
  null === fh ? fh = [a] : fh.push(a);
}
function hh(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return ih(a, d);
}
function ih(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var jh = false;
function kh(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function mh(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function nh(a, b, c) {
  var d = a.updateQueue;
  if (null === d) return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return ih(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return ih(a, c);
}
function oh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function ph(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function qh(a, b, c, d) {
  var e = a.updateQueue;
  jh = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h) if (h = e.shared.pending, null === h) break;
      else r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else null === f2 && (e.shared.lanes = 0);
    rh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function sh(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a) for (b = 0; b < a.length; b++) {
    var d = a[b], e = d.callback;
    if (null !== e) {
      d.callback = null;
      d = c;
      if ("function" !== typeof e) throw Error(p(191, e));
      e.call(d);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a) {
  if (a === th) throw Error(p(174));
  return a;
}
function yh(a, b) {
  G(wh, b);
  G(vh, a);
  G(uh, th);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(uh);
  G(uh, b);
}
function zh() {
  E(uh);
  E(vh);
  E(wh);
}
function Ah(a) {
  xh(wh.current);
  var b = xh(uh.current);
  var c = lb(b, a.type);
  b !== c && (G(vh, a), G(uh, c));
}
function Bh(a) {
  vh.current === a && (E(uh), E(vh));
}
var L = Uf(0);
function Ch(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128)) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a) break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a) return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P() {
  throw Error(p(321));
}
function Mh(a, b) {
  if (null === b) return false;
  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
  return true;
}
function Nh(a, b, c, d, e, f2) {
  Hh = f2;
  M = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
  a = c(d, e);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p(301));
      f2 += 1;
      O = N = null;
      b.updateQueue = null;
      Fh.current = Qh;
      a = c(d, e);
    } while (Jh);
  }
  Fh.current = Rh;
  b = null !== N && null !== N.next;
  Hh = 0;
  O = N = M = null;
  Ih = false;
  if (b) throw Error(p(300));
  return a;
}
function Sh() {
  var a = 0 !== Kh;
  Kh = 0;
  return a;
}
function Th() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O ? M.memoizedState = O = a : O = O.next = a;
  return O;
}
function Uh() {
  if (null === N) {
    var a = M.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = N.next;
  var b = null === O ? M.memoizedState : O.next;
  if (null !== b) O = b, N = a;
  else {
    if (null === a) throw Error(p(310));
    N = a;
    a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
  }
  return O;
}
function Vh(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function Wh(a) {
  var b = Uh(), c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = N, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        M.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He(d, b.memoizedState) || (dh = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, M.lanes |= f2, rh |= f2, e = e.next;
    while (e !== a);
  } else null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function Xh(a) {
  var b = Uh(), c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He(f2, b.memoizedState) || (dh = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function Yh() {
}
function Zh(a, b) {
  var c = M, d = Uh(), e = b(), f2 = !He(d.memoizedState, e);
  f2 && (d.memoizedState = e, dh = true);
  d = d.queue;
  $h(ai.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== O && O.memoizedState.tag & 1) {
    c.flags |= 2048;
    bi(9, ci.bind(null, c, d, e, b), void 0, null);
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(c, b, e);
  }
  return e;
}
function di(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function ci(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  ei(b) && fi(a);
}
function ai(a, b, c) {
  return c(function() {
    ei(b) && fi(a);
  });
}
function ei(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function fi(a) {
  var b = ih(a, 1);
  null !== b && gi(b, a, 1, -1);
}
function hi(a) {
  var b = Th();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ii.bind(null, M, a);
  return [b.memoizedState, a];
}
function bi(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a, b, c, d) {
  var e = Th();
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
}
function li(a, b, c, d) {
  var e = Uh();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== N) {
    var g = N.memoizedState;
    f2 = g.destroy;
    if (null !== d && Mh(d, g.deps)) {
      e.memoizedState = bi(b, c, f2, d);
      return;
    }
  }
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, f2, d);
}
function mi(a, b) {
  return ki(8390656, 8, a, b);
}
function $h(a, b) {
  return li(2048, 8, a, b);
}
function ni(a, b) {
  return li(4, 2, a, b);
}
function oi(a, b) {
  return li(4, 4, a, b);
}
function pi(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function() {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
    b.current = null;
  };
}
function qi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return li(4, 4, pi.bind(null, b, a), c);
}
function ri() {
}
function si(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ti(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function ui(a, b, c) {
  if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
  He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
  return b;
}
function vi(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Gh.transition;
  Gh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Gh.transition = d;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a, b, c) {
  var d = yi(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b, c);
  else if (c = hh(a, b, c, d), null !== c) {
    var e = R();
    gi(c, a, d, e);
    Bi(c, b, d);
  }
}
function ii(a, b, c) {
  var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
      var g = b.lastRenderedState, h = f2(g, c);
      e.hasEagerState = true;
      e.eagerState = h;
      if (He(h, g)) {
        var k2 = b.interleaved;
        null === k2 ? (e.next = e, gh(b)) : (e.next = k2.next, k2.next = e);
        b.interleaved = e;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c = hh(a, b, e, d);
    null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
  }
}
function zi(a) {
  var b = a.alternate;
  return a === M || null !== b && b === M;
}
function Ai(a, b) {
  Jh = Ih = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Bi(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
  Th().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ki(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ki(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Th();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Th();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = xi.bind(null, M, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = Th();
  a = { current: a };
  return b.memoizedState = a;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
  return Th().memoizedState = a;
}, useTransition: function() {
  var a = hi(false), b = a[0];
  a = vi.bind(null, a[1]);
  Th().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = M, e = Th();
  if (I) {
    if (void 0 === c) throw Error(p(407));
    c = c();
  } else {
    c = b();
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(d, b, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e.queue = f2;
  mi(ai.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  bi(9, ci.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = Th(), b = Q.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Kh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a) {
    var b = Uh();
    return ui(b, N.memoizedState, a);
  },
  useTransition: function() {
    var a = Wh(Vh)[0], b = Uh().memoizedState;
    return [a, b];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a) {
  var b = Uh();
  return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
}, useTransition: function() {
  var a = Xh(Vh)[0], b = Uh().memoizedState;
  return [a, b];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
function Di(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var Ei = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = R(), e = yi(a), f2 = mh(d, e);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = nh(a, f2, e);
  null !== b && (gi(b, a, e, d), oh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = R(), e = yi(a), f2 = mh(d, e);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = nh(a, f2, e);
  null !== b && (gi(b, a, e, d), oh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = R(), d = yi(a), e = mh(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  b = nh(a, e, d);
  null !== b && (gi(b, a, d, c), oh(b, a, d));
} };
function Fi(a, b, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
}
function Gi(a, b, c) {
  var d = false, e = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Ei;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function Hi(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
}
function Ii(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = {};
  kh(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function Ji(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e, digest: null };
}
function Ki(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Li(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Oi || (Oi = true, Pi = d);
    Li(a, b);
  };
  return c;
}
function Qi(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Li(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Li(a, b);
    "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Si(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Mi();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
}
function Ui(a) {
  do {
    var b;
    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b) return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Vi(a, b, c, d, e) {
  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Wi = ua.ReactCurrentOwner, dh = false;
function Xi(a, b, c, d) {
  b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
}
function Yi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  ch(b, e);
  d = Nh(a, b, c, d, f2, e);
  c = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Xi(a, b, d, e);
  return b.child;
}
function $i(a, b, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, bj(a, b, f2, d, e);
    a = Rg(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
  }
  b.flags |= 1;
  a = Pg(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function bj(a, b, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
    else return b.lanes = a.lanes, Zi(a, b, e);
  }
  return cj(a, b, c, d, e);
}
function dj(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
  else {
    if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
    b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d = null !== f2 ? f2.baseLanes : c;
    G(ej, fj);
    fj |= d;
  }
  else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
  Xi(a, b, e, c);
  return b.child;
}
function gj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function cj(a, b, c, d, e) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  ch(b, e);
  c = Nh(a, b, c, d, f2, e);
  d = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Xi(a, b, c, e);
  return b.child;
}
function hj(a, b, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else f2 = false;
  ch(b, e);
  if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b, g, d, l2);
    jh = false;
    var r2 = b.memoizedState;
    g.state = r2;
    qh(b, d, g, e);
    k2 = b.memoizedState;
    h !== d || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b, c, m2, d), k2 = b.memoizedState), (h = jh || Fi(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    lh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Ci(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && Hi(b, g, d, k2);
    jh = false;
    r2 = b.memoizedState;
    g.state = r2;
    qh(b, d, g, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b, c, y2, d), n2 = b.memoizedState), (l2 = jh || Fi(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return jj(a, b, c, d, f2, e);
}
function jj(a, b, c, d, e, f2) {
  gj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g) return e && dg(b, c, false), Zi(a, b, f2);
  d = b.stateNode;
  Wi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi(a, b, h, f2);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function kj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  yh(a, b.containerInfo);
}
function lj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Xi(a, b, c, d);
  return b.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function oj(a, b, c) {
  var d = b.pendingProps, e = L.current, f2 = false, g = 0 !== (b.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h) f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState) e |= 1;
  G(L, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = Pg(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = mj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = Pg(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function qj(a, b) {
  b = pj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function sj(a, b, c, d) {
  null !== d && Jg(d);
  Ug(b, a.child, null, c);
  a = qj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function rj(a, b, c, d, e, f2, g) {
  if (c) {
    if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e = b.mode;
    d = pj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Tg(f2, e, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Ug(b, a.child, null, g);
    b.child.memoizedState = nj(g);
    b.memoizedState = mj;
    return f2;
  }
  if (0 === (b.mode & 1)) return sj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d) var h = d.dgst;
    d = h;
    f2 = Error(p(419));
    d = Ki(f2, d, void 0);
    return sj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (dh || h) {
    d = Q;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d, a, e, -1));
    }
    tj();
    d = Ki(Error(p(421)));
    return sj(a, b, g, d);
  }
  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = qj(b, d.children);
  b.flags |= 4096;
  return b;
}
function vj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  bh(a.return, b, c);
}
function wj(a, b, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function xj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  Xi(a, b, d.children, c);
  d = L.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
      if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
      else if (19 === a.tag) vj(a, c, b);
      else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b) break a;
      for (; null === a.sibling; ) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= 1;
  }
  G(L, d);
  if (0 === (b.mode & 1)) b.memoizedState = null;
  else switch (e) {
    case "forwards":
      c = b.child;
      for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
      c = e;
      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
      wj(b, false, e, c, f2);
      break;
    case "backwards":
      c = null;
      e = b.child;
      for (b.child = null; null !== e; ) {
        a = e.alternate;
        if (null !== a && null === Ch(a)) {
          b.child = e;
          break;
        }
        a = e.sibling;
        e.sibling = c;
        c = e;
        e = a;
      }
      wj(b, true, c, null, f2);
      break;
    case "together":
      wj(b, false, null, null, void 0);
      break;
    default:
      b.memoizedState = null;
  }
  return b.child;
}
function ij(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function Zi(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  rh |= b.lanes;
  if (0 === (c & b.childLanes)) return null;
  if (null !== a && b.child !== a.child) throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = Pg(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function yj(a, b, c) {
  switch (b.tag) {
    case 3:
      kj(b);
      Ig();
      break;
    case 5:
      Ah(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      yh(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G(Wg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
        G(L, L.current & 1);
        a = Zi(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(L, L.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d) return xj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(L, L.current);
      if (d) break;
      else return null;
    case 22:
    case 23:
      return b.lanes = 0, dj(a, b, c);
  }
  return Zi(a, b, c);
}
var zj, Aj, Bj, Cj;
zj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Aj = function() {
};
Bj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e) if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
      var h = e[l2];
      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
        for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
        for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
      } else c || (f2 || (f2 = []), f2.push(
        l2,
        c
      )), c = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2) b.flags |= 4;
  }
};
Cj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Dj(a, b) {
  if (!I) switch (a.tailMode) {
    case "hidden":
      b = a.tail;
      for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
      null === c ? a.tail = null : c.sibling = null;
      break;
    case "collapsed":
      c = a.tail;
      for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Ej(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      zh();
      E(Wf);
      E(H);
      Eh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a, b);
      S(b);
      return null;
    case 5:
      Bh(b);
      var e = xh(wh.current);
      c = b.type;
      if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode) throw Error(p(166));
          S(b);
          return null;
        }
        a = xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++) D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g in f2) if (f2.hasOwnProperty(g)) {
            var h = f2[g];
            "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
              d.textContent,
              h,
              a
            ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
          }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          zj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h) if (h.hasOwnProperty(f2)) {
              var k2 = h[f2];
              "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
            }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
        c = xh(wh.current);
        xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a) switch (a.tag) {
              case 3:
                Af(d.nodeValue, c, 0 !== (a.mode & 1));
                break;
              case 5:
                true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
            }
          }
          f2 && (b.flags |= 4);
        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(L);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2) throw Error(p(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p(317));
            f2[Of] = b;
          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128)) return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return ah(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(L);
      f2 = b.memoizedState;
      if (null === f2) return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g) if (d) Dj(f2, false);
      else {
        if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
          g = Ch(a);
          if (null !== g) {
            b.flags |= 128;
            Dj(f2, false);
            d = g.updateQueue;
            null !== d && (b.updateQueue = d, b.flags |= 4);
            b.subtreeFlags = 0;
            d = c;
            for (c = b.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
            G(L, L.current & 1 | 2);
            return b.child;
          }
          a = a.sibling;
        }
        null !== f2.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
      }
      else {
        if (!d) if (a = Ch(g), null !== a) {
          if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I) return S(b), null;
        } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Ij(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Bh(b), null;
    case 13:
      E(L);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate) throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(L), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Lj(a, b) {
  var c = a.ref;
  if (null !== c) if ("function" === typeof c) try {
    c(null);
  } catch (d) {
    W(a, b, d);
  }
  else c.current = null;
}
function Mj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Nj = false;
function Oj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
    else a: {
      c = (c = a.ownerDocument) && c.defaultView || window;
      var d = c.getSelection && c.getSelection();
      if (d && 0 !== d.rangeCount) {
        c = d.anchorNode;
        var e = d.anchorOffset, f2 = d.focusNode;
        d = d.focusOffset;
        try {
          c.nodeType, f2.nodeType;
        } catch (F2) {
          c = null;
          break a;
        }
        var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
            q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
            3 === q2.nodeType && (g += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a) break b;
            r2 === c && ++l2 === e && (h = g);
            r2 === f2 && ++m2 === d && (k2 = g);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
      } else c = null;
    }
    c = c || { start: 0, end: 0 };
  } else c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
  else for (; null !== V; ) {
    b = V;
    try {
      var n2 = b.alternate;
      if (0 !== (b.flags & 1024)) switch (b.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Ci(b.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p(163));
      }
    } catch (F2) {
      W(b, b.return, F2);
    }
    a = b.sibling;
    if (null !== a) {
      a.return = b.return;
      V = a;
      break;
    }
    V = b.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Mj(b, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Qj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Rj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Sj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Sj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Tj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Uj(a) {
  a: for (; ; ) {
    for (; null === a.sibling; ) {
      if (null === a.return || Tj(a.return)) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
      if (a.flags & 2) continue a;
      if (null === a.child || 4 === a.tag) continue a;
      else a.child.return = a, a = a.child;
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Vj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
}
var X = null, Xj = false;
function Yj(a, b, c) {
  for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
}
function Zj(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c);
  } catch (h) {
  }
  switch (c.tag) {
    case 5:
      U || Lj(c, b);
    case 6:
      var d = X, e = Xj;
      X = null;
      Yj(a, b, c);
      X = d;
      Xj = e;
      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Xj;
      X = c.stateNode.containerInfo;
      Xj = true;
      Yj(a, b, c);
      X = d;
      Xj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b, g) : 0 !== (f2 & 4) && Mj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Yj(a, b, c);
      break;
    case 1:
      if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
      } catch (h) {
        W(c, b, h);
      }
      Yj(a, b, c);
      break;
    case 21:
      Yj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
      break;
    default:
      Yj(a, b, c);
  }
}
function ak(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Kj());
    b.forEach(function(b2) {
      var d = bk.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function ck(a, b) {
  var c = b.deletions;
  if (null !== c) for (var d = 0; d < c.length; d++) {
    var e = c[d];
    try {
      var f2 = a, g = b, h = g;
      a: for (; null !== h; ) {
        switch (h.tag) {
          case 5:
            X = h.stateNode;
            Xj = false;
            break a;
          case 3:
            X = h.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X = h.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h = h.return;
      }
      if (null === X) throw Error(p(160));
      Zj(f2, g, e);
      X = null;
      Xj = false;
      var k2 = e.alternate;
      null !== k2 && (k2.return = null);
      e.return = null;
    } catch (l2) {
      W(e, b, l2);
    }
  }
  if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
}
function dk(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b, a);
      ek(a);
      if (d & 4) {
        try {
          Pj(3, a, a.return), Qj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Pj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      break;
    case 5:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2) try {
          "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
          vb(h, g);
          var l2 = vb(h, f2);
          for (g = 0; g < k2.length; g += 2) {
            var m2 = k2[g], q2 = k2[g + 1];
            "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
          }
          switch (h) {
            case "input":
              bb(e, f2);
              break;
            case "textarea":
              ib(e, f2);
              break;
            case "select":
              var r2 = e._wrapperState.wasMultiple;
              e._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e[Pf] = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 6:
      ck(b, a);
      ek(a);
      if (d & 4) {
        if (null === a.stateNode) throw Error(p(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      ck(b, a);
      ek(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
        bd(b.containerInfo);
      } catch (t2) {
        W(a, a.return, t2);
      }
      break;
    case 4:
      ck(b, a);
      ek(a);
      break;
    case 13:
      ck(b, a);
      ek(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
      d & 4 && ak(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, ck(b, a), U = l2) : ck(b, a);
      ek(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V = a, m2 = a.child; null !== m2; ) {
          for (q2 = V = m2; null !== V; ) {
            r2 = V;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d = r2;
                  c = r2.return;
                  try {
                    b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W(d, c, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
              } catch (t2) {
                W(a, a.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W(a, a.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b, a);
      ek(a);
      d & 4 && ak(a);
      break;
    case 21:
      break;
    default:
      ck(
        b,
        a
      ), ek(a);
  }
}
function ek(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Tj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Uj(a);
          Wj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Uj(a);
          Vj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function hk(a, b, c) {
  V = a;
  ik(a);
}
function ik(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e = V, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Jj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Jj;
        var l2 = U;
        Jj = g;
        if ((U = k2) && !l2) for (V = e; null !== V; ) g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k2 ? (k2.return = g, V = k2) : jk(e);
        for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
        V = e;
        Jj = h;
        U = l2;
      }
      kk(a);
    } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : kk(a);
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            U || Qj(5, b);
            break;
          case 1:
            var d = b.stateNode;
            if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
            else {
              var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b.updateQueue;
            null !== f2 && sh(b, f2, d);
            break;
          case 3:
            var g = b.updateQueue;
            if (null !== g) {
              c = null;
              if (null !== b.child) switch (b.child.tag) {
                case 5:
                  c = b.child.stateNode;
                  break;
                case 1:
                  c = b.child.stateNode;
              }
              sh(b, g, c);
            }
            break;
          case 5:
            var h = b.stateNode;
            if (null === c && b.flags & 4) {
              c = h;
              var k2 = b.memoizedProps;
              switch (b.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c.focus();
                  break;
                case "img":
                  k2.src && (c.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b.memoizedState) {
              var l2 = b.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p(163));
        }
        U || b.flags & 512 && Rj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function gk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function jk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Qj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e, k2);
            }
          }
          var f2 = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R() {
  return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
}
function yi(a) {
  if (0 === (a.mode & 1)) return 1;
  if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a = C;
  if (0 !== a) return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function gi(a, b, c, d) {
  if (50 < yk) throw yk = 0, zk = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
}
function Dk(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
      0 === (K & 6) && jg();
    }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Fk(c, Gk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Gk(a, b) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K & 6)) throw Error(p(327));
  var c = a.callbackNode;
  if (Hk() && a.callbackNode !== c) return null;
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
  else {
    b = d;
    var e = K;
    K |= 2;
    var f2 = Jk();
    if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
    do
      try {
        Lk();
        break;
      } catch (h) {
        Mk(a, h);
      }
    while (1);
    $g();
    mk.current = f2;
    K = e;
    null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
    if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
    if (6 === b) Ck(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Pk(a, tk, uk);
          break;
        case 3:
          Ck(a, d);
          if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              R();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 4:
          Ck(a, d);
          if ((d & 4194240) === d) break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 5:
          Pk(a, tk, uk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Dk(a, B());
  return a.callbackNode === c ? Gk.bind(null, a) : null;
}
function Nk(a, b) {
  var c = sk;
  a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
  a = Ik(a, b);
  2 !== a && (b = tk, tk = c, null !== b && Fj(b));
  return a;
}
function Fj(a) {
  null === tk ? tk = a : tk.push.apply(tk, a);
}
function Ok(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
        var e = c[d], f2 = e.getSnapshot;
        e = e.value;
        try {
          if (!He(f2(), e)) return false;
        } catch (g) {
          return false;
        }
      }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
    else {
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Ck(a, b) {
  b &= ~rk;
  b &= ~qk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Ek(a) {
  if (0 !== (K & 6)) throw Error(p(327));
  Hk();
  var b = uc(a, 0);
  if (0 === (b & 1)) return Dk(a, B()), null;
  var c = Ik(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Nk(a, d));
  }
  if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
  if (6 === c) throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Pk(a, tk, uk);
  Dk(a, B());
  return null;
}
function Qk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Gj = B() + 500, fg && jg());
  }
}
function Rk(a) {
  null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
  var b = K;
  K |= 1;
  var c = ok.transition, d = C;
  try {
    if (ok.transition = null, C = 1, a) return a();
  } finally {
    C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E(ej);
}
function Kk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y) for (c = Y.return; null !== c; ) {
    var d = c;
    wg(d);
    switch (d.tag) {
      case 1:
        d = d.type.childContextTypes;
        null !== d && void 0 !== d && $f();
        break;
      case 3:
        zh();
        E(Wf);
        E(H);
        Eh();
        break;
      case 5:
        Bh(d);
        break;
      case 4:
        zh();
        break;
      case 13:
        E(L);
        break;
      case 19:
        E(L);
        break;
      case 10:
        ah(d.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c = c.return;
  }
  Q = a;
  Y = a = Pg(a.current, null);
  Z = fj = b;
  T = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
      c.interleaved = null;
      var e = d.next, f2 = c.pending;
      if (null !== f2) {
        var g = f2.next;
        f2.next = e;
        d.next = g;
      }
      c.pending = d;
    }
    fh = null;
  }
  return a;
}
function Mk(a, b) {
  do {
    var c = Y;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d = M.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Ih = false;
      }
      Hh = 0;
      O = N = M = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c || null === c.return) {
        T = 1;
        pk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui(g);
          if (null !== y2) {
            y2.flags &= -257;
            Vi(y2, g, h, f2, b);
            y2.mode & 1 && Si(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Si(f2, l2, b);
              tj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Ui(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g, h, f2, b);
            Jg(Ji(k2, h));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h);
        4 !== T && (T = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Ni(f2, k2, b);
              ph(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Qi(f2, h, b);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a = mk.current;
  mk.current = Rh;
  return null === a ? Rh : a;
}
function tj() {
  if (0 === T || 3 === T || 2 === T) T = 4;
  null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
}
function Ik(a, b) {
  var c = K;
  K |= 2;
  var d = Jk();
  if (Q !== a || Z !== b) uk = null, Kk(a, b);
  do
    try {
      Tk();
      break;
    } catch (e) {
      Mk(a, e);
    }
  while (1);
  $g();
  K = c;
  mk.current = d;
  if (null !== Y) throw Error(p(261));
  Q = null;
  Z = 0;
  return T;
}
function Tk() {
  for (; null !== Y; ) Uk(Y);
}
function Lk() {
  for (; null !== Y && !cc(); ) Uk(Y);
}
function Uk(a) {
  var b = Vk(a.alternate, a, fj);
  a.memoizedProps = a.pendingProps;
  null === b ? Sk(a) : Y = b;
  nk.current = null;
}
function Sk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Ej(c, b, fj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Ij(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Pk(a, b, c) {
  var d = C, e = ok.transition;
  try {
    ok.transition = null, C = 1, Wk(a, b, c, d);
  } finally {
    ok.transition = e, C = d;
  }
  return null;
}
function Wk(a, b, c, d) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K & 6)) throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current) throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === Q && (Y = Q = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    nk.current = null;
    Oj(a, c);
    dk(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    hk(c);
    dc();
    K = h;
    C = g;
    ok.transition = f2;
  } else a.current = c;
  vk && (vk = false, wk = a, xk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c.stateNode);
  Dk(a, B());
  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Oi) throw Oi = false, a = Pi, Pi = null, a;
  0 !== (xk & 1) && 0 !== a.tag && Hk();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a = Dc(xk), b = ok.transition, c = C;
    try {
      ok.transition = null;
      C = 16 > a ? 16 : a;
      if (null === wk) var d = false;
      else {
        a = wk;
        wk = null;
        xk = 0;
        if (0 !== (K & 6)) throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V = q2;
                  else for (; null !== V; ) {
                    m2 = V;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V = r2;
                      break;
                    }
                    V = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
          else b: for (; null !== V; ) {
            f2 = V;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V = x2;
              break b;
            }
            V = f2.return;
          }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2) u2.return = g, V = u2;
          else b: for (g = w2; null !== V; ) {
            h = V;
            if (0 !== (h.flags & 2048)) try {
              switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h);
              }
            } catch (na) {
              W(h, h.return, na);
            }
            if (h === g) {
              V = null;
              break b;
            }
            var F2 = h.sibling;
            if (null !== F2) {
              F2.return = h.return;
              V = F2;
              break b;
            }
            V = h.return;
          }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a);
        } catch (na) {
        }
        d = true;
      }
      return d;
    } finally {
      C = c, ok.transition = b;
    }
  }
  return false;
}
function Xk(a, b, c) {
  b = Ji(c, b);
  b = Ni(a, b, 1);
  a = nh(a, b, 1);
  b = R();
  null !== a && (Ac(a, 1, b), Dk(a, b));
}
function W(a, b, c) {
  if (3 === a.tag) Xk(a, a, c);
  else for (; null !== b; ) {
    if (3 === b.tag) {
      Xk(b, a, c);
      break;
    } else if (1 === b.tag) {
      var d = b.stateNode;
      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
        a = Ji(c, a);
        a = Qi(b, a, 1);
        b = nh(b, a, 1);
        a = R();
        null !== b && (Ac(b, 1, a), Dk(b, a));
        break;
      }
    }
    b = b.return;
  }
}
function Ti(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = R();
  a.pingedLanes |= a.suspendedLanes & c;
  Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
  Dk(a, b);
}
function Yk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = R();
  a = ih(a, b);
  null !== a && (Ac(a, b, c), Dk(a, c));
}
function uj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Yk(a, c);
}
function bk(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Yk(a, c);
}
var Vk;
Vk = function(a, b, c) {
  if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
    dh = 0 !== (a.flags & 131072) ? true : false;
  }
  else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      ij(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      ch(b, c);
      e = Nh(null, b, d, a, e, c);
      var f2 = Sh();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Xi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        ij(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = Zk(d);
        a = Ci(d, a);
        switch (e) {
          case 0:
            b = cj(null, b, d, a, c);
            break a;
          case 1:
            b = hj(null, b, d, a, c);
            break a;
          case 11:
            b = Yi(null, b, d, a, c);
            break a;
          case 14:
            b = $i(null, b, d, Ci(d.type, a), c);
            break a;
        }
        throw Error(p(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
    case 3:
      a: {
        kj(b);
        if (null === a) throw Error(p(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e = f2.element;
        lh(a, b);
        qh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
          e = Ji(Error(p(423)), b);
          b = lj(a, b, d, c, e);
          break a;
        } else if (d !== e) {
          e = Ji(Error(p(424)), b);
          b = lj(a, b, d, c, e);
          break a;
        } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = Zi(a, b, c);
            break a;
          }
          Xi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return oj(a, b, c);
    case 4:
      return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
    case 7:
      return Xi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f2 = b.memoizedProps;
        g = e.value;
        G(Wg, d._currentValue);
        d._currentValue = g;
        if (null !== f2) if (He(f2.value, g)) {
          if (f2.children === e.children && !Wf.current) {
            b = Zi(a, b, c);
            break a;
          }
        } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
          var h = f2.dependencies;
          if (null !== h) {
            g = f2.child;
            for (var k2 = h.firstContext; null !== k2; ) {
              if (k2.context === d) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c & -c);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c);
                bh(
                  f2.return,
                  c,
                  b
                );
                h.lanes |= c;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
          else if (18 === f2.tag) {
            g = f2.return;
            if (null === g) throw Error(p(341));
            g.lanes |= c;
            h = g.alternate;
            null !== h && (h.lanes |= c);
            bh(g, c, b);
            g = f2.sibling;
          } else g = f2.child;
          if (null !== g) g.return = f2;
          else for (g = f2; null !== g; ) {
            if (g === b) {
              g = null;
              break;
            }
            f2 = g.sibling;
            if (null !== f2) {
              f2.return = g.return;
              g = f2;
              break;
            }
            g = g.return;
          }
          f2 = g;
        }
        Xi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
    case 15:
      return bj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
    case 19:
      return xj(a, b, c);
    case 22:
      return dj(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Fk(a, b) {
  return ac(a, b);
}
function $k(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new $k(a, b, c, d);
}
function aj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Zk(a) {
  if ("function" === typeof a) return aj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da) return 11;
    if (a === Ga) return 14;
  }
  return 2;
}
function Pg(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Rg(a, b, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a) aj(a) && (g = 1);
  else if ("string" === typeof a) g = 5;
  else a: switch (a) {
    case ya:
      return Tg(c.children, e, f2, b);
    case za:
      g = 8;
      e |= 8;
      break;
    case Aa:
      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
    case Ea:
      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
    case Fa:
      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
    case Ia:
      return pj(c, e, f2, b);
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ba:
          g = 10;
          break a;
        case Ca:
          g = 9;
          break a;
        case Da:
          g = 11;
          break a;
        case Ga:
          g = 14;
          break a;
        case Ha:
          g = 16;
          d = null;
          break a;
      }
      throw Error(p(130, null == a ? a : typeof a, ""));
  }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Tg(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function pj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function Qg(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function Sg(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function al(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a, b, c, d, e, f2, g, h, k2) {
  a = new al(a, b, c, h, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a;
}
function cl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function dl(a) {
  if (!a) return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c)) return bg(a, c, b);
  }
  return b;
}
function el(a, b, c, d, e, f2, g, h, k2) {
  a = bl(c, d, true, a, e, f2, g, h, k2);
  a.context = dl(null);
  c = a.current;
  d = R();
  e = yi(c);
  f2 = mh(d, e);
  f2.callback = void 0 !== b && null !== b ? b : null;
  nh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Dk(a, d);
  return a;
}
function fl(a, b, c, d) {
  var e = b.current, f2 = R(), g = yi(e);
  c = dl(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = mh(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = nh(e, b, g);
  null !== a && (gi(a, e, g, f2), oh(a, e, g));
  return g;
}
function gl(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function hl(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function il(a, b) {
  hl(a, b);
  (a = a.alternate) && hl(a, b);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ll(a) {
  this._internalRoot = a;
}
ml.prototype.render = ll.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b) throw Error(p(409));
  fl(a, b, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Rk(function() {
      fl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function ml(a) {
  this._internalRoot = a;
}
ml.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function nl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function pl() {
}
function ql(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = gl(g);
        f2.call(a2);
      };
    }
    var g = el(b, d, a, 0, null, false, false, "", pl);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk();
    return g;
  }
  for (; e = a.lastChild; ) a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = gl(k2);
      h.call(a2);
    };
  }
  var k2 = bl(a, 0, false, null, null, false, false, "", pl);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Rk(function() {
    fl(b, k2, c, d);
  });
  return k2;
}
function rl(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = gl(g);
        h.call(a2);
      };
    }
    fl(b, g, a, e);
  } else g = ql(c, b, a, e, d);
  return gl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b2 = ih(a, 1);
        if (null !== b2) {
          var c2 = R();
          gi(b2, a, 1, c2);
        }
      }), il(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = ih(a, 134217728);
    if (null !== b) {
      var c = R();
      gi(b, a, 134217728, c);
    }
    il(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = yi(a), c = ih(a, b);
    if (null !== c) {
      var d = R();
      gi(c, a, b, d);
    }
    il(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; ) c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e) throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b)) throw Error(p(200));
  return cl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!nl(a)) throw Error(p(299));
  var c = false, d = "", e = kl;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = bl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ll(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render) throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Rk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!nl(a)) throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = kl;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = el(b, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
    c,
    e
  );
  return new ml(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!ol(a)) throw Error(p(40));
  return a._reactRootContainer ? (Rk(function() {
    rl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!ol(c)) throw Error(p(200));
  if (null == a || void 0 === a._reactInternals) throw Error(p(38));
  return rl(a, b, c, false, d);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var current_ansi = 1252;
var VALID_ANSI = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4];
var CS2CP = {
  /*::[*/
  0: 1252,
  /* ANSI */
  /*::[*/
  1: 65001,
  /* DEFAULT */
  /*::[*/
  2: 65001,
  /* SYMBOL */
  /*::[*/
  77: 1e4,
  /* MAC */
  /*::[*/
  128: 932,
  /* SHIFTJIS */
  /*::[*/
  129: 949,
  /* HANGUL */
  /*::[*/
  130: 1361,
  /* JOHAB */
  /*::[*/
  134: 936,
  /* GB2312 */
  /*::[*/
  136: 950,
  /* CHINESEBIG5 */
  /*::[*/
  161: 1253,
  /* GREEK */
  /*::[*/
  162: 1254,
  /* TURKISH */
  /*::[*/
  163: 1258,
  /* VIETNAMESE */
  /*::[*/
  177: 1255,
  /* HEBREW */
  /*::[*/
  178: 1256,
  /* ARABIC */
  /*::[*/
  186: 1257,
  /* BALTIC */
  /*::[*/
  204: 1251,
  /* RUSSIAN */
  /*::[*/
  222: 874,
  /* THAI */
  /*::[*/
  238: 1250,
  /* EASTEUROPE */
  /*::[*/
  255: 1252,
  /* OEM */
  /*::[*/
  69: 6969
  /* MISC */
};
var set_ansi = function(cp) {
  if (VALID_ANSI.indexOf(cp) == -1) return;
  current_ansi = CS2CP[0] = cp;
};
function reset_ansi() {
  set_ansi(1252);
}
var set_cp = function(cp) {
  set_ansi(cp);
};
function reset_cp() {
  set_cp(1200);
  reset_ansi();
}
function char_codes(data) {
  var o = [];
  for (var i = 0, len = data.length; i < len; ++i) o[i] = data.charCodeAt(i);
  return o;
}
function utf16leread(data) {
  var o = [];
  for (var i = 0; i < data.length >> 1; ++i) o[i] = String.fromCharCode(data.charCodeAt(2 * i) + (data.charCodeAt(2 * i + 1) << 8));
  return o.join("");
}
function utf16beread(data) {
  var o = [];
  for (var i = 0; i < data.length >> 1; ++i) o[i] = String.fromCharCode(data.charCodeAt(2 * i + 1) + (data.charCodeAt(2 * i) << 8));
  return o.join("");
}
var debom = function(data) {
  var c1 = data.charCodeAt(0), c2 = data.charCodeAt(1);
  if (c1 == 255 && c2 == 254) return utf16leread(data.slice(2));
  if (c1 == 254 && c2 == 255) return utf16beread(data.slice(2));
  if (c1 == 65279) return data.slice(1);
  return data;
};
var _getchar = function _gc1(x2) {
  return String.fromCharCode(x2);
};
var _getansi = function _ga1(x2) {
  return String.fromCharCode(x2);
};
var $cptable;
var Base64_map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Base64_encode(input) {
  var o = "";
  var c1 = 0, c2 = 0, c3 = 0, e1 = 0, e2 = 0, e3 = 0, e4 = 0;
  for (var i = 0; i < input.length; ) {
    c1 = input.charCodeAt(i++);
    e1 = c1 >> 2;
    c2 = input.charCodeAt(i++);
    e2 = (c1 & 3) << 4 | c2 >> 4;
    c3 = input.charCodeAt(i++);
    e3 = (c2 & 15) << 2 | c3 >> 6;
    e4 = c3 & 63;
    if (isNaN(c2)) {
      e3 = e4 = 64;
    } else if (isNaN(c3)) {
      e4 = 64;
    }
    o += Base64_map.charAt(e1) + Base64_map.charAt(e2) + Base64_map.charAt(e3) + Base64_map.charAt(e4);
  }
  return o;
}
function Base64_decode(input) {
  var o = "";
  var c1 = 0, c2 = 0, c3 = 0, e1 = 0, e2 = 0, e3 = 0, e4 = 0;
  input = input.replace(/[^\w\+\/\=]/g, "");
  for (var i = 0; i < input.length; ) {
    e1 = Base64_map.indexOf(input.charAt(i++));
    e2 = Base64_map.indexOf(input.charAt(i++));
    c1 = e1 << 2 | e2 >> 4;
    o += String.fromCharCode(c1);
    e3 = Base64_map.indexOf(input.charAt(i++));
    c2 = (e2 & 15) << 4 | e3 >> 2;
    if (e3 !== 64) {
      o += String.fromCharCode(c2);
    }
    e4 = Base64_map.indexOf(input.charAt(i++));
    c3 = (e3 & 3) << 6 | e4;
    if (e4 !== 64) {
      o += String.fromCharCode(c3);
    }
  }
  return o;
}
var has_buf = /* @__PURE__ */ function() {
  return typeof Buffer !== "undefined" && typeof process !== "undefined" && typeof process.versions !== "undefined" && !!process.versions.node;
}();
var Buffer_from = /* @__PURE__ */ function() {
  if (typeof Buffer !== "undefined") {
    var nbfs = !Buffer.from;
    if (!nbfs) try {
      Buffer.from("foo", "utf8");
    } catch (e) {
      nbfs = true;
    }
    return nbfs ? function(buf, enc) {
      return enc ? new Buffer(buf, enc) : new Buffer(buf);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
}();
function new_raw_buf(len) {
  if (has_buf) return Buffer.alloc ? Buffer.alloc(len) : new Buffer(len);
  return typeof Uint8Array != "undefined" ? new Uint8Array(len) : new Array(len);
}
function new_unsafe_buf(len) {
  if (has_buf) return Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : new Buffer(len);
  return typeof Uint8Array != "undefined" ? new Uint8Array(len) : new Array(len);
}
var s2a = function s2a2(s) {
  if (has_buf) return Buffer_from(s, "binary");
  return s.split("").map(function(x2) {
    return x2.charCodeAt(0) & 255;
  });
};
function a2s(data) {
  if (Array.isArray(data)) return data.map(function(c) {
    return String.fromCharCode(c);
  }).join("");
  var o = [];
  for (var i = 0; i < data.length; ++i) o[i] = String.fromCharCode(data[i]);
  return o.join("");
}
function ab2a(data) {
  if (typeof ArrayBuffer == "undefined") throw new Error("Unsupported");
  if (data instanceof ArrayBuffer) return ab2a(new Uint8Array(data));
  var o = new Array(data.length);
  for (var i = 0; i < data.length; ++i) o[i] = data[i];
  return o;
}
var bconcat = has_buf ? function(bufs) {
  return Buffer.concat(bufs.map(function(buf) {
    return Buffer.isBuffer(buf) ? buf : Buffer_from(buf);
  }));
} : function(bufs) {
  if (typeof Uint8Array !== "undefined") {
    var i = 0, maxlen = 0;
    for (i = 0; i < bufs.length; ++i) maxlen += bufs[i].length;
    var o = new Uint8Array(maxlen);
    var len = 0;
    for (i = 0, maxlen = 0; i < bufs.length; maxlen += len, ++i) {
      len = bufs[i].length;
      if (bufs[i] instanceof Uint8Array) o.set(bufs[i], maxlen);
      else if (typeof bufs[i] == "string") {
        throw "wtf";
      } else o.set(new Uint8Array(bufs[i]), maxlen);
    }
    return o;
  }
  return [].concat.apply([], bufs.map(function(buf) {
    return Array.isArray(buf) ? buf : [].slice.call(buf);
  }));
};
function utf8decode(content) {
  var out = [], widx = 0, L2 = content.length + 250;
  var o = new_raw_buf(content.length + 255);
  for (var ridx = 0; ridx < content.length; ++ridx) {
    var c = content.charCodeAt(ridx);
    if (c < 128) o[widx++] = c;
    else if (c < 2048) {
      o[widx++] = 192 | c >> 6 & 31;
      o[widx++] = 128 | c & 63;
    } else if (c >= 55296 && c < 57344) {
      c = (c & 1023) + 64;
      var d = content.charCodeAt(++ridx) & 1023;
      o[widx++] = 240 | c >> 8 & 7;
      o[widx++] = 128 | c >> 2 & 63;
      o[widx++] = 128 | d >> 6 & 15 | (c & 3) << 4;
      o[widx++] = 128 | d & 63;
    } else {
      o[widx++] = 224 | c >> 12 & 15;
      o[widx++] = 128 | c >> 6 & 63;
      o[widx++] = 128 | c & 63;
    }
    if (widx > L2) {
      out.push(o.slice(0, widx));
      widx = 0;
      o = new_raw_buf(65535);
      L2 = 65530;
    }
  }
  out.push(o.slice(0, widx));
  return bconcat(out);
}
var chr0 = /\u0000/g, chr1 = /[\u0001-\u0006]/g;
function _strrev(x2) {
  var o = "", i = x2.length - 1;
  while (i >= 0) o += x2.charAt(i--);
  return o;
}
function pad0(v2, d) {
  var t2 = "" + v2;
  return t2.length >= d ? t2 : fill("0", d - t2.length) + t2;
}
function pad_(v2, d) {
  var t2 = "" + v2;
  return t2.length >= d ? t2 : fill(" ", d - t2.length) + t2;
}
function rpad_(v2, d) {
  var t2 = "" + v2;
  return t2.length >= d ? t2 : t2 + fill(" ", d - t2.length);
}
function pad0r1(v2, d) {
  var t2 = "" + Math.round(v2);
  return t2.length >= d ? t2 : fill("0", d - t2.length) + t2;
}
function pad0r2(v2, d) {
  var t2 = "" + v2;
  return t2.length >= d ? t2 : fill("0", d - t2.length) + t2;
}
var p2_32 = /* @__PURE__ */ Math.pow(2, 32);
function pad0r(v2, d) {
  if (v2 > p2_32 || v2 < -p2_32) return pad0r1(v2, d);
  var i = Math.round(v2);
  return pad0r2(i, d);
}
function SSF_isgeneral(s, i) {
  i = i || 0;
  return s.length >= 7 + i && (s.charCodeAt(i) | 32) === 103 && (s.charCodeAt(i + 1) | 32) === 101 && (s.charCodeAt(i + 2) | 32) === 110 && (s.charCodeAt(i + 3) | 32) === 101 && (s.charCodeAt(i + 4) | 32) === 114 && (s.charCodeAt(i + 5) | 32) === 97 && (s.charCodeAt(i + 6) | 32) === 108;
}
var days = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
];
var months = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function SSF_init_table(t2) {
  if (!t2) t2 = {};
  t2[0] = "General";
  t2[1] = "0";
  t2[2] = "0.00";
  t2[3] = "#,##0";
  t2[4] = "#,##0.00";
  t2[9] = "0%";
  t2[10] = "0.00%";
  t2[11] = "0.00E+00";
  t2[12] = "# ?/?";
  t2[13] = "# ??/??";
  t2[14] = "m/d/yy";
  t2[15] = "d-mmm-yy";
  t2[16] = "d-mmm";
  t2[17] = "mmm-yy";
  t2[18] = "h:mm AM/PM";
  t2[19] = "h:mm:ss AM/PM";
  t2[20] = "h:mm";
  t2[21] = "h:mm:ss";
  t2[22] = "m/d/yy h:mm";
  t2[37] = "#,##0 ;(#,##0)";
  t2[38] = "#,##0 ;[Red](#,##0)";
  t2[39] = "#,##0.00;(#,##0.00)";
  t2[40] = "#,##0.00;[Red](#,##0.00)";
  t2[45] = "mm:ss";
  t2[46] = "[h]:mm:ss";
  t2[47] = "mmss.0";
  t2[48] = "##0.0E+0";
  t2[49] = "@";
  t2[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "';
  return t2;
}
var table_fmt = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
};
var SSF_default_map = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  //  5 -> 37 ...  8 -> 40
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  // 23 ->  0 ... 26 ->  0
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  // 27 -> 14 ... 31 -> 14
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  // 50 -> 14 ... 58 -> 14
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  // 59 ->  1 ... 62 ->  4
  67: 9,
  68: 10,
  // 67 ->  9 ... 68 -> 10
  69: 12,
  70: 13,
  71: 14,
  // 69 -> 12 ... 71 -> 14
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  // 72 -> 14 ... 75 -> 17
  76: 20,
  77: 21,
  78: 22,
  // 76 -> 20 ... 78 -> 22
  79: 45,
  80: 46,
  81: 47,
  // 79 -> 45 ... 81 -> 47
  82: 0
  // 82 ->  0 ... 65536 -> 0 (omitted)
};
var SSF_default_str = {
  //  5 -- Currency,   0 decimal, black negative
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  //  6 -- Currency,   0 decimal, red   negative
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  //  7 -- Currency,   2 decimal, black negative
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  //  8 -- Currency,   2 decimal, red   negative
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  // 41 -- Accounting, 0 decimal, No Symbol
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  // 42 -- Accounting, 0 decimal, $  Symbol
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  // 43 -- Accounting, 2 decimal, No Symbol
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  // 44 -- Accounting, 2 decimal, $  Symbol
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function SSF_frac(x2, D2, mixed) {
  var sgn = x2 < 0 ? -1 : 1;
  var B2 = x2 * sgn;
  var P_2 = 0, P_1 = 1, P2 = 0;
  var Q_2 = 1, Q_1 = 0, Q2 = 0;
  var A2 = Math.floor(B2);
  while (Q_1 < D2) {
    A2 = Math.floor(B2);
    P2 = A2 * P_1 + P_2;
    Q2 = A2 * Q_1 + Q_2;
    if (B2 - A2 < 5e-8) break;
    B2 = 1 / (B2 - A2);
    P_2 = P_1;
    P_1 = P2;
    Q_2 = Q_1;
    Q_1 = Q2;
  }
  if (Q2 > D2) {
    if (Q_1 > D2) {
      Q2 = Q_2;
      P2 = P_2;
    } else {
      Q2 = Q_1;
      P2 = P_1;
    }
  }
  if (!mixed) return [0, sgn * P2, Q2];
  var q2 = Math.floor(sgn * P2 / Q2);
  return [q2, sgn * P2 - q2 * Q2, Q2];
}
function SSF_parse_date_code(v2, opts, b2) {
  if (v2 > 2958465 || v2 < 0) return null;
  var date = v2 | 0, time = Math.floor(86400 * (v2 - date)), dow = 0;
  var dout = [];
  var out = { D: date, T: time, u: 86400 * (v2 - date) - time, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(out.u) < 1e-6) out.u = 0;
  if (opts && opts.date1904) date += 1462;
  if (out.u > 0.9999) {
    out.u = 0;
    if (++time == 86400) {
      out.T = time = 0;
      ++date;
      ++out.D;
    }
  }
  if (date === 60) {
    dout = b2 ? [1317, 10, 29] : [1900, 2, 29];
    dow = 3;
  } else if (date === 0) {
    dout = b2 ? [1317, 8, 29] : [1900, 1, 0];
    dow = 6;
  } else {
    if (date > 60) --date;
    var d = new Date(1900, 0, 1);
    d.setDate(d.getDate() + date - 1);
    dout = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
    dow = d.getDay();
    if (date < 60) dow = (dow + 6) % 7;
    if (b2) dow = SSF_fix_hijri(d, dout);
  }
  out.y = dout[0];
  out.m = dout[1];
  out.d = dout[2];
  out.S = time % 60;
  time = Math.floor(time / 60);
  out.M = time % 60;
  time = Math.floor(time / 60);
  out.H = time;
  out.q = dow;
  return out;
}
var SSFbasedate = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0);
var SSFdnthresh = /* @__PURE__ */ SSFbasedate.getTime();
var SSFbase1904 = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0);
function datenum_local(v2, date1904) {
  var epoch = /* @__PURE__ */ v2.getTime();
  if (date1904) epoch -= 1461 * 24 * 60 * 60 * 1e3;
  else if (v2 >= SSFbase1904) epoch += 24 * 60 * 60 * 1e3;
  return (epoch - (SSFdnthresh + (/* @__PURE__ */ v2.getTimezoneOffset() - /* @__PURE__ */ SSFbasedate.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
}
function SSF_strip_decimal(o) {
  return o.indexOf(".") == -1 ? o : o.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function SSF_normalize_exp(o) {
  if (o.indexOf("E") == -1) return o;
  return o.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function SSF_small_exp(v2) {
  var w2 = v2 < 0 ? 12 : 11;
  var o = SSF_strip_decimal(v2.toFixed(12));
  if (o.length <= w2) return o;
  o = v2.toPrecision(10);
  if (o.length <= w2) return o;
  return v2.toExponential(5);
}
function SSF_large_exp(v2) {
  var o = SSF_strip_decimal(v2.toFixed(11));
  return o.length > (v2 < 0 ? 12 : 11) || o === "0" || o === "-0" ? v2.toPrecision(6) : o;
}
function SSF_general_num(v2) {
  var V2 = Math.floor(Math.log(Math.abs(v2)) * Math.LOG10E), o;
  if (V2 >= -4 && V2 <= -1) o = v2.toPrecision(10 + V2);
  else if (Math.abs(V2) <= 9) o = SSF_small_exp(v2);
  else if (V2 === 10) o = v2.toFixed(10).substr(0, 12);
  else o = SSF_large_exp(v2);
  return SSF_strip_decimal(SSF_normalize_exp(o.toUpperCase()));
}
function SSF_general(v2, opts) {
  switch (typeof v2) {
    case "string":
      return v2;
    case "boolean":
      return v2 ? "TRUE" : "FALSE";
    case "number":
      return (v2 | 0) === v2 ? v2.toString(10) : SSF_general_num(v2);
    case "undefined":
      return "";
    case "object":
      if (v2 == null) return "";
      if (v2 instanceof Date) return SSF_format(14, datenum_local(v2, opts && opts.date1904), opts);
  }
  throw new Error("unsupported value in General format: " + v2);
}
function SSF_fix_hijri(date, o) {
  o[0] -= 581;
  var dow = date.getDay();
  if (date < 60) dow = (dow + 6) % 7;
  return dow;
}
function SSF_write_date(type, fmt, val, ss0) {
  var o = "", ss = 0, tt = 0, y2 = val.y, out, outl = 0;
  switch (type) {
    case 98:
      y2 = val.y + 543;
    case 121:
      switch (fmt.length) {
        case 1:
        case 2:
          out = y2 % 100;
          outl = 2;
          break;
        default:
          out = y2 % 1e4;
          outl = 4;
          break;
      }
      break;
    case 109:
      switch (fmt.length) {
        case 1:
        case 2:
          out = val.m;
          outl = fmt.length;
          break;
        case 3:
          return months[val.m - 1][1];
        case 5:
          return months[val.m - 1][0];
        default:
          return months[val.m - 1][2];
      }
      break;
    case 100:
      switch (fmt.length) {
        case 1:
        case 2:
          out = val.d;
          outl = fmt.length;
          break;
        case 3:
          return days[val.q][0];
        default:
          return days[val.q][1];
      }
      break;
    case 104:
      switch (fmt.length) {
        case 1:
        case 2:
          out = 1 + (val.H + 11) % 12;
          outl = fmt.length;
          break;
        default:
          throw "bad hour format: " + fmt;
      }
      break;
    case 72:
      switch (fmt.length) {
        case 1:
        case 2:
          out = val.H;
          outl = fmt.length;
          break;
        default:
          throw "bad hour format: " + fmt;
      }
      break;
    case 77:
      switch (fmt.length) {
        case 1:
        case 2:
          out = val.M;
          outl = fmt.length;
          break;
        default:
          throw "bad minute format: " + fmt;
      }
      break;
    case 115:
      if (fmt != "s" && fmt != "ss" && fmt != ".0" && fmt != ".00" && fmt != ".000") throw "bad second format: " + fmt;
      if (val.u === 0 && (fmt == "s" || fmt == "ss")) return pad0(val.S, fmt.length);
      if (ss0 >= 2) tt = ss0 === 3 ? 1e3 : 100;
      else tt = ss0 === 1 ? 10 : 1;
      ss = Math.round(tt * (val.S + val.u));
      if (ss >= 60 * tt) ss = 0;
      if (fmt === "s") return ss === 0 ? "0" : "" + ss / tt;
      o = pad0(ss, 2 + ss0);
      if (fmt === "ss") return o.substr(0, 2);
      return "." + o.substr(2, fmt.length - 1);
    case 90:
      switch (fmt) {
        case "[h]":
        case "[hh]":
          out = val.D * 24 + val.H;
          break;
        case "[m]":
        case "[mm]":
          out = (val.D * 24 + val.H) * 60 + val.M;
          break;
        case "[s]":
        case "[ss]":
          out = ((val.D * 24 + val.H) * 60 + val.M) * 60 + Math.round(val.S + val.u);
          break;
        default:
          throw "bad abstime format: " + fmt;
      }
      outl = fmt.length === 3 ? 1 : 2;
      break;
    case 101:
      out = y2;
      outl = 1;
      break;
  }
  var outstr = outl > 0 ? pad0(out, outl) : "";
  return outstr;
}
function commaify(s) {
  var w2 = 3;
  if (s.length <= w2) return s;
  var j = s.length % w2, o = s.substr(0, j);
  for (; j != s.length; j += w2) o += (o.length > 0 ? "," : "") + s.substr(j, w2);
  return o;
}
var pct1 = /%/g;
function write_num_pct(type, fmt, val) {
  var sfmt = fmt.replace(pct1, ""), mul = fmt.length - sfmt.length;
  return write_num(type, sfmt, val * Math.pow(10, 2 * mul)) + fill("%", mul);
}
function write_num_cm(type, fmt, val) {
  var idx = fmt.length - 1;
  while (fmt.charCodeAt(idx - 1) === 44) --idx;
  return write_num(type, fmt.substr(0, idx), val / Math.pow(10, 3 * (fmt.length - idx)));
}
function write_num_exp(fmt, val) {
  var o;
  var idx = fmt.indexOf("E") - fmt.indexOf(".") - 1;
  if (fmt.match(/^#+0.0E\+0$/)) {
    if (val == 0) return "0.0E+0";
    else if (val < 0) return "-" + write_num_exp(fmt, -val);
    var period = fmt.indexOf(".");
    if (period === -1) period = fmt.indexOf("E");
    var ee2 = Math.floor(Math.log(val) * Math.LOG10E) % period;
    if (ee2 < 0) ee2 += period;
    o = (val / Math.pow(10, ee2)).toPrecision(idx + 1 + (period + ee2) % period);
    if (o.indexOf("e") === -1) {
      var fakee = Math.floor(Math.log(val) * Math.LOG10E);
      if (o.indexOf(".") === -1) o = o.charAt(0) + "." + o.substr(1) + "E+" + (fakee - o.length + ee2);
      else o += "E+" + (fakee - ee2);
      while (o.substr(0, 2) === "0.") {
        o = o.charAt(0) + o.substr(2, period) + "." + o.substr(2 + period);
        o = o.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      }
      o = o.replace(/\+-/, "-");
    }
    o = o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function($$, $1, $2, $3) {
      return $1 + $2 + $3.substr(0, (period + ee2) % period) + "." + $3.substr(ee2) + "E";
    });
  } else o = val.toExponential(idx);
  if (fmt.match(/E\+00$/) && o.match(/e[+-]\d$/)) o = o.substr(0, o.length - 1) + "0" + o.charAt(o.length - 1);
  if (fmt.match(/E\-/) && o.match(/e\+/)) o = o.replace(/e\+/, "e");
  return o.replace("e", "E");
}
var frac1 = /# (\?+)( ?)\/( ?)(\d+)/;
function write_num_f1(r2, aval, sign) {
  var den = parseInt(r2[4], 10), rr = Math.round(aval * den), base = Math.floor(rr / den);
  var myn = rr - base * den, myd = den;
  return sign + (base === 0 ? "" : "" + base) + " " + (myn === 0 ? fill(" ", r2[1].length + 1 + r2[4].length) : pad_(myn, r2[1].length) + r2[2] + "/" + r2[3] + pad0(myd, r2[4].length));
}
function write_num_f2(r2, aval, sign) {
  return sign + (aval === 0 ? "" : "" + aval) + fill(" ", r2[1].length + 2 + r2[4].length);
}
var dec1 = /^#*0*\.([0#]+)/;
var closeparen = /\).*[0#]/;
var phone = /\(###\) ###\\?-####/;
function hashq(str) {
  var o = "", cc2;
  for (var i = 0; i != str.length; ++i) switch (cc2 = str.charCodeAt(i)) {
    case 35:
      break;
    case 63:
      o += " ";
      break;
    case 48:
      o += "0";
      break;
    default:
      o += String.fromCharCode(cc2);
  }
  return o;
}
function rnd(val, d) {
  var dd2 = Math.pow(10, d);
  return "" + Math.round(val * dd2) / dd2;
}
function dec(val, d) {
  var _frac = val - Math.floor(val), dd2 = Math.pow(10, d);
  if (d < ("" + Math.round(_frac * dd2)).length) return 0;
  return Math.round(_frac * dd2);
}
function carry(val, d) {
  if (d < ("" + Math.round((val - Math.floor(val)) * Math.pow(10, d))).length) {
    return 1;
  }
  return 0;
}
function flr(val) {
  if (val < 2147483647 && val > -2147483648) return "" + (val >= 0 ? val | 0 : val - 1 | 0);
  return "" + Math.floor(val);
}
function write_num_flt(type, fmt, val) {
  if (type.charCodeAt(0) === 40 && !fmt.match(closeparen)) {
    var ffmt = fmt.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    if (val >= 0) return write_num_flt("n", ffmt, val);
    return "(" + write_num_flt("n", ffmt, -val) + ")";
  }
  if (fmt.charCodeAt(fmt.length - 1) === 44) return write_num_cm(type, fmt, val);
  if (fmt.indexOf("%") !== -1) return write_num_pct(type, fmt, val);
  if (fmt.indexOf("E") !== -1) return write_num_exp(fmt, val);
  if (fmt.charCodeAt(0) === 36) return "$" + write_num_flt(type, fmt.substr(fmt.charAt(1) == " " ? 2 : 1), val);
  var o;
  var r2, ri2, ff2, aval = Math.abs(val), sign = val < 0 ? "-" : "";
  if (fmt.match(/^00+$/)) return sign + pad0r(aval, fmt.length);
  if (fmt.match(/^[#?]+$/)) {
    o = pad0r(val, 0);
    if (o === "0") o = "";
    return o.length > fmt.length ? o : hashq(fmt.substr(0, fmt.length - o.length)) + o;
  }
  if (r2 = fmt.match(frac1)) return write_num_f1(r2, aval, sign);
  if (fmt.match(/^#+0+$/)) return sign + pad0r(aval, fmt.length - fmt.indexOf("0"));
  if (r2 = fmt.match(dec1)) {
    o = rnd(val, r2[1].length).replace(/^([^\.]+)$/, "$1." + hashq(r2[1])).replace(/\.$/, "." + hashq(r2[1])).replace(/\.(\d*)$/, function($$, $1) {
      return "." + $1 + fill("0", hashq(
        /*::(*/
        r2[1]
      ).length - $1.length);
    });
    return fmt.indexOf("0.") !== -1 ? o : o.replace(/^0\./, ".");
  }
  fmt = fmt.replace(/^#+([0.])/, "$1");
  if (r2 = fmt.match(/^(0*)\.(#*)$/)) {
    return sign + rnd(aval, r2[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, r2[1].length ? "0." : ".");
  }
  if (r2 = fmt.match(/^#{1,3},##0(\.?)$/)) return sign + commaify(pad0r(aval, 0));
  if (r2 = fmt.match(/^#,##0\.([#0]*0)$/)) {
    return val < 0 ? "-" + write_num_flt(type, fmt, -val) : commaify("" + (Math.floor(val) + carry(val, r2[1].length))) + "." + pad0(dec(val, r2[1].length), r2[1].length);
  }
  if (r2 = fmt.match(/^#,#*,#0/)) return write_num_flt(type, fmt.replace(/^#,#*,/, ""), val);
  if (r2 = fmt.match(/^([0#]+)(\\?-([0#]+))+$/)) {
    o = _strrev(write_num_flt(type, fmt.replace(/[\\-]/g, ""), val));
    ri2 = 0;
    return _strrev(_strrev(fmt.replace(/\\/g, "")).replace(/[0#]/g, function(x3) {
      return ri2 < o.length ? o.charAt(ri2++) : x3 === "0" ? "0" : "";
    }));
  }
  if (fmt.match(phone)) {
    o = write_num_flt(type, "##########", val);
    return "(" + o.substr(0, 3) + ") " + o.substr(3, 3) + "-" + o.substr(6);
  }
  var oa2 = "";
  if (r2 = fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    ri2 = Math.min(
      /*::String(*/
      r2[4].length,
      7
    );
    ff2 = SSF_frac(aval, Math.pow(10, ri2) - 1, false);
    o = "" + sign;
    oa2 = write_num(
      "n",
      /*::String(*/
      r2[1],
      ff2[1]
    );
    if (oa2.charAt(oa2.length - 1) == " ") oa2 = oa2.substr(0, oa2.length - 1) + "0";
    o += oa2 + /*::String(*/
    r2[2] + "/" + /*::String(*/
    r2[3];
    oa2 = rpad_(ff2[2], ri2);
    if (oa2.length < r2[4].length) oa2 = hashq(r2[4].substr(r2[4].length - oa2.length)) + oa2;
    o += oa2;
    return o;
  }
  if (r2 = fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    ri2 = Math.min(Math.max(r2[1].length, r2[4].length), 7);
    ff2 = SSF_frac(aval, Math.pow(10, ri2) - 1, true);
    return sign + (ff2[0] || (ff2[1] ? "" : "0")) + " " + (ff2[1] ? pad_(ff2[1], ri2) + r2[2] + "/" + r2[3] + rpad_(ff2[2], ri2) : fill(" ", 2 * ri2 + 1 + r2[2].length + r2[3].length));
  }
  if (r2 = fmt.match(/^[#0?]+$/)) {
    o = pad0r(val, 0);
    if (fmt.length <= o.length) return o;
    return hashq(fmt.substr(0, fmt.length - o.length)) + o;
  }
  if (r2 = fmt.match(/^([#0?]+)\.([#0]+)$/)) {
    o = "" + val.toFixed(Math.min(r2[2].length, 10)).replace(/([^0])0+$/, "$1");
    ri2 = o.indexOf(".");
    var lres = fmt.indexOf(".") - ri2, rres = fmt.length - o.length - lres;
    return hashq(fmt.substr(0, lres) + o + fmt.substr(fmt.length - rres));
  }
  if (r2 = fmt.match(/^00,000\.([#0]*0)$/)) {
    ri2 = dec(val, r2[1].length);
    return val < 0 ? "-" + write_num_flt(type, fmt, -val) : commaify(flr(val)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function($$) {
      return "00," + ($$.length < 3 ? pad0(0, 3 - $$.length) : "") + $$;
    }) + "." + pad0(ri2, r2[1].length);
  }
  switch (fmt) {
    case "###,##0.00":
      return write_num_flt(type, "#,##0.00", val);
    case "###,###":
    case "##,###":
    case "#,###":
      var x2 = commaify(pad0r(aval, 0));
      return x2 !== "0" ? sign + x2 : "";
    case "###,###.00":
      return write_num_flt(type, "###,##0.00", val).replace(/^0\./, ".");
    case "#,###.00":
      return write_num_flt(type, "#,##0.00", val).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + fmt + "|");
}
function write_num_cm2(type, fmt, val) {
  var idx = fmt.length - 1;
  while (fmt.charCodeAt(idx - 1) === 44) --idx;
  return write_num(type, fmt.substr(0, idx), val / Math.pow(10, 3 * (fmt.length - idx)));
}
function write_num_pct2(type, fmt, val) {
  var sfmt = fmt.replace(pct1, ""), mul = fmt.length - sfmt.length;
  return write_num(type, sfmt, val * Math.pow(10, 2 * mul)) + fill("%", mul);
}
function write_num_exp2(fmt, val) {
  var o;
  var idx = fmt.indexOf("E") - fmt.indexOf(".") - 1;
  if (fmt.match(/^#+0.0E\+0$/)) {
    if (val == 0) return "0.0E+0";
    else if (val < 0) return "-" + write_num_exp2(fmt, -val);
    var period = fmt.indexOf(".");
    if (period === -1) period = fmt.indexOf("E");
    var ee2 = Math.floor(Math.log(val) * Math.LOG10E) % period;
    if (ee2 < 0) ee2 += period;
    o = (val / Math.pow(10, ee2)).toPrecision(idx + 1 + (period + ee2) % period);
    if (!o.match(/[Ee]/)) {
      var fakee = Math.floor(Math.log(val) * Math.LOG10E);
      if (o.indexOf(".") === -1) o = o.charAt(0) + "." + o.substr(1) + "E+" + (fakee - o.length + ee2);
      else o += "E+" + (fakee - ee2);
      o = o.replace(/\+-/, "-");
    }
    o = o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function($$, $1, $2, $3) {
      return $1 + $2 + $3.substr(0, (period + ee2) % period) + "." + $3.substr(ee2) + "E";
    });
  } else o = val.toExponential(idx);
  if (fmt.match(/E\+00$/) && o.match(/e[+-]\d$/)) o = o.substr(0, o.length - 1) + "0" + o.charAt(o.length - 1);
  if (fmt.match(/E\-/) && o.match(/e\+/)) o = o.replace(/e\+/, "e");
  return o.replace("e", "E");
}
function write_num_int(type, fmt, val) {
  if (type.charCodeAt(0) === 40 && !fmt.match(closeparen)) {
    var ffmt = fmt.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    if (val >= 0) return write_num_int("n", ffmt, val);
    return "(" + write_num_int("n", ffmt, -val) + ")";
  }
  if (fmt.charCodeAt(fmt.length - 1) === 44) return write_num_cm2(type, fmt, val);
  if (fmt.indexOf("%") !== -1) return write_num_pct2(type, fmt, val);
  if (fmt.indexOf("E") !== -1) return write_num_exp2(fmt, val);
  if (fmt.charCodeAt(0) === 36) return "$" + write_num_int(type, fmt.substr(fmt.charAt(1) == " " ? 2 : 1), val);
  var o;
  var r2, ri2, ff2, aval = Math.abs(val), sign = val < 0 ? "-" : "";
  if (fmt.match(/^00+$/)) return sign + pad0(aval, fmt.length);
  if (fmt.match(/^[#?]+$/)) {
    o = "" + val;
    if (val === 0) o = "";
    return o.length > fmt.length ? o : hashq(fmt.substr(0, fmt.length - o.length)) + o;
  }
  if (r2 = fmt.match(frac1)) return write_num_f2(r2, aval, sign);
  if (fmt.match(/^#+0+$/)) return sign + pad0(aval, fmt.length - fmt.indexOf("0"));
  if (r2 = fmt.match(dec1)) {
    o = ("" + val).replace(/^([^\.]+)$/, "$1." + hashq(r2[1])).replace(/\.$/, "." + hashq(r2[1]));
    o = o.replace(/\.(\d*)$/, function($$, $1) {
      return "." + $1 + fill("0", hashq(r2[1]).length - $1.length);
    });
    return fmt.indexOf("0.") !== -1 ? o : o.replace(/^0\./, ".");
  }
  fmt = fmt.replace(/^#+([0.])/, "$1");
  if (r2 = fmt.match(/^(0*)\.(#*)$/)) {
    return sign + ("" + aval).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, r2[1].length ? "0." : ".");
  }
  if (r2 = fmt.match(/^#{1,3},##0(\.?)$/)) return sign + commaify("" + aval);
  if (r2 = fmt.match(/^#,##0\.([#0]*0)$/)) {
    return val < 0 ? "-" + write_num_int(type, fmt, -val) : commaify("" + val) + "." + fill("0", r2[1].length);
  }
  if (r2 = fmt.match(/^#,#*,#0/)) return write_num_int(type, fmt.replace(/^#,#*,/, ""), val);
  if (r2 = fmt.match(/^([0#]+)(\\?-([0#]+))+$/)) {
    o = _strrev(write_num_int(type, fmt.replace(/[\\-]/g, ""), val));
    ri2 = 0;
    return _strrev(_strrev(fmt.replace(/\\/g, "")).replace(/[0#]/g, function(x3) {
      return ri2 < o.length ? o.charAt(ri2++) : x3 === "0" ? "0" : "";
    }));
  }
  if (fmt.match(phone)) {
    o = write_num_int(type, "##########", val);
    return "(" + o.substr(0, 3) + ") " + o.substr(3, 3) + "-" + o.substr(6);
  }
  var oa2 = "";
  if (r2 = fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    ri2 = Math.min(
      /*::String(*/
      r2[4].length,
      7
    );
    ff2 = SSF_frac(aval, Math.pow(10, ri2) - 1, false);
    o = "" + sign;
    oa2 = write_num(
      "n",
      /*::String(*/
      r2[1],
      ff2[1]
    );
    if (oa2.charAt(oa2.length - 1) == " ") oa2 = oa2.substr(0, oa2.length - 1) + "0";
    o += oa2 + /*::String(*/
    r2[2] + "/" + /*::String(*/
    r2[3];
    oa2 = rpad_(ff2[2], ri2);
    if (oa2.length < r2[4].length) oa2 = hashq(r2[4].substr(r2[4].length - oa2.length)) + oa2;
    o += oa2;
    return o;
  }
  if (r2 = fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
    ri2 = Math.min(Math.max(r2[1].length, r2[4].length), 7);
    ff2 = SSF_frac(aval, Math.pow(10, ri2) - 1, true);
    return sign + (ff2[0] || (ff2[1] ? "" : "0")) + " " + (ff2[1] ? pad_(ff2[1], ri2) + r2[2] + "/" + r2[3] + rpad_(ff2[2], ri2) : fill(" ", 2 * ri2 + 1 + r2[2].length + r2[3].length));
  }
  if (r2 = fmt.match(/^[#0?]+$/)) {
    o = "" + val;
    if (fmt.length <= o.length) return o;
    return hashq(fmt.substr(0, fmt.length - o.length)) + o;
  }
  if (r2 = fmt.match(/^([#0]+)\.([#0]+)$/)) {
    o = "" + val.toFixed(Math.min(r2[2].length, 10)).replace(/([^0])0+$/, "$1");
    ri2 = o.indexOf(".");
    var lres = fmt.indexOf(".") - ri2, rres = fmt.length - o.length - lres;
    return hashq(fmt.substr(0, lres) + o + fmt.substr(fmt.length - rres));
  }
  if (r2 = fmt.match(/^00,000\.([#0]*0)$/)) {
    return val < 0 ? "-" + write_num_int(type, fmt, -val) : commaify("" + val).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function($$) {
      return "00," + ($$.length < 3 ? pad0(0, 3 - $$.length) : "") + $$;
    }) + "." + pad0(0, r2[1].length);
  }
  switch (fmt) {
    case "###,###":
    case "##,###":
    case "#,###":
      var x2 = commaify("" + aval);
      return x2 !== "0" ? sign + x2 : "";
    default:
      if (fmt.match(/\.[0#?]*$/)) return write_num_int(type, fmt.slice(0, fmt.lastIndexOf(".")), val) + hashq(fmt.slice(fmt.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + fmt + "|");
}
function write_num(type, fmt, val) {
  return (val | 0) === val ? write_num_int(type, fmt, val) : write_num_flt(type, fmt, val);
}
function SSF_split_fmt(fmt) {
  var out = [];
  var in_str = false;
  for (var i = 0, j = 0; i < fmt.length; ++i) switch (
    /*cc=*/
    fmt.charCodeAt(i)
  ) {
    case 34:
      in_str = !in_str;
      break;
    case 95:
    case 42:
    case 92:
      ++i;
      break;
    case 59:
      out[out.length] = fmt.substr(j, i - j);
      j = i + 1;
  }
  out[out.length] = fmt.substr(j);
  if (in_str === true) throw new Error("Format |" + fmt + "| unterminated string ");
  return out;
}
var SSF_abstime = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function fmt_is_date(fmt) {
  var i = 0, c = "", o = "";
  while (i < fmt.length) {
    switch (c = fmt.charAt(i)) {
      case "G":
        if (SSF_isgeneral(fmt, i)) i += 6;
        i++;
        break;
      case '"':
        for (
          ;
          /*cc=*/
          fmt.charCodeAt(++i) !== 34 && i < fmt.length;
        ) {
        }
        ++i;
        break;
      case "\\":
        i += 2;
        break;
      case "_":
        i += 2;
        break;
      case "@":
        ++i;
        break;
      case "B":
      case "b":
        if (fmt.charAt(i + 1) === "1" || fmt.charAt(i + 1) === "2") return true;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return true;
      case "A":
      case "a":
      case "上":
        if (fmt.substr(i, 3).toUpperCase() === "A/P") return true;
        if (fmt.substr(i, 5).toUpperCase() === "AM/PM") return true;
        if (fmt.substr(i, 5).toUpperCase() === "上午/下午") return true;
        ++i;
        break;
      case "[":
        o = c;
        while (fmt.charAt(i++) !== "]" && i < fmt.length) o += fmt.charAt(i);
        if (o.match(SSF_abstime)) return true;
        break;
      case ".":
      case "0":
      case "#":
        while (i < fmt.length && ("0#?.,E+-%".indexOf(c = fmt.charAt(++i)) > -1 || c == "\\" && fmt.charAt(i + 1) == "-" && "0#".indexOf(fmt.charAt(i + 2)) > -1)) {
        }
        break;
      case "?":
        while (fmt.charAt(++i) === c) {
        }
        break;
      case "*":
        ++i;
        if (fmt.charAt(i) == " " || fmt.charAt(i) == "*") ++i;
        break;
      case "(":
      case ")":
        ++i;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        while (i < fmt.length && "0123456789".indexOf(fmt.charAt(++i)) > -1) {
        }
        break;
      case " ":
        ++i;
        break;
      default:
        ++i;
        break;
    }
  }
  return false;
}
function eval_fmt(fmt, v2, opts, flen) {
  var out = [], o = "", i = 0, c = "", lst = "t", dt, j, cc2;
  var hr = "H";
  while (i < fmt.length) {
    switch (c = fmt.charAt(i)) {
      case "G":
        if (!SSF_isgeneral(fmt, i)) throw new Error("unrecognized character " + c + " in " + fmt);
        out[out.length] = { t: "G", v: "General" };
        i += 7;
        break;
      case '"':
        for (o = ""; (cc2 = fmt.charCodeAt(++i)) !== 34 && i < fmt.length; ) o += String.fromCharCode(cc2);
        out[out.length] = { t: "t", v: o };
        ++i;
        break;
      case "\\":
        var w2 = fmt.charAt(++i), t2 = w2 === "(" || w2 === ")" ? w2 : "t";
        out[out.length] = { t: t2, v: w2 };
        ++i;
        break;
      case "_":
        out[out.length] = { t: "t", v: " " };
        i += 2;
        break;
      case "@":
        out[out.length] = { t: "T", v: v2 };
        ++i;
        break;
      case "B":
      case "b":
        if (fmt.charAt(i + 1) === "1" || fmt.charAt(i + 1) === "2") {
          if (dt == null) {
            dt = SSF_parse_date_code(v2, opts, fmt.charAt(i + 1) === "2");
            if (dt == null) return "";
          }
          out[out.length] = { t: "X", v: fmt.substr(i, 2) };
          lst = c;
          i += 2;
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        c = c.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (v2 < 0) return "";
        if (dt == null) {
          dt = SSF_parse_date_code(v2, opts);
          if (dt == null) return "";
        }
        o = c;
        while (++i < fmt.length && fmt.charAt(i).toLowerCase() === c) o += c;
        if (c === "m" && lst.toLowerCase() === "h") c = "M";
        if (c === "h") c = hr;
        out[out.length] = { t: c, v: o };
        lst = c;
        break;
      case "A":
      case "a":
      case "上":
        var q2 = { t: c, v: c };
        if (dt == null) dt = SSF_parse_date_code(v2, opts);
        if (fmt.substr(i, 3).toUpperCase() === "A/P") {
          if (dt != null) q2.v = dt.H >= 12 ? "P" : "A";
          q2.t = "T";
          hr = "h";
          i += 3;
        } else if (fmt.substr(i, 5).toUpperCase() === "AM/PM") {
          if (dt != null) q2.v = dt.H >= 12 ? "PM" : "AM";
          q2.t = "T";
          i += 5;
          hr = "h";
        } else if (fmt.substr(i, 5).toUpperCase() === "上午/下午") {
          if (dt != null) q2.v = dt.H >= 12 ? "下午" : "上午";
          q2.t = "T";
          i += 5;
          hr = "h";
        } else {
          q2.t = "t";
          ++i;
        }
        if (dt == null && q2.t === "T") return "";
        out[out.length] = q2;
        lst = c;
        break;
      case "[":
        o = c;
        while (fmt.charAt(i++) !== "]" && i < fmt.length) o += fmt.charAt(i);
        if (o.slice(-1) !== "]") throw 'unterminated "[" block: |' + o + "|";
        if (o.match(SSF_abstime)) {
          if (dt == null) {
            dt = SSF_parse_date_code(v2, opts);
            if (dt == null) return "";
          }
          out[out.length] = { t: "Z", v: o.toLowerCase() };
          lst = o.charAt(1);
        } else if (o.indexOf("$") > -1) {
          o = (o.match(/\$([^-\[\]]*)/) || [])[1] || "$";
          if (!fmt_is_date(fmt)) out[out.length] = { t: "t", v: o };
        }
        break;
      case ".":
        if (dt != null) {
          o = c;
          while (++i < fmt.length && (c = fmt.charAt(i)) === "0") o += c;
          out[out.length] = { t: "s", v: o };
          break;
        }
      case "0":
      case "#":
        o = c;
        while (++i < fmt.length && "0#?.,E+-%".indexOf(c = fmt.charAt(i)) > -1) o += c;
        out[out.length] = { t: "n", v: o };
        break;
      case "?":
        o = c;
        while (fmt.charAt(++i) === c) o += c;
        out[out.length] = { t: c, v: o };
        lst = c;
        break;
      case "*":
        ++i;
        if (fmt.charAt(i) == " " || fmt.charAt(i) == "*") ++i;
        break;
      case "(":
      case ")":
        out[out.length] = { t: flen === 1 ? "t" : c, v: c };
        ++i;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        o = c;
        while (i < fmt.length && "0123456789".indexOf(fmt.charAt(++i)) > -1) o += fmt.charAt(i);
        out[out.length] = { t: "D", v: o };
        break;
      case " ":
        out[out.length] = { t: c, v: c };
        ++i;
        break;
      case "$":
        out[out.length] = { t: "t", v: "$" };
        ++i;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(c) === -1) throw new Error("unrecognized character " + c + " in " + fmt);
        out[out.length] = { t: "t", v: c };
        ++i;
        break;
    }
  }
  var bt = 0, ss0 = 0, ssm;
  for (i = out.length - 1, lst = "t"; i >= 0; --i) {
    switch (out[i].t) {
      case "h":
      case "H":
        out[i].t = hr;
        lst = "h";
        if (bt < 1) bt = 1;
        break;
      case "s":
        if (ssm = out[i].v.match(/\.0+$/)) ss0 = Math.max(ss0, ssm[0].length - 1);
        if (bt < 3) bt = 3;
      case "d":
      case "y":
      case "M":
      case "e":
        lst = out[i].t;
        break;
      case "m":
        if (lst === "s") {
          out[i].t = "M";
          if (bt < 2) bt = 2;
        }
        break;
      case "X":
        break;
      case "Z":
        if (bt < 1 && out[i].v.match(/[Hh]/)) bt = 1;
        if (bt < 2 && out[i].v.match(/[Mm]/)) bt = 2;
        if (bt < 3 && out[i].v.match(/[Ss]/)) bt = 3;
    }
  }
  switch (bt) {
    case 0:
      break;
    case 1:
      if (dt.u >= 0.5) {
        dt.u = 0;
        ++dt.S;
      }
      if (dt.S >= 60) {
        dt.S = 0;
        ++dt.M;
      }
      if (dt.M >= 60) {
        dt.M = 0;
        ++dt.H;
      }
      break;
    case 2:
      if (dt.u >= 0.5) {
        dt.u = 0;
        ++dt.S;
      }
      if (dt.S >= 60) {
        dt.S = 0;
        ++dt.M;
      }
      break;
  }
  var nstr = "", jj2;
  for (i = 0; i < out.length; ++i) {
    switch (out[i].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        out[i].v = "";
        out[i].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        out[i].v = SSF_write_date(out[i].t.charCodeAt(0), out[i].v, dt, ss0);
        out[i].t = "t";
        break;
      case "n":
      case "?":
        jj2 = i + 1;
        while (out[jj2] != null && ((c = out[jj2].t) === "?" || c === "D" || (c === " " || c === "t") && out[jj2 + 1] != null && (out[jj2 + 1].t === "?" || out[jj2 + 1].t === "t" && out[jj2 + 1].v === "/") || out[i].t === "(" && (c === " " || c === "n" || c === ")") || c === "t" && (out[jj2].v === "/" || out[jj2].v === " " && out[jj2 + 1] != null && out[jj2 + 1].t == "?"))) {
          out[i].v += out[jj2].v;
          out[jj2] = { v: "", t: ";" };
          ++jj2;
        }
        nstr += out[i].v;
        i = jj2 - 1;
        break;
      case "G":
        out[i].t = "t";
        out[i].v = SSF_general(v2, opts);
        break;
    }
  }
  var vv = "", myv, ostr;
  if (nstr.length > 0) {
    if (nstr.charCodeAt(0) == 40) {
      myv = v2 < 0 && nstr.charCodeAt(0) === 45 ? -v2 : v2;
      ostr = write_num("n", nstr, myv);
    } else {
      myv = v2 < 0 && flen > 1 ? -v2 : v2;
      ostr = write_num("n", nstr, myv);
      if (myv < 0 && out[0] && out[0].t == "t") {
        ostr = ostr.substr(1);
        out[0].v = "-" + out[0].v;
      }
    }
    jj2 = ostr.length - 1;
    var decpt = out.length;
    for (i = 0; i < out.length; ++i) if (out[i] != null && out[i].t != "t" && out[i].v.indexOf(".") > -1) {
      decpt = i;
      break;
    }
    var lasti = out.length;
    if (decpt === out.length && ostr.indexOf("E") === -1) {
      for (i = out.length - 1; i >= 0; --i) {
        if (out[i] == null || "n?".indexOf(out[i].t) === -1) continue;
        if (jj2 >= out[i].v.length - 1) {
          jj2 -= out[i].v.length;
          out[i].v = ostr.substr(jj2 + 1, out[i].v.length);
        } else if (jj2 < 0) out[i].v = "";
        else {
          out[i].v = ostr.substr(0, jj2 + 1);
          jj2 = -1;
        }
        out[i].t = "t";
        lasti = i;
      }
      if (jj2 >= 0 && lasti < out.length) out[lasti].v = ostr.substr(0, jj2 + 1) + out[lasti].v;
    } else if (decpt !== out.length && ostr.indexOf("E") === -1) {
      jj2 = ostr.indexOf(".") - 1;
      for (i = decpt; i >= 0; --i) {
        if (out[i] == null || "n?".indexOf(out[i].t) === -1) continue;
        j = out[i].v.indexOf(".") > -1 && i === decpt ? out[i].v.indexOf(".") - 1 : out[i].v.length - 1;
        vv = out[i].v.substr(j + 1);
        for (; j >= 0; --j) {
          if (jj2 >= 0 && (out[i].v.charAt(j) === "0" || out[i].v.charAt(j) === "#")) vv = ostr.charAt(jj2--) + vv;
        }
        out[i].v = vv;
        out[i].t = "t";
        lasti = i;
      }
      if (jj2 >= 0 && lasti < out.length) out[lasti].v = ostr.substr(0, jj2 + 1) + out[lasti].v;
      jj2 = ostr.indexOf(".") + 1;
      for (i = decpt; i < out.length; ++i) {
        if (out[i] == null || "n?(".indexOf(out[i].t) === -1 && i !== decpt) continue;
        j = out[i].v.indexOf(".") > -1 && i === decpt ? out[i].v.indexOf(".") + 1 : 0;
        vv = out[i].v.substr(0, j);
        for (; j < out[i].v.length; ++j) {
          if (jj2 < ostr.length) vv += ostr.charAt(jj2++);
        }
        out[i].v = vv;
        out[i].t = "t";
        lasti = i;
      }
    }
  }
  for (i = 0; i < out.length; ++i) if (out[i] != null && "n?".indexOf(out[i].t) > -1) {
    myv = flen > 1 && v2 < 0 && i > 0 && out[i - 1].v === "-" ? -v2 : v2;
    out[i].v = write_num(out[i].t, out[i].v, myv);
    out[i].t = "t";
  }
  var retval = "";
  for (i = 0; i !== out.length; ++i) if (out[i] != null) retval += out[i].v;
  return retval;
}
var cfregex2 = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function chkcond(v2, rr) {
  if (rr == null) return false;
  var thresh = parseFloat(rr[2]);
  switch (rr[1]) {
    case "=":
      if (v2 == thresh) return true;
      break;
    case ">":
      if (v2 > thresh) return true;
      break;
    case "<":
      if (v2 < thresh) return true;
      break;
    case "<>":
      if (v2 != thresh) return true;
      break;
    case ">=":
      if (v2 >= thresh) return true;
      break;
    case "<=":
      if (v2 <= thresh) return true;
      break;
  }
  return false;
}
function choose_fmt(f2, v2) {
  var fmt = SSF_split_fmt(f2);
  var l2 = fmt.length, lat = fmt[l2 - 1].indexOf("@");
  if (l2 < 4 && lat > -1) --l2;
  if (fmt.length > 4) throw new Error("cannot find right format for |" + fmt.join("|") + "|");
  if (typeof v2 !== "number") return [4, fmt.length === 4 || lat > -1 ? fmt[fmt.length - 1] : "@"];
  switch (fmt.length) {
    case 1:
      fmt = lat > -1 ? ["General", "General", "General", fmt[0]] : [fmt[0], fmt[0], fmt[0], "@"];
      break;
    case 2:
      fmt = lat > -1 ? [fmt[0], fmt[0], fmt[0], fmt[1]] : [fmt[0], fmt[1], fmt[0], "@"];
      break;
    case 3:
      fmt = lat > -1 ? [fmt[0], fmt[1], fmt[0], fmt[2]] : [fmt[0], fmt[1], fmt[2], "@"];
      break;
  }
  var ff2 = v2 > 0 ? fmt[0] : v2 < 0 ? fmt[1] : fmt[2];
  if (fmt[0].indexOf("[") === -1 && fmt[1].indexOf("[") === -1) return [l2, ff2];
  if (fmt[0].match(/\[[=<>]/) != null || fmt[1].match(/\[[=<>]/) != null) {
    var m1 = fmt[0].match(cfregex2);
    var m2 = fmt[1].match(cfregex2);
    return chkcond(v2, m1) ? [l2, fmt[0]] : chkcond(v2, m2) ? [l2, fmt[1]] : [l2, fmt[m1 != null && m2 != null ? 2 : 1]];
  }
  return [l2, ff2];
}
function SSF_format(fmt, v2, o) {
  if (o == null) o = {};
  var sfmt = "";
  switch (typeof fmt) {
    case "string":
      if (fmt == "m/d/yy" && o.dateNF) sfmt = o.dateNF;
      else sfmt = fmt;
      break;
    case "number":
      if (fmt == 14 && o.dateNF) sfmt = o.dateNF;
      else sfmt = (o.table != null ? o.table : table_fmt)[fmt];
      if (sfmt == null) sfmt = o.table && o.table[SSF_default_map[fmt]] || table_fmt[SSF_default_map[fmt]];
      if (sfmt == null) sfmt = SSF_default_str[fmt] || "General";
      break;
  }
  if (SSF_isgeneral(sfmt, 0)) return SSF_general(v2, o);
  if (v2 instanceof Date) v2 = datenum_local(v2, o.date1904);
  var f2 = choose_fmt(sfmt, v2);
  if (SSF_isgeneral(f2[1])) return SSF_general(v2, o);
  if (v2 === true) v2 = "TRUE";
  else if (v2 === false) v2 = "FALSE";
  else if (v2 === "" || v2 == null) return "";
  return eval_fmt(f2[1], v2, o, f2[0]);
}
function SSF_load(fmt, idx) {
  if (typeof idx != "number") {
    idx = +idx || -1;
    for (var i = 0; i < 392; ++i) {
      if (table_fmt[i] == void 0) {
        if (idx < 0) idx = i;
        continue;
      }
      if (table_fmt[i] == fmt) {
        idx = i;
        break;
      }
    }
    if (idx < 0) idx = 391;
  }
  table_fmt[idx] = fmt;
  return idx;
}
function make_ssf() {
  table_fmt = SSF_init_table();
}
var SSFImplicit = {
  "5": '"$"#,##0_);\\("$"#,##0\\)',
  "6": '"$"#,##0_);[Red]\\("$"#,##0\\)',
  "7": '"$"#,##0.00_);\\("$"#,##0.00\\)',
  "8": '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  "23": "General",
  "24": "General",
  "25": "General",
  "26": "General",
  "27": "m/d/yy",
  "28": "m/d/yy",
  "29": "m/d/yy",
  "30": "m/d/yy",
  "31": "m/d/yy",
  "32": "h:mm:ss",
  "33": "h:mm:ss",
  "34": "h:mm:ss",
  "35": "h:mm:ss",
  "36": "m/d/yy",
  "41": '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
  "42": '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
  "43": '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
  "44": '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
  "50": "m/d/yy",
  "51": "m/d/yy",
  "52": "m/d/yy",
  "53": "m/d/yy",
  "54": "m/d/yy",
  "55": "m/d/yy",
  "56": "m/d/yy",
  "57": "m/d/yy",
  "58": "m/d/yy",
  "59": "0",
  "60": "0.00",
  "61": "#,##0",
  "62": "#,##0.00",
  "63": '"$"#,##0_);\\("$"#,##0\\)',
  "64": '"$"#,##0_);[Red]\\("$"#,##0\\)',
  "65": '"$"#,##0.00_);\\("$"#,##0.00\\)',
  "66": '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  "67": "0%",
  "68": "0.00%",
  "69": "# ?/?",
  "70": "# ??/??",
  "71": "m/d/yy",
  "72": "m/d/yy",
  "73": "d-mmm-yy",
  "74": "d-mmm",
  "75": "mmm-yy",
  "76": "h:mm",
  "77": "h:mm:ss",
  "78": "m/d/yy h:mm",
  "79": "mm:ss",
  "80": "[h]:mm:ss",
  "81": "mmss.0"
};
var dateNFregex = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function dateNF_regex(dateNF) {
  var fmt = typeof dateNF == "number" ? table_fmt[dateNF] : dateNF;
  fmt = fmt.replace(dateNFregex, "(\\d+)");
  return new RegExp("^" + fmt + "$");
}
function dateNF_fix(str, dateNF, match) {
  var Y2 = -1, m2 = -1, d = -1, H2 = -1, M2 = -1, S2 = -1;
  (dateNF.match(dateNFregex) || []).forEach(function(n2, i) {
    var v2 = parseInt(match[i + 1], 10);
    switch (n2.toLowerCase().charAt(0)) {
      case "y":
        Y2 = v2;
        break;
      case "d":
        d = v2;
        break;
      case "h":
        H2 = v2;
        break;
      case "s":
        S2 = v2;
        break;
      case "m":
        if (H2 >= 0) M2 = v2;
        else m2 = v2;
        break;
    }
  });
  if (S2 >= 0 && M2 == -1 && m2 >= 0) {
    M2 = m2;
    m2 = -1;
  }
  var datestr = ("" + (Y2 >= 0 ? Y2 : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (m2 >= 1 ? m2 : 1)).slice(-2) + "-" + ("00" + (d >= 1 ? d : 1)).slice(-2);
  if (datestr.length == 7) datestr = "0" + datestr;
  if (datestr.length == 8) datestr = "20" + datestr;
  var timestr = ("00" + (H2 >= 0 ? H2 : 0)).slice(-2) + ":" + ("00" + (M2 >= 0 ? M2 : 0)).slice(-2) + ":" + ("00" + (S2 >= 0 ? S2 : 0)).slice(-2);
  if (H2 == -1 && M2 == -1 && S2 == -1) return datestr;
  if (Y2 == -1 && m2 == -1 && d == -1) return timestr;
  return datestr + "T" + timestr;
}
var CRC32 = /* @__PURE__ */ function() {
  var CRC322 = {};
  CRC322.version = "1.2.0";
  function signed_crc_table() {
    var c = 0, table = new Array(256);
    for (var n2 = 0; n2 != 256; ++n2) {
      c = n2;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
      table[n2] = c;
    }
    return typeof Int32Array !== "undefined" ? new Int32Array(table) : table;
  }
  var T0 = signed_crc_table();
  function slice_by_16_tables(T10) {
    var c = 0, v2 = 0, n2 = 0, table = typeof Int32Array !== "undefined" ? new Int32Array(4096) : new Array(4096);
    for (n2 = 0; n2 != 256; ++n2) table[n2] = T10[n2];
    for (n2 = 0; n2 != 256; ++n2) {
      v2 = T10[n2];
      for (c = 256 + n2; c < 4096; c += 256) v2 = table[c] = v2 >>> 8 ^ T10[v2 & 255];
    }
    var out = [];
    for (n2 = 1; n2 != 16; ++n2) out[n2 - 1] = typeof Int32Array !== "undefined" ? table.subarray(n2 * 256, n2 * 256 + 256) : table.slice(n2 * 256, n2 * 256 + 256);
    return out;
  }
  var TT = slice_by_16_tables(T0);
  var T1 = TT[0], T2 = TT[1], T3 = TT[2], T4 = TT[3], T5 = TT[4];
  var T6 = TT[5], T7 = TT[6], T8 = TT[7], T9 = TT[8], Ta2 = TT[9];
  var Tb2 = TT[10], Tc2 = TT[11], Td2 = TT[12], Te2 = TT[13], Tf2 = TT[14];
  function crc32_bstr(bstr, seed) {
    var C2 = seed ^ -1;
    for (var i = 0, L2 = bstr.length; i < L2; ) C2 = C2 >>> 8 ^ T0[(C2 ^ bstr.charCodeAt(i++)) & 255];
    return ~C2;
  }
  function crc32_buf(B2, seed) {
    var C2 = seed ^ -1, L2 = B2.length - 15, i = 0;
    for (; i < L2; ) C2 = Tf2[B2[i++] ^ C2 & 255] ^ Te2[B2[i++] ^ C2 >> 8 & 255] ^ Td2[B2[i++] ^ C2 >> 16 & 255] ^ Tc2[B2[i++] ^ C2 >>> 24] ^ Tb2[B2[i++]] ^ Ta2[B2[i++]] ^ T9[B2[i++]] ^ T8[B2[i++]] ^ T7[B2[i++]] ^ T6[B2[i++]] ^ T5[B2[i++]] ^ T4[B2[i++]] ^ T3[B2[i++]] ^ T2[B2[i++]] ^ T1[B2[i++]] ^ T0[B2[i++]];
    L2 += 15;
    while (i < L2) C2 = C2 >>> 8 ^ T0[(C2 ^ B2[i++]) & 255];
    return ~C2;
  }
  function crc32_str(str, seed) {
    var C2 = seed ^ -1;
    for (var i = 0, L2 = str.length, c = 0, d = 0; i < L2; ) {
      c = str.charCodeAt(i++);
      if (c < 128) {
        C2 = C2 >>> 8 ^ T0[(C2 ^ c) & 255];
      } else if (c < 2048) {
        C2 = C2 >>> 8 ^ T0[(C2 ^ (192 | c >> 6 & 31)) & 255];
        C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | c & 63)) & 255];
      } else if (c >= 55296 && c < 57344) {
        c = (c & 1023) + 64;
        d = str.charCodeAt(i++) & 1023;
        C2 = C2 >>> 8 ^ T0[(C2 ^ (240 | c >> 8 & 7)) & 255];
        C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | c >> 2 & 63)) & 255];
        C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 255];
        C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | d & 63)) & 255];
      } else {
        C2 = C2 >>> 8 ^ T0[(C2 ^ (224 | c >> 12 & 15)) & 255];
        C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | c >> 6 & 63)) & 255];
        C2 = C2 >>> 8 ^ T0[(C2 ^ (128 | c & 63)) & 255];
      }
    }
    return ~C2;
  }
  CRC322.table = T0;
  CRC322.bstr = crc32_bstr;
  CRC322.buf = crc32_buf;
  CRC322.str = crc32_str;
  return CRC322;
}();
var CFB = /* @__PURE__ */ function _CFB() {
  var exports = {};
  exports.version = "1.2.1";
  function namecmp(l2, r2) {
    var L2 = l2.split("/"), R2 = r2.split("/");
    for (var i2 = 0, c = 0, Z2 = Math.min(L2.length, R2.length); i2 < Z2; ++i2) {
      if (c = L2[i2].length - R2[i2].length) return c;
      if (L2[i2] != R2[i2]) return L2[i2] < R2[i2] ? -1 : 1;
    }
    return L2.length - R2.length;
  }
  function dirname(p2) {
    if (p2.charAt(p2.length - 1) == "/") return p2.slice(0, -1).indexOf("/") === -1 ? p2 : dirname(p2.slice(0, -1));
    var c = p2.lastIndexOf("/");
    return c === -1 ? p2 : p2.slice(0, c + 1);
  }
  function filename(p2) {
    if (p2.charAt(p2.length - 1) == "/") return filename(p2.slice(0, -1));
    var c = p2.lastIndexOf("/");
    return c === -1 ? p2 : p2.slice(c + 1);
  }
  function write_dos_date(buf, date) {
    if (typeof date === "string") date = new Date(date);
    var hms = date.getHours();
    hms = hms << 6 | date.getMinutes();
    hms = hms << 5 | date.getSeconds() >>> 1;
    buf.write_shift(2, hms);
    var ymd = date.getFullYear() - 1980;
    ymd = ymd << 4 | date.getMonth() + 1;
    ymd = ymd << 5 | date.getDate();
    buf.write_shift(2, ymd);
  }
  function parse_dos_date(buf) {
    var hms = buf.read_shift(2) & 65535;
    var ymd = buf.read_shift(2) & 65535;
    var val = /* @__PURE__ */ new Date();
    var d = ymd & 31;
    ymd >>>= 5;
    var m2 = ymd & 15;
    ymd >>>= 4;
    val.setMilliseconds(0);
    val.setFullYear(ymd + 1980);
    val.setMonth(m2 - 1);
    val.setDate(d);
    var S2 = hms & 31;
    hms >>>= 5;
    var M2 = hms & 63;
    hms >>>= 6;
    val.setHours(hms);
    val.setMinutes(M2);
    val.setSeconds(S2 << 1);
    return val;
  }
  function parse_extra_field(blob) {
    prep_blob(blob, 0);
    var o = (
      /*::(*/
      {}
    );
    var flags = 0;
    while (blob.l <= blob.length - 4) {
      var type = blob.read_shift(2);
      var sz = blob.read_shift(2), tgt = blob.l + sz;
      var p2 = {};
      switch (type) {
        case 21589:
          {
            flags = blob.read_shift(1);
            if (flags & 1) p2.mtime = blob.read_shift(4);
            if (sz > 5) {
              if (flags & 2) p2.atime = blob.read_shift(4);
              if (flags & 4) p2.ctime = blob.read_shift(4);
            }
            if (p2.mtime) p2.mt = new Date(p2.mtime * 1e3);
          }
          break;
      }
      blob.l = tgt;
      o[type] = p2;
    }
    return o;
  }
  var fs;
  function get_fs() {
    return fs || (fs = {});
  }
  function parse(file, options) {
    if (file[0] == 80 && file[1] == 75) return parse_zip2(file, options);
    if ((file[0] | 32) == 109 && (file[1] | 32) == 105) return parse_mad(file, options);
    if (file.length < 512) throw new Error("CFB file size " + file.length + " < 512");
    var mver = 3;
    var ssz = 512;
    var nmfs = 0;
    var difat_sec_cnt = 0;
    var dir_start = 0;
    var minifat_start = 0;
    var difat_start = 0;
    var fat_addrs = [];
    var blob = (
      /*::(*/
      file.slice(0, 512)
    );
    prep_blob(blob, 0);
    var mv = check_get_mver(blob);
    mver = mv[0];
    switch (mver) {
      case 3:
        ssz = 512;
        break;
      case 4:
        ssz = 4096;
        break;
      case 0:
        if (mv[1] == 0) return parse_zip2(file, options);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + mver);
    }
    if (ssz !== 512) {
      blob = /*::(*/
      file.slice(0, ssz);
      prep_blob(
        blob,
        28
        /* blob.l */
      );
    }
    var header = file.slice(0, ssz);
    check_shifts(blob, mver);
    var dir_cnt = blob.read_shift(4, "i");
    if (mver === 3 && dir_cnt !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + dir_cnt);
    blob.l += 4;
    dir_start = blob.read_shift(4, "i");
    blob.l += 4;
    blob.chk("00100000", "Mini Stream Cutoff Size: ");
    minifat_start = blob.read_shift(4, "i");
    nmfs = blob.read_shift(4, "i");
    difat_start = blob.read_shift(4, "i");
    difat_sec_cnt = blob.read_shift(4, "i");
    for (var q3 = -1, j = 0; j < 109; ++j) {
      q3 = blob.read_shift(4, "i");
      if (q3 < 0) break;
      fat_addrs[j] = q3;
    }
    var sectors = sectorify(file, ssz);
    sleuth_fat(difat_start, difat_sec_cnt, sectors, ssz, fat_addrs);
    var sector_list = make_sector_list(sectors, dir_start, fat_addrs, ssz);
    sector_list[dir_start].name = "!Directory";
    if (nmfs > 0 && minifat_start !== ENDOFCHAIN) sector_list[minifat_start].name = "!MiniFAT";
    sector_list[fat_addrs[0]].name = "!FAT";
    sector_list.fat_addrs = fat_addrs;
    sector_list.ssz = ssz;
    var files = {}, Paths = [], FileIndex = [], FullPaths = [];
    read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, minifat_start);
    build_full_paths(FileIndex, FullPaths, Paths);
    Paths.shift();
    var o = {
      FileIndex,
      FullPaths
    };
    if (options && options.raw) o.raw = { header, sectors };
    return o;
  }
  function check_get_mver(blob) {
    if (blob[blob.l] == 80 && blob[blob.l + 1] == 75) return [0, 0];
    blob.chk(HEADER_SIGNATURE, "Header Signature: ");
    blob.l += 16;
    var mver = blob.read_shift(2, "u");
    return [blob.read_shift(2, "u"), mver];
  }
  function check_shifts(blob, mver) {
    var shift = 9;
    blob.l += 2;
    switch (shift = blob.read_shift(2)) {
      case 9:
        if (mver != 3) throw new Error("Sector Shift: Expected 9 saw " + shift);
        break;
      case 12:
        if (mver != 4) throw new Error("Sector Shift: Expected 12 saw " + shift);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + shift);
    }
    blob.chk("0600", "Mini Sector Shift: ");
    blob.chk("000000000000", "Reserved: ");
  }
  function sectorify(file, ssz) {
    var nsectors = Math.ceil(file.length / ssz) - 1;
    var sectors = [];
    for (var i2 = 1; i2 < nsectors; ++i2) sectors[i2 - 1] = file.slice(i2 * ssz, (i2 + 1) * ssz);
    sectors[nsectors - 1] = file.slice(nsectors * ssz);
    return sectors;
  }
  function build_full_paths(FI, FP, Paths) {
    var i2 = 0, L2 = 0, R2 = 0, C2 = 0, j = 0, pl2 = Paths.length;
    var dad = [], q3 = [];
    for (; i2 < pl2; ++i2) {
      dad[i2] = q3[i2] = i2;
      FP[i2] = Paths[i2];
    }
    for (; j < q3.length; ++j) {
      i2 = q3[j];
      L2 = FI[i2].L;
      R2 = FI[i2].R;
      C2 = FI[i2].C;
      if (dad[i2] === i2) {
        if (L2 !== -1 && dad[L2] !== L2) dad[i2] = dad[L2];
        if (R2 !== -1 && dad[R2] !== R2) dad[i2] = dad[R2];
      }
      if (C2 !== -1) dad[C2] = i2;
      if (L2 !== -1 && i2 != dad[i2]) {
        dad[L2] = dad[i2];
        if (q3.lastIndexOf(L2) < j) q3.push(L2);
      }
      if (R2 !== -1 && i2 != dad[i2]) {
        dad[R2] = dad[i2];
        if (q3.lastIndexOf(R2) < j) q3.push(R2);
      }
    }
    for (i2 = 1; i2 < pl2; ++i2) if (dad[i2] === i2) {
      if (R2 !== -1 && dad[R2] !== R2) dad[i2] = dad[R2];
      else if (L2 !== -1 && dad[L2] !== L2) dad[i2] = dad[L2];
    }
    for (i2 = 1; i2 < pl2; ++i2) {
      if (FI[i2].type === 0) continue;
      j = i2;
      if (j != dad[j]) do {
        j = dad[j];
        FP[i2] = FP[j] + "/" + FP[i2];
      } while (j !== 0 && -1 !== dad[j] && j != dad[j]);
      dad[i2] = -1;
    }
    FP[0] += "/";
    for (i2 = 1; i2 < pl2; ++i2) {
      if (FI[i2].type !== 2) FP[i2] += "/";
    }
  }
  function get_mfat_entry(entry, payload, mini) {
    var start = entry.start, size = entry.size;
    var o = [];
    var idx = start;
    while (mini && size > 0 && idx >= 0) {
      o.push(payload.slice(idx * MSSZ, idx * MSSZ + MSSZ));
      size -= MSSZ;
      idx = __readInt32LE(mini, idx * 4);
    }
    if (o.length === 0) return new_buf(0);
    return bconcat(o).slice(0, entry.size);
  }
  function sleuth_fat(idx, cnt, sectors, ssz, fat_addrs) {
    var q3 = ENDOFCHAIN;
    if (idx === ENDOFCHAIN) {
      if (cnt !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (idx !== -1) {
      var sector = sectors[idx], m2 = (ssz >>> 2) - 1;
      if (!sector) return;
      for (var i2 = 0; i2 < m2; ++i2) {
        if ((q3 = __readInt32LE(sector, i2 * 4)) === ENDOFCHAIN) break;
        fat_addrs.push(q3);
      }
      sleuth_fat(__readInt32LE(sector, ssz - 4), cnt - 1, sectors, ssz, fat_addrs);
    }
  }
  function get_sector_list(sectors, start, fat_addrs, ssz, chkd) {
    var buf = [], buf_chain = [];
    if (!chkd) chkd = [];
    var modulus = ssz - 1, j = 0, jj2 = 0;
    for (j = start; j >= 0; ) {
      chkd[j] = true;
      buf[buf.length] = j;
      buf_chain.push(sectors[j]);
      var addr = fat_addrs[Math.floor(j * 4 / ssz)];
      jj2 = j * 4 & modulus;
      if (ssz < 4 + jj2) throw new Error("FAT boundary crossed: " + j + " 4 " + ssz);
      if (!sectors[addr]) break;
      j = __readInt32LE(sectors[addr], jj2);
    }
    return { nodes: buf, data: __toBuffer([buf_chain]) };
  }
  function make_sector_list(sectors, dir_start, fat_addrs, ssz) {
    var sl2 = sectors.length, sector_list = [];
    var chkd = [], buf = [], buf_chain = [];
    var modulus = ssz - 1, i2 = 0, j = 0, k2 = 0, jj2 = 0;
    for (i2 = 0; i2 < sl2; ++i2) {
      buf = [];
      k2 = i2 + dir_start;
      if (k2 >= sl2) k2 -= sl2;
      if (chkd[k2]) continue;
      buf_chain = [];
      var seen = [];
      for (j = k2; j >= 0; ) {
        seen[j] = true;
        chkd[j] = true;
        buf[buf.length] = j;
        buf_chain.push(sectors[j]);
        var addr = fat_addrs[Math.floor(j * 4 / ssz)];
        jj2 = j * 4 & modulus;
        if (ssz < 4 + jj2) throw new Error("FAT boundary crossed: " + j + " 4 " + ssz);
        if (!sectors[addr]) break;
        j = __readInt32LE(sectors[addr], jj2);
        if (seen[j]) break;
      }
      sector_list[k2] = { nodes: buf, data: __toBuffer([buf_chain]) };
    }
    return sector_list;
  }
  function read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex, mini) {
    var minifat_store = 0, pl2 = Paths.length ? 2 : 0;
    var sector = sector_list[dir_start].data;
    var i2 = 0, namelen = 0, name;
    for (; i2 < sector.length; i2 += 128) {
      var blob = (
        /*::(*/
        sector.slice(i2, i2 + 128)
      );
      prep_blob(blob, 64);
      namelen = blob.read_shift(2);
      name = __utf16le(blob, 0, namelen - pl2);
      Paths.push(name);
      var o = {
        name,
        type: blob.read_shift(1),
        color: blob.read_shift(1),
        L: blob.read_shift(4, "i"),
        R: blob.read_shift(4, "i"),
        C: blob.read_shift(4, "i"),
        clsid: blob.read_shift(16),
        state: blob.read_shift(4, "i"),
        start: 0,
        size: 0
      };
      var ctime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
      if (ctime !== 0) o.ct = read_date(blob, blob.l - 8);
      var mtime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
      if (mtime !== 0) o.mt = read_date(blob, blob.l - 8);
      o.start = blob.read_shift(4, "i");
      o.size = blob.read_shift(4, "i");
      if (o.size < 0 && o.start < 0) {
        o.size = o.type = 0;
        o.start = ENDOFCHAIN;
        o.name = "";
      }
      if (o.type === 5) {
        minifat_store = o.start;
        if (nmfs > 0 && minifat_store !== ENDOFCHAIN) sector_list[minifat_store].name = "!StreamData";
      } else if (o.size >= 4096) {
        o.storage = "fat";
        if (sector_list[o.start] === void 0) sector_list[o.start] = get_sector_list(sectors, o.start, sector_list.fat_addrs, sector_list.ssz);
        sector_list[o.start].name = o.name;
        o.content = sector_list[o.start].data.slice(0, o.size);
      } else {
        o.storage = "minifat";
        if (o.size < 0) o.size = 0;
        else if (minifat_store !== ENDOFCHAIN && o.start !== ENDOFCHAIN && sector_list[minifat_store]) {
          o.content = get_mfat_entry(o, sector_list[minifat_store].data, (sector_list[mini] || {}).data);
        }
      }
      if (o.content) prep_blob(o.content, 0);
      files[name] = o;
      FileIndex.push(o);
    }
  }
  function read_date(blob, offset) {
    return new Date((__readUInt32LE(blob, offset + 4) / 1e7 * Math.pow(2, 32) + __readUInt32LE(blob, offset) / 1e7 - 11644473600) * 1e3);
  }
  function read_file(filename2, options) {
    get_fs();
    return parse(fs.readFileSync(filename2), options);
  }
  function read(blob, options) {
    var type = options && options.type;
    if (!type) {
      if (has_buf && Buffer.isBuffer(blob)) type = "buffer";
    }
    switch (type || "base64") {
      case "file":
        return read_file(blob, options);
      case "base64":
        return parse(s2a(Base64_decode(blob)), options);
      case "binary":
        return parse(s2a(blob), options);
    }
    return parse(
      /*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */
      blob,
      options
    );
  }
  function init_cfb(cfb, opts) {
    var o = opts || {}, root = o.root || "Root Entry";
    if (!cfb.FullPaths) cfb.FullPaths = [];
    if (!cfb.FileIndex) cfb.FileIndex = [];
    if (cfb.FullPaths.length !== cfb.FileIndex.length) throw new Error("inconsistent CFB structure");
    if (cfb.FullPaths.length === 0) {
      cfb.FullPaths[0] = root + "/";
      cfb.FileIndex[0] = { name: root, type: 5 };
    }
    if (o.CLSID) cfb.FileIndex[0].clsid = o.CLSID;
    seed_cfb(cfb);
  }
  function seed_cfb(cfb) {
    var nm = "Sh33tJ5";
    if (CFB.find(cfb, "/" + nm)) return;
    var p2 = new_buf(4);
    p2[0] = 55;
    p2[1] = p2[3] = 50;
    p2[2] = 54;
    cfb.FileIndex.push({ name: nm, type: 2, content: p2, size: 4, L: 69, R: 69, C: 69 });
    cfb.FullPaths.push(cfb.FullPaths[0] + nm);
    rebuild_cfb(cfb);
  }
  function rebuild_cfb(cfb, f2) {
    init_cfb(cfb);
    var gc2 = false, s = false;
    for (var i2 = cfb.FullPaths.length - 1; i2 >= 0; --i2) {
      var _file = cfb.FileIndex[i2];
      switch (_file.type) {
        case 0:
          if (s) gc2 = true;
          else {
            cfb.FileIndex.pop();
            cfb.FullPaths.pop();
          }
          break;
        case 1:
        case 2:
        case 5:
          s = true;
          if (isNaN(_file.R * _file.L * _file.C)) gc2 = true;
          if (_file.R > -1 && _file.L > -1 && _file.R == _file.L) gc2 = true;
          break;
        default:
          gc2 = true;
          break;
      }
    }
    if (!gc2 && !f2) return;
    var now = new Date(1987, 1, 19), j = 0;
    var fullPaths = Object.create ? /* @__PURE__ */ Object.create(null) : {};
    var data = [];
    for (i2 = 0; i2 < cfb.FullPaths.length; ++i2) {
      fullPaths[cfb.FullPaths[i2]] = true;
      if (cfb.FileIndex[i2].type === 0) continue;
      data.push([cfb.FullPaths[i2], cfb.FileIndex[i2]]);
    }
    for (i2 = 0; i2 < data.length; ++i2) {
      var dad = dirname(data[i2][0]);
      s = fullPaths[dad];
      if (!s) {
        data.push([dad, {
          name: filename(dad).replace("/", ""),
          type: 1,
          clsid: HEADER_CLSID,
          ct: now,
          mt: now,
          content: null
        }]);
        fullPaths[dad] = true;
      }
    }
    data.sort(function(x2, y2) {
      return namecmp(x2[0], y2[0]);
    });
    cfb.FullPaths = [];
    cfb.FileIndex = [];
    for (i2 = 0; i2 < data.length; ++i2) {
      cfb.FullPaths[i2] = data[i2][0];
      cfb.FileIndex[i2] = data[i2][1];
    }
    for (i2 = 0; i2 < data.length; ++i2) {
      var elt = cfb.FileIndex[i2];
      var nm = cfb.FullPaths[i2];
      elt.name = filename(nm).replace("/", "");
      elt.L = elt.R = elt.C = -(elt.color = 1);
      elt.size = elt.content ? elt.content.length : 0;
      elt.start = 0;
      elt.clsid = elt.clsid || HEADER_CLSID;
      if (i2 === 0) {
        elt.C = data.length > 1 ? 1 : -1;
        elt.size = 0;
        elt.type = 5;
      } else if (nm.slice(-1) == "/") {
        for (j = i2 + 1; j < data.length; ++j) if (dirname(cfb.FullPaths[j]) == nm) break;
        elt.C = j >= data.length ? -1 : j;
        for (j = i2 + 1; j < data.length; ++j) if (dirname(cfb.FullPaths[j]) == dirname(nm)) break;
        elt.R = j >= data.length ? -1 : j;
        elt.type = 1;
      } else {
        if (dirname(cfb.FullPaths[i2 + 1] || "") == dirname(nm)) elt.R = i2 + 1;
        elt.type = 2;
      }
    }
  }
  function _write(cfb, options) {
    var _opts = options || {};
    if (_opts.fileType == "mad") return write_mad(cfb, _opts);
    rebuild_cfb(cfb);
    switch (_opts.fileType) {
      case "zip":
        return write_zip(cfb, _opts);
    }
    var L2 = function(cfb2) {
      var mini_size = 0, fat_size = 0;
      for (var i3 = 0; i3 < cfb2.FileIndex.length; ++i3) {
        var file2 = cfb2.FileIndex[i3];
        if (!file2.content) continue;
        var flen2 = file2.content.length;
        if (flen2 > 0) {
          if (flen2 < 4096) mini_size += flen2 + 63 >> 6;
          else fat_size += flen2 + 511 >> 9;
        }
      }
      var dir_cnt = cfb2.FullPaths.length + 3 >> 2;
      var mini_cnt = mini_size + 7 >> 3;
      var mfat_cnt = mini_size + 127 >> 7;
      var fat_base = mini_cnt + fat_size + dir_cnt + mfat_cnt;
      var fat_cnt = fat_base + 127 >> 7;
      var difat_cnt = fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt - 109) / 127);
      while (fat_base + fat_cnt + difat_cnt + 127 >> 7 > fat_cnt) difat_cnt = ++fat_cnt <= 109 ? 0 : Math.ceil((fat_cnt - 109) / 127);
      var L3 = [1, difat_cnt, fat_cnt, mfat_cnt, dir_cnt, fat_size, mini_size, 0];
      cfb2.FileIndex[0].size = mini_size << 6;
      L3[7] = (cfb2.FileIndex[0].start = L3[0] + L3[1] + L3[2] + L3[3] + L3[4] + L3[5]) + (L3[6] + 7 >> 3);
      return L3;
    }(cfb);
    var o = new_buf(L2[7] << 9);
    var i2 = 0, T2 = 0;
    {
      for (i2 = 0; i2 < 8; ++i2) o.write_shift(1, HEADER_SIG[i2]);
      for (i2 = 0; i2 < 8; ++i2) o.write_shift(2, 0);
      o.write_shift(2, 62);
      o.write_shift(2, 3);
      o.write_shift(2, 65534);
      o.write_shift(2, 9);
      o.write_shift(2, 6);
      for (i2 = 0; i2 < 3; ++i2) o.write_shift(2, 0);
      o.write_shift(4, 0);
      o.write_shift(4, L2[2]);
      o.write_shift(4, L2[0] + L2[1] + L2[2] + L2[3] - 1);
      o.write_shift(4, 0);
      o.write_shift(4, 1 << 12);
      o.write_shift(4, L2[3] ? L2[0] + L2[1] + L2[2] - 1 : ENDOFCHAIN);
      o.write_shift(4, L2[3]);
      o.write_shift(-4, L2[1] ? L2[0] - 1 : ENDOFCHAIN);
      o.write_shift(4, L2[1]);
      for (i2 = 0; i2 < 109; ++i2) o.write_shift(-4, i2 < L2[2] ? L2[1] + i2 : -1);
    }
    if (L2[1]) {
      for (T2 = 0; T2 < L2[1]; ++T2) {
        for (; i2 < 236 + T2 * 127; ++i2) o.write_shift(-4, i2 < L2[2] ? L2[1] + i2 : -1);
        o.write_shift(-4, T2 === L2[1] - 1 ? ENDOFCHAIN : T2 + 1);
      }
    }
    var chainit = function(w2) {
      for (T2 += w2; i2 < T2 - 1; ++i2) o.write_shift(-4, i2 + 1);
      if (w2) {
        ++i2;
        o.write_shift(-4, ENDOFCHAIN);
      }
    };
    T2 = i2 = 0;
    for (T2 += L2[1]; i2 < T2; ++i2) o.write_shift(-4, consts.DIFSECT);
    for (T2 += L2[2]; i2 < T2; ++i2) o.write_shift(-4, consts.FATSECT);
    chainit(L2[3]);
    chainit(L2[4]);
    var j = 0, flen = 0;
    var file = cfb.FileIndex[0];
    for (; j < cfb.FileIndex.length; ++j) {
      file = cfb.FileIndex[j];
      if (!file.content) continue;
      flen = file.content.length;
      if (flen < 4096) continue;
      file.start = T2;
      chainit(flen + 511 >> 9);
    }
    chainit(L2[6] + 7 >> 3);
    while (o.l & 511) o.write_shift(-4, consts.ENDOFCHAIN);
    T2 = i2 = 0;
    for (j = 0; j < cfb.FileIndex.length; ++j) {
      file = cfb.FileIndex[j];
      if (!file.content) continue;
      flen = file.content.length;
      if (!flen || flen >= 4096) continue;
      file.start = T2;
      chainit(flen + 63 >> 6);
    }
    while (o.l & 511) o.write_shift(-4, consts.ENDOFCHAIN);
    for (i2 = 0; i2 < L2[4] << 2; ++i2) {
      var nm = cfb.FullPaths[i2];
      if (!nm || nm.length === 0) {
        for (j = 0; j < 17; ++j) o.write_shift(4, 0);
        for (j = 0; j < 3; ++j) o.write_shift(4, -1);
        for (j = 0; j < 12; ++j) o.write_shift(4, 0);
        continue;
      }
      file = cfb.FileIndex[i2];
      if (i2 === 0) file.start = file.size ? file.start - 1 : ENDOFCHAIN;
      var _nm = i2 === 0 && _opts.root || file.name;
      flen = 2 * (_nm.length + 1);
      o.write_shift(64, _nm, "utf16le");
      o.write_shift(2, flen);
      o.write_shift(1, file.type);
      o.write_shift(1, file.color);
      o.write_shift(-4, file.L);
      o.write_shift(-4, file.R);
      o.write_shift(-4, file.C);
      if (!file.clsid) for (j = 0; j < 4; ++j) o.write_shift(4, 0);
      else o.write_shift(16, file.clsid, "hex");
      o.write_shift(4, file.state || 0);
      o.write_shift(4, 0);
      o.write_shift(4, 0);
      o.write_shift(4, 0);
      o.write_shift(4, 0);
      o.write_shift(4, file.start);
      o.write_shift(4, file.size);
      o.write_shift(4, 0);
    }
    for (i2 = 1; i2 < cfb.FileIndex.length; ++i2) {
      file = cfb.FileIndex[i2];
      if (file.size >= 4096) {
        o.l = file.start + 1 << 9;
        if (has_buf && Buffer.isBuffer(file.content)) {
          file.content.copy(o, o.l, 0, file.size);
          o.l += file.size + 511 & -512;
        } else {
          for (j = 0; j < file.size; ++j) o.write_shift(1, file.content[j]);
          for (; j & 511; ++j) o.write_shift(1, 0);
        }
      }
    }
    for (i2 = 1; i2 < cfb.FileIndex.length; ++i2) {
      file = cfb.FileIndex[i2];
      if (file.size > 0 && file.size < 4096) {
        if (has_buf && Buffer.isBuffer(file.content)) {
          file.content.copy(o, o.l, 0, file.size);
          o.l += file.size + 63 & -64;
        } else {
          for (j = 0; j < file.size; ++j) o.write_shift(1, file.content[j]);
          for (; j & 63; ++j) o.write_shift(1, 0);
        }
      }
    }
    if (has_buf) {
      o.l = o.length;
    } else {
      while (o.l < o.length) o.write_shift(1, 0);
    }
    return o;
  }
  function find(cfb, path) {
    var UCFullPaths = cfb.FullPaths.map(function(x2) {
      return x2.toUpperCase();
    });
    var UCPaths = UCFullPaths.map(function(x2) {
      var y2 = x2.split("/");
      return y2[y2.length - (x2.slice(-1) == "/" ? 2 : 1)];
    });
    var k2 = false;
    if (path.charCodeAt(0) === 47) {
      k2 = true;
      path = UCFullPaths[0].slice(0, -1) + path;
    } else k2 = path.indexOf("/") !== -1;
    var UCPath = path.toUpperCase();
    var w2 = k2 === true ? UCFullPaths.indexOf(UCPath) : UCPaths.indexOf(UCPath);
    if (w2 !== -1) return cfb.FileIndex[w2];
    var m2 = !UCPath.match(chr1);
    UCPath = UCPath.replace(chr0, "");
    if (m2) UCPath = UCPath.replace(chr1, "!");
    for (w2 = 0; w2 < UCFullPaths.length; ++w2) {
      if ((m2 ? UCFullPaths[w2].replace(chr1, "!") : UCFullPaths[w2]).replace(chr0, "") == UCPath) return cfb.FileIndex[w2];
      if ((m2 ? UCPaths[w2].replace(chr1, "!") : UCPaths[w2]).replace(chr0, "") == UCPath) return cfb.FileIndex[w2];
    }
    return null;
  }
  var MSSZ = 64;
  var ENDOFCHAIN = -2;
  var HEADER_SIGNATURE = "d0cf11e0a1b11ae1";
  var HEADER_SIG = [208, 207, 17, 224, 161, 177, 26, 225];
  var HEADER_CLSID = "00000000000000000000000000000000";
  var consts = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function write_file(cfb, filename2, options) {
    get_fs();
    var o = _write(cfb, options);
    fs.writeFileSync(filename2, o);
  }
  function a2s2(o) {
    var out = new Array(o.length);
    for (var i2 = 0; i2 < o.length; ++i2) out[i2] = String.fromCharCode(o[i2]);
    return out.join("");
  }
  function write(cfb, options) {
    var o = _write(cfb, options);
    switch (options && options.type || "buffer") {
      case "file":
        get_fs();
        fs.writeFileSync(options.filename, o);
        return o;
      case "binary":
        return typeof o == "string" ? o : a2s2(o);
      case "base64":
        return Base64_encode(typeof o == "string" ? o : a2s2(o));
      case "buffer":
        if (has_buf) return Buffer.isBuffer(o) ? o : Buffer_from(o);
      case "array":
        return typeof o == "string" ? s2a(o) : o;
    }
    return o;
  }
  var _zlib;
  function use_zlib(zlib) {
    try {
      var InflateRaw = zlib.InflateRaw;
      var InflRaw = new InflateRaw();
      InflRaw._processChunk(new Uint8Array([3, 0]), InflRaw._finishFlushFlag);
      if (InflRaw.bytesRead) _zlib = zlib;
      else throw new Error("zlib does not expose bytesRead");
    } catch (e) {
      console.error("cannot use native zlib: " + (e.message || e));
    }
  }
  function _inflateRawSync(payload, usz) {
    if (!_zlib) return _inflate(payload, usz);
    var InflateRaw = _zlib.InflateRaw;
    var InflRaw = new InflateRaw();
    var out = InflRaw._processChunk(payload.slice(payload.l), InflRaw._finishFlushFlag);
    payload.l += InflRaw.bytesRead;
    return out;
  }
  function _deflateRawSync(payload) {
    return _zlib ? _zlib.deflateRawSync(payload) : _deflate(payload);
  }
  var CLEN_ORDER = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  var LEN_LN = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
  var DST_LN = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function bit_swap_8(n2) {
    var t2 = (n2 << 1 | n2 << 11) & 139536 | (n2 << 5 | n2 << 15) & 558144;
    return (t2 >> 16 | t2 >> 8 | t2) & 255;
  }
  var use_typed_arrays = typeof Uint8Array !== "undefined";
  var bitswap8 = use_typed_arrays ? new Uint8Array(1 << 8) : [];
  for (var q2 = 0; q2 < 1 << 8; ++q2) bitswap8[q2] = bit_swap_8(q2);
  function bit_swap_n(n2, b) {
    var rev = bitswap8[n2 & 255];
    if (b <= 8) return rev >>> 8 - b;
    rev = rev << 8 | bitswap8[n2 >> 8 & 255];
    if (b <= 16) return rev >>> 16 - b;
    rev = rev << 8 | bitswap8[n2 >> 16 & 255];
    return rev >>> 24 - b;
  }
  function read_bits_2(buf, bl2) {
    var w2 = bl2 & 7, h = bl2 >>> 3;
    return (buf[h] | (w2 <= 6 ? 0 : buf[h + 1] << 8)) >>> w2 & 3;
  }
  function read_bits_3(buf, bl2) {
    var w2 = bl2 & 7, h = bl2 >>> 3;
    return (buf[h] | (w2 <= 5 ? 0 : buf[h + 1] << 8)) >>> w2 & 7;
  }
  function read_bits_4(buf, bl2) {
    var w2 = bl2 & 7, h = bl2 >>> 3;
    return (buf[h] | (w2 <= 4 ? 0 : buf[h + 1] << 8)) >>> w2 & 15;
  }
  function read_bits_5(buf, bl2) {
    var w2 = bl2 & 7, h = bl2 >>> 3;
    return (buf[h] | (w2 <= 3 ? 0 : buf[h + 1] << 8)) >>> w2 & 31;
  }
  function read_bits_7(buf, bl2) {
    var w2 = bl2 & 7, h = bl2 >>> 3;
    return (buf[h] | (w2 <= 1 ? 0 : buf[h + 1] << 8)) >>> w2 & 127;
  }
  function read_bits_n(buf, bl2, n2) {
    var w2 = bl2 & 7, h = bl2 >>> 3, f2 = (1 << n2) - 1;
    var v2 = buf[h] >>> w2;
    if (n2 < 8 - w2) return v2 & f2;
    v2 |= buf[h + 1] << 8 - w2;
    if (n2 < 16 - w2) return v2 & f2;
    v2 |= buf[h + 2] << 16 - w2;
    if (n2 < 24 - w2) return v2 & f2;
    v2 |= buf[h + 3] << 24 - w2;
    return v2 & f2;
  }
  function write_bits_3(buf, bl2, v2) {
    var w2 = bl2 & 7, h = bl2 >>> 3;
    if (w2 <= 5) buf[h] |= (v2 & 7) << w2;
    else {
      buf[h] |= v2 << w2 & 255;
      buf[h + 1] = (v2 & 7) >> 8 - w2;
    }
    return bl2 + 3;
  }
  function write_bits_1(buf, bl2, v2) {
    var w2 = bl2 & 7, h = bl2 >>> 3;
    v2 = (v2 & 1) << w2;
    buf[h] |= v2;
    return bl2 + 1;
  }
  function write_bits_8(buf, bl2, v2) {
    var w2 = bl2 & 7, h = bl2 >>> 3;
    v2 <<= w2;
    buf[h] |= v2 & 255;
    v2 >>>= 8;
    buf[h + 1] = v2;
    return bl2 + 8;
  }
  function write_bits_16(buf, bl2, v2) {
    var w2 = bl2 & 7, h = bl2 >>> 3;
    v2 <<= w2;
    buf[h] |= v2 & 255;
    v2 >>>= 8;
    buf[h + 1] = v2 & 255;
    buf[h + 2] = v2 >>> 8;
    return bl2 + 16;
  }
  function realloc(b, sz) {
    var L2 = b.length, M2 = 2 * L2 > sz ? 2 * L2 : sz + 5, i2 = 0;
    if (L2 >= sz) return b;
    if (has_buf) {
      var o = new_unsafe_buf(M2);
      if (b.copy) b.copy(o);
      else for (; i2 < b.length; ++i2) o[i2] = b[i2];
      return o;
    } else if (use_typed_arrays) {
      var a = new Uint8Array(M2);
      if (a.set) a.set(b);
      else for (; i2 < L2; ++i2) a[i2] = b[i2];
      return a;
    }
    b.length = M2;
    return b;
  }
  function zero_fill_array(n2) {
    var o = new Array(n2);
    for (var i2 = 0; i2 < n2; ++i2) o[i2] = 0;
    return o;
  }
  function build_tree(clens, cmap, MAX) {
    var maxlen = 1, w2 = 0, i2 = 0, j = 0, ccode = 0, L2 = clens.length;
    var bl_count = use_typed_arrays ? new Uint16Array(32) : zero_fill_array(32);
    for (i2 = 0; i2 < 32; ++i2) bl_count[i2] = 0;
    for (i2 = L2; i2 < MAX; ++i2) clens[i2] = 0;
    L2 = clens.length;
    var ctree = use_typed_arrays ? new Uint16Array(L2) : zero_fill_array(L2);
    for (i2 = 0; i2 < L2; ++i2) {
      bl_count[w2 = clens[i2]]++;
      if (maxlen < w2) maxlen = w2;
      ctree[i2] = 0;
    }
    bl_count[0] = 0;
    for (i2 = 1; i2 <= maxlen; ++i2) bl_count[i2 + 16] = ccode = ccode + bl_count[i2 - 1] << 1;
    for (i2 = 0; i2 < L2; ++i2) {
      ccode = clens[i2];
      if (ccode != 0) ctree[i2] = bl_count[ccode + 16]++;
    }
    var cleni = 0;
    for (i2 = 0; i2 < L2; ++i2) {
      cleni = clens[i2];
      if (cleni != 0) {
        ccode = bit_swap_n(ctree[i2], maxlen) >> maxlen - cleni;
        for (j = (1 << maxlen + 4 - cleni) - 1; j >= 0; --j)
          cmap[ccode | j << cleni] = cleni & 15 | i2 << 4;
      }
    }
    return maxlen;
  }
  var fix_lmap = use_typed_arrays ? new Uint16Array(512) : zero_fill_array(512);
  var fix_dmap = use_typed_arrays ? new Uint16Array(32) : zero_fill_array(32);
  if (!use_typed_arrays) {
    for (var i = 0; i < 512; ++i) fix_lmap[i] = 0;
    for (i = 0; i < 32; ++i) fix_dmap[i] = 0;
  }
  (function() {
    var dlens = [];
    var i2 = 0;
    for (; i2 < 32; i2++) dlens.push(5);
    build_tree(dlens, fix_dmap, 32);
    var clens = [];
    i2 = 0;
    for (; i2 <= 143; i2++) clens.push(8);
    for (; i2 <= 255; i2++) clens.push(9);
    for (; i2 <= 279; i2++) clens.push(7);
    for (; i2 <= 287; i2++) clens.push(8);
    build_tree(clens, fix_lmap, 288);
  })();
  var _deflateRaw = /* @__PURE__ */ function _deflateRawIIFE() {
    var DST_LN_RE = use_typed_arrays ? new Uint8Array(32768) : [];
    var j = 0, k2 = 0;
    for (; j < DST_LN.length - 1; ++j) {
      for (; k2 < DST_LN[j + 1]; ++k2) DST_LN_RE[k2] = j;
    }
    for (; k2 < 32768; ++k2) DST_LN_RE[k2] = 29;
    var LEN_LN_RE = use_typed_arrays ? new Uint8Array(259) : [];
    for (j = 0, k2 = 0; j < LEN_LN.length - 1; ++j) {
      for (; k2 < LEN_LN[j + 1]; ++k2) LEN_LN_RE[k2] = j;
    }
    function write_stored(data, out) {
      var boff = 0;
      while (boff < data.length) {
        var L2 = Math.min(65535, data.length - boff);
        var h = boff + L2 == data.length;
        out.write_shift(1, +h);
        out.write_shift(2, L2);
        out.write_shift(2, ~L2 & 65535);
        while (L2-- > 0) out[out.l++] = data[boff++];
      }
      return out.l;
    }
    function write_huff_fixed(data, out) {
      var bl2 = 0;
      var boff = 0;
      var addrs = use_typed_arrays ? new Uint16Array(32768) : [];
      while (boff < data.length) {
        var L2 = (
          /* data.length - boff; */
          Math.min(65535, data.length - boff)
        );
        if (L2 < 10) {
          bl2 = write_bits_3(out, bl2, +!!(boff + L2 == data.length));
          if (bl2 & 7) bl2 += 8 - (bl2 & 7);
          out.l = bl2 / 8 | 0;
          out.write_shift(2, L2);
          out.write_shift(2, ~L2 & 65535);
          while (L2-- > 0) out[out.l++] = data[boff++];
          bl2 = out.l * 8;
          continue;
        }
        bl2 = write_bits_3(out, bl2, +!!(boff + L2 == data.length) + 2);
        var hash = 0;
        while (L2-- > 0) {
          var d = data[boff];
          hash = (hash << 5 ^ d) & 32767;
          var match = -1, mlen = 0;
          if (match = addrs[hash]) {
            match |= boff & ~32767;
            if (match > boff) match -= 32768;
            if (match < boff) while (data[match + mlen] == data[boff + mlen] && mlen < 250) ++mlen;
          }
          if (mlen > 2) {
            d = LEN_LN_RE[mlen];
            if (d <= 22) bl2 = write_bits_8(out, bl2, bitswap8[d + 1] >> 1) - 1;
            else {
              write_bits_8(out, bl2, 3);
              bl2 += 5;
              write_bits_8(out, bl2, bitswap8[d - 23] >> 5);
              bl2 += 3;
            }
            var len_eb = d < 8 ? 0 : d - 4 >> 2;
            if (len_eb > 0) {
              write_bits_16(out, bl2, mlen - LEN_LN[d]);
              bl2 += len_eb;
            }
            d = DST_LN_RE[boff - match];
            bl2 = write_bits_8(out, bl2, bitswap8[d] >> 3);
            bl2 -= 3;
            var dst_eb = d < 4 ? 0 : d - 2 >> 1;
            if (dst_eb > 0) {
              write_bits_16(out, bl2, boff - match - DST_LN[d]);
              bl2 += dst_eb;
            }
            for (var q3 = 0; q3 < mlen; ++q3) {
              addrs[hash] = boff & 32767;
              hash = (hash << 5 ^ data[boff]) & 32767;
              ++boff;
            }
            L2 -= mlen - 1;
          } else {
            if (d <= 143) d = d + 48;
            else bl2 = write_bits_1(out, bl2, 1);
            bl2 = write_bits_8(out, bl2, bitswap8[d]);
            addrs[hash] = boff & 32767;
            ++boff;
          }
        }
        bl2 = write_bits_8(out, bl2, 0) - 1;
      }
      out.l = (bl2 + 7) / 8 | 0;
      return out.l;
    }
    return function _deflateRaw2(data, out) {
      if (data.length < 8) return write_stored(data, out);
      return write_huff_fixed(data, out);
    };
  }();
  function _deflate(data) {
    var buf = new_buf(50 + Math.floor(data.length * 1.1));
    var off = _deflateRaw(data, buf);
    return buf.slice(0, off);
  }
  var dyn_lmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768);
  var dyn_dmap = use_typed_arrays ? new Uint16Array(32768) : zero_fill_array(32768);
  var dyn_cmap = use_typed_arrays ? new Uint16Array(128) : zero_fill_array(128);
  var dyn_len_1 = 1, dyn_len_2 = 1;
  function dyn(data, boff) {
    var _HLIT = read_bits_5(data, boff) + 257;
    boff += 5;
    var _HDIST = read_bits_5(data, boff) + 1;
    boff += 5;
    var _HCLEN = read_bits_4(data, boff) + 4;
    boff += 4;
    var w2 = 0;
    var clens = use_typed_arrays ? new Uint8Array(19) : zero_fill_array(19);
    var ctree = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var maxlen = 1;
    var bl_count = use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8);
    var next_code = use_typed_arrays ? new Uint8Array(8) : zero_fill_array(8);
    var L2 = clens.length;
    for (var i2 = 0; i2 < _HCLEN; ++i2) {
      clens[CLEN_ORDER[i2]] = w2 = read_bits_3(data, boff);
      if (maxlen < w2) maxlen = w2;
      bl_count[w2]++;
      boff += 3;
    }
    var ccode = 0;
    bl_count[0] = 0;
    for (i2 = 1; i2 <= maxlen; ++i2) next_code[i2] = ccode = ccode + bl_count[i2 - 1] << 1;
    for (i2 = 0; i2 < L2; ++i2) if ((ccode = clens[i2]) != 0) ctree[i2] = next_code[ccode]++;
    var cleni = 0;
    for (i2 = 0; i2 < L2; ++i2) {
      cleni = clens[i2];
      if (cleni != 0) {
        ccode = bitswap8[ctree[i2]] >> 8 - cleni;
        for (var j = (1 << 7 - cleni) - 1; j >= 0; --j) dyn_cmap[ccode | j << cleni] = cleni & 7 | i2 << 3;
      }
    }
    var hcodes = [];
    maxlen = 1;
    for (; hcodes.length < _HLIT + _HDIST; ) {
      ccode = dyn_cmap[read_bits_7(data, boff)];
      boff += ccode & 7;
      switch (ccode >>>= 3) {
        case 16:
          w2 = 3 + read_bits_2(data, boff);
          boff += 2;
          ccode = hcodes[hcodes.length - 1];
          while (w2-- > 0) hcodes.push(ccode);
          break;
        case 17:
          w2 = 3 + read_bits_3(data, boff);
          boff += 3;
          while (w2-- > 0) hcodes.push(0);
          break;
        case 18:
          w2 = 11 + read_bits_7(data, boff);
          boff += 7;
          while (w2-- > 0) hcodes.push(0);
          break;
        default:
          hcodes.push(ccode);
          if (maxlen < ccode) maxlen = ccode;
          break;
      }
    }
    var h1 = hcodes.slice(0, _HLIT), h2 = hcodes.slice(_HLIT);
    for (i2 = _HLIT; i2 < 286; ++i2) h1[i2] = 0;
    for (i2 = _HDIST; i2 < 30; ++i2) h2[i2] = 0;
    dyn_len_1 = build_tree(h1, dyn_lmap, 286);
    dyn_len_2 = build_tree(h2, dyn_dmap, 30);
    return boff;
  }
  function inflate(data, usz) {
    if (data[0] == 3 && !(data[1] & 3)) {
      return [new_raw_buf(usz), 2];
    }
    var boff = 0;
    var header = 0;
    var outbuf = new_unsafe_buf(usz ? usz : 1 << 18);
    var woff = 0;
    var OL = outbuf.length >>> 0;
    var max_len_1 = 0, max_len_2 = 0;
    while ((header & 1) == 0) {
      header = read_bits_3(data, boff);
      boff += 3;
      if (header >>> 1 == 0) {
        if (boff & 7) boff += 8 - (boff & 7);
        var sz = data[boff >>> 3] | data[(boff >>> 3) + 1] << 8;
        boff += 32;
        if (sz > 0) {
          if (!usz && OL < woff + sz) {
            outbuf = realloc(outbuf, woff + sz);
            OL = outbuf.length;
          }
          while (sz-- > 0) {
            outbuf[woff++] = data[boff >>> 3];
            boff += 8;
          }
        }
        continue;
      } else if (header >> 1 == 1) {
        max_len_1 = 9;
        max_len_2 = 5;
      } else {
        boff = dyn(data, boff);
        max_len_1 = dyn_len_1;
        max_len_2 = dyn_len_2;
      }
      for (; ; ) {
        if (!usz && OL < woff + 32767) {
          outbuf = realloc(outbuf, woff + 32767);
          OL = outbuf.length;
        }
        var bits = read_bits_n(data, boff, max_len_1);
        var code = header >>> 1 == 1 ? fix_lmap[bits] : dyn_lmap[bits];
        boff += code & 15;
        code >>>= 4;
        if ((code >>> 8 & 255) === 0) outbuf[woff++] = code;
        else if (code == 256) break;
        else {
          code -= 257;
          var len_eb = code < 8 ? 0 : code - 4 >> 2;
          if (len_eb > 5) len_eb = 0;
          var tgt = woff + LEN_LN[code];
          if (len_eb > 0) {
            tgt += read_bits_n(data, boff, len_eb);
            boff += len_eb;
          }
          bits = read_bits_n(data, boff, max_len_2);
          code = header >>> 1 == 1 ? fix_dmap[bits] : dyn_dmap[bits];
          boff += code & 15;
          code >>>= 4;
          var dst_eb = code < 4 ? 0 : code - 2 >> 1;
          var dst = DST_LN[code];
          if (dst_eb > 0) {
            dst += read_bits_n(data, boff, dst_eb);
            boff += dst_eb;
          }
          if (!usz && OL < tgt) {
            outbuf = realloc(outbuf, tgt + 100);
            OL = outbuf.length;
          }
          while (woff < tgt) {
            outbuf[woff] = outbuf[woff - dst];
            ++woff;
          }
        }
      }
    }
    if (usz) return [outbuf, boff + 7 >>> 3];
    return [outbuf.slice(0, woff), boff + 7 >>> 3];
  }
  function _inflate(payload, usz) {
    var data = payload.slice(payload.l || 0);
    var out = inflate(data, usz);
    payload.l += out[1];
    return out[0];
  }
  function warn_or_throw(wrn, msg) {
    if (wrn) {
      if (typeof console !== "undefined") console.error(msg);
    } else throw new Error(msg);
  }
  function parse_zip2(file, options) {
    var blob = (
      /*::(*/
      file
    );
    prep_blob(blob, 0);
    var FileIndex = [], FullPaths = [];
    var o = {
      FileIndex,
      FullPaths
    };
    init_cfb(o, { root: options.root });
    var i2 = blob.length - 4;
    while ((blob[i2] != 80 || blob[i2 + 1] != 75 || blob[i2 + 2] != 5 || blob[i2 + 3] != 6) && i2 >= 0) --i2;
    blob.l = i2 + 4;
    blob.l += 4;
    var fcnt = blob.read_shift(2);
    blob.l += 6;
    var start_cd = blob.read_shift(4);
    blob.l = start_cd;
    for (i2 = 0; i2 < fcnt; ++i2) {
      blob.l += 20;
      var csz = blob.read_shift(4);
      var usz = blob.read_shift(4);
      var namelen = blob.read_shift(2);
      var efsz = blob.read_shift(2);
      var fcsz = blob.read_shift(2);
      blob.l += 8;
      var offset = blob.read_shift(4);
      var EF = parse_extra_field(
        /*::(*/
        blob.slice(blob.l + namelen, blob.l + namelen + efsz)
        /*:: :any)*/
      );
      blob.l += namelen + efsz + fcsz;
      var L2 = blob.l;
      blob.l = offset + 4;
      parse_local_file(blob, csz, usz, o, EF);
      blob.l = L2;
    }
    return o;
  }
  function parse_local_file(blob, csz, usz, o, EF) {
    blob.l += 2;
    var flags = blob.read_shift(2);
    var meth = blob.read_shift(2);
    var date = parse_dos_date(blob);
    if (flags & 8257) throw new Error("Unsupported ZIP encryption");
    var crc32 = blob.read_shift(4);
    var _csz = blob.read_shift(4);
    var _usz = blob.read_shift(4);
    var namelen = blob.read_shift(2);
    var efsz = blob.read_shift(2);
    var name = "";
    for (var i2 = 0; i2 < namelen; ++i2) name += String.fromCharCode(blob[blob.l++]);
    if (efsz) {
      var ef2 = parse_extra_field(
        /*::(*/
        blob.slice(blob.l, blob.l + efsz)
        /*:: :any)*/
      );
      if ((ef2[21589] || {}).mt) date = ef2[21589].mt;
      if (((EF || {})[21589] || {}).mt) date = EF[21589].mt;
    }
    blob.l += efsz;
    var data = blob.slice(blob.l, blob.l + _csz);
    switch (meth) {
      case 8:
        data = _inflateRawSync(blob, _usz);
        break;
      case 0:
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + meth);
    }
    var wrn = false;
    if (flags & 8) {
      crc32 = blob.read_shift(4);
      if (crc32 == 134695760) {
        crc32 = blob.read_shift(4);
        wrn = true;
      }
      _csz = blob.read_shift(4);
      _usz = blob.read_shift(4);
    }
    if (_csz != csz) warn_or_throw(wrn, "Bad compressed size: " + csz + " != " + _csz);
    if (_usz != usz) warn_or_throw(wrn, "Bad uncompressed size: " + usz + " != " + _usz);
    cfb_add(o, name, data, { unsafe: true, mt: date });
  }
  function write_zip(cfb, options) {
    var _opts = options || {};
    var out = [], cdirs = [];
    var o = new_buf(1);
    var method = _opts.compression ? 8 : 0, flags = 0;
    var i2 = 0, j = 0;
    var start_cd = 0, fcnt = 0;
    var root = cfb.FullPaths[0], fp = root, fi2 = cfb.FileIndex[0];
    var crcs = [];
    var sz_cd = 0;
    for (i2 = 1; i2 < cfb.FullPaths.length; ++i2) {
      fp = cfb.FullPaths[i2].slice(root.length);
      fi2 = cfb.FileIndex[i2];
      if (!fi2.size || !fi2.content || fp == "Sh33tJ5") continue;
      var start = start_cd;
      var namebuf = new_buf(fp.length);
      for (j = 0; j < fp.length; ++j) namebuf.write_shift(1, fp.charCodeAt(j) & 127);
      namebuf = namebuf.slice(0, namebuf.l);
      crcs[fcnt] = CRC32.buf(
        /*::((*/
        fi2.content,
        0
      );
      var outbuf = fi2.content;
      if (method == 8) outbuf = _deflateRawSync(outbuf);
      o = new_buf(30);
      o.write_shift(4, 67324752);
      o.write_shift(2, 20);
      o.write_shift(2, flags);
      o.write_shift(2, method);
      if (fi2.mt) write_dos_date(o, fi2.mt);
      else o.write_shift(4, 0);
      o.write_shift(-4, crcs[fcnt]);
      o.write_shift(4, outbuf.length);
      o.write_shift(
        4,
        /*::(*/
        fi2.content.length
      );
      o.write_shift(2, namebuf.length);
      o.write_shift(2, 0);
      start_cd += o.length;
      out.push(o);
      start_cd += namebuf.length;
      out.push(namebuf);
      start_cd += outbuf.length;
      out.push(outbuf);
      o = new_buf(46);
      o.write_shift(4, 33639248);
      o.write_shift(2, 0);
      o.write_shift(2, 20);
      o.write_shift(2, flags);
      o.write_shift(2, method);
      o.write_shift(4, 0);
      o.write_shift(-4, crcs[fcnt]);
      o.write_shift(4, outbuf.length);
      o.write_shift(
        4,
        /*::(*/
        fi2.content.length
      );
      o.write_shift(2, namebuf.length);
      o.write_shift(2, 0);
      o.write_shift(2, 0);
      o.write_shift(2, 0);
      o.write_shift(2, 0);
      o.write_shift(4, 0);
      o.write_shift(4, start);
      sz_cd += o.l;
      cdirs.push(o);
      sz_cd += namebuf.length;
      cdirs.push(namebuf);
      ++fcnt;
    }
    o = new_buf(22);
    o.write_shift(4, 101010256);
    o.write_shift(2, 0);
    o.write_shift(2, 0);
    o.write_shift(2, fcnt);
    o.write_shift(2, fcnt);
    o.write_shift(4, sz_cd);
    o.write_shift(4, start_cd);
    o.write_shift(2, 0);
    return bconcat([bconcat(out), bconcat(cdirs), o]);
  }
  var ContentTypeMap = {
    "htm": "text/html",
    "xml": "text/xml",
    "gif": "image/gif",
    "jpg": "image/jpeg",
    "png": "image/png",
    "mso": "application/x-mso",
    "thmx": "application/vnd.ms-officetheme",
    "sh33tj5": "application/octet-stream"
  };
  function get_content_type(fi2, fp) {
    if (fi2.ctype) return fi2.ctype;
    var ext = fi2.name || "", m2 = ext.match(/\.([^\.]+)$/);
    if (m2 && ContentTypeMap[m2[1]]) return ContentTypeMap[m2[1]];
    if (fp) {
      m2 = (ext = fp).match(/[\.\\]([^\.\\])+$/);
      if (m2 && ContentTypeMap[m2[1]]) return ContentTypeMap[m2[1]];
    }
    return "application/octet-stream";
  }
  function write_base64_76(bstr) {
    var data = Base64_encode(bstr);
    var o = [];
    for (var i2 = 0; i2 < data.length; i2 += 76) o.push(data.slice(i2, i2 + 76));
    return o.join("\r\n") + "\r\n";
  }
  function write_quoted_printable(text) {
    var encoded = text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(c) {
      var w2 = c.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (w2.length == 1 ? "0" + w2 : w2);
    });
    encoded = encoded.replace(/ $/mg, "=20").replace(/\t$/mg, "=09");
    if (encoded.charAt(0) == "\n") encoded = "=0D" + encoded.slice(1);
    encoded = encoded.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, "\n=0A").replace(/([^\r\n])\n/mg, "$1=0A");
    var o = [], split = encoded.split("\r\n");
    for (var si2 = 0; si2 < split.length; ++si2) {
      var str = split[si2];
      if (str.length == 0) {
        o.push("");
        continue;
      }
      for (var i2 = 0; i2 < str.length; ) {
        var end = 76;
        var tmp = str.slice(i2, i2 + end);
        if (tmp.charAt(end - 1) == "=") end--;
        else if (tmp.charAt(end - 2) == "=") end -= 2;
        else if (tmp.charAt(end - 3) == "=") end -= 3;
        tmp = str.slice(i2, i2 + end);
        i2 += end;
        if (i2 < str.length) tmp += "=";
        o.push(tmp);
      }
    }
    return o.join("\r\n");
  }
  function parse_quoted_printable(data) {
    var o = [];
    for (var di2 = 0; di2 < data.length; ++di2) {
      var line = data[di2];
      while (di2 <= data.length && line.charAt(line.length - 1) == "=") line = line.slice(0, line.length - 1) + data[++di2];
      o.push(line);
    }
    for (var oi2 = 0; oi2 < o.length; ++oi2) o[oi2] = o[oi2].replace(/[=][0-9A-Fa-f]{2}/g, function($$) {
      return String.fromCharCode(parseInt($$.slice(1), 16));
    });
    return s2a(o.join("\r\n"));
  }
  function parse_mime(cfb, data, root) {
    var fname = "", cte = "", ctype = "", fdata;
    var di2 = 0;
    for (; di2 < 10; ++di2) {
      var line = data[di2];
      if (!line || line.match(/^\s*$/)) break;
      var m2 = line.match(/^(.*?):\s*([^\s].*)$/);
      if (m2) switch (m2[1].toLowerCase()) {
        case "content-location":
          fname = m2[2].trim();
          break;
        case "content-type":
          ctype = m2[2].trim();
          break;
        case "content-transfer-encoding":
          cte = m2[2].trim();
          break;
      }
    }
    ++di2;
    switch (cte.toLowerCase()) {
      case "base64":
        fdata = s2a(Base64_decode(data.slice(di2).join("")));
        break;
      case "quoted-printable":
        fdata = parse_quoted_printable(data.slice(di2));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + cte);
    }
    var file = cfb_add(cfb, fname.slice(root.length), fdata, { unsafe: true });
    if (ctype) file.ctype = ctype;
  }
  function parse_mad(file, options) {
    if (a2s2(file.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var root = options && options.root || "";
    var data = (has_buf && Buffer.isBuffer(file) ? file.toString("binary") : a2s2(file)).split("\r\n");
    var di2 = 0, row = "";
    for (di2 = 0; di2 < data.length; ++di2) {
      row = data[di2];
      if (!/^Content-Location:/i.test(row)) continue;
      row = row.slice(row.indexOf("file"));
      if (!root) root = row.slice(0, row.lastIndexOf("/") + 1);
      if (row.slice(0, root.length) == root) continue;
      while (root.length > 0) {
        root = root.slice(0, root.length - 1);
        root = root.slice(0, root.lastIndexOf("/") + 1);
        if (row.slice(0, root.length) == root) break;
      }
    }
    var mboundary = (data[1] || "").match(/boundary="(.*?)"/);
    if (!mboundary) throw new Error("MAD cannot find boundary");
    var boundary = "--" + (mboundary[1] || "");
    var FileIndex = [], FullPaths = [];
    var o = {
      FileIndex,
      FullPaths
    };
    init_cfb(o);
    var start_di, fcnt = 0;
    for (di2 = 0; di2 < data.length; ++di2) {
      var line = data[di2];
      if (line !== boundary && line !== boundary + "--") continue;
      if (fcnt++) parse_mime(o, data.slice(start_di, di2), root);
      start_di = di2;
    }
    return o;
  }
  function write_mad(cfb, options) {
    var opts = options || {};
    var boundary = opts.boundary || "SheetJS";
    boundary = "------=" + boundary;
    var out = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + boundary.slice(2) + '"',
      "",
      "",
      ""
    ];
    var root = cfb.FullPaths[0], fp = root, fi2 = cfb.FileIndex[0];
    for (var i2 = 1; i2 < cfb.FullPaths.length; ++i2) {
      fp = cfb.FullPaths[i2].slice(root.length);
      fi2 = cfb.FileIndex[i2];
      if (!fi2.size || !fi2.content || fp == "Sh33tJ5") continue;
      fp = fp.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(c) {
        return "_x" + c.charCodeAt(0).toString(16) + "_";
      }).replace(/[\u0080-\uFFFF]/g, function(u2) {
        return "_u" + u2.charCodeAt(0).toString(16) + "_";
      });
      var ca2 = fi2.content;
      var cstr = has_buf && Buffer.isBuffer(ca2) ? ca2.toString("binary") : a2s2(ca2);
      var dispcnt = 0, L2 = Math.min(1024, cstr.length), cc2 = 0;
      for (var csl = 0; csl <= L2; ++csl) if ((cc2 = cstr.charCodeAt(csl)) >= 32 && cc2 < 128) ++dispcnt;
      var qp = dispcnt >= L2 * 4 / 5;
      out.push(boundary);
      out.push("Content-Location: " + (opts.root || "file:///C:/SheetJS/") + fp);
      out.push("Content-Transfer-Encoding: " + (qp ? "quoted-printable" : "base64"));
      out.push("Content-Type: " + get_content_type(fi2, fp));
      out.push("");
      out.push(qp ? write_quoted_printable(cstr) : write_base64_76(cstr));
    }
    out.push(boundary + "--\r\n");
    return out.join("\r\n");
  }
  function cfb_new(opts) {
    var o = {};
    init_cfb(o, opts);
    return o;
  }
  function cfb_add(cfb, name, content, opts) {
    var unsafe = opts && opts.unsafe;
    if (!unsafe) init_cfb(cfb);
    var file = !unsafe && CFB.find(cfb, name);
    if (!file) {
      var fpath = cfb.FullPaths[0];
      if (name.slice(0, fpath.length) == fpath) fpath = name;
      else {
        if (fpath.slice(-1) != "/") fpath += "/";
        fpath = (fpath + name).replace("//", "/");
      }
      file = { name: filename(name), type: 2 };
      cfb.FileIndex.push(file);
      cfb.FullPaths.push(fpath);
      if (!unsafe) CFB.utils.cfb_gc(cfb);
    }
    file.content = content;
    file.size = content ? content.length : 0;
    if (opts) {
      if (opts.CLSID) file.clsid = opts.CLSID;
      if (opts.mt) file.mt = opts.mt;
      if (opts.ct) file.ct = opts.ct;
    }
    return file;
  }
  function cfb_del(cfb, name) {
    init_cfb(cfb);
    var file = CFB.find(cfb, name);
    if (file) {
      for (var j = 0; j < cfb.FileIndex.length; ++j) if (cfb.FileIndex[j] == file) {
        cfb.FileIndex.splice(j, 1);
        cfb.FullPaths.splice(j, 1);
        return true;
      }
    }
    return false;
  }
  function cfb_mov(cfb, old_name, new_name) {
    init_cfb(cfb);
    var file = CFB.find(cfb, old_name);
    if (file) {
      for (var j = 0; j < cfb.FileIndex.length; ++j) if (cfb.FileIndex[j] == file) {
        cfb.FileIndex[j].name = filename(new_name);
        cfb.FullPaths[j] = new_name;
        return true;
      }
    }
    return false;
  }
  function cfb_gc(cfb) {
    rebuild_cfb(cfb, true);
  }
  exports.find = find;
  exports.read = read;
  exports.parse = parse;
  exports.write = write;
  exports.writeFile = write_file;
  exports.utils = {
    cfb_new,
    cfb_add,
    cfb_del,
    cfb_mov,
    cfb_gc,
    ReadShift,
    CheckField,
    prep_blob,
    bconcat,
    use_zlib,
    _deflateRaw: _deflate,
    _inflateRaw: _inflate,
    consts
  };
  return exports;
}();
function read_binary(path) {
  if (typeof Deno !== "undefined") return Deno.readFileSync(path);
  if (typeof $ !== "undefined" && typeof File !== "undefined" && typeof Folder !== "undefined") try {
    var infile = File(path);
    infile.open("r");
    infile.encoding = "binary";
    var data = infile.read();
    infile.close();
    return data;
  } catch (e) {
    if (!e.message || !e.message.match(/onstruct/)) throw e;
  }
  throw new Error("Cannot access file " + path);
}
function keys(o) {
  var ks = Object.keys(o), o2 = [];
  for (var i = 0; i < ks.length; ++i) if (Object.prototype.hasOwnProperty.call(o, ks[i])) o2.push(ks[i]);
  return o2;
}
function evert(obj) {
  var o = [], K2 = keys(obj);
  for (var i = 0; i !== K2.length; ++i) o[obj[K2[i]]] = K2[i];
  return o;
}
var basedate = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0);
function datenum(v2, date1904) {
  var epoch = /* @__PURE__ */ v2.getTime();
  var dnthresh2 = /* @__PURE__ */ basedate.getTime() + (/* @__PURE__ */ v2.getTimezoneOffset() - /* @__PURE__ */ basedate.getTimezoneOffset()) * 6e4;
  return (epoch - dnthresh2) / (24 * 60 * 60 * 1e3);
}
var refdate = /* @__PURE__ */ new Date();
var dnthresh = /* @__PURE__ */ basedate.getTime() + (/* @__PURE__ */ refdate.getTimezoneOffset() - /* @__PURE__ */ basedate.getTimezoneOffset()) * 6e4;
var refoffset = /* @__PURE__ */ refdate.getTimezoneOffset();
function numdate(v2) {
  var out = /* @__PURE__ */ new Date();
  out.setTime(v2 * 24 * 60 * 60 * 1e3 + dnthresh);
  if (out.getTimezoneOffset() !== refoffset) {
    out.setTime(out.getTime() + (out.getTimezoneOffset() - refoffset) * 6e4);
  }
  return out;
}
function parse_isodur(s) {
  var sec = 0, mt = 0, time = false;
  var m2 = s.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
  if (!m2) throw new Error("|" + s + "| is not an ISO8601 Duration");
  for (var i = 1; i != m2.length; ++i) {
    if (!m2[i]) continue;
    mt = 1;
    if (i > 3) time = true;
    switch (m2[i].slice(m2[i].length - 1)) {
      case "Y":
        throw new Error("Unsupported ISO Duration Field: " + m2[i].slice(m2[i].length - 1));
      case "D":
        mt *= 24;
      case "H":
        mt *= 60;
      case "M":
        if (!time) throw new Error("Unsupported ISO Duration Field: M");
        else mt *= 60;
    }
    sec += mt * parseInt(m2[i], 10);
  }
  return sec;
}
var good_pd_date_1 = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z");
var good_pd_date = /* @__PURE__ */ isNaN(/* @__PURE__ */ good_pd_date_1.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : good_pd_date_1;
var good_pd = /* @__PURE__ */ good_pd_date.getFullYear() == 2017;
function parseDate(str, fixdate) {
  var d = new Date(str);
  if (good_pd) {
    if (fixdate > 0) d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1e3);
    else if (fixdate < 0) d.setTime(d.getTime() - d.getTimezoneOffset() * 60 * 1e3);
    return d;
  }
  if (str instanceof Date) return str;
  if (good_pd_date.getFullYear() == 1917 && !isNaN(d.getFullYear())) {
    var s = d.getFullYear();
    if (str.indexOf("" + s) > -1) return d;
    d.setFullYear(d.getFullYear() + 100);
    return d;
  }
  var n2 = str.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"];
  var out = new Date(+n2[0], +n2[1] - 1, +n2[2], +n2[3] || 0, +n2[4] || 0, +n2[5] || 0);
  if (str.indexOf("Z") > -1) out = new Date(out.getTime() - out.getTimezoneOffset() * 60 * 1e3);
  return out;
}
function cc2str(arr, debomit) {
  if (has_buf && Buffer.isBuffer(arr)) {
    if (debomit) {
      if (arr[0] == 255 && arr[1] == 254) return utf8write(arr.slice(2).toString("utf16le"));
      if (arr[1] == 254 && arr[2] == 255) return utf8write(utf16beread(arr.slice(2).toString("binary")));
    }
    return arr.toString("binary");
  }
  if (typeof TextDecoder !== "undefined") try {
    if (debomit) {
      if (arr[0] == 255 && arr[1] == 254) return utf8write(new TextDecoder("utf-16le").decode(arr.slice(2)));
      if (arr[0] == 254 && arr[1] == 255) return utf8write(new TextDecoder("utf-16be").decode(arr.slice(2)));
    }
    var rev = {
      "€": "",
      "‚": "",
      "ƒ": "",
      "„": "",
      "…": "",
      "†": "",
      "‡": "",
      "ˆ": "",
      "‰": "",
      "Š": "",
      "‹": "",
      "Œ": "",
      "Ž": "",
      "‘": "",
      "’": "",
      "“": "",
      "”": "",
      "•": "",
      "–": "",
      "—": "",
      "˜": "",
      "™": "",
      "š": "",
      "›": "",
      "œ": "",
      "ž": "",
      "Ÿ": ""
    };
    if (Array.isArray(arr)) arr = new Uint8Array(arr);
    return new TextDecoder("latin1").decode(arr).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(c) {
      return rev[c] || c;
    });
  } catch (e) {
  }
  var o = [];
  for (var i = 0; i != arr.length; ++i) o.push(String.fromCharCode(arr[i]));
  return o.join("");
}
function dup(o) {
  if (typeof JSON != "undefined" && !Array.isArray(o)) return JSON.parse(JSON.stringify(o));
  if (typeof o != "object" || o == null) return o;
  if (o instanceof Date) return new Date(o.getTime());
  var out = {};
  for (var k2 in o) if (Object.prototype.hasOwnProperty.call(o, k2)) out[k2] = dup(o[k2]);
  return out;
}
function fill(c, l2) {
  var o = "";
  while (o.length < l2) o += c;
  return o;
}
function fuzzynum(s) {
  var v2 = Number(s);
  if (!isNaN(v2)) return isFinite(v2) ? v2 : NaN;
  if (!/\d/.test(s)) return v2;
  var wt = 1;
  var ss = s.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    wt *= 100;
    return "";
  });
  if (!isNaN(v2 = Number(ss))) return v2 / wt;
  ss = ss.replace(/[(](.*)[)]/, function($$, $1) {
    wt = -wt;
    return $1;
  });
  if (!isNaN(v2 = Number(ss))) return v2 / wt;
  return v2;
}
var lower_months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function fuzzydate(s) {
  var o = new Date(s), n2 = /* @__PURE__ */ new Date(NaN);
  var y2 = o.getYear(), m2 = o.getMonth(), d = o.getDate();
  if (isNaN(d)) return n2;
  var lower = s.toLowerCase();
  if (lower.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    lower = lower.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "");
    if (lower.length > 3 && lower_months.indexOf(lower) == -1) return n2;
  } else if (lower.match(/[a-z]/)) return n2;
  if (y2 < 0 || y2 > 8099) return n2;
  if ((m2 > 0 || d > 1) && y2 != 101) return o;
  if (s.match(/[^-0-9:,\/\\]/)) return n2;
  return o;
}
var split_regex = /* @__PURE__ */ function() {
  var safe_split_regex = "abacaba".split(/(:?b)/i).length == 5;
  return function split_regex2(str, re2, def) {
    if (safe_split_regex || typeof re2 == "string") return str.split(re2);
    var p2 = str.split(re2), o = [p2[0]];
    for (var i = 1; i < p2.length; ++i) {
      o.push(def);
      o.push(p2[i]);
    }
    return o;
  };
}();
function getdatastr(data) {
  if (!data) return null;
  if (data.content && data.type) return cc2str(data.content, true);
  if (data.data) return debom(data.data);
  if (data.asNodeBuffer && has_buf) return debom(data.asNodeBuffer().toString("binary"));
  if (data.asBinary) return debom(data.asBinary());
  if (data._data && data._data.getContent) return debom(cc2str(Array.prototype.slice.call(data._data.getContent(), 0)));
  return null;
}
function getdatabin(data) {
  if (!data) return null;
  if (data.data) return char_codes(data.data);
  if (data.asNodeBuffer && has_buf) return data.asNodeBuffer();
  if (data._data && data._data.getContent) {
    var o = data._data.getContent();
    if (typeof o == "string") return char_codes(o);
    return Array.prototype.slice.call(o);
  }
  if (data.content && data.type) return data.content;
  return null;
}
function getdata(data) {
  return data && data.name.slice(-4) === ".bin" ? getdatabin(data) : getdatastr(data);
}
function safegetzipfile(zip, file) {
  var k2 = zip.FullPaths || keys(zip.files);
  var f2 = file.toLowerCase().replace(/[\/]/g, "\\"), g = f2.replace(/\\/g, "/");
  for (var i = 0; i < k2.length; ++i) {
    var n2 = k2[i].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (f2 == n2 || g == n2) return zip.files ? zip.files[k2[i]] : zip.FileIndex[i];
  }
  return null;
}
function getzipfile(zip, file) {
  var o = safegetzipfile(zip, file);
  if (o == null) throw new Error("Cannot find file " + file + " in zip");
  return o;
}
function getzipdata(zip, file, safe) {
  if (!safe) return getdata(getzipfile(zip, file));
  if (!file) return null;
  try {
    return getzipdata(zip, file);
  } catch (e) {
    return null;
  }
}
function getzipstr(zip, file, safe) {
  if (!safe) return getdatastr(getzipfile(zip, file));
  if (!file) return null;
  try {
    return getzipstr(zip, file);
  } catch (e) {
    return null;
  }
}
function getzipbin(zip, file, safe) {
  return getdatabin(getzipfile(zip, file));
}
function zipentries(zip) {
  var k2 = zip.FullPaths || keys(zip.files), o = [];
  for (var i = 0; i < k2.length; ++i) if (k2[i].slice(-1) != "/") o.push(k2[i].replace(/^Root Entry[\/]/, ""));
  return o.sort();
}
function zip_add_file(zip, path, content) {
  if (zip.FullPaths) {
    if (typeof content == "string") {
      var res;
      if (has_buf) res = Buffer_from(content);
      else res = utf8decode(content);
      return CFB.utils.cfb_add(zip, path, res);
    }
    CFB.utils.cfb_add(zip, path, content);
  } else zip.file(path, content);
}
function zip_read(d, o) {
  switch (o.type) {
    case "base64":
      return CFB.read(d, { type: "base64" });
    case "binary":
      return CFB.read(d, { type: "binary" });
    case "buffer":
    case "array":
      return CFB.read(d, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + o.type);
}
function resolve_path(path, base) {
  if (path.charAt(0) == "/") return path.slice(1);
  var result = base.split("/");
  if (base.slice(-1) != "/") result.pop();
  var target = path.split("/");
  while (target.length !== 0) {
    var step = target.shift();
    if (step === "..") result.pop();
    else if (step !== ".") result.push(step);
  }
  return result.join("/");
}
var XML_HEADER = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';
var attregexg = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g;
var tagregex1 = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg, tagregex2 = /<[^>]*>/g;
var tagregex = /* @__PURE__ */ XML_HEADER.match(tagregex1) ? tagregex1 : tagregex2;
var nsregex = /<\w*:/, nsregex2 = /<(\/?)\w+:/;
function parsexmltag(tag, skip_root, skip_LC) {
  var z2 = {};
  var eq = 0, c = 0;
  for (; eq !== tag.length; ++eq) if ((c = tag.charCodeAt(eq)) === 32 || c === 10 || c === 13) break;
  if (!skip_root) z2[0] = tag.slice(0, eq);
  if (eq === tag.length) return z2;
  var m2 = tag.match(attregexg), j = 0, v2 = "", i = 0, q2 = "", cc2 = "", quot = 1;
  if (m2) for (i = 0; i != m2.length; ++i) {
    cc2 = m2[i];
    for (c = 0; c != cc2.length; ++c) if (cc2.charCodeAt(c) === 61) break;
    q2 = cc2.slice(0, c).trim();
    while (cc2.charCodeAt(c + 1) == 32) ++c;
    quot = (eq = cc2.charCodeAt(c + 1)) == 34 || eq == 39 ? 1 : 0;
    v2 = cc2.slice(c + 1 + quot, cc2.length - quot);
    for (j = 0; j != q2.length; ++j) if (q2.charCodeAt(j) === 58) break;
    if (j === q2.length) {
      if (q2.indexOf("_") > 0) q2 = q2.slice(0, q2.indexOf("_"));
      z2[q2] = v2;
      z2[q2.toLowerCase()] = v2;
    } else {
      var k2 = (j === 5 && q2.slice(0, 5) === "xmlns" ? "xmlns" : "") + q2.slice(j + 1);
      if (z2[k2] && q2.slice(j - 3, j) == "ext") continue;
      z2[k2] = v2;
      z2[k2.toLowerCase()] = v2;
    }
  }
  return z2;
}
function strip_ns(x2) {
  return x2.replace(nsregex2, "<$1");
}
var encodings = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
};
var rencoding = /* @__PURE__ */ evert(encodings);
var unescapexml = /* @__PURE__ */ function() {
  var encregex = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, coderegex = /_x([\da-fA-F]{4})_/ig;
  return function unescapexml2(text) {
    var s = text + "", i = s.indexOf("<![CDATA[");
    if (i == -1) return s.replace(encregex, function($$, $1) {
      return encodings[$$] || String.fromCharCode(parseInt($1, $$.indexOf("x") > -1 ? 16 : 10)) || $$;
    }).replace(coderegex, function(m2, c) {
      return String.fromCharCode(parseInt(c, 16));
    });
    var j = s.indexOf("]]>");
    return unescapexml2(s.slice(0, i)) + s.slice(i + 9, j) + unescapexml2(s.slice(j + 3));
  };
}();
var decregex = /[&<>'"]/g;
var htmlcharegex = /[\u0000-\u001f]/g;
function escapehtml(text) {
  var s = text + "";
  return s.replace(decregex, function(y2) {
    return rencoding[y2];
  }).replace(/\n/g, "<br/>").replace(htmlcharegex, function(s2) {
    return "&#x" + ("000" + s2.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
var xlml_fixstr = /* @__PURE__ */ function() {
  var entregex = /&#(\d+);/g;
  function entrepl($$, $1) {
    return String.fromCharCode(parseInt($1, 10));
  }
  return function xlml_fixstr2(str) {
    return str.replace(entregex, entrepl);
  };
}();
function parsexmlbool(value) {
  switch (value) {
    case 1:
    case true:
    case "1":
    case "true":
    case "TRUE":
      return true;
    default:
      return false;
  }
}
function utf8reada(orig) {
  var out = "", i = 0, c = 0, d = 0, e = 0, f2 = 0, w2 = 0;
  while (i < orig.length) {
    c = orig.charCodeAt(i++);
    if (c < 128) {
      out += String.fromCharCode(c);
      continue;
    }
    d = orig.charCodeAt(i++);
    if (c > 191 && c < 224) {
      f2 = (c & 31) << 6;
      f2 |= d & 63;
      out += String.fromCharCode(f2);
      continue;
    }
    e = orig.charCodeAt(i++);
    if (c < 240) {
      out += String.fromCharCode((c & 15) << 12 | (d & 63) << 6 | e & 63);
      continue;
    }
    f2 = orig.charCodeAt(i++);
    w2 = ((c & 7) << 18 | (d & 63) << 12 | (e & 63) << 6 | f2 & 63) - 65536;
    out += String.fromCharCode(55296 + (w2 >>> 10 & 1023));
    out += String.fromCharCode(56320 + (w2 & 1023));
  }
  return out;
}
function utf8readb(data) {
  var out = new_raw_buf(2 * data.length), w2, i, j = 1, k2 = 0, ww = 0, c;
  for (i = 0; i < data.length; i += j) {
    j = 1;
    if ((c = data.charCodeAt(i)) < 128) w2 = c;
    else if (c < 224) {
      w2 = (c & 31) * 64 + (data.charCodeAt(i + 1) & 63);
      j = 2;
    } else if (c < 240) {
      w2 = (c & 15) * 4096 + (data.charCodeAt(i + 1) & 63) * 64 + (data.charCodeAt(i + 2) & 63);
      j = 3;
    } else {
      j = 4;
      w2 = (c & 7) * 262144 + (data.charCodeAt(i + 1) & 63) * 4096 + (data.charCodeAt(i + 2) & 63) * 64 + (data.charCodeAt(i + 3) & 63);
      w2 -= 65536;
      ww = 55296 + (w2 >>> 10 & 1023);
      w2 = 56320 + (w2 & 1023);
    }
    if (ww !== 0) {
      out[k2++] = ww & 255;
      out[k2++] = ww >>> 8;
      ww = 0;
    }
    out[k2++] = w2 % 256;
    out[k2++] = w2 >>> 8;
  }
  return out.slice(0, k2).toString("ucs2");
}
function utf8readc(data) {
  return Buffer_from(data, "binary").toString("utf8");
}
var utf8corpus = "foo bar bazâð£";
var utf8read = has_buf && (/* @__PURE__ */ utf8readc(utf8corpus) == /* @__PURE__ */ utf8reada(utf8corpus) && utf8readc || /* @__PURE__ */ utf8readb(utf8corpus) == /* @__PURE__ */ utf8reada(utf8corpus) && utf8readb) || utf8reada;
var utf8write = has_buf ? function(data) {
  return Buffer_from(data, "utf8").toString("binary");
} : function(orig) {
  var out = [], i = 0, c = 0, d = 0;
  while (i < orig.length) {
    c = orig.charCodeAt(i++);
    switch (true) {
      case c < 128:
        out.push(String.fromCharCode(c));
        break;
      case c < 2048:
        out.push(String.fromCharCode(192 + (c >> 6)));
        out.push(String.fromCharCode(128 + (c & 63)));
        break;
      case (c >= 55296 && c < 57344):
        c -= 55296;
        d = orig.charCodeAt(i++) - 56320 + (c << 10);
        out.push(String.fromCharCode(240 + (d >> 18 & 7)));
        out.push(String.fromCharCode(144 + (d >> 12 & 63)));
        out.push(String.fromCharCode(128 + (d >> 6 & 63)));
        out.push(String.fromCharCode(128 + (d & 63)));
        break;
      default:
        out.push(String.fromCharCode(224 + (c >> 12)));
        out.push(String.fromCharCode(128 + (c >> 6 & 63)));
        out.push(String.fromCharCode(128 + (c & 63)));
    }
  }
  return out.join("");
};
var matchtag = /* @__PURE__ */ function() {
  var mtcache = {};
  return function matchtag2(f2, g) {
    var t2 = f2 + "|" + (g || "");
    if (mtcache[t2]) return mtcache[t2];
    return mtcache[t2] = new RegExp("<(?:\\w+:)?" + f2 + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + f2 + ">", g || "");
  };
}();
var htmldecode = /* @__PURE__ */ function() {
  var entities = [
    ["nbsp", " "],
    ["middot", "·"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(x2) {
    return [new RegExp("&" + x2[0] + ";", "ig"), x2[1]];
  });
  return function htmldecode2(str) {
    var o = str.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, "\n").replace(/<[^>]*>/g, "");
    for (var i = 0; i < entities.length; ++i) o = o.replace(entities[i][0], entities[i][1]);
    return o;
  };
}();
var vtregex = /* @__PURE__ */ function() {
  var vt_cache = {};
  return function vt_regex(bt) {
    if (vt_cache[bt] !== void 0) return vt_cache[bt];
    return vt_cache[bt] = new RegExp("<(?:vt:)?" + bt + ">([\\s\\S]*?)</(?:vt:)?" + bt + ">", "g");
  };
}();
var vtvregex = /<\/?(?:vt:)?variant>/g, vtmregex = /<(?:vt:)([^>]*)>([\s\S]*)</;
function parseVector(data, opts) {
  var h = parsexmltag(data);
  var matches = data.match(vtregex(h.baseType)) || [];
  var res = [];
  if (matches.length != h.size) {
    if (opts.WTF) throw new Error("unexpected vector length " + matches.length + " != " + h.size);
    return res;
  }
  matches.forEach(function(x2) {
    var v2 = x2.replace(vtvregex, "").match(vtmregex);
    if (v2) res.push({ v: utf8read(v2[2]), t: v2[1] });
  });
  return res;
}
var wtregex = /(^\s|\s$|\n)/;
function wxt_helper(h) {
  return keys(h).map(function(k2) {
    return " " + k2 + '="' + h[k2] + '"';
  }).join("");
}
function writextag(f2, g, h) {
  return "<" + f2 + (h != null ? wxt_helper(h) : "") + (g != null ? (g.match(wtregex) ? ' xml:space="preserve"' : "") + ">" + g + "</" + f2 : "/") + ">";
}
function xlml_normalize(d) {
  if (has_buf && /*::typeof Buffer !== "undefined" && d != null && d instanceof Buffer &&*/
  Buffer.isBuffer(d)) return d.toString("utf8");
  if (typeof d === "string") return d;
  if (typeof Uint8Array !== "undefined" && d instanceof Uint8Array) return utf8read(a2s(ab2a(d)));
  throw new Error("Bad input format: expected Buffer or string");
}
var xlmlregex = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg;
var XMLNS = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  "dc": "http://purl.org/dc/elements/1.1/",
  "dcterms": "http://purl.org/dc/terms/",
  "dcmitype": "http://purl.org/dc/dcmitype/",
  "mx": "http://schemas.microsoft.com/office/mac/excel/2008/main",
  "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  "sjs": "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
  "vt": "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  "xsi": "http://www.w3.org/2001/XMLSchema-instance",
  "xsd": "http://www.w3.org/2001/XMLSchema"
};
var XMLNS_main = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
];
function read_double_le(b, idx) {
  var s = 1 - 2 * (b[idx + 7] >>> 7);
  var e = ((b[idx + 7] & 127) << 4) + (b[idx + 6] >>> 4 & 15);
  var m2 = b[idx + 6] & 15;
  for (var i = 5; i >= 0; --i) m2 = m2 * 256 + b[idx + i];
  if (e == 2047) return m2 == 0 ? s * Infinity : NaN;
  if (e == 0) e = -1022;
  else {
    e -= 1023;
    m2 += Math.pow(2, 52);
  }
  return s * Math.pow(2, e - 52) * m2;
}
function write_double_le(b, v2, idx) {
  var bs = (v2 < 0 || 1 / v2 == -Infinity ? 1 : 0) << 7, e = 0, m2 = 0;
  var av = bs ? -v2 : v2;
  if (!isFinite(av)) {
    e = 2047;
    m2 = isNaN(v2) ? 26985 : 0;
  } else if (av == 0) e = m2 = 0;
  else {
    e = Math.floor(Math.log(av) / Math.LN2);
    m2 = av * Math.pow(2, 52 - e);
    if (e <= -1023 && (!isFinite(m2) || m2 < Math.pow(2, 52))) {
      e = -1022;
    } else {
      m2 -= Math.pow(2, 52);
      e += 1023;
    }
  }
  for (var i = 0; i <= 5; ++i, m2 /= 256) b[idx + i] = m2 & 255;
  b[idx + 6] = (e & 15) << 4 | m2 & 15;
  b[idx + 7] = e >> 4 | bs;
}
var ___toBuffer = function(bufs) {
  var x2 = [], w2 = 10240;
  for (var i = 0; i < bufs[0].length; ++i) if (bufs[0][i]) for (var j = 0, L2 = bufs[0][i].length; j < L2; j += w2) x2.push.apply(x2, bufs[0][i].slice(j, j + w2));
  return x2;
};
var __toBuffer = has_buf ? function(bufs) {
  return bufs[0].length > 0 && Buffer.isBuffer(bufs[0][0]) ? Buffer.concat(bufs[0].map(function(x2) {
    return Buffer.isBuffer(x2) ? x2 : Buffer_from(x2);
  })) : ___toBuffer(bufs);
} : ___toBuffer;
var ___utf16le = function(b, s, e) {
  var ss = [];
  for (var i = s; i < e; i += 2) ss.push(String.fromCharCode(__readUInt16LE(b, i)));
  return ss.join("").replace(chr0, "");
};
var __utf16le = has_buf ? function(b, s, e) {
  if (!Buffer.isBuffer(b)) return ___utf16le(b, s, e);
  return b.toString("utf16le", s, e).replace(chr0, "");
} : ___utf16le;
var ___hexlify = function(b, s, l2) {
  var ss = [];
  for (var i = s; i < s + l2; ++i) ss.push(("0" + b[i].toString(16)).slice(-2));
  return ss.join("");
};
var __hexlify = has_buf ? function(b, s, l2) {
  return Buffer.isBuffer(b) ? b.toString("hex", s, s + l2) : ___hexlify(b, s, l2);
} : ___hexlify;
var ___utf8 = function(b, s, e) {
  var ss = [];
  for (var i = s; i < e; i++) ss.push(String.fromCharCode(__readUInt8(b, i)));
  return ss.join("");
};
var __utf8 = has_buf ? function utf8_b(b, s, e) {
  return Buffer.isBuffer(b) ? b.toString("utf8", s, e) : ___utf8(b, s, e);
} : ___utf8;
var ___lpstr = function(b, i) {
  var len = __readUInt32LE(b, i);
  return len > 0 ? __utf8(b, i + 4, i + 4 + len - 1) : "";
};
var __lpstr = ___lpstr;
var ___cpstr = function(b, i) {
  var len = __readUInt32LE(b, i);
  return len > 0 ? __utf8(b, i + 4, i + 4 + len - 1) : "";
};
var __cpstr = ___cpstr;
var ___lpwstr = function(b, i) {
  var len = 2 * __readUInt32LE(b, i);
  return len > 0 ? __utf8(b, i + 4, i + 4 + len - 1) : "";
};
var __lpwstr = ___lpwstr;
var ___lpp4 = function lpp4_(b, i) {
  var len = __readUInt32LE(b, i);
  return len > 0 ? __utf16le(b, i + 4, i + 4 + len) : "";
};
var __lpp4 = ___lpp4;
var ___8lpp4 = function(b, i) {
  var len = __readUInt32LE(b, i);
  return len > 0 ? __utf8(b, i + 4, i + 4 + len) : "";
};
var __8lpp4 = ___8lpp4;
var ___double = function(b, idx) {
  return read_double_le(b, idx);
};
var __double = ___double;
var is_buf = function is_buf_a(a) {
  return Array.isArray(a) || typeof Uint8Array !== "undefined" && a instanceof Uint8Array;
};
if (has_buf) {
  __lpstr = function lpstr_b(b, i) {
    if (!Buffer.isBuffer(b)) return ___lpstr(b, i);
    var len = b.readUInt32LE(i);
    return len > 0 ? b.toString("utf8", i + 4, i + 4 + len - 1) : "";
  };
  __cpstr = function cpstr_b(b, i) {
    if (!Buffer.isBuffer(b)) return ___cpstr(b, i);
    var len = b.readUInt32LE(i);
    return len > 0 ? b.toString("utf8", i + 4, i + 4 + len - 1) : "";
  };
  __lpwstr = function lpwstr_b(b, i) {
    if (!Buffer.isBuffer(b)) return ___lpwstr(b, i);
    var len = 2 * b.readUInt32LE(i);
    return b.toString("utf16le", i + 4, i + 4 + len - 1);
  };
  __lpp4 = function lpp4_b(b, i) {
    if (!Buffer.isBuffer(b)) return ___lpp4(b, i);
    var len = b.readUInt32LE(i);
    return b.toString("utf16le", i + 4, i + 4 + len);
  };
  __8lpp4 = function lpp4_8b(b, i) {
    if (!Buffer.isBuffer(b)) return ___8lpp4(b, i);
    var len = b.readUInt32LE(i);
    return b.toString("utf8", i + 4, i + 4 + len);
  };
  __double = function double_(b, i) {
    if (Buffer.isBuffer(b)) return b.readDoubleLE(i);
    return ___double(b, i);
  };
  is_buf = function is_buf_b(a) {
    return Buffer.isBuffer(a) || Array.isArray(a) || typeof Uint8Array !== "undefined" && a instanceof Uint8Array;
  };
}
var __readUInt8 = function(b, idx) {
  return b[idx];
};
var __readUInt16LE = function(b, idx) {
  return b[idx + 1] * (1 << 8) + b[idx];
};
var __readInt16LE = function(b, idx) {
  var u2 = b[idx + 1] * (1 << 8) + b[idx];
  return u2 < 32768 ? u2 : (65535 - u2 + 1) * -1;
};
var __readUInt32LE = function(b, idx) {
  return b[idx + 3] * (1 << 24) + (b[idx + 2] << 16) + (b[idx + 1] << 8) + b[idx];
};
var __readInt32LE = function(b, idx) {
  return b[idx + 3] << 24 | b[idx + 2] << 16 | b[idx + 1] << 8 | b[idx];
};
var __readInt32BE = function(b, idx) {
  return b[idx] << 24 | b[idx + 1] << 16 | b[idx + 2] << 8 | b[idx + 3];
};
function ReadShift(size, t2) {
  var o = "", oI, oR, oo = [], w2, vv, i, loc;
  switch (t2) {
    case "dbcs":
      loc = this.l;
      if (has_buf && Buffer.isBuffer(this)) o = this.slice(this.l, this.l + 2 * size).toString("utf16le");
      else for (i = 0; i < size; ++i) {
        o += String.fromCharCode(__readUInt16LE(this, loc));
        loc += 2;
      }
      size *= 2;
      break;
    case "utf8":
      o = __utf8(this, this.l, this.l + size);
      break;
    case "utf16le":
      size *= 2;
      o = __utf16le(this, this.l, this.l + size);
      break;
    case "wstr":
      return ReadShift.call(this, size, "dbcs");
    case "lpstr-ansi":
      o = __lpstr(this, this.l);
      size = 4 + __readUInt32LE(this, this.l);
      break;
    case "lpstr-cp":
      o = __cpstr(this, this.l);
      size = 4 + __readUInt32LE(this, this.l);
      break;
    case "lpwstr":
      o = __lpwstr(this, this.l);
      size = 4 + 2 * __readUInt32LE(this, this.l);
      break;
    case "lpp4":
      size = 4 + __readUInt32LE(this, this.l);
      o = __lpp4(this, this.l);
      if (size & 2) size += 2;
      break;
    case "8lpp4":
      size = 4 + __readUInt32LE(this, this.l);
      o = __8lpp4(this, this.l);
      if (size & 3) size += 4 - (size & 3);
      break;
    case "cstr":
      size = 0;
      o = "";
      while ((w2 = __readUInt8(this, this.l + size++)) !== 0) oo.push(_getchar(w2));
      o = oo.join("");
      break;
    case "_wstr":
      size = 0;
      o = "";
      while ((w2 = __readUInt16LE(this, this.l + size)) !== 0) {
        oo.push(_getchar(w2));
        size += 2;
      }
      size += 2;
      o = oo.join("");
      break;
    case "dbcs-cont":
      o = "";
      loc = this.l;
      for (i = 0; i < size; ++i) {
        if (this.lens && this.lens.indexOf(loc) !== -1) {
          w2 = __readUInt8(this, loc);
          this.l = loc + 1;
          vv = ReadShift.call(this, size - i, w2 ? "dbcs-cont" : "sbcs-cont");
          return oo.join("") + vv;
        }
        oo.push(_getchar(__readUInt16LE(this, loc)));
        loc += 2;
      }
      o = oo.join("");
      size *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      o = "";
      loc = this.l;
      for (i = 0; i != size; ++i) {
        if (this.lens && this.lens.indexOf(loc) !== -1) {
          w2 = __readUInt8(this, loc);
          this.l = loc + 1;
          vv = ReadShift.call(this, size - i, w2 ? "dbcs-cont" : "sbcs-cont");
          return oo.join("") + vv;
        }
        oo.push(_getchar(__readUInt8(this, loc)));
        loc += 1;
      }
      o = oo.join("");
      break;
    default:
      switch (size) {
        case 1:
          oI = __readUInt8(this, this.l);
          this.l++;
          return oI;
        case 2:
          oI = (t2 === "i" ? __readInt16LE : __readUInt16LE)(this, this.l);
          this.l += 2;
          return oI;
        case 4:
        case -4:
          if (t2 === "i" || (this[this.l + 3] & 128) === 0) {
            oI = (size > 0 ? __readInt32LE : __readInt32BE)(this, this.l);
            this.l += 4;
            return oI;
          } else {
            oR = __readUInt32LE(this, this.l);
            this.l += 4;
          }
          return oR;
        case 8:
        case -8:
          if (t2 === "f") {
            if (size == 8) oR = __double(this, this.l);
            else oR = __double([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0);
            this.l += 8;
            return oR;
          } else size = 8;
        case 16:
          o = __hexlify(this, this.l, size);
          break;
      }
  }
  this.l += size;
  return o;
}
var __writeUInt32LE = function(b, val, idx) {
  b[idx] = val & 255;
  b[idx + 1] = val >>> 8 & 255;
  b[idx + 2] = val >>> 16 & 255;
  b[idx + 3] = val >>> 24 & 255;
};
var __writeInt32LE = function(b, val, idx) {
  b[idx] = val & 255;
  b[idx + 1] = val >> 8 & 255;
  b[idx + 2] = val >> 16 & 255;
  b[idx + 3] = val >> 24 & 255;
};
var __writeUInt16LE = function(b, val, idx) {
  b[idx] = val & 255;
  b[idx + 1] = val >>> 8 & 255;
};
function WriteShift(t2, val, f2) {
  var size = 0, i = 0;
  if (f2 === "dbcs") {
    for (i = 0; i != val.length; ++i) __writeUInt16LE(this, val.charCodeAt(i), this.l + 2 * i);
    size = 2 * val.length;
  } else if (f2 === "sbcs") {
    {
      val = val.replace(/[^\x00-\x7F]/g, "_");
      for (i = 0; i != val.length; ++i) this[this.l + i] = val.charCodeAt(i) & 255;
    }
    size = val.length;
  } else if (f2 === "hex") {
    for (; i < t2; ++i) {
      this[this.l++] = parseInt(val.slice(2 * i, 2 * i + 2), 16) || 0;
    }
    return this;
  } else if (f2 === "utf16le") {
    var end = Math.min(this.l + t2, this.length);
    for (i = 0; i < Math.min(val.length, t2); ++i) {
      var cc2 = val.charCodeAt(i);
      this[this.l++] = cc2 & 255;
      this[this.l++] = cc2 >> 8;
    }
    while (this.l < end) this[this.l++] = 0;
    return this;
  } else switch (t2) {
    case 1:
      size = 1;
      this[this.l] = val & 255;
      break;
    case 2:
      size = 2;
      this[this.l] = val & 255;
      val >>>= 8;
      this[this.l + 1] = val & 255;
      break;
    case 3:
      size = 3;
      this[this.l] = val & 255;
      val >>>= 8;
      this[this.l + 1] = val & 255;
      val >>>= 8;
      this[this.l + 2] = val & 255;
      break;
    case 4:
      size = 4;
      __writeUInt32LE(this, val, this.l);
      break;
    case 8:
      size = 8;
      if (f2 === "f") {
        write_double_le(this, val, this.l);
        break;
      }
    case 16:
      break;
    case -4:
      size = 4;
      __writeInt32LE(this, val, this.l);
      break;
  }
  this.l += size;
  return this;
}
function CheckField(hexstr, fld) {
  var m2 = __hexlify(this, this.l, hexstr.length >> 1);
  if (m2 !== hexstr) throw new Error(fld + "Expected " + hexstr + " saw " + m2);
  this.l += hexstr.length >> 1;
}
function prep_blob(blob, pos) {
  blob.l = pos;
  blob.read_shift = /*::(*/
  ReadShift;
  blob.chk = CheckField;
  blob.write_shift = WriteShift;
}
function parsenoop(blob, length) {
  blob.l += length;
}
function new_buf(sz) {
  var o = new_raw_buf(sz);
  prep_blob(o, 0);
  return o;
}
function recordhopper(data, cb2, opts) {
  if (!data) return;
  var tmpbyte, cntbyte, length;
  prep_blob(data, data.l || 0);
  var L2 = data.length, RT = 0, tgt = 0;
  while (data.l < L2) {
    RT = data.read_shift(1);
    if (RT & 128) RT = (RT & 127) + ((data.read_shift(1) & 127) << 7);
    var R2 = XLSBRecordEnum[RT] || XLSBRecordEnum[65535];
    tmpbyte = data.read_shift(1);
    length = tmpbyte & 127;
    for (cntbyte = 1; cntbyte < 4 && tmpbyte & 128; ++cntbyte) length += ((tmpbyte = data.read_shift(1)) & 127) << 7 * cntbyte;
    tgt = data.l + length;
    var d = R2.f && R2.f(data, length, opts);
    data.l = tgt;
    if (cb2(d, R2, RT)) return;
  }
}
function buf_array() {
  var bufs = [], blksz = has_buf ? 256 : 2048;
  var newblk = function ba_newblk(sz) {
    var o = new_buf(sz);
    prep_blob(o, 0);
    return o;
  };
  var curbuf = newblk(blksz);
  var endbuf = function ba_endbuf() {
    if (!curbuf) return;
    if (curbuf.length > curbuf.l) {
      curbuf = curbuf.slice(0, curbuf.l);
      curbuf.l = curbuf.length;
    }
    if (curbuf.length > 0) bufs.push(curbuf);
    curbuf = null;
  };
  var next = function ba_next(sz) {
    if (curbuf && sz < curbuf.length - curbuf.l) return curbuf;
    endbuf();
    return curbuf = newblk(Math.max(sz + 1, blksz));
  };
  var end = function ba_end() {
    endbuf();
    return bconcat(bufs);
  };
  var push = function ba_push(buf) {
    endbuf();
    curbuf = buf;
    if (curbuf.l == null) curbuf.l = curbuf.length;
    next(blksz);
  };
  return { next, push, end, _bufs: bufs };
}
function shift_cell_xls(cell, tgt, opts) {
  var out = dup(cell);
  if (tgt.s) {
    if (out.cRel) out.c += tgt.s.c;
    if (out.rRel) out.r += tgt.s.r;
  } else {
    if (out.cRel) out.c += tgt.c;
    if (out.rRel) out.r += tgt.r;
  }
  if (!opts || opts.biff < 12) {
    while (out.c >= 256) out.c -= 256;
    while (out.r >= 65536) out.r -= 65536;
  }
  return out;
}
function shift_range_xls(cell, range, opts) {
  var out = dup(cell);
  out.s = shift_cell_xls(out.s, range.s, opts);
  out.e = shift_cell_xls(out.e, range.s, opts);
  return out;
}
function encode_cell_xls(c, biff) {
  if (c.cRel && c.c < 0) {
    c = dup(c);
    while (c.c < 0) c.c += biff > 8 ? 16384 : 256;
  }
  if (c.rRel && c.r < 0) {
    c = dup(c);
    while (c.r < 0) c.r += biff > 8 ? 1048576 : biff > 5 ? 65536 : 16384;
  }
  var s = encode_cell(c);
  if (!c.cRel && c.cRel != null) s = fix_col(s);
  if (!c.rRel && c.rRel != null) s = fix_row(s);
  return s;
}
function encode_range_xls(r2, opts) {
  if (r2.s.r == 0 && !r2.s.rRel) {
    if (r2.e.r == (opts.biff >= 12 ? 1048575 : opts.biff >= 8 ? 65536 : 16384) && !r2.e.rRel) {
      return (r2.s.cRel ? "" : "$") + encode_col(r2.s.c) + ":" + (r2.e.cRel ? "" : "$") + encode_col(r2.e.c);
    }
  }
  if (r2.s.c == 0 && !r2.s.cRel) {
    if (r2.e.c == (opts.biff >= 12 ? 16383 : 255) && !r2.e.cRel) {
      return (r2.s.rRel ? "" : "$") + encode_row(r2.s.r) + ":" + (r2.e.rRel ? "" : "$") + encode_row(r2.e.r);
    }
  }
  return encode_cell_xls(r2.s, opts.biff) + ":" + encode_cell_xls(r2.e, opts.biff);
}
function decode_row(rowstr) {
  return parseInt(unfix_row(rowstr), 10) - 1;
}
function encode_row(row) {
  return "" + (row + 1);
}
function fix_row(cstr) {
  return cstr.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function unfix_row(cstr) {
  return cstr.replace(/\$(\d+)$/, "$1");
}
function decode_col(colstr) {
  var c = unfix_col(colstr), d = 0, i = 0;
  for (; i !== c.length; ++i) d = 26 * d + c.charCodeAt(i) - 64;
  return d - 1;
}
function encode_col(col) {
  if (col < 0) throw new Error("invalid column " + col);
  var s = "";
  for (++col; col; col = Math.floor((col - 1) / 26)) s = String.fromCharCode((col - 1) % 26 + 65) + s;
  return s;
}
function fix_col(cstr) {
  return cstr.replace(/^([A-Z])/, "$$$1");
}
function unfix_col(cstr) {
  return cstr.replace(/^\$([A-Z])/, "$1");
}
function split_cell(cstr) {
  return cstr.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function decode_cell(cstr) {
  var R2 = 0, C2 = 0;
  for (var i = 0; i < cstr.length; ++i) {
    var cc2 = cstr.charCodeAt(i);
    if (cc2 >= 48 && cc2 <= 57) R2 = 10 * R2 + (cc2 - 48);
    else if (cc2 >= 65 && cc2 <= 90) C2 = 26 * C2 + (cc2 - 64);
  }
  return { c: C2 - 1, r: R2 - 1 };
}
function encode_cell(cell) {
  var col = cell.c + 1;
  var s = "";
  for (; col; col = (col - 1) / 26 | 0) s = String.fromCharCode((col - 1) % 26 + 65) + s;
  return s + (cell.r + 1);
}
function decode_range(range) {
  var idx = range.indexOf(":");
  if (idx == -1) return { s: decode_cell(range), e: decode_cell(range) };
  return { s: decode_cell(range.slice(0, idx)), e: decode_cell(range.slice(idx + 1)) };
}
function encode_range(cs, ce2) {
  if (typeof ce2 === "undefined" || typeof ce2 === "number") {
    return encode_range(cs.s, cs.e);
  }
  if (typeof cs !== "string") cs = encode_cell(cs);
  if (typeof ce2 !== "string") ce2 = encode_cell(ce2);
  return cs == ce2 ? cs : cs + ":" + ce2;
}
function safe_decode_range(range) {
  var o = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
  var idx = 0, i = 0, cc2 = 0;
  var len = range.length;
  for (idx = 0; i < len; ++i) {
    if ((cc2 = range.charCodeAt(i) - 64) < 1 || cc2 > 26) break;
    idx = 26 * idx + cc2;
  }
  o.s.c = --idx;
  for (idx = 0; i < len; ++i) {
    if ((cc2 = range.charCodeAt(i) - 48) < 0 || cc2 > 9) break;
    idx = 10 * idx + cc2;
  }
  o.s.r = --idx;
  if (i === len || cc2 != 10) {
    o.e.c = o.s.c;
    o.e.r = o.s.r;
    return o;
  }
  ++i;
  for (idx = 0; i != len; ++i) {
    if ((cc2 = range.charCodeAt(i) - 64) < 1 || cc2 > 26) break;
    idx = 26 * idx + cc2;
  }
  o.e.c = --idx;
  for (idx = 0; i != len; ++i) {
    if ((cc2 = range.charCodeAt(i) - 48) < 0 || cc2 > 9) break;
    idx = 10 * idx + cc2;
  }
  o.e.r = --idx;
  return o;
}
function safe_format_cell(cell, v2) {
  var q2 = cell.t == "d" && v2 instanceof Date;
  if (cell.z != null) try {
    return cell.w = SSF_format(cell.z, q2 ? datenum(v2) : v2);
  } catch (e) {
  }
  try {
    return cell.w = SSF_format((cell.XF || {}).numFmtId || (q2 ? 14 : 0), q2 ? datenum(v2) : v2);
  } catch (e) {
    return "" + v2;
  }
}
function format_cell(cell, v2, o) {
  if (cell == null || cell.t == null || cell.t == "z") return "";
  if (cell.w !== void 0) return cell.w;
  if (cell.t == "d" && !cell.z && o && o.dateNF) cell.z = o.dateNF;
  if (cell.t == "e") return BErr[cell.v] || cell.v;
  if (v2 == void 0) return safe_format_cell(cell, cell.v);
  return safe_format_cell(cell, v2);
}
function sheet_to_workbook(sheet, opts) {
  var n2 = opts && opts.sheet ? opts.sheet : "Sheet1";
  var sheets = {};
  sheets[n2] = sheet;
  return { SheetNames: [n2], Sheets: sheets };
}
function sheet_add_aoa(_ws, data, opts) {
  var o = opts || {};
  var dense = _ws ? Array.isArray(_ws) : o.dense;
  var ws = _ws || (dense ? [] : {});
  var _R = 0, _C = 0;
  if (ws && o.origin != null) {
    if (typeof o.origin == "number") _R = o.origin;
    else {
      var _origin = typeof o.origin == "string" ? decode_cell(o.origin) : o.origin;
      _R = _origin.r;
      _C = _origin.c;
    }
    if (!ws["!ref"]) ws["!ref"] = "A1:A1";
  }
  var range = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (ws["!ref"]) {
    var _range = safe_decode_range(ws["!ref"]);
    range.s.c = _range.s.c;
    range.s.r = _range.s.r;
    range.e.c = Math.max(range.e.c, _range.e.c);
    range.e.r = Math.max(range.e.r, _range.e.r);
    if (_R == -1) range.e.r = _R = _range.e.r + 1;
  }
  for (var R2 = 0; R2 != data.length; ++R2) {
    if (!data[R2]) continue;
    if (!Array.isArray(data[R2])) throw new Error("aoa_to_sheet expects an array of arrays");
    for (var C2 = 0; C2 != data[R2].length; ++C2) {
      if (typeof data[R2][C2] === "undefined") continue;
      var cell = { v: data[R2][C2] };
      var __R = _R + R2, __C = _C + C2;
      if (range.s.r > __R) range.s.r = __R;
      if (range.s.c > __C) range.s.c = __C;
      if (range.e.r < __R) range.e.r = __R;
      if (range.e.c < __C) range.e.c = __C;
      if (data[R2][C2] && typeof data[R2][C2] === "object" && !Array.isArray(data[R2][C2]) && !(data[R2][C2] instanceof Date)) cell = data[R2][C2];
      else {
        if (Array.isArray(cell.v)) {
          cell.f = data[R2][C2][1];
          cell.v = cell.v[0];
        }
        if (cell.v === null) {
          if (cell.f) cell.t = "n";
          else if (o.nullError) {
            cell.t = "e";
            cell.v = 0;
          } else if (!o.sheetStubs) continue;
          else cell.t = "z";
        } else if (typeof cell.v === "number") cell.t = "n";
        else if (typeof cell.v === "boolean") cell.t = "b";
        else if (cell.v instanceof Date) {
          cell.z = o.dateNF || table_fmt[14];
          if (o.cellDates) {
            cell.t = "d";
            cell.w = SSF_format(cell.z, datenum(cell.v));
          } else {
            cell.t = "n";
            cell.v = datenum(cell.v);
            cell.w = SSF_format(cell.z, cell.v);
          }
        } else cell.t = "s";
      }
      if (dense) {
        if (!ws[__R]) ws[__R] = [];
        if (ws[__R][__C] && ws[__R][__C].z) cell.z = ws[__R][__C].z;
        ws[__R][__C] = cell;
      } else {
        var cell_ref = encode_cell({ c: __C, r: __R });
        if (ws[cell_ref] && ws[cell_ref].z) cell.z = ws[cell_ref].z;
        ws[cell_ref] = cell;
      }
    }
  }
  if (range.s.c < 1e7) ws["!ref"] = encode_range(range);
  return ws;
}
function aoa_to_sheet(data, opts) {
  return sheet_add_aoa(null, data, opts);
}
function parse_Int32LE(data) {
  return data.read_shift(4, "i");
}
function parse_XLWideString(data) {
  var cchCharacters = data.read_shift(4);
  return cchCharacters === 0 ? "" : data.read_shift(cchCharacters, "dbcs");
}
function parse_StrRun(data) {
  return { ich: data.read_shift(2), ifnt: data.read_shift(2) };
}
function parse_RichStr(data, length) {
  var start = data.l;
  var flags = data.read_shift(1);
  var str = parse_XLWideString(data);
  var rgsStrRun = [];
  var z2 = { t: str, h: str };
  if ((flags & 1) !== 0) {
    var dwSizeStrRun = data.read_shift(4);
    for (var i = 0; i != dwSizeStrRun; ++i) rgsStrRun.push(parse_StrRun(data));
    z2.r = rgsStrRun;
  } else z2.r = [{ ich: 0, ifnt: 0 }];
  data.l = start + length;
  return z2;
}
var parse_BrtCommentText = parse_RichStr;
function parse_XLSBCell(data) {
  var col = data.read_shift(4);
  var iStyleRef = data.read_shift(2);
  iStyleRef += data.read_shift(1) << 16;
  data.l++;
  return { c: col, iStyleRef };
}
function parse_XLSBShortCell(data) {
  var iStyleRef = data.read_shift(2);
  iStyleRef += data.read_shift(1) << 16;
  data.l++;
  return { c: -1, iStyleRef };
}
var parse_XLSBCodeName = parse_XLWideString;
function parse_XLNullableWideString(data) {
  var cchCharacters = data.read_shift(4);
  return cchCharacters === 0 || cchCharacters === 4294967295 ? "" : data.read_shift(cchCharacters, "dbcs");
}
var parse_XLNameWideString = parse_XLWideString;
var parse_RelID = parse_XLNullableWideString;
function parse_RkNumber(data) {
  var b = data.slice(data.l, data.l + 4);
  var fX100 = b[0] & 1, fInt = b[0] & 2;
  data.l += 4;
  var RK = fInt === 0 ? __double([0, 0, 0, 0, b[0] & 252, b[1], b[2], b[3]], 0) : __readInt32LE(b, 0) >> 2;
  return fX100 ? RK / 100 : RK;
}
function parse_RfX(data) {
  var cell = { s: {}, e: {} };
  cell.s.r = data.read_shift(4);
  cell.e.r = data.read_shift(4);
  cell.s.c = data.read_shift(4);
  cell.e.c = data.read_shift(4);
  return cell;
}
var parse_UncheckedRfX = parse_RfX;
function parse_Xnum(data) {
  if (data.length - data.l < 8) throw "XLS Xnum Buffer underflow";
  return data.read_shift(8, "f");
}
function parse_BrtColor(data) {
  var out = {};
  var d = data.read_shift(1);
  var xColorType = d >>> 1;
  var index = data.read_shift(1);
  var nTS = data.read_shift(2, "i");
  var bR = data.read_shift(1);
  var bG = data.read_shift(1);
  var bB = data.read_shift(1);
  data.l++;
  switch (xColorType) {
    case 0:
      out.auto = 1;
      break;
    case 1:
      out.index = index;
      var icv = XLSIcv[index];
      if (icv) out.rgb = rgb2Hex(icv);
      break;
    case 2:
      out.rgb = rgb2Hex([bR, bG, bB]);
      break;
    case 3:
      out.theme = index;
      break;
  }
  if (nTS != 0) out.tint = nTS > 0 ? nTS / 32767 : nTS / 32768;
  return out;
}
function parse_FontFlags(data) {
  var d = data.read_shift(1);
  data.l++;
  var out = {
    fBold: d & 1,
    fItalic: d & 2,
    fUnderline: d & 4,
    fStrikeout: d & 8,
    fOutline: d & 16,
    fShadow: d & 32,
    fCondense: d & 64,
    fExtend: d & 128
  };
  return out;
}
function parse_ClipboardFormatOrString(o, w2) {
  var ClipFmt = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" };
  var m2 = o.read_shift(4);
  switch (m2) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return ClipFmt[o.read_shift(4)] || "";
  }
  if (m2 > 400) throw new Error("Unsupported Clipboard: " + m2.toString(16));
  o.l -= 4;
  return o.read_shift(0, w2 == 1 ? "lpstr" : "lpwstr");
}
function parse_ClipboardFormatOrAnsiString(o) {
  return parse_ClipboardFormatOrString(o, 1);
}
function parse_ClipboardFormatOrUnicodeString(o) {
  return parse_ClipboardFormatOrString(o, 2);
}
var VT_I2 = 2;
var VT_I4 = 3;
var VT_BOOL = 11;
var VT_VARIANT = 12;
var VT_UI4 = 19;
var VT_FILETIME = 64;
var VT_BLOB = 65;
var VT_CF = 71;
var VT_VECTOR_VARIANT = 4108;
var VT_VECTOR_LPSTR = 4126;
var VT_STRING = 80;
var VT_USTR = 81;
var VT_CUSTOM = [VT_STRING, VT_USTR];
var DocSummaryPIDDSI = {
  /*::[*/
  1: { n: "CodePage", t: VT_I2 },
  /*::[*/
  2: { n: "Category", t: VT_STRING },
  /*::[*/
  3: { n: "PresentationFormat", t: VT_STRING },
  /*::[*/
  4: { n: "ByteCount", t: VT_I4 },
  /*::[*/
  5: { n: "LineCount", t: VT_I4 },
  /*::[*/
  6: { n: "ParagraphCount", t: VT_I4 },
  /*::[*/
  7: { n: "SlideCount", t: VT_I4 },
  /*::[*/
  8: { n: "NoteCount", t: VT_I4 },
  /*::[*/
  9: { n: "HiddenCount", t: VT_I4 },
  /*::[*/
  10: { n: "MultimediaClipCount", t: VT_I4 },
  /*::[*/
  11: { n: "ScaleCrop", t: VT_BOOL },
  /*::[*/
  12: {
    n: "HeadingPairs",
    t: VT_VECTOR_VARIANT
    /* VT_VECTOR | VT_VARIANT */
  },
  /*::[*/
  13: {
    n: "TitlesOfParts",
    t: VT_VECTOR_LPSTR
    /* VT_VECTOR | VT_LPSTR */
  },
  /*::[*/
  14: { n: "Manager", t: VT_STRING },
  /*::[*/
  15: { n: "Company", t: VT_STRING },
  /*::[*/
  16: { n: "LinksUpToDate", t: VT_BOOL },
  /*::[*/
  17: { n: "CharacterCount", t: VT_I4 },
  /*::[*/
  19: { n: "SharedDoc", t: VT_BOOL },
  /*::[*/
  22: { n: "HyperlinksChanged", t: VT_BOOL },
  /*::[*/
  23: { n: "AppVersion", t: VT_I4, p: "version" },
  /*::[*/
  24: { n: "DigSig", t: VT_BLOB },
  /*::[*/
  26: { n: "ContentType", t: VT_STRING },
  /*::[*/
  27: { n: "ContentStatus", t: VT_STRING },
  /*::[*/
  28: { n: "Language", t: VT_STRING },
  /*::[*/
  29: { n: "Version", t: VT_STRING },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: VT_UI4 },
  /*::[*/
  2147483651: { n: "Behavior", t: VT_UI4 },
  /*::[*/
  1919054434: {}
};
var SummaryPIDSI = {
  /*::[*/
  1: { n: "CodePage", t: VT_I2 },
  /*::[*/
  2: { n: "Title", t: VT_STRING },
  /*::[*/
  3: { n: "Subject", t: VT_STRING },
  /*::[*/
  4: { n: "Author", t: VT_STRING },
  /*::[*/
  5: { n: "Keywords", t: VT_STRING },
  /*::[*/
  6: { n: "Comments", t: VT_STRING },
  /*::[*/
  7: { n: "Template", t: VT_STRING },
  /*::[*/
  8: { n: "LastAuthor", t: VT_STRING },
  /*::[*/
  9: { n: "RevNumber", t: VT_STRING },
  /*::[*/
  10: { n: "EditTime", t: VT_FILETIME },
  /*::[*/
  11: { n: "LastPrinted", t: VT_FILETIME },
  /*::[*/
  12: { n: "CreatedDate", t: VT_FILETIME },
  /*::[*/
  13: { n: "ModifiedDate", t: VT_FILETIME },
  /*::[*/
  14: { n: "PageCount", t: VT_I4 },
  /*::[*/
  15: { n: "WordCount", t: VT_I4 },
  /*::[*/
  16: { n: "CharCount", t: VT_I4 },
  /*::[*/
  17: { n: "Thumbnail", t: VT_CF },
  /*::[*/
  18: { n: "Application", t: VT_STRING },
  /*::[*/
  19: { n: "DocSecurity", t: VT_I4 },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: VT_UI4 },
  /*::[*/
  2147483651: { n: "Behavior", t: VT_UI4 },
  /*::[*/
  1919054434: {}
};
var CountryEnum = {
  /*::[*/
  1: "US",
  // United States
  /*::[*/
  2: "CA",
  // Canada
  /*::[*/
  3: "",
  // Latin America (except Brazil)
  /*::[*/
  7: "RU",
  // Russia
  /*::[*/
  20: "EG",
  // Egypt
  /*::[*/
  30: "GR",
  // Greece
  /*::[*/
  31: "NL",
  // Netherlands
  /*::[*/
  32: "BE",
  // Belgium
  /*::[*/
  33: "FR",
  // France
  /*::[*/
  34: "ES",
  // Spain
  /*::[*/
  36: "HU",
  // Hungary
  /*::[*/
  39: "IT",
  // Italy
  /*::[*/
  41: "CH",
  // Switzerland
  /*::[*/
  43: "AT",
  // Austria
  /*::[*/
  44: "GB",
  // United Kingdom
  /*::[*/
  45: "DK",
  // Denmark
  /*::[*/
  46: "SE",
  // Sweden
  /*::[*/
  47: "NO",
  // Norway
  /*::[*/
  48: "PL",
  // Poland
  /*::[*/
  49: "DE",
  // Germany
  /*::[*/
  52: "MX",
  // Mexico
  /*::[*/
  55: "BR",
  // Brazil
  /*::[*/
  61: "AU",
  // Australia
  /*::[*/
  64: "NZ",
  // New Zealand
  /*::[*/
  66: "TH",
  // Thailand
  /*::[*/
  81: "JP",
  // Japan
  /*::[*/
  82: "KR",
  // Korea
  /*::[*/
  84: "VN",
  // Viet Nam
  /*::[*/
  86: "CN",
  // China
  /*::[*/
  90: "TR",
  // Turkey
  /*::[*/
  105: "JS",
  // Ramastan
  /*::[*/
  213: "DZ",
  // Algeria
  /*::[*/
  216: "MA",
  // Morocco
  /*::[*/
  218: "LY",
  // Libya
  /*::[*/
  351: "PT",
  // Portugal
  /*::[*/
  354: "IS",
  // Iceland
  /*::[*/
  358: "FI",
  // Finland
  /*::[*/
  420: "CZ",
  // Czech Republic
  /*::[*/
  886: "TW",
  // Taiwan
  /*::[*/
  961: "LB",
  // Lebanon
  /*::[*/
  962: "JO",
  // Jordan
  /*::[*/
  963: "SY",
  // Syria
  /*::[*/
  964: "IQ",
  // Iraq
  /*::[*/
  965: "KW",
  // Kuwait
  /*::[*/
  966: "SA",
  // Saudi Arabia
  /*::[*/
  971: "AE",
  // United Arab Emirates
  /*::[*/
  972: "IL",
  // Israel
  /*::[*/
  974: "QA",
  // Qatar
  /*::[*/
  981: "IR",
  // Iran
  /*::[*/
  65535: "US"
  // United States
};
var XLSFillPattern = [
  null,
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
];
function rgbify(arr) {
  return arr.map(function(x2) {
    return [x2 >> 16 & 255, x2 >> 8 & 255, x2 & 255];
  });
}
var _XLSIcv = /* @__PURE__ */ rgbify([
  /* Color Constants */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  /* Overridable Defaults */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  /* Other entries to appease BIFF8/12 */
  16777215,
  /* 0x40 icvForeground ?? */
  0,
  /* 0x41 icvBackground ?? */
  0,
  /* 0x42 icvFrame ?? */
  0,
  /* 0x43 icv3D ?? */
  0,
  /* 0x44 icv3DText ?? */
  0,
  /* 0x45 icv3DHilite ?? */
  0,
  /* 0x46 icv3DShadow ?? */
  0,
  /* 0x47 icvHilite ?? */
  0,
  /* 0x48 icvCtlText ?? */
  0,
  /* 0x49 icvCtlScrl ?? */
  0,
  /* 0x4A icvCtlInv ?? */
  0,
  /* 0x4B icvCtlBody ?? */
  0,
  /* 0x4C icvCtlFrame ?? */
  0,
  /* 0x4D icvCtlFore ?? */
  0,
  /* 0x4E icvCtlBack ?? */
  0,
  /* 0x4F icvCtlNeutral */
  0,
  /* 0x50 icvInfoBk ?? */
  0
  /* 0x51 icvInfoText ?? */
]);
var XLSIcv = /* @__PURE__ */ dup(_XLSIcv);
var BErr = {
  /*::[*/
  0: "#NULL!",
  /*::[*/
  7: "#DIV/0!",
  /*::[*/
  15: "#VALUE!",
  /*::[*/
  23: "#REF!",
  /*::[*/
  29: "#NAME?",
  /*::[*/
  36: "#NUM!",
  /*::[*/
  42: "#N/A",
  /*::[*/
  43: "#GETTING_DATA",
  /*::[*/
  255: "#WTF?"
};
var RBErr = {
  "#NULL!": 0,
  "#DIV/0!": 7,
  "#VALUE!": 15,
  "#REF!": 23,
  "#NAME?": 29,
  "#NUM!": 36,
  "#N/A": 42,
  "#GETTING_DATA": 43,
  "#WTF?": 255
};
var ct2type = {
  /* Workbook */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  /* Worksheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  /* Binary Index */
  /* Chartsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  /* Macrosheet */
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  /* Binary Index */
  /* Dialogsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  /* Shared Strings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  /* Styles */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  /* File Properties */
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  /* Custom Data Properties */
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  /* Comments */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  /* Metadata (Stock/Geography and Dynamic Array) */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  /* PivotTable */
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  /* Chart Objects */
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  /* Chart Colors */
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  /* Chart Style */
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  /* Chart Advanced */
  "application/vnd.ms-office.chartex+xml": "TODO",
  /* Calculation Chain */
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  /* Printer Settings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  /* ActiveX */
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  /* Custom Toolbars */
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  /* External Data Connections */
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  /* External Links */
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  /* PivotCache */
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  /* Query Table */
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  /* Shared Workbook */
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  /* Single Cell Table */
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  /* Slicer */
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  /* Sort Map */
  "application/vnd.ms-excel.wsSortMap": "TODO",
  /* Table */
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  /* Themes */
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  /* Theme Override */
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  /* Timeline */
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  /* verify */
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  /* verify */
  /* VBA */
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  /* Volatile Dependencies */
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  /* Control Properties */
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  /* Data Model */
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  /* Survey */
  "application/vnd.ms-excel.Survey+xml": "TODO",
  /* Drawing */
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  /* VML */
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  /* Image */
  "image/png": "TODO",
  "sheet": "js"
};
function new_ct() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function parse_ct(data) {
  var ct = new_ct();
  if (!data || !data.match) return ct;
  var ctext = {};
  (data.match(tagregex) || []).forEach(function(x2) {
    var y2 = parsexmltag(x2);
    switch (y2[0].replace(nsregex, "<")) {
      case "<?xml":
        break;
      case "<Types":
        ct.xmlns = y2["xmlns" + (y2[0].match(/<(\w+):/) || ["", ""])[1]];
        break;
      case "<Default":
        ctext[y2.Extension] = y2.ContentType;
        break;
      case "<Override":
        if (ct[ct2type[y2.ContentType]] !== void 0) ct[ct2type[y2.ContentType]].push(y2.PartName);
        break;
    }
  });
  if (ct.xmlns !== XMLNS.CT) throw new Error("Unknown Namespace: " + ct.xmlns);
  ct.calcchain = ct.calcchains.length > 0 ? ct.calcchains[0] : "";
  ct.sst = ct.strs.length > 0 ? ct.strs[0] : "";
  ct.style = ct.styles.length > 0 ? ct.styles[0] : "";
  ct.defaults = ctext;
  delete ct.calcchains;
  return ct;
}
var RELS = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function get_rels_path(file) {
  var n2 = file.lastIndexOf("/");
  return file.slice(0, n2 + 1) + "_rels/" + file.slice(n2 + 1) + ".rels";
}
function parse_rels(data, currentFilePath) {
  var rels = { "!id": {} };
  if (!data) return rels;
  if (currentFilePath.charAt(0) !== "/") {
    currentFilePath = "/" + currentFilePath;
  }
  var hash = {};
  (data.match(tagregex) || []).forEach(function(x2) {
    var y2 = parsexmltag(x2);
    if (y2[0] === "<Relationship") {
      var rel = {};
      rel.Type = y2.Type;
      rel.Target = y2.Target;
      rel.Id = y2.Id;
      if (y2.TargetMode) rel.TargetMode = y2.TargetMode;
      var canonictarget = y2.TargetMode === "External" ? y2.Target : resolve_path(y2.Target, currentFilePath);
      rels[canonictarget] = rel;
      hash[y2.Id] = rel;
    }
  });
  rels["!id"] = hash;
  return rels;
}
var CT_ODS = "application/vnd.oasis.opendocument.spreadsheet";
function parse_manifest(d, opts) {
  var str = xlml_normalize(d);
  var Rn;
  var FEtag;
  while (Rn = xlmlregex.exec(str)) switch (Rn[3]) {
    case "manifest":
      break;
    case "file-entry":
      FEtag = parsexmltag(Rn[0], false);
      if (FEtag.path == "/" && FEtag.type !== CT_ODS) throw new Error("This OpenDocument is not a spreadsheet");
      break;
    case "encryption-data":
    case "algorithm":
    case "start-key-generation":
    case "key-derivation":
      throw new Error("Unsupported ODS Encryption");
    default:
      if (opts && opts.WTF) throw Rn;
  }
}
var CORE_PROPS = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
];
var CORE_PROPS_REGEX = /* @__PURE__ */ function() {
  var r2 = new Array(CORE_PROPS.length);
  for (var i = 0; i < CORE_PROPS.length; ++i) {
    var f2 = CORE_PROPS[i];
    var g = "(?:" + f2[0].slice(0, f2[0].indexOf(":")) + ":)" + f2[0].slice(f2[0].indexOf(":") + 1);
    r2[i] = new RegExp("<" + g + "[^>]*>([\\s\\S]*?)</" + g + ">");
  }
  return r2;
}();
function parse_core_props(data) {
  var p2 = {};
  data = utf8read(data);
  for (var i = 0; i < CORE_PROPS.length; ++i) {
    var f2 = CORE_PROPS[i], cur = data.match(CORE_PROPS_REGEX[i]);
    if (cur != null && cur.length > 0) p2[f2[1]] = unescapexml(cur[1]);
    if (f2[2] === "date" && p2[f2[1]]) p2[f2[1]] = parseDate(p2[f2[1]]);
  }
  return p2;
}
var EXT_PROPS = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
];
function load_props_pairs(HP, TOP, props, opts) {
  var v2 = [];
  if (typeof HP == "string") v2 = parseVector(HP, opts);
  else for (var j = 0; j < HP.length; ++j) v2 = v2.concat(HP[j].map(function(hp) {
    return { v: hp };
  }));
  var parts = typeof TOP == "string" ? parseVector(TOP, opts).map(function(x2) {
    return x2.v;
  }) : TOP;
  var idx = 0, len = 0;
  if (parts.length > 0) for (var i = 0; i !== v2.length; i += 2) {
    len = +v2[i + 1].v;
    switch (v2[i].v) {
      case "Worksheets":
      case "工作表":
      case "Листы":
      case "أوراق العمل":
      case "ワークシート":
      case "גליונות עבודה":
      case "Arbeitsblätter":
      case "Çalışma Sayfaları":
      case "Feuilles de calcul":
      case "Fogli di lavoro":
      case "Folhas de cálculo":
      case "Planilhas":
      case "Regneark":
      case "Hojas de cálculo":
      case "Werkbladen":
        props.Worksheets = len;
        props.SheetNames = parts.slice(idx, idx + len);
        break;
      case "Named Ranges":
      case "Rangos con nombre":
      case "名前付き一覧":
      case "Benannte Bereiche":
      case "Navngivne områder":
        props.NamedRanges = len;
        props.DefinedNames = parts.slice(idx, idx + len);
        break;
      case "Charts":
      case "Diagramme":
        props.Chartsheets = len;
        props.ChartNames = parts.slice(idx, idx + len);
        break;
    }
    idx += len;
  }
}
function parse_ext_props(data, p2, opts) {
  var q2 = {};
  if (!p2) p2 = {};
  data = utf8read(data);
  EXT_PROPS.forEach(function(f2) {
    var xml = (data.match(matchtag(f2[0])) || [])[1];
    switch (f2[2]) {
      case "string":
        if (xml) p2[f2[1]] = unescapexml(xml);
        break;
      case "bool":
        p2[f2[1]] = xml === "true";
        break;
      case "raw":
        var cur = data.match(new RegExp("<" + f2[0] + "[^>]*>([\\s\\S]*?)</" + f2[0] + ">"));
        if (cur && cur.length > 0) q2[f2[1]] = cur[1];
        break;
    }
  });
  if (q2.HeadingPairs && q2.TitlesOfParts) load_props_pairs(q2.HeadingPairs, q2.TitlesOfParts, p2, opts);
  return p2;
}
var custregex = /<[^>]+>[^<]*/g;
function parse_cust_props(data, opts) {
  var p2 = {}, name = "";
  var m2 = data.match(custregex);
  if (m2) for (var i = 0; i != m2.length; ++i) {
    var x2 = m2[i], y2 = parsexmltag(x2);
    switch (y2[0]) {
      case "<?xml":
        break;
      case "<Properties":
        break;
      case "<property":
        name = unescapexml(y2.name);
        break;
      case "</property>":
        name = null;
        break;
      default:
        if (x2.indexOf("<vt:") === 0) {
          var toks = x2.split(">");
          var type = toks[0].slice(4), text = toks[1];
          switch (type) {
            case "lpstr":
            case "bstr":
            case "lpwstr":
              p2[name] = unescapexml(text);
              break;
            case "bool":
              p2[name] = parsexmlbool(text);
              break;
            case "i1":
            case "i2":
            case "i4":
            case "i8":
            case "int":
            case "uint":
              p2[name] = parseInt(text, 10);
              break;
            case "r4":
            case "r8":
            case "decimal":
              p2[name] = parseFloat(text);
              break;
            case "filetime":
            case "date":
              p2[name] = parseDate(text);
              break;
            case "cy":
            case "error":
              p2[name] = unescapexml(text);
              break;
            default:
              if (type.slice(-1) == "/") break;
              if (opts.WTF && typeof console !== "undefined") console.warn("Unexpected", x2, type, toks);
          }
        } else if (x2.slice(0, 2) === "</") ;
        else if (opts.WTF) throw new Error(x2);
    }
  }
  return p2;
}
var XLMLDocPropsMap = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  /* TotalTime: 'TotalTime', */
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  /* Pages */
  /* Words */
  /* Characters */
  Category: "Category",
  /* PresentationFormat */
  Manager: "Manager",
  Company: "Company",
  /* Guid */
  /* HyperlinkBase */
  /* Bytes */
  /* Lines */
  /* Paragraphs */
  /* CharactersWithSpaces */
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  /* NOTE: missing from schema */
  Identifier: "Identifier",
  /* NOTE: missing from schema */
  Language: "Language"
  /* NOTE: missing from schema */
};
var evert_XLMLDPM;
function xlml_set_prop(Props, tag, val) {
  if (!evert_XLMLDPM) evert_XLMLDPM = evert(XLMLDocPropsMap);
  tag = evert_XLMLDPM[tag] || tag;
  Props[tag] = val;
}
function parse_FILETIME(blob) {
  var dwLowDateTime = blob.read_shift(4), dwHighDateTime = blob.read_shift(4);
  return new Date((dwHighDateTime / 1e7 * Math.pow(2, 32) + dwLowDateTime / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function parse_lpstr(blob, type, pad) {
  var start = blob.l;
  var str = blob.read_shift(0, "lpstr-cp");
  if (pad) while (blob.l - start & 3) ++blob.l;
  return str;
}
function parse_lpwstr(blob, type, pad) {
  var str = blob.read_shift(0, "lpwstr");
  return str;
}
function parse_VtStringBase(blob, stringType, pad) {
  if (stringType === 31) return parse_lpwstr(blob);
  return parse_lpstr(blob, stringType, pad);
}
function parse_VtString(blob, t2, pad) {
  return parse_VtStringBase(blob, t2, pad === false ? 0 : 4);
}
function parse_VtUnalignedString(blob, t2) {
  if (!t2) throw new Error("VtUnalignedString must have positive length");
  return parse_VtStringBase(blob, t2, 0);
}
function parse_VtVecLpwstrValue(blob) {
  var length = blob.read_shift(4);
  var ret = [];
  for (var i = 0; i != length; ++i) {
    var start = blob.l;
    ret[i] = blob.read_shift(0, "lpwstr").replace(chr0, "");
    if (blob.l - start & 2) blob.l += 2;
  }
  return ret;
}
function parse_VtVecUnalignedLpstrValue(blob) {
  var length = blob.read_shift(4);
  var ret = [];
  for (var i = 0; i != length; ++i) ret[i] = blob.read_shift(0, "lpstr-cp").replace(chr0, "");
  return ret;
}
function parse_VtHeadingPair(blob) {
  var start = blob.l;
  var headingString = parse_TypedPropertyValue(blob, VT_USTR);
  if (blob[blob.l] == 0 && blob[blob.l + 1] == 0 && blob.l - start & 2) blob.l += 2;
  var headerParts = parse_TypedPropertyValue(blob, VT_I4);
  return [headingString, headerParts];
}
function parse_VtVecHeadingPairValue(blob) {
  var cElements = blob.read_shift(4);
  var out = [];
  for (var i = 0; i < cElements / 2; ++i) out.push(parse_VtHeadingPair(blob));
  return out;
}
function parse_dictionary(blob, CodePage) {
  var cnt = blob.read_shift(4);
  var dict = {};
  for (var j = 0; j != cnt; ++j) {
    var pid = blob.read_shift(4);
    var len = blob.read_shift(4);
    dict[pid] = blob.read_shift(len, CodePage === 1200 ? "utf16le" : "utf8").replace(chr0, "").replace(chr1, "!");
    if (CodePage === 1200 && len % 2) blob.l += 2;
  }
  if (blob.l & 3) blob.l = blob.l >> 2 + 1 << 2;
  return dict;
}
function parse_BLOB(blob) {
  var size = blob.read_shift(4);
  var bytes = blob.slice(blob.l, blob.l + size);
  blob.l += size;
  if ((size & 3) > 0) blob.l += 4 - (size & 3) & 3;
  return bytes;
}
function parse_ClipboardData(blob) {
  var o = {};
  o.Size = blob.read_shift(4);
  blob.l += o.Size + 3 - (o.Size - 1) % 4;
  return o;
}
function parse_TypedPropertyValue(blob, type, _opts) {
  var t2 = blob.read_shift(2), ret, opts = _opts || {};
  blob.l += 2;
  if (type !== VT_VARIANT) {
    if (t2 !== type && VT_CUSTOM.indexOf(type) === -1 && !((type & 65534) == 4126 && (t2 & 65534) == 4126)) throw new Error("Expected type " + type + " saw " + t2);
  }
  switch (type === VT_VARIANT ? t2 : type) {
    case 2:
      ret = blob.read_shift(2, "i");
      if (!opts.raw) blob.l += 2;
      return ret;
    case 3:
      ret = blob.read_shift(4, "i");
      return ret;
    case 11:
      return blob.read_shift(4) !== 0;
    case 19:
      ret = blob.read_shift(4);
      return ret;
    case 30:
      return parse_lpstr(blob, t2, 4).replace(chr0, "");
    case 31:
      return parse_lpwstr(blob);
    case 64:
      return parse_FILETIME(blob);
    case 65:
      return parse_BLOB(blob);
    case 71:
      return parse_ClipboardData(blob);
    case 80:
      return parse_VtString(blob, t2, !opts.raw).replace(chr0, "");
    case 81:
      return parse_VtUnalignedString(
        blob,
        t2
        /*, 4*/
      ).replace(chr0, "");
    case 4108:
      return parse_VtVecHeadingPairValue(blob);
    case 4126:
    case 4127:
      return t2 == 4127 ? parse_VtVecLpwstrValue(blob) : parse_VtVecUnalignedLpstrValue(blob);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + type + " " + t2);
  }
}
function parse_PropertySet(blob, PIDSI) {
  var start_addr = blob.l;
  var size = blob.read_shift(4);
  var NumProps = blob.read_shift(4);
  var Props = [], i = 0;
  var CodePage = 0;
  var Dictionary = -1, DictObj = {};
  for (i = 0; i != NumProps; ++i) {
    var PropID = blob.read_shift(4);
    var Offset = blob.read_shift(4);
    Props[i] = [PropID, Offset + start_addr];
  }
  Props.sort(function(x2, y2) {
    return x2[1] - y2[1];
  });
  var PropH = {};
  for (i = 0; i != NumProps; ++i) {
    if (blob.l !== Props[i][1]) {
      var fail = true;
      if (i > 0 && PIDSI) switch (PIDSI[Props[i - 1][0]].t) {
        case 2:
          if (blob.l + 2 === Props[i][1]) {
            blob.l += 2;
            fail = false;
          }
          break;
        case 80:
          if (blob.l <= Props[i][1]) {
            blob.l = Props[i][1];
            fail = false;
          }
          break;
        case 4108:
          if (blob.l <= Props[i][1]) {
            blob.l = Props[i][1];
            fail = false;
          }
          break;
      }
      if ((!PIDSI || i == 0) && blob.l <= Props[i][1]) {
        fail = false;
        blob.l = Props[i][1];
      }
      if (fail) throw new Error("Read Error: Expected address " + Props[i][1] + " at " + blob.l + " :" + i);
    }
    if (PIDSI) {
      var piddsi = PIDSI[Props[i][0]];
      PropH[piddsi.n] = parse_TypedPropertyValue(blob, piddsi.t, { raw: true });
      if (piddsi.p === "version") PropH[piddsi.n] = String(PropH[piddsi.n] >> 16) + "." + ("0000" + String(PropH[piddsi.n] & 65535)).slice(-4);
      if (piddsi.n == "CodePage") switch (PropH[piddsi.n]) {
        case 0:
          PropH[piddsi.n] = 1252;
        case 874:
        case 932:
        case 936:
        case 949:
        case 950:
        case 1250:
        case 1251:
        case 1253:
        case 1254:
        case 1255:
        case 1256:
        case 1257:
        case 1258:
        case 1e4:
        case 1200:
        case 1201:
        case 1252:
        case 65e3:
        case -536:
        case 65001:
        case -535:
          set_cp(CodePage = PropH[piddsi.n] >>> 0 & 65535);
          break;
        default:
          throw new Error("Unsupported CodePage: " + PropH[piddsi.n]);
      }
    } else {
      if (Props[i][0] === 1) {
        CodePage = PropH.CodePage = parse_TypedPropertyValue(blob, VT_I2);
        set_cp(CodePage);
        if (Dictionary !== -1) {
          var oldpos = blob.l;
          blob.l = Props[Dictionary][1];
          DictObj = parse_dictionary(blob, CodePage);
          blob.l = oldpos;
        }
      } else if (Props[i][0] === 0) {
        if (CodePage === 0) {
          Dictionary = i;
          blob.l = Props[i + 1][1];
          continue;
        }
        DictObj = parse_dictionary(blob, CodePage);
      } else {
        var name = DictObj[Props[i][0]];
        var val;
        switch (blob[blob.l]) {
          case 65:
            blob.l += 4;
            val = parse_BLOB(blob);
            break;
          case 30:
            blob.l += 4;
            val = parse_VtString(blob, blob[blob.l - 4]).replace(/\u0000+$/, "");
            break;
          case 31:
            blob.l += 4;
            val = parse_VtString(blob, blob[blob.l - 4]).replace(/\u0000+$/, "");
            break;
          case 3:
            blob.l += 4;
            val = blob.read_shift(4, "i");
            break;
          case 19:
            blob.l += 4;
            val = blob.read_shift(4);
            break;
          case 5:
            blob.l += 4;
            val = blob.read_shift(8, "f");
            break;
          case 11:
            blob.l += 4;
            val = parsebool(blob, 4);
            break;
          case 64:
            blob.l += 4;
            val = parseDate(parse_FILETIME(blob));
            break;
          default:
            throw new Error("unparsed value: " + blob[blob.l]);
        }
        PropH[name] = val;
      }
    }
  }
  blob.l = start_addr + size;
  return PropH;
}
function parse_PropertySetStream(file, PIDSI, clsid) {
  var blob = file.content;
  if (!blob) return {};
  prep_blob(blob, 0);
  var NumSets, FMTID0, FMTID1, Offset0, Offset1 = 0;
  blob.chk("feff", "Byte Order: ");
  blob.read_shift(2);
  var SystemIdentifier = blob.read_shift(4);
  var CLSID = blob.read_shift(16);
  if (CLSID !== CFB.utils.consts.HEADER_CLSID && CLSID !== clsid) throw new Error("Bad PropertySet CLSID " + CLSID);
  NumSets = blob.read_shift(4);
  if (NumSets !== 1 && NumSets !== 2) throw new Error("Unrecognized #Sets: " + NumSets);
  FMTID0 = blob.read_shift(16);
  Offset0 = blob.read_shift(4);
  if (NumSets === 1 && Offset0 !== blob.l) throw new Error("Length mismatch: " + Offset0 + " !== " + blob.l);
  else if (NumSets === 2) {
    FMTID1 = blob.read_shift(16);
    Offset1 = blob.read_shift(4);
  }
  var PSet0 = parse_PropertySet(blob, PIDSI);
  var rval = { SystemIdentifier };
  for (var y2 in PSet0) rval[y2] = PSet0[y2];
  rval.FMTID = FMTID0;
  if (NumSets === 1) return rval;
  if (Offset1 - blob.l == 2) blob.l += 2;
  if (blob.l !== Offset1) throw new Error("Length mismatch 2: " + blob.l + " !== " + Offset1);
  var PSet1;
  try {
    PSet1 = parse_PropertySet(blob, null);
  } catch (e) {
  }
  for (y2 in PSet1) rval[y2] = PSet1[y2];
  rval.FMTID = [FMTID0, FMTID1];
  return rval;
}
function parsenoop2(blob, length) {
  blob.read_shift(length);
  return null;
}
function parslurp(blob, length, cb2) {
  var arr = [], target = blob.l + length;
  while (blob.l < target) arr.push(cb2(blob, target - blob.l));
  if (target !== blob.l) throw new Error("Slurp error");
  return arr;
}
function parsebool(blob, length) {
  return blob.read_shift(length) === 1;
}
function parseuint16(blob) {
  return blob.read_shift(2, "u");
}
function parseuint16a(blob, length) {
  return parslurp(blob, length, parseuint16);
}
function parse_Bes(blob) {
  var v2 = blob.read_shift(1), t2 = blob.read_shift(1);
  return t2 === 1 ? v2 : v2 === 1;
}
function parse_ShortXLUnicodeString(blob, length, opts) {
  var cch = blob.read_shift(opts && opts.biff >= 12 ? 2 : 1);
  var encoding = "sbcs-cont";
  if (opts && opts.biff >= 8) ;
  if (!opts || opts.biff == 8) {
    var fHighByte = blob.read_shift(1);
    if (fHighByte) {
      encoding = "dbcs-cont";
    }
  } else if (opts.biff == 12) {
    encoding = "wstr";
  }
  if (opts.biff >= 2 && opts.biff <= 5) encoding = "cpstr";
  var o = cch ? blob.read_shift(cch, encoding) : "";
  return o;
}
function parse_XLUnicodeRichExtendedString(blob) {
  var cch = blob.read_shift(2), flags = blob.read_shift(1);
  var fExtSt = flags & 4, fRichSt = flags & 8;
  var width = 1 + (flags & 1);
  var cRun = 0, cbExtRst;
  var z2 = {};
  if (fRichSt) cRun = blob.read_shift(2);
  if (fExtSt) cbExtRst = blob.read_shift(4);
  var encoding = width == 2 ? "dbcs-cont" : "sbcs-cont";
  var msg = cch === 0 ? "" : blob.read_shift(cch, encoding);
  if (fRichSt) blob.l += 4 * cRun;
  if (fExtSt) blob.l += cbExtRst;
  z2.t = msg;
  if (!fRichSt) {
    z2.raw = "<t>" + z2.t + "</t>";
    z2.r = z2.t;
  }
  return z2;
}
function parse_XLUnicodeStringNoCch(blob, cch, opts) {
  var retval;
  if (opts) {
    if (opts.biff >= 2 && opts.biff <= 5) return blob.read_shift(cch, "cpstr");
    if (opts.biff >= 12) return blob.read_shift(cch, "dbcs-cont");
  }
  var fHighByte = blob.read_shift(1);
  if (fHighByte === 0) {
    retval = blob.read_shift(cch, "sbcs-cont");
  } else {
    retval = blob.read_shift(cch, "dbcs-cont");
  }
  return retval;
}
function parse_XLUnicodeString(blob, length, opts) {
  var cch = blob.read_shift(opts && opts.biff == 2 ? 1 : 2);
  if (cch === 0) {
    blob.l++;
    return "";
  }
  return parse_XLUnicodeStringNoCch(blob, cch, opts);
}
function parse_XLUnicodeString2(blob, length, opts) {
  if (opts.biff > 5) return parse_XLUnicodeString(blob, length, opts);
  var cch = blob.read_shift(1);
  if (cch === 0) {
    blob.l++;
    return "";
  }
  return blob.read_shift(cch, opts.biff <= 4 || !blob.lens ? "cpstr" : "sbcs-cont");
}
function parse_ControlInfo(blob) {
  var flags = blob.read_shift(1);
  blob.l++;
  var accel = blob.read_shift(2);
  blob.l += 2;
  return [flags, accel];
}
function parse_URLMoniker(blob) {
  var len = blob.read_shift(4), start = blob.l;
  var extra = false;
  if (len > 24) {
    blob.l += len - 24;
    if (blob.read_shift(16) === "795881f43b1d7f48af2c825dc4852763") extra = true;
    blob.l = start;
  }
  var url = blob.read_shift((extra ? len - 24 : len) >> 1, "utf16le").replace(chr0, "");
  if (extra) blob.l += 24;
  return url;
}
function parse_FileMoniker(blob) {
  var cAnti = blob.read_shift(2);
  var preamble = "";
  while (cAnti-- > 0) preamble += "../";
  var ansiPath = blob.read_shift(0, "lpstr-ansi");
  blob.l += 2;
  if (blob.read_shift(2) != 57005) throw new Error("Bad FileMoniker");
  var sz = blob.read_shift(4);
  if (sz === 0) return preamble + ansiPath.replace(/\\/g, "/");
  var bytes = blob.read_shift(4);
  if (blob.read_shift(2) != 3) throw new Error("Bad FileMoniker");
  var unicodePath = blob.read_shift(bytes >> 1, "utf16le").replace(chr0, "");
  return preamble + unicodePath;
}
function parse_HyperlinkMoniker(blob, length) {
  var clsid = blob.read_shift(16);
  switch (clsid) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return parse_URLMoniker(blob);
    case "0303000000000000c000000000000046":
      return parse_FileMoniker(blob);
    default:
      throw new Error("Unsupported Moniker " + clsid);
  }
}
function parse_HyperlinkString(blob) {
  var len = blob.read_shift(4);
  var o = len > 0 ? blob.read_shift(len, "utf16le").replace(chr0, "") : "";
  return o;
}
function parse_Hyperlink(blob, length) {
  var end = blob.l + length;
  var sVer = blob.read_shift(4);
  if (sVer !== 2) throw new Error("Unrecognized streamVersion: " + sVer);
  var flags = blob.read_shift(2);
  blob.l += 2;
  var displayName, targetFrameName, moniker, oleMoniker, Loc = "", guid, fileTime;
  if (flags & 16) displayName = parse_HyperlinkString(blob, end - blob.l);
  if (flags & 128) targetFrameName = parse_HyperlinkString(blob, end - blob.l);
  if ((flags & 257) === 257) moniker = parse_HyperlinkString(blob, end - blob.l);
  if ((flags & 257) === 1) oleMoniker = parse_HyperlinkMoniker(blob, end - blob.l);
  if (flags & 8) Loc = parse_HyperlinkString(blob, end - blob.l);
  if (flags & 32) guid = blob.read_shift(16);
  if (flags & 64) fileTime = parse_FILETIME(
    blob
    /*, 8*/
  );
  blob.l = end;
  var target = targetFrameName || moniker || oleMoniker || "";
  if (target && Loc) target += "#" + Loc;
  if (!target) target = "#" + Loc;
  if (flags & 2 && target.charAt(0) == "/" && target.charAt(1) != "/") target = "file://" + target;
  var out = { Target: target };
  if (guid) out.guid = guid;
  if (fileTime) out.time = fileTime;
  if (displayName) out.Tooltip = displayName;
  return out;
}
function parse_LongRGBA(blob) {
  var r2 = blob.read_shift(1), g = blob.read_shift(1), b = blob.read_shift(1), a = blob.read_shift(1);
  return [r2, g, b, a];
}
function parse_LongRGB(blob, length) {
  var x2 = parse_LongRGBA(blob);
  x2[3] = 0;
  return x2;
}
function parse_XLSCell(blob) {
  var rw = blob.read_shift(2);
  var col = blob.read_shift(2);
  var ixfe = blob.read_shift(2);
  return { r: rw, c: col, ixfe };
}
function parse_frtHeader(blob) {
  var rt = blob.read_shift(2);
  var flags = blob.read_shift(2);
  blob.l += 8;
  return { type: rt, flags };
}
function parse_OptXLUnicodeString(blob, length, opts) {
  return length === 0 ? "" : parse_XLUnicodeString2(blob, length, opts);
}
function parse_XTI(blob, length, opts) {
  var w2 = opts.biff > 8 ? 4 : 2;
  var iSupBook = blob.read_shift(w2), itabFirst = blob.read_shift(w2, "i"), itabLast = blob.read_shift(w2, "i");
  return [iSupBook, itabFirst, itabLast];
}
function parse_RkRec(blob) {
  var ixfe = blob.read_shift(2);
  var RK = parse_RkNumber(blob);
  return [ixfe, RK];
}
function parse_AddinUdf(blob, length, opts) {
  blob.l += 4;
  length -= 4;
  var l2 = blob.l + length;
  var udfName = parse_ShortXLUnicodeString(blob, length, opts);
  var cb2 = blob.read_shift(2);
  l2 -= blob.l;
  if (cb2 !== l2) throw new Error("Malformed AddinUdf: padding = " + l2 + " != " + cb2);
  blob.l += cb2;
  return udfName;
}
function parse_Ref8U(blob) {
  var rwFirst = blob.read_shift(2);
  var rwLast = blob.read_shift(2);
  var colFirst = blob.read_shift(2);
  var colLast = blob.read_shift(2);
  return { s: { c: colFirst, r: rwFirst }, e: { c: colLast, r: rwLast } };
}
function parse_RefU(blob) {
  var rwFirst = blob.read_shift(2);
  var rwLast = blob.read_shift(2);
  var colFirst = blob.read_shift(1);
  var colLast = blob.read_shift(1);
  return { s: { c: colFirst, r: rwFirst }, e: { c: colLast, r: rwLast } };
}
var parse_Ref = parse_RefU;
function parse_FtCmo(blob) {
  blob.l += 4;
  var ot = blob.read_shift(2);
  var id2 = blob.read_shift(2);
  var flags = blob.read_shift(2);
  blob.l += 12;
  return [id2, ot, flags];
}
function parse_FtNts(blob) {
  var out = {};
  blob.l += 4;
  blob.l += 16;
  out.fSharedNote = blob.read_shift(2);
  blob.l += 4;
  return out;
}
function parse_FtCf(blob) {
  var out = {};
  blob.l += 4;
  blob.cf = blob.read_shift(2);
  return out;
}
function parse_FtSkip(blob) {
  blob.l += 2;
  blob.l += blob.read_shift(2);
}
var FtTab = {
  /*::[*/
  0: parse_FtSkip,
  /* FtEnd */
  /*::[*/
  4: parse_FtSkip,
  /* FtMacro */
  /*::[*/
  5: parse_FtSkip,
  /* FtButton */
  /*::[*/
  6: parse_FtSkip,
  /* FtGmo */
  /*::[*/
  7: parse_FtCf,
  /* FtCf */
  /*::[*/
  8: parse_FtSkip,
  /* FtPioGrbit */
  /*::[*/
  9: parse_FtSkip,
  /* FtPictFmla */
  /*::[*/
  10: parse_FtSkip,
  /* FtCbls */
  /*::[*/
  11: parse_FtSkip,
  /* FtRbo */
  /*::[*/
  12: parse_FtSkip,
  /* FtSbs */
  /*::[*/
  13: parse_FtNts,
  /* FtNts */
  /*::[*/
  14: parse_FtSkip,
  /* FtSbsFmla */
  /*::[*/
  15: parse_FtSkip,
  /* FtGboData */
  /*::[*/
  16: parse_FtSkip,
  /* FtEdoData */
  /*::[*/
  17: parse_FtSkip,
  /* FtRboData */
  /*::[*/
  18: parse_FtSkip,
  /* FtCblsData */
  /*::[*/
  19: parse_FtSkip,
  /* FtLbsData */
  /*::[*/
  20: parse_FtSkip,
  /* FtCblsFmla */
  /*::[*/
  21: parse_FtCmo
};
function parse_FtArray(blob, length) {
  var tgt = blob.l + length;
  var fts = [];
  while (blob.l < tgt) {
    var ft = blob.read_shift(2);
    blob.l -= 2;
    try {
      fts.push(FtTab[ft](blob, tgt - blob.l));
    } catch (e) {
      blob.l = tgt;
      return fts;
    }
  }
  if (blob.l != tgt) blob.l = tgt;
  return fts;
}
function parse_BOF(blob, length) {
  var o = { BIFFVer: 0, dt: 0 };
  o.BIFFVer = blob.read_shift(2);
  length -= 2;
  if (length >= 2) {
    o.dt = blob.read_shift(2);
    blob.l -= 2;
  }
  switch (o.BIFFVer) {
    case 1536:
    case 1280:
    case 1024:
    case 768:
    case 512:
    case 2:
    case 7:
      break;
    default:
      if (length > 6) throw new Error("Unexpected BIFF Ver " + o.BIFFVer);
  }
  blob.read_shift(length);
  return o;
}
function parse_InterfaceHdr(blob, length) {
  if (length === 0) return 1200;
  if (blob.read_shift(2) !== 1200) ;
  return 1200;
}
function parse_WriteAccess(blob, length, opts) {
  if (opts.enc) {
    blob.l += length;
    return "";
  }
  var l2 = blob.l;
  var UserName = parse_XLUnicodeString2(blob, 0, opts);
  blob.read_shift(length + l2 - blob.l);
  return UserName;
}
function parse_WsBool(blob, length, opts) {
  var flags = opts && opts.biff == 8 || length == 2 ? blob.read_shift(2) : (blob.l += length, 0);
  return { fDialog: flags & 16, fBelow: flags & 64, fRight: flags & 128 };
}
function parse_BoundSheet8(blob, length, opts) {
  var pos = blob.read_shift(4);
  var hidden = blob.read_shift(1) & 3;
  var dt = blob.read_shift(1);
  switch (dt) {
    case 0:
      dt = "Worksheet";
      break;
    case 1:
      dt = "Macrosheet";
      break;
    case 2:
      dt = "Chartsheet";
      break;
    case 6:
      dt = "VBAModule";
      break;
  }
  var name = parse_ShortXLUnicodeString(blob, 0, opts);
  if (name.length === 0) name = "Sheet1";
  return { pos, hs: hidden, dt, name };
}
function parse_SST(blob, length) {
  var end = blob.l + length;
  var cnt = blob.read_shift(4);
  var ucnt = blob.read_shift(4);
  var strs2 = [];
  for (var i = 0; i != ucnt && blob.l < end; ++i) {
    strs2.push(parse_XLUnicodeRichExtendedString(blob));
  }
  strs2.Count = cnt;
  strs2.Unique = ucnt;
  return strs2;
}
function parse_ExtSST(blob, length) {
  var extsst = {};
  extsst.dsst = blob.read_shift(2);
  blob.l += length - 2;
  return extsst;
}
function parse_Row(blob) {
  var z2 = {};
  z2.r = blob.read_shift(2);
  z2.c = blob.read_shift(2);
  z2.cnt = blob.read_shift(2) - z2.c;
  var miyRw = blob.read_shift(2);
  blob.l += 4;
  var flags = blob.read_shift(1);
  blob.l += 3;
  if (flags & 7) z2.level = flags & 7;
  if (flags & 32) z2.hidden = true;
  if (flags & 64) z2.hpt = miyRw / 20;
  return z2;
}
function parse_ForceFullCalculation(blob) {
  var header = parse_frtHeader(blob);
  if (header.type != 2211) throw new Error("Invalid Future Record " + header.type);
  var fullcalc = blob.read_shift(4);
  return fullcalc !== 0;
}
function parse_RecalcId(blob) {
  blob.read_shift(2);
  return blob.read_shift(4);
}
function parse_DefaultRowHeight(blob, length, opts) {
  var f2 = 0;
  if (!(opts && opts.biff == 2)) {
    f2 = blob.read_shift(2);
  }
  var miyRw = blob.read_shift(2);
  if (opts && opts.biff == 2) {
    f2 = 1 - (miyRw >> 15);
    miyRw &= 32767;
  }
  var fl2 = { Unsynced: f2 & 1, DyZero: (f2 & 2) >> 1, ExAsc: (f2 & 4) >> 2, ExDsc: (f2 & 8) >> 3 };
  return [fl2, miyRw];
}
function parse_Window1(blob) {
  var xWn = blob.read_shift(2), yWn = blob.read_shift(2), dxWn = blob.read_shift(2), dyWn = blob.read_shift(2);
  var flags = blob.read_shift(2), iTabCur = blob.read_shift(2), iTabFirst = blob.read_shift(2);
  var ctabSel = blob.read_shift(2), wTabRatio = blob.read_shift(2);
  return {
    Pos: [xWn, yWn],
    Dim: [dxWn, dyWn],
    Flags: flags,
    CurTab: iTabCur,
    FirstTab: iTabFirst,
    Selected: ctabSel,
    TabRatio: wTabRatio
  };
}
function parse_Window2(blob, length, opts) {
  if (opts && opts.biff >= 2 && opts.biff < 5) return {};
  var f2 = blob.read_shift(2);
  return { RTL: f2 & 64 };
}
function parse_Pane() {
}
function parse_Font(blob, length, opts) {
  var o = {
    dyHeight: blob.read_shift(2),
    fl: blob.read_shift(2)
  };
  switch (opts && opts.biff || 8) {
    case 2:
      break;
    case 3:
    case 4:
      blob.l += 2;
      break;
    default:
      blob.l += 10;
      break;
  }
  o.name = parse_ShortXLUnicodeString(blob, 0, opts);
  return o;
}
function parse_LabelSst(blob) {
  var cell = parse_XLSCell(blob);
  cell.isst = blob.read_shift(4);
  return cell;
}
function parse_Label(blob, length, opts) {
  if (opts.biffguess && opts.biff == 2) opts.biff = 5;
  var target = blob.l + length;
  var cell = parse_XLSCell(blob);
  if (opts.biff == 2) blob.l++;
  var str = parse_XLUnicodeString(blob, target - blob.l, opts);
  cell.val = str;
  return cell;
}
function parse_Format(blob, length, opts) {
  var numFmtId = blob.read_shift(2);
  var fmtstr = parse_XLUnicodeString2(blob, 0, opts);
  return [numFmtId, fmtstr];
}
var parse_BIFF2Format = parse_XLUnicodeString2;
function parse_Dimensions(blob, length, opts) {
  var end = blob.l + length;
  var w2 = opts.biff == 8 || !opts.biff ? 4 : 2;
  var r2 = blob.read_shift(w2), R2 = blob.read_shift(w2);
  var c = blob.read_shift(2), C2 = blob.read_shift(2);
  blob.l = end;
  return { s: { r: r2, c }, e: { r: R2, c: C2 } };
}
function parse_RK(blob) {
  var rw = blob.read_shift(2), col = blob.read_shift(2);
  var rkrec = parse_RkRec(blob);
  return { r: rw, c: col, ixfe: rkrec[0], rknum: rkrec[1] };
}
function parse_MulRk(blob, length) {
  var target = blob.l + length - 2;
  var rw = blob.read_shift(2), col = blob.read_shift(2);
  var rkrecs = [];
  while (blob.l < target) rkrecs.push(parse_RkRec(blob));
  if (blob.l !== target) throw new Error("MulRK read error");
  var lastcol = blob.read_shift(2);
  if (rkrecs.length != lastcol - col + 1) throw new Error("MulRK length mismatch");
  return { r: rw, c: col, C: lastcol, rkrec: rkrecs };
}
function parse_MulBlank(blob, length) {
  var target = blob.l + length - 2;
  var rw = blob.read_shift(2), col = blob.read_shift(2);
  var ixfes = [];
  while (blob.l < target) ixfes.push(blob.read_shift(2));
  if (blob.l !== target) throw new Error("MulBlank read error");
  var lastcol = blob.read_shift(2);
  if (ixfes.length != lastcol - col + 1) throw new Error("MulBlank length mismatch");
  return { r: rw, c: col, C: lastcol, ixfe: ixfes };
}
function parse_CellStyleXF(blob, length, style, opts) {
  var o = {};
  var a = blob.read_shift(4), b = blob.read_shift(4);
  var c = blob.read_shift(4), d = blob.read_shift(2);
  o.patternType = XLSFillPattern[c >> 26];
  if (!opts.cellStyles) return o;
  o.alc = a & 7;
  o.fWrap = a >> 3 & 1;
  o.alcV = a >> 4 & 7;
  o.fJustLast = a >> 7 & 1;
  o.trot = a >> 8 & 255;
  o.cIndent = a >> 16 & 15;
  o.fShrinkToFit = a >> 20 & 1;
  o.iReadOrder = a >> 22 & 2;
  o.fAtrNum = a >> 26 & 1;
  o.fAtrFnt = a >> 27 & 1;
  o.fAtrAlc = a >> 28 & 1;
  o.fAtrBdr = a >> 29 & 1;
  o.fAtrPat = a >> 30 & 1;
  o.fAtrProt = a >> 31 & 1;
  o.dgLeft = b & 15;
  o.dgRight = b >> 4 & 15;
  o.dgTop = b >> 8 & 15;
  o.dgBottom = b >> 12 & 15;
  o.icvLeft = b >> 16 & 127;
  o.icvRight = b >> 23 & 127;
  o.grbitDiag = b >> 30 & 3;
  o.icvTop = c & 127;
  o.icvBottom = c >> 7 & 127;
  o.icvDiag = c >> 14 & 127;
  o.dgDiag = c >> 21 & 15;
  o.icvFore = d & 127;
  o.icvBack = d >> 7 & 127;
  o.fsxButton = d >> 14 & 1;
  return o;
}
function parse_XF(blob, length, opts) {
  var o = {};
  o.ifnt = blob.read_shift(2);
  o.numFmtId = blob.read_shift(2);
  o.flags = blob.read_shift(2);
  o.fStyle = o.flags >> 2 & 1;
  length -= 6;
  o.data = parse_CellStyleXF(blob, length, o.fStyle, opts);
  return o;
}
function parse_Guts(blob) {
  blob.l += 4;
  var out = [blob.read_shift(2), blob.read_shift(2)];
  if (out[0] !== 0) out[0]--;
  if (out[1] !== 0) out[1]--;
  if (out[0] > 7 || out[1] > 7) throw new Error("Bad Gutters: " + out.join("|"));
  return out;
}
function parse_BoolErr(blob, length, opts) {
  var cell = parse_XLSCell(blob);
  if (opts.biff == 2 || length == 9) ++blob.l;
  var val = parse_Bes(blob);
  cell.val = val;
  cell.t = val === true || val === false ? "b" : "e";
  return cell;
}
function parse_Number(blob, length, opts) {
  if (opts.biffguess && opts.biff == 2) opts.biff = 5;
  var cell = parse_XLSCell(blob);
  var xnum = parse_Xnum(blob);
  cell.val = xnum;
  return cell;
}
var parse_XLHeaderFooter = parse_OptXLUnicodeString;
function parse_SupBook(blob, length, opts) {
  var end = blob.l + length;
  var ctab = blob.read_shift(2);
  var cch = blob.read_shift(2);
  opts.sbcch = cch;
  if (cch == 1025 || cch == 14849) return [cch, ctab];
  if (cch < 1 || cch > 255) throw new Error("Unexpected SupBook type: " + cch);
  var virtPath = parse_XLUnicodeStringNoCch(blob, cch);
  var rgst = [];
  while (end > blob.l) rgst.push(parse_XLUnicodeString(blob));
  return [cch, ctab, virtPath, rgst];
}
function parse_ExternName(blob, length, opts) {
  var flags = blob.read_shift(2);
  var body;
  var o = {
    fBuiltIn: flags & 1,
    fWantAdvise: flags >>> 1 & 1,
    fWantPict: flags >>> 2 & 1,
    fOle: flags >>> 3 & 1,
    fOleLink: flags >>> 4 & 1,
    cf: flags >>> 5 & 1023,
    fIcon: flags >>> 15 & 1
  };
  if (opts.sbcch === 14849) body = parse_AddinUdf(blob, length - 2, opts);
  o.body = body || blob.read_shift(length - 2);
  if (typeof body === "string") o.Name = body;
  return o;
}
var XLSLblBuiltIn = [
  "_xlnm.Consolidate_Area",
  "_xlnm.Auto_Open",
  "_xlnm.Auto_Close",
  "_xlnm.Extract",
  "_xlnm.Database",
  "_xlnm.Criteria",
  "_xlnm.Print_Area",
  "_xlnm.Print_Titles",
  "_xlnm.Recorder",
  "_xlnm.Data_Form",
  "_xlnm.Auto_Activate",
  "_xlnm.Auto_Deactivate",
  "_xlnm.Sheet_Title",
  "_xlnm._FilterDatabase"
];
function parse_Lbl(blob, length, opts) {
  var target = blob.l + length;
  var flags = blob.read_shift(2);
  var chKey = blob.read_shift(1);
  var cch = blob.read_shift(1);
  var cce = blob.read_shift(opts && opts.biff == 2 ? 1 : 2);
  var itab = 0;
  if (!opts || opts.biff >= 5) {
    if (opts.biff != 5) blob.l += 2;
    itab = blob.read_shift(2);
    if (opts.biff == 5) blob.l += 2;
    blob.l += 4;
  }
  var name = parse_XLUnicodeStringNoCch(blob, cch, opts);
  if (flags & 32) name = XLSLblBuiltIn[name.charCodeAt(0)];
  var npflen = target - blob.l;
  if (opts && opts.biff == 2) --npflen;
  var rgce = target == blob.l || cce === 0 || !(npflen > 0) ? [] : parse_NameParsedFormula(blob, npflen, opts, cce);
  return {
    chKey,
    Name: name,
    itab,
    rgce
  };
}
function parse_ExternSheet(blob, length, opts) {
  if (opts.biff < 8) return parse_BIFF5ExternSheet(blob, length, opts);
  var o = [], target = blob.l + length, len = blob.read_shift(opts.biff > 8 ? 4 : 2);
  while (len-- !== 0) o.push(parse_XTI(blob, opts.biff > 8 ? 12 : 6, opts));
  if (blob.l != target) throw new Error("Bad ExternSheet: " + blob.l + " != " + target);
  return o;
}
function parse_BIFF5ExternSheet(blob, length, opts) {
  if (blob[blob.l + 1] == 3) blob[blob.l]++;
  var o = parse_ShortXLUnicodeString(blob, length, opts);
  return o.charCodeAt(0) == 3 ? o.slice(1) : o;
}
function parse_NameCmt(blob, length, opts) {
  if (opts.biff < 8) {
    blob.l += length;
    return;
  }
  var cchName = blob.read_shift(2);
  var cchComment = blob.read_shift(2);
  var name = parse_XLUnicodeStringNoCch(blob, cchName, opts);
  var comment = parse_XLUnicodeStringNoCch(blob, cchComment, opts);
  return [name, comment];
}
function parse_ShrFmla(blob, length, opts) {
  var ref = parse_RefU(blob);
  blob.l++;
  var cUse = blob.read_shift(1);
  length -= 8;
  return [parse_SharedParsedFormula(blob, length, opts), cUse, ref];
}
function parse_Array(blob, length, opts) {
  var ref = parse_Ref(blob);
  switch (opts.biff) {
    case 2:
      blob.l++;
      length -= 7;
      break;
    case 3:
    case 4:
      blob.l += 2;
      length -= 8;
      break;
    default:
      blob.l += 6;
      length -= 12;
  }
  return [ref, parse_ArrayParsedFormula(blob, length, opts)];
}
function parse_MTRSettings(blob) {
  var fMTREnabled = blob.read_shift(4) !== 0;
  var fUserSetThreadCount = blob.read_shift(4) !== 0;
  var cUserThreadCount = blob.read_shift(4);
  return [fMTREnabled, fUserSetThreadCount, cUserThreadCount];
}
function parse_NoteSh(blob, length, opts) {
  if (opts.biff < 8) return;
  var row = blob.read_shift(2), col = blob.read_shift(2);
  var flags = blob.read_shift(2), idObj = blob.read_shift(2);
  var stAuthor = parse_XLUnicodeString2(blob, 0, opts);
  if (opts.biff < 8) blob.read_shift(1);
  return [{ r: row, c: col }, stAuthor, idObj, flags];
}
function parse_Note(blob, length, opts) {
  return parse_NoteSh(blob, length, opts);
}
function parse_MergeCells(blob, length) {
  var merges = [];
  var cmcs = blob.read_shift(2);
  while (cmcs--) merges.push(parse_Ref8U(blob));
  return merges;
}
function parse_Obj(blob, length, opts) {
  if (opts && opts.biff < 8) return parse_BIFF5Obj(blob, length, opts);
  var cmo = parse_FtCmo(blob);
  var fts = parse_FtArray(blob, length - 22, cmo[1]);
  return { cmo, ft: fts };
}
var parse_BIFF5OT = {
  8: function(blob, length) {
    var tgt = blob.l + length;
    blob.l += 10;
    var cf2 = blob.read_shift(2);
    blob.l += 4;
    blob.l += 2;
    blob.l += 2;
    blob.l += 2;
    blob.l += 4;
    var cchName = blob.read_shift(1);
    blob.l += cchName;
    blob.l = tgt;
    return { fmt: cf2 };
  }
};
function parse_BIFF5Obj(blob, length, opts) {
  blob.l += 4;
  var ot = blob.read_shift(2);
  var id2 = blob.read_shift(2);
  var grbit = blob.read_shift(2);
  blob.l += 2;
  blob.l += 2;
  blob.l += 2;
  blob.l += 2;
  blob.l += 2;
  blob.l += 2;
  blob.l += 2;
  blob.l += 2;
  blob.l += 2;
  blob.l += 6;
  length -= 36;
  var fts = [];
  fts.push((parse_BIFF5OT[ot] || parsenoop)(blob, length, opts));
  return { cmo: [id2, ot, grbit], ft: fts };
}
function parse_TxO(blob, length, opts) {
  var s = blob.l;
  var texts = "";
  try {
    blob.l += 4;
    var ot = (opts.lastobj || { cmo: [0, 0] }).cmo[1];
    var controlInfo;
    if ([0, 5, 7, 11, 12, 14].indexOf(ot) == -1) blob.l += 6;
    else controlInfo = parse_ControlInfo(blob, 6, opts);
    var cchText = blob.read_shift(2);
    blob.read_shift(2);
    parseuint16(blob, 2);
    var len = blob.read_shift(2);
    blob.l += len;
    for (var i = 1; i < blob.lens.length - 1; ++i) {
      if (blob.l - s != blob.lens[i]) throw new Error("TxO: bad continue record");
      var hdr = blob[blob.l];
      var t2 = parse_XLUnicodeStringNoCch(blob, blob.lens[i + 1] - blob.lens[i] - 1);
      texts += t2;
      if (texts.length >= (hdr ? cchText : 2 * cchText)) break;
    }
    if (texts.length !== cchText && texts.length !== cchText * 2) {
      throw new Error("cchText: " + cchText + " != " + texts.length);
    }
    blob.l = s + length;
    return { t: texts };
  } catch (e) {
    blob.l = s + length;
    return { t: texts };
  }
}
function parse_HLink(blob, length) {
  var ref = parse_Ref8U(blob);
  blob.l += 16;
  var hlink = parse_Hyperlink(blob, length - 24);
  return [ref, hlink];
}
function parse_HLinkTooltip(blob, length) {
  blob.read_shift(2);
  var ref = parse_Ref8U(blob);
  var wzTooltip = blob.read_shift((length - 10) / 2, "dbcs-cont");
  wzTooltip = wzTooltip.replace(chr0, "");
  return [ref, wzTooltip];
}
function parse_Country(blob) {
  var o = [0, 0], d;
  d = blob.read_shift(2);
  o[0] = CountryEnum[d] || d;
  d = blob.read_shift(2);
  o[1] = CountryEnum[d] || d;
  return o;
}
function parse_ClrtClient(blob) {
  var ccv = blob.read_shift(2);
  var o = [];
  while (ccv-- > 0) o.push(parse_LongRGB(blob));
  return o;
}
function parse_Palette(blob) {
  var ccv = blob.read_shift(2);
  var o = [];
  while (ccv-- > 0) o.push(parse_LongRGB(blob));
  return o;
}
function parse_XFCRC(blob) {
  blob.l += 2;
  var o = { cxfs: 0, crc: 0 };
  o.cxfs = blob.read_shift(2);
  o.crc = blob.read_shift(4);
  return o;
}
function parse_ColInfo(blob, length, opts) {
  if (!opts.cellStyles) return parsenoop(blob, length);
  var w2 = opts && opts.biff >= 12 ? 4 : 2;
  var colFirst = blob.read_shift(w2);
  var colLast = blob.read_shift(w2);
  var coldx = blob.read_shift(w2);
  var ixfe = blob.read_shift(w2);
  var flags = blob.read_shift(2);
  if (w2 == 2) blob.l += 2;
  var o = { s: colFirst, e: colLast, w: coldx, ixfe, flags };
  if (opts.biff >= 5 || !opts.biff) o.level = flags >> 8 & 7;
  return o;
}
function parse_Setup(blob, length) {
  var o = {};
  if (length < 32) return o;
  blob.l += 16;
  o.header = parse_Xnum(blob);
  o.footer = parse_Xnum(blob);
  blob.l += 2;
  return o;
}
function parse_ShtProps(blob, length, opts) {
  var def = { area: false };
  if (opts.biff != 5) {
    blob.l += length;
    return def;
  }
  var d = blob.read_shift(1);
  blob.l += 3;
  if (d & 16) def.area = true;
  return def;
}
var parse_Blank = parse_XLSCell;
var parse_Scl = parseuint16a;
var parse_String = parse_XLUnicodeString;
function parse_ImData(blob) {
  var cf2 = blob.read_shift(2);
  var env = blob.read_shift(2);
  var lcb = blob.read_shift(4);
  var o = { fmt: cf2, env, len: lcb, data: blob.slice(blob.l, blob.l + lcb) };
  blob.l += lcb;
  return o;
}
function parse_BIFF2STR(blob, length, opts) {
  if (opts.biffguess && opts.biff == 5) opts.biff = 2;
  var cell = parse_XLSCell(blob);
  ++blob.l;
  var str = parse_XLUnicodeString2(blob, length - 7, opts);
  cell.t = "str";
  cell.val = str;
  return cell;
}
function parse_BIFF2NUM(blob) {
  var cell = parse_XLSCell(blob);
  ++blob.l;
  var num = parse_Xnum(blob);
  cell.t = "n";
  cell.val = num;
  return cell;
}
function parse_BIFF2INT(blob) {
  var cell = parse_XLSCell(blob);
  ++blob.l;
  var num = blob.read_shift(2);
  cell.t = "n";
  cell.val = num;
  return cell;
}
function parse_BIFF2STRING(blob) {
  var cch = blob.read_shift(1);
  if (cch === 0) {
    blob.l++;
    return "";
  }
  return blob.read_shift(cch, "sbcs-cont");
}
function parse_BIFF2FONTXTRA(blob, length) {
  blob.l += 6;
  blob.l += 2;
  blob.l += 1;
  blob.l += 3;
  blob.l += 1;
  blob.l += length - 13;
}
function parse_RString(blob, length, opts) {
  var end = blob.l + length;
  var cell = parse_XLSCell(blob);
  var cch = blob.read_shift(2);
  var str = parse_XLUnicodeStringNoCch(blob, cch, opts);
  blob.l = end;
  cell.t = "str";
  cell.val = str;
  return cell;
}
var DBF_SUPPORTED_VERSIONS = [2, 3, 48, 49, 131, 139, 140, 245];
var DBF = /* @__PURE__ */ function() {
  var dbf_codepage_map = {
    /* Code Pages Supported by Visual FoxPro */
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /* shapefile DBF extension */
    /*::[*/
    0: 20127,
    /*::[*/
    8: 865,
    /*::[*/
    9: 437,
    /*::[*/
    10: 850,
    /*::[*/
    11: 437,
    /*::[*/
    13: 437,
    /*::[*/
    14: 850,
    /*::[*/
    15: 437,
    /*::[*/
    16: 850,
    /*::[*/
    17: 437,
    /*::[*/
    18: 850,
    /*::[*/
    19: 932,
    /*::[*/
    20: 850,
    /*::[*/
    21: 437,
    /*::[*/
    22: 850,
    /*::[*/
    23: 865,
    /*::[*/
    24: 437,
    /*::[*/
    25: 437,
    /*::[*/
    26: 850,
    /*::[*/
    27: 437,
    /*::[*/
    28: 863,
    /*::[*/
    29: 850,
    /*::[*/
    31: 852,
    /*::[*/
    34: 852,
    /*::[*/
    35: 852,
    /*::[*/
    36: 860,
    /*::[*/
    37: 850,
    /*::[*/
    38: 866,
    /*::[*/
    55: 850,
    /*::[*/
    64: 852,
    /*::[*/
    77: 936,
    /*::[*/
    78: 949,
    /*::[*/
    79: 950,
    /*::[*/
    80: 874,
    /*::[*/
    87: 1252,
    /*::[*/
    88: 1252,
    /*::[*/
    89: 1252,
    /*::[*/
    108: 863,
    /*::[*/
    134: 737,
    /*::[*/
    135: 852,
    /*::[*/
    136: 857,
    /*::[*/
    204: 1257,
    /*::[*/
    255: 16969
  };
  var dbf_reverse_map = evert({
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /*::[*/
    0: 20127
  });
  function dbf_to_aoa(buf, opts) {
    var out = [];
    var d = new_raw_buf(1);
    switch (opts.type) {
      case "base64":
        d = s2a(Base64_decode(buf));
        break;
      case "binary":
        d = s2a(buf);
        break;
      case "buffer":
      case "array":
        d = buf;
        break;
    }
    prep_blob(d, 0);
    var ft = d.read_shift(1);
    var memo = !!(ft & 136);
    var vfp = false, l7 = false;
    switch (ft) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        vfp = true;
        memo = true;
        break;
      case 49:
        vfp = true;
        memo = true;
        break;
      case 131:
        break;
      case 139:
        break;
      case 140:
        l7 = true;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + ft.toString(16));
    }
    var nrow = 0, fpos = 521;
    if (ft == 2) nrow = d.read_shift(2);
    d.l += 3;
    if (ft != 2) nrow = d.read_shift(4);
    if (nrow > 1048576) nrow = 1e6;
    if (ft != 2) fpos = d.read_shift(2);
    var rlen = d.read_shift(2);
    var current_cp = opts.codepage || 1252;
    if (ft != 2) {
      d.l += 16;
      d.read_shift(1);
      if (d[d.l] !== 0) current_cp = dbf_codepage_map[d[d.l]];
      d.l += 1;
      d.l += 2;
    }
    if (l7) d.l += 36;
    var fields = [], field = {};
    var hend = Math.min(d.length, ft == 2 ? 521 : fpos - 10 - (vfp ? 264 : 0));
    var ww = l7 ? 32 : 11;
    while (d.l < hend && d[d.l] != 13) {
      field = {};
      field.name = $cptable.utils.decode(current_cp, d.slice(d.l, d.l + ww)).replace(/[\u0000\r\n].*$/g, "");
      d.l += ww;
      field.type = String.fromCharCode(d.read_shift(1));
      if (ft != 2 && !l7) field.offset = d.read_shift(4);
      field.len = d.read_shift(1);
      if (ft == 2) field.offset = d.read_shift(2);
      field.dec = d.read_shift(1);
      if (field.name.length) fields.push(field);
      if (ft != 2) d.l += l7 ? 13 : 14;
      switch (field.type) {
        case "B":
          if ((!vfp || field.len != 8) && opts.WTF) console.log("Skipping " + field.name + ":" + field.type);
          break;
        case "G":
        case "P":
          if (opts.WTF) console.log("Skipping " + field.name + ":" + field.type);
          break;
        case "+":
        case "0":
        case "@":
        case "C":
        case "D":
        case "F":
        case "I":
        case "L":
        case "M":
        case "N":
        case "O":
        case "T":
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + field.type);
      }
    }
    if (d[d.l] !== 13) d.l = fpos - 1;
    if (d.read_shift(1) !== 13) throw new Error("DBF Terminator not found " + d.l + " " + d[d.l]);
    d.l = fpos;
    var R2 = 0, C2 = 0;
    out[0] = [];
    for (C2 = 0; C2 != fields.length; ++C2) out[0][C2] = fields[C2].name;
    while (nrow-- > 0) {
      if (d[d.l] === 42) {
        d.l += rlen;
        continue;
      }
      ++d.l;
      out[++R2] = [];
      C2 = 0;
      for (C2 = 0; C2 != fields.length; ++C2) {
        var dd2 = d.slice(d.l, d.l + fields[C2].len);
        d.l += fields[C2].len;
        prep_blob(dd2, 0);
        var s = $cptable.utils.decode(current_cp, dd2);
        switch (fields[C2].type) {
          case "C":
            if (s.trim().length) out[R2][C2] = s.replace(/\s+$/, "");
            break;
          case "D":
            if (s.length === 8) out[R2][C2] = new Date(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8));
            else out[R2][C2] = s;
            break;
          case "F":
            out[R2][C2] = parseFloat(s.trim());
            break;
          case "+":
          case "I":
            out[R2][C2] = l7 ? dd2.read_shift(-4, "i") ^ 2147483648 : dd2.read_shift(4, "i");
            break;
          case "L":
            switch (s.trim().toUpperCase()) {
              case "Y":
              case "T":
                out[R2][C2] = true;
                break;
              case "N":
              case "F":
                out[R2][C2] = false;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + s + "|");
            }
            break;
          case "M":
            if (!memo) throw new Error("DBF Unexpected MEMO for type " + ft.toString(16));
            out[R2][C2] = "##MEMO##" + (l7 ? parseInt(s.trim(), 10) : dd2.read_shift(4));
            break;
          case "N":
            s = s.replace(/\u0000/g, "").trim();
            if (s && s != ".") out[R2][C2] = +s || 0;
            break;
          case "@":
            out[R2][C2] = new Date(dd2.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            out[R2][C2] = new Date((dd2.read_shift(4) - 2440588) * 864e5 + dd2.read_shift(4));
            break;
          case "Y":
            out[R2][C2] = dd2.read_shift(4, "i") / 1e4 + dd2.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            out[R2][C2] = -dd2.read_shift(-8, "f");
            break;
          case "B":
            if (vfp && fields[C2].len == 8) {
              out[R2][C2] = dd2.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            dd2.l += fields[C2].len;
            break;
          case "0":
            if (fields[C2].name === "_NullFlags") break;
          default:
            throw new Error("DBF Unsupported data type " + fields[C2].type);
        }
      }
    }
    if (ft != 2) {
      if (d.l < d.length && d[d.l++] != 26) throw new Error("DBF EOF Marker missing " + (d.l - 1) + " of " + d.length + " " + d[d.l - 1].toString(16));
    }
    if (opts && opts.sheetRows) out = out.slice(0, opts.sheetRows);
    opts.DBF = fields;
    return out;
  }
  function dbf_to_sheet(buf, opts) {
    var o = opts || {};
    if (!o.dateNF) o.dateNF = "yyyymmdd";
    var ws = aoa_to_sheet(dbf_to_aoa(buf, o), o);
    ws["!cols"] = o.DBF.map(function(field) {
      return {
        wch: field.len,
        DBF: field
      };
    });
    delete o.DBF;
    return ws;
  }
  function dbf_to_workbook(buf, opts) {
    try {
      return sheet_to_workbook(dbf_to_sheet(buf, opts), opts);
    } catch (e) {
      if (opts && opts.WTF) throw e;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var _RLEN = { "B": 8, "C": 250, "L": 1, "D": 8, "?": 0, "": 0 };
  function sheet_to_dbf(ws, opts) {
    var o = opts || {};
    if (+o.codepage >= 0) set_cp(+o.codepage);
    if (o.type == "string") throw new Error("Cannot write DBF to JS string");
    var ba = buf_array();
    var aoa = sheet_to_json(ws, { header: 1, raw: true, cellDates: true });
    var headers = aoa[0], data = aoa.slice(1), cols = ws["!cols"] || [];
    var i = 0, j = 0, hcnt = 0, rlen = 1;
    for (i = 0; i < headers.length; ++i) {
      if (((cols[i] || {}).DBF || {}).name) {
        headers[i] = cols[i].DBF.name;
        ++hcnt;
        continue;
      }
      if (headers[i] == null) continue;
      ++hcnt;
      if (typeof headers[i] === "number") headers[i] = headers[i].toString(10);
      if (typeof headers[i] !== "string") throw new Error("DBF Invalid column name " + headers[i] + " |" + typeof headers[i] + "|");
      if (headers.indexOf(headers[i]) !== i) {
        for (j = 0; j < 1024; ++j)
          if (headers.indexOf(headers[i] + "_" + j) == -1) {
            headers[i] += "_" + j;
            break;
          }
      }
    }
    var range = safe_decode_range(ws["!ref"]);
    var coltypes = [];
    var colwidths = [];
    var coldecimals = [];
    for (i = 0; i <= range.e.c - range.s.c; ++i) {
      var guess = "", _guess = "", maxlen = 0;
      var col = [];
      for (j = 0; j < data.length; ++j) {
        if (data[j][i] != null) col.push(data[j][i]);
      }
      if (col.length == 0 || headers[i] == null) {
        coltypes[i] = "?";
        continue;
      }
      for (j = 0; j < col.length; ++j) {
        switch (typeof col[j]) {
          case "number":
            _guess = "B";
            break;
          case "string":
            _guess = "C";
            break;
          case "boolean":
            _guess = "L";
            break;
          case "object":
            _guess = col[j] instanceof Date ? "D" : "C";
            break;
          default:
            _guess = "C";
        }
        maxlen = Math.max(maxlen, String(col[j]).length);
        guess = guess && guess != _guess ? "C" : _guess;
      }
      if (maxlen > 250) maxlen = 250;
      _guess = ((cols[i] || {}).DBF || {}).type;
      if (_guess == "C") {
        if (cols[i].DBF.len > maxlen) maxlen = cols[i].DBF.len;
      }
      if (guess == "B" && _guess == "N") {
        guess = "N";
        coldecimals[i] = cols[i].DBF.dec;
        maxlen = cols[i].DBF.len;
      }
      colwidths[i] = guess == "C" || _guess == "N" ? maxlen : _RLEN[guess] || 0;
      rlen += colwidths[i];
      coltypes[i] = guess;
    }
    var h = ba.next(32);
    h.write_shift(4, 318902576);
    h.write_shift(4, data.length);
    h.write_shift(2, 296 + 32 * hcnt);
    h.write_shift(2, rlen);
    for (i = 0; i < 4; ++i) h.write_shift(4, 0);
    h.write_shift(4, 0 | (+dbf_reverse_map[
      /*::String(*/
      current_ansi
      /*::)*/
    ] || 3) << 8);
    for (i = 0, j = 0; i < headers.length; ++i) {
      if (headers[i] == null) continue;
      var hf = ba.next(32);
      var _f = (headers[i].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
      hf.write_shift(1, _f, "sbcs");
      hf.write_shift(1, coltypes[i] == "?" ? "C" : coltypes[i], "sbcs");
      hf.write_shift(4, j);
      hf.write_shift(1, colwidths[i] || _RLEN[coltypes[i]] || 0);
      hf.write_shift(1, coldecimals[i] || 0);
      hf.write_shift(1, 2);
      hf.write_shift(4, 0);
      hf.write_shift(1, 0);
      hf.write_shift(4, 0);
      hf.write_shift(4, 0);
      j += colwidths[i] || _RLEN[coltypes[i]] || 0;
    }
    var hb2 = ba.next(264);
    hb2.write_shift(4, 13);
    for (i = 0; i < 65; ++i) hb2.write_shift(4, 0);
    for (i = 0; i < data.length; ++i) {
      var rout = ba.next(rlen);
      rout.write_shift(1, 0);
      for (j = 0; j < headers.length; ++j) {
        if (headers[j] == null) continue;
        switch (coltypes[j]) {
          case "L":
            rout.write_shift(1, data[i][j] == null ? 63 : data[i][j] ? 84 : 70);
            break;
          case "B":
            rout.write_shift(8, data[i][j] || 0, "f");
            break;
          case "N":
            var _n = "0";
            if (typeof data[i][j] == "number") _n = data[i][j].toFixed(coldecimals[j] || 0);
            for (hcnt = 0; hcnt < colwidths[j] - _n.length; ++hcnt) rout.write_shift(1, 32);
            rout.write_shift(1, _n, "sbcs");
            break;
          case "D":
            if (!data[i][j]) rout.write_shift(8, "00000000", "sbcs");
            else {
              rout.write_shift(4, ("0000" + data[i][j].getFullYear()).slice(-4), "sbcs");
              rout.write_shift(2, ("00" + (data[i][j].getMonth() + 1)).slice(-2), "sbcs");
              rout.write_shift(2, ("00" + data[i][j].getDate()).slice(-2), "sbcs");
            }
            break;
          case "C":
            var _s = String(data[i][j] != null ? data[i][j] : "").slice(0, colwidths[j]);
            rout.write_shift(1, _s, "sbcs");
            for (hcnt = 0; hcnt < colwidths[j] - _s.length; ++hcnt) rout.write_shift(1, 32);
            break;
        }
      }
    }
    ba.next(1).write_shift(1, 26);
    return ba.end();
  }
  return {
    to_workbook: dbf_to_workbook,
    to_sheet: dbf_to_sheet,
    from_sheet: sheet_to_dbf
  };
}();
var SYLK = /* @__PURE__ */ function() {
  var sylk_escapes = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    /*::[*/
    0: 176,
    /*::[*/
    1: 177,
    /*::[*/
    2: 178,
    /*::[*/
    3: 179,
    /*::[*/
    5: 181,
    /*::[*/
    6: 182,
    /*::[*/
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  };
  var sylk_char_regex = new RegExp("\x1BN(" + keys(sylk_escapes).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");
  var sylk_char_fn = function(_, $1) {
    var o = sylk_escapes[$1];
    return typeof o == "number" ? _getansi(o) : o;
  };
  var decode_sylk_char = function($$, $1, $2) {
    var newcc = $1.charCodeAt(0) - 32 << 4 | $2.charCodeAt(0) - 48;
    return newcc == 59 ? $$ : _getansi(newcc);
  };
  sylk_escapes["|"] = 254;
  function sylk_to_aoa(d, opts) {
    switch (opts.type) {
      case "base64":
        return sylk_to_aoa_str(Base64_decode(d), opts);
      case "binary":
        return sylk_to_aoa_str(d, opts);
      case "buffer":
        return sylk_to_aoa_str(has_buf && Buffer.isBuffer(d) ? d.toString("binary") : a2s(d), opts);
      case "array":
        return sylk_to_aoa_str(cc2str(d), opts);
    }
    throw new Error("Unrecognized type " + opts.type);
  }
  function sylk_to_aoa_str(str, opts) {
    var records = str.split(/[\n\r]+/), R2 = -1, C2 = -1, ri2 = 0, rj2 = 0, arr = [];
    var formats = [];
    var next_cell_format = null;
    var sht = {}, rowinfo = [], colinfo = [], cw = [];
    var Mval = 0, j;
    if (+opts.codepage >= 0) set_cp(+opts.codepage);
    for (; ri2 !== records.length; ++ri2) {
      Mval = 0;
      var rstr = records[ri2].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, decode_sylk_char).replace(sylk_char_regex, sylk_char_fn);
      var record = rstr.replace(/;;/g, "\0").split(";").map(function(x2) {
        return x2.replace(/\u0000/g, ";");
      });
      var RT = record[0], val;
      if (rstr.length > 0) switch (RT) {
        case "ID":
          break;
        case "E":
          break;
        case "B":
          break;
        case "O":
          break;
        case "W":
          break;
        case "P":
          if (record[1].charAt(0) == "P")
            formats.push(rstr.slice(3).replace(/;;/g, ";"));
          break;
        case "C":
          var C_seen_K = false, C_seen_X = false, C_seen_S = false, C_seen_E = false, _R = -1, _C = -1;
          for (rj2 = 1; rj2 < record.length; ++rj2) switch (record[rj2].charAt(0)) {
            case "A":
              break;
            case "X":
              C2 = parseInt(record[rj2].slice(1)) - 1;
              C_seen_X = true;
              break;
            case "Y":
              R2 = parseInt(record[rj2].slice(1)) - 1;
              if (!C_seen_X) C2 = 0;
              for (j = arr.length; j <= R2; ++j) arr[j] = [];
              break;
            case "K":
              val = record[rj2].slice(1);
              if (val.charAt(0) === '"') val = val.slice(1, val.length - 1);
              else if (val === "TRUE") val = true;
              else if (val === "FALSE") val = false;
              else if (!isNaN(fuzzynum(val))) {
                val = fuzzynum(val);
                if (next_cell_format !== null && fmt_is_date(next_cell_format)) val = numdate(val);
              } else if (!isNaN(fuzzydate(val).getDate())) {
                val = parseDate(val);
              }
              C_seen_K = true;
              break;
            case "E":
              C_seen_E = true;
              var formula = rc_to_a1(record[rj2].slice(1), { r: R2, c: C2 });
              arr[R2][C2] = [arr[R2][C2], formula];
              break;
            case "S":
              C_seen_S = true;
              arr[R2][C2] = [arr[R2][C2], "S5S"];
              break;
            case "G":
              break;
            case "R":
              _R = parseInt(record[rj2].slice(1)) - 1;
              break;
            case "C":
              _C = parseInt(record[rj2].slice(1)) - 1;
              break;
            default:
              if (opts && opts.WTF) throw new Error("SYLK bad record " + rstr);
          }
          if (C_seen_K) {
            if (arr[R2][C2] && arr[R2][C2].length == 2) arr[R2][C2][0] = val;
            else arr[R2][C2] = val;
            next_cell_format = null;
          }
          if (C_seen_S) {
            if (C_seen_E) throw new Error("SYLK shared formula cannot have own formula");
            var shrbase = _R > -1 && arr[_R][_C];
            if (!shrbase || !shrbase[1]) throw new Error("SYLK shared formula cannot find base");
            arr[R2][C2][1] = shift_formula_str(shrbase[1], { r: R2 - _R, c: C2 - _C });
          }
          break;
        case "F":
          var F_seen = 0;
          for (rj2 = 1; rj2 < record.length; ++rj2) switch (record[rj2].charAt(0)) {
            case "X":
              C2 = parseInt(record[rj2].slice(1)) - 1;
              ++F_seen;
              break;
            case "Y":
              R2 = parseInt(record[rj2].slice(1)) - 1;
              for (j = arr.length; j <= R2; ++j) arr[j] = [];
              break;
            case "M":
              Mval = parseInt(record[rj2].slice(1)) / 20;
              break;
            case "F":
              break;
            case "G":
              break;
            case "P":
              next_cell_format = formats[parseInt(record[rj2].slice(1))];
              break;
            case "S":
              break;
            case "D":
              break;
            case "N":
              break;
            case "W":
              cw = record[rj2].slice(1).split(" ");
              for (j = parseInt(cw[0], 10); j <= parseInt(cw[1], 10); ++j) {
                Mval = parseInt(cw[2], 10);
                colinfo[j - 1] = Mval === 0 ? { hidden: true } : { wch: Mval };
                process_col(colinfo[j - 1]);
              }
              break;
            case "C":
              C2 = parseInt(record[rj2].slice(1)) - 1;
              if (!colinfo[C2]) colinfo[C2] = {};
              break;
            case "R":
              R2 = parseInt(record[rj2].slice(1)) - 1;
              if (!rowinfo[R2]) rowinfo[R2] = {};
              if (Mval > 0) {
                rowinfo[R2].hpt = Mval;
                rowinfo[R2].hpx = pt2px(Mval);
              } else if (Mval === 0) rowinfo[R2].hidden = true;
              break;
            default:
              if (opts && opts.WTF) throw new Error("SYLK bad record " + rstr);
          }
          if (F_seen < 1) next_cell_format = null;
          break;
        default:
          if (opts && opts.WTF) throw new Error("SYLK bad record " + rstr);
      }
    }
    if (rowinfo.length > 0) sht["!rows"] = rowinfo;
    if (colinfo.length > 0) sht["!cols"] = colinfo;
    if (opts && opts.sheetRows) arr = arr.slice(0, opts.sheetRows);
    return [arr, sht];
  }
  function sylk_to_sheet(d, opts) {
    var aoasht = sylk_to_aoa(d, opts);
    var aoa = aoasht[0], ws = aoasht[1];
    var o = aoa_to_sheet(aoa, opts);
    keys(ws).forEach(function(k2) {
      o[k2] = ws[k2];
    });
    return o;
  }
  function sylk_to_workbook(d, opts) {
    return sheet_to_workbook(sylk_to_sheet(d, opts), opts);
  }
  function write_ws_cell_sylk(cell, ws, R2, C2) {
    var o = "C;Y" + (R2 + 1) + ";X" + (C2 + 1) + ";K";
    switch (cell.t) {
      case "n":
        o += cell.v || 0;
        if (cell.f && !cell.F) o += ";E" + a1_to_rc(cell.f, { r: R2, c: C2 });
        break;
      case "b":
        o += cell.v ? "TRUE" : "FALSE";
        break;
      case "e":
        o += cell.w || cell.v;
        break;
      case "d":
        o += '"' + (cell.w || cell.v) + '"';
        break;
      case "s":
        o += '"' + cell.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return o;
  }
  function write_ws_cols_sylk(out, cols) {
    cols.forEach(function(col, i) {
      var rec = "F;W" + (i + 1) + " " + (i + 1) + " ";
      if (col.hidden) rec += "0";
      else {
        if (typeof col.width == "number" && !col.wpx) col.wpx = width2px(col.width);
        if (typeof col.wpx == "number" && !col.wch) col.wch = px2char(col.wpx);
        if (typeof col.wch == "number") rec += Math.round(col.wch);
      }
      if (rec.charAt(rec.length - 1) != " ") out.push(rec);
    });
  }
  function write_ws_rows_sylk(out, rows) {
    rows.forEach(function(row, i) {
      var rec = "F;";
      if (row.hidden) rec += "M0;";
      else if (row.hpt) rec += "M" + 20 * row.hpt + ";";
      else if (row.hpx) rec += "M" + 20 * px2pt(row.hpx) + ";";
      if (rec.length > 2) out.push(rec + "R" + (i + 1));
    });
  }
  function sheet_to_sylk(ws, opts) {
    var preamble = ["ID;PWXL;N;E"], o = [];
    var r2 = safe_decode_range(ws["!ref"]), cell;
    var dense = Array.isArray(ws);
    var RS = "\r\n";
    preamble.push("P;PGeneral");
    preamble.push("F;P0;DG0G8;M255");
    if (ws["!cols"]) write_ws_cols_sylk(preamble, ws["!cols"]);
    if (ws["!rows"]) write_ws_rows_sylk(preamble, ws["!rows"]);
    preamble.push("B;Y" + (r2.e.r - r2.s.r + 1) + ";X" + (r2.e.c - r2.s.c + 1) + ";D" + [r2.s.c, r2.s.r, r2.e.c, r2.e.r].join(" "));
    for (var R2 = r2.s.r; R2 <= r2.e.r; ++R2) {
      for (var C2 = r2.s.c; C2 <= r2.e.c; ++C2) {
        var coord = encode_cell({ r: R2, c: C2 });
        cell = dense ? (ws[R2] || [])[C2] : ws[coord];
        if (!cell || cell.v == null && (!cell.f || cell.F)) continue;
        o.push(write_ws_cell_sylk(cell, ws, R2, C2));
      }
    }
    return preamble.join(RS) + RS + o.join(RS) + RS + "E" + RS;
  }
  return {
    to_workbook: sylk_to_workbook,
    to_sheet: sylk_to_sheet,
    from_sheet: sheet_to_sylk
  };
}();
var DIF = /* @__PURE__ */ function() {
  function dif_to_aoa(d, opts) {
    switch (opts.type) {
      case "base64":
        return dif_to_aoa_str(Base64_decode(d), opts);
      case "binary":
        return dif_to_aoa_str(d, opts);
      case "buffer":
        return dif_to_aoa_str(has_buf && Buffer.isBuffer(d) ? d.toString("binary") : a2s(d), opts);
      case "array":
        return dif_to_aoa_str(cc2str(d), opts);
    }
    throw new Error("Unrecognized type " + opts.type);
  }
  function dif_to_aoa_str(str, opts) {
    var records = str.split("\n"), R2 = -1, C2 = -1, ri2 = 0, arr = [];
    for (; ri2 !== records.length; ++ri2) {
      if (records[ri2].trim() === "BOT") {
        arr[++R2] = [];
        C2 = 0;
        continue;
      }
      if (R2 < 0) continue;
      var metadata = records[ri2].trim().split(",");
      var type = metadata[0], value = metadata[1];
      ++ri2;
      var data = records[ri2] || "";
      while ((data.match(/["]/g) || []).length & 1 && ri2 < records.length - 1) data += "\n" + records[++ri2];
      data = data.trim();
      switch (+type) {
        case -1:
          if (data === "BOT") {
            arr[++R2] = [];
            C2 = 0;
            continue;
          } else if (data !== "EOD") throw new Error("Unrecognized DIF special command " + data);
          break;
        case 0:
          if (data === "TRUE") arr[R2][C2] = true;
          else if (data === "FALSE") arr[R2][C2] = false;
          else if (!isNaN(fuzzynum(value))) arr[R2][C2] = fuzzynum(value);
          else if (!isNaN(fuzzydate(value).getDate())) arr[R2][C2] = parseDate(value);
          else arr[R2][C2] = value;
          ++C2;
          break;
        case 1:
          data = data.slice(1, data.length - 1);
          data = data.replace(/""/g, '"');
          if (data && data.match(/^=".*"$/)) data = data.slice(2, -1);
          arr[R2][C2++] = data !== "" ? data : null;
          break;
      }
      if (data === "EOD") break;
    }
    if (opts && opts.sheetRows) arr = arr.slice(0, opts.sheetRows);
    return arr;
  }
  function dif_to_sheet(str, opts) {
    return aoa_to_sheet(dif_to_aoa(str, opts), opts);
  }
  function dif_to_workbook(str, opts) {
    return sheet_to_workbook(dif_to_sheet(str, opts), opts);
  }
  var sheet_to_dif = /* @__PURE__ */ function() {
    var push_field = function pf2(o, topic, v2, n2, s) {
      o.push(topic);
      o.push(v2 + "," + n2);
      o.push('"' + s.replace(/"/g, '""') + '"');
    };
    var push_value = function po(o, type, v2, s) {
      o.push(type + "," + v2);
      o.push(type == 1 ? '"' + s.replace(/"/g, '""') + '"' : s);
    };
    return function sheet_to_dif2(ws) {
      var o = [];
      var r2 = safe_decode_range(ws["!ref"]), cell;
      var dense = Array.isArray(ws);
      push_field(o, "TABLE", 0, 1, "sheetjs");
      push_field(o, "VECTORS", 0, r2.e.r - r2.s.r + 1, "");
      push_field(o, "TUPLES", 0, r2.e.c - r2.s.c + 1, "");
      push_field(o, "DATA", 0, 0, "");
      for (var R2 = r2.s.r; R2 <= r2.e.r; ++R2) {
        push_value(o, -1, 0, "BOT");
        for (var C2 = r2.s.c; C2 <= r2.e.c; ++C2) {
          var coord = encode_cell({ r: R2, c: C2 });
          cell = dense ? (ws[R2] || [])[C2] : ws[coord];
          if (!cell) {
            push_value(o, 1, 0, "");
            continue;
          }
          switch (cell.t) {
            case "n":
              var val = cell.w;
              if (!val && cell.v != null) val = cell.v;
              if (val == null) {
                if (cell.f && !cell.F) push_value(o, 1, 0, "=" + cell.f);
                else push_value(o, 1, 0, "");
              } else push_value(o, 0, val, "V");
              break;
            case "b":
              push_value(o, 0, cell.v ? 1 : 0, cell.v ? "TRUE" : "FALSE");
              break;
            case "s":
              push_value(o, 1, 0, isNaN(cell.v) ? cell.v : '="' + cell.v + '"');
              break;
            case "d":
              if (!cell.w) cell.w = SSF_format(cell.z || table_fmt[14], datenum(parseDate(cell.v)));
              push_value(o, 0, cell.w, "V");
              break;
            default:
              push_value(o, 1, 0, "");
          }
        }
      }
      push_value(o, -1, 0, "EOD");
      var RS = "\r\n";
      var oo = o.join(RS);
      return oo;
    };
  }();
  return {
    to_workbook: dif_to_workbook,
    to_sheet: dif_to_sheet,
    from_sheet: sheet_to_dif
  };
}();
var ETH = /* @__PURE__ */ function() {
  function decode(s) {
    return s.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, "\n");
  }
  function encode(s) {
    return s.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function eth_to_aoa(str, opts) {
    var records = str.split("\n"), R2 = -1, C2 = -1, ri2 = 0, arr = [];
    for (; ri2 !== records.length; ++ri2) {
      var record = records[ri2].trim().split(":");
      if (record[0] !== "cell") continue;
      var addr = decode_cell(record[1]);
      if (arr.length <= addr.r) {
        for (R2 = arr.length; R2 <= addr.r; ++R2) if (!arr[R2]) arr[R2] = [];
      }
      R2 = addr.r;
      C2 = addr.c;
      switch (record[2]) {
        case "t":
          arr[R2][C2] = decode(record[3]);
          break;
        case "v":
          arr[R2][C2] = +record[3];
          break;
        case "vtf":
          var _f = record[record.length - 1];
        case "vtc":
          switch (record[3]) {
            case "nl":
              arr[R2][C2] = +record[4] ? true : false;
              break;
            default:
              arr[R2][C2] = +record[4];
              break;
          }
          if (record[2] == "vtf") arr[R2][C2] = [arr[R2][C2], _f];
      }
    }
    if (opts && opts.sheetRows) arr = arr.slice(0, opts.sheetRows);
    return arr;
  }
  function eth_to_sheet(d, opts) {
    return aoa_to_sheet(eth_to_aoa(d, opts), opts);
  }
  function eth_to_workbook(d, opts) {
    return sheet_to_workbook(eth_to_sheet(d, opts), opts);
  }
  var header = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join("\n");
  var sep = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join("\n") + "\n";
  var meta = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join("\n");
  var end = "--SocialCalcSpreadsheetControlSave--";
  function sheet_to_eth_data(ws) {
    if (!ws || !ws["!ref"]) return "";
    var o = [], oo = [], cell, coord = "";
    var r2 = decode_range(ws["!ref"]);
    var dense = Array.isArray(ws);
    for (var R2 = r2.s.r; R2 <= r2.e.r; ++R2) {
      for (var C2 = r2.s.c; C2 <= r2.e.c; ++C2) {
        coord = encode_cell({ r: R2, c: C2 });
        cell = dense ? (ws[R2] || [])[C2] : ws[coord];
        if (!cell || cell.v == null || cell.t === "z") continue;
        oo = ["cell", coord, "t"];
        switch (cell.t) {
          case "s":
          case "str":
            oo.push(encode(cell.v));
            break;
          case "n":
            if (!cell.f) {
              oo[2] = "v";
              oo[3] = cell.v;
            } else {
              oo[2] = "vtf";
              oo[3] = "n";
              oo[4] = cell.v;
              oo[5] = encode(cell.f);
            }
            break;
          case "b":
            oo[2] = "vt" + (cell.f ? "f" : "c");
            oo[3] = "nl";
            oo[4] = cell.v ? "1" : "0";
            oo[5] = encode(cell.f || (cell.v ? "TRUE" : "FALSE"));
            break;
          case "d":
            var t2 = datenum(parseDate(cell.v));
            oo[2] = "vtc";
            oo[3] = "nd";
            oo[4] = "" + t2;
            oo[5] = cell.w || SSF_format(cell.z || table_fmt[14], t2);
            break;
          case "e":
            continue;
        }
        o.push(oo.join(":"));
      }
    }
    o.push("sheet:c:" + (r2.e.c - r2.s.c + 1) + ":r:" + (r2.e.r - r2.s.r + 1) + ":tvf:1");
    o.push("valueformat:1:text-wiki");
    return o.join("\n");
  }
  function sheet_to_eth(ws) {
    return [header, sep, meta, sep, sheet_to_eth_data(ws), end].join("\n");
  }
  return {
    to_workbook: eth_to_workbook,
    to_sheet: eth_to_sheet,
    from_sheet: sheet_to_eth
  };
}();
var PRN = /* @__PURE__ */ function() {
  function set_text_arr(data, arr, R2, C2, o) {
    if (o.raw) arr[R2][C2] = data;
    else if (data === "") ;
    else if (data === "TRUE") arr[R2][C2] = true;
    else if (data === "FALSE") arr[R2][C2] = false;
    else if (!isNaN(fuzzynum(data))) arr[R2][C2] = fuzzynum(data);
    else if (!isNaN(fuzzydate(data).getDate())) arr[R2][C2] = parseDate(data);
    else arr[R2][C2] = data;
  }
  function prn_to_aoa_str(f2, opts) {
    var o = opts || {};
    var arr = [];
    if (!f2 || f2.length === 0) return arr;
    var lines = f2.split(/[\r\n]/);
    var L2 = lines.length - 1;
    while (L2 >= 0 && lines[L2].length === 0) --L2;
    var start = 10, idx = 0;
    var R2 = 0;
    for (; R2 <= L2; ++R2) {
      idx = lines[R2].indexOf(" ");
      if (idx == -1) idx = lines[R2].length;
      else idx++;
      start = Math.max(start, idx);
    }
    for (R2 = 0; R2 <= L2; ++R2) {
      arr[R2] = [];
      var C2 = 0;
      set_text_arr(lines[R2].slice(0, start).trim(), arr, R2, C2, o);
      for (C2 = 1; C2 <= (lines[R2].length - start) / 10 + 1; ++C2)
        set_text_arr(lines[R2].slice(start + (C2 - 1) * 10, start + C2 * 10).trim(), arr, R2, C2, o);
    }
    if (o.sheetRows) arr = arr.slice(0, o.sheetRows);
    return arr;
  }
  var guess_seps = {
    /*::[*/
    44: ",",
    /*::[*/
    9: "	",
    /*::[*/
    59: ";",
    /*::[*/
    124: "|"
  };
  var guess_sep_weights = {
    /*::[*/
    44: 3,
    /*::[*/
    9: 2,
    /*::[*/
    59: 1,
    /*::[*/
    124: 0
  };
  function guess_sep(str) {
    var cnt = {}, instr = false, end = 0, cc2 = 0;
    for (; end < str.length; ++end) {
      if ((cc2 = str.charCodeAt(end)) == 34) instr = !instr;
      else if (!instr && cc2 in guess_seps) cnt[cc2] = (cnt[cc2] || 0) + 1;
    }
    cc2 = [];
    for (end in cnt) if (Object.prototype.hasOwnProperty.call(cnt, end)) {
      cc2.push([cnt[end], end]);
    }
    if (!cc2.length) {
      cnt = guess_sep_weights;
      for (end in cnt) if (Object.prototype.hasOwnProperty.call(cnt, end)) {
        cc2.push([cnt[end], end]);
      }
    }
    cc2.sort(function(a, b) {
      return a[0] - b[0] || guess_sep_weights[a[1]] - guess_sep_weights[b[1]];
    });
    return guess_seps[cc2.pop()[1]] || 44;
  }
  function dsv_to_sheet_str(str, opts) {
    var o = opts || {};
    var sep = "";
    var ws = o.dense ? [] : {};
    var range = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    if (str.slice(0, 4) == "sep=") {
      if (str.charCodeAt(5) == 13 && str.charCodeAt(6) == 10) {
        sep = str.charAt(4);
        str = str.slice(7);
      } else if (str.charCodeAt(5) == 13 || str.charCodeAt(5) == 10) {
        sep = str.charAt(4);
        str = str.slice(6);
      } else sep = guess_sep(str.slice(0, 1024));
    } else if (o && o.FS) sep = o.FS;
    else sep = guess_sep(str.slice(0, 1024));
    var R2 = 0, C2 = 0, v2 = 0;
    var start = 0, end = 0, sepcc = sep.charCodeAt(0), instr = false, cc2 = 0, startcc = str.charCodeAt(0);
    str = str.replace(/\r\n/mg, "\n");
    var _re = o.dateNF != null ? dateNF_regex(o.dateNF) : null;
    function finish_cell() {
      var s = str.slice(start, end);
      var cell = {};
      if (s.charAt(0) == '"' && s.charAt(s.length - 1) == '"') s = s.slice(1, -1).replace(/""/g, '"');
      if (s.length === 0) cell.t = "z";
      else if (o.raw) {
        cell.t = "s";
        cell.v = s;
      } else if (s.trim().length === 0) {
        cell.t = "s";
        cell.v = s;
      } else if (s.charCodeAt(0) == 61) {
        if (s.charCodeAt(1) == 34 && s.charCodeAt(s.length - 1) == 34) {
          cell.t = "s";
          cell.v = s.slice(2, -1).replace(/""/g, '"');
        } else if (fuzzyfmla(s)) {
          cell.t = "n";
          cell.f = s.slice(1);
        } else {
          cell.t = "s";
          cell.v = s;
        }
      } else if (s == "TRUE") {
        cell.t = "b";
        cell.v = true;
      } else if (s == "FALSE") {
        cell.t = "b";
        cell.v = false;
      } else if (!isNaN(v2 = fuzzynum(s))) {
        cell.t = "n";
        if (o.cellText !== false) cell.w = s;
        cell.v = v2;
      } else if (!isNaN(fuzzydate(s).getDate()) || _re && s.match(_re)) {
        cell.z = o.dateNF || table_fmt[14];
        var k2 = 0;
        if (_re && s.match(_re)) {
          s = dateNF_fix(s, o.dateNF, s.match(_re) || []);
          k2 = 1;
        }
        if (o.cellDates) {
          cell.t = "d";
          cell.v = parseDate(s, k2);
        } else {
          cell.t = "n";
          cell.v = datenum(parseDate(s, k2));
        }
        if (o.cellText !== false) cell.w = SSF_format(cell.z, cell.v instanceof Date ? datenum(cell.v) : cell.v);
        if (!o.cellNF) delete cell.z;
      } else {
        cell.t = "s";
        cell.v = s;
      }
      if (cell.t == "z") ;
      else if (o.dense) {
        if (!ws[R2]) ws[R2] = [];
        ws[R2][C2] = cell;
      } else ws[encode_cell({ c: C2, r: R2 })] = cell;
      start = end + 1;
      startcc = str.charCodeAt(start);
      if (range.e.c < C2) range.e.c = C2;
      if (range.e.r < R2) range.e.r = R2;
      if (cc2 == sepcc) ++C2;
      else {
        C2 = 0;
        ++R2;
        if (o.sheetRows && o.sheetRows <= R2) return true;
      }
    }
    outer: for (; end < str.length; ++end) switch (cc2 = str.charCodeAt(end)) {
      case 34:
        if (startcc === 34) instr = !instr;
        break;
      case sepcc:
      case 10:
      case 13:
        if (!instr && finish_cell()) break outer;
        break;
    }
    if (end - start > 0) finish_cell();
    ws["!ref"] = encode_range(range);
    return ws;
  }
  function prn_to_sheet_str(str, opts) {
    if (!(opts && opts.PRN)) return dsv_to_sheet_str(str, opts);
    if (opts.FS) return dsv_to_sheet_str(str, opts);
    if (str.slice(0, 4) == "sep=") return dsv_to_sheet_str(str, opts);
    if (str.indexOf("	") >= 0 || str.indexOf(",") >= 0 || str.indexOf(";") >= 0) return dsv_to_sheet_str(str, opts);
    return aoa_to_sheet(prn_to_aoa_str(str, opts), opts);
  }
  function prn_to_sheet(d, opts) {
    var str = "", bytes = opts.type == "string" ? [0, 0, 0, 0] : firstbyte(d, opts);
    switch (opts.type) {
      case "base64":
        str = Base64_decode(d);
        break;
      case "binary":
        str = d;
        break;
      case "buffer":
        if (opts.codepage == 65001) str = d.toString("utf8");
        else if (opts.codepage && typeof $cptable !== "undefined") str = $cptable.utils.decode(opts.codepage, d);
        else str = has_buf && Buffer.isBuffer(d) ? d.toString("binary") : a2s(d);
        break;
      case "array":
        str = cc2str(d);
        break;
      case "string":
        str = d;
        break;
      default:
        throw new Error("Unrecognized type " + opts.type);
    }
    if (bytes[0] == 239 && bytes[1] == 187 && bytes[2] == 191) str = utf8read(str.slice(3));
    else if (opts.type != "string" && opts.type != "buffer" && opts.codepage == 65001) str = utf8read(str);
    else if (opts.type == "binary" && typeof $cptable !== "undefined" && opts.codepage) str = $cptable.utils.decode(opts.codepage, $cptable.utils.encode(28591, str));
    if (str.slice(0, 19) == "socialcalc:version:") return ETH.to_sheet(opts.type == "string" ? str : utf8read(str), opts);
    return prn_to_sheet_str(str, opts);
  }
  function prn_to_workbook(d, opts) {
    return sheet_to_workbook(prn_to_sheet(d, opts), opts);
  }
  function sheet_to_prn(ws) {
    var o = [];
    var r2 = safe_decode_range(ws["!ref"]), cell;
    var dense = Array.isArray(ws);
    for (var R2 = r2.s.r; R2 <= r2.e.r; ++R2) {
      var oo = [];
      for (var C2 = r2.s.c; C2 <= r2.e.c; ++C2) {
        var coord = encode_cell({ r: R2, c: C2 });
        cell = dense ? (ws[R2] || [])[C2] : ws[coord];
        if (!cell || cell.v == null) {
          oo.push("          ");
          continue;
        }
        var w2 = (cell.w || (format_cell(cell), cell.w) || "").slice(0, 10);
        while (w2.length < 10) w2 += " ";
        oo.push(w2 + (C2 === 0 ? " " : ""));
      }
      o.push(oo.join(""));
    }
    return o.join("\n");
  }
  return {
    to_workbook: prn_to_workbook,
    to_sheet: prn_to_sheet,
    from_sheet: sheet_to_prn
  };
}();
function read_wb_ID(d, opts) {
  var o = opts || {}, OLD_WTF = !!o.WTF;
  o.WTF = true;
  try {
    var out = SYLK.to_workbook(d, o);
    o.WTF = OLD_WTF;
    return out;
  } catch (e) {
    o.WTF = OLD_WTF;
    if (!e.message.match(/SYLK bad record ID/) && OLD_WTF) throw e;
    return PRN.to_workbook(d, opts);
  }
}
var WK_ = /* @__PURE__ */ function() {
  function lotushopper(data, cb2, opts) {
    if (!data) return;
    prep_blob(data, data.l || 0);
    var Enum = opts.Enum || WK1Enum;
    while (data.l < data.length) {
      var RT = data.read_shift(2);
      var R2 = Enum[RT] || Enum[65535];
      var length = data.read_shift(2);
      var tgt = data.l + length;
      var d = R2.f && R2.f(data, length, opts);
      data.l = tgt;
      if (cb2(d, R2, RT)) return;
    }
  }
  function lotus_to_workbook(d, opts) {
    switch (opts.type) {
      case "base64":
        return lotus_to_workbook_buf(s2a(Base64_decode(d)), opts);
      case "binary":
        return lotus_to_workbook_buf(s2a(d), opts);
      case "buffer":
      case "array":
        return lotus_to_workbook_buf(d, opts);
    }
    throw "Unsupported type " + opts.type;
  }
  function lotus_to_workbook_buf(d, opts) {
    if (!d) return d;
    var o = opts || {};
    var s = o.dense ? [] : {}, n2 = "Sheet1", next_n = "", sidx = 0;
    var sheets = {}, snames = [], realnames = [];
    var refguess = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
    var sheetRows = o.sheetRows || 0;
    if (d[2] == 0) {
      if (d[3] == 8 || d[3] == 9) {
        if (d.length >= 16 && d[14] == 5 && d[15] === 108) throw new Error("Unsupported Works 3 for Mac file");
      }
    }
    if (d[2] == 2) {
      o.Enum = WK1Enum;
      lotushopper(d, function(val, R2, RT) {
        switch (RT) {
          case 0:
            o.vers = val;
            if (val >= 4096) o.qpro = true;
            break;
          case 6:
            refguess = val;
            break;
          case 204:
            if (val) next_n = val;
            break;
          case 222:
            next_n = val;
            break;
          case 15:
          case 51:
            if (!o.qpro) val[1].v = val[1].v.slice(1);
          case 13:
          case 14:
          case 16:
            if (RT == 14 && (val[2] & 112) == 112 && (val[2] & 15) > 1 && (val[2] & 15) < 15) {
              val[1].z = o.dateNF || table_fmt[14];
              if (o.cellDates) {
                val[1].t = "d";
                val[1].v = numdate(val[1].v);
              }
            }
            if (o.qpro) {
              if (val[3] > sidx) {
                s["!ref"] = encode_range(refguess);
                sheets[n2] = s;
                snames.push(n2);
                s = o.dense ? [] : {};
                refguess = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
                sidx = val[3];
                n2 = next_n || "Sheet" + (sidx + 1);
                next_n = "";
              }
            }
            var tmpcell = o.dense ? (s[val[0].r] || [])[val[0].c] : s[encode_cell(val[0])];
            if (tmpcell) {
              tmpcell.t = val[1].t;
              tmpcell.v = val[1].v;
              if (val[1].z != null) tmpcell.z = val[1].z;
              if (val[1].f != null) tmpcell.f = val[1].f;
              break;
            }
            if (o.dense) {
              if (!s[val[0].r]) s[val[0].r] = [];
              s[val[0].r][val[0].c] = val[1];
            } else s[encode_cell(val[0])] = val[1];
            break;
        }
      }, o);
    } else if (d[2] == 26 || d[2] == 14) {
      o.Enum = WK3Enum;
      if (d[2] == 14) {
        o.qpro = true;
        d.l = 0;
      }
      lotushopper(d, function(val, R2, RT) {
        switch (RT) {
          case 204:
            n2 = val;
            break;
          case 22:
            val[1].v = val[1].v.slice(1);
          case 23:
          case 24:
          case 25:
          case 37:
          case 39:
          case 40:
            if (val[3] > sidx) {
              s["!ref"] = encode_range(refguess);
              sheets[n2] = s;
              snames.push(n2);
              s = o.dense ? [] : {};
              refguess = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              sidx = val[3];
              n2 = "Sheet" + (sidx + 1);
            }
            if (sheetRows > 0 && val[0].r >= sheetRows) break;
            if (o.dense) {
              if (!s[val[0].r]) s[val[0].r] = [];
              s[val[0].r][val[0].c] = val[1];
            } else s[encode_cell(val[0])] = val[1];
            if (refguess.e.c < val[0].c) refguess.e.c = val[0].c;
            if (refguess.e.r < val[0].r) refguess.e.r = val[0].r;
            break;
          case 27:
            if (val[14e3]) realnames[val[14e3][0]] = val[14e3][1];
            break;
          case 1537:
            realnames[val[0]] = val[1];
            if (val[0] == sidx) n2 = val[1];
            break;
        }
      }, o);
    } else throw new Error("Unrecognized LOTUS BOF " + d[2]);
    s["!ref"] = encode_range(refguess);
    sheets[next_n || n2] = s;
    snames.push(next_n || n2);
    if (!realnames.length) return { SheetNames: snames, Sheets: sheets };
    var osheets = {}, rnames = [];
    for (var i = 0; i < realnames.length; ++i) if (sheets[snames[i]]) {
      rnames.push(realnames[i] || snames[i]);
      osheets[realnames[i]] = sheets[realnames[i]] || sheets[snames[i]];
    } else {
      rnames.push(realnames[i]);
      osheets[realnames[i]] = { "!ref": "A1" };
    }
    return { SheetNames: rnames, Sheets: osheets };
  }
  function sheet_to_wk1(ws, opts) {
    var o = opts || {};
    if (+o.codepage >= 0) set_cp(+o.codepage);
    if (o.type == "string") throw new Error("Cannot write WK1 to JS string");
    var ba = buf_array();
    var range = safe_decode_range(ws["!ref"]);
    var dense = Array.isArray(ws);
    var cols = [];
    write_biff_rec(ba, 0, write_BOF_WK1(1030));
    write_biff_rec(ba, 6, write_RANGE(range));
    var max_R = Math.min(range.e.r, 8191);
    for (var R2 = range.s.r; R2 <= max_R; ++R2) {
      var rr = encode_row(R2);
      for (var C2 = range.s.c; C2 <= range.e.c; ++C2) {
        if (R2 === range.s.r) cols[C2] = encode_col(C2);
        var ref = cols[C2] + rr;
        var cell = dense ? (ws[R2] || [])[C2] : ws[ref];
        if (!cell || cell.t == "z") continue;
        if (cell.t == "n") {
          if ((cell.v | 0) == cell.v && cell.v >= -32768 && cell.v <= 32767) write_biff_rec(ba, 13, write_INTEGER(R2, C2, cell.v));
          else write_biff_rec(ba, 14, write_NUMBER(R2, C2, cell.v));
        } else {
          var str = format_cell(cell);
          write_biff_rec(ba, 15, write_LABEL(R2, C2, str.slice(0, 239)));
        }
      }
    }
    write_biff_rec(ba, 1);
    return ba.end();
  }
  function book_to_wk3(wb2, opts) {
    var o = opts || {};
    if (+o.codepage >= 0) set_cp(+o.codepage);
    if (o.type == "string") throw new Error("Cannot write WK3 to JS string");
    var ba = buf_array();
    write_biff_rec(ba, 0, write_BOF_WK3(wb2));
    for (var i = 0, cnt = 0; i < wb2.SheetNames.length; ++i) if ((wb2.Sheets[wb2.SheetNames[i]] || {})["!ref"]) write_biff_rec(ba, 27, write_XFORMAT_SHEETNAME(wb2.SheetNames[i], cnt++));
    var wsidx = 0;
    for (i = 0; i < wb2.SheetNames.length; ++i) {
      var ws = wb2.Sheets[wb2.SheetNames[i]];
      if (!ws || !ws["!ref"]) continue;
      var range = safe_decode_range(ws["!ref"]);
      var dense = Array.isArray(ws);
      var cols = [];
      var max_R = Math.min(range.e.r, 8191);
      for (var R2 = range.s.r; R2 <= max_R; ++R2) {
        var rr = encode_row(R2);
        for (var C2 = range.s.c; C2 <= range.e.c; ++C2) {
          if (R2 === range.s.r) cols[C2] = encode_col(C2);
          var ref = cols[C2] + rr;
          var cell = dense ? (ws[R2] || [])[C2] : ws[ref];
          if (!cell || cell.t == "z") continue;
          if (cell.t == "n") {
            write_biff_rec(ba, 23, write_NUMBER_17(R2, C2, wsidx, cell.v));
          } else {
            var str = format_cell(cell);
            write_biff_rec(ba, 22, write_LABEL_16(R2, C2, wsidx, str.slice(0, 239)));
          }
        }
      }
      ++wsidx;
    }
    write_biff_rec(ba, 1);
    return ba.end();
  }
  function write_BOF_WK1(v2) {
    var out = new_buf(2);
    out.write_shift(2, v2);
    return out;
  }
  function write_BOF_WK3(wb2) {
    var out = new_buf(26);
    out.write_shift(2, 4096);
    out.write_shift(2, 4);
    out.write_shift(4, 0);
    var rows = 0, cols = 0, wscnt = 0;
    for (var i = 0; i < wb2.SheetNames.length; ++i) {
      var name = wb2.SheetNames[i];
      var ws = wb2.Sheets[name];
      if (!ws || !ws["!ref"]) continue;
      ++wscnt;
      var range = decode_range(ws["!ref"]);
      if (rows < range.e.r) rows = range.e.r;
      if (cols < range.e.c) cols = range.e.c;
    }
    if (rows > 8191) rows = 8191;
    out.write_shift(2, rows);
    out.write_shift(1, wscnt);
    out.write_shift(1, cols);
    out.write_shift(2, 0);
    out.write_shift(2, 0);
    out.write_shift(1, 1);
    out.write_shift(1, 2);
    out.write_shift(4, 0);
    out.write_shift(4, 0);
    return out;
  }
  function parse_RANGE(blob, length, opts) {
    var o = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    if (length == 8 && opts.qpro) {
      o.s.c = blob.read_shift(1);
      blob.l++;
      o.s.r = blob.read_shift(2);
      o.e.c = blob.read_shift(1);
      blob.l++;
      o.e.r = blob.read_shift(2);
      return o;
    }
    o.s.c = blob.read_shift(2);
    o.s.r = blob.read_shift(2);
    if (length == 12 && opts.qpro) blob.l += 2;
    o.e.c = blob.read_shift(2);
    o.e.r = blob.read_shift(2);
    if (length == 12 && opts.qpro) blob.l += 2;
    if (o.s.c == 65535) o.s.c = o.e.c = o.s.r = o.e.r = 0;
    return o;
  }
  function write_RANGE(range) {
    var out = new_buf(8);
    out.write_shift(2, range.s.c);
    out.write_shift(2, range.s.r);
    out.write_shift(2, range.e.c);
    out.write_shift(2, range.e.r);
    return out;
  }
  function parse_cell(blob, length, opts) {
    var o = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    if (opts.qpro && opts.vers != 20768) {
      o[0].c = blob.read_shift(1);
      o[3] = blob.read_shift(1);
      o[0].r = blob.read_shift(2);
      blob.l += 2;
    } else {
      o[2] = blob.read_shift(1);
      o[0].c = blob.read_shift(2);
      o[0].r = blob.read_shift(2);
    }
    return o;
  }
  function parse_LABEL(blob, length, opts) {
    var tgt = blob.l + length;
    var o = parse_cell(blob, length, opts);
    o[1].t = "s";
    if (opts.vers == 20768) {
      blob.l++;
      var len = blob.read_shift(1);
      o[1].v = blob.read_shift(len, "utf8");
      return o;
    }
    if (opts.qpro) blob.l++;
    o[1].v = blob.read_shift(tgt - blob.l, "cstr");
    return o;
  }
  function write_LABEL(R2, C2, s) {
    var o = new_buf(7 + s.length);
    o.write_shift(1, 255);
    o.write_shift(2, C2);
    o.write_shift(2, R2);
    o.write_shift(1, 39);
    for (var i = 0; i < o.length; ++i) {
      var cc2 = s.charCodeAt(i);
      o.write_shift(1, cc2 >= 128 ? 95 : cc2);
    }
    o.write_shift(1, 0);
    return o;
  }
  function parse_INTEGER(blob, length, opts) {
    var o = parse_cell(blob, length, opts);
    o[1].v = blob.read_shift(2, "i");
    return o;
  }
  function write_INTEGER(R2, C2, v2) {
    var o = new_buf(7);
    o.write_shift(1, 255);
    o.write_shift(2, C2);
    o.write_shift(2, R2);
    o.write_shift(2, v2, "i");
    return o;
  }
  function parse_NUMBER(blob, length, opts) {
    var o = parse_cell(blob, length, opts);
    o[1].v = blob.read_shift(8, "f");
    return o;
  }
  function write_NUMBER(R2, C2, v2) {
    var o = new_buf(13);
    o.write_shift(1, 255);
    o.write_shift(2, C2);
    o.write_shift(2, R2);
    o.write_shift(8, v2, "f");
    return o;
  }
  function parse_FORMULA(blob, length, opts) {
    var tgt = blob.l + length;
    var o = parse_cell(blob, length, opts);
    o[1].v = blob.read_shift(8, "f");
    if (opts.qpro) blob.l = tgt;
    else {
      var flen = blob.read_shift(2);
      wk1_fmla_to_csf(blob.slice(blob.l, blob.l + flen), o);
      blob.l += flen;
    }
    return o;
  }
  function wk1_parse_rc(B2, V2, col) {
    var rel = V2 & 32768;
    V2 &= ~32768;
    V2 = (rel ? B2 : 0) + (V2 >= 8192 ? V2 - 16384 : V2);
    return (rel ? "" : "$") + (col ? encode_col(V2) : encode_row(V2));
  }
  var FuncTab = {
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    70: ["LEN", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    111: ["T", 1]
  };
  var BinOpTab = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // eslint-disable-line no-mixed-spaces-and-tabs
  ];
  function wk1_fmla_to_csf(blob, o) {
    prep_blob(blob, 0);
    var out = [], argc = 0, R2 = "", C2 = "", argL = "", argR = "";
    while (blob.l < blob.length) {
      var cc2 = blob[blob.l++];
      switch (cc2) {
        case 0:
          out.push(blob.read_shift(8, "f"));
          break;
        case 1:
          {
            C2 = wk1_parse_rc(o[0].c, blob.read_shift(2), true);
            R2 = wk1_parse_rc(o[0].r, blob.read_shift(2), false);
            out.push(C2 + R2);
          }
          break;
        case 2:
          {
            var c = wk1_parse_rc(o[0].c, blob.read_shift(2), true);
            var r2 = wk1_parse_rc(o[0].r, blob.read_shift(2), false);
            C2 = wk1_parse_rc(o[0].c, blob.read_shift(2), true);
            R2 = wk1_parse_rc(o[0].r, blob.read_shift(2), false);
            out.push(c + r2 + ":" + C2 + R2);
          }
          break;
        case 3:
          if (blob.l < blob.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          out.push("(" + out.pop() + ")");
          break;
        case 5:
          out.push(blob.read_shift(2));
          break;
        case 6:
          {
            var Z2 = "";
            while (cc2 = blob[blob.l++]) Z2 += String.fromCharCode(cc2);
            out.push('"' + Z2.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          out.push("-" + out.pop());
          break;
        case 23:
          out.push("+" + out.pop());
          break;
        case 22:
          out.push("NOT(" + out.pop() + ")");
          break;
        case 20:
        case 21:
          {
            argR = out.pop();
            argL = out.pop();
            out.push(["AND", "OR"][cc2 - 20] + "(" + argL + "," + argR + ")");
          }
          break;
        default:
          if (cc2 < 32 && BinOpTab[cc2]) {
            argR = out.pop();
            argL = out.pop();
            out.push(argL + BinOpTab[cc2] + argR);
          } else if (FuncTab[cc2]) {
            argc = FuncTab[cc2][1];
            if (argc == 69) argc = blob[blob.l++];
            if (argc > out.length) {
              console.error("WK1 bad formula parse 0x" + cc2.toString(16) + ":|" + out.join("|") + "|");
              return;
            }
            var args = out.slice(-argc);
            out.length -= argc;
            out.push(FuncTab[cc2][0] + "(" + args.join(",") + ")");
          } else if (cc2 <= 7) return console.error("WK1 invalid opcode " + cc2.toString(16));
          else if (cc2 <= 24) return console.error("WK1 unsupported op " + cc2.toString(16));
          else if (cc2 <= 30) return console.error("WK1 invalid opcode " + cc2.toString(16));
          else if (cc2 <= 115) return console.error("WK1 unsupported function opcode " + cc2.toString(16));
          else return console.error("WK1 unrecognized opcode " + cc2.toString(16));
      }
    }
    if (out.length == 1) o[1].f = "" + out[0];
    else console.error("WK1 bad formula parse |" + out.join("|") + "|");
  }
  function parse_cell_3(blob) {
    var o = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    o[0].r = blob.read_shift(2);
    o[3] = blob[blob.l++];
    o[0].c = blob[blob.l++];
    return o;
  }
  function parse_LABEL_16(blob, length) {
    var o = parse_cell_3(blob);
    o[1].t = "s";
    o[1].v = blob.read_shift(length - 4, "cstr");
    return o;
  }
  function write_LABEL_16(R2, C2, wsidx, s) {
    var o = new_buf(6 + s.length);
    o.write_shift(2, R2);
    o.write_shift(1, wsidx);
    o.write_shift(1, C2);
    o.write_shift(1, 39);
    for (var i = 0; i < s.length; ++i) {
      var cc2 = s.charCodeAt(i);
      o.write_shift(1, cc2 >= 128 ? 95 : cc2);
    }
    o.write_shift(1, 0);
    return o;
  }
  function parse_NUMBER_18(blob, length) {
    var o = parse_cell_3(blob);
    o[1].v = blob.read_shift(2);
    var v2 = o[1].v >> 1;
    if (o[1].v & 1) {
      switch (v2 & 7) {
        case 0:
          v2 = (v2 >> 3) * 5e3;
          break;
        case 1:
          v2 = (v2 >> 3) * 500;
          break;
        case 2:
          v2 = (v2 >> 3) / 20;
          break;
        case 3:
          v2 = (v2 >> 3) / 200;
          break;
        case 4:
          v2 = (v2 >> 3) / 2e3;
          break;
        case 5:
          v2 = (v2 >> 3) / 2e4;
          break;
        case 6:
          v2 = (v2 >> 3) / 16;
          break;
        case 7:
          v2 = (v2 >> 3) / 64;
          break;
      }
    }
    o[1].v = v2;
    return o;
  }
  function parse_NUMBER_17(blob, length) {
    var o = parse_cell_3(blob);
    var v1 = blob.read_shift(4);
    var v2 = blob.read_shift(4);
    var e = blob.read_shift(2);
    if (e == 65535) {
      if (v1 === 0 && v2 === 3221225472) {
        o[1].t = "e";
        o[1].v = 15;
      } else if (v1 === 0 && v2 === 3489660928) {
        o[1].t = "e";
        o[1].v = 42;
      } else o[1].v = 0;
      return o;
    }
    var s = e & 32768;
    e = (e & 32767) - 16446;
    o[1].v = (1 - s * 2) * (v2 * Math.pow(2, e + 32) + v1 * Math.pow(2, e));
    return o;
  }
  function write_NUMBER_17(R2, C2, wsidx, v2) {
    var o = new_buf(14);
    o.write_shift(2, R2);
    o.write_shift(1, wsidx);
    o.write_shift(1, C2);
    if (v2 == 0) {
      o.write_shift(4, 0);
      o.write_shift(4, 0);
      o.write_shift(2, 65535);
      return o;
    }
    var s = 0, e = 0, v1 = 0, v22 = 0;
    if (v2 < 0) {
      s = 1;
      v2 = -v2;
    }
    e = Math.log2(v2) | 0;
    v2 /= Math.pow(2, e - 31);
    v22 = v2 >>> 0;
    if ((v22 & 2147483648) == 0) {
      v2 /= 2;
      ++e;
      v22 = v2 >>> 0;
    }
    v2 -= v22;
    v22 |= 2147483648;
    v22 >>>= 0;
    v2 *= Math.pow(2, 32);
    v1 = v2 >>> 0;
    o.write_shift(4, v1);
    o.write_shift(4, v22);
    e += 16383 + (s ? 32768 : 0);
    o.write_shift(2, e);
    return o;
  }
  function parse_FORMULA_19(blob, length) {
    var o = parse_NUMBER_17(blob);
    blob.l += length - 14;
    return o;
  }
  function parse_NUMBER_25(blob, length) {
    var o = parse_cell_3(blob);
    var v1 = blob.read_shift(4);
    o[1].v = v1 >> 6;
    return o;
  }
  function parse_NUMBER_27(blob, length) {
    var o = parse_cell_3(blob);
    var v1 = blob.read_shift(8, "f");
    o[1].v = v1;
    return o;
  }
  function parse_FORMULA_28(blob, length) {
    var o = parse_NUMBER_27(blob);
    blob.l += length - 10;
    return o;
  }
  function parse_SHEETNAMECS(blob, length) {
    return blob[blob.l + length - 1] == 0 ? blob.read_shift(length, "cstr") : "";
  }
  function parse_SHEETNAMELP(blob, length) {
    var len = blob[blob.l++];
    if (len > length - 1) len = length - 1;
    var o = "";
    while (o.length < len) o += String.fromCharCode(blob[blob.l++]);
    return o;
  }
  function parse_SHEETINFOQP(blob, length, opts) {
    if (!opts.qpro || length < 21) return;
    var id2 = blob.read_shift(1);
    blob.l += 17;
    blob.l += 1;
    blob.l += 2;
    var nm = blob.read_shift(length - 21, "cstr");
    return [id2, nm];
  }
  function parse_XFORMAT(blob, length) {
    var o = {}, tgt = blob.l + length;
    while (blob.l < tgt) {
      var dt = blob.read_shift(2);
      if (dt == 14e3) {
        o[dt] = [0, ""];
        o[dt][0] = blob.read_shift(2);
        while (blob[blob.l]) {
          o[dt][1] += String.fromCharCode(blob[blob.l]);
          blob.l++;
        }
        blob.l++;
      }
    }
    return o;
  }
  function write_XFORMAT_SHEETNAME(name, wsidx) {
    var out = new_buf(5 + name.length);
    out.write_shift(2, 14e3);
    out.write_shift(2, wsidx);
    for (var i = 0; i < name.length; ++i) {
      var cc2 = name.charCodeAt(i);
      out[out.l++] = cc2 > 127 ? 95 : cc2;
    }
    out[out.l++] = 0;
    return out;
  }
  var WK1Enum = {
    /*::[*/
    0: { n: "BOF", f: parseuint16 },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "CALCMODE" },
    /*::[*/
    3: { n: "CALCORDER" },
    /*::[*/
    4: { n: "SPLIT" },
    /*::[*/
    5: { n: "SYNC" },
    /*::[*/
    6: { n: "RANGE", f: parse_RANGE },
    /*::[*/
    7: { n: "WINDOW1" },
    /*::[*/
    8: { n: "COLW1" },
    /*::[*/
    9: { n: "WINTWO" },
    /*::[*/
    10: { n: "COLW2" },
    /*::[*/
    11: { n: "NAME" },
    /*::[*/
    12: { n: "BLANK" },
    /*::[*/
    13: { n: "INTEGER", f: parse_INTEGER },
    /*::[*/
    14: { n: "NUMBER", f: parse_NUMBER },
    /*::[*/
    15: { n: "LABEL", f: parse_LABEL },
    /*::[*/
    16: { n: "FORMULA", f: parse_FORMULA },
    /*::[*/
    24: { n: "TABLE" },
    /*::[*/
    25: { n: "ORANGE" },
    /*::[*/
    26: { n: "PRANGE" },
    /*::[*/
    27: { n: "SRANGE" },
    /*::[*/
    28: { n: "FRANGE" },
    /*::[*/
    29: { n: "KRANGE1" },
    /*::[*/
    32: { n: "HRANGE" },
    /*::[*/
    35: { n: "KRANGE2" },
    /*::[*/
    36: { n: "PROTEC" },
    /*::[*/
    37: { n: "FOOTER" },
    /*::[*/
    38: { n: "HEADER" },
    /*::[*/
    39: { n: "SETUP" },
    /*::[*/
    40: { n: "MARGINS" },
    /*::[*/
    41: { n: "LABELFMT" },
    /*::[*/
    42: { n: "TITLES" },
    /*::[*/
    43: { n: "SHEETJS" },
    /*::[*/
    45: { n: "GRAPH" },
    /*::[*/
    46: { n: "NGRAPH" },
    /*::[*/
    47: { n: "CALCCOUNT" },
    /*::[*/
    48: { n: "UNFORMATTED" },
    /*::[*/
    49: { n: "CURSORW12" },
    /*::[*/
    50: { n: "WINDOW" },
    /*::[*/
    51: { n: "STRING", f: parse_LABEL },
    /*::[*/
    55: { n: "PASSWORD" },
    /*::[*/
    56: { n: "LOCKED" },
    /*::[*/
    60: { n: "QUERY" },
    /*::[*/
    61: { n: "QUERYNAME" },
    /*::[*/
    62: { n: "PRINT" },
    /*::[*/
    63: { n: "PRINTNAME" },
    /*::[*/
    64: { n: "GRAPH2" },
    /*::[*/
    65: { n: "GRAPHNAME" },
    /*::[*/
    66: { n: "ZOOM" },
    /*::[*/
    67: { n: "SYMSPLIT" },
    /*::[*/
    68: { n: "NSROWS" },
    /*::[*/
    69: { n: "NSCOLS" },
    /*::[*/
    70: { n: "RULER" },
    /*::[*/
    71: { n: "NNAME" },
    /*::[*/
    72: { n: "ACOMM" },
    /*::[*/
    73: { n: "AMACRO" },
    /*::[*/
    74: { n: "PARSE" },
    /*::[*/
    102: { n: "PRANGES??" },
    /*::[*/
    103: { n: "RRANGES??" },
    /*::[*/
    104: { n: "FNAME??" },
    /*::[*/
    105: { n: "MRANGES??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: parse_SHEETNAMECS },
    /*::[*/
    222: { n: "SHEETNAMELP", f: parse_SHEETNAMELP },
    /*::[*/
    65535: { n: "" }
  };
  var WK3Enum = {
    /*::[*/
    0: { n: "BOF" },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "PASSWORD" },
    /*::[*/
    3: { n: "CALCSET" },
    /*::[*/
    4: { n: "WINDOWSET" },
    /*::[*/
    5: { n: "SHEETCELLPTR" },
    /*::[*/
    6: { n: "SHEETLAYOUT" },
    /*::[*/
    7: { n: "COLUMNWIDTH" },
    /*::[*/
    8: { n: "HIDDENCOLUMN" },
    /*::[*/
    9: { n: "USERRANGE" },
    /*::[*/
    10: { n: "SYSTEMRANGE" },
    /*::[*/
    11: { n: "ZEROFORCE" },
    /*::[*/
    12: { n: "SORTKEYDIR" },
    /*::[*/
    13: { n: "FILESEAL" },
    /*::[*/
    14: { n: "DATAFILLNUMS" },
    /*::[*/
    15: { n: "PRINTMAIN" },
    /*::[*/
    16: { n: "PRINTSTRING" },
    /*::[*/
    17: { n: "GRAPHMAIN" },
    /*::[*/
    18: { n: "GRAPHSTRING" },
    /*::[*/
    19: { n: "??" },
    /*::[*/
    20: { n: "ERRCELL" },
    /*::[*/
    21: { n: "NACELL" },
    /*::[*/
    22: { n: "LABEL16", f: parse_LABEL_16 },
    /*::[*/
    23: { n: "NUMBER17", f: parse_NUMBER_17 },
    /*::[*/
    24: { n: "NUMBER18", f: parse_NUMBER_18 },
    /*::[*/
    25: { n: "FORMULA19", f: parse_FORMULA_19 },
    /*::[*/
    26: { n: "FORMULA1A" },
    /*::[*/
    27: { n: "XFORMAT", f: parse_XFORMAT },
    /*::[*/
    28: { n: "DTLABELMISC" },
    /*::[*/
    29: { n: "DTLABELCELL" },
    /*::[*/
    30: { n: "GRAPHWINDOW" },
    /*::[*/
    31: { n: "CPA" },
    /*::[*/
    32: { n: "LPLAUTO" },
    /*::[*/
    33: { n: "QUERY" },
    /*::[*/
    34: { n: "HIDDENSHEET" },
    /*::[*/
    35: { n: "??" },
    /*::[*/
    37: { n: "NUMBER25", f: parse_NUMBER_25 },
    /*::[*/
    38: { n: "??" },
    /*::[*/
    39: { n: "NUMBER27", f: parse_NUMBER_27 },
    /*::[*/
    40: { n: "FORMULA28", f: parse_FORMULA_28 },
    /*::[*/
    142: { n: "??" },
    /*::[*/
    147: { n: "??" },
    /*::[*/
    150: { n: "??" },
    /*::[*/
    151: { n: "??" },
    /*::[*/
    152: { n: "??" },
    /*::[*/
    153: { n: "??" },
    /*::[*/
    154: { n: "??" },
    /*::[*/
    155: { n: "??" },
    /*::[*/
    156: { n: "??" },
    /*::[*/
    163: { n: "??" },
    /*::[*/
    174: { n: "??" },
    /*::[*/
    175: { n: "??" },
    /*::[*/
    176: { n: "??" },
    /*::[*/
    177: { n: "??" },
    /*::[*/
    184: { n: "??" },
    /*::[*/
    185: { n: "??" },
    /*::[*/
    186: { n: "??" },
    /*::[*/
    187: { n: "??" },
    /*::[*/
    188: { n: "??" },
    /*::[*/
    195: { n: "??" },
    /*::[*/
    201: { n: "??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: parse_SHEETNAMECS },
    /*::[*/
    205: { n: "??" },
    /*::[*/
    206: { n: "??" },
    /*::[*/
    207: { n: "??" },
    /*::[*/
    208: { n: "??" },
    /*::[*/
    256: { n: "??" },
    /*::[*/
    259: { n: "??" },
    /*::[*/
    260: { n: "??" },
    /*::[*/
    261: { n: "??" },
    /*::[*/
    262: { n: "??" },
    /*::[*/
    263: { n: "??" },
    /*::[*/
    265: { n: "??" },
    /*::[*/
    266: { n: "??" },
    /*::[*/
    267: { n: "??" },
    /*::[*/
    268: { n: "??" },
    /*::[*/
    270: { n: "??" },
    /*::[*/
    271: { n: "??" },
    /*::[*/
    384: { n: "??" },
    /*::[*/
    389: { n: "??" },
    /*::[*/
    390: { n: "??" },
    /*::[*/
    393: { n: "??" },
    /*::[*/
    396: { n: "??" },
    /*::[*/
    512: { n: "??" },
    /*::[*/
    514: { n: "??" },
    /*::[*/
    513: { n: "??" },
    /*::[*/
    516: { n: "??" },
    /*::[*/
    517: { n: "??" },
    /*::[*/
    640: { n: "??" },
    /*::[*/
    641: { n: "??" },
    /*::[*/
    642: { n: "??" },
    /*::[*/
    643: { n: "??" },
    /*::[*/
    644: { n: "??" },
    /*::[*/
    645: { n: "??" },
    /*::[*/
    646: { n: "??" },
    /*::[*/
    647: { n: "??" },
    /*::[*/
    648: { n: "??" },
    /*::[*/
    658: { n: "??" },
    /*::[*/
    659: { n: "??" },
    /*::[*/
    660: { n: "??" },
    /*::[*/
    661: { n: "??" },
    /*::[*/
    662: { n: "??" },
    /*::[*/
    665: { n: "??" },
    /*::[*/
    666: { n: "??" },
    /*::[*/
    768: { n: "??" },
    /*::[*/
    772: { n: "??" },
    /*::[*/
    1537: { n: "SHEETINFOQP", f: parse_SHEETINFOQP },
    /*::[*/
    1600: { n: "??" },
    /*::[*/
    1602: { n: "??" },
    /*::[*/
    1793: { n: "??" },
    /*::[*/
    1794: { n: "??" },
    /*::[*/
    1795: { n: "??" },
    /*::[*/
    1796: { n: "??" },
    /*::[*/
    1920: { n: "??" },
    /*::[*/
    2048: { n: "??" },
    /*::[*/
    2049: { n: "??" },
    /*::[*/
    2052: { n: "??" },
    /*::[*/
    2688: { n: "??" },
    /*::[*/
    10998: { n: "??" },
    /*::[*/
    12849: { n: "??" },
    /*::[*/
    28233: { n: "??" },
    /*::[*/
    28484: { n: "??" },
    /*::[*/
    65535: { n: "" }
  };
  return {
    sheet_to_wk1,
    book_to_wk3,
    to_workbook: lotus_to_workbook
  };
}();
function parse_rpr(rpr) {
  var font = {}, m2 = rpr.match(tagregex), i = 0;
  var pass = false;
  if (m2) for (; i != m2.length; ++i) {
    var y2 = parsexmltag(m2[i]);
    switch (y2[0].replace(/\w*:/g, "")) {
      case "<condense":
        break;
      case "<extend":
        break;
      case "<shadow":
        if (!y2.val) break;
      case "<shadow>":
      case "<shadow/>":
        font.shadow = 1;
        break;
      case "</shadow>":
        break;
      case "<charset":
        if (y2.val == "1") break;
        font.cp = CS2CP[parseInt(y2.val, 10)];
        break;
      case "<outline":
        if (!y2.val) break;
      case "<outline>":
      case "<outline/>":
        font.outline = 1;
        break;
      case "</outline>":
        break;
      case "<rFont":
        font.name = y2.val;
        break;
      case "<sz":
        font.sz = y2.val;
        break;
      case "<strike":
        if (!y2.val) break;
      case "<strike>":
      case "<strike/>":
        font.strike = 1;
        break;
      case "</strike>":
        break;
      case "<u":
        if (!y2.val) break;
        switch (y2.val) {
          case "double":
            font.uval = "double";
            break;
          case "singleAccounting":
            font.uval = "single-accounting";
            break;
          case "doubleAccounting":
            font.uval = "double-accounting";
            break;
        }
      case "<u>":
      case "<u/>":
        font.u = 1;
        break;
      case "</u>":
        break;
      case "<b":
        if (y2.val == "0") break;
      case "<b>":
      case "<b/>":
        font.b = 1;
        break;
      case "</b>":
        break;
      case "<i":
        if (y2.val == "0") break;
      case "<i>":
      case "<i/>":
        font.i = 1;
        break;
      case "</i>":
        break;
      case "<color":
        if (y2.rgb) font.color = y2.rgb.slice(2, 8);
        break;
      case "<color>":
      case "<color/>":
      case "</color>":
        break;
      case "<family":
        font.family = y2.val;
        break;
      case "<family>":
      case "<family/>":
      case "</family>":
        break;
      case "<vertAlign":
        font.valign = y2.val;
        break;
      case "<vertAlign>":
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      case "<scheme":
        break;
      case "<scheme>":
      case "<scheme/>":
      case "</scheme>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        pass = true;
        break;
      case "</ext>":
        pass = false;
        break;
      default:
        if (y2[0].charCodeAt(1) !== 47 && !pass) throw new Error("Unrecognized rich format " + y2[0]);
    }
  }
  return font;
}
var parse_rs = /* @__PURE__ */ function() {
  var tregex = matchtag("t"), rpregex = matchtag("rPr");
  function parse_r(r2) {
    var t2 = r2.match(tregex);
    if (!t2) return { t: "s", v: "" };
    var o = { t: "s", v: unescapexml(t2[1]) };
    var rpr = r2.match(rpregex);
    if (rpr) o.s = parse_rpr(rpr[1]);
    return o;
  }
  var rregex = /<(?:\w+:)?r>/g, rend = /<\/(?:\w+:)?r>/;
  return function parse_rs2(rs) {
    return rs.replace(rregex, "").split(rend).map(parse_r).filter(function(r2) {
      return r2.v;
    });
  };
}();
var rs_to_html = /* @__PURE__ */ function parse_rs_factory() {
  var nlregex = /(\r\n|\n)/g;
  function parse_rpr2(font, intro, outro) {
    var style = [];
    if (font.u) style.push("text-decoration: underline;");
    if (font.uval) style.push("text-underline-style:" + font.uval + ";");
    if (font.sz) style.push("font-size:" + font.sz + "pt;");
    if (font.outline) style.push("text-effect: outline;");
    if (font.shadow) style.push("text-shadow: auto;");
    intro.push('<span style="' + style.join("") + '">');
    if (font.b) {
      intro.push("<b>");
      outro.push("</b>");
    }
    if (font.i) {
      intro.push("<i>");
      outro.push("</i>");
    }
    if (font.strike) {
      intro.push("<s>");
      outro.push("</s>");
    }
    var align = font.valign || "";
    if (align == "superscript" || align == "super") align = "sup";
    else if (align == "subscript") align = "sub";
    if (align != "") {
      intro.push("<" + align + ">");
      outro.push("</" + align + ">");
    }
    outro.push("</span>");
    return font;
  }
  function r_to_html(r2) {
    var terms = [[], r2.v, []];
    if (!r2.v) return "";
    if (r2.s) parse_rpr2(r2.s, terms[0], terms[2]);
    return terms[0].join("") + terms[1].replace(nlregex, "<br/>") + terms[2].join("");
  }
  return function parse_rs2(rs) {
    return rs.map(r_to_html).join("");
  };
}();
var sitregex = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g, sirregex = /<(?:\w+:)?r>/;
var sirphregex = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function parse_si(x2, opts) {
  var html = opts ? opts.cellHTML : true;
  var z2 = {};
  if (!x2) return { t: "" };
  if (x2.match(/^\s*<(?:\w+:)?t[^>]*>/)) {
    z2.t = unescapexml(utf8read(x2.slice(x2.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""));
    z2.r = utf8read(x2);
    if (html) z2.h = escapehtml(z2.t);
  } else if (
    /*y = */
    x2.match(sirregex)
  ) {
    z2.r = utf8read(x2);
    z2.t = unescapexml(utf8read((x2.replace(sirphregex, "").match(sitregex) || []).join("").replace(tagregex, "")));
    if (html) z2.h = rs_to_html(parse_rs(z2.r));
  }
  return z2;
}
var sstr0 = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/;
var sstr1 = /<(?:\w+:)?(?:si|sstItem)>/g;
var sstr2 = /<\/(?:\w+:)?(?:si|sstItem)>/;
function parse_sst_xml(data, opts) {
  var s = [], ss = "";
  if (!data) return s;
  var sst = data.match(sstr0);
  if (sst) {
    ss = sst[2].replace(sstr1, "").split(sstr2);
    for (var i = 0; i != ss.length; ++i) {
      var o = parse_si(ss[i].trim(), opts);
      if (o != null) s[s.length] = o;
    }
    sst = parsexmltag(sst[1]);
    s.Count = sst.count;
    s.Unique = sst.uniqueCount;
  }
  return s;
}
function parse_BrtBeginSst(data) {
  return [data.read_shift(4), data.read_shift(4)];
}
function parse_sst_bin(data, opts) {
  var s = [];
  var pass = false;
  recordhopper(data, function hopper_sst(val, R2, RT) {
    switch (RT) {
      case 159:
        s.Count = val[0];
        s.Unique = val[1];
        break;
      case 19:
        s.push(val);
        break;
      case 160:
        return true;
      case 35:
        pass = true;
        break;
      case 36:
        pass = false;
        break;
      default:
        if (R2.T) ;
        if (!pass || opts.WTF) throw new Error("Unexpected record 0x" + RT.toString(16));
    }
  });
  return s;
}
function _JS2ANSI(str) {
  var o = [], oo = str.split("");
  for (var i = 0; i < oo.length; ++i) o[i] = oo[i].charCodeAt(0);
  return o;
}
function parse_CRYPTOVersion(blob, length) {
  var o = {};
  o.Major = blob.read_shift(2);
  o.Minor = blob.read_shift(2);
  if (length >= 4) blob.l += length - 4;
  return o;
}
function parse_DataSpaceVersionInfo(blob) {
  var o = {};
  o.id = blob.read_shift(0, "lpp4");
  o.R = parse_CRYPTOVersion(blob, 4);
  o.U = parse_CRYPTOVersion(blob, 4);
  o.W = parse_CRYPTOVersion(blob, 4);
  return o;
}
function parse_DataSpaceMapEntry(blob) {
  var len = blob.read_shift(4);
  var end = blob.l + len - 4;
  var o = {};
  var cnt = blob.read_shift(4);
  var comps = [];
  while (cnt-- > 0) comps.push({ t: blob.read_shift(4), v: blob.read_shift(0, "lpp4") });
  o.name = blob.read_shift(0, "lpp4");
  o.comps = comps;
  if (blob.l != end) throw new Error("Bad DataSpaceMapEntry: " + blob.l + " != " + end);
  return o;
}
function parse_DataSpaceMap(blob) {
  var o = [];
  blob.l += 4;
  var cnt = blob.read_shift(4);
  while (cnt-- > 0) o.push(parse_DataSpaceMapEntry(blob));
  return o;
}
function parse_DataSpaceDefinition(blob) {
  var o = [];
  blob.l += 4;
  var cnt = blob.read_shift(4);
  while (cnt-- > 0) o.push(blob.read_shift(0, "lpp4"));
  return o;
}
function parse_TransformInfoHeader(blob) {
  var o = {};
  blob.read_shift(4);
  blob.l += 4;
  o.id = blob.read_shift(0, "lpp4");
  o.name = blob.read_shift(0, "lpp4");
  o.R = parse_CRYPTOVersion(blob, 4);
  o.U = parse_CRYPTOVersion(blob, 4);
  o.W = parse_CRYPTOVersion(blob, 4);
  return o;
}
function parse_Primary(blob) {
  var hdr = parse_TransformInfoHeader(blob);
  hdr.ename = blob.read_shift(0, "8lpp4");
  hdr.blksz = blob.read_shift(4);
  hdr.cmode = blob.read_shift(4);
  if (blob.read_shift(4) != 4) throw new Error("Bad !Primary record");
  return hdr;
}
function parse_EncryptionHeader(blob, length) {
  var tgt = blob.l + length;
  var o = {};
  o.Flags = blob.read_shift(4) & 63;
  blob.l += 4;
  o.AlgID = blob.read_shift(4);
  var valid = false;
  switch (o.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      valid = o.Flags == 36;
      break;
    case 26625:
      valid = o.Flags == 4;
      break;
    case 0:
      valid = o.Flags == 16 || o.Flags == 4 || o.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + o.AlgID;
  }
  if (!valid) throw new Error("Encryption Flags/AlgID mismatch");
  o.AlgIDHash = blob.read_shift(4);
  o.KeySize = blob.read_shift(4);
  o.ProviderType = blob.read_shift(4);
  blob.l += 8;
  o.CSPName = blob.read_shift(tgt - blob.l >> 1, "utf16le");
  blob.l = tgt;
  return o;
}
function parse_EncryptionVerifier(blob, length) {
  var o = {}, tgt = blob.l + length;
  blob.l += 4;
  o.Salt = blob.slice(blob.l, blob.l + 16);
  blob.l += 16;
  o.Verifier = blob.slice(blob.l, blob.l + 16);
  blob.l += 16;
  blob.read_shift(4);
  o.VerifierHash = blob.slice(blob.l, tgt);
  blob.l = tgt;
  return o;
}
function parse_EncryptionInfo(blob) {
  var vers = parse_CRYPTOVersion(blob);
  switch (vers.Minor) {
    case 2:
      return [vers.Minor, parse_EncInfoStd(blob)];
    case 3:
      return [vers.Minor, parse_EncInfoExt()];
    case 4:
      return [vers.Minor, parse_EncInfoAgl(blob)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + vers.Minor);
}
function parse_EncInfoStd(blob) {
  var flags = blob.read_shift(4);
  if ((flags & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var sz = blob.read_shift(4);
  var hdr = parse_EncryptionHeader(blob, sz);
  var verifier = parse_EncryptionVerifier(blob, blob.length - blob.l);
  return { t: "Std", h: hdr, v: verifier };
}
function parse_EncInfoExt() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function parse_EncInfoAgl(blob) {
  var KeyData = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  blob.l += 4;
  var xml = blob.read_shift(blob.length - blob.l, "utf8");
  var o = {};
  xml.replace(tagregex, function xml_agile(x2) {
    var y2 = parsexmltag(x2);
    switch (strip_ns(y2[0])) {
      case "<?xml":
        break;
      case "<encryption":
      case "</encryption>":
        break;
      case "<keyData":
        KeyData.forEach(function(k2) {
          o[k2] = y2[k2];
        });
        break;
      case "<dataIntegrity":
        o.encryptedHmacKey = y2.encryptedHmacKey;
        o.encryptedHmacValue = y2.encryptedHmacValue;
        break;
      case "<keyEncryptors>":
      case "<keyEncryptors":
        o.encs = [];
        break;
      case "</keyEncryptors>":
        break;
      case "<keyEncryptor":
        o.uri = y2.uri;
        break;
      case "</keyEncryptor>":
        break;
      case "<encryptedKey":
        o.encs.push(y2);
        break;
      default:
        throw y2[0];
    }
  });
  return o;
}
function parse_RC4CryptoHeader(blob, length) {
  var o = {};
  var vers = o.EncryptionVersionInfo = parse_CRYPTOVersion(blob, 4);
  length -= 4;
  if (vers.Minor != 2) throw new Error("unrecognized minor version code: " + vers.Minor);
  if (vers.Major > 4 || vers.Major < 2) throw new Error("unrecognized major version code: " + vers.Major);
  o.Flags = blob.read_shift(4);
  length -= 4;
  var sz = blob.read_shift(4);
  length -= 4;
  o.EncryptionHeader = parse_EncryptionHeader(blob, sz);
  length -= sz;
  o.EncryptionVerifier = parse_EncryptionVerifier(blob, length);
  return o;
}
function parse_RC4Header(blob) {
  var o = {};
  var vers = o.EncryptionVersionInfo = parse_CRYPTOVersion(blob, 4);
  if (vers.Major != 1 || vers.Minor != 1) throw "unrecognized version code " + vers.Major + " : " + vers.Minor;
  o.Salt = blob.read_shift(16);
  o.EncryptedVerifier = blob.read_shift(16);
  o.EncryptedVerifierHash = blob.read_shift(16);
  return o;
}
function crypto_CreatePasswordVerifier_Method1(Password) {
  var Verifier = 0, PasswordArray;
  var PasswordDecoded = _JS2ANSI(Password);
  var len = PasswordDecoded.length + 1, i, PasswordByte;
  var Intermediate1, Intermediate2, Intermediate3;
  PasswordArray = new_raw_buf(len);
  PasswordArray[0] = PasswordDecoded.length;
  for (i = 1; i != len; ++i) PasswordArray[i] = PasswordDecoded[i - 1];
  for (i = len - 1; i >= 0; --i) {
    PasswordByte = PasswordArray[i];
    Intermediate1 = (Verifier & 16384) === 0 ? 0 : 1;
    Intermediate2 = Verifier << 1 & 32767;
    Intermediate3 = Intermediate1 | Intermediate2;
    Verifier = Intermediate3 ^ PasswordByte;
  }
  return Verifier ^ 52811;
}
var crypto_CreateXorArray_Method1 = /* @__PURE__ */ function() {
  var PadArray = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0];
  var InitialCode = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163];
  var XorMatrix = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628];
  var Ror = function(Byte) {
    return (Byte / 2 | Byte * 128) & 255;
  };
  var XorRor = function(byte1, byte2) {
    return Ror(byte1 ^ byte2);
  };
  var CreateXorKey_Method1 = function(Password) {
    var XorKey = InitialCode[Password.length - 1];
    var CurrentElement = 104;
    for (var i = Password.length - 1; i >= 0; --i) {
      var Char = Password[i];
      for (var j = 0; j != 7; ++j) {
        if (Char & 64) XorKey ^= XorMatrix[CurrentElement];
        Char *= 2;
        --CurrentElement;
      }
    }
    return XorKey;
  };
  return function(password) {
    var Password = _JS2ANSI(password);
    var XorKey = CreateXorKey_Method1(Password);
    var Index = Password.length;
    var ObfuscationArray = new_raw_buf(16);
    for (var i = 0; i != 16; ++i) ObfuscationArray[i] = 0;
    var Temp, PasswordLastChar, PadIndex;
    if ((Index & 1) === 1) {
      Temp = XorKey >> 8;
      ObfuscationArray[Index] = XorRor(PadArray[0], Temp);
      --Index;
      Temp = XorKey & 255;
      PasswordLastChar = Password[Password.length - 1];
      ObfuscationArray[Index] = XorRor(PasswordLastChar, Temp);
    }
    while (Index > 0) {
      --Index;
      Temp = XorKey >> 8;
      ObfuscationArray[Index] = XorRor(Password[Index], Temp);
      --Index;
      Temp = XorKey & 255;
      ObfuscationArray[Index] = XorRor(Password[Index], Temp);
    }
    Index = 15;
    PadIndex = 15 - Password.length;
    while (PadIndex > 0) {
      Temp = XorKey >> 8;
      ObfuscationArray[Index] = XorRor(PadArray[PadIndex], Temp);
      --Index;
      --PadIndex;
      Temp = XorKey & 255;
      ObfuscationArray[Index] = XorRor(Password[Index], Temp);
      --Index;
      --PadIndex;
    }
    return ObfuscationArray;
  };
}();
var crypto_DecryptData_Method1 = function(password, Data, XorArrayIndex, XorArray, O2) {
  if (!O2) O2 = Data;
  if (!XorArray) XorArray = crypto_CreateXorArray_Method1(password);
  var Index, Value;
  for (Index = 0; Index != Data.length; ++Index) {
    Value = Data[Index];
    Value ^= XorArray[XorArrayIndex];
    Value = (Value >> 5 | Value << 3) & 255;
    O2[Index] = Value;
    ++XorArrayIndex;
  }
  return [O2, XorArrayIndex, XorArray];
};
var crypto_MakeXorDecryptor = function(password) {
  var XorArrayIndex = 0, XorArray = crypto_CreateXorArray_Method1(password);
  return function(Data) {
    var O2 = crypto_DecryptData_Method1("", Data, XorArrayIndex, XorArray);
    XorArrayIndex = O2[1];
    return O2[0];
  };
};
function parse_XORObfuscation(blob, length, opts, out) {
  var o = { key: parseuint16(blob), verificationBytes: parseuint16(blob) };
  if (opts.password) o.verifier = crypto_CreatePasswordVerifier_Method1(opts.password);
  out.valid = o.verificationBytes === o.verifier;
  if (out.valid) out.insitu = crypto_MakeXorDecryptor(opts.password);
  return o;
}
function parse_FilePassHeader(blob, length, oo) {
  var o = oo || {};
  o.Info = blob.read_shift(2);
  blob.l -= 2;
  if (o.Info === 1) o.Data = parse_RC4Header(blob);
  else o.Data = parse_RC4CryptoHeader(blob, length);
  return o;
}
function parse_FilePass(blob, length, opts) {
  var o = { Type: opts.biff >= 8 ? blob.read_shift(2) : 0 };
  if (o.Type) parse_FilePassHeader(blob, length - 2, o);
  else parse_XORObfuscation(blob, opts.biff >= 8 ? length : length - 2, opts, o);
  return o;
}
var RTF = /* @__PURE__ */ function() {
  function rtf_to_sheet(d, opts) {
    switch (opts.type) {
      case "base64":
        return rtf_to_sheet_str(Base64_decode(d), opts);
      case "binary":
        return rtf_to_sheet_str(d, opts);
      case "buffer":
        return rtf_to_sheet_str(has_buf && Buffer.isBuffer(d) ? d.toString("binary") : a2s(d), opts);
      case "array":
        return rtf_to_sheet_str(cc2str(d), opts);
    }
    throw new Error("Unrecognized type " + opts.type);
  }
  function rtf_to_sheet_str(str, opts) {
    var o = opts || {};
    var ws = o.dense ? [] : {};
    var rows = str.match(/\\trowd.*?\\row\b/g);
    if (!rows.length) throw new Error("RTF missing table");
    var range = { s: { c: 0, r: 0 }, e: { c: 0, r: rows.length - 1 } };
    rows.forEach(function(rowtf, R2) {
      if (Array.isArray(ws)) ws[R2] = [];
      var rtfre = /\\\w+\b/g;
      var last_index = 0;
      var res;
      var C2 = -1;
      while (res = rtfre.exec(rowtf)) {
        switch (res[0]) {
          case "\\cell":
            var data = rowtf.slice(last_index, rtfre.lastIndex - res[0].length);
            if (data[0] == " ") data = data.slice(1);
            ++C2;
            if (data.length) {
              var cell = { v: data, t: "s" };
              if (Array.isArray(ws)) ws[R2][C2] = cell;
              else ws[encode_cell({ r: R2, c: C2 })] = cell;
            }
            break;
        }
        last_index = rtfre.lastIndex;
      }
      if (C2 > range.e.c) range.e.c = C2;
    });
    ws["!ref"] = encode_range(range);
    return ws;
  }
  function rtf_to_workbook(d, opts) {
    return sheet_to_workbook(rtf_to_sheet(d, opts), opts);
  }
  function sheet_to_rtf(ws) {
    var o = ["{\\rtf1\\ansi"];
    var r2 = safe_decode_range(ws["!ref"]), cell;
    var dense = Array.isArray(ws);
    for (var R2 = r2.s.r; R2 <= r2.e.r; ++R2) {
      o.push("\\trowd\\trautofit1");
      for (var C2 = r2.s.c; C2 <= r2.e.c; ++C2) o.push("\\cellx" + (C2 + 1));
      o.push("\\pard\\intbl");
      for (C2 = r2.s.c; C2 <= r2.e.c; ++C2) {
        var coord = encode_cell({ r: R2, c: C2 });
        cell = dense ? (ws[R2] || [])[C2] : ws[coord];
        if (!cell || cell.v == null && (!cell.f || cell.F)) continue;
        o.push(" " + (cell.w || (format_cell(cell), cell.w)));
        o.push("\\cell");
      }
      o.push("\\pard\\intbl\\row");
    }
    return o.join("") + "}";
  }
  return {
    to_workbook: rtf_to_workbook,
    to_sheet: rtf_to_sheet,
    from_sheet: sheet_to_rtf
  };
}();
function hex2RGB(h) {
  var o = h.slice(h[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(o.slice(0, 2), 16), parseInt(o.slice(2, 4), 16), parseInt(o.slice(4, 6), 16)];
}
function rgb2Hex(rgb) {
  for (var i = 0, o = 1; i != 3; ++i) o = o * 256 + (rgb[i] > 255 ? 255 : rgb[i] < 0 ? 0 : rgb[i]);
  return o.toString(16).toUpperCase().slice(1);
}
function rgb2HSL(rgb) {
  var R2 = rgb[0] / 255, G2 = rgb[1] / 255, B2 = rgb[2] / 255;
  var M2 = Math.max(R2, G2, B2), m2 = Math.min(R2, G2, B2), C2 = M2 - m2;
  if (C2 === 0) return [0, 0, R2];
  var H6 = 0, S2 = 0, L2 = M2 + m2;
  S2 = C2 / (L2 > 1 ? 2 - L2 : L2);
  switch (M2) {
    case R2:
      H6 = ((G2 - B2) / C2 + 6) % 6;
      break;
    case G2:
      H6 = (B2 - R2) / C2 + 2;
      break;
    case B2:
      H6 = (R2 - G2) / C2 + 4;
      break;
  }
  return [H6 / 6, S2, L2 / 2];
}
function hsl2RGB(hsl) {
  var H2 = hsl[0], S2 = hsl[1], L2 = hsl[2];
  var C2 = S2 * 2 * (L2 < 0.5 ? L2 : 1 - L2), m2 = L2 - C2 / 2;
  var rgb = [m2, m2, m2], h6 = 6 * H2;
  var X2;
  if (S2 !== 0) switch (h6 | 0) {
    case 0:
    case 6:
      X2 = C2 * h6;
      rgb[0] += C2;
      rgb[1] += X2;
      break;
    case 1:
      X2 = C2 * (2 - h6);
      rgb[0] += X2;
      rgb[1] += C2;
      break;
    case 2:
      X2 = C2 * (h6 - 2);
      rgb[1] += C2;
      rgb[2] += X2;
      break;
    case 3:
      X2 = C2 * (4 - h6);
      rgb[1] += X2;
      rgb[2] += C2;
      break;
    case 4:
      X2 = C2 * (h6 - 4);
      rgb[2] += C2;
      rgb[0] += X2;
      break;
    case 5:
      X2 = C2 * (6 - h6);
      rgb[2] += X2;
      rgb[0] += C2;
      break;
  }
  for (var i = 0; i != 3; ++i) rgb[i] = Math.round(rgb[i] * 255);
  return rgb;
}
function rgb_tint(hex, tint) {
  if (tint === 0) return hex;
  var hsl = rgb2HSL(hex2RGB(hex));
  if (tint < 0) hsl[2] = hsl[2] * (1 + tint);
  else hsl[2] = 1 - (1 - hsl[2]) * (1 - tint);
  return rgb2Hex(hsl2RGB(hsl));
}
var DEF_MDW = 6, MAX_MDW = 15, MIN_MDW = 1, MDW = DEF_MDW;
function width2px(width) {
  return Math.floor((width + Math.round(128 / MDW) / 256) * MDW);
}
function px2char(px) {
  return Math.floor((px - 5) / MDW * 100 + 0.5) / 100;
}
function char2width(chr) {
  return Math.round((chr * MDW + 5) / MDW * 256) / 256;
}
function cycle_width(collw) {
  return char2width(px2char(width2px(collw)));
}
function find_mdw_colw(collw) {
  var delta = Math.abs(collw - cycle_width(collw)), _MDW = MDW;
  if (delta > 5e-3) {
    for (MDW = MIN_MDW; MDW < MAX_MDW; ++MDW) if (Math.abs(collw - cycle_width(collw)) <= delta) {
      delta = Math.abs(collw - cycle_width(collw));
      _MDW = MDW;
    }
  }
  MDW = _MDW;
}
function process_col(coll) {
  if (coll.width) {
    coll.wpx = width2px(coll.width);
    coll.wch = px2char(coll.wpx);
    coll.MDW = MDW;
  } else if (coll.wpx) {
    coll.wch = px2char(coll.wpx);
    coll.width = char2width(coll.wch);
    coll.MDW = MDW;
  } else if (typeof coll.wch == "number") {
    coll.width = char2width(coll.wch);
    coll.wpx = width2px(coll.width);
    coll.MDW = MDW;
  }
  if (coll.customWidth) delete coll.customWidth;
}
var DEF_PPI = 96, PPI = DEF_PPI;
function px2pt(px) {
  return px * 96 / PPI;
}
function pt2px(pt) {
  return pt * PPI / 96;
}
var XLMLPatternTypeMap = {
  "None": "none",
  "Solid": "solid",
  "Gray50": "mediumGray",
  "Gray75": "darkGray",
  "Gray25": "lightGray",
  "HorzStripe": "darkHorizontal",
  "VertStripe": "darkVertical",
  "ReverseDiagStripe": "darkDown",
  "DiagStripe": "darkUp",
  "DiagCross": "darkGrid",
  "ThickDiagCross": "darkTrellis",
  "ThinHorzStripe": "lightHorizontal",
  "ThinVertStripe": "lightVertical",
  "ThinReverseDiagStripe": "lightDown",
  "ThinHorzCross": "lightGrid"
};
function parse_borders(t2, styles, themes, opts) {
  styles.Borders = [];
  var border = {};
  var pass = false;
  (t2[0].match(tagregex) || []).forEach(function(x2) {
    var y2 = parsexmltag(x2);
    switch (strip_ns(y2[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      case "<border":
      case "<border>":
      case "<border/>":
        border = /*::(*/
        {};
        if (y2.diagonalUp) border.diagonalUp = parsexmlbool(y2.diagonalUp);
        if (y2.diagonalDown) border.diagonalDown = parsexmlbool(y2.diagonalDown);
        styles.Borders.push(border);
        break;
      case "</border>":
        break;
      case "<left/>":
        break;
      case "<left":
      case "<left>":
        break;
      case "</left>":
        break;
      case "<right/>":
        break;
      case "<right":
      case "<right>":
        break;
      case "</right>":
        break;
      case "<top/>":
        break;
      case "<top":
      case "<top>":
        break;
      case "</top>":
        break;
      case "<bottom/>":
        break;
      case "<bottom":
      case "<bottom>":
        break;
      case "</bottom>":
        break;
      case "<diagonal":
      case "<diagonal>":
      case "<diagonal/>":
        break;
      case "</diagonal>":
        break;
      case "<horizontal":
      case "<horizontal>":
      case "<horizontal/>":
        break;
      case "</horizontal>":
        break;
      case "<vertical":
      case "<vertical>":
      case "<vertical/>":
        break;
      case "</vertical>":
        break;
      case "<start":
      case "<start>":
      case "<start/>":
        break;
      case "</start>":
        break;
      case "<end":
      case "<end>":
      case "<end/>":
        break;
      case "</end>":
        break;
      case "<color":
      case "<color>":
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        pass = true;
        break;
      case "</ext>":
        pass = false;
        break;
      default:
        if (opts && opts.WTF) {
          if (!pass) throw new Error("unrecognized " + y2[0] + " in borders");
        }
    }
  });
}
function parse_fills(t2, styles, themes, opts) {
  styles.Fills = [];
  var fill2 = {};
  var pass = false;
  (t2[0].match(tagregex) || []).forEach(function(x2) {
    var y2 = parsexmltag(x2);
    switch (strip_ns(y2[0])) {
      case "<fills":
      case "<fills>":
      case "</fills>":
        break;
      case "<fill>":
      case "<fill":
      case "<fill/>":
        fill2 = {};
        styles.Fills.push(fill2);
        break;
      case "</fill>":
        break;
      case "<gradientFill>":
        break;
      case "<gradientFill":
      case "</gradientFill>":
        styles.Fills.push(fill2);
        fill2 = {};
        break;
      case "<patternFill":
      case "<patternFill>":
        if (y2.patternType) fill2.patternType = y2.patternType;
        break;
      case "<patternFill/>":
      case "</patternFill>":
        break;
      case "<bgColor":
        if (!fill2.bgColor) fill2.bgColor = {};
        if (y2.indexed) fill2.bgColor.indexed = parseInt(y2.indexed, 10);
        if (y2.theme) fill2.bgColor.theme = parseInt(y2.theme, 10);
        if (y2.tint) fill2.bgColor.tint = parseFloat(y2.tint);
        if (y2.rgb) fill2.bgColor.rgb = y2.rgb.slice(-6);
        break;
      case "<bgColor/>":
      case "</bgColor>":
        break;
      case "<fgColor":
        if (!fill2.fgColor) fill2.fgColor = {};
        if (y2.theme) fill2.fgColor.theme = parseInt(y2.theme, 10);
        if (y2.tint) fill2.fgColor.tint = parseFloat(y2.tint);
        if (y2.rgb != null) fill2.fgColor.rgb = y2.rgb.slice(-6);
        break;
      case "<fgColor/>":
      case "</fgColor>":
        break;
      case "<stop":
      case "<stop/>":
        break;
      case "</stop>":
        break;
      case "<color":
      case "<color/>":
        break;
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        pass = true;
        break;
      case "</ext>":
        pass = false;
        break;
      default:
        if (opts && opts.WTF) {
          if (!pass) throw new Error("unrecognized " + y2[0] + " in fills");
        }
    }
  });
}
function parse_fonts(t2, styles, themes, opts) {
  styles.Fonts = [];
  var font = {};
  var pass = false;
  (t2[0].match(tagregex) || []).forEach(function(x2) {
    var y2 = parsexmltag(x2);
    switch (strip_ns(y2[0])) {
      case "<fonts":
      case "<fonts>":
      case "</fonts>":
        break;
      case "<font":
      case "<font>":
        break;
      case "</font>":
      case "<font/>":
        styles.Fonts.push(font);
        font = {};
        break;
      case "<name":
        if (y2.val) font.name = utf8read(y2.val);
        break;
      case "<name/>":
      case "</name>":
        break;
      case "<b":
        font.bold = y2.val ? parsexmlbool(y2.val) : 1;
        break;
      case "<b/>":
        font.bold = 1;
        break;
      case "<i":
        font.italic = y2.val ? parsexmlbool(y2.val) : 1;
        break;
      case "<i/>":
        font.italic = 1;
        break;
      case "<u":
        switch (y2.val) {
          case "none":
            font.underline = 0;
            break;
          case "single":
            font.underline = 1;
            break;
          case "double":
            font.underline = 2;
            break;
          case "singleAccounting":
            font.underline = 33;
            break;
          case "doubleAccounting":
            font.underline = 34;
            break;
        }
        break;
      case "<u/>":
        font.underline = 1;
        break;
      case "<strike":
        font.strike = y2.val ? parsexmlbool(y2.val) : 1;
        break;
      case "<strike/>":
        font.strike = 1;
        break;
      case "<outline":
        font.outline = y2.val ? parsexmlbool(y2.val) : 1;
        break;
      case "<outline/>":
        font.outline = 1;
        break;
      case "<shadow":
        font.shadow = y2.val ? parsexmlbool(y2.val) : 1;
        break;
      case "<shadow/>":
        font.shadow = 1;
        break;
      case "<condense":
        font.condense = y2.val ? parsexmlbool(y2.val) : 1;
        break;
      case "<condense/>":
        font.condense = 1;
        break;
      case "<extend":
        font.extend = y2.val ? parsexmlbool(y2.val) : 1;
        break;
      case "<extend/>":
        font.extend = 1;
        break;
      case "<sz":
        if (y2.val) font.sz = +y2.val;
        break;
      case "<sz/>":
      case "</sz>":
        break;
      case "<vertAlign":
        if (y2.val) font.vertAlign = y2.val;
        break;
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      case "<family":
        if (y2.val) font.family = parseInt(y2.val, 10);
        break;
      case "<family/>":
      case "</family>":
        break;
      case "<scheme":
        if (y2.val) font.scheme = y2.val;
        break;
      case "<scheme/>":
      case "</scheme>":
        break;
      case "<charset":
        if (y2.val == "1") break;
        y2.codepage = CS2CP[parseInt(y2.val, 10)];
        break;
      case "<color":
        if (!font.color) font.color = {};
        if (y2.auto) font.color.auto = parsexmlbool(y2.auto);
        if (y2.rgb) font.color.rgb = y2.rgb.slice(-6);
        else if (y2.indexed) {
          font.color.index = parseInt(y2.indexed, 10);
          var icv = XLSIcv[font.color.index];
          if (font.color.index == 81) icv = XLSIcv[1];
          if (!icv) icv = XLSIcv[1];
          font.color.rgb = icv[0].toString(16) + icv[1].toString(16) + icv[2].toString(16);
        } else if (y2.theme) {
          font.color.theme = parseInt(y2.theme, 10);
          if (y2.tint) font.color.tint = parseFloat(y2.tint);
          if (y2.theme && themes.themeElements && themes.themeElements.clrScheme) {
            font.color.rgb = rgb_tint(themes.themeElements.clrScheme[font.color.theme].rgb, font.color.tint || 0);
          }
        }
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<AlternateContent":
        pass = true;
        break;
      case "</AlternateContent>":
        pass = false;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        pass = true;
        break;
      case "</ext>":
        pass = false;
        break;
      default:
        if (opts && opts.WTF) {
          if (!pass) throw new Error("unrecognized " + y2[0] + " in fonts");
        }
    }
  });
}
function parse_numFmts(t2, styles, opts) {
  styles.NumberFmt = [];
  var k2 = keys(table_fmt);
  for (var i = 0; i < k2.length; ++i) styles.NumberFmt[k2[i]] = table_fmt[k2[i]];
  var m2 = t2[0].match(tagregex);
  if (!m2) return;
  for (i = 0; i < m2.length; ++i) {
    var y2 = parsexmltag(m2[i]);
    switch (strip_ns(y2[0])) {
      case "<numFmts":
      case "</numFmts>":
      case "<numFmts/>":
      case "<numFmts>":
        break;
      case "<numFmt":
        {
          var f2 = unescapexml(utf8read(y2.formatCode)), j = parseInt(y2.numFmtId, 10);
          styles.NumberFmt[j] = f2;
          if (j > 0) {
            if (j > 392) {
              for (j = 392; j > 60; --j) if (styles.NumberFmt[j] == null) break;
              styles.NumberFmt[j] = f2;
            }
            SSF_load(f2, j);
          }
        }
        break;
      case "</numFmt>":
        break;
      default:
        if (opts.WTF) throw new Error("unrecognized " + y2[0] + " in numFmts");
    }
  }
}
var cellXF_uint = ["numFmtId", "fillId", "fontId", "borderId", "xfId"];
var cellXF_bool = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function parse_cellXfs(t2, styles, opts) {
  styles.CellXf = [];
  var xf2;
  var pass = false;
  (t2[0].match(tagregex) || []).forEach(function(x2) {
    var y2 = parsexmltag(x2), i = 0;
    switch (strip_ns(y2[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
        xf2 = y2;
        delete xf2[0];
        for (i = 0; i < cellXF_uint.length; ++i) if (xf2[cellXF_uint[i]])
          xf2[cellXF_uint[i]] = parseInt(xf2[cellXF_uint[i]], 10);
        for (i = 0; i < cellXF_bool.length; ++i) if (xf2[cellXF_bool[i]])
          xf2[cellXF_bool[i]] = parsexmlbool(xf2[cellXF_bool[i]]);
        if (styles.NumberFmt && xf2.numFmtId > 392) {
          for (i = 392; i > 60; --i) if (styles.NumberFmt[xf2.numFmtId] == styles.NumberFmt[i]) {
            xf2.numFmtId = i;
            break;
          }
        }
        styles.CellXf.push(xf2);
        break;
      case "</xf>":
        break;
      case "<alignment":
      case "<alignment/>":
        var alignment = {};
        if (y2.vertical) alignment.vertical = y2.vertical;
        if (y2.horizontal) alignment.horizontal = y2.horizontal;
        if (y2.textRotation != null) alignment.textRotation = y2.textRotation;
        if (y2.indent) alignment.indent = y2.indent;
        if (y2.wrapText) alignment.wrapText = parsexmlbool(y2.wrapText);
        xf2.alignment = alignment;
        break;
      case "</alignment>":
        break;
      case "<protection":
        break;
      case "</protection>":
      case "<protection/>":
        break;
      case "<AlternateContent":
        pass = true;
        break;
      case "</AlternateContent>":
        pass = false;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        pass = true;
        break;
      case "</ext>":
        pass = false;
        break;
      default:
        if (opts && opts.WTF) {
          if (!pass) throw new Error("unrecognized " + y2[0] + " in cellXfs");
        }
    }
  });
}
var parse_sty_xml = /* @__PURE__ */ function make_pstyx() {
  var numFmtRegex = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/;
  var cellXfRegex = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/;
  var fillsRegex = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/;
  var fontsRegex = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/;
  var bordersRegex = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function parse_sty_xml2(data, themes, opts) {
    var styles = {};
    if (!data) return styles;
    data = data.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    var t2;
    if (t2 = data.match(numFmtRegex)) parse_numFmts(t2, styles, opts);
    if (t2 = data.match(fontsRegex)) parse_fonts(t2, styles, themes, opts);
    if (t2 = data.match(fillsRegex)) parse_fills(t2, styles, themes, opts);
    if (t2 = data.match(bordersRegex)) parse_borders(t2, styles, themes, opts);
    if (t2 = data.match(cellXfRegex)) parse_cellXfs(t2, styles, opts);
    return styles;
  };
}();
function parse_BrtFmt(data, length) {
  var numFmtId = data.read_shift(2);
  var stFmtCode = parse_XLWideString(data);
  return [numFmtId, stFmtCode];
}
function parse_BrtFont(data, length, opts) {
  var out = {};
  out.sz = data.read_shift(2) / 20;
  var grbit = parse_FontFlags(data);
  if (grbit.fItalic) out.italic = 1;
  if (grbit.fCondense) out.condense = 1;
  if (grbit.fExtend) out.extend = 1;
  if (grbit.fShadow) out.shadow = 1;
  if (grbit.fOutline) out.outline = 1;
  if (grbit.fStrikeout) out.strike = 1;
  var bls = data.read_shift(2);
  if (bls === 700) out.bold = 1;
  switch (data.read_shift(2)) {
    case 1:
      out.vertAlign = "superscript";
      break;
    case 2:
      out.vertAlign = "subscript";
      break;
  }
  var underline = data.read_shift(1);
  if (underline != 0) out.underline = underline;
  var family = data.read_shift(1);
  if (family > 0) out.family = family;
  var bCharSet = data.read_shift(1);
  if (bCharSet > 0) out.charset = bCharSet;
  data.l++;
  out.color = parse_BrtColor(data);
  switch (data.read_shift(1)) {
    case 1:
      out.scheme = "major";
      break;
    case 2:
      out.scheme = "minor";
      break;
  }
  out.name = parse_XLWideString(data);
  return out;
}
var parse_BrtFill = parsenoop;
function parse_BrtXF(data, length) {
  var tgt = data.l + length;
  var ixfeParent = data.read_shift(2);
  var ifmt = data.read_shift(2);
  data.l = tgt;
  return { ixfe: ixfeParent, numFmtId: ifmt };
}
var parse_BrtBorder = parsenoop;
function parse_sty_bin(data, themes, opts) {
  var styles = {};
  styles.NumberFmt = [];
  for (var y2 in table_fmt) styles.NumberFmt[y2] = table_fmt[y2];
  styles.CellXf = [];
  styles.Fonts = [];
  var state = [];
  var pass = false;
  recordhopper(data, function hopper_sty(val, R2, RT) {
    switch (RT) {
      case 44:
        styles.NumberFmt[val[0]] = val[1];
        SSF_load(val[1], val[0]);
        break;
      case 43:
        styles.Fonts.push(val);
        if (val.color.theme != null && themes && themes.themeElements && themes.themeElements.clrScheme) {
          val.color.rgb = rgb_tint(themes.themeElements.clrScheme[val.color.theme].rgb, val.color.tint || 0);
        }
        break;
      case 1025:
        break;
      case 45:
        break;
      case 46:
        break;
      case 47:
        if (state[state.length - 1] == 617) {
          styles.CellXf.push(val);
        }
        break;
      case 48:
      case 507:
      case 572:
      case 475:
        break;
      case 1171:
      case 2102:
      case 1130:
      case 512:
      case 2095:
      case 3072:
        break;
      case 35:
        pass = true;
        break;
      case 36:
        pass = false;
        break;
      case 37:
        state.push(RT);
        pass = true;
        break;
      case 38:
        state.pop();
        pass = false;
        break;
      default:
        if (R2.T > 0) state.push(RT);
        else if (R2.T < 0) state.pop();
        else if (!pass || opts.WTF && state[state.length - 1] != 37) throw new Error("Unexpected record 0x" + RT.toString(16));
    }
  });
  return styles;
}
var XLSXThemeClrScheme = [
  "</a:lt1>",
  "</a:dk1>",
  "</a:lt2>",
  "</a:dk2>",
  "</a:accent1>",
  "</a:accent2>",
  "</a:accent3>",
  "</a:accent4>",
  "</a:accent5>",
  "</a:accent6>",
  "</a:hlink>",
  "</a:folHlink>"
];
function parse_clrScheme(t2, themes, opts) {
  themes.themeElements.clrScheme = [];
  var color = {};
  (t2[0].match(tagregex) || []).forEach(function(x2) {
    var y2 = parsexmltag(x2);
    switch (y2[0]) {
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      case "<a:srgbClr":
        color.rgb = y2.val;
        break;
      case "<a:sysClr":
        color.rgb = y2.lastClr;
        break;
      case "<a:dk1>":
      case "</a:dk1>":
      case "<a:lt1>":
      case "</a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        if (y2[0].charAt(1) === "/") {
          themes.themeElements.clrScheme[XLSXThemeClrScheme.indexOf(y2[0])] = color;
          color = {};
        } else {
          color.name = y2[0].slice(3, y2[0].length - 1);
        }
        break;
      default:
        if (opts && opts.WTF) throw new Error("Unrecognized " + y2[0] + " in clrScheme");
    }
  });
}
function parse_fontScheme() {
}
function parse_fmtScheme() {
}
var clrsregex = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/;
var fntsregex = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/;
var fmtsregex = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function parse_themeElements(data, themes, opts) {
  themes.themeElements = {};
  var t2;
  [
    /* clrScheme CT_ColorScheme */
    ["clrScheme", clrsregex, parse_clrScheme],
    /* fontScheme CT_FontScheme */
    ["fontScheme", fntsregex, parse_fontScheme],
    /* fmtScheme CT_StyleMatrix */
    ["fmtScheme", fmtsregex, parse_fmtScheme]
  ].forEach(function(m2) {
    if (!(t2 = data.match(m2[1]))) throw new Error(m2[0] + " not found in themeElements");
    m2[2](t2, themes, opts);
  });
}
var themeltregex = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function parse_theme_xml(data, opts) {
  if (!data || data.length === 0) data = write_theme();
  var t2;
  var themes = {};
  if (!(t2 = data.match(themeltregex))) throw new Error("themeElements not found in theme");
  parse_themeElements(t2[0], themes, opts);
  themes.raw = data;
  return themes;
}
function write_theme(Themes, opts) {
  var o = [XML_HEADER];
  o[o.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">';
  o[o.length] = "<a:themeElements>";
  o[o.length] = '<a:clrScheme name="Office">';
  o[o.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>';
  o[o.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>';
  o[o.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>';
  o[o.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>';
  o[o.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>';
  o[o.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>';
  o[o.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>';
  o[o.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>';
  o[o.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>';
  o[o.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>';
  o[o.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>';
  o[o.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>';
  o[o.length] = "</a:clrScheme>";
  o[o.length] = '<a:fontScheme name="Office">';
  o[o.length] = "<a:majorFont>";
  o[o.length] = '<a:latin typeface="Cambria"/>';
  o[o.length] = '<a:ea typeface=""/>';
  o[o.length] = '<a:cs typeface=""/>';
  o[o.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
  o[o.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
  o[o.length] = '<a:font script="Hans" typeface="宋体"/>';
  o[o.length] = '<a:font script="Hant" typeface="新細明體"/>';
  o[o.length] = '<a:font script="Arab" typeface="Times New Roman"/>';
  o[o.length] = '<a:font script="Hebr" typeface="Times New Roman"/>';
  o[o.length] = '<a:font script="Thai" typeface="Tahoma"/>';
  o[o.length] = '<a:font script="Ethi" typeface="Nyala"/>';
  o[o.length] = '<a:font script="Beng" typeface="Vrinda"/>';
  o[o.length] = '<a:font script="Gujr" typeface="Shruti"/>';
  o[o.length] = '<a:font script="Khmr" typeface="MoolBoran"/>';
  o[o.length] = '<a:font script="Knda" typeface="Tunga"/>';
  o[o.length] = '<a:font script="Guru" typeface="Raavi"/>';
  o[o.length] = '<a:font script="Cans" typeface="Euphemia"/>';
  o[o.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
  o[o.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
  o[o.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
  o[o.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
  o[o.length] = '<a:font script="Deva" typeface="Mangal"/>';
  o[o.length] = '<a:font script="Telu" typeface="Gautami"/>';
  o[o.length] = '<a:font script="Taml" typeface="Latha"/>';
  o[o.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
  o[o.length] = '<a:font script="Orya" typeface="Kalinga"/>';
  o[o.length] = '<a:font script="Mlym" typeface="Kartika"/>';
  o[o.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
  o[o.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
  o[o.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
  o[o.length] = '<a:font script="Viet" typeface="Times New Roman"/>';
  o[o.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
  o[o.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
  o[o.length] = "</a:majorFont>";
  o[o.length] = "<a:minorFont>";
  o[o.length] = '<a:latin typeface="Calibri"/>';
  o[o.length] = '<a:ea typeface=""/>';
  o[o.length] = '<a:cs typeface=""/>';
  o[o.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
  o[o.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
  o[o.length] = '<a:font script="Hans" typeface="宋体"/>';
  o[o.length] = '<a:font script="Hant" typeface="新細明體"/>';
  o[o.length] = '<a:font script="Arab" typeface="Arial"/>';
  o[o.length] = '<a:font script="Hebr" typeface="Arial"/>';
  o[o.length] = '<a:font script="Thai" typeface="Tahoma"/>';
  o[o.length] = '<a:font script="Ethi" typeface="Nyala"/>';
  o[o.length] = '<a:font script="Beng" typeface="Vrinda"/>';
  o[o.length] = '<a:font script="Gujr" typeface="Shruti"/>';
  o[o.length] = '<a:font script="Khmr" typeface="DaunPenh"/>';
  o[o.length] = '<a:font script="Knda" typeface="Tunga"/>';
  o[o.length] = '<a:font script="Guru" typeface="Raavi"/>';
  o[o.length] = '<a:font script="Cans" typeface="Euphemia"/>';
  o[o.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
  o[o.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
  o[o.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
  o[o.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
  o[o.length] = '<a:font script="Deva" typeface="Mangal"/>';
  o[o.length] = '<a:font script="Telu" typeface="Gautami"/>';
  o[o.length] = '<a:font script="Taml" typeface="Latha"/>';
  o[o.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
  o[o.length] = '<a:font script="Orya" typeface="Kalinga"/>';
  o[o.length] = '<a:font script="Mlym" typeface="Kartika"/>';
  o[o.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
  o[o.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
  o[o.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
  o[o.length] = '<a:font script="Viet" typeface="Arial"/>';
  o[o.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
  o[o.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
  o[o.length] = "</a:minorFont>";
  o[o.length] = "</a:fontScheme>";
  o[o.length] = '<a:fmtScheme name="Office">';
  o[o.length] = "<a:fillStyleLst>";
  o[o.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
  o[o.length] = '<a:gradFill rotWithShape="1">';
  o[o.length] = "<a:gsLst>";
  o[o.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
  o[o.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
  o[o.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
  o[o.length] = "</a:gsLst>";
  o[o.length] = '<a:lin ang="16200000" scaled="1"/>';
  o[o.length] = "</a:gradFill>";
  o[o.length] = '<a:gradFill rotWithShape="1">';
  o[o.length] = "<a:gsLst>";
  o[o.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>';
  o[o.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
  o[o.length] = "</a:gsLst>";
  o[o.length] = '<a:lin ang="16200000" scaled="0"/>';
  o[o.length] = "</a:gradFill>";
  o[o.length] = "</a:fillStyleLst>";
  o[o.length] = "<a:lnStyleLst>";
  o[o.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>';
  o[o.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
  o[o.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
  o[o.length] = "</a:lnStyleLst>";
  o[o.length] = "<a:effectStyleLst>";
  o[o.length] = "<a:effectStyle>";
  o[o.length] = "<a:effectLst>";
  o[o.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>';
  o[o.length] = "</a:effectLst>";
  o[o.length] = "</a:effectStyle>";
  o[o.length] = "<a:effectStyle>";
  o[o.length] = "<a:effectLst>";
  o[o.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
  o[o.length] = "</a:effectLst>";
  o[o.length] = "</a:effectStyle>";
  o[o.length] = "<a:effectStyle>";
  o[o.length] = "<a:effectLst>";
  o[o.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
  o[o.length] = "</a:effectLst>";
  o[o.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>';
  o[o.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>';
  o[o.length] = "</a:effectStyle>";
  o[o.length] = "</a:effectStyleLst>";
  o[o.length] = "<a:bgFillStyleLst>";
  o[o.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
  o[o.length] = '<a:gradFill rotWithShape="1">';
  o[o.length] = "<a:gsLst>";
  o[o.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
  o[o.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
  o[o.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>';
  o[o.length] = "</a:gsLst>";
  o[o.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>';
  o[o.length] = "</a:gradFill>";
  o[o.length] = '<a:gradFill rotWithShape="1">';
  o[o.length] = "<a:gsLst>";
  o[o.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
  o[o.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>';
  o[o.length] = "</a:gsLst>";
  o[o.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>';
  o[o.length] = "</a:gradFill>";
  o[o.length] = "</a:bgFillStyleLst>";
  o[o.length] = "</a:fmtScheme>";
  o[o.length] = "</a:themeElements>";
  o[o.length] = "<a:objectDefaults>";
  o[o.length] = "<a:spDef>";
  o[o.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>';
  o[o.length] = "</a:spDef>";
  o[o.length] = "<a:lnDef>";
  o[o.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>';
  o[o.length] = "</a:lnDef>";
  o[o.length] = "</a:objectDefaults>";
  o[o.length] = "<a:extraClrSchemeLst/>";
  o[o.length] = "</a:theme>";
  return o.join("");
}
function parse_Theme(blob, length, opts) {
  var end = blob.l + length;
  var dwThemeVersion = blob.read_shift(4);
  if (dwThemeVersion === 124226) return;
  if (!opts.cellStyles) {
    blob.l = end;
    return;
  }
  var data = blob.slice(blob.l);
  blob.l = end;
  var zip;
  try {
    zip = zip_read(data, { type: "array" });
  } catch (e) {
    return;
  }
  var themeXML = getzipstr(zip, "theme/theme/theme1.xml", true);
  if (!themeXML) return;
  return parse_theme_xml(themeXML, opts);
}
function parse_ColorTheme(blob) {
  return blob.read_shift(4);
}
function parse_FullColorExt(blob) {
  var o = {};
  o.xclrType = blob.read_shift(2);
  o.nTintShade = blob.read_shift(2);
  switch (o.xclrType) {
    case 0:
      blob.l += 4;
      break;
    case 1:
      o.xclrValue = parse_IcvXF(blob, 4);
      break;
    case 2:
      o.xclrValue = parse_LongRGBA(blob);
      break;
    case 3:
      o.xclrValue = parse_ColorTheme(blob);
      break;
    case 4:
      blob.l += 4;
      break;
  }
  blob.l += 8;
  return o;
}
function parse_IcvXF(blob, length) {
  return parsenoop(blob, length);
}
function parse_XFExtGradient(blob, length) {
  return parsenoop(blob, length);
}
function parse_ExtProp(blob) {
  var extType = blob.read_shift(2);
  var cb2 = blob.read_shift(2) - 4;
  var o = [extType];
  switch (extType) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      o[1] = parse_FullColorExt(blob);
      break;
    case 6:
      o[1] = parse_XFExtGradient(blob, cb2);
      break;
    case 14:
    case 15:
      o[1] = blob.read_shift(cb2 === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + extType + " " + cb2);
  }
  return o;
}
function parse_XFExt(blob, length) {
  var end = blob.l + length;
  blob.l += 2;
  var ixfe = blob.read_shift(2);
  blob.l += 2;
  var cexts = blob.read_shift(2);
  var ext = [];
  while (cexts-- > 0) ext.push(parse_ExtProp(blob, end - blob.l));
  return { ixfe, ext };
}
function update_xfext(xf2, xfext) {
  xfext.forEach(function(xfe) {
    switch (xfe[0]) {
    }
  });
}
function parse_BrtMdtinfo(data, length) {
  return {
    flags: data.read_shift(4),
    version: data.read_shift(4),
    name: parse_XLWideString(data)
  };
}
function parse_BrtMdb(data) {
  var out = [];
  var cnt = data.read_shift(4);
  while (cnt-- > 0)
    out.push([data.read_shift(4), data.read_shift(4)]);
  return out;
}
function parse_BrtBeginEsmdb(data) {
  data.l += 4;
  return data.read_shift(4) != 0;
}
function parse_xlmeta_bin(data, name, _opts) {
  var out = { Types: [], Cell: [], Value: [] };
  var opts = _opts || {};
  var state = [];
  var pass = false;
  var metatype = 2;
  recordhopper(data, function(val, R2, RT) {
    switch (RT) {
      case 335:
        out.Types.push({ name: val.name });
        break;
      case 51:
        val.forEach(function(r2) {
          if (metatype == 1)
            out.Cell.push({ type: out.Types[r2[0] - 1].name, index: r2[1] });
          else if (metatype == 0)
            out.Value.push({ type: out.Types[r2[0] - 1].name, index: r2[1] });
        });
        break;
      case 337:
        metatype = val ? 1 : 0;
        break;
      case 338:
        metatype = 2;
        break;
      case 35:
        state.push(RT);
        pass = true;
        break;
      case 36:
        state.pop();
        pass = false;
        break;
      default:
        if (R2.T) ;
        else if (!pass || opts.WTF && state[state.length - 1] != 35)
          throw new Error("Unexpected record 0x" + RT.toString(16));
    }
  });
  return out;
}
function parse_xlmeta_xml(data, name, opts) {
  var out = { Types: [], Cell: [], Value: [] };
  if (!data)
    return out;
  var pass = false;
  var metatype = 2;
  var lastmeta;
  data.replace(tagregex, function(x2) {
    var y2 = parsexmltag(x2);
    switch (strip_ns(y2[0])) {
      case "<?xml":
        break;
      case "<metadata":
      case "</metadata>":
        break;
      case "<metadataTypes":
      case "</metadataTypes>":
        break;
      case "<metadataType":
        out.Types.push({ name: y2.name });
        break;
      case "</metadataType>":
        break;
      case "<futureMetadata":
        for (var j = 0; j < out.Types.length; ++j)
          if (out.Types[j].name == y2.name)
            lastmeta = out.Types[j];
        break;
      case "</futureMetadata>":
        break;
      case "<bk>":
        break;
      case "</bk>":
        break;
      case "<rc":
        if (metatype == 1)
          out.Cell.push({ type: out.Types[y2.t - 1].name, index: +y2.v });
        else if (metatype == 0)
          out.Value.push({ type: out.Types[y2.t - 1].name, index: +y2.v });
        break;
      case "</rc>":
        break;
      case "<cellMetadata":
        metatype = 1;
        break;
      case "</cellMetadata>":
        metatype = 2;
        break;
      case "<valueMetadata":
        metatype = 0;
        break;
      case "</valueMetadata>":
        metatype = 2;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        pass = true;
        break;
      case "</ext>":
        pass = false;
        break;
      case "<rvb":
        if (!lastmeta)
          break;
        if (!lastmeta.offsets)
          lastmeta.offsets = [];
        lastmeta.offsets.push(+y2.i);
        break;
      default:
        if (!pass && opts.WTF)
          throw new Error("unrecognized " + y2[0] + " in metadata");
    }
    return x2;
  });
  return out;
}
function parse_cc_xml(data) {
  var d = [];
  if (!data) return d;
  var i = 1;
  (data.match(tagregex) || []).forEach(function(x2) {
    var y2 = parsexmltag(x2);
    switch (y2[0]) {
      case "<?xml":
        break;
      case "<calcChain":
      case "<calcChain>":
      case "</calcChain>":
        break;
      case "<c":
        delete y2[0];
        if (y2.i) i = y2.i;
        else y2.i = i;
        d.push(y2);
        break;
    }
  });
  return d;
}
function parse_BrtCalcChainItem$(data) {
  var out = {};
  out.i = data.read_shift(4);
  var cell = {};
  cell.r = data.read_shift(4);
  cell.c = data.read_shift(4);
  out.r = encode_cell(cell);
  var flags = data.read_shift(1);
  if (flags & 2) out.l = "1";
  if (flags & 8) out.a = "1";
  return out;
}
function parse_cc_bin(data, name, opts) {
  var out = [];
  recordhopper(data, function hopper_cc(val, R2, RT) {
    switch (RT) {
      case 63:
        out.push(val);
        break;
      default:
        if (R2.T) ;
        else throw new Error("Unexpected record 0x" + RT.toString(16));
    }
  });
  return out;
}
function parse_xlink_xml() {
}
function parse_xlink_bin(data, rel, name, _opts) {
  if (!data) return data;
  var opts = _opts || {};
  var pass = false;
  recordhopper(data, function xlink_parse(val, R2, RT) {
    switch (RT) {
      case 359:
      case 363:
      case 364:
      case 366:
      case 367:
      case 368:
      case 369:
      case 370:
      case 371:
      case 472:
      case 577:
      case 578:
      case 579:
      case 580:
      case 581:
      case 582:
      case 583:
      case 584:
      case 585:
      case 586:
      case 587:
        break;
      case 35:
        pass = true;
        break;
      case 36:
        pass = false;
        break;
      default:
        if (R2.T) ;
        else if (!pass || opts.WTF) throw new Error("Unexpected record 0x" + RT.toString(16));
    }
  }, opts);
}
function parse_drawing(data, rels) {
  if (!data) return "??";
  var id2 = (data.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
  return rels["!id"][id2].Target;
}
function sheet_insert_comments(sheet, comments, threaded, people) {
  var dense = Array.isArray(sheet);
  var cell;
  comments.forEach(function(comment) {
    var r2 = decode_cell(comment.ref);
    if (dense) {
      if (!sheet[r2.r]) sheet[r2.r] = [];
      cell = sheet[r2.r][r2.c];
    } else cell = sheet[comment.ref];
    if (!cell) {
      cell = { t: "z" };
      if (dense) sheet[r2.r][r2.c] = cell;
      else sheet[comment.ref] = cell;
      var range = safe_decode_range(sheet["!ref"] || "BDWGO1000001:A1");
      if (range.s.r > r2.r) range.s.r = r2.r;
      if (range.e.r < r2.r) range.e.r = r2.r;
      if (range.s.c > r2.c) range.s.c = r2.c;
      if (range.e.c < r2.c) range.e.c = r2.c;
      var encoded = encode_range(range);
      if (encoded !== sheet["!ref"]) sheet["!ref"] = encoded;
    }
    if (!cell.c) cell.c = [];
    var o = { a: comment.author, t: comment.t, r: comment.r, T: threaded };
    if (comment.h) o.h = comment.h;
    for (var i = cell.c.length - 1; i >= 0; --i) {
      if (!threaded && cell.c[i].T) return;
      if (threaded && !cell.c[i].T) cell.c.splice(i, 1);
    }
    if (threaded && people) for (i = 0; i < people.length; ++i) {
      if (o.a == people[i].id) {
        o.a = people[i].name || o.a;
        break;
      }
    }
    cell.c.push(o);
  });
}
function parse_comments_xml(data, opts) {
  if (data.match(/<(?:\w+:)?comments *\/>/)) return [];
  var authors = [];
  var commentList = [];
  var authtag = data.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
  if (authtag && authtag[1]) authtag[1].split(/<\/\w*:?author>/).forEach(function(x2) {
    if (x2 === "" || x2.trim() === "") return;
    var a = x2.match(/<(?:\w+:)?author[^>]*>(.*)/);
    if (a) authors.push(a[1]);
  });
  var cmnttag = data.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
  if (cmnttag && cmnttag[1]) cmnttag[1].split(/<\/\w*:?comment>/).forEach(function(x2) {
    if (x2 === "" || x2.trim() === "") return;
    var cm = x2.match(/<(?:\w+:)?comment[^>]*>/);
    if (!cm) return;
    var y2 = parsexmltag(cm[0]);
    var comment = { author: y2.authorId && authors[y2.authorId] || "sheetjsghost", ref: y2.ref, guid: y2.guid };
    var cell = decode_cell(y2.ref);
    if (opts.sheetRows && opts.sheetRows <= cell.r) return;
    var textMatch = x2.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/);
    var rt = !!textMatch && !!textMatch[1] && parse_si(textMatch[1]) || { r: "", t: "", h: "" };
    comment.r = rt.r;
    if (rt.r == "<t></t>") rt.t = rt.h = "";
    comment.t = (rt.t || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    if (opts.cellHTML) comment.h = rt.h;
    commentList.push(comment);
  });
  return commentList;
}
function parse_tcmnt_xml(data, opts) {
  var out = [];
  var pass = false, comment = {}, tidx = 0;
  data.replace(tagregex, function xml_tcmnt(x2, idx) {
    var y2 = parsexmltag(x2);
    switch (strip_ns(y2[0])) {
      case "<?xml":
        break;
      case "<ThreadedComments":
        break;
      case "</ThreadedComments>":
        break;
      case "<threadedComment":
        comment = { author: y2.personId, guid: y2.id, ref: y2.ref, T: 1 };
        break;
      case "</threadedComment>":
        if (comment.t != null) out.push(comment);
        break;
      case "<text>":
      case "<text":
        tidx = idx + x2.length;
        break;
      case "</text>":
        comment.t = data.slice(tidx, idx).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        break;
      case "<mentions":
      case "<mentions>":
        pass = true;
        break;
      case "</mentions>":
        pass = false;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        pass = true;
        break;
      case "</ext>":
        pass = false;
        break;
      default:
        if (!pass && opts.WTF) throw new Error("unrecognized " + y2[0] + " in threaded comments");
    }
    return x2;
  });
  return out;
}
function parse_people_xml(data, opts) {
  var out = [];
  var pass = false;
  data.replace(tagregex, function xml_tcmnt(x2) {
    var y2 = parsexmltag(x2);
    switch (strip_ns(y2[0])) {
      case "<?xml":
        break;
      case "<personList":
        break;
      case "</personList>":
        break;
      case "<person":
        out.push({ name: y2.displayname, id: y2.id });
        break;
      case "</person>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        pass = true;
        break;
      case "</ext>":
        pass = false;
        break;
      default:
        if (!pass && opts.WTF) throw new Error("unrecognized " + y2[0] + " in threaded comments");
    }
    return x2;
  });
  return out;
}
function parse_BrtBeginComment(data) {
  var out = {};
  out.iauthor = data.read_shift(4);
  var rfx = parse_UncheckedRfX(data);
  out.rfx = rfx.s;
  out.ref = encode_cell(rfx.s);
  data.l += 16;
  return out;
}
var parse_BrtCommentAuthor = parse_XLWideString;
function parse_comments_bin(data, opts) {
  var out = [];
  var authors = [];
  var c = {};
  var pass = false;
  recordhopper(data, function hopper_cmnt(val, R2, RT) {
    switch (RT) {
      case 632:
        authors.push(val);
        break;
      case 635:
        c = val;
        break;
      case 637:
        c.t = val.t;
        c.h = val.h;
        c.r = val.r;
        break;
      case 636:
        c.author = authors[c.iauthor];
        delete c.iauthor;
        if (opts.sheetRows && c.rfx && opts.sheetRows <= c.rfx.r) break;
        if (!c.t) c.t = "";
        delete c.rfx;
        out.push(c);
        break;
      case 3072:
        break;
      case 35:
        pass = true;
        break;
      case 36:
        pass = false;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (R2.T) ;
        else if (!pass || opts.WTF) throw new Error("Unexpected record 0x" + RT.toString(16));
    }
  });
  return out;
}
var CT_VBA = "application/vnd.ms-office.vbaProject";
function make_vba_xls(cfb) {
  var newcfb = CFB.utils.cfb_new({ root: "R" });
  cfb.FullPaths.forEach(function(p2, i) {
    if (p2.slice(-1) === "/" || !p2.match(/_VBA_PROJECT_CUR/))
      return;
    var newpath = p2.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
    CFB.utils.cfb_add(newcfb, newpath, cfb.FileIndex[i].content);
  });
  return CFB.write(newcfb);
}
function parse_ds_bin() {
  return { "!type": "dialog" };
}
function parse_ds_xml() {
  return { "!type": "dialog" };
}
function parse_ms_bin() {
  return { "!type": "macro" };
}
function parse_ms_xml() {
  return { "!type": "macro" };
}
var rc_to_a1 = /* @__PURE__ */ function() {
  var rcregex = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g;
  var rcbase = { r: 0, c: 0 };
  function rcfunc($$, $1, $2, $3) {
    var cRel = false, rRel = false;
    if ($2.length == 0) rRel = true;
    else if ($2.charAt(0) == "[") {
      rRel = true;
      $2 = $2.slice(1, -1);
    }
    if ($3.length == 0) cRel = true;
    else if ($3.charAt(0) == "[") {
      cRel = true;
      $3 = $3.slice(1, -1);
    }
    var R2 = $2.length > 0 ? parseInt($2, 10) | 0 : 0, C2 = $3.length > 0 ? parseInt($3, 10) | 0 : 0;
    if (cRel) C2 += rcbase.c;
    else --C2;
    if (rRel) R2 += rcbase.r;
    else --R2;
    return $1 + (cRel ? "" : "$") + encode_col(C2) + (rRel ? "" : "$") + encode_row(R2);
  }
  return function rc_to_a12(fstr, base) {
    rcbase = base;
    return fstr.replace(rcregex, rcfunc);
  };
}();
var crefregex = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;
var a1_to_rc = /* @__PURE__ */ function() {
  return function a1_to_rc2(fstr, base) {
    return fstr.replace(crefregex, function($0, $1, $2, $3, $4, $5) {
      var c = decode_col($3) - ($2 ? 0 : base.c);
      var r2 = decode_row($5) - ($4 ? 0 : base.r);
      var R2 = r2 == 0 ? "" : !$4 ? "[" + r2 + "]" : r2 + 1;
      var C2 = c == 0 ? "" : !$2 ? "[" + c + "]" : c + 1;
      return $1 + "R" + R2 + "C" + C2;
    });
  };
}();
function shift_formula_str(f2, delta) {
  return f2.replace(crefregex, function($0, $1, $2, $3, $4, $5) {
    return $1 + ($2 == "$" ? $2 + $3 : encode_col(decode_col($3) + delta.c)) + ($4 == "$" ? $4 + $5 : encode_row(decode_row($5) + delta.r));
  });
}
function shift_formula_xlsx(f2, range, cell) {
  var r2 = decode_range(range), s = r2.s, c = decode_cell(cell);
  var delta = { r: c.r - s.r, c: c.c - s.c };
  return shift_formula_str(f2, delta);
}
function fuzzyfmla(f2) {
  if (f2.length == 1) return false;
  return true;
}
function _xlfn(f2) {
  return f2.replace(/_xlfn\./g, "");
}
function parseread1(blob) {
  blob.l += 1;
  return;
}
function parse_ColRelU(blob, length) {
  var c = blob.read_shift(2);
  return [c & 16383, c >> 14 & 1, c >> 15 & 1];
}
function parse_RgceArea(blob, length, opts) {
  var w2 = 2;
  if (opts) {
    if (opts.biff >= 2 && opts.biff <= 5) return parse_RgceArea_BIFF2(blob);
    else if (opts.biff == 12) w2 = 4;
  }
  var r2 = blob.read_shift(w2), R2 = blob.read_shift(w2);
  var c = parse_ColRelU(blob);
  var C2 = parse_ColRelU(blob);
  return { s: { r: r2, c: c[0], cRel: c[1], rRel: c[2] }, e: { r: R2, c: C2[0], cRel: C2[1], rRel: C2[2] } };
}
function parse_RgceArea_BIFF2(blob) {
  var r2 = parse_ColRelU(blob), R2 = parse_ColRelU(blob);
  var c = blob.read_shift(1);
  var C2 = blob.read_shift(1);
  return { s: { r: r2[0], c, cRel: r2[1], rRel: r2[2] }, e: { r: R2[0], c: C2, cRel: R2[1], rRel: R2[2] } };
}
function parse_RgceAreaRel(blob, length, opts) {
  if (opts.biff < 8) return parse_RgceArea_BIFF2(blob);
  var r2 = blob.read_shift(opts.biff == 12 ? 4 : 2), R2 = blob.read_shift(opts.biff == 12 ? 4 : 2);
  var c = parse_ColRelU(blob);
  var C2 = parse_ColRelU(blob);
  return { s: { r: r2, c: c[0], cRel: c[1], rRel: c[2] }, e: { r: R2, c: C2[0], cRel: C2[1], rRel: C2[2] } };
}
function parse_RgceLoc(blob, length, opts) {
  if (opts && opts.biff >= 2 && opts.biff <= 5) return parse_RgceLoc_BIFF2(blob);
  var r2 = blob.read_shift(opts && opts.biff == 12 ? 4 : 2);
  var c = parse_ColRelU(blob);
  return { r: r2, c: c[0], cRel: c[1], rRel: c[2] };
}
function parse_RgceLoc_BIFF2(blob) {
  var r2 = parse_ColRelU(blob);
  var c = blob.read_shift(1);
  return { r: r2[0], c, cRel: r2[1], rRel: r2[2] };
}
function parse_RgceElfLoc(blob) {
  var r2 = blob.read_shift(2);
  var c = blob.read_shift(2);
  return { r: r2, c: c & 255, fQuoted: !!(c & 16384), cRel: c >> 15, rRel: c >> 15 };
}
function parse_RgceLocRel(blob, length, opts) {
  var biff = opts && opts.biff ? opts.biff : 8;
  if (biff >= 2 && biff <= 5) return parse_RgceLocRel_BIFF2(blob);
  var r2 = blob.read_shift(biff >= 12 ? 4 : 2);
  var cl2 = blob.read_shift(2);
  var cRel = (cl2 & 16384) >> 14, rRel = (cl2 & 32768) >> 15;
  cl2 &= 16383;
  if (rRel == 1) while (r2 > 524287) r2 -= 1048576;
  if (cRel == 1) while (cl2 > 8191) cl2 = cl2 - 16384;
  return { r: r2, c: cl2, cRel, rRel };
}
function parse_RgceLocRel_BIFF2(blob) {
  var rl2 = blob.read_shift(2);
  var c = blob.read_shift(1);
  var rRel = (rl2 & 32768) >> 15, cRel = (rl2 & 16384) >> 14;
  rl2 &= 16383;
  if (rRel == 1 && rl2 >= 8192) rl2 = rl2 - 16384;
  if (cRel == 1 && c >= 128) c = c - 256;
  return { r: rl2, c, cRel, rRel };
}
function parse_PtgArea(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  var area = parse_RgceArea(blob, opts.biff >= 2 && opts.biff <= 5 ? 6 : 8, opts);
  return [type, area];
}
function parse_PtgArea3d(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  var ixti = blob.read_shift(2, "i");
  var w2 = 8;
  if (opts) switch (opts.biff) {
    case 5:
      blob.l += 12;
      w2 = 6;
      break;
    case 12:
      w2 = 12;
      break;
  }
  var area = parse_RgceArea(blob, w2, opts);
  return [type, ixti, area];
}
function parse_PtgAreaErr(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  blob.l += opts && opts.biff > 8 ? 12 : opts.biff < 8 ? 6 : 8;
  return [type];
}
function parse_PtgAreaErr3d(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  var ixti = blob.read_shift(2);
  var w2 = 8;
  if (opts) switch (opts.biff) {
    case 5:
      blob.l += 12;
      w2 = 6;
      break;
    case 12:
      w2 = 12;
      break;
  }
  blob.l += w2;
  return [type, ixti];
}
function parse_PtgAreaN(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  var area = parse_RgceAreaRel(blob, length - 1, opts);
  return [type, area];
}
function parse_PtgArray(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  blob.l += opts.biff == 2 ? 6 : opts.biff == 12 ? 14 : 7;
  return [type];
}
function parse_PtgAttrBaxcel(blob) {
  var bitSemi = blob[blob.l + 1] & 1;
  var bitBaxcel = 1;
  blob.l += 4;
  return [bitSemi, bitBaxcel];
}
function parse_PtgAttrChoose(blob, length, opts) {
  blob.l += 2;
  var offset = blob.read_shift(opts && opts.biff == 2 ? 1 : 2);
  var o = [];
  for (var i = 0; i <= offset; ++i) o.push(blob.read_shift(opts && opts.biff == 2 ? 1 : 2));
  return o;
}
function parse_PtgAttrGoto(blob, length, opts) {
  var bitGoto = blob[blob.l + 1] & 255 ? 1 : 0;
  blob.l += 2;
  return [bitGoto, blob.read_shift(opts && opts.biff == 2 ? 1 : 2)];
}
function parse_PtgAttrIf(blob, length, opts) {
  var bitIf = blob[blob.l + 1] & 255 ? 1 : 0;
  blob.l += 2;
  return [bitIf, blob.read_shift(opts && opts.biff == 2 ? 1 : 2)];
}
function parse_PtgAttrIfError(blob) {
  var bitIf = blob[blob.l + 1] & 255 ? 1 : 0;
  blob.l += 2;
  return [bitIf, blob.read_shift(2)];
}
function parse_PtgAttrSemi(blob, length, opts) {
  var bitSemi = blob[blob.l + 1] & 255 ? 1 : 0;
  blob.l += opts && opts.biff == 2 ? 3 : 4;
  return [bitSemi];
}
function parse_PtgAttrSpaceType(blob) {
  var type = blob.read_shift(1), cch = blob.read_shift(1);
  return [type, cch];
}
function parse_PtgAttrSpace(blob) {
  blob.read_shift(2);
  return parse_PtgAttrSpaceType(blob);
}
function parse_PtgAttrSpaceSemi(blob) {
  blob.read_shift(2);
  return parse_PtgAttrSpaceType(blob);
}
function parse_PtgRef(blob, length, opts) {
  var type = (blob[blob.l] & 96) >> 5;
  blob.l += 1;
  var loc = parse_RgceLoc(blob, 0, opts);
  return [type, loc];
}
function parse_PtgRefN(blob, length, opts) {
  var type = (blob[blob.l] & 96) >> 5;
  blob.l += 1;
  var loc = parse_RgceLocRel(blob, 0, opts);
  return [type, loc];
}
function parse_PtgRef3d(blob, length, opts) {
  var type = (blob[blob.l] & 96) >> 5;
  blob.l += 1;
  var ixti = blob.read_shift(2);
  if (opts && opts.biff == 5) blob.l += 12;
  var loc = parse_RgceLoc(blob, 0, opts);
  return [type, ixti, loc];
}
function parse_PtgFunc(blob, length, opts) {
  var type = (blob[blob.l] & 96) >> 5;
  blob.l += 1;
  var iftab = blob.read_shift(opts && opts.biff <= 3 ? 1 : 2);
  return [FtabArgc[iftab], Ftab[iftab], type];
}
function parse_PtgFuncVar(blob, length, opts) {
  var type = blob[blob.l++];
  var cparams = blob.read_shift(1), tab = opts && opts.biff <= 3 ? [type == 88 ? -1 : 0, blob.read_shift(1)] : parsetab(blob);
  return [cparams, (tab[0] === 0 ? Ftab : Cetab)[tab[1]]];
}
function parsetab(blob) {
  return [blob[blob.l + 1] >> 7, blob.read_shift(2) & 32767];
}
function parse_PtgAttrSum(blob, length, opts) {
  blob.l += opts && opts.biff == 2 ? 3 : 4;
  return;
}
function parse_PtgExp(blob, length, opts) {
  blob.l++;
  if (opts && opts.biff == 12) return [blob.read_shift(4, "i"), 0];
  var row = blob.read_shift(2);
  var col = blob.read_shift(opts && opts.biff == 2 ? 1 : 2);
  return [row, col];
}
function parse_PtgErr(blob) {
  blob.l++;
  return BErr[blob.read_shift(1)];
}
function parse_PtgInt(blob) {
  blob.l++;
  return blob.read_shift(2);
}
function parse_PtgBool(blob) {
  blob.l++;
  return blob.read_shift(1) !== 0;
}
function parse_PtgNum(blob) {
  blob.l++;
  return parse_Xnum(blob);
}
function parse_PtgStr(blob, length, opts) {
  blob.l++;
  return parse_ShortXLUnicodeString(blob, length - 1, opts);
}
function parse_SerAr(blob, biff) {
  var val = [blob.read_shift(1)];
  if (biff == 12) switch (val[0]) {
    case 2:
      val[0] = 4;
      break;
    case 4:
      val[0] = 16;
      break;
    case 0:
      val[0] = 1;
      break;
    case 1:
      val[0] = 2;
      break;
  }
  switch (val[0]) {
    case 4:
      val[1] = parsebool(blob, 1) ? "TRUE" : "FALSE";
      if (biff != 12) blob.l += 7;
      break;
    case 37:
    case 16:
      val[1] = BErr[blob[blob.l]];
      blob.l += biff == 12 ? 4 : 8;
      break;
    case 0:
      blob.l += 8;
      break;
    case 1:
      val[1] = parse_Xnum(blob);
      break;
    case 2:
      val[1] = parse_XLUnicodeString2(blob, 0, { biff: biff > 0 && biff < 8 ? 2 : biff });
      break;
    default:
      throw new Error("Bad SerAr: " + val[0]);
  }
  return val;
}
function parse_PtgExtraMem(blob, cce, opts) {
  var count = blob.read_shift(opts.biff == 12 ? 4 : 2);
  var out = [];
  for (var i = 0; i != count; ++i) out.push((opts.biff == 12 ? parse_UncheckedRfX : parse_Ref8U)(blob));
  return out;
}
function parse_PtgExtraArray(blob, length, opts) {
  var rows = 0, cols = 0;
  if (opts.biff == 12) {
    rows = blob.read_shift(4);
    cols = blob.read_shift(4);
  } else {
    cols = 1 + blob.read_shift(1);
    rows = 1 + blob.read_shift(2);
  }
  if (opts.biff >= 2 && opts.biff < 8) {
    --rows;
    if (--cols == 0) cols = 256;
  }
  for (var i = 0, o = []; i != rows && (o[i] = []); ++i)
    for (var j = 0; j != cols; ++j) o[i][j] = parse_SerAr(blob, opts.biff);
  return o;
}
function parse_PtgName(blob, length, opts) {
  var type = blob.read_shift(1) >>> 5 & 3;
  var w2 = !opts || opts.biff >= 8 ? 4 : 2;
  var nameindex = blob.read_shift(w2);
  switch (opts.biff) {
    case 2:
      blob.l += 5;
      break;
    case 3:
    case 4:
      blob.l += 8;
      break;
    case 5:
      blob.l += 12;
      break;
  }
  return [type, 0, nameindex];
}
function parse_PtgNameX(blob, length, opts) {
  if (opts.biff == 5) return parse_PtgNameX_BIFF5(blob);
  var type = blob.read_shift(1) >>> 5 & 3;
  var ixti = blob.read_shift(2);
  var nameindex = blob.read_shift(4);
  return [type, ixti, nameindex];
}
function parse_PtgNameX_BIFF5(blob) {
  var type = blob.read_shift(1) >>> 5 & 3;
  var ixti = blob.read_shift(2, "i");
  blob.l += 8;
  var nameindex = blob.read_shift(2);
  blob.l += 12;
  return [type, ixti, nameindex];
}
function parse_PtgMemArea(blob, length, opts) {
  var type = blob.read_shift(1) >>> 5 & 3;
  blob.l += opts && opts.biff == 2 ? 3 : 4;
  var cce = blob.read_shift(opts && opts.biff == 2 ? 1 : 2);
  return [type, cce];
}
function parse_PtgMemFunc(blob, length, opts) {
  var type = blob.read_shift(1) >>> 5 & 3;
  var cce = blob.read_shift(opts && opts.biff == 2 ? 1 : 2);
  return [type, cce];
}
function parse_PtgRefErr(blob, length, opts) {
  var type = blob.read_shift(1) >>> 5 & 3;
  blob.l += 4;
  if (opts.biff < 8) blob.l--;
  if (opts.biff == 12) blob.l += 2;
  return [type];
}
function parse_PtgRefErr3d(blob, length, opts) {
  var type = (blob[blob.l++] & 96) >> 5;
  var ixti = blob.read_shift(2);
  var w2 = 4;
  if (opts) switch (opts.biff) {
    case 5:
      w2 = 15;
      break;
    case 12:
      w2 = 6;
      break;
  }
  blob.l += w2;
  return [type, ixti];
}
var parse_PtgMemErr = parsenoop;
var parse_PtgMemNoMem = parsenoop;
var parse_PtgTbl = parsenoop;
function parse_PtgElfLoc(blob, length, opts) {
  blob.l += 2;
  return [parse_RgceElfLoc(blob)];
}
function parse_PtgElfNoop(blob) {
  blob.l += 6;
  return [];
}
var parse_PtgElfCol = parse_PtgElfLoc;
var parse_PtgElfColS = parse_PtgElfNoop;
var parse_PtgElfColSV = parse_PtgElfNoop;
var parse_PtgElfColV = parse_PtgElfLoc;
function parse_PtgElfLel(blob) {
  blob.l += 2;
  return [parseuint16(blob), blob.read_shift(2) & 1];
}
var parse_PtgElfRadical = parse_PtgElfLoc;
var parse_PtgElfRadicalLel = parse_PtgElfLel;
var parse_PtgElfRadicalS = parse_PtgElfNoop;
var parse_PtgElfRw = parse_PtgElfLoc;
var parse_PtgElfRwV = parse_PtgElfLoc;
var PtgListRT = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function parse_PtgList(blob) {
  blob.l += 2;
  var ixti = blob.read_shift(2);
  var flags = blob.read_shift(2);
  var idx = blob.read_shift(4);
  var c = blob.read_shift(2);
  var C2 = blob.read_shift(2);
  var rt = PtgListRT[flags >> 2 & 31];
  return { ixti, coltype: flags & 3, rt, idx, c, C: C2 };
}
function parse_PtgSxName(blob) {
  blob.l += 2;
  return [blob.read_shift(4)];
}
function parse_PtgSheet(blob, length, opts) {
  blob.l += 5;
  blob.l += 2;
  blob.l += opts.biff == 2 ? 1 : 4;
  return ["PTGSHEET"];
}
function parse_PtgEndSheet(blob, length, opts) {
  blob.l += opts.biff == 2 ? 4 : 5;
  return ["PTGENDSHEET"];
}
function parse_PtgMemAreaN(blob) {
  var type = blob.read_shift(1) >>> 5 & 3;
  var cce = blob.read_shift(2);
  return [type, cce];
}
function parse_PtgMemNoMemN(blob) {
  var type = blob.read_shift(1) >>> 5 & 3;
  var cce = blob.read_shift(2);
  return [type, cce];
}
function parse_PtgAttrNoop(blob) {
  blob.l += 4;
  return [0, 0];
}
var PtgTypes = {
  /*::[*/
  1: { n: "PtgExp", f: parse_PtgExp },
  /*::[*/
  2: { n: "PtgTbl", f: parse_PtgTbl },
  /*::[*/
  3: { n: "PtgAdd", f: parseread1 },
  /*::[*/
  4: { n: "PtgSub", f: parseread1 },
  /*::[*/
  5: { n: "PtgMul", f: parseread1 },
  /*::[*/
  6: { n: "PtgDiv", f: parseread1 },
  /*::[*/
  7: { n: "PtgPower", f: parseread1 },
  /*::[*/
  8: { n: "PtgConcat", f: parseread1 },
  /*::[*/
  9: { n: "PtgLt", f: parseread1 },
  /*::[*/
  10: { n: "PtgLe", f: parseread1 },
  /*::[*/
  11: { n: "PtgEq", f: parseread1 },
  /*::[*/
  12: { n: "PtgGe", f: parseread1 },
  /*::[*/
  13: { n: "PtgGt", f: parseread1 },
  /*::[*/
  14: { n: "PtgNe", f: parseread1 },
  /*::[*/
  15: { n: "PtgIsect", f: parseread1 },
  /*::[*/
  16: { n: "PtgUnion", f: parseread1 },
  /*::[*/
  17: { n: "PtgRange", f: parseread1 },
  /*::[*/
  18: { n: "PtgUplus", f: parseread1 },
  /*::[*/
  19: { n: "PtgUminus", f: parseread1 },
  /*::[*/
  20: { n: "PtgPercent", f: parseread1 },
  /*::[*/
  21: { n: "PtgParen", f: parseread1 },
  /*::[*/
  22: { n: "PtgMissArg", f: parseread1 },
  /*::[*/
  23: { n: "PtgStr", f: parse_PtgStr },
  /*::[*/
  26: { n: "PtgSheet", f: parse_PtgSheet },
  /*::[*/
  27: { n: "PtgEndSheet", f: parse_PtgEndSheet },
  /*::[*/
  28: { n: "PtgErr", f: parse_PtgErr },
  /*::[*/
  29: { n: "PtgBool", f: parse_PtgBool },
  /*::[*/
  30: { n: "PtgInt", f: parse_PtgInt },
  /*::[*/
  31: { n: "PtgNum", f: parse_PtgNum },
  /*::[*/
  32: { n: "PtgArray", f: parse_PtgArray },
  /*::[*/
  33: { n: "PtgFunc", f: parse_PtgFunc },
  /*::[*/
  34: { n: "PtgFuncVar", f: parse_PtgFuncVar },
  /*::[*/
  35: { n: "PtgName", f: parse_PtgName },
  /*::[*/
  36: { n: "PtgRef", f: parse_PtgRef },
  /*::[*/
  37: { n: "PtgArea", f: parse_PtgArea },
  /*::[*/
  38: { n: "PtgMemArea", f: parse_PtgMemArea },
  /*::[*/
  39: { n: "PtgMemErr", f: parse_PtgMemErr },
  /*::[*/
  40: { n: "PtgMemNoMem", f: parse_PtgMemNoMem },
  /*::[*/
  41: { n: "PtgMemFunc", f: parse_PtgMemFunc },
  /*::[*/
  42: { n: "PtgRefErr", f: parse_PtgRefErr },
  /*::[*/
  43: { n: "PtgAreaErr", f: parse_PtgAreaErr },
  /*::[*/
  44: { n: "PtgRefN", f: parse_PtgRefN },
  /*::[*/
  45: { n: "PtgAreaN", f: parse_PtgAreaN },
  /*::[*/
  46: { n: "PtgMemAreaN", f: parse_PtgMemAreaN },
  /*::[*/
  47: { n: "PtgMemNoMemN", f: parse_PtgMemNoMemN },
  /*::[*/
  57: { n: "PtgNameX", f: parse_PtgNameX },
  /*::[*/
  58: { n: "PtgRef3d", f: parse_PtgRef3d },
  /*::[*/
  59: { n: "PtgArea3d", f: parse_PtgArea3d },
  /*::[*/
  60: { n: "PtgRefErr3d", f: parse_PtgRefErr3d },
  /*::[*/
  61: { n: "PtgAreaErr3d", f: parse_PtgAreaErr3d },
  /*::[*/
  255: {}
};
var PtgDupes = {
  /*::[*/
  64: 32,
  /*::[*/
  96: 32,
  /*::[*/
  65: 33,
  /*::[*/
  97: 33,
  /*::[*/
  66: 34,
  /*::[*/
  98: 34,
  /*::[*/
  67: 35,
  /*::[*/
  99: 35,
  /*::[*/
  68: 36,
  /*::[*/
  100: 36,
  /*::[*/
  69: 37,
  /*::[*/
  101: 37,
  /*::[*/
  70: 38,
  /*::[*/
  102: 38,
  /*::[*/
  71: 39,
  /*::[*/
  103: 39,
  /*::[*/
  72: 40,
  /*::[*/
  104: 40,
  /*::[*/
  73: 41,
  /*::[*/
  105: 41,
  /*::[*/
  74: 42,
  /*::[*/
  106: 42,
  /*::[*/
  75: 43,
  /*::[*/
  107: 43,
  /*::[*/
  76: 44,
  /*::[*/
  108: 44,
  /*::[*/
  77: 45,
  /*::[*/
  109: 45,
  /*::[*/
  78: 46,
  /*::[*/
  110: 46,
  /*::[*/
  79: 47,
  /*::[*/
  111: 47,
  /*::[*/
  88: 34,
  /*::[*/
  120: 34,
  /*::[*/
  89: 57,
  /*::[*/
  121: 57,
  /*::[*/
  90: 58,
  /*::[*/
  122: 58,
  /*::[*/
  91: 59,
  /*::[*/
  123: 59,
  /*::[*/
  92: 60,
  /*::[*/
  124: 60,
  /*::[*/
  93: 61,
  /*::[*/
  125: 61
};
var Ptg18 = {
  /*::[*/
  1: { n: "PtgElfLel", f: parse_PtgElfLel },
  /*::[*/
  2: { n: "PtgElfRw", f: parse_PtgElfRw },
  /*::[*/
  3: { n: "PtgElfCol", f: parse_PtgElfCol },
  /*::[*/
  6: { n: "PtgElfRwV", f: parse_PtgElfRwV },
  /*::[*/
  7: { n: "PtgElfColV", f: parse_PtgElfColV },
  /*::[*/
  10: { n: "PtgElfRadical", f: parse_PtgElfRadical },
  /*::[*/
  11: { n: "PtgElfRadicalS", f: parse_PtgElfRadicalS },
  /*::[*/
  13: { n: "PtgElfColS", f: parse_PtgElfColS },
  /*::[*/
  15: { n: "PtgElfColSV", f: parse_PtgElfColSV },
  /*::[*/
  16: { n: "PtgElfRadicalLel", f: parse_PtgElfRadicalLel },
  /*::[*/
  25: { n: "PtgList", f: parse_PtgList },
  /*::[*/
  29: { n: "PtgSxName", f: parse_PtgSxName },
  /*::[*/
  255: {}
};
var Ptg19 = {
  /*::[*/
  0: { n: "PtgAttrNoop", f: parse_PtgAttrNoop },
  /*::[*/
  1: { n: "PtgAttrSemi", f: parse_PtgAttrSemi },
  /*::[*/
  2: { n: "PtgAttrIf", f: parse_PtgAttrIf },
  /*::[*/
  4: { n: "PtgAttrChoose", f: parse_PtgAttrChoose },
  /*::[*/
  8: { n: "PtgAttrGoto", f: parse_PtgAttrGoto },
  /*::[*/
  16: { n: "PtgAttrSum", f: parse_PtgAttrSum },
  /*::[*/
  32: { n: "PtgAttrBaxcel", f: parse_PtgAttrBaxcel },
  /*::[*/
  33: { n: "PtgAttrBaxcel", f: parse_PtgAttrBaxcel },
  /*::[*/
  64: { n: "PtgAttrSpace", f: parse_PtgAttrSpace },
  /*::[*/
  65: { n: "PtgAttrSpaceSemi", f: parse_PtgAttrSpaceSemi },
  /*::[*/
  128: { n: "PtgAttrIfError", f: parse_PtgAttrIfError },
  /*::[*/
  255: {}
};
function parse_RgbExtra(blob, length, rgce, opts) {
  if (opts.biff < 8) return parsenoop(blob, length);
  var target = blob.l + length;
  var o = [];
  for (var i = 0; i !== rgce.length; ++i) {
    switch (rgce[i][0]) {
      case "PtgArray":
        rgce[i][1] = parse_PtgExtraArray(blob, 0, opts);
        o.push(rgce[i][1]);
        break;
      case "PtgMemArea":
        rgce[i][2] = parse_PtgExtraMem(blob, rgce[i][1], opts);
        o.push(rgce[i][2]);
        break;
      case "PtgExp":
        if (opts && opts.biff == 12) {
          rgce[i][1][1] = blob.read_shift(4);
          o.push(rgce[i][1]);
        }
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + rgce[i][0];
    }
  }
  length = target - blob.l;
  if (length !== 0) o.push(parsenoop(blob, length));
  return o;
}
function parse_Rgce(blob, length, opts) {
  var target = blob.l + length;
  var R2, id2, ptgs = [];
  while (target != blob.l) {
    length = target - blob.l;
    id2 = blob[blob.l];
    R2 = PtgTypes[id2] || PtgTypes[PtgDupes[id2]];
    if (id2 === 24 || id2 === 25) R2 = (id2 === 24 ? Ptg18 : Ptg19)[blob[blob.l + 1]];
    if (!R2 || !R2.f) {
      parsenoop(blob, length);
    } else {
      ptgs.push([R2.n, R2.f(blob, length, opts)]);
    }
  }
  return ptgs;
}
function stringify_array(f2) {
  var o = [];
  for (var i = 0; i < f2.length; ++i) {
    var x2 = f2[i], r2 = [];
    for (var j = 0; j < x2.length; ++j) {
      var y2 = x2[j];
      if (y2) switch (y2[0]) {
        case 2:
          r2.push('"' + y2[1].replace(/"/g, '""') + '"');
          break;
        default:
          r2.push(y2[1]);
      }
      else r2.push("");
    }
    o.push(r2.join(","));
  }
  return o.join(";");
}
var PtgBinOp = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function formula_quote_sheet_name(sname, opts) {
  if (!sname && !(opts && opts.biff <= 5 && opts.biff >= 2)) throw new Error("empty sheet name");
  if (/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(sname)) return "'" + sname + "'";
  return sname;
}
function get_ixti_raw(supbooks, ixti, opts) {
  if (!supbooks) return "SH33TJSERR0";
  if (opts.biff > 8 && (!supbooks.XTI || !supbooks.XTI[ixti])) return supbooks.SheetNames[ixti];
  if (!supbooks.XTI) return "SH33TJSERR6";
  var XTI = supbooks.XTI[ixti];
  if (opts.biff < 8) {
    if (ixti > 1e4) ixti -= 65536;
    if (ixti < 0) ixti = -ixti;
    return ixti == 0 ? "" : supbooks.XTI[ixti - 1];
  }
  if (!XTI) return "SH33TJSERR1";
  var o = "";
  if (opts.biff > 8) switch (supbooks[XTI[0]][0]) {
    case 357:
      o = XTI[1] == -1 ? "#REF" : supbooks.SheetNames[XTI[1]];
      return XTI[1] == XTI[2] ? o : o + ":" + supbooks.SheetNames[XTI[2]];
    case 358:
      if (opts.SID != null) return supbooks.SheetNames[opts.SID];
      return "SH33TJSSAME" + supbooks[XTI[0]][0];
    case 355:
    default:
      return "SH33TJSSRC" + supbooks[XTI[0]][0];
  }
  switch (supbooks[XTI[0]][0][0]) {
    case 1025:
      o = XTI[1] == -1 ? "#REF" : supbooks.SheetNames[XTI[1]] || "SH33TJSERR3";
      return XTI[1] == XTI[2] ? o : o + ":" + supbooks.SheetNames[XTI[2]];
    case 14849:
      return supbooks[XTI[0]].slice(1).map(function(name) {
        return name.Name;
      }).join(";;");
    default:
      if (!supbooks[XTI[0]][0][3]) return "SH33TJSERR2";
      o = XTI[1] == -1 ? "#REF" : supbooks[XTI[0]][0][3][XTI[1]] || "SH33TJSERR4";
      return XTI[1] == XTI[2] ? o : o + ":" + supbooks[XTI[0]][0][3][XTI[2]];
  }
}
function get_ixti(supbooks, ixti, opts) {
  var ixtiraw = get_ixti_raw(supbooks, ixti, opts);
  return ixtiraw == "#REF" ? ixtiraw : formula_quote_sheet_name(ixtiraw, opts);
}
function stringify_formula(formula, range, cell, supbooks, opts) {
  var biff = opts && opts.biff || 8;
  var _range = (
    /*range != null ? range :*/
    { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }
  );
  var stack = [], e1, e2, c, ixti = 0, nameidx = 0, r2, sname = "";
  if (!formula[0] || !formula[0][0]) return "";
  var last_sp = -1, sp = "";
  for (var ff2 = 0, fflen = formula[0].length; ff2 < fflen; ++ff2) {
    var f2 = formula[0][ff2];
    switch (f2[0]) {
      case "PtgUminus":
        stack.push("-" + stack.pop());
        break;
      case "PtgUplus":
        stack.push("+" + stack.pop());
        break;
      case "PtgPercent":
        stack.push(stack.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        e1 = stack.pop();
        e2 = stack.pop();
        if (last_sp >= 0) {
          switch (formula[0][last_sp][1][0]) {
            case 0:
              sp = fill(" ", formula[0][last_sp][1][1]);
              break;
            case 1:
              sp = fill("\r", formula[0][last_sp][1][1]);
              break;
            default:
              sp = "";
              if (opts.WTF) throw new Error("Unexpected PtgAttrSpaceType " + formula[0][last_sp][1][0]);
          }
          e2 = e2 + sp;
          last_sp = -1;
        }
        stack.push(e2 + PtgBinOp[f2[0]] + e1);
        break;
      case "PtgIsect":
        e1 = stack.pop();
        e2 = stack.pop();
        stack.push(e2 + " " + e1);
        break;
      case "PtgUnion":
        e1 = stack.pop();
        e2 = stack.pop();
        stack.push(e2 + "," + e1);
        break;
      case "PtgRange":
        e1 = stack.pop();
        e2 = stack.pop();
        stack.push(e2 + ":" + e1);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        c = shift_cell_xls(f2[1][1], _range, opts);
        stack.push(encode_cell_xls(c, biff));
        break;
      case "PtgRefN":
        c = cell ? shift_cell_xls(f2[1][1], cell, opts) : f2[1][1];
        stack.push(encode_cell_xls(c, biff));
        break;
      case "PtgRef3d":
        ixti = /*::Number(*/
        f2[1][1];
        c = shift_cell_xls(f2[1][2], _range, opts);
        sname = get_ixti(supbooks, ixti, opts);
        stack.push(sname + "!" + encode_cell_xls(c, biff));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var argc = f2[1][0], func = f2[1][1];
        if (!argc) argc = 0;
        argc &= 127;
        var args = argc == 0 ? [] : stack.slice(-argc);
        stack.length -= argc;
        if (func === "User") func = args.shift();
        stack.push(func + "(" + args.join(",") + ")");
        break;
      case "PtgBool":
        stack.push(f2[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        stack.push(
          /*::String(*/
          f2[1]
          /*::)*/
        );
        break;
      case "PtgNum":
        stack.push(String(f2[1]));
        break;
      case "PtgStr":
        stack.push('"' + f2[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        stack.push(
          /*::String(*/
          f2[1]
          /*::)*/
        );
        break;
      case "PtgAreaN":
        r2 = shift_range_xls(f2[1][1], cell ? { s: cell } : _range, opts);
        stack.push(encode_range_xls(r2, opts));
        break;
      case "PtgArea":
        r2 = shift_range_xls(f2[1][1], _range, opts);
        stack.push(encode_range_xls(r2, opts));
        break;
      case "PtgArea3d":
        ixti = /*::Number(*/
        f2[1][1];
        r2 = f2[1][2];
        sname = get_ixti(supbooks, ixti, opts);
        stack.push(sname + "!" + encode_range_xls(r2, opts));
        break;
      case "PtgAttrSum":
        stack.push("SUM(" + stack.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        nameidx = f2[1][2];
        var lbl = (supbooks.names || [])[nameidx - 1] || (supbooks[0] || [])[nameidx];
        var name = lbl ? lbl.Name : "SH33TJSNAME" + String(nameidx);
        if (name && name.slice(0, 6) == "_xlfn." && !opts.xlfn) name = name.slice(6);
        stack.push(name);
        break;
      case "PtgNameX":
        var bookidx = f2[1][1];
        nameidx = f2[1][2];
        var externbook;
        if (opts.biff <= 5) {
          if (bookidx < 0) bookidx = -bookidx;
          if (supbooks[bookidx]) externbook = supbooks[bookidx][nameidx];
        } else {
          var o = "";
          if (((supbooks[bookidx] || [])[0] || [])[0] == 14849) ;
          else if (((supbooks[bookidx] || [])[0] || [])[0] == 1025) {
            if (supbooks[bookidx][nameidx] && supbooks[bookidx][nameidx].itab > 0) {
              o = supbooks.SheetNames[supbooks[bookidx][nameidx].itab - 1] + "!";
            }
          } else o = supbooks.SheetNames[nameidx - 1] + "!";
          if (supbooks[bookidx] && supbooks[bookidx][nameidx]) o += supbooks[bookidx][nameidx].Name;
          else if (supbooks[0] && supbooks[0][nameidx]) o += supbooks[0][nameidx].Name;
          else {
            var ixtidata = (get_ixti_raw(supbooks, bookidx, opts) || "").split(";;");
            if (ixtidata[nameidx - 1]) o = ixtidata[nameidx - 1];
            else o += "SH33TJSERRX";
          }
          stack.push(o);
          break;
        }
        if (!externbook) externbook = { Name: "SH33TJSERRY" };
        stack.push(externbook.Name);
        break;
      case "PtgParen":
        var lp = "(", rp = ")";
        if (last_sp >= 0) {
          sp = "";
          switch (formula[0][last_sp][1][0]) {
            case 2:
              lp = fill(" ", formula[0][last_sp][1][1]) + lp;
              break;
            case 3:
              lp = fill("\r", formula[0][last_sp][1][1]) + lp;
              break;
            case 4:
              rp = fill(" ", formula[0][last_sp][1][1]) + rp;
              break;
            case 5:
              rp = fill("\r", formula[0][last_sp][1][1]) + rp;
              break;
            default:
              if (opts.WTF) throw new Error("Unexpected PtgAttrSpaceType " + formula[0][last_sp][1][0]);
          }
          last_sp = -1;
        }
        stack.push(lp + stack.pop() + rp);
        break;
      case "PtgRefErr":
        stack.push("#REF!");
        break;
      case "PtgRefErr3d":
        stack.push("#REF!");
        break;
      case "PtgExp":
        c = { c: f2[1][1], r: f2[1][0] };
        var q2 = { c: cell.c, r: cell.r };
        if (supbooks.sharedf[encode_cell(c)]) {
          var parsedf = supbooks.sharedf[encode_cell(c)];
          stack.push(stringify_formula(parsedf, _range, q2, supbooks, opts));
        } else {
          var fnd = false;
          for (e1 = 0; e1 != supbooks.arrayf.length; ++e1) {
            e2 = supbooks.arrayf[e1];
            if (c.c < e2[0].s.c || c.c > e2[0].e.c) continue;
            if (c.r < e2[0].s.r || c.r > e2[0].e.r) continue;
            stack.push(stringify_formula(e2[1], _range, q2, supbooks, opts));
            fnd = true;
            break;
          }
          if (!fnd) stack.push(
            /*::String(*/
            f2[1]
            /*::)*/
          );
        }
        break;
      case "PtgArray":
        stack.push("{" + stringify_array(
          /*::(*/
          f2[1]
          /*:: :any)*/
        ) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        last_sp = ff2;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        stack.push("");
        break;
      case "PtgAreaErr":
        stack.push("#REF!");
        break;
      case "PtgAreaErr3d":
        stack.push("#REF!");
        break;
      case "PtgList":
        stack.push("Table" + f2[1].idx + "[#" + f2[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(f2));
      default:
        throw new Error("Unrecognized Formula Token: " + String(f2));
    }
    var PtgNonDisp = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (opts.biff != 3) {
      if (last_sp >= 0 && PtgNonDisp.indexOf(formula[0][ff2][0]) == -1) {
        f2 = formula[0][last_sp];
        var _left = true;
        switch (f2[1][0]) {
          case 4:
            _left = false;
          case 0:
            sp = fill(" ", f2[1][1]);
            break;
          case 5:
            _left = false;
          case 1:
            sp = fill("\r", f2[1][1]);
            break;
          default:
            sp = "";
            if (opts.WTF) throw new Error("Unexpected PtgAttrSpaceType " + f2[1][0]);
        }
        stack.push((_left ? sp : "") + stack.pop() + (_left ? "" : sp));
        last_sp = -1;
      }
    }
  }
  if (stack.length > 1 && opts.WTF) throw new Error("bad formula stack");
  return stack[0];
}
function parse_ArrayParsedFormula(blob, length, opts) {
  var target = blob.l + length, len = opts.biff == 2 ? 1 : 2;
  var rgcb, cce = blob.read_shift(len);
  if (cce == 65535) return [[], parsenoop(blob, length - 2)];
  var rgce = parse_Rgce(blob, cce, opts);
  if (length !== cce + len) rgcb = parse_RgbExtra(blob, length - cce - len, rgce, opts);
  blob.l = target;
  return [rgce, rgcb];
}
function parse_XLSCellParsedFormula(blob, length, opts) {
  var target = blob.l + length, len = opts.biff == 2 ? 1 : 2;
  var rgcb, cce = blob.read_shift(len);
  if (cce == 65535) return [[], parsenoop(blob, length - 2)];
  var rgce = parse_Rgce(blob, cce, opts);
  if (length !== cce + len) rgcb = parse_RgbExtra(blob, length - cce - len, rgce, opts);
  blob.l = target;
  return [rgce, rgcb];
}
function parse_NameParsedFormula(blob, length, opts, cce) {
  var target = blob.l + length;
  var rgce = parse_Rgce(blob, cce, opts);
  var rgcb;
  if (target !== blob.l) rgcb = parse_RgbExtra(blob, target - blob.l, rgce, opts);
  return [rgce, rgcb];
}
function parse_SharedParsedFormula(blob, length, opts) {
  var target = blob.l + length;
  var rgcb, cce = blob.read_shift(2);
  var rgce = parse_Rgce(blob, cce, opts);
  if (cce == 65535) return [[], parsenoop(blob, length - 2)];
  if (length !== cce + 2) rgcb = parse_RgbExtra(blob, target - cce - 2, rgce, opts);
  return [rgce, rgcb];
}
function parse_FormulaValue(blob) {
  var b;
  if (__readUInt16LE(blob, blob.l + 6) !== 65535) return [parse_Xnum(blob), "n"];
  switch (blob[blob.l]) {
    case 0:
      blob.l += 8;
      return ["String", "s"];
    case 1:
      b = blob[blob.l + 2] === 1;
      blob.l += 8;
      return [b, "b"];
    case 2:
      b = blob[blob.l + 2];
      blob.l += 8;
      return [b, "e"];
    case 3:
      blob.l += 8;
      return ["", "s"];
  }
  return [];
}
function parse_Formula(blob, length, opts) {
  var end = blob.l + length;
  var cell = parse_XLSCell(blob);
  if (opts.biff == 2) ++blob.l;
  var val = parse_FormulaValue(blob);
  var flags = blob.read_shift(1);
  if (opts.biff != 2) {
    blob.read_shift(1);
    if (opts.biff >= 5) {
      blob.read_shift(4);
    }
  }
  var cbf = parse_XLSCellParsedFormula(blob, end - blob.l, opts);
  return { cell, val: val[0], formula: cbf, shared: flags >> 3 & 1, tt: val[1] };
}
function parse_XLSBParsedFormula(data, length, opts) {
  var cce = data.read_shift(4);
  var rgce = parse_Rgce(data, cce, opts);
  var cb2 = data.read_shift(4);
  var rgcb = cb2 > 0 ? parse_RgbExtra(data, cb2, rgce, opts) : null;
  return [rgce, rgcb];
}
var parse_XLSBArrayParsedFormula = parse_XLSBParsedFormula;
var parse_XLSBCellParsedFormula = parse_XLSBParsedFormula;
var parse_XLSBNameParsedFormula = parse_XLSBParsedFormula;
var parse_XLSBSharedParsedFormula = parse_XLSBParsedFormula;
var Cetab = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
};
var Ftab = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
};
var FtabArgc = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function ods_to_csf_formula(f2) {
  if (f2.slice(0, 3) == "of:") f2 = f2.slice(3);
  if (f2.charCodeAt(0) == 61) {
    f2 = f2.slice(1);
    if (f2.charCodeAt(0) == 61) f2 = f2.slice(1);
  }
  f2 = f2.replace(/COM\.MICROSOFT\./g, "");
  f2 = f2.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function($$, $1) {
    return $1.replace(/\./g, "");
  });
  f2 = f2.replace(/\[.(#[A-Z]*[?!])\]/g, "$1");
  return f2.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function ods_to_csf_3D(r2) {
  var a = r2.split(":");
  var s = a[0].split(".")[0];
  return [s, a[0].split(".")[1] + (a.length > 1 ? ":" + (a[1].split(".")[1] || a[1].split(".")[0]) : "")];
}
var strs = {};
var _ssfopts = {};
function default_margins(margins, mode) {
  if (!margins) return;
  var defs = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
  if (mode == "xlml") defs = [1, 1, 1, 1, 0.5, 0.5];
  if (margins.left == null) margins.left = defs[0];
  if (margins.right == null) margins.right = defs[1];
  if (margins.top == null) margins.top = defs[2];
  if (margins.bottom == null) margins.bottom = defs[3];
  if (margins.header == null) margins.header = defs[4];
  if (margins.footer == null) margins.footer = defs[5];
}
function safe_format(p2, fmtid, fillid, opts, themes, styles) {
  try {
    if (opts.cellNF) p2.z = table_fmt[fmtid];
  } catch (e) {
    if (opts.WTF) throw e;
  }
  if (p2.t === "z" && !opts.cellStyles) return;
  if (p2.t === "d" && typeof p2.v === "string") p2.v = parseDate(p2.v);
  if ((!opts || opts.cellText !== false) && p2.t !== "z") try {
    if (table_fmt[fmtid] == null) SSF_load(SSFImplicit[fmtid] || "General", fmtid);
    if (p2.t === "e") p2.w = p2.w || BErr[p2.v];
    else if (fmtid === 0) {
      if (p2.t === "n") {
        if ((p2.v | 0) === p2.v) p2.w = p2.v.toString(10);
        else p2.w = SSF_general_num(p2.v);
      } else if (p2.t === "d") {
        var dd2 = datenum(p2.v);
        if ((dd2 | 0) === dd2) p2.w = dd2.toString(10);
        else p2.w = SSF_general_num(dd2);
      } else if (p2.v === void 0) return "";
      else p2.w = SSF_general(p2.v, _ssfopts);
    } else if (p2.t === "d") p2.w = SSF_format(fmtid, datenum(p2.v), _ssfopts);
    else p2.w = SSF_format(fmtid, p2.v, _ssfopts);
  } catch (e) {
    if (opts.WTF) throw e;
  }
  if (!opts.cellStyles) return;
  if (fillid != null) try {
    p2.s = styles.Fills[fillid];
    if (p2.s.fgColor && p2.s.fgColor.theme && !p2.s.fgColor.rgb) {
      p2.s.fgColor.rgb = rgb_tint(themes.themeElements.clrScheme[p2.s.fgColor.theme].rgb, p2.s.fgColor.tint || 0);
      if (opts.WTF) p2.s.fgColor.raw_rgb = themes.themeElements.clrScheme[p2.s.fgColor.theme].rgb;
    }
    if (p2.s.bgColor && p2.s.bgColor.theme) {
      p2.s.bgColor.rgb = rgb_tint(themes.themeElements.clrScheme[p2.s.bgColor.theme].rgb, p2.s.bgColor.tint || 0);
      if (opts.WTF) p2.s.bgColor.raw_rgb = themes.themeElements.clrScheme[p2.s.bgColor.theme].rgb;
    }
  } catch (e) {
    if (opts.WTF && styles.Fills) throw e;
  }
}
function parse_ws_xml_dim(ws, s) {
  var d = safe_decode_range(s);
  if (d.s.r <= d.e.r && d.s.c <= d.e.c && d.s.r >= 0 && d.s.c >= 0) ws["!ref"] = encode_range(d);
}
var mergecregex = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g;
var sheetdataregex = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/;
var hlinkregex = /<(?:\w:)?hyperlink [^>]*>/mg;
var dimregex = /"(\w*:\w*)"/;
var colregex = /<(?:\w:)?col\b[^>]*[\/]?>/g;
var afregex = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g;
var marginregex = /<(?:\w:)?pageMargins[^>]*\/>/g;
var sheetprregex = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/;
var sheetprregex2 = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/;
var svsregex = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function parse_ws_xml(data, opts, idx, rels, wb2, themes, styles) {
  if (!data) return data;
  if (!rels) rels = { "!id": {} };
  var s = opts.dense ? [] : {};
  var refguess = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  var data1 = "", data2 = "";
  var mtch = data.match(sheetdataregex);
  if (mtch) {
    data1 = data.slice(0, mtch.index);
    data2 = data.slice(mtch.index + mtch[0].length);
  } else data1 = data2 = data;
  var sheetPr = data1.match(sheetprregex);
  if (sheetPr) parse_ws_xml_sheetpr(sheetPr[0], s, wb2, idx);
  else if (sheetPr = data1.match(sheetprregex2)) parse_ws_xml_sheetpr2(sheetPr[0], sheetPr[1] || "", s, wb2, idx);
  var ridx = (data1.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (ridx > 0) {
    var ref = data1.slice(ridx, ridx + 50).match(dimregex);
    if (ref) parse_ws_xml_dim(s, ref[1]);
  }
  var svs = data1.match(svsregex);
  if (svs && svs[1]) parse_ws_xml_sheetviews(svs[1], wb2);
  var columns = [];
  if (opts.cellStyles) {
    var cols = data1.match(colregex);
    if (cols) parse_ws_xml_cols(columns, cols);
  }
  if (mtch) parse_ws_xml_data(mtch[1], s, opts, refguess, themes, styles);
  var afilter = data2.match(afregex);
  if (afilter) s["!autofilter"] = parse_ws_xml_autofilter(afilter[0]);
  var merges = [];
  var _merge = data2.match(mergecregex);
  if (_merge) for (ridx = 0; ridx != _merge.length; ++ridx)
    merges[ridx] = safe_decode_range(_merge[ridx].slice(_merge[ridx].indexOf('"') + 1));
  var hlink = data2.match(hlinkregex);
  if (hlink) parse_ws_xml_hlinks(s, hlink, rels);
  var margins = data2.match(marginregex);
  if (margins) s["!margins"] = parse_ws_xml_margins(parsexmltag(margins[0]));
  if (!s["!ref"] && refguess.e.c >= refguess.s.c && refguess.e.r >= refguess.s.r) s["!ref"] = encode_range(refguess);
  if (opts.sheetRows > 0 && s["!ref"]) {
    var tmpref = safe_decode_range(s["!ref"]);
    if (opts.sheetRows <= +tmpref.e.r) {
      tmpref.e.r = opts.sheetRows - 1;
      if (tmpref.e.r > refguess.e.r) tmpref.e.r = refguess.e.r;
      if (tmpref.e.r < tmpref.s.r) tmpref.s.r = tmpref.e.r;
      if (tmpref.e.c > refguess.e.c) tmpref.e.c = refguess.e.c;
      if (tmpref.e.c < tmpref.s.c) tmpref.s.c = tmpref.e.c;
      s["!fullref"] = s["!ref"];
      s["!ref"] = encode_range(tmpref);
    }
  }
  if (columns.length > 0) s["!cols"] = columns;
  if (merges.length > 0) s["!merges"] = merges;
  return s;
}
function parse_ws_xml_sheetpr(sheetPr, s, wb2, idx) {
  var data = parsexmltag(sheetPr);
  if (!wb2.Sheets[idx]) wb2.Sheets[idx] = {};
  if (data.codeName) wb2.Sheets[idx].CodeName = unescapexml(utf8read(data.codeName));
}
function parse_ws_xml_sheetpr2(sheetPr, body, s, wb2, idx) {
  parse_ws_xml_sheetpr(sheetPr.slice(0, sheetPr.indexOf(">")), s, wb2, idx);
}
function parse_ws_xml_hlinks(s, data, rels) {
  var dense = Array.isArray(s);
  for (var i = 0; i != data.length; ++i) {
    var val = parsexmltag(utf8read(data[i]), true);
    if (!val.ref) return;
    var rel = ((rels || {})["!id"] || [])[val.id];
    if (rel) {
      val.Target = rel.Target;
      if (val.location) val.Target += "#" + unescapexml(val.location);
    } else {
      val.Target = "#" + unescapexml(val.location);
      rel = { Target: val.Target, TargetMode: "Internal" };
    }
    val.Rel = rel;
    if (val.tooltip) {
      val.Tooltip = val.tooltip;
      delete val.tooltip;
    }
    var rng = safe_decode_range(val.ref);
    for (var R2 = rng.s.r; R2 <= rng.e.r; ++R2) for (var C2 = rng.s.c; C2 <= rng.e.c; ++C2) {
      var addr = encode_cell({ c: C2, r: R2 });
      if (dense) {
        if (!s[R2]) s[R2] = [];
        if (!s[R2][C2]) s[R2][C2] = { t: "z", v: void 0 };
        s[R2][C2].l = val;
      } else {
        if (!s[addr]) s[addr] = { t: "z", v: void 0 };
        s[addr].l = val;
      }
    }
  }
}
function parse_ws_xml_margins(margin) {
  var o = {};
  ["left", "right", "top", "bottom", "header", "footer"].forEach(function(k2) {
    if (margin[k2]) o[k2] = parseFloat(margin[k2]);
  });
  return o;
}
function parse_ws_xml_cols(columns, cols) {
  var seencol = false;
  for (var coli = 0; coli != cols.length; ++coli) {
    var coll = parsexmltag(cols[coli], true);
    if (coll.hidden) coll.hidden = parsexmlbool(coll.hidden);
    var colm = parseInt(coll.min, 10) - 1, colM = parseInt(coll.max, 10) - 1;
    if (coll.outlineLevel) coll.level = +coll.outlineLevel || 0;
    delete coll.min;
    delete coll.max;
    coll.width = +coll.width;
    if (!seencol && coll.width) {
      seencol = true;
      find_mdw_colw(coll.width);
    }
    process_col(coll);
    while (colm <= colM) columns[colm++] = dup(coll);
  }
}
function parse_ws_xml_autofilter(data) {
  var o = { ref: (data.match(/ref="([^"]*)"/) || [])[1] };
  return o;
}
var sviewregex = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function parse_ws_xml_sheetviews(data, wb2) {
  if (!wb2.Views) wb2.Views = [{}];
  (data.match(sviewregex) || []).forEach(function(r2, i) {
    var tag = parsexmltag(r2);
    if (!wb2.Views[i]) wb2.Views[i] = {};
    if (+tag.zoomScale) wb2.Views[i].zoom = +tag.zoomScale;
    if (parsexmlbool(tag.rightToLeft)) wb2.Views[i].RTL = true;
  });
}
var parse_ws_xml_data = /* @__PURE__ */ function() {
  var cellregex = /<(?:\w+:)?c[ \/>]/, rowregex = /<\/(?:\w+:)?row>/;
  var rregex = /r=["']([^"']*)["']/, isregex = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/;
  var refregex = /ref=["']([^"']*)["']/;
  var match_v = matchtag("v"), match_f = matchtag("f");
  return function parse_ws_xml_data2(sdata, s, opts, guess, themes, styles) {
    var ri2 = 0, x2 = "", cells = [], cref = [], idx = 0, i = 0, cc2 = 0, d = "", p2;
    var tag, tagr = 0, tagc = 0;
    var sstr, ftag;
    var fmtid = 0, fillid = 0;
    var do_format = Array.isArray(styles.CellXf), cf2;
    var arrayf = [];
    var sharedf = [];
    var dense = Array.isArray(s);
    var rows = [], rowobj = {}, rowrite = false;
    var sheetStubs = !!opts.sheetStubs;
    for (var marr = sdata.split(rowregex), mt = 0, marrlen = marr.length; mt != marrlen; ++mt) {
      x2 = marr[mt].trim();
      var xlen = x2.length;
      if (xlen === 0) continue;
      var rstarti = 0;
      outa: for (ri2 = 0; ri2 < xlen; ++ri2) switch (
        /*x.charCodeAt(ri)*/
        x2[ri2]
      ) {
        case ">":
          if (
            /*x.charCodeAt(ri-1) != 47*/
            x2[ri2 - 1] != "/"
          ) {
            ++ri2;
            break outa;
          }
          if (opts && opts.cellStyles) {
            tag = parsexmltag(x2.slice(rstarti, ri2), true);
            tagr = tag.r != null ? parseInt(tag.r, 10) : tagr + 1;
            tagc = -1;
            if (opts.sheetRows && opts.sheetRows < tagr) continue;
            rowobj = {};
            rowrite = false;
            if (tag.ht) {
              rowrite = true;
              rowobj.hpt = parseFloat(tag.ht);
              rowobj.hpx = pt2px(rowobj.hpt);
            }
            if (tag.hidden == "1") {
              rowrite = true;
              rowobj.hidden = true;
            }
            if (tag.outlineLevel != null) {
              rowrite = true;
              rowobj.level = +tag.outlineLevel;
            }
            if (rowrite) rows[tagr - 1] = rowobj;
          }
          break;
        case "<":
          rstarti = ri2;
          break;
      }
      if (rstarti >= ri2) break;
      tag = parsexmltag(x2.slice(rstarti, ri2), true);
      tagr = tag.r != null ? parseInt(tag.r, 10) : tagr + 1;
      tagc = -1;
      if (opts.sheetRows && opts.sheetRows < tagr) continue;
      if (guess.s.r > tagr - 1) guess.s.r = tagr - 1;
      if (guess.e.r < tagr - 1) guess.e.r = tagr - 1;
      if (opts && opts.cellStyles) {
        rowobj = {};
        rowrite = false;
        if (tag.ht) {
          rowrite = true;
          rowobj.hpt = parseFloat(tag.ht);
          rowobj.hpx = pt2px(rowobj.hpt);
        }
        if (tag.hidden == "1") {
          rowrite = true;
          rowobj.hidden = true;
        }
        if (tag.outlineLevel != null) {
          rowrite = true;
          rowobj.level = +tag.outlineLevel;
        }
        if (rowrite) rows[tagr - 1] = rowobj;
      }
      cells = x2.slice(ri2).split(cellregex);
      for (var rslice = 0; rslice != cells.length; ++rslice) if (cells[rslice].trim().charAt(0) != "<") break;
      cells = cells.slice(rslice);
      for (ri2 = 0; ri2 != cells.length; ++ri2) {
        x2 = cells[ri2].trim();
        if (x2.length === 0) continue;
        cref = x2.match(rregex);
        idx = ri2;
        i = 0;
        cc2 = 0;
        x2 = "<c " + (x2.slice(0, 1) == "<" ? ">" : "") + x2;
        if (cref != null && cref.length === 2) {
          idx = 0;
          d = cref[1];
          for (i = 0; i != d.length; ++i) {
            if ((cc2 = d.charCodeAt(i) - 64) < 1 || cc2 > 26) break;
            idx = 26 * idx + cc2;
          }
          --idx;
          tagc = idx;
        } else ++tagc;
        for (i = 0; i != x2.length; ++i) if (x2.charCodeAt(i) === 62) break;
        ++i;
        tag = parsexmltag(x2.slice(0, i), true);
        if (!tag.r) tag.r = encode_cell({ r: tagr - 1, c: tagc });
        d = x2.slice(i);
        p2 = { t: "" };
        if ((cref = d.match(match_v)) != null && /*::cref != null && */
        cref[1] !== "") p2.v = unescapexml(cref[1]);
        if (opts.cellFormula) {
          if ((cref = d.match(match_f)) != null && /*::cref != null && */
          cref[1] !== "") {
            p2.f = unescapexml(utf8read(cref[1])).replace(/\r\n/g, "\n");
            if (!opts.xlfn) p2.f = _xlfn(p2.f);
            if (
              /*::cref != null && cref[0] != null && */
              cref[0].indexOf('t="array"') > -1
            ) {
              p2.F = (d.match(refregex) || [])[1];
              if (p2.F.indexOf(":") > -1) arrayf.push([safe_decode_range(p2.F), p2.F]);
            } else if (
              /*::cref != null && cref[0] != null && */
              cref[0].indexOf('t="shared"') > -1
            ) {
              ftag = parsexmltag(cref[0]);
              var ___f = unescapexml(utf8read(cref[1]));
              if (!opts.xlfn) ___f = _xlfn(___f);
              sharedf[parseInt(ftag.si, 10)] = [ftag, ___f, tag.r];
            }
          } else if (cref = d.match(/<f[^>]*\/>/)) {
            ftag = parsexmltag(cref[0]);
            if (sharedf[ftag.si]) p2.f = shift_formula_xlsx(sharedf[ftag.si][1], sharedf[ftag.si][2], tag.r);
          }
          var _tag = decode_cell(tag.r);
          for (i = 0; i < arrayf.length; ++i)
            if (_tag.r >= arrayf[i][0].s.r && _tag.r <= arrayf[i][0].e.r) {
              if (_tag.c >= arrayf[i][0].s.c && _tag.c <= arrayf[i][0].e.c)
                p2.F = arrayf[i][1];
            }
        }
        if (tag.t == null && p2.v === void 0) {
          if (p2.f || p2.F) {
            p2.v = 0;
            p2.t = "n";
          } else if (!sheetStubs) continue;
          else p2.t = "z";
        } else p2.t = tag.t || "n";
        if (guess.s.c > tagc) guess.s.c = tagc;
        if (guess.e.c < tagc) guess.e.c = tagc;
        switch (p2.t) {
          case "n":
            if (p2.v == "" || p2.v == null) {
              if (!sheetStubs) continue;
              p2.t = "z";
            } else p2.v = parseFloat(p2.v);
            break;
          case "s":
            if (typeof p2.v == "undefined") {
              if (!sheetStubs) continue;
              p2.t = "z";
            } else {
              sstr = strs[parseInt(p2.v, 10)];
              p2.v = sstr.t;
              p2.r = sstr.r;
              if (opts.cellHTML) p2.h = sstr.h;
            }
            break;
          case "str":
            p2.t = "s";
            p2.v = p2.v != null ? utf8read(p2.v) : "";
            if (opts.cellHTML) p2.h = escapehtml(p2.v);
            break;
          case "inlineStr":
            cref = d.match(isregex);
            p2.t = "s";
            if (cref != null && (sstr = parse_si(cref[1]))) {
              p2.v = sstr.t;
              if (opts.cellHTML) p2.h = sstr.h;
            } else p2.v = "";
            break;
          case "b":
            p2.v = parsexmlbool(p2.v);
            break;
          case "d":
            if (opts.cellDates) p2.v = parseDate(p2.v, 1);
            else {
              p2.v = datenum(parseDate(p2.v, 1));
              p2.t = "n";
            }
            break;
          case "e":
            if (!opts || opts.cellText !== false) p2.w = p2.v;
            p2.v = RBErr[p2.v];
            break;
        }
        fmtid = fillid = 0;
        cf2 = null;
        if (do_format && tag.s !== void 0) {
          cf2 = styles.CellXf[tag.s];
          if (cf2 != null) {
            if (cf2.numFmtId != null) fmtid = cf2.numFmtId;
            if (opts.cellStyles) {
              if (cf2.fillId != null) fillid = cf2.fillId;
            }
          }
        }
        safe_format(p2, fmtid, fillid, opts, themes, styles);
        if (opts.cellDates && do_format && p2.t == "n" && fmt_is_date(table_fmt[fmtid])) {
          p2.t = "d";
          p2.v = numdate(p2.v);
        }
        if (tag.cm && opts.xlmeta) {
          var cm = (opts.xlmeta.Cell || [])[+tag.cm - 1];
          if (cm && cm.type == "XLDAPR") p2.D = true;
        }
        if (dense) {
          var _r = decode_cell(tag.r);
          if (!s[_r.r]) s[_r.r] = [];
          s[_r.r][_r.c] = p2;
        } else s[tag.r] = p2;
      }
    }
    if (rows.length > 0) s["!rows"] = rows;
  };
}();
function parse_BrtRowHdr(data, length) {
  var z2 = {};
  var tgt = data.l + length;
  z2.r = data.read_shift(4);
  data.l += 4;
  var miyRw = data.read_shift(2);
  data.l += 1;
  var flags = data.read_shift(1);
  data.l = tgt;
  if (flags & 7) z2.level = flags & 7;
  if (flags & 16) z2.hidden = true;
  if (flags & 32) z2.hpt = miyRw / 20;
  return z2;
}
var parse_BrtWsDim = parse_UncheckedRfX;
function parse_BrtWsFmtInfo() {
}
function parse_BrtWsProp(data, length) {
  var z2 = {};
  var f2 = data[data.l];
  ++data.l;
  z2.above = !(f2 & 64);
  z2.left = !(f2 & 128);
  data.l += 18;
  z2.name = parse_XLSBCodeName(data);
  return z2;
}
function parse_BrtCellBlank(data) {
  var cell = parse_XLSBCell(data);
  return [cell];
}
function parse_BrtShortBlank(data) {
  var cell = parse_XLSBShortCell(data);
  return [cell];
}
function parse_BrtCellBool(data) {
  var cell = parse_XLSBCell(data);
  var fBool = data.read_shift(1);
  return [cell, fBool, "b"];
}
function parse_BrtShortBool(data) {
  var cell = parse_XLSBShortCell(data);
  var fBool = data.read_shift(1);
  return [cell, fBool, "b"];
}
function parse_BrtCellError(data) {
  var cell = parse_XLSBCell(data);
  var bError = data.read_shift(1);
  return [cell, bError, "e"];
}
function parse_BrtShortError(data) {
  var cell = parse_XLSBShortCell(data);
  var bError = data.read_shift(1);
  return [cell, bError, "e"];
}
function parse_BrtCellIsst(data) {
  var cell = parse_XLSBCell(data);
  var isst = data.read_shift(4);
  return [cell, isst, "s"];
}
function parse_BrtShortIsst(data) {
  var cell = parse_XLSBShortCell(data);
  var isst = data.read_shift(4);
  return [cell, isst, "s"];
}
function parse_BrtCellReal(data) {
  var cell = parse_XLSBCell(data);
  var value = parse_Xnum(data);
  return [cell, value, "n"];
}
function parse_BrtShortReal(data) {
  var cell = parse_XLSBShortCell(data);
  var value = parse_Xnum(data);
  return [cell, value, "n"];
}
function parse_BrtCellRk(data) {
  var cell = parse_XLSBCell(data);
  var value = parse_RkNumber(data);
  return [cell, value, "n"];
}
function parse_BrtShortRk(data) {
  var cell = parse_XLSBShortCell(data);
  var value = parse_RkNumber(data);
  return [cell, value, "n"];
}
function parse_BrtCellRString(data) {
  var cell = parse_XLSBCell(data);
  var value = parse_RichStr(data);
  return [cell, value, "is"];
}
function parse_BrtCellSt(data) {
  var cell = parse_XLSBCell(data);
  var value = parse_XLWideString(data);
  return [cell, value, "str"];
}
function parse_BrtShortSt(data) {
  var cell = parse_XLSBShortCell(data);
  var value = parse_XLWideString(data);
  return [cell, value, "str"];
}
function parse_BrtFmlaBool(data, length, opts) {
  var end = data.l + length;
  var cell = parse_XLSBCell(data);
  cell.r = opts["!row"];
  var value = data.read_shift(1);
  var o = [cell, value, "b"];
  if (opts.cellFormula) {
    data.l += 2;
    var formula = parse_XLSBCellParsedFormula(data, end - data.l, opts);
    o[3] = stringify_formula(formula, null, cell, opts.supbooks, opts);
  } else data.l = end;
  return o;
}
function parse_BrtFmlaError(data, length, opts) {
  var end = data.l + length;
  var cell = parse_XLSBCell(data);
  cell.r = opts["!row"];
  var value = data.read_shift(1);
  var o = [cell, value, "e"];
  if (opts.cellFormula) {
    data.l += 2;
    var formula = parse_XLSBCellParsedFormula(data, end - data.l, opts);
    o[3] = stringify_formula(formula, null, cell, opts.supbooks, opts);
  } else data.l = end;
  return o;
}
function parse_BrtFmlaNum(data, length, opts) {
  var end = data.l + length;
  var cell = parse_XLSBCell(data);
  cell.r = opts["!row"];
  var value = parse_Xnum(data);
  var o = [cell, value, "n"];
  if (opts.cellFormula) {
    data.l += 2;
    var formula = parse_XLSBCellParsedFormula(data, end - data.l, opts);
    o[3] = stringify_formula(formula, null, cell, opts.supbooks, opts);
  } else data.l = end;
  return o;
}
function parse_BrtFmlaString(data, length, opts) {
  var end = data.l + length;
  var cell = parse_XLSBCell(data);
  cell.r = opts["!row"];
  var value = parse_XLWideString(data);
  var o = [cell, value, "str"];
  if (opts.cellFormula) {
    data.l += 2;
    var formula = parse_XLSBCellParsedFormula(data, end - data.l, opts);
    o[3] = stringify_formula(formula, null, cell, opts.supbooks, opts);
  } else data.l = end;
  return o;
}
var parse_BrtMergeCell = parse_UncheckedRfX;
function parse_BrtHLink(data, length) {
  var end = data.l + length;
  var rfx = parse_UncheckedRfX(data);
  var relId = parse_XLNullableWideString(data);
  var loc = parse_XLWideString(data);
  var tooltip = parse_XLWideString(data);
  var display = parse_XLWideString(data);
  data.l = end;
  var o = { rfx, relId, loc, display };
  if (tooltip) o.Tooltip = tooltip;
  return o;
}
function parse_BrtPane() {
}
function parse_BrtArrFmla(data, length, opts) {
  var end = data.l + length;
  var rfx = parse_RfX(data);
  var fAlwaysCalc = data.read_shift(1);
  var o = [rfx];
  o[2] = fAlwaysCalc;
  if (opts.cellFormula) {
    var formula = parse_XLSBArrayParsedFormula(data, end - data.l, opts);
    o[1] = formula;
  } else data.l = end;
  return o;
}
function parse_BrtShrFmla(data, length, opts) {
  var end = data.l + length;
  var rfx = parse_UncheckedRfX(data);
  var o = [rfx];
  if (opts.cellFormula) {
    var formula = parse_XLSBSharedParsedFormula(data, end - data.l, opts);
    o[1] = formula;
    data.l = end;
  } else data.l = end;
  return o;
}
var BrtMarginKeys = ["left", "right", "top", "bottom", "header", "footer"];
function parse_BrtMargins(data) {
  var margins = {};
  BrtMarginKeys.forEach(function(k2) {
    margins[k2] = parse_Xnum(data);
  });
  return margins;
}
function parse_BrtBeginWsView(data) {
  var f2 = data.read_shift(2);
  data.l += 28;
  return { RTL: f2 & 32 };
}
function parse_BrtDVal() {
}
function parse_BrtDVal14() {
}
function parse_ws_bin(data, _opts, idx, rels, wb2, themes, styles) {
  if (!data) return data;
  var opts = _opts || {};
  if (!rels) rels = { "!id": {} };
  var s = opts.dense ? [] : {};
  var ref;
  var refguess = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  var pass = false, end = false;
  var row, p2, cf2, R2, C2, addr, sstr, rr, cell;
  var merges = [];
  opts.biff = 12;
  opts["!row"] = 0;
  var ai2 = 0, af2 = false;
  var arrayf = [];
  var sharedf = {};
  var supbooks = opts.supbooks || /*::(*/
  wb2.supbooks || [[]];
  supbooks.sharedf = sharedf;
  supbooks.arrayf = arrayf;
  supbooks.SheetNames = wb2.SheetNames || wb2.Sheets.map(function(x2) {
    return x2.name;
  });
  if (!opts.supbooks) {
    opts.supbooks = supbooks;
    if (wb2.Names) for (var i = 0; i < wb2.Names.length; ++i) supbooks[0][i + 1] = wb2.Names[i];
  }
  var colinfo = [], rowinfo = [];
  var seencol = false;
  XLSBRecordEnum[16] = { n: "BrtShortReal", f: parse_BrtShortReal };
  var cm;
  recordhopper(data, function ws_parse(val, RR, RT) {
    if (end) return;
    switch (RT) {
      case 148:
        ref = val;
        break;
      case 0:
        row = val;
        if (opts.sheetRows && opts.sheetRows <= row.r) end = true;
        rr = encode_row(R2 = row.r);
        opts["!row"] = row.r;
        if (val.hidden || val.hpt || val.level != null) {
          if (val.hpt) val.hpx = pt2px(val.hpt);
          rowinfo[val.r] = val;
        }
        break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 62:
        p2 = { t: val[2] };
        switch (val[2]) {
          case "n":
            p2.v = val[1];
            break;
          case "s":
            sstr = strs[val[1]];
            p2.v = sstr.t;
            p2.r = sstr.r;
            break;
          case "b":
            p2.v = val[1] ? true : false;
            break;
          case "e":
            p2.v = val[1];
            if (opts.cellText !== false) p2.w = BErr[p2.v];
            break;
          case "str":
            p2.t = "s";
            p2.v = val[1];
            break;
          case "is":
            p2.t = "s";
            p2.v = val[1].t;
            break;
        }
        if (cf2 = styles.CellXf[val[0].iStyleRef]) safe_format(p2, cf2.numFmtId, null, opts, themes, styles);
        C2 = val[0].c == -1 ? C2 + 1 : val[0].c;
        if (opts.dense) {
          if (!s[R2]) s[R2] = [];
          s[R2][C2] = p2;
        } else s[encode_col(C2) + rr] = p2;
        if (opts.cellFormula) {
          af2 = false;
          for (ai2 = 0; ai2 < arrayf.length; ++ai2) {
            var aii = arrayf[ai2];
            if (row.r >= aii[0].s.r && row.r <= aii[0].e.r) {
              if (C2 >= aii[0].s.c && C2 <= aii[0].e.c) {
                p2.F = encode_range(aii[0]);
                af2 = true;
              }
            }
          }
          if (!af2 && val.length > 3) p2.f = val[3];
        }
        if (refguess.s.r > row.r) refguess.s.r = row.r;
        if (refguess.s.c > C2) refguess.s.c = C2;
        if (refguess.e.r < row.r) refguess.e.r = row.r;
        if (refguess.e.c < C2) refguess.e.c = C2;
        if (opts.cellDates && cf2 && p2.t == "n" && fmt_is_date(table_fmt[cf2.numFmtId])) {
          var _d = SSF_parse_date_code(p2.v);
          if (_d) {
            p2.t = "d";
            p2.v = new Date(_d.y, _d.m - 1, _d.d, _d.H, _d.M, _d.S, _d.u);
          }
        }
        if (cm) {
          if (cm.type == "XLDAPR") p2.D = true;
          cm = void 0;
        }
        break;
      case 1:
      case 12:
        if (!opts.sheetStubs || pass) break;
        p2 = { t: "z", v: void 0 };
        C2 = val[0].c == -1 ? C2 + 1 : val[0].c;
        if (opts.dense) {
          if (!s[R2]) s[R2] = [];
          s[R2][C2] = p2;
        } else s[encode_col(C2) + rr] = p2;
        if (refguess.s.r > row.r) refguess.s.r = row.r;
        if (refguess.s.c > C2) refguess.s.c = C2;
        if (refguess.e.r < row.r) refguess.e.r = row.r;
        if (refguess.e.c < C2) refguess.e.c = C2;
        if (cm) {
          if (cm.type == "XLDAPR") p2.D = true;
          cm = void 0;
        }
        break;
      case 176:
        merges.push(val);
        break;
      case 49:
        {
          cm = ((opts.xlmeta || {}).Cell || [])[val - 1];
        }
        break;
      case 494:
        var rel = rels["!id"][val.relId];
        if (rel) {
          val.Target = rel.Target;
          if (val.loc) val.Target += "#" + val.loc;
          val.Rel = rel;
        } else if (val.relId == "") {
          val.Target = "#" + val.loc;
        }
        for (R2 = val.rfx.s.r; R2 <= val.rfx.e.r; ++R2) for (C2 = val.rfx.s.c; C2 <= val.rfx.e.c; ++C2) {
          if (opts.dense) {
            if (!s[R2]) s[R2] = [];
            if (!s[R2][C2]) s[R2][C2] = { t: "z", v: void 0 };
            s[R2][C2].l = val;
          } else {
            addr = encode_cell({ c: C2, r: R2 });
            if (!s[addr]) s[addr] = { t: "z", v: void 0 };
            s[addr].l = val;
          }
        }
        break;
      case 426:
        if (!opts.cellFormula) break;
        arrayf.push(val);
        cell = opts.dense ? s[R2][C2] : s[encode_col(C2) + rr];
        cell.f = stringify_formula(val[1], refguess, { r: row.r, c: C2 }, supbooks, opts);
        cell.F = encode_range(val[0]);
        break;
      case 427:
        if (!opts.cellFormula) break;
        sharedf[encode_cell(val[0].s)] = val[1];
        cell = opts.dense ? s[R2][C2] : s[encode_col(C2) + rr];
        cell.f = stringify_formula(val[1], refguess, { r: row.r, c: C2 }, supbooks, opts);
        break;
      case 60:
        if (!opts.cellStyles) break;
        while (val.e >= val.s) {
          colinfo[val.e--] = { width: val.w / 256, hidden: !!(val.flags & 1), level: val.level };
          if (!seencol) {
            seencol = true;
            find_mdw_colw(val.w / 256);
          }
          process_col(colinfo[val.e + 1]);
        }
        break;
      case 161:
        s["!autofilter"] = { ref: encode_range(val) };
        break;
      case 476:
        s["!margins"] = val;
        break;
      case 147:
        if (!wb2.Sheets[idx]) wb2.Sheets[idx] = {};
        if (val.name) wb2.Sheets[idx].CodeName = val.name;
        if (val.above || val.left) s["!outline"] = { above: val.above, left: val.left };
        break;
      case 137:
        if (!wb2.Views) wb2.Views = [{}];
        if (!wb2.Views[0]) wb2.Views[0] = {};
        if (val.RTL) wb2.Views[0].RTL = true;
        break;
      case 485:
        break;
      case 64:
      case 1053:
        break;
      case 151:
        break;
      case 152:
      case 175:
      case 644:
      case 625:
      case 562:
      case 396:
      case 1112:
      case 1146:
      case 471:
      case 1050:
      case 649:
      case 1105:
      case 589:
      case 607:
      case 564:
      case 1055:
      case 168:
      case 174:
      case 1180:
      case 499:
      case 507:
      case 550:
      case 171:
      case 167:
      case 1177:
      case 169:
      case 1181:
      case 551:
      case 552:
      case 661:
      case 639:
      case 478:
      case 537:
      case 477:
      case 536:
      case 1103:
      case 680:
      case 1104:
      case 1024:
      case 663:
      case 535:
      case 678:
      case 504:
      case 1043:
      case 428:
      case 170:
      case 3072:
      case 50:
      case 2070:
      case 1045:
        break;
      case 35:
        pass = true;
        break;
      case 36:
        pass = false;
        break;
      case 37:
        pass = true;
        break;
      case 38:
        pass = false;
        break;
      default:
        if (RR.T) ;
        else if (!pass || opts.WTF) throw new Error("Unexpected record 0x" + RT.toString(16));
    }
  }, opts);
  delete opts.supbooks;
  delete opts["!row"];
  if (!s["!ref"] && (refguess.s.r < 2e6 || ref && (ref.e.r > 0 || ref.e.c > 0 || ref.s.r > 0 || ref.s.c > 0))) s["!ref"] = encode_range(ref || refguess);
  if (opts.sheetRows && s["!ref"]) {
    var tmpref = safe_decode_range(s["!ref"]);
    if (opts.sheetRows <= +tmpref.e.r) {
      tmpref.e.r = opts.sheetRows - 1;
      if (tmpref.e.r > refguess.e.r) tmpref.e.r = refguess.e.r;
      if (tmpref.e.r < tmpref.s.r) tmpref.s.r = tmpref.e.r;
      if (tmpref.e.c > refguess.e.c) tmpref.e.c = refguess.e.c;
      if (tmpref.e.c < tmpref.s.c) tmpref.s.c = tmpref.e.c;
      s["!fullref"] = s["!ref"];
      s["!ref"] = encode_range(tmpref);
    }
  }
  if (merges.length > 0) s["!merges"] = merges;
  if (colinfo.length > 0) s["!cols"] = colinfo;
  if (rowinfo.length > 0) s["!rows"] = rowinfo;
  return s;
}
function parse_Cache(data) {
  var col = [];
  var num = data.match(/^<c:numCache>/);
  var f2;
  (data.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg) || []).forEach(function(pt) {
    var q2 = pt.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
    if (!q2) return;
    col[+q2[1]] = num ? +q2[2] : q2[2];
  });
  var nf2 = unescapexml((data.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
  (data.match(/<c:f>(.*?)<\/c:f>/mg) || []).forEach(function(F2) {
    f2 = F2.replace(/<.*?>/g, "");
  });
  return [col, nf2, f2];
}
function parse_chart(data, name, opts, rels, wb2, csheet) {
  var cs = csheet || { "!type": "chart" };
  if (!data) return csheet;
  var C2 = 0, R2 = 0, col = "A";
  var refguess = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  (data.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function(nc2) {
    var cache = parse_Cache(nc2);
    refguess.s.r = refguess.s.c = 0;
    refguess.e.c = C2;
    col = encode_col(C2);
    cache[0].forEach(function(n2, i) {
      cs[col + encode_row(i)] = { t: "n", v: n2, z: cache[1] };
      R2 = i;
    });
    if (refguess.e.r < R2) refguess.e.r = R2;
    ++C2;
  });
  if (C2 > 0) cs["!ref"] = encode_range(refguess);
  return cs;
}
function parse_cs_xml(data, opts, idx, rels, wb2) {
  if (!data) return data;
  if (!rels) rels = { "!id": {} };
  var s = { "!type": "chart", "!drawel": null, "!rel": "" };
  var m2;
  var sheetPr = data.match(sheetprregex);
  if (sheetPr) parse_ws_xml_sheetpr(sheetPr[0], s, wb2, idx);
  if (m2 = data.match(/drawing r:id="(.*?)"/)) s["!rel"] = m2[1];
  if (rels["!id"][s["!rel"]]) s["!drawel"] = rels["!id"][s["!rel"]];
  return s;
}
function parse_BrtCsProp(data, length) {
  data.l += 10;
  var name = parse_XLWideString(data);
  return { name };
}
function parse_cs_bin(data, opts, idx, rels, wb2) {
  if (!data) return data;
  if (!rels) rels = { "!id": {} };
  var s = { "!type": "chart", "!drawel": null, "!rel": "" };
  var pass = false;
  recordhopper(data, function cs_parse(val, R2, RT) {
    switch (RT) {
      case 550:
        s["!rel"] = val;
        break;
      case 651:
        if (!wb2.Sheets[idx]) wb2.Sheets[idx] = {};
        if (val.name) wb2.Sheets[idx].CodeName = val.name;
        break;
      case 562:
      case 652:
      case 669:
      case 679:
      case 551:
      case 552:
      case 476:
      case 3072:
        break;
      case 35:
        pass = true;
        break;
      case 36:
        pass = false;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (R2.T > 0) ;
        else if (R2.T < 0) ;
        else if (!pass || opts.WTF) throw new Error("Unexpected record 0x" + RT.toString(16));
    }
  }, opts);
  if (rels["!id"][s["!rel"]]) s["!drawel"] = rels["!id"][s["!rel"]];
  return s;
}
var WBPropsDef = [
  ["allowRefreshQuery", false, "bool"],
  ["autoCompressPictures", true, "bool"],
  ["backupFile", false, "bool"],
  ["checkCompatibility", false, "bool"],
  ["CodeName", ""],
  ["date1904", false, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", false, "bool"],
  ["hidePivotFieldList", false, "bool"],
  ["promptedSolutions", false, "bool"],
  ["publishItems", false, "bool"],
  ["refreshAllConnections", false, "bool"],
  ["saveExternalLinkValues", true, "bool"],
  ["showBorderUnselectedTables", true, "bool"],
  ["showInkAnnotation", true, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", false, "bool"],
  ["updateLinks", "userSet"]
];
var WBViewDef = [
  ["activeTab", 0, "int"],
  ["autoFilterDateGrouping", true, "bool"],
  ["firstSheet", 0, "int"],
  ["minimized", false, "bool"],
  ["showHorizontalScroll", true, "bool"],
  ["showSheetTabs", true, "bool"],
  ["showVerticalScroll", true, "bool"],
  ["tabRatio", 600, "int"],
  ["visibility", "visible"]
  //window{Height,Width}, {x,y}Window
];
var SheetDef = [
  //['state', 'visible']
];
var CalcPrDef = [
  ["calcCompleted", "true"],
  ["calcMode", "auto"],
  ["calcOnSave", "true"],
  ["concurrentCalc", "true"],
  ["fullCalcOnLoad", "false"],
  ["fullPrecision", "true"],
  ["iterate", "false"],
  ["iterateCount", "100"],
  ["iterateDelta", "0.001"],
  ["refMode", "A1"]
];
function push_defaults_array(target, defaults) {
  for (var j = 0; j != target.length; ++j) {
    var w2 = target[j];
    for (var i = 0; i != defaults.length; ++i) {
      var z2 = defaults[i];
      if (w2[z2[0]] == null) w2[z2[0]] = z2[1];
      else switch (z2[2]) {
        case "bool":
          if (typeof w2[z2[0]] == "string") w2[z2[0]] = parsexmlbool(w2[z2[0]]);
          break;
        case "int":
          if (typeof w2[z2[0]] == "string") w2[z2[0]] = parseInt(w2[z2[0]], 10);
          break;
      }
    }
  }
}
function push_defaults(target, defaults) {
  for (var i = 0; i != defaults.length; ++i) {
    var z2 = defaults[i];
    if (target[z2[0]] == null) target[z2[0]] = z2[1];
    else switch (z2[2]) {
      case "bool":
        if (typeof target[z2[0]] == "string") target[z2[0]] = parsexmlbool(target[z2[0]]);
        break;
      case "int":
        if (typeof target[z2[0]] == "string") target[z2[0]] = parseInt(target[z2[0]], 10);
        break;
    }
  }
}
function parse_wb_defaults(wb2) {
  push_defaults(wb2.WBProps, WBPropsDef);
  push_defaults(wb2.CalcPr, CalcPrDef);
  push_defaults_array(wb2.WBView, WBViewDef);
  push_defaults_array(wb2.Sheets, SheetDef);
  _ssfopts.date1904 = parsexmlbool(wb2.WBProps.date1904);
}
var badchars = /* @__PURE__ */ "][*?/\\".split("");
function check_ws_name(n2, safe) {
  if (n2.length > 31) {
    throw new Error("Sheet names cannot exceed 31 chars");
  }
  var _good = true;
  badchars.forEach(function(c) {
    if (n2.indexOf(c) == -1) return;
    throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
  });
  return _good;
}
var wbnsregex = /<\w+:workbook/;
function parse_wb_xml(data, opts) {
  if (!data) throw new Error("Could not find file");
  var wb2 = (
    /*::(*/
    { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }
  );
  var pass = false, xmlns = "xmlns";
  var dname = {}, dnstart = 0;
  data.replace(tagregex, function xml_wb(x2, idx) {
    var y2 = parsexmltag(x2);
    switch (strip_ns(y2[0])) {
      case "<?xml":
        break;
      case "<workbook":
        if (x2.match(wbnsregex)) xmlns = "xmlns" + x2.match(/<(\w+):/)[1];
        wb2.xmlns = y2[xmlns];
        break;
      case "</workbook>":
        break;
      case "<fileVersion":
        delete y2[0];
        wb2.AppVersion = y2;
        break;
      case "<fileVersion/>":
      case "</fileVersion>":
        break;
      case "<fileSharing":
        break;
      case "<fileSharing/>":
        break;
      case "<workbookPr":
      case "<workbookPr/>":
        WBPropsDef.forEach(function(w2) {
          if (y2[w2[0]] == null) return;
          switch (w2[2]) {
            case "bool":
              wb2.WBProps[w2[0]] = parsexmlbool(y2[w2[0]]);
              break;
            case "int":
              wb2.WBProps[w2[0]] = parseInt(y2[w2[0]], 10);
              break;
            default:
              wb2.WBProps[w2[0]] = y2[w2[0]];
          }
        });
        if (y2.codeName) wb2.WBProps.CodeName = utf8read(y2.codeName);
        break;
      case "</workbookPr>":
        break;
      case "<workbookProtection":
        break;
      case "<workbookProtection/>":
        break;
      case "<bookViews":
      case "<bookViews>":
      case "</bookViews>":
        break;
      case "<workbookView":
      case "<workbookView/>":
        delete y2[0];
        wb2.WBView.push(y2);
        break;
      case "</workbookView>":
        break;
      case "<sheets":
      case "<sheets>":
      case "</sheets>":
        break;
      case "<sheet":
        switch (y2.state) {
          case "hidden":
            y2.Hidden = 1;
            break;
          case "veryHidden":
            y2.Hidden = 2;
            break;
          default:
            y2.Hidden = 0;
        }
        delete y2.state;
        y2.name = unescapexml(utf8read(y2.name));
        delete y2[0];
        wb2.Sheets.push(y2);
        break;
      case "</sheet>":
        break;
      case "<functionGroups":
      case "<functionGroups/>":
        break;
      case "<functionGroup":
        break;
      case "<externalReferences":
      case "</externalReferences>":
      case "<externalReferences>":
        break;
      case "<externalReference":
        break;
      case "<definedNames/>":
        break;
      case "<definedNames>":
      case "<definedNames":
        pass = true;
        break;
      case "</definedNames>":
        pass = false;
        break;
      case "<definedName":
        {
          dname = {};
          dname.Name = utf8read(y2.name);
          if (y2.comment) dname.Comment = y2.comment;
          if (y2.localSheetId) dname.Sheet = +y2.localSheetId;
          if (parsexmlbool(y2.hidden || "0")) dname.Hidden = true;
          dnstart = idx + x2.length;
        }
        break;
      case "</definedName>":
        {
          dname.Ref = unescapexml(utf8read(data.slice(dnstart, idx)));
          wb2.Names.push(dname);
        }
        break;
      case "<definedName/>":
        break;
      case "<calcPr":
        delete y2[0];
        wb2.CalcPr = y2;
        break;
      case "<calcPr/>":
        delete y2[0];
        wb2.CalcPr = y2;
        break;
      case "</calcPr>":
        break;
      case "<oleSize":
        break;
      case "<customWorkbookViews>":
      case "</customWorkbookViews>":
      case "<customWorkbookViews":
        break;
      case "<customWorkbookView":
      case "</customWorkbookView>":
        break;
      case "<pivotCaches>":
      case "</pivotCaches>":
      case "<pivotCaches":
        break;
      case "<pivotCache":
        break;
      case "<smartTagPr":
      case "<smartTagPr/>":
        break;
      case "<smartTagTypes":
      case "<smartTagTypes>":
      case "</smartTagTypes>":
        break;
      case "<smartTagType":
        break;
      case "<webPublishing":
      case "<webPublishing/>":
        break;
      case "<fileRecoveryPr":
      case "<fileRecoveryPr/>":
        break;
      case "<webPublishObjects>":
      case "<webPublishObjects":
      case "</webPublishObjects>":
        break;
      case "<webPublishObject":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        pass = true;
        break;
      case "</ext>":
        pass = false;
        break;
      case "<ArchID":
        break;
      case "<AlternateContent":
      case "<AlternateContent>":
        pass = true;
        break;
      case "</AlternateContent>":
        pass = false;
        break;
      case "<revisionPtr":
        break;
      default:
        if (!pass && opts.WTF) throw new Error("unrecognized " + y2[0] + " in workbook");
    }
    return x2;
  });
  if (XMLNS_main.indexOf(wb2.xmlns) === -1) throw new Error("Unknown Namespace: " + wb2.xmlns);
  parse_wb_defaults(wb2);
  return wb2;
}
function parse_BrtBundleSh(data, length) {
  var z2 = {};
  z2.Hidden = data.read_shift(4);
  z2.iTabID = data.read_shift(4);
  z2.strRelID = parse_RelID(data);
  z2.name = parse_XLWideString(data);
  return z2;
}
function parse_BrtWbProp(data, length) {
  var o = {};
  var flags = data.read_shift(4);
  o.defaultThemeVersion = data.read_shift(4);
  var strName = length > 8 ? parse_XLWideString(data) : "";
  if (strName.length > 0) o.CodeName = strName;
  o.autoCompressPictures = !!(flags & 65536);
  o.backupFile = !!(flags & 64);
  o.checkCompatibility = !!(flags & 4096);
  o.date1904 = !!(flags & 1);
  o.filterPrivacy = !!(flags & 8);
  o.hidePivotFieldList = !!(flags & 1024);
  o.promptedSolutions = !!(flags & 16);
  o.publishItems = !!(flags & 2048);
  o.refreshAllConnections = !!(flags & 262144);
  o.saveExternalLinkValues = !!(flags & 128);
  o.showBorderUnselectedTables = !!(flags & 4);
  o.showInkAnnotation = !!(flags & 32);
  o.showObjects = ["all", "placeholders", "none"][flags >> 13 & 3];
  o.showPivotChartFilter = !!(flags & 32768);
  o.updateLinks = ["userSet", "never", "always"][flags >> 8 & 3];
  return o;
}
function parse_BrtFRTArchID$(data, length) {
  var o = {};
  data.read_shift(4);
  o.ArchID = data.read_shift(4);
  data.l += length - 8;
  return o;
}
function parse_BrtName(data, length, opts) {
  var end = data.l + length;
  data.l += 4;
  data.l += 1;
  var itab = data.read_shift(4);
  var name = parse_XLNameWideString(data);
  var formula = parse_XLSBNameParsedFormula(data, 0, opts);
  var comment = parse_XLNullableWideString(data);
  data.l = end;
  var out = { Name: name, Ptg: formula };
  if (itab < 268435455) out.Sheet = itab;
  if (comment) out.Comment = comment;
  return out;
}
function parse_wb_bin(data, opts) {
  var wb2 = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" };
  var state = [];
  var pass = false;
  if (!opts) opts = {};
  opts.biff = 12;
  var Names = [];
  var supbooks = [[]];
  supbooks.SheetNames = [];
  supbooks.XTI = [];
  XLSBRecordEnum[16] = { n: "BrtFRTArchID$", f: parse_BrtFRTArchID$ };
  recordhopper(data, function hopper_wb(val, R2, RT) {
    switch (RT) {
      case 156:
        supbooks.SheetNames.push(val.name);
        wb2.Sheets.push(val);
        break;
      case 153:
        wb2.WBProps = val;
        break;
      case 39:
        if (val.Sheet != null) opts.SID = val.Sheet;
        val.Ref = stringify_formula(val.Ptg, null, null, supbooks, opts);
        delete opts.SID;
        delete val.Ptg;
        Names.push(val);
        break;
      case 1036:
        break;
      case 357:
      case 358:
      case 355:
      case 667:
        if (!supbooks[0].length) supbooks[0] = [RT, val];
        else supbooks.push([RT, val]);
        supbooks[supbooks.length - 1].XTI = [];
        break;
      case 362:
        if (supbooks.length === 0) {
          supbooks[0] = [];
          supbooks[0].XTI = [];
        }
        supbooks[supbooks.length - 1].XTI = supbooks[supbooks.length - 1].XTI.concat(val);
        supbooks.XTI = supbooks.XTI.concat(val);
        break;
      case 361:
        break;
      case 2071:
      case 158:
      case 143:
      case 664:
      case 353:
        break;
      case 3072:
      case 3073:
      case 534:
      case 677:
      case 157:
      case 610:
      case 2050:
      case 155:
      case 548:
      case 676:
      case 128:
      case 665:
      case 2128:
      case 2125:
      case 549:
      case 2053:
      case 596:
      case 2076:
      case 2075:
      case 2082:
      case 397:
      case 154:
      case 1117:
      case 553:
      case 2091:
        break;
      case 35:
        state.push(RT);
        pass = true;
        break;
      case 36:
        state.pop();
        pass = false;
        break;
      case 37:
        state.push(RT);
        pass = true;
        break;
      case 38:
        state.pop();
        pass = false;
        break;
      case 16:
        break;
      default:
        if (R2.T) ;
        else if (!pass || opts.WTF && state[state.length - 1] != 37 && state[state.length - 1] != 35) throw new Error("Unexpected record 0x" + RT.toString(16));
    }
  }, opts);
  parse_wb_defaults(wb2);
  wb2.Names = Names;
  wb2.supbooks = supbooks;
  return wb2;
}
function parse_wb(data, name, opts) {
  if (name.slice(-4) === ".bin") return parse_wb_bin(data, opts);
  return parse_wb_xml(data, opts);
}
function parse_ws(data, name, idx, opts, rels, wb2, themes, styles) {
  if (name.slice(-4) === ".bin") return parse_ws_bin(data, opts, idx, rels, wb2, themes, styles);
  return parse_ws_xml(data, opts, idx, rels, wb2, themes, styles);
}
function parse_cs(data, name, idx, opts, rels, wb2, themes, styles) {
  if (name.slice(-4) === ".bin") return parse_cs_bin(data, opts, idx, rels, wb2);
  return parse_cs_xml(data, opts, idx, rels, wb2);
}
function parse_ms(data, name, idx, opts, rels, wb2, themes, styles) {
  if (name.slice(-4) === ".bin") return parse_ms_bin();
  return parse_ms_xml();
}
function parse_ds(data, name, idx, opts, rels, wb2, themes, styles) {
  if (name.slice(-4) === ".bin") return parse_ds_bin();
  return parse_ds_xml();
}
function parse_sty(data, name, themes, opts) {
  if (name.slice(-4) === ".bin") return parse_sty_bin(data, themes, opts);
  return parse_sty_xml(data, themes, opts);
}
function parse_theme(data, name, opts) {
  return parse_theme_xml(data, opts);
}
function parse_sst(data, name, opts) {
  if (name.slice(-4) === ".bin") return parse_sst_bin(data, opts);
  return parse_sst_xml(data, opts);
}
function parse_cmnt(data, name, opts) {
  if (name.slice(-4) === ".bin") return parse_comments_bin(data, opts);
  return parse_comments_xml(data, opts);
}
function parse_cc(data, name, opts) {
  if (name.slice(-4) === ".bin") return parse_cc_bin(data);
  return parse_cc_xml(data);
}
function parse_xlink(data, rel, name, opts) {
  if (name.slice(-4) === ".bin") return parse_xlink_bin(data, rel, name, opts);
  return parse_xlink_xml();
}
function parse_xlmeta(data, name, opts) {
  if (name.slice(-4) === ".bin") return parse_xlmeta_bin(data, name, opts);
  return parse_xlmeta_xml(data, name, opts);
}
var attregexg2 = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g;
var attregex2 = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function xlml_parsexmltag(tag, skip_root) {
  var words = tag.split(/\s+/);
  var z2 = [];
  z2[0] = words[0];
  if (words.length === 1) return z2;
  var m2 = tag.match(attregexg2), y2, j, w2, i;
  if (m2) for (i = 0; i != m2.length; ++i) {
    y2 = m2[i].match(attregex2);
    if ((j = y2[1].indexOf(":")) === -1) z2[y2[1]] = y2[2].slice(1, y2[2].length - 1);
    else {
      if (y2[1].slice(0, 6) === "xmlns:") w2 = "xmlns" + y2[1].slice(6);
      else w2 = y2[1].slice(j + 1);
      z2[w2] = y2[2].slice(1, y2[2].length - 1);
    }
  }
  return z2;
}
function xlml_parsexmltagobj(tag) {
  var words = tag.split(/\s+/);
  var z2 = {};
  if (words.length === 1) return z2;
  var m2 = tag.match(attregexg2), y2, j, w2, i;
  if (m2) for (i = 0; i != m2.length; ++i) {
    y2 = m2[i].match(attregex2);
    if ((j = y2[1].indexOf(":")) === -1) z2[y2[1]] = y2[2].slice(1, y2[2].length - 1);
    else {
      if (y2[1].slice(0, 6) === "xmlns:") w2 = "xmlns" + y2[1].slice(6);
      else w2 = y2[1].slice(j + 1);
      z2[w2] = y2[2].slice(1, y2[2].length - 1);
    }
  }
  return z2;
}
var XLMLFormatMap;
function xlml_format(format, value) {
  var fmt = XLMLFormatMap[format] || unescapexml(format);
  if (fmt === "General") return SSF_general(value);
  return SSF_format(fmt, value);
}
function xlml_set_custprop(Custprops, key, cp, val) {
  var oval = val;
  switch ((cp[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      oval = parsexmlbool(val);
      break;
    case "i2":
    case "int":
      oval = parseInt(val, 10);
      break;
    case "r4":
    case "float":
      oval = parseFloat(val);
      break;
    case "date":
    case "dateTime.tz":
      oval = parseDate(val);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + cp[0]);
  }
  Custprops[unescapexml(key)] = oval;
}
function safe_format_xlml(cell, nf2, o) {
  if (cell.t === "z") return;
  if (!o || o.cellText !== false) try {
    if (cell.t === "e") {
      cell.w = cell.w || BErr[cell.v];
    } else if (nf2 === "General") {
      if (cell.t === "n") {
        if ((cell.v | 0) === cell.v) cell.w = cell.v.toString(10);
        else cell.w = SSF_general_num(cell.v);
      } else cell.w = SSF_general(cell.v);
    } else cell.w = xlml_format(nf2 || "General", cell.v);
  } catch (e) {
    if (o.WTF) throw e;
  }
  try {
    var z2 = XLMLFormatMap[nf2] || nf2 || "General";
    if (o.cellNF) cell.z = z2;
    if (o.cellDates && cell.t == "n" && fmt_is_date(z2)) {
      var _d = SSF_parse_date_code(cell.v);
      if (_d) {
        cell.t = "d";
        cell.v = new Date(_d.y, _d.m - 1, _d.d, _d.H, _d.M, _d.S, _d.u);
      }
    }
  } catch (e) {
    if (o.WTF) throw e;
  }
}
function process_style_xlml(styles, stag, opts) {
  if (opts.cellStyles) {
    if (stag.Interior) {
      var I2 = stag.Interior;
      if (I2.Pattern) I2.patternType = XLMLPatternTypeMap[I2.Pattern] || I2.Pattern;
    }
  }
  styles[stag.ID] = stag;
}
function parse_xlml_data(xml, ss, data, cell, base, styles, csty, row, arrayf, o) {
  var nf2 = "General", sid = cell.StyleID, S2 = {};
  o = o || {};
  var interiors = [];
  var i = 0;
  if (sid === void 0 && row) sid = row.StyleID;
  if (sid === void 0 && csty) sid = csty.StyleID;
  while (styles[sid] !== void 0) {
    if (styles[sid].nf) nf2 = styles[sid].nf;
    if (styles[sid].Interior) interiors.push(styles[sid].Interior);
    if (!styles[sid].Parent) break;
    sid = styles[sid].Parent;
  }
  switch (data.Type) {
    case "Boolean":
      cell.t = "b";
      cell.v = parsexmlbool(xml);
      break;
    case "String":
      cell.t = "s";
      cell.r = xlml_fixstr(unescapexml(xml));
      cell.v = xml.indexOf("<") > -1 ? unescapexml(ss || xml).replace(/<.*?>/g, "") : cell.r;
      break;
    case "DateTime":
      if (xml.slice(-1) != "Z") xml += "Z";
      cell.v = (parseDate(xml) - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1e3);
      if (cell.v !== cell.v) cell.v = unescapexml(xml);
      else if (cell.v < 60) cell.v = cell.v - 1;
      if (!nf2 || nf2 == "General") nf2 = "yyyy-mm-dd";
    case "Number":
      if (cell.v === void 0) cell.v = +xml;
      if (!cell.t) cell.t = "n";
      break;
    case "Error":
      cell.t = "e";
      cell.v = RBErr[xml];
      if (o.cellText !== false) cell.w = xml;
      break;
    default:
      if (xml == "" && ss == "") {
        cell.t = "z";
      } else {
        cell.t = "s";
        cell.v = xlml_fixstr(ss || xml);
      }
      break;
  }
  safe_format_xlml(cell, nf2, o);
  if (o.cellFormula !== false) {
    if (cell.Formula) {
      var fstr = unescapexml(cell.Formula);
      if (fstr.charCodeAt(0) == 61) fstr = fstr.slice(1);
      cell.f = rc_to_a1(fstr, base);
      delete cell.Formula;
      if (cell.ArrayRange == "RC") cell.F = rc_to_a1("RC:RC", base);
      else if (cell.ArrayRange) {
        cell.F = rc_to_a1(cell.ArrayRange, base);
        arrayf.push([safe_decode_range(cell.F), cell.F]);
      }
    } else {
      for (i = 0; i < arrayf.length; ++i)
        if (base.r >= arrayf[i][0].s.r && base.r <= arrayf[i][0].e.r) {
          if (base.c >= arrayf[i][0].s.c && base.c <= arrayf[i][0].e.c)
            cell.F = arrayf[i][1];
        }
    }
  }
  if (o.cellStyles) {
    interiors.forEach(function(x2) {
      if (!S2.patternType && x2.patternType) S2.patternType = x2.patternType;
    });
    cell.s = S2;
  }
  if (cell.StyleID !== void 0) cell.ixfe = cell.StyleID;
}
function xlml_clean_comment(comment) {
  comment.t = comment.v || "";
  comment.t = comment.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  comment.v = comment.w = comment.ixfe = void 0;
}
function parse_xlml_xml(d, _opts) {
  var opts = _opts || {};
  make_ssf();
  var str = debom(xlml_normalize(d));
  if (opts.type == "binary" || opts.type == "array" || opts.type == "base64") {
    str = utf8read(str);
  }
  var opening = str.slice(0, 1024).toLowerCase(), ishtml = false;
  opening = opening.replace(/".*?"/g, "");
  if ((opening.indexOf(">") & 1023) > Math.min(opening.indexOf(",") & 1023, opening.indexOf(";") & 1023)) {
    var _o = dup(opts);
    _o.type = "string";
    return PRN.to_workbook(str, _o);
  }
  if (opening.indexOf("<?xml") == -1) ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(tag) {
    if (opening.indexOf("<" + tag) >= 0) ishtml = true;
  });
  if (ishtml) return html_to_workbook(str, opts);
  XLMLFormatMap = {
    "General Number": "General",
    "General Date": table_fmt[22],
    "Long Date": "dddd, mmmm dd, yyyy",
    "Medium Date": table_fmt[15],
    "Short Date": table_fmt[14],
    "Long Time": table_fmt[19],
    "Medium Time": table_fmt[18],
    "Short Time": table_fmt[20],
    "Currency": '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    "Fixed": table_fmt[2],
    "Standard": table_fmt[4],
    "Percent": table_fmt[10],
    "Scientific": table_fmt[11],
    "Yes/No": '"Yes";"Yes";"No";@',
    "True/False": '"True";"True";"False";@',
    "On/Off": '"Yes";"Yes";"No";@'
  };
  var Rn;
  var state = [], tmp;
  var sheets = {}, sheetnames = [], cursheet = opts.dense ? [] : {}, sheetname = "";
  var cell = {}, row = {};
  var dtag = xlml_parsexmltag('<Data ss:Type="String">'), didx = 0;
  var c = 0, r2 = 0;
  var refguess = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  var styles = {}, stag = {};
  var ss = "", fidx = 0;
  var merges = [];
  var Props = {}, Custprops = {}, pidx = 0, cp = [];
  var comments = [], comment = {};
  var cstys = [], csty, seencol = false;
  var arrayf = [];
  var rowinfo = [], rowobj = {}, cc2 = 0, rr = 0;
  var Workbook = { Sheets: [], WBProps: { date1904: false } }, wsprops = {};
  xlmlregex.lastIndex = 0;
  str = str.replace(/<!--([\s\S]*?)-->/mg, "");
  var raw_Rn3 = "";
  while (Rn = xlmlregex.exec(str)) switch (Rn[3] = (raw_Rn3 = Rn[3]).toLowerCase()) {
    case "data":
      if (raw_Rn3 == "data") {
        if (Rn[1] === "/") {
          if ((tmp = state.pop())[0] !== Rn[3]) throw new Error("Bad state: " + tmp.join("|"));
        } else if (Rn[0].charAt(Rn[0].length - 2) !== "/") state.push([Rn[3], true]);
        break;
      }
      if (state[state.length - 1][1]) break;
      if (Rn[1] === "/") parse_xlml_data(str.slice(didx, Rn.index), ss, dtag, state[state.length - 1][0] == /*"Comment"*/
      "comment" ? comment : cell, { c, r: r2 }, styles, cstys[c], row, arrayf, opts);
      else {
        ss = "";
        dtag = xlml_parsexmltag(Rn[0]);
        didx = Rn.index + Rn[0].length;
      }
      break;
    case "cell":
      if (Rn[1] === "/") {
        if (comments.length > 0) cell.c = comments;
        if ((!opts.sheetRows || opts.sheetRows > r2) && cell.v !== void 0) {
          if (opts.dense) {
            if (!cursheet[r2]) cursheet[r2] = [];
            cursheet[r2][c] = cell;
          } else cursheet[encode_col(c) + encode_row(r2)] = cell;
        }
        if (cell.HRef) {
          cell.l = { Target: unescapexml(cell.HRef) };
          if (cell.HRefScreenTip) cell.l.Tooltip = cell.HRefScreenTip;
          delete cell.HRef;
          delete cell.HRefScreenTip;
        }
        if (cell.MergeAcross || cell.MergeDown) {
          cc2 = c + (parseInt(cell.MergeAcross, 10) | 0);
          rr = r2 + (parseInt(cell.MergeDown, 10) | 0);
          merges.push({ s: { c, r: r2 }, e: { c: cc2, r: rr } });
        }
        if (!opts.sheetStubs) {
          if (cell.MergeAcross) c = cc2 + 1;
          else ++c;
        } else if (cell.MergeAcross || cell.MergeDown) {
          for (var cma = c; cma <= cc2; ++cma) {
            for (var cmd = r2; cmd <= rr; ++cmd) {
              if (cma > c || cmd > r2) {
                if (opts.dense) {
                  if (!cursheet[cmd]) cursheet[cmd] = [];
                  cursheet[cmd][cma] = { t: "z" };
                } else cursheet[encode_col(cma) + encode_row(cmd)] = { t: "z" };
              }
            }
          }
          c = cc2 + 1;
        } else ++c;
      } else {
        cell = xlml_parsexmltagobj(Rn[0]);
        if (cell.Index) c = +cell.Index - 1;
        if (c < refguess.s.c) refguess.s.c = c;
        if (c > refguess.e.c) refguess.e.c = c;
        if (Rn[0].slice(-2) === "/>") ++c;
        comments = [];
      }
      break;
    case "row":
      if (Rn[1] === "/" || Rn[0].slice(-2) === "/>") {
        if (r2 < refguess.s.r) refguess.s.r = r2;
        if (r2 > refguess.e.r) refguess.e.r = r2;
        if (Rn[0].slice(-2) === "/>") {
          row = xlml_parsexmltag(Rn[0]);
          if (row.Index) r2 = +row.Index - 1;
        }
        c = 0;
        ++r2;
      } else {
        row = xlml_parsexmltag(Rn[0]);
        if (row.Index) r2 = +row.Index - 1;
        rowobj = {};
        if (row.AutoFitHeight == "0" || row.Height) {
          rowobj.hpx = parseInt(row.Height, 10);
          rowobj.hpt = px2pt(rowobj.hpx);
          rowinfo[r2] = rowobj;
        }
        if (row.Hidden == "1") {
          rowobj.hidden = true;
          rowinfo[r2] = rowobj;
        }
      }
      break;
    case "worksheet":
      if (Rn[1] === "/") {
        if ((tmp = state.pop())[0] !== Rn[3]) throw new Error("Bad state: " + tmp.join("|"));
        sheetnames.push(sheetname);
        if (refguess.s.r <= refguess.e.r && refguess.s.c <= refguess.e.c) {
          cursheet["!ref"] = encode_range(refguess);
          if (opts.sheetRows && opts.sheetRows <= refguess.e.r) {
            cursheet["!fullref"] = cursheet["!ref"];
            refguess.e.r = opts.sheetRows - 1;
            cursheet["!ref"] = encode_range(refguess);
          }
        }
        if (merges.length) cursheet["!merges"] = merges;
        if (cstys.length > 0) cursheet["!cols"] = cstys;
        if (rowinfo.length > 0) cursheet["!rows"] = rowinfo;
        sheets[sheetname] = cursheet;
      } else {
        refguess = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
        r2 = c = 0;
        state.push([Rn[3], false]);
        tmp = xlml_parsexmltag(Rn[0]);
        sheetname = unescapexml(tmp.Name);
        cursheet = opts.dense ? [] : {};
        merges = [];
        arrayf = [];
        rowinfo = [];
        wsprops = { name: sheetname, Hidden: 0 };
        Workbook.Sheets.push(wsprops);
      }
      break;
    case "table":
      if (Rn[1] === "/") {
        if ((tmp = state.pop())[0] !== Rn[3]) throw new Error("Bad state: " + tmp.join("|"));
      } else if (Rn[0].slice(-2) == "/>") break;
      else {
        state.push([Rn[3], false]);
        cstys = [];
        seencol = false;
      }
      break;
    case "style":
      if (Rn[1] === "/") process_style_xlml(styles, stag, opts);
      else stag = xlml_parsexmltag(Rn[0]);
      break;
    case "numberformat":
      stag.nf = unescapexml(xlml_parsexmltag(Rn[0]).Format || "General");
      if (XLMLFormatMap[stag.nf]) stag.nf = XLMLFormatMap[stag.nf];
      for (var ssfidx = 0; ssfidx != 392; ++ssfidx) if (table_fmt[ssfidx] == stag.nf) break;
      if (ssfidx == 392) {
        for (ssfidx = 57; ssfidx != 392; ++ssfidx) if (table_fmt[ssfidx] == null) {
          SSF_load(stag.nf, ssfidx);
          break;
        }
      }
      break;
    case "column":
      if (state[state.length - 1][0] !== /*'Table'*/
      "table") break;
      csty = xlml_parsexmltag(Rn[0]);
      if (csty.Hidden) {
        csty.hidden = true;
        delete csty.Hidden;
      }
      if (csty.Width) csty.wpx = parseInt(csty.Width, 10);
      if (!seencol && csty.wpx > 10) {
        seencol = true;
        MDW = DEF_MDW;
        for (var _col = 0; _col < cstys.length; ++_col) if (cstys[_col]) process_col(cstys[_col]);
      }
      if (seencol) process_col(csty);
      cstys[csty.Index - 1 || cstys.length] = csty;
      for (var i = 0; i < +csty.Span; ++i) cstys[cstys.length] = dup(csty);
      break;
    case "namedrange":
      if (Rn[1] === "/") break;
      if (!Workbook.Names) Workbook.Names = [];
      var _NamedRange = parsexmltag(Rn[0]);
      var _DefinedName = {
        Name: _NamedRange.Name,
        Ref: rc_to_a1(_NamedRange.RefersTo.slice(1), { r: 0, c: 0 })
      };
      if (Workbook.Sheets.length > 0) _DefinedName.Sheet = Workbook.Sheets.length - 1;
      Workbook.Names.push(_DefinedName);
      break;
    case "namedcell":
      break;
    case "b":
      break;
    case "i":
      break;
    case "u":
      break;
    case "s":
      break;
    case "em":
      break;
    case "h2":
      break;
    case "h3":
      break;
    case "sub":
      break;
    case "sup":
      break;
    case "span":
      break;
    case "alignment":
      break;
    case "borders":
      break;
    case "border":
      break;
    case "font":
      if (Rn[0].slice(-2) === "/>") break;
      else if (Rn[1] === "/") ss += str.slice(fidx, Rn.index);
      else fidx = Rn.index + Rn[0].length;
      break;
    case "interior":
      if (!opts.cellStyles) break;
      stag.Interior = xlml_parsexmltag(Rn[0]);
      break;
    case "protection":
      break;
    case "author":
    case "title":
    case "description":
    case "created":
    case "keywords":
    case "subject":
    case "category":
    case "company":
    case "lastauthor":
    case "lastsaved":
    case "lastprinted":
    case "version":
    case "revision":
    case "totaltime":
    case "hyperlinkbase":
    case "manager":
    case "contentstatus":
    case "identifier":
    case "language":
    case "appname":
      if (Rn[0].slice(-2) === "/>") break;
      else if (Rn[1] === "/") xlml_set_prop(Props, raw_Rn3, str.slice(pidx, Rn.index));
      else pidx = Rn.index + Rn[0].length;
      break;
    case "paragraphs":
      break;
    case "styles":
    case "workbook":
      if (Rn[1] === "/") {
        if ((tmp = state.pop())[0] !== Rn[3]) throw new Error("Bad state: " + tmp.join("|"));
      } else state.push([Rn[3], false]);
      break;
    case "comment":
      if (Rn[1] === "/") {
        if ((tmp = state.pop())[0] !== Rn[3]) throw new Error("Bad state: " + tmp.join("|"));
        xlml_clean_comment(comment);
        comments.push(comment);
      } else {
        state.push([Rn[3], false]);
        tmp = xlml_parsexmltag(Rn[0]);
        comment = { a: tmp.Author };
      }
      break;
    case "autofilter":
      if (Rn[1] === "/") {
        if ((tmp = state.pop())[0] !== Rn[3]) throw new Error("Bad state: " + tmp.join("|"));
      } else if (Rn[0].charAt(Rn[0].length - 2) !== "/") {
        var AutoFilter = xlml_parsexmltag(Rn[0]);
        cursheet["!autofilter"] = { ref: rc_to_a1(AutoFilter.Range).replace(/\$/g, "") };
        state.push([Rn[3], true]);
      }
      break;
    case "name":
      break;
    case "datavalidation":
      if (Rn[1] === "/") {
        if ((tmp = state.pop())[0] !== Rn[3]) throw new Error("Bad state: " + tmp.join("|"));
      } else {
        if (Rn[0].charAt(Rn[0].length - 2) !== "/") state.push([Rn[3], true]);
      }
      break;
    case "pixelsperinch":
      break;
    case "componentoptions":
    case "documentproperties":
    case "customdocumentproperties":
    case "officedocumentsettings":
    case "pivottable":
    case "pivotcache":
    case "names":
    case "mapinfo":
    case "pagebreaks":
    case "querytable":
    case "sorting":
    case "schema":
    case "conditionalformatting":
    case "smarttagtype":
    case "smarttags":
    case "excelworkbook":
    case "workbookoptions":
    case "worksheetoptions":
      if (Rn[1] === "/") {
        if ((tmp = state.pop())[0] !== Rn[3]) throw new Error("Bad state: " + tmp.join("|"));
      } else if (Rn[0].charAt(Rn[0].length - 2) !== "/") state.push([Rn[3], true]);
      break;
    case "null":
      break;
    default:
      if (state.length == 0 && Rn[3] == "document") return parse_fods(str, opts);
      if (state.length == 0 && Rn[3] == "uof") return parse_fods(str, opts);
      var seen = true;
      switch (state[state.length - 1][0]) {
        case "officedocumentsettings":
          switch (Rn[3]) {
            case "allowpng":
              break;
            case "removepersonalinformation":
              break;
            case "downloadcomponents":
              break;
            case "locationofcomponents":
              break;
            case "colors":
              break;
            case "color":
              break;
            case "index":
              break;
            case "rgb":
              break;
            case "targetscreensize":
              break;
            case "readonlyrecommended":
              break;
            default:
              seen = false;
          }
          break;
        case "componentoptions":
          switch (Rn[3]) {
            case "toolbar":
              break;
            case "hideofficelogo":
              break;
            case "spreadsheetautofit":
              break;
            case "label":
              break;
            case "caption":
              break;
            case "maxheight":
              break;
            case "maxwidth":
              break;
            case "nextsheetnumber":
              break;
            default:
              seen = false;
          }
          break;
        case "excelworkbook":
          switch (Rn[3]) {
            case "date1904":
              Workbook.WBProps.date1904 = true;
              break;
            case "windowheight":
              break;
            case "windowwidth":
              break;
            case "windowtopx":
              break;
            case "windowtopy":
              break;
            case "tabratio":
              break;
            case "protectstructure":
              break;
            case "protectwindow":
              break;
            case "protectwindows":
              break;
            case "activesheet":
              break;
            case "displayinknotes":
              break;
            case "firstvisiblesheet":
              break;
            case "supbook":
              break;
            case "sheetname":
              break;
            case "sheetindex":
              break;
            case "sheetindexfirst":
              break;
            case "sheetindexlast":
              break;
            case "dll":
              break;
            case "acceptlabelsinformulas":
              break;
            case "donotsavelinkvalues":
              break;
            case "iteration":
              break;
            case "maxiterations":
              break;
            case "maxchange":
              break;
            case "path":
              break;
            case "xct":
              break;
            case "count":
              break;
            case "selectedsheets":
              break;
            case "calculation":
              break;
            case "uncalced":
              break;
            case "startupprompt":
              break;
            case "crn":
              break;
            case "externname":
              break;
            case "formula":
              break;
            case "colfirst":
              break;
            case "collast":
              break;
            case "wantadvise":
              break;
            case "boolean":
              break;
            case "error":
              break;
            case "text":
              break;
            case "ole":
              break;
            case "noautorecover":
              break;
            case "publishobjects":
              break;
            case "donotcalculatebeforesave":
              break;
            case "number":
              break;
            case "refmoder1c1":
              break;
            case "embedsavesmarttags":
              break;
            default:
              seen = false;
          }
          break;
        case "workbookoptions":
          switch (Rn[3]) {
            case "owcversion":
              break;
            case "height":
              break;
            case "width":
              break;
            default:
              seen = false;
          }
          break;
        case "worksheetoptions":
          switch (Rn[3]) {
            case "visible":
              if (Rn[0].slice(-2) === "/>") ;
              else if (Rn[1] === "/") switch (str.slice(pidx, Rn.index)) {
                case "SheetHidden":
                  wsprops.Hidden = 1;
                  break;
                case "SheetVeryHidden":
                  wsprops.Hidden = 2;
                  break;
              }
              else pidx = Rn.index + Rn[0].length;
              break;
            case "header":
              if (!cursheet["!margins"]) default_margins(cursheet["!margins"] = {}, "xlml");
              if (!isNaN(+parsexmltag(Rn[0]).Margin)) cursheet["!margins"].header = +parsexmltag(Rn[0]).Margin;
              break;
            case "footer":
              if (!cursheet["!margins"]) default_margins(cursheet["!margins"] = {}, "xlml");
              if (!isNaN(+parsexmltag(Rn[0]).Margin)) cursheet["!margins"].footer = +parsexmltag(Rn[0]).Margin;
              break;
            case "pagemargins":
              var pagemargins = parsexmltag(Rn[0]);
              if (!cursheet["!margins"]) default_margins(cursheet["!margins"] = {}, "xlml");
              if (!isNaN(+pagemargins.Top)) cursheet["!margins"].top = +pagemargins.Top;
              if (!isNaN(+pagemargins.Left)) cursheet["!margins"].left = +pagemargins.Left;
              if (!isNaN(+pagemargins.Right)) cursheet["!margins"].right = +pagemargins.Right;
              if (!isNaN(+pagemargins.Bottom)) cursheet["!margins"].bottom = +pagemargins.Bottom;
              break;
            case "displayrighttoleft":
              if (!Workbook.Views) Workbook.Views = [];
              if (!Workbook.Views[0]) Workbook.Views[0] = {};
              Workbook.Views[0].RTL = true;
              break;
            case "freezepanes":
              break;
            case "frozennosplit":
              break;
            case "splithorizontal":
            case "splitvertical":
              break;
            case "donotdisplaygridlines":
              break;
            case "activerow":
              break;
            case "activecol":
              break;
            case "toprowbottompane":
              break;
            case "leftcolumnrightpane":
              break;
            case "unsynced":
              break;
            case "print":
              break;
            case "printerrors":
              break;
            case "panes":
              break;
            case "scale":
              break;
            case "pane":
              break;
            case "number":
              break;
            case "layout":
              break;
            case "pagesetup":
              break;
            case "selected":
              break;
            case "protectobjects":
              break;
            case "enableselection":
              break;
            case "protectscenarios":
              break;
            case "validprinterinfo":
              break;
            case "horizontalresolution":
              break;
            case "verticalresolution":
              break;
            case "numberofcopies":
              break;
            case "activepane":
              break;
            case "toprowvisible":
              break;
            case "leftcolumnvisible":
              break;
            case "fittopage":
              break;
            case "rangeselection":
              break;
            case "papersizeindex":
              break;
            case "pagelayoutzoom":
              break;
            case "pagebreakzoom":
              break;
            case "filteron":
              break;
            case "fitwidth":
              break;
            case "fitheight":
              break;
            case "commentslayout":
              break;
            case "zoom":
              break;
            case "lefttoright":
              break;
            case "gridlines":
              break;
            case "allowsort":
              break;
            case "allowfilter":
              break;
            case "allowinsertrows":
              break;
            case "allowdeleterows":
              break;
            case "allowinsertcols":
              break;
            case "allowdeletecols":
              break;
            case "allowinserthyperlinks":
              break;
            case "allowformatcells":
              break;
            case "allowsizecols":
              break;
            case "allowsizerows":
              break;
            case "nosummaryrowsbelowdetail":
              if (!cursheet["!outline"]) cursheet["!outline"] = {};
              cursheet["!outline"].above = true;
              break;
            case "tabcolorindex":
              break;
            case "donotdisplayheadings":
              break;
            case "showpagelayoutzoom":
              break;
            case "nosummarycolumnsrightdetail":
              if (!cursheet["!outline"]) cursheet["!outline"] = {};
              cursheet["!outline"].left = true;
              break;
            case "blackandwhite":
              break;
            case "donotdisplayzeros":
              break;
            case "displaypagebreak":
              break;
            case "rowcolheadings":
              break;
            case "donotdisplayoutline":
              break;
            case "noorientation":
              break;
            case "allowusepivottables":
              break;
            case "zeroheight":
              break;
            case "viewablerange":
              break;
            case "selection":
              break;
            case "protectcontents":
              break;
            default:
              seen = false;
          }
          break;
        case "pivottable":
        case "pivotcache":
          switch (Rn[3]) {
            case "immediateitemsondrop":
              break;
            case "showpagemultipleitemlabel":
              break;
            case "compactrowindent":
              break;
            case "location":
              break;
            case "pivotfield":
              break;
            case "orientation":
              break;
            case "layoutform":
              break;
            case "layoutsubtotallocation":
              break;
            case "layoutcompactrow":
              break;
            case "position":
              break;
            case "pivotitem":
              break;
            case "datatype":
              break;
            case "datafield":
              break;
            case "sourcename":
              break;
            case "parentfield":
              break;
            case "ptlineitems":
              break;
            case "ptlineitem":
              break;
            case "countofsameitems":
              break;
            case "item":
              break;
            case "itemtype":
              break;
            case "ptsource":
              break;
            case "cacheindex":
              break;
            case "consolidationreference":
              break;
            case "filename":
              break;
            case "reference":
              break;
            case "nocolumngrand":
              break;
            case "norowgrand":
              break;
            case "blanklineafteritems":
              break;
            case "hidden":
              break;
            case "subtotal":
              break;
            case "basefield":
              break;
            case "mapchilditems":
              break;
            case "function":
              break;
            case "refreshonfileopen":
              break;
            case "printsettitles":
              break;
            case "mergelabels":
              break;
            case "defaultversion":
              break;
            case "refreshname":
              break;
            case "refreshdate":
              break;
            case "refreshdatecopy":
              break;
            case "versionlastrefresh":
              break;
            case "versionlastupdate":
              break;
            case "versionupdateablemin":
              break;
            case "versionrefreshablemin":
              break;
            case "calculation":
              break;
            default:
              seen = false;
          }
          break;
        case "pagebreaks":
          switch (Rn[3]) {
            case "colbreaks":
              break;
            case "colbreak":
              break;
            case "rowbreaks":
              break;
            case "rowbreak":
              break;
            case "colstart":
              break;
            case "colend":
              break;
            case "rowend":
              break;
            default:
              seen = false;
          }
          break;
        case "autofilter":
          switch (Rn[3]) {
            case "autofiltercolumn":
              break;
            case "autofiltercondition":
              break;
            case "autofilterand":
              break;
            case "autofilteror":
              break;
            default:
              seen = false;
          }
          break;
        case "querytable":
          switch (Rn[3]) {
            case "id":
              break;
            case "autoformatfont":
              break;
            case "autoformatpattern":
              break;
            case "querysource":
              break;
            case "querytype":
              break;
            case "enableredirections":
              break;
            case "refreshedinxl9":
              break;
            case "urlstring":
              break;
            case "htmltables":
              break;
            case "connection":
              break;
            case "commandtext":
              break;
            case "refreshinfo":
              break;
            case "notitles":
              break;
            case "nextid":
              break;
            case "columninfo":
              break;
            case "overwritecells":
              break;
            case "donotpromptforfile":
              break;
            case "textwizardsettings":
              break;
            case "source":
              break;
            case "number":
              break;
            case "decimal":
              break;
            case "thousandseparator":
              break;
            case "trailingminusnumbers":
              break;
            case "formatsettings":
              break;
            case "fieldtype":
              break;
            case "delimiters":
              break;
            case "tab":
              break;
            case "comma":
              break;
            case "autoformatname":
              break;
            case "versionlastedit":
              break;
            case "versionlastrefresh":
              break;
            default:
              seen = false;
          }
          break;
        case "datavalidation":
          switch (Rn[3]) {
            case "range":
              break;
            case "type":
              break;
            case "min":
              break;
            case "max":
              break;
            case "sort":
              break;
            case "descending":
              break;
            case "order":
              break;
            case "casesensitive":
              break;
            case "value":
              break;
            case "errorstyle":
              break;
            case "errormessage":
              break;
            case "errortitle":
              break;
            case "inputmessage":
              break;
            case "inputtitle":
              break;
            case "combohide":
              break;
            case "inputhide":
              break;
            case "condition":
              break;
            case "qualifier":
              break;
            case "useblank":
              break;
            case "value1":
              break;
            case "value2":
              break;
            case "format":
              break;
            case "cellrangelist":
              break;
            default:
              seen = false;
          }
          break;
        case "sorting":
        case "conditionalformatting":
          switch (Rn[3]) {
            case "range":
              break;
            case "type":
              break;
            case "min":
              break;
            case "max":
              break;
            case "sort":
              break;
            case "descending":
              break;
            case "order":
              break;
            case "casesensitive":
              break;
            case "value":
              break;
            case "errorstyle":
              break;
            case "errormessage":
              break;
            case "errortitle":
              break;
            case "cellrangelist":
              break;
            case "inputmessage":
              break;
            case "inputtitle":
              break;
            case "combohide":
              break;
            case "inputhide":
              break;
            case "condition":
              break;
            case "qualifier":
              break;
            case "useblank":
              break;
            case "value1":
              break;
            case "value2":
              break;
            case "format":
              break;
            default:
              seen = false;
          }
          break;
        case "mapinfo":
        case "schema":
        case "data":
          switch (Rn[3]) {
            case "map":
              break;
            case "entry":
              break;
            case "range":
              break;
            case "xpath":
              break;
            case "field":
              break;
            case "xsdtype":
              break;
            case "filteron":
              break;
            case "aggregate":
              break;
            case "elementtype":
              break;
            case "attributetype":
              break;
            case "schema":
            case "element":
            case "complextype":
            case "datatype":
            case "all":
            case "attribute":
            case "extends":
              break;
            case "row":
              break;
            default:
              seen = false;
          }
          break;
        case "smarttags":
          break;
        default:
          seen = false;
          break;
      }
      if (seen) break;
      if (Rn[3].match(/!\[CDATA/)) break;
      if (!state[state.length - 1][1]) throw "Unrecognized tag: " + Rn[3] + "|" + state.join("|");
      if (state[state.length - 1][0] === /*'CustomDocumentProperties'*/
      "customdocumentproperties") {
        if (Rn[0].slice(-2) === "/>") break;
        else if (Rn[1] === "/") xlml_set_custprop(Custprops, raw_Rn3, cp, str.slice(pidx, Rn.index));
        else {
          cp = Rn;
          pidx = Rn.index + Rn[0].length;
        }
        break;
      }
      if (opts.WTF) throw "Unrecognized tag: " + Rn[3] + "|" + state.join("|");
  }
  var out = {};
  if (!opts.bookSheets && !opts.bookProps) out.Sheets = sheets;
  out.SheetNames = sheetnames;
  out.Workbook = Workbook;
  out.SSF = dup(table_fmt);
  out.Props = Props;
  out.Custprops = Custprops;
  return out;
}
function parse_xlml(data, opts) {
  fix_read_opts(opts = opts || {});
  switch (opts.type || "base64") {
    case "base64":
      return parse_xlml_xml(Base64_decode(data), opts);
    case "binary":
    case "buffer":
    case "file":
      return parse_xlml_xml(data, opts);
    case "array":
      return parse_xlml_xml(a2s(data), opts);
  }
}
function parse_compobj(obj) {
  var v2 = {};
  var o = obj.content;
  o.l = 28;
  v2.AnsiUserType = o.read_shift(0, "lpstr-ansi");
  v2.AnsiClipboardFormat = parse_ClipboardFormatOrAnsiString(o);
  if (o.length - o.l <= 4) return v2;
  var m2 = o.read_shift(4);
  if (m2 == 0 || m2 > 40) return v2;
  o.l -= 4;
  v2.Reserved1 = o.read_shift(0, "lpstr-ansi");
  if (o.length - o.l <= 4) return v2;
  m2 = o.read_shift(4);
  if (m2 !== 1907505652) return v2;
  v2.UnicodeClipboardFormat = parse_ClipboardFormatOrUnicodeString(o);
  m2 = o.read_shift(4);
  if (m2 == 0 || m2 > 40) return v2;
  o.l -= 4;
  v2.Reserved2 = o.read_shift(0, "lpwstr");
}
var CONTINUE_RT = [60, 1084, 2066, 2165, 2175];
function slurp(RecordType, R2, blob, length, opts) {
  var l2 = length;
  var bufs = [];
  var d = blob.slice(blob.l, blob.l + l2);
  if (opts && opts.enc && opts.enc.insitu && d.length > 0) switch (RecordType) {
    case 9:
    case 521:
    case 1033:
    case 2057:
    case 47:
    case 405:
    case 225:
    case 406:
    case 312:
    case 404:
    case 10:
      break;
    case 133:
      break;
    default:
      opts.enc.insitu(d);
  }
  bufs.push(d);
  blob.l += l2;
  var nextrt = __readUInt16LE(blob, blob.l), next = XLSRecordEnum[nextrt];
  var start = 0;
  while (next != null && CONTINUE_RT.indexOf(nextrt) > -1) {
    l2 = __readUInt16LE(blob, blob.l + 2);
    start = blob.l + 4;
    if (nextrt == 2066) start += 4;
    else if (nextrt == 2165 || nextrt == 2175) {
      start += 12;
    }
    d = blob.slice(start, blob.l + 4 + l2);
    bufs.push(d);
    blob.l += 4 + l2;
    next = XLSRecordEnum[nextrt = __readUInt16LE(blob, blob.l)];
  }
  var b = bconcat(bufs);
  prep_blob(b, 0);
  var ll2 = 0;
  b.lens = [];
  for (var j = 0; j < bufs.length; ++j) {
    b.lens.push(ll2);
    ll2 += bufs[j].length;
  }
  if (b.length < length) throw "XLS Record 0x" + RecordType.toString(16) + " Truncated: " + b.length + " < " + length;
  return R2.f(b, b.length, opts);
}
function safe_format_xf(p2, opts, date1904) {
  if (p2.t === "z") return;
  if (!p2.XF) return;
  var fmtid = 0;
  try {
    fmtid = p2.z || p2.XF.numFmtId || 0;
    if (opts.cellNF) p2.z = table_fmt[fmtid];
  } catch (e) {
    if (opts.WTF) throw e;
  }
  if (!opts || opts.cellText !== false) try {
    if (p2.t === "e") {
      p2.w = p2.w || BErr[p2.v];
    } else if (fmtid === 0 || fmtid == "General") {
      if (p2.t === "n") {
        if ((p2.v | 0) === p2.v) p2.w = p2.v.toString(10);
        else p2.w = SSF_general_num(p2.v);
      } else p2.w = SSF_general(p2.v);
    } else p2.w = SSF_format(fmtid, p2.v, { date1904: !!date1904, dateNF: opts && opts.dateNF });
  } catch (e) {
    if (opts.WTF) throw e;
  }
  if (opts.cellDates && fmtid && p2.t == "n" && fmt_is_date(table_fmt[fmtid] || String(fmtid))) {
    var _d = SSF_parse_date_code(p2.v);
    if (_d) {
      p2.t = "d";
      p2.v = new Date(_d.y, _d.m - 1, _d.d, _d.H, _d.M, _d.S, _d.u);
    }
  }
}
function make_cell(val, ixfe, t2) {
  return { v: val, ixfe, t: t2 };
}
function parse_workbook(blob, options) {
  var wb2 = { opts: {} };
  var Sheets = {};
  var out = options.dense ? [] : {};
  var Directory = {};
  var range = {};
  var last_formula = null;
  var sst = [];
  var cur_sheet = "";
  var Preamble = {};
  var lastcell, last_cell = "", cc2, cmnt, rngC, rngR;
  var sharedf = {};
  var arrayf = [];
  var temp_val;
  var country;
  var XFs = [];
  var palette = [];
  var Workbook = { Sheets: [], WBProps: { date1904: false }, Views: [{}] }, wsprops = {};
  var get_rgb = function getrgb(icv) {
    if (icv < 8) return XLSIcv[icv];
    if (icv < 64) return palette[icv - 8] || XLSIcv[icv];
    return XLSIcv[icv];
  };
  var process_cell_style = function pcs(cell, line, options2) {
    var xfd = line.XF.data;
    if (!xfd || !xfd.patternType || !options2 || !options2.cellStyles) return;
    line.s = {};
    line.s.patternType = xfd.patternType;
    var t2;
    if (t2 = rgb2Hex(get_rgb(xfd.icvFore))) {
      line.s.fgColor = { rgb: t2 };
    }
    if (t2 = rgb2Hex(get_rgb(xfd.icvBack))) {
      line.s.bgColor = { rgb: t2 };
    }
  };
  var addcell = function addcell2(cell, line, options2) {
    if (file_depth > 1) return;
    if (options2.sheetRows && cell.r >= options2.sheetRows) return;
    if (options2.cellStyles && line.XF && line.XF.data) process_cell_style(cell, line, options2);
    delete line.ixfe;
    delete line.XF;
    lastcell = cell;
    last_cell = encode_cell(cell);
    if (!range || !range.s || !range.e) range = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
    if (cell.r < range.s.r) range.s.r = cell.r;
    if (cell.c < range.s.c) range.s.c = cell.c;
    if (cell.r + 1 > range.e.r) range.e.r = cell.r + 1;
    if (cell.c + 1 > range.e.c) range.e.c = cell.c + 1;
    if (options2.cellFormula && line.f) {
      for (var afi = 0; afi < arrayf.length; ++afi) {
        if (arrayf[afi][0].s.c > cell.c || arrayf[afi][0].s.r > cell.r) continue;
        if (arrayf[afi][0].e.c < cell.c || arrayf[afi][0].e.r < cell.r) continue;
        line.F = encode_range(arrayf[afi][0]);
        if (arrayf[afi][0].s.c != cell.c || arrayf[afi][0].s.r != cell.r) delete line.f;
        if (line.f) line.f = "" + stringify_formula(arrayf[afi][1], range, cell, supbooks, opts);
        break;
      }
    }
    {
      if (options2.dense) {
        if (!out[cell.r]) out[cell.r] = [];
        out[cell.r][cell.c] = line;
      } else out[last_cell] = line;
    }
  };
  var opts = {
    enc: false,
    // encrypted
    sbcch: 0,
    // cch in the preceding SupBook
    snames: [],
    // sheetnames
    sharedf,
    // shared formulae by address
    arrayf,
    // array formulae array
    rrtabid: [],
    // RRTabId
    lastuser: "",
    // Last User from WriteAccess
    biff: 8,
    // BIFF version
    codepage: 0,
    // CP from CodePage record
    winlocked: 0,
    // fLockWn from WinProtect
    cellStyles: !!options && !!options.cellStyles,
    WTF: !!options && !!options.wtf
  };
  if (options.password) opts.password = options.password;
  var themes;
  var merges = [];
  var objects = [];
  var colinfo = [], rowinfo = [];
  var seencol = false;
  var supbooks = [];
  supbooks.SheetNames = opts.snames;
  supbooks.sharedf = opts.sharedf;
  supbooks.arrayf = opts.arrayf;
  supbooks.names = [];
  supbooks.XTI = [];
  var last_RT = 0;
  var file_depth = 0;
  var BIFF2Fmt = 0, BIFF2FmtTable = [];
  var FilterDatabases = [];
  var last_lbl;
  opts.codepage = 1200;
  set_cp(1200);
  var seen_codepage = false;
  while (blob.l < blob.length - 1) {
    var s = blob.l;
    var RecordType = blob.read_shift(2);
    if (RecordType === 0 && last_RT === 10) break;
    var length = blob.l === blob.length ? 0 : blob.read_shift(2);
    var R2 = XLSRecordEnum[RecordType];
    if (R2 && R2.f) {
      if (options.bookSheets) {
        if (last_RT === 133 && RecordType !== 133) break;
      }
      last_RT = RecordType;
      if (R2.r === 2 || R2.r == 12) {
        var rt = blob.read_shift(2);
        length -= 2;
        if (!opts.enc && rt !== RecordType && ((rt & 255) << 8 | rt >> 8) !== RecordType) throw new Error("rt mismatch: " + rt + "!=" + RecordType);
        if (R2.r == 12) {
          blob.l += 10;
          length -= 10;
        }
      }
      var val = {};
      if (RecordType === 10) val = /*::(*/
      R2.f(blob, length, opts);
      else val = /*::(*/
      slurp(RecordType, R2, blob, length, opts);
      if (file_depth == 0 && [9, 521, 1033, 2057].indexOf(last_RT) === -1) continue;
      switch (RecordType) {
        case 34:
          wb2.opts.Date1904 = Workbook.WBProps.date1904 = val;
          break;
        case 134:
          wb2.opts.WriteProtect = true;
          break;
        case 47:
          if (!opts.enc) blob.l = 0;
          opts.enc = val;
          if (!options.password) throw new Error("File is password-protected");
          if (val.valid == null) throw new Error("Encryption scheme unsupported");
          if (!val.valid) throw new Error("Password is incorrect");
          break;
        case 92:
          opts.lastuser = val;
          break;
        case 66:
          var cpval = Number(val);
          switch (cpval) {
            case 21010:
              cpval = 1200;
              break;
            case 32768:
              cpval = 1e4;
              break;
            case 32769:
              cpval = 1252;
              break;
          }
          set_cp(opts.codepage = cpval);
          seen_codepage = true;
          break;
        case 317:
          opts.rrtabid = val;
          break;
        case 25:
          opts.winlocked = val;
          break;
        case 439:
          wb2.opts["RefreshAll"] = val;
          break;
        case 12:
          wb2.opts["CalcCount"] = val;
          break;
        case 16:
          wb2.opts["CalcDelta"] = val;
          break;
        case 17:
          wb2.opts["CalcIter"] = val;
          break;
        case 13:
          wb2.opts["CalcMode"] = val;
          break;
        case 14:
          wb2.opts["CalcPrecision"] = val;
          break;
        case 95:
          wb2.opts["CalcSaveRecalc"] = val;
          break;
        case 15:
          opts.CalcRefMode = val;
          break;
        case 2211:
          wb2.opts.FullCalc = val;
          break;
        case 129:
          if (val.fDialog) out["!type"] = "dialog";
          if (!val.fBelow) (out["!outline"] || (out["!outline"] = {})).above = true;
          if (!val.fRight) (out["!outline"] || (out["!outline"] = {})).left = true;
          break;
        case 224:
          XFs.push(val);
          break;
        case 430:
          supbooks.push([val]);
          supbooks[supbooks.length - 1].XTI = [];
          break;
        case 35:
        case 547:
          supbooks[supbooks.length - 1].push(val);
          break;
        case 24:
        case 536:
          last_lbl = {
            Name: val.Name,
            Ref: stringify_formula(val.rgce, range, null, supbooks, opts)
          };
          if (val.itab > 0) last_lbl.Sheet = val.itab - 1;
          supbooks.names.push(last_lbl);
          if (!supbooks[0]) {
            supbooks[0] = [];
            supbooks[0].XTI = [];
          }
          supbooks[supbooks.length - 1].push(val);
          if (val.Name == "_xlnm._FilterDatabase" && val.itab > 0) {
            if (val.rgce && val.rgce[0] && val.rgce[0][0] && val.rgce[0][0][0] == "PtgArea3d")
              FilterDatabases[val.itab - 1] = { ref: encode_range(val.rgce[0][0][1][2]) };
          }
          break;
        case 22:
          opts.ExternCount = val;
          break;
        case 23:
          if (supbooks.length == 0) {
            supbooks[0] = [];
            supbooks[0].XTI = [];
          }
          supbooks[supbooks.length - 1].XTI = supbooks[supbooks.length - 1].XTI.concat(val);
          supbooks.XTI = supbooks.XTI.concat(val);
          break;
        case 2196:
          if (opts.biff < 8) break;
          if (last_lbl != null) last_lbl.Comment = val[1];
          break;
        case 18:
          out["!protect"] = val;
          break;
        case 19:
          if (val !== 0 && opts.WTF) console.error("Password verifier: " + val);
          break;
        case 133:
          {
            Directory[val.pos] = val;
            opts.snames.push(val.name);
          }
          break;
        case 10:
          {
            if (--file_depth) break;
            if (range.e) {
              if (range.e.r > 0 && range.e.c > 0) {
                range.e.r--;
                range.e.c--;
                out["!ref"] = encode_range(range);
                if (options.sheetRows && options.sheetRows <= range.e.r) {
                  var tmpri = range.e.r;
                  range.e.r = options.sheetRows - 1;
                  out["!fullref"] = out["!ref"];
                  out["!ref"] = encode_range(range);
                  range.e.r = tmpri;
                }
                range.e.r++;
                range.e.c++;
              }
              if (merges.length > 0) out["!merges"] = merges;
              if (objects.length > 0) out["!objects"] = objects;
              if (colinfo.length > 0) out["!cols"] = colinfo;
              if (rowinfo.length > 0) out["!rows"] = rowinfo;
              Workbook.Sheets.push(wsprops);
            }
            if (cur_sheet === "") Preamble = out;
            else Sheets[cur_sheet] = out;
            out = options.dense ? [] : {};
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (opts.biff === 8) opts.biff = {
              /*::[*/
              9: 2,
              /*::[*/
              521: 3,
              /*::[*/
              1033: 4
            }[RecordType] || {
              /*::[*/
              512: 2,
              /*::[*/
              768: 3,
              /*::[*/
              1024: 4,
              /*::[*/
              1280: 5,
              /*::[*/
              1536: 8,
              /*::[*/
              2: 2,
              /*::[*/
              7: 2
            }[val.BIFFVer] || 8;
            opts.biffguess = val.BIFFVer == 0;
            if (val.BIFFVer == 0 && val.dt == 4096) {
              opts.biff = 5;
              seen_codepage = true;
              set_cp(opts.codepage = 28591);
            }
            if (opts.biff == 8 && val.BIFFVer == 0 && val.dt == 16) opts.biff = 2;
            if (file_depth++) break;
            out = options.dense ? [] : {};
            if (opts.biff < 8 && !seen_codepage) {
              seen_codepage = true;
              set_cp(opts.codepage = options.codepage || 1252);
            }
            if (opts.biff < 5 || val.BIFFVer == 0 && val.dt == 4096) {
              if (cur_sheet === "") cur_sheet = "Sheet1";
              range = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var fakebs8 = { pos: blob.l - length, name: cur_sheet };
              Directory[fakebs8.pos] = fakebs8;
              opts.snames.push(cur_sheet);
            } else cur_sheet = (Directory[s] || { name: "" }).name;
            if (val.dt == 32) out["!type"] = "chart";
            if (val.dt == 64) out["!type"] = "macro";
            merges = [];
            objects = [];
            opts.arrayf = arrayf = [];
            colinfo = [];
            rowinfo = [];
            seencol = false;
            wsprops = { Hidden: (Directory[s] || { hs: 0 }).hs, name: cur_sheet };
          }
          break;
        case 515:
        case 3:
        case 2:
          {
            if (out["!type"] == "chart") {
              if (options.dense ? (out[val.r] || [])[val.c] : out[encode_cell({ c: val.c, r: val.r })]) ++val.c;
            }
            temp_val = { ixfe: val.ixfe, XF: XFs[val.ixfe] || {}, v: val.val, t: "n" };
            if (BIFF2Fmt > 0) temp_val.z = BIFF2FmtTable[temp_val.ixfe >> 8 & 63];
            safe_format_xf(temp_val, options, wb2.opts.Date1904);
            addcell({ c: val.c, r: val.r }, temp_val, options);
          }
          break;
        case 5:
        case 517:
          {
            temp_val = { ixfe: val.ixfe, XF: XFs[val.ixfe], v: val.val, t: val.t };
            if (BIFF2Fmt > 0) temp_val.z = BIFF2FmtTable[temp_val.ixfe >> 8 & 63];
            safe_format_xf(temp_val, options, wb2.opts.Date1904);
            addcell({ c: val.c, r: val.r }, temp_val, options);
          }
          break;
        case 638:
          {
            temp_val = { ixfe: val.ixfe, XF: XFs[val.ixfe], v: val.rknum, t: "n" };
            if (BIFF2Fmt > 0) temp_val.z = BIFF2FmtTable[temp_val.ixfe >> 8 & 63];
            safe_format_xf(temp_val, options, wb2.opts.Date1904);
            addcell({ c: val.c, r: val.r }, temp_val, options);
          }
          break;
        case 189:
          {
            for (var j = val.c; j <= val.C; ++j) {
              var ixfe = val.rkrec[j - val.c][0];
              temp_val = { ixfe, XF: XFs[ixfe], v: val.rkrec[j - val.c][1], t: "n" };
              if (BIFF2Fmt > 0) temp_val.z = BIFF2FmtTable[temp_val.ixfe >> 8 & 63];
              safe_format_xf(temp_val, options, wb2.opts.Date1904);
              addcell({ c: j, r: val.r }, temp_val, options);
            }
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (val.val == "String") {
              last_formula = val;
              break;
            }
            temp_val = make_cell(val.val, val.cell.ixfe, val.tt);
            temp_val.XF = XFs[temp_val.ixfe];
            if (options.cellFormula) {
              var _f = val.formula;
              if (_f && _f[0] && _f[0][0] && _f[0][0][0] == "PtgExp") {
                var _fr = _f[0][0][1][0], _fc = _f[0][0][1][1];
                var _fe = encode_cell({ r: _fr, c: _fc });
                if (sharedf[_fe]) temp_val.f = "" + stringify_formula(val.formula, range, val.cell, supbooks, opts);
                else temp_val.F = ((options.dense ? (out[_fr] || [])[_fc] : out[_fe]) || {}).F;
              } else temp_val.f = "" + stringify_formula(val.formula, range, val.cell, supbooks, opts);
            }
            if (BIFF2Fmt > 0) temp_val.z = BIFF2FmtTable[temp_val.ixfe >> 8 & 63];
            safe_format_xf(temp_val, options, wb2.opts.Date1904);
            addcell(val.cell, temp_val, options);
            last_formula = val;
          }
          break;
        case 7:
        case 519:
          {
            if (last_formula) {
              last_formula.val = val;
              temp_val = make_cell(val, last_formula.cell.ixfe, "s");
              temp_val.XF = XFs[temp_val.ixfe];
              if (options.cellFormula) {
                temp_val.f = "" + stringify_formula(last_formula.formula, range, last_formula.cell, supbooks, opts);
              }
              if (BIFF2Fmt > 0) temp_val.z = BIFF2FmtTable[temp_val.ixfe >> 8 & 63];
              safe_format_xf(temp_val, options, wb2.opts.Date1904);
              addcell(last_formula.cell, temp_val, options);
              last_formula = null;
            } else throw new Error("String record expects Formula");
          }
          break;
        case 33:
        case 545:
          {
            arrayf.push(val);
            var _arraystart = encode_cell(val[0].s);
            cc2 = options.dense ? (out[val[0].s.r] || [])[val[0].s.c] : out[_arraystart];
            if (options.cellFormula && cc2) {
              if (!last_formula) break;
              if (!_arraystart || !cc2) break;
              cc2.f = "" + stringify_formula(val[1], range, val[0], supbooks, opts);
              cc2.F = encode_range(val[0]);
            }
          }
          break;
        case 1212:
          {
            if (!options.cellFormula) break;
            if (last_cell) {
              if (!last_formula) break;
              sharedf[encode_cell(last_formula.cell)] = val[0];
              cc2 = options.dense ? (out[last_formula.cell.r] || [])[last_formula.cell.c] : out[encode_cell(last_formula.cell)];
              (cc2 || {}).f = "" + stringify_formula(val[0], range, lastcell, supbooks, opts);
            }
          }
          break;
        case 253:
          temp_val = make_cell(sst[val.isst].t, val.ixfe, "s");
          if (sst[val.isst].h) temp_val.h = sst[val.isst].h;
          temp_val.XF = XFs[temp_val.ixfe];
          if (BIFF2Fmt > 0) temp_val.z = BIFF2FmtTable[temp_val.ixfe >> 8 & 63];
          safe_format_xf(temp_val, options, wb2.opts.Date1904);
          addcell({ c: val.c, r: val.r }, temp_val, options);
          break;
        case 513:
          if (options.sheetStubs) {
            temp_val = { ixfe: val.ixfe, XF: XFs[val.ixfe], t: "z" };
            if (BIFF2Fmt > 0) temp_val.z = BIFF2FmtTable[temp_val.ixfe >> 8 & 63];
            safe_format_xf(temp_val, options, wb2.opts.Date1904);
            addcell({ c: val.c, r: val.r }, temp_val, options);
          }
          break;
        case 190:
          if (options.sheetStubs) {
            for (var _j = val.c; _j <= val.C; ++_j) {
              var _ixfe = val.ixfe[_j - val.c];
              temp_val = { ixfe: _ixfe, XF: XFs[_ixfe], t: "z" };
              if (BIFF2Fmt > 0) temp_val.z = BIFF2FmtTable[temp_val.ixfe >> 8 & 63];
              safe_format_xf(temp_val, options, wb2.opts.Date1904);
              addcell({ c: _j, r: val.r }, temp_val, options);
            }
          }
          break;
        case 214:
        case 516:
        case 4:
          temp_val = make_cell(val.val, val.ixfe, "s");
          temp_val.XF = XFs[temp_val.ixfe];
          if (BIFF2Fmt > 0) temp_val.z = BIFF2FmtTable[temp_val.ixfe >> 8 & 63];
          safe_format_xf(temp_val, options, wb2.opts.Date1904);
          addcell({ c: val.c, r: val.r }, temp_val, options);
          break;
        case 0:
        case 512:
          {
            if (file_depth === 1) range = val;
          }
          break;
        case 252:
          {
            sst = val;
          }
          break;
        case 1054:
          {
            if (opts.biff == 4) {
              BIFF2FmtTable[BIFF2Fmt++] = val[1];
              for (var b4idx = 0; b4idx < BIFF2Fmt + 163; ++b4idx) if (table_fmt[b4idx] == val[1]) break;
              if (b4idx >= 163) SSF_load(val[1], BIFF2Fmt + 163);
            } else SSF_load(val[1], val[0]);
          }
          break;
        case 30:
          {
            BIFF2FmtTable[BIFF2Fmt++] = val;
            for (var b2idx = 0; b2idx < BIFF2Fmt + 163; ++b2idx) if (table_fmt[b2idx] == val) break;
            if (b2idx >= 163) SSF_load(val, BIFF2Fmt + 163);
          }
          break;
        case 229:
          merges = merges.concat(val);
          break;
        case 93:
          objects[val.cmo[0]] = opts.lastobj = val;
          break;
        case 438:
          opts.lastobj.TxO = val;
          break;
        case 127:
          opts.lastobj.ImData = val;
          break;
        case 440:
          {
            for (rngR = val[0].s.r; rngR <= val[0].e.r; ++rngR)
              for (rngC = val[0].s.c; rngC <= val[0].e.c; ++rngC) {
                cc2 = options.dense ? (out[rngR] || [])[rngC] : out[encode_cell({ c: rngC, r: rngR })];
                if (cc2) cc2.l = val[1];
              }
          }
          break;
        case 2048:
          {
            for (rngR = val[0].s.r; rngR <= val[0].e.r; ++rngR)
              for (rngC = val[0].s.c; rngC <= val[0].e.c; ++rngC) {
                cc2 = options.dense ? (out[rngR] || [])[rngC] : out[encode_cell({ c: rngC, r: rngR })];
                if (cc2 && cc2.l) cc2.l.Tooltip = val[1];
              }
          }
          break;
        case 28:
          {
            if (opts.biff <= 5 && opts.biff >= 2) break;
            cc2 = options.dense ? (out[val[0].r] || [])[val[0].c] : out[encode_cell(val[0])];
            var noteobj = objects[val[2]];
            if (!cc2) {
              if (options.dense) {
                if (!out[val[0].r]) out[val[0].r] = [];
                cc2 = out[val[0].r][val[0].c] = { t: "z" };
              } else {
                cc2 = out[encode_cell(val[0])] = { t: "z" };
              }
              range.e.r = Math.max(range.e.r, val[0].r);
              range.s.r = Math.min(range.s.r, val[0].r);
              range.e.c = Math.max(range.e.c, val[0].c);
              range.s.c = Math.min(range.s.c, val[0].c);
            }
            if (!cc2.c) cc2.c = [];
            cmnt = { a: val[1], t: noteobj.TxO.t };
            cc2.c.push(cmnt);
          }
          break;
        case 2173:
          update_xfext(XFs[val.ixfe], val.ext);
          break;
        case 125:
          {
            if (!opts.cellStyles) break;
            while (val.e >= val.s) {
              colinfo[val.e--] = { width: val.w / 256, level: val.level || 0, hidden: !!(val.flags & 1) };
              if (!seencol) {
                seencol = true;
                find_mdw_colw(val.w / 256);
              }
              process_col(colinfo[val.e + 1]);
            }
          }
          break;
        case 520:
          {
            var rowobj = {};
            if (val.level != null) {
              rowinfo[val.r] = rowobj;
              rowobj.level = val.level;
            }
            if (val.hidden) {
              rowinfo[val.r] = rowobj;
              rowobj.hidden = true;
            }
            if (val.hpt) {
              rowinfo[val.r] = rowobj;
              rowobj.hpt = val.hpt;
              rowobj.hpx = pt2px(val.hpt);
            }
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          if (!out["!margins"]) default_margins(out["!margins"] = {});
          out["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[RecordType]] = val;
          break;
        case 161:
          if (!out["!margins"]) default_margins(out["!margins"] = {});
          out["!margins"].header = val.header;
          out["!margins"].footer = val.footer;
          break;
        case 574:
          if (val.RTL) Workbook.Views[0].RTL = true;
          break;
        case 146:
          palette = val;
          break;
        case 2198:
          themes = val;
          break;
        case 140:
          country = val;
          break;
        case 442:
          {
            if (!cur_sheet) Workbook.WBProps.CodeName = val || "ThisWorkbook";
            else wsprops.CodeName = val || wsprops.name;
          }
          break;
      }
    } else {
      if (!R2) console.error("Missing Info for XLS Record 0x" + RecordType.toString(16));
      blob.l += length;
    }
  }
  wb2.SheetNames = keys(Directory).sort(function(a, b) {
    return Number(a) - Number(b);
  }).map(function(x2) {
    return Directory[x2].name;
  });
  if (!options.bookSheets) wb2.Sheets = Sheets;
  if (!wb2.SheetNames.length && Preamble["!ref"]) {
    wb2.SheetNames.push("Sheet1");
    if (wb2.Sheets) wb2.Sheets["Sheet1"] = Preamble;
  } else wb2.Preamble = Preamble;
  if (wb2.Sheets) FilterDatabases.forEach(function(r2, i) {
    wb2.Sheets[wb2.SheetNames[i]]["!autofilter"] = r2;
  });
  wb2.Strings = sst;
  wb2.SSF = dup(table_fmt);
  if (opts.enc) wb2.Encryption = opts.enc;
  if (themes) wb2.Themes = themes;
  wb2.Metadata = {};
  if (country !== void 0) wb2.Metadata.Country = country;
  if (supbooks.names.length > 0) Workbook.Names = supbooks.names;
  wb2.Workbook = Workbook;
  return wb2;
}
var PSCLSID = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function parse_xls_props(cfb, props, o) {
  var DSI = CFB.find(cfb, "/!DocumentSummaryInformation");
  if (DSI && DSI.size > 0) try {
    var DocSummary = parse_PropertySetStream(DSI, DocSummaryPIDDSI, PSCLSID.DSI);
    for (var d in DocSummary) props[d] = DocSummary[d];
  } catch (e) {
    if (o.WTF) throw e;
  }
  var SI = CFB.find(cfb, "/!SummaryInformation");
  if (SI && SI.size > 0) try {
    var Summary = parse_PropertySetStream(SI, SummaryPIDSI, PSCLSID.SI);
    for (var s in Summary) if (props[s] == null) props[s] = Summary[s];
  } catch (e) {
    if (o.WTF) throw e;
  }
  if (props.HeadingPairs && props.TitlesOfParts) {
    load_props_pairs(props.HeadingPairs, props.TitlesOfParts, props, o);
    delete props.HeadingPairs;
    delete props.TitlesOfParts;
  }
}
function parse_xlscfb(cfb, options) {
  if (!options) options = {};
  fix_read_opts(options);
  reset_cp();
  if (options.codepage) set_ansi(options.codepage);
  var CompObj, WB;
  if (cfb.FullPaths) {
    if (CFB.find(cfb, "/encryption")) throw new Error("File is password-protected");
    CompObj = CFB.find(cfb, "!CompObj");
    WB = CFB.find(cfb, "/Workbook") || CFB.find(cfb, "/Book");
  } else {
    switch (options.type) {
      case "base64":
        cfb = s2a(Base64_decode(cfb));
        break;
      case "binary":
        cfb = s2a(cfb);
        break;
      case "buffer":
        break;
      case "array":
        if (!Array.isArray(cfb)) cfb = Array.prototype.slice.call(cfb);
        break;
    }
    prep_blob(cfb, 0);
    WB = { content: cfb };
  }
  var WorkbookP;
  var _data;
  if (CompObj) parse_compobj(CompObj);
  if (options.bookProps && !options.bookSheets) WorkbookP = {};
  else {
    var T2 = has_buf ? "buffer" : "array";
    if (WB && WB.content) WorkbookP = parse_workbook(WB.content, options);
    else if ((_data = CFB.find(cfb, "PerfectOffice_MAIN")) && _data.content) WorkbookP = WK_.to_workbook(_data.content, (options.type = T2, options));
    else if ((_data = CFB.find(cfb, "NativeContent_MAIN")) && _data.content) WorkbookP = WK_.to_workbook(_data.content, (options.type = T2, options));
    else if ((_data = CFB.find(cfb, "MN0")) && _data.content) throw new Error("Unsupported Works 4 for Mac file");
    else throw new Error("Cannot find Workbook stream");
    if (options.bookVBA && cfb.FullPaths && CFB.find(cfb, "/_VBA_PROJECT_CUR/VBA/dir")) WorkbookP.vbaraw = make_vba_xls(cfb);
  }
  var props = {};
  if (cfb.FullPaths) parse_xls_props(
    /*::((*/
    cfb,
    props,
    options
  );
  WorkbookP.Props = WorkbookP.Custprops = props;
  if (options.bookFiles) WorkbookP.cfb = cfb;
  return WorkbookP;
}
var XLSBRecordEnum = {
  /*::[*/
  0: {
    /* n:"BrtRowHdr", */
    f: parse_BrtRowHdr
  },
  /*::[*/
  1: {
    /* n:"BrtCellBlank", */
    f: parse_BrtCellBlank
  },
  /*::[*/
  2: {
    /* n:"BrtCellRk", */
    f: parse_BrtCellRk
  },
  /*::[*/
  3: {
    /* n:"BrtCellError", */
    f: parse_BrtCellError
  },
  /*::[*/
  4: {
    /* n:"BrtCellBool", */
    f: parse_BrtCellBool
  },
  /*::[*/
  5: {
    /* n:"BrtCellReal", */
    f: parse_BrtCellReal
  },
  /*::[*/
  6: {
    /* n:"BrtCellSt", */
    f: parse_BrtCellSt
  },
  /*::[*/
  7: {
    /* n:"BrtCellIsst", */
    f: parse_BrtCellIsst
  },
  /*::[*/
  8: {
    /* n:"BrtFmlaString", */
    f: parse_BrtFmlaString
  },
  /*::[*/
  9: {
    /* n:"BrtFmlaNum", */
    f: parse_BrtFmlaNum
  },
  /*::[*/
  10: {
    /* n:"BrtFmlaBool", */
    f: parse_BrtFmlaBool
  },
  /*::[*/
  11: {
    /* n:"BrtFmlaError", */
    f: parse_BrtFmlaError
  },
  /*::[*/
  12: {
    /* n:"BrtShortBlank", */
    f: parse_BrtShortBlank
  },
  /*::[*/
  13: {
    /* n:"BrtShortRk", */
    f: parse_BrtShortRk
  },
  /*::[*/
  14: {
    /* n:"BrtShortError", */
    f: parse_BrtShortError
  },
  /*::[*/
  15: {
    /* n:"BrtShortBool", */
    f: parse_BrtShortBool
  },
  /*::[*/
  16: {
    /* n:"BrtShortReal", */
    f: parse_BrtShortReal
  },
  /*::[*/
  17: {
    /* n:"BrtShortSt", */
    f: parse_BrtShortSt
  },
  /*::[*/
  18: {
    /* n:"BrtShortIsst", */
    f: parse_BrtShortIsst
  },
  /*::[*/
  19: {
    /* n:"BrtSSTItem", */
    f: parse_RichStr
  },
  /*::[*/
  20: {
    /* n:"BrtPCDIMissing" */
  },
  /*::[*/
  21: {
    /* n:"BrtPCDINumber" */
  },
  /*::[*/
  22: {
    /* n:"BrtPCDIBoolean" */
  },
  /*::[*/
  23: {
    /* n:"BrtPCDIError" */
  },
  /*::[*/
  24: {
    /* n:"BrtPCDIString" */
  },
  /*::[*/
  25: {
    /* n:"BrtPCDIDatetime" */
  },
  /*::[*/
  26: {
    /* n:"BrtPCDIIndex" */
  },
  /*::[*/
  27: {
    /* n:"BrtPCDIAMissing" */
  },
  /*::[*/
  28: {
    /* n:"BrtPCDIANumber" */
  },
  /*::[*/
  29: {
    /* n:"BrtPCDIABoolean" */
  },
  /*::[*/
  30: {
    /* n:"BrtPCDIAError" */
  },
  /*::[*/
  31: {
    /* n:"BrtPCDIAString" */
  },
  /*::[*/
  32: {
    /* n:"BrtPCDIADatetime" */
  },
  /*::[*/
  33: {
    /* n:"BrtPCRRecord" */
  },
  /*::[*/
  34: {
    /* n:"BrtPCRRecordDt" */
  },
  /*::[*/
  35: {
    /* n:"BrtFRTBegin", */
    T: 1
  },
  /*::[*/
  36: {
    /* n:"BrtFRTEnd", */
    T: -1
  },
  /*::[*/
  37: {
    /* n:"BrtACBegin", */
    T: 1
  },
  /*::[*/
  38: {
    /* n:"BrtACEnd", */
    T: -1
  },
  /*::[*/
  39: {
    /* n:"BrtName", */
    f: parse_BrtName
  },
  /*::[*/
  40: {
    /* n:"BrtIndexRowBlock" */
  },
  /*::[*/
  42: {
    /* n:"BrtIndexBlock" */
  },
  /*::[*/
  43: {
    /* n:"BrtFont", */
    f: parse_BrtFont
  },
  /*::[*/
  44: {
    /* n:"BrtFmt", */
    f: parse_BrtFmt
  },
  /*::[*/
  45: {
    /* n:"BrtFill", */
    f: parse_BrtFill
  },
  /*::[*/
  46: {
    /* n:"BrtBorder", */
    f: parse_BrtBorder
  },
  /*::[*/
  47: {
    /* n:"BrtXF", */
    f: parse_BrtXF
  },
  /*::[*/
  48: {
    /* n:"BrtStyle" */
  },
  /*::[*/
  49: {
    /* n:"BrtCellMeta", */
    f: parse_Int32LE
  },
  /*::[*/
  50: {
    /* n:"BrtValueMeta" */
  },
  /*::[*/
  51: {
    /* n:"BrtMdb" */
    f: parse_BrtMdb
  },
  /*::[*/
  52: {
    /* n:"BrtBeginFmd", */
    T: 1
  },
  /*::[*/
  53: {
    /* n:"BrtEndFmd", */
    T: -1
  },
  /*::[*/
  54: {
    /* n:"BrtBeginMdx", */
    T: 1
  },
  /*::[*/
  55: {
    /* n:"BrtEndMdx", */
    T: -1
  },
  /*::[*/
  56: {
    /* n:"BrtBeginMdxTuple", */
    T: 1
  },
  /*::[*/
  57: {
    /* n:"BrtEndMdxTuple", */
    T: -1
  },
  /*::[*/
  58: {
    /* n:"BrtMdxMbrIstr" */
  },
  /*::[*/
  59: {
    /* n:"BrtStr" */
  },
  /*::[*/
  60: {
    /* n:"BrtColInfo", */
    f: parse_ColInfo
  },
  /*::[*/
  62: {
    /* n:"BrtCellRString", */
    f: parse_BrtCellRString
  },
  /*::[*/
  63: {
    /* n:"BrtCalcChainItem$", */
    f: parse_BrtCalcChainItem$
  },
  /*::[*/
  64: {
    /* n:"BrtDVal", */
    f: parse_BrtDVal
  },
  /*::[*/
  65: {
    /* n:"BrtSxvcellNum" */
  },
  /*::[*/
  66: {
    /* n:"BrtSxvcellStr" */
  },
  /*::[*/
  67: {
    /* n:"BrtSxvcellBool" */
  },
  /*::[*/
  68: {
    /* n:"BrtSxvcellErr" */
  },
  /*::[*/
  69: {
    /* n:"BrtSxvcellDate" */
  },
  /*::[*/
  70: {
    /* n:"BrtSxvcellNil" */
  },
  /*::[*/
  128: {
    /* n:"BrtFileVersion" */
  },
  /*::[*/
  129: {
    /* n:"BrtBeginSheet", */
    T: 1
  },
  /*::[*/
  130: {
    /* n:"BrtEndSheet", */
    T: -1
  },
  /*::[*/
  131: {
    /* n:"BrtBeginBook", */
    T: 1,
    f: parsenoop,
    p: 0
  },
  /*::[*/
  132: {
    /* n:"BrtEndBook", */
    T: -1
  },
  /*::[*/
  133: {
    /* n:"BrtBeginWsViews", */
    T: 1
  },
  /*::[*/
  134: {
    /* n:"BrtEndWsViews", */
    T: -1
  },
  /*::[*/
  135: {
    /* n:"BrtBeginBookViews", */
    T: 1
  },
  /*::[*/
  136: {
    /* n:"BrtEndBookViews", */
    T: -1
  },
  /*::[*/
  137: {
    /* n:"BrtBeginWsView", */
    T: 1,
    f: parse_BrtBeginWsView
  },
  /*::[*/
  138: {
    /* n:"BrtEndWsView", */
    T: -1
  },
  /*::[*/
  139: {
    /* n:"BrtBeginCsViews", */
    T: 1
  },
  /*::[*/
  140: {
    /* n:"BrtEndCsViews", */
    T: -1
  },
  /*::[*/
  141: {
    /* n:"BrtBeginCsView", */
    T: 1
  },
  /*::[*/
  142: {
    /* n:"BrtEndCsView", */
    T: -1
  },
  /*::[*/
  143: {
    /* n:"BrtBeginBundleShs", */
    T: 1
  },
  /*::[*/
  144: {
    /* n:"BrtEndBundleShs", */
    T: -1
  },
  /*::[*/
  145: {
    /* n:"BrtBeginSheetData", */
    T: 1
  },
  /*::[*/
  146: {
    /* n:"BrtEndSheetData", */
    T: -1
  },
  /*::[*/
  147: {
    /* n:"BrtWsProp", */
    f: parse_BrtWsProp
  },
  /*::[*/
  148: {
    /* n:"BrtWsDim", */
    f: parse_BrtWsDim,
    p: 16
  },
  /*::[*/
  151: {
    /* n:"BrtPane", */
    f: parse_BrtPane
  },
  /*::[*/
  152: {
    /* n:"BrtSel" */
  },
  /*::[*/
  153: {
    /* n:"BrtWbProp", */
    f: parse_BrtWbProp
  },
  /*::[*/
  154: {
    /* n:"BrtWbFactoid" */
  },
  /*::[*/
  155: {
    /* n:"BrtFileRecover" */
  },
  /*::[*/
  156: {
    /* n:"BrtBundleSh", */
    f: parse_BrtBundleSh
  },
  /*::[*/
  157: {
    /* n:"BrtCalcProp" */
  },
  /*::[*/
  158: {
    /* n:"BrtBookView" */
  },
  /*::[*/
  159: {
    /* n:"BrtBeginSst", */
    T: 1,
    f: parse_BrtBeginSst
  },
  /*::[*/
  160: {
    /* n:"BrtEndSst", */
    T: -1
  },
  /*::[*/
  161: {
    /* n:"BrtBeginAFilter", */
    T: 1,
    f: parse_UncheckedRfX
  },
  /*::[*/
  162: {
    /* n:"BrtEndAFilter", */
    T: -1
  },
  /*::[*/
  163: {
    /* n:"BrtBeginFilterColumn", */
    T: 1
  },
  /*::[*/
  164: {
    /* n:"BrtEndFilterColumn", */
    T: -1
  },
  /*::[*/
  165: {
    /* n:"BrtBeginFilters", */
    T: 1
  },
  /*::[*/
  166: {
    /* n:"BrtEndFilters", */
    T: -1
  },
  /*::[*/
  167: {
    /* n:"BrtFilter" */
  },
  /*::[*/
  168: {
    /* n:"BrtColorFilter" */
  },
  /*::[*/
  169: {
    /* n:"BrtIconFilter" */
  },
  /*::[*/
  170: {
    /* n:"BrtTop10Filter" */
  },
  /*::[*/
  171: {
    /* n:"BrtDynamicFilter" */
  },
  /*::[*/
  172: {
    /* n:"BrtBeginCustomFilters", */
    T: 1
  },
  /*::[*/
  173: {
    /* n:"BrtEndCustomFilters", */
    T: -1
  },
  /*::[*/
  174: {
    /* n:"BrtCustomFilter" */
  },
  /*::[*/
  175: {
    /* n:"BrtAFilterDateGroupItem" */
  },
  /*::[*/
  176: {
    /* n:"BrtMergeCell", */
    f: parse_BrtMergeCell
  },
  /*::[*/
  177: {
    /* n:"BrtBeginMergeCells", */
    T: 1
  },
  /*::[*/
  178: {
    /* n:"BrtEndMergeCells", */
    T: -1
  },
  /*::[*/
  179: {
    /* n:"BrtBeginPivotCacheDef", */
    T: 1
  },
  /*::[*/
  180: {
    /* n:"BrtEndPivotCacheDef", */
    T: -1
  },
  /*::[*/
  181: {
    /* n:"BrtBeginPCDFields", */
    T: 1
  },
  /*::[*/
  182: {
    /* n:"BrtEndPCDFields", */
    T: -1
  },
  /*::[*/
  183: {
    /* n:"BrtBeginPCDField", */
    T: 1
  },
  /*::[*/
  184: {
    /* n:"BrtEndPCDField", */
    T: -1
  },
  /*::[*/
  185: {
    /* n:"BrtBeginPCDSource", */
    T: 1
  },
  /*::[*/
  186: {
    /* n:"BrtEndPCDSource", */
    T: -1
  },
  /*::[*/
  187: {
    /* n:"BrtBeginPCDSRange", */
    T: 1
  },
  /*::[*/
  188: {
    /* n:"BrtEndPCDSRange", */
    T: -1
  },
  /*::[*/
  189: {
    /* n:"BrtBeginPCDFAtbl", */
    T: 1
  },
  /*::[*/
  190: {
    /* n:"BrtEndPCDFAtbl", */
    T: -1
  },
  /*::[*/
  191: {
    /* n:"BrtBeginPCDIRun", */
    T: 1
  },
  /*::[*/
  192: {
    /* n:"BrtEndPCDIRun", */
    T: -1
  },
  /*::[*/
  193: {
    /* n:"BrtBeginPivotCacheRecords", */
    T: 1
  },
  /*::[*/
  194: {
    /* n:"BrtEndPivotCacheRecords", */
    T: -1
  },
  /*::[*/
  195: {
    /* n:"BrtBeginPCDHierarchies", */
    T: 1
  },
  /*::[*/
  196: {
    /* n:"BrtEndPCDHierarchies", */
    T: -1
  },
  /*::[*/
  197: {
    /* n:"BrtBeginPCDHierarchy", */
    T: 1
  },
  /*::[*/
  198: {
    /* n:"BrtEndPCDHierarchy", */
    T: -1
  },
  /*::[*/
  199: {
    /* n:"BrtBeginPCDHFieldsUsage", */
    T: 1
  },
  /*::[*/
  200: {
    /* n:"BrtEndPCDHFieldsUsage", */
    T: -1
  },
  /*::[*/
  201: {
    /* n:"BrtBeginExtConnection", */
    T: 1
  },
  /*::[*/
  202: {
    /* n:"BrtEndExtConnection", */
    T: -1
  },
  /*::[*/
  203: {
    /* n:"BrtBeginECDbProps", */
    T: 1
  },
  /*::[*/
  204: {
    /* n:"BrtEndECDbProps", */
    T: -1
  },
  /*::[*/
  205: {
    /* n:"BrtBeginECOlapProps", */
    T: 1
  },
  /*::[*/
  206: {
    /* n:"BrtEndECOlapProps", */
    T: -1
  },
  /*::[*/
  207: {
    /* n:"BrtBeginPCDSConsol", */
    T: 1
  },
  /*::[*/
  208: {
    /* n:"BrtEndPCDSConsol", */
    T: -1
  },
  /*::[*/
  209: {
    /* n:"BrtBeginPCDSCPages", */
    T: 1
  },
  /*::[*/
  210: {
    /* n:"BrtEndPCDSCPages", */
    T: -1
  },
  /*::[*/
  211: {
    /* n:"BrtBeginPCDSCPage", */
    T: 1
  },
  /*::[*/
  212: {
    /* n:"BrtEndPCDSCPage", */
    T: -1
  },
  /*::[*/
  213: {
    /* n:"BrtBeginPCDSCPItem", */
    T: 1
  },
  /*::[*/
  214: {
    /* n:"BrtEndPCDSCPItem", */
    T: -1
  },
  /*::[*/
  215: {
    /* n:"BrtBeginPCDSCSets", */
    T: 1
  },
  /*::[*/
  216: {
    /* n:"BrtEndPCDSCSets", */
    T: -1
  },
  /*::[*/
  217: {
    /* n:"BrtBeginPCDSCSet", */
    T: 1
  },
  /*::[*/
  218: {
    /* n:"BrtEndPCDSCSet", */
    T: -1
  },
  /*::[*/
  219: {
    /* n:"BrtBeginPCDFGroup", */
    T: 1
  },
  /*::[*/
  220: {
    /* n:"BrtEndPCDFGroup", */
    T: -1
  },
  /*::[*/
  221: {
    /* n:"BrtBeginPCDFGItems", */
    T: 1
  },
  /*::[*/
  222: {
    /* n:"BrtEndPCDFGItems", */
    T: -1
  },
  /*::[*/
  223: {
    /* n:"BrtBeginPCDFGRange", */
    T: 1
  },
  /*::[*/
  224: {
    /* n:"BrtEndPCDFGRange", */
    T: -1
  },
  /*::[*/
  225: {
    /* n:"BrtBeginPCDFGDiscrete", */
    T: 1
  },
  /*::[*/
  226: {
    /* n:"BrtEndPCDFGDiscrete", */
    T: -1
  },
  /*::[*/
  227: {
    /* n:"BrtBeginPCDSDTupleCache", */
    T: 1
  },
  /*::[*/
  228: {
    /* n:"BrtEndPCDSDTupleCache", */
    T: -1
  },
  /*::[*/
  229: {
    /* n:"BrtBeginPCDSDTCEntries", */
    T: 1
  },
  /*::[*/
  230: {
    /* n:"BrtEndPCDSDTCEntries", */
    T: -1
  },
  /*::[*/
  231: {
    /* n:"BrtBeginPCDSDTCEMembers", */
    T: 1
  },
  /*::[*/
  232: {
    /* n:"BrtEndPCDSDTCEMembers", */
    T: -1
  },
  /*::[*/
  233: {
    /* n:"BrtBeginPCDSDTCEMember", */
    T: 1
  },
  /*::[*/
  234: {
    /* n:"BrtEndPCDSDTCEMember", */
    T: -1
  },
  /*::[*/
  235: {
    /* n:"BrtBeginPCDSDTCQueries", */
    T: 1
  },
  /*::[*/
  236: {
    /* n:"BrtEndPCDSDTCQueries", */
    T: -1
  },
  /*::[*/
  237: {
    /* n:"BrtBeginPCDSDTCQuery", */
    T: 1
  },
  /*::[*/
  238: {
    /* n:"BrtEndPCDSDTCQuery", */
    T: -1
  },
  /*::[*/
  239: {
    /* n:"BrtBeginPCDSDTCSets", */
    T: 1
  },
  /*::[*/
  240: {
    /* n:"BrtEndPCDSDTCSets", */
    T: -1
  },
  /*::[*/
  241: {
    /* n:"BrtBeginPCDSDTCSet", */
    T: 1
  },
  /*::[*/
  242: {
    /* n:"BrtEndPCDSDTCSet", */
    T: -1
  },
  /*::[*/
  243: {
    /* n:"BrtBeginPCDCalcItems", */
    T: 1
  },
  /*::[*/
  244: {
    /* n:"BrtEndPCDCalcItems", */
    T: -1
  },
  /*::[*/
  245: {
    /* n:"BrtBeginPCDCalcItem", */
    T: 1
  },
  /*::[*/
  246: {
    /* n:"BrtEndPCDCalcItem", */
    T: -1
  },
  /*::[*/
  247: {
    /* n:"BrtBeginPRule", */
    T: 1
  },
  /*::[*/
  248: {
    /* n:"BrtEndPRule", */
    T: -1
  },
  /*::[*/
  249: {
    /* n:"BrtBeginPRFilters", */
    T: 1
  },
  /*::[*/
  250: {
    /* n:"BrtEndPRFilters", */
    T: -1
  },
  /*::[*/
  251: {
    /* n:"BrtBeginPRFilter", */
    T: 1
  },
  /*::[*/
  252: {
    /* n:"BrtEndPRFilter", */
    T: -1
  },
  /*::[*/
  253: {
    /* n:"BrtBeginPNames", */
    T: 1
  },
  /*::[*/
  254: {
    /* n:"BrtEndPNames", */
    T: -1
  },
  /*::[*/
  255: {
    /* n:"BrtBeginPName", */
    T: 1
  },
  /*::[*/
  256: {
    /* n:"BrtEndPName", */
    T: -1
  },
  /*::[*/
  257: {
    /* n:"BrtBeginPNPairs", */
    T: 1
  },
  /*::[*/
  258: {
    /* n:"BrtEndPNPairs", */
    T: -1
  },
  /*::[*/
  259: {
    /* n:"BrtBeginPNPair", */
    T: 1
  },
  /*::[*/
  260: {
    /* n:"BrtEndPNPair", */
    T: -1
  },
  /*::[*/
  261: {
    /* n:"BrtBeginECWebProps", */
    T: 1
  },
  /*::[*/
  262: {
    /* n:"BrtEndECWebProps", */
    T: -1
  },
  /*::[*/
  263: {
    /* n:"BrtBeginEcWpTables", */
    T: 1
  },
  /*::[*/
  264: {
    /* n:"BrtEndECWPTables", */
    T: -1
  },
  /*::[*/
  265: {
    /* n:"BrtBeginECParams", */
    T: 1
  },
  /*::[*/
  266: {
    /* n:"BrtEndECParams", */
    T: -1
  },
  /*::[*/
  267: {
    /* n:"BrtBeginECParam", */
    T: 1
  },
  /*::[*/
  268: {
    /* n:"BrtEndECParam", */
    T: -1
  },
  /*::[*/
  269: {
    /* n:"BrtBeginPCDKPIs", */
    T: 1
  },
  /*::[*/
  270: {
    /* n:"BrtEndPCDKPIs", */
    T: -1
  },
  /*::[*/
  271: {
    /* n:"BrtBeginPCDKPI", */
    T: 1
  },
  /*::[*/
  272: {
    /* n:"BrtEndPCDKPI", */
    T: -1
  },
  /*::[*/
  273: {
    /* n:"BrtBeginDims", */
    T: 1
  },
  /*::[*/
  274: {
    /* n:"BrtEndDims", */
    T: -1
  },
  /*::[*/
  275: {
    /* n:"BrtBeginDim", */
    T: 1
  },
  /*::[*/
  276: {
    /* n:"BrtEndDim", */
    T: -1
  },
  /*::[*/
  277: {
    /* n:"BrtIndexPartEnd" */
  },
  /*::[*/
  278: {
    /* n:"BrtBeginStyleSheet", */
    T: 1
  },
  /*::[*/
  279: {
    /* n:"BrtEndStyleSheet", */
    T: -1
  },
  /*::[*/
  280: {
    /* n:"BrtBeginSXView", */
    T: 1
  },
  /*::[*/
  281: {
    /* n:"BrtEndSXVI", */
    T: -1
  },
  /*::[*/
  282: {
    /* n:"BrtBeginSXVI", */
    T: 1
  },
  /*::[*/
  283: {
    /* n:"BrtBeginSXVIs", */
    T: 1
  },
  /*::[*/
  284: {
    /* n:"BrtEndSXVIs", */
    T: -1
  },
  /*::[*/
  285: {
    /* n:"BrtBeginSXVD", */
    T: 1
  },
  /*::[*/
  286: {
    /* n:"BrtEndSXVD", */
    T: -1
  },
  /*::[*/
  287: {
    /* n:"BrtBeginSXVDs", */
    T: 1
  },
  /*::[*/
  288: {
    /* n:"BrtEndSXVDs", */
    T: -1
  },
  /*::[*/
  289: {
    /* n:"BrtBeginSXPI", */
    T: 1
  },
  /*::[*/
  290: {
    /* n:"BrtEndSXPI", */
    T: -1
  },
  /*::[*/
  291: {
    /* n:"BrtBeginSXPIs", */
    T: 1
  },
  /*::[*/
  292: {
    /* n:"BrtEndSXPIs", */
    T: -1
  },
  /*::[*/
  293: {
    /* n:"BrtBeginSXDI", */
    T: 1
  },
  /*::[*/
  294: {
    /* n:"BrtEndSXDI", */
    T: -1
  },
  /*::[*/
  295: {
    /* n:"BrtBeginSXDIs", */
    T: 1
  },
  /*::[*/
  296: {
    /* n:"BrtEndSXDIs", */
    T: -1
  },
  /*::[*/
  297: {
    /* n:"BrtBeginSXLI", */
    T: 1
  },
  /*::[*/
  298: {
    /* n:"BrtEndSXLI", */
    T: -1
  },
  /*::[*/
  299: {
    /* n:"BrtBeginSXLIRws", */
    T: 1
  },
  /*::[*/
  300: {
    /* n:"BrtEndSXLIRws", */
    T: -1
  },
  /*::[*/
  301: {
    /* n:"BrtBeginSXLICols", */
    T: 1
  },
  /*::[*/
  302: {
    /* n:"BrtEndSXLICols", */
    T: -1
  },
  /*::[*/
  303: {
    /* n:"BrtBeginSXFormat", */
    T: 1
  },
  /*::[*/
  304: {
    /* n:"BrtEndSXFormat", */
    T: -1
  },
  /*::[*/
  305: {
    /* n:"BrtBeginSXFormats", */
    T: 1
  },
  /*::[*/
  306: {
    /* n:"BrtEndSxFormats", */
    T: -1
  },
  /*::[*/
  307: {
    /* n:"BrtBeginSxSelect", */
    T: 1
  },
  /*::[*/
  308: {
    /* n:"BrtEndSxSelect", */
    T: -1
  },
  /*::[*/
  309: {
    /* n:"BrtBeginISXVDRws", */
    T: 1
  },
  /*::[*/
  310: {
    /* n:"BrtEndISXVDRws", */
    T: -1
  },
  /*::[*/
  311: {
    /* n:"BrtBeginISXVDCols", */
    T: 1
  },
  /*::[*/
  312: {
    /* n:"BrtEndISXVDCols", */
    T: -1
  },
  /*::[*/
  313: {
    /* n:"BrtEndSXLocation", */
    T: -1
  },
  /*::[*/
  314: {
    /* n:"BrtBeginSXLocation", */
    T: 1
  },
  /*::[*/
  315: {
    /* n:"BrtEndSXView", */
    T: -1
  },
  /*::[*/
  316: {
    /* n:"BrtBeginSXTHs", */
    T: 1
  },
  /*::[*/
  317: {
    /* n:"BrtEndSXTHs", */
    T: -1
  },
  /*::[*/
  318: {
    /* n:"BrtBeginSXTH", */
    T: 1
  },
  /*::[*/
  319: {
    /* n:"BrtEndSXTH", */
    T: -1
  },
  /*::[*/
  320: {
    /* n:"BrtBeginISXTHRws", */
    T: 1
  },
  /*::[*/
  321: {
    /* n:"BrtEndISXTHRws", */
    T: -1
  },
  /*::[*/
  322: {
    /* n:"BrtBeginISXTHCols", */
    T: 1
  },
  /*::[*/
  323: {
    /* n:"BrtEndISXTHCols", */
    T: -1
  },
  /*::[*/
  324: {
    /* n:"BrtBeginSXTDMPS", */
    T: 1
  },
  /*::[*/
  325: {
    /* n:"BrtEndSXTDMPs", */
    T: -1
  },
  /*::[*/
  326: {
    /* n:"BrtBeginSXTDMP", */
    T: 1
  },
  /*::[*/
  327: {
    /* n:"BrtEndSXTDMP", */
    T: -1
  },
  /*::[*/
  328: {
    /* n:"BrtBeginSXTHItems", */
    T: 1
  },
  /*::[*/
  329: {
    /* n:"BrtEndSXTHItems", */
    T: -1
  },
  /*::[*/
  330: {
    /* n:"BrtBeginSXTHItem", */
    T: 1
  },
  /*::[*/
  331: {
    /* n:"BrtEndSXTHItem", */
    T: -1
  },
  /*::[*/
  332: {
    /* n:"BrtBeginMetadata", */
    T: 1
  },
  /*::[*/
  333: {
    /* n:"BrtEndMetadata", */
    T: -1
  },
  /*::[*/
  334: {
    /* n:"BrtBeginEsmdtinfo", */
    T: 1
  },
  /*::[*/
  335: {
    /* n:"BrtMdtinfo", */
    f: parse_BrtMdtinfo
  },
  /*::[*/
  336: {
    /* n:"BrtEndEsmdtinfo", */
    T: -1
  },
  /*::[*/
  337: {
    /* n:"BrtBeginEsmdb", */
    f: parse_BrtBeginEsmdb,
    T: 1
  },
  /*::[*/
  338: {
    /* n:"BrtEndEsmdb", */
    T: -1
  },
  /*::[*/
  339: {
    /* n:"BrtBeginEsfmd", */
    T: 1
  },
  /*::[*/
  340: {
    /* n:"BrtEndEsfmd", */
    T: -1
  },
  /*::[*/
  341: {
    /* n:"BrtBeginSingleCells", */
    T: 1
  },
  /*::[*/
  342: {
    /* n:"BrtEndSingleCells", */
    T: -1
  },
  /*::[*/
  343: {
    /* n:"BrtBeginList", */
    T: 1
  },
  /*::[*/
  344: {
    /* n:"BrtEndList", */
    T: -1
  },
  /*::[*/
  345: {
    /* n:"BrtBeginListCols", */
    T: 1
  },
  /*::[*/
  346: {
    /* n:"BrtEndListCols", */
    T: -1
  },
  /*::[*/
  347: {
    /* n:"BrtBeginListCol", */
    T: 1
  },
  /*::[*/
  348: {
    /* n:"BrtEndListCol", */
    T: -1
  },
  /*::[*/
  349: {
    /* n:"BrtBeginListXmlCPr", */
    T: 1
  },
  /*::[*/
  350: {
    /* n:"BrtEndListXmlCPr", */
    T: -1
  },
  /*::[*/
  351: {
    /* n:"BrtListCCFmla" */
  },
  /*::[*/
  352: {
    /* n:"BrtListTrFmla" */
  },
  /*::[*/
  353: {
    /* n:"BrtBeginExternals", */
    T: 1
  },
  /*::[*/
  354: {
    /* n:"BrtEndExternals", */
    T: -1
  },
  /*::[*/
  355: {
    /* n:"BrtSupBookSrc", */
    f: parse_RelID
  },
  /*::[*/
  357: {
    /* n:"BrtSupSelf" */
  },
  /*::[*/
  358: {
    /* n:"BrtSupSame" */
  },
  /*::[*/
  359: {
    /* n:"BrtSupTabs" */
  },
  /*::[*/
  360: {
    /* n:"BrtBeginSupBook", */
    T: 1
  },
  /*::[*/
  361: {
    /* n:"BrtPlaceholderName" */
  },
  /*::[*/
  362: {
    /* n:"BrtExternSheet", */
    f: parse_ExternSheet
  },
  /*::[*/
  363: {
    /* n:"BrtExternTableStart" */
  },
  /*::[*/
  364: {
    /* n:"BrtExternTableEnd" */
  },
  /*::[*/
  366: {
    /* n:"BrtExternRowHdr" */
  },
  /*::[*/
  367: {
    /* n:"BrtExternCellBlank" */
  },
  /*::[*/
  368: {
    /* n:"BrtExternCellReal" */
  },
  /*::[*/
  369: {
    /* n:"BrtExternCellBool" */
  },
  /*::[*/
  370: {
    /* n:"BrtExternCellError" */
  },
  /*::[*/
  371: {
    /* n:"BrtExternCellString" */
  },
  /*::[*/
  372: {
    /* n:"BrtBeginEsmdx", */
    T: 1
  },
  /*::[*/
  373: {
    /* n:"BrtEndEsmdx", */
    T: -1
  },
  /*::[*/
  374: {
    /* n:"BrtBeginMdxSet", */
    T: 1
  },
  /*::[*/
  375: {
    /* n:"BrtEndMdxSet", */
    T: -1
  },
  /*::[*/
  376: {
    /* n:"BrtBeginMdxMbrProp", */
    T: 1
  },
  /*::[*/
  377: {
    /* n:"BrtEndMdxMbrProp", */
    T: -1
  },
  /*::[*/
  378: {
    /* n:"BrtBeginMdxKPI", */
    T: 1
  },
  /*::[*/
  379: {
    /* n:"BrtEndMdxKPI", */
    T: -1
  },
  /*::[*/
  380: {
    /* n:"BrtBeginEsstr", */
    T: 1
  },
  /*::[*/
  381: {
    /* n:"BrtEndEsstr", */
    T: -1
  },
  /*::[*/
  382: {
    /* n:"BrtBeginPRFItem", */
    T: 1
  },
  /*::[*/
  383: {
    /* n:"BrtEndPRFItem", */
    T: -1
  },
  /*::[*/
  384: {
    /* n:"BrtBeginPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  385: {
    /* n:"BrtEndPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  386: {
    /* n:"BrtBeginPivotCacheID", */
    T: 1
  },
  /*::[*/
  387: {
    /* n:"BrtEndPivotCacheID", */
    T: -1
  },
  /*::[*/
  388: {
    /* n:"BrtBeginISXVIs", */
    T: 1
  },
  /*::[*/
  389: {
    /* n:"BrtEndISXVIs", */
    T: -1
  },
  /*::[*/
  390: {
    /* n:"BrtBeginColInfos", */
    T: 1
  },
  /*::[*/
  391: {
    /* n:"BrtEndColInfos", */
    T: -1
  },
  /*::[*/
  392: {
    /* n:"BrtBeginRwBrk", */
    T: 1
  },
  /*::[*/
  393: {
    /* n:"BrtEndRwBrk", */
    T: -1
  },
  /*::[*/
  394: {
    /* n:"BrtBeginColBrk", */
    T: 1
  },
  /*::[*/
  395: {
    /* n:"BrtEndColBrk", */
    T: -1
  },
  /*::[*/
  396: {
    /* n:"BrtBrk" */
  },
  /*::[*/
  397: {
    /* n:"BrtUserBookView" */
  },
  /*::[*/
  398: {
    /* n:"BrtInfo" */
  },
  /*::[*/
  399: {
    /* n:"BrtCUsr" */
  },
  /*::[*/
  400: {
    /* n:"BrtUsr" */
  },
  /*::[*/
  401: {
    /* n:"BrtBeginUsers", */
    T: 1
  },
  /*::[*/
  403: {
    /* n:"BrtEOF" */
  },
  /*::[*/
  404: {
    /* n:"BrtUCR" */
  },
  /*::[*/
  405: {
    /* n:"BrtRRInsDel" */
  },
  /*::[*/
  406: {
    /* n:"BrtRREndInsDel" */
  },
  /*::[*/
  407: {
    /* n:"BrtRRMove" */
  },
  /*::[*/
  408: {
    /* n:"BrtRREndMove" */
  },
  /*::[*/
  409: {
    /* n:"BrtRRChgCell" */
  },
  /*::[*/
  410: {
    /* n:"BrtRREndChgCell" */
  },
  /*::[*/
  411: {
    /* n:"BrtRRHeader" */
  },
  /*::[*/
  412: {
    /* n:"BrtRRUserView" */
  },
  /*::[*/
  413: {
    /* n:"BrtRRRenSheet" */
  },
  /*::[*/
  414: {
    /* n:"BrtRRInsertSh" */
  },
  /*::[*/
  415: {
    /* n:"BrtRRDefName" */
  },
  /*::[*/
  416: {
    /* n:"BrtRRNote" */
  },
  /*::[*/
  417: {
    /* n:"BrtRRConflict" */
  },
  /*::[*/
  418: {
    /* n:"BrtRRTQSIF" */
  },
  /*::[*/
  419: {
    /* n:"BrtRRFormat" */
  },
  /*::[*/
  420: {
    /* n:"BrtRREndFormat" */
  },
  /*::[*/
  421: {
    /* n:"BrtRRAutoFmt" */
  },
  /*::[*/
  422: {
    /* n:"BrtBeginUserShViews", */
    T: 1
  },
  /*::[*/
  423: {
    /* n:"BrtBeginUserShView", */
    T: 1
  },
  /*::[*/
  424: {
    /* n:"BrtEndUserShView", */
    T: -1
  },
  /*::[*/
  425: {
    /* n:"BrtEndUserShViews", */
    T: -1
  },
  /*::[*/
  426: {
    /* n:"BrtArrFmla", */
    f: parse_BrtArrFmla
  },
  /*::[*/
  427: {
    /* n:"BrtShrFmla", */
    f: parse_BrtShrFmla
  },
  /*::[*/
  428: {
    /* n:"BrtTable" */
  },
  /*::[*/
  429: {
    /* n:"BrtBeginExtConnections", */
    T: 1
  },
  /*::[*/
  430: {
    /* n:"BrtEndExtConnections", */
    T: -1
  },
  /*::[*/
  431: {
    /* n:"BrtBeginPCDCalcMems", */
    T: 1
  },
  /*::[*/
  432: {
    /* n:"BrtEndPCDCalcMems", */
    T: -1
  },
  /*::[*/
  433: {
    /* n:"BrtBeginPCDCalcMem", */
    T: 1
  },
  /*::[*/
  434: {
    /* n:"BrtEndPCDCalcMem", */
    T: -1
  },
  /*::[*/
  435: {
    /* n:"BrtBeginPCDHGLevels", */
    T: 1
  },
  /*::[*/
  436: {
    /* n:"BrtEndPCDHGLevels", */
    T: -1
  },
  /*::[*/
  437: {
    /* n:"BrtBeginPCDHGLevel", */
    T: 1
  },
  /*::[*/
  438: {
    /* n:"BrtEndPCDHGLevel", */
    T: -1
  },
  /*::[*/
  439: {
    /* n:"BrtBeginPCDHGLGroups", */
    T: 1
  },
  /*::[*/
  440: {
    /* n:"BrtEndPCDHGLGroups", */
    T: -1
  },
  /*::[*/
  441: {
    /* n:"BrtBeginPCDHGLGroup", */
    T: 1
  },
  /*::[*/
  442: {
    /* n:"BrtEndPCDHGLGroup", */
    T: -1
  },
  /*::[*/
  443: {
    /* n:"BrtBeginPCDHGLGMembers", */
    T: 1
  },
  /*::[*/
  444: {
    /* n:"BrtEndPCDHGLGMembers", */
    T: -1
  },
  /*::[*/
  445: {
    /* n:"BrtBeginPCDHGLGMember", */
    T: 1
  },
  /*::[*/
  446: {
    /* n:"BrtEndPCDHGLGMember", */
    T: -1
  },
  /*::[*/
  447: {
    /* n:"BrtBeginQSI", */
    T: 1
  },
  /*::[*/
  448: {
    /* n:"BrtEndQSI", */
    T: -1
  },
  /*::[*/
  449: {
    /* n:"BrtBeginQSIR", */
    T: 1
  },
  /*::[*/
  450: {
    /* n:"BrtEndQSIR", */
    T: -1
  },
  /*::[*/
  451: {
    /* n:"BrtBeginDeletedNames", */
    T: 1
  },
  /*::[*/
  452: {
    /* n:"BrtEndDeletedNames", */
    T: -1
  },
  /*::[*/
  453: {
    /* n:"BrtBeginDeletedName", */
    T: 1
  },
  /*::[*/
  454: {
    /* n:"BrtEndDeletedName", */
    T: -1
  },
  /*::[*/
  455: {
    /* n:"BrtBeginQSIFs", */
    T: 1
  },
  /*::[*/
  456: {
    /* n:"BrtEndQSIFs", */
    T: -1
  },
  /*::[*/
  457: {
    /* n:"BrtBeginQSIF", */
    T: 1
  },
  /*::[*/
  458: {
    /* n:"BrtEndQSIF", */
    T: -1
  },
  /*::[*/
  459: {
    /* n:"BrtBeginAutoSortScope", */
    T: 1
  },
  /*::[*/
  460: {
    /* n:"BrtEndAutoSortScope", */
    T: -1
  },
  /*::[*/
  461: {
    /* n:"BrtBeginConditionalFormatting", */
    T: 1
  },
  /*::[*/
  462: {
    /* n:"BrtEndConditionalFormatting", */
    T: -1
  },
  /*::[*/
  463: {
    /* n:"BrtBeginCFRule", */
    T: 1
  },
  /*::[*/
  464: {
    /* n:"BrtEndCFRule", */
    T: -1
  },
  /*::[*/
  465: {
    /* n:"BrtBeginIconSet", */
    T: 1
  },
  /*::[*/
  466: {
    /* n:"BrtEndIconSet", */
    T: -1
  },
  /*::[*/
  467: {
    /* n:"BrtBeginDatabar", */
    T: 1
  },
  /*::[*/
  468: {
    /* n:"BrtEndDatabar", */
    T: -1
  },
  /*::[*/
  469: {
    /* n:"BrtBeginColorScale", */
    T: 1
  },
  /*::[*/
  470: {
    /* n:"BrtEndColorScale", */
    T: -1
  },
  /*::[*/
  471: {
    /* n:"BrtCFVO" */
  },
  /*::[*/
  472: {
    /* n:"BrtExternValueMeta" */
  },
  /*::[*/
  473: {
    /* n:"BrtBeginColorPalette", */
    T: 1
  },
  /*::[*/
  474: {
    /* n:"BrtEndColorPalette", */
    T: -1
  },
  /*::[*/
  475: {
    /* n:"BrtIndexedColor" */
  },
  /*::[*/
  476: {
    /* n:"BrtMargins", */
    f: parse_BrtMargins
  },
  /*::[*/
  477: {
    /* n:"BrtPrintOptions" */
  },
  /*::[*/
  478: {
    /* n:"BrtPageSetup" */
  },
  /*::[*/
  479: {
    /* n:"BrtBeginHeaderFooter", */
    T: 1
  },
  /*::[*/
  480: {
    /* n:"BrtEndHeaderFooter", */
    T: -1
  },
  /*::[*/
  481: {
    /* n:"BrtBeginSXCrtFormat", */
    T: 1
  },
  /*::[*/
  482: {
    /* n:"BrtEndSXCrtFormat", */
    T: -1
  },
  /*::[*/
  483: {
    /* n:"BrtBeginSXCrtFormats", */
    T: 1
  },
  /*::[*/
  484: {
    /* n:"BrtEndSXCrtFormats", */
    T: -1
  },
  /*::[*/
  485: {
    /* n:"BrtWsFmtInfo", */
    f: parse_BrtWsFmtInfo
  },
  /*::[*/
  486: {
    /* n:"BrtBeginMgs", */
    T: 1
  },
  /*::[*/
  487: {
    /* n:"BrtEndMGs", */
    T: -1
  },
  /*::[*/
  488: {
    /* n:"BrtBeginMGMaps", */
    T: 1
  },
  /*::[*/
  489: {
    /* n:"BrtEndMGMaps", */
    T: -1
  },
  /*::[*/
  490: {
    /* n:"BrtBeginMG", */
    T: 1
  },
  /*::[*/
  491: {
    /* n:"BrtEndMG", */
    T: -1
  },
  /*::[*/
  492: {
    /* n:"BrtBeginMap", */
    T: 1
  },
  /*::[*/
  493: {
    /* n:"BrtEndMap", */
    T: -1
  },
  /*::[*/
  494: {
    /* n:"BrtHLink", */
    f: parse_BrtHLink
  },
  /*::[*/
  495: {
    /* n:"BrtBeginDCon", */
    T: 1
  },
  /*::[*/
  496: {
    /* n:"BrtEndDCon", */
    T: -1
  },
  /*::[*/
  497: {
    /* n:"BrtBeginDRefs", */
    T: 1
  },
  /*::[*/
  498: {
    /* n:"BrtEndDRefs", */
    T: -1
  },
  /*::[*/
  499: {
    /* n:"BrtDRef" */
  },
  /*::[*/
  500: {
    /* n:"BrtBeginScenMan", */
    T: 1
  },
  /*::[*/
  501: {
    /* n:"BrtEndScenMan", */
    T: -1
  },
  /*::[*/
  502: {
    /* n:"BrtBeginSct", */
    T: 1
  },
  /*::[*/
  503: {
    /* n:"BrtEndSct", */
    T: -1
  },
  /*::[*/
  504: {
    /* n:"BrtSlc" */
  },
  /*::[*/
  505: {
    /* n:"BrtBeginDXFs", */
    T: 1
  },
  /*::[*/
  506: {
    /* n:"BrtEndDXFs", */
    T: -1
  },
  /*::[*/
  507: {
    /* n:"BrtDXF" */
  },
  /*::[*/
  508: {
    /* n:"BrtBeginTableStyles", */
    T: 1
  },
  /*::[*/
  509: {
    /* n:"BrtEndTableStyles", */
    T: -1
  },
  /*::[*/
  510: {
    /* n:"BrtBeginTableStyle", */
    T: 1
  },
  /*::[*/
  511: {
    /* n:"BrtEndTableStyle", */
    T: -1
  },
  /*::[*/
  512: {
    /* n:"BrtTableStyleElement" */
  },
  /*::[*/
  513: {
    /* n:"BrtTableStyleClient" */
  },
  /*::[*/
  514: {
    /* n:"BrtBeginVolDeps", */
    T: 1
  },
  /*::[*/
  515: {
    /* n:"BrtEndVolDeps", */
    T: -1
  },
  /*::[*/
  516: {
    /* n:"BrtBeginVolType", */
    T: 1
  },
  /*::[*/
  517: {
    /* n:"BrtEndVolType", */
    T: -1
  },
  /*::[*/
  518: {
    /* n:"BrtBeginVolMain", */
    T: 1
  },
  /*::[*/
  519: {
    /* n:"BrtEndVolMain", */
    T: -1
  },
  /*::[*/
  520: {
    /* n:"BrtBeginVolTopic", */
    T: 1
  },
  /*::[*/
  521: {
    /* n:"BrtEndVolTopic", */
    T: -1
  },
  /*::[*/
  522: {
    /* n:"BrtVolSubtopic" */
  },
  /*::[*/
  523: {
    /* n:"BrtVolRef" */
  },
  /*::[*/
  524: {
    /* n:"BrtVolNum" */
  },
  /*::[*/
  525: {
    /* n:"BrtVolErr" */
  },
  /*::[*/
  526: {
    /* n:"BrtVolStr" */
  },
  /*::[*/
  527: {
    /* n:"BrtVolBool" */
  },
  /*::[*/
  528: {
    /* n:"BrtBeginCalcChain$", */
    T: 1
  },
  /*::[*/
  529: {
    /* n:"BrtEndCalcChain$", */
    T: -1
  },
  /*::[*/
  530: {
    /* n:"BrtBeginSortState", */
    T: 1
  },
  /*::[*/
  531: {
    /* n:"BrtEndSortState", */
    T: -1
  },
  /*::[*/
  532: {
    /* n:"BrtBeginSortCond", */
    T: 1
  },
  /*::[*/
  533: {
    /* n:"BrtEndSortCond", */
    T: -1
  },
  /*::[*/
  534: {
    /* n:"BrtBookProtection" */
  },
  /*::[*/
  535: {
    /* n:"BrtSheetProtection" */
  },
  /*::[*/
  536: {
    /* n:"BrtRangeProtection" */
  },
  /*::[*/
  537: {
    /* n:"BrtPhoneticInfo" */
  },
  /*::[*/
  538: {
    /* n:"BrtBeginECTxtWiz", */
    T: 1
  },
  /*::[*/
  539: {
    /* n:"BrtEndECTxtWiz", */
    T: -1
  },
  /*::[*/
  540: {
    /* n:"BrtBeginECTWFldInfoLst", */
    T: 1
  },
  /*::[*/
  541: {
    /* n:"BrtEndECTWFldInfoLst", */
    T: -1
  },
  /*::[*/
  542: {
    /* n:"BrtBeginECTwFldInfo", */
    T: 1
  },
  /*::[*/
  548: {
    /* n:"BrtFileSharing" */
  },
  /*::[*/
  549: {
    /* n:"BrtOleSize" */
  },
  /*::[*/
  550: {
    /* n:"BrtDrawing", */
    f: parse_RelID
  },
  /*::[*/
  551: {
    /* n:"BrtLegacyDrawing" */
  },
  /*::[*/
  552: {
    /* n:"BrtLegacyDrawingHF" */
  },
  /*::[*/
  553: {
    /* n:"BrtWebOpt" */
  },
  /*::[*/
  554: {
    /* n:"BrtBeginWebPubItems", */
    T: 1
  },
  /*::[*/
  555: {
    /* n:"BrtEndWebPubItems", */
    T: -1
  },
  /*::[*/
  556: {
    /* n:"BrtBeginWebPubItem", */
    T: 1
  },
  /*::[*/
  557: {
    /* n:"BrtEndWebPubItem", */
    T: -1
  },
  /*::[*/
  558: {
    /* n:"BrtBeginSXCondFmt", */
    T: 1
  },
  /*::[*/
  559: {
    /* n:"BrtEndSXCondFmt", */
    T: -1
  },
  /*::[*/
  560: {
    /* n:"BrtBeginSXCondFmts", */
    T: 1
  },
  /*::[*/
  561: {
    /* n:"BrtEndSXCondFmts", */
    T: -1
  },
  /*::[*/
  562: {
    /* n:"BrtBkHim" */
  },
  /*::[*/
  564: {
    /* n:"BrtColor" */
  },
  /*::[*/
  565: {
    /* n:"BrtBeginIndexedColors", */
    T: 1
  },
  /*::[*/
  566: {
    /* n:"BrtEndIndexedColors", */
    T: -1
  },
  /*::[*/
  569: {
    /* n:"BrtBeginMRUColors", */
    T: 1
  },
  /*::[*/
  570: {
    /* n:"BrtEndMRUColors", */
    T: -1
  },
  /*::[*/
  572: {
    /* n:"BrtMRUColor" */
  },
  /*::[*/
  573: {
    /* n:"BrtBeginDVals", */
    T: 1
  },
  /*::[*/
  574: {
    /* n:"BrtEndDVals", */
    T: -1
  },
  /*::[*/
  577: {
    /* n:"BrtSupNameStart" */
  },
  /*::[*/
  578: {
    /* n:"BrtSupNameValueStart" */
  },
  /*::[*/
  579: {
    /* n:"BrtSupNameValueEnd" */
  },
  /*::[*/
  580: {
    /* n:"BrtSupNameNum" */
  },
  /*::[*/
  581: {
    /* n:"BrtSupNameErr" */
  },
  /*::[*/
  582: {
    /* n:"BrtSupNameSt" */
  },
  /*::[*/
  583: {
    /* n:"BrtSupNameNil" */
  },
  /*::[*/
  584: {
    /* n:"BrtSupNameBool" */
  },
  /*::[*/
  585: {
    /* n:"BrtSupNameFmla" */
  },
  /*::[*/
  586: {
    /* n:"BrtSupNameBits" */
  },
  /*::[*/
  587: {
    /* n:"BrtSupNameEnd" */
  },
  /*::[*/
  588: {
    /* n:"BrtEndSupBook", */
    T: -1
  },
  /*::[*/
  589: {
    /* n:"BrtCellSmartTagProperty" */
  },
  /*::[*/
  590: {
    /* n:"BrtBeginCellSmartTag", */
    T: 1
  },
  /*::[*/
  591: {
    /* n:"BrtEndCellSmartTag", */
    T: -1
  },
  /*::[*/
  592: {
    /* n:"BrtBeginCellSmartTags", */
    T: 1
  },
  /*::[*/
  593: {
    /* n:"BrtEndCellSmartTags", */
    T: -1
  },
  /*::[*/
  594: {
    /* n:"BrtBeginSmartTags", */
    T: 1
  },
  /*::[*/
  595: {
    /* n:"BrtEndSmartTags", */
    T: -1
  },
  /*::[*/
  596: {
    /* n:"BrtSmartTagType" */
  },
  /*::[*/
  597: {
    /* n:"BrtBeginSmartTagTypes", */
    T: 1
  },
  /*::[*/
  598: {
    /* n:"BrtEndSmartTagTypes", */
    T: -1
  },
  /*::[*/
  599: {
    /* n:"BrtBeginSXFilters", */
    T: 1
  },
  /*::[*/
  600: {
    /* n:"BrtEndSXFilters", */
    T: -1
  },
  /*::[*/
  601: {
    /* n:"BrtBeginSXFILTER", */
    T: 1
  },
  /*::[*/
  602: {
    /* n:"BrtEndSXFilter", */
    T: -1
  },
  /*::[*/
  603: {
    /* n:"BrtBeginFills", */
    T: 1
  },
  /*::[*/
  604: {
    /* n:"BrtEndFills", */
    T: -1
  },
  /*::[*/
  605: {
    /* n:"BrtBeginCellWatches", */
    T: 1
  },
  /*::[*/
  606: {
    /* n:"BrtEndCellWatches", */
    T: -1
  },
  /*::[*/
  607: {
    /* n:"BrtCellWatch" */
  },
  /*::[*/
  608: {
    /* n:"BrtBeginCRErrs", */
    T: 1
  },
  /*::[*/
  609: {
    /* n:"BrtEndCRErrs", */
    T: -1
  },
  /*::[*/
  610: {
    /* n:"BrtCrashRecErr" */
  },
  /*::[*/
  611: {
    /* n:"BrtBeginFonts", */
    T: 1
  },
  /*::[*/
  612: {
    /* n:"BrtEndFonts", */
    T: -1
  },
  /*::[*/
  613: {
    /* n:"BrtBeginBorders", */
    T: 1
  },
  /*::[*/
  614: {
    /* n:"BrtEndBorders", */
    T: -1
  },
  /*::[*/
  615: {
    /* n:"BrtBeginFmts", */
    T: 1
  },
  /*::[*/
  616: {
    /* n:"BrtEndFmts", */
    T: -1
  },
  /*::[*/
  617: {
    /* n:"BrtBeginCellXFs", */
    T: 1
  },
  /*::[*/
  618: {
    /* n:"BrtEndCellXFs", */
    T: -1
  },
  /*::[*/
  619: {
    /* n:"BrtBeginStyles", */
    T: 1
  },
  /*::[*/
  620: {
    /* n:"BrtEndStyles", */
    T: -1
  },
  /*::[*/
  625: {
    /* n:"BrtBigName" */
  },
  /*::[*/
  626: {
    /* n:"BrtBeginCellStyleXFs", */
    T: 1
  },
  /*::[*/
  627: {
    /* n:"BrtEndCellStyleXFs", */
    T: -1
  },
  /*::[*/
  628: {
    /* n:"BrtBeginComments", */
    T: 1
  },
  /*::[*/
  629: {
    /* n:"BrtEndComments", */
    T: -1
  },
  /*::[*/
  630: {
    /* n:"BrtBeginCommentAuthors", */
    T: 1
  },
  /*::[*/
  631: {
    /* n:"BrtEndCommentAuthors", */
    T: -1
  },
  /*::[*/
  632: {
    /* n:"BrtCommentAuthor", */
    f: parse_BrtCommentAuthor
  },
  /*::[*/
  633: {
    /* n:"BrtBeginCommentList", */
    T: 1
  },
  /*::[*/
  634: {
    /* n:"BrtEndCommentList", */
    T: -1
  },
  /*::[*/
  635: {
    /* n:"BrtBeginComment", */
    T: 1,
    f: parse_BrtBeginComment
  },
  /*::[*/
  636: {
    /* n:"BrtEndComment", */
    T: -1
  },
  /*::[*/
  637: {
    /* n:"BrtCommentText", */
    f: parse_BrtCommentText
  },
  /*::[*/
  638: {
    /* n:"BrtBeginOleObjects", */
    T: 1
  },
  /*::[*/
  639: {
    /* n:"BrtOleObject" */
  },
  /*::[*/
  640: {
    /* n:"BrtEndOleObjects", */
    T: -1
  },
  /*::[*/
  641: {
    /* n:"BrtBeginSxrules", */
    T: 1
  },
  /*::[*/
  642: {
    /* n:"BrtEndSxRules", */
    T: -1
  },
  /*::[*/
  643: {
    /* n:"BrtBeginActiveXControls", */
    T: 1
  },
  /*::[*/
  644: {
    /* n:"BrtActiveX" */
  },
  /*::[*/
  645: {
    /* n:"BrtEndActiveXControls", */
    T: -1
  },
  /*::[*/
  646: {
    /* n:"BrtBeginPCDSDTCEMembersSortBy", */
    T: 1
  },
  /*::[*/
  648: {
    /* n:"BrtBeginCellIgnoreECs", */
    T: 1
  },
  /*::[*/
  649: {
    /* n:"BrtCellIgnoreEC" */
  },
  /*::[*/
  650: {
    /* n:"BrtEndCellIgnoreECs", */
    T: -1
  },
  /*::[*/
  651: {
    /* n:"BrtCsProp", */
    f: parse_BrtCsProp
  },
  /*::[*/
  652: {
    /* n:"BrtCsPageSetup" */
  },
  /*::[*/
  653: {
    /* n:"BrtBeginUserCsViews", */
    T: 1
  },
  /*::[*/
  654: {
    /* n:"BrtEndUserCsViews", */
    T: -1
  },
  /*::[*/
  655: {
    /* n:"BrtBeginUserCsView", */
    T: 1
  },
  /*::[*/
  656: {
    /* n:"BrtEndUserCsView", */
    T: -1
  },
  /*::[*/
  657: {
    /* n:"BrtBeginPcdSFCIEntries", */
    T: 1
  },
  /*::[*/
  658: {
    /* n:"BrtEndPCDSFCIEntries", */
    T: -1
  },
  /*::[*/
  659: {
    /* n:"BrtPCDSFCIEntry" */
  },
  /*::[*/
  660: {
    /* n:"BrtBeginListParts", */
    T: 1
  },
  /*::[*/
  661: {
    /* n:"BrtListPart" */
  },
  /*::[*/
  662: {
    /* n:"BrtEndListParts", */
    T: -1
  },
  /*::[*/
  663: {
    /* n:"BrtSheetCalcProp" */
  },
  /*::[*/
  664: {
    /* n:"BrtBeginFnGroup", */
    T: 1
  },
  /*::[*/
  665: {
    /* n:"BrtFnGroup" */
  },
  /*::[*/
  666: {
    /* n:"BrtEndFnGroup", */
    T: -1
  },
  /*::[*/
  667: {
    /* n:"BrtSupAddin" */
  },
  /*::[*/
  668: {
    /* n:"BrtSXTDMPOrder" */
  },
  /*::[*/
  669: {
    /* n:"BrtCsProtection" */
  },
  /*::[*/
  671: {
    /* n:"BrtBeginWsSortMap", */
    T: 1
  },
  /*::[*/
  672: {
    /* n:"BrtEndWsSortMap", */
    T: -1
  },
  /*::[*/
  673: {
    /* n:"BrtBeginRRSort", */
    T: 1
  },
  /*::[*/
  674: {
    /* n:"BrtEndRRSort", */
    T: -1
  },
  /*::[*/
  675: {
    /* n:"BrtRRSortItem" */
  },
  /*::[*/
  676: {
    /* n:"BrtFileSharingIso" */
  },
  /*::[*/
  677: {
    /* n:"BrtBookProtectionIso" */
  },
  /*::[*/
  678: {
    /* n:"BrtSheetProtectionIso" */
  },
  /*::[*/
  679: {
    /* n:"BrtCsProtectionIso" */
  },
  /*::[*/
  680: {
    /* n:"BrtRangeProtectionIso" */
  },
  /*::[*/
  681: {
    /* n:"BrtDValList" */
  },
  /*::[*/
  1024: {
    /* n:"BrtRwDescent" */
  },
  /*::[*/
  1025: {
    /* n:"BrtKnownFonts" */
  },
  /*::[*/
  1026: {
    /* n:"BrtBeginSXTupleSet", */
    T: 1
  },
  /*::[*/
  1027: {
    /* n:"BrtEndSXTupleSet", */
    T: -1
  },
  /*::[*/
  1028: {
    /* n:"BrtBeginSXTupleSetHeader", */
    T: 1
  },
  /*::[*/
  1029: {
    /* n:"BrtEndSXTupleSetHeader", */
    T: -1
  },
  /*::[*/
  1030: {
    /* n:"BrtSXTupleSetHeaderItem" */
  },
  /*::[*/
  1031: {
    /* n:"BrtBeginSXTupleSetData", */
    T: 1
  },
  /*::[*/
  1032: {
    /* n:"BrtEndSXTupleSetData", */
    T: -1
  },
  /*::[*/
  1033: {
    /* n:"BrtBeginSXTupleSetRow", */
    T: 1
  },
  /*::[*/
  1034: {
    /* n:"BrtEndSXTupleSetRow", */
    T: -1
  },
  /*::[*/
  1035: {
    /* n:"BrtSXTupleSetRowItem" */
  },
  /*::[*/
  1036: {
    /* n:"BrtNameExt" */
  },
  /*::[*/
  1037: {
    /* n:"BrtPCDH14" */
  },
  /*::[*/
  1038: {
    /* n:"BrtBeginPCDCalcMem14", */
    T: 1
  },
  /*::[*/
  1039: {
    /* n:"BrtEndPCDCalcMem14", */
    T: -1
  },
  /*::[*/
  1040: {
    /* n:"BrtSXTH14" */
  },
  /*::[*/
  1041: {
    /* n:"BrtBeginSparklineGroup", */
    T: 1
  },
  /*::[*/
  1042: {
    /* n:"BrtEndSparklineGroup", */
    T: -1
  },
  /*::[*/
  1043: {
    /* n:"BrtSparkline" */
  },
  /*::[*/
  1044: {
    /* n:"BrtSXDI14" */
  },
  /*::[*/
  1045: {
    /* n:"BrtWsFmtInfoEx14" */
  },
  /*::[*/
  1046: {
    /* n:"BrtBeginConditionalFormatting14", */
    T: 1
  },
  /*::[*/
  1047: {
    /* n:"BrtEndConditionalFormatting14", */
    T: -1
  },
  /*::[*/
  1048: {
    /* n:"BrtBeginCFRule14", */
    T: 1
  },
  /*::[*/
  1049: {
    /* n:"BrtEndCFRule14", */
    T: -1
  },
  /*::[*/
  1050: {
    /* n:"BrtCFVO14" */
  },
  /*::[*/
  1051: {
    /* n:"BrtBeginDatabar14", */
    T: 1
  },
  /*::[*/
  1052: {
    /* n:"BrtBeginIconSet14", */
    T: 1
  },
  /*::[*/
  1053: {
    /* n:"BrtDVal14", */
    f: parse_BrtDVal14
  },
  /*::[*/
  1054: {
    /* n:"BrtBeginDVals14", */
    T: 1
  },
  /*::[*/
  1055: {
    /* n:"BrtColor14" */
  },
  /*::[*/
  1056: {
    /* n:"BrtBeginSparklines", */
    T: 1
  },
  /*::[*/
  1057: {
    /* n:"BrtEndSparklines", */
    T: -1
  },
  /*::[*/
  1058: {
    /* n:"BrtBeginSparklineGroups", */
    T: 1
  },
  /*::[*/
  1059: {
    /* n:"BrtEndSparklineGroups", */
    T: -1
  },
  /*::[*/
  1061: {
    /* n:"BrtSXVD14" */
  },
  /*::[*/
  1062: {
    /* n:"BrtBeginSXView14", */
    T: 1
  },
  /*::[*/
  1063: {
    /* n:"BrtEndSXView14", */
    T: -1
  },
  /*::[*/
  1064: {
    /* n:"BrtBeginSXView16", */
    T: 1
  },
  /*::[*/
  1065: {
    /* n:"BrtEndSXView16", */
    T: -1
  },
  /*::[*/
  1066: {
    /* n:"BrtBeginPCD14", */
    T: 1
  },
  /*::[*/
  1067: {
    /* n:"BrtEndPCD14", */
    T: -1
  },
  /*::[*/
  1068: {
    /* n:"BrtBeginExtConn14", */
    T: 1
  },
  /*::[*/
  1069: {
    /* n:"BrtEndExtConn14", */
    T: -1
  },
  /*::[*/
  1070: {
    /* n:"BrtBeginSlicerCacheIDs", */
    T: 1
  },
  /*::[*/
  1071: {
    /* n:"BrtEndSlicerCacheIDs", */
    T: -1
  },
  /*::[*/
  1072: {
    /* n:"BrtBeginSlicerCacheID", */
    T: 1
  },
  /*::[*/
  1073: {
    /* n:"BrtEndSlicerCacheID", */
    T: -1
  },
  /*::[*/
  1075: {
    /* n:"BrtBeginSlicerCache", */
    T: 1
  },
  /*::[*/
  1076: {
    /* n:"BrtEndSlicerCache", */
    T: -1
  },
  /*::[*/
  1077: {
    /* n:"BrtBeginSlicerCacheDef", */
    T: 1
  },
  /*::[*/
  1078: {
    /* n:"BrtEndSlicerCacheDef", */
    T: -1
  },
  /*::[*/
  1079: {
    /* n:"BrtBeginSlicersEx", */
    T: 1
  },
  /*::[*/
  1080: {
    /* n:"BrtEndSlicersEx", */
    T: -1
  },
  /*::[*/
  1081: {
    /* n:"BrtBeginSlicerEx", */
    T: 1
  },
  /*::[*/
  1082: {
    /* n:"BrtEndSlicerEx", */
    T: -1
  },
  /*::[*/
  1083: {
    /* n:"BrtBeginSlicer", */
    T: 1
  },
  /*::[*/
  1084: {
    /* n:"BrtEndSlicer", */
    T: -1
  },
  /*::[*/
  1085: {
    /* n:"BrtSlicerCachePivotTables" */
  },
  /*::[*/
  1086: {
    /* n:"BrtBeginSlicerCacheOlapImpl", */
    T: 1
  },
  /*::[*/
  1087: {
    /* n:"BrtEndSlicerCacheOlapImpl", */
    T: -1
  },
  /*::[*/
  1088: {
    /* n:"BrtBeginSlicerCacheLevelsData", */
    T: 1
  },
  /*::[*/
  1089: {
    /* n:"BrtEndSlicerCacheLevelsData", */
    T: -1
  },
  /*::[*/
  1090: {
    /* n:"BrtBeginSlicerCacheLevelData", */
    T: 1
  },
  /*::[*/
  1091: {
    /* n:"BrtEndSlicerCacheLevelData", */
    T: -1
  },
  /*::[*/
  1092: {
    /* n:"BrtBeginSlicerCacheSiRanges", */
    T: 1
  },
  /*::[*/
  1093: {
    /* n:"BrtEndSlicerCacheSiRanges", */
    T: -1
  },
  /*::[*/
  1094: {
    /* n:"BrtBeginSlicerCacheSiRange", */
    T: 1
  },
  /*::[*/
  1095: {
    /* n:"BrtEndSlicerCacheSiRange", */
    T: -1
  },
  /*::[*/
  1096: {
    /* n:"BrtSlicerCacheOlapItem" */
  },
  /*::[*/
  1097: {
    /* n:"BrtBeginSlicerCacheSelections", */
    T: 1
  },
  /*::[*/
  1098: {
    /* n:"BrtSlicerCacheSelection" */
  },
  /*::[*/
  1099: {
    /* n:"BrtEndSlicerCacheSelections", */
    T: -1
  },
  /*::[*/
  1100: {
    /* n:"BrtBeginSlicerCacheNative", */
    T: 1
  },
  /*::[*/
  1101: {
    /* n:"BrtEndSlicerCacheNative", */
    T: -1
  },
  /*::[*/
  1102: {
    /* n:"BrtSlicerCacheNativeItem" */
  },
  /*::[*/
  1103: {
    /* n:"BrtRangeProtection14" */
  },
  /*::[*/
  1104: {
    /* n:"BrtRangeProtectionIso14" */
  },
  /*::[*/
  1105: {
    /* n:"BrtCellIgnoreEC14" */
  },
  /*::[*/
  1111: {
    /* n:"BrtList14" */
  },
  /*::[*/
  1112: {
    /* n:"BrtCFIcon" */
  },
  /*::[*/
  1113: {
    /* n:"BrtBeginSlicerCachesPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  1114: {
    /* n:"BrtEndSlicerCachesPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  1115: {
    /* n:"BrtBeginSlicers", */
    T: 1
  },
  /*::[*/
  1116: {
    /* n:"BrtEndSlicers", */
    T: -1
  },
  /*::[*/
  1117: {
    /* n:"BrtWbProp14" */
  },
  /*::[*/
  1118: {
    /* n:"BrtBeginSXEdit", */
    T: 1
  },
  /*::[*/
  1119: {
    /* n:"BrtEndSXEdit", */
    T: -1
  },
  /*::[*/
  1120: {
    /* n:"BrtBeginSXEdits", */
    T: 1
  },
  /*::[*/
  1121: {
    /* n:"BrtEndSXEdits", */
    T: -1
  },
  /*::[*/
  1122: {
    /* n:"BrtBeginSXChange", */
    T: 1
  },
  /*::[*/
  1123: {
    /* n:"BrtEndSXChange", */
    T: -1
  },
  /*::[*/
  1124: {
    /* n:"BrtBeginSXChanges", */
    T: 1
  },
  /*::[*/
  1125: {
    /* n:"BrtEndSXChanges", */
    T: -1
  },
  /*::[*/
  1126: {
    /* n:"BrtSXTupleItems" */
  },
  /*::[*/
  1128: {
    /* n:"BrtBeginSlicerStyle", */
    T: 1
  },
  /*::[*/
  1129: {
    /* n:"BrtEndSlicerStyle", */
    T: -1
  },
  /*::[*/
  1130: {
    /* n:"BrtSlicerStyleElement" */
  },
  /*::[*/
  1131: {
    /* n:"BrtBeginStyleSheetExt14", */
    T: 1
  },
  /*::[*/
  1132: {
    /* n:"BrtEndStyleSheetExt14", */
    T: -1
  },
  /*::[*/
  1133: {
    /* n:"BrtBeginSlicerCachesPivotCacheID", */
    T: 1
  },
  /*::[*/
  1134: {
    /* n:"BrtEndSlicerCachesPivotCacheID", */
    T: -1
  },
  /*::[*/
  1135: {
    /* n:"BrtBeginConditionalFormattings", */
    T: 1
  },
  /*::[*/
  1136: {
    /* n:"BrtEndConditionalFormattings", */
    T: -1
  },
  /*::[*/
  1137: {
    /* n:"BrtBeginPCDCalcMemExt", */
    T: 1
  },
  /*::[*/
  1138: {
    /* n:"BrtEndPCDCalcMemExt", */
    T: -1
  },
  /*::[*/
  1139: {
    /* n:"BrtBeginPCDCalcMemsExt", */
    T: 1
  },
  /*::[*/
  1140: {
    /* n:"BrtEndPCDCalcMemsExt", */
    T: -1
  },
  /*::[*/
  1141: {
    /* n:"BrtPCDField14" */
  },
  /*::[*/
  1142: {
    /* n:"BrtBeginSlicerStyles", */
    T: 1
  },
  /*::[*/
  1143: {
    /* n:"BrtEndSlicerStyles", */
    T: -1
  },
  /*::[*/
  1144: {
    /* n:"BrtBeginSlicerStyleElements", */
    T: 1
  },
  /*::[*/
  1145: {
    /* n:"BrtEndSlicerStyleElements", */
    T: -1
  },
  /*::[*/
  1146: {
    /* n:"BrtCFRuleExt" */
  },
  /*::[*/
  1147: {
    /* n:"BrtBeginSXCondFmt14", */
    T: 1
  },
  /*::[*/
  1148: {
    /* n:"BrtEndSXCondFmt14", */
    T: -1
  },
  /*::[*/
  1149: {
    /* n:"BrtBeginSXCondFmts14", */
    T: 1
  },
  /*::[*/
  1150: {
    /* n:"BrtEndSXCondFmts14", */
    T: -1
  },
  /*::[*/
  1152: {
    /* n:"BrtBeginSortCond14", */
    T: 1
  },
  /*::[*/
  1153: {
    /* n:"BrtEndSortCond14", */
    T: -1
  },
  /*::[*/
  1154: {
    /* n:"BrtEndDVals14", */
    T: -1
  },
  /*::[*/
  1155: {
    /* n:"BrtEndIconSet14", */
    T: -1
  },
  /*::[*/
  1156: {
    /* n:"BrtEndDatabar14", */
    T: -1
  },
  /*::[*/
  1157: {
    /* n:"BrtBeginColorScale14", */
    T: 1
  },
  /*::[*/
  1158: {
    /* n:"BrtEndColorScale14", */
    T: -1
  },
  /*::[*/
  1159: {
    /* n:"BrtBeginSxrules14", */
    T: 1
  },
  /*::[*/
  1160: {
    /* n:"BrtEndSxrules14", */
    T: -1
  },
  /*::[*/
  1161: {
    /* n:"BrtBeginPRule14", */
    T: 1
  },
  /*::[*/
  1162: {
    /* n:"BrtEndPRule14", */
    T: -1
  },
  /*::[*/
  1163: {
    /* n:"BrtBeginPRFilters14", */
    T: 1
  },
  /*::[*/
  1164: {
    /* n:"BrtEndPRFilters14", */
    T: -1
  },
  /*::[*/
  1165: {
    /* n:"BrtBeginPRFilter14", */
    T: 1
  },
  /*::[*/
  1166: {
    /* n:"BrtEndPRFilter14", */
    T: -1
  },
  /*::[*/
  1167: {
    /* n:"BrtBeginPRFItem14", */
    T: 1
  },
  /*::[*/
  1168: {
    /* n:"BrtEndPRFItem14", */
    T: -1
  },
  /*::[*/
  1169: {
    /* n:"BrtBeginCellIgnoreECs14", */
    T: 1
  },
  /*::[*/
  1170: {
    /* n:"BrtEndCellIgnoreECs14", */
    T: -1
  },
  /*::[*/
  1171: {
    /* n:"BrtDxf14" */
  },
  /*::[*/
  1172: {
    /* n:"BrtBeginDxF14s", */
    T: 1
  },
  /*::[*/
  1173: {
    /* n:"BrtEndDxf14s", */
    T: -1
  },
  /*::[*/
  1177: {
    /* n:"BrtFilter14" */
  },
  /*::[*/
  1178: {
    /* n:"BrtBeginCustomFilters14", */
    T: 1
  },
  /*::[*/
  1180: {
    /* n:"BrtCustomFilter14" */
  },
  /*::[*/
  1181: {
    /* n:"BrtIconFilter14" */
  },
  /*::[*/
  1182: {
    /* n:"BrtPivotCacheConnectionName" */
  },
  /*::[*/
  2048: {
    /* n:"BrtBeginDecoupledPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2049: {
    /* n:"BrtEndDecoupledPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2050: {
    /* n:"BrtDecoupledPivotCacheID" */
  },
  /*::[*/
  2051: {
    /* n:"BrtBeginPivotTableRefs", */
    T: 1
  },
  /*::[*/
  2052: {
    /* n:"BrtEndPivotTableRefs", */
    T: -1
  },
  /*::[*/
  2053: {
    /* n:"BrtPivotTableRef" */
  },
  /*::[*/
  2054: {
    /* n:"BrtSlicerCacheBookPivotTables" */
  },
  /*::[*/
  2055: {
    /* n:"BrtBeginSxvcells", */
    T: 1
  },
  /*::[*/
  2056: {
    /* n:"BrtEndSxvcells", */
    T: -1
  },
  /*::[*/
  2057: {
    /* n:"BrtBeginSxRow", */
    T: 1
  },
  /*::[*/
  2058: {
    /* n:"BrtEndSxRow", */
    T: -1
  },
  /*::[*/
  2060: {
    /* n:"BrtPcdCalcMem15" */
  },
  /*::[*/
  2067: {
    /* n:"BrtQsi15" */
  },
  /*::[*/
  2068: {
    /* n:"BrtBeginWebExtensions", */
    T: 1
  },
  /*::[*/
  2069: {
    /* n:"BrtEndWebExtensions", */
    T: -1
  },
  /*::[*/
  2070: {
    /* n:"BrtWebExtension" */
  },
  /*::[*/
  2071: {
    /* n:"BrtAbsPath15" */
  },
  /*::[*/
  2072: {
    /* n:"BrtBeginPivotTableUISettings", */
    T: 1
  },
  /*::[*/
  2073: {
    /* n:"BrtEndPivotTableUISettings", */
    T: -1
  },
  /*::[*/
  2075: {
    /* n:"BrtTableSlicerCacheIDs" */
  },
  /*::[*/
  2076: {
    /* n:"BrtTableSlicerCacheID" */
  },
  /*::[*/
  2077: {
    /* n:"BrtBeginTableSlicerCache", */
    T: 1
  },
  /*::[*/
  2078: {
    /* n:"BrtEndTableSlicerCache", */
    T: -1
  },
  /*::[*/
  2079: {
    /* n:"BrtSxFilter15" */
  },
  /*::[*/
  2080: {
    /* n:"BrtBeginTimelineCachePivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2081: {
    /* n:"BrtEndTimelineCachePivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2082: {
    /* n:"BrtTimelineCachePivotCacheID" */
  },
  /*::[*/
  2083: {
    /* n:"BrtBeginTimelineCacheIDs", */
    T: 1
  },
  /*::[*/
  2084: {
    /* n:"BrtEndTimelineCacheIDs", */
    T: -1
  },
  /*::[*/
  2085: {
    /* n:"BrtBeginTimelineCacheID", */
    T: 1
  },
  /*::[*/
  2086: {
    /* n:"BrtEndTimelineCacheID", */
    T: -1
  },
  /*::[*/
  2087: {
    /* n:"BrtBeginTimelinesEx", */
    T: 1
  },
  /*::[*/
  2088: {
    /* n:"BrtEndTimelinesEx", */
    T: -1
  },
  /*::[*/
  2089: {
    /* n:"BrtBeginTimelineEx", */
    T: 1
  },
  /*::[*/
  2090: {
    /* n:"BrtEndTimelineEx", */
    T: -1
  },
  /*::[*/
  2091: {
    /* n:"BrtWorkBookPr15" */
  },
  /*::[*/
  2092: {
    /* n:"BrtPCDH15" */
  },
  /*::[*/
  2093: {
    /* n:"BrtBeginTimelineStyle", */
    T: 1
  },
  /*::[*/
  2094: {
    /* n:"BrtEndTimelineStyle", */
    T: -1
  },
  /*::[*/
  2095: {
    /* n:"BrtTimelineStyleElement" */
  },
  /*::[*/
  2096: {
    /* n:"BrtBeginTimelineStylesheetExt15", */
    T: 1
  },
  /*::[*/
  2097: {
    /* n:"BrtEndTimelineStylesheetExt15", */
    T: -1
  },
  /*::[*/
  2098: {
    /* n:"BrtBeginTimelineStyles", */
    T: 1
  },
  /*::[*/
  2099: {
    /* n:"BrtEndTimelineStyles", */
    T: -1
  },
  /*::[*/
  2100: {
    /* n:"BrtBeginTimelineStyleElements", */
    T: 1
  },
  /*::[*/
  2101: {
    /* n:"BrtEndTimelineStyleElements", */
    T: -1
  },
  /*::[*/
  2102: {
    /* n:"BrtDxf15" */
  },
  /*::[*/
  2103: {
    /* n:"BrtBeginDxfs15", */
    T: 1
  },
  /*::[*/
  2104: {
    /* n:"BrtEndDxfs15", */
    T: -1
  },
  /*::[*/
  2105: {
    /* n:"BrtSlicerCacheHideItemsWithNoData" */
  },
  /*::[*/
  2106: {
    /* n:"BrtBeginItemUniqueNames", */
    T: 1
  },
  /*::[*/
  2107: {
    /* n:"BrtEndItemUniqueNames", */
    T: -1
  },
  /*::[*/
  2108: {
    /* n:"BrtItemUniqueName" */
  },
  /*::[*/
  2109: {
    /* n:"BrtBeginExtConn15", */
    T: 1
  },
  /*::[*/
  2110: {
    /* n:"BrtEndExtConn15", */
    T: -1
  },
  /*::[*/
  2111: {
    /* n:"BrtBeginOledbPr15", */
    T: 1
  },
  /*::[*/
  2112: {
    /* n:"BrtEndOledbPr15", */
    T: -1
  },
  /*::[*/
  2113: {
    /* n:"BrtBeginDataFeedPr15", */
    T: 1
  },
  /*::[*/
  2114: {
    /* n:"BrtEndDataFeedPr15", */
    T: -1
  },
  /*::[*/
  2115: {
    /* n:"BrtTextPr15" */
  },
  /*::[*/
  2116: {
    /* n:"BrtRangePr15" */
  },
  /*::[*/
  2117: {
    /* n:"BrtDbCommand15" */
  },
  /*::[*/
  2118: {
    /* n:"BrtBeginDbTables15", */
    T: 1
  },
  /*::[*/
  2119: {
    /* n:"BrtEndDbTables15", */
    T: -1
  },
  /*::[*/
  2120: {
    /* n:"BrtDbTable15" */
  },
  /*::[*/
  2121: {
    /* n:"BrtBeginDataModel", */
    T: 1
  },
  /*::[*/
  2122: {
    /* n:"BrtEndDataModel", */
    T: -1
  },
  /*::[*/
  2123: {
    /* n:"BrtBeginModelTables", */
    T: 1
  },
  /*::[*/
  2124: {
    /* n:"BrtEndModelTables", */
    T: -1
  },
  /*::[*/
  2125: {
    /* n:"BrtModelTable" */
  },
  /*::[*/
  2126: {
    /* n:"BrtBeginModelRelationships", */
    T: 1
  },
  /*::[*/
  2127: {
    /* n:"BrtEndModelRelationships", */
    T: -1
  },
  /*::[*/
  2128: {
    /* n:"BrtModelRelationship" */
  },
  /*::[*/
  2129: {
    /* n:"BrtBeginECTxtWiz15", */
    T: 1
  },
  /*::[*/
  2130: {
    /* n:"BrtEndECTxtWiz15", */
    T: -1
  },
  /*::[*/
  2131: {
    /* n:"BrtBeginECTWFldInfoLst15", */
    T: 1
  },
  /*::[*/
  2132: {
    /* n:"BrtEndECTWFldInfoLst15", */
    T: -1
  },
  /*::[*/
  2133: {
    /* n:"BrtBeginECTWFldInfo15", */
    T: 1
  },
  /*::[*/
  2134: {
    /* n:"BrtFieldListActiveItem" */
  },
  /*::[*/
  2135: {
    /* n:"BrtPivotCacheIdVersion" */
  },
  /*::[*/
  2136: {
    /* n:"BrtSXDI15" */
  },
  /*::[*/
  2137: {
    /* n:"BrtBeginModelTimeGroupings", */
    T: 1
  },
  /*::[*/
  2138: {
    /* n:"BrtEndModelTimeGroupings", */
    T: -1
  },
  /*::[*/
  2139: {
    /* n:"BrtBeginModelTimeGrouping", */
    T: 1
  },
  /*::[*/
  2140: {
    /* n:"BrtEndModelTimeGrouping", */
    T: -1
  },
  /*::[*/
  2141: {
    /* n:"BrtModelTimeGroupingCalcCol" */
  },
  /*::[*/
  3072: {
    /* n:"BrtUid" */
  },
  /*::[*/
  3073: {
    /* n:"BrtRevisionPtr" */
  },
  /*::[*/
  4096: {
    /* n:"BrtBeginDynamicArrayPr", */
    T: 1
  },
  /*::[*/
  4097: {
    /* n:"BrtEndDynamicArrayPr", */
    T: -1
  },
  /*::[*/
  5002: {
    /* n:"BrtBeginRichValueBlock", */
    T: 1
  },
  /*::[*/
  5003: {
    /* n:"BrtEndRichValueBlock", */
    T: -1
  },
  /*::[*/
  5081: {
    /* n:"BrtBeginRichFilters", */
    T: 1
  },
  /*::[*/
  5082: {
    /* n:"BrtEndRichFilters", */
    T: -1
  },
  /*::[*/
  5083: {
    /* n:"BrtRichFilter" */
  },
  /*::[*/
  5084: {
    /* n:"BrtBeginRichFilterColumn", */
    T: 1
  },
  /*::[*/
  5085: {
    /* n:"BrtEndRichFilterColumn", */
    T: -1
  },
  /*::[*/
  5086: {
    /* n:"BrtBeginCustomRichFilters", */
    T: 1
  },
  /*::[*/
  5087: {
    /* n:"BrtEndCustomRichFilters", */
    T: -1
  },
  /*::[*/
  5088: {
    /* n:"BrtCustomRichFilter" */
  },
  /*::[*/
  5089: {
    /* n:"BrtTop10RichFilter" */
  },
  /*::[*/
  5090: {
    /* n:"BrtDynamicRichFilter" */
  },
  /*::[*/
  5092: {
    /* n:"BrtBeginRichSortCondition", */
    T: 1
  },
  /*::[*/
  5093: {
    /* n:"BrtEndRichSortCondition", */
    T: -1
  },
  /*::[*/
  5094: {
    /* n:"BrtRichFilterDateGroupItem" */
  },
  /*::[*/
  5095: {
    /* n:"BrtBeginCalcFeatures", */
    T: 1
  },
  /*::[*/
  5096: {
    /* n:"BrtEndCalcFeatures", */
    T: -1
  },
  /*::[*/
  5097: {
    /* n:"BrtCalcFeature" */
  },
  /*::[*/
  5099: {
    /* n:"BrtExternalLinksPr" */
  },
  /*::[*/
  65535: { n: "" }
};
var XLSRecordEnum = {
  /* [MS-XLS] 2.3 Record Enumeration 2021-08-17 */
  /*::[*/
  6: {
    /* n:"Formula", */
    f: parse_Formula
  },
  /*::[*/
  10: {
    /* n:"EOF", */
    f: parsenoop2
  },
  /*::[*/
  12: {
    /* n:"CalcCount", */
    f: parseuint16
  },
  //
  /*::[*/
  13: {
    /* n:"CalcMode", */
    f: parseuint16
  },
  //
  /*::[*/
  14: {
    /* n:"CalcPrecision", */
    f: parsebool
  },
  //
  /*::[*/
  15: {
    /* n:"CalcRefMode", */
    f: parsebool
  },
  //
  /*::[*/
  16: {
    /* n:"CalcDelta", */
    f: parse_Xnum
  },
  //
  /*::[*/
  17: {
    /* n:"CalcIter", */
    f: parsebool
  },
  //
  /*::[*/
  18: {
    /* n:"Protect", */
    f: parsebool
  },
  /*::[*/
  19: {
    /* n:"Password", */
    f: parseuint16
  },
  /*::[*/
  20: {
    /* n:"Header", */
    f: parse_XLHeaderFooter
  },
  /*::[*/
  21: {
    /* n:"Footer", */
    f: parse_XLHeaderFooter
  },
  /*::[*/
  23: {
    /* n:"ExternSheet", */
    f: parse_ExternSheet
  },
  /*::[*/
  24: {
    /* n:"Lbl", */
    f: parse_Lbl
  },
  /*::[*/
  25: {
    /* n:"WinProtect", */
    f: parsebool
  },
  /*::[*/
  26: {
    /* n:"VerticalPageBreaks", */
  },
  /*::[*/
  27: {
    /* n:"HorizontalPageBreaks", */
  },
  /*::[*/
  28: {
    /* n:"Note", */
    f: parse_Note
  },
  /*::[*/
  29: {
    /* n:"Selection", */
  },
  /*::[*/
  34: {
    /* n:"Date1904", */
    f: parsebool
  },
  /*::[*/
  35: {
    /* n:"ExternName", */
    f: parse_ExternName
  },
  /*::[*/
  38: {
    /* n:"LeftMargin", */
    f: parse_Xnum
  },
  // *
  /*::[*/
  39: {
    /* n:"RightMargin", */
    f: parse_Xnum
  },
  // *
  /*::[*/
  40: {
    /* n:"TopMargin", */
    f: parse_Xnum
  },
  // *
  /*::[*/
  41: {
    /* n:"BottomMargin", */
    f: parse_Xnum
  },
  // *
  /*::[*/
  42: {
    /* n:"PrintRowCol", */
    f: parsebool
  },
  /*::[*/
  43: {
    /* n:"PrintGrid", */
    f: parsebool
  },
  /*::[*/
  47: {
    /* n:"FilePass", */
    f: parse_FilePass
  },
  /*::[*/
  49: {
    /* n:"Font", */
    f: parse_Font
  },
  /*::[*/
  51: {
    /* n:"PrintSize", */
    f: parseuint16
  },
  /*::[*/
  60: {
    /* n:"Continue", */
  },
  /*::[*/
  61: {
    /* n:"Window1", */
    f: parse_Window1
  },
  /*::[*/
  64: {
    /* n:"Backup", */
    f: parsebool
  },
  /*::[*/
  65: {
    /* n:"Pane", */
    f: parse_Pane
  },
  /*::[*/
  66: {
    /* n:"CodePage", */
    f: parseuint16
  },
  /*::[*/
  77: {
    /* n:"Pls", */
  },
  /*::[*/
  80: {
    /* n:"DCon", */
  },
  /*::[*/
  81: {
    /* n:"DConRef", */
  },
  /*::[*/
  82: {
    /* n:"DConName", */
  },
  /*::[*/
  85: {
    /* n:"DefColWidth", */
    f: parseuint16
  },
  /*::[*/
  89: {
    /* n:"XCT", */
  },
  /*::[*/
  90: {
    /* n:"CRN", */
  },
  /*::[*/
  91: {
    /* n:"FileSharing", */
  },
  /*::[*/
  92: {
    /* n:"WriteAccess", */
    f: parse_WriteAccess
  },
  /*::[*/
  93: {
    /* n:"Obj", */
    f: parse_Obj
  },
  /*::[*/
  94: {
    /* n:"Uncalced", */
  },
  /*::[*/
  95: {
    /* n:"CalcSaveRecalc", */
    f: parsebool
  },
  //
  /*::[*/
  96: {
    /* n:"Template", */
  },
  /*::[*/
  97: {
    /* n:"Intl", */
  },
  /*::[*/
  99: {
    /* n:"ObjProtect", */
    f: parsebool
  },
  /*::[*/
  125: {
    /* n:"ColInfo", */
    f: parse_ColInfo
  },
  /*::[*/
  128: {
    /* n:"Guts", */
    f: parse_Guts
  },
  /*::[*/
  129: {
    /* n:"WsBool", */
    f: parse_WsBool
  },
  /*::[*/
  130: {
    /* n:"GridSet", */
    f: parseuint16
  },
  /*::[*/
  131: {
    /* n:"HCenter", */
    f: parsebool
  },
  /*::[*/
  132: {
    /* n:"VCenter", */
    f: parsebool
  },
  /*::[*/
  133: {
    /* n:"BoundSheet8", */
    f: parse_BoundSheet8
  },
  /*::[*/
  134: {
    /* n:"WriteProtect", */
  },
  /*::[*/
  140: {
    /* n:"Country", */
    f: parse_Country
  },
  /*::[*/
  141: {
    /* n:"HideObj", */
    f: parseuint16
  },
  /*::[*/
  144: {
    /* n:"Sort", */
  },
  /*::[*/
  146: {
    /* n:"Palette", */
    f: parse_Palette
  },
  /*::[*/
  151: {
    /* n:"Sync", */
  },
  /*::[*/
  152: {
    /* n:"LPr", */
  },
  /*::[*/
  153: {
    /* n:"DxGCol", */
  },
  /*::[*/
  154: {
    /* n:"FnGroupName", */
  },
  /*::[*/
  155: {
    /* n:"FilterMode", */
  },
  /*::[*/
  156: {
    /* n:"BuiltInFnGroupCount", */
    f: parseuint16
  },
  /*::[*/
  157: {
    /* n:"AutoFilterInfo", */
  },
  /*::[*/
  158: {
    /* n:"AutoFilter", */
  },
  /*::[*/
  160: {
    /* n:"Scl", */
    f: parse_Scl
  },
  /*::[*/
  161: {
    /* n:"Setup", */
    f: parse_Setup
  },
  /*::[*/
  174: {
    /* n:"ScenMan", */
  },
  /*::[*/
  175: {
    /* n:"SCENARIO", */
  },
  /*::[*/
  176: {
    /* n:"SxView", */
  },
  /*::[*/
  177: {
    /* n:"Sxvd", */
  },
  /*::[*/
  178: {
    /* n:"SXVI", */
  },
  /*::[*/
  180: {
    /* n:"SxIvd", */
  },
  /*::[*/
  181: {
    /* n:"SXLI", */
  },
  /*::[*/
  182: {
    /* n:"SXPI", */
  },
  /*::[*/
  184: {
    /* n:"DocRoute", */
  },
  /*::[*/
  185: {
    /* n:"RecipName", */
  },
  /*::[*/
  189: {
    /* n:"MulRk", */
    f: parse_MulRk
  },
  /*::[*/
  190: {
    /* n:"MulBlank", */
    f: parse_MulBlank
  },
  /*::[*/
  193: {
    /* n:"Mms", */
    f: parsenoop2
  },
  /*::[*/
  197: {
    /* n:"SXDI", */
  },
  /*::[*/
  198: {
    /* n:"SXDB", */
  },
  /*::[*/
  199: {
    /* n:"SXFDB", */
  },
  /*::[*/
  200: {
    /* n:"SXDBB", */
  },
  /*::[*/
  201: {
    /* n:"SXNum", */
  },
  /*::[*/
  202: {
    /* n:"SxBool", */
    f: parsebool
  },
  /*::[*/
  203: {
    /* n:"SxErr", */
  },
  /*::[*/
  204: {
    /* n:"SXInt", */
  },
  /*::[*/
  205: {
    /* n:"SXString", */
  },
  /*::[*/
  206: {
    /* n:"SXDtr", */
  },
  /*::[*/
  207: {
    /* n:"SxNil", */
  },
  /*::[*/
  208: {
    /* n:"SXTbl", */
  },
  /*::[*/
  209: {
    /* n:"SXTBRGIITM", */
  },
  /*::[*/
  210: {
    /* n:"SxTbpg", */
  },
  /*::[*/
  211: {
    /* n:"ObProj", */
  },
  /*::[*/
  213: {
    /* n:"SXStreamID", */
  },
  /*::[*/
  215: {
    /* n:"DBCell", */
  },
  /*::[*/
  216: {
    /* n:"SXRng", */
  },
  /*::[*/
  217: {
    /* n:"SxIsxoper", */
  },
  /*::[*/
  218: {
    /* n:"BookBool", */
    f: parseuint16
  },
  /*::[*/
  220: {
    /* n:"DbOrParamQry", */
  },
  /*::[*/
  221: {
    /* n:"ScenarioProtect", */
    f: parsebool
  },
  /*::[*/
  222: {
    /* n:"OleObjectSize", */
  },
  /*::[*/
  224: {
    /* n:"XF", */
    f: parse_XF
  },
  /*::[*/
  225: {
    /* n:"InterfaceHdr", */
    f: parse_InterfaceHdr
  },
  /*::[*/
  226: {
    /* n:"InterfaceEnd", */
    f: parsenoop2
  },
  /*::[*/
  227: {
    /* n:"SXVS", */
  },
  /*::[*/
  229: {
    /* n:"MergeCells", */
    f: parse_MergeCells
  },
  /*::[*/
  233: {
    /* n:"BkHim", */
  },
  /*::[*/
  235: {
    /* n:"MsoDrawingGroup", */
  },
  /*::[*/
  236: {
    /* n:"MsoDrawing", */
  },
  /*::[*/
  237: {
    /* n:"MsoDrawingSelection", */
  },
  /*::[*/
  239: {
    /* n:"PhoneticInfo", */
  },
  /*::[*/
  240: {
    /* n:"SxRule", */
  },
  /*::[*/
  241: {
    /* n:"SXEx", */
  },
  /*::[*/
  242: {
    /* n:"SxFilt", */
  },
  /*::[*/
  244: {
    /* n:"SxDXF", */
  },
  /*::[*/
  245: {
    /* n:"SxItm", */
  },
  /*::[*/
  246: {
    /* n:"SxName", */
  },
  /*::[*/
  247: {
    /* n:"SxSelect", */
  },
  /*::[*/
  248: {
    /* n:"SXPair", */
  },
  /*::[*/
  249: {
    /* n:"SxFmla", */
  },
  /*::[*/
  251: {
    /* n:"SxFormat", */
  },
  /*::[*/
  252: {
    /* n:"SST", */
    f: parse_SST
  },
  /*::[*/
  253: {
    /* n:"LabelSst", */
    f: parse_LabelSst
  },
  /*::[*/
  255: {
    /* n:"ExtSST", */
    f: parse_ExtSST
  },
  /*::[*/
  256: {
    /* n:"SXVDEx", */
  },
  /*::[*/
  259: {
    /* n:"SXFormula", */
  },
  /*::[*/
  290: {
    /* n:"SXDBEx", */
  },
  /*::[*/
  311: {
    /* n:"RRDInsDel", */
  },
  /*::[*/
  312: {
    /* n:"RRDHead", */
  },
  /*::[*/
  315: {
    /* n:"RRDChgCell", */
  },
  /*::[*/
  317: {
    /* n:"RRTabId", */
    f: parseuint16a
  },
  /*::[*/
  318: {
    /* n:"RRDRenSheet", */
  },
  /*::[*/
  319: {
    /* n:"RRSort", */
  },
  /*::[*/
  320: {
    /* n:"RRDMove", */
  },
  /*::[*/
  330: {
    /* n:"RRFormat", */
  },
  /*::[*/
  331: {
    /* n:"RRAutoFmt", */
  },
  /*::[*/
  333: {
    /* n:"RRInsertSh", */
  },
  /*::[*/
  334: {
    /* n:"RRDMoveBegin", */
  },
  /*::[*/
  335: {
    /* n:"RRDMoveEnd", */
  },
  /*::[*/
  336: {
    /* n:"RRDInsDelBegin", */
  },
  /*::[*/
  337: {
    /* n:"RRDInsDelEnd", */
  },
  /*::[*/
  338: {
    /* n:"RRDConflict", */
  },
  /*::[*/
  339: {
    /* n:"RRDDefName", */
  },
  /*::[*/
  340: {
    /* n:"RRDRstEtxp", */
  },
  /*::[*/
  351: {
    /* n:"LRng", */
  },
  /*::[*/
  352: {
    /* n:"UsesELFs", */
    f: parsebool
  },
  /*::[*/
  353: {
    /* n:"DSF", */
    f: parsenoop2
  },
  /*::[*/
  401: {
    /* n:"CUsr", */
  },
  /*::[*/
  402: {
    /* n:"CbUsr", */
  },
  /*::[*/
  403: {
    /* n:"UsrInfo", */
  },
  /*::[*/
  404: {
    /* n:"UsrExcl", */
  },
  /*::[*/
  405: {
    /* n:"FileLock", */
  },
  /*::[*/
  406: {
    /* n:"RRDInfo", */
  },
  /*::[*/
  407: {
    /* n:"BCUsrs", */
  },
  /*::[*/
  408: {
    /* n:"UsrChk", */
  },
  /*::[*/
  425: {
    /* n:"UserBView", */
  },
  /*::[*/
  426: {
    /* n:"UserSViewBegin", */
  },
  /*::[*/
  427: {
    /* n:"UserSViewEnd", */
  },
  /*::[*/
  428: {
    /* n:"RRDUserView", */
  },
  /*::[*/
  429: {
    /* n:"Qsi", */
  },
  /*::[*/
  430: {
    /* n:"SupBook", */
    f: parse_SupBook
  },
  /*::[*/
  431: {
    /* n:"Prot4Rev", */
    f: parsebool
  },
  /*::[*/
  432: {
    /* n:"CondFmt", */
  },
  /*::[*/
  433: {
    /* n:"CF", */
  },
  /*::[*/
  434: {
    /* n:"DVal", */
  },
  /*::[*/
  437: {
    /* n:"DConBin", */
  },
  /*::[*/
  438: {
    /* n:"TxO", */
    f: parse_TxO
  },
  /*::[*/
  439: {
    /* n:"RefreshAll", */
    f: parsebool
  },
  //
  /*::[*/
  440: {
    /* n:"HLink", */
    f: parse_HLink
  },
  /*::[*/
  441: {
    /* n:"Lel", */
  },
  /*::[*/
  442: {
    /* n:"CodeName", */
    f: parse_XLUnicodeString
  },
  /*::[*/
  443: {
    /* n:"SXFDBType", */
  },
  /*::[*/
  444: {
    /* n:"Prot4RevPass", */
    f: parseuint16
  },
  /*::[*/
  445: {
    /* n:"ObNoMacros", */
  },
  /*::[*/
  446: {
    /* n:"Dv", */
  },
  /*::[*/
  448: {
    /* n:"Excel9File", */
    f: parsenoop2
  },
  /*::[*/
  449: {
    /* n:"RecalcId", */
    f: parse_RecalcId,
    r: 2
  },
  /*::[*/
  450: {
    /* n:"EntExU2", */
    f: parsenoop2
  },
  /*::[*/
  512: {
    /* n:"Dimensions", */
    f: parse_Dimensions
  },
  /*::[*/
  513: {
    /* n:"Blank", */
    f: parse_Blank
  },
  /*::[*/
  515: {
    /* n:"Number", */
    f: parse_Number
  },
  /*::[*/
  516: {
    /* n:"Label", */
    f: parse_Label
  },
  /*::[*/
  517: {
    /* n:"BoolErr", */
    f: parse_BoolErr
  },
  /*::[*/
  519: {
    /* n:"String", */
    f: parse_String
  },
  /*::[*/
  520: {
    /* n:"Row", */
    f: parse_Row
  },
  /*::[*/
  523: {
    /* n:"Index", */
  },
  /*::[*/
  545: {
    /* n:"Array", */
    f: parse_Array
  },
  /*::[*/
  549: {
    /* n:"DefaultRowHeight", */
    f: parse_DefaultRowHeight
  },
  /*::[*/
  566: {
    /* n:"Table", */
  },
  /*::[*/
  574: {
    /* n:"Window2", */
    f: parse_Window2
  },
  /*::[*/
  638: {
    /* n:"RK", */
    f: parse_RK
  },
  /*::[*/
  659: {
    /* n:"Style", */
  },
  /*::[*/
  1048: {
    /* n:"BigName", */
  },
  /*::[*/
  1054: {
    /* n:"Format", */
    f: parse_Format
  },
  /*::[*/
  1084: {
    /* n:"ContinueBigName", */
  },
  /*::[*/
  1212: {
    /* n:"ShrFmla", */
    f: parse_ShrFmla
  },
  /*::[*/
  2048: {
    /* n:"HLinkTooltip", */
    f: parse_HLinkTooltip
  },
  /*::[*/
  2049: {
    /* n:"WebPub", */
  },
  /*::[*/
  2050: {
    /* n:"QsiSXTag", */
  },
  /*::[*/
  2051: {
    /* n:"DBQueryExt", */
  },
  /*::[*/
  2052: {
    /* n:"ExtString", */
  },
  /*::[*/
  2053: {
    /* n:"TxtQry", */
  },
  /*::[*/
  2054: {
    /* n:"Qsir", */
  },
  /*::[*/
  2055: {
    /* n:"Qsif", */
  },
  /*::[*/
  2056: {
    /* n:"RRDTQSIF", */
  },
  /*::[*/
  2057: {
    /* n:"BOF", */
    f: parse_BOF
  },
  /*::[*/
  2058: {
    /* n:"OleDbConn", */
  },
  /*::[*/
  2059: {
    /* n:"WOpt", */
  },
  /*::[*/
  2060: {
    /* n:"SXViewEx", */
  },
  /*::[*/
  2061: {
    /* n:"SXTH", */
  },
  /*::[*/
  2062: {
    /* n:"SXPIEx", */
  },
  /*::[*/
  2063: {
    /* n:"SXVDTEx", */
  },
  /*::[*/
  2064: {
    /* n:"SXViewEx9", */
  },
  /*::[*/
  2066: {
    /* n:"ContinueFrt", */
  },
  /*::[*/
  2067: {
    /* n:"RealTimeData", */
  },
  /*::[*/
  2128: {
    /* n:"ChartFrtInfo", */
  },
  /*::[*/
  2129: {
    /* n:"FrtWrapper", */
  },
  /*::[*/
  2130: {
    /* n:"StartBlock", */
  },
  /*::[*/
  2131: {
    /* n:"EndBlock", */
  },
  /*::[*/
  2132: {
    /* n:"StartObject", */
  },
  /*::[*/
  2133: {
    /* n:"EndObject", */
  },
  /*::[*/
  2134: {
    /* n:"CatLab", */
  },
  /*::[*/
  2135: {
    /* n:"YMult", */
  },
  /*::[*/
  2136: {
    /* n:"SXViewLink", */
  },
  /*::[*/
  2137: {
    /* n:"PivotChartBits", */
  },
  /*::[*/
  2138: {
    /* n:"FrtFontList", */
  },
  /*::[*/
  2146: {
    /* n:"SheetExt", */
  },
  /*::[*/
  2147: {
    /* n:"BookExt", */
    r: 12
  },
  /*::[*/
  2148: {
    /* n:"SXAddl", */
  },
  /*::[*/
  2149: {
    /* n:"CrErr", */
  },
  /*::[*/
  2150: {
    /* n:"HFPicture", */
  },
  /*::[*/
  2151: {
    /* n:"FeatHdr", */
    f: parsenoop2
  },
  /*::[*/
  2152: {
    /* n:"Feat", */
  },
  /*::[*/
  2154: {
    /* n:"DataLabExt", */
  },
  /*::[*/
  2155: {
    /* n:"DataLabExtContents", */
  },
  /*::[*/
  2156: {
    /* n:"CellWatch", */
  },
  /*::[*/
  2161: {
    /* n:"FeatHdr11", */
  },
  /*::[*/
  2162: {
    /* n:"Feature11", */
  },
  /*::[*/
  2164: {
    /* n:"DropDownObjIds", */
  },
  /*::[*/
  2165: {
    /* n:"ContinueFrt11", */
  },
  /*::[*/
  2166: {
    /* n:"DConn", */
  },
  /*::[*/
  2167: {
    /* n:"List12", */
  },
  /*::[*/
  2168: {
    /* n:"Feature12", */
  },
  /*::[*/
  2169: {
    /* n:"CondFmt12", */
  },
  /*::[*/
  2170: {
    /* n:"CF12", */
  },
  /*::[*/
  2171: {
    /* n:"CFEx", */
  },
  /*::[*/
  2172: {
    /* n:"XFCRC", */
    f: parse_XFCRC,
    r: 12
  },
  /*::[*/
  2173: {
    /* n:"XFExt", */
    f: parse_XFExt,
    r: 12
  },
  /*::[*/
  2174: {
    /* n:"AutoFilter12", */
  },
  /*::[*/
  2175: {
    /* n:"ContinueFrt12", */
  },
  /*::[*/
  2180: {
    /* n:"MDTInfo", */
  },
  /*::[*/
  2181: {
    /* n:"MDXStr", */
  },
  /*::[*/
  2182: {
    /* n:"MDXTuple", */
  },
  /*::[*/
  2183: {
    /* n:"MDXSet", */
  },
  /*::[*/
  2184: {
    /* n:"MDXProp", */
  },
  /*::[*/
  2185: {
    /* n:"MDXKPI", */
  },
  /*::[*/
  2186: {
    /* n:"MDB", */
  },
  /*::[*/
  2187: {
    /* n:"PLV", */
  },
  /*::[*/
  2188: {
    /* n:"Compat12", */
    f: parsebool,
    r: 12
  },
  /*::[*/
  2189: {
    /* n:"DXF", */
  },
  /*::[*/
  2190: {
    /* n:"TableStyles", */
    r: 12
  },
  /*::[*/
  2191: {
    /* n:"TableStyle", */
  },
  /*::[*/
  2192: {
    /* n:"TableStyleElement", */
  },
  /*::[*/
  2194: {
    /* n:"StyleExt", */
  },
  /*::[*/
  2195: {
    /* n:"NamePublish", */
  },
  /*::[*/
  2196: {
    /* n:"NameCmt", */
    f: parse_NameCmt,
    r: 12
  },
  /*::[*/
  2197: {
    /* n:"SortData", */
  },
  /*::[*/
  2198: {
    /* n:"Theme", */
    f: parse_Theme,
    r: 12
  },
  /*::[*/
  2199: {
    /* n:"GUIDTypeLib", */
  },
  /*::[*/
  2200: {
    /* n:"FnGrp12", */
  },
  /*::[*/
  2201: {
    /* n:"NameFnGrp12", */
  },
  /*::[*/
  2202: {
    /* n:"MTRSettings", */
    f: parse_MTRSettings,
    r: 12
  },
  /*::[*/
  2203: {
    /* n:"CompressPictures", */
    f: parsenoop2
  },
  /*::[*/
  2204: {
    /* n:"HeaderFooter", */
  },
  /*::[*/
  2205: {
    /* n:"CrtLayout12", */
  },
  /*::[*/
  2206: {
    /* n:"CrtMlFrt", */
  },
  /*::[*/
  2207: {
    /* n:"CrtMlFrtContinue", */
  },
  /*::[*/
  2211: {
    /* n:"ForceFullCalculation", */
    f: parse_ForceFullCalculation
  },
  /*::[*/
  2212: {
    /* n:"ShapePropsStream", */
  },
  /*::[*/
  2213: {
    /* n:"TextPropsStream", */
  },
  /*::[*/
  2214: {
    /* n:"RichTextStream", */
  },
  /*::[*/
  2215: {
    /* n:"CrtLayout12A", */
  },
  /*::[*/
  4097: {
    /* n:"Units", */
  },
  /*::[*/
  4098: {
    /* n:"Chart", */
  },
  /*::[*/
  4099: {
    /* n:"Series", */
  },
  /*::[*/
  4102: {
    /* n:"DataFormat", */
  },
  /*::[*/
  4103: {
    /* n:"LineFormat", */
  },
  /*::[*/
  4105: {
    /* n:"MarkerFormat", */
  },
  /*::[*/
  4106: {
    /* n:"AreaFormat", */
  },
  /*::[*/
  4107: {
    /* n:"PieFormat", */
  },
  /*::[*/
  4108: {
    /* n:"AttachedLabel", */
  },
  /*::[*/
  4109: {
    /* n:"SeriesText", */
  },
  /*::[*/
  4116: {
    /* n:"ChartFormat", */
  },
  /*::[*/
  4117: {
    /* n:"Legend", */
  },
  /*::[*/
  4118: {
    /* n:"SeriesList", */
  },
  /*::[*/
  4119: {
    /* n:"Bar", */
  },
  /*::[*/
  4120: {
    /* n:"Line", */
  },
  /*::[*/
  4121: {
    /* n:"Pie", */
  },
  /*::[*/
  4122: {
    /* n:"Area", */
  },
  /*::[*/
  4123: {
    /* n:"Scatter", */
  },
  /*::[*/
  4124: {
    /* n:"CrtLine", */
  },
  /*::[*/
  4125: {
    /* n:"Axis", */
  },
  /*::[*/
  4126: {
    /* n:"Tick", */
  },
  /*::[*/
  4127: {
    /* n:"ValueRange", */
  },
  /*::[*/
  4128: {
    /* n:"CatSerRange", */
  },
  /*::[*/
  4129: {
    /* n:"AxisLine", */
  },
  /*::[*/
  4130: {
    /* n:"CrtLink", */
  },
  /*::[*/
  4132: {
    /* n:"DefaultText", */
  },
  /*::[*/
  4133: {
    /* n:"Text", */
  },
  /*::[*/
  4134: {
    /* n:"FontX", */
    f: parseuint16
  },
  /*::[*/
  4135: {
    /* n:"ObjectLink", */
  },
  /*::[*/
  4146: {
    /* n:"Frame", */
  },
  /*::[*/
  4147: {
    /* n:"Begin", */
  },
  /*::[*/
  4148: {
    /* n:"End", */
  },
  /*::[*/
  4149: {
    /* n:"PlotArea", */
  },
  /*::[*/
  4154: {
    /* n:"Chart3d", */
  },
  /*::[*/
  4156: {
    /* n:"PicF", */
  },
  /*::[*/
  4157: {
    /* n:"DropBar", */
  },
  /*::[*/
  4158: {
    /* n:"Radar", */
  },
  /*::[*/
  4159: {
    /* n:"Surf", */
  },
  /*::[*/
  4160: {
    /* n:"RadarArea", */
  },
  /*::[*/
  4161: {
    /* n:"AxisParent", */
  },
  /*::[*/
  4163: {
    /* n:"LegendException", */
  },
  /*::[*/
  4164: {
    /* n:"ShtProps", */
    f: parse_ShtProps
  },
  /*::[*/
  4165: {
    /* n:"SerToCrt", */
  },
  /*::[*/
  4166: {
    /* n:"AxesUsed", */
  },
  /*::[*/
  4168: {
    /* n:"SBaseRef", */
  },
  /*::[*/
  4170: {
    /* n:"SerParent", */
  },
  /*::[*/
  4171: {
    /* n:"SerAuxTrend", */
  },
  /*::[*/
  4174: {
    /* n:"IFmtRecord", */
  },
  /*::[*/
  4175: {
    /* n:"Pos", */
  },
  /*::[*/
  4176: {
    /* n:"AlRuns", */
  },
  /*::[*/
  4177: {
    /* n:"BRAI", */
  },
  /*::[*/
  4187: {
    /* n:"SerAuxErrBar", */
  },
  /*::[*/
  4188: {
    /* n:"ClrtClient", */
    f: parse_ClrtClient
  },
  /*::[*/
  4189: {
    /* n:"SerFmt", */
  },
  /*::[*/
  4191: {
    /* n:"Chart3DBarShape", */
  },
  /*::[*/
  4192: {
    /* n:"Fbi", */
  },
  /*::[*/
  4193: {
    /* n:"BopPop", */
  },
  /*::[*/
  4194: {
    /* n:"AxcExt", */
  },
  /*::[*/
  4195: {
    /* n:"Dat", */
  },
  /*::[*/
  4196: {
    /* n:"PlotGrowth", */
  },
  /*::[*/
  4197: {
    /* n:"SIIndex", */
  },
  /*::[*/
  4198: {
    /* n:"GelFrame", */
  },
  /*::[*/
  4199: {
    /* n:"BopPopCustom", */
  },
  /*::[*/
  4200: {
    /* n:"Fbi2", */
  },
  /*::[*/
  0: {
    /* n:"Dimensions", */
    f: parse_Dimensions
  },
  /*::[*/
  1: {
    /* n:"BIFF2BLANK", */
  },
  /*::[*/
  2: {
    /* n:"BIFF2INT", */
    f: parse_BIFF2INT
  },
  /*::[*/
  3: {
    /* n:"BIFF2NUM", */
    f: parse_BIFF2NUM
  },
  /*::[*/
  4: {
    /* n:"BIFF2STR", */
    f: parse_BIFF2STR
  },
  /*::[*/
  5: {
    /* n:"BoolErr", */
    f: parse_BoolErr
  },
  /*::[*/
  7: {
    /* n:"String", */
    f: parse_BIFF2STRING
  },
  /*::[*/
  8: {
    /* n:"BIFF2ROW", */
  },
  /*::[*/
  9: {
    /* n:"BOF", */
    f: parse_BOF
  },
  /*::[*/
  11: {
    /* n:"Index", */
  },
  /*::[*/
  22: {
    /* n:"ExternCount", */
    f: parseuint16
  },
  /*::[*/
  30: {
    /* n:"BIFF2FORMAT", */
    f: parse_BIFF2Format
  },
  /*::[*/
  31: {
    /* n:"BIFF2FMTCNT", */
  },
  /* 16-bit cnt of BIFF2FORMAT records */
  /*::[*/
  32: {
    /* n:"BIFF2COLINFO", */
  },
  /*::[*/
  33: {
    /* n:"Array", */
    f: parse_Array
  },
  /*::[*/
  36: {
    /* n:"COLWIDTH", */
  },
  /*::[*/
  37: {
    /* n:"DefaultRowHeight", */
    f: parse_DefaultRowHeight
  },
  // 0x2c ??
  // 0x2d ??
  // 0x2e ??
  // 0x30 FONTCOUNT: number of fonts
  /*::[*/
  50: {
    /* n:"BIFF2FONTXTRA", */
    f: parse_BIFF2FONTXTRA
  },
  // 0x35: INFOOPTS
  // 0x36: TABLE (BIFF2 only)
  // 0x37: TABLE2 (BIFF2 only)
  // 0x38: WNDESK
  // 0x39 ??
  // 0x3a: BEGINPREF
  // 0x3b: ENDPREF
  /*::[*/
  62: {
    /* n:"BIFF2WINDOW2", */
  },
  // 0x3f ??
  // 0x46: SHOWSCROLL
  // 0x47: SHOWFORMULA
  // 0x48: STATUSBAR
  // 0x49: SHORTMENUS
  // 0x4A:
  // 0x4B:
  // 0x4C:
  // 0x4E:
  // 0x4F:
  // 0x58: TOOLBAR (BIFF3)
  /* - - - */
  /*::[*/
  52: {
    /* n:"DDEObjName", */
  },
  /*::[*/
  67: {
    /* n:"BIFF2XF", */
  },
  /*::[*/
  68: {
    /* n:"BIFF2XFINDEX", */
    f: parseuint16
  },
  /*::[*/
  69: {
    /* n:"BIFF2FONTCLR", */
  },
  /*::[*/
  86: {
    /* n:"BIFF4FMTCNT", */
  },
  /* 16-bit cnt, similar to BIFF2 */
  /*::[*/
  126: {
    /* n:"RK", */
  },
  /* Not necessarily same as 0x027e */
  /*::[*/
  127: {
    /* n:"ImData", */
    f: parse_ImData
  },
  /*::[*/
  135: {
    /* n:"Addin", */
  },
  /*::[*/
  136: {
    /* n:"Edg", */
  },
  /*::[*/
  137: {
    /* n:"Pub", */
  },
  // 0x8A
  // 0x8B LH: alternate menu key flag (BIFF3/4)
  // 0x8E
  // 0x8F
  /*::[*/
  145: {
    /* n:"Sub", */
  },
  // 0x93 STYLE
  /*::[*/
  148: {
    /* n:"LHRecord", */
  },
  /*::[*/
  149: {
    /* n:"LHNGraph", */
  },
  /*::[*/
  150: {
    /* n:"Sound", */
  },
  // 0xA2 FNPROTO: function prototypes (BIFF4)
  // 0xA3
  // 0xA8
  /*::[*/
  169: {
    /* n:"CoordList", */
  },
  /*::[*/
  171: {
    /* n:"GCW", */
  },
  /*::[*/
  188: {
    /* n:"ShrFmla", */
  },
  /* Not necessarily same as 0x04bc */
  /*::[*/
  191: {
    /* n:"ToolbarHdr", */
  },
  /*::[*/
  192: {
    /* n:"ToolbarEnd", */
  },
  /*::[*/
  194: {
    /* n:"AddMenu", */
  },
  /*::[*/
  195: {
    /* n:"DelMenu", */
  },
  /*::[*/
  214: {
    /* n:"RString", */
    f: parse_RString
  },
  /*::[*/
  223: {
    /* n:"UDDesc", */
  },
  /*::[*/
  234: {
    /* n:"TabIdConf", */
  },
  /*::[*/
  354: {
    /* n:"XL5Modify", */
  },
  /*::[*/
  421: {
    /* n:"FileSharing2", */
  },
  /*::[*/
  518: {
    /* n:"Formula", */
    f: parse_Formula
  },
  /*::[*/
  521: {
    /* n:"BOF", */
    f: parse_BOF
  },
  /*::[*/
  536: {
    /* n:"Lbl", */
    f: parse_Lbl
  },
  /*::[*/
  547: {
    /* n:"ExternName", */
    f: parse_ExternName
  },
  /*::[*/
  561: {
    /* n:"Font", */
  },
  /*::[*/
  579: {
    /* n:"BIFF3XF", */
  },
  /*::[*/
  1030: {
    /* n:"Formula", */
    f: parse_Formula
  },
  /*::[*/
  1033: {
    /* n:"BOF", */
    f: parse_BOF
  },
  /*::[*/
  1091: {
    /* n:"BIFF4XF", */
  },
  /*::[*/
  2157: {
    /* n:"FeatInfo", */
  },
  /*::[*/
  2163: {
    /* n:"FeatInfo11", */
  },
  /*::[*/
  2177: {
    /* n:"SXAddl12", */
  },
  /*::[*/
  2240: {
    /* n:"AutoWebPub", */
  },
  /*::[*/
  2241: {
    /* n:"ListObj", */
  },
  /*::[*/
  2242: {
    /* n:"ListField", */
  },
  /*::[*/
  2243: {
    /* n:"ListDV", */
  },
  /*::[*/
  2244: {
    /* n:"ListCondFmt", */
  },
  /*::[*/
  2245: {
    /* n:"ListCF", */
  },
  /*::[*/
  2246: {
    /* n:"FMQry", */
  },
  /*::[*/
  2247: {
    /* n:"FMSQry", */
  },
  /*::[*/
  2248: {
    /* n:"PLV", */
  },
  /*::[*/
  2249: {
    /* n:"LnExt", */
  },
  /*::[*/
  2250: {
    /* n:"MkrExt", */
  },
  /*::[*/
  2251: {
    /* n:"CrtCoopt", */
  },
  /*::[*/
  2262: {
    /* n:"FRTArchId$", */
    r: 12
  },
  /*::[*/
  29282: {}
};
function write_biff_rec(ba, type, payload, length) {
  var t2 = type;
  if (isNaN(t2)) return;
  var len = (payload || []).length || 0;
  var o = ba.next(4);
  o.write_shift(2, t2);
  o.write_shift(2, len);
  if (
    /*:: len != null &&*/
    len > 0 && is_buf(payload)
  ) ba.push(payload);
}
function html_to_sheet(str, _opts) {
  var opts = _opts || {};
  var ws = opts.dense ? [] : {};
  str = str.replace(/<!--.*?-->/g, "");
  var mtch = str.match(/<table/i);
  if (!mtch) throw new Error("Invalid HTML: could not find <table>");
  var mtch2 = str.match(/<\/table/i);
  var i = mtch.index, j = mtch2 && mtch2.index || str.length;
  var rows = split_regex(str.slice(i, j), /(:?<tr[^>]*>)/i, "<tr>");
  var R2 = -1, C2 = 0, RS = 0, CS = 0;
  var range = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } };
  var merges = [];
  for (i = 0; i < rows.length; ++i) {
    var row = rows[i].trim();
    var hd2 = row.slice(0, 3).toLowerCase();
    if (hd2 == "<tr") {
      ++R2;
      if (opts.sheetRows && opts.sheetRows <= R2) {
        --R2;
        break;
      }
      C2 = 0;
      continue;
    }
    if (hd2 != "<td" && hd2 != "<th") continue;
    var cells = row.split(/<\/t[dh]>/i);
    for (j = 0; j < cells.length; ++j) {
      var cell = cells[j].trim();
      if (!cell.match(/<t[dh]/i)) continue;
      var m2 = cell, cc2 = 0;
      while (m2.charAt(0) == "<" && (cc2 = m2.indexOf(">")) > -1) m2 = m2.slice(cc2 + 1);
      for (var midx = 0; midx < merges.length; ++midx) {
        var _merge = merges[midx];
        if (_merge.s.c == C2 && _merge.s.r < R2 && R2 <= _merge.e.r) {
          C2 = _merge.e.c + 1;
          midx = -1;
        }
      }
      var tag = parsexmltag(cell.slice(0, cell.indexOf(">")));
      CS = tag.colspan ? +tag.colspan : 1;
      if ((RS = +tag.rowspan) > 1 || CS > 1) merges.push({ s: { r: R2, c: C2 }, e: { r: R2 + (RS || 1) - 1, c: C2 + CS - 1 } });
      var _t = tag.t || tag["data-t"] || "";
      if (!m2.length) {
        C2 += CS;
        continue;
      }
      m2 = htmldecode(m2);
      if (range.s.r > R2) range.s.r = R2;
      if (range.e.r < R2) range.e.r = R2;
      if (range.s.c > C2) range.s.c = C2;
      if (range.e.c < C2) range.e.c = C2;
      if (!m2.length) {
        C2 += CS;
        continue;
      }
      var o = { t: "s", v: m2 };
      if (opts.raw || !m2.trim().length || _t == "s") ;
      else if (m2 === "TRUE") o = { t: "b", v: true };
      else if (m2 === "FALSE") o = { t: "b", v: false };
      else if (!isNaN(fuzzynum(m2))) o = { t: "n", v: fuzzynum(m2) };
      else if (!isNaN(fuzzydate(m2).getDate())) {
        o = { t: "d", v: parseDate(m2) };
        if (!opts.cellDates) o = { t: "n", v: datenum(o.v) };
        o.z = opts.dateNF || table_fmt[14];
      }
      if (opts.dense) {
        if (!ws[R2]) ws[R2] = [];
        ws[R2][C2] = o;
      } else ws[encode_cell({ r: R2, c: C2 })] = o;
      C2 += CS;
    }
  }
  ws["!ref"] = encode_range(range);
  if (merges.length) ws["!merges"] = merges;
  return ws;
}
function make_html_row(ws, r2, R2, o) {
  var M2 = ws["!merges"] || [];
  var oo = [];
  for (var C2 = r2.s.c; C2 <= r2.e.c; ++C2) {
    var RS = 0, CS = 0;
    for (var j = 0; j < M2.length; ++j) {
      if (M2[j].s.r > R2 || M2[j].s.c > C2) continue;
      if (M2[j].e.r < R2 || M2[j].e.c < C2) continue;
      if (M2[j].s.r < R2 || M2[j].s.c < C2) {
        RS = -1;
        break;
      }
      RS = M2[j].e.r - M2[j].s.r + 1;
      CS = M2[j].e.c - M2[j].s.c + 1;
      break;
    }
    if (RS < 0) continue;
    var coord = encode_cell({ r: R2, c: C2 });
    var cell = o.dense ? (ws[R2] || [])[C2] : ws[coord];
    var w2 = cell && cell.v != null && (cell.h || escapehtml(cell.w || (format_cell(cell), cell.w) || "")) || "";
    var sp = {};
    if (RS > 1) sp.rowspan = RS;
    if (CS > 1) sp.colspan = CS;
    if (o.editable) w2 = '<span contenteditable="true">' + w2 + "</span>";
    else if (cell) {
      sp["data-t"] = cell && cell.t || "z";
      if (cell.v != null) sp["data-v"] = cell.v;
      if (cell.z != null) sp["data-z"] = cell.z;
      if (cell.l && (cell.l.Target || "#").charAt(0) != "#") w2 = '<a href="' + cell.l.Target + '">' + w2 + "</a>";
    }
    sp.id = (o.id || "sjs") + "-" + coord;
    oo.push(writextag("td", w2, sp));
  }
  var preamble = "<tr>";
  return preamble + oo.join("") + "</tr>";
}
var HTML_BEGIN = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>';
var HTML_END = "</body></html>";
function html_to_workbook(str, opts) {
  var mtch = str.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
  if (!mtch || mtch.length == 0) throw new Error("Invalid HTML: could not find <table>");
  if (mtch.length == 1) return sheet_to_workbook(html_to_sheet(mtch[0], opts), opts);
  var wb2 = book_new();
  mtch.forEach(function(s, idx) {
    book_append_sheet(wb2, html_to_sheet(s, opts), "Sheet" + (idx + 1));
  });
  return wb2;
}
function make_html_preamble(ws, R2, o) {
  var out = [];
  return out.join("") + "<table" + (o && o.id ? ' id="' + o.id + '"' : "") + ">";
}
function sheet_to_html(ws, opts) {
  var o = opts || {};
  var header = o.header != null ? o.header : HTML_BEGIN;
  var footer = o.footer != null ? o.footer : HTML_END;
  var out = [header];
  var r2 = decode_range(ws["!ref"]);
  o.dense = Array.isArray(ws);
  out.push(make_html_preamble(ws, r2, o));
  for (var R2 = r2.s.r; R2 <= r2.e.r; ++R2) out.push(make_html_row(ws, r2, R2, o));
  out.push("</table>" + footer);
  return out.join("");
}
function sheet_add_dom(ws, table, _opts) {
  var opts = _opts || {};
  var or_R = 0, or_C = 0;
  if (opts.origin != null) {
    if (typeof opts.origin == "number") or_R = opts.origin;
    else {
      var _origin = typeof opts.origin == "string" ? decode_cell(opts.origin) : opts.origin;
      or_R = _origin.r;
      or_C = _origin.c;
    }
  }
  var rows = table.getElementsByTagName("tr");
  var sheetRows = Math.min(opts.sheetRows || 1e7, rows.length);
  var range = { s: { r: 0, c: 0 }, e: { r: or_R, c: or_C } };
  if (ws["!ref"]) {
    var _range = decode_range(ws["!ref"]);
    range.s.r = Math.min(range.s.r, _range.s.r);
    range.s.c = Math.min(range.s.c, _range.s.c);
    range.e.r = Math.max(range.e.r, _range.e.r);
    range.e.c = Math.max(range.e.c, _range.e.c);
    if (or_R == -1) range.e.r = or_R = _range.e.r + 1;
  }
  var merges = [], midx = 0;
  var rowinfo = ws["!rows"] || (ws["!rows"] = []);
  var _R = 0, R2 = 0, _C = 0, C2 = 0, RS = 0, CS = 0;
  if (!ws["!cols"]) ws["!cols"] = [];
  for (; _R < rows.length && R2 < sheetRows; ++_R) {
    var row = rows[_R];
    if (is_dom_element_hidden(row)) {
      if (opts.display) continue;
      rowinfo[R2] = { hidden: true };
    }
    var elts = row.children;
    for (_C = C2 = 0; _C < elts.length; ++_C) {
      var elt = elts[_C];
      if (opts.display && is_dom_element_hidden(elt)) continue;
      var v2 = elt.hasAttribute("data-v") ? elt.getAttribute("data-v") : elt.hasAttribute("v") ? elt.getAttribute("v") : htmldecode(elt.innerHTML);
      var z2 = elt.getAttribute("data-z") || elt.getAttribute("z");
      for (midx = 0; midx < merges.length; ++midx) {
        var m2 = merges[midx];
        if (m2.s.c == C2 + or_C && m2.s.r < R2 + or_R && R2 + or_R <= m2.e.r) {
          C2 = m2.e.c + 1 - or_C;
          midx = -1;
        }
      }
      CS = +elt.getAttribute("colspan") || 1;
      if ((RS = +elt.getAttribute("rowspan") || 1) > 1 || CS > 1) merges.push({ s: { r: R2 + or_R, c: C2 + or_C }, e: { r: R2 + or_R + (RS || 1) - 1, c: C2 + or_C + (CS || 1) - 1 } });
      var o = { t: "s", v: v2 };
      var _t = elt.getAttribute("data-t") || elt.getAttribute("t") || "";
      if (v2 != null) {
        if (v2.length == 0) o.t = _t || "z";
        else if (opts.raw || v2.trim().length == 0 || _t == "s") ;
        else if (v2 === "TRUE") o = { t: "b", v: true };
        else if (v2 === "FALSE") o = { t: "b", v: false };
        else if (!isNaN(fuzzynum(v2))) o = { t: "n", v: fuzzynum(v2) };
        else if (!isNaN(fuzzydate(v2).getDate())) {
          o = { t: "d", v: parseDate(v2) };
          if (!opts.cellDates) o = { t: "n", v: datenum(o.v) };
          o.z = opts.dateNF || table_fmt[14];
        }
      }
      if (o.z === void 0 && z2 != null) o.z = z2;
      var l2 = "", Aelts = elt.getElementsByTagName("A");
      if (Aelts && Aelts.length) {
        for (var Aelti = 0; Aelti < Aelts.length; ++Aelti) if (Aelts[Aelti].hasAttribute("href")) {
          l2 = Aelts[Aelti].getAttribute("href");
          if (l2.charAt(0) != "#") break;
        }
      }
      if (l2 && l2.charAt(0) != "#") o.l = { Target: l2 };
      if (opts.dense) {
        if (!ws[R2 + or_R]) ws[R2 + or_R] = [];
        ws[R2 + or_R][C2 + or_C] = o;
      } else ws[encode_cell({ c: C2 + or_C, r: R2 + or_R })] = o;
      if (range.e.c < C2 + or_C) range.e.c = C2 + or_C;
      C2 += CS;
    }
    ++R2;
  }
  if (merges.length) ws["!merges"] = (ws["!merges"] || []).concat(merges);
  range.e.r = Math.max(range.e.r, R2 - 1 + or_R);
  ws["!ref"] = encode_range(range);
  if (R2 >= sheetRows) ws["!fullref"] = encode_range((range.e.r = rows.length - _R + R2 - 1 + or_R, range));
  return ws;
}
function parse_dom_table(table, _opts) {
  var opts = _opts || {};
  var ws = opts.dense ? [] : {};
  return sheet_add_dom(ws, table, _opts);
}
function table_to_book(table, opts) {
  return sheet_to_workbook(parse_dom_table(table, opts), opts);
}
function is_dom_element_hidden(element) {
  var display = "";
  var get_computed_style = get_get_computed_style_function(element);
  if (get_computed_style) display = get_computed_style(element).getPropertyValue("display");
  if (!display) display = element.style && element.style.display;
  return display === "none";
}
function get_get_computed_style_function(element) {
  if (element.ownerDocument.defaultView && typeof element.ownerDocument.defaultView.getComputedStyle === "function") return element.ownerDocument.defaultView.getComputedStyle;
  if (typeof getComputedStyle === "function") return getComputedStyle;
  return null;
}
function parse_text_p(text) {
  var fixed = text.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function($$, $1) {
    return Array(parseInt($1, 10) + 1).join(" ");
  }).replace(/<text:tab[^>]*\/>/g, "	").replace(/<text:line-break\/>/g, "\n");
  var v2 = unescapexml(fixed.replace(/<[^>]*>/g, ""));
  return [v2];
}
var number_formats_ods = {
  /* ods name: [short ssf fmt, long ssf fmt] */
  day: ["d", "dd"],
  month: ["m", "mm"],
  year: ["y", "yy"],
  hours: ["h", "hh"],
  minutes: ["m", "mm"],
  seconds: ["s", "ss"],
  "am-pm": ["A/P", "AM/PM"],
  "day-of-week": ["ddd", "dddd"],
  era: ["e", "ee"],
  /* there is no native representation of LO "Q" format */
  quarter: ["\\Qm", 'm\\"th quarter"']
};
function parse_content_xml(d, _opts) {
  var opts = _opts || {};
  var str = xlml_normalize(d);
  var state = [], tmp;
  var tag;
  var NFtag = { name: "" }, NF = "", pidx = 0;
  var sheetag;
  var rowtag;
  var Sheets = {}, SheetNames = [];
  var ws = opts.dense ? [] : {};
  var Rn, q2;
  var ctag = { value: "" };
  var textp = "", textpidx = 0;
  var textR = [];
  var R2 = -1, C2 = -1, range = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } };
  var row_ol = 0;
  var number_format_map = {};
  var merges = [], mrange = {}, mR = 0, mC = 0;
  var rowinfo = [], rowpeat = 1, colpeat = 1;
  var arrayf = [];
  var WB = { Names: [] };
  var atag = {};
  var _Ref = ["", ""];
  var comments = [], comment = {};
  var creator = "", creatoridx = 0;
  var isstub = false, intable = false;
  var i = 0;
  xlmlregex.lastIndex = 0;
  str = str.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
  while (Rn = xlmlregex.exec(str)) switch (Rn[3] = Rn[3].replace(/_.*$/, "")) {
    case "table":
    case "工作表":
      if (Rn[1] === "/") {
        if (range.e.c >= range.s.c && range.e.r >= range.s.r) ws["!ref"] = encode_range(range);
        else ws["!ref"] = "A1:A1";
        if (opts.sheetRows > 0 && opts.sheetRows <= range.e.r) {
          ws["!fullref"] = ws["!ref"];
          range.e.r = opts.sheetRows - 1;
          ws["!ref"] = encode_range(range);
        }
        if (merges.length) ws["!merges"] = merges;
        if (rowinfo.length) ws["!rows"] = rowinfo;
        sheetag.name = sheetag["名称"] || sheetag.name;
        if (typeof JSON !== "undefined") JSON.stringify(sheetag);
        SheetNames.push(sheetag.name);
        Sheets[sheetag.name] = ws;
        intable = false;
      } else if (Rn[0].charAt(Rn[0].length - 2) !== "/") {
        sheetag = parsexmltag(Rn[0], false);
        R2 = C2 = -1;
        range.s.r = range.s.c = 1e7;
        range.e.r = range.e.c = 0;
        ws = opts.dense ? [] : {};
        merges = [];
        rowinfo = [];
        intable = true;
      }
      break;
    case "table-row-group":
      if (Rn[1] === "/") --row_ol;
      else ++row_ol;
      break;
    case "table-row":
    case "行":
      if (Rn[1] === "/") {
        R2 += rowpeat;
        rowpeat = 1;
        break;
      }
      rowtag = parsexmltag(Rn[0], false);
      if (rowtag["行号"]) R2 = rowtag["行号"] - 1;
      else if (R2 == -1) R2 = 0;
      rowpeat = +rowtag["number-rows-repeated"] || 1;
      if (rowpeat < 10) {
        for (i = 0; i < rowpeat; ++i) if (row_ol > 0) rowinfo[R2 + i] = { level: row_ol };
      }
      C2 = -1;
      break;
    case "covered-table-cell":
      if (Rn[1] !== "/") ++C2;
      if (opts.sheetStubs) {
        if (opts.dense) {
          if (!ws[R2]) ws[R2] = [];
          ws[R2][C2] = { t: "z" };
        } else ws[encode_cell({ r: R2, c: C2 })] = { t: "z" };
      }
      textp = "";
      textR = [];
      break;
    case "table-cell":
    case "数据":
      if (Rn[0].charAt(Rn[0].length - 2) === "/") {
        ++C2;
        ctag = parsexmltag(Rn[0], false);
        colpeat = parseInt(ctag["number-columns-repeated"] || "1", 10);
        q2 = {
          t: "z",
          v: null
          /*:: , z:null, w:"",c:[]*/
        };
        if (ctag.formula && opts.cellFormula != false) q2.f = ods_to_csf_formula(unescapexml(ctag.formula));
        if ((ctag["数据类型"] || ctag["value-type"]) == "string") {
          q2.t = "s";
          q2.v = unescapexml(ctag["string-value"] || "");
          if (opts.dense) {
            if (!ws[R2]) ws[R2] = [];
            ws[R2][C2] = q2;
          } else {
            ws[encode_cell({ r: R2, c: C2 })] = q2;
          }
        }
        C2 += colpeat - 1;
      } else if (Rn[1] !== "/") {
        ++C2;
        textp = "";
        textpidx = 0;
        textR = [];
        colpeat = 1;
        var rptR = rowpeat ? R2 + rowpeat - 1 : R2;
        if (C2 > range.e.c) range.e.c = C2;
        if (C2 < range.s.c) range.s.c = C2;
        if (R2 < range.s.r) range.s.r = R2;
        if (rptR > range.e.r) range.e.r = rptR;
        ctag = parsexmltag(Rn[0], false);
        comments = [];
        comment = {};
        q2 = {
          t: ctag["数据类型"] || ctag["value-type"],
          v: null
          /*:: , z:null, w:"",c:[]*/
        };
        if (opts.cellFormula) {
          if (ctag.formula) ctag.formula = unescapexml(ctag.formula);
          if (ctag["number-matrix-columns-spanned"] && ctag["number-matrix-rows-spanned"]) {
            mR = parseInt(ctag["number-matrix-rows-spanned"], 10) || 0;
            mC = parseInt(ctag["number-matrix-columns-spanned"], 10) || 0;
            mrange = { s: { r: R2, c: C2 }, e: { r: R2 + mR - 1, c: C2 + mC - 1 } };
            q2.F = encode_range(mrange);
            arrayf.push([mrange, q2.F]);
          }
          if (ctag.formula) q2.f = ods_to_csf_formula(ctag.formula);
          else for (i = 0; i < arrayf.length; ++i)
            if (R2 >= arrayf[i][0].s.r && R2 <= arrayf[i][0].e.r) {
              if (C2 >= arrayf[i][0].s.c && C2 <= arrayf[i][0].e.c)
                q2.F = arrayf[i][1];
            }
        }
        if (ctag["number-columns-spanned"] || ctag["number-rows-spanned"]) {
          mR = parseInt(ctag["number-rows-spanned"], 10) || 0;
          mC = parseInt(ctag["number-columns-spanned"], 10) || 0;
          mrange = { s: { r: R2, c: C2 }, e: { r: R2 + mR - 1, c: C2 + mC - 1 } };
          merges.push(mrange);
        }
        if (ctag["number-columns-repeated"]) colpeat = parseInt(ctag["number-columns-repeated"], 10);
        switch (q2.t) {
          case "boolean":
            q2.t = "b";
            q2.v = parsexmlbool(ctag["boolean-value"]);
            break;
          case "float":
            q2.t = "n";
            q2.v = parseFloat(ctag.value);
            break;
          case "percentage":
            q2.t = "n";
            q2.v = parseFloat(ctag.value);
            break;
          case "currency":
            q2.t = "n";
            q2.v = parseFloat(ctag.value);
            break;
          case "date":
            q2.t = "d";
            q2.v = parseDate(ctag["date-value"]);
            if (!opts.cellDates) {
              q2.t = "n";
              q2.v = datenum(q2.v);
            }
            q2.z = "m/d/yy";
            break;
          case "time":
            q2.t = "n";
            q2.v = parse_isodur(ctag["time-value"]) / 86400;
            if (opts.cellDates) {
              q2.t = "d";
              q2.v = numdate(q2.v);
            }
            q2.z = "HH:MM:SS";
            break;
          case "number":
            q2.t = "n";
            q2.v = parseFloat(ctag["数据数值"]);
            break;
          default:
            if (q2.t === "string" || q2.t === "text" || !q2.t) {
              q2.t = "s";
              if (ctag["string-value"] != null) {
                textp = unescapexml(ctag["string-value"]);
                textR = [];
              }
            } else throw new Error("Unsupported value type " + q2.t);
        }
      } else {
        isstub = false;
        if (q2.t === "s") {
          q2.v = textp || "";
          if (textR.length) q2.R = textR;
          isstub = textpidx == 0;
        }
        if (atag.Target) q2.l = atag;
        if (comments.length > 0) {
          q2.c = comments;
          comments = [];
        }
        if (textp && opts.cellText !== false) q2.w = textp;
        if (isstub) {
          q2.t = "z";
          delete q2.v;
        }
        if (!isstub || opts.sheetStubs) {
          if (!(opts.sheetRows && opts.sheetRows <= R2)) {
            for (var rpt = 0; rpt < rowpeat; ++rpt) {
              colpeat = parseInt(ctag["number-columns-repeated"] || "1", 10);
              if (opts.dense) {
                if (!ws[R2 + rpt]) ws[R2 + rpt] = [];
                ws[R2 + rpt][C2] = rpt == 0 ? q2 : dup(q2);
                while (--colpeat > 0) ws[R2 + rpt][C2 + colpeat] = dup(q2);
              } else {
                ws[encode_cell({ r: R2 + rpt, c: C2 })] = q2;
                while (--colpeat > 0) ws[encode_cell({ r: R2 + rpt, c: C2 + colpeat })] = dup(q2);
              }
              if (range.e.c <= C2) range.e.c = C2;
            }
          }
        }
        colpeat = parseInt(ctag["number-columns-repeated"] || "1", 10);
        C2 += colpeat - 1;
        colpeat = 0;
        q2 = {
          /*:: t:"", v:null, z:null, w:"",c:[]*/
        };
        textp = "";
        textR = [];
      }
      atag = {};
      break;
    case "document":
    case "document-content":
    case "电子表格文档":
    case "spreadsheet":
    case "主体":
    case "scripts":
    case "styles":
    case "font-face-decls":
    case "master-styles":
      if (Rn[1] === "/") {
        if ((tmp = state.pop())[0] !== Rn[3]) throw "Bad state: " + tmp;
      } else if (Rn[0].charAt(Rn[0].length - 2) !== "/") state.push([Rn[3], true]);
      break;
    case "annotation":
      if (Rn[1] === "/") {
        if ((tmp = state.pop())[0] !== Rn[3]) throw "Bad state: " + tmp;
        comment.t = textp;
        if (textR.length) comment.R = textR;
        comment.a = creator;
        comments.push(comment);
      } else if (Rn[0].charAt(Rn[0].length - 2) !== "/") {
        state.push([Rn[3], false]);
      }
      creator = "";
      creatoridx = 0;
      textp = "";
      textpidx = 0;
      textR = [];
      break;
    case "creator":
      if (Rn[1] === "/") {
        creator = str.slice(creatoridx, Rn.index);
      } else creatoridx = Rn.index + Rn[0].length;
      break;
    case "meta":
    case "元数据":
    case "settings":
    case "config-item-set":
    case "config-item-map-indexed":
    case "config-item-map-entry":
    case "config-item-map-named":
    case "shapes":
    case "frame":
    case "text-box":
    case "image":
    case "data-pilot-tables":
    case "list-style":
    case "form":
    case "dde-links":
    case "event-listeners":
    case "chart":
      if (Rn[1] === "/") {
        if ((tmp = state.pop())[0] !== Rn[3]) throw "Bad state: " + tmp;
      } else if (Rn[0].charAt(Rn[0].length - 2) !== "/") state.push([Rn[3], false]);
      textp = "";
      textpidx = 0;
      textR = [];
      break;
    case "scientific-number":
      break;
    case "currency-symbol":
      break;
    case "currency-style":
      break;
    case "number-style":
    case "percentage-style":
    case "date-style":
    case "time-style":
      if (Rn[1] === "/") {
        number_format_map[NFtag.name] = NF;
        if ((tmp = state.pop())[0] !== Rn[3]) throw "Bad state: " + tmp;
      } else if (Rn[0].charAt(Rn[0].length - 2) !== "/") {
        NF = "";
        NFtag = parsexmltag(Rn[0], false);
        state.push([Rn[3], true]);
      }
      break;
    case "script":
      break;
    case "libraries":
      break;
    case "automatic-styles":
      break;
    case "default-style":
    case "page-layout":
      break;
    case "style":
      break;
    case "map":
      break;
    case "font-face":
      break;
    case "paragraph-properties":
      break;
    case "table-properties":
      break;
    case "table-column-properties":
      break;
    case "table-row-properties":
      break;
    case "table-cell-properties":
      break;
    case "number":
      switch (state[state.length - 1][0]) {
        case "time-style":
        case "date-style":
          tag = parsexmltag(Rn[0], false);
          NF += number_formats_ods[Rn[3]][tag.style === "long" ? 1 : 0];
          break;
      }
      break;
    case "fraction":
      break;
    case "day":
    case "month":
    case "year":
    case "era":
    case "day-of-week":
    case "week-of-year":
    case "quarter":
    case "hours":
    case "minutes":
    case "seconds":
    case "am-pm":
      switch (state[state.length - 1][0]) {
        case "time-style":
        case "date-style":
          tag = parsexmltag(Rn[0], false);
          NF += number_formats_ods[Rn[3]][tag.style === "long" ? 1 : 0];
          break;
      }
      break;
    case "boolean-style":
      break;
    case "boolean":
      break;
    case "text-style":
      break;
    case "text":
      if (Rn[0].slice(-2) === "/>") break;
      else if (Rn[1] === "/") switch (state[state.length - 1][0]) {
        case "number-style":
        case "date-style":
        case "time-style":
          NF += str.slice(pidx, Rn.index);
          break;
      }
      else pidx = Rn.index + Rn[0].length;
      break;
    case "named-range":
      tag = parsexmltag(Rn[0], false);
      _Ref = ods_to_csf_3D(tag["cell-range-address"]);
      var nrange = { Name: tag.name, Ref: _Ref[0] + "!" + _Ref[1] };
      if (intable) nrange.Sheet = SheetNames.length;
      WB.Names.push(nrange);
      break;
    case "text-content":
      break;
    case "text-properties":
      break;
    case "embedded-text":
      break;
    case "body":
    case "电子表格":
      break;
    case "forms":
      break;
    case "table-column":
      break;
    case "table-header-rows":
      break;
    case "table-rows":
      break;
    case "table-column-group":
      break;
    case "table-header-columns":
      break;
    case "table-columns":
      break;
    case "null-date":
      break;
    case "graphic-properties":
      break;
    case "calculation-settings":
      break;
    case "named-expressions":
      break;
    case "label-range":
      break;
    case "label-ranges":
      break;
    case "named-expression":
      break;
    case "sort":
      break;
    case "sort-by":
      break;
    case "sort-groups":
      break;
    case "tab":
      break;
    case "line-break":
      break;
    case "span":
      break;
    case "p":
    case "文本串":
      if (["master-styles"].indexOf(state[state.length - 1][0]) > -1) break;
      if (Rn[1] === "/" && (!ctag || !ctag["string-value"])) {
        var ptp = parse_text_p(str.slice(textpidx, Rn.index));
        textp = (textp.length > 0 ? textp + "\n" : "") + ptp[0];
      } else {
        parsexmltag(Rn[0], false);
        textpidx = Rn.index + Rn[0].length;
      }
      break;
    case "s":
      break;
    case "database-range":
      if (Rn[1] === "/") break;
      try {
        _Ref = ods_to_csf_3D(parsexmltag(Rn[0])["target-range-address"]);
        Sheets[_Ref[0]]["!autofilter"] = { ref: _Ref[1] };
      } catch (e) {
      }
      break;
    case "date":
      break;
    case "object":
      break;
    case "title":
    case "标题":
      break;
    case "desc":
      break;
    case "binary-data":
      break;
    case "table-source":
      break;
    case "scenario":
      break;
    case "iteration":
      break;
    case "content-validations":
      break;
    case "content-validation":
      break;
    case "help-message":
      break;
    case "error-message":
      break;
    case "database-ranges":
      break;
    case "filter":
      break;
    case "filter-and":
      break;
    case "filter-or":
      break;
    case "filter-condition":
      break;
    case "list-level-style-bullet":
      break;
    case "list-level-style-number":
      break;
    case "list-level-properties":
      break;
    case "sender-firstname":
    case "sender-lastname":
    case "sender-initials":
    case "sender-title":
    case "sender-position":
    case "sender-email":
    case "sender-phone-private":
    case "sender-fax":
    case "sender-company":
    case "sender-phone-work":
    case "sender-street":
    case "sender-city":
    case "sender-postal-code":
    case "sender-country":
    case "sender-state-or-province":
    case "author-name":
    case "author-initials":
    case "chapter":
    case "file-name":
    case "template-name":
    case "sheet-name":
      break;
    case "event-listener":
      break;
    case "initial-creator":
    case "creation-date":
    case "print-date":
    case "generator":
    case "document-statistic":
    case "user-defined":
    case "editing-duration":
    case "editing-cycles":
      break;
    case "config-item":
      break;
    case "page-number":
      break;
    case "page-count":
      break;
    case "time":
      break;
    case "cell-range-source":
      break;
    case "detective":
      break;
    case "operation":
      break;
    case "highlighted-range":
      break;
    case "data-pilot-table":
    case "source-cell-range":
    case "source-service":
    case "data-pilot-field":
    case "data-pilot-level":
    case "data-pilot-subtotals":
    case "data-pilot-subtotal":
    case "data-pilot-members":
    case "data-pilot-member":
    case "data-pilot-display-info":
    case "data-pilot-sort-info":
    case "data-pilot-layout-info":
    case "data-pilot-field-reference":
    case "data-pilot-groups":
    case "data-pilot-group":
    case "data-pilot-group-member":
      break;
    case "rect":
      break;
    case "dde-connection-decls":
    case "dde-connection-decl":
    case "dde-link":
    case "dde-source":
      break;
    case "properties":
      break;
    case "property":
      break;
    case "a":
      if (Rn[1] !== "/") {
        atag = parsexmltag(Rn[0], false);
        if (!atag.href) break;
        atag.Target = unescapexml(atag.href);
        delete atag.href;
        if (atag.Target.charAt(0) == "#" && atag.Target.indexOf(".") > -1) {
          _Ref = ods_to_csf_3D(atag.Target.slice(1));
          atag.Target = "#" + _Ref[0] + "!" + _Ref[1];
        } else if (atag.Target.match(/^\.\.[\\\/]/)) atag.Target = atag.Target.slice(3);
      }
      break;
    case "table-protection":
      break;
    case "data-pilot-grand-total":
      break;
    case "office-document-common-attrs":
      break;
    default:
      switch (Rn[2]) {
        case "dc:":
        case "calcext:":
        case "loext:":
        case "ooo:":
        case "chartooo:":
        case "draw:":
        case "style:":
        case "chart:":
        case "form:":
        case "uof:":
        case "表:":
        case "字:":
          break;
        default:
          if (opts.WTF) throw new Error(Rn);
      }
  }
  var out = {
    Sheets,
    SheetNames,
    Workbook: WB
  };
  if (opts.bookSheets) delete /*::(*/
  out.Sheets;
  return out;
}
function parse_ods(zip, opts) {
  opts = opts || {};
  if (safegetzipfile(zip, "META-INF/manifest.xml")) parse_manifest(getzipdata(zip, "META-INF/manifest.xml"), opts);
  var content = getzipstr(zip, "content.xml");
  if (!content) throw new Error("Missing content.xml in ODS / UOF file");
  var wb2 = parse_content_xml(utf8read(content), opts);
  if (safegetzipfile(zip, "meta.xml")) wb2.Props = parse_core_props(getzipdata(zip, "meta.xml"));
  return wb2;
}
function parse_fods(data, opts) {
  return parse_content_xml(data, opts);
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
function u8_to_dataview(array) {
  return new DataView(array.buffer, array.byteOffset, array.byteLength);
}
function u8str(u8) {
  return typeof TextDecoder != "undefined" ? new TextDecoder().decode(u8) : utf8read(a2s(u8));
}
function u8concat(u8a) {
  var len = u8a.reduce(function(acc, x2) {
    return acc + x2.length;
  }, 0);
  var out = new Uint8Array(len);
  var off = 0;
  u8a.forEach(function(u8) {
    out.set(u8, off);
    off += u8.length;
  });
  return out;
}
function popcnt(x2) {
  x2 -= x2 >> 1 & 1431655765;
  x2 = (x2 & 858993459) + (x2 >> 2 & 858993459);
  return (x2 + (x2 >> 4) & 252645135) * 16843009 >>> 24;
}
function readDecimal128LE(buf, offset) {
  var exp = (buf[offset + 15] & 127) << 7 | buf[offset + 14] >> 1;
  var mantissa = buf[offset + 14] & 1;
  for (var j = offset + 13; j >= offset; --j)
    mantissa = mantissa * 256 + buf[j];
  return (buf[offset + 15] & 128 ? -mantissa : mantissa) * Math.pow(10, exp - 6176);
}
function parse_varint49(buf, ptr) {
  var l2 = ptr ? ptr[0] : 0;
  var usz = buf[l2] & 127;
  varint:
    if (buf[l2++] >= 128) {
      usz |= (buf[l2] & 127) << 7;
      if (buf[l2++] < 128)
        break varint;
      usz |= (buf[l2] & 127) << 14;
      if (buf[l2++] < 128)
        break varint;
      usz |= (buf[l2] & 127) << 21;
      if (buf[l2++] < 128)
        break varint;
      usz += (buf[l2] & 127) * Math.pow(2, 28);
      ++l2;
      if (buf[l2++] < 128)
        break varint;
      usz += (buf[l2] & 127) * Math.pow(2, 35);
      ++l2;
      if (buf[l2++] < 128)
        break varint;
      usz += (buf[l2] & 127) * Math.pow(2, 42);
      ++l2;
      if (buf[l2++] < 128)
        break varint;
    }
  if (ptr)
    ptr[0] = l2;
  return usz;
}
function varint_to_i32(buf) {
  var l2 = 0, i32 = buf[l2] & 127;
  varint:
    if (buf[l2++] >= 128) {
      i32 |= (buf[l2] & 127) << 7;
      if (buf[l2++] < 128)
        break varint;
      i32 |= (buf[l2] & 127) << 14;
      if (buf[l2++] < 128)
        break varint;
      i32 |= (buf[l2] & 127) << 21;
      if (buf[l2++] < 128)
        break varint;
      i32 |= (buf[l2] & 127) << 28;
    }
  return i32;
}
function parse_shallow(buf) {
  var out = [], ptr = [0];
  while (ptr[0] < buf.length) {
    var off = ptr[0];
    var num = parse_varint49(buf, ptr);
    var type = num & 7;
    num = Math.floor(num / 8);
    var len = 0;
    var res;
    if (num == 0)
      break;
    switch (type) {
      case 0:
        {
          var l2 = ptr[0];
          while (buf[ptr[0]++] >= 128)
            ;
          res = buf.slice(l2, ptr[0]);
        }
        break;
      case 5:
        len = 4;
        res = buf.slice(ptr[0], ptr[0] + len);
        ptr[0] += len;
        break;
      case 1:
        len = 8;
        res = buf.slice(ptr[0], ptr[0] + len);
        ptr[0] += len;
        break;
      case 2:
        len = parse_varint49(buf, ptr);
        res = buf.slice(ptr[0], ptr[0] + len);
        ptr[0] += len;
        break;
      case 3:
      case 4:
      default:
        throw new Error("PB Type ".concat(type, " for Field ").concat(num, " at offset ").concat(off));
    }
    var v2 = { data: res, type };
    if (out[num] == null)
      out[num] = [v2];
    else
      out[num].push(v2);
  }
  return out;
}
function mappa(data, cb2) {
  return (data == null ? void 0 : data.map(function(d) {
    return cb2(d.data);
  })) || [];
}
function parse_iwa_file(buf) {
  var _a;
  var out = [], ptr = [0];
  while (ptr[0] < buf.length) {
    var len = parse_varint49(buf, ptr);
    var ai2 = parse_shallow(buf.slice(ptr[0], ptr[0] + len));
    ptr[0] += len;
    var res = {
      id: varint_to_i32(ai2[1][0].data),
      messages: []
    };
    ai2[2].forEach(function(b) {
      var mi2 = parse_shallow(b.data);
      var fl2 = varint_to_i32(mi2[3][0].data);
      res.messages.push({
        meta: mi2,
        data: buf.slice(ptr[0], ptr[0] + fl2)
      });
      ptr[0] += fl2;
    });
    if ((_a = ai2[3]) == null ? void 0 : _a[0])
      res.merge = varint_to_i32(ai2[3][0].data) >>> 0 > 0;
    out.push(res);
  }
  return out;
}
function parse_snappy_chunk(type, buf) {
  if (type != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(type));
  var ptr = [0];
  var usz = parse_varint49(buf, ptr);
  var chunks = [];
  while (ptr[0] < buf.length) {
    var tag = buf[ptr[0]] & 3;
    if (tag == 0) {
      var len = buf[ptr[0]++] >> 2;
      if (len < 60)
        ++len;
      else {
        var c = len - 59;
        len = buf[ptr[0]];
        if (c > 1)
          len |= buf[ptr[0] + 1] << 8;
        if (c > 2)
          len |= buf[ptr[0] + 2] << 16;
        if (c > 3)
          len |= buf[ptr[0] + 3] << 24;
        len >>>= 0;
        len++;
        ptr[0] += c;
      }
      chunks.push(buf.slice(ptr[0], ptr[0] + len));
      ptr[0] += len;
      continue;
    } else {
      var offset = 0, length = 0;
      if (tag == 1) {
        length = (buf[ptr[0]] >> 2 & 7) + 4;
        offset = (buf[ptr[0]++] & 224) << 3;
        offset |= buf[ptr[0]++];
      } else {
        length = (buf[ptr[0]++] >> 2) + 1;
        if (tag == 2) {
          offset = buf[ptr[0]] | buf[ptr[0] + 1] << 8;
          ptr[0] += 2;
        } else {
          offset = (buf[ptr[0]] | buf[ptr[0] + 1] << 8 | buf[ptr[0] + 2] << 16 | buf[ptr[0] + 3] << 24) >>> 0;
          ptr[0] += 4;
        }
      }
      chunks = [u8concat(chunks)];
      if (offset == 0)
        throw new Error("Invalid offset 0");
      if (offset > chunks[0].length)
        throw new Error("Invalid offset beyond length");
      if (length >= offset) {
        chunks.push(chunks[0].slice(-offset));
        length -= offset;
        while (length >= chunks[chunks.length - 1].length) {
          chunks.push(chunks[chunks.length - 1]);
          length -= chunks[chunks.length - 1].length;
        }
      }
      chunks.push(chunks[0].slice(-offset, -offset + length));
    }
  }
  var o = u8concat(chunks);
  if (o.length != usz)
    throw new Error("Unexpected length: ".concat(o.length, " != ").concat(usz));
  return o;
}
function decompress_iwa_file(buf) {
  var out = [];
  var l2 = 0;
  while (l2 < buf.length) {
    var t2 = buf[l2++];
    var len = buf[l2] | buf[l2 + 1] << 8 | buf[l2 + 2] << 16;
    l2 += 3;
    out.push(parse_snappy_chunk(t2, buf.slice(l2, l2 + len)));
    l2 += len;
  }
  if (l2 !== buf.length)
    throw new Error("data is not a valid framed stream!");
  return u8concat(out);
}
function parse_old_storage(buf, sst, rsst, v2) {
  var dv = u8_to_dataview(buf);
  var flags = dv.getUint32(4, true);
  var data_offset = (v2 > 1 ? 12 : 8) + popcnt(flags & (v2 > 1 ? 3470 : 398)) * 4;
  var ridx = -1, sidx = -1, ieee = NaN, dt = new Date(2001, 0, 1);
  if (flags & 512) {
    ridx = dv.getUint32(data_offset, true);
    data_offset += 4;
  }
  data_offset += popcnt(flags & (v2 > 1 ? 12288 : 4096)) * 4;
  if (flags & 16) {
    sidx = dv.getUint32(data_offset, true);
    data_offset += 4;
  }
  if (flags & 32) {
    ieee = dv.getFloat64(data_offset, true);
    data_offset += 8;
  }
  if (flags & 64) {
    dt.setTime(dt.getTime() + dv.getFloat64(data_offset, true) * 1e3);
    data_offset += 8;
  }
  var ret;
  switch (buf[2]) {
    case 0:
      break;
    case 2:
      ret = { t: "n", v: ieee };
      break;
    case 3:
      ret = { t: "s", v: sst[sidx] };
      break;
    case 5:
      ret = { t: "d", v: dt };
      break;
    case 6:
      ret = { t: "b", v: ieee > 0 };
      break;
    case 7:
      ret = { t: "n", v: ieee / 86400 };
      break;
    case 8:
      ret = { t: "e", v: 0 };
      break;
    case 9:
      {
        if (ridx > -1)
          ret = { t: "s", v: rsst[ridx] };
        else if (sidx > -1)
          ret = { t: "s", v: sst[sidx] };
        else if (!isNaN(ieee))
          ret = { t: "n", v: ieee };
        else
          throw new Error("Unsupported cell type ".concat(buf.slice(0, 4)));
      }
      break;
    default:
      throw new Error("Unsupported cell type ".concat(buf.slice(0, 4)));
  }
  return ret;
}
function parse_new_storage(buf, sst, rsst) {
  var dv = u8_to_dataview(buf);
  var flags = dv.getUint32(8, true);
  var data_offset = 12;
  var ridx = -1, sidx = -1, d128 = NaN, ieee = NaN, dt = new Date(2001, 0, 1);
  if (flags & 1) {
    d128 = readDecimal128LE(buf, data_offset);
    data_offset += 16;
  }
  if (flags & 2) {
    ieee = dv.getFloat64(data_offset, true);
    data_offset += 8;
  }
  if (flags & 4) {
    dt.setTime(dt.getTime() + dv.getFloat64(data_offset, true) * 1e3);
    data_offset += 8;
  }
  if (flags & 8) {
    sidx = dv.getUint32(data_offset, true);
    data_offset += 4;
  }
  if (flags & 16) {
    ridx = dv.getUint32(data_offset, true);
    data_offset += 4;
  }
  var ret;
  switch (buf[1]) {
    case 0:
      break;
    case 2:
      ret = { t: "n", v: d128 };
      break;
    case 3:
      ret = { t: "s", v: sst[sidx] };
      break;
    case 5:
      ret = { t: "d", v: dt };
      break;
    case 6:
      ret = { t: "b", v: ieee > 0 };
      break;
    case 7:
      ret = { t: "n", v: ieee / 86400 };
      break;
    case 8:
      ret = { t: "e", v: 0 };
      break;
    case 9:
      {
        if (ridx > -1)
          ret = { t: "s", v: rsst[ridx] };
        else
          throw new Error("Unsupported cell type ".concat(buf[1], " : ").concat(flags & 31, " : ").concat(buf.slice(0, 4)));
      }
      break;
    case 10:
      ret = { t: "n", v: d128 };
      break;
    default:
      throw new Error("Unsupported cell type ".concat(buf[1], " : ").concat(flags & 31, " : ").concat(buf.slice(0, 4)));
  }
  return ret;
}
function parse_cell_storage(buf, sst, rsst) {
  switch (buf[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
      return parse_old_storage(buf, sst, rsst, buf[0]);
    case 5:
      return parse_new_storage(buf, sst, rsst);
    default:
      throw new Error("Unsupported payload version ".concat(buf[0]));
  }
}
function parse_TSP_Reference(buf) {
  var pb2 = parse_shallow(buf);
  return parse_varint49(pb2[1][0].data);
}
function parse_TST_TableDataList(M2, root) {
  var pb2 = parse_shallow(root.data);
  var type = varint_to_i32(pb2[1][0].data);
  var entries = pb2[3];
  var data = [];
  (entries || []).forEach(function(entry) {
    var le2 = parse_shallow(entry.data);
    var key = varint_to_i32(le2[1][0].data) >>> 0;
    switch (type) {
      case 1:
        data[key] = u8str(le2[3][0].data);
        break;
      case 8:
        {
          var rt = M2[parse_TSP_Reference(le2[9][0].data)][0];
          var rtp = parse_shallow(rt.data);
          var rtpref = M2[parse_TSP_Reference(rtp[1][0].data)][0];
          var mtype = varint_to_i32(rtpref.meta[1][0].data);
          if (mtype != 2001)
            throw new Error("2000 unexpected reference to ".concat(mtype));
          var tswpsa = parse_shallow(rtpref.data);
          data[key] = tswpsa[3].map(function(x2) {
            return u8str(x2.data);
          }).join("");
        }
        break;
    }
  });
  return data;
}
function parse_TST_TileRowInfo(u8, type) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  var pb2 = parse_shallow(u8);
  var R2 = varint_to_i32(pb2[1][0].data) >>> 0;
  var cnt = varint_to_i32(pb2[2][0].data) >>> 0;
  var wide_offsets = ((_b = (_a = pb2[8]) == null ? void 0 : _a[0]) == null ? void 0 : _b.data) && varint_to_i32(pb2[8][0].data) > 0 || false;
  var used_storage_u8, used_storage;
  if (((_d = (_c = pb2[7]) == null ? void 0 : _c[0]) == null ? void 0 : _d.data) && type != 0) {
    used_storage_u8 = (_f = (_e = pb2[7]) == null ? void 0 : _e[0]) == null ? void 0 : _f.data;
    used_storage = (_h = (_g = pb2[6]) == null ? void 0 : _g[0]) == null ? void 0 : _h.data;
  } else if (((_j = (_i = pb2[4]) == null ? void 0 : _i[0]) == null ? void 0 : _j.data) && type != 1) {
    used_storage_u8 = (_l = (_k = pb2[4]) == null ? void 0 : _k[0]) == null ? void 0 : _l.data;
    used_storage = (_n = (_m = pb2[3]) == null ? void 0 : _m[0]) == null ? void 0 : _n.data;
  } else
    throw "NUMBERS Tile missing ".concat(type, " cell storage");
  var width = wide_offsets ? 4 : 1;
  var used_storage_offsets = u8_to_dataview(used_storage_u8);
  var offsets = [];
  for (var C2 = 0; C2 < used_storage_u8.length / 2; ++C2) {
    var off = used_storage_offsets.getUint16(C2 * 2, true);
    if (off < 65535)
      offsets.push([C2, off]);
  }
  if (offsets.length != cnt)
    throw "Expected ".concat(cnt, " cells, found ").concat(offsets.length);
  var cells = [];
  for (C2 = 0; C2 < offsets.length - 1; ++C2)
    cells[offsets[C2][0]] = used_storage.subarray(offsets[C2][1] * width, offsets[C2 + 1][1] * width);
  if (offsets.length >= 1)
    cells[offsets[offsets.length - 1][0]] = used_storage.subarray(offsets[offsets.length - 1][1] * width);
  return { R: R2, cells };
}
function parse_TST_Tile(M2, root) {
  var _a;
  var pb2 = parse_shallow(root.data);
  var storage = ((_a = pb2 == null ? void 0 : pb2[7]) == null ? void 0 : _a[0]) ? varint_to_i32(pb2[7][0].data) >>> 0 > 0 ? 1 : 0 : -1;
  var ri2 = mappa(pb2[5], function(u8) {
    return parse_TST_TileRowInfo(u8, storage);
  });
  return {
    nrows: varint_to_i32(pb2[4][0].data) >>> 0,
    data: ri2.reduce(function(acc, x2) {
      if (!acc[x2.R])
        acc[x2.R] = [];
      x2.cells.forEach(function(cell, C2) {
        if (acc[x2.R][C2])
          throw new Error("Duplicate cell r=".concat(x2.R, " c=").concat(C2));
        acc[x2.R][C2] = cell;
      });
      return acc;
    }, [])
  };
}
function parse_TST_TableModelArchive(M2, root, ws) {
  var _a;
  var pb2 = parse_shallow(root.data);
  var range = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  range.e.r = (varint_to_i32(pb2[6][0].data) >>> 0) - 1;
  if (range.e.r < 0)
    throw new Error("Invalid row varint ".concat(pb2[6][0].data));
  range.e.c = (varint_to_i32(pb2[7][0].data) >>> 0) - 1;
  if (range.e.c < 0)
    throw new Error("Invalid col varint ".concat(pb2[7][0].data));
  ws["!ref"] = encode_range(range);
  var store = parse_shallow(pb2[4][0].data);
  var sst = parse_TST_TableDataList(M2, M2[parse_TSP_Reference(store[4][0].data)][0]);
  var rsst = ((_a = store[17]) == null ? void 0 : _a[0]) ? parse_TST_TableDataList(M2, M2[parse_TSP_Reference(store[17][0].data)][0]) : [];
  var tile = parse_shallow(store[3][0].data);
  var _R = 0;
  tile[1].forEach(function(t2) {
    var tl2 = parse_shallow(t2.data);
    var ref = M2[parse_TSP_Reference(tl2[2][0].data)][0];
    var mtype = varint_to_i32(ref.meta[1][0].data);
    if (mtype != 6002)
      throw new Error("6001 unexpected reference to ".concat(mtype));
    var _tile = parse_TST_Tile(M2, ref);
    _tile.data.forEach(function(row, R2) {
      row.forEach(function(buf, C2) {
        var addr = encode_cell({ r: _R + R2, c: C2 });
        var res = parse_cell_storage(buf, sst, rsst);
        if (res)
          ws[addr] = res;
      });
    });
    _R += _tile.nrows;
  });
}
function parse_TST_TableInfoArchive(M2, root) {
  var pb2 = parse_shallow(root.data);
  var out = { "!ref": "A1" };
  var tableref = M2[parse_TSP_Reference(pb2[2][0].data)];
  var mtype = varint_to_i32(tableref[0].meta[1][0].data);
  if (mtype != 6001)
    throw new Error("6000 unexpected reference to ".concat(mtype));
  parse_TST_TableModelArchive(M2, tableref[0], out);
  return out;
}
function parse_TN_SheetArchive(M2, root) {
  var _a;
  var pb2 = parse_shallow(root.data);
  var out = {
    name: ((_a = pb2[1]) == null ? void 0 : _a[0]) ? u8str(pb2[1][0].data) : "",
    sheets: []
  };
  var shapeoffs = mappa(pb2[2], parse_TSP_Reference);
  shapeoffs.forEach(function(off) {
    M2[off].forEach(function(m2) {
      var mtype = varint_to_i32(m2.meta[1][0].data);
      if (mtype == 6e3)
        out.sheets.push(parse_TST_TableInfoArchive(M2, m2));
    });
  });
  return out;
}
function parse_TN_DocumentArchive(M2, root) {
  var out = book_new();
  var pb2 = parse_shallow(root.data);
  var sheetoffs = mappa(pb2[1], parse_TSP_Reference);
  sheetoffs.forEach(function(off) {
    M2[off].forEach(function(m2) {
      var mtype = varint_to_i32(m2.meta[1][0].data);
      if (mtype == 2) {
        var root2 = parse_TN_SheetArchive(M2, m2);
        root2.sheets.forEach(function(sheet, idx) {
          book_append_sheet(out, sheet, idx == 0 ? root2.name : root2.name + "_" + idx, true);
        });
      }
    });
  });
  if (out.SheetNames.length == 0)
    throw new Error("Empty NUMBERS file");
  return out;
}
function parse_numbers_iwa(cfb) {
  var _a, _b, _c, _d;
  var M2 = {}, indices = [];
  cfb.FullPaths.forEach(function(p2) {
    if (p2.match(/\.iwpv2/))
      throw new Error("Unsupported password protection");
  });
  cfb.FileIndex.forEach(function(s) {
    if (!s.name.match(/\.iwa$/))
      return;
    var o;
    try {
      o = decompress_iwa_file(s.content);
    } catch (e) {
      return console.log("?? " + s.content.length + " " + (e.message || e));
    }
    var packets;
    try {
      packets = parse_iwa_file(o);
    } catch (e) {
      return console.log("## " + (e.message || e));
    }
    packets.forEach(function(packet) {
      M2[packet.id] = packet.messages;
      indices.push(packet.id);
    });
  });
  if (!indices.length)
    throw new Error("File has no messages");
  var docroot = ((_d = (_c = (_b = (_a = M2 == null ? void 0 : M2[1]) == null ? void 0 : _a[0]) == null ? void 0 : _b.meta) == null ? void 0 : _c[1]) == null ? void 0 : _d[0].data) && varint_to_i32(M2[1][0].meta[1][0].data) == 1 && M2[1][0];
  if (!docroot)
    indices.forEach(function(idx) {
      M2[idx].forEach(function(iwam) {
        var mtype = varint_to_i32(iwam.meta[1][0].data) >>> 0;
        if (mtype == 1) {
          if (!docroot)
            docroot = iwam;
          else
            throw new Error("Document has multiple roots");
        }
      });
    });
  if (!docroot)
    throw new Error("Cannot find Document root");
  return parse_TN_DocumentArchive(M2, docroot);
}
function fix_opts_func(defaults) {
  return function fix_opts(opts) {
    for (var i = 0; i != defaults.length; ++i) {
      var d = defaults[i];
      if (opts[d[0]] === void 0) opts[d[0]] = d[1];
      if (d[2] === "n") opts[d[0]] = Number(opts[d[0]]);
    }
  };
}
function fix_read_opts(opts) {
  fix_opts_func([
    ["cellNF", false],
    /* emit cell number format string as .z */
    ["cellHTML", true],
    /* emit html string as .h */
    ["cellFormula", true],
    /* emit formulae as .f */
    ["cellStyles", false],
    /* emits style/theme as .s */
    ["cellText", true],
    /* emit formatted text as .w */
    ["cellDates", false],
    /* emit date cells with type `d` */
    ["sheetStubs", false],
    /* emit empty cells */
    ["sheetRows", 0, "n"],
    /* read n rows (0 = read all rows) */
    ["bookDeps", false],
    /* parse calculation chains */
    ["bookSheets", false],
    /* only try to get sheet names (no Sheets) */
    ["bookProps", false],
    /* only try to get properties (no Sheets) */
    ["bookFiles", false],
    /* include raw file structure (keys, files, cfb) */
    ["bookVBA", false],
    /* include vba raw data (vbaraw) */
    ["password", ""],
    /* password */
    ["WTF", false]
    /* WTF mode (throws errors) */
  ])(opts);
}
function get_sheet_type(n2) {
  if (RELS.WS.indexOf(n2) > -1) return "sheet";
  if (n2 == RELS.CS) return "chart";
  if (n2 == RELS.DS) return "dialog";
  if (n2 == RELS.MS) return "macro";
  return n2 && n2.length ? n2 : "sheet";
}
function safe_parse_wbrels(wbrels, sheets) {
  if (!wbrels) return 0;
  try {
    wbrels = sheets.map(function pwbr(w2) {
      if (!w2.id) w2.id = w2.strRelID;
      return [w2.name, wbrels["!id"][w2.id].Target, get_sheet_type(wbrels["!id"][w2.id].Type)];
    });
  } catch (e) {
    return null;
  }
  return !wbrels || wbrels.length === 0 ? null : wbrels;
}
function safe_parse_sheet(zip, path, relsPath, sheet, idx, sheetRels, sheets, stype, opts, wb2, themes, styles) {
  try {
    sheetRels[sheet] = parse_rels(getzipstr(zip, relsPath, true), path);
    var data = getzipdata(zip, path);
    var _ws;
    switch (stype) {
      case "sheet":
        _ws = parse_ws(data, path, idx, opts, sheetRels[sheet], wb2, themes, styles);
        break;
      case "chart":
        _ws = parse_cs(data, path, idx, opts, sheetRels[sheet], wb2, themes, styles);
        if (!_ws || !_ws["!drawel"]) break;
        var dfile = resolve_path(_ws["!drawel"].Target, path);
        var drelsp = get_rels_path(dfile);
        var draw = parse_drawing(getzipstr(zip, dfile, true), parse_rels(getzipstr(zip, drelsp, true), dfile));
        var chartp = resolve_path(draw, dfile);
        var crelsp = get_rels_path(chartp);
        _ws = parse_chart(getzipstr(zip, chartp, true), chartp, opts, parse_rels(getzipstr(zip, crelsp, true), chartp), wb2, _ws);
        break;
      case "macro":
        _ws = parse_ms(data, path, idx, opts, sheetRels[sheet], wb2, themes, styles);
        break;
      case "dialog":
        _ws = parse_ds(data, path, idx, opts, sheetRels[sheet], wb2, themes, styles);
        break;
      default:
        throw new Error("Unrecognized sheet type " + stype);
    }
    sheets[sheet] = _ws;
    var tcomments = [];
    if (sheetRels && sheetRels[sheet]) keys(sheetRels[sheet]).forEach(function(n2) {
      var dfile2 = "";
      if (sheetRels[sheet][n2].Type == RELS.CMNT) {
        dfile2 = resolve_path(sheetRels[sheet][n2].Target, path);
        var comments = parse_cmnt(getzipdata(zip, dfile2, true), dfile2, opts);
        if (!comments || !comments.length) return;
        sheet_insert_comments(_ws, comments, false);
      }
      if (sheetRels[sheet][n2].Type == RELS.TCMNT) {
        dfile2 = resolve_path(sheetRels[sheet][n2].Target, path);
        tcomments = tcomments.concat(parse_tcmnt_xml(getzipdata(zip, dfile2, true), opts));
      }
    });
    if (tcomments && tcomments.length) sheet_insert_comments(_ws, tcomments, true, opts.people || []);
  } catch (e) {
    if (opts.WTF) throw e;
  }
}
function strip_front_slash(x2) {
  return x2.charAt(0) == "/" ? x2.slice(1) : x2;
}
function parse_zip(zip, opts) {
  make_ssf();
  opts = opts || {};
  fix_read_opts(opts);
  if (safegetzipfile(zip, "META-INF/manifest.xml")) return parse_ods(zip, opts);
  if (safegetzipfile(zip, "objectdata.xml")) return parse_ods(zip, opts);
  if (safegetzipfile(zip, "Index/Document.iwa")) {
    if (typeof Uint8Array == "undefined") throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof parse_numbers_iwa != "undefined") {
      if (zip.FileIndex) return parse_numbers_iwa(zip);
      var _zip = CFB.utils.cfb_new();
      zipentries(zip).forEach(function(e) {
        zip_add_file(_zip, e, getzipbin(zip, e));
      });
      return parse_numbers_iwa(_zip);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!safegetzipfile(zip, "[Content_Types].xml")) {
    if (safegetzipfile(zip, "index.xml.gz")) throw new Error("Unsupported NUMBERS 08 file");
    if (safegetzipfile(zip, "index.xml")) throw new Error("Unsupported NUMBERS 09 file");
    throw new Error("Unsupported ZIP file");
  }
  var entries = zipentries(zip);
  var dir = parse_ct(getzipstr(zip, "[Content_Types].xml"));
  var xlsb = false;
  var sheets, binname;
  if (dir.workbooks.length === 0) {
    binname = "xl/workbook.xml";
    if (getzipdata(zip, binname, true)) dir.workbooks.push(binname);
  }
  if (dir.workbooks.length === 0) {
    binname = "xl/workbook.bin";
    if (!getzipdata(zip, binname, true)) throw new Error("Could not find workbook");
    dir.workbooks.push(binname);
    xlsb = true;
  }
  if (dir.workbooks[0].slice(-3) == "bin") xlsb = true;
  var themes = {};
  var styles = {};
  if (!opts.bookSheets && !opts.bookProps) {
    strs = [];
    if (dir.sst) try {
      strs = parse_sst(getzipdata(zip, strip_front_slash(dir.sst)), dir.sst, opts);
    } catch (e) {
      if (opts.WTF) throw e;
    }
    if (opts.cellStyles && dir.themes.length) themes = parse_theme(getzipstr(zip, dir.themes[0].replace(/^\//, ""), true) || "", dir.themes[0], opts);
    if (dir.style) styles = parse_sty(getzipdata(zip, strip_front_slash(dir.style)), dir.style, themes, opts);
  }
  dir.links.map(function(link) {
    try {
      var rels = parse_rels(getzipstr(zip, get_rels_path(strip_front_slash(link))), link);
      return parse_xlink(getzipdata(zip, strip_front_slash(link)), rels, link, opts);
    } catch (e) {
    }
  });
  var wb2 = parse_wb(getzipdata(zip, strip_front_slash(dir.workbooks[0])), dir.workbooks[0], opts);
  var props = {}, propdata = "";
  if (dir.coreprops.length) {
    propdata = getzipdata(zip, strip_front_slash(dir.coreprops[0]), true);
    if (propdata) props = parse_core_props(propdata);
    if (dir.extprops.length !== 0) {
      propdata = getzipdata(zip, strip_front_slash(dir.extprops[0]), true);
      if (propdata) parse_ext_props(propdata, props, opts);
    }
  }
  var custprops = {};
  if (!opts.bookSheets || opts.bookProps) {
    if (dir.custprops.length !== 0) {
      propdata = getzipstr(zip, strip_front_slash(dir.custprops[0]), true);
      if (propdata) custprops = parse_cust_props(propdata, opts);
    }
  }
  var out = {};
  if (opts.bookSheets || opts.bookProps) {
    if (wb2.Sheets) sheets = wb2.Sheets.map(function pluck(x2) {
      return x2.name;
    });
    else if (props.Worksheets && props.SheetNames.length > 0) sheets = props.SheetNames;
    if (opts.bookProps) {
      out.Props = props;
      out.Custprops = custprops;
    }
    if (opts.bookSheets && typeof sheets !== "undefined") out.SheetNames = sheets;
    if (opts.bookSheets ? out.SheetNames : opts.bookProps) return out;
  }
  sheets = {};
  var deps = {};
  if (opts.bookDeps && dir.calcchain) deps = parse_cc(getzipdata(zip, strip_front_slash(dir.calcchain)), dir.calcchain);
  var i = 0;
  var sheetRels = {};
  var path, relsPath;
  {
    var wbsheets = wb2.Sheets;
    props.Worksheets = wbsheets.length;
    props.SheetNames = [];
    for (var j = 0; j != wbsheets.length; ++j) {
      props.SheetNames[j] = wbsheets[j].name;
    }
  }
  var wbext = xlsb ? "bin" : "xml";
  var wbrelsi = dir.workbooks[0].lastIndexOf("/");
  var wbrelsfile = (dir.workbooks[0].slice(0, wbrelsi + 1) + "_rels/" + dir.workbooks[0].slice(wbrelsi + 1) + ".rels").replace(/^\//, "");
  if (!safegetzipfile(zip, wbrelsfile)) wbrelsfile = "xl/_rels/workbook." + wbext + ".rels";
  var wbrels = parse_rels(getzipstr(zip, wbrelsfile, true), wbrelsfile.replace(/_rels.*/, "s5s"));
  if ((dir.metadata || []).length >= 1) {
    opts.xlmeta = parse_xlmeta(getzipdata(zip, strip_front_slash(dir.metadata[0])), dir.metadata[0], opts);
  }
  if ((dir.people || []).length >= 1) {
    opts.people = parse_people_xml(getzipdata(zip, strip_front_slash(dir.people[0])), opts);
  }
  if (wbrels) wbrels = safe_parse_wbrels(wbrels, wb2.Sheets);
  var nmode = getzipdata(zip, "xl/worksheets/sheet.xml", true) ? 1 : 0;
  wsloop: for (i = 0; i != props.Worksheets; ++i) {
    var stype = "sheet";
    if (wbrels && wbrels[i]) {
      path = "xl/" + wbrels[i][1].replace(/[\/]?xl\//, "");
      if (!safegetzipfile(zip, path)) path = wbrels[i][1];
      if (!safegetzipfile(zip, path)) path = wbrelsfile.replace(/_rels\/.*$/, "") + wbrels[i][1];
      stype = wbrels[i][2];
    } else {
      path = "xl/worksheets/sheet" + (i + 1 - nmode) + "." + wbext;
      path = path.replace(/sheet0\./, "sheet.");
    }
    relsPath = path.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels");
    if (opts && opts.sheets != null) switch (typeof opts.sheets) {
      case "number":
        if (i != opts.sheets) continue wsloop;
        break;
      case "string":
        if (props.SheetNames[i].toLowerCase() != opts.sheets.toLowerCase()) continue wsloop;
        break;
      default:
        if (Array.isArray && Array.isArray(opts.sheets)) {
          var snjseen = false;
          for (var snj = 0; snj != opts.sheets.length; ++snj) {
            if (typeof opts.sheets[snj] == "number" && opts.sheets[snj] == i) snjseen = 1;
            if (typeof opts.sheets[snj] == "string" && opts.sheets[snj].toLowerCase() == props.SheetNames[i].toLowerCase()) snjseen = 1;
          }
          if (!snjseen) continue wsloop;
        }
    }
    safe_parse_sheet(zip, path, relsPath, props.SheetNames[i], i, sheetRels, sheets, stype, opts, wb2, themes, styles);
  }
  out = {
    Directory: dir,
    Workbook: wb2,
    Props: props,
    Custprops: custprops,
    Deps: deps,
    Sheets: sheets,
    SheetNames: props.SheetNames,
    Strings: strs,
    Styles: styles,
    Themes: themes,
    SSF: dup(table_fmt)
  };
  if (opts && opts.bookFiles) {
    if (zip.files) {
      out.keys = entries;
      out.files = zip.files;
    } else {
      out.keys = [];
      out.files = {};
      zip.FullPaths.forEach(function(p2, idx) {
        p2 = p2.replace(/^Root Entry[\/]/, "");
        out.keys.push(p2);
        out.files[p2] = zip.FileIndex[idx];
      });
    }
  }
  if (opts && opts.bookVBA) {
    if (dir.vba.length > 0) out.vbaraw = getzipdata(zip, strip_front_slash(dir.vba[0]), true);
    else if (dir.defaults && dir.defaults.bin === CT_VBA) out.vbaraw = getzipdata(zip, "xl/vbaProject.bin", true);
  }
  return out;
}
function parse_xlsxcfb(cfb, _opts) {
  var opts = _opts || {};
  var f2 = "Workbook", data = CFB.find(cfb, f2);
  try {
    f2 = "/!DataSpaces/Version";
    data = CFB.find(cfb, f2);
    if (!data || !data.content) throw new Error("ECMA-376 Encrypted file missing " + f2);
    parse_DataSpaceVersionInfo(data.content);
    f2 = "/!DataSpaces/DataSpaceMap";
    data = CFB.find(cfb, f2);
    if (!data || !data.content) throw new Error("ECMA-376 Encrypted file missing " + f2);
    var dsm = parse_DataSpaceMap(data.content);
    if (dsm.length !== 1 || dsm[0].comps.length !== 1 || dsm[0].comps[0].t !== 0 || dsm[0].name !== "StrongEncryptionDataSpace" || dsm[0].comps[0].v !== "EncryptedPackage")
      throw new Error("ECMA-376 Encrypted file bad " + f2);
    f2 = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace";
    data = CFB.find(cfb, f2);
    if (!data || !data.content) throw new Error("ECMA-376 Encrypted file missing " + f2);
    var seds = parse_DataSpaceDefinition(data.content);
    if (seds.length != 1 || seds[0] != "StrongEncryptionTransform")
      throw new Error("ECMA-376 Encrypted file bad " + f2);
    f2 = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary";
    data = CFB.find(cfb, f2);
    if (!data || !data.content) throw new Error("ECMA-376 Encrypted file missing " + f2);
    parse_Primary(data.content);
  } catch (e) {
  }
  f2 = "/EncryptionInfo";
  data = CFB.find(cfb, f2);
  if (!data || !data.content) throw new Error("ECMA-376 Encrypted file missing " + f2);
  var einfo = parse_EncryptionInfo(data.content);
  f2 = "/EncryptedPackage";
  data = CFB.find(cfb, f2);
  if (!data || !data.content) throw new Error("ECMA-376 Encrypted file missing " + f2);
  if (einfo[0] == 4 && typeof decrypt_agile !== "undefined") return decrypt_agile(einfo[1], data.content, opts.password || "", opts);
  if (einfo[0] == 2 && typeof decrypt_std76 !== "undefined") return decrypt_std76(einfo[1], data.content, opts.password || "", opts);
  throw new Error("File is password-protected");
}
function firstbyte(f2, o) {
  var x2 = "";
  switch ((o || {}).type || "base64") {
    case "buffer":
      return [f2[0], f2[1], f2[2], f2[3], f2[4], f2[5], f2[6], f2[7]];
    case "base64":
      x2 = Base64_decode(f2.slice(0, 12));
      break;
    case "binary":
      x2 = f2;
      break;
    case "array":
      return [f2[0], f2[1], f2[2], f2[3], f2[4], f2[5], f2[6], f2[7]];
    default:
      throw new Error("Unrecognized type " + (o && o.type || "undefined"));
  }
  return [x2.charCodeAt(0), x2.charCodeAt(1), x2.charCodeAt(2), x2.charCodeAt(3), x2.charCodeAt(4), x2.charCodeAt(5), x2.charCodeAt(6), x2.charCodeAt(7)];
}
function read_cfb(cfb, opts) {
  if (CFB.find(cfb, "EncryptedPackage")) return parse_xlsxcfb(cfb, opts);
  return parse_xlscfb(cfb, opts);
}
function read_zip(data, opts) {
  var zip, d = data;
  var o = opts || {};
  if (!o.type) o.type = has_buf && Buffer.isBuffer(data) ? "buffer" : "base64";
  zip = zip_read(d, o);
  return parse_zip(zip, o);
}
function read_plaintext(data, o) {
  var i = 0;
  main: while (i < data.length) switch (data.charCodeAt(i)) {
    case 10:
    case 13:
    case 32:
      ++i;
      break;
    case 60:
      return parse_xlml(data.slice(i), o);
    default:
      break main;
  }
  return PRN.to_workbook(data, o);
}
function read_plaintext_raw(data, o) {
  var str = "", bytes = firstbyte(data, o);
  switch (o.type) {
    case "base64":
      str = Base64_decode(data);
      break;
    case "binary":
      str = data;
      break;
    case "buffer":
      str = data.toString("binary");
      break;
    case "array":
      str = cc2str(data);
      break;
    default:
      throw new Error("Unrecognized type " + o.type);
  }
  if (bytes[0] == 239 && bytes[1] == 187 && bytes[2] == 191) str = utf8read(str);
  o.type = "binary";
  return read_plaintext(str, o);
}
function read_utf16(data, o) {
  var d = data;
  if (o.type == "base64") d = Base64_decode(d);
  d = $cptable.utils.decode(1200, d.slice(2), "str");
  o.type = "binary";
  return read_plaintext(d, o);
}
function bstrify(data) {
  return !data.match(/[^\x00-\x7F]/) ? data : utf8write(data);
}
function read_prn(data, d, o, str) {
  if (str) {
    o.type = "string";
    return PRN.to_workbook(data, o);
  }
  return PRN.to_workbook(d, o);
}
function readSync(data, opts) {
  reset_cp();
  var o = opts || {};
  if (typeof ArrayBuffer !== "undefined" && data instanceof ArrayBuffer) return readSync(new Uint8Array(data), (o = dup(o), o.type = "array", o));
  if (typeof Uint8Array !== "undefined" && data instanceof Uint8Array && !o.type) o.type = typeof Deno !== "undefined" ? "buffer" : "array";
  var d = data, n2 = [0, 0, 0, 0], str = false;
  if (o.cellStyles) {
    o.cellNF = true;
    o.sheetStubs = true;
  }
  _ssfopts = {};
  if (o.dateNF) _ssfopts.dateNF = o.dateNF;
  if (!o.type) o.type = has_buf && Buffer.isBuffer(data) ? "buffer" : "base64";
  if (o.type == "file") {
    o.type = has_buf ? "buffer" : "binary";
    d = read_binary(data);
    if (typeof Uint8Array !== "undefined" && !has_buf) o.type = "array";
  }
  if (o.type == "string") {
    str = true;
    o.type = "binary";
    o.codepage = 65001;
    d = bstrify(data);
  }
  if (o.type == "array" && typeof Uint8Array !== "undefined" && data instanceof Uint8Array && typeof ArrayBuffer !== "undefined") {
    var ab2 = new ArrayBuffer(3), vu = new Uint8Array(ab2);
    vu.foo = "bar";
    if (!vu.foo) {
      o = dup(o);
      o.type = "array";
      return readSync(ab2a(d), o);
    }
  }
  switch ((n2 = firstbyte(d, o))[0]) {
    case 208:
      if (n2[1] === 207 && n2[2] === 17 && n2[3] === 224 && n2[4] === 161 && n2[5] === 177 && n2[6] === 26 && n2[7] === 225) return read_cfb(CFB.read(d, o), o);
      break;
    case 9:
      if (n2[1] <= 8) return parse_xlscfb(d, o);
      break;
    case 60:
      return parse_xlml(d, o);
    case 73:
      if (n2[1] === 73 && n2[2] === 42 && n2[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
      if (n2[1] === 68) return read_wb_ID(d, o);
      break;
    case 84:
      if (n2[1] === 65 && n2[2] === 66 && n2[3] === 76) return DIF.to_workbook(d, o);
      break;
    case 80:
      return n2[1] === 75 && n2[2] < 9 && n2[3] < 9 ? read_zip(d, o) : read_prn(data, d, o, str);
    case 239:
      return n2[3] === 60 ? parse_xlml(d, o) : read_prn(data, d, o, str);
    case 255:
      if (n2[1] === 254) {
        return read_utf16(d, o);
      } else if (n2[1] === 0 && n2[2] === 2 && n2[3] === 0) return WK_.to_workbook(d, o);
      break;
    case 0:
      if (n2[1] === 0) {
        if (n2[2] >= 2 && n2[3] === 0) return WK_.to_workbook(d, o);
        if (n2[2] === 0 && (n2[3] === 8 || n2[3] === 9)) return WK_.to_workbook(d, o);
      }
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return DBF.to_workbook(d, o);
    case 123:
      if (n2[1] === 92 && n2[2] === 114 && n2[3] === 116) return RTF.to_workbook(d, o);
      break;
    case 10:
    case 13:
    case 32:
      return read_plaintext_raw(d, o);
    case 137:
      if (n2[1] === 80 && n2[2] === 78 && n2[3] === 71) throw new Error("PNG Image File is not a spreadsheet");
      break;
  }
  if (DBF_SUPPORTED_VERSIONS.indexOf(n2[0]) > -1 && n2[2] <= 12 && n2[3] <= 31) return DBF.to_workbook(d, o);
  return read_prn(data, d, o, str);
}
function make_json_row(sheet, r2, R2, cols, header, hdr, dense, o) {
  var rr = encode_row(R2);
  var defval = o.defval, raw = o.raw || !Object.prototype.hasOwnProperty.call(o, "raw");
  var isempty = true;
  var row = header === 1 ? [] : {};
  if (header !== 1) {
    if (Object.defineProperty) try {
      Object.defineProperty(row, "__rowNum__", { value: R2, enumerable: false });
    } catch (e) {
      row.__rowNum__ = R2;
    }
    else row.__rowNum__ = R2;
  }
  if (!dense || sheet[R2]) for (var C2 = r2.s.c; C2 <= r2.e.c; ++C2) {
    var val = dense ? sheet[R2][C2] : sheet[cols[C2] + rr];
    if (val === void 0 || val.t === void 0) {
      if (defval === void 0) continue;
      if (hdr[C2] != null) {
        row[hdr[C2]] = defval;
      }
      continue;
    }
    var v2 = val.v;
    switch (val.t) {
      case "z":
        if (v2 == null) break;
        continue;
      case "e":
        v2 = v2 == 0 ? null : void 0;
        break;
      case "s":
      case "d":
      case "b":
      case "n":
        break;
      default:
        throw new Error("unrecognized type " + val.t);
    }
    if (hdr[C2] != null) {
      if (v2 == null) {
        if (val.t == "e" && v2 === null) row[hdr[C2]] = null;
        else if (defval !== void 0) row[hdr[C2]] = defval;
        else if (raw && v2 === null) row[hdr[C2]] = null;
        else continue;
      } else {
        row[hdr[C2]] = raw && (val.t !== "n" || val.t === "n" && o.rawNumbers !== false) ? v2 : format_cell(val, v2, o);
      }
      if (v2 != null) isempty = false;
    }
  }
  return { row, isempty };
}
function sheet_to_json(sheet, opts) {
  if (sheet == null || sheet["!ref"] == null) return [];
  var val = { t: "n", v: 0 }, header = 0, offset = 1, hdr = [], v2 = 0, vv = "";
  var r2 = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  var o = opts || {};
  var range = o.range != null ? o.range : sheet["!ref"];
  if (o.header === 1) header = 1;
  else if (o.header === "A") header = 2;
  else if (Array.isArray(o.header)) header = 3;
  else if (o.header == null) header = 0;
  switch (typeof range) {
    case "string":
      r2 = safe_decode_range(range);
      break;
    case "number":
      r2 = safe_decode_range(sheet["!ref"]);
      r2.s.r = range;
      break;
    default:
      r2 = range;
  }
  if (header > 0) offset = 0;
  var rr = encode_row(r2.s.r);
  var cols = [];
  var out = [];
  var outi = 0, counter = 0;
  var dense = Array.isArray(sheet);
  var R2 = r2.s.r, C2 = 0;
  var header_cnt = {};
  if (dense && !sheet[R2]) sheet[R2] = [];
  var colinfo = o.skipHidden && sheet["!cols"] || [];
  var rowinfo = o.skipHidden && sheet["!rows"] || [];
  for (C2 = r2.s.c; C2 <= r2.e.c; ++C2) {
    if ((colinfo[C2] || {}).hidden) continue;
    cols[C2] = encode_col(C2);
    val = dense ? sheet[R2][C2] : sheet[cols[C2] + rr];
    switch (header) {
      case 1:
        hdr[C2] = C2 - r2.s.c;
        break;
      case 2:
        hdr[C2] = cols[C2];
        break;
      case 3:
        hdr[C2] = o.header[C2 - r2.s.c];
        break;
      default:
        if (val == null) val = { w: "__EMPTY", t: "s" };
        vv = v2 = format_cell(val, null, o);
        counter = header_cnt[v2] || 0;
        if (!counter) header_cnt[v2] = 1;
        else {
          do {
            vv = v2 + "_" + counter++;
          } while (header_cnt[vv]);
          header_cnt[v2] = counter;
          header_cnt[vv] = 1;
        }
        hdr[C2] = vv;
    }
  }
  for (R2 = r2.s.r + offset; R2 <= r2.e.r; ++R2) {
    if ((rowinfo[R2] || {}).hidden) continue;
    var row = make_json_row(sheet, r2, R2, cols, header, hdr, dense, o);
    if (row.isempty === false || (header === 1 ? o.blankrows !== false : !!o.blankrows)) out[outi++] = row.row;
  }
  out.length = outi;
  return out;
}
var qreg = /"/g;
function make_csv_row(sheet, r2, R2, cols, fs, rs, FS, o) {
  var isempty = true;
  var row = [], txt = "", rr = encode_row(R2);
  for (var C2 = r2.s.c; C2 <= r2.e.c; ++C2) {
    if (!cols[C2]) continue;
    var val = o.dense ? (sheet[R2] || [])[C2] : sheet[cols[C2] + rr];
    if (val == null) txt = "";
    else if (val.v != null) {
      isempty = false;
      txt = "" + (o.rawNumbers && val.t == "n" ? val.v : format_cell(val, null, o));
      for (var i = 0, cc2 = 0; i !== txt.length; ++i) if ((cc2 = txt.charCodeAt(i)) === fs || cc2 === rs || cc2 === 34 || o.forceQuotes) {
        txt = '"' + txt.replace(qreg, '""') + '"';
        break;
      }
      if (txt == "ID") txt = '"ID"';
    } else if (val.f != null && !val.F) {
      isempty = false;
      txt = "=" + val.f;
      if (txt.indexOf(",") >= 0) txt = '"' + txt.replace(qreg, '""') + '"';
    } else txt = "";
    row.push(txt);
  }
  if (o.blankrows === false && isempty) return null;
  return row.join(FS);
}
function sheet_to_csv(sheet, opts) {
  var out = [];
  var o = opts == null ? {} : opts;
  if (sheet == null || sheet["!ref"] == null) return "";
  var r2 = safe_decode_range(sheet["!ref"]);
  var FS = o.FS !== void 0 ? o.FS : ",", fs = FS.charCodeAt(0);
  var RS = o.RS !== void 0 ? o.RS : "\n", rs = RS.charCodeAt(0);
  var endregex = new RegExp((FS == "|" ? "\\|" : FS) + "+$");
  var row = "", cols = [];
  o.dense = Array.isArray(sheet);
  var colinfo = o.skipHidden && sheet["!cols"] || [];
  var rowinfo = o.skipHidden && sheet["!rows"] || [];
  for (var C2 = r2.s.c; C2 <= r2.e.c; ++C2) if (!(colinfo[C2] || {}).hidden) cols[C2] = encode_col(C2);
  var w2 = 0;
  for (var R2 = r2.s.r; R2 <= r2.e.r; ++R2) {
    if ((rowinfo[R2] || {}).hidden) continue;
    row = make_csv_row(sheet, r2, R2, cols, fs, rs, FS, o);
    if (row == null) {
      continue;
    }
    if (o.strip) row = row.replace(endregex, "");
    if (row || o.blankrows !== false) out.push((w2++ ? RS : "") + row);
  }
  delete o.dense;
  return out.join("");
}
function sheet_to_txt(sheet, opts) {
  if (!opts) opts = {};
  opts.FS = "	";
  opts.RS = "\n";
  var s = sheet_to_csv(sheet, opts);
  return s;
}
function sheet_to_formulae(sheet) {
  var y2 = "", x2, val = "";
  if (sheet == null || sheet["!ref"] == null) return [];
  var r2 = safe_decode_range(sheet["!ref"]), rr = "", cols = [], C2;
  var cmds = [];
  var dense = Array.isArray(sheet);
  for (C2 = r2.s.c; C2 <= r2.e.c; ++C2) cols[C2] = encode_col(C2);
  for (var R2 = r2.s.r; R2 <= r2.e.r; ++R2) {
    rr = encode_row(R2);
    for (C2 = r2.s.c; C2 <= r2.e.c; ++C2) {
      y2 = cols[C2] + rr;
      x2 = dense ? (sheet[R2] || [])[C2] : sheet[y2];
      val = "";
      if (x2 === void 0) continue;
      else if (x2.F != null) {
        y2 = x2.F;
        if (!x2.f) continue;
        val = x2.f;
        if (y2.indexOf(":") == -1) y2 = y2 + ":" + y2;
      }
      if (x2.f != null) val = x2.f;
      else if (x2.t == "z") continue;
      else if (x2.t == "n" && x2.v != null) val = "" + x2.v;
      else if (x2.t == "b") val = x2.v ? "TRUE" : "FALSE";
      else if (x2.w !== void 0) val = "'" + x2.w;
      else if (x2.v === void 0) continue;
      else if (x2.t == "s") val = "'" + x2.v;
      else val = "" + x2.v;
      cmds[cmds.length] = y2 + "=" + val;
    }
  }
  return cmds;
}
function sheet_add_json(_ws, js, opts) {
  var o = opts || {};
  var offset = +!o.skipHeader;
  var ws = _ws || {};
  var _R = 0, _C = 0;
  if (ws && o.origin != null) {
    if (typeof o.origin == "number") _R = o.origin;
    else {
      var _origin = typeof o.origin == "string" ? decode_cell(o.origin) : o.origin;
      _R = _origin.r;
      _C = _origin.c;
    }
  }
  var cell;
  var range = { s: { c: 0, r: 0 }, e: { c: _C, r: _R + js.length - 1 + offset } };
  if (ws["!ref"]) {
    var _range = safe_decode_range(ws["!ref"]);
    range.e.c = Math.max(range.e.c, _range.e.c);
    range.e.r = Math.max(range.e.r, _range.e.r);
    if (_R == -1) {
      _R = _range.e.r + 1;
      range.e.r = _R + js.length - 1 + offset;
    }
  } else {
    if (_R == -1) {
      _R = 0;
      range.e.r = js.length - 1 + offset;
    }
  }
  var hdr = o.header || [], C2 = 0;
  js.forEach(function(JS, R2) {
    keys(JS).forEach(function(k2) {
      if ((C2 = hdr.indexOf(k2)) == -1) hdr[C2 = hdr.length] = k2;
      var v2 = JS[k2];
      var t2 = "z";
      var z2 = "";
      var ref = encode_cell({ c: _C + C2, r: _R + R2 + offset });
      cell = ws_get_cell_stub(ws, ref);
      if (v2 && typeof v2 === "object" && !(v2 instanceof Date)) {
        ws[ref] = v2;
      } else {
        if (typeof v2 == "number") t2 = "n";
        else if (typeof v2 == "boolean") t2 = "b";
        else if (typeof v2 == "string") t2 = "s";
        else if (v2 instanceof Date) {
          t2 = "d";
          if (!o.cellDates) {
            t2 = "n";
            v2 = datenum(v2);
          }
          z2 = o.dateNF || table_fmt[14];
        } else if (v2 === null && o.nullError) {
          t2 = "e";
          v2 = 0;
        }
        if (!cell) ws[ref] = cell = { t: t2, v: v2 };
        else {
          cell.t = t2;
          cell.v = v2;
          delete cell.w;
          delete cell.R;
          if (z2) cell.z = z2;
        }
        if (z2) cell.z = z2;
      }
    });
  });
  range.e.c = Math.max(range.e.c, _C + hdr.length - 1);
  var __R = encode_row(_R);
  if (offset) for (C2 = 0; C2 < hdr.length; ++C2) ws[encode_col(C2 + _C) + __R] = { t: "s", v: hdr[C2] };
  ws["!ref"] = encode_range(range);
  return ws;
}
function json_to_sheet(js, opts) {
  return sheet_add_json(null, js, opts);
}
function ws_get_cell_stub(ws, R2, C2) {
  if (typeof R2 == "string") {
    if (Array.isArray(ws)) {
      var RC = decode_cell(R2);
      if (!ws[RC.r]) ws[RC.r] = [];
      return ws[RC.r][RC.c] || (ws[RC.r][RC.c] = { t: "z" });
    }
    return ws[R2] || (ws[R2] = { t: "z" });
  }
  if (typeof R2 != "number") return ws_get_cell_stub(ws, encode_cell(R2));
  return ws_get_cell_stub(ws, encode_cell({ r: R2, c: C2 || 0 }));
}
function wb_sheet_idx(wb2, sh2) {
  if (typeof sh2 == "number") {
    if (sh2 >= 0 && wb2.SheetNames.length > sh2) return sh2;
    throw new Error("Cannot find sheet # " + sh2);
  } else if (typeof sh2 == "string") {
    var idx = wb2.SheetNames.indexOf(sh2);
    if (idx > -1) return idx;
    throw new Error("Cannot find sheet name |" + sh2 + "|");
  } else throw new Error("Cannot find sheet |" + sh2 + "|");
}
function book_new() {
  return { SheetNames: [], Sheets: {} };
}
function book_append_sheet(wb2, ws, name, roll) {
  var i = 1;
  if (!name) {
    for (; i <= 65535; ++i, name = void 0) if (wb2.SheetNames.indexOf(name = "Sheet" + i) == -1) break;
  }
  if (!name || wb2.SheetNames.length >= 65535) throw new Error("Too many worksheets");
  if (roll && wb2.SheetNames.indexOf(name) >= 0) {
    var m2 = name.match(/(^.*?)(\d+)$/);
    i = m2 && +m2[2] || 0;
    var root = m2 && m2[1] || name;
    for (++i; i <= 65535; ++i) if (wb2.SheetNames.indexOf(name = root + i) == -1) break;
  }
  check_ws_name(name);
  if (wb2.SheetNames.indexOf(name) >= 0) throw new Error("Worksheet with name |" + name + "| already exists!");
  wb2.SheetNames.push(name);
  wb2.Sheets[name] = ws;
  return name;
}
function book_set_sheet_visibility(wb2, sh2, vis) {
  if (!wb2.Workbook) wb2.Workbook = {};
  if (!wb2.Workbook.Sheets) wb2.Workbook.Sheets = [];
  var idx = wb_sheet_idx(wb2, sh2);
  if (!wb2.Workbook.Sheets[idx]) wb2.Workbook.Sheets[idx] = {};
  switch (vis) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + vis);
  }
  wb2.Workbook.Sheets[idx].Hidden = vis;
}
function cell_set_number_format(cell, fmt) {
  cell.z = fmt;
  return cell;
}
function cell_set_hyperlink(cell, target, tooltip) {
  if (!target) {
    delete cell.l;
  } else {
    cell.l = { Target: target };
    if (tooltip) cell.l.Tooltip = tooltip;
  }
  return cell;
}
function cell_set_internal_link(cell, range, tooltip) {
  return cell_set_hyperlink(cell, "#" + range, tooltip);
}
function cell_add_comment(cell, text, author) {
  if (!cell.c) cell.c = [];
  cell.c.push({ t: text, a: author || "SheetJS" });
}
function sheet_set_array_formula(ws, range, formula, dynamic) {
  var rng = typeof range != "string" ? range : safe_decode_range(range);
  var rngstr = typeof range == "string" ? range : encode_range(range);
  for (var R2 = rng.s.r; R2 <= rng.e.r; ++R2) for (var C2 = rng.s.c; C2 <= rng.e.c; ++C2) {
    var cell = ws_get_cell_stub(ws, R2, C2);
    cell.t = "n";
    cell.F = rngstr;
    delete cell.v;
    if (R2 == rng.s.r && C2 == rng.s.c) {
      cell.f = formula;
      if (dynamic) cell.D = true;
    }
  }
  return ws;
}
var utils = {
  encode_col,
  encode_row,
  encode_cell,
  encode_range,
  decode_col,
  decode_row,
  split_cell,
  decode_cell,
  decode_range,
  format_cell,
  sheet_add_aoa,
  sheet_add_json,
  sheet_add_dom,
  aoa_to_sheet,
  json_to_sheet,
  table_to_sheet: parse_dom_table,
  table_to_book,
  sheet_to_csv,
  sheet_to_txt,
  sheet_to_json,
  sheet_to_html,
  sheet_to_formulae,
  sheet_to_row_object_array: sheet_to_json,
  sheet_get_cell: ws_get_cell_stub,
  book_new,
  book_append_sheet,
  book_set_sheet_visibility,
  cell_set_number_format,
  cell_set_hyperlink,
  cell_set_internal_link,
  cell_add_comment,
  sheet_set_array_formula,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
};
function App() {
  const [csvData, setCSVData] = reactExports.useState(null);
  const [formattedData, setFormattedData] = reactExports.useState(null);
  const [settings, setSettings] = reactExports.useState({
    category: void 0,
    fetchTimeout: void 0,
    lowerType: void 0,
    tax: 0.11
  });
  const [categories, setCategories] = reactExports.useState([]);
  reactExports.useState(0);
  const [running, setRunning] = reactExports.useState(false);
  const [currentItem, setCurrentItem] = reactExports.useState(0);
  const [products, setProducts] = reactExports.useState([]);
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();
    const workbook = readSync(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = utils.sheet_to_json(worksheet);
    console.log(jsonData);
    setCSVData(jsonData);
  };
  reactExports.useEffect(() => {
    const filterCategories = async () => {
      const cats = [];
      if (csvData) {
        const fdata = await window.electron.formatData(csvData);
        setFormattedData(fdata);
        for (const cell of fdata) {
          const { category } = cell;
          if (!cats.includes(category.toLowerCase()))
            cats.push(category.toLowerCase());
        }
        setCategories(cats.sort());
      }
    };
    filterCategories();
  }, [csvData]);
  reactExports.useEffect(() => {
    if (csvData) {
      for (const cell of formattedData) {
        const { category } = cell;
        if (settings.category === category.toLowerCase()) {
          setProducts((prev) => [...prev, cell]);
        }
      }
    }
  }, [formattedData, settings.category]);
  reactExports.useEffect(() => {
    if (running) {
      window.electron.compareData(products, settings);
    }
  }, [running]);
  reactExports.useEffect(() => {
    window.electron.onProgress((e) => {
      console.log(e);
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "p-4 flex flex-col items-center justify-center gap-2 w-full h-full", children: [
    !running ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-control w-full max-w-xs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label-text", children: "Input product data" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "file",
          accept: ".xlsx",
          className: "file-input file-input-bordered w-full max-w-xs",
          onChange: handleFileUpload
        }
      )
    ] }) : null,
    csvData && !running ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-fit h-26 items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-control  max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            placeholder: "Tax",
            className: "input input-bordered w-16 text-center max-w-xs",
            defaultValue: Math.floor(10 * (settings.tax + 1))
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            onChange: (e) => {
              const category = e.target.value;
              setSettings({
                ...settings,
                category: category.toLowerCase()
              });
            },
            className: "select select-bordered w-full max-w-xs",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, selected: true, children: "Category" }),
              categories.map((e) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: e });
              })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-control", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "label cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label-text w-20", children: "You Lower" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              onClick: () => {
                setSettings({ lowerType: "you" });
              },
              type: "radio",
              name: "radio-10",
              className: "radio checked:bg-secondary m-2",
              defaultChecked: true
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-control", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "label cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label-text w-20", children: "Them Lower" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              onClick: () => {
                setSettings({ lowerType: "them" });
              },
              type: "radio",
              name: "radio-10",
              className: "radio checked:bg-secondary m-2"
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          disabled: settings.category ? false : true,
          className: "btn btn-wide btn-primary",
          onClick: () => {
            setRunning(true);
          },
          children: "Compare"
        }
      ) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
    running ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "progress",
        {
          className: "progress w-56 progress-secondary",
          value: currentItem / products.length * 100,
          max: "100"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        currentItem,
        " / ",
        products.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-success {btn-active}", children: "Download CSV" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-error", children: "Cancel" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {})
  ] }) });
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
