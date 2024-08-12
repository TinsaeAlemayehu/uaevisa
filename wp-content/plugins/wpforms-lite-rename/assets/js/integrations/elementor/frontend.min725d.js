"use strict";
var WPFormsElementorFrontend = window.WPFormsElementorFrontend || function(o, r) {
    var t = {
        init: function() {
            t.events()
        },
        events: function() {
            r(o).on("elementor/popup/show", function(e, o, n) {
                o = r("#elementor-popup-modal-" + o).find(".wpforms-form");
                o.length && t.initFields(o)
            })
        },
        initFields: function(e) {
            wpforms.ready(), "undefined" != typeof wpformsModernFileUpload && wpformsModernFileUpload.init(), "undefined" != typeof wpformsRecaptchaLoad && ("recaptcha" === wpformsElementorVars.captcha_provider && "v3" === wpformsElementorVars.recaptcha_type ? "undefined" != typeof grecaptcha && grecaptcha.ready(wpformsRecaptchaLoad) : wpformsRecaptchaLoad()), r(o).trigger("wpforms_elementor_form_fields_initialized", [e])
        }
    };
    return t
}(document, (window, jQuery));
WPFormsElementorFrontend.init();