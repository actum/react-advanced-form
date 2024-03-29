(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("reactAdvancedForm", ["react"], factory);
	else if(typeof exports === 'object')
		exports["reactAdvancedForm"] = factory(require("react"));
	else
		root["reactAdvancedForm"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__18__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var _isPlaceholder = /*#__PURE__*/__webpack_require__(25);

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}
module.exports = _curry2;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var _isPlaceholder = /*#__PURE__*/__webpack_require__(25);

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}
module.exports = _curry1;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */


var path = /*#__PURE__*/_curry2(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});
module.exports = path;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPristine = exports.setTouched = exports.setFocused = exports.reset = exports.resetValidationState = exports.updateValidityState = exports.resetValidityState = exports.setErrors = exports.hasValue = exports.setValue = exports.getValue = exports.updateCollectionWith = exports.createField = void 0;

var _compose2 = _interopRequireDefault(__webpack_require__(4));

var _mergeDeepLeft2 = _interopRequireDefault(__webpack_require__(60));

var _assoc2 = _interopRequireDefault(__webpack_require__(6));

var _prop2 = _interopRequireDefault(__webpack_require__(42));

var _assocPath2 = _interopRequireDefault(__webpack_require__(11));

var _curry2 = _interopRequireDefault(__webpack_require__(7));

var _isNil2 = _interopRequireDefault(__webpack_require__(14));

var _complement2 = _interopRequireDefault(__webpack_require__(22));

var _always2 = _interopRequireDefault(__webpack_require__(32));

var _invariant = _interopRequireDefault(__webpack_require__(44));

var _enforceArray = _interopRequireDefault(__webpack_require__(45));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Creates a new field based on its initial state.
 * @param {Object} initialState
 * @returns {Object}
 */
var createField = function createField(initialState) {
  var _objectSpread2;

  var valuePropName = initialState.valuePropName || 'value';
  var value = initialState[valuePropName];
  return _objectSpread((_objectSpread2 = {
    /* Internal */
    fieldGroup: null,
    fieldPath: null,
    mapValue: _always2["default"],
    assertValue: (0, _complement2["default"])(_isNil2["default"]),
    serialize: _always2["default"],

    /* Basic */
    initialValue: value
  }, _defineProperty(_objectSpread2, valuePropName, value), _defineProperty(_objectSpread2, "valuePropName", valuePropName), _defineProperty(_objectSpread2, "focused", false), _defineProperty(_objectSpread2, "pristine", true), _defineProperty(_objectSpread2, "touched", false), _defineProperty(_objectSpread2, "required", false), _defineProperty(_objectSpread2, "skip", false), _defineProperty(_objectSpread2, "rule", null), _defineProperty(_objectSpread2, "asyncRule", null), _defineProperty(_objectSpread2, "pendingAsyncValidation", null), _defineProperty(_objectSpread2, "debounceValidate", null), _defineProperty(_objectSpread2, "errors", null), _defineProperty(_objectSpread2, "expected", true), _defineProperty(_objectSpread2, "valid", false), _defineProperty(_objectSpread2, "invalid", false), _defineProperty(_objectSpread2, "validating", false), _defineProperty(_objectSpread2, "validated", false), _defineProperty(_objectSpread2, "validatedSync", false), _defineProperty(_objectSpread2, "validSync", false), _defineProperty(_objectSpread2, "validatedAsync", false), _defineProperty(_objectSpread2, "validAsync", false), _defineProperty(_objectSpread2, "reactiveProps", null), _defineProperty(_objectSpread2, "onFocus", null), _defineProperty(_objectSpread2, "onChange", null), _defineProperty(_objectSpread2, "onBlur", null), _objectSpread2), initialState);
};
/**
 * Updates the given collection with the given field props.
 * @param {Object} fieldProps
 * @param {Object} collection
 */


exports.createField = createField;
var updateCollectionWith = (0, _curry2["default"])(function (fieldProps, collection) {
  return (0, _assocPath2["default"])(fieldProps.fieldPath, fieldProps, collection);
});
/**
 * Returns the value of the given field.
 * @param {Object} fieldProps
 * @returns {any}
 */

exports.updateCollectionWith = updateCollectionWith;

var getValue = function getValue(fieldProps) {
  var fieldPath = fieldProps.fieldPath,
      valuePropName = fieldProps.valuePropName;
  (0, _invariant["default"])(fieldPath, 'Failed to get field value: provided object is not a field: %s', Object.keys(fieldProps).join());
  (0, _invariant["default"])(valuePropName, 'Failed to get value of the `%s`: field has no `valuePropName` property.', fieldPath && fieldPath.join('.'));
  return (0, _prop2["default"])(valuePropName, fieldProps);
};
/**
 * Updates the value prop of the given field with the given next value.
 * Beware that this function references "valuePropName" prop of the given field.
 * Thus, it cannot be used on non-field object.
 * @param {Function|any} nextValueGetter
 * @param {Object} fieldProps
 */


exports.getValue = getValue;
var setValue = (0, _curry2["default"])(function (nextValueGetter, fieldProps) {
  var fieldPath = fieldProps.fieldPath,
      valuePropName = fieldProps.valuePropName;
  /* Accept "nextValue" as a function to be able to make "setValue" composable */

  var nextValue = typeof nextValueGetter === 'function' ? nextValueGetter(fieldProps) : nextValueGetter;
  (0, _invariant["default"])(valuePropName, 'Failed to set value to `%s` on `%s`: field has no `valuePropName` property.', nextValue, fieldPath && fieldPath.join('.'));
  return (0, _assoc2["default"])(valuePropName, nextValue, fieldProps);
});
/**
 * Returns boolean stating if the given field contains value.
 * @param {Object} fieldProps
 */

exports.setValue = setValue;

var hasValue = function hasValue(fieldProps) {
  return fieldProps.assertValue(getValue(fieldProps));
};
/**
 * Sets the given error messages to the given field.
 * When no errors are provided, returns field props intact.
 * @param {string[]} errors
 * @param {Object} fieldProps
 */


exports.hasValue = hasValue;
var setErrors = (0, _curry2["default"])(function (errors, fieldProps) {
  /* Allow explicit "null" for empty "errors" value */
  return typeof errors !== 'undefined' ? (0, _assoc2["default"])('errors', errors && (0, _enforceArray["default"])(errors), fieldProps) : fieldProps;
});
/**
 * Resets the validity state (valid/invalid) of the given field.
 * @param {Object} fieldProps
 * @returns {Object}
 */

exports.setErrors = setErrors;
var resetValidityState = (0, _mergeDeepLeft2["default"])({
  valid: false,
  invalid: false
});
/**
 * Sets the validity state props (valid/invalid) on the given field.
 * @param {Object} fieldProps
 * @param {boolean} shouldValidate
 * @returns {Object}
 */

exports.resetValidityState = resetValidityState;
var updateValidityState = (0, _curry2["default"])(function (shouldValidate, fieldProps) {
  if (!shouldValidate) {
    return resetValidityState(fieldProps);
  }

  var validated = fieldProps.validated,
      expected = fieldProps.expected,
      errors = fieldProps.errors;
  var value = getValue(fieldProps);
  var nextValid = !!value && validated && expected;
  var nextInvalid = validated && !expected;
  var nextErrors = !expected && errors;
  return (0, _mergeDeepLeft2["default"])({
    errors: nextErrors,
    valid: nextValid,
    invalid: nextInvalid
  }, fieldProps);
});
/**
 * Resets the validation state of the given field.
 * @param {Object} fieldProps
 * @returns {Object}
 */

exports.updateValidityState = updateValidityState;
var resetValidationState = (0, _mergeDeepLeft2["default"])({
  validating: false,
  validated: false,
  validatedSync: false,
  validatedAsync: false,
  validSync: false,
  validAsync: false
});
/**
 * Resets the given field to its initial state.
 * @param {Function} nextValueGetter
 * @param {Object} fieldProps
 * @returns {Object}
 */

exports.resetValidationState = resetValidationState;
var reset = (0, _curry2["default"])(function (nextValueGetter, fieldProps) {
  return (0, _compose2["default"])( // Beware that this will set value to "undefined" when no "initialValue" is found
  setValue(fieldProps.mapValue(nextValueGetter(fieldProps))), setErrors(null), setPristine(true), setTouched(false), resetValidationState, resetValidityState)(fieldProps);
});
/**
 * Sets the focus of the given field to the next value.
 * @param {boolean} isFocused
 * @param {Object} fieldProps
 * @returns {Object}
 */

exports.reset = reset;
var setFocused = (0, _assoc2["default"])('focused');
/**
 * Marks the given field as touched.
 * @param {boolean} touched
 * @param {Object} fieldProps
 * @returns {Object}
 */

exports.setFocused = setFocused;
var setTouched = (0, _assoc2["default"])('touched');
/**
 * Sets the next value of a field's "pristine" property.
 * @param {boolean} pristine
 * @param {Object} fieldState
 * @returns {Object}
 */

exports.setTouched = setTouched;
var setPristine = (0, _assoc2["default"])('pristine');
exports.setPristine = setPristine;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var pipe = /*#__PURE__*/__webpack_require__(104);

var reverse = /*#__PURE__*/__webpack_require__(110);

/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      const yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */


function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
}
module.exports = compose;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _isPlaceholder = /*#__PURE__*/__webpack_require__(25);

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}
module.exports = _curry3;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = /*#__PURE__*/__webpack_require__(5);

/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc, R.pick
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */


var assoc = /*#__PURE__*/_curry3(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});
module.exports = assoc;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var curryN = /*#__PURE__*/__webpack_require__(15);

/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN, R.partial
 * @example
 *
 *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      const curriedAddFourNumbers = R.curry(addFourNumbers);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */


var curry = /*#__PURE__*/_curry1(function curry(fn) {
  return curryN(fn.length, fn);
});
module.exports = curry;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Dispatches the given function when the following exists.
 * Returns the return of the given function.
 */
var dispatch = function dispatch(func, args) {
  return func && func(args);
};

var _default = dispatch;
exports["default"] = _default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _dispatchable = /*#__PURE__*/__webpack_require__(30);

var _map = /*#__PURE__*/__webpack_require__(62);

var _reduce = /*#__PURE__*/__webpack_require__(12);

var _xmap = /*#__PURE__*/__webpack_require__(118);

var curryN = /*#__PURE__*/__webpack_require__(15);

var keys = /*#__PURE__*/__webpack_require__(16);

/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */


var map = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return _reduce(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));
    default:
      return _map(fn, functor);
  }
}));
module.exports = map;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
module.exports = _has;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = /*#__PURE__*/__webpack_require__(5);

var _has = /*#__PURE__*/__webpack_require__(10);

var _isArray = /*#__PURE__*/__webpack_require__(13);

var _isInteger = /*#__PURE__*/__webpack_require__(112);

var assoc = /*#__PURE__*/__webpack_require__(6);

var isNil = /*#__PURE__*/__webpack_require__(14);

/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */


var assocPath = /*#__PURE__*/_curry3(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (_isInteger(idx) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return assoc(idx, val, obj);
  }
});
module.exports = assocPath;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var _isArrayLike = /*#__PURE__*/__webpack_require__(40);

var _xwrap = /*#__PURE__*/__webpack_require__(106);

var bind = /*#__PURE__*/__webpack_require__(107);

function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    idx += 1;
  }
  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    step = iter.next();
  }
  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = _xwrap(fn);
  }
  if (_isArrayLike(list)) {
    return _arrayReduce(fn, acc, list);
  }
  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }
  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }
  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}
module.exports = _reduce;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */


var isNil = /*#__PURE__*/_curry1(function isNil(x) {
  return x == null;
});
module.exports = isNil;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = /*#__PURE__*/__webpack_require__(29);

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _curryN = /*#__PURE__*/__webpack_require__(113);

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */


var curryN = /*#__PURE__*/_curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});
module.exports = curryN;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var _has = /*#__PURE__*/__webpack_require__(10);

var _isArguments = /*#__PURE__*/__webpack_require__(63);

// cover IE < 9 keys issues


var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? /*#__PURE__*/_curry1(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /*#__PURE__*/_curry1(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
module.exports = keys;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var curryN = /*#__PURE__*/__webpack_require__(15);

var max = /*#__PURE__*/__webpack_require__(68);

var pluck = /*#__PURE__*/__webpack_require__(69);

var reduce = /*#__PURE__*/__webpack_require__(20);

/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      const isQueen = R.propEq('rank', 'Q');
 *      const isSpade = R.propEq('suit', '♠︎');
 *      const isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */


var allPass = /*#__PURE__*/_curry1(function allPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});
module.exports = allPass;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__18__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(96)();
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = /*#__PURE__*/__webpack_require__(5);

var _reduce = /*#__PURE__*/__webpack_require__(12);

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */


var reduce = /*#__PURE__*/_curry3(_reduce);
module.exports = reduce;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}
module.exports = _isString;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var lift = /*#__PURE__*/__webpack_require__(114);

var not = /*#__PURE__*/__webpack_require__(119);

/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      const isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */


var complement = /*#__PURE__*/lift(not);
module.exports = complement;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(50);
var Observer_1 = __webpack_require__(73);
var Subscription_1 = __webpack_require__(75);
var rxSubscriber_1 = __webpack_require__(77);
var config_1 = __webpack_require__(51);
var hostReportError_1 = __webpack_require__(74);
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _equals = /*#__PURE__*/__webpack_require__(154);

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */


var equals = /*#__PURE__*/_curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});
module.exports = equals;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}
module.exports = _isPlaceholder;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = camelize;

/**
 * Takes the given string and returns it formatted it in cammelCase.
 */
function camelize() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.join('-').replace(/-(.)/g, function (_, _char) {
    return _char.toUpperCase();
  });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = flushFieldRefs;

var _dispatch = _interopRequireDefault(__webpack_require__(8));

var _createPropGetter = _interopRequireDefault(__webpack_require__(39));

var _createRuleResolverArgs = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Returns the map of flushed field props paths referenced within
 * the provided method, and its initial value.
 */
function flushFieldRefs(func, args) {
  var refs = [];
  var resolverArgs = (0, _createRuleResolverArgs["default"])(args);
  var initialValue = (0, _dispatch["default"])(func, _objectSpread({}, resolverArgs, {
    get: (0, _createPropGetter["default"])(args.form.state.fields, function (propRefPath) {
      return refs.push(propRefPath);
    })
  }));
  return {
    refs: refs,
    initialValue: initialValue
  };
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createRuleResolverArgs;

var _createPropGetter = _interopRequireDefault(__webpack_require__(39));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Returns the unified interface of each validation rule resolver
 * arguments Object based on the passed arguments.
 */
function createRuleResolverArgs(args) {
  var _ref;

  var fieldProps = args.fieldProps,
      form = args.form; // Ensure fields are present, since debounced validation calls
  // do not pass "fields" on purpose to prevent passing fields
  // with the obsolete state.

  var fields = args.fields || form.state.fields;
  var valuePropName = fieldProps.valuePropName;
  var value = fieldProps[valuePropName];
  return _ref = {
    fieldProps: fieldProps,
    fields: fields,
    form: form
  }, _defineProperty(_ref, valuePropName, value), _defineProperty(_ref, "get", (0, _createPropGetter["default"])(fields)), _ref;
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}
module.exports = _arity;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var _isArray = /*#__PURE__*/__webpack_require__(13);

var _isTransformer = /*#__PURE__*/__webpack_require__(117);

/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */


function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
}
module.exports = _dispatchable;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      const t = R.always('Tee');
 *      t(); //=> 'Tee'
 */


var always = /*#__PURE__*/_curry1(function always(val) {
  return function () {
    return val;
  };
});
module.exports = always;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _dispatchable = /*#__PURE__*/__webpack_require__(30);

var _filter = /*#__PURE__*/__webpack_require__(122);

var _isObject = /*#__PURE__*/__webpack_require__(41);

var _reduce = /*#__PURE__*/__webpack_require__(12);

var _xfilter = /*#__PURE__*/__webpack_require__(123);

var keys = /*#__PURE__*/__webpack_require__(16);

/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */


var filter = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['filter'], _xfilter, function (pred, filterable) {
  return _isObject(filterable) ? _reduce(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }
    return acc;
  }, {}, keys(filterable)) :
  // else
  _filter(pred, filterable);
}));
module.exports = filter;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var _complement = /*#__PURE__*/__webpack_require__(130);

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var filter = /*#__PURE__*/__webpack_require__(33);

/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */


var reject = /*#__PURE__*/_curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});
module.exports = reject;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getRulesPaths = void 0;

var _path2 = _interopRequireDefault(__webpack_require__(2));

var _filter2 = _interopRequireDefault(__webpack_require__(33));

var _chain2 = _interopRequireDefault(__webpack_require__(67));

var _map2 = _interopRequireDefault(__webpack_require__(9));

var _compose2 = _interopRequireDefault(__webpack_require__(4));

var _curry2 = _interopRequireDefault(__webpack_require__(7));

var _head2 = _interopRequireDefault(__webpack_require__(71));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getRulesPaths = function getRulesPaths(fieldProps) {
  return [fieldProps.fieldGroup && ['fieldGroup'].concat(_toConsumableArray(fieldProps.fieldGroup), ['name', fieldProps.name]), fieldProps.fieldGroup && ['fieldGroup'].concat(_toConsumableArray(fieldProps.fieldGroup), ['type', fieldProps.type]), ['name', fieldProps.name], ['type', fieldProps.type]].filter(Boolean);
};

exports.getRulesPaths = getRulesPaths;

var createResolverRecord = function createResolverRecord(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      resolver = _ref2[0],
      keyPath = _ref2[1],
      ruleName = _ref2[2];

  return {
    name: ruleName,
    keyPath: keyPath,
    selector: (0, _head2["default"])(keyPath),
    resolver: resolver
  };
};

var projectResolvers = function projectResolvers(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
      resolver = _ref4[0],
      keyPath = _ref4[1];

  if (typeof resolver === 'function') {
    return [[resolver, keyPath]];
  }

  return Object.entries(resolver).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        ruleName = _ref6[0],
        namedResolver = _ref6[1];

    return [namedResolver, keyPath, ruleName];
  });
};
/**
 * Returns the list of resolver records from the given validation schema
 * applicable to the given field.
 */


var filterSchemaByField = (0, _curry2["default"])(function (validationSchema, fieldProps) {
  return (0, _compose2["default"])(
  /* Create the list of resolver records from the list of resolvers */
  (0, _map2["default"])(createResolverRecord),
  /* Flat map multiple resolvers */
  (0, _chain2["default"])(projectResolvers),
  /* Filter out selectors that have no resolvers */
  (0, _filter2["default"])(_head2["default"]),
  /* Grab resolvers based on the paths from the schema */
  (0, _map2["default"])(function (keyPath) {
    return [(0, _path2["default"])(keyPath, validationSchema), keyPath];
  }), getRulesPaths)(fieldProps);
});
var _default = filterSchemaByField;
exports["default"] = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(138);
var toSubscriber_1 = __webpack_require__(141);
var observable_1 = __webpack_require__(142);
var pipe_1 = __webpack_require__(143);
var config_1 = __webpack_require__(51);
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isset", {
  enumerable: true,
  get: function get() {
    return _isset2["default"];
  }
});
Object.defineProperty(exports, "warning", {
  enumerable: true,
  get: function get() {
    return _warning2["default"];
  }
});
Object.defineProperty(exports, "camelize", {
  enumerable: true,
  get: function get() {
    return _camelize2["default"];
  }
});
Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function get() {
    return _debounce2["default"];
  }
});
Object.defineProperty(exports, "dispatch", {
  enumerable: true,
  get: function get() {
    return _dispatch2["default"];
  }
});
Object.defineProperty(exports, "evolveP", {
  enumerable: true,
  get: function get() {
    return _evolveP2["default"];
  }
});
Object.defineProperty(exports, "flushFieldRefs", {
  enumerable: true,
  get: function get() {
    return _flushFieldRefs2["default"];
  }
});
Object.defineProperty(exports, "makeCancelable", {
  enumerable: true,
  get: function get() {
    return _makeCancelable2["default"];
  }
});
Object.defineProperty(exports, "getComponentName", {
  enumerable: true,
  get: function get() {
    return _getComponentName2["default"];
  }
});
exports.rxUtils = exports.formUtils = exports.fieldUtils = exports.recordUtils = void 0;

