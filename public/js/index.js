/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-04-10T19:48Z
 */
(function (global, factory) {

    "use strict";

    if (typeof module === "object" && typeof module.exports === "object") {

        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return factory(w);
            };
    } else {
        factory(global);
    }

    // Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

    // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
    // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
    // enough that all such attempts are guarded in a try block.
    "use strict";

    var arr = [];

    var document = window.document;

    var getProto = Object.getPrototypeOf;

    var slice = arr.slice;

    var concat = arr.concat;

    var push = arr.push;

    var indexOf = arr.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;

    var fnToString = hasOwn.toString;

    var ObjectFunctionString = fnToString.call(Object);

    var support = {};

    var isFunction = function isFunction(obj) {

        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        return typeof obj === "function" && typeof obj.nodeType !== "number";
    };


    var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
    };


    var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
    };

    function DOMEval(code, node, doc) {
        doc = doc || document;

        var i, val,
            script = doc.createElement("script");

        script.text = code;
        if (node) {
            for (i in preservedScriptAttributes) {

                // Support: Firefox 64+, Edge 18+
                // Some browsers don't support the "nonce" property on scripts.
                // On the other hand, just using `getAttribute` is not enough as
                // the `nonce` attribute is reset to an empty string whenever it
                // becomes browsing-context connected.
                // See https://github.com/whatwg/html/issues/2369
                // See https://html.spec.whatwg.org/#nonce-attributes
                // The `node.getAttribute` check was added for the sake of
                // `jQuery.globalEval` so that it can fake a nonce-containing node
                // via an object.
                val = node[i] || node.getAttribute && node.getAttribute(i);
                if (val) {
                    script.setAttribute(i, val);
                }
            }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
    }


    function toType(obj) {
        if (obj == null) {
            return obj + "";
        }

        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ?
            class2type[toString.call(obj)] || "object" :
            typeof obj;
    }

    /* global Symbol */
    // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module


    var
        version = "3.4.0",

        // Define a local copy of jQuery
        jQuery = function (selector, context) {

            // The jQuery object is actually just the init constructor 'enhanced'
            // Need init if jQuery is called (just allow error to be thrown if not included)
            return new jQuery.fn.init(selector, context);
        },

        // Support: Android <=4.0 only
        // Make sure we trim BOM and NBSP
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    jQuery.fn = jQuery.prototype = {

        // The current version of jQuery being used
        jquery: version,

        constructor: jQuery,

        // The default length of a jQuery object is 0
        length: 0,

        toArray: function () {
            return slice.call(this);
        },

        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function (num) {

            // Return all the elements in a clean array
            if (num == null) {
                return slice.call(this);
            }

            // Return just the one element from the set
            return num < 0 ? this[num + this.length] : this[num];
        },

        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function (elems) {

            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);

            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;

            // Return the newly-formed element set
            return ret;
        },

        // Execute a callback for every element in the matched set.
        each: function (callback) {
            return jQuery.each(this, callback);
        },

        map: function (callback) {
            return this.pushStack(jQuery.map(this, function (elem, i) {
                return callback.call(elem, i, elem);
            }));
        },

        slice: function () {
            return this.pushStack(slice.apply(this, arguments));
        },

        first: function () {
            return this.eq(0);
        },

        last: function () {
            return this.eq(-1);
        },

        eq: function (i) {
            var len = this.length,
                j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },

        end: function () {
            return this.prevObject || this.constructor();
        },

        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };

    jQuery.extend = jQuery.fn.extend = function () {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;

            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !isFunction(target)) {
            target = {};
        }

        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {

            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {

                // Extend the base object
                for (name in options) {
                    copy = options[name];

                    // Prevent Object.prototype pollution
                    // Prevent never-ending loop
                    if (name === "__proto__" || target === copy) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (jQuery.isPlainObject(copy) ||
                        (copyIsArray = Array.isArray(copy)))) {
                        src = target[name];

                        // Ensure proper type for the source value
                        if (copyIsArray && !Array.isArray(src)) {
                            clone = [];
                        } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                            clone = {};
                        } else {
                            clone = src;
                        }
                        copyIsArray = false;

                        // Never move original objects, clone them
                        target[name] = jQuery.extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    };

    jQuery.extend({

        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

        // Assume jQuery is ready without the ready module
        isReady: true,

        error: function (msg) {
            throw new Error(msg);
        },

        noop: function () {
        },

        isPlainObject: function (obj) {
            var proto, Ctor;

            // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            if (!obj || toString.call(obj) !== "[object Object]") {
                return false;
            }

            proto = getProto(obj);

            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if (!proto) {
                return true;
            }

            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },

        isEmptyObject: function (obj) {
            var name;

            for (name in obj) {
                return false;
            }
            return true;
        },

        // Evaluates a script in a global context
        globalEval: function (code, options) {
            DOMEval(code, {nonce: options && options.nonce});
        },

        each: function (obj, callback) {
            var length, i = 0;

            if (isArrayLike(obj)) {
                length = obj.length;
                for (; i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            }

            return obj;
        },

        // Support: Android <=4.0 only
        trim: function (text) {
            return text == null ?
                "" :
                (text + "").replace(rtrim, "");
        },

        // results is for internal usage only
        makeArray: function (arr, results) {
            var ret = results || [];

            if (arr != null) {
                if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret,
                        typeof arr === "string" ?
                            [arr] : arr
                    );
                } else {
                    push.call(ret, arr);
                }
            }

            return ret;
        },

        inArray: function (elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },

        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function (first, second) {
            var len = +second.length,
                j = 0,
                i = first.length;

            for (; j < len; j++) {
                first[i++] = second[j];
            }

            first.length = i;

            return first;
        },

        grep: function (elems, callback, invert) {
            var callbackInverse,
                matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert;

            // Go through the array, only saving the items
            // that pass the validator function
            for (; i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                }
            }

            return matches;
        },

        // arg is for internal usage only
        map: function (elems, callback, arg) {
            var length, value,
                i = 0,
                ret = [];

            // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }

                // Go through every key on the object,
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }
            }

            // Flatten any nested arrays
            return concat.apply([], ret);
        },

        // A global GUID counter for objects
        guid: 1,

        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });

    if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }

    // Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function (i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
        });

    function isArrayLike(obj) {

        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length,
            type = toType(obj);

        if (isFunction(obj) || isWindow(obj)) {
            return false;
        }

        return type === "array" || length === 0 ||
            typeof length === "number" && length > 0 && (length - 1) in obj;
    }

    var Sizzle =
    /*!
    * Sizzle CSS Selector Engine v2.3.4
    * https://sizzlejs.com/
    *
    * Copyright JS Foundation and other contributors
    * Released under the MIT license
    * https://js.foundation/
    *
    * Date: 2019-04-08
    */
        (function (window) {

            var i,
                support,
                Expr,
                getText,
                isXML,
                tokenize,
                compile,
                select,
                outermostContext,
                sortInput,
                hasDuplicate,

                // Local document vars
                setDocument,
                document,
                docElem,
                documentIsHTML,
                rbuggyQSA,
                rbuggyMatches,
                matches,
                contains,

                // Instance-specific data
                expando = "sizzle" + 1 * new Date(),
                preferredDoc = window.document,
                dirruns = 0,
                done = 0,
                classCache = createCache(),
                tokenCache = createCache(),
                compilerCache = createCache(),
                nonnativeSelectorCache = createCache(),
                sortOrder = function (a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                    }
                    return 0;
                },

                // Instance methods
                hasOwn = ({}).hasOwnProperty,
                arr = [],
                pop = arr.pop,
                push_native = arr.push,
                push = arr.push,
                slice = arr.slice,
                // Use a stripped-down indexOf as it's faster than native
                // https://jsperf.com/thor-indexof-vs-for/5
                indexOf = function (list, elem) {
                    var i = 0,
                        len = list.length;
                    for (; i < len; i++) {
                        if (list[i] === elem) {
                            return i;
                        }
                    }
                    return -1;
                },

                booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

                // Regular expressions

                // http://www.w3.org/TR/css3-selectors/#whitespace
                whitespace = "[\\x20\\t\\r\\n\\f]",

                // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
                identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

                // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
                attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
                    // Operator (capture 2)
                    "*([*^$|!~]?=)" + whitespace +
                    // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
                    "*\\]",

                pseudos = ":(" + identifier + ")(?:\\((" +
                    // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
                    // 1. quoted (capture 3; capture 4 or capture 5)
                    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
                    // 2. simple (capture 6)
                    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
                    // 3. anything else (capture 2)
                    ".*" +
                    ")\\)|)",

                // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                rwhitespace = new RegExp(whitespace + "+", "g"),
                rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),

                rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                rdescend = new RegExp(whitespace + "|>"),

                rpseudo = new RegExp(pseudos),
                ridentifier = new RegExp("^" + identifier + "$"),

                matchExpr = {
                    "ID": new RegExp("^#(" + identifier + ")"),
                    "CLASS": new RegExp("^\\.(" + identifier + ")"),
                    "TAG": new RegExp("^(" + identifier + "|[*])"),
                    "ATTR": new RegExp("^" + attributes),
                    "PSEUDO": new RegExp("^" + pseudos),
                    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                        "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                        "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    "bool": new RegExp("^(?:" + booleans + ")$", "i"),
                    // For use in libraries implementing .is()
                    // We use this for POS matching in `select`
                    "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                },

                rhtml = /HTML$/i,
                rinputs = /^(?:input|select|textarea|button)$/i,
                rheader = /^h\d$/i,

                rnative = /^[^{]+\{\s*\[native \w/,

                // Easily-parseable/retrievable ID or TAG or CLASS selectors
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

                rsibling = /[+~]/,

                // CSS escapes
                // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                funescape = function (_, escaped, escapedWhitespace) {
                    var high = "0x" + escaped - 0x10000;
                    // NaN means non-codepoint
                    // Support: Firefox<24
                    // Workaround erroneous numeric interpretation of +"0x"
                    return high !== high || escapedWhitespace ?
                        escaped :
                        high < 0 ?
                            // BMP codepoint
                            String.fromCharCode(high + 0x10000) :
                            // Supplemental Plane codepoint (surrogate pair)
                            String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
                },

                // CSS string/identifier serialization
                // https://drafts.csswg.org/cssom/#common-serializing-idioms
                rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                fcssescape = function (ch, asCodePoint) {
                    if (asCodePoint) {

                        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                        if (ch === "\0") {
                            return "\uFFFD";
                        }

                        // Control characters and (dependent upon position) numbers get escaped as code points
                        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                    }

                    // Other potentially-special ASCII characters get backslash-escaped
                    return "\\" + ch;
                },

                // Used for iframes
                // See setDocument()
                // Removing the function wrapper causes a "Permission Denied"
                // error in IE
                unloadHandler = function () {
                    setDocument();
                },

                inDisabledFieldset = addCombinator(
                    function (elem) {
                        return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
                    },
                    {dir: "parentNode", next: "legend"}
                );

                // Optimize for push.apply( _, NodeList )
            try {
                push.apply(
                    (arr = slice.call(preferredDoc.childNodes)),
                    preferredDoc.childNodes
                );
                // Support: Android<4.0
                // Detect silently failing push.apply
                arr[preferredDoc.childNodes.length].nodeType;
            } catch (e) {
                push = {
                    apply: arr.length ?

                        // Leverage slice if possible
                        function (target, els) {
                            push_native.apply(target, slice.call(els));
                        } :

                        // Support: IE<9
                        // Otherwise append directly
                        function (target, els) {
                            var j = target.length,
                                i = 0;
                            // Can't trust NodeList.length
                            while ((target[j++] = els[i++])) {
                            }
                            target.length = j - 1;
                        }
                };
            }

            function Sizzle(selector, context, results, seed) {
                var m, i, elem, nid, match, groups, newSelector,
                    newContext = context && context.ownerDocument,

                    // nodeType defaults to 9, since context defaults to document
                    nodeType = context ? context.nodeType : 9;

                results = results || [];

                // Return early from calls with invalid selector or context
                if (typeof selector !== "string" || !selector ||
                    nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

                    return results;
                }

                // Try to shortcut find operations (as opposed to filters) in HTML documents
                if (!seed) {

                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                        setDocument(context);
                    }
                    context = context || document;

                    if (documentIsHTML) {

                        // If the selector is sufficiently simple, try using a "get*By*" DOM method
                        // (excepting DocumentFragment context, where the methods don't exist)
                        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

                            // ID selector
                            if ((m = match[1])) {

                                // Document context
                                if (nodeType === 9) {
                                    if ((elem = context.getElementById(m))) {

                                        // Support: IE, Opera, Webkit
                                        // TODO: identify versions
                                        // getElementById can match elements by name instead of ID
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else {
                                        return results;
                                    }

                                    // Element context
                                } else {

                                    // Support: IE, Opera, Webkit
                                    // TODO: identify versions
                                    // getElementById can match elements by name instead of ID
                                    if (newContext && (elem = newContext.getElementById(m)) &&
                                        contains(context, elem) &&
                                        elem.id === m) {

                                        results.push(elem);
                                        return results;
                                    }
                                }

                                // Type selector
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results;

                                // Class selector
                            } else if ((m = match[3]) && support.getElementsByClassName &&
                                context.getElementsByClassName) {

                                push.apply(results, context.getElementsByClassName(m));
                                return results;
                            }
                        }

                        // Take advantage of querySelectorAll
                        if (support.qsa &&
                            !nonnativeSelectorCache[selector + " "] &&
                            (!rbuggyQSA || !rbuggyQSA.test(selector)) &&

                            // Support: IE 8 only
                            // Exclude object elements
                            (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {

                            newSelector = selector;
                            newContext = context;

                            // qSA considers elements outside a scoping root when evaluating child or
                            // descendant combinators, which is not what we want.
                            // In such cases, we work around the behavior by prefixing every selector in the
                            // list with an ID selector referencing the scope context.
                            // Thanks to Andrew Dupont for this technique.
                            if (nodeType === 1 && rdescend.test(selector)) {

                                // Capture the context ID, setting it first if necessary
                                if ((nid = context.getAttribute("id"))) {
                                    nid = nid.replace(rcssescape, fcssescape);
                                } else {
                                    context.setAttribute("id", (nid = expando));
                                }

                                // Prefix every selector in the list
                                groups = tokenize(selector);
                                i = groups.length;
                                while (i--) {
                                    groups[i] = "#" + nid + " " + toSelector(groups[i]);
                                }
                                newSelector = groups.join(",");

                                // Expand context for sibling selectors
                                newContext = rsibling.test(selector) && testContext(context.parentNode) ||
                                    context;
                            }

                            try {
                                push.apply(results,
                                    newContext.querySelectorAll(newSelector)
                                );
                                return results;
                            } catch (qsaError) {
                                nonnativeSelectorCache(selector, true);
                            } finally {
                                if (nid === expando) {
                                    context.removeAttribute("id");
                                }
                            }
                        }
                    }
                }

                // All others
                return select(selector.replace(rtrim, "$1"), context, results, seed);
            }

            /**
             * Create key-value caches of limited size
             * @returns {function(string, object)} Returns the Object data after storing it on itself with
             *    property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
             *    deleting the oldest entry
             */
            function createCache() {
                var keys = [];

                function cache(key, value) {
                    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                    if (keys.push(key + " ") > Expr.cacheLength) {
                        // Only keep the most recent entries
                        delete cache[keys.shift()];
                    }
                    return (cache[key + " "] = value);
                }

                return cache;
            }

            /**
             * Mark a function for special use by Sizzle
             * @param {Function} fn The function to mark
             */
            function markFunction(fn) {
                fn[expando] = true;
                return fn;
            }

            /**
             * Support testing using an element
             * @param {Function} fn Passed the created element and returns a boolean result
             */
            function assert(fn) {
                var el = document.createElement("fieldset");

                try {
                    return !!fn(el);
                } catch (e) {
                    return false;
                } finally {
                    // Remove from its parent by default
                    if (el.parentNode) {
                        el.parentNode.removeChild(el);
                    }
                    // release memory in IE
                    el = null;
                }
            }

            /**
             * Adds the same handler for all of the specified attrs
             * @param {String} attrs Pipe-separated list of attributes
             * @param {Function} handler The method that will be applied
             */
            function addHandle(attrs, handler) {
                var arr = attrs.split("|"),
                    i = arr.length;

                while (i--) {
                    Expr.attrHandle[arr[i]] = handler;
                }
            }

            /**
             * Checks document order of two siblings
             * @param {Element} a
             * @param {Element} b
             * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
             */
            function siblingCheck(a, b) {
                var cur = b && a,
                    diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
                        a.sourceIndex - b.sourceIndex;

                // Use IE sourceIndex if available on both nodes
                if (diff) {
                    return diff;
                }

                // Check if b follows a
                if (cur) {
                    while ((cur = cur.nextSibling)) {
                        if (cur === b) {
                            return -1;
                        }
                    }
                }

                return a ? 1 : -1;
            }

            /**
             * Returns a function to use in pseudos for input types
             * @param {String} type
             */
            function createInputPseudo(type) {
                return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type;
                };
            }

            /**
             * Returns a function to use in pseudos for buttons
             * @param {String} type
             */
            function createButtonPseudo(type) {
                return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type;
                };
            }

            /**
             * Returns a function to use in pseudos for :enabled/:disabled
             * @param {Boolean} disabled true for :disabled; false for :enabled
             */
            function createDisabledPseudo(disabled) {

                // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
                return function (elem) {

                    // Only certain elements can match :enabled or :disabled
                    // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                    // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                    if ("form" in elem) {

                        // Check for inherited disabledness on relevant non-disabled elements:
                        // * listed form-associated elements in a disabled fieldset
                        //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                        //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                        // * option elements in a disabled optgroup
                        //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                        // All such elements have a "form" property.
                        if (elem.parentNode && elem.disabled === false) {

                            // Option elements defer to a parent optgroup if present
                            if ("label" in elem) {
                                if ("label" in elem.parentNode) {
                                    return elem.parentNode.disabled === disabled;
                                } else {
                                    return elem.disabled === disabled;
                                }
                            }

                            // Support: IE 6 - 11
                            // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                            return elem.isDisabled === disabled ||

                                // Where there is no isDisabled, check manually
                                /* jshint -W018 */
                                elem.isDisabled !== !disabled &&
                                inDisabledFieldset(elem) === disabled;
                        }

                        return elem.disabled === disabled;

                        // Try to winnow out elements that can't be disabled before trusting the disabled property.
                        // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                        // even exist on them, let alone have a boolean value.
                    } else if ("label" in elem) {
                        return elem.disabled === disabled;
                    }

                    // Remaining elements are neither :enabled nor :disabled
                    return false;
                };
            }

            /**
             * Returns a function to use in pseudos for positionals
             * @param {Function} fn
             */
            function createPositionalPseudo(fn) {
                return markFunction(function (argument) {
                    argument = +argument;
                    return markFunction(function (seed, matches) {
                        var j,
                            matchIndexes = fn([], seed.length, argument),
                            i = matchIndexes.length;

                        // Match elements found at the specified indexes
                        while (i--) {
                            if (seed[(j = matchIndexes[i])]) {
                                seed[j] = !(matches[j] = seed[j]);
                            }
                        }
                    });
                });
            }

            /**
             * Checks a node for validity as a Sizzle context
             * @param {Element|Object=} context
             * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
             */
            function testContext(context) {
                return context && typeof context.getElementsByTagName !== "undefined" && context;
            }

    // Expose support vars for convenience
            support = Sizzle.support = {};

            /**
             * Detects XML nodes
             * @param {Element|Object} elem An element or a document
             * @returns {Boolean} True iff elem is a non-HTML XML node
             */
            isXML = Sizzle.isXML = function (elem) {
                var namespace = elem.namespaceURI,
                    docElem = (elem.ownerDocument || elem).documentElement;

                // Support: IE <=8
                // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
                // https://bugs.jquery.com/ticket/4833
                return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
            };

            /**
             * Sets document-related variables once based on the current document
             * @param {Element|Object} [doc] An element or document object to use to set the document
             * @returns {Object} Returns the current document
             */
            setDocument = Sizzle.setDocument = function (node) {
                var hasCompare, subWindow,
                    doc = node ? node.ownerDocument || node : preferredDoc;

                // Return early if doc is invalid or already selected
                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document;
                }

                // Update global variables
                document = doc;
                docElem = document.documentElement;
                documentIsHTML = !isXML(document);

                // Support: IE 9-11, Edge
                // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
                if (preferredDoc !== document &&
                    (subWindow = document.defaultView) && subWindow.top !== subWindow) {

                    // Support: IE 11, Edge
                    if (subWindow.addEventListener) {
                        subWindow.addEventListener("unload", unloadHandler, false);

                        // Support: IE 9 - 10 only
                    } else if (subWindow.attachEvent) {
                        subWindow.attachEvent("onunload", unloadHandler);
                    }
                }

                /* Attributes
	---------------------------------------------------------------------- */

                // Support: IE<8
                // Verify that getAttribute really returns attributes and not properties
                // (excepting IE8 booleans)
                support.attributes = assert(function (el) {
                    el.className = "i";
                    return !el.getAttribute("className");
                });

                /* getElement(s)By*
	---------------------------------------------------------------------- */

                // Check if getElementsByTagName("*") returns only elements
                support.getElementsByTagName = assert(function (el) {
                    el.appendChild(document.createComment(""));
                    return !el.getElementsByTagName("*").length;
                });

                // Support: IE<9
                support.getElementsByClassName = rnative.test(document.getElementsByClassName);

                // Support: IE<10
                // Check if getElementById returns elements by name
                // The broken getElementById methods don't pick up programmatically-set names,
                // so use a roundabout getElementsByName test
                support.getById = assert(function (el) {
                    docElem.appendChild(el).id = expando;
                    return !document.getElementsByName || !document.getElementsByName(expando).length;
                });

                // ID filter and find
                if (support.getById) {
                    Expr.filter["ID"] = function (id) {
                        var attrId = id.replace(runescape, funescape);
                        return function (elem) {
                            return elem.getAttribute("id") === attrId;
                        };
                    };
                    Expr.find["ID"] = function (id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var elem = context.getElementById(id);
                            return elem ? [elem] : [];
                        }
                    };
                } else {
                    Expr.filter["ID"] = function (id) {
                        var attrId = id.replace(runescape, funescape);
                        return function (elem) {
                            var node = typeof elem.getAttributeNode !== "undefined" &&
                                elem.getAttributeNode("id");
                            return node && node.value === attrId;
                        };
                    };

                    // Support: IE 6 - 7 only
                    // getElementById is not reliable as a find shortcut
                    Expr.find["ID"] = function (id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var node, i, elems,
                                elem = context.getElementById(id);

                            if (elem) {

                                // Verify the id attribute
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) {
                                    return [elem];
                                }

                                // Fall back on getElementsByName
                                elems = context.getElementsByName(id);
                                i = 0;
                                while ((elem = elems[i++])) {
                                    node = elem.getAttributeNode("id");
                                    if (node && node.value === id) {
                                        return [elem];
                                    }
                                }
                            }

                            return [];
                        }
                    };
                }

                // Tag
                Expr.find["TAG"] = support.getElementsByTagName ?
                    function (tag, context) {
                        if (typeof context.getElementsByTagName !== "undefined") {
                            return context.getElementsByTagName(tag);

                            // DocumentFragment nodes don't have gEBTN
                        } else if (support.qsa) {
                            return context.querySelectorAll(tag);
                        }
                    } :

                    function (tag, context) {
                        var elem,
                            tmp = [],
                            i = 0,
                            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                            results = context.getElementsByTagName(tag);

                        // Filter out possible comments
                        if (tag === "*") {
                            while ((elem = results[i++])) {
                                if (elem.nodeType === 1) {
                                    tmp.push(elem);
                                }
                            }

                            return tmp;
                        }
                        return results;
                    };

                // Class
                Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
                    if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                        return context.getElementsByClassName(className);
                    }
                };

                /* QSA/matchesSelector
	---------------------------------------------------------------------- */

                // QSA and matchesSelector support

                // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                rbuggyMatches = [];

                // qSa(:focus) reports false when true (Chrome 21)
                // We allow this because of a bug in IE8/9 that throws an error
                // whenever `document.activeElement` is accessed on an iframe
                // So, we allow :focus to pass through QSA all the time to avoid the IE error
                // See https://bugs.jquery.com/ticket/13378
                rbuggyQSA = [];

                if ((support.qsa = rnative.test(document.querySelectorAll))) {
                    // Build QSA regex
                    // Regex strategy adopted from Diego Perini
                    assert(function (el) {
                        // Select is set to empty string on purpose
                        // This is to test IE's treatment of not explicitly
                        // setting a boolean content attribute,
                        // since its presence should be enough
                        // https://bugs.jquery.com/ticket/12359
                        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" +
                            "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                            "<option selected=''></option></select>";

                        // Support: IE8, Opera 11-12.16
                        // Nothing should be selected when empty strings follow ^= or $= or *=
                        // The test attribute must be unknown in Opera but "safe" for WinRT
                        // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                        if (el.querySelectorAll("[msallowcapture^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                        }

                        // Support: IE8
                        // Boolean attributes and "value" are not treated correctly
                        if (!el.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                        }

                        // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                            rbuggyQSA.push("~=");
                        }

                        // Webkit/Opera - :checked should return selected option elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        // IE8 throws error here and will not see later tests
                        if (!el.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked");
                        }

                        // Support: Safari 8+, iOS 8+
                        // https://bugs.webkit.org/show_bug.cgi?id=136851
                        // In-page `selector#id sibling-combinator selector` fails
                        if (!el.querySelectorAll("a#" + expando + "+*").length) {
                            rbuggyQSA.push(".#.+[+~]");
                        }
                    });

                    assert(function (el) {
                        el.innerHTML = "<a href='' disabled='disabled'></a>" +
                            "<select disabled='disabled'><option/></select>";

                        // Support: Windows 8 Native Apps
                        // The type and name attributes are restricted during .innerHTML assignment
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden");
                        el.appendChild(input).setAttribute("name", "D");

                        // Support: IE8
                        // Enforce case-sensitivity of name attribute
                        if (el.querySelectorAll("[name=d]").length) {
                            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                        }

                        // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                        // IE8 throws error here and will not see later tests
                        if (el.querySelectorAll(":enabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        }

                        // Support: IE9-11+
                        // IE's :disabled selector does not pick up the children of disabled fieldsets
                        docElem.appendChild(el).disabled = true;
                        if (el.querySelectorAll(":disabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        }

                        // Opera 10-11 does not throw on post-comma invalid pseudos
                        el.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:");
                    });
                }

                if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
                    docElem.webkitMatchesSelector ||
                    docElem.mozMatchesSelector ||
                    docElem.oMatchesSelector ||
                    docElem.msMatchesSelector)))) {

                    assert(function (el) {
                        // Check to see if it's possible to do matchesSelector
                        // on a disconnected node (IE 9)
                        support.disconnectedMatch = matches.call(el, "*");

                        // This should fail with an exception
                        // Gecko does not error, returns false instead
                        matches.call(el, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos);
                    });
                }

                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

                /* Contains
	---------------------------------------------------------------------- */
                hasCompare = rnative.test(docElem.compareDocumentPosition);

                // Element contains another
                // Purposefully self-exclusive
                // As in, an element does not contain itself
                contains = hasCompare || rnative.test(docElem.contains) ?
                    function (a, b) {
                        var adown = a.nodeType === 9 ? a.documentElement : a,
                            bup = b && b.parentNode;
                        return a === bup || !!(bup && bup.nodeType === 1 && (
                            adown.contains ?
                                adown.contains(bup) :
                                a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
                        ));
                    } :
                    function (a, b) {
                        if (b) {
                            while ((b = b.parentNode)) {
                                if (b === a) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    };

                /* Sorting
	---------------------------------------------------------------------- */

                // Document order sorting
                sortOrder = hasCompare ?
                    function (a, b) {

                        // Flag for duplicate removal
                        if (a === b) {
                            hasDuplicate = true;
                            return 0;
                        }

                        // Sort on method existence if only one input has compareDocumentPosition
                        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        if (compare) {
                            return compare;
                        }

                        // Calculate position if both inputs belong to the same document
                        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ?
                            a.compareDocumentPosition(b) :

                            // Otherwise we know they are disconnected
                            1;

                        // Disconnected nodes
                        if (compare & 1 ||
                            (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {

                            // Choose the first element that is related to our preferred document
                            if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                                return -1;
                            }
                            if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                                return 1;
                            }

                            // Maintain original order
                            return sortInput ?
                                (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                                0;
                        }

                        return compare & 4 ? -1 : 1;
                    } :
                    function (a, b) {
                        // Exit early if the nodes are identical
                        if (a === b) {
                            hasDuplicate = true;
                            return 0;
                        }

                        var cur,
                            i = 0,
                            aup = a.parentNode,
                            bup = b.parentNode,
                            ap = [a],
                            bp = [b];

                        // Parentless nodes are either documents or disconnected
                        if (!aup || !bup) {
                            return a === document ? -1 :
                                b === document ? 1 :
                                    aup ? -1 :
                                        bup ? 1 :
                                            sortInput ?
                                                (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                                                0;

                            // If the nodes are siblings, we can do a quick check
                        } else if (aup === bup) {
                            return siblingCheck(a, b);
                        }

                        // Otherwise we need full lists of their ancestors for comparison
                        cur = a;
                        while ((cur = cur.parentNode)) {
                            ap.unshift(cur);
                        }
                        cur = b;
                        while ((cur = cur.parentNode)) {
                            bp.unshift(cur);
                        }

                        // Walk down the tree looking for a discrepancy
                        while (ap[i] === bp[i]) {
                            i++;
                        }

                        return i ?
                            // Do a sibling check if the nodes have a common ancestor
                            siblingCheck(ap[i], bp[i]) :

                            // Otherwise nodes in our document sort first
                            ap[i] === preferredDoc ? -1 :
                                bp[i] === preferredDoc ? 1 :
                                    0;
                    };

                return document;
            };

            Sizzle.matches = function (expr, elements) {
                return Sizzle(expr, null, null, elements);
            };

            Sizzle.matchesSelector = function (elem, expr) {
                // Set document vars if needed
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }

                if (support.matchesSelector && documentIsHTML &&
                    !nonnativeSelectorCache[expr + " "] &&
                    (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
                    (!rbuggyQSA || !rbuggyQSA.test(expr))) {

                    try {
                        var ret = matches.call(elem, expr);

                        // IE 9's matchesSelector returns false on disconnected nodes
                        if (ret || support.disconnectedMatch ||
                            // As well, disconnected nodes are said to be in a document
                            // fragment in IE 9
                            elem.document && elem.document.nodeType !== 11) {
                            return ret;
                        }
                    } catch (e) {
                        nonnativeSelectorCache(expr, true);
                    }
                }

                return Sizzle(expr, document, null, [elem]).length > 0;
            };

            Sizzle.contains = function (context, elem) {
                // Set document vars if needed
                if ((context.ownerDocument || context) !== document) {
                    setDocument(context);
                }
                return contains(context, elem);
            };

            Sizzle.attr = function (elem, name) {
                // Set document vars if needed
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }

                var fn = Expr.attrHandle[name.toLowerCase()],
                    // Don't get fooled by Object.prototype properties (jQuery #13807)
                    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
                        fn(elem, name, !documentIsHTML) :
                        undefined;

                return val !== undefined ?
                    val :
                    support.attributes || !documentIsHTML ?
                        elem.getAttribute(name) :
                        (val = elem.getAttributeNode(name)) && val.specified ?
                            val.value :
                            null;
            };

            Sizzle.escape = function (sel) {
                return (sel + "").replace(rcssescape, fcssescape);
            };

            Sizzle.error = function (msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg);
            };

            /**
             * Document sorting and removing duplicates
             * @param {ArrayLike} results
             */
            Sizzle.uniqueSort = function (results) {
                var elem,
                    duplicates = [],
                    j = 0,
                    i = 0;

                // Unless we *know* we can detect duplicates, assume their presence
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);

                if (hasDuplicate) {
                    while ((elem = results[i++])) {
                        if (elem === results[i]) {
                            j = duplicates.push(i);
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1);
                    }
                }

                // Clear input after sorting to release objects
                // See https://github.com/jquery/sizzle/pull/225
                sortInput = null;

                return results;
            };

            /**
             * Utility function for retrieving the text value of an array of DOM nodes
             * @param {Array|Element} elem
             */
            getText = Sizzle.getText = function (elem) {
                var node,
                    ret = "",
                    i = 0,
                    nodeType = elem.nodeType;

                if (!nodeType) {
                    // If no nodeType, this is expected to be an array
                    while ((node = elem[i++])) {
                        // Do not traverse comment nodes
                        ret += getText(node);
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    // Use textContent for elements
                    // innerText usage removed for consistency of new lines (jQuery #11153)
                    if (typeof elem.textContent === "string") {
                        return elem.textContent;
                    } else {
                        // Traverse its children
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem);
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue;
                }
                // Do not include comment or processing instruction nodes

                return ret;
            };

            Expr = Sizzle.selectors = {

                // Can be adjusted by the user
                cacheLength: 50,

                createPseudo: markFunction,

                match: matchExpr,

                attrHandle: {},

                find: {},

                relative: {
                    ">": {dir: "parentNode", first: true},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: true},
                    "~": {dir: "previousSibling"}
                },

                preFilter: {
                    "ATTR": function (match) {
                        match[1] = match[1].replace(runescape, funescape);

                        // Move the given value to match[3] whether quoted or unquoted
                        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " ";
                        }

                        return match.slice(0, 4);
                    },

                    "CHILD": function (match) {
                        /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
                        match[1] = match[1].toLowerCase();

                        if (match[1].slice(0, 3) === "nth") {
                            // nth-* requires argument
                            if (!match[3]) {
                                Sizzle.error(match[0]);
                            }

                            // numeric x and y parameters for Expr.filter.CHILD
                            // remember that false/true cast respectively to 0/1
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +((match[7] + match[8]) || match[3] === "odd");

                            // other types prohibit arguments
                        } else if (match[3]) {
                            Sizzle.error(match[0]);
                        }

                        return match;
                    },

                    "PSEUDO": function (match) {
                        var excess,
                            unquoted = !match[6] && match[2];

                        if (matchExpr["CHILD"].test(match[0])) {
                            return null;
                        }

                        // Accept quoted arguments as-is
                        if (match[3]) {
                            match[2] = match[4] || match[5] || "";

                            // Strip excess characters from unquoted arguments
                        } else if (unquoted && rpseudo.test(unquoted) &&
                            // Get excess from tokenize (recursively)
                            (excess = tokenize(unquoted, true)) &&
                            // advance to the next closing parenthesis
                            (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

                            // excess is a negative index
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess);
                        }

                        // Return only captures needed by the pseudo filter method (type and argument)
                        return match.slice(0, 3);
                    }
                },

                filter: {

                    "TAG": function (nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ?
                            function () {
                                return true;
                            } :
                            function (elem) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                            };
                    },

                    "CLASS": function (className) {
                        var pattern = classCache[className + " "];

                        return pattern ||
                            (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
                            classCache(className, function (elem) {
                                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                            });
                    },

                    "ATTR": function (name, operator, check) {
                        return function (elem) {
                            var result = Sizzle.attr(elem, name);

                            if (result == null) {
                                return operator === "!=";
                            }
                            if (!operator) {
                                return true;
                            }

                            result += "";

                            return operator === "=" ? result === check :
                                operator === "!=" ? result !== check :
                                    operator === "^=" ? check && result.indexOf(check) === 0 :
                                        operator === "*=" ? check && result.indexOf(check) > -1 :
                                            operator === "$=" ? check && result.slice(-check.length) === check :
                                                operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 :
                                                    operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
                                                        false;
                        };
                    },

                    "CHILD": function (type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth",
                            forward = type.slice(-4) !== "last",
                            ofType = what === "of-type";

                        return first === 1 && last === 0 ?

                            // Shortcut for :nth-*(n)
                            function (elem) {
                                return !!elem.parentNode;
                            } :

                            function (elem, context, xml) {
                                var cache, uniqueCache, outerCache, node, nodeIndex, start,
                                    dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType,
                                    diff = false;

                                if (parent) {

                                    // :(first|last|only)-(child|of-type)
                                    if (simple) {
                                        while (dir) {
                                            node = elem;
                                            while ((node = node[dir])) {
                                                if (ofType ?
                                                    node.nodeName.toLowerCase() === name :
                                                    node.nodeType === 1) {

                                                    return false;
                                                }
                                            }
                                            // Reverse direction for :only-* (if we haven't yet done so)
                                            start = dir = type === "only" && !start && "nextSibling";
                                        }
                                        return true;
                                    }

                                    start = [forward ? parent.firstChild : parent.lastChild];

                                    // non-xml :nth-child(...) stores cache data on `parent`
                                    if (forward && useCache) {

                                        // Seek `elem` from a previously-cached index

                                        // ...in a gzip-friendly way
                                        node = parent;
                                        outerCache = node[expando] || (node[expando] = {});

                                        // Support: IE <9 only
                                        // Defend against cloned attroperties (jQuery gh-1709)
                                        uniqueCache = outerCache[node.uniqueID] ||
                                            (outerCache[node.uniqueID] = {});

                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex && cache[2];
                                        node = nodeIndex && parent.childNodes[nodeIndex];

                                        while ((node = ++nodeIndex && node && node[dir] ||

                                            // Fallback to seeking `elem` from the start
                                            (diff = nodeIndex = 0) || start.pop())) {

                                            // When found, cache indexes on `parent` and break
                                            if (node.nodeType === 1 && ++diff && node === elem) {
                                                uniqueCache[type] = [dirruns, nodeIndex, diff];
                                                break;
                                            }
                                        }

                                    } else {
                                        // Use previously-cached element index if available
                                        if (useCache) {
                                            // ...in a gzip-friendly way
                                            node = elem;
                                            outerCache = node[expando] || (node[expando] = {});

                                            // Support: IE <9 only
                                            // Defend against cloned attroperties (jQuery gh-1709)
                                            uniqueCache = outerCache[node.uniqueID] ||
                                                (outerCache[node.uniqueID] = {});

                                            cache = uniqueCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex;
                                        }

                                        // xml :nth-child(...)
                                        // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                        if (diff === false) {
                                            // Use the same loop as above to seek `elem` from the start
                                            while ((node = ++nodeIndex && node && node[dir] ||
                                                (diff = nodeIndex = 0) || start.pop())) {

                                                if ((ofType ?
                                                    node.nodeName.toLowerCase() === name :
                                                    node.nodeType === 1) &&
                                                    ++diff) {

                                                    // Cache the index of each encountered element
                                                    if (useCache) {
                                                        outerCache = node[expando] || (node[expando] = {});

                                                        // Support: IE <9 only
                                                        // Defend against cloned attroperties (jQuery gh-1709)
                                                        uniqueCache = outerCache[node.uniqueID] ||
                                                            (outerCache[node.uniqueID] = {});

                                                        uniqueCache[type] = [dirruns, diff];
                                                    }

                                                    if (node === elem) {
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    // Incorporate the offset, then check against cycle size
                                    diff -= last;
                                    return diff === first || (diff % first === 0 && diff / first >= 0);
                                }
                            };
                    },

                    "PSEUDO": function (pseudo, argument) {
                        // pseudo-class names are case-insensitive
                        // http://www.w3.org/TR/selectors/#pseudo-classes
                        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                        // Remember that setFilters inherits from pseudos
                        var args,
                            fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
                                Sizzle.error("unsupported pseudo: " + pseudo);

                        // The user may use createPseudo to indicate that
                        // arguments are needed to create the filter function
                        // just as Sizzle does
                        if (fn[expando]) {
                            return fn(argument);
                        }

                        // But maintain support for old signatures
                        if (fn.length > 1) {
                            args = [pseudo, pseudo, "", argument];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
                                markFunction(function (seed, matches) {
                                    var idx,
                                        matched = fn(seed, argument),
                                        i = matched.length;
                                    while (i--) {
                                        idx = indexOf(seed, matched[i]);
                                        seed[idx] = !(matches[idx] = matched[i]);
                                    }
                                }) :
                                function (elem) {
                                    return fn(elem, 0, args);
                                };
                        }

                        return fn;
                    }
                },

                pseudos: {
                    // Potentially complex pseudos
                    "not": markFunction(function (selector) {
                        // Trim the selector passed to compile
                        // to avoid treating leading and trailing
                        // spaces as combinators
                        var input = [],
                            results = [],
                            matcher = compile(selector.replace(rtrim, "$1"));

                        return matcher[expando] ?
                            markFunction(function (seed, matches, context, xml) {
                                var elem,
                                    unmatched = matcher(seed, null, xml, []),
                                    i = seed.length;

                                // Match elements unmatched by `matcher`
                                while (i--) {
                                    if ((elem = unmatched[i])) {
                                        seed[i] = !(matches[i] = elem);
                                    }
                                }
                            }) :
                            function (elem, context, xml) {
                                input[0] = elem;
                                matcher(input, null, xml, results);
                                // Don't keep the element (issue #299)
                                input[0] = null;
                                return !results.pop();
                            };
                    }),

                    "has": markFunction(function (selector) {
                        return function (elem) {
                            return Sizzle(selector, elem).length > 0;
                        };
                    }),

                    "contains": markFunction(function (text) {
                        text = text.replace(runescape, funescape);
                        return function (elem) {
                            return (elem.textContent || getText(elem)).indexOf(text) > -1;
                        };
                    }),

                    // "Whether an element is represented by a :lang() selector
                    // is based solely on the element's language value
                    // being equal to the identifier C,
                    // or beginning with the identifier C immediately followed by "-".
                    // The matching of C against the element's language value is performed case-insensitively.
                    // The identifier C does not have to be a valid language name."
                    // http://www.w3.org/TR/selectors/#lang-pseudo
                    "lang": markFunction(function (lang) {
                        // lang value must be a valid identifier
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang);
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function (elem) {
                            var elemLang;
                            do {
                                if ((elemLang = documentIsHTML ?
                                    elem.lang :
                                    elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {

                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return false;
                        };
                    }),

                    // Miscellaneous
                    "target": function (elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id;
                    },

                    "root": function (elem) {
                        return elem === docElem;
                    },

                    "focus": function (elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                    },

                    // Boolean properties
                    "enabled": createDisabledPseudo(false),
                    "disabled": createDisabledPseudo(true),

                    "checked": function (elem) {
                        // In CSS3, :checked should return both checked and selected elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        var nodeName = elem.nodeName.toLowerCase();
                        return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
                    },

                    "selected": function (elem) {
                        // Accessing this property makes selected-by-default
                        // options in Safari work properly
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex;
                        }

                        return elem.selected === true;
                    },

                    // Contents
                    "empty": function (elem) {
                        // http://www.w3.org/TR/selectors/#empty-pseudo
                        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                        //   but not by others (comment: 8; processing instruction: 7; etc.)
                        // nodeType < 6 works because attributes (2) do not appear as children
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeType < 6) {
                                return false;
                            }
                        }
                        return true;
                    },

                    "parent": function (elem) {
                        return !Expr.pseudos["empty"](elem);
                    },

                    // Element/input types
                    "header": function (elem) {
                        return rheader.test(elem.nodeName);
                    },

                    "input": function (elem) {
                        return rinputs.test(elem.nodeName);
                    },

                    "button": function (elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button";
                    },

                    "text": function (elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" &&
                            elem.type === "text" &&

                            // Support: IE<8
                            // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                            ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                    },

                    // Position-in-collection
                    "first": createPositionalPseudo(function () {
                        return [0];
                    }),

                    "last": createPositionalPseudo(function (matchIndexes, length) {
                        return [length - 1];
                    }),

                    "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument];
                    }),

                    "even": createPositionalPseudo(function (matchIndexes, length) {
                        var i = 0;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),

                    "odd": createPositionalPseudo(function (matchIndexes, length) {
                        var i = 1;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),

                    "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
                        var i = argument < 0 ?
                            argument + length :
                            argument > length ?
                                length :
                                argument;
                        for (; --i >= 0;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),

                    "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; ++i < length;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    })
                }
            };

            Expr.pseudos["nth"] = Expr.pseudos["eq"];

    // Add button/input type pseudos
            for (i in {radio: true, checkbox: true, file: true, password: true, image: true}) {
                Expr.pseudos[i] = createInputPseudo(i);
            }
            for (i in {submit: true, reset: true}) {
                Expr.pseudos[i] = createButtonPseudo(i);
            }

    // Easy API for creating new setFilters
            function setFilters() {
            }

            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();

            tokenize = Sizzle.tokenize = function (selector, parseOnly) {
                var matched, match, tokens, type,
                    soFar, groups, preFilters,
                    cached = tokenCache[selector + " "];

                if (cached) {
                    return parseOnly ? 0 : cached.slice(0);
                }

                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;

                while (soFar) {

                    // Comma and first run
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) {
                            // Don't consume trailing commas as valid
                            soFar = soFar.slice(match[0].length) || soFar;
                        }
                        groups.push((tokens = []));
                    }

                    matched = false;

                    // Combinators
                    if ((match = rcombinators.exec(soFar))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            // Cast descendant combinators to space
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length);
                    }

                    // Filters
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
                            (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length);
                        }
                    }

                    if (!matched) {
                        break;
                    }
                }

                // Return the length of the invalid excess
                // if we're just parsing
                // Otherwise, throw an error or return tokens
                return parseOnly ?
                    soFar.length :
                    soFar ?
                        Sizzle.error(selector) :
                        // Cache the tokens
                        tokenCache(selector, groups).slice(0);
            };

            function toSelector(tokens) {
                var i = 0,
                    len = tokens.length,
                    selector = "";
                for (; i < len; i++) {
                    selector += tokens[i].value;
                }
                return selector;
            }

            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir,
                    skip = combinator.next,
                    key = skip || dir,
                    checkNonElements = base && key === "parentNode",
                    doneName = done++;

                return combinator.first ?
                    // Check against closest ancestor/preceding element
                    function (elem, context, xml) {
                        while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                return matcher(elem, context, xml);
                            }
                        }
                        return false;
                    } :

                    // Check against all ancestor/preceding elements
                    function (elem, context, xml) {
                        var oldCache, uniqueCache, outerCache,
                            newCache = [dirruns, doneName];

                        // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                        if (xml) {
                            while ((elem = elem[dir])) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    if (matcher(elem, context, xml)) {
                                        return true;
                                    }
                                }
                            }
                        } else {
                            while ((elem = elem[dir])) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    outerCache = elem[expando] || (elem[expando] = {});

                                    // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

                                    if (skip && skip === elem.nodeName.toLowerCase()) {
                                        elem = elem[dir] || elem;
                                    } else if ((oldCache = uniqueCache[key]) &&
                                        oldCache[0] === dirruns && oldCache[1] === doneName) {

                                        // Assign to newCache so results back-propagate to previous elements
                                        return (newCache[2] = oldCache[2]);
                                    } else {
                                        // Reuse newcache so results back-propagate to previous elements
                                        uniqueCache[key] = newCache;

                                        // A match means we're done; a fail means we have to keep checking
                                        if ((newCache[2] = matcher(elem, context, xml))) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                        return false;
                    };
            }

            function elementMatcher(matchers) {
                return matchers.length > 1 ?
                    function (elem, context, xml) {
                        var i = matchers.length;
                        while (i--) {
                            if (!matchers[i](elem, context, xml)) {
                                return false;
                            }
                        }
                        return true;
                    } :
                    matchers[0];
            }

            function multipleContexts(selector, contexts, results) {
                var i = 0,
                    len = contexts.length;
                for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results);
                }
                return results;
            }

            function condense(unmatched, map, filter, context, xml) {
                var elem,
                    newUnmatched = [],
                    i = 0,
                    len = unmatched.length,
                    mapped = map != null;

                for (; i < len; i++) {
                    if ((elem = unmatched[i])) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i);
                            }
                        }
                    }
                }

                return newUnmatched;
            }

            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter);
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector);
                }
                return markFunction(function (seed, results, context, xml) {
                    var temp, i, elem,
                        preMap = [],
                        postMap = [],
                        preexisting = results.length,

                        // Get initial elements from seed or context
                        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),

                        // Prefilter to get matcher input, preserving a map for seed-results synchronization
                        matcherIn = preFilter && (seed || !selector) ?
                            condense(elems, preMap, preFilter, context, xml) :
                            elems,

                        matcherOut = matcher ?
                            // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                            postFinder || (seed ? preFilter : preexisting || postFilter) ?

                                // ...intermediate processing is necessary
                                [] :

                                // ...otherwise use results directly
                                results :
                            matcherIn;

                    // Find primary matches
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml);
                    }

                    // Apply postFilter
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml);

                        // Un-match failing elements by moving them back to matcherIn
                        i = temp.length;
                        while (i--) {
                            if ((elem = temp[i])) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                        }
                    }

                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                // Get the final matcherOut by condensing this intermediate into postFinder contexts
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if ((elem = matcherOut[i])) {
                                        // Restore matcherIn since elem is not yet a final match
                                        temp.push((matcherIn[i] = elem));
                                    }
                                }
                                postFinder(null, (matcherOut = []), temp, xml);
                            }

                            // Move matched elements from seed to results to keep them synchronized
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) &&
                                    (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

                                    seed[temp] = !(results[temp] = elem);
                                }
                            }
                        }

                        // Add elements to results, through postFinder if defined
                    } else {
                        matcherOut = condense(
                            matcherOut === results ?
                                matcherOut.splice(preexisting, matcherOut.length) :
                                matcherOut
                        );
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml);
                        } else {
                            push.apply(results, matcherOut);
                        }
                    }
                });
            }

            function matcherFromTokens(tokens) {
                var checkContext, matcher, j,
                    len = tokens.length,
                    leadingRelative = Expr.relative[tokens[0].type],
                    implicitRelative = leadingRelative || Expr.relative[" "],
                    i = leadingRelative ? 1 : 0,

                    // The foundational matcher ensures that elements are reachable from top-level context(s)
                    matchContext = addCombinator(function (elem) {
                        return elem === checkContext;
                    }, implicitRelative, true),
                    matchAnyContext = addCombinator(function (elem) {
                        return indexOf(checkContext, elem) > -1;
                    }, implicitRelative, true),
                    matchers = [function (elem, context, xml) {
                        var ret = (!leadingRelative && (xml || context !== outermostContext)) || (
                            (checkContext = context).nodeType ?
                                matchContext(elem, context, xml) :
                                matchAnyContext(elem, context, xml));
                        // Avoid hanging onto element (issue #299)
                        checkContext = null;
                        return ret;
                    }];

                for (; i < len; i++) {
                    if ((matcher = Expr.relative[tokens[i].type])) {
                        matchers = [addCombinator(elementMatcher(matchers), matcher)];
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

                        // Return special upon seeing a positional matcher
                        if (matcher[expando]) {
                            // Find the next relative operator (if any) for proper handling
                            j = ++i;
                            for (; j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break;
                                }
                            }
                            return setMatcher(
                                i > 1 && elementMatcher(matchers),
                                i > 1 && toSelector(
                                // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                                tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})
                                ).replace(rtrim, "$1"),
                                matcher,
                                i < j && matcherFromTokens(tokens.slice(i, j)),
                                j < len && matcherFromTokens((tokens = tokens.slice(j))),
                                j < len && toSelector(tokens)
                            );
                        }
                        matchers.push(matcher);
                    }
                }

                return elementMatcher(matchers);
            }

            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0,
                    byElement = elementMatchers.length > 0,
                    superMatcher = function (seed, context, xml, results, outermost) {
                        var elem, j, matcher,
                            matchedCount = 0,
                            i = "0",
                            unmatched = seed && [],
                            setMatched = [],
                            contextBackup = outermostContext,
                            // We must always have either seed elements or outermost context
                            elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                            // Use integer dirruns iff this is the outermost matcher
                            dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                            len = elems.length;

                        if (outermost) {
                            outermostContext = context === document || context || outermost;
                        }

                        // Add elements passing elementMatchers directly to results
                        // Support: IE<9, Safari
                        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                        for (; i !== len && (elem = elems[i]) != null; i++) {
                            if (byElement && elem) {
                                j = 0;
                                if (!context && elem.ownerDocument !== document) {
                                    setDocument(elem);
                                    xml = !documentIsHTML;
                                }
                                while ((matcher = elementMatchers[j++])) {
                                    if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break;
                                    }
                                }
                                if (outermost) {
                                    dirruns = dirrunsUnique;
                                }
                            }

                            // Track unmatched elements for set filters
                            if (bySet) {
                                // They will have gone through all possible matchers
                                if ((elem = !matcher && elem)) {
                                    matchedCount--;
                                }

                                // Lengthen the array for every element, matched or not
                                if (seed) {
                                    unmatched.push(elem);
                                }
                            }
                        }

                        // `i` is now the count of elements visited above, and adding it to `matchedCount`
                        // makes the latter nonnegative.
                        matchedCount += i;

                        // Apply set filters to unmatched elements
                        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                        // no element matchers and no seed.
                        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                        // numerically zero.
                        if (bySet && i !== matchedCount) {
                            j = 0;
                            while ((matcher = setMatchers[j++])) {
                                matcher(unmatched, setMatched, context, xml);
                            }

                            if (seed) {
                                // Reintegrate element matches to eliminate the need for sorting
                                if (matchedCount > 0) {
                                    while (i--) {
                                        if (!(unmatched[i] || setMatched[i])) {
                                            setMatched[i] = pop.call(results);
                                        }
                                    }
                                }

                                // Discard index placeholder values to get only actual matches
                                setMatched = condense(setMatched);
                            }

                            // Add matches to results
                            push.apply(results, setMatched);

                            // Seedless set matches succeeding multiple successful matchers stipulate sorting
                            if (outermost && !seed && setMatched.length > 0 &&
                                (matchedCount + setMatchers.length) > 1) {

                                Sizzle.uniqueSort(results);
                            }
                        }

                        // Override manipulation of globals by nested matchers
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            outermostContext = contextBackup;
                        }

                        return unmatched;
                    };

                return bySet ?
                    markFunction(superMatcher) :
                    superMatcher;
            }

            compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
                var i,
                    setMatchers = [],
                    elementMatchers = [],
                    cached = compilerCache[selector + " "];

                if (!cached) {
                    // Generate a function of recursive functions that can be used to check each element
                    if (!match) {
                        match = tokenize(selector);
                    }
                    i = match.length;
                    while (i--) {
                        cached = matcherFromTokens(match[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached);
                        } else {
                            elementMatchers.push(cached);
                        }
                    }

                    // Cache the compiled function
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

                    // Save selector and tokenization
                    cached.selector = selector;
                }
                return cached;
            };

            /**
             * A low-level selection function that works with Sizzle's compiled
             *  selector functions
             * @param {String|Function} selector A selector or a pre-compiled
             *  selector function built with Sizzle.compile
             * @param {Element} context
             * @param {Array} [results]
             * @param {Array} [seed] A set of elements to match against
             */
            select = Sizzle.select = function (selector, context, results, seed) {
                var i, tokens, token, type, find,
                    compiled = typeof selector === "function" && selector,
                    match = !seed && tokenize((selector = compiled.selector || selector));

                results = results || [];

                // Try to minimize operations if there is only one selector in the list and no seed
                // (the latter of which guarantees us context)
                if (match.length === 1) {

                    // Reduce context if the leading compound selector is an ID
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                        context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results;

                            // Precompiled matchers will still verify ancestry, so step up a level
                        } else if (compiled) {
                            context = context.parentNode;
                        }

                        selector = selector.slice(tokens.shift().value.length);
                    }

                    // Fetch a seed set for right-to-left matching
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i];

                        // Abort if we hit a combinator
                        if (Expr.relative[(type = token.type)]) {
                            break;
                        }
                        if ((find = Expr.find[type])) {
                            // Search, expanding context for leading sibling combinators
                            if ((seed = find(
                                token.matches[0].replace(runescape, funescape),
                                rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                            ))) {

                                // If seed is empty or no tokens remain, we can return early
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results;
                                }

                                break;
                            }
                        }
                    }
                }

                // Compile and execute a filtering function if one is not provided
                // Provide `match` to avoid retokenization if we modified the selector above
                (compiled || compile(selector, match))(
                    seed,
                    context,
                    !documentIsHTML,
                    results,
                    !context || rsibling.test(selector) && testContext(context.parentNode) || context
                );
                return results;
            };

    // One-time assignments

    // Sort stability
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

    // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function
            support.detectDuplicates = !!hasDuplicate;

    // Initialize against the default document
            setDocument();

    // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*
            support.sortDetached = assert(function (el) {
                // Should return 1, but returns 4 (following)
                return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
            });

    // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
            if (!assert(function (el) {
                el.innerHTML = "<a href='#'></a>";
                return el.firstChild.getAttribute("href") === "#";
            })) {
                addHandle("type|href|height|width", function (elem, name, isXML) {
                    if (!isXML) {
                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                    }
                });
            }

    // Support: IE<9
    // Use defaultValue in place of getAttribute("value")
            if (!support.attributes || !assert(function (el) {
                el.innerHTML = "<input/>";
                el.firstChild.setAttribute("value", "");
                return el.firstChild.getAttribute("value") === "";
      })) {
                addHandle("value", function (elem, name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                        return elem.defaultValue;
                    }
                });
            }

    // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies
            if (!assert(function (el) {
                return el.getAttribute("disabled") == null;
            })) {
                addHandle(booleans, function (elem, name, isXML) {
                    var val;
                    if (!isXML) {
                        return elem[name] === true ? name.toLowerCase() :
                            (val = elem.getAttributeNode(name)) && val.specified ?
                                val.value :
                                null;
                    }
                });
            }

            return Sizzle;

        })(window);


    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;

    // Deprecated
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;


    var dir = function (elem, dir, until) {
        var matched = [],
            truncate = until !== undefined;

        while ((elem = elem[dir]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
                if (truncate && jQuery(elem).is(until)) {
                    break;
                }
                matched.push(elem);
            }
        }
        return matched;
    };


    var siblings = function (n, elem) {
        var matched = [];

        for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
                matched.push(n);
            }
        }

        return matched;
    };


    var rneedsContext = jQuery.expr.match.needsContext;


    function nodeName(elem, name) {

        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

    };
    var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);


    // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
            return jQuery.grep(elements, function (elem, i) {
                return !!qualifier.call(elem, i, elem) !== not;
            });
        }

        // Single element
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function (elem) {
                return (elem === qualifier) !== not;
            });
        }

        // Arraylike of elements (jQuery, arguments, Array)
        if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function (elem) {
                return (indexOf.call(qualifier, elem) > -1) !== not;
            });
        }

        // Filtered directly for both simple and complex selectors
        return jQuery.filter(qualifier, elements, not);
    }

    jQuery.filter = function (expr, elems, not) {
        var elem = elems[0];

        if (not) {
            expr = ":not(" + expr + ")";
        }

        if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
        }

        return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
            return elem.nodeType === 1;
        }));
    };

    jQuery.fn.extend({
        find: function (selector) {
            var i, ret,
                len = this.length,
                self = this;

            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function () {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }

            ret = this.pushStack([]);

            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            }

            return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function (selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function (selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function (selector) {
            return !!winnow(
                this,

                // If this is a positional/relative selector, check membership in the returned set
                // so $("p:first").is("p:last") won't return true for a doc with two "p".
                typeof selector === "string" && rneedsContext.test(selector) ?
                    jQuery(selector) :
                    selector || [],
                false
            ).length;
        }
    });


    // Initialize a jQuery object


    // A central reference to the root jQuery(document)
    var rootjQuery,

        // A simple way to check for HTML strings
        // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
        // Strict HTML recognition (#11290: must start with <)
        // Shortcut simple #id case for speed
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

        init = jQuery.fn.init = function (selector, context, root) {
            var match, elem;

            // HANDLE: $(""), $(null), $(undefined), $(false)
            if (!selector) {
                return this;
            }

            // Method init() accepts an alternate rootjQuery
            // so migrate can support jQuery.sub (gh-2101)
            root = root || rootjQuery;

            // Handle HTML strings
            if (typeof selector === "string") {
                if (selector[0] === "<" &&
                    selector[selector.length - 1] === ">" &&
                    selector.length >= 3) {

                    // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [null, selector, null];

                } else {
                    match = rquickExpr.exec(selector);
                }

                // Match html or make sure no context is specified for #id
                if (match && (match[1] || !context)) {

                    // HANDLE: $(html) -> $(array)
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;

                        // Option to run scripts is true for back-compat
                        // Intentionally let the error be thrown if parseHTML is not present
                        jQuery.merge(this, jQuery.parseHTML(
                            match[1],
                            context && context.nodeType ? context.ownerDocument || context : document,
                            true
                        ));

                        // HANDLE: $(html, props)
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {

                                // Properties of context are called as methods if possible
                                if (isFunction(this[match])) {
                                    this[match](context[match]);

                                    // ...and otherwise set as attributes
                                } else {
                                    this.attr(match, context[match]);
                                }
                            }
                        }

                        return this;

                        // HANDLE: $(#id)
                    } else {
                        elem = document.getElementById(match[2]);

                        if (elem) {

                            // Inject the element directly into the jQuery object
                            this[0] = elem;
                            this.length = 1;
                        }
                        return this;
                    }

                    // HANDLE: $(expr, $(...))
                } else if (!context || context.jquery) {
                    return (context || root).find(selector);

                    // HANDLE: $(expr, context)
                    // (which is just equivalent to: $(context).find(expr)
                } else {
                    return this.constructor(context).find(selector);
                }

                // HANDLE: $(DOMElement)
            } else if (selector.nodeType) {
                this[0] = selector;
                this.length = 1;
                return this;

                // HANDLE: $(function)
                // Shortcut for document ready
            } else if (isFunction(selector)) {
                return root.ready !== undefined ?
                    root.ready(selector) :

                    // Execute immediately if ready is not present
                    selector(jQuery);
            }

            return jQuery.makeArray(selector, this);
        };

    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;

    // Initialize central reference
    rootjQuery = jQuery(document);


    var rparentsprev = /^(?:parents|prev(?:Until|All))/,

        // Methods guaranteed to produce a unique set when starting from a unique set
        guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };

    jQuery.fn.extend({
        has: function (target) {
            var targets = jQuery(target, this),
                l = targets.length;

            return this.filter(function () {
                var i = 0;
                for (; i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },

        closest: function (selectors, context) {
            var cur,
                i = 0,
                l = this.length,
                matched = [],
                targets = typeof selectors !== "string" && jQuery(selectors);

            // Positional selectors never match, since there's no _selection_ context
            if (!rneedsContext.test(selectors)) {
                for (; i < l; i++) {
                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

                        // Always skip document fragments
                        if (cur.nodeType < 11 && (targets ?
                            targets.index(cur) > -1 :

                            // Don't pass non-elements to Sizzle
                            cur.nodeType === 1 &&
                            jQuery.find.matchesSelector(cur, selectors))) {

                            matched.push(cur);
                            break;
                        }
                    }
                }
            }

            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },

        // Determine the position of an element within the set
        index: function (elem) {

            // No argument, return index in parent
            if (!elem) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
            }

            // Index in selector
            if (typeof elem === "string") {
                return indexOf.call(jQuery(elem), this[0]);
            }

            // Locate the position of the desired element
            return indexOf.call(this,

                // If it receives a jQuery object, the first element is used
                elem.jquery ? elem[0] : elem
            );
        },

        add: function (selector, context) {
            return this.pushStack(
                jQuery.uniqueSort(
                    jQuery.merge(this.get(), jQuery(selector, context))
                )
            );
        },

        addBack: function (selector) {
            return this.add(selector == null ?
                this.prevObject : this.prevObject.filter(selector)
            );
        }
    });

    function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {
        }
        return cur;
    }

    jQuery.each({
        parent: function (elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function (elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function (elem, i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function (elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function (elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function (elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function (elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function (elem, i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function (elem, i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function (elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function (elem) {
            return siblings(elem.firstChild);
        },
        contents: function (elem) {
            if (typeof elem.contentDocument !== "undefined") {
                return elem.contentDocument;
            }

            // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
            // Treat the template element as a regular one in browsers that
            // don't support it.
            if (nodeName(elem, "template")) {
                elem = elem.content || elem;
            }

            return jQuery.merge([], elem.childNodes);
        }
    }, function (name, fn) {
        jQuery.fn[name] = function (until, selector) {
            var matched = jQuery.map(this, fn, until);

            if (name.slice(-5) !== "Until") {
                selector = until;
            }

            if (selector && typeof selector === "string") {
                matched = jQuery.filter(selector, matched);
            }

            if (this.length > 1) {

                // Remove duplicates
                if (!guaranteedUnique[name]) {
                    jQuery.uniqueSort(matched);
                }

                // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) {
                    matched.reverse();
                }
            }

            return this.pushStack(matched);
        };
    });
    var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);


    // Convert String-formatted options into Object-formatted ones
    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
            object[flag] = true;
        });
        return object;
    }

    /*
    * Create a callback list using the following parameters:
    *
     *	options: an optional list of space-separated options that will change how
     *			the callback list behaves or a more traditional option object
     *
     * By default a callback list will act like an event callback list and can be
     * "fired" multiple times.
     *
     * Possible options:
     *
     *	once:			will ensure the callback list can only be fired once (like a Deferred)
     *
     *	memory:			will keep track of previous values and will call any callback added
     *					after the list has been fired right away with the latest "memorized"
     *					values (like a Deferred)
     *
     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
     *
     *	stopOnFalse:	interrupt callings when a callback returns false
     *
     */
    jQuery.Callbacks = function (options) {

        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ?
            createOptions(options) :
            jQuery.extend({}, options);

        var // Flag to know if list is currently firing
            firing,

            // Last fire value for non-forgettable lists
            memory,

            // Flag to know if list was already fired
            fired,

            // Flag to prevent firing
            locked,

            // Actual callback list
            list = [],

            // Queue of execution data for repeatable lists
            queue = [],

            // Index of currently firing callback (modified by add/remove as needed)
            firingIndex = -1,

            // Fire callbacks
            fire = function () {

                // Enforce single-firing
                locked = locked || options.once;

                // Execute callbacks for all pending executions,
                // respecting firingIndex overrides and runtime changes
                fired = firing = true;
                for (; queue.length; firingIndex = -1) {
                    memory = queue.shift();
                    while (++firingIndex < list.length) {

                        // Run callback and check for early termination
                        if (list[firingIndex].apply(memory[0], memory[1]) === false &&
                            options.stopOnFalse) {

                            // Jump to end and forget the data so .add doesn't re-fire
                            firingIndex = list.length;
                            memory = false;
                        }
                    }
                }

                // Forget the data if we're done with it
                if (!options.memory) {
                    memory = false;
                }

                firing = false;

                // Clean up if we're done firing for good
                if (locked) {

                    // Keep an empty list if we have data for future add calls
                    if (memory) {
                        list = [];

                        // Otherwise, this object is spent
                    } else {
                        list = "";
                    }
                }
            },

            // Actual Callbacks object
            self = {

                // Add a callback or a collection of callbacks to the list
                add: function () {
                    if (list) {

                        // If we have memory from a past run, we should fire after adding
                        if (memory && !firing) {
                            firingIndex = list.length - 1;
                            queue.push(memory);
                        }

                        (function add(args) {
                            jQuery.each(args, function (_, arg) {
                                if (isFunction(arg)) {
                                    if (!options.unique || !self.has(arg)) {
                                        list.push(arg);
                                    }
                                } else if (arg && arg.length && toType(arg) !== "string") {

                                    // Inspect recursively
                                    add(arg);
                                }
                            });
                        })(arguments);

                        if (memory && !firing) {
                            fire();
                        }
                    }
                    return this;
                },

                // Remove a callback from the list
                remove: function () {
                    jQuery.each(arguments, function (_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);

                            // Handle firing indexes
                            if (index <= firingIndex) {
                                firingIndex--;
                            }
                        }
                    });
                    return this;
                },

                // Check if a given callback is in the list.
                // If no argument is given, return whether or not list has callbacks attached.
                has: function (fn) {
                    return fn ?
                        jQuery.inArray(fn, list) > -1 :
                        list.length > 0;
                },

                // Remove all callbacks from the list
                empty: function () {
                    if (list) {
                        list = [];
                    }
                    return this;
                },

                // Disable .fire and .add
                // Abort any current/pending executions
                // Clear all callbacks and values
                disable: function () {
                    locked = queue = [];
                    list = memory = "";
                    return this;
                },
                disabled: function () {
                    return !list;
                },

                // Disable .fire
                // Also disable .add unless we have memory (since it would have no effect)
                // Abort any pending executions
                lock: function () {
                    locked = queue = [];
                    if (!memory && !firing) {
                        list = memory = "";
                    }
                    return this;
                },
                locked: function () {
                    return !!locked;
                },

                // Call all callbacks with the given context and arguments
                fireWith: function (context, args) {
                    if (!locked) {
                        args = args || [];
                        args = [context, args.slice ? args.slice() : args];
                        queue.push(args);
                        if (!firing) {
                            fire();
                        }
                    }
                    return this;
                },

                // Call all the callbacks with the given arguments
                fire: function () {
                    self.fireWith(this, arguments);
                    return this;
                },

                // To know if the callbacks have already been called at least once
                fired: function () {
                    return !!fired;
                }
            };

        return self;
    };


    function Identity(v) {
        return v;
    }

    function Thrower(ex) {
        throw ex;
    }

    function adoptValue(value, resolve, reject, noValue) {
        var method;

        try {

            // Check for promise aspect first to privilege synchronous behavior
            if (value && isFunction((method = value.promise))) {
                method.call(value).done(resolve).fail(reject);

                // Other thenables
            } else if (value && isFunction((method = value.then))) {
                method.call(value, resolve, reject);

                // Other non-thenables
            } else {

                // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
                // * false: [ value ].slice( 0 ) => resolve( value )
                // * true: [ value ].slice( 1 ) => resolve()
                resolve.apply(undefined, [value].slice(noValue));
            }

            // For Promises/A+, convert exceptions into rejections
            // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
            // Deferred#then to conditionally suppress rejection.
        } catch (value) {

            // Support: Android 4.0 only
            // Strict mode functions invoked without .call/.apply get global-object context
            reject.apply(undefined, [value]);
        }
    }

    jQuery.extend({

        Deferred: function (func) {
            var tuples = [

                    // action, add listener, callbacks,
                    // ... .then handlers, argument index, [final state]
                    ["notify", "progress", jQuery.Callbacks("memory"),
                        jQuery.Callbacks("memory"), 2],
                    ["resolve", "done", jQuery.Callbacks("once memory"),
                        jQuery.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", jQuery.Callbacks("once memory"),
                        jQuery.Callbacks("once memory"), 1, "rejected"]
                ],
                state = "pending",
                promise = {
                    state: function () {
                        return state;
                    },
                    always: function () {
                        deferred.done(arguments).fail(arguments);
                        return this;
                    },
                    "catch": function (fn) {
                        return promise.then(null, fn);
                    },

                    // Keep pipe for back-compat
                    pipe: function (/* fnDone, fnFail, fnProgress */) {
                        var fns = arguments;

                        return jQuery.Deferred(function (newDefer) {
                            jQuery.each(tuples, function (i, tuple) {

                                // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                                var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];

                                // deferred.progress(function() { bind to newDefer or newDefer.notify })
                                // deferred.done(function() { bind to newDefer or newDefer.resolve })
                                // deferred.fail(function() { bind to newDefer or newDefer.reject })
                                deferred[tuple[1]](function () {
                                    var returned = fn && fn.apply(this, arguments);
                                    if (returned && isFunction(returned.promise)) {
                                        returned.promise()
                                            .progress(newDefer.notify)
                                            .done(newDefer.resolve)
                                            .fail(newDefer.reject);
                                    } else {
                                        newDefer[tuple[0] + "With"](
                                            this,
                                            fn ? [returned] : arguments
                                        );
                                    }
                                });
                            });
                            fns = null;
                        }).promise();
                    },
                    then: function (onFulfilled, onRejected, onProgress) {
                        var maxDepth = 0;

                        function resolve(depth, deferred, handler, special) {
                            return function () {
                                var that = this,
                                    args = arguments,
                                    mightThrow = function () {
                                        var returned, then;

                                        // Support: Promises/A+ section 2.3.3.3.3
                                        // https://promisesaplus.com/#point-59
                                        // Ignore double-resolution attempts
                                        if (depth < maxDepth) {
                                            return;
                                        }

                                        returned = handler.apply(that, args);

                                        // Support: Promises/A+ section 2.3.1
                                        // https://promisesaplus.com/#point-48
                                        if (returned === deferred.promise()) {
                                            throw new TypeError("Thenable self-resolution");
                                        }

                                        // Support: Promises/A+ sections 2.3.3.1, 3.5
                                        // https://promisesaplus.com/#point-54
                                        // https://promisesaplus.com/#point-75
                                        // Retrieve `then` only once
                                        then = returned &&

                                            // Support: Promises/A+ section 2.3.4
                                            // https://promisesaplus.com/#point-64
                                            // Only check objects and functions for thenability
                                            (typeof returned === "object" ||
                                                typeof returned === "function") &&
                                            returned.then;

                                        // Handle a returned thenable
                                        if (isFunction(then)) {

                                            // Special processors (notify) just wait for resolution
                                            if (special) {
                                                then.call(
                                                    returned,
                                                    resolve(maxDepth, deferred, Identity, special),
                                                    resolve(maxDepth, deferred, Thrower, special)
                                                );

                                                // Normal processors (resolve) also hook into progress
                                            } else {

                                                // ...and disregard older resolution values
                                                maxDepth++;

                                                then.call(
                                                    returned,
                                                    resolve(maxDepth, deferred, Identity, special),
                                                    resolve(maxDepth, deferred, Thrower, special),
                                                    resolve(maxDepth, deferred, Identity,
                                                        deferred.notifyWith)
                                                );
                                            }

                                            // Handle all other returned values
                                        } else {

                                            // Only substitute handlers pass on context
                                            // and multiple values (non-spec behavior)
                                            if (handler !== Identity) {
                                                that = undefined;
                                                args = [returned];
                                            }

                                            // Process the value(s)
                                            // Default process is resolve
                                            (special || deferred.resolveWith)(that, args);
                                        }
                                    },

                                    // Only normal processors (resolve) catch and reject exceptions
                                    process = special ?
                                        mightThrow :
                                        function () {
                                            try {
                                                mightThrow();
                                            } catch (e) {

                                                if (jQuery.Deferred.exceptionHook) {
                                                    jQuery.Deferred.exceptionHook(e,
                                                        process.stackTrace);
                                                }

                                                // Support: Promises/A+ section 2.3.3.3.4.1
                                                // https://promisesaplus.com/#point-61
                                                // Ignore post-resolution exceptions
                                                if (depth + 1 >= maxDepth) {

                                                    // Only substitute handlers pass on context
                                                    // and multiple values (non-spec behavior)
                                                    if (handler !== Thrower) {
                                                        that = undefined;
                                                        args = [e];
                                                    }

                                                    deferred.rejectWith(that, args);
                                                }
                                            }
                                        };

                                // Support: Promises/A+ section 2.3.3.3.1
                                // https://promisesaplus.com/#point-57
                                // Re-resolve promises immediately to dodge false rejection from
                                // subsequent errors
                                if (depth) {
                                    process();
                                } else {

                                    // Call an optional hook to record the stack, in case of exception
                                    // since it's otherwise lost when execution goes async
                                    if (jQuery.Deferred.getStackHook) {
                                        process.stackTrace = jQuery.Deferred.getStackHook();
                                    }
                                    window.setTimeout(process);
                                }
                            };
                        }

                        return jQuery.Deferred(function (newDefer) {

                            // progress_handlers.add( ... )
                            tuples[0][3].add(
                                resolve(
                                    0,
                                    newDefer,
                                    isFunction(onProgress) ?
                                        onProgress :
                                        Identity,
                                    newDefer.notifyWith
                                )
                            );

                            // fulfilled_handlers.add( ... )
                            tuples[1][3].add(
                                resolve(
                                    0,
                                    newDefer,
                                    isFunction(onFulfilled) ?
                                        onFulfilled :
                                        Identity
                                )
                            );

                            // rejected_handlers.add( ... )
                            tuples[2][3].add(
                                resolve(
                                    0,
                                    newDefer,
                                    isFunction(onRejected) ?
                                        onRejected :
                                        Thrower
                                )
                            );
                        }).promise();
                    },

                    // Get a promise for this deferred
                    // If obj is provided, the promise aspect is added to the object
                    promise: function (obj) {
                        return obj != null ? jQuery.extend(obj, promise) : promise;
                    }
                },
                deferred = {};

            // Add list-specific methods
            jQuery.each(tuples, function (i, tuple) {
                var list = tuple[2],
                    stateString = tuple[5];

                // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                promise[tuple[1]] = list.add;

                // Handle state
                if (stateString) {
                    list.add(
                        function () {

                            // state = "resolved" (i.e., fulfilled)
                            // state = "rejected"
                            state = stateString;
                        },

                        // rejected_callbacks.disable
                        // fulfilled_callbacks.disable
                        tuples[3 - i][2].disable,

                        // rejected_handlers.disable
                        // fulfilled_handlers.disable
                        tuples[3 - i][3].disable,

                        // progress_callbacks.lock
                        tuples[0][2].lock,

                        // progress_handlers.lock
                        tuples[0][3].lock
                    );
                }

                // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add(tuple[3].fire);

                // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred[tuple[0]] = function () {
                    deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                    return this;
                };

                // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred[tuple[0] + "With"] = list.fireWith;
            });

            // Make the deferred a promise
            promise.promise(deferred);

            // Call given func if any
            if (func) {
                func.call(deferred, deferred);
            }

            // All done!
            return deferred;
        },

        // Deferred helper
        when: function (singleValue) {
            var

                // count of uncompleted subordinates
                remaining = arguments.length,

                // count of unprocessed arguments
                i = remaining,

                // subordinate fulfillment data
                resolveContexts = Array(i),
                resolveValues = slice.call(arguments),

                // the master Deferred
                master = jQuery.Deferred(),

                // subordinate callback factory
                updateFunc = function (i) {
                    return function (value) {
                        resolveContexts[i] = this;
                        resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                        if (!(--remaining)) {
                            master.resolveWith(resolveContexts, resolveValues);
                        }
                    };
                };

            // Single- and empty arguments are adopted like Promise.resolve
            if (remaining <= 1) {
                adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject,
                    !remaining);

                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if (master.state() === "pending" ||
                    isFunction(resolveValues[i] && resolveValues[i].then)) {

                    return master.then();
                }
            }

            // Multiple arguments are aggregated like Promise.all array elements
            while (i--) {
                adoptValue(resolveValues[i], updateFunc(i), master.reject);
            }

            return master.promise();
        }
    });


    // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

    jQuery.Deferred.exceptionHook = function (error, stack) {

        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
            window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }
    };


    jQuery.readyException = function (error) {
        window.setTimeout(function () {
            throw error;
        });
    };


    // The deferred used on DOM ready
    var readyList = jQuery.Deferred();

    jQuery.fn.ready = function (fn) {

        readyList
            .then(fn)

            // Wrap jQuery.readyException in a function so that the lookup
            // happens at the time of error handling instead of callback
            // registration.
            .catch(function (error) {
                jQuery.readyException(error);
            });

        return this;
    };

    jQuery.extend({

        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,

        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,

        // Handle when the DOM is ready
        ready: function (wait) {

            // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }

            // Remember that the DOM is ready
            jQuery.isReady = true;

            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            }

            // If there are functions bound, to execute
            readyList.resolveWith(document, [jQuery]);
        }
    });

    jQuery.ready.then = readyList.then;

    // The ready event handler and self cleanup method
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready();
    }

    // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon
    if (document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)) {

        // Handle it asynchronously to allow scripts the opportunity to delay ready
        window.setTimeout(jQuery.ready);

    } else {

        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed);

        // A fallback to window.onload, that will always work
        window.addEventListener("load", completed);
    }


    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0,
            len = elems.length,
            bulk = key == null;

        // Sets many values
        if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
                access(elems, fn, i, key[i], true, emptyGet, raw);
            }

            // Sets one value
        } else if (value !== undefined) {
            chainable = true;

            if (!isFunction(value)) {
                raw = true;
            }

            if (bulk) {

                // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value);
                    fn = null;

                    // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function (elem, key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }

            if (fn) {
                for (; i < len; i++) {
                    fn(
                        elems[i], key, raw ?
                            value :
                            value.call(elems[i], i, fn(elems[i], key))
                    );
                }
            }
        }

        if (chainable) {
            return elems;
        }

        // Gets
        if (bulk) {
            return fn.call(elems);
        }

        return len ? fn(elems[0], key) : emptyGet;
    };


    // Matches dashed string for camelizing
    var rmsPrefix = /^-ms-/,
        rdashAlpha = /-([a-z])/g;

    // Used by camelCase as callback to replace()
    function fcamelCase(all, letter) {
        return letter.toUpperCase();
    }

    // Convert dashed to camelCase; used by the css and data modules
    // Support: IE <=9 - 11, Edge 12 - 15
    // Microsoft forgot to hump their vendor prefix (#9572)
    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }

    var acceptData = function (owner) {

        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
    };


    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }

    Data.uid = 1;

    Data.prototype = {

        cache: function (owner) {

            // Check if the owner object already has a cache
            var value = owner[this.expando];

            // If not, create one
            if (!value) {
                value = {};

                // We can accept data for non-element nodes in modern browsers,
                // but we should not, see #8335.
                // Always return an empty object.
                if (acceptData(owner)) {

                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) {
                        owner[this.expando] = value;

                        // Otherwise secure it in a non-enumerable property
                        // configurable must be true to allow the property to be
                        // deleted when data is removed
                    } else {
                        Object.defineProperty(owner, this.expando, {
                            value: value,
                            configurable: true
                        });
                    }
                }
            }

            return value;
        },
        set: function (owner, data, value) {
            var prop,
                cache = this.cache(owner);

            // Handle: [ owner, key, value ] args
            // Always use camelCase key (gh-2257)
            if (typeof data === "string") {
                cache[camelCase(data)] = value;

                // Handle: [ owner, { properties } ] args
            } else {

                // Copy the properties one-by-one to the cache object
                for (prop in data) {
                    cache[camelCase(prop)] = data[prop];
                }
            }
            return cache;
        },
        get: function (owner, key) {
            return key === undefined ?
                this.cache(owner) :

                // Always use camelCase key (gh-2257)
                owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function (owner, key, value) {

            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if (key === undefined ||
                ((key && typeof key === "string") && value === undefined)) {

                return this.get(owner, key);
            }

            // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set(owner, key, value);

            // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function (owner, key) {
            var i,
                cache = owner[this.expando];

            if (cache === undefined) {
                return;
            }

            if (key !== undefined) {

                // Support array or space separated string of keys
                if (Array.isArray(key)) {

                    // If key is an array of keys...
                    // We always set camelCase keys, so remove that.
                    key = key.map(camelCase);
                } else {
                    key = camelCase(key);

                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ?
                        [key] :
                        (key.match(rnothtmlwhite) || []);
                }

                i = key.length;

                while (i--) {
                    delete cache[key[i]];
                }
            }

            // Remove the expando if there's no more data
            if (key === undefined || jQuery.isEmptyObject(cache)) {

                // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if (owner.nodeType) {
                    owner[this.expando] = undefined;
                } else {
                    delete owner[this.expando];
                }
            }
        },
        hasData: function (owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data();

    var dataUser = new Data();


    //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /[A-Z]/g;

    function getData(data) {
        if (data === "true") {
            return true;
        }

        if (data === "false") {
            return false;
        }

        if (data === "null") {
            return null;
        }

        // Only convert to a number if it doesn't change the string
        if (data === +data + "") {
            return +data;
        }

        if (rbrace.test(data)) {
            return JSON.parse(data);
        }

        return data;
    }

    function dataAttr(elem, key, data) {
        var name;

        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);

            if (typeof data === "string") {
                try {
                    data = getData(data);
                } catch (e) {
                }

                // Make sure we set the data so it isn't changed later
                dataUser.set(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }

    jQuery.extend({
        hasData: function (elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },

        data: function (elem, name, data) {
            return dataUser.access(elem, name, data);
        },

        removeData: function (elem, name) {
            dataUser.remove(elem, name);
        },

        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function (elem, name, data) {
            return dataPriv.access(elem, name, data);
        },

        _removeData: function (elem, name) {
            dataPriv.remove(elem, name);
        }
    });

    jQuery.fn.extend({
        data: function (key, value) {
            var i, name, data,
                elem = this[0],
                attrs = elem && elem.attributes;

            // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);

                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while (i--) {

                            // Support: IE 11 only
                            // The attrs elements can be null (#14894)
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]);
                                }
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true);
                    }
                }

                return data;
            }

            // Sets multiple values
            if (typeof key === "object") {
                return this.each(function () {
                    dataUser.set(this, key);
                });
            }

            return access(this, function (value) {
                var data;

                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (elem && value === undefined) {

                    // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data = dataUser.get(elem, key);
                    if (data !== undefined) {
                        return data;
                    }

                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr(elem, key);
                    if (data !== undefined) {
                        return data;
                    }

                    // We tried really hard, but the data doesn't exist.
                    return;
                }

                // Set the data...
                this.each(function () {

                    // We always store the camelCased key
                    dataUser.set(this, key, value);
                });
            }, null, value, arguments.length > 1, null, true);
        },

        removeData: function (key) {
            return this.each(function () {
                dataUser.remove(this, key);
            });
        }
    });


    jQuery.extend({
        queue: function (elem, type, data) {
            var queue;

            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);

                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || Array.isArray(data)) {
                        queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },

        dequeue: function (elem, type) {
            type = type || "fx";

            var queue = jQuery.queue(elem, type),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks(elem, type),
                next = function () {
                    jQuery.dequeue(elem, type);
                };

            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }

            if (fn) {

                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") {
                    queue.unshift("inprogress");
                }

                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }

            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        },

        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function (elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function () {
                    dataPriv.remove(elem, [type + "queue", key]);
                })
            });
        }
    });

    jQuery.fn.extend({
        queue: function (type, data) {
            var setter = 2;

            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }

            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }

            return data === undefined ?
                this :
                this.each(function () {
                    var queue = jQuery.queue(this, type, data);

                    // Ensure a hooks for this queue
                    jQuery._queueHooks(this, type);

                    if (type === "fx" && queue[0] !== "inprogress") {
                        jQuery.dequeue(this, type);
                    }
                });
        },
        dequeue: function (type) {
            return this.each(function () {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function (type) {
            return this.queue(type || "fx", []);
        },

        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function (type, obj) {
            var tmp,
                count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function () {
                    if (!(--count)) {
                        defer.resolveWith(elements, [elements]);
                    }
                };

            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";

            while (i--) {
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");


    var cssExpand = ["Top", "Right", "Bottom", "Left"];

    var documentElement = document.documentElement;


    var isAttached = function (elem) {
            return jQuery.contains(elem.ownerDocument, elem);
        },
        composed = {composed: true};

    // Check attachment across shadow DOM boundaries when possible (gh-3504)
    if (documentElement.attachShadow) {
        isAttached = function (elem) {
            return jQuery.contains(elem.ownerDocument, elem) ||
                elem.getRootNode(composed) === elem.ownerDocument;
        };
    }
    var isHiddenWithinTree = function (elem, el) {

        // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;

        // Inline style trumps all
        return elem.style.display === "none" ||
            elem.style.display === "" &&

            // Otherwise, check computed style
            // Support: Firefox <=43 - 45
            // Disconnected elements can have computed display: none, so first confirm that elem is
            // in the document.
            isAttached(elem) &&

            jQuery.css(elem, "display") === "none";
    };

    var swap = function (elem, options, callback, args) {
        var ret, name,
            old = {};

        // Remember the old values, and insert the new ones
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }

        ret = callback.apply(elem, args || []);

        // Revert the old values
        for (name in options) {
            elem.style[name] = old[name];
        }

        return ret;
    };


    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale,
            maxIterations = 20,
            currentValue = tween ?
                function () {
                    return tween.cur();
                } :
                function () {
                    return jQuery.css(elem, prop, "");
                },
            initial = currentValue(),
            unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),

            // Starting value computation is required for potential unit mismatches
            initialInUnit = elem.nodeType &&
                (jQuery.cssNumber[prop] || unit !== "px" && +initial) &&
                rcssNum.exec(jQuery.css(elem, prop));

        if (initialInUnit && initialInUnit[3] !== unit) {

            // Support: Firefox <=54
            // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
            initial = initial / 2;

            // Trust units reported by jQuery.css
            unit = unit || initialInUnit[3];

            // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;

            while (maxIterations--) {

                // Evaluate and update our best guess (doubling guesses that zero out).
                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                    maxIterations = 0;
                }
                initialInUnit = initialInUnit / scale;

            }

            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);

            // Make sure we update the tween properties later on
            valueParts = valueParts || [];
        }

        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;

            // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[1] ?
                initialInUnit + (valueParts[1] + 1) * valueParts[2] :
                +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }


    var defaultDisplayMap = {};

    function getDefaultDisplay(elem) {
        var temp,
            doc = elem.ownerDocument,
            nodeName = elem.nodeName,
            display = defaultDisplayMap[nodeName];

        if (display) {
            return display;
        }

        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");

        temp.parentNode.removeChild(temp);

        if (display === "none") {
            display = "block";
        }
        defaultDisplayMap[nodeName] = display;

        return display;
    }

    function showHide(elements, show) {
        var display, elem,
            values = [],
            index = 0,
            length = elements.length;

        // Determine new display value for elements that need to change
        for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }

            display = elem.style.display;
            if (show) {

                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null;
                    if (!values[index]) {
                        elem.style.display = "";
                    }
                }
                if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                    values[index] = getDefaultDisplay(elem);
                }
            } else {
                if (display !== "none") {
                    values[index] = "none";

                    // Remember what we're overwriting
                    dataPriv.set(elem, "display", display);
                }
            }
        }

        // Set the display of the elements in a second loop to avoid constant reflow
        for (index = 0; index < length; index++) {
            if (values[index] != null) {
                elements[index].style.display = values[index];
            }
        }

        return elements;
    }

    jQuery.fn.extend({
        show: function () {
            return showHide(this, true);
        },
        hide: function () {
            return showHide(this);
        },
        toggle: function (state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide();
            }

            return this.each(function () {
                if (isHiddenWithinTree(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });
    var rcheckableType = (/^(?:checkbox|radio)$/i);

    var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]*)/i);

    var rscriptType = (/^$|^module$|\/(?:java|ecma)script/i);


    // We have to close these tags to support XHTML (#13200)
    var wrapMap = {

        // Support: IE <=9 only
        option: [1, "<select multiple='multiple'>", "</select>"],

        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

        _default: [0, "", ""]
    };

    // Support: IE <=9 only
    wrapMap.optgroup = wrapMap.option;

    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;


    function getAll(context, tag) {

        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
        var ret;

        if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");

        } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");

        } else {
            ret = [];
        }

        if (tag === undefined || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret);
        }

        return ret;
    }


    // Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        var i = 0,
            l = elems.length;

        for (; i < l; i++) {
            dataPriv.set(
                elems[i],
                "globalEval",
                !refElements || dataPriv.get(refElements[i], "globalEval")
            );
        }
    }


    var rhtml = /<|&#?\w+;/;

    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j,
            fragment = context.createDocumentFragment(),
            nodes = [],
            i = 0,
            l = elems.length;

        for (; i < l; i++) {
            elem = elems[i];

            if (elem || elem === 0) {

                // Add nodes directly
                if (toType(elem) === "object") {

                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

                    // Convert non-html into a text node
                } else if (!rhtml.test(elem)) {
                    nodes.push(context.createTextNode(elem));

                    // Convert html into DOM nodes
                } else {
                    tmp = tmp || fragment.appendChild(context.createElement("div"));

                    // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

                    // Descend through wrappers to the right content
                    j = wrap[0];
                    while (j--) {
                        tmp = tmp.lastChild;
                    }

                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes);

                    // Remember the top-level container
                    tmp = fragment.firstChild;

                    // Ensure the created nodes are orphaned (#12392)
                    tmp.textContent = "";
                }
            }
        }

        // Remove wrapper from fragment
        fragment.textContent = "";

        i = 0;
        while ((elem = nodes[i++])) {

            // Skip elements already in the context collection (trac-4087)
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) {
                    ignored.push(elem);
                }
                continue;
            }

            attached = isAttached(elem);

            // Append to fragment
            tmp = getAll(fragment.appendChild(elem), "script");

            // Preserve script evaluation history
            if (attached) {
                setGlobalEval(tmp);
            }

            // Capture executables
            if (scripts) {
                j = 0;
                while ((elem = tmp[j++])) {
                    if (rscriptType.test(elem.type || "")) {
                        scripts.push(elem);
                    }
                }
            }
        }

        return fragment;
    }


    (function () {
        var fragment = document.createDocumentFragment(),
            div = fragment.appendChild(document.createElement("div")),
            input = document.createElement("input");

        // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (#11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");

        div.appendChild(input);

        // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

        // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
    })();


    var
        rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

    function returnTrue() {
        return true;
    }

    function returnFalse() {
        return false;
    }

    // Support: IE <=9 - 11+
    // focus() and blur() are asynchronous, except when they are no-op.
    // So expect focus to be synchronous when the element is already active,
    // and blur to be synchronous when the element is not already active.
    // (focus and blur are always synchronous in other supported browsers,
    // this just defines when we can count on it).
    function expectSync(elem, type) {
        return (elem === safeActiveElement()) === (type === "focus");
    }

    // Support: IE <=9 only
    // Accessing document.activeElement can throw unexpectedly
    // https://bugs.jquery.com/ticket/13393
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {
        }
    }

    function on(elem, types, selector, data, fn, one) {
        var origFn, type;

        // Types can be a map of types/handlers
        if (typeof types === "object") {

            // ( types-Object, selector, data )
            if (typeof selector !== "string") {

                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for (type in types) {
                on(elem, type, selector, data, types[type], one);
            }
            return elem;
        }

        if (data == null && fn == null) {

            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {

                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {

                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) {
            fn = returnFalse;
        } else if (!fn) {
            return elem;
        }

        if (one === 1) {
            origFn = fn;
            fn = function (event) {

                // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };

            // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function () {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }

    /*
    * Helper functions for managing events -- not part of the public interface.
    * Props to Dean Edwards' addEvent library for many of the ideas.
    */
    jQuery.event = {

        global: {},

        add: function (elem, types, handler, data, selector) {

            var handleObjIn, eventHandle, tmp,
                events, t, handleObj,
                special, handlers, type, namespaces, origType,
                elemData = dataPriv.get(elem);

            // Don't attach events to noData or text/comment nodes (but allow plain objects)
            if (!elemData) {
                return;
            }

            // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }

            // Ensure that invalid selectors throw exceptions at attach time
            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
            if (selector) {
                jQuery.find.matchesSelector(documentElement, selector);
            }

            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }

            // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function (e) {

                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
                        jQuery.event.dispatch.apply(elem, arguments) : undefined;
                };
            }

            // Handle multiple events separated by a space
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();

                // There *must* be a type, no attaching namespace-only handlers
                if (!type) {
                    continue;
                }

                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {};

                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;

                // Update special based on newly reset type
                special = jQuery.event.special[type] || {};

                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);

                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;

                    // Only use addEventListener if the special events handler returns false
                    if (!special.setup ||
                        special.setup.call(elem, data, namespaces, eventHandle) === false) {

                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle);
                        }
                    }
                }

                if (special.add) {
                    special.add.call(elem, handleObj);

                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }

                // Add to the element's handler list, delegates in front
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                }

                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }

        },

        // Detach an event or set of events from an element
        remove: function (elem, types, handler, selector, mappedTypes) {

            var j, origCount, tmp,
                events, t, handleObj,
                special, handlers, type, namespaces, origType,
                elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

            if (!elemData || !(events = elemData.events)) {
                return;
            }

            // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();

                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }

                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] &&
                    new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

                // Remove matching events
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];

                    if ((mappedTypes || origType === handleObj.origType) &&
                        (!handler || handler.guid === handleObj.guid) &&
                        (!tmp || tmp.test(handleObj.namespace)) &&
                        (!selector || selector === handleObj.selector ||
                            selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);

                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                }

                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown ||
                        special.teardown.call(elem, namespaces, elemData.handle) === false) {

                        jQuery.removeEvent(elem, type, elemData.handle);
                    }

                    delete events[type];
                }
            }

            // Remove data and the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) {
                dataPriv.remove(elem, "handle events");
            }
        },

        dispatch: function (nativeEvent) {

            // Make a writable jQuery.Event from the native event object
            var event = jQuery.event.fix(nativeEvent);

            var i, j, ret, matched, handleObj, handlerQueue,
                args = new Array(arguments.length),
                handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
                special = jQuery.event.special[event.type] || {};

            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;

            for (i = 1; i < arguments.length; i++) {
                args[i] = arguments[i];
            }

            event.delegateTarget = this;

            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            }

            // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);

            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;

                j = 0;
                while ((handleObj = matched.handlers[j++]) &&
                !event.isImmediatePropagationStopped()) {

                    // If the event is namespaced, then each handler is only invoked if it is
                    // specially universal or its namespaces are a superset of the event's.
                    if (!event.rnamespace || handleObj.namespace === false ||
                        event.rnamespace.test(handleObj.namespace)) {

                        event.handleObj = handleObj;
                        event.data = handleObj.data;

                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle ||
                            handleObj.handler).apply(matched.elem, args);

                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }

            // Call the postDispatch hook for the mapped type
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }

            return event.result;
        },

        handlers: function (event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors,
                handlerQueue = [],
                delegateCount = handlers.delegateCount,
                cur = event.target;

            // Find delegate handlers
            if (delegateCount &&

                // Support: IE <=9
                // Black-hole SVG <use> instance trees (trac-13180)
                cur.nodeType &&

                // Support: Firefox <=42
                // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
                // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
                // Support: IE 11 only
                // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
                !(event.type === "click" && event.button >= 1)) {

                for (; cur !== this; cur = cur.parentNode || this) {

                    // Don't check non-elements (#13208)
                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                    if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                        matchedHandlers = [];
                        matchedSelectors = {};
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];

                            // Don't conflict with Object.prototype properties (#13203)
                            sel = handleObj.selector + " ";

                            if (matchedSelectors[sel] === undefined) {
                                matchedSelectors[sel] = handleObj.needsContext ?
                                    jQuery(sel, this).index(cur) > -1 :
                                    jQuery.find(sel, this, null, [cur]).length;
                            }
                            if (matchedSelectors[sel]) {
                                matchedHandlers.push(handleObj);
                            }
                        }
                        if (matchedHandlers.length) {
                            handlerQueue.push({elem: cur, handlers: matchedHandlers});
                        }
                    }
                }
            }

            // Add the remaining (directly-bound) handlers
            cur = this;
            if (delegateCount < handlers.length) {
                handlerQueue.push({elem: cur, handlers: handlers.slice(delegateCount)});
            }

            return handlerQueue;
        },

        addProp: function (name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,

                get: isFunction(hook) ?
                    function () {
                        if (this.originalEvent) {
                            return hook(this.originalEvent);
                        }
                    } :
                    function () {
                        if (this.originalEvent) {
                            return this.originalEvent[name];
                        }
                    },

                set: function (value) {
                    Object.defineProperty(this, name, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    });
                }
            });
        },

        fix: function (originalEvent) {
            return originalEvent[jQuery.expando] ?
                originalEvent :
                new jQuery.Event(originalEvent);
        },

        special: {
            load: {

                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            click: {

                // Utilize native event to ensure correct state for checkable inputs
                setup: function (data) {

                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;

                    // Claim the first handler
                    if (rcheckableType.test(el.type) &&
                        el.click && nodeName(el, "input") &&
                        dataPriv.get(el, "click") === undefined) {

                        // dataPriv.set( el, "click", ... )
                        leverageNative(el, "click", returnTrue);
                    }

                    // Return false to allow normal processing in the caller
                    return false;
                },
                trigger: function (data) {

                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;

                    // Force setup before triggering a click
                    if (rcheckableType.test(el.type) &&
                        el.click && nodeName(el, "input") &&
                        dataPriv.get(el, "click") === undefined) {

                        leverageNative(el, "click");
                    }

                    // Return non-false to allow normal event-path propagation
                    return true;
                },

                // For cross-browser consistency, suppress native .click() on links
                // Also prevent it if we're currently inside a leveraged native-event stack
                _default: function (event) {
                    var target = event.target;
                    return rcheckableType.test(target.type) &&
                        target.click && nodeName(target, "input") &&
                        dataPriv.get(target, "click") ||
                        nodeName(target, "a");
                }
            },

            beforeunload: {
                postDispatch: function (event) {

                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        }
    };

    // Ensure the presence of an event listener that handles manually-triggered
    // synthetic events by interrupting progress until reinvoked in response to
    // *native* events that it fires directly, ensuring that state changes have
    // already occurred before other listeners are invoked.
    function leverageNative(el, type, expectSync) {

        // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
        if (!expectSync) {
            jQuery.event.add(el, type, returnTrue);
            return;
        }

        // Register the controller as a special universal handler for all event namespaces
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
            namespace: false,
            handler: function (event) {
                var notAsync, result,
                    saved = dataPriv.get(this, type);

                if ((event.isTrigger & 1) && this[type]) {

                    // Interrupt processing of the outer synthetic .trigger()ed event
                    if (!saved) {

                        // Store arguments for use when handling the inner native event
                        saved = slice.call(arguments);
                        dataPriv.set(this, type, saved);

                        // Trigger the native event and capture its result
                        // Support: IE <=9 - 11+
                        // focus() and blur() are asynchronous
                        notAsync = expectSync(this, type);
                        this[type]();
                        result = dataPriv.get(this, type);
                        if (saved !== result || notAsync) {
                            dataPriv.set(this, type, false);
                        } else {
                            result = undefined;
                        }
                        if (saved !== result) {

                            // Cancel the outer synthetic event
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            return result;
                        }

                        // If this is an inner synthetic event for an event with a bubbling surrogate
                        // (focus or blur), assume that the surrogate already propagated from triggering the
                        // native event and prevent that from happening again here.
                        // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                        // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                        // less bad than duplication.
                    } else if ((jQuery.event.special[type] || {}).delegateType) {
                        event.stopPropagation();
                    }

                    // If this is a native event triggered above, everything is now in order
                    // Fire an inner synthetic event with the original arguments
                } else if (saved) {

                    // ...and capture the result
                    dataPriv.set(this, type, jQuery.event.trigger(
                        // Support: IE <=9 - 11+
                        // Extend with the prototype to reset the above stopImmediatePropagation()
                        jQuery.extend(saved.shift(), jQuery.Event.prototype),
                        saved,
                        this
                    ));

                    // Abort handling of the native event
                    event.stopImmediatePropagation();
                }
            }
        });
    }

    jQuery.removeEvent = function (elem, type, handle) {

        // This "if" is needed for plain objects
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
        }
    };

    jQuery.Event = function (src, props) {

        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        }

        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;

            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented ||
            src.defaultPrevented === undefined &&

            // Support: Android <=2.3 only
            src.returnValue === false ?
                returnTrue :
                returnFalse;

            // Create target properties
            // Support: Safari <=6 - 7 only
            // Target should not be a text node (#504, #13143)
            this.target = (src.target && src.target.nodeType === 3) ?
                src.target.parentNode :
                src.target;

            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;

            // Event type
        } else {
            this.type = src;
        }

        // Put explicitly provided properties onto the event object
        if (props) {
            jQuery.extend(this, props);
        }

        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || Date.now();

        // Mark it as fixed
        this[jQuery.expando] = true;
    };

    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,

        preventDefault: function () {
            var e = this.originalEvent;

            this.isDefaultPrevented = returnTrue;

            if (e && !this.isSimulated) {
                e.preventDefault();
            }
        },
        stopPropagation: function () {
            var e = this.originalEvent;

            this.isPropagationStopped = returnTrue;

            if (e && !this.isSimulated) {
                e.stopPropagation();
            }
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;

            this.isImmediatePropagationStopped = returnTrue;

            if (e && !this.isSimulated) {
                e.stopImmediatePropagation();
            }

            this.stopPropagation();
        }
    };

    // Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,

        which: function (event) {
            var button = event.button;

            // Add which for key events
            if (event.which == null && rkeyEvent.test(event.type)) {
                return event.charCode != null ? event.charCode : event.keyCode;
            }

            // Add which for click: 1 === left; 2 === middle; 3 === right
            if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
                if (button & 1) {
                    return 1;
                }

                if (button & 2) {
                    return 3;
                }

                if (button & 4) {
                    return 2;
                }

                return 0;
            }

            return event.which;
        }
    }, jQuery.event.addProp);

    jQuery.each({focus: "focusin", blur: "focusout"}, function (type, delegateType) {
        jQuery.event.special[type] = {

            // Utilize native event if possible so blur/focus sequence is correct
            setup: function () {

                // Claim the first handler
                // dataPriv.set( this, "focus", ... )
                // dataPriv.set( this, "blur", ... )
                leverageNative(this, type, expectSync);

                // Return false to allow normal processing in the caller
                return false;
            },
            trigger: function () {

                // Force setup before trigger
                leverageNative(this, type);

                // Return non-false to allow normal event-path propagation
                return true;
            },

            delegateType: delegateType
        };
    });

    // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,

            handle: function (event) {
                var ret,
                    target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj;

                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || (related !== target && !jQuery.contains(target, related))) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });

    jQuery.fn.extend({

        on: function (types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function (types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function (types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {

                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(
                    handleObj.namespace ?
                        handleObj.origType + "." + handleObj.namespace :
                        handleObj.origType,
                    handleObj.selector,
                    handleObj.handler
                );
                return this;
            }
            if (typeof types === "object") {

                // ( types-object [, selector] )
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {

                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function () {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });


    var

        /* eslint-disable max-len */

        // See https://github.com/eslint/eslint/issues/3229
        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

        /* eslint-enable */

        // Support: IE <=10 - 11, Edge 12 - 13 only
        // In IE/Edge using regex groups here causes severe slowdowns.
        // See https://connect.microsoft.com/IE/feedback/details/1736512/
        rnoInnerhtml = /<script|<style|<link/i,

        // checked="checked" or checked
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    // Prefer a tbody over its parent table for containing new rows
    function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") &&
            nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

            return jQuery(elem).children("tbody")[0] || elem;
        }

        return elem;
    }

    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }

    function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
        } else {
            elem.removeAttribute("type");
        }

        return elem;
    }

    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

        if (dest.nodeType !== 1) {
            return;
        }

        // 1. Copy private data: events, handlers, etc.
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.access(src);
            pdataCur = dataPriv.set(dest, pdataOld);
            events = pdataOld.events;

            if (events) {
                delete pdataCur.handle;
                pdataCur.events = {};

                for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type, events[type][i]);
                    }
                }
            }
        }

        // 2. Copy user data
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);

            dataUser.set(dest, udataCur);
        }
    }

    // Fix IE bugs, see support tests
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();

        // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;

            // Fails to return the selected option to the default selected state when cloning options
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }

    function domManip(collection, args, callback, ignored) {

        // Flatten any nested arrays
        args = concat.apply([], args);

        var fragment, first, scripts, hasScripts, node, doc,
            i = 0,
            l = collection.length,
            iNoClone = l - 1,
            value = args[0],
            valueIsFunction = isFunction(value);

        // We can't cloneNode fragments that contain checked, in WebKit
        if (valueIsFunction ||
            (l > 1 && typeof value === "string" &&
                !support.checkClone && rchecked.test(value))) {
            return collection.each(function (index) {
                var self = collection.eq(index);
                if (valueIsFunction) {
                    args[0] = value.call(this, index, self.html());
                }
                domManip(self, args, callback, ignored);
            });
        }

        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;

            if (fragment.childNodes.length === 1) {
                fragment = first;
            }

            // Require either new content or an interest in ignored elements to invoke the callback
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;

                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (#8070).
                for (; i < l; i++) {
                    node = fragment;

                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true);

                        // Keep references to cloned scripts for later restoration
                        if (hasScripts) {

                            // Support: Android <=4.0 only, PhantomJS 1 only
                            // push.apply(_, arraylike) throws on ancient WebKit
                            jQuery.merge(scripts, getAll(node, "script"));
                        }
                    }

                    callback.call(collection[i], node, i);
                }

                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;

                    // Reenable scripts
                    jQuery.map(scripts, restoreScript);

                    // Evaluate executable scripts on first document insertion
                    for (i = 0; i < hasScripts; i++) {
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") &&
                            !dataPriv.access(node, "globalEval") &&
                            jQuery.contains(doc, node)) {

                            if (node.src && (node.type || "").toLowerCase() !== "module") {

                                // Optional AJAX dependency, but won't run scripts if not present
                                if (jQuery._evalUrl && !node.noModule) {
                                    jQuery._evalUrl(node.src, {
                                        nonce: node.nonce || node.getAttribute("nonce")
                                    });
                                }
                            } else {
                                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                            }
                        }
                    }
                }
            }
        }

        return collection;
    }

    function remove(elem, selector, keepData) {
        var node,
            nodes = selector ? jQuery.filter(selector, elem) : elem,
            i = 0;

        for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
                jQuery.cleanData(getAll(node));
            }

            if (node.parentNode) {
                if (keepData && isAttached(node)) {
                    setGlobalEval(getAll(node, "script"));
                }
                node.parentNode.removeChild(node);
            }
        }

        return elem;
    }

    jQuery.extend({
        htmlPrefilter: function (html) {
            return html.replace(rxhtmlTag, "<$1></$2>");
        },

        clone: function (elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements,
                clone = elem.cloneNode(true),
                inPage = isAttached(elem);

            // Fix IE cloning issues
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
                !jQuery.isXMLDoc(elem)) {

                // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);

                for (i = 0, l = srcElements.length; i < l; i++) {
                    fixInput(srcElements[i], destElements[i]);
                }
            }

            // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);

                    for (i = 0, l = srcElements.length; i < l; i++) {
                        cloneCopyEvent(srcElements[i], destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            }

            // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }

            // Return the cloned set
            return clone;
        },

        cleanData: function (elems) {
            var data, elem, type,
                special = jQuery.event.special,
                i = 0;

            for (; (elem = elems[i]) !== undefined; i++) {
                if (acceptData(elem)) {
                    if ((data = elem[dataPriv.expando])) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);

                                    // This is a shortcut to avoid jQuery.event.remove's overhead
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }

                        // Support: Chrome <=35 - 45+
                        // Assign undefined instead of using delete, see Data#remove
                        elem[dataPriv.expando] = undefined;
                    }
                    if (elem[dataUser.expando]) {

                        // Support: Chrome <=35 - 45+
                        // Assign undefined instead of using delete, see Data#remove
                        elem[dataUser.expando] = undefined;
                    }
                }
            }
        }
    });

    jQuery.fn.extend({
        detach: function (selector) {
            return remove(this, selector, true);
        },

        remove: function (selector) {
            return remove(this, selector);
        },

        text: function (value) {
            return access(this, function (value) {
                return value === undefined ?
                    jQuery.text(this) :
                    this.empty().each(function () {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = value;
                        }
                    });
            }, null, value, arguments.length);
        },

        append: function () {
            return domManip(this, arguments, function (elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },

        prepend: function () {
            return domManip(this, arguments, function (elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },

        before: function () {
            return domManip(this, arguments, function (elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },

        after: function () {
            return domManip(this, arguments, function (elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },

        empty: function () {
            var elem,
                i = 0;

            for (; (elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {

                    // Prevent memory leaks
                    jQuery.cleanData(getAll(elem, false));

                    // Remove any remaining nodes
                    elem.textContent = "";
                }
            }

            return this;
        },

        clone: function (dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

            return this.map(function () {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },

        html: function (value) {
            return access(this, function (value) {
                var elem = this[0] || {},
                    i = 0,
                    l = this.length;

                if (value === undefined && elem.nodeType === 1) {
                    return elem.innerHTML;
                }

                // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) &&
                    !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

                    value = jQuery.htmlPrefilter(value);

                    try {
                        for (; i < l; i++) {
                            elem = this[i] || {};

                            // Remove element nodes and prevent memory leaks
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }

                        elem = 0;

                        // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {
                    }
                }

                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },

        replaceWith: function () {
            var ignored = [];

            // Make the changes, replacing each non-ignored context element with the new content
            return domManip(this, arguments, function (elem) {
                var parent = this.parentNode;

                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) {
                        parent.replaceChild(elem, this);
                    }
                }

                // Force callback invocation
            }, ignored);
        }
    });

    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (name, original) {
        jQuery.fn[name] = function (selector) {
            var elems,
                ret = [],
                insert = jQuery(selector),
                last = insert.length - 1,
                i = 0;

            for (; i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);

                // Support: Android <=4.0 only, PhantomJS 1 only
                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                push.apply(ret, elems.get());
            }

            return this.pushStack(ret);
        };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

    var getStyles = function (elem) {

        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;

        if (!view || !view.opener) {
            view = window;
        }

        return view.getComputedStyle(elem);
    };

    var rboxStyle = new RegExp(cssExpand.join("|"), "i");


    (function () {

        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {

            // This is a singleton, we need to execute it only once
            if (!div) {
                return;
            }

            container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
                "margin-top:1px;padding:0;border:0";
            div.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
                "margin:auto;border:1px;padding:1px;" +
                "width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);

            var divStyle = window.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";

            // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

            // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
            // Some styles come back with percentage values, even though they shouldn't
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

            // Support: IE 9 - 11 only
            // Detect misreporting of content dimensions for box-sizing:border-box elements
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

            // Support: IE 9 only
            // Detect overflow:scroll screwiness (gh-3699)
            // Support: Chrome <=64
            // Don't get tricked when zoom affects offsetWidth (gh-4029)
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;

            documentElement.removeChild(container);

            // Nullify the div so it wouldn't be stored in the memory and
            // it will also be a sign that checks already performed
            div = null;
        }

        function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
        }

        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
            reliableMarginLeftVal,
            container = document.createElement("div"),
            div = document.createElement("div");

        // Finish early in limited (non-browser) environments
        if (!div.style) {
            return;
        }

        // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (#8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";

        jQuery.extend(support, {
            boxSizingReliable: function () {
                computeStyleTests();
                return boxSizingReliableVal;
            },
            pixelBoxStyles: function () {
                computeStyleTests();
                return pixelBoxStylesVal;
            },
            pixelPosition: function () {
                computeStyleTests();
                return pixelPositionVal;
            },
            reliableMarginLeft: function () {
                computeStyleTests();
                return reliableMarginLeftVal;
            },
            scrollboxSize: function () {
                computeStyleTests();
                return scrollboxSizeVal;
            }
        });
    })();


    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret,

            // Support: Firefox 51+
            // Retrieving style before computed somehow
            // fixes an issue with getting wrong values
            // on detached elements
            style = elem.style;

        computed = computed || getStyles(elem);

        // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, #12537)
        //   .css('--customProperty) (#3144)
        if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];

            if (ret === "" && !isAttached(elem)) {
                ret = jQuery.style(elem, name);
            }

            // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // https://drafts.csswg.org/cssom/#resolved-values
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {

                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;

                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;

                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }

        return ret !== undefined ?

            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + "" :
            ret;
    }


    function addGetHookIf(conditionFn, hookFn) {

        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function () {
                if (conditionFn()) {

                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }

                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }


    var cssPrefixes = ["Webkit", "Moz", "ms"],
        emptyStyle = document.createElement("div").style,
        vendorProps = {};

    // Return a vendor-prefixed property or undefined
    function vendorPropName(name) {

        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1),
            i = cssPrefixes.length;

        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
                return name;
            }
        }
    }

    // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
    function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];

        if (final) {
            return final;
        }
        if (name in emptyStyle) {
            return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
    }


    var

        // Swappable if display is none or starts with table
        // except "table", "table-cell", or "table-caption"
        // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rcustomProp = /^--/,
        cssShow = {position: "absolute", visibility: "hidden", display: "block"},
        cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function setPositiveNumber(elem, value, subtract) {

        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ?

            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") :
            value;
    }

    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0,
            extra = 0,
            delta = 0;

        // Adjustment may not be necessary
        if (box === (isBorderBox ? "border" : "content")) {
            return 0;
        }

        for (; i < 4; i += 2) {

            // Both box models exclude margin
            if (box === "margin") {
                delta += jQuery.css(elem, box + cssExpand[i], true, styles);
            }

            // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
            if (!isBorderBox) {

                // Add padding
                delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

                // For "border" or "margin", add border
                if (box !== "padding") {
                    delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);

                    // But still keep track of it otherwise
                } else {
                    extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }

                // If we get here with a border-box (content + padding + border), we're seeking "content" or
                // "padding" or "margin"
            } else {

                // For "content", subtract padding
                if (box === "content") {
                    delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }

                // For "content" or "padding", subtract border
                if (box !== "margin") {
                    delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }

        // Account for positive content-box scroll gutter when requested by providing computedVal
        if (!isBorderBox && computedVal >= 0) {

            // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
            // Assuming integer scroll gutter, subtract the rest and round down
            delta += Math.max(0, Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
                computedVal -
                delta -
                extra -
                0.5

                // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
                // Use an explicit zero to avoid NaN (gh-3964)
            )) || 0;
        }

        return delta;
    }

    function getWidthOrHeight(elem, dimension, extra) {

        // Start with computed style
        var styles = getStyles(elem),

            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
            // Fake content-box until we know it's needed to know the true value.
            boxSizingNeeded = !support.boxSizingReliable() || extra,
            isBorderBox = boxSizingNeeded &&
                jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            valueIsBorderBox = isBorderBox,

            val = curCSS(elem, dimension, styles),
            offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);

        // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.
        if (rnumnonpx.test(val)) {
            if (!extra) {
                return val;
            }
            val = "auto";
        }


        // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        // Support: IE 9-11 only
        // Also use offsetWidth/offsetHeight for when box sizing is unreliable
        // We use getClientRects() to check for hidden/disconnected.
        // In those cases, the computed value can be trusted to be border-box
        if ((!support.boxSizingReliable() && isBorderBox ||
            val === "auto" ||
            !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") &&
            elem.getClientRects().length) {

            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

            // Where available, offsetWidth/offsetHeight approximate border box dimensions.
            // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
            // retrieved value as a content box dimension.
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
                val = elem[offsetProp];
            }
        }

        // Normalize "" and auto
        val = parseFloat(val) || 0;

        // Adjust for the element's box model
        return (val +
            boxModelAdjustment(
                elem,
                dimension,
                extra || (isBorderBox ? "border" : "content"),
                valueIsBorderBox,
                styles,

                // Provide the current computed size to request scroll gutter calculation (gh-3589)
                val
            )
        ) + "px";
    }

    jQuery.extend({

        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function (elem, computed) {
                    if (computed) {

                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },

        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },

        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},

        // Get and set the style property on a DOM Node
        style: function (elem, name, value, extra) {

            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }

            // Make sure that we're working with the right name
            var ret, type, hooks,
                origName = camelCase(name),
                isCustomProp = rcustomProp.test(name),
                style = elem.style;

            // Make sure that we're working with the right name. We don't
            // want to query the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) {
                name = finalPropName(origName);
            }

            // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

            // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value;

                // Convert "+=" or "-=" to relative numbers (#7345)
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);

                    // Fixes bug #9237
                    type = "number";
                }

                // Make sure that null and NaN values aren't set (#7116)
                if (value == null || value !== value) {
                    return;
                }

                // If a number was passed in, add the unit (except for certain CSS properties)
                // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                // "px" to a few hardcoded values.
                if (type === "number" && !isCustomProp) {
                    value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                }

                // background-* props affect original clone's values
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                }

                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) ||
                    (value = hooks.set(elem, value, extra)) !== undefined) {

                    if (isCustomProp) {
                        style.setProperty(name, value);
                    } else {
                        style[name] = value;
                    }
                }

            } else {

                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks &&
                    (ret = hooks.get(elem, false, extra)) !== undefined) {

                    return ret;
                }

                // Otherwise just get the value from the style object
                return style[name];
            }
        },

        css: function (elem, name, extra, styles) {
            var val, num, hooks,
                origName = camelCase(name),
                isCustomProp = rcustomProp.test(name);

            // Make sure that we're working with the right name. We don't
            // want to modify the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) {
                name = finalPropName(origName);
            }

            // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            }

            // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            }

            // Convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            }

            // Make numeric if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }

            return val;
        }
    });

    jQuery.each(["height", "width"], function (i, dimension) {
        jQuery.cssHooks[dimension] = {
            get: function (elem, computed, extra) {
                if (computed) {

                    // Certain elements can have dimension info if we invisibly show them
                    // but it must have a current display style that would benefit
                    return rdisplayswap.test(jQuery.css(elem, "display")) &&

                    // Support: Safari 8+
                    // Table columns in Safari have non-zero offsetWidth & zero
                    // getBoundingClientRect().width unless display is changed.
                    // Support: IE <=11 only
                    // Running getBoundingClientRect on a disconnected node
                    // in IE throws an error.
                    (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ?
                        swap(elem, cssShow, function () {
                            return getWidthOrHeight(elem, dimension, extra);
                        }) :
                        getWidthOrHeight(elem, dimension, extra);
                }
            },

            set: function (elem, value, extra) {
                var matches,
                    styles = getStyles(elem),

                    // Only read styles.position if the test has a chance to fail
                    // to avoid forcing a reflow.
                    scrollboxSizeBuggy = !support.scrollboxSize() &&
                        styles.position === "absolute",

                    // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                    boxSizingNeeded = scrollboxSizeBuggy || extra,
                    isBorderBox = boxSizingNeeded &&
                        jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                    subtract = extra ?
                        boxModelAdjustment(
                            elem,
                            dimension,
                            extra,
                            isBorderBox,
                            styles
                        ) :
                        0;

                // Account for unreliable border-box dimensions by comparing offset* to computed and
                // faking a content-box to get border and padding (gh-3699)
                if (isBorderBox && scrollboxSizeBuggy) {
                    subtract -= Math.ceil(
                        elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
                        parseFloat(styles[dimension]) -
                        boxModelAdjustment(elem, dimension, "border", false, styles) -
                        0.5
                    );
                }

                // Convert to pixels if value adjustment is needed
                if (subtract && (matches = rcssNum.exec(value)) &&
                    (matches[3] || "px") !== "px") {

                    elem.style[dimension] = value;
                    value = jQuery.css(elem, dimension);
                }

                return setPositiveNumber(elem, value, subtract);
            }
        };
    });

    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,
        function (elem, computed) {
            if (computed) {
                return (parseFloat(curCSS(elem, "marginLeft")) ||
                    elem.getBoundingClientRect().left -
                    swap(elem, {marginLeft: 0}, function () {
                        return elem.getBoundingClientRect().left;
                    })
                ) + "px";
            }
        }
    );

    // These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function (value) {
                var i = 0,
                    expanded = {},

                    // Assumes a single number if not a string
                    parts = typeof value === "string" ? value.split(" ") : [value];

                for (; i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] =
                        parts[i] || parts[i - 2] || parts[0];
                }

                return expanded;
            }
        };

        if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });

    jQuery.fn.extend({
        css: function (name, value) {
            return access(this, function (elem, name, value) {
                var styles, len,
                    map = {},
                    i = 0;

                if (Array.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;

                    for (; i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }

                    return map;
                }

                return value !== undefined ?
                    jQuery.style(elem, name, value) :
                    jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        }
    });


    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }

    jQuery.Tween = Tween;

    Tween.prototype = {
        constructor: Tween,
        init: function (elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function () {
            var hooks = Tween.propHooks[this.prop];

            return hooks && hooks.get ?
                hooks.get(this) :
                Tween.propHooks._default.get(this);
        },
        run: function (percent) {
            var eased,
                hooks = Tween.propHooks[this.prop];

            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](
                    percent, this.options.duration * percent, 0, 1, this.options.duration
                );
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;

            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }

            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };

    Tween.prototype.init.prototype = Tween.prototype;

    Tween.propHooks = {
        _default: {
            get: function (tween) {
                var result;

                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (tween.elem.nodeType !== 1 ||
                    tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                    return tween.elem[tween.prop];
                }

                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, "");

                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function (tween) {

                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.nodeType === 1 && (
                    jQuery.cssHooks[tween.prop] ||
                    tween.elem.style[finalPropName(tween.prop)] != null)) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    };

    // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function (tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };

    jQuery.easing = {
        linear: function (p) {
            return p;
        },
        swing: function (p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };

    jQuery.fx = Tween.prototype.init;

    // Back compat <1.8 extension point
    jQuery.fx.step = {};


    var
        fxNow, inProgress,
        rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/;

    function schedule() {
        if (inProgress) {
            if (document.hidden === false && window.requestAnimationFrame) {
                window.requestAnimationFrame(schedule);
            } else {
                window.setTimeout(schedule, jQuery.fx.interval);
            }

            jQuery.fx.tick();
        }
    }

    // Animations created synchronously will run synchronously
    function createFxNow() {
        window.setTimeout(function () {
            fxNow = undefined;
        });
        return (fxNow = Date.now());
    }

    // Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which,
            i = 0,
            attrs = {height: type};

        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }

        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }

        return attrs;
    }

    function createTween(value, prop, animation) {
        var tween,
            collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
            index = 0,
            length = collection.length;
        for (; index < length; index++) {
            if ((tween = collection[index].call(animation, prop, value))) {

                // We're done with this property
                return tween;
            }
        }
    }

    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
            isBox = "width" in props || "height" in props,
            anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHiddenWithinTree(elem),
            dataShow = dataPriv.get(elem, "fxshow");

        // Queue-skipping animations hijack the fx hooks
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function () {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;

            anim.always(function () {

                // Ensure the complete handler is called before this completes
                anim.always(function () {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }

        // Detect show/hide animations
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {

                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                        hidden = true;

                        // Ignore all other no-op show/hide data
                    } else {
                        continue;
                    }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }

        // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
        }

        // Restrict "overflow" and "display" styles during box animations
        if (isBox && elem.nodeType === 1) {

            // Support: IE <=9 - 11, Edge 12 - 15
            // Record all 3 overflow attributes because IE does not infer the shorthand
            // from identically-valued overflowX and overflowY and Edge just mirrors
            // the overflowX value there.
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];

            // Identify a display type, preferring old show/hide data over the CSS cascade
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
                restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
                if (restoreDisplay) {
                    display = restoreDisplay;
                } else {

                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide([elem], true);
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css(elem, "display");
                    showHide([elem]);
                }
            }

            // Animate inline elements as inline-block
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                if (jQuery.css(elem, "float") === "none") {

                    // Restore the original display value at the end of pure show/hide animations
                    if (!propTween) {
                        anim.done(function () {
                            style.display = restoreDisplay;
                        });
                        if (restoreDisplay == null) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display;
                        }
                    }
                    style.display = "inline-block";
                }
            }
        }

        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function () {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }

        // Implement show/hide animations
        propTween = false;
        for (prop in orig) {

            // General show/hide setup for this element animation
            if (!propTween) {
                if (dataShow) {
                    if ("hidden" in dataShow) {
                        hidden = dataShow.hidden;
                    }
                } else {
                    dataShow = dataPriv.access(elem, "fxshow", {display: restoreDisplay});
                }

                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if (toggle) {
                    dataShow.hidden = !hidden;
                }

                // Show elements before animating them
                if (hidden) {
                    showHide([elem], true);
                }

                /* eslint-disable no-loop-func */

                anim.done(function () {

                    /* eslint-enable no-loop-func */

                    // The final step of a "hide" animation is actually hiding the element
                    if (!hidden) {
                        showHide([elem]);
                    }
                    dataPriv.remove(elem, "fxshow");
                    for (prop in orig) {
                        jQuery.style(elem, prop, orig[prop]);
                    }
                });
            }

            // Per-property setup
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                }
            }
        }
    }

    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;

        // camelCase, specialEasing and expand cssHook pass
        for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }

            if (index !== name) {
                props[name] = value;
                delete props[index];
            }

            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];

                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }

    function Animation(elem, properties, options) {
        var result,
            stopped,
            index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always(function () {

                // Don't match elem in the :animated selector
                delete tick.elem;
            }),
            tick = function () {
                if (stopped) {
                    return false;
                }
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

                    // Support: Android 2.3 only
                    // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length;

                for (; index < length; index++) {
                    animation.tweens[index].run(percent);
                }

                deferred.notifyWith(elem, [animation, percent, remaining]);

                // If there's more to do, yield
                if (percent < 1 && length) {
                    return remaining;
                }

                // If this was an empty animation, synthesize a final progress notification
                if (!length) {
                    deferred.notifyWith(elem, [animation, 1, 0]);
                }

                // Resolve the animation and report its conclusion
                deferred.resolveWith(elem, [animation]);
                return false;
            },
            animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(true, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function (prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end,
                        animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween;
                },
                stop: function (gotoEnd) {
                    var index = 0,

                        // If we are going to the end, we want to run all the tweens
                        // otherwise we skip this part
                        length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this;
                    }
                    stopped = true;
                    for (; index < length; index++) {
                        animation.tweens[index].run(1);
                    }

                    // Resolve when we played the last frame; otherwise, reject
                    if (gotoEnd) {
                        deferred.notifyWith(elem, [animation, 1, 0]);
                        deferred.resolveWith(elem, [animation, gotoEnd]);
                    } else {
                        deferred.rejectWith(elem, [animation, gotoEnd]);
                    }
                    return this;
                }
            }),
            props = animation.props;

        propFilter(props, animation.opts.specialEasing);

        for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (isFunction(result.stop)) {
                    jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
                        result.stop.bind(result);
                }
                return result;
            }
        }

        jQuery.map(props, createTween, animation);

        if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }

        // Attach callbacks from options
        animation
            .progress(animation.opts.progress)
            .done(animation.opts.done, animation.opts.complete)
            .fail(animation.opts.fail)
            .always(animation.opts.always);

        jQuery.fx.timer(
            jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            })
        );

        return animation;
    }

    jQuery.Animation = jQuery.extend(Animation, {

        tweeners: {
            "*": [function (prop, value) {
                var tween = this.createTween(prop, value);
                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                return tween;
            }]
        },

        tweener: function (props, callback) {
            if (isFunction(props)) {
                callback = props;
                props = ["*"];
            } else {
                props = props.match(rnothtmlwhite);
            }

            var prop,
                index = 0,
                length = props.length;

            for (; index < length; index++) {
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },

        prefilters: [defaultPrefilter],

        prefilter: function (callback, prepend) {
            if (prepend) {
                Animation.prefilters.unshift(callback);
            } else {
                Animation.prefilters.push(callback);
            }
        }
    });

    jQuery.speed = function (speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing ||
                isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
        };

        // Go to the end state if fx are off
        if (jQuery.fx.off) {
            opt.duration = 0;

        } else {
            if (typeof opt.duration !== "number") {
                if (opt.duration in jQuery.fx.speeds) {
                    opt.duration = jQuery.fx.speeds[opt.duration];

                } else {
                    opt.duration = jQuery.fx.speeds._default;
                }
            }
        }

        // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        }

        // Queueing
        opt.old = opt.complete;

        opt.complete = function () {
            if (isFunction(opt.old)) {
                opt.old.call(this);
            }

            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };

        return opt;
    };

    jQuery.fn.extend({
        fadeTo: function (speed, to, easing, callback) {

            // Show any hidden elements after setting opacity to 0
            return this.filter(isHiddenWithinTree).css("opacity", 0).show()

            // Animate to the value specified
                .end().animate({opacity: to}, speed, easing, callback);
        },
        animate: function (prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop),
                optall = jQuery.speed(speed, easing, callback),
                doAnimation = function () {

                    // Operate on a copy of prop so per-property easing won't be lost
                    var anim = Animation(this, jQuery.extend({}, prop), optall);

                    // Empty animations, or finishing resolves immediately
                    if (empty || dataPriv.get(this, "finish")) {
                        anim.stop(true);
                    }
                };
            doAnimation.finish = doAnimation;

            return empty || optall.queue === false ?
                this.each(doAnimation) :
                this.queue(optall.queue, doAnimation);
        },
        stop: function (type, clearQueue, gotoEnd) {
            var stopQueue = function (hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };

            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }

            return this.each(function () {
                var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = dataPriv.get(this);

                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }

                for (index = timers.length; index--;) {
                    if (timers[index].elem === this &&
                        (type == null || timers[index].queue === type)) {

                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }

                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function (type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function () {
                var index,
                    data = dataPriv.get(this),
                    queue = data[type + "queue"],
                    hooks = data[type + "queueHooks"],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0;

                // Enable finishing flag on private data
                data.finish = true;

                // Empty the queue first
                jQuery.queue(this, type, []);

                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                }

                // Look for any active animations, and finish them
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                }

                // Look for any animations in the old queue and finish them
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                }

                // Turn off finishing flag
                delete data.finish;
            });
        }
    });

    jQuery.each(["toggle", "show", "hide"], function (i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function (speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ?
                cssFn.apply(this, arguments) :
                this.animate(genFx(name, true), speed, easing, callback);
        };
    });

    // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (name, props) {
        jQuery.fn[name] = function (speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });

    jQuery.timers = [];
    jQuery.fx.tick = function () {
        var timer,
            i = 0,
            timers = jQuery.timers;

        fxNow = Date.now();

        for (; i < timers.length; i++) {
            timer = timers[i];

            // Run the timer and safely remove it when done (allowing for external removal)
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }

        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };

    jQuery.fx.timer = function (timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
    };

    jQuery.fx.interval = 13;
    jQuery.fx.start = function () {
        if (inProgress) {
            return;
        }

        inProgress = true;
        schedule();
    };

    jQuery.fx.stop = function () {
        inProgress = null;
    };

    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,

        // Default speed
        _default: 400
    };


    // Based off of the plugin by Clint Helfers, with permission.
    // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
    jQuery.fn.delay = function (time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";

        return this.queue(type, function (next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function () {
                window.clearTimeout(timeout);
            };
        });
    };


    (function () {
        var input = document.createElement("input"),
            select = document.createElement("select"),
            opt = select.appendChild(document.createElement("option"));

        input.type = "checkbox";

        // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== "";

        // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected;

        // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();


    var boolHook,
        attrHandle = jQuery.expr.attrHandle;

    jQuery.fn.extend({
        attr: function (name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },

        removeAttr: function (name) {
            return this.each(function () {
                jQuery.removeAttr(this, name);
            });
        }
    });

    jQuery.extend({
        attr: function (elem, name, value) {
            var ret, hooks,
                nType = elem.nodeType;

            // Don't get/set attributes on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            }

            // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === "undefined") {
                return jQuery.prop(elem, name, value);
            }

            // Attribute hooks are determined by the lowercase version
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                hooks = jQuery.attrHooks[name.toLowerCase()] ||
                    (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            }

            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }

                if (hooks && "set" in hooks &&
                    (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }

                elem.setAttribute(name, value + "");
                return value;
            }

            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }

            ret = jQuery.find.attr(elem, name);

            // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },

        attrHooks: {
            type: {
                set: function (elem, value) {
                    if (!support.radioValue && value === "radio" &&
                        nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        },

        removeAttr: function (elem, value) {
            var name,
                i = 0,

                // Attribute names can contain non-HTML whitespace characters
                // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
                attrNames = value && value.match(rnothtmlwhite);

            if (attrNames && elem.nodeType === 1) {
                while ((name = attrNames[i++])) {
                    elem.removeAttribute(name);
                }
            }
        }
    });

    // Hooks for boolean attributes
    boolHook = {
        set: function (elem, value, name) {
            if (value === false) {

                // Remove boolean attributes when set to false
                jQuery.removeAttr(elem, name);
            } else {
                elem.setAttribute(name, name);
            }
            return name;
        }
    };

    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;

        attrHandle[name] = function (elem, name, isXML) {
            var ret, handle,
                lowercaseName = name.toLowerCase();

            if (!isXML) {

                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name, isXML) != null ?
                    lowercaseName :
                    null;
                attrHandle[lowercaseName] = handle;
            }
            return ret;
        };
    });


    var rfocusable = /^(?:input|select|textarea|button)$/i,
        rclickable = /^(?:a|area)$/i;

    jQuery.fn.extend({
        prop: function (name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },

        removeProp: function (name) {
            return this.each(function () {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });

    jQuery.extend({
        prop: function (elem, name, value) {
            var ret, hooks,
                nType = elem.nodeType;

            // Don't get/set properties on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            }

            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }

            if (value !== undefined) {
                if (hooks && "set" in hooks &&
                    (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }

                return (elem[name] = value);
            }

            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }

            return elem[name];
        },

        propHooks: {
            tabIndex: {
                get: function (elem) {

                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");

                    if (tabindex) {
                        return parseInt(tabindex, 10);
                    }

                    if (
                        rfocusable.test(elem.nodeName) ||
                        rclickable.test(elem.nodeName) &&
                        elem.href
                    ) {
                        return 0;
                    }

                    return -1;
                }
            }
        },

        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });

    // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    // eslint rule "no-unused-expressions" is disabled for this code
    // since it considers such accessions noop
    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            get: function (elem) {

                /* eslint no-unused-expressions: "off" */

                var parent = elem.parentNode;
                if (parent && parent.parentNode) {
                    parent.parentNode.selectedIndex;
                }
                return null;
            },
            set: function (elem) {

                /* eslint no-unused-expressions: "off" */

                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;

                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
            }
        };
    }

    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function () {
        jQuery.propFix[this.toLowerCase()] = this;
    });


    // Strip and collapse whitespace according to HTML spec
    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
    function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
    }


    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }

    function classesToArray(value) {
        if (Array.isArray(value)) {
            return value;
        }
        if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
        }
        return [];
    }

    jQuery.fn.extend({
        addClass: function (value) {
            var classes, elem, cur, curValue, clazz, j, finalValue,
                i = 0;

            if (isFunction(value)) {
                return this.each(function (j) {
                    jQuery(this).addClass(value.call(this, j, getClass(this)));
                });
            }

            classes = classesToArray(value);

            if (classes.length) {
                while ((elem = this[i++])) {
                    curValue = getClass(elem);
                    cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

                    if (cur) {
                        j = 0;
                        while ((clazz = classes[j++])) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        }

                        // Only assign if different to avoid unneeded rendering.
                        finalValue = stripAndCollapse(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue);
                        }
                    }
                }
            }

            return this;
        },

        removeClass: function (value) {
            var classes, elem, cur, curValue, clazz, j, finalValue,
                i = 0;

            if (isFunction(value)) {
                return this.each(function (j) {
                    jQuery(this).removeClass(value.call(this, j, getClass(this)));
                });
            }

            if (!arguments.length) {
                return this.attr("class", "");
            }

            classes = classesToArray(value);

            if (classes.length) {
                while ((elem = this[i++])) {
                    curValue = getClass(elem);

                    // This expression is here for better compressibility (see addClass)
                    cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

                    if (cur) {
                        j = 0;
                        while ((clazz = classes[j++])) {

                            // Remove *all* instances
                            while (cur.indexOf(" " + clazz + " ") > -1) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }

                        // Only assign if different to avoid unneeded rendering.
                        finalValue = stripAndCollapse(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue);
                        }
                    }
                }
            }

            return this;
        },

        toggleClass: function (value, stateVal) {
            var type = typeof value,
                isValidValue = type === "string" || Array.isArray(value);

            if (typeof stateVal === "boolean" && isValidValue) {
                return stateVal ? this.addClass(value) : this.removeClass(value);
            }

            if (isFunction(value)) {
                return this.each(function (i) {
                    jQuery(this).toggleClass(
                        value.call(this, i, getClass(this), stateVal),
                        stateVal
                    );
                });
            }

            return this.each(function () {
                var className, i, self, classNames;

                if (isValidValue) {

                    // Toggle individual class names
                    i = 0;
                    self = jQuery(this);
                    classNames = classesToArray(value);

                    while ((className = classNames[i++])) {

                        // Check each className given, space separated list
                        if (self.hasClass(className)) {
                            self.removeClass(className);
                        } else {
                            self.addClass(className);
                        }
                    }

                    // Toggle whole class name
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) {

                        // Store className if set
                        dataPriv.set(this, "__className__", className);
                    }

                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) {
                        this.setAttribute("class",
                            className || value === false ?
                                "" :
                                dataPriv.get(this, "__className__") || ""
                        );
                    }
                }
            });
        },

        hasClass: function (selector) {
            var className, elem,
                i = 0;

            className = " " + selector + " ";
            while ((elem = this[i++])) {
                if (elem.nodeType === 1 &&
                    (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                    return true;
                }
            }

            return false;
        }
    });


    var rreturn = /\r/g;

    jQuery.fn.extend({
        val: function (value) {
            var hooks, ret, valueIsFunction,
                elem = this[0];

            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] ||
                        jQuery.valHooks[elem.nodeName.toLowerCase()];

                    if (hooks &&
                        "get" in hooks &&
                        (ret = hooks.get(elem, "value")) !== undefined
                    ) {
                        return ret;
                    }

                    ret = elem.value;

                    // Handle most common string cases
                    if (typeof ret === "string") {
                        return ret.replace(rreturn, "");
                    }

                    // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret;
                }

                return;
            }

            valueIsFunction = isFunction(value);

            return this.each(function (i) {
                var val;

                if (this.nodeType !== 1) {
                    return;
                }

                if (valueIsFunction) {
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    val = value;
                }

                // Treat null/undefined as ""; convert numbers to string
                if (val == null) {
                    val = "";

                } else if (typeof val === "number") {
                    val += "";

                } else if (Array.isArray(val)) {
                    val = jQuery.map(val, function (value) {
                        return value == null ? "" : value + "";
                    });
                }

                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });

    jQuery.extend({
        valHooks: {
            option: {
                get: function (elem) {

                    var val = jQuery.find.attr(elem, "value");
                    return val != null ?
                        val :

                        // Support: IE <=10 - 11 only
                        // option.text throws exceptions (#14686, #14858)
                        // Strip and collapse whitespace
                        // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                        stripAndCollapse(jQuery.text(elem));
                }
            },
            select: {
                get: function (elem) {
                    var value, option, i,
                        options = elem.options,
                        index = elem.selectedIndex,
                        one = elem.type === "select-one",
                        values = one ? null : [],
                        max = one ? index + 1 : options.length;

                    if (index < 0) {
                        i = max;

                    } else {
                        i = one ? index : 0;
                    }

                    // Loop through all the selected options
                    for (; i < max; i++) {
                        option = options[i];

                        // Support: IE <=9 only
                        // IE8-9 doesn't update selected after form reset (#2551)
                        if ((option.selected || i === index) &&

                            // Don't return options that are disabled or in a disabled optgroup
                            !option.disabled &&
                            (!option.parentNode.disabled ||
                                !nodeName(option.parentNode, "optgroup"))) {

                            // Get the specific value for the option
                            value = jQuery(option).val();

                            // We don't need an array for one selects
                            if (one) {
                                return value;
                            }

                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }

                    return values;
                },

                set: function (elem, value) {
                    var optionSet, option,
                        options = elem.options,
                        values = jQuery.makeArray(value),
                        i = options.length;

                    while (i--) {
                        option = options[i];

                        /* eslint-disable no-cond-assign */

                        if (option.selected =
                            jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1
                        ) {
                            optionSet = true;
                        }

                        /* eslint-enable no-cond-assign */
                    }

                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        }
    });

    // Radios and checkboxes getter/setter
    jQuery.each(["radio", "checkbox"], function () {
        jQuery.valHooks[this] = {
            set: function (elem, value) {
                if (Array.isArray(value)) {
                    return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
                }
            }
        };
        if (!support.checkOn) {
            jQuery.valHooks[this].get = function (elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });


    // Return jQuery for attributes-only inclusion


    support.focusin = "onfocusin" in window;


    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        stopPropagationCallback = function (e) {
            e.stopPropagation();
        };

    jQuery.extend(jQuery.event, {

        trigger: function (event, data, elem, onlyHandlers) {

            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
                eventPath = [elem || document],
                type = hasOwn.call(event, "type") ? event.type : event,
                namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

            cur = lastElement = tmp = elem = elem || document;

            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }

            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }

            if (type.indexOf(".") > -1) {

                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;

            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ?
                event :
                new jQuery.Event(type, typeof event === "object" && event);

            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ?
                new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                null;

            // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }

            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ?
                [event] :
                jQuery.makeArray(data, [event]);

            // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            }

            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {

                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (; cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                }

                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }

            // Fire handlers on the event path
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                lastElement = cur;
                event.type = i > 1 ?
                    bubbleType :
                    special.bindType || type;

                // jQuery handler
                handle = (dataPriv.get(cur, "events") || {})[event.type] &&
                    dataPriv.get(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                }

                // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type;

            // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {

                if ((!special._default ||
                    special._default.apply(eventPath.pop(), data) === false) &&
                    acceptData(elem)) {

                    // Call a native DOM method on the target with the same name as the event.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {

                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];

                        if (tmp) {
                            elem[ontype] = null;
                        }

                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;

                        if (event.isPropagationStopped()) {
                            lastElement.addEventListener(type, stopPropagationCallback);
                        }

                        elem[type]();

                        if (event.isPropagationStopped()) {
                            lastElement.removeEventListener(type, stopPropagationCallback);
                        }

                        jQuery.event.triggered = undefined;

                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }

            return event.result;
        },

        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function (type, elem, event) {
            var e = jQuery.extend(
                new jQuery.Event(),
                event,
                {
                    type: type,
                    isSimulated: true
                }
            );

            jQuery.event.trigger(e, null, elem);
        }

    });

    jQuery.fn.extend({

        trigger: function (type, data) {
            return this.each(function () {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function (type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });


    // Support: Firefox <=44
    // Firefox doesn't have focus(in | out) events
    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
    //
    // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
    // focus(in | out) events fire after focus & blur events,
    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
    // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
    if (!support.focusin) {
        jQuery.each({focus: "focusin", blur: "focusout"}, function (orig, fix) {

            // Attach a single capturing handler on the document while someone wants focusin/focusout
            var handler = function (event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
            };

            jQuery.event.special[fix] = {
                setup: function () {
                    var doc = this.ownerDocument || this,
                        attaches = dataPriv.access(doc, fix);

                    if (!attaches) {
                        doc.addEventListener(orig, handler, true);
                    }
                    dataPriv.access(doc, fix, (attaches || 0) + 1);
                },
                teardown: function () {
                    var doc = this.ownerDocument || this,
                        attaches = dataPriv.access(doc, fix) - 1;

                    if (!attaches) {
                        doc.removeEventListener(orig, handler, true);
                        dataPriv.remove(doc, fix);

                    } else {
                        dataPriv.access(doc, fix, attaches);
                    }
                }
            };
        });
    }
    var location = window.location;

    var nonce = Date.now();

    var rquery = (/\?/);


    // Cross-browser xml parsing
    jQuery.parseXML = function (data) {
        var xml;
        if (!data || typeof data !== "string") {
            return null;
        }

        // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
            xml = (new window.DOMParser()).parseFromString(data, "text/xml");
        } catch (e) {
            xml = undefined;
        }

        if (!xml || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data);
        }
        return xml;
    };


    var
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams(prefix, obj, traditional, add) {
        var name;

        if (Array.isArray(obj)) {

            // Serialize array item.
            jQuery.each(obj, function (i, v) {
                if (traditional || rbracket.test(prefix)) {

                    // Treat each array item as a scalar.
                    add(prefix, v);

                } else {

                    // Item is non-scalar (array or object), encode its numeric index.
                    buildParams(
                        prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                        v,
                        traditional,
                        add
                    );
                }
            });

        } else if (!traditional && toType(obj) === "object") {

            // Serialize object item.
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }

        } else {

            // Serialize scalar item.
            add(prefix, obj);
        }
    }

    // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function (a, traditional) {
        var prefix,
            s = [],
            add = function (key, valueOrFunction) {

                // If value is a function, invoke it and use its return value
                var value = isFunction(valueOrFunction) ?
                    valueOrFunction() :
                    valueOrFunction;

                s[s.length] = encodeURIComponent(key) + "=" +
                    encodeURIComponent(value == null ? "" : value);
            };

        if (a == null) {
            return "";
        }

        // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {

            // Serialize the form elements
            jQuery.each(a, function () {
                add(this.name, this.value);
            });

        } else {

            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }

        // Return the resulting serialization
        return s.join("&");
    };

    jQuery.fn.extend({
        serialize: function () {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {

                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            })
                .filter(function () {
                    var type = this.type;

                    // Use .is( ":disabled" ) so that fieldset[disabled] works
                    return this.name && !jQuery(this).is(":disabled") &&
                        rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
                        (this.checked || !rcheckableType.test(type));
                })
                .map(function (i, elem) {
                    var val = jQuery(this).val();

                    if (val == null) {
                        return null;
                    }

                    if (Array.isArray(val)) {
                        return jQuery.map(val, function (val) {
                            return {name: elem.name, value: val.replace(rCRLF, "\r\n")};
                        });
                    }

                    return {name: elem.name, value: val.replace(rCRLF, "\r\n")};
                }).get();
        }
    });


    var
        r20 = /%20/g,
        rhash = /#.*$/,
        rantiCache = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

        // #7653, #8125, #8152: local protocol detection
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,

        /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
        prefilters = {},

        /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
        transports = {},

        // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
        allTypes = "*/".concat("*"),

        // Anchor tag for parsing the document origin
        originAnchor = document.createElement("a");
    originAnchor.href = location.href;

    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {

        // dataTypeExpression is optional and defaults to "*"
        return function (dataTypeExpression, func) {

            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }

            var dataType,
                i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

            if (isFunction(func)) {

                // For each dataType in the dataTypeExpression
                while ((dataType = dataTypes[i++])) {

                    // Prepend if requested
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);

                        // Otherwise append
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }

    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

        var inspected = {},
            seekingTransport = (structure === transports);

        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" &&
                    !seekingTransport && !inspected[dataTypeOrTransport]) {

                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }

        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }

    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887
    function ajaxExtend(target, src) {
        var key, deep,
            flatOptions = jQuery.ajaxSettings.flatOptions || {};

        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }

        return target;
    }

    /* Handles responses to an ajax request:
    * - finds the right dataType (mediates between content-type and expected dataType)
    * - returns the corresponding response
    */
    function ajaxHandleResponses(s, jqXHR, responses) {

        var ct, type, finalDataType, firstDataType,
            contents = s.contents,
            dataTypes = s.dataTypes;

        // Remove auto dataType and get content-type in the process
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }

        // Check if we're dealing with a known content-type
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }

        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {

            // Try convertible dataTypes
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }

            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }

        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }

    /* Chain conversions given the request and the original response
    * Also sets the responseXXX fields on the jqXHR instance
    */
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev,
            converters = {},

            // Work with a copy of dataTypes in case we need to modify it for conversion
            dataTypes = s.dataTypes.slice();

        // Create converters map with lowercased keys
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }

        current = dataTypes.shift();

        // Convert to each sequential dataType
        while (current) {

            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            }

            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }

            prev = current;
            current = dataTypes.shift();

            if (current) {

                // There's only work to do if current dataType is non-auto
                if (current === "*") {

                    current = prev;

                    // Convert response if prev dataType is non-auto and differs from current
                } else if (prev !== "*" && prev !== current) {

                    // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current];

                    // If none found, seek a pair
                    if (!conv) {
                        for (conv2 in converters) {

                            // If conv2 outputs current
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {

                                // If prev can be converted to accepted input
                                conv = converters[prev + " " + tmp[0]] ||
                                    converters["* " + tmp[0]];
                                if (conv) {

                                    // Condense equivalence converters
                                    if (conv === true) {
                                        conv = converters[conv2];

                                        // Otherwise, insert the intermediate dataType
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }

                    // Apply converter (if not an equivalence)
                    if (conv !== true) {

                        // Unless errors are allowed to bubble, catch and return them
                        if (conv && s.throws) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }

        return {state: "success", data: response};
    }

    jQuery.extend({

        // Counter for holding the number of active queries
        active: 0,

        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},

        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",

            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },

            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },

            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },

            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {

                // Convert anything to text
                "* text": String,

                // Text to html (true = no transformation)
                "text html": true,

                // Evaluate text as a json expression
                "text json": JSON.parse,

                // Parse text as xml
                "text xml": jQuery.parseXML
            },

            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },

        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function (target, settings) {
            return settings ?

                // Building a settings object
                ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

                // Extending ajaxSettings
                ajaxExtend(jQuery.ajaxSettings, target);
        },

        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),

        // Main method
        ajax: function (url, options) {

            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }

            // Force options to be an object
            options = options || {};

            var transport,

                // URL without anti-cache param
                cacheURL,

                // Response headers
                responseHeadersString,
                responseHeaders,

                // timeout handle
                timeoutTimer,

                // Url cleanup var
                urlAnchor,

                // Request state (becomes false upon send and true upon completion)
                completed,

                // To know if global events are to be dispatched
                fireGlobals,

                // Loop variable
                i,

                // uncached part of the url
                uncached,

                // Create the final options object
                s = jQuery.ajaxSetup({}, options),

                // Callbacks context
                callbackContext = s.context || s,

                // Context for global events is callbackContext if it is a DOM node or jQuery collection
                globalEventContext = s.context &&
                (callbackContext.nodeType || callbackContext.jquery) ?
                    jQuery(callbackContext) :
                    jQuery.event,

                // Deferreds
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks("once memory"),

                // Status-dependent callbacks
                statusCode = s.statusCode || {},

                // Headers (they are sent all at once)
                requestHeaders = {},
                requestHeadersNames = {},

                // Default abort message
                strAbort = "canceled",

                // Fake xhr
                jqXHR = {
                    readyState: 0,

                    // Builds headers hashtable if needed
                    getResponseHeader: function (key) {
                        var match;
                        if (completed) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while ((match = rheaders.exec(responseHeadersString))) {
                                    responseHeaders[match[1].toLowerCase() + " "] =
                                        (responseHeaders[match[1].toLowerCase() + " "] || [])
                                            .concat(match[2]);
                                }
                            }
                            match = responseHeaders[key.toLowerCase() + " "];
                        }
                        return match == null ? null : match.join(", ");
                    },

                    // Raw string
                    getAllResponseHeaders: function () {
                        return completed ? responseHeadersString : null;
                    },

                    // Caches the header
                    setRequestHeader: function (name, value) {
                        if (completed == null) {
                            name = requestHeadersNames[name.toLowerCase()] =
                                requestHeadersNames[name.toLowerCase()] || name;
                            requestHeaders[name] = value;
                        }
                        return this;
                    },

                    // Overrides response content-type header
                    overrideMimeType: function (type) {
                        if (completed == null) {
                            s.mimeType = type;
                        }
                        return this;
                    },

                    // Status-dependent callbacks
                    statusCode: function (map) {
                        var code;
                        if (map) {
                            if (completed) {

                                // Execute the appropriate callbacks
                                jqXHR.always(map[jqXHR.status]);
                            } else {

                                // Lazy-add the new callbacks in a way that preserves old ones
                                for (code in map) {
                                    statusCode[code] = [statusCode[code], map[code]];
                                }
                            }
                        }
                        return this;
                    },

                    // Cancel the request
                    abort: function (statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText);
                        }
                        done(0, finalText);
                        return this;
                    }
                };

            // Attach deferreds
            deferred.promise(jqXHR);

            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || location.href) + "")
                .replace(rprotocol, location.protocol + "//");

            // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type;

            // Extract dataTypes list
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

            // A cross-domain request is in order when the origin doesn't match the current origin.
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a");

                // Support: IE <=8 - 11, Edge 12 - 15
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url;

                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
                        urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) {

                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            }

            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }

            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

            // If request was aborted inside a prefilter, stop there
            if (completed) {
                return jqXHR;
            }

            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
            fireGlobals = jQuery.event && s.global;

            // Watch for a new set of requests
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }

            // Uppercase the type
            s.type = s.type.toUpperCase();

            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);

            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            // Remove hash to simplify url manipulation
            cacheURL = s.url.replace(rhash, "");

            // More options handling for requests with no content
            if (!s.hasContent) {

                // Remember the hash so we can put it back
                uncached = s.url.slice(cacheURL.length);

                // If data is available and should be processed, append data to url
                if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

                    // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }

                // Add or update anti-cache param if needed
                if (s.cache === false) {
                    cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce++) + uncached;
                }

                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached;

                // Change '%20' to '+' if this is encoded form body content (gh-2658)
            } else if (s.data && s.processData &&
                (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                s.data = s.data.replace(r20, "+");
            }

            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }

            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }

            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader(
                "Accept",
                s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
                    s.accepts[s.dataTypes[0]] +
                    (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
                    s.accepts["*"]
            );

            // Check for headers option
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }

            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend &&
                (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

                // Abort if not done already and return
                return jqXHR.abort();
            }

            // Aborting is no longer a cancellation
            strAbort = "abort";

            // Install callbacks on deferreds
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);

            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

            // If no transport, we auto-abort
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;

                // Send global event
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                }

                // If request was aborted inside ajaxSend, stop there
                if (completed) {
                    return jqXHR;
                }

                // Timeout
                if (s.async && s.timeout > 0) {
                    timeoutTimer = window.setTimeout(function () {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }

                try {
                    completed = false;
                    transport.send(requestHeaders, done);
                } catch (e) {

                    // Rethrow post-completion exceptions
                    if (completed) {
                        throw e;
                    }

                    // Propagate others as results
                    done(-1, e);
                }
            }

            // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified,
                    statusText = nativeStatusText;

                // Ignore repeat invocations
                if (completed) {
                    return;
                }

                completed = true;

                // Clear timeout if it exists
                if (timeoutTimer) {
                    window.clearTimeout(timeoutTimer);
                }

                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;

                // Cache response headers
                responseHeadersString = headers || "";

                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;

                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;

                // Get response data
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }

                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);

                // If successful, handle type chaining
                if (isSuccess) {

                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    }

                    // if no content
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent";

                        // if not modified
                    } else if (status === 304) {
                        statusText = "notmodified";

                        // If we have data, let's convert it
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {

                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }

                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";

                // Success/Error
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                } else {
                    deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                }

                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;

                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError",
                        [jqXHR, s, isSuccess ? success : error]);
                }

                // Complete
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

                    // Handle the global AJAX counter
                    if (!(--jQuery.active)) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }

            return jqXHR;
        },

        getJSON: function (url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },

        getScript: function (url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });

    jQuery.each(["get", "post"], function (i, method) {
        jQuery[method] = function (url, data, callback, type) {

            // Shift arguments if data argument was omitted
            if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }

            // The url can be an options object (which then must have .url)
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });


    jQuery._evalUrl = function (url, options) {
        return jQuery.ajax({
            url: url,

            // Make this explicit, since user can override this through ajaxSetup (#11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,

            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (response) {
                jQuery.globalEval(response, options);
            }
        });
    };


    jQuery.fn.extend({
        wrapAll: function (html) {
            var wrap;

            if (this[0]) {
                if (isFunction(html)) {
                    html = html.call(this[0]);
                }

                // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }

                wrap.map(function () {
                    var elem = this;

                    while (elem.firstElementChild) {
                        elem = elem.firstElementChild;
                    }

                    return elem;
                }).append(this);
            }

            return this;
        },

        wrapInner: function (html) {
            if (isFunction(html)) {
                return this.each(function (i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }

            return this.each(function () {
                var self = jQuery(this),
                    contents = self.contents();

                if (contents.length) {
                    contents.wrapAll(html);

                } else {
                    self.append(html);
                }
            });
        },

        wrap: function (html) {
            var htmlIsFunction = isFunction(html);

            return this.each(function (i) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
        },

        unwrap: function (selector) {
            this.parent(selector).not("body").each(function () {
                jQuery(this).replaceWith(this.childNodes);
            });
            return this;
        }
    });


    jQuery.expr.pseudos.hidden = function (elem) {
        return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function (elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };


    jQuery.ajaxSettings.xhr = function () {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {
        }
    };

    var xhrSuccessStatus = {

            // File protocol always yields status code 0, assume 200
            0: 200,

            // Support: IE <=9 only
            // #1450: sometimes IE returns 1223 when it should be 204
            1223: 204
        },
        xhrSupported = jQuery.ajaxSettings.xhr();

    support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
    support.ajax = xhrSupported = !!xhrSupported;

    jQuery.ajaxTransport(function (options) {
        var callback, errorCallback;

        // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) {
            return {
                send: function (headers, complete) {
                    var i,
                        xhr = options.xhr();

                    xhr.open(
                        options.type,
                        options.url,
                        options.async,
                        options.username,
                        options.password
                    );

                    // Apply custom fields if provided
                    if (options.xhrFields) {
                        for (i in options.xhrFields) {
                            xhr[i] = options.xhrFields[i];
                        }
                    }

                    // Override mime type if needed
                    if (options.mimeType && xhr.overrideMimeType) {
                        xhr.overrideMimeType(options.mimeType);
                    }

                    // X-Requested-With header
                    // For cross-domain requests, seeing as conditions for a preflight are
                    // akin to a jigsaw puzzle, we simply never set it to be sure.
                    // (it can always be set on a per-request basis or even using ajaxSetup)
                    // For same-domain requests, won't change header if already provided.
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                        headers["X-Requested-With"] = "XMLHttpRequest";
                    }

                    // Set headers
                    for (i in headers) {
                        xhr.setRequestHeader(i, headers[i]);
                    }

                    // Callback
                    callback = function (type) {
                        return function () {
                            if (callback) {
                                callback = errorCallback = xhr.onload =
                                    xhr.onerror = xhr.onabort = xhr.ontimeout =
                                        xhr.onreadystatechange = null;

                                if (type === "abort") {
                                    xhr.abort();
                                } else if (type === "error") {

                                    // Support: IE <=9 only
                                    // On a manual native abort, IE9 throws
                                    // errors on any property access that is not readyState
                                    if (typeof xhr.status !== "number") {
                                        complete(0, "error");
                                    } else {
                                        complete(
                                            // File: protocol always yields status 0; see #8605, #14207
                                            xhr.status,
                                            xhr.statusText
                                        );
                                    }
                                } else {
                                    complete(
                                        xhrSuccessStatus[xhr.status] || xhr.status,
                                        xhr.statusText,

                                        // Support: IE <=9 only
                                        // IE9 has no XHR2 but throws on binary (trac-11426)
                                        // For XHR2 non-text, let the caller handle it (gh-2498)
                                        (xhr.responseType || "text") !== "text" ||
                                        typeof xhr.responseText !== "string" ?
                                            {binary: xhr.response} :
                                            {text: xhr.responseText},
                                        xhr.getAllResponseHeaders()
                                    );
                                }
                            }
                        };
                    };

                    // Listen to events
                    xhr.onload = callback();
                    errorCallback = xhr.onerror = xhr.ontimeout = callback("error");

                    // Support: IE 9 only
                    // Use onreadystatechange to replace onabort
                    // to handle uncaught aborts
                    if (xhr.onabort !== undefined) {
                        xhr.onabort = errorCallback;
                    } else {
                        xhr.onreadystatechange = function () {

                            // Check readyState before timeout as it changes
                            if (xhr.readyState === 4) {

                                // Allow onerror to be called first,
                                // but that will not handle a native abort
                                // Also, save errorCallback to a variable
                                // as xhr.onerror cannot be accessed
                                window.setTimeout(function () {
                                    if (callback) {
                                        errorCallback();
                                    }
                                });
                            }
                        };
                    }

                    // Create the abort callback
                    callback = callback("abort");

                    try {

                        // Do send the request (this may raise an exception)
                        xhr.send(options.hasContent && options.data || null);
                    } catch (e) {

                        // #14683: Only rethrow if this hasn't been notified as an error yet
                        if (callback) {
                            throw e;
                        }
                    }
                },

                abort: function () {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });


    // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter(function (s) {
        if (s.crossDomain) {
            s.contents.script = false;
        }
    });

    // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, " +
                "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });

    // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter("script", function (s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
        }
    });

    // Bind script tag hack transport
    jQuery.ajaxTransport("script", function (s) {

        // This transport only deals with cross domain or forced-by-attrs requests
        if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
                send: function (_, complete) {
                    script = jQuery("<script>")
                        .attr(s.scriptAttrs || {})
                        .prop({charset: s.scriptCharset, src: s.url})
                        .on("load error", callback = function (evt) {
                            script.remove();
                            callback = null;
                            if (evt) {
                                complete(evt.type === "error" ? 404 : 200, evt.type);
                            }
                        });

                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild(script[0]);
                },
                abort: function () {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });


    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;

    // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
            this[callback] = true;
            return callback;
        }
    });

    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

        var callbackName, overwritten, responseContainer,
            jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
                    "url" :
                    typeof s.data === "string" &&
                    (s.contentType || "")
                        .indexOf("application/x-www-form-urlencoded") === 0 &&
                    rjsonp.test(s.data) && "data"
            );

        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {

            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ?
                s.jsonpCallback() :
                s.jsonpCallback;

            // Insert callback into url or form data
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }

            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function () {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };

            // Force json dataType
            s.dataTypes[0] = "json";

            // Install callback
            overwritten = window[callbackName];
            window[callbackName] = function () {
                responseContainer = arguments;
            };

            // Clean-up function (fires after converters)
            jqXHR.always(function () {

                // If previous value didn't exist - remove it
                if (overwritten === undefined) {
                    jQuery(window).removeProp(callbackName);

                    // Otherwise restore preexisting value
                } else {
                    window[callbackName] = overwritten;
                }

                // Save back as free
                if (s[callbackName]) {

                    // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;

                    // Save the callback name for future use
                    oldCallbacks.push(callbackName);
                }

                // Call if it was a function and we have a response
                if (responseContainer && isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }

                responseContainer = overwritten = undefined;
            });

            // Delegate to script
            return "script";
        }
    });


    // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337
    support.createHTMLDocument = (function () {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    })();


    // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function (data, context, keepScripts) {
        if (typeof data !== "string") {
            return [];
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }

        var base, parsed, scripts;

        if (!context) {

            // Stop scripts or inline event handlers from being executed immediately
            // by using document.implementation
            if (support.createHTMLDocument) {
                context = document.implementation.createHTMLDocument("");

                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement("base");
                base.href = document.location.href;
                context.head.appendChild(base);
            } else {
                context = document;
            }
        }

        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];

        // Single tag
        if (parsed) {
            return [context.createElement(parsed[1])];
        }

        parsed = buildFragment([data], context, scripts);

        if (scripts && scripts.length) {
            jQuery(scripts).remove();
        }

        return jQuery.merge([], parsed.childNodes);
    };


    /**
     * Load a url into a page
     */
    jQuery.fn.load = function (url, params, callback) {
        var selector, type, response,
            self = this,
            off = url.indexOf(" ");

        if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
        }

        // If it's a function
        if (isFunction(params)) {

            // We assume that it's the callback
            callback = params;
            params = undefined;

            // Otherwise, build a param string
        } else if (params && typeof params === "object") {
            type = "POST";
        }

        // If we have elements to modify, make the request
        if (self.length > 0) {
            jQuery.ajax({
                url: url,

                // If "type" variable is undefined, then "GET" method will be used.
                // Make value of this field explicit since
                // user can override it through ajaxSetup method
                type: type || "GET",
                dataType: "html",
                data: params
            }).done(function (responseText) {

                // Save response for use in complete callback
                response = arguments;

                self.html(selector ?

                    // If a selector was specified, locate the right elements in a dummy div
                    // Exclude scripts to avoid IE 'Permission Denied' errors
                    jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

                    // Otherwise use the full result
                    responseText);

                // If the request succeeds, this function gets "data", "status", "jqXHR"
                // but they are ignored because response was set above.
                // If it fails, this function gets "jqXHR", "status", "error"
            }).always(callback && function (jqXHR, status) {
                self.each(function () {
                    callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                });
            });
        }

        return this;
    };


    // Attach a bunch of functions for handling common AJAX events
    jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function (i, type) {
        jQuery.fn[type] = function (fn) {
            return this.on(type, fn);
        };
    });


    jQuery.expr.pseudos.animated = function (elem) {
        return jQuery.grep(jQuery.timers, function (fn) {
            return elem === fn.elem;
        }).length;
    };


    jQuery.offset = {
        setOffset: function (elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
                position = jQuery.css(elem, "position"),
                curElem = jQuery(elem),
                props = {};

            // Set position first, in-case top/left are set even on static elem
            if (position === "static") {
                elem.style.position = "relative";
            }

            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") &&
                (curCSSTop + curCSSLeft).indexOf("auto") > -1;

            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;

            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }

            if (isFunction(options)) {

                // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                options = options.call(elem, i, jQuery.extend({}, curOffset));
            }

            if (options.top != null) {
                props.top = (options.top - curOffset.top) + curTop;
            }
            if (options.left != null) {
                props.left = (options.left - curOffset.left) + curLeft;
            }

            if ("using" in options) {
                options.using.call(elem, props);

            } else {
                curElem.css(props);
            }
        }
    };

    jQuery.fn.extend({

        // offset() relates an element's border box to the document origin
        offset: function (options) {

            // Preserve chaining for setter
            if (arguments.length) {
                return options === undefined ?
                    this :
                    this.each(function (i) {
                        jQuery.offset.setOffset(this, options, i);
                    });
            }

            var rect, win,
                elem = this[0];

            if (!elem) {
                return;
            }

            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if (!elem.getClientRects().length) {
                return {top: 0, left: 0};
            }

            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },

        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function () {
            if (!this[0]) {
                return;
            }

            var offsetParent, offset, doc,
                elem = this[0],
                parentOffset = {top: 0, left: 0};

            // position:fixed elements are offset from the viewport, which itself always has zero offset
            if (jQuery.css(elem, "position") === "fixed") {

                // Assume position:fixed implies availability of getBoundingClientRect
                offset = elem.getBoundingClientRect();

            } else {
                offset = this.offset();

                // Account for the *real* offset parent, which can be the document or its root element
                // when a statically positioned element is identified
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while (offsetParent &&
                (offsetParent === doc.body || offsetParent === doc.documentElement) &&
                jQuery.css(offsetParent, "position") === "static") {

                    offsetParent = offsetParent.parentNode;
                }
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {

                    // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery(offsetParent).offset();
                    parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                }
            }

            // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },

        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function () {
            return this.map(function () {
                var offsetParent = this.offsetParent;

                while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                    offsetParent = offsetParent.offsetParent;
                }

                return offsetParent || documentElement;
            });
        }
    });

    // Create scrollLeft and scrollTop methods
    jQuery.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (method, prop) {
        var top = "pageYOffset" === prop;

        jQuery.fn[method] = function (val) {
            return access(this, function (elem, method, val) {

                // Coalesce documents and windows
                var win;
                if (isWindow(elem)) {
                    win = elem;
                } else if (elem.nodeType === 9) {
                    win = elem.defaultView;
                }

                if (val === undefined) {
                    return win ? win[prop] : elem[method];
                }

                if (win) {
                    win.scrollTo(
                        !top ? val : win.pageXOffset,
                        top ? val : win.pageYOffset
                    );

                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length);
        };
    });

    // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each(["top", "left"], function (i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
            function (elem, computed) {
                if (computed) {
                    computed = curCSS(elem, prop);

                    // If curCSS returns percentage, fallback to offset
                    return rnumnonpx.test(computed) ?
                        jQuery(elem).position()[prop] + "px" :
                        computed;
                }
            }
        );
    });


    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({Height: "height", Width: "width"}, function (name, type) {
        jQuery.each({padding: "inner" + name, content: type, "": "outer" + name},
            function (defaultExtra, funcName) {

                // Margin is only for outerHeight, outerWidth
                jQuery.fn[funcName] = function (margin, value) {
                    var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                        extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

                    return access(this, function (elem, type, value) {
                        var doc;

                        if (isWindow(elem)) {

                            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                            return funcName.indexOf("outer") === 0 ?
                                elem["inner" + name] :
                                elem.document.documentElement["client" + name];
                        }

                        // Get document width or height
                        if (elem.nodeType === 9) {
                            doc = elem.documentElement;

                            // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                            // whichever is greatest
                            return Math.max(
                                elem.body["scroll" + name], doc["scroll" + name],
                                elem.body["offset" + name], doc["offset" + name],
                                doc["client" + name]
                            );
                        }

                        return value === undefined ?

                            // Get width or height on the element, requesting but not forcing parseFloat
                            jQuery.css(elem, type, extra) :

                            // Set width or height on the element
                            jQuery.style(elem, type, value, extra);
                    }, type, chainable ? margin : undefined, chainable);
                };
            });
    });


    jQuery.each(("blur focus focusin focusout resize scroll click dblclick " +
        "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
        "change select submit keydown keypress keyup contextmenu").split(" "),
        function (i, name) {

            // Handle event binding
            jQuery.fn[name] = function (data, fn) {
                return arguments.length > 0 ?
                    this.on(name, null, data, fn) :
                    this.trigger(name);
            };
        });

    jQuery.fn.extend({
        hover: function (fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });


    jQuery.fn.extend({

        bind: function (types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function (types, fn) {
            return this.off(types, null, fn);
        },

        delegate: function (selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function (selector, types, fn) {

            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ?
                this.off(selector, "**") :
                this.off(types, selector || "**", fn);
        }
    });

    // Bind a function to a context, optionally partially applying any
    // arguments.
    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
    // However, it is not slated for removal any time soon
    jQuery.proxy = function (fn, context) {
        var tmp, args, proxy;

        if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
        }

        // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if (!isFunction(fn)) {
            return undefined;
        }

        // Simulated bind
        args = slice.call(arguments, 2);
        proxy = function () {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
        };

        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;

        return proxy;
    };

    jQuery.holdReady = function (hold) {
        if (hold) {
            jQuery.readyWait++;
        } else {
            jQuery.ready(true);
        }
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;

    jQuery.now = Date.now;

    jQuery.isNumeric = function (obj) {

        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") &&

            // parseFloat NaNs numeric-cast false positives ("")
            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
            // subtraction forces infinities to NaN
            !isNaN(obj - parseFloat(obj));
    };


    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.

    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return jQuery;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }


    var

        // Map over jQuery in case of overwrite
        _jQuery = window.jQuery,

        // Map over the $ in case of overwrite
        _$ = window.$;

    jQuery.noConflict = function (deep) {
        if (window.$ === jQuery) {
            window.$ = _$;
        }

        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
        }

        return jQuery;
    };

    // Expose jQuery and $ identifiers, even in AMD
    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if (!noGlobal) {
        window.jQuery = window.$ = jQuery;
    }


    return jQuery;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var EventCenter = (function(){

	var events = {}

	function on(evt,handler){
		events[evt] = events[evt] || []

		events[evt].push({
			handler:handler
		})
	}

	function fire(evt,args){
		if(!events[evt]){
			return
		}
		for(var i=0; i<events[evt].length; i++){
			events[evt][i].handler(args)
		}
	}

	return{
		on: on,
		fire: fire
	}

})()

