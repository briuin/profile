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
            r((r.s = 9))
          );
        })([
          function(e, t, r) {
            e.exports = r(6);
          },
          function(e, t) {
            function r(e, t, r, n, o, i, a) {
              try {
                var s = e[i](a),
                  c = s.value;
              } catch (e) {
                return void r(e);
              }
              s.done ? t(c) : Promise.resolve(c).then(n, o);
            }
            e.exports = function(e) {
              return function() {
                var t = this,
                  n = arguments;
                return new Promise(function(o, i) {
                  var a = e.apply(t, n);
                  function s(e) {
                    r(a, o, i, s, c, "next", e);
                  }
                  function c(e) {
                    r(a, o, i, s, c, "throw", e);
                  }
                  s(void 0);
                });
              };
            };
          },
          function(e, r) {
            e.exports = t;
          },
          function(e, t) {
            e.exports = function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            };
          },
          function(e, t) {
            function r(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            e.exports = function(e, t, n) {
              return t && r(e.prototype, t), n && r(e, n), e;
            };
          },
          function(e, t) {
            e.exports = function(e, t, r) {
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
            };
          },
          function(e, t, r) {
            var n = (function(e) {
              "use strict";
              var t = Object.prototype,
                r = t.hasOwnProperty,
                n = "function" == typeof Symbol ? Symbol : {},
                o = n.iterator || "@@iterator",
                i = n.asyncIterator || "@@asyncIterator",
                a = n.toStringTag || "@@toStringTag";
              function s(e, t, r, n) {
                var o = t && t.prototype instanceof l ? t : l,
                  i = Object.create(o.prototype),
                  a = new w(n || []);
                return (
                  (i._invoke = (function(e, t, r) {
                    var n = "suspendedStart";
                    return function(o, i) {
                      if ("executing" === n)
                        throw new Error("Generator is already running");
                      if ("completed" === n) {
                        if ("throw" === o) throw i;
                        return T();
                      }
                      for (r.method = o, r.arg = i; ; ) {
                        var a = r.delegate;
                        if (a) {
                          var s = m(a, r);
                          if (s) {
                            if (s === u) continue;
                            return s;
                          }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                          if ("suspendedStart" === n)
                            throw ((n = "completed"), r.arg);
                          r.dispatchException(r.arg);
                        } else
                          "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var l = c(e, t, r);
                        if ("normal" === l.type) {
                          if (
                            ((n = r.done ? "completed" : "suspendedYield"),
                            l.arg === u)
                          )
                            continue;
                          return { value: l.arg, done: r.done };
                        }
                        "throw" === l.type &&
                          ((n = "completed"),
                          (r.method = "throw"),
                          (r.arg = l.arg));
                      }
                    };
                  })(e, r, a)),
                  i
                );
              }
              function c(e, t, r) {
                try {
                  return { type: "normal", arg: e.call(t, r) };
                } catch (e) {
                  return { type: "throw", arg: e };
                }
              }
              e.wrap = s;
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
              v && v !== t && r.call(v, o) && (h = v);
              var y = (p.prototype = l.prototype = Object.create(h));
              function b(e) {
                ["next", "throw", "return"].forEach(function(t) {
                  e[t] = function(e) {
                    return this._invoke(t, e);
                  };
                });
              }
              function g(e, t) {
                var n;
                this._invoke = function(o, i) {
                  function a() {
                    return new t(function(n, a) {
                      !(function n(o, i, a, s) {
                        var u = c(e[o], e, i);
                        if ("throw" !== u.type) {
                          var l = u.arg,
                            f = l.value;
                          return f &&
                            "object" == typeof f &&
                            r.call(f, "__await")
                            ? t.resolve(f.__await).then(
                                function(e) {
                                  n("next", e, a, s);
                                },
                                function(e) {
                                  n("throw", e, a, s);
                                }
                              )
                            : t.resolve(f).then(
                                function(e) {
                                  (l.value = e), a(l);
                                },
                                function(e) {
                                  return n("throw", e, a, s);
                                }
                              );
                        }
                        s(u.arg);
                      })(o, i, n, a);
                    });
                  }
                  return (n = n ? n.then(a, a) : a());
                };
              }
              function m(e, t) {
                var r = e.iterator[t.method];
                if (void 0 === r) {
                  if (((t.delegate = null), "throw" === t.method)) {
                    if (
                      e.iterator.return &&
                      ((t.method = "return"),
                      (t.arg = void 0),
                      m(e, t),
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
                var n = c(r, e.iterator, t.arg);
                if ("throw" === n.type)
                  return (
                    (t.method = "throw"),
                    (t.arg = n.arg),
                    (t.delegate = null),
                    u
                  );
                var o = n.arg;
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
              function w(e) {
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
                    var n = -1,
                      i = function t() {
                        for (; ++n < e.length; )
                          if (r.call(e, n))
                            return (t.value = e[n]), (t.done = !1), t;
                        return (t.value = void 0), (t.done = !0), t;
                      };
                    return (i.next = i);
                  }
                }
                return { next: T };
              }
              function T() {
                return { value: void 0, done: !0 };
              }
              return (
                (f.prototype = y.constructor = p),
                (p.constructor = f),
                (p[a] = f.displayName = "GeneratorFunction"),
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
                        a in e || (e[a] = "GeneratorFunction")),
                    (e.prototype = Object.create(y)),
                    e
                  );
                }),
                (e.awrap = function(e) {
                  return { __await: e };
                }),
                b(g.prototype),
                (g.prototype[i] = function() {
                  return this;
                }),
                (e.AsyncIterator = g),
                (e.async = function(t, r, n, o, i) {
                  void 0 === i && (i = Promise);
                  var a = new g(s(t, r, n, o), i);
                  return e.isGeneratorFunction(r)
                    ? a
                    : a.next().then(function(e) {
                        return e.done ? e.value : a.next();
                      });
                }),
                b(y),
                (y[a] = "Generator"),
                (y[o] = function() {
                  return this;
                }),
                (y.toString = function() {
                  return "[object Generator]";
                }),
                (e.keys = function(e) {
                  var t = [];
                  for (var r in e) t.push(r);
                  return (
                    t.reverse(),
                    function r() {
                      for (; t.length; ) {
                        var n = t.pop();
                        if (n in e) return (r.value = n), (r.done = !1), r;
                      }
                      return (r.done = !0), r;
                    }
                  );
                }),
                (e.values = E),
                (w.prototype = {
                  constructor: w,
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
                          r.call(this, t) &&
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
                    function n(r, n) {
                      return (
                        (a.type = "throw"),
                        (a.arg = e),
                        (t.next = r),
                        n && ((t.method = "next"), (t.arg = void 0)),
                        !!n
                      );
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                      var i = this.tryEntries[o],
                        a = i.completion;
                      if ("root" === i.tryLoc) return n("end");
                      if (i.tryLoc <= this.prev) {
                        var s = r.call(i, "catchLoc"),
                          c = r.call(i, "finallyLoc");
                        if (s && c) {
                          if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                          if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                        } else if (s) {
                          if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                        } else {
                          if (!c)
                            throw new Error(
                              "try statement without catch or finally"
                            );
                          if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                        }
                      }
                    }
                  },
                  abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                      var o = this.tryEntries[n];
                      if (
                        o.tryLoc <= this.prev &&
                        r.call(o, "finallyLoc") &&
                        this.prev < o.finallyLoc
                      ) {
                        var i = o;
                        break;
                      }
                    }
                    i &&
                      ("break" === e || "continue" === e) &&
                      i.tryLoc <= t &&
                      t <= i.finallyLoc &&
                      (i = null);
                    var a = i ? i.completion : {};
                    return (
                      (a.type = e),
                      (a.arg = t),
                      i
                        ? ((this.method = "next"),
                          (this.next = i.finallyLoc),
                          u)
                        : this.complete(a)
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
                      var r = this.tryEntries[t];
                      if (r.finallyLoc === e)
                        return this.complete(r.completion, r.afterLoc), k(r), u;
                    }
                  },
                  catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                      var r = this.tryEntries[t];
                      if (r.tryLoc === e) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                          var o = n.arg;
                          k(r);
                        }
                        return o;
                      }
                    }
                    throw new Error("illegal catch attempt");
                  },
                  delegateYield: function(e, t, r) {
                    return (
                      (this.delegate = {
                        iterator: E(e),
                        resultName: t,
                        nextLoc: r
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
              regeneratorRuntime = n;
            } catch (e) {
              Function("r", "regeneratorRuntime = r")(n);
            }
          },
          function(e, t, r) {
            (function(n) {
              var o, i;
              /**
               * @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
               * (c) 2010-2020 Google LLC. https://angular.io/
               * License: MIT
               */ void 0 ===
                (i =
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
                      function r(e) {
                        t && t.mark && t.mark(e);
                      }
                      function n(e, r) {
                        t && t.measure && t.measure(e, r);
                      }
                      r("Zone");
                      var o = e.__Zone_symbol_prefix || "__zone_symbol__";
                      function i(e) {
                        return o + e;
                      }
                      var a = !0 === e[i("forceDuplicateZoneCheck")];
                      if (e.Zone) {
                        if (a || "function" != typeof e.Zone.__symbol__)
                          throw new Error("Zone already loaded.");
                        return e.Zone;
                      }
                      var s = (function() {
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
                              return Z.zone;
                            },
                            enumerable: !0,
                            configurable: !0
                          }),
                          Object.defineProperty(t, "currentTask", {
                            get: function() {
                              return C;
                            },
                            enumerable: !0,
                            configurable: !0
                          }),
                          (t.__load_patch = function(o, i) {
                            if (D.hasOwnProperty(o)) {
                              if (a) throw Error("Already loaded patch: " + o);
                            } else if (!e["__Zone_disable_" + o]) {
                              var s = "Zone:" + o;
                              r(s), (D[o] = i(e, t, x)), n(s, s);
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
                            var r = this._zoneDelegate.intercept(this, e, t),
                              n = this;
                            return function() {
                              return n.runGuarded(r, this, arguments, t);
                            };
                          }),
                          (t.prototype.run = function(e, t, r, n) {
                            Z = { parent: Z, zone: this };
                            try {
                              return this._zoneDelegate.invoke(
                                this,
                                e,
                                t,
                                r,
                                n
                              );
                            } finally {
                              Z = Z.parent;
                            }
                          }),
                          (t.prototype.runGuarded = function(e, t, r, n) {
                            void 0 === t && (t = null),
                              (Z = { parent: Z, zone: this });
                            try {
                              try {
                                return this._zoneDelegate.invoke(
                                  this,
                                  e,
                                  t,
                                  r,
                                  n
                                );
                              } catch (e) {
                                if (this._zoneDelegate.handleError(this, e))
                                  throw e;
                              }
                            } finally {
                              Z = Z.parent;
                            }
                          }),
                          (t.prototype.runTask = function(e, t, r) {
                            if (e.zone != this)
                              throw new Error(
                                "A task can only be run in the zone of creation! (Creation: " +
                                  (e.zone || m).name +
                                  "; Execution: " +
                                  this.name +
                                  ")"
                              );
                            if (
                              e.state !== _ ||
                              (e.type !== j && e.type !== P)
                            ) {
                              var n = e.state != E;
                              n && e._transitionTo(E, w), e.runCount++;
                              var o = C;
                              (C = e), (Z = { parent: Z, zone: this });
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
                                    r
                                  );
                                } catch (e) {
                                  if (this._zoneDelegate.handleError(this, e))
                                    throw e;
                                }
                              } finally {
                                e.state !== _ &&
                                  e.state !== S &&
                                  (e.type == j || (e.data && e.data.isPeriodic)
                                    ? n && e._transitionTo(w, E)
                                    : ((e.runCount = 0),
                                      this._updateTaskCount(e, -1),
                                      n && e._transitionTo(_, E, _))),
                                  (Z = Z.parent),
                                  (C = o);
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
                            var r = [];
                            (e._zoneDelegates = r), (e._zone = this);
                            try {
                              e = this._zoneDelegate.scheduleTask(this, e);
                            } catch (t) {
                              throw (e._transitionTo(S, k, _),
                              this._zoneDelegate.handleError(this, t),
                              t);
                            }
                            return (
                              e._zoneDelegates === r &&
                                this._updateTaskCount(e, 1),
                              e.state == k && e._transitionTo(w, k),
                              e
                            );
                          }),
                          (t.prototype.scheduleMicroTask = function(
                            e,
                            t,
                            r,
                            n
                          ) {
                            return this.scheduleTask(
                              new f(O, e, t, r, n, void 0)
                            );
                          }),
                          (t.prototype.scheduleMacroTask = function(
                            e,
                            t,
                            r,
                            n,
                            o
                          ) {
                            return this.scheduleTask(new f(P, e, t, r, n, o));
                          }),
                          (t.prototype.scheduleEventTask = function(
                            e,
                            t,
                            r,
                            n,
                            o
                          ) {
                            return this.scheduleTask(new f(j, e, t, r, n, o));
                          }),
                          (t.prototype.cancelTask = function(e) {
                            if (e.zone != this)
                              throw new Error(
                                "A task can only be cancelled in the zone of creation! (Creation: " +
                                  (e.zone || m).name +
                                  "; Execution: " +
                                  this.name +
                                  ")"
                              );
                            e._transitionTo(T, w, E);
                            try {
                              this._zoneDelegate.cancelTask(this, e);
                            } catch (t) {
                              throw (e._transitionTo(S, T),
                              this._zoneDelegate.handleError(this, t),
                              t);
                            }
                            return (
                              this._updateTaskCount(e, -1),
                              e._transitionTo(_, T),
                              (e.runCount = 0),
                              e
                            );
                          }),
                          (t.prototype._updateTaskCount = function(e, t) {
                            var r = e._zoneDelegates;
                            -1 == t && (e._zoneDelegates = null);
                            for (var n = 0; n < r.length; n++)
                              r[n]._updateTaskCount(e.type, t);
                          }),
                          t
                        );
                      })();
                      s.__symbol__ = i;
                      var c,
                        u = {
                          name: "",
                          onHasTask: function(e, t, r, n) {
                            return e.hasTask(r, n);
                          },
                          onScheduleTask: function(e, t, r, n) {
                            return e.scheduleTask(r, n);
                          },
                          onInvokeTask: function(e, t, r, n, o, i) {
                            return e.invokeTask(r, n, o, i);
                          },
                          onCancelTask: function(e, t, r, n) {
                            return e.cancelTask(r, n);
                          }
                        },
                        l = (function() {
                          function e(e, t, r) {
                            (this._taskCounts = {
                              microTask: 0,
                              macroTask: 0,
                              eventTask: 0
                            }),
                              (this.zone = e),
                              (this._parentDelegate = t),
                              (this._forkZS =
                                r && (r && r.onFork ? r : t._forkZS)),
                              (this._forkDlgt =
                                r && (r.onFork ? t : t._forkDlgt)),
                              (this._forkCurrZone =
                                r && (r.onFork ? this.zone : t._forkCurrZone)),
                              (this._interceptZS =
                                r && (r.onIntercept ? r : t._interceptZS)),
                              (this._interceptDlgt =
                                r && (r.onIntercept ? t : t._interceptDlgt)),
                              (this._interceptCurrZone =
                                r &&
                                (r.onIntercept
                                  ? this.zone
                                  : t._interceptCurrZone)),
                              (this._invokeZS =
                                r && (r.onInvoke ? r : t._invokeZS)),
                              (this._invokeDlgt =
                                r && (r.onInvoke ? t : t._invokeDlgt)),
                              (this._invokeCurrZone =
                                r &&
                                (r.onInvoke ? this.zone : t._invokeCurrZone)),
                              (this._handleErrorZS =
                                r && (r.onHandleError ? r : t._handleErrorZS)),
                              (this._handleErrorDlgt =
                                r &&
                                (r.onHandleError ? t : t._handleErrorDlgt)),
                              (this._handleErrorCurrZone =
                                r &&
                                (r.onHandleError
                                  ? this.zone
                                  : t._handleErrorCurrZone)),
                              (this._scheduleTaskZS =
                                r &&
                                (r.onScheduleTask ? r : t._scheduleTaskZS)),
                              (this._scheduleTaskDlgt =
                                r &&
                                (r.onScheduleTask ? t : t._scheduleTaskDlgt)),
                              (this._scheduleTaskCurrZone =
                                r &&
                                (r.onScheduleTask
                                  ? this.zone
                                  : t._scheduleTaskCurrZone)),
                              (this._invokeTaskZS =
                                r && (r.onInvokeTask ? r : t._invokeTaskZS)),
                              (this._invokeTaskDlgt =
                                r && (r.onInvokeTask ? t : t._invokeTaskDlgt)),
                              (this._invokeTaskCurrZone =
                                r &&
                                (r.onInvokeTask
                                  ? this.zone
                                  : t._invokeTaskCurrZone)),
                              (this._cancelTaskZS =
                                r && (r.onCancelTask ? r : t._cancelTaskZS)),
                              (this._cancelTaskDlgt =
                                r && (r.onCancelTask ? t : t._cancelTaskDlgt)),
                              (this._cancelTaskCurrZone =
                                r &&
                                (r.onCancelTask
                                  ? this.zone
                                  : t._cancelTaskCurrZone)),
                              (this._hasTaskZS = null),
                              (this._hasTaskDlgt = null),
                              (this._hasTaskDlgtOwner = null),
                              (this._hasTaskCurrZone = null);
                            var n = r && r.onHasTask,
                              o = t && t._hasTaskZS;
                            (n || o) &&
                              ((this._hasTaskZS = n ? r : u),
                              (this._hasTaskDlgt = t),
                              (this._hasTaskDlgtOwner = this),
                              (this._hasTaskCurrZone = e),
                              r.onScheduleTask ||
                                ((this._scheduleTaskZS = u),
                                (this._scheduleTaskDlgt = t),
                                (this._scheduleTaskCurrZone = this.zone)),
                              r.onInvokeTask ||
                                ((this._invokeTaskZS = u),
                                (this._invokeTaskDlgt = t),
                                (this._invokeTaskCurrZone = this.zone)),
                              r.onCancelTask ||
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
                                : new s(e, t);
                            }),
                            (e.prototype.intercept = function(e, t, r) {
                              return this._interceptZS
                                ? this._interceptZS.onIntercept(
                                    this._interceptDlgt,
                                    this._interceptCurrZone,
                                    e,
                                    t,
                                    r
                                  )
                                : t;
                            }),
                            (e.prototype.invoke = function(e, t, r, n, o) {
                              return this._invokeZS
                                ? this._invokeZS.onInvoke(
                                    this._invokeDlgt,
                                    this._invokeCurrZone,
                                    e,
                                    t,
                                    r,
                                    n,
                                    o
                                  )
                                : t.apply(r, n);
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
                              var r = t;
                              if (this._scheduleTaskZS)
                                this._hasTaskZS &&
                                  r._zoneDelegates.push(this._hasTaskDlgtOwner),
                                  (r = this._scheduleTaskZS.onScheduleTask(
                                    this._scheduleTaskDlgt,
                                    this._scheduleTaskCurrZone,
                                    e,
                                    t
                                  )) || (r = t);
                              else if (t.scheduleFn) t.scheduleFn(t);
                              else {
                                if (t.type != O)
                                  throw new Error(
                                    "Task is missing scheduleFn."
                                  );
                                b(t);
                              }
                              return r;
                            }),
                            (e.prototype.invokeTask = function(e, t, r, n) {
                              return this._invokeTaskZS
                                ? this._invokeTaskZS.onInvokeTask(
                                    this._invokeTaskDlgt,
                                    this._invokeTaskCurrZone,
                                    e,
                                    t,
                                    r,
                                    n
                                  )
                                : t.callback.apply(r, n);
                            }),
                            (e.prototype.cancelTask = function(e, t) {
                              var r;
                              if (this._cancelTaskZS)
                                r = this._cancelTaskZS.onCancelTask(
                                  this._cancelTaskDlgt,
                                  this._cancelTaskCurrZone,
                                  e,
                                  t
                                );
                              else {
                                if (!t.cancelFn)
                                  throw Error("Task is not cancelable");
                                r = t.cancelFn(t);
                              }
                              return r;
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
                              var r = this._taskCounts,
                                n = r[e],
                                o = (r[e] = n + t);
                              if (o < 0)
                                throw new Error(
                                  "More tasks executed then were scheduled."
                                );
                              if (0 == n || 0 == o) {
                                var i = {
                                  microTask: r.microTask > 0,
                                  macroTask: r.macroTask > 0,
                                  eventTask: r.eventTask > 0,
                                  change: e
                                };
                                this.hasTask(this.zone, i);
                              }
                            }),
                            e
                          );
                        })(),
                        f = (function() {
                          function t(r, n, o, i, a, s) {
                            if (
                              ((this._zone = null),
                              (this.runCount = 0),
                              (this._zoneDelegates = null),
                              (this._state = "notScheduled"),
                              (this.type = r),
                              (this.source = n),
                              (this.data = i),
                              (this.scheduleFn = a),
                              (this.cancelFn = s),
                              !o)
                            )
                              throw new Error("callback is not defined");
                            this.callback = o;
                            var c = this;
                            r === j && i && i.useG
                              ? (this.invoke = t.invokeTask)
                              : (this.invoke = function() {
                                  return t.invokeTask.call(
                                    e,
                                    c,
                                    this,
                                    arguments
                                  );
                                });
                          }
                          return (
                            (t.invokeTask = function(e, t, r) {
                              e || (e = this), L++;
                              try {
                                return e.runCount++, e.zone.runTask(e, t, r);
                              } finally {
                                1 == L && g(), L--;
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
                            (t.prototype._transitionTo = function(e, t, r) {
                              if (this._state !== t && this._state !== r)
                                throw new Error(
                                  this.type +
                                    " '" +
                                    this.source +
                                    "': can not transition to '" +
                                    e +
                                    "', expecting state '" +
                                    t +
                                    "'" +
                                    (r ? " or '" + r + "'" : "") +
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
                        p = i("setTimeout"),
                        h = i("Promise"),
                        d = i("then"),
                        v = [],
                        y = !1;
                      function b(t) {
                        if (0 === L && 0 === v.length)
                          if ((c || (e[h] && (c = e[h].resolve(0))), c)) {
                            var r = c[d];
                            r || (r = c.then), r.call(c, g);
                          } else e[p](g, 0);
                        t && v.push(t);
                      }
                      function g() {
                        if (!y) {
                          for (y = !0; v.length; ) {
                            var e = v;
                            v = [];
                            for (var t = 0; t < e.length; t++) {
                              var r = e[t];
                              try {
                                r.zone.runTask(r, null, null);
                              } catch (e) {
                                x.onUnhandledError(e);
                              }
                            }
                          }
                          x.microtaskDrainDone(), (y = !1);
                        }
                      }
                      var m = { name: "NO ZONE" },
                        _ = "notScheduled",
                        k = "scheduling",
                        w = "scheduled",
                        E = "running",
                        T = "canceling",
                        S = "unknown",
                        O = "microTask",
                        P = "macroTask",
                        j = "eventTask",
                        D = {},
                        x = {
                          symbol: i,
                          currentZoneFrame: function() {
                            return Z;
                          },
                          onUnhandledError: z,
                          microtaskDrainDone: z,
                          scheduleMicroTask: b,
                          showUncaughtError: function() {
                            return !s[i("ignoreConsoleErrorUncaughtError")];
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
                              (c = e.resolve(0));
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
                        Z = { parent: null, zone: new s(null, null) },
                        C = null,
                        L = 0;
                      function z() {}
                      n("Zone", "Zone"), (e.Zone = s);
                    })(
                      ("undefined" != typeof window && window) ||
                        ("undefined" != typeof self && self) ||
                        n
                    ),
                      /**
                       * @license
                       * Copyright Google Inc. All Rights Reserved.
                       *
                       * Use of this source code is governed by an MIT-style license that can be
                       * found in the LICENSE file at https://angular.io/license
                       */
                      Zone.__load_patch("ZoneAwarePromise", function(e, t, r) {
                        var n = Object.getOwnPropertyDescriptor,
                          o = Object.defineProperty,
                          i = r.symbol,
                          a = [],
                          s =
                            !0 ===
                            e[i("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                          c = i("Promise"),
                          u = i("then");
                        (r.onUnhandledError = function(e) {
                          if (r.showUncaughtError()) {
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
                          (r.microtaskDrainDone = function() {
                            for (
                              var e = function() {
                                var e = a.shift();
                                try {
                                  e.zone.runGuarded(function() {
                                    throw e;
                                  });
                                } catch (e) {
                                  !(function(e) {
                                    r.onUnhandledError(e);
                                    try {
                                      var n = t[l];
                                      "function" == typeof n && n.call(this, e);
                                    } catch (e) {}
                                  })(e);
                                }
                              };
                              a.length;

                            )
                              e();
                          });
                        var l = i("unhandledPromiseRejectionHandler");
                        function f(e) {
                          return e && e.then;
                        }
                        function p(e) {
                          return e;
                        }
                        function h(e) {
                          return O.reject(e);
                        }
                        var d = i("state"),
                          v = i("value"),
                          y = i("finally"),
                          b = i("parentPromiseValue"),
                          g = i("parentPromiseState");
                        function m(e, t) {
                          return function(r) {
                            try {
                              k(e, t, r);
                            } catch (t) {
                              k(e, !1, t);
                            }
                          };
                        }
                        var _ = i("currentTaskTrace");
                        function k(e, n, i) {
                          var c,
                            u =
                              ((c = !1),
                              function(e) {
                                return function() {
                                  c || ((c = !0), e.apply(null, arguments));
                                };
                              });
                          if (e === i)
                            throw new TypeError("Promise resolved with itself");
                          if (null === e[d]) {
                            var l = null;
                            try {
                              ("object" != typeof i &&
                                "function" != typeof i) ||
                                (l = i && i.then);
                            } catch (t) {
                              return (
                                u(function() {
                                  k(e, !1, t);
                                })(),
                                e
                              );
                            }
                            if (
                              !1 !== n &&
                              i instanceof O &&
                              i.hasOwnProperty(d) &&
                              i.hasOwnProperty(v) &&
                              null !== i[d]
                            )
                              E(i), k(e, i[d], i[v]);
                            else if (!1 !== n && "function" == typeof l)
                              try {
                                l.call(i, u(m(e, n)), u(m(e, !1)));
                              } catch (t) {
                                u(function() {
                                  k(e, !1, t);
                                })();
                              }
                            else {
                              e[d] = n;
                              var f = e[v];
                              if (
                                ((e[v] = i),
                                e[y] === y &&
                                  !0 === n &&
                                  ((e[d] = e[g]), (e[v] = e[b])),
                                !1 === n && i instanceof Error)
                              ) {
                                var p =
                                  t.currentTask &&
                                  t.currentTask.data &&
                                  t.currentTask.data.__creationTrace__;
                                p &&
                                  o(i, _, {
                                    configurable: !0,
                                    enumerable: !1,
                                    writable: !0,
                                    value: p
                                  });
                              }
                              for (var h = 0; h < f.length; )
                                T(e, f[h++], f[h++], f[h++], f[h++]);
                              if (0 == f.length && 0 == n) {
                                e[d] = 0;
                                var w = i;
                                if (!s)
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
                                        })(i) +
                                        (i && i.stack ? "\n" + i.stack : "")
                                    );
                                  } catch (e) {
                                    w = e;
                                  }
                                (w.rejection = i),
                                  (w.promise = e),
                                  (w.zone = t.current),
                                  (w.task = t.currentTask),
                                  a.push(w),
                                  r.scheduleMicroTask();
                              }
                            }
                          }
                          return e;
                        }
                        var w = i("rejectionHandledHandler");
                        function E(e) {
                          if (0 === e[d]) {
                            try {
                              var r = t[w];
                              r &&
                                "function" == typeof r &&
                                r.call(this, { rejection: e[v], promise: e });
                            } catch (e) {}
                            e[d] = !1;
                            for (var n = 0; n < a.length; n++)
                              e === a[n].promise && a.splice(n, 1);
                          }
                        }
                        function T(e, t, r, n, o) {
                          E(e);
                          var i = e[d],
                            a = i
                              ? "function" == typeof n
                                ? n
                                : p
                              : "function" == typeof o
                              ? o
                              : h;
                          t.scheduleMicroTask(
                            "Promise.then",
                            function() {
                              try {
                                var n = e[v],
                                  o = !!r && y === r[y];
                                o && ((r[b] = n), (r[g] = i));
                                var s = t.run(
                                  a,
                                  void 0,
                                  o && a !== h && a !== p ? [] : [n]
                                );
                                k(r, !0, s);
                              } catch (e) {
                                k(r, !1, e);
                              }
                            },
                            r
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
                                t && t(m(this, !0), m(this, !1));
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
                                  r,
                                  n = new this(function(e, n) {
                                    (t = e), (r = n);
                                  });
                                function o(e) {
                                  t(e);
                                }
                                function i(e) {
                                  r(e);
                                }
                                for (var a = 0, s = e; a < s.length; a++) {
                                  var c = s[a];
                                  f(c) || (c = this.resolve(c)), c.then(o, i);
                                }
                                return n;
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
                                  var r,
                                    n,
                                    o = new this(function(e, t) {
                                      (r = e), (n = t);
                                    }),
                                    i = 2,
                                    a = 0,
                                    s = [],
                                    c = function(e) {
                                      f(e) || (e = u.resolve(e));
                                      var o = a;
                                      try {
                                        e.then(
                                          function(e) {
                                            (s[o] = t ? t.thenCallback(e) : e),
                                              0 == --i && r(s);
                                          },
                                          function(e) {
                                            t
                                              ? ((s[o] = t.errorCallback(e)),
                                                0 == --i && r(s))
                                              : n(e);
                                          }
                                        );
                                      } catch (e) {
                                        n(e);
                                      }
                                      i++, a++;
                                    },
                                    u = this,
                                    l = 0,
                                    p = e;
                                  l < p.length;
                                  l++
                                )
                                  c(p[l]);
                                return 0 == (i -= 2) && r(s), o;
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
                              (e.prototype.then = function(r, n) {
                                var o = this.constructor[Symbol.species];
                                (o && "function" == typeof o) ||
                                  (o = this.constructor || e);
                                var i = new o(S),
                                  a = t.current;
                                return (
                                  null == this[d]
                                    ? this[v].push(a, i, r, n)
                                    : T(this, a, i, r, n),
                                  i
                                );
                              }),
                              (e.prototype.catch = function(e) {
                                return this.then(null, e);
                              }),
                              (e.prototype.finally = function(r) {
                                var n = this.constructor[Symbol.species];
                                (n && "function" == typeof n) || (n = e);
                                var o = new n(S);
                                o[y] = y;
                                var i = t.current;
                                return (
                                  null == this[d]
                                    ? this[v].push(i, o, r, r)
                                    : T(this, i, o, r, r),
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
                        var P = (e[c] = e.Promise),
                          j = t.__symbol__("ZoneAwarePromise"),
                          D = n(e, "Promise");
                        (D && !D.configurable) ||
                          (D && delete D.writable,
                          D && delete D.value,
                          D || (D = { configurable: !0, enumerable: !0 }),
                          (D.get = function() {
                            return e[j] ? e[j] : e[c];
                          }),
                          (D.set = function(t) {
                            t === O
                              ? (e[j] = t)
                              : ((e[c] = t),
                                t.prototype[u] || C(t),
                                r.setNativePromise(t));
                          }),
                          o(e, "Promise", D)),
                          (e.Promise = O);
                        var x,
                          Z = i("thenPatched");
                        function C(e) {
                          var t = e.prototype,
                            r = n(t, "then");
                          if (!r || (!1 !== r.writable && r.configurable)) {
                            var o = t.then;
                            (t[u] = o),
                              (e.prototype.then = function(e, t) {
                                var r = this;
                                return new O(function(e, t) {
                                  o.call(r, e, t);
                                }).then(e, t);
                              }),
                              (e[Z] = !0);
                          }
                        }
                        if (((r.patchThen = C), P)) {
                          C(P);
                          var L = e.fetch;
                          "function" == typeof L &&
                            ((e[r.symbol("fetch")] = L),
                            (e.fetch =
                              ((x = L),
                              function() {
                                var e = x.apply(this, arguments);
                                if (e instanceof O) return e;
                                var t = e.constructor;
                                return t[Z] || C(t), e;
                              })));
                        }
                        return (
                          (Promise[t.__symbol__("uncaughtPromiseErrors")] = a),
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
                      r = Object.getPrototypeOf,
                      o = Object.create,
                      i = Array.prototype.slice,
                      a = Zone.__symbol__("addEventListener"),
                      s = Zone.__symbol__("removeEventListener"),
                      c = Zone.__symbol__("");
                    function u(e, t) {
                      return Zone.current.wrap(e, t);
                    }
                    function l(e, t, r, n, o) {
                      return Zone.current.scheduleMacroTask(e, t, r, n, o);
                    }
                    var f = Zone.__symbol__,
                      p = "undefined" != typeof window,
                      h = p ? window : void 0,
                      d = (p && h) || ("object" == typeof self && self) || n,
                      v = [null];
                    function y(e, t) {
                      for (var r = e.length - 1; r >= 0; r--)
                        "function" == typeof e[r] &&
                          (e[r] = u(e[r], t + "_" + r));
                      return e;
                    }
                    function b(e) {
                      return (
                        !e ||
                        (!1 !== e.writable &&
                          !("function" == typeof e.get && void 0 === e.set))
                      );
                    }
                    var g =
                        "undefined" != typeof WorkerGlobalScope &&
                        self instanceof WorkerGlobalScope,
                      m =
                        !("nw" in d) &&
                        void 0 !== d.process &&
                        "[object process]" === {}.toString.call(d.process),
                      _ = !m && !g && !(!p || !h.HTMLElement),
                      k =
                        void 0 !== d.process &&
                        "[object process]" === {}.toString.call(d.process) &&
                        !g &&
                        !(!p || !h.HTMLElement),
                      w = {},
                      E = function(e) {
                        if ((e = e || d.event)) {
                          var t = w[e.type];
                          t || (t = w[e.type] = f("ON_PROPERTY" + e.type));
                          var r,
                            n = this || e.target || d,
                            o = n[t];
                          if (_ && n === h && "error" === e.type) {
                            var i = e;
                            !0 ===
                              (r =
                                o &&
                                o.call(
                                  this,
                                  i.message,
                                  i.filename,
                                  i.lineno,
                                  i.colno,
                                  i.error
                                )) && e.preventDefault();
                          } else
                            null == (r = o && o.apply(this, arguments)) ||
                              r ||
                              e.preventDefault();
                          return r;
                        }
                      };
                    function T(r, n, o) {
                      var i = e(r, n);
                      if (
                        (!i &&
                          o &&
                          e(o, n) &&
                          (i = { enumerable: !0, configurable: !0 }),
                        i && i.configurable)
                      ) {
                        var a = f("on" + n + "patched");
                        if (!r.hasOwnProperty(a) || !r[a]) {
                          delete i.writable, delete i.value;
                          var s = i.get,
                            c = i.set,
                            u = n.substr(2),
                            l = w[u];
                          l || (l = w[u] = f("ON_PROPERTY" + u)),
                            (i.set = function(e) {
                              var t = this;
                              t || r !== d || (t = d),
                                t &&
                                  (t[l] && t.removeEventListener(u, E),
                                  c && c.apply(t, v),
                                  "function" == typeof e
                                    ? ((t[l] = e), t.addEventListener(u, E, !1))
                                    : (t[l] = null));
                            }),
                            (i.get = function() {
                              var e = this;
                              if ((e || r !== d || (e = d), !e)) return null;
                              var t = e[l];
                              if (t) return t;
                              if (s) {
                                var o = s && s.call(this);
                                if (o)
                                  return (
                                    i.set.call(this, o),
                                    "function" == typeof e.removeAttribute &&
                                      e.removeAttribute(n),
                                    o
                                  );
                              }
                              return null;
                            }),
                            t(r, n, i),
                            (r[a] = !0);
                        }
                      }
                    }
                    function S(e, t, r) {
                      if (t)
                        for (var n = 0; n < t.length; n++) T(e, "on" + t[n], r);
                      else {
                        var o = [];
                        for (var i in e) "on" == i.substr(0, 2) && o.push(i);
                        for (var a = 0; a < o.length; a++) T(e, o[a], r);
                      }
                    }
                    var O = f("originalInstance");
                    function P(e) {
                      var r = d[e];
                      if (r) {
                        (d[f(e)] = r),
                          (d[e] = function() {
                            var t = y(arguments, e);
                            switch (t.length) {
                              case 0:
                                this[O] = new r();
                                break;
                              case 1:
                                this[O] = new r(t[0]);
                                break;
                              case 2:
                                this[O] = new r(t[0], t[1]);
                                break;
                              case 3:
                                this[O] = new r(t[0], t[1], t[2]);
                                break;
                              case 4:
                                this[O] = new r(t[0], t[1], t[2], t[3]);
                                break;
                              default:
                                throw new Error("Arg list too long.");
                            }
                          }),
                          x(d[e], r);
                        var n,
                          o = new r(function() {});
                        for (n in o)
                          ("XMLHttpRequest" === e && "responseBlob" === n) ||
                            (function(r) {
                              "function" == typeof o[r]
                                ? (d[e].prototype[r] = function() {
                                    return this[O][r].apply(this[O], arguments);
                                  })
                                : t(d[e].prototype, r, {
                                    set: function(t) {
                                      "function" == typeof t
                                        ? ((this[O][r] = u(t, e + "." + r)),
                                          x(this[O][r], t))
                                        : (this[O][r] = t);
                                    },
                                    get: function() {
                                      return this[O][r];
                                    }
                                  });
                            })(n);
                        for (n in r)
                          "prototype" !== n &&
                            r.hasOwnProperty(n) &&
                            (d[e][n] = r[n]);
                      }
                    }
                    function j(t, n, o) {
                      for (var i = t; i && !i.hasOwnProperty(n); ) i = r(i);
                      !i && t[n] && (i = t);
                      var a = f(n),
                        s = null;
                      if (
                        i &&
                        !(s = i[a]) &&
                        ((s = i[a] = i[n]), b(i && e(i, n)))
                      ) {
                        var c = o(s, a, n);
                        (i[n] = function() {
                          return c(this, arguments);
                        }),
                          x(i[n], s);
                      }
                      return s;
                    }
                    function D(e, t, r) {
                      var n = null;
                      function o(e) {
                        var t = e.data;
                        return (
                          (t.args[t.cbIdx] = function() {
                            e.invoke.apply(this, arguments);
                          }),
                          n.apply(t.target, t.args),
                          e
                        );
                      }
                      n = j(e, t, function(e) {
                        return function(t, n) {
                          var i = r(t, n);
                          return i.cbIdx >= 0 && "function" == typeof n[i.cbIdx]
                            ? l(i.name, n[i.cbIdx], i, o)
                            : e.apply(t, n);
                        };
                      });
                    }
                    function x(e, t) {
                      e[f("OriginalDelegate")] = t;
                    }
                    var Z = !1,
                      C = !1;
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
                      if (Z) return C;
                      Z = !0;
                      try {
                        var e = h.navigator.userAgent;
                        (-1 === e.indexOf("MSIE ") &&
                          -1 === e.indexOf("Trident/") &&
                          -1 === e.indexOf("Edge/")) ||
                          (C = !0);
                      } catch (e) {}
                      return C;
                    }
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */ Zone.__load_patch("toString", function(e) {
                      var t = Function.prototype.toString,
                        r = f("OriginalDelegate"),
                        n = f("Promise"),
                        o = f("Error"),
                        i = function() {
                          if ("function" == typeof this) {
                            var i = this[r];
                            if (i)
                              return "function" == typeof i
                                ? t.call(i)
                                : Object.prototype.toString.call(i);
                            if (this === Promise) {
                              var a = e[n];
                              if (a) return t.call(a);
                            }
                            if (this === Error) {
                              var s = e[o];
                              if (s) return t.call(s);
                            }
                          }
                          return t.call(this);
                        };
                      (i[r] = t), (Function.prototype.toString = i);
                      var a = Object.prototype.toString;
                      Object.prototype.toString = function() {
                        return this instanceof Promise
                          ? "[object Promise]"
                          : a.call(this);
                      };
                    });
                    /**
                     * @license
                     * Copyright Google Inc. All Rights Reserved.
                     *
                     * Use of this source code is governed by an MIT-style license that can be
                     * found in the LICENSE file at https://angular.io/license
                     */
                    var M = !1;
                    if ("undefined" != typeof window)
                      try {
                        var I = Object.defineProperty({}, "passive", {
                          get: function() {
                            M = !0;
                          }
                        });
                        window.addEventListener("test", I, I),
                          window.removeEventListener("test", I, I);
                      } catch (e) {
                        M = !1;
                      }
                    var R = { useG: !0 },
                      N = {},
                      H = {},
                      F = new RegExp("^" + c + "(\\w+)(true|false)$"),
                      A = f("propagationStopped");
                    function G(e, t) {
                      var r = (t ? t(e) : e) + "false",
                        n = (t ? t(e) : e) + "true",
                        o = c + r,
                        i = c + n;
                      (N[e] = {}), (N[e].false = o), (N[e].true = i);
                    }
                    function B(e, t, n) {
                      var o = (n && n.add) || "addEventListener",
                        i = (n && n.rm) || "removeEventListener",
                        a = (n && n.listeners) || "eventListeners",
                        s = (n && n.rmAll) || "removeAllListeners",
                        u = f(o),
                        l = "." + o + ":",
                        p = function(e, t, r) {
                          if (!e.isRemoved) {
                            var n = e.callback;
                            "object" == typeof n &&
                              n.handleEvent &&
                              ((e.callback = function(e) {
                                return n.handleEvent(e);
                              }),
                              (e.originalDelegate = n)),
                              e.invoke(e, t, [r]);
                            var o = e.options;
                            if (o && "object" == typeof o && o.once) {
                              var a = e.originalDelegate
                                ? e.originalDelegate
                                : e.callback;
                              t[i].call(t, r.type, a, o);
                            }
                          }
                        },
                        h = function(t) {
                          if ((t = t || e.event)) {
                            var r = this || t.target || e,
                              n = r[N[t.type].false];
                            if (n)
                              if (1 === n.length) p(n[0], r, t);
                              else
                                for (
                                  var o = n.slice(), i = 0;
                                  i < o.length && (!t || !0 !== t[A]);
                                  i++
                                )
                                  p(o[i], r, t);
                          }
                        },
                        d = function(t) {
                          if ((t = t || e.event)) {
                            var r = this || t.target || e,
                              n = r[N[t.type].true];
                            if (n)
                              if (1 === n.length) p(n[0], r, t);
                              else
                                for (
                                  var o = n.slice(), i = 0;
                                  i < o.length && (!t || !0 !== t[A]);
                                  i++
                                )
                                  p(o[i], r, t);
                          }
                        };
                      function v(t, n) {
                        if (!t) return !1;
                        var p = !0;
                        n && void 0 !== n.useG && (p = n.useG);
                        var v = n && n.vh,
                          y = !0;
                        n && void 0 !== n.chkDup && (y = n.chkDup);
                        var b = !1;
                        n && void 0 !== n.rt && (b = n.rt);
                        for (var g = t; g && !g.hasOwnProperty(o); ) g = r(g);
                        if ((!g && t[o] && (g = t), !g)) return !1;
                        if (g[u]) return !1;
                        var _,
                          k = n && n.eventNameToString,
                          w = {},
                          E = (g[u] = g[o]),
                          T = (g[f(i)] = g[i]),
                          S = (g[f(a)] = g[a]),
                          O = (g[f(s)] = g[s]);
                        function P(e, t) {
                          return !M && "object" == typeof e && e
                            ? !!e.capture
                            : M && t
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
                        n && n.prepend && (_ = g[f(n.prepend)] = g[n.prepend]);
                        var j = p
                            ? function(e) {
                                if (!w.isExisting)
                                  return E.call(
                                    w.target,
                                    w.eventName,
                                    w.capture ? d : h,
                                    w.options
                                  );
                              }
                            : function(e) {
                                return E.call(
                                  w.target,
                                  w.eventName,
                                  e.invoke,
                                  w.options
                                );
                              },
                          D = p
                            ? function(e) {
                                if (!e.isRemoved) {
                                  var t = N[e.eventName],
                                    r = void 0;
                                  t && (r = t[e.capture ? "true" : "false"]);
                                  var n = r && e.target[r];
                                  if (n)
                                    for (var o = 0; o < n.length; o++)
                                      if (n[o] === e) {
                                        n.splice(o, 1),
                                          (e.isRemoved = !0),
                                          0 === n.length &&
                                            ((e.allRemoved = !0),
                                            (e.target[r] = null));
                                        break;
                                      }
                                }
                                if (e.allRemoved)
                                  return T.call(
                                    e.target,
                                    e.eventName,
                                    e.capture ? d : h,
                                    e.options
                                  );
                              }
                            : function(e) {
                                return T.call(
                                  e.target,
                                  e.eventName,
                                  e.invoke,
                                  e.options
                                );
                              },
                          Z =
                            n && n.diff
                              ? n.diff
                              : function(e, t) {
                                  var r = typeof t;
                                  return (
                                    ("function" === r && e.callback === t) ||
                                    ("object" === r && e.originalDelegate === t)
                                  );
                                },
                          C = Zone[f("BLACK_LISTED_EVENTS")],
                          L = e[f("PASSIVE_EVENTS")],
                          z = function(t, r, o, i, a, s) {
                            return (
                              void 0 === a && (a = !1),
                              void 0 === s && (s = !1),
                              function() {
                                var c = this || e,
                                  u = arguments[0];
                                n &&
                                  n.transferEventName &&
                                  (u = n.transferEventName(u));
                                var l = arguments[1];
                                if (!l) return t.apply(this, arguments);
                                if (m && "uncaughtException" === u)
                                  return t.apply(this, arguments);
                                var f = !1;
                                if ("function" != typeof l) {
                                  if (!l.handleEvent)
                                    return t.apply(this, arguments);
                                  f = !0;
                                }
                                if (!v || v(t, l, c, arguments)) {
                                  var h = M && !!L && -1 !== L.indexOf(u),
                                    d = P(arguments[2], h);
                                  if (C)
                                    for (var b = 0; b < C.length; b++)
                                      if (u === C[b])
                                        return h
                                          ? t.call(c, u, l, d)
                                          : t.apply(this, arguments);
                                  var g =
                                      !!d &&
                                      ("boolean" == typeof d || d.capture),
                                    _ = !(!d || "object" != typeof d) && d.once,
                                    E = Zone.current,
                                    T = N[u];
                                  T || (G(u, k), (T = N[u]));
                                  var S,
                                    O = T[g ? "true" : "false"],
                                    j = c[O],
                                    D = !1;
                                  if (j) {
                                    if (((D = !0), y))
                                      for (b = 0; b < j.length; b++)
                                        if (Z(j[b], l)) return;
                                  } else j = c[O] = [];
                                  var x = c.constructor.name,
                                    z = H[x];
                                  z && (S = z[u]),
                                    S || (S = x + r + (k ? k(u) : u)),
                                    (w.options = d),
                                    _ && (w.options.once = !1),
                                    (w.target = c),
                                    (w.capture = g),
                                    (w.eventName = u),
                                    (w.isExisting = D);
                                  var I = p ? R : void 0;
                                  I && (I.taskData = w);
                                  var F = E.scheduleEventTask(S, l, I, o, i);
                                  return (
                                    (w.target = null),
                                    I && (I.taskData = null),
                                    _ && (d.once = !0),
                                    (M || "boolean" != typeof F.options) &&
                                      (F.options = d),
                                    (F.target = c),
                                    (F.capture = g),
                                    (F.eventName = u),
                                    f && (F.originalDelegate = l),
                                    s ? j.unshift(F) : j.push(F),
                                    a ? c : void 0
                                  );
                                }
                              }
                            );
                          };
                        return (
                          (g[o] = z(E, l, j, D, b)),
                          _ &&
                            (g.prependListener = z(
                              _,
                              ".prependListener:",
                              function(e) {
                                return _.call(
                                  w.target,
                                  w.eventName,
                                  e.invoke,
                                  w.options
                                );
                              },
                              D,
                              b,
                              !0
                            )),
                          (g[i] = function() {
                            var t = this || e,
                              r = arguments[0];
                            n &&
                              n.transferEventName &&
                              (r = n.transferEventName(r));
                            var o = arguments[2],
                              i = !!o && ("boolean" == typeof o || o.capture),
                              a = arguments[1];
                            if (!a) return T.apply(this, arguments);
                            if (!v || v(T, a, t, arguments)) {
                              var s,
                                u = N[r];
                              u && (s = u[i ? "true" : "false"]);
                              var l = s && t[s];
                              if (l)
                                for (var f = 0; f < l.length; f++) {
                                  var p = l[f];
                                  if (Z(p, a)) {
                                    if (
                                      (l.splice(f, 1),
                                      (p.isRemoved = !0),
                                      0 === l.length &&
                                        ((p.allRemoved = !0),
                                        (t[s] = null),
                                        "string" == typeof r))
                                    ) {
                                      var h = c + "ON_PROPERTY" + r;
                                      t[h] = null;
                                    }
                                    return p.zone.cancelTask(p), b ? t : void 0;
                                  }
                                }
                              return T.apply(this, arguments);
                            }
                          }),
                          (g[a] = function() {
                            var t = this || e,
                              r = arguments[0];
                            n &&
                              n.transferEventName &&
                              (r = n.transferEventName(r));
                            for (
                              var o = [], i = W(t, k ? k(r) : r), a = 0;
                              a < i.length;
                              a++
                            ) {
                              var s = i[a],
                                c = s.originalDelegate
                                  ? s.originalDelegate
                                  : s.callback;
                              o.push(c);
                            }
                            return o;
                          }),
                          (g[s] = function() {
                            var t = this || e,
                              r = arguments[0];
                            if (r) {
                              n &&
                                n.transferEventName &&
                                (r = n.transferEventName(r));
                              var o = N[r];
                              if (o) {
                                var a = o.false,
                                  c = o.true,
                                  u = t[a],
                                  l = t[c];
                                if (u) {
                                  var f = u.slice();
                                  for (v = 0; v < f.length; v++) {
                                    var p = (h = f[v]).originalDelegate
                                      ? h.originalDelegate
                                      : h.callback;
                                    this[i].call(this, r, p, h.options);
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
                                      this[i].call(this, r, p, h.options);
                                  }
                              }
                            } else {
                              for (
                                var d = Object.keys(t), v = 0;
                                v < d.length;
                                v++
                              ) {
                                var y = d[v],
                                  g = F.exec(y),
                                  m = g && g[1];
                                m &&
                                  "removeListener" !== m &&
                                  this[s].call(this, m);
                              }
                              this[s].call(this, "removeListener");
                            }
                            if (b) return this;
                          }),
                          x(g[o], E),
                          x(g[i], T),
                          O && x(g[s], O),
                          S && x(g[a], S),
                          !0
                        );
                      }
                      for (var y = [], b = 0; b < t.length; b++)
                        y[b] = v(t[b], n);
                      return y;
                    }
                    function W(e, t) {
                      if (!t) {
                        var r = [];
                        for (var n in e) {
                          var o = F.exec(n),
                            i = o && o[1];
                          if (i && (!t || i === t)) {
                            var a = e[n];
                            if (a)
                              for (var s = 0; s < a.length; s++) r.push(a[s]);
                          }
                        }
                        return r;
                      }
                      var c = N[t];
                      c || (G(t), (c = N[t]));
                      var u = e[c.false],
                        l = e[c.true];
                      return u
                        ? l
                          ? u.concat(l)
                          : u.slice()
                        : l
                        ? l.slice()
                        : [];
                    }
                    function U(e, t) {
                      var r = e.Event;
                      r &&
                        r.prototype &&
                        t.patchMethod(
                          r.prototype,
                          "stopImmediatePropagation",
                          function(e) {
                            return function(t, r) {
                              (t[A] = !0), e && e.apply(t, r);
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
                     */ function q(e, t, r, n, o) {
                      var i = Zone.__symbol__(n);
                      if (!t[i]) {
                        var a = (t[i] = t[n]);
                        (t[n] = function(i, s, c) {
                          return (
                            s &&
                              s.prototype &&
                              o.forEach(function(t) {
                                var o = r + "." + n + "::" + t,
                                  i = s.prototype;
                                if (i.hasOwnProperty(t)) {
                                  var a = e.ObjectGetOwnPropertyDescriptor(
                                    i,
                                    t
                                  );
                                  a && a.value
                                    ? ((a.value = e.wrapWithCurrentZone(
                                        a.value,
                                        o
                                      )),
                                      e._redefineProperty(s.prototype, t, a))
                                    : i[t] &&
                                      (i[t] = e.wrapWithCurrentZone(i[t], o));
                                } else i[t] && (i[t] = e.wrapWithCurrentZone(i[t], o));
                              }),
                            a.call(t, i, s, c)
                          );
                        }),
                          e.attachOriginToPatched(t[n], a);
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
                      $ = [
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
                      Q = [
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
                      re = ["bounce", "finish", "start"],
                      ne = [
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
                      ie = ["close", "error", "open", "message"],
                      ae = ["error", "message"],
                      se = [
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
                        $,
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
                    function ce(e, t, r) {
                      if (!r || 0 === r.length) return t;
                      var n = r.filter(function(t) {
                        return t.target === e;
                      });
                      if (!n || 0 === n.length) return t;
                      var o = n[0].ignoreProperties;
                      return t.filter(function(e) {
                        return -1 === o.indexOf(e);
                      });
                    }
                    function ue(e, t, r, n) {
                      e && S(e, ce(e, t, r), n);
                    }
                    function le(e, t) {
                      if ((!m || k) && !Zone[e.symbol("patchEvents")]) {
                        var n = "undefined" != typeof WebSocket,
                          o = t.__Zone_ignore_on_properties;
                        if (_) {
                          var i = window,
                            a = L
                              ? [{ target: i, ignoreProperties: ["error"] }]
                              : [];
                          ue(
                            i,
                            se.concat(["messageerror"]),
                            o ? o.concat(a) : o,
                            r(i)
                          ),
                            ue(Document.prototype, se, o),
                            void 0 !== i.SVGElement &&
                              ue(i.SVGElement.prototype, se, o),
                            ue(Element.prototype, se, o),
                            ue(HTMLElement.prototype, se, o),
                            ue(HTMLMediaElement.prototype, Q, o),
                            ue(HTMLFrameSetElement.prototype, $.concat(te), o),
                            ue(HTMLBodyElement.prototype, $.concat(te), o),
                            ue(HTMLFrameElement.prototype, ee, o),
                            ue(HTMLIFrameElement.prototype, ee, o);
                          var s = i.HTMLMarqueeElement;
                          s && ue(s.prototype, re, o);
                          var c = i.Worker;
                          c && ue(c.prototype, ae, o);
                        }
                        var u = t.XMLHttpRequest;
                        u && ue(u.prototype, ne, o);
                        var l = t.XMLHttpRequestEventTarget;
                        l && ue(l && l.prototype, ne, o),
                          "undefined" != typeof IDBIndex &&
                            (ue(IDBIndex.prototype, oe, o),
                            ue(IDBRequest.prototype, oe, o),
                            ue(IDBOpenDBRequest.prototype, oe, o),
                            ue(IDBDatabase.prototype, oe, o),
                            ue(IDBTransaction.prototype, oe, o),
                            ue(IDBCursor.prototype, oe, o)),
                          n && ue(WebSocket.prototype, ie, o);
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
                        (Object.defineProperty = function(e, t, r) {
                          if (he(e, t))
                            throw new TypeError(
                              "Cannot assign to read only property '" +
                                t +
                                "' of " +
                                e
                            );
                          var n = r.configurable;
                          return (
                            "prototype" !== t && (r = de(e, t, r)),
                            ve(e, t, r, n)
                          );
                        }),
                        (Object.defineProperties = function(e, t) {
                          return (
                            Object.keys(t).forEach(function(r) {
                              Object.defineProperty(e, r, t[r]);
                            }),
                            e
                          );
                        }),
                        (Object.create = function(e, t) {
                          return (
                            "object" != typeof t ||
                              Object.isFrozen(t) ||
                              Object.keys(t).forEach(function(r) {
                                t[r] = de(e, r, t[r]);
                              }),
                            K(e, t)
                          );
                        }),
                        (Object.getOwnPropertyDescriptor = function(e, t) {
                          var r = Y(e, t);
                          return r && he(e, t) && (r.configurable = !1), r;
                        });
                    }
                    function pe(e, t, r) {
                      var n = r.configurable;
                      return ve(e, t, (r = de(e, t, r)), n);
                    }
                    function he(e, t) {
                      return e && e[J] && e[J][t];
                    }
                    function de(e, t, r) {
                      return (
                        Object.isFrozen(r) || (r.configurable = !0),
                        r.configurable ||
                          (e[J] ||
                            Object.isFrozen(e) ||
                            X(e, J, { writable: !0, value: {} }),
                          e[J] && (e[J][t] = !0)),
                        r
                      );
                    }
                    function ve(e, t, r, n) {
                      try {
                        return X(e, t, r);
                      } catch (i) {
                        if (!r.configurable) throw i;
                        void 0 === n
                          ? delete r.configurable
                          : (r.configurable = n);
                        try {
                          return X(e, t, r);
                        } catch (n) {
                          var o = null;
                          try {
                            o = JSON.stringify(r);
                          } catch (e) {
                            o = r.toString();
                          }
                          console.log(
                            "Attempting to configure '" +
                              t +
                              "' with descriptor '" +
                              o +
                              "' on object '" +
                              e +
                              "' and got error, giving up: " +
                              n
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
                      var r = t.getGlobalObjects(),
                        n = r.eventNames,
                        o = r.globalSources,
                        i = r.zoneSymbolEventNames,
                        a = r.TRUE_STR,
                        s = r.FALSE_STR,
                        c = r.ZONE_SYMBOL_PREFIX,
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
                          b = {
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
                          g = 0;
                        g < n.length;
                        g++
                      ) {
                        var m = c + ((T = n[g]) + s),
                          _ = c + (T + a);
                        (i[T] = {}), (i[T][s] = m), (i[T][a] = _);
                      }
                      for (g = 0; g < p.length; g++)
                        for (
                          var k = p[g], w = (o[k] = {}), E = 0;
                          E < n.length;
                          E++
                        ) {
                          var T;
                          w[(T = n[E])] = k + ".addEventListener:" + T;
                        }
                      var S = [];
                      for (g = 0; g < l.length; g++) {
                        var O = e[l[g]];
                        S.push(O && O.prototype);
                      }
                      return (
                        t.patchEventTarget(e, S, {
                          vh: function(e, t, r, n) {
                            if (!h && v) {
                              if (d)
                                try {
                                  var o;
                                  if (
                                    "[object FunctionWrapper]" ===
                                      (o = t.toString()) ||
                                    o == y
                                  )
                                    return e.apply(r, n), !1;
                                } catch (t) {
                                  return e.apply(r, n), !1;
                                }
                              else if (
                                "[object FunctionWrapper]" ===
                                  (o = t.toString()) ||
                                o == y
                              )
                                return e.apply(r, n), !1;
                            } else if (d)
                              try {
                                t.toString();
                              } catch (t) {
                                return e.apply(r, n), !1;
                              }
                            return !0;
                          },
                          transferEventName: function(e) {
                            return b[e] || e;
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
                    function be(e, t) {
                      var r = e.getGlobalObjects(),
                        n = r.isNode,
                        o = r.isMix;
                      if (
                        (!n || o) &&
                        !(function(e, t) {
                          var r = e.getGlobalObjects(),
                            n = r.isBrowser,
                            o = r.isMix;
                          if (
                            (n || o) &&
                            !e.ObjectGetOwnPropertyDescriptor(
                              HTMLElement.prototype,
                              "onclick"
                            ) &&
                            "undefined" != typeof Element
                          ) {
                            var i = e.ObjectGetOwnPropertyDescriptor(
                              Element.prototype,
                              "onclick"
                            );
                            if (i && !i.configurable) return !1;
                            if (i) {
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
                              var a = !!document.createElement("div").onclick;
                              return (
                                e.ObjectDefineProperty(
                                  Element.prototype,
                                  "onclick",
                                  i
                                ),
                                a
                              );
                            }
                          }
                          var s = t.XMLHttpRequest;
                          if (!s) return !1;
                          var c = s.prototype,
                            u = e.ObjectGetOwnPropertyDescriptor(
                              c,
                              "onreadystatechange"
                            );
                          if (u)
                            return (
                              e.ObjectDefineProperty(c, "onreadystatechange", {
                                enumerable: !0,
                                configurable: !0,
                                get: function() {
                                  return !0;
                                }
                              }),
                              (a = !!(f = new s()).onreadystatechange),
                              e.ObjectDefineProperty(
                                c,
                                "onreadystatechange",
                                u || {}
                              ),
                              a
                            );
                          var l = e.symbol("fake");
                          e.ObjectDefineProperty(c, "onreadystatechange", {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                              return this[l];
                            },
                            set: function(e) {
                              this[l] = e;
                            }
                          });
                          var f = new s(),
                            p = function() {};
                          return (
                            (f.onreadystatechange = p),
                            (a = f[l] === p),
                            (f.onreadystatechange = null),
                            a
                          );
                        })(e, t)
                      ) {
                        var i = "undefined" != typeof WebSocket;
                        !(function(e) {
                          for (
                            var t = e.getGlobalObjects().eventNames,
                              r = e.symbol("unbound"),
                              n = function(n) {
                                var o = t[n],
                                  i = "on" + o;
                                self.addEventListener(
                                  o,
                                  function(t) {
                                    var n,
                                      o,
                                      a = t.target;
                                    for (
                                      o = a
                                        ? a.constructor.name + "." + i
                                        : "unknown." + i;
                                      a;

                                    )
                                      a[i] &&
                                        !a[i][r] &&
                                        (((n = e.wrapWithCurrentZone(a[i], o))[
                                          r
                                        ] = a[i]),
                                        (a[i] = n)),
                                        (a = a.parentElement);
                                  },
                                  !0
                                );
                              },
                              o = 0;
                            o < t.length;
                            o++
                          )
                            n(o);
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
                          i &&
                            (function(e, t) {
                              var r = e.getGlobalObjects(),
                                n = r.ADD_EVENT_LISTENER_STR,
                                o = r.REMOVE_EVENT_LISTENER_STR,
                                i = t.WebSocket;
                              t.EventTarget ||
                                e.patchEventTarget(t, [i.prototype]),
                                (t.WebSocket = function(t, r) {
                                  var a,
                                    s,
                                    c =
                                      arguments.length > 1
                                        ? new i(t, r)
                                        : new i(t),
                                    u = e.ObjectGetOwnPropertyDescriptor(
                                      c,
                                      "onmessage"
                                    );
                                  return (
                                    u && !1 === u.configurable
                                      ? ((a = e.ObjectCreate(c)),
                                        (s = c),
                                        [n, o, "send", "close"].forEach(
                                          function(t) {
                                            a[t] = function() {
                                              var r = e.ArraySlice.call(
                                                arguments
                                              );
                                              if (t === n || t === o) {
                                                var i =
                                                  r.length > 0 ? r[0] : void 0;
                                                if (i) {
                                                  var s = Zone.__symbol__(
                                                    "ON_PROPERTY" + i
                                                  );
                                                  c[s] = a[s];
                                                }
                                              }
                                              return c[t].apply(c, r);
                                            };
                                          }
                                        ))
                                      : (a = c),
                                    e.patchOnProperties(
                                      a,
                                      ["close", "error", "message", "open"],
                                      s
                                    ),
                                    a
                                  );
                                });
                              var a = t.WebSocket;
                              for (var s in i) a[s] = i[s];
                            })(e, t),
                          (Zone[e.symbol("patchEvents")] = !0);
                      }
                    }
                    Zone.__load_patch("util", function(r, n, a) {
                      (a.patchOnProperties = S),
                        (a.patchMethod = j),
                        (a.bindArguments = y),
                        (a.patchMacroTask = D);
                      var s = n.__symbol__("BLACK_LISTED_EVENTS"),
                        l = n.__symbol__("UNPATCHED_EVENTS");
                      r[l] && (r[s] = r[l]),
                        r[s] && (n[s] = n[l] = r[s]),
                        (a.patchEventPrototype = U),
                        (a.patchEventTarget = B),
                        (a.isIEOrEdge = z),
                        (a.ObjectDefineProperty = t),
                        (a.ObjectGetOwnPropertyDescriptor = e),
                        (a.ObjectCreate = o),
                        (a.ArraySlice = i),
                        (a.patchClass = P),
                        (a.wrapWithCurrentZone = u),
                        (a.filterProperties = ce),
                        (a.attachOriginToPatched = x),
                        (a._redefineProperty = Object.defineProperty),
                        (a.patchCallbacks = q),
                        (a.getGlobalObjects = function() {
                          return {
                            globalSources: H,
                            zoneSymbolEventNames: N,
                            eventNames: se,
                            isBrowser: _,
                            isMix: k,
                            isNode: m,
                            TRUE_STR: "true",
                            FALSE_STR: "false",
                            ZONE_SYMBOL_PREFIX: c,
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
                          r = e.__Zone_symbol_prefix || "__zone_symbol__";
                        e[((t = "legacyPatch"), r + t)] = function() {
                          var t = e.Zone;
                          t.__load_patch("defineProperty", function(e, t, r) {
                            (r._redefineProperty = pe), fe();
                          }),
                            t.__load_patch("registerElement", function(
                              e,
                              t,
                              r
                            ) {
                              !(function(e, t) {
                                var r = t.getGlobalObjects(),
                                  n = r.isBrowser,
                                  o = r.isMix;
                                (n || o) &&
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
                              })(e, r);
                            }),
                            t.__load_patch("EventTargetLegacy", function(
                              e,
                              t,
                              r
                            ) {
                              ye(e, r), be(r, e);
                            });
                        };
                      })(
                        "undefined" != typeof window
                          ? window
                          : void 0 !== n
                          ? n
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
                    var ge = f("zoneTask");
                    function me(e, t, r, n) {
                      var o = null,
                        i = null;
                      r += n;
                      var a = {};
                      function s(t) {
                        var r = t.data;
                        return (
                          (r.args[0] = function() {
                            try {
                              t.invoke.apply(this, arguments);
                            } finally {
                              (t.data && t.data.isPeriodic) ||
                                ("number" == typeof r.handleId
                                  ? delete a[r.handleId]
                                  : r.handleId && (r.handleId[ge] = null));
                            }
                          }),
                          (r.handleId = o.apply(e, r.args)),
                          t
                        );
                      }
                      function c(e) {
                        return i(e.data.handleId);
                      }
                      (o = j(e, (t += n), function(r) {
                        return function(o, i) {
                          if ("function" == typeof i[0]) {
                            var u = {
                                isPeriodic: "Interval" === n,
                                delay:
                                  "Timeout" === n || "Interval" === n
                                    ? i[1] || 0
                                    : void 0,
                                args: i
                              },
                              f = l(t, i[0], u, s, c);
                            if (!f) return f;
                            var p = f.data.handleId;
                            return (
                              "number" == typeof p
                                ? (a[p] = f)
                                : p && (p[ge] = f),
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
                          return r.apply(e, i);
                        };
                      })),
                        (i = j(e, r, function(t) {
                          return function(r, n) {
                            var o,
                              i = n[0];
                            "number" == typeof i
                              ? (o = a[i])
                              : (o = i && i[ge]) || (o = i),
                              o && "string" == typeof o.type
                                ? "notScheduled" !== o.state &&
                                  ((o.cancelFn && o.data.isPeriodic) ||
                                    0 === o.runCount) &&
                                  ("number" == typeof i
                                    ? delete a[i]
                                    : i && (i[ge] = null),
                                  o.zone.cancelTask(o))
                                : t.apply(e, n);
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
                          var r = t.getGlobalObjects(),
                            n = r.eventNames,
                            o = r.zoneSymbolEventNames,
                            i = r.TRUE_STR,
                            a = r.FALSE_STR,
                            s = r.ZONE_SYMBOL_PREFIX,
                            c = 0;
                          c < n.length;
                          c++
                        ) {
                          var u = n[c],
                            l = s + (u + a),
                            f = s + (u + i);
                          (o[u] = {}), (o[u][a] = l), (o[u][i] = f);
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
                        me(e, "set", "clear", "Timeout"),
                          me(e, "set", "clear", "Interval"),
                          me(e, "set", "clear", "Immediate");
                      }),
                      Zone.__load_patch("requestAnimationFrame", function(e) {
                        me(e, "request", "cancel", "AnimationFrame"),
                          me(e, "mozRequest", "mozCancel", "AnimationFrame"),
                          me(
                            e,
                            "webkitRequest",
                            "webkitCancel",
                            "AnimationFrame"
                          );
                      }),
                      Zone.__load_patch("blocking", function(e, t) {
                        for (
                          var r = ["alert", "prompt", "confirm"], n = 0;
                          n < r.length;
                          n++
                        )
                          j(e, r[n], function(r, n, o) {
                            return function(n, i) {
                              return t.current.run(r, e, i, o);
                            };
                          });
                      }),
                      Zone.__load_patch("EventTarget", function(e, t, r) {
                        !(function(e, t) {
                          t.patchEventPrototype(e, t);
                        })(e, r),
                          _e(e, r);
                        var n = e.XMLHttpRequestEventTarget;
                        n &&
                          n.prototype &&
                          r.patchEventTarget(e, [n.prototype]),
                          P("MutationObserver"),
                          P("WebKitMutationObserver"),
                          P("IntersectionObserver"),
                          P("FileReader");
                      }),
                      Zone.__load_patch("on_property", function(e, t, r) {
                        le(r, e);
                      }),
                      Zone.__load_patch("customElements", function(e, t, r) {
                        !(function(e, t) {
                          var r = t.getGlobalObjects(),
                            n = r.isBrowser,
                            o = r.isMix;
                          (n || o) &&
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
                        })(e, r);
                      }),
                      Zone.__load_patch("XHR", function(e, t) {
                        !(function(e) {
                          var p = e.XMLHttpRequest;
                          if (p) {
                            var h = p.prototype,
                              d = h[a],
                              v = h[s];
                            if (!d) {
                              var y = e.XMLHttpRequestEventTarget;
                              if (y) {
                                var b = y.prototype;
                                (d = b[a]), (v = b[s]);
                              }
                            }
                            var g = j(h, "open", function() {
                                return function(e, t) {
                                  return (
                                    (e[n] = 0 == t[2]),
                                    (e[c] = t[1]),
                                    g.apply(e, t)
                                  );
                                };
                              }),
                              m = f("fetchTaskAborting"),
                              _ = f("fetchTaskScheduling"),
                              k = j(h, "send", function() {
                                return function(e, r) {
                                  if (!0 === t.current[_]) return k.apply(e, r);
                                  if (e[n]) return k.apply(e, r);
                                  var o = {
                                      target: e,
                                      url: e[c],
                                      isPeriodic: !1,
                                      args: r,
                                      aborted: !1
                                    },
                                    i = l("XMLHttpRequest.send", T, o, E, S);
                                  e &&
                                    !0 === e[u] &&
                                    !o.aborted &&
                                    "scheduled" === i.state &&
                                    i.invoke();
                                };
                              }),
                              w = j(h, "abort", function() {
                                return function(e, n) {
                                  var o = e[r];
                                  if (o && "string" == typeof o.type) {
                                    if (
                                      null == o.cancelFn ||
                                      (o.data && o.data.aborted)
                                    )
                                      return;
                                    o.zone.cancelTask(o);
                                  } else if (!0 === t.current[m]) return w.apply(e, n);
                                };
                              });
                          }
                          function E(e) {
                            var n = e.data,
                              c = n.target;
                            (c[i] = !1), (c[u] = !1);
                            var l = c[o];
                            d || ((d = c[a]), (v = c[s])),
                              l && v.call(c, "readystatechange", l);
                            var f = (c[o] = function() {
                              if (c.readyState === c.DONE)
                                if (
                                  !n.aborted &&
                                  c[i] &&
                                  "scheduled" === e.state
                                ) {
                                  var r = c[t.__symbol__("loadfalse")];
                                  if (r && r.length > 0) {
                                    var o = e.invoke;
                                    (e.invoke = function() {
                                      for (
                                        var r = c[t.__symbol__("loadfalse")],
                                          i = 0;
                                        i < r.length;
                                        i++
                                      )
                                        r[i] === e && r.splice(i, 1);
                                      n.aborted ||
                                        "scheduled" !== e.state ||
                                        o.call(e);
                                    }),
                                      r.push(e);
                                  } else e.invoke();
                                } else n.aborted || !1 !== c[i] || (c[u] = !0);
                            });
                            return (
                              d.call(c, "readystatechange", f),
                              c[r] || (c[r] = e),
                              k.apply(c, n.args),
                              (c[i] = !0),
                              e
                            );
                          }
                          function T() {}
                          function S(e) {
                            var t = e.data;
                            return (t.aborted = !0), w.apply(t.target, t.args);
                          }
                        })(e);
                        var r = f("xhrTask"),
                          n = f("xhrSync"),
                          o = f("xhrListener"),
                          i = f("xhrScheduled"),
                          c = f("xhrURL"),
                          u = f("xhrErrorBeforeScheduled");
                      }),
                      Zone.__load_patch("geolocation", function(t) {
                        t.navigator &&
                          t.navigator.geolocation &&
                          (function(t, r) {
                            for (
                              var n = t.constructor.name,
                                o = function(o) {
                                  var i = r[o],
                                    a = t[i];
                                  if (a) {
                                    if (!b(e(t, i))) return "continue";
                                    t[i] = (function(e) {
                                      var t = function() {
                                        return e.apply(
                                          this,
                                          y(arguments, n + "." + i)
                                        );
                                      };
                                      return x(t, e), t;
                                    })(a);
                                  }
                                },
                                i = 0;
                              i < r.length;
                              i++
                            )
                              o(i);
                          })(t.navigator.geolocation, [
                            "getCurrentPosition",
                            "watchPosition"
                          ]);
                      }),
                      Zone.__load_patch("PromiseRejectionEvent", function(
                        e,
                        t
                      ) {
                        function r(t) {
                          return function(r) {
                            W(e, t).forEach(function(n) {
                              var o = e.PromiseRejectionEvent;
                              if (o) {
                                var i = new o(t, {
                                  promise: r.promise,
                                  reason: r.rejection
                                });
                                n.invoke(i);
                              }
                            });
                          };
                        }
                        e.PromiseRejectionEvent &&
                          ((t[f("unhandledPromiseRejectionHandler")] = r(
                            "unhandledrejection"
                          )),
                          (t[f("rejectionHandledHandler")] = r(
                            "rejectionhandled"
                          )));
                      });
                  })
                    ? o.call(t, r, t, e)
                    : o) || (e.exports = i);
            }.call(this, r(8)));
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
          function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(0),
              o = r.n(n),
              i = r(1),
              a = r.n(i),
              s = (r(7), r(2)),
              c = r(3),
              u = r.n(c),
              l = r(4),
              f = r.n(l),
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
                            var r = t.getState();
                            e[r.namespace] = r;
                          }),
                          e
                        );
                      }
                    }
                  ]),
                  e
                );
              })(),
              h = r(5),
              d = r.n(h),
              v = function(e, t) {
                return (v =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function(e, t) {
                      e.__proto__ = t;
                    }) ||
                  function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                  })(e, t);
              };
            function y(e, t) {
              function r() {
                this.constructor = e;
              }
              v(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((r.prototype = t.prototype), new r()));
            }
            function b(e) {
              return "function" == typeof e;
            }
            var g = !1,
              m = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(e) {
                  e && new Error().stack;
                  g = e;
                },
                get useDeprecatedSynchronousErrorHandling() {
                  return g;
                }
              };
            function _(e) {
              setTimeout(function() {
                throw e;
              }, 0);
            }
            var k = {
                closed: !0,
                next: function(e) {},
                error: function(e) {
                  if (m.useDeprecatedSynchronousErrorHandling) throw e;
                  _(e);
                },
                complete: function() {}
              },
              w = (function() {
                return (
                  Array.isArray ||
                  function(e) {
                    return e && "number" == typeof e.length;
                  }
                );
              })();
            var E = (function() {
                function e(e) {
                  return (
                    Error.call(this),
                    (this.message = e
                      ? e.length +
                        " errors occurred during unsubscription:\n" +
                        e
                          .map(function(e, t) {
                            return t + 1 + ") " + e.toString();
                          })
                          .join("\n  ")
                      : ""),
                    (this.name = "UnsubscriptionError"),
                    (this.errors = e),
                    this
                  );
                }
                return (e.prototype = Object.create(Error.prototype)), e;
              })(),
              T = (function() {
                function e(e) {
                  (this.closed = !1),
                    (this._parentOrParents = null),
                    (this._subscriptions = null),
                    e && (this._unsubscribe = e);
                }
                return (
                  (e.prototype.unsubscribe = function() {
                    var t;
                    if (!this.closed) {
                      var r,
                        n = this._parentOrParents,
                        o = this._unsubscribe,
                        i = this._subscriptions;
                      if (
                        ((this.closed = !0),
                        (this._parentOrParents = null),
                        (this._subscriptions = null),
                        n instanceof e)
                      )
                        n.remove(this);
                      else if (null !== n)
                        for (var a = 0; a < n.length; ++a) {
                          n[a].remove(this);
                        }
                      if (b(o))
                        try {
                          o.call(this);
                        } catch (e) {
                          t = e instanceof E ? S(e.errors) : [e];
                        }
                      if (w(i)) {
                        a = -1;
                        for (var s = i.length; ++a < s; ) {
                          var c = i[a];
                          if (null !== (r = c) && "object" == typeof r)
                            try {
                              c.unsubscribe();
                            } catch (e) {
                              (t = t || []),
                                e instanceof E
                                  ? (t = t.concat(S(e.errors)))
                                  : t.push(e);
                            }
                        }
                      }
                      if (t) throw new E(t);
                    }
                  }),
                  (e.prototype.add = function(t) {
                    var r = t;
                    if (!t) return e.EMPTY;
                    switch (typeof t) {
                      case "function":
                        r = new e(t);
                      case "object":
                        if (
                          r === this ||
                          r.closed ||
                          "function" != typeof r.unsubscribe
                        )
                          return r;
                        if (this.closed) return r.unsubscribe(), r;
                        if (!(r instanceof e)) {
                          var n = r;
                          (r = new e())._subscriptions = [n];
                        }
                        break;
                      default:
                        throw new Error(
                          "unrecognized teardown " +
                            t +
                            " added to Subscription."
                        );
                    }
                    var o = r._parentOrParents;
                    if (null === o) r._parentOrParents = this;
                    else if (o instanceof e) {
                      if (o === this) return r;
                      r._parentOrParents = [o, this];
                    } else {
                      if (-1 !== o.indexOf(this)) return r;
                      o.push(this);
                    }
                    var i = this._subscriptions;
                    return (
                      null === i ? (this._subscriptions = [r]) : i.push(r), r
                    );
                  }),
                  (e.prototype.remove = function(e) {
                    var t = this._subscriptions;
                    if (t) {
                      var r = t.indexOf(e);
                      -1 !== r && t.splice(r, 1);
                    }
                  }),
                  (e.EMPTY = (function(e) {
                    return (e.closed = !0), e;
                  })(new e())),
                  e
                );
              })();
            function S(e) {
              return e.reduce(function(e, t) {
                return e.concat(t instanceof E ? t.errors : t);
              }, []);
            }
            var O = (function() {
                return "function" == typeof Symbol
                  ? Symbol("rxSubscriber")
                  : "@@rxSubscriber_" + Math.random();
              })(),
              P = (function(e) {
                function t(r, n, o) {
                  var i = e.call(this) || this;
                  switch (
                    ((i.syncErrorValue = null),
                    (i.syncErrorThrown = !1),
                    (i.syncErrorThrowable = !1),
                    (i.isStopped = !1),
                    arguments.length)
                  ) {
                    case 0:
                      i.destination = k;
                      break;
                    case 1:
                      if (!r) {
                        i.destination = k;
                        break;
                      }
                      if ("object" == typeof r) {
                        r instanceof t
                          ? ((i.syncErrorThrowable = r.syncErrorThrowable),
                            (i.destination = r),
                            r.add(i))
                          : ((i.syncErrorThrowable = !0),
                            (i.destination = new j(i, r)));
                        break;
                      }
                    default:
                      (i.syncErrorThrowable = !0),
                        (i.destination = new j(i, r, n, o));
                  }
                  return i;
                }
                return (
                  y(t, e),
                  (t.prototype[O] = function() {
                    return this;
                  }),
                  (t.create = function(e, r, n) {
                    var o = new t(e, r, n);
                    return (o.syncErrorThrowable = !1), o;
                  }),
                  (t.prototype.next = function(e) {
                    this.isStopped || this._next(e);
                  }),
                  (t.prototype.error = function(e) {
                    this.isStopped || ((this.isStopped = !0), this._error(e));
                  }),
                  (t.prototype.complete = function() {
                    this.isStopped || ((this.isStopped = !0), this._complete());
                  }),
                  (t.prototype.unsubscribe = function() {
                    this.closed ||
                      ((this.isStopped = !0),
                      e.prototype.unsubscribe.call(this));
                  }),
                  (t.prototype._next = function(e) {
                    this.destination.next(e);
                  }),
                  (t.prototype._error = function(e) {
                    this.destination.error(e), this.unsubscribe();
                  }),
                  (t.prototype._complete = function() {
                    this.destination.complete(), this.unsubscribe();
                  }),
                  (t.prototype._unsubscribeAndRecycle = function() {
                    var e = this._parentOrParents;
                    return (
                      (this._parentOrParents = null),
                      this.unsubscribe(),
                      (this.closed = !1),
                      (this.isStopped = !1),
                      (this._parentOrParents = e),
                      this
                    );
                  }),
                  t
                );
              })(T),
              j = (function(e) {
                function t(t, r, n, o) {
                  var i,
                    a = e.call(this) || this;
                  a._parentSubscriber = t;
                  var s = a;
                  return (
                    b(r)
                      ? (i = r)
                      : r &&
                        ((i = r.next),
                        (n = r.error),
                        (o = r.complete),
                        r !== k &&
                          (b((s = Object.create(r)).unsubscribe) &&
                            a.add(s.unsubscribe.bind(s)),
                          (s.unsubscribe = a.unsubscribe.bind(a)))),
                    (a._context = s),
                    (a._next = i),
                    (a._error = n),
                    (a._complete = o),
                    a
                  );
                }
                return (
                  y(t, e),
                  (t.prototype.next = function(e) {
                    if (!this.isStopped && this._next) {
                      var t = this._parentSubscriber;
                      m.useDeprecatedSynchronousErrorHandling &&
                      t.syncErrorThrowable
                        ? this.__tryOrSetError(t, this._next, e) &&
                          this.unsubscribe()
                        : this.__tryOrUnsub(this._next, e);
                    }
                  }),
                  (t.prototype.error = function(e) {
                    if (!this.isStopped) {
                      var t = this._parentSubscriber,
                        r = m.useDeprecatedSynchronousErrorHandling;
                      if (this._error)
                        r && t.syncErrorThrowable
                          ? (this.__tryOrSetError(t, this._error, e),
                            this.unsubscribe())
                          : (this.__tryOrUnsub(this._error, e),
                            this.unsubscribe());
                      else if (t.syncErrorThrowable)
                        r
                          ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0))
                          : _(e),
                          this.unsubscribe();
                      else {
                        if ((this.unsubscribe(), r)) throw e;
                        _(e);
                      }
                    }
                  }),
                  (t.prototype.complete = function() {
                    var e = this;
                    if (!this.isStopped) {
                      var t = this._parentSubscriber;
                      if (this._complete) {
                        var r = function() {
                          return e._complete.call(e._context);
                        };
                        m.useDeprecatedSynchronousErrorHandling &&
                        t.syncErrorThrowable
                          ? (this.__tryOrSetError(t, r), this.unsubscribe())
                          : (this.__tryOrUnsub(r), this.unsubscribe());
                      } else this.unsubscribe();
                    }
                  }),
                  (t.prototype.__tryOrUnsub = function(e, t) {
                    try {
                      e.call(this._context, t);
                    } catch (e) {
                      if (
                        (this.unsubscribe(),
                        m.useDeprecatedSynchronousErrorHandling)
                      )
                        throw e;
                      _(e);
                    }
                  }),
                  (t.prototype.__tryOrSetError = function(e, t, r) {
                    if (!m.useDeprecatedSynchronousErrorHandling)
                      throw new Error("bad call");
                    try {
                      t.call(this._context, r);
                    } catch (t) {
                      return m.useDeprecatedSynchronousErrorHandling
                        ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0), !0)
                        : (_(t), !0);
                    }
                    return !1;
                  }),
                  (t.prototype._unsubscribe = function() {
                    var e = this._parentSubscriber;
                    (this._context = null),
                      (this._parentSubscriber = null),
                      e.unsubscribe();
                  }),
                  t
                );
              })(P);
            var D = (function() {
              return (
                ("function" == typeof Symbol && Symbol.observable) ||
                "@@observable"
              );
            })();
            function x() {}
            function Z(e) {
              return e
                ? 1 === e.length
                  ? e[0]
                  : function(t) {
                      return e.reduce(function(e, t) {
                        return t(e);
                      }, t);
                    }
                : x;
            }
            var C = (function() {
              function e(e) {
                (this._isScalar = !1), e && (this._subscribe = e);
              }
              return (
                (e.prototype.lift = function(t) {
                  var r = new e();
                  return (r.source = this), (r.operator = t), r;
                }),
                (e.prototype.subscribe = function(e, t, r) {
                  var n = this.operator,
                    o = (function(e, t, r) {
                      if (e) {
                        if (e instanceof P) return e;
                        if (e[O]) return e[O]();
                      }
                      return e || t || r ? new P(e, t, r) : new P(k);
                    })(e, t, r);
                  if (
                    (n
                      ? o.add(n.call(o, this.source))
                      : o.add(
                          this.source ||
                            (m.useDeprecatedSynchronousErrorHandling &&
                              !o.syncErrorThrowable)
                            ? this._subscribe(o)
                            : this._trySubscribe(o)
                        ),
                    m.useDeprecatedSynchronousErrorHandling &&
                      o.syncErrorThrowable &&
                      ((o.syncErrorThrowable = !1), o.syncErrorThrown))
                  )
                    throw o.syncErrorValue;
                  return o;
                }),
                (e.prototype._trySubscribe = function(e) {
                  try {
                    return this._subscribe(e);
                  } catch (t) {
                    m.useDeprecatedSynchronousErrorHandling &&
                      ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                      !(function(e) {
                        for (; e; ) {
                          var t = e,
                            r = t.closed,
                            n = t.destination,
                            o = t.isStopped;
                          if (r || o) return !1;
                          e = n && n instanceof P ? n : null;
                        }
                        return !0;
                      })(e)
                        ? console.warn(t)
                        : e.error(t);
                  }
                }),
                (e.prototype.forEach = function(e, t) {
                  var r = this;
                  return new (t = L(t))(function(t, n) {
                    var o;
                    o = r.subscribe(
                      function(t) {
                        try {
                          e(t);
                        } catch (e) {
                          n(e), o && o.unsubscribe();
                        }
                      },
                      n,
                      t
                    );
                  });
                }),
                (e.prototype._subscribe = function(e) {
                  var t = this.source;
                  return t && t.subscribe(e);
                }),
                (e.prototype[D] = function() {
                  return this;
                }),
                (e.prototype.pipe = function() {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  return 0 === e.length ? this : Z(e)(this);
                }),
                (e.prototype.toPromise = function(e) {
                  var t = this;
                  return new (e = L(e))(function(e, r) {
                    var n;
                    t.subscribe(
                      function(e) {
                        return (n = e);
                      },
                      function(e) {
                        return r(e);
                      },
                      function() {
                        return e(n);
                      }
                    );
                  });
                }),
                (e.create = function(t) {
                  return new e(t);
                }),
                e
              );
            })();
            function L(e) {
              if ((e || (e = m.Promise || Promise), !e))
                throw new Error("no Promise impl found");
              return e;
            }
            var z = (function() {
                function e() {
                  return (
                    Error.call(this),
                    (this.message = "object unsubscribed"),
                    (this.name = "ObjectUnsubscribedError"),
                    this
                  );
                }
                return (e.prototype = Object.create(Error.prototype)), e;
              })(),
              M = (function(e) {
                function t(t, r) {
                  var n = e.call(this) || this;
                  return (
                    (n.subject = t), (n.subscriber = r), (n.closed = !1), n
                  );
                }
                return (
                  y(t, e),
                  (t.prototype.unsubscribe = function() {
                    if (!this.closed) {
                      this.closed = !0;
                      var e = this.subject,
                        t = e.observers;
                      if (
                        ((this.subject = null),
                        t && 0 !== t.length && !e.isStopped && !e.closed)
                      ) {
                        var r = t.indexOf(this.subscriber);
                        -1 !== r && t.splice(r, 1);
                      }
                    }
                  }),
                  t
                );
              })(T),
              I = (function(e) {
                function t(t) {
                  var r = e.call(this, t) || this;
                  return (r.destination = t), r;
                }
                return y(t, e), t;
              })(P),
              R = (function(e) {
                function t() {
                  var t = e.call(this) || this;
                  return (
                    (t.observers = []),
                    (t.closed = !1),
                    (t.isStopped = !1),
                    (t.hasError = !1),
                    (t.thrownError = null),
                    t
                  );
                }
                return (
                  y(t, e),
                  (t.prototype[O] = function() {
                    return new I(this);
                  }),
                  (t.prototype.lift = function(e) {
                    var t = new N(this, this);
                    return (t.operator = e), t;
                  }),
                  (t.prototype.next = function(e) {
                    if (this.closed) throw new z();
                    if (!this.isStopped)
                      for (
                        var t = this.observers,
                          r = t.length,
                          n = t.slice(),
                          o = 0;
                        o < r;
                        o++
                      )
                        n[o].next(e);
                  }),
                  (t.prototype.error = function(e) {
                    if (this.closed) throw new z();
                    (this.hasError = !0),
                      (this.thrownError = e),
                      (this.isStopped = !0);
                    for (
                      var t = this.observers,
                        r = t.length,
                        n = t.slice(),
                        o = 0;
                      o < r;
                      o++
                    )
                      n[o].error(e);
                    this.observers.length = 0;
                  }),
                  (t.prototype.complete = function() {
                    if (this.closed) throw new z();
                    this.isStopped = !0;
                    for (
                      var e = this.observers,
                        t = e.length,
                        r = e.slice(),
                        n = 0;
                      n < t;
                      n++
                    )
                      r[n].complete();
                    this.observers.length = 0;
                  }),
                  (t.prototype.unsubscribe = function() {
                    (this.isStopped = !0),
                      (this.closed = !0),
                      (this.observers = null);
                  }),
                  (t.prototype._trySubscribe = function(t) {
                    if (this.closed) throw new z();
                    return e.prototype._trySubscribe.call(this, t);
                  }),
                  (t.prototype._subscribe = function(e) {
                    if (this.closed) throw new z();
                    return this.hasError
                      ? (e.error(this.thrownError), T.EMPTY)
                      : this.isStopped
                      ? (e.complete(), T.EMPTY)
                      : (this.observers.push(e), new M(this, e));
                  }),
                  (t.prototype.asObservable = function() {
                    var e = new C();
                    return (e.source = this), e;
                  }),
                  (t.create = function(e, t) {
                    return new N(e, t);
                  }),
                  t
                );
              })(C),
              N = (function(e) {
                function t(t, r) {
                  var n = e.call(this) || this;
                  return (n.destination = t), (n.source = r), n;
                }
                return (
                  y(t, e),
                  (t.prototype.next = function(e) {
                    var t = this.destination;
                    t && t.next && t.next(e);
                  }),
                  (t.prototype.error = function(e) {
                    var t = this.destination;
                    t && t.error && this.destination.error(e);
                  }),
                  (t.prototype.complete = function() {
                    var e = this.destination;
                    e && e.complete && this.destination.complete();
                  }),
                  (t.prototype._subscribe = function(e) {
                    return this.source ? this.source.subscribe(e) : T.EMPTY;
                  }),
                  t
                );
              })(R),
              H = (function(e) {
                function t(t) {
                  var r = e.call(this) || this;
                  return (r._value = t), r;
                }
                return (
                  y(t, e),
                  Object.defineProperty(t.prototype, "value", {
                    get: function() {
                      return this.getValue();
                    },
                    enumerable: !0,
                    configurable: !0
                  }),
                  (t.prototype._subscribe = function(t) {
                    var r = e.prototype._subscribe.call(this, t);
                    return r && !r.closed && t.next(this._value), r;
                  }),
                  (t.prototype.getValue = function() {
                    if (this.hasError) throw this.thrownError;
                    if (this.closed) throw new z();
                    return this._value;
                  }),
                  (t.prototype.next = function(t) {
                    e.prototype.next.call(this, (this._value = t));
                  }),
                  t
                );
              })(R),
              F = new ((function() {
                function e() {
                  u()(this, e), d()(this, "name", new H("test"));
                }
                return (
                  f()(e, [
                    {
                      key: "setName",
                      value: function(e) {
                        this.name.next(e);
                      }
                    },
                    {
                      key: "name$",
                      get: function() {
                        return this.name.asObservable();
                      }
                    }
                  ]),
                  e
                );
              })())();
            function A(e) {
              return function(t) {
                return !e || t.hash.startsWith("#".concat(e));
              };
            }
            function G(e, t, r, n, o) {
              return B.apply(this, arguments);
            }
            function B() {
              return (B = a()(
                o.a.mark(function e(t, r, n, i, a) {
                  var c, u;
                  return o.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((c = {}),
                              (u = { globalEventDistributor: a, service: F }),
                              (e.prev = 1),
                              !i)
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (e.next = 5), System.import(i);
                          case 5:
                            (e.t0 = e.sent), (e.next = 9);
                            break;
                          case 8:
                            e.t0 = { storeInstance: null };
                          case 9:
                            (c = e.t0), (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12),
                              (e.t1 = e.catch(1)),
                              console.error(
                                "Could not load store of app ".concat(t, "."),
                                e.t1
                              );
                          case 15:
                            c.storeInstance &&
                              a &&
                              ((u.store = c.storeInstance),
                              a.registerStore(c.storeInstance)),
                              s.registerApplication(
                                t,
                                function() {
                                  return System.import(n);
                                },
                                A(r),
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
            function W() {
              return (W = a()(
                o.a.mark(function e() {
                  var t, r;
                  return o.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = new p()),
                            (r = []).push(
                              G("@briuin/avatar", "", "@briuin/avatar", null, t)
                            ),
                            r.push(
                              G(
                                "@briuin/timeline",
                                null,
                                "@briuin/timeline",
                                "@briuin/timeline/store",
                                t
                              )
                            ),
                            r.push(
                              G(
                                "@briuin/experience",
                                null,
                                "@briuin/experience",
                                null,
                                t
                              )
                            ),
                            (e.next = 7),
                            Promise.all(r)
                          );
                        case 7:
                          s.start();
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            !(function() {
              W.apply(this, arguments);
            })();
          }
        ])
      );
    }
  };
});
//# sourceMappingURL=app.js.map