var _isset2 = _interopRequireDefault(__webpack_require__(38));

var _warning2 = _interopRequireDefault(__webpack_require__(101));

var _camelize2 = _interopRequireDefault(__webpack_require__(26));

var _debounce2 = _interopRequireDefault(__webpack_require__(102));

var _dispatch2 = _interopRequireDefault(__webpack_require__(8));

var _evolveP2 = _interopRequireDefault(__webpack_require__(103));

var _flushFieldRefs2 = _interopRequireDefault(__webpack_require__(27));

var _makeCancelable2 = _interopRequireDefault(__webpack_require__(58));

var _recordUtils = _interopRequireWildcard(__webpack_require__(3));

exports.recordUtils = _recordUtils;

var _fieldUtils = _interopRequireWildcard(__webpack_require__(120));

exports.fieldUtils = _fieldUtils;

var _formUtils = _interopRequireWildcard(__webpack_require__(133));

exports.formUtils = _formUtils;

var _rxUtils = _interopRequireWildcard(__webpack_require__(136));

exports.rxUtils = _rxUtils;

var _getComponentName2 = _interopRequireDefault(__webpack_require__(150));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isset;

/**
 * Determines if the provided variable is set.
 */
function isset(variable) {
  return typeof variable !== 'undefined' && variable !== null;
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createPropGetter;

var _path2 = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * A thunk to generate a field prop getter function.
 * The latter is used for reactive props implementation and allows to flush
 * field prop references into a single source using a callback function.
 */
function createPropGetter(fields, callback) {
  return function (propPath) {
    var propValue = (0, _path2["default"])(propPath, fields);

    if (callback) {
      callback(propPath, propValue);
    }

    return propValue;
  };
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var _isArray = /*#__PURE__*/__webpack_require__(13);

var _isString = /*#__PURE__*/__webpack_require__(21);

/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */


var _isArrayLike = /*#__PURE__*/_curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== 'object') {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
module.exports = _isArrayLike;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}
module.exports = _isObject;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var path = /*#__PURE__*/__webpack_require__(2);

/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 */

var prop = /*#__PURE__*/_curry2(function prop(p, obj) {
  return path([p], obj);
});
module.exports = prop;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
}
module.exports = _concat;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = enforceArray;

/**
 * Returns an Array of the given variable, bypassing the
 * scenario when the latter is already an Array.
 */
function enforceArray(variable) {
  return [].concat(variable);
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = /*#__PURE__*/__webpack_require__(5);

/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless, R.cond
 * @example
 *
 *      // truncate :: String -> String
 *      const truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */


var when = /*#__PURE__*/_curry3(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});
module.exports = when;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */


var is = /*#__PURE__*/_curry2(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});
module.exports = is;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _assocPath2 = _interopRequireDefault(__webpack_require__(11));

var _path2 = _interopRequireDefault(__webpack_require__(2));

var _reduce2 = _interopRequireDefault(__webpack_require__(20));

var _curry2 = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Accepts a needle, its thread path, and a list of objects.
 * Returns a stitched object, where each entry is added by
 * the thread path using the needle function.
 * @param {Function} needle
 * @param {string[]} threadPath
 * @param {Object[]} list
 * @returns {Object}
 */
var stitchWith = (0, _curry2["default"])(function (needle, threadPath, list) {
  return (0, _reduce2["default"])(function (acc, entry) {
    var keyPath = (0, _path2["default"])(threadPath, entry);
    return (0, _assocPath2["default"])(keyPath, needle(entry, keyPath, acc), acc);
  }, {}, list);
});
var _default = stitchWith;
exports["default"] = _default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _assoc2 = _interopRequireDefault(__webpack_require__(6));

var _map2 = _interopRequireDefault(__webpack_require__(9));

var _curry2 = _interopRequireDefault(__webpack_require__(7));

var _flushFieldRefs2 = _interopRequireDefault(__webpack_require__(27));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Iterates over the list of field rules, flushes fields references
 * from each resolver function and adds "refs" property to each rule.
 */
var getRulesRefs = (0, _curry2["default"])(function (resolverArgs, resolverRecords) {
  return (0, _map2["default"])(function (rule) {
    var _flushFieldRefs = (0, _flushFieldRefs2["default"])(rule.resolver, resolverArgs),
        refs = _flushFieldRefs.refs;

    return (0, _assoc2["default"])('refs', refs, rule);
  })(resolverRecords);
});
var _default = getRulesRefs;
exports["default"] = _default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(36);
var isArray_1 = __webpack_require__(76);
var isFunction_1 = __webpack_require__(50);
var map_1 = __webpack_require__(78);
var toString = Object.prototype.toString;
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
exports.fromEvent = fromEvent;
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = /*#__PURE__*/__webpack_require__(5);

var defaultTo = /*#__PURE__*/__webpack_require__(148);

var path = /*#__PURE__*/__webpack_require__(2);

/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */


var pathOr = /*#__PURE__*/_curry3(function pathOr(d, p, obj) {
  return defaultTo(d, path(p, obj));
});
module.exports = pathOr;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.reduceWhileExpected = exports.reduceResults = exports.returnsExpected = void 0;

var _T2 = _interopRequireDefault(__webpack_require__(84));

var _curry2 = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Reduces the list applying the given reducer function as long as
 * the predicate function resolves to true. Basically, a simple reducer
 * function that accepts promise as a predicate.
 */
var reduceWhile = (0, _curry2["default"])(function (predicate, reducer, initialValue, list) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return list.reduce(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(acc, entry) {
        var resolvedAcc;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return acc;

              case 2:
                resolvedAcc = _context.sent;
                _context.next = 5;
                return predicate(resolvedAcc, entry);

              case 5:
                if (!_context.sent) {
                  _context.next = 9;
                  break;
                }

                _context.t0 = reducer.apply(void 0, [resolvedAcc, entry].concat(args));
                _context.next = 10;
                break;

              case 9:
                _context.t0 = resolvedAcc;

              case 10:
                return _context.abrupt("return", _context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(), initialValue);
  };
});