module.exports = EventCenter

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13)

var $ = __webpack_require__(0)

function toast(msg,time) {
	this.msg = msg
	this.dismissTime = time||1000
	this.createToast()
	this.showToast()
}

toast.prototype.createToast = function(){
	var tpl = '<div class="toast">'+this.msg+'</div>'
	this.$toast = $(tpl)
	$('body').append(this.$toast)
}

toast.prototype.showToast = function(){
	var self = this
	self.$toast.fadeIn(300,function(){
		setTimeout(function(){
			self.$toast.fadeOut(300,function(){
				self.$toast.remove()
			})
		},self.dismissTime)
	})
}

function Toast(msg,time){
	return new toast(msg,time)
}
module.exports.Toast = Toast

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0)
__webpack_require__(6);

var NoteManager = __webpack_require__(9).NoteManager;
var Event = __webpack_require__(3);
var WaterFall = __webpack_require__(15);

NoteManager.load();

$('.add-note').on('click', function() {
    NoteManager.add();
})

Event.on('waterfall', function(){
    WaterFall.init($('#content'));
})

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(7);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./index.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "html,\nbody {\n  margin: 0;\n}\nbody {\n  position: relative;\n  padding-top: 1px;\n}\nul,\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\nbody {\n  font: 14px/1.4 'Arial';\n}\na {\n  text-decoration: none;\n  color: #fff;\n}\n#header {\n  position: fixed;\n  z-index: 100;\n  width: 100%;\n  height: 30px;\n  font-size: 12px;\n}\n#header a {\n  display: block;\n  font-size: 12px;\n  margin-top: 6px;\n}\n#header .user-area {\n  padding-right: 16px;\n  float: right;\n}\n#header .user-area li {\n  float: left;\n  margin-left: 5px;\n}\n#header .user-area li span {\n  color: #fff;\n  display: block;\n  margin-top: 6px;\n}\n#header .user-area img {\n  height: 18px;\n  margin-top: 5px;\n  border-radius: 50%;\n}\n#header .setting {\n  float: right;\n  margin-left: 9px;\n  display: none;\n}\n#header .add-note {\n  float: left;\n  margin-left: 16px;\n  border: 1px solid #fff;\n  border-radius: 4px;\n  padding: 2px 4px;\n}\n#header .login {\n  float: right;\n  margin-left: 16px;\n}\n#content {\n  position: relative;\n  margin-top: 30px;\n  height: -webkit-calc(70%);\n  height: calc(70%);\n}\n@keyframes move-twink-back {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: -10000px 5000px;\n  }\n}\n.stars {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.stars {\n  background: #000 url('data:image/jpeg;base64,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') repeat top center;\n  z-index: -2;\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0)
var Note = __webpack_require__(10).Note;
var Toast = __webpack_require__(4).Toast;
var Event = __webpack_require__(3);



