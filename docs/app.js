System.register(["single-spa"], function(e) {
  var t;
  return {
    setters: [
      function(e) {
        t = e;
      }
    ],
    execute: function() {
      e(
        (function(e) {
          var t = {};
          function r(n) {
            if (t[n]) return t[n].exports;
            var o = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function(e, t, n) {
              r.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function(e, t) {
              if ((1 & t && (e = r(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var n = Object.create(null);
              if (
                (r.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  r.d(
                    n,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return n;
            }),
            (r.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return r.d(t, "a", t), t;
            }),
            (r.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 5))
          );
        })([
          function(e, r) {
            e.exports = t;
          },
          function(e, t, r) {
            "use strict";
            (function(e, n) {
              var o,
                i = r(2);
              o =
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : void 0 !== e
                  ? e
                  : n;
              var u = Object(i.a)(o);
              t.a = u;
            }.call(this, r(3), r(4)(e)));
          },
          function(e, t, r) {
            "use strict";
            function n(e) {
              var t,
                r = e.Symbol;
              return (
                "function" == typeof r
                  ? r.observable
                    ? (t = r.observable)
                    : ((t = r("observable")), (r.observable = t))
                  : (t = "@@observable"),
                t
              );
            }
            r.d(t, "a", function() {
              return n;
            });
          },
          function(e, t) {
            var r;
            r = (function() {
              return this;
            })();
            try {
              r = r || new Function("return this")();
            } catch (e) {
              "object" == typeof window && (r = window);
            }
            e.exports = r;
          },
          function(e, t) {
            e.exports = function(e) {
              if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []),
                  Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                      return t.l;
                    }
                  }),
                  Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                      return t.i;
                    }
                  }),
                  Object.defineProperty(t, "exports", { enumerable: !0 }),
                  (t.webpackPolyfill = 1);
              }
              return t;
            };
          },
          function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(0);
            function o(e) {
              return !0;
            }
            var i = r(1),
              u = function() {
                return Math.random()
                  .toString(36)
                  .substring(7)
                  .split("")
                  .join(".");
              },
              a = {
                INIT: "@@redux/INIT" + u(),
                REPLACE: "@@redux/REPLACE" + u(),
                PROBE_UNKNOWN_ACTION: function() {
                  return "@@redux/PROBE_UNKNOWN_ACTION" + u();
                }
              };
            function c(e) {
              if ("object" != typeof e || null === e) return !1;
              for (var t = e; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
              return Object.getPrototypeOf(e) === t;
            }
            function f(e, t) {
              var r = t && t.type;
              return (
                "Given " +
                ((r && 'action "' + String(r) + '"') || "an action") +
                ', reducer "' +
                e +
                '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
              );
            }
            function s(e, t) {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                  (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  r.push.apply(r, n);
              }
              return r;
            }
            function l(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? s(Object(r), !0).forEach(function(t) {
                      d(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : s(Object(r)).forEach(function(t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
              }
              return e;
            }
            function d(e, t, r) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (e[t] = r),
                e
              );
            }
            var p = {
              year: new Date().getFullYear(),
              month: new Date().getMonth() + 1
            };
            function b(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            var y = {
              store: (function e(t, r, n) {
                var o;
                if (
                  ("function" == typeof r && "function" == typeof n) ||
                  ("function" == typeof n && "function" == typeof arguments[3])
                )
                  throw new Error(
                    "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
                  );
                if (
                  ("function" == typeof r &&
                    void 0 === n &&
                    ((n = r), (r = void 0)),
                  void 0 !== n)
                ) {
                  if ("function" != typeof n)
                    throw new Error("Expected the enhancer to be a function.");
                  return n(e)(t, r);
                }
                if ("function" != typeof t)
                  throw new Error("Expected the reducer to be a function.");
                var u = t,
                  f = r,
                  s = [],
                  l = s,
                  d = !1;
                function p() {
                  l === s && (l = s.slice());
                }
                function b() {
                  if (d)
                    throw new Error(
                      "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
                    );
                  return f;
                }
                function y(e) {
                  if ("function" != typeof e)
                    throw new Error("Expected the listener to be a function.");
                  if (d)
                    throw new Error(
                      "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                    );
                  var t = !0;
                  return (
                    p(),
                    l.push(e),
                    function() {
                      if (t) {
                        if (d)
                          throw new Error(
                            "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                          );
                        (t = !1), p();
                        var r = l.indexOf(e);
                        l.splice(r, 1), (s = null);
                      }
                    }
                  );
                }
                function h(e) {
                  if (!c(e))
                    throw new Error(
                      "Actions must be plain objects. Use custom middleware for async actions."
                    );
                  if (void 0 === e.type)
                    throw new Error(
                      'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                    );
                  if (d) throw new Error("Reducers may not dispatch actions.");
                  try {
                    (d = !0), (f = u(f, e));
                  } finally {
                    d = !1;
                  }
                  for (var t = (s = l), r = 0; r < t.length; r++) {
                    (0, t[r])();
                  }
                  return e;
                }
                function v(e) {
                  if ("function" != typeof e)
                    throw new Error(
                      "Expected the nextReducer to be a function."
                    );
                  (u = e), h({ type: a.REPLACE });
                }
                function w() {
                  var e,
                    t = y;
                  return (
                    ((e = {
                      subscribe: function(e) {
                        if ("object" != typeof e || null === e)
                          throw new TypeError(
                            "Expected the observer to be an object."
                          );
                        function r() {
                          e.next && e.next(b());
                        }
                        return r(), { unsubscribe: t(r) };
                      }
                    })[i.a] = function() {
                      return this;
                    }),
                    e
                  );
                }
                return (
                  h({ type: a.INIT }),
                  ((o = {
                    dispatch: h,
                    subscribe: y,
                    getState: b,
                    replaceReducer: v
                  })[i.a] = w),
                  o
                );
              })(
                (function(e) {
                  for (
                    var t = Object.keys(e), r = {}, n = 0;
                    n < t.length;
                    n++
                  ) {
                    var o = t[n];
                    0, "function" == typeof e[o] && (r[o] = e[o]);
                  }
                  var i,
                    u = Object.keys(r);
                  try {
                    !(function(e) {
                      Object.keys(e).forEach(function(t) {
                        var r = e[t];
                        if (void 0 === r(void 0, { type: a.INIT }))
                          throw new Error(
                            'Reducer "' +
                              t +
                              "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
                          );
                        if (
                          void 0 ===
                          r(void 0, { type: a.PROBE_UNKNOWN_ACTION() })
                        )
                          throw new Error(
                            'Reducer "' +
                              t +
                              "\" returned undefined when probed with a random type. Don't try to handle " +
                              a.INIT +
                              ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                          );
                      });
                    })(r);
                  } catch (e) {
                    i = e;
                  }
                  return function(e, t) {
                    if ((void 0 === e && (e = {}), i)) throw i;
                    for (var n = !1, o = {}, a = 0; a < u.length; a++) {
                      var c = u[a],
                        s = r[c],
                        l = e[c],
                        d = s(l, t);
                      if (void 0 === d) {
                        var p = f(c, t);
                        throw new Error(p);
                      }
                      (o[c] = d), (n = n || d !== l);
                    }
                    return (n = n || u.length !== Object.keys(e).length)
                      ? o
                      : e;
                  };
                })({
                  namespace: function() {
                    return "base";
                  },
                  render: function() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : p,
                      t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                      case "CHANGE_TIME":
                        var r = t.payload;
                        return l({}, e, { year: r.year, month: r.month });
                      default:
                        return e;
                    }
                  }
                })
              ),
              globalEventDistributor: new ((function() {
                function e() {
                  !(function(e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.stores = []);
                }
                var t, r, n;
                return (
                  (t = e),
                  (r = [
                    {
                      key: "registerStore",
                      value: function(e) {
                        this.stores.push(e);
                      }
                    },
                    {
                      key: "dispatch",
                      value: function(e) {
                        this.stores.forEach(function(t) {
                          t.dispatch(e);
                        });
                      }
                    },
                    {
                      key: "getState",
                      value: function() {
                        var e = {};
                        return (
                          this.stores.forEach(function(t) {
                            var r = t.getState();
                            e[r.namespace] = r;
                          }),
                          e
                        );
                      }
                    }
                  ]) && b(t.prototype, r),
                  n && b(t, n),
                  e
                );
              })())()
            };
            Object(n.registerApplication)(
              "@briuin/avatar",
              function() {
                return System.import("@briuin/avatar");
              },
              o,
              y
            ),
              Object(n.registerApplication)(
                "@briuin/timeline",
                function() {
                  return System.import("@briuin/timeline");
                },
                o
              ),
              Object(n.start)();
          }
        ])
      );
    }
  };
});
//# sourceMappingURL=app.js.map
