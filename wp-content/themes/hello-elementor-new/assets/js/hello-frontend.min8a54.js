(() => {
    var e = {
            690: e => {
                e.exports = function _classCallCheck(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            728: e => {
                function _defineProperties(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                e.exports = function _createClass(e, t, n) {
                    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            },
            836: e => {
                e.exports = function _interopRequireDefault(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }, e.exports.__esModule = !0, e.exports.default = e.exports
            }
        },
        t = {};

    function __webpack_require__(n) {
        var r = t[n];
        if (void 0 !== r) return r.exports;
        var o = t[n] = {
            exports: {}
        };
        return e[n](o, o.exports, __webpack_require__), o.exports
    }(() => {
        "use strict";
        var e = __webpack_require__(836),
            t = e(__webpack_require__(690)),
            n = e(__webpack_require__(728)),
            r = function() {
                function elementorHelloThemeHandler() {
                    (0, t.default)(this, elementorHelloThemeHandler), this.initSettings(), this.initElements(), this.bindEvents()
                }
                return (0, n.default)(elementorHelloThemeHandler, [{
                    key: "initSettings",
                    value: function initSettings() {
                        this.settings = {
                            selectors: {
                                header: "header.site-header",
                                footer: "footer.site-footer",
                                menuToggle: ".site-header .site-navigation-toggle",
                                menuToggleHolder: ".site-header .site-navigation-toggle-holder",
                                dropdownMenu: ".site-header .site-navigation-dropdown"
                            }
                        }
                    }
                }, {
                    key: "initElements",
                    value: function initElements() {
                        this.elements = {
                            $window: jQuery(window),
                            $document: jQuery(document),
                            $header: jQuery(this.settings.selectors.header),
                            $footer: jQuery(this.settings.selectors.footer),
                            $menuToggle: jQuery(this.settings.selectors.menuToggle),
                            $menuToggleHolder: jQuery(this.settings.selectors.menuToggleHolder),
                            $dropdownMenu: jQuery(this.settings.selectors.dropdownMenu)
                        }
                    }
                }, {
                    key: "bindEvents",
                    value: function bindEvents() {
                        var e = this;
                        this.elements.$menuToggle.on("click", (function() {
                            return e.handleMenuToggle()
                        })), this.elements.$dropdownMenu.on("click", ".menu-item-has-children > a", this.handleMenuChildren)
                    }
                }, {
                    key: "closeMenuItems",
                    value: function closeMenuItems() {
                        var e = this;
                        this.elements.$menuToggleHolder.removeClass("elementor-active"), this.elements.$window.off("resize", (function() {
                            return e.closeMenuItems()
                        }))
                    }
                }, {
                    key: "handleMenuToggle",
                    value: function handleMenuToggle() {
                        var e = this,
                            t = !this.elements.$menuToggleHolder.hasClass("elementor-active");
                        this.elements.$menuToggle.attr("aria-expanded", t), this.elements.$dropdownMenu.attr("aria-hidden", !t), this.elements.$menuToggleHolder.toggleClass("elementor-active", t), this.elements.$dropdownMenu.find(".elementor-active").removeClass("elementor-active"), t ? this.elements.$window.on("resize", (function() {
                            return e.closeMenuItems()
                        })) : this.elements.$window.off("resize", (function() {
                            return e.closeMenuItems()
                        }))
                    }
                }, {
                    key: "handleMenuChildren",
                    value: function handleMenuChildren(e) {
                        var t = jQuery(e.currentTarget).parent("li");
                        t.hasClass("elementor-active") ? t.removeClass("elementor-active") : t.addClass("elementor-active")
                    }
                }]), elementorHelloThemeHandler
            }();
        jQuery((function() {
            new r
        }))
    })()
})();