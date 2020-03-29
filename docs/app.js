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
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function(e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 8))
          );
        })([
          function(e, t, n) {
            e.exports = n(5);
          },
          function(e, t) {
            function n(e, t, n, r, o, a, i) {
              try {
                var c = e[a](i),
                  s = c.value;
              } catch (e) {
                return void n(e);
              }
              c.done ? t(s) : Promise.resolve(s).then(r, o);
            }
            e.exports = function(e) {
              return function() {
                var t = this,
                  r = arguments;
                return new Promise(function(o, a) {
                  var i = e.apply(t, r);
                  function c(e) {
                    n(i, o, a, c, s, "next", e);
                  }
                  function s(e) {
                    n(i, o, a, c, s, "throw", e);
                  }
                  c(void 0);
                });
              };
            };
          },
          function(e, n) {
            e.exports = t;
          },
          function(e, t) {
            e.exports = function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            };
          },
          function(e, t) {
            function n(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            e.exports = function(e, t, r) {
              return t && n(e.prototype, t), r && n(e, r), e;
            };
          },
          function(e, t, n) {
            var r = (function(e) {
              "use strict";
              var t = Object.prototype,
                n = t.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                o = r.iterator || "@@iterator",
                a = r.asyncIterator || "@@asyncIterator",
                i = r.toStringTag || "@@toStringTag";
              function c(e, t, n, r) {
                var o = t && t.prototype instanceof l ? t : l,
                  a = Object.create(o.prototype),
                  i = new T(r || []);
                return (
                  (a._invoke = (function(e, t, n) {
                    var r = "suspendedStart";
                    return function(o, a) {
                      if ("executing" === r)
                        throw new Error("Generator is already running");
                      if ("completed" === r) {
                        if ("throw" === o) throw a;
                        return w();
                      }
                      for (n.method = o, n.arg = a; ; ) {
                        var i = n.delegate;
                        if (i) {
                          var c = b(i, n);
                          if (c) {
                            if (c === u) continue;
                            return c;
                          }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                          if ("suspendedStart" === r)
                            throw ((r = "completed"), n.arg);
                          n.dispatchException(n.arg);
                        } else
                          "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var l = s(e, t, n);
                        if ("normal" === l.type) {
                          if (
                            ((r = n.done ? "completed" : "suspendedYield"),
                            l.arg === u)
                          )
                            continue;
                          return { value: l.arg, done: n.done };
                        }
                        "throw" === l.type &&
                          ((r = "completed"),
                          (n.method = "throw"),
                          (n.arg = l.arg));
                      }
                    };
                  })(e, n, i)),
                  a
                );
              }
              function s(e, t, n) {
                try {
                  return { type: "normal", arg: e.call(t, n) };
                } catch (e) {
                  return { type: "throw", arg: e };
                }
              }
              e.wrap = c;
              var u = {};
              function l() {}
              function f() {}
              function p() {}
              var h = {};
              h[o] = function() {
                return this;
              };
              var d = Object.getPrototypeOf,
                v = d && d(d(E([])));
              v && v !== t && n.call(v, o) && (h = v);
              var y = (p.prototype = l.prototype = Object.create(h));
              function g(e) {
                ["next", "throw", "return"].forEach(function(t) {
                  e[t] = function(e) {
                    return this._invoke(t, e);
                  };
                });
              }
              function m(e, t) {
                var r;
                this._invoke = function(o, a) {
                  function i() {
                    return new t(function(r, i) {
                      !(function r(o, a, i, c) {
                        var u = s(e[o], e, a);
                        if ("throw" !== u.type) {
                          var l = u.arg,
                            f = l.value;
                          return f &&
                            "object" == typeof f &&
                            n.call(f, "__await")
                            ? t.resolve(f.__await).then(
                                function(e) {
                                  r("next", e, i, c);
                                },
                                function(e) {
                                  r("throw", e, i, c);
                                }
                              )
                            : t.resolve(f).then(
                                function(e) {
                                  (l.value = e), i(l);
                                },
                                function(e) {
                                  return r("throw", e, i, c);
                                }
                              );
                        }
                        c(u.arg);
                      })(o, a, r, i);
                    });
                  }
                  return (r = r ? r.then(i, i) : i());
                };
              }
              function b(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                  if (((t.delegate = null), "throw" === t.method)) {
                    if (
                      e.iterator.return &&
                      ((t.method = "return"),
                      (t.arg = void 0),
                      b(e, t),
                      "throw" === t.method)
                    )
                      return u;
                    (t.method = "throw"),
                      (t.arg = new TypeError(
                        "The iterator does not provide a 'throw' method"
                      ));
                  }
                  return u;
                }
                var r = s(n, e.iterator, t.arg);
                if ("throw" === r.type)
                  return (
                    (t.method = "throw"),
                    (t.arg = r.arg),
                    (t.delegate = null),
                    u
                  );
                var o = r.arg;
                return o
                  ? o.done
                    ? ((t[e.resultName] = o.value),
                      (t.next = e.nextLoc),
                      "return" !== t.method &&
                        ((t.method = "next"), (t.arg = void 0)),
                      (t.delegate = null),
                      u)
                    : o
                  : ((t.method = "throw"),
                    (t.arg = new TypeError("iterator result is not an object")),
                    (t.delegate = null),
                    u);
              }
              function _(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]),
                  2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                  this.tryEntries.push(t);
              }
              function k(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
              }
              function T(e) {
                (this.tryEntries = [{ tryLoc: "root" }]),
                  e.forEach(_, this),
                  this.reset(!0);
              }
              function E(e) {
                if (e) {
                  var t = e[o];
                  if (t) return t.call(e);
                  if ("function" == typeof e.next) return e;
                  if (!isNaN(e.length)) {
                    var r = -1,
                      a = function t() {
                        for (; ++r < e.length; )
                          if (n.call(e, r))
                            return (t.value = e[r]), (t.done = !1), t;
                        return (t.value = void 0), (t.done = !0), t;
                      };
                    return (a.next = a);
                  }
                }
                return { next: w };
              }
              function w() {
                return { value: void 0, done: !0 };
              }
              return (
                (f.prototype = y.constructor = p),
                (p.constructor = f),
                (p[i] = f.displayName = "GeneratorFunction"),
                (e.isGeneratorFunction = function(e) {
                  var t = "function" == typeof e && e.constructor;
                  return (
                    !!t &&
                    (t === f ||
                      "GeneratorFunction" === (t.displayName || t.name))
                  );
                }),
                (e.mark = function(e) {
                  return (
                    Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, p)
                      : ((e.__proto__ = p),
                        i in e || (e[i] = "GeneratorFunction")),
                    (e.prototype = Object.create(y)),
                    e
                  );
                }),
                (e.awrap = function(e) {
                  return { __await: e };
                }),
                g(m.prototype),
                (m.prototype[a] = function() {
                  return this;
                }),
                (e.AsyncIterator = m),
                (e.async = function(t, n, r, o, a) {
                  void 0 === a && (a = Promise);
                  var i = new m(c(t, n, r, o), a);
                  return e.isGeneratorFunction(n)
                    ? i
                    : i.next().then(function(e) {
                        return e.done ? e.value : i.next();
                      });
                }),
                g(y),
                (y[i] = "Generator"),
                (y[o] = function() {
                  return this;
                }),
                (y.toString = function() {
                  return "[object Generator]";
                }),
                (e.keys = function(e) {
                  var t = [];
                  for (var n in e) t.push(n);
                  return (
                    t.reverse(),
                    function n() {
                      for (; t.length; ) {
                        var r = t.pop();
                        if (r in e) return (n.value = r), (n.done = !1), n;
                      }
                      return (n.done = !0), n;
                    }
                  );
                }),
                (e.values = E),
                (T.prototype = {
                  constructor: T,
                  reset: function(e) {
                    if (
                      ((this.prev = 0),
                      (this.next = 0),
                      (this.sent = this._sent = void 0),
                      (this.done = !1),
                      (this.delegate = null),
                      (this.method = "next"),
                      (this.arg = void 0),
                      this.tryEntries.forEach(k),
                      !e)
                    )
                      for (var t in this)
                        "t" === t.charAt(0) &&
                          n.call(this, t) &&
                          !isNaN(+t.slice(1)) &&
                          (this[t] = void 0);
                  },
                  stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                  },
                  dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;
                    function r(n, r) {
                      return (
                        (i.type = "throw"),
                        (i.arg = e),
                        (t.next = n),
                        r && ((t.method = "next"), (t.arg = void 0)),
                        !!r
                      );
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                      var a = this.tryEntries[o],
                        i = a.completion;
                      if ("root" === a.tryLoc) return r("end");
                      if (a.tryLoc <= this.prev) {
                        var c = n.call(a, "catchLoc"),
                          s = n.call(a, "finallyLoc");
                        if (c && s) {
                          if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                          if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                        } else if (c) {
                          if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                        } else {
                          if (!s)
                            throw new Error(
                              "try statement without catch or finally"
                            );
                          if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                        }
                      }
                    }
                  },
                  abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                      var o = this.tryEntries[r];
                      if (
                        o.tryLoc <= this.prev &&
                        n.call(o, "finallyLoc") &&
                        this.prev < o.finallyLoc
                      ) {
                        var a = o;
                        break;
                      }
                    }
                    a &&
                      ("break" === e || "continue" === e) &&
                      a.tryLoc <= t &&
                      t <= a.finallyLoc &&
                      (a = null);
                    var i = a ? a.completion : {};
                    return (
                      (i.type = e),
                      (i.arg = t),
                      a
                        ? ((this.method = "next"),
                          (this.next = a.finallyLoc),
                          u)
                        : this.complete(i)
                    );
                  },
                  complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                      "break" === e.type || "continue" === e.type
                        ? (this.next = e.arg)
                        : "return" === e.type
                        ? ((this.rval = this.arg = e.arg),
                          (this.method = "return"),
                          (this.next = "end"))
                        : "normal" === e.type && t && (this.next = t),
                      u
                    );
                  },
                  finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var n = this.tryEntries[t];
                      if (n.finallyLoc === e)
                        return this.complete(n.completion, n.afterLoc), k(n), u;
                    }
                  },
                  catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var n = this.tryEntries[t];
                      if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                          var o = r.arg;
                          k(n);
                        }
                        return o;
                      }
                    }
                    throw new Error("illegal catch attempt");
                  },
                  delegateYield: function(e, t, n) {
                    return (
                      (this.delegate = {
                        iterator: E(e),
                        resultName: t,
                        nextLoc: n
                      }),
                      "next" === this.method && (this.arg = void 0),
                      u
                    );
                  }
                }),
                e
              );
            })(e.exports);
            try {
              regeneratorRuntime = r;
            } catch (e) {
              Function("r", "regeneratorRuntime = r")(r);
            }
          },
          function(e, t, n) {
            (function(r) {
              var o, a;
              /**
               * @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
               * (c) 2010-2020 Google LLC. https://angular.io/
               * License: MIT
               */ void 0 ===
                (a =
                  "function" ==
                  typeof (o = function() {
                    "use strict";
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */ !(function(e) {
                      var t = e.performance;
                      function n(e) {
                        t && t.mark && t.mark(e);
                      }
                      function r(e, n) {
                        t && t.measure && t.measure(e, n);
                      }
                      n("Zone");
                      var o = e.__Zone_symbol_prefix || "__zone_symbol__";
                      function a(e) {
                        return o + e;
                      }
                      var i = !0 === e[a("forceDuplicateZoneCheck")];
                      if (e.Zone) {
                        if (i || "function" != typeof e.Zone.__symbol__)
                          throw new Error("Zone already loaded.");
                        return e.Zone;
                      }
                      var c = (function() {
                        function t(e, t) {
                          (this._parent = e),
                            (this._name = t ? t.name || "unnamed" : "<root>"),
                            (this._properties = (t && t.properties) || {}),
                            (this._zoneDelegate = new l(
                              this,
                              this._parent && this._parent._zoneDelegate,
                              t
                            ));
                        }
                        return (
                          (t.assertZonePatched = function() {
                            if (e.Promise !== D.ZoneAwarePromise)
                              throw new Error(
                                "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
                              );
                          }),
                          Object.defineProperty(t, "root", {
                            get: function() {
                              for (var e = t.current; e.parent; ) e = e.parent;
                              return e;
                            },
                            enumerable: !0,
                            configurable: !0
                          }),
                          Object.defineProperty(t, "current", {
                            get: function() {
                              return C.zone;
                            },
                            enumerable: !0,
                            configurable: !0
                          }),
                          Object.defineProperty(t, "currentTask", {
                            get: function() {
                              return x;
                            },
                            enumerable: !0,
                            configurable: !0
                          }),
                          (t.__load_patch = function(o, a) {
                            if (D.hasOwnProperty(o)) {
                              if (i) throw Error("Already loaded patch: " + o);
                            } else if (!e["__Zone_disable_" + o]) {
                              var c = "Zone:" + o;
                              n(c), (D[o] = a(e, t, j)), r(c, c);
                            }
                          }),
                          Object.defineProperty(t.prototype, "parent", {
                            get: function() {
                              return this._parent;
                            },
                            enumerable: !0,
                            configurable: !0
                          }),
                          Object.defineProperty(t.prototype, "name", {
                            get: function() {
                              return this._name;
                            },
                            enumerable: !0,
                            configurable: !0
                          }),
                          (t.prototype.get = function(e) {
                            var t = this.getZoneWith(e);
                            if (t) return t._properties[e];
                          }),
                          (t.prototype.getZoneWith = function(e) {
                            for (var t = this; t; ) {
                              if (t._properties.hasOwnProperty(e)) return t;
                              t = t._parent;
                            }
                            return null;
                          }),
                          (t.prototype.fork = function(e) {
                            if (!e) throw new Error("ZoneSpec required!");
                            return this._zoneDelegate.fork(this, e);
                          }),
                          (t.prototype.wrap = function(e, t) {
                            if ("function" != typeof e)
                              throw new Error("Expecting function got: " + e);
                            var n = this._zoneDelegate.intercept(this, e, t),
                              r = this;
                            return function() {
                              return r.runGuarded(n, this, arguments, t);
                            };
                          }),
                          (t.prototype.run = function(e, t, n, r) {
                            C = { parent: C, zone: this };
                            try {
                              return this._zoneDelegate.invoke(
                                this,
                                e,
                                t,
                                n,
                                r
                              );
                            } finally {
                              C = C.parent;
                            }
                          }),
                          (t.prototype.runGuarded = function(e, t, n, r) {
                            void 0 === t && (t = null),
                              (C = { parent: C, zone: this });
                            try {
                              try {
                                return this._zoneDelegate.invoke(
                                  this,
                                  e,
                                  t,
                                  n,
                                  r
                                );
                              } catch (e) {
                                if (this._zoneDelegate.handleError(this, e))
                                  throw e;
                              }
                            } finally {
                              C = C.parent;
                            }
                          }),
                          (t.prototype.runTask = function(e, t, n) {
                            if (e.zone != this)
                              throw new Error(
                                "A task can only be run in the zone of creation! (Creation: " +
                                  (e.zone || b).name +
                                  "; Execution: " +
                                  this.name +
                                  ")"
                              );
                            if (
                              e.state !== _ ||
                              (e.type !== Z && e.type !== P)
                            ) {
                              var r = e.state != E;
                              r && e._transitionTo(E, T), e.runCount++;
                              var o = x;
                              (x = e), (C = { parent: C, zone: this });
                              try {
                                e.type == P &&
                                  e.data &&
                                  !e.data.isPeriodic &&
                                  (e.cancelFn = void 0);
                                try {
                                  return this._zoneDelegate.invokeTask(
                                    this,
                                    e,
                                    t,
                                    n
                                  );
                                } catch (e) {
                                  if (this._zoneDelegate.handleError(this, e))
                                    throw e;
                                }
                              } finally {
                                e.state !== _ &&
                                  e.state !== S &&
                                  (e.type == Z || (e.data && e.data.isPeriodic)
                                    ? r && e._transitionTo(T, E)
                                    : ((e.runCount = 0),
                                      this._updateTaskCount(e, -1),
                                      r && e._transitionTo(_, E, _))),
                                  (C = C.parent),
                                  (x = o);
                              }
                            }
                          }),
                          (t.prototype.scheduleTask = function(e) {
                            if (e.zone && e.zone !== this)
                              for (var t = this; t; ) {
                                if (t === e.zone)
                                  throw Error(
                                    "can not reschedule task to " +
                                      this.name +
                                      " which is descendants of the original zone " +
                                      e.zone.name
                                  );
                                t = t.parent;
                              }
                            e._transitionTo(k, _);
                            var n = [];
                            (e._zoneDelegates = n), (e._zone = this);
                            try {
                              e = this._zoneDelegate.scheduleTask(this, e);
                            } catch (t) {
                              throw (e._transitionTo(S, k, _),
                              this._zoneDelegate.handleError(this, t),
                              t);
                            }
                            return (
                              e._zoneDelegates === n &&
                                this._updateTaskCount(e, 1),
                              e.state == k && e._transitionTo(T, k),
                              e
                            );
                          }),
                          (t.prototype.scheduleMicroTask = function(
                            e,
                            t,
                            n,
                            r
                          ) {
                            return this.scheduleTask(
                              new f(O, e, t, n, r, void 0)
                            );
                          }),
                          (t.prototype.scheduleMacroTask = function(
                            e,
                            t,
                            n,
                            r,
                            o
                          ) {
                            return this.scheduleTask(new f(P, e, t, n, r, o));
                          }),
                          (t.prototype.scheduleEventTask = function(
                            e,
                            t,
                            n,
                            r,
                            o
                          ) {
                            return this.scheduleTask(new f(Z, e, t, n, r, o));
                          }),
                          (t.prototype.cancelTask = function(e) {
                            if (e.zone != this)
                              throw new Error(
                                "A task can only be cancelled in the zone of creation! (Creation: " +
                                  (e.zone || b).name +
                                  "; Execution: " +
                                  this.name +
                                  ")"
                              );
                            e._transitionTo(w, T, E);
                            try {
                              this._zoneDelegate.cancelTask(this, e);
                            } catch (t) {
                              throw (e._transitionTo(S, w),
                              this._zoneDelegate.handleError(this, t),
                              t);
                            }
                            return (
                              this._updateTaskCount(e, -1),
                              e._transitionTo(_, w),
                              (e.runCount = 0),
                              e
                            );
                          }),
                          (t.prototype._updateTaskCount = function(e, t) {
                            var n = e._zoneDelegates;
                            -1 == t && (e._zoneDelegates = null);
                            for (var r = 0; r < n.length; r++)
                              n[r]._updateTaskCount(e.type, t);
                          }),
                          t
                        );
                      })();
                      c.__symbol__ = a;
                      var s,
                        u = {
                          name: "",
                          onHasTask: function(e, t, n, r) {
                            return e.hasTask(n, r);
                          },
                          onScheduleTask: function(e, t, n, r) {
                            return e.scheduleTask(n, r);
                          },
                          onInvokeTask: function(e, t, n, r, o, a) {
                            return e.invokeTask(n, r, o, a);
                          },
                          onCancelTask: function(e, t, n, r) {
                            return e.cancelTask(n, r);
                          }
                        },
                        l = (function() {
                          function e(e, t, n) {
                            (this._taskCounts = {
                              microTask: 0,
                              macroTask: 0,
                              eventTask: 0
                            }),
                              (this.zone = e),
                              (this._parentDelegate = t),
                              (this._forkZS =
                                n && (n && n.onFork ? n : t._forkZS)),
                              (this._forkDlgt =
                                n && (n.onFork ? t : t._forkDlgt)),
                              (this._forkCurrZone =
                                n && (n.onFork ? this.zone : t._forkCurrZone)),
                              (this._interceptZS =
                                n && (n.onIntercept ? n : t._interceptZS)),
                              (this._interceptDlgt =
                                n && (n.onIntercept ? t : t._interceptDlgt)),
                              (this._interceptCurrZone =
                                n &&
                                (n.onIntercept
                                  ? this.zone
                                  : t._interceptCurrZone)),
                              (this._invokeZS =
                                n && (n.onInvoke ? n : t._invokeZS)),
                              (this._invokeDlgt =
                                n && (n.onInvoke ? t : t._invokeDlgt)),
                              (this._invokeCurrZone =
                                n &&
                                (n.onInvoke ? this.zone : t._invokeCurrZone)),
                              (this._handleErrorZS =
                                n && (n.onHandleError ? n : t._handleErrorZS)),
                              (this._handleErrorDlgt =
                                n &&
                                (n.onHandleError ? t : t._handleErrorDlgt)),
                              (this._handleErrorCurrZone =
                                n &&
                                (n.onHandleError
                                  ? this.zone
                                  : t._handleErrorCurrZone)),
                              (this._scheduleTaskZS =
                                n &&
                                (n.onScheduleTask ? n : t._scheduleTaskZS)),
                              (this._scheduleTaskDlgt =
                                n &&
                                (n.onScheduleTask ? t : t._scheduleTaskDlgt)),
                              (this._scheduleTaskCurrZone =
                                n &&
                                (n.onScheduleTask
                                  ? this.zone
                                  : t._scheduleTaskCurrZone)),
                              (this._invokeTaskZS =
                                n && (n.onInvokeTask ? n : t._invokeTaskZS)),
                              (this._invokeTaskDlgt =
                                n && (n.onInvokeTask ? t : t._invokeTaskDlgt)),
                              (this._invokeTaskCurrZone =
                                n &&
                                (n.onInvokeTask
                                  ? this.zone
                                  : t._invokeTaskCurrZone)),
                              (this._cancelTaskZS =
                                n && (n.onCancelTask ? n : t._cancelTaskZS)),
                              (this._cancelTaskDlgt =
                                n && (n.onCancelTask ? t : t._cancelTaskDlgt)),
                              (this._cancelTaskCurrZone =
                                n &&
                                (n.onCancelTask
                                  ? this.zone
                                  : t._cancelTaskCurrZone)),
                              (this._hasTaskZS = null),
                              (this._hasTaskDlgt = null),
                              (this._hasTaskDlgtOwner = null),
                              (this._hasTaskCurrZone = null);
                            var r = n && n.onHasTask,
                              o = t && t._hasTaskZS;
                            (r || o) &&
                              ((this._hasTaskZS = r ? n : u),
                              (this._hasTaskDlgt = t),
                              (this._hasTaskDlgtOwner = this),
                              (this._hasTaskCurrZone = e),
                              n.onScheduleTask ||
                                ((this._scheduleTaskZS = u),
                                (this._scheduleTaskDlgt = t),
                                (this._scheduleTaskCurrZone = this.zone)),
                              n.onInvokeTask ||
                                ((this._invokeTaskZS = u),
                                (this._invokeTaskDlgt = t),
                                (this._invokeTaskCurrZone = this.zone)),
                              n.onCancelTask ||
                                ((this._cancelTaskZS = u),
                                (this._cancelTaskDlgt = t),
                                (this._cancelTaskCurrZone = this.zone)));
                          }
                          return (
                            (e.prototype.fork = function(e, t) {
                              return this._forkZS
                                ? this._forkZS.onFork(
                                    this._forkDlgt,
                                    this.zone,
                                    e,
                                    t
                                  )
                                : new c(e, t);
                            }),
                            (e.prototype.intercept = function(e, t, n) {
                              return this._interceptZS
                                ? this._interceptZS.onIntercept(
                                    this._interceptDlgt,
                                    this._interceptCurrZone,
                                    e,
                                    t,
                                    n
                                  )
                                : t;
                            }),
                            (e.prototype.invoke = function(e, t, n, r, o) {
                              return this._invokeZS
                                ? this._invokeZS.onInvoke(
                                    this._invokeDlgt,
                                    this._invokeCurrZone,
                                    e,
                                    t,
                                    n,
                                    r,
                                    o
                                  )
                                : t.apply(n, r);
                            }),
                            (e.prototype.handleError = function(e, t) {
                              return (
                                !this._handleErrorZS ||
                                this._handleErrorZS.onHandleError(
                                  this._handleErrorDlgt,
                                  this._handleErrorCurrZone,
                                  e,
                                  t
                                )
                              );
                            }),
                            (e.prototype.scheduleTask = function(e, t) {
                              var n = t;
                              if (this._scheduleTaskZS)
                                this._hasTaskZS &&
                                  n._zoneDelegates.push(this._hasTaskDlgtOwner),
                                  (n = this._scheduleTaskZS.onScheduleTask(
                                    this._scheduleTaskDlgt,
                                    this._scheduleTaskCurrZone,
                                    e,
                                    t
                                  )) || (n = t);
                              else if (t.scheduleFn) t.scheduleFn(t);
                              else {
                                if (t.type != O)
                                  throw new Error(
                                    "Task is missing scheduleFn."
                                  );
                                g(t);
                              }
                              return n;
                            }),
                            (e.prototype.invokeTask = function(e, t, n, r) {
                              return this._invokeTaskZS
                                ? this._invokeTaskZS.onInvokeTask(
                                    this._invokeTaskDlgt,
                                    this._invokeTaskCurrZone,
                                    e,
                                    t,
                                    n,
                                    r
                                  )
                                : t.callback.apply(n, r);
                            }),
                            (e.prototype.cancelTask = function(e, t) {
                              var n;
                              if (this._cancelTaskZS)
                                n = this._cancelTaskZS.onCancelTask(
                                  this._cancelTaskDlgt,
                                  this._cancelTaskCurrZone,
                                  e,
                                  t
                                );
                              else {
                                if (!t.cancelFn)
                                  throw Error("Task is not cancelable");
                                n = t.cancelFn(t);
                              }
                              return n;
                            }),
                            (e.prototype.hasTask = function(e, t) {
                              try {
                                this._hasTaskZS &&
                                  this._hasTaskZS.onHasTask(
                                    this._hasTaskDlgt,
                                    this._hasTaskCurrZone,
                                    e,
                                    t
                                  );
                              } catch (t) {
                                this.handleError(e, t);
                              }
                            }),
                            (e.prototype._updateTaskCount = function(e, t) {
                              var n = this._taskCounts,
                                r = n[e],
                                o = (n[e] = r + t);
                              if (o < 0)
                                throw new Error(
                                  "More tasks executed then were scheduled."
                                );
                              if (0 == r || 0 == o) {
                                var a = {
                                  microTask: n.microTask > 0,
                                  macroTask: n.macroTask > 0,
                                  eventTask: n.eventTask > 0,
                                  change: e
                                };
                                this.hasTask(this.zone, a);
                              }
                            }),
                            e
                          );
                        })(),
                        f = (function() {
                          function t(n, r, o, a, i, c) {
                            if (
                              ((this._zone = null),
                              (this.runCount = 0),
                              (this._zoneDelegates = null),
                              (this._state = "notScheduled"),
                              (this.type = n),
                              (this.source = r),
                              (this.data = a),
                              (this.scheduleFn = i),
                              (this.cancelFn = c),
                              !o)
                            )
                              throw new Error("callback is not defined");
                            this.callback = o;
                            var s = this;
                            n === Z && a && a.useG
                              ? (this.invoke = t.invokeTask)
                              : (this.invoke = function() {
                                  return t.invokeTask.call(
                                    e,
                                    s,
                                    this,
                                    arguments
                                  );
                                });
                          }
                          return (
                            (t.invokeTask = function(e, t, n) {
                              e || (e = this), L++;
                              try {
                                return e.runCount++, e.zone.runTask(e, t, n);
                              } finally {
                                1 == L && m(), L--;
                              }
                            }),
                            Object.defineProperty(t.prototype, "zone", {
                              get: function() {
                                return this._zone;
                              },
                              enumerable: !0,
                              configurable: !0
                            }),
                            Object.defineProperty(t.prototype, "state", {
                              get: function() {
                                return this._state;
                              },
                              enumerable: !0,
                              configurable: !0
                            }),
                            (t.prototype.cancelScheduleRequest = function() {
                              this._transitionTo(_, k);
                            }),
                            (t.prototype._transitionTo = function(e, t, n) {
                              if (this._state !== t && this._state !== n)
                                throw new Error(
                                  this.type +
                                    " '" +
                                    this.source +
                                    "': can not transition to '" +
                                    e +
                                    "', expecting state '" +
                                    t +
                                    "'" +
                                    (n ? " or '" + n + "'" : "") +
                                    ", was '" +
                                    this._state +
                                    "'."
                                );
                              (this._state = e),
                                e == _ && (this._zoneDelegates = null);
                            }),
                            (t.prototype.toString = function() {
                              return this.data && void 0 !== this.data.handleId
                                ? this.data.handleId.toString()
                                : Object.prototype.toString.call(this);
                            }),
                            (t.prototype.toJSON = function() {
                              return {
                                type: this.type,
                                state: this.state,
                                source: this.source,
                                zone: this.zone.name,
                                runCount: this.runCount
                              };
                            }),
                            t
                          );
                        })(),
                        p = a("setTimeout"),
                        h = a("Promise"),
                        d = a("then"),
                        v = [],
                        y = !1;
                      function g(t) {
                        if (0 === L && 0 === v.length)
                          if ((s || (e[h] && (s = e[h].resolve(0))), s)) {
                            var n = s[d];
                            n || (n = s.then), n.call(s, m);
                          } else e[p](m, 0);
                        t && v.push(t);
                      }
                      function m() {
                        if (!y) {
                          for (y = !0; v.length; ) {
                            var e = v;
                            v = [];
                            for (var t = 0; t < e.length; t++) {
                              var n = e[t];
                              try {
                                n.zone.runTask(n, null, null);
                              } catch (e) {
                                j.onUnhandledError(e);
                              }
                            }
                          }
                          j.microtaskDrainDone(), (y = !1);
                        }
                      }
                      var b = { name: "NO ZONE" },
                        _ = "notScheduled",
                        k = "scheduling",
                        T = "scheduled",
                        E = "running",
                        w = "canceling",
                        S = "unknown",
                        O = "microTask",
                        P = "macroTask",
                        Z = "eventTask",
                        D = {},
                        j = {
                          symbol: a,
                          currentZoneFrame: function() {
                            return C;
                          },
                          onUnhandledError: z,
                          microtaskDrainDone: z,
                          scheduleMicroTask: g,
                          showUncaughtError: function() {
                            return !c[a("ignoreConsoleErrorUncaughtError")];
                          },
                          patchEventTarget: function() {
                            return [];
                          },
                          patchOnProperties: z,
                          patchMethod: function() {
                            return z;
                          },
                          bindArguments: function() {
                            return [];
                          },
                          patchThen: function() {
                            return z;
                          },
                          patchMacroTask: function() {
                            return z;
                          },
                          setNativePromise: function(e) {
                            e &&
                              "function" == typeof e.resolve &&
                              (s = e.resolve(0));
                          },
                          patchEventPrototype: function() {
                            return z;
                          },
                          isIEOrEdge: function() {
                            return !1;
                          },
                          getGlobalObjects: function() {},
                          ObjectDefineProperty: function() {
                            return z;
                          },
                          ObjectGetOwnPropertyDescriptor: function() {},
                          ObjectCreate: function() {},
                          ArraySlice: function() {
                            return [];
                          },
                          patchClass: function() {
                            return z;
                          },
                          wrapWithCurrentZone: function() {
                            return z;
                          },
                          filterProperties: function() {
                            return [];
                          },
                          attachOriginToPatched: function() {
                            return z;
                          },
                          _redefineProperty: function() {
                            return z;
                          },
                          patchCallbacks: function() {
                            return z;
                          }
                        },
                        C = { parent: null, zone: new c(null, null) },
                        x = null,
                        L = 0;
                      function z() {}
                      r("Zone", "Zone"), (e.Zone = c);
                    })(
                      ("undefined" != typeof window && window) ||
                        ("undefined" != typeof self && self) ||
                        r
                    ),
                      /**
                       * @license
                       * Copyright Google Inc. All Rights Reserved.
                       *
                       * Use of this source code is governed by an MIT-style license that can be
                       * found in the LICENSE file at https://angular.io/license
                       */
                      Zone.__load_patch("ZoneAwarePromise", function(e, t, n) {
                        var r = Object.getOwnPropertyDescriptor,
                          o = Object.defineProperty,
                          a = n.symbol,
                          i = [],
                          c =
                            !0 ===
                            e[a("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                          s = a("Promise"),
                          u = a("then");
                        (n.onUnhandledError = function(e) {
                          if (n.showUncaughtError()) {
                            var t = e && e.rejection;
                            t
                              ? console.error(
                                  "Unhandled Promise rejection:",
                                  t instanceof Error ? t.message : t,
                                  "; Zone:",
                                  e.zone.name,
                                  "; Task:",
                                  e.task && e.task.source,
                                  "; Value:",
                                  t,
                                  t instanceof Error ? t.stack : void 0
                                )
                              : console.error(e);
                          }
                        }),
                          (n.microtaskDrainDone = function() {
                            for (
                              var e = function() {
                                var e = i.shift();
                                try {
                                  e.zone.runGuarded(function() {
                                    throw e;
                                  });
                                } catch (e) {
                                  !(function(e) {
                                    n.onUnhandledError(e);
                                    try {
                                      var r = t[l];
                                      "function" == typeof r && r.call(this, e);
                                    } catch (e) {}
                                  })(e);
                                }
                              };
                              i.length;

                            )
                              e();
                          });
                        var l = a("unhandledPromiseRejectionHandler");
                        function f(e) {
                          return e && e.then;
                        }
                        function p(e) {
                          return e;
                        }
                        function h(e) {
                          return O.reject(e);
                        }
                        var d = a("state"),
                          v = a("value"),
                          y = a("finally"),
                          g = a("parentPromiseValue"),
                          m = a("parentPromiseState");
                        function b(e, t) {
                          return function(n) {
                            try {
                              k(e, t, n);
                            } catch (t) {
                              k(e, !1, t);
                            }
                          };
                        }
                        var _ = a("currentTaskTrace");
                        function k(e, r, a) {
                          var s,
                            u =
                              ((s = !1),
                              function(e) {
                                return function() {
                                  s || ((s = !0), e.apply(null, arguments));
                                };
                              });
                          if (e === a)
                            throw new TypeError("Promise resolved with itself");
                          if (null === e[d]) {
                            var l = null;
                            try {
                              ("object" != typeof a &&
                                "function" != typeof a) ||
                                (l = a && a.then);
                            } catch (t) {
                              return (
                                u(function() {
                                  k(e, !1, t);
                                })(),
                                e
                              );
                            }
                            if (
                              !1 !== r &&
                              a instanceof O &&
                              a.hasOwnProperty(d) &&
                              a.hasOwnProperty(v) &&
                              null !== a[d]
                            )
                              E(a), k(e, a[d], a[v]);
                            else if (!1 !== r && "function" == typeof l)
                              try {
                                l.call(a, u(b(e, r)), u(b(e, !1)));
                              } catch (t) {
                                u(function() {
                                  k(e, !1, t);
                                })();
                              }
                            else {
                              e[d] = r;
                              var f = e[v];
                              if (
                                ((e[v] = a),
                                e[y] === y &&
                                  !0 === r &&
                                  ((e[d] = e[m]), (e[v] = e[g])),
                                !1 === r && a instanceof Error)
                              ) {
                                var p =
                                  t.currentTask &&
                                  t.currentTask.data &&
                                  t.currentTask.data.__creationTrace__;
                                p &&
                                  o(a, _, {
                                    configurable: !0,
                                    enumerable: !1,
                                    writable: !0,
                                    value: p
                                  });
                              }
                              for (var h = 0; h < f.length; )
                                w(e, f[h++], f[h++], f[h++], f[h++]);
                              if (0 == f.length && 0 == r) {
                                e[d] = 0;
                                var T = a;
                                if (!c)
                                  try {
                                    throw new Error(
                                      "Uncaught (in promise): " +
                                        (function(e) {
                                          if (
                                            e &&
                                            e.toString ===
                                              Object.prototype.toString
                                          ) {
                                            var t =
                                              e.constructor &&
                                              e.constructor.name;
                                            return (
                                              (t || "") +
                                              ": " +
                                              JSON.stringify(e)
                                            );
                                          }
                                          return e
                                            ? e.toString()
                                            : Object.prototype.toString.call(e);
                                        })(a) +
                                        (a && a.stack ? "\n" + a.stack : "")
                                    );
                                  } catch (e) {
                                    T = e;
                                  }
                                (T.rejection = a),
                                  (T.promise = e),
                                  (T.zone = t.current),
                                  (T.task = t.currentTask),
                                  i.push(T),
                                  n.scheduleMicroTask();
                              }
                            }
                          }
                          return e;
                        }
                        var T = a("rejectionHandledHandler");
                        function E(e) {
                          if (0 === e[d]) {
                            try {
                              var n = t[T];
                              n &&
                                "function" == typeof n &&
                                n.call(this, { rejection: e[v], promise: e });
                            } catch (e) {}
                            e[d] = !1;
                            for (var r = 0; r < i.length; r++)
                              e === i[r].promise && i.splice(r, 1);
                          }
                        }
                        function w(e, t, n, r, o) {
                          E(e);
                          var a = e[d],
                            i = a
                              ? "function" == typeof r
                                ? r
                                : p
                              : "function" == typeof o
                              ? o
                              : h;
                          t.scheduleMicroTask(
                            "Promise.then",
                            function() {
                              try {
                                var r = e[v],
                                  o = !!n && y === n[y];
                                o && ((n[g] = r), (n[m] = a));
                                var c = t.run(
                                  i,
                                  void 0,
                                  o && i !== h && i !== p ? [] : [r]
                                );
                                k(n, !0, c);
                              } catch (e) {
                                k(n, !1, e);
                              }
                            },
                            n
                          );
                        }
                        var S = function() {},
                          O = (function() {
                            function e(t) {
                              if (!(this instanceof e))
                                throw new Error(
                                  "Must be an instanceof Promise."
                                );
                              (this[d] = null), (this[v] = []);
                              try {
                                t && t(b(this, !0), b(this, !1));
                              } catch (e) {
                                k(this, !1, e);
                              }
                            }
                            return (
                              (e.toString = function() {
                                return "function ZoneAwarePromise() { [native code] }";
                              }),
                              (e.resolve = function(e) {
                                return k(new this(null), !0, e);
                              }),
                              (e.reject = function(e) {
                                return k(new this(null), !1, e);
                              }),
                              (e.race = function(e) {
                                var t,
                                  n,
                                  r = new this(function(e, r) {
                                    (t = e), (n = r);
                                  });
                                function o(e) {
                                  t(e);
                                }
                                function a(e) {
                                  n(e);
                                }
                                for (var i = 0, c = e; i < c.length; i++) {
                                  var s = c[i];
                                  f(s) || (s = this.resolve(s)), s.then(o, a);
                                }
                                return r;
                              }),
                              (e.all = function(t) {
                                return e.allWithCallback(t);
                              }),
                              (e.allSettled = function(t) {
                                return (this && this.prototype instanceof e
                                  ? this
                                  : e
                                ).allWithCallback(t, {
                                  thenCallback: function(e) {
                                    return { status: "fulfilled", value: e };
                                  },
                                  errorCallback: function(e) {
                                    return { status: "rejected", reason: e };
                                  }
                                });
                              }),
                              (e.allWithCallback = function(e, t) {
                                for (
                                  var n,
                                    r,
                                    o = new this(function(e, t) {
                                      (n = e), (r = t);
                                    }),
                                    a = 2,
                                    i = 0,
                                    c = [],
                                    s = function(e) {
                                      f(e) || (e = u.resolve(e));
                                      var o = i;
                                      try {
                                        e.then(
                                          function(e) {
                                            (c[o] = t ? t.thenCallback(e) : e),
                                              0 == --a && n(c);
                                          },
                                          function(e) {
                                            t
                                              ? ((c[o] = t.errorCallback(e)),
                                                0 == --a && n(c))
                                              : r(e);
                                          }
                                        );
                                      } catch (e) {
                                        r(e);
                                      }
                                      a++, i++;
                                    },
                                    u = this,
                                    l = 0,
                                    p = e;
                                  l < p.length;
                                  l++
                                )
                                  s(p[l]);
                                return 0 == (a -= 2) && n(c), o;
                              }),
                              Object.defineProperty(
                                e.prototype,
                                Symbol.toStringTag,
                                {
                                  get: function() {
                                    return "Promise";
                                  },
                                  enumerable: !0,
                                  configurable: !0
                                }
                              ),
                              Object.defineProperty(
                                e.prototype,
                                Symbol.species,
                                {
                                  get: function() {
                                    return e;
                                  },
                                  enumerable: !0,
                                  configurable: !0
                                }
                              ),
                              (e.prototype.then = function(n, r) {
                                var o = this.constructor[Symbol.species];
                                (o && "function" == typeof o) ||
                                  (o = this.constructor || e);
                                var a = new o(S),
                                  i = t.current;
                                return (
                                  null == this[d]
                                    ? this[v].push(i, a, n, r)
                                    : w(this, i, a, n, r),
                                  a
                                );
                              }),
                              (e.prototype.catch = function(e) {
                                return this.then(null, e);
                              }),
                              (e.prototype.finally = function(n) {
                                var r = this.constructor[Symbol.species];
                                (r && "function" == typeof r) || (r = e);
                                var o = new r(S);
                                o[y] = y;
                                var a = t.current;
                                return (
                                  null == this[d]
                                    ? this[v].push(a, o, n, n)
                                    : w(this, a, o, n, n),
                                  o
                                );
                              }),
                              e
                            );
                          })();
                        (O.resolve = O.resolve),
                          (O.reject = O.reject),
                          (O.race = O.race),
                          (O.all = O.all);
                        var P = (e[s] = e.Promise),
                          Z = t.__symbol__("ZoneAwarePromise"),
                          D = r(e, "Promise");
                        (D && !D.configurable) ||
                          (D && delete D.writable,
                          D && delete D.value,
                          D || (D = { configurable: !0, enumerable: !0 }),
                          (D.get = function() {
                            return e[Z] ? e[Z] : e[s];
                          }),
                          (D.set = function(t) {
                            t === O
                              ? (e[Z] = t)
                              : ((e[s] = t),
                                t.prototype[u] || x(t),
                                n.setNativePromise(t));
                          }),
                          o(e, "Promise", D)),
                          (e.Promise = O);
                        var j,
                          C = a("thenPatched");
                        function x(e) {
                          var t = e.prototype,
                            n = r(t, "then");
                          if (!n || (!1 !== n.writable && n.configurable)) {
                            var o = t.then;
                            (t[u] = o),
                              (e.prototype.then = function(e, t) {
                                var n = this;
                                return new O(function(e, t) {
                                  o.call(n, e, t);
                                }).then(e, t);
                              }),
                              (e[C] = !0);
                          }
                        }
                        if (((n.patchThen = x), P)) {
                          x(P);
                          var L = e.fetch;
                          "function" == typeof L &&
                            ((e[n.symbol("fetch")] = L),
                            (e.fetch =
                              ((j = L),
                              function() {
                                var e = j.apply(this, arguments);
                                if (e instanceof O) return e;
                                var t = e.constructor;
                                return t[C] || x(t), e;
                              })));
                        }
                        return (
                          (Promise[t.__symbol__("uncaughtPromiseErrors")] = i),
                          O
                        );
                      });
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    var e = Object.getOwnPropertyDescriptor,
                      t = Object.defineProperty,
                      n = Object.getPrototypeOf,
                      o = Object.create,
                      a = Array.prototype.slice,
                      i = Zone.__symbol__("addEventListener"),
                      c = Zone.__symbol__("removeEventListener"),
                      s = Zone.__symbol__("");
                    function u(e, t) {
                      return Zone.current.wrap(e, t);
                    }
                    function l(e, t, n, r, o) {
                      return Zone.current.scheduleMacroTask(e, t, n, r, o);
                    }
                    var f = Zone.__symbol__,
                      p = "undefined" != typeof window,
                      h = p ? window : void 0,
                      d = (p && h) || ("object" == typeof self && self) || r,
                      v = [null];
                    function y(e, t) {
                      for (var n = e.length - 1; n >= 0; n--)
                        "function" == typeof e[n] &&
                          (e[n] = u(e[n], t + "_" + n));
                      return e;
                    }
                    function g(e) {
                      return (
                        !e ||
                        (!1 !== e.writable &&
                          !("function" == typeof e.get && void 0 === e.set))
                      );
                    }
                    var m =
                        "undefined" != typeof WorkerGlobalScope &&
                        self instanceof WorkerGlobalScope,
                      b =
                        !("nw" in d) &&
                        void 0 !== d.process &&
                        "[object process]" === {}.toString.call(d.process),
                      _ = !b && !m && !(!p || !h.HTMLElement),
                      k =
                        void 0 !== d.process &&
                        "[object process]" === {}.toString.call(d.process) &&
                        !m &&
                        !(!p || !h.HTMLElement),
                      T = {},
                      E = function(e) {
                        if ((e = e || d.event)) {
                          var t = T[e.type];
                          t || (t = T[e.type] = f("ON_PROPERTY" + e.type));
                          var n,
                            r = this || e.target || d,
                            o = r[t];
                          if (_ && r === h && "error" === e.type) {
                            var a = e;
                            !0 ===
                              (n =
                                o &&
                                o.call(
                                  this,
                                  a.message,
                                  a.filename,
                                  a.lineno,
                                  a.colno,
                                  a.error
                                )) && e.preventDefault();
                          } else
                            null == (n = o && o.apply(this, arguments)) ||
                              n ||
                              e.preventDefault();
                          return n;
                        }
                      };
                    function w(n, r, o) {
                      var a = e(n, r);
                      if (
                        (!a &&
                          o &&
                          e(o, r) &&
                          (a = { enumerable: !0, configurable: !0 }),
                        a && a.configurable)
                      ) {
                        var i = f("on" + r + "patched");
                        if (!n.hasOwnProperty(i) || !n[i]) {
                          delete a.writable, delete a.value;
                          var c = a.get,
                            s = a.set,
                            u = r.substr(2),
                            l = T[u];
                          l || (l = T[u] = f("ON_PROPERTY" + u)),
                            (a.set = function(e) {
                              var t = this;
                              t || n !== d || (t = d),
                                t &&
                                  (t[l] && t.removeEventListener(u, E),
                                  s && s.apply(t, v),
                                  "function" == typeof e
                                    ? ((t[l] = e), t.addEventListener(u, E, !1))
                                    : (t[l] = null));
                            }),
                            (a.get = function() {
                              var e = this;
                              if ((e || n !== d || (e = d), !e)) return null;
                              var t = e[l];
                              if (t) return t;
                              if (c) {
                                var o = c && c.call(this);
                                if (o)
                                  return (
                                    a.set.call(this, o),
                                    "function" == typeof e.removeAttribute &&
                                      e.removeAttribute(r),
                                    o
                                  );
                              }
                              return null;
                            }),
                            t(n, r, a),
                            (n[i] = !0);
                        }
                      }
                    }
                    function S(e, t, n) {
                      if (t)
                        for (var r = 0; r < t.length; r++) w(e, "on" + t[r], n);
                      else {
                        var o = [];
                        for (var a in e) "on" == a.substr(0, 2) && o.push(a);
                        for (var i = 0; i < o.length; i++) w(e, o[i], n);
                      }
                    }
                    var O = f("originalInstance");
                    function P(e) {
                      var n = d[e];
                      if (n) {
                        (d[f(e)] = n),
                          (d[e] = function() {
                            var t = y(arguments, e);
                            switch (t.length) {
                              case 0:
                                this[O] = new n();
                                break;
                              case 1:
                                this[O] = new n(t[0]);
                                break;
                              case 2:
                                this[O] = new n(t[0], t[1]);
                                break;
                              case 3:
                                this[O] = new n(t[0], t[1], t[2]);
                                break;
                              case 4:
                                this[O] = new n(t[0], t[1], t[2], t[3]);
                                break;
                              default:
                                throw new Error("Arg list too long.");
                            }
                          }),
                          j(d[e], n);
                        var r,
                          o = new n(function() {});
                        for (r in o)
                          ("XMLHttpRequest" === e && "responseBlob" === r) ||
                            (function(n) {
                              "function" == typeof o[n]
                                ? (d[e].prototype[n] = function() {
                                    return this[O][n].apply(this[O], arguments);
                                  })
                                : t(d[e].prototype, n, {
                                    set: function(t) {
                                      "function" == typeof t
                                        ? ((this[O][n] = u(t, e + "." + n)),
                                          j(this[O][n], t))
                                        : (this[O][n] = t);
                                    },
                                    get: function() {
                                      return this[O][n];
                                    }
                                  });
                            })(r);
                        for (r in n)
                          "prototype" !== r &&
                            n.hasOwnProperty(r) &&
                            (d[e][r] = n[r]);
                      }
                    }
                    function Z(t, r, o) {
                      for (var a = t; a && !a.hasOwnProperty(r); ) a = n(a);
                      !a && t[r] && (a = t);
                      var i = f(r),
                        c = null;
                      if (
                        a &&
                        !(c = a[i]) &&
                        ((c = a[i] = a[r]), g(a && e(a, r)))
                      ) {
                        var s = o(c, i, r);
                        (a[r] = function() {
                          return s(this, arguments);
                        }),
                          j(a[r], c);
                      }
                      return c;
                    }
                    function D(e, t, n) {
                      var r = null;
                      function o(e) {
                        var t = e.data;
                        return (
                          (t.args[t.cbIdx] = function() {
                            e.invoke.apply(this, arguments);
                          }),
                          r.apply(t.target, t.args),
                          e
                        );
                      }
                      r = Z(e, t, function(e) {
                        return function(t, r) {
                          var a = n(t, r);
                          return a.cbIdx >= 0 && "function" == typeof r[a.cbIdx]
                            ? l(a.name, r[a.cbIdx], a, o)
                            : e.apply(t, r);
                        };
                      });
                    }
                    function j(e, t) {
                      e[f("OriginalDelegate")] = t;
                    }
                    var C = !1,
                      x = !1;
                    function L() {
                      try {
                        var e = h.navigator.userAgent;
                        if (
                          -1 !== e.indexOf("MSIE ") ||
                          -1 !== e.indexOf("Trident/")
                        )
                          return !0;
                      } catch (e) {}
                      return !1;
                    }
                    function z() {
                      if (C) return x;
                      C = !0;
                      try {
                        var e = h.navigator.userAgent;
                        (-1 === e.indexOf("MSIE ") &&
                          -1 === e.indexOf("Trident/") &&
                          -1 === e.indexOf("Edge/")) ||
                          (x = !0);
                      } catch (e) {}
                      return x;
                    }
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */ Zone.__load_patch("toString", function(e) {
                      var t = Function.prototype.toString,
                        n = f("OriginalDelegate"),
                        r = f("Promise"),
                        o = f("Error"),
                        a = function() {
                          if ("function" == typeof this) {
                            var a = this[n];
                            if (a)
                              return "function" == typeof a
                                ? t.call(a)
                                : Object.prototype.toString.call(a);
                            if (this === Promise) {
                              var i = e[r];
                              if (i) return t.call(i);
                            }
                            if (this === Error) {
                              var c = e[o];
                              if (c) return t.call(c);
                            }
                          }
                          return t.call(this);
                        };
                      (a[n] = t), (Function.prototype.toString = a);
                      var i = Object.prototype.toString;
                      Object.prototype.toString = function() {
                        return this instanceof Promise
                          ? "[object Promise]"
                          : i.call(this);
                      };
                    });
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    var I = !1;
                    if ("undefined" != typeof window)
                      try {
                        var M = Object.defineProperty({}, "passive", {
                          get: function() {
                            I = !0;
                          }
                        });
                        window.addEventListener("test", M, M),
                          window.removeEventListener("test", M, M);
                      } catch (e) {
                        I = !1;
                      }
                    var R = { useG: !0 },
                      N = {},
                      F = {},
                      A = new RegExp("^" + s + "(\\w+)(true|false)$"),
                      H = f("propagationStopped");
                    function G(e, t) {
                      var n = (t ? t(e) : e) + "false",
                        r = (t ? t(e) : e) + "true",
                        o = s + n,
                        a = s + r;
                      (N[e] = {}), (N[e].false = o), (N[e].true = a);
                    }
                    function B(e, t, r) {
                      var o = (r && r.add) || "addEventListener",
                        a = (r && r.rm) || "removeEventListener",
                        i = (r && r.listeners) || "eventListeners",
                        c = (r && r.rmAll) || "removeAllListeners",
                        u = f(o),
                        l = "." + o + ":",
                        p = function(e, t, n) {
                          if (!e.isRemoved) {
                            var r = e.callback;
                            "object" == typeof r &&
                              r.handleEvent &&
                              ((e.callback = function(e) {
                                return r.handleEvent(e);
                              }),
                              (e.originalDelegate = r)),
                              e.invoke(e, t, [n]);
                            var o = e.options;
                            if (o && "object" == typeof o && o.once) {
                              var i = e.originalDelegate
                                ? e.originalDelegate
                                : e.callback;
                              t[a].call(t, n.type, i, o);
                            }
                          }
                        },
                        h = function(t) {
                          if ((t = t || e.event)) {
                            var n = this || t.target || e,
                              r = n[N[t.type].false];
                            if (r)
                              if (1 === r.length) p(r[0], n, t);
                              else
                                for (
                                  var o = r.slice(), a = 0;
                                  a < o.length && (!t || !0 !== t[H]);
                                  a++
                                )
                                  p(o[a], n, t);
                          }
                        },
                        d = function(t) {
                          if ((t = t || e.event)) {
                            var n = this || t.target || e,
                              r = n[N[t.type].true];
                            if (r)
                              if (1 === r.length) p(r[0], n, t);
                              else
                                for (
                                  var o = r.slice(), a = 0;
                                  a < o.length && (!t || !0 !== t[H]);
                                  a++
                                )
                                  p(o[a], n, t);
                          }
                        };
                      function v(t, r) {
                        if (!t) return !1;
                        var p = !0;
                        r && void 0 !== r.useG && (p = r.useG);
                        var v = r && r.vh,
                          y = !0;
                        r && void 0 !== r.chkDup && (y = r.chkDup);
                        var g = !1;
                        r && void 0 !== r.rt && (g = r.rt);
                        for (var m = t; m && !m.hasOwnProperty(o); ) m = n(m);
                        if ((!m && t[o] && (m = t), !m)) return !1;
                        if (m[u]) return !1;
                        var _,
                          k = r && r.eventNameToString,
                          T = {},
                          E = (m[u] = m[o]),
                          w = (m[f(a)] = m[a]),
                          S = (m[f(i)] = m[i]),
                          O = (m[f(c)] = m[c]);
                        function P(e, t) {
                          return !I && "object" == typeof e && e
                            ? !!e.capture
                            : I && t
                            ? "boolean" == typeof e
                              ? { capture: e, passive: !0 }
                              : e
                              ? "object" == typeof e && !1 !== e.passive
                                ? Object.assign(Object.assign({}, e), {
                                    passive: !0
                                  })
                                : e
                              : { passive: !0 }
                            : e;
                        }
                        r && r.prepend && (_ = m[f(r.prepend)] = m[r.prepend]);
                        var Z = p
                            ? function(e) {
                                if (!T.isExisting)
                                  return E.call(
                                    T.target,
                                    T.eventName,
                                    T.capture ? d : h,
                                    T.options
                                  );
                              }
                            : function(e) {
                                return E.call(
                                  T.target,
                                  T.eventName,
                                  e.invoke,
                                  T.options
                                );
                              },
                          D = p
                            ? function(e) {
                                if (!e.isRemoved) {
                                  var t = N[e.eventName],
                                    n = void 0;
                                  t && (n = t[e.capture ? "true" : "false"]);
                                  var r = n && e.target[n];
                                  if (r)
                                    for (var o = 0; o < r.length; o++)
                                      if (r[o] === e) {
                                        r.splice(o, 1),
                                          (e.isRemoved = !0),
                                          0 === r.length &&
                                            ((e.allRemoved = !0),
                                            (e.target[n] = null));
                                        break;
                                      }
                                }
                                if (e.allRemoved)
                                  return w.call(
                                    e.target,
                                    e.eventName,
                                    e.capture ? d : h,
                                    e.options
                                  );
                              }
                            : function(e) {
                                return w.call(
                                  e.target,
                                  e.eventName,
                                  e.invoke,
                                  e.options
                                );
                              },
                          C =
                            r && r.diff
                              ? r.diff
                              : function(e, t) {
                                  var n = typeof t;
                                  return (
                                    ("function" === n && e.callback === t) ||
                                    ("object" === n && e.originalDelegate === t)
                                  );
                                },
                          x = Zone[f("BLACK_LISTED_EVENTS")],
                          L = e[f("PASSIVE_EVENTS")],
                          z = function(t, n, o, a, i, c) {
                            return (
                              void 0 === i && (i = !1),
                              void 0 === c && (c = !1),
                              function() {
                                var s = this || e,
                                  u = arguments[0];
                                r &&
                                  r.transferEventName &&
                                  (u = r.transferEventName(u));
                                var l = arguments[1];
                                if (!l) return t.apply(this, arguments);
                                if (b && "uncaughtException" === u)
                                  return t.apply(this, arguments);
                                var f = !1;
                                if ("function" != typeof l) {
                                  if (!l.handleEvent)
                                    return t.apply(this, arguments);
                                  f = !0;
                                }
                                if (!v || v(t, l, s, arguments)) {
                                  var h = I && !!L && -1 !== L.indexOf(u),
                                    d = P(arguments[2], h);
                                  if (x)
                                    for (var g = 0; g < x.length; g++)
                                      if (u === x[g])
                                        return h
                                          ? t.call(s, u, l, d)
                                          : t.apply(this, arguments);
                                  var m =
                                      !!d &&
                                      ("boolean" == typeof d || d.capture),
                                    _ = !(!d || "object" != typeof d) && d.once,
                                    E = Zone.current,
                                    w = N[u];
                                  w || (G(u, k), (w = N[u]));
                                  var S,
                                    O = w[m ? "true" : "false"],
                                    Z = s[O],
                                    D = !1;
                                  if (Z) {
                                    if (((D = !0), y))
                                      for (g = 0; g < Z.length; g++)
                                        if (C(Z[g], l)) return;
                                  } else Z = s[O] = [];
                                  var j = s.constructor.name,
                                    z = F[j];
                                  z && (S = z[u]),
                                    S || (S = j + n + (k ? k(u) : u)),
                                    (T.options = d),
                                    _ && (T.options.once = !1),
                                    (T.target = s),
                                    (T.capture = m),
                                    (T.eventName = u),
                                    (T.isExisting = D);
                                  var M = p ? R : void 0;
                                  M && (M.taskData = T);
                                  var A = E.scheduleEventTask(S, l, M, o, a);
                                  return (
                                    (T.target = null),
                                    M && (M.taskData = null),
                                    _ && (d.once = !0),
                                    (I || "boolean" != typeof A.options) &&
                                      (A.options = d),
                                    (A.target = s),
                                    (A.capture = m),
                                    (A.eventName = u),
                                    f && (A.originalDelegate = l),
                                    c ? Z.unshift(A) : Z.push(A),
                                    i ? s : void 0
                                  );
                                }
                              }
                            );
                          };
                        return (
                          (m[o] = z(E, l, Z, D, g)),
                          _ &&
                            (m.prependListener = z(
                              _,
                              ".prependListener:",
                              function(e) {
                                return _.call(
                                  T.target,
                                  T.eventName,
                                  e.invoke,
                                  T.options
                                );
                              },
                              D,
                              g,
                              !0
                            )),
                          (m[a] = function() {
                            var t = this || e,
                              n = arguments[0];
                            r &&
                              r.transferEventName &&
                              (n = r.transferEventName(n));
                            var o = arguments[2],
                              a = !!o && ("boolean" == typeof o || o.capture),
                              i = arguments[1];
                            if (!i) return w.apply(this, arguments);
                            if (!v || v(w, i, t, arguments)) {
                              var c,
                                u = N[n];
                              u && (c = u[a ? "true" : "false"]);
                              var l = c && t[c];
                              if (l)
                                for (var f = 0; f < l.length; f++) {
                                  var p = l[f];
                                  if (C(p, i)) {
                                    if (
                                      (l.splice(f, 1),
                                      (p.isRemoved = !0),
                                      0 === l.length &&
                                        ((p.allRemoved = !0),
                                        (t[c] = null),
                                        "string" == typeof n))
                                    ) {
                                      var h = s + "ON_PROPERTY" + n;
                                      t[h] = null;
                                    }
                                    return p.zone.cancelTask(p), g ? t : void 0;
                                  }
                                }
                              return w.apply(this, arguments);
                            }
                          }),
                          (m[i] = function() {
                            var t = this || e,
                              n = arguments[0];
                            r &&
                              r.transferEventName &&
                              (n = r.transferEventName(n));
                            for (
                              var o = [], a = W(t, k ? k(n) : n), i = 0;
                              i < a.length;
                              i++
                            ) {
                              var c = a[i],
                                s = c.originalDelegate
                                  ? c.originalDelegate
                                  : c.callback;
                              o.push(s);
                            }
                            return o;
                          }),
                          (m[c] = function() {
                            var t = this || e,
                              n = arguments[0];
                            if (n) {
                              r &&
                                r.transferEventName &&
                                (n = r.transferEventName(n));
                              var o = N[n];
                              if (o) {
                                var i = o.false,
                                  s = o.true,
                                  u = t[i],
                                  l = t[s];
                                if (u) {
                                  var f = u.slice();
                                  for (v = 0; v < f.length; v++) {
                                    var p = (h = f[v]).originalDelegate
                                      ? h.originalDelegate
                                      : h.callback;
                                    this[a].call(this, n, p, h.options);
                                  }
                                }
                                if (l)
                                  for (
                                    f = l.slice(), v = 0;
                                    v < f.length;
                                    v++
                                  ) {
                                    var h;
                                    (p = (h = f[v]).originalDelegate
                                      ? h.originalDelegate
                                      : h.callback),
                                      this[a].call(this, n, p, h.options);
                                  }
                              }
                            } else {
                              for (
                                var d = Object.keys(t), v = 0;
                                v < d.length;
                                v++
                              ) {
                                var y = d[v],
                                  m = A.exec(y),
                                  b = m && m[1];
                                b &&
                                  "removeListener" !== b &&
                                  this[c].call(this, b);
                              }
                              this[c].call(this, "removeListener");
                            }
                            if (g) return this;
                          }),
                          j(m[o], E),
                          j(m[a], w),
                          O && j(m[c], O),
                          S && j(m[i], S),
                          !0
                        );
                      }
                      for (var y = [], g = 0; g < t.length; g++)
                        y[g] = v(t[g], r);
                      return y;
                    }
                    function W(e, t) {
                      if (!t) {
                        var n = [];
                        for (var r in e) {
                          var o = A.exec(r),
                            a = o && o[1];
                          if (a && (!t || a === t)) {
                            var i = e[r];
                            if (i)
                              for (var c = 0; c < i.length; c++) n.push(i[c]);
                          }
                        }
                        return n;
                      }
                      var s = N[t];
                      s || (G(t), (s = N[t]));
                      var u = e[s.false],
                        l = e[s.true];
                      return u
                        ? l
                          ? u.concat(l)
                          : u.slice()
                        : l
                        ? l.slice()
                        : [];
                    }
                    function q(e, t) {
                      var n = e.Event;
                      n &&
                        n.prototype &&
                        t.patchMethod(
                          n.prototype,
                          "stopImmediatePropagation",
                          function(e) {
                            return function(t, n) {
                              (t[H] = !0), e && e.apply(t, n);
                            };
                          }
                        );
                    }
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */ function U(e, t, n, r, o) {
                      var a = Zone.__symbol__(r);
                      if (!t[a]) {
                        var i = (t[a] = t[r]);
                        (t[r] = function(a, c, s) {
                          return (
                            c &&
                              c.prototype &&
                              o.forEach(function(t) {
                                var o = n + "." + r + "::" + t,
                                  a = c.prototype;
                                if (a.hasOwnProperty(t)) {
                                  var i = e.ObjectGetOwnPropertyDescriptor(
                                    a,
                                    t
                                  );
                                  i && i.value
                                    ? ((i.value = e.wrapWithCurrentZone(
                                        i.value,
                                        o
                                      )),
                                      e._redefineProperty(c.prototype, t, i))
                                    : a[t] &&
                                      (a[t] = e.wrapWithCurrentZone(a[t], o));
                                } else a[t] && (a[t] = e.wrapWithCurrentZone(a[t], o));
                              }),
                            i.call(t, a, c, s)
                          );
                        }),
                          e.attachOriginToPatched(t[r], i);
                      }
                    }
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */ var V,
                      X,
                      Y,
                      K,
                      J,
                      Q = [
                        "absolutedeviceorientation",
                        "afterinput",
                        "afterprint",
                        "appinstalled",
                        "beforeinstallprompt",
                        "beforeprint",
                        "beforeunload",
                        "devicelight",
                        "devicemotion",
                        "deviceorientation",
                        "deviceorientationabsolute",
                        "deviceproximity",
                        "hashchange",
                        "languagechange",
                        "message",
                        "mozbeforepaint",
                        "offline",
                        "online",
                        "paint",
                        "pageshow",
                        "pagehide",
                        "popstate",
                        "rejectionhandled",
                        "storage",
                        "unhandledrejection",
                        "unload",
                        "userproximity",
                        "vrdisplayconnected",
                        "vrdisplaydisconnected",
                        "vrdisplaypresentchange"
                      ],
                      $ = [
                        "encrypted",
                        "waitingforkey",
                        "msneedkey",
                        "mozinterruptbegin",
                        "mozinterruptend"
                      ],
                      ee = ["load"],
                      te = [
                        "blur",
                        "error",
                        "focus",
                        "load",
                        "resize",
                        "scroll",
                        "messageerror"
                      ],
                      ne = ["bounce", "finish", "start"],
                      re = [
                        "loadstart",
                        "progress",
                        "abort",
                        "error",
                        "load",
                        "progress",
                        "timeout",
                        "loadend",
                        "readystatechange"
                      ],
                      oe = [
                        "upgradeneeded",
                        "complete",
                        "abort",
                        "success",
                        "error",
                        "blocked",
                        "versionchange",
                        "close"
                      ],
                      ae = ["close", "error", "open", "message"],
                      ie = ["error", "message"],
                      ce = [
                        "abort",
                        "animationcancel",
                        "animationend",
                        "animationiteration",
                        "auxclick",
                        "beforeinput",
                        "blur",
                        "cancel",
                        "canplay",
                        "canplaythrough",
                        "change",
                        "compositionstart",
                        "compositionupdate",
                        "compositionend",
                        "cuechange",
                        "click",
                        "close",
                        "contextmenu",
                        "curechange",
                        "dblclick",
                        "drag",
                        "dragend",
                        "dragenter",
                        "dragexit",
                        "dragleave",
                        "dragover",
                        "drop",
                        "durationchange",
                        "emptied",
                        "ended",
                        "error",
                        "focus",
                        "focusin",
                        "focusout",
                        "gotpointercapture",
                        "input",
                        "invalid",
                        "keydown",
                        "keypress",
                        "keyup",
                        "load",
                        "loadstart",
                        "loadeddata",
                        "loadedmetadata",
                        "lostpointercapture",
                        "mousedown",
                        "mouseenter",
                        "mouseleave",
                        "mousemove",
                        "mouseout",
                        "mouseover",
                        "mouseup",
                        "mousewheel",
                        "orientationchange",
                        "pause",
                        "play",
                        "playing",
                        "pointercancel",
                        "pointerdown",
                        "pointerenter",
                        "pointerleave",
                        "pointerlockchange",
                        "mozpointerlockchange",
                        "webkitpointerlockerchange",
                        "pointerlockerror",
                        "mozpointerlockerror",
                        "webkitpointerlockerror",
                        "pointermove",
                        "pointout",
                        "pointerover",
                        "pointerup",
                        "progress",
                        "ratechange",
                        "reset",
                        "resize",
                        "scroll",
                        "seeked",
                        "seeking",
                        "select",
                        "selectionchange",
                        "selectstart",
                        "show",
                        "sort",
                        "stalled",
                        "submit",
                        "suspend",
                        "timeupdate",
                        "volumechange",
                        "touchcancel",
                        "touchmove",
                        "touchstart",
                        "touchend",
                        "transitioncancel",
                        "transitionend",
                        "waiting",
                        "wheel"
                      ].concat(
                        [
                          "webglcontextrestored",
                          "webglcontextlost",
                          "webglcontextcreationerror"
                        ],
                        ["autocomplete", "autocompleteerror"],
                        ["toggle"],
                        [
                          "afterscriptexecute",
                          "beforescriptexecute",
                          "DOMContentLoaded",
                          "freeze",
                          "fullscreenchange",
                          "mozfullscreenchange",
                          "webkitfullscreenchange",
                          "msfullscreenchange",
                          "fullscreenerror",
                          "mozfullscreenerror",
                          "webkitfullscreenerror",
                          "msfullscreenerror",
                          "readystatechange",
                          "visibilitychange",
                          "resume"
                        ],
                        Q,
                        [
                          "beforecopy",
                          "beforecut",
                          "beforepaste",
                          "copy",
                          "cut",
                          "paste",
                          "dragstart",
                          "loadend",
                          "animationstart",
                          "search",
                          "transitionrun",
                          "transitionstart",
                          "webkitanimationend",
                          "webkitanimationiteration",
                          "webkitanimationstart",
                          "webkittransitionend"
                        ],
                        [
                          "activate",
                          "afterupdate",
                          "ariarequest",
                          "beforeactivate",
                          "beforedeactivate",
                          "beforeeditfocus",
                          "beforeupdate",
                          "cellchange",
                          "controlselect",
                          "dataavailable",
                          "datasetchanged",
                          "datasetcomplete",
                          "errorupdate",
                          "filterchange",
                          "layoutcomplete",
                          "losecapture",
                          "move",
                          "moveend",
                          "movestart",
                          "propertychange",
                          "resizeend",
                          "resizestart",
                          "rowenter",
                          "rowexit",
                          "rowsdelete",
                          "rowsinserted",
                          "command",
                          "compassneedscalibration",
                          "deactivate",
                          "help",
                          "mscontentzoom",
                          "msmanipulationstatechanged",
                          "msgesturechange",
                          "msgesturedoubletap",
                          "msgestureend",
                          "msgesturehold",
                          "msgesturestart",
                          "msgesturetap",
                          "msgotpointercapture",
                          "msinertiastart",
                          "mslostpointercapture",
                          "mspointercancel",
                          "mspointerdown",
                          "mspointerenter",
                          "mspointerhover",
                          "mspointerleave",
                          "mspointermove",
                          "mspointerout",
                          "mspointerover",
                          "mspointerup",
                          "pointerout",
                          "mssitemodejumplistitemremoved",
                          "msthumbnailclick",
                          "stop",
                          "storagecommit"
                        ]
                      );
                    function se(e, t, n) {
                      if (!n || 0 === n.length) return t;
                      var r = n.filter(function(t) {
                        return t.target === e;
                      });
                      if (!r || 0 === r.length) return t;
                      var o = r[0].ignoreProperties;
                      return t.filter(function(e) {
                        return -1 === o.indexOf(e);
                      });
                    }
                    function ue(e, t, n, r) {
                      e && S(e, se(e, t, n), r);
                    }
                    function le(e, t) {
                      if ((!b || k) && !Zone[e.symbol("patchEvents")]) {
                        var r = "undefined" != typeof WebSocket,
                          o = t.__Zone_ignore_on_properties;
                        if (_) {
                          var a = window,
                            i = L
                              ? [{ target: a, ignoreProperties: ["error"] }]
                              : [];
                          ue(
                            a,
                            ce.concat(["messageerror"]),
                            o ? o.concat(i) : o,
                            n(a)
                          ),
                            ue(Document.prototype, ce, o),
                            void 0 !== a.SVGElement &&
                              ue(a.SVGElement.prototype, ce, o),
                            ue(Element.prototype, ce, o),
                            ue(HTMLElement.prototype, ce, o),
                            ue(HTMLMediaElement.prototype, $, o),
                            ue(HTMLFrameSetElement.prototype, Q.concat(te), o),
                            ue(HTMLBodyElement.prototype, Q.concat(te), o),
                            ue(HTMLFrameElement.prototype, ee, o),
                            ue(HTMLIFrameElement.prototype, ee, o);
                          var c = a.HTMLMarqueeElement;
                          c && ue(c.prototype, ne, o);
                          var s = a.Worker;
                          s && ue(s.prototype, ie, o);
                        }
                        var u = t.XMLHttpRequest;
                        u && ue(u.prototype, re, o);
                        var l = t.XMLHttpRequestEventTarget;
                        l && ue(l && l.prototype, re, o),
                          "undefined" != typeof IDBIndex &&
                            (ue(IDBIndex.prototype, oe, o),
                            ue(IDBRequest.prototype, oe, o),
                            ue(IDBOpenDBRequest.prototype, oe, o),
                            ue(IDBDatabase.prototype, oe, o),
                            ue(IDBTransaction.prototype, oe, o),
                            ue(IDBCursor.prototype, oe, o)),
                          r && ue(WebSocket.prototype, ae, o);
                      }
                    }
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */ function fe() {
                      (V = Zone.__symbol__),
                        (X = Object[V("defineProperty")] =
                          Object.defineProperty),
                        (Y = Object[V("getOwnPropertyDescriptor")] =
                          Object.getOwnPropertyDescriptor),
                        (K = Object.create),
                        (J = V("unconfigurables")),
                        (Object.defineProperty = function(e, t, n) {
                          if (he(e, t))
                            throw new TypeError(
                              "Cannot assign to read only property '" +
                                t +
                                "' of " +
                                e
                            );
                          var r = n.configurable;
                          return (
                            "prototype" !== t && (n = de(e, t, n)),
                            ve(e, t, n, r)
                          );
                        }),
                        (Object.defineProperties = function(e, t) {
                          return (
                            Object.keys(t).forEach(function(n) {
                              Object.defineProperty(e, n, t[n]);
                            }),
                            e
                          );
                        }),
                        (Object.create = function(e, t) {
                          return (
                            "object" != typeof t ||
                              Object.isFrozen(t) ||
                              Object.keys(t).forEach(function(n) {
                                t[n] = de(e, n, t[n]);
                              }),
                            K(e, t)
                          );
                        }),
                        (Object.getOwnPropertyDescriptor = function(e, t) {
                          var n = Y(e, t);
                          return n && he(e, t) && (n.configurable = !1), n;
                        });
                    }
                    function pe(e, t, n) {
                      var r = n.configurable;
                      return ve(e, t, (n = de(e, t, n)), r);
                    }
                    function he(e, t) {
                      return e && e[J] && e[J][t];
                    }
                    function de(e, t, n) {
                      return (
                        Object.isFrozen(n) || (n.configurable = !0),
                        n.configurable ||
                          (e[J] ||
                            Object.isFrozen(e) ||
                            X(e, J, { writable: !0, value: {} }),
                          e[J] && (e[J][t] = !0)),
                        n
                      );
                    }
                    function ve(e, t, n, r) {
                      try {
                        return X(e, t, n);
                      } catch (a) {
                        if (!n.configurable) throw a;
                        void 0 === r
                          ? delete n.configurable
                          : (n.configurable = r);
                        try {
                          return X(e, t, n);
                        } catch (r) {
                          var o = null;
                          try {
                            o = JSON.stringify(n);
                          } catch (e) {
                            o = n.toString();
                          }
                          console.log(
                            "Attempting to configure '" +
                              t +
                              "' with descriptor '" +
                              o +
                              "' on object '" +
                              e +
                              "' and got error, giving up: " +
                              r
                          );
                        }
                      }
                    }
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */ function ye(e, t) {
                      var n = t.getGlobalObjects(),
                        r = n.eventNames,
                        o = n.globalSources,
                        a = n.zoneSymbolEventNames,
                        i = n.TRUE_STR,
                        c = n.FALSE_STR,
                        s = n.ZONE_SYMBOL_PREFIX,
                        u = "ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket".split(
                          ","
                        ),
                        l = [],
                        f = e.wtf,
                        p = "Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video".split(
                          ","
                        );
                      f
                        ? (l = p
                            .map(function(e) {
                              return "HTML" + e + "Element";
                            })
                            .concat(u))
                        : e.EventTarget
                        ? l.push("EventTarget")
                        : (l = u);
                      for (
                        var h = e.__Zone_disable_IE_check || !1,
                          d = e.__Zone_enable_cross_context_check || !1,
                          v = t.isIEOrEdge(),
                          y =
                            "function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }",
                          g = {
                            MSPointerCancel: "pointercancel",
                            MSPointerDown: "pointerdown",
                            MSPointerEnter: "pointerenter",
                            MSPointerHover: "pointerhover",
                            MSPointerLeave: "pointerleave",
                            MSPointerMove: "pointermove",
                            MSPointerOut: "pointerout",
                            MSPointerOver: "pointerover",
                            MSPointerUp: "pointerup"
                          },
                          m = 0;
                        m < r.length;
                        m++
                      ) {
                        var b = s + ((w = r[m]) + c),
                          _ = s + (w + i);
                        (a[w] = {}), (a[w][c] = b), (a[w][i] = _);
                      }
                      for (m = 0; m < p.length; m++)
                        for (
                          var k = p[m], T = (o[k] = {}), E = 0;
                          E < r.length;
                          E++
                        ) {
                          var w;
                          T[(w = r[E])] = k + ".addEventListener:" + w;
                        }
                      var S = [];
                      for (m = 0; m < l.length; m++) {
                        var O = e[l[m]];
                        S.push(O && O.prototype);
                      }
                      return (
                        t.patchEventTarget(e, S, {
                          vh: function(e, t, n, r) {
                            if (!h && v) {
                              if (d)
                                try {
                                  var o;
                                  if (
                                    "[object FunctionWrapper]" ===
                                      (o = t.toString()) ||
                                    o == y
                                  )
                                    return e.apply(n, r), !1;
                                } catch (t) {
                                  return e.apply(n, r), !1;
                                }
                              else if (
                                "[object FunctionWrapper]" ===
                                  (o = t.toString()) ||
                                o == y
                              )
                                return e.apply(n, r), !1;
                            } else if (d)
                              try {
                                t.toString();
                              } catch (t) {
                                return e.apply(n, r), !1;
                              }
                            return !0;
                          },
                          transferEventName: function(e) {
                            return g[e] || e;
                          }
                        }),
                        (Zone[t.symbol("patchEventTarget")] = !!e.EventTarget),
                        !0
                      );
                    }
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    function ge(e, t) {
                      var n = e.getGlobalObjects(),
                        r = n.isNode,
                        o = n.isMix;
                      if (
                        (!r || o) &&
                        !(function(e, t) {
                          var n = e.getGlobalObjects(),
                            r = n.isBrowser,
                            o = n.isMix;
                          if (
                            (r || o) &&
                            !e.ObjectGetOwnPropertyDescriptor(
                              HTMLElement.prototype,
                              "onclick"
                            ) &&
                            "undefined" != typeof Element
                          ) {
                            var a = e.ObjectGetOwnPropertyDescriptor(
                              Element.prototype,
                              "onclick"
                            );
                            if (a && !a.configurable) return !1;
                            if (a) {
                              e.ObjectDefineProperty(
                                Element.prototype,
                                "onclick",
                                {
                                  enumerable: !0,
                                  configurable: !0,
                                  get: function() {
                                    return !0;
                                  }
                                }
                              );
                              var i = !!document.createElement("div").onclick;
                              return (
                                e.ObjectDefineProperty(
                                  Element.prototype,
                                  "onclick",
                                  a
                                ),
                                i
                              );
                            }
                          }
                          var c = t.XMLHttpRequest;
                          if (!c) return !1;
                          var s = c.prototype,
                            u = e.ObjectGetOwnPropertyDescriptor(
                              s,
                              "onreadystatechange"
                            );
                          if (u)
                            return (
                              e.ObjectDefineProperty(s, "onreadystatechange", {
                                enumerable: !0,
                                configurable: !0,
                                get: function() {
                                  return !0;
                                }
                              }),
                              (i = !!(f = new c()).onreadystatechange),
                              e.ObjectDefineProperty(
                                s,
                                "onreadystatechange",
                                u || {}
                              ),
                              i
                            );
                          var l = e.symbol("fake");
                          e.ObjectDefineProperty(s, "onreadystatechange", {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                              return this[l];
                            },
                            set: function(e) {
                              this[l] = e;
                            }
                          });
                          var f = new c(),
                            p = function() {};
                          return (
                            (f.onreadystatechange = p),
                            (i = f[l] === p),
                            (f.onreadystatechange = null),
                            i
                          );
                        })(e, t)
                      ) {
                        var a = "undefined" != typeof WebSocket;
                        !(function(e) {
                          for (
                            var t = e.getGlobalObjects().eventNames,
                              n = e.symbol("unbound"),
                              r = function(r) {
                                var o = t[r],
                                  a = "on" + o;
                                self.addEventListener(
                                  o,
                                  function(t) {
                                    var r,
                                      o,
                                      i = t.target;
                                    for (
                                      o = i
                                        ? i.constructor.name + "." + a
                                        : "unknown." + a;
                                      i;

                                    )
                                      i[a] &&
                                        !i[a][n] &&
                                        (((r = e.wrapWithCurrentZone(i[a], o))[
                                          n
                                        ] = i[a]),
                                        (i[a] = r)),
                                        (i = i.parentElement);
                                  },
                                  !0
                                );
                              },
                              o = 0;
                            o < t.length;
                            o++
                          )
                            r(o);
                        })(
                          /**
                           * @license
                           * Copyright Google Inc. All Rights Reserved.
                           *
                           * Use of this source code is governed by an MIT-style license that can be
                           * found in the LICENSE file at https://angular.io/license
                           */ e
                        ),
                          e.patchClass("XMLHttpRequest"),
                          a &&
                            (function(e, t) {
                              var n = e.getGlobalObjects(),
                                r = n.ADD_EVENT_LISTENER_STR,
                                o = n.REMOVE_EVENT_LISTENER_STR,
                                a = t.WebSocket;
                              t.EventTarget ||
                                e.patchEventTarget(t, [a.prototype]),
                                (t.WebSocket = function(t, n) {
                                  var i,
                                    c,
                                    s =
                                      arguments.length > 1
                                        ? new a(t, n)
                                        : new a(t),
                                    u = e.ObjectGetOwnPropertyDescriptor(
                                      s,
                                      "onmessage"
                                    );
                                  return (
                                    u && !1 === u.configurable
                                      ? ((i = e.ObjectCreate(s)),
                                        (c = s),
                                        [r, o, "send", "close"].forEach(
                                          function(t) {
                                            i[t] = function() {
                                              var n = e.ArraySlice.call(
                                                arguments
                                              );
                                              if (t === r || t === o) {
                                                var a =
                                                  n.length > 0 ? n[0] : void 0;
                                                if (a) {
                                                  var c = Zone.__symbol__(
                                                    "ON_PROPERTY" + a
                                                  );
                                                  s[c] = i[c];
                                                }
                                              }
                                              return s[t].apply(s, n);
                                            };
                                          }
                                        ))
                                      : (i = s),
                                    e.patchOnProperties(
                                      i,
                                      ["close", "error", "message", "open"],
                                      c
                                    ),
                                    i
                                  );
                                });
                              var i = t.WebSocket;
                              for (var c in a) i[c] = a[c];
                            })(e, t),
                          (Zone[e.symbol("patchEvents")] = !0);
                      }
                    }
                    Zone.__load_patch("util", function(n, r, i) {
                      (i.patchOnProperties = S),
                        (i.patchMethod = Z),
                        (i.bindArguments = y),
                        (i.patchMacroTask = D);
                      var c = r.__symbol__("BLACK_LISTED_EVENTS"),
                        l = r.__symbol__("UNPATCHED_EVENTS");
                      n[l] && (n[c] = n[l]),
                        n[c] && (r[c] = r[l] = n[c]),
                        (i.patchEventPrototype = q),
                        (i.patchEventTarget = B),
                        (i.isIEOrEdge = z),
                        (i.ObjectDefineProperty = t),
                        (i.ObjectGetOwnPropertyDescriptor = e),
                        (i.ObjectCreate = o),
                        (i.ArraySlice = a),
                        (i.patchClass = P),
                        (i.wrapWithCurrentZone = u),
                        (i.filterProperties = se),
                        (i.attachOriginToPatched = j),
                        (i._redefineProperty = Object.defineProperty),
                        (i.patchCallbacks = U),
                        (i.getGlobalObjects = function() {
                          return {
                            globalSources: F,
                            zoneSymbolEventNames: N,
                            eventNames: ce,
                            isBrowser: _,
                            isMix: k,
                            isNode: b,
                            TRUE_STR: "true",
                            FALSE_STR: "false",
                            ZONE_SYMBOL_PREFIX: s,
                            ADD_EVENT_LISTENER_STR: "addEventListener",
                            REMOVE_EVENT_LISTENER_STR: "removeEventListener"
                          };
                        });
                    }),
                      /**
                       * @license
                       * Copyright Google Inc. All Rights Reserved.
                       *
                       * Use of this source code is governed by an MIT-style license that can be
                       * found in the LICENSE file at https://angular.io/license
                       */
                      (function(e) {
                        var t,
                          n = e.__Zone_symbol_prefix || "__zone_symbol__";
                        e[((t = "legacyPatch"), n + t)] = function() {
                          var t = e.Zone;
                          t.__load_patch("defineProperty", function(e, t, n) {
                            (n._redefineProperty = pe), fe();
                          }),
                            t.__load_patch("registerElement", function(
                              e,
                              t,
                              n
                            ) {
                              !(function(e, t) {
                                var n = t.getGlobalObjects(),
                                  r = n.isBrowser,
                                  o = n.isMix;
                                (r || o) &&
                                  "registerElement" in e.document &&
                                  t.patchCallbacks(
                                    t,
                                    document,
                                    "Document",
                                    "registerElement",
                                    [
                                      "createdCallback",
                                      "attachedCallback",
                                      "detachedCallback",
                                      "attributeChangedCallback"
                                    ]
                                  );
                              })(e, n);
                            }),
                            t.__load_patch("EventTargetLegacy", function(
                              e,
                              t,
                              n
                            ) {
                              ye(e, n), ge(n, e);
                            });
                        };
                      })(
                        "undefined" != typeof window
                          ? window
                          : void 0 !== r
                          ? r
                          : "undefined" != typeof self
                          ? self
                          : {}
                      );
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    var me = f("zoneTask");
                    function be(e, t, n, r) {
                      var o = null,
                        a = null;
                      n += r;
                      var i = {};
                      function c(t) {
                        var n = t.data;
                        return (
                          (n.args[0] = function() {
                            try {
                              t.invoke.apply(this, arguments);
                            } finally {
                              (t.data && t.data.isPeriodic) ||
                                ("number" == typeof n.handleId
                                  ? delete i[n.handleId]
                                  : n.handleId && (n.handleId[me] = null));
                            }
                          }),
                          (n.handleId = o.apply(e, n.args)),
                          t
                        );
                      }
                      function s(e) {
                        return a(e.data.handleId);
                      }
                      (o = Z(e, (t += r), function(n) {
                        return function(o, a) {
                          if ("function" == typeof a[0]) {
                            var u = {
                                isPeriodic: "Interval" === r,
                                delay:
                                  "Timeout" === r || "Interval" === r
                                    ? a[1] || 0
                                    : void 0,
                                args: a
                              },
                              f = l(t, a[0], u, c, s);
                            if (!f) return f;
                            var p = f.data.handleId;
                            return (
                              "number" == typeof p
                                ? (i[p] = f)
                                : p && (p[me] = f),
                              p &&
                                p.ref &&
                                p.unref &&
                                "function" == typeof p.ref &&
                                "function" == typeof p.unref &&
                                ((f.ref = p.ref.bind(p)),
                                (f.unref = p.unref.bind(p))),
                              "number" == typeof p || p ? p : f
                            );
                          }
                          return n.apply(e, a);
                        };
                      })),
                        (a = Z(e, n, function(t) {
                          return function(n, r) {
                            var o,
                              a = r[0];
                            "number" == typeof a
                              ? (o = i[a])
                              : (o = a && a[me]) || (o = a),
                              o && "string" == typeof o.type
                                ? "notScheduled" !== o.state &&
                                  ((o.cancelFn && o.data.isPeriodic) ||
                                    0 === o.runCount) &&
                                  ("number" == typeof a
                                    ? delete i[a]
                                    : a && (a[me] = null),
                                  o.zone.cancelTask(o))
                                : t.apply(e, r);
                          };
                        }));
                    }
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    function _e(e, t) {
                      if (!Zone[t.symbol("patchEventTarget")]) {
                        for (
                          var n = t.getGlobalObjects(),
                            r = n.eventNames,
                            o = n.zoneSymbolEventNames,
                            a = n.TRUE_STR,
                            i = n.FALSE_STR,
                            c = n.ZONE_SYMBOL_PREFIX,
                            s = 0;
                          s < r.length;
                          s++
                        ) {
                          var u = r[s],
                            l = c + (u + i),
                            f = c + (u + a);
                          (o[u] = {}), (o[u][i] = l), (o[u][a] = f);
                        }
                        var p = e.EventTarget;
                        if (p && p.prototype)
                          return t.patchEventTarget(e, [p && p.prototype]), !0;
                      }
                    }
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    Zone.__load_patch("legacy", function(e) {
                      var t = e[Zone.__symbol__("legacyPatch")];
                      t && t();
                    }),
                      Zone.__load_patch("timers", function(e) {
                        be(e, "set", "clear", "Timeout"),
                          be(e, "set", "clear", "Interval"),
                          be(e, "set", "clear", "Immediate");
                      }),
                      Zone.__load_patch("requestAnimationFrame", function(e) {
                        be(e, "request", "cancel", "AnimationFrame"),
                          be(e, "mozRequest", "mozCancel", "AnimationFrame"),
                          be(
                            e,
                            "webkitRequest",
                            "webkitCancel",
                            "AnimationFrame"
                          );
                      }),
                      Zone.__load_patch("blocking", function(e, t) {
                        for (
                          var n = ["alert", "prompt", "confirm"], r = 0;
                          r < n.length;
                          r++
                        )
                          Z(e, n[r], function(n, r, o) {
                            return function(r, a) {
                              return t.current.run(n, e, a, o);
                            };
                          });
                      }),
                      Zone.__load_patch("EventTarget", function(e, t, n) {
                        !(function(e, t) {
                          t.patchEventPrototype(e, t);
                        })(e, n),
                          _e(e, n);
                        var r = e.XMLHttpRequestEventTarget;
                        r &&
                          r.prototype &&
                          n.patchEventTarget(e, [r.prototype]),
                          P("MutationObserver"),
                          P("WebKitMutationObserver"),
                          P("IntersectionObserver"),
                          P("FileReader");
                      }),
                      Zone.__load_patch("on_property", function(e, t, n) {
                        le(n, e);
                      }),
                      Zone.__load_patch("customElements", function(e, t, n) {
                        !(function(e, t) {
                          var n = t.getGlobalObjects(),
                            r = n.isBrowser,
                            o = n.isMix;
                          (r || o) &&
                            e.customElements &&
                            "customElements" in e &&
                            t.patchCallbacks(
                              t,
                              e.customElements,
                              "customElements",
                              "define",
                              [
                                "connectedCallback",
                                "disconnectedCallback",
                                "adoptedCallback",
                                "attributeChangedCallback"
                              ]
                            );
                        })(e, n);
                      }),
                      Zone.__load_patch("XHR", function(e, t) {
                        !(function(e) {
                          var p = e.XMLHttpRequest;
                          if (p) {
                            var h = p.prototype,
                              d = h[i],
                              v = h[c];
                            if (!d) {
                              var y = e.XMLHttpRequestEventTarget;
                              if (y) {
                                var g = y.prototype;
                                (d = g[i]), (v = g[c]);
                              }
                            }
                            var m = Z(h, "open", function() {
                                return function(e, t) {
                                  return (
                                    (e[r] = 0 == t[2]),
                                    (e[s] = t[1]),
                                    m.apply(e, t)
                                  );
                                };
                              }),
                              b = f("fetchTaskAborting"),
                              _ = f("fetchTaskScheduling"),
                              k = Z(h, "send", function() {
                                return function(e, n) {
                                  if (!0 === t.current[_]) return k.apply(e, n);
                                  if (e[r]) return k.apply(e, n);
                                  var o = {
                                      target: e,
                                      url: e[s],
                                      isPeriodic: !1,
                                      args: n,
                                      aborted: !1
                                    },
                                    a = l("XMLHttpRequest.send", w, o, E, S);
                                  e &&
                                    !0 === e[u] &&
                                    !o.aborted &&
                                    "scheduled" === a.state &&
                                    a.invoke();
                                };
                              }),
                              T = Z(h, "abort", function() {
                                return function(e, r) {
                                  var o = e[n];
                                  if (o && "string" == typeof o.type) {
                                    if (
                                      null == o.cancelFn ||
                                      (o.data && o.data.aborted)
                                    )
                                      return;
                                    o.zone.cancelTask(o);
                                  } else if (!0 === t.current[b]) return T.apply(e, r);
                                };
                              });
                          }
                          function E(e) {
                            var r = e.data,
                              s = r.target;
                            (s[a] = !1), (s[u] = !1);
                            var l = s[o];
                            d || ((d = s[i]), (v = s[c])),
                              l && v.call(s, "readystatechange", l);
                            var f = (s[o] = function() {
                              if (s.readyState === s.DONE)
                                if (
                                  !r.aborted &&
                                  s[a] &&
                                  "scheduled" === e.state
                                ) {
                                  var n = s[t.__symbol__("loadfalse")];
                                  if (n && n.length > 0) {
                                    var o = e.invoke;
                                    (e.invoke = function() {
                                      for (
                                        var n = s[t.__symbol__("loadfalse")],
                                          a = 0;
                                        a < n.length;
                                        a++
                                      )
                                        n[a] === e && n.splice(a, 1);
                                      r.aborted ||
                                        "scheduled" !== e.state ||
                                        o.call(e);
                                    }),
                                      n.push(e);
                                  } else e.invoke();
                                } else r.aborted || !1 !== s[a] || (s[u] = !0);
                            });
                            return (
                              d.call(s, "readystatechange", f),
                              s[n] || (s[n] = e),
                              k.apply(s, r.args),
                              (s[a] = !0),
                              e
                            );
                          }
                          function w() {}
                          function S(e) {
                            var t = e.data;
                            return (t.aborted = !0), T.apply(t.target, t.args);
                          }
                        })(e);
                        var n = f("xhrTask"),
                          r = f("xhrSync"),
                          o = f("xhrListener"),
                          a = f("xhrScheduled"),
                          s = f("xhrURL"),
                          u = f("xhrErrorBeforeScheduled");
                      }),
                      Zone.__load_patch("geolocation", function(t) {
                        t.navigator &&
                          t.navigator.geolocation &&
                          (function(t, n) {
                            for (
                              var r = t.constructor.name,
                                o = function(o) {
                                  var a = n[o],
                                    i = t[a];
                                  if (i) {
                                    if (!g(e(t, a))) return "continue";
                                    t[a] = (function(e) {
                                      var t = function() {
                                        return e.apply(
                                          this,
                                          y(arguments, r + "." + a)
                                        );
                                      };
                                      return j(t, e), t;
                                    })(i);
                                  }
                                },
                                a = 0;
                              a < n.length;
                              a++
                            )
                              o(a);
                          })(t.navigator.geolocation, [
                            "getCurrentPosition",
                            "watchPosition"
                          ]);
                      }),
                      Zone.__load_patch("PromiseRejectionEvent", function(
                        e,
                        t
                      ) {
                        function n(t) {
                          return function(n) {
                            W(e, t).forEach(function(r) {
                              var o = e.PromiseRejectionEvent;
                              if (o) {
                                var a = new o(t, {
                                  promise: n.promise,
                                  reason: n.rejection
                                });
                                r.invoke(a);
                              }
                            });
                          };
                        }
                        e.PromiseRejectionEvent &&
                          ((t[f("unhandledPromiseRejectionHandler")] = n(
                            "unhandledrejection"
                          )),
                          (t[f("rejectionHandledHandler")] = n(
                            "rejectionhandled"
                          )));
                      });
                  })
                    ? o.call(t, n, t, e)
                    : o) || (e.exports = a);
            }.call(this, n(7)));
          },
          function(e, t) {
            var n;
            n = (function() {
              return this;
            })();
            try {
              n = n || new Function("return this")();
            } catch (e) {
              "object" == typeof window && (n = window);
            }
            e.exports = n;
          },
          function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
              o = n.n(r),
              a = n(1),
              i = n.n(a),
              c = (n(6), n(2)),
              s = n(3),
              u = n.n(s),
              l = n(4),
              f = n.n(l),
              p = (function() {
                function e() {
                  u()(this, e), (this.stores = []);
                }
                return (
                  f()(e, [
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
                            var n = t.getState();
                            e[n.namespace] = n;
                          }),
                          e
                        );
                      }
                    }
                  ]),
                  e
                );
              })();
            function h(e) {
              return function(t) {
                return !e || t.hash.startsWith("#".concat(e));
              };
            }
            function d(e, t, n, r, o) {
              return v.apply(this, arguments);
            }
            function v() {
              return (v = i()(
                o.a.mark(function e(t, n, r, a, i) {
                  var s, u;
                  return o.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((s = {}),
                              (u = { globalEventDistributor: i }),
                              (e.prev = 1),
                              !a)
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (e.next = 5), System.import(a);
                          case 5:
                            (e.t0 = e.sent), (e.next = 9);
                            break;
                          case 8:
                            e.t0 = { storeInstance: null };
                          case 9:
                            (s = e.t0), (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12),
                              (e.t1 = e.catch(1)),
                              console.error(
                                "Could not load store of app ".concat(t, "."),
                                e.t1
                              );
                          case 15:
                            s.storeInstance &&
                              i &&
                              ((u.store = s.storeInstance),
                              i.registerStore(s.storeInstance)),
                              c.registerApplication(
                                t,
                                function() {
                                  return System.import(r);
                                },
                                h(n),
                                u
                              );
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 12]]
                  );
                })
              )).apply(this, arguments);
            }
            function y() {
              return (y = i()(
                o.a.mark(function e() {
                  var t, n;
                  return o.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = new p()),
                            (n = []).push(
                              d("@briuin/avatar", "", "@briuin/avatar", null, t)
                            ),
                            n.push(
                              d(
                                "@briuin/timeline",
                                null,
                                "@briuin/timeline",
                                "@briuin/timeline/store",
                                t
                              )
                            ),
                            n.push(
                              d(
                                "@briuin/experience",
                                null,
                                "@briuin/experience",
                                null,
                                t
                              )
                            ),
                            (e.next = 7),
                            Promise.all(n)
                          );
                        case 7:
                          c.start();
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            !(function() {
              y.apply(this, arguments);
            })();
          }
        ])
      );
    }
  };
});
//# sourceMappingURL=app.js.map