var NoteManager = (function(){
  var uname = null,clk = null
  function setLayout() {
      if(clk){
          clearTimeout(clk);
      }
      clk = setTimeout(function(){
          Event.fire('waterfall');
      },100);
  }
  function load() {
    $.get('/api/notes')
      .done(function(ret){
        if(ret.status == 0){
          uname = ret.data.uname
          $.each(ret.data.notes, function(idx, article) {
              new Note({
                id: article.id,
                context: article.content,
                uname: article.uname
              });
          });

          Event.fire('waterfall');
        }else{
          Toast(ret.errorMsg);
        }
      })
      .fail(function(){
        Toast('网络异常');
      });


  }

  function add(){
    new Note({uname:uname});
    setLayout()
  }

  return {
    load: load,
    add: add
  }

})();

module.exports.NoteManager = NoteManager

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);

var $ = __webpack_require__(0)
var Toast = __webpack_require__(4).Toast;
var Event = __webpack_require__(3);

function Note(opts){
  this.initOpts(opts);
  this.createNote();
  this.setStyle();
  this.bindEvent();
}
Note.prototype = {
  colors: [
    ['#ea9b35','#efb04e'], // headColor, containerColor
    ['#dd598b','#e672a2'],
    ['#eee34b','#f2eb67'],
    ['#c24226','#d15a39'],
    ['#c1c341','#d0d25c'],
    ['#3f78c3','#5591d2']
  ],

  defaultOpts: {
    id: '',   //Note的 id
    $ct: $('#content').length>0?$('#content'):$('body'),  //默认存放 Note 的容器
    context: 'input here'  //Note 的内容
  },

  initOpts: function (opts) {
    this.opts = $.extend({}, this.defaultOpts, opts||{});
    if(this.opts.id){
       this.id = this.opts.id;
    }
  },

  createNote: function () {
    var tpl =  '<div class="note">'
              + '<div class="note-head"><span class="username"></span><span class="delete">&times;</span></div>'
              + '<div class="note-ct" contenteditable="true"></div>'
              +'</div>';
    this.$note = $(tpl);
    //console.log(this.opts,this.opts.uname)
    this.$note.find('.note-head>.username').html(this.opts.uname+':说')
    this.$note.find('.note-ct').html(this.opts.context);
    this.opts.$ct.append(this.$note);
    // if(!this.id)  this.$note.css('bottom', '10px');  //新增放到右边
  },

  setStyle: function () {
    var color = this.colors[Math.floor(Math.random()*6)];
    this.$note.find('.note-head').css('background-color', color[0]);
    this.$note.find('.note-ct').css('background-color', color[1]);
  },

  setLayout: function(){
    var self = this;
    if(self.clk){
      clearTimeout(self.clk);
    }
    self.clk = setTimeout(function(){
      Event.fire('waterfall');
    },100);
  },

  bindEvent: function () {
    var self = this,
        $note = this.$note,
        $noteHead = $note.find('.note-head'),
        $noteCt = $note.find('.note-ct'),
        $delete = $note.find('.delete');

    $delete.on('click', function(){
      self.delete();
    })

    //contenteditable没有 change 事件，所有这里做了模拟通过判断元素内容变动，执行 save
    $noteCt.on('focus', function() {
      if($noteCt.html()=='input here') $noteCt.html('');
      $noteCt.data('before', $noteCt.html());
    }).on('blur paste', function() {
      if( $noteCt.data('before') != $noteCt.html() ) {
        $noteCt.data('before',$noteCt.html());
        self.setLayout();
        if(self.id){
          self.edit($noteCt.html())
        }else{
          self.add($noteCt.html())
        }
      }else{
          self.setLayout();
      }
    });

    //设置笔记的移动
    $noteHead.on('mousedown', function(e){
      var evtX = e.pageX - $note.offset().left,   //evtX 计算事件的触发点在 dialog内部到 dialog 的左边缘的距离
          evtY = e.pageY - $note.offset().top;
      $note.addClass('draggable').data('evtPos', {x:evtX, y:evtY}); //把事件到 dialog 边缘的距离保存下来
    }).on('mouseup', function(){
       $note.removeClass('draggable').removeData('pos');
    });

    $('body').on('mousemove', function(e){
      $('.draggable').length && $('.draggable').offset({
        top: e.pageY-$('.draggable').data('evtPos').y,    // 当用户鼠标移动时，根据鼠标的位置和前面保存的距离，计算 dialog 的绝对位置
        left: e.pageX-$('.draggable').data('evtPos').x
      });
    });
  },

  edit: function (msg) {
    $.post('/api/note/edit',{
        id: this.id,
        note: msg
      }).done(function(ret){
      if(ret.status === 0){
        Toast(ret.data.msg);
      }else{
        Toast(ret.msg);
      }
    })
  },

  add: function (msg){
    var self = this;
    $.post('/api/note/add', {note: msg})
      .done(function(ret){
        if(ret.data.code == -200) {
            self.$note.remove();
        }
          if(ret.data.code == 200) {
              self.id = ret.data.insertId;
          }
        Toast(ret.data.msg);
        Event.fire('waterfall');
      });
    //todo
  },

  delete: function(){
    var self = this;
      if(!this.id){
          Toast('delete success');
          self.$note.remove();
          Event.fire('waterfall');
          return;
      }
    $.post('/api/note/delete', {id: this.id})
      .done(function(ret){
        if(ret.status === 0){
          Toast(ret.data.msg);
          if(ret.data.code == 200){
              self.$note.remove();
              Event.fire('waterfall')
          }

        }else{
          Toast(ret.msg);
        }
    });

  }

};