var returnsExpected =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(validationResult) {
    var _ref3, expected;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return validationResult;

          case 2:
            _ref3 = _context2.sent;
            expected = _ref3.expected;
            return _context2.abrupt("return", expected !== false);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function returnsExpected(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.returnsExpected = returnsExpected;
var initialState = {
  expected: null,
  validators: [],
  rejectedRules: [],
  extra: null
};

var validationReducer =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(accResults, validatorFunc) {
    var prevExpected,
        prevRejectedRules,
        prevValidators,
        _len2,
        args,
        _key2,
        validatorResult,
        name,
        expected,
        rejectedRules,
        extra,
        nextValidators,
        nextExpected,
        nextRejectedRules,
        _args3 = arguments;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            prevExpected = accResults.expected, prevRejectedRules = accResults.rejectedRules, prevValidators = accResults.validators;

            for (_len2 = _args3.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = _args3[_key2];
            }

            _context3.next = 4;
            return validatorFunc.apply(void 0, args);

          case 4:
            validatorResult = _context3.sent;

            if (validatorResult) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", accResults);

          case 7:
            name = validatorResult.name, expected = validatorResult.expected, rejectedRules = validatorResult.rejectedRules, extra = validatorResult.extra;
            nextValidators = name ? prevValidators.concat(name) : prevValidators;
            /**
             * If the previous "expected" was false, all succeeding validators have
             * no effect over the end "expected" value, it will be "false".
             * @todo This conditional assignment is ugly. Rewrite it.
             */

            nextExpected = prevExpected !== null ? prevExpected && expected : expected;
            nextRejectedRules = rejectedRules ? prevRejectedRules.concat(rejectedRules) : prevRejectedRules;
            /**
             * When current validator result has explicit "null" as the value of "expected"
             * field, that implies that no validation was necessary. Thus, the previous
             * "expected" value from the accumulated result must be taken.
             */

            if (expected === null) {
              nextExpected = prevExpected;
            }

            return _context3.abrupt("return", {
              expected: nextExpected,
              rejectedRules: nextRejectedRules,
              validators: nextValidators,
              extra: extra
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function validationReducer(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Reduces the list of validator functions into accumulated validation result.
 * Reduces the entire list, as its predicate always returns "true".
 */


var reduceResults = reduceWhile(_T2["default"], validationReducer, initialState);
/**
 * Reduces the list of validator functions while they return expected validation
 * result. Breaks as soon as a validator returns unexpected result.
 */

exports.reduceResults = reduceResults;
var reduceWhileExpected = reduceWhile(returnsExpected, validationReducer, initialState);
exports.reduceWhileExpected = reduceWhileExpected;
var _default = reduceWhile;
exports["default"] = _default;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  invalid: 'invalid',
  missing: 'missing'
};
exports["default"] = _default;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry2 = _interopRequireDefault(__webpack_require__(7));

var _dispatch = _interopRequireDefault(__webpack_require__(8));

var _errorTypes = _interopRequireDefault(__webpack_require__(55));

var _createRejectedRule = _interopRequireDefault(__webpack_require__(89));

var _createValidationResult = _interopRequireDefault(__webpack_require__(90));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Executes the given resolver function with the given arguments
 * and returns the validation result.
 */
var applyRule = (0, _curry2["default"])(function (rule, resolverArgs) {
  var name = rule.name,
      selector = rule.selector,
      resolver = rule.resolver,
      errorType = rule.errorType;
  var nextExpected = (0, _dispatch["default"])(resolver, resolverArgs);
  /* Create rejected rules */

  var rejectedRules = nextExpected ? undefined : (0, _createRejectedRule["default"])({
    name: name,
    selector: selector,
    errorType: errorType || _errorTypes["default"].invalid
  });
  return (0, _createValidationResult["default"])(nextExpected, rejectedRules);
});
var _default = applyRule;
exports["default"] = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = validateField;

var _assoc2 = _interopRequireDefault(__webpack_require__(6));

var _validation = _interopRequireDefault(__webpack_require__(178));

var _reflectValidationResult = _interopRequireDefault(__webpack_require__(182));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Validates the given field and returns the fieldProps with validation reflected.
 */
function validateField(_x) {
  return _validateField.apply(this, arguments);
}

function _validateField() {
  _validateField = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(resolverArgs) {
    var fieldProps, validationResult;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fieldProps = resolverArgs.fieldProps;
            _context.next = 3;
            return (0, _validation["default"])(resolverArgs);

          case 3:
            validationResult = _context.sent;

            if (!(validationResult.expected === null)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", (0, _assoc2["default"])('expected', true, fieldProps));

          case 6:
            return _context.abrupt("return", (0, _reflectValidationResult["default"])(resolverArgs)(validationResult));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validateField.apply(this, arguments);
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeCancelable;

/**
 * Wraps the Promise into another Promise to allow to cancel the original.
 * @param {Promise} promise
 */
function makeCancelable(promise) {
  var isCanceled = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (payload) {
      return isCanceled || resolve(payload);
    })["catch"](function (error) {
      return isCanceled || reject(error);
    });
  });
  return {
    itself: wrappedPromise,
    cancel: function cancel() {
      isCanceled = true;
    }
  };
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var _isArray = /*#__PURE__*/__webpack_require__(13);

/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */


function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
}
module.exports = _checkForMethod;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var mergeDeepWithKey = /*#__PURE__*/__webpack_require__(61);

/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */


var mergeDeepLeft = /*#__PURE__*/_curry2(function mergeDeepLeft(lObj, rObj) {
  return mergeDeepWithKey(function (k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});
module.exports = mergeDeepLeft;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = /*#__PURE__*/__webpack_require__(5);

var _isObject = /*#__PURE__*/__webpack_require__(41);

var mergeWithKey = /*#__PURE__*/__webpack_require__(111);

/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */


var mergeDeepWithKey = /*#__PURE__*/_curry3(function mergeDeepWithKey(fn, lObj, rObj) {
  return mergeWithKey(function (k, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
module.exports = mergeDeepWithKey;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
}
module.exports = _map;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var _has = /*#__PURE__*/__webpack_require__(10);

var toString = Object.prototype.toString;
var _isArguments = /*#__PURE__*/function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has('callee', x);
  };
}();

module.exports = _isArguments;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _has2 = _interopRequireDefault(__webpack_require__(65));

var _getLeavesWhich = _interopRequireDefault(__webpack_require__(66));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Accepts an object with deep nested fields and
 * returns a shallow list of that fields.
 *
 * @example
 *  flattenFields({
 *    fieldOne: {},
 *    groupOne: {
 *      groupTwo: {}
 *    }
 *  })
 *
 * @returns
 *  [
 *    { fieldPath: ['fieldOne'] },
 *    { fieldPath: ['groupOne', 'groupTwo'] }
 *  ]
 */
var _default = (0, _getLeavesWhich["default"])((0, _has2["default"])('fieldPath'));

exports["default"] = _default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var hasPath = /*#__PURE__*/__webpack_require__(124);

/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      const hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      const point = {x: 0, y: 0};
 *      const pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */


var has = /*#__PURE__*/_curry2(function has(prop, obj) {
  return hasPath([prop], obj);
});
module.exports = has;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _curry2 = _interopRequireDefault(__webpack_require__(7));

var _values2 = _interopRequireDefault(__webpack_require__(125));

var _when2 = _interopRequireDefault(__webpack_require__(46));

var _chain2 = _interopRequireDefault(__webpack_require__(67));

var _isNil2 = _interopRequireDefault(__webpack_require__(14));

var _reject2 = _interopRequireDefault(__webpack_require__(34));

var _compose2 = _interopRequireDefault(__webpack_require__(4));

var _is2 = _interopRequireDefault(__webpack_require__(47));

var _complement2 = _interopRequireDefault(__webpack_require__(22));

var _allPass2 = _interopRequireDefault(__webpack_require__(17));

var _ifElse2 = _interopRequireDefault(__webpack_require__(131));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Accepts an object and returns a list of its leaves.
 */
// const getLeaves = when(
//   is(Object),
//   compose(
//     (vals) => chain(getLeaves, vals),
//     values,
//   ),
// )
var createLeavesGetter = function createLeavesGetter(predicate) {
  return (0, _ifElse2["default"])((0, _allPass2["default"])([(0, _complement2["default"])((0, _is2["default"])(Function)), (0, _is2["default"])(Object)]), (0, _compose2["default"])((0, _reject2["default"])(_isNil2["default"]), (0, _chain2["default"])((0, _when2["default"])((0, _complement2["default"])(predicate), getLeavesWhich(predicate))), _values2["default"]), function () {
    return null;
  });
};
/**
 * Returns the list of the object's leaves that satisfy the given predicate.
 * @param {Function<boolean>} predicate
 * @param {Object} obj
 * @returns {any[]}
 */


var getLeavesWhich = (0, _curry2["default"])(function (predicate, obj) {
  return createLeavesGetter(predicate)(obj);
});
var _default = getLeavesWhich;
exports["default"] = _default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _dispatchable = /*#__PURE__*/__webpack_require__(30);

var _makeFlat = /*#__PURE__*/__webpack_require__(126);

var _xchain = /*#__PURE__*/__webpack_require__(127);

var map = /*#__PURE__*/__webpack_require__(9);

/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries.
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * If second argument is a function, `chain(f, g)(x)` is equivalent to `f(g(x), x)`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      const duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */


var chain = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['fantasy-land/chain', 'chain'], _xchain, function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function (x) {
      return fn(monad(x))(x);
    };
  }
  return _makeFlat(false)(map(fn, monad));
}));
module.exports = chain;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */


var max = /*#__PURE__*/_curry2(function max(a, b) {
  return b > a ? b : a;
});
module.exports = max;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var map = /*#__PURE__*/__webpack_require__(9);

var prop = /*#__PURE__*/__webpack_require__(42);

/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      var getAges = R.pluck('age');
 *      getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
 *
 *      R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */


var pluck = /*#__PURE__*/_curry2(function pluck(p, list) {
  return map(prop(p), list);
});
module.exports = pluck;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var mergeDeepWithKey = /*#__PURE__*/__webpack_require__(61);

/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */


var mergeDeepRight = /*#__PURE__*/_curry2(function mergeDeepRight(lObj, rObj) {
  return mergeDeepWithKey(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
module.exports = mergeDeepRight;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var nth = /*#__PURE__*/__webpack_require__(135);

/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */


var head = /*#__PURE__*/nth(0);
module.exports = head;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createPropsObserver;

var _Observable = __webpack_require__(36);

var _fromEvent = __webpack_require__(52);

var _map = __webpack_require__(78);

var _filter = __webpack_require__(79);

var _camelize = _interopRequireDefault(__webpack_require__(26));

var _enforceArray = _interopRequireDefault(__webpack_require__(45));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Default predicate function that determines whether there has been
 * a value change between the previous and the next field prop.
 * @param {string} propName
 * @param {Object} prevTargetProps
 * @param {Object} nextTargetProps
 * @param {Object} prevTargetRecord
 * @param {Object} nextTargetRecord
 * @returns {boolean}
 */
var defaultPredicate = function defaultPredicate(_ref) {
  var propName = _ref.propName,
      prevTargetProps = _ref.prevTargetProps,
      nextTargetProps = _ref.nextTargetProps;
  return prevTargetProps[propName] !== nextTargetProps[propName];
};
/**
 * Filters prop changes only.
 * @param {Object} changedProps
 * @returns {boolean}
 */


var filterPropChanges = function filterPropChanges(_ref2) {
  var changedProps = _ref2.changedProps;
  return Object.keys(changedProps).length > 0;
};
/**
 * Creates an observerable for the props change of the provided field.
 * Emits on each prop change which satisfies the given predicate function.
 * @param {string} targetFieldPath Field path of the subscribed target field.
 * @param {string[]|string} props
 * @param {(eventData: EventData) => boolean} predicate
 * @param {(eventData: EventData) => any} getNextValue
 * @param {EventEmitter} eventEmitter
 * @return {Observable}
 */


function createPropsObserver(_ref3) {
  var targetFieldPath = _ref3.targetFieldPath,
      props = _ref3.props,
      _ref3$predicate = _ref3.predicate,
      predicate = _ref3$predicate === void 0 ? defaultPredicate : _ref3$predicate,
      getNextValue = _ref3.getNextValue,
      eventEmitter = _ref3.eventEmitter;

  var propsChangeEventName = _camelize["default"].apply(void 0, _toConsumableArray(targetFieldPath).concat(['props', 'change']));

  var propsList = (0, _enforceArray["default"])(props);
  return (0, _fromEvent.fromEvent)(eventEmitter, propsChangeEventName).pipe((0, _map.map)(function (eventPayload) {
    var changedProps = propsList.reduce(function (acc, propName) {
      var hasPropsChanged = predicate(_objectSpread({}, eventPayload, {
        propName: propName
      }));

      if (hasPropsChanged) {
        var nextPropValue = getNextValue ? getNextValue(_objectSpread({}, eventPayload, {
          propName: propName
        })) : eventPayload.nextTargetProps[propName];
        return _objectSpread({}, acc, _defineProperty({}, propName, nextPropValue));
      }

      return acc;
    }, {});
    return _objectSpread({}, eventPayload, {
      changedProps: changedProps
    });
  }),
  /* Emit the events with changed props only */
  (0, _filter.filter)(filterPropChanges));
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(51);
var hostReportError_1 = __webpack_require__(74);
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(76);
var isObject_1 = __webpack_require__(139);
var isFunction_1 = __webpack_require__(50);
var UnsubscriptionError_1 = __webpack_require__(140);
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                if (!teardown) {
                    return Subscription.EMPTY;
                }
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(23);
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(23);
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
exports.filter = filter;
var FilterOperator = (function () {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}());
var FilterSubscriber = (function (_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
    return FilterSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=filter.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeObservable;

var _path2 = _interopRequireDefault(__webpack_require__(2));

var _toPairs2 = _interopRequireDefault(__webpack_require__(146));

var _assoc2 = _interopRequireDefault(__webpack_require__(6));

var _propOr2 = _interopRequireDefault(__webpack_require__(147));

var _Observable = __webpack_require__(36);

var _fromEvent = __webpack_require__(52);

var _camelize = _interopRequireDefault(__webpack_require__(26));

var recordUtils = _interopRequireWildcard(__webpack_require__(3));

var _flushFieldRefs2 = _interopRequireDefault(__webpack_require__(27));

var _createPropsObserver = _interopRequireDefault(__webpack_require__(72));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Returns the formatted references in a { [fieldPath]: props } format.
 * @param {string[]} refs
 * @returns {Object}
 */
var formatRefs = function formatRefs(fieldsRefs) {
  return fieldsRefs.reduce(function (formattedRef, ref) {
    if (ref.length < 2) {
      return formattedRef;
    }
    /* Assume the last referenced key is always a prop name */


    var fieldPath = ref.slice(0, ref.length - 1);
    var joinedFieldPath = fieldPath.join('.');
    var propName = ref.slice(ref.length - 1);
    var prevPropsList = (0, _propOr2["default"])([], joinedFieldPath, formatRefs);
    var nextPropsList = prevPropsList.concat(propName);
    return (0, _assoc2["default"])(joinedFieldPath, nextPropsList, formattedRef);
  }, {});
};
/**
 * Shorthand: Creates a props change observer with the provided arguments.
 * @param {string} targetPath
 * @param {string[]} targetProps
 * @param {string} rxPropName
 * @param {Object} fieldProps
 * @param {Object} form
 * @param {Object} observerOptions
 * @returns {Subscription}
 */


function createObserver(_ref) {
  var targetFieldPath = _ref.targetFieldPath,
      props = _ref.props,
      form = _ref.form,
      subscribe = _ref.subscribe,
      observerOptions = _ref.observerOptions;
  return (0, _createPropsObserver["default"])(_objectSpread({
    targetFieldPath: targetFieldPath,
    props: props,
    predicate: function predicate(_ref2) {
      var propName = _ref2.propName,
          prevTargetRecord = _ref2.prevTargetRecord,
          nextTargetRecord = _ref2.nextTargetRecord;
      return prevTargetRecord[propName] !== nextTargetRecord[propName];
    },
    getNextValue: function getNextValue(_ref3) {
      var propName = _ref3.propName,
          nextTargetRecord = _ref3.nextTargetRecord;
      return nextTargetRecord[propName];
    },
    eventEmitter: form.eventEmitter
  }, observerOptions)).subscribe(subscribe);
}
/**
 * Makes the provided method observable, subscribing to props changes
 * of the referenced fields in the method.
 * @param {Function} method
 * @param {Object} methodArgs
 * @param {Options} options
 */


function makeObservable(method, methodArgs, _ref4) {
  var _ref4$initialCall = _ref4.initialCall,
      initialCall = _ref4$initialCall === void 0 ? false : _ref4$initialCall,
      subscribe = _ref4.subscribe,
      observerOptions = _ref4.observerOptions;
  var subscriberProps = methodArgs.fieldProps,
      fields = methodArgs.fields,
      form = methodArgs.form;

  var _flushFieldRefs = (0, _flushFieldRefs2["default"])(method, methodArgs),
      refs = _flushFieldRefs.refs,
      initialValue = _flushFieldRefs.initialValue;

  var formattedTargetRefs = formatRefs(refs);
  (0, _toPairs2["default"])(formattedTargetRefs).forEach(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        joinedFieldPath = _ref6[0],
        props = _ref6[1];

    /**
     * @todo Omit the keys glue.
     */
    var targetFieldPath = joinedFieldPath.split('.');
    /**
     * When the delegated reactive prop resolver executes, we need
     * to determine whether the subscriber field validation is needed.
     * Validate the subscriber when it has any value, otherwise do not
     * validate to prevent invalid fields at initial form render.
     */

    var shouldValidate = !!recordUtils.getValue(subscriberProps);
    var isTargetRegistered = (0, _path2["default"])(targetFieldPath, fields);

    if (isTargetRegistered) {
      var subscription = createObserver({
        targetFieldPath: targetFieldPath,
        props: props,
        form: form,
        subscribe: subscribe,
        observerOptions: observerOptions
      });

      if (initialCall) {
        subscription.next({
          nextTargetRecord: subscriberProps,
          shouldValidate: shouldValidate
        });
      }

      return {
        refs: refs,
        initialValue: initialValue
      };
    }
    /**
     * Create a delegated target field subscription.
     * When the target field is not yet registred, create an observable
     * to listen for its registration event. Since the flushed refs
     * already contain the referenced props, there is no need to analyze
     * the resolver function again, just create a subscription.
     */


    var fieldRegisteredEvent = _camelize["default"].apply(void 0, _toConsumableArray(targetFieldPath).concat(['registered']));

    var delegatedSubscription = (0, _fromEvent.fromEvent)(form.eventEmitter, fieldRegisteredEvent).subscribe(function (delegatedFieldProps) {
      /* Get rid of the delegated subscription since it's no longer relevant */
      delegatedSubscription.unsubscribe();
      var subscription = createObserver({
        targetFieldPath: targetFieldPath,
        props: props,
        form: form,
        subscribe: subscribe,
        observerOptions: observerOptions
      });
      return subscription.next({
        nextTargetRecord: delegatedFieldProps,
        shouldValidate: shouldValidate
      });
    });
  });
  return {
    refs: refs,
    initialValue: initialValue
  };
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = /*#__PURE__*/__webpack_require__(43);

var _curry2 = /*#__PURE__*/__webpack_require__(0);

/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */


var append = /*#__PURE__*/_curry2(function append(el, list) {
  return _concat(list, [el]);
});
module.exports = append;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ValidationMessagesPropType = exports.ValidationRulesPropType = exports.defaultDebounceTime = void 0;

var _react = _interopRequireDefault(__webpack_require__(18));

var _propTypes = _interopRequireDefault(__webpack_require__(19));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultDebounceTime = 250;
exports.defaultDebounceTime = defaultDebounceTime;

var ValidationRulesPropType = _propTypes["default"].shape({
  type: _propTypes["default"].object,
  name: _propTypes["default"].object
});

exports.ValidationRulesPropType = ValidationRulesPropType;

var ValidationMessagesPropType = _propTypes["default"].shape({
  general: _propTypes["default"].object,
  type: _propTypes["default"].object,
  name: _propTypes["default"].object
});

exports.ValidationMessagesPropType = ValidationMessagesPropType;

var FormProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormProvider, _React$Component);

  function FormProvider() {
    _classCallCheck(this, FormProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormProvider).apply(this, arguments));
  }

  _createClass(FormProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this$props = this.props,
          rules = _this$props.rules,
          messages = _this$props.messages,
          debounceTime = _this$props.debounceTime;

      if (this.props.hasOwnProperty('withImmutable')) {
        console.warn('FormProvider: `withImmutable` prop has been deprecated. Please remove it ' + 'and treat exposed library instances as plain JavaScript data types. ' + 'See more details: https://goo.gl/h5YUiS');
      }

      return {
        rules: rules,
        messages: messages,
        debounceTime: debounceTime
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return FormProvider;
}(_react["default"].Component);

exports["default"] = FormProvider;

_defineProperty(FormProvider, "propTypes", {
  rules: ValidationRulesPropType,
  messages: ValidationMessagesPropType,
  debounceTime: _propTypes["default"].number
});

_defineProperty(FormProvider, "defaultProps", {
  messages: {},
  debounceTime: defaultDebounceTime
});

_defineProperty(FormProvider, "childContextTypes", {
  rules: ValidationRulesPropType,
  messages: ValidationMessagesPropType,
  debounceTime: _propTypes["default"].number
});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */


var type = /*#__PURE__*/_curry1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});
module.exports = type;

/***/ }),
/* 84 */
/***/ (function(module, exports) {



/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.F
 * @example
 *
 *      R.T(); //=> true
 */
var T = function () {
  return true;
};
module.exports = T;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = validateSync;

var _keys2 = _interopRequireDefault(__webpack_require__(16));

var _isNil2 = _interopRequireDefault(__webpack_require__(14));

var _complement2 = _interopRequireDefault(__webpack_require__(22));

var _allPass2 = _interopRequireDefault(__webpack_require__(17));

var _listOf = _interopRequireDefault(__webpack_require__(86));

var _addWhen = _interopRequireDefault(__webpack_require__(87));

var _isset = _interopRequireDefault(__webpack_require__(38));

var _reduceWhile = __webpack_require__(54);

var _getFieldRules = _interopRequireDefault(__webpack_require__(172));

var _createValidatorResult = _interopRequireDefault(__webpack_require__(88));

var _shouldValidateSync = _interopRequireDefault(__webpack_require__(173));

var _ensureValue = _interopRequireDefault(__webpack_require__(175));

var _applyFieldRule = _interopRequireDefault(__webpack_require__(176));

var _applyFormRules = _interopRequireDefault(__webpack_require__(177));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Accepts form rules relevant to the current field
 * and resolves if those are present.
 */
var hasFormRules = (0, _allPass2["default"])([(0, _complement2["default"])(_isNil2["default"]), _keys2["default"]]);

function validateSync(_x, _x2, _x3) {
  return _validateSync.apply(this, arguments);
}

function _validateSync() {
  _validateSync = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(resolverArgs, rules, force) {
    var fieldProps, form, relevantFormRules, shouldValidate, rulesList, syncValidationResult;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fieldProps = resolverArgs.fieldProps, form = resolverArgs.form;
            relevantFormRules = (0, _getFieldRules["default"])(fieldProps, rules);
            /**
             * @todo Share output between getRulesSeq and shouldValidate.
             * Avoid repeating the logic, prefer reusing the output.
             * Review if this comment is relative.
             */

            shouldValidate = (0, _shouldValidateSync["default"])(resolverArgs, relevantFormRules, force);
            /**
             * @todo Rewrite listOf composition to be pure.
             */

            rulesList = (0, _listOf["default"])((0, _addWhen["default"])(fieldProps.required, function (required) {
              return required;
            }, _ensureValue["default"]), (0, _addWhen["default"])(fieldProps.rule, _isset["default"], _applyFieldRule["default"]), (0, _addWhen["default"])(relevantFormRules, hasFormRules, _applyFormRules["default"]))(resolverArgs);

            if (!(shouldValidate && rulesList.length > 0)) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return (0, _reduceWhile.reduceWhileExpected)(rulesList)(resolverArgs);

          case 7:
            _context.t0 = _context.sent;
            _context.next = 11;
            break;

          case 10:
            _context.t0 = null;

          case 11:
            syncValidationResult = _context.t0;
            return _context.abrupt("return", (0, _createValidatorResult["default"])('sync', syncValidationResult));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validateSync.apply(this, arguments);
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = listOf;

/**
 * Executes the list of functions sequentially, populating the array
 * with the result of the function only when the latter returns something.
 */
function listOf() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return funcs.reduce(function (nextArr, func) {
      var funcRes = func.apply(void 0, args);
      return funcRes ? nextArr.concat(funcRes) : nextArr;
    }, []);
  };
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addWhen;

/**
 * Executes the given function with the result of the predicate
 * only when the predicate is satisfied.
 */
function addWhen(subject, predicate, func) {
  return function () {
    return predicate(subject) && func(subject);
  };
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createValidatorResult;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
// TODO
// Consider removing this.
//
function createValidatorResult(name, result) {
  return _objectSpread({}, result || {
    expected: result
  }, {
    name: name
  });
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createRejectedRule;

/**
 * Creates a rejected rule with the standardized shape.
 */
function createRejectedRule(_ref) {
  var name = _ref.name,
      selector = _ref.selector,
      errorType = _ref.errorType;
  return {
    name: name,
    selector: selector,
    errorType: errorType
  };
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createValidationResult;

var _enforceArray = _interopRequireDefault(__webpack_require__(45));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns the unified entity of the validation result.
 * Includes the indicator whether the field's value is expected,
 * the list of rejected validation rules, and any extra params
 * propagated by the validator function.
 */
function createValidationResult(expected, rejectedRules, extra) {
  return {
    expected: expected,
    rejectedRules: rejectedRules && (0, _enforceArray["default"])(rejectedRules),
    extra: extra
  };
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var _indexOf = /*#__PURE__*/__webpack_require__(191);

function _includes(a, list) {
  return _indexOf(list, a, 0) >= 0;
}
module.exports = _includes;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
module.exports = __webpack_require__(94);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createField", {
  enumerable: true,
  get: function get() {
    return _createField2["default"];
  }
});
Object.defineProperty(exports, "FormProvider", {
  enumerable: true,
  get: function get() {
    return _FormProvider2["default"];
  }
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function get() {
    return _Form2["default"];
  }
});
Object.defineProperty(exports, "Condition", {
  enumerable: true,
  get: function get() {
    return _Condition2["default"];
  }
});
exports.fieldPresets = exports.Field = void 0;

var _createField2 = _interopRequireDefault(__webpack_require__(95));

var _FormProvider2 = _interopRequireDefault(__webpack_require__(82));

var _Form2 = _interopRequireDefault(__webpack_require__(151));

var _Field = _interopRequireWildcard(__webpack_require__(213));

exports.Field = _Field;

var _Condition2 = _interopRequireDefault(__webpack_require__(215));

var _fieldPresets = _interopRequireWildcard(__webpack_require__(216));

exports.fieldPresets = _fieldPresets;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = connectField;

var _path2 = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(18));

var _propTypes = _interopRequireDefault(__webpack_require__(19));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(98));

var _utils = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Default options for `connectField()` HOC */
var defaultOptions = {
  allowMultiple: false,
  valuePropName: 'value',
  initialValue: '',
  mapPropsToField: function mapPropsToField(_ref) {
    var fieldRecord = _ref.fieldRecord;
    return fieldRecord;
  },
  beforeRegister: function beforeRegister(_ref2) {
    var fieldProps = _ref2.fieldProps;
    return fieldProps;
  },
  shouldValidateOnMount: function shouldValidateOnMount(_ref3) {
    var valuePropName = _ref3.valuePropName,
        fieldRecord = _ref3.fieldRecord;
    return this.assertValue(fieldRecord[valuePropName]);
  },
  shouldUpdateRecord: function shouldUpdateRecord(_ref4) {
    var prevValue = _ref4.prevValue,
        nextValue = _ref4.nextValue;
    return prevValue !== nextValue;
  },
  enforceProps: function enforceProps() {
    return {};
  },
  mapValue: function mapValue(nextValue) {
    return nextValue;
  },
  assertValue: function assertValue(value) {
    return !!value;
  },
  serialize: function serialize(value) {
    return value;
  }
};
/**
 * Returns the initial value for the given fields.
 * Takes field props, initial values of a form and field's class into account.
 * @param {string[]} fieldPath
 * @param {Object} fieldProps
 * @param {Object} initialValues
 * @param {Object} hocOptions
 * @returns {string?}
 */

var getInitialValue = function getInitialValue(fieldPath, fieldProps, initialValues, hocOptions) {
  return fieldProps.initialValue || initialValues && (0, _path2["default"])(fieldPath, initialValues) || hocOptions.initialValue;
};

function connectField(options) {
  var hocOptions = _objectSpread({}, defaultOptions, options);

  var valuePropName = hocOptions.valuePropName;
  return function (WrappedComponent) {
    var Field =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(Field, _React$Component);

      function Field(props, context) {
        var _this;

        _classCallCheck(this, Field);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Field).call(this, props, context));

        _defineProperty(_assertThisInitialized(_this), "getInnerRef", function (Component) {
          /**
           * Store inner component reference internally.
           * This way inner reference is accessible by custom field reference like
           * "CustomField.ref(Field).innerRef(Component)".
           */
          _this.innerRef = Component;
          /**
           * Allow direct reference to inner component.
           * <CustomField innerRef={...} />
           *
           * First, check if the component where "fieldProps" are destructued is another
           * React Component. This means, that the end developer wrapped the "input" with
           * another React Component. In that case "innerRef" will not return the actual
           * "input", but custom React Component, which would be the same what "innerRef"
           * references. In that case, omit explicit call of "innerRef".
           */

          if (Component instanceof _react["default"].Component) {
            return;
          }

          var innerRef = _this.props.innerRef;

          if (innerRef) {
            innerRef(Component);
          }
        });

        _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
          _this.context.form.eventEmitter.emit('fieldFocus', {
            event: event,
            fieldProps: _this.contextProps
          });
        });

        _defineProperty(_assertThisInitialized(_this), "handleChange", function (args) {
          var event = args.event,
              customNextValue = args.nextValue,
              customPrevValue = args.prevValue;

          var _assertThisInitialize = _assertThisInitialized(_this),
              contextProps = _assertThisInitialize.contextProps,
              form = _assertThisInitialize.context.form;

          var nextValue = args.hasOwnProperty('nextValue') ? customNextValue : event.currentTarget[valuePropName];
          var prevValue = args.hasOwnProperty('prevValue') ? customPrevValue : contextProps[valuePropName];
          form.eventEmitter.emit('fieldChange', {
            event: event,
            nextValue: nextValue,
            prevValue: prevValue,
            fieldProps: contextProps
          });
        });

        _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
          _this.context.form.eventEmitter.emit('fieldBlur', {
            event: event,
            fieldProps: _this.contextProps
          });
        });

        var fieldGroup = context.fieldGroup,
            _form = context.form;
        var name = props.name;
        /* Compose the field path */

        _this.__fieldPath = fieldGroup ? [].concat(_toConsumableArray(fieldGroup), [name]) : [name];
        /**
         * Register the field in the parent Form's state and store its internal record
         * reference (contextProps). Also, assume the field's contextProps, since they
         * are composed at this moment. There is no need to wait for the next
         * re-rendering to access them.
         */

        _this.contextProps = _form && _this.register();
        return _this;
      }
      /* Registers the current field within the parent form's state */


      _createClass(Field, [{
        key: "register",
        value: function register() {
          var _this2 = this,
              _objectSpread2;

          var directProps = this.props,
              context = this.context,
              __fieldPath = this.__fieldPath;
          var fields = context.fields,
              fieldGroup = context.fieldGroup,
              form = context.form;
          var value = directProps[valuePropName];
          var contextValue = (0, _path2["default"])(__fieldPath.concat(valuePropName), fields);

          var _rxUtils$getRxProps = _utils.rxUtils.getRxProps(directProps),
              reactiveProps = _rxUtils$getRxProps.reactiveProps,
              prunedProps = _rxUtils$getRxProps.prunedProps;
          /* Set value and initial value */


          var initialValue = getInitialValue(__fieldPath, directProps, form.props.initialValues, hocOptions);
          var registeredValue = (0, _utils.isset)(contextValue) ? contextValue : value || initialValue;

          var initialFieldProps = _objectSpread({}, prunedProps, (_objectSpread2 = {
            getRef: function getRef() {
              return _this2;
            },
            fieldGroup: fieldGroup,
            fieldPath: __fieldPath,
            valuePropName: valuePropName
          }, _defineProperty(_objectSpread2, valuePropName, hocOptions.mapValue(registeredValue)), _defineProperty(_objectSpread2, "initialValue", initialValue || registeredValue), _defineProperty(_objectSpread2, "controlled", prunedProps.hasOwnProperty('value')), _defineProperty(_objectSpread2, "required", prunedProps.required), _defineProperty(_objectSpread2, "reactiveProps", reactiveProps), _defineProperty(_objectSpread2, "debounceValidate", (0, _utils.debounce)(form.validateField, form.debounceTime)), _defineProperty(_objectSpread2, "rule", prunedProps.rule), _defineProperty(_objectSpread2, "asyncRule", prunedProps.asyncRule), _defineProperty(_objectSpread2, "onFocus", prunedProps.onFocus), _defineProperty(_objectSpread2, "onChange", prunedProps.onChange), _defineProperty(_objectSpread2, "onBlur", prunedProps.onBlur), _defineProperty(_objectSpread2, "mapValue", hocOptions.mapValue), _defineProperty(_objectSpread2, "assertValue", hocOptions.assertValue), _defineProperty(_objectSpread2, "serialize", hocOptions.serialize), _objectSpread2));
          /* (Optional) Alter the field record using HOC options */


          var mappedFieldProps = hocOptions.mapPropsToField({
            fieldRecord: initialFieldProps
            /** @todo Adopt "fieldState" namespace */
            ,
            props: prunedProps,
            valuePropName: valuePropName,
            context: context
          });

          var fieldRecord = _utils.recordUtils.createField(mappedFieldProps);
          /* Notify the parent Form that a new field prompts to register */


          form.eventEmitter.emit('fieldRegister', {
            fieldProps: fieldRecord,
            fieldOptions: {
              allowMultiple: hocOptions.allowMultiple,
              beforeRegister: hocOptions.beforeRegister,
              shouldValidateOnMount: hocOptions.shouldValidateOnMount(_defineProperty({
                fieldRecord: fieldRecord,
                props: directProps,
                context: this.context,
                valuePropName: valuePropName
              }, valuePropName, _utils.recordUtils.getValue(fieldRecord)))
            }
          });
          return fieldRecord;
        }
      }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          var prevProps = this.props,
              contextProps = this.contextProps;

          if (!contextProps) {
            return;
          }
          /**
           * Handle value change of controlled fields.
           * The responsibility of value update of controlled fields is delegated
           * to the end developer. However, that still means that the new value
           * should be propagated to the Form's state to guarantee the field's
           * internal record is updated respectively.
           */


          var controlled = contextProps.controlled;
          var nextValue = nextProps[valuePropName];
          var prevValue = prevProps[valuePropName];
          var shouldUpdateRecord = hocOptions.shouldUpdateRecord({
            nextValue: nextValue,
            prevValue: prevValue,
            prevProps: prevProps,
            nextProps: nextProps,
            contextProps: contextProps
          });

          if (controlled && shouldUpdateRecord) {
            this.context.form.eventEmitter.emit('fieldChange', {
              event: {
                nativeEvent: {
                  isForcedUpdate: true
                }
              },
              nextValue: nextValue,
              prevValue: prevValue,
              fieldProps: contextProps
            });
          }
        }
        /**
         * Ensure "this.contextProps" reference is updated according to the context updates.
         */

      }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(nextProps, nextState, nextContext) {
          /* Bypass scenarios when field is being updated, but not yet registred within the Form */
          var nextContextProps = (0, _path2["default"])(this.__fieldPath, nextContext.fields);

          if (!nextContextProps) {
            return;
          }
          /* Update the internal reference to contextProps */


          var prevProps = this.props,
              prevContextProps = this.contextProps;
          this.contextProps = nextContextProps;

          var propsChangeEvent = _utils.camelize.apply(void 0, _toConsumableArray(nextContextProps.fieldPath).concat(['props', 'change']));

          this.context.form.eventEmitter.emit(propsChangeEvent, {
            prevTargetProps: prevProps,
            nextTargetProps: nextProps,
            prevTargetRecord: prevContextProps,
            nextTargetRecord: nextContextProps
          });
        }
        /**
         * Deletes the field's record upon unmounting.
         */

      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.context.form.eventEmitter.emit('fieldUnregister', this.contextProps);
        }
        /**
         * Handle field and inner field component refenreces.
         * @param {ReactComponent} Component
         */

      }, {
        key: "render",
        value: function render() {
          var _objectSpread3,
              _this3 = this;

          var props = this.props,
              contextProps = this.contextProps;
          /* Render null and log warning in case of formless field */

          if (!contextProps) {
            (0, _utils.warning)(false, 'Failed to render the field `%s`: expected to be a child ' + 'of a Form component. Please render fields as children of ' + 'Form, since formless fields are not currently supported.', this.__fieldPath.join('.'));
            return null;
          }
          /* Reference to the enforced props from the HOC options */


          var enforcedProps = hocOptions.enforceProps({
            props: props,
            contextProps: contextProps
          });
          var valuePropName = contextProps.valuePropName;
          var value = contextProps.controlled ? props[valuePropName] || '' : contextProps[valuePropName];
          /* Props to assign to the field component directly (input, select, etc.) */

          var fieldProps = _objectSpread((_objectSpread3 = {
            name: contextProps.name,
            type: contextProps.type
          }, _defineProperty(_objectSpread3, valuePropName, value), _defineProperty(_objectSpread3, "required", contextProps.required), _defineProperty(_objectSpread3, "disabled", this.props.disabled), _objectSpread3), enforcedProps, {
            /* Reference */
            ref: this.getInnerRef,

            /* Explicitly assign event handlers to prevent unwanted override */
            onFocus: this.handleFocus,
            onChange: function onChange(event) {
              return _this3.handleChange({
                event: event
              });
            },
            onBlur: this.handleBlur
          });

          return _react["default"].createElement(WrappedComponent, _extends({}, props, {
            fieldProps: fieldProps,
            fieldState: contextProps,
            handleFieldFocus: this.handleFocus,
            handleFieldChange: this.handleChange,
            handleFieldBlur: this.handleBlur
          }));
        }
      }]);

      return Field;
    }(_react["default"].Component);

    _defineProperty(Field, "displayName", "Field.".concat((0, _utils.getComponentName)(WrappedComponent)));

    _defineProperty(Field, "propTypes", {
      skip: _propTypes["default"].bool
    });

    _defineProperty(Field, "defaultProps", {
      disabled: false,
      required: false
    });

    _defineProperty(Field, "contextTypes", {
      form: _propTypes["default"].object,
      fields: _propTypes["default"].object,
      fieldGroup: _propTypes["default"].arrayOf(_propTypes["default"].string)
    });

    return (0, _hoistNonReactStatics["default"])(Field, WrappedComponent);
  };
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(97);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(99);
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(100);
} else {}


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = warning;

