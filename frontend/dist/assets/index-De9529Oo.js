require("dotenv").config({ path: ".env.server" });

function Af(e, t) {
  for (var n = 0; n < t.length; n++) {
    const i = t[n];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const r in i)
        if (r !== "default" && !(r in e)) {
          const s = Object.getOwnPropertyDescriptor(i, r);
          s &&
            Object.defineProperty(
              e,
              r,
              s.get ? s : { enumerable: !0, get: () => i[r] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
var Ps =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Il(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ep = { exports: {} },
  so = {},
  tp = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mr = Symbol.for("react.element"),
  If = Symbol.for("react.portal"),
  Df = Symbol.for("react.fragment"),
  Lf = Symbol.for("react.strict_mode"),
  Rf = Symbol.for("react.profiler"),
  _f = Symbol.for("react.provider"),
  zf = Symbol.for("react.context"),
  Of = Symbol.for("react.forward_ref"),
  Bf = Symbol.for("react.suspense"),
  Hf = Symbol.for("react.memo"),
  Ff = Symbol.for("react.lazy"),
  tu = Symbol.iterator;
function Uf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (tu && e[tu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var np = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ip = Object.assign,
  rp = {};
function xi(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = rp),
    (this.updater = n || np));
}
xi.prototype.isReactComponent = {};
xi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sp() {}
sp.prototype = xi.prototype;
function Dl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = rp),
    (this.updater = n || np));
}
var Ll = (Dl.prototype = new sp());
Ll.constructor = Dl;
ip(Ll, xi.prototype);
Ll.isPureReactComponent = !0;
var nu = Array.isArray,
  op = Object.prototype.hasOwnProperty,
  Rl = { current: null },
  ap = { key: !0, ref: !0, __self: !0, __source: !0 };
function lp(e, t, n) {
  var i,
    r = {},
    s = null,
    o = null;
  if (t != null)
    for (i in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      op.call(t, i) && !ap.hasOwnProperty(i) && (r[i] = t[i]);
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    r.children = c;
  }
  if (e && e.defaultProps)
    for (i in ((l = e.defaultProps), l)) r[i] === void 0 && (r[i] = l[i]);
  return {
    $$typeof: Mr,
    type: e,
    key: s,
    ref: o,
    props: r,
    _owner: Rl.current,
  };
}
function Wf(e, t) {
  return {
    $$typeof: Mr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function _l(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mr;
}
function Vf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var iu = /\/+/g;
function Po(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Vf("" + e.key)
    : t.toString(36);
}
function hs(e, t, n, i, r) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Mr:
          case If:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (r = r(o)),
      (e = i === "" ? "." + Po(o, 0) : i),
      nu(r)
        ? ((n = ""),
          e != null && (n = e.replace(iu, "$&/") + "/"),
          hs(r, t, n, "", function (u) {
            return u;
          }))
        : r != null &&
          (_l(r) &&
            (r = Wf(
              r,
              n +
                (!r.key || (o && o.key === r.key)
                  ? ""
                  : ("" + r.key).replace(iu, "$&/") + "/") +
                e,
            )),
          t.push(r)),
      1
    );
  if (((o = 0), (i = i === "" ? "." : i + ":"), nu(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var c = i + Po(s, l);
      o += hs(s, t, n, c, r);
    }
  else if (((c = Uf(e)), typeof c == "function"))
    for (e = c.call(e), l = 0; !(s = e.next()).done; )
      ((s = s.value), (c = i + Po(s, l++)), (o += hs(s, t, n, c, r)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function Hr(e, t, n) {
  if (e == null) return e;
  var i = [],
    r = 0;
  return (
    hs(e, i, "", "", function (s) {
      return t.call(n, s, r++);
    }),
    i
  );
}
function qf(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Re = { current: null },
  fs = { transition: null },
  $f = {
    ReactCurrentDispatcher: Re,
    ReactCurrentBatchConfig: fs,
    ReactCurrentOwner: Rl,
  };
function cp() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
  map: Hr,
  forEach: function (e, t, n) {
    Hr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Hr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Hr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!_l(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
q.Component = xi;
q.Fragment = Df;
q.Profiler = Rf;
q.PureComponent = Dl;
q.StrictMode = Lf;
q.Suspense = Bf;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f;
q.act = cp;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var i = ip({}, e.props),
    r = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Rl.current)),
      t.key !== void 0 && (r = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (c in t)
      op.call(t, c) &&
        !ap.hasOwnProperty(c) &&
        (i[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) i.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  return { $$typeof: Mr, type: e.type, key: r, ref: s, props: i, _owner: o };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: zf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: _f, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = lp;
q.createFactory = function (e) {
  var t = lp.bind(null, e);
  return ((t.type = e), t);
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: Of, render: e };
};
q.isValidElement = _l;
q.lazy = function (e) {
  return { $$typeof: Ff, _payload: { _status: -1, _result: e }, _init: qf };
};
q.memo = function (e, t) {
  return { $$typeof: Hf, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = fs.transition;
  fs.transition = {};
  try {
    e();
  } finally {
    fs.transition = t;
  }
};
q.unstable_act = cp;
q.useCallback = function (e, t) {
  return Re.current.useCallback(e, t);
};
q.useContext = function (e) {
  return Re.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return Re.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return Re.current.useEffect(e, t);
};
q.useId = function () {
  return Re.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return Re.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return Re.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return Re.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return Re.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return Re.current.useRef(e);
};
q.useState = function (e) {
  return Re.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return Re.current.useTransition();
};
q.version = "18.3.1";
tp.exports = q;
var E = tp.exports;
const bt = Il(E),
  Gf = Af({ __proto__: null, default: bt }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qf = E,
  Kf = Symbol.for("react.element"),
  Jf = Symbol.for("react.fragment"),
  Yf = Object.prototype.hasOwnProperty,
  Xf = Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Zf = { key: !0, ref: !0, __self: !0, __source: !0 };
function up(e, t, n) {
  var i,
    r = {},
    s = null,
    o = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (i in t) Yf.call(t, i) && !Zf.hasOwnProperty(i) && (r[i] = t[i]);
  if (e && e.defaultProps)
    for (i in ((t = e.defaultProps), t)) r[i] === void 0 && (r[i] = t[i]);
  return {
    $$typeof: Kf,
    type: e,
    key: s,
    ref: o,
    props: r,
    _owner: Xf.current,
  };
}
so.Fragment = Jf;
so.jsx = up;
so.jsxs = up;
ep.exports = so;
var a = ep.exports,
  Sa = {},
  dp = { exports: {} },
  et = {},
  pp = { exports: {} },
  hp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, H) {
    var v = I.length;
    I.push(H);
    e: for (; 0 < v; ) {
      var Q = (v - 1) >>> 1,
        Z = I[Q];
      if (0 < r(Z, H)) ((I[Q] = H), (I[v] = Z), (v = Q));
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function i(I) {
    if (I.length === 0) return null;
    var H = I[0],
      v = I.pop();
    if (v !== H) {
      I[0] = v;
      e: for (var Q = 0, Z = I.length, x = Z >>> 1; Q < x; ) {
        var we = 2 * (Q + 1) - 1,
          ct = I[we],
          re = we + 1,
          vt = I[re];
        if (0 > r(ct, v))
          re < Z && 0 > r(vt, ct)
            ? ((I[Q] = vt), (I[re] = v), (Q = re))
            : ((I[Q] = ct), (I[we] = v), (Q = we));
        else if (re < Z && 0 > r(vt, v)) ((I[Q] = vt), (I[re] = v), (Q = re));
        else break e;
      }
    }
    return H;
  }
  function r(I, H) {
    var v = I.sortIndex - H.sortIndex;
    return v !== 0 ? v : I.id - H.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var c = [],
    u = [],
    d = 1,
    p = null,
    f = 3,
    h = !1,
    w = !1,
    k = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(I) {
    for (var H = n(u); H !== null; ) {
      if (H.callback === null) i(u);
      else if (H.startTime <= I)
        (i(u), (H.sortIndex = H.expirationTime), t(c, H));
      else break;
      H = n(u);
    }
  }
  function C(I) {
    if (((k = !1), g(I), !w))
      if (n(c) !== null) ((w = !0), me(N));
      else {
        var H = n(u);
        H !== null && he(C, H.startTime - I);
      }
  }
  function N(I, H) {
    ((w = !1), k && ((k = !1), y(D), (D = -1)), (h = !0));
    var v = f;
    try {
      for (
        g(H), p = n(c);
        p !== null && (!(p.expirationTime > H) || (I && !_()));
      ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          ((p.callback = null), (f = p.priorityLevel));
          var Z = Q(p.expirationTime <= H);
          ((H = e.unstable_now()),
            typeof Z == "function" ? (p.callback = Z) : p === n(c) && i(c),
            g(H));
        } else i(c);
        p = n(c);
      }
      if (p !== null) var x = !0;
      else {
        var we = n(u);
        (we !== null && he(C, we.startTime - H), (x = !1));
      }
      return x;
    } finally {
      ((p = null), (f = v), (h = !1));
    }
  }
  var b = !1,
    P = null,
    D = -1,
    F = 5,
    R = -1;
  function _() {
    return !(e.unstable_now() - R < F);
  }
  function O() {
    if (P !== null) {
      var I = e.unstable_now();
      R = I;
      var H = !0;
      try {
        H = P(!0, I);
      } finally {
        H ? Y() : ((b = !1), (P = null));
      }
    } else b = !1;
  }
  var Y;
  if (typeof m == "function")
    Y = function () {
      m(O);
    };
  else if (typeof MessageChannel < "u") {
    var le = new MessageChannel(),
      $ = le.port2;
    ((le.port1.onmessage = O),
      (Y = function () {
        $.postMessage(null);
      }));
  } else
    Y = function () {
      S(O, 0);
    };
  function me(I) {
    ((P = I), b || ((b = !0), Y()));
  }
  function he(I, H) {
    D = S(function () {
      I(e.unstable_now());
    }, H);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || h || ((w = !0), me(N));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (F = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (I) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = f;
      }
      var v = f;
      f = H;
      try {
        return I();
      } finally {
        f = v;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, H) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var v = f;
      f = I;
      try {
        return H();
      } finally {
        f = v;
      }
    }),
    (e.unstable_scheduleCallback = function (I, H, v) {
      var Q = e.unstable_now();
      switch (
        (typeof v == "object" && v !== null
          ? ((v = v.delay), (v = typeof v == "number" && 0 < v ? Q + v : Q))
          : (v = Q),
        I)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = v + Z),
        (I = {
          id: d++,
          callback: H,
          priorityLevel: I,
          startTime: v,
          expirationTime: Z,
          sortIndex: -1,
        }),
        v > Q
          ? ((I.sortIndex = v),
            t(u, I),
            n(c) === null &&
              I === n(u) &&
              (k ? (y(D), (D = -1)) : (k = !0), he(C, v - Q)))
          : ((I.sortIndex = Z), t(c, I), w || h || ((w = !0), me(N))),
        I
      );
    }),
    (e.unstable_shouldYield = _),
    (e.unstable_wrapCallback = function (I) {
      var H = f;
      return function () {
        var v = f;
        f = H;
        try {
          return I.apply(this, arguments);
        } finally {
          f = v;
        }
      };
    }));
})(hp);
pp.exports = hp;
var em = pp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tm = E,
  Ze = em;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var fp = new Set(),
  sr = {};
function Rn(e, t) {
  (hi(e, t), hi(e + "Capture", t));
}
function hi(e, t) {
  for (sr[e] = t, e = 0; e < t.length; e++) fp.add(t[e]);
}
var zt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ca = Object.prototype.hasOwnProperty,
  nm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ru = {},
  su = {};
function im(e) {
  return Ca.call(su, e)
    ? !0
    : Ca.call(ru, e)
      ? !1
      : nm.test(e)
        ? (su[e] = !0)
        : ((ru[e] = !0), !1);
}
function rm(e, t, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function sm(e, t, n, i) {
  if (t === null || typeof t > "u" || rm(e, t, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function _e(e, t, n, i, r, s, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o));
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new _e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zl = /[\-:]([a-z])/g;
function Ol(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zl, Ol);
    Ne[t] = new _e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zl, Ol);
    Ne[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(zl, Ol);
  Ne[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new _e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bl(e, t, n, i) {
  var r = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (r !== null
    ? r.type !== 0
    : i ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (sm(t, n, r, i) && (n = null),
    i || r === null
      ? im(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : r.mustUseProperty
        ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : "") : n)
        : ((t = r.attributeName),
          (i = r.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((r = r.type),
              (n = r === 3 || (r === 4 && n === !0) ? "" : "" + n),
              i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
}
var Ft = tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fr = Symbol.for("react.element"),
  qn = Symbol.for("react.portal"),
  $n = Symbol.for("react.fragment"),
  Hl = Symbol.for("react.strict_mode"),
  ba = Symbol.for("react.profiler"),
  mp = Symbol.for("react.provider"),
  gp = Symbol.for("react.context"),
  Fl = Symbol.for("react.forward_ref"),
  Ea = Symbol.for("react.suspense"),
  Na = Symbol.for("react.suspense_list"),
  Ul = Symbol.for("react.memo"),
  qt = Symbol.for("react.lazy"),
  yp = Symbol.for("react.offscreen"),
  ou = Symbol.iterator;
function Mi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ou && e[ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var de = Object.assign,
  Mo;
function Ui(e) {
  if (Mo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Mo = (t && t[1]) || "";
    }
  return (
    `
` +
    Mo +
    e
  );
}
var jo = !1;
function Ao(e, t) {
  if (!e || jo) return "";
  jo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var i = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          i = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        i = u;
      }
      e();
    }
  } catch (u) {
    if (u && i && typeof u.stack == "string") {
      for (
        var r = u.stack.split(`
`),
          s = i.stack.split(`
`),
          o = r.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && r[o] !== s[l];
      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (r[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || r[o] !== s[l])) {
                var c =
                  `
` + r[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    ((jo = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Ui(e) : "";
}
function om(e) {
  switch (e.tag) {
    case 5:
      return Ui(e.type);
    case 16:
      return Ui("Lazy");
    case 13:
      return Ui("Suspense");
    case 19:
      return Ui("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Ao(e.type, !1)), e);
    case 11:
      return ((e = Ao(e.type.render, !1)), e);
    case 1:
      return ((e = Ao(e.type, !0)), e);
    default:
      return "";
  }
}
function Ta(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $n:
      return "Fragment";
    case qn:
      return "Portal";
    case ba:
      return "Profiler";
    case Hl:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Na:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case gp:
        return (e.displayName || "Context") + ".Consumer";
      case mp:
        return (e._context.displayName || "Context") + ".Provider";
      case Fl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ul:
        return (
          (t = e.displayName || null),
          t !== null ? t : Ta(e.type) || "Memo"
        );
      case qt:
        ((t = e._payload), (e = e._init));
        try {
          return Ta(e(t));
        } catch {}
    }
  return null;
}
function am(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ta(t);
    case 8:
      return t === Hl ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function lm(e) {
  var t = vp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var r = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (o) {
          ((i = "" + o), s.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (o) {
          i = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Ur(e) {
  e._valueTracker || (e._valueTracker = lm(e));
}
function wp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    i = "";
  return (
    e && (i = vp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ms(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pa(e, t) {
  var n = t.checked;
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function au(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    i = t.checked != null ? t.checked : t.defaultChecked;
  ((n = un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function xp(e, t) {
  ((t = t.checked), t != null && Bl(e, "checked", t, !1));
}
function Ma(e, t) {
  xp(e, t);
  var n = un(t.value),
    i = t.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (i === "submit" || i === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? ja(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ja(e, t.type, un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function lu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var i = t.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function ja(e, t, n) {
  (t !== "number" || Ms(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Wi = Array.isArray;
function ii(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {};
    for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
    for (n = 0; n < e.length; n++)
      ((r = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== r && (e[n].selected = r),
        r && i && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + un(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        ((e[r].selected = !0), i && (e[r].defaultSelected = !0));
        return;
      }
      t !== null || e[r].disabled || (t = e[r]);
    }
    t !== null && (t.selected = !0);
  }
}
function Aa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function cu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (Wi(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: un(n) };
}
function kp(e, t) {
  var n = un(t.value),
    i = un(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = "" + i));
}
function uu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ia(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Sp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Wr,
  Cp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, i, r);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Wr = Wr || document.createElement("div"),
          Wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Wr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function or(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $i = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  cm = ["Webkit", "ms", "Moz", "O"];
Object.keys($i).forEach(function (e) {
  cm.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($i[t] = $i[e]));
  });
});
function bp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($i.hasOwnProperty(e) && $i[e])
      ? ("" + t).trim()
      : t + "px";
}
function Ep(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        r = bp(n, t[n], i);
      (n === "float" && (n = "cssFloat"), i ? e.setProperty(n, r) : (e[n] = r));
    }
}
var um = de(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Da(e, t) {
  if (t) {
    if (um[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function La(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ra = null;
function Wl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var _a = null,
  ri = null,
  si = null;
function du(e) {
  if ((e = Ir(e))) {
    if (typeof _a != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = uo(t)), _a(e.stateNode, e.type, t));
  }
}
function Np(e) {
  ri ? (si ? si.push(e) : (si = [e])) : (ri = e);
}
function Tp() {
  if (ri) {
    var e = ri,
      t = si;
    if (((si = ri = null), du(e), t)) for (e = 0; e < t.length; e++) du(t[e]);
  }
}
function Pp(e, t) {
  return e(t);
}
function Mp() {}
var Io = !1;
function jp(e, t, n) {
  if (Io) return e(t, n);
  Io = !0;
  try {
    return Pp(e, t, n);
  } finally {
    ((Io = !1), (ri !== null || si !== null) && (Mp(), Tp()));
  }
}
function ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var i = uo(n);
  if (i === null) return null;
  n = i[t];
  e: switch (t) {
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
      ((i = !i.disabled) ||
        ((e = e.type),
        (i = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !i));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var za = !1;
if (zt)
  try {
    var ji = {};
    (Object.defineProperty(ji, "passive", {
      get: function () {
        za = !0;
      },
    }),
      window.addEventListener("test", ji, ji),
      window.removeEventListener("test", ji, ji));
  } catch {
    za = !1;
  }
function dm(e, t, n, i, r, s, o, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Gi = !1,
  js = null,
  As = !1,
  Oa = null,
  pm = {
    onError: function (e) {
      ((Gi = !0), (js = e));
    },
  };
function hm(e, t, n, i, r, s, o, l, c) {
  ((Gi = !1), (js = null), dm.apply(pm, arguments));
}
function fm(e, t, n, i, r, s, o, l, c) {
  if ((hm.apply(this, arguments), Gi)) {
    if (Gi) {
      var u = js;
      ((Gi = !1), (js = null));
    } else throw Error(M(198));
    As || ((As = !0), (Oa = u));
  }
}
function _n(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ap(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function pu(e) {
  if (_n(e) !== e) throw Error(M(188));
}
function mm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = _n(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, i = t; ; ) {
    var r = n.return;
    if (r === null) break;
    var s = r.alternate;
    if (s === null) {
      if (((i = r.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (r.child === s.child) {
      for (s = r.child; s; ) {
        if (s === n) return (pu(r), e);
        if (s === i) return (pu(r), t);
        s = s.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== i.return) ((n = r), (i = s));
    else {
      for (var o = !1, l = r.child; l; ) {
        if (l === n) {
          ((o = !0), (n = r), (i = s));
          break;
        }
        if (l === i) {
          ((o = !0), (i = r), (n = s));
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            ((o = !0), (n = s), (i = r));
            break;
          }
          if (l === i) {
            ((o = !0), (i = s), (n = r));
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(M(189));
      }
    }
    if (n.alternate !== i) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Ip(e) {
  return ((e = mm(e)), e !== null ? Dp(e) : null);
}
function Dp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Dp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Lp = Ze.unstable_scheduleCallback,
  hu = Ze.unstable_cancelCallback,
  gm = Ze.unstable_shouldYield,
  ym = Ze.unstable_requestPaint,
  fe = Ze.unstable_now,
  vm = Ze.unstable_getCurrentPriorityLevel,
  Vl = Ze.unstable_ImmediatePriority,
  Rp = Ze.unstable_UserBlockingPriority,
  Is = Ze.unstable_NormalPriority,
  wm = Ze.unstable_LowPriority,
  _p = Ze.unstable_IdlePriority,
  oo = null,
  Et = null;
function xm(e) {
  if (Et && typeof Et.onCommitFiberRoot == "function")
    try {
      Et.onCommitFiberRoot(oo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : Cm,
  km = Math.log,
  Sm = Math.LN2;
function Cm(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((km(e) / Sm) | 0)) | 0);
}
var Vr = 64,
  qr = 4194304;
function Vi(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ds(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~r;
    l !== 0 ? (i = Vi(l)) : ((s &= o), s !== 0 && (i = Vi(s)));
  } else ((o = n & ~r), o !== 0 ? (i = Vi(o)) : s !== 0 && (i = Vi(s)));
  if (i === 0) return 0;
  if (
    t !== 0 &&
    t !== i &&
    !(t & r) &&
    ((r = i & -i), (s = t & -t), r >= s || (r === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      ((n = 31 - mt(t)), (r = 1 << n), (i |= e[n]), (t &= ~r));
  return i;
}
function bm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Em(e, t) {
  for (
    var n = e.suspendedLanes,
      i = e.pingedLanes,
      r = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var o = 31 - mt(s),
      l = 1 << o,
      c = r[o];
    (c === -1
      ? (!(l & n) || l & i) && (r[o] = bm(l, t))
      : c <= t && (e.expiredLanes |= l),
      (s &= ~l));
  }
}
function Ba(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zp() {
  var e = Vr;
  return ((Vr <<= 1), !(Vr & 4194240) && (Vr = 64), e);
}
function Do(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function jr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n));
}
function Nm(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var i = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - mt(n),
      s = 1 << r;
    ((t[r] = 0), (i[r] = -1), (e[r] = -1), (n &= ~s));
  }
}
function ql(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var i = 31 - mt(n),
      r = 1 << i;
    ((r & t) | (e[i] & t) && (e[i] |= t), (n &= ~r));
  }
}
var X = 0;
function Op(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Bp,
  $l,
  Hp,
  Fp,
  Up,
  Ha = !1,
  $r = [],
  Zt = null,
  en = null,
  tn = null,
  lr = new Map(),
  cr = new Map(),
  Qt = [],
  Tm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function fu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zt = null;
      break;
    case "dragenter":
    case "dragleave":
      en = null;
      break;
    case "mouseover":
    case "mouseout":
      tn = null;
      break;
    case "pointerover":
    case "pointerout":
      lr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cr.delete(t.pointerId);
  }
}
function Ai(e, t, n, i, r, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r],
      }),
      t !== null && ((t = Ir(t)), t !== null && $l(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      r !== null && t.indexOf(r) === -1 && t.push(r),
      e);
}
function Pm(e, t, n, i, r) {
  switch (t) {
    case "focusin":
      return ((Zt = Ai(Zt, e, t, n, i, r)), !0);
    case "dragenter":
      return ((en = Ai(en, e, t, n, i, r)), !0);
    case "mouseover":
      return ((tn = Ai(tn, e, t, n, i, r)), !0);
    case "pointerover":
      var s = r.pointerId;
      return (lr.set(s, Ai(lr.get(s) || null, e, t, n, i, r)), !0);
    case "gotpointercapture":
      return (
        (s = r.pointerId),
        cr.set(s, Ai(cr.get(s) || null, e, t, n, i, r)),
        !0
      );
  }
  return !1;
}
function Wp(e) {
  var t = Sn(e.target);
  if (t !== null) {
    var n = _n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ap(n)), t !== null)) {
          ((e.blockedOn = t),
            Up(e.priority, function () {
              Hp(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ms(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var i = new n.constructor(n.type, n);
      ((Ra = i), n.target.dispatchEvent(i), (Ra = null));
    } else return ((t = Ir(n)), t !== null && $l(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function mu(e, t, n) {
  ms(e) && n.delete(t);
}
function Mm() {
  ((Ha = !1),
    Zt !== null && ms(Zt) && (Zt = null),
    en !== null && ms(en) && (en = null),
    tn !== null && ms(tn) && (tn = null),
    lr.forEach(mu),
    cr.forEach(mu));
}
function Ii(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ha ||
      ((Ha = !0),
      Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, Mm)));
}
function ur(e) {
  function t(r) {
    return Ii(r, e);
  }
  if (0 < $r.length) {
    Ii($r[0], e);
    for (var n = 1; n < $r.length; n++) {
      var i = $r[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
  }
  for (
    Zt !== null && Ii(Zt, e),
      en !== null && Ii(en, e),
      tn !== null && Ii(tn, e),
      lr.forEach(t),
      cr.forEach(t),
      n = 0;
    n < Qt.length;
    n++
  )
    ((i = Qt[n]), i.blockedOn === e && (i.blockedOn = null));
  for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
    (Wp(n), n.blockedOn === null && Qt.shift());
}
var oi = Ft.ReactCurrentBatchConfig,
  Ls = !0;
function jm(e, t, n, i) {
  var r = X,
    s = oi.transition;
  oi.transition = null;
  try {
    ((X = 1), Gl(e, t, n, i));
  } finally {
    ((X = r), (oi.transition = s));
  }
}
function Am(e, t, n, i) {
  var r = X,
    s = oi.transition;
  oi.transition = null;
  try {
    ((X = 4), Gl(e, t, n, i));
  } finally {
    ((X = r), (oi.transition = s));
  }
}
function Gl(e, t, n, i) {
  if (Ls) {
    var r = Fa(e, t, n, i);
    if (r === null) (Wo(e, t, i, Rs, n), fu(e, i));
    else if (Pm(r, e, t, n, i)) i.stopPropagation();
    else if ((fu(e, i), t & 4 && -1 < Tm.indexOf(e))) {
      for (; r !== null; ) {
        var s = Ir(r);
        if (
          (s !== null && Bp(s),
          (s = Fa(e, t, n, i)),
          s === null && Wo(e, t, i, Rs, n),
          s === r)
        )
          break;
        r = s;
      }
      r !== null && i.stopPropagation();
    } else Wo(e, t, i, null, n);
  }
}
var Rs = null;
function Fa(e, t, n, i) {
  if (((Rs = null), (e = Wl(i)), (e = Sn(e)), e !== null))
    if (((t = _n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ap(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Rs = e), null);
}
function Vp(e) {
  switch (e) {
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
      switch (vm()) {
        case Vl:
          return 1;
        case Rp:
          return 4;
        case Is:
        case wm:
          return 16;
        case _p:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null,
  Ql = null,
  gs = null;
function qp() {
  if (gs) return gs;
  var e,
    t = Ql,
    n = t.length,
    i,
    r = "value" in Jt ? Jt.value : Jt.textContent,
    s = r.length;
  for (e = 0; e < n && t[e] === r[e]; e++);
  var o = n - e;
  for (i = 1; i <= o && t[n - i] === r[s - i]; i++);
  return (gs = r.slice(e, 1 < i ? 1 - i : void 0));
}
function ys(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Gr() {
  return !0;
}
function gu() {
  return !1;
}
function tt(e) {
  function t(n, i, r, s, o) {
    ((this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Gr
        : gu),
      (this.isPropagationStopped = gu),
      this
    );
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Gr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Gr));
      },
      persist: function () {},
      isPersistent: Gr,
    }),
    t
  );
}
var ki = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Kl = tt(ki),
  Ar = de({}, ki, { view: 0, detail: 0 }),
  Im = tt(Ar),
  Lo,
  Ro,
  Di,
  ao = de({}, Ar, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Jl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Di &&
            (Di && e.type === "mousemove"
              ? ((Lo = e.screenX - Di.screenX), (Ro = e.screenY - Di.screenY))
              : (Ro = Lo = 0),
            (Di = e)),
          Lo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ro;
    },
  }),
  yu = tt(ao),
  Dm = de({}, ao, { dataTransfer: 0 }),
  Lm = tt(Dm),
  Rm = de({}, Ar, { relatedTarget: 0 }),
  _o = tt(Rm),
  _m = de({}, ki, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zm = tt(_m),
  Om = de({}, ki, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Bm = tt(Om),
  Hm = de({}, ki, { data: 0 }),
  vu = tt(Hm),
  Fm = {
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
    MozPrintableKey: "Unidentified",
  },
  Um = {
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
    224: "Meta",
  },
  Wm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Vm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Wm[e]) ? !!t[e] : !1;
}
function Jl() {
  return Vm;
}
var qm = de({}, Ar, {
    key: function (e) {
      if (e.key) {
        var t = Fm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ys(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Um[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Jl,
    charCode: function (e) {
      return e.type === "keypress" ? ys(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ys(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  $m = tt(qm),
  Gm = de({}, ao, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  wu = tt(Gm),
  Qm = de({}, Ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jl,
  }),
  Km = tt(Qm),
  Jm = de({}, ki, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ym = tt(Jm),
  Xm = de({}, ao, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zm = tt(Xm),
  e2 = [9, 13, 27, 32],
  Yl = zt && "CompositionEvent" in window,
  Qi = null;
zt && "documentMode" in document && (Qi = document.documentMode);
var t2 = zt && "TextEvent" in window && !Qi,
  $p = zt && (!Yl || (Qi && 8 < Qi && 11 >= Qi)),
  xu = " ",
  ku = !1;
function Gp(e, t) {
  switch (e) {
    case "keyup":
      return e2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Qp(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Gn = !1;
function n2(e, t) {
  switch (e) {
    case "compositionend":
      return Qp(t);
    case "keypress":
      return t.which !== 32 ? null : ((ku = !0), xu);
    case "textInput":
      return ((e = t.data), e === xu && ku ? null : e);
    default:
      return null;
  }
}
function i2(e, t) {
  if (Gn)
    return e === "compositionend" || (!Yl && Gp(e, t))
      ? ((e = qp()), (gs = Ql = Jt = null), (Gn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return $p && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var r2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!r2[e.type] : t === "textarea";
}
function Kp(e, t, n, i) {
  (Np(i),
    (t = _s(t, "onChange")),
    0 < t.length &&
      ((n = new Kl("onChange", "change", null, n, i)),
      e.push({ event: n, listeners: t })));
}
var Ki = null,
  dr = null;
function s2(e) {
  oh(e, 0);
}
function lo(e) {
  var t = Jn(e);
  if (wp(t)) return e;
}
function o2(e, t) {
  if (e === "change") return t;
}
var Jp = !1;
if (zt) {
  var zo;
  if (zt) {
    var Oo = "oninput" in document;
    if (!Oo) {
      var Cu = document.createElement("div");
      (Cu.setAttribute("oninput", "return;"),
        (Oo = typeof Cu.oninput == "function"));
    }
    zo = Oo;
  } else zo = !1;
  Jp = zo && (!document.documentMode || 9 < document.documentMode);
}
function bu() {
  Ki && (Ki.detachEvent("onpropertychange", Yp), (dr = Ki = null));
}
function Yp(e) {
  if (e.propertyName === "value" && lo(dr)) {
    var t = [];
    (Kp(t, dr, e, Wl(e)), jp(s2, t));
  }
}
function a2(e, t, n) {
  e === "focusin"
    ? (bu(), (Ki = t), (dr = n), Ki.attachEvent("onpropertychange", Yp))
    : e === "focusout" && bu();
}
function l2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return lo(dr);
}
function c2(e, t) {
  if (e === "click") return lo(t);
}
function u2(e, t) {
  if (e === "input" || e === "change") return lo(t);
}
function d2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var yt = typeof Object.is == "function" ? Object.is : d2;
function pr(e, t) {
  if (yt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    i = Object.keys(t);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!Ca.call(t, r) || !yt(e[r], t[r])) return !1;
  }
  return !0;
}
function Eu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Nu(e, t) {
  var n = Eu(e);
  e = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = e + n.textContent.length), e <= t && i >= t))
        return { node: n, offset: t - e };
      e = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Eu(n);
  }
}
function Xp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Xp(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Zp() {
  for (var e = window, t = Ms(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ms(e.document);
  }
  return t;
}
function Xl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function p2(e) {
  var t = Zp(),
    n = e.focusedElem,
    i = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xp(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && Xl(n)) {
      if (
        ((t = i.start),
        (e = i.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var r = n.textContent.length,
          s = Math.min(i.start, r);
        ((i = i.end === void 0 ? s : Math.min(i.end, r)),
          !e.extend && s > i && ((r = i), (i = s), (s = r)),
          (r = Nu(n, s)));
        var o = Nu(n, i);
        r &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          s > i
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var h2 = zt && "documentMode" in document && 11 >= document.documentMode,
  Qn = null,
  Ua = null,
  Ji = null,
  Wa = !1;
function Tu(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wa ||
    Qn == null ||
    Qn !== Ms(i) ||
    ((i = Qn),
    "selectionStart" in i && Xl(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (Ji && pr(Ji, i)) ||
      ((Ji = i),
      (i = _s(Ua, "onSelect")),
      0 < i.length &&
        ((t = new Kl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = Qn))));
}
function Qr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Kn = {
    animationend: Qr("Animation", "AnimationEnd"),
    animationiteration: Qr("Animation", "AnimationIteration"),
    animationstart: Qr("Animation", "AnimationStart"),
    transitionend: Qr("Transition", "TransitionEnd"),
  },
  Bo = {},
  eh = {};
zt &&
  ((eh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Kn.animationend.animation,
    delete Kn.animationiteration.animation,
    delete Kn.animationstart.animation),
  "TransitionEvent" in window || delete Kn.transitionend.transition);
function co(e) {
  if (Bo[e]) return Bo[e];
  if (!Kn[e]) return e;
  var t = Kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in eh) return (Bo[e] = t[n]);
  return e;
}
var th = co("animationend"),
  nh = co("animationiteration"),
  ih = co("animationstart"),
  rh = co("transitionend"),
  sh = new Map(),
  Pu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function pn(e, t) {
  (sh.set(e, t), Rn(t, [e]));
}
for (var Ho = 0; Ho < Pu.length; Ho++) {
  var Fo = Pu[Ho],
    f2 = Fo.toLowerCase(),
    m2 = Fo[0].toUpperCase() + Fo.slice(1);
  pn(f2, "on" + m2);
}
pn(th, "onAnimationEnd");
pn(nh, "onAnimationIteration");
pn(ih, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(rh, "onTransitionEnd");
hi("onMouseEnter", ["mouseout", "mouseover"]);
hi("onMouseLeave", ["mouseout", "mouseover"]);
hi("onPointerEnter", ["pointerout", "pointerover"]);
hi("onPointerLeave", ["pointerout", "pointerover"]);
Rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var qi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  g2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));
function Mu(e, t, n) {
  var i = e.type || "unknown-event";
  ((e.currentTarget = n), fm(i, t, void 0, e), (e.currentTarget = null));
}
function oh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      r = i.event;
    i = i.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = i.length - 1; 0 <= o; o--) {
          var l = i[o],
            c = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), c !== s && r.isPropagationStopped())) break e;
          (Mu(r, l, u), (s = c));
        }
      else
        for (o = 0; o < i.length; o++) {
          if (
            ((l = i[o]),
            (c = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            c !== s && r.isPropagationStopped())
          )
            break e;
          (Mu(r, l, u), (s = c));
        }
    }
  }
  if (As) throw ((e = Oa), (As = !1), (Oa = null), e);
}
function se(e, t) {
  var n = t[Qa];
  n === void 0 && (n = t[Qa] = new Set());
  var i = e + "__bubble";
  n.has(i) || (ah(t, e, 2, !1), n.add(i));
}
function Uo(e, t, n) {
  var i = 0;
  (t && (i |= 4), ah(n, e, i, t));
}
var Kr = "_reactListening" + Math.random().toString(36).slice(2);
function hr(e) {
  if (!e[Kr]) {
    ((e[Kr] = !0),
      fp.forEach(function (n) {
        n !== "selectionchange" && (g2.has(n) || Uo(n, !1, e), Uo(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Kr] || ((t[Kr] = !0), Uo("selectionchange", !1, t));
  }
}
function ah(e, t, n, i) {
  switch (Vp(t)) {
    case 1:
      var r = jm;
      break;
    case 4:
      r = Am;
      break;
    default:
      r = Gl;
  }
  ((n = r.bind(null, t, n, e)),
    (r = void 0),
    !za ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (r = !0),
    i
      ? r !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: r })
        : e.addEventListener(t, n, !0)
      : r !== void 0
        ? e.addEventListener(t, n, { passive: r })
        : e.addEventListener(t, n, !1));
}
function Wo(e, t, n, i, r) {
  var s = i;
  if (!(t & 1) && !(t & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var o = i.tag;
      if (o === 3 || o === 4) {
        var l = i.stateNode.containerInfo;
        if (l === r || (l.nodeType === 8 && l.parentNode === r)) break;
        if (o === 4)
          for (o = i.return; o !== null; ) {
            var c = o.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = o.stateNode.containerInfo),
              c === r || (c.nodeType === 8 && c.parentNode === r))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Sn(l)), o === null)) return;
          if (((c = o.tag), c === 5 || c === 6)) {
            i = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      i = i.return;
    }
  jp(function () {
    var u = s,
      d = Wl(n),
      p = [];
    e: {
      var f = sh.get(e);
      if (f !== void 0) {
        var h = Kl,
          w = e;
        switch (e) {
          case "keypress":
            if (ys(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = $m;
            break;
          case "focusin":
            ((w = "focus"), (h = _o));
            break;
          case "focusout":
            ((w = "blur"), (h = _o));
            break;
          case "beforeblur":
          case "afterblur":
            h = _o;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = yu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Lm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Km;
            break;
          case th:
          case nh:
          case ih:
            h = zm;
            break;
          case rh:
            h = Ym;
            break;
          case "scroll":
            h = Im;
            break;
          case "wheel":
            h = Zm;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Bm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = wu;
        }
        var k = (t & 4) !== 0,
          S = !k && e === "scroll",
          y = k ? (f !== null ? f + "Capture" : null) : f;
        k = [];
        for (var m = u, g; m !== null; ) {
          g = m;
          var C = g.stateNode;
          if (
            (g.tag === 5 &&
              C !== null &&
              ((g = C),
              y !== null && ((C = ar(m, y)), C != null && k.push(fr(m, C, g)))),
            S)
          )
            break;
          m = m.return;
        }
        0 < k.length &&
          ((f = new h(f, w, null, n, d)), p.push({ event: f, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Ra &&
            (w = n.relatedTarget || n.fromElement) &&
            (Sn(w) || w[Ot]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          h
            ? ((w = n.relatedTarget || n.toElement),
              (h = u),
              (w = w ? Sn(w) : null),
              w !== null &&
                ((S = _n(w)), w !== S || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((h = null), (w = u)),
          h !== w)
        ) {
          if (
            ((k = yu),
            (C = "onMouseLeave"),
            (y = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = wu),
              (C = "onPointerLeave"),
              (y = "onPointerEnter"),
              (m = "pointer")),
            (S = h == null ? f : Jn(h)),
            (g = w == null ? f : Jn(w)),
            (f = new k(C, m + "leave", h, n, d)),
            (f.target = S),
            (f.relatedTarget = g),
            (C = null),
            Sn(d) === u &&
              ((k = new k(y, m + "enter", w, n, d)),
              (k.target = g),
              (k.relatedTarget = S),
              (C = k)),
            (S = C),
            h && w)
          )
            t: {
              for (k = h, y = w, m = 0, g = k; g; g = Un(g)) m++;
              for (g = 0, C = y; C; C = Un(C)) g++;
              for (; 0 < m - g; ) ((k = Un(k)), m--);
              for (; 0 < g - m; ) ((y = Un(y)), g--);
              for (; m--; ) {
                if (k === y || (y !== null && k === y.alternate)) break t;
                ((k = Un(k)), (y = Un(y)));
              }
              k = null;
            }
          else k = null;
          (h !== null && ju(p, f, h, k, !1),
            w !== null && S !== null && ju(p, S, w, k, !0));
        }
      }
      e: {
        if (
          ((f = u ? Jn(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var N = o2;
        else if (Su(f))
          if (Jp) N = u2;
          else {
            N = l2;
            var b = a2;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (N = c2);
        if (N && (N = N(e, u))) {
          Kp(p, N, n, d);
          break e;
        }
        (b && b(e, f, u),
          e === "focusout" &&
            (b = f._wrapperState) &&
            b.controlled &&
            f.type === "number" &&
            ja(f, "number", f.value));
      }
      switch (((b = u ? Jn(u) : window), e)) {
        case "focusin":
          (Su(b) || b.contentEditable === "true") &&
            ((Qn = b), (Ua = u), (Ji = null));
          break;
        case "focusout":
          Ji = Ua = Qn = null;
          break;
        case "mousedown":
          Wa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Wa = !1), Tu(p, n, d));
          break;
        case "selectionchange":
          if (h2) break;
        case "keydown":
        case "keyup":
          Tu(p, n, d);
      }
      var P;
      if (Yl)
        e: {
          switch (e) {
            case "compositionstart":
              var D = "onCompositionStart";
              break e;
            case "compositionend":
              D = "onCompositionEnd";
              break e;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break e;
          }
          D = void 0;
        }
      else
        Gn
          ? Gp(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      (D &&
        ($p &&
          n.locale !== "ko" &&
          (Gn || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && Gn && (P = qp())
            : ((Jt = d),
              (Ql = "value" in Jt ? Jt.value : Jt.textContent),
              (Gn = !0))),
        (b = _s(u, D)),
        0 < b.length &&
          ((D = new vu(D, e, null, n, d)),
          p.push({ event: D, listeners: b }),
          P ? (D.data = P) : ((P = Qp(n)), P !== null && (D.data = P)))),
        (P = t2 ? n2(e, n) : i2(e, n)) &&
          ((u = _s(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new vu("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = P))));
    }
    oh(p, t);
  });
}
function fr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _s(e, t) {
  for (var n = t + "Capture", i = []; e !== null; ) {
    var r = e,
      s = r.stateNode;
    (r.tag === 5 &&
      s !== null &&
      ((r = s),
      (s = ar(e, n)),
      s != null && i.unshift(fr(e, s, r)),
      (s = ar(e, t)),
      s != null && i.push(fr(e, s, r))),
      (e = e.return));
  }
  return i;
}
function Un(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ju(e, t, n, i, r) {
  for (var s = t._reactName, o = []; n !== null && n !== i; ) {
    var l = n,
      c = l.alternate,
      u = l.stateNode;
    if (c !== null && c === i) break;
    (l.tag === 5 &&
      u !== null &&
      ((l = u),
      r
        ? ((c = ar(n, s)), c != null && o.unshift(fr(n, c, l)))
        : r || ((c = ar(n, s)), c != null && o.push(fr(n, c, l)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var y2 = /\r\n?/g,
  v2 = /\u0000|\uFFFD/g;
function Au(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      y2,
      `
`,
    )
    .replace(v2, "");
}
function Jr(e, t, n) {
  if (((t = Au(t)), Au(e) !== t && n)) throw Error(M(425));
}
function zs() {}
var Va = null,
  qa = null;
function $a(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ga = typeof setTimeout == "function" ? setTimeout : void 0,
  w2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Iu = typeof Promise == "function" ? Promise : void 0,
  x2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Iu < "u"
        ? function (e) {
            return Iu.resolve(null).then(e).catch(k2);
          }
        : Ga;
function k2(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vo(e, t) {
  var n = t,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((e.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === "/$")) {
        if (i === 0) {
          (e.removeChild(r), ur(t));
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = r;
  } while (n);
  ur(t);
}
function nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Du(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Si = Math.random().toString(36).slice(2),
  St = "__reactFiber$" + Si,
  mr = "__reactProps$" + Si,
  Ot = "__reactContainer$" + Si,
  Qa = "__reactEvents$" + Si,
  S2 = "__reactListeners$" + Si,
  C2 = "__reactHandles$" + Si;
function Sn(e) {
  var t = e[St];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ot] || n[St])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Du(e); e !== null; ) {
          if ((n = e[St])) return n;
          e = Du(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Ir(e) {
  return (
    (e = e[St] || e[Ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function uo(e) {
  return e[mr] || null;
}
var Ka = [],
  Yn = -1;
function hn(e) {
  return { current: e };
}
function oe(e) {
  0 > Yn || ((e.current = Ka[Yn]), (Ka[Yn] = null), Yn--);
}
function ne(e, t) {
  (Yn++, (Ka[Yn] = e.current), (e.current = t));
}
var dn = {},
  Ae = hn(dn),
  Ue = hn(!1),
  Mn = dn;
function fi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dn;
  var i = e.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    s;
  for (s in n) r[s] = t[s];
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function We(e) {
  return ((e = e.childContextTypes), e != null);
}
function Os() {
  (oe(Ue), oe(Ae));
}
function Lu(e, t, n) {
  if (Ae.current !== dn) throw Error(M(168));
  (ne(Ae, t), ne(Ue, n));
}
function lh(e, t, n) {
  var i = e.stateNode;
  if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in t)) throw Error(M(108, am(e) || "Unknown", r));
  return de({}, n, i);
}
function Bs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (Mn = Ae.current),
    ne(Ae, e),
    ne(Ue, Ue.current),
    !0
  );
}
function Ru(e, t, n) {
  var i = e.stateNode;
  if (!i) throw Error(M(169));
  (n
    ? ((e = lh(e, t, Mn)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      oe(Ue),
      oe(Ae),
      ne(Ae, e))
    : oe(Ue),
    ne(Ue, n));
}
var At = null,
  po = !1,
  qo = !1;
function ch(e) {
  At === null ? (At = [e]) : At.push(e);
}
function b2(e) {
  ((po = !0), ch(e));
}
function fn() {
  if (!qo && At !== null) {
    qo = !0;
    var e = 0,
      t = X;
    try {
      var n = At;
      for (X = 1; e < n.length; e++) {
        var i = n[e];
        do i = i(!0);
        while (i !== null);
      }
      ((At = null), (po = !1));
    } catch (r) {
      throw (At !== null && (At = At.slice(e + 1)), Lp(Vl, fn), r);
    } finally {
      ((X = t), (qo = !1));
    }
  }
  return null;
}
var Xn = [],
  Zn = 0,
  Hs = null,
  Fs = 0,
  nt = [],
  it = 0,
  jn = null,
  Dt = 1,
  Lt = "";
function wn(e, t) {
  ((Xn[Zn++] = Fs), (Xn[Zn++] = Hs), (Hs = e), (Fs = t));
}
function uh(e, t, n) {
  ((nt[it++] = Dt), (nt[it++] = Lt), (nt[it++] = jn), (jn = e));
  var i = Dt;
  e = Lt;
  var r = 32 - mt(i) - 1;
  ((i &= ~(1 << r)), (n += 1));
  var s = 32 - mt(t) + r;
  if (30 < s) {
    var o = r - (r % 5);
    ((s = (i & ((1 << o) - 1)).toString(32)),
      (i >>= o),
      (r -= o),
      (Dt = (1 << (32 - mt(t) + r)) | (n << r) | i),
      (Lt = s + e));
  } else ((Dt = (1 << s) | (n << r) | i), (Lt = e));
}
function Zl(e) {
  e.return !== null && (wn(e, 1), uh(e, 1, 0));
}
function ec(e) {
  for (; e === Hs; )
    ((Hs = Xn[--Zn]), (Xn[Zn] = null), (Fs = Xn[--Zn]), (Xn[Zn] = null));
  for (; e === jn; )
    ((jn = nt[--it]),
      (nt[it] = null),
      (Lt = nt[--it]),
      (nt[it] = null),
      (Dt = nt[--it]),
      (nt[it] = null));
}
var Xe = null,
  Je = null,
  ae = !1,
  ft = null;
function dh(e, t) {
  var n = st(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function _u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Xe = e), (Je = nn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Xe = e), (Je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = jn !== null ? { id: Dt, overflow: Lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = st(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Xe = e),
            (Je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ja(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ya(e) {
  if (ae) {
    var t = Je;
    if (t) {
      var n = t;
      if (!_u(e, t)) {
        if (Ja(e)) throw Error(M(418));
        t = nn(n.nextSibling);
        var i = Xe;
        t && _u(e, t)
          ? dh(i, n)
          : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (Xe = e));
      }
    } else {
      if (Ja(e)) throw Error(M(418));
      ((e.flags = (e.flags & -4097) | 2), (ae = !1), (Xe = e));
    }
  }
}
function zu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Xe = e;
}
function Yr(e) {
  if (e !== Xe) return !1;
  if (!ae) return (zu(e), (ae = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$a(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (Ja(e)) throw (ph(), Error(M(418)));
    for (; t; ) (dh(e, t), (t = nn(t.nextSibling)));
  }
  if ((zu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = nn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = Xe ? nn(e.stateNode.nextSibling) : null;
  return !0;
}
function ph() {
  for (var e = Je; e; ) e = nn(e.nextSibling);
}
function mi() {
  ((Je = Xe = null), (ae = !1));
}
function tc(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var E2 = Ft.ReactCurrentBatchConfig;
function Li(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(M(147, e));
      var r = i,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = r.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Xr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Ou(e) {
  var t = e._init;
  return t(e._payload);
}
function hh(e) {
  function t(y, m) {
    if (e) {
      var g = y.deletions;
      g === null ? ((y.deletions = [m]), (y.flags |= 16)) : g.push(m);
    }
  }
  function n(y, m) {
    if (!e) return null;
    for (; m !== null; ) (t(y, m), (m = m.sibling));
    return null;
  }
  function i(y, m) {
    for (y = new Map(); m !== null; )
      (m.key !== null ? y.set(m.key, m) : y.set(m.index, m), (m = m.sibling));
    return y;
  }
  function r(y, m) {
    return ((y = an(y, m)), (y.index = 0), (y.sibling = null), y);
  }
  function s(y, m, g) {
    return (
      (y.index = g),
      e
        ? ((g = y.alternate),
          g !== null
            ? ((g = g.index), g < m ? ((y.flags |= 2), m) : g)
            : ((y.flags |= 2), m))
        : ((y.flags |= 1048576), m)
    );
  }
  function o(y) {
    return (e && y.alternate === null && (y.flags |= 2), y);
  }
  function l(y, m, g, C) {
    return m === null || m.tag !== 6
      ? ((m = Xo(g, y.mode, C)), (m.return = y), m)
      : ((m = r(m, g)), (m.return = y), m);
  }
  function c(y, m, g, C) {
    var N = g.type;
    return N === $n
      ? d(y, m, g.props.children, C, g.key)
      : m !== null &&
          (m.elementType === N ||
            (typeof N == "object" &&
              N !== null &&
              N.$$typeof === qt &&
              Ou(N) === m.type))
        ? ((C = r(m, g.props)), (C.ref = Li(y, m, g)), (C.return = y), C)
        : ((C = bs(g.type, g.key, g.props, null, y.mode, C)),
          (C.ref = Li(y, m, g)),
          (C.return = y),
          C);
  }
  function u(y, m, g, C) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== g.containerInfo ||
      m.stateNode.implementation !== g.implementation
      ? ((m = Zo(g, y.mode, C)), (m.return = y), m)
      : ((m = r(m, g.children || [])), (m.return = y), m);
  }
  function d(y, m, g, C, N) {
    return m === null || m.tag !== 7
      ? ((m = Tn(g, y.mode, C, N)), (m.return = y), m)
      : ((m = r(m, g)), (m.return = y), m);
  }
  function p(y, m, g) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((m = Xo("" + m, y.mode, g)), (m.return = y), m);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Fr:
          return (
            (g = bs(m.type, m.key, m.props, null, y.mode, g)),
            (g.ref = Li(y, null, m)),
            (g.return = y),
            g
          );
        case qn:
          return ((m = Zo(m, y.mode, g)), (m.return = y), m);
        case qt:
          var C = m._init;
          return p(y, C(m._payload), g);
      }
      if (Wi(m) || Mi(m))
        return ((m = Tn(m, y.mode, g, null)), (m.return = y), m);
      Xr(y, m);
    }
    return null;
  }
  function f(y, m, g, C) {
    var N = m !== null ? m.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return N !== null ? null : l(y, m, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Fr:
          return g.key === N ? c(y, m, g, C) : null;
        case qn:
          return g.key === N ? u(y, m, g, C) : null;
        case qt:
          return ((N = g._init), f(y, m, N(g._payload), C));
      }
      if (Wi(g) || Mi(g)) return N !== null ? null : d(y, m, g, C, null);
      Xr(y, g);
    }
    return null;
  }
  function h(y, m, g, C, N) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return ((y = y.get(g) || null), l(m, y, "" + C, N));
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Fr:
          return (
            (y = y.get(C.key === null ? g : C.key) || null),
            c(m, y, C, N)
          );
        case qn:
          return (
            (y = y.get(C.key === null ? g : C.key) || null),
            u(m, y, C, N)
          );
        case qt:
          var b = C._init;
          return h(y, m, g, b(C._payload), N);
      }
      if (Wi(C) || Mi(C)) return ((y = y.get(g) || null), d(m, y, C, N, null));
      Xr(m, C);
    }
    return null;
  }
  function w(y, m, g, C) {
    for (
      var N = null, b = null, P = m, D = (m = 0), F = null;
      P !== null && D < g.length;
      D++
    ) {
      P.index > D ? ((F = P), (P = null)) : (F = P.sibling);
      var R = f(y, P, g[D], C);
      if (R === null) {
        P === null && (P = F);
        break;
      }
      (e && P && R.alternate === null && t(y, P),
        (m = s(R, m, D)),
        b === null ? (N = R) : (b.sibling = R),
        (b = R),
        (P = F));
    }
    if (D === g.length) return (n(y, P), ae && wn(y, D), N);
    if (P === null) {
      for (; D < g.length; D++)
        ((P = p(y, g[D], C)),
          P !== null &&
            ((m = s(P, m, D)),
            b === null ? (N = P) : (b.sibling = P),
            (b = P)));
      return (ae && wn(y, D), N);
    }
    for (P = i(y, P); D < g.length; D++)
      ((F = h(P, y, D, g[D], C)),
        F !== null &&
          (e && F.alternate !== null && P.delete(F.key === null ? D : F.key),
          (m = s(F, m, D)),
          b === null ? (N = F) : (b.sibling = F),
          (b = F)));
    return (
      e &&
        P.forEach(function (_) {
          return t(y, _);
        }),
      ae && wn(y, D),
      N
    );
  }
  function k(y, m, g, C) {
    var N = Mi(g);
    if (typeof N != "function") throw Error(M(150));
    if (((g = N.call(g)), g == null)) throw Error(M(151));
    for (
      var b = (N = null), P = m, D = (m = 0), F = null, R = g.next();
      P !== null && !R.done;
      D++, R = g.next()
    ) {
      P.index > D ? ((F = P), (P = null)) : (F = P.sibling);
      var _ = f(y, P, R.value, C);
      if (_ === null) {
        P === null && (P = F);
        break;
      }
      (e && P && _.alternate === null && t(y, P),
        (m = s(_, m, D)),
        b === null ? (N = _) : (b.sibling = _),
        (b = _),
        (P = F));
    }
    if (R.done) return (n(y, P), ae && wn(y, D), N);
    if (P === null) {
      for (; !R.done; D++, R = g.next())
        ((R = p(y, R.value, C)),
          R !== null &&
            ((m = s(R, m, D)),
            b === null ? (N = R) : (b.sibling = R),
            (b = R)));
      return (ae && wn(y, D), N);
    }
    for (P = i(y, P); !R.done; D++, R = g.next())
      ((R = h(P, y, D, R.value, C)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? D : R.key),
          (m = s(R, m, D)),
          b === null ? (N = R) : (b.sibling = R),
          (b = R)));
    return (
      e &&
        P.forEach(function (O) {
          return t(y, O);
        }),
      ae && wn(y, D),
      N
    );
  }
  function S(y, m, g, C) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === $n &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Fr:
          e: {
            for (var N = g.key, b = m; b !== null; ) {
              if (b.key === N) {
                if (((N = g.type), N === $n)) {
                  if (b.tag === 7) {
                    (n(y, b.sibling),
                      (m = r(b, g.props.children)),
                      (m.return = y),
                      (y = m));
                    break e;
                  }
                } else if (
                  b.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === qt &&
                    Ou(N) === b.type)
                ) {
                  (n(y, b.sibling),
                    (m = r(b, g.props)),
                    (m.ref = Li(y, b, g)),
                    (m.return = y),
                    (y = m));
                  break e;
                }
                n(y, b);
                break;
              } else t(y, b);
              b = b.sibling;
            }
            g.type === $n
              ? ((m = Tn(g.props.children, y.mode, C, g.key)),
                (m.return = y),
                (y = m))
              : ((C = bs(g.type, g.key, g.props, null, y.mode, C)),
                (C.ref = Li(y, m, g)),
                (C.return = y),
                (y = C));
          }
          return o(y);
        case qn:
          e: {
            for (b = g.key; m !== null; ) {
              if (m.key === b)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === g.containerInfo &&
                  m.stateNode.implementation === g.implementation
                ) {
                  (n(y, m.sibling),
                    (m = r(m, g.children || [])),
                    (m.return = y),
                    (y = m));
                  break e;
                } else {
                  n(y, m);
                  break;
                }
              else t(y, m);
              m = m.sibling;
            }
            ((m = Zo(g, y.mode, C)), (m.return = y), (y = m));
          }
          return o(y);
        case qt:
          return ((b = g._init), S(y, m, b(g._payload), C));
      }
      if (Wi(g)) return w(y, m, g, C);
      if (Mi(g)) return k(y, m, g, C);
      Xr(y, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        m !== null && m.tag === 6
          ? (n(y, m.sibling), (m = r(m, g)), (m.return = y), (y = m))
          : (n(y, m), (m = Xo(g, y.mode, C)), (m.return = y), (y = m)),
        o(y))
      : n(y, m);
  }
  return S;
}
var gi = hh(!0),
  fh = hh(!1),
  Us = hn(null),
  Ws = null,
  ei = null,
  nc = null;
function ic() {
  nc = ei = Ws = null;
}
function rc(e) {
  var t = Us.current;
  (oe(Us), (e._currentValue = t));
}
function Xa(e, t, n) {
  for (; e !== null; ) {
    var i = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
        : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ai(e, t) {
  ((Ws = e),
    (nc = ei = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (He = !0), (e.firstContext = null)));
}
function at(e) {
  var t = e._currentValue;
  if (nc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ei === null)) {
      if (Ws === null) throw Error(M(308));
      ((ei = e), (Ws.dependencies = { lanes: 0, firstContext: e }));
    } else ei = ei.next = e;
  return t;
}
var Cn = null;
function sc(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function mh(e, t, n, i) {
  var r = t.interleaved;
  return (
    r === null ? ((n.next = n), sc(t)) : ((n.next = r.next), (r.next = n)),
    (t.interleaved = n),
    Bt(e, i)
  );
}
function Bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var $t = !1;
function oc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function gh(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Rt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function rn(e, t, n) {
  var i = e.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), K & 2)) {
    var r = i.pending;
    return (
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (i.pending = t),
      Bt(e, n)
    );
  }
  return (
    (r = i.interleaved),
    r === null ? ((t.next = t), sc(i)) : ((t.next = r.next), (r.next = t)),
    (i.interleaved = t),
    Bt(e, n)
  );
}
function vs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var i = t.lanes;
    ((i &= e.pendingLanes), (n |= i), (t.lanes = n), ql(e, n));
  }
}
function Bu(e, t) {
  var n = e.updateQueue,
    i = e.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (r = s = o) : (s = s.next = o), (n = n.next));
      } while (n !== null);
      s === null ? (r = s = t) : (s = s.next = t);
    } else r = s = t;
    ((n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: s,
      shared: i.shared,
      effects: i.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Vs(e, t, n, i) {
  var r = e.updateQueue;
  $t = !1;
  var s = r.firstBaseUpdate,
    o = r.lastBaseUpdate,
    l = r.shared.pending;
  if (l !== null) {
    r.shared.pending = null;
    var c = l,
      u = c.next;
    ((c.next = null), o === null ? (s = u) : (o.next = u), (o = c));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== o &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (s !== null) {
    var p = r.baseState;
    ((o = 0), (d = u = c = null), (l = s));
    do {
      var f = l.lane,
        h = l.eventTime;
      if ((i & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: h,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var w = e,
            k = l;
          switch (((f = t), (h = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                p = w.call(h, p, f);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (f = typeof w == "function" ? w.call(h, p, f) : w),
                f == null)
              )
                break e;
              p = de({}, p, f);
              break e;
            case 2:
              $t = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = r.effects),
          f === null ? (r.effects = [l]) : f.push(l));
      } else
        ((h = {
          eventTime: h,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = h), (c = p)) : (d = d.next = h),
          (o |= f));
      if (((l = l.next), l === null)) {
        if (((l = r.shared.pending), l === null)) break;
        ((f = l),
          (l = f.next),
          (f.next = null),
          (r.lastBaseUpdate = f),
          (r.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (c = p),
      (r.baseState = c),
      (r.firstBaseUpdate = u),
      (r.lastBaseUpdate = d),
      (t = r.shared.interleaved),
      t !== null)
    ) {
      r = t;
      do ((o |= r.lane), (r = r.next));
      while (r !== t);
    } else s === null && (r.shared.lanes = 0);
    ((In |= o), (e.lanes = o), (e.memoizedState = p));
  }
}
function Hu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var i = e[t],
        r = i.callback;
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != "function"))
          throw Error(M(191, r));
        r.call(i);
      }
    }
}
var Dr = {},
  Nt = hn(Dr),
  gr = hn(Dr),
  yr = hn(Dr);
function bn(e) {
  if (e === Dr) throw Error(M(174));
  return e;
}
function ac(e, t) {
  switch ((ne(yr, t), ne(gr, e), ne(Nt, Dr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ia(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ia(t, e)));
  }
  (oe(Nt), ne(Nt, t));
}
function yi() {
  (oe(Nt), oe(gr), oe(yr));
}
function yh(e) {
  bn(yr.current);
  var t = bn(Nt.current),
    n = Ia(t, e.type);
  t !== n && (ne(gr, e), ne(Nt, n));
}
function lc(e) {
  gr.current === e && (oe(Nt), oe(gr));
}
var ce = hn(0);
function qs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var $o = [];
function cc() {
  for (var e = 0; e < $o.length; e++)
    $o[e]._workInProgressVersionPrimary = null;
  $o.length = 0;
}
var ws = Ft.ReactCurrentDispatcher,
  Go = Ft.ReactCurrentBatchConfig,
  An = 0,
  ue = null,
  xe = null,
  Se = null,
  $s = !1,
  Yi = !1,
  vr = 0,
  N2 = 0;
function Te() {
  throw Error(M(321));
}
function uc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!yt(e[n], t[n])) return !1;
  return !0;
}
function dc(e, t, n, i, r, s) {
  if (
    ((An = s),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ws.current = e === null || e.memoizedState === null ? j2 : A2),
    (e = n(i, r)),
    Yi)
  ) {
    s = 0;
    do {
      if (((Yi = !1), (vr = 0), 25 <= s)) throw Error(M(301));
      ((s += 1),
        (Se = xe = null),
        (t.updateQueue = null),
        (ws.current = I2),
        (e = n(i, r)));
    } while (Yi);
  }
  if (
    ((ws.current = Gs),
    (t = xe !== null && xe.next !== null),
    (An = 0),
    (Se = xe = ue = null),
    ($s = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function pc() {
  var e = vr !== 0;
  return ((vr = 0), e);
}
function xt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Se === null ? (ue.memoizedState = Se = e) : (Se = Se.next = e), Se);
}
function lt() {
  if (xe === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = Se === null ? ue.memoizedState : Se.next;
  if (t !== null) ((Se = t), (xe = e));
  else {
    if (e === null) throw Error(M(310));
    ((xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null,
      }),
      Se === null ? (ue.memoizedState = Se = e) : (Se = Se.next = e));
  }
  return Se;
}
function wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qo(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var i = xe,
    r = i.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (r !== null) {
      var o = r.next;
      ((r.next = s.next), (s.next = o));
    }
    ((i.baseQueue = r = s), (n.pending = null));
  }
  if (r !== null) {
    ((s = r.next), (i = i.baseState));
    var l = (o = null),
      c = null,
      u = s;
    do {
      var d = u.lane;
      if ((An & d) === d)
        (c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (i = u.hasEagerState ? u.eagerState : e(i, u.action)));
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (c === null ? ((l = c = p), (o = i)) : (c = c.next = p),
          (ue.lanes |= d),
          (In |= d));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (c === null ? (o = i) : (c.next = l),
      yt(i, t.memoizedState) || (He = !0),
      (t.memoizedState = i),
      (t.baseState = o),
      (t.baseQueue = c),
      (n.lastRenderedState = i));
  }
  if (((e = n.interleaved), e !== null)) {
    r = e;
    do ((s = r.lane), (ue.lanes |= s), (In |= s), (r = r.next));
    while (r !== e);
  } else r === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ko(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var i = n.dispatch,
    r = n.pending,
    s = t.memoizedState;
  if (r !== null) {
    n.pending = null;
    var o = (r = r.next);
    do ((s = e(s, o.action)), (o = o.next));
    while (o !== r);
    (yt(s, t.memoizedState) || (He = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, i];
}
function vh() {}
function wh(e, t) {
  var n = ue,
    i = lt(),
    r = t(),
    s = !yt(i.memoizedState, r);
  if (
    (s && ((i.memoizedState = r), (He = !0)),
    (i = i.queue),
    hc(Sh.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || s || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      xr(9, kh.bind(null, n, i, r, t), void 0, null),
      Ce === null)
    )
      throw Error(M(349));
    An & 30 || xh(n, t, r);
  }
  return r;
}
function xh(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function kh(e, t, n, i) {
  ((t.value = n), (t.getSnapshot = i), Ch(t) && bh(e));
}
function Sh(e, t, n) {
  return n(function () {
    Ch(t) && bh(e);
  });
}
function Ch(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yt(e, n);
  } catch {
    return !0;
  }
}
function bh(e) {
  var t = Bt(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function Fu(e) {
  var t = xt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = M2.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function xr(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  );
}
function Eh() {
  return lt().memoizedState;
}
function xs(e, t, n, i) {
  var r = xt();
  ((ue.flags |= e),
    (r.memoizedState = xr(1 | t, n, void 0, i === void 0 ? null : i)));
}
function ho(e, t, n, i) {
  var r = lt();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (xe !== null) {
    var o = xe.memoizedState;
    if (((s = o.destroy), i !== null && uc(i, o.deps))) {
      r.memoizedState = xr(t, n, s, i);
      return;
    }
  }
  ((ue.flags |= e), (r.memoizedState = xr(1 | t, n, s, i)));
}
function Uu(e, t) {
  return xs(8390656, 8, e, t);
}
function hc(e, t) {
  return ho(2048, 8, e, t);
}
function Nh(e, t) {
  return ho(4, 2, e, t);
}
function Th(e, t) {
  return ho(4, 4, e, t);
}
function Ph(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Mh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    ho(4, 4, Ph.bind(null, t, e), n)
  );
}
function fc() {}
function jh(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && uc(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ah(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && uc(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ih(e, t, n) {
  return An & 21
    ? (yt(n, t) || ((n = zp()), (ue.lanes |= n), (In |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (He = !0)), (e.memoizedState = n));
}
function T2(e, t) {
  var n = X;
  ((X = n !== 0 && 4 > n ? n : 4), e(!0));
  var i = Go.transition;
  Go.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((X = n), (Go.transition = i));
  }
}
function Dh() {
  return lt().memoizedState;
}
function P2(e, t, n) {
  var i = on(e);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Lh(e))
  )
    Rh(t, n);
  else if (((n = mh(e, t, n, i)), n !== null)) {
    var r = Le();
    (gt(n, e, i, r), _h(n, t, i));
  }
}
function M2(e, t, n) {
  var i = on(e),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Lh(e)) Rh(t, r);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((r.hasEagerState = !0), (r.eagerState = l), yt(l, o))) {
          var c = t.interleaved;
          (c === null
            ? ((r.next = r), sc(t))
            : ((r.next = c.next), (c.next = r)),
            (t.interleaved = r));
          return;
        }
      } catch {
      } finally {
      }
    ((n = mh(e, t, r, i)),
      n !== null && ((r = Le()), gt(n, e, i, r), _h(n, t, i)));
  }
}
function Lh(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function Rh(e, t) {
  Yi = $s = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function _h(e, t, n) {
  if (n & 4194240) {
    var i = t.lanes;
    ((i &= e.pendingLanes), (n |= i), (t.lanes = n), ql(e, n));
  }
}
var Gs = {
    readContext: at,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1,
  },
  j2 = {
    readContext: at,
    useCallback: function (e, t) {
      return ((xt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: at,
    useEffect: Uu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        xs(4194308, 4, Ph.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return xs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return xs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = xt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var i = xt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (i.memoizedState = i.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (i.queue = e),
        (e = e.dispatch = P2.bind(null, ue, e)),
        [i.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = xt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Fu,
    useDebugValue: fc,
    useDeferredValue: function (e) {
      return (xt().memoizedState = e);
    },
    useTransition: function () {
      var e = Fu(!1),
        t = e[0];
      return ((e = T2.bind(null, e[1])), (xt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var i = ue,
        r = xt();
      if (ae) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(M(349));
        An & 30 || xh(i, t, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (r.queue = s),
        Uu(Sh.bind(null, i, s, e), [e]),
        (i.flags |= 2048),
        xr(9, kh.bind(null, i, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = xt(),
        t = Ce.identifierPrefix;
      if (ae) {
        var n = Lt,
          i = Dt;
        ((n = (i & ~(1 << (32 - mt(i) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = N2++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  A2 = {
    readContext: at,
    useCallback: jh,
    useContext: at,
    useEffect: hc,
    useImperativeHandle: Mh,
    useInsertionEffect: Nh,
    useLayoutEffect: Th,
    useMemo: Ah,
    useReducer: Qo,
    useRef: Eh,
    useState: function () {
      return Qo(wr);
    },
    useDebugValue: fc,
    useDeferredValue: function (e) {
      var t = lt();
      return Ih(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Qo(wr)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: vh,
    useSyncExternalStore: wh,
    useId: Dh,
    unstable_isNewReconciler: !1,
  },
  I2 = {
    readContext: at,
    useCallback: jh,
    useContext: at,
    useEffect: hc,
    useImperativeHandle: Mh,
    useInsertionEffect: Nh,
    useLayoutEffect: Th,
    useMemo: Ah,
    useReducer: Ko,
    useRef: Eh,
    useState: function () {
      return Ko(wr);
    },
    useDebugValue: fc,
    useDeferredValue: function (e) {
      var t = lt();
      return xe === null ? (t.memoizedState = e) : Ih(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ko(wr)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: vh,
    useSyncExternalStore: wh,
    useId: Dh,
    unstable_isNewReconciler: !1,
  };
function pt(e, t) {
  if (e && e.defaultProps) {
    ((t = de({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Za(e, t, n, i) {
  ((t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var fo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? _n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var i = Le(),
      r = on(e),
      s = Rt(i, r);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = rn(e, s, r)),
      t !== null && (gt(t, e, r, i), vs(t, e, r)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var i = Le(),
      r = on(e),
      s = Rt(i, r);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = rn(e, s, r)),
      t !== null && (gt(t, e, r, i), vs(t, e, r)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Le(),
      i = on(e),
      r = Rt(n, i);
    ((r.tag = 2),
      t != null && (r.callback = t),
      (t = rn(e, r, i)),
      t !== null && (gt(t, e, i, n), vs(t, e, i)));
  },
};
function Wu(e, t, n, i, r, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(i, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !pr(n, i) || !pr(r, s)
        : !0
  );
}
function zh(e, t, n) {
  var i = !1,
    r = dn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = at(s))
      : ((r = We(t) ? Mn : Ae.current),
        (i = t.contextTypes),
        (s = (i = i != null) ? fi(e, r) : dn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fo),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Vu(e, t, n, i) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && fo.enqueueReplaceState(t, t.state, null));
}
function el(e, t, n, i) {
  var r = e.stateNode;
  ((r.props = n), (r.state = e.memoizedState), (r.refs = {}), oc(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (r.context = at(s))
    : ((s = We(t) ? Mn : Ae.current), (r.context = fi(e, s))),
    (r.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Za(e, t, s, n), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((t = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      t !== r.state && fo.enqueueReplaceState(r, r.state, null),
      Vs(e, n, r, i),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == "function" && (e.flags |= 4194308));
}
function vi(e, t) {
  try {
    var n = "",
      i = t;
    do ((n += om(i)), (i = i.return));
    while (i);
    var r = n;
  } catch (s) {
    r =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: r, digest: null };
}
function Jo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function tl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var D2 = typeof WeakMap == "function" ? WeakMap : Map;
function Oh(e, t, n) {
  ((n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var i = t.value;
  return (
    (n.callback = function () {
      (Ks || ((Ks = !0), (dl = i)), tl(e, t));
    }),
    n
  );
}
function Bh(e, t, n) {
  ((n = Rt(-1, n)), (n.tag = 3));
  var i = e.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var r = t.value;
    ((n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        tl(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (tl(e, t),
          typeof i != "function" &&
            (sn === null ? (sn = new Set([this])) : sn.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function qu(e, t, n) {
  var i = e.pingCache;
  if (i === null) {
    i = e.pingCache = new D2();
    var r = new Set();
    i.set(t, r);
  } else ((r = i.get(t)), r === void 0 && ((r = new Set()), i.set(t, r)));
  r.has(n) || (r.add(n), (e = G2.bind(null, e, t, n)), t.then(e, e));
}
function $u(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gu(e, t, n, i, r) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = r), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Rt(-1, 1)), (t.tag = 2), rn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var L2 = Ft.ReactCurrentOwner,
  He = !1;
function De(e, t, n, i) {
  t.child = e === null ? fh(t, null, n, i) : gi(t, e.child, n, i);
}
function Qu(e, t, n, i, r) {
  n = n.render;
  var s = t.ref;
  return (
    ai(t, r),
    (i = dc(e, t, n, i, s, r)),
    (n = pc()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        Ht(e, t, r))
      : (ae && n && Zl(t), (t.flags |= 1), De(e, t, i, r), t.child)
  );
}
function Ku(e, t, n, i, r) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Sc(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Hh(e, t, s, i, r))
      : ((e = bs(n.type, null, i, t, t.mode, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & r))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : pr), n(o, i) && e.ref === t.ref)
    )
      return Ht(e, t, r);
  }
  return (
    (t.flags |= 1),
    (e = an(s, i)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Hh(e, t, n, i, r) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (pr(s, i) && e.ref === t.ref)
      if (((He = !1), (t.pendingProps = i = s), (e.lanes & r) !== 0))
        e.flags & 131072 && (He = !0);
      else return ((t.lanes = e.lanes), Ht(e, t, r));
  }
  return nl(e, t, n, i, r);
}
function Fh(e, t, n) {
  var i = t.pendingProps,
    r = i.children,
    s = e !== null ? e.memoizedState : null;
  if (i.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(ni, Ke),
        (Ke |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(ni, Ke),
          (Ke |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = s !== null ? s.baseLanes : n),
        ne(ni, Ke),
        (Ke |= i));
    }
  else
    (s !== null ? ((i = s.baseLanes | n), (t.memoizedState = null)) : (i = n),
      ne(ni, Ke),
      (Ke |= i));
  return (De(e, t, r, n), t.child);
}
function Uh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function nl(e, t, n, i, r) {
  var s = We(n) ? Mn : Ae.current;
  return (
    (s = fi(t, s)),
    ai(t, r),
    (n = dc(e, t, n, i, s, r)),
    (i = pc()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~r),
        Ht(e, t, r))
      : (ae && i && Zl(t), (t.flags |= 1), De(e, t, n, r), t.child)
  );
}
function Ju(e, t, n, i, r) {
  if (We(n)) {
    var s = !0;
    Bs(t);
  } else s = !1;
  if ((ai(t, r), t.stateNode === null))
    (ks(e, t), zh(t, n, i), el(t, n, i, r), (i = !0));
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var c = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = at(u))
      : ((u = We(n) ? Mn : Ae.current), (u = fi(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== i || c !== u) && Vu(t, o, i, u)),
      ($t = !1));
    var f = t.memoizedState;
    ((o.state = f),
      Vs(t, i, o, r),
      (c = t.memoizedState),
      l !== i || f !== c || Ue.current || $t
        ? (typeof d == "function" && (Za(t, n, d, i), (c = t.memoizedState)),
          (l = $t || Wu(t, n, l, i, f, c, u))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = i),
              (t.memoizedState = c)),
          (o.props = i),
          (o.state = c),
          (o.context = u),
          (i = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (i = !1)));
  } else {
    ((o = t.stateNode),
      gh(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : pt(t.type, l)),
      (o.props = u),
      (p = t.pendingProps),
      (f = o.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = at(c))
        : ((c = We(n) ? Mn : Ae.current), (c = fi(t, c))));
    var h = n.getDerivedStateFromProps;
    ((d =
      typeof h == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== p || f !== c) && Vu(t, o, i, c)),
      ($t = !1),
      (f = t.memoizedState),
      (o.state = f),
      Vs(t, i, o, r));
    var w = t.memoizedState;
    l !== p || f !== w || Ue.current || $t
      ? (typeof h == "function" && (Za(t, n, h, i), (w = t.memoizedState)),
        (u = $t || Wu(t, n, u, i, f, w, c) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(i, w, c),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(i, w, c)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = i),
            (t.memoizedState = w)),
        (o.props = i),
        (o.state = w),
        (o.context = c),
        (i = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (i = !1));
  }
  return il(e, t, n, i, s, r);
}
function il(e, t, n, i, r, s) {
  Uh(e, t);
  var o = (t.flags & 128) !== 0;
  if (!i && !o) return (r && Ru(t, n, !1), Ht(e, t, s));
  ((i = t.stateNode), (L2.current = t));
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = gi(t, e.child, null, s)), (t.child = gi(t, null, l, s)))
      : De(e, t, l, s),
    (t.memoizedState = i.state),
    r && Ru(t, n, !0),
    t.child
  );
}
function Wh(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Lu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Lu(e, t.context, !1),
    ac(e, t.containerInfo));
}
function Yu(e, t, n, i, r) {
  return (mi(), tc(r), (t.flags |= 256), De(e, t, n, i), t.child);
}
var rl = { dehydrated: null, treeContext: null, retryLane: 0 };
function sl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vh(e, t, n) {
  var i = t.pendingProps,
    r = ce.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (r |= 1),
    ne(ce, r & 1),
    e === null)
  )
    return (
      Ya(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = i.children),
          (e = i.fallback),
          s
            ? ((i = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(i & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = yo(o, i, 0, null)),
              (e = Tn(e, i, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = sl(n)),
              (t.memoizedState = rl),
              e)
            : mc(t, o))
    );
  if (((r = e.memoizedState), r !== null && ((l = r.dehydrated), l !== null)))
    return R2(e, t, o, i, l, r, n);
  if (s) {
    ((s = i.fallback), (o = t.mode), (r = e.child), (l = r.sibling));
    var c = { mode: "hidden", children: i.children };
    return (
      !(o & 1) && t.child !== r
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = c),
          (t.deletions = null))
        : ((i = an(r, c)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      l !== null ? (s = an(l, s)) : ((s = Tn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (i.return = t),
      (i.sibling = s),
      (t.child = i),
      (i = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? sl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = rl),
      i
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (i = an(s, { mode: "visible", children: i.children })),
    !(t.mode & 1) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function mc(e, t) {
  return (
    (t = yo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zr(e, t, n, i) {
  return (
    i !== null && tc(i),
    gi(t, e.child, null, n),
    (e = mc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function R2(e, t, n, i, r, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (i = Jo(Error(M(422)))), Zr(e, t, o, i))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = i.fallback),
          (r = t.mode),
          (i = yo({ mode: "visible", children: i.children }, r, 0, null)),
          (s = Tn(s, r, o, null)),
          (s.flags |= 2),
          (i.return = t),
          (s.return = t),
          (i.sibling = s),
          (t.child = i),
          t.mode & 1 && gi(t, e.child, null, o),
          (t.child.memoizedState = sl(o)),
          (t.memoizedState = rl),
          s);
  if (!(t.mode & 1)) return Zr(e, t, o, null);
  if (r.data === "$!") {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var l = i.dgst;
    return (
      (i = l),
      (s = Error(M(419))),
      (i = Jo(s, i, void 0)),
      Zr(e, t, o, i)
    );
  }
  if (((l = (o & e.childLanes) !== 0), He || l)) {
    if (((i = Ce), i !== null)) {
      switch (o & -o) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
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
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      ((r = r & (i.suspendedLanes | o) ? 0 : r),
        r !== 0 &&
          r !== s.retryLane &&
          ((s.retryLane = r), Bt(e, r), gt(i, e, r, -1)));
    }
    return (kc(), (i = Jo(Error(M(421)))), Zr(e, t, o, i));
  }
  return r.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Q2.bind(null, e)),
      (r._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Je = nn(r.nextSibling)),
      (Xe = t),
      (ae = !0),
      (ft = null),
      e !== null &&
        ((nt[it++] = Dt),
        (nt[it++] = Lt),
        (nt[it++] = jn),
        (Dt = e.id),
        (Lt = e.overflow),
        (jn = t)),
      (t = mc(t, i.children)),
      (t.flags |= 4096),
      t);
}
function Xu(e, t, n) {
  e.lanes |= t;
  var i = e.alternate;
  (i !== null && (i.lanes |= t), Xa(e.return, t, n));
}
function Yo(e, t, n, i, r) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = i),
      (s.tail = n),
      (s.tailMode = r));
}
function qh(e, t, n) {
  var i = t.pendingProps,
    r = i.revealOrder,
    s = i.tail;
  if ((De(e, t, i.children, n), (i = ce.current), i & 2))
    ((i = (i & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xu(e, n, t);
        else if (e.tag === 19) Xu(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    i &= 1;
  }
  if ((ne(ce, i), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (n = t.child, r = null; n !== null; )
          ((e = n.alternate),
            e !== null && qs(e) === null && (r = n),
            (n = n.sibling));
        ((n = r),
          n === null
            ? ((r = t.child), (t.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Yo(t, !1, r, n, s));
        break;
      case "backwards":
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && qs(e) === null)) {
            t.child = r;
            break;
          }
          ((e = r.sibling), (r.sibling = n), (n = r), (r = e));
        }
        Yo(t, !0, n, null, s);
        break;
      case "together":
        Yo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ks(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (In |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = an(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function _2(e, t, n) {
  switch (t.tag) {
    case 3:
      (Wh(t), mi());
      break;
    case 5:
      yh(t);
      break;
    case 1:
      We(t.type) && Bs(t);
      break;
    case 4:
      ac(t, t.stateNode.containerInfo);
      break;
    case 10:
      var i = t.type._context,
        r = t.memoizedProps.value;
      (ne(Us, i._currentValue), (i._currentValue = r));
      break;
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (ne(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Vh(e, t, n)
            : (ne(ce, ce.current & 1),
              (e = Ht(e, t, n)),
              e !== null ? e.sibling : null);
      ne(ce, ce.current & 1);
      break;
    case 19:
      if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (i) return qh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((r = t.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        ne(ce, ce.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Fh(e, t, n));
  }
  return Ht(e, t, n);
}
var $h, ol, Gh, Qh;
$h = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
ol = function () {};
Gh = function (e, t, n, i) {
  var r = e.memoizedProps;
  if (r !== i) {
    ((e = t.stateNode), bn(Nt.current));
    var s = null;
    switch (n) {
      case "input":
        ((r = Pa(e, r)), (i = Pa(e, i)), (s = []));
        break;
      case "select":
        ((r = de({}, r, { value: void 0 })),
          (i = de({}, i, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((r = Aa(e, r)), (i = Aa(e, i)), (s = []));
        break;
      default:
        typeof r.onClick != "function" &&
          typeof i.onClick == "function" &&
          (e.onclick = zs);
    }
    Da(n, i);
    var o;
    n = null;
    for (u in r)
      if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
        if (u === "style") {
          var l = r[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (sr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in i) {
      var c = i[u];
      if (
        ((l = r != null ? r[u] : void 0),
        i.hasOwnProperty(u) && c !== l && (c != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (c && c.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in c)
              c.hasOwnProperty(o) &&
                l[o] !== c[o] &&
                (n || (n = {}), (n[o] = c[o]));
          } else (n || (s || (s = []), s.push(u, n)), (n = c));
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (l = l ? l.__html : void 0),
              c != null && l !== c && (s = s || []).push(u, c))
            : u === "children"
              ? (typeof c != "string" && typeof c != "number") ||
                (s = s || []).push(u, "" + c)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (sr.hasOwnProperty(u)
                  ? (c != null && u === "onScroll" && se("scroll", e),
                    s || l === c || (s = []))
                  : (s = s || []).push(u, c));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Qh = function (e, t, n, i) {
  n !== i && (t.flags |= 4);
};
function Ri(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var i = null; n !== null; )
          (n.alternate !== null && (i = n), (n = n.sibling));
        i === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (i.sibling = null);
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    i = 0;
  if (t)
    for (var r = e.child; r !== null; )
      ((n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = e),
        (r = r.sibling));
  else
    for (r = e.child; r !== null; )
      ((n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = e),
        (r = r.sibling));
  return ((e.subtreeFlags |= i), (e.childLanes = n), t);
}
function z2(e, t, n) {
  var i = t.pendingProps;
  switch ((ec(t), t.tag)) {
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
      return (Pe(t), null);
    case 1:
      return (We(t.type) && Os(), Pe(t), null);
    case 3:
      return (
        (i = t.stateNode),
        yi(),
        oe(Ue),
        oe(Ae),
        cc(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (fl(ft), (ft = null)))),
        ol(e, t),
        Pe(t),
        null
      );
    case 5:
      lc(t);
      var r = bn(yr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Gh(e, t, n, i, r),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(M(166));
          return (Pe(t), null);
        }
        if (((e = bn(Nt.current)), Yr(t))) {
          ((i = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((i[St] = t), (i[mr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (se("cancel", i), se("close", i));
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", i);
              break;
            case "video":
            case "audio":
              for (r = 0; r < qi.length; r++) se(qi[r], i);
              break;
            case "source":
              se("error", i);
              break;
            case "img":
            case "image":
            case "link":
              (se("error", i), se("load", i));
              break;
            case "details":
              se("toggle", i);
              break;
            case "input":
              (au(i, s), se("invalid", i));
              break;
            case "select":
              ((i._wrapperState = { wasMultiple: !!s.multiple }),
                se("invalid", i));
              break;
            case "textarea":
              (cu(i, s), se("invalid", i));
          }
          (Da(n, s), (r = null));
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? i.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Jr(i.textContent, l, e),
                    (r = ["children", l]))
                  : typeof l == "number" &&
                    i.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Jr(i.textContent, l, e),
                    (r = ["children", "" + l]))
                : sr.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  se("scroll", i);
            }
          switch (n) {
            case "input":
              (Ur(i), lu(i, s, !0));
              break;
            case "textarea":
              (Ur(i), uu(i));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (i.onclick = zs);
          }
          ((i = r), (t.updateQueue = i), i !== null && (t.flags |= 4));
        } else {
          ((o = r.nodeType === 9 ? r : r.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Sp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof i.is == "string"
                  ? (e = o.createElement(n, { is: i.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      i.multiple
                        ? (o.multiple = !0)
                        : i.size && (o.size = i.size)))
              : (e = o.createElementNS(e, n)),
            (e[St] = t),
            (e[mr] = i),
            $h(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = La(n, i)), n)) {
              case "dialog":
                (se("cancel", e), se("close", e), (r = i));
                break;
              case "iframe":
              case "object":
              case "embed":
                (se("load", e), (r = i));
                break;
              case "video":
              case "audio":
                for (r = 0; r < qi.length; r++) se(qi[r], e);
                r = i;
                break;
              case "source":
                (se("error", e), (r = i));
                break;
              case "img":
              case "image":
              case "link":
                (se("error", e), se("load", e), (r = i));
                break;
              case "details":
                (se("toggle", e), (r = i));
                break;
              case "input":
                (au(e, i), (r = Pa(e, i)), se("invalid", e));
                break;
              case "option":
                r = i;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = de({}, i, { value: void 0 })),
                  se("invalid", e));
                break;
              case "textarea":
                (cu(e, i), (r = Aa(e, i)), se("invalid", e));
                break;
              default:
                r = i;
            }
            (Da(n, r), (l = r));
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var c = l[s];
                s === "style"
                  ? Ep(e, c)
                  : s === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && Cp(e, c))
                    : s === "children"
                      ? typeof c == "string"
                        ? (n !== "textarea" || c !== "") && or(e, c)
                        : typeof c == "number" && or(e, "" + c)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (sr.hasOwnProperty(s)
                          ? c != null && s === "onScroll" && se("scroll", e)
                          : c != null && Bl(e, s, c, o));
              }
            switch (n) {
              case "input":
                (Ur(e), lu(e, i, !1));
                break;
              case "textarea":
                (Ur(e), uu(e));
                break;
              case "option":
                i.value != null && e.setAttribute("value", "" + un(i.value));
                break;
              case "select":
                ((e.multiple = !!i.multiple),
                  (s = i.value),
                  s != null
                    ? ii(e, !!i.multiple, s, !1)
                    : i.defaultValue != null &&
                      ii(e, !!i.multiple, i.defaultValue, !0));
                break;
              default:
                typeof r.onClick == "function" && (e.onclick = zs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Pe(t), null);
    case 6:
      if (e && t.stateNode != null) Qh(e, t, e.memoizedProps, i);
      else {
        if (typeof i != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = bn(yr.current)), bn(Nt.current), Yr(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[St] = t),
            (s = i.nodeValue !== n) && ((e = Xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Jr(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Jr(i.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[St] = t),
            (t.stateNode = i));
      }
      return (Pe(t), null);
    case 13:
      if (
        (oe(ce),
        (i = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && Je !== null && t.mode & 1 && !(t.flags & 128))
          (ph(), mi(), (t.flags |= 98560), (s = !1));
        else if (((s = Yr(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(M(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(M(317));
            s[St] = t;
          } else
            (mi(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Pe(t), (s = !1));
        } else (ft !== null && (fl(ft), (ft = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((i = i !== null),
          i !== (e !== null && e.memoizedState !== null) &&
            i &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? ke === 0 && (ke = 3) : kc())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return (
        yi(),
        ol(e, t),
        e === null && hr(t.stateNode.containerInfo),
        Pe(t),
        null
      );
    case 10:
      return (rc(t.type._context), Pe(t), null);
    case 17:
      return (We(t.type) && Os(), Pe(t), null);
    case 19:
      if ((oe(ce), (s = t.memoizedState), s === null)) return (Pe(t), null);
      if (((i = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (i) Ri(s, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = qs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ri(s, !1),
                    i = o.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    i = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = i),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (ne(ce, (ce.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            fe() > wi &&
            ((t.flags |= 128), (i = !0), Ri(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!i)
          if (((e = qs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ri(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ae)
            )
              return (Pe(t), null);
          } else
            2 * fe() - s.renderingStartTime > wi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (i = !0), Ri(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = fe()),
          (t.sibling = null),
          (n = ce.current),
          ne(ce, i ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        xc(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && t.mode & 1
          ? Ke & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function O2(e, t) {
  switch ((ec(t), t.tag)) {
    case 1:
      return (
        We(t.type) && Os(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        yi(),
        oe(Ue),
        oe(Ae),
        cc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (lc(t), null);
    case 13:
      if (
        (oe(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        mi();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (oe(ce), null);
    case 4:
      return (yi(), null);
    case 10:
      return (rc(t.type._context), null);
    case 22:
    case 23:
      return (xc(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var es = !1,
  Me = !1,
  B2 = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function ti(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        pe(e, t, i);
      }
    else n.current = null;
}
function al(e, t, n) {
  try {
    n();
  } catch (i) {
    pe(e, t, i);
  }
}
var Zu = !1;
function H2(e, t) {
  if (((Va = Ls), (e = Zp()), Xl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var r = i.anchorOffset,
            s = i.focusNode;
          i = i.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            c = -1,
            u = 0,
            d = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              p !== n || (r !== 0 && p.nodeType !== 3) || (l = o + r),
                p !== s || (i !== 0 && p.nodeType !== 3) || (c = o + i),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (h = p.firstChild) !== null;
            )
              ((f = p), (p = h));
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++u === r && (l = o),
                f === s && ++d === i && (c = o),
                (h = p.nextSibling) !== null)
              )
                break;
              ((p = f), (f = p.parentNode));
            }
            p = h;
          }
          n = l === -1 || c === -1 ? null : { start: l, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qa = { focusedElem: e, selectionRange: n }, Ls = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (L = e));
    else
      for (; L !== null; ) {
        t = L;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    S = w.memoizedState,
                    y = t.stateNode,
                    m = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : pt(t.type, k),
                      S,
                    );
                  y.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (C) {
          pe(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (L = e));
          break;
        }
        L = t.return;
      }
  return ((w = Zu), (Zu = !1), w);
}
function Xi(e, t, n) {
  var i = t.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & e) === e) {
        var s = r.destroy;
        ((r.destroy = void 0), s !== void 0 && al(t, n, s));
      }
      r = r.next;
    } while (r !== i);
  }
}
function mo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ll(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Kh(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Kh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[St], delete t[mr], delete t[Qa], delete t[S2], delete t[C2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Jh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ed(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Jh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function cl(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = zs)));
  else if (i !== 4 && ((e = e.child), e !== null))
    for (cl(e, t, n), e = e.sibling; e !== null; )
      (cl(e, t, n), (e = e.sibling));
}
function ul(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (i !== 4 && ((e = e.child), e !== null))
    for (ul(e, t, n), e = e.sibling; e !== null; )
      (ul(e, t, n), (e = e.sibling));
}
var be = null,
  ht = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) (Yh(e, t, n), (n = n.sibling));
}
function Yh(e, t, n) {
  if (Et && typeof Et.onCommitFiberUnmount == "function")
    try {
      Et.onCommitFiberUnmount(oo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Me || ti(n, t);
    case 6:
      var i = be,
        r = ht;
      ((be = null),
        Wt(e, t, n),
        (be = i),
        (ht = r),
        be !== null &&
          (ht
            ? ((e = be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : be.removeChild(n.stateNode)));
      break;
    case 18:
      be !== null &&
        (ht
          ? ((e = be),
            (n = n.stateNode),
            e.nodeType === 8
              ? Vo(e.parentNode, n)
              : e.nodeType === 1 && Vo(e, n),
            ur(e))
          : Vo(be, n.stateNode));
      break;
    case 4:
      ((i = be),
        (r = ht),
        (be = n.stateNode.containerInfo),
        (ht = !0),
        Wt(e, t, n),
        (be = i),
        (ht = r));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Me &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        r = i = i.next;
        do {
          var s = r,
            o = s.destroy;
          ((s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && al(n, t, o),
            (r = r.next));
        } while (r !== i);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (
        !Me &&
        (ti(n, t),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          ((i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount());
        } catch (l) {
          pe(n, t, l);
        }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Me = (i = Me) || n.memoizedState !== null), Wt(e, t, n), (Me = i))
        : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function td(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new B2()),
      t.forEach(function (i) {
        var r = K2.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(r, r));
      }));
  }
}
function dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((be = l.stateNode), (ht = !1));
              break e;
            case 3:
              ((be = l.stateNode.containerInfo), (ht = !0));
              break e;
            case 4:
              ((be = l.stateNode.containerInfo), (ht = !0));
              break e;
          }
          l = l.return;
        }
        if (be === null) throw Error(M(160));
        (Yh(s, o, r), (be = null), (ht = !1));
        var c = r.alternate;
        (c !== null && (c.return = null), (r.return = null));
      } catch (u) {
        pe(r, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Xh(t, e), (t = t.sibling));
}
function Xh(e, t) {
  var n = e.alternate,
    i = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dt(t, e), wt(e), i & 4)) {
        try {
          (Xi(3, e, e.return), mo(3, e));
        } catch (k) {
          pe(e, e.return, k);
        }
        try {
          Xi(5, e, e.return);
        } catch (k) {
          pe(e, e.return, k);
        }
      }
      break;
    case 1:
      (dt(t, e), wt(e), i & 512 && n !== null && ti(n, n.return));
      break;
    case 5:
      if (
        (dt(t, e),
        wt(e),
        i & 512 && n !== null && ti(n, n.return),
        e.flags & 32)
      ) {
        var r = e.stateNode;
        try {
          or(r, "");
        } catch (k) {
          pe(e, e.return, k);
        }
      }
      if (i & 4 && ((r = e.stateNode), r != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            (l === "input" && s.type === "radio" && s.name != null && xp(r, s),
              La(l, o));
            var u = La(l, s);
            for (o = 0; o < c.length; o += 2) {
              var d = c[o],
                p = c[o + 1];
              d === "style"
                ? Ep(r, p)
                : d === "dangerouslySetInnerHTML"
                  ? Cp(r, p)
                  : d === "children"
                    ? or(r, p)
                    : Bl(r, d, p, u);
            }
            switch (l) {
              case "input":
                Ma(r, s);
                break;
              case "textarea":
                kp(r, s);
                break;
              case "select":
                var f = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!s.multiple;
                var h = s.value;
                h != null
                  ? ii(r, !!s.multiple, h, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? ii(r, !!s.multiple, s.defaultValue, !0)
                      : ii(r, !!s.multiple, s.multiple ? [] : "", !1));
            }
            r[mr] = s;
          } catch (k) {
            pe(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((dt(t, e), wt(e), i & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        ((r = e.stateNode), (s = e.memoizedProps));
        try {
          r.nodeValue = s;
        } catch (k) {
          pe(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (dt(t, e), wt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ur(t.containerInfo);
        } catch (k) {
          pe(e, e.return, k);
        }
      break;
    case 4:
      (dt(t, e), wt(e));
      break;
    case 13:
      (dt(t, e),
        wt(e),
        (r = e.child),
        r.flags & 8192 &&
          ((s = r.memoizedState !== null),
          (r.stateNode.isHidden = s),
          !s ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (vc = fe())),
        i & 4 && td(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Me = (u = Me) || d), dt(t, e), (Me = u)) : dt(t, e),
        wt(e),
        i & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (L = e, d = e.child; d !== null; ) {
            for (p = L = d; L !== null; ) {
              switch (((f = L), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xi(4, f, f.return);
                  break;
                case 1:
                  ti(f, f.return);
                  var w = f.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((i = f), (n = f.return));
                    try {
                      ((t = i),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (k) {
                      pe(i, n, k);
                    }
                  }
                  break;
                case 5:
                  ti(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    id(p);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (L = h)) : id(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                ((r = p.stateNode),
                  u
                    ? ((s = r.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = p.stateNode),
                      (c = p.memoizedProps.style),
                      (o =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (l.style.display = bp("display", o))));
              } catch (k) {
                pe(e, e.return, k);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (k) {
                pe(e, e.return, k);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            ((p.child.return = p), (p = p.child));
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            (d === p && (d = null), (p = p.return));
          }
          (d === p && (d = null),
            (p.sibling.return = p.return),
            (p = p.sibling));
        }
      }
      break;
    case 19:
      (dt(t, e), wt(e), i & 4 && td(e));
      break;
    case 21:
      break;
    default:
      (dt(t, e), wt(e));
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Jh(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode;
          i.flags & 32 && (or(r, ""), (i.flags &= -33));
          var s = ed(e);
          ul(e, s, r);
          break;
        case 3:
        case 4:
          var o = i.stateNode.containerInfo,
            l = ed(e);
          cl(e, l, o);
          break;
        default:
          throw Error(M(161));
      }
    } catch (c) {
      pe(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function F2(e, t, n) {
  ((L = e), Zh(e));
}
function Zh(e, t, n) {
  for (var i = (e.mode & 1) !== 0; L !== null; ) {
    var r = L,
      s = r.child;
    if (r.tag === 22 && i) {
      var o = r.memoizedState !== null || es;
      if (!o) {
        var l = r.alternate,
          c = (l !== null && l.memoizedState !== null) || Me;
        l = es;
        var u = Me;
        if (((es = o), (Me = c) && !u))
          for (L = r; L !== null; )
            ((o = L),
              (c = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? rd(r)
                : c !== null
                  ? ((c.return = o), (L = c))
                  : rd(r));
        for (; s !== null; ) ((L = s), Zh(s), (s = s.sibling));
        ((L = r), (es = l), (Me = u));
      }
      nd(e);
    } else
      r.subtreeFlags & 8772 && s !== null ? ((s.return = r), (L = s)) : nd(e);
  }
}
function nd(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Me || mo(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Me)
                if (n === null) i.componentDidMount();
                else {
                  var r =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : pt(t.type, n.memoizedProps);
                  i.componentDidUpdate(
                    r,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && Hu(t, s, i);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Hu(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && ur(p);
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
              throw Error(M(163));
          }
        Me || (t.flags & 512 && ll(t));
      } catch (f) {
        pe(t, t.return, f);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function id(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function rd(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            mo(4, t);
          } catch (c) {
            pe(t, n, c);
          }
          break;
        case 1:
          var i = t.stateNode;
          if (typeof i.componentDidMount == "function") {
            var r = t.return;
            try {
              i.componentDidMount();
            } catch (c) {
              pe(t, r, c);
            }
          }
          var s = t.return;
          try {
            ll(t);
          } catch (c) {
            pe(t, s, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ll(t);
          } catch (c) {
            pe(t, o, c);
          }
      }
    } catch (c) {
      pe(t, t.return, c);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (L = l));
      break;
    }
    L = t.return;
  }
}
var U2 = Math.ceil,
  Qs = Ft.ReactCurrentDispatcher,
  gc = Ft.ReactCurrentOwner,
  ot = Ft.ReactCurrentBatchConfig,
  K = 0,
  Ce = null,
  ye = null,
  Ee = 0,
  Ke = 0,
  ni = hn(0),
  ke = 0,
  kr = null,
  In = 0,
  go = 0,
  yc = 0,
  Zi = null,
  Be = null,
  vc = 0,
  wi = 1 / 0,
  jt = null,
  Ks = !1,
  dl = null,
  sn = null,
  ts = !1,
  Yt = null,
  Js = 0,
  er = 0,
  pl = null,
  Ss = -1,
  Cs = 0;
function Le() {
  return K & 6 ? fe() : Ss !== -1 ? Ss : (Ss = fe());
}
function on(e) {
  return e.mode & 1
    ? K & 2 && Ee !== 0
      ? Ee & -Ee
      : E2.transition !== null
        ? (Cs === 0 && (Cs = zp()), Cs)
        : ((e = X),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vp(e.type))),
          e)
    : 1;
}
function gt(e, t, n, i) {
  if (50 < er) throw ((er = 0), (pl = null), Error(M(185)));
  (jr(e, n, i),
    (!(K & 2) || e !== Ce) &&
      (e === Ce && (!(K & 2) && (go |= n), ke === 4 && Kt(e, Ee)),
      Ve(e, i),
      n === 1 && K === 0 && !(t.mode & 1) && ((wi = fe() + 500), po && fn())));
}
function Ve(e, t) {
  var n = e.callbackNode;
  Em(e, t);
  var i = Ds(e, e === Ce ? Ee : 0);
  if (i === 0)
    (n !== null && hu(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && hu(n), t === 1))
      (e.tag === 0 ? b2(sd.bind(null, e)) : ch(sd.bind(null, e)),
        x2(function () {
          !(K & 6) && fn();
        }),
        (n = null));
    else {
      switch (Op(i)) {
        case 1:
          n = Vl;
          break;
        case 4:
          n = Rp;
          break;
        case 16:
          n = Is;
          break;
        case 536870912:
          n = _p;
          break;
        default:
          n = Is;
      }
      n = a0(n, e0.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function e0(e, t) {
  if (((Ss = -1), (Cs = 0), K & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (li() && e.callbackNode !== n) return null;
  var i = Ds(e, e === Ce ? Ee : 0);
  if (i === 0) return null;
  if (i & 30 || i & e.expiredLanes || t) t = Ys(e, i);
  else {
    t = i;
    var r = K;
    K |= 2;
    var s = n0();
    (Ce !== e || Ee !== t) && ((jt = null), (wi = fe() + 500), Nn(e, t));
    do
      try {
        q2();
        break;
      } catch (l) {
        t0(e, l);
      }
    while (!0);
    (ic(),
      (Qs.current = s),
      (K = r),
      ye !== null ? (t = 0) : ((Ce = null), (Ee = 0), (t = ke)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((r = Ba(e)), r !== 0 && ((i = r), (t = hl(e, r)))), t === 1)
    )
      throw ((n = kr), Nn(e, 0), Kt(e, i), Ve(e, fe()), n);
    if (t === 6) Kt(e, i);
    else {
      if (
        ((r = e.current.alternate),
        !(i & 30) &&
          !W2(r) &&
          ((t = Ys(e, i)),
          t === 2 && ((s = Ba(e)), s !== 0 && ((i = s), (t = hl(e, s)))),
          t === 1))
      )
        throw ((n = kr), Nn(e, 0), Kt(e, i), Ve(e, fe()), n);
      switch (((e.finishedWork = r), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          xn(e, Be, jt);
          break;
        case 3:
          if (
            (Kt(e, i), (i & 130023424) === i && ((t = vc + 500 - fe()), 10 < t))
          ) {
            if (Ds(e, 0) !== 0) break;
            if (((r = e.suspendedLanes), (r & i) !== i)) {
              (Le(), (e.pingedLanes |= e.suspendedLanes & r));
              break;
            }
            e.timeoutHandle = Ga(xn.bind(null, e, Be, jt), t);
            break;
          }
          xn(e, Be, jt);
          break;
        case 4:
          if ((Kt(e, i), (i & 4194240) === i)) break;
          for (t = e.eventTimes, r = -1; 0 < i; ) {
            var o = 31 - mt(i);
            ((s = 1 << o), (o = t[o]), o > r && (r = o), (i &= ~s));
          }
          if (
            ((i = r),
            (i = fe() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                  ? 480
                  : 1080 > i
                    ? 1080
                    : 1920 > i
                      ? 1920
                      : 3e3 > i
                        ? 3e3
                        : 4320 > i
                          ? 4320
                          : 1960 * U2(i / 1960)) - i),
            10 < i)
          ) {
            e.timeoutHandle = Ga(xn.bind(null, e, Be, jt), i);
            break;
          }
          xn(e, Be, jt);
          break;
        case 5:
          xn(e, Be, jt);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return (Ve(e, fe()), e.callbackNode === n ? e0.bind(null, e) : null);
}
function hl(e, t) {
  var n = Zi;
  return (
    e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256),
    (e = Ys(e, t)),
    e !== 2 && ((t = Be), (Be = n), t !== null && fl(t)),
    e
  );
}
function fl(e) {
  Be === null ? (Be = e) : Be.push.apply(Be, e);
}
function W2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!yt(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Kt(e, t) {
  for (
    t &= ~yc,
      t &= ~go,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - mt(t),
      i = 1 << n;
    ((e[n] = -1), (t &= ~i));
  }
}
function sd(e) {
  if (K & 6) throw Error(M(327));
  li();
  var t = Ds(e, 0);
  if (!(t & 1)) return (Ve(e, fe()), null);
  var n = Ys(e, t);
  if (e.tag !== 0 && n === 2) {
    var i = Ba(e);
    i !== 0 && ((t = i), (n = hl(e, i)));
  }
  if (n === 1) throw ((n = kr), Nn(e, 0), Kt(e, t), Ve(e, fe()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xn(e, Be, jt),
    Ve(e, fe()),
    null
  );
}
function wc(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    ((K = n), K === 0 && ((wi = fe() + 500), po && fn()));
  }
}
function Dn(e) {
  Yt !== null && Yt.tag === 0 && !(K & 6) && li();
  var t = K;
  K |= 1;
  var n = ot.transition,
    i = X;
  try {
    if (((ot.transition = null), (X = 1), e)) return e();
  } finally {
    ((X = i), (ot.transition = n), (K = t), !(K & 6) && fn());
  }
}
function xc() {
  ((Ke = ni.current), oe(ni));
}
function Nn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), w2(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var i = n;
      switch ((ec(i), i.tag)) {
        case 1:
          ((i = i.type.childContextTypes), i != null && Os());
          break;
        case 3:
          (yi(), oe(Ue), oe(Ae), cc());
          break;
        case 5:
          lc(i);
          break;
        case 4:
          yi();
          break;
        case 13:
          oe(ce);
          break;
        case 19:
          oe(ce);
          break;
        case 10:
          rc(i.type._context);
          break;
        case 22:
        case 23:
          xc();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ye = e = an(e.current, null)),
    (Ee = Ke = t),
    (ke = 0),
    (kr = null),
    (yc = go = In = 0),
    (Be = Zi = null),
    Cn !== null)
  ) {
    for (t = 0; t < Cn.length; t++)
      if (((n = Cn[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          ((s.next = r), (i.next = o));
        }
        n.pending = i;
      }
    Cn = null;
  }
  return e;
}
function t0(e, t) {
  do {
    var n = ye;
    try {
      if ((ic(), (ws.current = Gs), $s)) {
        for (var i = ue.memoizedState; i !== null; ) {
          var r = i.queue;
          (r !== null && (r.pending = null), (i = i.next));
        }
        $s = !1;
      }
      if (
        ((An = 0),
        (Se = xe = ue = null),
        (Yi = !1),
        (vr = 0),
        (gc.current = null),
        n === null || n.return === null)
      ) {
        ((ke = 1), (kr = t), (ye = null));
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          c = t;
        if (
          ((t = Ee),
          (l.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = l,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var h = $u(o);
          if (h !== null) {
            ((h.flags &= -257),
              Gu(h, o, l, s, t),
              h.mode & 1 && qu(s, u, t),
              (t = h),
              (c = u));
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              (k.add(c), (t.updateQueue = k));
            } else w.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              (qu(s, u, t), kc());
              break e;
            }
            c = Error(M(426));
          }
        } else if (ae && l.mode & 1) {
          var S = $u(o);
          if (S !== null) {
            (!(S.flags & 65536) && (S.flags |= 256),
              Gu(S, o, l, s, t),
              tc(vi(c, l)));
            break e;
          }
        }
        ((s = c = vi(c, l)),
          ke !== 4 && (ke = 2),
          Zi === null ? (Zi = [s]) : Zi.push(s),
          (s = o));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var y = Oh(s, c, t);
              Bu(s, y);
              break e;
            case 1:
              l = c;
              var m = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (sn === null || !sn.has(g))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var C = Bh(s, l, t);
                Bu(s, C);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      r0(n);
    } catch (N) {
      ((t = N), ye === n && n !== null && (ye = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function n0() {
  var e = Qs.current;
  return ((Qs.current = Gs), e === null ? Gs : e);
}
function kc() {
  ((ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Ce === null || (!(In & 268435455) && !(go & 268435455)) || Kt(Ce, Ee));
}
function Ys(e, t) {
  var n = K;
  K |= 2;
  var i = n0();
  (Ce !== e || Ee !== t) && ((jt = null), Nn(e, t));
  do
    try {
      V2();
      break;
    } catch (r) {
      t0(e, r);
    }
  while (!0);
  if ((ic(), (K = n), (Qs.current = i), ye !== null)) throw Error(M(261));
  return ((Ce = null), (Ee = 0), ke);
}
function V2() {
  for (; ye !== null; ) i0(ye);
}
function q2() {
  for (; ye !== null && !gm(); ) i0(ye);
}
function i0(e) {
  var t = o0(e.alternate, e, Ke);
  ((e.memoizedProps = e.pendingProps),
    t === null ? r0(e) : (ye = t),
    (gc.current = null));
}
function r0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = O2(n, t)), n !== null)) {
        ((n.flags &= 32767), (ye = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ke = 6), (ye = null));
        return;
      }
    } else if (((n = z2(n, t, Ke)), n !== null)) {
      ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function xn(e, t, n) {
  var i = X,
    r = ot.transition;
  try {
    ((ot.transition = null), (X = 1), $2(e, t, n, i));
  } finally {
    ((ot.transition = r), (X = i));
  }
  return null;
}
function $2(e, t, n, i) {
  do li();
  while (Yt !== null);
  if (K & 6) throw Error(M(327));
  n = e.finishedWork;
  var r = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (Nm(e, s),
    e === Ce && ((ye = Ce = null), (Ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ts ||
      ((ts = !0),
      a0(Is, function () {
        return (li(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = ot.transition), (ot.transition = null));
    var o = X;
    X = 1;
    var l = K;
    ((K |= 4),
      (gc.current = null),
      H2(e, n),
      Xh(n, e),
      p2(qa),
      (Ls = !!Va),
      (qa = Va = null),
      (e.current = n),
      F2(n),
      ym(),
      (K = l),
      (X = o),
      (ot.transition = s));
  } else e.current = n;
  if (
    (ts && ((ts = !1), (Yt = e), (Js = r)),
    (s = e.pendingLanes),
    s === 0 && (sn = null),
    xm(n.stateNode),
    Ve(e, fe()),
    t !== null)
  )
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      ((r = t[n]), i(r.value, { componentStack: r.stack, digest: r.digest }));
  if (Ks) throw ((Ks = !1), (e = dl), (dl = null), e);
  return (
    Js & 1 && e.tag !== 0 && li(),
    (s = e.pendingLanes),
    s & 1 ? (e === pl ? er++ : ((er = 0), (pl = e))) : (er = 0),
    fn(),
    null
  );
}
function li() {
  if (Yt !== null) {
    var e = Op(Js),
      t = ot.transition,
      n = X;
    try {
      if (((ot.transition = null), (X = 16 > e ? 16 : e), Yt === null))
        var i = !1;
      else {
        if (((e = Yt), (Yt = null), (Js = 0), K & 6)) throw Error(M(331));
        var r = K;
        for (K |= 4, L = e.current; L !== null; ) {
          var s = L,
            o = s.child;
          if (L.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (L = u; L !== null; ) {
                  var d = L;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi(8, d, s);
                  }
                  var p = d.child;
                  if (p !== null) ((p.return = d), (L = p));
                  else
                    for (; L !== null; ) {
                      d = L;
                      var f = d.sibling,
                        h = d.return;
                      if ((Kh(d), d === u)) {
                        L = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = h), (L = f));
                        break;
                      }
                      L = h;
                    }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var S = k.sibling;
                    ((k.sibling = null), (k = S));
                  } while (k !== null);
                }
              }
              L = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (L = o));
          else
            e: for (; L !== null; ) {
              if (((s = L), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xi(9, s, s.return);
                }
              var y = s.sibling;
              if (y !== null) {
                ((y.return = s.return), (L = y));
                break e;
              }
              L = s.return;
            }
        }
        var m = e.current;
        for (L = m; L !== null; ) {
          o = L;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) ((g.return = o), (L = g));
          else
            e: for (o = m; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mo(9, l);
                  }
                } catch (N) {
                  pe(l, l.return, N);
                }
              if (l === o) {
                L = null;
                break e;
              }
              var C = l.sibling;
              if (C !== null) {
                ((C.return = l.return), (L = C));
                break e;
              }
              L = l.return;
            }
        }
        if (
          ((K = r), fn(), Et && typeof Et.onPostCommitFiberRoot == "function")
        )
          try {
            Et.onPostCommitFiberRoot(oo, e);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      ((X = n), (ot.transition = t));
    }
  }
  return !1;
}
function od(e, t, n) {
  ((t = vi(n, t)),
    (t = Oh(e, t, 1)),
    (e = rn(e, t, 1)),
    (t = Le()),
    e !== null && (jr(e, 1, t), Ve(e, t)));
}
function pe(e, t, n) {
  if (e.tag === 3) od(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        od(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (sn === null || !sn.has(i)))
        ) {
          ((e = vi(n, e)),
            (e = Bh(t, e, 1)),
            (t = rn(t, e, 1)),
            (e = Le()),
            t !== null && (jr(t, 1, e), Ve(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function G2(e, t, n) {
  var i = e.pingCache;
  (i !== null && i.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (Ee & n) === n &&
      (ke === 4 || (ke === 3 && (Ee & 130023424) === Ee && 500 > fe() - vc)
        ? Nn(e, 0)
        : (yc |= n)),
    Ve(e, t));
}
function s0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = qr), (qr <<= 1), !(qr & 130023424) && (qr = 4194304))
      : (t = 1));
  var n = Le();
  ((e = Bt(e, t)), e !== null && (jr(e, t, n), Ve(e, n)));
}
function Q2(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), s0(e, n));
}
function K2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var i = e.stateNode,
        r = e.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      i = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  (i !== null && i.delete(t), s0(e, n));
}
var o0;
o0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ue.current) He = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((He = !1), _2(e, t, n));
      He = !!(e.flags & 131072);
    }
  else ((He = !1), ae && t.flags & 1048576 && uh(t, Fs, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type;
      (ks(e, t), (e = t.pendingProps));
      var r = fi(t, Ae.current);
      (ai(t, n), (r = dc(null, t, i, e, r, n)));
      var s = pc();
      return (
        (t.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            We(i) ? ((s = !0), Bs(t)) : (s = !1),
            (t.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            oc(t),
            (r.updater = fo),
            (t.stateNode = r),
            (r._reactInternals = t),
            el(t, i, e, n),
            (t = il(null, t, i, !0, s, n)))
          : ((t.tag = 0), ae && s && Zl(t), De(null, t, r, n), (t = t.child)),
        t
      );
    case 16:
      i = t.elementType;
      e: {
        switch (
          (ks(e, t),
          (e = t.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (t.type = i),
          (r = t.tag = Y2(i)),
          (e = pt(i, e)),
          r)
        ) {
          case 0:
            t = nl(null, t, i, e, n);
            break e;
          case 1:
            t = Ju(null, t, i, e, n);
            break e;
          case 11:
            t = Qu(null, t, i, e, n);
            break e;
          case 14:
            t = Ku(null, t, i, pt(i.type, e), n);
            break e;
        }
        throw Error(M(306, i, ""));
      }
      return t;
    case 0:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : pt(i, r)),
        nl(e, t, i, r, n)
      );
    case 1:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : pt(i, r)),
        Ju(e, t, i, r, n)
      );
    case 3:
      e: {
        if ((Wh(t), e === null)) throw Error(M(387));
        ((i = t.pendingProps),
          (s = t.memoizedState),
          (r = s.element),
          gh(e, t),
          Vs(t, i, null, n));
        var o = t.memoizedState;
        if (((i = o.element), s.isDehydrated))
          if (
            ((s = {
              element: i,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((r = vi(Error(M(423)), t)), (t = Yu(e, t, i, n, r)));
            break e;
          } else if (i !== r) {
            ((r = vi(Error(M(424)), t)), (t = Yu(e, t, i, n, r)));
            break e;
          } else
            for (
              Je = nn(t.stateNode.containerInfo.firstChild),
                Xe = t,
                ae = !0,
                ft = null,
                n = fh(t, null, i, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((mi(), i === r)) {
            t = Ht(e, t, n);
            break e;
          }
          De(e, t, i, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        yh(t),
        e === null && Ya(t),
        (i = t.type),
        (r = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = r.children),
        $a(i, r) ? (o = null) : s !== null && $a(i, s) && (t.flags |= 32),
        Uh(e, t),
        De(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Ya(t), null);
    case 13:
      return Vh(e, t, n);
    case 4:
      return (
        ac(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = gi(t, null, i, n)) : De(e, t, i, n),
        t.child
      );
    case 11:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : pt(i, r)),
        Qu(e, t, i, r, n)
      );
    case 7:
      return (De(e, t, t.pendingProps, n), t.child);
    case 8:
      return (De(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (De(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((i = t.type._context),
          (r = t.pendingProps),
          (s = t.memoizedProps),
          (o = r.value),
          ne(Us, i._currentValue),
          (i._currentValue = o),
          s !== null)
        )
          if (yt(s.value, o)) {
            if (s.children === r.children && !Ue.current) {
              t = Ht(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var c = l.firstContext; c !== null; ) {
                  if (c.context === i) {
                    if (s.tag === 1) {
                      ((c = Rt(-1, n & -n)), (c.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c));
                      }
                    }
                    ((s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      Xa(s.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  c = c.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(M(341));
                ((o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Xa(o, n, t),
                  (o = s.sibling));
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    ((s.return = o.return), (o = s));
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        (De(e, t, r.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (r = t.type),
        (i = t.pendingProps.children),
        ai(t, n),
        (r = at(r)),
        (i = i(r)),
        (t.flags |= 1),
        De(e, t, i, n),
        t.child
      );
    case 14:
      return (
        (i = t.type),
        (r = pt(i, t.pendingProps)),
        (r = pt(i.type, r)),
        Ku(e, t, i, r, n)
      );
    case 15:
      return Hh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : pt(i, r)),
        ks(e, t),
        (t.tag = 1),
        We(i) ? ((e = !0), Bs(t)) : (e = !1),
        ai(t, n),
        zh(t, i, r),
        el(t, i, r, n),
        il(null, t, i, !0, e, n)
      );
    case 19:
      return qh(e, t, n);
    case 22:
      return Fh(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function a0(e, t) {
  return Lp(e, t);
}
function J2(e, t, n, i) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function st(e, t, n, i) {
  return new J2(e, t, n, i);
}
function Sc(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Y2(e) {
  if (typeof e == "function") return Sc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Fl)) return 11;
    if (e === Ul) return 14;
  }
  return 2;
}
function an(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = st(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function bs(e, t, n, i, r, s) {
  var o = 2;
  if (((i = e), typeof e == "function")) Sc(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case $n:
        return Tn(n.children, r, s, t);
      case Hl:
        ((o = 8), (r |= 8));
        break;
      case ba:
        return (
          (e = st(12, n, t, r | 2)),
          (e.elementType = ba),
          (e.lanes = s),
          e
        );
      case Ea:
        return ((e = st(13, n, t, r)), (e.elementType = Ea), (e.lanes = s), e);
      case Na:
        return ((e = st(19, n, t, r)), (e.elementType = Na), (e.lanes = s), e);
      case yp:
        return yo(n, r, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mp:
              o = 10;
              break e;
            case gp:
              o = 9;
              break e;
            case Fl:
              o = 11;
              break e;
            case Ul:
              o = 14;
              break e;
            case qt:
              ((o = 16), (i = null));
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = st(o, n, t, r)),
    (t.elementType = e),
    (t.type = i),
    (t.lanes = s),
    t
  );
}
function Tn(e, t, n, i) {
  return ((e = st(7, e, i, t)), (e.lanes = n), e);
}
function yo(e, t, n, i) {
  return (
    (e = st(22, e, i, t)),
    (e.elementType = yp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xo(e, t, n) {
  return ((e = st(6, e, null, t)), (e.lanes = n), e);
}
function Zo(e, t, n) {
  return (
    (t = st(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function X2(e, t, n, i, r) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Do(0)),
    (this.expirationTimes = Do(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Do(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null));
}
function Cc(e, t, n, i, r, s, o, l, c) {
  return (
    (e = new X2(e, t, n, l, c)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = st(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    oc(s),
    e
  );
}
function Z2(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: qn,
    key: i == null ? null : "" + i,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function l0(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (_n(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n)) return lh(e, n, t);
  }
  return t;
}
function c0(e, t, n, i, r, s, o, l, c) {
  return (
    (e = Cc(n, i, !0, e, r, s, o, l, c)),
    (e.context = l0(null)),
    (n = e.current),
    (i = Le()),
    (r = on(n)),
    (s = Rt(i, r)),
    (s.callback = t ?? null),
    rn(n, s, r),
    (e.current.lanes = r),
    jr(e, r, i),
    Ve(e, i),
    e
  );
}
function vo(e, t, n, i) {
  var r = t.current,
    s = Le(),
    o = on(r);
  return (
    (n = l0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Rt(s, o)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    (e = rn(r, t, o)),
    e !== null && (gt(e, r, o, s), vs(e, r, o)),
    o
  );
}
function Xs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ad(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bc(e, t) {
  (ad(e, t), (e = e.alternate) && ad(e, t));
}
function eg() {
  return null;
}
var u0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ec(e) {
  this._internalRoot = e;
}
wo.prototype.render = Ec.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  vo(e, t, null, null);
};
wo.prototype.unmount = Ec.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Dn(function () {
      vo(null, e, null, null);
    }),
      (t[Ot] = null));
  }
};
function wo(e) {
  this._internalRoot = e;
}
wo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Fp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
    (Qt.splice(n, 0, e), n === 0 && Wp(e));
  }
};
function Nc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function xo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ld() {}
function tg(e, t, n, i, r) {
  if (r) {
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = Xs(o);
        s.call(u);
      };
    }
    var o = c0(t, i, e, 0, null, !1, !1, "", ld);
    return (
      (e._reactRootContainer = o),
      (e[Ot] = o.current),
      hr(e.nodeType === 8 ? e.parentNode : e),
      Dn(),
      o
    );
  }
  for (; (r = e.lastChild); ) e.removeChild(r);
  if (typeof i == "function") {
    var l = i;
    i = function () {
      var u = Xs(c);
      l.call(u);
    };
  }
  var c = Cc(e, 0, !1, null, null, !1, !1, "", ld);
  return (
    (e._reactRootContainer = c),
    (e[Ot] = c.current),
    hr(e.nodeType === 8 ? e.parentNode : e),
    Dn(function () {
      vo(t, c, n, i);
    }),
    c
  );
}
function ko(e, t, n, i, r) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var c = Xs(o);
        l.call(c);
      };
    }
    vo(t, o, e, r);
  } else o = tg(n, t, e, r, i);
  return Xs(o);
}
Bp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vi(t.pendingLanes);
        n !== 0 &&
          (ql(t, n | 1), Ve(t, fe()), !(K & 6) && ((wi = fe() + 500), fn()));
      }
      break;
    case 13:
      (Dn(function () {
        var i = Bt(e, 1);
        if (i !== null) {
          var r = Le();
          gt(i, e, 1, r);
        }
      }),
        bc(e, 1));
  }
};
$l = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728);
    if (t !== null) {
      var n = Le();
      gt(t, e, 134217728, n);
    }
    bc(e, 134217728);
  }
};
Hp = function (e) {
  if (e.tag === 13) {
    var t = on(e),
      n = Bt(e, t);
    if (n !== null) {
      var i = Le();
      gt(n, e, t, i);
    }
    bc(e, t);
  }
};
Fp = function () {
  return X;
};
Up = function (e, t) {
  var n = X;
  try {
    return ((X = e), t());
  } finally {
    X = n;
  }
};
_a = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ma(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var i = n[t];
          if (i !== e && i.form === e.form) {
            var r = uo(i);
            if (!r) throw Error(M(90));
            (wp(i), Ma(i, r));
          }
        }
      }
      break;
    case "textarea":
      kp(e, n);
      break;
    case "select":
      ((t = n.value), t != null && ii(e, !!n.multiple, t, !1));
  }
};
Pp = wc;
Mp = Dn;
var ng = { usingClientEntryPoint: !1, Events: [Ir, Jn, uo, Np, Tp, wc] },
  _i = {
    findFiberByHostInstance: Sn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  ig = {
    bundleType: _i.bundleType,
    version: _i.version,
    rendererPackageName: _i.rendererPackageName,
    rendererConfig: _i.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Ip(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: _i.findFiberByHostInstance || eg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ns.isDisabled && ns.supportsFiber)
    try {
      ((oo = ns.inject(ig)), (Et = ns));
    } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ng;
et.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Nc(t)) throw Error(M(200));
  return Z2(e, t, null, n);
};
et.createRoot = function (e, t) {
  if (!Nc(e)) throw Error(M(299));
  var n = !1,
    i = "",
    r = u0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = Cc(e, 1, !1, null, null, n, !1, i, r)),
    (e[Ot] = t.current),
    hr(e.nodeType === 8 ? e.parentNode : e),
    new Ec(t)
  );
};
et.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return ((e = Ip(t)), (e = e === null ? null : e.stateNode), e);
};
et.flushSync = function (e) {
  return Dn(e);
};
et.hydrate = function (e, t, n) {
  if (!xo(t)) throw Error(M(200));
  return ko(null, e, t, !0, n);
};
et.hydrateRoot = function (e, t, n) {
  if (!Nc(e)) throw Error(M(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    s = "",
    o = u0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = c0(t, null, e, 1, n ?? null, r, !1, s, o)),
    (e[Ot] = t.current),
    hr(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      ((n = i[e]),
        (r = n._getVersion),
        (r = r(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, r])
          : t.mutableSourceEagerHydrationData.push(n, r));
  return new wo(t);
};
et.render = function (e, t, n) {
  if (!xo(t)) throw Error(M(200));
  return ko(null, e, t, !1, n);
};
et.unmountComponentAtNode = function (e) {
  if (!xo(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (Dn(function () {
        ko(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ot] = null));
        });
      }),
      !0)
    : !1;
};
et.unstable_batchedUpdates = wc;
et.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!xo(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return ko(e, t, n, !1, i);
};
et.version = "18.3.1-next-f1338f8080-20240426";
function d0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d0);
    } catch (e) {
      console.error(e);
    }
}
(d0(), (dp.exports = et));
var rg = dp.exports,
  cd = rg;
((Sa.createRoot = cd.createRoot), (Sa.hydrateRoot = cd.hydrateRoot));
/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Sr() {
  return (
    (Sr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    Sr.apply(this, arguments)
  );
}
var Xt;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Xt || (Xt = {}));
const ud = "popstate";
function sg(e) {
  e === void 0 && (e = {});
  function t(i, r) {
    let { pathname: s, search: o, hash: l } = i.location;
    return ml(
      "",
      { pathname: s, search: o, hash: l },
      (r.state && r.state.usr) || null,
      (r.state && r.state.key) || "default",
    );
  }
  function n(i, r) {
    return typeof r == "string" ? r : Zs(r);
  }
  return ag(t, n, null, e);
}
function ve(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Tc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function og() {
  return Math.random().toString(36).substr(2, 8);
}
function dd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ml(e, t, n, i) {
  return (
    n === void 0 && (n = null),
    Sr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ci(t) : t,
      { state: n, key: (t && t.key) || i || og() },
    )
  );
}
function Zs(e) {
  let { pathname: t = "/", search: n = "", hash: i = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (t += i.charAt(0) === "#" ? i : "#" + i),
    t
  );
}
function Ci(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let i = e.indexOf("?");
    (i >= 0 && ((t.search = e.substr(i)), (e = e.substr(0, i))),
      e && (t.pathname = e));
  }
  return t;
}
function ag(e, t, n, i) {
  i === void 0 && (i = {});
  let { window: r = document.defaultView, v5Compat: s = !1 } = i,
    o = r.history,
    l = Xt.Pop,
    c = null,
    u = d();
  u == null && ((u = 0), o.replaceState(Sr({}, o.state, { idx: u }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function p() {
    l = Xt.Pop;
    let S = d(),
      y = S == null ? null : S - u;
    ((u = S), c && c({ action: l, location: k.location, delta: y }));
  }
  function f(S, y) {
    l = Xt.Push;
    let m = ml(k.location, S, y);
    u = d() + 1;
    let g = dd(m, u),
      C = k.createHref(m);
    try {
      o.pushState(g, "", C);
    } catch (N) {
      if (N instanceof DOMException && N.name === "DataCloneError") throw N;
      r.location.assign(C);
    }
    s && c && c({ action: l, location: k.location, delta: 1 });
  }
  function h(S, y) {
    l = Xt.Replace;
    let m = ml(k.location, S, y);
    u = d();
    let g = dd(m, u),
      C = k.createHref(m);
    (o.replaceState(g, "", C),
      s && c && c({ action: l, location: k.location, delta: 0 }));
  }
  function w(S) {
    let y = r.location.origin !== "null" ? r.location.origin : r.location.href,
      m = typeof S == "string" ? S : Zs(S);
    return (
      (m = m.replace(/ $/, "%20")),
      ve(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          m,
      ),
      new URL(m, y)
    );
  }
  let k = {
    get action() {
      return l;
    },
    get location() {
      return e(r, o);
    },
    listen(S) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        r.addEventListener(ud, p),
        (c = S),
        () => {
          (r.removeEventListener(ud, p), (c = null));
        }
      );
    },
    createHref(S) {
      return t(r, S);
    },
    createURL: w,
    encodeLocation(S) {
      let y = w(S);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: f,
    replace: h,
    go(S) {
      return o.go(S);
    },
  };
  return k;
}
var pd;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(pd || (pd = {}));
function lg(e, t, n) {
  return (n === void 0 && (n = "/"), cg(e, t, n));
}
function cg(e, t, n, i) {
  let r = typeof t == "string" ? Ci(t) : t,
    s = Pc(r.pathname || "/", n);
  if (s == null) return null;
  let o = p0(e);
  ug(o);
  let l = null;
  for (let c = 0; l == null && c < o.length; ++c) {
    let u = Sg(s);
    l = wg(o[c], u);
  }
  return l;
}
function p0(e, t, n, i) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    i === void 0 && (i = ""));
  let r = (s, o, l) => {
    let c = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    c.relativePath.startsWith("/") &&
      (ve(
        c.relativePath.startsWith(i),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + i + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (c.relativePath = c.relativePath.slice(i.length)));
    let u = ln([i, c.relativePath]),
      d = n.concat(c);
    (s.children &&
      s.children.length > 0 &&
      (ve(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      p0(s.children, t, d, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: yg(u, s.index), routesMeta: d }));
  };
  return (
    e.forEach((s, o) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) r(s, o);
      else for (let c of h0(s.path)) r(s, o, c);
    }),
    t
  );
}
function h0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...i] = t,
    r = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (i.length === 0) return r ? [s, ""] : [s];
  let o = h0(i.join("/")),
    l = [];
  return (
    l.push(...o.map((c) => (c === "" ? s : [s, c].join("/")))),
    r && l.push(...o),
    l.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function ug(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : vg(
          t.routesMeta.map((i) => i.childrenIndex),
          n.routesMeta.map((i) => i.childrenIndex),
        ),
  );
}
const dg = /^:[\w-]+$/,
  pg = 3,
  hg = 2,
  fg = 1,
  mg = 10,
  gg = -2,
  hd = (e) => e === "*";
function yg(e, t) {
  let n = e.split("/"),
    i = n.length;
  return (
    n.some(hd) && (i += gg),
    t && (i += hg),
    n
      .filter((r) => !hd(r))
      .reduce((r, s) => r + (dg.test(s) ? pg : s === "" ? fg : mg), i)
  );
}
function vg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, r) => i === t[r])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function wg(e, t, n) {
  let { routesMeta: i } = e,
    r = {},
    s = "/",
    o = [];
  for (let l = 0; l < i.length; ++l) {
    let c = i[l],
      u = l === i.length - 1,
      d = s === "/" ? t : t.slice(s.length) || "/",
      p = xg(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: u },
        d,
      ),
      f = c.route;
    if (!p) return null;
    (Object.assign(r, p.params),
      o.push({
        params: r,
        pathname: ln([s, p.pathname]),
        pathnameBase: Tg(ln([s, p.pathnameBase])),
        route: f,
      }),
      p.pathnameBase !== "/" && (s = ln([s, p.pathnameBase])));
  }
  return o;
}
function xg(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, i] = kg(e.path, e.caseSensitive, e.end),
    r = t.match(n);
  if (!r) return null;
  let s = r[0],
    o = s.replace(/(.)\/+$/, "$1"),
    l = r.slice(1);
  return {
    params: i.reduce((u, d, p) => {
      let { paramName: f, isOptional: h } = d;
      if (f === "*") {
        let k = l[p] || "";
        o = s.slice(0, s.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const w = l[p];
      return (
        h && !w ? (u[f] = void 0) : (u[f] = (w || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function kg(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Tc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let i = [],
    r =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, c) => (
            i.push({ paramName: l, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (r += "\\/*$")
        : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r, t ? void 0 : "i"), i]
  );
}
function Sg(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Tc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Pc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    i = e.charAt(n);
  return i && i !== "/" ? null : e.slice(n) || "/";
}
const Cg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  bg = (e) => Cg.test(e);
function Eg(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: i = "",
      hash: r = "",
    } = typeof e == "string" ? Ci(e) : e,
    s;
  if (n)
    if (bg(n)) s = n;
    else {
      if (n.includes("//")) {
        let o = n;
        ((n = n.replace(/\/\/+/g, "/")),
          Tc(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (o + " -> " + n),
          ));
      }
      n.startsWith("/") ? (s = fd(n.substring(1), "/")) : (s = fd(n, t));
    }
  else s = t;
  return { pathname: s, search: Pg(i), hash: Mg(r) };
}
function fd(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((r) => {
      r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ea(e, t, n, i) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(i) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ng(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function f0(e, t) {
  let n = Ng(e);
  return t
    ? n.map((i, r) => (r === n.length - 1 ? i.pathname : i.pathnameBase))
    : n.map((i) => i.pathnameBase);
}
function m0(e, t, n, i) {
  i === void 0 && (i = !1);
  let r;
  typeof e == "string"
    ? (r = Ci(e))
    : ((r = Sr({}, e)),
      ve(
        !r.pathname || !r.pathname.includes("?"),
        ea("?", "pathname", "search", r),
      ),
      ve(
        !r.pathname || !r.pathname.includes("#"),
        ea("#", "pathname", "hash", r),
      ),
      ve(!r.search || !r.search.includes("#"), ea("#", "search", "hash", r)));
  let s = e === "" || r.pathname === "",
    o = s ? "/" : r.pathname,
    l;
  if (o == null) l = n;
  else {
    let p = t.length - 1;
    if (!i && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) (f.shift(), (p -= 1));
      r.pathname = f.join("/");
    }
    l = p >= 0 ? t[p] : "/";
  }
  let c = Eg(r, l),
    u = o && o !== "/" && o.endsWith("/"),
    d = (s || o === ".") && n.endsWith("/");
  return (!c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c);
}
const ln = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Tg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Pg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Mg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function jg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const g0 = ["post", "put", "patch", "delete"];
new Set(g0);
const Ag = ["get", ...g0];
new Set(Ag);
/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cr() {
  return (
    (Cr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    Cr.apply(this, arguments)
  );
}
const Mc = E.createContext(null),
  Ig = E.createContext(null),
  zn = E.createContext(null),
  So = E.createContext(null),
  mn = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  y0 = E.createContext(null);
function Dg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Lr() || ve(!1);
  let { basename: i, navigator: r } = E.useContext(zn),
    { hash: s, pathname: o, search: l } = w0(e, { relative: n }),
    c = o;
  return (
    i !== "/" && (c = o === "/" ? i : ln([i, o])),
    r.createHref({ pathname: c, search: l, hash: s })
  );
}
function Lr() {
  return E.useContext(So) != null;
}
function bi() {
  return (Lr() || ve(!1), E.useContext(So).location);
}
function v0(e) {
  E.useContext(zn).static || E.useLayoutEffect(e);
}
function jc() {
  let { isDataRoute: e } = E.useContext(mn);
  return e ? Gg() : Lg();
}
function Lg() {
  Lr() || ve(!1);
  let e = E.useContext(Mc),
    { basename: t, future: n, navigator: i } = E.useContext(zn),
    { matches: r } = E.useContext(mn),
    { pathname: s } = bi(),
    o = JSON.stringify(f0(r, n.v7_relativeSplatPath)),
    l = E.useRef(!1);
  return (
    v0(() => {
      l.current = !0;
    }),
    E.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == "number") {
          i.go(u);
          return;
        }
        let p = m0(u, JSON.parse(o), s, d.relative === "path");
        (e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : ln([t, p.pathname])),
          (d.replace ? i.replace : i.push)(p, d.state, d));
      },
      [t, i, o, s, e],
    )
  );
}
function Rg() {
  let { matches: e } = E.useContext(mn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function w0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: i } = E.useContext(zn),
    { matches: r } = E.useContext(mn),
    { pathname: s } = bi(),
    o = JSON.stringify(f0(r, i.v7_relativeSplatPath));
  return E.useMemo(() => m0(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function _g(e, t) {
  return zg(e, t);
}
function zg(e, t, n, i) {
  Lr() || ve(!1);
  let { navigator: r } = E.useContext(zn),
    { matches: s } = E.useContext(mn),
    o = s[s.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let c = o ? o.pathnameBase : "/";
  o && o.route;
  let u = bi(),
    d;
  if (t) {
    var p;
    let S = typeof t == "string" ? Ci(t) : t;
    (c === "/" || ((p = S.pathname) != null && p.startsWith(c)) || ve(!1),
      (d = S));
  } else d = u;
  let f = d.pathname || "/",
    h = f;
  if (c !== "/") {
    let S = c.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let w = lg(e, { pathname: h }),
    k = Ug(
      w &&
        w.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: ln([
              c,
              r.encodeLocation
                ? r.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? c
                : ln([
                    c,
                    r.encodeLocation
                      ? r.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          }),
        ),
      s,
      n,
      i,
    );
  return t && k
    ? E.createElement(
        So.Provider,
        {
          value: {
            location: Cr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d,
            ),
            navigationType: Xt.Pop,
          },
        },
        k,
      )
    : k;
}
function Og() {
  let e = $g(),
    t = jg(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? E.createElement("pre", { style: r }, n) : null,
    null,
  );
}
const Bg = E.createElement(Og, null);
class Hg extends E.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? E.createElement(
          mn.Provider,
          { value: this.props.routeContext },
          E.createElement(y0.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Fg(e) {
  let { routeContext: t, match: n, children: i } = e,
    r = E.useContext(Mc);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(mn.Provider, { value: t }, i)
  );
}
function Ug(e, t, n, i) {
  var r;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    i === void 0 && (i = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = i) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let d = o.findIndex(
      (p) => p.route.id && (l == null ? void 0 : l[p.route.id]) !== void 0,
    );
    (d >= 0 || ve(!1), (o = o.slice(0, Math.min(o.length, d + 1))));
  }
  let c = !1,
    u = -1;
  if (n && i && i.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let p = o[d];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = d),
        p.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          w =
            p.route.loader &&
            f[p.route.id] === void 0 &&
            (!h || h[p.route.id] === void 0);
        if (p.route.lazy || w) {
          ((c = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((d, p, f) => {
    let h,
      w = !1,
      k = null,
      S = null;
    n &&
      ((h = l && p.route.id ? l[p.route.id] : void 0),
      (k = p.route.errorElement || Bg),
      c &&
        (u < 0 && f === 0
          ? (Qg("route-fallback"), (w = !0), (S = null))
          : u === f &&
            ((w = !0), (S = p.route.hydrateFallbackElement || null))));
    let y = t.concat(o.slice(0, f + 1)),
      m = () => {
        let g;
        return (
          h
            ? (g = k)
            : w
              ? (g = S)
              : p.route.Component
                ? (g = E.createElement(p.route.Component, null))
                : p.route.element
                  ? (g = p.route.element)
                  : (g = d),
          E.createElement(Fg, {
            match: p,
            routeContext: { outlet: d, matches: y, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || f === 0)
      ? E.createElement(Hg, {
          location: n.location,
          revalidation: n.revalidation,
          component: k,
          error: h,
          children: m(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var x0 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(x0 || {}),
  k0 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(k0 || {});
function Wg(e) {
  let t = E.useContext(Mc);
  return (t || ve(!1), t);
}
function Vg(e) {
  let t = E.useContext(Ig);
  return (t || ve(!1), t);
}
function qg(e) {
  let t = E.useContext(mn);
  return (t || ve(!1), t);
}
function S0(e) {
  let t = qg(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || ve(!1), n.route.id);
}
function $g() {
  var e;
  let t = E.useContext(y0),
    n = Vg(),
    i = S0();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[i];
}
function Gg() {
  let { router: e } = Wg(x0.UseNavigateStable),
    t = S0(k0.UseNavigateStable),
    n = E.useRef(!1);
  return (
    v0(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (r, s) {
        (s === void 0 && (s = {}),
          n.current &&
            (typeof r == "number"
              ? e.navigate(r)
              : e.navigate(r, Cr({ fromRouteId: t }, s))));
      },
      [e, t],
    )
  );
}
const md = {};
function Qg(e, t, n) {
  md[e] || (md[e] = !0);
}
function Kg(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function ze(e) {
  ve(!1);
}
function Jg(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: i,
    navigationType: r = Xt.Pop,
    navigator: s,
    static: o = !1,
    future: l,
  } = e;
  Lr() && ve(!1);
  let c = t.replace(/^\/*/, "/"),
    u = E.useMemo(
      () => ({
        basename: c,
        navigator: s,
        static: o,
        future: Cr({ v7_relativeSplatPath: !1 }, l),
      }),
      [c, l, s, o],
    );
  typeof i == "string" && (i = Ci(i));
  let {
      pathname: d = "/",
      search: p = "",
      hash: f = "",
      state: h = null,
      key: w = "default",
    } = i,
    k = E.useMemo(() => {
      let S = Pc(d, c);
      return S == null
        ? null
        : {
            location: { pathname: S, search: p, hash: f, state: h, key: w },
            navigationType: r,
          };
    }, [c, d, p, f, h, w, r]);
  return k == null
    ? null
    : E.createElement(
        zn.Provider,
        { value: u },
        E.createElement(So.Provider, { children: n, value: k }),
      );
}
function Yg(e) {
  let { children: t, location: n } = e;
  return _g(gl(t), n);
}
new Promise(() => {});
function gl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    E.Children.forEach(e, (i, r) => {
      if (!E.isValidElement(i)) return;
      let s = [...t, r];
      if (i.type === E.Fragment) {
        n.push.apply(n, gl(i.props.children, s));
        return;
      }
      (i.type !== ze && ve(!1), !i.props.index || !i.props.children || ve(!1));
      let o = {
        id: i.props.id || s.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.ErrorBoundary != null || i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      (i.props.children && (o.children = gl(i.props.children, s)), n.push(o));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yl() {
  return (
    (yl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    yl.apply(this, arguments)
  );
}
function Xg(e, t) {
  if (e == null) return {};
  var n = {},
    i = Object.keys(e),
    r,
    s;
  for (s = 0; s < i.length; s++)
    ((r = i[s]), !(t.indexOf(r) >= 0) && (n[r] = e[r]));
  return n;
}
function Zg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function e3(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Zg(e);
}
const t3 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  n3 = "6";
try {
  window.__reactRouterVersion = n3;
} catch {}
const i3 = "startTransition",
  gd = Gf[i3];
function r3(e) {
  let { basename: t, children: n, future: i, window: r } = e,
    s = E.useRef();
  s.current == null && (s.current = sg({ window: r, v5Compat: !0 }));
  let o = s.current,
    [l, c] = E.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = i || {},
    d = E.useCallback(
      (p) => {
        u && gd ? gd(() => c(p)) : c(p);
      },
      [c, u],
    );
  return (
    E.useLayoutEffect(() => o.listen(d), [o, d]),
    E.useEffect(() => Kg(i), [i]),
    E.createElement(Jg, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: o,
      future: i,
    })
  );
}
const s3 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  o3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  _t = E.forwardRef(function (t, n) {
    let {
        onClick: i,
        relative: r,
        reloadDocument: s,
        replace: o,
        state: l,
        target: c,
        to: u,
        preventScrollReset: d,
        viewTransition: p,
      } = t,
      f = Xg(t, t3),
      { basename: h } = E.useContext(zn),
      w,
      k = !1;
    if (typeof u == "string" && o3.test(u) && ((w = u), s3))
      try {
        let g = new URL(window.location.href),
          C = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
          N = Pc(C.pathname, h);
        C.origin === g.origin && N != null
          ? (u = N + C.search + C.hash)
          : (k = !0);
      } catch {}
    let S = Dg(u, { relative: r }),
      y = a3(u, {
        replace: o,
        state: l,
        target: c,
        preventScrollReset: d,
        relative: r,
        viewTransition: p,
      });
    function m(g) {
      (i && i(g), g.defaultPrevented || y(g));
    }
    return E.createElement(
      "a",
      yl({}, f, { href: w || S, onClick: k || s ? i : m, ref: n, target: c }),
    );
  });
var yd;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(yd || (yd = {}));
var vd;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(vd || (vd = {}));
function a3(e, t) {
  let {
      target: n,
      replace: i,
      state: r,
      preventScrollReset: s,
      relative: o,
      viewTransition: l,
    } = t === void 0 ? {} : t,
    c = jc(),
    u = bi(),
    d = w0(e, { relative: o });
  return E.useCallback(
    (p) => {
      if (e3(p, n)) {
        p.preventDefault();
        let f = i !== void 0 ? i : Zs(u) === Zs(d);
        c(e, {
          replace: f,
          state: r,
          preventScrollReset: s,
          relative: o,
          viewTransition: l,
        });
      }
    },
    [u, c, d, i, r, n, e, s, o, l],
  );
}
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const l3 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  c3 = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, i) =>
      i ? i.toUpperCase() : n.toLowerCase(),
    ),
  wd = (e) => {
    const t = c3(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  C0 = (...e) =>
    e
      .filter((t, n, i) => !!t && t.trim() !== "" && i.indexOf(t) === n)
      .join(" ")
      .trim(),
  u3 = (e) => {
    for (const t in e)
      if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  };
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var d3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p3 = E.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: i,
      className: r = "",
      children: s,
      iconNode: o,
      ...l
    },
    c,
  ) =>
    E.createElement(
      "svg",
      {
        ref: c,
        ...d3,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: i ? (Number(n) * 24) / Number(t) : n,
        className: C0("lucide", r),
        ...(!s && !u3(l) && { "aria-hidden": "true" }),
        ...l,
      },
      [
        ...o.map(([u, d]) => E.createElement(u, d)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B = (e, t) => {
  const n = E.forwardRef(({ className: i, ...r }, s) =>
    E.createElement(p3, {
      ref: s,
      iconNode: t,
      className: C0(`lucide-${l3(wd(e))}`, `lucide-${e}`, i),
      ...r,
    }),
  );
  return ((n.displayName = wd(e)), n);
};
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h3 = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  b0 = B("arrow-left", h3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f3 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  br = B("arrow-right", f3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m3 = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  E0 = B("award", m3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g3 = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  Pn = B("book-open", g3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y3 = [
    ["path", { d: "M12 8V4H8", key: "hb8ula" }],
    [
      "rect",
      { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" },
    ],
    ["path", { d: "M2 14h2", key: "vft8re" }],
    ["path", { d: "M20 14h2", key: "4cs60a" }],
    ["path", { d: "M15 13v2", key: "1xurst" }],
    ["path", { d: "M9 13v2", key: "rq6x2g" }],
  ],
  ci = B("bot", y3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v3 = [
    [
      "path",
      {
        d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
        key: "l5xja",
      },
    ],
    ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }],
    ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
    ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
    ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
    ["path", { d: "M12 13h4", key: "1ku699" }],
    ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
    ["path", { d: "M12 8h8", key: "1lhi5i" }],
    ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }],
    ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }],
    ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }],
    ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }],
    ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }],
  ],
  vl = B("brain-circuit", v3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w3 = [
    ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
    ],
  ],
  N0 = B("briefcase", w3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x3 = [
    [
      "rect",
      { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" },
    ],
    ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
    ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
    ["path", { d: "M16 10h.01", key: "1m94wz" }],
    ["path", { d: "M12 10h.01", key: "1nrarc" }],
    ["path", { d: "M8 10h.01", key: "19clt8" }],
    ["path", { d: "M12 14h.01", key: "1etili" }],
    ["path", { d: "M8 14h.01", key: "6423bh" }],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
    ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ],
  k3 = B("calculator", x3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S3 = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  T0 = B("calendar", S3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C3 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  b3 = B("check", C3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E3 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  N3 = B("chevron-down", E3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T3 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  P3 = B("chevron-right", T3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const M3 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  j3 = B("chevron-up", M3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A3 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  I3 = B("circle-alert", A3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D3 = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  Ac = B("circle-check-big", D3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L3 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  It = B("circle-check", L3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R3 = [
    [
      "path",
      {
        d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
        key: "kmsa83",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  wl = B("circle-play", R3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _3 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]],
  z3 = B("circle", _3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O3 = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  eo = B("clock", O3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B3 = [
    ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
    ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }],
  ],
  H3 = B("code", B3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F3 = [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
    [
      "path",
      { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
    ],
  ],
  U3 = B("dollar-sign", F3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W3 = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  Ic = B("download", W3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V3 = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  En = B("external-link", V3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q3 = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  Co = B("file-text", q3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $3 = [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
        key: "1kt360",
      },
    ],
  ],
  G3 = B("folder", $3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q3 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  K3 = B("globe", Q3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J3 = [
    [
      "rect",
      { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
    ],
    [
      "rect",
      { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
    ],
  ],
  Y3 = B("layout-dashboard", J3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X3 = [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb",
      },
    ],
    ["path", { d: "M9 18h6", key: "x1upvd" }],
    ["path", { d: "M10 22h4", key: "ceow96" }],
  ],
  Z3 = B("lightbulb", X3);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e4 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  P0 = B("loader-circle", e4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t4 = [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
  ],
  xd = B("loader", t4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n4 = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  i4 = B("map-pin", n4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r4 = [
    [
      "path",
      {
        d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
        key: "169xi5",
      },
    ],
    ["path", { d: "M15 5.764v15", key: "1pn4in" }],
    ["path", { d: "M9 3.236v15", key: "1uimfh" }],
  ],
  s4 = B("map", r4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const o4 = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  a4 = B("menu", o4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const l4 = [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p",
      },
    ],
  ],
  c4 = B("message-square", l4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u4 = [
    ["path", { d: "M12 19v3", key: "npa21l" }],
    ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
    [
      "rect",
      { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" },
    ],
  ],
  d4 = B("mic", u4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p4 = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ],
  kd = B("moon", p4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h4 = [
    [
      "rect",
      { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" },
    ],
    [
      "rect",
      { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" },
    ],
    [
      "rect",
      { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" },
    ],
    ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
    ["path", { d: "M12 12V8", key: "2874zd" }],
  ],
  f4 = B("network", h4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m4 = [
    [
      "path",
      {
        d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
        key: "nt11vn",
      },
    ],
    [
      "path",
      {
        d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
        key: "15qc1e",
      },
    ],
    ["path", { d: "m2.3 2.3 7.286 7.286", key: "1wuzzi" }],
    ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }],
  ],
  g4 = B("pen-tool", m4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y4 = [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
  ],
  v4 = B("pen", y4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w4 = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  x4 = B("play", w4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k4 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  S4 = B("plus", k4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C4 = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  xl = B("search", C4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b4 = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  E4 = B("send", b4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N4 = [
    [
      "rect",
      {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2",
        key: "ngkwjq",
      },
    ],
    [
      "rect",
      {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2",
        key: "iecqi9",
      },
    ],
    ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
    ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
  ],
  T4 = B("server", N4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P4 = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  M4 = B("star", P4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j4 = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  Sd = B("sun", j4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A4 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  Er = B("target", A4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I4 = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  D4 = B("trash-2", I4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L4 = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  Dc = B("trending-up", L4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R4 = [
    ["path", { d: "M12 3v12", key: "1x0j5s" }],
    ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ],
  _4 = B("upload", R4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z4 = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  O4 = B("user", z4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B4 = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  H4 = B("users", B4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F4 = [
    [
      "path",
      {
        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
        key: "ftymec",
      },
    ],
    [
      "rect",
      { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" },
    ],
  ],
  U4 = B("video", F4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W4 = [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
        key: "uqj9uw",
      },
    ],
    ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
    ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
  ],
  V4 = B("volume-2", W4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q4 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Cd = B("x", q4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $4 = [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4",
      },
    ],
    ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
  ],
  M0 = B("youtube", $4);
/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G4 = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  j0 = B("zap", G4);
function Q4({ theme: e, toggleTheme: t }) {
  const n = bi(),
    [i, r] = E.useState(!1),
    s = (u) => (n.pathname === u ? "active" : ""),
    o = [
      { name: "Dashboard", path: "/dashboard", icon: a.jsx(Y3, { size: 18 }) },
      { name: "AI Chat", path: "/chat", icon: a.jsx(c4, { size: 18 }) },
      { name: "Interview", path: "/interview", icon: a.jsx(U4, { size: 18 }) },
      { name: "Roadmap", path: "/roadmap", icon: a.jsx(s4, { size: 18 }) },
      {
        name: "Video Feed",
        path: "/video-feed",
        icon: a.jsx(M0, { size: 18 }),
      },
      { name: "Notes", path: "/notes", icon: a.jsx(Co, { size: 18 }) },
      { name: "Quiz", path: "/quiz", icon: a.jsx(vl, { size: 18 }) },
    ],
    l = () => {
      r(!i);
    },
    c = () => {
      r(!1);
    };
  return a.jsxs("nav", {
    className: "navbar",
    children: [
      a.jsxs("div", {
        className: "navbar-container",
        children: [
          a.jsxs(_t, {
            to: "/",
            className: "navbar-logo",
            children: [
              a.jsx("div", {
                className: "logo-badge",
                children: a.jsx(ci, { className: "logo-icon", size: 24 }),
              }),
              a.jsx("span", { children: "InterView" }),
            ],
          }),
          a.jsxs("ul", {
            className: "navbar-links",
            children: [
              o.map((u) =>
                a.jsx(
                  "li",
                  {
                    children: a.jsxs(_t, {
                      to: u.path,
                      className: `nav-link ${s(u.path)}`,
                      children: [u.icon, a.jsx("span", { children: u.name })],
                    }),
                  },
                  u.name,
                ),
              ),
              a.jsx("li", {
                children: a.jsx("button", {
                  className: "theme-toggle",
                  onClick: t,
                  "aria-label": "Toggle Theme",
                  children:
                    e === "light"
                      ? a.jsx(kd, { size: 20 })
                      : a.jsx(Sd, { size: 20 }),
                }),
              }),
            ],
          }),
          a.jsx("button", {
            className: "mobile-menu-button",
            onClick: l,
            "aria-label": "Toggle Mobile Menu",
            children: i ? a.jsx(Cd, { size: 24 }) : a.jsx(a4, { size: 24 }),
          }),
        ],
      }),
      i && a.jsx("div", { className: "mobile-menu-backdrop", onClick: c }),
      a.jsxs("div", {
        className: `mobile-menu ${i ? "open" : ""}`,
        children: [
          a.jsxs("div", {
            className: "mobile-menu-header",
            children: [
              a.jsx("h3", { children: "Navigation" }),
              a.jsx("button", {
                className: "mobile-menu-close",
                onClick: c,
                "aria-label": "Close Menu",
                children: a.jsx(Cd, { size: 24 }),
              }),
            ],
          }),
          a.jsx("ul", {
            className: "mobile-menu-links",
            children: o.map((u) =>
              a.jsx(
                "li",
                {
                  children: a.jsxs(_t, {
                    to: u.path,
                    className: `mobile-nav-link ${s(u.path)}`,
                    onClick: c,
                    children: [u.icon, a.jsx("span", { children: u.name })],
                  }),
                },
                u.name,
              ),
            ),
          }),
          a.jsx("div", {
            className: "mobile-menu-footer",
            children: a.jsxs("button", {
              className: "mobile-theme-toggle",
              onClick: t,
              children: [
                e === "light"
                  ? a.jsx(kd, { size: 20 })
                  : a.jsx(Sd, { size: 20 }),
                a.jsx("span", {
                  children: e === "light" ? "Dark Mode" : "Light Mode",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function K4() {
  const e = [
      { number: "175+", label: "Interview Questions" },
      { number: "50+", label: "Study Resources" },
      { number: "5", label: "Career Paths" },
      { number: "∞", label: "AI-Powered Practice" },
    ],
    t = [
      {
        icon: a.jsx(Er, { size: 28 }),
        title: "Role-Based Preparation",
        description:
          "Tailored content for Frontend, Backend, Full Stack, Data Analyst, and DevOps roles.",
        color: "#3b82f6",
      },
      {
        icon: a.jsx(j0, { size: 28 }),
        title: "Interactive Learning",
        description:
          "Engaging quizzes, coding challenges, and scenario-based problems to master concepts.",
        color: "#f59e0b",
      },
      {
        icon: a.jsx(E0, { size: 28 }),
        title: "Structured Roadmaps",
        description:
          "Step-by-step learning paths designed by industry experts to guide your journey.",
        color: "#10b981",
      },
    ];
  return a.jsxs("div", {
    className: "landing-page",
    children: [
      a.jsxs("section", {
        className: "landing-hero",
        children: [
          a.jsxs("div", {
            className: "hero-background",
            children: [
              a.jsx("div", { className: "gradient-orb orb-1" }),
              a.jsx("div", { className: "gradient-orb orb-2" }),
              a.jsx("div", { className: "gradient-orb orb-3" }),
              a.jsx("div", { className: "grid-overlay" }),
            ],
          }),
          a.jsxs("div", {
            className: "hero-content",
            children: [
              a.jsxs("h1", {
                className: "hero-title",
                children: [
                  "Master Your Skills.",
                  a.jsx("br", {}),
                  a.jsx("span", {
                    className: "gradient-text",
                    children: "Level Up Your Placement.",
                  }),
                ],
              }),
              a.jsx("p", {
                className: "hero-subtitle",
                children:
                  "Transform your preparation journey with our comprehensive resources, and expert-curated content. Everything you need to land your dream tech job.",
              }),
              a.jsxs("div", {
                className: "hero-cta-group",
                children: [
                  a.jsxs(_t, {
                    to: "/dashboard",
                    className: "hero-cta primary",
                    children: [
                      "Start Preparing Free ",
                      a.jsx(br, { size: 20 }),
                    ],
                  }),
                  a.jsx(_t, {
                    to: "/roadmap",
                    className: "hero-cta secondary",
                    children: "View Roadmaps",
                  }),
                ],
              }),
              a.jsx("div", {
                className: "hero-stats",
                children: e.map((n, i) =>
                  a.jsxs(
                    "div",
                    {
                      className: "stat-item",
                      children: [
                        a.jsx("div", {
                          className: "stat-number",
                          children: n.number,
                        }),
                        a.jsx("div", {
                          className: "stat-label",
                          children: n.label,
                        }),
                      ],
                    },
                    i,
                  ),
                ),
              }),
            ],
          }),
          a.jsxs("div", {
            className: "floating-elements",
            children: [
              a.jsxs("div", {
                className: "float-card card-1",
                children: [
                  a.jsx(H4, { size: 20 }),
                  a.jsx("span", { children: "Join thousands preparing" }),
                ],
              }),
              a.jsxs("div", {
                className: "float-card card-2",
                children: [
                  a.jsx(Dc, { size: 20 }),
                  a.jsx("span", { children: "98% success rate" }),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsx("section", {
        className: "landing-features",
        children: a.jsxs("div", {
          className: "features-container",
          children: [
            a.jsxs("div", {
              className: "features-header",
              children: [
                a.jsx("div", {
                  className: "section-badge",
                  children: "Why Choose Us",
                }),
                a.jsx("h2", { children: "Everything You Need to Succeed" }),
                a.jsx("p", {
                  children:
                    "Comprehensive preparation platform designed for modern tech interviews",
                }),
              ],
            }),
            a.jsx("div", {
              className: "features-grid",
              children: t.map((n, i) =>
                a.jsxs(
                  "div",
                  {
                    className: "feature-card",
                    style: { "--feature-color": n.color },
                    children: [
                      a.jsx("div", {
                        className: "feature-icon-wrapper",
                        style: {
                          background: `linear-gradient(135deg, ${n.color}22, ${n.color}11)`,
                        },
                        children: a.jsx("div", {
                          className: "feature-icon",
                          style: { color: n.color },
                          children: n.icon,
                        }),
                      }),
                      a.jsx("h3", { children: n.title }),
                      a.jsx("p", { children: n.description }),
                      a.jsx("div", { className: "feature-shine" }),
                    ],
                  },
                  i,
                ),
              ),
            }),
          ],
        }),
      }),
      a.jsx("section", {
        className: "landing-cta",
        children: a.jsxs("div", {
          className: "cta-content",
          children: [
            a.jsx("h2", { children: "Ready to Ace Your Interviews?" }),
            a.jsx("p", {
              children:
                "Join the platform trusted by thousands of aspiring developers",
            }),
            a.jsxs(_t, {
              to: "/dashboard",
              className: "cta-button",
              children: ["Get Started Now ", a.jsx(br, { size: 20 })],
            }),
          ],
        }),
      }),
    ],
  });
}
function gn({
  title: e,
  subtitle: t,
  showBack: n = !0,
  backTo: i = "/dashboard",
}) {
  const r = jc();
  return a.jsxs("div", {
    className: "page-header",
    children: [
      n &&
        a.jsx("div", {
          className: "page-header-nav",
          children: a.jsxs("button", {
            onClick: () => r(i),
            className: "back-button",
            children: [a.jsx(b0, { size: 16 }), " Back"],
          }),
        }),
      a.jsx("h1", { className: "page-title", children: e }),
      t && a.jsx("p", { className: "page-subtitle", children: t }),
    ],
  });
}
const Rr = () => {
  const e = Array.from({ length: 5 }, (i, r) => ({
      id: r,
      size: Math.random() * 400 + 300,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 30,
    })),
    t = Array.from({ length: 30 }, (i, r) => ({
      id: r,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 15 + 20,
      opacity: Math.random() * 0.4 + 0.2,
    })),
    n = Array.from({ length: 12 }, (i, r) => ({
      id: r,
      position: (r / 11) * 100,
      delay: r * 0.5,
    }));
  return a.jsxs("div", {
    className: "animated-background",
    children: [
      a.jsx("div", {
        className: "gradient-mesh",
        children: e.map((i) =>
          a.jsx(
            "div",
            {
              className: "gradient-orb",
              style: {
                width: `${i.size}px`,
                height: `${i.size}px`,
                left: `${i.left}%`,
                top: `${i.top}%`,
                animationDelay: `${i.delay}s`,
                animationDuration: `${i.duration}s`,
              },
            },
            `orb-${i.id}`,
          ),
        ),
      }),
      a.jsx("div", {
        className: "particles-layer",
        children: t.map((i) =>
          a.jsx(
            "div",
            {
              className: "particle",
              style: {
                width: `${i.size}px`,
                height: `${i.size}px`,
                left: `${i.left}%`,
                animationDelay: `${i.delay}s`,
                animationDuration: `${i.duration}s`,
                opacity: i.opacity,
              },
            },
            `particle-${i.id}`,
          ),
        ),
      }),
      a.jsx("div", {
        className: "grid-lines",
        children: n.map((i) =>
          a.jsxs(
            bt.Fragment,
            {
              children: [
                a.jsx("div", {
                  className: "grid-line horizontal",
                  style: {
                    top: `${i.position}%`,
                    animationDelay: `${i.delay}s`,
                  },
                }),
                a.jsx("div", {
                  className: "grid-line vertical",
                  style: {
                    left: `${i.position}%`,
                    animationDelay: `${i.delay + 0.25}s`,
                  },
                }),
              ],
            },
            `line-${i.id}`,
          ),
        ),
      }),
      a.jsx("div", { className: "radial-overlay" }),
    ],
  });
};
function J4() {
  const [e, t] = E.useState(new Date()),
    [n, i] = E.useState("");
  (E.useEffect(() => {
    const o = setInterval(() => t(new Date()), 1e3);
    return () => clearInterval(o);
  }, []),
    E.useEffect(() => {
      const o = e.getHours();
      o < 12
        ? i("Good Morning")
        : o < 18
          ? i("Good Afternoon")
          : i("Good Evening");
    }, [e]));
  const r = [
      {
        title: "Browse Notes",
        desc: "17 Topics Available",
        icon: a.jsx(Pn, { size: 24 }),
        link: "/notes",
        color: "blue",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      {
        title: "Take Quiz",
        desc: "Test Your Knowledge",
        icon: a.jsx(g4, { size: 24 }),
        link: "/quiz",
        color: "green",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      },
      {
        title: "AI Assistant",
        desc: "Ask Anything",
        icon: a.jsx(ci, { size: 24 }),
        link: "/chat",
        color: "purple",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      },
      {
        title: "Study Plan",
        desc: "Create Roadmap",
        icon: a.jsx(T0, { size: 24 }),
        link: "/study-plan",
        color: "orange",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      },
      {
        title: "Mock Interview",
        desc: "AI Practice Sessions",
        icon: a.jsx(ci, { size: 24 }),
        link: "/interview",
        color: "purple",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      {
        title: "Learning Roadmap",
        desc: "Structured Paths",
        icon: a.jsx(Er, { size: 24 }),
        link: "/roadmap",
        color: "blue",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      },
      {
        title: "Interview Questions",
        desc: "Role-Based Prep",
        icon: a.jsx(j0, { size: 24 }),
        link: "/coding-practice",
        color: "purple",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      },
    ],
    s = [
      {
        id: "dynamic-programming",
        title: "Dynamic Programming Patterns",
        difficulty: "Hard",
        time: "45 min",
        category: "DSA",
      },
      {
        id: "system-design-caching",
        title: "System Design: Caching",
        difficulty: "Medium",
        time: "30 min",
        category: "System Design",
      },
      {
        id: "react-performance",
        title: "React Performance Optimization",
        difficulty: "Medium",
        time: "25 min",
        category: "Web Dev",
      },
      {
        id: "database-indexing",
        title: "Database Indexing Strategies",
        difficulty: "Hard",
        time: "40 min",
        category: "DBMS",
      },
    ];
  return a.jsxs("div", {
    className: "app-container",
    children: [
      a.jsx(Rr, {}),
      a.jsx("div", {
        className: "dashboard-header",
        children: a.jsxs("div", {
          className: "header-content",
          children: [
            a.jsxs("div", {
              className: "greeting-section",
              children: [
                a.jsxs("h1", {
                  className: "greeting-title",
                  children: [n, "! 👋"],
                }),
                a.jsx("p", {
                  className: "greeting-subtitle",
                  children: "Ready to level up your skills today?",
                }),
              ],
            }),
            a.jsxs("div", {
              className: "time-display",
              children: [
                a.jsx("div", {
                  className: "current-time",
                  children: e.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                }),
                a.jsx("div", {
                  className: "current-date",
                  children: e.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      a.jsxs("div", {
        className: "section-header",
        style: { marginTop: 48, marginBottom: 24 },
        children: [
          a.jsx("h2", {
            style: { fontSize: 20, fontWeight: 600, margin: 0 },
            children: "Quick Actions",
          }),
          a.jsx("p", {
            style: {
              fontSize: 14,
              color: "var(--text-muted)",
              margin: "4px 0 0 0",
            },
            children: "Jump right into learning",
          }),
        ],
      }),
      a.jsx("div", {
        className: "quick-actions-grid",
        children: r.map((o, l) =>
          a.jsxs(
            _t,
            {
              to: o.link,
              className: "action-card-new",
              children: [
                a.jsx("div", {
                  className: "action-gradient",
                  style: { background: o.gradient },
                }),
                a.jsxs("div", {
                  className: "action-content",
                  children: [
                    a.jsx("div", {
                      className: "action-icon-new",
                      children: o.icon,
                    }),
                    a.jsx("h3", { children: o.title }),
                    a.jsx("p", { children: o.desc }),
                    a.jsx("div", {
                      className: "action-arrow",
                      children: a.jsx(br, { size: 18 }),
                    }),
                  ],
                }),
              ],
            },
            l,
          ),
        ),
      }),
      a.jsxs("div", {
        children: [
          a.jsxs("div", {
            className: "section-header",
            style: { marginBottom: 16 },
            children: [
              a.jsx("h2", {
                style: { fontSize: 18, fontWeight: 600, margin: 0 },
                children: "Recommended Topics",
              }),
              a.jsx("p", {
                style: {
                  fontSize: 14,
                  color: "var(--text-muted)",
                  margin: "4px 0 0 0",
                },
                children: "Start learning these high-priority topics",
              }),
            ],
          }),
          a.jsx("div", {
            className: "topics-list",
            children: s.map((o, l) =>
              a.jsxs(
                _t,
                {
                  to: `/topic/${o.id}`,
                  className: "topic-card",
                  style: { textDecoration: "none" },
                  children: [
                    a.jsxs("div", {
                      className: "topic-header",
                      children: [
                        a.jsx("h4", { children: o.title }),
                        a.jsx("span", {
                          className: `badge badge-${o.difficulty === "Hard" ? "orange" : "blue"}`,
                          children: o.difficulty,
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "topic-meta",
                      children: [
                        a.jsx("span", {
                          className: "badge badge-purple",
                          children: o.category,
                        }),
                        a.jsxs("span", {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            fontSize: 12,
                            color: "var(--text-muted)",
                          },
                          children: [a.jsx(eo, { size: 12 }), " ", o.time],
                        }),
                      ],
                    }),
                  ],
                },
                l,
              ),
            ),
          }),
          a.jsxs("div", {
            className: "quote-card",
            style: { marginTop: 24 },
            children: [
              a.jsx("div", {
                style: {
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginBottom: 8,
                },
                children: "💡 Daily Motivation",
              }),
              a.jsx("p", {
                style: {
                  margin: 0,
                  fontSize: 14,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                },
                children:
                  '"The expert in anything was once a beginner. Keep pushing forward!"',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const ui = [
    {
      id: 1,
      title: "Best DSA Concepts for FAANG",
      category: "DSA",
      difficulty: "Hard",
      fileName: "Best DSA concepts for FAANG.pdf",
      tags: ["algorithms", "interview", "faang"],
    },
    {
      id: 2,
      title: "DSA in Python - Complete Theory",
      category: "DSA",
      difficulty: "Medium",
      fileName: "DSA in python complete theory hand writing notes (1).pdf",
      tags: ["python", "dsa", "theory"],
    },
    {
      id: 3,
      title: "Graph Data Structure",
      category: "DSA",
      difficulty: "Hard",
      fileName: "Graph Data Structure.pdf",
      tags: ["graphs", "algorithms"],
    },
    {
      id: 4,
      title: "Last Minute DSA Revision Sheet",
      category: "DSA",
      difficulty: "Medium",
      fileName: "Last Minute DSA Revision Sheet.pdf",
      tags: ["revision", "quick-reference"],
    },
    {
      id: 5,
      title: "LeetCode Important Questions & Solutions",
      category: "DSA",
      difficulty: "Hard",
      fileName: "Leetcode Important Questions Solutions -1.pdf",
      tags: ["leetcode", "solutions"],
    },
    {
      id: 6,
      title: "SDE Questions",
      category: "DSA",
      difficulty: "Hard",
      fileName: "SDE Questions.pdf",
      tags: ["sde", "interview"],
    },
    {
      id: 7,
      title: "Coding Practice",
      category: "DSA",
      difficulty: "Medium",
      fileName: "CODING  (1).pdf",
      tags: ["practice", "coding"],
    },
    {
      id: 8,
      title: "System Design Basics",
      category: "System Design",
      difficulty: "Hard",
      fileName: "System Design Basics.pdf",
      tags: ["system-design", "scalability"],
    },
    {
      id: 9,
      title: "React Handwritten Notes",
      category: "Web Dev",
      difficulty: "Medium",
      fileName: "React-Handwritten-notes.pdf",
      tags: ["react", "frontend"],
    },
    {
      id: 10,
      title: "ReactJS Notes for Professionals",
      category: "Web Dev",
      difficulty: "Medium",
      fileName: "ReactJSNotesForProfessionals.pdf",
      tags: ["react", "professional"],
    },
    {
      id: 11,
      title: "30 Days of React eBook",
      category: "Web Dev",
      difficulty: "Easy",
      fileName: "30-days-of-react-ebook-fullstackio.pdf",
      tags: ["react", "tutorial"],
    },
    {
      id: 12,
      title: "NodeJS Handwritten Notes",
      category: "Web Dev",
      difficulty: "Medium",
      fileName: "NodeJS-Handwritten-Notes.pdf",
      tags: ["nodejs", "backend"],
    },
    {
      id: 13,
      title: "CSS Notes",
      category: "Web Dev",
      difficulty: "Easy",
      fileName: "CSS Notes.pdf",
      tags: ["css", "styling"],
    },
    {
      id: 14,
      title: "JavaScript Class Notes 1",
      category: "Web Dev",
      difficulty: "Medium",
      fileName: "JS1 ClassNotes.pdf",
      tags: ["javascript", "basics"],
    },
    {
      id: 15,
      title: "JavaScript Class Notes 2",
      category: "Web Dev",
      difficulty: "Medium",
      fileName: "JS2 ClassNotes.pdf",
      tags: ["javascript"],
    },
    {
      id: 16,
      title: "JavaScript Class Notes 3",
      category: "Web Dev",
      difficulty: "Medium",
      fileName: "JS3 ClassNotes.pdf",
      tags: ["javascript"],
    },
    {
      id: 17,
      title: "JavaScript Class Notes 4",
      category: "Web Dev",
      difficulty: "Medium",
      fileName: "JS4 ClassNotes.pdf",
      tags: ["javascript"],
    },
    {
      id: 18,
      title: "JavaScript Class Notes 5",
      category: "Web Dev",
      difficulty: "Medium",
      fileName: "JS5 ClassNotes (1).pdf",
      tags: ["javascript"],
    },
    {
      id: 19,
      title: "JavaScript Class Notes 6",
      category: "Web Dev",
      difficulty: "Medium",
      fileName: "JS6 ClassNotes.pdf",
      tags: ["javascript"],
    },
    {
      id: 20,
      title: "JavaScript Class Notes 7",
      category: "Web Dev",
      difficulty: "Medium",
      fileName: "JS7 ClassNotes.pdf",
      tags: ["javascript"],
    },
    {
      id: 21,
      title: "JavaScript Class Notes 11",
      category: "Web Dev",
      difficulty: "Medium",
      fileName: "JS11 Class Notes.pdf",
      tags: ["javascript", "advanced"],
    },
    {
      id: 22,
      title: "JavaScript Class Notes 12",
      category: "Web Dev",
      difficulty: "Medium",
      fileName: "JS12 ClassNotes.pdf",
      tags: ["javascript", "advanced"],
    },
    {
      id: 23,
      title: "DBMS Notes",
      category: "DBMS",
      difficulty: "Hard",
      fileName: "DBMS_Notes (2).pdf",
      tags: ["database", "theory"],
    },
    {
      id: 24,
      title: "SQL Notes",
      category: "DBMS",
      difficulty: "Medium",
      fileName: "SQL (notes) (1) (1).pdf",
      tags: ["sql", "queries"],
    },
    {
      id: 25,
      title: "SQL Handwritten Notes",
      category: "DBMS",
      difficulty: "Medium",
      fileName: "SQL Handwritten Notes .pdf",
      tags: ["sql", "handwritten"],
    },
    {
      id: 26,
      title: "SQL Notes by Apna College",
      category: "DBMS",
      difficulty: "Easy",
      fileName: "SQL Notes by Apna College (1) (1).pdf",
      tags: ["sql", "tutorial"],
    },
    {
      id: 27,
      title: "800+ SQL Server Interview Questions",
      category: "DBMS",
      difficulty: "Hard",
      fileName: "800+ SQL Server Interview Questions and Answers .pdf",
      tags: ["sql", "interview"],
    },
    {
      id: 28,
      title: "Operating System Notes",
      category: "OS",
      difficulty: "Hard",
      fileName: "Operating System Notes.pdf",
      tags: ["os", "theory"],
    },
    {
      id: 29,
      title: "Computer Networking Notes",
      category: "Networks",
      difficulty: "Hard",
      fileName: "Computer Networking Notes for Tech Placements (1).pdf",
      tags: ["networking", "tcp-ip"],
    },
    {
      id: 30,
      title: "Object Oriented Programming",
      category: "OOP",
      difficulty: "Medium",
      fileName: "Object Oriented Programming (1) (1).pdf",
      tags: ["oop", "concepts"],
    },
    {
      id: 31,
      title: "OOP Notes",
      category: "OOP",
      difficulty: "Medium",
      fileName: "Object Oriented Programming OOPs - Notes.pdf",
      tags: ["oop", "java"],
    },
    {
      id: 32,
      title: "Python Notes",
      category: "Python",
      difficulty: "Easy",
      fileName: "Python.pdf",
      tags: ["python", "basics"],
    },
    {
      id: 33,
      title: "Comprehensive Python Cheatsheet",
      category: "Python",
      difficulty: "Medium",
      fileName: "Comprehensive Python Cheatsheet.pdf",
      tags: ["python", "cheatsheet"],
    },
    {
      id: 34,
      title: "NumPy Basics to Advanced",
      category: "Python",
      difficulty: "Medium",
      fileName: "NumPy Basics → Advanced PDF.pdf",
      tags: ["numpy", "data-science"],
    },
    {
      id: 35,
      title: "Amazing NumPy Cheat Sheet",
      category: "Python",
      difficulty: "Easy",
      fileName: "Amazing NumPy Cheat Sheet.pdf",
      tags: ["numpy", "cheatsheet"],
    },
    {
      id: 36,
      title: "Deep Learning",
      category: "AI/ML",
      difficulty: "Hard",
      fileName: "Deep Learning .pdf",
      tags: ["deep-learning", "ai"],
    },
    {
      id: 37,
      title: "Computer Vision Q&A",
      category: "AI/ML",
      difficulty: "Hard",
      fileName: "computer-vision-important-questions-answers (1).pdf",
      tags: ["computer-vision", "interview"],
    },
    {
      id: 38,
      title: "Git Notes",
      category: "DevOps",
      difficulty: "Easy",
      fileName: "Git.pdf",
      tags: ["git", "version-control"],
    },
    {
      id: 39,
      title: "Git Cheat Sheet",
      category: "DevOps",
      difficulty: "Easy",
      fileName: "git-cheat-sheet-education.pdf",
      tags: ["git", "cheatsheet"],
    },
    {
      id: 40,
      title: "Kubernetes Interview Q&A",
      category: "DevOps",
      difficulty: "Hard",
      fileName: "Kubernetes Real Time Interview Questions_Answers.pdf",
      tags: ["kubernetes", "interview"],
    },
    {
      id: 41,
      title: "Ready to Deploy N8n",
      category: "DevOps",
      difficulty: "Medium",
      fileName: "Ready to Deploy N8n.pdf",
      tags: ["automation", "n8n"],
    },
    {
      id: 42,
      title: "Agentic Applications: Do's and Don'ts",
      category: "AI/ML",
      difficulty: "Medium",
      fileName: "Agentic Applications_ 12 Do's and Don'ts.pdf",
      tags: ["ai", "agents"],
    },
    {
      id: 43,
      title: "Coding Personalities of Leading LLMs",
      category: "AI/ML",
      difficulty: "Medium",
      fileName: "Full Report_The Coding Personalities of Leading LLMs.pdf",
      tags: ["llm", "research"],
    },
    {
      id: 44,
      title: "Class Notes",
      category: "General",
      difficulty: "Easy",
      fileName: "Class Notes.pdf",
      tags: ["notes", "general"],
    },
    {
      id: 45,
      title: "Calendar Handwritten",
      category: "General",
      difficulty: "Easy",
      fileName: "Calendar Handwritten.pdf",
      tags: ["calendar", "planning"],
    },
    {
      id: 46,
      title: "Lecture Notes",
      category: "General",
      difficulty: "Medium",
      fileName: "lecture-notes (1).pdf",
      tags: ["lecture", "notes"],
    },
    {
      id: 47,
      title: "Infosys Pseudo Code",
      category: "Interview",
      difficulty: "Medium",
      fileName: "infosys pseudo  (1).pdf",
      tags: ["infosys", "pseudo-code"],
    },
    {
      id: 48,
      title: "Remote Supportive Employers",
      category: "Career",
      difficulty: "Easy",
      fileName: "Remote Supportive Employers.pdf",
      tags: ["remote", "jobs"],
    },
    {
      id: 49,
      title: "Document 1",
      category: "General",
      difficulty: "Easy",
      fileName: "1759288292073.pdf",
      tags: ["document"],
    },
    {
      id: 50,
      title: "Document 2",
      category: "General",
      difficulty: "Easy",
      fileName: "1763347294299 (1).pdf",
      tags: ["document"],
    },
  ],
  Y4 = [
    "All",
    "DSA",
    "System Design",
    "Web Dev",
    "DBMS",
    "OS",
    "Networks",
    "OOP",
    "Python",
    "AI/ML",
    "DevOps",
    "Interview",
    "Career",
    "General",
  ],
  X4 = (e) => (e === "All" ? ui : ui.filter((t) => t.category === e)),
  Z4 = (e) => {
    const t = e.toLowerCase();
    return ui.filter(
      (n) =>
        n.title.toLowerCase().includes(t) ||
        n.tags.some((i) => i.includes(t)) ||
        n.category.toLowerCase().includes(t),
    );
  };
function ey() {
  const [e, t] = E.useState("All"),
    [n, i] = E.useState(""),
    r = n ? Z4(n) : X4(e);
  return a.jsxs("div", {
    className: "app-container",
    children: [
      a.jsx(Rr, {}),
      a.jsx(gn, {
        title: "Knowledge Base",
        subtitle: `${ui.length} PDF resources from your PLACEMENT NOTES folder`,
      }),
      a.jsxs("div", {
        className: "notes-layout",
        children: [
          a.jsxs("div", {
            className: "notes-sidebar",
            children: [
              a.jsx("div", {
                style: {
                  marginBottom: 16,
                  padding: "0 8px",
                  fontWeight: 600,
                  fontSize: 11,
                  color: "var(--text-faint)",
                  letterSpacing: "0.05em",
                },
                children: "CATEGORIES",
              }),
              Y4.map((s) =>
                a.jsxs(
                  "button",
                  {
                    className: `category-btn ${e === s ? "active" : ""}`,
                    onClick: () => {
                      (t(s), i(""));
                    },
                    children: [
                      a.jsxs("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        },
                        children: [a.jsx(G3, { size: 14 }), " ", s],
                      }),
                      a.jsx("span", {
                        className: "count-badge",
                        children:
                          s === "All"
                            ? ui.length
                            : ui.filter((o) => o.category === s).length,
                      }),
                    ],
                  },
                  s,
                ),
              ),
            ],
          }),
          a.jsxs("div", {
            className: "notes-content",
            children: [
              a.jsxs("div", {
                className: "dense-card",
                style: {
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: 12,
                },
                children: [
                  a.jsx(xl, { size: 16, color: "var(--text-muted)" }),
                  a.jsx("input", {
                    type: "text",
                    placeholder: "Search by title, category, or tags...",
                    value: n,
                    onChange: (s) => i(s.target.value),
                    style: {
                      border: "none",
                      background: "transparent",
                      width: "100%",
                      fontSize: 14,
                      outline: "none",
                      color: "var(--text-main)",
                    },
                  }),
                ],
              }),
              a.jsxs("div", {
                style: {
                  marginBottom: 20,
                  fontSize: 13,
                  color: "var(--text-muted)",
                },
                children: [
                  "Showing ",
                  a.jsx("strong", { children: r.length }),
                  " ",
                  r.length === 1 ? "resource" : "resources",
                  e !== "All" && ` in ${e}`,
                ],
              }),
              a.jsxs("div", {
                className: "notes-grid",
                children: [
                  r.map((s) =>
                    a.jsxs(
                      "div",
                      {
                        className: "note-card pdf-card",
                        children: [
                          a.jsx("div", {
                            className: "note-header",
                            children: a.jsxs("div", {
                              style: {
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 12,
                              },
                              children: [
                                a.jsx("div", {
                                  style: {
                                    width: 40,
                                    height: 40,
                                    background: "var(--primary-light)",
                                    borderRadius: 8,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--primary)",
                                    flexShrink: 0,
                                  },
                                  children: a.jsx(Co, { size: 20 }),
                                }),
                                a.jsxs("div", {
                                  style: { flexGrow: 1, minWidth: 0 },
                                  children: [
                                    a.jsx("h3", {
                                      style: {
                                        margin: "0 0 4px 0",
                                        fontSize: 15,
                                        lineHeight: 1.3,
                                      },
                                      children: s.title,
                                    }),
                                    a.jsxs("div", {
                                      className: "note-meta",
                                      children: [
                                        a.jsx("span", {
                                          className: "badge badge-blue",
                                          children: s.category,
                                        }),
                                        a.jsx("span", {
                                          className: `badge badge-${s.difficulty === "Hard" ? "orange" : s.difficulty === "Medium" ? "purple" : "green"}`,
                                          children: s.difficulty,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          a.jsx("div", {
                            className: "note-footer",
                            style: { marginTop: 12 },
                            children: s.tags
                              .slice(0, 3)
                              .map((o) =>
                                a.jsxs(
                                  "span",
                                  { className: "tag-pill", children: ["#", o] },
                                  o,
                                ),
                              ),
                          }),
                          a.jsxs("div", {
                            style: { marginTop: 12, display: "flex", gap: 8 },
                            children: [
                              a.jsxs("a", {
                                href: `/PLACEMENT NOTES/${s.fileName}`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "pdf-action-btn",
                                style: { flexGrow: 1 },
                                children: [
                                  a.jsx(En, { size: 14 }),
                                  " Open PDF",
                                ],
                              }),
                              a.jsx("a", {
                                href: `/PLACEMENT NOTES/${s.fileName}`,
                                download: !0,
                                className: "pdf-action-btn secondary",
                                children: a.jsx(Ic, { size: 14 }),
                              }),
                            ],
                          }),
                        ],
                      },
                      s.id,
                    ),
                  ),
                  r.length === 0 &&
                    a.jsx("div", {
                      className: "dense-card",
                      style: {
                        gridColumn: "1/-1",
                        textAlign: "center",
                        padding: 40,
                        color: "var(--text-muted)",
                      },
                      children: "No resources found matching your search.",
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ty(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e)
    .join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " "))
    .trim();
}
const ny = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  iy = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  ry = {};
function bd(e, t) {
  return (ry.jsx ? iy : ny).test(e);
}
const sy = /[ \t\n\f\r]/g;
function oy(e) {
  return typeof e == "object" ? (e.type === "text" ? Ed(e.value) : !1) : Ed(e);
}
function Ed(e) {
  return e.replace(sy, "") === "";
}
class _r {
  constructor(t, n, i) {
    ((this.normal = n), (this.property = t), i && (this.space = i));
  }
}
_r.prototype.normal = {};
_r.prototype.property = {};
_r.prototype.space = void 0;
function A0(e, t) {
  const n = {},
    i = {};
  for (const r of e) (Object.assign(n, r.property), Object.assign(i, r.normal));
  return new _r(n, i, t);
}
function kl(e) {
  return e.toLowerCase();
}
class $e {
  constructor(t, n) {
    ((this.attribute = n), (this.property = t));
  }
}
$e.prototype.attribute = "";
$e.prototype.booleanish = !1;
$e.prototype.boolean = !1;
$e.prototype.commaOrSpaceSeparated = !1;
$e.prototype.commaSeparated = !1;
$e.prototype.defined = !1;
$e.prototype.mustUseProperty = !1;
$e.prototype.number = !1;
$e.prototype.overloadedBoolean = !1;
$e.prototype.property = "";
$e.prototype.spaceSeparated = !1;
$e.prototype.space = void 0;
let ay = 0;
const V = On(),
  ge = On(),
  Sl = On(),
  j = On(),
  te = On(),
  di = On(),
  Qe = On();
function On() {
  return 2 ** ++ay;
}
const Cl = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: V,
        booleanish: ge,
        commaOrSpaceSeparated: Qe,
        commaSeparated: di,
        number: j,
        overloadedBoolean: Sl,
        spaceSeparated: te,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ta = Object.keys(Cl);
class Lc extends $e {
  constructor(t, n, i, r) {
    let s = -1;
    if ((super(t, n), Nd(this, "space", r), typeof i == "number"))
      for (; ++s < ta.length; ) {
        const o = ta[s];
        Nd(this, ta[s], (i & Cl[o]) === Cl[o]);
      }
  }
}
Lc.prototype.defined = !0;
function Nd(e, t, n) {
  n && (e[t] = n);
}
function Ei(e) {
  const t = {},
    n = {};
  for (const [i, r] of Object.entries(e.properties)) {
    const s = new Lc(i, e.transform(e.attributes || {}, i), r, e.space);
    (e.mustUseProperty &&
      e.mustUseProperty.includes(i) &&
      (s.mustUseProperty = !0),
      (t[i] = s),
      (n[kl(i)] = i),
      (n[kl(s.attribute)] = i));
  }
  return new _r(t, n, e.space);
}
const I0 = Ei({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ge,
    ariaAutoComplete: null,
    ariaBusy: ge,
    ariaChecked: ge,
    ariaColCount: j,
    ariaColIndex: j,
    ariaColSpan: j,
    ariaControls: te,
    ariaCurrent: null,
    ariaDescribedBy: te,
    ariaDetails: null,
    ariaDisabled: ge,
    ariaDropEffect: te,
    ariaErrorMessage: null,
    ariaExpanded: ge,
    ariaFlowTo: te,
    ariaGrabbed: ge,
    ariaHasPopup: null,
    ariaHidden: ge,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: te,
    ariaLevel: j,
    ariaLive: null,
    ariaModal: ge,
    ariaMultiLine: ge,
    ariaMultiSelectable: ge,
    ariaOrientation: null,
    ariaOwns: te,
    ariaPlaceholder: null,
    ariaPosInSet: j,
    ariaPressed: ge,
    ariaReadOnly: ge,
    ariaRelevant: null,
    ariaRequired: ge,
    ariaRoleDescription: te,
    ariaRowCount: j,
    ariaRowIndex: j,
    ariaRowSpan: j,
    ariaSelected: ge,
    ariaSetSize: j,
    ariaSort: null,
    ariaValueMax: j,
    ariaValueMin: j,
    ariaValueNow: j,
    ariaValueText: null,
    role: null,
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
});
function D0(e, t) {
  return t in e ? e[t] : t;
}
function L0(e, t) {
  return D0(e, t.toLowerCase());
}
const ly = Ei({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: di,
      acceptCharset: te,
      accessKey: te,
      action: null,
      allow: null,
      allowFullScreen: V,
      allowPaymentRequest: V,
      allowUserMedia: V,
      alt: null,
      as: null,
      async: V,
      autoCapitalize: null,
      autoComplete: te,
      autoFocus: V,
      autoPlay: V,
      blocking: te,
      capture: null,
      charSet: null,
      checked: V,
      cite: null,
      className: te,
      cols: j,
      colSpan: null,
      content: null,
      contentEditable: ge,
      controls: V,
      controlsList: te,
      coords: j | di,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: V,
      defer: V,
      dir: null,
      dirName: null,
      disabled: V,
      download: Sl,
      draggable: ge,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: V,
      formTarget: null,
      headers: te,
      height: j,
      hidden: Sl,
      high: j,
      href: null,
      hrefLang: null,
      htmlFor: te,
      httpEquiv: te,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: V,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: V,
      itemId: null,
      itemProp: te,
      itemRef: te,
      itemScope: V,
      itemType: te,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: V,
      low: j,
      manifest: null,
      max: null,
      maxLength: j,
      media: null,
      method: null,
      min: null,
      minLength: j,
      multiple: V,
      muted: V,
      name: null,
      nonce: null,
      noModule: V,
      noValidate: V,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: V,
      optimum: j,
      pattern: null,
      ping: te,
      placeholder: null,
      playsInline: V,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: V,
      referrerPolicy: null,
      rel: te,
      required: V,
      reversed: V,
      rows: j,
      rowSpan: j,
      sandbox: te,
      scope: null,
      scoped: V,
      seamless: V,
      selected: V,
      shadowRootClonable: V,
      shadowRootDelegatesFocus: V,
      shadowRootMode: null,
      shape: null,
      size: j,
      sizes: null,
      slot: null,
      span: j,
      spellCheck: ge,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: j,
      step: null,
      style: null,
      tabIndex: j,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: V,
      useMap: null,
      value: ge,
      width: j,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: te,
      axis: null,
      background: null,
      bgColor: null,
      border: j,
      borderColor: null,
      bottomMargin: j,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: V,
      declare: V,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: j,
      leftMargin: j,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: j,
      marginWidth: j,
      noResize: V,
      noHref: V,
      noShade: V,
      noWrap: V,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: j,
      rules: null,
      scheme: null,
      scrolling: ge,
      standby: null,
      summary: null,
      text: null,
      topMargin: j,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: j,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: V,
      disableRemotePlayback: V,
      prefix: null,
      property: null,
      results: j,
      security: null,
      unselectable: null,
    },
    space: "html",
    transform: L0,
  }),
  cy = Ei({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    properties: {
      about: Qe,
      accentHeight: j,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: j,
      amplitude: j,
      arabicForm: null,
      ascent: j,
      attributeName: null,
      attributeType: null,
      azimuth: j,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: j,
      by: null,
      calcMode: null,
      capHeight: j,
      className: te,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: j,
      diffuseConstant: j,
      direction: null,
      display: null,
      dur: null,
      divisor: j,
      dominantBaseline: null,
      download: V,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: j,
      enableBackground: null,
      end: null,
      event: null,
      exponent: j,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: j,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: di,
      g2: di,
      glyphName: di,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: j,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: j,
      horizOriginX: j,
      horizOriginY: j,
      id: null,
      ideographic: j,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: j,
      k: j,
      k1: j,
      k2: j,
      k3: j,
      k4: j,
      kernelMatrix: Qe,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: j,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: j,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: j,
      overlineThickness: j,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: j,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: te,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: j,
      pointsAtY: j,
      pointsAtZ: j,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Qe,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Qe,
      rev: Qe,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Qe,
      requiredFeatures: Qe,
      requiredFonts: Qe,
      requiredFormats: Qe,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: j,
      specularExponent: j,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: j,
      strikethroughThickness: j,
      string: null,
      stroke: null,
      strokeDashArray: Qe,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: j,
      strokeOpacity: j,
      strokeWidth: null,
      style: null,
      surfaceScale: j,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Qe,
      tabIndex: j,
      tableValues: null,
      target: null,
      targetX: j,
      targetY: j,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Qe,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: j,
      underlineThickness: j,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: j,
      values: null,
      vAlphabetic: j,
      vMathematical: j,
      vectorEffect: null,
      vHanging: j,
      vIdeographic: j,
      version: null,
      vertAdvY: j,
      vertOriginX: j,
      vertOriginY: j,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: j,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: "svg",
    transform: D0,
  }),
  R0 = Ei({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: "xlink",
    transform(e, t) {
      return "xlink:" + t.slice(5).toLowerCase();
    },
  }),
  _0 = Ei({
    attributes: { xmlnsxlink: "xmlns:xlink" },
    properties: { xmlnsXLink: null, xmlns: null },
    space: "xmlns",
    transform: L0,
  }),
  z0 = Ei({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: "xml",
    transform(e, t) {
      return "xml:" + t.slice(3).toLowerCase();
    },
  }),
  uy = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink",
  },
  dy = /[A-Z]/g,
  Td = /-[a-z]/g,
  py = /^data[-\w.:]+$/i;
function hy(e, t) {
  const n = kl(t);
  let i = t,
    r = $e;
  if (n in e.normal) return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && py.test(t)) {
    if (t.charAt(4) === "-") {
      const s = t.slice(5).replace(Td, my);
      i = "data" + s.charAt(0).toUpperCase() + s.slice(1);
    } else {
      const s = t.slice(4);
      if (!Td.test(s)) {
        let o = s.replace(dy, fy);
        (o.charAt(0) !== "-" && (o = "-" + o), (t = "data" + o));
      }
    }
    r = Lc;
  }
  return new r(i, t);
}
function fy(e) {
  return "-" + e.toLowerCase();
}
function my(e) {
  return e.charAt(1).toUpperCase();
}
const gy = A0([I0, ly, R0, _0, z0], "html"),
  Rc = A0([I0, cy, R0, _0, z0], "svg");
function yy(e) {
  return e.join(" ").trim();
}
var _c = {},
  Pd = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  vy = /\n/g,
  wy = /^\s*/,
  xy = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  ky = /^:\s*/,
  Sy = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  Cy = /^[;\s]*/,
  by = /^\s+|\s+$/g,
  Ey = `
`,
  Md = "/",
  jd = "*",
  kn = "",
  Ny = "comment",
  Ty = "declaration";
function Py(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1,
    i = 1;
  function r(w) {
    var k = w.match(vy);
    k && (n += k.length);
    var S = w.lastIndexOf(Ey);
    i = ~S ? w.length - S : i + w.length;
  }
  function s() {
    var w = { line: n, column: i };
    return function (k) {
      return ((k.position = new o(w)), u(), k);
    };
  }
  function o(w) {
    ((this.start = w),
      (this.end = { line: n, column: i }),
      (this.source = t.source));
  }
  o.prototype.content = e;
  function l(w) {
    var k = new Error(t.source + ":" + n + ":" + i + ": " + w);
    if (
      ((k.reason = w),
      (k.filename = t.source),
      (k.line = n),
      (k.column = i),
      (k.source = e),
      !t.silent)
    )
      throw k;
  }
  function c(w) {
    var k = w.exec(e);
    if (k) {
      var S = k[0];
      return (r(S), (e = e.slice(S.length)), k);
    }
  }
  function u() {
    c(wy);
  }
  function d(w) {
    var k;
    for (w = w || []; (k = p()); ) k !== !1 && w.push(k);
    return w;
  }
  function p() {
    var w = s();
    if (!(Md != e.charAt(0) || jd != e.charAt(1))) {
      for (
        var k = 2;
        kn != e.charAt(k) && (jd != e.charAt(k) || Md != e.charAt(k + 1));
      )
        ++k;
      if (((k += 2), kn === e.charAt(k - 1)))
        return l("End of comment missing");
      var S = e.slice(2, k - 2);
      return (
        (i += 2),
        r(S),
        (e = e.slice(k)),
        (i += 2),
        w({ type: Ny, comment: S })
      );
    }
  }
  function f() {
    var w = s(),
      k = c(xy);
    if (k) {
      if ((p(), !c(ky))) return l("property missing ':'");
      var S = c(Sy),
        y = w({
          type: Ty,
          property: Ad(k[0].replace(Pd, kn)),
          value: S ? Ad(S[0].replace(Pd, kn)) : kn,
        });
      return (c(Cy), y);
    }
  }
  function h() {
    var w = [];
    d(w);
    for (var k; (k = f()); ) k !== !1 && (w.push(k), d(w));
    return w;
  }
  return (u(), h());
}
function Ad(e) {
  return e ? e.replace(by, kn) : kn;
}
var My = Py,
  jy =
    (Ps && Ps.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(_c, "__esModule", { value: !0 });
_c.default = Iy;
const Ay = jy(My);
function Iy(e, t) {
  let n = null;
  if (!e || typeof e != "string") return n;
  const i = (0, Ay.default)(e),
    r = typeof t == "function";
  return (
    i.forEach((s) => {
      if (s.type !== "declaration") return;
      const { property: o, value: l } = s;
      r ? t(o, l, s) : l && ((n = n || {}), (n[o] = l));
    }),
    n
  );
}
var bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
bo.camelCase = void 0;
var Dy = /^--[a-zA-Z0-9_-]+$/,
  Ly = /-([a-z])/g,
  Ry = /^[^-]+$/,
  _y = /^-(webkit|moz|ms|o|khtml)-/,
  zy = /^-(ms)-/,
  Oy = function (e) {
    return !e || Ry.test(e) || Dy.test(e);
  },
  By = function (e, t) {
    return t.toUpperCase();
  },
  Id = function (e, t) {
    return "".concat(t, "-");
  },
  Hy = function (e, t) {
    return (
      t === void 0 && (t = {}),
      Oy(e)
        ? e
        : ((e = e.toLowerCase()),
          t.reactCompat ? (e = e.replace(zy, Id)) : (e = e.replace(_y, Id)),
          e.replace(Ly, By))
    );
  };
bo.camelCase = Hy;
var Fy =
    (Ps && Ps.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    },
  Uy = Fy(_c),
  Wy = bo;
function bl(e, t) {
  var n = {};
  return (
    !e ||
      typeof e != "string" ||
      (0, Uy.default)(e, function (i, r) {
        i && r && (n[(0, Wy.camelCase)(i, t)] = r);
      }),
    n
  );
}
bl.default = bl;
var Vy = bl;
const qy = Il(Vy),
  O0 = B0("end"),
  zc = B0("start");
function B0(e) {
  return t;
  function t(n) {
    const i = (n && n.position && n.position[e]) || {};
    if (
      typeof i.line == "number" &&
      i.line > 0 &&
      typeof i.column == "number" &&
      i.column > 0
    )
      return {
        line: i.line,
        column: i.column,
        offset:
          typeof i.offset == "number" && i.offset > -1 ? i.offset : void 0,
      };
  }
}
function $y(e) {
  const t = zc(e),
    n = O0(e);
  if (t && n) return { start: t, end: n };
}
function tr(e) {
  return !e || typeof e != "object"
    ? ""
    : "position" in e || "type" in e
      ? Dd(e.position)
      : "start" in e || "end" in e
        ? Dd(e)
        : "line" in e || "column" in e
          ? El(e)
          : "";
}
function El(e) {
  return Ld(e && e.line) + ":" + Ld(e && e.column);
}
function Dd(e) {
  return El(e && e.start) + "-" + El(e && e.end);
}
function Ld(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ie extends Error {
  constructor(t, n, i) {
    (super(), typeof n == "string" && ((i = n), (n = void 0)));
    let r = "",
      s = {},
      o = !1;
    if (
      (n &&
        ("line" in n && "column" in n
          ? (s = { place: n })
          : "start" in n && "end" in n
            ? (s = { place: n })
            : "type" in n
              ? (s = { ancestors: [n], place: n.position })
              : (s = { ...n })),
      typeof t == "string"
        ? (r = t)
        : !s.cause && t && ((o = !0), (r = t.message), (s.cause = t)),
      !s.ruleId && !s.source && typeof i == "string")
    ) {
      const c = i.indexOf(":");
      c === -1
        ? (s.ruleId = i)
        : ((s.source = i.slice(0, c)), (s.ruleId = i.slice(c + 1)));
    }
    if (!s.place && s.ancestors && s.ancestors) {
      const c = s.ancestors[s.ancestors.length - 1];
      c && (s.place = c.position);
    }
    const l = s.place && "start" in s.place ? s.place.start : s.place;
    ((this.ancestors = s.ancestors || void 0),
      (this.cause = s.cause || void 0),
      (this.column = l ? l.column : void 0),
      (this.fatal = void 0),
      (this.file = ""),
      (this.message = r),
      (this.line = l ? l.line : void 0),
      (this.name = tr(s.place) || "1:1"),
      (this.place = s.place || void 0),
      (this.reason = this.message),
      (this.ruleId = s.ruleId || void 0),
      (this.source = s.source || void 0),
      (this.stack =
        o && s.cause && typeof s.cause.stack == "string" ? s.cause.stack : ""),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0));
  }
}
Ie.prototype.file = "";
Ie.prototype.name = "";
Ie.prototype.reason = "";
Ie.prototype.message = "";
Ie.prototype.stack = "";
Ie.prototype.column = void 0;
Ie.prototype.line = void 0;
Ie.prototype.ancestors = void 0;
Ie.prototype.cause = void 0;
Ie.prototype.fatal = void 0;
Ie.prototype.place = void 0;
Ie.prototype.ruleId = void 0;
Ie.prototype.source = void 0;
const Oc = {}.hasOwnProperty,
  Gy = new Map(),
  Qy = /[A-Z]/g,
  Ky = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
  Jy = new Set(["td", "th"]),
  H0 = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Yy(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let i;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`",
      );
    i = s5(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    i = r5(n, t.jsx, t.jsxs);
  }
  const r = {
      Fragment: t.Fragment,
      ancestors: [],
      components: t.components || {},
      create: i,
      elementAttributeNameCase: t.elementAttributeNameCase || "react",
      evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
      filePath: n,
      ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
      passKeys: t.passKeys !== !1,
      passNode: t.passNode || !1,
      schema: t.space === "svg" ? Rc : gy,
      stylePropertyNameCase: t.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: t.tableCellAlignToStyle !== !1,
    },
    s = F0(r, e, void 0);
  return s && typeof s != "string"
    ? s
    : r.create(e, r.Fragment, { children: s || void 0 }, void 0);
}
function F0(e, t, n) {
  if (t.type === "element") return Xy(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Zy(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return t5(e, t, n);
  if (t.type === "mdxjsEsm") return e5(e, t);
  if (t.type === "root") return n5(e, t, n);
  if (t.type === "text") return i5(e, t);
}
function Xy(e, t, n) {
  const i = e.schema;
  let r = i;
  (t.tagName.toLowerCase() === "svg" &&
    i.space === "html" &&
    ((r = Rc), (e.schema = r)),
    e.ancestors.push(t));
  const s = W0(e, t.tagName, !1),
    o = o5(e, t);
  let l = Hc(e, t);
  return (
    Ky.has(t.tagName) &&
      (l = l.filter(function (c) {
        return typeof c == "string" ? !oy(c) : !0;
      })),
    U0(e, o, s, t),
    Bc(o, l),
    e.ancestors.pop(),
    (e.schema = i),
    e.create(t, s, o, n)
  );
}
function Zy(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const i = t.data.estree.body[0];
    return (i.type, e.evaluater.evaluateExpression(i.expression));
  }
  Nr(e, t.position);
}
function e5(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return e.evaluater.evaluateProgram(t.data.estree);
  Nr(e, t.position);
}
function t5(e, t, n) {
  const i = e.schema;
  let r = i;
  (t.name === "svg" && i.space === "html" && ((r = Rc), (e.schema = r)),
    e.ancestors.push(t));
  const s = t.name === null ? e.Fragment : W0(e, t.name, !0),
    o = a5(e, t),
    l = Hc(e, t);
  return (
    U0(e, o, s, t),
    Bc(o, l),
    e.ancestors.pop(),
    (e.schema = i),
    e.create(t, s, o, n)
  );
}
function n5(e, t, n) {
  const i = {};
  return (Bc(i, Hc(e, t)), e.create(t, e.Fragment, i, n));
}
function i5(e, t) {
  return t.value;
}
function U0(e, t, n, i) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = i);
}
function Bc(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function r5(e, t, n) {
  return i;
  function i(r, s, o, l) {
    const u = Array.isArray(o.children) ? n : t;
    return l ? u(s, o, l) : u(s, o);
  }
}
function s5(e, t) {
  return n;
  function n(i, r, s, o) {
    const l = Array.isArray(s.children),
      c = zc(i);
    return t(
      r,
      s,
      o,
      l,
      {
        columnNumber: c ? c.column - 1 : void 0,
        fileName: e,
        lineNumber: c ? c.line : void 0,
      },
      void 0,
    );
  }
}
function o5(e, t) {
  const n = {};
  let i, r;
  for (r in t.properties)
    if (r !== "children" && Oc.call(t.properties, r)) {
      const s = l5(e, r, t.properties[r]);
      if (s) {
        const [o, l] = s;
        e.tableCellAlignToStyle &&
        o === "align" &&
        typeof l == "string" &&
        Jy.has(t.tagName)
          ? (i = l)
          : (n[o] = l);
      }
    }
  if (i) {
    const s = n.style || (n.style = {});
    s[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = i;
  }
  return n;
}
function a5(e, t) {
  const n = {};
  for (const i of t.attributes)
    if (i.type === "mdxJsxExpressionAttribute")
      if (i.data && i.data.estree && e.evaluater) {
        const s = i.data.estree.body[0];
        s.type;
        const o = s.expression;
        o.type;
        const l = o.properties[0];
        (l.type, Object.assign(n, e.evaluater.evaluateExpression(l.argument)));
      } else Nr(e, t.position);
    else {
      const r = i.name;
      let s;
      if (i.value && typeof i.value == "object")
        if (i.value.data && i.value.data.estree && e.evaluater) {
          const l = i.value.data.estree.body[0];
          (l.type, (s = e.evaluater.evaluateExpression(l.expression)));
        } else Nr(e, t.position);
      else s = i.value === null ? !0 : i.value;
      n[r] = s;
    }
  return n;
}
function Hc(e, t) {
  const n = [];
  let i = -1;
  const r = e.passKeys ? new Map() : Gy;
  for (; ++i < t.children.length; ) {
    const s = t.children[i];
    let o;
    if (e.passKeys) {
      const c =
        s.type === "element"
          ? s.tagName
          : s.type === "mdxJsxFlowElement" || s.type === "mdxJsxTextElement"
            ? s.name
            : void 0;
      if (c) {
        const u = r.get(c) || 0;
        ((o = c + "-" + u), r.set(c, u + 1));
      }
    }
    const l = F0(e, s, o);
    l !== void 0 && n.push(l);
  }
  return n;
}
function l5(e, t, n) {
  const i = hy(e.schema, t);
  if (!(n == null || (typeof n == "number" && Number.isNaN(n)))) {
    if (
      (Array.isArray(n) && (n = i.commaSeparated ? ty(n) : yy(n)),
      i.property === "style")
    ) {
      let r = typeof n == "object" ? n : c5(e, String(n));
      return (e.stylePropertyNameCase === "css" && (r = u5(r)), ["style", r]);
    }
    return [
      e.elementAttributeNameCase === "react" && i.space
        ? uy[i.property] || i.property
        : i.attribute,
      n,
    ];
  }
}
function c5(e, t) {
  try {
    return qy(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle) return {};
    const i = n,
      r = new Ie("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: i,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime",
      });
    throw (
      (r.file = e.filePath || void 0),
      (r.url = H0 + "#cannot-parse-style-attribute"),
      r
    );
  }
}
function W0(e, t, n) {
  let i;
  if (!n) i = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const r = t.split(".");
    let s = -1,
      o;
    for (; ++s < r.length; ) {
      const l = bd(r[s])
        ? { type: "Identifier", name: r[s] }
        : { type: "Literal", value: r[s] };
      o = o
        ? {
            type: "MemberExpression",
            object: o,
            property: l,
            computed: !!(s && l.type === "Literal"),
            optional: !1,
          }
        : l;
    }
    i = o;
  } else
    i =
      bd(t) && !/^[a-z]/.test(t)
        ? { type: "Identifier", name: t }
        : { type: "Literal", value: t };
  if (i.type === "Literal") {
    const r = i.value;
    return Oc.call(e.components, r) ? e.components[r] : r;
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(i);
  Nr(e);
}
function Nr(e, t) {
  const n = new Ie("Cannot handle MDX estrees without `createEvaluater`", {
    ancestors: e.ancestors,
    place: t,
    ruleId: "mdx-estree",
    source: "hast-util-to-jsx-runtime",
  });
  throw (
    (n.file = e.filePath || void 0),
    (n.url = H0 + "#cannot-handle-mdx-estrees-without-createevaluater"),
    n
  );
}
function u5(e) {
  const t = {};
  let n;
  for (n in e) Oc.call(e, n) && (t[d5(n)] = e[n]);
  return t;
}
function d5(e) {
  let t = e.replace(Qy, p5);
  return (t.slice(0, 3) === "ms-" && (t = "-" + t), t);
}
function p5(e) {
  return "-" + e.toLowerCase();
}
const na = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: [
      "audio",
      "embed",
      "iframe",
      "img",
      "input",
      "script",
      "source",
      "track",
      "video",
    ],
  },
  h5 = {};
function f5(e, t) {
  const n = h5,
    i = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
    r = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return V0(e, i, r);
}
function V0(e, t, n) {
  if (m5(e)) {
    if ("value" in e) return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt) return e.alt;
    if ("children" in e) return Rd(e.children, t, n);
  }
  return Array.isArray(e) ? Rd(e, t, n) : "";
}
function Rd(e, t, n) {
  const i = [];
  let r = -1;
  for (; ++r < e.length; ) i[r] = V0(e[r], t, n);
  return i.join("");
}
function m5(e) {
  return !!(e && typeof e == "object");
}
const _d = document.createElement("i");
function Fc(e) {
  const t = "&" + e + ";";
  _d.innerHTML = t;
  const n = _d.textContent;
  return (n.charCodeAt(n.length - 1) === 59 && e !== "semi") || n === t
    ? !1
    : n;
}
function Tt(e, t, n, i) {
  const r = e.length;
  let s = 0,
    o;
  if (
    (t < 0 ? (t = -t > r ? 0 : r + t) : (t = t > r ? r : t),
    (n = n > 0 ? n : 0),
    i.length < 1e4)
  )
    ((o = Array.from(i)), o.unshift(t, n), e.splice(...o));
  else
    for (n && e.splice(t, n); s < i.length; )
      ((o = i.slice(s, s + 1e4)),
        o.unshift(t, 0),
        e.splice(...o),
        (s += 1e4),
        (t += 1e4));
}
function rt(e, t) {
  return e.length > 0 ? (Tt(e, e.length, 0, t), e) : t;
}
const zd = {}.hasOwnProperty;
function g5(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; ) y5(t, e[n]);
  return t;
}
function y5(e, t) {
  let n;
  for (n in t) {
    const r = (zd.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      s = t[n];
    let o;
    if (s)
      for (o in s) {
        zd.call(r, o) || (r[o] = []);
        const l = s[o];
        v5(r[o], Array.isArray(l) ? l : l ? [l] : []);
      }
  }
}
function v5(e, t) {
  let n = -1;
  const i = [];
  for (; ++n < t.length; ) (t[n].add === "after" ? e : i).push(t[n]);
  Tt(e, 0, 0, i);
}
function q0(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 ||
    n === 11 ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    (n & 65535) === 65535 ||
    (n & 65535) === 65534 ||
    n > 1114111
    ? "�"
    : String.fromCodePoint(n);
}
function pi(e) {
  return e
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase();
}
const Ct = yn(/[A-Za-z]/),
  Ye = yn(/[\dA-Za-z]/),
  w5 = yn(/[#-'*+\--9=?A-Z^-~]/);
function Nl(e) {
  return e !== null && (e < 32 || e === 127);
}
const Tl = yn(/\d/),
  x5 = yn(/[\dA-Fa-f]/),
  k5 = yn(/[!-/:-@[-`{-~]/);
function U(e) {
  return e !== null && e < -2;
}
function qe(e) {
  return e !== null && (e < 0 || e === 32);
}
function J(e) {
  return e === -2 || e === -1 || e === 32;
}
const S5 = yn(new RegExp("\\p{P}|\\p{S}", "u")),
  C5 = yn(/\s/);
function yn(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Ni(e) {
  const t = [];
  let n = -1,
    i = 0,
    r = 0;
  for (; ++n < e.length; ) {
    const s = e.charCodeAt(n);
    let o = "";
    if (s === 37 && Ye(e.charCodeAt(n + 1)) && Ye(e.charCodeAt(n + 2))) r = 2;
    else if (s < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) ||
        (o = String.fromCharCode(s));
    else if (s > 55295 && s < 57344) {
      const l = e.charCodeAt(n + 1);
      s < 56320 && l > 56319 && l < 57344
        ? ((o = String.fromCharCode(s, l)), (r = 1))
        : (o = "�");
    } else o = String.fromCharCode(s);
    (o &&
      (t.push(e.slice(i, n), encodeURIComponent(o)), (i = n + r + 1), (o = "")),
      r && ((n += r), (r = 0)));
  }
  return t.join("") + e.slice(i);
}
function ie(e, t, n, i) {
  const r = i ? i - 1 : Number.POSITIVE_INFINITY;
  let s = 0;
  return o;
  function o(c) {
    return J(c) ? (e.enter(n), l(c)) : t(c);
  }
  function l(c) {
    return J(c) && s++ < r ? (e.consume(c), l) : (e.exit(n), t(c));
  }
}
const b5 = { tokenize: E5 };
function E5(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, i, r);
  let n;
  return t;
  function i(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(l),
      e.exit("lineEnding"),
      ie(e, t, "linePrefix")
    );
  }
  function r(l) {
    return (e.enter("paragraph"), s(l));
  }
  function s(l) {
    const c = e.enter("chunkText", { contentType: "text", previous: n });
    return (n && (n.next = c), (n = c), o(l));
  }
  function o(l) {
    if (l === null) {
      (e.exit("chunkText"), e.exit("paragraph"), e.consume(l));
      return;
    }
    return U(l) ? (e.consume(l), e.exit("chunkText"), s) : (e.consume(l), o);
  }
}
const N5 = { tokenize: T5 },
  Od = { tokenize: P5 };
function T5(e) {
  const t = this,
    n = [];
  let i = 0,
    r,
    s,
    o;
  return l;
  function l(g) {
    if (i < n.length) {
      const C = n[i];
      return ((t.containerState = C[1]), e.attempt(C[0].continuation, c, u)(g));
    }
    return u(g);
  }
  function c(g) {
    if ((i++, t.containerState._closeFlow)) {
      ((t.containerState._closeFlow = void 0), r && m());
      const C = t.events.length;
      let N = C,
        b;
      for (; N--; )
        if (t.events[N][0] === "exit" && t.events[N][1].type === "chunkFlow") {
          b = t.events[N][1].end;
          break;
        }
      y(i);
      let P = C;
      for (; P < t.events.length; ) ((t.events[P][1].end = { ...b }), P++);
      return (
        Tt(t.events, N + 1, 0, t.events.slice(C)),
        (t.events.length = P),
        u(g)
      );
    }
    return l(g);
  }
  function u(g) {
    if (i === n.length) {
      if (!r) return f(g);
      if (r.currentConstruct && r.currentConstruct.concrete) return w(g);
      t.interrupt = !!(r.currentConstruct && !r._gfmTableDynamicInterruptHack);
    }
    return ((t.containerState = {}), e.check(Od, d, p)(g));
  }
  function d(g) {
    return (r && m(), y(i), f(g));
  }
  function p(g) {
    return (
      (t.parser.lazy[t.now().line] = i !== n.length),
      (o = t.now().offset),
      w(g)
    );
  }
  function f(g) {
    return ((t.containerState = {}), e.attempt(Od, h, w)(g));
  }
  function h(g) {
    return (i++, n.push([t.currentConstruct, t.containerState]), f(g));
  }
  function w(g) {
    if (g === null) {
      (r && m(), y(0), e.consume(g));
      return;
    }
    return (
      (r = r || t.parser.flow(t.now())),
      e.enter("chunkFlow", { _tokenizer: r, contentType: "flow", previous: s }),
      k(g)
    );
  }
  function k(g) {
    if (g === null) {
      (S(e.exit("chunkFlow"), !0), y(0), e.consume(g));
      return;
    }
    return U(g)
      ? (e.consume(g),
        S(e.exit("chunkFlow")),
        (i = 0),
        (t.interrupt = void 0),
        l)
      : (e.consume(g), k);
  }
  function S(g, C) {
    const N = t.sliceStream(g);
    if (
      (C && N.push(null),
      (g.previous = s),
      s && (s.next = g),
      (s = g),
      r.defineSkip(g.start),
      r.write(N),
      t.parser.lazy[g.start.line])
    ) {
      let b = r.events.length;
      for (; b--; )
        if (
          r.events[b][1].start.offset < o &&
          (!r.events[b][1].end || r.events[b][1].end.offset > o)
        )
          return;
      const P = t.events.length;
      let D = P,
        F,
        R;
      for (; D--; )
        if (t.events[D][0] === "exit" && t.events[D][1].type === "chunkFlow") {
          if (F) {
            R = t.events[D][1].end;
            break;
          }
          F = !0;
        }
      for (y(i), b = P; b < t.events.length; )
        ((t.events[b][1].end = { ...R }), b++);
      (Tt(t.events, D + 1, 0, t.events.slice(P)), (t.events.length = b));
    }
  }
  function y(g) {
    let C = n.length;
    for (; C-- > g; ) {
      const N = n[C];
      ((t.containerState = N[1]), N[0].exit.call(t, e));
    }
    n.length = g;
  }
  function m() {
    (r.write([null]),
      (s = void 0),
      (r = void 0),
      (t.containerState._closeFlow = void 0));
  }
}
function P5(e, t, n) {
  return ie(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
  );
}
function Bd(e) {
  if (e === null || qe(e) || C5(e)) return 1;
  if (S5(e)) return 2;
}
function Uc(e, t, n) {
  const i = [];
  let r = -1;
  for (; ++r < e.length; ) {
    const s = e[r].resolveAll;
    s && !i.includes(s) && ((t = s(t, n)), i.push(s));
  }
  return t;
}
const Pl = { name: "attention", resolveAll: M5, tokenize: j5 };
function M5(e, t) {
  let n = -1,
    i,
    r,
    s,
    o,
    l,
    c,
    u,
    d;
  for (; ++n < e.length; )
    if (
      e[n][0] === "enter" &&
      e[n][1].type === "attentionSequence" &&
      e[n][1]._close
    ) {
      for (i = n; i--; )
        if (
          e[i][0] === "exit" &&
          e[i][1].type === "attentionSequence" &&
          e[i][1]._open &&
          t.sliceSerialize(e[i][1]).charCodeAt(0) ===
            t.sliceSerialize(e[n][1]).charCodeAt(0)
        ) {
          if (
            (e[i][1]._close || e[n][1]._open) &&
            (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
            !(
              (e[i][1].end.offset -
                e[i][1].start.offset +
                e[n][1].end.offset -
                e[n][1].start.offset) %
              3
            )
          )
            continue;
          c =
            e[i][1].end.offset - e[i][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1;
          const p = { ...e[i][1].end },
            f = { ...e[n][1].start };
          (Hd(p, -c),
            Hd(f, c),
            (o = {
              type: c > 1 ? "strongSequence" : "emphasisSequence",
              start: p,
              end: { ...e[i][1].end },
            }),
            (l = {
              type: c > 1 ? "strongSequence" : "emphasisSequence",
              start: { ...e[n][1].start },
              end: f,
            }),
            (s = {
              type: c > 1 ? "strongText" : "emphasisText",
              start: { ...e[i][1].end },
              end: { ...e[n][1].start },
            }),
            (r = {
              type: c > 1 ? "strong" : "emphasis",
              start: { ...o.start },
              end: { ...l.end },
            }),
            (e[i][1].end = { ...o.start }),
            (e[n][1].start = { ...l.end }),
            (u = []),
            e[i][1].end.offset - e[i][1].start.offset &&
              (u = rt(u, [
                ["enter", e[i][1], t],
                ["exit", e[i][1], t],
              ])),
            (u = rt(u, [
              ["enter", r, t],
              ["enter", o, t],
              ["exit", o, t],
              ["enter", s, t],
            ])),
            (u = rt(
              u,
              Uc(t.parser.constructs.insideSpan.null, e.slice(i + 1, n), t),
            )),
            (u = rt(u, [
              ["exit", s, t],
              ["enter", l, t],
              ["exit", l, t],
              ["exit", r, t],
            ])),
            e[n][1].end.offset - e[n][1].start.offset
              ? ((d = 2),
                (u = rt(u, [
                  ["enter", e[n][1], t],
                  ["exit", e[n][1], t],
                ])))
              : (d = 0),
            Tt(e, i - 1, n - i + 3, u),
            (n = i + u.length - d - 2));
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function j5(e, t) {
  const n = this.parser.constructs.attentionMarkers.null,
    i = this.previous,
    r = Bd(i);
  let s;
  return o;
  function o(c) {
    return ((s = c), e.enter("attentionSequence"), l(c));
  }
  function l(c) {
    if (c === s) return (e.consume(c), l);
    const u = e.exit("attentionSequence"),
      d = Bd(c),
      p = !d || (d === 2 && r) || n.includes(c),
      f = !r || (r === 2 && d) || n.includes(i);
    return (
      (u._open = !!(s === 42 ? p : p && (r || !f))),
      (u._close = !!(s === 42 ? f : f && (d || !p))),
      t(c)
    );
  }
}
function Hd(e, t) {
  ((e.column += t), (e.offset += t), (e._bufferIndex += t));
}
const A5 = { name: "autolink", tokenize: I5 };
function I5(e, t, n) {
  let i = 0;
  return r;
  function r(h) {
    return (
      e.enter("autolink"),
      e.enter("autolinkMarker"),
      e.consume(h),
      e.exit("autolinkMarker"),
      e.enter("autolinkProtocol"),
      s
    );
  }
  function s(h) {
    return Ct(h) ? (e.consume(h), o) : h === 64 ? n(h) : u(h);
  }
  function o(h) {
    return h === 43 || h === 45 || h === 46 || Ye(h) ? ((i = 1), l(h)) : u(h);
  }
  function l(h) {
    return h === 58
      ? (e.consume(h), (i = 0), c)
      : (h === 43 || h === 45 || h === 46 || Ye(h)) && i++ < 32
        ? (e.consume(h), l)
        : ((i = 0), u(h));
  }
  function c(h) {
    return h === 62
      ? (e.exit("autolinkProtocol"),
        e.enter("autolinkMarker"),
        e.consume(h),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        t)
      : h === null || h === 32 || h === 60 || Nl(h)
        ? n(h)
        : (e.consume(h), c);
  }
  function u(h) {
    return h === 64 ? (e.consume(h), d) : w5(h) ? (e.consume(h), u) : n(h);
  }
  function d(h) {
    return Ye(h) ? p(h) : n(h);
  }
  function p(h) {
    return h === 46
      ? (e.consume(h), (i = 0), d)
      : h === 62
        ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
          e.enter("autolinkMarker"),
          e.consume(h),
          e.exit("autolinkMarker"),
          e.exit("autolink"),
          t)
        : f(h);
  }
  function f(h) {
    if ((h === 45 || Ye(h)) && i++ < 63) {
      const w = h === 45 ? f : p;
      return (e.consume(h), w);
    }
    return n(h);
  }
}
const Eo = { partial: !0, tokenize: D5 };
function D5(e, t, n) {
  return i;
  function i(s) {
    return J(s) ? ie(e, r, "linePrefix")(s) : r(s);
  }
  function r(s) {
    return s === null || U(s) ? t(s) : n(s);
  }
}
const $0 = {
  continuation: { tokenize: R5 },
  exit: _5,
  name: "blockQuote",
  tokenize: L5,
};
function L5(e, t, n) {
  const i = this;
  return r;
  function r(o) {
    if (o === 62) {
      const l = i.containerState;
      return (
        l.open || (e.enter("blockQuote", { _container: !0 }), (l.open = !0)),
        e.enter("blockQuotePrefix"),
        e.enter("blockQuoteMarker"),
        e.consume(o),
        e.exit("blockQuoteMarker"),
        s
      );
    }
    return n(o);
  }
  function s(o) {
    return J(o)
      ? (e.enter("blockQuotePrefixWhitespace"),
        e.consume(o),
        e.exit("blockQuotePrefixWhitespace"),
        e.exit("blockQuotePrefix"),
        t)
      : (e.exit("blockQuotePrefix"), t(o));
  }
}
function R5(e, t, n) {
  const i = this;
  return r;
  function r(o) {
    return J(o)
      ? ie(
          e,
          s,
          "linePrefix",
          i.parser.constructs.disable.null.includes("codeIndented")
            ? void 0
            : 4,
        )(o)
      : s(o);
  }
  function s(o) {
    return e.attempt($0, t, n)(o);
  }
}
function _5(e) {
  e.exit("blockQuote");
}
const G0 = { name: "characterEscape", tokenize: z5 };
function z5(e, t, n) {
  return i;
  function i(s) {
    return (
      e.enter("characterEscape"),
      e.enter("escapeMarker"),
      e.consume(s),
      e.exit("escapeMarker"),
      r
    );
  }
  function r(s) {
    return k5(s)
      ? (e.enter("characterEscapeValue"),
        e.consume(s),
        e.exit("characterEscapeValue"),
        e.exit("characterEscape"),
        t)
      : n(s);
  }
}
const Q0 = { name: "characterReference", tokenize: O5 };
function O5(e, t, n) {
  const i = this;
  let r = 0,
    s,
    o;
  return l;
  function l(p) {
    return (
      e.enter("characterReference"),
      e.enter("characterReferenceMarker"),
      e.consume(p),
      e.exit("characterReferenceMarker"),
      c
    );
  }
  function c(p) {
    return p === 35
      ? (e.enter("characterReferenceMarkerNumeric"),
        e.consume(p),
        e.exit("characterReferenceMarkerNumeric"),
        u)
      : (e.enter("characterReferenceValue"), (s = 31), (o = Ye), d(p));
  }
  function u(p) {
    return p === 88 || p === 120
      ? (e.enter("characterReferenceMarkerHexadecimal"),
        e.consume(p),
        e.exit("characterReferenceMarkerHexadecimal"),
        e.enter("characterReferenceValue"),
        (s = 6),
        (o = x5),
        d)
      : (e.enter("characterReferenceValue"), (s = 7), (o = Tl), d(p));
  }
  function d(p) {
    if (p === 59 && r) {
      const f = e.exit("characterReferenceValue");
      return o === Ye && !Fc(i.sliceSerialize(f))
        ? n(p)
        : (e.enter("characterReferenceMarker"),
          e.consume(p),
          e.exit("characterReferenceMarker"),
          e.exit("characterReference"),
          t);
    }
    return o(p) && r++ < s ? (e.consume(p), d) : n(p);
  }
}
const Fd = { partial: !0, tokenize: H5 },
  Ud = { concrete: !0, name: "codeFenced", tokenize: B5 };
function B5(e, t, n) {
  const i = this,
    r = { partial: !0, tokenize: N };
  let s = 0,
    o = 0,
    l;
  return c;
  function c(b) {
    return u(b);
  }
  function u(b) {
    const P = i.events[i.events.length - 1];
    return (
      (s =
        P && P[1].type === "linePrefix"
          ? P[2].sliceSerialize(P[1], !0).length
          : 0),
      (l = b),
      e.enter("codeFenced"),
      e.enter("codeFencedFence"),
      e.enter("codeFencedFenceSequence"),
      d(b)
    );
  }
  function d(b) {
    return b === l
      ? (o++, e.consume(b), d)
      : o < 3
        ? n(b)
        : (e.exit("codeFencedFenceSequence"),
          J(b) ? ie(e, p, "whitespace")(b) : p(b));
  }
  function p(b) {
    return b === null || U(b)
      ? (e.exit("codeFencedFence"), i.interrupt ? t(b) : e.check(Fd, k, C)(b))
      : (e.enter("codeFencedFenceInfo"),
        e.enter("chunkString", { contentType: "string" }),
        f(b));
  }
  function f(b) {
    return b === null || U(b)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), p(b))
      : J(b)
        ? (e.exit("chunkString"),
          e.exit("codeFencedFenceInfo"),
          ie(e, h, "whitespace")(b))
        : b === 96 && b === l
          ? n(b)
          : (e.consume(b), f);
  }
  function h(b) {
    return b === null || U(b)
      ? p(b)
      : (e.enter("codeFencedFenceMeta"),
        e.enter("chunkString", { contentType: "string" }),
        w(b));
  }
  function w(b) {
    return b === null || U(b)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), p(b))
      : b === 96 && b === l
        ? n(b)
        : (e.consume(b), w);
  }
  function k(b) {
    return e.attempt(r, C, S)(b);
  }
  function S(b) {
    return (e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), y);
  }
  function y(b) {
    return s > 0 && J(b) ? ie(e, m, "linePrefix", s + 1)(b) : m(b);
  }
  function m(b) {
    return b === null || U(b)
      ? e.check(Fd, k, C)(b)
      : (e.enter("codeFlowValue"), g(b));
  }
  function g(b) {
    return b === null || U(b)
      ? (e.exit("codeFlowValue"), m(b))
      : (e.consume(b), g);
  }
  function C(b) {
    return (e.exit("codeFenced"), t(b));
  }
  function N(b, P, D) {
    let F = 0;
    return R;
    function R($) {
      return (b.enter("lineEnding"), b.consume($), b.exit("lineEnding"), _);
    }
    function _($) {
      return (
        b.enter("codeFencedFence"),
        J($)
          ? ie(
              b,
              O,
              "linePrefix",
              i.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4,
            )($)
          : O($)
      );
    }
    function O($) {
      return $ === l ? (b.enter("codeFencedFenceSequence"), Y($)) : D($);
    }
    function Y($) {
      return $ === l
        ? (F++, b.consume($), Y)
        : F >= o
          ? (b.exit("codeFencedFenceSequence"),
            J($) ? ie(b, le, "whitespace")($) : le($))
          : D($);
    }
    function le($) {
      return $ === null || U($) ? (b.exit("codeFencedFence"), P($)) : D($);
    }
  }
}
function H5(e, t, n) {
  const i = this;
  return r;
  function r(o) {
    return o === null
      ? n(o)
      : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), s);
  }
  function s(o) {
    return i.parser.lazy[i.now().line] ? n(o) : t(o);
  }
}
const ia = { name: "codeIndented", tokenize: U5 },
  F5 = { partial: !0, tokenize: W5 };
function U5(e, t, n) {
  const i = this;
  return r;
  function r(u) {
    return (e.enter("codeIndented"), ie(e, s, "linePrefix", 5)(u));
  }
  function s(u) {
    const d = i.events[i.events.length - 1];
    return d &&
      d[1].type === "linePrefix" &&
      d[2].sliceSerialize(d[1], !0).length >= 4
      ? o(u)
      : n(u);
  }
  function o(u) {
    return u === null
      ? c(u)
      : U(u)
        ? e.attempt(F5, o, c)(u)
        : (e.enter("codeFlowValue"), l(u));
  }
  function l(u) {
    return u === null || U(u)
      ? (e.exit("codeFlowValue"), o(u))
      : (e.consume(u), l);
  }
  function c(u) {
    return (e.exit("codeIndented"), t(u));
  }
}
function W5(e, t, n) {
  const i = this;
  return r;
  function r(o) {
    return i.parser.lazy[i.now().line]
      ? n(o)
      : U(o)
        ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), r)
        : ie(e, s, "linePrefix", 5)(o);
  }
  function s(o) {
    const l = i.events[i.events.length - 1];
    return l &&
      l[1].type === "linePrefix" &&
      l[2].sliceSerialize(l[1], !0).length >= 4
      ? t(o)
      : U(o)
        ? r(o)
        : n(o);
  }
}
const V5 = { name: "codeText", previous: $5, resolve: q5, tokenize: G5 };
function q5(e) {
  let t = e.length - 4,
    n = 3,
    i,
    r;
  if (
    (e[n][1].type === "lineEnding" || e[n][1].type === "space") &&
    (e[t][1].type === "lineEnding" || e[t][1].type === "space")
  ) {
    for (i = n; ++i < t; )
      if (e[i][1].type === "codeTextData") {
        ((e[n][1].type = "codeTextPadding"),
          (e[t][1].type = "codeTextPadding"),
          (n += 2),
          (t -= 2));
        break;
      }
  }
  for (i = n - 1, t++; ++i <= t; )
    r === void 0
      ? i !== t && e[i][1].type !== "lineEnding" && (r = i)
      : (i === t || e[i][1].type === "lineEnding") &&
        ((e[r][1].type = "codeTextData"),
        i !== r + 2 &&
          ((e[r][1].end = e[i - 1][1].end),
          e.splice(r + 2, i - r - 2),
          (t -= i - r - 2),
          (i = r + 2)),
        (r = void 0));
  return e;
}
function $5(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function G5(e, t, n) {
  let i = 0,
    r,
    s;
  return o;
  function o(p) {
    return (e.enter("codeText"), e.enter("codeTextSequence"), l(p));
  }
  function l(p) {
    return p === 96
      ? (e.consume(p), i++, l)
      : (e.exit("codeTextSequence"), c(p));
  }
  function c(p) {
    return p === null
      ? n(p)
      : p === 32
        ? (e.enter("space"), e.consume(p), e.exit("space"), c)
        : p === 96
          ? ((s = e.enter("codeTextSequence")), (r = 0), d(p))
          : U(p)
            ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c)
            : (e.enter("codeTextData"), u(p));
  }
  function u(p) {
    return p === null || p === 32 || p === 96 || U(p)
      ? (e.exit("codeTextData"), c(p))
      : (e.consume(p), u);
  }
  function d(p) {
    return p === 96
      ? (e.consume(p), r++, d)
      : r === i
        ? (e.exit("codeTextSequence"), e.exit("codeText"), t(p))
        : ((s.type = "codeTextData"), u(p));
  }
}
class Q5 {
  constructor(t) {
    ((this.left = t ? [...t] : []), (this.right = []));
  }
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError(
        "Cannot access index `" +
          t +
          "` in a splice buffer of size `" +
          (this.left.length + this.right.length) +
          "`",
      );
    return t < this.left.length
      ? this.left[t]
      : this.right[this.right.length - t + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return (this.setCursor(0), this.right.pop());
  }
  slice(t, n) {
    const i = n ?? Number.POSITIVE_INFINITY;
    return i < this.left.length
      ? this.left.slice(t, i)
      : t > this.left.length
        ? this.right
            .slice(
              this.right.length - i + this.left.length,
              this.right.length - t + this.left.length,
            )
            .reverse()
        : this.left
            .slice(t)
            .concat(
              this.right
                .slice(this.right.length - i + this.left.length)
                .reverse(),
            );
  }
  splice(t, n, i) {
    const r = n || 0;
    this.setCursor(Math.trunc(t));
    const s = this.right.splice(
      this.right.length - r,
      Number.POSITIVE_INFINITY,
    );
    return (i && zi(this.left, i), s.reverse());
  }
  pop() {
    return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
  }
  push(t) {
    (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t));
  }
  pushMany(t) {
    (this.setCursor(Number.POSITIVE_INFINITY), zi(this.left, t));
  }
  unshift(t) {
    (this.setCursor(0), this.right.push(t));
  }
  unshiftMany(t) {
    (this.setCursor(0), zi(this.right, t.reverse()));
  }
  setCursor(t) {
    if (
      !(
        t === this.left.length ||
        (t > this.left.length && this.right.length === 0) ||
        (t < 0 && this.left.length === 0)
      )
    )
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        zi(this.right, n.reverse());
      } else {
        const n = this.right.splice(
          this.left.length + this.right.length - t,
          Number.POSITIVE_INFINITY,
        );
        zi(this.left, n.reverse());
      }
  }
}
function zi(e, t) {
  let n = 0;
  if (t.length < 1e4) e.push(...t);
  else for (; n < t.length; ) (e.push(...t.slice(n, n + 1e4)), (n += 1e4));
}
function K0(e) {
  const t = {};
  let n = -1,
    i,
    r,
    s,
    o,
    l,
    c,
    u;
  const d = new Q5(e);
  for (; ++n < d.length; ) {
    for (; n in t; ) n = t[n];
    if (
      ((i = d.get(n)),
      n &&
        i[1].type === "chunkFlow" &&
        d.get(n - 1)[1].type === "listItemPrefix" &&
        ((c = i[1]._tokenizer.events),
        (s = 0),
        s < c.length && c[s][1].type === "lineEndingBlank" && (s += 2),
        s < c.length && c[s][1].type === "content"))
    )
      for (; ++s < c.length && c[s][1].type !== "content"; )
        c[s][1].type === "chunkText" &&
          ((c[s][1]._isInFirstContentOfListItem = !0), s++);
    if (i[0] === "enter")
      i[1].contentType && (Object.assign(t, K5(d, n)), (n = t[n]), (u = !0));
    else if (i[1]._container) {
      for (s = n, r = void 0; s--; )
        if (
          ((o = d.get(s)),
          o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
        )
          o[0] === "enter" &&
            (r && (d.get(r)[1].type = "lineEndingBlank"),
            (o[1].type = "lineEnding"),
            (r = s));
        else if (
          !(o[1].type === "linePrefix" || o[1].type === "listItemIndent")
        )
          break;
      r &&
        ((i[1].end = { ...d.get(r)[1].start }),
        (l = d.slice(r, n)),
        l.unshift(i),
        d.splice(r, n - r + 1, l));
    }
  }
  return (Tt(e, 0, Number.POSITIVE_INFINITY, d.slice(0)), !u);
}
function K5(e, t) {
  const n = e.get(t)[1],
    i = e.get(t)[2];
  let r = t - 1;
  const s = [];
  let o = n._tokenizer;
  o ||
    ((o = i.parser[n.contentType](n.start)),
    n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const l = o.events,
    c = [],
    u = {};
  let d,
    p,
    f = -1,
    h = n,
    w = 0,
    k = 0;
  const S = [k];
  for (; h; ) {
    for (; e.get(++r)[1] !== h; );
    (s.push(r),
      h._tokenizer ||
        ((d = i.sliceStream(h)),
        h.next || d.push(null),
        p && o.defineSkip(h.start),
        h._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = !0),
        o.write(d),
        h._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = void 0)),
      (p = h),
      (h = h.next));
  }
  for (h = n; ++f < l.length; )
    l[f][0] === "exit" &&
      l[f - 1][0] === "enter" &&
      l[f][1].type === l[f - 1][1].type &&
      l[f][1].start.line !== l[f][1].end.line &&
      ((k = f + 1),
      S.push(k),
      (h._tokenizer = void 0),
      (h.previous = void 0),
      (h = h.next));
  for (
    o.events = [],
      h ? ((h._tokenizer = void 0), (h.previous = void 0)) : S.pop(),
      f = S.length;
    f--;
  ) {
    const y = l.slice(S[f], S[f + 1]),
      m = s.pop();
    (c.push([m, m + y.length - 1]), e.splice(m, 2, y));
  }
  for (c.reverse(), f = -1; ++f < c.length; )
    ((u[w + c[f][0]] = w + c[f][1]), (w += c[f][1] - c[f][0] - 1));
  return u;
}
const J5 = { resolve: X5, tokenize: Z5 },
  Y5 = { partial: !0, tokenize: e6 };
function X5(e) {
  return (K0(e), e);
}
function Z5(e, t) {
  let n;
  return i;
  function i(l) {
    return (
      e.enter("content"),
      (n = e.enter("chunkContent", { contentType: "content" })),
      r(l)
    );
  }
  function r(l) {
    return l === null ? s(l) : U(l) ? e.check(Y5, o, s)(l) : (e.consume(l), r);
  }
  function s(l) {
    return (e.exit("chunkContent"), e.exit("content"), t(l));
  }
  function o(l) {
    return (
      e.consume(l),
      e.exit("chunkContent"),
      (n.next = e.enter("chunkContent", {
        contentType: "content",
        previous: n,
      })),
      (n = n.next),
      r
    );
  }
}
function e6(e, t, n) {
  const i = this;
  return r;
  function r(o) {
    return (
      e.exit("chunkContent"),
      e.enter("lineEnding"),
      e.consume(o),
      e.exit("lineEnding"),
      ie(e, s, "linePrefix")
    );
  }
  function s(o) {
    if (o === null || U(o)) return n(o);
    const l = i.events[i.events.length - 1];
    return !i.parser.constructs.disable.null.includes("codeIndented") &&
      l &&
      l[1].type === "linePrefix" &&
      l[2].sliceSerialize(l[1], !0).length >= 4
      ? t(o)
      : e.interrupt(i.parser.constructs.flow, n, t)(o);
  }
}
function J0(e, t, n, i, r, s, o, l, c) {
  const u = c || Number.POSITIVE_INFINITY;
  let d = 0;
  return p;
  function p(y) {
    return y === 60
      ? (e.enter(i), e.enter(r), e.enter(s), e.consume(y), e.exit(s), f)
      : y === null || y === 32 || y === 41 || Nl(y)
        ? n(y)
        : (e.enter(i),
          e.enter(o),
          e.enter(l),
          e.enter("chunkString", { contentType: "string" }),
          k(y));
  }
  function f(y) {
    return y === 62
      ? (e.enter(s), e.consume(y), e.exit(s), e.exit(r), e.exit(i), t)
      : (e.enter(l), e.enter("chunkString", { contentType: "string" }), h(y));
  }
  function h(y) {
    return y === 62
      ? (e.exit("chunkString"), e.exit(l), f(y))
      : y === null || y === 60 || U(y)
        ? n(y)
        : (e.consume(y), y === 92 ? w : h);
  }
  function w(y) {
    return y === 60 || y === 62 || y === 92 ? (e.consume(y), h) : h(y);
  }
  function k(y) {
    return !d && (y === null || y === 41 || qe(y))
      ? (e.exit("chunkString"), e.exit(l), e.exit(o), e.exit(i), t(y))
      : d < u && y === 40
        ? (e.consume(y), d++, k)
        : y === 41
          ? (e.consume(y), d--, k)
          : y === null || y === 32 || y === 40 || Nl(y)
            ? n(y)
            : (e.consume(y), y === 92 ? S : k);
  }
  function S(y) {
    return y === 40 || y === 41 || y === 92 ? (e.consume(y), k) : k(y);
  }
}
function Y0(e, t, n, i, r, s) {
  const o = this;
  let l = 0,
    c;
  return u;
  function u(h) {
    return (e.enter(i), e.enter(r), e.consume(h), e.exit(r), e.enter(s), d);
  }
  function d(h) {
    return l > 999 ||
      h === null ||
      h === 91 ||
      (h === 93 && !c) ||
      (h === 94 && !l && "_hiddenFootnoteSupport" in o.parser.constructs)
      ? n(h)
      : h === 93
        ? (e.exit(s), e.enter(r), e.consume(h), e.exit(r), e.exit(i), t)
        : U(h)
          ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), d)
          : (e.enter("chunkString", { contentType: "string" }), p(h));
  }
  function p(h) {
    return h === null || h === 91 || h === 93 || U(h) || l++ > 999
      ? (e.exit("chunkString"), d(h))
      : (e.consume(h), c || (c = !J(h)), h === 92 ? f : p);
  }
  function f(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), l++, p) : p(h);
  }
}
function X0(e, t, n, i, r, s) {
  let o;
  return l;
  function l(f) {
    return f === 34 || f === 39 || f === 40
      ? (e.enter(i),
        e.enter(r),
        e.consume(f),
        e.exit(r),
        (o = f === 40 ? 41 : f),
        c)
      : n(f);
  }
  function c(f) {
    return f === o
      ? (e.enter(r), e.consume(f), e.exit(r), e.exit(i), t)
      : (e.enter(s), u(f));
  }
  function u(f) {
    return f === o
      ? (e.exit(s), c(o))
      : f === null
        ? n(f)
        : U(f)
          ? (e.enter("lineEnding"),
            e.consume(f),
            e.exit("lineEnding"),
            ie(e, u, "linePrefix"))
          : (e.enter("chunkString", { contentType: "string" }), d(f));
  }
  function d(f) {
    return f === o || f === null || U(f)
      ? (e.exit("chunkString"), u(f))
      : (e.consume(f), f === 92 ? p : d);
  }
  function p(f) {
    return f === o || f === 92 ? (e.consume(f), d) : d(f);
  }
}
function nr(e, t) {
  let n;
  return i;
  function i(r) {
    return U(r)
      ? (e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), (n = !0), i)
      : J(r)
        ? ie(e, i, n ? "linePrefix" : "lineSuffix")(r)
        : t(r);
  }
}
const t6 = { name: "definition", tokenize: i6 },
  n6 = { partial: !0, tokenize: r6 };
function i6(e, t, n) {
  const i = this;
  let r;
  return s;
  function s(h) {
    return (e.enter("definition"), o(h));
  }
  function o(h) {
    return Y0.call(
      i,
      e,
      l,
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString",
    )(h);
  }
  function l(h) {
    return (
      (r = pi(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1))),
      h === 58
        ? (e.enter("definitionMarker"),
          e.consume(h),
          e.exit("definitionMarker"),
          c)
        : n(h)
    );
  }
  function c(h) {
    return qe(h) ? nr(e, u)(h) : u(h);
  }
  function u(h) {
    return J0(
      e,
      d,
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString",
    )(h);
  }
  function d(h) {
    return e.attempt(n6, p, p)(h);
  }
  function p(h) {
    return J(h) ? ie(e, f, "whitespace")(h) : f(h);
  }
  function f(h) {
    return h === null || U(h)
      ? (e.exit("definition"), i.parser.defined.push(r), t(h))
      : n(h);
  }
}
function r6(e, t, n) {
  return i;
  function i(l) {
    return qe(l) ? nr(e, r)(l) : n(l);
  }
  function r(l) {
    return X0(
      e,
      s,
      n,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString",
    )(l);
  }
  function s(l) {
    return J(l) ? ie(e, o, "whitespace")(l) : o(l);
  }
  function o(l) {
    return l === null || U(l) ? t(l) : n(l);
  }
}
const s6 = { name: "hardBreakEscape", tokenize: o6 };
function o6(e, t, n) {
  return i;
  function i(s) {
    return (e.enter("hardBreakEscape"), e.consume(s), r);
  }
  function r(s) {
    return U(s) ? (e.exit("hardBreakEscape"), t(s)) : n(s);
  }
}
const a6 = { name: "headingAtx", resolve: l6, tokenize: c6 };
function l6(e, t) {
  let n = e.length - 2,
    i = 3,
    r,
    s;
  return (
    e[i][1].type === "whitespace" && (i += 2),
    n - 2 > i && e[n][1].type === "whitespace" && (n -= 2),
    e[n][1].type === "atxHeadingSequence" &&
      (i === n - 1 || (n - 4 > i && e[n - 2][1].type === "whitespace")) &&
      (n -= i + 1 === n ? 2 : 4),
    n > i &&
      ((r = { type: "atxHeadingText", start: e[i][1].start, end: e[n][1].end }),
      (s = {
        type: "chunkText",
        start: e[i][1].start,
        end: e[n][1].end,
        contentType: "text",
      }),
      Tt(e, i, n - i + 1, [
        ["enter", r, t],
        ["enter", s, t],
        ["exit", s, t],
        ["exit", r, t],
      ])),
    e
  );
}
function c6(e, t, n) {
  let i = 0;
  return r;
  function r(d) {
    return (e.enter("atxHeading"), s(d));
  }
  function s(d) {
    return (e.enter("atxHeadingSequence"), o(d));
  }
  function o(d) {
    return d === 35 && i++ < 6
      ? (e.consume(d), o)
      : d === null || qe(d)
        ? (e.exit("atxHeadingSequence"), l(d))
        : n(d);
  }
  function l(d) {
    return d === 35
      ? (e.enter("atxHeadingSequence"), c(d))
      : d === null || U(d)
        ? (e.exit("atxHeading"), t(d))
        : J(d)
          ? ie(e, l, "whitespace")(d)
          : (e.enter("atxHeadingText"), u(d));
  }
  function c(d) {
    return d === 35 ? (e.consume(d), c) : (e.exit("atxHeadingSequence"), l(d));
  }
  function u(d) {
    return d === null || d === 35 || qe(d)
      ? (e.exit("atxHeadingText"), l(d))
      : (e.consume(d), u);
  }
}
const u6 = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  Wd = ["pre", "script", "style", "textarea"],
  d6 = { concrete: !0, name: "htmlFlow", resolveTo: f6, tokenize: m6 },
  p6 = { partial: !0, tokenize: y6 },
  h6 = { partial: !0, tokenize: g6 };
function f6(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); );
  return (
    t > 1 &&
      e[t - 2][1].type === "linePrefix" &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  );
}
function m6(e, t, n) {
  const i = this;
  let r, s, o, l, c;
  return u;
  function u(x) {
    return d(x);
  }
  function d(x) {
    return (e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(x), p);
  }
  function p(x) {
    return x === 33
      ? (e.consume(x), f)
      : x === 47
        ? (e.consume(x), (s = !0), k)
        : x === 63
          ? (e.consume(x), (r = 3), i.interrupt ? t : v)
          : Ct(x)
            ? (e.consume(x), (o = String.fromCharCode(x)), S)
            : n(x);
  }
  function f(x) {
    return x === 45
      ? (e.consume(x), (r = 2), h)
      : x === 91
        ? (e.consume(x), (r = 5), (l = 0), w)
        : Ct(x)
          ? (e.consume(x), (r = 4), i.interrupt ? t : v)
          : n(x);
  }
  function h(x) {
    return x === 45 ? (e.consume(x), i.interrupt ? t : v) : n(x);
  }
  function w(x) {
    const we = "CDATA[";
    return x === we.charCodeAt(l++)
      ? (e.consume(x), l === we.length ? (i.interrupt ? t : O) : w)
      : n(x);
  }
  function k(x) {
    return Ct(x) ? (e.consume(x), (o = String.fromCharCode(x)), S) : n(x);
  }
  function S(x) {
    if (x === null || x === 47 || x === 62 || qe(x)) {
      const we = x === 47,
        ct = o.toLowerCase();
      return !we && !s && Wd.includes(ct)
        ? ((r = 1), i.interrupt ? t(x) : O(x))
        : u6.includes(o.toLowerCase())
          ? ((r = 6), we ? (e.consume(x), y) : i.interrupt ? t(x) : O(x))
          : ((r = 7),
            i.interrupt && !i.parser.lazy[i.now().line]
              ? n(x)
              : s
                ? m(x)
                : g(x));
    }
    return x === 45 || Ye(x)
      ? (e.consume(x), (o += String.fromCharCode(x)), S)
      : n(x);
  }
  function y(x) {
    return x === 62 ? (e.consume(x), i.interrupt ? t : O) : n(x);
  }
  function m(x) {
    return J(x) ? (e.consume(x), m) : R(x);
  }
  function g(x) {
    return x === 47
      ? (e.consume(x), R)
      : x === 58 || x === 95 || Ct(x)
        ? (e.consume(x), C)
        : J(x)
          ? (e.consume(x), g)
          : R(x);
  }
  function C(x) {
    return x === 45 || x === 46 || x === 58 || x === 95 || Ye(x)
      ? (e.consume(x), C)
      : N(x);
  }
  function N(x) {
    return x === 61 ? (e.consume(x), b) : J(x) ? (e.consume(x), N) : g(x);
  }
  function b(x) {
    return x === null || x === 60 || x === 61 || x === 62 || x === 96
      ? n(x)
      : x === 34 || x === 39
        ? (e.consume(x), (c = x), P)
        : J(x)
          ? (e.consume(x), b)
          : D(x);
  }
  function P(x) {
    return x === c
      ? (e.consume(x), (c = null), F)
      : x === null || U(x)
        ? n(x)
        : (e.consume(x), P);
  }
  function D(x) {
    return x === null ||
      x === 34 ||
      x === 39 ||
      x === 47 ||
      x === 60 ||
      x === 61 ||
      x === 62 ||
      x === 96 ||
      qe(x)
      ? N(x)
      : (e.consume(x), D);
  }
  function F(x) {
    return x === 47 || x === 62 || J(x) ? g(x) : n(x);
  }
  function R(x) {
    return x === 62 ? (e.consume(x), _) : n(x);
  }
  function _(x) {
    return x === null || U(x) ? O(x) : J(x) ? (e.consume(x), _) : n(x);
  }
  function O(x) {
    return x === 45 && r === 2
      ? (e.consume(x), me)
      : x === 60 && r === 1
        ? (e.consume(x), he)
        : x === 62 && r === 4
          ? (e.consume(x), Q)
          : x === 63 && r === 3
            ? (e.consume(x), v)
            : x === 93 && r === 5
              ? (e.consume(x), H)
              : U(x) && (r === 6 || r === 7)
                ? (e.exit("htmlFlowData"), e.check(p6, Z, Y)(x))
                : x === null || U(x)
                  ? (e.exit("htmlFlowData"), Y(x))
                  : (e.consume(x), O);
  }
  function Y(x) {
    return e.check(h6, le, Z)(x);
  }
  function le(x) {
    return (e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), $);
  }
  function $(x) {
    return x === null || U(x) ? Y(x) : (e.enter("htmlFlowData"), O(x));
  }
  function me(x) {
    return x === 45 ? (e.consume(x), v) : O(x);
  }
  function he(x) {
    return x === 47 ? (e.consume(x), (o = ""), I) : O(x);
  }
  function I(x) {
    if (x === 62) {
      const we = o.toLowerCase();
      return Wd.includes(we) ? (e.consume(x), Q) : O(x);
    }
    return Ct(x) && o.length < 8
      ? (e.consume(x), (o += String.fromCharCode(x)), I)
      : O(x);
  }
  function H(x) {
    return x === 93 ? (e.consume(x), v) : O(x);
  }
  function v(x) {
    return x === 62
      ? (e.consume(x), Q)
      : x === 45 && r === 2
        ? (e.consume(x), v)
        : O(x);
  }
  function Q(x) {
    return x === null || U(x)
      ? (e.exit("htmlFlowData"), Z(x))
      : (e.consume(x), Q);
  }
  function Z(x) {
    return (e.exit("htmlFlow"), t(x));
  }
}
function g6(e, t, n) {
  const i = this;
  return r;
  function r(o) {
    return U(o)
      ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), s)
      : n(o);
  }
  function s(o) {
    return i.parser.lazy[i.now().line] ? n(o) : t(o);
  }
}
function y6(e, t, n) {
  return i;
  function i(r) {
    return (
      e.enter("lineEnding"),
      e.consume(r),
      e.exit("lineEnding"),
      e.attempt(Eo, t, n)
    );
  }
}
const v6 = { name: "htmlText", tokenize: w6 };
function w6(e, t, n) {
  const i = this;
  let r, s, o;
  return l;
  function l(v) {
    return (e.enter("htmlText"), e.enter("htmlTextData"), e.consume(v), c);
  }
  function c(v) {
    return v === 33
      ? (e.consume(v), u)
      : v === 47
        ? (e.consume(v), N)
        : v === 63
          ? (e.consume(v), g)
          : Ct(v)
            ? (e.consume(v), D)
            : n(v);
  }
  function u(v) {
    return v === 45
      ? (e.consume(v), d)
      : v === 91
        ? (e.consume(v), (s = 0), w)
        : Ct(v)
          ? (e.consume(v), m)
          : n(v);
  }
  function d(v) {
    return v === 45 ? (e.consume(v), h) : n(v);
  }
  function p(v) {
    return v === null
      ? n(v)
      : v === 45
        ? (e.consume(v), f)
        : U(v)
          ? ((o = p), he(v))
          : (e.consume(v), p);
  }
  function f(v) {
    return v === 45 ? (e.consume(v), h) : p(v);
  }
  function h(v) {
    return v === 62 ? me(v) : v === 45 ? f(v) : p(v);
  }
  function w(v) {
    const Q = "CDATA[";
    return v === Q.charCodeAt(s++)
      ? (e.consume(v), s === Q.length ? k : w)
      : n(v);
  }
  function k(v) {
    return v === null
      ? n(v)
      : v === 93
        ? (e.consume(v), S)
        : U(v)
          ? ((o = k), he(v))
          : (e.consume(v), k);
  }
  function S(v) {
    return v === 93 ? (e.consume(v), y) : k(v);
  }
  function y(v) {
    return v === 62 ? me(v) : v === 93 ? (e.consume(v), y) : k(v);
  }
  function m(v) {
    return v === null || v === 62
      ? me(v)
      : U(v)
        ? ((o = m), he(v))
        : (e.consume(v), m);
  }
  function g(v) {
    return v === null
      ? n(v)
      : v === 63
        ? (e.consume(v), C)
        : U(v)
          ? ((o = g), he(v))
          : (e.consume(v), g);
  }
  function C(v) {
    return v === 62 ? me(v) : g(v);
  }
  function N(v) {
    return Ct(v) ? (e.consume(v), b) : n(v);
  }
  function b(v) {
    return v === 45 || Ye(v) ? (e.consume(v), b) : P(v);
  }
  function P(v) {
    return U(v) ? ((o = P), he(v)) : J(v) ? (e.consume(v), P) : me(v);
  }
  function D(v) {
    return v === 45 || Ye(v)
      ? (e.consume(v), D)
      : v === 47 || v === 62 || qe(v)
        ? F(v)
        : n(v);
  }
  function F(v) {
    return v === 47
      ? (e.consume(v), me)
      : v === 58 || v === 95 || Ct(v)
        ? (e.consume(v), R)
        : U(v)
          ? ((o = F), he(v))
          : J(v)
            ? (e.consume(v), F)
            : me(v);
  }
  function R(v) {
    return v === 45 || v === 46 || v === 58 || v === 95 || Ye(v)
      ? (e.consume(v), R)
      : _(v);
  }
  function _(v) {
    return v === 61
      ? (e.consume(v), O)
      : U(v)
        ? ((o = _), he(v))
        : J(v)
          ? (e.consume(v), _)
          : F(v);
  }
  function O(v) {
    return v === null || v === 60 || v === 61 || v === 62 || v === 96
      ? n(v)
      : v === 34 || v === 39
        ? (e.consume(v), (r = v), Y)
        : U(v)
          ? ((o = O), he(v))
          : J(v)
            ? (e.consume(v), O)
            : (e.consume(v), le);
  }
  function Y(v) {
    return v === r
      ? (e.consume(v), (r = void 0), $)
      : v === null
        ? n(v)
        : U(v)
          ? ((o = Y), he(v))
          : (e.consume(v), Y);
  }
  function le(v) {
    return v === null ||
      v === 34 ||
      v === 39 ||
      v === 60 ||
      v === 61 ||
      v === 96
      ? n(v)
      : v === 47 || v === 62 || qe(v)
        ? F(v)
        : (e.consume(v), le);
  }
  function $(v) {
    return v === 47 || v === 62 || qe(v) ? F(v) : n(v);
  }
  function me(v) {
    return v === 62
      ? (e.consume(v), e.exit("htmlTextData"), e.exit("htmlText"), t)
      : n(v);
  }
  function he(v) {
    return (
      e.exit("htmlTextData"),
      e.enter("lineEnding"),
      e.consume(v),
      e.exit("lineEnding"),
      I
    );
  }
  function I(v) {
    return J(v)
      ? ie(
          e,
          H,
          "linePrefix",
          i.parser.constructs.disable.null.includes("codeIndented")
            ? void 0
            : 4,
        )(v)
      : H(v);
  }
  function H(v) {
    return (e.enter("htmlTextData"), o(v));
  }
}
const Wc = { name: "labelEnd", resolveAll: C6, resolveTo: b6, tokenize: E6 },
  x6 = { tokenize: N6 },
  k6 = { tokenize: T6 },
  S6 = { tokenize: P6 };
function C6(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const i = e[t][1];
    if (
      (n.push(e[t]),
      i.type === "labelImage" ||
        i.type === "labelLink" ||
        i.type === "labelEnd")
    ) {
      const r = i.type === "labelImage" ? 4 : 2;
      ((i.type = "data"), (t += r));
    }
  }
  return (e.length !== n.length && Tt(e, 0, e.length, n), e);
}
function b6(e, t) {
  let n = e.length,
    i = 0,
    r,
    s,
    o,
    l;
  for (; n--; )
    if (((r = e[n][1]), s)) {
      if (r.type === "link" || (r.type === "labelLink" && r._inactive)) break;
      e[n][0] === "enter" && r.type === "labelLink" && (r._inactive = !0);
    } else if (o) {
      if (
        e[n][0] === "enter" &&
        (r.type === "labelImage" || r.type === "labelLink") &&
        !r._balanced &&
        ((s = n), r.type !== "labelLink")
      ) {
        i = 2;
        break;
      }
    } else r.type === "labelEnd" && (o = n);
  const c = {
      type: e[s][1].type === "labelLink" ? "link" : "image",
      start: { ...e[s][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    u = { type: "label", start: { ...e[s][1].start }, end: { ...e[o][1].end } },
    d = {
      type: "labelText",
      start: { ...e[s + i + 2][1].end },
      end: { ...e[o - 2][1].start },
    };
  return (
    (l = [
      ["enter", c, t],
      ["enter", u, t],
    ]),
    (l = rt(l, e.slice(s + 1, s + i + 3))),
    (l = rt(l, [["enter", d, t]])),
    (l = rt(
      l,
      Uc(t.parser.constructs.insideSpan.null, e.slice(s + i + 4, o - 3), t),
    )),
    (l = rt(l, [["exit", d, t], e[o - 2], e[o - 1], ["exit", u, t]])),
    (l = rt(l, e.slice(o + 1))),
    (l = rt(l, [["exit", c, t]])),
    Tt(e, s, e.length, l),
    e
  );
}
function E6(e, t, n) {
  const i = this;
  let r = i.events.length,
    s,
    o;
  for (; r--; )
    if (
      (i.events[r][1].type === "labelImage" ||
        i.events[r][1].type === "labelLink") &&
      !i.events[r][1]._balanced
    ) {
      s = i.events[r][1];
      break;
    }
  return l;
  function l(f) {
    return s
      ? s._inactive
        ? p(f)
        : ((o = i.parser.defined.includes(
            pi(i.sliceSerialize({ start: s.end, end: i.now() })),
          )),
          e.enter("labelEnd"),
          e.enter("labelMarker"),
          e.consume(f),
          e.exit("labelMarker"),
          e.exit("labelEnd"),
          c)
      : n(f);
  }
  function c(f) {
    return f === 40
      ? e.attempt(x6, d, o ? d : p)(f)
      : f === 91
        ? e.attempt(k6, d, o ? u : p)(f)
        : o
          ? d(f)
          : p(f);
  }
  function u(f) {
    return e.attempt(S6, d, p)(f);
  }
  function d(f) {
    return t(f);
  }
  function p(f) {
    return ((s._balanced = !0), n(f));
  }
}
function N6(e, t, n) {
  return i;
  function i(p) {
    return (
      e.enter("resource"),
      e.enter("resourceMarker"),
      e.consume(p),
      e.exit("resourceMarker"),
      r
    );
  }
  function r(p) {
    return qe(p) ? nr(e, s)(p) : s(p);
  }
  function s(p) {
    return p === 41
      ? d(p)
      : J0(
          e,
          o,
          l,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          32,
        )(p);
  }
  function o(p) {
    return qe(p) ? nr(e, c)(p) : d(p);
  }
  function l(p) {
    return n(p);
  }
  function c(p) {
    return p === 34 || p === 39 || p === 40
      ? X0(
          e,
          u,
          n,
          "resourceTitle",
          "resourceTitleMarker",
          "resourceTitleString",
        )(p)
      : d(p);
  }
  function u(p) {
    return qe(p) ? nr(e, d)(p) : d(p);
  }
  function d(p) {
    return p === 41
      ? (e.enter("resourceMarker"),
        e.consume(p),
        e.exit("resourceMarker"),
        e.exit("resource"),
        t)
      : n(p);
  }
}
function T6(e, t, n) {
  const i = this;
  return r;
  function r(l) {
    return Y0.call(
      i,
      e,
      s,
      o,
      "reference",
      "referenceMarker",
      "referenceString",
    )(l);
  }
  function s(l) {
    return i.parser.defined.includes(
      pi(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)),
    )
      ? t(l)
      : n(l);
  }
  function o(l) {
    return n(l);
  }
}
function P6(e, t, n) {
  return i;
  function i(s) {
    return (
      e.enter("reference"),
      e.enter("referenceMarker"),
      e.consume(s),
      e.exit("referenceMarker"),
      r
    );
  }
  function r(s) {
    return s === 93
      ? (e.enter("referenceMarker"),
        e.consume(s),
        e.exit("referenceMarker"),
        e.exit("reference"),
        t)
      : n(s);
  }
}
const M6 = { name: "labelStartImage", resolveAll: Wc.resolveAll, tokenize: j6 };
function j6(e, t, n) {
  const i = this;
  return r;
  function r(l) {
    return (
      e.enter("labelImage"),
      e.enter("labelImageMarker"),
      e.consume(l),
      e.exit("labelImageMarker"),
      s
    );
  }
  function s(l) {
    return l === 91
      ? (e.enter("labelMarker"),
        e.consume(l),
        e.exit("labelMarker"),
        e.exit("labelImage"),
        o)
      : n(l);
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in i.parser.constructs
      ? n(l)
      : t(l);
  }
}
const A6 = { name: "labelStartLink", resolveAll: Wc.resolveAll, tokenize: I6 };
function I6(e, t, n) {
  const i = this;
  return r;
  function r(o) {
    return (
      e.enter("labelLink"),
      e.enter("labelMarker"),
      e.consume(o),
      e.exit("labelMarker"),
      e.exit("labelLink"),
      s
    );
  }
  function s(o) {
    return o === 94 && "_hiddenFootnoteSupport" in i.parser.constructs
      ? n(o)
      : t(o);
  }
}
const ra = { name: "lineEnding", tokenize: D6 };
function D6(e, t) {
  return n;
  function n(i) {
    return (
      e.enter("lineEnding"),
      e.consume(i),
      e.exit("lineEnding"),
      ie(e, t, "linePrefix")
    );
  }
}
const Es = { name: "thematicBreak", tokenize: L6 };
function L6(e, t, n) {
  let i = 0,
    r;
  return s;
  function s(u) {
    return (e.enter("thematicBreak"), o(u));
  }
  function o(u) {
    return ((r = u), l(u));
  }
  function l(u) {
    return u === r
      ? (e.enter("thematicBreakSequence"), c(u))
      : i >= 3 && (u === null || U(u))
        ? (e.exit("thematicBreak"), t(u))
        : n(u);
  }
  function c(u) {
    return u === r
      ? (e.consume(u), i++, c)
      : (e.exit("thematicBreakSequence"),
        J(u) ? ie(e, l, "whitespace")(u) : l(u));
  }
}
const Oe = {
    continuation: { tokenize: O6 },
    exit: H6,
    name: "list",
    tokenize: z6,
  },
  R6 = { partial: !0, tokenize: F6 },
  _6 = { partial: !0, tokenize: B6 };
function z6(e, t, n) {
  const i = this,
    r = i.events[i.events.length - 1];
  let s =
      r && r[1].type === "linePrefix"
        ? r[2].sliceSerialize(r[1], !0).length
        : 0,
    o = 0;
  return l;
  function l(h) {
    const w =
      i.containerState.type ||
      (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (
      w === "listUnordered"
        ? !i.containerState.marker || h === i.containerState.marker
        : Tl(h)
    ) {
      if (
        (i.containerState.type ||
          ((i.containerState.type = w), e.enter(w, { _container: !0 })),
        w === "listUnordered")
      )
        return (
          e.enter("listItemPrefix"),
          h === 42 || h === 45 ? e.check(Es, n, u)(h) : u(h)
        );
      if (!i.interrupt || h === 49)
        return (e.enter("listItemPrefix"), e.enter("listItemValue"), c(h));
    }
    return n(h);
  }
  function c(h) {
    return Tl(h) && ++o < 10
      ? (e.consume(h), c)
      : (!i.interrupt || o < 2) &&
          (i.containerState.marker
            ? h === i.containerState.marker
            : h === 41 || h === 46)
        ? (e.exit("listItemValue"), u(h))
        : n(h);
  }
  function u(h) {
    return (
      e.enter("listItemMarker"),
      e.consume(h),
      e.exit("listItemMarker"),
      (i.containerState.marker = i.containerState.marker || h),
      e.check(Eo, i.interrupt ? n : d, e.attempt(R6, f, p))
    );
  }
  function d(h) {
    return ((i.containerState.initialBlankLine = !0), s++, f(h));
  }
  function p(h) {
    return J(h)
      ? (e.enter("listItemPrefixWhitespace"),
        e.consume(h),
        e.exit("listItemPrefixWhitespace"),
        f)
      : n(h);
  }
  function f(h) {
    return (
      (i.containerState.size =
        s + i.sliceSerialize(e.exit("listItemPrefix"), !0).length),
      t(h)
    );
  }
}
function O6(e, t, n) {
  const i = this;
  return ((i.containerState._closeFlow = void 0), e.check(Eo, r, s));
  function r(l) {
    return (
      (i.containerState.furtherBlankLines =
        i.containerState.furtherBlankLines ||
        i.containerState.initialBlankLine),
      ie(e, t, "listItemIndent", i.containerState.size + 1)(l)
    );
  }
  function s(l) {
    return i.containerState.furtherBlankLines || !J(l)
      ? ((i.containerState.furtherBlankLines = void 0),
        (i.containerState.initialBlankLine = void 0),
        o(l))
      : ((i.containerState.furtherBlankLines = void 0),
        (i.containerState.initialBlankLine = void 0),
        e.attempt(_6, t, o)(l));
  }
  function o(l) {
    return (
      (i.containerState._closeFlow = !0),
      (i.interrupt = void 0),
      ie(
        e,
        e.attempt(Oe, t, n),
        "linePrefix",
        i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4,
      )(l)
    );
  }
}
function B6(e, t, n) {
  const i = this;
  return ie(e, r, "listItemIndent", i.containerState.size + 1);
  function r(s) {
    const o = i.events[i.events.length - 1];
    return o &&
      o[1].type === "listItemIndent" &&
      o[2].sliceSerialize(o[1], !0).length === i.containerState.size
      ? t(s)
      : n(s);
  }
}
function H6(e) {
  e.exit(this.containerState.type);
}
function F6(e, t, n) {
  const i = this;
  return ie(
    e,
    r,
    "listItemPrefixWhitespace",
    i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5,
  );
  function r(s) {
    const o = i.events[i.events.length - 1];
    return !J(s) && o && o[1].type === "listItemPrefixWhitespace" ? t(s) : n(s);
  }
}
const Vd = { name: "setextUnderline", resolveTo: U6, tokenize: W6 };
function U6(e, t) {
  let n = e.length,
    i,
    r,
    s;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        i = n;
        break;
      }
      e[n][1].type === "paragraph" && (r = n);
    } else
      (e[n][1].type === "content" && e.splice(n, 1),
        !s && e[n][1].type === "definition" && (s = n));
  const o = {
    type: "setextHeading",
    start: { ...e[i][1].start },
    end: { ...e[e.length - 1][1].end },
  };
  return (
    (e[r][1].type = "setextHeadingText"),
    s
      ? (e.splice(r, 0, ["enter", o, t]),
        e.splice(s + 1, 0, ["exit", e[i][1], t]),
        (e[i][1].end = { ...e[s][1].end }))
      : (e[i][1] = o),
    e.push(["exit", o, t]),
    e
  );
}
function W6(e, t, n) {
  const i = this;
  let r;
  return s;
  function s(u) {
    let d = i.events.length,
      p;
    for (; d--; )
      if (
        i.events[d][1].type !== "lineEnding" &&
        i.events[d][1].type !== "linePrefix" &&
        i.events[d][1].type !== "content"
      ) {
        p = i.events[d][1].type === "paragraph";
        break;
      }
    return !i.parser.lazy[i.now().line] && (i.interrupt || p)
      ? (e.enter("setextHeadingLine"), (r = u), o(u))
      : n(u);
  }
  function o(u) {
    return (e.enter("setextHeadingLineSequence"), l(u));
  }
  function l(u) {
    return u === r
      ? (e.consume(u), l)
      : (e.exit("setextHeadingLineSequence"),
        J(u) ? ie(e, c, "lineSuffix")(u) : c(u));
  }
  function c(u) {
    return u === null || U(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const V6 = { tokenize: q6 };
function q6(e) {
  const t = this,
    n = e.attempt(
      Eo,
      i,
      e.attempt(
        this.parser.constructs.flowInitial,
        r,
        ie(
          e,
          e.attempt(this.parser.constructs.flow, r, e.attempt(J5, r)),
          "linePrefix",
        ),
      ),
    );
  return n;
  function i(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return (
      e.enter("lineEndingBlank"),
      e.consume(s),
      e.exit("lineEndingBlank"),
      (t.currentConstruct = void 0),
      n
    );
  }
  function r(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(s),
      e.exit("lineEnding"),
      (t.currentConstruct = void 0),
      n
    );
  }
}
const $6 = { resolveAll: ef() },
  G6 = Z0("string"),
  Q6 = Z0("text");
function Z0(e) {
  return { resolveAll: ef(e === "text" ? K6 : void 0), tokenize: t };
  function t(n) {
    const i = this,
      r = this.parser.constructs[e],
      s = n.attempt(r, o, l);
    return o;
    function o(d) {
      return u(d) ? s(d) : l(d);
    }
    function l(d) {
      if (d === null) {
        n.consume(d);
        return;
      }
      return (n.enter("data"), n.consume(d), c);
    }
    function c(d) {
      return u(d) ? (n.exit("data"), s(d)) : (n.consume(d), c);
    }
    function u(d) {
      if (d === null) return !0;
      const p = r[d];
      let f = -1;
      if (p)
        for (; ++f < p.length; ) {
          const h = p[f];
          if (!h.previous || h.previous.call(i, i.previous)) return !0;
        }
      return !1;
    }
  }
}
function ef(e) {
  return t;
  function t(n, i) {
    let r = -1,
      s;
    for (; ++r <= n.length; )
      s === void 0
        ? n[r] && n[r][1].type === "data" && ((s = r), r++)
        : (!n[r] || n[r][1].type !== "data") &&
          (r !== s + 2 &&
            ((n[s][1].end = n[r - 1][1].end),
            n.splice(s + 2, r - s - 2),
            (r = s + 2)),
          (s = void 0));
    return e ? e(n, i) : n;
  }
}
function K6(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if (
      (n === e.length || e[n][1].type === "lineEnding") &&
      e[n - 1][1].type === "data"
    ) {
      const i = e[n - 1][1],
        r = t.sliceStream(i);
      let s = r.length,
        o = -1,
        l = 0,
        c;
      for (; s--; ) {
        const u = r[s];
        if (typeof u == "string") {
          for (o = u.length; u.charCodeAt(o - 1) === 32; ) (l++, o--);
          if (o) break;
          o = -1;
        } else if (u === -2) ((c = !0), l++);
        else if (u !== -1) {
          s++;
          break;
        }
      }
      if ((t._contentTypeTextTrailing && n === e.length && (l = 0), l)) {
        const u = {
          type:
            n === e.length || c || l < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: s ? o : i.start._bufferIndex + o,
            _index: i.start._index + s,
            line: i.end.line,
            column: i.end.column - l,
            offset: i.end.offset - l,
          },
          end: { ...i.end },
        };
        ((i.end = { ...u.start }),
          i.start.offset === i.end.offset
            ? Object.assign(i, u)
            : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), (n += 2)));
      }
      n++;
    }
  return e;
}
const J6 = {
    42: Oe,
    43: Oe,
    45: Oe,
    48: Oe,
    49: Oe,
    50: Oe,
    51: Oe,
    52: Oe,
    53: Oe,
    54: Oe,
    55: Oe,
    56: Oe,
    57: Oe,
    62: $0,
  },
  Y6 = { 91: t6 },
  X6 = { [-2]: ia, [-1]: ia, 32: ia },
  Z6 = {
    35: a6,
    42: Es,
    45: [Vd, Es],
    60: d6,
    61: Vd,
    95: Es,
    96: Ud,
    126: Ud,
  },
  e8 = { 38: Q0, 92: G0 },
  t8 = {
    [-5]: ra,
    [-4]: ra,
    [-3]: ra,
    33: M6,
    38: Q0,
    42: Pl,
    60: [A5, v6],
    91: A6,
    92: [s6, G0],
    93: Wc,
    95: Pl,
    96: V5,
  },
  n8 = { null: [Pl, $6] },
  i8 = { null: [42, 95] },
  r8 = { null: [] },
  s8 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: i8,
        contentInitial: Y6,
        disable: r8,
        document: J6,
        flow: Z6,
        flowInitial: X6,
        insideSpan: n8,
        string: e8,
        text: t8,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
function o8(e, t, n) {
  let i = {
    _bufferIndex: -1,
    _index: 0,
    line: (n && n.line) || 1,
    column: (n && n.column) || 1,
    offset: (n && n.offset) || 0,
  };
  const r = {},
    s = [];
  let o = [],
    l = [];
  const c = {
      attempt: P(N),
      check: P(b),
      consume: m,
      enter: g,
      exit: C,
      interrupt: P(b, { interrupt: !0 }),
    },
    u = {
      code: null,
      containerState: {},
      defineSkip: k,
      events: [],
      now: w,
      parser: e,
      previous: null,
      sliceSerialize: f,
      sliceStream: h,
      write: p,
    };
  let d = t.tokenize.call(u, c);
  return (t.resolveAll && s.push(t), u);
  function p(_) {
    return (
      (o = rt(o, _)),
      S(),
      o[o.length - 1] !== null
        ? []
        : (D(t, 0), (u.events = Uc(s, u.events, u)), u.events)
    );
  }
  function f(_, O) {
    return l8(h(_), O);
  }
  function h(_) {
    return a8(o, _);
  }
  function w() {
    const { _bufferIndex: _, _index: O, line: Y, column: le, offset: $ } = i;
    return { _bufferIndex: _, _index: O, line: Y, column: le, offset: $ };
  }
  function k(_) {
    ((r[_.line] = _.column), R());
  }
  function S() {
    let _;
    for (; i._index < o.length; ) {
      const O = o[i._index];
      if (typeof O == "string")
        for (
          _ = i._index, i._bufferIndex < 0 && (i._bufferIndex = 0);
          i._index === _ && i._bufferIndex < O.length;
        )
          y(O.charCodeAt(i._bufferIndex));
      else y(O);
    }
  }
  function y(_) {
    d = d(_);
  }
  function m(_) {
    (U(_)
      ? (i.line++, (i.column = 1), (i.offset += _ === -3 ? 2 : 1), R())
      : _ !== -1 && (i.column++, i.offset++),
      i._bufferIndex < 0
        ? i._index++
        : (i._bufferIndex++,
          i._bufferIndex === o[i._index].length &&
            ((i._bufferIndex = -1), i._index++)),
      (u.previous = _));
  }
  function g(_, O) {
    const Y = O || {};
    return (
      (Y.type = _),
      (Y.start = w()),
      u.events.push(["enter", Y, u]),
      l.push(Y),
      Y
    );
  }
  function C(_) {
    const O = l.pop();
    return ((O.end = w()), u.events.push(["exit", O, u]), O);
  }
  function N(_, O) {
    D(_, O.from);
  }
  function b(_, O) {
    O.restore();
  }
  function P(_, O) {
    return Y;
    function Y(le, $, me) {
      let he, I, H, v;
      return Array.isArray(le) ? Z(le) : "tokenize" in le ? Z([le]) : Q(le);
      function Q(re) {
        return vt;
        function vt(Ut) {
          const Bn = Ut !== null && re[Ut],
            Hn = Ut !== null && re.null,
            Br = [
              ...(Array.isArray(Bn) ? Bn : Bn ? [Bn] : []),
              ...(Array.isArray(Hn) ? Hn : Hn ? [Hn] : []),
            ];
          return Z(Br)(Ut);
        }
      }
      function Z(re) {
        return ((he = re), (I = 0), re.length === 0 ? me : x(re[I]));
      }
      function x(re) {
        return vt;
        function vt(Ut) {
          return (
            (v = F()),
            (H = re),
            re.partial || (u.currentConstruct = re),
            re.name && u.parser.constructs.disable.null.includes(re.name)
              ? ct()
              : re.tokenize.call(
                  O ? Object.assign(Object.create(u), O) : u,
                  c,
                  we,
                  ct,
                )(Ut)
          );
        }
      }
      function we(re) {
        return (_(H, v), $);
      }
      function ct(re) {
        return (v.restore(), ++I < he.length ? x(he[I]) : me);
      }
    }
  }
  function D(_, O) {
    (_.resolveAll && !s.includes(_) && s.push(_),
      _.resolve &&
        Tt(u.events, O, u.events.length - O, _.resolve(u.events.slice(O), u)),
      _.resolveTo && (u.events = _.resolveTo(u.events, u)));
  }
  function F() {
    const _ = w(),
      O = u.previous,
      Y = u.currentConstruct,
      le = u.events.length,
      $ = Array.from(l);
    return { from: le, restore: me };
    function me() {
      ((i = _),
        (u.previous = O),
        (u.currentConstruct = Y),
        (u.events.length = le),
        (l = $),
        R());
    }
  }
  function R() {
    i.line in r &&
      i.column < 2 &&
      ((i.column = r[i.line]), (i.offset += r[i.line] - 1));
  }
}
function a8(e, t) {
  const n = t.start._index,
    i = t.start._bufferIndex,
    r = t.end._index,
    s = t.end._bufferIndex;
  let o;
  if (n === r) o = [e[n].slice(i, s)];
  else {
    if (((o = e.slice(n, r)), i > -1)) {
      const l = o[0];
      typeof l == "string" ? (o[0] = l.slice(i)) : o.shift();
    }
    s > 0 && o.push(e[r].slice(0, s));
  }
  return o;
}
function l8(e, t) {
  let n = -1;
  const i = [];
  let r;
  for (; ++n < e.length; ) {
    const s = e[n];
    let o;
    if (typeof s == "string") o = s;
    else
      switch (s) {
        case -5: {
          o = "\r";
          break;
        }
        case -4: {
          o = `
`;
          break;
        }
        case -3: {
          o = `\r
`;
          break;
        }
        case -2: {
          o = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && r) continue;
          o = " ";
          break;
        }
        default:
          o = String.fromCharCode(s);
      }
    ((r = s === -2), i.push(o));
  }
  return i.join("");
}
function c8(e) {
  const i = {
    constructs: g5([s8, ...((e || {}).extensions || [])]),
    content: r(b5),
    defined: [],
    document: r(N5),
    flow: r(V6),
    lazy: {},
    string: r(G6),
    text: r(Q6),
  };
  return i;
  function r(s) {
    return o;
    function o(l) {
      return o8(i, s, l);
    }
  }
}
function u8(e) {
  for (; !K0(e); );
  return e;
}
const qd = /[\0\t\n\r]/g;
function d8() {
  let e = 1,
    t = "",
    n = !0,
    i;
  return r;
  function r(s, o, l) {
    const c = [];
    let u, d, p, f, h;
    for (
      s =
        t +
        (typeof s == "string"
          ? s.toString()
          : new TextDecoder(o || void 0).decode(s)),
        p = 0,
        t = "",
        n && (s.charCodeAt(0) === 65279 && p++, (n = void 0));
      p < s.length;
    ) {
      if (
        ((qd.lastIndex = p),
        (u = qd.exec(s)),
        (f = u && u.index !== void 0 ? u.index : s.length),
        (h = s.charCodeAt(f)),
        !u)
      ) {
        t = s.slice(p);
        break;
      }
      if (h === 10 && p === f && i) (c.push(-3), (i = void 0));
      else
        switch (
          (i && (c.push(-5), (i = void 0)),
          p < f && (c.push(s.slice(p, f)), (e += f - p)),
          h)
        ) {
          case 0: {
            (c.push(65533), e++);
            break;
          }
          case 9: {
            for (d = Math.ceil(e / 4) * 4, c.push(-2); e++ < d; ) c.push(-1);
            break;
          }
          case 10: {
            (c.push(-4), (e = 1));
            break;
          }
          default:
            ((i = !0), (e = 1));
        }
      p = f + 1;
    }
    return (l && (i && c.push(-5), t && c.push(t), c.push(null)), c);
  }
}
const p8 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function h8(e) {
  return e.replace(p8, f8);
}
function f8(e, t, n) {
  if (t) return t;
  if (n.charCodeAt(0) === 35) {
    const r = n.charCodeAt(1),
      s = r === 120 || r === 88;
    return q0(n.slice(s ? 2 : 1), s ? 16 : 10);
  }
  return Fc(n) || e;
}
const tf = {}.hasOwnProperty;
function m8(e, t, n) {
  return (
    typeof t != "string" && ((n = t), (t = void 0)),
    g8(n)(
      u8(
        c8(n)
          .document()
          .write(d8()(e, t, !0)),
      ),
    )
  );
}
function g8(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: s(Zc),
      autolinkProtocol: F,
      autolinkEmail: F,
      atxHeading: s(Jc),
      blockQuote: s(Hn),
      characterEscape: F,
      characterReference: F,
      codeFenced: s(Br),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: s(Br, o),
      codeText: s(Sf, o),
      codeTextData: F,
      data: F,
      codeFlowValue: F,
      definition: s(Cf),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: s(bf),
      hardBreakEscape: s(Yc),
      hardBreakTrailing: s(Yc),
      htmlFlow: s(Xc, o),
      htmlFlowData: F,
      htmlText: s(Xc, o),
      htmlTextData: F,
      image: s(Ef),
      label: o,
      link: s(Zc),
      listItem: s(Nf),
      listItemValue: f,
      listOrdered: s(eu, p),
      listUnordered: s(eu),
      paragraph: s(Tf),
      reference: x,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: s(Jc),
      strong: s(Pf),
      thematicBreak: s(jf),
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: N,
      autolink: c(),
      autolinkEmail: Bn,
      autolinkProtocol: Ut,
      blockQuote: c(),
      characterEscapeValue: R,
      characterReferenceMarkerHexadecimal: ct,
      characterReferenceMarkerNumeric: ct,
      characterReferenceValue: re,
      characterReference: vt,
      codeFenced: c(S),
      codeFencedFence: k,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: w,
      codeFlowValue: R,
      codeIndented: c(y),
      codeText: c($),
      codeTextData: R,
      data: R,
      definition: c(),
      definitionDestinationString: C,
      definitionLabelString: m,
      definitionTitleString: g,
      emphasis: c(),
      hardBreakEscape: c(O),
      hardBreakTrailing: c(O),
      htmlFlow: c(Y),
      htmlFlowData: R,
      htmlText: c(le),
      htmlTextData: R,
      image: c(he),
      label: H,
      labelText: I,
      lineEnding: _,
      link: c(me),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: we,
      resourceDestinationString: v,
      resourceTitleString: Q,
      resource: Z,
      setextHeading: c(D),
      setextHeadingLineSequence: P,
      setextHeadingText: b,
      strong: c(),
      thematicBreak: c(),
    },
  };
  nf(t, (e || {}).mdastExtensions || []);
  const n = {};
  return i;
  function i(T) {
    let A = { type: "root", children: [] };
    const W = {
        stack: [A],
        tokenStack: [],
        config: t,
        enter: l,
        exit: u,
        buffer: o,
        resume: d,
        data: n,
      },
      G = [];
    let ee = -1;
    for (; ++ee < T.length; )
      if (T[ee][1].type === "listOrdered" || T[ee][1].type === "listUnordered")
        if (T[ee][0] === "enter") G.push(ee);
        else {
          const ut = G.pop();
          ee = r(T, ut, ee);
        }
    for (ee = -1; ++ee < T.length; ) {
      const ut = t[T[ee][0]];
      tf.call(ut, T[ee][1].type) &&
        ut[T[ee][1].type].call(
          Object.assign({ sliceSerialize: T[ee][2].sliceSerialize }, W),
          T[ee][1],
        );
    }
    if (W.tokenStack.length > 0) {
      const ut = W.tokenStack[W.tokenStack.length - 1];
      (ut[1] || $d).call(W, void 0, ut[0]);
    }
    for (
      A.position = {
        start: Vt(
          T.length > 0 ? T[0][1].start : { line: 1, column: 1, offset: 0 },
        ),
        end: Vt(
          T.length > 0
            ? T[T.length - 2][1].end
            : { line: 1, column: 1, offset: 0 },
        ),
      },
        ee = -1;
      ++ee < t.transforms.length;
    )
      A = t.transforms[ee](A) || A;
    return A;
  }
  function r(T, A, W) {
    let G = A - 1,
      ee = -1,
      ut = !1,
      vn,
      Pt,
      Ti,
      Pi;
    for (; ++G <= W; ) {
      const Ge = T[G];
      switch (Ge[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          (Ge[0] === "enter" ? ee++ : ee--, (Pi = void 0));
          break;
        }
        case "lineEndingBlank": {
          Ge[0] === "enter" &&
            (vn && !Pi && !ee && !Ti && (Ti = G), (Pi = void 0));
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Pi = void 0;
      }
      if (
        (!ee && Ge[0] === "enter" && Ge[1].type === "listItemPrefix") ||
        (ee === -1 &&
          Ge[0] === "exit" &&
          (Ge[1].type === "listUnordered" || Ge[1].type === "listOrdered"))
      ) {
        if (vn) {
          let Fn = G;
          for (Pt = void 0; Fn--; ) {
            const Mt = T[Fn];
            if (
              Mt[1].type === "lineEnding" ||
              Mt[1].type === "lineEndingBlank"
            ) {
              if (Mt[0] === "exit") continue;
              (Pt && ((T[Pt][1].type = "lineEndingBlank"), (ut = !0)),
                (Mt[1].type = "lineEnding"),
                (Pt = Fn));
            } else if (
              !(
                Mt[1].type === "linePrefix" ||
                Mt[1].type === "blockQuotePrefix" ||
                Mt[1].type === "blockQuotePrefixWhitespace" ||
                Mt[1].type === "blockQuoteMarker" ||
                Mt[1].type === "listItemIndent"
              )
            )
              break;
          }
          (Ti && (!Pt || Ti < Pt) && (vn._spread = !0),
            (vn.end = Object.assign({}, Pt ? T[Pt][1].start : Ge[1].end)),
            T.splice(Pt || G, 0, ["exit", vn, Ge[2]]),
            G++,
            W++);
        }
        if (Ge[1].type === "listItemPrefix") {
          const Fn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ge[1].start),
            end: void 0,
          };
          ((vn = Fn),
            T.splice(G, 0, ["enter", Fn, Ge[2]]),
            G++,
            W++,
            (Ti = void 0),
            (Pi = !0));
        }
      }
    }
    return ((T[A][1]._spread = ut), W);
  }
  function s(T, A) {
    return W;
    function W(G) {
      (l.call(this, T(G), G), A && A.call(this, G));
    }
  }
  function o() {
    this.stack.push({ type: "fragment", children: [] });
  }
  function l(T, A, W) {
    (this.stack[this.stack.length - 1].children.push(T),
      this.stack.push(T),
      this.tokenStack.push([A, W || void 0]),
      (T.position = { start: Vt(A.start), end: void 0 }));
  }
  function c(T) {
    return A;
    function A(W) {
      (T && T.call(this, W), u.call(this, W));
    }
  }
  function u(T, A) {
    const W = this.stack.pop(),
      G = this.tokenStack.pop();
    if (G)
      G[0].type !== T.type &&
        (A ? A.call(this, T, G[0]) : (G[1] || $d).call(this, T, G[0]));
    else
      throw new Error(
        "Cannot close `" +
          T.type +
          "` (" +
          tr({ start: T.start, end: T.end }) +
          "): it’s not open",
      );
    W.position.end = Vt(T.end);
  }
  function d() {
    return f5(this.stack.pop());
  }
  function p() {
    this.data.expectingFirstListItemValue = !0;
  }
  function f(T) {
    if (this.data.expectingFirstListItemValue) {
      const A = this.stack[this.stack.length - 2];
      ((A.start = Number.parseInt(this.sliceSerialize(T), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function h() {
    const T = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.lang = T;
  }
  function w() {
    const T = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.meta = T;
  }
  function k() {
    this.data.flowCodeInside ||
      (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function S() {
    const T = this.resume(),
      A = this.stack[this.stack.length - 1];
    ((A.value = T.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
      (this.data.flowCodeInside = void 0));
  }
  function y() {
    const T = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.value = T.replace(/(\r?\n|\r)$/g, "");
  }
  function m(T) {
    const A = this.resume(),
      W = this.stack[this.stack.length - 1];
    ((W.label = A), (W.identifier = pi(this.sliceSerialize(T)).toLowerCase()));
  }
  function g() {
    const T = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.title = T;
  }
  function C() {
    const T = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.url = T;
  }
  function N(T) {
    const A = this.stack[this.stack.length - 1];
    if (!A.depth) {
      const W = this.sliceSerialize(T).length;
      A.depth = W;
    }
  }
  function b() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function P(T) {
    const A = this.stack[this.stack.length - 1];
    A.depth = this.sliceSerialize(T).codePointAt(0) === 61 ? 1 : 2;
  }
  function D() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function F(T) {
    const W = this.stack[this.stack.length - 1].children;
    let G = W[W.length - 1];
    ((!G || G.type !== "text") &&
      ((G = Mf()),
      (G.position = { start: Vt(T.start), end: void 0 }),
      W.push(G)),
      this.stack.push(G));
  }
  function R(T) {
    const A = this.stack.pop();
    ((A.value += this.sliceSerialize(T)), (A.position.end = Vt(T.end)));
  }
  function _(T) {
    const A = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const W = A.children[A.children.length - 1];
      ((W.position.end = Vt(T.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      t.canContainEols.includes(A.type) &&
      (F.call(this, T), R.call(this, T));
  }
  function O() {
    this.data.atHardBreak = !0;
  }
  function Y() {
    const T = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.value = T;
  }
  function le() {
    const T = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.value = T;
  }
  function $() {
    const T = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.value = T;
  }
  function me() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const A = this.data.referenceType || "shortcut";
      ((T.type += "Reference"),
        (T.referenceType = A),
        delete T.url,
        delete T.title);
    } else (delete T.identifier, delete T.label);
    this.data.referenceType = void 0;
  }
  function he() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const A = this.data.referenceType || "shortcut";
      ((T.type += "Reference"),
        (T.referenceType = A),
        delete T.url,
        delete T.title);
    } else (delete T.identifier, delete T.label);
    this.data.referenceType = void 0;
  }
  function I(T) {
    const A = this.sliceSerialize(T),
      W = this.stack[this.stack.length - 2];
    ((W.label = h8(A)), (W.identifier = pi(A).toLowerCase()));
  }
  function H() {
    const T = this.stack[this.stack.length - 1],
      A = this.resume(),
      W = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), W.type === "link")) {
      const G = T.children;
      W.children = G;
    } else W.alt = A;
  }
  function v() {
    const T = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.url = T;
  }
  function Q() {
    const T = this.resume(),
      A = this.stack[this.stack.length - 1];
    A.title = T;
  }
  function Z() {
    this.data.inReference = void 0;
  }
  function x() {
    this.data.referenceType = "collapsed";
  }
  function we(T) {
    const A = this.resume(),
      W = this.stack[this.stack.length - 1];
    ((W.label = A),
      (W.identifier = pi(this.sliceSerialize(T)).toLowerCase()),
      (this.data.referenceType = "full"));
  }
  function ct(T) {
    this.data.characterReferenceType = T.type;
  }
  function re(T) {
    const A = this.sliceSerialize(T),
      W = this.data.characterReferenceType;
    let G;
    W
      ? ((G = q0(A, W === "characterReferenceMarkerNumeric" ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (G = Fc(A));
    const ee = this.stack[this.stack.length - 1];
    ee.value += G;
  }
  function vt(T) {
    const A = this.stack.pop();
    A.position.end = Vt(T.end);
  }
  function Ut(T) {
    R.call(this, T);
    const A = this.stack[this.stack.length - 1];
    A.url = this.sliceSerialize(T);
  }
  function Bn(T) {
    R.call(this, T);
    const A = this.stack[this.stack.length - 1];
    A.url = "mailto:" + this.sliceSerialize(T);
  }
  function Hn() {
    return { type: "blockquote", children: [] };
  }
  function Br() {
    return { type: "code", lang: null, meta: null, value: "" };
  }
  function Sf() {
    return { type: "inlineCode", value: "" };
  }
  function Cf() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
    };
  }
  function bf() {
    return { type: "emphasis", children: [] };
  }
  function Jc() {
    return { type: "heading", depth: 0, children: [] };
  }
  function Yc() {
    return { type: "break" };
  }
  function Xc() {
    return { type: "html", value: "" };
  }
  function Ef() {
    return { type: "image", title: null, url: "", alt: null };
  }
  function Zc() {
    return { type: "link", title: null, url: "", children: [] };
  }
  function eu(T) {
    return {
      type: "list",
      ordered: T.type === "listOrdered",
      start: null,
      spread: T._spread,
      children: [],
    };
  }
  function Nf(T) {
    return { type: "listItem", spread: T._spread, checked: null, children: [] };
  }
  function Tf() {
    return { type: "paragraph", children: [] };
  }
  function Pf() {
    return { type: "strong", children: [] };
  }
  function Mf() {
    return { type: "text", value: "" };
  }
  function jf() {
    return { type: "thematicBreak" };
  }
}
function Vt(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function nf(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const i = t[n];
    Array.isArray(i) ? nf(e, i) : y8(e, i);
  }
}
function y8(e, t) {
  let n;
  for (n in t)
    if (tf.call(t, n))
      switch (n) {
        case "canContainEols": {
          const i = t[n];
          i && e[n].push(...i);
          break;
        }
        case "transforms": {
          const i = t[n];
          i && e[n].push(...i);
          break;
        }
        case "enter":
        case "exit": {
          const i = t[n];
          i && Object.assign(e[n], i);
          break;
        }
      }
}
function $d(e, t) {
  throw e
    ? new Error(
        "Cannot close `" +
          e.type +
          "` (" +
          tr({ start: e.start, end: e.end }) +
          "): a different token (`" +
          t.type +
          "`, " +
          tr({ start: t.start, end: t.end }) +
          ") is open",
      )
    : new Error(
        "Cannot close document, a token (`" +
          t.type +
          "`, " +
          tr({ start: t.start, end: t.end }) +
          ") is still open",
      );
}
function v8(e) {
  const t = this;
  t.parser = n;
  function n(i) {
    return m8(i, {
      ...t.data("settings"),
      ...e,
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || [],
    });
  }
}
function w8(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function x8(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return (
    e.patch(t, n),
    [
      e.applyData(t, n),
      {
        type: "text",
        value: `
`,
      },
    ]
  );
}
function k8(e, t) {
  const n = t.value
      ? t.value +
        `
`
      : "",
    i = {},
    r = t.lang ? t.lang.split(/\s+/) : [];
  r.length > 0 && (i.className = ["language-" + r[0]]);
  let s = {
    type: "element",
    tagName: "code",
    properties: i,
    children: [{ type: "text", value: n }],
  };
  return (
    t.meta && (s.data = { meta: t.meta }),
    e.patch(t, s),
    (s = e.applyData(t, s)),
    (s = { type: "element", tagName: "pre", properties: {}, children: [s] }),
    e.patch(t, s),
    s
  );
}
function S8(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function C8(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function b8(e, t) {
  const n =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    i = String(t.identifier).toUpperCase(),
    r = Ni(i.toLowerCase()),
    s = e.footnoteOrder.indexOf(i);
  let o,
    l = e.footnoteCounts.get(i);
  (l === void 0
    ? ((l = 0), e.footnoteOrder.push(i), (o = e.footnoteOrder.length))
    : (o = s + 1),
    (l += 1),
    e.footnoteCounts.set(i, l));
  const c = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + r,
      id: n + "fnref-" + r + (l > 1 ? "-" + l : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"],
    },
    children: [{ type: "text", value: String(o) }],
  };
  e.patch(t, c);
  const u = { type: "element", tagName: "sup", properties: {}, children: [c] };
  return (e.patch(t, u), e.applyData(t, u));
}
function E8(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function N8(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return (e.patch(t, n), e.applyData(t, n));
  }
}
function rf(e, t) {
  const n = t.referenceType;
  let i = "]";
  if (
    (n === "collapsed"
      ? (i += "[]")
      : n === "full" && (i += "[" + (t.label || t.identifier) + "]"),
    t.type === "imageReference")
  )
    return [{ type: "text", value: "![" + t.alt + i }];
  const r = e.all(t),
    s = r[0];
  s && s.type === "text"
    ? (s.value = "[" + s.value)
    : r.unshift({ type: "text", value: "[" });
  const o = r[r.length - 1];
  return (
    o && o.type === "text"
      ? (o.value += i)
      : r.push({ type: "text", value: i }),
    r
  );
}
function T8(e, t) {
  const n = String(t.identifier).toUpperCase(),
    i = e.definitionById.get(n);
  if (!i) return rf(e, t);
  const r = { src: Ni(i.url || ""), alt: t.alt };
  i.title !== null && i.title !== void 0 && (r.title = i.title);
  const s = { type: "element", tagName: "img", properties: r, children: [] };
  return (e.patch(t, s), e.applyData(t, s));
}
function P8(e, t) {
  const n = { src: Ni(t.url) };
  (t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title));
  const i = { type: "element", tagName: "img", properties: n, children: [] };
  return (e.patch(t, i), e.applyData(t, i));
}
function M8(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const i = { type: "element", tagName: "code", properties: {}, children: [n] };
  return (e.patch(t, i), e.applyData(t, i));
}
function j8(e, t) {
  const n = String(t.identifier).toUpperCase(),
    i = e.definitionById.get(n);
  if (!i) return rf(e, t);
  const r = { href: Ni(i.url || "") };
  i.title !== null && i.title !== void 0 && (r.title = i.title);
  const s = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t),
  };
  return (e.patch(t, s), e.applyData(t, s));
}
function A8(e, t) {
  const n = { href: Ni(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const i = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t),
  };
  return (e.patch(t, i), e.applyData(t, i));
}
function I8(e, t, n) {
  const i = e.all(t),
    r = n ? D8(n) : sf(t),
    s = {},
    o = [];
  if (typeof t.checked == "boolean") {
    const d = i[0];
    let p;
    (d && d.type === "element" && d.tagName === "p"
      ? (p = d)
      : ((p = { type: "element", tagName: "p", properties: {}, children: [] }),
        i.unshift(p)),
      p.children.length > 0 && p.children.unshift({ type: "text", value: " " }),
      p.children.unshift({
        type: "element",
        tagName: "input",
        properties: { type: "checkbox", checked: t.checked, disabled: !0 },
        children: [],
      }),
      (s.className = ["task-list-item"]));
  }
  let l = -1;
  for (; ++l < i.length; ) {
    const d = i[l];
    ((r || l !== 0 || d.type !== "element" || d.tagName !== "p") &&
      o.push({
        type: "text",
        value: `
`,
      }),
      d.type === "element" && d.tagName === "p" && !r
        ? o.push(...d.children)
        : o.push(d));
  }
  const c = i[i.length - 1];
  c &&
    (r || c.type !== "element" || c.tagName !== "p") &&
    o.push({
      type: "text",
      value: `
`,
    });
  const u = { type: "element", tagName: "li", properties: s, children: o };
  return (e.patch(t, u), e.applyData(t, u));
}
function D8(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let i = -1;
    for (; !t && ++i < n.length; ) t = sf(n[i]);
  }
  return t;
}
function sf(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function L8(e, t) {
  const n = {},
    i = e.all(t);
  let r = -1;
  for (
    typeof t.start == "number" && t.start !== 1 && (n.start = t.start);
    ++r < i.length;
  ) {
    const o = i[r];
    if (
      o.type === "element" &&
      o.tagName === "li" &&
      o.properties &&
      Array.isArray(o.properties.className) &&
      o.properties.className.includes("task-list-item")
    ) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const s = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(i, !0),
  };
  return (e.patch(t, s), e.applyData(t, s));
}
function R8(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function _8(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return (e.patch(t, n), e.applyData(t, n));
}
function z8(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
function O8(e, t) {
  const n = e.all(t),
    i = n.shift(),
    r = [];
  if (i) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([i], !0),
    };
    (e.patch(t.children[0], o), r.push(o));
  }
  if (n.length > 0) {
    const o = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(n, !0),
      },
      l = zc(t.children[1]),
      c = O0(t.children[t.children.length - 1]);
    (l && c && (o.position = { start: l, end: c }), r.push(o));
  }
  const s = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(r, !0),
  };
  return (e.patch(t, s), e.applyData(t, s));
}
function B8(e, t, n) {
  const i = n ? n.children : void 0,
    s = (i ? i.indexOf(t) : 1) === 0 ? "th" : "td",
    o = n && n.type === "table" ? n.align : void 0,
    l = o ? o.length : t.children.length;
  let c = -1;
  const u = [];
  for (; ++c < l; ) {
    const p = t.children[c],
      f = {},
      h = o ? o[c] : void 0;
    h && (f.align = h);
    let w = { type: "element", tagName: s, properties: f, children: [] };
    (p && ((w.children = e.all(p)), e.patch(p, w), (w = e.applyData(p, w))),
      u.push(w));
  }
  const d = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0),
  };
  return (e.patch(t, d), e.applyData(t, d));
}
function H8(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t),
  };
  return (e.patch(t, n), e.applyData(t, n));
}
const Gd = 9,
  Qd = 32;
function F8(e) {
  const t = String(e),
    n = /\r?\n|\r/g;
  let i = n.exec(t),
    r = 0;
  const s = [];
  for (; i; )
    (s.push(Kd(t.slice(r, i.index), r > 0, !0), i[0]),
      (r = i.index + i[0].length),
      (i = n.exec(t)));
  return (s.push(Kd(t.slice(r), r > 0, !1)), s.join(""));
}
function Kd(e, t, n) {
  let i = 0,
    r = e.length;
  if (t) {
    let s = e.codePointAt(i);
    for (; s === Gd || s === Qd; ) (i++, (s = e.codePointAt(i)));
  }
  if (n) {
    let s = e.codePointAt(r - 1);
    for (; s === Gd || s === Qd; ) (r--, (s = e.codePointAt(r - 1)));
  }
  return r > i ? e.slice(i, r) : "";
}
function U8(e, t) {
  const n = { type: "text", value: F8(String(t.value)) };
  return (e.patch(t, n), e.applyData(t, n));
}
function W8(e, t) {
  const n = { type: "element", tagName: "hr", properties: {}, children: [] };
  return (e.patch(t, n), e.applyData(t, n));
}
const V8 = {
  blockquote: w8,
  break: x8,
  code: k8,
  delete: S8,
  emphasis: C8,
  footnoteReference: b8,
  heading: E8,
  html: N8,
  imageReference: T8,
  image: P8,
  inlineCode: M8,
  linkReference: j8,
  link: A8,
  listItem: I8,
  list: L8,
  paragraph: R8,
  root: _8,
  strong: z8,
  table: O8,
  tableCell: H8,
  tableRow: B8,
  text: U8,
  thematicBreak: W8,
  toml: is,
  yaml: is,
  definition: is,
  footnoteDefinition: is,
};
function is() {}
const of = -1,
  No = 0,
  ir = 1,
  to = 2,
  Vc = 3,
  qc = 4,
  $c = 5,
  Gc = 6,
  af = 7,
  lf = 8,
  Jd = typeof self == "object" ? self : globalThis,
  q8 = (e, t) => {
    const n = (r, s) => (e.set(s, r), r),
      i = (r) => {
        if (e.has(r)) return e.get(r);
        const [s, o] = t[r];
        switch (s) {
          case No:
          case of:
            return n(o, r);
          case ir: {
            const l = n([], r);
            for (const c of o) l.push(i(c));
            return l;
          }
          case to: {
            const l = n({}, r);
            for (const [c, u] of o) l[i(c)] = i(u);
            return l;
          }
          case Vc:
            return n(new Date(o), r);
          case qc: {
            const { source: l, flags: c } = o;
            return n(new RegExp(l, c), r);
          }
          case $c: {
            const l = n(new Map(), r);
            for (const [c, u] of o) l.set(i(c), i(u));
            return l;
          }
          case Gc: {
            const l = n(new Set(), r);
            for (const c of o) l.add(i(c));
            return l;
          }
          case af: {
            const { name: l, message: c } = o;
            return n(new Jd[l](c), r);
          }
          case lf:
            return n(BigInt(o), r);
          case "BigInt":
            return n(Object(BigInt(o)), r);
          case "ArrayBuffer":
            return n(new Uint8Array(o).buffer, o);
          case "DataView": {
            const { buffer: l } = new Uint8Array(o);
            return n(new DataView(l), o);
          }
        }
        return n(new Jd[s](o), r);
      };
    return i;
  },
  Yd = (e) => q8(new Map(), e)(0),
  Wn = "",
  { toString: $8 } = {},
  { keys: G8 } = Object,
  Oi = (e) => {
    const t = typeof e;
    if (t !== "object" || !e) return [No, t];
    const n = $8.call(e).slice(8, -1);
    switch (n) {
      case "Array":
        return [ir, Wn];
      case "Object":
        return [to, Wn];
      case "Date":
        return [Vc, Wn];
      case "RegExp":
        return [qc, Wn];
      case "Map":
        return [$c, Wn];
      case "Set":
        return [Gc, Wn];
      case "DataView":
        return [ir, n];
    }
    return n.includes("Array")
      ? [ir, n]
      : n.includes("Error")
        ? [af, n]
        : [to, n];
  },
  rs = ([e, t]) => e === No && (t === "function" || t === "symbol"),
  Q8 = (e, t, n, i) => {
    const r = (o, l) => {
        const c = i.push(o) - 1;
        return (n.set(l, c), c);
      },
      s = (o) => {
        if (n.has(o)) return n.get(o);
        let [l, c] = Oi(o);
        switch (l) {
          case No: {
            let d = o;
            switch (c) {
              case "bigint":
                ((l = lf), (d = o.toString()));
                break;
              case "function":
              case "symbol":
                if (e) throw new TypeError("unable to serialize " + c);
                d = null;
                break;
              case "undefined":
                return r([of], o);
            }
            return r([l, d], o);
          }
          case ir: {
            if (c) {
              let f = o;
              return (
                c === "DataView"
                  ? (f = new Uint8Array(o.buffer))
                  : c === "ArrayBuffer" && (f = new Uint8Array(o)),
                r([c, [...f]], o)
              );
            }
            const d = [],
              p = r([l, d], o);
            for (const f of o) d.push(s(f));
            return p;
          }
          case to: {
            if (c)
              switch (c) {
                case "BigInt":
                  return r([c, o.toString()], o);
                case "Boolean":
                case "Number":
                case "String":
                  return r([c, o.valueOf()], o);
              }
            if (t && "toJSON" in o) return s(o.toJSON());
            const d = [],
              p = r([l, d], o);
            for (const f of G8(o))
              (e || !rs(Oi(o[f]))) && d.push([s(f), s(o[f])]);
            return p;
          }
          case Vc:
            return r([l, o.toISOString()], o);
          case qc: {
            const { source: d, flags: p } = o;
            return r([l, { source: d, flags: p }], o);
          }
          case $c: {
            const d = [],
              p = r([l, d], o);
            for (const [f, h] of o)
              (e || !(rs(Oi(f)) || rs(Oi(h)))) && d.push([s(f), s(h)]);
            return p;
          }
          case Gc: {
            const d = [],
              p = r([l, d], o);
            for (const f of o) (e || !rs(Oi(f))) && d.push(s(f));
            return p;
          }
        }
        const { message: u } = o;
        return r([l, { name: c, message: u }], o);
      };
    return s;
  },
  Xd = (e, { json: t, lossy: n } = {}) => {
    const i = [];
    return (Q8(!(t || n), !!t, new Map(), i)(e), i);
  },
  no =
    typeof structuredClone == "function"
      ? (e, t) =>
          t && ("json" in t || "lossy" in t) ? Yd(Xd(e, t)) : structuredClone(e)
      : (e, t) => Yd(Xd(e, t));
function K8(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return (
    t > 1 &&
      n.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{ type: "text", value: String(t) }],
      }),
    n
  );
}
function J8(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Y8(e) {
  const t =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    n = e.options.footnoteBackContent || K8,
    i = e.options.footnoteBackLabel || J8,
    r = e.options.footnoteLabel || "Footnotes",
    s = e.options.footnoteLabelTagName || "h2",
    o = e.options.footnoteLabelProperties || { className: ["sr-only"] },
    l = [];
  let c = -1;
  for (; ++c < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(e.footnoteOrder[c]);
    if (!u) continue;
    const d = e.all(u),
      p = String(u.identifier).toUpperCase(),
      f = Ni(p.toLowerCase());
    let h = 0;
    const w = [],
      k = e.footnoteCounts.get(p);
    for (; k !== void 0 && ++h <= k; ) {
      w.length > 0 && w.push({ type: "text", value: " " });
      let m = typeof n == "string" ? n : n(c, h);
      (typeof m == "string" && (m = { type: "text", value: m }),
        w.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + t + "fnref-" + f + (h > 1 ? "-" + h : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof i == "string" ? i : i(c, h),
            className: ["data-footnote-backref"],
          },
          children: Array.isArray(m) ? m : [m],
        }));
    }
    const S = d[d.length - 1];
    if (S && S.type === "element" && S.tagName === "p") {
      const m = S.children[S.children.length - 1];
      (m && m.type === "text"
        ? (m.value += " ")
        : S.children.push({ type: "text", value: " " }),
        S.children.push(...w));
    } else d.push(...w);
    const y = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + f },
      children: e.wrap(d, !0),
    };
    (e.patch(u, y), l.push(y));
  }
  if (l.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: s,
          properties: { ...no(o), id: "footnote-label" },
          children: [{ type: "text", value: r }],
        },
        {
          type: "text",
          value: `
`,
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(l, !0),
        },
        {
          type: "text",
          value: `
`,
        },
      ],
    };
}
const cf = function (e) {
  if (e == null) return tv;
  if (typeof e == "function") return To(e);
  if (typeof e == "object") return Array.isArray(e) ? X8(e) : Z8(e);
  if (typeof e == "string") return ev(e);
  throw new Error("Expected function, string, or object as test");
};
function X8(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; ) t[n] = cf(e[n]);
  return To(i);
  function i(...r) {
    let s = -1;
    for (; ++s < t.length; ) if (t[s].apply(this, r)) return !0;
    return !1;
  }
}
function Z8(e) {
  const t = e;
  return To(n);
  function n(i) {
    const r = i;
    let s;
    for (s in e) if (r[s] !== t[s]) return !1;
    return !0;
  }
}
function ev(e) {
  return To(t);
  function t(n) {
    return n && n.type === e;
  }
}
function To(e) {
  return t;
  function t(n, i, r) {
    return !!(
      nv(n) && e.call(this, n, typeof i == "number" ? i : void 0, r || void 0)
    );
  }
}
function tv() {
  return !0;
}
function nv(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const uf = [],
  iv = !0,
  Zd = !1,
  rv = "skip";
function sv(e, t, n, i) {
  let r;
  typeof t == "function" && typeof n != "function"
    ? ((i = n), (n = t))
    : (r = t);
  const s = cf(r),
    o = i ? -1 : 1;
  l(e, void 0, [])();
  function l(c, u, d) {
    const p = c && typeof c == "object" ? c : {};
    if (typeof p.type == "string") {
      const h =
        typeof p.tagName == "string"
          ? p.tagName
          : typeof p.name == "string"
            ? p.name
            : void 0;
      Object.defineProperty(f, "name", {
        value: "node (" + (c.type + (h ? "<" + h + ">" : "")) + ")",
      });
    }
    return f;
    function f() {
      let h = uf,
        w,
        k,
        S;
      if (
        (!t || s(c, u, d[d.length - 1] || void 0)) &&
        ((h = ov(n(c, d))), h[0] === Zd)
      )
        return h;
      if ("children" in c && c.children) {
        const y = c;
        if (y.children && h[0] !== rv)
          for (
            k = (i ? y.children.length : -1) + o, S = d.concat(y);
            k > -1 && k < y.children.length;
          ) {
            const m = y.children[k];
            if (((w = l(m, k, S)()), w[0] === Zd)) return w;
            k = typeof w[1] == "number" ? w[1] : k + o;
          }
      }
      return h;
    }
  }
}
function ov(e) {
  return Array.isArray(e)
    ? e
    : typeof e == "number"
      ? [iv, e]
      : e == null
        ? uf
        : [e];
}
function df(e, t, n, i) {
  let r, s, o;
  (typeof t == "function" && typeof n != "function"
    ? ((s = void 0), (o = t), (r = n))
    : ((s = t), (o = n), (r = i)),
    sv(e, s, l, r));
  function l(c, u) {
    const d = u[u.length - 1],
      p = d ? d.children.indexOf(c) : void 0;
    return o(c, p, d);
  }
}
const Ml = {}.hasOwnProperty,
  av = {};
function lv(e, t) {
  const n = t || av,
    i = new Map(),
    r = new Map(),
    s = new Map(),
    o = { ...V8, ...n.handlers },
    l = {
      all: u,
      applyData: uv,
      definitionById: i,
      footnoteById: r,
      footnoteCounts: s,
      footnoteOrder: [],
      handlers: o,
      one: c,
      options: n,
      patch: cv,
      wrap: pv,
    };
  return (
    df(e, function (d) {
      if (d.type === "definition" || d.type === "footnoteDefinition") {
        const p = d.type === "definition" ? i : r,
          f = String(d.identifier).toUpperCase();
        p.has(f) || p.set(f, d);
      }
    }),
    l
  );
  function c(d, p) {
    const f = d.type,
      h = l.handlers[f];
    if (Ml.call(l.handlers, f) && h) return h(l, d, p);
    if (l.options.passThrough && l.options.passThrough.includes(f)) {
      if ("children" in d) {
        const { children: k, ...S } = d,
          y = no(S);
        return ((y.children = l.all(d)), y);
      }
      return no(d);
    }
    return (l.options.unknownHandler || dv)(l, d, p);
  }
  function u(d) {
    const p = [];
    if ("children" in d) {
      const f = d.children;
      let h = -1;
      for (; ++h < f.length; ) {
        const w = l.one(f[h], d);
        if (w) {
          if (
            h &&
            f[h - 1].type === "break" &&
            (!Array.isArray(w) && w.type === "text" && (w.value = e1(w.value)),
            !Array.isArray(w) && w.type === "element")
          ) {
            const k = w.children[0];
            k && k.type === "text" && (k.value = e1(k.value));
          }
          Array.isArray(w) ? p.push(...w) : p.push(w);
        }
      }
    }
    return p;
  }
}
function cv(e, t) {
  e.position && (t.position = $y(e));
}
function uv(e, t) {
  let n = t;
  if (e && e.data) {
    const i = e.data.hName,
      r = e.data.hChildren,
      s = e.data.hProperties;
    if (typeof i == "string")
      if (n.type === "element") n.tagName = i;
      else {
        const o = "children" in n ? n.children : [n];
        n = { type: "element", tagName: i, properties: {}, children: o };
      }
    (n.type === "element" && s && Object.assign(n.properties, no(s)),
      "children" in n &&
        n.children &&
        r !== null &&
        r !== void 0 &&
        (n.children = r));
  }
  return n;
}
function dv(e, t) {
  const n = t.data || {},
    i =
      "value" in t && !(Ml.call(n, "hProperties") || Ml.call(n, "hChildren"))
        ? { type: "text", value: t.value }
        : {
            type: "element",
            tagName: "div",
            properties: {},
            children: e.all(t),
          };
  return (e.patch(t, i), e.applyData(t, i));
}
function pv(e, t) {
  const n = [];
  let i = -1;
  for (
    t &&
    n.push({
      type: "text",
      value: `
`,
    });
    ++i < e.length;
  )
    (i &&
      n.push({
        type: "text",
        value: `
`,
      }),
      n.push(e[i]));
  return (
    t &&
      e.length > 0 &&
      n.push({
        type: "text",
        value: `
`,
      }),
    n
  );
}
function e1(e) {
  let t = 0,
    n = e.charCodeAt(t);
  for (; n === 9 || n === 32; ) (t++, (n = e.charCodeAt(t)));
  return e.slice(t);
}
function t1(e, t) {
  const n = lv(e, t),
    i = n.one(e, void 0),
    r = Y8(n),
    s = Array.isArray(i)
      ? { type: "root", children: i }
      : i || { type: "root", children: [] };
  return (
    r &&
      s.children.push(
        {
          type: "text",
          value: `
`,
        },
        r,
      ),
    s
  );
}
function hv(e, t) {
  return e && "run" in e
    ? async function (n, i) {
        const r = t1(n, { file: i, ...t });
        await e.run(r, i);
      }
    : function (n, i) {
        return t1(n, { file: i, ...(e || t) });
      };
}
function n1(e) {
  if (e) throw e;
}
var Ns = Object.prototype.hasOwnProperty,
  pf = Object.prototype.toString,
  i1 = Object.defineProperty,
  r1 = Object.getOwnPropertyDescriptor,
  s1 = function (t) {
    return typeof Array.isArray == "function"
      ? Array.isArray(t)
      : pf.call(t) === "[object Array]";
  },
  o1 = function (t) {
    if (!t || pf.call(t) !== "[object Object]") return !1;
    var n = Ns.call(t, "constructor"),
      i =
        t.constructor &&
        t.constructor.prototype &&
        Ns.call(t.constructor.prototype, "isPrototypeOf");
    if (t.constructor && !n && !i) return !1;
    var r;
    for (r in t);
    return typeof r > "u" || Ns.call(t, r);
  },
  a1 = function (t, n) {
    i1 && n.name === "__proto__"
      ? i1(t, n.name, {
          enumerable: !0,
          configurable: !0,
          value: n.newValue,
          writable: !0,
        })
      : (t[n.name] = n.newValue);
  },
  l1 = function (t, n) {
    if (n === "__proto__")
      if (Ns.call(t, n)) {
        if (r1) return r1(t, n).value;
      } else return;
    return t[n];
  },
  fv = function e() {
    var t,
      n,
      i,
      r,
      s,
      o,
      l = arguments[0],
      c = 1,
      u = arguments.length,
      d = !1;
    for (
      typeof l == "boolean" && ((d = l), (l = arguments[1] || {}), (c = 2)),
        (l == null || (typeof l != "object" && typeof l != "function")) &&
          (l = {});
      c < u;
      ++c
    )
      if (((t = arguments[c]), t != null))
        for (n in t)
          ((i = l1(l, n)),
            (r = l1(t, n)),
            l !== r &&
              (d && r && (o1(r) || (s = s1(r)))
                ? (s
                    ? ((s = !1), (o = i && s1(i) ? i : []))
                    : (o = i && o1(i) ? i : {}),
                  a1(l, { name: n, newValue: e(d, o, r) }))
                : typeof r < "u" && a1(l, { name: n, newValue: r })));
    return l;
  };
const sa = Il(fv);
function jl(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function mv() {
  const e = [],
    t = { run: n, use: i };
  return t;
  function n(...r) {
    let s = -1;
    const o = r.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    l(null, ...r);
    function l(c, ...u) {
      const d = e[++s];
      let p = -1;
      if (c) {
        o(c);
        return;
      }
      for (; ++p < r.length; )
        (u[p] === null || u[p] === void 0) && (u[p] = r[p]);
      ((r = u), d ? gv(d, l)(...u) : o(null, ...u));
    }
  }
  function i(r) {
    if (typeof r != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + r);
    return (e.push(r), t);
  }
}
function gv(e, t) {
  let n;
  return i;
  function i(...o) {
    const l = e.length > o.length;
    let c;
    l && o.push(r);
    try {
      c = e.apply(this, o);
    } catch (u) {
      const d = u;
      if (l && n) throw d;
      return r(d);
    }
    l ||
      (c && c.then && typeof c.then == "function"
        ? c.then(s, r)
        : c instanceof Error
          ? r(c)
          : s(c));
  }
  function r(o, ...l) {
    n || ((n = !0), t(o, ...l));
  }
  function s(o) {
    r(null, o);
  }
}
const kt = { basename: yv, dirname: vv, extname: wv, join: xv, sep: "/" };
function yv(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  zr(e);
  let n = 0,
    i = -1,
    r = e.length,
    s;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; r--; )
      if (e.codePointAt(r) === 47) {
        if (s) {
          n = r + 1;
          break;
        }
      } else i < 0 && ((s = !0), (i = r + 1));
    return i < 0 ? "" : e.slice(n, i);
  }
  if (t === e) return "";
  let o = -1,
    l = t.length - 1;
  for (; r--; )
    if (e.codePointAt(r) === 47) {
      if (s) {
        n = r + 1;
        break;
      }
    } else
      (o < 0 && ((s = !0), (o = r + 1)),
        l > -1 &&
          (e.codePointAt(r) === t.codePointAt(l--)
            ? l < 0 && (i = r)
            : ((l = -1), (i = o))));
  return (n === i ? (i = o) : i < 0 && (i = e.length), e.slice(n, i));
}
function vv(e) {
  if ((zr(e), e.length === 0)) return ".";
  let t = -1,
    n = e.length,
    i;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (i) {
        t = n;
        break;
      }
    } else i || (i = !0);
  return t < 0
    ? e.codePointAt(0) === 47
      ? "/"
      : "."
    : t === 1 && e.codePointAt(0) === 47
      ? "//"
      : e.slice(0, t);
}
function wv(e) {
  zr(e);
  let t = e.length,
    n = -1,
    i = 0,
    r = -1,
    s = 0,
    o;
  for (; t--; ) {
    const l = e.codePointAt(t);
    if (l === 47) {
      if (o) {
        i = t + 1;
        break;
      }
      continue;
    }
    (n < 0 && ((o = !0), (n = t + 1)),
      l === 46 ? (r < 0 ? (r = t) : s !== 1 && (s = 1)) : r > -1 && (s = -1));
  }
  return r < 0 || n < 0 || s === 0 || (s === 1 && r === n - 1 && r === i + 1)
    ? ""
    : e.slice(r, n);
}
function xv(...e) {
  let t = -1,
    n;
  for (; ++t < e.length; )
    (zr(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]));
  return n === void 0 ? "." : kv(n);
}
function kv(e) {
  zr(e);
  const t = e.codePointAt(0) === 47;
  let n = Sv(e, !t);
  return (
    n.length === 0 && !t && (n = "."),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"),
    t ? "/" + n : n
  );
}
function Sv(e, t) {
  let n = "",
    i = 0,
    r = -1,
    s = 0,
    o = -1,
    l,
    c;
  for (; ++o <= e.length; ) {
    if (o < e.length) l = e.codePointAt(o);
    else {
      if (l === 47) break;
      l = 47;
    }
    if (l === 47) {
      if (!(r === o - 1 || s === 1))
        if (r !== o - 1 && s === 2) {
          if (
            n.length < 2 ||
            i !== 2 ||
            n.codePointAt(n.length - 1) !== 46 ||
            n.codePointAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((c = n.lastIndexOf("/")), c !== n.length - 1)) {
                (c < 0
                  ? ((n = ""), (i = 0))
                  : ((n = n.slice(0, c)),
                    (i = n.length - 1 - n.lastIndexOf("/"))),
                  (r = o),
                  (s = 0));
                continue;
              }
            } else if (n.length > 0) {
              ((n = ""), (i = 0), (r = o), (s = 0));
              continue;
            }
          }
          t && ((n = n.length > 0 ? n + "/.." : ".."), (i = 2));
        } else
          (n.length > 0
            ? (n += "/" + e.slice(r + 1, o))
            : (n = e.slice(r + 1, o)),
            (i = o - r - 1));
      ((r = o), (s = 0));
    } else l === 46 && s > -1 ? s++ : (s = -1);
  }
  return n;
}
function zr(e) {
  if (typeof e != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const Cv = { cwd: bv };
function bv() {
  return "/";
}
function Al(e) {
  return !!(
    e !== null &&
    typeof e == "object" &&
    "href" in e &&
    e.href &&
    "protocol" in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function Ev(e) {
  if (typeof e == "string") e = new URL(e);
  else if (!Al(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`",
    );
    throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw ((t.code = "ERR_INVALID_URL_SCHEME"), t);
  }
  return Nv(e);
}
function Nv(e) {
  if (e.hostname !== "") {
    const i = new TypeError(
      'File URL host must be "localhost" or empty on darwin',
    );
    throw ((i.code = "ERR_INVALID_FILE_URL_HOST"), i);
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const i = t.codePointAt(n + 2);
      if (i === 70 || i === 102) {
        const r = new TypeError(
          "File URL path must not include encoded / characters",
        );
        throw ((r.code = "ERR_INVALID_FILE_URL_PATH"), r);
      }
    }
  return decodeURIComponent(t);
}
const oa = ["history", "path", "basename", "stem", "extname", "dirname"];
class hf {
  constructor(t) {
    let n;
    (t
      ? Al(t)
        ? (n = { path: t })
        : typeof t == "string" || Tv(t)
          ? (n = { value: t })
          : (n = t)
      : (n = {}),
      (this.cwd = "cwd" in n ? "" : Cv.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
    let i = -1;
    for (; ++i < oa.length; ) {
      const s = oa[i];
      s in n &&
        n[s] !== void 0 &&
        n[s] !== null &&
        (this[s] = s === "history" ? [...n[s]] : n[s]);
    }
    let r;
    for (r in n) oa.includes(r) || (this[r] = n[r]);
  }
  get basename() {
    return typeof this.path == "string" ? kt.basename(this.path) : void 0;
  }
  set basename(t) {
    (la(t, "basename"),
      aa(t, "basename"),
      (this.path = kt.join(this.dirname || "", t)));
  }
  get dirname() {
    return typeof this.path == "string" ? kt.dirname(this.path) : void 0;
  }
  set dirname(t) {
    (c1(this.basename, "dirname"),
      (this.path = kt.join(t || "", this.basename)));
  }
  get extname() {
    return typeof this.path == "string" ? kt.extname(this.path) : void 0;
  }
  set extname(t) {
    if ((aa(t, "extname"), c1(this.dirname, "extname"), t)) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = kt.join(this.dirname, this.stem + (t || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    (Al(t) && (t = Ev(t)),
      la(t, "path"),
      this.path !== t && this.history.push(t));
  }
  get stem() {
    return typeof this.path == "string"
      ? kt.basename(this.path, this.extname)
      : void 0;
  }
  set stem(t) {
    (la(t, "stem"),
      aa(t, "stem"),
      (this.path = kt.join(this.dirname || "", t + (this.extname || ""))));
  }
  fail(t, n, i) {
    const r = this.message(t, n, i);
    throw ((r.fatal = !0), r);
  }
  info(t, n, i) {
    const r = this.message(t, n, i);
    return ((r.fatal = void 0), r);
  }
  message(t, n, i) {
    const r = new Ie(t, n, i);
    return (
      this.path && ((r.name = this.path + ":" + r.name), (r.file = this.path)),
      (r.fatal = !1),
      this.messages.push(r),
      r
    );
  }
  toString(t) {
    return this.value === void 0
      ? ""
      : typeof this.value == "string"
        ? this.value
        : new TextDecoder(t || void 0).decode(this.value);
  }
}
function aa(e, t) {
  if (e && e.includes(kt.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + kt.sep + "`",
    );
}
function la(e, t) {
  if (!e) throw new Error("`" + t + "` cannot be empty");
}
function c1(e, t) {
  if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Tv(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "byteLength" in e &&
    "byteOffset" in e
  );
}
const Pv = function (e) {
    const i = this.constructor.prototype,
      r = i[e],
      s = function () {
        return r.apply(s, arguments);
      };
    return (Object.setPrototypeOf(s, i), s);
  },
  Mv = {}.hasOwnProperty;
class Qc extends Pv {
  constructor() {
    (super("copy"),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = mv()));
  }
  copy() {
    const t = new Qc();
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const i = this.attachers[n];
      t.use(...i);
    }
    return (t.data(sa(!0, {}, this.namespace)), t);
  }
  data(t, n) {
    return typeof t == "string"
      ? arguments.length === 2
        ? (da("data", this.frozen), (this.namespace[t] = n), this)
        : (Mv.call(this.namespace, t) && this.namespace[t]) || void 0
      : t
        ? (da("data", this.frozen), (this.namespace = t), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const t = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...i] = this.attachers[this.freezeIndex];
      if (i[0] === !1) continue;
      i[0] === !0 && (i[0] = void 0);
      const r = n.call(t, ...i);
      typeof r == "function" && this.transformers.use(r);
    }
    return (
      (this.frozen = !0),
      (this.freezeIndex = Number.POSITIVE_INFINITY),
      this
    );
  }
  parse(t) {
    this.freeze();
    const n = ss(t),
      i = this.parser || this.Parser;
    return (ca("parse", i), i(String(n), n));
  }
  process(t, n) {
    const i = this;
    return (
      this.freeze(),
      ca("process", this.parser || this.Parser),
      ua("process", this.compiler || this.Compiler),
      n ? r(void 0, n) : new Promise(r)
    );
    function r(s, o) {
      const l = ss(t),
        c = i.parse(l);
      i.run(c, l, function (d, p, f) {
        if (d || !p || !f) return u(d);
        const h = p,
          w = i.stringify(h, f);
        (Iv(w) ? (f.value = w) : (f.result = w), u(d, f));
      });
      function u(d, p) {
        d || !p ? o(d) : s ? s(p) : n(void 0, p);
      }
    }
  }
  processSync(t) {
    let n = !1,
      i;
    return (
      this.freeze(),
      ca("processSync", this.parser || this.Parser),
      ua("processSync", this.compiler || this.Compiler),
      this.process(t, r),
      d1("processSync", "process", n),
      i
    );
    function r(s, o) {
      ((n = !0), n1(s), (i = o));
    }
  }
  run(t, n, i) {
    (u1(t), this.freeze());
    const r = this.transformers;
    return (
      !i && typeof n == "function" && ((i = n), (n = void 0)),
      i ? s(void 0, i) : new Promise(s)
    );
    function s(o, l) {
      const c = ss(n);
      r.run(t, c, u);
      function u(d, p, f) {
        const h = p || t;
        d ? l(d) : o ? o(h) : i(void 0, h, f);
      }
    }
  }
  runSync(t, n) {
    let i = !1,
      r;
    return (this.run(t, n, s), d1("runSync", "run", i), r);
    function s(o, l) {
      (n1(o), (r = l), (i = !0));
    }
  }
  stringify(t, n) {
    this.freeze();
    const i = ss(n),
      r = this.compiler || this.Compiler;
    return (ua("stringify", r), u1(t), r(t, i));
  }
  use(t, ...n) {
    const i = this.attachers,
      r = this.namespace;
    if ((da("use", this.frozen), t != null))
      if (typeof t == "function") c(t, n);
      else if (typeof t == "object") Array.isArray(t) ? l(t) : o(t);
      else throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function s(u) {
      if (typeof u == "function") c(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [d, ...p] = u;
          c(d, p);
        } else o(u);
      else throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function o(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither",
        );
      (l(u.plugins),
        u.settings && (r.settings = sa(!0, r.settings, u.settings)));
    }
    function l(u) {
      let d = -1;
      if (u != null)
        if (Array.isArray(u))
          for (; ++d < u.length; ) {
            const p = u[d];
            s(p);
          }
        else throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function c(u, d) {
      let p = -1,
        f = -1;
      for (; ++p < i.length; )
        if (i[p][0] === u) {
          f = p;
          break;
        }
      if (f === -1) i.push([u, ...d]);
      else if (d.length > 0) {
        let [h, ...w] = d;
        const k = i[f][1];
        (jl(k) && jl(h) && (h = sa(!0, k, h)), (i[f] = [u, h, ...w]));
      }
    }
  }
}
const jv = new Qc().freeze();
function ca(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function ua(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function da(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.",
    );
}
function u1(e) {
  if (!jl(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function d1(e, t, n) {
  if (!n)
    throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function ss(e) {
  return Av(e) ? e : new hf(e);
}
function Av(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Iv(e) {
  return typeof e == "string" || Dv(e);
}
function Dv(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "byteLength" in e &&
    "byteOffset" in e
  );
}
const Lv = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
  p1 = [],
  h1 = { allowDangerousHtml: !0 },
  Rv = /^(https?|ircs?|mailto|xmpp)$/i,
  _v = [
    { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
    { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement",
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements",
    },
    { from: "className", id: "remove-classname" },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements",
    },
    { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
    { from: "includeElementIndex", id: "#remove-includeelementindex" },
    {
      from: "includeNodeIndex",
      id: "change-includenodeindex-to-includeelementindex",
    },
    { from: "linkTarget", id: "remove-linktarget" },
    {
      from: "plugins",
      id: "change-plugins-to-remarkplugins",
      to: "remarkPlugins",
    },
    { from: "rawSourcePos", id: "#remove-rawsourcepos" },
    {
      from: "renderers",
      id: "change-renderers-to-components",
      to: "components",
    },
    { from: "source", id: "change-source-to-children", to: "children" },
    { from: "sourcePos", id: "#remove-sourcepos" },
    { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
    { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" },
  ];
function ff(e) {
  const t = zv(e),
    n = Ov(e);
  return Bv(t.runSync(t.parse(n), n), e);
}
function zv(e) {
  const t = e.rehypePlugins || p1,
    n = e.remarkPlugins || p1,
    i = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...h1 } : h1;
  return jv().use(v8).use(n).use(hv, i).use(t);
}
function Ov(e) {
  const t = e.children || "",
    n = new hf();
  return (typeof t == "string" && (n.value = t), n);
}
function Bv(e, t) {
  const n = t.allowedElements,
    i = t.allowElement,
    r = t.components,
    s = t.disallowedElements,
    o = t.skipHtml,
    l = t.unwrapDisallowed,
    c = t.urlTransform || Hv;
  for (const d of _v)
    Object.hasOwn(t, d.from) &&
      ("" +
        d.from +
        (d.to ? "use `" + d.to + "` instead" : "remove it") +
        Lv +
        d.id,
      void 0);
  return (
    df(e, u),
    Yy(e, {
      Fragment: a.Fragment,
      components: r,
      ignoreInvalidStyle: !0,
      jsx: a.jsx,
      jsxs: a.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function u(d, p, f) {
    if (d.type === "raw" && f && typeof p == "number")
      return (
        o
          ? f.children.splice(p, 1)
          : (f.children[p] = { type: "text", value: d.value }),
        p
      );
    if (d.type === "element") {
      let h;
      for (h in na)
        if (Object.hasOwn(na, h) && Object.hasOwn(d.properties, h)) {
          const w = d.properties[h],
            k = na[h];
          (k === null || k.includes(d.tagName)) &&
            (d.properties[h] = c(String(w || ""), h, d));
        }
    }
    if (d.type === "element") {
      let h = n ? !n.includes(d.tagName) : s ? s.includes(d.tagName) : !1;
      if (
        (!h && i && typeof p == "number" && (h = !i(d, p, f)),
        h && f && typeof p == "number")
      )
        return (
          l && d.children
            ? f.children.splice(p, 1, ...d.children)
            : f.children.splice(p, 1),
          p
        );
    }
  }
}
function Hv(e) {
  const t = e.indexOf(":"),
    n = e.indexOf("?"),
    i = e.indexOf("#"),
    r = e.indexOf("/");
  return t === -1 ||
    (r !== -1 && t > r) ||
    (n !== -1 && t > n) ||
    (i !== -1 && t > i) ||
    Rv.test(e.slice(0, t))
    ? e
    : "";
}
function Fv() {
  const [e, t] = E.useState([
      {
        id: 1,
        sender: "ai",
        text: "Hello. I am **InterView**. How can I assist you with your studies today?",
      },
    ]),
    [n, i] = E.useState(""),
    [r, s] = E.useState(!1),
    [o, l] = E.useState(!1),
    [c, u] = E.useState([]),
    d = E.useRef(null),
    p = "http://localhost:3001",
    f = window.SpeechRecognition || window.webkitSpeechRecognition,
    h = f ? new f() : null;
  (E.useEffect(() => {
    fetch("/knowledge_base.json")
      .then((m) => m.json())
      .then((m) => u(m))
      .catch((m) => console.error("KB Error:", m));
  }, []),
    E.useEffect(() => {
      var m;
      (m = d.current) == null || m.scrollIntoView({ behavior: "smooth" });
    }, [e]));
  const w = () => {
    if (!h) return alert("Browser does not support speech recognition.");
    o ? (h.stop(), l(!1)) : (h.start(), l(!0));
  };
  h &&
    ((h.onresult = (m) => {
      (i(m.results[0][0].transcript), l(!1));
    }),
    (h.onerror = () => l(!1)));
  const k = (m) => {
      const g = window.speechSynthesis;
      if (!g) return;
      const C = new SpeechSynthesisUtterance(m.replace(/[*#`]/g, ""));
      g.speak(C);
    },
    S = (m) => {
      if (!c.length) return "";
      const g = m
          .toLowerCase()
          .split(" ")
          .filter((N) => N.length > 3),
        C = [];
      return (
        c.forEach((N) => {
          let b = 0;
          (g.some((P) => N.title.toLowerCase().includes(P)) && (b = 1),
            b > 0 && C.push({ chunk: `(File: ${N.title})`, score: b }));
        }),
        C.slice(0, 3).map((N) => N.chunk).join(`
`)
      );
    },
    y = async () => {
      if (!n.trim()) return;
      const m = { id: Date.now(), sender: "user", text: n };
      (t((g) => [...g, m]), i(""), s(!0));
      try {
        const g = S(m.text),
          C = await fetch(`${p}/api/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: m.text, context: g }),
          });
        if (!C.ok) throw new Error(`Backend error: ${C.status}`);
        const N = await C.json();
        t((b) => [
          ...b,
          { id: Date.now() + 1, sender: "ai", text: N.response },
        ]);
      } catch (g) {
        console.error("Chat API Error:", g);
        const C = g.message || g.toString();
        t((N) => [
          ...N,
          {
            id: Date.now() + 1,
            sender: "ai",
            text: `Error: ${C}. Please make sure the backend server is running.`,
          },
        ]);
      } finally {
        s(!1);
      }
    };
  return a.jsxs("div", {
    className: "app-container",
    children: [
      a.jsx(Rr, {}),
      a.jsxs("div", {
        className: "chat-container",
        children: [
          a.jsx("div", {
            className: "chat-header",
            children: a.jsxs("div", {
              className: "chat-title-group",
              children: [
                a.jsx("div", {
                  className: "bot-avatar-large",
                  children: a.jsx(ci, { size: 24 }),
                }),
                a.jsxs("div", {
                  children: [
                    a.jsx("h1", {
                      style: {
                        fontSize: 16,
                        fontWeight: 600,
                        margin: 0,
                        color: "var(--text-main)",
                      },
                      children: "InterView",
                    }),
                    a.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 12,
                        color: "var(--text-muted)",
                      },
                      children: [
                        a.jsx("span", { className: "status-dot" }),
                        " Online",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          a.jsxs("div", {
            className: "messages-area",
            children: [
              e.map((m) =>
                a.jsxs(
                  "div",
                  {
                    className: `message-wrapper ${m.sender}`,
                    children: [
                      a.jsx("div", {
                        className: "message-avatar",
                        children:
                          m.sender === "ai"
                            ? a.jsx(ci, { size: 18 })
                            : a.jsx(O4, { size: 18 }),
                      }),
                      a.jsxs("div", {
                        className: "message-bubble",
                        children: [
                          m.sender === "ai" &&
                            a.jsx("button", {
                              className: "category-btn",
                              style: {
                                width: "auto",
                                padding: 4,
                                float: "right",
                                marginLeft: 8,
                              },
                              onClick: () => k(m.text),
                              children: a.jsx(V4, { size: 14 }),
                            }),
                          m.sender === "ai"
                            ? a.jsx(ff, { children: m.text })
                            : m.text,
                        ],
                      }),
                    ],
                  },
                  m.id,
                ),
              ),
              r &&
                a.jsxs("div", {
                  className: "message-wrapper ai",
                  children: [
                    a.jsx("div", {
                      className: "message-avatar",
                      children: a.jsx(ci, { size: 18 }),
                    }),
                    a.jsxs("div", {
                      className: "message-bubble",
                      style: { color: "var(--text-muted)" },
                      children: [
                        a.jsx(P0, {
                          className: "animate-spin",
                          size: 16,
                          style: { marginRight: 8 },
                        }),
                        " Thinking...",
                      ],
                    }),
                  ],
                }),
              a.jsx("div", { ref: d }),
            ],
          }),
          a.jsxs("div", {
            className: "input-area",
            children: [
              a.jsx("textarea", {
                value: n,
                onChange: (m) => i(m.target.value),
                onKeyDown: (m) => m.key === "Enter" && !m.shiftKey && y(),
                placeholder: "Ask a question...",
                rows: 1,
                className: "chat-input",
              }),
              a.jsx("button", {
                className: `voice-btn ${o ? "listening" : ""}`,
                onClick: w,
                children: a.jsx(d4, { size: 18 }),
              }),
              a.jsx("button", {
                className: "send-btn",
                onClick: y,
                disabled: r || !n.trim(),
                children: a.jsx(E4, { size: 18 }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Fe({
  children: e,
  variant: t = "primary",
  size: n = "medium",
  onClick: i,
  disabled: r = !1,
  className: s = "",
  ...o
}) {
  return a.jsx("button", {
    className: `btn btn-${t} btn-${n} ${s}`,
    onClick: i,
    disabled: r,
    ...o,
    children: e,
  });
}
const f1 = [
    { id: "dsa", name: "Data Structures", count: 35, difficulty: "High" },
    { id: "os", name: "Operating Systems", count: 25, difficulty: "Medium" },
    { id: "dbms", name: "DBMS & SQL", count: 25, difficulty: "Medium" },
    { id: "web", name: "Web Technologies", count: 27, difficulty: "Easy" },
    { id: "cn", name: "Computer Networks", count: 15, difficulty: "Medium" },
    {
      id: "aptitude",
      name: "General Aptitude",
      count: 15,
      difficulty: "Medium",
    },
  ],
  Uv = {
    dsa: [
      {
        id: 1,
        question:
          "What is the time complexity of searching in a balanced Binary Search Tree (BST)?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: 1,
        explanation:
          "In a balanced BST (like AVL or Red-Black tree), the height is log(n), making search operations logarithmic.",
      },
      {
        id: 2,
        question:
          "Which data structure is typically used to implement a recursive algorithm iteratively?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        answer: 1,
        explanation:
          "A Stack mimics the call stack used in recursion, allowing iterative implementation of DFS etc.",
      },
      {
        id: 3,
        question:
          "In specialized Graph algorithms, what is Dijkstra's algorithm used for?",
        options: [
          "Topological Sorting",
          "Shortest Path (Weighted)",
          "Minimum Spanning Tree",
          "Cycle Detection",
        ],
        answer: 1,
        explanation:
          "Dijkstra's is used for finding the shortest paths between nodes in a graph with non-negative edge weights.",
      },
      {
        id: 4,
        question: "What is the worst-case complexity of QuickSort?",
        options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        answer: 1,
        explanation:
          "QuickSort degrades to O(n²) when the pivot selection is poor (e.g., sorted array with first element pivot).",
      },
      {
        id: 5,
        question: "What is the space complexity of Merge Sort?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: 2,
        explanation:
          "Merge Sort requires O(n) auxiliary space for temporary arrays during the merge process.",
      },
      {
        id: 6,
        question: "Which traversal technique uses a Queue?",
        options: ["Preorder", "Inorder", "Postorder", "Level Order"],
        answer: 3,
        explanation:
          "Level Order (BFS) traversal uses a Queue to process nodes level by level.",
      },
      {
        id: 7,
        question: "What is a Hash Collision?",
        options: [
          "Two keys hashing to same index",
          "Array overflow",
          "Stack overflow",
          "Memory leak",
        ],
        answer: 0,
        explanation:
          "Hash collision occurs when two different keys produce the same hash value, requiring collision resolution.",
      },
      {
        id: 8,
        question: "Which algorithm is used for finding cycles in a graph?",
        options: ["Dijkstra", "DFS", "Merge Sort", "Binary Search"],
        answer: 1,
        explanation:
          "DFS with back edges detection is commonly used to find cycles in directed graphs.",
      },
      {
        id: 9,
        question: "What is the best case time complexity of Insertion Sort?",
        options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"],
        answer: 2,
        explanation:
          "When the array is already sorted, Insertion Sort only needs to scan once, making it O(n).",
      },
      {
        id: 10,
        question: "Which data structure is best for implementing LRU Cache?",
        options: [
          "Array",
          "Doubly Linked List + HashMap",
          "Stack",
          "Binary Tree",
        ],
        answer: 1,
        explanation:
          "LRU Cache requires O(1) access and update, achieved with HashMap for lookup and Doubly Linked List for ordering.",
      },
      {
        id: 11,
        question: "What is Dynamic Programming?",
        options: [
          "A sorting technique",
          "Breaking problem into overlapping subproblems",
          "A graph algorithm",
          "Memory allocation",
        ],
        answer: 1,
        explanation:
          "DP solves problems by breaking them into overlapping subproblems and storing results to avoid recomputation.",
      },
      {
        id: 12,
        question: "What is the height of a complete binary tree with n nodes?",
        options: ["n", "log n", "n/2", "2n"],
        answer: 1,
        explanation:
          "A complete binary tree has height of log₂(n), making operations logarithmic.",
      },
      {
        id: 13,
        question: "Which sorting algorithm is NOT stable?",
        options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Bubble Sort"],
        answer: 1,
        explanation:
          "Quick Sort does not preserve the relative order of equal elements, making it unstable.",
      },
      {
        id: 14,
        question: "What is a Trie data structure used for?",
        options: [
          "Sorting numbers",
          "String operations and prefix matching",
          "Graph traversal",
          "Memory management",
        ],
        answer: 1,
        explanation:
          "Trie (prefix tree) is ideal for string operations, autocomplete, and dictionary implementations.",
      },
      {
        id: 15,
        question:
          "What is the time complexity of finding the kth smallest element using Quick Select?",
        options: ["O(n log n)", "O(n²)", "O(n) average", "O(k log k)"],
        answer: 2,
        explanation:
          "Quick Select has average time complexity of O(n), though worst case is O(n²).",
      },
      {
        id: 16,
        question: "What does the Bellman-Ford algorithm detect?",
        options: [
          "Shortest path with negative weights",
          "Minimum spanning tree",
          "Topological order",
          "Strongly connected components",
        ],
        answer: 0,
        explanation:
          "Bellman-Ford can handle negative edge weights and detect negative cycles.",
      },
      {
        id: 17,
        question: "Which operation is NOT efficient in a standard array?",
        options: [
          "Random access",
          "Insertion at beginning",
          "Access by index",
          "Sequential traversal",
        ],
        answer: 1,
        explanation:
          "Inserting at the beginning requires shifting all elements, making it O(n).",
      },
      {
        id: 18,
        question: "What is a Min Heap property?",
        options: [
          "Parent > Children",
          "Parent < Children",
          "Sorted array",
          "FIFO order",
        ],
        answer: 1,
        explanation:
          "In a Min Heap, every parent node has a value less than or equal to its children.",
      },
      {
        id: 19,
        question: "Which algorithm uses greedy approach?",
        options: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "Tarjan's"],
        answer: 0,
        explanation:
          "Dijkstra's algorithm uses greedy approach by always selecting the nearest unvisited vertex.",
      },
      {
        id: 20,
        question:
          "What is the auxiliary space for in-place sorting algorithms?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        answer: 2,
        explanation:
          "In-place sorting algorithms use only O(1) extra space, modifying the input array directly.",
      },
      {
        id: 21,
        question:
          "What is the time complexity of building a heap from an array of n elements?",
        options: ["O(n log n)", "O(n)", "O(log n)", "O(n²)"],
        answer: 1,
        explanation:
          "Building a heap can be done in O(n) using the bottom-up approach.",
      },
      {
        id: 22,
        question:
          "Which data structure is used to check for balanced parentheses in an expression?",
        options: ["Queue", "Stack", "Tree", "Array"],
        answer: 1,
        explanation:
          "A Stack is ideal for tracking open parentheses and matching them with closing ones.",
      },
      {
        id: 23,
        question:
          "Which of these is an example of a Divide and Conquer algorithm?",
        options: [
          "Bubble Sort",
          "Selection Sort",
          "Merge Sort",
          "Insertion Sort",
        ],
        answer: 2,
        explanation:
          "Merge Sort recursively divides the array into halves and merges them, following Divide and Conquer.",
      },
      {
        id: 24,
        question:
          "What is the maximum number of edges in a directed graph with n nodes (no self-loops)?",
        options: ["n(n-1)/2", "n(n-1)", "n²", "2n"],
        answer: 1,
        explanation:
          "Each of the n nodes can have edges to the other n-1 nodes, so n*(n-1).",
      },
      {
        id: 25,
        question:
          "Which data structure is suitable for implementing a Priority Queue?",
        options: ["Array", "Linked List", "Heap", "Stack"],
        answer: 2,
        explanation:
          "A Heap provides efficient O(log n) insertions and O(log n) extraction of the minimum/maximum.",
      },
      {
        id: 26,
        question:
          "What is the primary advantage of a B-Tree over a Binary Search Tree?",
        options: [
          "Faster in-memory search",
          "Optimized for disk storage",
          "Simpler implementation",
          "Uses less memory",
        ],
        answer: 1,
        explanation:
          "B-Trees minimize disk I/O operations by storing multiple keys in a node, making them suitable for databases.",
      },
      {
        id: 27,
        question: "What is the best case time complexity of Bubble Sort?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
        answer: 0,
        explanation:
          "With an optimized flag for swaps, Bubble Sort is O(n) if the array is already sorted.",
      },
      {
        id: 28,
        question:
          "Which hashing technique handles collisions by using a linked list?",
        options: [
          "Open Addressing",
          "Chaining",
          "Linear Probing",
          "Double Hashing",
        ],
        answer: 1,
        explanation:
          "Chaining stores colliding elements in a linked list at the same index.",
      },
      {
        id: 29,
        question:
          "Which traversal is used to print nodes of a BST in sorted order?",
        options: ["Preorder", "Postorder", "Inorder", "Level Order"],
        answer: 2,
        explanation:
          "Inorder traversal of a BST visits nodes in non-decreasing (sorted) order.",
      },
      {
        id: 30,
        question:
          "What is the worst-case time complexity of DFS in a graph with V vertices and E edges?",
        options: ["O(V)", "O(E)", "O(V + E)", "O(V*E)"],
        answer: 2,
        explanation:
          "DFS visits every vertex and edge once in the worst case using an adjacency list.",
      },
      {
        id: 31,
        question: "Which data structure is used in Breadth-First Search (BFS)?",
        options: ["Stack", "Queue", "Heap", "Hash Map"],
        answer: 1,
        explanation: "BFS uses a Queue to explore neighbors level by level.",
      },
      {
        id: 32,
        question: "In a Red-Black Tree, what is the color of the root node?",
        options: ["Red", "Black", "Either Red or Black", "Green"],
        answer: 1,
        explanation:
          "One of the properties of a Red-Black Tree is that the root is always black.",
      },
      {
        id: 33,
        question: "What is the primary use of a disjoint-set data structure?",
        options: [
          "Sorting",
          "Shortest Path",
          "Grouping partitioned elements (Union-Find)",
          "Pattern Matching",
        ],
        answer: 2,
        explanation:
          "Disjoint-set (Union-Find) is used to track elements partitioned into disjoint sets, useful in Kruskal's algorithm.",
      },
      {
        id: 34,
        question: "Which algorithm finds the Minimum Spanning Tree?",
        options: ["Dijkstra's", "Kruskal's", "Floyd-Warshall", "Bellman-Ford"],
        answer: 1,
        explanation:
          "Kruskal's (and Prim's) algorithm is used to find the Minimum Spanning Tree of a graph.",
      },
      {
        id: 35,
        question: "What is the worst-case lookup time in a perfect Hash Table?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        answer: 0,
        answer: 0,
        explanation:
          "A perfect hash function maps each key to a distinct integer, ensuring no collisions and O(1) access.",
      },
    ],
    os: [
      {
        id: 1,
        question:
          "Which of the following is NOT a state in the process lifecycle?",
        options: ["Running", "Blocked", "Deleted", "Ready"],
        answer: 2,
        explanation:
          "Processes are 'Terminated', not 'Deleted'. Deleted usually refers to files.",
      },
      {
        id: 2,
        question: "What is 'Thrashing' in the context of OS memory management?",
        options: [
          "Excessive paging",
          "Disk failure",
          "CPU overheating",
          "Process deadlock",
        ],
        answer: 0,
        explanation:
          "Thrashing occurs when the OS spends more time swapping pages in/out of memory than executing processes.",
      },
      {
        id: 3,
        question: "Semaphore is a variable used for...?",
        options: [
          "Storing memory addresses",
          "Process Synchronization",
          "Deadlock creation",
          "File management",
        ],
        answer: 1,
        explanation:
          "Semaphores are synchronization primitives used to control access to common resources.",
      },
      {
        id: 4,
        question: "What is the primary purpose of virtual memory?",
        options: [
          "Increase CPU speed",
          "Allow processes to use more memory than physically available",
          "Encrypt data",
          "Backup files",
        ],
        answer: 1,
        explanation:
          "Virtual memory creates an illusion of large memory by using disk space to extend RAM.",
      },
      {
        id: 5,
        question: "Which scheduling algorithm can cause starvation?",
        options: [
          "Round Robin",
          "Priority Scheduling",
          "FCFS",
          "SJF with aging",
        ],
        answer: 1,
        explanation:
          "Priority Scheduling without aging can cause low-priority processes to starve indefinitely.",
      },
      {
        id: 6,
        question: "What is a deadlock?",
        options: [
          "CPU overload",
          "Two or more processes waiting indefinitely",
          "Memory leak",
          "File corruption",
        ],
        answer: 1,
        explanation:
          "Deadlock occurs when processes are blocked waiting for resources held by each other.",
      },
      {
        id: 7,
        question: "Which is NOT a condition for deadlock?",
        options: [
          "Mutual Exclusion",
          "Hold and Wait",
          "Preemption",
          "Circular Wait",
        ],
        answer: 2,
        explanation:
          "No Preemption is required for deadlock. Preemption actually prevents deadlock.",
      },
      {
        id: 8,
        question: "What does the kernel do?",
        options: [
          "Manages hardware resources",
          "Creates documents",
          "Runs web browsers",
          "Compiles code",
        ],
        answer: 0,
        explanation:
          "The kernel is the core OS component managing CPU, memory, I/O, and other resources.",
      },
      {
        id: 9,
        question: "What is context switching?",
        options: [
          "Changing tabs",
          "Saving and loading process state",
          "File transfer",
          "Network routing",
        ],
        answer: 1,
        explanation:
          "Context switching involves saving the state of one process and loading another for execution.",
      },
      {
        id: 10,
        question:
          "Which memory management technique divides memory into fixed-size blocks?",
        options: [
          "Segmentation",
          "Paging",
          "Dynamic allocation",
          "Virtual memory",
        ],
        answer: 1,
        explanation:
          "Paging divides physical and logical memory into fixed-size blocks called pages/frames.",
      },
      {
        id: 11,
        question:
          "What is the purpose of a Translation Lookaside Buffer (TLB)?",
        options: [
          "Store files",
          "Cache page table entries",
          "Manage processes",
          "Handle interrupts",
        ],
        answer: 1,
        explanation:
          "TLB is a cache for virtual-to-physical address translations to speed up memory access.",
      },
      {
        id: 12,
        question: "Which scheduling algorithm gives best average waiting time?",
        options: ["FCFS", "Shortest Job First", "Round Robin", "Priority"],
        answer: 1,
        explanation:
          "SJF gives optimal average waiting time when burst times are known in advance.",
      },
      {
        id: 13,
        question: "What is internal fragmentation?",
        options: [
          "Unused space within allocated blocks",
          "Gaps between allocated blocks",
          "Memory leak",
          "Buffer overflow",
        ],
        answer: 0,
        explanation:
          "Internal fragmentation occurs when allocated memory blocks have unused space inside them.",
      },
      {
        id: 14,
        question: "What is the dining philosophers problem demonstrating?",
        options: [
          "Sorting",
          "Deadlock and synchronization",
          "Scheduling",
          "Memory management",
        ],
        answer: 1,
        explanation:
          "It's a classic synchronization problem illustrating deadlock and resource allocation issues.",
      },
      {
        id: 15,
        question: "What is a race condition?",
        options: [
          "CPU speed test",
          "Multiple processes accessing shared data incorrectly",
          "Network latency",
          "Disk failure",
        ],
        answer: 1,
        explanation:
          "Race conditions occur when output depends on the sequence of uncontrolled events in concurrent execution.",
      },
      {
        id: 16,
        question: "What is Belady's Anomaly?",
        options: [
          "More frames leads to more page faults",
          "CPU slows down with more RAM",
          "Disk speed decreases with size",
          "Network lag increases with bandwidth",
        ],
        answer: 0,
        explanation:
          "Belady's Anomaly is a phenomenon in some page replacement algorithms (like FIFO) where increasing the number of page frames results in an increase in the number of page faults.",
      },
      {
        id: 17,
        question: "Which command lists running processes in Unix/Linux?",
        options: ["ls", "ps", "cd", "top -l"],
        answer: 1,
        explanation:
          "`ps` (process status) displays information about a selection of the active processes.",
      },
      {
        id: 18,
        question: "What is a Zombie process?",
        options: [
          "A virus",
          "A process that has completed but its entry remains in the process table",
          "A sleeping process",
          "A background daemon",
        ],
        answer: 1,
        explanation:
          "A zombie process is a process that has completed execution but still has an entry in the process table to report its exit status to the parent.",
      },
      {
        id: 19,
        question: "What is the main function of the 'init' process (PID 1)?",
        options: [
          "Kernel loading",
          "Parent of all processes",
          "Memory management",
          "File system check",
        ],
        answer: 1,
        explanation:
          "In Unix-based systems, `init` is the first process started by the kernel and is the parent of all other processes.",
      },
      {
        id: 20,
        question: "Which type of kernel is Linux?",
        options: [
          "Microkernel",
          "Monolithic Kernel",
          "Hybrid Kernel",
          "Exokernel",
        ],
        answer: 1,
        explanation:
          "Linux is a monolithic kernel, where the entire operating system runs in kernel space.",
      },
      {
        id: 21,
        question: "What is 'Spooling'?",
        options: [
          "Simultaneous Peripheral Operations On-line",
          "System Performance Optimization",
          "Storage Pool management",
          "Security Protocol",
        ],
        answer: 0,
        explanation:
          "Spooling puts data for I/O devices (like printers) into a temporary storage area (buffer) so the device can process it at its own speed.",
      },
      {
        id: 22,
        question: "Which lock allows multiple readers but only one writer?",
        options: ["Mutex", "Spinlock", "Read-Write Lock", "Binary Semaphore"],
        answer: 2,
        explanation:
          "Read-Write locks allow concurrent access for read-only operations, while write operations require exclusive access.",
      },
      {
        id: 23,
        question: "What is the Banker's Algorithm used for?",
        options: [
          "Sorting bank accounts",
          "Deadlock Avoidance",
          "Memory allocation",
          "Process scheduling",
        ],
        answer: 1,
        explanation:
          "The Banker's algorithm tests for safety by simulating the allocation for predetermined maximum possible amounts of all resources, avoiding unsafe states.",
      },
      {
        id: 24,
        question: "What is 'Swapping' in OS?",
        options: [
          "Variables exchange",
          "Moving processes between main memory and disk",
          "Changing user context",
          "Replacing hardware",
        ],
        answer: 1,
        explanation:
          "Swapping is a mechanism in which a process can be swapped temporarily out of main memory to a backing store, and then brought back into memory.",
      },
      {
        id: 25,
        question: "What does 'Sudo' stand for?",
        options: [
          "SuperUser DO",
          "System User DO",
          "Secure User Domain",
          "Standard User Default Option",
        ],
        answer: 0,
        explanation:
          "Sudo stands for 'SuperUser DO', allowing a permitted user to execute a command as the superuser or another user.",
      },
    ],
    dbms: [
      {
        id: 1,
        question: "Which normal form removes transitive dependencies?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: 2,
        explanation:
          "3NF ensures that non-key attributes are not dependent on other non-key attributes (transitive dependency).",
      },
      {
        id: 2,
        question: "ACID properties stand for...?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Availability, Consistency, Isolation, Durability",
          "Atomicity, Concurrency, Isolation, Database",
          "Atomicity, Consistency, Integration, Durability",
        ],
        answer: 0,
        explanation:
          "These are the standard properties that guarantee database transactions are processed reliably.",
      },
      {
        id: 3,
        question: "What does a PRIMARY KEY ensure?",
        options: [
          "Uniqueness and NOT NULL",
          "Only uniqueness",
          "Only NOT NULL",
          "Foreign key constraint",
        ],
        answer: 0,
        explanation:
          "PRIMARY KEY uniquely identifies each record and automatically enforces NOT NULL constraint.",
      },
      {
        id: 4,
        question: "Which SQL clause is used to filter grouped data?",
        options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
        answer: 1,
        explanation:
          "HAVING filters groups after GROUP BY, while WHERE filters rows before grouping.",
      },
      {
        id: 5,
        question: "What is a FOREIGN KEY?",
        options: [
          "Primary key in another table",
          "Unique constraint",
          "Link between two tables",
          "Index type",
        ],
        answer: 2,
        explanation:
          "FOREIGN KEY establishes and enforces a link between data in two tables.",
      },
      {
        id: 6,
        question: "Which join returns all rows from both tables?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
        answer: 3,
        explanation:
          "FULL OUTER JOIN returns all rows from both tables, with NULLs where there's no match.",
      },
      {
        id: 7,
        question: "What is database normalization?",
        options: [
          "Backup process",
          "Organizing data to reduce redundancy",
          "Indexing",
          "Encryption",
        ],
        answer: 1,
        explanation:
          "Normalization organizes data to minimize redundancy and dependency issues.",
      },
      {
        id: 8,
        question: "Which isolation level prevents dirty reads?",
        options: [
          "READ UNCOMMITTED",
          "READ COMMITTED",
          "REPEATABLE READ",
          "All except READ UNCOMMITTED",
        ],
        answer: 3,
        explanation:
          "Dirty reads only occur at READ UNCOMMITTED level; all higher levels prevent them.",
      },
      {
        id: 9,
        question: "What is an index in a database?",
        options: [
          "Backup file",
          "Data structure for faster retrieval",
          "User account",
          "Log file",
        ],
        answer: 1,
        explanation:
          "Index is a data structure (usually B-tree) that improves query performance.",
      },
      {
        id: 10,
        question: "What does COMMIT do in a transaction?",
        options: [
          "Rollback changes",
          "Save changes permanently",
          "Delete data",
          "Create backup",
        ],
        answer: 1,
        explanation:
          "COMMIT permanently saves all transaction changes to the database.",
      },
      {
        id: 11,
        question: "What is a view in SQL?",
        options: [
          "Physical table",
          "Virtual table from query",
          "Index",
          "Trigger",
        ],
        answer: 1,
        explanation:
          "A view is a virtual table based on a SELECT query, not storing data physically.",
      },
      {
        id: 12,
        question: "Which is faster: DELETE or TRUNCATE?",
        options: ["DELETE", "TRUNCATE", "Same speed", "Depends on data"],
        answer: 1,
        explanation:
          "TRUNCATE is faster as it doesn't log individual row deletions and can't be rolled back easily.",
      },
      {
        id: 13,
        question: "What is a trigger?",
        options: [
          "Backup command",
          "Automatic procedure on events",
          "Index type",
          "Join operation",
        ],
        answer: 1,
        explanation:
          "Trigger automatically executes in response to INSERT, UPDATE, or DELETE events.",
      },
      {
        id: 14,
        question: "What does CAP theorem state?",
        options: [
          "Can achieve all three: Consistency, Availability, Partition tolerance",
          "Can achieve only two of three",
          "Relates to SQL syntax",
          "About database size",
        ],
        answer: 1,
        explanation:
          "CAP theorem states distributed systems can satisfy only 2 of 3: Consistency, Availability, Partition tolerance.",
      },
      {
        id: 15,
        question: "What is database sharding?",
        options: [
          "Backup method",
          "Horizontal partitioning across servers",
          "Vertical partitioning",
          "Index optimization",
        ],
        answer: 1,
        explanation:
          "Sharding distributes data across multiple servers horizontally for scalability.",
      },
      {
        id: 16,
        question: "What does `UNION` do in SQL?",
        options: [
          "Joins tables",
          "Combines result sets of two queries and removes duplicates",
          "Combines result sets keeping duplicates",
          "Sorts data",
        ],
        answer: 1,
        explanation:
          "`UNION` combines the result sets of two or more SELECT statements and removes duplicate rows. `UNION ALL` keeps duplicates.",
      },
      {
        id: 17,
        question: "Which of these is a NoSQL database?",
        options: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
        answer: 2,
        explanation:
          "MongoDB is a document-oriented NoSQL database, while the others are RDBMS.",
      },
      {
        id: 18,
        question: "What is the purpose of the `DISTINCT` keyword?",
        options: [
          "Sort results",
          "Retrieve unique records",
          "Count records",
          "Group records",
        ],
        answer: 1,
        explanation:
          "`SELECT DISTINCT` is used to return only distinct (different) values.",
      },
      {
        id: 19,
        question:
          "Which constraint ensures that all values in a column are different?",
        options: ["NOT NULL", "UNIQUE", "CHECK", "DEFAULT"],
        answer: 1,
        explanation:
          "The `UNIQUE` constraint ensures that all values in a column are different.",
      },
      {
        id: 20,
        question: "What is the command to create a new database?",
        options: [
          "MAKE DATABASE",
          "NEW DATABASE",
          "CREATE DATABASE",
          "ADD DATABASE",
        ],
        answer: 2,
        explanation: "The standard SQL command is `CREATE DATABASE dbname;`.",
      },
      {
        id: 21,
        question: "What is an Entity-Relationship (ER) model used for?",
        options: [
          "Query optimization",
          "Conceptual database design",
          "Data backup",
          "User permission",
        ],
        answer: 1,
        explanation:
          "The ER model is describing the data requirements for a system in a simple, abstract way, often used in conceptual design.",
      },
      {
        id: 22,
        question: "What does `COUNT(*)` return?",
        options: [
          "Number of distinct values",
          "Number of columns",
          "Number of rows in the table",
          "Number of NULL values",
        ],
        answer: 2,
        explanation:
          "`COUNT(*)` returns the total number of rows in the table, including those with NULL values.",
      },
      {
        id: 23,
        question:
          "Which type of lock prevents other users from reading or writing?",
        options: [
          "Shared Lock",
          "Exclusive Lock",
          "Update Lock",
          "Intent Lock",
        ],
        answer: 1,
        explanation:
          "An Exclusive Lock (X Lock) blocks all other transactions from reading or modifying the resource.",
      },
      {
        id: 24,
        question:
          "What is the specialized language used to query a relational database?",
        options: ["HTML", "XML", "SQL", "Java"],
        answer: 2,
        explanation:
          "SQL (Structured Query Language) is the standard language for relational database management systems.",
      },
      {
        id: 25,
        question: "What does the `LIKE` operator do?",
        options: [
          "Compares numbers",
          "Searches for a specified pattern in a column",
          "Joins tables",
          "Sorts data",
        ],
        answer: 1,
        explanation:
          "`LIKE` is used in a WHERE clause to search for a specified pattern (using wildcards like % and _) in a column.",
      },
    ],
    web: [
      {
        id: 1,
        question: "What does the Virtual DOM in React do?",
        options: [
          "Directly updates the HTML",
          "Minimizes direct DOM manipulation",
          "Is slower than real DOM",
          "Compiles JS to C++",
        ],
        answer: 1,
        explanation:
          "React updates the Virtual DOM first, compares it with the previous state (diffing), and only updates changed elements in the real DOM.",
      },
      {
        id: 2,
        question: "What is the purpose of useState in React?",
        options: [
          "Manage component state",
          "Make API calls",
          "Style components",
          "Route navigation",
        ],
        answer: 0,
        explanation:
          "useState is a Hook that lets you add state variables to functional components.",
      },
      {
        id: 3,
        question: "What does REST stand for?",
        options: [
          "Relative State Transfer",
          "Representational State Transfer",
          "Remote System Testing",
          "Resource State Template",
        ],
        answer: 1,
        explanation:
          "REST is an architectural style for designing networked applications using stateless communication.",
      },
      {
        id: 4,
        question: "Which HTTP method is idempotent?",
        options: ["POST", "GET", "PATCH", "All of the above"],
        answer: 1,
        explanation:
          "GET, PUT, DELETE are idempotent (same result on multiple calls), but POST is not.",
      },
      {
        id: 5,
        question: "What is CORS?",
        options: [
          "Database system",
          "Cross-Origin Resource Sharing security",
          "CSS framework",
          "API protocol",
        ],
        answer: 1,
        explanation:
          "CORS is a security feature that allows/restricts web pages to request resources from different domains.",
      },
      {
        id: 6,
        question: "What is the box model in CSS?",
        options: [
          "Animation technique",
          "Content, Padding, Border, Margin",
          "Layout grid",
          "Flexbox alternative",
        ],
        answer: 1,
        explanation:
          "The CSS box model consists of content, padding, border, and margin around elements.",
      },
      {
        id: 7,
        question: "What does useEffect do in React?",
        options: [
          "Create animations",
          "Handle side effects",
          "Style components",
          "Validate forms",
        ],
        answer: 1,
        explanation:
          "useEffect lets you perform side effects like data fetching, subscriptions, or DOM updates.",
      },
      {
        id: 8,
        question: "What is the difference between let and const?",
        options: [
          "No difference",
          "const cannot be reassigned",
          "let is global",
          "const is faster",
        ],
        answer: 1,
        explanation:
          "const creates immutable bindings (cannot reassign), while let allows reassignment.",
      },
      {
        id: 9,
        question: "What is event delegation?",
        options: [
          "Removing events",
          "Handling events on parent instead of children",
          "Creating custom events",
          "Preventing default behavior",
        ],
        answer: 1,
        explanation:
          "Event delegation leverages event bubbling to handle events at a parent level for efficiency.",
      },
      {
        id: 10,
        question: "What is the purpose of webpack?",
        options: [
          "Database",
          "Module bundler",
          "Testing framework",
          "CSS preprocessor",
        ],
        answer: 1,
        explanation:
          "Webpack bundles JavaScript modules and assets for optimized deployment.",
      },
      {
        id: 11,
        question: "What is a Promise in JavaScript?",
        options: [
          "Loop type",
          "Object for async operations",
          "Array method",
          "Event listener",
        ],
        answer: 1,
        explanation:
          "Promise represents eventual completion (or failure) of an asynchronous operation.",
      },
      {
        id: 12,
        question: "What does async/await do?",
        options: [
          "Makes code slower",
          "Simplifies Promise handling",
          "Creates threads",
          "Blocks execution",
        ],
        answer: 1,
        explanation:
          "async/await provides syntactic sugar for working with Promises in a synchronous-like manner.",
      },
      {
        id: 13,
        question: "What does HTML stand for?",
        options: [
          "HyperText Machine Language",
          "HyperText Markup Language",
          "HighText Markup Language",
          "HyperTool Markup Language",
        ],
        answer: 1,
        explanation:
          "HTML stands for HyperText Markup Language, the standard markup language for documents designed to be displayed in a web browser.",
      },
      {
        id: 14,
        question: "Which CSS property changes the text color?",
        options: ["text-color", "color", "font-color", "text-font"],
        answer: 1,
        explanation:
          "The `color` property is used to set the color of the text.",
      },
      {
        id: 15,
        question: "What is the default display value of a `<div>` element?",
        options: ["inline", "block", "inline-block", "flex"],
        answer: 1,
        explanation:
          "A `<div>` is a block-level element, meaning it takes up the full width available.",
      },
      {
        id: 16,
        question:
          "Which JavaScript function converts a JSON string into an object?",
        options: [
          "JSON.stringify()",
          "JSON.parse()",
          "JSON.object()",
          "JSON.convert()",
        ],
        answer: 1,
        explanation:
          "`JSON.parse()` takes a JSON string and transforms it into a JavaScript object.",
      },
      {
        id: 17,
        question: "What represents the 'Cascade' in CSS?",
        options: [
          "The color scheme",
          "The order of rule application",
          "The grid layout",
          "Animation flow",
        ],
        answer: 1,
        explanation:
          "The Cascade determines which CSS rules apply based on importance, specificity, and source order.",
      },
      {
        id: 18,
        question: "What is the purpose of the <head> tag?",
        options: [
          "Main content",
          "Metadata and links",
          "Footer info",
          "Navigation",
        ],
        answer: 1,
        explanation:
          "The `<head>` element searches as a container for metadata (title, scripts, style sheets, meta info) that isn't displayed on the page.",
      },
      {
        id: 19,
        question:
          "Which unit is relative to the font-size of the root element?",
        options: ["em", "rem", "px", "%"],
        answer: 1,
        explanation:
          "`rem` stands for 'root em' and is relative to the font-size of the root element (<html>).",
      },
      {
        id: 20,
        question: "What is a Closure in JavaScript?",
        options: [
          "Block scope",
          "A function bundled with its lexical environment",
          "Error handling",
          "Class method",
        ],
        answer: 1,
        explanation:
          "A closure gives you access to an outer function's scope from an inner function, even after the outer function has closed.",
      },
      {
        id: 21,
        question: "Which HTML5 tag is used for semantic navigation?",
        options: ["<navigate>", "<nav>", "<menu>", "<header>"],
        answer: 1,
        explanation:
          "The `<nav>` tag is used to define a set of navigation links.",
      },
      {
        id: 22,
        question: "What is the purpose of 'use strict' in JavaScript?",
        options: [
          "Enforce strict types",
          "Enforce stricter parsing and error handling",
          "Make code run faster",
          "Allow legacy features",
        ],
        answer: 1,
        explanation:
          "'use strict' enables strict mode, which catches common coding bloopers and prevents the use of relatively 'unsafe' actions.",
      },
      {
        id: 23,
        question: "Which status code indicates 'Not Found'?",
        options: ["200", "500", "404", "301"],
        answer: 2,
        explanation:
          "404 Not Found indicates that the server cannot find the requested resource.",
      },
      {
        id: 24,
        question: "What is LocalStorage?",
        options: [
          "Server-side storage",
          "Client-side storage with no expiration",
          "Session-based storage",
          "Cookie alternative",
        ],
        answer: 1,
        explanation:
          "LocalStorage allows web applications to store key-value pairs in the browser with no expiration date.",
      },
      {
        id: 25,
        question: "What is the Grid System in CSS?",
        options: [
          "Table layout",
          "2D layout system",
          "1D layout system",
          "Float based layout",
        ],
        answer: 1,
        explanation:
          "CSS Grid Layout is a 2-dimensional system for handling both columns and rows.",
      },
      {
        id: 26,
        question: "Which directive allows embedding dynamic values in JSX?",
        options: ["{{ }}", "<% %>", "{ }", "${ }"],
        answer: 2,
        explanation:
          "In JSX, curly braces `{ }` are used to embed JavaScript expressions.",
      },
      {
        id: 27,
        question: "What is Semantic HTML?",
        options: [
          "Uses only <div>",
          "Uses tags that convey meaning (e.g., <article>, <section>)",
          "Uses colorful tags",
          "Uses XML syntax",
        ],
        answer: 1,
        explanation:
          "Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer.",
      },
    ],
    cn: [
      {
        id: 1,
        question: "Which layer of the OSI model is responsible for routing?",
        options: [
          "Physical Layer",
          "Data Link Layer",
          "Network Layer",
          "Transport Layer",
        ],
        answer: 2,
        explanation:
          "The Network Layer (Layer 3) handles routing and forwarding os packets across networks (e.g., IP).",
      },
      {
        id: 2,
        question: "What is the size of an IPv4 address?",
        options: ["32 bits", "64 bits", "128 bits", "16 bits"],
        answer: 0,
        explanation:
          "IPv4 addresses are 32-bit numbers, typically displayed in dot-decimal notation.",
      },
      {
        id: 3,
        question: "Which protocol is connection-oriented?",
        options: ["UDP", "IP", "TCP", "ICMP"],
        answer: 2,
        explanation:
          "TCP (Transmission Control Protocol) is connection-oriented, ensuring reliable, ordered, and error-checked delivery.",
      },
      {
        id: 4,
        question: "What does DNS stand for?",
        options: [
          "Data Network Service",
          "Domain Name System",
          "Digital Network Security",
          "Domain Number System",
        ],
        answer: 1,
        explanation:
          "DNS (Domain Name System) translates human-readable domain names (like google.com) to IP addresses.",
      },
      {
        id: 5,
        question: "Which device operates at the Data Link Layer?",
        options: ["Router", "Hub", "Switch", "Repeater"],
        answer: 2,
        explanation:
          "Switches operate at Layer 2 (Data Link Layer) and use MAC addresses to forward frames.",
      },
      {
        id: 6,
        question: "What is the purpose of ARP?",
        options: [
          "Resolve IP to MAC",
          "Resolve MAC to IP",
          "Route packets",
          "Encrypt data",
        ],
        answer: 0,
        explanation:
          "ARP (Address Resolution Protocol) maps an IP address to a physical machine address (MAC).",
      },
      {
        id: 7,
        question: "Which port is used by HTTP?",
        options: ["21", "22", "80", "443"],
        answer: 2,
        explanation:
          "HTTP traffic typically uses port 80, while HTTPS uses port 443.",
      },
      {
        id: 8,
        question: "What is a Subnet Mask used for?",
        options: [
          "To hide the IP address",
          "To identify the network and host portions of an IP",
          "To encrypt the packet",
          "To route data",
        ],
        answer: 1,
        explanation:
          "A subnet mask separates the IP address into the network address and the host address.",
      },
      {
        id: 9,
        question: "Which layer ensures reliable data transmission?",
        options: ["Application", "Presentation", "Session", "Transport"],
        answer: 3,
        explanation:
          "The Transport Layer (Layer 4) manages end-to-end communication and reliability (e.g., via TCP).",
      },
      {
        id: 10,
        question: "What is latency?",
        options: [
          "Data transfer rate",
          "Time taken for data to travel from source to destination",
          "Packet loss",
          "Bandwidth width",
        ],
        answer: 1,
        explanation:
          "Latency is the delay before a transfer of data begins following an instruction for its transfer.",
      },
      {
        id: 11,
        question: "What is localhost IP address?",
        options: ["192.168.1.1", "127.0.0.1", "10.0.0.1", "0.0.0.0"],
        answer: 1,
        explanation:
          "127.0.0.1 is the standard loopback address for the local computer (localhost).",
      },
      {
        id: 12,
        question: "What does DHCP do?",
        options: [
          "Resolves domain names",
          "Assigns IP addresses dynamically",
          "Encrypts traffic",
          "Filters packets",
        ],
        answer: 1,
        explanation:
          "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configuration to devices.",
      },
      {
        id: 13,
        question: "Which command checks connectivity between two nodes?",
        options: ["ipconfig", "ping", "netstat", "nslookup"],
        answer: 1,
        explanation:
          "`ping` sends ICMP Echo Request messages to verify connectivity to a target host.",
      },
      {
        id: 14,
        question: "What is the range of Class C IP addresses?",
        options: [
          "1.0.0.0 to 126.0.0.0",
          "128.0.0.0 to 191.255.0.0",
          "192.0.0.0 to 223.255.255.0",
          "224.0.0.0 to 239.0.0.0",
        ],
        answer: 2,
        explanation:
          "Class C addresses range from 192.0.0.0 to 223.255.255.255, commonly used for small local networks.",
      },
      {
        id: 15,
        question: "What is a Firewall?",
        options: [
          "A physical wall",
          "Network security system monitoring traffic",
          "A virus",
          "A routing protocol",
        ],
        answer: 1,
        explanation:
          "A firewall monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
      },
    ],
    aptitude: [
      {
        id: 1,
        question:
          "If a train 100m long crosses a bridge 200m long in 20 seconds, what is the speed of the train?",
        options: ["36 km/hr", "45 km/hr", "54 km/hr", "72 km/hr"],
        answer: 2,
        explanation:
          "Total distance = 100 + 200 = 300m. Time = 20s. Speed = 300/20 = 15 m/s. 15 * 18/5 = 54 km/hr.",
      },
      {
        id: 2,
        question:
          "A generic work can be done by A in 10 days and B in 15 days. If they work together, how many days will it take?",
        options: ["5 days", "6 days", "8 days", "7 days"],
        answer: 1,
        explanation:
          "A's 1 day work = 1/10. B's 1 day work = 1/15. Together = 1/10 + 1/15 = (3+2)/30 = 5/30 = 1/6. So 6 days.",
      },
      {
        id: 3,
        question:
          "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
        options: ["(1/3)", "(1/8)", "(2/8)", "(1/16)"],
        answer: 1,
        explanation:
          "Each number is half of the previous number. (1/4) / 2 = 1/8.",
      },
      {
        id: 4,
        question: "Which word does NOT belong with the others?",
        options: ["Tyre", "Steering wheel", "Engine", "Car"],
        answer: 3,
        explanation:
          "Tyre, steering wheel, and engine are parts of a car. Car is the whole vehicle.",
      },
      {
        id: 5,
        question: "If 10% of x is 20, what is x?",
        options: ["200", "20", "2", "2000"],
        answer: 0,
        explanation: "0.10 * x = 20 => x = 20 / 0.10 = 200.",
      },
      {
        id: 6,
        question:
          "Introducing a boy, a girl said, 'He is the son of the daughter of the father of my uncle.' How is the boy related to the girl?",
        options: ["Brother", "Nephew", "Uncle", "Son-in-law"],
        answer: 0,
        explanation:
          "Father of uncle -> Grandfather. Daughter of grandfather -> Mother (or Aunt). Son of Mother -> Brother.",
      },
      {
        id: 7,
        question:
          "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had how many?",
        options: ["588 apples", "600 apples", "672 apples", "700 apples"],
        answer: 3,
        explanation: "Remaining 60% = 420. Total = 420 / 0.60 = 700.",
      },
      {
        id: 8,
        question: "SCD, TEF, UGH, ____, WKL. What comes in the blank?",
        options: ["CMN", "UJI", "VIJ", "IJT"],
        answer: 2,
        explanation:
          "First letter: S, T, U, V, W. Second: C, E, G, I, K. Third: D, F, H, J, L. So VIJ.",
      },
      {
        id: 9,
        question: "The average of first 50 natural numbers is?",
        options: ["25.30", "25.5", "25.00", "12.25"],
        answer: 1,
        explanation:
          "Sum of n natural numbers = n(n+1)/2. Average = (n+1)/2. (50+1)/2 = 25.5.",
      },
      {
        id: 10,
        question:
          "A works twice as fast as B. If B can complete a work in 12 days independently, the number of days in which A and B can together finish the work in?",
        options: ["4 days", "6 days", "8 days", "18 days"],
        answer: 0,
        explanation:
          "B takes 12 days, so A takes 6 days. Together: 1/12 + 1/6 = 3/12 = 1/4. So 4 days.",
      },
      {
        id: 11,
        question:
          "Pointing to a photograph of a boy Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
        options: ["Brother", "Uncle", "Cousin", "Father"],
        answer: 3,
        explanation:
          "Only son of my mother = Suresh himself. Son of Suresh = The boy. So Suresh is the Father.",
      },
      {
        id: 12,
        question: "Which number replaces the question mark? 3, 5, 8, 13, 21, ?",
        options: ["30", "32", "34", "35"],
        answer: 2,
        explanation: "Fibonacci series: 3+5=8, 5+8=13, 8+13=21, 13+21=34.",
      },
      {
        id: 13,
        question: "Find the odd one out: 3, 5, 7, 12, 13, 17, 19",
        options: ["19", "17", "13", "12"],
        answer: 3,
        explanation: "All except 12 are prime numbers.",
      },
      {
        id: 14,
        question: "If CUP = 40, then KITE = ?",
        options: ["10", "20", "30", "45"],
        answer: 3,
        explanation:
          "C=3, U=21, P=16 -> 3+21+16 = 40. K=11, I=9, T=20, E=5 -> 11+9+20+5 = 45.",
      },
      {
        id: 15,
        question:
          "Cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
        options: ["15", "16", "18", "25"],
        answer: 1,
        explanation:
          "CP of 20 = SP of x. Profit = 25%. (20-x)/x = 1/4 -> 80 - 4x = x -> 5x = 80 -> x = 16.",
      },
    ],
  },
  pa = (e) => Uv[e] || [];
function Wv() {
  var g;
  const [e, t] = E.useState(null),
    [n, i] = E.useState(0),
    [r, s] = E.useState(null),
    [o, l] = E.useState(0),
    [c, u] = E.useState(!1),
    [d, p] = E.useState(!1),
    f = {
      dsa: a.jsx(vl, { size: 32 }),
      os: a.jsx(T4, { size: 32 }),
      dbms: a.jsx(Pn, { size: 32 }),
      web: a.jsx(K3, { size: 32 }),
      cn: a.jsx(f4, { size: 32 }),
      aptitude: a.jsx(k3, { size: 32 }),
    },
    h = (C) => {
      (t(C), i(0), l(0), p(!1), u(!1), s(null));
    },
    w = (C) => {
      c || s(C);
    },
    k = () => {
      if (r === null) return;
      (pa(e)[n].answer === r && l((b) => b + 1), u(!0));
    },
    S = () => {
      const C = pa(e);
      n + 1 < C.length ? (i((N) => N + 1), s(null), u(!1)) : p(!0);
    },
    y = e ? pa(e) : [],
    m = y[n];
  return a.jsxs("div", {
    className: "app-container",
    children: [
      a.jsx(gn, {
        title: "Interactive Quizzes",
        subtitle: "Test your knowledge across core engineering domains.",
      }),
      !e &&
        a.jsx("div", {
          className: "grid-3",
          children: f1.map((C) =>
            a.jsxs(
              "div",
              {
                className: "dense-card",
                style: { cursor: "pointer", transition: "all 0.2s" },
                onClick: () => h(C.id),
                children: [
                  a.jsxs("div", {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 16,
                    },
                    children: [
                      a.jsx("div", {
                        style: {
                          color: "var(--primary)",
                          background: "var(--primary-light)",
                          padding: 12,
                          borderRadius: 8,
                        },
                        children: f[C.id] || a.jsx(vl, {}),
                      }),
                      a.jsx("span", {
                        className: `badge ${C.difficulty === "High" ? "badge-orange" : "badge-green"}`,
                        children: C.difficulty,
                      }),
                    ],
                  }),
                  a.jsx("h3", {
                    style: {
                      margin: "0 0 4px 0",
                      fontSize: 16,
                      color: "var(--text-main)",
                    },
                    children: C.name,
                  }),
                  a.jsxs("p", {
                    style: {
                      margin: 0,
                      fontSize: 13,
                      color: "var(--text-muted)",
                    },
                    children: [C.count, " questions available"],
                  }),
                ],
              },
              C.id,
            ),
          ),
        }),
      e &&
        !d &&
        m &&
        a.jsxs("div", {
          style: { maxWidth: 800, margin: "0 auto" },
          children: [
            a.jsxs("div", {
              style: {
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 12,
              },
              children: [
                a.jsx(Fe, {
                  variant: "ghost",
                  size: "small",
                  onClick: () => t(null),
                  children: "Exit",
                }),
                a.jsx("div", {
                  style: {
                    flexGrow: 1,
                    height: 4,
                    background: "var(--border-main)",
                    borderRadius: 2,
                  },
                  children: a.jsx("div", {
                    style: {
                      width: `${(n / y.length) * 100}%`,
                      height: "100%",
                      background: "var(--primary)",
                      borderRadius: 2,
                    },
                  }),
                }),
                a.jsxs("span", {
                  style: {
                    fontSize: 12,
                    color: "var(--text-muted)",
                    fontFamily: "monospace",
                  },
                  children: [n + 1, " / ", y.length],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "dense-card",
              style: { padding: 40 },
              children: [
                a.jsx("span", {
                  className: "badge badge-blue",
                  style: { marginBottom: 16 },
                  children:
                    (g = f1.find((C) => C.id === e)) == null ? void 0 : g.name,
                }),
                a.jsx("h2", {
                  style: {
                    fontSize: 20,
                    lineHeight: 1.5,
                    marginBottom: 32,
                    marginTop: 12,
                  },
                  children: m.question,
                }),
                a.jsx("div", {
                  style: { display: "flex", flexDirection: "column", gap: 12 },
                  children: m.options.map((C, N) => {
                    let b = "var(--border-main)",
                      P = "var(--bg-surface)";
                    return (
                      c
                        ? N === m.answer
                          ? ((b = "#10b981"), (P = "rgba(16, 185, 129, 0.05)"))
                          : N === r &&
                            ((b = "#ef4444"), (P = "rgba(239, 68, 68, 0.05)"))
                        : r === N &&
                          ((b = "var(--primary)"), (P = "var(--bg-subtle)")),
                      a.jsxs(
                        "div",
                        {
                          onClick: () => w(N),
                          style: {
                            padding: 16,
                            border: `1px solid ${b}`,
                            background: P,
                            borderRadius: 6,
                            cursor: c ? "default" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            fontSize: 14,
                            transition: "all 0.2s",
                            color: "var(--text-main)",
                          },
                          children: [
                            a.jsxs("div", {
                              style: {
                                width: 18,
                                height: 18,
                                borderRadius: "50%",
                                border: `1px solid ${r === N || (c && N === m.answer) ? b : "var(--text-faint)"}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              },
                              children: [
                                c &&
                                  N === m.answer &&
                                  a.jsx("div", {
                                    style: {
                                      width: 10,
                                      height: 10,
                                      borderRadius: "50%",
                                      background: "#10b981",
                                    },
                                  }),
                                !c &&
                                  r === N &&
                                  a.jsx("div", {
                                    style: {
                                      width: 10,
                                      height: 10,
                                      borderRadius: "50%",
                                      background: "var(--primary)",
                                    },
                                  }),
                              ],
                            }),
                            C,
                          ],
                        },
                        N,
                      )
                    );
                  }),
                }),
                a.jsxs("div", {
                  style: {
                    marginTop: 32,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                  children: [
                    c &&
                      a.jsxs("p", {
                        style: {
                          margin: 0,
                          fontSize: 13,
                          color: "var(--text-muted)",
                        },
                        children: [
                          a.jsx("span", {
                            style: { fontWeight: 600 },
                            children: "Explanation:",
                          }),
                          " ",
                          m.explanation,
                        ],
                      }),
                    a.jsx("div", {
                      style: { display: "flex", gap: 12, marginLeft: "auto" },
                      children: c
                        ? a.jsxs(Fe, {
                            variant: "primary",
                            onClick: S,
                            children: [
                              n + 1 === y.length ? "Finish Quiz" : "Next",
                              " ",
                              a.jsx(br, { size: 16 }),
                            ],
                          })
                        : a.jsx(Fe, {
                            variant: "primary",
                            onClick: k,
                            disabled: r === null,
                            children: "Check Answer",
                          }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      d &&
        a.jsx("div", {
          style: { maxWidth: 500, margin: "40px auto", textAlign: "center" },
          children: a.jsxs("div", {
            className: "dense-card",
            style: { padding: 40 },
            children: [
              a.jsx("div", {
                style: {
                  width: 64,
                  height: 64,
                  background: "rgba(16, 185, 129, 0.1)",
                  color: "#10b981",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px auto",
                },
                children: a.jsx(Ac, { size: 32 }),
              }),
              a.jsx("h2", {
                style: { marginBottom: 8 },
                children: "Quiz Complete",
              }),
              a.jsxs("p", {
                style: { color: "var(--text-muted)", marginBottom: 32 },
                children: [
                  "You scored ",
                  a.jsx("strong", { children: o }),
                  " out of ",
                  y.length,
                ],
              }),
              a.jsx(Fe, {
                variant: "primary",
                onClick: () => t(null),
                children: "Back to Topics",
              }),
            ],
          }),
        }),
    ],
  });
}
const ha = {
  "SDE-1": [
    {
      week: 1,
      topic: "Arrays & Hashing",
      focus: "Two Pointers, Sliding Window, Prefix Sum",
      resources: "LeetCode Blind 75",
    },
    {
      week: 2,
      topic: "Linked Lists & Stacks",
      focus: "Fast/Slow Pointers, Monotonic Stack",
      resources: "Cracking the Coding Interview Ch.2",
    },
    {
      week: 3,
      topic: "Trees & Graphs",
      focus: "DFS, BFS, Binary Search Trees",
      resources: "NeetCode Trees Playlist",
    },
    {
      week: 4,
      topic: "Dynamic Programming",
      focus: "1D DP, Knapsack, LCS",
      resources: "Aditya Verma DP Series",
    },
    {
      week: 5,
      topic: "System Design Basics",
      focus: "Scalability, Load Balancers, Caching",
      resources: "System Design Primer (GitHub)",
    },
    {
      week: 6,
      topic: "Mock Interviews",
      focus: "Full-stack problems, Behavioral prep",
      resources: "Pramp, Interviewing.io",
    },
  ],
  "Data Analyst": [
    {
      week: 1,
      topic: "SQL Fundamentals",
      focus: "Joins, Aggregations, Window Functions",
      resources: "Mode Analytics SQL Tutorial",
    },
    {
      week: 2,
      topic: "Python for Data",
      focus: "Pandas, NumPy, Data Cleaning",
      resources: "Kaggle Learn",
    },
    {
      week: 3,
      topic: "Statistics & Probability",
      focus: "Hypothesis Testing, Distributions",
      resources: "Khan Academy Statistics",
    },
    {
      week: 4,
      topic: "Data Visualization",
      focus: "Matplotlib, Seaborn, Tableau",
      resources: "Storytelling with Data (Book)",
    },
    {
      week: 5,
      topic: "Case Studies",
      focus: "A/B Testing, Cohort Analysis",
      resources: "DataCamp Projects",
    },
    {
      week: 6,
      topic: "Interview Prep",
      focus: "SQL challenges, Take-home assignments",
      resources: "StrataScratch",
    },
  ],
  "Frontend Dev": [
    {
      week: 1,
      topic: "JavaScript Deep Dive",
      focus: "Closures, Promises, Event Loop",
      resources: "JavaScript.info",
    },
    {
      week: 2,
      topic: "React Fundamentals",
      focus: "Hooks, Context, Component Design",
      resources: "React Docs (Beta)",
    },
    {
      week: 3,
      topic: "State Management",
      focus: "Redux, Zustand, React Query",
      resources: "Egghead.io Redux Course",
    },
    {
      week: 4,
      topic: "CSS & Responsive Design",
      focus: "Flexbox, Grid, Mobile-first",
      resources: "CSS Tricks, Kevin Powell",
    },
    {
      week: 5,
      topic: "Performance & Accessibility",
      focus: "Lighthouse, ARIA, Code Splitting",
      resources: "web.dev",
    },
    {
      week: 6,
      topic: "Build Projects",
      focus: "Portfolio site, E-commerce clone",
      resources: "Frontend Mentor",
    },
  ],
  "Backend Engineer": [
    {
      week: 1,
      topic: "REST API Design",
      focus: "HTTP Methods, Status Codes, Versioning",
      resources: "RESTful API Design (Book)",
    },
    {
      week: 2,
      topic: "Database Design",
      focus: "Normalization, Indexing, Transactions",
      resources: "Use The Index, Luke",
    },
    {
      week: 3,
      topic: "Authentication & Security",
      focus: "JWT, OAuth, HTTPS",
      resources: "OWASP Top 10",
    },
    {
      week: 4,
      topic: "Microservices Basics",
      focus: "Service Communication, API Gateway",
      resources: "Martin Fowler Articles",
    },
    {
      week: 5,
      topic: "Caching & Queues",
      focus: "Redis, RabbitMQ, Message Brokers",
      resources: "Redis University",
    },
    {
      week: 6,
      topic: "System Design",
      focus: "Design Twitter, URL Shortener",
      resources: "Grokking System Design",
    },
  ],
};
function Vv() {
  const [e, t] = E.useState(""),
    [n, i] = E.useState(!1),
    r = () => {
      e && i(!0);
    },
    s = ha[e] || ha["SDE-1"];
  return a.jsxs("div", {
    className: "app-container",
    children: [
      a.jsx(gn, {
        title: "Personalized Study Roadmap",
        subtitle:
          "Generate a structured 6-week plan tailored to your target role",
      }),
      n
        ? a.jsx("div", {
            style: { maxWidth: 900, margin: "0 auto" },
            children: a.jsxs("div", {
              className: "dense-card",
              style: { padding: 40 },
              children: [
                a.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 32,
                  },
                  children: [
                    a.jsxs("div", {
                      children: [
                        a.jsxs("h2", {
                          style: {
                            fontSize: 20,
                            margin: "0 0 8px 0",
                            color: "var(--text-main)",
                          },
                          children: [e, " Preparation Plan"],
                        }),
                        a.jsxs("div", {
                          style: {
                            display: "flex",
                            gap: 16,
                            fontSize: 13,
                            color: "var(--text-muted)",
                          },
                          children: [
                            a.jsx("span", { children: "📅 Duration: 6 Weeks" }),
                            a.jsx("span", { children: "⚡ Intensity: High" }),
                            a.jsx("span", {
                              children: "🎯 Focus: Interview Ready",
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs(Fe, {
                      variant: "ghost",
                      size: "small",
                      children: [a.jsx(Ic, { size: 16 }), " Export"],
                    }),
                  ],
                }),
                a.jsx("div", {
                  style: { display: "flex", flexDirection: "column", gap: 16 },
                  children: s.map((o) =>
                    a.jsxs(
                      "div",
                      {
                        className: "week-card",
                        children: [
                          a.jsx("div", {
                            className: "week-number",
                            children: o.week,
                          }),
                          a.jsxs("div", {
                            className: "week-content",
                            style: { flexGrow: 1 },
                            children: [
                              a.jsxs("h4", {
                                children: ["Week ", o.week, ": ", o.topic],
                              }),
                              a.jsxs("p", {
                                style: { marginBottom: 8 },
                                children: [
                                  a.jsx("strong", { children: "Focus:" }),
                                  " ",
                                  o.focus,
                                ],
                              }),
                              a.jsx("p", {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 6,
                                },
                                children: a.jsx("span", {
                                  className: "badge badge-blue",
                                  children: o.resources,
                                }),
                              }),
                            ],
                          }),
                          a.jsxs("button", {
                            style: {
                              background: "transparent",
                              border: "1px solid var(--border-main)",
                              borderRadius: 4,
                              padding: "6px 12px",
                              cursor: "pointer",
                              fontSize: 12,
                              color: "var(--text-muted)",
                            },
                            children: [
                              a.jsx(Ac, {
                                size: 14,
                                style: { marginRight: 4 },
                              }),
                              " Mark Done",
                            ],
                          }),
                        ],
                      },
                      o.week,
                    ),
                  ),
                }),
                a.jsxs("div", {
                  style: {
                    marginTop: 32,
                    padding: 20,
                    background: "var(--bg-subtle)",
                    borderRadius: 8,
                    textAlign: "center",
                  },
                  children: [
                    a.jsx("p", {
                      style: {
                        margin: "0 0 12px 0",
                        fontSize: 13,
                        color: "var(--text-muted)",
                      },
                      children: "Need a different plan?",
                    }),
                    a.jsx(Fe, {
                      variant: "ghost",
                      onClick: () => i(!1),
                      children: "Regenerate Roadmap",
                    }),
                  ],
                }),
              ],
            }),
          })
        : a.jsx("div", {
            style: { maxWidth: 600, margin: "0 auto" },
            children: a.jsxs("div", {
              className: "dense-card",
              style: { padding: 40 },
              children: [
                a.jsx("h3", {
                  style: { margin: "0 0 16px 0", fontSize: 16 },
                  children: "Select your target role",
                }),
                a.jsx("div", {
                  className: "plan-selector",
                  children: Object.keys(ha).map((o) =>
                    a.jsx(
                      "button",
                      {
                        className: `role-chip ${e === o ? "active" : ""}`,
                        onClick: () => t(o),
                        children: o,
                      },
                      o,
                    ),
                  ),
                }),
                a.jsx("input", {
                  type: "text",
                  placeholder: "Or type a custom role...",
                  value: e,
                  onChange: (o) => t(o.target.value),
                  style: {
                    width: "100%",
                    padding: 12,
                    border: "1px solid var(--border-main)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--bg-subtle)",
                    color: "var(--text-main)",
                    fontSize: 14,
                    marginBottom: 24,
                  },
                }),
                a.jsxs(Fe, {
                  variant: "primary",
                  size: "large",
                  onClick: r,
                  disabled: !e,
                  children: ["Generate Roadmap ", a.jsx(br, { size: 18 })],
                }),
              ],
            }),
          }),
    ],
  });
}
const qv = {
    "dynamic-programming": {
      id: "dynamic-programming",
      title: "Dynamic Programming Patterns",
      difficulty: "Hard",
      category: "DSA",
      time: "45 min",
      description:
        "Master the most common DP patterns used in FAANG interviews",
      overview:
        "Dynamic Programming (DP) is an optimization technique for solving complex problems by breaking them down into simpler subproblems. It is essential for top-tier coding interviews, as it tests your ability to optimize recursive solutions.",
      keyPoints: [
        "Understanding Overlapping Subproblems & Optimal Substructure",
        "Mastering Recursion + Memoization (Top-Down)",
        "Mastering Iterative Tabulation (Bottom-Up)",
        "Space Optimization Techniques (State Compression)",
      ],
      sections: [
        {
          title: "1. Introduction to DP",
          content: `Dynamic Programming is more than just "recursion with caching". It's a way of thinking about problems in terms of states and transitions.

**Core Concepts:**

1. **Optimal Substructure:**
The optimal solution to the main problem can be constructed from optimal solutions of its subproblems.
*Example: Shortest Path in a graph.*

2. **Overlapping Subproblems:**
The problem can be broken down into subproblems which are reused several times.
*Example: Fibonacci numbers where fib(n) calls fib(n-1) and fib(n-2).*

**The DP Framework:**
1. Define the state (what defines a subproblem?)
2. Formulate the recurrence relation (transitions)
3. Identify base cases
4. Decide on Memoization or Tabulation`,
        },
        {
          title: "2. Top 5 DP Patterns",
          content: `**1. 1D DP (Fibonacci Style)**
Problems where the current state depends on the previous few states.
- **Problems**: Climbing Stairs, House Robber, Domino Tiling
- **Relation**: \`dp[i] = dp[i-1] + dp[i-2]\`

**2. 0/1 Knapsack Pattern**
Deciding whether to include an item or not to maximize value under constraint.
- **Problems**: Subset Sum, Partition Equal Subset Sum
- **State**: \`dp[index][current_capacity]\`

**3. Unbounded Knapsack**
Similar to 0/1, but items can be picked multiple times.
- **Problems**: Coin Change, Rod Cutting
- **Relation**: Iterate through all items for every capacity.

**4. Longest Common Subsequence (LCS)**
Finding the longest subsequence present in two strings.
- **Problems**: Edit Distance, Longest Palindromic Subsequence
- **Relation**: If characters match: \`1 + dp[i-1][j-1]\`, else \`max(dp[i-1][j], dp[i][j-1])\`

**5. Longest Increasing Subsequence (LIS)**
Finding the longest subsequence where elements are sorted.
- **Problems**: Russian Doll Envelopes
- **Optimized**: Can be solved in O(N log N) using patience sorting.`,
        },
        {
          title: "3. Deep Dive: State Compression",
          content:
            "Often, you don't need the entire DP table.\n\n**Space Optimization:**\nIn Fibonacci, `dp[i]` only depends on `dp[i-1]` and `dp[i-2]`.\nInstead of storing array `dp[n]` (Space O(N)), we can just keep two variables `prev` and `curr` (Space O(1)).\n\n**When to Apply:**\n- If `dp[i][j]` depends only on row `i-1`, you can reduce space from O(N*M) to O(M) using two rows (current and previous).",
        },
        {
          title: "4. Common Interview Questions",
          content: `**Q1: How do you decide between Greedy and DP?**
- **Answer**: Greedy makes the locally optimal choice at each step. If this leads to the global optimum (proof required), use Greedy (faster). If you need to explore *all* possibilities or if local choice doesn't guarantee global optimum, use DP.

**Q2: What is the difference between Top-Down and Bottom-Up?**
- **Top-Down (Memoization)**: Recursive, lazy evaluation (only computes needed states), prone to stack overflow.
- **Bottom-Up (Tabulation)**: Iterative, eager evaluation (computes all states), better space optimization.

**Q3: Can every recursive solution be optimized with DP?**
- **Answer**: No. Only if it has *Overlapping Subproblems*. If subproblems are unique (like Merge Sort), DP adds no value.`,
        },
        {
          title: "5. Advanced Concepts: Profile DP",
          content: `**Profile Dynamic Programming** (Broken Profile DP) is a technique used to solve tiling-like problems on a grid.
- **State**: \`dp[col][mask]\`.
- **Mask**: Represents the state of the current column (filled/empty).
- **Transitions**: Try all ways to fill the current column compatible with the previous column's mask.
- **Complexity**: O(N * 2^M) where M is row count (usually small, <= 10).`,
        },
      ],
      practiceProblems: [
        {
          title: "Climbing Stairs",
          difficulty: "Easy",
          link: "https://leetcode.com/problems/climbing-stairs/",
        },
        {
          title: "House Robber",
          difficulty: "Medium",
          link: "https://leetcode.com/problems/house-robber/",
        },
        {
          title: "Coin Change",
          difficulty: "Medium",
          link: "https://leetcode.com/problems/coin-change/",
        },
        {
          title: "Longest Increasing Subsequence",
          difficulty: "Medium",
          link: "https://leetcode.com/problems/longest-increasing-subsequence/",
        },
        {
          title: "Edit Distance",
          difficulty: "Hard",
          link: "https://leetcode.com/problems/edit-distance/",
        },
        {
          title: "Target Sum",
          difficulty: "Medium",
          link: "https://leetcode.com/problems/target-sum/",
        },
        {
          title: "Decode Ways",
          difficulty: "Medium",
          link: "https://leetcode.com/problems/decode-ways/",
        },
        {
          title: "Unique Paths",
          difficulty: "Medium",
          link: "https://leetcode.com/problems/unique-paths/",
        },
        {
          title: "Word Break",
          difficulty: "Medium",
          link: "https://leetcode.com/problems/word-break/",
        },
      ],
      resources: [
        {
          title: "Best DSA concepts for FAANG",
          type: "PDF",
          link: "/PLACEMENT NOTES/Best DSA concepts for FAANG.pdf",
        },
        {
          title: "DSA Complete Theory Notes",
          type: "PDF",
          link: "/PLACEMENT NOTES/DSA in python complete theory hand writing notes (1).pdf",
        },
      ],
      videos: [
        {
          title: "Dynamic Programming - Learn to Solve Algorithmic Problems",
          link: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
          channel: "freeCodeCamp",
        },
        {
          title: "5 Simple Steps for Solving Dynamic Programming Problems",
          link: "https://www.youtube.com/watch?v=aPQY__2H3tE",
          channel: "Reducible",
        },
        {
          title: "Master 1D Dynamic Programming",
          link: "https://www.youtube.com/watch?v=73r3KWiEvyk",
          channel: "NeetCode",
        },
        {
          title: "Dynamic Programming Patterns for Interviews",
          link: "https://www.youtube.com/watch?v=mBnqc_hX4QQ",
          channel: "Tushar Roy",
        },
        {
          title: "Algorithms: Memoization and Dynamic Programming",
          link: "https://www.youtube.com/watch?v=P8Xa2Bit4U8",
          channel: "HackerRank",
        },
        {
          title: "Climbing Stairs - Dynamic Programming",
          link: "https://www.youtube.com/watch?v=Y0lT9Fck7qI",
          channel: "NeetCode",
        },
        {
          title: "House Robber - LeetCode 198",
          link: "https://www.youtube.com/watch?v=73r3KWiEvyk",
          channel: "NeetCode",
        },
        {
          title: "Longest Increasing Subsequence - O(nlogn)",
          link: "https://www.youtube.com/watch?v=on2hvxBXJH4",
          channel: "Tushar Roy",
        },
        {
          title: "Coin Change - Dynamic Programming",
          link: "https://www.youtube.com/watch?v=H9bfqozjoqs",
          channel: "NeetCode",
        },
        {
          title: "Dynamic Programming Patterns",
          link: "https://www.youtube.com/watch?v=Hdr64lKQ3e4",
          channel: "Abdul Bari",
        },
      ],
    },
    "system-design-caching": {
      id: "system-design-caching",
      title: "System Design: Caching Strategies",
      difficulty: "Medium",
      category: "System Design",
      time: "30 min",
      description: "Learn caching strategies to build scalable systems",
      overview:
        "Caching is the secret sauce of high-performance distributed systems. It involves storing copies of data in temporary storage locations to reduce easier access speed.",
      keyPoints: [
        "Cache Placement (Client, CDN, Load Balancer, Distributed)",
        "Eviction Policies (LRU, LFU, FIFO, ARC)",
        "Write Policies (Write-Through, Write-Back, Write-Around)",
        "Handling Cache Coherence & Thundering Herds",
      ],
      sections: [
        {
          title: "1. Why Caching?",
          content: `Accessing data from memory is orders of magnitude faster than disk or network calls.

**Latency Numbers to Know:**
- **L1 Cache**: ~1-2 ns
- **RAM**: ~100 ns
- **SSD**: ~150,000 ns
- **Network Round-trip**: ~500,000 ns`,
        },
        {
          title: "2. Cache Eviction Policies",
          content: `When the cache is full, what do we delete?

**1. LRU (Least Recently Used)**
- Removes the item that hasn't been accessed for the longest time.
- **Use Case**: Social media feeds.

**2. LFU (Least Frequently Used)**
- Removes the item with the fewest access counts.
- **Use Case**: Analytics, historical logs.

**3. TTL (Time to Live)**
- Automatically expires data after X seconds.
- **Use Case**: Session data, OTPs.`,
        },
        {
          title: "3. Deep Dive: Facebook TAO",
          content: `**Problem**: Facebook has billions of reads/sec for the social graph. Direct DB hits are impossible.

**Solution**: TAO (The Association Object).
- A write-through cache backed by MySQL.
- **Leaders & Followers**: Writes go to Leader cache (and DB). Followers serve reads.
- **Result**: 99.8% Read hit rate. Shows the power of a specialized caching layer.`,
        },
        {
          title: "4. Common Interview Questions",
          content: `**Q1: What is Cache Stampede (Thundering Herd) and how to fix it?**
- **Problem**: A popular key expires, and thousands of requests hit the DB at once.
- **Fix**: 
    - **Locking**: Only 1 process computes the value, others wait.
    - **Probabilistic Early Expiration**: Refresh before the actual TTL expires (e.g., if TTL < 5s, 10% chance to recompute).

**Q2: Redis vs Memcached?**
- **Redis**: Rich data types (Lists, Sets), Persistence (RDB/AOF), Pub/Sub, Cluster mode.
- **Memcached**: Simple Key-Value, Multi-threaded (better vertical scaling for simple KV), transient.

**Q3: Where should I place the cache?**
- **Edge (CDN)**: Static assets.
- **API Gateway**: Response caching.
- **App Side**: Local objects (Fastest, but coherent issues).
- **Distributed (Redis)**: Shared state across services.`,
        },
        {
          title: "5. Advanced: Consistent Hashing",
          content: `**Problem**: In distributed caching (N servers), if we use \`hash(key) % N\`, adding/removing a server re-shuffles ALL keys.
- **Solution**: Consistent Hashing (Ring).
- Keys and Servers are hashed onto a circle (0-360 degrees).
- A key is assigned to the first server found moving clockwise.
- **Impact**: Adding a node only redistributes ~1/N keys.
- **Virtual Nodes**: Used to balance load more evenly.`,
        },
      ],
      practiceProblems: [
        {
          title: "LRU Cache Implementation",
          difficulty: "Medium",
          link: "https://leetcode.com/problems/lru-cache/",
        },
        {
          title: "Design a Cache System",
          difficulty: "Hard",
          link: "https://www.geeksforgeeks.org/design-a-cache-system/",
        },
        {
          title: "Implement LFU Cache",
          difficulty: "Hard",
          link: "https://leetcode.com/problems/lfu-cache/",
        },
        {
          title: "Design Twitter Feed",
          difficulty: "Hard",
          link: "https://leetcode.com/discuss/interview-question/system-design/124619/Design-Twitter-Feed",
        },
        {
          title: "Design TinyURL",
          difficulty: "Medium",
          link: "https://leetcode.com/discuss/interview-question/124658/Design-a-URL-Shortener-(-TinyURL-)-System",
        },
        {
          title: "Consistent Hashing",
          difficulty: "Hard",
          link: "https://www.geeksforgeeks.org/consistent-hashing-implementation/",
        },
      ],
      resources: [
        {
          title: "System Design Basics",
          type: "PDF",
          link: "/PLACEMENT NOTES/System Design Basics.pdf",
        },
      ],
      videos: [
        {
          title: "Caching - System Design",
          link: "https://www.youtube.com/watch?v=U3RkDLtS7uY",
          channel: "Gaurav Sen",
        },
        {
          title: "System Design Primer: Caching",
          link: "https://www.youtube.com/watch?v=6du2q-4x3-Q",
          channel: "ByteByteGo",
        },
        {
          title: "Redis Crash Course",
          link: "https://www.youtube.com/watch?v=jgpVdJB2sKQ",
          channel: "Traversy Media",
        },
        {
          title: "Memcached vs Redis",
          link: "https://www.youtube.com/watch?v=R3Lp6741UQE",
          channel: "Hussein Nasser",
        },
        {
          title: "What is a CDN?",
          link: "https://www.youtube.com/watch?v=RI9np1LWzqw",
          channel: "Cloudflare",
        },
        {
          title: "Cache Eviction Policies (LRU, LFU)",
          link: "https://www.youtube.com/watch?v=xDEuM580kWg",
          channel: "Gaurav Sen",
        },
        {
          title: "Thundering Herd Problem (Cache Stampede)",
          link: "https://www.youtube.com/watch?v=78DlbHj53nA",
          channel: "System Design Interview",
        },
        {
          title: "Distributed Caching Explained",
          link: "https://www.youtube.com/watch?v=iuqZvajTOyA",
          channel: "CodeKarle",
        },
        {
          title: "Facebook TAO (The Association Object)",
          link: "https://www.youtube.com/watch?v=s19G6n01hS0",
          channel: "Facebook Engineering",
        },
        {
          title: "Write-Through vs Write-Back Caching",
          link: "https://www.youtube.com/watch?v=2X0R_E3gW-Y",
          channel: "System Design",
        },
      ],
    },
    "react-performance": {
      id: "react-performance",
      title: "React Performance Optimization",
      difficulty: "Medium",
      category: "Web Dev",
      time: "25 min",
      description: "Optimize React apps for production-level performance",
      overview:
        "A performant UI is key to user retention. In React, performance optimization revolves around minimizing renders and managing the main thread effectively.",
      keyPoints: [
        "Understanding the Render Cycle",
        "Immutability & State Management",
        "Code Splitting & Lazy Loading",
        "React 18 Concurrent Features",
      ],
      sections: [
        {
          title: "1. The Rendering Process",
          content: `React uses a Virtual DOM to minimize direct DOM manipulation.
**Phases:**
1. **Render Phase**: React calls your components and differentiates the old/new VDOM.
2. **Commit Phase**: React applies changes to the real DOM.

**The Rule**: A component re-renders if its State or Props change, or if its Parent re-renders.`,
        },
        {
          title: "2. Memoization Deep Dive",
          content: `**React.memo()**
HOC that prevents a child from re-rendering if props haven't changed.

**useCallback()**
Freezes a function reference.
\`\`\`javascript
const handleClick = useCallback(() => { ... }, []);
\`\`\`

**useMemo()**
Caches the *result* of a calculation.
\`\`\`javascript
const sorted = useMemo(() => data.sort(), [data]);
\`\`\``,
        },
        {
          title: "3. Deep Dive: React Fiber",
          content: `Prior to React 16, the reconciliation algorithm (Stack) was synchronous and could block the main thread.

**Fiber Architecture:**
- Breaks rendering work into small units of work ("fibers").
- **Time Slicing**: Can pause work to let the browser paint, then resume.
- Enables **Concurrent Mode** features like \`useTransition\` and \`Suspense\`.`,
        },
        {
          title: "4. Common Interview Questions",
          content: `**Q1: What is the Virtual DOM?**
- It's a lightweight JavaScript representation of the DOM. React updates this VDOM first, diffs it with the previous version (Reconciliation), and batch updates the real DOM (Commit) for performance.

**Q2: Why is the 'key' prop important in lists?**
- Keys help React identify which items have changed, added, or removed. Without keys (or using index), React may re-create DOM nodes unnecessarily or mess up component state (e.g., input focus).

**Q3: Does \`setState\` always trigger a re-render?**
- Generally yes. However, if you set state to the *same* primitive value (e.g., \`setCount(5)\` when count is 5), React's bailout mechanism skips the render.`,
        },
        {
          title: "5. Advanced: Concurrent Features",
          content:
            "**useTransition** and **useDeferredValue** allow you to mark updates as non-urgent.\n- **useTransition**: Wraps state updates. `startTransition(() => setSearch(input))`. Keeps the UI responsive while filtering a list.\n- **useDeferredValue**: Defers a value itself. `const deferredQuery = useDeferredValue(query)`.\n- **Suspense for Data Fetching**: Pause rendering until data is ready (standardized in Next.js/React Server Components).",
        },
      ],
      practiceProblems: [
        {
          title: "Optimize Re-renders",
          difficulty: "Medium",
          link: "https://react.dev/reference/react/memo",
        },
        {
          title: "Implement Virtual Scrolling",
          difficulty: "Hard",
          link: "https://github.com/bvaughn/react-window",
        },
        {
          title: "Code Split a Large App",
          difficulty: "Medium",
          link: "https://react.dev/reference/react/lazy",
        },
        {
          title: "Fix Context Re-renders",
          difficulty: "Hard",
          link: "https://github.com/facebook/react/issues/15156",
        },
        {
          title: "Implement Debounce Hook",
          difficulty: "Medium",
          link: "https://usehooks.com/useDebounce/",
        },
        {
          title: "Implement Throttle Hook",
          difficulty: "Medium",
          link: "https://usehooks.com/useThrottle/",
        },
      ],
      resources: [
        {
          title: "React Handwritten Notes",
          type: "PDF",
          link: "/PLACEMENT NOTES/React-Handwritten-notes.pdf",
        },
        {
          title: "30 Days of React eBook",
          type: "PDF",
          link: "/PLACEMENT NOTES/30-days-of-react-ebook-fullstackio.pdf",
        },
      ],
      videos: [
        {
          title: "React Performance Optimization",
          link: "https://www.youtube.com/watch?v=lAlOo1ft2gk",
          channel: "Ben Awad",
        },
        {
          title: "React Memo, callback, and memoization",
          link: "https://www.youtube.com/watch?v=ucc4CJ51rP8",
          channel: "Codevolution",
        },
        {
          title: "UseMemo and UseCallback Explained",
          link: "https://www.youtube.com/watch?v=vpE9I_eqHdM",
          channel: "Web Dev Simplified",
        },
        {
          title: "React 18 Concurrency and Performance",
          link: "https://www.youtube.com/watch?v=MicF_elK680",
          channel: "React Conf",
        },
        {
          title: "Code Splitting in React",
          link: "https://www.youtube.com/watch?v=33D3x8bF8A0",
          channel: "Traversy Media",
        },
        {
          title: "Optimizing Re-renders in React",
          link: "https://www.youtube.com/watch?v=75XmHauQNdA",
          channel: "Fireship",
        },
        {
          title: "Virtual DOM Explained",
          link: "https://www.youtube.com/watch?v=BYbgopx44vo",
          channel: "Programming with Mosh",
        },
        {
          title: "React Fiber Architecture",
          link: "https://www.youtube.com/watch?v=ZCuYPiUIONs",
          channel: "Lin Clark",
        },
        {
          title: "Profiling React Applications",
          link: "https://www.youtube.com/watch?v=hB7q-dDmwQY",
          channel: "Ben Awad",
        },
        {
          title: "React Suspense and Lazy Loading",
          link: "https://www.youtube.com/watch?v=5LvGe3wR2K4",
          channel: "The Net Ninja",
        },
      ],
    },
    "database-indexing": {
      id: "database-indexing",
      title: "Database Indexing Strategies",
      difficulty: "Hard",
      category: "DBMS",
      time: "40 min",
      description: "Master database indexing for query optimization",
      overview:
        "An index is a pointer to data. Without it, the database must scan every single row (Full Table Scan) to find what you asked for. Indexing is the single most effective way to tune SQL performance.",
      keyPoints: [
        "B-Tree vs Hash vs Gin Indexes",
        "Clustered vs Non-Clustered Indexes",
        "Composite Indexes & Selectivity",
        "Explain Analyze & Query Cost",
      ],
      sections: [
        {
          title: "1. How B-Trees Work",
          content:
            "Most default indexes (MySQL/Postgres) use Balanced Trees (B-Trees).\n- **Lookup**: O(log N).\n- **Range Queries**: Excellent support for `> `, `<`, `BETWEEN`.\n\n**Hash Index**:\n- O(1) lookup but supports *only* exact matches (`=`). No range queries.",
        },
        {
          title: "2. Clustered vs Non-Clustered",
          content: `**Clustered Index (The Book)**
- The data *is* the index. Rows are sorted on disk.
- **Limit**: Only ONE per table.

**Non-Clustered Index (The Appendix)**
- Contains keys and a pointer to the row address.
- **Limit**: Can have many.`,
        },
        {
          title: "3. Deep Dive: Postgres Vacuum & MVCC",
          content: `**MVCC (Multi-Version Concurrency Control)**:
- When you Update/Delete a row in Postgres, it doesn't delete it immediately. It marks it as "dead" and creates a new version.
- This allows readers to see the old version while a writer updates it (No Locking).

**Vacuum**:
- The process that cleans up "dead tuples" to reclaim space.
- **Bloat**: If Vacuum doesn't run, the table grows indefinitely with dead rows, slowing scans.`,
        },
        {
          title: "4. Common Interview Questions",
          content: `**Q1: What columns should you index?**
- Columns used frequently in \`WHERE\`, \`JOIN\`, and \`ORDER BY\`.
- Columns with high cardinality (many unique values).

**Q2: Why not index every column?**
- **Write Penalty**: Every INSERT/UPDATE requires updating all indexes.
- **Space**: Indexes consume disk and RAM.

**Q3: What is a Composite Index?**
- An index on multiple columns \`(A, B)\`.
- Useful for queries like \`WHERE A=1 AND B=2\`.
- **Note**: Remember the Leftmost Prefix Rule.`,
        },
        {
          title: "5. Advanced: Bitmap Indexes & Bloom Filters",
          content: `**Bitmap Index**:
- Uses bits (0/1) for low-cardinality columns (e.g., Gender, Status).
- Very fast for combining conditions (AND/OR/XOR operations on bitmaps).
- **Use Case**: Data Warehousing (OLAP).

**Bloom Filters**:
- Probabilistic data structure.
- "Definitely No" or "Maybe Yes".
- Used in databases (LSM Trees like Cassandra/RocksDB) to avoid disk lookups for non-existent keys.`,
        },
      ],
      practiceProblems: [
        {
          title: "Design Optimal Indexes",
          difficulty: "Hard",
          link: "https://www.w3resource.com/sql-exercises/movie-database-exercise/index.php",
        },
        {
          title: "Query Optimization",
          difficulty: "Medium",
          link: "https://www.geeksforgeeks.org/sql-query-optimization/",
        },
        {
          title: "Index vs Full Table Scan",
          difficulty: "Medium",
          link: "https://www.geeksforgeeks.org/indexing-in-databases-set-1/",
        },
        {
          title: "Analyze Explain Plan",
          difficulty: "Hard",
          link: "https://use-the-index-luke.com/sql/explain-plan",
        },
        {
          title: "Schema Design for Scale",
          difficulty: "Hard",
          link: "https://stackoverflow.com/questions/35532296/sql-schema-design-for-scalability",
        },
      ],
      resources: [
        {
          title: "DBMS Notes",
          type: "PDF",
          link: "/PLACEMENT NOTES/DBMS_Notes (2).pdf",
        },
        {
          title: "SQL Notes",
          type: "PDF",
          link: "/PLACEMENT NOTES/SQL (notes) (1) (1).pdf",
        },
      ],
      videos: [
        {
          title: "Database Indexing Explained",
          link: "https://www.youtube.com/watch?v=HmvnQCknZec",
          channel: "Hussein Nasser",
        },
        {
          title: "Clustered vs Non-Clustered Indexes",
          link: "https://www.youtube.com/watch?v=NfD9f1x-h3I",
          channel: "Kudvenkat",
        },
        {
          title: "B-Tree Indexing in Databases",
          link: "https://www.youtube.com/watch?v=aZjYr87r1b8",
          channel: "Art of the Problem",
        },
        {
          title: "SQL Indexing for Beginners",
          link: "https://www.youtube.com/watch?v=Fs9G9_Q785M",
          channel: "Alex The Analyst",
        },
        {
          title: "How Database B-Tree Indexing Works",
          link: "https://www.youtube.com/watch?v=NIq3qLaHCIs",
          channel: "ByteByteGo",
        },
        {
          title: "Composite Indexes in SQL",
          link: "https://www.youtube.com/watch?v=3pDCDg_aZJk",
          channel: "Pinal Dave",
        },
        {
          title: "PostgreSQL Vaccum Explained",
          link: "https://www.youtube.com/watch?v=2X0R_E3gW-Y",
          channel: "Hussein Nasser",
        },
        {
          title: "Explain Analyze in Postgres",
          link: "https://www.youtube.com/watch?v=4Z9_3q4w0w0",
          channel: "Postgres TV",
        },
        {
          title: "Database Internals: Indexing",
          link: "https://www.youtube.com/watch?v=0s3-3g3-3g3",
          channel: "CMU Database Group",
        },
        {
          title: "Optimizing SQL Queries with Indexes",
          link: "https://www.youtube.com/watch?v=bhck1l10-18",
          channel: "MySQL",
        },
      ],
    },
  },
  $v = ({ content: e }) => {
    const t = (i) =>
        i
          .split(/(\*\*.*?\*\*|`.*?`)/g)
          .map((s, o) =>
            s.startsWith("**") && s.endsWith("**")
              ? a.jsx("strong", { children: s.slice(2, -2) }, o)
              : s.startsWith("`") && s.endsWith("`")
                ? a.jsx("code", { children: s.slice(1, -1) }, o)
                : s,
          ),
      n = e.split(/(```[\s\S]*?```)/g);
    return a.jsx("div", {
      className: "section-content",
      children: n.map((i, r) => {
        if (i.startsWith("```") && i.endsWith("```")) {
          const u = i.match(/```(\w+)?\n([\s\S]*?)```/),
            d = u ? u[1] : "",
            p = u ? u[2] : i.slice(3, -3);
          return a.jsx(
            "pre",
            {
              children: a.jsx("code", {
                className: `language-${d}`,
                children: p.trim(),
              }),
            },
            r,
          );
        }
        if (!i.trim()) return null;
        const s = i.split(`
`);
        let o = !1,
          l = [];
        const c = [];
        return (
          s.forEach((u, d) => {
            u.trim().startsWith("- ") || u.trim().startsWith("* ")
              ? (o || (o = !0), l.push(u.trim().substring(2)))
              : (o &&
                  (c.push(
                    a.jsx(
                      "ul",
                      {
                        children: l.map((f, h) =>
                          a.jsx("li", { children: t(f) }, h),
                        ),
                      },
                      `${r}-list-${d}`,
                    ),
                  ),
                  (l = []),
                  (o = !1)),
                u.trim() &&
                  c.push(
                    a.jsx(
                      "p",
                      { style: { marginBottom: 12 }, children: t(u) },
                      `${r}-p-${d}`,
                    ),
                  ));
          }),
          o &&
            c.push(
              a.jsx(
                "ul",
                {
                  children: l.map((u, d) => a.jsx("li", { children: t(u) }, d)),
                },
                `${r}-list-end`,
              ),
            ),
          c
        );
      }),
    });
  };
function Gv() {
  const { topicId: e } = Rg(),
    t = jc(),
    n = qv[e];
  if (!n)
    return a.jsx("div", {
      className: "topic-detail-container",
      children: a.jsxs("div", {
        style: { textAlign: "center", padding: 60, color: "white" },
        children: [
          a.jsx("h2", { children: "Topic Not Found" }),
          a.jsx("br", {}),
          a.jsx(_t, {
            to: "/dashboard",
            className: "back-btn",
            children: "← Back to Dashboard",
          }),
        ],
      }),
    });
  const i = () => {
    alert(`Congratulations! You've completed "${n.title}" and earned 50 XP!`);
  };
  return a.jsx("div", {
    className: "topic-detail-container",
    children: a.jsxs("div", {
      className: "max-w-wrapper",
      children: [
        a.jsxs("div", {
          className: "topic-header glass-card",
          style: { marginTop: 24 },
          children: [
            a.jsxs("button", {
              onClick: () => t("/dashboard"),
              className: "back-btn",
              children: [a.jsx(b0, { size: 18 }), " Back to Dashboard"],
            }),
            a.jsxs("div", {
              className: "topic-title-section",
              children: [
                a.jsx("h1", { className: "topic-title", children: n.title }),
                a.jsx("p", {
                  className: "topic-description",
                  children: n.description,
                }),
              ],
            }),
            a.jsxs("div", {
              className: "topic-meta",
              children: [
                a.jsx("span", {
                  className: `meta-badge badge-${n.difficulty === "Hard" ? "orange" : n.difficulty === "Medium" ? "blue" : "green"}`,
                  children: n.difficulty,
                }),
                a.jsx("span", {
                  className: "meta-badge badge-purple",
                  children: n.category,
                }),
                a.jsxs("span", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: "var(--text-secondary)",
                    fontWeight: 600,
                  },
                  children: [a.jsx(eo, { size: 14 }), " ", n.time],
                }),
              ],
            }),
          ],
        }),
        a.jsxs("div", {
          className: "glass-card",
          style: { marginBottom: 32 },
          children: [
            a.jsxs("h3", {
              style: {
                margin: "0 0 16px 0",
                fontSize: 18,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "var(--text-main)",
              },
              children: [
                a.jsx(E0, { size: 20, className: "text-primary" }),
                " What You'll Learn",
              ],
            }),
            a.jsx("p", {
              style: {
                margin: "0 0 24px 0",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
              },
              children: n.overview,
            }),
            a.jsx("div", {
              className: "section-content",
              children: a.jsx("ul", {
                children: n.keyPoints.map((r, s) =>
                  a.jsx("li", { children: r }, s),
                ),
              }),
            }),
          ],
        }),
        a.jsx("div", {
          className: "topic-content",
          children: n.sections.map((r, s) =>
            a.jsxs(
              "div",
              {
                className: "content-section glass-card",
                children: [
                  a.jsx("h2", {
                    className: "section-title",
                    children: r.title,
                  }),
                  a.jsx($v, { content: r.content }),
                ],
              },
              s,
            ),
          ),
        }),
        a.jsxs("div", {
          className: "topic-sidebar-layout",
          children: [
            a.jsxs("div", {
              className: "sidebar-section",
              children: [
                a.jsx("h3", { children: "Practice Problems" }),
                a.jsx("div", {
                  style: { display: "flex", flexDirection: "column", gap: 12 },
                  children: n.practiceProblems.map((r, s) =>
                    a.jsx(
                      "a",
                      {
                        href: r.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "practice-card-item",
                        children: a.jsxs("div", {
                          style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          },
                          children: [
                            a.jsx("span", {
                              style: { fontWeight: 600, fontSize: 15 },
                              children: r.title,
                            }),
                            a.jsx("span", {
                              className: `meta-badge badge-${r.difficulty === "Hard" ? "orange" : r.difficulty === "Medium" ? "blue" : "green"}`,
                              style: { fontSize: 11 },
                              children: r.difficulty,
                            }),
                          ],
                        }),
                      },
                      s,
                    ),
                  ),
                }),
              ],
            }),
            a.jsxs("div", {
              className: "sidebar-section",
              children: [
                a.jsx("h3", { children: "Resources" }),
                a.jsx("div", {
                  style: { display: "flex", flexDirection: "column", gap: 12 },
                  children: n.resources.map((r, s) =>
                    a.jsx(
                      "a",
                      {
                        href: r.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "resource-card-item",
                        children: a.jsxs("div", {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                          },
                          children: [
                            a.jsx("div", {
                              className: "resource-icon-wrapper",
                              children: a.jsx(Pn, { size: 20 }),
                            }),
                            a.jsxs("div", {
                              style: { flexGrow: 1 },
                              children: [
                                a.jsx("div", {
                                  style: {
                                    fontWeight: 600,
                                    fontSize: 15,
                                    marginBottom: 4,
                                  },
                                  children: r.title,
                                }),
                                a.jsx("div", {
                                  style: {
                                    fontSize: 13,
                                    color: "var(--text-muted)",
                                  },
                                  children: r.type,
                                }),
                              ],
                            }),
                            a.jsx(En, { size: 16, color: "var(--text-muted)" }),
                          ],
                        }),
                      },
                      s,
                    ),
                  ),
                }),
                a.jsxs("button", {
                  onClick: i,
                  className: "complete-btn",
                  style: { marginTop: 32 },
                  children: [a.jsx(Ac, { size: 20 }), " Mark as Complete"],
                }),
              ],
            }),
          ],
        }),
        n.videos &&
          n.videos.length > 0 &&
          a.jsxs("div", {
            className: "glass-card",
            style: { marginTop: 32 },
            children: [
              a.jsxs("h3", {
                style: {
                  margin: "0 0 20px 0",
                  fontSize: 18,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "var(--text-main)",
                },
                children: [
                  a.jsx(wl, { size: 20, className: "text-secondary" }),
                  " Video Tutorials",
                ],
              }),
              a.jsx("div", {
                className: "video-grid",
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: 16,
                },
                children: n.videos.map((r, s) =>
                  a.jsxs(
                    "a",
                    {
                      href: r.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "video-card",
                      style: {
                        textDecoration: "none",
                        background: "var(--bg-tertiary)",
                        borderRadius: 12,
                        overflow: "hidden",
                        transition: "transform 0.2s",
                        display: "block",
                      },
                      children: [
                        a.jsx("div", {
                          style: {
                            position: "relative",
                            paddingTop: "56.25%",
                            background: "#000",
                          },
                          children: a.jsx("div", {
                            style: {
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fff",
                              background: `url(https://img.youtube.com/vi/${Qv(r.link)}/hqdefault.jpg) center/cover no-repeat`,
                            },
                            children: a.jsx("div", {
                              style: {
                                background: "rgba(0,0,0,0.6)",
                                borderRadius: "50%",
                                padding: 12,
                              },
                              children: a.jsx(wl, {
                                size: 32,
                                fill: "white",
                                stroke: "white",
                              }),
                            }),
                          }),
                        }),
                        a.jsxs("div", {
                          style: { padding: 12 },
                          children: [
                            a.jsx("h4", {
                              style: {
                                margin: "0 0 4px 0",
                                fontSize: 14,
                                fontWeight: 600,
                                color: "var(--text-main)",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              },
                              children: r.title,
                            }),
                            a.jsx("p", {
                              style: {
                                margin: 0,
                                fontSize: 12,
                                color: "var(--text-muted)",
                              },
                              children: r.channel || "YouTube",
                            }),
                          ],
                        }),
                      ],
                    },
                    s,
                  ),
                ),
              }),
            ],
          }),
      ],
    }),
  });
}
function Qv(e) {
  if (!e) return null;
  const t = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,
    n = e.match(t);
  return n && n[2].length === 11 ? n[2] : null;
}
const Bi = {
  "Frontend Developer": [
    {
      id: "fe-1",
      question:
        "Explain the Virtual DOM in React and how it improves performance.",
      difficulty: "Medium",
      category: "Technical",
      hints: [
        "Mention diffing algorithm",
        "Compare with real DOM",
        "Explain reconciliation",
      ],
    },
    {
      id: "fe-2",
      question: "What is the difference between useEffect and useLayoutEffect?",
      difficulty: "Medium",
      category: "Technical",
      hints: ["Timing of execution", "When to use each", "Visual changes"],
    },
    {
      id: "fe-3",
      question:
        "Describe a challenging UI problem you solved and your approach.",
      difficulty: "Medium",
      category: "Behavioral",
      hints: [
        "Use STAR method",
        "Mention specific technologies",
        "Explain impact",
      ],
    },
    {
      id: "fe-4",
      question:
        "How would you optimize a React application with performance issues?",
      difficulty: "Hard",
      category: "Technical",
      hints: [
        "React.memo",
        "Code splitting",
        "Lazy loading",
        "useMemo/useCallback",
      ],
    },
    {
      id: "fe-5",
      question:
        "Explain CSS specificity and how to manage it in large applications.",
      difficulty: "Easy",
      category: "Technical",
      hints: [
        "Specificity hierarchy",
        "BEM methodology",
        "CSS-in-JS solutions",
      ],
    },
  ],
  "Backend Developer": [
    {
      id: "be-1",
      question:
        "Explain the difference between SQL and NoSQL databases. When would you use each?",
      difficulty: "Medium",
      category: "Technical",
      hints: ["Data structure", "Scalability", "ACID vs BASE", "Use cases"],
    },
    {
      id: "be-2",
      question: "What is the N+1 query problem and how do you solve it?",
      difficulty: "Hard",
      category: "Technical",
      hints: [
        "Database queries",
        "Eager loading",
        "JOIN operations",
        "ORM optimization",
      ],
    },
    {
      id: "be-3",
      question:
        "Describe your experience with API design and RESTful principles.",
      difficulty: "Medium",
      category: "Technical",
      hints: ["HTTP methods", "Status codes", "Resource naming", "Versioning"],
    },
    {
      id: "be-4",
      question: "How would you handle a production database outage?",
      difficulty: "Hard",
      category: "Behavioral",
      hints: [
        "Incident response",
        "Communication",
        "Recovery plan",
        "Post-mortem",
      ],
    },
    {
      id: "be-5",
      question:
        "Explain authentication vs authorization. Implement JWT-based auth.",
      difficulty: "Medium",
      category: "Technical",
      hints: ["Auth vs Authz", "Token structure", "Refresh tokens", "Security"],
    },
  ],
  "Full Stack Developer": [
    {
      id: "fs-1",
      question:
        "Walk me through building a scalable web application from scratch.",
      difficulty: "Hard",
      category: "Technical",
      hints: ["Architecture", "Tech stack", "Database design", "Deployment"],
    },
    {
      id: "fs-2",
      question:
        "Explain how you would implement real-time features in a web app.",
      difficulty: "Medium",
      category: "Technical",
      hints: ["WebSockets", "Server-Sent Events", "Polling", "Trade-offs"],
    },
    {
      id: "fs-3",
      question: "Describe a time you had to debug a complex full-stack issue.",
      difficulty: "Medium",
      category: "Behavioral",
      hints: ["Debugging process", "Tools used", "Root cause", "Prevention"],
    },
    {
      id: "fs-4",
      question: "How do you ensure API security in a production application?",
      difficulty: "Hard",
      category: "Technical",
      hints: [
        "Authentication",
        "Rate limiting",
        "CORS",
        "Input validation",
        "HTTPS",
      ],
    },
    {
      id: "fs-5",
      question: "Explain your approach to state management in modern web apps.",
      difficulty: "Medium",
      category: "Technical",
      hints: ["Redux vs Context", "Server state", "Local state", "Trade-offs"],
    },
  ],
  "Data Analyst": [
    {
      id: "da-1",
      question:
        "Explain the difference between WHERE and HAVING clauses in SQL.",
      difficulty: "Easy",
      category: "Technical",
      hints: [
        "Filtering rows vs groups",
        "Execution order",
        "Aggregate functions",
      ],
    },
    {
      id: "da-2",
      question: "How would you analyze user churn for a subscription service?",
      difficulty: "Medium",
      category: "Technical",
      hints: ["Metrics", "Cohort analysis", "Visualization", "Recommendations"],
    },
    {
      id: "da-3",
      question: "Describe your experience with data visualization tools.",
      difficulty: "Easy",
      category: "Behavioral",
      hints: ["Tools used", "Dashboard design", "Stakeholder communication"],
    },
    {
      id: "da-4",
      question: "What is A/B testing and how do you measure its success?",
      difficulty: "Medium",
      category: "Technical",
      hints: [
        "Hypothesis",
        "Sample size",
        "Statistical significance",
        "Metrics",
      ],
    },
    {
      id: "da-5",
      question: "How do you handle missing or inconsistent data in analysis?",
      difficulty: "Medium",
      category: "Technical",
      hints: [
        "Data cleaning",
        "Imputation methods",
        "Impact assessment",
        "Documentation",
      ],
    },
  ],
  "DevOps Engineer": [
    {
      id: "do-1",
      question: "Explain CI/CD and describe a pipeline you've implemented.",
      difficulty: "Medium",
      category: "Technical",
      hints: ["Build", "Test", "Deploy stages", "Tools", "Automation"],
    },
    {
      id: "do-2",
      question: "What is containerization and how does Docker work?",
      difficulty: "Easy",
      category: "Technical",
      hints: ["Containers vs VMs", "Images", "Dockerfile", "Benefits"],
    },
    {
      id: "do-3",
      question: "Describe how you would handle a production incident.",
      difficulty: "Hard",
      category: "Behavioral",
      hints: ["Detection", "Mitigation", "Communication", "Post-mortem"],
    },
    {
      id: "do-4",
      question: "Explain Infrastructure as Code and your experience with it.",
      difficulty: "Medium",
      category: "Technical",
      hints: [
        "Terraform/CloudFormation",
        "Version control",
        "Benefits",
        "Best practices",
      ],
    },
    {
      id: "do-5",
      question: "How do you monitor and ensure application reliability?",
      difficulty: "Hard",
      category: "Technical",
      hints: ["Monitoring tools", "Metrics", "Alerting", "SLAs/SLOs"],
    },
  ],
};
function Kv() {
  const [e, t] = E.useState(null),
    [n, i] = E.useState(null),
    [r, s] = E.useState(""),
    [o, l] = E.useState(null),
    [c, u] = E.useState(!1),
    [d, p] = E.useState([]),
    f = E.useRef(null),
    h = "http://localhost:3001",
    w = (m) => {
      (i(m), s(""), l(null));
    },
    k = async () => {
      if (r.trim()) {
        u(!0);
        try {
          const m = await fetch(`${h}/api/interview/analyze`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              question: n.question,
              answer: r,
              difficulty: n.difficulty,
              category: n.category,
            }),
          });
          if (!m.ok) throw new Error(`Backend error: ${m.status}`);
          const g = await m.json();
          (l(g.feedback), d.includes(n.id) || p((C) => [...C, n.id]));
        } catch (m) {
          (console.error("Analysis error:", m),
            l(
              "Error analyzing answer. Please make sure the backend server is running.",
            ));
        } finally {
          u(!1);
        }
      }
    },
    S = () => {
      (t(null), i(null), s(""), l(null), p([]));
    },
    y = (m) => {
      switch (m) {
        case "Easy":
          return "#10b981";
        case "Medium":
          return "#f59e0b";
        case "Hard":
          return "#ef4444";
        default:
          return "#6b7280";
      }
    };
  return a.jsxs("div", {
    className: "interview-page",
    children: [
      a.jsx(Rr, {}),
      a.jsx(gn, {
        title: "Interview Practice",
        description:
          "Practice interview questions by role and get AI-powered feedback",
        icon: a.jsx(N0, { size: 40 }),
      }),
      a.jsxs("div", {
        className: "interview-container",
        children: [
          e
            ? n
              ? a.jsxs("div", {
                  className: "question-practice",
                  children: [
                    a.jsxs("div", {
                      className: "practice-header",
                      children: [
                        a.jsx("button", {
                          className: "btn-back",
                          onClick: () => i(null),
                          children: "← Back to Questions",
                        }),
                        a.jsxs("div", {
                          className: "practice-meta",
                          children: [
                            a.jsx("span", {
                              className: "difficulty-badge",
                              style: { backgroundColor: y(n.difficulty) },
                              children: n.difficulty,
                            }),
                            a.jsx("span", {
                              className: "category-tag",
                              children: n.category,
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "question-content",
                      children: [
                        a.jsx("h3", { children: n.question }),
                        a.jsxs("details", {
                          className: "hints-section",
                          children: [
                            a.jsxs("summary", {
                              children: [
                                a.jsx(Z3, { size: 18 }),
                                "View Hints (",
                                n.hints.length,
                                ")",
                              ],
                            }),
                            a.jsx("ul", {
                              children: n.hints.map((m, g) =>
                                a.jsx("li", { children: m }, g),
                              ),
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "answer-section",
                          children: [
                            a.jsx("label", { children: "Your Answer:" }),
                            a.jsx("textarea", {
                              ref: f,
                              value: r,
                              onChange: (m) => s(m.target.value),
                              placeholder:
                                "Type your detailed answer here... Be as thorough as possible.",
                              rows: 12,
                              disabled: c,
                            }),
                            a.jsxs("div", {
                              className: "answer-meta",
                              children: [
                                a.jsxs("span", {
                                  className: "char-count",
                                  children: [r.length, " characters"],
                                }),
                                a.jsx("button", {
                                  className: "btn-primary",
                                  onClick: k,
                                  disabled: !r.trim() || c,
                                  children: c
                                    ? a.jsx(a.Fragment, {
                                        children: "Analyzing...",
                                      })
                                    : a.jsxs(a.Fragment, {
                                        children: [
                                          a.jsx(Er, { size: 18 }),
                                          "Get AI Feedback",
                                        ],
                                      }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        o &&
                          a.jsxs("div", {
                            className: "feedback-section",
                            children: [
                              a.jsxs("h4", {
                                children: [
                                  a.jsx(It, { size: 20 }),
                                  "AI Feedback",
                                ],
                              }),
                              a.jsx("div", {
                                className: "feedback-content",
                                children: a.jsx(ff, { children: o }),
                              }),
                              a.jsxs("div", {
                                className: "feedback-actions",
                                children: [
                                  a.jsx("button", {
                                    className: "btn-secondary",
                                    onClick: () => {
                                      (i(null), s(""), l(null));
                                    },
                                    children: "Next Question",
                                  }),
                                  a.jsx("button", {
                                    className: "btn-secondary",
                                    onClick: () => {
                                      (s(""), l(null));
                                    },
                                    children: "Try Again",
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                })
              : a.jsxs("div", {
                  className: "question-selection",
                  children: [
                    a.jsxs("div", {
                      className: "selection-header",
                      children: [
                        a.jsx("button", {
                          className: "btn-back",
                          onClick: () => t(null),
                          children: "← Back to Roles",
                        }),
                        a.jsx("h2", { children: e }),
                        a.jsx("p", {
                          children: "Select a question to practice",
                        }),
                      ],
                    }),
                    a.jsx("div", {
                      className: "questions-list",
                      children: Bi[e].map((m) =>
                        a.jsxs(
                          "div",
                          {
                            className: `question-item ${d.includes(m.id) ? "completed" : ""}`,
                            onClick: () => w(m),
                            children: [
                              a.jsxs("div", {
                                className: "question-header",
                                children: [
                                  a.jsx("span", {
                                    className: "difficulty-badge",
                                    style: { backgroundColor: y(m.difficulty) },
                                    children: m.difficulty,
                                  }),
                                  a.jsx("span", {
                                    className: "category-tag",
                                    children: m.category,
                                  }),
                                  d.includes(m.id) &&
                                    a.jsx(It, {
                                      size: 20,
                                      className: "completed-icon",
                                    }),
                                ],
                              }),
                              a.jsx("p", {
                                className: "question-text",
                                children: m.question,
                              }),
                            ],
                          },
                          m.id,
                        ),
                      ),
                    }),
                  ],
                })
            : a.jsxs("div", {
                className: "role-selection",
                children: [
                  a.jsx("h2", { children: "Select Your Interview Role" }),
                  a.jsx("div", {
                    className: "roles-grid",
                    children: Object.keys(Bi).map((m) =>
                      a.jsxs(
                        "div",
                        {
                          className: "role-card",
                          onClick: () => t(m),
                          children: [
                            a.jsx("div", {
                              className: "role-icon",
                              children: a.jsx(Er, { size: 32 }),
                            }),
                            a.jsx("h3", { children: m }),
                            a.jsxs("p", {
                              children: [Bi[m].length, " questions"],
                            }),
                            a.jsxs("div", {
                              className: "role-progress",
                              children: [
                                d.filter((g) => Bi[m].some((C) => C.id === g))
                                  .length,
                                " / ",
                                Bi[m].length,
                                " completed",
                              ],
                            }),
                          ],
                        },
                        m,
                      ),
                    ),
                  }),
                ],
              }),
          e &&
            a.jsx("button", {
              className: "btn-reset",
              onClick: S,
              children: "Start Over",
            }),
        ],
      }),
    ],
  });
}
const Jv = {
    frontend: {
      id: "frontend",
      title: "Frontend Developer",
      description:
        "Comprehensive guide to becoming a modern Frontend Developer.",
      icon: "⚛️",
      color: "#3b82f6",
      estimatedTime: "6-9 Months",
      category: "Role Based",
      link: "https://roadmap.sh/frontend",
      milestones: [
        {
          id: "fe_1",
          title: "Internet Fundamentals",
          difficulty: "Beginner",
          estimatedHours: 10,
          content:
            "Before writing code, you must understand how the web works. Key concepts include HTTP/HTTPS (the protocol for transferring data), DNS (how domain names map to IPs), and Hosting. Browsers are the engine that renders code; understand how they interpret HTML/CSS.",
          topics: ["HTTP/HTTPS", "DNS", "Domain Names", "Hosting", "Browsers"],
          resources: [
            {
              title: "How the Internet Works (MDN)",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work",
            },
          ],
        },
        {
          id: "fe_2",
          title: "HTML: The Skeleton",
          difficulty: "Beginner",
          estimatedHours: 20,
          content:
            "HTML (HyperText Markup Language) provides the structure of web pages. Learn about Semantic HTML (using the right tag for the right job, like <article> vs <div>) which is crucial for SEO and accessibility. Master forms, inputs, and validations.",
          topics: [
            "Semantic HTML",
            "Forms & Validations",
            "SEO Basics",
            "Accessibility (a11y)",
          ],
          resources: [],
        },
        {
          id: "fe_3",
          title: "CSS: Style",
          difficulty: "Beginner",
          estimatedHours: 40,
          content:
            "Master the Box Model, Flexbox, and Grid. Responsive design with Media Queries is mandatory.",
          topics: ["Box Model", "Flexbox", "Grid"],
          resources: [],
        },
        {
          id: "fe_4",
          title: "JavaScript",
          difficulty: "Intermediate",
          estimatedHours: 60,
          content:
            "The programming language of the web. DOM manipulation, Fetch API, and modern ES6+ syntax.",
          topics: ["Variables", "Functions", "DOM", "ES6+"],
          resources: [],
        },
        {
          id: "fe_9",
          title: "React",
          difficulty: "Advanced",
          estimatedHours: 80,
          content:
            "The industry standard UI library. Components, Props, State, Hooks.",
          topics: ["React", "Hooks", "Context"],
          resources: [],
        },
      ],
    },
    backend: {
      id: "backend",
      title: "Backend Developer",
      description: "Server-side logic, databases, and APIs.",
      icon: "🖥️",
      color: "#8b5cf6",
      estimatedTime: "8-12 Months",
      category: "Role Based",
      link: "https://roadmap.sh/backend",
      milestones: [
        {
          id: "be_1",
          title: "OS & Knowledge",
          difficulty: "Beginner",
          estimatedHours: 30,
          content: "Terminal usage, Process management, Basic Networking.",
          topics: ["Terminal", "OS", "Networking"],
          resources: [],
        },
        {
          id: "be_2",
          title: "Languages",
          difficulty: "Intermediate",
          estimatedHours: 60,
          content: "Pick one: Node.js, Python, Go, Java, or PHP.",
          topics: ["Languages", "Runtimes"],
          resources: [],
        },
        {
          id: "be_3",
          title: "Databases",
          difficulty: "Advanced",
          estimatedHours: 60,
          content:
            "Relational (PostgreSQL) and NoSQL (MongoDB). Design schemas.",
          topics: ["SQL", "NoSQL", "ORM"],
          resources: [],
        },
      ],
    },
    devops: {
      id: "devops",
      title: "DevOps Engineer",
      description: "Bridge between Development and Operations.",
      icon: "♾️",
      color: "#ef4444",
      estimatedTime: "6-12 Months",
      category: "Role Based",
      link: "https://roadmap.sh/devops",
      milestones: [
        {
          id: "ops_1",
          title: "Linux Fundamentals",
          difficulty: "Intermediate",
          estimatedHours: 50,
          content:
            "Mastering the terminal is step zero. File manipulation (awk, sed, grep), Permissions (chmod, chown), Process management (ps, top, kill), and Networking basics (curl, ssh, netstat).",
          topics: ["Bash", "VIM/Nano", "Permissions", "Networking"],
          resources: [
            { title: "Linux Journey", url: "https://linuxjourney.com/" },
            {
              title: "Command Line for Beginners",
              url: "https://ubuntu.com/tutorials/command-line-for-beginners",
            },
          ],
        },
        {
          id: "ops_2",
          title: "Git & CI/CD",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "Version control is essential. Learn Git branching strategies. Then, automate testing and deployment using GitHub Actions or GitLab CI. Understand the pipeline concept: Build -> Test -> Deploy.",
          topics: ["Git Flow", "GitHub Actions", "Pipelines", "Artifacts"],
          resources: [
            { title: "Pro Git Book", url: "https://git-scm.com/book/en/v2" },
            {
              title: "GitHub Actions",
              url: "https://docs.github.com/en/actions",
            },
          ],
        },
        {
          id: "ops_3",
          title: "Infrastructure as Code (IaC)",
          difficulty: "Advanced",
          estimatedHours: 60,
          content:
            "Terraform is the industry standard. Stop clicking buttons in the AWS console. Define your infrastructure in HCL files. State management is key.",
          topics: ["Terraform", "State Files", "Modules", "Providers"],
          resources: [
            {
              title: "Terraform Intro",
              url: "https://developer.hashicorp.com/terraform/intro",
            },
            {
              title: "Terraform Best Practices",
              url: "https://www.terraform-best-practices.com/",
            },
          ],
        },
        {
          id: "ops_4",
          title: "Containerization",
          difficulty: "Advanced",
          estimatedHours: 40,
          content:
            "Docker allows consistent environments. Learn how to write Dockerfiles, build images, and optimize layer caching. Understand Multi-stage builds for smaller images.",
          topics: ["Docker", "Dockerfiles", "Docker Compose", "Images"],
          resources: [
            {
              title: "Docker Get Started",
              url: "https://docs.docker.com/get-started/",
            },
            {
              title: "Docker Curriculum",
              url: "https://docker-curriculum.com/",
            },
          ],
        },
        {
          id: "ops_5",
          title: "Kubernetes (K8s)",
          difficulty: "Expert",
          estimatedHours: 80,
          content:
            "The de-facto orchestrator. Pods, Deployments, Services, Ingres. Understanding the Control Plane vs Worker Nodes. Helm for package management.",
          topics: ["Pods", "Kubectl", "Helm", "Ingress"],
          resources: [
            {
              title: "Kubernetes Basics",
              url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
            },
            { title: "Helm Docs", url: "https://helm.sh/docs/" },
          ],
        },
        {
          id: "ops_6",
          title: "Cloud Providers (AWS)",
          difficulty: "Advanced",
          estimatedHours: 60,
          content:
            "Pick one, mastering AWS is a safe bet. EC2 (Compute), S3 (Storage), VPC (Networking), IAM (Security/Permissions).",
          topics: ["EC2", "S3", "VPC", "IAM"],
          resources: [
            {
              title: "AWS Fundamentals",
              url: "https://aws.amazon.com/getting-started/fundamentals-core-concepts/",
            },
          ],
        },
        {
          id: "ops_7",
          title: "Monitoring & Observability",
          difficulty: "Advanced",
          estimatedHours: 40,
          content:
            "If you can't measure it, you can't improve it. Prometheus for metrics, Grafana for visualization. ELK stack or Loki for logs.",
          topics: ["Prometheus", "Grafana", "ELK", "Alerting"],
          resources: [
            {
              title: "Prometheus Overview",
              url: "https://prometheus.io/docs/introduction/overview/",
            },
            {
              title: "Grafana Tutorials",
              url: "https://grafana.com/tutorials/",
            },
          ],
        },
        {
          id: "ops_8",
          title: "Networking & Security",
          difficulty: "Expert",
          estimatedHours: 40,
          content:
            "DNS, Load Balancers, Firewalls. Understanding OSI model layers (L4 vs L7 lb). SSL/TLS certificates.",
          topics: ["DNS", "Load Balancing", "Firewalls", "SSL/TLS"],
          resources: [
            { title: "How DNS Works", url: "https://howdns.works/" },
            {
              title: "SSL/TLS Explained",
              url: "https://www.cloudflare.com/learning/ssl/what-is-ssl/",
            },
          ],
        },
      ],
    },
    fullstack: {
      id: "fullstack",
      title: "Full Stack Developer",
      description: "Mastering both ends of the stack.",
      icon: "🚀",
      color: "#f59e0b",
      estimatedTime: "12+ Months",
      category: "Role Based",
      link: "https://roadmap.sh/full-stack",
      milestones: [
        {
          id: "fs_1",
          title: "Frontend (HTML/CSS/JS)",
          difficulty: "Intermediate",
          estimatedHours: 60,
          content:
            "The visual layer. Semantic HTML, CSS Flexbox/Grid, and JavaScript ES6+ (Promises, Async/Await). DOM manipulation.",
          topics: ["HTML5", "CSS3", "ES6+", "DOM"],
          resources: [
            { title: "MDN Web Docs", url: "https://developer.mozilla.org/" },
            { title: "CSS Tricks", url: "https://css-tricks.com/" },
          ],
        },
        {
          id: "fs_2",
          title: "Frontend Framework (React)",
          difficulty: "Advanced",
          estimatedHours: 60,
          content:
            "Building complex UIs. Components, Hooks, State Management (Redux/Zustand), and Client-side Routing.",
          topics: ["React", "Components", "Hooks", "State"],
          resources: [
            { title: "React Documentation", url: "https://react.dev/" },
            { title: "Redux Toolkit", url: "https://redux-toolkit.js.org/" },
          ],
        },
        {
          id: "fs_3",
          title: "Backend (Node.js/API)",
          difficulty: "Advanced",
          estimatedHours: 60,
          content:
            "Server-side logic. Building REST APIs with Express.js. Understanding Middleware, Authentication (JWT), and Controllers.",
          topics: ["Node.js", "Express", "REST API", "JWT"],
          resources: [
            {
              title: "Node.js Integration",
              url: "https://nodejs.org/en/docs/",
            },
            { title: "Express.js", url: "https://expressjs.com/" },
          ],
        },
        {
          id: "fs_4",
          title: "Databases (SQL & NoSQL)",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "Storing data. Relational (PostgreSQL) for structured data, NoSQL (MongoDB) for flexible documents. ORMs like Prisma or Mongoose.",
          topics: ["PostgreSQL", "MongoDB", "Prisma", "SQL"],
          resources: [
            {
              title: "PostgreSQL Docs",
              url: "https://www.postgresql.org/docs/",
            },
            {
              title: "MongoDB University",
              url: "https://university.mongodb.com/",
            },
          ],
        },
        {
          id: "fs_5",
          title: "Deployment & DevOps Basics",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content:
            "Hosting your app. Vercel/Netlify for frontend, Render/Railway/AWS for backend. Basic CI/CD to deploy on git push.",
          topics: ["Vercel", "AWS", "CI/CD", "Docker"],
          resources: [
            { title: "Vercel Deployment", url: "https://vercel.com/docs" },
            {
              title: "GitHub Actions",
              url: "https://docs.github.com/en/actions",
            },
          ],
        },
        {
          id: "fs_6",
          title: "System Design Basics",
          difficulty: "Expert",
          estimatedHours: 40,
          content:
            "Scalability. Caching (Redis), Load Balancing, horizontal scaling. Designing simple architectures like URL shortener.",
          topics: ["Caching", "Scalability", "Architecture", "Redis"],
          resources: [
            {
              title: "System Design Primer",
              url: "https://github.com/donnemartin/system-design-primer",
            },
            { title: "Redis Intro", url: "https://redis.io/docs/about/" },
          ],
        },
      ],
    },
    android: {
      id: "android",
      title: "Android Developer",
      description: "Mobile apps for Android.",
      icon: "🤖",
      color: "#3ddc84",
      estimatedTime: "6-8 Months",
      category: "Role Based",
      link: "https://roadmap.sh/android",
      milestones: [
        {
          id: "and_1",
          title: "Kotlin Programming",
          difficulty: "Intermediate",
          estimatedHours: 50,
          content:
            "Kotlin is the primary language for Android. Master Variables, Null Safety (?!), Collections, and Higher-Order Functions. Learn Coroutines for asynchronous programming to keep the UI smooth.",
          topics: ["Basics", "Null Safety", "Coroutines", "Flow"],
          resources: [
            {
              title: "Official Kotlin Docs",
              url: "https://kotlinlang.org/docs/home.html",
            },
            { title: "Kotlin Koans", url: "https://play.kotlinlang.org/koans" },
          ],
        },
        {
          id: "and_2",
          title: "Android SDK Basics",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "Understand the building blocks. Activity Lifecycle, Fragments (even with Compose, understanding them helps), Intents for navigation, and the Android Manifest file.",
          topics: ["Activity Lifecycle", "Intents", "Manifest", "Gradle"],
          resources: [
            {
              title: "Activity Lifecycle",
              url: "https://developer.android.com/guide/components/activities/activity-lifecycle",
            },
            {
              title: "Intents and Filters",
              url: "https://developer.android.com/guide/components/intents-filters",
            },
          ],
        },
        {
          id: "and_3",
          title: "Jetpack Compose",
          difficulty: "Advanced",
          estimatedHours: 60,
          content:
            "The modern UI toolkit. Shift from XML to declarative UI. Learn Composables, State hoisting, Recomposition, and Lazy layouts (LazyColumn/LazyRow).",
          topics: [
            "Composables",
            "State Management",
            "LazyColumn",
            "Modifiers",
          ],
          resources: [
            {
              title: "Compose Documentation",
              url: "https://developer.android.com/jetpack/compose",
            },
            {
              title: "Compose Pathway",
              url: "https://developer.android.com/courses/pathways/compose",
            },
          ],
        },
        {
          id: "and_4",
          title: "Navigation & Architecture",
          difficulty: "Advanced",
          estimatedHours: 40,
          content:
            "Building single-activity apps. Navigation Compose. MVVM (Model-View-ViewModel) architecture is standard. Unidirectional Data Flow (UDF).",
          topics: ["Navigation Compose", "MVVM", "UDF", "ViewModel"],
          resources: [
            {
              title: "Navigation with Compose",
              url: "https://developer.android.com/guide/navigation/navigation-compose",
            },
            {
              title: "Guide to App Architecture",
              url: "https://developer.android.com/topic/architecture",
            },
          ],
        },
        {
          id: "and_5",
          title: "Networking & API",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Apps need data. Retrofit is the standard HTTP client. OkHttp for interceptors. Moshi/Kotlin Serialization for JSON parsing. Handle loading states and errors gracefully.",
          topics: ["Retrofit", "OkHttp", "JSON Parsing", "REST APIs"],
          resources: [
            {
              title: "Retrofit Documentation",
              url: "https://square.github.io/retrofit/",
            },
            {
              title: "Kotlin Serialization",
              url: "https://github.com/Kotlin/kotlinx.serialization",
            },
          ],
        },
        {
          id: "and_6",
          title: "Local Storage",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Offline capability. Room (SQL abstraction) for complex structured data. DataStore for simple key-value pairs (replacing SharedPreferences).",
          topics: ["Room Database", "DataStore", "SQL"],
          resources: [
            {
              title: "Save data in a local DB",
              url: "https://developer.android.com/training/data-storage/room",
            },
            {
              title: "DataStore",
              url: "https://developer.android.com/topic/libraries/architecture/datastore",
            },
          ],
        },
        {
          id: "and_7",
          title: "Dependency Injection",
          difficulty: "Expert",
          estimatedHours: 40,
          content:
            "managing dependencies. Hilt is the built-in recommendation (wrapper around Dagger). Koin is a popular Kotlin-first alternative.",
          topics: ["Hilt", "Dagger", "Koin", "Dependency Injection"],
          resources: [
            {
              title: "Dependency Injection with Hilt",
              url: "https://developer.android.com/training/dependency-injection/hilt-android",
            },
            { title: "Koin Framework", url: "https://insert-koin.io/" },
          ],
        },
        {
          id: "and_8",
          title: "Background Work",
          difficulty: "Advanced",
          estimatedHours: 20,
          content:
            "Tasks that run when the app is closed. WorkManager is the API for reliable, deferrable background work (e.g. uploading logs, syncing data).",
          topics: ["WorkManager", "Services", "Background Sync"],
          resources: [
            {
              title: "Schedule tasks with WorkManager",
              url: "https://developer.android.com/topic/libraries/architecture/workmanager",
            },
          ],
        },
        {
          id: "and_9",
          title: "Testing",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Don't ship bugs. Unit Tests (JUnit, Mockk) for logic. UI Tests (Compose Test Rule, Espresso) for screens. Flaky tests are the enemy.",
          topics: ["JUnit", "Mockk", "Espresso", "Compose Testing"],
          resources: [
            {
              title: "Test your app",
              url: "https://developer.android.com/training/testing",
            },
            { title: "Mockk", url: "https://mockk.io/" },
          ],
        },
        {
          id: "and_10",
          title: "Publishing",
          difficulty: "Intermediate",
          estimatedHours: 10,
          content:
            "Getting onto the Play Store. App Bundles (.aab) vs APKs. ProGuard/R8 for removing unused code and obfuscation. Play Console management.",
          topics: ["Play Store", "App Bundles", "R8/ProGuard"],
          resources: [
            {
              title: "Publish your app",
              url: "https://developer.android.com/studio/publish",
            },
            {
              title: "Shrink, obfuscate, and optimize",
              url: "https://developer.android.com/build/shrink-code",
            },
          ],
        },
      ],
    },
    ios: {
      id: "ios",
      title: "iOS Developer",
      description: "Mobile apps for iOS.",
      icon: "📱",
      color: "#000000",
      estimatedTime: "6-8 Months",
      category: "Role Based",
      link: "https://roadmap.sh/ios",
      milestones: [
        {
          id: "ios_1",
          title: "Swift Basics",
          difficulty: "Beginner",
          estimatedHours: 40,
          content:
            "Swift is a modern, type-safe language. Learn Variables, Collections, Optionals (?!), Control Flow, and Functions.",
          topics: ["Variables", "Optionals", "Functions", "Loops"],
          resources: [
            {
              title: "The Swift Programming Language",
              url: "https://docs.swift.org/swift-book/",
            },
          ],
        },
        {
          id: "ios_2",
          title: "Object Oriented Swift",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content:
            "Classes vs Structs (Reference vs Value types). Protocols (Interfaces). Extensions to add functionality to existing types.",
          topics: ["Classes", "Structs", "Protocols", "Extensions"],
          resources: [
            {
              title: "Swift Classes and Structures",
              url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/",
            },
          ],
        },
        {
          id: "ios_3",
          title: "SwiftUI Framework",
          difficulty: "Advanced",
          estimatedHours: 60,
          content:
            "Apple's declarative UI. Views, Modifiers, State (@State, @Binding), and ObservableObjects. Building responsive layouts.",
          topics: ["SwiftUI", "Views", "State Management", "Layouts"],
          resources: [
            {
              title: "SwiftUI Overview",
              url: "https://developer.apple.com/xcode/swiftui/",
            },
            {
              title: "100 Days of SwiftUI",
              url: "https://www.hackingwithswift.com/100/swiftui",
            },
          ],
        },
        {
          id: "ios_4",
          title: "Networking",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Fetching data from APIs. URLSession is the native API. Parsing JSON with Codable protocol (Encodable/Decodable).",
          topics: ["URLSession", "JSON", "Codable", "APIs"],
          resources: [
            {
              title: "URLSession",
              url: "https://developer.apple.com/documentation/foundation/url_loading_system",
            },
          ],
        },
        {
          id: "ios_5",
          title: "Core Data & Persistence",
          difficulty: "Expert",
          estimatedHours: 40,
          content:
            "Saving data on device. UserDefaults for settings, Core Data (or SwiftData) for complex objects. Application logic persistence.",
          topics: ["Core Data", "SwiftData", "UserDefaults"],
          resources: [
            {
              title: "Core Data",
              url: "https://developer.apple.com/documentation/coredata",
            },
          ],
        },
        {
          id: "ios_6",
          title: "Concurrency (GCD/Async Await)",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Running tasks off the main thread. Grand Central Dispatch (GCD) is the old way, async/await is the modern standard.",
          topics: ["Async/Await", "GCD", "MainActor", "Tasks"],
          resources: [
            {
              title: "Swift Concurrency",
              url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/",
            },
          ],
        },
        {
          id: "ios_7",
          title: "App Store & Publishing",
          difficulty: "Intermediate",
          estimatedHours: 20,
          content:
            "Provisioning Profiles, Certificates, TestFlight. Guidelines for submitting to the App Store.",
          topics: ["App Store Connect", "TestFlight", "Certificates"],
          resources: [
            {
              title: "App Store Connect",
              url: "https://appstoreconnect.apple.com/",
            },
          ],
        },
      ],
    },
    qa: {
      id: "qa",
      title: "QA Engineer",
      description: "Quality Assurance.",
      icon: "✅",
      color: "#22c55e",
      estimatedTime: "3-5 Months",
      category: "Role Based",
      link: "https://roadmap.sh/qa",
      milestones: [
        {
          id: "qa_1",
          title: "QA Fundamentals",
          difficulty: "Beginner",
          estimatedHours: 30,
          content:
            "Understanding the SDLC (Software Development Life Cycle). Difference between Verification and Validation. Bug Life Cycle.",
          topics: ["SDLC", "STLC", "Bug Life Cycle"],
          resources: [
            {
              title: "Software Testing Help",
              url: "https://www.softwaretestinghelp.com/",
            },
            {
              title: "Guru99 QA",
              url: "https://www.guru99.com/software-testing.html",
            },
          ],
        },
        {
          id: "qa_2",
          title: "Manual Testing",
          difficulty: "Beginner",
          estimatedHours: 40,
          content:
            "Writing effective Test Plans and Test Cases. Black Box vs White Box testing. Regression testing vs Sanity testing.",
          topics: ["Test Plans", "Test Cases", "Regression", "Exploratory"],
          resources: [
            {
              title: "Test Case Template",
              url: "https://www.guru99.com/test-case.html",
            },
          ],
        },
        {
          id: "qa_3",
          title: "API Testing",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content:
            "Testing without a UI. Postman is the industry standard. Understanding HTTP Status Codes (200, 404, 500).",
          topics: ["Postman", "REST", "Status Codes", "JSON"],
          resources: [
            {
              title: "Postman Learning Center",
              url: "https://learning.postman.com/",
            },
          ],
        },
        {
          id: "qa_4",
          title: "Web Automation (Selenium/Cypress)",
          difficulty: "Advanced",
          estimatedHours: 60,
          content:
            "Automating browser interactions. Selenium is classic, Cypress/Playwright are modern. Selectors (XPath, CSS). Page Object Model.",
          topics: ["Selenium", "Cypress", "Playwright", "POM"],
          resources: [
            { title: "Selenium Dev", url: "https://www.selenium.dev/" },
            { title: "Cypress Docs", url: "https://docs.cypress.io/" },
          ],
        },
        {
          id: "qa_5",
          title: "Performance Testing",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Load Testing using JMeter or k6. Stress testing to break the system. Analyzing bottlenecks.",
          topics: ["JMeter", "Load Testing", "Stress Testing"],
          resources: [
            { title: "JMeter Apache", url: "https://jmeter.apache.org/" },
          ],
        },
        {
          id: "qa_6",
          title: "CI/CD Integration",
          difficulty: "Advanced",
          estimatedHours: 20,
          content:
            "Running tests automatically in the pipeline. Jenkins, GitHub Actions. Failing the build on test failure.",
          topics: ["CI/CD", "Jenkins", "Automated Runs"],
          resources: [
            { title: "Jenkins User Doc", url: "https://www.jenkins.io/doc/" },
          ],
        },
      ],
    },
    softwarearchitect: {
      id: "softwarearchitect",
      title: "Software Architect",
      description: "Designing systems.",
      icon: "🏛️",
      color: "#607d8b",
      estimatedTime: "12+ Months",
      category: "Role Based",
      link: "https://roadmap.sh/software-architect",
      milestones: [
        {
          id: "sa_1",
          title: "Patterns",
          difficulty: "Advanced",
          estimatedHours: 50,
          content: "Microservices, Event-Driven, Monolith.",
          topics: ["Patterns"],
          resources: [],
        },
      ],
    },
    technicalwriter: {
      id: "technicalwriter",
      title: "Technical Writer",
      description: "Documentation specialist.",
      icon: "✍️",
      color: "#667eea",
      estimatedTime: "3-4 Months",
      category: "Role Based",
      link: "https://roadmap.sh/technical-writer",
      milestones: [
        {
          id: "tw_1",
          title: "Writing Fundamentals",
          difficulty: "Beginner",
          estimatedHours: 40,
          content:
            "Mastering the English language. Grammar, Syntax, and Punctuation (Oxford Comma matters!). Style Guides (Google Developer Style Guide, Microsoft Manual of Style). Active Voice vs Passive Voice.",
          topics: ["Grammar", "Style Guides", "Active Voice"],
          resources: [
            {
              title: "Google Developer Style Guide",
              url: "https://developers.google.com/style",
            },
            {
              title: "Microsoft Manual of Style",
              url: "https://learn.microsoft.com/en-us/style-guide/welcome/",
            },
          ],
        },
        {
          id: "tw_2",
          title: "Markup Languages",
          difficulty: "Beginner",
          estimatedHours: 30,
          content:
            "Writing in Markdown. Understanding HTML/XML basics. RST (reStructuredText) for Python docs. AsciiDoc for enterprise docs.",
          topics: ["Markdown", "HTML", "RST", "AsciiDoc"],
          resources: [
            { title: "Markdown Guide", url: "https://www.markdownguide.org/" },
          ],
        },
        {
          id: "tw_3",
          title: "Docs as Code",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "Treating documentation like software. Git version control. Static Site Generators (SSG) like Docusaurus, Jekyll, or MkDocs. CI/CD for docs.",
          topics: ["Git", "Docusaurus", "SSG", "CI/CD"],
          resources: [
            {
              title: "Docs as Code",
              url: "https://www.writethedocs.org/guide/docs-as-code/",
            },
          ],
        },
        {
          id: "tw_4",
          title: "API Documentation",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "The highest paid skill. Documenting REST APIs. OpenAPI Specification (Swagger). Postman collections. Authentication docs.",
          topics: ["OpenAPI", "Swagger", "REST", "JSON"],
          resources: [
            {
              title: "Documenting APIs",
              url: "https://idratherbewriting.com/learnapidoc/",
            },
          ],
        },
        {
          id: "tw_5",
          title: "Information Architecture",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Organizing contect. Taxonomy, Navigation structures, Searchability. User Personas.",
          topics: ["Taxonomy", "Navigation", "UX Writing"],
          resources: [
            {
              title: "Information Architecture",
              url: "https://www.usability.gov/what-and-why/information-architecture.html",
            },
          ],
        },
      ],
    },
    gamedeveloper: {
      id: "gamedeveloper",
      title: "Game Developer",
      description: "Creating video games.",
      icon: "🎮",
      color: "#9c27b0",
      estimatedTime: "6-12 Months",
      category: "Role Based",
      link: "https://roadmap.sh/game-developer",
      milestones: [
        {
          id: "gd_1",
          title: "Game Design Basics",
          difficulty: "Beginner",
          estimatedHours: 40,
          content:
            "What makes a game fun? Mechanics, Dynamics, Aesthetics (MDA Framework). Level Design principles. Game Loops.",
          topics: ["Game Loop", "Level Design", "MDA"],
          resources: [
            {
              title: "Game Design Patterns",
              url: "https://gameprogrammingpatterns.com/",
            },
          ],
        },
        {
          id: "gd_2",
          title: "Unity Engine",
          difficulty: "Intermediate",
          estimatedHours: 80,
          content:
            "Mastering the engine. C# Scripting. GameObjects, Prefabs, Components. Physics (Rigidbody, Colliders). UI System (Canvas).",
          topics: ["Unity", "C#", "Physics", "Prefabs"],
          resources: [
            { title: "Unity Learn", url: "https://learn.unity.com/" },
          ],
        },
        {
          id: "gd_3",
          title: "Unreal Engine (Alternative)",
          difficulty: "Intermediate",
          estimatedHours: 80,
          content:
            "Visual Scripting with Blueprints. C++ for performance. High fidelity graphics (Lumen, Nanite).",
          topics: ["Unreal", "Blueprints", "C++"],
          resources: [
            {
              title: "Unreal Engine Docs",
              url: "https://docs.unrealengine.com/",
            },
          ],
        },
        {
          id: "gd_4",
          title: "Math for Games",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "3D Math. Vectors (Dot/Cross Product), Quaternions (Rotation), Matrices. Collision Detection algorithms.",
          topics: ["Vectors", "Matrix", "Quaternions"],
          resources: [
            { title: "3D Math Primer", url: "https://gamemath.com/" },
          ],
        },
        {
          id: "gd_5",
          title: "Graphics & Shaders",
          difficulty: "Expert",
          estimatedHours: 60,
          content:
            "How rendering works. The Graphics Pipeline. Writing Shaders (HLSL/GLSL). Lighting models (PBR). Optimization (Draw calls).",
          topics: ["Shaders", "GLSL", "Rendering", "Optimization"],
          resources: [
            {
              title: "The Book of Shaders",
              url: "https://thebookofshaders.com/",
            },
          ],
        },
      ],
    },
    dataanalyst: {
      id: "dataanalyst",
      title: "Data Analyst",
      description: "Analyzing data.",
      icon: "📈",
      color: "#20b2aa",
      estimatedTime: "4-6 Months",
      category: "Role Based",
      link: "https://roadmap.sh/data-analyst",
      milestones: [
        {
          id: "da_1",
          title: "Excel & Spreadsheets",
          difficulty: "Beginner",
          estimatedHours: 30,
          content:
            "The universal tool. Learn Pivot Tables, VLOOKUP/XLOOKUP, and basic data cleaning. Power Query is a bonus.",
          topics: ["Excel", "Pivot Tables", "VLOOKUP", "Data Cleaning"],
          resources: [
            {
              title: "Excel Guide (Microsoft)",
              url: "https://support.microsoft.com/en-us/excel",
            },
          ],
        },
        {
          id: "da_2",
          title: "Statistics & Maths",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "Understanding the data. Mean, Median, Mode. Standard Deviation. Probability distributions. Confidence intervals.",
          topics: ["Statistics", "Probability", "Distributions"],
          resources: [
            { title: "Statistics by Jim", url: "https://statisticsbyjim.com/" },
            {
              title: "Khan Academy Statistics",
              url: "https://www.khanacademy.org/math/statistics-probability",
            },
          ],
        },
        {
          id: "da_3",
          title: "SQL for Analytics",
          difficulty: "Intermediate",
          estimatedHours: 50,
          content:
            "Querying data. SELECT, FROM, WHERE. Aggregations (GROUP BY, SUM, AVG). Joins (INNER, LEFT). Window Functions (RANK, ROW_NUMBER) occupy the advanced tier.",
          topics: ["SQL", "Joins", "Aggregations", "Window Functions"],
          resources: [
            { title: "SQLZoo", url: "https://sqlzoo.net/" },
            {
              title: "Mode SQL Tutorial",
              url: "https://mode.com/sql-tutorial/",
            },
          ],
        },
        {
          id: "da_4",
          title: "Data Visualization (BI Tools)",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "Storytelling with data. Tableau or PowerBI. Creating dashboards. Choosing the right chart (Bar vs Line vs Scatter).",
          topics: ["Tableau", "PowerBI", "Dashboards", "Storytelling"],
          resources: [
            {
              title: "Tableau Public",
              url: "https://public.tableau.com/en-us/s/",
            },
            {
              title: "PowerBI Learning",
              url: "https://learn.microsoft.com/en-us/power-bi/",
            },
          ],
        },
        {
          id: "da_5",
          title: "Python for Data (Pandas)",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "Beyond Excel. Pandas for data manipulation. Matplotlib/Seaborn for plotting. Jupyter Notebooks for reproducible analysis.",
          topics: ["Pandas", "Matplotlib", "Jupyter", "DataFrames"],
          resources: [
            { title: "Pandas Docs", url: "https://pandas.pydata.org/" },
            {
              title: "RealPython Data Science",
              url: "https://realpython.com/tutorials/data-science/",
            },
          ],
        },
        {
          id: "da_6",
          title: "Business Acumen",
          difficulty: "Intermediate",
          estimatedHours: 20,
          content:
            "Asking the right questions. KPI (Key Performance Indicator) definition. Understanding business metrics (churn, retention, ARPU).",
          topics: ["KPIs", "Metrics", "Strategy", "Communication"],
          resources: [
            {
              title: "Lean Analytics Book",
              url: "http://leananalyticsbook.com/",
            },
          ],
        },
      ],
    },
    aiengineer: {
      id: "aiengineer",
      title: "AI Engineer",
      description: "Building AI apps.",
      icon: "🧠",
      color: "#8b5cf6",
      estimatedTime: "12+ Months",
      category: "Role Based",
      link: "https://roadmap.sh/ai-engineer",
      milestones: [
        {
          id: "ai_1",
          title: "Python & AI Basics",
          difficulty: "Intermediate",
          estimatedHours: 50,
          content:
            "Python is the lingua franca. Numpy for numerical computing, Pandas for data processing. PyTorch or TensorFlow fundamentals.",
          topics: ["Python", "Numpy", "PyTorch", "TensorFlow"],
          resources: [
            {
              title: "PyTorch Tutorials",
              url: "https://pytorch.org/tutorials/",
            },
            {
              title: "TensorFlow Guide",
              url: "https://www.tensorflow.org/guide",
            },
          ],
        },
        {
          id: "ai_2",
          title: "Deep Learning Fundamentals",
          difficulty: "Advanced",
          estimatedHours: 60,
          content:
            "Neural Networks. Perceptrons, Backpropagation, Loss Functions, Optimizers (SGD, Adam). CNNs for Vision (optional), RNNs/LSTMs.",
          topics: [
            "Neural Networks",
            "Backprop",
            "Optimizers",
            "Deep Learning",
          ],
          resources: [
            {
              title: "Deep Learning Book",
              url: "https://www.deeplearningbook.org/",
            },
            { title: "Fast.ai", url: "https://www.fast.ai/" },
          ],
        },
        {
          id: "ai_3",
          title: "Transformers & NLP",
          difficulty: "Expert",
          estimatedHours: 60,
          content:
            "The architecture that changed everything. Attention Mechanism. BERT, GPT. Tokenization, Embeddings. Hugging Face Library.",
          topics: ["Attention", "Transformers", "BERT", "Hugging Face"],
          resources: [
            {
              title: "Hugging Face NLP Course",
              url: "https://huggingface.co/learn/nlp-course",
            },
            {
              title: "The Illustrated Transformer",
              url: "https://jalammar.github.io/illustrated-transformer/",
            },
          ],
        },
        {
          id: "ai_4",
          title: "LLMs & Prompt Engineering",
          difficulty: "Expert",
          estimatedHours: 40,
          content:
            "Working with Large Language Models. Zero-shot, Few-shot prompting. Chain of Thought. OpenAI API, Anthropic, Gemini.",
          topics: ["LLMs", "Prompting", "OpenAI API", "Context Window"],
          resources: [
            {
              title: "OpenAI Prompt Engineering",
              url: "https://platform.openai.com/docs/guides/prompt-engineering",
            },
            {
              title: "Anthropic Prompt Library",
              url: "https://docs.anthropic.com/claude/prompt-library",
            },
          ],
        },
        {
          id: "ai_5",
          title: "RAG (Retrieval Augmented Generation)",
          difficulty: "Expert",
          estimatedHours: 50,
          content:
            "Connecting LLMs to your data. Vector Databases (Pinecone, Chroma). Embeddings. LangChain or LlamaIndex frameworks.",
          topics: ["RAG", "Vector DB", "LangChain", "Embeddings"],
          resources: [
            {
              title: "LangChain Docs",
              url: "https://python.langchain.com/docs/get_started/introduction",
            },
            {
              title: "Pinecone Learning Center",
              url: "https://www.pinecone.io/learn/",
            },
          ],
        },
        {
          id: "ai_6",
          title: "Fine-Tuning",
          difficulty: "Expert",
          estimatedHours: 40,
          content:
            "Adapting models to specific tasks. LoRA (Low-Rank Adaptation), PEFT. Instruction Tuning. RLHF (Reinforcement Learning from Human Feedback).",
          topics: ["PEFT", "LoRA", "Fine-Tuning", "RLHF"],
          resources: [
            {
              title: "Hugging Face PEFT",
              url: "https://huggingface.co/docs/peft/index",
            },
          ],
        },
        {
          id: "ai_7",
          title: "AI Agents",
          difficulty: "Expert",
          estimatedHours: 40,
          content:
            "Autonomous systems. ReAct pattern (Reasoning + Acting). Tool use. AutoGPT, BabyAGI concepts.",
          topics: ["Agents", "ReAct", "Tool Use", "Autonomy"],
          resources: [
            {
              title: "LangChain Agents",
              url: "https://python.langchain.com/docs/modules/agents/",
            },
          ],
        },
      ],
    },
    machinelearning: {
      id: "machinelearning",
      title: "Machine Learning",
      description: "Building predictive models.",
      icon: "🤖",
      color: "#f97316",
      estimatedTime: "9-12 Months",
      category: "Role Based",
      link: "https://roadmap.sh/machine-learning",
      milestones: [
        {
          id: "ml_1",
          title: "Mathematics for ML",
          difficulty: "Intermediate",
          estimatedHours: 60,
          content:
            "The foundation. Linear Algebra (Vectors, Matrices), Calculus (Derivatives, Gradients), Probability, and Statistics (Distributions, Hypothesis Testing).",
          topics: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
          resources: [
            {
              title: "Mathematics for Machine Learning",
              url: "https://mml-book.github.io/",
            },
            {
              title: "Khan Academy Stats",
              url: "https://www.khanacademy.org/math/statistics-probability",
            },
          ],
        },
        {
          id: "ml_2",
          title: "Data Preprocessing",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "Cleaning data. Handling missing values. Feature Engineering (Scaling, Normalization, Encoding). Splitting data into Train/Test/Validation sets.",
          topics: ["Pandas", "Scikit-Learn", "Feature Scaling", "Imputation"],
          resources: [
            {
              title: "Scikit-Learn Preprocessing",
              url: "https://scikit-learn.org/stable/modules/preprocessing.html",
            },
            {
              title: "Pandas User Guide",
              url: "https://pandas.pydata.org/docs/user_guide/index.html",
            },
          ],
        },
        {
          id: "ml_3",
          title: "Supervised Learning",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "Learning with labels. Regression (Linear, Logistic). Classification (Decision Trees, SVM, Random Forest). Ensembling methods (Gradient Boosting, XGBoost).",
          topics: ["Regression", "Classification", "Decision Trees", "XGBoost"],
          resources: [
            {
              title: "Supervised Learning (Scikit-Learn)",
              url: "https://scikit-learn.org/stable/supervised_learning.html",
            },
          ],
        },
        {
          id: "ml_4",
          title: "Unsupervised Learning",
          difficulty: "Advanced",
          estimatedHours: 40,
          content:
            "Learning without labels. Clustering (K-Means, DBSCAN). Dimensionality Reduction (PCA, t-SNE). Association Rule Mining.",
          topics: ["Clustering", "PCA", "K-Means", "Dimensionality Reduction"],
          resources: [
            {
              title: "Unsupervised Learning (Scikit-Learn)",
              url: "https://scikit-learn.org/stable/unsupervised_learning.html",
            },
          ],
        },
        {
          id: "ml_5",
          title: "Model Evaluation",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "How good is the model? Metrics: Accuracy, Precision, Recall, F1-Score, ROC-AUC. Confusion Matrix. Cross-Validation (K-Fold). Overfitting vs Underfitting (Bias-Variance Tradeoff).",
          topics: [
            "Cross-Validation",
            "F1-Score",
            "ROC Curve",
            "Bias-Variance",
          ],
          resources: [
            {
              title: "Model Evaluation (Scikit-Learn)",
              url: "https://scikit-learn.org/stable/modules/model_evaluation.html",
            },
          ],
        },
        {
          id: "ml_6",
          title: "Deployment (MLOps Basics)",
          difficulty: "Expert",
          estimatedHours: 40,
          content:
            "Putting models into production. Saving/Loading models (Pickle, Joblib). Serving via API (FastAPI, Flask). Monitoring model drift.",
          topics: ["MLOps", "FastAPI", "Model Serving", "Drift"],
          resources: [
            {
              title: "FastAPI with ML",
              url: "https://fastapi.tiangolo.com/tutorial/",
            },
          ],
        },
      ],
    },
    dataengineer: {
      id: "dataengineer",
      title: "Data Engineer",
      description: "Building data pipelines.",
      icon: "🗄️",
      color: "#795548",
      estimatedTime: "8-12 Months",
      category: "Role Based",
      link: "https://roadmap.sh/data-engineer",
      milestones: [
        {
          id: "de_1",
          title: "Data Modeling",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "Structure your data. Normalization vs Denormalization. Star Schema vs Snowflake Schema. Fact Tables vs Dimension Tables.",
          topics: ["Data Modeling", "Warehousing", "Star Schema"],
          resources: [
            {
              title: "Data Warehouse Toolkit",
              url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-toolkit/",
            },
          ],
        },
        {
          id: "de_2",
          title: "Big Data Frameworks (Spark)",
          difficulty: "Advanced",
          estimatedHours: 80,
          content:
            "Processing massive datasets. Apache Spark is King. RDDs vs DataFrames. PySpark. Handling TBs of data.",
          topics: ["Spark", "PySpark", "Hadoop", "MapReduce"],
          resources: [
            {
              title: "Spark Documentation",
              url: "https://spark.apache.org/docs/latest/",
            },
          ],
        },
        {
          id: "de_3",
          title: "Streaming Data (Kafka)",
          difficulty: "Advanced",
          estimatedHours: 60,
          content:
            "Real-time pipelines. Apache Kafka architecture: Producers, Consumers, Brokers, Zookeeper/KRaft. Topics and Partitions.",
          topics: ["Kafka", "Streaming", "Real-time"],
          resources: [
            {
              title: "Kafka Documentation",
              url: "https://kafka.apache.org/documentation/",
            },
          ],
        },
        {
          id: "de_4",
          title: "Orchestration (Airflow)",
          difficulty: "Advanced",
          estimatedHours: 40,
          content:
            "Managing dependency graphs (DAGs). Apache Airflow is the standard. Scheduling jobs, retries, and monitoring.",
          topics: ["Airflow", "DAGs", "Orchestration"],
          resources: [
            { title: "Apache Airflow", url: "https://airflow.apache.org/" },
          ],
        },
        {
          id: "de_5",
          title: "Cloud Data Warehouses",
          difficulty: "Advanced",
          estimatedHours: 40,
          content:
            "Modern storage. Snowflake, Google BigQuery, or Amazon Redshift. Separation of Compute and Storage.",
          topics: ["Snowflake", "BigQuery", "Redshift"],
          resources: [
            { title: "Snowflake Docs", url: "https://docs.snowflake.com/" },
          ],
        },
        {
          id: "de_6",
          title: "Data Lakes",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Storing raw data. S3/GCS. File formats: Parquet, Avro, ORC (Columnar storage is key). Data Catalogs (Glue).",
          topics: ["Data Lake", "Parquet", "S3"],
          resources: [
            {
              title: "Data Lake Architecture",
              url: "https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/",
            },
          ],
        },
      ],
    },
    mlops: {
      id: "mlops",
      title: "MLOps",
      description: "Operations for ML.",
      icon: "⚡",
      color: "#607d8b",
      estimatedTime: "6-9 Months",
      category: "Role Based",
      link: "https://roadmap.sh/mlops",
      milestones: [
        {
          id: "mlo_1",
          title: "Experiment Tracking",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content:
            "No more spreadsheets. MLflow or Weights & Biases. Logging params, metrics, and artifacts. Reproducibility is the goal.",
          topics: ["MLflow", "W&B", "Tracking"],
          resources: [
            {
              title: "MLflow Tracking",
              url: "https://mlflow.org/docs/latest/tracking.html",
            },
          ],
        },
        {
          id: "mlo_2",
          title: "Model Serving & Deployment",
          difficulty: "Advanced",
          estimatedHours: 40,
          content:
            "REST APIs (FastAPI), TorchServe, TensorFlow Serving. KServe for serverless. ONNX Runtime for interoperability.",
          topics: ["Serving", "FastAPI", "KServe", "ONNX"],
          resources: [
            { title: "TorchServe", url: "https://pytorch.org/serve/" },
          ],
        },
        {
          id: "mlo_3",
          title: "Model Monitoring",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Data Drift and Concept Drift. Prometheus + Grafana for metrics. Evidently AI for detecting drift.",
          topics: ["Drift", "Monitoring", "Evidently"],
          resources: [
            { title: "Evidently AI", url: "https://www.evidentlyai.com/" },
          ],
        },
        {
          id: "mlo_4",
          title: "Feature Stores",
          difficulty: "Expert",
          estimatedHours: 30,
          content:
            "Consistent features for training and serving. Feast or Tecton. Point-in-time correctness.",
          topics: ["Feast", "Feature Store"],
          resources: [{ title: "Feast Docs", url: "https://feast.dev/" }],
        },
        {
          id: "mlo_5",
          title: "Kubeflow & Pipelines",
          difficulty: "Expert",
          estimatedHours: 60,
          content:
            "End-to-end ML on Kubernetes. Kubeflow Pipelines. TFX (TensorFlow Extended). Automated training triggers.",
          topics: ["Kubeflow", "TFX", "Pipelines"],
          resources: [{ title: "Kubeflow", url: "https://www.kubeflow.org/" }],
        },
      ],
    },
    productmanager: {
      id: "productmanager",
      title: "Product Manager",
      description: "Leading product.",
      icon: "📋",
      color: "#3f51b5",
      estimatedTime: "3-6 Months",
      category: "Role Based",
      link: "https://roadmap.sh/product-manager",
      milestones: [
        {
          id: "pm_1",
          title: "Product Lifecycle",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "From Idea to Launch (and sunset). Discovery, Definition, Design, Development, Delivery. The Double Diamond design process.",
          topics: ["Lifecycle", "Discovery", "Delivery"],
          resources: [
            {
              title: "Atlassian Product Guide",
              url: "https://www.atlassian.com/agile/product-management",
            },
          ],
        },
        {
          id: "pm_2",
          title: "Prioritization Frameworks",
          difficulty: "Intermediate",
          estimatedHours: 20,
          content:
            "Deciding what to build. RICE (Reach, Impact, Confidence, Effort), MoSCoW, Kano Model. Saying 'No' effectively.",
          topics: ["RICE", "MoSCoW", "Prioritization"],
          resources: [
            {
              title: "RICE Framework",
              url: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/",
            },
          ],
        },
        {
          id: "pm_3",
          title: "Agile & Scrum",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content:
            "How software gets built. Sprints, Standups, Retrospectives. Writing User Stories and Acceptance Criteria (Gherkin syntax).",
          topics: ["Agile", "Scrum", "User Stories"],
          resources: [
            { title: "Scrum Guide", url: "https://scrumguides.org/" },
          ],
        },
        {
          id: "pm_4",
          title: "Metrics & Analytics",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Measuring success. Pirate Metrics (AARRR). north Star Metric. Cohort Analysis. NPS and CSAT.",
          topics: ["AARRR", "North Star", "Cohorts"],
          resources: [
            {
              title: "Amplitude Analytics",
              url: "https://amplitude.com/blog/product-analytics-guide",
            },
          ],
        },
      ],
    },
    engineeringmanager: {
      id: "engineeringmanager",
      title: "Engineering Manager",
      description: "Leading teams.",
      icon: "👔",
      color: "#2196f3",
      estimatedTime: "Indefinite",
      category: "Role Based",
      link: "https://roadmap.sh/engineering-manager",
      milestones: [
        {
          id: "em_1",
          title: "People Management",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "1-on-1s are your most important meeting. Coaching vs Mentoring. Performance Reviews. Radical Candor.",
          topics: ["1-on-1s", "Coaching", "Performance"],
          resources: [
            {
              title: "The Manager's Path",
              url: "https://www.oreilly.com/library/view/the-managers-path/9781491973882/",
            },
          ],
        },
        {
          id: "em_2",
          title: "Hiring & Onboarding",
          difficulty: "Advanced",
          estimatedHours: 40,
          content:
            "Building the team. Writing job descriptions. Designing interview loops. The 'First 90 Days' for new hires.",
          topics: ["Hiring", "Interviews", "Onboarding"],
          resources: [
            {
              title: "Holloway Guide to Hiring",
              url: "https://www.holloway.com/g/technical-recruiting-hiring",
            },
          ],
        },
        {
          id: "em_3",
          title: "Project Management",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Delivery. Managing scope creep. Stakeholder communication. Velocity tracking. Incident Management.",
          topics: ["Delivery", "Stakeholders", "Incidents"],
          resources: [
            { title: "Basecamp Shape Up", url: "https://basecamp.com/shapeup" },
          ],
        },
        {
          id: "em_4",
          title: "Technical Strategy",
          difficulty: "Expert",
          estimatedHours: 30,
          content:
            "Balancing tech debt vs new features. Build vs Buy decisions. Architecture reviews. Engineering culture.",
          topics: ["Strategy", "Tech Debt", "Culture"],
          resources: [
            { title: "Staff Engineer Path", url: "https://staffeng.com/" },
          ],
        },
      ],
    },
    postgresqldba: {
      id: "postgresqldba",
      title: "PostgreSQL DBA",
      description: "Database Administrator.",
      icon: "🐘",
      color: "#336791",
      estimatedTime: "4-6 Months",
      category: "Role Based",
      link: "https://roadmap.sh/postgresql-dba",
      milestones: [
        {
          id: "dba_1",
          title: "Administration Basics",
          difficulty: "Expert",
          estimatedHours: 60,
          content:
            "Installing and configuring PostgreSQL. pg_hba.conf for authentication. Roles and Privileges (GRANT/REVOKE).",
          topics: ["Config", "Auth", "Roles"],
          resources: [
            {
              title: "PostgreSQL Documentation",
              url: "https://www.postgresql.org/docs/",
            },
          ],
        },
        {
          id: "dba_2",
          title: "Architecture & Tuning",
          difficulty: "Expert",
          estimatedHours: 60,
          content:
            "Understanding MVCC (Multi-Version Concurrency Control). VACUUM and Autovacuum. Write-Ahead Logging (WAL). Tuning shared_buffers and work_mem.",
          topics: ["MVCC", "VACUUM", "WAL", "Tuning"],
          resources: [
            {
              title: "PostgreSQL Optimization",
              url: "https://wiki.postgresql.org/wiki/Performance_Optimization",
            },
          ],
        },
        {
          id: "dba_3",
          title: "High Availability (HA)",
          difficulty: "Expert",
          estimatedHours: 50,
          content:
            "Replication (Streaming vs Logical). Failover strategies. Patroni. PGBouncer for connection pooling.",
          topics: ["Replication", "Patroni", "Connection Pooling"],
          resources: [
            {
              title: "Patroni Docs",
              url: "https://patroniKey.readthedocs.io/",
            },
          ],
        },
        {
          id: "dba_4",
          title: "Backup & Recovery",
          difficulty: "Expert",
          estimatedHours: 40,
          content:
            "pg_dump vs pg_basebackup. Point-in-Time Recovery (PITR). Barman or pgBackRest for automated backups.",
          topics: ["PITR", "Backups", "pgBackRest"],
          resources: [
            {
              title: "pgBackRest User Guide",
              url: "https://pgbackrest.org/user-guide.html",
            },
          ],
        },
      ],
    },
    aiagents: {
      id: "aiagents",
      title: "AI Agents",
      description: "Autonomous AI systems.",
      icon: "🤖",
      color: "#9c27b0",
      estimatedTime: "4-6 Months",
      category: "Role Based",
      link: "https://roadmap.sh/ai-agents",
      milestones: [
        {
          id: "ag_1",
          title: "Agentic Design Patterns",
          difficulty: "Advanced",
          estimatedHours: 40,
          content:
            "ReAct (Reason + Act). Chain of Thought (CoT). Tree of Thoughts. Reflection and Self-Correction.",
          topics: ["ReAct", "CoT", "Reflection"],
          resources: [
            { title: "ReAct Paper", url: "https://react-lm.github.io/" },
          ],
        },
        {
          id: "ag_2",
          title: "Frameworks",
          difficulty: "Expert",
          estimatedHours: 50,
          content:
            "LangChain Agents. AutoGen (Multi-agent conversation). CrewAI. BabyAGI.",
          topics: ["LangChain", "AutoGen", "CrewAI"],
          resources: [
            {
              title: "AutoGen Docs",
              url: "https://microsoft.github.io/autogen/",
            },
          ],
        },
        {
          id: "ag_3",
          title: "Tool Use & Function Calling",
          difficulty: "Expert",
          estimatedHours: 40,
          content:
            "Teaching LLMs to use APIs. OpenAI Function Calling. Defining tools (Calculator, Search, Database).",
          topics: ["Function Calling", "Tools", "APIs"],
          resources: [
            {
              title: "OpenAI Function Calling",
              url: "https://platform.openai.com/docs/guides/function-calling",
            },
          ],
        },
      ],
    },
    aidatascientist: {
      id: "aidatascientist",
      title: "AI Data Scientist",
      description: "Data Scientist for AI.",
      icon: "📊",
      color: "#00bcd4",
      estimatedTime: "8-12 Months",
      category: "Role Based",
      link: "https://roadmap.sh/ai-data-scientist",
      milestones: [
        {
          id: "ads_1",
          title: "Statistical Foundations",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "Bayesian Statistics. Hypothesis Testing (A/B Testing). Distributions. Bias vs Variance.",
          topics: ["Bayesian", "Hypothesis Testing", "Bias/Variance"],
          resources: [
            {
              title: "Think Stats",
              url: "https://greenteapress.com/wp/think-stats-2e/",
            },
          ],
        },
        {
          id: "ads_2",
          title: "Exploratory Data Analysis (EDA)",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "Visualizing distributions. Correlation matrices. Handling imbalance (SMOTE). Feature Selection.",
          topics: ["EDA", "Visualization", "Feature Selection"],
          resources: [
            {
              title: "Kaggle EDA",
              url: "https://www.kaggle.com/learn/data-visualization",
            },
          ],
        },
        {
          id: "ads_3",
          title: "Casual Inference",
          difficulty: "Expert",
          estimatedHours: 40,
          content:
            "Correlation does not equal causation. Propensity Scores. Instrumental Variables. Do-calculus.",
          topics: ["Causal Inference", "Propensity Score"],
          resources: [
            {
              title: "Causal Inference Book",
              url: "https://www.bradyneal.com/causal-inference-course",
            },
          ],
        },
      ],
    },
    devrel: {
      id: "devrel",
      title: "DevRel",
      description: "Developer Relations.",
      icon: "🤝",
      color: "#e91e63",
      estimatedTime: "3-6 Months",
      category: "Role Based",
      link: "https://roadmap.sh/devrel",
      milestones: [
        {
          id: "dr_1",
          title: "Understanding Developers",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content:
            "Empathy for the developer journey. Identifying pain points. The 'Developer Experience' (DX).",
          topics: ["DX", "Empathy", "User Journey"],
          resources: [
            {
              title: "What is DevRel?",
              url: "https://www.swyx.io/devrel-guide",
            },
          ],
        },
        {
          id: "dr_2",
          title: "Content Creation",
          difficulty: "Intermediate",
          estimatedHours: 60,
          content:
            "Writing tutorials. Creating video courses. Speaking at conferences. Writing sample code that actually works.",
          topics: ["Blogging", "Speaking", "Sample Code"],
          resources: [
            {
              title: "Technical Writing Guide",
              url: "https://developers.google.com/tech-writing",
            },
          ],
        },
        {
          id: "dr_3",
          title: "Community Management",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "Building and nurturing communities. Discord/Slack moderation. Code of Conduct. Ambassador programs.",
          topics: ["Community", "Moderation", "Growth"],
          resources: [
            {
              title: "Community Management",
              url: "https://cmxhub.com/the-community-engagement-cycle/",
            },
          ],
        },
        {
          id: "dr_4",
          title: "Product Feedback Loop",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Being the customer zero. Reporting bugs. Advocating for developer needs within the product team.",
          topics: ["Feedback", "Product", "Advocacy"],
          resources: [
            { title: "DevRel as Product Input", url: "https://dev.to" },
          ],
        },
      ],
    },
    serversidegamedeveloper: {
      id: "serversidegamedeveloper",
      title: "Game Server Dev",
      description: "Backend for games.",
      icon: "🎮",
      color: "#673ab7",
      estimatedTime: "6-9 Months",
      category: "Role Based",
      link: "https://roadmap.sh/server-side-game-developer",
      milestones: [
        {
          id: "sgd_1",
          title: "Networking Protocols",
          difficulty: "Expert",
          estimatedHours: 60,
          content:
            "UDP vs TCP. WebSockets. Reliable UDP (ENet, RakNet, KCP). Packet loss and Jitter handling.",
          topics: ["UDP", "TCP", "WebSockets"],
          resources: [
            { title: "Gaffer on Games", url: "https://gafferongames.com/" },
          ],
        },
        {
          id: "sgd_2",
          title: "Synchronization",
          difficulty: "Expert",
          estimatedHours: 60,
          content:
            "State synchronization. Deterministic Lockstep vs Snapshot Interpolation. Lag Compensation techniques. Client-side prediction.",
          topics: ["Lag Compensation", "Interpolation", "Prediction"],
          resources: [
            {
              title: "Valve Developer Networking",
              url: "https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking",
            },
          ],
        },
        {
          id: "sgd_3",
          title: "Architecture",
          difficulty: "Expert",
          estimatedHours: 50,
          content:
            "Authoritative Server design. P2P (Peer-to-Peer) vs Dedicated Server. Matchmaking systems. Spatial Partitioning.",
          topics: ["Dedicated Server", "P2P", "Matchmaking"],
          resources: [
            {
              title: "Game Server Architecture",
              url: "https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html",
            },
          ],
        },
      ],
    },
    bianalyst: {
      id: "bianalyst",
      title: "BI Analyst",
      description: "Business Intelligence.",
      icon: "📊",
      color: "#ffeb3b",
      estimatedTime: "4-6 Months",
      category: "Role Based",
      link: "https://roadmap.sh/bi-analyst",
      milestones: [
        {
          id: "bi_1",
          title: "Data Warehousing",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "The Star Schema. Fact Tables vs Dimension Tables. ETL vs ELT processes. Data Marts.",
          topics: ["Data Warehouse", "Star Schema", "ETL"],
          resources: [
            { title: "Kimball Group", url: "https://www.kimballgroup.com/" },
          ],
        },
        {
          id: "bi_2",
          title: "BI Tools (PowerBI/Tableau)",
          difficulty: "Intermediate",
          estimatedHours: 60,
          content:
            "Creating interactive reports. DAX (Data Analysis Expressions) for PowerBI. LOD Expressions for Tableau. Data blending.",
          topics: ["PowerBI", "DAX", "Tableau", "LOD"],
          resources: [
            {
              title: "PowerBI Documentation",
              url: "https://docs.microsoft.com/en-us/power-bi/",
            },
          ],
        },
        {
          id: "bi_3",
          title: "Data Governance",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Data Quality, Security, and Master Data Management (MDM). Ensuring 'One Version of the Truth'.",
          topics: ["Data Quality", "Governance", "MDM"],
          resources: [
            {
              title: "Data Governance Framework",
              url: "https://www.dataversity.net/what-is-data-governance/",
            },
          ],
        },
      ],
    },
  },
  Yv = {
    react: {
      id: "react",
      title: "React",
      description: "A JavaScript library for building user interfaces.",
      icon: "⚛️",
      color: "#61dafb",
      estimatedTime: "3-5 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/react",
      milestones: [
        {
          id: "r_1",
          title: "Fundamentals",
          difficulty: "Beginner",
          estimatedHours: 20,
          content:
            "React is a UI library. Start with Create React App or Vite. Understand that everything is a 'Component'. Components return JSX, which looks like HTML but is JavaScript. Learn about Props to pass data down.",
          topics: ["JSX", "Components", "Props", "Conditional Rendering"],
          resources: [{ title: "React Docs", url: "https://react.dev/" }],
        },
        {
          id: "r_2",
          title: "State & Lifecycle",
          difficulty: "Beginner",
          estimatedHours: 30,
          content:
            "State is data that changes over time. Understanding `useState` is 50% of React. Learn how updating state triggers a re-render. Learn the Component Lifecycle (Mount, Update, Unmount) via `useEffect`.",
          topics: ["useState", "useEffect", "Lists & Keys", "Forms"],
          resources: [],
        },
        {
          id: "r_3",
          title: "Advanced Hooks",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content:
            "Beyond the basics. `useContext` prevents prop drilling. `useReducer` handles complex state logic (like Redux). `useRef` accesses DOM elements directly without re-renders.",
          topics: [
            "useContext",
            "useReducer",
            "useRef",
            "useMemo",
            "useCallback",
          ],
          resources: [],
        },
        {
          id: "r_4",
          title: "Routing",
          difficulty: "Intermediate",
          estimatedHours: 20,
          content:
            "Single Page Apps (SPAs) need client-side routing. React Router is the standard. Learn to define Routes, use Link components, and handle dynamic route parameters (e.g., /user/:id).",
          topics: [
            "React Router",
            "Dynamic Routes",
            "Nested Routes",
            "Protected Routes",
          ],
          resources: [],
        },
        {
          id: "r_5",
          title: "State Management",
          difficulty: "Advanced",
          estimatedHours: 40,
          content:
            "For large apps, Context isn't enough. Redux Toolkit (RTK) is the industry standard for global state. Zustand is a lighter popular alternative. TanStack Query (React Query) is essential for server state.",
          topics: ["Redux Toolkit", "Zustand", "TanStack Query"],
          resources: [],
        },
        {
          id: "r_6",
          title: "Performance Optimization",
          difficulty: "Expert",
          estimatedHours: 30,
          content:
            "React is fast, but you can make it slow. Learn to prevent unnecessary re-renders using `React.memo`, `useMemo`, and `useCallback`. Understand Code Splitting using `React.lazy` and Suspense.",
          topics: ["Re-renders", "Memoization", "Code Splitting", "Suspense"],
          resources: [],
        },
        {
          id: "r_7",
          title: "React Frameworks",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "React is rarely used alone in production anymore. Next.js is the production framework. It adds Server Side Rendering (SSR), Static Site Generation (SSG), and API routes out of the box.",
          topics: ["Next.js", "SSR", "SSG", "Remix"],
          resources: [],
        },
      ],
    },
    python: {
      id: "python",
      title: "Python",
      description: "Versatile programming language.",
      icon: "🐍",
      color: "#3776ab",
      estimatedTime: "3-5 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/python",
      milestones: [
        {
          id: "py_1",
          title: "Syntax Basics",
          difficulty: "Beginner",
          estimatedHours: 20,
          content:
            "Python is known for readability. Learn indentation rules (whitespace matters!). Variables, Data Types (int, float, str, bool), and basic Operators. Input/Output with print() and input().",
          topics: ["Variables", "Operators", "Input/Output", "Indentation"],
          resources: [
            {
              title: "Python Tutorial",
              url: "https://docs.python.org/3/tutorial/",
            },
          ],
        },
        {
          id: "py_2",
          title: "Control Structures",
          difficulty: "Beginner",
          estimatedHours: 20,
          content:
            "Logic flow. Conditional statements (if, elif, else). Loops (for, while). Learn to iterate over sequences using range() and enumerate().",
          topics: ["if/else", "Loops", "Break/Continue", "List Comprehensions"],
          resources: [
            {
              title: "Control Flow",
              url: "https://docs.python.org/3/tutorial/controlflow.html",
            },
          ],
        },
        {
          id: "py_3",
          title: "Data Structures",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "Python's power lies in its built-in structures. Lists (arrays), Tuples (immutable), Sets (unique items), and Dictionaries (key-value pairs). Master List Comprehensions for concise code.",
          topics: ["Lists", "Dictionaries", "Tuples", "Sets"],
          resources: [
            {
              title: "Data Structures",
              url: "https://docs.python.org/3/tutorial/datastructures.html",
            },
          ],
        },
        {
          id: "py_4",
          title: "Functions & Modules",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content:
            "DRY (Don't Repeat Yourself). Define functions with `def`. specific arguments vs *args/**kwargs. Lambda functions. Organizing code into Modules and Packages using __init__.py.",
          topics: ["Functions", "Lambdas", "Modules", "Pip (Package Manager)"],
          resources: [
            {
              title: "Modules",
              url: "https://docs.python.org/3/tutorial/modules.html",
            },
          ],
        },
        {
          id: "py_5",
          title: "Object Oriented Programming",
          difficulty: "Advanced",
          estimatedHours: 40,
          content:
            "Python is an OOP language. Classes, Objects, Inheritance, Polymorphism. Understand `self`, the `__init__` constructor, and Magic Methods (`__str__`, `__len__`).",
          topics: ["Classes", "Inheritance", "Magic Methods", "Decorators"],
          resources: [
            {
              title: "Classes",
              url: "https://docs.python.org/3/tutorial/classes.html",
            },
          ],
        },
        {
          id: "py_6",
          title: "File I/O & Exceptions",
          difficulty: "Intermediate",
          estimatedHours: 20,
          content:
            "Working with files. Open/Read/Write using the `with` context manager (which handles closing automatically). Error handling using try/except/finally blocks.",
          topics: ["File Handling", "Context Managers", "Exception Handling"],
          resources: [
            {
              title: "Input and Output",
              url: "https://docs.python.org/3/tutorial/inputoutput.html",
            },
          ],
        },
      ],
    },
    springboot: {
      id: "springboot",
      title: "Spring Boot",
      description: "Java-based framework.",
      icon: "🍃",
      color: "#6db33f",
      estimatedTime: "3-4 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/spring-boot",
      milestones: [
        {
          id: "sb_1",
          title: "Basics",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content: "Auto-configuration, Starters. The Spring ecosystem.",
          topics: ["Starters", "Beans"],
          resources: [],
        },
      ],
    },
    aspnetcore: {
      id: "aspnetcore",
      title: "ASP.NET Core",
      description: ".NET framework.",
      icon: "🔷",
      color: "#512bd4",
      estimatedTime: "3-5 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/aspnet-core",
      milestones: [
        {
          id: "asp_1",
          title: "Core",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content: "Middleware, Dependency Injection, Kestrel.",
          topics: ["DI", "Middleware"],
          resources: [],
        },
      ],
    },
    laravel: {
      id: "laravel",
      title: "Laravel",
      description: "PHP Framework.",
      icon: "🔴",
      color: "#ff2d20",
      estimatedTime: "3-4 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/laravel",
      milestones: [
        {
          id: "lv_1",
          title: "Fundamentals",
          difficulty: "Beginner",
          estimatedHours: 30,
          content: "MVC Architecture, Routing, Blade.",
          topics: ["MVC", "Blade"],
          resources: [],
        },
      ],
    },
    datastructures: {
      id: "datastructures",
      title: "Data Structures",
      description: "CS Fundamentals.",
      icon: "📚",
      color: "#000000",
      estimatedTime: "4-6 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/datastructures-and-algorithms",
      milestones: [
        {
          id: "dsa_1",
          title: "Linear",
          difficulty: "Beginner",
          estimatedHours: 40,
          content: "Arrays, Linked Lists, Stacks, Queues.",
          topics: ["Arrays", "Lists"],
          resources: [],
        },
        {
          id: "dsa_2",
          title: "Trees & Graphs",
          difficulty: "Advanced",
          estimatedHours: 50,
          content: "Binary Trees, BST, Graphs (BFS/DFS).",
          topics: ["Trees", "Graphs"],
          resources: [],
        },
      ],
    },
    promptengineering: {
      id: "promptengineering",
      title: "Prompt Engineering",
      description: "AI Communication.",
      icon: "💬",
      color: "#10a37f",
      estimatedTime: "1 Month",
      category: "Skill Based",
      link: "https://roadmap.sh/prompt-engineering",
      milestones: [
        {
          id: "pe_1",
          title: "Techniques",
          difficulty: "Intermediate",
          estimatedHours: 20,
          content: "Chain of Thought, Few-Shot, ReAct.",
          topics: ["Prompts"],
          resources: [],
        },
      ],
    },
    java: {
      id: "java",
      title: "Java",
      description: "Robust, object-oriented language.",
      icon: "☕",
      color: "#007396",
      estimatedTime: "4-6 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/java",
      milestones: [
        {
          id: "jv_1",
          title: "Core Java",
          difficulty: "Beginner",
          estimatedHours: 60,
          content:
            "The foundation. Syntax, Loops, Methods. Object-Oriented Programming (Classes, Objects, Inheritance, Polymorphism, Abstraction, Encapsulation) is the heart of Java.",
          topics: ["Syntax", "OOP Principles", "Methods"],
          resources: [
            {
              title: "Java Tutorials (Oracle)",
              url: "https://docs.oracle.com/javase/tutorial/",
            },
            {
              title: "Baeldung Java",
              url: "https://www.baeldung.com/java-tutorial",
            },
          ],
        },
        {
          id: "jv_2",
          title: "Collections Framework",
          difficulty: "Intermediate",
          estimatedHours: 50,
          content:
            "Managing groups of objects. List (ArrayList, LinkedList), Set (HashSet), Map (HashMap, TreeMap). Iterators and the for-each loop.",
          topics: ["List", "Set", "Map", "Queue"],
          resources: [
            {
              title: "Java Collections",
              url: "https://docs.oracle.com/javase/tutorial/collections/",
            },
          ],
        },
        {
          id: "jv_3",
          title: "Java 8+ Features",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "Modern Java. Lambdas for functional programming. Streams API for processing collections (filter, map, reduce). Optional class to avoid NullPointerExceptions.",
          topics: ["Lambdas", "Streams API", "Optional"],
          resources: [
            {
              title: "Java 8 Features",
              url: "https://www.baeldung.com/java-8-features",
            },
          ],
        },
        {
          id: "jv_4",
          title: "Concurrency (Multithreading)",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "Doing multiple things at once. Threads, Runnables. The Executor Framework. Synchronization and Locks to prevent race conditions.",
          topics: ["Threads", "Executors", "Synchronized"],
          resources: [
            {
              title: "Java Concurrency",
              url: "https://docs.oracle.com/javase/tutorial/essential/concurrency/",
            },
          ],
        },
        {
          id: "jv_5",
          title: "Build Tools (Maven/Gradle)",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content:
            "Dependency management. pom.xml vs build.gradle. compiling, testing, and packaging your application.",
          topics: ["Maven", "Gradle", "Dependency Management"],
          resources: [
            {
              title: "Maven in 5 Minutes",
              url: "https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html",
            },
          ],
        },
        {
          id: "jv_6",
          title: "Spring Framework",
          difficulty: "Advanced",
          estimatedHours: 80,
          content:
            "The enterprise standard. Inversion of Control (IoC), Dependency Injection (DI). Spring Boot for rapid application development. Spring Data JPA for database access.",
          topics: ["Spring Boot", "IoC", "Spring MVC"],
          resources: [
            { title: "Spring Boot Guides", url: "https://spring.io/guides" },
            { title: "Spring Boot Start", url: "https://start.spring.io/" },
          ],
        },
      ],
    },
    javascript: {
      id: "javascript",
      title: "JavaScript",
      description: "The language of the web.",
      icon: "🟨",
      color: "#f7df1e",
      estimatedTime: "2-3 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/javascript",
      milestones: [
        {
          id: "js_1",
          title: "Variables & Types",
          difficulty: "Beginner",
          estimatedHours: 20,
          content:
            "Let vs Const vs Var. Primitives (String, Number, Boolean) vs Objects. Template Literals for strings.",
          topics: ["Variables", "Data Types", "Operators"],
          resources: [],
        },
        {
          id: "js_2",
          title: "Control Flow & Functions",
          difficulty: "Beginner",
          estimatedHours: 30,
          content:
            "If/Else, Switch, Loops (for, while). Function Declarations vs Arrow Functions. Understanding Scope (Global, Function, Block).",
          topics: ["Functions", "Loops", "Scope"],
          resources: [],
        },
        {
          id: "js_3",
          title: "DOM Manipulation",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "Interacting with the browser. selecting elements (querySelector). Event Listeners (click, submit). Modifying styles and classes.",
          topics: ["DOM", "Events", "HTMLCollection"],
          resources: [],
        },
        {
          id: "js_4",
          title: "Asynchronous JavaScript",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "JavaScript is single-threaded. Callbacks (Callback Hell). Promises (.then/.catch). Async/Await syntax. The Event Loop.",
          topics: ["Promises", "Async/Await", "Event Loop", "Fetch API"],
          resources: [],
        },
        {
          id: "js_5",
          title: "Modern ES6+ Features",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content:
            "Destructuring (Arrays/Objects). Spread/Rest operators (...). Modules (import/export). Classes in JS.",
          topics: ["Destructuring", "Spread", "Modules"],
          resources: [],
        },
        {
          id: "js_6",
          title: "Tooling",
          difficulty: "Advanced",
          estimatedHours: 20,
          content:
            "npm/yarn for packages. Webpack/Vite for bundling. Babel for transpiling.",
          topics: ["npm", "Vite", "Bundlers"],
          resources: [],
        },
      ],
    },
    typescript: {
      id: "typescript",
      title: "TypeScript",
      description: "JavaScript with syntax for types.",
      icon: "🔷",
      color: "#3178c6",
      estimatedTime: "1-2 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/typescript",
      milestones: [
        {
          id: "ts_1",
          title: "Basic Types",
          difficulty: "Beginner",
          estimatedHours: 20,
          content:
            "Superset of JS. Type annotations (string, number, boolean). Arrays and Tuples. The 'any' and 'unknown' types.",
          topics: ["Type Annotations", "Inference", "Tuples"],
          resources: [],
        },
        {
          id: "ts_2",
          title: "Interfaces & Types",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content:
            "Defining shapes of objects. Type Aliases vs Interfaces. Optional properties (?). Readonly properties.",
          topics: ["Interfaces", "Type Aliases"],
          resources: [],
        },
        {
          id: "ts_3",
          title: "Functions",
          difficulty: "Intermediate",
          estimatedHours: 20,
          content:
            "Typing arguments and return values. Function Overloads. Optional parameters.",
          topics: ["Function Types", "Overloads"],
          resources: [],
        },
        {
          id: "ts_4",
          title: "Unions & Intersections",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Combining types. Union types (|) for 'this OR that'. Intersection types (&) for 'this AND that'. Type Narrowing/Guards.",
          topics: ["Unions", "Intersections", "Type Guards"],
          resources: [],
        },
        {
          id: "ts_5",
          title: "Generics",
          difficulty: "Expert",
          estimatedHours: 50,
          content:
            "Reusable code components. Generic Functions (<T>). Generic Interfaces. Constraints (extends).",
          topics: ["Generics", "Keyof", "Constraints"],
          resources: [],
        },
        {
          id: "ts_6",
          title: "Utility Types",
          difficulty: "Advanced",
          estimatedHours: 20,
          content:
            "Built-in helpers. Partial, Required, Pick, Omit, Record. Mapped Types.",
          topics: ["Utility Types", "Mapped Types"],
          resources: [],
        },
      ],
    },
    cpp: {
      id: "cpp",
      title: "C++",
      description: "High-performance programming.",
      icon: "➕",
      color: "#00599c",
      estimatedTime: "4-6 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/cpp",
      milestones: [
        {
          id: "cpp_1",
          title: "Basics & Flow Control",
          difficulty: "Beginner",
          estimatedHours: 30,
          content:
            "Syntax, Variables, Input/Output (cin, cout). Decision making (if, switch) and Loops.",
          topics: ["Syntax", "IO", "Control Flow"],
          resources: [],
        },
        {
          id: "cpp_2",
          title: "Functions & Pointers",
          difficulty: "Intermediate",
          estimatedHours: 50,
          content:
            "Pass by Value vs Reference. Pointers (* and &). Pointer arithmetic. Const correctness.",
          topics: ["Pointers", "References", "Memory Addresses"],
          resources: [],
        },
        {
          id: "cpp_3",
          title: "Memory Management",
          difficulty: "Advanced",
          estimatedHours: 60,
          content:
            "Stack vs Heap. Dynamic allocation (new/delete). Memory leaks and how to avoid them (RAII). Smart Pointers (unique_ptr, shared_ptr).",
          topics: ["Stack", "Heap", "Smart Pointers", "RAII"],
          resources: [],
        },
        {
          id: "cpp_4",
          title: "OOP in C++",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "Classes, Objects. Access specifiers (public, private, protected). Inheritance. Polymorphism (Virtual functions).",
          topics: ["OOP", "Virtual Functions", "Inheritance"],
          resources: [],
        },
        {
          id: "cpp_5",
          title: "STL (Standard Template Library)",
          difficulty: "Advanced",
          estimatedHours: 60,
          content:
            "Don't reinvent the wheel. Vectors, Lists, Maps, Sets. Algorithms (sort, find, binary_search). Iterators.",
          topics: ["Vectors", "Maps", "Algorithms", "Iterators"],
          resources: [],
        },
        {
          id: "cpp_6",
          title: "Templates",
          difficulty: "Expert",
          estimatedHours: 40,
          content:
            "Generic programming. Function Templates and Class Templates. Template Metaprogramming basics.",
          topics: ["Templates", "Generics"],
          resources: [],
        },
      ],
    },
    go: {
      id: "go",
      title: "Go",
      description: "Simple, reliable, efficient software.",
      icon: "🐹",
      color: "#00add8",
      estimatedTime: "2-3 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/golang",
      milestones: [
        {
          id: "go_1",
          title: "Go Basics",
          difficulty: "Beginner",
          estimatedHours: 20,
          content:
            "Packages (main), Imports, Variables (var, :=). Basic Types. Control structures (if, for, switch). No while loop!",
          topics: ["Syntax", "Variables", "Loops"],
          resources: [],
        },
        {
          id: "go_2",
          title: "Data Structures",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content:
            "Arrays (fixed size) vs Slices (dynamic). Maps (key-value). Structs (custom types). Range keyword.",
          topics: ["Slices", "Maps", "Structs"],
          resources: [],
        },
        {
          id: "go_3",
          title: "Functions & Interfaces",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content:
            "Multiple return values. Named return values. Interfaces are satisfied implicitly (duck typing). Defer keyword.",
          topics: ["Functions", "Interfaces", "Defer"],
          resources: [],
        },
        {
          id: "go_4",
          title: "Concurrency",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "Goroutines (lightweight threads managed by Go runtime). Channels (typed conduits for data). Select statement. WaitGroups.",
          topics: ["Goroutines", "Channels", "WaitGroup"],
          resources: [],
        },
        {
          id: "go_5",
          title: "Error Handling",
          difficulty: "Intermediate",
          estimatedHours: 20,
          content:
            "No exceptions. Errors are values. checking `if err != nil`. Custom error types.",
          topics: ["Errors", "Panic", "Recover"],
          resources: [],
        },
        {
          id: "go_6",
          title: "Go Modules & Testing",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Dependency management (go.mod). Built-in testing framework (go test). Writing benchmarks.",
          topics: ["Modules", "Testing", "Benchmarks"],
          resources: [],
        },
      ],
    },
    rust: {
      id: "rust",
      title: "Rust",
      description: "Performance and safety.",
      icon: "🦀",
      color: "#000000",
      estimatedTime: "4-6 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/rust",
      milestones: [
        {
          id: "rs_1",
          title: "Ownership",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "The unique feature. Ownership, Borrowing, Lifetimes. Guarantees memory safety without Garbage Collection.",
          topics: ["Ownership", "Borrowing", "Lifetimes"],
          resources: [],
        },
        {
          id: "rs_2",
          title: "Traits",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content: "Rust's version of interfaces. Shared behavior.",
          topics: ["Traits", "Impl"],
          resources: [],
        },
      ],
    },
    php: {
      id: "php",
      title: "PHP",
      description: "Server-side scripting.",
      icon: "🐘",
      color: "#777bb4",
      estimatedTime: "2-3 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/php",
      milestones: [
        {
          id: "php_1",
          title: "Basics",
          difficulty: "Beginner",
          estimatedHours: 20,
          content:
            "Server-side rendering. Arrays (associative). Superglobals ($_GET, $_POST).",
          topics: ["Syntax", "Arrays", "Forms"],
          resources: [],
        },
        {
          id: "php_2",
          title: "Laravel",
          difficulty: "Advanced",
          estimatedHours: 40,
          content:
            "The dominant framework. MVC structure, Eloquent ORM, Blade templates.",
          topics: ["Laravel", "MVC", "ORM"],
          resources: [],
        },
      ],
    },
    docker: {
      id: "docker",
      title: "Docker",
      description: "Containerization standard.",
      icon: "🐳",
      color: "#2496ed",
      estimatedTime: "1 Month",
      category: "Skill Based",
      link: "https://roadmap.sh/docker",
      milestones: [
        {
          id: "dk_1",
          title: "Basics",
          difficulty: "Beginner",
          estimatedHours: 15,
          content:
            "Images vs Containers. Docker Hub. Basic commands (run, pull, build).",
          topics: ["Images", "Containers", "CLI"],
          resources: [],
        },
        {
          id: "dk_2",
          title: "Dockerfile",
          difficulty: "Intermediate",
          estimatedHours: 20,
          content: "Writing recipes for images. FROM, RUN, COPY, CMD.",
          topics: ["Dockerfile", "Layers"],
          resources: [],
        },
      ],
    },
    kubernetes: {
      id: "kubernetes",
      title: "Kubernetes",
      description: "Container orchestration.",
      icon: "☸️",
      color: "#326ce5",
      estimatedTime: "3-5 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/kubernetes",
      milestones: [
        {
          id: "k8s_1",
          title: "Concepts",
          difficulty: "Intermediate",
          estimatedHours: 30,
          content: "Pods, Services, Deployments. The declarative model.",
          topics: ["Pods", "Services", "YAML"],
          resources: [],
        },
        {
          id: "k8s_2",
          title: "Architecture",
          difficulty: "Advanced",
          estimatedHours: 30,
          content: "Control Plane vs Worker Nodes.",
          topics: ["Control Plane", "Nodes"],
          resources: [],
        },
      ],
    },
    aws: {
      id: "aws",
      title: "AWS",
      description: "Amazon Web Services.",
      icon: "☁️",
      color: "#ff9900",
      estimatedTime: "3-6 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/aws",
      milestones: [
        {
          id: "aws_1",
          title: "Compute (EC2)",
          difficulty: "Intermediate",
          estimatedHours: 20,
          content:
            "Virtual machines in the cloud. Instance types, Security Groups (Firewalls).",
          topics: ["EC2", "Security Groups"],
          resources: [],
        },
        {
          id: "aws_2",
          title: "Storage (S3)",
          difficulty: "Beginner",
          estimatedHours: 10,
          content: "Object storage. Buckets, Objects, Permissions.",
          topics: ["S3", "Buckets"],
          resources: [],
        },
        {
          id: "aws_3",
          title: "Networking (VPC)",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Virtual Private Cloud. Subnets, Route Tables, Internet Gateways.",
          topics: ["VPC", "Subnets"],
          resources: [],
        },
      ],
    },
    linux: {
      id: "linux",
      title: "Linux",
      description: "Open source operating system.",
      icon: "🐧",
      color: "#fcc624",
      estimatedTime: "1-2 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/linux",
      milestones: [
        {
          id: "lnx_1",
          title: "CLI Basics",
          difficulty: "Beginner",
          estimatedHours: 20,
          content:
            "Navigating the filesystem. ls, cd, mkdir, rm, mv, cp. Man pages.",
          topics: ["CLI", "Filesystem"],
          resources: [],
        },
        {
          id: "lnx_2",
          title: "Permissions",
          difficulty: "Intermediate",
          estimatedHours: 15,
          content: "Chmod, chown. User and Group management.",
          topics: ["Permissions", "Users"],
          resources: [],
        },
      ],
    },
    sql: {
      id: "sql",
      title: "SQL",
      description: "Structured Query Language.",
      icon: "🗄️",
      color: "#00bcd4",
      estimatedTime: "1-2 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/sql",
      milestones: [
        {
          id: "sql_1",
          title: "Queries",
          difficulty: "Beginner",
          estimatedHours: 20,
          content: "SELECT * FROM. Filtering (WHERE). Sorting (ORDER BY).",
          topics: ["SELECT", "WHERE", "ORDER BY"],
          resources: [],
        },
        {
          id: "sql_2",
          title: "Joins",
          difficulty: "Intermediate",
          estimatedHours: 20,
          content: "Combining tables. INNER, LEFT, RIGHT, FULL Joins.",
          topics: ["JOINS", "Relationships"],
          resources: [],
        },
      ],
    },
    mongodb: {
      id: "mongodb",
      title: "MongoDB",
      description: "NoSQL Database.",
      icon: "🍃",
      color: "#47a248",
      estimatedTime: "1 Month",
      category: "Skill Based",
      link: "https://roadmap.sh/mongodb",
      milestones: [
        {
          id: "mgo_1",
          title: "Documents",
          difficulty: "Beginner",
          estimatedHours: 15,
          content:
            "JSON-like documents. Collections vs Tables. Flexible Schema.",
          topics: ["BSON", "Collections"],
          resources: [],
        },
        {
          id: "mgo_2",
          title: "Aggregation",
          difficulty: "Advanced",
          estimatedHours: 25,
          content: "Aggregation Pipelines. Match, Group, Sort stages.",
          topics: ["Pipelines", "Match/Group"],
          resources: [],
        },
      ],
    },
    graphql: {
      id: "graphql",
      title: "GraphQL",
      description: "Query language for APIs.",
      icon: "⚛️",
      color: "#e535ab",
      estimatedTime: "1 Month",
      category: "Skill Based",
      link: "https://roadmap.sh/graphql",
      milestones: [
        {
          id: "gql_1",
          title: "Schema",
          difficulty: "Intermediate",
          estimatedHours: 20,
          content: "Types, Query, Mutation. Defining the graph.",
          topics: ["Schema SDL", "Types"],
          resources: [],
        },
        {
          id: "gql_2",
          title: "Resolvers",
          difficulty: "Advanced",
          estimatedHours: 20,
          content:
            "Functions that fetch the data for fields. Solving the N+1 problem.",
          topics: ["Resolvers", "N+1 Problem"],
          resources: [],
        },
      ],
    },
    cybersecurity: {
      id: "cybersecurity",
      title: "Cyber Security",
      description: "Protecting systems and networks.",
      icon: "🔒",
      color: "#d32f2f",
      estimatedTime: "6-12 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/cyber-security",
      milestones: [
        {
          id: "cs_1",
          title: "Network Security",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content: "Firewalls, VPNs, IDS/IPS. OSI Model layers.",
          topics: ["Networking", "Firewalls"],
          resources: [],
        },
        {
          id: "cs_2",
          title: "Penetration Testing",
          difficulty: "Advanced",
          estimatedHours: 50,
          content:
            "Ethical Hacking. Kali Linux. Metasploit. Identifying vulnerabilities.",
          topics: ["Ethical Hacking", "Kali Linux"],
          resources: [],
        },
      ],
    },
    uxdesign: {
      id: "uxdesign",
      title: "UX Design",
      description: "User Experience Design.",
      icon: "🎨",
      color: "#e91e63",
      estimatedTime: "3-6 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/ux-design",
      milestones: [
        {
          id: "ux_1",
          title: "Research",
          difficulty: "Beginner",
          estimatedHours: 30,
          content: "User Personas, User Journeys. Interviews and Surveys.",
          topics: ["User Research", "Personas"],
          resources: [],
        },
        {
          id: "ux_2",
          title: "Prototyping",
          difficulty: "Intermediate",
          estimatedHours: 40,
          content: "Wireframing (Figma/Sketch). Low-fi vs Hi-fi prototypes.",
          topics: ["Figma", "Wireframing"],
          resources: [],
        },
      ],
    },
    blockchain: {
      id: "blockchain",
      title: "Blockchain",
      description: "Decentralized technology.",
      icon: "🔗",
      color: "#f57c00",
      estimatedTime: "4-8 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/blockchain",
      milestones: [
        {
          id: "bc_1",
          title: "Cryptography",
          difficulty: "Advanced",
          estimatedHours: 30,
          content:
            "Hashing (SHA-256), Public/Private Keys, Digital Signatures.",
          topics: ["Hashing", "Encryption"],
          resources: [],
        },
        {
          id: "bc_2",
          title: "Smart Contracts",
          difficulty: "Expert",
          estimatedHours: 50,
          content: "Solidity (Ethereum). Writing code that lives on chain.",
          topics: ["Solidity", "Ethereum", "Web3.js"],
          resources: [],
        },
      ],
    },
    systemdesign: {
      id: "systemdesign",
      title: "System Design",
      description: "Designing scalable systems.",
      icon: "🏗️",
      color: "#607d8b",
      estimatedTime: "2-3 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/system-design",
      milestones: [
        {
          id: "sd_1",
          title: "Concepts",
          difficulty: "Advanced",
          estimatedHours: 30,
          content: "Load Balancing, Caching, Database Sharding, Replication.",
          topics: ["Scalability", "Reliability"],
          resources: [],
        },
        {
          id: "sd_2",
          title: "Interviews",
          difficulty: "Expert",
          estimatedHours: 20,
          content: "Design Twitter, Design Uber. Standard interview questions.",
          topics: ["Interview Prep", "Architecture"],
          resources: [],
        },
      ],
    },
    swift: {
      id: "swift-ui",
      title: "Swift",
      description: "Apple's programming language.",
      icon: "🍎",
      color: "#f05138",
      estimatedTime: "2-3 Months",
      category: "Skill Based",
      link: "https://roadmap.sh/swift",
      milestones: [
        {
          id: "sw_1",
          title: "Basics",
          difficulty: "Beginner",
          estimatedHours: 20,
          content: "Variables, Optionals, Control Flow.",
          topics: ["Syntax", "Optionals"],
          resources: [],
        },
      ],
    },
  },
  Xv = { ...Jv, ...Yv },
  Zv = Xv,
  fa = {
    frontend: {
      id: "frontend",
      title: "Frontend Developer Roadmap",
      description:
        "Complete path to becoming a professional frontend developer",
      icon: "🎨",
      color: "#667eea",
      estimatedTime: "6-8 months",
      milestones: [
        {
          id: "html-css",
          title: "HTML & CSS Fundamentals",
          description: "Master the building blocks of web development",
          difficulty: "Beginner",
          estimatedHours: 40,
          topics: [
            "HTML5 Semantic Elements",
            "CSS Flexbox & Grid",
            "Responsive Design",
            "CSS Animations",
            "Accessibility (a11y)",
          ],
          resources: [
            { title: "MDN Web Docs", url: "https://developer.mozilla.org" },
            { title: "CSS Tricks", url: "https://css-tricks.com" },
          ],
        },
        {
          id: "javascript",
          title: "JavaScript Essentials",
          description: "Learn modern JavaScript (ES6+)",
          difficulty: "Beginner",
          estimatedHours: 60,
          topics: [
            "Variables, Data Types, Operators",
            "Functions & Arrow Functions",
            "Arrays & Objects",
            "DOM Manipulation",
            "Event Handling",
            "Async/Await & Promises",
            "Fetch API",
          ],
          resources: [
            { title: "JavaScript.info", url: "https://javascript.info" },
            {
              title: "Eloquent JavaScript",
              url: "https://eloquentjavascript.net",
            },
          ],
        },
        {
          id: "react",
          title: "React Framework",
          description: "Build modern UIs with React",
          difficulty: "Intermediate",
          estimatedHours: 80,
          topics: [
            "Components & Props",
            "State & Lifecycle",
            "Hooks (useState, useEffect, etc.)",
            "Context API",
            "React Router",
            "Form Handling",
            "Performance Optimization",
          ],
          resources: [
            { title: "React Official Docs", url: "https://react.dev" },
            { title: "React Patterns", url: "https://reactpatterns.com" },
          ],
        },
        {
          id: "state-management",
          title: "State Management",
          description: "Manage complex application state",
          difficulty: "Intermediate",
          estimatedHours: 30,
          topics: [
            "Redux Toolkit",
            "Zustand",
            "React Query",
            "Global vs Local State",
          ],
          resources: [{ title: "Redux Docs", url: "https://redux.js.org" }],
        },
        {
          id: "build-tools",
          title: "Build Tools & Bundlers",
          description: "Modern development workflow",
          difficulty: "Intermediate",
          estimatedHours: 20,
          topics: [
            "Vite",
            "Webpack",
            "npm/yarn",
            "Environment Variables",
            "Code Splitting",
          ],
          resources: [{ title: "Vite Guide", url: "https://vitejs.dev" }],
        },
        {
          id: "testing",
          title: "Testing",
          description: "Write reliable, maintainable code",
          difficulty: "Advanced",
          estimatedHours: 40,
          topics: [
            "Jest",
            "React Testing Library",
            "Unit Tests",
            "Integration Tests",
            "E2E Testing (Playwright)",
          ],
          resources: [
            { title: "Testing Library", url: "https://testing-library.com" },
          ],
        },
      ],
    },
    backend: {
      id: "backend",
      title: "Backend Developer Roadmap",
      description: "Master server-side development",
      icon: "⚙️",
      color: "#f093fb",
      estimatedTime: "6-9 months",
      milestones: [
        {
          id: "programming-basics",
          title: "Programming Fundamentals",
          description: "Choose and master a backend language",
          difficulty: "Beginner",
          estimatedHours: 60,
          topics: [
            "Python / Node.js / Java",
            "Data Structures",
            "OOP Concepts",
            "Error Handling",
            "File I/O",
          ],
          resources: [
            { title: "Python Docs", url: "https://docs.python.org" },
            { title: "Node.js Docs", url: "https://nodejs.org" },
          ],
        },
        {
          id: "databases",
          title: "Databases",
          description: "SQL and NoSQL databases",
          difficulty: "Intermediate",
          estimatedHours: 50,
          topics: [
            "PostgreSQL / MySQL",
            "MongoDB",
            "SQL Queries",
            "Database Design",
            "Indexing",
            "Transactions",
            "ORMs (Sequelize, Mongoose)",
          ],
          resources: [
            {
              title: "PostgreSQL Tutorial",
              url: "https://www.postgresqltutorial.com",
            },
          ],
        },
        {
          id: "api-development",
          title: "API Development",
          description: "Build RESTful and GraphQL APIs",
          difficulty: "Intermediate",
          estimatedHours: 70,
          topics: [
            "REST API Design",
            "Express.js / FastAPI",
            "Authentication (JWT, OAuth)",
            "Authorization",
            "API Documentation (Swagger)",
            "GraphQL Basics",
          ],
          resources: [
            { title: "REST API Tutorial", url: "https://restfulapi.net" },
          ],
        },
        {
          id: "security",
          title: "Security Best Practices",
          description: "Secure your applications",
          difficulty: "Advanced",
          estimatedHours: 30,
          topics: [
            "HTTPS/TLS",
            "CORS",
            "SQL Injection Prevention",
            "XSS Protection",
            "Rate Limiting",
            "Environment Variables",
          ],
          resources: [{ title: "OWASP Top 10", url: "https://owasp.org" }],
        },
        {
          id: "caching",
          title: "Caching & Performance",
          description: "Optimize application performance",
          difficulty: "Advanced",
          estimatedHours: 25,
          topics: [
            "Redis",
            "Memcached",
            "CDN",
            "Database Query Optimization",
            "Load Balancing",
          ],
          resources: [{ title: "Redis Docs", url: "https://redis.io" }],
        },
        {
          id: "deployment",
          title: "Deployment & DevOps",
          description: "Deploy and maintain applications",
          difficulty: "Advanced",
          estimatedHours: 40,
          topics: [
            "Docker",
            "CI/CD Pipelines",
            "AWS / Azure / GCP",
            "Nginx",
            "Monitoring & Logging",
          ],
          resources: [{ title: "Docker Docs", url: "https://docs.docker.com" }],
        },
      ],
    },
    dsa: {
      id: "dsa",
      title: "Data Structures & Algorithms",
      description: "Master DSA for coding interviews",
      icon: "🧮",
      color: "#4facfe",
      estimatedTime: "4-6 months",
      milestones: [
        {
          id: "complexity",
          title: "Time & Space Complexity",
          description: "Analyze algorithm efficiency",
          difficulty: "Beginner",
          estimatedHours: 15,
          topics: [
            "Big O Notation",
            "Time Complexity Analysis",
            "Space Complexity Analysis",
            "Best, Average, Worst Cases",
          ],
          resources: [
            {
              title: "Big-O Cheat Sheet",
              url: "https://www.bigocheatsheet.com",
            },
          ],
        },
        {
          id: "arrays-strings",
          title: "Arrays & Strings",
          description: "Master fundamental data structures",
          difficulty: "Beginner",
          estimatedHours: 40,
          topics: [
            "Two Pointers",
            "Sliding Window",
            "Prefix Sum",
            "String Manipulation",
            "Common Patterns",
          ],
          resources: [
            { title: "LeetCode Patterns", url: "https://leetcode.com" },
          ],
        },
        {
          id: "linked-lists",
          title: "Linked Lists",
          description: "Linear data structures",
          difficulty: "Beginner",
          estimatedHours: 25,
          topics: [
            "Singly Linked List",
            "Doubly Linked List",
            "Fast & Slow Pointers",
            "Reversal",
            "Cycle Detection",
          ],
          resources: [{ title: "Visualgo", url: "https://visualgo.net" }],
        },
        {
          id: "stacks-queues",
          title: "Stacks & Queues",
          description: "LIFO and FIFO structures",
          difficulty: "Beginner",
          estimatedHours: 20,
          topics: [
            "Stack Implementation",
            "Queue Implementation",
            "Monotonic Stack",
            "Priority Queue",
            "Deque",
          ],
          resources: [],
        },
        {
          id: "trees",
          title: "Trees & Binary Search Trees",
          description: "Hierarchical data structures",
          difficulty: "Intermediate",
          estimatedHours: 50,
          topics: [
            "Binary Tree Traversals",
            "BST Operations",
            "Tree Construction",
            "Lowest Common Ancestor",
            "Path Sum Problems",
          ],
          resources: [],
        },
        {
          id: "graphs",
          title: "Graphs",
          description: "Complex relationships and networks",
          difficulty: "Intermediate",
          estimatedHours: 60,
          topics: [
            "Graph Representation",
            "BFS & DFS",
            "Shortest Path (Dijkstra)",
            "Topological Sort",
            "Union Find",
            "Minimum Spanning Tree",
          ],
          resources: [],
        },
        {
          id: "dynamic-programming",
          title: "Dynamic Programming",
          description: "Optimization problems",
          difficulty: "Advanced",
          estimatedHours: 80,
          topics: [
            "Memoization",
            "Tabulation",
            "1D DP",
            "2D DP",
            "Knapsack Problems",
            "LCS, LIS",
            "State Machine DP",
          ],
          resources: [
            {
              title: "DP Patterns",
              url: "https://leetcode.com/discuss/general-discussion/458695",
            },
          ],
        },
        {
          id: "advanced-topics",
          title: "Advanced Topics",
          description: "Specialized algorithms",
          difficulty: "Advanced",
          estimatedHours: 40,
          topics: [
            "Backtracking",
            "Greedy Algorithms",
            "Bit Manipulation",
            "Trie",
            "Segment Tree",
            "Binary Search Variations",
          ],
          resources: [],
        },
      ],
    },
    systemDesign: {
      id: "systemDesign",
      title: "System Design",
      description: "Design scalable distributed systems",
      icon: "🏗️",
      color: "#fa709a",
      estimatedTime: "3-4 months",
      milestones: [
        {
          id: "fundamentals",
          title: "System Design Fundamentals",
          description: "Core concepts and principles",
          difficulty: "Intermediate",
          estimatedHours: 30,
          topics: [
            "Scalability",
            "Reliability",
            "Availability",
            "CAP Theorem",
            "Consistency Patterns",
            "Load Balancing",
          ],
          resources: [
            {
              title: "System Design Primer",
              url: "https://github.com/donnemartin/system-design-primer",
            },
          ],
        },
        {
          id: "databases-scaling",
          title: "Database Scaling",
          description: "Scale your data layer",
          difficulty: "Intermediate",
          estimatedHours: 35,
          topics: [
            "Replication",
            "Sharding",
            "Partitioning",
            "SQL vs NoSQL",
            "Database Indexing",
            "Connection Pooling",
          ],
          resources: [],
        },
        {
          id: "caching-cdn",
          title: "Caching & CDN",
          description: "Improve performance with caching",
          difficulty: "Intermediate",
          estimatedHours: 25,
          topics: [
            "Cache Strategies",
            "Redis/Memcached",
            "CDN",
            "Cache Invalidation",
            "Write-through vs Write-back",
          ],
          resources: [],
        },
        {
          id: "messaging",
          title: "Message Queues & Pub/Sub",
          description: "Asynchronous communication",
          difficulty: "Advanced",
          estimatedHours: 30,
          topics: [
            "RabbitMQ",
            "Kafka",
            "Message Queue Patterns",
            "Event-Driven Architecture",
            "Pub/Sub Model",
          ],
          resources: [],
        },
        {
          id: "microservices",
          title: "Microservices Architecture",
          description: "Design distributed systems",
          difficulty: "Advanced",
          estimatedHours: 40,
          topics: [
            "Service Discovery",
            "API Gateway",
            "Circuit Breaker",
            "Service Mesh",
            "Inter-service Communication",
          ],
          resources: [],
        },
        {
          id: "case-studies",
          title: "Real-World Case Studies",
          description: "Design popular systems",
          difficulty: "Advanced",
          estimatedHours: 50,
          topics: [
            "Design Twitter",
            "Design Instagram",
            "Design URL Shortener",
            "Design Netflix",
            "Design Uber",
            "Design WhatsApp",
          ],
          resources: [
            {
              title: "Grokking System Design",
              url: "https://www.educative.io",
            },
          ],
        },
      ],
    },
    fullstack: {
      id: "fullstack",
      title: "Full Stack Developer",
      description: "Master both frontend and backend",
      icon: "🚀",
      color: "#764ba2",
      estimatedTime: "10-12 months",
      milestones: [
        {
          id: "web-fundamentals",
          title: "Web Fundamentals",
          description: "HTML, CSS, JavaScript basics",
          difficulty: "Beginner",
          estimatedHours: 60,
          topics: [
            "HTML5 & CSS3",
            "JavaScript ES6+",
            "Responsive Design",
            "Git & GitHub",
          ],
          resources: [],
        },
        {
          id: "frontend-framework",
          title: "Frontend Framework",
          description: "React or Vue.js",
          difficulty: "Intermediate",
          estimatedHours: 80,
          topics: [
            "React/Vue Fundamentals",
            "Component Architecture",
            "State Management",
            "Routing",
          ],
          resources: [],
        },
        {
          id: "backend-basics",
          title: "Backend Development",
          description: "Server-side programming",
          difficulty: "Intermediate",
          estimatedHours: 70,
          topics: [
            "Node.js/Python",
            "Express/FastAPI",
            "RESTful APIs",
            "Authentication",
          ],
          resources: [],
        },
        {
          id: "database-management",
          title: "Database Management",
          description: "SQL and NoSQL",
          difficulty: "Intermediate",
          estimatedHours: 50,
          topics: ["PostgreSQL", "MongoDB", "Database Design", "ORMs"],
          resources: [],
        },
        {
          id: "deployment-devops",
          title: "Deployment & DevOps",
          description: "Ship your applications",
          difficulty: "Advanced",
          estimatedHours: 45,
          topics: [
            "Docker",
            "CI/CD",
            "Cloud Platforms (AWS/Azure)",
            "Monitoring",
          ],
          resources: [],
        },
        {
          id: "fullstack-projects",
          title: "Full Stack Projects",
          description: "Build end-to-end applications",
          difficulty: "Advanced",
          estimatedHours: 100,
          topics: [
            "E-commerce Platform",
            "Social Media App",
            "Real-time Chat",
            "Project Management Tool",
          ],
          resources: [],
        },
      ],
    },
    ...Zv,
  };
var mf = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  m1 = bt.createContext && bt.createContext(mf),
  e7 = ["attr", "size", "title"];
function t7(e, t) {
  if (e == null) return {};
  var n = n7(e, t),
    i,
    r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((i = s[r]),
        !(t.indexOf(i) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, i) &&
          (n[i] = e[i]));
  }
  return n;
}
function n7(e, t) {
  if (e == null) return {};
  var n = {};
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      if (t.indexOf(i) >= 0) continue;
      n[i] = e[i];
    }
  return n;
}
function io() {
  return (
    (io = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    io.apply(this, arguments)
  );
}
function g1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    (t &&
      (i = i.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      n.push.apply(n, i));
  }
  return n;
}
function ro(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? g1(Object(n), !0).forEach(function (i) {
          i7(e, i, n[i]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : g1(Object(n)).forEach(function (i) {
            Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
          });
  }
  return e;
}
function i7(e, t, n) {
  return (
    (t = r7(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function r7(e) {
  var t = s7(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function s7(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gf(e) {
  return (
    e &&
    e.map((t, n) =>
      bt.createElement(t.tag, ro({ key: n }, t.attr), gf(t.child)),
    )
  );
}
function z(e) {
  return (t) =>
    bt.createElement(o7, io({ attr: ro({}, e.attr) }, t), gf(e.child));
}
function o7(e) {
  var t = (n) => {
    var { attr: i, size: r, title: s } = e,
      o = t7(e, e7),
      l = r || n.size || "1em",
      c;
    return (
      n.className && (c = n.className),
      e.className && (c = (c ? c + " " : "") + e.className),
      bt.createElement(
        "svg",
        io(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          i,
          o,
          {
            className: c,
            style: ro(ro({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        s && bt.createElement("title", null, s),
        e.children,
      )
    );
  };
  return m1 !== void 0
    ? bt.createElement(m1.Consumer, null, (n) => t(n))
    : t(mf);
}
function a7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z",
        },
        child: [],
      },
    ],
  })(e);
}
function l7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z",
        },
        child: [],
      },
    ],
  })(e);
}
function c7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z",
        },
        child: [],
      },
    ],
  })(e);
}
function u7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727",
        },
        child: [],
      },
    ],
  })(e);
}
function y1(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z",
        },
        child: [],
      },
    ],
  })(e);
}
function d7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z",
        },
        child: [],
      },
    ],
  })(e);
}
function os(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z",
        },
        child: [],
      },
    ],
  })(e);
}
function v1(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z",
        },
        child: [],
      },
    ],
  })(e);
}
function p7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M13.394 0C8.683 0 4.609 2.716 2.644 6.667h15.641a4.77 4.77 0 0 0 3.073-1.11c.446-.375.864-.785 1.247-1.243l.001-.002A11.974 11.974 0 0 0 13.394 0zM1.804 8.889a12.009 12.009 0 0 0 0 6.222h14.7a3.111 3.111 0 1 0 0-6.222zm.84 8.444C4.61 21.283 8.684 24 13.395 24c3.701 0 7.011-1.677 9.212-4.312l-.001-.002a9.958 9.958 0 0 0-1.247-1.243 4.77 4.77 0 0 0-3.073-1.11z",
        },
        child: [],
      },
    ],
  })(e);
}
function h7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z",
        },
        child: [],
      },
    ],
  })(e);
}
function w1(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187",
        },
        child: [],
      },
    ],
  })(e);
}
function ma(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M21.038,4.9l-7.577-4.498C13.009,0.134,12.505,0,12,0c-0.505,0-1.009,0.134-1.462,0.403L2.961,4.9 C2.057,5.437,1.5,6.429,1.5,7.503v8.995c0,1.073,0.557,2.066,1.462,2.603l7.577,4.497C10.991,23.866,11.495,24,12,24 c0.505,0,1.009-0.134,1.461-0.402l7.577-4.497c0.904-0.537,1.462-1.529,1.462-2.603V7.503C22.5,6.429,21.943,5.437,21.038,4.9z M15.17,18.946l0.013,0.646c0.001,0.078-0.05,0.167-0.111,0.198l-0.383,0.22c-0.061,0.031-0.111-0.007-0.112-0.085L14.57,19.29 c-0.328,0.136-0.66,0.169-0.872,0.084c-0.04-0.016-0.057-0.075-0.041-0.142l0.139-0.584c0.011-0.046,0.036-0.092,0.069-0.121 c0.012-0.011,0.024-0.02,0.036-0.026c0.022-0.011,0.043-0.014,0.062-0.006c0.229,0.077,0.521,0.041,0.802-0.101 c0.357-0.181,0.596-0.545,0.592-0.907c-0.003-0.328-0.181-0.465-0.613-0.468c-0.55,0.001-1.064-0.107-1.072-0.917 c-0.007-0.667,0.34-1.361,0.889-1.8l-0.007-0.652c-0.001-0.08,0.048-0.168,0.111-0.2l0.37-0.236 c0.061-0.031,0.111,0.007,0.112,0.087l0.006,0.653c0.273-0.109,0.511-0.138,0.726-0.088c0.047,0.012,0.067,0.076,0.048,0.151 l-0.144,0.578c-0.011,0.044-0.036,0.088-0.065,0.116c-0.012,0.012-0.025,0.021-0.038,0.028c-0.019,0.01-0.038,0.013-0.057,0.009 c-0.098-0.022-0.332-0.073-0.699,0.113c-0.385,0.195-0.52,0.53-0.517,0.778c0.003,0.297,0.155,0.387,0.681,0.396 c0.7,0.012,1.003,0.318,1.01,1.023C16.105,17.747,15.736,18.491,15.17,18.946z M19.143,17.859c0,0.06-0.008,0.116-0.058,0.145 l-1.916,1.164c-0.05,0.029-0.09,0.004-0.09-0.056v-0.494c0-0.06,0.037-0.093,0.087-0.122l1.887-1.129 c0.05-0.029,0.09-0.004,0.09,0.056V17.859z M20.459,6.797l-7.168,4.427c-0.894,0.523-1.553,1.109-1.553,2.187v8.833 c0,0.645,0.26,1.063,0.66,1.184c-0.131,0.023-0.264,0.039-0.398,0.039c-0.42,0-0.833-0.114-1.197-0.33L3.226,18.64 c-0.741-0.44-1.201-1.261-1.201-2.142V7.503c0-0.881,0.46-1.702,1.201-2.142l7.577-4.498c0.363-0.216,0.777-0.33,1.197-0.33 c0.419,0,0.833,0.114,1.197,0.33l7.577,4.498c0.624,0.371,1.046,1.013,1.164,1.732C21.686,6.557,21.12,6.411,20.459,6.797z",
        },
        child: [],
      },
    ],
  })(e);
}
function x1(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z",
        },
        child: [],
      },
    ],
  })(e);
}
function f7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z",
        },
        child: [],
      },
    ],
  })(e);
}
function as(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
        },
        child: [],
      },
    ],
  })(e);
}
function m7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.1 6.05C.486 6.05 0 6.53 0 7.13A1.08 1.08 0 0 0 1.1 8.21C1.72 8.21 2.21 7.73 2.21 7.13C2.21 6.53 1.72 6.05 1.1 6.05M8.71 6.07C5.35 6.07 3.25 8.36 3.25 12C3.25 15.67 5.35 17.95 8.71 17.95C12.05 17.95 14.16 15.67 14.16 12C14.16 8.36 12.05 6.07 8.71 6.07M19.55 6.07C17.05 6.07 15.27 7.45 15.27 9.5C15.27 11.13 16.28 12.15 18.4 12.64L19.89 13C21.34 13.33 21.93 13.81 21.93 14.64C21.93 15.6 20.96 16.28 19.58 16.28C18.17 16.28 17.11 15.59 17 14.53H15C15.08 16.65 16.82 17.95 19.46 17.95C22.25 17.95 24 16.58 24 14.4C24 12.69 23 11.72 20.68 11.19L19.35 10.89C17.94 10.55 17.36 10.1 17.36 9.34C17.36 8.38 18.24 7.74 19.54 7.74C20.85 7.74 21.75 8.39 21.85 9.46H23.81C23.76 7.44 22.09 6.07 19.55 6.07M8.71 7.82C10.75 7.82 12.06 9.45 12.06 12C12.06 14.57 10.75 16.2 8.71 16.2C6.65 16.2 5.35 14.57 5.35 12C5.35 9.45 6.65 7.82 8.71 7.82M.111 9.31V17.76H2.1V9.31H.11Z",
        },
        child: [],
      },
    ],
  })(e);
}
function g7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
        },
        child: [],
      },
    ],
  })(e);
}
function y7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [{ tag: "path", attr: { d: "M24 24H0V0h24L12 12Z" }, child: [] }],
  })(e);
}
function v7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z",
        },
        child: [],
      },
    ],
  })(e);
}
function w7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z",
        },
        child: [],
      },
    ],
  })(e);
}
function x7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z",
        },
        child: [],
      },
    ],
  })(e);
}
function k7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z",
        },
        child: [],
      },
    ],
  })(e);
}
function S7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z",
        },
        child: [],
      },
    ],
  })(e);
}
function k1(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z",
        },
        child: [],
      },
    ],
  })(e);
}
function S1(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67Z",
        },
        child: [],
      },
    ],
  })(e);
}
function C7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z",
        },
        child: [],
      },
    ],
  })(e);
}
function C1(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z",
        },
        child: [],
      },
    ],
  })(e);
}
function b7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z",
        },
        child: [],
      },
    ],
  })(e);
}
function ga(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",
        },
        child: [],
      },
    ],
  })(e);
}
function E7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z",
        },
        child: [],
      },
    ],
  })(e);
}
function N7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z",
        },
        child: [],
      },
    ],
  })(e);
}
function T7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M4.409 6.608L7.981.255l3.572 6.353H4.409zM8.411 0l3.569 6.348L15.552 0H8.411zm4.036 17.392l3.572 6.354 3.575-6.354h-7.147zm-.608-10.284h-7.43l3.715 6.605 3.715-6.605zm.428-.25h7.428L15.982.255l-3.715 6.603zM15.589 24l-3.569-6.349L8.448 24h7.141zm-3.856-6.858H4.306l3.712 6.603 3.715-6.603zm.428-.25h7.433l-3.718-6.605-3.715 6.605z",
        },
        child: [],
      },
    ],
  })(e);
}
function b1(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z",
        },
        child: [],
      },
    ],
  })(e);
}
function ya(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z",
        },
        child: [],
      },
    ],
  })(e);
}
function P7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z",
        },
        child: [],
      },
    ],
  })(e);
}
function M7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",
        },
        child: [],
      },
    ],
  })(e);
}
function j7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z",
        },
        child: [],
      },
    ],
  })(e);
}
function A7(e) {
  return z({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0",
        },
        child: [],
      },
    ],
  })(e);
}
function ls(e) {
  return z({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z",
        },
        child: [],
      },
    ],
  })(e);
}
function cs(e) {
  return z({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z",
        },
        child: [],
      },
    ],
  })(e);
}
function us(e) {
  return z({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z",
        },
        child: [],
      },
    ],
  })(e);
}
function I7(e) {
  return z({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z",
        },
        child: [],
      },
    ],
  })(e);
}
function va(e) {
  return z({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z",
        },
        child: [],
      },
    ],
  })(e);
}
function E1(e) {
  return z({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z",
        },
        child: [],
      },
    ],
  })(e);
}
function N1(e) {
  return z({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M528 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM128 180v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm288 0v-40c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12z",
        },
        child: [],
      },
    ],
  })(e);
}
function wa(e) {
  return z({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z",
        },
        child: [],
      },
    ],
  })(e);
}
function T1(e) {
  return z({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z",
        },
        child: [],
      },
    ],
  })(e);
}
function P1(e) {
  return z({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M109.46 244.04l134.58-134.56-44.12-44.12-61.68 61.68a7.919 7.919 0 0 1-11.21 0l-11.21-11.21c-3.1-3.1-3.1-8.12 0-11.21l61.68-61.68-33.64-33.65C131.47-3.1 111.39-3.1 99 9.29L9.29 99c-12.38 12.39-12.39 32.47 0 44.86l100.17 100.18zm388.47-116.8c18.76-18.76 18.75-49.17 0-67.93l-45.25-45.25c-18.76-18.76-49.18-18.76-67.95 0l-46.02 46.01 113.2 113.2 46.02-46.03zM316.08 82.71l-297 296.96L.32 487.11c-2.53 14.49 10.09 27.11 24.59 24.56l107.45-18.84L429.28 195.9 316.08 82.71zm186.63 285.43l-33.64-33.64-61.68 61.68c-3.1 3.1-8.12 3.1-11.21 0l-11.21-11.21c-3.09-3.1-3.09-8.12 0-11.21l61.68-61.68-44.14-44.14L267.93 402.5l100.21 100.2c12.39 12.39 32.47 12.39 44.86 0l89.71-89.7c12.39-12.39 12.39-32.47 0-44.86z",
        },
        child: [],
      },
    ],
  })(e);
}
function xa(e) {
  return z({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z",
        },
        child: [],
      },
    ],
  })(e);
}
function M1(e) {
  return z({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z",
        },
        child: [],
      },
    ],
  })(e);
}
function j1(e) {
  return z({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
        },
        child: [],
      },
    ],
  })(e);
}
function Hi(e) {
  return z({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z",
        },
        child: [],
      },
    ],
  })(e);
}
function A1(e) {
  return z({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z",
        },
        child: [],
      },
    ],
  })(e);
}
function Fi(e) {
  return z({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z",
        },
        child: [],
      },
    ],
  })(e);
}
function ds(e) {
  return z({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "m16.24 11.51 1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.13-4.13zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45-1.89 1.9zm7.88 7.89-4.13-4.13 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
        },
        child: [],
      },
    ],
  })(e);
}
function ps(e) {
  return z({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M6.36 18.78 6.61 21l1.62-1.54 2.77-7.6c-.68-.17-1.28-.51-1.77-.98l-2.87 7.9zM14.77 10.88c-.49.47-1.1.81-1.77.98l2.77 7.6L17.39 21l.26-2.22-2.88-7.9zM15 8c0-1.3-.84-2.4-2-2.82V3h-2v2.18C9.84 5.6 9 6.7 9 8c0 1.66 1.34 3 3 3s3-1.34 3-3zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
        },
        child: [],
      },
    ],
  })(e);
}
function I1(e) {
  return z({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
        },
        child: [],
      },
    ],
  })(e);
}
function D7(e) {
  return z({
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M3.5 3.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v10a.75.75 0 0 0 1.5 0v-10A1.75 1.75 0 0 0 17.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 0 0 0-1.5h-7a.25.25 0 0 1-.25-.25V3.75Z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M6.25 7a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm-.75 4.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm16.28 4.53a.75.75 0 1 0-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Z",
        },
        child: [],
      },
    ],
  })(e);
}
function L7(e) {
  return z({
    attr: { viewBox: "0 0 24 24", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M4 6.14286V18.9669L9.06476 16.7963L15.0648 19.7963L20 17.6812V4.85714L21.303 4.2987C21.5569 4.18992 21.8508 4.30749 21.9596 4.56131C21.9862 4.62355 22 4.69056 22 4.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V7L4 6.14286ZM16.2426 11.2426L12 15.4853L7.75736 11.2426C5.41421 8.89949 5.41421 5.10051 7.75736 2.75736C10.1005 0.414214 13.8995 0.414214 16.2426 2.75736C18.5858 5.10051 18.5858 8.89949 16.2426 11.2426ZM12 12.6569L14.8284 9.82843C16.3905 8.26633 16.3905 5.73367 14.8284 4.17157C13.2663 2.60948 10.7337 2.60948 9.17157 4.17157C7.60948 5.73367 7.60948 8.26633 9.17157 9.82843L12 12.6569Z",
        },
        child: [],
      },
    ],
  })(e);
}
const R7 = {
    frontend: as,
    backend: Hi,
    fullstack: wa,
    devops: os,
    android: l7,
    ios: m7,
    postgresql: C1,
    postgresqldba: C1,
    qa: D7,
    "software-architect": ps,
    softwarearchitect: ps,
    "technical-writer": P1,
    technicalwriter: P1,
    devrel: Fi,
    "machine-learning": ls,
    machinelearning: ls,
    "ai-data-scientist": S1,
    aidatascientist: S1,
    "ai-engineer": ls,
    aiengineer: ls,
    "ai-agents": M1,
    aiagents: M1,
    "data-analyst": cs,
    dataanalyst: cs,
    "bi-analyst": cs,
    bianalyst: cs,
    "data-engineer": va,
    dataengineer: va,
    mlops: I7,
    "product-manager": Fi,
    productmanager: Fi,
    "engineering-manager": Fi,
    engineeringmanager: Fi,
    "game-developer": E1,
    gamedeveloper: E1,
    "server-side-game-developer": Hi,
    serversidegamedeveloper: Hi,
    "ux-design": ds,
    uxdesign: ds,
    blockchain: T7,
    "cyber-security": A1,
    cybersecurity: A1,
    "api-design": T1,
    apidesign: T1,
    "system-design": xa,
    systemdesign: xa,
    systemDesign: xa,
    "frontend-beginner": as,
    frontendbeginner: as,
    "backend-beginner": Hi,
    backendbeginner: Hi,
    "devops-beginner": os,
    devopsbeginner: os,
    html: as,
    css: d7,
    javascript: g7,
    typescript: M7,
    react: ga,
    "react-native": ga,
    reactnative: ga,
    vue: j7,
    angular: c7,
    nextjs: S7,
    "node.js": k1,
    nodejs: k1,
    "spring-boot": b1,
    springboot: b1,
    "asp.net-core": v1,
    aspnetcore: v1,
    laravel: w7,
    php: C7,
    python: b7,
    java: us,
    go: x1,
    golang: x1,
    rust: N7,
    "c++": y1,
    cpp: y1,
    kotlin: y7,
    swift: ya,
    "swift-ui": ya,
    swiftui: ya,
    flutter: h7,
    mongodb: k7,
    redis: E7,
    sql: va,
    docker: os,
    kubernetes: v7,
    aws: a7,
    linux: x7,
    "git-github": w1,
    gitgithub: w1,
    graphql: f7,
    wordpress: A7,
    terraform: P7,
    cloudflare: u7,
    elasticsearch: p7,
    bash: ma,
    "shell-bash": ma,
    shellbash: ma,
    "computer-science": wa,
    computerscience: wa,
    dsa: us,
    "datastructures-and-algorithms": us,
    datastructuresandalgorithms: us,
    "design-and-architecture": ps,
    softwaredesignarchitecture: ps,
    "code-review": j1,
    codereview: j1,
    "ai-red-teaming": I1,
    airedteaming: I1,
    "prompt-engineering": N1,
    promptengineering: N1,
    "design-system": ds,
    designsystem: ds,
  },
  D1 = (e, t = 24) => {
    const i = R7[e] || L7;
    return a.jsx(i, { size: t });
  },
  _7 = {
    "Role Based": [
      {
        name: "Frontend Beginner",
        url: "https://roadmap.sh/frontend?r=frontend-beginner",
        icon: "🎨",
      },
      {
        name: "Backend Beginner",
        url: "https://roadmap.sh/backend?r=backend-beginner",
        icon: "⚙️",
      },
      {
        name: "DevOps Beginner",
        url: "https://roadmap.sh/devops?r=devops-beginner",
        icon: "🔧",
      },
      { name: "Frontend", url: "https://roadmap.sh/frontend", icon: "⚛️" },
      { name: "Backend", url: "https://roadmap.sh/backend", icon: "🖥️" },
      { name: "Full Stack", url: "https://roadmap.sh/full-stack", icon: "🚀" },
      { name: "API Design", url: "https://roadmap.sh/api-design", icon: "🔌" },
      { name: "QA Engineer", url: "https://roadmap.sh/qa", icon: "✅" },
      { name: "DevOps", url: "https://roadmap.sh/devops", icon: "♾️" },
      {
        name: "Android Developer",
        url: "https://roadmap.sh/android",
        icon: "🤖",
      },
      { name: "iOS Developer", url: "https://roadmap.sh/ios", icon: "📱" },
      {
        name: "PostgreSQL DBA",
        url: "https://roadmap.sh/postgresql-dba",
        icon: "🐘",
      },
      {
        name: "Software Architect",
        url: "https://roadmap.sh/software-architect",
        icon: "🏛️",
      },
      {
        name: "Technical Writer",
        url: "https://roadmap.sh/technical-writer",
        icon: "✍️",
      },
      { name: "DevRel Engineer", url: "https://roadmap.sh/devrel", icon: "🤝" },
      {
        name: "Machine Learning",
        url: "https://roadmap.sh/machine-learning",
        icon: "🤖",
      },
      {
        name: "AI Data Scientist",
        url: "https://roadmap.sh/ai-data-scientist",
        icon: "📊",
      },
      {
        name: "AI Engineer",
        url: "https://roadmap.sh/ai-engineer",
        icon: "🧠",
      },
      { name: "AI Agents", url: "https://roadmap.sh/ai-agents", icon: "🤖" },
      {
        name: "Data Analyst",
        url: "https://roadmap.sh/data-analyst",
        icon: "📈",
      },
      { name: "BI Analyst", url: "https://roadmap.sh/bi-analyst", icon: "📊" },
      {
        name: "Data Engineer",
        url: "https://roadmap.sh/data-engineer",
        icon: "🗄️",
      },
      { name: "MLOps", url: "https://roadmap.sh/mlops", icon: "⚡" },
      {
        name: "Product Manager",
        url: "https://roadmap.sh/product-manager",
        icon: "📋",
      },
      {
        name: "Engineering Manager",
        url: "https://roadmap.sh/engineering-manager",
        icon: "👔",
      },
      {
        name: "Game Developer (Client)",
        url: "https://roadmap.sh/game-developer",
        icon: "🎮",
      },
      {
        name: "Game Developer (Server)",
        url: "https://roadmap.sh/server-side-game-developer",
        icon: "🎮",
      },
      { name: "UX Design", url: "https://roadmap.sh/ux-design", icon: "🎨" },
      { name: "Blockchain", url: "https://roadmap.sh/blockchain", icon: "⛓️" },
      {
        name: "Cyber Security",
        url: "https://roadmap.sh/cyber-security",
        icon: "🔒",
      },
    ],
    "Skill Based": [
      { name: "React", url: "https://roadmap.sh/react", icon: "⚛️" },
      { name: "Vue", url: "https://roadmap.sh/vue", icon: "💚" },
      { name: "Angular", url: "https://roadmap.sh/angular", icon: "🅰️" },
      { name: "Next.js", url: "https://roadmap.sh/nextjs", icon: "▲" },
      { name: "Node.js", url: "https://roadmap.sh/nodejs", icon: "📗" },
      {
        name: "Spring Boot",
        url: "https://roadmap.sh/spring-boot",
        icon: "🍃",
      },
      {
        name: "ASP.NET Core",
        url: "https://roadmap.sh/aspnet-core",
        icon: "🔷",
      },
      { name: "Laravel", url: "https://roadmap.sh/laravel", icon: "🔴" },
      { name: "Python", url: "https://roadmap.sh/python", icon: "🐍" },
      { name: "Java", url: "https://roadmap.sh/java", icon: "☕" },
      { name: "JavaScript", url: "https://roadmap.sh/javascript", icon: "🟨" },
      { name: "TypeScript", url: "https://roadmap.sh/typescript", icon: "🔷" },
      { name: "Go", url: "https://roadmap.sh/golang", icon: "🐹" },
      { name: "Rust", url: "https://roadmap.sh/rust", icon: "🦀" },
      { name: "C++", url: "https://roadmap.sh/cpp", icon: "➕" },
      { name: "Kotlin", url: "https://roadmap.sh/kotlin", icon: "🟣" },
      { name: "Swift", url: "https://roadmap.sh/swift-ui", icon: "🍎" },
      { name: "PHP", url: "https://roadmap.sh/php", icon: "🐘" },
      { name: "SQL", url: "https://roadmap.sh/sql", icon: "🗄️" },
      { name: "Docker", url: "https://roadmap.sh/docker", icon: "🐳" },
      { name: "Kubernetes", url: "https://roadmap.sh/kubernetes", icon: "☸️" },
      { name: "AWS", url: "https://roadmap.sh/aws", icon: "☁️" },
      { name: "Linux", url: "https://roadmap.sh/linux", icon: "🐧" },
      { name: "MongoDB", url: "https://roadmap.sh/mongodb", icon: "🍃" },
      { name: "Redis", url: "https://roadmap.sh/redis", icon: "🔴" },
      { name: "GraphQL", url: "https://roadmap.sh/graphql", icon: "💜" },
      {
        name: "System Design",
        url: "https://roadmap.sh/system-design",
        icon: "🏗️",
      },
      {
        name: "Data Structures",
        url: "https://roadmap.sh/datastructures-and-algorithms",
        icon: "📚",
      },
      {
        name: "Prompt Engineering",
        url: "https://roadmap.sh/prompt-engineering",
        icon: "💬",
      },
    ],
  };
function z7() {
  const [e, t] = E.useState("frontend"),
    [n, i] = E.useState("internal"),
    [r, s] = E.useState({}),
    [o, l] = E.useState(() => {
      const S = localStorage.getItem("roadmap_progress");
      return S ? JSON.parse(S) : {};
    }),
    c = (S, y) => {
      const m = `${S}_${y}`,
        g = { ...o, [m]: !o[m] };
      (l(g), localStorage.setItem("roadmap_progress", JSON.stringify(g)));
    },
    u = (S) => {
      s((y) => ({ ...y, [S]: !y[S] }));
    },
    d = (S, y) => o[`${S}_${y}`] || !1,
    p = (S) => {
      const y = fa[S];
      if (!y) return 0;
      const m = y.milestones.length,
        g = y.milestones.filter((C) => d(S, C.id)).length;
      return m === 0 ? 0 : Math.round((g / m) * 100);
    },
    f = (S) => {
      switch (S) {
        case "Beginner":
          return "#10b981";
        case "Intermediate":
          return "#f59e0b";
        case "Advanced":
          return "#ef4444";
        case "Expert":
          return "#8b5cf6";
        default:
          return "#667eea";
      }
    },
    h = fa[e],
    [w, k] = E.useState([]);
  return (
    E.useEffect(() => {
      const S = Array.from({ length: 150 }).map((y, m) => ({
        id: m,
        left: Math.random() * 100,
        size: Math.random() * 8 + 2,
        delay: Math.random() * 20,
        duration: Math.random() * 10 + 10,
      }));
      k(S);
    }, []),
    a.jsxs("div", {
      className: "app-container",
      style: { position: "relative" },
      children: [
        a.jsx("div", {
          className: "roadmap-background-bubbles",
          children: w.map((S) =>
            a.jsx(
              "div",
              {
                className: "roadmap-bubble",
                style: {
                  left: `${S.left}%`,
                  width: `${S.size}px`,
                  height: `${S.size}px`,
                  animationDelay: `${S.delay}s`,
                  animationDuration: `${S.duration}s`,
                },
              },
              S.id,
            ),
          ),
        }),
        a.jsx(gn, {
          title: "Learning Roadmaps",
          subtitle: "Structured technical paths for every role",
          showBack: !1,
        }),
        a.jsxs("div", {
          className: "roadmap-tabs-nav",
          children: [
            a.jsxs("button", {
              className: `tab-nav-btn ${n === "internal" ? "active" : ""}`,
              onClick: () => i("internal"),
              children: [
                a.jsx(Pn, { size: 20 }),
                a.jsx("span", { children: "Internal Roadmaps" }),
              ],
            }),
            a.jsxs("button", {
              className: `tab-nav-btn ${n === "external" ? "active" : ""}`,
              onClick: () => i("external"),
              children: [
                a.jsx(En, { size: 20 }),
                a.jsx("span", { children: "External Resources" }),
              ],
            }),
          ],
        }),
        n === "internal"
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsx("div", {
                  className: "roadmap-selector",
                  children: Object.values(fa).map((S) => {
                    const y = p(S.id);
                    return a.jsxs(
                      "button",
                      {
                        className: `roadmap-tab ${e === S.id ? "active" : ""}`,
                        onClick: () => t(S.id),
                        style: { "--roadmap-color": S.color },
                        children: [
                          a.jsx("span", {
                            className: "roadmap-icon",
                            children: D1(S.id, 32),
                          }),
                          a.jsxs("div", {
                            className: "roadmap-tab-info",
                            children: [
                              a.jsx("span", {
                                className: "roadmap-tab-title",
                                children: S.title,
                              }),
                              y > 0 &&
                                a.jsx("div", {
                                  className: "roadmap-progress-mini",
                                  children: a.jsx("div", {
                                    className: "progress-bar-fill",
                                    style: {
                                      width: `${y}%`,
                                      background: S.color,
                                    },
                                  }),
                                }),
                            ],
                          }),
                        ],
                      },
                      S.id,
                    );
                  }),
                }),
                a.jsxs("div", {
                  className: "roadmap-header",
                  style: { background: h.color },
                  children: [
                    a.jsxs("div", {
                      className: "roadmap-header-content",
                      children: [
                        a.jsx("div", {
                          className: "roadmap-icon-large",
                          children: D1(h.id, 64),
                        }),
                        a.jsxs("div", {
                          children: [
                            a.jsx("h2", { children: h.title }),
                            a.jsx("p", { children: h.description }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "roadmap-stats",
                      children: [
                        a.jsxs("div", {
                          className: "roadmap-stat",
                          children: [
                            a.jsx(eo, { size: 20 }),
                            a.jsx("span", { children: h.estimatedTime }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "roadmap-stat",
                          children: [
                            a.jsx(Pn, { size: 20 }),
                            a.jsxs("span", {
                              children: [h.milestones.length, " Modules"],
                            }),
                          ],
                        }),
                        p(h.id) > 0 &&
                          a.jsxs("div", {
                            className: "roadmap-stat",
                            children: [
                              a.jsx(Dc, { size: 20 }),
                              a.jsxs("span", { children: [p(h.id), "% Done"] }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                a.jsx("div", {
                  className: "roadmap-timeline",
                  children:
                    h.milestones.length > 0
                      ? h.milestones.map((S, y) => {
                          const m = d(h.id, S.id),
                            g = r[S.id];
                          return a.jsxs(
                            "div",
                            {
                              className: `milestone-card ${m ? "completed" : ""}`,
                              children: [
                                a.jsxs("div", {
                                  className: "timeline-connector",
                                  children: [
                                    a.jsx("div", {
                                      className: "timeline-dot",
                                      style: {
                                        background: m
                                          ? "#10b981"
                                          : f(S.difficulty),
                                      },
                                      children: m
                                        ? a.jsx(b3, {
                                            size: 16,
                                            color: "white",
                                            strokeWidth: 3,
                                          })
                                        : a.jsx("span", {
                                            className: "milestone-number",
                                            children: y + 1,
                                          }),
                                    }),
                                    y < h.milestones.length - 1 &&
                                      a.jsx("div", {
                                        className: `timeline-line ${m ? "completed" : ""}`,
                                      }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  className: "milestone-content",
                                  children: [
                                    a.jsxs("div", {
                                      className: "milestone-header-row",
                                      onClick: () => u(S.id),
                                      children: [
                                        a.jsxs("div", {
                                          className: "milestone-title-section",
                                          children: [
                                            a.jsxs("div", {
                                              className: "milestone-top-badges",
                                              children: [
                                                a.jsx("span", {
                                                  className: "difficulty-badge",
                                                  style: {
                                                    color: f(S.difficulty),
                                                    borderColor: f(
                                                      S.difficulty,
                                                    ),
                                                  },
                                                  children: S.difficulty,
                                                }),
                                                a.jsxs("span", {
                                                  className: "time-badge",
                                                  children: [
                                                    a.jsx(eo, { size: 12 }),
                                                    S.estimatedHours,
                                                    "h",
                                                  ],
                                                }),
                                              ],
                                            }),
                                            a.jsx("h3", { children: S.title }),
                                            a.jsx("p", {
                                              className:
                                                "milestone-description",
                                              children: S.description,
                                            }),
                                          ],
                                        }),
                                        a.jsxs("div", {
                                          className: "milestone-actions",
                                          children: [
                                            a.jsx("button", {
                                              className: `milestone-check-btn ${m ? "checked" : ""}`,
                                              onClick: (C) => {
                                                (C.stopPropagation(),
                                                  c(h.id, S.id));
                                              },
                                              title: m
                                                ? "Mark as incomplete"
                                                : "Mark as complete",
                                              children: m
                                                ? a.jsx(It, { size: 28 })
                                                : a.jsx(z3, { size: 28 }),
                                            }),
                                            a.jsx("button", {
                                              className: "expand-btn",
                                              children: g
                                                ? a.jsx(j3, { size: 20 })
                                                : a.jsx(N3, { size: 20 }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    g &&
                                      a.jsxs("div", {
                                        className: "milestone-details",
                                        children: [
                                          a.jsxs("div", {
                                            className: "milestone-section",
                                            children: [
                                              a.jsxs("h4", {
                                                children: [
                                                  a.jsx(wl, { size: 16 }),
                                                  " Key Topics",
                                                ],
                                              }),
                                              a.jsxs("div", {
                                                className:
                                                  "roadmap-milestone-body",
                                                children: [
                                                  S.content &&
                                                    a.jsx("div", {
                                                      className:
                                                        "roadmap-milestone-content",
                                                      style: {
                                                        marginBottom: "1rem",
                                                        lineHeight: "1.6",
                                                        color:
                                                          "var(--text-main)",
                                                        fontSize: "0.95rem",
                                                        padding: "1rem",
                                                        background:
                                                          "var(--bg-inset)",
                                                        borderRadius: "8px",
                                                        borderLeft: `4px solid ${h.color}`,
                                                      },
                                                      children: S.content,
                                                    }),
                                                  a.jsx("div", {
                                                    className:
                                                      "roadmap-topics-grid",
                                                    children: S.topics.map(
                                                      (C, N) =>
                                                        a.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "roadmap-topic-chip",
                                                            children: C,
                                                          },
                                                          N,
                                                        ),
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          S.resources &&
                                            S.resources.length > 0 &&
                                            a.jsxs("div", {
                                              className: "milestone-section",
                                              children: [
                                                a.jsxs("h4", {
                                                  children: [
                                                    a.jsx(Pn, { size: 16 }),
                                                    " Resources",
                                                  ],
                                                }),
                                                a.jsx("div", {
                                                  className: "resources-list",
                                                  children: S.resources.map(
                                                    (C, N) =>
                                                      a.jsxs(
                                                        "a",
                                                        {
                                                          href: C.url,
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          className:
                                                            "resource-link-item",
                                                          children: [
                                                            a.jsx(Co, {
                                                              size: 14,
                                                            }),
                                                            C.title,
                                                            a.jsx(En, {
                                                              size: 12,
                                                              className:
                                                                "ext-icon",
                                                            }),
                                                          ],
                                                        },
                                                        N,
                                                      ),
                                                  ),
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            },
                            S.id,
                          );
                        })
                      : a.jsxs("div", {
                          className: "empty-roadmap-state",
                          children: [
                            a.jsx("p", {
                              children:
                                "Content for this roadmap is coming soon.",
                            }),
                            a.jsxs("a", {
                              href: h.link,
                              target: "_blank",
                              rel: "noreferrer",
                              className: "btn-primary",
                              children: [
                                "View on roadmap.sh ",
                                a.jsx(En, { size: 16 }),
                              ],
                            }),
                          ],
                        }),
                }),
              ],
            })
          : a.jsx("div", {
              className: "external-roadmaps-container",
              children: Object.entries(_7).map(([S, y]) =>
                a.jsxs(
                  "div",
                  {
                    className: "external-category",
                    children: [
                      a.jsxs("div", {
                        className: "category-header",
                        children: [
                          a.jsx(M4, { size: 24, fill: "currentColor" }),
                          a.jsx("h2", { children: S }),
                        ],
                      }),
                      a.jsx("div", {
                        className: "external-roadmaps-grid",
                        children: y.map((m, g) =>
                          a.jsxs(
                            "a",
                            {
                              href: m.url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "external-roadmap-card",
                              children: [
                                a.jsx("div", {
                                  className: "external-card-icon",
                                  children: m.icon,
                                }),
                                a.jsxs("div", {
                                  className: "external-card-content",
                                  children: [
                                    a.jsx("h3", { children: m.name }),
                                    a.jsxs("div", {
                                      className: "external-link-indicator",
                                      children: [
                                        a.jsx(En, { size: 16 }),
                                        a.jsx("span", {
                                          children: "roadmap.sh",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            g,
                          ),
                        ),
                      }),
                    ],
                  },
                  S,
                ),
              ),
            }),
      ],
    })
  );
}
var L1;
(function (e) {
  ((e.STRING = "string"),
    (e.NUMBER = "number"),
    (e.INTEGER = "integer"),
    (e.BOOLEAN = "boolean"),
    (e.ARRAY = "array"),
    (e.OBJECT = "object"));
})(L1 || (L1 = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var R1;
(function (e) {
  ((e.LANGUAGE_UNSPECIFIED = "language_unspecified"), (e.PYTHON = "python"));
})(R1 || (R1 = {}));
var _1;
(function (e) {
  ((e.OUTCOME_UNSPECIFIED = "outcome_unspecified"),
    (e.OUTCOME_OK = "outcome_ok"),
    (e.OUTCOME_FAILED = "outcome_failed"),
    (e.OUTCOME_DEADLINE_EXCEEDED = "outcome_deadline_exceeded"));
})(_1 || (_1 = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const z1 = ["user", "model", "function", "system"];
var O1;
(function (e) {
  ((e.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED"),
    (e.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH"),
    (e.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT"),
    (e.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT"),
    (e.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT"),
    (e.HARM_CATEGORY_CIVIC_INTEGRITY = "HARM_CATEGORY_CIVIC_INTEGRITY"));
})(O1 || (O1 = {}));
var B1;
(function (e) {
  ((e.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED"),
    (e.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE"),
    (e.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE"),
    (e.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH"),
    (e.BLOCK_NONE = "BLOCK_NONE"));
})(B1 || (B1 = {}));
var H1;
(function (e) {
  ((e.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED"),
    (e.NEGLIGIBLE = "NEGLIGIBLE"),
    (e.LOW = "LOW"),
    (e.MEDIUM = "MEDIUM"),
    (e.HIGH = "HIGH"));
})(H1 || (H1 = {}));
var F1;
(function (e) {
  ((e.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED"),
    (e.SAFETY = "SAFETY"),
    (e.OTHER = "OTHER"));
})(F1 || (F1 = {}));
var rr;
(function (e) {
  ((e.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED"),
    (e.STOP = "STOP"),
    (e.MAX_TOKENS = "MAX_TOKENS"),
    (e.SAFETY = "SAFETY"),
    (e.RECITATION = "RECITATION"),
    (e.LANGUAGE = "LANGUAGE"),
    (e.BLOCKLIST = "BLOCKLIST"),
    (e.PROHIBITED_CONTENT = "PROHIBITED_CONTENT"),
    (e.SPII = "SPII"),
    (e.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL"),
    (e.OTHER = "OTHER"));
})(rr || (rr = {}));
var U1;
(function (e) {
  ((e.TASK_TYPE_UNSPECIFIED = "TASK_TYPE_UNSPECIFIED"),
    (e.RETRIEVAL_QUERY = "RETRIEVAL_QUERY"),
    (e.RETRIEVAL_DOCUMENT = "RETRIEVAL_DOCUMENT"),
    (e.SEMANTIC_SIMILARITY = "SEMANTIC_SIMILARITY"),
    (e.CLASSIFICATION = "CLASSIFICATION"),
    (e.CLUSTERING = "CLUSTERING"));
})(U1 || (U1 = {}));
var W1;
(function (e) {
  ((e.MODE_UNSPECIFIED = "MODE_UNSPECIFIED"),
    (e.AUTO = "AUTO"),
    (e.ANY = "ANY"),
    (e.NONE = "NONE"));
})(W1 || (W1 = {}));
var V1;
(function (e) {
  ((e.MODE_UNSPECIFIED = "MODE_UNSPECIFIED"),
    (e.MODE_DYNAMIC = "MODE_DYNAMIC"));
})(V1 || (V1 = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class je extends Error {
  constructor(t) {
    super(`[GoogleGenerativeAI Error]: ${t}`);
  }
}
class Vn extends je {
  constructor(t, n) {
    (super(t), (this.response = n));
  }
}
class yf extends je {
  constructor(t, n, i, r) {
    (super(t),
      (this.status = n),
      (this.statusText = i),
      (this.errorDetails = r));
  }
}
class cn extends je {}
class vf extends je {}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const O7 = "https://generativelanguage.googleapis.com",
  B7 = "v1beta",
  H7 = "0.24.1",
  F7 = "genai-js";
var Ln;
(function (e) {
  ((e.GENERATE_CONTENT = "generateContent"),
    (e.STREAM_GENERATE_CONTENT = "streamGenerateContent"),
    (e.COUNT_TOKENS = "countTokens"),
    (e.EMBED_CONTENT = "embedContent"),
    (e.BATCH_EMBED_CONTENTS = "batchEmbedContents"));
})(Ln || (Ln = {}));
class U7 {
  constructor(t, n, i, r, s) {
    ((this.model = t),
      (this.task = n),
      (this.apiKey = i),
      (this.stream = r),
      (this.requestOptions = s));
  }
  toString() {
    var t, n;
    const i =
      ((t = this.requestOptions) === null || t === void 0
        ? void 0
        : t.apiVersion) || B7;
    let s = `${((n = this.requestOptions) === null || n === void 0 ? void 0 : n.baseUrl) || O7}/${i}/${this.model}:${this.task}`;
    return (this.stream && (s += "?alt=sse"), s);
  }
}
function W7(e) {
  const t = [];
  return (
    e != null && e.apiClient && t.push(e.apiClient),
    t.push(`${F7}/${H7}`),
    t.join(" ")
  );
}
async function V7(e) {
  var t;
  const n = new Headers();
  (n.append("Content-Type", "application/json"),
    n.append("x-goog-api-client", W7(e.requestOptions)),
    n.append("x-goog-api-key", e.apiKey));
  let i =
    (t = e.requestOptions) === null || t === void 0 ? void 0 : t.customHeaders;
  if (i) {
    if (!(i instanceof Headers))
      try {
        i = new Headers(i);
      } catch (r) {
        throw new cn(
          `unable to convert customHeaders value ${JSON.stringify(i)} to Headers: ${r.message}`,
        );
      }
    for (const [r, s] of i.entries()) {
      if (r === "x-goog-api-key")
        throw new cn(`Cannot set reserved header name ${r}`);
      if (r === "x-goog-api-client")
        throw new cn(
          `Header name ${r} can only be set using the apiClient field`,
        );
      n.append(r, s);
    }
  }
  return n;
}
async function q7(e, t, n, i, r, s) {
  const o = new U7(e, t, n, i, s);
  return {
    url: o.toString(),
    fetchOptions: Object.assign(Object.assign({}, K7(s)), {
      method: "POST",
      headers: await V7(o),
      body: r,
    }),
  };
}
async function Or(e, t, n, i, r, s = {}, o = fetch) {
  const { url: l, fetchOptions: c } = await q7(e, t, n, i, r, s);
  return $7(l, c, o);
}
async function $7(e, t, n = fetch) {
  let i;
  try {
    i = await n(e, t);
  } catch (r) {
    G7(r, e);
  }
  return (i.ok || (await Q7(i, e)), i);
}
function G7(e, t) {
  let n = e;
  throw (
    n.name === "AbortError"
      ? ((n = new vf(
          `Request aborted when fetching ${t.toString()}: ${e.message}`,
        )),
        (n.stack = e.stack))
      : e instanceof yf ||
        e instanceof cn ||
        ((n = new je(`Error fetching from ${t.toString()}: ${e.message}`)),
        (n.stack = e.stack)),
    n
  );
}
async function Q7(e, t) {
  let n = "",
    i;
  try {
    const r = await e.json();
    ((n = r.error.message),
      r.error.details &&
        ((n += ` ${JSON.stringify(r.error.details)}`), (i = r.error.details)));
  } catch {}
  throw new yf(
    `Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,
    e.status,
    e.statusText,
    i,
  );
}
function K7(e) {
  const t = {};
  if (
    (e == null ? void 0 : e.signal) !== void 0 ||
    (e == null ? void 0 : e.timeout) >= 0
  ) {
    const n = new AbortController();
    ((e == null ? void 0 : e.timeout) >= 0 &&
      setTimeout(() => n.abort(), e.timeout),
      e != null &&
        e.signal &&
        e.signal.addEventListener("abort", () => {
          n.abort();
        }),
      (t.signal = n.signal));
  }
  return t;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Kc(e) {
  return (
    (e.text = () => {
      if (e.candidates && e.candidates.length > 0) {
        if (
          (e.candidates.length > 1 &&
            console.warn(
              `This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`,
            ),
          Ts(e.candidates[0]))
        )
          throw new Vn(`${Gt(e)}`, e);
        return J7(e);
      } else if (e.promptFeedback)
        throw new Vn(`Text not available. ${Gt(e)}`, e);
      return "";
    }),
    (e.functionCall = () => {
      if (e.candidates && e.candidates.length > 0) {
        if (
          (e.candidates.length > 1 &&
            console.warn(
              `This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`,
            ),
          Ts(e.candidates[0]))
        )
          throw new Vn(`${Gt(e)}`, e);
        return (
          console.warn(
            "response.functionCall() is deprecated. Use response.functionCalls() instead.",
          ),
          q1(e)[0]
        );
      } else if (e.promptFeedback)
        throw new Vn(`Function call not available. ${Gt(e)}`, e);
    }),
    (e.functionCalls = () => {
      if (e.candidates && e.candidates.length > 0) {
        if (
          (e.candidates.length > 1 &&
            console.warn(
              `This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`,
            ),
          Ts(e.candidates[0]))
        )
          throw new Vn(`${Gt(e)}`, e);
        return q1(e);
      } else if (e.promptFeedback)
        throw new Vn(`Function call not available. ${Gt(e)}`, e);
    }),
    e
  );
}
function J7(e) {
  var t, n, i, r;
  const s = [];
  if (
    !(
      (n =
        (t = e.candidates) === null || t === void 0 ? void 0 : t[0].content) ===
        null || n === void 0
    ) &&
    n.parts
  )
    for (const o of (r =
      (i = e.candidates) === null || i === void 0 ? void 0 : i[0].content) ===
      null || r === void 0
      ? void 0
      : r.parts)
      (o.text && s.push(o.text),
        o.executableCode &&
          s.push(
            "\n```" +
              o.executableCode.language +
              `
` +
              o.executableCode.code +
              "\n```\n",
          ),
        o.codeExecutionResult &&
          s.push("\n```\n" + o.codeExecutionResult.output + "\n```\n"));
  return s.length > 0 ? s.join("") : "";
}
function q1(e) {
  var t, n, i, r;
  const s = [];
  if (
    !(
      (n =
        (t = e.candidates) === null || t === void 0 ? void 0 : t[0].content) ===
        null || n === void 0
    ) &&
    n.parts
  )
    for (const o of (r =
      (i = e.candidates) === null || i === void 0 ? void 0 : i[0].content) ===
      null || r === void 0
      ? void 0
      : r.parts)
      o.functionCall && s.push(o.functionCall);
  if (s.length > 0) return s;
}
const Y7 = [rr.RECITATION, rr.SAFETY, rr.LANGUAGE];
function Ts(e) {
  return !!e.finishReason && Y7.includes(e.finishReason);
}
function Gt(e) {
  var t, n, i;
  let r = "";
  if ((!e.candidates || e.candidates.length === 0) && e.promptFeedback)
    ((r += "Response was blocked"),
      !((t = e.promptFeedback) === null || t === void 0) &&
        t.blockReason &&
        (r += ` due to ${e.promptFeedback.blockReason}`),
      !((n = e.promptFeedback) === null || n === void 0) &&
        n.blockReasonMessage &&
        (r += `: ${e.promptFeedback.blockReasonMessage}`));
  else if (!((i = e.candidates) === null || i === void 0) && i[0]) {
    const s = e.candidates[0];
    Ts(s) &&
      ((r += `Candidate was blocked due to ${s.finishReason}`),
      s.finishMessage && (r += `: ${s.finishMessage}`));
  }
  return r;
}
function Tr(e) {
  return this instanceof Tr ? ((this.v = e), this) : new Tr(e);
}
function X7(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = n.apply(e, t || []),
    r,
    s = [];
  return (
    (r = {}),
    o("next"),
    o("throw"),
    o("return"),
    (r[Symbol.asyncIterator] = function () {
      return this;
    }),
    r
  );
  function o(f) {
    i[f] &&
      (r[f] = function (h) {
        return new Promise(function (w, k) {
          s.push([f, h, w, k]) > 1 || l(f, h);
        });
      });
  }
  function l(f, h) {
    try {
      c(i[f](h));
    } catch (w) {
      p(s[0][3], w);
    }
  }
  function c(f) {
    f.value instanceof Tr
      ? Promise.resolve(f.value.v).then(u, d)
      : p(s[0][2], f);
  }
  function u(f) {
    l("next", f);
  }
  function d(f) {
    l("throw", f);
  }
  function p(f, h) {
    (f(h), s.shift(), s.length && l(s[0][0], s[0][1]));
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $1 = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
function Z7(e) {
  const t = e.body.pipeThrough(new TextDecoderStream("utf8", { fatal: !0 })),
    n = nw(t),
    [i, r] = n.tee();
  return { stream: tw(i), response: ew(r) };
}
async function ew(e) {
  const t = [],
    n = e.getReader();
  for (;;) {
    const { done: i, value: r } = await n.read();
    if (i) return Kc(iw(t));
    t.push(r);
  }
}
function tw(e) {
  return X7(this, arguments, function* () {
    const n = e.getReader();
    for (;;) {
      const { value: i, done: r } = yield Tr(n.read());
      if (r) break;
      yield yield Tr(Kc(i));
    }
  });
}
function nw(e) {
  const t = e.getReader();
  return new ReadableStream({
    start(i) {
      let r = "";
      return s();
      function s() {
        return t
          .read()
          .then(({ value: o, done: l }) => {
            if (l) {
              if (r.trim()) {
                i.error(new je("Failed to parse stream"));
                return;
              }
              i.close();
              return;
            }
            r += o;
            let c = r.match($1),
              u;
            for (; c; ) {
              try {
                u = JSON.parse(c[1]);
              } catch {
                i.error(new je(`Error parsing JSON response: "${c[1]}"`));
                return;
              }
              (i.enqueue(u), (r = r.substring(c[0].length)), (c = r.match($1)));
            }
            return s();
          })
          .catch((o) => {
            let l = o;
            throw (
              (l.stack = o.stack),
              l.name === "AbortError"
                ? (l = new vf("Request aborted when reading from the stream"))
                : (l = new je("Error reading from the stream")),
              l
            );
          });
      }
    },
  });
}
function iw(e) {
  const t = e[e.length - 1],
    n = { promptFeedback: t == null ? void 0 : t.promptFeedback };
  for (const i of e) {
    if (i.candidates) {
      let r = 0;
      for (const s of i.candidates)
        if (
          (n.candidates || (n.candidates = []),
          n.candidates[r] || (n.candidates[r] = { index: r }),
          (n.candidates[r].citationMetadata = s.citationMetadata),
          (n.candidates[r].groundingMetadata = s.groundingMetadata),
          (n.candidates[r].finishReason = s.finishReason),
          (n.candidates[r].finishMessage = s.finishMessage),
          (n.candidates[r].safetyRatings = s.safetyRatings),
          s.content && s.content.parts)
        ) {
          n.candidates[r].content ||
            (n.candidates[r].content = {
              role: s.content.role || "user",
              parts: [],
            });
          const o = {};
          for (const l of s.content.parts)
            (l.text && (o.text = l.text),
              l.functionCall && (o.functionCall = l.functionCall),
              l.executableCode && (o.executableCode = l.executableCode),
              l.codeExecutionResult &&
                (o.codeExecutionResult = l.codeExecutionResult),
              Object.keys(o).length === 0 && (o.text = ""),
              n.candidates[r].content.parts.push(o));
        }
      r++;
    }
    i.usageMetadata && (n.usageMetadata = i.usageMetadata);
  }
  return n;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function wf(e, t, n, i) {
  const r = await Or(
    t,
    Ln.STREAM_GENERATE_CONTENT,
    e,
    !0,
    JSON.stringify(n),
    i,
  );
  return Z7(r);
}
async function xf(e, t, n, i) {
  const s = await (
    await Or(t, Ln.GENERATE_CONTENT, e, !1, JSON.stringify(n), i)
  ).json();
  return { response: Kc(s) };
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kf(e) {
  if (e != null) {
    if (typeof e == "string") return { role: "system", parts: [{ text: e }] };
    if (e.text) return { role: "system", parts: [e] };
    if (e.parts) return e.role ? e : { role: "system", parts: e.parts };
  }
}
function Pr(e) {
  let t = [];
  if (typeof e == "string") t = [{ text: e }];
  else
    for (const n of e) typeof n == "string" ? t.push({ text: n }) : t.push(n);
  return rw(t);
}
function rw(e) {
  const t = { role: "user", parts: [] },
    n = { role: "function", parts: [] };
  let i = !1,
    r = !1;
  for (const s of e)
    "functionResponse" in s
      ? (n.parts.push(s), (r = !0))
      : (t.parts.push(s), (i = !0));
  if (i && r)
    throw new je(
      "Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.",
    );
  if (!i && !r)
    throw new je("No content is provided for sending chat message.");
  return i ? t : n;
}
function sw(e, t) {
  var n;
  let i = {
    model: t == null ? void 0 : t.model,
    generationConfig: t == null ? void 0 : t.generationConfig,
    safetySettings: t == null ? void 0 : t.safetySettings,
    tools: t == null ? void 0 : t.tools,
    toolConfig: t == null ? void 0 : t.toolConfig,
    systemInstruction: t == null ? void 0 : t.systemInstruction,
    cachedContent:
      (n = t == null ? void 0 : t.cachedContent) === null || n === void 0
        ? void 0
        : n.name,
    contents: [],
  };
  const r = e.generateContentRequest != null;
  if (e.contents) {
    if (r)
      throw new cn(
        "CountTokensRequest must have one of contents or generateContentRequest, not both.",
      );
    i.contents = e.contents;
  } else if (r)
    i = Object.assign(Object.assign({}, i), e.generateContentRequest);
  else {
    const s = Pr(e);
    i.contents = [s];
  }
  return { generateContentRequest: i };
}
function G1(e) {
  let t;
  return (
    e.contents ? (t = e) : (t = { contents: [Pr(e)] }),
    e.systemInstruction && (t.systemInstruction = kf(e.systemInstruction)),
    t
  );
}
function ow(e) {
  return typeof e == "string" || Array.isArray(e) ? { content: Pr(e) } : e;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Q1 = [
    "text",
    "inlineData",
    "functionCall",
    "functionResponse",
    "executableCode",
    "codeExecutionResult",
  ],
  aw = {
    user: ["text", "inlineData"],
    function: ["functionResponse"],
    model: ["text", "functionCall", "executableCode", "codeExecutionResult"],
    system: ["text"],
  };
function lw(e) {
  let t = !1;
  for (const n of e) {
    const { role: i, parts: r } = n;
    if (!t && i !== "user")
      throw new je(`First content should be with role 'user', got ${i}`);
    if (!z1.includes(i))
      throw new je(
        `Each item should include role field. Got ${i} but valid roles are: ${JSON.stringify(z1)}`,
      );
    if (!Array.isArray(r))
      throw new je(
        "Content should have 'parts' property with an array of Parts",
      );
    if (r.length === 0)
      throw new je("Each Content should have at least one part");
    const s = {
      text: 0,
      inlineData: 0,
      functionCall: 0,
      functionResponse: 0,
      fileData: 0,
      executableCode: 0,
      codeExecutionResult: 0,
    };
    for (const l of r) for (const c of Q1) c in l && (s[c] += 1);
    const o = aw[i];
    for (const l of Q1)
      if (!o.includes(l) && s[l] > 0)
        throw new je(`Content with role '${i}' can't contain '${l}' part`);
    t = !0;
  }
}
function K1(e) {
  var t;
  if (e.candidates === void 0 || e.candidates.length === 0) return !1;
  const n = (t = e.candidates[0]) === null || t === void 0 ? void 0 : t.content;
  if (n === void 0 || n.parts === void 0 || n.parts.length === 0) return !1;
  for (const i of n.parts)
    if (
      i === void 0 ||
      Object.keys(i).length === 0 ||
      (i.text !== void 0 && i.text === "")
    )
      return !1;
  return !0;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const J1 = "SILENT_ERROR";
class cw {
  constructor(t, n, i, r = {}) {
    ((this.model = n),
      (this.params = i),
      (this._requestOptions = r),
      (this._history = []),
      (this._sendPromise = Promise.resolve()),
      (this._apiKey = t),
      i != null && i.history && (lw(i.history), (this._history = i.history)));
  }
  async getHistory() {
    return (await this._sendPromise, this._history);
  }
  async sendMessage(t, n = {}) {
    var i, r, s, o, l, c;
    await this._sendPromise;
    const u = Pr(t),
      d = {
        safetySettings:
          (i = this.params) === null || i === void 0
            ? void 0
            : i.safetySettings,
        generationConfig:
          (r = this.params) === null || r === void 0
            ? void 0
            : r.generationConfig,
        tools: (s = this.params) === null || s === void 0 ? void 0 : s.tools,
        toolConfig:
          (o = this.params) === null || o === void 0 ? void 0 : o.toolConfig,
        systemInstruction:
          (l = this.params) === null || l === void 0
            ? void 0
            : l.systemInstruction,
        cachedContent:
          (c = this.params) === null || c === void 0 ? void 0 : c.cachedContent,
        contents: [...this._history, u],
      },
      p = Object.assign(Object.assign({}, this._requestOptions), n);
    let f;
    return (
      (this._sendPromise = this._sendPromise
        .then(() => xf(this._apiKey, this.model, d, p))
        .then((h) => {
          var w;
          if (K1(h.response)) {
            this._history.push(u);
            const k = Object.assign(
              { parts: [], role: "model" },
              (w = h.response.candidates) === null || w === void 0
                ? void 0
                : w[0].content,
            );
            this._history.push(k);
          } else {
            const k = Gt(h.response);
            k &&
              console.warn(
                `sendMessage() was unsuccessful. ${k}. Inspect response object for details.`,
              );
          }
          f = h;
        })
        .catch((h) => {
          throw ((this._sendPromise = Promise.resolve()), h);
        })),
      await this._sendPromise,
      f
    );
  }
  async sendMessageStream(t, n = {}) {
    var i, r, s, o, l, c;
    await this._sendPromise;
    const u = Pr(t),
      d = {
        safetySettings:
          (i = this.params) === null || i === void 0
            ? void 0
            : i.safetySettings,
        generationConfig:
          (r = this.params) === null || r === void 0
            ? void 0
            : r.generationConfig,
        tools: (s = this.params) === null || s === void 0 ? void 0 : s.tools,
        toolConfig:
          (o = this.params) === null || o === void 0 ? void 0 : o.toolConfig,
        systemInstruction:
          (l = this.params) === null || l === void 0
            ? void 0
            : l.systemInstruction,
        cachedContent:
          (c = this.params) === null || c === void 0 ? void 0 : c.cachedContent,
        contents: [...this._history, u],
      },
      p = Object.assign(Object.assign({}, this._requestOptions), n),
      f = wf(this._apiKey, this.model, d, p);
    return (
      (this._sendPromise = this._sendPromise
        .then(() => f)
        .catch((h) => {
          throw new Error(J1);
        })
        .then((h) => h.response)
        .then((h) => {
          if (K1(h)) {
            this._history.push(u);
            const w = Object.assign({}, h.candidates[0].content);
            (w.role || (w.role = "model"), this._history.push(w));
          } else {
            const w = Gt(h);
            w &&
              console.warn(
                `sendMessageStream() was unsuccessful. ${w}. Inspect response object for details.`,
              );
          }
        })
        .catch((h) => {
          h.message !== J1 && console.error(h);
        })),
      f
    );
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function uw(e, t, n, i) {
  return (await Or(t, Ln.COUNT_TOKENS, e, !1, JSON.stringify(n), i)).json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function dw(e, t, n, i) {
  return (await Or(t, Ln.EMBED_CONTENT, e, !1, JSON.stringify(n), i)).json();
}
async function pw(e, t, n, i) {
  const r = n.requests.map((o) =>
    Object.assign(Object.assign({}, o), { model: t }),
  );
  return (
    await Or(
      t,
      Ln.BATCH_EMBED_CONTENTS,
      e,
      !1,
      JSON.stringify({ requests: r }),
      i,
    )
  ).json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Y1 {
  constructor(t, n, i = {}) {
    ((this.apiKey = t),
      (this._requestOptions = i),
      n.model.includes("/")
        ? (this.model = n.model)
        : (this.model = `models/${n.model}`),
      (this.generationConfig = n.generationConfig || {}),
      (this.safetySettings = n.safetySettings || []),
      (this.tools = n.tools),
      (this.toolConfig = n.toolConfig),
      (this.systemInstruction = kf(n.systemInstruction)),
      (this.cachedContent = n.cachedContent));
  }
  async generateContent(t, n = {}) {
    var i;
    const r = G1(t),
      s = Object.assign(Object.assign({}, this._requestOptions), n);
    return xf(
      this.apiKey,
      this.model,
      Object.assign(
        {
          generationConfig: this.generationConfig,
          safetySettings: this.safetySettings,
          tools: this.tools,
          toolConfig: this.toolConfig,
          systemInstruction: this.systemInstruction,
          cachedContent:
            (i = this.cachedContent) === null || i === void 0 ? void 0 : i.name,
        },
        r,
      ),
      s,
    );
  }
  async generateContentStream(t, n = {}) {
    var i;
    const r = G1(t),
      s = Object.assign(Object.assign({}, this._requestOptions), n);
    return wf(
      this.apiKey,
      this.model,
      Object.assign(
        {
          generationConfig: this.generationConfig,
          safetySettings: this.safetySettings,
          tools: this.tools,
          toolConfig: this.toolConfig,
          systemInstruction: this.systemInstruction,
          cachedContent:
            (i = this.cachedContent) === null || i === void 0 ? void 0 : i.name,
        },
        r,
      ),
      s,
    );
  }
  startChat(t) {
    var n;
    return new cw(
      this.apiKey,
      this.model,
      Object.assign(
        {
          generationConfig: this.generationConfig,
          safetySettings: this.safetySettings,
          tools: this.tools,
          toolConfig: this.toolConfig,
          systemInstruction: this.systemInstruction,
          cachedContent:
            (n = this.cachedContent) === null || n === void 0 ? void 0 : n.name,
        },
        t,
      ),
      this._requestOptions,
    );
  }
  async countTokens(t, n = {}) {
    const i = sw(t, {
        model: this.model,
        generationConfig: this.generationConfig,
        safetySettings: this.safetySettings,
        tools: this.tools,
        toolConfig: this.toolConfig,
        systemInstruction: this.systemInstruction,
        cachedContent: this.cachedContent,
      }),
      r = Object.assign(Object.assign({}, this._requestOptions), n);
    return uw(this.apiKey, this.model, i, r);
  }
  async embedContent(t, n = {}) {
    const i = ow(t),
      r = Object.assign(Object.assign({}, this._requestOptions), n);
    return dw(this.apiKey, this.model, i, r);
  }
  async batchEmbedContents(t, n = {}) {
    const i = Object.assign(Object.assign({}, this._requestOptions), n);
    return pw(this.apiKey, this.model, t, i);
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hw {
  constructor(t) {
    this.apiKey = t;
  }
  getGenerativeModel(t, n) {
    if (!t.model)
      throw new je(
        "Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })",
      );
    return new Y1(this.apiKey, t, n);
  }
  getGenerativeModelFromCachedContent(t, n, i) {
    if (!t.name) throw new cn("Cached content must contain a `name` field.");
    if (!t.model) throw new cn("Cached content must contain a `model` field.");
    const r = ["model", "systemInstruction"];
    for (const o of r)
      if (n != null && n[o] && t[o] && (n == null ? void 0 : n[o]) !== t[o]) {
        if (o === "model") {
          const l = n.model.startsWith("models/")
              ? n.model.replace("models/", "")
              : n.model,
            c = t.model.startsWith("models/")
              ? t.model.replace("models/", "")
              : t.model;
          if (l === c) continue;
        }
        throw new cn(
          `Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${t[o]})`,
        );
      }
    const s = Object.assign(Object.assign({}, n), {
      model: t.model,
      tools: t.tools,
      toolConfig: t.toolConfig,
      systemInstruction: t.systemInstruction,
      cachedContent: t,
    });
    return new Y1(this.apiKey, s, i);
  }
}
function fw() {
  const [e, t] = E.useState(null),
    [n, i] = E.useState(!1),
    [r, s] = E.useState(null),
    [o, l] = E.useState(localStorage.getItem("gemini_api_key") || ""),
    [c, u] = E.useState(!1),
    d = (h) => {
      const w = h.target.files[0];
      w && (w.type === "application/pdf" || w.type === "text/plain")
        ? (t(w), s(null))
        : alert("Please upload a PDF or TXT file");
    },
    p = async () => {
      if (!e || !o) {
        u(!0);
        return;
      }
      i(!0);
      try {
        const h = await e.text(),
          k = new hw(o).getGenerativeModel({ model: "gemini-2.0-flash" }),
          S = `You are an expert resume reviewer and career coach. Analyze the following resume and provide detailed feedback:

Resume Content:
${h}

Please provide:
1. **Overall Score** (out of 10)
2. **Strengths** (3-5 bullet points)
3. **Areas for Improvement** (3-5 bullet points)
4. **ATS Compatibility** (score out of 10 and tips)
5. **Specific Recommendations** (actionable suggestions)

Format your response in markdown.`,
          m = (await k.generateContent(S)).response.text();
        s(m);
      } catch (h) {
        (console.error("Analysis error:", h),
          alert(
            "Error analyzing resume. Please check your API key and try again.",
          ));
      } finally {
        i(!1);
      }
    },
    f = (h) => {
      (l(h), localStorage.setItem("gemini_api_key", h), u(!1));
    };
  return a.jsxs("div", {
    className: "app-container",
    children: [
      a.jsx(gn, {
        title: "Resume Analyzer",
        subtitle: "Get AI-powered feedback on your resume",
        showBack: !0,
      }),
      c &&
        a.jsx("div", {
          className: "settings-modal-overlay",
          children: a.jsxs("div", {
            className: "settings-modal",
            children: [
              a.jsx("h2", {
                className: "page-title",
                style: { fontSize: 18, marginBottom: 16 },
                children: "Configure API Key",
              }),
              a.jsx("input", {
                type: "password",
                placeholder: "Paste Gemini API Key",
                className: "api-input",
                defaultValue: o,
                onChange: (h) => l(h.target.value),
              }),
              a.jsxs("div", {
                style: {
                  display: "flex",
                  gap: 12,
                  justifyContent: "flex-end",
                  marginTop: 16,
                },
                children: [
                  a.jsx(Fe, {
                    variant: "primary",
                    onClick: () => f(o),
                    children: "Save Key",
                  }),
                  a.jsx(Fe, {
                    variant: "ghost",
                    onClick: () => u(!1),
                    children: "Cancel",
                  }),
                ],
              }),
            ],
          }),
        }),
      a.jsxs("div", {
        className: "resume-analyzer-container",
        children: [
          a.jsx("div", {
            className: "upload-section",
            children: a.jsxs("div", {
              className: "upload-card",
              children: [
                a.jsx("div", {
                  className: "upload-icon",
                  children: a.jsx(Co, { size: 48 }),
                }),
                a.jsx("h3", { children: "Upload Your Resume" }),
                a.jsx("p", {
                  children:
                    "Upload your resume in PDF or TXT format for AI-powered analysis",
                }),
                a.jsx("input", {
                  type: "file",
                  id: "resume-upload",
                  accept: ".pdf,.txt",
                  onChange: d,
                  style: { display: "none" },
                }),
                a.jsxs("label", {
                  htmlFor: "resume-upload",
                  className: "upload-btn",
                  children: [a.jsx(_4, { size: 20 }), "Choose File"],
                }),
                e &&
                  a.jsxs("div", {
                    className: "file-info",
                    children: [
                      a.jsx(It, { size: 20, color: "#10b981" }),
                      a.jsx("span", { children: e.name }),
                    ],
                  }),
                e &&
                  a.jsx(Fe, {
                    variant: "primary",
                    onClick: p,
                    disabled: n,
                    style: { marginTop: 16 },
                    children: n
                      ? a.jsxs(a.Fragment, {
                          children: [
                            a.jsx(P0, { className: "animate-spin", size: 16 }),
                            "Analyzing...",
                          ],
                        })
                      : "Analyze Resume",
                  }),
              ],
            }),
          }),
          r &&
            a.jsx("div", {
              className: "analysis-section",
              children: a.jsxs("div", {
                className: "analysis-card",
                children: [
                  a.jsxs("div", {
                    className: "analysis-header",
                    children: [
                      a.jsx("h3", { children: "Analysis Results" }),
                      a.jsxs(Fe, {
                        variant: "outline",
                        size: "small",
                        children: [a.jsx(Ic, { size: 16 }), "Export"],
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "analysis-content",
                    children: a.jsx("div", {
                      dangerouslySetInnerHTML: {
                        __html: r
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                          .replace(/\n/g, "<br/>"),
                      },
                    }),
                  }),
                ],
              }),
            }),
          !r &&
            a.jsxs("div", {
              className: "tips-section",
              children: [
                a.jsx("h3", { children: "Resume Tips" }),
                a.jsxs("div", {
                  className: "tips-grid",
                  children: [
                    a.jsxs("div", {
                      className: "tip-card",
                      children: [
                        a.jsx(It, { size: 24, color: "#10b981" }),
                        a.jsx("h4", { children: "Clear Formatting" }),
                        a.jsx("p", {
                          children:
                            "Use consistent fonts, spacing, and bullet points",
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "tip-card",
                      children: [
                        a.jsx(It, { size: 24, color: "#10b981" }),
                        a.jsx("h4", { children: "Quantify Achievements" }),
                        a.jsx("p", {
                          children: "Use numbers and metrics to show impact",
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "tip-card",
                      children: [
                        a.jsx(It, { size: 24, color: "#10b981" }),
                        a.jsx("h4", { children: "Relevant Keywords" }),
                        a.jsx("p", {
                          children: "Include industry-specific terms for ATS",
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "tip-card",
                      children: [
                        a.jsx(It, { size: 24, color: "#10b981" }),
                        a.jsx("h4", { children: "Concise Content" }),
                        a.jsx("p", {
                          children: "Keep it to 1-2 pages maximum",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function mw() {
  const [e, t] = E.useState(() => {
      const g = localStorage.getItem("job_applications");
      return g ? JSON.parse(g) : [];
    }),
    [n, i] = E.useState(!1),
    [r, s] = E.useState(null),
    [o, l] = E.useState("all"),
    [c, u] = E.useState({
      company: "",
      position: "",
      location: "",
      salary: "",
      status: "Applied",
      appliedDate: new Date().toISOString().split("T")[0],
      notes: "",
    });
  E.useEffect(() => {
    localStorage.setItem("job_applications", JSON.stringify(e));
  }, [e]);
  const d = [
      "Applied",
      "Interview Scheduled",
      "Interview Completed",
      "Offer",
      "Rejected",
    ],
    p = {
      Applied: "#4facfe",
      "Interview Scheduled": "#ffa726",
      "Interview Completed": "#667eea",
      Offer: "#10b981",
      Rejected: "#f5576c",
    },
    f = (g) => {
      (g.preventDefault(),
        t(
          r
            ? e.map((C) => (C.id === r.id ? { ...c, id: C.id } : C))
            : [...e, { ...c, id: Date.now() }],
        ),
        h());
    },
    h = () => {
      (u({
        company: "",
        position: "",
        location: "",
        salary: "",
        status: "Applied",
        appliedDate: new Date().toISOString().split("T")[0],
        notes: "",
      }),
        s(null),
        i(!1));
    },
    w = (g) => {
      confirm("Are you sure you want to delete this application?") &&
        t(e.filter((C) => C.id !== g));
    },
    k = (g) => {
      (u(g), s(g), i(!0));
    },
    S = o === "all" ? e : e.filter((g) => g.status === o),
    m = {
      total: e.length,
      applied: e.filter((g) => g.status === "Applied").length,
      interviews: e.filter((g) => g.status.includes("Interview")).length,
      offers: e.filter((g) => g.status === "Offer").length,
    };
  return a.jsxs("div", {
    className: "app-container",
    children: [
      a.jsx(gn, {
        title: "Job Application Tracker",
        subtitle: "Track your job applications and interview progress",
        showBack: !0,
      }),
      a.jsxs("div", {
        className: "job-stats",
        children: [
          a.jsxs("div", {
            className: "stat-card-job",
            style: {
              background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            },
            children: [
              a.jsx("div", { className: "stat-value", children: m.total }),
              a.jsx("div", {
                className: "stat-label",
                children: "Total Applications",
              }),
            ],
          }),
          a.jsxs("div", {
            className: "stat-card-job",
            style: {
              background: "linear-gradient(135deg, #ffa726 0%, #fb8c00 100%)",
            },
            children: [
              a.jsx("div", { className: "stat-value", children: m.interviews }),
              a.jsx("div", { className: "stat-label", children: "Interviews" }),
            ],
          }),
          a.jsxs("div", {
            className: "stat-card-job",
            style: {
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            },
            children: [
              a.jsx("div", { className: "stat-value", children: m.offers }),
              a.jsx("div", { className: "stat-label", children: "Offers" }),
            ],
          }),
        ],
      }),
      a.jsxs("div", {
        className: "job-actions",
        children: [
          a.jsxs(Fe, {
            variant: "primary",
            onClick: () => i(!0),
            children: [a.jsx(S4, { size: 16 }), " Add Application"],
          }),
          a.jsxs("div", {
            className: "filter-buttons",
            children: [
              a.jsx("button", {
                className: `filter-btn ${o === "all" ? "active" : ""}`,
                onClick: () => l("all"),
                children: "All",
              }),
              d.map((g) =>
                a.jsx(
                  "button",
                  {
                    className: `filter-btn ${o === g ? "active" : ""}`,
                    onClick: () => l(g),
                    children: g,
                  },
                  g,
                ),
              ),
            ],
          }),
        ],
      }),
      a.jsx("div", {
        className: "job-list",
        children:
          S.length === 0
            ? a.jsxs("div", {
                className: "empty-state",
                children: [
                  a.jsx(N0, { size: 64, color: "var(--text-muted)" }),
                  a.jsx("h3", { children: "No applications yet" }),
                  a.jsx("p", {
                    children:
                      'Start tracking your job applications by clicking "Add Application"',
                  }),
                ],
              })
            : S.map((g) =>
                a.jsxs(
                  "div",
                  {
                    className: "job-card",
                    children: [
                      a.jsxs("div", {
                        className: "job-card-header",
                        children: [
                          a.jsxs("div", {
                            children: [
                              a.jsx("h3", { children: g.position }),
                              a.jsx("p", {
                                className: "company-name",
                                children: g.company,
                              }),
                            ],
                          }),
                          a.jsx("span", {
                            className: "status-badge",
                            style: { background: p[g.status] },
                            children: g.status,
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "job-card-details",
                        children: [
                          g.location &&
                            a.jsxs("div", {
                              className: "detail-item",
                              children: [
                                a.jsx(i4, { size: 14 }),
                                a.jsx("span", { children: g.location }),
                              ],
                            }),
                          g.salary &&
                            a.jsxs("div", {
                              className: "detail-item",
                              children: [
                                a.jsx(U3, { size: 14 }),
                                a.jsx("span", { children: g.salary }),
                              ],
                            }),
                          a.jsxs("div", {
                            className: "detail-item",
                            children: [
                              a.jsx(T0, { size: 14 }),
                              a.jsxs("span", {
                                children: [
                                  "Applied: ",
                                  new Date(g.appliedDate).toLocaleDateString(),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      g.notes &&
                        a.jsxs("div", {
                          className: "job-notes",
                          children: [
                            a.jsx("strong", { children: "Notes:" }),
                            " ",
                            g.notes,
                          ],
                        }),
                      a.jsxs("div", {
                        className: "job-card-actions",
                        children: [
                          a.jsxs("button", {
                            className: "action-btn",
                            onClick: () => k(g),
                            children: [a.jsx(v4, { size: 16 }), " Edit"],
                          }),
                          a.jsxs("button", {
                            className: "action-btn delete",
                            onClick: () => w(g.id),
                            children: [a.jsx(D4, { size: 16 }), " Delete"],
                          }),
                        ],
                      }),
                    ],
                  },
                  g.id,
                ),
              ),
      }),
      n &&
        a.jsx("div", {
          className: "modal-overlay",
          onClick: h,
          children: a.jsxs("div", {
            className: "modal-content",
            onClick: (g) => g.stopPropagation(),
            children: [
              a.jsx("h2", {
                children: r ? "Edit Application" : "Add New Application",
              }),
              a.jsxs("form", {
                onSubmit: f,
                children: [
                  a.jsxs("div", {
                    className: "form-grid",
                    children: [
                      a.jsxs("div", {
                        className: "form-group",
                        children: [
                          a.jsx("label", { children: "Company *" }),
                          a.jsx("input", {
                            type: "text",
                            required: !0,
                            value: c.company,
                            onChange: (g) =>
                              u({ ...c, company: g.target.value }),
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "form-group",
                        children: [
                          a.jsx("label", { children: "Position *" }),
                          a.jsx("input", {
                            type: "text",
                            required: !0,
                            value: c.position,
                            onChange: (g) =>
                              u({ ...c, position: g.target.value }),
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "form-group",
                        children: [
                          a.jsx("label", { children: "Location" }),
                          a.jsx("input", {
                            type: "text",
                            value: c.location,
                            onChange: (g) =>
                              u({ ...c, location: g.target.value }),
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "form-group",
                        children: [
                          a.jsx("label", { children: "Salary Range" }),
                          a.jsx("input", {
                            type: "text",
                            placeholder: "e.g., $80k-$100k",
                            value: c.salary,
                            onChange: (g) =>
                              u({ ...c, salary: g.target.value }),
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "form-group",
                        children: [
                          a.jsx("label", { children: "Status *" }),
                          a.jsx("select", {
                            value: c.status,
                            onChange: (g) =>
                              u({ ...c, status: g.target.value }),
                            children: d.map((g) =>
                              a.jsx("option", { value: g, children: g }, g),
                            ),
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "form-group",
                        children: [
                          a.jsx("label", { children: "Applied Date *" }),
                          a.jsx("input", {
                            type: "date",
                            required: !0,
                            value: c.appliedDate,
                            onChange: (g) =>
                              u({ ...c, appliedDate: g.target.value }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "form-group",
                    children: [
                      a.jsx("label", { children: "Notes" }),
                      a.jsx("textarea", {
                        rows: 3,
                        value: c.notes,
                        onChange: (g) => u({ ...c, notes: g.target.value }),
                        placeholder: "Add any notes about this application...",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "modal-actions",
                    children: [
                      a.jsxs(Fe, {
                        type: "submit",
                        variant: "primary",
                        children: [r ? "Update" : "Add", " Application"],
                      }),
                      a.jsx(Fe, {
                        type: "button",
                        variant: "ghost",
                        onClick: h,
                        children: "Cancel",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
const ka = {
  "Frontend Developer": {
    icon: "⚛️",
    color: "#61dafb",
    technical: [
      "Explain the Virtual DOM and how React uses it for efficient rendering.",
      "What is the difference between controlled and uncontrolled components in React?",
      "Explain closures in JavaScript with a practical example.",
      "What are React Hooks? Explain useState, useEffect, and useContext.",
      "How does event delegation work in JavaScript?",
      "Explain the difference between == and === in JavaScript.",
      "What is CSS specificity and how is it calculated?",
      "Describe different ways to center a div in CSS.",
      "What are promises in JavaScript? Explain async/await.",
      "Explain the concept of hoisting in JavaScript.",
      "What is the box model in CSS?",
      "Describe different methods of state management in React (Context API, Redux, Zustand).",
      "What are Higher Order Components (HOC) in React?",
      "Explain debouncing and throttling with use cases.",
      "How would you optimize the performance of a React application?",
    ],
    behavioral: [
      "Describe a challenging UI/UX problem you solved.",
      "How do you ensure your code is accessible?",
      "Tell me about a time you had to refactor legacy frontend code.",
      "How do you stay updated with the latest frontend technologies?",
      "Describe your approach to responsive design.",
      "How do you handle browser compatibility issues?",
    ],
    coding: [
      "Implement a debounce function from scratch.",
      "Create a custom React hook for fetching data with loading states.",
      "Build a simple todo list with add, delete, and toggle functionality.",
      "Implement infinite scrolling in React.",
      "Create a component that renders nested comments (like Reddit).",
    ],
  },
  "Backend Developer": {
    icon: "⚙️",
    color: "#68a063",
    technical: [
      "Explain the difference between SQL and NoSQL databases.",
      "What is RESTful API? What are its key principles?",
      "Describe how authentication works (JWT, OAuth, Session-based).",
      "What is the N+1 query problem and how do you solve it?",
      "Explain ACID properties in databases.",
      "What are database indexes and when should you use them?",
      "Describe microservices architecture and its advantages.",
      "What is a message queue? Give examples of use cases.",
      "Explain the CAP theorem.",
      "What are the different types of database relationships?",
      "Describe caching strategies (Redis, Memcached).",
      "What is API rate limiting and how do you implement it?",
      "Explain vertical vs horizontal scaling.",
      "What are database transactions and isolation levels?",
      "Describe different HTTP methods and their idempotency.",
    ],
    behavioral: [
      "Describe a time you optimized database queries for better performance.",
      "How do you handle production incidents?",
      "Tell me about a complex system you designed from scratch.",
      "How do you ensure API security?",
      "Describe your testing strategy for backend services.",
      "How do you handle backward compatibility in APIs?",
    ],
    coding: [
      "Design a URL shortening service like bit.ly.",
      "Implement rate limiting for an API.",
      "Write a function to detect cycles in a linked list.",
      "Design a basic authentication system with JWT.",
      "Implement a simple caching mechanism with TTL.",
    ],
  },
  "Full Stack Developer": {
    icon: "🚀",
    color: "#f39c12",
    technical: [
      "How would you design a scalable web application from scratch?",
      "Explain the request-response lifecycle in a web application.",
      "What is CORS and how do you handle it?",
      "Describe your experience with CI/CD pipelines.",
      "How do you handle errors and logging in a full-stack application?",
      "Explain WebSockets and when you would use them.",
      "What is server-side rendering (SSR) vs client-side rendering (CSR)?",
      "Describe your approach to API versioning.",
      "How do you handle file uploads in a web application?",
      "Explain different deployment strategies (blue-green, canary, rolling).",
      "What are environment variables and how do you manage them?",
      "Describe your experience with Docker and containerization.",
      "How do you implement real-time features in web applications?",
      "Explain the concept of middleware in backend frameworks.",
      "What security best practices do you follow for web applications?",
    ],
    behavioral: [
      "Describe a full-stack project you built end-to-end.",
      "How do you prioritize between frontend and backend tasks?",
      "Tell me about a time you had to learn a new technology quickly.",
      "How do you ensure consistency between frontend and backend?",
      "Describe your debugging process for full-stack issues.",
      "How do you handle technical debt in a codebase?",
    ],
    coding: [
      "Build a simple chat application with real-time messaging.",
      "Implement user authentication with email verification.",
      "Create a REST API with CRUD operations and connect it to a React frontend.",
      "Design a file upload system with progress tracking.",
      "Implement pagination for a large dataset on both frontend and backend.",
    ],
  },
  "Data Analyst": {
    icon: "📊",
    color: "#3498db",
    technical: [
      "Explain the difference between WHERE and HAVING clauses in SQL.",
      "What are window functions in SQL? Give examples.",
      "Describe different types of JOINs and when to use them.",
      "What is a CTE (Common Table Expression) and why use it?",
      "Explain the difference between UNION and UNION ALL.",
      "What are aggregate functions? Name at least 5.",
      "Describe your experience with data visualization tools (Tableau, Power BI).",
      "How do you handle missing data in a dataset?",
      "Explain A/B testing and how to analyze results.",
      "What is cohort analysis and when would you use it?",
      "Describe different types of data distributions.",
      "What is the difference between correlation and causation?",
      "Explain different sampling techniques.",
      "How do you identify and handle outliers in data?",
      "What are key performance indicators (KPIs) you have worked with?",
    ],
    behavioral: [
      "Describe a complex data analysis project you completed.",
      "How do you communicate technical findings to non-technical stakeholders?",
      "Tell me about a time your analysis led to a business decision.",
      "How do you ensure data quality and accuracy?",
      "Describe your process for exploring a new dataset.",
      "How do you prioritize which metrics to track?",
    ],
    coding: [
      "Write SQL query to find the second highest salary.",
      "Calculate month-over-month growth rate from a sales table.",
      "Find the top 5 customers by revenue with their purchase counts.",
      "Write a query to detect duplicate records.",
      "Calculate running total using window functions.",
    ],
  },
  "DevOps Engineer": {
    icon: "🔧",
    color: "#e74c3c",
    technical: [
      "Explain the CI/CD pipeline and its components.",
      "What is Infrastructure as Code (IaC)? Name tools you have used.",
      "Describe Docker containers and their benefits.",
      "What is Kubernetes and why is it used?",
      "Explain the difference between horizontal and vertical scaling.",
      "What are the key principles of the 12-factor app?",
      "Describe monitoring and logging strategies.",
      "What is blue-green deployment?",
      "Explain the concept of immutable infrastructure.",
      "What are the benefits of using configuration management tools?",
      "Describe your experience with cloud platforms (AWS, Azure, GCP).",
      "What is a load balancer and how does it work?",
      "Explain the concept of service mesh.",
      "What are secrets management tools and why are they important?",
      "Describe different backup and disaster recovery strategies.",
    ],
    behavioral: [
      "Describe a time you improved deployment processes.",
      "How do you handle production outages?",
      "Tell me about automating a manual process.",
      "How do you ensure system security?",
      "Describe your approach to capacity planning.",
      "How do you balance speed and stability in deployments?",
    ],
    coding: [
      "Write a bash script to monitor disk usage and send alerts.",
      "Create a Dockerfile for a Node.js application.",
      "Write a script to automate backup of a database.",
      "Implement health checks for a web service.",
      "Create a basic CI/CD pipeline configuration.",
    ],
  },
};
function gw() {
  const [e, t] = E.useState(null),
    [n, i] = E.useState("technical"),
    [r, s] = E.useState(null),
    o = Object.keys(ka),
    l = (d) => {
      (t(d), i("technical"), s(null));
    },
    c = e ? ka[e] : null,
    u = c ? c[n] : [];
  return a.jsxs("div", {
    className: "app-container",
    children: [
      a.jsx(gn, {
        title: "Interview Question Bank",
        subtitle:
          "Comprehensive interview questions organized by role and category",
        showBack: !0,
      }),
      e
        ? a.jsxs("div", {
            children: [
              a.jsxs("div", {
                className: "selected-role-header",
                children: [
                  a.jsx("button", {
                    className: "back-to-roles",
                    onClick: () => t(null),
                    children: "← Back to Roles",
                  }),
                  a.jsxs("div", {
                    className: "role-title-section",
                    children: [
                      a.jsx("span", {
                        className: "role-icon-large",
                        style: { background: c.color },
                        children: c.icon,
                      }),
                      a.jsxs("div", {
                        children: [
                          a.jsx("h2", { children: e }),
                          a.jsxs("p", {
                            children: [
                              c.technical.length +
                                c.behavioral.length +
                                c.coding.length,
                              " Questions Available",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "category-tabs",
                children: [
                  a.jsxs("button", {
                    className: `category-tab ${n === "technical" ? "active" : ""}`,
                    onClick: () => {
                      (i("technical"), s(null));
                    },
                    children: [
                      a.jsx(Pn, { size: 18 }),
                      "Technical (",
                      c.technical.length,
                      ")",
                    ],
                  }),
                  a.jsxs("button", {
                    className: `category-tab ${n === "behavioral" ? "active" : ""}`,
                    onClick: () => {
                      (i("behavioral"), s(null));
                    },
                    children: [
                      a.jsx(Er, { size: 18 }),
                      "Behavioral (",
                      c.behavioral.length,
                      ")",
                    ],
                  }),
                  a.jsxs("button", {
                    className: `category-tab ${n === "coding" ? "active" : ""}`,
                    onClick: () => {
                      (i("coding"), s(null));
                    },
                    children: [
                      a.jsx(H3, { size: 18 }),
                      "Coding (",
                      c.coding.length,
                      ")",
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "questions-container",
                children: [
                  a.jsx("div", {
                    className: "questions-list",
                    children: u.map((d, p) =>
                      a.jsxs(
                        "div",
                        {
                          className: "question-card",
                          children: [
                            a.jsxs("div", {
                              className: "question-header-row",
                              children: [
                                a.jsxs("div", {
                                  className: "question-number",
                                  children: ["Q", p + 1],
                                }),
                                a.jsx("div", {
                                  className: "question-text",
                                  children: d,
                                }),
                                a.jsx("button", {
                                  className: "expand-btn",
                                  onClick: () => s(r === p ? null : p),
                                  children: r === p ? "−" : "+",
                                }),
                              ],
                            }),
                            r === p &&
                              a.jsxs("div", {
                                className: "question-expanded",
                                children: [
                                  a.jsxs("div", {
                                    className: "tip-section",
                                    children: [
                                      a.jsx(I3, { size: 16 }),
                                      a.jsxs("div", {
                                        children: [
                                          a.jsx("strong", {
                                            children: "Tips for answering:",
                                          }),
                                          a.jsxs("ul", {
                                            children: [
                                              a.jsx("li", {
                                                children:
                                                  "Take a moment to think before answering",
                                              }),
                                              a.jsx("li", {
                                                children:
                                                  "Provide specific examples from your experience",
                                              }),
                                              a.jsx("li", {
                                                children:
                                                  "Structure your answer clearly (STAR method for behavioral)",
                                              }),
                                              a.jsx("li", {
                                                children:
                                                  "Be honest about what you know and don't know",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  a.jsx("div", {
                                    className: "practice-actions",
                                    children: a.jsxs("button", {
                                      className: "practice-btn",
                                      children: [
                                        a.jsx(It, { size: 16 }),
                                        "Mark as Practiced",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        },
                        p,
                      ),
                    ),
                  }),
                  a.jsxs("div", {
                    className: "questions-sidebar-tips",
                    children: [
                      a.jsxs("div", {
                        className: "tip-card",
                        children: [
                          a.jsx("h4", { children: "💡 Preparation Tips" }),
                          a.jsxs("ul", {
                            children: [
                              a.jsx("li", {
                                children:
                                  "Practice explaining concepts out loud",
                              }),
                              a.jsx("li", {
                                children:
                                  "Use the STAR method for behavioral questions",
                              }),
                              a.jsx("li", {
                                children:
                                  "Prepare real examples from your experience",
                              }),
                              a.jsx("li", {
                                children: "Review these questions daily",
                              }),
                              a.jsx("li", {
                                children: "Mock interview with peers",
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "tip-card",
                        children: [
                          a.jsx("h4", { children: "📚 Study Resources" }),
                          a.jsxs("p", {
                            children: [
                              "Check out the ",
                              a.jsx("strong", { children: "Notes" }),
                              " section for detailed study materials on each topic.",
                            ],
                          }),
                          a.jsxs("p", {
                            children: [
                              "Use the ",
                              a.jsx("strong", { children: "Mock Interview" }),
                              " feature to practice these questions with AI.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : a.jsxs("div", {
            children: [
              a.jsxs("div", {
                className: "section-header",
                style: { marginBottom: 32, textAlign: "center" },
                children: [
                  a.jsx("h2", {
                    style: { fontSize: 24, marginBottom: 12 },
                    children: "Select Your Target Role",
                  }),
                  a.jsx("p", {
                    style: { color: "var(--text-muted)", fontSize: 15 },
                    children:
                      "Choose a role to view curated interview questions",
                  }),
                ],
              }),
              a.jsx("div", {
                className: "role-selection-grid",
                children: o.map((d) => {
                  const p = ka[d],
                    f =
                      p.technical.length +
                      p.behavioral.length +
                      p.coding.length;
                  return a.jsxs(
                    "button",
                    {
                      className: "role-card",
                      onClick: () => l(d),
                      style: { "--role-color": p.color },
                      children: [
                        a.jsx("div", {
                          className: "role-icon",
                          style: { background: p.color },
                          children: p.icon,
                        }),
                        a.jsx("h3", { children: d }),
                        a.jsxs("div", {
                          className: "role-stats",
                          children: [
                            a.jsxs("span", {
                              className: "badge badge-blue",
                              children: [p.technical.length, " Technical"],
                            }),
                            a.jsxs("span", {
                              className: "badge badge-purple",
                              children: [p.behavioral.length, " Behavioral"],
                            }),
                            a.jsxs("span", {
                              className: "badge badge-green",
                              children: [p.coding.length, " Coding"],
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "role-total",
                          children: [f, " Questions Total"],
                        }),
                        a.jsx(P3, { className: "role-arrow", size: 20 }),
                      ],
                    },
                    d,
                  );
                }),
              }),
            ],
          }),
    ],
  });
}
const X1 = VITE_YOUTUBE_API_KEY,
  Z1 = "https://www.googleapis.com/youtube/v3";
async function yw(e, t = 20) {
  var n;
  if (!e || e.trim() === "") throw new Error("Search query cannot be empty");
  try {
    const i = new URLSearchParams({
        part: "snippet",
        q: e,
        type: "video",
        maxResults: t,
        order: "relevance",
        key: X1,
        videoEmbeddable: "true",
        safeSearch: "moderate",
      }),
      r = await fetch(`${Z1}/search?${i.toString()}`);
    if (!r.ok) {
      const p = await r.json();
      throw new Error(
        ((n = p.error) == null ? void 0 : n.message) ||
          "Failed to fetch videos from YouTube",
      );
    }
    const s = await r.json();
    if (!s.items || s.items.length === 0) return [];
    const o = s.items.map((p) => p.id.videoId).join(","),
      l = new URLSearchParams({
        part: "statistics,contentDetails",
        id: o,
        key: X1,
      }),
      c = await fetch(`${Z1}/videos?${l.toString()}`),
      u = c.ok ? await c.json() : null;
    return s.items.map((p, f) => {
      var k, S, y, m, g, C;
      const h =
          ((S = (k = u == null ? void 0 : u.items) == null ? void 0 : k[f]) ==
          null
            ? void 0
            : S.statistics) || {},
        w =
          ((m = (y = u == null ? void 0 : u.items) == null ? void 0 : y[f]) ==
          null
            ? void 0
            : m.contentDetails) || {};
      return {
        id: p.id.videoId,
        title: p.snippet.title,
        description: p.snippet.description,
        thumbnail:
          ((g = p.snippet.thumbnails.high) == null ? void 0 : g.url) ||
          ((C = p.snippet.thumbnails.medium) == null ? void 0 : C.url),
        channelTitle: p.snippet.channelTitle,
        publishedAt: p.snippet.publishedAt,
        viewCount: h.viewCount || "0",
        likeCount: h.likeCount || "0",
        duration: w.duration || "N/A",
        url: `https://www.youtube.com/watch?v=${p.id.videoId}`,
      };
    });
  } catch (i) {
    throw (console.error("YouTube API Error:", i), i);
  }
}
function vw(e) {
  const t = parseInt(e, 10);
  return isNaN(t)
    ? "0 views"
    : t >= 1e6
      ? `${(t / 1e6).toFixed(1)}M views`
      : t >= 1e3
        ? `${(t / 1e3).toFixed(1)}K views`
        : `${t} views`;
}
function ww(e) {
  const t = new Date(e),
    i = new Date() - t,
    r = Math.floor(i / (1e3 * 60 * 60 * 24));
  return r === 0
    ? "Today"
    : r === 1
      ? "Yesterday"
      : r < 7
        ? `${r} days ago`
        : r < 30
          ? `${Math.floor(r / 7)} weeks ago`
          : r < 365
            ? `${Math.floor(r / 30)} months ago`
            : `${Math.floor(r / 365)} years ago`;
}
function xw(e) {
  if (!e || e === "N/A") return "N/A";
  const t = e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!t) return "N/A";
  const n = (t[1] || "").replace("H", ""),
    i = (t[2] || "").replace("M", ""),
    r = (t[3] || "").replace("S", "");
  let s = "";
  return (
    n && (s += `${n}:`),
    i ? (s += n ? i.padStart(2, "0") : i) : (s += "0"),
    (s += ":"),
    (s += r ? r.padStart(2, "0") : "00"),
    s
  );
}
function kw() {
  const [e, t] = E.useState(""),
    [n, i] = E.useState([]),
    [r, s] = E.useState(!1),
    [o, l] = E.useState(null),
    [c, u] = E.useState(!1),
    d = async (f) => {
      if ((f.preventDefault(), !e.trim())) {
        l("Please enter a skill or course name");
        return;
      }
      (s(!0), l(null), u(!0));
      try {
        const h = await yw(e, 20);
        (i(h),
          h.length === 0 && l("No videos found. Try a different search term."));
      } catch (h) {
        (l(h.message || "Failed to fetch videos. Please try again."), i([]));
      } finally {
        s(!1);
      }
    },
    p = (f) => {
      window.open(f, "_blank", "noopener,noreferrer");
    };
  return a.jsxs("div", {
    className: "video-feed-page",
    children: [
      a.jsx(Rr, {}),
      a.jsxs("div", {
        className: "video-feed-container",
        children: [
          a.jsx("div", {
            className: "video-feed-header",
            children: a.jsxs("div", {
              className: "header-content",
              children: [
                a.jsx("div", {
                  className: "header-icon",
                  children: a.jsx(M0, { size: 32 }),
                }),
                a.jsxs("div", {
                  className: "header-text",
                  children: [
                    a.jsx("h1", { children: "Video Learning Hub" }),
                    a.jsx("p", {
                      children:
                        "Discover top educational videos for any skill or course",
                    }),
                  ],
                }),
              ],
            }),
          }),
          a.jsx("div", {
            className: "search-section",
            children: a.jsxs("form", {
              onSubmit: d,
              className: "search-form",
              children: [
                a.jsxs("div", {
                  className: "search-input-wrapper",
                  children: [
                    a.jsx(xl, { className: "search-icon", size: 20 }),
                    a.jsx("input", {
                      type: "text",
                      className: "search-input",
                      placeholder:
                        "Search for skills, courses, or topics (e.g., React Tutorial, Python Programming)",
                      value: e,
                      onChange: (f) => t(f.target.value),
                      disabled: r,
                    }),
                  ],
                }),
                a.jsx("button", {
                  type: "submit",
                  className: "search-button",
                  disabled: r,
                  children: r
                    ? a.jsxs(a.Fragment, {
                        children: [
                          a.jsx(xd, { className: "spinner", size: 20 }),
                          "Searching...",
                        ],
                      })
                    : a.jsxs(a.Fragment, {
                        children: [a.jsx(xl, { size: 20 }), "Search"],
                      }),
                }),
              ],
            }),
          }),
          o &&
            a.jsx("div", {
              className: "error-message",
              children: a.jsx("p", { children: o }),
            }),
          r &&
            a.jsxs("div", {
              className: "loading-state",
              children: [
                a.jsx(xd, { className: "spinner-large", size: 48 }),
                a.jsx("p", { children: "Finding the best videos for you..." }),
              ],
            }),
          !c &&
            !r &&
            a.jsxs("div", {
              className: "empty-state",
              children: [
                a.jsx("div", {
                  className: "empty-icon",
                  children: a.jsx(Dc, { size: 64 }),
                }),
                a.jsx("h2", { children: "Start Your Learning Journey" }),
                a.jsx("p", {
                  children:
                    "Search for any skill or course to discover curated video tutorials",
                }),
                a.jsxs("div", {
                  className: "suggested-searches",
                  children: [
                    a.jsx("p", {
                      className: "suggested-label",
                      children: "Popular searches:",
                    }),
                    a.jsx("div", {
                      className: "suggested-tags",
                      children: [
                        "React Tutorial",
                        "Python Programming",
                        "Machine Learning",
                        "Web Development",
                        "Data Structures",
                      ].map((f) =>
                        a.jsx(
                          "button",
                          {
                            className: "suggested-tag",
                            onClick: () => {
                              (t(f),
                                setTimeout(() => {
                                  const h =
                                    document.querySelector(".search-form");
                                  h == null ||
                                    h.dispatchEvent(
                                      new Event("submit", {
                                        cancelable: !0,
                                        bubbles: !0,
                                      }),
                                    );
                                }, 100));
                            },
                            children: f,
                          },
                          f,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          !r &&
            n.length > 0 &&
            a.jsxs("div", {
              className: "video-results",
              children: [
                a.jsxs("div", {
                  className: "results-header",
                  children: [
                    a.jsxs("h2", { children: ["Top ", n.length, " Results"] }),
                    a.jsxs("p", { children: ['for "', e, '"'] }),
                  ],
                }),
                a.jsx("div", {
                  className: "videos-grid",
                  children: n.map((f) =>
                    a.jsxs(
                      "div",
                      {
                        className: "video-card",
                        onClick: () => p(f.url),
                        children: [
                          a.jsxs("div", {
                            className: "video-thumbnail",
                            children: [
                              a.jsx("img", { src: f.thumbnail, alt: f.title }),
                              a.jsx("div", {
                                className: "play-overlay",
                                children: a.jsx(x4, {
                                  size: 48,
                                  fill: "white",
                                }),
                              }),
                              f.duration !== "N/A" &&
                                a.jsx("div", {
                                  className: "video-duration",
                                  children: xw(f.duration),
                                }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "video-info",
                            children: [
                              a.jsx("h3", {
                                className: "video-title",
                                children: f.title,
                              }),
                              a.jsx("div", {
                                className: "video-channel",
                                children: a.jsx("span", {
                                  children: f.channelTitle,
                                }),
                              }),
                              a.jsxs("div", {
                                className: "video-meta",
                                children: [
                                  a.jsx("span", {
                                    className: "video-views",
                                    children: vw(f.viewCount),
                                  }),
                                  a.jsx("span", {
                                    className: "video-separator",
                                    children: "•",
                                  }),
                                  a.jsx("span", {
                                    className: "video-date",
                                    children: ww(f.publishedAt),
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                className: "video-action",
                                children: [
                                  a.jsx(En, { size: 16 }),
                                  a.jsx("span", {
                                    children: "Watch on YouTube",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      f.id,
                    ),
                  ),
                }),
              ],
            }),
          !r &&
            c &&
            n.length === 0 &&
            !o &&
            a.jsxs("div", {
              className: "no-results-state",
              children: [
                a.jsx("h2", { children: "No videos found" }),
                a.jsx("p", {
                  children: "Try searching with different keywords",
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function Sw({ theme: e, toggleTheme: t }) {
  const i = bi().pathname === "/";
  return a.jsxs("div", {
    className: "app",
    children: [
      !i && a.jsx(Q4, { theme: e, toggleTheme: t }),
      a.jsx("main", {
        className: i ? "" : "main-content",
        children: a.jsxs(Yg, {
          children: [
            a.jsx(ze, { path: "/", element: a.jsx(K4, {}) }),
            a.jsx(ze, { path: "/dashboard", element: a.jsx(J4, {}) }),
            a.jsx(ze, { path: "/notes", element: a.jsx(ey, {}) }),
            a.jsx(ze, { path: "/chat", element: a.jsx(Fv, {}) }),
            a.jsx(ze, { path: "/quiz", element: a.jsx(Wv, {}) }),
            a.jsx(ze, { path: "/study-plan", element: a.jsx(Vv, {}) }),
            a.jsx(ze, { path: "/topic/:topicId", element: a.jsx(Gv, {}) }),
            a.jsx(ze, { path: "/interview", element: a.jsx(Kv, {}) }),
            a.jsx(ze, { path: "/roadmap", element: a.jsx(z7, {}) }),
            a.jsx(ze, { path: "/resume-analyzer", element: a.jsx(fw, {}) }),
            a.jsx(ze, { path: "/job-tracker", element: a.jsx(mw, {}) }),
            a.jsx(ze, { path: "/coding-practice", element: a.jsx(gw, {}) }),
            a.jsx(ze, { path: "/video-feed", element: a.jsx(kw, {}) }),
          ],
        }),
      }),
    ],
  });
}
function Cw() {
  const [e, t] = E.useState(localStorage.getItem("theme") || "light");
  E.useEffect(() => {
    (document.documentElement.setAttribute("data-theme", e),
      localStorage.setItem("theme", e));
  }, [e]);
  const n = () => {
    t((i) => (i === "light" ? "dark" : "light"));
  };
  return a.jsx(r3, {
    future: { v7_startTransition: !0, v7_relativeSplatPath: !0 },
    children: a.jsx(Sw, { theme: e, toggleTheme: n }),
  });
}
Sa.createRoot(document.getElementById("root")).render(
  a.jsx(bt.StrictMode, { children: a.jsx(Cw, {}) }),
);