module.exports.Note = Note;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(12);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./note.less", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./note.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".note {\n  position: absolute;\n  color: #333;\n  width: 160px;\n  margin: 20px 10px;\n  transition: all 0.5s;\n}\n.note .note-head {\n  height: 30px;\n  background-color: #ea9b35;\n  cursor: move;\n}\n.note .note-head .username {\n  color: #777;\n  font-size: 12px;\n  padding-left: 3px;\n  line-height: 30px;\n}\n.note .note-head:hover .delete {\n  opacity: 1;\n}\n.note .note-head:before {\n  position: absolute;\n  left: 50%;\n  top: -11px;\n  margin-left: -32px;\n  content: ' ';\n  display: block;\n  width: 64px;\n  height: 18px;\n  background: #35bba3;\n}\n.note .note-head:after {\n  position: absolute;\n  left: 50%;\n  margin-left: 32px;\n  top: -11px;\n  z-index: -1;\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  border-left: 5px solid #299683;\n  border-top: 18px solid transparent;\n}\n.note .note-ct {\n  padding: 10px;\n  background-color: #efb04e;\n  outline: none;\n}\n.note .note-ct div {\n  border-top: 1px solid #a776;\n}\n.note .delete {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  font-size: 16px;\n  color: #fff;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity .3s;\n}\n.draggable {\n  opacity: 0.8;\n  cursor: move;\n  transition: none;\n}\n", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(14);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./toast.less", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./toast.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".toast {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 20px;\n  color: #D15A39;\n  background: #fff;\n  padding: 5px 10px;\n  border-radius: 3px;\n  box-shadow: 0px 0px 3px 1px rgba(255, 255, 255, 0.6);\n  display: none;\n}\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0)
var WaterFall = (function(){
  var $ct;
  var $items;

  function render($c){
    if(!$c)return;
    $ct = $c;
    $items = $ct.children() ? $ct.children() : null;

    if(!$items)return;

    var nodeWidth = $items.outerWidth(true),
      colNum = parseInt($(window).width()/nodeWidth),
      colSumHeight = [];

    for(var i = 0; i<colNum;i++){
      colSumHeight.push(0);
    }

    $items.each(function(){
      var $cur = $(this);

      //colSumHeight = [100, 250, 80, 200]

      var idx = 0,
          minSumHeight = colSumHeight[0];
          maxSumHeight = colSumHeight[0];

      for(var i=0;i<colSumHeight.length; i++){
        if(colSumHeight[i] < minSumHeight){
          idx = i;
          minSumHeight = colSumHeight[i];
        }else{
            maxSumHeight = colSumHeight[i];
        }
      }

      $cur.css({
        left: nodeWidth*idx,
        top: minSumHeight
      });
      $ct.css({
          height: maxSumHeight + 500
      })
      colSumHeight[idx] = $cur.outerHeight(true) + colSumHeight[idx];
    });
  }


  $(window).on('resize', function(){
    render($ct);
  })


  return {
    init: render
  }
})();

module.exports = WaterFall

/***/ })
/******/ ]);