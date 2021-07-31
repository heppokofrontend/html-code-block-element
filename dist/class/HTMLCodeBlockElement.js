"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _shadowRoot = /*#__PURE__*/new WeakMap();

var _codeBlock = /*#__PURE__*/new WeakMap();

var _codeWrap = /*#__PURE__*/new WeakMap();

var _value = /*#__PURE__*/new WeakMap();

var _label = /*#__PURE__*/new WeakMap();

var _language = /*#__PURE__*/new WeakMap();

var _controls = /*#__PURE__*/new WeakMap();

var _render = /*#__PURE__*/new WeakSet();

var HTMLCodeBlockElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(HTMLCodeBlockElement, _HTMLElement);

  var _super = _createSuper(HTMLCodeBlockElement);

  function HTMLCodeBlockElement() {
    var _classPrivateFieldGet2;

    var _this;

    _classCallCheck(this, HTMLCodeBlockElement);

    _this = _super.call(this);
    /**
     * @param name - The value of name attribute for the slot element
     * @returns - The slot element
     */

    _render.add(_assertThisInitialized(_this));

    _shadowRoot.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _codeBlock.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _codeWrap.set(_assertThisInitialized(_this), {
      writable: true,
      value: void 0
    });

    _value.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _label.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _language.set(_assertThisInitialized(_this), {
      writable: true,
      value: ''
    });

    _controls.set(_assertThisInitialized(_this), {
      writable: true,
      value: false
    });

    var mkslot = function mkslot(name) {
      var slot = document.createElement('slot');
      slot.name = name;
      return slot;
    };

    var slots = [mkslot('label'), mkslot('copy-button'), mkslot('code')];
    var pre = document.createElement('pre');
    var code = document.createElement('code');
    code.tabIndex = 0;
    code.className = 'hljs'; // TODO: Make it variable

    pre.slot = 'code';
    pre.append(code); // Hard private props initialize

    _classPrivateFieldSet(_assertThisInitialized(_this), _value, (_this.textContent || '').replace(/^\n/, ''));

    _classPrivateFieldSet(_assertThisInitialized(_this), _label, _this.getAttribute('label') || '');

    _classPrivateFieldSet(_assertThisInitialized(_this), _language, _this.getAttribute('language') || '');

    _classPrivateFieldSet(_assertThisInitialized(_this), _controls, _this.getAttribute('controls') !== null);

    _classPrivateFieldSet(_assertThisInitialized(_this), _shadowRoot, _this.attachShadow({
      mode: 'closed'
    }));

    _classPrivateFieldSet(_assertThisInitialized(_this), _codeBlock, code);

    _classPrivateFieldSet(_assertThisInitialized(_this), _codeWrap, pre);

    (_classPrivateFieldGet2 = _classPrivateFieldGet(_assertThisInitialized(_this), _shadowRoot)).append.apply(_classPrivateFieldGet2, slots);

    return _this;
  }

  _createClass(HTMLCodeBlockElement, [{
    key: "value",
    get:
    /** @returns - Syntax Highlighted Source Code */
    function get() {
      return _classPrivateFieldGet(this, _value);
    },
    set: function set(src) {
      _classPrivateFieldSet(this, _value, src);

      _classPrivateMethodGet(this, _render, _render2).call(this);
    }
    /**
     * The name of code block
     * @returns - The value of the label attribute
     */

  }, {
    key: "label",
    get: function get() {
      return _classPrivateFieldGet(this, _label);
    },
    set: function set(name) {
      // TODO: Accessiblity Treeにアクセシブルネームを提供する
      _classPrivateFieldSet(this, _label, name || '');

      if (_classPrivateFieldGet(this, _label)) {
        this.setAttribute('label', name);
      } else {
        this.removeAttribute('label');
      }

      _classPrivateMethodGet(this, _render, _render2).call(this);
    }
    /**
     * Language Mode
     * @returns - The value of the language attribute
     */

  }, {
    key: "language",
    get: function get() {
      return _classPrivateFieldGet(this, _language);
    },
    set: function set(name) {
      _classPrivateFieldSet(this, _language, name || '');

      if (_classPrivateFieldGet(this, _language)) {
        this.setAttribute('language', name);
      } else {
        this.removeAttribute('language');
      }

      _classPrivateMethodGet(this, _render, _render2).call(this);
    }
    /**
     * Flag to display the UI
     * @returns - With or without controls attribute
     * */

  }, {
    key: "controls",
    get: function get() {
      return _classPrivateFieldGet(this, _controls);
    },
    set: function set(flag) {
      // TODO: コピーボタン、ラベルの表示切り替え
      _classPrivateFieldSet(this, _controls, flag);

      if (_classPrivateFieldGet(this, _controls)) {
        this.setAttribute('controls', '');
      } else {
        this.removeAttribute('controls');
      }

      _classPrivateMethodGet(this, _render, _render2).call(this);
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldValue, newValue) {
      if (oldValue === newValue) {
        return;
      } // When the value of the attribute being observed changes,
      // pass value to accessors.


      switch (attrName) {
        // string
        case 'label':
        case 'language':
          this[attrName] = newValue || '';
          break;
        // boolean

        case 'controls':
          this[attrName] = typeof newValue === 'string';
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _classPrivateMethodGet(this, _render, _render2).call(this);
    }
  }], [{
    key: "highlight",
    value:
    /**
     * A library for performing syntax highlighting.
     * Before running `customElements.define()`,
     * you need to assign it directly to `HTMLCodeBlockElement.endgine`.
     * Currently, only highlight.js is assumed.
     */

    /**
     * Returns the result of highlighting the received source code string.
     * @param src - Source code string for highlight
     * @param options - Option for library of highlight
     * @returns - Object of the highlight result
     */
    function highlight(src, options) {
      var endgine = HTMLCodeBlockElement.endgine;

      if (!endgine) {
        throw new Error('The syntax highlighting engine is not set to `HTMLCodeBlockElement.endgine`.');
      }

      if ( // Verifying the existence of a language
      options !== null && options !== void 0 && options.language && endgine.getLanguage(options.language)) {
        return endgine.highlight(src, options);
      }

      return endgine.highlightAuto(src);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      return ['label', 'language', 'controls'];
    }
  }]);

  return HTMLCodeBlockElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); // Protect constructor names from minify


exports["default"] = HTMLCodeBlockElement;

function _render2() {
  if (!this.parentNode) {
    return;
  }
  /** The resulting syntax-highlighted markup */


  var markup = HTMLCodeBlockElement.highlight(_classPrivateFieldGet(this, _value), {
    language: _classPrivateFieldGet(this, _language)
  }).value; // initialize

  this.textContent = '';
  _classPrivateFieldGet(this, _codeBlock).textContent = '';

  _classPrivateFieldGet(this, _codeBlock).insertAdjacentHTML('afterbegin', markup);

  this.append(_classPrivateFieldGet(this, _codeWrap));
}

Object.defineProperty(HTMLCodeBlockElement, 'name', {
  value: 'HTMLCodeBlockElement'
});