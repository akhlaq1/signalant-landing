module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js'); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 100));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, exports) {
      module.exports = require('react');

      /***/
    },
    /* 1 */
    /***/ function(module, exports) {
      module.exports = require('styled-system');

      /***/
    },
    /* 2 */
    /***/ function(module, exports) {
      module.exports = require('styled-components');

      /***/
    },
    /* 3 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        0
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        6
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        2
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        styled_system__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        11
      );
      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(
        'div'
      )(
        _base__WEBPACK_IMPORTED_MODULE_4__[/* base */ 'a'],
        Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ 'b'])('Box'),
        function(props) {
          return (
            props.flexBox &&
            Object(styled_components__WEBPACK_IMPORTED_MODULE_2__['css'])(
              {
                display: 'flex',
              },
              styled_system__WEBPACK_IMPORTED_MODULE_3__['flexWrap'],
              styled_system__WEBPACK_IMPORTED_MODULE_3__['flexDirection'],
              styled_system__WEBPACK_IMPORTED_MODULE_3__['alignItems'],
              styled_system__WEBPACK_IMPORTED_MODULE_3__['justifyContent'],
              Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ 'b'])(
                'FlexBox'
              )
            )
          );
        }
      );

      var Box = function Box(_ref) {
        var children = _ref.children,
          props = _objectWithoutProperties(_ref, ['children']);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          BoxWrapper,
          props,
          children
        );
      };

      /* harmony default export */ __webpack_exports__['a'] = Box;
      Box.defaultProps = {
        as: 'div',
      };

      /***/
    },
    /* 4 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        0
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        6
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        2
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        styled_system__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        11
      );
      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(
        'p'
      )(
        _base__WEBPACK_IMPORTED_MODULE_4__[/* base */ 'a'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['fontFamily'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['fontWeight'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['textAlign'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['lineHeight'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['letterSpacing'],
        Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ 'b'])('Text')
      );

      var Text = function Text(_ref) {
        var content = _ref.content,
          props = _objectWithoutProperties(_ref, ['content']);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          TextWrapper,
          props,
          content
        );
      };

      /* harmony default export */ __webpack_exports__['a'] = Text;
      Text.defaultProps = {
        as: 'p',
        mt: 0,
        mb: '1rem',
      };

      /***/
    },
    /* 5 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        0
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        6
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        2
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        styled_system__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        11
      );
      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(
        'p'
      )(
        _base__WEBPACK_IMPORTED_MODULE_4__[/* base */ 'a'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['fontFamily'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['fontWeight'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['textAlign'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['lineHeight'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['letterSpacing'],
        Object(_base__WEBPACK_IMPORTED_MODULE_4__[/* themed */ 'b'])('Heading')
      );

      var Heading = function Heading(_ref) {
        var content = _ref.content,
          props = _objectWithoutProperties(_ref, ['content']);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          HeadingWrapper,
          props,
          content
        );
      };

      /* harmony default export */ __webpack_exports__['a'] = Heading;
      Heading.defaultProps = {
        as: 'h2',
        mt: 0,
        mb: '1rem',
        fontWeight: 'bold',
      };

      /***/
    },
    /* 6 */
    /***/ function(module, exports) {
      module.exports = require('prop-types');

      /***/
    },
    /* 7 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // EXTERNAL MODULE: external "styled-system"
      var external_styled_system_ = __webpack_require__(1);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/theme/customVariant.js
      var customVariant = __webpack_require__(17);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/base.js
      var base = __webpack_require__(11);

      // CONCATENATED MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Button/button.style.js
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              })
            );
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function _templateObject() {
        var data = _taggedTemplateLiteral([
          '\n  /* button default style */\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ',
          ';\n  background-color: ',
          ';\n  min-height: ',
          'px;\n  min-width: ',
          'px;\n  border-radius: ',
          'px;\n  font-family: inherit;\n  font-size: ',
          'px;\n  font-weight: ',
          ';\n  text-decoration: none;\n  text-transform: capitalize;\n  padding-top: ',
          'px;\n  padding-bottom: ',
          'px;\n  padding-left: ',
          'px;\n  padding-right: ',
          'px;\n  border: 0;\n  transition: all 0.3s ease;\n  span.btn-text {\n    padding-left: ',
          'px;\n    padding-right: ',
          'px;\n  }\n  span.btn-icon {\n    display: flex;\n    > div {\n      display: flex !important;\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  /* Material style goes here */\n  &.is-material {\n    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  }\n\n  /* When button on loading stage */\n  &.is-loading {\n    .btn-text {\n      padding-left: ',
          'px;\n      padding-right: ',
          'px;\n    }\n  }\n\n  /* Style system support */\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ]);

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {
            raw: { value: Object.freeze(raw) },
          })
        );
      }

      var ButtonStyle = external_styled_components_default.a.button(
        _templateObject(),
        Object(external_styled_system_['themeGet'])('colors.white', '#ffffff'),
        Object(external_styled_system_['themeGet'])(
          'colors.primary',
          '#028489'
        ),
        Object(external_styled_system_['themeGet'])('heights.3', '48'),
        Object(external_styled_system_['themeGet'])('widths.3', '48'),
        Object(external_styled_system_['themeGet'])('radius.0', '3'),
        Object(external_styled_system_['themeGet'])('fontSizes.4', '16'),
        Object(external_styled_system_['themeGet'])('fontWeights.4', '500'),
        Object(external_styled_system_['themeGet'])('space.2', '8'),
        Object(external_styled_system_['themeGet'])('space.2', '8'),
        Object(external_styled_system_['themeGet'])('space.4', '15'),
        Object(external_styled_system_['themeGet'])('space.4', '15'),
        Object(external_styled_system_['themeGet'])('space.1', '4'),
        Object(external_styled_system_['themeGet'])('space.1', '4'),
        Object(external_styled_system_['themeGet'])('space.2', '8'),
        Object(external_styled_system_['themeGet'])('space.2', '8'),
        external_styled_system_['alignItems'],
        external_styled_system_['boxShadow'],
        customVariant['a' /* buttonStyle */],
        customVariant['c' /* colorStyle */],
        customVariant['d' /* sizeStyle */],
        base['a' /* base */]
      ); // prop types can also be added from the style functions

      ButtonStyle.propTypes = _objectSpread(
        {},
        external_styled_system_['alignItems'].propTypes,
        external_styled_system_['boxShadow'].propTypes,
        external_styled_system_['variant'].propTypes
      );
      ButtonStyle.displayName = 'ButtonStyle';
      /* harmony default export */ var button_style = ButtonStyle;
      // CONCATENATED MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Button/index.js
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var Button_Button = function Button(_ref) {
        var type = _ref.type,
          title = _ref.title,
          icon = _ref.icon,
          disabled = _ref.disabled,
          iconPosition = _ref.iconPosition,
          onClick = _ref.onClick,
          loader = _ref.loader,
          isMaterial = _ref.isMaterial,
          isLoading = _ref.isLoading,
          className = _ref.className,
          props = _objectWithoutProperties(_ref, [
            'type',
            'title',
            'icon',
            'disabled',
            'iconPosition',
            'onClick',
            'loader',
            'isMaterial',
            'isLoading',
            'className',
          ]);

        // Add all classs to an array
        var addAllClasses = ['reusecore__button']; // isLoading prop checking

        if (isLoading) {
          addAllClasses.push('is-loading');
        } // isMaterial prop checking

        if (isMaterial) {
          addAllClasses.push('is-material');
        } // className prop checking

        if (className) {
          addAllClasses.push(className);
        } // Checking button loading state

        var buttonIcon =
          isLoading !== false
            ? external_react_default.a.createElement(
                external_react_['Fragment'],
                null,
                ' ',
                loader
              )
            : icon &&
              external_react_default.a.createElement(
                'span',
                {
                  className: 'btn-icon',
                },
                icon
              ); // set icon position

        var position = iconPosition || 'right';
        return external_react_default.a.createElement(
          button_style,
          _extends(
            {
              type: type,
              className: addAllClasses.join(' '),
              icon: icon,
              disabled: disabled,
              'icon-position': position,
              onClick: onClick,
            },
            props
          ),
          position === 'left' && buttonIcon,
          title &&
            external_react_default.a.createElement(
              'span',
              {
                className: 'btn-text',
              },
              title
            ),
          position === 'right' && buttonIcon
        );
      };

      Button_Button.defaultProps = {
        disabled: false,
        isMaterial: false,
        isLoading: false,
        type: 'button',
      };
      /* harmony default export */ var elements_Button = (__webpack_exports__[
        'a'
      ] = Button_Button);

      /***/
    },
    /* 8 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // CONCATENATED MODULE: ./components/UI/Container/style.js

      var ContainerWrapper = external_styled_components_default.a.div.withConfig(
        {
          displayName: 'style__ContainerWrapper',
          componentId: 'posx22-0',
        }
      )(
        [
          'margin-left:auto;margin-right:auto;',
          ';',
          ';@media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1220px){max-width:',
          ';width:100%;}@media (max-width:768px){',
          ';}',
        ],
        function(props) {
          return (
            props.fullWidth &&
            Object(external_styled_components_['css'])([
              'width:100%;max-width:none !important;',
            ])
          );
        },
        function(props) {
          return (
            (props.noGutter &&
              Object(external_styled_components_['css'])([
                'padding-left:0;padding-right:0;',
              ])) ||
            Object(external_styled_components_['css'])([
              'padding-left:30px;padding-right:30px;',
            ])
          );
        },
        function(props) {
          return props.width || '1170px';
        },
        function(props) {
          return (
            props.mobileGutter &&
            Object(external_styled_components_['css'])([
              'padding-left:30px;padding-right:30px;',
            ])
          );
        }
      );
      /* harmony default export */ var style = ContainerWrapper;
      // CONCATENATED MODULE: ./components/UI/Container/index.js

      var Container_Container = function Container(_ref) {
        var children = _ref.children,
          className = _ref.className,
          fullWidth = _ref.fullWidth,
          noGutter = _ref.noGutter,
          mobileGutter = _ref.mobileGutter,
          width = _ref.width;
        return external_react_default.a.createElement(
          style,
          {
            className: className,
            fullWidth: fullWidth,
            noGutter: noGutter,
            width: width,
            mobileGutter: mobileGutter,
          },
          children
        );
      };

      /* harmony default export */ var UI_Container = (__webpack_exports__[
        'a'
      ] = Container_Container);

      /***/
    },
    /* 9 */
    /***/ function(module, exports) {
      module.exports = require('next/link');

      /***/
    },
    /* 10 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        0
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        6
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        2
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        11
      );
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(
        'img'
      )(
        {
          display: 'block',
          maxWidth: '100%',
          height: 'auto',
        },
        _base__WEBPACK_IMPORTED_MODULE_3__[/* base */ 'a'],
        Object(_base__WEBPACK_IMPORTED_MODULE_3__[/* themed */ 'b'])('Image')
      );

      var Image = function Image(_ref) {
        var src = _ref.src,
          alt = _ref.alt,
          props = _objectWithoutProperties(_ref, ['src', 'alt']);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          ImageWrapper,
          _extends(
            {
              src: src,
              alt: alt,
            },
            props
          )
        );
      };

      /* harmony default export */ __webpack_exports__['a'] = Image;
      Image.defaultProps = {
        m: 0,
      };

      /***/
    },
    /* 11 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function() {
          return themed;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return base;
        }
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_system__WEBPACK_IMPORTED_MODULE_0__
      );
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              })
            );
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      /** this is our Base Component every components must be Extend it */

      var themed = function themed(key) {
        return function(props) {
          return props.theme[key];
        };
      };
      var base = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__['compose'])(
        function() {
          return {
            boxSizing: 'border-box',
          };
        },
        styled_system__WEBPACK_IMPORTED_MODULE_0__['space'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['width'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['minWidth'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['maxWidth'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['height'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['minHeight'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['maxHeight'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['fontSize'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['color'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['flex'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['order'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['alignSelf'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['borders'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['borderColor'],
        styled_system__WEBPACK_IMPORTED_MODULE_0__['display']
      );
      base.propTypes = _objectSpread(
        {},
        styled_system__WEBPACK_IMPORTED_MODULE_0__['display'].propTypes,
        styled_system__WEBPACK_IMPORTED_MODULE_0__['space'].propTypes,
        styled_system__WEBPACK_IMPORTED_MODULE_0__['borders'].propTypes,
        styled_system__WEBPACK_IMPORTED_MODULE_0__['borderColor'].propTypes,
        styled_system__WEBPACK_IMPORTED_MODULE_0__['width'].propTypes,
        styled_system__WEBPACK_IMPORTED_MODULE_0__['height'].propTypes,
        styled_system__WEBPACK_IMPORTED_MODULE_0__['fontSize'].propTypes,
        styled_system__WEBPACK_IMPORTED_MODULE_0__['color'].propTypes,
        styled_system__WEBPACK_IMPORTED_MODULE_0__['flex'].propTypes,
        styled_system__WEBPACK_IMPORTED_MODULE_0__['order'].propTypes,
        styled_system__WEBPACK_IMPORTED_MODULE_0__['alignSelf'].propTypes
      );

      /***/
    },
    /* 12 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return Faq;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function() {
          return Features;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'c',
        function() {
          return Footer_Data;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'e',
        function() {
          return Service;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'g',
        function() {
          return Timeline;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f',
        function() {
          return Testimonial;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'd',
        function() {
          return MENU_ITEMS;
        }
      );
      /* harmony import */ var _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        45
      );
      /* harmony import */ var _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        46
      );
      /* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _assets_image_saas_testimonial_create_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        47
      );
      /* harmony import */ var _assets_image_saas_testimonial_create_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_image_saas_testimonial_create_png__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var _assets_image_saas_testimonial_best_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        48
      );
      /* harmony import */ var _assets_image_saas_testimonial_best_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_image_saas_testimonial_best_png__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ var _assets_image_saas_testimonial_backtest_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        49
      );
      /* harmony import */ var _assets_image_saas_testimonial_backtest_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_image_saas_testimonial_backtest_png__WEBPACK_IMPORTED_MODULE_4__
      );
      /* harmony import */ var _assets_image_saas_testimonial_instant_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        50
      );
      /* harmony import */ var _assets_image_saas_testimonial_instant_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_image_saas_testimonial_instant_png__WEBPACK_IMPORTED_MODULE_5__
      );
      /* harmony import */ var _assets_image_saas_testimonial_powerful_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        51
      );
      /* harmony import */ var _assets_image_saas_testimonial_powerful_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_image_saas_testimonial_powerful_png__WEBPACK_IMPORTED_MODULE_6__
      );
      /* harmony import */ var _assets_image_saas_testimonial_currency_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        52
      );
      /* harmony import */ var _assets_image_saas_testimonial_currency_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_image_saas_testimonial_currency_png__WEBPACK_IMPORTED_MODULE_7__
      );

      var Faq = [
        {
          id: 1,
          expend: true,
          title: 'FAQ 1',
          description:
            'Some content here.. some content here.. some content here.. some content here.. ',
        },
        {
          id: 2,
          title: 'FAQ 2',
          description:
            'Some content here.. some content here.. some content here.. some content here.. ',
        },
        {
          id: 3,
          title: 'FAQ 3',
          description:
            'Some content here.. some content here.. some content here.. some content here.. ',
        },
        {
          id: 4,
          title: 'FAQ 4',
          description:
            'Some content here.. some content here.. some content here.. some content here.. ',
        },
        {
          id: 4,
          title: 'FAQ 5',
          description:
            'Some content here.. some content here.. some content here.. some content here.. ',
        },
      ];
      var Features = [
        {
          id: 1,
          icon: 'flaticon-creative',
          title: 'Powerful Features',
          description:
            'Automate time consuming tasks like organising expenses ,tracking your time and following up with clients ',
        },
        {
          id: 2,
          icon: 'flaticon-project',
          title: 'Easy Invoicing',
          description:
            'Want to surprice your clients with professional looking invoices ? Then you are some clicks behind .',
        },
        {
          id: 3,
          icon: 'flaticon-flask',
          title: 'Easy To Use',
          description:
            'Very Simple and intuitive. So you have to spend less time in paperwork and impress your customer with looks',
        },
      ];
      var Footer_Data = [
        {
          title: 'Quick links',
          menuItems: [
            {
              url: '#banner_section',
              text: 'Home',
            },
            {
              url: '#feature_section',
              text: 'Feature',
            },
            {
              url: '#pricing_section',
              text: 'Pricing',
            },
            {
              url: '#testimonial_section',
              text: 'Testimonial',
            },
            {
              url: '#faq_section',
              text: 'FAQ',
            },
          ],
        }, // {
        //   title: 'Our Information',
        //   menuItems: [
        //     {
        //       url: '#',
        //       text: 'Return Policy',
        //     },
        //     {
        //       url: '#',
        //       text: 'Privacy Policy',
        //     },
        //     {
        //       url: '#',
        //       text: 'Terms & Conditions',
        //     },
        //     {
        //       url: '#',
        //       text: 'Site Map',
        //     },
        //     {
        //       url: '#',
        //       text: 'Store Hours',
        //     },
        //   ],
        // },
        {
          title: 'Web App',
          menuItems: [
            {
              url: 'https://app.signalant.com/signup',
              text: 'Sign Up',
            },
            {
              url: 'https://app.signalant.com/login',
              text: 'Log In',
            },
          ],
        },
        {
          title: 'Legal and Policy',
          menuItems: [
            {
              url: '#',
              text: 'Privacy Policy',
            },
            {
              url: '#',
              text: 'Terms Policy',
            },
            {
              url: '#',
              text: 'Cookies Policy',
            },
          ],
        },
      ];
      var Service = [
        {
          id: 1,
          // icon: Client1,
          avatar_url:
            _assets_image_saas_testimonial_create_png__WEBPACK_IMPORTED_MODULE_2___default.a,
          title: 'Create Strategies',
          description:
            'Create best strategies that can give hand for your forex trading.',
        },
        {
          id: 2,
          // icon: 'flaticon-trophy',
          avatar_url:
            _assets_image_saas_testimonial_best_png__WEBPACK_IMPORTED_MODULE_3___default.a,
          title: 'Best Indicators',
          description:
            'Hand-picked best indicators that has worked well in the past and has huge potential.',
        },
        {
          id: 3,
          // icon: 'flaticon-atom',
          avatar_url:
            _assets_image_saas_testimonial_backtest_png__WEBPACK_IMPORTED_MODULE_4___default.a,
          title: 'Backtest Strategies',
          description:
            'You can backtest strategies for 20 currency pairs using our advanced  tools. ',
        },
        {
          id: 4,
          // icon: 'flaticon-design-tool',
          avatar_url:
            _assets_image_saas_testimonial_instant_png__WEBPACK_IMPORTED_MODULE_5___default.a,
          title: 'Instant Notifications',
          description:
            'Get instant alert notifications when your indicators hit the buy or sell mark.',
        },
        {
          id: 5,
          // icon: 'flaticon-creative',
          avatar_url:
            _assets_image_saas_testimonial_powerful_png__WEBPACK_IMPORTED_MODULE_6___default.a,
          title: 'Powerful Tools',
          description:
            'Indicators can be set with the currency pairs, timeframes, buy/ sell, triggers, etc..',
        },
        {
          id: 6,
          // icon: 'flaticon-conversation',
          avatar_url:
            _assets_image_saas_testimonial_currency_png__WEBPACK_IMPORTED_MODULE_7___default.a,
          title: '20 Currency Pairs',
          description:
            'The best 20 currency pairs is on the first list and we are adding more soon.',
        },
      ];
      var Timeline = [
        {
          title: 'Create strategies with indicators',
          description:
            'Some content here.. some content here.. some content here.. some content here.. ',
        },
        {
          title: 'Backtest Strategies',
          description:
            'Some content here.. some content here.. some content here.. some content here..',
        },
        {
          title: 'Manage Alerts',
          description:
            'Some content here.. some content here.. some content here.. some content here..',
        },
      ];
      var Testimonial = [
        {
          id: 1,
          name: 'Michal Andry',
          designation: 'Trader from United kingdom ',
          comment:
            'Signalant is one such app which integrates with the indicators with minute detailing of indicators.',
          avatar_url:
            _assets_image_saas_testimonial_client_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
          social_icon: 'flaticon-instagram',
        },
        {
          id: 2,
          name: 'Roman Ul Oman',
          designation: 'Trader from Qatar',
          comment:
            'Impressed with master class support of the team and really look forward for the future. A true passionate team.',
          avatar_url:
            _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_1___default.a,
          social_icon: 'flaticon-twitter',
        },
      ]; // export const MENU_ITEMS = [
      //   {
      //     label: 'Home',
      //     path: '#banner_section',
      //     offset: '70',
      //   },
      //   {
      //     label: 'Service',
      //     path: '#service_section',
      //     offset: '70',
      //   },
      //   {
      //     label: 'Feature',
      //     path: '#feature_section',
      //     offset: '70',
      //   },
      //   {
      //     label: 'Pricing',
      //     path: '#pricing_section',
      //     offset: '70',
      //   },
      //   {
      //     label: 'Testimonial',
      //     path: '#testimonial_section',
      //     offset: '70',
      //   },
      //   {
      //     label: 'FAQ',
      //     path: '#faq_section',
      //     offset: '70',
      //   },
      // ];

      var MENU_ITEMS = [
        {
          label: 'Home',
          path: '#banner_section',
          offset: '70',
        },
        {
          label: 'Feature',
          path: '#feature_section',
          offset: '70',
        },
        {
          label: 'Pricing',
          path: '#pricing_section',
          offset: '70',
        }, //   {
        //   label: 'Testimonial',
        //   path: '#testimonial_section',
        //   offset: '70',
        // },
        {
          label: 'FAQ',
          path: '#faq_section',
          offset: '70',
        },
      ];

      /***/
    },
    /* 13 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f',
        function() {
          return GlideSlideWrapper;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'c',
        function() {
          return ButtonControlWrapper;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'd',
        function() {
          return ButtonWrapper;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function() {
          return BulletControlWrapper;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return BulletButton;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'e',
        function() {
          return DefaultBtn;
        }
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        2
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        styled_system__WEBPACK_IMPORTED_MODULE_1__
      );

      // Glide wrapper style

      var GlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
        {
          displayName: 'glidestyle__GlideWrapper',
          componentId: 'sc-13h91ak-0',
        }
      )(
        ['text-align:-webkit-center;', ' ', ' ', ''],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['width'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['height'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['space']
      ); // Glide slide wrapper style

      var GlideSlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig(
        {
          displayName: 'glidestyle__GlideSlideWrapper',
          componentId: 'sc-13h91ak-1',
        }
      )(
        ['', ' ', ' ', ' ', ' ', ''],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['space'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['color'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['borders'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['boxShadow'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['borderRadius']
      ); // Button wrapper style

      var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
        {
          displayName: 'glidestyle__ButtonWrapper',
          componentId: 'sc-13h91ak-2',
        }
      )(
        [
          'display:inline-block;',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          '',
        ],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['display'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['space'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['color'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['borders'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['boxShadow'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['borderRadius'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['position'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['top'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['left'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['right'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['bottom']
      ); // ButtonControlWrapper style

      var ButtonControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
        {
          displayName: 'glidestyle__ButtonControlWrapper',
          componentId: 'sc-13h91ak-3',
        }
      )(
        ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['display'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['space'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['alignItems'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['justifyContent'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['position'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['top'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['left'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['right'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['bottom']
      ); // BulletControlWrapper style

      var BulletControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
        {
          displayName: 'glidestyle__BulletControlWrapper',
          componentId: 'sc-13h91ak-4',
        }
      )(
        ['', ' ', ' ', ' ', ' ', ''],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['display'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['space'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['alignItems'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['justifyContent'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['flexWrap']
      ); // BulletButton style

      var BulletButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig(
        {
          displayName: 'glidestyle__BulletButton',
          componentId: 'sc-13h91ak-5',
        }
      )(
        [
          'cursor:pointer;width:10px;height:10px;margin:4px;border:0;padding:0;outline:none;border-radius:50%;background-color:#D6D6D6;&:hover,&.glide__bullet--active{background-color:#869791;}',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          '',
        ],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['display'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['space'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['color'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['borders'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['boxShadow'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['borderRadius'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['width'],
        styled_system__WEBPACK_IMPORTED_MODULE_1__['height']
      ); // default button style

      var DefaultBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig(
        {
          displayName: 'glidestyle__DefaultBtn',
          componentId: 'sc-13h91ak-6',
        }
      )(['cursor:pointer;margin:10px 3px;']);

      /* harmony default export */ __webpack_exports__['g'] = GlideWrapper;

      /***/
    },
    /* 14 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // EXTERNAL MODULE: external "styled-system"
      var external_styled_system_ = __webpack_require__(1);

      // CONCATENATED MODULE: ./components/FeatureBlock/featureBlock.style.js

      // FeatureBlock wrapper style

      var FeatureBlockWrapper = external_styled_components_default.a.div.withConfig(
        {
          displayName: 'featureBlockstyle__FeatureBlockWrapper',
          componentId: 'sc-1qxqvjs-0',
        }
      )(
        [
          '&.icon_left{display:flex;align-items:flex-start;}&.icon_right{display:flex;align-items:flex-start;flex-direction:row-reverse;.content__wrapper{text-align:right;}}',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          '',
        ],
        external_styled_system_['display'],
        external_styled_system_['width'],
        external_styled_system_['height'],
        external_styled_system_['flexWrap'],
        external_styled_system_['flexDirection'],
        external_styled_system_['alignItems'],
        external_styled_system_['justifyContent'],
        external_styled_system_['position'],
        external_styled_system_['color'],
        external_styled_system_['space'],
        external_styled_system_['borders'],
        external_styled_system_['borderColor'],
        external_styled_system_['boxShadow'],
        external_styled_system_['borderRadius'],
        external_styled_system_['overflow']
      ); // Icon wrapper style

      var IconWrapper = external_styled_components_default.a.div.withConfig({
        displayName: 'featureBlockstyle__IconWrapper',
        componentId: 'sc-1qxqvjs-1',
      })(
        [
          '',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          '',
        ],
        external_styled_system_['display'],
        external_styled_system_['width'],
        external_styled_system_['height'],
        external_styled_system_['alignItems'],
        external_styled_system_['justifyContent'],
        external_styled_system_['position'],
        external_styled_system_['color'],
        external_styled_system_['space'],
        external_styled_system_['borders'],
        external_styled_system_['borderColor'],
        external_styled_system_['boxShadow'],
        external_styled_system_['borderRadius'],
        external_styled_system_['overflow'],
        external_styled_system_['fontSize']
      ); // Content wrapper style

      var ContentWrapper = external_styled_components_default.a.div.withConfig({
        displayName: 'featureBlockstyle__ContentWrapper',
        componentId: 'sc-1qxqvjs-2',
      })(
        ['', ' ', ' ', ''],
        external_styled_system_['width'],
        external_styled_system_['space'],
        external_styled_system_['textAlign']
      ); // Button wrapper style

      var ButtonWrapper = external_styled_components_default.a.div.withConfig({
        displayName: 'featureBlockstyle__ButtonWrapper',
        componentId: 'sc-1qxqvjs-3',
      })(
        ['', ' ', ' ', ' ', ' ', ''],
        external_styled_system_['display'],
        external_styled_system_['space'],
        external_styled_system_['alignItems'],
        external_styled_system_['flexDirection'],
        external_styled_system_['justifyContent']
      );

      /* harmony default export */ var featureBlock_style = FeatureBlockWrapper;
      // CONCATENATED MODULE: ./components/FeatureBlock/index.js
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var FeatureBlock_FeatureBlock = function FeatureBlock(_ref) {
        var className = _ref.className,
          icon = _ref.icon,
          title = _ref.title,
          button = _ref.button,
          description = _ref.description,
          iconPosition = _ref.iconPosition,
          additionalContent = _ref.additionalContent,
          wrapperStyle = _ref.wrapperStyle,
          iconStyle = _ref.iconStyle,
          contentStyle = _ref.contentStyle,
          btnWrapperStyle = _ref.btnWrapperStyle,
          props = _objectWithoutProperties(_ref, [
            'className',
            'icon',
            'title',
            'button',
            'description',
            'iconPosition',
            'additionalContent',
            'wrapperStyle',
            'iconStyle',
            'contentStyle',
            'btnWrapperStyle',
          ]);

        // Add all classs to an array
        var addAllClasses = ['feature__block']; // Add icon position class

        if (iconPosition) {
          addAllClasses.push('icon_'.concat(iconPosition));
        } // className prop checking

        if (className) {
          addAllClasses.push(className);
        } // check icon value and add

        var Icon =
          icon &&
          external_react_default.a.createElement(
            IconWrapper,
            _extends(
              {
                className: 'icon__wrapper',
              },
              iconStyle
            ),
            icon
          );
        return external_react_default.a.createElement(
          featureBlock_style,
          _extends(
            {
              className: addAllClasses.join(' '),
            },
            wrapperStyle,
            props
          ),
          Icon,
          title || description || button
            ? external_react_default.a.createElement(
                external_react_['Fragment'],
                null,
                external_react_default.a.createElement(
                  ContentWrapper,
                  _extends(
                    {
                      className: 'content__wrapper',
                    },
                    contentStyle
                  ),
                  title,
                  description,
                  button &&
                    external_react_default.a.createElement(
                      ButtonWrapper,
                      _extends(
                        {
                          className: 'button__wrapper',
                        },
                        btnWrapperStyle
                      ),
                      button
                    )
                ),
                additionalContent
              )
            : ''
        );
      };

      FeatureBlock_FeatureBlock.defaultProps = {
        iconPosition: 'top',
      };
      /* harmony default export */ var components_FeatureBlock = (__webpack_exports__[
        'a'
      ] = FeatureBlock_FeatureBlock);

      /***/
    },
    /* 15 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return DrawerContext;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function() {
          return DrawerProvider;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        0
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      function _slicedToArray(arr, i) {
        return (
          _arrayWithHoles(arr) ||
          _iterableToArrayLimit(arr, i) ||
          _nonIterableRest()
        );
      }

      function _nonIterableRest() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      }

      function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
          for (
            var _i = arr[Symbol.iterator](), _s;
            !(_n = (_s = _i.next()).done);
            _n = true
          ) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i['return'] != null) _i['return']();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              })
            );
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      var initialState = {
        isOpen: false,
      };

      function reducer(state, action) {
        switch (action.type) {
          case 'TOGGLE':
            return _objectSpread({}, state, {
              isOpen: !state.isOpen,
            });

          default:
            return state;
        }
      }

      var DrawerContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(
        {}
      );
      var DrawerProvider = function DrawerProvider(_ref) {
        var children = _ref.children;

        var _useReducer = Object(
            react__WEBPACK_IMPORTED_MODULE_0__['useReducer']
          )(reducer, initialState),
          _useReducer2 = _slicedToArray(_useReducer, 2),
          state = _useReducer2[0],
          dispatch = _useReducer2[1];

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          DrawerContext.Provider,
          {
            value: {
              state: state,
              dispatch: dispatch,
            },
          },
          children
        );
      };

      /***/
    },
    /* 16 */
    /***/ function(module, exports) {
      module.exports = require('react-reveal/Fade');

      /***/
    },
    /* 17 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function() {
          return cards;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return buttonStyle;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'c',
        function() {
          return colorStyle;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'd',
        function() {
          return sizeStyle;
        }
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_system__WEBPACK_IMPORTED_MODULE_0__
      );

      var buttonStyle = Object(
        styled_system__WEBPACK_IMPORTED_MODULE_0__['variant']
      )({
        key: 'buttonStyles',
      });
      var colorStyle = Object(
        styled_system__WEBPACK_IMPORTED_MODULE_0__['variant']
      )({
        key: 'colorStyles',
        prop: 'colors',
      });
      var sizeStyle = Object(
        styled_system__WEBPACK_IMPORTED_MODULE_0__['variant']
      )({
        key: 'sizeStyles',
        prop: 'size',
      });
      var cards = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__['variant'])(
        {
          key: 'cards',
        }
      );

      /***/
    },
    /* 18 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        0
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        6
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        2
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        styled_system__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        17
      );
      /* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        11
      );
      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(
        'div'
      )(
        _base__WEBPACK_IMPORTED_MODULE_5__[/* base */ 'a'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['borders'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['borderColor'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['borderRadius'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['boxShadow'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['backgroundImage'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['backgroundSize'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['backgroundPosition'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['backgroundRepeat'],
        styled_system__WEBPACK_IMPORTED_MODULE_3__['opacity'],
        _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__[/* cards */ 'b'],
        Object(_base__WEBPACK_IMPORTED_MODULE_5__[/* themed */ 'b'])('Card')
      );

      var Card = function Card(_ref) {
        var children = _ref.children,
          props = _objectWithoutProperties(_ref, ['children']);

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          CardWrapper,
          props,
          children
        );
      };

      Card.defaultProps = {
        boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.05)',
      };
      /* harmony default export */ __webpack_exports__['a'] = Card;

      /***/
    },
    /* 19 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'c',
        function() {
          return GlobalStyle;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function() {
          return ContentWrapper;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return ButtonGroup;
        }
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        2
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        styled_system__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _assets_image_saas_map_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        43
      );
      /* harmony import */ var _assets_image_saas_map_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_image_saas_map_png__WEBPACK_IMPORTED_MODULE_2__
      );
      function _templateObject() {
        var data = _taggedTemplateLiteral(
          [
            "\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;    \n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #343d48;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: #eb4d4b;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: #eb4d4b;\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: #eb4d4b;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #eb4d4b;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n  /* Modal default style */\n  button.modalCloseBtn {\n    color: ",
            ';\n\n    &.alt {\n      background-color: ',
            ';\n      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57);\n    }   \n  }\n',
          ],
          [
            "\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Roboto', sans-serif;\n  }\n\n  section {\n    position: relative;\n  }\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;    \n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 400;\n            color: #343d48;\n            position: relative;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              color: #eb4d4b;\n            }\n            &:before{\n              content: '';\n              width: 7px;\n              height: 7px;\n              background: #eb4d4b;\n              border-radius: 50%;\n              position: absolute;\n              top: 50%;\n              left: -15px;\n              transform: translateY(-50%);\n              opacity: 0;\n            }\n          }\n          &.is-current {\n            a {\n              color: #eb4d4b;\n              &:before{\n                opacity: 1;\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #eb4d4b;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n  /* Modal default style */\n  button.modalCloseBtn {\n    color: ",
            ';\n\n    &.alt {\n      background-color: ',
            ';\n      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57);\n    }   \n  }\n',
          ]
        );

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {
            raw: { value: Object.freeze(raw) },
          })
        );
      }

      var GlobalStyle = Object(
        styled_components__WEBPACK_IMPORTED_MODULE_0__['createGlobalStyle']
      )(
        _templateObject(),
        Object(styled_system__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
          'colors.white',
          '#ffffff'
        ),
        Object(styled_system__WEBPACK_IMPORTED_MODULE_1__['themeGet'])(
          'colors.primary',
          '#5268db'
        )
      );
      var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
        {
          displayName: 'saasstyle__ContentWrapper',
          componentId: 'd1gmi1-0',
        }
      )(
        [
          'position:relative;overflow:hidden;a:-webkit-any-link{text-decoration:none;}.sticky-nav-active{.hosting_navbar{background:#fff;box-shadow:0 0 20px rgba(0,0,0,0.15);padding:15px 0;}}.hosting_navbar{position:fixed;top:0;left:0;width:100%;transition:0.35s ease-in-out;padding:30px 0;.main_menu{margin-right:40px;li{display:inline-block;padding-left:13px;padding-right:13px;&:first-child{padding-left:0;}&:last-child{padding-right:0;}&.is-current{a{color:#eb4d4b;}}a{padding:5px;font-size:16px;font-weight:400;color:#343d48;transition:0.15s ease-in-out;&:hover{color:#eb4d4b;}}}@media (max-width:990px){display:none;}}.navbar_button{@media (max-width:990px){display:none;}}.reusecore-drawer__handler{@media (min-width:991px){display:none !important;}.hamburgMenu__bar{> span{}}}}.trial-section{background:linear-gradient(to bottom,#fafbff 0%,#f7f8fd 100%);.button_group{text-align:center;}}.partner_section{background-color:#fafbff;background-image:url(',
          ');background-repeat:no-repeat;background-position:25% center;}@media (max-width:990px){.glide__slide--active .pricing_table{box-shadow:0px 0px 30px rgba(0,0,0,0.05);border:0;}}',
        ],
        _assets_image_saas_map_png__WEBPACK_IMPORTED_MODULE_2___default.a
      );
      var ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
        {
          displayName: 'saasstyle__ButtonGroup',
          componentId: 'd1gmi1-1',
        }
      )(['']);

      /***/
    },
    /* 20 */
    /***/ function(module, exports) {
      module.exports = require('react-icons-kit');

      /***/
    },
    /* 21 */
    /***/ function(module, exports) {
      module.exports = require('react-accessible-accordion');

      /***/
    },
    /* 22 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,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';

      /***/
    },
    /* 23 */
    /***/ function(module, exports) {
      module.exports = require('react-reveal/Zoom');

      /***/
    },
    /* 24 */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/saasvisitor1-9ee840b3781d9163213aa45b81e9867a.png';

      /***/
    },
    /* 25 */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/visitor_bg-d29499663533b3a3762bda11c6192d60.png';

      /***/
    },
    /* 26 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        0
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        6
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        67
      );
      /* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        88
      );
      /* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        13
      );
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              })
            );
          }
          ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        }
        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      // import { GlideSlide } from './glideSlide';

      var GlideCarousel = function GlideCarousel(_ref) {
        var className = _ref.className,
          children = _ref.children,
          options = _ref.options,
          controls = _ref.controls,
          prevButton = _ref.prevButton,
          nextButton = _ref.nextButton,
          prevWrapper = _ref.prevWrapper,
          nextWrapper = _ref.nextWrapper,
          bullets = _ref.bullets,
          numberOfBullets = _ref.numberOfBullets,
          buttonWrapperStyle = _ref.buttonWrapperStyle,
          bulletWrapperStyle = _ref.bulletWrapperStyle,
          bulletButtonStyle = _ref.bulletButtonStyle,
          carouselSelector = _ref.carouselSelector;
        // Add all classs to an array
        var addAllClasses = ['glide']; // className prop checking

        if (className) {
          addAllClasses.push(className);
        } // number of bullets loop

        var totalBullets = [];

        for (var i = 0; i < numberOfBullets; i++) {
          totalBullets.push(i);
        } // Load glide

        Object(react__WEBPACK_IMPORTED_MODULE_0__['useEffect'])(function() {
          var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2___default.a(
            carouselSelector ? '#'.concat(carouselSelector) : '#glide',
            _objectSpread({}, options)
          );
          glide.mount();
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _glide_style__WEBPACK_IMPORTED_MODULE_4__[/* default */ 'g'],
          {
            className: addAllClasses.join(' '),
            id: carouselSelector || 'glide',
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'glide__track',
              'data-glide-el': 'track',
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'ul',
              {
                className: 'glide__slides',
              },
              children
            )
          ),
          controls &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _glide_style__WEBPACK_IMPORTED_MODULE_4__[
                /* ButtonControlWrapper */ 'c'
              ],
              _extends(
                {
                  className: 'glide__controls',
                  'data-glide-el': 'controls',
                },
                buttonWrapperStyle
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _glide_style__WEBPACK_IMPORTED_MODULE_4__[
                  /* ButtonWrapper */ 'd'
                ],
                _extends({}, prevWrapper, {
                  className: 'glide__prev--area',
                  'data-glide-dir': '<',
                }),
                prevButton
                  ? prevButton
                  : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _glide_style__WEBPACK_IMPORTED_MODULE_4__[
                        /* DefaultBtn */ 'e'
                      ],
                      null,
                      'Prev'
                    )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _glide_style__WEBPACK_IMPORTED_MODULE_4__[
                  /* ButtonWrapper */ 'd'
                ],
                _extends({}, nextWrapper, {
                  className: 'glide__next--area',
                  'data-glide-dir': '>',
                }),
                nextButton
                  ? nextButton
                  : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _glide_style__WEBPACK_IMPORTED_MODULE_4__[
                        /* DefaultBtn */ 'e'
                      ],
                      null,
                      'Next'
                    )
              )
            ),
          bullets &&
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _glide_style__WEBPACK_IMPORTED_MODULE_4__[
                /* BulletControlWrapper */ 'b'
              ],
              _extends(
                {
                  className: 'glide__bullets',
                  'data-glide-el': 'controls[nav]',
                },
                bulletWrapperStyle
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_0__['Fragment'],
                null,
                totalBullets.map(function(index) {
                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _glide_style__WEBPACK_IMPORTED_MODULE_4__[
                      /* BulletButton */ 'a'
                    ],
                    _extends(
                      {
                        key: index,
                        className: 'glide__bullet',
                        'data-glide-dir': '='.concat(index),
                      },
                      bulletButtonStyle
                    )
                  );
                })
              )
            )
        );
      };

      // GlideCarousel default props
      GlideCarousel.defaultProps = {
        controls: true,
        bullets: false,
      }; // export { GlideSlide };

      /* harmony default export */ __webpack_exports__['a'] = GlideCarousel;

      /***/
    },
    /* 27 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        0
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        6
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        13
      );

      // Glide Slide wrapper component

      var GlideSlide = function GlideSlide(_ref) {
        var children = _ref.children;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _glide_style__WEBPACK_IMPORTED_MODULE_2__[
            /* GlideSlideWrapper */ 'f'
          ],
          {
            className: 'glide__slide',
          },
          children
        );
      };

      /* harmony default export */ __webpack_exports__['a'] = GlideSlide;

      /***/
    },
    /* 28 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Text/index.js
      var Text = __webpack_require__(4);

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/base.js
      var base = __webpack_require__(11);

      // CONCATENATED MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Link/index.js
      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var LinkWrapper = external_styled_components_default()('a')(
        {
          textDecoration: 'none',
        },
        base['a' /* base */],
        Object(base['b' /* themed */])('Link')
      );

      var Link_Link = function Link(_ref) {
        var children = _ref.children,
          props = _objectWithoutProperties(_ref, ['children']);

        return external_react_default.a.createElement(
          LinkWrapper,
          props,
          children
        );
      };

      /* harmony default export */ var elements_Link = Link_Link;
      Link_Link.defaultProps = {
        as: 'a',
        m: 0,
        display: 'inline-block',
      };
      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Image/index.js
      var Image = __webpack_require__(10);

      // CONCATENATED MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/UI/Logo/index.js
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      function Logo_objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = Logo_objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function Logo_objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var Logo_Logo = function Logo(_ref) {
        var logoWrapperStyle = _ref.logoWrapperStyle,
          logoStyle = _ref.logoStyle,
          titleStyle = _ref.titleStyle,
          withAchor = _ref.withAchor,
          anchorProps = _ref.anchorProps,
          logoSrc = _ref.logoSrc,
          title = _ref.title,
          props = Logo_objectWithoutProperties(_ref, [
            'logoWrapperStyle',
            'logoStyle',
            'titleStyle',
            'withAchor',
            'anchorProps',
            'logoSrc',
            'title',
          ]);

        return external_react_default.a.createElement(
          elements_Link,
          _extends({}, props, logoWrapperStyle),
          withAchor
            ? external_react_default.a.createElement(
                'a',
                anchorProps,
                logoSrc
                  ? external_react_default.a.createElement(
                      Image['a' /* default */],
                      _extends(
                        {
                          src: logoSrc,
                          alt: title,
                        },
                        logoStyle
                      )
                    )
                  : external_react_default.a.createElement(
                      Text['a' /* default */],
                      _extends(
                        {
                          content: title,
                        },
                        titleStyle
                      )
                    )
              )
            : external_react_default.a.createElement(
                external_react_default.a.Fragment,
                null,
                logoSrc
                  ? external_react_default.a.createElement(
                      Image['a' /* default */],
                      _extends(
                        {
                          src: logoSrc,
                          alt: title,
                        },
                        logoStyle
                      )
                    )
                  : external_react_default.a.createElement(
                      Text['a' /* default */],
                      _extends(
                        {
                          content: title,
                        },
                        titleStyle
                      )
                    )
              )
        );
      };

      Logo_Logo.defaultProps = {
        logoWrapperStyle: {
          display: 'inline-block',
          mr: '1rem',
          'a:hover,a:focus': {
            textDecoration: 'none',
          },
        },
        titleStyle: {
          display: 'inline-block',
          fontSize: '2rem',
          lineHeight: 'inherit',
          whiteSpace: 'nowrap',
        },
      };
      /* harmony default export */ var UI_Logo = (__webpack_exports__[
        'a'
      ] = Logo_Logo);

      /***/
    },
    /* 29 */
    /***/ function(module, exports) {
      module.exports = require('react-reveal/Slide');

      /***/
    },
    /* 30 */
    /***/ function(module, exports) {
      module.exports = require('next/head');

      /***/
    },
    /* 31 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return ResetCSS;
        }
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        2
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        styled_system__WEBPACK_IMPORTED_MODULE_1__
      );
      function _templateObject() {
        var data = _taggedTemplateLiteral([
          '\n  ::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  html {\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html,\n  html a,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  a,\n  p,\n  li,\n  dl,\n  th,\n  dt,\n  input,\n  textarea,\n  span,\n  div {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  // modal default style\n  .reuseModalOverlay {\n    z-index: 99999;\n  }\n\n  .reuseModalHolder {\n    padding: 0;\n    &.demo_switcher_modal {\n      border: 0;\n      background-color: rgba(16, 30, 77, 0.9);\n      .innerRndComponent {\n        border-radius: 8px;\n      }\n    }\n  }\n\n  button.modalCloseBtn {\n    position: fixed;\n    z-index: 999991;\n    background-color: transparent;\n    top: 10px;\n    right: 10px;\n    min-width: 34px;\n    min-height: 34px;\n    padding: 0;\n    span.btn-icon {\n      font-size: 22px;\n      transform: rotate(45deg);\n    }\n\n    &.alt {\n      border-radius: 50%;\n      z-index: 999999;\n      padding: 0;\n      transition: all 0.3s ease;\n      top: 25px;\n      right: 30px;\n      min-width: 40px;\n      min-height: 40px;\n\n      span.btn-icon {\n        font-size: 20px;\n      }\n\n      &:hover {\n        opacity: 0.88;\n      }\n    }   \n  }\n',
        ]);

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {
            raw: { value: Object.freeze(raw) },
          })
        );
      }

      var ResetCSS = Object(
        styled_components__WEBPACK_IMPORTED_MODULE_0__['createGlobalStyle']
      )(_templateObject());

      /***/
    },
    /* 32 */
    /***/ function(module, exports) {
      module.exports = require('react-anchor-link-smooth-scroll');

      /***/
    },
    /* 33 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OC44NyA4MS40MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwZjIxMzd9LmNscy0ye2ZpbGw6I2ViNGQ0Yn08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDEuNTQgMTgzaC03N2ExLjUgMS41IDAgMCAxLTEuNS0xLjV2LTUxYTEuNSAxLjUgMCAwIDEgMS41LTEuNUgxMTNhMS41IDEuNSAwIDEgMSAwIDNINjZ2NDhoNzR2LTI3YTEuNSAxLjUgMCAwIDEgMyAwdjI4LjVhMS41IDEuNSAwIDAgMS0xLjQ2IDEuNXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02My4wNCAtMTIwLjU3KSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE0Ljk3IDQ4Ljk0bC0xLjcyLTEuODIgMjMuNjEtMjIuMjcgMTEuNjkgMTAuNjJMODQuMDggMi43NGwxLjY5IDEuODQtMzcuMjEgMzQuMjgtMTEuNjctMTAuNjEtMjEuOTIgMjAuNjl6Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNODYuNjQgNy4xNEw4OC44NyAwbC03LjMgMS42NCA1LjA3IDUuNXoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDMuNTQgMTk2LjVBMS41IDEuNSAwIDAgMSAxMDIgMTk1di0xM2ExLjUgMS41IDAgMCAxIDMgMHYxM2ExLjUgMS41IDAgMCAxLTEuNDYgMS41ek0xMTggMjAySDg5YTEuNSAxLjUgMCAwIDEgMC0zaDI5YTEuNSAxLjUgMCAxIDEgMCAzeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYzLjA0IC0xMjAuNTcpIi8+PC9zdmc+';

      /***/
    },
    /* 34 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MC4yOCA4Ni4zMyI+PGRlZnM+PHN0eWxlPi5jbHMtMntmaWxsOiNlYjRkNGJ9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3NC44NiAyMDAuODhhMS4zNCAxLjM0IDAgMCAxLS41MS0uMTFjLTE1LjU2LTYuOTItMjctMTctMzMtMjktOS4xMy0xOC4yNy02LjQxLTQ2LjMzLTYuMjktNDcuNTJhMS4yNiAxLjI2IDAgMCAxIC42LS45NCAxLjIzIDEuMjMgMCAwIDEgMS4xMi0uMDkgMjMuNDkgMjMuNDkgMCAwIDAgOC44NiAxLjYyYzEyLjI3IDAgMjQuNTUtNy42NCAyNi43NC05LjY5YTIuMTggMi4xOCAwIDAgMSAxLjQ1LS41NiAyLjMgMi4zIDAgMCAxIDEuMjYuNDRjMy45MiAyLjczIDE2LjcxIDkuODEgMjguNzMgOS44MWEyMy43NiAyMy43NiAwIDAgMCA5LTEuNjIgMS4yMyAxLjIzIDAgMCAxIDEuMTIuMDkgMS4yNyAxLjI3IDAgMCAxIC42IDFjLjExIDEuMTggMi41IDI5LjA5LTYuMzIgNDcuNDktOS43NSAyMC4zNC0yNy4xNSAyNi45Mi0zMi44NyAyOS4wOWExLjMyIDEuMzIgMCAwIDEtLjQ5LS4wMXptLTM3LjQ1LTc0LjgxYy0uNDMgNi4yNi0xLjQzIDI5LjM2IDYuMTcgNDQuNTQgNy4xOSAxNC4zOCAyMC45IDIzIDMxLjMyIDI3LjY3IDUuOTMtMi4yNiAyMi04Ljc1IDMxLTI3LjY1IDcuMzQtMTUuMzEgNi41Ni0zOC4yOSA2LjE5LTQ0LjU1YTI3LjE2IDI3LjE2IDAgMCAxLTguMyAxLjIyYy0xMi40OSAwLTI1LjY5LTcuMi0zMC0xMC4xNC0zLjYzIDMuMTctMTYuMTQgMTAuMTQtMjguMiAxMC4xNGEyNi42MSAyNi42MSAwIDAgMS04LjE4LTEuMjN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDM0LjU4IC0xMTQuNTUpIiBmaWxsPSIjMGYyMTM3Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDc1LjE5IDE3Ni41MmEyMS4zMiAyMS4zMiAwIDEgMSAyMS4zMi0yMS4zMiAyMS4zNCAyMS4zNCAwIDAgMS0yMS4zMiAyMS4zMnptMC00MC4xNEExOC44MiAxOC44MiAwIDEgMCA0OTQgMTU1LjJhMTguODQgMTguODQgMCAwIDAtMTguODEtMTguODJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDM0LjU4IC0xMTQuNTUpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzkuMDkgNTAuNTVsLTkuOTQtMTEuMDQgMS44Ni0xLjY4IDcuOTUgOC44NCAxMS41MS0xNC43MyAxLjk3IDEuNTQtMTMuMzUgMTcuMDd6Ii8+PC9zdmc+';

      /***/
    },
    /* 35 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IsORw6vDrsOpIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDc1LjUgODAuMjEiPjxwYXRoIGQ9Ik0zOC42IDY2LjkxYTQuMjEgNC4yMSAwIDAgMS0xLjI3LS4yIDcuNTcgNy41NyAwIDAgMS0yLjEyLTEuMjVsLTkuMDktOC41NmE3Ljc1IDcuNzUgMCAwIDEgMC0xMS4zNWwuMDktLjA5YTguNjEgOC42MSAwIDAgMSAxMS43NiAwbC41NC41MS41NC0uNTFhOC42MSA4LjYxIDAgMCAxIDExLjc3IDBsLjE0LjEzYTcuNzUgNy43NSAwIDAgMSAwIDExLjM1bC05LjMyIDguODZhNi41NyA2LjU3IDAgMCAxLTEuODEgMSAzLjggMy44IDAgMCAxLTEuMjMuMTF6bS02LjQ4LTIxLjMyYTYgNiAwIDAgMC00LjE3IDEuNjRsLS4xNC4xNGE1LjI1IDUuMjUgMCAwIDAgMCA3LjcybDkgOC41YTUuMzYgNS4zNiAwIDAgMCAxLjI0Ljc0IDEuNjUgMS42NSAwIDAgMCAxIDAgNC4xMyA0LjEzIDAgMCAwIDEuMDUtLjU3bDkuMTgtOC43M2E1LjI1IDUuMjUgMCAwIDAgMC03LjcybC0uMTQtLjEzYTYuMSA2LjEgMCAwIDAtOC4zMiAwbC0yLjI2IDIuMTUtMi4yNy0yLjE0YTYgNiAwIDAgMC00LjE3LTEuNnoiIGZpbGw9IiNlYjRkNGIiLz48cGF0aCBkPSJNNC43NSAyNi43OGExLjI0IDEuMjQgMCAwIDEtMS0yTDIxLjE0LjY4YTEuMjUgMS4yNSAwIDAgMSAyIDEuNDZMNS43NSAyNi4yNGExLjI0IDEuMjQgMCAwIDEtMSAuNTR6bTY2LjcuMThhMS4yNSAxLjI1IDAgMCAxLTEtLjU0TDUzLjUzIDEuOTZBMS4yNTEgMS4yNTEgMCAwIDEgNTUuNTkuNTRMNzIuNDggMjVhMS4yNSAxLjI1IDAgMCAxLTEgMnpNMTguMjEgODAuMjJjLTEuMTkgMC01LjIxLS4yMi03LjQ2LTMtMS4zNy0xLjY3LTIuMTUtNi42Ni0yLjI5LTcuNjRMMi4wNCAzOC4wN2ExLjI1IDEuMjUgMCAwIDEgMi40NS0uNWw2LjQzIDMxLjU4Yy4zMyAyLjIzIDEuMDggNS42NSAxLjc2IDYuNDkgMS44IDIuMiA1Ljc2IDIgNS44IDJoNDAuNDlzMy4xNCAwIDQuODEtMS45NWExMC4xOSAxMC4xOSAwIDAgMCAxLjg1LTQuNzJsNS42Ny0zMS40NGExLjI1IDEuMjUgMCAxIDEgMi40Ni40NGwtNS42MyAzMS40OWExMi42NCAxMi42NCAwIDAgMS0yLjQ0IDZjLTIuNDIgMi43Ny02LjUyIDIuOC02LjY5IDIuOEgxOC4yMXptNTYtNDcuMDFoLTczYTEuMjUgMS4yNSAwIDEgMSAwLTIuNWg3M2ExLjI1IDEuMjUgMCAwIDEgMCAyLjV6IiBmaWxsPSIjMGYyMTM3Ii8+PC9zdmc+';

      /***/
    },
    /* 36 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5My4zNyA4NS4wOSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwZjIxMzd9LmNscy0ye2ZpbGw6I2ViNGQ0Yn08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNzkuMzUgMjAyYTIuMzIgMi4zMiAwIDAgMS0uNTgtLjA4bC41OC0yLjE0LS42MiAyLjEzYTIuMjIgMi4yMiAwIDEgMSAxLjA3LTQuM2guMTNhMi4yMiAyLjIyIDAgMCAxLS41OCA0LjM2em0tMTAtNC4xMWEyLjI0IDIuMjQgMCAwIDEtMS4wOC0uMjlsLS4xMy0uMDhhMi4yIDIuMiAwIDEgMSAxLjIxLjM3em0tOC41NS02LjU1YTIuMTkgMi4xOSAwIDAgMS0xLjU1LS42NSAyLjI2IDIuMjYgMCAwIDEgMC0zLjE1IDIuMjEgMi4yMSAwIDAgMSAzLjExIDBsLjA2LjA2YTIuMjMgMi4yMyAwIDAgMS0xLjU3IDMuOHptLTYuNTktOC41NGEyLjE3IDIuMTcgMCAwIDEtMS44OC0xLjA5bC0uMDUtLjA5YTIuMjIgMi4yMiAwIDAgMSAzLjg2LTIuMTkgMi4yNCAyLjI0IDAgMCAxLTEuOTMgMy4zN3ptLTQuMTMtMTBhMi4xOCAyLjE4IDAgMCAxLTIuMTEtMS42di0uMDlhMi4yMiAyLjIyIDAgMSAxIDQuMjgtMS4xNSAyLjI1IDIuMjUgMCAwIDEtMS41NCAyLjc2IDIuNjIgMi42MiAwIDAgMS0uNTkuMTZ6bTc5LjY4LTIxLjQ2YTIuMjEgMi4yMSAwIDAgMS0yLjEzLTEuNjQgMi4yNCAyLjI0IDAgMCAxIDEuNTQtMi43NiAyLjE4IDIuMTggMCAwIDEgMi43MSAxLjUydi4wOWEyLjIgMi4yIDAgMCAxLTIuMTUgMi43OXptLTQuMTQtOS45NGEyLjIgMi4yIDAgMCAxLTEuODgtMWwtLjA3LS4xM2EyLjIyIDIuMjIgMCAxIDEgMy44NC0yLjIxbC0xLjkyIDEuMSAxLjkzLTEuMDdhMi4yMSAyLjIxIDAgMCAxLS43NSAzIDIuMTcgMi4xNyAwIDAgMS0xLjExLjM5em0tNi41Mi04LjRhMi4yMSAyLjIxIDAgMCAxLTEuNTUtLjYzbC0uMDgtLjA4YTIuMjIgMi4yMiAwIDAgMSAzLjE0LTMuMTNoLjA1YTIuMjIgMi4yMiAwIDAgMS0xLjU2IDMuOHptLTguNTQtNi41NGEyLjIgMi4yIDAgMCAxLTEuMTUtLjMyIDIuMjIgMi4yMiAwIDAgMS0uODQtMyAyLjIgMi4yIDAgMCAxIDMtLjg0bC4xMy4wN2EyLjIyIDIuMjIgMCAwIDEtMS4xNSA0LjEyem0tOS45NS00LjExYTIgMiAwIDAgMS0uNTMtLjA3aC0uMTRhMi4yMiAyLjIyIDAgMCAxIDEuMTctNC4yOGwtLjU4IDIuMTQuNjItMi4xM2EyLjIyIDIuMjIgMCAwIDEtLjU0IDQuMzd6bS01Mi4wNCAzOC45NmExLjI1IDEuMjUgMCAwIDEtMS4yNS0xLjI1IDQyLjU5IDQyLjU5IDAgMCAxIDQyLjU1LTQyLjU0IDEuMjUgMS4yNSAwIDAgMSAwIDIuNSA0MC4wOSA0MC4wOSAwIDAgMC00MC4wNSA0MCAxLjI1IDEuMjUgMCAwIDEtMS4yNSAxLjI5em00MS4zIDQxLjNhMS4yNSAxLjI1IDAgMCAxIDAtMi41IDQwLjA5IDQwLjA5IDAgMCAwIDQwLTQwLjA1IDEuMjUgMS4yNSAwIDAgMSAyLjUgMCA0Mi41OSA0Mi41OSAwIDAgMS00Mi41IDQyLjU1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0Mi45NyAtMTE3LjUyKSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMzNS4wOSAxNjUuMTRhMS4yNSAxLjI1IDAgMCAxLTEtLjQ4bC0zLTMuNzgtNCAzLjMzYTEuMjUgMS4yNSAwIDAgMS0xLjYtMS45Mmw1LTQuMTZhMS4zIDEuMyAwIDAgMSAuOTMtLjI4IDEuMjYgMS4yNiAwIDAgMSAuODUuNDdsMy43NyA0Ljc5YTEuMjYgMS4yNiAwIDAgMS0xIDJ6bS04Ni44Ny0uNzNoLS4wOWExLjMxIDEuMzEgMCAwIDEtLjg3LS40NGwtNC00Ljc5YTEuMjUgMS4yNSAwIDAgMSAxLjkyLTEuNjFsMy4xOCAzLjgxIDQtMy41NWExLjI1IDEuMjUgMCAxIDEgMS42NCAxLjg3bC01IDQuNGExLjI2IDEuMjYgMCAwIDEtLjc4LjMxeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0Mi45NyAtMTE3LjUyKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI5MCAxNjJoLTQuODlhOC4zIDguMyAwIDAgMS04LjExLTguNDVWMTUyYTcuODYgNy44NiAwIDAgMSA4LjExLTcuOTVIMzAwdjNoLTE0Ljg1QTQuODcgNC44NyAwIDAgMCAyODAgMTUydjEuNmE1LjMxIDUuMzEgMCAwIDAgNS4xMSA1LjQ1SDI5MHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDIuOTcgLTExNy41MikiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yOTQuMzEgMTc3SDI3OHYtM2gxNi4yN2E2IDYgMCAwIDAgNS43My01LjYydi0xLjU5YzAtMi42NC0yLjU3LTQuNzktNS43My00Ljc5SDI4OXYtM2g1LjI3YzQuODkgMCA4LjczIDMuNDIgOC43MyA3Ljc5djEuNTlhOSA5IDAgMCAxLTguNjkgOC42MnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDIuOTcgLTExNy41MikiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik00NC4wNyAyMi40OGgzdjVoLTN6bTAgMzVoM3Y1aC0zeiIvPjwvc3ZnPg==';

      /***/
    },
    /* 37 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5My43IDk3Ljg5Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzBmMjEzN30uY2xzLTJ7ZmlsbDojZWI0ZDRifTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTg1LjA5IDM2My43NUg3NmEzLjcgMy43IDAgMCAxLTMuNy0zLjdWMzMyYTMuNyAzLjcgMCAwIDEgMy43LTMuN2g5LjFhMy43IDMuNyAwIDAgMSAzLjcgMy43djI4LjFhMy43IDMuNyAwIDAgMS0zLjcxIDMuNjV6bS05LjEtMzNhMS4yIDEuMiAwIDAgMC0xLjIgMS4ydjI4LjFhMS4yIDEuMiAwIDAgMCAxLjIgMS4yaDkuMWExLjIgMS4yIDAgMCAwIDEuMi0xLjJWMzMyYTEuMiAxLjIgMCAwIDAtMS4yLTEuMnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi45OSAtMjkzLjExKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTk0LjQzIDMzMy44NmExLjI1IDEuMjUgMCAwIDEtLjU1LTIuMzdjLjA1IDAgNC4zLTIuMTMgNS43OC01LjFsLjQxLS44MWExOS42NCAxOS42NCAwIDAgMCAyLjY2LTguMTdjLjA5LTIgMi0zLjYzIDQuMzUtMy43MnM1LjI3IDEuNDMgNS44MSA2Yy40IDMuNDMtLjUxIDcuOTUtMS41MSAxMS41OUgxMjJhMS4yNSAxLjI1IDAgMSAxIDAgMi41aC0xNGwuNDktMS42MWMxLjU0LTUuMSAyLjIxLTkuNDMgMS44OS0xMi4xOS0uMjktMi40Mi0xLjUtMy44Ni0zLjI0LTMuNzYtMSAwLTEuOTEuNjMtMiAxLjMzYTIyIDIyIDAgMCAxLTIuOTIgOS4ybC0uNC43OWMtMS44NyAzLjczLTYuNzIgNi4xMi02LjkyIDYuMjJhMS4yMyAxLjIzIDAgMCAxLS40Ny4xeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUyLjk5IC0yOTMuMTEpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTIyLjExIDM0MS45aC0xLjI5YTEuMjUgMS4yNSAwIDAgMSAwLTIuNWguNzNjMS4yNiAwIDEuNzggMCAyLjU5LS43NGEzLjQxIDMuNDEgMCAwIDAgLjM1LTMuMjhjLS40OC0xLjE1LTEuNjEtMS43LTMuMzctMS42NGExLjIxIDEuMjEgMCAwIDEtMS4yOS0xLjIgMS4yNCAxLjI0IDAgMCAxIDEuMi0xLjI5YzMuNzktLjE1IDUuMjQgMS45MSA1Ljc2IDMuMTVhNS44MyA1LjgzIDAgMCAxLS45MiA2LjA3IDQuODYgNC44NiAwIDAgMS0zLjc2IDEuNDN6bS0xLjExIDcuMjJoLTEuNzZhMS4yNSAxLjI1IDAgMSAxLS4xMi0yLjVoMS4xOWMxLjE0IDAgMS43MSAwIDIuMzEtLjU1YTIuMzUgMi4zNSAwIDAgMCAuNDktMS44OSAxLjI1IDEuMjUgMCAwIDEgMi40OC0uMzMgNC43MiA0LjcyIDAgMCAxLTEuMjEgNCA0LjQ4IDQuNDggMCAwIDEtMy4zOCAxLjI3em0tMS42OCA2Ljg4aC0xLjc2YTEuMjUgMS4yNSAwIDAgMS0uMTEtMi41aDEuMThjMS4xNC4wNSAxLjcyLjA1IDIuMzEtLjU1YTIuMzEgMi4zMSAwIDAgMCAuNTEtMS43NyAxLjI1IDEuMjUgMCAxIDEgMi40OS0uMjIgNC42NCA0LjY0IDAgMCAxLTEuMjMgMy43NiA0LjQ4IDQuNDggMCAwIDEtMy4zOSAxLjI4em0tMS42MyA2LjA5SDkyLjEzYTEuMjMgMS4yMyAwIDAgMS0uMDYtMi40NmgyNC45OGMxLjE0LjA1IDEuNzIuMDUgMi4zMS0uNTVhMS44OSAxLjg5IDAgMCAwIC41MS0xLjE5IDEuMjUgMS4yNSAwIDAgMSAyLjQ5LjI2IDQuMzggNC4zOCAwIDAgMS0xLjIzIDIuNyA0LjQ1IDQuNDUgMCAwIDEtMy40NCAxLjI0ek0xMTQgMzMzLjc1aC03YTEuMjUgMS4yNSAwIDAgMSAwLTIuNWg3YTEuMjUgMS4yNSAwIDEgMSAwIDIuNXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi45OSAtMjkzLjExKSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTgyLjEgMzU2LjYyYTEuMzQgMS4zNCAwIDEgMS0xLjM0LTEuMzMgMS4zNCAxLjM0IDAgMCAxIDEuMzQgMS4zM3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi45OSAtMjkzLjExKSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTk5LjExIDM5MUg5OWMtMy4xMiAwLTUuNDItMy4xMS03LjY1LTUuODgtMS41Ny0xLjk1LTMuMTktNC4wNi00Ljc4LTQuNjFzLTQuMTIgMC02LjYyLjU3YTI1LjU5IDI1LjU5IDAgMCAxLTUuNjMuODkgNi4xNyA2LjE3IDAgMCAxLTMuODItMS4xMmMtMi40My0xLjgzLTIuNjItNS40Ni0yLjgtOS0uMTMtMi41NC0uMjYtNS4xOC0xLjI3LTYuNjFTNjMuMTcgMzYzIDYwLjkgMzYyYy0zLjMyLTEuMzgtNi43NC0yLjgxLTcuNjctNS44NXMxLjEtNi4xNSAzLjA3LTkuMTVjMS4zNS0yLjA3IDIuNzUtNC4yIDIuNzgtNS44M3MtMS4zMy00LTIuNjUtNi4xOGMtMS44Mi0zLTMuNjktNi4xMS0yLjctOXM0LjQxLTQuMjEgNy43MS01LjQ3YzIuMzYtLjkgNC44LTEuODMgNS44My0zLjJzMS4yMi0zLjkyIDEuNDMtNi40MWMuMjktMy41NS41OS03LjIyIDMuMTQtOWE1LjgxIDUuODEgMCAwIDEgMy40My0xQTIzLjQ2IDIzLjQ2IDAgMCAxIDgxLjEgMzAyYzIuNTIuNjggNS4yMSAxLjMyIDYuOC44M3MzLjQ2LTIuNTQgNS4xNS00LjVjMi4yNS0yLjYgNC41OC01LjI5IDcuNTMtNS4yOSAzLjE5LjA1IDUuNSAyLjkyIDcuNzMgNS42OSAxLjU2IDIgMy4xOCA0IDQuNzcgNC41MnM0LjEyIDAgNi42Mi0uNjJhMjYuMjcgMjYuMjcgMCAwIDEgNS42My0uOTEgNi4xNiA2LjE2IDAgMCAxIDMuODIgMS4xMWMyLjQzIDEuODMgMi42MiA1LjQ1IDIuOCA5IC4xMyAyLjU0LjI2IDUuMTcgMS4yNyA2LjZzMy4yOSAyLjMyIDUuNTcgMy4yN2MzLjMxIDEuMzggNi43NCAyLjgxIDcuNjcgNS44NXMtMS4xMSA2LjE0LTMuMDggOS4xNGMtMS4zNSAyLjA3LTIuNzUgNC4yLTIuNzggNS44M3MxLjM0IDQgMi42NSA2LjE4YzEuODIgMyAzLjcgNi4xMSAyLjcxIDlzLTQuNDIgNC4yMS03LjcyIDUuNDdjLTIuMzYuOS00LjggMS44My01LjgzIDMuMnMtMS4yMiAzLjkyLTEuNDIgNi40MWMtLjI5IDMuNTUtLjU5IDcuMjItMy4xNSA5YTUuODEgNS44MSAwIDAgMS0zLjQzIDEgMjMuNDYgMjMuNDYgMCAwIDEtNS44My0xLjA5Yy0yLjUyLS42Ny01LjIxLTEuMzItNi43OS0uODMtMS43My41My0zLjQ3IDIuNzMtNS4xNiA0LjY4LTIuMjUgMi41OC00LjU4IDUuNDYtNy41MiA1LjQ2ek04NSAzNzcuN2E3LjM2IDcuMzYgMCAwIDEgMi4zOS4zNmMyLjI3Ljc4IDQuMTIgMy4wOCA1LjkxIDUuMzFzMy43NiA0LjczIDUuNyA0Ljc2YzIgMCAzLjc4LTIuMjUgNS42Ny00LjQzczMuOTItNC41MSA2LjMzLTUuMjVhNy4yOCA3LjI4IDAgMCAxIDIuMTYtLjMgMjQuMTQgMjQuMTQgMCAwIDEgNiAxLjExIDIyLjE2IDIyLjE2IDAgMCAwIDUuMTkgMSAzLjQyIDMuNDIgMCAwIDAgMi0uNTFjMS41OS0xLjExIDEuODQtNC4xOSAyLjA4LTcuMTZzLjQ4LTUuNzkgMS45Mi03LjcxIDQuMjUtMyA2Ljk0LTQgNS42Mi0yLjE0IDYuMjQtMy45NC0xLTQuMzctMi40OC02Ljg4LTMuMDUtNS0zLTcuNTEgMS42NC00LjggMy4xOS03LjE2YzEuNjUtMi41MiAzLjM2LTUuMTIgMi43OC03cy0zLjQ3LTMuMTEtNi4yNS00LjI3Yy0yLjYtMS4wOS01LjMtMi4yMi02LjY1LTQuMTVzLTEuNTctNS0xLjcyLTcuOS0uMy02LTEuOC03LjA5YTMuNzUgMy43NSAwIDAgMC0yLjMyLS42MSAyMy44NyAyMy44NyAwIDAgMC01LjA2Ljg1IDI2LjE1IDI2LjE1IDAgMCAxLTUuNjIuOSA3LjI2IDcuMjYgMCAwIDEtMi4zOC0uMzZjLTIuMjgtLjc4LTQuMTMtMy4wOC01LjkxLTUuMzFzLTMuOC00LjczLTUuNzUtNC43NmMtMS44NCAwLTMuNzkgMi4yNS01LjY3IDQuNDNzLTMuOSA0LjUxLTYuMzEgNS4yNWE3LjI4IDcuMjggMCAwIDEtMi4xNi4zIDI0LjIyIDI0LjIyIDAgMCAxLTYtMS4xMSAyMiAyMiAwIDAgMC01LjE4LTEgMy40MiAzLjQyIDAgMCAwLTIgLjUxYy0xLjU5IDEuMTEtMS44NCA0LjE5LTIuMDggNy4xNnMtLjQ4IDUuNzktMS45MiA3LjcxLTQuMjUgMy02Ljk0IDQtNS42MiAyLjE0LTYuMjQgMy45NCAxIDQuMzcgMi40OCA2Ljg4IDMgNSAzIDcuNTEtMS42NCA0LjgtMy4xOSA3LjE2Yy0xLjY1IDIuNTItMy4zNiA1LjEyLTIuNzcgN3MzLjQ2IDMuMTEgNi4yNCA0LjI3YzIuNiAxLjA5IDUuMyAyLjIyIDYuNjUgNC4xNXMxLjU3IDUgMS43MiA3LjkuMzEgNiAxLjggNy4wOWEzLjc3IDMuNzcgMCAwIDAgMi4zMi42MSAyMy44NyAyMy44NyAwIDAgMCA1LjA2LS44NSAyNi4yNSAyNi4yNSAwIDAgMSA1LjYzLS45eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUyLjk5IC0yOTMuMTEpIi8+PC9zdmc+';

      /***/
    },
    /* 38 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/svg+xml;base64,PHN2ZyBpZD0iw5HDq8Ouw6lfMSIgZGF0YS1uYW1lPSLDkcOrw67DqSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3Ni40NyA3Ny43NSI+PGRlZnM+PHN0eWxlPi5jbHMtMntmaWxsOiMwZjIxMzd9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYzNy42NSAzMzAuNzljMC00LjA4IDMuODgtNS4zNCA3LjMzLTUuMzRzNy4zNiAxLjQ1IDcuMzkgNS41OGMwIDMuOTEtMy45NCA1LjUtNy4zMyA1LjUtMi44IDAtNiAuNjktNiA0djIuOTNoMTMuMTl2MS40MmgtMTQuNjl2LTQuMzJjMC00LjI0IDMuOTEtNS4zNCA3LjQ0LTUuMzQgMi40OSAwIDYtLjkzIDYtNC4xNnMtMy4zOS00LjMtNi00LjMtNS44OC44OC01Ljg4IDQuMDZ6bTI5Ljg2LTUuMXYxMy4zNmgyLjQxdjEuNDhoLTIuNDF2NC4zMkg2NjZ2LTQuMzJoLTExLjdsLS4zMS0xLjc4IDExLjA5LTEzLjA2em0tMS40NyAxLjFsLTEwLjQ2IDEyLjI2SDY2NnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MTQuNTggLTMwMS43NCkiIGZpbGw9IiNlYjRkNGIiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02NzUuMjMgMzE5LjUyYy0zLjU3LTEwLTExLjgzLTE1Ljc4LTIyLjY2LTE1Ljc4cy0xOS4wOCA1Ljc1LTIyLjY1IDE1Ljc4bC0xLjg4LS42N2MzLjg3LTEwLjg4IDEyLjgxLTE3LjExIDI0LjUzLTE3LjExczIwLjY3IDYuMjMgMjQuNTQgMTcuMTF6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjE0LjU4IC0zMDEuNzQpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjc5IDMyOS44NWgtMmMwLTEyLjU4LTcuNjMtMjYuMTEtMjQuNC0yNi4xMXMtMjQuNCAxMy41My0yNC40IDI2LjExaC0yYzAtMTMuNTQgOC4yNi0yOC4xMSAyNi40LTI4LjExczI2LjQgMTQuNTcgMjYuNCAyOC4xMXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MTQuNTggLTMwMS43NCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02ODIuMjIgMzQ4LjEzSDY3N3YtMTkuMjhoNS4yN2M0Ljg1LjA5IDguNzcgNC4zOCA4Ljc3IDkuNjRzLTMuOTUgOS41OS04LjgzIDkuNjR6bS0zLjIxLTJoMy4xMmMzLjgyIDAgNi45Mi0zLjQzIDYuOTItNy42NHMtMy4xLTcuNjQtNi45Mi03LjY0SDY3OXptLTUwLjg0IDJINjIzYy00LjYzLS4wNS04LjM4LTQuMzYtOC4zOC05LjY0czMuNzItOS41NSA4LjMyLTkuNjRoNS4yN3ptLTUuMTItMTcuMjhjLTMuNTcgMC02LjQ3IDMuNDMtNi40NyA3LjY0czIuOSA3LjY0IDYuNDcgNy42NGgzLjEydi0xNS4yOHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MTQuNTggLTMwMS43NCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02NDQuMjggMzcyYy0xMy4xOS01LjgzLTE4LjExLTE4LjY1LTE4LjExLTI1LjM2aDJjMCA2LjIxIDQuNTkgMTguMDggMTYuOTIgMjMuNTN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjE0LjU4IC0zMDEuNzQpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjUzLjUzIDM3OS40OWEzLjg1IDMuODUgMCAwIDEtMS4yNy0uMjJsLTYtMi4xMWMtMi4zMi0uODItMy40Mi0zLjctMi40Ny02LjQ0YTUuMTkgNS4xOSAwIDAgMSA0LjY3LTMuNzEgMy45NCAzLjk0IDAgMCAxIDEuMjcuMjJsNi4wNSAyLjExYTQuMTMgNC4xMyAwIDAgMSAyLjUgMi41OSA1Ljc4IDUuNzggMCAwIDEgMCAzLjg1IDUuMTkgNS4xOSAwIDAgMS00Ljc1IDMuNzF6TTY0OC40MSAzNjlhMy4yNiAzLjI2IDAgMCAwLTIuNzggMi4zN2MtLjU5IDEuNyAwIDMuNDQgMS4yNCAzLjg5bDYgMi4xMWMxLjI3LjQ1IDIuODItLjYxIDMuNC0yLjI2YTMuOCAzLjggMCAwIDAgMC0yLjUxIDIuMTUgMi4xNSAwIDAgMC0xLjI4LTEuMzhsLTUuOTktMi4xYTEuODMgMS44MyAwIDAgMC0uNTktLjEyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYxNC41OCAtMzAxLjc0KSIvPjwvc3ZnPg==';

      /***/
    },
    /* 39 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wgALCAA7ADsBAREA/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIDBAUG/9oACAEBAAAAAO8AAAAhyWRRuNuMSS2wAAAB/8QAKBAAAgIBAwIEBwAAAAAAAAAAAgMBBBEABRMhIgYSQEEgMVFhcXKi/9oACAEBAAE/APUtPiSbJx2jM904jSNx3dNWa9q21lrFZjXJ424WySiZXArjrkJ6YLVbxM9aKAPr8rLb2oWwzhc9jpCJMcdMj/XTHdGp3Pdkxb81jlY9T3VeI1sAABsD7BE+aIMcdxZnWw3XXBvg03MCvZ4lserjMx4wLuHEe5T7R8I7VtwVzrhQqihk5NcJGBKfvGp2+lIQE1K8jAQuI4xx5Y6wP40O3UQl8jSrjL4w6YUMcn7fXSK6KqYVXStKo+QLGBGPV//Z';

      /***/
    },
    /* 40 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wgALCAA6ADoBAREA/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIFBgf/2gAIAQEAAAAA3gAAAEOeXdbqLUAAAAAf/8QAJRAAAwACAQMDBQEAAAAAAAAAAQIDBBESAAUhBjFCIjJAQVDh/9oACAEBAAE/APyasUi7j3VSR4J6XNtKUcRO6Lkz4o75rZ9ozdjN/oZyzFGBCtoa3vyB1D1BmLbt+MzI064snpasW5pQoTwZR821sf6u4ZlYdqpCfcTlgHE55wyqqh2x5o7szGfhfJXX3jx16ctS/YoPWjUflReRblsB2A03yXXs37Hn+H//2Q==';

      /***/
    },
    /* 41 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wgALCAA3ADcBAREA/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIEBgUB/9oACAEBAAAAAN4AAR53Ro3ZqGSte6a2AAAP/8QALBAAAgECBQEFCQAAAAAAAAAAAgMBERIABAUTFDEVISJDYRAWMEBBQlFS0f/aAAgBAQABPwD47GAlRtaYgsBkiM5pAxHWZnHvHocJB06zp0KMpAT5QUIo6xWvrGGMBKja0xBYDJEZzSBiOszOO3tH4fM7WyPFv29/kBZf+ta0rhTVvUDVMFizGCAwmsFHWJifbrSYzGiZxJKc4GKISWiaGQ/WB9cPQ+SzTlL1ySEWjpTKtuiZFfcdfFS+PM7sZ1Offn9SVmU6k7TGpYALUReJlo7lK/bStle6t/5HEphi780vWjyC84RZQwl2+ESmlZ82l0nEfzGl8nsjJc27lbC966lb7Yu6evy//9k=';

      /***/
    },
    /* 42 */
    /***/ function(module, exports) {
      module.exports = require('react-stickynode');

      /***/
    },
    /* 43 */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/map-18b073154fe6a34a0819d1c79f404288.png';

      /***/
    },
    /* 44 */
    /***/ function(module, exports) {
      module.exports = require('rc-drawer');

      /***/
    },
    /* 45 */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/client-1-35c470b32851c0abd665f4214e7a1b4c.jpg';

      /***/
    },
    /* 46 */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/denny-c67973e55b73d1a8d1e4a63189edd3c4.png';

      /***/
    },
    /* 47 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,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';

      /***/
    },
    /* 48 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,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';

      /***/
    },
    /* 49 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEX////x+v/x+v/x+v/x+v/x+v/x+v/x+v/x+v/x+v/x+v/x+v/x+v/x+v/x+v/x+v8rmto3oNxDpt5PrOFcsuNouOV1vuiBxOqOyuya0O+m1vGz3PO/4vbM6PjY7vrl9P3x+v9yHx0eAAAAEHRSTlMAECAwQFBgcICQoLDA0ODwVOCoyAAABBpJREFUeNrtm+myqyoQhaNxDorumFljv/9TngzXDIrQLSBVt7L+naqTvT6hu2kRVquffvrJtIIwyRiDXpyxJFov5Z1sChCLxb5t85SBXHnk2TL3ow1gxBMbCH6cA1o8NuzuRQxoyk3GQpABXTw09vAFzFNkZOZTDrOlT+BnoKXIrf1Na7f2AIXn1P6mdGbkJ2BKwRz/iBvzB0a3X+dgUtQh8FIwq4zmHxZgWpRE8DZgXoRqFHAL/rBxNvv9sugm+Mn1OOK2/AHVHWVgT4hy7OUW/RHFcM1t+kPhcPqfUvkDOAVIwS1AZt9fuiAu4S8DWMRfArCM/zTAQv6Aj//Lrp6pfUMHGOf/vtTQiQoQjP7fudRSQ2sIBPV/qwewIy1GovVPz7/8IwGIus/Hn9kfZ6h+/HQKIBH4xzAF0MzJs6MUIMY2ALYABHVI3ADZAhhvV028+1oCGGehz40AXBscAENlABmg25Vl1WIAEnUJnAHQPapWjQEIcRFIA2j/yk9PKYCP7kHxAG319MeMwKgpL/QB+lULFQMZNgLwAMehvxRguD3AtAH6rmHbodJwEAI+aAJ0db/6dqhClOOKoAyga9qP6tM3DXtkJUzRITgFcLlF/HkY/oMGTAIwWInWQAV4zvj5DfP5bzUAx/QBEoB7wX3oIkw/NUCGzwERQPdqE++ehz78W/xqOKzDQAJ4zfidoBGknxrAI4TACOBSiXrPfUfoBzakvYgBwOs14e/T/yD65WWqK45IL4PfAPvX7HcfLwxncXWaQBs1QwwN8Ar/e8S9CKrLxE8vdX3A7JQDGqD+irhrJU6/R6Q2Hfq93EcDtIOC+8iH7VW8NFVX7P5cgAZonv7H93Pu6oPoSdvRuiDrBhM0QHd/4uqs7g2az8ZI+UKAB4B2W+5a0AMY9+MMgLwYaQBEjgEE+xLcKMDhu1LXrfqtHEwCnFQbFL5lgHq0TMnXIeMAx6F/pdwVWGMATliAbjAEg6qRozbm3kvvfbPxv2DC6PS1ENeoHJQBHMlbYgdFGhYrEkBF35Tr5ACJ8FSEfPZn7YtOAHDxF2tbI7DDDYAEYH4MPPZ3G+QArBRZQNA7Wbvz8YodgJXV76OIAVixhQBih58IJ2uA+tV0iY9kwSL+siMbTiNwqTSIHX+olp9WCN1OgLot1ZfqJKvtj7WJ8rSIywCwnwc54tyazQMjHHWYurDnjzyy5djf2pqM9reUCJxwhDmxEf+kI9TmU5HRDlB7pgsy+fi02dNzfMbhaZOt0WbW+fXQ1BgUcy9ymJkFnfs8Jg7RplrXibxM9+m1L/LoBEJh5D7X3LPUPDN2rW7GTY4iM3WDqUegTASLLVwp9CJUQuRZbO8+ox9LLhZwtknCBe5SBnHG+Nv0pjRJwmCpW5w//fT/1z9z1sj4jN9IagAAAABJRU5ErkJggg==';

      /***/
    },
    /* 50 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEX/////+uj/+uj/+uj/+uj/+uj/+uj/+uj/+uj/+uj/+uj/+uj/+uj/+uj/+uj/+ujjvUrlwVPmxF3oyGfqzHHs0Hvt1IXv2I/x25nz36P0463257b468D678r78tT99t7/+uiZ291DAAAAEHRSTlMAECAwQFBgcICQoLDA0ODwVOCoyAAAA6FJREFUeNrtm9mSozAMRcNmNoNNQujOBvr/r5yH6XRnmsWSkKFqKvc9dU9syTayfDi89dZb0oqTrNAanjJaZyrayjsra5iWTkPf5rmGZVUq8GUeqhIwMpkPhDCtAC2TCrsHSgNNlWQsxAXQZRKxP18DT0pk5nMDbK0nCAtYJbWvPQBE+9oD1MGu9gCQMyM/AynFHH9lxPxB0+2jCiRFHYIgB1kVNP+kBmlREiEoQV6E1Sg2Hvyh3G32n9viPsFPXo+V8eUPqNNRAf6EWI6DyqM/YjGMXMPfd2370bO3xNXTf2ustba5cglc/q7fD439q94LgDv7L1/+tvMBgAj/9gnQetgQMel3egIc5QFQ6W+/JQ6A8e+7H4BzLwvg9h+uJ/uP2qtgECLiv7EjHW9SAM78f5zspNpeBCB2/exq59TQBsHw1v/OLogUCZq1/y360wgmAUr2+NMJsgn/1BV/1qnHmhORMwBOboDjsGIdcgXAp0XoEwswLle5vn2HBgPQDNwsDF0TcLFWcAg0OQMwEUDYnTPyEviwSOESIaFGIHYGrP1gxaBzD4IzFgB1RBsdyt0FgAYLgDohFdQIeD2CuYTZl3+XB9xV7zse4E4PgRA2BqiIi6A4QE4OQWGAXztRBBsDGOI5QBygIOcACeBGXodBFsC9Hwb0EBAFKMn7gDCA4nwMCwKMDkN6Y4BRpRw2Bvh9Hg6lAS7Eo0AsDXAnngazjQHCnQHG53G9LYBiAlyFACbqErgrgVYoDSe+ylH+Pd5/+dsoZAKcCQBL1eOpuyqMf2etDMFEVSCS958nqDiFOYb/LIFiATD8ZwhqVmnyYVm6Iytj7s3wwgOY+Eo30zfWXmZg8is9O7AAbmeGfXO+YgcAtxBJaGYADtVG/nMDcNAbAaT8K5LJsumLUFcV81e1KQvgNeJQxdH5S7KYBXAkliaXWjZYABdacdYsdc3w0uC7cnsa1kQgPwqHr0Nai/Ff7lZImHl179q2u8PaCUAfS1fI1cla7LQG00okfCF697xuBxWib0159DeoZuranz+yZWtnf297MtrfUyIYQgtz5iP+SS3U8qmoaQ3UgfSCTG6fjkQJDKN5Ohb0L1n964nUGNTchxwys7DmPY9EE22+6jlRUKz996sf8qwJhFrkPRe3l9oUYs/qGC856kLqBdMTgTIROvXwpDBQqISoitTfe8YwXWhsMbrMkg3eUsZpoc2PqdY6z7Ik3uoV51tv/f/6AxNbnFA3Tb/GAAAAAElFTkSuQmCC';

      /***/
    },
    /* 51 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEX////17//17//17//17//17//17//17//17//17//17//17//17//17//17//17/+vdfCzfPG4hPK8i/PAk/TFm/XJovbNqvfSsvfWufjbwfnfyfrj0Pvo2Pzs4P3x5/717/91LwTmAAAAEHRSTlMAECAwQFBgcICQoLDA0ODwVOCoyAAAA2tJREFUeNrtm9tyozAMhjljwGDaTbI0JYne/ymb7jSbDeEgCcnM7OS/6bSTqb4YSRayHAQvvfSStJLUlNbCTc5ak8W+bJuqgXHZPNI2XliYV52FWsajrAKMnNFAiPIa0HK5sPUws0BTLekLSQl0uVTsyzfAUyby5AsHbK0niEpYpWxb81fF25oHaMJNzV9VMD3fgJQSjv3MidkHSzcf1yAp6hKEBciqpNlPG5AWJRDCCuRFyEaJU7AP1WZP/7Ytqjn/RTQf02P/Y4/8IKo6YmTet/Yklo5DTu5p26NUMoxZ3t+2HXJLVEr96BWAJfvM8GrbXgSAEf3n3VXvbfv+/fO4EoBTePTtP0I4QiJs/xtg96O1ALzC6wpACoVE2L4cwIT988enLADV/7v7/1cFmIx/TwAJ+AJw1PwvDWCp+58XgLnqUxrAjNjPwSNATi0ApAFG8tB8ASQN8NyuMnO27+plAJ6jMHJeASwlAjQADD4F6gCkFA+cBPh9OHMBIkoNOgVweviNBPBUlDccgJ4PUBI8QAVg2B6wvgEGLhCBZ4AanQSVAAqKC2oADHaiGDwDOEodoAFQkmJAAWCYh4EO0I/+CQsQ0lxAHKCi9iLGAbof0QEy6stot/B1iQBPxZD1DPDUKQfPAMN6OPIM0ASkrVgewAS0nUgcINoY4Lket3IA99TQEY5KBAEQfcKRvoTTADgS3spBCADXK470AT4o+5AGQEfsCsQ+V6AmNeZYAPNnRpk+QLenHtMgAM59f+wObXvoPvv+Mg9wuRA7Y4jNcLECxR7SuPETa38AJtgWYGIB/AFMLEBQewKYWoDAegLIVx4RrgWYPqrNmQDDFxN6bxifif5ko93+sSeHaB0ubIPEMHjQ6ddf82+70woPJITB0lPheSDzoJoKMD+tkKoDuIWxJacNsDTJWioDmMVpESbABQeAmN3jxsHpjPhQjZhb4w6MoBwQNUzd6NlHjmxtbB+9J6vZZweClH1Mm4KumjRCXYvbt7QB6lB6cpM8Ph2LEjjG8HQiaL9iza+nUmvQcC9yyDyFNfd5JCbIi1XXicJy7bdffZFnjSM0Ive5uLPUrhS7Vse4ydGUUjeYbgiUB2FzhSuFYYYKiLrM9e4zRvnMYIuzlUk93KVM8tK6u9GrCmPSxNctzpde+v/1Bdz64wjwu0wEAAAAAElFTkSuQmCC';

      /***/
    },
    /* 52 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,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';

      /***/
    },
    /* 53 */
    /***/ function(module, exports) {
      module.exports = require('react-scrollspy');

      /***/
    },
    /* 54 */
    /***/ function(module, exports) {
      module.exports = require('react-particles-js');

      /***/
    },
    /* 55 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAllBMVEX7Lo/////7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo/7Lo8jNrCFAAAAMnRSTlMAAAIEBQYKDQ4PEBIXGBogISIjKissNTdASUpLUlVbXF5fZ2hub3FydHV2eHp7fH5/gGx6LbwAAAD0SURBVCjPVdHNQoJQGITh+YhMxaA0/hQMTSXROrz3f3MtkPTM8tnNjCRJSna/7SaSJBsy8MoB9HXse3jmlmb56BmcXpJtD/CVBqMHB8glLSoHcMzCwVPoQknSvLwCnD9MkvZQ6JZJ0QEukbSE62R0WZifoJHUQKm7m03hIsXgZp4n0Eo1VPJ8C2tFPf3C80VPH2kDW3leQW1qIfF85iA2XWDqeQmNmRpo8+e7T66wNFPigK74L1bA3syk1TfATzkfJu8gHfZ8yo4ArnqVlMMhGPcP0j1A//k2PUF2/1F6b8bLzuGjS3HtANzKfJeidXvZJcO/f6XAIuVCvM/gAAAAAElFTkSuQmCC';

      /***/
    },
    /* 56 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAllBMVEUwfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv8wfv9w6jhqAAAAMnRSTlMAAgMEBQoLDxASExcYHR8gISIjJSsyMz0+Q0RGTFJbX3t8fX5/gIaHioyOj5CRk5SVmV23O/AAAADkSURBVCjPfZLdWoJQEEU3P5UVppiYIEmBgacO6nr/l+tCKBB0X5515puZvUc6y1tuc4vNt0tPXTlve1qZpMOec7rKgxbMvoEyXUy8yet7CfzMzyCwcEzc5pubHMEGkuTmYKadplMDhStpA6ewN094go3kG0jUVwLGVwSVe0GcClbKINWlUshUwGJAQtjJwsOA3IMV4A2IANVXamrtrvT5ujHbCipndJ8xD2Iw/phv87NvN7xWYOEQ/+UTH9p8pBcDlGl45zSZmllb//jRu4PPp86Y6//b2a/7S/hRVtTURRb5zcsvDoEoKiBacYsAAAAASUVORK5CYII=';

      /***/
    },
    /* 57 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAABS0lEQVQ4ja3Tv0pcURDH8U+uq5ZiuIWxSSEYIVWqLTaglSjiC9jl5XyAy8UUa9YHCCYs2sRGERExneAiFrsWO4vHy/5xYae5v5n5zZfDmXM//N/fO8C62cW/DCszBMKnDK0ZQ1s1tPENn6N4gcMpIOn1XaOdoYef6EZj3fvv+Evi7eIoL8peFoU7nCbmHdQmAGvhG8RpXpR3kCXFE3RCf0RjArSB5dCdmFeFdnCc5N+xNAK4FP1B/MqLcnCgN1D4i9vQ89geAd2NvvD/SZtVaA9H8YWvWKt41rCR+vOi7KWGKhRu9J9Zeqq50HORD6KdF+VNFTAMCk08hc5RD12PXPSbw4ZHQR8l28QmVrGV1E7C924o/MZ96EX8wELk99EfGuOgXW+XNp/00j9wKihc4bxSO8PluKFJUPrLeA79bMRypoU+eH0NzcjHxgsLtUxOm5qSqgAAAABJRU5ErkJggg==';

      /***/
    },
    /* 58 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC10lEQVRYhb3XW4jUdRQH8M9uq4Y3DImQ9UFIuqBdMCSFHqQiehAEyQdpC0IkrVRCRbogUT74kFoaTUX4oAWB5IMGPXSBgrDAxMva2hIRUoj2kC5rgrnawznLTNvOzv8/jnNg+H/nzPmf8/2f/+9cpqOnd8AoMg67MRHPYFSjVkhXHf396El8Bi/cKAKddfTH0J94Fea3m8BlPJf4JryX17YRgK/wceJ5eL7dBGA9zid+A90tijseCzC+EYGzeCnxVOxoQfBHcAKHUGlEAD7AD4mX4fEmA9+GvfgSd6RuahECV0UlXMnv7+DmEoE78SxOqZb2EHZiRRECcBS7Et+OVwvedx++E1U0LXWH8SDWYaAoAdiM3xNvwF1j2E7G9gy2IHUXsDaD/zhsWIbAoGANE1BBxyh2S9GHF1U77Se4W2Txaq1xGQKwH58lXqT6TmEWDuJTzEzdL3gMy0VL/5+UJQBr8HfibeJ0b8JJLE79ZbyOe/HFWM7qDaOx5Ld0vhW3iqecXPP716KN/1zEWTMZgD24mHg4+Dk8jUeLBm+GQAdWiE42qUZ/EfeIRnOtjMMyBObiW3yI6akbzOsksbiUliIEJor3fQQP1QTeiNn4M3WbRSW0lMBicbo3iTUNDmAO3hTDamMN0V0jHTRLoBv7RF3PSt1pLMnP6RrbPfimhvDS6yHQJbpdH55I3RXxtHPE04+Ua1gtah/e9t+yLExgvhi7b2FK6g7hAZHmQfWlL0kSXfC1MgSmiBH7vVi9iC1olTh0xwv62oJfE68Tk7AQgYrY94az8ZGYdO8bMTgayCXV9b0r/Tassk7VjtYvuthT4nQ3I5+LwwsLsbLRDR09vQPjRLqOqx6k65Fu/CR2yL9ENs/VM+7EP2JxaEVw+AOvJL5FTMy60uwwaiQV1a3nSTzcbgJDYhEdEgPsXfFfoG0EiAxUEt+pTlk2s5CUkZcxQzSxo6MZ/Av4qY3UFBHrKQAAAABJRU5ErkJggg==';

      /***/
    },
    /* 59 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAeFBMVEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEX/yEUjQUZpAAAAJ3RSTlMAAQ8RKCk/QkNERkddiYqNjpmaoq+xs7/H19jb3N3w8vP09vn6/f6Z4ZSSAAAAlUlEQVQY022Q2xLBQABDz9Yqil6pojetyv//oQeWquYxMzmTBABWybXvr8kaJ3vSWyf7cvxGag9xfGilxgewtYbQA/DCQbUFU+ixc4jdQ4VhI0UfKqG0IVW3+Fpep5RSOSPlKunHOYjU0/xbl9/gURXZFJ+xnZYI5qpiaw3716D9oHo5Pxts4c4prEOYIK3ut3MaGIAnH5MQr/fEE/gAAAAASUVORK5CYII=';

      /***/
    },
    /* 60 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAACV0lEQVRIibWWPWgUQRTHf6tnIgaJnhEdsQinkLOJ8btx7cTCQuwEbcRO0mihoIagGLCxEgSxsbCxEcHWytEuGsTicgG/lQXRwfMIISB3FjPLvWz2dm7vkgcLb/8z83579+bNm2D7y99k2AAw7vwHwJ/khCgsZq1fZgXP+EngqPN3AteAei5CwtZ4xg8IfxiYBDasFnAjUE5oI8B1oH81gGNivA40nT8KXMWfjtxA+Xc+Ax6J90PAZc/6XMAgAXwDPAWeCC0ExpU2wUoAS8Am5xvgo/MfA8/FvOPAhZUAHhT+DK38ATwEXoj3U0qbs70C9wt/OjHWBO4Br4R2RmlzulugLIcG8C5lTgO4m/iY80qbE90A9wp9lvYnyz/gDvDevQfARaXNsbxAmb+3WYuBRWAKqIp4l5Q2RzoFBmTnb5lFYXEeuAV8dlIBuKK0Ge0EWAI2O79Gqxx80L/YczZyUh8wobQZ8QFlsU+ztBx8UAPcAH45aT1wU2kz3CnQl7806E8HrTlpALittNmRBkyWw0xeoIP+ACaAeScNAlNKm61JoCyHKj002igsfsLmdNFJQw46KFtMnnJINaXNNmzPLAN7WNrCFHAuFgJgnxj0lgOwDtittImDl2nt8HZWj4ElIL4N1YAPKZO3iMBlYBf+JtwAvgEV7In0Ol6Q7H1rXcCyeIY8wcFulFnxVKOwuCAnpAHHsI22zxO8CXx3gSvAHPA1CouZtVvA1oq8LLW7aC5gd++c+AX1bu6l/dhNk7RIBK4AX7A56ckK2CvEfeCwCxpDahnrurb/7GOVLT6LtEwAAAAASUVORK5CYII=';

      /***/
    },
    /* 61 */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/saas-banner-256213ab375f61516fe7bf22d4c11160.jpg';

      /***/
    },
    /* 62 */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/bannerObject1-3bbc95f8b66628182211d15de46e941b.png';

      /***/
    },
    /* 63 */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/bannerObject2-8ec99949c59cea0faf58840c325d5b36.png';

      /***/
    },
    /* 64 */
    /***/ function(module, exports) {
      module.exports = require('react-icons-kit/entypo/plus');

      /***/
    },
    /* 65 */
    /***/ function(module, exports) {
      module.exports = require('react-icons-kit/entypo/minus');

      /***/
    },
    /* 66 */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/footer-bg-6c398a2ed748b326cdce58b311f7b91b.png';

      /***/
    },
    /* 67 */
    /***/ function(module, exports) {
      module.exports = require('@glidejs/glide');

      /***/
    },
    /* 68 */
    /***/ function(module, exports) {
      module.exports = require('react-icons-kit/icomoon/checkmark');

      /***/
    },
    /* 69 */
    /***/ function(module, exports) {
      module.exports =
        'data:image/png;base64,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';

      /***/
    },
    /* 70 */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/illustration-132321e8515073c383a30b578f1a9db6.png';

      /***/
    },
    /* 71 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        0
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        6
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        9
      );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        next_link__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        3
      );
      /* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        4
      );
      /* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        5
      );
      /* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        7
      );
      /* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        10
      );
      /* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        8
      );
      /* harmony import */ var _assets_image_saas_partner_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        72
      );
      /* harmony import */ var _assets_image_saas_partner_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_image_saas_partner_png__WEBPACK_IMPORTED_MODULE_9__
      );
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      var PartnerSection = function PartnerSection(_ref) {
        var sectionWrapper = _ref.sectionWrapper,
          row = _ref.row,
          col = _ref.col,
          title = _ref.title,
          description = _ref.description,
          button = _ref.button,
          textArea = _ref.textArea,
          imageArea = _ref.imageArea;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__[
            /* default */ 'a'
          ],
          _extends({}, sectionWrapper, {
            className: 'partner_section',
          }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__[
              /* default */ 'a'
            ],
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__[
                /* default */ 'a'
              ],
              row,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__[
                  /* default */ 'a'
                ],
                _extends({}, col, imageArea),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__[
                    /* default */ 'a'
                  ],
                  {
                    src:
                      _assets_image_saas_partner_png__WEBPACK_IMPORTED_MODULE_9___default.a,
                    alt: 'Domain Image',
                  }
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__[
                  /* default */ 'a'
                ],
                _extends({}, col, textArea),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__[
                    /* default */ 'a'
                  ],
                  _extends({}, title, {
                    content:
                      'All Fx customers get Free Premium account access.',
                  })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__[
                    /* default */ 'a'
                  ],
                  _extends({}, description, {
                    content:
                      'Fx account holders can claim free premium plan access. Check for the customised promo code sent via mail',
                  })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__[
                    /* default */ 'a'
                  ],
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                    {
                      href: '#',
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'a',
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__[
                          /* default */ 'a'
                        ],
                        _extends({}, button, {
                          title: 'CLAIM PREMIUM',
                        })
                      )
                    )
                  )
                )
              )
            )
          )
        );
      };

      PartnerSection.defaultProps = {
        sectionWrapper: {
          as: 'section',
          pt: ['60px', '80px', '80px', '120px'],
          pb: ['60px', '80px', '80px', '120px'],
        },
        row: {
          flexBox: true,
          flexWrap: 'wrap',
          ml: '-15px',
          mr: '-15px',
          alignItems: 'center',
        },
        imageAreaRow: {
          flexDirection: 'row-reverse',
        },
        col: {
          pr: '15px',
          pl: '15px',
        },
        textArea: {
          width: ['100%', '100%', '55%', '50%', '42%'],
        },
        imageArea: {
          width: ['100%', '100%', '45%', '50%', '58%'],
          mb: ['40px', '40px', '0', '0', '0'],
        },
        title: {
          fontSize: ['26px', '30px', '30px', '48px', '48px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '15px',
          lineHeight: '1.5',
        },
        description: {
          fontSize: '16px',
          color: '#343d48cc',
          lineHeight: '1.75',
          mb: '33px',
        },
        button: {
          type: 'button',
          fontSize: '14px',
          fontWeight: '600',
          color: '#fff',
          borderRadius: '4px',
          pl: '22px',
          pr: '22px',
          colors: 'primaryWithBg',
        },
      };
      /* harmony default export */ __webpack_exports__['a'] = PartnerSection;

      /***/
    },
    /* 72 */
    /***/ function(module, exports) {
      module.exports =
        '/_next/static/images/partner-5ec098e24c57378dbb8159967da6263f.png';

      /***/
    },
    /* 73 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: external "next/link"
      var link_ = __webpack_require__(9);
      var link_default = /*#__PURE__*/ __webpack_require__.n(link_);

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // EXTERNAL MODULE: external "styled-system"
      var external_styled_system_ = __webpack_require__(1);

      // CONCATENATED MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Navbar/navbar.style.js
      function _templateObject() {
        var data = _taggedTemplateLiteral([
          '\n  /* Navbar default style goes here */\n  display: flex;\n  align-items: center;\n  min-height: 56px;\n  padding: 10px 16px;\n  \n  /* Style system supported prop */\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n  ',
          '\n',
        ]);

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {
            raw: { value: Object.freeze(raw) },
          })
        );
      }

      var NavbarStyle = external_styled_components_default.a.nav(
        _templateObject(),
        external_styled_system_['display'],
        external_styled_system_['alignItems'],
        external_styled_system_['justifyContent'],
        external_styled_system_['flexDirection'],
        external_styled_system_['flexWrap'],
        external_styled_system_['width'],
        external_styled_system_['height'],
        external_styled_system_['color'],
        external_styled_system_['space'],
        external_styled_system_['boxShadow'],
        external_styled_system_['borderRadius']
      );
      NavbarStyle.displayName = 'NavbarStyle';
      /* harmony default export */ var navbar_style = NavbarStyle;
      // CONCATENATED MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Navbar/index.js
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var Navbar_Navbar = function Navbar(_ref) {
        var className = _ref.className,
          children = _ref.children,
          navbarStyle = _ref.navbarStyle,
          props = _objectWithoutProperties(_ref, [
            'className',
            'children',
            'navbarStyle',
          ]);

        // Add all classs to an array
        var addAllClasses = ['reusecore__navbar']; // className prop checking

        if (className) {
          addAllClasses.push(className);
        }

        return external_react_default.a.createElement(
          navbar_style,
          _extends(
            {
              className: addAllClasses.join(' '),
            },
            props
          ),
          children
        );
      };

      /** Navbar default proptype */
      Navbar_Navbar.defaultProps = {};
      /* harmony default export */ var elements_Navbar = Navbar_Navbar;
      // EXTERNAL MODULE: external "rc-drawer"
      var external_rc_drawer_ = __webpack_require__(44);
      var external_rc_drawer_default = /*#__PURE__*/ __webpack_require__.n(
        external_rc_drawer_
      );

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/rc-drawer/assets/index.css
      var assets = __webpack_require__(86);

      // CONCATENATED MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Drawer/index.js
      function Drawer_extends() {
        Drawer_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return Drawer_extends.apply(this, arguments);
      }

      function Drawer_objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = Drawer_objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function Drawer_objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var Drawer_Drawer = function Drawer(_ref) {
        var className = _ref.className,
          children = _ref.children,
          closeButton = _ref.closeButton,
          drawerHandler = _ref.drawerHandler,
          toggleHandler = _ref.toggleHandler,
          open = _ref.open,
          props = Drawer_objectWithoutProperties(_ref, [
            'className',
            'children',
            'closeButton',
            'drawerHandler',
            'toggleHandler',
            'open',
          ]);

        // Add all classs to an array
        var addAllClasses = ['reusecore__drawer']; // className prop checking

        if (className) {
          addAllClasses.push(className);
        }

        return external_react_default.a.createElement(
          external_react_['Fragment'],
          null,
          external_react_default.a.createElement(
            external_rc_drawer_default.a,
            Drawer_extends(
              {
                open: open,
                onMaskClick: toggleHandler,
                className: addAllClasses.join(' '),
              },
              props
            ),
            external_react_default.a.createElement(
              'div',
              {
                className: 'reusecore-drawer__close',
                onClick: toggleHandler,
              },
              closeButton
            ),
            children
          ),
          external_react_default.a.createElement(
            'div',
            {
              className: 'reusecore-drawer__handler',
              style: {
                display: 'inline-block',
              },
              onClick: toggleHandler,
            },
            drawerHandler
          )
        );
      };

      Drawer_Drawer.defaultProps = {
        width: '300px',
        handler: false,
        level: null,
      };
      /* harmony default export */ var elements_Drawer = Drawer_Drawer;
      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/UI/Logo/index.js + 1 modules
      var Logo = __webpack_require__(28);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Box/index.js
      var Box = __webpack_require__(3);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Button/index.js + 1 modules
      var Button = __webpack_require__(7);

      // CONCATENATED MODULE: ./components/HamburgMenu/hamburgMenu.style.js

      var HamburgMenuWrapper = external_styled_components_default.a.button.withConfig(
        {
          displayName: 'hamburgMenustyle__HamburgMenuWrapper',
          componentId: 'sc-11i4t5v-0',
        }
      )(
        [
          'border:0;background:transparent;width:44px;height:30px;cursor:pointer;',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' > span{display:block;width:100%;height:2px;margin:4px 0;float:right;background-color:',
          ';transition:all 0.3s ease;&:first-child{margin-top:0;}&:last-child{width:calc(100% - 10px);margin-bottom:0;}}&:focus,&:hover{outline:none;> span{&:last-child{width:100%;}}}&:focus{> span{&:first-child{transform:rotate(45deg);transform-origin:8px 50%;}&:nth-child(2){display:none;}&:last-child{width:100%;transform:rotate(-45deg);transform-origin:9px 50%;}}}',
        ],
        external_styled_system_['width'],
        external_styled_system_['height'],
        external_styled_system_['color'],
        external_styled_system_['space'],
        external_styled_system_['border'],
        external_styled_system_['boxShadow'],
        external_styled_system_['borderRadius'],
        function(props) {
          return props.barColor ? props.barColor : '#10ac84';
        }
      );
      HamburgMenuWrapper.displayName = 'HamburgMenuWrapper';
      /* harmony default export */ var hamburgMenu_style = HamburgMenuWrapper;
      // CONCATENATED MODULE: ./components/HamburgMenu/index.js
      function HamburgMenu_extends() {
        HamburgMenu_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return HamburgMenu_extends.apply(this, arguments);
      }

      function HamburgMenu_objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = HamburgMenu_objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function HamburgMenu_objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var HamburgMenu_HamburgMenu = function HamburgMenu(_ref) {
        var className = _ref.className,
          wrapperStyle = _ref.wrapperStyle,
          barColor = _ref.barColor,
          props = HamburgMenu_objectWithoutProperties(_ref, [
            'className',
            'wrapperStyle',
            'barColor',
          ]);

        // Add all classs to an array
        var addAllClasses = ['hamburgMenu__bar']; // className prop checking

        if (className) {
          addAllClasses.push(className);
        }

        return external_react_default.a.createElement(
          hamburgMenu_style,
          HamburgMenu_extends(
            {
              className: addAllClasses.join(' '),
            },
            wrapperStyle,
            {
              barColor: barColor,
              'aria-label': 'hamburgMenu',
            },
            props
          ),
          external_react_default.a.createElement('span', null),
          external_react_default.a.createElement('span', null),
          external_react_default.a.createElement('span', null)
        );
      };

      /* harmony default export */ var components_HamburgMenu = HamburgMenu_HamburgMenu;
      // EXTERNAL MODULE: ./components/UI/Container/index.js + 1 modules
      var Container = __webpack_require__(8);

      // EXTERNAL MODULE: ./contexts/DrawerContext.js
      var DrawerContext = __webpack_require__(15);

      // EXTERNAL MODULE: ./data/Saas/index.js
      var Saas = __webpack_require__(12);

      // EXTERNAL MODULE: external "react-scrollspy"
      var external_react_scrollspy_ = __webpack_require__(53);
      var external_react_scrollspy_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_scrollspy_
      );

      // EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
      var external_react_anchor_link_smooth_scroll_ = __webpack_require__(32);
      var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_anchor_link_smooth_scroll_
      );

      // CONCATENATED MODULE: ./components/ScrollSpyMenu/index.js
      function ScrollSpyMenu_extends() {
        ScrollSpyMenu_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return ScrollSpyMenu_extends.apply(this, arguments);
      }

      function ScrollSpyMenu_objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = ScrollSpyMenu_objectWithoutPropertiesLoose(
          source,
          excluded
        );
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue;
            target[key] = source[key];
          }
        }
        return target;
      }

      function ScrollSpyMenu_objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }

      var ScrollSpyMenu_ScrollSpyMenu = function ScrollSpyMenu(_ref) {
        var className = _ref.className,
          menuItems = _ref.menuItems,
          drawerClose = _ref.drawerClose,
          props = ScrollSpyMenu_objectWithoutProperties(_ref, [
            'className',
            'menuItems',
            'drawerClose',
          ]);

        var _useContext = Object(external_react_['useContext'])(
            DrawerContext['a' /* DrawerContext */]
          ),
          dispatch = _useContext.dispatch; // empty array for scrollspy items

        var scrollItems = []; // convert menu path to scrollspy items

        menuItems.forEach(function(item) {
          scrollItems.push(item.path.slice(1));
        }); // Add all classs to an array

        var addAllClasses = ['scrollspy__menu']; // className prop checking

        if (className) {
          addAllClasses.push(className);
        } // Close drawer when click on menu item

        var toggleDrawer = function toggleDrawer() {
          dispatch({
            type: 'TOGGLE',
          });
        };

        return external_react_default.a.createElement(
          external_react_scrollspy_default.a,
          ScrollSpyMenu_extends(
            {
              items: scrollItems,
              className: addAllClasses.join(' '),
              drawerClose: drawerClose,
            },
            props
          ),
          menuItems.map(function(menu, index) {
            return external_react_default.a.createElement(
              'li',
              {
                key: 'menu-item-'.concat(index),
              },
              drawerClose
                ? external_react_default.a.createElement(
                    external_react_anchor_link_smooth_scroll_default.a,
                    {
                      href: menu.path,
                      offset: menu.offset,
                      onClick: toggleDrawer,
                    },
                    menu.label
                  )
                : external_react_default.a.createElement(
                    external_react_anchor_link_smooth_scroll_default.a,
                    {
                      href: menu.path,
                      offset: menu.offset,
                    },
                    menu.label
                  )
            );
          })
        );
      };

      ScrollSpyMenu_ScrollSpyMenu.defaultProps = {
        componentTag: 'ul',
        currentClassName: 'is-current',
      };
      /* harmony default export */ var components_ScrollSpyMenu = ScrollSpyMenu_ScrollSpyMenu;
      // EXTERNAL MODULE: ./assets/image/saas/logo.png
      var logo = __webpack_require__(22);
      var logo_default = /*#__PURE__*/ __webpack_require__.n(logo);

      // CONCATENATED MODULE: ./containers/Saas/Navbar/index.js
      function Navbar_extends() {
        Navbar_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return Navbar_extends.apply(this, arguments);
      }

      var Saas_Navbar_Navbar = function Navbar(_ref) {
        var navbarStyle = _ref.navbarStyle,
          logoStyle = _ref.logoStyle,
          row = _ref.row,
          menuWrapper = _ref.menuWrapper,
          buttonWrapper = _ref.buttonWrapper,
          button = _ref.button,
          signup = _ref.signup,
          msignup = _ref.msignup,
          mlogin = _ref.mlogin,
          missue = _ref.missue;

        var _useContext = Object(external_react_['useContext'])(
            DrawerContext['a' /* DrawerContext */]
          ),
          state = _useContext.state,
          dispatch = _useContext.dispatch; // Toggle drawer

        var toggleHandler = function toggleHandler() {
          dispatch({
            type: 'TOGGLE',
          });
        };

        return external_react_default.a.createElement(
          elements_Navbar,
          navbarStyle,
          external_react_default.a.createElement(
            Container['a' /* default */],
            null,
            external_react_default.a.createElement(
              Box['a' /* default */],
              row,
              external_react_default.a.createElement(Logo['a' /* default */], {
                href: '#',
                logoSrc: logo_default.a,
                title: 'Agency',
                logoStyle: logoStyle,
              }),
              external_react_default.a.createElement(
                Box['a' /* default */],
                menuWrapper,
                external_react_default.a.createElement(
                  components_ScrollSpyMenu,
                  {
                    className: 'main_menu',
                    menuItems: Saas['d' /* MENU_ITEMS */],
                    offset: -70,
                  }
                ),
                external_react_default.a.createElement(
                  elements_Drawer,
                  {
                    width: '420px',
                    placement: 'right',
                    drawerHandler: external_react_default.a.createElement(
                      components_HamburgMenu,
                      Navbar_extends({}, missue, {
                        barColor: '#eb4d4b',
                      })
                    ),
                    open: state.isOpen,
                    toggleHandler: toggleHandler,
                  },
                  external_react_default.a.createElement(
                    components_ScrollSpyMenu,
                    {
                      className: 'mobile_menu',
                      menuItems: Saas['d' /* MENU_ITEMS */],
                      drawerClose: true,
                      offset: -100,
                    }
                  ),
                  external_react_default.a.createElement(
                    link_default.a,
                    {
                      href: 'https://app.signalant.com/signup',
                    },
                    external_react_default.a.createElement(
                      'a',
                      null,
                      external_react_default.a.createElement(
                        Button['a' /* default */],
                        Navbar_extends({}, button, msignup, {
                          title: 'Sign Up',
                        })
                      )
                    )
                  ),
                  external_react_default.a.createElement(
                    link_default.a,
                    {
                      href: 'https://app.signalant.com/login',
                    },
                    external_react_default.a.createElement(
                      'a',
                      null,
                      external_react_default.a.createElement(
                        Button['a' /* default */],
                        Navbar_extends({}, button, mlogin, {
                          title: 'Log in',
                        })
                      )
                    )
                  )
                )
              ),
              external_react_default.a.createElement(
                Box['a' /* default */],
                buttonWrapper,
                external_react_default.a.createElement(
                  link_default.a,
                  {
                    href: 'https://app.signalant.com/signup',
                  },
                  external_react_default.a.createElement(
                    'a',
                    null,
                    external_react_default.a.createElement(
                      Button['a' /* default */],
                      Navbar_extends({}, button, signup, {
                        title: 'Sign Up',
                      })
                    )
                  )
                ),
                external_react_default.a.createElement(
                  link_default.a,
                  {
                    href: 'https://app.signalant.com/login',
                  },
                  external_react_default.a.createElement(
                    'a',
                    null,
                    external_react_default.a.createElement(
                      Button['a' /* default */],
                      Navbar_extends({}, button, {
                        title: 'Log in',
                      })
                    )
                  )
                )
              )
            )
          )
        );
      };

      Saas_Navbar_Navbar.defaultProps = {
        navbarStyle: {
          className: 'hosting_navbar',
          minHeight: '70px',
          display: 'block',
        },
        row: {
          flexBox: true,
          alignItems: 'center',
          justifyContent: [
            'space-between',
            'space-between',
            'space-between',
            'flex-start',
          ],
          width: '100%',
        },
        logoStyle: {
          maxWidth: '130px',
          mr: [0, 0, 0, '166px'],
        },
        button: {
          type: 'button',
          fontSize: '14px',
          color: 'white',
          borderRadius: '4px',
          pl: '20px',
          pr: '20px',
          mr: '50px',
          colors: 'primaryWithBg',
          minHeight: 'auto',
          height: ''.concat(1),
        },
        signup: {
          ml: '50px',
        },
        msignup: {
          mb: '30px',
        },
        mlogin: {
          mb: '420px',
        },
        missue: {
          ml: '150px',
        },
        menuWrapper: {
          flexBox: true,
          alignItems: 'center',
        },
        buttonWrapper: {
          flexBox: true,
          justifyContent: 'center',
        },
      };
      /* harmony default export */ var Saas_Navbar = (__webpack_exports__[
        'a'
      ] = Saas_Navbar_Navbar);

      /***/
    },
    /* 74 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: external "next/link"
      var link_ = __webpack_require__(9);
      var link_default = /*#__PURE__*/ __webpack_require__.n(link_);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Box/index.js
      var Box = __webpack_require__(3);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Text/index.js
      var Text = __webpack_require__(4);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Heading/index.js
      var Heading = __webpack_require__(5);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Button/index.js + 1 modules
      var Button = __webpack_require__(7);

      // EXTERNAL MODULE: ./components/UI/Container/index.js + 1 modules
      var Container = __webpack_require__(8);

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // EXTERNAL MODULE: external "react-accessible-accordion"
      var external_react_accessible_accordion_ = __webpack_require__(21);

      // CONCATENATED MODULE: ./components/Accordion/accordion.style.js

      var fadeIn = Object(external_styled_components_['keyframes'])([
        '0%{opacity:0;}100%{opacity:1;}',
      ]);
      var AccordionWrapper = external_styled_components_default()(
        external_react_accessible_accordion_['Accordion']
      ).withConfig({
        displayName: 'accordionstyle__AccordionWrapper',
        componentId: 'sc-1wmvwvu-0',
      })(['']);
      var AccordionItemWrapper = external_styled_components_default()(
        external_react_accessible_accordion_['AccordionItem']
      ).withConfig({
        displayName: 'accordionstyle__AccordionItemWrapper',
        componentId: 'sc-1wmvwvu-1',
      })(['']);
      var OpenIcon = external_styled_components_default.a.div.withConfig({
        displayName: 'accordionstyle__OpenIcon',
        componentId: 'sc-1wmvwvu-2',
      })(['']);
      var CloseIcon = external_styled_components_default.a.div.withConfig({
        displayName: 'accordionstyle__CloseIcon',
        componentId: 'sc-1wmvwvu-3',
      })(['opacity:0;']);
      var AccordionTitleWrapper = external_styled_components_default()(
        external_react_accessible_accordion_['AccordionItemTitle']
      ).withConfig({
        displayName: 'accordionstyle__AccordionTitleWrapper',
        componentId: 'sc-1wmvwvu-4',
      })(
        [
          "display:flex;align-items:center;cursor:pointer;position:relative;&[aria-selected='false']{",
          '{opacity:0;}',
          '{opacity:1;}}&:focus{outline:none;}*{flex-grow:1;}',
        ],
        OpenIcon,
        CloseIcon
      );
      var AccordionBodyWrapper = external_styled_components_default()(
        external_react_accessible_accordion_['AccordionItemBody']
      ).withConfig({
        displayName: 'accordionstyle__AccordionBodyWrapper',
        componentId: 'sc-1wmvwvu-5',
      })(
        [
          'animation:0.35s ',
          ' ease-in;&.accordion__body--hidden{animation:0.35s ',
          ' ease-in;}',
        ],
        fadeIn,
        fadeIn
      );
      var IconWrapper = external_styled_components_default.a.div.withConfig({
        displayName: 'accordionstyle__IconWrapper',
        componentId: 'sc-1wmvwvu-6',
      })(
        [
          'margin-left:30px;width:40px;position:relative;',
          ',',
          '{position:absolute;top:50%;right:0;transform:translateY(-50%);transition:0.25s ease-in-out;}',
        ],
        OpenIcon,
        CloseIcon
      );
      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/react-accessible-accordion/dist/fancy-example.css
      var fancy_example = __webpack_require__(87);

      // CONCATENATED MODULE: ./components/Accordion/index.js

      var Accordion_Accordion = function Accordion(_ref) {
        var className = _ref.className,
          children = _ref.children;
        // Add all classs to an array
        var addAllClasses = ['reusecore__accordion']; // className prop checking

        if (className) {
          addAllClasses.push(className);
        }

        return external_react_default.a.createElement(
          AccordionWrapper,
          {
            className: addAllClasses.join(' '),
          },
          children
        );
      };

      var Accordion_AccordionItem = function AccordionItem(_ref2) {
        var className = _ref2.className,
          children = _ref2.children,
          expanded = _ref2.expanded;
        // Add all classs to an array
        var addAllClasses = ['accordion__item']; // className prop checking

        if (className) {
          addAllClasses.push(className);
        }

        return external_react_default.a.createElement(
          AccordionItemWrapper,
          {
            className: addAllClasses.join(' '),
            expanded: expanded,
          },
          children
        );
      };

      var Accordion_AccordionTitle = function AccordionTitle(_ref3) {
        var className = _ref3.className,
          children = _ref3.children;
        // Add all classs to an array
        var addAllClasses = ['accordion__header']; // className prop checking

        if (className) {
          addAllClasses.push(className);
        }

        return external_react_default.a.createElement(
          AccordionTitleWrapper,
          {
            className: addAllClasses.join(' '),
            hideBodyClassName: 'hidden',
          },
          children
        );
      };

      var Accordion_AccordionBody = function AccordionBody(_ref4) {
        var className = _ref4.className,
          children = _ref4.children;
        // Add all classs to an array
        var addAllClasses = ['accordion__body']; // className prop checking

        if (className) {
          addAllClasses.push(className);
        }

        return external_react_default.a.createElement(
          AccordionBodyWrapper,
          {
            className: addAllClasses.join(' '),
          },
          children
        );
      };

      // EXTERNAL MODULE: external "react-icons-kit"
      var external_react_icons_kit_ = __webpack_require__(20);

      // EXTERNAL MODULE: external "react-icons-kit/entypo/plus"
      var plus_ = __webpack_require__(64);

      // EXTERNAL MODULE: external "react-icons-kit/entypo/minus"
      var minus_ = __webpack_require__(65);

      // CONCATENATED MODULE: ./containers/Saas/FaqSection/faqSection.style.js

      var FaqSectionWrapper = external_styled_components_default.a.section.withConfig(
        {
          displayName: 'faqSectionstyle__FaqSectionWrapper',
          componentId: 'sc-11c94tg-0',
        }
      )([
        'padding:80px 0;background:#fafbff;.reusecore__accordion{max-width:820px;margin:0 auto;border-bottom:1px solid #ebebeb;.accordion__item{border-top:0;border-bottom:1px solid #ebebeb;&:last-child{border-bottom:0;}.accordion__header{padding:20px 30px;}.accordion__body{padding:5px 30px 20px;}}}',
      ]);
      /* harmony default export */ var faqSection_style = FaqSectionWrapper;
      // EXTERNAL MODULE: ./data/Saas/index.js
      var Saas = __webpack_require__(12);

      // CONCATENATED MODULE: ./containers/Saas/FaqSection/index.js
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      var FaqSection_FaqSection = function FaqSection(_ref) {
        var sectionHeader = _ref.sectionHeader,
          sectionTitle = _ref.sectionTitle,
          sectionSubTitle = _ref.sectionSubTitle,
          titleStyle = _ref.titleStyle,
          descriptionStyle = _ref.descriptionStyle,
          buttonWrapper = _ref.buttonWrapper,
          button = _ref.button;
        return external_react_default.a.createElement(
          faqSection_style,
          {
            id: 'faq_section',
          },
          external_react_default.a.createElement(
            Container['a' /* default */],
            null,
            external_react_default.a.createElement(
              Box['a' /* default */],
              sectionHeader,
              external_react_default.a.createElement(
                Text['a' /* default */],
                sectionSubTitle
              ),
              external_react_default.a.createElement(
                Heading['a' /* default */],
                sectionTitle
              )
            ),
            external_react_default.a.createElement(
              Box['a' /* default */],
              {
                className: 'row',
              },
              external_react_default.a.createElement(
                Accordion_Accordion,
                null,
                external_react_default.a.createElement(
                  external_react_['Fragment'],
                  null,
                  Saas['a' /* Faq */].map(function(faqItem, index) {
                    return external_react_default.a.createElement(
                      Accordion_AccordionItem,
                      {
                        key: index,
                        expanded: faqItem.expend,
                      },
                      external_react_default.a.createElement(
                        external_react_['Fragment'],
                        null,
                        external_react_default.a.createElement(
                          Accordion_AccordionTitle,
                          null,
                          external_react_default.a.createElement(
                            external_react_['Fragment'],
                            null,
                            external_react_default.a.createElement(
                              Heading['a' /* default */],
                              _extends(
                                {
                                  content: faqItem.title,
                                },
                                titleStyle
                              )
                            ),
                            external_react_default.a.createElement(
                              IconWrapper,
                              null,
                              external_react_default.a.createElement(
                                OpenIcon,
                                null,
                                external_react_default.a.createElement(
                                  external_react_icons_kit_['Icon'],
                                  {
                                    icon: minus_['minus'],
                                    size: 18,
                                  }
                                )
                              ),
                              external_react_default.a.createElement(
                                CloseIcon,
                                null,
                                external_react_default.a.createElement(
                                  external_react_icons_kit_['Icon'],
                                  {
                                    icon: plus_['plus'],
                                    size: 18,
                                  }
                                )
                              )
                            )
                          )
                        ),
                        external_react_default.a.createElement(
                          Accordion_AccordionBody,
                          null,
                          external_react_default.a.createElement(
                            Text['a' /* default */],
                            _extends(
                              {
                                content: faqItem.description,
                              },
                              descriptionStyle
                            )
                          )
                        )
                      )
                    );
                  })
                )
              ),
              external_react_default.a.createElement(
                Box['a' /* default */],
                buttonWrapper,
                external_react_default.a.createElement(
                  link_default.a,
                  {
                    href: '#',
                  },
                  external_react_default.a.createElement(
                    'a',
                    null,
                    external_react_default.a.createElement(
                      Button['a' /* default */],
                      button
                    )
                  )
                )
              )
            )
          )
        );
      }; // FaqSection style props

      // FaqSection default style
      FaqSection_FaqSection.defaultProps = {
        // section header default style
        sectionHeader: {
          mb: '56px',
        },
        // sub section default style
        sectionSubTitle: {
          content: 'FAQ',
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '14px',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: '#5268db',
          mb: '5px',
        },
        // section title default style
        sectionTitle: {
          content: 'FREQUENTLY ASKED QUESTIONS',
          textAlign: 'center',
          fontSize: ['20px', '24px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        // accordion title default style
        titleStyle: {
          fontSize: ['16px', '19px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        // accordion description default style
        descriptionStyle: {
          fontSize: '15px',
          color: '#5d646d',
          lineHeight: '1.75',
          mb: '0',
          fontWeight: '400',
        },
        buttonWrapper: {
          mt: ''.concat(11),
          flexBox: true,
          justifyContent: 'center',
        },
        button: {
          title: 'Create support ticket',
          type: 'button',
          fontSize: ''.concat(2),
          fontWeight: '600',
          borderRadius: '4px',
          pl: '22px',
          pr: '22px',
          colors: 'primary',
          height: ''.concat(4),
        },
      };
      /* harmony default export */ var Saas_FaqSection = (__webpack_exports__[
        'a'
      ] = FaqSection_FaqSection);

      /***/
    },
    /* 75 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: external "next/link"
      var link_ = __webpack_require__(9);
      var link_default = /*#__PURE__*/ __webpack_require__.n(link_);

      // EXTERNAL MODULE: external "react-icons-kit"
      var external_react_icons_kit_ = __webpack_require__(20);
      var external_react_icons_kit_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_icons_kit_
      );

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Box/index.js
      var Box = __webpack_require__(3);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Text/index.js
      var Text = __webpack_require__(4);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Heading/index.js
      var Heading = __webpack_require__(5);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Button/index.js + 1 modules
      var Button = __webpack_require__(7);

      // EXTERNAL MODULE: ./components/UI/Container/index.js + 1 modules
      var Container = __webpack_require__(8);

      // EXTERNAL MODULE: ./components/GlideCarousel/index.js
      var GlideCarousel = __webpack_require__(26);

      // EXTERNAL MODULE: ./components/GlideCarousel/glideSlide.js
      var glideSlide = __webpack_require__(27);

      // EXTERNAL MODULE: ./assets/image/hosting/icon1.svg
      var icon1 = __webpack_require__(33);
      var icon1_default = /*#__PURE__*/ __webpack_require__.n(icon1);

      // EXTERNAL MODULE: ./assets/image/hosting/icon2.svg
      var icon2 = __webpack_require__(34);
      var icon2_default = /*#__PURE__*/ __webpack_require__.n(icon2);

      // EXTERNAL MODULE: ./assets/image/hosting/icon3.svg
      var icon3 = __webpack_require__(35);
      var icon3_default = /*#__PURE__*/ __webpack_require__.n(icon3);

      // EXTERNAL MODULE: ./assets/image/hosting/icon4.svg
      var icon4 = __webpack_require__(36);
      var icon4_default = /*#__PURE__*/ __webpack_require__.n(icon4);

      // EXTERNAL MODULE: ./assets/image/hosting/icon5.svg
      var icon5 = __webpack_require__(37);
      var icon5_default = /*#__PURE__*/ __webpack_require__.n(icon5);

      // EXTERNAL MODULE: ./assets/image/hosting/icon6.svg
      var icon6 = __webpack_require__(38);
      var icon6_default = /*#__PURE__*/ __webpack_require__.n(icon6);

      // EXTERNAL MODULE: ./assets/image/hosting/author-1.jpg
      var author_1 = __webpack_require__(39);
      var author_1_default = /*#__PURE__*/ __webpack_require__.n(author_1);

      // EXTERNAL MODULE: ./assets/image/hosting/author-2.jpg
      var author_2 = __webpack_require__(40);
      var author_2_default = /*#__PURE__*/ __webpack_require__.n(author_2);

      // EXTERNAL MODULE: ./assets/image/hosting/author-3.jpg
      var author_3 = __webpack_require__(41);
      var author_3_default = /*#__PURE__*/ __webpack_require__.n(author_3);

      // CONCATENATED MODULE: ./data/Hosting/images.js
      // Service Icons

      //Testimonial reviewers image

      // CONCATENATED MODULE: ./data/Hosting/data.js
      // Feature Section Content

      var FEATURES_DATA = [
        {
          title: 'Domain Registration & Web Hosting',
          description:
            'We have support team for 24/7 operation. They provide help and ongoing assistance at any time.',
          icon: 'flaticon-trophy violate',
          animation: true,
        },
        {
          title: 'Website Design & Development',
          description:
            'Transferring from another host? Our expert support team is standing by to transfer your site.',
          icon: 'flaticon-startup yellow',
          animation: true,
        },
        {
          title: 'Dedicated Server & Cloud Hosting',
          description:
            'LiteSpeed Web Server is a high-performance HTTP server and known for its high performance.',
          icon: 'flaticon-creative green',
          animation: true,
        },
      ]; // FAQ Section Content

      var FAQ_DATA = [
        {
          id: 1,
          expend: true,
          title: 'How to contact with Customer Service?',
          description:
            'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
        },
        {
          id: 2,
          title: 'App installation failed, how to update system information?',
          description:
            'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
        },
        {
          id: 3,
          title: 'Website reponse taking time, how to improve?',
          description:
            'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
        },
        {
          id: 4,
          title: 'New update fixed all bug and issues?',
          description:
            'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
        },
      ]; // Service Section Content

      var SERVICES_DATA = [
        {
          title: 'Development Server ',
          description:
            'Get Lightspeed Development Server for your website and fly in the web',
          icon: ''.concat(icon1_default.a),
        },
        {
          title: 'Web Protection',
          description:
            'Best Protection and some tools are provided with our Web servers .',
          icon: ''.concat(icon2_default.a),
        },
        {
          title: 'E-commerce Shop',
          description:
            'You can build any kind of E-commerce Shop with payment security tools',
          icon: ''.concat(icon3_default.a),
        },
        {
          title: 'Money Back Guarantee',
          description:
            'We have provided 30 days money back guarantee for our customer',
          icon: ''.concat(icon4_default.a),
        },
        {
          title: 'Client Satisfaction',
          description:
            'Client Satisfaction is our first priority and We are best at it',
          icon: ''.concat(icon5_default.a),
        },
        {
          title: '24/7 Online Support',
          description:
            'A Dedicated support team is always ready to provide best support ',
          icon: ''.concat(icon6_default.a),
        },
      ];
      var MENU_ITEMS = [
        {
          label: 'Home',
          path: '#banner_section',
          offset: '70',
        },
        {
          label: 'Feature',
          path: '#feature_section',
          offset: '70',
        },
        {
          label: 'Service',
          path: '#service_section',
          offset: '70',
        },
        {
          label: 'Testimonial',
          path: '#testimonial_section',
          offset: '70',
        },
        {
          label: 'FAQ',
          path: '#faq_section',
          offset: '70',
        },
        {
          label: 'Contact',
          path: '#contact_section',
          offset: '70',
        },
      ];
      var FOOTER_WIDGET = [
        {
          title: 'About Us',
          menuItems: [
            {
              url: '#',
              text: 'Support Center',
            },
            {
              url: '#',
              text: 'Customer Support',
            },
            {
              url: '#',
              text: 'About Us',
            },
            {
              url: '#',
              text: 'Copyright',
            },
            {
              url: '#',
              text: 'Popular Campaign',
            },
          ],
        },
        {
          title: 'Our Information',
          menuItems: [
            {
              url: '#',
              text: 'Return Policy',
            },
            {
              url: '#',
              text: 'Privacy Policy',
            },
            {
              url: '#',
              text: 'Terms & Conditions',
            },
            {
              url: '#',
              text: 'Site Map',
            },
            {
              url: '#',
              text: 'Store Hours',
            },
          ],
        },
        {
          title: 'My Account',
          menuItems: [
            {
              url: '#',
              text: 'Press inquiries',
            },
            {
              url: '#',
              text: 'Social media directories',
            },
            {
              url: '#',
              text: 'Images & B-roll',
            },
            {
              url: '#',
              text: 'Permissions',
            },
            {
              url: '#',
              text: 'Speaker requests',
            },
          ],
        },
        {
          title: 'Policy',
          menuItems: [
            {
              url: '#',
              text: 'Application security',
            },
            {
              url: '#',
              text: 'Software principles',
            },
            {
              url: '#',
              text: 'Unwanted software policy',
            },
            {
              url: '#',
              text: 'Responsible supply chain',
            },
          ],
        },
      ];
      var MONTHLY_PRICING_TABLE = [
        {
          freePlan: true,
          name: 'Free Plan',
          description: 'Some content here.. some content here..',
          price: '$0',
          priceLabel: 'Per month',
          buttonLabel: 'SIGNUP FREE',
          url: 'https://app.signalant.com/signup',
          listItems: [
            {
              content: '1 Currency pair',
            },
            {
              content: '10 Indicators',
            },
            {
              content: 'Create Strategies',
            },
            {
              content: 'Unlimited Backtests',
            },
            {
              content: 'Signal Automations',
            },
            {
              content: 'Alert DND Timings',
            },
            {
              content: 'Analytics',
            },
          ],
        }, // {
        //   name: 'Business Account',
        //   description: 'For Mediums teams or group who need to build website ',
        //   price: '$9.87',
        //   priceLabel: 'Per month & subscription yearly',
        //   buttonLabel: 'START FREE TRIAL',
        //   url: '#',
        //   listItems: [
        //     {
        //       content: 'Drag & Drop Builder',
        //     },
        //     {
        //       content: '1,000s of Templates Ready',
        //     },
        //     {
        //       content: 'Blog Tools',
        //     },
        //     {
        //       content: 'eCommerce Store ',
        //     },
        //     {
        //       content: '30+ Webmaster Tools',
        //     },
        //   ],
        // },
        {
          name: 'Premium Account',
          description: 'Some content here.. some content here.. ',
          price: '$20',
          priceLabel: 'Per month',
          buttonLabel: 'SIGNUP NOW',
          url: 'https://app.signalant.com/signup',
          listItems: [
            {
              content: '20 Currency pair',
            },
            {
              content: '10 Indicators',
            },
            {
              content: 'Create Strategies',
            },
            {
              content: 'Unlimited Backtests',
            },
            {
              content: 'Signal Automations',
            },
            {
              content: 'Alert DND Timings',
            },
            {
              content: 'Analytics',
            },
          ],
        },
      ];
      var YEARLY_PRICING_TABLE = [
        {
          freePlan: true,
          name: 'Basic Account',
          description: 'For a single client or team who need to build website ',
          price: '$0',
          priceLabel: 'Only for first month',
          buttonLabel: 'CREATE FREE ACCOUNT',
          url: '#',
          listItems: [
            {
              content: 'Drag & Drop Builder',
            },
            {
              content: '1,000s of Templates Ready',
            },
            {
              content: 'Blog Tools',
            },
            {
              content: 'eCommerce Store ',
            },
            {
              content: '30+ Webmaster Tools',
            },
          ],
        },
        {
          name: 'Business Account',
          description: 'For Small teams or group who need to build website ',
          price: '$6.00',
          priceLabel: 'Per month & subscription yearly',
          buttonLabel: 'START FREE TRIAL',
          url: '#',
          listItems: [
            {
              content: 'Unlimited secure storage',
            },
            {
              content: '2,000s of Templates Ready',
            },
            {
              content: 'Blog Tools',
            },
            {
              content: '24/7 phone support',
            },
            {
              content: '50+ Webmaster Tools',
            },
          ],
        },
        {
          name: 'Premium Account',
          description: 'For Large teams or group who need to build website ',
          price: '$9.99',
          priceLabel: 'Per month & subscription yearly',
          buttonLabel: 'START FREE TRIAL',
          url: '#',
          listItems: [
            {
              content: 'Drag & Drop Builder',
            },
            {
              content: '3,000s of Templates Ready',
            },
            {
              content: 'Advanced branding',
            },
            {
              content: 'Knowledge base support',
            },
            {
              content: '80+ Webmaster Tools',
            },
          ],
        },
      ];
      var TESTIMONIALS = [
        {
          review:
            'Best working experience  with this amazing team & in future, we want to work together',
          name: 'Denny Hilguston',
          designation: 'CEO of Dell Co.',
          avatar: ''.concat(author_1_default.a),
        },
        {
          review:
            'Impressed with master class support of the team and really look forward for the future.',
          name: 'Justin Albuz',
          designation: 'Co Founder of IBM',
          avatar: ''.concat(author_2_default.a),
        },
        {
          review:
            'I have bought more than 10 themes on ThemeForest, and this is the first one I review.',
          name: 'Milly Cristiana',
          designation: 'Manager of Hp co.',
          avatar: ''.concat(author_3_default.a),
        },
      ];
      var DOMAIN_NAMES = [
        {
          label: '.com',
          value: 'com',
        },
        {
          label: '.net',
          value: 'net',
        },
        {
          label: '.org',
          value: 'org',
        },
        {
          label: '.co',
          value: 'co',
        },
        {
          label: '.edu',
          value: 'edu',
        },
        {
          label: '.me',
          value: 'me',
        },
      ];
      var DOMAIN_PRICE = [
        {
          content: '.com $9.26',
        },
        {
          content: '.sg $7.91',
        },
        {
          content: '.space $12.54',
        },
        {
          content: '.info $9.13',
        },
        {
          content: '& much more',
          url: '#',
        },
      ];
      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // EXTERNAL MODULE: external "styled-system"
      var external_styled_system_ = __webpack_require__(1);

      // CONCATENATED MODULE: ./containers/Saas/PricingSection/pricing.style.js

      var PricingTable = external_styled_components_default.a.div.withConfig({
        displayName: 'pricingstyle__PricingTable',
        componentId: 'sc-18jqgq5-0',
      })([
        'border:1px solid #f2f4f7;border-radius:5px;margin-bottom:30px;padding:60px 45px;@media (max-width:767px){padding:45px 35px;}',
      ]);
      var PricingHead = external_styled_components_default.a.div.withConfig({
        displayName: 'pricingstyle__PricingHead',
        componentId: 'sc-18jqgq5-1',
      })(['margin-bottom:40px;']);
      var PricingPrice = external_styled_components_default.a.div.withConfig({
        displayName: 'pricingstyle__PricingPrice',
        componentId: 'sc-18jqgq5-2',
      })(['margin-bottom:30px;']);
      var PricingButton = external_styled_components_default.a.div.withConfig({
        displayName: 'pricingstyle__PricingButton',
        componentId: 'sc-18jqgq5-3',
      })(['text-align:center;margin-bottom:55px;']);
      var PricingList = external_styled_components_default.a.div.withConfig({
        displayName: 'pricingstyle__PricingList',
        componentId: 'sc-18jqgq5-4',
      })(['']);
      var ListItem = external_styled_components_default.a.div.withConfig({
        displayName: 'pricingstyle__ListItem',
        componentId: 'sc-18jqgq5-5',
      })([
        'display:flex;margin-bottom:19px;&:last-child{margin-bottom:0;}.price_list_icon{color:#18d379;margin-right:10px;}',
      ]);
      var SwitchWrapper = external_styled_components_default.a.div.withConfig({
        displayName: 'pricingstyle__SwitchWrapper',
        componentId: 'sc-18jqgq5-6',
      })(
        [
          "text-align:center;margin-top:20px;.reusecore__switch{.reusecore__field-label{font-size:16px;font-weight:400;color:#5c636c;cursor:pointer;}input[type='checkbox']{&:checked{+ div{width:40px !important;background-color:",
          ';> div{left:17px !important;}}}+ div{background-color:#f0f0f0;background-color:#f0f0f0;border:0;width:40px;height:25px;> div{background-color:#fff;box-shadow:0px 2px 3px 0.24px rgba(31,64,104,0.25);width:21px;height:21px;top:2px;left:2px;}}}}',
        ],
        Object(external_styled_system_['themeGet'])('colors.primary')
      );
      var PricingButtonWrapper = external_styled_components_default.a.div.withConfig(
        {
          displayName: 'pricingstyle__PricingButtonWrapper',
          componentId: 'sc-18jqgq5-7',
        }
      )([
        'text-align:center;margin-top:30px;.reusecore__button{font-size:16px;font-weight:400;color:#6f7a87;background:#fff;height:50px;width:165px;border:1px solid #e4e9ee;&:nth-child(1){border-top-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:5px;border-right-color:transparent;}&:nth-child(2){border-top-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px;border-bottom-left-radius:0;border-left-color:transparent;}&.active-item{color:#5167db;border-color:#5167db;}@media (max-width:575px){font-size:14px;height:44px;width:120px;padding:0 5px;}}',
      ]);

      /* harmony default export */ var pricing_style = PricingTable;
      // EXTERNAL MODULE: external "react-icons-kit/icomoon/checkmark"
      var checkmark_ = __webpack_require__(68);

      // CONCATENATED MODULE: ./containers/Saas/PricingSection/index.js
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      function _slicedToArray(arr, i) {
        return (
          _arrayWithHoles(arr) ||
          _iterableToArrayLimit(arr, i) ||
          _nonIterableRest()
        );
      }

      function _nonIterableRest() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      }

      function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
          for (
            var _i = arr[Symbol.iterator](), _s;
            !(_n = (_s = _i.next()).done);
            _n = true
          ) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i['return'] != null) _i['return']();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      var PricingSection_PricingSection = function PricingSection(_ref) {
        var sectionWrapper = _ref.sectionWrapper,
          row = _ref.row,
          col = _ref.col,
          secTitleWrapper = _ref.secTitleWrapper,
          secHeading = _ref.secHeading,
          secText = _ref.secText,
          nameStyle = _ref.nameStyle,
          descriptionStyle = _ref.descriptionStyle,
          priceStyle = _ref.priceStyle,
          priceLabelStyle = _ref.priceLabelStyle,
          buttonStyle = _ref.buttonStyle,
          buttonFillStyle = _ref.buttonFillStyle,
          listContentStyle = _ref.listContentStyle,
          pricingtablemiddle = _ref.pricingtablemiddle;

        var _useState = Object(external_react_['useState'])({
            data: MONTHLY_PRICING_TABLE,
            active: true,
          }),
          _useState2 = _slicedToArray(_useState, 2),
          state = _useState2[0],
          setState = _useState2[1];

        var data = state.data;
        var activeStatus = state.active;
        var pricingCarouselOptions = {
          type: 'slider',
          perView: 3,
          gap: 30,
          bound: true,
          breakpoints: {
            1199: {
              perView: 2,
              type: 'carousel',
              peek: {
                before: 100,
                after: 100,
              },
            },
            990: {
              type: 'carousel',
              perView: 1,
              peek: {
                before: 160,
                after: 160,
              },
            },
            767: {
              type: 'carousel',
              perView: 1,
              peek: {
                before: 80,
                after: 80,
              },
            },
            575: {
              type: 'carousel',
              perView: 1,
              gap: 15,
              peek: {
                before: 20,
                after: 20,
              },
            },
          },
        };
        return external_react_default.a.createElement(
          Box['a' /* default */],
          _extends({}, sectionWrapper, {
            id: 'pricing_section',
          }),
          external_react_default.a.createElement(
            Container['a' /* default */],
            null,
            external_react_default.a.createElement(
              Box['a' /* default */],
              secTitleWrapper,
              external_react_default.a.createElement(
                Text['a' /* default */],
                secText
              ),
              external_react_default.a.createElement(
                Heading['a' /* default */],
                secHeading
              )
            ),
            external_react_default.a.createElement(
              Box['a' /* default */],
              _extends({}, row, pricingtablemiddle),
              external_react_default.a.createElement(
                GlideCarousel['a' /* default */],
                {
                  carouselSelector: 'pricing-carousel',
                  options: pricingCarouselOptions,
                  controls: false,
                },
                external_react_default.a.createElement(
                  external_react_default.a.Fragment,
                  null,
                  data.map(function(pricingTable, index) {
                    return external_react_default.a.createElement(
                      glideSlide['a' /* default */],
                      {
                        key: 'pricing-table-'.concat(index),
                      },
                      external_react_default.a.createElement(
                        pricing_style,
                        {
                          freePlan: pricingTable.freePlan,
                          className: 'pricing_table',
                        },
                        external_react_default.a.createElement(
                          PricingHead,
                          null,
                          external_react_default.a.createElement(
                            Heading['a' /* default */],
                            _extends(
                              {
                                content: pricingTable.name,
                              },
                              nameStyle
                            )
                          ),
                          external_react_default.a.createElement(
                            Text['a' /* default */],
                            _extends(
                              {
                                content: pricingTable.description,
                              },
                              descriptionStyle
                            )
                          )
                        ),
                        external_react_default.a.createElement(
                          PricingPrice,
                          null,
                          external_react_default.a.createElement(
                            Text['a' /* default */],
                            _extends(
                              {
                                content: pricingTable.price,
                              },
                              priceStyle
                            )
                          ),
                          external_react_default.a.createElement(
                            Text['a' /* default */],
                            _extends(
                              {
                                content: pricingTable.priceLabel,
                              },
                              priceLabelStyle
                            )
                          )
                        ),
                        external_react_default.a.createElement(
                          PricingButton,
                          null,
                          external_react_default.a.createElement(
                            link_default.a,
                            {
                              href: pricingTable.url,
                            },
                            external_react_default.a.createElement(
                              'a',
                              null,
                              pricingTable.freePlan
                                ? external_react_default.a.createElement(
                                    Button['a' /* default */],
                                    _extends(
                                      {
                                        title: pricingTable.buttonLabel,
                                      },
                                      buttonStyle
                                    )
                                  )
                                : external_react_default.a.createElement(
                                    Button['a' /* default */],
                                    _extends(
                                      {
                                        title: pricingTable.buttonLabel,
                                      },
                                      buttonFillStyle
                                    )
                                  )
                            )
                          )
                        ),
                        external_react_default.a.createElement(
                          PricingList,
                          null,
                          pricingTable.listItems.map(function(item, index) {
                            return external_react_default.a.createElement(
                              ListItem,
                              {
                                key: 'pricing-table-list-'.concat(index),
                              },
                              external_react_default.a.createElement(
                                external_react_icons_kit_default.a,
                                {
                                  icon: checkmark_['checkmark'],
                                  className: 'price_list_icon',
                                  size: 13,
                                }
                              ),
                              external_react_default.a.createElement(
                                Text['a' /* default */],
                                _extends(
                                  {
                                    content: item.content,
                                  },
                                  listContentStyle
                                )
                              )
                            );
                          })
                        )
                      )
                    );
                  })
                )
              )
            )
          )
        );
      };

      PricingSection_PricingSection.defaultProps = {
        sectionWrapper: {
          as: 'section',
          pt: ['60px', '80px', '80px', '80px', '120px'],
          pb: ['20px', '20px', '20px', '80px'],
        },
        row: {
          flexBox: true,
          flexWrap: 'wrap', // pl: ['50px', '320px'],
          // ml: '-150px',
          // mr: '-150px',
          // alignItems: 'center',
          // textAlign: -webkit-center,
        },
        secTitleWrapper: {
          mb: ['50px', '75px'],
        },
        secText: {
          content: 'PRICING PLAN',
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '14px',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: '#5268db',
          mb: '10px',
        },
        secHeading: {
          content: 'What’s our monthly pricing subscription',
          textAlign: 'center',
          fontSize: ['20px', '24px'],
          fontWeight: '500',
          color: 'headingColor',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        col: {
          width: [1, 1 / 2, 1 / 2, 1 / 3],
          pr: '15px',
          pl: '15px',
        },
        nameStyle: {
          fontSize: ['20px', '20px', '22px', '22px', '22px'],
          fontWeight: '500',
          color: 'headingColor',
          letterSpacing: '-0.025em',
          textAlign: 'center',
          mb: '12px',
        },
        descriptionStyle: {
          fontSize: ['15px', '16px', '16px', '16px', '16px'],
          color: 'textColor',
          lineHeight: '1.75',
          textAlign: 'center',
          mb: '0',
        },
        // pricingtablemiddle:{
        //   // justifyContent: 'center',
        //   textAlign: '-webkit-center',
        // },
        priceStyle: {
          as: 'span',
          display: 'block',
          fontSize: ['36px', '36px', '40px', '40px', '40px'],
          color: 'headingColor',
          textAlign: 'center',
          mb: '5px',
          letterSpacing: '-0.025em',
        },
        priceLabelStyle: {
          fontSize: ['13px', '14px', '14px', '14px', '14px'],
          color: 'textColor',
          lineHeight: '1.75',
          textAlign: 'center',
          mb: '0',
        },
        buttonStyle: {
          type: 'button',
          fontSize: '14px',
          fontWeight: '600',
          borderRadius: '4px',
          pl: '10px',
          pr: '10px',
          colors: 'primary',
          width: '222px',
          maxWidth: '100%',
        },
        buttonFillStyle: {
          type: 'button',
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          borderRadius: '4px',
          pl: '10px',
          pr: '10px',
          colors: 'primaryWithBg',
          width: '200px',
          maxWidth: '100%',
        },
        listContentStyle: {
          fontSize: ['15px', '16px', '16px', '16px', '16px'],
          color: 'textColor',
          mb: '0',
        },
      };
      /* harmony default export */ var Saas_PricingSection = (__webpack_exports__[
        'a'
      ] = PricingSection_PricingSection);

      /***/
    },
    /* 76 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: external "next/link"
      var link_ = __webpack_require__(9);
      var link_default = /*#__PURE__*/ __webpack_require__.n(link_);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Box/index.js
      var Box = __webpack_require__(3);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Text/index.js
      var Text = __webpack_require__(4);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Image/index.js
      var Image = __webpack_require__(10);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Heading/index.js
      var Heading = __webpack_require__(5);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Button/index.js + 1 modules
      var Button = __webpack_require__(7);

      // EXTERNAL MODULE: ./components/FeatureBlock/index.js + 1 modules
      var FeatureBlock = __webpack_require__(14);

      // EXTERNAL MODULE: ./components/UI/Container/index.js + 1 modules
      var Container = __webpack_require__(8);

      // EXTERNAL MODULE: external "react-particles-js"
      var external_react_particles_js_ = __webpack_require__(54);
      var external_react_particles_js_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_particles_js_
      );

      // EXTERNAL MODULE: ./assets/image/saas/particles/particle-1.png
      var particle_1 = __webpack_require__(55);
      var particle_1_default = /*#__PURE__*/ __webpack_require__.n(particle_1);

      // EXTERNAL MODULE: ./assets/image/saas/particles/particle-2.png
      var particle_2 = __webpack_require__(56);
      var particle_2_default = /*#__PURE__*/ __webpack_require__.n(particle_2);

      // EXTERNAL MODULE: ./assets/image/saas/particles/particle-3.png
      var particle_3 = __webpack_require__(57);
      var particle_3_default = /*#__PURE__*/ __webpack_require__.n(particle_3);

      // EXTERNAL MODULE: ./assets/image/saas/particles/particle-4.png
      var particle_4 = __webpack_require__(58);
      var particle_4_default = /*#__PURE__*/ __webpack_require__.n(particle_4);

      // EXTERNAL MODULE: ./assets/image/saas/particles/particle-5.png
      var particle_5 = __webpack_require__(59);
      var particle_5_default = /*#__PURE__*/ __webpack_require__.n(particle_5);

      // EXTERNAL MODULE: ./assets/image/saas/particles/particle-6.png
      var particle_6 = __webpack_require__(60);
      var particle_6_default = /*#__PURE__*/ __webpack_require__.n(particle_6);

      // CONCATENATED MODULE: ./containers/Saas/Particle/index.js

      var Particle_ParticlesComponent = function ParticlesComponent() {
        return external_react_default.a.createElement(
          external_react_default.a.Fragment,
          null,
          external_react_default.a.createElement(
            external_react_particles_js_default.a,
            {
              className: 'particle',
              params: {
                particles: {
                  number: {
                    value: 6,
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                  },
                  shape: {
                    type: ['images'],
                    images: [
                      {
                        src: ''.concat(particle_1_default.a),
                        width: 25,
                        height: 25,
                      },
                      {
                        src: ''.concat(particle_2_default.a),
                        width: 18,
                        height: 18,
                      },
                      {
                        src: ''.concat(particle_3_default.a),
                        width: 32,
                        height: 32,
                      },
                      {
                        src: ''.concat(particle_4_default.a),
                        width: 41,
                        height: 41,
                      },
                      {
                        src: ''.concat(particle_5_default.a),
                        width: 22,
                        height: 22,
                      },
                      {
                        src: ''.concat(particle_6_default.a),
                        width: 22,
                        height: 22,
                      },
                    ],
                  },
                  opacity: {
                    value: 0.17626369048095938,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false,
                    },
                  },
                  size: {
                    value: 10,
                    random: false,
                  },
                  line_linked: {
                    enable: false,
                  },
                  move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: false,
                    straight: false,
                    bounce: true,
                    attract: {
                      enable: true,
                      rotateX: 100,
                      rotateY: 400,
                    },
                  },
                },
                retina_detect: true,
              },
            }
          )
        );
      };

      /* harmony default export */ var Particle = Particle_ParticlesComponent;
      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // EXTERNAL MODULE: external "styled-system"
      var external_styled_system_ = __webpack_require__(1);

      // EXTERNAL MODULE: ./assets/image/saas/saas-banner.jpg
      var saas_banner = __webpack_require__(61);
      var saas_banner_default = /*#__PURE__*/ __webpack_require__.n(
        saas_banner
      );

      // CONCATENATED MODULE: ./containers/Saas/BannerSection/bannerSection.style.js

      var BannerWrapper = external_styled_components_default.a.section.withConfig(
        {
          displayName: 'bannerSectionstyle__BannerWrapper',
          componentId: 'sc-1o0fgpf-0',
        }
      )(
        [
          'padding-top:210px;padding-bottom:160px;background-image:url(',
          ');background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed;min-height:100vh;position:relative;overflow:hidden;@media (max-width:990px){padding-top:180px;padding-bottom:60px;min-height:auto;}@media (max-width:767px){padding-top:130px;padding-bottom:20px;min-height:auto;}@media only screen and (max-width:480px){background:none;}.particle{position:absolute;width:50%;height:100%;top:0;left:0;overflow:hidden;@media (max-width:767px){display:none;}@media only screen and (max-width:480px){width:100%;}}.row{position:relative;z-index:1;}.button__wrapper{margin-top:40px;@media (max-width:767px){margin-bottom:30px;}.reusecore__button{&.outlined{border-color:rgba(82,104,219,0.2);}}}',
        ],
        saas_banner_default.a
      );
      var BannerObject = external_styled_components_default.a.div.withConfig({
        displayName: 'bannerSectionstyle__BannerObject',
        componentId: 'sc-1o0fgpf-1',
      })([
        'position:absolute;width:45%;height:100%;top:40px;right:0;display:flex;align-items:center;@media (max-width:767px){display:none;}.objectWrapper{margin-left:auto;position:relative;.dashboardWrapper{position:absolute;top:0;right:0;.chatObject{position:absolute;top:20px;left:120px;}}}',
      ]);
      var DiscountLabel = external_styled_components_default.a.div.withConfig({
        displayName: 'bannerSectionstyle__DiscountLabel',
        componentId: 'sc-1o0fgpf-2',
      })(
        [
          'display:inline-block;border-radius:4em;border:1px solid ',
          ';padding:7px 25px;box-shadow:0px 7px 25px 0px rgba(22,53,76,0.05);margin-bottom:30px;background-color:',
          ';@media (max-width:767px){padding:7px 15px;}',
        ],
        Object(external_styled_system_['themeGet'])(
          'colors.lightBorder',
          '#f1f4f6'
        ),
        Object(external_styled_system_['themeGet'])('colors.white', '#ffffff')
      );

      /* harmony default export */ var bannerSection_style = BannerWrapper;
      // EXTERNAL MODULE: ./assets/image/saas/banner/bannerObject1.png
      var bannerObject1 = __webpack_require__(62);
      var bannerObject1_default = /*#__PURE__*/ __webpack_require__.n(
        bannerObject1
      );

      // EXTERNAL MODULE: ./assets/image/saas/banner/bannerObject2.png
      var bannerObject2 = __webpack_require__(63);
      var bannerObject2_default = /*#__PURE__*/ __webpack_require__.n(
        bannerObject2
      );

      // CONCATENATED MODULE: ./containers/Saas/BannerSection/index.js
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      var BannerSection_BannerSection = function BannerSection(_ref) {
        var row = _ref.row,
          col = _ref.col,
          title = _ref.title,
          btnStyle = _ref.btnStyle,
          description = _ref.description,
          discountText = _ref.discountText,
          discountAmount = _ref.discountAmount,
          outlineBtnStyle = _ref.outlineBtnStyle;

        var ButtonGroup = function ButtonGroup() {
          return external_react_default.a.createElement(
            external_react_['Fragment'],
            null,
            external_react_default.a.createElement(
              Button['a' /* default */],
              _extends(
                {
                  title: 'Explore Now',
                },
                btnStyle
              )
            ),
            external_react_default.a.createElement(
              link_default.a,
              {
                href: '#pricing_section',
              },
              external_react_default.a.createElement(
                'a',
                null,
                external_react_default.a.createElement(
                  Button['a' /* default */],
                  _extends(
                    {
                      className: 'outlined',
                      title: 'PRICING',
                      variant: 'outlined',
                    },
                    outlineBtnStyle
                  )
                )
              )
            )
          );
        };

        return external_react_default.a.createElement(
          bannerSection_style,
          {
            id: 'banner_section',
          },
          external_react_default.a.createElement(Particle, null),
          external_react_default.a.createElement(
            Container['a' /* default */],
            null,
            external_react_default.a.createElement(
              Box['a' /* default */],
              _extends(
                {
                  className: 'row',
                },
                row
              ),
              external_react_default.a.createElement(
                Box['a' /* default */],
                _extends(
                  {
                    className: 'col',
                  },
                  col
                ),
                external_react_default.a.createElement(
                  DiscountLabel,
                  null,
                  external_react_default.a.createElement(
                    Text['a' /* default */],
                    _extends(
                      {
                        content: '25% Discount',
                      },
                      discountAmount
                    )
                  ),
                  external_react_default.a.createElement(
                    Text['a' /* default */],
                    _extends(
                      {
                        content: 'for ',
                      },
                      discountText
                    )
                  ),
                  external_react_default.a.createElement(
                    link_default.a,
                    {
                      href: 'https://www.fxjet.com/',
                    },
                    external_react_default.a.createElement(
                      'a',
                      {
                        target: '_blank',
                        className: '',
                      },
                      'Fx'
                    )
                  ),
                  external_react_default.a.createElement(
                    Text['a' /* default */],
                    _extends(
                      {
                        content: ' Customers',
                      },
                      discountText
                    )
                  )
                ),
                external_react_default.a.createElement(
                  FeatureBlock['a' /* default */],
                  {
                    title: external_react_default.a.createElement(
                      Heading['a' /* default */],
                      _extends(
                        {
                          content:
                            'Significant -\xA0\xA0\xA0\r Trading Signals \xA0\xA0\xA0\r On The Go.',
                        },
                        title
                      )
                    ),
                    description: external_react_default.a.createElement(
                      Text['a' /* default */],
                      _extends(
                        {
                          content:
                            'Create strategies and backtest then with tons of currency pairs.',
                        },
                        description
                      )
                    ),
                    button: external_react_default.a.createElement(
                      ButtonGroup,
                      null
                    ),
                  }
                )
              )
            )
          ),
          external_react_default.a.createElement(
            BannerObject,
            null,
            external_react_default.a.createElement(
              'div',
              {
                className: 'objectWrapper',
              },
              external_react_default.a.createElement(Image['a' /* default */], {
                src: bannerObject1_default.a,
                alt: 'BannerObject1',
              }),
              external_react_default.a.createElement(
                'div',
                {
                  className: 'dashboardWrapper',
                },
                external_react_default.a.createElement(
                  Image['a' /* default */],
                  {
                    src: bannerObject2_default.a,
                    alt: 'BannerObject2',
                  }
                )
              )
            )
          )
        );
      };

      BannerSection_BannerSection.defaultProps = {
        row: {
          flexBox: true,
          flexWrap: 'wrap',
          ml: '-15px',
          mr: '-15px',
          alignItems: 'center',
        },
        col: {
          pr: '15px',
          pl: '15px',
          width: [1, '70%', '50%', '45%'],
        },
        title: {
          fontSize: ['22px', '34px', '30px', '55px'],
          fontWeight: '700',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: ['20px', '25px'],
          lineHeight: '1.5',
        },
        description: {
          fontSize: '16px',
          color: '#343d48cc',
          lineHeight: '1.75',
          mb: '0',
        },
        btnStyle: {
          minWidth: ['120px', '120px', '120px', '156px'],
          fontSize: ['13px', '14px'],
          fontWeight: '500',
          colors: 'primaryWithBg',
          borderRadius: '24px',
        },
        outlineBtnStyle: {
          minWidth: '156px',
          fontSize: '14px',
          fontWeight: '500',
          color: '#5167db',
          ml: '18px',
          borderRadius: '54px',
        },
        discountAmount: {
          fontSize: '14px',
          color: '#eb4d4b',
          mb: 0,
          as: 'span',
          mr: '0.4em',
          fontWeight: 700,
        },
        discountText: {
          fontSize: ['13px', '14px'],
          color: '#0f2137',
          mb: 0,
          as: 'span',
          fontWeight: 500,
        },
      };
      /* harmony default export */ var Saas_BannerSection = (__webpack_exports__[
        'a'
      ] = BannerSection_BannerSection);

      /***/
    },
    /* 77 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // CONCATENATED MODULE: ./theme/saas/colors.js
      var colors = {
        transparent: 'transparent',
        // 0
        black: '#000000',
        // 1
        white: '#ffffff',
        // 2
        headingColor: '#0f2137',
        textColor: '#5d646d',
        // 3
        labelColor: '#767676',
        // 4
        inactiveField: '#f2f2f2',
        // 5
        inactiveButton: '#b7dbdd',
        // 6
        inactiveIcon: '#EBEBEB',
        // 7
        primary: '#5268db',
        // 8
        primaryHover: '#5268db',
        // 9
        secondary: '#ff5b60',
        // 10
        secondaryHover: '#FF282F',
        // 11
        yellow: '#fdb32a',
        // 12
        yellowHover: '#F29E02',
        // 13
        primaryBoxShadow: ' 0px 9px 19.74px 1.26px rgba(82, 104, 219, 0.57) ',
      };
      /* harmony default export */ var saas_colors = colors;
      // CONCATENATED MODULE: ./theme/saas/index.js
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return saasTheme;
        }
      );

      var saasTheme = {
        breakpoints: [575, 768, 990, 1440],
        space: [
          0,
          5,
          8,
          10,
          15,
          20,
          25,
          30,
          33,
          35,
          40,
          50,
          60,
          70,
          80,
          85,
          90,
          100,
        ],
        fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
        fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        lineHeights: {
          solid: 1,
          title: 1.25,
          copy: 1.5,
        },
        letterSpacings: {
          normal: 'normal',
          tracked: '0.1em',
          tight: '-0.05em',
          mega: '0.25em',
        },
        borders: [
          0,
          '1px solid',
          '2px solid',
          '3px solid',
          '4px solid',
          '5px solid',
          '6px solid',
        ],
        radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
        widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
        heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
        maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
        colors: saas_colors,
        colorStyles: {
          primary: {
            color: saas_colors.primary,
            border: '1px solid',
            borderColor: saas_colors.primary,
            backgroundColor: saas_colors.transparent,
            '&:hover': {
              color: saas_colors.white,
              backgroundColor: saas_colors.primaryHover,
              borderColor: saas_colors.transparent,
              boxShadow: '0px 9px 20px -5px rgba(82, 104, 219, 0.57)',
              backgroundImage:
                'linear-gradient( 31deg, rgba(215,178,233, 0.4) 0%, rgba(83,105,220, 0.4) 100%)',
            },
          },
          secondary: {
            color: saas_colors.secondary,
            borderColor: saas_colors.secondary,
            '&:hover': {
              color: saas_colors.secondaryHover,
              borderColor: saas_colors.secondaryHover,
            },
          },
          warning: {
            color: saas_colors.yellow,
            borderColor: saas_colors.yellow,
            '&:hover': {
              color: saas_colors.yellowHover,
              borderColor: saas_colors.yellowHover,
            },
          },
          error: {
            color: saas_colors.secondaryHover,
            borderColor: saas_colors.secondaryHover,
            '&:hover': {
              color: saas_colors.secondary,
              borderColor: saas_colors.secondary,
            },
          },
          primaryWithBg: {
            color: saas_colors.white,
            backgroundColor: saas_colors.primary,
            borderColor: saas_colors.primary,
            backgroundImage:
              'linear-gradient( 31deg, rgba(215,178,233, 0.4) 0%, rgba(83,105,220, 0.4) 100%)',
            '&:hover': {
              backgroundColor: saas_colors.primaryHover,
              borderColor: saas_colors.primaryHover,
              boxShadow: '0px 9px 20px -5px rgba(82, 104, 219, 0.57)',
            },
          },
          secondaryWithBg: {
            color: saas_colors.white,
            backgroundColor: saas_colors.secondary,
            borderColor: saas_colors.secondary,
            '&:hover': {
              backgroundColor: saas_colors.secondaryHover,
              borderColor: saas_colors.secondaryHover,
            },
          },
          warningWithBg: {
            color: saas_colors.white,
            backgroundColor: saas_colors.yellow,
            borderColor: saas_colors.yellow,
            '&:hover': {
              backgroundColor: saas_colors.yellowHover,
              borderColor: saas_colors.yellowHover,
            },
          },
          errorWithBg: {
            color: saas_colors.white,
            backgroundColor: saas_colors.secondaryHover,
            borderColor: saas_colors.secondaryHover,
            '&:hover': {
              backgroundColor: saas_colors.secondary,
              borderColor: saas_colors.secondary,
            },
          },
          transparentBg: {
            backgroundColor: saas_colors.white,
            '&:hover': {
              backgroundColor: saas_colors.white,
            },
          },
        },
        buttonStyles: {
          textButton: {
            border: 0,
            color: saas_colors.primary,
            padding: 0,
            height: 'auto',
            backgroundColor: saas_colors.transparent,
          },
          outlined: {
            borderWidth: '1px',
            borderStyle: 'solid',
            backgroundColor: saas_colors.transparent,
          },
          fab: {
            border: '0',
            width: '40px',
            height: '40px',
            padding: 0,
            borderRadius: '50%',
            justifyContent: 'center',
            'span.btn-icon': {
              paddingLeft: 0,
            },
          },
          extendedFab: {
            border: '0',
            minWidth: '50px',
            height: '40px',
            borderRadius: '50px',
            justifyContent: 'center',
          },
        }, // FlexBox: {
        //   backgroundColor: 'green'
        // }
      };

      /***/
    },
    /* 78 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: external "next/link"
      var link_ = __webpack_require__(9);
      var link_default = /*#__PURE__*/ __webpack_require__.n(link_);

      // EXTERNAL MODULE: external "react-reveal/Fade"
      var Fade_ = __webpack_require__(16);
      var Fade_default = /*#__PURE__*/ __webpack_require__.n(Fade_);

      // EXTERNAL MODULE: external "react-reveal/Zoom"
      var Zoom_ = __webpack_require__(23);
      var Zoom_default = /*#__PURE__*/ __webpack_require__.n(Zoom_);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Box/index.js
      var Box = __webpack_require__(3);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Text/index.js
      var Text = __webpack_require__(4);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Heading/index.js
      var Heading = __webpack_require__(5);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Button/index.js + 1 modules
      var Button = __webpack_require__(7);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Card/index.js
      var Card = __webpack_require__(18);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Image/index.js
      var Image = __webpack_require__(10);

      // EXTERNAL MODULE: ./components/FeatureBlock/index.js + 1 modules
      var FeatureBlock = __webpack_require__(14);

      // EXTERNAL MODULE: ./components/UI/Container/index.js + 1 modules
      var Container = __webpack_require__(8);

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // CONCATENATED MODULE: ./containers/Saas/VisitorSection/visitor.style.js

      var VisitorSectionWrapper = external_styled_components_default.a.section.withConfig(
        {
          displayName: 'visitorstyle__VisitorSectionWrapper',
          componentId: 'knykp2-0',
        }
      )([
        'min-height:630px;display:flex;align-items:center;margin-bottom:40px;margin-top:70px;position:relative;@media only screen and (max-width:1200px){min-height:500px;margin-bottom:45px;}@media only screen and (max-width:991px){min-height:370px;margin-bottom:40px;}@media (max-width:767px){min-height:auto;display:block;}',
      ]);
      var SectionObject = external_styled_components_default.a.div.withConfig({
        displayName: 'visitorstyle__SectionObject',
        componentId: 'knykp2-1',
      })([
        'position:absolute;width:47%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:flex-end;@media (max-width:767px){width:100%;position:relative;height:auto;top:auto;left:auto;}img{max-width:93%;height:auto;}.objectWrapper{margin-right:auto;position:relative;.dashboardWrapper{position:absolute;top:4vw;left:0;}}',
      ]);

      /* harmony default export */ var visitor_style = VisitorSectionWrapper;
      // EXTERNAL MODULE: ./assets/image/saas/saasvisitor1.png
      var saasvisitor1 = __webpack_require__(24);
      var saasvisitor1_default = /*#__PURE__*/ __webpack_require__.n(
        saasvisitor1
      );

      // EXTERNAL MODULE: ./assets/image/saas/visitor_bg.png
      var visitor_bg = __webpack_require__(25);
      var visitor_bg_default = /*#__PURE__*/ __webpack_require__.n(visitor_bg);

      // CONCATENATED MODULE: ./containers/Saas/VisitorSection/index.js
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      var VisitorSection_VisitorSection = function VisitorSection(_ref) {
        var title = _ref.title,
          description = _ref.description,
          textArea = _ref.textArea,
          imageWrapper = _ref.imageWrapper,
          btnStyle = _ref.btnStyle;
        return external_react_default.a.createElement(
          visitor_style,
          {
            id: 'visitorSection',
          },
          external_react_default.a.createElement(
            SectionObject,
            null,
            external_react_default.a.createElement(
              Card['a' /* default */],
              _extends(
                {
                  className: 'objectWrapper',
                },
                imageWrapper
              ),
              external_react_default.a.createElement(
                Zoom_default.a,
                null,
                external_react_default.a.createElement(
                  Image['a' /* default */],
                  {
                    src: visitor_bg_default.a,
                    alt: 'BgImage',
                  }
                )
              ),
              external_react_default.a.createElement(
                Card['a' /* default */],
                _extends(
                  {
                    className: 'dashboardWrapper',
                  },
                  imageWrapper
                ),
                external_react_default.a.createElement(
                  Fade_default.a,
                  {
                    left: true,
                  },
                  external_react_default.a.createElement(
                    Image['a' /* default */],
                    {
                      src: saasvisitor1_default.a,
                      alt: 'VisitorDashboard1',
                    }
                  )
                )
              )
            )
          ),
          external_react_default.a.createElement(
            Container['a' /* default */],
            null,
            external_react_default.a.createElement(
              Box['a' /* default */],
              textArea,
              external_react_default.a.createElement(
                FeatureBlock['a' /* default */],
                {
                  title: external_react_default.a.createElement(
                    Heading['a' /* default */],
                    _extends(
                      {
                        content:
                          'Create Strategies using best forex indicators',
                      },
                      title
                    )
                  ),
                  description: external_react_default.a.createElement(
                    Text['a' /* default */],
                    _extends(
                      {
                        content:
                          'With about 10 top indicators, you can choose currency pair, trigger buy/ sell, timeframes, etc.',
                      },
                      description
                    )
                  ),
                  button: external_react_default.a.createElement(
                    link_default.a,
                    {
                      href: '#',
                    },
                    external_react_default.a.createElement(
                      'a',
                      null,
                      external_react_default.a.createElement(
                        Button['a' /* default */],
                        _extends(
                          {
                            title: 'Create Strategies',
                          },
                          btnStyle
                        )
                      )
                    )
                  ),
                }
              )
            )
          )
        );
      };

      VisitorSection_VisitorSection.defaultProps = {
        textArea: {
          width: ['100%', '100%', '45%'],
          ml: [0, 0, '58%'],
        },
        imageWrapper: {
          boxShadow: 'none',
        },
        title: {
          fontSize: ['20px', '26px', '26px', '36px', '48px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.010em',
          mb: '20px',
          maxWidth: ['100%', '100%', '100%', '440px', '440px'],
          lineHeight: '1.5',
        },
        description: {
          fontSize: '16px',
          color: '#343d48cc',
          lineHeight: '1.75',
          mb: '33px',
          maxWidth: ['100%', '100%', '100%', '440px', '440px'],
        },
        btnStyle: {
          minWidth: '156px',
          fontSize: '14px',
          fontWeight: '500',
          color: '#fff',
          borderRadius: '4px',
          pl: '22px',
          pr: '22px',
          colors: 'primaryWithBg',
        },
      };
      /* harmony default export */ var Saas_VisitorSection = (__webpack_exports__[
        'a'
      ] = VisitorSection_VisitorSection);

      /***/
    },
    /* 79 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Box/index.js
      var Box = __webpack_require__(3);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Text/index.js
      var Text = __webpack_require__(4);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Heading/index.js
      var Heading = __webpack_require__(5);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Image/index.js
      var Image = __webpack_require__(10);

      // EXTERNAL MODULE: ./components/FeatureBlock/index.js + 1 modules
      var FeatureBlock = __webpack_require__(14);

      // EXTERNAL MODULE: ./data/Saas/index.js
      var Saas = __webpack_require__(12);

      // EXTERNAL MODULE: ./components/UI/Container/index.js + 1 modules
      var Container = __webpack_require__(8);

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // CONCATENATED MODULE: ./containers/Saas/ServiceSection/service.style.js

      var ServiceSectionWrapper = external_styled_components_default.a.section.withConfig(
        {
          displayName: 'servicestyle__ServiceSectionWrapper',
          componentId: 'sc-1if930n-0',
        }
      )(
        [
          'padding:80px 0 40px;@media (max-width:990px){padding:60px 0 0 0;}.feature__block{position:relative;height:100%;transition:box-shadow 0.3s ease;display:flex;@media (max-width:500px){padding:30px 0;}.icon__wrapper{position:relative;border-bottom-right-radius:6px;flex-shrink:0;margin-right:22px;background:#fff5f6;.flaticon-flask{&:before{margin-left:8px;}}}&:hover{',
          '}}.row{> .col{&:nth-child(-n + 3){}&:nth-child(3n + 3),&:last-child{}&:nth-child(1){.feature__block{.icon__wrapper{background:#fff5f6;color:#f55767;}}}&:nth-child(2){.feature__block{.icon__wrapper{background:#ebfff2;color:#29c05e;}}}&:nth-child(3){.feature__block{.icon__wrapper{background:#f1faff;color:#2595d4;}}}&:nth-child(4){.feature__block{.icon__wrapper{background:#fffae8;color:#e9b600;}}}&:nth-child(5){.feature__block{.icon__wrapper{background:#f5eeff;color:#a55cef;}}}&:nth-child(6){.feature__block{.icon__wrapper{background:#ffecfa;color:#e764a5;}}}}}',
        ],
        ''
        /* box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2); */
      );
      /* harmony default export */ var service_style = ServiceSectionWrapper;
      // CONCATENATED MODULE: ./containers/Saas/ServiceSection/index.js
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      var ServiceSection_ServiceSection = function ServiceSection(_ref) {
        var row = _ref.row,
          col = _ref.col,
          sectionHeader = _ref.sectionHeader,
          sectionTitle = _ref.sectionTitle,
          sectionSubTitle = _ref.sectionSubTitle,
          featureTitle = _ref.featureTitle,
          featureDescription = _ref.featureDescription,
          iconStyle = _ref.iconStyle,
          contentStyle = _ref.contentStyle,
          blockWrapperStyle = _ref.blockWrapperStyle;
        return external_react_default.a.createElement(
          service_style,
          {
            id: 'feature_section',
          },
          external_react_default.a.createElement(
            Container['a' /* default */],
            null,
            external_react_default.a.createElement(
              Box['a' /* default */],
              sectionHeader,
              external_react_default.a.createElement(
                Text['a' /* default */],
                _extends(
                  {
                    content: 'WHY SIGNALANT',
                  },
                  sectionSubTitle
                )
              ),
              external_react_default.a.createElement(
                Heading['a' /* default */],
                _extends(
                  {
                    content: 'Salient features of Signalant',
                  },
                  sectionTitle
                )
              )
            ),
            external_react_default.a.createElement(
              Box['a' /* default */],
              _extends(
                {
                  className: 'row',
                },
                row
              ),
              Saas['e' /* Service */].map(function(feature, index) {
                return external_react_default.a.createElement(
                  Box['a' /* default */],
                  _extends(
                    {
                      className: 'col',
                    },
                    col,
                    {
                      key: index,
                    }
                  ),
                  external_react_default.a.createElement(
                    FeatureBlock['a' /* default */], // icon={<i className={feature.icon} />}
                    {
                      icon: external_react_default.a.createElement(
                        Image['a' /* default */],
                        {
                          src: feature.avatar_url,
                          alt: 'Client Image',
                        }
                      ),
                      wrapperStyle: blockWrapperStyle,
                      iconStyle: iconStyle,
                      contentStyle: contentStyle,
                      title: external_react_default.a.createElement(
                        Heading['a' /* default */],
                        _extends(
                          {
                            content: feature.title,
                          },
                          featureTitle
                        )
                      ),
                      description: external_react_default.a.createElement(
                        Text['a' /* default */],
                        _extends(
                          {
                            content: feature.description,
                          },
                          featureDescription
                        )
                      ),
                      className: 'saasService',
                    }
                  )
                );
              })
            )
          )
        );
      }; // ServiceSection style props

      // ServiceSection default style
      ServiceSection_ServiceSection.defaultProps = {
        // section header default style
        sectionHeader: {
          mb: ['50px', '50px', '50px', '80px'],
        },
        // sub section default style
        sectionSubTitle: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '14px',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: '#5268db',
          mb: '10px',
        },
        // section title default style
        sectionTitle: {
          textAlign: 'center',
          fontSize: ['20px', '24px'],
          fontWeight: '500',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        // feature row default style
        row: {
          flexBox: true,
          flexWrap: 'wrap',
        },
        // feature col default style
        col: {
          width: [1, 1 / 2, 1 / 2, 1 / 3],
        },
        // feature block wrapper default style
        blockWrapperStyle: {
          p: ['30px', '20px', '20px', '20px'],
        },
        // feature icon default style
        iconStyle: {
          width: ['70px', '80px'],
          height: ['70px', '80px'],
          borderRadius: '50%',
          bg: '#93d26e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: ['32px', '36px'],
          color: '#ffffff',
          overflow: 'hidden',
          mb: '30px',
          borderBottomLeftRadius: '50%',
        },
        // feature content default style
        contentStyle: {
          textAlign: 'left',
          mt: '-5px',
        },
        // feature title default style
        featureTitle: _defineProperty(
          {
            fontSize: ['18px', '20px'],
            fontWeight: '400',
            color: '#0f2137',
            lineHeight: '1.5',
            mb: '20px',
            letterSpacing: '-0.020em',
          },
          'mb',
          '10px'
        ),
        // feature description default style
        featureDescription: {
          fontSize: '15px',
          lineHeight: '1.75',
          color: '#343d4ccc',
        },
      };
      /* harmony default export */ var Saas_ServiceSection = (__webpack_exports__[
        'a'
      ] = ServiceSection_ServiceSection);

      /***/
    },
    /* 80 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Text/index.js
      var Text = __webpack_require__(4);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Heading/index.js
      var Heading = __webpack_require__(5);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Button/index.js + 1 modules
      var Button = __webpack_require__(7);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Image/index.js
      var Image = __webpack_require__(10);

      // EXTERNAL MODULE: ./data/Saas/index.js
      var Saas = __webpack_require__(12);

      // EXTERNAL MODULE: ./components/UI/Container/index.js + 1 modules
      var Container = __webpack_require__(8);

      // EXTERNAL MODULE: ./components/GlideCarousel/index.js
      var GlideCarousel = __webpack_require__(26);

      // EXTERNAL MODULE: ./components/GlideCarousel/glideSlide.js
      var glideSlide = __webpack_require__(27);

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // EXTERNAL MODULE: external "styled-system"
      var external_styled_system_ = __webpack_require__(1);

      // CONCATENATED MODULE: ./containers/Saas/TestimonialSection/testimonialSection.style.js

      var TestimonialSectionWrapper = external_styled_components_default.a.section.withConfig(
        {
          displayName: 'testimonialSectionstyle__TestimonialSectionWrapper',
          componentId: 'gwil2k-0',
        }
      )(
        [
          'padding:80px 0 120px;overflow:hidden;@media (max-width:990px){padding-bottom:80px;}@media (max-width:767px){padding-top:40px;padding-left:20px;}.glide{max-width:954px;margin:0 auto;.glide__slide{display:flex;margin-bottom:40px;@media only screen and (max-width:991px){padding-top:30px;}@media only screen and (max-width:680px){flex-direction:column-reverse;}}.glide__controls{position:relative;bottom:0;.reusecore__button{&:hover{color:',
          ';}}}}',
        ],
        Object(external_styled_system_['themeGet'])(
          'colors.quoteText',
          '#343d48'
        )
      );
      var TextWrapper = external_styled_components_default.a.div.withConfig({
        displayName: 'testimonialSectionstyle__TextWrapper',
        componentId: 'gwil2k-1',
      })([
        'max-width:540px;margin-right:auto;position:relative;padding-left:12px;margin-right:30px;text-align:initial;p{text-indent:27px;margin-bottom:25px;}i{color:rgba(52,61,72,0.2);font-size:20px;position:absolute;top:0;left:12px;z-index:-1;}',
      ]);
      var ImageWrapper = external_styled_components_default.a.div.withConfig({
        displayName: 'testimonialSectionstyle__ImageWrapper',
        componentId: 'gwil2k-2',
      })([
        'width:256px;height:256px;position:relative;@media only screen and (max-width:680px){margin-bottom:40px;}.reusecore__button{position:absolute;z-index:2;bottom:0;left:20px;width:65px;height:65px;font-size:26px;background-color:rgb(220,57,95);box-shadow:0px 10px 28.2px 1.8px rgba(23,65,104,0.2);}',
      ]);
      var RoundWrapper = external_styled_components_default.a.div.withConfig({
        displayName: 'testimonialSectionstyle__RoundWrapper',
        componentId: 'gwil2k-3',
      })([
        'width:256px;height:256px;border-radius:50%;box-sizing:border-box;border-bottom-right-radius:10px;background:rgb(232,230,192);background:radial-gradient( circle,rgba(232,230,192,1) 0%,rgba(199,195,134,1) 100% );overflow:hidden;',
      ]);
      var ClientName = external_styled_components_default.a.div.withConfig({
        displayName: 'testimonialSectionstyle__ClientName',
        componentId: 'gwil2k-4',
      })([
        'display:flex;align-items:center;@media (max-width:575px){flex-direction:column;align-items:inherit;}',
      ]);

      /* harmony default export */ var testimonialSection_style = TestimonialSectionWrapper;
      // CONCATENATED MODULE: ./containers/Saas/TestimonialSection/index.js
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      var TestimonialSection_TestimonialSection = function TestimonialSection(
        _ref
      ) {
        var sectionSubTitle = _ref.sectionSubTitle,
          btnWrapperStyle = _ref.btnWrapperStyle,
          commentStyle = _ref.commentStyle,
          nameStyle = _ref.nameStyle,
          btnStyle = _ref.btnStyle,
          designationStyle = _ref.designationStyle;
        // Glide js options
        var glideOptions = {
          type: 'carousel',
          autoplay: 4000,
          perView: 1,
        };
        return external_react_default.a.createElement(
          testimonialSection_style,
          {
            id: 'testimonial_section',
          },
          external_react_default.a.createElement(
            Container['a' /* default */],
            null,
            external_react_default.a.createElement(
              Text['a' /* default */],
              _extends(
                {
                  content: 'TESTIMONIALS',
                },
                sectionSubTitle
              )
            ),
            external_react_default.a.createElement(
              GlideCarousel['a' /* default */],
              {
                options: glideOptions,
                buttonWrapperStyle: btnWrapperStyle,
                nextButton: external_react_default.a.createElement(
                  Button['a' /* default */],
                  _extends(
                    {
                      icon: external_react_default.a.createElement('i', {
                        className: 'flaticon-right-arrow',
                      }),
                      variant: 'textButton',
                    },
                    btnStyle
                  )
                ),
                prevButton: external_react_default.a.createElement(
                  Button['a' /* default */],
                  _extends(
                    {
                      icon: external_react_default.a.createElement('i', {
                        className: 'flaticon-left-arrow',
                      }),
                      variant: 'textButton',
                    },
                    btnStyle
                  )
                ),
              },
              external_react_default.a.createElement(
                external_react_['Fragment'],
                null,
                Saas['f' /* Testimonial */].map(function(item, index) {
                  return external_react_default.a.createElement(
                    glideSlide['a' /* default */],
                    {
                      key: index,
                    },
                    external_react_default.a.createElement(
                      external_react_['Fragment'],
                      null,
                      external_react_default.a.createElement(
                        TextWrapper,
                        null,
                        external_react_default.a.createElement('i', {
                          className: 'flaticon-quote',
                        }),
                        external_react_default.a.createElement(
                          Text['a' /* default */],
                          _extends(
                            {
                              content: item.comment,
                            },
                            commentStyle
                          )
                        ),
                        external_react_default.a.createElement(
                          ClientName,
                          null,
                          external_react_default.a.createElement(
                            Heading['a' /* default */],
                            _extends(
                              {
                                content: item.name,
                              },
                              nameStyle
                            )
                          ),
                          external_react_default.a.createElement(
                            Heading['a' /* default */],
                            _extends(
                              {
                                content: item.designation,
                              },
                              designationStyle
                            )
                          )
                        )
                      ),
                      external_react_default.a.createElement(
                        ImageWrapper,
                        null,
                        external_react_default.a.createElement(
                          RoundWrapper,
                          null,
                          external_react_default.a.createElement(
                            Image['a' /* default */],
                            {
                              src: item.avatar_url,
                              alt: 'Client Image',
                            }
                          )
                        )
                      )
                    )
                  );
                })
              )
            )
          )
        );
      }; // TestimonialSection style props

      // TestimonialSection default style
      TestimonialSection_TestimonialSection.defaultProps = {
        // sub section default style
        sectionSubTitle: {
          as: 'span',
          display: 'block',
          fontSize: '14px',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: '#5268db',
          mb: '20px',
          ml: 'auto',
          mr: 'auto',
          pl: '12px',
          maxWidth: '954px',
        },
        // client comment style
        commentStyle: {
          color: '#0f2137',
          fontWeight: '400',
          fontSize: ['22px', '22px', '22px', '30px'],
          lineHeight: '1.72',
          mb: '47px',
        },
        // client name style
        nameStyle: {
          as: 'h3',
          color: '#343d48',
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '30px',
          mb: 0,
        },
        // client designation style
        designationStyle: {
          as: 'h5',
          color: 'rgba(52, 61, 72, 0.8)',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '30px',
          mb: 0,
          ml: ['0', '10px'],
        },
        // glide slider nav controls style
        btnWrapperStyle: {
          position: 'absolute',
          bottom: '62px',
          left: '12px',
        },
        // next / prev btn style
        btnStyle: {
          minWidth: 'auto',
          minHeight: 'auto',
          mr: '13px',
          fontSize: '16px',
          color: '#343d484d',
        },
      };
      /* harmony default export */ var Saas_TestimonialSection = (__webpack_exports__[
        'a'
      ] = TestimonialSection_TestimonialSection);

      /***/
    },
    /* 81 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: external "next/link"
      var link_ = __webpack_require__(9);
      var link_default = /*#__PURE__*/ __webpack_require__.n(link_);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Box/index.js
      var Box = __webpack_require__(3);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Text/index.js
      var Text = __webpack_require__(4);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Heading/index.js
      var Heading = __webpack_require__(5);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/UI/Logo/index.js + 1 modules
      var Logo = __webpack_require__(28);

      // EXTERNAL MODULE: ./components/UI/Container/index.js + 1 modules
      var Container = __webpack_require__(8);

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // EXTERNAL MODULE: ./assets/image/hosting/footer-bg.png
      var footer_bg = __webpack_require__(66);
      var footer_bg_default = /*#__PURE__*/ __webpack_require__.n(footer_bg);

      // CONCATENATED MODULE: ./containers/Saas/Footer/footer.style.js

      var FooterWrapper = external_styled_components_default.a.footer.withConfig(
        {
          displayName: 'footerstyle__FooterWrapper',
          componentId: 'iwpnlt-0',
        }
      )(
        [
          "position:relative;background-color:#f9fbfd;overflow:hidden;.disclamier{margin-left:150px;}background:linear-gradient(to bottom,#f7f8fd 0%,#fafbff 100%);@media (min-width:576px){padding-top:130px;&:before{content:'';position:absolute;width:104%;padding-bottom:104%;border-top-right-radius:11%;top:14%;left:0;pointer-events:none;background-color:#fff;transform:rotate(-6deg);@media (max-width:767px){padding-bottom:150%;}}}.footer_container{background-repeat:no-repeat;background-position:center 50px;padding-top:80px;padding-bottom:80px;position:relative;@media (min-width:576px){background-image:url(",
          ');}@media (max-width:990px){padding-bottom:20px;}}',
        ],
        footer_bg_default.a
      );
      var List = external_styled_components_default.a.ul.withConfig({
        displayName: 'footerstyle__List',
        componentId: 'iwpnlt-1',
      })(['']);
      var ListItem = external_styled_components_default.a.li.withConfig({
        displayName: 'footerstyle__ListItem',
        componentId: 'iwpnlt-2',
      })([
        'a{color:rgba(52,61,72,0.8);font-size:14px;line-height:36px;transition:all 0.2s ease;&:hover,&:focus{outline:0;text-decoration:none;color:#343d48;}}',
      ]);
      var ClientName = external_styled_components_default.a.div.withConfig({
        displayName: 'footerstyle__ClientName',
        componentId: 'iwpnlt-3',
      })(['display:-webkit-box;width:100%;justify-content:center;']);

      /* harmony default export */ var footer_style = FooterWrapper;
      // EXTERNAL MODULE: ./assets/image/saas/logo.png
      var logo = __webpack_require__(22);
      var logo_default = /*#__PURE__*/ __webpack_require__.n(logo);

      // EXTERNAL MODULE: ./data/Saas/index.js
      var Saas = __webpack_require__(12);

      // CONCATENATED MODULE: ./containers/Saas/Footer/index.js
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      var Footer_Footer = function Footer(_ref) {
        var row = _ref.row,
          col = _ref.col,
          colOne = _ref.colOne,
          colTwo = _ref.colTwo,
          titleStyle = _ref.titleStyle,
          logoStyle = _ref.logoStyle,
          textStyle = _ref.textStyle,
          sectionSubTitle = _ref.sectionSubTitle,
          disclamier = _ref.disclamier;
        return external_react_default.a.createElement(
          footer_style,
          null,
          external_react_default.a.createElement(
            Container['a' /* default */],
            {
              className: 'footer_container',
            },
            external_react_default.a.createElement(
              Box['a' /* default */],
              _extends(
                {
                  className: 'row',
                },
                row
              ),
              external_react_default.a.createElement(
                Box['a' /* default */],
                colOne,
                external_react_default.a.createElement(
                  Logo['a' /* default */],
                  {
                    href: '#',
                    logoSrc: logo_default.a,
                    title: 'Hosting',
                    logoStyle: logoStyle,
                  }
                ),
                external_react_default.a.createElement(
                  Text['a' /* default */],
                  _extends(
                    {
                      content: '- Trading Signals On The Go.',
                    },
                    textStyle
                  )
                )
              ),
              external_react_default.a.createElement(
                Box['a' /* default */],
                colTwo,
                Saas['c' /* Footer_Data */].map(function(widget, index) {
                  return external_react_default.a.createElement(
                    Box['a' /* default */],
                    _extends(
                      {
                        className: 'col',
                      },
                      col,
                      {
                        key: 'footer-widget-'.concat(index),
                      }
                    ),
                    external_react_default.a.createElement(
                      Heading['a' /* default */],
                      _extends(
                        {
                          content: widget.title,
                        },
                        titleStyle
                      )
                    ),
                    external_react_default.a.createElement(
                      List,
                      null,
                      widget.menuItems.map(function(item, index) {
                        return external_react_default.a.createElement(
                          ListItem,
                          {
                            key: 'footer-list-item-'.concat(index),
                          },
                          external_react_default.a.createElement(
                            link_default.a,
                            {
                              href: item.url,
                            },
                            external_react_default.a.createElement(
                              'a',
                              {
                                className: 'ListItem',
                              },
                              item.text
                            )
                          )
                        );
                      })
                    )
                  );
                })
              ),
              external_react_default.a.createElement(
                ClientName,
                null,
                external_react_default.a.createElement(
                  Text['a' /* default */],
                  _extends(
                    {
                      content: 'Disclamier:',
                    },
                    sectionSubTitle
                  )
                ),
                external_react_default.a.createElement(
                  Text['a' /* default */],
                  _extends({}, disclamier, {
                    content:
                      'Some content here.. some content here..Some content here.. some content here..',
                  })
                )
              )
            )
          )
        );
      }; // Footer style props

      // Footer default style
      Footer_Footer.defaultProps = {
        // Footer row default style
        sectionSubTitle: {
          // width: ['100%'],
          color: 'rgba(52, 61, 72, 0.8)',
          fontSize: '14px',
          textAlign: 'right',
          fontWeight: 'bold', // ml:'50px'
        },
        disclamier: {
          fontSize: '13px',
          pl: '5px', // width: ['100%'],
        },
        row: {
          flexBox: true,
          flexWrap: 'wrap',
          ml: '-15px',
          mr: '-15px',
        },
        // Footer col one style
        colOne: {
          width: [1, '35%', '35%', '23%'],
          mt: [0, '13px'],
          mb: ['30px', 0],
          pl: ['15px', 0],
          pr: ['15px', '15px', 0],
        },
        // Footer col two style
        colTwo: {
          width: ['100%', '65%', '65%', '77%'],
          flexBox: true,
          flexWrap: 'wrap',
          justifyContent: 'center',
        },
        // Footer col default style
        col: {
          width: ['100%', '50%', '50%', '25%'],
          pl: '15px',
          pr: '15px',
          mb: '30px',
        },
        // widget title default style
        titleStyle: {
          color: '#343d48',
          fontSize: '16px',
          fontWeight: '700',
          mb: '30px',
        },
        // Default logo size
        logoStyle: {
          width: '150px',
          mb: '5px',
        },
        // widget text default style
        textStyle: {
          color: '#0f2137',
          fontSize: '14px',
          mb: '10px',
          ml: '5px',
        },
      };
      /* harmony default export */ var Saas_Footer = (__webpack_exports__[
        'a'
      ] = Footer_Footer);

      /***/
    },
    /* 82 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: external "next/link"
      var link_ = __webpack_require__(9);
      var link_default = /*#__PURE__*/ __webpack_require__.n(link_);

      // EXTERNAL MODULE: external "react-reveal/Fade"
      var Fade_ = __webpack_require__(16);
      var Fade_default = /*#__PURE__*/ __webpack_require__.n(Fade_);

      // EXTERNAL MODULE: external "react-reveal/Slide"
      var Slide_ = __webpack_require__(29);
      var Slide_default = /*#__PURE__*/ __webpack_require__.n(Slide_);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Box/index.js
      var Box = __webpack_require__(3);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Text/index.js
      var Text = __webpack_require__(4);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Heading/index.js
      var Heading = __webpack_require__(5);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Button/index.js + 1 modules
      var Button = __webpack_require__(7);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Image/index.js
      var Image = __webpack_require__(10);

      // EXTERNAL MODULE: ./components/UI/Container/index.js + 1 modules
      var Container = __webpack_require__(8);

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // CONCATENATED MODULE: ./containers/Saas/TimelineSection/timeline.style.js

      var TimelineWrapper = external_styled_components_default.a.div.withConfig(
        {
          displayName: 'timelinestyle__TimelineWrapper',
          componentId: 'sc-133ix1s-0',
        }
      )(['']);
      var TimelineDot = external_styled_components_default.a.div.withConfig({
        displayName: 'timelinestyle__TimelineDot',
        componentId: 'sc-133ix1s-1',
      })([
        "width:20px;height:20px;border-radius:50%;position:absolute;top:50%;left:0;box-shadow:0px 3px 8.46px 0.54px rgba(23,65,104,0.2);z-index:1;background:#fff;transform:translateY(-50%);&:after{content:'';position:absolute;width:12px;height:12px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);background:#ebedf5;transition:0.25s ease-in-out;}@media (max-width:480px){width:16px;height:16px;&:after{width:10px;height:10px;}}",
      ]);
      var TimelineItem = external_styled_components_default.a.div.withConfig({
        displayName: 'timelinestyle__TimelineItem',
        componentId: 'sc-133ix1s-2',
      })(
        [
          'position:relative;display:flex;align-items:center;margin-bottom:90px;padding-left:50px;&:first-child{&:before{display:none;}}&:last-child{margin-bottom:0;&:after{display:none;}}&:hover{',
          "{&:after{background:#5268db;}}}&:after,&:before{content:'';position:absolute;height:calc(50% + 45px);width:2px;background:#f0f0f1;left:9px;@media (max-width:480px){left:7px;}}&:before{bottom:50%;}&:after{top:50%;}@media (max-width:990px){margin-bottom:60px;}@media (max-width:480px){padding-left:30px;}",
        ],
        TimelineDot
      );
      var TimelineIndex = external_styled_components_default.a.div.withConfig({
        displayName: 'timelinestyle__TimelineIndex',
        componentId: 'sc-133ix1s-3',
      })(['']);
      var TimelineContent = external_styled_components_default.a.div.withConfig(
        {
          displayName: 'timelinestyle__TimelineContent',
          componentId: 'sc-133ix1s-4',
        }
      )(['margin-left:30px;@media (max-width:480px){margin-left:20px;}']);
      var Hidden = external_styled_components_default.a.div.withConfig({
        displayName: 'timelinestyle__Hidden',
        componentId: 'sc-133ix1s-5',
      })(['overflow:hidden;']);
      // EXTERNAL MODULE: ./data/Saas/index.js
      var Saas = __webpack_require__(12);

      // EXTERNAL MODULE: ./assets/image/saas/illustration.png
      var illustration = __webpack_require__(70);
      var illustration_default = /*#__PURE__*/ __webpack_require__.n(
        illustration
      );

      // CONCATENATED MODULE: ./containers/Saas/TimelineSection/index.js
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      var TimelineSection_TimelineSection = function TimelineSection(_ref) {
        var sectionWrapper = _ref.sectionWrapper,
          sectionHeader = _ref.sectionHeader,
          sectionTitle = _ref.sectionTitle,
          sectionSubTitle = _ref.sectionSubTitle,
          row = _ref.row,
          col = _ref.col,
          button = _ref.button,
          textArea = _ref.textArea,
          imageArea = _ref.imageArea,
          imageTwo = _ref.imageTwo,
          buttonWrapper = _ref.buttonWrapper,
          indexStyle = _ref.indexStyle,
          timelineTitle = _ref.timelineTitle,
          timelineDescription = _ref.timelineDescription;
        return external_react_default.a.createElement(
          Box['a' /* default */],
          sectionWrapper,
          external_react_default.a.createElement(
            Container['a' /* default */],
            null,
            external_react_default.a.createElement(
              Box['a' /* default */],
              sectionHeader,
              external_react_default.a.createElement(
                Text['a' /* default */],
                _extends({}, sectionSubTitle, {
                  content: 'SIGNALANT',
                })
              ),
              external_react_default.a.createElement(
                Heading['a' /* default */],
                _extends({}, sectionTitle, {
                  content: 'Overview work flow of signalant',
                })
              )
            ),
            external_react_default.a.createElement(
              Box['a' /* default */],
              row,
              external_react_default.a.createElement(
                Box['a' /* default */],
                _extends({}, col, imageArea),
                external_react_default.a.createElement(
                  Fade_default.a,
                  {
                    bottom: true,
                  },
                  external_react_default.a.createElement(
                    Image['a' /* default */],
                    _extends({}, imageTwo, {
                      src: illustration_default.a,
                      alt: 'Illustration',
                    })
                  )
                )
              ),
              external_react_default.a.createElement(
                Box['a' /* default */],
                _extends({}, col, textArea),
                external_react_default.a.createElement(
                  TimelineWrapper,
                  null,
                  Saas['g' /* Timeline */].map(function(item, index) {
                    return external_react_default.a.createElement(
                      TimelineItem,
                      {
                        key: 'timeline-item-'.concat(index),
                      },
                      external_react_default.a.createElement(
                        TimelineIndex,
                        null,
                        external_react_default.a.createElement(
                          Hidden,
                          null,
                          external_react_default.a.createElement(
                            Slide_default.a,
                            {
                              bottom: true,
                            },
                            external_react_default.a.createElement(
                              Text['a' /* default */],
                              _extends(
                                {
                                  as: 'span',
                                  content: item.index || '0'.concat(index + 1),
                                },
                                indexStyle
                              )
                            )
                          )
                        )
                      ),
                      external_react_default.a.createElement(
                        TimelineContent,
                        null,
                        external_react_default.a.createElement(
                          Hidden,
                          null,
                          external_react_default.a.createElement(
                            Slide_default.a,
                            {
                              bottom: true,
                              delay: 100,
                            },
                            external_react_default.a.createElement(
                              Heading['a' /* default */],
                              _extends(
                                {
                                  as: 'h2',
                                  content: item.title,
                                },
                                timelineTitle
                              )
                            )
                          )
                        ),
                        external_react_default.a.createElement(
                          Hidden,
                          null,
                          external_react_default.a.createElement(
                            Slide_default.a,
                            {
                              bottom: true,
                              delay: 200,
                            },
                            external_react_default.a.createElement(
                              Text['a' /* default */],
                              _extends(
                                {
                                  content: item.description,
                                },
                                timelineDescription
                              )
                            )
                          )
                        )
                      ),
                      external_react_default.a.createElement(TimelineDot, null)
                    );
                  })
                )
              )
            ),
            external_react_default.a.createElement(
              Box['a' /* default */],
              buttonWrapper,
              external_react_default.a.createElement(
                link_default.a,
                {
                  href: '#',
                },
                external_react_default.a.createElement(
                  'a',
                  null,
                  external_react_default.a.createElement(
                    Button['a' /* default */],
                    _extends({}, button, {
                      title: 'HIRE FOR PROJECT',
                    })
                  )
                )
              )
            )
          )
        );
      };

      TimelineSection_TimelineSection.defaultProps = {
        sectionWrapper: {
          as: 'section',
          pt: ['60px', '80px', '80px', '80px'],
          pb: ['60px', '80px', '80px', '80px'],
        },
        // section header default style
        sectionHeader: {
          mb: '56px',
        },
        // sub section default style
        sectionSubTitle: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '14px',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: '#5268db',
          mb: '10px',
        },
        // section title default style
        sectionTitle: {
          textAlign: 'center',
          fontSize: ['20px', '24px'],
          fontWeight: '500',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        row: {
          flexBox: true,
          flexWrap: 'wrap',
          ml: '-15px',
          mr: '-15px',
          alignItems: 'center',
        },
        imageAreaRow: {
          flexDirection: 'row-reverse',
        },
        col: {
          pr: '15px',
          pl: '15px',
        },
        textArea: {
          width: ['100%', '100%', '55%', '50%', '55%'],
          mb: ['40px', '40px', '0', '0', '0'],
        },
        imageArea: {
          width: ['100%', '100%', '45%', '50%', '45%'],
          mb: ['30px', '40px', '40px', '0', '0'],
        },
        title: {
          fontSize: ['30px', '38px', '38px', '48px', '48px'],
          fontWeight: '300',
          color: 'headingColor',
          letterSpacing: '-0.025em',
          mb: '15px',
        },
        description: {
          fontSize: '16px',
          color: 'textColor',
          lineHeight: '1.75',
          mb: '33px',
        },
        buttonWrapper: {
          mt: ['25px', '50px'],
          flexBox: true,
          justifyContent: 'center',
        },
        button: {
          type: 'button',
          fontSize: '14px',
          fontWeight: '600',
          borderRadius: '4px',
          pl: '22px',
          pr: '22px',
          colors: 'primaryWithBg',
          height: '46px',
        },
        imageOne: {
          mb: '40px',
          ml: 'auto',
          mr: 'auto',
        },
        imageTwo: {
          ml: 'auto',
          mr: 'auto',
        },
        indexStyle: {
          fontSize: ['36px', '42px', '52px', '56px', '72px'],
          fontWeight: '300',
          color: '#eaebec',
          display: 'block',
          lineHeight: '1',
          mb: '0',
        },
        timelineTitle: {
          fontSize: ['16px', '17px', '18px', '18px', '20px'],
          fontWeight: '500',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '13px',
        },
        timelineDescription: {
          fontSize: ['14px', '15px', '15px', '15px', '16px'],
          lineHeight: '2',
          color: '#5d646d',
          mb: '0',
        },
      };
      /* harmony default export */ var Saas_TimelineSection = (__webpack_exports__[
        'a'
      ] = TimelineSection_TimelineSection);

      /***/
    },
    /* 83 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: external "next/link"
      var link_ = __webpack_require__(9);
      var link_default = /*#__PURE__*/ __webpack_require__.n(link_);

      // EXTERNAL MODULE: external "react-reveal/Fade"
      var Fade_ = __webpack_require__(16);
      var Fade_default = /*#__PURE__*/ __webpack_require__.n(Fade_);

      // EXTERNAL MODULE: external "react-reveal/Zoom"
      var Zoom_ = __webpack_require__(23);
      var Zoom_default = /*#__PURE__*/ __webpack_require__.n(Zoom_);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Box/index.js
      var Box = __webpack_require__(3);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Text/index.js
      var Text = __webpack_require__(4);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Heading/index.js
      var Heading = __webpack_require__(5);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Button/index.js + 1 modules
      var Button = __webpack_require__(7);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Card/index.js
      var Card = __webpack_require__(18);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Image/index.js
      var Image = __webpack_require__(10);

      // EXTERNAL MODULE: ./components/FeatureBlock/index.js + 1 modules
      var FeatureBlock = __webpack_require__(14);

      // EXTERNAL MODULE: ./components/UI/Container/index.js + 1 modules
      var Container = __webpack_require__(8);

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // CONCATENATED MODULE: ./containers/Saas/VisitorSectionTwo/visitor.style.js

      var VisitorSectionWrapper = external_styled_components_default.a.section.withConfig(
        {
          displayName: 'visitorstyle__VisitorSectionWrapper',
          componentId: 'i95q6j-0',
        }
      )([
        'min-height:630px;display:flex;align-items:center;margin-bottom:40px;margin-top:70px;position:relative;@media only screen and (max-width:1200px){min-height:500px;margin-bottom:45px;}@media only screen and (max-width:991px){min-height:370px;margin-bottom:40px;}@media (max-width:767px){min-height:auto;display:block;}',
      ]);
      var visitor_style_Container = external_styled_components_default.a.div.withConfig(
        {
          displayName: 'visitorstyle__Container',
          componentId: 'i95q6j-1',
        }
      )(['.containertext{margin:100px !important;}']);
      var SectionObject = external_styled_components_default.a.div.withConfig({
        displayName: 'visitorstyle__SectionObject',
        componentId: 'i95q6j-2',
      })([
        'width:90%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:flex-end;@media (max-width:767px){width:100%;position:relative;height:auto;top:auto;left:auto;}img{max-width:93%;height:auto;}.objectWrapper{margin-right:auto;position:relative;.dashboardWrapper{position:absolute;top:4vw;left:0;}}',
      ]);

      /* harmony default export */ var visitor_style = VisitorSectionWrapper;
      // EXTERNAL MODULE: ./assets/image/saas/saasvisitor1.png
      var saasvisitor1 = __webpack_require__(24);
      var saasvisitor1_default = /*#__PURE__*/ __webpack_require__.n(
        saasvisitor1
      );

      // EXTERNAL MODULE: ./assets/image/saas/visitor_bg.png
      var visitor_bg = __webpack_require__(25);
      var visitor_bg_default = /*#__PURE__*/ __webpack_require__.n(visitor_bg);

      // CONCATENATED MODULE: ./containers/Saas/VisitorSectionTwo/index.js
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      var VisitorSectionTwo_VisitorSectionTwo = function VisitorSectionTwo(
        _ref
      ) {
        var title = _ref.title,
          description = _ref.description,
          textArea = _ref.textArea,
          imageWrapper = _ref.imageWrapper,
          btnStyle = _ref.btnStyle;
        return external_react_default.a.createElement(
          visitor_style,
          {
            id: 'visitorSection',
          },
          external_react_default.a.createElement(
            Container['a' /* default */],
            null,
            external_react_default.a.createElement(
              Box['a' /* default */],
              _extends(
                {
                  className: 'containertext',
                },
                textArea
              ),
              external_react_default.a.createElement(
                FeatureBlock['a' /* default */],
                {
                  title: external_react_default.a.createElement(
                    Heading['a' /* default */],
                    _extends(
                      {
                        content: 'Backtest the strategies instantly',
                      },
                      title
                    )
                  ),
                  description: external_react_default.a.createElement(
                    Text['a' /* default */],
                    _extends(
                      {
                        content:
                          'Its not only about creating strategies, you can backtest with about 20 currency pairs and make you confident winning move.',
                      },
                      description
                    )
                  ),
                  button: external_react_default.a.createElement(
                    link_default.a,
                    {
                      href: '#',
                    },
                    external_react_default.a.createElement(
                      'a',
                      null,
                      external_react_default.a.createElement(
                        Button['a' /* default */],
                        _extends(
                          {
                            title: 'Backtest Strategy',
                          },
                          btnStyle
                        )
                      )
                    )
                  ),
                }
              )
            )
          ),
          external_react_default.a.createElement(
            SectionObject,
            null,
            external_react_default.a.createElement(
              Card['a' /* default */],
              _extends(
                {
                  className: 'objectWrapper',
                },
                imageWrapper
              ),
              external_react_default.a.createElement(
                Zoom_default.a,
                null,
                external_react_default.a.createElement(
                  Image['a' /* default */],
                  {
                    src: visitor_bg_default.a,
                    alt: 'BgImage',
                  }
                )
              ),
              external_react_default.a.createElement(
                Card['a' /* default */],
                _extends(
                  {
                    className: 'dashboardWrapper',
                  },
                  imageWrapper
                ),
                external_react_default.a.createElement(
                  Fade_default.a,
                  {
                    left: true,
                  },
                  external_react_default.a.createElement(
                    Image['a' /* default */],
                    {
                      src: saasvisitor1_default.a,
                      alt: 'VisitorDashboard1',
                    }
                  )
                )
              )
            )
          )
        );
      };

      VisitorSectionTwo_VisitorSectionTwo.defaultProps = {
        textArea: {
          width: ['100%', '100%', '45%'],
          ml: [0, 0, '20%'],
        },
        imageWrapper: {
          boxShadow: 'none',
        },
        title: {
          fontSize: ['20px', '26px', '26px', '36px', '48px'],
          fontWeight: '400',
          color: '#0f2137',
          letterSpacing: '-0.010em',
          mb: '20px',
          maxWidth: ['100%', '100%', '100%', '440px', '440px'],
          lineHeight: '1.5',
        },
        description: {
          fontSize: '16px',
          color: '#343d48cc',
          lineHeight: '1.75',
          mb: '33px',
          maxWidth: ['100%', '100%', '100%', '440px', '440px'],
        },
        btnStyle: {
          minWidth: '156px',
          fontSize: '14px',
          fontWeight: '500',
          color: '#fff',
          borderRadius: '4px',
          pl: '22px',
          pr: '22px',
          colors: 'primaryWithBg',
        },
      };
      /* harmony default export */ var Saas_VisitorSectionTwo = (__webpack_exports__[
        'a'
      ] = VisitorSectionTwo_VisitorSectionTwo);

      /***/
    },
    ,
    /* 84 */ /* 85 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        0
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        6
      );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        prop_types__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        3
      );
      /* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        4
      );
      /* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        5
      );
      /* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        7
      );
      /* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        10
      );
      /* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        8
      );
      /* harmony import */ var _saas_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        19
      );
      /* harmony import */ var _assets_image_saas_vendor_logos_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        69
      );
      /* harmony import */ var _assets_image_saas_vendor_logos_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_image_saas_vendor_logos_png__WEBPACK_IMPORTED_MODULE_9__
      );
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      var TrialSection = function TrialSection(_ref) {
        var sectionWrapper = _ref.sectionWrapper,
          row = _ref.row,
          title = _ref.title,
          description = _ref.description,
          textArea = _ref.textArea,
          imageArea = _ref.imageArea,
          ImageOne = _ref.ImageOne,
          btnStyle = _ref.btnStyle,
          outlineBtnStyle = _ref.outlineBtnStyle;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_2__[
            /* default */ 'a'
          ],
          sectionWrapper,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_UI_Container__WEBPACK_IMPORTED_MODULE_7__[
              /* default */ 'a'
            ],
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_2__[
                /* default */ 'a'
              ],
              row,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_2__[
                  /* default */ 'a'
                ],
                imageArea,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__[
                    /* default */ 'a'
                  ],
                  _extends({}, ImageOne, {
                    src:
                      _assets_image_saas_vendor_logos_png__WEBPACK_IMPORTED_MODULE_9___default.a,
                    alt: 'VendorLogos',
                  })
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_2__[
                  /* default */ 'a'
                ],
                textArea,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__[
                    /* default */ 'a'
                  ],
                  _extends({}, title, {
                    content: 'Start your 30 days free trials today!',
                  })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__[
                    /* default */ 'a'
                  ],
                  _extends({}, description, {
                    content:
                      'We have provided 30 Days Money Back Guarantee in case of dissatisfaction with our product. We care for our customers and their values.',
                  })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _saas_style__WEBPACK_IMPORTED_MODULE_8__[
                    /* ButtonGroup */ 'a'
                  ],
                  {
                    className: 'button_group',
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_5__[
                      /* default */ 'a'
                    ],
                    _extends(
                      {
                        title: 'WORK HISTORY',
                      },
                      btnStyle
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_5__[
                      /* default */ 'a'
                    ],
                    _extends(
                      {
                        title: 'Login with Email',
                        variant: 'textButton',
                      },
                      outlineBtnStyle
                    )
                  )
                )
              )
            )
          )
        );
      };

      TrialSection.defaultProps = {
        sectionWrapper: {
          as: 'section',
          className: 'trial-section',
          pt: ['20px', '40px', '60px', '80px'],
          pb: ['0px', '0px', '0px', '80px'],
        },
        row: {
          flexBox: true,
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignItems: 'center',
        },
        textArea: {
          width: ['100%', '100%', '80%', '43%'],
        },
        imageArea: {
          width: ['100%', '100%', '43%'],
          mb: ['35px', '35px', '40px', '40px'],
        },
        title: {
          fontSize: ['32px', '32px', '36px', '42px', '48px'],
          fontWeight: '400',
          color: 'headingColor',
          letterSpacing: '-0.025em',
          mb: '28px',
          textAlign: 'center',
          lineHeight: '1.25',
        },
        description: {
          fontSize: ['15px', '15px', '16px', '16px', '16px'],
          color: 'textColor',
          lineHeight: '2.1',
          textAlign: 'center',
          mb: ['35px', '35px', '40px', '60px'],
        },
        ImageOne: {
          ml: 'auto',
          mr: 'auto',
        },
        btnStyle: {
          minWidth: '156px',
          fontSize: '14px',
          fontWeight: '500',
          colors: 'primaryWithBg',
        },
        outlineBtnStyle: {
          minWidth: '156px',
          fontSize: '14px',
          fontWeight: '500',
          color: '#0f2137',
        },
      };
      /* harmony default export */ __webpack_exports__['a'] = TrialSection;

      /***/
    },
    /* 86 */
    /***/ function(module, exports) {
      /***/
    },
    /* 87 */
    /***/ function(module, exports) {
      /***/
    },
    /* 88 */
    /***/ function(module, exports) {
      /***/
    },
    /* 89 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "prop-types"
      var external_prop_types_ = __webpack_require__(6);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Box/index.js
      var Box = __webpack_require__(3);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Text/index.js
      var Text = __webpack_require__(4);

      // EXTERNAL MODULE: /home/ubuntu/Documents/akhlaq_fiverr/webdez/signalant_landing_page_working/node_modules/reusecore/src/elements/Heading/index.js
      var Heading = __webpack_require__(5);

      // EXTERNAL MODULE: ./components/FeatureBlock/index.js + 1 modules
      var FeatureBlock = __webpack_require__(14);

      // EXTERNAL MODULE: ./data/Saas/index.js
      var Saas = __webpack_require__(12);

      // EXTERNAL MODULE: ./components/UI/Container/index.js + 1 modules
      var Container = __webpack_require__(8);

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // CONCATENATED MODULE: ./containers/Saas/FeatureSection/featureSection.style.js

      var FeatureSectionWrapper = external_styled_components_default.a.section.withConfig(
        {
          displayName: 'featureSectionstyle__FeatureSectionWrapper',
          componentId: 'sc-136n006-0',
        }
      )(
        [
          "padding:80px 0 180px 0;@media (max-width:990px){padding:60px 0 60px 0;}@media (max-width:767px){padding:60px 0 30px 0;}.feature__block{position:relative;height:100%;transition:box-shadow 0.3s ease;@media (max-width:500px){padding:30px 0;}.icon__wrapper{position:relative;border-bottom-left-radius:6px;overflow:hidden;background:linear-gradient( -60deg,rgba(241,39,17,0.7),rgba(245,175,25,0.7) );.flaticon-flask{&:before{margin-left:8px;}}&:before,&:after{content:'';width:28px;height:calc(100% + 30px);position:absolute;}&:before{transform:rotate(45deg);background-color:rgba(255,255,255,0.15);}&:after{transform:rotate(-45deg);background-color:rgba(0,0,0,0.05);}}&:hover{",
          '}}.row{> .col{&:nth-child(-n + 3){}&:nth-child(3n + 3),&:last-child{}&:nth-child(1){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(236,0,140,0.75),rgba(255,103,103,0.75) );}}}&:nth-child(2){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(110,72,170,0.75),rgba(192,91,210,0.75) );}}}&:nth-child(3){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(241,39,17,0.7),rgba(245,175,25,0.7) );}}}&:nth-child(4){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(47,128,237,0.75),rgba(86,204,242,0.75) );}}}&:nth-child(5){.feature__block{.icon__wrapper{background:linear-gradient( -60deg,rgba(50,207,167,0.75),rgba(150,201,61,0.75) );}}}}}',
        ],
        ''
        /* box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2); */
      );
      /* harmony default export */ var featureSection_style = FeatureSectionWrapper;
      // CONCATENATED MODULE: ./containers/Saas/FeatureSection/index.js
      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      var FeatureSection_FeatureSection = function FeatureSection(_ref) {
        var row = _ref.row,
          col = _ref.col,
          sectionHeader = _ref.sectionHeader,
          sectionTitle = _ref.sectionTitle,
          sectionSubTitle = _ref.sectionSubTitle,
          featureTitle = _ref.featureTitle,
          featureDescription = _ref.featureDescription,
          iconStyle = _ref.iconStyle,
          contentStyle = _ref.contentStyle,
          blockWrapperStyle = _ref.blockWrapperStyle;
        return external_react_default.a.createElement(
          featureSection_style,
          {
            id: 'service_section',
          },
          external_react_default.a.createElement(
            Container['a' /* default */],
            null,
            external_react_default.a.createElement(
              Box['a' /* default */],
              sectionHeader,
              external_react_default.a.createElement(
                Text['a' /* default */],
                _extends(
                  {
                    content: 'OUR SERVICES',
                  },
                  sectionSubTitle
                )
              ),
              external_react_default.a.createElement(
                Heading['a' /* default */],
                _extends(
                  {
                    content: 'Featured Service that We Provide',
                  },
                  sectionTitle
                )
              )
            ),
            external_react_default.a.createElement(
              Box['a' /* default */],
              _extends(
                {
                  className: 'row',
                },
                row
              ),
              Saas['b' /* Features */].map(function(feature, index) {
                return external_react_default.a.createElement(
                  Box['a' /* default */],
                  _extends(
                    {
                      className: 'col',
                    },
                    col,
                    {
                      key: index,
                    }
                  ),
                  external_react_default.a.createElement(
                    FeatureBlock['a' /* default */],
                    {
                      icon: external_react_default.a.createElement('i', {
                        className: feature.icon,
                      }),
                      wrapperStyle: blockWrapperStyle,
                      iconStyle: iconStyle,
                      contentStyle: contentStyle,
                      title: external_react_default.a.createElement(
                        Heading['a' /* default */],
                        _extends(
                          {
                            content: feature.title,
                          },
                          featureTitle
                        )
                      ),
                      description: external_react_default.a.createElement(
                        Text['a' /* default */],
                        _extends(
                          {
                            content: feature.description,
                          },
                          featureDescription
                        )
                      ),
                      className: 'saasFeature',
                    }
                  )
                );
              })
            )
          )
        );
      }; // FeatureSection style props

      // FeatureSection default style
      FeatureSection_FeatureSection.defaultProps = {
        // section header default style
        sectionHeader: {
          mb: ['40px', '40px', '40px', '80px'],
        },
        // sub section default style
        sectionSubTitle: {
          as: 'span',
          display: 'block',
          textAlign: 'center',
          fontSize: '14px',
          letterSpacing: '0.15em',
          fontWeight: '700',
          color: '#5268db',
          mb: '10px',
        },
        // section title default style
        sectionTitle: {
          textAlign: 'center',
          fontSize: ['20px', '24px'],
          fontWeight: '500',
          color: '#0f2137',
          letterSpacing: '-0.025em',
          mb: '0',
        },
        // feature row default style
        row: {
          flexBox: true,
          flexWrap: 'wrap',
        },
        // feature col default style
        col: {
          width: [1, 1 / 2, 1 / 3, 1 / 3],
        },
        // feature block wrapper default style
        blockWrapperStyle: {
          p: ['30px', '20px', '20px', '20px'],
        },
        // feature icon default style
        iconStyle: {
          width: ['70px', '75px', '75px', '84px'],
          height: ['70px', '75px', '75px', '84px'],
          borderRadius: '50%',
          bg: '#93d26e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: ['32px', '36px'],
          color: '#ffffff',
          overflow: 'hidden',
          mb: ['20px', '20px', '20px', '30px'],
          borderBottomLeftRadius: '50%',
        },
        // feature content default style
        contentStyle: {
          textAlign: 'left',
        },
        // feature title default style
        featureTitle: {
          fontSize: ['18px', '20px'],
          fontWeight: '400',
          color: '#0f2137',
          lineHeight: '1.5',
          mb: ['10px', '10px', '10px', '20px'],
          letterSpacing: '-0.020em',
        },
        // feature description default style
        featureDescription: {
          fontSize: '15px',
          lineHeight: '1.75',
          color: '#343d4ccc',
        },
      };
      /* harmony default export */ var Saas_FeatureSection = FeatureSection_FeatureSection;

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    /* 90 */ /* 91 */ /* 92 */ /* 93 */ /* 94 */ /* 95 */ /* 96 */ /* 97 */ /* 98 */ /* 99 */ /* 100 */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(101);

      /***/
    },
    /* 101 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        0
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        30
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        next_head__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        42
      );
      /* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        react_stickynode__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        2
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ var _theme_saas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        77
      );
      /* harmony import */ var _assets_css_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        31
      );
      /* harmony import */ var _containers_Saas_saas_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        19
      );
      /* harmony import */ var _containers_Saas_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        73
      );
      /* harmony import */ var _containers_Saas_BannerSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        76
      );
      /* harmony import */ var _containers_Saas_FeatureSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        89
      );
      /* harmony import */ var _containers_Saas_VisitorSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        78
      );
      /* harmony import */ var _containers_Saas_VisitorSectionTwo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        83
      );
      /* harmony import */ var _containers_Saas_ServiceSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        79
      );
      /* harmony import */ var _containers_Saas_FaqSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        74
      );
      /* harmony import */ var _containers_Saas_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        81
      );
      /* harmony import */ var _containers_Saas_PricingSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
        75
      );
      /* harmony import */ var _containers_Saas_TrialSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
        85
      );
      /* harmony import */ var _containers_Saas_TimelineSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
        82
      );
      /* harmony import */ var _containers_Saas_TestimonialSection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
        80
      );
      /* harmony import */ var _containers_Saas_PartnerSection__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
        71
      );
      /* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
        15
      );

      // This page not using instead of this code using index.js

      /* harmony default export */ __webpack_exports__['default'] = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          styled_components__WEBPACK_IMPORTED_MODULE_3__['ThemeProvider'],
          {
            theme:
              _theme_saas__WEBPACK_IMPORTED_MODULE_4__[/* saasTheme */ 'a'],
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0__['Fragment'],
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              next_head__WEBPACK_IMPORTED_MODULE_1___default.a,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'title',
                null,
                'Signalant - Trading Signals On The Go.'
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'meta',
                {
                  name: 'Description',
                  content: 'React next landing page',
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'meta',
                {
                  name: 'theme-color',
                  content: '#ec5555',
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'link',
                {
                  rel: 'stylesheet',
                  href: '/static/css/flaticon.css',
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'link',
                {
                  href:
                    'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i',
                  rel: 'stylesheet',
                }
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _assets_css_style__WEBPACK_IMPORTED_MODULE_5__[
                /* ResetCSS */ 'a'
              ],
              null
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _containers_Saas_saas_style__WEBPACK_IMPORTED_MODULE_6__[
                /* GlobalStyle */ 'c'
              ],
              null
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _containers_Saas_saas_style__WEBPACK_IMPORTED_MODULE_6__[
                /* ContentWrapper */ 'b'
              ],
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                  top: 0,
                  innerZ: 9999,
                  activeClass: 'sticky-nav-active',
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_20__[
                    /* DrawerProvider */ 'b'
                  ],
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _containers_Saas_Navbar__WEBPACK_IMPORTED_MODULE_7__[
                      /* default */ 'a'
                    ],
                    null
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _containers_Saas_BannerSection__WEBPACK_IMPORTED_MODULE_8__[
                  /* default */ 'a'
                ],
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _containers_Saas_ServiceSection__WEBPACK_IMPORTED_MODULE_12__[
                  /* default */ 'a'
                ],
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _containers_Saas_VisitorSection__WEBPACK_IMPORTED_MODULE_10__[
                  /* default */ 'a'
                ],
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _containers_Saas_VisitorSectionTwo__WEBPACK_IMPORTED_MODULE_11__[
                  /* default */ 'a'
                ],
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _containers_Saas_PricingSection__WEBPACK_IMPORTED_MODULE_15__[
                  /* default */ 'a'
                ],
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _containers_Saas_TestimonialSection__WEBPACK_IMPORTED_MODULE_18__[
                  /* default */ 'a'
                ],
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _containers_Saas_PartnerSection__WEBPACK_IMPORTED_MODULE_19__[
                  /* default */ 'a'
                ],
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _containers_Saas_TimelineSection__WEBPACK_IMPORTED_MODULE_17__[
                  /* default */ 'a'
                ],
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _containers_Saas_FaqSection__WEBPACK_IMPORTED_MODULE_13__[
                  /* default */ 'a'
                ],
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _containers_Saas_TrialSection__WEBPACK_IMPORTED_MODULE_16__[
                  /* default */ 'a'
                ],
                null
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _containers_Saas_Footer__WEBPACK_IMPORTED_MODULE_14__[
                  /* default */ 'a'
                ],
                null
              )
            )
          )
        );
      };

      /***/
    },
    /******/
  ]
);