/**
 * Calls `console.warn` with the provided message when the condition rejects.
 * @param {boolean} condition
 * @param {string} message
 * @param {any[]} optionalParams
 */
function warning(condition, message) {
  if (!condition) {
    var _console;

    for (var _len = arguments.length, messageParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      messageParams[_key - 2] = arguments[_key];
    }

    (_console = console).warn.apply(_console, [message].concat(messageParams));
  }
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = debounce;

/**
 * Returns a debounced wrapper function over the provided function.
 */
function debounce(func, duration) {
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    return new Promise(function (resolve) {
      var later = function later() {
        timeout = null;

        if (!immediate) {
          resolve(func.apply(context, args));
        }
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, duration);

      if (immediate && !timeout) {
        resolve(func.apply(context, args));
      }
    });
  };
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = evolveP;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Asynchronous version of R.evolve.
 * Accepts transformation function that return a Promise,
 * and await until it resolves into the next value.
 * Useful for fields evolving that includes asynchronous validation.
 */
function evolveP(_x, _x2) {
  return _evolveP.apply(this, arguments);
}

function _evolveP() {
  _evolveP = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(transformations, obj) {
    var result, transformation, key, type;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = {};
            _context.t0 = regeneratorRuntime.keys(obj);

          case 2:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 23;
              break;
            }

            key = _context.t1.value;
            transformation = transformations[key];
            type = _typeof(transformation);

            if (!(type === 'function')) {
              _context.next = 12;
              break;
            }

            _context.next = 9;
            return transformation(obj[key]);

          case 9:
            _context.t2 = _context.sent;
            _context.next = 20;
            break;

          case 12:
            if (!(transformation && type === 'object')) {
              _context.next = 18;
              break;
            }

            _context.next = 15;
            return evolveP(transformation, obj[key]);

          case 15:
            _context.t3 = _context.sent;
            _context.next = 19;
            break;

          case 18:
            _context.t3 = obj[key];

          case 19:
            _context.t2 = _context.t3;

          case 20:
            result[key] = _context.t2;
            _context.next = 2;
            break;

          case 23:
            return _context.abrupt("return", result);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _evolveP.apply(this, arguments);
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = /*#__PURE__*/__webpack_require__(29);

var _pipe = /*#__PURE__*/__webpack_require__(105);

var reduce = /*#__PURE__*/__webpack_require__(20);

var tail = /*#__PURE__*/__webpack_require__(108);

/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */


function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
}
module.exports = pipe;

/***/ }),
/* 105 */
/***/ (function(module, exports) {

function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
}
module.exports = _pipe;

/***/ }),
/* 106 */
/***/ (function(module, exports) {

var XWrap = /*#__PURE__*/function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}
module.exports = _xwrap;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = /*#__PURE__*/__webpack_require__(29);

var _curry2 = /*#__PURE__*/__webpack_require__(0);

/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */


var bind = /*#__PURE__*/_curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});
module.exports = bind;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = /*#__PURE__*/__webpack_require__(59);

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var slice = /*#__PURE__*/__webpack_require__(109);

/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */


var tail = /*#__PURE__*/_curry1( /*#__PURE__*/_checkForMethod('tail', /*#__PURE__*/slice(1, Infinity)));
module.exports = tail;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = /*#__PURE__*/__webpack_require__(59);

var _curry3 = /*#__PURE__*/__webpack_require__(5);

/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */


var slice = /*#__PURE__*/_curry3( /*#__PURE__*/_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
module.exports = slice;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var _isString = /*#__PURE__*/__webpack_require__(21);

/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */


var reverse = /*#__PURE__*/_curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});
module.exports = reverse;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = /*#__PURE__*/__webpack_require__(5);

var _has = /*#__PURE__*/__webpack_require__(10);

/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */


var mergeWithKey = /*#__PURE__*/_curry3(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (_has(k, r) && !_has(k, result)) {
      result[k] = r[k];
    }
  }

  return result;
});
module.exports = mergeWithKey;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
module.exports = Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = /*#__PURE__*/__webpack_require__(29);

var _isPlaceholder = /*#__PURE__*/__webpack_require__(25);

/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */


function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
}
module.exports = _curryN;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var liftN = /*#__PURE__*/__webpack_require__(115);

/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      const madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */


var lift = /*#__PURE__*/_curry1(function lift(fn) {
  return liftN(fn.length, fn);
});
module.exports = lift;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _reduce = /*#__PURE__*/__webpack_require__(12);

var ap = /*#__PURE__*/__webpack_require__(116);

var curryN = /*#__PURE__*/__webpack_require__(15);

var map = /*#__PURE__*/__webpack_require__(9);

/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      const madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */


var liftN = /*#__PURE__*/_curry2(function liftN(arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function () {
    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
module.exports = liftN;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = /*#__PURE__*/__webpack_require__(43);

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _reduce = /*#__PURE__*/__webpack_require__(12);

var map = /*#__PURE__*/__webpack_require__(9);

/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (r -> a -> b) -> (r -> a) -> (r -> b)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 *      // R.ap can also be used as S combinator
 *      // when only two functions are passed
 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */


var ap = /*#__PURE__*/_curry2(function ap(applyF, applyX) {
  return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
    return applyF(x)(applyX(x));
  } : _reduce(function (acc, f) {
    return _concat(acc, map(f, applyX));
  }, [], applyF);
});
module.exports = ap;

/***/ }),
/* 117 */
/***/ (function(module, exports) {

function _isTransformer(obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function';
}
module.exports = _isTransformer;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _xfBase = /*#__PURE__*/__webpack_require__(31);

var XMap = /*#__PURE__*/function () {

  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;
  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return XMap;
}();

var _xmap = /*#__PURE__*/_curry2(function _xmap(f, xf) {
  return new XMap(f, xf);
});
module.exports = _xmap;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */


var not = /*#__PURE__*/_curry1(function not(a) {
  return !a;
});
module.exports = not;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "serializeFields", {
  enumerable: true,
  get: function get() {
    return _serializeFields2["default"];
  }
});
Object.defineProperty(exports, "createPropGetter", {
  enumerable: true,
  get: function get() {
    return _createPropGetter2["default"];
  }
});
Object.defineProperty(exports, "flattenFields", {
  enumerable: true,
  get: function get() {
    return _flattenFields2["default"];
  }
});
Object.defineProperty(exports, "stitchFields", {
  enumerable: true,
  get: function get() {
    return _stitchFields2["default"];
  }
});

var _serializeFields2 = _interopRequireDefault(__webpack_require__(121));

var _createPropGetter2 = _interopRequireDefault(__webpack_require__(39));

var _flattenFields2 = _interopRequireDefault(__webpack_require__(64));

var _stitchFields2 = _interopRequireDefault(__webpack_require__(132));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _filter2 = _interopRequireDefault(__webpack_require__(33));

var _assocPath2 = _interopRequireDefault(__webpack_require__(11));

var _reduce2 = _interopRequireDefault(__webpack_require__(20));

var _compose2 = _interopRequireDefault(__webpack_require__(4));

var recordUtils = _interopRequireWildcard(__webpack_require__(3));

var _flattenFields = _interopRequireDefault(__webpack_require__(64));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @todo
 * Re-write this using functions chain, instead of a single ugly function.
 */
var shouldSerializeField = function shouldSerializeField(fieldProps) {
  if (!fieldProps.fieldPath) {
    return;
  }
  /* Bypass the fields which should be skipped */


  if (fieldProps.skip) {
    return false;
  }
  /* Grab the field's value */


  var value = recordUtils.getValue(fieldProps);
  /* Bypass checkboxes with no value */

  var isCheckbox = fieldProps.type === 'checkbox';
  var hasValue = recordUtils.hasValue(fieldProps);

  if (!isCheckbox && !hasValue) {
    return false;
  }

  return true;
};
/**
 * Serializes the provided fields. Returns
 * @param {Object} fields
 * @returns {Object}
 */


var serializeFields = (0, _compose2["default"])((0, _reduce2["default"])(function (acc, fieldProps) {
  return (0, _assocPath2["default"])(fieldProps.fieldPath, (0, _compose2["default"])(fieldProps.serialize, recordUtils.getValue)(fieldProps), acc);
}, {}), (0, _filter2["default"])(shouldSerializeField), _flattenFields["default"]);
var _default = serializeFields;
exports["default"] = _default;

/***/ }),
/* 122 */
/***/ (function(module, exports) {

function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
}
module.exports = _filter;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _xfBase = /*#__PURE__*/__webpack_require__(31);

var XFilter = /*#__PURE__*/function () {

  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter = /*#__PURE__*/_curry2(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});
module.exports = _xfilter;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _has = /*#__PURE__*/__webpack_require__(10);

/**
 * Returns whether or not a path exists in an object. Only the object's
 * own properties are checked.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> Boolean
 * @param {Array} path The path to use.
 * @param {Object} obj The object to check the path in.
 * @return {Boolean} Whether the path exists.
 * @see R.has
 * @example
 *
 *      R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
 *      R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
 *      R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
 *      R.hasPath(['a', 'b'], {});                  // => false
 */


var hasPath = /*#__PURE__*/_curry2(function hasPath(_path, obj) {
  if (_path.length === 0) {
    return false;
  }
  var val = obj;
  var idx = 0;
  while (idx < _path.length) {
    if (_has(_path[idx], val)) {
      val = val[_path[idx]];
      idx += 1;
    } else {
      return false;
    }
  }
  return true;
});
module.exports = hasPath;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var keys = /*#__PURE__*/__webpack_require__(16);

/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */


var values = /*#__PURE__*/_curry1(function values(obj) {
  var props = keys(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});
module.exports = values;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var _isArrayLike = /*#__PURE__*/__webpack_require__(40);

/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */


function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (_isArrayLike(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
}
module.exports = _makeFlat;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _flatCat = /*#__PURE__*/__webpack_require__(128);

var map = /*#__PURE__*/__webpack_require__(9);

var _xchain = /*#__PURE__*/_curry2(function _xchain(f, xf) {
  return map(f, _flatCat(xf));
});
module.exports = _xchain;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var _forceReduced = /*#__PURE__*/__webpack_require__(129);

var _isArrayLike = /*#__PURE__*/__webpack_require__(40);

var _reduce = /*#__PURE__*/__webpack_require__(12);

var _xfBase = /*#__PURE__*/__webpack_require__(31);

var preservingReduced = function (xf) {
  return {
    '@@transducer/init': _xfBase.init,
    '@@transducer/result': function (result) {
      return xf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      var ret = xf['@@transducer/step'](result, input);
      return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
    }
  };
};

var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    '@@transducer/init': _xfBase.init,
    '@@transducer/result': function (result) {
      return rxf['@@transducer/result'](result);
    },
    '@@transducer/step': function (result, input) {
      return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
    }
  };
};

module.exports = _flatCat;

/***/ }),
/* 129 */
/***/ (function(module, exports) {

function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}
module.exports = _forceReduced;

/***/ }),
/* 130 */
/***/ (function(module, exports) {

function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}
module.exports = _complement;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = /*#__PURE__*/__webpack_require__(5);

var curryN = /*#__PURE__*/__webpack_require__(15);

/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when, R.cond
 * @example
 *
 *      const incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */


var ifElse = /*#__PURE__*/_curry3(function ifElse(condition, onTrue, onFalse) {
  return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
module.exports = ifElse;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stitchWith = _interopRequireDefault(__webpack_require__(48));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stitchFields = (0, _stitchWith["default"])(function (fieldProps) {
  return fieldProps;
}, ['fieldPath']);
var _default = stitchFields;
exports["default"] = _default;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "mergeRules", {
  enumerable: true,
  get: function get() {
    return _mergeRules2["default"];
  }
});
Object.defineProperty(exports, "filterSchemaByField", {
  enumerable: true,
  get: function get() {
    return _filterSchemaByField2["default"];
  }
});
Object.defineProperty(exports, "getRulesRefs", {
  enumerable: true,
  get: function get() {
    return _getRulesRefs2["default"];
  }
});

var _mergeRules2 = _interopRequireDefault(__webpack_require__(134));

var _filterSchemaByField2 = _interopRequireDefault(__webpack_require__(35));

var _getRulesRefs2 = _interopRequireDefault(__webpack_require__(49));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mergeRules;

var _mergeDeepRight2 = _interopRequireDefault(__webpack_require__(70));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns form rules based on the provided proprietary rules
 * and the inherited context rules.
 * @param {Object} formRules
 * @param {Object} contextRules
 * @returns {Object}
 */
function mergeRules(formRules) {
  var contextRules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!formRules) {
    return contextRules;
  }

  var closestRules = formRules || contextRules;
  return closestRules.extend && contextRules ? (0, _mergeDeepRight2["default"])(closestRules, contextRules) : closestRules;
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _isString = /*#__PURE__*/__webpack_require__(21);

/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      const list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */


var nth = /*#__PURE__*/_curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});
module.exports = nth;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getRxProps", {
  enumerable: true,
  get: function get() {
    return _getRxProps2["default"];
  }
});
Object.defineProperty(exports, "createPropsObserver", {
  enumerable: true,
  get: function get() {
    return _createPropsObserver2["default"];
  }
});
Object.defineProperty(exports, "createPropsSubscriptions", {
  enumerable: true,
  get: function get() {
    return _createPropsSubscriptions2["default"];
  }
});
Object.defineProperty(exports, "createRulesSubscriptions", {
  enumerable: true,
  get: function get() {
    return _createRulesSubscriptions2["default"];
  }
});

var _getRxProps2 = _interopRequireDefault(__webpack_require__(137));

var _createPropsObserver2 = _interopRequireDefault(__webpack_require__(72));

var _createPropsSubscriptions2 = _interopRequireDefault(__webpack_require__(145));

var _createRulesSubscriptions2 = _interopRequireDefault(__webpack_require__(149));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getRxProps;
exports.supportedRxProps = void 0;

var _assocPath2 = _interopRequireDefault(__webpack_require__(11));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//
// TODO It would be great to allow any prop to be a function with the unified
// resolver interface.
//

/* The list of supported dynamic props */
var supportedRxProps = ['required'];
/**
 * Returns the collection of the reactive props present on the provided field.
 */

exports.supportedRxProps = supportedRxProps;

