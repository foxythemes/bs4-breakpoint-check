/*!
 * jQuery bootstrap 4 breakpoint check
 * Check the current visibility of bootstrap 4 breakpoints
 *
 * @example `$.isXs()` function alias for `$.isBreakpoint("xs")`
 * @example `$.isSm()` function alias for `$.isBreakpoint("sm")`
 * @example `$.isMd()` function alias for `$.isBreakpoint("md")`
 * @example `$.isLg()` function alias for `$.isBreakpoint("lg")`
 * @example `$.isXl()` function alias for `$.isBreakpoint("xl")`
 * @version 1.1.0
 * @copyright Jens A. (cakebake) and other contributors
 * @license Released under the MIT license
 */

;(function ($) {

    /**
     * Base function to check the current visibility of an bootstrap 4 breakpoint
     *
     * @param {string} breakPoint Something like xs|sm|md|lg
     * @returns {boolean}
     */
    $.isBreakpoint = function (breakPoint) {
        var element, erg, utilCls;

        switch(breakPoint) {
            case "xs":
                utilCls = "d-block d-sm-none";
                break;
            case "sm":
                utilCls = "d-none d-sm-block d-md-none";
                break;
            case "md":
                utilCls = "d-none d-md-block d-lg-none";
                break;
            case "lg":
                utilCls = "d-none d-lg-block d-xl-none";
                break;
            case "xl":
                utilCls = "d-none d-xl-block";
                break;
        }

        element = $("<div/>", {
            "class": utilCls
        }).appendTo("body");

        erg = element.is(":visible");
        element.remove();

        return erg
    };

    $.extend($, {

        /**
         * Check the current visibility of bootstrap 4 "xs" breakpoint
         * Shorthand function alias for $.isBreakpoint("xs")
         *
         * @returns {boolean}
         */
        isXs: function () {
            return $.isBreakpoint("xs")
        },

        /**
         * Check the current visibility of bootstrap 4 "sm" breakpoint
         * Shorthand function alias for $.isBreakpoint("sm")
         *
         * @returns {boolean}
         */
        isSm: function () {
            return $.isBreakpoint("sm")
        },

        /**
         * Check the current visibility of bootstrap 4 "md" breakpoint
         * Shorthand function alias for $.isBreakpoint("md")
         *
         * @returns {boolean}
         */
        isMd: function () {
            return $.isBreakpoint("md")
        },

        /**
         * Check the current visibility of bootstrap 4 "lg" breakpoint
         * Shorthand function alias for $.isBreakpoint("lg")
         *
         * @returns {boolean}
         */
        isLg: function () {
            return $.isBreakpoint("lg")
        },

        /**
         * Check the current visibility of bootstrap 4 "lg" breakpoint
         * Shorthand function alias for $.isBreakpoint("lg")
         *
         * @returns {boolean}
         */
        isXl: function () {
            return $.isBreakpoint("xl")
        }

    });

})(jQuery);