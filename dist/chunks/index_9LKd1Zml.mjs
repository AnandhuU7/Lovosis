import { r as requirePostcss, p as postcss, i as h, D as Declaration, t as toHtml, j as addClassName$1, s as setInlineStyle$1 } from './Code_DWUd9siu.mjs';
import { K as requireCssesc, O as getDefaultExportFromCjs } from './astro/server_wnk5HujF.mjs';
import require$$0 from 'util';

var postcssNested$1 = {exports: {}};

var dist = {exports: {}};

var processor$1 = {exports: {}};

var parser = {exports: {}};

var root = {exports: {}};

var container = {exports: {}};

var node$1 = {exports: {}};

var util = {};

var unesc = {exports: {}};

var hasRequiredUnesc;

function requireUnesc () {
	if (hasRequiredUnesc) return unesc.exports;
	hasRequiredUnesc = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = unesc;
		// Many thanks for this post which made this migration much easier.
		// https://mathiasbynens.be/notes/css-escapes

		/**
		 * 
		 * @param {string} str 
		 * @returns {[string, number]|undefined}
		 */
		function gobbleHex(str) {
		  var lower = str.toLowerCase();
		  var hex = '';
		  var spaceTerminated = false;
		  for (var i = 0; i < 6 && lower[i] !== undefined; i++) {
		    var code = lower.charCodeAt(i);
		    // check to see if we are dealing with a valid hex char [a-f|0-9]
		    var valid = code >= 97 && code <= 102 || code >= 48 && code <= 57;
		    // https://drafts.csswg.org/css-syntax/#consume-escaped-code-point
		    spaceTerminated = code === 32;
		    if (!valid) {
		      break;
		    }
		    hex += lower[i];
		  }
		  if (hex.length === 0) {
		    return undefined;
		  }
		  var codePoint = parseInt(hex, 16);
		  var isSurrogate = codePoint >= 0xD800 && codePoint <= 0xDFFF;
		  // Add special case for
		  // "If this number is zero, or is for a surrogate, or is greater than the maximum allowed code point"
		  // https://drafts.csswg.org/css-syntax/#maximum-allowed-code-point
		  if (isSurrogate || codePoint === 0x0000 || codePoint > 0x10FFFF) {
		    return ["\uFFFD", hex.length + (spaceTerminated ? 1 : 0)];
		  }
		  return [String.fromCodePoint(codePoint), hex.length + (spaceTerminated ? 1 : 0)];
		}
		var CONTAINS_ESCAPE = /\\/;
		function unesc(str) {
		  var needToProcess = CONTAINS_ESCAPE.test(str);
		  if (!needToProcess) {
		    return str;
		  }
		  var ret = "";
		  for (var i = 0; i < str.length; i++) {
		    if (str[i] === "\\") {
		      var gobbled = gobbleHex(str.slice(i + 1, i + 7));
		      if (gobbled !== undefined) {
		        ret += gobbled[0];
		        i += gobbled[1];
		        continue;
		      }

		      // Retain a pair of \\ if double escaped `\\\\`
		      // https://github.com/postcss/postcss-selector-parser/commit/268c9a7656fb53f543dc620aa5b73a30ec3ff20e
		      if (str[i + 1] === "\\") {
		        ret += "\\";
		        i++;
		        continue;
		      }

		      // if \\ is at the end of the string retain it
		      // https://github.com/postcss/postcss-selector-parser/commit/01a6b346e3612ce1ab20219acc26abdc259ccefb
		      if (str.length === i + 1) {
		        ret += str[i];
		      }
		      continue;
		    }
		    ret += str[i];
		  }
		  return ret;
		}
		module.exports = exports.default; 
	} (unesc, unesc.exports));
	return unesc.exports;
}

var getProp = {exports: {}};

var hasRequiredGetProp;

function requireGetProp () {
	if (hasRequiredGetProp) return getProp.exports;
	hasRequiredGetProp = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = getProp;
		function getProp(obj) {
		  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		    props[_key - 1] = arguments[_key];
		  }
		  while (props.length > 0) {
		    var prop = props.shift();
		    if (!obj[prop]) {
		      return undefined;
		    }
		    obj = obj[prop];
		  }
		  return obj;
		}
		module.exports = exports.default; 
	} (getProp, getProp.exports));
	return getProp.exports;
}

var ensureObject = {exports: {}};

var hasRequiredEnsureObject;

function requireEnsureObject () {
	if (hasRequiredEnsureObject) return ensureObject.exports;
	hasRequiredEnsureObject = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = ensureObject;
		function ensureObject(obj) {
		  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		    props[_key - 1] = arguments[_key];
		  }
		  while (props.length > 0) {
		    var prop = props.shift();
		    if (!obj[prop]) {
		      obj[prop] = {};
		    }
		    obj = obj[prop];
		  }
		}
		module.exports = exports.default; 
	} (ensureObject, ensureObject.exports));
	return ensureObject.exports;
}

var stripComments = {exports: {}};

var hasRequiredStripComments;

function requireStripComments () {
	if (hasRequiredStripComments) return stripComments.exports;
	hasRequiredStripComments = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = stripComments;
		function stripComments(str) {
		  var s = "";
		  var commentStart = str.indexOf("/*");
		  var lastEnd = 0;
		  while (commentStart >= 0) {
		    s = s + str.slice(lastEnd, commentStart);
		    var commentEnd = str.indexOf("*/", commentStart + 2);
		    if (commentEnd < 0) {
		      return s;
		    }
		    lastEnd = commentEnd + 2;
		    commentStart = str.indexOf("/*", lastEnd);
		  }
		  s = s + str.slice(lastEnd);
		  return s;
		}
		module.exports = exports.default; 
	} (stripComments, stripComments.exports));
	return stripComments.exports;
}

var hasRequiredUtil;

function requireUtil () {
	if (hasRequiredUtil) return util;
	hasRequiredUtil = 1;

	util.__esModule = true;
	util.unesc = util.stripComments = util.getProp = util.ensureObject = undefined;
	var _unesc = _interopRequireDefault(requireUnesc());
	util.unesc = _unesc["default"];
	var _getProp = _interopRequireDefault(requireGetProp());
	util.getProp = _getProp["default"];
	var _ensureObject = _interopRequireDefault(requireEnsureObject());
	util.ensureObject = _ensureObject["default"];
	var _stripComments = _interopRequireDefault(requireStripComments());
	util.stripComments = _stripComments["default"];
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	return util;
}

var hasRequiredNode$1;

function requireNode$1 () {
	if (hasRequiredNode$1) return node$1.exports;
	hasRequiredNode$1 = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _util = requireUtil();
		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
		var cloneNode = function cloneNode(obj, parent) {
		  if (typeof obj !== 'object' || obj === null) {
		    return obj;
		  }
		  var cloned = new obj.constructor();
		  for (var i in obj) {
		    if (!obj.hasOwnProperty(i)) {
		      continue;
		    }
		    var value = obj[i];
		    var type = typeof value;
		    if (i === 'parent' && type === 'object') {
		      if (parent) {
		        cloned[i] = parent;
		      }
		    } else if (value instanceof Array) {
		      cloned[i] = value.map(function (j) {
		        return cloneNode(j, cloned);
		      });
		    } else {
		      cloned[i] = cloneNode(value, cloned);
		    }
		  }
		  return cloned;
		};
		var Node = /*#__PURE__*/function () {
		  function Node(opts) {
		    if (opts === undefined) {
		      opts = {};
		    }
		    Object.assign(this, opts);
		    this.spaces = this.spaces || {};
		    this.spaces.before = this.spaces.before || '';
		    this.spaces.after = this.spaces.after || '';
		  }
		  var _proto = Node.prototype;
		  _proto.remove = function remove() {
		    if (this.parent) {
		      this.parent.removeChild(this);
		    }
		    this.parent = undefined;
		    return this;
		  };
		  _proto.replaceWith = function replaceWith() {
		    if (this.parent) {
		      for (var index in arguments) {
		        this.parent.insertBefore(this, arguments[index]);
		      }
		      this.remove();
		    }
		    return this;
		  };
		  _proto.next = function next() {
		    return this.parent.at(this.parent.index(this) + 1);
		  };
		  _proto.prev = function prev() {
		    return this.parent.at(this.parent.index(this) - 1);
		  };
		  _proto.clone = function clone(overrides) {
		    if (overrides === undefined) {
		      overrides = {};
		    }
		    var cloned = cloneNode(this);
		    for (var name in overrides) {
		      cloned[name] = overrides[name];
		    }
		    return cloned;
		  }

		  /**
		   * Some non-standard syntax doesn't follow normal escaping rules for css.
		   * This allows non standard syntax to be appended to an existing property
		   * by specifying the escaped value. By specifying the escaped value,
		   * illegal characters are allowed to be directly inserted into css output.
		   * @param {string} name the property to set
		   * @param {any} value the unescaped value of the property
		   * @param {string} valueEscaped optional. the escaped value of the property.
		   */;
		  _proto.appendToPropertyAndEscape = function appendToPropertyAndEscape(name, value, valueEscaped) {
		    if (!this.raws) {
		      this.raws = {};
		    }
		    var originalValue = this[name];
		    var originalEscaped = this.raws[name];
		    this[name] = originalValue + value; // this may trigger a setter that updates raws, so it has to be set first.
		    if (originalEscaped || valueEscaped !== value) {
		      this.raws[name] = (originalEscaped || originalValue) + valueEscaped;
		    } else {
		      delete this.raws[name]; // delete any escaped value that was created by the setter.
		    }
		  }

		  /**
		   * Some non-standard syntax doesn't follow normal escaping rules for css.
		   * This allows the escaped value to be specified directly, allowing illegal
		   * characters to be directly inserted into css output.
		   * @param {string} name the property to set
		   * @param {any} value the unescaped value of the property
		   * @param {string} valueEscaped the escaped value of the property.
		   */;
		  _proto.setPropertyAndEscape = function setPropertyAndEscape(name, value, valueEscaped) {
		    if (!this.raws) {
		      this.raws = {};
		    }
		    this[name] = value; // this may trigger a setter that updates raws, so it has to be set first.
		    this.raws[name] = valueEscaped;
		  }

		  /**
		   * When you want a value to passed through to CSS directly. This method
		   * deletes the corresponding raw value causing the stringifier to fallback
		   * to the unescaped value.
		   * @param {string} name the property to set.
		   * @param {any} value The value that is both escaped and unescaped.
		   */;
		  _proto.setPropertyWithoutEscape = function setPropertyWithoutEscape(name, value) {
		    this[name] = value; // this may trigger a setter that updates raws, so it has to be set first.
		    if (this.raws) {
		      delete this.raws[name];
		    }
		  }

		  /**
		   *
		   * @param {number} line The number (starting with 1)
		   * @param {number} column The column number (starting with 1)
		   */;
		  _proto.isAtPosition = function isAtPosition(line, column) {
		    if (this.source && this.source.start && this.source.end) {
		      if (this.source.start.line > line) {
		        return false;
		      }
		      if (this.source.end.line < line) {
		        return false;
		      }
		      if (this.source.start.line === line && this.source.start.column > column) {
		        return false;
		      }
		      if (this.source.end.line === line && this.source.end.column < column) {
		        return false;
		      }
		      return true;
		    }
		    return undefined;
		  };
		  _proto.stringifyProperty = function stringifyProperty(name) {
		    return this.raws && this.raws[name] || this[name];
		  };
		  _proto.valueToString = function valueToString() {
		    return String(this.stringifyProperty("value"));
		  };
		  _proto.toString = function toString() {
		    return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join('');
		  };
		  _createClass(Node, [{
		    key: "rawSpaceBefore",
		    get: function get() {
		      var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.before;
		      if (rawSpace === undefined) {
		        rawSpace = this.spaces && this.spaces.before;
		      }
		      return rawSpace || "";
		    },
		    set: function set(raw) {
		      (0, _util.ensureObject)(this, "raws", "spaces");
		      this.raws.spaces.before = raw;
		    }
		  }, {
		    key: "rawSpaceAfter",
		    get: function get() {
		      var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.after;
		      if (rawSpace === undefined) {
		        rawSpace = this.spaces.after;
		      }
		      return rawSpace || "";
		    },
		    set: function set(raw) {
		      (0, _util.ensureObject)(this, "raws", "spaces");
		      this.raws.spaces.after = raw;
		    }
		  }]);
		  return Node;
		}();
		exports["default"] = Node;
		module.exports = exports.default; 
	} (node$1, node$1.exports));
	return node$1.exports;
}

var types = {};

var hasRequiredTypes;

function requireTypes () {
	if (hasRequiredTypes) return types;
	hasRequiredTypes = 1;

	types.__esModule = true;
	types.UNIVERSAL = types.TAG = types.STRING = types.SELECTOR = types.ROOT = types.PSEUDO = types.NESTING = types.ID = types.COMMENT = types.COMBINATOR = types.CLASS = types.ATTRIBUTE = undefined;
	var TAG = 'tag';
	types.TAG = TAG;
	var STRING = 'string';
	types.STRING = STRING;
	var SELECTOR = 'selector';
	types.SELECTOR = SELECTOR;
	var ROOT = 'root';
	types.ROOT = ROOT;
	var PSEUDO = 'pseudo';
	types.PSEUDO = PSEUDO;
	var NESTING = 'nesting';
	types.NESTING = NESTING;
	var ID = 'id';
	types.ID = ID;
	var COMMENT = 'comment';
	types.COMMENT = COMMENT;
	var COMBINATOR = 'combinator';
	types.COMBINATOR = COMBINATOR;
	var CLASS = 'class';
	types.CLASS = CLASS;
	var ATTRIBUTE = 'attribute';
	types.ATTRIBUTE = ATTRIBUTE;
	var UNIVERSAL = 'universal';
	types.UNIVERSAL = UNIVERSAL;
	return types;
}

var hasRequiredContainer;

function requireContainer () {
	if (hasRequiredContainer) return container.exports;
	hasRequiredContainer = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _node = _interopRequireDefault(requireNode$1());
		var types = _interopRequireWildcard(requireTypes());
		function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
		function _interopRequireWildcard(obj, nodeInterop) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike) { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
		function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
		function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var Container = /*#__PURE__*/function (_Node) {
		  _inheritsLoose(Container, _Node);
		  function Container(opts) {
		    var _this;
		    _this = _Node.call(this, opts) || this;
		    if (!_this.nodes) {
		      _this.nodes = [];
		    }
		    return _this;
		  }
		  var _proto = Container.prototype;
		  _proto.append = function append(selector) {
		    selector.parent = this;
		    this.nodes.push(selector);
		    return this;
		  };
		  _proto.prepend = function prepend(selector) {
		    selector.parent = this;
		    this.nodes.unshift(selector);
		    return this;
		  };
		  _proto.at = function at(index) {
		    return this.nodes[index];
		  };
		  _proto.index = function index(child) {
		    if (typeof child === 'number') {
		      return child;
		    }
		    return this.nodes.indexOf(child);
		  };
		  _proto.removeChild = function removeChild(child) {
		    child = this.index(child);
		    this.at(child).parent = undefined;
		    this.nodes.splice(child, 1);
		    var index;
		    for (var id in this.indexes) {
		      index = this.indexes[id];
		      if (index >= child) {
		        this.indexes[id] = index - 1;
		      }
		    }
		    return this;
		  };
		  _proto.removeAll = function removeAll() {
		    for (var _iterator = _createForOfIteratorHelperLoose(this.nodes), _step; !(_step = _iterator()).done;) {
		      var node = _step.value;
		      node.parent = undefined;
		    }
		    this.nodes = [];
		    return this;
		  };
		  _proto.empty = function empty() {
		    return this.removeAll();
		  };
		  _proto.insertAfter = function insertAfter(oldNode, newNode) {
		    newNode.parent = this;
		    var oldIndex = this.index(oldNode);
		    this.nodes.splice(oldIndex + 1, 0, newNode);
		    newNode.parent = this;
		    var index;
		    for (var id in this.indexes) {
		      index = this.indexes[id];
		      if (oldIndex <= index) {
		        this.indexes[id] = index + 1;
		      }
		    }
		    return this;
		  };
		  _proto.insertBefore = function insertBefore(oldNode, newNode) {
		    newNode.parent = this;
		    var oldIndex = this.index(oldNode);
		    this.nodes.splice(oldIndex, 0, newNode);
		    newNode.parent = this;
		    var index;
		    for (var id in this.indexes) {
		      index = this.indexes[id];
		      if (index <= oldIndex) {
		        this.indexes[id] = index + 1;
		      }
		    }
		    return this;
		  };
		  _proto._findChildAtPosition = function _findChildAtPosition(line, col) {
		    var found = undefined;
		    this.each(function (node) {
		      if (node.atPosition) {
		        var foundChild = node.atPosition(line, col);
		        if (foundChild) {
		          found = foundChild;
		          return false;
		        }
		      } else if (node.isAtPosition(line, col)) {
		        found = node;
		        return false;
		      }
		    });
		    return found;
		  }

		  /**
		   * Return the most specific node at the line and column number given.
		   * The source location is based on the original parsed location, locations aren't
		   * updated as selector nodes are mutated.
		   * 
		   * Note that this location is relative to the location of the first character
		   * of the selector, and not the location of the selector in the overall document
		   * when used in conjunction with postcss.
		   *
		   * If not found, returns undefined.
		   * @param {number} line The line number of the node to find. (1-based index)
		   * @param {number} col  The column number of the node to find. (1-based index)
		   */;
		  _proto.atPosition = function atPosition(line, col) {
		    if (this.isAtPosition(line, col)) {
		      return this._findChildAtPosition(line, col) || this;
		    } else {
		      return undefined;
		    }
		  };
		  _proto._inferEndPosition = function _inferEndPosition() {
		    if (this.last && this.last.source && this.last.source.end) {
		      this.source = this.source || {};
		      this.source.end = this.source.end || {};
		      Object.assign(this.source.end, this.last.source.end);
		    }
		  };
		  _proto.each = function each(callback) {
		    if (!this.lastEach) {
		      this.lastEach = 0;
		    }
		    if (!this.indexes) {
		      this.indexes = {};
		    }
		    this.lastEach++;
		    var id = this.lastEach;
		    this.indexes[id] = 0;
		    if (!this.length) {
		      return undefined;
		    }
		    var index, result;
		    while (this.indexes[id] < this.length) {
		      index = this.indexes[id];
		      result = callback(this.at(index), index);
		      if (result === false) {
		        break;
		      }
		      this.indexes[id] += 1;
		    }
		    delete this.indexes[id];
		    if (result === false) {
		      return false;
		    }
		  };
		  _proto.walk = function walk(callback) {
		    return this.each(function (node, i) {
		      var result = callback(node, i);
		      if (result !== false && node.length) {
		        result = node.walk(callback);
		      }
		      if (result === false) {
		        return false;
		      }
		    });
		  };
		  _proto.walkAttributes = function walkAttributes(callback) {
		    var _this2 = this;
		    return this.walk(function (selector) {
		      if (selector.type === types.ATTRIBUTE) {
		        return callback.call(_this2, selector);
		      }
		    });
		  };
		  _proto.walkClasses = function walkClasses(callback) {
		    var _this3 = this;
		    return this.walk(function (selector) {
		      if (selector.type === types.CLASS) {
		        return callback.call(_this3, selector);
		      }
		    });
		  };
		  _proto.walkCombinators = function walkCombinators(callback) {
		    var _this4 = this;
		    return this.walk(function (selector) {
		      if (selector.type === types.COMBINATOR) {
		        return callback.call(_this4, selector);
		      }
		    });
		  };
		  _proto.walkComments = function walkComments(callback) {
		    var _this5 = this;
		    return this.walk(function (selector) {
		      if (selector.type === types.COMMENT) {
		        return callback.call(_this5, selector);
		      }
		    });
		  };
		  _proto.walkIds = function walkIds(callback) {
		    var _this6 = this;
		    return this.walk(function (selector) {
		      if (selector.type === types.ID) {
		        return callback.call(_this6, selector);
		      }
		    });
		  };
		  _proto.walkNesting = function walkNesting(callback) {
		    var _this7 = this;
		    return this.walk(function (selector) {
		      if (selector.type === types.NESTING) {
		        return callback.call(_this7, selector);
		      }
		    });
		  };
		  _proto.walkPseudos = function walkPseudos(callback) {
		    var _this8 = this;
		    return this.walk(function (selector) {
		      if (selector.type === types.PSEUDO) {
		        return callback.call(_this8, selector);
		      }
		    });
		  };
		  _proto.walkTags = function walkTags(callback) {
		    var _this9 = this;
		    return this.walk(function (selector) {
		      if (selector.type === types.TAG) {
		        return callback.call(_this9, selector);
		      }
		    });
		  };
		  _proto.walkUniversals = function walkUniversals(callback) {
		    var _this10 = this;
		    return this.walk(function (selector) {
		      if (selector.type === types.UNIVERSAL) {
		        return callback.call(_this10, selector);
		      }
		    });
		  };
		  _proto.split = function split(callback) {
		    var _this11 = this;
		    var current = [];
		    return this.reduce(function (memo, node, index) {
		      var split = callback.call(_this11, node);
		      current.push(node);
		      if (split) {
		        memo.push(current);
		        current = [];
		      } else if (index === _this11.length - 1) {
		        memo.push(current);
		      }
		      return memo;
		    }, []);
		  };
		  _proto.map = function map(callback) {
		    return this.nodes.map(callback);
		  };
		  _proto.reduce = function reduce(callback, memo) {
		    return this.nodes.reduce(callback, memo);
		  };
		  _proto.every = function every(callback) {
		    return this.nodes.every(callback);
		  };
		  _proto.some = function some(callback) {
		    return this.nodes.some(callback);
		  };
		  _proto.filter = function filter(callback) {
		    return this.nodes.filter(callback);
		  };
		  _proto.sort = function sort(callback) {
		    return this.nodes.sort(callback);
		  };
		  _proto.toString = function toString() {
		    return this.map(String).join('');
		  };
		  _createClass(Container, [{
		    key: "first",
		    get: function get() {
		      return this.at(0);
		    }
		  }, {
		    key: "last",
		    get: function get() {
		      return this.at(this.length - 1);
		    }
		  }, {
		    key: "length",
		    get: function get() {
		      return this.nodes.length;
		    }
		  }]);
		  return Container;
		}(_node["default"]);
		exports["default"] = Container;
		module.exports = exports.default; 
	} (container, container.exports));
	return container.exports;
}

var hasRequiredRoot;

function requireRoot () {
	if (hasRequiredRoot) return root.exports;
	hasRequiredRoot = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _container = _interopRequireDefault(requireContainer());
		var _types = requireTypes();
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var Root = /*#__PURE__*/function (_Container) {
		  _inheritsLoose(Root, _Container);
		  function Root(opts) {
		    var _this;
		    _this = _Container.call(this, opts) || this;
		    _this.type = _types.ROOT;
		    return _this;
		  }
		  var _proto = Root.prototype;
		  _proto.toString = function toString() {
		    var str = this.reduce(function (memo, selector) {
		      memo.push(String(selector));
		      return memo;
		    }, []).join(',');
		    return this.trailingComma ? str + ',' : str;
		  };
		  _proto.error = function error(message, options) {
		    if (this._error) {
		      return this._error(message, options);
		    } else {
		      return new Error(message);
		    }
		  };
		  _createClass(Root, [{
		    key: "errorGenerator",
		    set: function set(handler) {
		      this._error = handler;
		    }
		  }]);
		  return Root;
		}(_container["default"]);
		exports["default"] = Root;
		module.exports = exports.default; 
	} (root, root.exports));
	return root.exports;
}

var selector = {exports: {}};

var hasRequiredSelector;

function requireSelector () {
	if (hasRequiredSelector) return selector.exports;
	hasRequiredSelector = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _container = _interopRequireDefault(requireContainer());
		var _types = requireTypes();
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var Selector = /*#__PURE__*/function (_Container) {
		  _inheritsLoose(Selector, _Container);
		  function Selector(opts) {
		    var _this;
		    _this = _Container.call(this, opts) || this;
		    _this.type = _types.SELECTOR;
		    return _this;
		  }
		  return Selector;
		}(_container["default"]);
		exports["default"] = Selector;
		module.exports = exports.default; 
	} (selector, selector.exports));
	return selector.exports;
}

var className = {exports: {}};

var hasRequiredClassName;

function requireClassName () {
	if (hasRequiredClassName) return className.exports;
	hasRequiredClassName = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _cssesc = _interopRequireDefault(requireCssesc());
		var _util = requireUtil();
		var _node = _interopRequireDefault(requireNode$1());
		var _types = requireTypes();
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var ClassName = /*#__PURE__*/function (_Node) {
		  _inheritsLoose(ClassName, _Node);
		  function ClassName(opts) {
		    var _this;
		    _this = _Node.call(this, opts) || this;
		    _this.type = _types.CLASS;
		    _this._constructed = true;
		    return _this;
		  }
		  var _proto = ClassName.prototype;
		  _proto.valueToString = function valueToString() {
		    return '.' + _Node.prototype.valueToString.call(this);
		  };
		  _createClass(ClassName, [{
		    key: "value",
		    get: function get() {
		      return this._value;
		    },
		    set: function set(v) {
		      if (this._constructed) {
		        var escaped = (0, _cssesc["default"])(v, {
		          isIdentifier: true
		        });
		        if (escaped !== v) {
		          (0, _util.ensureObject)(this, "raws");
		          this.raws.value = escaped;
		        } else if (this.raws) {
		          delete this.raws.value;
		        }
		      }
		      this._value = v;
		    }
		  }]);
		  return ClassName;
		}(_node["default"]);
		exports["default"] = ClassName;
		module.exports = exports.default; 
	} (className, className.exports));
	return className.exports;
}

var comment = {exports: {}};

var hasRequiredComment;

function requireComment () {
	if (hasRequiredComment) return comment.exports;
	hasRequiredComment = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _node = _interopRequireDefault(requireNode$1());
		var _types = requireTypes();
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var Comment = /*#__PURE__*/function (_Node) {
		  _inheritsLoose(Comment, _Node);
		  function Comment(opts) {
		    var _this;
		    _this = _Node.call(this, opts) || this;
		    _this.type = _types.COMMENT;
		    return _this;
		  }
		  return Comment;
		}(_node["default"]);
		exports["default"] = Comment;
		module.exports = exports.default; 
	} (comment, comment.exports));
	return comment.exports;
}

var id = {exports: {}};

var hasRequiredId;

function requireId () {
	if (hasRequiredId) return id.exports;
	hasRequiredId = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _node = _interopRequireDefault(requireNode$1());
		var _types = requireTypes();
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var ID = /*#__PURE__*/function (_Node) {
		  _inheritsLoose(ID, _Node);
		  function ID(opts) {
		    var _this;
		    _this = _Node.call(this, opts) || this;
		    _this.type = _types.ID;
		    return _this;
		  }
		  var _proto = ID.prototype;
		  _proto.valueToString = function valueToString() {
		    return '#' + _Node.prototype.valueToString.call(this);
		  };
		  return ID;
		}(_node["default"]);
		exports["default"] = ID;
		module.exports = exports.default; 
	} (id, id.exports));
	return id.exports;
}

var tag = {exports: {}};

var namespace = {exports: {}};

var hasRequiredNamespace;

function requireNamespace () {
	if (hasRequiredNamespace) return namespace.exports;
	hasRequiredNamespace = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _cssesc = _interopRequireDefault(requireCssesc());
		var _util = requireUtil();
		var _node = _interopRequireDefault(requireNode$1());
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var Namespace = /*#__PURE__*/function (_Node) {
		  _inheritsLoose(Namespace, _Node);
		  function Namespace() {
		    return _Node.apply(this, arguments) || this;
		  }
		  var _proto = Namespace.prototype;
		  _proto.qualifiedName = function qualifiedName(value) {
		    if (this.namespace) {
		      return this.namespaceString + "|" + value;
		    } else {
		      return value;
		    }
		  };
		  _proto.valueToString = function valueToString() {
		    return this.qualifiedName(_Node.prototype.valueToString.call(this));
		  };
		  _createClass(Namespace, [{
		    key: "namespace",
		    get: function get() {
		      return this._namespace;
		    },
		    set: function set(namespace) {
		      if (namespace === true || namespace === "*" || namespace === "&") {
		        this._namespace = namespace;
		        if (this.raws) {
		          delete this.raws.namespace;
		        }
		        return;
		      }
		      var escaped = (0, _cssesc["default"])(namespace, {
		        isIdentifier: true
		      });
		      this._namespace = namespace;
		      if (escaped !== namespace) {
		        (0, _util.ensureObject)(this, "raws");
		        this.raws.namespace = escaped;
		      } else if (this.raws) {
		        delete this.raws.namespace;
		      }
		    }
		  }, {
		    key: "ns",
		    get: function get() {
		      return this._namespace;
		    },
		    set: function set(namespace) {
		      this.namespace = namespace;
		    }
		  }, {
		    key: "namespaceString",
		    get: function get() {
		      if (this.namespace) {
		        var ns = this.stringifyProperty("namespace");
		        if (ns === true) {
		          return '';
		        } else {
		          return ns;
		        }
		      } else {
		        return '';
		      }
		    }
		  }]);
		  return Namespace;
		}(_node["default"]);
		exports["default"] = Namespace;
		module.exports = exports.default; 
	} (namespace, namespace.exports));
	return namespace.exports;
}

var hasRequiredTag;

function requireTag () {
	if (hasRequiredTag) return tag.exports;
	hasRequiredTag = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _namespace = _interopRequireDefault(requireNamespace());
		var _types = requireTypes();
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var Tag = /*#__PURE__*/function (_Namespace) {
		  _inheritsLoose(Tag, _Namespace);
		  function Tag(opts) {
		    var _this;
		    _this = _Namespace.call(this, opts) || this;
		    _this.type = _types.TAG;
		    return _this;
		  }
		  return Tag;
		}(_namespace["default"]);
		exports["default"] = Tag;
		module.exports = exports.default; 
	} (tag, tag.exports));
	return tag.exports;
}

var string = {exports: {}};

var hasRequiredString;

function requireString () {
	if (hasRequiredString) return string.exports;
	hasRequiredString = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _node = _interopRequireDefault(requireNode$1());
		var _types = requireTypes();
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var String = /*#__PURE__*/function (_Node) {
		  _inheritsLoose(String, _Node);
		  function String(opts) {
		    var _this;
		    _this = _Node.call(this, opts) || this;
		    _this.type = _types.STRING;
		    return _this;
		  }
		  return String;
		}(_node["default"]);
		exports["default"] = String;
		module.exports = exports.default; 
	} (string, string.exports));
	return string.exports;
}

var pseudo = {exports: {}};

var hasRequiredPseudo;

function requirePseudo () {
	if (hasRequiredPseudo) return pseudo.exports;
	hasRequiredPseudo = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _container = _interopRequireDefault(requireContainer());
		var _types = requireTypes();
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var Pseudo = /*#__PURE__*/function (_Container) {
		  _inheritsLoose(Pseudo, _Container);
		  function Pseudo(opts) {
		    var _this;
		    _this = _Container.call(this, opts) || this;
		    _this.type = _types.PSEUDO;
		    return _this;
		  }
		  var _proto = Pseudo.prototype;
		  _proto.toString = function toString() {
		    var params = this.length ? '(' + this.map(String).join(',') + ')' : '';
		    return [this.rawSpaceBefore, this.stringifyProperty("value"), params, this.rawSpaceAfter].join('');
		  };
		  return Pseudo;
		}(_container["default"]);
		exports["default"] = Pseudo;
		module.exports = exports.default; 
	} (pseudo, pseudo.exports));
	return pseudo.exports;
}

var attribute = {};

var node;
var hasRequiredNode;

function requireNode () {
	if (hasRequiredNode) return node;
	hasRequiredNode = 1;
	/**
	 * For Node.js, simply re-export the core `util.deprecate` function.
	 */

	node = require$$0.deprecate;
	return node;
}

var hasRequiredAttribute;

function requireAttribute () {
	if (hasRequiredAttribute) return attribute;
	hasRequiredAttribute = 1;
	(function (exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		exports.unescapeValue = unescapeValue;
		var _cssesc = _interopRequireDefault(requireCssesc());
		var _unesc = _interopRequireDefault(requireUnesc());
		var _namespace = _interopRequireDefault(requireNamespace());
		var _types = requireTypes();
		var _CSSESC_QUOTE_OPTIONS;
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var deprecate = requireNode();
		var WRAPPED_IN_QUOTES = /^('|")([^]*)\1$/;
		var warnOfDeprecatedValueAssignment = deprecate(function () {}, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. " + "Call attribute.setValue() instead.");
		var warnOfDeprecatedQuotedAssignment = deprecate(function () {}, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.");
		var warnOfDeprecatedConstructor = deprecate(function () {}, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
		function unescapeValue(value) {
		  var deprecatedUsage = false;
		  var quoteMark = null;
		  var unescaped = value;
		  var m = unescaped.match(WRAPPED_IN_QUOTES);
		  if (m) {
		    quoteMark = m[1];
		    unescaped = m[2];
		  }
		  unescaped = (0, _unesc["default"])(unescaped);
		  if (unescaped !== value) {
		    deprecatedUsage = true;
		  }
		  return {
		    deprecatedUsage: deprecatedUsage,
		    unescaped: unescaped,
		    quoteMark: quoteMark
		  };
		}
		function handleDeprecatedContructorOpts(opts) {
		  if (opts.quoteMark !== undefined) {
		    return opts;
		  }
		  if (opts.value === undefined) {
		    return opts;
		  }
		  warnOfDeprecatedConstructor();
		  var _unescapeValue = unescapeValue(opts.value),
		    quoteMark = _unescapeValue.quoteMark,
		    unescaped = _unescapeValue.unescaped;
		  if (!opts.raws) {
		    opts.raws = {};
		  }
		  if (opts.raws.value === undefined) {
		    opts.raws.value = opts.value;
		  }
		  opts.value = unescaped;
		  opts.quoteMark = quoteMark;
		  return opts;
		}
		var Attribute = /*#__PURE__*/function (_Namespace) {
		  _inheritsLoose(Attribute, _Namespace);
		  function Attribute(opts) {
		    var _this;
		    if (opts === undefined) {
		      opts = {};
		    }
		    _this = _Namespace.call(this, handleDeprecatedContructorOpts(opts)) || this;
		    _this.type = _types.ATTRIBUTE;
		    _this.raws = _this.raws || {};
		    Object.defineProperty(_this.raws, 'unquoted', {
		      get: deprecate(function () {
		        return _this.value;
		      }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
		      set: deprecate(function () {
		        return _this.value;
		      }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")
		    });
		    _this._constructed = true;
		    return _this;
		  }

		  /**
		   * Returns the Attribute's value quoted such that it would be legal to use
		   * in the value of a css file. The original value's quotation setting
		   * used for stringification is left unchanged. See `setValue(value, options)`
		   * if you want to control the quote settings of a new value for the attribute.
		   *
		   * You can also change the quotation used for the current value by setting quoteMark.
		   *
		   * Options:
		   *   * quoteMark {'"' | "'" | null} - Use this value to quote the value. If this
		   *     option is not set, the original value for quoteMark will be used. If
		   *     indeterminate, a double quote is used. The legal values are:
		   *     * `null` - the value will be unquoted and characters will be escaped as necessary.
		   *     * `'` - the value will be quoted with a single quote and single quotes are escaped.
		   *     * `"` - the value will be quoted with a double quote and double quotes are escaped.
		   *   * preferCurrentQuoteMark {boolean} - if true, prefer the source quote mark
		   *     over the quoteMark option value.
		   *   * smart {boolean} - if true, will select a quote mark based on the value
		   *     and the other options specified here. See the `smartQuoteMark()`
		   *     method.
		   **/
		  var _proto = Attribute.prototype;
		  _proto.getQuotedValue = function getQuotedValue(options) {
		    if (options === undefined) {
		      options = {};
		    }
		    var quoteMark = this._determineQuoteMark(options);
		    var cssescopts = CSSESC_QUOTE_OPTIONS[quoteMark];
		    var escaped = (0, _cssesc["default"])(this._value, cssescopts);
		    return escaped;
		  };
		  _proto._determineQuoteMark = function _determineQuoteMark(options) {
		    return options.smart ? this.smartQuoteMark(options) : this.preferredQuoteMark(options);
		  }

		  /**
		   * Set the unescaped value with the specified quotation options. The value
		   * provided must not include any wrapping quote marks -- those quotes will
		   * be interpreted as part of the value and escaped accordingly.
		   */;
		  _proto.setValue = function setValue(value, options) {
		    if (options === undefined) {
		      options = {};
		    }
		    this._value = value;
		    this._quoteMark = this._determineQuoteMark(options);
		    this._syncRawValue();
		  }

		  /**
		   * Intelligently select a quoteMark value based on the value's contents. If
		   * the value is a legal CSS ident, it will not be quoted. Otherwise a quote
		   * mark will be picked that minimizes the number of escapes.
		   *
		   * If there's no clear winner, the quote mark from these options is used,
		   * then the source quote mark (this is inverted if `preferCurrentQuoteMark` is
		   * true). If the quoteMark is unspecified, a double quote is used.
		   *
		   * @param options This takes the quoteMark and preferCurrentQuoteMark options
		   * from the quoteValue method.
		   */;
		  _proto.smartQuoteMark = function smartQuoteMark(options) {
		    var v = this.value;
		    var numSingleQuotes = v.replace(/[^']/g, '').length;
		    var numDoubleQuotes = v.replace(/[^"]/g, '').length;
		    if (numSingleQuotes + numDoubleQuotes === 0) {
		      var escaped = (0, _cssesc["default"])(v, {
		        isIdentifier: true
		      });
		      if (escaped === v) {
		        return Attribute.NO_QUOTE;
		      } else {
		        var pref = this.preferredQuoteMark(options);
		        if (pref === Attribute.NO_QUOTE) {
		          // pick a quote mark that isn't none and see if it's smaller
		          var quote = this.quoteMark || options.quoteMark || Attribute.DOUBLE_QUOTE;
		          var opts = CSSESC_QUOTE_OPTIONS[quote];
		          var quoteValue = (0, _cssesc["default"])(v, opts);
		          if (quoteValue.length < escaped.length) {
		            return quote;
		          }
		        }
		        return pref;
		      }
		    } else if (numDoubleQuotes === numSingleQuotes) {
		      return this.preferredQuoteMark(options);
		    } else if (numDoubleQuotes < numSingleQuotes) {
		      return Attribute.DOUBLE_QUOTE;
		    } else {
		      return Attribute.SINGLE_QUOTE;
		    }
		  }

		  /**
		   * Selects the preferred quote mark based on the options and the current quote mark value.
		   * If you want the quote mark to depend on the attribute value, call `smartQuoteMark(opts)`
		   * instead.
		   */;
		  _proto.preferredQuoteMark = function preferredQuoteMark(options) {
		    var quoteMark = options.preferCurrentQuoteMark ? this.quoteMark : options.quoteMark;
		    if (quoteMark === undefined) {
		      quoteMark = options.preferCurrentQuoteMark ? options.quoteMark : this.quoteMark;
		    }
		    if (quoteMark === undefined) {
		      quoteMark = Attribute.DOUBLE_QUOTE;
		    }
		    return quoteMark;
		  };
		  _proto._syncRawValue = function _syncRawValue() {
		    var rawValue = (0, _cssesc["default"])(this._value, CSSESC_QUOTE_OPTIONS[this.quoteMark]);
		    if (rawValue === this._value) {
		      if (this.raws) {
		        delete this.raws.value;
		      }
		    } else {
		      this.raws.value = rawValue;
		    }
		  };
		  _proto._handleEscapes = function _handleEscapes(prop, value) {
		    if (this._constructed) {
		      var escaped = (0, _cssesc["default"])(value, {
		        isIdentifier: true
		      });
		      if (escaped !== value) {
		        this.raws[prop] = escaped;
		      } else {
		        delete this.raws[prop];
		      }
		    }
		  };
		  _proto._spacesFor = function _spacesFor(name) {
		    var attrSpaces = {
		      before: '',
		      after: ''
		    };
		    var spaces = this.spaces[name] || {};
		    var rawSpaces = this.raws.spaces && this.raws.spaces[name] || {};
		    return Object.assign(attrSpaces, spaces, rawSpaces);
		  };
		  _proto._stringFor = function _stringFor(name, spaceName, concat) {
		    if (spaceName === undefined) {
		      spaceName = name;
		    }
		    if (concat === undefined) {
		      concat = defaultAttrConcat;
		    }
		    var attrSpaces = this._spacesFor(spaceName);
		    return concat(this.stringifyProperty(name), attrSpaces);
		  }

		  /**
		   * returns the offset of the attribute part specified relative to the
		   * start of the node of the output string.
		   *
		   * * "ns" - alias for "namespace"
		   * * "namespace" - the namespace if it exists.
		   * * "attribute" - the attribute name
		   * * "attributeNS" - the start of the attribute or its namespace
		   * * "operator" - the match operator of the attribute
		   * * "value" - The value (string or identifier)
		   * * "insensitive" - the case insensitivity flag;
		   * @param part One of the possible values inside an attribute.
		   * @returns -1 if the name is invalid or the value doesn't exist in this attribute.
		   */;
		  _proto.offsetOf = function offsetOf(name) {
		    var count = 1;
		    var attributeSpaces = this._spacesFor("attribute");
		    count += attributeSpaces.before.length;
		    if (name === "namespace" || name === "ns") {
		      return this.namespace ? count : -1;
		    }
		    if (name === "attributeNS") {
		      return count;
		    }
		    count += this.namespaceString.length;
		    if (this.namespace) {
		      count += 1;
		    }
		    if (name === "attribute") {
		      return count;
		    }
		    count += this.stringifyProperty("attribute").length;
		    count += attributeSpaces.after.length;
		    var operatorSpaces = this._spacesFor("operator");
		    count += operatorSpaces.before.length;
		    var operator = this.stringifyProperty("operator");
		    if (name === "operator") {
		      return operator ? count : -1;
		    }
		    count += operator.length;
		    count += operatorSpaces.after.length;
		    var valueSpaces = this._spacesFor("value");
		    count += valueSpaces.before.length;
		    var value = this.stringifyProperty("value");
		    if (name === "value") {
		      return value ? count : -1;
		    }
		    count += value.length;
		    count += valueSpaces.after.length;
		    var insensitiveSpaces = this._spacesFor("insensitive");
		    count += insensitiveSpaces.before.length;
		    if (name === "insensitive") {
		      return this.insensitive ? count : -1;
		    }
		    return -1;
		  };
		  _proto.toString = function toString() {
		    var _this2 = this;
		    var selector = [this.rawSpaceBefore, '['];
		    selector.push(this._stringFor('qualifiedAttribute', 'attribute'));
		    if (this.operator && (this.value || this.value === '')) {
		      selector.push(this._stringFor('operator'));
		      selector.push(this._stringFor('value'));
		      selector.push(this._stringFor('insensitiveFlag', 'insensitive', function (attrValue, attrSpaces) {
		        if (attrValue.length > 0 && !_this2.quoted && attrSpaces.before.length === 0 && !(_this2.spaces.value && _this2.spaces.value.after)) {
		          attrSpaces.before = " ";
		        }
		        return defaultAttrConcat(attrValue, attrSpaces);
		      }));
		    }
		    selector.push(']');
		    selector.push(this.rawSpaceAfter);
		    return selector.join('');
		  };
		  _createClass(Attribute, [{
		    key: "quoted",
		    get: function get() {
		      var qm = this.quoteMark;
		      return qm === "'" || qm === '"';
		    },
		    set: function set(value) {
		      warnOfDeprecatedQuotedAssignment();
		    }

		    /**
		     * returns a single (`'`) or double (`"`) quote character if the value is quoted.
		     * returns `null` if the value is not quoted.
		     * returns `undefined` if the quotation state is unknown (this can happen when
		     * the attribute is constructed without specifying a quote mark.)
		     */
		  }, {
		    key: "quoteMark",
		    get: function get() {
		      return this._quoteMark;
		    }

		    /**
		     * Set the quote mark to be used by this attribute's value.
		     * If the quote mark changes, the raw (escaped) value at `attr.raws.value` of the attribute
		     * value is updated accordingly.
		     *
		     * @param {"'" | '"' | null} quoteMark The quote mark or `null` if the value should be unquoted.
		     */,
		    set: function set(quoteMark) {
		      if (!this._constructed) {
		        this._quoteMark = quoteMark;
		        return;
		      }
		      if (this._quoteMark !== quoteMark) {
		        this._quoteMark = quoteMark;
		        this._syncRawValue();
		      }
		    }
		  }, {
		    key: "qualifiedAttribute",
		    get: function get() {
		      return this.qualifiedName(this.raws.attribute || this.attribute);
		    }
		  }, {
		    key: "insensitiveFlag",
		    get: function get() {
		      return this.insensitive ? 'i' : '';
		    }
		  }, {
		    key: "value",
		    get: function get() {
		      return this._value;
		    },
		    set:
		    /**
		     * Before 3.0, the value had to be set to an escaped value including any wrapped
		     * quote marks. In 3.0, the semantics of `Attribute.value` changed so that the value
		     * is unescaped during parsing and any quote marks are removed.
		     *
		     * Because the ambiguity of this semantic change, if you set `attr.value = newValue`,
		     * a deprecation warning is raised when the new value contains any characters that would
		     * require escaping (including if it contains wrapped quotes).
		     *
		     * Instead, you should call `attr.setValue(newValue, opts)` and pass options that describe
		     * how the new value is quoted.
		     */
		    function set(v) {
		      if (this._constructed) {
		        var _unescapeValue2 = unescapeValue(v),
		          deprecatedUsage = _unescapeValue2.deprecatedUsage,
		          unescaped = _unescapeValue2.unescaped,
		          quoteMark = _unescapeValue2.quoteMark;
		        if (deprecatedUsage) {
		          warnOfDeprecatedValueAssignment();
		        }
		        if (unescaped === this._value && quoteMark === this._quoteMark) {
		          return;
		        }
		        this._value = unescaped;
		        this._quoteMark = quoteMark;
		        this._syncRawValue();
		      } else {
		        this._value = v;
		      }
		    }
		  }, {
		    key: "insensitive",
		    get: function get() {
		      return this._insensitive;
		    }

		    /**
		     * Set the case insensitive flag.
		     * If the case insensitive flag changes, the raw (escaped) value at `attr.raws.insensitiveFlag`
		     * of the attribute is updated accordingly.
		     *
		     * @param {true | false} insensitive true if the attribute should match case-insensitively.
		     */,
		    set: function set(insensitive) {
		      if (!insensitive) {
		        this._insensitive = false;

		        // "i" and "I" can be used in "this.raws.insensitiveFlag" to store the original notation.
		        // When setting `attr.insensitive = false` both should be erased to ensure correct serialization.
		        if (this.raws && (this.raws.insensitiveFlag === 'I' || this.raws.insensitiveFlag === 'i')) {
		          this.raws.insensitiveFlag = undefined;
		        }
		      }
		      this._insensitive = insensitive;
		    }
		  }, {
		    key: "attribute",
		    get: function get() {
		      return this._attribute;
		    },
		    set: function set(name) {
		      this._handleEscapes("attribute", name);
		      this._attribute = name;
		    }
		  }]);
		  return Attribute;
		}(_namespace["default"]);
		exports["default"] = Attribute;
		Attribute.NO_QUOTE = null;
		Attribute.SINGLE_QUOTE = "'";
		Attribute.DOUBLE_QUOTE = '"';
		var CSSESC_QUOTE_OPTIONS = (_CSSESC_QUOTE_OPTIONS = {
		  "'": {
		    quotes: 'single',
		    wrap: true
		  },
		  '"': {
		    quotes: 'double',
		    wrap: true
		  }
		}, _CSSESC_QUOTE_OPTIONS[null] = {
		  isIdentifier: true
		}, _CSSESC_QUOTE_OPTIONS);
		function defaultAttrConcat(attrValue, attrSpaces) {
		  return "" + attrSpaces.before + attrValue + attrSpaces.after;
		} 
	} (attribute));
	return attribute;
}

var universal = {exports: {}};

var hasRequiredUniversal;

function requireUniversal () {
	if (hasRequiredUniversal) return universal.exports;
	hasRequiredUniversal = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _namespace = _interopRequireDefault(requireNamespace());
		var _types = requireTypes();
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var Universal = /*#__PURE__*/function (_Namespace) {
		  _inheritsLoose(Universal, _Namespace);
		  function Universal(opts) {
		    var _this;
		    _this = _Namespace.call(this, opts) || this;
		    _this.type = _types.UNIVERSAL;
		    _this.value = '*';
		    return _this;
		  }
		  return Universal;
		}(_namespace["default"]);
		exports["default"] = Universal;
		module.exports = exports.default; 
	} (universal, universal.exports));
	return universal.exports;
}

var combinator = {exports: {}};

var hasRequiredCombinator;

function requireCombinator () {
	if (hasRequiredCombinator) return combinator.exports;
	hasRequiredCombinator = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _node = _interopRequireDefault(requireNode$1());
		var _types = requireTypes();
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var Combinator = /*#__PURE__*/function (_Node) {
		  _inheritsLoose(Combinator, _Node);
		  function Combinator(opts) {
		    var _this;
		    _this = _Node.call(this, opts) || this;
		    _this.type = _types.COMBINATOR;
		    return _this;
		  }
		  return Combinator;
		}(_node["default"]);
		exports["default"] = Combinator;
		module.exports = exports.default; 
	} (combinator, combinator.exports));
	return combinator.exports;
}

var nesting = {exports: {}};

var hasRequiredNesting;

function requireNesting () {
	if (hasRequiredNesting) return nesting.exports;
	hasRequiredNesting = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _node = _interopRequireDefault(requireNode$1());
		var _types = requireTypes();
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
		var Nesting = /*#__PURE__*/function (_Node) {
		  _inheritsLoose(Nesting, _Node);
		  function Nesting(opts) {
		    var _this;
		    _this = _Node.call(this, opts) || this;
		    _this.type = _types.NESTING;
		    _this.value = '&';
		    return _this;
		  }
		  return Nesting;
		}(_node["default"]);
		exports["default"] = Nesting;
		module.exports = exports.default; 
	} (nesting, nesting.exports));
	return nesting.exports;
}

var sortAscending = {exports: {}};

var hasRequiredSortAscending;

function requireSortAscending () {
	if (hasRequiredSortAscending) return sortAscending.exports;
	hasRequiredSortAscending = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = sortAscending;
		function sortAscending(list) {
		  return list.sort(function (a, b) {
		    return a - b;
		  });
		}
		module.exports = exports.default; 
	} (sortAscending, sortAscending.exports));
	return sortAscending.exports;
}

var tokenize = {};

var tokenTypes = {};

var hasRequiredTokenTypes;

function requireTokenTypes () {
	if (hasRequiredTokenTypes) return tokenTypes;
	hasRequiredTokenTypes = 1;

	tokenTypes.__esModule = true;
	tokenTypes.word = tokenTypes.tilde = tokenTypes.tab = tokenTypes.str = tokenTypes.space = tokenTypes.slash = tokenTypes.singleQuote = tokenTypes.semicolon = tokenTypes.plus = tokenTypes.pipe = tokenTypes.openSquare = tokenTypes.openParenthesis = tokenTypes.newline = tokenTypes.greaterThan = tokenTypes.feed = tokenTypes.equals = tokenTypes.doubleQuote = tokenTypes.dollar = tokenTypes.cr = tokenTypes.comment = tokenTypes.comma = tokenTypes.combinator = tokenTypes.colon = tokenTypes.closeSquare = tokenTypes.closeParenthesis = tokenTypes.caret = tokenTypes.bang = tokenTypes.backslash = tokenTypes.at = tokenTypes.asterisk = tokenTypes.ampersand = undefined;
	var ampersand = 38; // `&`.charCodeAt(0);
	tokenTypes.ampersand = ampersand;
	var asterisk = 42; // `*`.charCodeAt(0);
	tokenTypes.asterisk = asterisk;
	var at = 64; // `@`.charCodeAt(0);
	tokenTypes.at = at;
	var comma = 44; // `,`.charCodeAt(0);
	tokenTypes.comma = comma;
	var colon = 58; // `:`.charCodeAt(0);
	tokenTypes.colon = colon;
	var semicolon = 59; // `;`.charCodeAt(0);
	tokenTypes.semicolon = semicolon;
	var openParenthesis = 40; // `(`.charCodeAt(0);
	tokenTypes.openParenthesis = openParenthesis;
	var closeParenthesis = 41; // `)`.charCodeAt(0);
	tokenTypes.closeParenthesis = closeParenthesis;
	var openSquare = 91; // `[`.charCodeAt(0);
	tokenTypes.openSquare = openSquare;
	var closeSquare = 93; // `]`.charCodeAt(0);
	tokenTypes.closeSquare = closeSquare;
	var dollar = 36; // `$`.charCodeAt(0);
	tokenTypes.dollar = dollar;
	var tilde = 126; // `~`.charCodeAt(0);
	tokenTypes.tilde = tilde;
	var caret = 94; // `^`.charCodeAt(0);
	tokenTypes.caret = caret;
	var plus = 43; // `+`.charCodeAt(0);
	tokenTypes.plus = plus;
	var equals = 61; // `=`.charCodeAt(0);
	tokenTypes.equals = equals;
	var pipe = 124; // `|`.charCodeAt(0);
	tokenTypes.pipe = pipe;
	var greaterThan = 62; // `>`.charCodeAt(0);
	tokenTypes.greaterThan = greaterThan;
	var space = 32; // ` `.charCodeAt(0);
	tokenTypes.space = space;
	var singleQuote = 39; // `'`.charCodeAt(0);
	tokenTypes.singleQuote = singleQuote;
	var doubleQuote = 34; // `"`.charCodeAt(0);
	tokenTypes.doubleQuote = doubleQuote;
	var slash = 47; // `/`.charCodeAt(0);
	tokenTypes.slash = slash;
	var bang = 33; // `!`.charCodeAt(0);
	tokenTypes.bang = bang;
	var backslash = 92; // '\\'.charCodeAt(0);
	tokenTypes.backslash = backslash;
	var cr = 13; // '\r'.charCodeAt(0);
	tokenTypes.cr = cr;
	var feed = 12; // '\f'.charCodeAt(0);
	tokenTypes.feed = feed;
	var newline = 10; // '\n'.charCodeAt(0);
	tokenTypes.newline = newline;
	var tab = 9; // '\t'.charCodeAt(0);

	// Expose aliases primarily for readability.
	tokenTypes.tab = tab;
	var str = singleQuote;

	// No good single character representation!
	tokenTypes.str = str;
	var comment = -1;
	tokenTypes.comment = comment;
	var word = -2;
	tokenTypes.word = word;
	var combinator = -3;
	tokenTypes.combinator = combinator;
	return tokenTypes;
}

var hasRequiredTokenize;

function requireTokenize () {
	if (hasRequiredTokenize) return tokenize;
	hasRequiredTokenize = 1;
	(function (exports) {

		exports.__esModule = true;
		exports.FIELDS = undefined;
		exports["default"] = tokenize;
		var t = _interopRequireWildcard(requireTokenTypes());
		var _unescapable, _wordDelimiters;
		function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
		function _interopRequireWildcard(obj, nodeInterop) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
		var unescapable = (_unescapable = {}, _unescapable[t.tab] = true, _unescapable[t.newline] = true, _unescapable[t.cr] = true, _unescapable[t.feed] = true, _unescapable);
		var wordDelimiters = (_wordDelimiters = {}, _wordDelimiters[t.space] = true, _wordDelimiters[t.tab] = true, _wordDelimiters[t.newline] = true, _wordDelimiters[t.cr] = true, _wordDelimiters[t.feed] = true, _wordDelimiters[t.ampersand] = true, _wordDelimiters[t.asterisk] = true, _wordDelimiters[t.bang] = true, _wordDelimiters[t.comma] = true, _wordDelimiters[t.colon] = true, _wordDelimiters[t.semicolon] = true, _wordDelimiters[t.openParenthesis] = true, _wordDelimiters[t.closeParenthesis] = true, _wordDelimiters[t.openSquare] = true, _wordDelimiters[t.closeSquare] = true, _wordDelimiters[t.singleQuote] = true, _wordDelimiters[t.doubleQuote] = true, _wordDelimiters[t.plus] = true, _wordDelimiters[t.pipe] = true, _wordDelimiters[t.tilde] = true, _wordDelimiters[t.greaterThan] = true, _wordDelimiters[t.equals] = true, _wordDelimiters[t.dollar] = true, _wordDelimiters[t.caret] = true, _wordDelimiters[t.slash] = true, _wordDelimiters);
		var hex = {};
		var hexChars = "0123456789abcdefABCDEF";
		for (var i = 0; i < hexChars.length; i++) {
		  hex[hexChars.charCodeAt(i)] = true;
		}

		/**
		 *  Returns the last index of the bar css word
		 * @param {string} css The string in which the word begins
		 * @param {number} start The index into the string where word's first letter occurs
		 */
		function consumeWord(css, start) {
		  var next = start;
		  var code;
		  do {
		    code = css.charCodeAt(next);
		    if (wordDelimiters[code]) {
		      return next - 1;
		    } else if (code === t.backslash) {
		      next = consumeEscape(css, next) + 1;
		    } else {
		      // All other characters are part of the word
		      next++;
		    }
		  } while (next < css.length);
		  return next - 1;
		}

		/**
		 *  Returns the last index of the escape sequence
		 * @param {string} css The string in which the sequence begins
		 * @param {number} start The index into the string where escape character (`\`) occurs.
		 */
		function consumeEscape(css, start) {
		  var next = start;
		  var code = css.charCodeAt(next + 1);
		  if (unescapable[code]) ; else if (hex[code]) {
		    var hexDigits = 0;
		    // consume up to 6 hex chars
		    do {
		      next++;
		      hexDigits++;
		      code = css.charCodeAt(next + 1);
		    } while (hex[code] && hexDigits < 6);
		    // if fewer than 6 hex chars, a trailing space ends the escape
		    if (hexDigits < 6 && code === t.space) {
		      next++;
		    }
		  } else {
		    // the next char is part of the current word
		    next++;
		  }
		  return next;
		}
		var FIELDS = {
		  TYPE: 0,
		  START_LINE: 1,
		  START_COL: 2,
		  END_LINE: 3,
		  END_COL: 4,
		  START_POS: 5,
		  END_POS: 6
		};
		exports.FIELDS = FIELDS;
		function tokenize(input) {
		  var tokens = [];
		  var css = input.css.valueOf();
		  var _css = css,
		    length = _css.length;
		  var offset = -1;
		  var line = 1;
		  var start = 0;
		  var end = 0;
		  var code, content, endColumn, endLine, escaped, escapePos, last, lines, next, nextLine, nextOffset, quote, tokenType;
		  function unclosed(what, fix) {
		    if (input.safe) {
		      // fyi: this is never set to true.
		      css += fix;
		      next = css.length - 1;
		    } else {
		      throw input.error('Unclosed ' + what, line, start - offset, start);
		    }
		  }
		  while (start < length) {
		    code = css.charCodeAt(start);
		    if (code === t.newline) {
		      offset = start;
		      line += 1;
		    }
		    switch (code) {
		      case t.space:
		      case t.tab:
		      case t.newline:
		      case t.cr:
		      case t.feed:
		        next = start;
		        do {
		          next += 1;
		          code = css.charCodeAt(next);
		          if (code === t.newline) {
		            offset = next;
		            line += 1;
		          }
		        } while (code === t.space || code === t.newline || code === t.tab || code === t.cr || code === t.feed);
		        tokenType = t.space;
		        endLine = line;
		        endColumn = next - offset - 1;
		        end = next;
		        break;
		      case t.plus:
		      case t.greaterThan:
		      case t.tilde:
		      case t.pipe:
		        next = start;
		        do {
		          next += 1;
		          code = css.charCodeAt(next);
		        } while (code === t.plus || code === t.greaterThan || code === t.tilde || code === t.pipe);
		        tokenType = t.combinator;
		        endLine = line;
		        endColumn = start - offset;
		        end = next;
		        break;

		      // Consume these characters as single tokens.
		      case t.asterisk:
		      case t.ampersand:
		      case t.bang:
		      case t.comma:
		      case t.equals:
		      case t.dollar:
		      case t.caret:
		      case t.openSquare:
		      case t.closeSquare:
		      case t.colon:
		      case t.semicolon:
		      case t.openParenthesis:
		      case t.closeParenthesis:
		        next = start;
		        tokenType = code;
		        endLine = line;
		        endColumn = start - offset;
		        end = next + 1;
		        break;
		      case t.singleQuote:
		      case t.doubleQuote:
		        quote = code === t.singleQuote ? "'" : '"';
		        next = start;
		        do {
		          escaped = false;
		          next = css.indexOf(quote, next + 1);
		          if (next === -1) {
		            unclosed('quote', quote);
		          }
		          escapePos = next;
		          while (css.charCodeAt(escapePos - 1) === t.backslash) {
		            escapePos -= 1;
		            escaped = !escaped;
		          }
		        } while (escaped);
		        tokenType = t.str;
		        endLine = line;
		        endColumn = start - offset;
		        end = next + 1;
		        break;
		      default:
		        if (code === t.slash && css.charCodeAt(start + 1) === t.asterisk) {
		          next = css.indexOf('*/', start + 2) + 1;
		          if (next === 0) {
		            unclosed('comment', '*/');
		          }
		          content = css.slice(start, next + 1);
		          lines = content.split('\n');
		          last = lines.length - 1;
		          if (last > 0) {
		            nextLine = line + last;
		            nextOffset = next - lines[last].length;
		          } else {
		            nextLine = line;
		            nextOffset = offset;
		          }
		          tokenType = t.comment;
		          line = nextLine;
		          endLine = nextLine;
		          endColumn = next - nextOffset;
		        } else if (code === t.slash) {
		          next = start;
		          tokenType = code;
		          endLine = line;
		          endColumn = start - offset;
		          end = next + 1;
		        } else {
		          next = consumeWord(css, start);
		          tokenType = t.word;
		          endLine = line;
		          endColumn = next - offset;
		        }
		        end = next + 1;
		        break;
		    }

		    // Ensure that the token structure remains consistent
		    tokens.push([tokenType,
		    // [0] Token type
		    line,
		    // [1] Starting line
		    start - offset,
		    // [2] Starting column
		    endLine,
		    // [3] Ending line
		    endColumn,
		    // [4] Ending column
		    start,
		    // [5] Start position / Source index
		    end // [6] End position
		    ]);

		    // Reset offset for the next token
		    if (nextOffset) {
		      offset = nextOffset;
		      nextOffset = null;
		    }
		    start = end;
		  }
		  return tokens;
		} 
	} (tokenize));
	return tokenize;
}

var hasRequiredParser;

function requireParser () {
	if (hasRequiredParser) return parser.exports;
	hasRequiredParser = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _root = _interopRequireDefault(requireRoot());
		var _selector = _interopRequireDefault(requireSelector());
		var _className = _interopRequireDefault(requireClassName());
		var _comment = _interopRequireDefault(requireComment());
		var _id = _interopRequireDefault(requireId());
		var _tag = _interopRequireDefault(requireTag());
		var _string = _interopRequireDefault(requireString());
		var _pseudo = _interopRequireDefault(requirePseudo());
		var _attribute = _interopRequireWildcard(requireAttribute());
		var _universal = _interopRequireDefault(requireUniversal());
		var _combinator = _interopRequireDefault(requireCombinator());
		var _nesting = _interopRequireDefault(requireNesting());
		var _sortAscending = _interopRequireDefault(requireSortAscending());
		var _tokenize = _interopRequireWildcard(requireTokenize());
		var tokens = _interopRequireWildcard(requireTokenTypes());
		var types = _interopRequireWildcard(requireTypes());
		var _util = requireUtil();
		var _WHITESPACE_TOKENS, _Object$assign;
		function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
		function _interopRequireWildcard(obj, nodeInterop) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
		var WHITESPACE_TOKENS = (_WHITESPACE_TOKENS = {}, _WHITESPACE_TOKENS[tokens.space] = true, _WHITESPACE_TOKENS[tokens.cr] = true, _WHITESPACE_TOKENS[tokens.feed] = true, _WHITESPACE_TOKENS[tokens.newline] = true, _WHITESPACE_TOKENS[tokens.tab] = true, _WHITESPACE_TOKENS);
		var WHITESPACE_EQUIV_TOKENS = Object.assign({}, WHITESPACE_TOKENS, (_Object$assign = {}, _Object$assign[tokens.comment] = true, _Object$assign));
		function tokenStart(token) {
		  return {
		    line: token[_tokenize.FIELDS.START_LINE],
		    column: token[_tokenize.FIELDS.START_COL]
		  };
		}
		function tokenEnd(token) {
		  return {
		    line: token[_tokenize.FIELDS.END_LINE],
		    column: token[_tokenize.FIELDS.END_COL]
		  };
		}
		function getSource(startLine, startColumn, endLine, endColumn) {
		  return {
		    start: {
		      line: startLine,
		      column: startColumn
		    },
		    end: {
		      line: endLine,
		      column: endColumn
		    }
		  };
		}
		function getTokenSource(token) {
		  return getSource(token[_tokenize.FIELDS.START_LINE], token[_tokenize.FIELDS.START_COL], token[_tokenize.FIELDS.END_LINE], token[_tokenize.FIELDS.END_COL]);
		}
		function getTokenSourceSpan(startToken, endToken) {
		  if (!startToken) {
		    return undefined;
		  }
		  return getSource(startToken[_tokenize.FIELDS.START_LINE], startToken[_tokenize.FIELDS.START_COL], endToken[_tokenize.FIELDS.END_LINE], endToken[_tokenize.FIELDS.END_COL]);
		}
		function unescapeProp(node, prop) {
		  var value = node[prop];
		  if (typeof value !== "string") {
		    return;
		  }
		  if (value.indexOf("\\") !== -1) {
		    (0, _util.ensureObject)(node, 'raws');
		    node[prop] = (0, _util.unesc)(value);
		    if (node.raws[prop] === undefined) {
		      node.raws[prop] = value;
		    }
		  }
		  return node;
		}
		function indexesOf(array, item) {
		  var i = -1;
		  var indexes = [];
		  while ((i = array.indexOf(item, i + 1)) !== -1) {
		    indexes.push(i);
		  }
		  return indexes;
		}
		function uniqs() {
		  var list = Array.prototype.concat.apply([], arguments);
		  return list.filter(function (item, i) {
		    return i === list.indexOf(item);
		  });
		}
		var Parser = /*#__PURE__*/function () {
		  function Parser(rule, options) {
		    if (options === undefined) {
		      options = {};
		    }
		    this.rule = rule;
		    this.options = Object.assign({
		      lossy: false,
		      safe: false
		    }, options);
		    this.position = 0;
		    this.css = typeof this.rule === 'string' ? this.rule : this.rule.selector;
		    this.tokens = (0, _tokenize["default"])({
		      css: this.css,
		      error: this._errorGenerator(),
		      safe: this.options.safe
		    });
		    var rootSource = getTokenSourceSpan(this.tokens[0], this.tokens[this.tokens.length - 1]);
		    this.root = new _root["default"]({
		      source: rootSource
		    });
		    this.root.errorGenerator = this._errorGenerator();
		    var selector = new _selector["default"]({
		      source: {
		        start: {
		          line: 1,
		          column: 1
		        }
		      },
		      sourceIndex: 0
		    });
		    this.root.append(selector);
		    this.current = selector;
		    this.loop();
		  }
		  var _proto = Parser.prototype;
		  _proto._errorGenerator = function _errorGenerator() {
		    var _this = this;
		    return function (message, errorOptions) {
		      if (typeof _this.rule === 'string') {
		        return new Error(message);
		      }
		      return _this.rule.error(message, errorOptions);
		    };
		  };
		  _proto.attribute = function attribute() {
		    var attr = [];
		    var startingToken = this.currToken;
		    this.position++;
		    while (this.position < this.tokens.length && this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
		      attr.push(this.currToken);
		      this.position++;
		    }
		    if (this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
		      return this.expected('closing square bracket', this.currToken[_tokenize.FIELDS.START_POS]);
		    }
		    var len = attr.length;
		    var node = {
		      source: getSource(startingToken[1], startingToken[2], this.currToken[3], this.currToken[4]),
		      sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
		    };
		    if (len === 1 && !~[tokens.word].indexOf(attr[0][_tokenize.FIELDS.TYPE])) {
		      return this.expected('attribute', attr[0][_tokenize.FIELDS.START_POS]);
		    }
		    var pos = 0;
		    var spaceBefore = '';
		    var commentBefore = '';
		    var lastAdded = null;
		    var spaceAfterMeaningfulToken = false;
		    while (pos < len) {
		      var token = attr[pos];
		      var content = this.content(token);
		      var next = attr[pos + 1];
		      switch (token[_tokenize.FIELDS.TYPE]) {
		        case tokens.space:
		          // if (
		          //     len === 1 ||
		          //     pos === 0 && this.content(next) === '|'
		          // ) {
		          //     return this.expected('attribute', token[TOKEN.START_POS], content);
		          // }
		          spaceAfterMeaningfulToken = true;
		          if (this.options.lossy) {
		            break;
		          }
		          if (lastAdded) {
		            (0, _util.ensureObject)(node, 'spaces', lastAdded);
		            var prevContent = node.spaces[lastAdded].after || '';
		            node.spaces[lastAdded].after = prevContent + content;
		            var existingComment = (0, _util.getProp)(node, 'raws', 'spaces', lastAdded, 'after') || null;
		            if (existingComment) {
		              node.raws.spaces[lastAdded].after = existingComment + content;
		            }
		          } else {
		            spaceBefore = spaceBefore + content;
		            commentBefore = commentBefore + content;
		          }
		          break;
		        case tokens.asterisk:
		          if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
		            node.operator = content;
		            lastAdded = 'operator';
		          } else if ((!node.namespace || lastAdded === "namespace" && !spaceAfterMeaningfulToken) && next) {
		            if (spaceBefore) {
		              (0, _util.ensureObject)(node, 'spaces', 'attribute');
		              node.spaces.attribute.before = spaceBefore;
		              spaceBefore = '';
		            }
		            if (commentBefore) {
		              (0, _util.ensureObject)(node, 'raws', 'spaces', 'attribute');
		              node.raws.spaces.attribute.before = spaceBefore;
		              commentBefore = '';
		            }
		            node.namespace = (node.namespace || "") + content;
		            var rawValue = (0, _util.getProp)(node, 'raws', 'namespace') || null;
		            if (rawValue) {
		              node.raws.namespace += content;
		            }
		            lastAdded = 'namespace';
		          }
		          spaceAfterMeaningfulToken = false;
		          break;
		        case tokens.dollar:
		          if (lastAdded === "value") {
		            var oldRawValue = (0, _util.getProp)(node, 'raws', 'value');
		            node.value += "$";
		            if (oldRawValue) {
		              node.raws.value = oldRawValue + "$";
		            }
		            break;
		          }
		        // Falls through
		        case tokens.caret:
		          if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
		            node.operator = content;
		            lastAdded = 'operator';
		          }
		          spaceAfterMeaningfulToken = false;
		          break;
		        case tokens.combinator:
		          if (content === '~' && next[_tokenize.FIELDS.TYPE] === tokens.equals) {
		            node.operator = content;
		            lastAdded = 'operator';
		          }
		          if (content !== '|') {
		            spaceAfterMeaningfulToken = false;
		            break;
		          }
		          if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
		            node.operator = content;
		            lastAdded = 'operator';
		          } else if (!node.namespace && !node.attribute) {
		            node.namespace = true;
		          }
		          spaceAfterMeaningfulToken = false;
		          break;
		        case tokens.word:
		          if (next && this.content(next) === '|' && attr[pos + 2] && attr[pos + 2][_tokenize.FIELDS.TYPE] !== tokens.equals &&
		          // this look-ahead probably fails with comment nodes involved.
		          !node.operator && !node.namespace) {
		            node.namespace = content;
		            lastAdded = 'namespace';
		          } else if (!node.attribute || lastAdded === "attribute" && !spaceAfterMeaningfulToken) {
		            if (spaceBefore) {
		              (0, _util.ensureObject)(node, 'spaces', 'attribute');
		              node.spaces.attribute.before = spaceBefore;
		              spaceBefore = '';
		            }
		            if (commentBefore) {
		              (0, _util.ensureObject)(node, 'raws', 'spaces', 'attribute');
		              node.raws.spaces.attribute.before = commentBefore;
		              commentBefore = '';
		            }
		            node.attribute = (node.attribute || "") + content;
		            var _rawValue = (0, _util.getProp)(node, 'raws', 'attribute') || null;
		            if (_rawValue) {
		              node.raws.attribute += content;
		            }
		            lastAdded = 'attribute';
		          } else if (!node.value && node.value !== "" || lastAdded === "value" && !(spaceAfterMeaningfulToken || node.quoteMark)) {
		            var _unescaped = (0, _util.unesc)(content);
		            var _oldRawValue = (0, _util.getProp)(node, 'raws', 'value') || '';
		            var oldValue = node.value || '';
		            node.value = oldValue + _unescaped;
		            node.quoteMark = null;
		            if (_unescaped !== content || _oldRawValue) {
		              (0, _util.ensureObject)(node, 'raws');
		              node.raws.value = (_oldRawValue || oldValue) + content;
		            }
		            lastAdded = 'value';
		          } else {
		            var insensitive = content === 'i' || content === "I";
		            if ((node.value || node.value === '') && (node.quoteMark || spaceAfterMeaningfulToken)) {
		              node.insensitive = insensitive;
		              if (!insensitive || content === "I") {
		                (0, _util.ensureObject)(node, 'raws');
		                node.raws.insensitiveFlag = content;
		              }
		              lastAdded = 'insensitive';
		              if (spaceBefore) {
		                (0, _util.ensureObject)(node, 'spaces', 'insensitive');
		                node.spaces.insensitive.before = spaceBefore;
		                spaceBefore = '';
		              }
		              if (commentBefore) {
		                (0, _util.ensureObject)(node, 'raws', 'spaces', 'insensitive');
		                node.raws.spaces.insensitive.before = commentBefore;
		                commentBefore = '';
		              }
		            } else if (node.value || node.value === '') {
		              lastAdded = 'value';
		              node.value += content;
		              if (node.raws.value) {
		                node.raws.value += content;
		              }
		            }
		          }
		          spaceAfterMeaningfulToken = false;
		          break;
		        case tokens.str:
		          if (!node.attribute || !node.operator) {
		            return this.error("Expected an attribute followed by an operator preceding the string.", {
		              index: token[_tokenize.FIELDS.START_POS]
		            });
		          }
		          var _unescapeValue = (0, _attribute.unescapeValue)(content),
		            unescaped = _unescapeValue.unescaped,
		            quoteMark = _unescapeValue.quoteMark;
		          node.value = unescaped;
		          node.quoteMark = quoteMark;
		          lastAdded = 'value';
		          (0, _util.ensureObject)(node, 'raws');
		          node.raws.value = content;
		          spaceAfterMeaningfulToken = false;
		          break;
		        case tokens.equals:
		          if (!node.attribute) {
		            return this.expected('attribute', token[_tokenize.FIELDS.START_POS], content);
		          }
		          if (node.value) {
		            return this.error('Unexpected "=" found; an operator was already defined.', {
		              index: token[_tokenize.FIELDS.START_POS]
		            });
		          }
		          node.operator = node.operator ? node.operator + content : content;
		          lastAdded = 'operator';
		          spaceAfterMeaningfulToken = false;
		          break;
		        case tokens.comment:
		          if (lastAdded) {
		            if (spaceAfterMeaningfulToken || next && next[_tokenize.FIELDS.TYPE] === tokens.space || lastAdded === 'insensitive') {
		              var lastComment = (0, _util.getProp)(node, 'spaces', lastAdded, 'after') || '';
		              var rawLastComment = (0, _util.getProp)(node, 'raws', 'spaces', lastAdded, 'after') || lastComment;
		              (0, _util.ensureObject)(node, 'raws', 'spaces', lastAdded);
		              node.raws.spaces[lastAdded].after = rawLastComment + content;
		            } else {
		              var lastValue = node[lastAdded] || '';
		              var rawLastValue = (0, _util.getProp)(node, 'raws', lastAdded) || lastValue;
		              (0, _util.ensureObject)(node, 'raws');
		              node.raws[lastAdded] = rawLastValue + content;
		            }
		          } else {
		            commentBefore = commentBefore + content;
		          }
		          break;
		        default:
		          return this.error("Unexpected \"" + content + "\" found.", {
		            index: token[_tokenize.FIELDS.START_POS]
		          });
		      }
		      pos++;
		    }
		    unescapeProp(node, "attribute");
		    unescapeProp(node, "namespace");
		    this.newNode(new _attribute["default"](node));
		    this.position++;
		  }

		  /**
		   * return a node containing meaningless garbage up to (but not including) the specified token position.
		   * if the token position is negative, all remaining tokens are consumed.
		   *
		   * This returns an array containing a single string node if all whitespace,
		   * otherwise an array of comment nodes with space before and after.
		   *
		   * These tokens are not added to the current selector, the caller can add them or use them to amend
		   * a previous node's space metadata.
		   *
		   * In lossy mode, this returns only comments.
		   */;
		  _proto.parseWhitespaceEquivalentTokens = function parseWhitespaceEquivalentTokens(stopPosition) {
		    if (stopPosition < 0) {
		      stopPosition = this.tokens.length;
		    }
		    var startPosition = this.position;
		    var nodes = [];
		    var space = "";
		    var lastComment = undefined;
		    do {
		      if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) {
		        if (!this.options.lossy) {
		          space += this.content();
		        }
		      } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.comment) {
		        var spaces = {};
		        if (space) {
		          spaces.before = space;
		          space = "";
		        }
		        lastComment = new _comment["default"]({
		          value: this.content(),
		          source: getTokenSource(this.currToken),
		          sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
		          spaces: spaces
		        });
		        nodes.push(lastComment);
		      }
		    } while (++this.position < stopPosition);
		    if (space) {
		      if (lastComment) {
		        lastComment.spaces.after = space;
		      } else if (!this.options.lossy) {
		        var firstToken = this.tokens[startPosition];
		        var lastToken = this.tokens[this.position - 1];
		        nodes.push(new _string["default"]({
		          value: '',
		          source: getSource(firstToken[_tokenize.FIELDS.START_LINE], firstToken[_tokenize.FIELDS.START_COL], lastToken[_tokenize.FIELDS.END_LINE], lastToken[_tokenize.FIELDS.END_COL]),
		          sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
		          spaces: {
		            before: space,
		            after: ''
		          }
		        }));
		      }
		    }
		    return nodes;
		  }

		  /**
		   *
		   * @param {*} nodes
		   */;
		  _proto.convertWhitespaceNodesToSpace = function convertWhitespaceNodesToSpace(nodes, requiredSpace) {
		    var _this2 = this;
		    if (requiredSpace === undefined) {
		      requiredSpace = false;
		    }
		    var space = "";
		    var rawSpace = "";
		    nodes.forEach(function (n) {
		      var spaceBefore = _this2.lossySpace(n.spaces.before, requiredSpace);
		      var rawSpaceBefore = _this2.lossySpace(n.rawSpaceBefore, requiredSpace);
		      space += spaceBefore + _this2.lossySpace(n.spaces.after, requiredSpace && spaceBefore.length === 0);
		      rawSpace += spaceBefore + n.value + _this2.lossySpace(n.rawSpaceAfter, requiredSpace && rawSpaceBefore.length === 0);
		    });
		    if (rawSpace === space) {
		      rawSpace = undefined;
		    }
		    var result = {
		      space: space,
		      rawSpace: rawSpace
		    };
		    return result;
		  };
		  _proto.isNamedCombinator = function isNamedCombinator(position) {
		    if (position === undefined) {
		      position = this.position;
		    }
		    return this.tokens[position + 0] && this.tokens[position + 0][_tokenize.FIELDS.TYPE] === tokens.slash && this.tokens[position + 1] && this.tokens[position + 1][_tokenize.FIELDS.TYPE] === tokens.word && this.tokens[position + 2] && this.tokens[position + 2][_tokenize.FIELDS.TYPE] === tokens.slash;
		  };
		  _proto.namedCombinator = function namedCombinator() {
		    if (this.isNamedCombinator()) {
		      var nameRaw = this.content(this.tokens[this.position + 1]);
		      var name = (0, _util.unesc)(nameRaw).toLowerCase();
		      var raws = {};
		      if (name !== nameRaw) {
		        raws.value = "/" + nameRaw + "/";
		      }
		      var node = new _combinator["default"]({
		        value: "/" + name + "/",
		        source: getSource(this.currToken[_tokenize.FIELDS.START_LINE], this.currToken[_tokenize.FIELDS.START_COL], this.tokens[this.position + 2][_tokenize.FIELDS.END_LINE], this.tokens[this.position + 2][_tokenize.FIELDS.END_COL]),
		        sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
		        raws: raws
		      });
		      this.position = this.position + 3;
		      return node;
		    } else {
		      this.unexpected();
		    }
		  };
		  _proto.combinator = function combinator() {
		    var _this3 = this;
		    if (this.content() === '|') {
		      return this.namespace();
		    }
		    // We need to decide between a space that's a descendant combinator and meaningless whitespace at the end of a selector.
		    var nextSigTokenPos = this.locateNextMeaningfulToken(this.position);
		    if (nextSigTokenPos < 0 || this.tokens[nextSigTokenPos][_tokenize.FIELDS.TYPE] === tokens.comma || this.tokens[nextSigTokenPos][_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
		      var nodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
		      if (nodes.length > 0) {
		        var last = this.current.last;
		        if (last) {
		          var _this$convertWhitespa = this.convertWhitespaceNodesToSpace(nodes),
		            space = _this$convertWhitespa.space,
		            rawSpace = _this$convertWhitespa.rawSpace;
		          if (rawSpace !== undefined) {
		            last.rawSpaceAfter += rawSpace;
		          }
		          last.spaces.after += space;
		        } else {
		          nodes.forEach(function (n) {
		            return _this3.newNode(n);
		          });
		        }
		      }
		      return;
		    }
		    var firstToken = this.currToken;
		    var spaceOrDescendantSelectorNodes = undefined;
		    if (nextSigTokenPos > this.position) {
		      spaceOrDescendantSelectorNodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
		    }
		    var node;
		    if (this.isNamedCombinator()) {
		      node = this.namedCombinator();
		    } else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.combinator) {
		      node = new _combinator["default"]({
		        value: this.content(),
		        source: getTokenSource(this.currToken),
		        sourceIndex: this.currToken[_tokenize.FIELDS.START_POS]
		      });
		      this.position++;
		    } else if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) ; else if (!spaceOrDescendantSelectorNodes) {
		      this.unexpected();
		    }
		    if (node) {
		      if (spaceOrDescendantSelectorNodes) {
		        var _this$convertWhitespa2 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes),
		          _space = _this$convertWhitespa2.space,
		          _rawSpace = _this$convertWhitespa2.rawSpace;
		        node.spaces.before = _space;
		        node.rawSpaceBefore = _rawSpace;
		      }
		    } else {
		      // descendant combinator
		      var _this$convertWhitespa3 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes, true),
		        _space2 = _this$convertWhitespa3.space,
		        _rawSpace2 = _this$convertWhitespa3.rawSpace;
		      if (!_rawSpace2) {
		        _rawSpace2 = _space2;
		      }
		      var spaces = {};
		      var raws = {
		        spaces: {}
		      };
		      if (_space2.endsWith(' ') && _rawSpace2.endsWith(' ')) {
		        spaces.before = _space2.slice(0, _space2.length - 1);
		        raws.spaces.before = _rawSpace2.slice(0, _rawSpace2.length - 1);
		      } else if (_space2.startsWith(' ') && _rawSpace2.startsWith(' ')) {
		        spaces.after = _space2.slice(1);
		        raws.spaces.after = _rawSpace2.slice(1);
		      } else {
		        raws.value = _rawSpace2;
		      }
		      node = new _combinator["default"]({
		        value: ' ',
		        source: getTokenSourceSpan(firstToken, this.tokens[this.position - 1]),
		        sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
		        spaces: spaces,
		        raws: raws
		      });
		    }
		    if (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.space) {
		      node.spaces.after = this.optionalSpace(this.content());
		      this.position++;
		    }
		    return this.newNode(node);
		  };
		  _proto.comma = function comma() {
		    if (this.position === this.tokens.length - 1) {
		      this.root.trailingComma = true;
		      this.position++;
		      return;
		    }
		    this.current._inferEndPosition();
		    var selector = new _selector["default"]({
		      source: {
		        start: tokenStart(this.tokens[this.position + 1])
		      },
		      sourceIndex: this.tokens[this.position + 1][_tokenize.FIELDS.START_POS]
		    });
		    this.current.parent.append(selector);
		    this.current = selector;
		    this.position++;
		  };
		  _proto.comment = function comment() {
		    var current = this.currToken;
		    this.newNode(new _comment["default"]({
		      value: this.content(),
		      source: getTokenSource(current),
		      sourceIndex: current[_tokenize.FIELDS.START_POS]
		    }));
		    this.position++;
		  };
		  _proto.error = function error(message, opts) {
		    throw this.root.error(message, opts);
		  };
		  _proto.missingBackslash = function missingBackslash() {
		    return this.error('Expected a backslash preceding the semicolon.', {
		      index: this.currToken[_tokenize.FIELDS.START_POS]
		    });
		  };
		  _proto.missingParenthesis = function missingParenthesis() {
		    return this.expected('opening parenthesis', this.currToken[_tokenize.FIELDS.START_POS]);
		  };
		  _proto.missingSquareBracket = function missingSquareBracket() {
		    return this.expected('opening square bracket', this.currToken[_tokenize.FIELDS.START_POS]);
		  };
		  _proto.unexpected = function unexpected() {
		    return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[_tokenize.FIELDS.START_POS]);
		  };
		  _proto.unexpectedPipe = function unexpectedPipe() {
		    return this.error("Unexpected '|'.", this.currToken[_tokenize.FIELDS.START_POS]);
		  };
		  _proto.namespace = function namespace() {
		    var before = this.prevToken && this.content(this.prevToken) || true;
		    if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.word) {
		      this.position++;
		      return this.word(before);
		    } else if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.asterisk) {
		      this.position++;
		      return this.universal(before);
		    }
		    this.unexpectedPipe();
		  };
		  _proto.nesting = function nesting() {
		    if (this.nextToken) {
		      var nextContent = this.content(this.nextToken);
		      if (nextContent === "|") {
		        this.position++;
		        return;
		      }
		    }
		    var current = this.currToken;
		    this.newNode(new _nesting["default"]({
		      value: this.content(),
		      source: getTokenSource(current),
		      sourceIndex: current[_tokenize.FIELDS.START_POS]
		    }));
		    this.position++;
		  };
		  _proto.parentheses = function parentheses() {
		    var last = this.current.last;
		    var unbalanced = 1;
		    this.position++;
		    if (last && last.type === types.PSEUDO) {
		      var selector = new _selector["default"]({
		        source: {
		          start: tokenStart(this.tokens[this.position])
		        },
		        sourceIndex: this.tokens[this.position][_tokenize.FIELDS.START_POS]
		      });
		      var cache = this.current;
		      last.append(selector);
		      this.current = selector;
		      while (this.position < this.tokens.length && unbalanced) {
		        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
		          unbalanced++;
		        }
		        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
		          unbalanced--;
		        }
		        if (unbalanced) {
		          this.parse();
		        } else {
		          this.current.source.end = tokenEnd(this.currToken);
		          this.current.parent.source.end = tokenEnd(this.currToken);
		          this.position++;
		        }
		      }
		      this.current = cache;
		    } else {
		      // I think this case should be an error. It's used to implement a basic parse of media queries
		      // but I don't think it's a good idea.
		      var parenStart = this.currToken;
		      var parenValue = "(";
		      var parenEnd;
		      while (this.position < this.tokens.length && unbalanced) {
		        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
		          unbalanced++;
		        }
		        if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
		          unbalanced--;
		        }
		        parenEnd = this.currToken;
		        parenValue += this.parseParenthesisToken(this.currToken);
		        this.position++;
		      }
		      if (last) {
		        last.appendToPropertyAndEscape("value", parenValue, parenValue);
		      } else {
		        this.newNode(new _string["default"]({
		          value: parenValue,
		          source: getSource(parenStart[_tokenize.FIELDS.START_LINE], parenStart[_tokenize.FIELDS.START_COL], parenEnd[_tokenize.FIELDS.END_LINE], parenEnd[_tokenize.FIELDS.END_COL]),
		          sourceIndex: parenStart[_tokenize.FIELDS.START_POS]
		        }));
		      }
		    }
		    if (unbalanced) {
		      return this.expected('closing parenthesis', this.currToken[_tokenize.FIELDS.START_POS]);
		    }
		  };
		  _proto.pseudo = function pseudo() {
		    var _this4 = this;
		    var pseudoStr = '';
		    var startingToken = this.currToken;
		    while (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.colon) {
		      pseudoStr += this.content();
		      this.position++;
		    }
		    if (!this.currToken) {
		      return this.expected(['pseudo-class', 'pseudo-element'], this.position - 1);
		    }
		    if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.word) {
		      this.splitWord(false, function (first, length) {
		        pseudoStr += first;
		        _this4.newNode(new _pseudo["default"]({
		          value: pseudoStr,
		          source: getTokenSourceSpan(startingToken, _this4.currToken),
		          sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
		        }));
		        if (length > 1 && _this4.nextToken && _this4.nextToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) {
		          _this4.error('Misplaced parenthesis.', {
		            index: _this4.nextToken[_tokenize.FIELDS.START_POS]
		          });
		        }
		      });
		    } else {
		      return this.expected(['pseudo-class', 'pseudo-element'], this.currToken[_tokenize.FIELDS.START_POS]);
		    }
		  };
		  _proto.space = function space() {
		    var content = this.content();
		    // Handle space before and after the selector
		    if (this.position === 0 || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis || this.current.nodes.every(function (node) {
		      return node.type === 'comment';
		    })) {
		      this.spaces = this.optionalSpace(content);
		      this.position++;
		    } else if (this.position === this.tokens.length - 1 || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
		      this.current.last.spaces.after = this.optionalSpace(content);
		      this.position++;
		    } else {
		      this.combinator();
		    }
		  };
		  _proto.string = function string() {
		    var current = this.currToken;
		    this.newNode(new _string["default"]({
		      value: this.content(),
		      source: getTokenSource(current),
		      sourceIndex: current[_tokenize.FIELDS.START_POS]
		    }));
		    this.position++;
		  };
		  _proto.universal = function universal(namespace) {
		    var nextToken = this.nextToken;
		    if (nextToken && this.content(nextToken) === '|') {
		      this.position++;
		      return this.namespace();
		    }
		    var current = this.currToken;
		    this.newNode(new _universal["default"]({
		      value: this.content(),
		      source: getTokenSource(current),
		      sourceIndex: current[_tokenize.FIELDS.START_POS]
		    }), namespace);
		    this.position++;
		  };
		  _proto.splitWord = function splitWord(namespace, firstCallback) {
		    var _this5 = this;
		    var nextToken = this.nextToken;
		    var word = this.content();
		    while (nextToken && ~[tokens.dollar, tokens.caret, tokens.equals, tokens.word].indexOf(nextToken[_tokenize.FIELDS.TYPE])) {
		      this.position++;
		      var current = this.content();
		      word += current;
		      if (current.lastIndexOf('\\') === current.length - 1) {
		        var next = this.nextToken;
		        if (next && next[_tokenize.FIELDS.TYPE] === tokens.space) {
		          word += this.requiredSpace(this.content(next));
		          this.position++;
		        }
		      }
		      nextToken = this.nextToken;
		    }
		    var hasClass = indexesOf(word, '.').filter(function (i) {
		      // Allow escaped dot within class name
		      var escapedDot = word[i - 1] === '\\';
		      // Allow decimal numbers percent in @keyframes
		      var isKeyframesPercent = /^\d+\.\d+%$/.test(word);
		      return !escapedDot && !isKeyframesPercent;
		    });
		    var hasId = indexesOf(word, '#').filter(function (i) {
		      return word[i - 1] !== '\\';
		    });
		    // Eliminate Sass interpolations from the list of id indexes
		    var interpolations = indexesOf(word, '#{');
		    if (interpolations.length) {
		      hasId = hasId.filter(function (hashIndex) {
		        return !~interpolations.indexOf(hashIndex);
		      });
		    }
		    var indices = (0, _sortAscending["default"])(uniqs([0].concat(hasClass, hasId)));
		    indices.forEach(function (ind, i) {
		      var index = indices[i + 1] || word.length;
		      var value = word.slice(ind, index);
		      if (i === 0 && firstCallback) {
		        return firstCallback.call(_this5, value, indices.length);
		      }
		      var node;
		      var current = _this5.currToken;
		      var sourceIndex = current[_tokenize.FIELDS.START_POS] + indices[i];
		      var source = getSource(current[1], current[2] + ind, current[3], current[2] + (index - 1));
		      if (~hasClass.indexOf(ind)) {
		        var classNameOpts = {
		          value: value.slice(1),
		          source: source,
		          sourceIndex: sourceIndex
		        };
		        node = new _className["default"](unescapeProp(classNameOpts, "value"));
		      } else if (~hasId.indexOf(ind)) {
		        var idOpts = {
		          value: value.slice(1),
		          source: source,
		          sourceIndex: sourceIndex
		        };
		        node = new _id["default"](unescapeProp(idOpts, "value"));
		      } else {
		        var tagOpts = {
		          value: value,
		          source: source,
		          sourceIndex: sourceIndex
		        };
		        unescapeProp(tagOpts, "value");
		        node = new _tag["default"](tagOpts);
		      }
		      _this5.newNode(node, namespace);
		      // Ensure that the namespace is used only once
		      namespace = null;
		    });
		    this.position++;
		  };
		  _proto.word = function word(namespace) {
		    var nextToken = this.nextToken;
		    if (nextToken && this.content(nextToken) === '|') {
		      this.position++;
		      return this.namespace();
		    }
		    return this.splitWord(namespace);
		  };
		  _proto.loop = function loop() {
		    while (this.position < this.tokens.length) {
		      this.parse(true);
		    }
		    this.current._inferEndPosition();
		    return this.root;
		  };
		  _proto.parse = function parse(throwOnParenthesis) {
		    switch (this.currToken[_tokenize.FIELDS.TYPE]) {
		      case tokens.space:
		        this.space();
		        break;
		      case tokens.comment:
		        this.comment();
		        break;
		      case tokens.openParenthesis:
		        this.parentheses();
		        break;
		      case tokens.closeParenthesis:
		        if (throwOnParenthesis) {
		          this.missingParenthesis();
		        }
		        break;
		      case tokens.openSquare:
		        this.attribute();
		        break;
		      case tokens.dollar:
		      case tokens.caret:
		      case tokens.equals:
		      case tokens.word:
		        this.word();
		        break;
		      case tokens.colon:
		        this.pseudo();
		        break;
		      case tokens.comma:
		        this.comma();
		        break;
		      case tokens.asterisk:
		        this.universal();
		        break;
		      case tokens.ampersand:
		        this.nesting();
		        break;
		      case tokens.slash:
		      case tokens.combinator:
		        this.combinator();
		        break;
		      case tokens.str:
		        this.string();
		        break;
		      // These cases throw; no break needed.
		      case tokens.closeSquare:
		        this.missingSquareBracket();
		      case tokens.semicolon:
		        this.missingBackslash();
		      default:
		        this.unexpected();
		    }
		  }

		  /**
		   * Helpers
		   */;
		  _proto.expected = function expected(description, index, found) {
		    if (Array.isArray(description)) {
		      var last = description.pop();
		      description = description.join(', ') + " or " + last;
		    }
		    var an = /^[aeiou]/.test(description[0]) ? 'an' : 'a';
		    if (!found) {
		      return this.error("Expected " + an + " " + description + ".", {
		        index: index
		      });
		    }
		    return this.error("Expected " + an + " " + description + ", found \"" + found + "\" instead.", {
		      index: index
		    });
		  };
		  _proto.requiredSpace = function requiredSpace(space) {
		    return this.options.lossy ? ' ' : space;
		  };
		  _proto.optionalSpace = function optionalSpace(space) {
		    return this.options.lossy ? '' : space;
		  };
		  _proto.lossySpace = function lossySpace(space, required) {
		    if (this.options.lossy) {
		      return required ? ' ' : '';
		    } else {
		      return space;
		    }
		  };
		  _proto.parseParenthesisToken = function parseParenthesisToken(token) {
		    var content = this.content(token);
		    if (token[_tokenize.FIELDS.TYPE] === tokens.space) {
		      return this.requiredSpace(content);
		    } else {
		      return content;
		    }
		  };
		  _proto.newNode = function newNode(node, namespace) {
		    if (namespace) {
		      if (/^ +$/.test(namespace)) {
		        if (!this.options.lossy) {
		          this.spaces = (this.spaces || '') + namespace;
		        }
		        namespace = true;
		      }
		      node.namespace = namespace;
		      unescapeProp(node, "namespace");
		    }
		    if (this.spaces) {
		      node.spaces.before = this.spaces;
		      this.spaces = '';
		    }
		    return this.current.append(node);
		  };
		  _proto.content = function content(token) {
		    if (token === undefined) {
		      token = this.currToken;
		    }
		    return this.css.slice(token[_tokenize.FIELDS.START_POS], token[_tokenize.FIELDS.END_POS]);
		  };
		  /**
		   * returns the index of the next non-whitespace, non-comment token.
		   * returns -1 if no meaningful token is found.
		   */
		  _proto.locateNextMeaningfulToken = function locateNextMeaningfulToken(startPosition) {
		    if (startPosition === undefined) {
		      startPosition = this.position + 1;
		    }
		    var searchPosition = startPosition;
		    while (searchPosition < this.tokens.length) {
		      if (WHITESPACE_EQUIV_TOKENS[this.tokens[searchPosition][_tokenize.FIELDS.TYPE]]) {
		        searchPosition++;
		        continue;
		      } else {
		        return searchPosition;
		      }
		    }
		    return -1;
		  };
		  _createClass(Parser, [{
		    key: "currToken",
		    get: function get() {
		      return this.tokens[this.position];
		    }
		  }, {
		    key: "nextToken",
		    get: function get() {
		      return this.tokens[this.position + 1];
		    }
		  }, {
		    key: "prevToken",
		    get: function get() {
		      return this.tokens[this.position - 1];
		    }
		  }]);
		  return Parser;
		}();
		exports["default"] = Parser;
		module.exports = exports.default; 
	} (parser, parser.exports));
	return parser.exports;
}

var hasRequiredProcessor;

function requireProcessor () {
	if (hasRequiredProcessor) return processor$1.exports;
	hasRequiredProcessor = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _parser = _interopRequireDefault(requireParser());
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		var Processor = /*#__PURE__*/function () {
		  function Processor(func, options) {
		    this.func = func || function noop() {};
		    this.funcRes = null;
		    this.options = options;
		  }
		  var _proto = Processor.prototype;
		  _proto._shouldUpdateSelector = function _shouldUpdateSelector(rule, options) {
		    if (options === undefined) {
		      options = {};
		    }
		    var merged = Object.assign({}, this.options, options);
		    if (merged.updateSelector === false) {
		      return false;
		    } else {
		      return typeof rule !== "string";
		    }
		  };
		  _proto._isLossy = function _isLossy(options) {
		    if (options === undefined) {
		      options = {};
		    }
		    var merged = Object.assign({}, this.options, options);
		    if (merged.lossless === false) {
		      return true;
		    } else {
		      return false;
		    }
		  };
		  _proto._root = function _root(rule, options) {
		    if (options === undefined) {
		      options = {};
		    }
		    var parser = new _parser["default"](rule, this._parseOptions(options));
		    return parser.root;
		  };
		  _proto._parseOptions = function _parseOptions(options) {
		    return {
		      lossy: this._isLossy(options)
		    };
		  };
		  _proto._run = function _run(rule, options) {
		    var _this = this;
		    if (options === undefined) {
		      options = {};
		    }
		    return new Promise(function (resolve, reject) {
		      try {
		        var root = _this._root(rule, options);
		        Promise.resolve(_this.func(root)).then(function (transform) {
		          var string = undefined;
		          if (_this._shouldUpdateSelector(rule, options)) {
		            string = root.toString();
		            rule.selector = string;
		          }
		          return {
		            transform: transform,
		            root: root,
		            string: string
		          };
		        }).then(resolve, reject);
		      } catch (e) {
		        reject(e);
		        return;
		      }
		    });
		  };
		  _proto._runSync = function _runSync(rule, options) {
		    if (options === undefined) {
		      options = {};
		    }
		    var root = this._root(rule, options);
		    var transform = this.func(root);
		    if (transform && typeof transform.then === "function") {
		      throw new Error("Selector processor returned a promise to a synchronous call.");
		    }
		    var string = undefined;
		    if (options.updateSelector && typeof rule !== "string") {
		      string = root.toString();
		      rule.selector = string;
		    }
		    return {
		      transform: transform,
		      root: root,
		      string: string
		    };
		  }

		  /**
		   * Process rule into a selector AST.
		   *
		   * @param rule {postcss.Rule | string} The css selector to be processed
		   * @param options The options for processing
		   * @returns {Promise<parser.Root>} The AST of the selector after processing it.
		   */;
		  _proto.ast = function ast(rule, options) {
		    return this._run(rule, options).then(function (result) {
		      return result.root;
		    });
		  }

		  /**
		   * Process rule into a selector AST synchronously.
		   *
		   * @param rule {postcss.Rule | string} The css selector to be processed
		   * @param options The options for processing
		   * @returns {parser.Root} The AST of the selector after processing it.
		   */;
		  _proto.astSync = function astSync(rule, options) {
		    return this._runSync(rule, options).root;
		  }

		  /**
		   * Process a selector into a transformed value asynchronously
		   *
		   * @param rule {postcss.Rule | string} The css selector to be processed
		   * @param options The options for processing
		   * @returns {Promise<any>} The value returned by the processor.
		   */;
		  _proto.transform = function transform(rule, options) {
		    return this._run(rule, options).then(function (result) {
		      return result.transform;
		    });
		  }

		  /**
		   * Process a selector into a transformed value synchronously.
		   *
		   * @param rule {postcss.Rule | string} The css selector to be processed
		   * @param options The options for processing
		   * @returns {any} The value returned by the processor.
		   */;
		  _proto.transformSync = function transformSync(rule, options) {
		    return this._runSync(rule, options).transform;
		  }

		  /**
		   * Process a selector into a new selector string asynchronously.
		   *
		   * @param rule {postcss.Rule | string} The css selector to be processed
		   * @param options The options for processing
		   * @returns {string} the selector after processing.
		   */;
		  _proto.process = function process(rule, options) {
		    return this._run(rule, options).then(function (result) {
		      return result.string || result.root.toString();
		    });
		  }

		  /**
		   * Process a selector into a new selector string synchronously.
		   *
		   * @param rule {postcss.Rule | string} The css selector to be processed
		   * @param options The options for processing
		   * @returns {string} the selector after processing.
		   */;
		  _proto.processSync = function processSync(rule, options) {
		    var result = this._runSync(rule, options);
		    return result.string || result.root.toString();
		  };
		  return Processor;
		}();
		exports["default"] = Processor;
		module.exports = exports.default; 
	} (processor$1, processor$1.exports));
	return processor$1.exports;
}

var selectors = {};

var constructors = {};

var hasRequiredConstructors;

function requireConstructors () {
	if (hasRequiredConstructors) return constructors;
	hasRequiredConstructors = 1;

	constructors.__esModule = true;
	constructors.universal = constructors.tag = constructors.string = constructors.selector = constructors.root = constructors.pseudo = constructors.nesting = constructors.id = constructors.comment = constructors.combinator = constructors.className = constructors.attribute = undefined;
	var _attribute = _interopRequireDefault(requireAttribute());
	var _className = _interopRequireDefault(requireClassName());
	var _combinator = _interopRequireDefault(requireCombinator());
	var _comment = _interopRequireDefault(requireComment());
	var _id = _interopRequireDefault(requireId());
	var _nesting = _interopRequireDefault(requireNesting());
	var _pseudo = _interopRequireDefault(requirePseudo());
	var _root = _interopRequireDefault(requireRoot());
	var _selector = _interopRequireDefault(requireSelector());
	var _string = _interopRequireDefault(requireString());
	var _tag = _interopRequireDefault(requireTag());
	var _universal = _interopRequireDefault(requireUniversal());
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	var attribute = function attribute(opts) {
	  return new _attribute["default"](opts);
	};
	constructors.attribute = attribute;
	var className = function className(opts) {
	  return new _className["default"](opts);
	};
	constructors.className = className;
	var combinator = function combinator(opts) {
	  return new _combinator["default"](opts);
	};
	constructors.combinator = combinator;
	var comment = function comment(opts) {
	  return new _comment["default"](opts);
	};
	constructors.comment = comment;
	var id = function id(opts) {
	  return new _id["default"](opts);
	};
	constructors.id = id;
	var nesting = function nesting(opts) {
	  return new _nesting["default"](opts);
	};
	constructors.nesting = nesting;
	var pseudo = function pseudo(opts) {
	  return new _pseudo["default"](opts);
	};
	constructors.pseudo = pseudo;
	var root = function root(opts) {
	  return new _root["default"](opts);
	};
	constructors.root = root;
	var selector = function selector(opts) {
	  return new _selector["default"](opts);
	};
	constructors.selector = selector;
	var string = function string(opts) {
	  return new _string["default"](opts);
	};
	constructors.string = string;
	var tag = function tag(opts) {
	  return new _tag["default"](opts);
	};
	constructors.tag = tag;
	var universal = function universal(opts) {
	  return new _universal["default"](opts);
	};
	constructors.universal = universal;
	return constructors;
}

var guards = {};

var hasRequiredGuards;

function requireGuards () {
	if (hasRequiredGuards) return guards;
	hasRequiredGuards = 1;

	guards.__esModule = true;
	guards.isComment = guards.isCombinator = guards.isClassName = guards.isAttribute = undefined;
	guards.isContainer = isContainer;
	guards.isIdentifier = undefined;
	guards.isNamespace = isNamespace;
	guards.isNesting = undefined;
	guards.isNode = isNode;
	guards.isPseudo = undefined;
	guards.isPseudoClass = isPseudoClass;
	guards.isPseudoElement = isPseudoElement;
	guards.isUniversal = guards.isTag = guards.isString = guards.isSelector = guards.isRoot = undefined;
	var _types = requireTypes();
	var _IS_TYPE;
	var IS_TYPE = (_IS_TYPE = {}, _IS_TYPE[_types.ATTRIBUTE] = true, _IS_TYPE[_types.CLASS] = true, _IS_TYPE[_types.COMBINATOR] = true, _IS_TYPE[_types.COMMENT] = true, _IS_TYPE[_types.ID] = true, _IS_TYPE[_types.NESTING] = true, _IS_TYPE[_types.PSEUDO] = true, _IS_TYPE[_types.ROOT] = true, _IS_TYPE[_types.SELECTOR] = true, _IS_TYPE[_types.STRING] = true, _IS_TYPE[_types.TAG] = true, _IS_TYPE[_types.UNIVERSAL] = true, _IS_TYPE);
	function isNode(node) {
	  return typeof node === "object" && IS_TYPE[node.type];
	}
	function isNodeType(type, node) {
	  return isNode(node) && node.type === type;
	}
	var isAttribute = isNodeType.bind(null, _types.ATTRIBUTE);
	guards.isAttribute = isAttribute;
	var isClassName = isNodeType.bind(null, _types.CLASS);
	guards.isClassName = isClassName;
	var isCombinator = isNodeType.bind(null, _types.COMBINATOR);
	guards.isCombinator = isCombinator;
	var isComment = isNodeType.bind(null, _types.COMMENT);
	guards.isComment = isComment;
	var isIdentifier = isNodeType.bind(null, _types.ID);
	guards.isIdentifier = isIdentifier;
	var isNesting = isNodeType.bind(null, _types.NESTING);
	guards.isNesting = isNesting;
	var isPseudo = isNodeType.bind(null, _types.PSEUDO);
	guards.isPseudo = isPseudo;
	var isRoot = isNodeType.bind(null, _types.ROOT);
	guards.isRoot = isRoot;
	var isSelector = isNodeType.bind(null, _types.SELECTOR);
	guards.isSelector = isSelector;
	var isString = isNodeType.bind(null, _types.STRING);
	guards.isString = isString;
	var isTag = isNodeType.bind(null, _types.TAG);
	guards.isTag = isTag;
	var isUniversal = isNodeType.bind(null, _types.UNIVERSAL);
	guards.isUniversal = isUniversal;
	function isPseudoElement(node) {
	  return isPseudo(node) && node.value && (node.value.startsWith("::") || node.value.toLowerCase() === ":before" || node.value.toLowerCase() === ":after" || node.value.toLowerCase() === ":first-letter" || node.value.toLowerCase() === ":first-line");
	}
	function isPseudoClass(node) {
	  return isPseudo(node) && !isPseudoElement(node);
	}
	function isContainer(node) {
	  return !!(isNode(node) && node.walk);
	}
	function isNamespace(node) {
	  return isAttribute(node) || isTag(node);
	}
	return guards;
}

var hasRequiredSelectors;

function requireSelectors () {
	if (hasRequiredSelectors) return selectors;
	hasRequiredSelectors = 1;
	(function (exports) {

		exports.__esModule = true;
		var _types = requireTypes();
		Object.keys(_types).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (key in exports && exports[key] === _types[key]) return;
		  exports[key] = _types[key];
		});
		var _constructors = requireConstructors();
		Object.keys(_constructors).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (key in exports && exports[key] === _constructors[key]) return;
		  exports[key] = _constructors[key];
		});
		var _guards = requireGuards();
		Object.keys(_guards).forEach(function (key) {
		  if (key === "default" || key === "__esModule") return;
		  if (key in exports && exports[key] === _guards[key]) return;
		  exports[key] = _guards[key];
		}); 
	} (selectors));
	return selectors;
}

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist.exports;
	hasRequiredDist = 1;
	(function (module, exports) {

		exports.__esModule = true;
		exports["default"] = undefined;
		var _processor = _interopRequireDefault(requireProcessor());
		var selectors = _interopRequireWildcard(requireSelectors());
		function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
		function _interopRequireWildcard(obj, nodeInterop) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
		var parser = function parser(processor) {
		  return new _processor["default"](processor);
		};
		Object.assign(parser, selectors);
		delete parser.__esModule;
		var _default = parser;
		exports["default"] = _default;
		module.exports = exports.default; 
	} (dist, dist.exports));
	return dist.exports;
}

var hasRequiredPostcssNested;

function requirePostcssNested () {
	if (hasRequiredPostcssNested) return postcssNested$1.exports;
	hasRequiredPostcssNested = 1;
	const { AtRule, Rule } = requirePostcss();
	let parser = requireDist();

	/**
	 * Run a selector string through postcss-selector-parser
	 */
	function parse(rawSelector, rule) {
	  let nodes;
	  try {
	    parser(parsed => {
	      nodes = parsed;
	    }).processSync(rawSelector);
	  } catch (e) {
	    if (rawSelector.includes(':')) {
	      throw rule ? rule.error('Missed semicolon') : e
	    } else {
	      throw rule ? rule.error(e.message) : e
	    }
	  }
	  return nodes.at(0)
	}

	/**
	 * Replaces the "&" token in a node's selector with the parent selector
	 * similar to what SCSS does.
	 *
	 * Mutates the nodes list
	 */
	function interpolateAmpInSelector(nodes, parent) {
	  let replaced = false;
	  nodes.each(node => {
	    if (node.type === 'nesting') {
	      let clonedParent = parent.clone({});
	      if (node.value !== '&') {
	        node.replaceWith(
	          parse(node.value.replace('&', clonedParent.toString()))
	        );
	      } else {
	        node.replaceWith(clonedParent);
	      }
	      replaced = true;
	    } else if ('nodes' in node && node.nodes) {
	      if (interpolateAmpInSelector(node, parent)) {
	        replaced = true;
	      }
	    }
	  });
	  return replaced
	}

	/**
	 * Combines parent and child selectors, in a SCSS-like way
	 */
	function mergeSelectors(parent, child) {
	  let merged = [];
	  parent.selectors.forEach(sel => {
	    let parentNode = parse(sel, parent);

	    child.selectors.forEach(selector => {
	      if (!selector) {
	        return
	      }
	      let node = parse(selector, child);
	      let replaced = interpolateAmpInSelector(node, parentNode);
	      if (!replaced) {
	        node.prepend(parser.combinator({ value: ' ' }));
	        node.prepend(parentNode.clone({}));
	      }
	      merged.push(node.toString());
	    });
	  });
	  return merged
	}

	/**
	 * Move a child and its preceeding comment(s) to after "after"
	 */
	function breakOut(child, after) {
	  let prev = child.prev();
	  after.after(child);
	  while (prev && prev.type === 'comment') {
	    let nextPrev = prev.prev();
	    after.after(prev);
	    prev = nextPrev;
	  }
	  return child
	}

	function createFnAtruleChilds(bubble) {
	  return function atruleChilds(rule, atrule, bubbling, mergeSels = bubbling) {
	    let children = [];
	    atrule.each(child => {
	      if (child.type === 'rule' && bubbling) {
	        if (mergeSels) {
	          child.selectors = mergeSelectors(rule, child);
	        }
	      } else if (child.type === 'atrule' && child.nodes) {
	        if (bubble[child.name]) {
	          atruleChilds(rule, child, mergeSels);
	        } else if (atrule[rootRuleMergeSel] !== false) {
	          children.push(child);
	        }
	      } else {
	        children.push(child);
	      }
	    });
	    if (bubbling) {
	      if (children.length) {
	        let clone = rule.clone({ nodes: [] });
	        for (let child of children) {
	          clone.append(child);
	        }
	        atrule.prepend(clone);
	      }
	    }
	  }
	}

	function pickDeclarations(selector, declarations, after) {
	  let parent = new Rule({
	    nodes: [],
	    selector
	  });
	  parent.append(declarations);
	  after.after(parent);
	  return parent
	}

	function atruleNames(defaults, custom) {
	  let list = {};
	  for (let name of defaults) {
	    list[name] = true;
	  }
	  if (custom) {
	    for (let name of custom) {
	      list[name.replace(/^@/, '')] = true;
	    }
	  }
	  return list
	}

	function parseRootRuleParams(params) {
	  params = params.trim();
	  let braceBlock = params.match(/^\((.*)\)$/);
	  if (!braceBlock) {
	    return { selector: params, type: 'basic' }
	  }
	  let bits = braceBlock[1].match(/^(with(?:out)?):(.+)$/);
	  if (bits) {
	    let allowlist = bits[1] === 'with';
	    let rules = Object.fromEntries(
	      bits[2]
	        .trim()
	        .split(/\s+/)
	        .map(name => [name, true])
	    );
	    if (allowlist && rules.all) {
	      return { type: 'noop' }
	    }
	    let escapes = rule => !!rules[rule];
	    if (rules.all) {
	      escapes = () => true;
	    } else if (allowlist) {
	      escapes = rule => (rule === 'all' ? false : !rules[rule]);
	    }

	    return {
	      escapes,
	      type: 'withrules'
	    }
	  }
	  // Unrecognized brace block
	  return { type: 'unknown' }
	}

	function getAncestorRules(leaf) {
	  let lineage = [];
	  let parent = leaf.parent;

	  while (parent && parent instanceof AtRule) {
	    lineage.push(parent);
	    parent = parent.parent;
	  }
	  return lineage
	}

	function unwrapRootRule(rule) {
	  let escapes = rule[rootRuleEscapes];

	  if (!escapes) {
	    rule.after(rule.nodes);
	  } else {
	    let nodes = rule.nodes;

	    let topEscaped;
	    let topEscapedIdx = -1;
	    let breakoutLeaf;
	    let breakoutRoot;
	    let clone;

	    let lineage = getAncestorRules(rule);
	    lineage.forEach((parent, i) => {
	      if (escapes(parent.name)) {
	        topEscaped = parent;
	        topEscapedIdx = i;
	        breakoutRoot = clone;
	      } else {
	        let oldClone = clone;
	        clone = parent.clone({ nodes: [] });
	        oldClone && clone.append(oldClone);
	        breakoutLeaf = breakoutLeaf || clone;
	      }
	    });

	    if (!topEscaped) {
	      rule.after(nodes);
	    } else if (!breakoutRoot) {
	      topEscaped.after(nodes);
	    } else {
	      let leaf = breakoutLeaf;
	      leaf.append(nodes);
	      topEscaped.after(breakoutRoot);
	    }

	    if (rule.next() && topEscaped) {
	      let restRoot;
	      lineage.slice(0, topEscapedIdx + 1).forEach((parent, i, arr) => {
	        let oldRoot = restRoot;
	        restRoot = parent.clone({ nodes: [] });
	        oldRoot && restRoot.append(oldRoot);

	        let nextSibs = [];
	        let _child = arr[i - 1] || rule;
	        let next = _child.next();
	        while (next) {
	          nextSibs.push(next);
	          next = next.next();
	        }
	        restRoot.append(nextSibs);
	      });
	      restRoot && (breakoutRoot || nodes[nodes.length - 1]).after(restRoot);
	    }
	  }

	  rule.remove();
	}

	const rootRuleMergeSel = Symbol('rootRuleMergeSel');
	const rootRuleEscapes = Symbol('rootRuleEscapes');

	function normalizeRootRule(rule) {
	  let { params } = rule;
	  let { escapes, selector, type } = parseRootRuleParams(params);
	  if (type === 'unknown') {
	    throw rule.error(
	      `Unknown @${rule.name} parameter ${JSON.stringify(params)}`
	    )
	  }
	  if (type === 'basic' && selector) {
	    let selectorBlock = new Rule({ nodes: rule.nodes, selector });
	    rule.removeAll();
	    rule.append(selectorBlock);
	  }
	  rule[rootRuleEscapes] = escapes;
	  rule[rootRuleMergeSel] = escapes ? !escapes('all') : type === 'noop';
	}

	const hasRootRule = Symbol('hasRootRule');

	postcssNested$1.exports = (opts = {}) => {
	  let bubble = atruleNames(
	    ['media', 'supports', 'layer', 'container', 'starting-style'],
	    opts.bubble
	  );
	  let atruleChilds = createFnAtruleChilds(bubble);
	  let unwrap = atruleNames(
	    [
	      'document',
	      'font-face',
	      'keyframes',
	      '-webkit-keyframes',
	      '-moz-keyframes'
	    ],
	    opts.unwrap
	  );
	  let rootRuleName = (opts.rootRuleName || 'at-root').replace(/^@/, '');
	  let preserveEmpty = opts.preserveEmpty;

	  return {
	    Once(root) {
	      root.walkAtRules(rootRuleName, node => {
	        normalizeRootRule(node);
	        root[hasRootRule] = true;
	      });
	    },

	    postcssPlugin: 'postcss-nested',

	    RootExit(root) {
	      if (root[hasRootRule]) {
	        root.walkAtRules(rootRuleName, unwrapRootRule);
	        root[hasRootRule] = false;
	      }
	    },

	    Rule(rule) {
	      let unwrapped = false;
	      let after = rule;
	      let copyDeclarations = false;
	      let declarations = [];

	      rule.each(child => {
	        if (child.type === 'rule') {
	          if (declarations.length) {
	            after = pickDeclarations(rule.selector, declarations, after);
	            declarations = [];
	          }

	          copyDeclarations = true;
	          unwrapped = true;
	          child.selectors = mergeSelectors(rule, child);
	          after = breakOut(child, after);
	        } else if (child.type === 'atrule') {
	          if (declarations.length) {
	            after = pickDeclarations(rule.selector, declarations, after);
	            declarations = [];
	          }
	          if (child.name === rootRuleName) {
	            unwrapped = true;
	            atruleChilds(rule, child, true, child[rootRuleMergeSel]);
	            after = breakOut(child, after);
	          } else if (bubble[child.name]) {
	            copyDeclarations = true;
	            unwrapped = true;
	            atruleChilds(rule, child, true);
	            after = breakOut(child, after);
	          } else if (unwrap[child.name]) {
	            copyDeclarations = true;
	            unwrapped = true;
	            atruleChilds(rule, child, false);
	            after = breakOut(child, after);
	          } else if (copyDeclarations) {
	            declarations.push(child);
	          }
	        } else if (child.type === 'decl' && copyDeclarations) {
	          declarations.push(child);
	        }
	      });

	      if (declarations.length) {
	        after = pickDeclarations(rule.selector, declarations, after);
	      }

	      if (unwrapped && preserveEmpty !== true) {
	        rule.raws.semicolon = true;
	        if (rule.nodes.length === 0) rule.remove();
	      }
	    }
	  }
	};
	postcssNested$1.exports.postcss = true;
	return postcssNested$1.exports;
}

var postcssNestedExports = requirePostcssNested();
const postcssNested = /*@__PURE__*/getDefaultExportFromCjs(postcssNestedExports);

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    const isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (Number(n) <= 1) {
        return `${Number(n) * 100}%`;
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h, s, l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    let r;
    let g;
    let b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    const v = max;
    const d = max - min;
    const s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h, s, v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    const i = Math.floor(h);
    const f = h - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    const mod = i % 6;
    const r = [v, q, p, p, t, v][mod];
    const g = [t, v, v, q, p, p][mod];
    const b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255]
 * *Returns:* a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    const hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * *Assumes:* r, g, b are contained in the set [0, 255] and a in [0, 1]
 * *Returns:* a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    const hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
        pad2(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts CMYK to RBG
 * Assumes c, m, y, k are in the set [0, 100]
 */
function cmykToRgb(c, m, y, k) {
    const cConv = c / 100;
    const mConv = m / 100;
    const yConv = y / 100;
    const kConv = k / 100;
    const r = 255 * (1 - cConv) * (1 - kConv);
    const g = 255 * (1 - mConv) * (1 - kConv);
    const b = 255 * (1 - yConv) * (1 - kConv);
    return { r, g, b };
}
function rgbToCmyk(r, g, b) {
    let c = 1 - r / 255;
    let m = 1 - g / 255;
    let y = 1 - b / 255;
    let k = Math.min(c, m, y);
    if (k === 1) {
        c = 0;
        m = 0;
        y = 0;
    }
    else {
        c = ((c - k) / (1 - k)) * 100;
        m = ((m - k) / (1 - k)) * 100;
        y = ((y - k) / (1 - k)) * 100;
    }
    k *= 100;
    return {
        c: Math.round(c),
        m: Math.round(m),
        y: Math.round(y),
        k: Math.round(k),
    };
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
const names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * "cmyk(0, 20, 0, 0)" or "cmyk 0 20 0 0"
 * ```
 */
function inputToRGB(color) {
    let rgb = { r: 0, g: 0, b: 0 };
    let a = 1;
    let s = null;
    let v = null;
    let l = null;
    let ok = false;
    let format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        else if (isValidCSSUnit(color.c) &&
            isValidCSSUnit(color.m) &&
            isValidCSSUnit(color.y) &&
            isValidCSSUnit(color.k)) {
            rgb = cmykToRgb(color.c, color.m, color.y, color.k);
            ok = true;
            format = 'cmyk';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
const CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
const CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
const CSS_UNIT = '(?:' + CSS_NUMBER + ')|(?:' + CSS_INTEGER + ')';
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
// eslint-disable-next-line prettier/prettier
const PERMISSIVE_MATCH3 = '[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?';
const PERMISSIVE_MATCH4 = 
// eslint-disable-next-line prettier/prettier
'[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?';
const matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    cmyk: new RegExp('cmyk' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}` or `{c, m, y, k}` or `{c, m, y, k, a}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    let named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    let match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.cmyk.exec(color);
    if (match) {
        return {
            c: match[1],
            m: match[2],
            y: match[3],
            k: match[4],
        };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    if (typeof color === 'number') {
        return !Number.isNaN(color);
    }
    return matchers.CSS_UNIT.test(color);
}

class TinyColor {
    constructor(color = '', opts = {}) {
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = numberInputToObject(color);
        }
        this.originalInput = color;
        const rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = opts.format ?? rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    isDark() {
        return this.getBrightness() < 128;
    }
    isLight() {
        return !this.isDark();
    }
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    getBrightness() {
        // http://www.w3.org/TR/AERT#color-contrast
        const rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    }
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    getLuminance() {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        const rgb = this.toRgb();
        let R;
        let G;
        let B;
        const RsRGB = rgb.r / 255;
        const GsRGB = rgb.g / 255;
        const BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    }
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    getAlpha() {
        return this.a;
    }
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    setAlpha(alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    }
    /**
     * Returns whether the color is monochrome.
     */
    isMonochrome() {
        const { s } = this.toHsl();
        return s === 0;
    }
    /**
     * Returns the object as a HSVA object.
     */
    toHsv() {
        const hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    }
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    toHsvString() {
        const hsv = rgbToHsv(this.r, this.g, this.b);
        const h = Math.round(hsv.h * 360);
        const s = Math.round(hsv.s * 100);
        const v = Math.round(hsv.v * 100);
        return this.a === 1 ? `hsv(${h}, ${s}%, ${v}%)` : `hsva(${h}, ${s}%, ${v}%, ${this.roundA})`;
    }
    /**
     * Returns the object as a HSLA object.
     */
    toHsl() {
        const hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    }
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    toHslString() {
        const hsl = rgbToHsl(this.r, this.g, this.b);
        const h = Math.round(hsl.h * 360);
        const s = Math.round(hsl.s * 100);
        const l = Math.round(hsl.l * 100);
        return this.a === 1 ? `hsl(${h}, ${s}%, ${l}%)` : `hsla(${h}, ${s}%, ${l}%, ${this.roundA})`;
    }
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    toHex(allow3Char = false) {
        return rgbToHex(this.r, this.g, this.b, allow3Char);
    }
    /**
     * Returns the hex value of the color -with a # prefixed.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    toHexString(allow3Char = false) {
        return '#' + this.toHex(allow3Char);
    }
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    toHex8(allow4Char = false) {
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    }
    /**
     * Returns the hex 8 value of the color -with a # prefixed.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    toHex8String(allow4Char = false) {
        return '#' + this.toHex8(allow4Char);
    }
    /**
     * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
     * @param allowShortChar will shorten hex value to 3 or 4 char if possible
     */
    toHexShortString(allowShortChar = false) {
        return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
    }
    /**
     * Returns the object as a RGBA object.
     */
    toRgb() {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    }
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    toRgbString() {
        const r = Math.round(this.r);
        const g = Math.round(this.g);
        const b = Math.round(this.b);
        return this.a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${this.roundA})`;
    }
    /**
     * Returns the object as a RGBA object.
     */
    toPercentageRgb() {
        const fmt = (x) => `${Math.round(bound01(x, 255) * 100)}%`;
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    }
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    toPercentageRgbString() {
        const rnd = (x) => Math.round(bound01(x, 255) * 100);
        return this.a === 1
            ? `rgb(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%)`
            : `rgba(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%, ${this.roundA})`;
    }
    toCmyk() {
        return {
            ...rgbToCmyk(this.r, this.g, this.b),
        };
    }
    toCmykString() {
        const { c, m, y, k } = rgbToCmyk(this.r, this.g, this.b);
        return `cmyk(${c}, ${m}, ${y}, ${k})`;
    }
    /**
     * The 'real' name of the color -if there is one.
     */
    toName() {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        const hex = '#' + rgbToHex(this.r, this.g, this.b, false);
        for (const [key, value] of Object.entries(names)) {
            if (hex === value) {
                return key;
            }
        }
        return false;
    }
    toString(format) {
        const formatSet = Boolean(format);
        format = format ?? this.format;
        let formattedString = false;
        const hasAlpha = this.a < 1 && this.a >= 0;
        const needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        if (format === 'cmyk') {
            formattedString = this.toCmykString();
        }
        return formattedString || this.toHexString();
    }
    toNumber() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }
    clone() {
        return new TinyColor(this.toString());
    }
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    lighten(amount = 10) {
        const hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    }
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    brighten(amount = 10) {
        const rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    }
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    darken(amount = 10) {
        const hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    }
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    tint(amount = 10) {
        return this.mix('white', amount);
    }
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    shade(amount = 10) {
        return this.mix('black', amount);
    }
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    desaturate(amount = 10) {
        const hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    }
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    saturate(amount = 10) {
        const hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    }
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */
    greyscale() {
        return this.desaturate(100);
    }
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    spin(amount) {
        const hsl = this.toHsl();
        const hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    }
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    mix(color, amount = 50) {
        const rgb1 = this.toRgb();
        const rgb2 = new TinyColor(color).toRgb();
        const p = amount / 100;
        const rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    }
    analogous(results = 6, slices = 30) {
        const hsl = this.toHsl();
        const part = 360 / slices;
        const ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    }
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    complement() {
        const hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    }
    monochromatic(results = 6) {
        const hsv = this.toHsv();
        const { h } = hsv;
        const { s } = hsv;
        let { v } = hsv;
        const res = [];
        const modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h, s, v }));
            v = (v + modification) % 1;
        }
        return res;
    }
    splitcomplement() {
        const hsl = this.toHsl();
        const { h } = hsl;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    }
    /**
     * Compute how the color would appear on a background
     */
    onBackground(background) {
        const fg = this.toRgb();
        const bg = new TinyColor(background).toRgb();
        const alpha = fg.a + bg.a * (1 - fg.a);
        return new TinyColor({
            r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
            g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
            b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
            a: alpha,
        });
    }
    /**
     * Alias for `polyad(3)`
     */
    triad() {
        return this.polyad(3);
    }
    /**
     * Alias for `polyad(4)`
     */
    tetrad() {
        return this.polyad(4);
    }
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    polyad(n) {
        const hsl = this.toHsl();
        const { h } = hsl;
        const result = [this];
        const increment = 360 / n;
        for (let i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    }
    /**
     * compare color vs current color
     */
    equals(color) {
        const comparedColor = new TinyColor(color);
        /**
         * RGB and CMYK do not have the same color gamut, so a CMYK conversion will never be 100%.
         * This means we need to compare CMYK to CMYK to ensure accuracy of the equals function.
         */
        if (this.format === 'cmyk' || comparedColor.format === 'cmyk') {
            return this.toCmykString() === comparedColor.toCmykString();
        }
        return this.toRgbString() === comparedColor.toRgbString();
    }
}

// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
/**
 * AKA `contrast`
 *
 * Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
 */
function readability(color1, color2) {
    const c1 = new TinyColor(color1);
    const c2 = new TinyColor(color2);
    return ((Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) /
        (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05));
}

// src/hast.ts

// src/internal/escaping.ts
function escapeRegExp(input) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function serializeCssStringValue(value, quoteStyle = "single") {
  const quote = quoteStyle === "single" ? "'" : '"';
  const escapedValue = Array.from(value).map((char) => {
    const code = char.charCodeAt(0);
    switch (true) {
      case code === 0:
        return "\uFFFD";
      case (code >= 1 && code <= 31 || code === 127):
        return `\\${code.toString(16)} `;
      case (char === quote || char === "\\"):
        return `\\${char}`;
      default:
        return char;
    }
  }).join("");
  return `${quote}${escapedValue}${quote}`;
}

// src/hast.ts
function setProperty(node, propertyName, value) {
  const properties = node.properties || {};
  node.properties = properties;
  if (value !== null) {
    properties[propertyName] = value;
  } else {
    delete properties[propertyName];
  }
}
function getClassNames(node) {
  const stringOrArr = node.properties?.className;
  if (!stringOrArr || stringOrArr === true)
    return [];
  if (Array.isArray(stringOrArr))
    return stringOrArr.map((className) => className.toString());
  return stringOrArr.toString().split(" ");
}
function addClassName(node, className) {
  const classNames = getClassNames(node);
  if (classNames.indexOf(className) === -1)
    classNames.push(className);
  setProperty(node, "className", classNames);
}
function getInlineStyles(node) {
  const styles = /* @__PURE__ */ new Map();
  const styleString = node.properties?.style?.toString().trim() || "";
  if (!styleString)
    return styles;
  const postCssOptions = { from: undefined };
  try {
    const root = postcss.parse(styleString, postCssOptions);
    root.each((node2) => {
      if (node2.type === "decl")
        styles.set(node2.prop, node2.value);
    });
  } catch (error) {
  }
  return styles;
}
function setInlineStyles(node, styles) {
  const styleString = [...styles].map(
    ([prop, value]) => new Declaration({
      prop,
      value,
      raws: {
        between: ":"
      }
    }).toString()
  ).join(";");
  setProperty(node, "style", styleString);
}
function setInlineStyle(node, cssProperty, value, valueFormat = "raw") {
  const styles = getInlineStyles(node);
  if (value !== null) {
    styles.set(cssProperty, valueFormat === "string" ? serializeCssStringValue(value) : value);
  } else {
    styles.delete(cssProperty);
  }
  setInlineStyles(node, styles);
}

// src/common/annotation.ts
var AnnotationRenderPhaseOrder = ["earliest", "earlier", "normal", "later", "latest"];
var ExpressiveCodeAnnotation = class {
  constructor({ inlineRange, renderPhase }) {
    this.inlineRange = inlineRange;
    this.renderPhase = renderPhase;
  }
  /**
   * An optional name for the annotation. This can be used for debugging or logging purposes,
   * or to allow other plugins to identify the annotation.
   */
  name;
  /**
   * An optional range of columns within the line that this annotation applies to.
   * If not provided, the annotation will apply to the entire line.
   */
  inlineRange;
  /**
   * Determines the phase in which this annotation should be rendered.
   * Rendering is done in phases, from `earliest` to `latest`.
   * Annotations with the same phase are rendered in the order they were added.
   *
   * The earlier an annotation is rendered, the more likely it is to be split, modified
   * or wrapped by later annotations. Syntax highlighting is rendered in the `earliest` phase
   * to allow other annotations to wrap and modify the highlighted code.
   *
   * The default phase is `normal`.
   */
  renderPhase;
};
var InlineStyleAnnotation = class extends ExpressiveCodeAnnotation {
  name;
  color;
  italic;
  bold;
  underline;
  styleVariantIndex;
  constructor({ color, italic = false, bold = false, underline = false, styleVariantIndex, ...baseOptions }) {
    super(baseOptions);
    this.name = "Inline style";
    this.color = color;
    this.italic = italic;
    this.bold = bold;
    this.underline = underline;
    this.styleVariantIndex = styleVariantIndex;
  }
  render({ nodesToTransform, styleVariants }) {
    const newStyles = /* @__PURE__ */ new Map();
    const addStylesForVariantIndex = (variantIndex) => {
      const varPrefix = `--${variantIndex}`;
      if (this.color)
        newStyles.set(varPrefix, this.color);
      if (this.italic)
        newStyles.set(`${varPrefix}fs`, "italic");
      if (this.bold)
        newStyles.set(`${varPrefix}fw`, "bold");
      if (this.underline)
        newStyles.set(`${varPrefix}td`, "underline");
    };
    const variantIndices = this.styleVariantIndex !== undefined ? [this.styleVariantIndex] : styleVariants.map((_, i) => i);
    variantIndices.forEach(addStylesForVariantIndex);
    if (newStyles.size === 0)
      return nodesToTransform;
    const buildStyleString = (styles) => {
      return [...styles].map(([key, value]) => `${key}:${value}`).join(";");
    };
    const isInlineStyleNode = (node) => node.tagName === "span" && // Our inline style nodes have no class names
    !getClassNames(node).length && // Our inline style nodes contain CSS variable declarations
    node.properties?.style?.toString().startsWith("--");
    const modifyExistingStyles = (node, remove = false) => {
      const existingStyles = (node.properties?.style?.toString() || "").split(";").map((style) => {
        const declParts = style.split(":");
        return [declParts[0], declParts.slice(1).join(":")];
      });
      const modifiedStylesMap = new Map(existingStyles);
      newStyles.forEach((value, key) => {
        if (remove) {
          modifiedStylesMap.delete(key);
        } else {
          modifiedStylesMap.set(key, value);
        }
      });
      const modifiedStyles = buildStyleString(modifiedStylesMap);
      if (modifiedStyles) {
        setProperty(node, "style", modifiedStyles);
      } else if (node.properties?.style) {
        delete node.properties.style;
      }
      return modifiedStyles;
    };
    const removeNestedConflictingStyles = (node) => {
      for (let childIdx = node.children?.length - 1; childIdx >= 0; childIdx--) {
        const child = node.children[childIdx];
        if (child.type === "element") {
          if (isInlineStyleNode(child)) {
            if (!modifyExistingStyles(child, true)) {
              node.children.splice(childIdx, 1, ...child.children);
            }
          }
          removeNestedConflictingStyles(child);
        }
      }
    };
    return nodesToTransform.map((node) => {
      removeNestedConflictingStyles(node);
      if (node.type === "element" && isInlineStyleNode(node)) {
        modifyExistingStyles(node);
        return node;
      }
      const transformedNode = h("span", { style: buildStyleString(newStyles) }, node);
      return transformedNode;
    });
  }
};
function isInlineStyleAnnotation(annotation) {
  return annotation instanceof InlineStyleAnnotation || annotation.name === "Inline style";
}

// src/helpers/meta-options.ts
var MetaOptions = class {
  constructor(input) {
    const { options, errors } = parseOptions(input);
    this.#parsedOptions = options;
    this.#errors = errors.length ? errors : undefined;
  }
  #parsedOptions;
  #errors;
  /**
   * A list of error messages that occurred when parsing the meta string,
   * or `undefined` if no errors occurred.
   */
  get errors() {
    return this.#errors;
  }
  /**
   * Returns a list of meta options, optionally filtered by their key and/or {@link MetaOptionKind}.
   *
   * @param keyOrKeys
   * Allows to filter the options by key. An empty string will return options without a key.
   * A non-empty string will return options with a matching key (case-insensitive).
   * An array of strings will return options with any of the matching keys.
   * If omitted, no key-based filtering will be applied.
   *
   * @param kind
   * Allows to filter the options by {@link MetaOptionKind}.
   * If omitted, no kind-based filtering will be applied.
   */
  list(keyOrKeys, kind) {
    const filtered = this.#parsedOptions.filter((option) => {
      if (kind !== undefined && option.kind !== kind)
        return false;
      if (keyOrKeys === undefined)
        return true;
      const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
      return keys.some((key) => key === "" && !option.key || option.key?.toLowerCase() === key.toLowerCase());
    });
    return filtered;
  }
  value(key, kind) {
    if (!key)
      throw new Error("You must specify a non-empty key when using getString, getRange, getRegExp or getBoolean.");
    return this.list(key, kind)?.pop()?.value;
  }
  /**
   * Returns the last string value with the given key (case-insensitive),
   * or without a key by passing an empty string.
   */
  getString(key) {
    return this.value(key, "string");
  }
  /**
   * Returns an array of all string values with the given keys (case-insensitive),
   * or without a key by passing an empty string.
   */
  getStrings(keyOrKeys) {
    return this.list(keyOrKeys, "string").map((option) => option.value);
  }
  /**
   * Returns the last range value (`{value}`) with the given key (case-insensitive),
   * or without a key by passing an empty string.
   */
  getRange(key) {
    return this.value(key, "range");
  }
  /**
   * Returns an array of all range values (`{value}`) with the given keys (case-insensitive),
   * or without a key by passing an empty string.
   */
  getRanges(keyOrKeys) {
    return this.list(keyOrKeys, "range").map((option) => option.value);
  }
  /**
   * Returns the last integer value with the given key (case-insensitive),
   * or without a key by passing an empty string.
   */
  getInteger(key) {
    return this.getIntegers(key).pop();
  }
  /**
   * Returns an array of all integer values with the given keys (case-insensitive),
   * or without a key by passing an empty string.
   */
  getIntegers(keyOrKeys) {
    return this.list(keyOrKeys).map((option) => {
      if (option.kind !== "string" && option.kind !== "range")
        return NaN;
      if (!/^-?\d+$/.test(option.value.trim()))
        return NaN;
      return parseInt(option.value, 10);
    }).filter((value) => !isNaN(value));
  }
  /**
   * Returns the last RegExp value (`/value/`) with the given key (case-insensitive),
   * or without a key by passing an empty string.
   */
  getRegExp(key) {
    return this.value(key, "regexp");
  }
  /**
   * Returns an array of all RegExp values (`/value/`) with the given keys (case-insensitive),
   * or without a key by passing an empty string.
   */
  getRegExps(keyOrKeys) {
    return this.list(keyOrKeys, "regexp").map((option) => option.value);
  }
  /**
   * Returns the last boolean value with the given key (case-insensitive).
   */
  getBoolean(key) {
    return this.value(key, "boolean");
  }
};
function parseOptions(input, syntax = {
  valueDelimiters: ["'", '"', "/", "{...}"],
  keyValueSeparator: "="
}) {
  const options = [];
  const errors = [];
  const delimitedValues = parseDelimitedValues(input, syntax);
  let inputWithoutDelimited = input;
  delimitedValues.forEach(({ index, fullMatch: raw, key, value, valueStartDelimiter, valueEndDelimiter }) => {
    inputWithoutDelimited = inputWithoutDelimited.slice(0, index) + " ".repeat(raw.length) + inputWithoutDelimited.slice(index + raw.length);
    if (valueStartDelimiter === "/") {
      let regExp2;
      try {
        regExp2 = new RegExp(value, "gd");
      } catch (_error) {
        try {
          regExp2 = new RegExp(value, "g");
        } catch (error) {
          const msg = error instanceof Error ? error.message : error;
          errors.push(`Failed to parse option \`${raw.trim()}\`: ${msg}`);
          return;
        }
      }
      options.push({
        index,
        raw,
        kind: "regexp",
        key,
        value: regExp2,
        valueStartDelimiter,
        valueEndDelimiter
      });
      return;
    }
    if (valueStartDelimiter === "{") {
      options.push({
        index,
        raw,
        kind: "range",
        key,
        value,
        valueStartDelimiter,
        valueEndDelimiter
      });
      return;
    }
    options.push({
      index,
      raw,
      kind: "string",
      key,
      value,
      valueStartDelimiter,
      valueEndDelimiter
    });
  });
  const escapedSeparator = escapeRegExp(syntax.keyValueSeparator).replace(/-/g, "\\-");
  const regExp = new RegExp(`([^\\s${escapedSeparator}]+)(?:\\s*${escapedSeparator}\\s*(\\S+))?`, "g");
  const simpleOptions = [...inputWithoutDelimited.matchAll(regExp)];
  simpleOptions.forEach((match) => {
    const index = match.index ?? 0;
    const [raw, key, value] = match;
    if (value === "true" || value === "false" || value === undefined) {
      options.push({
        index,
        raw,
        kind: "boolean",
        key,
        value: value !== "false",
        valueStartDelimiter: "",
        valueEndDelimiter: ""
      });
    } else {
      options.push({
        index,
        raw,
        kind: "string",
        key,
        value,
        valueStartDelimiter: "",
        valueEndDelimiter: ""
      });
    }
  });
  options.sort((a, b) => a.index - b.index);
  return {
    options,
    errors
  };
}
function parseDelimitedValues(input, syntax) {
  const valueDelimiterPairs = syntax.valueDelimiters.map((valueDelimiter) => {
    const parts = valueDelimiter.split("...");
    const isPair = parts.length === 2;
    return {
      valueStartDelimiter: isPair ? parts[0] : valueDelimiter,
      valueEndDelimiter: isPair ? parts[1] : valueDelimiter
    };
  });
  const singleCharValueDelimiters = valueDelimiterPairs.map((pair) => pair.valueStartDelimiter).filter((delimiter) => delimiter.length === 1).join("");
  const regExpParts = valueDelimiterPairs.map(({ valueStartDelimiter, valueEndDelimiter }) => {
    const part = [
      // Whitespace or start of string
      `(?:\\s|^)`,
      // Optional group for key name and key/value separator
      [
        // Start of non-capturing optional group
        `(?:`,
        // Key name (captured)
        `([^\\s${escapeRegExp((singleCharValueDelimiters + syntax.keyValueSeparator).replace(/-/g, "\\-"))}]+)`,
        // Optional whitespace
        `\\s*`,
        // Key/value separator (e.g. `=`)
        escapeRegExp(syntax.keyValueSeparator),
        // Optional whitespace
        `\\s*`,
        // End of non-capturing optional group
        `)?`
      ],
      // Value start delimiter
      escapeRegExp(valueStartDelimiter),
      // Value string (captured, can be an empty string),
      // consisting of any of the following parts:
      // - any character that is not a backslash
      // - a backslash followed by any character
      `((?:[^\\\\]|\\\\.)*?)`,
      // Value end delimiter that is not escaped by a preceding `\`
      `${escapeRegExp(valueEndDelimiter)}`,
      // Whitespace or end of string
      `(?=\\s|$)`
    ];
    return part.flat().join("");
  });
  const regExp = new RegExp(regExpParts.join("|"), "g");
  const matches2 = [...input.matchAll(regExp)];
  return matches2.map((match) => {
    const [fullMatch, ...keyValuePairs] = match;
    const firstCaptureGroupIndex = keyValuePairs.findIndex((value2) => value2 !== undefined);
    const delimiterPairIdx = Math.floor(firstCaptureGroupIndex / 2);
    const { valueStartDelimiter, valueEndDelimiter } = valueDelimiterPairs[delimiterPairIdx];
    const [key, escapedValue] = keyValuePairs.slice(delimiterPairIdx * 2, delimiterPairIdx * 2 + 2);
    const escapedBackslashOrValueEndDelimiter = new RegExp(`\\\\(\\\\|${escapeRegExp(valueEndDelimiter)})`, "g");
    const value = escapedValue.replace(escapedBackslashOrValueEndDelimiter, "$1");
    return {
      index: match.index ?? 0,
      fullMatch,
      key,
      value,
      valueStartDelimiter,
      valueEndDelimiter
    };
  });
}

// src/common/logger.ts
var ExpressiveCodeLogger = class {
  label;
  logger;
  constructor(logger = {}) {
    this.label = logger.label ?? "expressive-code";
    this.logger = logger;
  }
  debug(message) {
    if (this.logger.debug) {
      this.logger.debug(message);
    } else {
      console.debug(`[${this.label}] ${message}`);
    }
  }
  info(message) {
    if (this.logger.info) {
      this.logger.info(message);
    } else {
      console.info(`[${this.label}] ${message}`);
    }
  }
  warn(message) {
    if (this.logger.warn) {
      this.logger.warn(message);
    } else {
      console.warn(`[${this.label}] ${message}`);
    }
  }
  error(message) {
    if (this.logger.error) {
      this.logger.error(message);
    } else {
      console.error(`[${this.label}] ${message}`);
    }
  }
};
function logErrorDetails(input) {
  const pad = (lines) => lines.map((line) => `    ${line}`);
  const getErrorDetails = (error2) => {
    const lines = [];
    const errMsgLines = error2.message.split(/\r?\n/);
    lines.push(`${error2.name}: ${errMsgLines[0]}`, ...errMsgLines.slice(1));
    if (error2.stack) {
      lines.push(...error2.stack.split(/\r?\n/).slice(errMsgLines.length));
    }
    if (error2.cause instanceof Error) {
      lines.push("Caused by:");
      lines.push(...pad(getErrorDetails(error2.cause)));
    }
    return lines;
  };
  const error = input.error instanceof Error ? input.error : new Error(String(input.error));
  const details = pad(getErrorDetails(error)).join("\n");
  input.logger.error(`${input.prefix} Error details:
${details}
`);
}

// src/common/plugin-hooks.ts
async function runHooks(key, context, runner) {
  const { plugins, config } = context;
  for (const plugin of plugins) {
    const hookFn = plugin.hooks?.[key];
    if (!hookFn)
      continue;
    try {
      await runner({ hookName: key, hookFn, plugin });
    } catch (error) {
      const msg = error instanceof Error ? error.message : error;
      const prefix = `Plugin "${plugin.name}" caused an error in its "${key}" hook.`;
      logErrorDetails({ logger: config.logger, prefix, error });
      throw new Error(`${prefix} Error message: ${msg}`, { cause: error });
    }
  }
}
var groupWrapperElement = "div";
var groupWrapperClassName = "expressive-code";
var cssVarReplacements = /* @__PURE__ */ new Map([
  ["background", "bg"],
  ["foreground", "fg"],
  ["color", "col"],
  ["border", "brd"],
  ["padding", "pad"],
  ["margin", "marg"],
  ["radius", "rad"],
  ["opacity", "opa"],
  ["width", "wd"],
  ["height", "ht"],
  ["weight", "wg"],
  ["block", "blk"],
  ["inline", "inl"],
  ["bottom", "btm"],
  ["value", "val"],
  ["active", "act"],
  ["inactive", "inact"],
  ["highlight", "hl"],
  ["selection", "sel"],
  ["indicator", "ind"],
  ["shadow", "shd"],
  ["family", "fml"],
  ["transform", "trf"],
  ["decoration", "dec"],
  ["button", "btn"],
  ["editor", "ed"],
  ["terminal", "trm"],
  ["scrollbar", "sb"],
  ["toolbar", "tb"],
  ["gutter", "gtr"],
  ["titlebar", "ttb"],
  ["textMarkers", "tm"],
  ["frames", "frm"]
]);
var preprocessor = postcss([
  // Prevent top-level selectors that are already scoped from being scoped twice
  (root) => {
    const groupWrapperScope = `.${groupWrapperClassName}`;
    root.walkRules((rule) => {
      if (rule.parent?.parent === root) {
        rule.selectors = rule.selectors.map((selector) => {
          if (selector.indexOf(groupWrapperScope) === 0) {
            return selector.slice(groupWrapperScope.length).trim() || "&";
          }
          return selector;
        });
      }
    });
  },
  // Parse SASS-like nested selectors
  postcssNested()
]);
var processor = postcss([
  // Prevent selectors targeting the wrapper class name or top-level elements from being scoped
  (root) => {
    const groupWrapperScope = escapeRegExp(`.${groupWrapperClassName}`);
    const regExpScopedTopLevel = new RegExp(`^${groupWrapperScope} .*(${groupWrapperScope}|:root|html|body)`, "g");
    root.walkRules((rule) => {
      rule.selectors = rule.selectors.map((selector) => selector.replace(regExpScopedTopLevel, "$1"));
    });
  },
  // Apply some simple minifications
  (root) => {
    root.raws.after = "";
    root.walkComments((comment) => {
      comment.remove();
    });
    root.walkRules((rule) => {
      rule.selector = rule.selectors.join(",");
      rule.raws.before = rule.raws.before?.trim() || "";
      rule.raws.between = "";
      rule.raws.after = "";
      rule.raws.semicolon = false;
    });
    root.walkAtRules((atRule) => {
      atRule.raws.before = atRule.raws.before?.trim() || "";
      atRule.raws.between = "";
      atRule.raws.after = "";
    });
    root.walkDecls((decl) => {
      decl.raws.before = decl.raws.before?.trim() || "";
      decl.raws.between = decl.raws.between?.trim() || ":";
      decl.raws.value = {
        value: decl.value,
        raw: decl.raws.value?.raw.trim() ?? decl.value.trim()
      };
    });
  }
]);
async function scopeAndMinifyNestedCss(css) {
  const postCssOptions = { from: undefined };
  const root = postcss.parse(`.${groupWrapperClassName}{${css}}`, postCssOptions);
  const preprocessedStyles = await preprocessor.process(root, postCssOptions);
  const processedStyles = await processor.process(preprocessedStyles, postCssOptions);
  return processedStyles.css;
}
var processedStylesCache = /* @__PURE__ */ new Map();
async function processPluginStyles(pluginStyles) {
  const result = /* @__PURE__ */ new Set();
  const seenStyles = /* @__PURE__ */ new Set();
  for (const { pluginName, styles } of pluginStyles) {
    if (seenStyles.has(styles))
      continue;
    seenStyles.add(styles);
    const cacheKey = styles;
    const cachedStyles = processedStylesCache.get(cacheKey);
    if (cachedStyles !== undefined) {
      result.add(cachedStyles);
      continue;
    }
    try {
      const processedCss = await scopeAndMinifyNestedCss(styles);
      result.add(processedCss);
      processedStylesCache.set(cacheKey, processedCss);
    } catch (error) {
      const msg = error instanceof Error ? error.message : error;
      throw new Error(`Plugin "${pluginName}" added CSS styles that could not be processed (error=${JSON.stringify(msg)}). Styles="${styles}"`);
    }
  }
  return result;
}
function wrapInCascadeLayer(css, cascadeLayerName) {
  if (!cascadeLayerName || cascadeLayerName.trim() === "")
    return css;
  return `@layer ${cascadeLayerName.trim()}{${css}}`;
}

// src/common/style-settings.ts
function getCssVarName(styleSetting) {
  let varName = styleSetting.replace(/\./g, "-");
  const capitalize = (word) => word[0].toUpperCase() + word.slice(1);
  cssVarReplacements.forEach((replacement, term) => {
    const termRegExp = new RegExp(
      [
        // The lowercase term,
        // preceded by a non-lowercase character or the beginning of the string,
        // and followed by a non-lowercase character or the end of the string
        `(?<=[^a-z]|^)${term}(?=[^a-z]|$)`,
        // The capitalized term,
        // preceded by a lowercase character or the beginning of the string,
        // and followed by a non-lowercase character or the end of the string
        `(?<=[a-z]|^)${capitalize(term)}(?=[^a-z]|$)`
      ].join("|"),
      "g"
    );
    varName = varName.replace(termRegExp, (match) => match === term ? replacement : capitalize(replacement));
  });
  return `--ec-${varName}`;
}
var codeLineClass = "ec-line";

// src/internal/type-checks.ts
function isNumber(input) {
  return typeof input === "number" && !isNaN(input);
}
function isString(input) {
  return typeof input === "string";
}
function isBoolean(input) {
  return typeof input === "boolean";
}
function isHastNode(node) {
  return node?.type ? typeof node.type === "string" : false;
}
function isHastElement(node) {
  return isHastNode(node) && node.type === "element";
}
function newTypeError(expectedTypeDescription, actualValue, fieldName) {
  return new Error(`${fieldName ? `Invalid ${fieldName} value: ` : ""}Expected a valid ${expectedTypeDescription}, but got ${JSON.stringify(actualValue)}`);
}

// src/internal/render-line.ts
function splitLineAtAnnotationBoundaries(line) {
  const textParts = [];
  const partIndicesByAnnotation = /* @__PURE__ */ new Map();
  const fullText = line.text;
  const annotations = line.getAnnotations();
  const annotationBoundaries = [
    ...new Set(
      annotations.flatMap(({ inlineRange }) => {
        if (!inlineRange)
          return [];
        return [inlineRange.columnStart, inlineRange.columnEnd];
      })
    )
  ].sort((a, b) => a - b);
  let lastColumn = 0;
  annotationBoundaries.forEach((column) => {
    if (column === lastColumn)
      return;
    textParts.push(fullText.slice(lastColumn, column));
    lastColumn = column;
  });
  if (lastColumn < fullText.length)
    textParts.push(fullText.slice(lastColumn));
  annotations.forEach((annotation) => {
    if (!annotation.inlineRange)
      return;
    const { columnStart, columnEnd } = annotation.inlineRange;
    const partIndices = [];
    let partStart = 0;
    textParts.forEach((part, partIndex) => {
      const partEnd = partStart + part.length;
      if (partStart >= columnStart && partEnd <= columnEnd) {
        partIndices.push(partIndex);
      }
      partStart = partEnd;
    });
    partIndicesByAnnotation.set(annotation, partIndices);
  });
  return {
    textParts,
    partIndicesByAnnotation
  };
}
function renderLineToAst({
  line,
  lineIndex,
  gutterElements,
  ...restContext
}) {
  const { textParts, partIndicesByAnnotation } = splitLineAtAnnotationBoundaries(line);
  const partNodes = textParts.map((textPart) => h(null, [textPart]));
  const annotations = [...line.getAnnotations()].sort(renderPhaseSortFn);
  annotations.forEach((annotation, annotationIndex) => {
    if (!annotation.inlineRange)
      return;
    const partIndices = partIndicesByAnnotation.get(annotation);
    if (!partIndices)
      throw new Error(`Failed to find inline annotation in part indices: ${JSON.stringify(annotation)}`);
    if (partIndices.length > 1) {
      const isPartiallyContainedInLaterAnnotations = annotations.slice(annotationIndex + 1).some((laterAnnotation) => {
        if (!laterAnnotation.inlineRange)
          return false;
        const laterPartIndices = partIndicesByAnnotation.get(laterAnnotation);
        if (!laterPartIndices)
          return false;
        const intersectingParts = laterPartIndices.filter((partIndex) => partIndices.includes(partIndex));
        const isPartiallyContained = intersectingParts.length > 0 && intersectingParts.length < partIndices.length;
        return isPartiallyContained;
      });
      if (!isPartiallyContainedInLaterAnnotations) {
        const mergedNode = h(
          null,
          partIndices.map((partIndex) => partNodes[partIndex])
        );
        partNodes.splice(partIndices[0], partIndices.length, mergedNode);
        const indicesToRemove = partIndices.length - 1;
        const firstPartIndex = partIndices[0];
        const lastPartIndex = partIndices[partIndices.length - 1];
        partIndicesByAnnotation.forEach((partIndicesToCheck) => {
          let anyChanges = false;
          const updatedIndices = partIndicesToCheck.map((partIndex) => {
            if (partIndex <= firstPartIndex)
              return partIndex;
            anyChanges = true;
            if (partIndex > lastPartIndex)
              return partIndex - indicesToRemove;
            return NaN;
          }).filter((partIndex) => !isNaN(partIndex));
          if (anyChanges) {
            partIndicesToCheck.splice(0, partIndicesToCheck.length, ...updatedIndices);
          }
        });
      }
    }
    const renderInput = partIndices.map((partIndex) => partNodes[partIndex]);
    const renderOutput = annotation.render({ nodesToTransform: [...renderInput], line, lineIndex, ...restContext });
    validateAnnotationRenderOutput(renderOutput, renderInput.length);
    partIndices.forEach((partIndex, index) => {
      partNodes[partIndex] = renderOutput[index];
    });
  });
  const sortedGutterElements = [...gutterElements].sort((a, b) => renderPhaseSortFn(a.gutterElement, b.gutterElement));
  const renderedGutterElements = sortedGutterElements.map(({ pluginName, gutterElement }) => {
    try {
      const node = gutterElement.renderLine({ ...restContext, line, lineIndex });
      if (!isHastElement(node))
        throw new Error(`renderLine function did not return a valid HAST Element node: ${JSON.stringify(node)}`);
      return node;
    } catch (error) {
      const msg = error instanceof Error ? error.message : error;
      throw new Error(`Plugin "${pluginName}" failed to render a gutter element. Error message: ${msg}`, { cause: error });
    }
  });
  let lineNode = h(`div.${codeLineClass}`);
  if (renderedGutterElements.length) {
    lineNode.children.push(h("div.gutter", renderedGutterElements));
  }
  lineNode.children.push(h("div.code", partNodes.length > 0 ? partNodes : h(null, "\n")));
  annotations.forEach((annotation) => {
    if (annotation.inlineRange)
      return;
    const renderOutput = annotation.render({ nodesToTransform: [lineNode], line, lineIndex, ...restContext });
    validateAnnotationRenderOutput(renderOutput, 1);
    lineNode = renderOutput[0];
    if (!isHastElement(lineNode)) {
      throw newTypeError("hast Element", lineNode, "line-level annotation render output");
    }
  });
  return lineNode;
}
function getRenderEmptyLineFn(context) {
  return () => {
    const { gutterElements } = context;
    const sortedGutterElements = [...gutterElements].sort((a, b) => renderPhaseSortFn(a.gutterElement, b.gutterElement));
    const renderedGutterElements = sortedGutterElements.map(({ pluginName, gutterElement }) => {
      try {
        const node = gutterElement.renderPlaceholder();
        if (!isHastElement(node))
          throw new Error(`renderPlaceholder function did not return a valid HAST Element node: ${JSON.stringify(node)}`);
        return node;
      } catch (error) {
        const msg = error instanceof Error ? error.message : error;
        throw new Error(`Plugin "${pluginName}" failed to render a gutter element placeholder. Error message: ${msg}`, { cause: error });
      }
    });
    const lineAst = h(`div.${codeLineClass}`);
    const gutterWrapper = renderedGutterElements.length ? h("div.gutter", renderedGutterElements) : undefined;
    if (gutterWrapper)
      lineAst.children.push(gutterWrapper);
    const codeWrapper = h("div.code");
    lineAst.children.push(codeWrapper);
    return {
      lineAst,
      gutterWrapper,
      codeWrapper
    };
  };
}
function renderPhaseSortFn(a, b) {
  const indexA = AnnotationRenderPhaseOrder.indexOf(a.renderPhase || "normal");
  const indexB = AnnotationRenderPhaseOrder.indexOf(b.renderPhase || "normal");
  return indexA - indexB;
}
function validateAnnotationRenderOutput(nodes, expectedLength) {
  if (!Array.isArray(nodes) || nodes.length !== expectedLength)
    throw new Error(`Expected annotation render function to return an array of ${expectedLength} node(s), but got ${JSON.stringify(nodes)}.`);
  nodes.forEach((node, nodeIndex) => {
    if (!node || !node.type)
      throw new Error(`Annotation render function returned an invalid node at index ${nodeIndex}: ${JSON.stringify(node)}`);
  });
}

// src/internal/render-block.ts
async function renderBlock({
  codeBlock,
  groupContents,
  locale,
  config,
  plugins,
  cssVar,
  cssVarName,
  styleVariants
}) {
  const state = {
    canEditAnnotations: true,
    canEditCode: true,
    canEditLanguage: true,
    canEditMetadata: true
  };
  codeBlock.state = state;
  const blockStyles = [];
  const gutterElements = [];
  const runHooksContext = {
    plugins,
    config
  };
  const baseContext = {
    codeBlock,
    groupContents,
    locale,
    config,
    cssVar,
    cssVarName,
    styleVariants
  };
  const runBeforeRenderingHooks = async (key) => {
    await runHooks(key, runHooksContext, async ({ hookFn, plugin }) => {
      await hookFn({
        ...baseContext,
        addStyles: (styles) => blockStyles.push({ pluginName: plugin.name, styles }),
        addGutterElement: (gutterElement) => {
          if (!gutterElement || typeof gutterElement !== "object")
            throw newTypeError("object", gutterElement, "gutterElement");
          if (typeof gutterElement.renderLine !== "function")
            throw newTypeError('"function" type', typeof gutterElement.renderLine, "gutterElement.renderLine");
          if (gutterElement.renderPhase && AnnotationRenderPhaseOrder.indexOf(gutterElement.renderPhase) === -1)
            throw newTypeError("AnnotationRenderPhase", gutterElement.renderPhase, "gutterElement.renderPhase");
          gutterElements.push({ pluginName: plugin.name, gutterElement });
        }
      });
    });
  };
  state.canEditCode = false;
  await runBeforeRenderingHooks("preprocessLanguage");
  state.canEditLanguage = false;
  applyDefaultProps(codeBlock, config);
  await runBeforeRenderingHooks("preprocessMetadata");
  state.canEditCode = true;
  await runBeforeRenderingHooks("preprocessCode");
  await runBeforeRenderingHooks("performSyntaxAnalysis");
  await runBeforeRenderingHooks("postprocessAnalyzedCode");
  state.canEditCode = false;
  await runBeforeRenderingHooks("annotateCode");
  await runBeforeRenderingHooks("postprocessAnnotations");
  state.canEditMetadata = false;
  state.canEditAnnotations = false;
  const lines = codeBlock.getLines();
  const renderedAstLines = [];
  const renderEmptyLine = getRenderEmptyLineFn({ gutterElements, ...baseContext });
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const line = lines[lineIndex];
    const lineRenderData = {
      lineAst: renderLineToAst({ line, lineIndex, gutterElements, ...baseContext })
    };
    if (codeBlock.props.wrap && codeBlock.props.preserveIndent !== false) {
      const indent = line.text.match(/^\s*/)?.[0].length ?? 0;
      if (indent > 0)
        setInlineStyle(lineRenderData.lineAst, "--ecIndent", `${indent}ch`);
    }
    await runHooks("postprocessRenderedLine", runHooksContext, async ({ hookFn, plugin }) => {
      await hookFn({
        ...baseContext,
        addStyles: (styles) => blockStyles.push({ pluginName: plugin.name, styles }),
        line,
        lineIndex,
        renderData: lineRenderData,
        renderEmptyLine
      });
      if (!isHastElement(lineRenderData.lineAst)) {
        throw newTypeError("hast Element", lineRenderData.lineAst, "lineAst");
      }
    });
    renderedAstLines.push(lineRenderData.lineAst);
  }
  const blockRenderData = {
    blockAst: buildCodeBlockAstFromRenderedLines(codeBlock, renderedAstLines)
  };
  await runHooks("postprocessRenderedBlock", runHooksContext, async ({ hookFn, plugin }) => {
    await hookFn({
      ...baseContext,
      addStyles: (styles) => blockStyles.push({ pluginName: plugin.name, styles }),
      renderData: blockRenderData,
      renderEmptyLine
    });
    if (!isHastElement(blockRenderData.blockAst)) {
      throw newTypeError("hast Element", blockRenderData.blockAst, "blockAst");
    }
  });
  return {
    renderedBlockAst: blockRenderData.blockAst,
    blockStyles
  };
}
function buildCodeBlockAstFromRenderedLines(codeBlock, renderedLines) {
  const preProperties = { dataLanguage: codeBlock.language || "plaintext" };
  const preElement = h("pre", preProperties, h("code", renderedLines));
  if (codeBlock.props.wrap) {
    const maxLineLength = codeBlock.getLines().reduce((max, line) => Math.max(max, line.text.length), 0);
    addClassName(preElement, "wrap");
    setInlineStyle(preElement, "--ecMaxLine", `${maxLineLength}ch`);
  }
  return preElement;
}
function applyDefaultProps(codeBlock, config) {
  const { overridesByLang = {}, ...baseDefaults } = config.defaultProps;
  const mergedDefaults = { ...baseDefaults };
  Object.keys(overridesByLang).forEach((key) => {
    const langs = key.split(",").map((lang) => lang.trim());
    if (langs.includes(codeBlock.language)) {
      Object.assign(mergedDefaults, overridesByLang[key]);
    }
  });
  const defaultKeys = Object.keys(mergedDefaults);
  defaultKeys.forEach((key) => {
    if (codeBlock.props[key] === undefined)
      codeBlock.props[key] = mergedDefaults[key];
  });
}
function validateExpressiveCodeProcessingState(state) {
  const isValid = state && // Expect all properties to be defined and booleans
  isBoolean(state.canEditCode) && isBoolean(state.canEditLanguage) && isBoolean(state.canEditMetadata) && isBoolean(state.canEditAnnotations);
  if (!isValid)
    throw newTypeError("ExpressiveCodeProcessingState", state);
}

// src/internal/ranges.ts
function getAbsoluteRange({
  start,
  end,
  rangeMax
}) {
  start = Math.min(start ?? 0, rangeMax);
  end = Math.min(end ?? rangeMax, rangeMax);
  if (start < 0)
    start = Math.max(start + rangeMax, 0);
  if (end < 0)
    end = Math.max(end + rangeMax, 0);
  return [start, end];
}

// src/common/line.ts
var ExpressiveCodeLine = class {
  constructor(text) {
    if (typeof text !== "string")
      throw new Error(`Expected code line text to be a string, but got ${JSON.stringify(text)}.`);
    this.#text = text;
  }
  #text;
  get text() {
    return this.#text;
  }
  #parent;
  get parent() {
    return this.#parent;
  }
  set parent(value) {
    if (!(value instanceof ExpressiveCodeBlock))
      throw new Error("When setting the parent of a code line, you must specify a valid code block instance.");
    if (this.#parent) {
      if (this.#parent === value)
        return;
      throw new Error(`You cannot change the parent of a code line after it has been added to a code block.`);
    }
    this.#parent = value;
  }
  #annotations = [];
  getAnnotations() {
    const matchingAnnotations = this.#annotations.filter((annotation) => !!annotation);
    return Object.freeze(matchingAnnotations);
  }
  addAnnotation(annotation) {
    validateExpressiveCodeAnnotation(annotation);
    if (this.#parent?.state?.canEditAnnotations === false)
      throw new Error("Cannot edit code line annotations in the current state.");
    this.#annotations.push(annotation);
  }
  deleteAnnotation(annotation) {
    validateExpressiveCodeAnnotation(annotation);
    if (this.#parent?.state?.canEditAnnotations === false)
      throw new Error("Cannot edit code line annotations in the current state.");
    const index = this.#annotations.indexOf(annotation);
    if (index === -1)
      throw new Error(
        `Failed to delete annotation as it was not found (name=${JSON.stringify(annotation.constructor.name)}, inlineRange=${JSON.stringify(annotation.inlineRange)})`
      );
    this.#annotations.splice(index, 1);
  }
  editText(columnStart, columnEnd, newText) {
    if (columnStart !== undefined && !isNumber(columnStart))
      throw newTypeError("number", columnStart);
    if (columnEnd !== undefined && !isNumber(columnEnd))
      throw newTypeError("number", columnEnd);
    if (!isString(newText))
      throw newTypeError("string", newText);
    if (this.#parent?.state?.canEditCode === false)
      throw new Error("Cannot edit code line text in the current state.");
    const [editStart, editEnd] = getAbsoluteRange({ start: columnStart, end: columnEnd, rangeMax: this.#text.length });
    const editDelta = newText.length - (editEnd - editStart);
    for (let index = this.#annotations.length - 1; index >= 0; index--) {
      const annotation = this.#annotations[index];
      if (!annotation.inlineRange)
        continue;
      const { columnStart: annotationStart, columnEnd: annotationEnd } = annotation.inlineRange;
      if (annotationEnd < editStart)
        continue;
      if (annotationStart > editEnd) {
        annotation.inlineRange.columnStart += editDelta;
        annotation.inlineRange.columnEnd += editDelta;
        continue;
      }
      if (editStart >= annotationStart && editEnd <= annotationEnd) {
        annotation.inlineRange.columnEnd += editDelta;
        continue;
      }
      if (editStart <= annotationStart && editEnd >= annotationEnd) {
        this.#annotations.splice(index, 1);
        continue;
      }
      if (editStart > annotationStart) {
        annotation.inlineRange.columnEnd = editStart;
      } else {
        annotation.inlineRange.columnStart = editEnd + editDelta;
        annotation.inlineRange.columnEnd += editDelta;
      }
    }
    this.#text = this.text.slice(0, editStart) + newText + this.text.slice(editEnd);
    return this.text;
  }
};
function validateExpressiveCodeInlineRange(inlineRange) {
  if (!isNumber(inlineRange.columnStart) || !isNumber(inlineRange.columnEnd))
    throw newTypeError("ExpressiveCodeAnnotation", inlineRange, "inlineRange");
}
function validateExpressiveCodeAnnotation(annotation) {
  if (typeof annotation?.render !== "function")
    throw newTypeError("ExpressiveCodeAnnotation", annotation?.render, "render");
  if (annotation.inlineRange)
    validateExpressiveCodeInlineRange(annotation.inlineRange);
}

// src/common/block.ts
var ExpressiveCodeBlock = class {
  constructor(options) {
    const { code, language, meta = "", props, locale, parentDocument } = options;
    if (!isString(code) || !isString(language) || !isString(meta))
      throw newTypeError("object of type ExpressiveCodeBlockOptions", options);
    this.#lines = [];
    this.#language = language;
    this.#meta = meta;
    this.#metaOptions = new MetaOptions(meta);
    this.#props = props || {};
    this.#locale = locale;
    this.#parentDocument = parentDocument;
    const lines = code.split(/\r?\n/).map((line) => line.trimEnd());
    while (lines.length && !lines[0].length)
      lines.shift();
    while (lines.length && !lines[lines.length - 1].length)
      lines.pop();
    if (lines.length)
      this.insertLines(0, lines);
    this.props.wrap = this.metaOptions.getBoolean("wrap") ?? this.props.wrap;
    this.props.preserveIndent = this.metaOptions.getBoolean("preserveIndent") ?? this.props.preserveIndent;
  }
  /**
   * This field exists to ensure that only actual class instances are accepted
   * as the type `ExpressiveCodeBlock` by TypeScript. Without this workaround,
   * plain objects with the same structure would be accepted, but fail at runtime.
   */
  _requireInstance = Symbol("ExpressiveCodeBlock");
  #lines;
  #language;
  #meta;
  #metaOptions;
  #props;
  #locale;
  #parentDocument;
  #state;
  /**
   * Provides read-only access to the code block's plaintext contents.
   */
  get code() {
    return this.#lines.map((line) => line.text).join("\n");
  }
  get language() {
    return this.#language;
  }
  /**
   * Allows getting and setting the code block's language.
   *
   * Setting this property may throw an error if not allowed in the current {@link state}.
   */
  set language(value) {
    if (this.#state?.canEditLanguage === false)
      throw new Error('Cannot edit code block property "language" in the current state.');
    this.#language = value;
  }
  get meta() {
    return this.#meta;
  }
  /**
   * Allows getting or setting the code block's meta string. In markdown or MDX documents,
   * this is the part of the code block's opening fence that comes after the language name.
   *
   * Setting this property may throw an error if not allowed in the current {@link state}.
   */
  set meta(value) {
    if (this.#state?.canEditMetadata === false)
      throw new Error('Cannot edit code block property "meta" in the current state.');
    this.#meta = value;
    this.#metaOptions = new MetaOptions(value);
  }
  /**
   * Provides read-only access to the parsed version of the block's {@link meta} string.
   */
  get metaOptions() {
    return this.#metaOptions;
  }
  /**
   * Provides access to the code block's props.
   *
   * To allow users to set these props through the meta string, plugins can use the
   * `preprocessMetadata` hook to read `metaOptions` and update their props accordingly.
   *
   * Props can be modified until rendering starts and become read-only afterwards.
   */
  get props() {
    if (this.#state?.canEditMetadata === false) {
      return Object.freeze({ ...this.#props });
    }
    return this.#props;
  }
  /**
   * Allows getting the code block's locale (e.g. `en-US` or `de-DE`). It is used by plugins
   * to display localized strings depending on the language of the containing page.
   *
   * Integrations like `rehype-expressive-code` support multi-language sites by allowing you
   * to provide custom logic to determine a block's locale (e.g. based on its parent document).
   *
   * If no locale is defined here, `ExpressiveCodeEngine` will render the code block
   * using the `defaultLocale` provided in its configuration.
   */
  get locale() {
    return this.#locale;
  }
  /**
   * Provides read-only access to optional data about the parent document
   * the code block is located in.
   *
   * Integrations like `rehype-expressive-code` can provide this information based on
   * the source document being processed. There may be cases where no document is available,
   * e.g. when the code block was created dynamically.
   */
  get parentDocument() {
    return this.#parentDocument;
  }
  /**
   * Provides read-only access to the code block's processing state.
   *
   * The processing state controls which properties of the code block can be modified.
   * The engine updates it automatically during rendering.
   */
  get state() {
    if (this.#state) {
      const result = { ...this.#state };
      Object.freeze(result);
      return result;
    }
  }
  /**
   * @internal
   */
  set state(value) {
    validateExpressiveCodeProcessingState(value);
    if (this.#state) {
      if (this.#state === value)
        return;
      throw new Error(`You cannot change the state object of a code block after assigning it once.`);
    }
    this.#state = value;
  }
  /**
   * Returns the line at the given index, or `undefined` if the index is out of range.
   */
  getLine(index) {
    if (!isNumber(index) || index < 0)
      throw new Error("Line index must be a non-negative number.");
    return this.getLines(index, index + 1)[0];
  }
  /**
   * Returns a readonly array of lines starting at the given index and ending before
   * the given index (exclusive). The indices support the same syntax as JavaScript’s
   * `Array.slice` method.
   */
  getLines(startIndex, endIndex) {
    return Object.freeze(this.#lines.slice(startIndex, endIndex));
  }
  /**
   * Deletes the line at the given index.
   *
   * May throw an error if not allowed in the current {@link state}.
   */
  deleteLine(index) {
    this.deleteLines([index]);
  }
  /**
   * Deletes the lines at the given indices.
   *
   * This function automatically sorts the indices in descending order before deleting the lines,
   * so you do not need to worry about indices shifting after deleting a line.
   *
   * May throw an error if not allowed in the current {@link state}.
   */
  deleteLines(indices) {
    if (!Array.isArray(indices) || indices.length === 0 || indices.some((index) => !isNumber(index) || index < 0))
      throw newTypeError("non-empty non-negative number[]", indices);
    if (this.#state?.canEditCode === false)
      throw new Error("Cannot delete code block lines in the current state.");
    const sorted = [...indices].sort((a, b) => b - a);
    let lastIndex;
    sorted.forEach((index) => {
      if (lastIndex === index)
        throw new Error(`A batch of lines to delete cannot contain the same index twice. Given indices: ${JSON.stringify(indices)}`);
      lastIndex = index;
      const isValidIndex = index >= 0 && index < this.#lines.length;
      if (!isValidIndex)
        throw new Error(`Cannot delete invalid index ${JSON.stringify(index)} from line array (length=${this.#lines.length}). Given indices: ${JSON.stringify(indices)}`);
      this.#lines.splice(index, 1);
    });
  }
  /**
   * Inserts a new line at the given index.
   *
   * May throw an error if not allowed in the current {@link state}.
   */
  insertLine(index, textLine) {
    return this.insertLines(index, [textLine])[0];
  }
  /**
   * Inserts multiple new lines at the given index.
   *
   * May throw an error if not allowed in the current {@link state}.
   */
  insertLines(index, textLines) {
    if (!isNumber(index) || index < 0)
      throw newTypeError("non-negative number", index);
    if (!Array.isArray(textLines) || textLines.length === 0 || textLines.some((textLine) => !isString(textLine)))
      throw newTypeError("non-empty string[]", textLines);
    if (this.#state?.canEditCode === false)
      throw new Error("Cannot insert code block lines in the current state.");
    const isValidIndex = index >= 0 && index <= this.#lines.length;
    if (!isValidIndex)
      throw new Error(`Cannot insert at invalid index ${JSON.stringify(index)} into line array (length=${this.#lines.length}).`);
    const lineInstances = textLines.map((text) => {
      const line = new ExpressiveCodeLine(text);
      line.parent = this;
      return line;
    });
    this.#lines.splice(index, 0, ...lineInstances);
    return lineInstances;
  }
};

// ../../../node_modules/.pnpm/@shikijs+themes@1.26.1/node_modules/@shikijs/themes/dist/github-dark.mjs
var github_dark_default = Object.freeze(JSON.parse('{"colors":{"activityBar.activeBorder":"#f9826c","activityBar.background":"#24292e","activityBar.border":"#1b1f23","activityBar.foreground":"#e1e4e8","activityBar.inactiveForeground":"#6a737d","activityBarBadge.background":"#0366d6","activityBarBadge.foreground":"#fff","badge.background":"#044289","badge.foreground":"#c8e1ff","breadcrumb.activeSelectionForeground":"#d1d5da","breadcrumb.focusForeground":"#e1e4e8","breadcrumb.foreground":"#959da5","breadcrumbPicker.background":"#2b3036","button.background":"#176f2c","button.foreground":"#dcffe4","button.hoverBackground":"#22863a","button.secondaryBackground":"#444d56","button.secondaryForeground":"#fff","button.secondaryHoverBackground":"#586069","checkbox.background":"#444d56","checkbox.border":"#1b1f23","debugToolBar.background":"#2b3036","descriptionForeground":"#959da5","diffEditor.insertedTextBackground":"#28a74530","diffEditor.removedTextBackground":"#d73a4930","dropdown.background":"#2f363d","dropdown.border":"#1b1f23","dropdown.foreground":"#e1e4e8","dropdown.listBackground":"#24292e","editor.background":"#24292e","editor.findMatchBackground":"#ffd33d44","editor.findMatchHighlightBackground":"#ffd33d22","editor.focusedStackFrameHighlightBackground":"#2b6a3033","editor.foldBackground":"#58606915","editor.foreground":"#e1e4e8","editor.inactiveSelectionBackground":"#3392FF22","editor.lineHighlightBackground":"#2b3036","editor.linkedEditingBackground":"#3392FF22","editor.selectionBackground":"#3392FF44","editor.selectionHighlightBackground":"#17E5E633","editor.selectionHighlightBorder":"#17E5E600","editor.stackFrameHighlightBackground":"#C6902625","editor.wordHighlightBackground":"#17E5E600","editor.wordHighlightBorder":"#17E5E699","editor.wordHighlightStrongBackground":"#17E5E600","editor.wordHighlightStrongBorder":"#17E5E666","editorBracketHighlight.foreground1":"#79b8ff","editorBracketHighlight.foreground2":"#ffab70","editorBracketHighlight.foreground3":"#b392f0","editorBracketHighlight.foreground4":"#79b8ff","editorBracketHighlight.foreground5":"#ffab70","editorBracketHighlight.foreground6":"#b392f0","editorBracketMatch.background":"#17E5E650","editorBracketMatch.border":"#17E5E600","editorCursor.foreground":"#c8e1ff","editorError.foreground":"#f97583","editorGroup.border":"#1b1f23","editorGroupHeader.tabsBackground":"#1f2428","editorGroupHeader.tabsBorder":"#1b1f23","editorGutter.addedBackground":"#28a745","editorGutter.deletedBackground":"#ea4a5a","editorGutter.modifiedBackground":"#2188ff","editorIndentGuide.activeBackground":"#444d56","editorIndentGuide.background":"#2f363d","editorLineNumber.activeForeground":"#e1e4e8","editorLineNumber.foreground":"#444d56","editorOverviewRuler.border":"#1b1f23","editorWarning.foreground":"#ffea7f","editorWhitespace.foreground":"#444d56","editorWidget.background":"#1f2428","errorForeground":"#f97583","focusBorder":"#005cc5","foreground":"#d1d5da","gitDecoration.addedResourceForeground":"#34d058","gitDecoration.conflictingResourceForeground":"#ffab70","gitDecoration.deletedResourceForeground":"#ea4a5a","gitDecoration.ignoredResourceForeground":"#6a737d","gitDecoration.modifiedResourceForeground":"#79b8ff","gitDecoration.submoduleResourceForeground":"#6a737d","gitDecoration.untrackedResourceForeground":"#34d058","input.background":"#2f363d","input.border":"#1b1f23","input.foreground":"#e1e4e8","input.placeholderForeground":"#959da5","list.activeSelectionBackground":"#39414a","list.activeSelectionForeground":"#e1e4e8","list.focusBackground":"#044289","list.hoverBackground":"#282e34","list.hoverForeground":"#e1e4e8","list.inactiveFocusBackground":"#1d2d3e","list.inactiveSelectionBackground":"#282e34","list.inactiveSelectionForeground":"#e1e4e8","notificationCenterHeader.background":"#24292e","notificationCenterHeader.foreground":"#959da5","notifications.background":"#2f363d","notifications.border":"#1b1f23","notifications.foreground":"#e1e4e8","notificationsErrorIcon.foreground":"#ea4a5a","notificationsInfoIcon.foreground":"#79b8ff","notificationsWarningIcon.foreground":"#ffab70","panel.background":"#1f2428","panel.border":"#1b1f23","panelInput.border":"#2f363d","panelTitle.activeBorder":"#f9826c","panelTitle.activeForeground":"#e1e4e8","panelTitle.inactiveForeground":"#959da5","peekViewEditor.background":"#1f242888","peekViewEditor.matchHighlightBackground":"#ffd33d33","peekViewResult.background":"#1f2428","peekViewResult.matchHighlightBackground":"#ffd33d33","pickerGroup.border":"#444d56","pickerGroup.foreground":"#e1e4e8","progressBar.background":"#0366d6","quickInput.background":"#24292e","quickInput.foreground":"#e1e4e8","scrollbar.shadow":"#0008","scrollbarSlider.activeBackground":"#6a737d88","scrollbarSlider.background":"#6a737d33","scrollbarSlider.hoverBackground":"#6a737d44","settings.headerForeground":"#e1e4e8","settings.modifiedItemIndicator":"#0366d6","sideBar.background":"#1f2428","sideBar.border":"#1b1f23","sideBar.foreground":"#d1d5da","sideBarSectionHeader.background":"#1f2428","sideBarSectionHeader.border":"#1b1f23","sideBarSectionHeader.foreground":"#e1e4e8","sideBarTitle.foreground":"#e1e4e8","statusBar.background":"#24292e","statusBar.border":"#1b1f23","statusBar.debuggingBackground":"#931c06","statusBar.debuggingForeground":"#fff","statusBar.foreground":"#d1d5da","statusBar.noFolderBackground":"#24292e","statusBarItem.prominentBackground":"#282e34","statusBarItem.remoteBackground":"#24292e","statusBarItem.remoteForeground":"#d1d5da","tab.activeBackground":"#24292e","tab.activeBorder":"#24292e","tab.activeBorderTop":"#f9826c","tab.activeForeground":"#e1e4e8","tab.border":"#1b1f23","tab.hoverBackground":"#24292e","tab.inactiveBackground":"#1f2428","tab.inactiveForeground":"#959da5","tab.unfocusedActiveBorder":"#24292e","tab.unfocusedActiveBorderTop":"#1b1f23","tab.unfocusedHoverBackground":"#24292e","terminal.ansiBlack":"#586069","terminal.ansiBlue":"#2188ff","terminal.ansiBrightBlack":"#959da5","terminal.ansiBrightBlue":"#79b8ff","terminal.ansiBrightCyan":"#56d4dd","terminal.ansiBrightGreen":"#85e89d","terminal.ansiBrightMagenta":"#b392f0","terminal.ansiBrightRed":"#f97583","terminal.ansiBrightWhite":"#fafbfc","terminal.ansiBrightYellow":"#ffea7f","terminal.ansiCyan":"#39c5cf","terminal.ansiGreen":"#34d058","terminal.ansiMagenta":"#b392f0","terminal.ansiRed":"#ea4a5a","terminal.ansiWhite":"#d1d5da","terminal.ansiYellow":"#ffea7f","terminal.foreground":"#d1d5da","terminal.tab.activeBorder":"#f9826c","terminalCursor.background":"#586069","terminalCursor.foreground":"#79b8ff","textBlockQuote.background":"#24292e","textBlockQuote.border":"#444d56","textCodeBlock.background":"#2f363d","textLink.activeForeground":"#c8e1ff","textLink.foreground":"#79b8ff","textPreformat.foreground":"#d1d5da","textSeparator.foreground":"#586069","titleBar.activeBackground":"#24292e","titleBar.activeForeground":"#e1e4e8","titleBar.border":"#1b1f23","titleBar.inactiveBackground":"#1f2428","titleBar.inactiveForeground":"#959da5","tree.indentGuidesStroke":"#2f363d","welcomePage.buttonBackground":"#2f363d","welcomePage.buttonHoverBackground":"#444d56"},"displayName":"GitHub Dark","name":"github-dark","semanticHighlighting":true,"tokenColors":[{"scope":["comment","punctuation.definition.comment","string.comment"],"settings":{"foreground":"#6a737d"}},{"scope":["constant","entity.name.constant","variable.other.constant","variable.other.enummember","variable.language"],"settings":{"foreground":"#79b8ff"}},{"scope":["entity","entity.name"],"settings":{"foreground":"#b392f0"}},{"scope":"variable.parameter.function","settings":{"foreground":"#e1e4e8"}},{"scope":"entity.name.tag","settings":{"foreground":"#85e89d"}},{"scope":"keyword","settings":{"foreground":"#f97583"}},{"scope":["storage","storage.type"],"settings":{"foreground":"#f97583"}},{"scope":["storage.modifier.package","storage.modifier.import","storage.type.java"],"settings":{"foreground":"#e1e4e8"}},{"scope":["string","punctuation.definition.string","string punctuation.section.embedded source"],"settings":{"foreground":"#9ecbff"}},{"scope":"support","settings":{"foreground":"#79b8ff"}},{"scope":"meta.property-name","settings":{"foreground":"#79b8ff"}},{"scope":"variable","settings":{"foreground":"#ffab70"}},{"scope":"variable.other","settings":{"foreground":"#e1e4e8"}},{"scope":"invalid.broken","settings":{"fontStyle":"italic","foreground":"#fdaeb7"}},{"scope":"invalid.deprecated","settings":{"fontStyle":"italic","foreground":"#fdaeb7"}},{"scope":"invalid.illegal","settings":{"fontStyle":"italic","foreground":"#fdaeb7"}},{"scope":"invalid.unimplemented","settings":{"fontStyle":"italic","foreground":"#fdaeb7"}},{"scope":"carriage-return","settings":{"background":"#f97583","content":"^M","fontStyle":"italic underline","foreground":"#24292e"}},{"scope":"message.error","settings":{"foreground":"#fdaeb7"}},{"scope":"string variable","settings":{"foreground":"#79b8ff"}},{"scope":["source.regexp","string.regexp"],"settings":{"foreground":"#dbedff"}},{"scope":["string.regexp.character-class","string.regexp constant.character.escape","string.regexp source.ruby.embedded","string.regexp string.regexp.arbitrary-repitition"],"settings":{"foreground":"#dbedff"}},{"scope":"string.regexp constant.character.escape","settings":{"fontStyle":"bold","foreground":"#85e89d"}},{"scope":"support.constant","settings":{"foreground":"#79b8ff"}},{"scope":"support.variable","settings":{"foreground":"#79b8ff"}},{"scope":"meta.module-reference","settings":{"foreground":"#79b8ff"}},{"scope":"punctuation.definition.list.begin.markdown","settings":{"foreground":"#ffab70"}},{"scope":["markup.heading","markup.heading entity.name"],"settings":{"fontStyle":"bold","foreground":"#79b8ff"}},{"scope":"markup.quote","settings":{"foreground":"#85e89d"}},{"scope":"markup.italic","settings":{"fontStyle":"italic","foreground":"#e1e4e8"}},{"scope":"markup.bold","settings":{"fontStyle":"bold","foreground":"#e1e4e8"}},{"scope":["markup.underline"],"settings":{"fontStyle":"underline"}},{"scope":["markup.strikethrough"],"settings":{"fontStyle":"strikethrough"}},{"scope":"markup.inline.raw","settings":{"foreground":"#79b8ff"}},{"scope":["markup.deleted","meta.diff.header.from-file","punctuation.definition.deleted"],"settings":{"background":"#86181d","foreground":"#fdaeb7"}},{"scope":["markup.inserted","meta.diff.header.to-file","punctuation.definition.inserted"],"settings":{"background":"#144620","foreground":"#85e89d"}},{"scope":["markup.changed","punctuation.definition.changed"],"settings":{"background":"#c24e00","foreground":"#ffab70"}},{"scope":["markup.ignored","markup.untracked"],"settings":{"background":"#79b8ff","foreground":"#2f363d"}},{"scope":"meta.diff.range","settings":{"fontStyle":"bold","foreground":"#b392f0"}},{"scope":"meta.diff.header","settings":{"foreground":"#79b8ff"}},{"scope":"meta.separator","settings":{"fontStyle":"bold","foreground":"#79b8ff"}},{"scope":"meta.output","settings":{"foreground":"#79b8ff"}},{"scope":["brackethighlighter.tag","brackethighlighter.curly","brackethighlighter.round","brackethighlighter.square","brackethighlighter.angle","brackethighlighter.quote"],"settings":{"foreground":"#d1d5da"}},{"scope":"brackethighlighter.unmatched","settings":{"foreground":"#fdaeb7"}},{"scope":["constant.other.reference.link","string.other.link"],"settings":{"fontStyle":"underline","foreground":"#dbedff"}}],"type":"dark"}'));

// ../../../node_modules/.pnpm/@shikijs+themes@1.26.1/node_modules/@shikijs/themes/dist/github-light.mjs
var github_light_default = Object.freeze(JSON.parse('{"colors":{"activityBar.activeBorder":"#f9826c","activityBar.background":"#fff","activityBar.border":"#e1e4e8","activityBar.foreground":"#2f363d","activityBar.inactiveForeground":"#959da5","activityBarBadge.background":"#2188ff","activityBarBadge.foreground":"#fff","badge.background":"#dbedff","badge.foreground":"#005cc5","breadcrumb.activeSelectionForeground":"#586069","breadcrumb.focusForeground":"#2f363d","breadcrumb.foreground":"#6a737d","breadcrumbPicker.background":"#fafbfc","button.background":"#159739","button.foreground":"#fff","button.hoverBackground":"#138934","button.secondaryBackground":"#e1e4e8","button.secondaryForeground":"#1b1f23","button.secondaryHoverBackground":"#d1d5da","checkbox.background":"#fafbfc","checkbox.border":"#d1d5da","debugToolBar.background":"#fff","descriptionForeground":"#6a737d","diffEditor.insertedTextBackground":"#34d05822","diffEditor.removedTextBackground":"#d73a4922","dropdown.background":"#fafbfc","dropdown.border":"#e1e4e8","dropdown.foreground":"#2f363d","dropdown.listBackground":"#fff","editor.background":"#fff","editor.findMatchBackground":"#ffdf5d","editor.findMatchHighlightBackground":"#ffdf5d66","editor.focusedStackFrameHighlightBackground":"#28a74525","editor.foldBackground":"#d1d5da11","editor.foreground":"#24292e","editor.inactiveSelectionBackground":"#0366d611","editor.lineHighlightBackground":"#f6f8fa","editor.linkedEditingBackground":"#0366d611","editor.selectionBackground":"#0366d625","editor.selectionHighlightBackground":"#34d05840","editor.selectionHighlightBorder":"#34d05800","editor.stackFrameHighlightBackground":"#ffd33d33","editor.wordHighlightBackground":"#34d05800","editor.wordHighlightBorder":"#24943e99","editor.wordHighlightStrongBackground":"#34d05800","editor.wordHighlightStrongBorder":"#24943e50","editorBracketHighlight.foreground1":"#005cc5","editorBracketHighlight.foreground2":"#e36209","editorBracketHighlight.foreground3":"#5a32a3","editorBracketHighlight.foreground4":"#005cc5","editorBracketHighlight.foreground5":"#e36209","editorBracketHighlight.foreground6":"#5a32a3","editorBracketMatch.background":"#34d05840","editorBracketMatch.border":"#34d05800","editorCursor.foreground":"#044289","editorError.foreground":"#cb2431","editorGroup.border":"#e1e4e8","editorGroupHeader.tabsBackground":"#f6f8fa","editorGroupHeader.tabsBorder":"#e1e4e8","editorGutter.addedBackground":"#28a745","editorGutter.deletedBackground":"#d73a49","editorGutter.modifiedBackground":"#2188ff","editorIndentGuide.activeBackground":"#d7dbe0","editorIndentGuide.background":"#eff2f6","editorLineNumber.activeForeground":"#24292e","editorLineNumber.foreground":"#1b1f234d","editorOverviewRuler.border":"#fff","editorWarning.foreground":"#f9c513","editorWhitespace.foreground":"#d1d5da","editorWidget.background":"#f6f8fa","errorForeground":"#cb2431","focusBorder":"#2188ff","foreground":"#444d56","gitDecoration.addedResourceForeground":"#28a745","gitDecoration.conflictingResourceForeground":"#e36209","gitDecoration.deletedResourceForeground":"#d73a49","gitDecoration.ignoredResourceForeground":"#959da5","gitDecoration.modifiedResourceForeground":"#005cc5","gitDecoration.submoduleResourceForeground":"#959da5","gitDecoration.untrackedResourceForeground":"#28a745","input.background":"#fafbfc","input.border":"#e1e4e8","input.foreground":"#2f363d","input.placeholderForeground":"#959da5","list.activeSelectionBackground":"#e2e5e9","list.activeSelectionForeground":"#2f363d","list.focusBackground":"#cce5ff","list.hoverBackground":"#ebf0f4","list.hoverForeground":"#2f363d","list.inactiveFocusBackground":"#dbedff","list.inactiveSelectionBackground":"#e8eaed","list.inactiveSelectionForeground":"#2f363d","notificationCenterHeader.background":"#e1e4e8","notificationCenterHeader.foreground":"#6a737d","notifications.background":"#fafbfc","notifications.border":"#e1e4e8","notifications.foreground":"#2f363d","notificationsErrorIcon.foreground":"#d73a49","notificationsInfoIcon.foreground":"#005cc5","notificationsWarningIcon.foreground":"#e36209","panel.background":"#f6f8fa","panel.border":"#e1e4e8","panelInput.border":"#e1e4e8","panelTitle.activeBorder":"#f9826c","panelTitle.activeForeground":"#2f363d","panelTitle.inactiveForeground":"#6a737d","pickerGroup.border":"#e1e4e8","pickerGroup.foreground":"#2f363d","progressBar.background":"#2188ff","quickInput.background":"#fafbfc","quickInput.foreground":"#2f363d","scrollbar.shadow":"#6a737d33","scrollbarSlider.activeBackground":"#959da588","scrollbarSlider.background":"#959da533","scrollbarSlider.hoverBackground":"#959da544","settings.headerForeground":"#2f363d","settings.modifiedItemIndicator":"#2188ff","sideBar.background":"#f6f8fa","sideBar.border":"#e1e4e8","sideBar.foreground":"#586069","sideBarSectionHeader.background":"#f6f8fa","sideBarSectionHeader.border":"#e1e4e8","sideBarSectionHeader.foreground":"#2f363d","sideBarTitle.foreground":"#2f363d","statusBar.background":"#fff","statusBar.border":"#e1e4e8","statusBar.debuggingBackground":"#f9826c","statusBar.debuggingForeground":"#fff","statusBar.foreground":"#586069","statusBar.noFolderBackground":"#fff","statusBarItem.prominentBackground":"#e8eaed","statusBarItem.remoteBackground":"#fff","statusBarItem.remoteForeground":"#586069","tab.activeBackground":"#fff","tab.activeBorder":"#fff","tab.activeBorderTop":"#f9826c","tab.activeForeground":"#2f363d","tab.border":"#e1e4e8","tab.hoverBackground":"#fff","tab.inactiveBackground":"#f6f8fa","tab.inactiveForeground":"#6a737d","tab.unfocusedActiveBorder":"#fff","tab.unfocusedActiveBorderTop":"#e1e4e8","tab.unfocusedHoverBackground":"#fff","terminal.ansiBlack":"#24292e","terminal.ansiBlue":"#0366d6","terminal.ansiBrightBlack":"#959da5","terminal.ansiBrightBlue":"#005cc5","terminal.ansiBrightCyan":"#3192aa","terminal.ansiBrightGreen":"#22863a","terminal.ansiBrightMagenta":"#5a32a3","terminal.ansiBrightRed":"#cb2431","terminal.ansiBrightWhite":"#d1d5da","terminal.ansiBrightYellow":"#b08800","terminal.ansiCyan":"#1b7c83","terminal.ansiGreen":"#28a745","terminal.ansiMagenta":"#5a32a3","terminal.ansiRed":"#d73a49","terminal.ansiWhite":"#6a737d","terminal.ansiYellow":"#dbab09","terminal.foreground":"#586069","terminal.tab.activeBorder":"#f9826c","terminalCursor.background":"#d1d5da","terminalCursor.foreground":"#005cc5","textBlockQuote.background":"#fafbfc","textBlockQuote.border":"#e1e4e8","textCodeBlock.background":"#f6f8fa","textLink.activeForeground":"#005cc5","textLink.foreground":"#0366d6","textPreformat.foreground":"#586069","textSeparator.foreground":"#d1d5da","titleBar.activeBackground":"#fff","titleBar.activeForeground":"#2f363d","titleBar.border":"#e1e4e8","titleBar.inactiveBackground":"#f6f8fa","titleBar.inactiveForeground":"#6a737d","tree.indentGuidesStroke":"#e1e4e8","welcomePage.buttonBackground":"#f6f8fa","welcomePage.buttonHoverBackground":"#e1e4e8"},"displayName":"GitHub Light","name":"github-light","semanticHighlighting":true,"tokenColors":[{"scope":["comment","punctuation.definition.comment","string.comment"],"settings":{"foreground":"#6a737d"}},{"scope":["constant","entity.name.constant","variable.other.constant","variable.other.enummember","variable.language"],"settings":{"foreground":"#005cc5"}},{"scope":["entity","entity.name"],"settings":{"foreground":"#6f42c1"}},{"scope":"variable.parameter.function","settings":{"foreground":"#24292e"}},{"scope":"entity.name.tag","settings":{"foreground":"#22863a"}},{"scope":"keyword","settings":{"foreground":"#d73a49"}},{"scope":["storage","storage.type"],"settings":{"foreground":"#d73a49"}},{"scope":["storage.modifier.package","storage.modifier.import","storage.type.java"],"settings":{"foreground":"#24292e"}},{"scope":["string","punctuation.definition.string","string punctuation.section.embedded source"],"settings":{"foreground":"#032f62"}},{"scope":"support","settings":{"foreground":"#005cc5"}},{"scope":"meta.property-name","settings":{"foreground":"#005cc5"}},{"scope":"variable","settings":{"foreground":"#e36209"}},{"scope":"variable.other","settings":{"foreground":"#24292e"}},{"scope":"invalid.broken","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"invalid.deprecated","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"invalid.illegal","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"invalid.unimplemented","settings":{"fontStyle":"italic","foreground":"#b31d28"}},{"scope":"carriage-return","settings":{"background":"#d73a49","content":"^M","fontStyle":"italic underline","foreground":"#fafbfc"}},{"scope":"message.error","settings":{"foreground":"#b31d28"}},{"scope":"string variable","settings":{"foreground":"#005cc5"}},{"scope":["source.regexp","string.regexp"],"settings":{"foreground":"#032f62"}},{"scope":["string.regexp.character-class","string.regexp constant.character.escape","string.regexp source.ruby.embedded","string.regexp string.regexp.arbitrary-repitition"],"settings":{"foreground":"#032f62"}},{"scope":"string.regexp constant.character.escape","settings":{"fontStyle":"bold","foreground":"#22863a"}},{"scope":"support.constant","settings":{"foreground":"#005cc5"}},{"scope":"support.variable","settings":{"foreground":"#005cc5"}},{"scope":"meta.module-reference","settings":{"foreground":"#005cc5"}},{"scope":"punctuation.definition.list.begin.markdown","settings":{"foreground":"#e36209"}},{"scope":["markup.heading","markup.heading entity.name"],"settings":{"fontStyle":"bold","foreground":"#005cc5"}},{"scope":"markup.quote","settings":{"foreground":"#22863a"}},{"scope":"markup.italic","settings":{"fontStyle":"italic","foreground":"#24292e"}},{"scope":"markup.bold","settings":{"fontStyle":"bold","foreground":"#24292e"}},{"scope":["markup.underline"],"settings":{"fontStyle":"underline"}},{"scope":["markup.strikethrough"],"settings":{"fontStyle":"strikethrough"}},{"scope":"markup.inline.raw","settings":{"foreground":"#005cc5"}},{"scope":["markup.deleted","meta.diff.header.from-file","punctuation.definition.deleted"],"settings":{"background":"#ffeef0","foreground":"#b31d28"}},{"scope":["markup.inserted","meta.diff.header.to-file","punctuation.definition.inserted"],"settings":{"background":"#f0fff4","foreground":"#22863a"}},{"scope":["markup.changed","punctuation.definition.changed"],"settings":{"background":"#ffebda","foreground":"#e36209"}},{"scope":["markup.ignored","markup.untracked"],"settings":{"background":"#005cc5","foreground":"#f6f8fa"}},{"scope":"meta.diff.range","settings":{"fontStyle":"bold","foreground":"#6f42c1"}},{"scope":"meta.diff.header","settings":{"foreground":"#005cc5"}},{"scope":"meta.separator","settings":{"fontStyle":"bold","foreground":"#005cc5"}},{"scope":"meta.output","settings":{"foreground":"#005cc5"}},{"scope":["brackethighlighter.tag","brackethighlighter.curly","brackethighlighter.round","brackethighlighter.square","brackethighlighter.angle","brackethighlighter.quote"],"settings":{"foreground":"#586069"}},{"scope":"brackethighlighter.unmatched","settings":{"foreground":"#b31d28"}},{"scope":["constant.other.reference.link","string.other.link"],"settings":{"fontStyle":"underline","foreground":"#032f62"}}],"type":"light"}'));

// src/internal/render-group.ts
async function renderGroup({
  input,
  options,
  defaultLocale,
  config,
  plugins,
  cssVar,
  cssVarName,
  styleVariants
}) {
  const inputArray = Array.isArray(input) ? input : [input];
  const groupContents = inputArray.map((blockOrOptions) => {
    if (blockOrOptions instanceof ExpressiveCodeBlock) {
      return { codeBlock: blockOrOptions };
    } else {
      return { codeBlock: new ExpressiveCodeBlock(blockOrOptions) };
    }
  });
  Object.freeze(groupContents);
  options?.onInitGroup?.(groupContents);
  const renderedGroupContents = groupContents;
  const pluginStyles = [];
  for (const groupContent of renderedGroupContents) {
    const { renderedBlockAst, blockStyles } = await renderBlock({
      codeBlock: groupContent.codeBlock,
      groupContents,
      locale: groupContent.codeBlock.locale || defaultLocale,
      config,
      plugins,
      cssVar,
      cssVarName,
      styleVariants
    });
    groupContent.renderedBlockAst = renderedBlockAst;
    pluginStyles.push(...blockStyles);
  }
  const groupRenderData = {
    groupAst: buildGroupAstFromRenderedBlocks(renderedGroupContents.map(({ renderedBlockAst }) => renderedBlockAst))
  };
  const runHooksContext = {
    plugins,
    config
  };
  await runHooks("postprocessRenderedBlockGroup", runHooksContext, async ({ hookFn, plugin }) => {
    await hookFn({
      renderedGroupContents,
      pluginStyles,
      addStyles: (styles) => pluginStyles.push({ pluginName: plugin.name, styles }),
      renderData: groupRenderData
    });
    if (!isHastElement(groupRenderData.groupAst)) {
      throw newTypeError("hast Element", groupRenderData.groupAst, "groupAst");
    }
  });
  return {
    renderedGroupAst: groupRenderData.groupAst,
    renderedGroupContents,
    styles: await processPluginStyles(pluginStyles)
  };
}
function buildGroupAstFromRenderedBlocks(renderedBlocks) {
  return h(`${groupWrapperElement}.${groupWrapperClassName}`, renderedBlocks);
}

// ../../../node_modules/.pnpm/culori@4.0.1/node_modules/culori/src/lrgb/convertRgbToLrgb.js
var fn = (c = 0) => {
  const abs = Math.abs(c);
  if (abs <= 0.04045) {
    return c / 12.92;
  }
  return (Math.sign(c) || 1) * Math.pow((abs + 0.055) / 1.055, 2.4);
};
var convertRgbToLrgb = ({ r, g, b, alpha }) => {
  let res = {
    mode: "lrgb",
    r: fn(r),
    g: fn(g),
    b: fn(b)
  };
  if (alpha !== undefined)
    res.alpha = alpha;
  return res;
};
var convertRgbToLrgb_default = convertRgbToLrgb;

// ../../../node_modules/.pnpm/culori@4.0.1/node_modules/culori/src/lrgb/convertLrgbToRgb.js
var fn2 = (c = 0) => {
  const abs = Math.abs(c);
  if (abs > 31308e-7) {
    return (Math.sign(c) || 1) * (1.055 * Math.pow(abs, 1 / 2.4) - 0.055);
  }
  return c * 12.92;
};
var convertLrgbToRgb = ({ r, g, b, alpha }, mode = "rgb") => {
  let res = {
    mode,
    r: fn2(r),
    g: fn2(g),
    b: fn2(b)
  };
  if (alpha !== undefined)
    res.alpha = alpha;
  return res;
};
var convertLrgbToRgb_default = convertLrgbToRgb;

// ../../../node_modules/.pnpm/culori@4.0.1/node_modules/culori/src/util/normalizeHue.js
var normalizeHue = (hue) => (hue = hue % 360) < 0 ? hue + 360 : hue;
var normalizeHue_default = normalizeHue;

// ../../../node_modules/.pnpm/culori@4.0.1/node_modules/culori/src/lch/convertLabToLch.js
var convertLabToLch = ({ l, a, b, alpha }, mode = "lch") => {
  if (a === undefined)
    a = 0;
  if (b === undefined)
    b = 0;
  let c = Math.sqrt(a * a + b * b);
  let res = { mode, l, c };
  if (c)
    res.h = normalizeHue_default(Math.atan2(b, a) * 180 / Math.PI);
  if (alpha !== undefined)
    res.alpha = alpha;
  return res;
};
var convertLabToLch_default = convertLabToLch;

// ../../../node_modules/.pnpm/culori@4.0.1/node_modules/culori/src/lch/convertLchToLab.js
var convertLchToLab = ({ l, c, h: h2, alpha }, mode = "lab") => {
  if (h2 === undefined)
    h2 = 0;
  let res = {
    mode,
    l,
    a: c ? c * Math.cos(h2 / 180 * Math.PI) : 0,
    b: c ? c * Math.sin(h2 / 180 * Math.PI) : 0
  };
  if (alpha !== undefined)
    res.alpha = alpha;
  return res;
};
var convertLchToLab_default = convertLchToLab;

// ../../../node_modules/.pnpm/culori@4.0.1/node_modules/culori/src/hsl/convertHslToRgb.js
function convertHslToRgb({ h: h2, s: s2, l, alpha }) {
  h2 = normalizeHue_default(h2 !== undefined ? h2 : 0);
  if (s2 === undefined)
    s2 = 0;
  if (l === undefined)
    l = 0;
  let m1 = l + s2 * (l < 0.5 ? l : 1 - l);
  let m2 = m1 - (m1 - l) * 2 * Math.abs(h2 / 60 % 2 - 1);
  let res;
  switch (Math.floor(h2 / 60)) {
    case 0:
      res = { r: m1, g: m2, b: 2 * l - m1 };
      break;
    case 1:
      res = { r: m2, g: m1, b: 2 * l - m1 };
      break;
    case 2:
      res = { r: 2 * l - m1, g: m1, b: m2 };
      break;
    case 3:
      res = { r: 2 * l - m1, g: m2, b: m1 };
      break;
    case 4:
      res = { r: m2, g: 2 * l - m1, b: m1 };
      break;
    case 5:
      res = { r: m1, g: 2 * l - m1, b: m2 };
      break;
    default:
      res = { r: 2 * l - m1, g: 2 * l - m1, b: 2 * l - m1 };
  }
  res.mode = "rgb";
  if (alpha !== undefined)
    res.alpha = alpha;
  return res;
}

// ../../../node_modules/.pnpm/culori@4.0.1/node_modules/culori/src/oklab/convertLrgbToOklab.js
var convertLrgbToOklab = ({ r, g, b, alpha }) => {
  if (r === undefined)
    r = 0;
  if (g === undefined)
    g = 0;
  if (b === undefined)
    b = 0;
  let L = Math.cbrt(
    0.41222147079999993 * r + 0.5363325363 * g + 0.0514459929 * b
  );
  let M = Math.cbrt(
    0.2119034981999999 * r + 0.6806995450999999 * g + 0.1073969566 * b
  );
  let S = Math.cbrt(
    0.08830246189999998 * r + 0.2817188376 * g + 0.6299787005000002 * b
  );
  let res = {
    mode: "oklab",
    l: 0.2104542553 * L + 0.793617785 * M - 0.0040720468 * S,
    a: 1.9779984951 * L - 2.428592205 * M + 0.4505937099 * S,
    b: 0.0259040371 * L + 0.7827717662 * M - 0.808675766 * S
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertLrgbToOklab_default = convertLrgbToOklab;

// ../../../node_modules/.pnpm/culori@4.0.1/node_modules/culori/src/oklab/convertRgbToOklab.js
var convertRgbToOklab = (rgb) => {
  let res = convertLrgbToOklab_default(convertRgbToLrgb_default(rgb));
  if (rgb.r === rgb.b && rgb.b === rgb.g) {
    res.a = res.b = 0;
  }
  return res;
};
var convertRgbToOklab_default = convertRgbToOklab;

// ../../../node_modules/.pnpm/culori@4.0.1/node_modules/culori/src/oklab/convertOklabToLrgb.js
var convertOklabToLrgb = ({ l, a, b, alpha }) => {
  if (l === undefined)
    l = 0;
  if (a === undefined)
    a = 0;
  if (b === undefined)
    b = 0;
  let L = Math.pow(
    l * 0.9999999984505198 + 0.39633779217376786 * a + 0.2158037580607588 * b,
    3
  );
  let M = Math.pow(
    l * 1.0000000088817609 - 0.10556134232365635 * a - 0.06385417477170591 * b,
    3
  );
  let S = Math.pow(
    l * 1.0000000546724108 - 0.08948418209496575 * a - 1.2914855378640917 * b,
    3
  );
  let res = {
    mode: "lrgb",
    r: 4.076741661347994 * L - 3.307711590408193 * M + 0.230969928729428 * S,
    g: -1.2684380040921763 * L + 2.6097574006633715 * M - 0.3413193963102197 * S,
    b: -0.004196086541837188 * L - 0.7034186144594493 * M + 1.7076147009309444 * S
  };
  if (alpha !== undefined) {
    res.alpha = alpha;
  }
  return res;
};
var convertOklabToLrgb_default = convertOklabToLrgb;

// ../../../node_modules/.pnpm/culori@4.0.1/node_modules/culori/src/oklab/convertOklabToRgb.js
var convertOklabToRgb = (c) => convertLrgbToRgb_default(convertOklabToLrgb_default(c));
var convertOklabToRgb_default = convertOklabToRgb;

// src/internal/search-algorithms.ts
function binarySearch({
  getValueFn,
  targetValue,
  preferHigher,
  tolerance = 0.1,
  low = 0,
  high = 1,
  minChangeFactor = 1e-3,
  maxIterations = 25
}) {
  const epsilon = minChangeFactor * Math.abs(high - low);
  let iterations = 0;
  let mid;
  let lastMid;
  while (mid = (low + high) / 2, iterations < maxIterations) {
    const currentValue = getValueFn(mid);
    const resultIsWithinTolerance = Math.abs(currentValue - targetValue) <= tolerance;
    const resultIsInPreferredDirection = preferHigher === undefined ? true : preferHigher ? currentValue > targetValue : currentValue < targetValue;
    const midChangedLessThanEpsilon = lastMid !== undefined && Math.abs(lastMid - mid) < epsilon;
    if (resultIsInPreferredDirection && (resultIsWithinTolerance || midChangedLessThanEpsilon)) {
      return mid;
    } else if (currentValue < targetValue) {
      low = mid;
    } else {
      high = mid;
    }
    iterations++;
    lastMid = mid;
  }
  return mid;
}
function bisect({
  checkFn,
  low = 0,
  high = 1,
  /**
   * If the midpoint changes less than `minChangeFactor * Math.abs(high - low)`
   * between iterations, the search will stop and return the highest value
   * that `checkFn` returned `true` for.
   */
  minChangeFactor = 1e-3,
  maxIterations = 25
}) {
  const epsilon = minChangeFactor * Math.abs(high - low);
  let iterations = 0;
  let highestValid;
  let mid;
  let lastMid;
  while (mid = (low + high) / 2, iterations < maxIterations) {
    const isValid = checkFn(mid);
    if (isValid) {
      highestValid = mid;
      low = mid;
    } else {
      high = mid;
    }
    const midChangedLessThanEpsilon = lastMid !== undefined && Math.abs(lastMid - mid) < epsilon;
    if (midChangedLessThanEpsilon)
      return highestValid;
    iterations++;
    lastMid = mid;
  }
  return highestValid;
}

// src/internal/color-spaces.ts
var D65 = [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329];
var m = [
  [3.240969941904521, -1.537383177570093, -0.498610760293],
  [-0.96924363628087, 1.87596750150772, 0.041555057407175],
  [0.055630079696993, -0.20397695888897, 1.056971514242878]
];
function xyzToRgb(xyz) {
  const [x, y, z] = [xyz.x, xyz.y, xyz.z].map((v) => v / 100);
  const linearToSrgb = (v) => v > 31308e-7 ? 1.055 * Math.pow(v, 1 / 2.4) - 0.055 : 12.92 * v;
  const r = x * m[0][0] + y * m[0][1] + z * m[0][2];
  const g = x * m[1][0] + y * m[1][1] + z * m[1][2];
  const b = x * m[2][0] + y * m[2][1] + z * m[2][2];
  return {
    r: linearToSrgb(r) * 255,
    g: linearToSrgb(g) * 255,
    b: linearToSrgb(b) * 255
  };
}
function labToXyz(lab, illuminant = D65) {
  const [l, a, b] = [lab.l, lab.a, lab.b].map((v) => v / 100);
  const y = (l + 0.16) / 1.16;
  const x = a / 5 + y;
  const z = y - b / 2;
  const transform = (v, whitepoint) => {
    const pow = Math.pow(v, 3);
    return (pow > 8856e-6 ? pow : (v - 16 / 116) / 7.787037) * whitepoint;
  };
  return {
    x: transform(x, illuminant[0]) * 100,
    y: transform(y, illuminant[1]) * 100,
    z: transform(z, illuminant[2]) * 100
  };
}
function lchabToLab(lch) {
  return {
    l: lch.l,
    a: lch.c * Math.cos((lch.h ?? 0) * Math.PI / 180),
    b: lch.c * Math.sin((lch.h ?? 0) * Math.PI / 180),
    alpha: lch.alpha
  };
}
function labToRgba(lab, illuminant = D65) {
  const xyz = labToXyz(lab, illuminant);
  return {
    ...xyzToRgb(xyz),
    a: lab.alpha
  };
}
function lchabToRgba(lch, illuminant = D65) {
  return labToRgba(lchabToLab(lch), illuminant);
}
function rgbaToCulori(rgba) {
  const { r, g, b, a } = rgba;
  return {
    mode: "rgb",
    r: r / 255,
    g: g / 255,
    b: b / 255,
    ...a !== undefined && { alpha: a }
  };
}
function rgbaFromCulori(culoriRgb) {
  const { r, g, b, alpha } = culoriRgb;
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255,
    a: alpha
  };
}
function hslToRgba(input) {
  return rgbaFromCulori(convertHslToRgb(input));
}
function rgbaToOklch(input) {
  const oklab = convertRgbToOklab_default(rgbaToCulori(input));
  return convertLabToLch_default(oklab, "oklch");
}
function oklchToRgba(input, clampChroma = true) {
  const convert = (oklch) => {
    const oklab = convertLchToLab_default(oklch, "oklab");
    const rgb = convertOklabToRgb_default(oklab);
    const minChannel = Math.min(rgb.r, rgb.g, rgb.b);
    const maxChannel = Math.max(rgb.r, rgb.g, rgb.b);
    const inGamut = minChannel >= 0 && maxChannel <= 1;
    return {
      rgb,
      c: oklch.c,
      inGamut
    };
  };
  let result = convert(input);
  if (!result.inGamut && clampChroma) {
    result = convert({ ...input, c: 0 });
    if (result.inGamut) {
      const maxChromaInGamut = bisect({
        checkFn: (c) => convert({ ...input, c }).inGamut,
        low: 0,
        high: input.c,
        minChangeFactor: 1e-4
      });
      result = convert({ ...input, c: maxChromaInGamut ?? 0 });
    }
  }
  return rgbaFromCulori(result.rgb);
}
function normalizeAngle(angle) {
  angle %= 360;
  return angle < 0 ? angle + 360 : angle;
}
function parseAngle(value) {
  return normalizeAngle(parseFloat(value));
}
function parseCssLabColor(labString) {
  const match = labString.match(/^lab\(\s*([\d.]+%?)\s+(-?[\d.]+%?)\s+(-?[\d.]+%?)(?:\s*\/\s*([\d.]+%?))?\s*\)$/i);
  if (!match) {
    return undefined;
  }
  const [, l, a, b, alpha] = match;
  return {
    l: parseCssValue(l, 0, 100),
    a: parseCssValue(a, -125, 125),
    b: parseCssValue(b, -125, 125),
    alpha: alpha !== undefined ? parseCssValue(alpha, 0, 1) : undefined
  };
}
function parseCssLchColor(lchString) {
  const match = lchString.match(/^lch\(\s*([\d.]+%?)\s+([\d.]+%?)\s+([\d.]+(?:deg)?)(?:\s*\/\s*([\d.]+%?))?\s*\)$/i);
  if (!match) {
    return undefined;
  }
  const [, l, c, h2, alpha] = match;
  return {
    l: parseCssValue(l, 0, 100),
    c: parseCssValue(c, 0, 150),
    h: parseAngle(h2),
    alpha: alpha !== undefined ? parseCssValue(alpha, 0, 1) : undefined
  };
}
function parseCssOklchColor(oklchString) {
  const match = oklchString.match(/^oklch\(\s*([\d.]+%?)\s+([\d.]+%?)\s+([\d.]+(?:deg)?)(?:\s*\/\s*([\d.]+%?))?\s*\)$/i);
  if (!match) {
    return undefined;
  }
  const [, l, c, h2, alpha] = match;
  return {
    mode: "oklch",
    l: parseCssValue(l, 0, 1),
    c: parseCssValue(c, 0, 0.5, 0.4),
    h: parseAngle(h2),
    ...alpha !== undefined && { alpha: parseCssValue(alpha, 0, 1) }
  };
}
function parseCssValue(value, min, max, valueFor100Percent) {
  const isPercentage = value.endsWith("%");
  const floatValue = parseFloat(value);
  const convertedValue = isPercentage ? floatValue * (valueFor100Percent ?? max) / 100 : floatValue;
  return Math.max(min, Math.min(max, convertedValue));
}

// src/helpers/color-transforms.ts
function setAlpha(input, newAlpha) {
  return withParsedColor(input, (color) => {
    return toHexColor(color.setAlpha(newAlpha));
  });
}
function multiplyAlpha(input, factor) {
  return withParsedColor(input, (color) => {
    return toHexColor(color.setAlpha(minMaxRounded(color.getAlpha() * factor)));
  });
}
function getLuminance(input) {
  return toTinyColor(input).getLuminance();
}
function setLuminance(input, targetLuminance) {
  return withParsedColor(input, (color) => {
    targetLuminance = minMaxRounded(targetLuminance);
    const increasing = targetLuminance > color.getLuminance();
    const mixColor = increasing ? "#fff" : "#000";
    const mixAmount = binarySearch({
      getValueFn: (amount) => {
        return toTinyColor(color).mix(mixColor, amount * 100).getLuminance();
      },
      targetValue: targetLuminance,
      preferHigher: targetLuminance > 0 && targetLuminance < 1 ? increasing : undefined,
      tolerance: 1 / 256,
      // Ensure that the binary search range matches the luminance target direction
      low: increasing ? 0 : 1,
      high: increasing ? 1 : 0
    });
    return toHexColor(color.mix(mixColor, mixAmount * 100));
  });
}
function lighten(input, amount) {
  return withParsedColor(input, (color) => {
    const hsl = color.toHsl();
    const l = minMaxRounded(hsl.l);
    const { h: h2, s: s2, a: alpha } = hsl;
    return toHexColor(toTinyColor({ mode: "hsl", h: h2, s: s2, l: minMaxRounded(l + l * amount), alpha }));
  });
}
function darken(input, amount) {
  return lighten(input, -amount);
}
function onBackground(input, background) {
  return withParsedColor(
    input,
    (color) => {
      const backgroundColor = toTinyColor(background);
      return toHexColor(color.onBackground(backgroundColor));
    },
    background
  );
}
function ensureColorContrastOnBackground(input, background, minContrast = 5.5, maxContrast = 22) {
  return withParsedColor(input, (color) => {
    return withParsedColor(
      background,
      (backgroundColor) => {
        const hexBackgroundColor = toHexColor(backgroundColor);
        let newColor = toTinyColor(color);
        let curContrast = readability(newColor.onBackground(backgroundColor), backgroundColor);
        if (curContrast < minContrast) {
          const contrastWithoutAlpha = readability(newColor, backgroundColor);
          if (contrastWithoutAlpha < minContrast) {
            newColor = toTinyColor(changeLuminanceToReachColorContrast(toHexColor(newColor), hexBackgroundColor, minContrast));
            curContrast = readability(newColor.onBackground(backgroundColor), backgroundColor);
          }
        }
        if (curContrast < minContrast || curContrast > maxContrast) {
          newColor = toTinyColor(changeAlphaToReachColorContrast(toHexColor(newColor), hexBackgroundColor, minContrast, maxContrast));
        }
        return toHexColor(newColor);
      },
      toHexColor(color)
    );
  });
}
function changeLuminanceToReachColorContrast(input1, input2, minContrast = 6) {
  const color1 = toTinyColor(input1);
  const color2 = toTinyColor(input2);
  const oldContrast = readability(color1, color2);
  if (oldContrast >= minContrast)
    return toHexColor(color1);
  const color1L = color1.getLuminance();
  const color2L = color2.getLuminance();
  const lightenTargetL = (color2L + 0.05) * minContrast - 0.05;
  const darkenTargetL = (color2L + 0.05) / minContrast - 0.05;
  const lightenedColor = setLuminance(input1, lightenTargetL);
  const darkenedColor = setLuminance(input1, darkenTargetL);
  const lightenedContrast = readability(lightenedColor, color2);
  const darkenedContrast = readability(darkenedColor, color2);
  if (lightenedContrast <= oldContrast && darkenedContrast <= oldContrast)
    return toHexColor(color1);
  if (color1L >= color2L && lightenedContrast >= minContrast)
    return lightenedColor;
  if (color1L < color2L && darkenedContrast >= minContrast)
    return darkenedColor;
  return lightenedContrast > darkenedContrast ? lightenedColor : darkenedColor;
}
function changeAlphaToReachColorContrast(input, background, minContrast = 6, maxContrast = 22) {
  const color = toTinyColor(input);
  const backgroundColor = toTinyColor(background);
  const colorOnBackground = color.onBackground(backgroundColor);
  const curContrast = readability(colorOnBackground, backgroundColor);
  if (curContrast >= minContrast && curContrast <= maxContrast)
    return toHexColor(color);
  const newAlpha = binarySearch({
    getValueFn: (alpha) => {
      const newColor = toTinyColor(color).setAlpha(alpha);
      const onBg = newColor.onBackground(backgroundColor);
      const result = readability(onBg, backgroundColor);
      return result;
    },
    targetValue: curContrast < minContrast ? minContrast : maxContrast,
    preferHigher: curContrast < minContrast,
    tolerance: 1 / 256,
    low: 0.15,
    high: 1
  });
  return setAlpha(toHexColor(color), newAlpha);
}
function getFirstStaticColor(...inputs) {
  const extractFallbackFromCssVar = (input) => {
    const match = input.match(/^\s*var\([^,]+,\s*(.+?)\s*\)\s*$/i);
    return match ? match[1] : undefined;
  };
  const isValid = (input) => toTinyColor(input)?.isValid;
  for (const input of inputs) {
    if (!input)
      continue;
    if (isValid(input))
      return input;
    let cssVarFallback = extractFallbackFromCssVar(input);
    while (cssVarFallback) {
      if (isValid(cssVarFallback))
        return cssVarFallback;
      cssVarFallback = extractFallbackFromCssVar(cssVarFallback);
    }
  }
  return undefined;
}
function getStaticBackgroundColor(styleVariant) {
  const color = getFirstStaticColor(styleVariant.resolvedStyleSettings.get("codeBackground"), styleVariant.theme.bg);
  return color ?? (styleVariant.theme.type === "dark" ? "#202020" : "#fff");
}
function chromaticRecolor(input, target) {
  let targetHue;
  let targetChroma;
  let targetChromaMeasuredAtLightness;
  if (typeof target === "string") {
    const targetOklch = rgbaToOklch(toTinyColor(target));
    targetHue = targetOklch.h ?? 0;
    targetChroma = targetOklch.c;
    targetChromaMeasuredAtLightness = targetOklch.l;
  } else {
    targetHue = target.hue;
    targetChroma = target.chroma;
    targetChromaMeasuredAtLightness = target.chromaMeasuredAtLightness;
  }
  return withParsedColor(input, (color) => {
    const oklch = rgbaToOklch(color);
    oklch.h = targetHue;
    const maxChromaForInputLightness = rgbaToOklch(oklchToRgba({ ...oklch, c: 0.4 })).c;
    let newChroma;
    if (targetChromaMeasuredAtLightness !== undefined) {
      const maxChromaForTargetLightness = rgbaToOklch(oklchToRgba({ ...oklch, c: 0.4, l: targetChromaMeasuredAtLightness })).c;
      const relativeTargetChroma = Math.min(targetChroma, maxChromaForTargetLightness) / maxChromaForTargetLightness;
      newChroma = maxChromaForInputLightness * relativeTargetChroma;
    } else {
      newChroma = Math.min(targetChroma, maxChromaForInputLightness);
    }
    const linearDecrease = (i, start, end) => Math.max(0, Math.min(1, 1 - (i - start) / (end - start)));
    const highLightnessFactor = linearDecrease(oklch.l, 0.95, 0.99);
    oklch.c = newChroma * highLightnessFactor;
    return toHexColor(toTinyColor(oklchToRgba(oklch, true)));
  });
}
function withParsedColor(input, transform, fallback) {
  const color = input && toTinyColor(input);
  if (!color || !color.isValid) {
    const fallbackOrInput = fallback !== undefined ? fallback : input;
    return !fallbackOrInput || typeof fallbackOrInput === "string" ? fallbackOrInput : toHexColor(fallbackOrInput);
  }
  return transform(color);
}
function toTinyColor(input) {
  if (input instanceof TinyColor) {
    return new TinyColor(input.toRgb());
  }
  if (typeof input === "string") {
    const labColor = parseCssLabColor(input);
    if (labColor) {
      return new TinyColor(labToRgba(labColor));
    }
    const lchColor = parseCssLchColor(input);
    if (lchColor) {
      return new TinyColor(lchabToRgba(lchColor));
    }
    const oklchColor = parseCssOklchColor(input);
    if (oklchColor) {
      return new TinyColor(oklchToRgba(oklchColor));
    }
    return new TinyColor(input);
  }
  if (typeof input === "object" && "mode" in input) {
    if (input.mode === "hsl")
      return new TinyColor(hslToRgba(input));
    if (input.mode === "oklch")
      return new TinyColor(oklchToRgba(input));
  }
  return new TinyColor(input);
}
function toHexColor(input) {
  const color = input instanceof TinyColor ? input : toTinyColor(input);
  return color.toHexShortString();
}
function roundFloat(number, decimalPoints) {
  const decimal = Math.pow(10, decimalPoints);
  return Math.round(number * decimal) / decimal;
}
function minMaxRounded(number, min = 0, max = 1, decimalPoints = 3) {
  return Math.max(min, Math.min(max, roundFloat(number, decimalPoints)));
}

// src/internal/vscode-colors.ts
var groupedDefaultWorkbenchColorKeys = {
  backgrounds: [
    "editor.background",
    "editorGroupHeader.tabsBackground",
    "editorGroupHeader.tabsBorder",
    "titleBar.activeBackground",
    "titleBar.border",
    "panel.background",
    "tab.activeBackground",
    "tab.activeBorderTop",
    "tab.activeBorder",
    "terminal.background",
    "widget.shadow"
  ],
  accents: [
    "focusBorder",
    "editor.selectionBackground",
    "textBlockQuote.border",
    "textLink.activeForeground",
    "textLink.foreground",
    "editorLink.activeForeground",
    "tab.activeForeground",
    "tab.inactiveForeground",
    "tab.unfocusedActiveForeground",
    "tab.unfocusedInactiveForeground"
  ]
};
var defaultEditorBackgroundColors = ["#1e1e1e", "#ffffff"];
var defaultEditorForegroundColors = ["#bbbbbb", "#333333"];
var defaultWorkbenchColors = {
  // Base colors
  focusBorder: ["#007fd4", "#0090f1"],
  foreground: ["#cccccc", "#616161"],
  disabledForeground: ["#cccccc80", "#61616180"],
  descriptionForeground: [["transparent", "foreground", 0.7], "#717171"],
  errorForeground: ["#f48771", "#a1260d"],
  "icon.foreground": ["#c5c5c5", "#424242"],
  // Contrast colors
  contrastActiveBorder: null,
  contrastBorder: null,
  // Colors inside a text document, such as the welcome page
  "textBlockQuote.background": ["#7f7f7f1a", "#7f7f7f1a"],
  "textBlockQuote.border": ["#007acc80", "#007acc80"],
  "textCodeBlock.background": ["#0a0a0a66", "#dcdcdc66"],
  "textLink.activeForeground": ["#3794ff", "#006ab1"],
  "textLink.foreground": ["#3794ff", "#006ab1"],
  "textPreformat.foreground": ["#d7ba7d", "#a31515"],
  "textSeparator.foreground": ["#ffffff2e", "#0000002e"],
  // Editor colors
  "editor.background": defaultEditorBackgroundColors,
  "editor.foreground": defaultEditorForegroundColors,
  "editorLineNumber.foreground": ["#858585", "#237893"],
  "editorLineNumber.activeForeground": "editorActiveLineNumber.foreground",
  "editorActiveLineNumber.foreground": ["#c6c6c6", "#0b216f"],
  "editor.selectionBackground": ["#264f78", "#add6ff"],
  "editor.inactiveSelectionBackground": ["transparent", "editor.selectionBackground", 0.5],
  "editor.selectionHighlightBackground": ["lessProminent", "editor.selectionBackground", "editor.background", 0.3, 0.6],
  // Editor status colors & icons
  "editorError.foreground": ["#f14c4c", "#e51400"],
  "editorWarning.foreground": ["#cca700", "#bf8803"],
  "editorInfo.foreground": ["#3794ff", "#1a85ff"],
  "editorHint.foreground": ["#eeeeeeb2", "#6c6c6c"],
  "problemsErrorIcon.foreground": "editorError.foreground",
  "problemsWarningIcon.foreground": "editorWarning.foreground",
  "problemsInfoIcon.foreground": "editorInfo.foreground",
  // Editor find matches
  "editor.findMatchBackground": ["#515c6a", "#a8ac94"],
  "editor.findMatchHighlightBackground": ["#ea5c0055", "#ea5c0055"],
  "editor.findRangeHighlightBackground": ["#3a3d4166", "#b4b4b44d"],
  // Editor links
  "editorLink.activeForeground": ["#4e94ce", "#0000ff"],
  // Editor lightbulb icons
  "editorLightBulb.foreground": ["#ffcc00", "#ddb100"],
  "editorLightBulbAutoFix.foreground": ["#75beff", "#007acc"],
  // Editor diffs
  "diffEditor.insertedTextBackground": ["#9ccc2c33", "#9ccc2c40"],
  "diffEditor.insertedTextBorder": null,
  "diffEditor.removedTextBackground": ["#ff000033", "#ff000033"],
  "diffEditor.removedTextBorder": null,
  "diffEditor.insertedLineBackground": ["#9bb95533", "#9bb95533"],
  "diffEditor.removedLineBackground": ["#ff000033", "#ff000033"],
  // Editor sticky scroll
  "editorStickyScroll.background": "editor.background",
  "editorStickyScrollHover.background": ["#2a2d2e", "#f0f0f0"],
  // Editor inlays (hints displayed inside an editor line)
  "editorInlayHint.background": [
    ["transparent", "badge.background", 0.8],
    ["transparent", "badge.background", 0.6]
  ],
  "editorInlayHint.foreground": "badge.foreground",
  "editorInlayHint.typeBackground": "editorInlayHint.background",
  "editorInlayHint.typeForeground": "editorInlayHint.foreground",
  "editorInlayHint.parameterBackground": "editorInlayHint.background",
  "editorInlayHint.parameterForeground": "editorInlayHint.foreground",
  // Editor groups & panes
  "editorPane.background": ["editor.background", "editor.background"],
  "editorGroup.emptyBackground": null,
  "editorGroup.focusedEmptyBorder": null,
  "editorGroupHeader.tabsBackground": ["#252526", "#f3f3f3"],
  "editorGroupHeader.tabsBorder": null,
  "editorGroupHeader.noTabsBackground": ["editor.background", "editor.background"],
  "editorGroupHeader.border": null,
  "editorGroup.border": ["#444444", "#e7e7e7"],
  "editorGroup.dropBackground": ["#53595d80", "#2677cb2d"],
  "editorGroup.dropIntoPromptForeground": ["editorWidget.foreground", "editorWidget.foreground"],
  "editorGroup.dropIntoPromptBackground": ["editorWidget.background", "editorWidget.background"],
  "editorGroup.dropIntoPromptBorder": null,
  "sideBySideEditor.horizontalBorder": ["editorGroup.border", "editorGroup.border"],
  "sideBySideEditor.verticalBorder": ["editorGroup.border", "editorGroup.border"],
  // Scrollbars
  "scrollbar.shadow": ["#000000", "#dddddd"],
  "scrollbarSlider.background": ["#79797966", "#64646466"],
  "scrollbarSlider.hoverBackground": ["#646464b2", "#646464b2"],
  "scrollbarSlider.activeBackground": ["#bfbfbf66", "#00000099"],
  // Panels
  "panel.background": "editor.background",
  "panel.border": "#80808059",
  "panelTitle.activeBorder": "panelTitle.activeForeground",
  "panelTitle.activeForeground": ["#e7e7e7", "#424242"],
  "panelTitle.inactiveForeground": [
    ["transparent", "panelTitle.activeForeground", 0.6],
    ["transparent", "panelTitle.activeForeground", 0.75]
  ],
  "panelSectionHeader.background": "#80808051",
  "terminal.background": "panel.background",
  // Widgets
  "widget.shadow": ["#0000005b", "#00000028"],
  "editorWidget.background": ["#252526", "#f3f3f3"],
  "editorWidget.foreground": "foreground",
  "editorWidget.border": ["#454545", "#c8c8c8"],
  "quickInput.background": "editorWidget.background",
  "quickInput.foreground": "editorWidget.foreground",
  "quickInputTitle.background": ["#ffffff1a", "#0000000f"],
  "pickerGroup.foreground": ["#3794ff", "#0066bf"],
  "pickerGroup.border": ["#3f3f46", "#cccedb"],
  "editor.hoverHighlightBackground": ["#264f7840", "#add6ff26"],
  "editorHoverWidget.background": "editorWidget.background",
  "editorHoverWidget.foreground": "editorWidget.foreground",
  "editorHoverWidget.border": "editorWidget.border",
  "editorHoverWidget.statusBarBackground": [
    ["lighten", "editorHoverWidget.background", 0.2],
    ["darken", "editorHoverWidget.background", 0.05]
  ],
  // Title bar
  "titleBar.activeBackground": ["#3c3c3c", "#dddddd"],
  "titleBar.activeForeground": ["#cccccc", "#333333"],
  "titleBar.inactiveBackground": ["transparent", "titleBar.activeBackground", 0.6],
  "titleBar.inactiveForeground": ["transparent", "titleBar.activeForeground", 0.6],
  "titleBar.border": null,
  // Toolbars
  "toolbar.hoverBackground": ["#5a5d5e50", "#b8b8b850"],
  "toolbar.activeBackground": [
    ["lighten", "toolbar.hoverBackground", 0.1],
    ["darken", "toolbar.hoverBackground", 0.1]
  ],
  // Tab background
  "tab.activeBackground": ["editor.background", "editor.background"],
  "tab.unfocusedActiveBackground": ["tab.activeBackground", "tab.activeBackground"],
  "tab.inactiveBackground": ["#2d2d2d", "#ececec"],
  "tab.unfocusedInactiveBackground": ["tab.inactiveBackground", "tab.inactiveBackground"],
  // Tab foreground
  "tab.activeForeground": ["#ffffff", "#333333"],
  "tab.inactiveForeground": [
    ["transparent", "tab.activeForeground", 0.5],
    ["transparent", "tab.activeForeground", 0.7]
  ],
  "tab.unfocusedActiveForeground": [
    ["transparent", "tab.activeForeground", 0.5],
    ["transparent", "tab.activeForeground", 0.7]
  ],
  "tab.unfocusedInactiveForeground": [
    ["transparent", "tab.inactiveForeground", 0.5],
    ["transparent", "tab.inactiveForeground", 0.5]
  ],
  // Tab hover foreground/background
  "tab.hoverBackground": null,
  "tab.unfocusedHoverBackground": [
    ["transparent", "tab.hoverBackground", 0.5],
    ["transparent", "tab.hoverBackground", 0.7]
  ],
  "tab.hoverForeground": null,
  "tab.unfocusedHoverForeground": [
    ["transparent", "tab.hoverForeground", 0.5],
    ["transparent", "tab.hoverForeground", 0.5]
  ],
  // Tab borders
  "tab.border": ["#252526", "#f3f3f3"],
  "tab.lastPinnedBorder": ["tree.indentGuidesStroke", "tree.indentGuidesStroke"],
  "tab.activeBorder": null,
  "tab.unfocusedActiveBorder": [
    ["transparent", "tab.activeBorder", 0.5],
    ["transparent", "tab.activeBorder", 0.7]
  ],
  "tab.activeBorderTop": null,
  "tab.unfocusedActiveBorderTop": [
    ["transparent", "tab.activeBorderTop", 0.5],
    ["transparent", "tab.activeBorderTop", 0.7]
  ],
  "tab.hoverBorder": null,
  "tab.unfocusedHoverBorder": [
    ["transparent", "tab.hoverBorder", 0.5],
    ["transparent", "tab.hoverBorder", 0.7]
  ],
  // Tab modified border
  "tab.activeModifiedBorder": ["#3399cc", "#33aaee"],
  "tab.inactiveModifiedBorder": [
    ["transparent", "tab.activeModifiedBorder", 0.5],
    ["transparent", "tab.activeModifiedBorder", 0.5]
  ],
  "tab.unfocusedActiveModifiedBorder": [
    ["transparent", "tab.activeModifiedBorder", 0.5],
    ["transparent", "tab.activeModifiedBorder", 0.7]
  ],
  "tab.unfocusedInactiveModifiedBorder": [
    ["transparent", "tab.inactiveModifiedBorder", 0.5],
    ["transparent", "tab.inactiveModifiedBorder", 0.5]
  ],
  // Badges (small information labels, for example, search results count)
  "badge.background": ["#4d4d4d", "#c4c4c4"],
  "badge.foreground": ["#ffffff", "#333333"],
  // Buttons
  "button.background": ["#0e639c", "#007acc"],
  "button.foreground": ["#ffffff", "#ffffff"],
  "button.border": "contrastBorder",
  "button.separator": ["transparent", "button.foreground", 0.4],
  "button.hoverBackground": [
    ["lighten", "button.background", 0.2],
    ["darken", "button.background", 0.2]
  ],
  "button.secondaryBackground": ["#3a3d41", "#5f6a79"],
  "button.secondaryForeground": ["#ffffff", "#ffffff"],
  "button.secondaryHoverBackground": [
    ["lighten", "button.secondaryBackground", 0.2],
    ["darken", "button.secondaryBackground", 0.2]
  ],
  // Dropdowns (selects)
  "dropdown.background": ["#3c3c3c", "#ffffff"],
  "dropdown.foreground": ["#f0f0f0", "foreground"],
  "dropdown.border": ["dropdown.background", "#cecece"],
  // Lists
  "list.activeSelectionBackground": ["#04395e", "#0060c0"],
  "list.activeSelectionForeground": "#ffffff",
  // Trees
  "tree.indentGuidesStroke": ["#585858", "#a9a9a9"],
  // Input fields
  "input.background": ["#3c3c3c", "#ffffff"],
  "input.foreground": "foreground",
  "input.placeholderForeground": ["transparent", "foreground", 0.5],
  "inputOption.activeBorder": ["#007acc", "#007acc"],
  "inputOption.hoverBackground": ["#5a5d5e80", "#b8b8b850"],
  "inputOption.activeBackground": [
    ["transparent", "focusBorder", 0.4],
    ["transparent", "focusBorder", 0.2]
  ],
  "inputOption.activeForeground": ["#ffffff", "#000000"],
  "inputValidation.infoBackground": ["#063b49", "#d6ecf2"],
  "inputValidation.infoBorder": ["#007acc", "#007acc"],
  "inputValidation.warningBackground": ["#352a05", "#f6f5d2"],
  "inputValidation.warningBorder": ["#b89500", "#b89500"],
  "inputValidation.errorBackground": ["#5a1d1d", "#f2dede"],
  "inputValidation.errorBorder": ["#be1100", "#be1100"],
  // Keybinding labels
  "keybindingLabel.background": ["#8080802b", "#dddddd66"],
  "keybindingLabel.foreground": ["#cccccc", "#555555"],
  "keybindingLabel.border": ["#33333399", "#cccccc66"],
  "keybindingLabel.bottomBorder": ["#44444499", "#bbbbbb66"],
  // Menu colors
  "menu.foreground": "dropdown.foreground",
  "menu.background": "dropdown.background",
  "menu.selectionForeground": "list.activeSelectionForeground",
  "menu.selectionBackground": "list.activeSelectionBackground",
  "menu.separatorBackground": ["#606060", "#d4d4d4"],
  // Snippet placeholder colors
  "editor.snippetTabstopHighlightBackground": ["#7c7c74c", "#0a326433"],
  "editor.snippetFinalTabstopHighlightBorder": ["#525252", "#0a326480"],
  // Terminal colors
  "terminal.ansiBlack": "#000000",
  "terminal.ansiRed": "#cd3131",
  "terminal.ansiGreen": ["#0dbc79", "#00bc00"],
  "terminal.ansiYellow": ["#e5e510", "#949800"],
  "terminal.ansiBlue": ["#2472c8", "#0451a5"],
  "terminal.ansiMagenta": ["#bc3fbc", "#bc05bc"],
  "terminal.ansiCyan": ["#11a8cd", "#0598bc"],
  "terminal.ansiWhite": ["#e5e5e5", "#555555"],
  "terminal.ansiBrightBlack": "#666666",
  "terminal.ansiBrightRed": ["#f14c4c", "#cd3131"],
  "terminal.ansiBrightGreen": ["#23d18b", "#14ce14"],
  "terminal.ansiBrightYellow": ["#f5f543", "#b5ba00"],
  "terminal.ansiBrightBlue": ["#3b8eea", "#0451a5"],
  "terminal.ansiBrightMagenta": ["#d670d6", "#bc05bc"],
  "terminal.ansiBrightCyan": ["#29b8db", "#0598bc"],
  "terminal.ansiBrightWhite": ["#e5e5e5", "#a5a5a5"]
};
function resolveVSCodeWorkbenchColors(colors, themeType) {
  const typeIndex = themeType === "dark" ? 0 : 1;
  const workbenchColors = {
    ...defaultWorkbenchColors,
    ...colors
  };
  const colorsStartedResolving = /* @__PURE__ */ new Set();
  const colorsResolved = /* @__PURE__ */ new Map();
  function applyColorTransform(unresolvedColor) {
    if (unresolvedColor.length === 3) {
      const [type, colorKey, amount] = unresolvedColor;
      const hexColor = resolveColor(colorKey);
      if (hexColor === null)
        return null;
      if (type === "transparent") {
        return multiplyAlpha(hexColor, amount);
      } else if (type === "lighten") {
        return lighten(hexColor, amount);
      } else if (type === "darken") {
        return darken(hexColor, amount);
      }
    }
    if (unresolvedColor.length === 5 && unresolvedColor[0] === "lessProminent") {
      const [, colorKey, backgroundKey, factor, transparency] = unresolvedColor;
      const hexFrom = resolveColor(colorKey);
      if (hexFrom === null)
        return null;
      const hexBackground = resolveColor(backgroundKey);
      if (hexBackground === null)
        return multiplyAlpha(hexFrom, factor * transparency);
      const fromLum = getLuminance(hexFrom);
      const bgLum = getLuminance(hexBackground);
      let combinedFactor = factor ? factor : 0.5;
      if (fromLum < bgLum) {
        combinedFactor *= (bgLum - fromLum) / bgLum;
        const lightened = lighten(hexFrom, combinedFactor);
        return multiplyAlpha(lightened, transparency);
      } else {
        combinedFactor *= (fromLum - bgLum) / fromLum;
        const darkened = darken(hexFrom, combinedFactor);
        return multiplyAlpha(darkened, transparency);
      }
    }
  }
  function resolveColor(unresolvedColor) {
    if (unresolvedColor === null)
      return null;
    const alreadyResolvedColor = colorsResolved.get(unresolvedColor);
    if (alreadyResolvedColor !== undefined)
      return alreadyResolvedColor;
    if (colorsStartedResolving.has(unresolvedColor))
      throw new Error("Circular reference in default colors.");
    colorsStartedResolving.add(unresolvedColor);
    let resolved;
    if (typeof unresolvedColor === "string") {
      if (unresolvedColor.startsWith("#")) {
        resolved = unresolvedColor.toLowerCase();
      } else {
        const referencedColor = workbenchColors[unresolvedColor];
        if (referencedColor !== undefined)
          resolved = resolveColor(referencedColor);
      }
    } else if (Array.isArray(unresolvedColor)) {
      if (unresolvedColor.length === 2) {
        resolved = resolveColor(unresolvedColor[typeIndex]);
      } else {
        resolved = applyColorTransform(unresolvedColor);
      }
    }
    if (resolved === undefined)
      throw new Error(`Invalid color value ${JSON.stringify(unresolvedColor)}, expected a hex color.`);
    colorsResolved.set(unresolvedColor, resolved);
    return resolved;
  }
  const keys = Object.keys(workbenchColors);
  keys.forEach((key) => {
    try {
      workbenchColors[key] = resolveColor(workbenchColors[key]);
    } catch (error) {
      const msg = error instanceof Error ? error.message : error;
      throw new Error(`Failed to resolve theme color for key ${key}: ${msg}`);
    }
  });
  return workbenchColors;
}
function guessThemeTypeFromEditorColors(colors) {
  const bgLuminance = getLuminance(colors?.["editor.background"] || defaultEditorBackgroundColors[0]);
  const fgLuminance = getLuminance(colors?.["editor.foreground"] || defaultEditorForegroundColors[0]);
  return bgLuminance < fgLuminance ? "dark" : "light";
}

// ../../../node_modules/.pnpm/strip-json-comments@5.0.1/node_modules/strip-json-comments/index.js
var singleComment = Symbol("singleComment");
var multiComment = Symbol("multiComment");
var stripWithoutWhitespace = () => "";
var stripWithWhitespace = (string, start, end) => string.slice(start, end).replace(/\S/g, " ");
var isEscaped = (jsonString, quotePosition) => {
  let index = quotePosition - 1;
  let backslashCount = 0;
  while (jsonString[index] === "\\") {
    index -= 1;
    backslashCount += 1;
  }
  return Boolean(backslashCount % 2);
};
function stripJsonComments(jsonString, { whitespace = true, trailingCommas = false } = {}) {
  if (typeof jsonString !== "string") {
    throw new TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof jsonString}\``);
  }
  const strip = whitespace ? stripWithWhitespace : stripWithoutWhitespace;
  let isInsideString = false;
  let isInsideComment = false;
  let offset = 0;
  let buffer = "";
  let result = "";
  let commaIndex = -1;
  for (let index = 0; index < jsonString.length; index++) {
    const currentCharacter = jsonString[index];
    const nextCharacter = jsonString[index + 1];
    if (!isInsideComment && currentCharacter === '"') {
      const escaped = isEscaped(jsonString, index);
      if (!escaped) {
        isInsideString = !isInsideString;
      }
    }
    if (isInsideString) {
      continue;
    }
    if (!isInsideComment && currentCharacter + nextCharacter === "//") {
      buffer += jsonString.slice(offset, index);
      offset = index;
      isInsideComment = singleComment;
      index++;
    } else if (isInsideComment === singleComment && currentCharacter + nextCharacter === "\r\n") {
      index++;
      isInsideComment = false;
      buffer += strip(jsonString, offset, index);
      offset = index;
      continue;
    } else if (isInsideComment === singleComment && currentCharacter === "\n") {
      isInsideComment = false;
      buffer += strip(jsonString, offset, index);
      offset = index;
    } else if (!isInsideComment && currentCharacter + nextCharacter === "/*") {
      buffer += jsonString.slice(offset, index);
      offset = index;
      isInsideComment = multiComment;
      index++;
      continue;
    } else if (isInsideComment === multiComment && currentCharacter + nextCharacter === "*/") {
      index++;
      isInsideComment = false;
      buffer += strip(jsonString, offset, index + 1);
      offset = index + 1;
      continue;
    } else if (trailingCommas && !isInsideComment) {
      if (commaIndex !== -1) {
        if (currentCharacter === "}" || currentCharacter === "]") {
          buffer += jsonString.slice(offset, index);
          result += strip(buffer, 0, 1) + buffer.slice(1);
          buffer = "";
          offset = index;
          commaIndex = -1;
        } else if (currentCharacter !== " " && currentCharacter !== "	" && currentCharacter !== "\r" && currentCharacter !== "\n") {
          buffer += jsonString.slice(offset, index);
          offset = index;
          commaIndex = -1;
        }
      } else if (currentCharacter === ",") {
        result += buffer + jsonString.slice(offset, index);
        buffer = "";
        offset = index;
        commaIndex = index;
      }
    }
  }
  return result + buffer + (isInsideComment ? strip(jsonString.slice(offset)) : jsonString.slice(offset));
}

// src/common/theme.ts
var ExpressiveCodeTheme = class _ExpressiveCodeTheme {
  name;
  type;
  colors;
  fg;
  bg;
  semanticHighlighting;
  settings;
  styleOverrides;
  /**
   * Loads the given theme for use with Expressive Code. Supports both Shiki and VS Code themes.
   *
   * You can also pass an existing `ExpressiveCodeTheme` instance to create a copy of it.
   *
   * Note: To save on bundle size, this constructor does not support loading themes
   * bundled with Shiki by name (e.g. `dracula`). Instead, import Shiki's `loadTheme`
   * function yourself, use it to load its bundled theme (e.g. `themes/dracula.json`),
   * and pass the result to this constructor.
   */
  constructor(theme) {
    let themeType = theme.type;
    if (themeType === "css")
      throw new Error('Theme type "css" is not supported.');
    if (themeType !== "dark" && themeType !== "light") {
      themeType = guessThemeTypeFromEditorColors(theme.colors);
    }
    const themeColors = { ...theme.colors };
    for (const key in themeColors) {
      if (typeof themeColors[key] !== "string" || !themeColors[key].trim().length)
        delete themeColors[key];
    }
    this.name = theme.name || themeType;
    this.type = themeType;
    this.colors = resolveVSCodeWorkbenchColors(themeColors, this.type);
    this.fg = theme.fg || this.colors["editor.foreground"];
    this.bg = theme.bg || this.colors["editor.background"];
    this.semanticHighlighting = theme.semanticHighlighting || false;
    const premultiplyTable = [["editorGroupHeader.tabsBackground", "editor.background"]];
    premultiplyTable.forEach(([colorKey, bgKey]) => {
      this.colors[colorKey] = onBackground(this.colors[colorKey], this.colors[bgKey]);
    });
    const themeTokenSettings = theme.tokenColors || theme.settings;
    this.settings = this.parseThemeSettings(themeTokenSettings);
    this.styleOverrides = theme.styleOverrides ?? {};
  }
  /**
   * Applies chromatic adjustments to entire groups of theme colors while keeping their
   * relative lightness and alpha components intact. This can be used to quickly create
   * theme variants that fit the color scheme of any website or brand.
   *
   * Adjustments can either be defined as hue and chroma values in the OKLCH color space
   * (range 0–360 for hue, 0–0.4 for chroma), or these values can be extracted from
   * hex color strings (e.g. `#3b82f6`).
   *
   * You can target predefined groups of theme colors (e.g. `backgrounds`, `accents`)
   * and/or use the `custom` property to define your own groups of theme colors to be adjusted.
   * Each custom group must contain a `themeColorKeys` property with an array of VS Code
   * theme color keys (e.g. `['panel.background', 'panel.border']`) and a `targetHueAndChroma`
   * property that accepts the same adjustment target values as `backgrounds` and `accents`.
   * Custom groups will be applied in the order they are defined.
   *
   * Returns the same `ExpressiveCodeTheme` instance to allow chaining.
   */
  applyHueAndChromaAdjustments(adjustments) {
    const adjustedColors = {};
    const adjustColors = (colors, target) => {
      colors.forEach((color) => {
        if (!this.colors[color])
          return;
        adjustedColors[color] = chromaticRecolor(this.colors[color], target);
      });
    };
    if (adjustments.backgrounds) {
      adjustColors(groupedDefaultWorkbenchColorKeys.backgrounds, adjustments.backgrounds);
    }
    if (adjustments.accents) {
      adjustColors(groupedDefaultWorkbenchColorKeys.accents, adjustments.accents);
    }
    if (adjustments.custom) {
      adjustments.custom.forEach((custom) => {
        adjustColors(custom.themeColorKeys, custom.targetHueAndChroma);
      });
    }
    Object.assign(this.colors, adjustedColors);
    return this;
  }
  /**
   * Processes the theme's syntax highlighting colors to ensure a minimum contrast ratio
   * between foreground and background colors.
   *
   * The default value of 5.5 ensures optimal accessibility with a contrast ratio of 5.5:1.
   *
   * You can optionally pass a custom background color to use for the contrast checks.
   * By default, the theme's background color will be used.
   *
   * Returns the same `ExpressiveCodeTheme` instance to allow chaining.
   */
  ensureMinSyntaxHighlightingColorContrast(minContrast = 5.5, backgroundColor) {
    const fixedContrastCache = /* @__PURE__ */ new Map();
    const fixContrast = (color) => {
      const cachedResult = fixedContrastCache.get(color);
      if (cachedResult)
        return cachedResult;
      const newColor = ensureColorContrastOnBackground(color, backgroundColor || this.bg, minContrast);
      fixedContrastCache.set(color, newColor);
      return newColor;
    };
    this.colors["editor.foreground"] = fixContrast(this.colors["editor.foreground"]);
    this.fg = fixContrast(this.colors["editor.foreground"]);
    this.settings.forEach((s2) => {
      if (!s2.settings.foreground)
        return;
      s2.settings.foreground = fixContrast(s2.settings.foreground);
    });
    return this;
  }
  /**
   * Parses the given theme settings into a properly typed format
   * that can be used by both Expressive Code and Shiki.
   *
   * As theme scopes can be defined as either a comma-separated string, or an array of strings,
   * they will always be converted to their array form to simplify further processing.
   *
   * Also recreates known object properties to prevent accidental mutation
   * of the original settings when copying a theme.
   */
  parseThemeSettings(settings) {
    if (!settings || !Array.isArray(settings))
      return [];
    return settings.map((unknownSetting) => {
      const { name, scope: anyScope, settings: settings2, ...rest } = unknownSetting;
      const scope = Array.isArray(anyScope) ? anyScope.slice() : typeof anyScope === "string" ? anyScope.split(/\s*,\s*/) : undefined;
      return {
        ...name !== undefined ? { name } : {},
        ...scope !== undefined ? { scope } : {},
        settings: { ...settings2 },
        ...rest
      };
    });
  }
  /**
   * Attempts to parse the given JSON string as a theme.
   *
   * As some themes follow the JSONC format and may contain comments and trailing commas,
   * this method will attempt to strip them before parsing the result.
   */
  static fromJSONString(json) {
    return new _ExpressiveCodeTheme(JSON.parse(stripJsonComments(json, { trailingCommas: true })));
  }
};

// src/common/plugin-style-settings.ts
var PluginStyleSettings = class {
  defaultValues;
  cssVarExclusions;
  cssVarReplacements;
  constructor({
    defaultValues,
    cssVarExclusions = [],
    cssVarReplacements: cssVarReplacements3 = []
  }) {
    this.defaultValues = defaultValues;
    this.cssVarExclusions = cssVarExclusions;
    this.cssVarReplacements = cssVarReplacements3;
  }
};

// src/internal/core-styles.ts
var coreStyleSettings = new PluginStyleSettings({
  defaultValues: {
    // Outer container
    borderRadius: "0.3rem",
    borderWidth: "1.5px",
    borderColor: ({ theme }) => theme.colors["titleBar.border"] || lighten(theme.colors["editor.background"], theme.type === "dark" ? 0.5 : -0.15) || "transparent",
    // Code editor content
    codeFontFamily: minifyFontFamily(`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`),
    codeFontSize: "0.85rem",
    codeFontWeight: "400",
    codeLineHeight: "1.65",
    codePaddingBlock: "1rem",
    codePaddingInline: "1.35rem",
    codeBackground: ({ theme }) => theme.colors["editor.background"],
    codeForeground: ({ theme }) => theme.colors["editor.foreground"],
    codeSelectionBackground: ({ theme }) => theme.colors["editor.selectionBackground"],
    // Gutter
    gutterBorderColor: ({ resolveSetting }) => setAlpha(resolveSetting("gutterForeground"), 0.2),
    gutterBorderWidth: "1.5px",
    gutterForeground: ({ theme, resolveSetting }) => ensureColorContrastOnBackground(theme.colors["editorLineNumber.foreground"] || resolveSetting("codeForeground"), resolveSetting("codeBackground"), 3.3, 3.6),
    gutterHighlightForeground: ({ theme, resolveSetting }) => ensureColorContrastOnBackground(
      theme.colors["editorLineNumber.activeForeground"] || theme.colors["editorLineNumber.foreground"] || resolveSetting("codeForeground"),
      resolveSetting("codeBackground"),
      4.5,
      5
    ),
    // UI elements
    uiFontFamily: minifyFontFamily(
      `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`
    ),
    uiFontSize: "0.9rem",
    uiFontWeight: "400",
    uiLineHeight: "1.65",
    uiPaddingBlock: "0.25rem",
    uiPaddingInline: "1rem",
    uiSelectionBackground: ({ theme }) => theme.colors["menu.selectionBackground"],
    uiSelectionForeground: ({ theme }) => theme.colors["menu.selectionForeground"],
    // Special colors
    focusBorder: ({ theme }) => theme.colors["focusBorder"],
    scrollbarThumbColor: ({ theme, resolveSetting }) => ensureColorContrastOnBackground(theme.colors["scrollbarSlider.background"], resolveSetting("codeBackground"), 1, 2),
    scrollbarThumbHoverColor: ({ theme, resolveSetting }) => ensureColorContrastOnBackground(theme.colors["scrollbarSlider.hoverBackground"], resolveSetting("codeBackground"), 2.5, 3.5)
  }
});
function getCoreBaseStyles({
  cssVar,
  useStyleReset,
  useThemedScrollbars,
  useThemedSelectionColors
}) {
  const ifThemedScrollbars = (css) => useThemedScrollbars ? css : "";
  const ifThemedSelectionColors = (css) => useThemedSelectionColors ? css : "";
  return `
		font-family: ${cssVar("uiFontFamily")};
		font-size: ${cssVar("uiFontSize")};
		font-weight: ${cssVar("uiFontWeight")};
		line-height: ${cssVar("uiLineHeight")};
		text-size-adjust: none;
		-webkit-text-size-adjust: none;

		*:not(path) {
			${useStyleReset ? "all: revert;" : ""}
			box-sizing: border-box;
		}

		${ifThemedSelectionColors(`::selection {
			background: ${cssVar("uiSelectionBackground")};
			color: ${cssVar("uiSelectionForeground")};
		}`)}

		pre {
			display: flex;
			margin: 0;
			padding: 0;
			border: ${cssVar("borderWidth")} solid ${cssVar("borderColor")};
			border-radius: calc(${cssVar("borderRadius")} + ${cssVar("borderWidth")});
			background: ${cssVar("codeBackground")};

			&:focus-visible {
				outline: 3px solid ${cssVar("focusBorder")};
				outline-offset: -3px;
			}

			& > code {
				all: unset;
				display: block;
				flex: 1 0 100%;

				padding: ${cssVar("codePaddingBlock")} 0;
				color: ${cssVar("codeForeground")};

				font-family: ${cssVar("codeFontFamily")};
				font-size: ${cssVar("codeFontSize")};
				font-weight: ${cssVar("codeFontWeight")};
				line-height: ${cssVar("codeLineHeight")};
			}

			${ifThemedSelectionColors(`::selection {
				background: ${cssVar("codeSelectionBackground")};
				color: inherit;
			}`)}

			/* Show horizontal scrollbar if required */
			overflow-x: auto;

			/* Enable word wrapping on demand */
			&.wrap .${codeLineClass} .code {
				white-space: pre-wrap;
				overflow-wrap: break-word;
				min-width: min(20ch, var(--ecMaxLine, 20ch));
				& span.indent {
					white-space: pre;
				}
			}

			${ifThemedScrollbars(`
			&::-webkit-scrollbar,
			&::-webkit-scrollbar-track {
				background-color: inherit;
				border-radius: calc(${cssVar("borderRadius")} + ${cssVar("borderWidth")});
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
			&::-webkit-scrollbar-thumb {
				background-color: ${cssVar("scrollbarThumbColor")};
				border: 4px solid transparent;
				background-clip: content-box;
				border-radius: 10px;
			}
			&::-webkit-scrollbar-thumb:hover {
				background-color: ${cssVar("scrollbarThumbHoverColor")};
			}
			`)}
		}

		/* Code lines */
		.${codeLineClass} {
			/* RTL support: Code is always LTR */
			direction: ltr;
			unicode-bidi: isolate;

			/* Prepare grid layout for optional gutter */
			display: grid;
			grid-template-areas: 'gutter code';
			grid-template-columns: auto 1fr;
			position: relative;

			.gutter {
				grid-area: gutter;
				color: ${cssVar("gutterForeground")};

				/* Make all gutter elements non-interactive by default */
				& > * {
					pointer-events: none;
					user-select: none;
					-webkit-user-select: none;
				}

				/* Apply conditional styles if a gutter is present */
				& ~ .code {
					--ecLineBrdCol: ${cssVar("gutterBorderColor")};
				}
			}

			&.highlight .gutter {
				color: ${cssVar("gutterHighlightForeground")};
			}

			.code {
				grid-area: code;
				position: relative;
				box-sizing: content-box;
				padding-inline-start: calc(var(--ecIndent, 0ch) + ${cssVar("codePaddingInline")} - var(--ecGtrBrdWd));
				padding-inline-end: ${cssVar("codePaddingInline")};
				text-indent: calc(var(--ecIndent, 0ch) * -1);

				&::before,
				&::after,
				& :where(*) {
					text-indent: 0;
				}

				/* Support a colorful border on the start of the code line */
				--ecGtrBrdWd: ${cssVar("gutterBorderWidth")};
				border-inline-start: var(--ecGtrBrdWd) solid var(--ecLineBrdCol, transparent);
			}
		}

		/* Common style to hide elements from screen readers */
		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border-width: 0;							
		}
	`;
}
function getCoreThemeStyles(styleVariantIndex) {
  return `
		/* Theme-dependent styles for InlineStyleAnnotation */
		.${codeLineClass} :where(span[style^='--']:not([class])) {
			color: var(--${styleVariantIndex}, inherit);
			font-style: var(--${styleVariantIndex}fs, inherit);
			font-weight: var(--${styleVariantIndex}fw, inherit);
			text-decoration: var(--${styleVariantIndex}td, inherit);
		}
	`;
}
function minifyFontFamily(fontFamily) {
  return fontFamily.split(",").map((font) => font.trim()).join(",");
}

// src/internal/style-resolving.ts
function resolveStyleSettings({
  theme,
  styleVariantIndex,
  plugins,
  styleOverrides
}) {
  const attemptedToResolve = /* @__PURE__ */ new Set();
  const resolvedByPath = /* @__PURE__ */ new Map();
  const resolverArgs = { theme, styleVariantIndex, resolveSetting };
  const unresolvedByPath = getStyleSettingsByPath(coreStyleSettings.defaultValues);
  plugins.forEach((plugin) => {
    if (!plugin.styleSettings)
      return;
    applyStyleSettings(unresolvedByPath, getStyleSettingsByPath(plugin.styleSettings.defaultValues));
  });
  applyStyleSettings(unresolvedByPath, getStyleSettingsByPath(styleOverrides ?? {}));
  applyStyleSettings(unresolvedByPath, getStyleSettingsByPath(theme.styleOverrides ?? {}));
  function resolveSetting(settingPath) {
    let result = resolvedByPath.get(settingPath);
    if (result === undefined && !resolvedByPath.has(settingPath)) {
      if (attemptedToResolve.has(settingPath))
        throw new Error(`Circular dependency detected while resolving style setting '${settingPath}'`);
      attemptedToResolve.add(settingPath);
      const valueOrResolver = unresolvedByPath.get(settingPath);
      const resolvedDefinition = typeof valueOrResolver === "function" ? valueOrResolver(resolverArgs) : valueOrResolver;
      result = Array.isArray(resolvedDefinition) ? resolvedDefinition[theme.type === "dark" ? 0 : 1] : resolvedDefinition;
      resolvedByPath.set(settingPath, result);
    }
    if (result === undefined)
      throw new Error(
        `Failed to resolve style setting '${settingPath}' for theme '${theme.name}': The resolved value was undefined. This could be caused by your plugins or styleOverrides.`
      );
    return result;
  }
  unresolvedByPath.forEach((_, settingPath) => resolveSetting(settingPath));
  return resolvedByPath;
}
function getCssVarDeclarations({
  resolvedStyleSettings,
  plugins,
  cssVarName
}) {
  const cssVarDeclarations = /* @__PURE__ */ new Map();
  const excludedPaths = /* @__PURE__ */ new Set();
  plugins.forEach((plugin) => {
    plugin.styleSettings?.cssVarExclusions.forEach((path) => excludedPaths.add(path));
  });
  resolvedStyleSettings.forEach((value, path) => {
    if (excludedPaths.has(path))
      return;
    cssVarDeclarations.set(cssVarName(path), value);
  });
  return cssVarDeclarations;
}
function getStyleSettingsByPath(styleSettings) {
  const result = /* @__PURE__ */ new Map();
  for (const [key, value] of Object.entries(styleSettings)) {
    if (typeof value === "object" && !Array.isArray(value)) {
      Object.entries(value).forEach(([subKey, subValue]) => {
        result.set(`${key}.${subKey}`, subValue);
      });
    } else {
      result.set(key, value);
    }
  }
  return result;
}
function applyStyleSettings(target, source) {
  source.forEach((value, path) => value !== undefined && target.set(path, value));
}

// src/common/style-variants.ts
function resolveStyleVariants({
  themes,
  plugins,
  styleOverrides,
  cssVarName
}) {
  return themes.map((theme, styleVariantIndex) => {
    const resolvedStyleSettings = resolveStyleSettings({ theme, styleVariantIndex, plugins, styleOverrides });
    const cssVarDeclarations = getCssVarDeclarations({ resolvedStyleSettings, plugins, cssVarName });
    return {
      theme,
      resolvedStyleSettings,
      cssVarDeclarations
    };
  });
}

// src/internal/tabindex-js-module.min.ts
var tabindex_js_module_min_default = 'try{(()=>{function a(e){if(!e)return;let t=e.getAttribute("tabindex")!==null,n=e.scrollWidth>e.clientWidth;n&&!t?e.setAttribute("tabindex","0"):!n&&t&&e.removeAttribute("tabindex")}var u=window.requestIdleCallback||(e=>setTimeout(e,1)),i=window.cancelIdleCallback||clearTimeout;function l(e){let t=new Set,n,r;return new ResizeObserver(c=>{c.forEach(o=>t.add(o.target)),n&&clearTimeout(n),r&&i(r),n=setTimeout(()=>{r&&i(r),r=u(()=>{t.forEach(o=>e(o)),t.clear()})},250)})}function d(e,t){e.querySelectorAll?.(".expressive-code pre > code").forEach(n=>{let r=n.parentElement;r&&t.observe(r)})}var s=l(a);d(document,s);var b=new MutationObserver(e=>e.forEach(t=>t.addedNodes.forEach(n=>{d(n,s)})));b.observe(document.body,{childList:!0,subtree:!0});document.addEventListener("astro:page-load",()=>{d(document,s)});})();}catch(e){console.error("[EC] tabindex-js-module failed:",e)}';

// src/internal/core-plugins.ts
var corePlugins = [
  {
    name: "Indent wrapper",
    hooks: {
      postprocessAnnotations: ({ codeBlock }) => {
        codeBlock.getLines().forEach((line) => {
          const indent = line.text.match(/^\s+/)?.[0].length ?? 0;
          if (indent > 0) {
            line.getAnnotations().forEach((annotation) => {
              const { inlineRange } = annotation;
              if (!inlineRange || !isInlineStyleAnnotation(annotation))
                return;
              if (inlineRange.columnStart >= 0 && inlineRange?.columnEnd <= indent) {
                line.deleteAnnotation(annotation);
              }
            });
            line.addAnnotation(
              new IndentAnnotation({
                inlineRange: { columnStart: 0, columnEnd: indent },
                renderPhase: "earlier"
              })
            );
          }
        });
      }
    }
  },
  {
    name: "Scrollable block tabindex",
    jsModules: [tabindex_js_module_min_default]
  }
];
var IndentAnnotation = class extends ExpressiveCodeAnnotation {
  render({ nodesToTransform }) {
    return nodesToTransform.map((node) => h("span.indent", node));
  }
};

// src/common/engine.ts
var ExpressiveCodeEngine = class {
  /**
   * Creates a new instance of the Expressive Code engine.
   *
   * To minimize overhead caused by loading plugins, you can create a single instance
   * for your application and keep using it to render all your code blocks.
   */
  constructor(config) {
    const deprecatedConfig = config;
    if (deprecatedConfig.theme && !config.themes) {
      config.themes = Array.isArray(deprecatedConfig.theme) ? deprecatedConfig.theme : [deprecatedConfig.theme];
      delete deprecatedConfig.theme;
    }
    this.themes = Array.isArray(config.themes) ? [...config.themes] : config.themes ? [config.themes] : [new ExpressiveCodeTheme(github_dark_default), new ExpressiveCodeTheme(github_light_default)];
    this.minSyntaxHighlightingColorContrast = config.minSyntaxHighlightingColorContrast ?? 5.5;
    this.useDarkModeMediaQuery = config.useDarkModeMediaQuery ?? (this.themes.length === 2 && this.themes[0].type !== this.themes[1].type);
    this.themeCssRoot = config.themeCssRoot ?? ":root";
    this.themeCssSelector = config.themeCssSelector ?? ((theme) => `[data-theme='${theme.name}']`);
    this.cascadeLayer = config.cascadeLayer ?? "";
    this.useStyleReset = config.useStyleReset ?? true;
    this.customizeTheme = config.customizeTheme;
    this.useThemedScrollbars = config.useThemedScrollbars ?? true;
    this.useThemedSelectionColors = config.useThemedSelectionColors ?? false;
    this.styleOverrides = { ...config.styleOverrides };
    this.defaultLocale = config.defaultLocale || "en-US";
    this.defaultProps = config.defaultProps || {};
    this.plugins = [...corePlugins, ...config.plugins?.flat() || []];
    this.logger = new ExpressiveCodeLogger(config.logger);
    this.plugins.forEach((plugin) => {
      plugin.styleSettings?.cssVarReplacements?.forEach(([search, replace]) => {
        cssVarReplacements.set(search, replace);
      });
    });
    this.themes = this.themes.map((theme, styleVariantIndex) => {
      if (this.customizeTheme) {
        theme = this.customizeTheme(theme) ?? theme;
      }
      if (this.minSyntaxHighlightingColorContrast > 0) {
        const themeStyleSettings = resolveStyleSettings({
          theme,
          styleVariantIndex,
          plugins: this.plugins,
          styleOverrides: this.styleOverrides
        });
        const codeBg = getFirstStaticColor(themeStyleSettings.get("codeBackground"));
        theme.ensureMinSyntaxHighlightingColorContrast(this.minSyntaxHighlightingColorContrast, codeBg);
      }
      return theme;
    });
    this.styleVariants = resolveStyleVariants({
      themes: this.themes,
      styleOverrides: this.styleOverrides,
      plugins: this.plugins,
      cssVarName: getCssVarName
    });
  }
  /**
   * Renders the given code block(s) and returns the rendered group & block ASTs,
   * the rendered code block contents after all transformations have been applied,
   * and a set of non-global CSS styles required by the rendered code blocks.
   *
   * In Expressive Code, all processing of your code blocks and their metadata
   * is performed by plugins. To render markup around lines or inline ranges of characters,
   * the `render` method calls the hook functions registered by all added plugins.
   *
   * @param input
   * The code block(s) to render. Can either be an `ExpressiveCodeBlockOptions` object
   * containing the properties required to create a new `ExpressiveCodeBlock` internally,
   * an existing `ExpressiveCodeBlock`, or an array containing any combination of these.
   *
   * @param options
   * Optional configuration options for the rendering process.
   */
  async render(input, options) {
    return await renderGroup({
      input,
      options,
      defaultLocale: this.defaultLocale,
      config: {
        ...this
      },
      plugins: this.plugins,
      // Also pass resolved style variants in case plugins need them
      ...this.getResolverContext()
    });
  }
  /**
   * Returns a string containing all CSS styles that should be added to every page
   * using Expressive Code. These styles are static base styles which do not depend
   * on the configured theme(s).
   *
   * The calling code must take care of actually adding the returned styles to the page.
   *
   * Please note that the styles contain references to CSS variables, which must also
   * be added to the page. These can be obtained by calling {@link getThemeStyles}.
   */
  async getBaseStyles() {
    const pluginStyles = [];
    const resolverContext = this.getResolverContext();
    pluginStyles.push({
      pluginName: "core",
      styles: getCoreBaseStyles({
        ...resolverContext,
        useStyleReset: this.useStyleReset,
        useThemedScrollbars: this.useThemedScrollbars,
        useThemedSelectionColors: this.useThemedSelectionColors
      })
    });
    for (const plugin of this.plugins) {
      if (!plugin.baseStyles)
        continue;
      const resolvedStyles = typeof plugin.baseStyles === "function" ? await plugin.baseStyles(resolverContext) : plugin.baseStyles;
      if (!resolvedStyles)
        continue;
      pluginStyles.push({
        pluginName: plugin.name,
        styles: resolvedStyles
      });
    }
    const processedStyles = await processPluginStyles(pluginStyles);
    return wrapInCascadeLayer([...processedStyles].join(""), this.cascadeLayer);
  }
  /**
   * Returns a string containing theme-dependent styles that should be added to every page
   * using Expressive Code. These styles contain CSS variable declarations that are generated
   * automatically based on the configured {@link ExpressiveCodeEngineConfig.themes themes},
   * {@link ExpressiveCodeEngineConfig.useDarkModeMediaQuery useDarkModeMediaQuery} and
   * {@link ExpressiveCodeEngineConfig.themeCssSelector themeCssSelector} config options.
   *
   * The first theme defined in the `themes` option is considered the "base theme",
   * for which a full set of CSS variables is declared and scoped to the selector
   * defined by the `themeCssRoot` option (defaults to `:root`).
   *
   * For all alternate themes, a differential set of CSS variables is declared for cases where
   * their values differ from the base theme, and scoped to theme-specific selectors that are
   * generated by combining `themeCssRoot` with the theme selector specified by this option.
   *
   * The calling code must take care of actually adding the returned styles to the page.
   *
   * Please note that these styles must be added to the page together with the base styles
   * returned by {@link getBaseStyles}.
   */
  async getThemeStyles() {
    const themeStyles = [];
    const renderDeclarations = (declarations) => [...declarations].map(([varName, varValue]) => `${varName}:${varValue}`).join(";");
    const { cssVarDeclarations: baseVars, theme: baseTheme } = this.styleVariants[0];
    const baseThemeSelector = this.themeCssSelector && this.themeCssSelector(baseTheme, { styleVariants: this.styleVariants });
    const notBaseThemeSelector = baseThemeSelector ? `:not(${baseThemeSelector})` : "";
    const baseThemeBlockInsideAlternateThemeRoot = notBaseThemeSelector && `${this.themeCssRoot}${notBaseThemeSelector} &${baseThemeSelector}`;
    const baseVarSelectors = [
      // Root selector without any specific theme selectors
      this.themeCssRoot,
      // Code blocks with base theme selector inside root with non-base theme selector
      baseThemeBlockInsideAlternateThemeRoot
    ].filter((selector) => selector).join(",");
    const baseThemeStyleSelectors = [
      // Code blocks with no specific theme selector
      "&",
      // Code blocks with base theme selector inside root with non-base theme selector
      baseThemeBlockInsideAlternateThemeRoot
    ].filter((selector) => selector).join(",");
    themeStyles.push(
      await scopeAndMinifyNestedCss(`
				${baseVarSelectors} {
					${renderDeclarations(baseVars)}
				}
				${baseThemeStyleSelectors} {
					${getCoreThemeStyles(0)}
				}
			`)
    );
    const alternateVariants = [];
    for (let styleVariantIndex = 1; styleVariantIndex < this.styleVariants.length; styleVariantIndex++) {
      const styleVariant = this.styleVariants[styleVariantIndex];
      const diffVars = /* @__PURE__ */ new Map();
      styleVariant.cssVarDeclarations.forEach((varValue, varName) => {
        if (baseVars.get(varName) !== varValue) {
          diffVars.set(varName, varValue);
        }
      });
      alternateVariants.push({
        theme: styleVariant.theme,
        cssVars: renderDeclarations(diffVars),
        coreStyles: getCoreThemeStyles(styleVariantIndex)
      });
    }
    if (this.useDarkModeMediaQuery) {
      const baseTheme2 = this.styleVariants[0].theme;
      const altType = baseTheme2.type === "dark" ? "light" : "dark";
      const firstAltVariant = alternateVariants.find((variant) => variant.theme.type === altType);
      if (!firstAltVariant)
        throw new Error(
          [
            `The config option "useDarkModeMediaQuery: true" requires at least`,
            `one dark and one light theme, but the following themes were given:`,
            this.themes.map((theme) => `${theme.name} (${theme.type})`).join(", ")
          ].join(" ")
        );
      const darkModeMediaQuery = await scopeAndMinifyNestedCss(`
				@media (prefers-color-scheme: ${altType}) {
					${this.themeCssRoot}${notBaseThemeSelector} {
						${firstAltVariant.cssVars}
					}
					${this.themeCssRoot}${notBaseThemeSelector} & {
						${firstAltVariant.coreStyles}
					}
				}
			`);
      themeStyles.push(darkModeMediaQuery);
    }
    if (this.themeCssSelector !== false) {
      for (const { theme, cssVars, coreStyles } of alternateVariants) {
        const themeSelector = this.themeCssSelector && this.themeCssSelector(theme, { styleVariants: this.styleVariants });
        if (!themeSelector)
          continue;
        themeStyles.push(
          await scopeAndMinifyNestedCss(`
						${this.themeCssRoot}${themeSelector} &${notBaseThemeSelector}, &${themeSelector} {
							${cssVars};
							${coreStyles}
						}
					`)
        );
      }
    }
    return wrapInCascadeLayer(themeStyles.join(""), this.cascadeLayer);
  }
  /**
   * Returns an array of JavaScript modules (pure code without any wrapping `script` tags)
   * that should be added to every page containing code blocks.
   *
   * The contents are collected from the `jsModules` property of all registered plugins.
   * Any duplicates are removed.
   *
   * The calling code must take care of actually adding the collected scripts to the page.
   * For example, it could create site-wide JavaScript files from the returned modules
   * and refer to them in a script tag with `type="module"`, or it could insert them
   * into inline `<script type="module">` elements.
   */
  async getJsModules() {
    const jsModules = /* @__PURE__ */ new Set();
    for (const plugin of this.plugins) {
      const pluginModules = typeof plugin.jsModules === "function" ? await plugin.jsModules(this.getResolverContext()) : plugin.jsModules;
      pluginModules?.forEach((moduleCode) => {
        moduleCode = moduleCode.trim();
        if (moduleCode)
          jsModules.add(moduleCode);
      });
    }
    return [...jsModules];
  }
  cssVar(styleSetting, fallbackValue) {
    return `var(${getCssVarName(styleSetting)}${fallbackValue ? `, ${fallbackValue}` : ""})`;
  }
  getResolverContext() {
    return {
      cssVar: (styleSetting, fallbackValue) => this.cssVar(styleSetting, fallbackValue),
      cssVarName: getCssVarName,
      styleVariants: this.styleVariants
    };
  }
  themes;
  minSyntaxHighlightingColorContrast;
  useDarkModeMediaQuery;
  themeCssRoot;
  themeCssSelector;
  cascadeLayer;
  useStyleReset;
  customizeTheme;
  useThemedScrollbars;
  useThemedSelectionColors;
  styleOverrides;
  styleVariants;
  defaultLocale;
  defaultProps;
  plugins;
  logger;
};

// src/common/plugin-texts.ts
var PluginTexts = class {
  defaultTexts;
  localizedTexts = /* @__PURE__ */ new Map();
  overridesByLocale = /* @__PURE__ */ new Map();
  constructor(defaultTexts) {
    this.defaultTexts = defaultTexts;
  }
  /**
   * Adds localized texts for a specific locale. You must provide a full set of localized texts
   * for the given locale.
   *
   * It is recommended to use two-letter language codes (e.g. `de`, `fr`, `es`) without region
   * codes to make your localized texts available to all users speaking the same language.
   * Region codes should only be added if regional differences must be taken into account.
   *
   * Plugin authors can use this to provide localized versions of their texts.
   * Users can also call this function to provide their own localizations.
   *
   * If you only want to customize a few texts of an existing localization,
   * have a look at `overrideTexts` instead.
   */
  addLocale(locale, localizedTexts) {
    locale = this.parseLocale(locale).locale;
    this.localizedTexts.set(locale, localizedTexts);
  }
  /**
   * Allows you to override any defined texts. This is useful if you want to customize a few
   * selected texts without having to provide a full set of localized texts.
   *
   * You can either override texts for a specific `locale`, or override the default texts
   * by setting `locale` to `undefined`.
   *
   * It is recommended to use two-letter language codes (e.g. `de`, `fr`, `es`) without region
   * codes to apply your overrides to all users speaking the same language.
   * Region codes should only be added if regional differences must be taken into account.
   */
  overrideTexts(locale, localeTextOverrides) {
    locale = locale && this.parseLocale(locale).locale;
    const localeOverrides = this.overridesByLocale.get(locale) || this.overridesByLocale.set(locale, {}).get(locale);
    Object.assign(localeOverrides, localeTextOverrides);
  }
  /**
   * Returns the best matching texts for the requested locale,
   * taking any available localized texts and overrides into account.
   *
   * Example for locale `de-DE`:
   * - If localized texts for `de-DE` are available, these will be returned.
   * - If `de-DE` is not available, but `de` is, these will be returned.
   * - As the final fallback, the default texts will be returned.
   */
  get(locale) {
    const { acceptedLocales } = this.parseLocale(locale);
    const localizedTexts = this.getLocalizedTexts(acceptedLocales);
    return this.applyOverrides(localizedTexts, acceptedLocales);
  }
  parseLocale(locale) {
    const parts = locale.trim().toLowerCase().split(/[-_]/);
    const language = parts[0];
    const region = parts[1];
    const normalizedLocale = region ? `${language}-${region}` : language;
    const acceptedLocales = [];
    acceptedLocales.push(language);
    if (region)
      acceptedLocales.push(normalizedLocale);
    return {
      language,
      region,
      locale: normalizedLocale,
      acceptedLocales
    };
  }
  getLocalizedTexts(acceptedLocales) {
    for (const acceptedLocale of acceptedLocales) {
      const localizedTexts = this.localizedTexts.get(acceptedLocale);
      if (localizedTexts) {
        return localizedTexts;
      }
    }
    return this.defaultTexts;
  }
  applyOverrides(texts, acceptedLocales) {
    const result = { ...texts };
    const overrides = [...acceptedLocales, undefined].map((locale) => this.overridesByLocale.get(locale)).filter((x) => x);
    if (overrides.length) {
      const keys = Object.keys(texts);
      keys.forEach((key) => {
        for (const override of overrides) {
          const overrideValue = override?.[key];
          if (overrideValue) {
            result[key] = overrideValue;
            return;
          }
        }
      });
    }
    return result;
  }
};

// ../../../node_modules/.pnpm/djb2a@2.0.0/node_modules/djb2a/index.js
var MAGIC_CONSTANT = 5381;
function djb2a(string) {
  let hash = MAGIC_CONSTANT;
  for (let index = 0; index < string.length; index++) {
    hash = (hash << 5) + hash ^ string.charCodeAt(index);
  }
  return hash >>> 0;
}

// src/helpers/objects.ts
function stableStringify(obj, options = {}) {
  const { includeFunctionContents = false } = options;
  const visited = /* @__PURE__ */ new WeakSet();
  const toJson = (value) => {
    if (typeof value === "object" && value !== null) {
      if (visited.has(value)) {
        return "[Circular]";
      }
      visited.add(value);
      let result;
      if (Array.isArray(value)) {
        result = value.map(toJson);
      } else {
        const objValue = value;
        const sortedKeys = Object.keys(objValue).sort();
        const sortedObj = {};
        for (const key of sortedKeys) {
          sortedObj[key] = toJson(objValue[key]);
        }
        result = sortedObj;
      }
      visited.delete(value);
      return result;
    }
    if (typeof value === "function") {
      return includeFunctionContents ? value.toString() : "[Function]";
    }
    return value;
  };
  if (obj === undefined)
    return "undefined";
  return JSON.stringify(toJson(obj));
}
function getStableObjectHash(obj, options = {}) {
  const { includeFunctionContents = false, hashLength = 5 } = options;
  const numericHash = djb2a(stableStringify(obj, { includeFunctionContents }));
  const padding = "0".repeat(hashLength);
  return (padding + numericHash.toString(36)).slice(-hashLength);
}

// src/index.ts
var framesStyleSettings = new PluginStyleSettings({
  defaultValues: {
    frames: {
      shadowColor: ({ theme, resolveSetting }) => theme.colors["widget.shadow"] || multiplyAlpha(resolveSetting("borderColor"), 0.75),
      frameBoxShadowCssValue: ({ resolveSetting }) => `0.1rem 0.1rem 0.2rem ${resolveSetting("frames.shadowColor")}`,
      editorActiveTabBackground: ({ theme }) => theme.colors["tab.activeBackground"],
      editorActiveTabForeground: ({ theme }) => theme.colors["tab.activeForeground"],
      editorActiveTabBorderColor: "transparent",
      editorActiveTabIndicatorHeight: ({ resolveSetting }) => resolveSetting("borderWidth"),
      editorActiveTabIndicatorTopColor: ({ theme }) => theme.colors["tab.activeBorderTop"],
      editorActiveTabIndicatorBottomColor: ({ theme }) => theme.colors["tab.activeBorder"],
      editorTabsMarginInlineStart: "0",
      editorTabsMarginBlockStart: "0",
      editorTabBorderRadius: ({ resolveSetting }) => resolveSetting("borderRadius"),
      editorTabBarBackground: ({ theme }) => theme.colors["editorGroupHeader.tabsBackground"],
      editorTabBarBorderColor: ({ resolveSetting }) => resolveSetting("borderColor"),
      editorTabBarBorderBottomColor: ({ theme }) => theme.colors["editorGroupHeader.tabsBorder"] || "transparent",
      editorBackground: ({ resolveSetting }) => resolveSetting("codeBackground"),
      terminalTitlebarDotsForeground: ({ resolveSetting }) => resolveSetting("frames.terminalTitlebarForeground"),
      terminalTitlebarDotsOpacity: "0.15",
      terminalTitlebarBackground: ({ theme }) => theme.colors["titleBar.activeBackground"] || theme.colors["editorGroupHeader.tabsBackground"],
      terminalTitlebarForeground: ({ theme }) => theme.colors["titleBar.activeForeground"],
      terminalTitlebarBorderBottomColor: ({ theme, resolveSetting }) => theme.colors["titleBar.border"] || onBackground(resolveSetting("borderColor"), theme.type === "dark" ? "#000000bf" : "#ffffffbf"),
      terminalBackground: ({ theme }) => theme.colors["terminal.background"],
      inlineButtonBackground: ({ resolveSetting }) => resolveSetting("frames.inlineButtonForeground"),
      inlineButtonBackgroundIdleOpacity: "0",
      inlineButtonBackgroundHoverOrFocusOpacity: "0.2",
      inlineButtonBackgroundActiveOpacity: "0.3",
      inlineButtonForeground: ({ resolveSetting }) => resolveSetting("codeForeground"),
      inlineButtonBorder: ({ resolveSetting }) => resolveSetting("frames.inlineButtonForeground"),
      inlineButtonBorderOpacity: "0.4",
      tooltipSuccessBackground: ({ theme }) => setLuminance(theme.colors["terminal.ansiGreen"] || "#0dbc79", 0.18),
      tooltipSuccessForeground: "white"
    }
  }
});
function getFramesBaseStyles({ cssVar }, options) {
  const dotsSvg = [
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 16' preserveAspectRatio='xMidYMid meet'>`,
    `<circle cx='8' cy='8' r='8'/>`,
    `<circle cx='30' cy='8' r='8'/>`,
    `<circle cx='52' cy='8' r='8'/>`,
    `</svg>`
  ].join("");
  const escapedDotsSvg = dotsSvg.replace(/</g, "%3C").replace(/>/g, "%3E");
  const terminalTitlebarDots = `url("data:image/svg+xml,${escapedDotsSvg}")`;
  const copySvg = [
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.75'>`,
    `<path d='M3 19a2 2 0 0 1-1-2V2a2 2 0 0 1 1-1h13a2 2 0 0 1 2 1'/>`,
    `<rect x='6' y='5' width='16' height='18' rx='1.5' ry='1.5'/>`,
    `</svg>`
  ].join("");
  const escapedCopySvg = copySvg.replace(/</g, "%3C").replace(/>/g, "%3E");
  const copyToClipboard = `url("data:image/svg+xml,${escapedCopySvg}")`;
  const tabBarBackground = [
    `linear-gradient(to top, ${cssVar("frames.editorTabBarBorderBottomColor")} ${cssVar("borderWidth")}, transparent ${cssVar("borderWidth")})`,
    `linear-gradient(${cssVar("frames.editorTabBarBackground")}, ${cssVar("frames.editorTabBarBackground")})`
  ].join(",");
  const frameStyles = `.frame {
		all: unset;
		position: relative;
		display: block;
		--header-border-radius: calc(${cssVar("borderRadius")} + ${cssVar("borderWidth")});
		--tab-border-radius: calc(${cssVar("frames.editorTabBorderRadius")} + ${cssVar("borderWidth")});
		--button-spacing: 0.4rem;
		--code-background: ${cssVar("frames.editorBackground")};
		border-radius: var(--header-border-radius);
		box-shadow: ${cssVar("frames.frameBoxShadowCssValue")};

		.header {
			display: none;
			z-index: 1;
			position: relative;

			border-radius: var(--header-border-radius) var(--header-border-radius) 0 0;
		}

		/* Styles to apply if we have a title bar or tab bar */
		&.has-title,
		&.is-terminal {
			& pre, & code {
				border-top: none;
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}

		/* Prevent empty window titles from collapsing in height */
		.title:empty:before {
			content: '\\a0';
		}

		/* Editor tab bar */
		&.has-title:not(.is-terminal) {
			--button-spacing: calc(1.9rem + 2 * (${cssVar("uiPaddingBlock")} + ${cssVar("frames.editorActiveTabIndicatorHeight")}));

			/* Active editor tab */
			& .title {
				position: relative;
				color: ${cssVar("frames.editorActiveTabForeground")};
				background: ${cssVar("frames.editorActiveTabBackground")};
				background-clip: padding-box;
				margin-block-start: ${cssVar("frames.editorTabsMarginBlockStart")};
				padding: calc(${cssVar("uiPaddingBlock")} + ${cssVar("frames.editorActiveTabIndicatorHeight")}) ${cssVar("uiPaddingInline")};
				border: ${cssVar("borderWidth")} solid ${cssVar("frames.editorActiveTabBorderColor")};
				border-radius: var(--tab-border-radius) var(--tab-border-radius) 0 0;
				border-bottom: none;
				overflow: hidden;

				&::after {
					content: '';
					position: absolute;
					pointer-events: none;
					inset: 0;
					border-top: ${cssVar("frames.editorActiveTabIndicatorHeight")} solid ${cssVar("frames.editorActiveTabIndicatorTopColor")};
					border-bottom: ${cssVar("frames.editorActiveTabIndicatorHeight")} solid ${cssVar("frames.editorActiveTabIndicatorBottomColor")};
				}
			}

			/* Tab bar background */
			& .header {
				display: flex;

				background: ${tabBarBackground};
				background-repeat: no-repeat;

				padding-inline-start: ${cssVar("frames.editorTabsMarginInlineStart")};

				&::before {
					content: '';
					position: absolute;
					pointer-events: none;
					inset: 0;
					border: ${cssVar("borderWidth")} solid ${cssVar("frames.editorTabBarBorderColor")};
					border-radius: inherit;
					border-bottom: none;
				}
			}
		}

		/* Terminal window */
		&.is-terminal {
			--button-spacing: calc(1.9rem + ${cssVar("borderWidth")} + 2 * ${cssVar("uiPaddingBlock")});
			--code-background: ${cssVar("frames.terminalBackground")};

			/* Terminal title bar */
			& .header {
				display: flex;
				align-items: center;
				justify-content: center;
				padding-block: ${cssVar("uiPaddingBlock")};
				padding-block-end: calc(${cssVar("uiPaddingBlock")} + ${cssVar("borderWidth")});
				position: relative;

				font-weight: 500;
				letter-spacing: 0.025ch;

				color: ${cssVar("frames.terminalTitlebarForeground")};
				background: ${cssVar("frames.terminalTitlebarBackground")};
				border: ${cssVar("borderWidth")} solid ${cssVar("borderColor")};
				border-bottom: none;

				/* Display three dots at the left side of the header */
				&::before {
					content: '';
					position: absolute;
					pointer-events: none;
					left: ${cssVar("uiPaddingInline")};
					width: 2.1rem;
					height: ${2.1 / 60 * 16}rem;
					line-height: 0;
					background-color: ${cssVar("frames.terminalTitlebarDotsForeground")};
					opacity: ${cssVar("frames.terminalTitlebarDotsOpacity")};
					-webkit-mask-image: ${terminalTitlebarDots};
					-webkit-mask-repeat: no-repeat;
					mask-image: ${terminalTitlebarDots};
					mask-repeat: no-repeat;
				}
				/* Display a border below the header */
				&::after {
					content: '';
					position: absolute;
					pointer-events: none;
					inset: 0;
					border-bottom: ${cssVar("borderWidth")} solid ${cssVar("frames.terminalTitlebarBorderBottomColor")};
				}
			}
		}

		/* Code */
		& pre {
			background: var(--code-background);
		}
	}`;
  const copyButtonStyles = `.copy {
		display: flex;
		gap: 0.25rem;
		flex-direction: row;
		position: absolute;
		inset-block-start: calc(${cssVar("borderWidth")} + var(--button-spacing));
		inset-inline-end: calc(${cssVar("borderWidth")} + ${cssVar("uiPaddingInline")} / 2);

		/* hide copy button when there is no JavaScript */
		@media (scripting: none) {
		  display: none;
		}

		/* RTL support: Code is always LTR, so the inline copy button
		   must match this to avoid overlapping the start of lines */
		direction: ltr;
		unicode-bidi: isolate;

		button {
			position: relative;
			align-self: flex-end;
			margin: 0;
			padding: 0;
			border: none;
			border-radius: 0.2rem;
			z-index: 1;
			cursor: pointer;

			transition-property: opacity, background, border-color;
			transition-duration: 0.2s;
			transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);

			/* Mobile-first styles: Make the button visible and tappable */
			width: 2.5rem;
			height: 2.5rem;
			background: var(--code-background);
			opacity: 0.75;

			div {
				position: absolute;
				inset: 0;
				border-radius: inherit;

				background: ${cssVar("frames.inlineButtonBackground")};
				opacity: ${cssVar("frames.inlineButtonBackgroundIdleOpacity")};

				transition-property: inherit;
				transition-duration: inherit;
				transition-timing-function: inherit;
			}

			&::before {
				content: '';
				position: absolute;
				pointer-events: none;
				inset: 0;
				border-radius: inherit;
				border: ${cssVar("borderWidth")} solid ${cssVar("frames.inlineButtonBorder")};
				opacity: ${cssVar("frames.inlineButtonBorderOpacity")};
			}

			&::after {
				content: '';
				position: absolute;
				pointer-events: none;
				inset: 0;
				background-color: ${cssVar("frames.inlineButtonForeground")};
				-webkit-mask-image: ${copyToClipboard};
				-webkit-mask-repeat: no-repeat;
				mask-image: ${copyToClipboard};
				mask-repeat: no-repeat;
				margin: 0.475rem;
				line-height: 0;
			}

			/*
				On hover or focus, make the button fully opaque
				and set hover/focus background opacity
			*/
			&:hover, &:focus:focus-visible {
				opacity: 1;
				div {
					opacity: ${cssVar("frames.inlineButtonBackgroundHoverOrFocusOpacity")};
				}
			}

			/* On press, set active background opacity */
			&:active {
				opacity: 1;
				div {
					opacity: ${cssVar("frames.inlineButtonBackgroundActiveOpacity")};
				}
			}
		}

		.feedback {
			--tooltip-arrow-size: 0.35rem;
			--tooltip-bg: ${cssVar("frames.tooltipSuccessBackground")};
			color: ${cssVar("frames.tooltipSuccessForeground")};
			pointer-events: none;
			user-select: none;
			-webkit-user-select: none;
			position: relative;
			align-self: center;
			background-color: var(--tooltip-bg);
			z-index: 99;
			padding: 0.125rem 0.75rem;
			border-radius: 0.2rem;
			margin-inline-end: var(--tooltip-arrow-size);
			opacity: 0;
			transition-property: opacity, transform;
			transition-duration: 0.2s;
			transition-timing-function: ease-in-out;
			transform: translate3d(0, 0.25rem, 0);

			&::after {
				content: '';
				position: absolute;
				pointer-events: none;
				top: calc(50% - var(--tooltip-arrow-size));
				inset-inline-end: calc(-2 * (var(--tooltip-arrow-size) - 0.5px));
				border: var(--tooltip-arrow-size) solid transparent;
				border-inline-start-color: var(--tooltip-bg);
			}

			&.show {
				opacity: 1;
				transform: translate3d(0, 0, 0);
			}
		}

	}

	@media (hover: hover) {
		/* If a mouse is available, hide the button by default and make it smaller */
		.copy button {
			opacity: 0;
			width: 2rem;
			height: 2rem;
		}

		/* Reveal the non-hovered button in the following cases:
			- when the frame is hovered
			- when a sibling inside the frame is focused
			- when the copy button shows a visible feedback message
		*/
		.frame:hover .copy button:not(:hover),
		.frame:focus-within :focus-visible ~ .copy button:not(:hover),
		.frame .copy .feedback.show ~ button:not(:hover) {
			opacity: 0.75;
		}
	}
	
	/* Increase end padding of the first line for the copy button */
	:nth-child(1 of .${codeLineClass}) .code {
		padding-inline-end: calc(2rem + ${cssVar("codePaddingInline")});
	}`;
  const styles = [
    // Always add base frame styles
    frameStyles,
    // Add copy button styles if enabled
    options.showCopyToClipboardButton ? copyButtonStyles : ""
  ];
  return styles.join("\n");
}

// src/utils.ts
var frameTypes = ["code", "terminal", "none", "auto"];
function frameTypeFromString(input) {
  if (input === "")
    input = "none";
  if (input === "editor")
    input = "code";
  if (input === "shell")
    input = "terminal";
  const frameType = input;
  return frameTypes.includes(frameType) ? frameType : undefined;
}
var LanguageGroups = {
  code: ["astro", "cjs", "htm", "html", "js", "jsx", "mjs", "svelte", "ts", "tsx", "typescript", "vb", "vue", "vue-html"],
  terminal: ["ansi", "bash", "bat", "batch", "cmd", "console", "nu", "nushell", "powershell", "ps", "ps1", "psd1", "psm1", "sh", "shell", "shellscript", "shellsession", "zsh"],
  data: ["csv", "env", "ini", "json", "toml", "xml", "yaml", "yml"],
  styles: ["css", "less", "sass", "scss", "styl", "stylus", "xsl"],
  textContent: ["markdown", "md", "mdx"]
};
var LanguagesWithFencedFrontmatter = ["astro", "markdown", "md", "mdx", "toml", "yaml", "yml"];
function isTerminalLanguage$1(language) {
  return LanguageGroups.terminal.includes(language);
}
var getFileNameCommentRegExpString = () => [
  // Start of line
  `^`,
  // Optional whitespace
  `\\s*`,
  // Mandatory comment start: `//`, `#` (but not `#!`), `<!--` or `/*`
  `(?://|#(?!!)|<!--|/\\*)`,
  // Optional whitespace
  `\\s*`,
  // Optional prefix before the file name:
  // - This is intended to match strings like `File name:` or `Example :`,
  //   but not Windows drive letters like `C:`,
  //   or URL protocols like `https:`
  // - We therefore expect the prefix to begin with any sequence of characters
  //   not starting with a letter + colon (to rule out Windows drive letters)
  // - The prefix must then be followed by:
  //   - a Japanese colon (`\\uff1a`), or
  //   - a regular colon (`:`) not followed by `//` (to rule out URL protocols)
  `(?:((?![a-z]:).*?)(?:\\uff1a|:(?!//)))?`,
  // Optional whitespace
  `\\s*`,
  // Capture the file name
  `(`,
  // Optional Windows drive letter
  `(?:[a-z]:)?`,
  // Optional sequence of characters allowed in file paths
  `[\\w./~%[\\]+\\\\-]*`,
  // Optional dot and supported file extension
  `(?:\\.(?:${Object.values(LanguageGroups).flat().sort().join("|")}))?`,
  // End of file name capture
  `)`,
  // Optional whitespace
  `\\s*`,
  // Optional HTML or JS/CSS comment end (`-->` or `*/`)
  `(?:-->|\\*/)?`,
  // Optional whitespace
  `\\s*`,
  // End of line
  `$`
].join("");
var fileNameCommentRegExp;
function getFileNameFromComment(line, lang) {
  if (fileNameCommentRegExp === undefined) {
    fileNameCommentRegExp = new RegExp(getFileNameCommentRegExpString(), "i");
  }
  const matches = fileNameCommentRegExp.exec(line);
  const textBeforeFileName = matches?.[1] ?? "";
  const possibleFileName = matches?.[2];
  if (!possibleFileName)
    return;
  if (!possibleFileName.match(/[^.:/\\~]/))
    return;
  if (possibleFileName.match(/^\.{2,}(?!\/|\\)/))
    return;
  const languageGroup = Object.values(LanguageGroups).find((group) => group.includes(lang));
  const fileNameWithoutPath = possibleFileName.replace(/^.*[/\\]/, "");
  const fileExt = fileNameWithoutPath.match(/\.([^.]+)$/)?.[1];
  const hasTypicalFileNameBeginning = possibleFileName.match(/^(\/|\\|\.[/\\]|~|[a-z]:).+/i);
  const hasFileNameStartingWithDot = fileNameWithoutPath.startsWith(".");
  const looksLikeSeparatedPath = (
    // Contains path separators
    possibleFileName.match(/[/\\]/) && // Also contains other characters (except path separators, numbers and dots)
    possibleFileName.match(/[^/\\0-9.]/) && // Does not contain spaces
    !possibleFileName.match(/\s/) && // Is all lowercase
    possibleFileName === possibleFileName.toLowerCase()
  );
  const hasTypicalFileNamePattern = hasTypicalFileNameBeginning || hasFileNameStartingWithDot || looksLikeSeparatedPath;
  if (hasTypicalFileNamePattern && (!textBeforeFileName.length || languageGroup === LanguageGroups.terminal)) {
    return possibleFileName;
  }
  if (!fileExt || languageGroup && !languageGroup.includes(fileExt))
    return;
  return possibleFileName;
}
function extractFileNameFromCodeBlock(codeBlock) {
  let extractedFileName = undefined;
  let lineIdx = codeBlock.getLines(0, 4).findIndex((line) => {
    extractedFileName = getFileNameFromComment(line.text, codeBlock.language);
    return !!extractedFileName;
  });
  if (!extractedFileName)
    return;
  codeBlock.deleteLine(lineIdx);
  if (LanguagesWithFencedFrontmatter.includes(codeBlock.language)) {
    const openingFence = lineIdx > 0 ? codeBlock.getLine(lineIdx - 1)?.text.trim() : undefined;
    const closingFence = codeBlock.getLine(lineIdx)?.text.trim();
    const isFrontmatterEmptyNow = openingFence === closingFence && ["---", "+++"].includes(openingFence ?? "");
    if (isFrontmatterEmptyNow) {
      lineIdx--;
      codeBlock.deleteLine(lineIdx);
      codeBlock.deleteLine(lineIdx);
    }
  }
  if (codeBlock.getLine(lineIdx)?.text.trim().length === 0) {
    codeBlock.deleteLine(lineIdx);
  }
  return extractedFileName;
}

// src/copy-js-module.min.ts
var copy_js_module_min_default = 'try{(()=>{function i(o){let e=document.createElement("pre");Object.assign(e.style,{opacity:"0",pointerEvents:"none",position:"absolute",overflow:"hidden",left:"0",top:"0",width:"20px",height:"20px",webkitUserSelect:"auto",userSelect:"all"}),e.ariaHidden="true",e.textContent=o,document.body.appendChild(e);let a=document.createRange();a.selectNode(e);let n=getSelection();if(!n)return!1;n.removeAllRanges(),n.addRange(a);let r=!1;try{r=document.execCommand("copy")}finally{n.removeAllRanges(),document.body.removeChild(e)}return r}async function l(o){let e=o.currentTarget,a=e.dataset,n=!1,r=a.code.replace(/\\u007f/g,`\n`);try{await navigator.clipboard.writeText(r),n=!0}catch{n=i(r)}if(!n||e.parentNode?.querySelector(".feedback"))return;let t=document.createElement("div");t.classList.add("feedback"),t.append(a.copied),e.before(t),t.offsetWidth,requestAnimationFrame(()=>t?.classList.add("show"));let c=()=>!t||t.classList.remove("show"),d=()=>{!t||parseFloat(getComputedStyle(t).opacity)>0||(t.remove(),t=void 0)};setTimeout(c,1500),setTimeout(d,2500),e.addEventListener("blur",c),t.addEventListener("transitioncancel",d),t.addEventListener("transitionend",d)}function s(o){o.querySelectorAll?.("[SELECTOR]").forEach(e=>e.addEventListener("click",l))}s(document);var u=new MutationObserver(o=>o.forEach(e=>e.addedNodes.forEach(a=>{s(a)})));u.observe(document.body,{childList:!0,subtree:!0});document.addEventListener("astro:page-load",()=>{s(document)});})();}catch(e){console.error("[EC] copy-js-module failed:",e)}';

// src/index.ts
var pluginFramesTexts = new PluginTexts({
  terminalWindowFallbackTitle: "Terminal window",
  copyButtonTooltip: "Copy to clipboard",
  copyButtonCopied: "Copied!"
});
pluginFramesTexts.addLocale("de", {
  terminalWindowFallbackTitle: "Terminal-Fenster",
  copyButtonTooltip: "In die Zwischenablage kopieren",
  copyButtonCopied: "Kopiert!"
});
function pluginFrames(options = {}) {
  options = {
    extractFileNameFromCode: true,
    showCopyToClipboardButton: true,
    removeCommentsWhenCopyingTerminalFrames: true,
    ...options
  };
  return {
    name: "Frames",
    styleSettings: framesStyleSettings,
    baseStyles: (context) => getFramesBaseStyles(context, options),
    jsModules: options.showCopyToClipboardButton ? [copy_js_module_min_default.replace(/\[SELECTOR\]/g, ".expressive-code .copy button")] : undefined,
    hooks: {
      preprocessMetadata: ({ codeBlock }) => {
        const { metaOptions, props } = codeBlock;
        props.title = metaOptions.getString("title") ?? props.title;
        const frame = metaOptions.getString("frame");
        if (frame !== undefined) {
          const frameType = frameTypeFromString(frame);
          if (frameType === undefined)
            throw new Error(
              `Invalid frame type \`${frame}\` found in code block meta string.
							Valid frame types are: ${frameTypes.join(", ")}.`.replace(/\s+/g, " ")
            );
          props.frame = frameType;
        }
      },
      preprocessCode: ({ codeBlock }) => {
        const { props, language } = codeBlock;
        if (props.title === undefined && props.frame !== "none" && options.extractFileNameFromCode) {
          props.title = extractFileNameFromCodeBlock(codeBlock);
        }
        if ((props.frame ?? "auto") === "auto" && isTerminalLanguage$1(language)) {
          const titleIsFileName = props.title && getFileNameFromComment(`// ${props.title}`, language);
          if (titleIsFileName || codeBlock.getLines(0, 4).some((line) => line.text.match(/^\s*#!/))) {
            props.frame = "code";
          }
        }
      },
      postprocessRenderedBlock: ({ codeBlock, renderData, locale }) => {
        const texts = pluginFramesTexts.get(locale);
        const { title: titleText, frame = "auto" } = codeBlock.props;
        const isTerminal = frame === "terminal" || frame === "auto" && isTerminalLanguage$1(codeBlock.language);
        const visibleTitle = frame !== "none" && titleText || isTerminal ? [h("span", { className: "title" }, titleText || "")] : [];
        const screenReaderTitle = !titleText && isTerminal ? [h("span", { className: "sr-only" }, texts.terminalWindowFallbackTitle)] : [];
        const extraElements = [];
        if (options.showCopyToClipboardButton) {
          let codeToCopy = codeBlock.code;
          if (options.removeCommentsWhenCopyingTerminalFrames && isTerminal) {
            codeToCopy = codeToCopy.replace(/(?<=^|\n)\s*#.*($|\n+)/g, "").trim();
          }
          codeToCopy = codeToCopy.replace(/\n/g, "\x7F");
          extraElements.push(
            h("div", { className: "copy" }, [
              h(
                "button",
                {
                  title: texts.copyButtonTooltip,
                  "data-copied": texts.copyButtonCopied,
                  "data-code": codeToCopy
                },
                [h("div")]
              )
            ])
          );
        }
        renderData.blockAst = h(
          "figure",
          {
            className: [
              "frame",
              // If the code block is a terminal, add the `is-terminal` class
              ...isTerminal ? ["is-terminal"] : [],
              // If the code block has a title, add the `has-title` class
              ...frame !== "none" && titleText ? ["has-title"] : []
            ]
          },
          [
            h("figcaption", { className: "header" }, [...visibleTitle, ...screenReaderTitle]),
            // Render the original code block
            renderData.blockAst,
            // Add any extra elements (e.g. copy button)
            ...extraElements
          ]
        );
      }
    }
  };
}

const bundledLanguagesInfo = [
  {
    "id": "abap",
    "name": "ABAP",
    "import": () => import('./abap_TklKL8Fj.mjs')
  },
  {
    "id": "actionscript-3",
    "name": "ActionScript",
    "import": () => import('./actionscript-3_C-BmPqd_.mjs')
  },
  {
    "id": "ada",
    "name": "Ada",
    "import": () => import('./ada_BiETWOeQ.mjs')
  },
  {
    "id": "angular-html",
    "name": "Angular HTML",
    "import": () => import('./angular-html_I7r_QONN.mjs').then(n => n.f)
  },
  {
    "id": "angular-ts",
    "name": "Angular TypeScript",
    "import": () => import('./angular-ts_BW9STmd6.mjs')
  },
  {
    "id": "apache",
    "name": "Apache Conf",
    "import": () => import('./apache_DorU2yBT.mjs')
  },
  {
    "id": "apex",
    "name": "Apex",
    "import": () => import('./apex_DYnwybgy.mjs')
  },
  {
    "id": "apl",
    "name": "APL",
    "import": () => import('./apl_DYTXO5OZ.mjs')
  },
  {
    "id": "applescript",
    "name": "AppleScript",
    "import": () => import('./applescript_CtZf9Dgh.mjs')
  },
  {
    "id": "ara",
    "name": "Ara",
    "import": () => import('./ara_By32mYUy.mjs')
  },
  {
    "id": "asciidoc",
    "name": "AsciiDoc",
    "aliases": [
      "adoc"
    ],
    "import": () => import('./asciidoc_C3-SU8eX.mjs')
  },
  {
    "id": "asm",
    "name": "Assembly",
    "import": () => import('./asm_DdP2tMyZ.mjs')
  },
  {
    "id": "astro",
    "name": "Astro",
    "import": () => import('./astro_SNo2WyIY.mjs')
  },
  {
    "id": "awk",
    "name": "AWK",
    "import": () => import('./awk_CD3EH2dp.mjs')
  },
  {
    "id": "ballerina",
    "name": "Ballerina",
    "import": () => import('./ballerina_D_qERK2k.mjs')
  },
  {
    "id": "bat",
    "name": "Batch File",
    "aliases": [
      "batch"
    ],
    "import": () => import('./bat_2B5S5qk2.mjs')
  },
  {
    "id": "beancount",
    "name": "Beancount",
    "import": () => import('./beancount_KjtdmOP0.mjs')
  },
  {
    "id": "berry",
    "name": "Berry",
    "aliases": [
      "be"
    ],
    "import": () => import('./berry_BrwL9TYj.mjs')
  },
  {
    "id": "bibtex",
    "name": "BibTeX",
    "import": () => import('./bibtex_CXk5l6GG.mjs')
  },
  {
    "id": "bicep",
    "name": "Bicep",
    "import": () => import('./bicep_w2u4ab0C.mjs')
  },
  {
    "id": "blade",
    "name": "Blade",
    "import": () => import('./blade_DOuUIrb4.mjs')
  },
  {
    "id": "bsl",
    "name": "1C (Enterprise)",
    "aliases": [
      "1c"
    ],
    "import": () => import('./bsl_BsVDZXUQ.mjs')
  },
  {
    "id": "c",
    "name": "C",
    "import": () => import('./c_DMtkbuHO.mjs')
  },
  {
    "id": "cadence",
    "name": "Cadence",
    "aliases": [
      "cdc"
    ],
    "import": () => import('./cadence_WzGrSCdD.mjs')
  },
  {
    "id": "cairo",
    "name": "Cairo",
    "import": () => import('./cairo_IUD4Xd-c.mjs')
  },
  {
    "id": "clarity",
    "name": "Clarity",
    "import": () => import('./clarity_CcP_ILAX.mjs')
  },
  {
    "id": "clojure",
    "name": "Clojure",
    "aliases": [
      "clj"
    ],
    "import": () => import('./clojure_BIXzt-9L.mjs')
  },
  {
    "id": "cmake",
    "name": "CMake",
    "import": () => import('./cmake_C2dBWGYN.mjs')
  },
  {
    "id": "cobol",
    "name": "COBOL",
    "import": () => import('./cobol_BAol9vdj.mjs')
  },
  {
    "id": "codeowners",
    "name": "CODEOWNERS",
    "import": () => import('./codeowners_BOc0X9qM.mjs')
  },
  {
    "id": "codeql",
    "name": "CodeQL",
    "aliases": [
      "ql"
    ],
    "import": () => import('./codeql_D994Gg8y.mjs')
  },
  {
    "id": "coffee",
    "name": "CoffeeScript",
    "aliases": [
      "coffeescript"
    ],
    "import": () => import('./coffee_BPOQdxum.mjs')
  },
  {
    "id": "common-lisp",
    "name": "Common Lisp",
    "aliases": [
      "lisp"
    ],
    "import": () => import('./common-lisp_D57jJKtX.mjs')
  },
  {
    "id": "coq",
    "name": "Coq",
    "import": () => import('./coq_CckL3QQS.mjs')
  },
  {
    "id": "cpp",
    "name": "C++",
    "aliases": [
      "c++"
    ],
    "import": () => import('./cpp_BIpX4teZ.mjs')
  },
  {
    "id": "crystal",
    "name": "Crystal",
    "import": () => import('./crystal_L8cDAk-z.mjs')
  },
  {
    "id": "csharp",
    "name": "C#",
    "aliases": [
      "c#",
      "cs"
    ],
    "import": () => import('./csharp_BQ2mEkJ-.mjs')
  },
  {
    "id": "css",
    "name": "CSS",
    "import": () => import('./css_CNg45hmX.mjs')
  },
  {
    "id": "csv",
    "name": "CSV",
    "import": () => import('./csv_ocqe5pJ3.mjs')
  },
  {
    "id": "cue",
    "name": "CUE",
    "import": () => import('./cue_Bx8T6Hn1.mjs')
  },
  {
    "id": "cypher",
    "name": "Cypher",
    "aliases": [
      "cql"
    ],
    "import": () => import('./cypher_CF7-wBk5.mjs')
  },
  {
    "id": "d",
    "name": "D",
    "import": () => import('./d_D0u75qWw.mjs')
  },
  {
    "id": "dart",
    "name": "Dart",
    "import": () => import('./dart_BiJRZMh_.mjs')
  },
  {
    "id": "dax",
    "name": "DAX",
    "import": () => import('./dax_COMh9T-B.mjs')
  },
  {
    "id": "desktop",
    "name": "Desktop",
    "import": () => import('./desktop_BrVAufZz.mjs')
  },
  {
    "id": "diff",
    "name": "Diff",
    "import": () => import('./diff__WYqbE3c.mjs')
  },
  {
    "id": "docker",
    "name": "Dockerfile",
    "aliases": [
      "dockerfile"
    ],
    "import": () => import('./docker_dUakMCUK.mjs')
  },
  {
    "id": "dotenv",
    "name": "dotEnv",
    "import": () => import('./dotenv_BKFXWMMB.mjs')
  },
  {
    "id": "dream-maker",
    "name": "Dream Maker",
    "import": () => import('./dream-maker_ojUAJLyu.mjs')
  },
  {
    "id": "edge",
    "name": "Edge",
    "import": () => import('./edge_DfSlHkoq.mjs')
  },
  {
    "id": "elixir",
    "name": "Elixir",
    "import": () => import('./elixir_BSDljfGk.mjs')
  },
  {
    "id": "elm",
    "name": "Elm",
    "import": () => import('./elm_gQ2CJPYK.mjs')
  },
  {
    "id": "emacs-lisp",
    "name": "Emacs Lisp",
    "aliases": [
      "elisp"
    ],
    "import": () => import('./emacs-lisp_cwlbrIMj.mjs')
  },
  {
    "id": "erb",
    "name": "ERB",
    "import": () => import('./erb_DAYtIjwm.mjs')
  },
  {
    "id": "erlang",
    "name": "Erlang",
    "aliases": [
      "erl"
    ],
    "import": () => import('./erlang_ByVPU-2O.mjs')
  },
  {
    "id": "fennel",
    "name": "Fennel",
    "import": () => import('./fennel_D5BlgY81.mjs')
  },
  {
    "id": "fish",
    "name": "Fish",
    "import": () => import('./fish_BsOMZqZr.mjs')
  },
  {
    "id": "fluent",
    "name": "Fluent",
    "aliases": [
      "ftl"
    ],
    "import": () => import('./fluent_uD4_4kNu.mjs')
  },
  {
    "id": "fortran-fixed-form",
    "name": "Fortran (Fixed Form)",
    "aliases": [
      "f",
      "for",
      "f77"
    ],
    "import": () => import('./fortran-fixed-form_CSP9ALHe.mjs')
  },
  {
    "id": "fortran-free-form",
    "name": "Fortran (Free Form)",
    "aliases": [
      "f90",
      "f95",
      "f03",
      "f08",
      "f18"
    ],
    "import": () => import('./fortran-free-form_mDNlAg3g.mjs')
  },
  {
    "id": "fsharp",
    "name": "F#",
    "aliases": [
      "f#",
      "fs"
    ],
    "import": () => import('./fsharp_DtGqnq6D.mjs')
  },
  {
    "id": "gdresource",
    "name": "GDResource",
    "import": () => import('./gdresource_DPeAIs6d.mjs')
  },
  {
    "id": "gdscript",
    "name": "GDScript",
    "import": () => import('./gdscript_CSIf7OzS.mjs')
  },
  {
    "id": "gdshader",
    "name": "GDShader",
    "import": () => import('./gdshader_CHXfiNGJ.mjs')
  },
  {
    "id": "genie",
    "name": "Genie",
    "import": () => import('./genie_DNzisoZw.mjs')
  },
  {
    "id": "gherkin",
    "name": "Gherkin",
    "import": () => import('./gherkin_BdXgx9rX.mjs')
  },
  {
    "id": "git-commit",
    "name": "Git Commit Message",
    "import": () => import('./git-commit_D0LspOH-.mjs')
  },
  {
    "id": "git-rebase",
    "name": "Git Rebase Message",
    "import": () => import('./git-rebase_BaEhElvd.mjs')
  },
  {
    "id": "gleam",
    "name": "Gleam",
    "import": () => import('./gleam_CnABybmE.mjs')
  },
  {
    "id": "glimmer-js",
    "name": "Glimmer JS",
    "aliases": [
      "gjs"
    ],
    "import": () => import('./glimmer-js_CeXolig1.mjs')
  },
  {
    "id": "glimmer-ts",
    "name": "Glimmer TS",
    "aliases": [
      "gts"
    ],
    "import": () => import('./glimmer-ts_Bz8u99iy.mjs')
  },
  {
    "id": "glsl",
    "name": "GLSL",
    "import": () => import('./glsl_DJcwldkS.mjs')
  },
  {
    "id": "gnuplot",
    "name": "Gnuplot",
    "import": () => import('./gnuplot_BFooI9Rq.mjs')
  },
  {
    "id": "go",
    "name": "Go",
    "import": () => import('./go_CkLx2nJd.mjs')
  },
  {
    "id": "graphql",
    "name": "GraphQL",
    "aliases": [
      "gql"
    ],
    "import": () => import('./graphql_CyC0ZFzH.mjs')
  },
  {
    "id": "groovy",
    "name": "Groovy",
    "import": () => import('./groovy_CNSeKPa9.mjs')
  },
  {
    "id": "hack",
    "name": "Hack",
    "import": () => import('./hack_DnWaDSVZ.mjs')
  },
  {
    "id": "haml",
    "name": "Ruby Haml",
    "import": () => import('./haml_CHonueXW.mjs')
  },
  {
    "id": "handlebars",
    "name": "Handlebars",
    "aliases": [
      "hbs"
    ],
    "import": () => import('./handlebars_CGCQET93.mjs')
  },
  {
    "id": "haskell",
    "name": "Haskell",
    "aliases": [
      "hs"
    ],
    "import": () => import('./haskell_BOGaAPL9.mjs')
  },
  {
    "id": "haxe",
    "name": "Haxe",
    "import": () => import('./haxe_CFFOHr_4.mjs')
  },
  {
    "id": "hcl",
    "name": "HashiCorp HCL",
    "import": () => import('./hcl_C3mZziFA.mjs')
  },
  {
    "id": "hjson",
    "name": "Hjson",
    "import": () => import('./hjson_Cmade_WP.mjs')
  },
  {
    "id": "hlsl",
    "name": "HLSL",
    "import": () => import('./hlsl_D0abyZcw.mjs')
  },
  {
    "id": "html",
    "name": "HTML",
    "import": () => import('./html_BDjcUE2c.mjs')
  },
  {
    "id": "html-derivative",
    "name": "HTML (Derivative)",
    "import": () => import('./html-derivative_DfCT-MAg.mjs')
  },
  {
    "id": "http",
    "name": "HTTP",
    "import": () => import('./http_Db5QXAMS.mjs')
  },
  {
    "id": "hxml",
    "name": "HXML",
    "import": () => import('./hxml_C-F8hD0s.mjs')
  },
  {
    "id": "hy",
    "name": "Hy",
    "import": () => import('./hy_AO1j2C-1.mjs')
  },
  {
    "id": "imba",
    "name": "Imba",
    "import": () => import('./imba_Dp7SbbTx.mjs')
  },
  {
    "id": "ini",
    "name": "INI",
    "aliases": [
      "properties"
    ],
    "import": () => import('./ini_CDbyWpp6.mjs')
  },
  {
    "id": "java",
    "name": "Java",
    "import": () => import('./java_CKm8Wqlr.mjs')
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "aliases": [
      "js"
    ],
    "import": () => import('./javascript_uYmK3bS1.mjs')
  },
  {
    "id": "jinja",
    "name": "Jinja",
    "import": () => import('./jinja_CgnHVBAc.mjs')
  },
  {
    "id": "jison",
    "name": "Jison",
    "import": () => import('./jison_DlyTWNoe.mjs')
  },
  {
    "id": "json",
    "name": "JSON",
    "import": () => import('./json_BVmzHNox.mjs')
  },
  {
    "id": "json5",
    "name": "JSON5",
    "import": () => import('./json5_aFn39GVd.mjs')
  },
  {
    "id": "jsonc",
    "name": "JSON with Comments",
    "import": () => import('./jsonc_BET_DUfV.mjs')
  },
  {
    "id": "jsonl",
    "name": "JSON Lines",
    "import": () => import('./jsonl_BjtEOyUH.mjs')
  },
  {
    "id": "jsonnet",
    "name": "Jsonnet",
    "import": () => import('./jsonnet_DveMigxN.mjs')
  },
  {
    "id": "jssm",
    "name": "JSSM",
    "aliases": [
      "fsl"
    ],
    "import": () => import('./jssm_Cso_Befg.mjs')
  },
  {
    "id": "jsx",
    "name": "JSX",
    "import": () => import('./jsx_DjEynwzD.mjs')
  },
  {
    "id": "julia",
    "name": "Julia",
    "aliases": [
      "jl"
    ],
    "import": () => import('./julia_CSgxScDI.mjs')
  },
  {
    "id": "kotlin",
    "name": "Kotlin",
    "aliases": [
      "kt",
      "kts"
    ],
    "import": () => import('./kotlin_DVBjdeil.mjs')
  },
  {
    "id": "kusto",
    "name": "Kusto",
    "aliases": [
      "kql"
    ],
    "import": () => import('./kusto_C6IqsZLN.mjs')
  },
  {
    "id": "latex",
    "name": "LaTeX",
    "import": () => import('./latex_CbMjUNgN.mjs')
  },
  {
    "id": "lean",
    "name": "Lean 4",
    "aliases": [
      "lean4"
    ],
    "import": () => import('./lean_BxDbgFXV.mjs')
  },
  {
    "id": "less",
    "name": "Less",
    "import": () => import('./less_DO-bNGgn.mjs')
  },
  {
    "id": "liquid",
    "name": "Liquid",
    "import": () => import('./liquid_D1sLqTjC.mjs')
  },
  {
    "id": "log",
    "name": "Log file",
    "import": () => import('./log_Bx0Zc--7.mjs')
  },
  {
    "id": "logo",
    "name": "Logo",
    "import": () => import('./logo_DlocGQoC.mjs')
  },
  {
    "id": "lua",
    "name": "Lua",
    "import": () => import('./lua_Ccnxi4Qf.mjs')
  },
  {
    "id": "luau",
    "name": "Luau",
    "import": () => import('./luau_Bg9Mw2LI.mjs')
  },
  {
    "id": "make",
    "name": "Makefile",
    "aliases": [
      "makefile"
    ],
    "import": () => import('./make_DqYIQjCQ.mjs')
  },
  {
    "id": "markdown",
    "name": "Markdown",
    "aliases": [
      "md"
    ],
    "import": () => import('./markdown_BqH2XByk.mjs')
  },
  {
    "id": "marko",
    "name": "Marko",
    "import": () => import('./marko_Cy5mRQVa.mjs')
  },
  {
    "id": "matlab",
    "name": "MATLAB",
    "import": () => import('./matlab_e0EgrfOV.mjs')
  },
  {
    "id": "mdc",
    "name": "MDC",
    "import": () => import('./mdc_blh3tdUn.mjs')
  },
  {
    "id": "mdx",
    "name": "MDX",
    "import": () => import('./mdx_LMu-Dfl2.mjs')
  },
  {
    "id": "mermaid",
    "name": "Mermaid",
    "aliases": [
      "mmd"
    ],
    "import": () => import('./mermaid_CvDmvf2h.mjs')
  },
  {
    "id": "mipsasm",
    "name": "MIPS Assembly",
    "aliases": [
      "mips"
    ],
    "import": () => import('./mipsasm_DpF6VgSQ.mjs')
  },
  {
    "id": "mojo",
    "name": "Mojo",
    "import": () => import('./mojo_CqaW4rhr.mjs')
  },
  {
    "id": "move",
    "name": "Move",
    "import": () => import('./move_BAI9WBj5.mjs')
  },
  {
    "id": "narrat",
    "name": "Narrat Language",
    "aliases": [
      "nar"
    ],
    "import": () => import('./narrat_CGVbpauv.mjs')
  },
  {
    "id": "nextflow",
    "name": "Nextflow",
    "aliases": [
      "nf"
    ],
    "import": () => import('./nextflow_BdvTq0Bv.mjs')
  },
  {
    "id": "nginx",
    "name": "Nginx",
    "import": () => import('./nginx_f67KK-TB.mjs')
  },
  {
    "id": "nim",
    "name": "Nim",
    "import": () => import('./nim_790njtNj.mjs')
  },
  {
    "id": "nix",
    "name": "Nix",
    "import": () => import('./nix_Lgmt-EHJ.mjs')
  },
  {
    "id": "nushell",
    "name": "nushell",
    "aliases": [
      "nu"
    ],
    "import": () => import('./nushell_C5yqxxAw.mjs')
  },
  {
    "id": "objective-c",
    "name": "Objective-C",
    "aliases": [
      "objc"
    ],
    "import": () => import('./objective-c_BnMZDsRq.mjs')
  },
  {
    "id": "objective-cpp",
    "name": "Objective-C++",
    "import": () => import('./objective-cpp_DaCDw6LF.mjs')
  },
  {
    "id": "ocaml",
    "name": "OCaml",
    "import": () => import('./ocaml_XTs5tiDl.mjs')
  },
  {
    "id": "pascal",
    "name": "Pascal",
    "import": () => import('./pascal_CW7jD95p.mjs')
  },
  {
    "id": "perl",
    "name": "Perl",
    "import": () => import('./perl_9FP4DjAG.mjs')
  },
  {
    "id": "php",
    "name": "PHP",
    "import": () => import('./php_Q1qDsEWH.mjs')
  },
  {
    "id": "plsql",
    "name": "PL/SQL",
    "import": () => import('./plsql_BbJIHGF2.mjs')
  },
  {
    "id": "po",
    "name": "Gettext PO",
    "aliases": [
      "pot",
      "potx"
    ],
    "import": () => import('./po_CbIdQaY3.mjs')
  },
  {
    "id": "polar",
    "name": "Polar",
    "import": () => import('./polar_CJMzMswH.mjs')
  },
  {
    "id": "postcss",
    "name": "PostCSS",
    "import": () => import('./postcss_DXd0GumG.mjs')
  },
  {
    "id": "powerquery",
    "name": "PowerQuery",
    "import": () => import('./powerquery_B70aikd9.mjs')
  },
  {
    "id": "powershell",
    "name": "PowerShell",
    "aliases": [
      "ps",
      "ps1"
    ],
    "import": () => import('./powershell_JdMRxUMQ.mjs')
  },
  {
    "id": "prisma",
    "name": "Prisma",
    "import": () => import('./prisma_o8Q3jgsw.mjs')
  },
  {
    "id": "prolog",
    "name": "Prolog",
    "import": () => import('./prolog_DOYryZfk.mjs')
  },
  {
    "id": "proto",
    "name": "Protocol Buffer 3",
    "aliases": [
      "protobuf"
    ],
    "import": () => import('./proto_BottmKsR.mjs')
  },
  {
    "id": "pug",
    "name": "Pug",
    "aliases": [
      "jade"
    ],
    "import": () => import('./pug_CntfHrig.mjs')
  },
  {
    "id": "puppet",
    "name": "Puppet",
    "import": () => import('./puppet_CQHznQms.mjs')
  },
  {
    "id": "purescript",
    "name": "PureScript",
    "import": () => import('./purescript_CqsN30eo.mjs')
  },
  {
    "id": "python",
    "name": "Python",
    "aliases": [
      "py"
    ],
    "import": () => import('./python_BcZf69F1.mjs')
  },
  {
    "id": "qml",
    "name": "QML",
    "import": () => import('./qml_n48thTXS.mjs')
  },
  {
    "id": "qmldir",
    "name": "QML Directory",
    "import": () => import('./qmldir_CWYUQ7py.mjs')
  },
  {
    "id": "qss",
    "name": "Qt Style Sheets",
    "import": () => import('./qss_BCUj-CoC.mjs')
  },
  {
    "id": "r",
    "name": "R",
    "import": () => import('./r_DopYHVR0.mjs')
  },
  {
    "id": "racket",
    "name": "Racket",
    "import": () => import('./racket_DIgVp4gU.mjs')
  },
  {
    "id": "raku",
    "name": "Raku",
    "aliases": [
      "perl6"
    ],
    "import": () => import('./raku_CNeKBWgq.mjs')
  },
  {
    "id": "razor",
    "name": "ASP.NET Razor",
    "import": () => import('./razor_Be_ulhiJ.mjs')
  },
  {
    "id": "reg",
    "name": "Windows Registry Script",
    "import": () => import('./reg_Dq1Ah6d7.mjs')
  },
  {
    "id": "regexp",
    "name": "RegExp",
    "aliases": [
      "regex"
    ],
    "import": () => import('./regexp_DR-JRZqq.mjs')
  },
  {
    "id": "rel",
    "name": "Rel",
    "import": () => import('./rel_kb_0kVBw.mjs')
  },
  {
    "id": "riscv",
    "name": "RISC-V",
    "import": () => import('./riscv_CVobU66o.mjs')
  },
  {
    "id": "rst",
    "name": "reStructuredText",
    "import": () => import('./rst_BXbJR7Cw.mjs')
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "aliases": [
      "rb"
    ],
    "import": () => import('./ruby_a7xjKr6d.mjs')
  },
  {
    "id": "rust",
    "name": "Rust",
    "aliases": [
      "rs"
    ],
    "import": () => import('./rust_VOWNFPlP.mjs')
  },
  {
    "id": "sas",
    "name": "SAS",
    "import": () => import('./sas_DV9aYBuo.mjs')
  },
  {
    "id": "sass",
    "name": "Sass",
    "import": () => import('./sass_fpxqUz94.mjs')
  },
  {
    "id": "scala",
    "name": "Scala",
    "import": () => import('./scala_5gcYzMKy.mjs')
  },
  {
    "id": "scheme",
    "name": "Scheme",
    "import": () => import('./scheme_Dhv1o2Ji.mjs')
  },
  {
    "id": "scss",
    "name": "SCSS",
    "import": () => import('./scss_D9gDc95U.mjs')
  },
  {
    "id": "sdbl",
    "name": "1C (Query)",
    "aliases": [
      "1c-query"
    ],
    "import": () => import('./sdbl_D5O-R2Wa.mjs')
  },
  {
    "id": "shaderlab",
    "name": "ShaderLab",
    "aliases": [
      "shader"
    ],
    "import": () => import('./shaderlab_rUPJe2KW.mjs')
  },
  {
    "id": "shellscript",
    "name": "Shell",
    "aliases": [
      "bash",
      "sh",
      "shell",
      "zsh"
    ],
    "import": () => import('./shellscript_DDJyu-Y9.mjs')
  },
  {
    "id": "shellsession",
    "name": "Shell Session",
    "aliases": [
      "console"
    ],
    "import": () => import('./shellsession_B70dJrcv.mjs')
  },
  {
    "id": "smalltalk",
    "name": "Smalltalk",
    "import": () => import('./smalltalk_CseizsND.mjs')
  },
  {
    "id": "solidity",
    "name": "Solidity",
    "import": () => import('./solidity_Ble8mZ5f.mjs')
  },
  {
    "id": "soy",
    "name": "Closure Templates",
    "aliases": [
      "closure-templates"
    ],
    "import": () => import('./soy_BEdq7W27.mjs')
  },
  {
    "id": "sparql",
    "name": "SPARQL",
    "import": () => import('./sparql_DYUhn46q.mjs')
  },
  {
    "id": "splunk",
    "name": "Splunk Query Language",
    "aliases": [
      "spl"
    ],
    "import": () => import('./splunk_CcCWSioV.mjs')
  },
  {
    "id": "sql",
    "name": "SQL",
    "import": () => import('./sql_BX00riQ_.mjs')
  },
  {
    "id": "ssh-config",
    "name": "SSH Config",
    "import": () => import('./ssh-config_7O8Bgqoc.mjs')
  },
  {
    "id": "stata",
    "name": "Stata",
    "import": () => import('./stata_DlOWurV1.mjs')
  },
  {
    "id": "stylus",
    "name": "Stylus",
    "aliases": [
      "styl"
    ],
    "import": () => import('./stylus_CJDm8QeA.mjs')
  },
  {
    "id": "svelte",
    "name": "Svelte",
    "import": () => import('./svelte_ChpZq06M.mjs')
  },
  {
    "id": "swift",
    "name": "Swift",
    "import": () => import('./swift_CSPcx-SV.mjs')
  },
  {
    "id": "system-verilog",
    "name": "SystemVerilog",
    "import": () => import('./system-verilog_DQnq4zYW.mjs')
  },
  {
    "id": "systemd",
    "name": "Systemd Units",
    "import": () => import('./systemd_-5tpT4qd.mjs')
  },
  {
    "id": "talonscript",
    "name": "TalonScript",
    "aliases": [
      "talon"
    ],
    "import": () => import('./talonscript_BrIRcba0.mjs')
  },
  {
    "id": "tasl",
    "name": "Tasl",
    "import": () => import('./tasl_CNRrA4FU.mjs')
  },
  {
    "id": "tcl",
    "name": "Tcl",
    "import": () => import('./tcl_ZSUg5-Us.mjs')
  },
  {
    "id": "templ",
    "name": "Templ",
    "import": () => import('./templ_CF25NkYO.mjs')
  },
  {
    "id": "terraform",
    "name": "Terraform",
    "aliases": [
      "tf",
      "tfvars"
    ],
    "import": () => import('./terraform_CM3ldd78.mjs')
  },
  {
    "id": "tex",
    "name": "TeX",
    "import": () => import('./tex_BBNn-Tl7.mjs')
  },
  {
    "id": "toml",
    "name": "TOML",
    "import": () => import('./toml_DG8jy2Mf.mjs')
  },
  {
    "id": "ts-tags",
    "name": "TypeScript with Tags",
    "aliases": [
      "lit"
    ],
    "import": () => import('./ts-tags_C3M0AwQy.mjs')
  },
  {
    "id": "tsv",
    "name": "TSV",
    "import": () => import('./tsv_bce-g5Jr.mjs')
  },
  {
    "id": "tsx",
    "name": "TSX",
    "import": () => import('./tsx_CLcxzRhE.mjs')
  },
  {
    "id": "turtle",
    "name": "Turtle",
    "import": () => import('./turtle_CFk-gVtf.mjs')
  },
  {
    "id": "twig",
    "name": "Twig",
    "import": () => import('./twig_C0utXSKr.mjs')
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "aliases": [
      "ts"
    ],
    "import": () => import('./typescript_BzVZ9BGx.mjs')
  },
  {
    "id": "typespec",
    "name": "TypeSpec",
    "aliases": [
      "tsp"
    ],
    "import": () => import('./typespec_YtOEReZY.mjs')
  },
  {
    "id": "typst",
    "name": "Typst",
    "aliases": [
      "typ"
    ],
    "import": () => import('./typst_Boys5MzS.mjs')
  },
  {
    "id": "v",
    "name": "V",
    "import": () => import('./v_7mPb5hcA.mjs')
  },
  {
    "id": "vala",
    "name": "Vala",
    "import": () => import('./vala_C0uBKFrl.mjs')
  },
  {
    "id": "vb",
    "name": "Visual Basic",
    "aliases": [
      "cmd"
    ],
    "import": () => import('./vb_DF_BAIGv.mjs')
  },
  {
    "id": "verilog",
    "name": "Verilog",
    "import": () => import('./verilog_DIbXYuPq.mjs')
  },
  {
    "id": "vhdl",
    "name": "VHDL",
    "import": () => import('./vhdl_NsZKjrQN.mjs')
  },
  {
    "id": "viml",
    "name": "Vim Script",
    "aliases": [
      "vim",
      "vimscript"
    ],
    "import": () => import('./viml_CQ6_uTZr.mjs')
  },
  {
    "id": "vue",
    "name": "Vue",
    "import": () => import('./vue_9ND4DV9S.mjs')
  },
  {
    "id": "vue-html",
    "name": "Vue HTML",
    "import": () => import('./vue-html_D1mOH1xN.mjs')
  },
  {
    "id": "vyper",
    "name": "Vyper",
    "aliases": [
      "vy"
    ],
    "import": () => import('./vyper_Cy4jLlAf.mjs')
  },
  {
    "id": "wasm",
    "name": "WebAssembly",
    "import": () => import('./wasm_C-J3jyuQ.mjs')
  },
  {
    "id": "wenyan",
    "name": "Wenyan",
    "aliases": [
      "\u6587\u8A00"
    ],
    "import": () => import('./wenyan_ByVRCZpW.mjs')
  },
  {
    "id": "wgsl",
    "name": "WGSL",
    "import": () => import('./wgsl_Cv20ELhK.mjs')
  },
  {
    "id": "wikitext",
    "name": "Wikitext",
    "aliases": [
      "mediawiki",
      "wiki"
    ],
    "import": () => import('./wikitext_C-7xnDcm.mjs')
  },
  {
    "id": "wolfram",
    "name": "Wolfram",
    "aliases": [
      "wl"
    ],
    "import": () => import('./wolfram_BWRFWRhE.mjs')
  },
  {
    "id": "xml",
    "name": "XML",
    "import": () => import('./xml_889d2eFY.mjs')
  },
  {
    "id": "xsl",
    "name": "XSL",
    "import": () => import('./xsl_B5E-ysSn.mjs')
  },
  {
    "id": "yaml",
    "name": "YAML",
    "aliases": [
      "yml"
    ],
    "import": () => import('./yaml_BcKTo5Kh.mjs')
  },
  {
    "id": "zenscript",
    "name": "ZenScript",
    "import": () => import('./zenscript_BOUDSazZ.mjs')
  },
  {
    "id": "zig",
    "name": "Zig",
    "import": () => import('./zig_DRWMfpOd.mjs')
  }
];
const bundledLanguagesBase = Object.fromEntries(bundledLanguagesInfo.map((i) => [i.id, i.import]));
const bundledLanguagesAlias = Object.fromEntries(bundledLanguagesInfo.flatMap((i) => i.aliases?.map((a) => [a, i.import]) || []));
const bundledLanguages = {
  ...bundledLanguagesBase,
  ...bundledLanguagesAlias
};

const bundledThemesInfo = [
];
const bundledThemes = Object.fromEntries(bundledThemesInfo.map((i) => [i.id, i.import]));

let ShikiError$2 = class ShikiError extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
};

let ShikiError$1 = class ShikiError extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
};

function getHeapMax() {
  return 2147483648;
}
function _emscripten_get_now() {
  return typeof performance !== "undefined" ? performance.now() : Date.now();
}
const alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
async function main(init) {
  let wasmMemory;
  let buffer;
  const binding = {};
  function updateGlobalBufferAndViews(buf) {
    buffer = buf;
    binding.HEAPU8 = new Uint8Array(buf);
    binding.HEAPU32 = new Uint32Array(buf);
  }
  function _emscripten_memcpy_big(dest, src, num) {
    binding.HEAPU8.copyWithin(dest, src, src + num);
  }
  function emscripten_realloc_buffer(size) {
    try {
      wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
      updateGlobalBufferAndViews(wasmMemory.buffer);
      return 1;
    } catch {
    }
  }
  function _emscripten_resize_heap(requestedSize) {
    const oldSize = binding.HEAPU8.length;
    requestedSize = requestedSize >>> 0;
    const maxHeapSize = getHeapMax();
    if (requestedSize > maxHeapSize)
      return false;
    for (let cutDown = 1; cutDown <= 4; cutDown *= 2) {
      let overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
      overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
      const newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
      const replacement = emscripten_realloc_buffer(newSize);
      if (replacement)
        return true;
    }
    return false;
  }
  const UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
  function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead = 1024) {
    const endIdx = idx + maxBytesToRead;
    let endPtr = idx;
    while (heapOrArray[endPtr] && !(endPtr >= endIdx))
      ++endPtr;
    if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
      return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
    }
    let str = "";
    while (idx < endPtr) {
      let u0 = heapOrArray[idx++];
      if (!(u0 & 128)) {
        str += String.fromCharCode(u0);
        continue;
      }
      const u1 = heapOrArray[idx++] & 63;
      if ((u0 & 224) === 192) {
        str += String.fromCharCode((u0 & 31) << 6 | u1);
        continue;
      }
      const u2 = heapOrArray[idx++] & 63;
      if ((u0 & 240) === 224) {
        u0 = (u0 & 15) << 12 | u1 << 6 | u2;
      } else {
        u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
      }
      if (u0 < 65536) {
        str += String.fromCharCode(u0);
      } else {
        const ch = u0 - 65536;
        str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
      }
    }
    return str;
  }
  function UTF8ToString(ptr, maxBytesToRead) {
    return ptr ? UTF8ArrayToString(binding.HEAPU8, ptr, maxBytesToRead) : "";
  }
  const asmLibraryArg = {
    emscripten_get_now: _emscripten_get_now,
    emscripten_memcpy_big: _emscripten_memcpy_big,
    emscripten_resize_heap: _emscripten_resize_heap,
    fd_write: () => 0
  };
  async function createWasm() {
    const info = {
      env: asmLibraryArg,
      wasi_snapshot_preview1: asmLibraryArg
    };
    const exports = await init(info);
    wasmMemory = exports.memory;
    updateGlobalBufferAndViews(wasmMemory.buffer);
    Object.assign(binding, exports);
    binding.UTF8ToString = UTF8ToString;
  }
  await createWasm();
  return binding;
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
let onigBinding = null;
function throwLastOnigError(onigBinding2) {
  throw new ShikiError$1(onigBinding2.UTF8ToString(onigBinding2.getLastOnigError()));
}
class UtfString {
  constructor(str) {
    __publicField(this, "utf16Length");
    __publicField(this, "utf8Length");
    __publicField(this, "utf16Value");
    __publicField(this, "utf8Value");
    __publicField(this, "utf16OffsetToUtf8");
    __publicField(this, "utf8OffsetToUtf16");
    const utf16Length = str.length;
    const utf8Length = UtfString._utf8ByteLength(str);
    const computeIndicesMapping = utf8Length !== utf16Length;
    const utf16OffsetToUtf8 = computeIndicesMapping ? new Uint32Array(utf16Length + 1) : null;
    if (computeIndicesMapping)
      utf16OffsetToUtf8[utf16Length] = utf8Length;
    const utf8OffsetToUtf16 = computeIndicesMapping ? new Uint32Array(utf8Length + 1) : null;
    if (computeIndicesMapping)
      utf8OffsetToUtf16[utf8Length] = utf16Length;
    const utf8Value = new Uint8Array(utf8Length);
    let i8 = 0;
    for (let i16 = 0; i16 < utf16Length; i16++) {
      const charCode = str.charCodeAt(i16);
      let codePoint = charCode;
      let wasSurrogatePair = false;
      if (charCode >= 55296 && charCode <= 56319) {
        if (i16 + 1 < utf16Length) {
          const nextCharCode = str.charCodeAt(i16 + 1);
          if (nextCharCode >= 56320 && nextCharCode <= 57343) {
            codePoint = (charCode - 55296 << 10) + 65536 | nextCharCode - 56320;
            wasSurrogatePair = true;
          }
        }
      }
      if (computeIndicesMapping) {
        utf16OffsetToUtf8[i16] = i8;
        if (wasSurrogatePair)
          utf16OffsetToUtf8[i16 + 1] = i8;
        if (codePoint <= 127) {
          utf8OffsetToUtf16[i8 + 0] = i16;
        } else if (codePoint <= 2047) {
          utf8OffsetToUtf16[i8 + 0] = i16;
          utf8OffsetToUtf16[i8 + 1] = i16;
        } else if (codePoint <= 65535) {
          utf8OffsetToUtf16[i8 + 0] = i16;
          utf8OffsetToUtf16[i8 + 1] = i16;
          utf8OffsetToUtf16[i8 + 2] = i16;
        } else {
          utf8OffsetToUtf16[i8 + 0] = i16;
          utf8OffsetToUtf16[i8 + 1] = i16;
          utf8OffsetToUtf16[i8 + 2] = i16;
          utf8OffsetToUtf16[i8 + 3] = i16;
        }
      }
      if (codePoint <= 127) {
        utf8Value[i8++] = codePoint;
      } else if (codePoint <= 2047) {
        utf8Value[i8++] = 192 | (codePoint & 1984) >>> 6;
        utf8Value[i8++] = 128 | (codePoint & 63) >>> 0;
      } else if (codePoint <= 65535) {
        utf8Value[i8++] = 224 | (codePoint & 61440) >>> 12;
        utf8Value[i8++] = 128 | (codePoint & 4032) >>> 6;
        utf8Value[i8++] = 128 | (codePoint & 63) >>> 0;
      } else {
        utf8Value[i8++] = 240 | (codePoint & 1835008) >>> 18;
        utf8Value[i8++] = 128 | (codePoint & 258048) >>> 12;
        utf8Value[i8++] = 128 | (codePoint & 4032) >>> 6;
        utf8Value[i8++] = 128 | (codePoint & 63) >>> 0;
      }
      if (wasSurrogatePair)
        i16++;
    }
    this.utf16Length = utf16Length;
    this.utf8Length = utf8Length;
    this.utf16Value = str;
    this.utf8Value = utf8Value;
    this.utf16OffsetToUtf8 = utf16OffsetToUtf8;
    this.utf8OffsetToUtf16 = utf8OffsetToUtf16;
  }
  static _utf8ByteLength(str) {
    let result = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      const charCode = str.charCodeAt(i);
      let codepoint = charCode;
      let wasSurrogatePair = false;
      if (charCode >= 55296 && charCode <= 56319) {
        if (i + 1 < len) {
          const nextCharCode = str.charCodeAt(i + 1);
          if (nextCharCode >= 56320 && nextCharCode <= 57343) {
            codepoint = (charCode - 55296 << 10) + 65536 | nextCharCode - 56320;
            wasSurrogatePair = true;
          }
        }
      }
      if (codepoint <= 127)
        result += 1;
      else if (codepoint <= 2047)
        result += 2;
      else if (codepoint <= 65535)
        result += 3;
      else
        result += 4;
      if (wasSurrogatePair)
        i++;
    }
    return result;
  }
  createString(onigBinding2) {
    const result = onigBinding2.omalloc(this.utf8Length);
    onigBinding2.HEAPU8.set(this.utf8Value, result);
    return result;
  }
}
const _OnigString = class {
  constructor(str) {
    __publicField(this, "id", ++_OnigString.LAST_ID);
    __publicField(this, "_onigBinding");
    __publicField(this, "content");
    __publicField(this, "utf16Length");
    __publicField(this, "utf8Length");
    __publicField(this, "utf16OffsetToUtf8");
    __publicField(this, "utf8OffsetToUtf16");
    __publicField(this, "ptr");
    if (!onigBinding)
      throw new ShikiError$1("Must invoke loadWasm first.");
    this._onigBinding = onigBinding;
    this.content = str;
    const utfString = new UtfString(str);
    this.utf16Length = utfString.utf16Length;
    this.utf8Length = utfString.utf8Length;
    this.utf16OffsetToUtf8 = utfString.utf16OffsetToUtf8;
    this.utf8OffsetToUtf16 = utfString.utf8OffsetToUtf16;
    if (this.utf8Length < 1e4 && !_OnigString._sharedPtrInUse) {
      if (!_OnigString._sharedPtr)
        _OnigString._sharedPtr = onigBinding.omalloc(1e4);
      _OnigString._sharedPtrInUse = true;
      onigBinding.HEAPU8.set(utfString.utf8Value, _OnigString._sharedPtr);
      this.ptr = _OnigString._sharedPtr;
    } else {
      this.ptr = utfString.createString(onigBinding);
    }
  }
  convertUtf8OffsetToUtf16(utf8Offset) {
    if (this.utf8OffsetToUtf16) {
      if (utf8Offset < 0)
        return 0;
      if (utf8Offset > this.utf8Length)
        return this.utf16Length;
      return this.utf8OffsetToUtf16[utf8Offset];
    }
    return utf8Offset;
  }
  convertUtf16OffsetToUtf8(utf16Offset) {
    if (this.utf16OffsetToUtf8) {
      if (utf16Offset < 0)
        return 0;
      if (utf16Offset > this.utf16Length)
        return this.utf8Length;
      return this.utf16OffsetToUtf8[utf16Offset];
    }
    return utf16Offset;
  }
  dispose() {
    if (this.ptr === _OnigString._sharedPtr)
      _OnigString._sharedPtrInUse = false;
    else
      this._onigBinding.ofree(this.ptr);
  }
};
let OnigString = _OnigString;
__publicField(OnigString, "LAST_ID", 0);
__publicField(OnigString, "_sharedPtr", 0);
// a pointer to a string of 10000 bytes
__publicField(OnigString, "_sharedPtrInUse", false);
class OnigScanner {
  constructor(patterns) {
    __publicField(this, "_onigBinding");
    __publicField(this, "_ptr");
    if (!onigBinding)
      throw new ShikiError$1("Must invoke loadWasm first.");
    const strPtrsArr = [];
    const strLenArr = [];
    for (let i = 0, len = patterns.length; i < len; i++) {
      const utfString = new UtfString(patterns[i]);
      strPtrsArr[i] = utfString.createString(onigBinding);
      strLenArr[i] = utfString.utf8Length;
    }
    const strPtrsPtr = onigBinding.omalloc(4 * patterns.length);
    onigBinding.HEAPU32.set(strPtrsArr, strPtrsPtr / 4);
    const strLenPtr = onigBinding.omalloc(4 * patterns.length);
    onigBinding.HEAPU32.set(strLenArr, strLenPtr / 4);
    const scannerPtr = onigBinding.createOnigScanner(strPtrsPtr, strLenPtr, patterns.length);
    for (let i = 0, len = patterns.length; i < len; i++)
      onigBinding.ofree(strPtrsArr[i]);
    onigBinding.ofree(strLenPtr);
    onigBinding.ofree(strPtrsPtr);
    if (scannerPtr === 0)
      throwLastOnigError(onigBinding);
    this._onigBinding = onigBinding;
    this._ptr = scannerPtr;
  }
  dispose() {
    this._onigBinding.freeOnigScanner(this._ptr);
  }
  findNextMatchSync(string, startPosition, arg) {
    let options = 0 /* None */;
    if (typeof arg === "number") {
      options = arg;
    }
    if (typeof string === "string") {
      string = new OnigString(string);
      const result = this._findNextMatchSync(string, startPosition, false, options);
      string.dispose();
      return result;
    }
    return this._findNextMatchSync(string, startPosition, false, options);
  }
  _findNextMatchSync(string, startPosition, debugCall, options) {
    const onigBinding2 = this._onigBinding;
    const resultPtr = onigBinding2.findNextOnigScannerMatch(this._ptr, string.id, string.ptr, string.utf8Length, string.convertUtf16OffsetToUtf8(startPosition), options);
    if (resultPtr === 0) {
      return null;
    }
    const HEAPU32 = onigBinding2.HEAPU32;
    let offset = resultPtr / 4;
    const index = HEAPU32[offset++];
    const count = HEAPU32[offset++];
    const captureIndices = [];
    for (let i = 0; i < count; i++) {
      const beg = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]);
      const end = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]);
      captureIndices[i] = {
        start: beg,
        end,
        length: end - beg
      };
    }
    return {
      index,
      captureIndices
    };
  }
}
function isInstantiatorOptionsObject(dataOrOptions) {
  return typeof dataOrOptions.instantiator === "function";
}
function isInstantiatorModule(dataOrOptions) {
  return typeof dataOrOptions.default === "function";
}
function isDataOptionsObject(dataOrOptions) {
  return typeof dataOrOptions.data !== "undefined";
}
function isResponse(dataOrOptions) {
  return typeof Response !== "undefined" && dataOrOptions instanceof Response;
}
function isArrayBuffer(data) {
  return typeof ArrayBuffer !== "undefined" && (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) || typeof Buffer !== "undefined" && Buffer.isBuffer?.(data) || typeof SharedArrayBuffer !== "undefined" && data instanceof SharedArrayBuffer || typeof Uint32Array !== "undefined" && data instanceof Uint32Array;
}
let initPromise;
function loadWasm(options) {
  if (initPromise)
    return initPromise;
  async function _load() {
    onigBinding = await main(async (info) => {
      let instance = options;
      instance = await instance;
      if (typeof instance === "function")
        instance = await instance(info);
      if (typeof instance === "function")
        instance = await instance(info);
      if (isInstantiatorOptionsObject(instance)) {
        instance = await instance.instantiator(info);
      } else if (isInstantiatorModule(instance)) {
        instance = await instance.default(info);
      } else {
        if (isDataOptionsObject(instance))
          instance = instance.data;
        if (isResponse(instance)) {
          if (typeof WebAssembly.instantiateStreaming === "function")
            instance = await _makeResponseStreamingLoader(instance)(info);
          else
            instance = await _makeResponseNonStreamingLoader(instance)(info);
        } else if (isArrayBuffer(instance)) {
          instance = await _makeArrayBufferLoader(instance)(info);
        } else if (instance instanceof WebAssembly.Module) {
          instance = await _makeArrayBufferLoader(instance)(info);
        } else if ("default" in instance && instance.default instanceof WebAssembly.Module) {
          instance = await _makeArrayBufferLoader(instance.default)(info);
        }
      }
      if ("instance" in instance)
        instance = instance.instance;
      if ("exports" in instance)
        instance = instance.exports;
      return instance;
    });
  }
  initPromise = _load();
  return initPromise;
}
function _makeArrayBufferLoader(data) {
  return (importObject) => WebAssembly.instantiate(data, importObject);
}
function _makeResponseStreamingLoader(data) {
  return (importObject) => WebAssembly.instantiateStreaming(data, importObject);
}
function _makeResponseNonStreamingLoader(data) {
  return async (importObject) => {
    const arrayBuffer = await data.arrayBuffer();
    return WebAssembly.instantiate(arrayBuffer, importObject);
  };
}

let _defaultWasmLoader;
function getDefaultWasmLoader() {
  return _defaultWasmLoader;
}
async function createOnigurumaEngine(options) {
  if (options)
    await loadWasm(options);
  return {
    createScanner(patterns) {
      return new OnigScanner(patterns.map((p) => typeof p === "string" ? p : p.source));
    },
    createString(s) {
      return new OnigString(s);
    }
  };
}

// src/utils.ts
function clone(something) {
  return doClone(something);
}
function doClone(something) {
  if (Array.isArray(something)) {
    return cloneArray(something);
  }
  if (something instanceof RegExp) {
    return something;
  }
  if (typeof something === "object") {
    return cloneObj(something);
  }
  return something;
}
function cloneArray(arr) {
  let r = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    r[i] = doClone(arr[i]);
  }
  return r;
}
function cloneObj(obj) {
  let r = {};
  for (let key in obj) {
    r[key] = doClone(obj[key]);
  }
  return r;
}
function mergeObjects(target, ...sources) {
  sources.forEach((source) => {
    for (let key in source) {
      target[key] = source[key];
    }
  });
  return target;
}
function basename(path) {
  const idx = ~path.lastIndexOf("/") || ~path.lastIndexOf("\\");
  if (idx === 0) {
    return path;
  } else if (~idx === path.length - 1) {
    return basename(path.substring(0, path.length - 1));
  } else {
    return path.substr(~idx + 1);
  }
}
var CAPTURING_REGEX_SOURCE = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;
var RegexSource = class {
  static hasCaptures(regexSource) {
    if (regexSource === null) {
      return false;
    }
    CAPTURING_REGEX_SOURCE.lastIndex = 0;
    return CAPTURING_REGEX_SOURCE.test(regexSource);
  }
  static replaceCaptures(regexSource, captureSource, captureIndices) {
    return regexSource.replace(CAPTURING_REGEX_SOURCE, (match, index, commandIndex, command) => {
      let capture = captureIndices[parseInt(index || commandIndex, 10)];
      if (capture) {
        let result = captureSource.substring(capture.start, capture.end);
        while (result[0] === ".") {
          result = result.substring(1);
        }
        switch (command) {
          case "downcase":
            return result.toLowerCase();
          case "upcase":
            return result.toUpperCase();
          default:
            return result;
        }
      } else {
        return match;
      }
    });
  }
};
function strcmp(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
function strArrCmp(a, b) {
  if (a === null && b === null) {
    return 0;
  }
  if (!a) {
    return -1;
  }
  if (!b) {
    return 1;
  }
  let len1 = a.length;
  let len2 = b.length;
  if (len1 === len2) {
    for (let i = 0; i < len1; i++) {
      let res = strcmp(a[i], b[i]);
      if (res !== 0) {
        return res;
      }
    }
    return 0;
  }
  return len1 - len2;
}
function isValidHexColor(hex) {
  if (/^#[0-9a-f]{6}$/i.test(hex)) {
    return true;
  }
  if (/^#[0-9a-f]{8}$/i.test(hex)) {
    return true;
  }
  if (/^#[0-9a-f]{3}$/i.test(hex)) {
    return true;
  }
  if (/^#[0-9a-f]{4}$/i.test(hex)) {
    return true;
  }
  return false;
}
function escapeRegExpCharacters(value) {
  return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
var CachedFn = class {
  constructor(fn) {
    this.fn = fn;
  }
  cache = /* @__PURE__ */ new Map();
  get(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    const value = this.fn(key);
    this.cache.set(key, value);
    return value;
  }
};

// src/theme.ts
var Theme = class {
  constructor(_colorMap, _defaults, _root) {
    this._colorMap = _colorMap;
    this._defaults = _defaults;
    this._root = _root;
  }
  static createFromRawTheme(source, colorMap) {
    return this.createFromParsedTheme(parseTheme(source), colorMap);
  }
  static createFromParsedTheme(source, colorMap) {
    return resolveParsedThemeRules(source, colorMap);
  }
  _cachedMatchRoot = new CachedFn(
    (scopeName) => this._root.match(scopeName)
  );
  getColorMap() {
    return this._colorMap.getColorMap();
  }
  getDefaults() {
    return this._defaults;
  }
  match(scopePath) {
    if (scopePath === null) {
      return this._defaults;
    }
    const scopeName = scopePath.scopeName;
    const matchingTrieElements = this._cachedMatchRoot.get(scopeName);
    const effectiveRule = matchingTrieElements.find(
      (v) => _scopePathMatchesParentScopes(scopePath.parent, v.parentScopes)
    );
    if (!effectiveRule) {
      return null;
    }
    return new StyleAttributes(
      effectiveRule.fontStyle,
      effectiveRule.foreground,
      effectiveRule.background
    );
  }
};
var ScopeStack = class _ScopeStack {
  constructor(parent, scopeName) {
    this.parent = parent;
    this.scopeName = scopeName;
  }
  static push(path, scopeNames) {
    for (const name of scopeNames) {
      path = new _ScopeStack(path, name);
    }
    return path;
  }
  static from(...segments) {
    let result = null;
    for (let i = 0; i < segments.length; i++) {
      result = new _ScopeStack(result, segments[i]);
    }
    return result;
  }
  push(scopeName) {
    return new _ScopeStack(this, scopeName);
  }
  getSegments() {
    let item = this;
    const result = [];
    while (item) {
      result.push(item.scopeName);
      item = item.parent;
    }
    result.reverse();
    return result;
  }
  toString() {
    return this.getSegments().join(" ");
  }
  extends(other) {
    if (this === other) {
      return true;
    }
    if (this.parent === null) {
      return false;
    }
    return this.parent.extends(other);
  }
  getExtensionIfDefined(base) {
    const result = [];
    let item = this;
    while (item && item !== base) {
      result.push(item.scopeName);
      item = item.parent;
    }
    return item === base ? result.reverse() : undefined;
  }
};
function _scopePathMatchesParentScopes(scopePath, parentScopes) {
  if (parentScopes.length === 0) {
    return true;
  }
  for (let index = 0; index < parentScopes.length; index++) {
    let scopePattern = parentScopes[index];
    let scopeMustMatch = false;
    if (scopePattern === ">") {
      if (index === parentScopes.length - 1) {
        return false;
      }
      scopePattern = parentScopes[++index];
      scopeMustMatch = true;
    }
    while (scopePath) {
      if (_matchesScope(scopePath.scopeName, scopePattern)) {
        break;
      }
      if (scopeMustMatch) {
        return false;
      }
      scopePath = scopePath.parent;
    }
    if (!scopePath) {
      return false;
    }
    scopePath = scopePath.parent;
  }
  return true;
}
function _matchesScope(scopeName, scopePattern) {
  return scopePattern === scopeName || scopeName.startsWith(scopePattern) && scopeName[scopePattern.length] === ".";
}
var StyleAttributes = class {
  constructor(fontStyle, foregroundId, backgroundId) {
    this.fontStyle = fontStyle;
    this.foregroundId = foregroundId;
    this.backgroundId = backgroundId;
  }
};
function parseTheme(source) {
  if (!source) {
    return [];
  }
  if (!source.settings || !Array.isArray(source.settings)) {
    return [];
  }
  let settings = source.settings;
  let result = [], resultLen = 0;
  for (let i = 0, len = settings.length; i < len; i++) {
    let entry = settings[i];
    if (!entry.settings) {
      continue;
    }
    let scopes;
    if (typeof entry.scope === "string") {
      let _scope = entry.scope;
      _scope = _scope.replace(/^[,]+/, "");
      _scope = _scope.replace(/[,]+$/, "");
      scopes = _scope.split(",");
    } else if (Array.isArray(entry.scope)) {
      scopes = entry.scope;
    } else {
      scopes = [""];
    }
    let fontStyle = -1 /* NotSet */;
    if (typeof entry.settings.fontStyle === "string") {
      fontStyle = 0 /* None */;
      let segments = entry.settings.fontStyle.split(" ");
      for (let j = 0, lenJ = segments.length; j < lenJ; j++) {
        let segment = segments[j];
        switch (segment) {
          case "italic":
            fontStyle = fontStyle | 1 /* Italic */;
            break;
          case "bold":
            fontStyle = fontStyle | 2 /* Bold */;
            break;
          case "underline":
            fontStyle = fontStyle | 4 /* Underline */;
            break;
          case "strikethrough":
            fontStyle = fontStyle | 8 /* Strikethrough */;
            break;
        }
      }
    }
    let foreground = null;
    if (typeof entry.settings.foreground === "string" && isValidHexColor(entry.settings.foreground)) {
      foreground = entry.settings.foreground;
    }
    let background = null;
    if (typeof entry.settings.background === "string" && isValidHexColor(entry.settings.background)) {
      background = entry.settings.background;
    }
    for (let j = 0, lenJ = scopes.length; j < lenJ; j++) {
      let _scope = scopes[j].trim();
      let segments = _scope.split(" ");
      let scope = segments[segments.length - 1];
      let parentScopes = null;
      if (segments.length > 1) {
        parentScopes = segments.slice(0, segments.length - 1);
        parentScopes.reverse();
      }
      result[resultLen++] = new ParsedThemeRule(
        scope,
        parentScopes,
        i,
        fontStyle,
        foreground,
        background
      );
    }
  }
  return result;
}
var ParsedThemeRule = class {
  constructor(scope, parentScopes, index, fontStyle, foreground, background) {
    this.scope = scope;
    this.parentScopes = parentScopes;
    this.index = index;
    this.fontStyle = fontStyle;
    this.foreground = foreground;
    this.background = background;
  }
};
var FontStyle = /* @__PURE__ */ ((FontStyle2) => {
  FontStyle2[FontStyle2["NotSet"] = -1] = "NotSet";
  FontStyle2[FontStyle2["None"] = 0] = "None";
  FontStyle2[FontStyle2["Italic"] = 1] = "Italic";
  FontStyle2[FontStyle2["Bold"] = 2] = "Bold";
  FontStyle2[FontStyle2["Underline"] = 4] = "Underline";
  FontStyle2[FontStyle2["Strikethrough"] = 8] = "Strikethrough";
  return FontStyle2;
})(FontStyle || {});
function resolveParsedThemeRules(parsedThemeRules, _colorMap) {
  parsedThemeRules.sort((a, b) => {
    let r = strcmp(a.scope, b.scope);
    if (r !== 0) {
      return r;
    }
    r = strArrCmp(a.parentScopes, b.parentScopes);
    if (r !== 0) {
      return r;
    }
    return a.index - b.index;
  });
  let defaultFontStyle = 0 /* None */;
  let defaultForeground = "#000000";
  let defaultBackground = "#ffffff";
  while (parsedThemeRules.length >= 1 && parsedThemeRules[0].scope === "") {
    let incomingDefaults = parsedThemeRules.shift();
    if (incomingDefaults.fontStyle !== -1 /* NotSet */) {
      defaultFontStyle = incomingDefaults.fontStyle;
    }
    if (incomingDefaults.foreground !== null) {
      defaultForeground = incomingDefaults.foreground;
    }
    if (incomingDefaults.background !== null) {
      defaultBackground = incomingDefaults.background;
    }
  }
  let colorMap = new ColorMap(_colorMap);
  let defaults = new StyleAttributes(defaultFontStyle, colorMap.getId(defaultForeground), colorMap.getId(defaultBackground));
  let root = new ThemeTrieElement(new ThemeTrieElementRule(0, null, -1 /* NotSet */, 0, 0), []);
  for (let i = 0, len = parsedThemeRules.length; i < len; i++) {
    let rule = parsedThemeRules[i];
    root.insert(0, rule.scope, rule.parentScopes, rule.fontStyle, colorMap.getId(rule.foreground), colorMap.getId(rule.background));
  }
  return new Theme(colorMap, defaults, root);
}
var ColorMap = class {
  _isFrozen;
  _lastColorId;
  _id2color;
  _color2id;
  constructor(_colorMap) {
    this._lastColorId = 0;
    this._id2color = [];
    this._color2id = /* @__PURE__ */ Object.create(null);
    if (Array.isArray(_colorMap)) {
      this._isFrozen = true;
      for (let i = 0, len = _colorMap.length; i < len; i++) {
        this._color2id[_colorMap[i]] = i;
        this._id2color[i] = _colorMap[i];
      }
    } else {
      this._isFrozen = false;
    }
  }
  getId(color) {
    if (color === null) {
      return 0;
    }
    color = color.toUpperCase();
    let value = this._color2id[color];
    if (value) {
      return value;
    }
    if (this._isFrozen) {
      throw new Error(`Missing color in color map - ${color}`);
    }
    value = ++this._lastColorId;
    this._color2id[color] = value;
    this._id2color[value] = color;
    return value;
  }
  getColorMap() {
    return this._id2color.slice(0);
  }
};
var emptyParentScopes = Object.freeze([]);
var ThemeTrieElementRule = class _ThemeTrieElementRule {
  scopeDepth;
  parentScopes;
  fontStyle;
  foreground;
  background;
  constructor(scopeDepth, parentScopes, fontStyle, foreground, background) {
    this.scopeDepth = scopeDepth;
    this.parentScopes = parentScopes || emptyParentScopes;
    this.fontStyle = fontStyle;
    this.foreground = foreground;
    this.background = background;
  }
  clone() {
    return new _ThemeTrieElementRule(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
  }
  static cloneArr(arr) {
    let r = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      r[i] = arr[i].clone();
    }
    return r;
  }
  acceptOverwrite(scopeDepth, fontStyle, foreground, background) {
    if (this.scopeDepth > scopeDepth) {
      console.log("how did this happen?");
    } else {
      this.scopeDepth = scopeDepth;
    }
    if (fontStyle !== -1 /* NotSet */) {
      this.fontStyle = fontStyle;
    }
    if (foreground !== 0) {
      this.foreground = foreground;
    }
    if (background !== 0) {
      this.background = background;
    }
  }
};
var ThemeTrieElement = class _ThemeTrieElement {
  constructor(_mainRule, rulesWithParentScopes = [], _children = {}) {
    this._mainRule = _mainRule;
    this._children = _children;
    this._rulesWithParentScopes = rulesWithParentScopes;
  }
  _rulesWithParentScopes;
  static _cmpBySpecificity(a, b) {
    if (a.scopeDepth !== b.scopeDepth) {
      return b.scopeDepth - a.scopeDepth;
    }
    let aParentIndex = 0;
    let bParentIndex = 0;
    while (true) {
      if (a.parentScopes[aParentIndex] === ">") {
        aParentIndex++;
      }
      if (b.parentScopes[bParentIndex] === ">") {
        bParentIndex++;
      }
      if (aParentIndex >= a.parentScopes.length || bParentIndex >= b.parentScopes.length) {
        break;
      }
      const parentScopeLengthDiff = b.parentScopes[bParentIndex].length - a.parentScopes[aParentIndex].length;
      if (parentScopeLengthDiff !== 0) {
        return parentScopeLengthDiff;
      }
      aParentIndex++;
      bParentIndex++;
    }
    return b.parentScopes.length - a.parentScopes.length;
  }
  match(scope) {
    if (scope !== "") {
      let dotIndex = scope.indexOf(".");
      let head;
      let tail;
      if (dotIndex === -1) {
        head = scope;
        tail = "";
      } else {
        head = scope.substring(0, dotIndex);
        tail = scope.substring(dotIndex + 1);
      }
      if (this._children.hasOwnProperty(head)) {
        return this._children[head].match(tail);
      }
    }
    const rules = this._rulesWithParentScopes.concat(this._mainRule);
    rules.sort(_ThemeTrieElement._cmpBySpecificity);
    return rules;
  }
  insert(scopeDepth, scope, parentScopes, fontStyle, foreground, background) {
    if (scope === "") {
      this._doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background);
      return;
    }
    let dotIndex = scope.indexOf(".");
    let head;
    let tail;
    if (dotIndex === -1) {
      head = scope;
      tail = "";
    } else {
      head = scope.substring(0, dotIndex);
      tail = scope.substring(dotIndex + 1);
    }
    let child;
    if (this._children.hasOwnProperty(head)) {
      child = this._children[head];
    } else {
      child = new _ThemeTrieElement(this._mainRule.clone(), ThemeTrieElementRule.cloneArr(this._rulesWithParentScopes));
      this._children[head] = child;
    }
    child.insert(scopeDepth + 1, tail, parentScopes, fontStyle, foreground, background);
  }
  _doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background) {
    if (parentScopes === null) {
      this._mainRule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
      return;
    }
    for (let i = 0, len = this._rulesWithParentScopes.length; i < len; i++) {
      let rule = this._rulesWithParentScopes[i];
      if (strArrCmp(rule.parentScopes, parentScopes) === 0) {
        rule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
        return;
      }
    }
    if (fontStyle === -1 /* NotSet */) {
      fontStyle = this._mainRule.fontStyle;
    }
    if (foreground === 0) {
      foreground = this._mainRule.foreground;
    }
    if (background === 0) {
      background = this._mainRule.background;
    }
    this._rulesWithParentScopes.push(new ThemeTrieElementRule(scopeDepth, parentScopes, fontStyle, foreground, background));
  }
};

// src/encodedTokenAttributes.ts
var EncodedTokenMetadata = class _EncodedTokenMetadata {
  static toBinaryStr(encodedTokenAttributes) {
    return encodedTokenAttributes.toString(2).padStart(32, "0");
  }
  static print(encodedTokenAttributes) {
    const languageId = _EncodedTokenMetadata.getLanguageId(encodedTokenAttributes);
    const tokenType = _EncodedTokenMetadata.getTokenType(encodedTokenAttributes);
    const fontStyle = _EncodedTokenMetadata.getFontStyle(encodedTokenAttributes);
    const foreground = _EncodedTokenMetadata.getForeground(encodedTokenAttributes);
    const background = _EncodedTokenMetadata.getBackground(encodedTokenAttributes);
    console.log({
      languageId,
      tokenType,
      fontStyle,
      foreground,
      background
    });
  }
  static getLanguageId(encodedTokenAttributes) {
    return (encodedTokenAttributes & 255 /* LANGUAGEID_MASK */) >>> 0 /* LANGUAGEID_OFFSET */;
  }
  static getTokenType(encodedTokenAttributes) {
    return (encodedTokenAttributes & 768 /* TOKEN_TYPE_MASK */) >>> 8 /* TOKEN_TYPE_OFFSET */;
  }
  static containsBalancedBrackets(encodedTokenAttributes) {
    return (encodedTokenAttributes & 1024 /* BALANCED_BRACKETS_MASK */) !== 0;
  }
  static getFontStyle(encodedTokenAttributes) {
    return (encodedTokenAttributes & 30720 /* FONT_STYLE_MASK */) >>> 11 /* FONT_STYLE_OFFSET */;
  }
  static getForeground(encodedTokenAttributes) {
    return (encodedTokenAttributes & 16744448 /* FOREGROUND_MASK */) >>> 15 /* FOREGROUND_OFFSET */;
  }
  static getBackground(encodedTokenAttributes) {
    return (encodedTokenAttributes & 4278190080 /* BACKGROUND_MASK */) >>> 24 /* BACKGROUND_OFFSET */;
  }
  /**
   * Updates the fields in `metadata`.
   * A value of `0`, `NotSet` or `null` indicates that the corresponding field should be left as is.
   */
  static set(encodedTokenAttributes, languageId, tokenType, containsBalancedBrackets, fontStyle, foreground, background) {
    let _languageId = _EncodedTokenMetadata.getLanguageId(encodedTokenAttributes);
    let _tokenType = _EncodedTokenMetadata.getTokenType(encodedTokenAttributes);
    let _containsBalancedBracketsBit = _EncodedTokenMetadata.containsBalancedBrackets(encodedTokenAttributes) ? 1 : 0;
    let _fontStyle = _EncodedTokenMetadata.getFontStyle(encodedTokenAttributes);
    let _foreground = _EncodedTokenMetadata.getForeground(encodedTokenAttributes);
    let _background = _EncodedTokenMetadata.getBackground(encodedTokenAttributes);
    if (languageId !== 0) {
      _languageId = languageId;
    }
    if (tokenType !== 8 /* NotSet */) {
      _tokenType = fromOptionalTokenType(tokenType);
    }
    if (containsBalancedBrackets !== null) {
      _containsBalancedBracketsBit = containsBalancedBrackets ? 1 : 0;
    }
    if (fontStyle !== -1 /* NotSet */) {
      _fontStyle = fontStyle;
    }
    if (foreground !== 0) {
      _foreground = foreground;
    }
    if (background !== 0) {
      _background = background;
    }
    return (_languageId << 0 /* LANGUAGEID_OFFSET */ | _tokenType << 8 /* TOKEN_TYPE_OFFSET */ | _containsBalancedBracketsBit << 10 /* BALANCED_BRACKETS_OFFSET */ | _fontStyle << 11 /* FONT_STYLE_OFFSET */ | _foreground << 15 /* FOREGROUND_OFFSET */ | _background << 24 /* BACKGROUND_OFFSET */) >>> 0;
  }
};
function toOptionalTokenType(standardType) {
  return standardType;
}
function fromOptionalTokenType(standardType) {
  return standardType;
}

// src/matcher.ts
function createMatchers(selector, matchesName) {
  const results = [];
  const tokenizer = newTokenizer(selector);
  let token = tokenizer.next();
  while (token !== null) {
    let priority = 0;
    if (token.length === 2 && token.charAt(1) === ":") {
      switch (token.charAt(0)) {
        case "R":
          priority = 1;
          break;
        case "L":
          priority = -1;
          break;
        default:
          console.log(`Unknown priority ${token} in scope selector`);
      }
      token = tokenizer.next();
    }
    let matcher = parseConjunction();
    results.push({ matcher, priority });
    if (token !== ",") {
      break;
    }
    token = tokenizer.next();
  }
  return results;
  function parseOperand() {
    if (token === "-") {
      token = tokenizer.next();
      const expressionToNegate = parseOperand();
      return (matcherInput) => !!expressionToNegate && !expressionToNegate(matcherInput);
    }
    if (token === "(") {
      token = tokenizer.next();
      const expressionInParents = parseInnerExpression();
      if (token === ")") {
        token = tokenizer.next();
      }
      return expressionInParents;
    }
    if (isIdentifier(token)) {
      const identifiers = [];
      do {
        identifiers.push(token);
        token = tokenizer.next();
      } while (isIdentifier(token));
      return (matcherInput) => matchesName(identifiers, matcherInput);
    }
    return null;
  }
  function parseConjunction() {
    const matchers = [];
    let matcher = parseOperand();
    while (matcher) {
      matchers.push(matcher);
      matcher = parseOperand();
    }
    return (matcherInput) => matchers.every((matcher2) => matcher2(matcherInput));
  }
  function parseInnerExpression() {
    const matchers = [];
    let matcher = parseConjunction();
    while (matcher) {
      matchers.push(matcher);
      if (token === "|" || token === ",") {
        do {
          token = tokenizer.next();
        } while (token === "|" || token === ",");
      } else {
        break;
      }
      matcher = parseConjunction();
    }
    return (matcherInput) => matchers.some((matcher2) => matcher2(matcherInput));
  }
}
function isIdentifier(token) {
  return !!token && !!token.match(/[\w\.:]+/);
}
function newTokenizer(input) {
  let regex = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g;
  let match = regex.exec(input);
  return {
    next: () => {
      if (!match) {
        return null;
      }
      const res = match[0];
      match = regex.exec(input);
      return res;
    }
  };
}
function disposeOnigString(str) {
  if (typeof str.dispose === "function") {
    str.dispose();
  }
}

// src/grammar/grammarDependencies.ts
var TopLevelRuleReference = class {
  constructor(scopeName) {
    this.scopeName = scopeName;
  }
  toKey() {
    return this.scopeName;
  }
};
var TopLevelRepositoryRuleReference = class {
  constructor(scopeName, ruleName) {
    this.scopeName = scopeName;
    this.ruleName = ruleName;
  }
  toKey() {
    return `${this.scopeName}#${this.ruleName}`;
  }
};
var ExternalReferenceCollector = class {
  _references = [];
  _seenReferenceKeys = /* @__PURE__ */ new Set();
  get references() {
    return this._references;
  }
  visitedRule = /* @__PURE__ */ new Set();
  add(reference) {
    const key = reference.toKey();
    if (this._seenReferenceKeys.has(key)) {
      return;
    }
    this._seenReferenceKeys.add(key);
    this._references.push(reference);
  }
};
var ScopeDependencyProcessor = class {
  constructor(repo, initialScopeName) {
    this.repo = repo;
    this.initialScopeName = initialScopeName;
    this.seenFullScopeRequests.add(this.initialScopeName);
    this.Q = [new TopLevelRuleReference(this.initialScopeName)];
  }
  seenFullScopeRequests = /* @__PURE__ */ new Set();
  seenPartialScopeRequests = /* @__PURE__ */ new Set();
  Q;
  processQueue() {
    const q = this.Q;
    this.Q = [];
    const deps = new ExternalReferenceCollector();
    for (const dep of q) {
      collectReferencesOfReference(dep, this.initialScopeName, this.repo, deps);
    }
    for (const dep of deps.references) {
      if (dep instanceof TopLevelRuleReference) {
        if (this.seenFullScopeRequests.has(dep.scopeName)) {
          continue;
        }
        this.seenFullScopeRequests.add(dep.scopeName);
        this.Q.push(dep);
      } else {
        if (this.seenFullScopeRequests.has(dep.scopeName)) {
          continue;
        }
        if (this.seenPartialScopeRequests.has(dep.toKey())) {
          continue;
        }
        this.seenPartialScopeRequests.add(dep.toKey());
        this.Q.push(dep);
      }
    }
  }
};
function collectReferencesOfReference(reference, baseGrammarScopeName, repo, result) {
  const selfGrammar = repo.lookup(reference.scopeName);
  if (!selfGrammar) {
    if (reference.scopeName === baseGrammarScopeName) {
      throw new Error(`No grammar provided for <${baseGrammarScopeName}>`);
    }
    return;
  }
  const baseGrammar = repo.lookup(baseGrammarScopeName);
  if (reference instanceof TopLevelRuleReference) {
    collectExternalReferencesInTopLevelRule({ baseGrammar, selfGrammar }, result);
  } else {
    collectExternalReferencesInTopLevelRepositoryRule(
      reference.ruleName,
      { baseGrammar, selfGrammar, repository: selfGrammar.repository },
      result
    );
  }
  const injections = repo.injections(reference.scopeName);
  if (injections) {
    for (const injection of injections) {
      result.add(new TopLevelRuleReference(injection));
    }
  }
}
function collectExternalReferencesInTopLevelRepositoryRule(ruleName, context, result) {
  if (context.repository && context.repository[ruleName]) {
    const rule = context.repository[ruleName];
    collectExternalReferencesInRules([rule], context, result);
  }
}
function collectExternalReferencesInTopLevelRule(context, result) {
  if (context.selfGrammar.patterns && Array.isArray(context.selfGrammar.patterns)) {
    collectExternalReferencesInRules(
      context.selfGrammar.patterns,
      { ...context, repository: context.selfGrammar.repository },
      result
    );
  }
  if (context.selfGrammar.injections) {
    collectExternalReferencesInRules(
      Object.values(context.selfGrammar.injections),
      { ...context, repository: context.selfGrammar.repository },
      result
    );
  }
}
function collectExternalReferencesInRules(rules, context, result) {
  for (const rule of rules) {
    if (result.visitedRule.has(rule)) {
      continue;
    }
    result.visitedRule.add(rule);
    const patternRepository = rule.repository ? mergeObjects({}, context.repository, rule.repository) : context.repository;
    if (Array.isArray(rule.patterns)) {
      collectExternalReferencesInRules(rule.patterns, { ...context, repository: patternRepository }, result);
    }
    const include = rule.include;
    if (!include) {
      continue;
    }
    const reference = parseInclude(include);
    switch (reference.kind) {
      case 0 /* Base */:
        collectExternalReferencesInTopLevelRule({ ...context, selfGrammar: context.baseGrammar }, result);
        break;
      case 1 /* Self */:
        collectExternalReferencesInTopLevelRule(context, result);
        break;
      case 2 /* RelativeReference */:
        collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, { ...context, repository: patternRepository }, result);
        break;
      case 3 /* TopLevelReference */:
      case 4 /* TopLevelRepositoryReference */:
        const selfGrammar = reference.scopeName === context.selfGrammar.scopeName ? context.selfGrammar : reference.scopeName === context.baseGrammar.scopeName ? context.baseGrammar : undefined;
        if (selfGrammar) {
          const newContext = { baseGrammar: context.baseGrammar, selfGrammar, repository: patternRepository };
          if (reference.kind === 4 /* TopLevelRepositoryReference */) {
            collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, newContext, result);
          } else {
            collectExternalReferencesInTopLevelRule(newContext, result);
          }
        } else {
          if (reference.kind === 4 /* TopLevelRepositoryReference */) {
            result.add(new TopLevelRepositoryRuleReference(reference.scopeName, reference.ruleName));
          } else {
            result.add(new TopLevelRuleReference(reference.scopeName));
          }
        }
        break;
    }
  }
}
var BaseReference = class {
  kind = 0 /* Base */;
};
var SelfReference = class {
  kind = 1 /* Self */;
};
var RelativeReference = class {
  constructor(ruleName) {
    this.ruleName = ruleName;
  }
  kind = 2 /* RelativeReference */;
};
var TopLevelReference = class {
  constructor(scopeName) {
    this.scopeName = scopeName;
  }
  kind = 3 /* TopLevelReference */;
};
var TopLevelRepositoryReference = class {
  constructor(scopeName, ruleName) {
    this.scopeName = scopeName;
    this.ruleName = ruleName;
  }
  kind = 4 /* TopLevelRepositoryReference */;
};
function parseInclude(include) {
  if (include === "$base") {
    return new BaseReference();
  } else if (include === "$self") {
    return new SelfReference();
  }
  const indexOfSharp = include.indexOf("#");
  if (indexOfSharp === -1) {
    return new TopLevelReference(include);
  } else if (indexOfSharp === 0) {
    return new RelativeReference(include.substring(1));
  } else {
    const scopeName = include.substring(0, indexOfSharp);
    const ruleName = include.substring(indexOfSharp + 1);
    return new TopLevelRepositoryReference(scopeName, ruleName);
  }
}

// src/rule.ts
var HAS_BACK_REFERENCES = /\\(\d+)/;
var BACK_REFERENCING_END = /\\(\d+)/g;
var endRuleId = -1;
var whileRuleId = -2;
function ruleIdFromNumber(id) {
  return id;
}
function ruleIdToNumber(id) {
  return id;
}
var Rule = class {
  $location;
  id;
  _nameIsCapturing;
  _name;
  _contentNameIsCapturing;
  _contentName;
  constructor($location, id, name, contentName) {
    this.$location = $location;
    this.id = id;
    this._name = name || null;
    this._nameIsCapturing = RegexSource.hasCaptures(this._name);
    this._contentName = contentName || null;
    this._contentNameIsCapturing = RegexSource.hasCaptures(this._contentName);
  }
  get debugName() {
    const location = this.$location ? `${basename(this.$location.filename)}:${this.$location.line}` : "unknown";
    return `${this.constructor.name}#${this.id} @ ${location}`;
  }
  getName(lineText, captureIndices) {
    if (!this._nameIsCapturing || this._name === null || lineText === null || captureIndices === null) {
      return this._name;
    }
    return RegexSource.replaceCaptures(this._name, lineText, captureIndices);
  }
  getContentName(lineText, captureIndices) {
    if (!this._contentNameIsCapturing || this._contentName === null) {
      return this._contentName;
    }
    return RegexSource.replaceCaptures(this._contentName, lineText, captureIndices);
  }
};
var CaptureRule = class extends Rule {
  retokenizeCapturedWithRuleId;
  constructor($location, id, name, contentName, retokenizeCapturedWithRuleId) {
    super($location, id, name, contentName);
    this.retokenizeCapturedWithRuleId = retokenizeCapturedWithRuleId;
  }
  dispose() {
  }
  collectPatterns(grammar, out) {
    throw new Error("Not supported!");
  }
  compile(grammar, endRegexSource) {
    throw new Error("Not supported!");
  }
  compileAG(grammar, endRegexSource, allowA, allowG) {
    throw new Error("Not supported!");
  }
};
var MatchRule = class extends Rule {
  _match;
  captures;
  _cachedCompiledPatterns;
  constructor($location, id, name, match, captures) {
    super($location, id, name, null);
    this._match = new RegExpSource(match, this.id);
    this.captures = captures;
    this._cachedCompiledPatterns = null;
  }
  dispose() {
    if (this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns.dispose();
      this._cachedCompiledPatterns = null;
    }
  }
  get debugMatchRegExp() {
    return `${this._match.source}`;
  }
  collectPatterns(grammar, out) {
    out.push(this._match);
  }
  compile(grammar, endRegexSource) {
    return this._getCachedCompiledPatterns(grammar).compile(grammar);
  }
  compileAG(grammar, endRegexSource, allowA, allowG) {
    return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
  }
  _getCachedCompiledPatterns(grammar) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new RegExpSourceList();
      this.collectPatterns(grammar, this._cachedCompiledPatterns);
    }
    return this._cachedCompiledPatterns;
  }
};
var IncludeOnlyRule = class extends Rule {
  hasMissingPatterns;
  patterns;
  _cachedCompiledPatterns;
  constructor($location, id, name, contentName, patterns) {
    super($location, id, name, contentName);
    this.patterns = patterns.patterns;
    this.hasMissingPatterns = patterns.hasMissingPatterns;
    this._cachedCompiledPatterns = null;
  }
  dispose() {
    if (this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns.dispose();
      this._cachedCompiledPatterns = null;
    }
  }
  collectPatterns(grammar, out) {
    for (const pattern of this.patterns) {
      const rule = grammar.getRule(pattern);
      rule.collectPatterns(grammar, out);
    }
  }
  compile(grammar, endRegexSource) {
    return this._getCachedCompiledPatterns(grammar).compile(grammar);
  }
  compileAG(grammar, endRegexSource, allowA, allowG) {
    return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
  }
  _getCachedCompiledPatterns(grammar) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new RegExpSourceList();
      this.collectPatterns(grammar, this._cachedCompiledPatterns);
    }
    return this._cachedCompiledPatterns;
  }
};
var BeginEndRule = class extends Rule {
  _begin;
  beginCaptures;
  _end;
  endHasBackReferences;
  endCaptures;
  applyEndPatternLast;
  hasMissingPatterns;
  patterns;
  _cachedCompiledPatterns;
  constructor($location, id, name, contentName, begin, beginCaptures, end, endCaptures, applyEndPatternLast, patterns) {
    super($location, id, name, contentName);
    this._begin = new RegExpSource(begin, this.id);
    this.beginCaptures = beginCaptures;
    this._end = new RegExpSource(end ? end : "\uFFFF", -1);
    this.endHasBackReferences = this._end.hasBackReferences;
    this.endCaptures = endCaptures;
    this.applyEndPatternLast = applyEndPatternLast || false;
    this.patterns = patterns.patterns;
    this.hasMissingPatterns = patterns.hasMissingPatterns;
    this._cachedCompiledPatterns = null;
  }
  dispose() {
    if (this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns.dispose();
      this._cachedCompiledPatterns = null;
    }
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugEndRegExp() {
    return `${this._end.source}`;
  }
  getEndWithResolvedBackReferences(lineText, captureIndices) {
    return this._end.resolveBackReferences(lineText, captureIndices);
  }
  collectPatterns(grammar, out) {
    out.push(this._begin);
  }
  compile(grammar, endRegexSource) {
    return this._getCachedCompiledPatterns(grammar, endRegexSource).compile(grammar);
  }
  compileAG(grammar, endRegexSource, allowA, allowG) {
    return this._getCachedCompiledPatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
  }
  _getCachedCompiledPatterns(grammar, endRegexSource) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new RegExpSourceList();
      for (const pattern of this.patterns) {
        const rule = grammar.getRule(pattern);
        rule.collectPatterns(grammar, this._cachedCompiledPatterns);
      }
      if (this.applyEndPatternLast) {
        this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end);
      } else {
        this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
      }
    }
    if (this._end.hasBackReferences) {
      if (this.applyEndPatternLast) {
        this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, endRegexSource);
      } else {
        this._cachedCompiledPatterns.setSource(0, endRegexSource);
      }
    }
    return this._cachedCompiledPatterns;
  }
};
var BeginWhileRule = class extends Rule {
  _begin;
  beginCaptures;
  whileCaptures;
  _while;
  whileHasBackReferences;
  hasMissingPatterns;
  patterns;
  _cachedCompiledPatterns;
  _cachedCompiledWhilePatterns;
  constructor($location, id, name, contentName, begin, beginCaptures, _while, whileCaptures, patterns) {
    super($location, id, name, contentName);
    this._begin = new RegExpSource(begin, this.id);
    this.beginCaptures = beginCaptures;
    this.whileCaptures = whileCaptures;
    this._while = new RegExpSource(_while, whileRuleId);
    this.whileHasBackReferences = this._while.hasBackReferences;
    this.patterns = patterns.patterns;
    this.hasMissingPatterns = patterns.hasMissingPatterns;
    this._cachedCompiledPatterns = null;
    this._cachedCompiledWhilePatterns = null;
  }
  dispose() {
    if (this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns.dispose();
      this._cachedCompiledPatterns = null;
    }
    if (this._cachedCompiledWhilePatterns) {
      this._cachedCompiledWhilePatterns.dispose();
      this._cachedCompiledWhilePatterns = null;
    }
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugWhileRegExp() {
    return `${this._while.source}`;
  }
  getWhileWithResolvedBackReferences(lineText, captureIndices) {
    return this._while.resolveBackReferences(lineText, captureIndices);
  }
  collectPatterns(grammar, out) {
    out.push(this._begin);
  }
  compile(grammar, endRegexSource) {
    return this._getCachedCompiledPatterns(grammar).compile(grammar);
  }
  compileAG(grammar, endRegexSource, allowA, allowG) {
    return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
  }
  _getCachedCompiledPatterns(grammar) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new RegExpSourceList();
      for (const pattern of this.patterns) {
        const rule = grammar.getRule(pattern);
        rule.collectPatterns(grammar, this._cachedCompiledPatterns);
      }
    }
    return this._cachedCompiledPatterns;
  }
  compileWhile(grammar, endRegexSource) {
    return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compile(grammar);
  }
  compileWhileAG(grammar, endRegexSource, allowA, allowG) {
    return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
  }
  _getCachedCompiledWhilePatterns(grammar, endRegexSource) {
    if (!this._cachedCompiledWhilePatterns) {
      this._cachedCompiledWhilePatterns = new RegExpSourceList();
      this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while);
    }
    if (this._while.hasBackReferences) {
      this._cachedCompiledWhilePatterns.setSource(0, endRegexSource ? endRegexSource : "\uFFFF");
    }
    return this._cachedCompiledWhilePatterns;
  }
};
var RuleFactory = class _RuleFactory {
  static createCaptureRule(helper, $location, name, contentName, retokenizeCapturedWithRuleId) {
    return helper.registerRule((id) => {
      return new CaptureRule($location, id, name, contentName, retokenizeCapturedWithRuleId);
    });
  }
  static getCompiledRuleId(desc, helper, repository) {
    if (!desc.id) {
      helper.registerRule((id) => {
        desc.id = id;
        if (desc.match) {
          return new MatchRule(
            desc.$vscodeTextmateLocation,
            desc.id,
            desc.name,
            desc.match,
            _RuleFactory._compileCaptures(desc.captures, helper, repository)
          );
        }
        if (typeof desc.begin === "undefined") {
          if (desc.repository) {
            repository = mergeObjects({}, repository, desc.repository);
          }
          let patterns = desc.patterns;
          if (typeof patterns === "undefined" && desc.include) {
            patterns = [{ include: desc.include }];
          }
          return new IncludeOnlyRule(
            desc.$vscodeTextmateLocation,
            desc.id,
            desc.name,
            desc.contentName,
            _RuleFactory._compilePatterns(patterns, helper, repository)
          );
        }
        if (desc.while) {
          return new BeginWhileRule(
            desc.$vscodeTextmateLocation,
            desc.id,
            desc.name,
            desc.contentName,
            desc.begin,
            _RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository),
            desc.while,
            _RuleFactory._compileCaptures(desc.whileCaptures || desc.captures, helper, repository),
            _RuleFactory._compilePatterns(desc.patterns, helper, repository)
          );
        }
        return new BeginEndRule(
          desc.$vscodeTextmateLocation,
          desc.id,
          desc.name,
          desc.contentName,
          desc.begin,
          _RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository),
          desc.end,
          _RuleFactory._compileCaptures(desc.endCaptures || desc.captures, helper, repository),
          desc.applyEndPatternLast,
          _RuleFactory._compilePatterns(desc.patterns, helper, repository)
        );
      });
    }
    return desc.id;
  }
  static _compileCaptures(captures, helper, repository) {
    let r = [];
    if (captures) {
      let maximumCaptureId = 0;
      for (const captureId in captures) {
        if (captureId === "$vscodeTextmateLocation") {
          continue;
        }
        const numericCaptureId = parseInt(captureId, 10);
        if (numericCaptureId > maximumCaptureId) {
          maximumCaptureId = numericCaptureId;
        }
      }
      for (let i = 0; i <= maximumCaptureId; i++) {
        r[i] = null;
      }
      for (const captureId in captures) {
        if (captureId === "$vscodeTextmateLocation") {
          continue;
        }
        const numericCaptureId = parseInt(captureId, 10);
        let retokenizeCapturedWithRuleId = 0;
        if (captures[captureId].patterns) {
          retokenizeCapturedWithRuleId = _RuleFactory.getCompiledRuleId(captures[captureId], helper, repository);
        }
        r[numericCaptureId] = _RuleFactory.createCaptureRule(helper, captures[captureId].$vscodeTextmateLocation, captures[captureId].name, captures[captureId].contentName, retokenizeCapturedWithRuleId);
      }
    }
    return r;
  }
  static _compilePatterns(patterns, helper, repository) {
    let r = [];
    if (patterns) {
      for (let i = 0, len = patterns.length; i < len; i++) {
        const pattern = patterns[i];
        let ruleId = -1;
        if (pattern.include) {
          const reference = parseInclude(pattern.include);
          switch (reference.kind) {
            case 0 /* Base */:
            case 1 /* Self */:
              ruleId = _RuleFactory.getCompiledRuleId(repository[pattern.include], helper, repository);
              break;
            case 2 /* RelativeReference */:
              let localIncludedRule = repository[reference.ruleName];
              if (localIncludedRule) {
                ruleId = _RuleFactory.getCompiledRuleId(localIncludedRule, helper, repository);
              }
              break;
            case 3 /* TopLevelReference */:
            case 4 /* TopLevelRepositoryReference */:
              const externalGrammarName = reference.scopeName;
              const externalGrammarInclude = reference.kind === 4 /* TopLevelRepositoryReference */ ? reference.ruleName : null;
              const externalGrammar = helper.getExternalGrammar(externalGrammarName, repository);
              if (externalGrammar) {
                if (externalGrammarInclude) {
                  let externalIncludedRule = externalGrammar.repository[externalGrammarInclude];
                  if (externalIncludedRule) {
                    ruleId = _RuleFactory.getCompiledRuleId(externalIncludedRule, helper, externalGrammar.repository);
                  }
                } else {
                  ruleId = _RuleFactory.getCompiledRuleId(externalGrammar.repository.$self, helper, externalGrammar.repository);
                }
              }
              break;
          }
        } else {
          ruleId = _RuleFactory.getCompiledRuleId(pattern, helper, repository);
        }
        if (ruleId !== -1) {
          const rule = helper.getRule(ruleId);
          let skipRule = false;
          if (rule instanceof IncludeOnlyRule || rule instanceof BeginEndRule || rule instanceof BeginWhileRule) {
            if (rule.hasMissingPatterns && rule.patterns.length === 0) {
              skipRule = true;
            }
          }
          if (skipRule) {
            continue;
          }
          r.push(ruleId);
        }
      }
    }
    return {
      patterns: r,
      hasMissingPatterns: (patterns ? patterns.length : 0) !== r.length
    };
  }
};
var RegExpSource = class _RegExpSource {
  source;
  ruleId;
  hasAnchor;
  hasBackReferences;
  _anchorCache;
  constructor(regExpSource, ruleId) {
    if (regExpSource && typeof regExpSource === "string") {
      const len = regExpSource.length;
      let lastPushedPos = 0;
      let output = [];
      let hasAnchor = false;
      for (let pos = 0; pos < len; pos++) {
        const ch = regExpSource.charAt(pos);
        if (ch === "\\") {
          if (pos + 1 < len) {
            const nextCh = regExpSource.charAt(pos + 1);
            if (nextCh === "z") {
              output.push(regExpSource.substring(lastPushedPos, pos));
              output.push("$(?!\\n)(?<!\\n)");
              lastPushedPos = pos + 2;
            } else if (nextCh === "A" || nextCh === "G") {
              hasAnchor = true;
            }
            pos++;
          }
        }
      }
      this.hasAnchor = hasAnchor;
      if (lastPushedPos === 0) {
        this.source = regExpSource;
      } else {
        output.push(regExpSource.substring(lastPushedPos, len));
        this.source = output.join("");
      }
    } else {
      this.hasAnchor = false;
      this.source = regExpSource;
    }
    if (this.hasAnchor) {
      this._anchorCache = this._buildAnchorCache();
    } else {
      this._anchorCache = null;
    }
    this.ruleId = ruleId;
    if (typeof this.source === "string") {
      this.hasBackReferences = HAS_BACK_REFERENCES.test(this.source);
    } else {
      this.hasBackReferences = false;
    }
  }
  clone() {
    return new _RegExpSource(this.source, this.ruleId);
  }
  setSource(newSource) {
    if (this.source === newSource) {
      return;
    }
    this.source = newSource;
    if (this.hasAnchor) {
      this._anchorCache = this._buildAnchorCache();
    }
  }
  resolveBackReferences(lineText, captureIndices) {
    if (typeof this.source !== "string") {
      throw new Error("This method should only be called if the source is a string");
    }
    let capturedValues = captureIndices.map((capture) => {
      return lineText.substring(capture.start, capture.end);
    });
    BACK_REFERENCING_END.lastIndex = 0;
    return this.source.replace(BACK_REFERENCING_END, (match, g1) => {
      return escapeRegExpCharacters(capturedValues[parseInt(g1, 10)] || "");
    });
  }
  _buildAnchorCache() {
    if (typeof this.source !== "string") {
      throw new Error("This method should only be called if the source is a string");
    }
    let A0_G0_result = [];
    let A0_G1_result = [];
    let A1_G0_result = [];
    let A1_G1_result = [];
    let pos, len, ch, nextCh;
    for (pos = 0, len = this.source.length; pos < len; pos++) {
      ch = this.source.charAt(pos);
      A0_G0_result[pos] = ch;
      A0_G1_result[pos] = ch;
      A1_G0_result[pos] = ch;
      A1_G1_result[pos] = ch;
      if (ch === "\\") {
        if (pos + 1 < len) {
          nextCh = this.source.charAt(pos + 1);
          if (nextCh === "A") {
            A0_G0_result[pos + 1] = "\uFFFF";
            A0_G1_result[pos + 1] = "\uFFFF";
            A1_G0_result[pos + 1] = "A";
            A1_G1_result[pos + 1] = "A";
          } else if (nextCh === "G") {
            A0_G0_result[pos + 1] = "\uFFFF";
            A0_G1_result[pos + 1] = "G";
            A1_G0_result[pos + 1] = "\uFFFF";
            A1_G1_result[pos + 1] = "G";
          } else {
            A0_G0_result[pos + 1] = nextCh;
            A0_G1_result[pos + 1] = nextCh;
            A1_G0_result[pos + 1] = nextCh;
            A1_G1_result[pos + 1] = nextCh;
          }
          pos++;
        }
      }
    }
    return {
      A0_G0: A0_G0_result.join(""),
      A0_G1: A0_G1_result.join(""),
      A1_G0: A1_G0_result.join(""),
      A1_G1: A1_G1_result.join("")
    };
  }
  resolveAnchors(allowA, allowG) {
    if (!this.hasAnchor || !this._anchorCache || typeof this.source !== "string") {
      return this.source;
    }
    if (allowA) {
      if (allowG) {
        return this._anchorCache.A1_G1;
      } else {
        return this._anchorCache.A1_G0;
      }
    } else {
      if (allowG) {
        return this._anchorCache.A0_G1;
      } else {
        return this._anchorCache.A0_G0;
      }
    }
  }
};
var RegExpSourceList = class {
  _items;
  _hasAnchors;
  _cached;
  _anchorCache;
  constructor() {
    this._items = [];
    this._hasAnchors = false;
    this._cached = null;
    this._anchorCache = {
      A0_G0: null,
      A0_G1: null,
      A1_G0: null,
      A1_G1: null
    };
  }
  dispose() {
    this._disposeCaches();
  }
  _disposeCaches() {
    if (this._cached) {
      this._cached.dispose();
      this._cached = null;
    }
    if (this._anchorCache.A0_G0) {
      this._anchorCache.A0_G0.dispose();
      this._anchorCache.A0_G0 = null;
    }
    if (this._anchorCache.A0_G1) {
      this._anchorCache.A0_G1.dispose();
      this._anchorCache.A0_G1 = null;
    }
    if (this._anchorCache.A1_G0) {
      this._anchorCache.A1_G0.dispose();
      this._anchorCache.A1_G0 = null;
    }
    if (this._anchorCache.A1_G1) {
      this._anchorCache.A1_G1.dispose();
      this._anchorCache.A1_G1 = null;
    }
  }
  push(item) {
    this._items.push(item);
    this._hasAnchors = this._hasAnchors || item.hasAnchor;
  }
  unshift(item) {
    this._items.unshift(item);
    this._hasAnchors = this._hasAnchors || item.hasAnchor;
  }
  length() {
    return this._items.length;
  }
  setSource(index, newSource) {
    if (this._items[index].source !== newSource) {
      this._disposeCaches();
      this._items[index].setSource(newSource);
    }
  }
  compile(onigLib) {
    if (!this._cached) {
      let regExps = this._items.map((e) => e.source);
      this._cached = new CompiledRule(onigLib, regExps, this._items.map((e) => e.ruleId));
    }
    return this._cached;
  }
  compileAG(onigLib, allowA, allowG) {
    if (!this._hasAnchors) {
      return this.compile(onigLib);
    } else {
      if (allowA) {
        if (allowG) {
          if (!this._anchorCache.A1_G1) {
            this._anchorCache.A1_G1 = this._resolveAnchors(onigLib, allowA, allowG);
          }
          return this._anchorCache.A1_G1;
        } else {
          if (!this._anchorCache.A1_G0) {
            this._anchorCache.A1_G0 = this._resolveAnchors(onigLib, allowA, allowG);
          }
          return this._anchorCache.A1_G0;
        }
      } else {
        if (allowG) {
          if (!this._anchorCache.A0_G1) {
            this._anchorCache.A0_G1 = this._resolveAnchors(onigLib, allowA, allowG);
          }
          return this._anchorCache.A0_G1;
        } else {
          if (!this._anchorCache.A0_G0) {
            this._anchorCache.A0_G0 = this._resolveAnchors(onigLib, allowA, allowG);
          }
          return this._anchorCache.A0_G0;
        }
      }
    }
  }
  _resolveAnchors(onigLib, allowA, allowG) {
    let regExps = this._items.map((e) => e.resolveAnchors(allowA, allowG));
    return new CompiledRule(onigLib, regExps, this._items.map((e) => e.ruleId));
  }
};
var CompiledRule = class {
  constructor(onigLib, regExps, rules) {
    this.regExps = regExps;
    this.rules = rules;
    this.scanner = onigLib.createOnigScanner(regExps);
  }
  scanner;
  dispose() {
    if (typeof this.scanner.dispose === "function") {
      this.scanner.dispose();
    }
  }
  toString() {
    const r = [];
    for (let i = 0, len = this.rules.length; i < len; i++) {
      r.push("   - " + this.rules[i] + ": " + this.regExps[i]);
    }
    return r.join("\n");
  }
  findNextMatchSync(string, startPosition, options) {
    const result = this.scanner.findNextMatchSync(string, startPosition, options);
    if (!result) {
      return null;
    }
    return {
      ruleId: this.rules[result.index],
      captureIndices: result.captureIndices
    };
  }
};

// src/grammar/basicScopesAttributeProvider.ts
var BasicScopeAttributes = class {
  constructor(languageId, tokenType) {
    this.languageId = languageId;
    this.tokenType = tokenType;
  }
};
var BasicScopeAttributesProvider = class _BasicScopeAttributesProvider {
  _defaultAttributes;
  _embeddedLanguagesMatcher;
  constructor(initialLanguageId, embeddedLanguages) {
    this._defaultAttributes = new BasicScopeAttributes(initialLanguageId, 8 /* NotSet */);
    this._embeddedLanguagesMatcher = new ScopeMatcher(Object.entries(embeddedLanguages || {}));
  }
  getDefaultAttributes() {
    return this._defaultAttributes;
  }
  getBasicScopeAttributes(scopeName) {
    if (scopeName === null) {
      return _BasicScopeAttributesProvider._NULL_SCOPE_METADATA;
    }
    return this._getBasicScopeAttributes.get(scopeName);
  }
  static _NULL_SCOPE_METADATA = new BasicScopeAttributes(0, 0);
  _getBasicScopeAttributes = new CachedFn((scopeName) => {
    const languageId = this._scopeToLanguage(scopeName);
    const standardTokenType = this._toStandardTokenType(scopeName);
    return new BasicScopeAttributes(languageId, standardTokenType);
  });
  /**
   * Given a produced TM scope, return the language that token describes or null if unknown.
   * e.g. source.html => html, source.css.embedded.html => css, punctuation.definition.tag.html => null
   */
  _scopeToLanguage(scope) {
    return this._embeddedLanguagesMatcher.match(scope) || 0;
  }
  _toStandardTokenType(scopeName) {
    const m = scopeName.match(_BasicScopeAttributesProvider.STANDARD_TOKEN_TYPE_REGEXP);
    if (!m) {
      return 8 /* NotSet */;
    }
    switch (m[1]) {
      case "comment":
        return 1 /* Comment */;
      case "string":
        return 2 /* String */;
      case "regex":
        return 3 /* RegEx */;
      case "meta.embedded":
        return 0 /* Other */;
    }
    throw new Error("Unexpected match for standard token type!");
  }
  static STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
};
var ScopeMatcher = class {
  values;
  scopesRegExp;
  constructor(values) {
    if (values.length === 0) {
      this.values = null;
      this.scopesRegExp = null;
    } else {
      this.values = new Map(values);
      const escapedScopes = values.map(
        ([scopeName, value]) => escapeRegExpCharacters(scopeName)
      );
      escapedScopes.sort();
      escapedScopes.reverse();
      this.scopesRegExp = new RegExp(
        `^((${escapedScopes.join(")|(")}))($|\\.)`,
        ""
      );
    }
  }
  match(scope) {
    if (!this.scopesRegExp) {
      return undefined;
    }
    const m = scope.match(this.scopesRegExp);
    if (!m) {
      return undefined;
    }
    return this.values.get(m[1]);
  }
};

// src/debug.ts
({
  InDebugMode: typeof process !== "undefined" && !!process.env["VSCODE_TEXTMATE_DEBUG"]
});

// src/grammar/tokenizeString.ts
var TokenizeStringResult = class {
  constructor(stack, stoppedEarly) {
    this.stack = stack;
    this.stoppedEarly = stoppedEarly;
  }
};
function _tokenizeString(grammar, lineText, isFirstLine, linePos, stack, lineTokens, checkWhileConditions, timeLimit) {
  const lineLength = lineText.content.length;
  let STOP = false;
  let anchorPosition = -1;
  if (checkWhileConditions) {
    const whileCheckResult = _checkWhileConditions(
      grammar,
      lineText,
      isFirstLine,
      linePos,
      stack,
      lineTokens
    );
    stack = whileCheckResult.stack;
    linePos = whileCheckResult.linePos;
    isFirstLine = whileCheckResult.isFirstLine;
    anchorPosition = whileCheckResult.anchorPosition;
  }
  const startTime = Date.now();
  while (!STOP) {
    if (timeLimit !== 0) {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime > timeLimit) {
        return new TokenizeStringResult(stack, true);
      }
    }
    scanNext();
  }
  return new TokenizeStringResult(stack, false);
  function scanNext() {
    const r = matchRuleOrInjections(
      grammar,
      lineText,
      isFirstLine,
      linePos,
      stack,
      anchorPosition
    );
    if (!r) {
      lineTokens.produce(stack, lineLength);
      STOP = true;
      return;
    }
    const captureIndices = r.captureIndices;
    const matchedRuleId = r.matchedRuleId;
    const hasAdvanced = captureIndices && captureIndices.length > 0 ? captureIndices[0].end > linePos : false;
    if (matchedRuleId === endRuleId) {
      const poppedRule = stack.getRule(grammar);
      lineTokens.produce(stack, captureIndices[0].start);
      stack = stack.withContentNameScopesList(stack.nameScopesList);
      handleCaptures(
        grammar,
        lineText,
        isFirstLine,
        stack,
        lineTokens,
        poppedRule.endCaptures,
        captureIndices
      );
      lineTokens.produce(stack, captureIndices[0].end);
      const popped = stack;
      stack = stack.parent;
      anchorPosition = popped.getAnchorPos();
      if (!hasAdvanced && popped.getEnterPos() === linePos) {
        stack = popped;
        lineTokens.produce(stack, lineLength);
        STOP = true;
        return;
      }
    } else {
      const _rule = grammar.getRule(matchedRuleId);
      lineTokens.produce(stack, captureIndices[0].start);
      const beforePush = stack;
      const scopeName = _rule.getName(lineText.content, captureIndices);
      const nameScopesList = stack.contentNameScopesList.pushAttributed(
        scopeName,
        grammar
      );
      stack = stack.push(
        matchedRuleId,
        linePos,
        anchorPosition,
        captureIndices[0].end === lineLength,
        null,
        nameScopesList,
        nameScopesList
      );
      if (_rule instanceof BeginEndRule) {
        const pushedRule = _rule;
        handleCaptures(
          grammar,
          lineText,
          isFirstLine,
          stack,
          lineTokens,
          pushedRule.beginCaptures,
          captureIndices
        );
        lineTokens.produce(stack, captureIndices[0].end);
        anchorPosition = captureIndices[0].end;
        const contentName = pushedRule.getContentName(
          lineText.content,
          captureIndices
        );
        const contentNameScopesList = nameScopesList.pushAttributed(
          contentName,
          grammar
        );
        stack = stack.withContentNameScopesList(contentNameScopesList);
        if (pushedRule.endHasBackReferences) {
          stack = stack.withEndRule(
            pushedRule.getEndWithResolvedBackReferences(
              lineText.content,
              captureIndices
            )
          );
        }
        if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
          stack = stack.pop();
          lineTokens.produce(stack, lineLength);
          STOP = true;
          return;
        }
      } else if (_rule instanceof BeginWhileRule) {
        const pushedRule = _rule;
        handleCaptures(
          grammar,
          lineText,
          isFirstLine,
          stack,
          lineTokens,
          pushedRule.beginCaptures,
          captureIndices
        );
        lineTokens.produce(stack, captureIndices[0].end);
        anchorPosition = captureIndices[0].end;
        const contentName = pushedRule.getContentName(
          lineText.content,
          captureIndices
        );
        const contentNameScopesList = nameScopesList.pushAttributed(
          contentName,
          grammar
        );
        stack = stack.withContentNameScopesList(contentNameScopesList);
        if (pushedRule.whileHasBackReferences) {
          stack = stack.withEndRule(
            pushedRule.getWhileWithResolvedBackReferences(
              lineText.content,
              captureIndices
            )
          );
        }
        if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
          stack = stack.pop();
          lineTokens.produce(stack, lineLength);
          STOP = true;
          return;
        }
      } else {
        const matchingRule = _rule;
        handleCaptures(
          grammar,
          lineText,
          isFirstLine,
          stack,
          lineTokens,
          matchingRule.captures,
          captureIndices
        );
        lineTokens.produce(stack, captureIndices[0].end);
        stack = stack.pop();
        if (!hasAdvanced) {
          stack = stack.safePop();
          lineTokens.produce(stack, lineLength);
          STOP = true;
          return;
        }
      }
    }
    if (captureIndices[0].end > linePos) {
      linePos = captureIndices[0].end;
      isFirstLine = false;
    }
  }
}
function _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens) {
  let anchorPosition = stack.beginRuleCapturedEOL ? 0 : -1;
  const whileRules = [];
  for (let node = stack; node; node = node.pop()) {
    const nodeRule = node.getRule(grammar);
    if (nodeRule instanceof BeginWhileRule) {
      whileRules.push({
        rule: nodeRule,
        stack: node
      });
    }
  }
  for (let whileRule = whileRules.pop(); whileRule; whileRule = whileRules.pop()) {
    const { ruleScanner, findOptions } = prepareRuleWhileSearch(whileRule.rule, grammar, whileRule.stack.endRule, isFirstLine, linePos === anchorPosition);
    const r = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
    if (r) {
      const matchedRuleId = r.ruleId;
      if (matchedRuleId !== whileRuleId) {
        stack = whileRule.stack.pop();
        break;
      }
      if (r.captureIndices && r.captureIndices.length) {
        lineTokens.produce(whileRule.stack, r.captureIndices[0].start);
        handleCaptures(grammar, lineText, isFirstLine, whileRule.stack, lineTokens, whileRule.rule.whileCaptures, r.captureIndices);
        lineTokens.produce(whileRule.stack, r.captureIndices[0].end);
        anchorPosition = r.captureIndices[0].end;
        if (r.captureIndices[0].end > linePos) {
          linePos = r.captureIndices[0].end;
          isFirstLine = false;
        }
      }
    } else {
      stack = whileRule.stack.pop();
      break;
    }
  }
  return { stack, linePos, anchorPosition, isFirstLine };
}
function matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
  const matchResult = matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
  const injections = grammar.getInjections();
  if (injections.length === 0) {
    return matchResult;
  }
  const injectionResult = matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
  if (!injectionResult) {
    return matchResult;
  }
  if (!matchResult) {
    return injectionResult;
  }
  const matchResultScore = matchResult.captureIndices[0].start;
  const injectionResultScore = injectionResult.captureIndices[0].start;
  if (injectionResultScore < matchResultScore || injectionResult.priorityMatch && injectionResultScore === matchResultScore) {
    return injectionResult;
  }
  return matchResult;
}
function matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
  const rule = stack.getRule(grammar);
  const { ruleScanner, findOptions } = prepareRuleSearch(rule, grammar, stack.endRule, isFirstLine, linePos === anchorPosition);
  const r = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
  if (r) {
    return {
      captureIndices: r.captureIndices,
      matchedRuleId: r.ruleId
    };
  }
  return null;
}
function matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
  let bestMatchRating = Number.MAX_VALUE;
  let bestMatchCaptureIndices = null;
  let bestMatchRuleId;
  let bestMatchResultPriority = 0;
  const scopes = stack.contentNameScopesList.getScopeNames();
  for (let i = 0, len = injections.length; i < len; i++) {
    const injection = injections[i];
    if (!injection.matcher(scopes)) {
      continue;
    }
    const rule = grammar.getRule(injection.ruleId);
    const { ruleScanner, findOptions } = prepareRuleSearch(rule, grammar, null, isFirstLine, linePos === anchorPosition);
    const matchResult = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
    if (!matchResult) {
      continue;
    }
    const matchRating = matchResult.captureIndices[0].start;
    if (matchRating >= bestMatchRating) {
      continue;
    }
    bestMatchRating = matchRating;
    bestMatchCaptureIndices = matchResult.captureIndices;
    bestMatchRuleId = matchResult.ruleId;
    bestMatchResultPriority = injection.priority;
    if (bestMatchRating === linePos) {
      break;
    }
  }
  if (bestMatchCaptureIndices) {
    return {
      priorityMatch: bestMatchResultPriority === -1,
      captureIndices: bestMatchCaptureIndices,
      matchedRuleId: bestMatchRuleId
    };
  }
  return null;
}
function prepareRuleSearch(rule, grammar, endRegexSource, allowA, allowG) {
  const ruleScanner = rule.compileAG(grammar, endRegexSource, allowA, allowG);
  return { ruleScanner, findOptions: 0 /* None */ };
}
function prepareRuleWhileSearch(rule, grammar, endRegexSource, allowA, allowG) {
  const ruleScanner = rule.compileWhileAG(grammar, endRegexSource, allowA, allowG);
  return { ruleScanner, findOptions: 0 /* None */ };
}
function handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, captures, captureIndices) {
  if (captures.length === 0) {
    return;
  }
  const lineTextContent = lineText.content;
  const len = Math.min(captures.length, captureIndices.length);
  const localStack = [];
  const maxEnd = captureIndices[0].end;
  for (let i = 0; i < len; i++) {
    const captureRule = captures[i];
    if (captureRule === null) {
      continue;
    }
    const captureIndex = captureIndices[i];
    if (captureIndex.length === 0) {
      continue;
    }
    if (captureIndex.start > maxEnd) {
      break;
    }
    while (localStack.length > 0 && localStack[localStack.length - 1].endPos <= captureIndex.start) {
      lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
      localStack.pop();
    }
    if (localStack.length > 0) {
      lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, captureIndex.start);
    } else {
      lineTokens.produce(stack, captureIndex.start);
    }
    if (captureRule.retokenizeCapturedWithRuleId) {
      const scopeName = captureRule.getName(lineTextContent, captureIndices);
      const nameScopesList = stack.contentNameScopesList.pushAttributed(scopeName, grammar);
      const contentName = captureRule.getContentName(lineTextContent, captureIndices);
      const contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
      const stackClone = stack.push(captureRule.retokenizeCapturedWithRuleId, captureIndex.start, -1, false, null, nameScopesList, contentNameScopesList);
      const onigSubStr = grammar.createOnigString(lineTextContent.substring(0, captureIndex.end));
      _tokenizeString(
        grammar,
        onigSubStr,
        isFirstLine && captureIndex.start === 0,
        captureIndex.start,
        stackClone,
        lineTokens,
        false,
        /* no time limit */
        0
      );
      disposeOnigString(onigSubStr);
      continue;
    }
    const captureRuleScopeName = captureRule.getName(lineTextContent, captureIndices);
    if (captureRuleScopeName !== null) {
      const base = localStack.length > 0 ? localStack[localStack.length - 1].scopes : stack.contentNameScopesList;
      const captureRuleScopesList = base.pushAttributed(captureRuleScopeName, grammar);
      localStack.push(new LocalStackElement(captureRuleScopesList, captureIndex.end));
    }
  }
  while (localStack.length > 0) {
    lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
    localStack.pop();
  }
}
var LocalStackElement = class {
  scopes;
  endPos;
  constructor(scopes, endPos) {
    this.scopes = scopes;
    this.endPos = endPos;
  }
};

// src/grammar/grammar.ts
function createGrammar(scopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, onigLib) {
  return new Grammar(
    scopeName,
    grammar,
    initialLanguage,
    embeddedLanguages,
    tokenTypes,
    balancedBracketSelectors,
    grammarRepository,
    onigLib
  );
}
function collectInjections(result, selector, rule, ruleFactoryHelper, grammar) {
  const matchers = createMatchers(selector, nameMatcher);
  const ruleId = RuleFactory.getCompiledRuleId(rule, ruleFactoryHelper, grammar.repository);
  for (const matcher of matchers) {
    result.push({
      debugSelector: selector,
      matcher: matcher.matcher,
      ruleId,
      grammar,
      priority: matcher.priority
    });
  }
}
function nameMatcher(identifers, scopes) {
  if (scopes.length < identifers.length) {
    return false;
  }
  let lastIndex = 0;
  return identifers.every((identifier) => {
    for (let i = lastIndex; i < scopes.length; i++) {
      if (scopesAreMatching(scopes[i], identifier)) {
        lastIndex = i + 1;
        return true;
      }
    }
    return false;
  });
}
function scopesAreMatching(thisScopeName, scopeName) {
  if (!thisScopeName) {
    return false;
  }
  if (thisScopeName === scopeName) {
    return true;
  }
  const len = scopeName.length;
  return thisScopeName.length > len && thisScopeName.substr(0, len) === scopeName && thisScopeName[len] === ".";
}
var Grammar = class {
  constructor(_rootScopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, _onigLib) {
    this._rootScopeName = _rootScopeName;
    this.balancedBracketSelectors = balancedBracketSelectors;
    this._onigLib = _onigLib;
    this._basicScopeAttributesProvider = new BasicScopeAttributesProvider(
      initialLanguage,
      embeddedLanguages
    );
    this._rootId = -1;
    this._lastRuleId = 0;
    this._ruleId2desc = [null];
    this._includedGrammars = {};
    this._grammarRepository = grammarRepository;
    this._grammar = initGrammar(grammar, null);
    this._injections = null;
    this._tokenTypeMatchers = [];
    if (tokenTypes) {
      for (const selector of Object.keys(tokenTypes)) {
        const matchers = createMatchers(selector, nameMatcher);
        for (const matcher of matchers) {
          this._tokenTypeMatchers.push({
            matcher: matcher.matcher,
            type: tokenTypes[selector]
          });
        }
      }
    }
  }
  _rootId;
  _lastRuleId;
  _ruleId2desc;
  _includedGrammars;
  _grammarRepository;
  _grammar;
  _injections;
  _basicScopeAttributesProvider;
  _tokenTypeMatchers;
  get themeProvider() {
    return this._grammarRepository;
  }
  dispose() {
    for (const rule of this._ruleId2desc) {
      if (rule) {
        rule.dispose();
      }
    }
  }
  createOnigScanner(sources) {
    return this._onigLib.createOnigScanner(sources);
  }
  createOnigString(sources) {
    return this._onigLib.createOnigString(sources);
  }
  getMetadataForScope(scope) {
    return this._basicScopeAttributesProvider.getBasicScopeAttributes(scope);
  }
  _collectInjections() {
    const grammarRepository = {
      lookup: (scopeName2) => {
        if (scopeName2 === this._rootScopeName) {
          return this._grammar;
        }
        return this.getExternalGrammar(scopeName2);
      },
      injections: (scopeName2) => {
        return this._grammarRepository.injections(scopeName2);
      }
    };
    const result = [];
    const scopeName = this._rootScopeName;
    const grammar = grammarRepository.lookup(scopeName);
    if (grammar) {
      const rawInjections = grammar.injections;
      if (rawInjections) {
        for (let expression in rawInjections) {
          collectInjections(
            result,
            expression,
            rawInjections[expression],
            this,
            grammar
          );
        }
      }
      const injectionScopeNames = this._grammarRepository.injections(scopeName);
      if (injectionScopeNames) {
        injectionScopeNames.forEach((injectionScopeName) => {
          const injectionGrammar = this.getExternalGrammar(injectionScopeName);
          if (injectionGrammar) {
            const selector = injectionGrammar.injectionSelector;
            if (selector) {
              collectInjections(
                result,
                selector,
                injectionGrammar,
                this,
                injectionGrammar
              );
            }
          }
        });
      }
    }
    result.sort((i1, i2) => i1.priority - i2.priority);
    return result;
  }
  getInjections() {
    if (this._injections === null) {
      this._injections = this._collectInjections();
    }
    return this._injections;
  }
  registerRule(factory) {
    const id = ++this._lastRuleId;
    const result = factory(ruleIdFromNumber(id));
    this._ruleId2desc[id] = result;
    return result;
  }
  getRule(ruleId) {
    return this._ruleId2desc[ruleIdToNumber(ruleId)];
  }
  getExternalGrammar(scopeName, repository) {
    if (this._includedGrammars[scopeName]) {
      return this._includedGrammars[scopeName];
    } else if (this._grammarRepository) {
      const rawIncludedGrammar = this._grammarRepository.lookup(scopeName);
      if (rawIncludedGrammar) {
        this._includedGrammars[scopeName] = initGrammar(
          rawIncludedGrammar,
          repository && repository.$base
        );
        return this._includedGrammars[scopeName];
      }
    }
    return undefined;
  }
  tokenizeLine(lineText, prevState, timeLimit = 0) {
    const r = this._tokenize(lineText, prevState, false, timeLimit);
    return {
      tokens: r.lineTokens.getResult(r.ruleStack, r.lineLength),
      ruleStack: r.ruleStack,
      stoppedEarly: r.stoppedEarly
    };
  }
  tokenizeLine2(lineText, prevState, timeLimit = 0) {
    const r = this._tokenize(lineText, prevState, true, timeLimit);
    return {
      tokens: r.lineTokens.getBinaryResult(r.ruleStack, r.lineLength),
      ruleStack: r.ruleStack,
      stoppedEarly: r.stoppedEarly
    };
  }
  _tokenize(lineText, prevState, emitBinaryTokens, timeLimit) {
    if (this._rootId === -1) {
      this._rootId = RuleFactory.getCompiledRuleId(
        this._grammar.repository.$self,
        this,
        this._grammar.repository
      );
      this.getInjections();
    }
    let isFirstLine;
    if (!prevState || prevState === StateStackImpl.NULL) {
      isFirstLine = true;
      const rawDefaultMetadata = this._basicScopeAttributesProvider.getDefaultAttributes();
      const defaultStyle = this.themeProvider.getDefaults();
      const defaultMetadata = EncodedTokenMetadata.set(
        0,
        rawDefaultMetadata.languageId,
        rawDefaultMetadata.tokenType,
        null,
        defaultStyle.fontStyle,
        defaultStyle.foregroundId,
        defaultStyle.backgroundId
      );
      const rootScopeName = this.getRule(this._rootId).getName(
        null,
        null
      );
      let scopeList;
      if (rootScopeName) {
        scopeList = AttributedScopeStack.createRootAndLookUpScopeName(
          rootScopeName,
          defaultMetadata,
          this
        );
      } else {
        scopeList = AttributedScopeStack.createRoot(
          "unknown",
          defaultMetadata
        );
      }
      prevState = new StateStackImpl(
        null,
        this._rootId,
        -1,
        -1,
        false,
        null,
        scopeList,
        scopeList
      );
    } else {
      isFirstLine = false;
      prevState.reset();
    }
    lineText = lineText + "\n";
    const onigLineText = this.createOnigString(lineText);
    const lineLength = onigLineText.content.length;
    const lineTokens = new LineTokens(
      emitBinaryTokens,
      lineText,
      this._tokenTypeMatchers,
      this.balancedBracketSelectors
    );
    const r = _tokenizeString(
      this,
      onigLineText,
      isFirstLine,
      0,
      prevState,
      lineTokens,
      true,
      timeLimit
    );
    disposeOnigString(onigLineText);
    return {
      lineLength,
      lineTokens,
      ruleStack: r.stack,
      stoppedEarly: r.stoppedEarly
    };
  }
};
function initGrammar(grammar, base) {
  grammar = clone(grammar);
  grammar.repository = grammar.repository || {};
  grammar.repository.$self = {
    $vscodeTextmateLocation: grammar.$vscodeTextmateLocation,
    patterns: grammar.patterns,
    name: grammar.scopeName
  };
  grammar.repository.$base = base || grammar.repository.$self;
  return grammar;
}
var AttributedScopeStack = class _AttributedScopeStack {
  /**
   * Invariant:
   * ```
   * if (parent && !scopePath.extends(parent.scopePath)) {
   * 	throw new Error();
   * }
   * ```
   */
  constructor(parent, scopePath, tokenAttributes) {
    this.parent = parent;
    this.scopePath = scopePath;
    this.tokenAttributes = tokenAttributes;
  }
  static fromExtension(namesScopeList, contentNameScopesList) {
    let current = namesScopeList;
    let scopeNames = namesScopeList?.scopePath ?? null;
    for (const frame of contentNameScopesList) {
      scopeNames = ScopeStack.push(scopeNames, frame.scopeNames);
      current = new _AttributedScopeStack(current, scopeNames, frame.encodedTokenAttributes);
    }
    return current;
  }
  static createRoot(scopeName, tokenAttributes) {
    return new _AttributedScopeStack(null, new ScopeStack(null, scopeName), tokenAttributes);
  }
  static createRootAndLookUpScopeName(scopeName, tokenAttributes, grammar) {
    const rawRootMetadata = grammar.getMetadataForScope(scopeName);
    const scopePath = new ScopeStack(null, scopeName);
    const rootStyle = grammar.themeProvider.themeMatch(scopePath);
    const resolvedTokenAttributes = _AttributedScopeStack.mergeAttributes(
      tokenAttributes,
      rawRootMetadata,
      rootStyle
    );
    return new _AttributedScopeStack(null, scopePath, resolvedTokenAttributes);
  }
  get scopeName() {
    return this.scopePath.scopeName;
  }
  toString() {
    return this.getScopeNames().join(" ");
  }
  equals(other) {
    return _AttributedScopeStack.equals(this, other);
  }
  static equals(a, b) {
    do {
      if (a === b) {
        return true;
      }
      if (!a && !b) {
        return true;
      }
      if (!a || !b) {
        return false;
      }
      if (a.scopeName !== b.scopeName || a.tokenAttributes !== b.tokenAttributes) {
        return false;
      }
      a = a.parent;
      b = b.parent;
    } while (true);
  }
  static mergeAttributes(existingTokenAttributes, basicScopeAttributes, styleAttributes) {
    let fontStyle = -1 /* NotSet */;
    let foreground = 0;
    let background = 0;
    if (styleAttributes !== null) {
      fontStyle = styleAttributes.fontStyle;
      foreground = styleAttributes.foregroundId;
      background = styleAttributes.backgroundId;
    }
    return EncodedTokenMetadata.set(
      existingTokenAttributes,
      basicScopeAttributes.languageId,
      basicScopeAttributes.tokenType,
      null,
      fontStyle,
      foreground,
      background
    );
  }
  pushAttributed(scopePath, grammar) {
    if (scopePath === null) {
      return this;
    }
    if (scopePath.indexOf(" ") === -1) {
      return _AttributedScopeStack._pushAttributed(this, scopePath, grammar);
    }
    const scopes = scopePath.split(/ /g);
    let result = this;
    for (const scope of scopes) {
      result = _AttributedScopeStack._pushAttributed(result, scope, grammar);
    }
    return result;
  }
  static _pushAttributed(target, scopeName, grammar) {
    const rawMetadata = grammar.getMetadataForScope(scopeName);
    const newPath = target.scopePath.push(scopeName);
    const scopeThemeMatchResult = grammar.themeProvider.themeMatch(newPath);
    const metadata = _AttributedScopeStack.mergeAttributes(
      target.tokenAttributes,
      rawMetadata,
      scopeThemeMatchResult
    );
    return new _AttributedScopeStack(target, newPath, metadata);
  }
  getScopeNames() {
    return this.scopePath.getSegments();
  }
  getExtensionIfDefined(base) {
    const result = [];
    let self = this;
    while (self && self !== base) {
      result.push({
        encodedTokenAttributes: self.tokenAttributes,
        scopeNames: self.scopePath.getExtensionIfDefined(self.parent?.scopePath ?? null)
      });
      self = self.parent;
    }
    return self === base ? result.reverse() : undefined;
  }
};
var StateStackImpl = class _StateStackImpl {
  /**
   * Invariant:
   * ```
   * if (contentNameScopesList !== nameScopesList && contentNameScopesList?.parent !== nameScopesList) {
   * 	throw new Error();
   * }
   * if (this.parent && !nameScopesList.extends(this.parent.contentNameScopesList)) {
   * 	throw new Error();
   * }
   * ```
   */
  constructor(parent, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
    this.parent = parent;
    this.ruleId = ruleId;
    this.beginRuleCapturedEOL = beginRuleCapturedEOL;
    this.endRule = endRule;
    this.nameScopesList = nameScopesList;
    this.contentNameScopesList = contentNameScopesList;
    this.depth = this.parent ? this.parent.depth + 1 : 1;
    this._enterPos = enterPos;
    this._anchorPos = anchorPos;
  }
  _stackElementBrand = undefined;
  // TODO remove me
  static NULL = new _StateStackImpl(
    null,
    0,
    0,
    0,
    false,
    null,
    null,
    null
  );
  /**
   * The position on the current line where this state was pushed.
   * This is relevant only while tokenizing a line, to detect endless loops.
   * Its value is meaningless across lines.
   */
  _enterPos;
  /**
   * The captured anchor position when this stack element was pushed.
   * This is relevant only while tokenizing a line, to restore the anchor position when popping.
   * Its value is meaningless across lines.
   */
  _anchorPos;
  /**
   * The depth of the stack.
   */
  depth;
  equals(other) {
    if (other === null) {
      return false;
    }
    return _StateStackImpl._equals(this, other);
  }
  static _equals(a, b) {
    if (a === b) {
      return true;
    }
    if (!this._structuralEquals(a, b)) {
      return false;
    }
    return AttributedScopeStack.equals(a.contentNameScopesList, b.contentNameScopesList);
  }
  /**
   * A structural equals check. Does not take into account `scopes`.
   */
  static _structuralEquals(a, b) {
    do {
      if (a === b) {
        return true;
      }
      if (!a && !b) {
        return true;
      }
      if (!a || !b) {
        return false;
      }
      if (a.depth !== b.depth || a.ruleId !== b.ruleId || a.endRule !== b.endRule) {
        return false;
      }
      a = a.parent;
      b = b.parent;
    } while (true);
  }
  clone() {
    return this;
  }
  static _reset(el) {
    while (el) {
      el._enterPos = -1;
      el._anchorPos = -1;
      el = el.parent;
    }
  }
  reset() {
    _StateStackImpl._reset(this);
  }
  pop() {
    return this.parent;
  }
  safePop() {
    if (this.parent) {
      return this.parent;
    }
    return this;
  }
  push(ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
    return new _StateStackImpl(
      this,
      ruleId,
      enterPos,
      anchorPos,
      beginRuleCapturedEOL,
      endRule,
      nameScopesList,
      contentNameScopesList
    );
  }
  getEnterPos() {
    return this._enterPos;
  }
  getAnchorPos() {
    return this._anchorPos;
  }
  getRule(grammar) {
    return grammar.getRule(this.ruleId);
  }
  toString() {
    const r = [];
    this._writeString(r, 0);
    return "[" + r.join(",") + "]";
  }
  _writeString(res, outIndex) {
    if (this.parent) {
      outIndex = this.parent._writeString(res, outIndex);
    }
    res[outIndex++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`;
    return outIndex;
  }
  withContentNameScopesList(contentNameScopeStack) {
    if (this.contentNameScopesList === contentNameScopeStack) {
      return this;
    }
    return this.parent.push(
      this.ruleId,
      this._enterPos,
      this._anchorPos,
      this.beginRuleCapturedEOL,
      this.endRule,
      this.nameScopesList,
      contentNameScopeStack
    );
  }
  withEndRule(endRule) {
    if (this.endRule === endRule) {
      return this;
    }
    return new _StateStackImpl(
      this.parent,
      this.ruleId,
      this._enterPos,
      this._anchorPos,
      this.beginRuleCapturedEOL,
      endRule,
      this.nameScopesList,
      this.contentNameScopesList
    );
  }
  // Used to warn of endless loops
  hasSameRuleAs(other) {
    let el = this;
    while (el && el._enterPos === other._enterPos) {
      if (el.ruleId === other.ruleId) {
        return true;
      }
      el = el.parent;
    }
    return false;
  }
  toStateStackFrame() {
    return {
      ruleId: ruleIdToNumber(this.ruleId),
      beginRuleCapturedEOL: this.beginRuleCapturedEOL,
      endRule: this.endRule,
      nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [],
      contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? []
    };
  }
  static pushFrame(self, frame) {
    const namesScopeList = AttributedScopeStack.fromExtension(self?.nameScopesList ?? null, frame.nameScopesList);
    return new _StateStackImpl(
      self,
      ruleIdFromNumber(frame.ruleId),
      frame.enterPos ?? -1,
      frame.anchorPos ?? -1,
      frame.beginRuleCapturedEOL,
      frame.endRule,
      namesScopeList,
      AttributedScopeStack.fromExtension(namesScopeList, frame.contentNameScopesList)
    );
  }
};
var BalancedBracketSelectors = class {
  balancedBracketScopes;
  unbalancedBracketScopes;
  allowAny = false;
  constructor(balancedBracketScopes, unbalancedBracketScopes) {
    this.balancedBracketScopes = balancedBracketScopes.flatMap(
      (selector) => {
        if (selector === "*") {
          this.allowAny = true;
          return [];
        }
        return createMatchers(selector, nameMatcher).map((m) => m.matcher);
      }
    );
    this.unbalancedBracketScopes = unbalancedBracketScopes.flatMap(
      (selector) => createMatchers(selector, nameMatcher).map((m) => m.matcher)
    );
  }
  get matchesAlways() {
    return this.allowAny && this.unbalancedBracketScopes.length === 0;
  }
  get matchesNever() {
    return this.balancedBracketScopes.length === 0 && !this.allowAny;
  }
  match(scopes) {
    for (const excluder of this.unbalancedBracketScopes) {
      if (excluder(scopes)) {
        return false;
      }
    }
    for (const includer of this.balancedBracketScopes) {
      if (includer(scopes)) {
        return true;
      }
    }
    return this.allowAny;
  }
};
var LineTokens = class {
  constructor(emitBinaryTokens, lineText, tokenTypeOverrides, balancedBracketSelectors) {
    this.balancedBracketSelectors = balancedBracketSelectors;
    this._emitBinaryTokens = emitBinaryTokens;
    this._tokenTypeOverrides = tokenTypeOverrides;
    {
      this._lineText = null;
    }
    this._tokens = [];
    this._binaryTokens = [];
    this._lastTokenEndIndex = 0;
  }
  _emitBinaryTokens;
  /**
   * defined only if `false`.
   */
  _lineText;
  /**
   * used only if `_emitBinaryTokens` is false.
   */
  _tokens;
  /**
   * used only if `_emitBinaryTokens` is true.
   */
  _binaryTokens;
  _lastTokenEndIndex;
  _tokenTypeOverrides;
  produce(stack, endIndex) {
    this.produceFromScopes(stack.contentNameScopesList, endIndex);
  }
  produceFromScopes(scopesList, endIndex) {
    if (this._lastTokenEndIndex >= endIndex) {
      return;
    }
    if (this._emitBinaryTokens) {
      let metadata = scopesList?.tokenAttributes ?? 0;
      let containsBalancedBrackets = false;
      if (this.balancedBracketSelectors?.matchesAlways) {
        containsBalancedBrackets = true;
      }
      if (this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
        const scopes2 = scopesList?.getScopeNames() ?? [];
        for (const tokenType of this._tokenTypeOverrides) {
          if (tokenType.matcher(scopes2)) {
            metadata = EncodedTokenMetadata.set(
              metadata,
              0,
              toOptionalTokenType(tokenType.type),
              null,
              -1 /* NotSet */,
              0,
              0
            );
          }
        }
        if (this.balancedBracketSelectors) {
          containsBalancedBrackets = this.balancedBracketSelectors.match(scopes2);
        }
      }
      if (containsBalancedBrackets) {
        metadata = EncodedTokenMetadata.set(
          metadata,
          0,
          8 /* NotSet */,
          containsBalancedBrackets,
          -1 /* NotSet */,
          0,
          0
        );
      }
      if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === metadata) {
        this._lastTokenEndIndex = endIndex;
        return;
      }
      this._binaryTokens.push(this._lastTokenEndIndex);
      this._binaryTokens.push(metadata);
      this._lastTokenEndIndex = endIndex;
      return;
    }
    const scopes = scopesList?.getScopeNames() ?? [];
    this._tokens.push({
      startIndex: this._lastTokenEndIndex,
      endIndex,
      // value: lineText.substring(lastTokenEndIndex, endIndex),
      scopes
    });
    this._lastTokenEndIndex = endIndex;
  }
  getResult(stack, lineLength) {
    if (this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === lineLength - 1) {
      this._tokens.pop();
    }
    if (this._tokens.length === 0) {
      this._lastTokenEndIndex = -1;
      this.produce(stack, lineLength);
      this._tokens[this._tokens.length - 1].startIndex = 0;
    }
    return this._tokens;
  }
  getBinaryResult(stack, lineLength) {
    if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === lineLength - 1) {
      this._binaryTokens.pop();
      this._binaryTokens.pop();
    }
    if (this._binaryTokens.length === 0) {
      this._lastTokenEndIndex = -1;
      this.produce(stack, lineLength);
      this._binaryTokens[this._binaryTokens.length - 2] = 0;
    }
    const result = new Uint32Array(this._binaryTokens.length);
    for (let i = 0, len = this._binaryTokens.length; i < len; i++) {
      result[i] = this._binaryTokens[i];
    }
    return result;
  }
};

// src/registry.ts
var SyncRegistry = class {
  constructor(theme, _onigLib) {
    this._onigLib = _onigLib;
    this._theme = theme;
  }
  _grammars = /* @__PURE__ */ new Map();
  _rawGrammars = /* @__PURE__ */ new Map();
  _injectionGrammars = /* @__PURE__ */ new Map();
  _theme;
  dispose() {
    for (const grammar of this._grammars.values()) {
      grammar.dispose();
    }
  }
  setTheme(theme) {
    this._theme = theme;
  }
  getColorMap() {
    return this._theme.getColorMap();
  }
  /**
   * Add `grammar` to registry and return a list of referenced scope names
   */
  addGrammar(grammar, injectionScopeNames) {
    this._rawGrammars.set(grammar.scopeName, grammar);
    if (injectionScopeNames) {
      this._injectionGrammars.set(grammar.scopeName, injectionScopeNames);
    }
  }
  /**
   * Lookup a raw grammar.
   */
  lookup(scopeName) {
    return this._rawGrammars.get(scopeName);
  }
  /**
   * Returns the injections for the given grammar
   */
  injections(targetScope) {
    return this._injectionGrammars.get(targetScope);
  }
  /**
   * Get the default theme settings
   */
  getDefaults() {
    return this._theme.getDefaults();
  }
  /**
   * Match a scope in the theme.
   */
  themeMatch(scopePath) {
    return this._theme.match(scopePath);
  }
  /**
   * Lookup a grammar.
   */
  grammarForScopeName(scopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
    if (!this._grammars.has(scopeName)) {
      let rawGrammar = this._rawGrammars.get(scopeName);
      if (!rawGrammar) {
        return null;
      }
      this._grammars.set(scopeName, createGrammar(
        scopeName,
        rawGrammar,
        initialLanguage,
        embeddedLanguages,
        tokenTypes,
        balancedBracketSelectors,
        this,
        this._onigLib
      ));
    }
    return this._grammars.get(scopeName);
  }
};

// src/index.ts
var Registry$1 = class Registry {
  _options;
  _syncRegistry;
  _ensureGrammarCache;
  constructor(options) {
    this._options = options;
    this._syncRegistry = new SyncRegistry(
      Theme.createFromRawTheme(options.theme, options.colorMap),
      options.onigLib
    );
    this._ensureGrammarCache = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._syncRegistry.dispose();
  }
  /**
   * Change the theme. Once called, no previous `ruleStack` should be used anymore.
   */
  setTheme(theme, colorMap) {
    this._syncRegistry.setTheme(Theme.createFromRawTheme(theme, colorMap));
  }
  /**
   * Returns a lookup array for color ids.
   */
  getColorMap() {
    return this._syncRegistry.getColorMap();
  }
  /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   * Please do not use language id 0.
   */
  loadGrammarWithEmbeddedLanguages(initialScopeName, initialLanguage, embeddedLanguages) {
    return this.loadGrammarWithConfiguration(initialScopeName, initialLanguage, { embeddedLanguages });
  }
  /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   * Please do not use language id 0.
   */
  loadGrammarWithConfiguration(initialScopeName, initialLanguage, configuration) {
    return this._loadGrammar(
      initialScopeName,
      initialLanguage,
      configuration.embeddedLanguages,
      configuration.tokenTypes,
      new BalancedBracketSelectors(
        configuration.balancedBracketSelectors || [],
        configuration.unbalancedBracketSelectors || []
      )
    );
  }
  /**
   * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
   */
  loadGrammar(initialScopeName) {
    return this._loadGrammar(initialScopeName, 0, null, null, null);
  }
  _loadGrammar(initialScopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
    const dependencyProcessor = new ScopeDependencyProcessor(this._syncRegistry, initialScopeName);
    while (dependencyProcessor.Q.length > 0) {
      dependencyProcessor.Q.map((request) => this._loadSingleGrammar(request.scopeName));
      dependencyProcessor.processQueue();
    }
    return this._grammarForScopeName(
      initialScopeName,
      initialLanguage,
      embeddedLanguages,
      tokenTypes,
      balancedBracketSelectors
    );
  }
  _loadSingleGrammar(scopeName) {
    if (!this._ensureGrammarCache.has(scopeName)) {
      this._doLoadSingleGrammar(scopeName);
      this._ensureGrammarCache.set(scopeName, true);
    }
  }
  _doLoadSingleGrammar(scopeName) {
    const grammar = this._options.loadGrammar(scopeName);
    if (grammar) {
      const injections = typeof this._options.getInjections === "function" ? this._options.getInjections(scopeName) : undefined;
      this._syncRegistry.addGrammar(grammar, injections);
    }
  }
  /**
   * Adds a rawGrammar.
   */
  addGrammar(rawGrammar, injections = [], initialLanguage = 0, embeddedLanguages = null) {
    this._syncRegistry.addGrammar(rawGrammar, injections);
    return this._grammarForScopeName(rawGrammar.scopeName, initialLanguage, embeddedLanguages);
  }
  /**
   * Get the grammar for `scopeName`. The grammar must first be created via `loadGrammar` or `addGrammar`.
   */
  _grammarForScopeName(scopeName, initialLanguage = 0, embeddedLanguages = null, tokenTypes = null, balancedBracketSelectors = null) {
    return this._syncRegistry.grammarForScopeName(
      scopeName,
      initialLanguage,
      embeddedLanguages,
      tokenTypes,
      balancedBracketSelectors
    );
  }
};
var INITIAL = StateStackImpl.NULL;

function toArray(x) {
  return Array.isArray(x) ? x : [x];
}
function splitLines(code, preserveEnding = false) {
  const parts = code.split(/(\r?\n)/g);
  let index = 0;
  const lines = [];
  for (let i = 0; i < parts.length; i += 2) {
    const line = preserveEnding ? parts[i] + (parts[i + 1] || "") : parts[i];
    lines.push([line, index]);
    index += parts[i].length;
    index += parts[i + 1]?.length || 0;
  }
  return lines;
}
function isPlainLang(lang) {
  return !lang || ["plaintext", "txt", "text", "plain"].includes(lang);
}
function isSpecialLang(lang) {
  return lang === "ansi" || isPlainLang(lang);
}
function isNoneTheme(theme) {
  return theme === "none";
}
function isSpecialTheme(theme) {
  return isNoneTheme(theme);
}
function addClassToHast(node, className) {
  if (!className)
    return node;
  node.properties ||= {};
  node.properties.class ||= [];
  if (typeof node.properties.class === "string")
    node.properties.class = node.properties.class.split(/\s+/g);
  if (!Array.isArray(node.properties.class))
    node.properties.class = [];
  const targets = Array.isArray(className) ? className : className.split(/\s+/g);
  for (const c of targets) {
    if (c && !node.properties.class.includes(c))
      node.properties.class.push(c);
  }
  return node;
}
function splitToken(token, offsets) {
  let lastOffset = 0;
  const tokens = [];
  for (const offset of offsets) {
    if (offset > lastOffset) {
      tokens.push({
        ...token,
        content: token.content.slice(lastOffset, offset),
        offset: token.offset + lastOffset
      });
    }
    lastOffset = offset;
  }
  if (lastOffset < token.content.length) {
    tokens.push({
      ...token,
      content: token.content.slice(lastOffset),
      offset: token.offset + lastOffset
    });
  }
  return tokens;
}
function splitTokens(tokens, breakpoints) {
  const sorted = Array.from(breakpoints instanceof Set ? breakpoints : new Set(breakpoints)).sort((a, b) => a - b);
  if (!sorted.length)
    return tokens;
  return tokens.map((line) => {
    return line.flatMap((token) => {
      const breakpointsInToken = sorted.filter((i) => token.offset < i && i < token.offset + token.content.length).map((i) => i - token.offset).sort((a, b) => a - b);
      if (!breakpointsInToken.length)
        return token;
      return splitToken(token, breakpointsInToken);
    });
  });
}
async function normalizeGetter(p) {
  return Promise.resolve(typeof p === "function" ? p() : p).then((r) => r.default || r);
}
function resolveColorReplacements(theme, options) {
  const replacements = typeof theme === "string" ? {} : { ...theme.colorReplacements };
  const themeName = typeof theme === "string" ? theme : theme.name;
  for (const [key, value] of Object.entries(options?.colorReplacements || {})) {
    if (typeof value === "string")
      replacements[key] = value;
    else if (key === themeName)
      Object.assign(replacements, value);
  }
  return replacements;
}
function applyColorReplacements(color, replacements) {
  if (!color)
    return color;
  return replacements?.[color?.toLowerCase()] || color;
}
function getTokenStyleObject(token) {
  const styles = {};
  if (token.color)
    styles.color = token.color;
  if (token.bgColor)
    styles["background-color"] = token.bgColor;
  if (token.fontStyle) {
    if (token.fontStyle & FontStyle.Italic)
      styles["font-style"] = "italic";
    if (token.fontStyle & FontStyle.Bold)
      styles["font-weight"] = "bold";
    if (token.fontStyle & FontStyle.Underline)
      styles["text-decoration"] = "underline";
  }
  return styles;
}
function stringifyTokenStyle(token) {
  if (typeof token === "string")
    return token;
  return Object.entries(token).map(([key, value]) => `${key}:${value}`).join(";");
}
function createPositionConverter(code) {
  const lines = splitLines(code, true).map(([line]) => line);
  function indexToPos(index) {
    if (index === code.length) {
      return {
        line: lines.length - 1,
        character: lines[lines.length - 1].length
      };
    }
    let character = index;
    let line = 0;
    for (const lineText of lines) {
      if (character < lineText.length)
        break;
      character -= lineText.length;
      line++;
    }
    return { line, character };
  }
  function posToIndex(line, character) {
    let index = 0;
    for (let i = 0; i < line; i++)
      index += lines[i].length;
    index += character;
    return index;
  }
  return {
    lines,
    indexToPos,
    posToIndex
  };
}

class ShikiError extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
}

const _grammarStateMap = /* @__PURE__ */ new WeakMap();
function setLastGrammarStateToMap(keys, state) {
  _grammarStateMap.set(keys, state);
}
function getLastGrammarStateFromMap(keys) {
  return _grammarStateMap.get(keys);
}
class GrammarState {
  /**
   * Theme to Stack mapping
   */
  _stacks = {};
  lang;
  get themes() {
    return Object.keys(this._stacks);
  }
  get theme() {
    return this.themes[0];
  }
  get _stack() {
    return this._stacks[this.theme];
  }
  /**
   * Static method to create a initial grammar state.
   */
  static initial(lang, themes) {
    return new GrammarState(
      Object.fromEntries(toArray(themes).map((theme) => [theme, INITIAL])),
      lang
    );
  }
  constructor(...args) {
    if (args.length === 2) {
      const [stacksMap, lang] = args;
      this.lang = lang;
      this._stacks = stacksMap;
    } else {
      const [stack, lang, theme] = args;
      this.lang = lang;
      this._stacks = { [theme]: stack };
    }
  }
  /**
   * Get the internal stack object.
   * @internal
   */
  getInternalStack(theme = this.theme) {
    return this._stacks[theme];
  }
  /**
   * @deprecated use `getScopes` instead
   */
  get scopes() {
    return getScopes(this._stacks[this.theme]);
  }
  getScopes(theme = this.theme) {
    return getScopes(this._stacks[theme]);
  }
  toJSON() {
    return {
      lang: this.lang,
      theme: this.theme,
      themes: this.themes,
      scopes: this.scopes
    };
  }
}
function getScopes(stack) {
  const scopes = [];
  const visited = /* @__PURE__ */ new Set();
  function pushScope(stack2) {
    if (visited.has(stack2))
      return;
    visited.add(stack2);
    const name = stack2?.nameScopesList?.scopeName;
    if (name)
      scopes.push(name);
    if (stack2.parent)
      pushScope(stack2.parent);
  }
  pushScope(stack);
  return scopes;
}
function getGrammarStack(state, theme) {
  if (!(state instanceof GrammarState))
    throw new ShikiError("Invalid grammar state");
  return state.getInternalStack(theme);
}

function transformerDecorations() {
  const map = /* @__PURE__ */ new WeakMap();
  function getContext(shiki) {
    if (!map.has(shiki.meta)) {
      let normalizePosition = function(p) {
        if (typeof p === "number") {
          if (p < 0 || p > shiki.source.length)
            throw new ShikiError(`Invalid decoration offset: ${p}. Code length: ${shiki.source.length}`);
          return {
            ...converter.indexToPos(p),
            offset: p
          };
        } else {
          const line = converter.lines[p.line];
          if (line === undefined)
            throw new ShikiError(`Invalid decoration position ${JSON.stringify(p)}. Lines length: ${converter.lines.length}`);
          if (p.character < 0 || p.character > line.length)
            throw new ShikiError(`Invalid decoration position ${JSON.stringify(p)}. Line ${p.line} length: ${line.length}`);
          return {
            ...p,
            offset: converter.posToIndex(p.line, p.character)
          };
        }
      };
      const converter = createPositionConverter(shiki.source);
      const decorations = (shiki.options.decorations || []).map((d) => ({
        ...d,
        start: normalizePosition(d.start),
        end: normalizePosition(d.end)
      }));
      verifyIntersections(decorations);
      map.set(shiki.meta, {
        decorations,
        converter,
        source: shiki.source
      });
    }
    return map.get(shiki.meta);
  }
  return {
    name: "shiki:decorations",
    tokens(tokens) {
      if (!this.options.decorations?.length)
        return;
      const ctx = getContext(this);
      const breakpoints = ctx.decorations.flatMap((d) => [d.start.offset, d.end.offset]);
      const splitted = splitTokens(tokens, breakpoints);
      return splitted;
    },
    code(codeEl) {
      if (!this.options.decorations?.length)
        return;
      const ctx = getContext(this);
      const lines = Array.from(codeEl.children).filter((i) => i.type === "element" && i.tagName === "span");
      if (lines.length !== ctx.converter.lines.length)
        throw new ShikiError(`Number of lines in code element (${lines.length}) does not match the number of lines in the source (${ctx.converter.lines.length}). Failed to apply decorations.`);
      function applyLineSection(line, start, end, decoration) {
        const lineEl = lines[line];
        let text = "";
        let startIndex = -1;
        let endIndex = -1;
        if (start === 0)
          startIndex = 0;
        if (end === 0)
          endIndex = 0;
        if (end === Number.POSITIVE_INFINITY)
          endIndex = lineEl.children.length;
        if (startIndex === -1 || endIndex === -1) {
          for (let i = 0; i < lineEl.children.length; i++) {
            text += stringify(lineEl.children[i]);
            if (startIndex === -1 && text.length === start)
              startIndex = i + 1;
            if (endIndex === -1 && text.length === end)
              endIndex = i + 1;
          }
        }
        if (startIndex === -1)
          throw new ShikiError(`Failed to find start index for decoration ${JSON.stringify(decoration.start)}`);
        if (endIndex === -1)
          throw new ShikiError(`Failed to find end index for decoration ${JSON.stringify(decoration.end)}`);
        const children = lineEl.children.slice(startIndex, endIndex);
        if (!decoration.alwaysWrap && children.length === lineEl.children.length) {
          applyDecoration(lineEl, decoration, "line");
        } else if (!decoration.alwaysWrap && children.length === 1 && children[0].type === "element") {
          applyDecoration(children[0], decoration, "token");
        } else {
          const wrapper = {
            type: "element",
            tagName: "span",
            properties: {},
            children
          };
          applyDecoration(wrapper, decoration, "wrapper");
          lineEl.children.splice(startIndex, children.length, wrapper);
        }
      }
      function applyLine(line, decoration) {
        lines[line] = applyDecoration(lines[line], decoration, "line");
      }
      function applyDecoration(el, decoration, type) {
        const properties = decoration.properties || {};
        const transform = decoration.transform || ((i) => i);
        el.tagName = decoration.tagName || "span";
        el.properties = {
          ...el.properties,
          ...properties,
          class: el.properties.class
        };
        if (decoration.properties?.class)
          addClassToHast(el, decoration.properties.class);
        el = transform(el, type) || el;
        return el;
      }
      const lineApplies = [];
      const sorted = ctx.decorations.sort((a, b) => b.start.offset - a.start.offset);
      for (const decoration of sorted) {
        const { start, end } = decoration;
        if (start.line === end.line) {
          applyLineSection(start.line, start.character, end.character, decoration);
        } else if (start.line < end.line) {
          applyLineSection(start.line, start.character, Number.POSITIVE_INFINITY, decoration);
          for (let i = start.line + 1; i < end.line; i++)
            lineApplies.unshift(() => applyLine(i, decoration));
          applyLineSection(end.line, 0, end.character, decoration);
        }
      }
      lineApplies.forEach((i) => i());
    }
  };
}
function verifyIntersections(items) {
  for (let i = 0; i < items.length; i++) {
    const foo = items[i];
    if (foo.start.offset > foo.end.offset)
      throw new ShikiError(`Invalid decoration range: ${JSON.stringify(foo.start)} - ${JSON.stringify(foo.end)}`);
    for (let j = i + 1; j < items.length; j++) {
      const bar = items[j];
      const isFooHasBarStart = foo.start.offset < bar.start.offset && bar.start.offset < foo.end.offset;
      const isFooHasBarEnd = foo.start.offset < bar.end.offset && bar.end.offset < foo.end.offset;
      const isBarHasFooStart = bar.start.offset < foo.start.offset && foo.start.offset < bar.end.offset;
      const isBarHasFooEnd = bar.start.offset < foo.end.offset && foo.end.offset < bar.end.offset;
      if (isFooHasBarStart || isFooHasBarEnd || isBarHasFooStart || isBarHasFooEnd) {
        if (isFooHasBarEnd && isFooHasBarEnd)
          continue;
        if (isBarHasFooStart && isBarHasFooEnd)
          continue;
        throw new ShikiError(`Decorations ${JSON.stringify(foo.start)} and ${JSON.stringify(bar.start)} intersect.`);
      }
    }
  }
}
function stringify(el) {
  if (el.type === "text")
    return el.value;
  if (el.type === "element")
    return el.children.map(stringify).join("");
  return "";
}

const builtInTransformers = [
  /* @__PURE__ */ transformerDecorations()
];
function getTransformers(options) {
  return [
    ...options.transformers || [],
    ...builtInTransformers
  ];
}

// src/colors.ts
var namedColors = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "brightBlack",
  "brightRed",
  "brightGreen",
  "brightYellow",
  "brightBlue",
  "brightMagenta",
  "brightCyan",
  "brightWhite"
];

// src/decorations.ts
var decorations = {
  1: "bold",
  2: "dim",
  3: "italic",
  4: "underline",
  7: "reverse",
  9: "strikethrough"
};

// src/parser.ts
function findSequence(value, position) {
  const nextEscape = value.indexOf("\x1B[", position);
  if (nextEscape !== -1) {
    const nextClose = value.indexOf("m", nextEscape);
    return {
      sequence: value.substring(nextEscape + 2, nextClose).split(";"),
      startPosition: nextEscape,
      position: nextClose + 1
    };
  }
  return {
    position: value.length
  };
}
function parseColor(sequence, index) {
  let offset = 1;
  const colorMode = sequence[index + offset++];
  let color;
  if (colorMode === "2") {
    const rgb = [
      sequence[index + offset++],
      sequence[index + offset++],
      sequence[index + offset]
    ].map((x) => Number.parseInt(x));
    if (rgb.length === 3 && !rgb.some((x) => Number.isNaN(x))) {
      color = {
        type: "rgb",
        rgb
      };
    }
  } else if (colorMode === "5") {
    const colorIndex = Number.parseInt(sequence[index + offset]);
    if (!Number.isNaN(colorIndex)) {
      color = { type: "table", index: Number(colorIndex) };
    }
  }
  return [offset, color];
}
function parseSequence(sequence) {
  const commands = [];
  for (let i = 0; i < sequence.length; i++) {
    const code = sequence[i];
    const codeInt = Number.parseInt(code);
    if (Number.isNaN(codeInt))
      continue;
    if (codeInt === 0) {
      commands.push({ type: "resetAll" });
    } else if (codeInt <= 9) {
      const decoration = decorations[codeInt];
      if (decoration) {
        commands.push({
          type: "setDecoration",
          value: decorations[codeInt]
        });
      }
    } else if (codeInt <= 29) {
      const decoration = decorations[codeInt - 20];
      if (decoration) {
        commands.push({
          type: "resetDecoration",
          value: decoration
        });
      }
    } else if (codeInt <= 37) {
      commands.push({
        type: "setForegroundColor",
        value: { type: "named", name: namedColors[codeInt - 30] }
      });
    } else if (codeInt === 38) {
      const [offset, color] = parseColor(sequence, i);
      if (color) {
        commands.push({
          type: "setForegroundColor",
          value: color
        });
      }
      i += offset;
    } else if (codeInt === 39) {
      commands.push({
        type: "resetForegroundColor"
      });
    } else if (codeInt <= 47) {
      commands.push({
        type: "setBackgroundColor",
        value: { type: "named", name: namedColors[codeInt - 40] }
      });
    } else if (codeInt === 48) {
      const [offset, color] = parseColor(sequence, i);
      if (color) {
        commands.push({
          type: "setBackgroundColor",
          value: color
        });
      }
      i += offset;
    } else if (codeInt === 49) {
      commands.push({
        type: "resetBackgroundColor"
      });
    } else if (codeInt >= 90 && codeInt <= 97) {
      commands.push({
        type: "setForegroundColor",
        value: { type: "named", name: namedColors[codeInt - 90 + 8] }
      });
    } else if (codeInt >= 100 && codeInt <= 107) {
      commands.push({
        type: "setBackgroundColor",
        value: { type: "named", name: namedColors[codeInt - 100 + 8] }
      });
    }
  }
  return commands;
}
function createAnsiSequenceParser() {
  let foreground = null;
  let background = null;
  let decorations2 = /* @__PURE__ */ new Set();
  return {
    parse(value) {
      const tokens = [];
      let position = 0;
      do {
        const findResult = findSequence(value, position);
        const text = findResult.sequence ? value.substring(position, findResult.startPosition) : value.substring(position);
        if (text.length > 0) {
          tokens.push({
            value: text,
            foreground,
            background,
            decorations: new Set(decorations2)
          });
        }
        if (findResult.sequence) {
          const commands = parseSequence(findResult.sequence);
          for (const styleToken of commands) {
            if (styleToken.type === "resetAll") {
              foreground = null;
              background = null;
              decorations2.clear();
            } else if (styleToken.type === "resetForegroundColor") {
              foreground = null;
            } else if (styleToken.type === "resetBackgroundColor") {
              background = null;
            } else if (styleToken.type === "resetDecoration") {
              decorations2.delete(styleToken.value);
            }
          }
          for (const styleToken of commands) {
            if (styleToken.type === "setForegroundColor") {
              foreground = styleToken.value;
            } else if (styleToken.type === "setBackgroundColor") {
              background = styleToken.value;
            } else if (styleToken.type === "setDecoration") {
              decorations2.add(styleToken.value);
            }
          }
        }
        position = findResult.position;
      } while (position < value.length);
      return tokens;
    }
  };
}

// src/palette.ts
var defaultNamedColorsMap = {
  black: "#000000",
  red: "#bb0000",
  green: "#00bb00",
  yellow: "#bbbb00",
  blue: "#0000bb",
  magenta: "#ff00ff",
  cyan: "#00bbbb",
  white: "#eeeeee",
  brightBlack: "#555555",
  brightRed: "#ff5555",
  brightGreen: "#00ff00",
  brightYellow: "#ffff55",
  brightBlue: "#5555ff",
  brightMagenta: "#ff55ff",
  brightCyan: "#55ffff",
  brightWhite: "#ffffff"
};
function createColorPalette(namedColorsMap = defaultNamedColorsMap) {
  function namedColor(name) {
    return namedColorsMap[name];
  }
  function rgbColor(rgb) {
    return `#${rgb.map((x) => Math.max(0, Math.min(x, 255)).toString(16).padStart(2, "0")).join("")}`;
  }
  let colorTable;
  function getColorTable() {
    if (colorTable) {
      return colorTable;
    }
    colorTable = [];
    for (let i = 0; i < namedColors.length; i++) {
      colorTable.push(namedColor(namedColors[i]));
    }
    let levels = [0, 95, 135, 175, 215, 255];
    for (let r = 0; r < 6; r++) {
      for (let g = 0; g < 6; g++) {
        for (let b = 0; b < 6; b++) {
          colorTable.push(rgbColor([levels[r], levels[g], levels[b]]));
        }
      }
    }
    let level = 8;
    for (let i = 0; i < 24; i++, level += 10) {
      colorTable.push(rgbColor([level, level, level]));
    }
    return colorTable;
  }
  function tableColor(index) {
    return getColorTable()[index];
  }
  function value(color) {
    switch (color.type) {
      case "named":
        return namedColor(color.name);
      case "rgb":
        return rgbColor(color.rgb);
      case "table":
        return tableColor(color.index);
    }
  }
  return {
    value
  };
}

function tokenizeAnsiWithTheme(theme, fileContents, options) {
  const colorReplacements = resolveColorReplacements(theme, options);
  const lines = splitLines(fileContents);
  const colorPalette = createColorPalette(
    Object.fromEntries(
      namedColors.map((name) => [
        name,
        theme.colors?.[`terminal.ansi${name[0].toUpperCase()}${name.substring(1)}`]
      ])
    )
  );
  const parser = createAnsiSequenceParser();
  return lines.map(
    (line) => parser.parse(line[0]).map((token) => {
      let color;
      let bgColor;
      if (token.decorations.has("reverse")) {
        color = token.background ? colorPalette.value(token.background) : theme.bg;
        bgColor = token.foreground ? colorPalette.value(token.foreground) : theme.fg;
      } else {
        color = token.foreground ? colorPalette.value(token.foreground) : theme.fg;
        bgColor = token.background ? colorPalette.value(token.background) : undefined;
      }
      color = applyColorReplacements(color, colorReplacements);
      bgColor = applyColorReplacements(bgColor, colorReplacements);
      if (token.decorations.has("dim"))
        color = dimColor(color);
      let fontStyle = FontStyle.None;
      if (token.decorations.has("bold"))
        fontStyle |= FontStyle.Bold;
      if (token.decorations.has("italic"))
        fontStyle |= FontStyle.Italic;
      if (token.decorations.has("underline"))
        fontStyle |= FontStyle.Underline;
      return {
        content: token.value,
        offset: line[1],
        // TODO: more accurate offset? might need to fork ansi-sequence-parser
        color,
        bgColor,
        fontStyle
      };
    })
  );
}
function dimColor(color) {
  const hexMatch = color.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);
  if (hexMatch) {
    if (hexMatch[3]) {
      const alpha = Math.round(Number.parseInt(hexMatch[3], 16) / 2).toString(16).padStart(2, "0");
      return `#${hexMatch[1]}${hexMatch[2]}${alpha}`;
    } else if (hexMatch[2]) {
      return `#${hexMatch[1]}${hexMatch[2]}80`;
    } else {
      return `#${Array.from(hexMatch[1]).map((x) => `${x}${x}`).join("")}80`;
    }
  }
  const cssVarMatch = color.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  if (cssVarMatch)
    return `var(${cssVarMatch[1]}-dim)`;
  return color;
}

function codeToTokensBase(internal, code, options = {}) {
  const {
    lang = "text",
    theme: themeName = internal.getLoadedThemes()[0]
  } = options;
  if (isPlainLang(lang) || isNoneTheme(themeName))
    return splitLines(code).map((line) => [{ content: line[0], offset: line[1] }]);
  const { theme, colorMap } = internal.setTheme(themeName);
  if (lang === "ansi")
    return tokenizeAnsiWithTheme(theme, code, options);
  const _grammar = internal.getLanguage(lang);
  if (options.grammarState) {
    if (options.grammarState.lang !== _grammar.name) {
      throw new ShikiError$2(`Grammar state language "${options.grammarState.lang}" does not match highlight language "${_grammar.name}"`);
    }
    if (!options.grammarState.themes.includes(theme.name)) {
      throw new ShikiError$2(`Grammar state themes "${options.grammarState.themes}" do not contain highlight theme "${theme.name}"`);
    }
  }
  return tokenizeWithTheme(code, _grammar, theme, colorMap, options);
}
function getLastGrammarState(...args) {
  if (args.length === 2) {
    return getLastGrammarStateFromMap(args[1]);
  }
  const [internal, code, options = {}] = args;
  const {
    lang = "text",
    theme: themeName = internal.getLoadedThemes()[0]
  } = options;
  if (isPlainLang(lang) || isNoneTheme(themeName))
    throw new ShikiError$2("Plain language does not have grammar state");
  if (lang === "ansi")
    throw new ShikiError$2("ANSI language does not have grammar state");
  const { theme, colorMap } = internal.setTheme(themeName);
  const _grammar = internal.getLanguage(lang);
  return new GrammarState(
    _tokenizeWithTheme(code, _grammar, theme, colorMap, options).stateStack,
    _grammar.name,
    theme.name
  );
}
function tokenizeWithTheme(code, grammar, theme, colorMap, options) {
  const result = _tokenizeWithTheme(code, grammar, theme, colorMap, options);
  const grammarState = new GrammarState(
    _tokenizeWithTheme(code, grammar, theme, colorMap, options).stateStack,
    grammar.name,
    theme.name
  );
  setLastGrammarStateToMap(result.tokens, grammarState);
  return result.tokens;
}
function _tokenizeWithTheme(code, grammar, theme, colorMap, options) {
  const colorReplacements = resolveColorReplacements(theme, options);
  const {
    tokenizeMaxLineLength = 0,
    tokenizeTimeLimit = 500
  } = options;
  const lines = splitLines(code);
  let stateStack = options.grammarState ? getGrammarStack(options.grammarState, theme.name) ?? INITIAL : options.grammarContextCode != null ? _tokenizeWithTheme(
    options.grammarContextCode,
    grammar,
    theme,
    colorMap,
    {
      ...options,
      grammarState: undefined,
      grammarContextCode: undefined
    }
  ).stateStack : INITIAL;
  let actual = [];
  const final = [];
  for (let i = 0, len = lines.length; i < len; i++) {
    const [line, lineOffset] = lines[i];
    if (line === "") {
      actual = [];
      final.push([]);
      continue;
    }
    if (tokenizeMaxLineLength > 0 && line.length >= tokenizeMaxLineLength) {
      actual = [];
      final.push([{
        content: line,
        offset: lineOffset,
        color: "",
        fontStyle: 0
      }]);
      continue;
    }
    let resultWithScopes;
    let tokensWithScopes;
    let tokensWithScopesIndex;
    if (options.includeExplanation) {
      resultWithScopes = grammar.tokenizeLine(line, stateStack);
      tokensWithScopes = resultWithScopes.tokens;
      tokensWithScopesIndex = 0;
    }
    const result = grammar.tokenizeLine2(line, stateStack, tokenizeTimeLimit);
    const tokensLength = result.tokens.length / 2;
    for (let j = 0; j < tokensLength; j++) {
      const startIndex = result.tokens[2 * j];
      const nextStartIndex = j + 1 < tokensLength ? result.tokens[2 * j + 2] : line.length;
      if (startIndex === nextStartIndex)
        continue;
      const metadata = result.tokens[2 * j + 1];
      const color = applyColorReplacements(
        colorMap[EncodedTokenMetadata.getForeground(metadata)],
        colorReplacements
      );
      const fontStyle = EncodedTokenMetadata.getFontStyle(metadata);
      const token = {
        content: line.substring(startIndex, nextStartIndex),
        offset: lineOffset + startIndex,
        color,
        fontStyle
      };
      if (options.includeExplanation) {
        const themeSettingsSelectors = [];
        if (options.includeExplanation !== "scopeName") {
          for (const setting of theme.settings) {
            let selectors;
            switch (typeof setting.scope) {
              case "string":
                selectors = setting.scope.split(/,/).map((scope) => scope.trim());
                break;
              case "object":
                selectors = setting.scope;
                break;
              default:
                continue;
            }
            themeSettingsSelectors.push({
              settings: setting,
              selectors: selectors.map((selector) => selector.split(/ /))
            });
          }
        }
        token.explanation = [];
        let offset = 0;
        while (startIndex + offset < nextStartIndex) {
          const tokenWithScopes = tokensWithScopes[tokensWithScopesIndex];
          const tokenWithScopesText = line.substring(
            tokenWithScopes.startIndex,
            tokenWithScopes.endIndex
          );
          offset += tokenWithScopesText.length;
          token.explanation.push({
            content: tokenWithScopesText,
            scopes: options.includeExplanation === "scopeName" ? explainThemeScopesNameOnly(
              tokenWithScopes.scopes
            ) : explainThemeScopesFull(
              themeSettingsSelectors,
              tokenWithScopes.scopes
            )
          });
          tokensWithScopesIndex += 1;
        }
      }
      actual.push(token);
    }
    final.push(actual);
    actual = [];
    stateStack = result.ruleStack;
  }
  return {
    tokens: final,
    stateStack
  };
}
function explainThemeScopesNameOnly(scopes) {
  return scopes.map((scope) => ({ scopeName: scope }));
}
function explainThemeScopesFull(themeSelectors, scopes) {
  const result = [];
  for (let i = 0, len = scopes.length; i < len; i++) {
    const scope = scopes[i];
    result[i] = {
      scopeName: scope,
      themeMatches: explainThemeScope(themeSelectors, scope, scopes.slice(0, i))
    };
  }
  return result;
}
function matchesOne(selector, scope) {
  return selector === scope || scope.substring(0, selector.length) === selector && scope[selector.length] === ".";
}
function matches(selectors, scope, parentScopes) {
  if (!matchesOne(selectors[selectors.length - 1], scope))
    return false;
  let selectorParentIndex = selectors.length - 2;
  let parentIndex = parentScopes.length - 1;
  while (selectorParentIndex >= 0 && parentIndex >= 0) {
    if (matchesOne(selectors[selectorParentIndex], parentScopes[parentIndex]))
      selectorParentIndex -= 1;
    parentIndex -= 1;
  }
  if (selectorParentIndex === -1)
    return true;
  return false;
}
function explainThemeScope(themeSettingsSelectors, scope, parentScopes) {
  const result = [];
  for (const { selectors, settings } of themeSettingsSelectors) {
    for (const selectorPieces of selectors) {
      if (matches(selectorPieces, scope, parentScopes)) {
        result.push(settings);
        break;
      }
    }
  }
  return result;
}

function codeToTokensWithThemes(internal, code, options) {
  const themes = Object.entries(options.themes).filter((i) => i[1]).map((i) => ({ color: i[0], theme: i[1] }));
  const themedTokens = themes.map((t) => {
    const tokens2 = codeToTokensBase(internal, code, {
      ...options,
      theme: t.theme
    });
    const state = getLastGrammarStateFromMap(tokens2);
    const theme = typeof t.theme === "string" ? t.theme : t.theme.name;
    return {
      tokens: tokens2,
      state,
      theme
    };
  });
  const tokens = syncThemesTokenization(
    ...themedTokens.map((i) => i.tokens)
  );
  const mergedTokens = tokens[0].map(
    (line, lineIdx) => line.map((_token, tokenIdx) => {
      const mergedToken = {
        content: _token.content,
        variants: {},
        offset: _token.offset
      };
      if ("includeExplanation" in options && options.includeExplanation) {
        mergedToken.explanation = _token.explanation;
      }
      tokens.forEach((t, themeIdx) => {
        const {
          content: _,
          explanation: __,
          offset: ___,
          ...styles
        } = t[lineIdx][tokenIdx];
        mergedToken.variants[themes[themeIdx].color] = styles;
      });
      return mergedToken;
    })
  );
  const mergedGrammarState = themedTokens[0].state ? new GrammarState(
    Object.fromEntries(themedTokens.map((s) => [s.theme, s.state?.getInternalStack(s.theme)])),
    themedTokens[0].state.lang
  ) : undefined;
  if (mergedGrammarState)
    setLastGrammarStateToMap(mergedTokens, mergedGrammarState);
  return mergedTokens;
}
function syncThemesTokenization(...themes) {
  const outThemes = themes.map(() => []);
  const count = themes.length;
  for (let i = 0; i < themes[0].length; i++) {
    const lines = themes.map((t) => t[i]);
    const outLines = outThemes.map(() => []);
    outThemes.forEach((t, i2) => t.push(outLines[i2]));
    const indexes = lines.map(() => 0);
    const current = lines.map((l) => l[0]);
    while (current.every((t) => t)) {
      const minLength = Math.min(...current.map((t) => t.content.length));
      for (let n = 0; n < count; n++) {
        const token = current[n];
        if (token.content.length === minLength) {
          outLines[n].push(token);
          indexes[n] += 1;
          current[n] = lines[n][indexes[n]];
        } else {
          outLines[n].push({
            ...token,
            content: token.content.slice(0, minLength)
          });
          current[n] = {
            ...token,
            content: token.content.slice(minLength),
            offset: token.offset + minLength
          };
        }
      }
    }
  }
  return outThemes;
}

function codeToTokens(internal, code, options) {
  let bg;
  let fg;
  let tokens;
  let themeName;
  let rootStyle;
  let grammarState;
  if ("themes" in options) {
    const {
      defaultColor = "light",
      cssVariablePrefix = "--shiki-"
    } = options;
    const themes = Object.entries(options.themes).filter((i) => i[1]).map((i) => ({ color: i[0], theme: i[1] })).sort((a, b) => a.color === defaultColor ? -1 : b.color === defaultColor ? 1 : 0);
    if (themes.length === 0)
      throw new ShikiError$2("`themes` option must not be empty");
    const themeTokens = codeToTokensWithThemes(
      internal,
      code,
      options
    );
    grammarState = getLastGrammarStateFromMap(themeTokens);
    if (defaultColor && !themes.find((t) => t.color === defaultColor))
      throw new ShikiError$2(`\`themes\` option must contain the defaultColor key \`${defaultColor}\``);
    const themeRegs = themes.map((t) => internal.getTheme(t.theme));
    const themesOrder = themes.map((t) => t.color);
    tokens = themeTokens.map((line) => line.map((token) => mergeToken(token, themesOrder, cssVariablePrefix, defaultColor)));
    if (grammarState)
      setLastGrammarStateToMap(tokens, grammarState);
    const themeColorReplacements = themes.map((t) => resolveColorReplacements(t.theme, options));
    fg = themes.map((t, idx) => (idx === 0 && defaultColor ? "" : `${cssVariablePrefix + t.color}:`) + (applyColorReplacements(themeRegs[idx].fg, themeColorReplacements[idx]) || "inherit")).join(";");
    bg = themes.map((t, idx) => (idx === 0 && defaultColor ? "" : `${cssVariablePrefix + t.color}-bg:`) + (applyColorReplacements(themeRegs[idx].bg, themeColorReplacements[idx]) || "inherit")).join(";");
    themeName = `shiki-themes ${themeRegs.map((t) => t.name).join(" ")}`;
    rootStyle = defaultColor ? undefined : [fg, bg].join(";");
  } else if ("theme" in options) {
    const colorReplacements = resolveColorReplacements(options.theme, options);
    tokens = codeToTokensBase(
      internal,
      code,
      options
    );
    const _theme = internal.getTheme(options.theme);
    bg = applyColorReplacements(_theme.bg, colorReplacements);
    fg = applyColorReplacements(_theme.fg, colorReplacements);
    themeName = _theme.name;
    grammarState = getLastGrammarStateFromMap(tokens);
  } else {
    throw new ShikiError$2("Invalid options, either `theme` or `themes` must be provided");
  }
  return {
    tokens,
    fg,
    bg,
    themeName,
    rootStyle,
    grammarState
  };
}
function mergeToken(merged, variantsOrder, cssVariablePrefix, defaultColor) {
  const token = {
    content: merged.content,
    explanation: merged.explanation,
    offset: merged.offset
  };
  const styles = variantsOrder.map((t) => getTokenStyleObject(merged.variants[t]));
  const styleKeys = new Set(styles.flatMap((t) => Object.keys(t)));
  const mergedStyles = {};
  styles.forEach((cur, idx) => {
    for (const key of styleKeys) {
      const value = cur[key] || "inherit";
      if (idx === 0 && defaultColor) {
        mergedStyles[key] = value;
      } else {
        const keyName = key === "color" ? "" : key === "background-color" ? "-bg" : `-${key}`;
        const varKey = cssVariablePrefix + variantsOrder[idx] + (key === "color" ? "" : keyName);
        mergedStyles[varKey] = value;
      }
    }
  });
  token.htmlStyle = mergedStyles;
  return token;
}

function codeToHast(internal, code, options, transformerContext = {
  meta: {},
  options,
  codeToHast: (_code, _options) => codeToHast(internal, _code, _options),
  codeToTokens: (_code, _options) => codeToTokens(internal, _code, _options)
}) {
  let input = code;
  for (const transformer of getTransformers(options))
    input = transformer.preprocess?.call(transformerContext, input, options) || input;
  let {
    tokens,
    fg,
    bg,
    themeName,
    rootStyle,
    grammarState
  } = codeToTokens(internal, input, options);
  const {
    mergeWhitespaces = true
  } = options;
  if (mergeWhitespaces === true)
    tokens = mergeWhitespaceTokens(tokens);
  else if (mergeWhitespaces === "never")
    tokens = splitWhitespaceTokens(tokens);
  const contextSource = {
    ...transformerContext,
    get source() {
      return input;
    }
  };
  for (const transformer of getTransformers(options))
    tokens = transformer.tokens?.call(contextSource, tokens) || tokens;
  return tokensToHast(
    tokens,
    {
      ...options,
      fg,
      bg,
      themeName,
      rootStyle
    },
    contextSource,
    grammarState
  );
}
function tokensToHast(tokens, options, transformerContext, grammarState = getLastGrammarStateFromMap(tokens)) {
  const transformers = getTransformers(options);
  const lines = [];
  const root = {
    type: "root",
    children: []
  };
  const {
    structure = "classic",
    tabindex = "0"
  } = options;
  let preNode = {
    type: "element",
    tagName: "pre",
    properties: {
      class: `shiki ${options.themeName || ""}`,
      style: options.rootStyle || `background-color:${options.bg};color:${options.fg}`,
      ...tabindex !== false && tabindex != null ? {
        tabindex: tabindex.toString()
      } : {},
      ...Object.fromEntries(
        Array.from(
          Object.entries(options.meta || {})
        ).filter(([key]) => !key.startsWith("_"))
      )
    },
    children: []
  };
  let codeNode = {
    type: "element",
    tagName: "code",
    properties: {},
    children: lines
  };
  const lineNodes = [];
  const context = {
    ...transformerContext,
    structure,
    addClassToHast,
    get source() {
      return transformerContext.source;
    },
    get tokens() {
      return tokens;
    },
    get options() {
      return options;
    },
    get root() {
      return root;
    },
    get pre() {
      return preNode;
    },
    get code() {
      return codeNode;
    },
    get lines() {
      return lineNodes;
    }
  };
  tokens.forEach((line, idx) => {
    if (idx) {
      if (structure === "inline")
        root.children.push({ type: "element", tagName: "br", properties: {}, children: [] });
      else if (structure === "classic")
        lines.push({ type: "text", value: "\n" });
    }
    let lineNode = {
      type: "element",
      tagName: "span",
      properties: { class: "line" },
      children: []
    };
    let col = 0;
    for (const token of line) {
      let tokenNode = {
        type: "element",
        tagName: "span",
        properties: {
          ...token.htmlAttrs
        },
        children: [{ type: "text", value: token.content }]
      };
      if (typeof token.htmlStyle === "string")
        ;
      const style = stringifyTokenStyle(token.htmlStyle || getTokenStyleObject(token));
      if (style)
        tokenNode.properties.style = style;
      for (const transformer of transformers)
        tokenNode = transformer?.span?.call(context, tokenNode, idx + 1, col, lineNode, token) || tokenNode;
      if (structure === "inline")
        root.children.push(tokenNode);
      else if (structure === "classic")
        lineNode.children.push(tokenNode);
      col += token.content.length;
    }
    if (structure === "classic") {
      for (const transformer of transformers)
        lineNode = transformer?.line?.call(context, lineNode, idx + 1) || lineNode;
      lineNodes.push(lineNode);
      lines.push(lineNode);
    }
  });
  if (structure === "classic") {
    for (const transformer of transformers)
      codeNode = transformer?.code?.call(context, codeNode) || codeNode;
    preNode.children.push(codeNode);
    for (const transformer of transformers)
      preNode = transformer?.pre?.call(context, preNode) || preNode;
    root.children.push(preNode);
  }
  let result = root;
  for (const transformer of transformers)
    result = transformer?.root?.call(context, result) || result;
  if (grammarState)
    setLastGrammarStateToMap(result, grammarState);
  return result;
}
function mergeWhitespaceTokens(tokens) {
  return tokens.map((line) => {
    const newLine = [];
    let carryOnContent = "";
    let firstOffset = 0;
    line.forEach((token, idx) => {
      const isUnderline = token.fontStyle && token.fontStyle & FontStyle.Underline;
      const couldMerge = !isUnderline;
      if (couldMerge && token.content.match(/^\s+$/) && line[idx + 1]) {
        if (!firstOffset)
          firstOffset = token.offset;
        carryOnContent += token.content;
      } else {
        if (carryOnContent) {
          if (couldMerge) {
            newLine.push({
              ...token,
              offset: firstOffset,
              content: carryOnContent + token.content
            });
          } else {
            newLine.push(
              {
                content: carryOnContent,
                offset: firstOffset
              },
              token
            );
          }
          firstOffset = 0;
          carryOnContent = "";
        } else {
          newLine.push(token);
        }
      }
    });
    return newLine;
  });
}
function splitWhitespaceTokens(tokens) {
  return tokens.map((line) => {
    return line.flatMap((token) => {
      if (token.content.match(/^\s+$/))
        return token;
      const match = token.content.match(/^(\s*)(.*?)(\s*)$/);
      if (!match)
        return token;
      const [, leading, content, trailing] = match;
      if (!leading && !trailing)
        return token;
      const expanded = [{
        ...token,
        offset: token.offset + leading.length,
        content
      }];
      if (leading) {
        expanded.unshift({
          content: leading,
          offset: token.offset
        });
      }
      if (trailing) {
        expanded.push({
          content: trailing,
          offset: token.offset + leading.length + content.length
        });
      }
      return expanded;
    });
  });
}

function codeToHtml(internal, code, options) {
  const context = {
    meta: {},
    options,
    codeToHast: (_code, _options) => codeToHast(internal, _code, _options),
    codeToTokens: (_code, _options) => codeToTokens(internal, _code, _options)
  };
  let result = toHtml(codeToHast(internal, code, options, context));
  for (const transformer of getTransformers(options))
    result = transformer.postprocess?.call(context, result, options) || result;
  return result;
}

const VSCODE_FALLBACK_EDITOR_FG = { light: "#333333", dark: "#bbbbbb" };
const VSCODE_FALLBACK_EDITOR_BG = { light: "#fffffe", dark: "#1e1e1e" };
const RESOLVED_KEY = "__shiki_resolved";
function normalizeTheme(rawTheme) {
  if (rawTheme?.[RESOLVED_KEY])
    return rawTheme;
  const theme = {
    ...rawTheme
  };
  if (theme.tokenColors && !theme.settings) {
    theme.settings = theme.tokenColors;
    delete theme.tokenColors;
  }
  theme.type ||= "dark";
  theme.colorReplacements = { ...theme.colorReplacements };
  theme.settings ||= [];
  let { bg, fg } = theme;
  if (!bg || !fg) {
    const globalSetting = theme.settings ? theme.settings.find((s) => !s.name && !s.scope) : undefined;
    if (globalSetting?.settings?.foreground)
      fg = globalSetting.settings.foreground;
    if (globalSetting?.settings?.background)
      bg = globalSetting.settings.background;
    if (!fg && theme?.colors?.["editor.foreground"])
      fg = theme.colors["editor.foreground"];
    if (!bg && theme?.colors?.["editor.background"])
      bg = theme.colors["editor.background"];
    if (!fg)
      fg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark;
    if (!bg)
      bg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark;
    theme.fg = fg;
    theme.bg = bg;
  }
  if (!(theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope)) {
    theme.settings.unshift({
      settings: {
        foreground: theme.fg,
        background: theme.bg
      }
    });
  }
  let replacementCount = 0;
  const replacementMap = /* @__PURE__ */ new Map();
  function getReplacementColor(value) {
    if (replacementMap.has(value))
      return replacementMap.get(value);
    replacementCount += 1;
    const hex = `#${replacementCount.toString(16).padStart(8, "0").toLowerCase()}`;
    if (theme.colorReplacements?.[`#${hex}`])
      return getReplacementColor(value);
    replacementMap.set(value, hex);
    return hex;
  }
  theme.settings = theme.settings.map((setting) => {
    const replaceFg = setting.settings?.foreground && !setting.settings.foreground.startsWith("#");
    const replaceBg = setting.settings?.background && !setting.settings.background.startsWith("#");
    if (!replaceFg && !replaceBg)
      return setting;
    const clone = {
      ...setting,
      settings: {
        ...setting.settings
      }
    };
    if (replaceFg) {
      const replacement = getReplacementColor(setting.settings.foreground);
      theme.colorReplacements[replacement] = setting.settings.foreground;
      clone.settings.foreground = replacement;
    }
    if (replaceBg) {
      const replacement = getReplacementColor(setting.settings.background);
      theme.colorReplacements[replacement] = setting.settings.background;
      clone.settings.background = replacement;
    }
    return clone;
  });
  for (const key of Object.keys(theme.colors || {})) {
    if (key === "editor.foreground" || key === "editor.background" || key.startsWith("terminal.ansi")) {
      if (!theme.colors[key]?.startsWith("#")) {
        const replacement = getReplacementColor(theme.colors[key]);
        theme.colorReplacements[replacement] = theme.colors[key];
        theme.colors[key] = replacement;
      }
    }
  }
  Object.defineProperty(theme, RESOLVED_KEY, {
    enumerable: false,
    writable: false,
    value: true
  });
  return theme;
}

async function resolveLangs(langs) {
  return Array.from(new Set((await Promise.all(
    langs.filter((l) => !isSpecialLang(l)).map(async (lang) => await normalizeGetter(lang).then((r) => Array.isArray(r) ? r : [r]))
  )).flat()));
}
async function resolveThemes(themes) {
  const resolved = await Promise.all(
    themes.map(
      async (theme) => isSpecialTheme(theme) ? null : normalizeTheme(await normalizeGetter(theme))
    )
  );
  return resolved.filter((i) => !!i);
}

class Registry extends Registry$1 {
  constructor(_resolver, _themes, _langs, _alias = {}) {
    super(_resolver);
    this._resolver = _resolver;
    this._themes = _themes;
    this._langs = _langs;
    this._alias = _alias;
    this._themes.map((t) => this.loadTheme(t));
    this.loadLanguages(this._langs);
  }
  _resolvedThemes = /* @__PURE__ */ new Map();
  _resolvedGrammars = /* @__PURE__ */ new Map();
  _langMap = /* @__PURE__ */ new Map();
  _langGraph = /* @__PURE__ */ new Map();
  _textmateThemeCache = /* @__PURE__ */ new WeakMap();
  _loadedThemesCache = null;
  _loadedLanguagesCache = null;
  getTheme(theme) {
    if (typeof theme === "string")
      return this._resolvedThemes.get(theme);
    else
      return this.loadTheme(theme);
  }
  loadTheme(theme) {
    const _theme = normalizeTheme(theme);
    if (_theme.name) {
      this._resolvedThemes.set(_theme.name, _theme);
      this._loadedThemesCache = null;
    }
    return _theme;
  }
  getLoadedThemes() {
    if (!this._loadedThemesCache)
      this._loadedThemesCache = [...this._resolvedThemes.keys()];
    return this._loadedThemesCache;
  }
  // Override and re-implement this method to cache the textmate themes as `TextMateTheme.createFromRawTheme`
  // is expensive. Themes can switch often especially for dual-theme support.
  //
  // The parent class also accepts `colorMap` as the second parameter, but since we don't use that,
  // we omit here so it's easier to cache the themes.
  setTheme(theme) {
    let textmateTheme = this._textmateThemeCache.get(theme);
    if (!textmateTheme) {
      textmateTheme = Theme.createFromRawTheme(theme);
      this._textmateThemeCache.set(theme, textmateTheme);
    }
    this._syncRegistry.setTheme(textmateTheme);
  }
  getGrammar(name) {
    if (this._alias[name]) {
      const resolved = /* @__PURE__ */ new Set([name]);
      while (this._alias[name]) {
        name = this._alias[name];
        if (resolved.has(name))
          throw new ShikiError(`Circular alias \`${Array.from(resolved).join(" -> ")} -> ${name}\``);
        resolved.add(name);
      }
    }
    return this._resolvedGrammars.get(name);
  }
  loadLanguage(lang) {
    if (this.getGrammar(lang.name))
      return;
    const embeddedLazilyBy = new Set(
      [...this._langMap.values()].filter((i) => i.embeddedLangsLazy?.includes(lang.name))
    );
    this._resolver.addLanguage(lang);
    const grammarConfig = {
      balancedBracketSelectors: lang.balancedBracketSelectors || ["*"],
      unbalancedBracketSelectors: lang.unbalancedBracketSelectors || []
    };
    this._syncRegistry._rawGrammars.set(lang.scopeName, lang);
    const g = this.loadGrammarWithConfiguration(lang.scopeName, 1, grammarConfig);
    g.name = lang.name;
    this._resolvedGrammars.set(lang.name, g);
    if (lang.aliases) {
      lang.aliases.forEach((alias) => {
        this._alias[alias] = lang.name;
      });
    }
    this._loadedLanguagesCache = null;
    if (embeddedLazilyBy.size) {
      for (const e of embeddedLazilyBy) {
        this._resolvedGrammars.delete(e.name);
        this._loadedLanguagesCache = null;
        this._syncRegistry?._injectionGrammars?.delete(e.scopeName);
        this._syncRegistry?._grammars?.delete(e.scopeName);
        this.loadLanguage(this._langMap.get(e.name));
      }
    }
  }
  dispose() {
    super.dispose();
    this._resolvedThemes.clear();
    this._resolvedGrammars.clear();
    this._langMap.clear();
    this._langGraph.clear();
    this._loadedThemesCache = null;
  }
  loadLanguages(langs) {
    for (const lang of langs)
      this.resolveEmbeddedLanguages(lang);
    const langsGraphArray = Array.from(this._langGraph.entries());
    const missingLangs = langsGraphArray.filter(([_, lang]) => !lang);
    if (missingLangs.length) {
      const dependents = langsGraphArray.filter(([_, lang]) => lang && lang.embeddedLangs?.some((l) => missingLangs.map(([name]) => name).includes(l))).filter((lang) => !missingLangs.includes(lang));
      throw new ShikiError(`Missing languages ${missingLangs.map(([name]) => `\`${name}\``).join(", ")}, required by ${dependents.map(([name]) => `\`${name}\``).join(", ")}`);
    }
    for (const [_, lang] of langsGraphArray)
      this._resolver.addLanguage(lang);
    for (const [_, lang] of langsGraphArray)
      this.loadLanguage(lang);
  }
  getLoadedLanguages() {
    if (!this._loadedLanguagesCache) {
      this._loadedLanguagesCache = [
        .../* @__PURE__ */ new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])
      ];
    }
    return this._loadedLanguagesCache;
  }
  resolveEmbeddedLanguages(lang) {
    this._langMap.set(lang.name, lang);
    this._langGraph.set(lang.name, lang);
    if (lang.embeddedLangs) {
      for (const embeddedLang of lang.embeddedLangs)
        this._langGraph.set(embeddedLang, this._langMap.get(embeddedLang));
    }
  }
}

class Resolver {
  _langs = /* @__PURE__ */ new Map();
  _scopeToLang = /* @__PURE__ */ new Map();
  _injections = /* @__PURE__ */ new Map();
  _onigLib;
  constructor(engine, langs) {
    this._onigLib = {
      createOnigScanner: (patterns) => engine.createScanner(patterns),
      createOnigString: (s) => engine.createString(s)
    };
    langs.forEach((i) => this.addLanguage(i));
  }
  get onigLib() {
    return this._onigLib;
  }
  getLangRegistration(langIdOrAlias) {
    return this._langs.get(langIdOrAlias);
  }
  loadGrammar(scopeName) {
    return this._scopeToLang.get(scopeName);
  }
  addLanguage(l) {
    this._langs.set(l.name, l);
    if (l.aliases) {
      l.aliases.forEach((a) => {
        this._langs.set(a, l);
      });
    }
    this._scopeToLang.set(l.scopeName, l);
    if (l.injectTo) {
      l.injectTo.forEach((i) => {
        if (!this._injections.get(i))
          this._injections.set(i, []);
        this._injections.get(i).push(l.scopeName);
      });
    }
  }
  getInjections(scopeName) {
    const scopeParts = scopeName.split(".");
    let injections = [];
    for (let i = 1; i <= scopeParts.length; i++) {
      const subScopeName = scopeParts.slice(0, i).join(".");
      injections = [...injections, ...this._injections.get(subScopeName) || []];
    }
    return injections;
  }
}

let instancesCount = 0;
function createShikiInternalSync(options) {
  instancesCount += 1;
  if (options.warnings !== false && instancesCount >= 10 && instancesCount % 10 === 0)
    console.warn(`[Shiki] ${instancesCount} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
  let isDisposed = false;
  if (!options.engine)
    throw new ShikiError("`engine` option is required for synchronous mode");
  const langs = (options.langs || []).flat(1);
  const themes = (options.themes || []).flat(1).map(normalizeTheme);
  const resolver = new Resolver(options.engine, langs);
  const _registry = new Registry(resolver, themes, langs, options.langAlias);
  let _lastTheme;
  function getLanguage(name) {
    ensureNotDisposed();
    const _lang = _registry.getGrammar(typeof name === "string" ? name : name.name);
    if (!_lang)
      throw new ShikiError(`Language \`${name}\` not found, you may need to load it first`);
    return _lang;
  }
  function getTheme(name) {
    if (name === "none")
      return { bg: "", fg: "", name: "none", settings: [], type: "dark" };
    ensureNotDisposed();
    const _theme = _registry.getTheme(name);
    if (!_theme)
      throw new ShikiError(`Theme \`${name}\` not found, you may need to load it first`);
    return _theme;
  }
  function setTheme(name) {
    ensureNotDisposed();
    const theme = getTheme(name);
    if (_lastTheme !== name) {
      _registry.setTheme(theme);
      _lastTheme = name;
    }
    const colorMap = _registry.getColorMap();
    return {
      theme,
      colorMap
    };
  }
  function getLoadedThemes() {
    ensureNotDisposed();
    return _registry.getLoadedThemes();
  }
  function getLoadedLanguages() {
    ensureNotDisposed();
    return _registry.getLoadedLanguages();
  }
  function loadLanguageSync(...langs2) {
    ensureNotDisposed();
    _registry.loadLanguages(langs2.flat(1));
  }
  async function loadLanguage(...langs2) {
    return loadLanguageSync(await resolveLangs(langs2));
  }
  function loadThemeSync(...themes2) {
    ensureNotDisposed();
    for (const theme of themes2.flat(1)) {
      _registry.loadTheme(theme);
    }
  }
  async function loadTheme(...themes2) {
    ensureNotDisposed();
    return loadThemeSync(await resolveThemes(themes2));
  }
  function ensureNotDisposed() {
    if (isDisposed)
      throw new ShikiError("Shiki instance has been disposed");
  }
  function dispose() {
    if (isDisposed)
      return;
    isDisposed = true;
    _registry.dispose();
    instancesCount -= 1;
  }
  return {
    setTheme,
    getTheme,
    getLanguage,
    getLoadedThemes,
    getLoadedLanguages,
    loadLanguage,
    loadLanguageSync,
    loadTheme,
    loadThemeSync,
    dispose,
    [Symbol.dispose]: dispose
  };
}

async function createShikiInternal(options = {}) {
  if (options.loadWasm) ;
  const [
    themes,
    langs,
    engine
  ] = await Promise.all([
    resolveThemes(options.themes || []),
    resolveLangs(options.langs || []),
    options.engine || createOnigurumaEngine(options.loadWasm || getDefaultWasmLoader())
  ]);
  return createShikiInternalSync({
    ...options,
    themes,
    langs,
    engine
  });
}

async function createHighlighterCore(options = {}) {
  const internal = await createShikiInternal(options);
  return {
    getLastGrammarState: (...args) => getLastGrammarState(internal, ...args),
    codeToTokensBase: (code, options2) => codeToTokensBase(internal, code, options2),
    codeToTokensWithThemes: (code, options2) => codeToTokensWithThemes(internal, code, options2),
    codeToTokens: (code, options2) => codeToTokens(internal, code, options2),
    codeToHast: (code, options2) => codeToHast(internal, code, options2),
    codeToHtml: (code, options2) => codeToHtml(internal, code, options2),
    ...internal,
    getInternalContext: () => internal
  };
}

// src/index.ts

// src/languages.ts
function getNestedCodeBlockInjectionLangs(lang, langAlias = {}) {
  const injectionLangs = [];
  const langNameKey = lang.name.replace(/[^a-zA-Z0-9]/g, "_");
  const langNameAndAliases = [lang.name, ...lang.aliases ?? []];
  Object.entries(langAlias).forEach(([alias, target]) => {
    if (target === lang.name && !langNameAndAliases.includes(alias))
      langNameAndAliases.push(alias);
  });
  injectionLangs.push({
    name: `${lang.name}-fenced-md`,
    scopeName: `source.${lang.name}.fenced_code_block`,
    injectTo: ["text.html.markdown"],
    injectionSelector: "L:text.html.markdown",
    patterns: [
      {
        include: `#fenced_code_block_${langNameKey}`
      }
    ],
    repository: {
      [`fenced_code_block_${langNameKey}`]: {
        begin: `(^|\\G)(\\s*)(\`{3,}|~{3,})\\s*(?i:(${langNameAndAliases.join("|")})((\\s+|:|,|\\{|\\?)[^\`]*)?$)`,
        beginCaptures: {
          3: {
            name: "punctuation.definition.markdown"
          },
          4: {
            name: "fenced_code.block.language.markdown"
          },
          5: {
            name: "fenced_code.block.language.attributes.markdown"
          }
        },
        end: "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
        endCaptures: {
          3: {
            name: "punctuation.definition.markdown"
          }
        },
        name: "markup.fenced_code.block.markdown",
        patterns: [
          {
            begin: "(^|\\G)(\\s*)(.*)",
            while: "(^|\\G)(?!\\s*([`~]{3,})\\s*$)",
            contentName: `meta.embedded.block.${lang.name}`,
            patterns: [
              {
                include: lang.scopeName
              }
            ]
          }
        ]
      }
    }
  });
  injectionLangs.push({
    name: `${lang.name}-fenced-mdx`,
    scopeName: `source.${lang.name}.fenced_code_block`,
    injectTo: ["source.mdx"],
    injectionSelector: "L:source.mdx",
    patterns: [
      {
        include: `#fenced_code_block_${langNameKey}`
      }
    ],
    repository: {
      [`fenced_code_block_${langNameKey}`]: {
        begin: `(?:^|\\G)[\\t ]*(\`{3,})(?:[\\t ]*((?i:(?:.*\\.)?${langNameAndAliases.join("|")}))(?:[\\t ]+((?:[^\\n\\r\`])+))?)(?:[\\t ]*$)`,
        beginCaptures: {
          1: {
            name: "string.other.begin.code.fenced.mdx"
          },
          2: {
            name: "entity.name.function.mdx",
            patterns: [
              {
                include: "#markdown-string"
              }
            ]
          },
          3: {
            patterns: [
              {
                include: "#markdown-string"
              }
            ]
          }
        },
        end: "(?:^|\\G)[\\t ]*(\\1)(?:[\\t ]*$)",
        endCaptures: {
          1: {
            name: "string.other.end.code.fenced.mdx"
          }
        },
        name: `markup.code.${lang.name}.mdx`,
        patterns: [
          {
            begin: "(^|\\G)(\\s*)(.*)",
            contentName: `meta.embedded.${lang.name}`,
            patterns: [
              {
                include: lang.scopeName
              }
            ],
            while: "(^|\\G)(?![\\t ]*([`~]{3,})[\\t ]*$)"
          }
        ]
      }
    }
  });
  return injectionLangs;
}

// src/highlighter.ts
var highlighterPromiseByConfig = /* @__PURE__ */ new Map();
var themeCacheKeysByStyleVariants = /* @__PURE__ */ new WeakMap();
async function getCachedHighlighter(config = {}) {
  const configCacheKey = getStableObjectHash(config);
  let highlighterPromise = highlighterPromiseByConfig.get(configCacheKey);
  if (highlighterPromise === undefined) {
    highlighterPromise = (async () => {
      const highlighter = await createHighlighterCore({
        themes: [],
        langs: [],
        engine: createRegexEngine(config.engine)
      });
      await ensureLanguagesAreLoaded({ highlighter, ...config });
      return highlighter;
    })();
    highlighterPromiseByConfig.set(configCacheKey, highlighterPromise);
  }
  return highlighterPromise;
}
async function createRegexEngine(engine) {
  if (engine === "javascript")
    return [undefined][0];
  return [(await import('./engine-oniguruma_RkHR8kMv.mjs')).createOnigurumaEngine(import('./wasm_CmTHlobv.mjs'))][0];
}
async function ensureThemeIsLoaded(highlighter, theme, styleVariants) {
  let themeCacheKeys = themeCacheKeysByStyleVariants.get(styleVariants);
  if (!themeCacheKeys) {
    themeCacheKeys = /* @__PURE__ */ new WeakMap();
    themeCacheKeysByStyleVariants.set(styleVariants, themeCacheKeys);
  }
  const existingCacheKey = themeCacheKeys.get(theme);
  const cacheKey = existingCacheKey ?? `${theme.name}-${getStableObjectHash({ bg: theme.bg, fg: theme.fg, settings: theme.settings })}`;
  if (!existingCacheKey)
    themeCacheKeys.set(theme, cacheKey);
  await runHighlighterTask(async () => {
    if (highlighter.getLoadedThemes().includes(cacheKey))
      return;
    const themeUsingCacheKey = { ...theme, name: cacheKey, settings: theme.settings ?? [] };
    await highlighter.loadTheme(themeUsingCacheKey);
  });
  return cacheKey;
}
async function ensureLanguagesAreLoaded(options) {
  const { highlighter, langs = [], langAlias = {}, injectLangsIntoNestedCodeBlocks } = options;
  const failedLanguages = /* @__PURE__ */ new Set();
  const failedEmbeddedLanguages = /* @__PURE__ */ new Set();
  if (!langs.length)
    return { failedLanguages, failedEmbeddedLanguages };
  await runHighlighterTask(async () => {
    const loadedLanguages = new Set(highlighter.getLoadedLanguages());
    const handledLanguageNames = /* @__PURE__ */ new Set();
    const registrations = /* @__PURE__ */ new Map();
    async function resolveLanguage(language, isEmbedded = false) {
      let languageInput;
      if (typeof language === "string") {
        language = langAlias[language] ?? language;
        if (handledLanguageNames.has(language))
          return [];
        handledLanguageNames.add(language);
        if (loadedLanguages.has(language) || isSpecialLang(language))
          return [];
        if (!Object.keys(bundledLanguages).includes(language)) {
          if (isEmbedded) {
            failedEmbeddedLanguages.add(language);
          } else {
            failedLanguages.add(language);
          }
          return [];
        }
        languageInput = bundledLanguages[language];
      } else {
        languageInput = language;
      }
      const potentialModule = await Promise.resolve(typeof languageInput === "function" ? languageInput() : languageInput);
      const potentialArray = "default" in potentialModule ? potentialModule.default : potentialModule;
      const languageRegistrations = Array.isArray(potentialArray) ? potentialArray : [potentialArray];
      languageRegistrations.forEach((lang) => {
        if (loadedLanguages.has(lang.name))
          return;
        const registration = { repository: {}, ...lang, embeddedLangsLazy: [] };
        registrations.set(lang.name, registration);
      });
      if (injectLangsIntoNestedCodeBlocks && !isEmbedded) {
        languageRegistrations.forEach((lang) => {
          const injectionLangs = getNestedCodeBlockInjectionLangs(lang, langAlias);
          injectionLangs.forEach((injectionLang) => registrations.set(injectionLang.name, injectionLang));
        });
      }
      const referencedLangs = [...new Set(languageRegistrations.map((lang) => lang.embeddedLangsLazy ?? []).flat())];
      await Promise.all(referencedLangs.map((lang) => resolveLanguage(lang, true)));
    }
    await Promise.all(langs.map((lang) => resolveLanguage(lang)));
    if (registrations.size)
      await highlighter.loadLanguage(...[...registrations.values()]);
  });
  return { failedLanguages, failedEmbeddedLanguages };
}
var taskQueue = [];
var processingQueue = false;
function runHighlighterTask(taskFn) {
  return new Promise((resolve, reject) => {
    taskQueue.push({ taskFn, resolve, reject });
    if (!processingQueue) {
      processingQueue = true;
      processQueue().catch((error) => {
        processingQueue = false;
        console.error("Error in Shiki highlighter task queue:", error);
      });
    }
  });
}
async function processQueue() {
  try {
    while (taskQueue.length > 0) {
      const task = taskQueue.shift();
      if (!task)
        break;
      const { taskFn, resolve, reject } = task;
      try {
        await taskFn();
        resolve();
      } catch (error) {
        reject(error);
      }
    }
  } finally {
    processingQueue = false;
  }
}

// src/transformers.ts
function validateTransformers(options) {
  if (!options.transformers)
    return;
  const unsupportedTransformerHooks = ["code", "line", "postprocess", "pre", "root", "span"];
  for (const transformer of options.transformers) {
    const unsupportedHook = unsupportedTransformerHooks.find((hook) => transformer[hook] != null);
    if (unsupportedHook) {
      throw new ExpressiveCodeShikiTransformerError(transformer, `The transformer hook "${unsupportedHook}" is not supported by Expressive Code yet.`);
    }
  }
}
function runPreprocessHook(args) {
  const { options, code, codeBlock, codeToTokensOptions } = args;
  options.transformers?.forEach((transformer) => {
    if (!transformer.preprocess)
      return;
    const transformerContext = getTransformerContext({ transformer, code, codeBlock, codeToTokensOptions });
    const transformedCode = transformer.preprocess.call(transformerContext, code, codeToTokensOptions);
    if (typeof transformedCode === "string" && transformedCode !== code) {
      throw new ExpressiveCodeShikiTransformerError(transformer, `Transformers that modify code in the "preprocess" hook are not supported yet.`);
    }
  });
}
function runTokensHook(args) {
  const { options, code, codeBlock, codeToTokensOptions } = args;
  const originalTokenLinesText = getTokenLinesText(args.tokenLines);
  options.transformers?.forEach((transformer) => {
    if (!transformer.tokens)
      return;
    const transformerContext = getTransformerContext({ transformer, code, codeBlock, codeToTokensOptions });
    const transformedTokenLines = transformer.tokens.call(transformerContext, args.tokenLines);
    if (transformedTokenLines) {
      args.tokenLines = transformedTokenLines;
    }
    const newTokenLinesText = getTokenLinesText(args.tokenLines);
    if (originalTokenLinesText.length !== args.tokenLines.length) {
      throw new ExpressiveCodeShikiTransformerError(
        transformer,
        `Transformers that modify code in the "tokens" hook are not supported yet. The number of lines changed from ${originalTokenLinesText.length} to ${args.tokenLines.length}.`
      );
    }
    for (let i = 0; i < newTokenLinesText.length; i++) {
      if (originalTokenLinesText[i] !== newTokenLinesText[i]) {
        throw new ExpressiveCodeShikiTransformerError(
          transformer,
          `Transformers that modify code in the "tokens" hook are not supported yet. Line ${i + 1} changed from "${originalTokenLinesText[i]}" to "${newTokenLinesText[i]}".`
        );
      }
    }
  });
  return args.tokenLines;
}
function getTokenLinesText(tokenLines) {
  return tokenLines.map((line) => line.map((token) => token.content).join(""));
}
function getTransformerContext(contextBase) {
  const { transformer, code, codeBlock, codeToTokensOptions } = contextBase;
  const getUnsupportedFnHandler = (name) => {
    return () => {
      throw new ExpressiveCodeShikiTransformerError(transformer, `The context function "${name}" is not available in Expressive Code transformers yet.`);
    };
  };
  return {
    source: code,
    options: codeToTokensOptions,
    meta: {
      ...Object.fromEntries(codeBlock.metaOptions.list().map((option) => [option.key, option.value])),
      __raw: codeBlock.meta
    },
    codeToHast: getUnsupportedFnHandler("codeToHast"),
    codeToTokens: getUnsupportedFnHandler("codeToTokens")
  };
}
var ExpressiveCodeShikiTransformerError = class extends Error {
  constructor(transformer, message) {
    super(
      `Failed to run Shiki transformer${transformer.name ? ` "${transformer.name}"` : ""}: ${message}
			
			IMPORTANT: This is not a bug - neither in Shiki, nor in the transformer or Expressive Code.
			Transformer support in Expressive Code is still experimental and limited to a few cases
			(e.g. transformers that modify syntax highlighting tokens).

			To continue, remove this transformer from the Expressive Code configuration,
			or visit the following link for more information and other options:
			https://expressive-code.com/key-features/syntax-highlighting/#transformers`.replace(/^\t+/gm, "").replace(/(?<!\n)\n(?!\n)/g, " ")
    );
    this.name = "ExpressiveCodeShikiTransformerError";
  }
};

// src/index.ts
async function loadShikiTheme(bundledThemeName) {
  const shikiTheme = (await bundledThemes[bundledThemeName]()).default;
  return new ExpressiveCodeTheme(shikiTheme);
}
function pluginShiki(options = {}) {
  const { langs, langAlias = {}, injectLangsIntoNestedCodeBlocks, engine } = options;
  validateTransformers(options);
  return {
    name: "Shiki",
    hooks: {
      performSyntaxAnalysis: async ({ codeBlock, styleVariants, config: { logger } }) => {
        const codeLines = codeBlock.getLines();
        let code = codeBlock.code;
        if (isTerminalLanguage(codeBlock.language)) {
          code = code.replace(/<([^>]*[^>\s])>/g, "X$1X");
        }
        let highlighter;
        try {
          highlighter = await getCachedHighlighter({ langs, langAlias, injectLangsIntoNestedCodeBlocks, engine });
        } catch (err) {
          const error = err instanceof Error ? err : new Error(String(err));
          throw new Error(`Failed to load syntax highlighter. Please ensure that the configured langs are supported by Shiki.
Received error message: "${error.message}"`, {
            cause: error
          });
        }
        const languageLoadErrors = await ensureLanguagesAreLoaded({ highlighter, langs: [codeBlock.language], langAlias });
        const resolvedLanguage = langAlias[codeBlock.language] ?? codeBlock.language;
        const primaryLanguageFailed = languageLoadErrors.failedLanguages.has(resolvedLanguage);
        const embeddedLanguagesFailed = languageLoadErrors.failedEmbeddedLanguages.size > 0;
        const loadedLanguageName = primaryLanguageFailed ? "txt" : resolvedLanguage;
        if (primaryLanguageFailed || embeddedLanguagesFailed) {
          const formatLangs = (langs2) => `language${[...langs2].length !== 1 ? "s" : ""} ${[...langs2].sort().map((lang) => `"${lang}"`).join(", ")}`;
          const errorParts = [
            `Error while highlighting code block using ${formatLangs([codeBlock.language])} in ${codeBlock.parentDocument?.sourceFilePath ? `document "${codeBlock.parentDocument?.sourceFilePath}"` : "markdown/MDX document"}.`
          ];
          if (primaryLanguageFailed)
            errorParts.push(`The language could not be found. Using "${loadedLanguageName}" instead.`);
          if (embeddedLanguagesFailed) {
            errorParts.push(`The embedded ${formatLangs(languageLoadErrors.failedEmbeddedLanguages)} could not be found, so highlighting may be incomplete.`);
          }
          errorParts.push('Ensure that all required languages are either part of the bundle or custom languages provided in the "langs" config option.');
          logger.warn(errorParts.join(" "));
        }
        for (let styleVariantIndex = 0; styleVariantIndex < styleVariants.length; styleVariantIndex++) {
          const theme = styleVariants[styleVariantIndex].theme;
          const loadedThemeName = await ensureThemeIsLoaded(highlighter, theme, styleVariants);
          let tokenLines = [];
          try {
            const codeToTokensOptions = {
              lang: loadedLanguageName,
              theme: loadedThemeName,
              includeExplanation: false
            };
            runPreprocessHook({ options, code, codeBlock, codeToTokensOptions });
            const codeToTokensBase = highlighter.codeToTokensBase;
            await runHighlighterTask(() => {
              tokenLines = codeToTokensBase(code, codeToTokensOptions);
            });
            tokenLines = runTokensHook({ options, code, codeBlock, codeToTokensOptions, tokenLines });
          } catch (err) {
            const error = err instanceof Error ? err : new Error(String(err));
            throw new Error(`Failed to highlight code block with language "${codeBlock.language}" and theme "${theme.name}".
Received error message: "${error.message}"`, {
              cause: error
            });
          }
          tokenLines.forEach((line, lineIndex) => {
            if (codeBlock.language === "ansi" && styleVariantIndex === 0)
              removeAnsiSequencesFromCodeLine(codeLines[lineIndex], line);
            let charIndex = 0;
            line.forEach((token) => {
              const tokenLength = token.content.length;
              const tokenEndIndex = charIndex + tokenLength;
              const fontStyle = token.fontStyle || 0 /* None */;
              codeLines[lineIndex]?.addAnnotation(
                new InlineStyleAnnotation({
                  styleVariantIndex,
                  color: token.color || theme.fg,
                  italic: (fontStyle & 1 /* Italic */) === 1 /* Italic */,
                  bold: (fontStyle & 2 /* Bold */) === 2 /* Bold */,
                  underline: (fontStyle & 4 /* Underline */) === 4 /* Underline */,
                  inlineRange: {
                    columnStart: charIndex,
                    columnEnd: tokenEndIndex
                  },
                  renderPhase: "earliest"
                })
              );
              charIndex = tokenEndIndex;
            });
          });
        }
      }
    }
  };
}
function isTerminalLanguage(language) {
  return ["shellscript", "shell", "bash", "sh", "zsh", "nu", "nushell"].includes(language);
}
function removeAnsiSequencesFromCodeLine(codeLine, lineTokens) {
  const newLine = lineTokens.map((token) => token.content).join("");
  const rangesToRemove = getRemovedRanges(codeLine.text, newLine);
  for (let index = rangesToRemove.length - 1; index >= 0; index--) {
    const [start, end] = rangesToRemove[index];
    codeLine.editText(start, end, "");
  }
}
function getRemovedRanges(original, edited) {
  const ranges = [];
  let from = -1;
  let orgIdx = 0;
  let edtIdx = 0;
  while (orgIdx < original.length && edtIdx < edited.length) {
    if (original[orgIdx] !== edited[edtIdx]) {
      if (from === -1)
        from = orgIdx;
      orgIdx++;
    } else {
      if (from > -1) {
        ranges.push([from, orgIdx]);
        from = -1;
      }
      orgIdx++;
      edtIdx++;
    }
  }
  if (edtIdx < edited.length)
    throw new Error(`Edited string contains characters not present in original (${JSON.stringify({ original, edited })})`);
  if (orgIdx < original.length)
    ranges.push([orgIdx, original.length]);
  return ranges;
}

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp(target, "default", { value: mod, enumerable: true }) ,
  mod
));

// ../../../node_modules/.pnpm/parse-numeric-range@1.3.0/node_modules/parse-numeric-range/index.js
var require_parse_numeric_range = __commonJS({
  "../../../node_modules/.pnpm/parse-numeric-range@1.3.0/node_modules/parse-numeric-range/index.js"(exports, module) {
    function parsePart(string) {
      let res = [];
      let m;
      for (let str of string.split(",").map((str2) => str2.trim())) {
        if (/^-?\d+$/.test(str)) {
          res.push(parseInt(str, 10));
        } else if (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)) {
          let [_, lhs, sep, rhs] = m;
          if (lhs && rhs) {
            lhs = parseInt(lhs);
            rhs = parseInt(rhs);
            const incr = lhs < rhs ? 1 : -1;
            if (sep === "-" || sep === ".." || sep === "\u2025")
              rhs += incr;
            for (let i = lhs; i !== rhs; i += incr)
              res.push(i);
          }
        }
      }
      return res;
    }
    exports.default = parsePart;
    module.exports = parsePart;
  }
});

// src/index.ts
var import_parse_numeric_range = __toESM(require_parse_numeric_range());

// src/marker-types.ts
var MarkerTypeOrder = ["mark", "del", "ins"];
function markerTypeFromString(input) {
  if (input === "add")
    input = "ins";
  if (input === "rem")
    input = "del";
  const markerType = input;
  return MarkerTypeOrder.includes(markerType) ? markerType : undefined;
}
var textMarkersStyleSettings = new PluginStyleSettings({
  defaultValues: {
    textMarkers: {
      lineMarkerAccentMargin: "0rem",
      lineMarkerAccentWidth: "0.15rem",
      lineMarkerLabelPaddingInline: "0.2rem",
      lineMarkerLabelColor: "white",
      lineDiffIndicatorMarginLeft: "0.3rem",
      inlineMarkerBorderWidth: "1.5px",
      inlineMarkerBorderRadius: "0.2rem",
      inlineMarkerPadding: "0.15rem",
      // Define base colors for all markers in the LCH color space,
      // which leads to consistent perceived brightness independent of hue
      markHue: "284",
      insHue: "136",
      delHue: "33",
      defaultChroma: "40",
      defaultLuminance: ["32%", "75%"],
      backgroundOpacity: "50%",
      borderLuminance: "48%",
      borderOpacity: "81.6%",
      indicatorLuminance: ["67%", "40%"],
      indicatorOpacity: "81.6%",
      // You can use these to override the diff indicator content
      insDiffIndicatorContent: "'+'",
      delDiffIndicatorContent: "'-'",
      // The settings below will be calculated based on the settings above
      markBackground: (context) => resolveBg(context, "textMarkers.markHue"),
      markBorderColor: (context) => resolveBorder(context, "textMarkers.markHue"),
      insBackground: (context) => resolveBg(context, "textMarkers.insHue"),
      insBorderColor: (context) => resolveBorder(context, "textMarkers.insHue"),
      insDiffIndicatorColor: (context) => resolveIndicator(context, "textMarkers.insHue"),
      delBackground: (context) => resolveBg(context, "textMarkers.delHue"),
      delBorderColor: (context) => resolveBorder(context, "textMarkers.delHue"),
      delDiffIndicatorColor: (context) => resolveIndicator(context, "textMarkers.delHue")
    }
  },
  cssVarExclusions: [
    // Exclude all settings from CSS variable output that will not be used directly in styles,
    // but instead be used to calculate other settings
    "textMarkers.markHue",
    "textMarkers.insHue",
    "textMarkers.delHue",
    "textMarkers.defaultChroma",
    "textMarkers.defaultLuminance",
    "textMarkers.backgroundOpacity",
    "textMarkers.borderLuminance",
    "textMarkers.borderOpacity",
    "textMarkers.indicatorLuminance",
    "textMarkers.indicatorOpacity"
  ]
});
function getTextMarkersBaseStyles({ cssVar }) {
  const result = `
		.${codeLineClass} {
			/* Support line-level mark/ins/del */
			&.mark {
				--tmLineBgCol: ${cssVar("textMarkers.markBackground")};
				& .code {
					--ecLineBrdCol: ${cssVar("textMarkers.markBorderColor")};
				}
			}
			&.ins {
				--tmLineBgCol: ${cssVar("textMarkers.insBackground")};
				--tmLabel: ${cssVar("textMarkers.insDiffIndicatorContent")};
				& .code {
					--ecLineBrdCol: ${cssVar("textMarkers.insBorderColor")};
					&::before {
						color: ${cssVar("textMarkers.insDiffIndicatorColor")};
					}
				}
			}
			&.del {
				--tmLineBgCol: ${cssVar("textMarkers.delBackground")};
				--tmLabel: ${cssVar("textMarkers.delDiffIndicatorContent")};
				& .code {
					--ecLineBrdCol: ${cssVar("textMarkers.delBorderColor")};
					&::before {
						color: ${cssVar("textMarkers.delDiffIndicatorColor")};
					}
				}
			}
			&.mark,
			&.ins,
			&.del {
				background: var(--tmLineBgCol);

				& .code {
					--ecGtrBrdWd: ${cssVar("textMarkers.lineMarkerAccentWidth")};
				}
				& .code::before {
					display: block;
					position: absolute;
					left: 0;
					box-sizing: border-box;
					content: var(--tmLabel, ' ');
					padding-inline-start: ${cssVar("textMarkers.lineDiffIndicatorMarginLeft")};
					text-align: center;
					/* Prevent long labels from wrapping to avoid overlapping the code */
					white-space: pre;
				}

				&.tm-label {
					& .code::before {
						background: var(--ecLineBrdCol);
						padding: 0 calc(${cssVar("textMarkers.lineMarkerLabelPaddingInline")} + ${cssVar("textMarkers.lineMarkerAccentWidth")}) 0 ${cssVar("textMarkers.lineMarkerLabelPaddingInline")};
						color: ${cssVar("textMarkers.lineMarkerLabelColor")};
					}
				}
			}

			/* Support inline mark/ins/del */
			& mark {
				--tmInlineBgCol: ${cssVar("textMarkers.markBackground")};
				--tmInlineBrdCol: ${cssVar("textMarkers.markBorderColor")};
			}
			& ins {
				--tmInlineBgCol: ${cssVar("textMarkers.insBackground")};
				--tmInlineBrdCol: ${cssVar("textMarkers.insBorderColor")};
			}
			& del {
				--tmInlineBgCol: ${cssVar("textMarkers.delBackground")};
				--tmInlineBrdCol: ${cssVar("textMarkers.delBorderColor")};
			}
			& mark,
			& ins,
			& del {
				all: unset;
				display: inline-block;
				position: relative;
				--tmBrdL: ${cssVar("textMarkers.inlineMarkerBorderWidth")};
				--tmBrdR: ${cssVar("textMarkers.inlineMarkerBorderWidth")};
				--tmRadL: ${cssVar("textMarkers.inlineMarkerBorderRadius")};
				--tmRadR: ${cssVar("textMarkers.inlineMarkerBorderRadius")};
				margin-inline: 0.025rem;
				padding-inline: ${cssVar("textMarkers.inlineMarkerPadding")};
				border-radius: var(--tmRadL) var(--tmRadR) var(--tmRadR) var(--tmRadL);
				background: var(--tmInlineBgCol);
				background-clip: padding-box;

				&.open-start {
					margin-inline-start: 0;
					padding-inline-start: 0;
					--tmBrdL: 0px;
					--tmRadL: 0;
				}
				&.open-end {
					margin-inline-end: 0;
					padding-inline-end: 0;
					--tmBrdR: 0px;
					--tmRadR: 0;
				}
				&::before {
					content: '';
					position: absolute;
					pointer-events: none;
					display: inline-block;
					inset: 0;
					border-radius: var(--tmRadL) var(--tmRadR) var(--tmRadR) var(--tmRadL);
					border: ${cssVar("textMarkers.inlineMarkerBorderWidth")} solid var(--tmInlineBrdCol);
					border-inline-width: var(--tmBrdL) var(--tmBrdR);
				}
			}
		}
	`;
  return result;
}
var markerBgColorPaths = {
  mark: "textMarkers.markBackground",
  ins: "textMarkers.insBackground",
  del: "textMarkers.delBackground"
};
function resolveBg({ resolveSetting: r }, hue) {
  return toHexColor(`lch(${r("textMarkers.defaultLuminance")} ${r("textMarkers.defaultChroma")} ${r(hue)} / ${r("textMarkers.backgroundOpacity")})`);
}
function resolveBorder({ resolveSetting: r }, hue) {
  return toHexColor(`lch(${r("textMarkers.borderLuminance")} ${r("textMarkers.defaultChroma")} ${r(hue)} / ${r("textMarkers.borderOpacity")})`);
}
function resolveIndicator({ resolveSetting: r }, hue) {
  return toHexColor(`lch(${r("textMarkers.indicatorLuminance")} ${r("textMarkers.defaultChroma")} ${r(hue)} / ${r("textMarkers.indicatorOpacity")})`);
}

// src/utils.ts
function getGroupIndicesFromRegExpMatch(match) {
  let groupIndices = match.indices;
  if (groupIndices?.length)
    return groupIndices;
  const fullMatchIndex = match.index;
  groupIndices = match.map((groupValue) => {
    const groupIndex = groupValue ? match[0].indexOf(groupValue) : -1;
    if (groupIndex === -1)
      return null;
    const groupStart = fullMatchIndex + groupIndex;
    const groupEnd = groupStart + groupValue.length;
    return [groupStart, groupEnd];
  });
  return groupIndices;
}
function toDefinitionsArray(value) {
  if (value === undefined)
    return [];
  return Array.isArray(value) ? value : [value];
}

// src/inline-markers.ts
function getInlineSearchTermMatches(lineText, codeBlock) {
  const markerMatches = [];
  MarkerTypeOrder.forEach((markerType) => {
    toDefinitionsArray(codeBlock.props[markerType]).forEach((definition) => {
      if (typeof definition === "string") {
        let idx = lineText.indexOf(definition, 0);
        while (idx > -1) {
          markerMatches.push({
            markerType,
            start: idx,
            end: idx + definition.length
          });
          idx = lineText.indexOf(definition, idx + definition.length);
        }
      }
      if (definition instanceof RegExp) {
        const matches = lineText.matchAll(definition);
        for (const match of matches) {
          const rawGroupIndices = getGroupIndicesFromRegExpMatch(match);
          let groupIndices = rawGroupIndices.flatMap((range) => range ? [range] : []);
          if (!groupIndices.length) {
            const fullMatchIndex = match.index;
            groupIndices = [[fullMatchIndex, fullMatchIndex + match[0].length]];
          }
          if (groupIndices.length > 1) {
            groupIndices.shift();
          }
          groupIndices.forEach((range) => {
            markerMatches.push({
              markerType,
              start: range[0],
              end: range[1]
            });
          });
        }
      }
    });
  });
  return markerMatches;
}
function flattenInlineMarkerRanges(markerRanges) {
  const flattenedRanges = [];
  const addRange = (newRange) => {
    for (let idx = flattenedRanges.length - 1; idx >= 0; idx--) {
      const curRange = flattenedRanges[idx];
      if (newRange.end <= curRange.start || newRange.start >= curRange.end)
        continue;
      if (newRange.start <= curRange.start && newRange.end >= curRange.end) {
        flattenedRanges.splice(idx, 1);
        continue;
      }
      if (newRange.markerType === curRange.markerType) {
        flattenedRanges.splice(idx, 1);
        newRange = {
          ...newRange,
          start: Math.min(newRange.start, curRange.start),
          end: Math.max(newRange.end, curRange.end)
        };
        continue;
      }
      if (newRange.start > curRange.start && newRange.end < curRange.end) {
        flattenedRanges.splice(idx, 1, { ...curRange, end: newRange.start }, { ...curRange, start: newRange.end });
        continue;
      }
      if (newRange.start > curRange.start) {
        curRange.end = newRange.start;
      }
      if (newRange.end < curRange.end) {
        curRange.start = newRange.end;
      }
    }
    flattenedRanges.push(newRange);
    flattenedRanges.sort((a, b) => a.start - b.start);
  };
  MarkerTypeOrder.forEach((markerType) => {
    markerRanges.filter((range) => range.markerType === markerType).forEach(addRange);
  });
  return flattenedRanges;
}
var TextMarkerAnnotation = class extends ExpressiveCodeAnnotation {
  markerType;
  backgroundColor;
  label;
  constructor({ markerType, backgroundColor, label, ...baseOptions }) {
    super(baseOptions);
    this.markerType = markerType;
    this.backgroundColor = backgroundColor;
    this.label = label;
  }
  render(options) {
    if (!this.inlineRange)
      return this.renderFullLineMarker(options);
    return this.renderInlineMarker(options);
  }
  renderFullLineMarker({ nodesToTransform }) {
    return nodesToTransform.map((node) => {
      if (node.type === "element") {
        addClassName$1(node, "highlight");
        addClassName$1(node, this.markerType);
        if (this.label) {
          addClassName$1(node, "tm-label");
          setInlineStyle$1(node, "--tmLabel", this.label, "string");
        }
      }
      return node;
    });
  }
  renderInlineMarker({ nodesToTransform }) {
    return nodesToTransform.map((node, idx) => {
      const transformedNode = h(this.markerType, node);
      if (nodesToTransform.length > 0 && idx > 0) {
        addClassName$1(transformedNode, "open-start");
      }
      if (nodesToTransform.length > 0 && idx < nodesToTransform.length - 1) {
        addClassName$1(transformedNode, "open-end");
      }
      return transformedNode;
    });
  }
};

// src/index.ts
function pluginTextMarkers() {
  return {
    name: "TextMarkers",
    styleSettings: textMarkersStyleSettings,
    baseStyles: (context) => getTextMarkersBaseStyles(context),
    hooks: {
      preprocessLanguage: ({ codeBlock }) => {
        const lang = codeBlock.metaOptions.getString("lang");
        if (lang && codeBlock.language === "diff") {
          codeBlock.language = lang;
          codeBlock.props.useDiffSyntax = true;
        }
      },
      preprocessMetadata: ({ codeBlock, cssVar }) => {
        const addDefinition = (target, definition) => {
          const definitions = toDefinitionsArray(codeBlock.props[target]);
          definitions.push(definition);
          codeBlock.props[target] = definitions;
        };
        codeBlock.metaOptions.list([...MarkerTypeOrder, "", "add", "rem"]).forEach((option) => {
          const { kind, key, value } = option;
          const markerType = markerTypeFromString(key || "mark");
          if (!markerType)
            return;
          if (kind === "string" || kind === "regexp")
            addDefinition(markerType, value);
          if (kind === "range") {
            let label = undefined;
            const range = value.replace(/^\s*?(["'])((?:(?!\1).)+?)\1:\s*?/, (_match, _quote, labelValue) => {
              label = labelValue;
              return "";
            });
            addDefinition(markerType, { range, label });
          }
        });
        codeBlock.props.useDiffSyntax = codeBlock.metaOptions.getBoolean("useDiffSyntax") ?? codeBlock.props.useDiffSyntax;
        MarkerTypeOrder.forEach((markerType) => {
          toDefinitionsArray(codeBlock.props[markerType]).forEach((definition) => {
            if (typeof definition === "string" || definition instanceof RegExp)
              return;
            const objDefinition = typeof definition === "number" ? { range: `${definition}` } : definition;
            const { range = "", label } = objDefinition;
            const lineNumbers = (0, import_parse_numeric_range.default)(range);
            lineNumbers.forEach((lineNumber, idx) => {
              const lineIndex = lineNumber - 1;
              codeBlock.getLine(lineIndex)?.addAnnotation(
                new TextMarkerAnnotation({
                  markerType,
                  backgroundColor: cssVar(markerBgColorPaths[markerType]),
                  // Add a label to the first line of each consecutive range
                  label: idx === 0 || lineNumber - lineNumbers[idx - 1] !== 1 ? label : undefined
                })
              );
            });
          });
        });
      },
      preprocessCode: ({ codeBlock, cssVar }) => {
        if (codeBlock.language === "diff" || codeBlock.props.useDiffSyntax) {
          const lines = codeBlock.getLines();
          const couldBeRealDiffFile = lines.slice(0, 4).some((line) => line.text.match(/^([*+-]{3}\s|@@\s|[0-9,]+[acd][0-9,]+\s*$)/));
          if (!couldBeRealDiffFile) {
            let minIndentation = Infinity;
            const parsedLines = lines.map((line) => {
              const [, indentation, marker, content] = line.text.match(/^(([+-](?![+-]))?\s*)(.*)$/) || [];
              const markerType = marker === "+" ? "ins" : marker === "-" ? "del" : undefined;
              if (content.trim().length > 0 && indentation.length < minIndentation)
                minIndentation = indentation.length;
              return {
                line,
                markerType
              };
            });
            parsedLines.forEach(({ line, markerType }) => {
              const colsToRemove = minIndentation || (markerType ? 1 : 0);
              if (colsToRemove > 0)
                line.editText(0, colsToRemove, "");
              if (markerType) {
                line.addAnnotation(
                  new TextMarkerAnnotation({
                    markerType,
                    backgroundColor: cssVar(markerBgColorPaths[markerType])
                  })
                );
              }
            });
          }
        }
      },
      annotateCode: ({ codeBlock, cssVar }) => {
        codeBlock.getLines().forEach((line) => {
          const markerRanges = getInlineSearchTermMatches(line.text, codeBlock);
          if (!markerRanges.length)
            return;
          const flattenedRanges = flattenInlineMarkerRanges(markerRanges);
          flattenedRanges.forEach(({ markerType, start, end }) => {
            line.addAnnotation(
              new TextMarkerAnnotation({
                markerType,
                backgroundColor: cssVar(markerBgColorPaths[markerType]),
                inlineRange: {
                  columnStart: start,
                  columnEnd: end
                }
              })
            );
          });
        });
      },
      postprocessAnnotations: ({ codeBlock, styleVariants, config }) => {
        if (config.minSyntaxHighlightingColorContrast <= 0)
          return;
        codeBlock.getLines().forEach((line) => {
          const annotations = line.getAnnotations();
          const markers = [];
          let fullLineMarker = undefined;
          for (const annotation of annotations) {
            if (!(annotation instanceof TextMarkerAnnotation))
              continue;
            if (annotation.inlineRange) {
              markers.push(annotation);
              continue;
            }
            if (fullLineMarker) {
              if (MarkerTypeOrder.indexOf(annotation.markerType) < MarkerTypeOrder.indexOf(fullLineMarker.markerType))
                continue;
              if (AnnotationRenderPhaseOrder.indexOf(annotation.renderPhase || "normal") < AnnotationRenderPhaseOrder.indexOf(fullLineMarker.renderPhase || "normal"))
                continue;
            }
            fullLineMarker = annotation;
          }
          if (fullLineMarker)
            markers.unshift(fullLineMarker);
          styleVariants.forEach((styleVariant, styleVariantIndex) => {
            const fullLineMarkerBgColor = fullLineMarker && styleVariant.resolvedStyleSettings.get(markerBgColorPaths[fullLineMarker.markerType]) || "transparent";
            const lineBgColor = onBackground(fullLineMarkerBgColor, getStaticBackgroundColor(styleVariant));
            const textColors = annotations.filter(
              (annotation) => isInlineStyleAnnotation(annotation) && annotation.color && // Only consider annotations that apply to the current style variant
              (annotation.styleVariantIndex === undefined || annotation.styleVariantIndex === styleVariantIndex)
            );
            textColors.forEach((textColor) => {
              const textFgColor = textColor.color;
              const textStart = textColor.inlineRange?.columnStart;
              const textEnd = textColor.inlineRange?.columnEnd;
              if (textFgColor === undefined || textStart === undefined || textEnd === undefined)
                return;
              markers.forEach((marker) => {
                const markerStart = marker.inlineRange?.columnStart ?? 0;
                const markerEnd = marker.inlineRange?.columnEnd ?? line.text.length;
                if (markerStart > textEnd || markerEnd < textStart)
                  return;
                const inlineMarkerBgColor = marker.inlineRange && styleVariant.resolvedStyleSettings.get(markerBgColorPaths[marker.markerType]) || "transparent";
                const combinedBgColor = onBackground(inlineMarkerBgColor, lineBgColor);
                const readableTextColor = ensureColorContrastOnBackground(textFgColor, combinedBgColor, config.minSyntaxHighlightingColorContrast);
                if (readableTextColor.toLowerCase() === textFgColor.toLowerCase())
                  return;
                line.addAnnotation(
                  new InlineStyleAnnotation({
                    styleVariantIndex,
                    inlineRange: {
                      columnStart: Math.max(textStart, markerStart),
                      columnEnd: Math.min(textEnd, markerEnd)
                    },
                    color: readableTextColor,
                    renderPhase: "earlier"
                  })
                );
              });
            });
          });
        });
      }
    }
  };
}

// src/index.ts
var ExpressiveCode = class extends ExpressiveCodeEngine {
  constructor({ shiki, textMarkers, frames, ...baseConfig } = {}) {
    const pluginsToPrepend = [];
    const baseConfigPlugins = baseConfig.plugins?.flat() || [];
    const notPresentInPlugins = (name) => baseConfigPlugins.every((plugin) => plugin.name !== name);
    if (shiki !== false && notPresentInPlugins("Shiki")) {
      pluginsToPrepend.push(pluginShiki(shiki !== true ? shiki : undefined));
    }
    if (textMarkers !== false && notPresentInPlugins("TextMarkers")) {
      if (typeof textMarkers === "object" && textMarkers.styleOverrides) {
        throw new Error(
          `The Expressive Code config option "textMarkers" can no longer be an object,
					but only undefined or a boolean. Please move any style settings into the
					top-level "styleOverrides" object below the new "textMarkers" key.`.replace(/\s+/g, " ")
        );
      }
      pluginsToPrepend.push(pluginTextMarkers());
    }
    if (frames !== false && notPresentInPlugins("Frames")) {
      if (typeof frames === "object" && frames.styleOverrides) {
        throw new Error(
          `The config option "frames" no longer has its own "styleOverrides" object.
					Please move any style settings into the top-level "styleOverrides" object
					below the new "frames" key.`.replace(/\s+/g, " ")
        );
      }
      pluginsToPrepend.push(pluginFrames(frames !== true ? frames : undefined));
    }
    const pluginsWithDefaults = [...pluginsToPrepend, ...baseConfig.plugins || []];
    super({ ...baseConfig, plugins: pluginsWithDefaults });
  }
};

// src/index.ts
async function createRenderer(options = {}) {
  const deprecatedOptions = options;
  if (deprecatedOptions.theme && !options.themes) {
    options.themes = Array.isArray(deprecatedOptions.theme) ? deprecatedOptions.theme : [deprecatedOptions.theme];
    delete deprecatedOptions.theme;
  }
  const { themes, ...ecOptions } = options;
  const loadedThemes = themes && await Promise.all(
    (Array.isArray(themes) ? themes : [themes]).map(async (theme) => {
      const mustLoadTheme = theme !== undefined && !(theme instanceof ExpressiveCodeTheme);
      const optLoadedTheme = mustLoadTheme ? new ExpressiveCodeTheme(typeof theme === "string" ? await loadShikiTheme(theme) : theme) : theme;
      return optLoadedTheme;
    })
  );
  const ec = new ExpressiveCode({
    themes: loadedThemes,
    ...ecOptions
  });
  const baseStyles = await ec.getBaseStyles();
  const themeStyles = await ec.getThemeStyles();
  const jsModules = await ec.getJsModules();
  return {
    ec,
    baseStyles,
    themeStyles,
    jsModules
  };
}

function mergeEcConfigOptions(...configs) {
  const merged = {};
  configs.forEach((config) => merge(merged, config, ["defaultProps", "frames", "shiki", "styleOverrides"]));
  return merged;
  function isObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }
  function merge(target, source, limitDeepMergeTo, path = "") {
    for (const key in source) {
      const srcProp = source[key];
      const tgtProp = target[key];
      if (isObject(srcProp)) {
        if (isObject(tgtProp) && (!limitDeepMergeTo || limitDeepMergeTo.includes(key))) {
          merge(tgtProp, srcProp, undefined, path ? path + "." + key : key);
        } else {
          target[key] = { ...srcProp };
        }
      } else if (Array.isArray(srcProp)) {
        if (Array.isArray(tgtProp) && path === "shiki" && key === "langs") {
          target[key] = [...tgtProp, ...srcProp];
        } else {
          target[key] = [...srcProp];
        }
      } else {
        target[key] = srcProp;
      }
    }
  }
}
function getAssetsPrefix(fileExtension, assetsPrefix) {
  if (!assetsPrefix)
    return "";
  if (typeof assetsPrefix === "string")
    return assetsPrefix;
  const dotLessFileExtension = fileExtension.slice(1);
  if (assetsPrefix[dotLessFileExtension]) {
    return assetsPrefix[dotLessFileExtension];
  }
  return assetsPrefix.fallback;
}
function getAssetsBaseHref(fileExtension, assetsPrefix, base) {
  return (getAssetsPrefix(fileExtension, assetsPrefix) || base || "").trim().replace(/\/+$/g, "");
}
async function createAstroRenderer({ ecConfig, astroConfig, logger }) {
  const { emitExternalStylesheet = true, customCreateRenderer, plugins = [], shiki = true, ...rest } = ecConfig ?? {};
  const assetsDir = astroConfig.build?.assets || "_astro";
  const hashedStyles = [];
  const hashedScripts = [];
  plugins.push({
    name: "astro-expressive-code",
    hooks: {
      postprocessRenderedBlockGroup: ({ renderData, renderedGroupContents }) => {
        const isFirstGroupInDocument = renderedGroupContents[0]?.codeBlock.parentDocument?.positionInDocument?.groupIndex === 0;
        if (!isFirstGroupInDocument)
          return;
        const extraElements = [];
        hashedStyles.forEach(([hashedRoute]) => {
          extraElements.push({
            type: "element",
            tagName: "link",
            properties: { rel: "stylesheet", href: `${getAssetsBaseHref(".css", astroConfig.build?.assetsPrefix, astroConfig.base)}${hashedRoute}` },
            children: []
          });
        });
        hashedScripts.forEach(([hashedRoute]) => {
          extraElements.push({
            type: "element",
            tagName: "script",
            properties: { type: "module", src: `${getAssetsBaseHref(".js", astroConfig.build?.assetsPrefix, astroConfig.base)}${hashedRoute}` },
            children: []
          });
        });
        if (!extraElements.length)
          return;
        renderData.groupAst.children.unshift(...extraElements);
      }
    }
  });
  const mergedShikiConfig = shiki === true ? {} : shiki;
  const astroShikiConfig = astroConfig.markdown?.shikiConfig;
  if (mergedShikiConfig) {
    if (!mergedShikiConfig.langs && astroShikiConfig?.langs)
      mergedShikiConfig.langs = astroShikiConfig.langs;
    if (!mergedShikiConfig.langAlias && astroShikiConfig?.langAlias)
      mergedShikiConfig.langAlias = astroShikiConfig.langAlias;
  }
  const renderer = await (customCreateRenderer ?? createRenderer)({
    plugins,
    logger,
    shiki: mergedShikiConfig,
    ...rest
  });
  renderer.hashedStyles = hashedStyles;
  renderer.hashedScripts = hashedScripts;
  if (emitExternalStylesheet) {
    const combinedStyles = `${renderer.baseStyles}${renderer.themeStyles}`;
    hashedStyles.push(getHashedRouteWithContent(combinedStyles, `/${assetsDir}/ec.{hash}.css`));
    renderer.baseStyles = "";
    renderer.themeStyles = "";
  }
  const uniqueJsModules = [...new Set(renderer.jsModules)];
  const mergedJsCode = uniqueJsModules.join("\n");
  renderer.jsModules = [];
  hashedScripts.push(getHashedRouteWithContent(mergedJsCode, `/${assetsDir}/ec.{hash}.js`));
  return renderer;
}
function getHashedRouteWithContent(content, routeTemplate) {
  const contentHash = getStableObjectHash(content, { hashLength: 5 });
  return [routeTemplate.replace("{hash}", contentHash), content];
}

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  AnnotationRenderPhaseOrder,
  ExpressiveCode,
  ExpressiveCodeAnnotation,
  ExpressiveCodeBlock,
  ExpressiveCodeEngine,
  ExpressiveCodeLine,
  ExpressiveCodeTheme,
  InlineStyleAnnotation,
  LanguageGroups,
  LanguagesWithFencedFrontmatter,
  MetaOptions,
  PluginStyleSettings,
  PluginTexts,
  changeAlphaToReachColorContrast,
  changeLuminanceToReachColorContrast,
  chromaticRecolor,
  codeLineClass,
  createAstroRenderer,
  createRenderer,
  darken,
  ensureColorContrastOnBackground,
  getCssVarName,
  getFirstStaticColor,
  getLuminance,
  getStableObjectHash,
  getStaticBackgroundColor,
  isInlineStyleAnnotation,
  lighten,
  loadShikiTheme,
  mergeEcConfigOptions,
  multiplyAlpha,
  onBackground,
  pluginFrames,
  pluginFramesTexts,
  pluginShiki,
  pluginTextMarkers,
  resolveStyleVariants,
  runHooks,
  setAlpha,
  setLuminance,
  stableStringify,
  toHexColor,
  validateExpressiveCodeAnnotation
}, Symbol.toStringTag, { value: 'Module' }));

export { createOnigurumaEngine as c, getDefaultWasmLoader as g, index as i, loadWasm as l };