function getRxProps(props) {
  return Object.keys(props).reduce(function (reactiveProps, propName) {
    var propValue = props[propName];
    var isReactiveProp = supportedRxProps.includes(propName) && typeof propValue === 'function';
    var propGroup = isReactiveProp ? 'reactiveProps' : 'prunedProps';
    return (0, _assocPath2["default"])([propGroup, propName], propValue, reactiveProps);
  }, {
    reactiveProps: {},
    prunedProps: {}
  });
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(23);
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(23);
var rxSubscriber_1 = __webpack_require__(77);
var Observer_1 = __webpack_require__(73);
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noop_1 = __webpack_require__(144);
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createPropsSubscriptions;

var _assoc2 = _interopRequireDefault(__webpack_require__(6));

var _compose2 = _interopRequireDefault(__webpack_require__(4));

var _assocPath2 = _interopRequireDefault(__webpack_require__(11));

var _path2 = _interopRequireDefault(__webpack_require__(2));

var _dispatch = _interopRequireDefault(__webpack_require__(8));

var recordUtils = _interopRequireWildcard(__webpack_require__(3));

var _createRuleResolverArgs = _interopRequireDefault(__webpack_require__(28));

var _makeObservable = _interopRequireDefault(__webpack_require__(80));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates Observable for the reactive props of the given field.
 * @param {Object} fieldProps
 * @param {Object} fields
 * @param {Object} form
 */
function createPropsSubscriptions(_ref) {
  var fieldProps = _ref.fieldProps,
      fields = _ref.fields,
      form = _ref.form;
  var reactiveProps = fieldProps.reactiveProps;

  if (!reactiveProps) {
    return;
  }

  var subscriberFieldPath = fieldProps.fieldPath;
  var resolverArgs = (0, _createRuleResolverArgs["default"])({
    fieldProps: fieldProps,
    fields: fields,
    form: form
  });
  Object.keys(reactiveProps).forEach(function (propName) {
    var resolver = reactiveProps[propName];
    (0, _makeObservable["default"])(resolver, resolverArgs, {
      initialCall: true,
      subscribe: function subscribe(_ref2) {
        var nextTargetRecord = _ref2.nextTargetRecord,
            _ref2$shouldValidate = _ref2.shouldValidate,
            shouldValidate = _ref2$shouldValidate === void 0 ? true : _ref2$shouldValidate;
        var fields = form.state.fields;
        var targetFieldPath = nextTargetRecord.fieldPath;
        var prevSubscriberState = (0, _path2["default"])(subscriberFieldPath, fields);
        var nextFields = (0, _assocPath2["default"])(targetFieldPath, nextTargetRecord, fields);
        var nextResolverArgs = (0, _createRuleResolverArgs["default"])({
          fieldProps: fieldProps,
          fields: nextFields,
          form: form
        });
        /**
         * Get the next reactive prop value by invoking the same resolver
         * with the updated arguments.
         */

        var nextPropValue = (0, _dispatch["default"])(resolver, nextResolverArgs);
        /* Set the next value of reactive prop on the respective field record */

        var nextSubscriberState = (0, _compose2["default"])(recordUtils.resetValidityState, recordUtils.resetValidationState, (0, _assoc2["default"])(propName, nextPropValue))(prevSubscriberState);
        var fieldsWithSubscriber = (0, _assocPath2["default"])(subscriberFieldPath, nextSubscriberState, nextFields);

        if (shouldValidate) {
          return form.validateField({
            /**
             * Forcing validation that originates from reactive subscription
             * shouldn't be force if a field's validity and validation state are reset,
             * and the reset field state is being validated.
             * @see https://github.com/kettanaito/react-advanced-form/issues/344
             */
            // force: true,
            forceProps: true,
            fieldProps: nextSubscriberState,
            fields: fieldsWithSubscriber,
            form: form
          });
        }

        return form.updateFieldsWith(nextSubscriberState);
      }
    });
  });
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var _has = /*#__PURE__*/__webpack_require__(10);

/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */


var toPairs = /*#__PURE__*/_curry1(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (_has(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});
module.exports = toPairs;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = /*#__PURE__*/__webpack_require__(5);

var pathOr = /*#__PURE__*/__webpack_require__(53);

/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      const alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      const favorite = R.prop('favoriteLibrary');
 *      const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */


var propOr = /*#__PURE__*/_curry3(function propOr(val, p, obj) {
  return pathOr(val, [p], obj);
});
module.exports = propOr;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      const defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42(false);  //=> false
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */


var defaultTo = /*#__PURE__*/_curry2(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});
module.exports = defaultTo;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createRulesSubscriptions;

var _pathOr2 = _interopRequireDefault(__webpack_require__(53));

var _append2 = _interopRequireDefault(__webpack_require__(81));

var _compose2 = _interopRequireDefault(__webpack_require__(4));

var _path2 = _interopRequireDefault(__webpack_require__(2));

var _curry2 = _interopRequireDefault(__webpack_require__(7));

var _is2 = _interopRequireDefault(__webpack_require__(47));

var _isNil2 = _interopRequireDefault(__webpack_require__(14));

var _complement2 = _interopRequireDefault(__webpack_require__(22));

var _allPass2 = _interopRequireDefault(__webpack_require__(17));

var recordUtils = _interopRequireWildcard(__webpack_require__(3));

var _createRuleResolverArgs = _interopRequireDefault(__webpack_require__(28));

var _makeObservable = _interopRequireDefault(__webpack_require__(80));

var _filterSchemaByField = _interopRequireDefault(__webpack_require__(35));

var _getRulesRefs = _interopRequireDefault(__webpack_require__(49));

var _stitchWith = _interopRequireDefault(__webpack_require__(48));

var _flushFieldRefs = _interopRequireDefault(__webpack_require__(27));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var shouldObserve = (0, _allPass2["default"])([(0, _complement2["default"])(_isNil2["default"]), (0, _is2["default"])(Function)]);
var createRuleObservable = (0, _curry2["default"])(function (resolverArgs, ruleRecord) {
  var fieldProps = resolverArgs.fieldProps,
      form = resolverArgs.form;
  var refs = ruleRecord.refs,
      resolver = ruleRecord.resolver;

  if (refs.length > 0) {
    /**
     * Create observable for a rule that references another field(s).
     * The observable will listen for the referenced props change and re-evaluate
     * the validation rule(s) in which that prop is referenced.
     */
    (0, _makeObservable["default"])(resolver, resolverArgs, {
      /**
       * @todo This is a slight overhead, since "makeObservable" will also flush
       * the passed function field references. Since here it's done from the higher
       * scope, it should be considered to simply this logic, or remove refs flushing
       * from the schema.
       */
      subscribe: function subscribe() {
        var futureFieldProps = (0, _path2["default"])(fieldProps.fieldPath, form.state.fields);
        form.eventEmitter.emit('validateField', {
          /**
           * Cannot hard-code "true" because that would validate
           * empty optional fields as unexpected.
           */
          force: !!recordUtils.getValue(futureFieldProps),
          fieldProps: futureFieldProps
        });
      }
    });
  }
});
/**
 * Creates an observable for each validation rule which references
 * other fields' props. Flattens deep the validation schema, finding
 * the rules relevant to the currently registering field, and creates
 * observables for those rules which reference another fields.
 * @param {Object} fieldProps
 * @param {Object} fields
 * @param {Object} form
 * @returns {Object}
 */

function createRulesSubscriptions(_ref) {
  var fieldProps = _ref.fieldProps,
      fields = _ref.fields,
      rules = _ref.rules,
      form = _ref.form;
  var resolverArgs = (0, _createRuleResolverArgs["default"])({
    fieldProps: fieldProps,
    fields: fields,
    form: form
  });
  var fieldRules = (0, _compose2["default"])((0, _getRulesRefs["default"])(resolverArgs), (0, _filterSchemaByField["default"])(rules))(fieldProps);
  fieldRules.forEach(createRuleObservable(resolverArgs));
  /* Add "Field.props.rule" in case the latter has fields references */

  var rule = fieldProps.rule;

  if (shouldObserve(rule)) {
    createRuleObservable(resolverArgs, {
      refs: (0, _flushFieldRefs["default"])(rule, resolverArgs).refs,
      resolver: rule
    });
  }
  /* Stitch the list of field-related rules into an object */


  var stitchedRules = (0, _stitchWith["default"])(function (entry, keyPath, acc) {
    return (0, _append2["default"])(entry, (0, _pathOr2["default"])([], keyPath, acc));
  }, ['keyPath'], fieldRules);
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getComponentName;

var React = _interopRequireWildcard(__webpack_require__(18));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

/**
 * Returns the verbose name of the provided React component.
 */
function getComponentName(component) {
  return component.displayName || component.name || 'Component';
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isEmpty2 = _interopRequireDefault(__webpack_require__(152));

var _evolve2 = _interopRequireDefault(__webpack_require__(159));

var _assoc2 = _interopRequireDefault(__webpack_require__(6));

var _complement2 = _interopRequireDefault(__webpack_require__(22));

var _prop2 = _interopRequireDefault(__webpack_require__(42));

var _always2 = _interopRequireDefault(__webpack_require__(32));

var _when2 = _interopRequireDefault(__webpack_require__(46));

var _map2 = _interopRequireDefault(__webpack_require__(9));

var _filter2 = _interopRequireDefault(__webpack_require__(33));

var _propEq2 = _interopRequireDefault(__webpack_require__(160));

var _has2 = _interopRequireDefault(__webpack_require__(65));

var _is2 = _interopRequireDefault(__webpack_require__(47));

var _allPass2 = _interopRequireDefault(__webpack_require__(17));

var _T2 = _interopRequireDefault(__webpack_require__(84));

var _reject2 = _interopRequireDefault(__webpack_require__(34));

var _equals2 = _interopRequireDefault(__webpack_require__(24));

var _mergeDeepRight2 = _interopRequireDefault(__webpack_require__(70));

var _compose2 = _interopRequireDefault(__webpack_require__(4));

var _assocPath2 = _interopRequireDefault(__webpack_require__(11));

var _path2 = _interopRequireDefault(__webpack_require__(2));

var _invariant = _interopRequireDefault(__webpack_require__(44));

var _react = _interopRequireDefault(__webpack_require__(18));

var _propTypes = _interopRequireDefault(__webpack_require__(19));

var _events = __webpack_require__(161);

var _Observable = __webpack_require__(36);

var _fromEvent = __webpack_require__(52);

var _bufferTime = __webpack_require__(162);

var _filter3 = __webpack_require__(79);

var _FormProvider = __webpack_require__(82);

var _utils = __webpack_require__(37);

var handlers = _interopRequireWildcard(__webpack_require__(169));

var _validateField = _interopRequireDefault(__webpack_require__(57));

var _getLeavesWhich = _interopRequireDefault(__webpack_require__(66));

var _deriveDeepWith = _interopRequireDefault(__webpack_require__(211));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Binds the component's reference to the function's context and calls
 * an optional callback function to access the component reference.
 * @param {HTMLElement} element
 * @param {Function?} callback
 */
function bindInnerRef(element, callback) {
  this.innerRef = element;

  if (callback) {
    callback(element);
  }
}

var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  _createClass(Form, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        fields: this.state.fields,
        form: this
      };
    }
  }]);

  function Form(props, context) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "withRegisteredField", function (func) {
      return function (args) {
        var includesField = (0, _path2["default"])(args.fieldProps.fieldPath, _this.state.fields);
        return includesField && func(args);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "registerField", function (_ref) {
      var pristineFieldProps = _ref.fieldProps,
          fieldOptions = _ref.fieldOptions;
      var fields = _this.state.fields;
      var fieldPath = pristineFieldProps.fieldPath;
      var fieldAlreadyExists = !!(0, _path2["default"])(fieldPath, fields);
      (0, _invariant["default"])(!(fieldAlreadyExists && !fieldOptions.allowMultiple), 'Cannot register field `%s`, the field with ' + 'the provided name is already registered. Make sure the fields on the same level of `Form` ' + 'or `Field.Group` have unique names.', fieldPath);
      /* Perform custom field props transformations upon registration */

      var fieldProps = fieldOptions.beforeRegister({
        fieldProps: pristineFieldProps,
        fields: fields
      });
      /**
       * Field registration may be explicitly prevented if "beforeRegister" method
       * returns null. This is useful to control mounting of complex fields (i.e. radio).
       */

      if (!fieldProps) {
        return;
      }
      /**
       * Assume the next state of the fields with the newly registered field
       * set in the fields map.
       */


      var nextFields = (0, _assocPath2["default"])(fieldPath, fieldProps, fields);

      var _assertThisInitialize = _assertThisInitialized(_this),
          eventEmitter = _assertThisInitialize.eventEmitter;
      /**
       * Synchronize the field record with the field component's props.
       * Create a props change observer to keep field's record in sync with
       * the props changes of the respective field component. Only the changes
       * in the props relative to the record should be observed and synchronized.
       */


      _utils.rxUtils.createPropsObserver({
        targetFieldPath: fieldPath,
        props: ['type'],
        eventEmitter: eventEmitter
      }).subscribe(function (_ref2) {
        var nextTargetRecord = _ref2.nextTargetRecord,
            changedProps = _ref2.changedProps;

        /**
         * @todo Verify that this replaces the previous logic.
         */
        (0, _compose2["default"])(_this.updateFieldsWith, (0, _mergeDeepRight2["default"])(nextTargetRecord))(changedProps); // this.updateField({
        //   fieldPath,
        //   update: (fieldProps) =>
        //     Object.keys(changedProps).reduce((acc, propName) => {
        //       return acc.set(propName, changedProps[propName])
        //     }, fieldProps),
        // })
      });
      /**
       * Create observables for each reactive rule applicable to the
       * currently registered field.
       * @todo Flush obsolete observables to prevent memory leak.
       */


      _utils.rxUtils.createRulesSubscriptions({
        fieldProps: fieldProps,
        fields: fields,
        rules: _this.state.rules,
        form: _assertThisInitialized(_this)
      });

      _this.setState({
        fields: nextFields
      }, function () {
        var fieldRegisteredEvent = _utils.camelize.apply(void 0, _toConsumableArray(fieldPath).concat(['registered']));

        eventEmitter.emit(fieldRegisteredEvent, fieldProps);

        if (fieldOptions.shouldValidateOnMount) {
          _this.validateField({
            fieldProps: fieldProps,

            /**
             * Enforce the validation function to use the "fieldProps"
             * provided directly. By default, it will try to grab the
             * field record from the state, which does not exist at
             * the point of new field mounting.
             */
            forceProps: true
          });
        }
        /* Create reactive props subscriptions */


        _utils.rxUtils.createPropsSubscriptions({
          fieldProps: fieldProps,
          fields: nextFields,
          form: _assertThisInitialized(_this)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setValues",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(fieldsPatch) {
        var fields, transformers, nextFields;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fields = _this.state.fields;
                transformers = (0, _deriveDeepWith["default"])(function (_, nextValue, fieldProps) {
                  return (0, _compose2["default"])(function (fieldProps) {
                    return (0, _validateField["default"])({
                      fieldProps: fieldProps,
                      fields: fields,
                      form: _assertThisInitialized(_this)
                    });
                  }, _utils.recordUtils.setValue(fieldProps.mapValue(nextValue)), _utils.recordUtils.resetValidityState);
                }, fieldsPatch, fields);
                _context.next = 4;
                return (0, _utils.evolveP)(transformers, fields);

              case 4:
                nextFields = _context.sent;

                _this.setState({
                  fields: nextFields
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "updateFieldsWith", function (nextFieldState) {
      var prevFields = _this.state.fields;
      var prevFieldState = (0, _path2["default"])(nextFieldState.fieldPath, prevFields);

      var nextFields = _utils.recordUtils.updateCollectionWith(nextFieldState, prevFields);

      return new Promise(function (resolve, reject) {
        try {
          _this.setState({
            fields: nextFields
          }, function () {
            var updatedFields = _this.state.fields;
            /**
             * Emit fields update event to notify the dedicated handler
             * that introduces possible side-effects based on fields update.
             * For example, a field's "onChange" callback.
             */

            _this.eventEmitter.emit('fieldsDidUpdate', {
              prevFieldState: prevFieldState,
              nextFieldState: nextFieldState,
              prevFields: prevFields,
              nextFields: updatedFields
            });

            resolve(updatedFields);
          });
        } catch (error) {
          reject(error);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fieldsDidUpdate", function (_ref4) {
      var prevFieldState = _ref4.prevFieldState,
          nextFieldState = _ref4.nextFieldState,
          nextFields = _ref4.nextFields;

      var prevValue = _utils.recordUtils.getValue(prevFieldState);

      var nextValue = _utils.recordUtils.getValue(nextFieldState);

      if (!(0, _equals2["default"])(prevValue, nextValue)) {
        var fieldPath = nextFieldState.fieldPath,
            onChange = nextFieldState.onChange;
        (0, _utils.dispatch)(onChange, {
          prevValue: prevValue,
          nextValue: nextValue,
          fieldProps: (0, _path2["default"])(fieldPath, nextFields),
          fields: nextFields,
          form: _assertThisInitialized(_this)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "unregisterFields", function (fieldsList) {
      var stitchedFields = _utils.fieldUtils.stitchFields(fieldsList);

      var nextFields = (0, _compose2["default"])(_utils.fieldUtils.stitchFields, (0, _reject2["default"])(function (fieldState) {
        return (0, _path2["default"])(fieldState.fieldPath, stitchedFields);
      }), _utils.fieldUtils.flattenFields)(_this.state.fields);

      _this.setState({
        fields: nextFields
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFirstChange", function (_ref5) {
      var event = _ref5.event,
          prevValue = _ref5.prevValue,
          nextValue = _ref5.nextValue,
          fieldProps = _ref5.fieldProps;
      (0, _utils.dispatch)(_this.props.onFirstChange, {
        event: event,
        prevValue: prevValue,
        nextValue: nextValue,
        fieldProps: fieldProps,
        fields: _this.state.fields,
        form: _assertThisInitialized(_this)
      });

      _this.setState({
        dirty: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFieldFocus", _this.withRegisteredField(function (args) {
      var fields = _this.state.fields;

      var _handlers$handleField = handlers.handleFieldFocus(args, fields, _assertThisInitialized(_this)),
          nextFields = _handlers$handleField.nextFields;

      _this.setState({
        fields: nextFields
      });
    }));

    _defineProperty(_assertThisInitialized(_this), "handleFieldChange", _this.withRegisteredField(
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(args) {
        var _this$state, fields, dirty, nextFieldProps;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$state = _this.state, fields = _this$state.fields, dirty = _this$state.dirty;
                _context2.next = 3;
                return handlers.handleFieldChange(args, fields, _assertThisInitialized(_this), {
                  onUpdateValue: _this.updateFieldsWith
                });

              case 3:
                nextFieldProps = _context2.sent;

                if (!nextFieldProps) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 7;
                return _this.updateFieldsWith(nextFieldProps);

              case 7:
                /* Mark form as dirty if it's not already */
                if (!dirty) {
                  _this.handleFirstChange(args);
                }

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref6.apply(this, arguments);
      };
    }()));

    _defineProperty(_assertThisInitialized(_this), "handleFieldBlur", _this.withRegisteredField(
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(args) {
        var fields, _ref8, nextFieldProps;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                fields = _this.state.fields;
                _context3.next = 3;
                return handlers.handleFieldBlur(args, fields, _assertThisInitialized(_this));

              case 3:
                _ref8 = _context3.sent;
                nextFieldProps = _ref8.nextFieldProps;

                _this.updateFieldsWith(nextFieldProps);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref7.apply(this, arguments);
      };
    }()));

    _defineProperty(_assertThisInitialized(_this), "validateField",
    /*#__PURE__*/
    function () {
      var _ref9 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(args) {
        var chain, _args$force, force, explicitFieldProps, explicitFields, _args$forceProps, forceProps, _args$shouldUpdateFie, shouldUpdateFields, fields, fieldProps, validatedField;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                chain = args.chain, _args$force = args.force, force = _args$force === void 0 ? false : _args$force, explicitFieldProps = args.fieldProps, explicitFields = args.fields, _args$forceProps = args.forceProps, forceProps = _args$forceProps === void 0 ? false : _args$forceProps, _args$shouldUpdateFie = args.shouldUpdateFields, shouldUpdateFields = _args$shouldUpdateFie === void 0 ? true : _args$shouldUpdateFie;
                fields = explicitFields || _this.state.fields;
                fieldProps = forceProps ? explicitFieldProps : (0, _path2["default"])(explicitFieldProps.fieldPath, fields);
                fieldProps = fieldProps || explicitFieldProps;
                /* Perform the validation */

                _context4.next = 6;
                return (0, _validateField["default"])({
                  chain: chain,
                  force: force,
                  fieldProps: fieldProps,
                  fields: fields,
                  form: _assertThisInitialized(_this)
                });

              case 6:
                validatedField = _context4.sent;

                if (!shouldUpdateFields) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 10;
                return _this.updateFieldsWith(validatedField);

              case 10:
                return _context4.abrupt("return", validatedField);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref9.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "validate",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5() {
      var predicate,
          fields,
          onInvalid,
          flattenedFields,
          pendingValidations,
          validatedFields,
          isFormValid,
          nextFields,
          invalidFields,
          _args5 = arguments;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              predicate = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : _T2["default"];
              fields = _this.state.fields;
              onInvalid = _this.props.onInvalid;
              flattenedFields = (0, _getLeavesWhich["default"])((0, _allPass2["default"])([(0, _is2["default"])(Object), (0, _has2["default"])('fieldPath'), predicate]), fields);
              /* Map pending field validations into a list */

              pendingValidations = flattenedFields.map(function (fieldProps) {
                return _this.validateField({
                  fieldProps: fieldProps
                });
              });
              /* Await for all validation promises to resolve before returning */

              _context5.next = 7;
              return Promise.all(pendingValidations);

            case 7:
              validatedFields = _context5.sent;
              isFormValid = validatedFields.every((0, _propEq2["default"])('expected', true));

              if (!isFormValid && onInvalid) {
                nextFields = _this.state.fields;
                /* Get a map of invalid fields */

                invalidFields = (0, _filter2["default"])((0, _propEq2["default"])('expected', false), validatedFields);
                /* Call custom callback */

                (0, _utils.dispatch)(onInvalid, {
                  invalidFields: invalidFields,
                  fields: nextFields,
                  form: _assertThisInitialized(_this)
                });
              }

              return _context5.abrupt("return", isFormValid);

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));

    _defineProperty(_assertThisInitialized(_this), "clear", function () {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Boolean;
      var nextFields = (0, _compose2["default"])(_utils.fieldUtils.stitchFields, (0, _map2["default"])((0, _when2["default"])(predicate, _utils.recordUtils.reset((0, _always2["default"])('')))), _utils.fieldUtils.flattenFields)(_this.state.fields);

      _this.setState({
        fields: nextFields
      }, function () {
        (0, _utils.dispatch)(_this.props.onClear, {
          fields: nextFields,
          form: _assertThisInitialized(_this)
        }, _this.context);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      var predicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Boolean;
      var nextFields = (0, _compose2["default"])(_utils.fieldUtils.stitchFields, (0, _map2["default"])((0, _when2["default"])(predicate, _utils.recordUtils.reset((0, _prop2["default"])('initialValue')))), _utils.fieldUtils.flattenFields)(_this.state.fields);

      _this.setState({
        fields: nextFields,
        dirty: false
      }, function () {
        /**
         * Invoke form validation with the predicate that omits empty fields,
         * regardless of their required status. That is to prevent having
         * invalid empty required fields after reset.
         */
        _this.validate((0, _allPass2["default"])([(0, _has2["default"])('value'), (0, _complement2["default"])((0, _propEq2["default"])('value', ''))]));
        /* Callback method to reset controlled fields */


        (0, _utils.dispatch)(_this.props.onReset, {
          fields: nextFields,
          form: _assertThisInitialized(_this)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setErrors", function (fieldsDelta) {
      var fields = _this.state.fields;
      /**
       * Get transformers for fields in the following format:
       * [fieldPath]: fieldTransformer(fieldProps)
       */

      var transformers = (0, _deriveDeepWith["default"])(function (_, errors) {
        return (0, _compose2["default"])(_utils.recordUtils.setErrors(errors), _utils.recordUtils.updateValidityState(true), _utils.recordUtils.setTouched(!!errors), (0, _assoc2["default"])('expected', !errors), (0, _assoc2["default"])('validated', true));
      }, fieldsDelta, fields);
      /**
       * Apply transformers object to the current fields.
       * Fields not included in transformers are returned as-is.
       */

      var nextFields = (0, _evolve2["default"])(transformers, fields);

      _this.setState({
        fields: nextFields
      });
    });

    _defineProperty(_assertThisInitialized(_this), "serialize", function () {
      var fields = _this.state.fields;
      var onSerialize = _this.props.onSerialize;

      var serialized = _utils.fieldUtils.serializeFields(fields);

      return onSerialize ? onSerialize({
        serialized: serialized,
        fields: fields,
        form: _assertThisInitialized(_this)
      }) : serialized;
    });

    _defineProperty(_assertThisInitialized(_this), "submit",
    /*#__PURE__*/
    function () {
      var _ref11 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(event) {
        var action, isFormValid, fields, _this$props, onSubmitStart, onSubmitted, onSubmitFailed, onSubmitEnd, serialized, callbackArgs, pendingSubmit;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }
                /* Throw on submit attempt without the "action" prop */


                action = _this.props.action;
                (0, _invariant["default"])(action, 'Cannot submit the form without `action` prop specified explicitly. ' + 'Expected a function which returns Promise, but received: %s.', action);
                /* Ensure form is valid before submitting */

                _context6.next = 5;
                return _this.validate();

              case 5:
                isFormValid = _context6.sent;

                if (isFormValid) {
                  _context6.next = 8;
                  break;
                }

                return _context6.abrupt("return");

              case 8:
                fields = _this.state.fields;
                _this$props = _this.props, onSubmitStart = _this$props.onSubmitStart, onSubmitted = _this$props.onSubmitted, onSubmitFailed = _this$props.onSubmitFailed, onSubmitEnd = _this$props.onSubmitEnd;
                /* Serialize the fields */

                serialized = _this.serialize();
                /* Compose a single Object of arguments passed to each custom handler */

                callbackArgs = {
                  serialized: serialized,
                  fields: fields,
                  form: _assertThisInitialized(_this)
                  /**
                   * Event: Submit has started.
                   * The submit is considered started immediately when the submit button is pressed.
                   */

                };
                (0, _utils.dispatch)(onSubmitStart, callbackArgs);
                pendingSubmit = (0, _utils.dispatch)(action, callbackArgs);
                (0, _invariant["default"])(pendingSubmit && typeof pendingSubmit.then === 'function', 'Cannot submit the form. Expected `action` prop of the Form to return ' + 'an instance of Promise, but got: %s. Make sure you return a Promise ' + 'from your action handler.', pendingSubmit);
                return _context6.abrupt("return", pendingSubmit.then(function (res) {
                  (0, _utils.dispatch)(onSubmitted, _objectSpread({}, callbackArgs, {
                    res: res
                  }));
                  return res;
                })["catch"](function (res) {
                  (0, _utils.dispatch)(onSubmitFailed, _objectSpread({}, callbackArgs, {
                    res: res
                  }));
                  return res;
                }).then(function (res) {
                  (0, _utils.dispatch)(onSubmitEnd, _objectSpread({}, callbackArgs, {
                    res: res
                  }));
                }));

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x5) {
        return _ref11.apply(this, arguments);
      };
    }());

    var formRules = props.rules,
        explicitMessages = props.messages;
    var debounceTime = context.debounceTime,
        providerRules = context.rules,
        messages = context.messages;

    if (_this.props.hasOwnProperty('withImmutable')) {
      console.warn('FormProvider: `withImmutable` prop has been deprecated. Please remove it and treat exposed library ' + 'instances as plain JavaScript data types. See more details: https://goo.gl/h5YUiS');
    }
    /* Set the validation debounce duration */


    _this.debounceTime = (0, _utils.isset)(debounceTime) ? debounceTime : _FormProvider.defaultDebounceTime;
    /**
     * @todo Consider moving this to the form's state.
     */

    _this.messages = explicitMessages || messages;
    /* Create an event emitter to communicate between form and its fields */

    var _eventEmitter = new _events.EventEmitter();

    _this.eventEmitter = _eventEmitter;
    /* Field events observerables */

    (0, _fromEvent.fromEvent)(_eventEmitter, 'fieldsDidUpdate').subscribe(_this.fieldsDidUpdate);
    (0, _fromEvent.fromEvent)(_eventEmitter, 'fieldRegister').pipe((0, _bufferTime.bufferTime)(50)).subscribe(function (pendingFields) {
      return pendingFields.forEach(_this.registerField);
    });
    (0, _fromEvent.fromEvent)(_eventEmitter, 'fieldFocus').subscribe(_this.handleFieldFocus);
    (0, _fromEvent.fromEvent)(_eventEmitter, 'fieldChange').subscribe(_this.handleFieldChange);
    (0, _fromEvent.fromEvent)(_eventEmitter, 'fieldBlur').subscribe(_this.handleFieldBlur);
    (0, _fromEvent.fromEvent)(_eventEmitter, 'validateField').subscribe(_this.validateField);
    (0, _fromEvent.fromEvent)(_eventEmitter, 'fieldUnregister').pipe((0, _bufferTime.bufferTime)(50), (0, _filter3.filter)((0, _complement2["default"])(_isEmpty2["default"]))).subscribe(_this.unregisterFields);
    _this.state = {
      dirty: false,
      fields: {},
      rules: _utils.formUtils.mergeRules(formRules, providerRules)
    };
    return _this;
  }

  _createClass(Form, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      var prevFormRules = this.props.rules;
      var nextFormRules = nextProps.rules;
      var prevProviderRules = this.context.rules;
      var nextProviderRules = nextContext.rules;
      var shouldUpdateState = !((0, _equals2["default"])(nextFormRules, prevFormRules) && (0, _equals2["default"])(nextProviderRules, prevProviderRules));

      if (shouldUpdateState) {
        var nextRules = _utils.formUtils.mergeRules(nextFormRules, nextProviderRules);
        /**
         * Reset the validity and validation state of all fields
         * to reset those which rules are no longer present in the
         * schema from the next props.
         * @todo A good optimization place. May be refined.
         */


        var nextFields = (0, _compose2["default"])(_utils.fieldUtils.stitchFields, (0, _map2["default"])((0, _compose2["default"])(_utils.recordUtils.resetValidationState, _utils.recordUtils.resetValidityState)), _utils.fieldUtils.flattenFields)(this.state.fields);
        this.setState({
          fields: nextFields,
          rules: nextRules
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.eventEmitter.removeAllListeners();
    }
    /**
     * Wraps a given function, ensuring its invocation only when the payload
     * of that function has a field that is a part of the form's fields.
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          children = _this$props2.children,
          id = _this$props2.id,
          className = _this$props2.className,
          style = _this$props2.style;
      return _react["default"].createElement("form", {
        ref: function ref(_ref12) {
          return bindInnerRef.call(_this2, _ref12, innerRef);
        },
        id: id,
        className: className,
        style: style,
        onSubmit: this.submit,
        noValidate: true
      }, children);
    }
  }]);

  return Form;
}(_react["default"].Component);

exports["default"] = Form;

_defineProperty(Form, "propTypes", {
  /* General */
  innerRef: _propTypes["default"].func,
  action: _propTypes["default"].func.isRequired,
  initialValues: _propTypes["default"].object,

  /* Validation */
  rules: _FormProvider.ValidationRulesPropType,
  messages: _FormProvider.ValidationMessagesPropType,

  /* Callbacks */
  onFirstChange: _propTypes["default"].func,
  onClear: _propTypes["default"].func,
  onReset: _propTypes["default"].func,
  onSerialize: _propTypes["default"].func,
  onInvalid: _propTypes["default"].func,
  onSubmitStart: _propTypes["default"].func,
  onSubmitted: _propTypes["default"].func,
  onSubmitFailed: _propTypes["default"].func,
  onSubmitEnd: _propTypes["default"].func
});

_defineProperty(Form, "defaultProps", {
  action: function action() {
    return new Promise(function (resolve) {
      return resolve();
    });
  }
  /* Context accepted by the Form */

});

_defineProperty(Form, "contextTypes", {
  rules: _propTypes["default"].object,
  messages: _propTypes["default"].object,
  debounceTime: _propTypes["default"].number
  /* Context propagated to the fields */

});

_defineProperty(Form, "childContextTypes", {
  fields: _propTypes["default"].object.isRequired,
  form: _propTypes["default"].object.isRequired
});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var empty = /*#__PURE__*/__webpack_require__(153);

var equals = /*#__PURE__*/__webpack_require__(24);

/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */


var isEmpty = /*#__PURE__*/_curry1(function isEmpty(x) {
  return x != null && equals(x, empty(x));
});
module.exports = isEmpty;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var _isArguments = /*#__PURE__*/__webpack_require__(63);

var _isArray = /*#__PURE__*/__webpack_require__(13);

var _isObject = /*#__PURE__*/__webpack_require__(41);

var _isString = /*#__PURE__*/__webpack_require__(21);

/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */


var empty = /*#__PURE__*/_curry1(function empty(x) {
  return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? '' : _isObject(x) ? {} : _isArguments(x) ? function () {
    return arguments;
  }() : void 0 // else
  ;
});
module.exports = empty;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var _arrayFromIterator = /*#__PURE__*/__webpack_require__(155);

var _includesWith = /*#__PURE__*/__webpack_require__(156);

var _functionName = /*#__PURE__*/__webpack_require__(157);

var _has = /*#__PURE__*/__webpack_require__(10);

var _objectIs = /*#__PURE__*/__webpack_require__(158);

var keys = /*#__PURE__*/__webpack_require__(16);

var type = /*#__PURE__*/__webpack_require__(83);

/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);
  var b = _arrayFromIterator(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }

  // if *a* array contains any element that is not included in *b*
  return !_includesWith(function (b, aItem) {
    return !_includesWith(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (_objectIs(a, b)) {
    return true;
  }

  var typeA = type(a);

  if (typeA !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && _objectIs(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!_objectIs(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);

  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}
module.exports = _equals;

/***/ }),
/* 155 */
/***/ (function(module, exports) {

function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}
module.exports = _arrayFromIterator;

/***/ }),
/* 156 */
/***/ (function(module, exports) {

function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}
module.exports = _includesWith;

/***/ }),
/* 157 */
/***/ (function(module, exports) {

function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}
module.exports = _functionName;

/***/ }),
/* 158 */
/***/ (function(module, exports) {

// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}

module.exports = typeof Object.is === 'function' ? Object.is : _objectIs;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      const transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */


var evolve = /*#__PURE__*/_curry2(function evolve(transformations, object) {
  var result = object instanceof Array ? [] : {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
  }
  return result;
});
module.exports = evolve;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = /*#__PURE__*/__webpack_require__(5);

var equals = /*#__PURE__*/__webpack_require__(24);

/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 * You can test multiple properties with [`R.whereEq`](#whereEq).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.whereEq, R.propSatisfies, R.equals
 * @example
 *
 *      const abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      const fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      const alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      const kids = [abby, fred, rusty, alois];
 *      const hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */


var propEq = /*#__PURE__*/_curry3(function propEq(name, val, obj) {
  return equals(val, obj[name]);
});
module.exports = propEq;

/***/ }),
/* 161 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var async_1 = __webpack_require__(163);
var Subscriber_1 = __webpack_require__(23);
var isScheduler_1 = __webpack_require__(168);
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = async_1.async;
    if (isScheduler_1.isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return function bufferTimeOperatorFunction(source) {
        return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
    };
}
exports.bufferTime = bufferTime;
var BufferTimeOperator = (function () {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    BufferTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    };
    return BufferTimeOperator;
}());
var Context = (function () {
    function Context() {
        this.buffer = [];
    }
    return Context;
}());
var BufferTimeSubscriber = (function (_super) {
    __extends(BufferTimeSubscriber, _super);
    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.bufferTimeSpan = bufferTimeSpan;
        _this.bufferCreationInterval = bufferCreationInterval;
        _this.maxBufferSize = maxBufferSize;
        _this.scheduler = scheduler;
        _this.contexts = [];
        var context = _this.openContext();
        _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (_this.timespanOnly) {
            var timeSpanOnlyState = { subscriber: _this, context: context, bufferTimeSpan: bufferTimeSpan };
            _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
        else {
            var closeState = { subscriber: _this, context: context };
            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: _this, scheduler: scheduler };
            _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
        return _this;
    }
    BufferTimeSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for (var i = 0; i < len; i++) {
            var context_1 = contexts[i];
            var buffer = context_1.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) {
                filledBufferContext = context_1;
            }
        }
        if (filledBufferContext) {
            this.onBufferFull(filledBufferContext);
        }
    };
    BufferTimeSubscriber.prototype._error = function (err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber.prototype._complete = function () {
        var _a = this, contexts = _a.contexts, destination = _a.destination;
        while (contexts.length > 0) {
            var context_2 = contexts.shift();
            destination.next(context_2.buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber.prototype._unsubscribe = function () {
        this.contexts = null;
    };
    BufferTimeSubscriber.prototype.onBufferFull = function (context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
            context = this.openContext();
            var bufferTimeSpan = this.bufferTimeSpan;
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    };
    BufferTimeSubscriber.prototype.openContext = function () {
        var context = new Context();
        this.contexts.push(context);
        return context;
    };
    BufferTimeSubscriber.prototype.closeContext = function (context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
            contexts.splice(contexts.indexOf(context), 1);
        }
    };
    return BufferTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevContext = state.context;
    if (prevContext) {
        subscriber.closeContext(prevContext);
    }
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
    var context = subscriber.openContext();
    var action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    var subscriber = arg.subscriber, context = arg.context;
    subscriber.closeContext(context);
}
//# sourceMappingURL=bufferTime.js.map

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(164);
var AsyncScheduler_1 = __webpack_require__(166);
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(165);
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(75);
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler_1 = __webpack_require__(167);
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler_1.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
exports.isScheduler = isScheduler;
//# sourceMappingURL=isScheduler.js.map

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "handleFieldFocus", {
  enumerable: true,
  get: function get() {
    return _handleFieldFocus2["default"];
  }
});
Object.defineProperty(exports, "handleFieldChange", {
  enumerable: true,
  get: function get() {
    return _handleFieldChange2["default"];
  }
});
Object.defineProperty(exports, "handleFieldBlur", {
  enumerable: true,
  get: function get() {
    return _handleFieldBlur2["default"];
  }
});

var _handleFieldFocus2 = _interopRequireDefault(__webpack_require__(170));

var _handleFieldChange2 = _interopRequireDefault(__webpack_require__(171));

var _handleFieldBlur2 = _interopRequireDefault(__webpack_require__(210));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleFieldFocus;

var _dispatch = _interopRequireDefault(__webpack_require__(8));

var recordUtils = _interopRequireWildcard(__webpack_require__(3));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handleFieldFocus(_ref, fields, form) {
  var event = _ref.event,
      fieldProps = _ref.fieldProps;
  var nextFieldProps = recordUtils.setFocused(true, fieldProps);
  var nextFields = recordUtils.updateCollectionWith(nextFieldProps, fields);
  (0, _dispatch["default"])(fieldProps.onFocus, {
    event: event,
    fieldProps: nextFieldProps,
    fields: nextFields,
    form: form
  });
  return {
    nextFieldProps: nextFieldProps,
    nextFields: nextFields
  };
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleFieldChange;

var _compose2 = _interopRequireDefault(__webpack_require__(4));

var _invariant = _interopRequireDefault(__webpack_require__(44));

var _dispatch = _interopRequireDefault(__webpack_require__(8));

var recordUtils = _interopRequireWildcard(__webpack_require__(3));

var _validateSync = _interopRequireDefault(__webpack_require__(85));

var _validateField = _interopRequireDefault(__webpack_require__(57));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function handleFieldChange(_x, _x2, _x3, _x4) {
  return _handleFieldChange.apply(this, arguments);
}

function _handleFieldChange() {
  _handleFieldChange = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref, fields, form, _ref2) {
    var event, prevValue, nextValue, fieldProps, onUpdateValue, eventInstance, _ref3, isForcedUpdate, isControlled, onChange, updatedFieldProps, pendingAsyncValidation, shouldDebounce, appropriateValidation, validatedFieldProps;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event = _ref.event, prevValue = _ref.prevValue, nextValue = _ref.nextValue, fieldProps = _ref.fieldProps;
            onUpdateValue = _ref2.onUpdateValue;

            /**
             * Handle "onChange" events dispatched by the controlled field.
             * Controlled field must execute its custom "CustomField.props.onChange" handler since
             * that is the updater for the source (i.e. state) controlling its value. Internal
             * RAF change handling must be omitted in that scenario, as it will be bubbled to
             * eventually via "createField.Field.componentReceiveProps()", when comparing previous
             * and next values of controlled fields.
             */
            eventInstance = event && (event.nativeEvent || event);
            _ref3 = eventInstance || {}, isForcedUpdate = _ref3.isForcedUpdate;
            isControlled = fieldProps.controlled, onChange = fieldProps.onChange;

            if (!(!isForcedUpdate && isControlled)) {
              _context.next = 9;
              break;
            }

            (0, _invariant["default"])(onChange, 'Cannot update the controlled field `%s`. Expected custom `onChange` handler, ' + 'but got: %s.', fieldProps.fieldPath.join('.'), onChange);
            (0, _dispatch["default"])(onChange, {
              event: event,
              nextValue: nextValue,
              prevValue: prevValue,
              fieldProps: fieldProps,
              fields: fields,
              form: form
            }, form.context);
            return _context.abrupt("return");

          case 9:
            /* Update field's value */
            updatedFieldProps = (0, _compose2["default"])(recordUtils.setPristine(false), recordUtils.setValue(nextValue), recordUtils.resetValidityState, recordUtils.resetValidationState)(fieldProps);
            /* Cancel any pending async validation */

            pendingAsyncValidation = updatedFieldProps.pendingAsyncValidation;

            if (pendingAsyncValidation) {
              pendingAsyncValidation.cancel();
            }

            if (!onUpdateValue) {
              _context.next = 15;
              break;
            }

            _context.next = 15;
            return onUpdateValue(updatedFieldProps);

          case 15:
            /**
             * Determine whether to debounce the validation.
             * For example, for immediate clearing of field value the validation must be
             * performed immediately, while for typing the value it must be debounced.
             */
            shouldDebounce = !!prevValue && !!nextValue;
            appropriateValidation = shouldDebounce ? fieldProps.debounceValidate : _validateField["default"];
            _context.next = 19;
            return appropriateValidation({
              chain: [_validateSync["default"]],
              fieldProps: updatedFieldProps,

              /**
               * Explicitly force field props, since "Form.validateField" will grab
               * the actual field props by field name from its state. This works unexpected
               * with concurrent validations (value updates).
               */
              // forceProps: true,
              //
              // NOTE
              // When passed explicitly here, the state of the fields
              // may be outdated.
              // I think it has to do with the debounce nature of this function call.
              // Internally, "validateField" referenced to the very same fields,
              // but at that moment their entries are up-to-date.
              //
              // fields: form.state.fields,
              form: form
            });

          case 19:
            validatedFieldProps = _context.sent;
            return _context.abrupt("return", validatedFieldProps);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleFieldChange.apply(this, arguments);
}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFieldRules;

var _assocPath2 = _interopRequireDefault(__webpack_require__(11));

var _path2 = _interopRequireDefault(__webpack_require__(2));

var _head2 = _interopRequireDefault(__webpack_require__(71));

var _filterSchemaByField = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Returns "type" and "name" groups of validation rules
 * relevant to the given field.
 *
 * @returns
 * {
 *  fieldPath: {
 *    type: [ValidationRule],
 *    name: [ValidationRule],
 *  },
 *  type: [ValidationRule],
 *  name: [ValidationRule],
 * }
 */
function getFieldRules(fieldProps, rules) {
  var rulesPaths = (0, _filterSchemaByField.getRulesPaths)(fieldProps);
  return rulesPaths.reduce(function (acc, ruleKeyPath) {
    var selector = (0, _head2["default"])(ruleKeyPath);
    /** @todo This is weird */

    var keyPath = selector === 'fieldGroup' ? [selector, ruleKeyPath[ruleKeyPath.length - 2]] : [selector];
    var ruleGroups = (0, _path2["default"])(ruleKeyPath, rules);
    return ruleGroups ? (0, _assocPath2["default"])(keyPath, ruleGroups, acc) : acc;
  }, {});
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _allPass = _interopRequireDefault(__webpack_require__(17));

var _anyPass = _interopRequireDefault(__webpack_require__(174));

var recordUtils = _interopRequireWildcard(__webpack_require__(3));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isForced = function isForced(resolverArgs, rules, force) {
  return force;
};

var hasValue = function hasValue(_ref) {
  var fieldProps = _ref.fieldProps;
  return !!recordUtils.hasValue(fieldProps);
};

var notValidSync = function notValidSync(_ref2) {
  var fieldProps = _ref2.fieldProps;

  /**
   * @todo This is not correct.
   * These predicates must determine if the validation is necessary.
   * "!fieldProps.validatedSync" is enough: if field has been validated,
   * no need to re-validated it again. Whenever its value changes, "validatedSync"
   * must be reset to "false".
   *
   * This is a quickfix, since now when there is a single validated invalid field,
   * submit results into validation skipping that field (resolves like validation isn't necessary),
   * and form submits with invalid field.
   */
  return !(fieldProps.validatedSync && fieldProps.validSync);
};

var isRequiredField = function isRequiredField(_ref3) {
  var fieldProps = _ref3.fieldProps;
  return fieldProps.required;
};

var hasFieldRule = function hasFieldRule(_ref4) {
  var fieldProps = _ref4.fieldProps;
  return !!fieldProps.rule;
};

var hasFormRules = function hasFormRules(resolverArgs, formRules) {
  return formRules && (formRules.type || formRules.name);
};
/**
 * Determines if synchronous validation is necessary.
 */


var _default = (0, _anyPass["default"])([isForced, isRequiredField, (0, _allPass["default"])([notValidSync, hasValue, (0, _anyPass["default"])([hasFieldRule, hasFormRules])])]);

exports["default"] = _default;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var curryN = /*#__PURE__*/__webpack_require__(15);

var max = /*#__PURE__*/__webpack_require__(68);

var pluck = /*#__PURE__*/__webpack_require__(69);

var reduce = /*#__PURE__*/__webpack_require__(20);

/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      const isClub = R.propEq('suit', '♣');
 *      const isSpade = R.propEq('suit', '♠');
 *      const isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */


var anyPass = /*#__PURE__*/_curry1(function anyPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function () {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});
module.exports = anyPass;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _always2 = _interopRequireDefault(__webpack_require__(32));

var recordUtils = _interopRequireWildcard(__webpack_require__(3));

var _errorTypes = _interopRequireDefault(__webpack_require__(55));

var _applyRule = _interopRequireDefault(__webpack_require__(56));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ensureValue = (0, _always2["default"])((0, _applyRule["default"])({
  /**
   * Always set the selector for the missing error type to "name",
   * since in case any "message.name.missing" is present, it should
   * be taken as a priority.
   */
  selector: 'name',
  errorType: _errorTypes["default"].missing,
  resolver: function resolver(_ref) {
    var fieldProps = _ref.fieldProps;
    return recordUtils.hasValue(fieldProps);
  }
}));
var _default = ensureValue;
exports["default"] = _default;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = applyFieldRule;

var recordUtils = _interopRequireWildcard(__webpack_require__(3));

var _applyRule = _interopRequireDefault(__webpack_require__(56));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function applyFieldRule(fieldRule) {
  return function (resolverArgs) {
    var fieldValue = recordUtils.getValue(resolverArgs.fieldProps);
    var resolver = typeof fieldRule === 'function' ? fieldRule : function () {
      return fieldRule.test(fieldValue);
    };
    return (0, _applyRule["default"])({
      resolver: resolver
    }, resolverArgs);
  };
}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = applyFormRules;

var _path2 = _interopRequireDefault(__webpack_require__(2));

var _listOf = _interopRequireDefault(__webpack_require__(86));

var _addWhen = _interopRequireDefault(__webpack_require__(87));

var _isset = _interopRequireDefault(__webpack_require__(38));

var _reduceWhile = __webpack_require__(54);

var _applyRule = _interopRequireDefault(__webpack_require__(56));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Reduces the array of rules declarations into the array
 * of functions that return their respective resolvers.
 */
function reduceRules(rules) {
  return (0, _reduceWhile.reduceResults)(rules.map(function (rule) {
    return function (args) {
      return (0, _applyRule["default"])(rule, args);
    };
  }));
}

function applyFormRules(rules) {
  return function (resolverArgs) {
    var rulesList = (0, _listOf["default"])(
    /**
     * @todo Remove "listOf" and "addWhen" usage.
     * Accept the list of "rules" that is already filtered,
     * and map it through the "reduceRules" function.
     */
    (0, _addWhen["default"])((0, _path2["default"])(['fieldGroup', 'name'], rules), _isset["default"], reduceRules), (0, _addWhen["default"])((0, _path2["default"])(['fieldGroup', 'type'], rules), _isset["default"], reduceRules), (0, _addWhen["default"])(rules.name, _isset["default"], reduceRules), (0, _addWhen["default"])(rules.type, _isset["default"], reduceRules))(resolverArgs);
    return (0, _reduceWhile.reduceWhileExpected)(rulesList)(resolverArgs);
  };
}

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = validate;

var _pathOr2 = _interopRequireDefault(__webpack_require__(53));

var _append2 = _interopRequireDefault(__webpack_require__(81));

var _compose2 = _interopRequireDefault(__webpack_require__(4));

var _reduceWhile = __webpack_require__(54);

var _createRuleResolverArgs = _interopRequireDefault(__webpack_require__(28));

var _validateSync = _interopRequireDefault(__webpack_require__(85));

var _validateAsync = _interopRequireDefault(__webpack_require__(179));

var _filterSchemaByField = _interopRequireDefault(__webpack_require__(35));

var _stitchWith = _interopRequireDefault(__webpack_require__(48));

var _getRulesRefs = _interopRequireDefault(__webpack_require__(49));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var defaultValidatorsList = [_validateSync["default"], _validateAsync["default"]];
/**
 * Performs validation of the given field with the given parameters.
 * Returns the validation result.
 */

function validate(_x) {
  return _validate.apply(this, arguments);
}

function _validate() {
  _validate = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(args) {
    var force, chain, fieldProps, form, resolverArgs, relevantRules, stitchedRules, validatorsList;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            force = args.force, chain = args.chain, fieldProps = args.fieldProps, form = args.form;
            resolverArgs = (0, _createRuleResolverArgs["default"])(args);
            /**
             * Get the list of relevant rules for the validated field.
             */

            relevantRules = (0, _compose2["default"])((0, _getRulesRefs["default"])(resolverArgs), (0, _filterSchemaByField["default"])(form.state.rules))(fieldProps);
            /**
             * Stitch the list of relevant rules into a Map
             * where each "keyPath" of the rule is associated with the rule.
             * @example
             * [{ keyPath: ['type', 'email'], resolver: f() }]
             * -> { type: { email: [{ keyPath: ['type', 'email'], resolver: f() }] }}
             */

            stitchedRules = (0, _stitchWith["default"])(function (entry, keyPath, acc) {
              return (0, _append2["default"])(entry, (0, _pathOr2["default"])([], keyPath, acc));
            }, ['keyPath'], relevantRules);
            validatorsList = chain || defaultValidatorsList;
            return _context.abrupt("return", (0, _reduceWhile.reduceWhileExpected)(validatorsList)(resolverArgs, stitchedRules, force));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validate.apply(this, arguments);
}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = validateAsync;

var _createValidatorResult = _interopRequireDefault(__webpack_require__(88));

var _shouldValidateAsync = _interopRequireDefault(__webpack_require__(180));

var _applyFieldAsyncRule = _interopRequireDefault(__webpack_require__(181));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function validateAsync(_x, _x2, _x3) {
  return _validateAsync.apply(this, arguments);
}

function _validateAsync() {
  _validateAsync = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(resolverArgs, rules, force) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(0, _shouldValidateAsync["default"])(resolverArgs, force)) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return (0, _applyFieldAsyncRule["default"])(resolverArgs, force);

          case 3:
            _context.t0 = _context.sent;
            _context.next = 7;
            break;

          case 6:
            _context.t0 = null;

          case 7:
            result = _context.t0;
            return _context.abrupt("return", (0, _createValidatorResult["default"])('async', result));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validateAsync.apply(this, arguments);
}

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _allPass = _interopRequireDefault(__webpack_require__(17));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hasAsyncRule = function hasAsyncRule(_ref) {
  var fieldProps = _ref.fieldProps;
  return !!fieldProps.asyncRule;
};

var hasValue = function hasValue(_ref2) {
  var fieldProps = _ref2.fieldProps;
  return !!fieldProps.value;
};

var validSync = function validSync(_ref3) {
  var fieldProps = _ref3.fieldProps;
  return fieldProps.validatedSync ? fieldProps.validSync : true;
};

var notValidAsync = function notValidAsync(_ref4) {
  var fieldProps = _ref4.fieldProps;
  return !fieldProps.validAsync;
};

var _default = (0, _allPass["default"])([hasValue, hasAsyncRule, validSync, notValidAsync]);

exports["default"] = _default;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = applyFieldAsyncRule;

var _assoc2 = _interopRequireDefault(__webpack_require__(6));

var _dispatch = _interopRequireDefault(__webpack_require__(8));

var _makeCancelable = _interopRequireDefault(__webpack_require__(58));

var _createValidationResult = _interopRequireDefault(__webpack_require__(90));

var _createRejectedRule = _interopRequireDefault(__webpack_require__(89));

var _errorTypes = _interopRequireDefault(__webpack_require__(55));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function applyFieldAsyncRule(_x) {
  return _applyFieldAsyncRule.apply(this, arguments);
}

function _applyFieldAsyncRule() {
  _applyFieldAsyncRule = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(resolverArgs) {
    var fieldProps, form, asyncRule, pendingRequest, result, valid, extra, rejectedRules;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fieldProps = resolverArgs.fieldProps, form = resolverArgs.form;
            asyncRule = fieldProps.asyncRule;
            pendingRequest = (0, _makeCancelable["default"])((0, _dispatch["default"])(asyncRule, resolverArgs));
            /**
             * Set pending async request reference on field props to be able
             * to cancel request upon field value change.
             */

            form.updateFieldsWith((0, _assoc2["default"])('pendingAsyncValidation', pendingRequest, fieldProps));
            _context.next = 6;
            return pendingRequest.itself;

          case 6:
            result = _context.sent;
            valid = result.valid, extra = _objectWithoutProperties(result, ["valid"]);
            rejectedRules = valid ? undefined : (0, _createRejectedRule["default"])({
              selector: 'name',
              name: 'async',
              errorType: _errorTypes["default"].invalid
            });
            return _context.abrupt("return", (0, _createValidationResult["default"])(valid, rejectedRules, extra));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _applyFieldAsyncRule.apply(this, arguments);
}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reflectValidationResult;

var _mergeDeepLeft2 = _interopRequireDefault(__webpack_require__(60));

var _assoc2 = _interopRequireDefault(__webpack_require__(6));

var _compose2 = _interopRequireDefault(__webpack_require__(4));

var _camelize = _interopRequireDefault(__webpack_require__(26));

var recordUtils = _interopRequireWildcard(__webpack_require__(3));

var _getMessages = _interopRequireDefault(__webpack_require__(183));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reflectValidationResult(resolverArgs) {
  var shouldValidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return function (validationResult) {
    var fieldProps = resolverArgs.fieldProps,
        messages = resolverArgs.form.messages;
    var validators = validationResult.validators,
        expected = validationResult.expected;
    var errorMessages = (0, _getMessages["default"])(validationResult, resolverArgs, messages);
    var validationProps = validators.reduce(function (props, validatorName) {
      var _objectSpread2;

      var validPropName = (0, _camelize["default"])('valid', validatorName);
      var validatedPropName = (0, _camelize["default"])('validated', validatorName);
      return _objectSpread({}, props, (_objectSpread2 = {}, _defineProperty(_objectSpread2, validatedPropName, true), _defineProperty(_objectSpread2, validPropName, expected), _objectSpread2));
    }, {});
    var updateFieldProps = (0, _compose2["default"])(recordUtils.setErrors(errorMessages), recordUtils.updateValidityState(shouldValidate), (0, _compose2["default"])((0, _assoc2["default"])('expected', expected), (0, _assoc2["default"])('validated', true), (0, _mergeDeepLeft2["default"])(validationProps)));
    return updateFieldProps(fieldProps);
  };
}

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getErrorMessages;

var _path2 = _interopRequireDefault(__webpack_require__(2));

var _getResolvePaths = _interopRequireDefault(__webpack_require__(184));

var _resolveMessage = _interopRequireDefault(__webpack_require__(199));

var _pruneMessages = _interopRequireDefault(__webpack_require__(200));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createResolveIterator = function createResolveIterator(validationResult, resolverArgs, messagesSchema) {
  var messageResolverArgs = _objectSpread({}, resolverArgs, validationResult.extra);

  return function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        rule = _ref2[0],
        keyPathGetters = _ref2[1];

    return keyPathGetters.map(function (keyPathGetter) {
      if (keyPathGetter === null) {
        return keyPathGetter;
      }

      var keyPath = keyPathGetter(rule, resolverArgs.fieldProps);
      var resolver = (0, _path2["default"])(keyPath, messagesSchema);
      return (0, _resolveMessage["default"])(resolver, messageResolverArgs);
    });
  };
};
/**
 * Returns the list of error messages relevant to the given list of rejected rules
 * found in the given messages schema. Follows the resolving algorithm.
 */


function getErrorMessages(validationResult, resolverArgs, messagesSchema) {
  if (!messagesSchema) {
    return;
  }

  var messagesResolversPaths = validationResult.rejectedRules.map(_getResolvePaths["default"]);
  /**
   * Iterates over the list of message resolver paths and resolves
   * each path at its place. Then prunes the results, filtering out
   * only the relevant message(s) based on the rejected rule(s) priority.
   */

  return (0, _pruneMessages["default"])(messagesResolversPaths.map(createResolveIterator(validationResult, resolverArgs, messagesSchema)));
}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getResolvePaths;

var _prepend2 = _interopRequireDefault(__webpack_require__(185));

var _when2 = _interopRequireDefault(__webpack_require__(46));

var _compose2 = _interopRequireDefault(__webpack_require__(4));

var _ensureLength = _interopRequireDefault(__webpack_require__(186));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var namedRuleResolver = function namedRuleResolver(rejectedRule, fieldProps) {
  return [rejectedRule.selector, fieldProps[rejectedRule.selector], 'rule', rejectedRule.name];
};

var commonKeyPathGetters = [function nameResolver(rejectedRule, fieldProps) {
  return ['name', fieldProps.name, rejectedRule.errorType];
}, function typeResolver(rejectedRule, fieldProps) {
  return ['type', fieldProps.type, rejectedRule.errorType];
}, function generalResolver(rejectedRule) {
  return ['general', rejectedRule.errorType];
}];

var isNamedRule = function isNamedRule(rejectedRule) {
  return function () {
    return !!rejectedRule.name;
  };
};
/**
 * Returns the starting position of the key getters relevant
 * to the given rejected rule. Depending on the rule's selector,
 * resolving sequence may start at "name" resolver, or at the "type" one.
 */


var getStartPos = function getStartPos(rejectedRule) {
  return rejectedRule.selector === 'name' ? 0 : 1;
};
/**
 * Returns the list of key getters starting from the given position
 * in the list of common key getters.
 */


var geKeyResolvers = function geKeyResolvers(startPos) {
  return commonKeyPathGetters.slice(startPos);
};

var getResolverPaths = function getResolverPaths(rejectedRule) {
  return (0, _compose2["default"])((0, _ensureLength["default"])(4), (0, _when2["default"])(isNamedRule(rejectedRule), (0, _prepend2["default"])(namedRuleResolver)), geKeyResolvers, getStartPos)(rejectedRule);
};

function getResolvePaths(rejectedRule) {
  return [rejectedRule, getResolverPaths(rejectedRule)];
}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = /*#__PURE__*/__webpack_require__(43);

var _curry2 = /*#__PURE__*/__webpack_require__(0);

/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */


var prepend = /*#__PURE__*/_curry2(function prepend(el, list) {
  return _concat([el], list);
});
module.exports = prepend;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ensureLength;

var _concat = _interopRequireDefault(__webpack_require__(187));

var _repeat = _interopRequireDefault(__webpack_require__(194));

var _subtract = _interopRequireDefault(__webpack_require__(196));

var _length = _interopRequireDefault(__webpack_require__(197));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Prepends "null" until the length of the given array matches
 * the requested minimal length.
 */
function ensureLength(minLength) {
  return function (arr) {
    return (0, _concat["default"])((0, _repeat["default"])(null, (0, _subtract["default"])(minLength, (0, _length["default"])(arr))))(arr);
  };
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _isArray = /*#__PURE__*/__webpack_require__(13);

var _isFunction = /*#__PURE__*/__webpack_require__(188);

var _isString = /*#__PURE__*/__webpack_require__(21);

var toString = /*#__PURE__*/__webpack_require__(189);

/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 * Can also concatenate two members of a [fantasy-land
 * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */


var concat = /*#__PURE__*/_curry2(function concat(a, b) {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b);
    }
    throw new TypeError(toString(b) + ' is not an array');
  }
  if (_isString(a)) {
    if (_isString(b)) {
      return a + b;
    }
    throw new TypeError(toString(b) + ' is not a string');
  }
  if (a != null && _isFunction(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }
  if (a != null && _isFunction(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(toString(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
module.exports = concat;

/***/ }),
/* 188 */
/***/ (function(module, exports) {

function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
}
module.exports = _isFunction;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var _toString = /*#__PURE__*/__webpack_require__(190);

/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */


var toString = /*#__PURE__*/_curry1(function toString(val) {
  return _toString(val, []);
});
module.exports = toString;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var _includes = /*#__PURE__*/__webpack_require__(91);

var _map = /*#__PURE__*/__webpack_require__(62);

var _quote = /*#__PURE__*/__webpack_require__(192);

var _toISOString = /*#__PURE__*/__webpack_require__(193);

var keys = /*#__PURE__*/__webpack_require__(16);

var reject = /*#__PURE__*/__webpack_require__(34);

function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _includes(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function (obj, keys) {
    return _map(function (k) {
      return _quote(k) + ': ' + recur(obj[k]);
    }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
        return (/^\d+$/.test(k)
        );
      }, keys(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
}
module.exports = _toString;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var equals = /*#__PURE__*/__webpack_require__(24);

function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}
module.exports = _indexOf;

/***/ }),
/* 192 */
/***/ (function(module, exports) {

function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
}
module.exports = _quote;

/***/ }),
/* 193 */
/***/ (function(module, exports) {

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};

var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

module.exports = _toISOString;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var always = /*#__PURE__*/__webpack_require__(32);

var times = /*#__PURE__*/__webpack_require__(195);

/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      const obj = {};
 *      const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */


var repeat = /*#__PURE__*/_curry2(function repeat(value, n) {
  return times(always(value), n);
});
module.exports = repeat;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */


var times = /*#__PURE__*/_curry2(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});
module.exports = times;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      const minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      const complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */


var subtract = /*#__PURE__*/_curry2(function subtract(a, b) {
  return Number(a) - Number(b);
});
module.exports = subtract;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var _isNumber = /*#__PURE__*/__webpack_require__(198);

/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */


var length = /*#__PURE__*/_curry1(function length(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});
module.exports = length;

/***/ }),
/* 198 */
/***/ (function(module, exports) {

function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}
module.exports = _isNumber;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolveMessage;

var _dispatch = _interopRequireDefault(__webpack_require__(8));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Accepts a resolvable, which can be a Function or a String
 * and returns a resolved message string.
 */
function resolveMessage(resolvable, resolverArgs) {
  return typeof resolvable === 'function' ? (0, _dispatch["default"])(resolvable, resolverArgs) : resolvable;
}

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _transpose2 = _interopRequireDefault(__webpack_require__(201));

var _isNil2 = _interopRequireDefault(__webpack_require__(14));

var _reject2 = _interopRequireDefault(__webpack_require__(34));

var _uniq2 = _interopRequireDefault(__webpack_require__(202));

var _map2 = _interopRequireDefault(__webpack_require__(9));

var _compose2 = _interopRequireDefault(__webpack_require__(4));

var _find2 = _interopRequireDefault(__webpack_require__(207));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firstValueOfList = (0, _find2["default"])(function (value) {
  return !!value;
});
/**
 * Transposes the array of arrays of error messages,
 * groupes them by their resolving key group/priority,
 * removes "null" placeholders and "undefined" messages,
 * and returns the first messages group that is not empty.
 */

var pruneMessages = (0, _compose2["default"])((0, _find2["default"])(firstValueOfList), (0, _map2["default"])((0, _compose2["default"])(_uniq2["default"], (0, _reject2["default"])(_isNil2["default"]))), _transpose2["default"]);
var _default = pruneMessages;
exports["default"] = _default;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 *      // If some of the rows are shorter than the following rows, their elements are skipped:
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */


var transpose = /*#__PURE__*/_curry1(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});
module.exports = transpose;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var identity = /*#__PURE__*/__webpack_require__(203);

var uniqBy = /*#__PURE__*/__webpack_require__(205);

/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */


var uniq = /*#__PURE__*/uniqBy(identity);
module.exports = uniq;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = /*#__PURE__*/__webpack_require__(1);

var _identity = /*#__PURE__*/__webpack_require__(204);

/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      const obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */


var identity = /*#__PURE__*/_curry1(_identity);
module.exports = identity;

/***/ }),
/* 204 */
/***/ (function(module, exports) {

function _identity(x) {
  return x;
}
module.exports = _identity;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var _Set = /*#__PURE__*/__webpack_require__(206);

var _curry2 = /*#__PURE__*/__webpack_require__(0);

/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */


var uniqBy = /*#__PURE__*/_curry2(function uniqBy(fn, list) {
  var set = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});
module.exports = uniqBy;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var _includes = /*#__PURE__*/__webpack_require__(91);

var _Set = /*#__PURE__*/function () {

  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  return _Set;
}();

function hasOrAdd(item, shouldAdd, set) {
  var type = typeof item;
  var prevSize, newSize;
  switch (type) {
    case 'string':
    case 'number':
      // distinguish between +0 and -0
      if (item === 0 && 1 / item === -Infinity) {
        if (set._items['-0']) {
          return true;
        } else {
          if (shouldAdd) {
            set._items['-0'] = true;
          }
          return false;
        }
      }
      // these types can all utilise the native Set
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = {};
            set._items[type][item] = true;
          }
          return false;
        } else if (item in set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][item] = true;
          }
          return false;
        }
      }

    case 'boolean':
      // set._items['boolean'] holds a two element array
      // representing [ falseExists, trueExists ]
      if (type in set._items) {
        var bIdx = item ? 1 : 0;
        if (set._items[type][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set._items[type] = item ? [false, true] : [true, false];
        }
        return false;
      }

    case 'function':
      // compare functions for reference equality
      if (set._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set._nativeSet.size;
          set._nativeSet.add(item);
          newSize = set._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set._nativeSet.has(item);
        }
      } else {
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        if (!_includes(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
      }

    case 'undefined':
      if (set._items[type]) {
        return true;
      } else {
        if (shouldAdd) {
          set._items[type] = true;
        }
        return false;
      }

    case 'object':
      if (item === null) {
        if (!set._items['null']) {
          if (shouldAdd) {
            set._items['null'] = true;
          }
          return false;
        }
        return true;
      }
    /* falls through */
    default:
      // reduce the search size of heterogeneous sets by creating buckets
      // for each type.
      type = Object.prototype.toString.call(item);
      if (!(type in set._items)) {
        if (shouldAdd) {
          set._items[type] = [item];
        }
        return false;
      }
      // scan through all previously applied items
      if (!_includes(item, set._items[type])) {
        if (shouldAdd) {
          set._items[type].push(item);
        }
        return false;
      }
      return true;
  }
}

// A simple Set type that honours R.equals semantics
module.exports = _Set;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _dispatchable = /*#__PURE__*/__webpack_require__(30);

var _xfind = /*#__PURE__*/__webpack_require__(208);

/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      const xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */


var find = /*#__PURE__*/_curry2( /*#__PURE__*/_dispatchable(['find'], _xfind, function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));
module.exports = find;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = /*#__PURE__*/__webpack_require__(0);

var _reduced = /*#__PURE__*/__webpack_require__(209);

var _xfBase = /*#__PURE__*/__webpack_require__(31);

var XFind = /*#__PURE__*/function () {

  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = _xfBase.init;
  XFind.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };

  return XFind;
}();

var _xfind = /*#__PURE__*/_curry2(function _xfind(f, xf) {
  return new XFind(f, xf);
});
module.exports = _xfind;

/***/ }),
/* 209 */
/***/ (function(module, exports) {

function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x : {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
}
module.exports = _reduced;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleFieldBlur;

var _compose2 = _interopRequireDefault(__webpack_require__(4));

var _dispatch = _interopRequireDefault(__webpack_require__(8));

var recordUtils = _interopRequireWildcard(__webpack_require__(3));

var _validateField = _interopRequireDefault(__webpack_require__(57));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function handleFieldBlur(_x, _x2, _x3) {
  return _handleFieldBlur.apply(this, arguments);
}

function _handleFieldBlur() {
  _handleFieldBlur = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref, fields, form) {
    var event, fieldProps, updatedFieldProps, validatedFieldProps, nextFields;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event = _ref.event, fieldProps = _ref.fieldProps;
            updatedFieldProps = (0, _compose2["default"])(recordUtils.setTouched(true), recordUtils.setFocused(false))(fieldProps);
            _context.next = 4;
            return (0, _validateField["default"])({
              fieldProps: updatedFieldProps,
              fields: fields,
              form: form
            });

          case 4:
            validatedFieldProps = _context.sent;
            nextFields = recordUtils.updateCollectionWith(validatedFieldProps, fields);
            (0, _dispatch["default"])(fieldProps.onBlur, {
              event: event,
              fieldProps: validatedFieldProps,
              fields: nextFields,
              form: form
            });
            return _context.abrupt("return", {
              nextFieldProps: validatedFieldProps,
              nextFields: nextFields
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleFieldBlur.apply(this, arguments);
}

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _equals2 = _interopRequireDefault(__webpack_require__(24));

var _type2 = _interopRequireDefault(__webpack_require__(83));

var _curry2 = _interopRequireDefault(__webpack_require__(7));

var _deriveWith = _interopRequireDefault(__webpack_require__(212));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var deriveDeepWith = (0, _curry2["default"])(function (fn, lObj, rObj) {
  return (0, _deriveWith["default"])(function (key, lVal, rVal) {
    if ([(0, _type2["default"])(lVal), (0, _type2["default"])(rVal)].every((0, _equals2["default"])('Object'))) {
      return deriveDeepWith(fn, lVal, rVal);
    }

    return fn(key, lVal, rVal);
  }, lObj, rObj);
});
var _default = deriveDeepWith;
exports["default"] = _default;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _assoc2 = _interopRequireDefault(__webpack_require__(6));

var _curry2 = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var deriveWith = (0, _curry2["default"])(function (fn, lObj, rObj) {
  return Object.keys(lObj).reduce(function (result, key) {
    return lObj.hasOwnProperty(key) && rObj.hasOwnProperty(key) ? (0, _assoc2["default"])(key, fn(key, lObj[key], rObj[key]), result) : result;
  }, {});
});
var _default = deriveWith;
exports["default"] = _default;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function get() {
    return _Field["default"];
  }
});

var _Field = _interopRequireDefault(__webpack_require__(214));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(18));

var _propTypes = _interopRequireDefault(__webpack_require__(19));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Group =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Group, _React$Component);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, _getPrototypeOf(Group).apply(this, arguments));
  }

  _createClass(Group, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this$props = this.props,
          name = _this$props.name,
          exact = _this$props.exact;
      var parentGroupName = this.context.fieldGroup || [];
      return {
        fieldGroup: exact ? [name] : parentGroupName.concat(name)
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return Group;
}(_react["default"].Component);

exports["default"] = Group;

_defineProperty(Group, "displayName", 'Field.Group');

_defineProperty(Group, "propTypes", {
  name: _propTypes["default"].string.isRequired,
  exact: _propTypes["default"].bool
});

_defineProperty(Group, "contextTypes", {
  fieldGroup: _propTypes["default"].arrayOf(_propTypes["default"].string)
});

_defineProperty(Group, "childContextTypes", {
  fieldGroup: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired
});

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Condition;

var _propTypes = _interopRequireDefault(__webpack_require__(19));

var _utils = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Condition(props, context) {
  var fields = context.fields,
      form = context.form;
  var children = props.children,
      when = props.when;
  /* Resolve the condition in order to render the children */

  var serializedFields = _utils.fieldUtils.serializeFields(fields);

  var shouldRenderChildren = when({
    fields: serializedFields,
    form: form
  });
  return shouldRenderChildren ? children : null;
}

Condition.propTypes = {
  when: _propTypes["default"].func.isRequired
};
Condition.contextTypes = {
  fields: _propTypes["default"].object.isRequired,
  form: _propTypes["default"].object.isRequired
};

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "input", {
  enumerable: true,
  get: function get() {
    return _input2["default"];
  }
});
Object.defineProperty(exports, "radio", {
  enumerable: true,
  get: function get() {
    return _radio2["default"];
  }
});
Object.defineProperty(exports, "select", {
  enumerable: true,
  get: function get() {
    return _select2["default"];
  }
});
Object.defineProperty(exports, "checkbox", {
  enumerable: true,
  get: function get() {
    return _checkbox2["default"];
  }
});
Object.defineProperty(exports, "textarea", {
  enumerable: true,
  get: function get() {
    return _textarea2["default"];
  }
});

var _input2 = _interopRequireDefault(__webpack_require__(217));

var _radio2 = _interopRequireDefault(__webpack_require__(218));

var _select2 = _interopRequireDefault(__webpack_require__(219));

var _checkbox2 = _interopRequireDefault(__webpack_require__(220));

var _textarea2 = _interopRequireDefault(__webpack_require__(221));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  mapPropsToField: function mapPropsToField(_ref) {
    var props = _ref.props,
        fieldRecord = _ref.fieldRecord;
    return _objectSpread({}, fieldRecord, {
      type: props.type || 'text'
    });
  },
  enforceProps: function enforceProps(_ref2) {
    var props = _ref2.props;
    return {
      accept: props.accept,
      placeholder: props.placeholder,
      maxLength: props.maxLength,
      autoComplete: props.autoComplete,
      multiple: props.multiple,
      step: props.step
    };
  }
};
exports["default"] = _default;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _assoc2 = _interopRequireDefault(__webpack_require__(6));

var _path2 = _interopRequireDefault(__webpack_require__(2));

var recordUtils = _interopRequireWildcard(__webpack_require__(3));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  /**
   * There can be multiple radio fields with the same name represented by
   * a single field record entry in the form's state.
   */
  allowMultiple: true,

  /**
   * Handling of contextProps of Radio inputs is unique.
   * 1. Never pass "props.value" to context. <Field.Radio> is always expected
   * to receive a "value" prop, however it should never set it to context on
   * registration. The value in the context will be changed according to the
   * onChange handlers in the future.
   * 2. Determine "initialValue" based on optional "checked" prop.
   * 3. Add new "checked" props unique to this field type.
   */
  mapPropsToField: function mapPropsToField(_ref) {
    var fieldRecord = _ref.fieldRecord,
        _ref$props = _ref.props,
        checked = _ref$props.checked,
        value = _ref$props.value,
        onChange = _ref$props.onChange;
    fieldRecord.type = 'radio';
    fieldRecord.controlled = !!onChange;
    delete fieldRecord.initialValue;

    if (checked) {
      fieldRecord.initialValue = value;
    } else {
      delete fieldRecord.value;
    }

    return fieldRecord;
  },

  /**
   * When the radio field with the same name is already registered, check if it
   * has some value in the record. Only radio fields with "checked" prop
   * propagate their value to the field's record, other radio fields are
   * registered, but their value is ignored.
   */
  beforeRegister: function beforeRegister(_ref2) {
    var fieldProps = _ref2.fieldProps,
        fields = _ref2.fields;
    var fieldPath = fieldProps.fieldPath;
    var existingField = (0, _path2["default"])(fieldPath, fields);

    if (!existingField) {
      return fieldProps;
    }

    var valuePropName = fieldProps.valuePropName;
    var existingValue = recordUtils.getValue(existingField);

    if (existingValue) {
      return false;
    }

    var fieldValue = recordUtils.getValue(fieldProps);
    return fieldValue ? (0, _assoc2["default"])(valuePropName, fieldValue, fieldProps) : fieldProps;
  },

  /**
   * Should update record.
   * Determines when it is needed to execute the native
   * "Form.handleFieldChange" during the "Field.componentWillReceiveProps"
   * for controlled fields.
   *
   * This is needed for the Radio field since on
   * "Field.componentWillReceiveProps" the "prevValue" and "nextValue" will
   * always be the same - Radio field controlled updates do NOT update the
   * value, but a "checked" prop. Regardless, what should be compared is the
   * next value and the current value in the field's record.
   */
  shouldUpdateRecord: function shouldUpdateRecord(_ref3) {
    var nextValue = _ref3.nextValue,
        nextProps = _ref3.nextProps,
        contextProps = _ref3.contextProps;
    return nextProps.checked && nextValue !== contextProps.value;
  },
  enforceProps: function enforceProps(_ref4) {
    var props = _ref4.props,
        contextProps = _ref4.contextProps;
    return {
      value: props.value,
      checked: contextProps.controlled ? props.checked : props.value === contextProps.value
    };
  }
};
exports["default"] = _default;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  mapPropsToField: function mapPropsToField(_ref) {
    var fieldRecord = _ref.fieldRecord,
        _ref$props = _ref.props,
        children = _ref$props.children,
        initialValue = _ref$props.initialValue;
    return _objectSpread({}, fieldRecord, {
      initialValue: initialValue || children && children[0] && children[0].value
    });
  },
  enforceProps: function enforceProps(_ref2) {
    var props = _ref2.props;
    return {
      multiple: props.multiple,
      size: props.size
    };
  }
};
exports["default"] = _default;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  valuePropName: 'checked',
  initialValue: false,
  mapPropsToField: function mapPropsToField(_ref) {
    var _ref$props = _ref.props,
        checked = _ref$props.checked,
        initialValue = _ref$props.initialValue,
        fieldRecord = _ref.fieldRecord;
    return _objectSpread({}, fieldRecord, {
      type: 'checkbox',
      checked: !!initialValue || !!checked
    });
  },
  enforceProps: function enforceProps(_ref2) {
    var contextProps = _ref2.contextProps;
    return {
      checked: contextProps.checked
    };
  },
  shouldValidateOnMount: function shouldValidateOnMount() {
    return false;
  }
};
exports["default"] = _default;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  enforceProps: function enforceProps(_ref) {
    var props = _ref.props;
    return {
      cols: props.cols,
      rows: props.rows,
      maxLength: props.maxLength,
      placeholder: props.placeholder,
      wrap: props.wrap
    };
  }
};
exports["default"] = _default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map