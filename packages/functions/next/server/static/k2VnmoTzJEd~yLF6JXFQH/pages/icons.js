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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 97));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ 0: /***/ function(module, exports) {
      module.exports = require('react');

      /***/
    },

    /***/ 1: /***/ function(module, exports) {
      module.exports = require('styled-system');

      /***/
    },

    /***/ 105: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "next/head"
      var head_ = __webpack_require__(30);
      var head_default = /*#__PURE__*/ __webpack_require__.n(head_);

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(2);

      // CONCATENATED MODULE: ./theme/agency/colors.js
      var colors = {
        transparent: 'transparent',
        labelColor: '#767676',
        lightBorder: '#f1f4f6',
        inactiveField: '#f2f2f2',
        inactiveButton: '#b7dbdd',
        inactiveIcon: '#EBEBEB',
        primaryHover: '#006b70',
        secondary: '#ff5b60',
        secondaryHover: '#FF282F',
        yellow: '#fdb32a',
        yellowHover: '#F29E02',
        borderColor: '#dadada',
        black: '#000000',
        white: '#ffffff',
        primary: '#10ac84',
        headingColor: '#0f2137',
        quoteText: '#343d48',
        textColor: 'rgba(52, 61, 72, 0.8)',
        linkColor: '#2b9eff',
      };
      /* harmony default export */ var agency_colors = colors;
      // CONCATENATED MODULE: ./theme/agency/index.js

      var agencyTheme = {
        breakpoints: [480, 768, 990, 1220],
        space: [0, 5, 10, 15, 20, 25, 30, 40, 56, 71, 91],
        fontSizes: [10, 12, 14, 15, 16, 20, 24, 36, 48, 55, 60, 81],
        fontWeights: [300, 400, 500, 600, 700, 800, 900],
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
        fonts: {
          roboto: '"Roboto", sans-serif',
        },
        borders: [0, '1px solid', '2px solid', '4px solid'],
        radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, '50%'],
        colors: agency_colors,
        colorStyles: {
          primary: {
            color: agency_colors.primary,
            borderColor: agency_colors.primary,
            '&:hover': {
              color: agency_colors.primaryHover,
              borderColor: agency_colors.primaryHover,
            },
          },
          secondary: {
            color: agency_colors.secondary,
            borderColor: agency_colors.secondary,
            '&:hover': {
              color: agency_colors.secondaryHover,
              borderColor: agency_colors.secondaryHover,
            },
          },
          warning: {
            color: agency_colors.yellow,
            borderColor: agency_colors.yellow,
            '&:hover': {
              color: agency_colors.yellowHover,
              borderColor: agency_colors.yellowHover,
            },
          },
          error: {
            color: agency_colors.secondaryHover,
            borderColor: agency_colors.secondaryHover,
            '&:hover': {
              color: agency_colors.secondary,
              borderColor: agency_colors.secondary,
            },
          },
          primaryWithBg: {
            color: agency_colors.white,
            backgroundColor: agency_colors.primary,
            borderColor: agency_colors.primary,
            '&:hover': {
              backgroundColor: agency_colors.primaryHover,
              borderColor: agency_colors.primaryHover,
            },
          },
          secondaryWithBg: {
            color: agency_colors.white,
            backgroundColor: agency_colors.secondary,
            borderColor: agency_colors.secondary,
            '&:hover': {
              backgroundColor: agency_colors.secondaryHover,
              borderColor: agency_colors.secondaryHover,
            },
          },
          warningWithBg: {
            color: agency_colors.white,
            backgroundColor: agency_colors.yellow,
            borderColor: agency_colors.yellow,
            '&:hover': {
              backgroundColor: agency_colors.yellowHover,
              borderColor: agency_colors.yellowHover,
            },
          },
          errorWithBg: {
            color: agency_colors.white,
            backgroundColor: agency_colors.secondaryHover,
            borderColor: agency_colors.secondaryHover,
            '&:hover': {
              backgroundColor: agency_colors.secondary,
              borderColor: agency_colors.secondary,
            },
          },
        },
        buttonStyles: {
          textButton: {
            border: 0,
            color: agency_colors.primary,
            padding: 0,
            height: 'auto',
            backgroundColor: ''.concat(agency_colors.transparent),
          },
          outlined: {
            borderWidth: '1px',
            borderStyle: 'solid',
            backgroundColor: agency_colors.transparent,
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
        },
      };
      // EXTERNAL MODULE: ./assets/css/style.js
      var style = __webpack_require__(31);

      // CONCATENATED MODULE: ./pages/icons.js

      /* harmony default export */ var icons = (__webpack_exports__[
        'default'
      ] = function() {
        return external_react_default.a.createElement(
          external_styled_components_['ThemeProvider'],
          {
            theme: agencyTheme,
          },
          external_react_default.a.createElement(
            external_react_['Fragment'],
            null,
            external_react_default.a.createElement(
              head_default.a,
              null,
              external_react_default.a.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              }),
              external_react_default.a.createElement('meta', {
                name: 'theme-color',
                content: '#10ac84',
              }),
              external_react_default.a.createElement('link', {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: '/static/image/favicon.png',
              }),
              external_react_default.a.createElement('link', {
                rel: 'stylesheet',
                href: '/static/css/icon-example-page.css',
              }),
              external_react_default.a.createElement('link', {
                rel: 'stylesheet',
                href: '/static/css/flaticon.css',
              })
            ),
            external_react_default.a.createElement(
              style['a' /* ResetCSS */],
              null
            ),
            external_react_default.a.createElement(
              'div',
              null,
              external_react_default.a.createElement(
                'header',
                null,
                external_react_default.a.createElement(
                  'a',
                  {
                    href: 'https://www.flaticon.com',
                    target: '_blank',
                    className: 'logo',
                  },
                  external_react_default.a.createElement(
                    'svg',
                    {
                      version: '1.1',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 560.875 102.036',
                    },
                    external_react_default.a.createElement('defs', null),
                    external_react_default.a.createElement(
                      'g',
                      null,
                      external_react_default.a.createElement(
                        'g',
                        {
                          className: 'letters',
                        },
                        external_react_default.a.createElement('path', {
                          fill: '#ffffff',
                          d:
                            'M141.596,29.675c0-3.777,2.985-6.767,6.764-6.767h34.438c3.426,0,6.15,2.728,6.15,6.15\r c0,3.43-2.724,6.149-6.15,6.149h-27.674v13.091h23.719c3.429,0,6.151,2.724,6.151,6.15c0,3.43-2.723,6.149-6.151,6.149h-23.719\r v17.574c0,3.773-2.986,6.761-6.764,6.761c-3.779,0-6.764-2.989-6.764-6.761V29.675z',
                        }),
                        external_react_default.a.createElement('path', {
                          fill: '#ffffff',
                          d:
                            'M193.844,29.149c0-3.781,2.985-6.767,6.764-6.767c3.776,0,6.763,2.985,6.763,6.767v42.957h25.039\r c3.426,0,6.149,2.726,6.149,6.153c0,3.425-2.723,6.15-6.149,6.15h-31.802c-3.779,0-6.764-2.986-6.764-6.768V29.149z',
                        }),
                        external_react_default.a.createElement('path', {
                          fill: '#ffffff',
                          d:
                            'M241.891,75.71l21.438-48.407c1.492-3.341,4.215-5.357,7.906-5.357h0.792\r c3.686,0,6.323,2.017,7.815,5.357l21.439,48.407c0.436,0.967,0.701,1.845,0.701,2.723c0,3.602-2.809,6.501-6.414,6.501\r c-3.161,0-5.269-1.845-6.499-4.655l-4.132-9.661h-27.059l-4.301,10.102c-1.144,2.631-3.426,4.214-6.237,4.214\r c-3.517,0-6.24-2.81-6.24-6.325C241.1,77.64,241.451,76.677,241.891,75.71z M279.932,58.666l-8.521-20.297l-8.526,20.297H279.932\r z',
                        }),
                        external_react_default.a.createElement('path', {
                          fill: '#ffffff',
                          d:
                            'M314.864,35.387H301.86c-3.429,0-6.239-2.813-6.239-6.238c0-3.429,2.811-6.24,6.239-6.24h39.533\r c3.426,0,6.237,2.811,6.237,6.24c0,3.425-2.811,6.238-6.237,6.238h-13.001v42.785c0,3.773-2.99,6.761-6.764,6.761\r c-3.779,0-6.764-2.989-6.764-6.761V35.387z',
                        }),
                        external_react_default.a.createElement('path', {
                          fill: '#A9FD00',
                          d:
                            'M352.615,29.149c0-3.781,2.985-6.767,6.767-6.767c3.774,0,6.761,2.985,6.761,6.767v49.024\r c0,3.773-2.987,6.761-6.761,6.761c-3.781,0-6.767-2.989-6.767-6.761V29.149z',
                        }),
                        external_react_default.a.createElement('path', {
                          fill: '#A9FD00',
                          d:
                            'M374.132,53.836v-0.179c0-17.481,13.178-31.801,32.065-31.801c9.22,0,15.459,2.458,20.557,6.238\r c1.402,1.054,2.637,2.985,2.637,5.357c0,3.692-2.985,6.59-6.681,6.59c-1.845,0-3.071-0.702-4.044-1.319\r c-3.776-2.813-7.729-4.393-12.562-4.393c-10.364,0-17.831,8.611-17.831,19.154v0.173c0,10.542,7.291,19.329,17.831,19.329\r c5.715,0,9.492-1.756,13.359-4.834c1.049-0.874,2.458-1.491,4.039-1.491c3.429,0,6.325,2.813,6.325,6.236\r c0,2.106-1.056,3.78-2.282,4.834c-5.539,4.834-12.036,7.733-21.878,7.733C387.572,85.464,374.132,71.493,374.132,53.836z',
                        }),
                        external_react_default.a.createElement('path', {
                          fill: '#A9FD00',
                          d:
                            'M433.009,53.836v-0.179c0-17.481,13.79-31.801,32.766-31.801c18.981,0,32.592,14.143,32.592,31.628v0.173\r c0,17.483-13.785,31.807-32.769,31.807C446.625,85.464,433.009,71.32,433.009,53.836z M484.224,53.836v-0.179\r c0-10.539-7.725-19.326-18.626-19.326c-10.893,0-18.449,8.611-18.449,19.154v0.173c0,10.542,7.73,19.329,18.626,19.329\r C476.676,72.986,484.224,64.378,484.224,53.836z',
                        }),
                        external_react_default.a.createElement('path', {
                          fill: '#A9FD00',
                          d:
                            'M506.233,29.321c0-3.774,2.99-6.763,6.767-6.763h1.401c3.252,0,5.183,1.583,7.029,3.953l26.093,34.265\r V29.059c0-3.692,2.99-6.677,6.681-6.677c3.683,0,6.671,2.985,6.671,6.677v48.934c0,3.78-2.987,6.765-6.764,6.765h-0.436\r c-3.257,0-5.188-1.581-7.034-3.953l-27.056-35.492v32.944c0,3.687-2.985,6.676-6.678,6.676c-3.683,0-6.673-2.989-6.673-6.676\r V29.321z',
                        })
                      ),
                      external_react_default.a.createElement(
                        'g',
                        {
                          className: 'insignia',
                        },
                        external_react_default.a.createElement('path', {
                          fill: '#ffffff',
                          d:
                            'M48.372,56.137h12.517l11.156-18.537H37.186L25.688,18.539h57.825L94.668,0H9.271\r C5.925,0,2.842,1.801,1.198,4.716c-1.644,2.907-1.593,6.482,0.134,9.343l50.38,83.501c1.678,2.781,4.689,4.476,7.938,4.476\r c3.246,0,6.257-1.695,7.935-4.476l2.898-4.804L48.372,56.137z',
                        }),
                        external_react_default.a.createElement(
                          'g',
                          {
                            className: 'i',
                          },
                          external_react_default.a.createElement('path', {
                            fill: '#A9FD00',
                            d:
                              'M93.575,18.539h0.031v0.004l21.652,0.004l2.705-4.488c1.727-2.861,1.778-6.436,0.133-9.343\r C116.454,1.801,113.371,0,110.026,0h-5.294L93.575,18.539z',
                          }),
                          external_react_default.a.createElement('polygon', {
                            fill: '#A9FD00',
                            points:
                              '88.291,27.356 64.725,66.486 75.519,84.404 109.942,27.356',
                          })
                        )
                      )
                    )
                  )
                )
              ),
              external_react_default.a.createElement(
                'section',
                {
                  id: 'glyphs',
                },
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-flask',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-flask'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '001-flask',
                        href: 'http://www.freepik.com',
                      },
                      'Freepik'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-pencil-case',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-pencil-case'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '002-pencil-case',
                        href: 'http://www.freepik.com',
                      },
                      'Freepik'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-design-tool',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-design-tool'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '003-design-tool',
                        href: 'http://www.freepik.com',
                      },
                      'Freepik'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-startup',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-startup'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '004-startup',
                        href: 'http://www.freepik.com',
                      },
                      'Freepik'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-creative',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-creative'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '005-creative',
                        href: 'https://www.flaticon.com/authors/good-ware',
                      },
                      'Good Ware'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-project',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-project'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '006-project',
                        href: 'http://www.freepik.com',
                      },
                      'Freepik'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-magnifying-glass',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-magnifying-glass'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '007-magnifying-glass',
                        href: 'https://www.flaticon.com/authors/gregor-cresnar',
                      },
                      'Gregor Cresnar'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-user',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-user'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '008-user',
                        href: 'http://www.freepik.com',
                      },
                      'Freepik'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-quote',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-quote'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '009-quote',
                        href: 'https://www.flaticon.com/authors/icomoon',
                      },
                      'Icomoon'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-left-arrow',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-left-arrow'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '010-left-arrow',
                        href: 'https://www.flaticon.com/authors/lyolya',
                      },
                      'Lyolya'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-right-arrow',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-right-arrow'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '011-right-arrow',
                        href: 'https://www.flaticon.com/authors/lyolya',
                      },
                      'Lyolya'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-plus-symbol',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-plus-symbol'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '012-plus-symbol',
                        href: 'https://www.flaticon.com/authors/lyolya',
                      },
                      'Lyolya'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-minus-symbol',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-minus-symbol'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '013-minus-symbol',
                        href: 'https://www.flaticon.com/authors/lyolya',
                      },
                      'Lyolya'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-trophy',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-trophy'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '014-trophy',
                        href: 'https://www.flaticon.com/authors/dinosoftlabs',
                      },
                      'DinosoftLabs'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-conversation',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-conversation'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '015-conversation',
                        href: 'http://www.freepik.com',
                      },
                      'Freepik'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-atom',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-atom'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '016-atom',
                        href: 'https://www.flaticon.com/authors/kiranshastry',
                      },
                      'Kiranshastry'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-link',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-link'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '017-link',
                        href: 'https://www.flaticon.com/authors/smashicons',
                      },
                      'Smashicons'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-battery',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-battery'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '018-battery',
                        href: 'https://www.flaticon.com/authors/smashicons',
                      },
                      'Smashicons'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-stopwatch',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-stopwatch'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '019-stopwatch',
                        href: 'https://www.flaticon.com/authors/smashicons',
                      },
                      'Smashicons'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-objective',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-objective'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '020-objective',
                        href: 'https://www.flaticon.com/authors/good-ware',
                      },
                      'Good Ware'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-facebook-logo',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-facebook-logo'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '021-facebook-logo',
                        href: 'http://www.freepik.com',
                      },
                      'Freepik'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-twitter',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-twitter'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '022-twitter',
                        href: 'https://www.flaticon.com/authors/pixel-perfect',
                      },
                      'Pixel perfect'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-instagram',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-instagram'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '023-instagram',
                        href: 'http://www.freepik.com',
                      },
                      'Freepik'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-dribble-logo',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-dribble-logo'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '024-dribble-logo',
                        href: 'https://www.flaticon.com/authors/zurb',
                      },
                      'Zurb'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-tumblr-logo',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-tumblr-logo'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '025-tumblr-logo',
                        href: 'https://www.flaticon.com/authors/dave-gandy',
                      },
                      'Dave Gandy'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-youtube',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-youtube'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '026-youtube',
                        href: 'https://www.flaticon.com/authors/pixel-perfect',
                      },
                      'Pixel perfect'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-google-plus',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-google-plus'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '027-google-plus',
                        href: 'https://www.flaticon.com/authors/hanan',
                      },
                      'Hanan'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-blockchain',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-blockchain'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '028-blockchain',
                        href: 'https://www.flaticon.com/authors/srip',
                      },
                      'srip'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-money-bag',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-money-bag'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '029-money-bag',
                        href: 'https://www.flaticon.com/authors/gregor-cresnar',
                      },
                      'Gregor Cresnar'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-wallet',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-wallet'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '030-wallet',
                        href: 'https://www.flaticon.com/authors/epiccoders',
                      },
                      'EpicCoders'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-shield',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-shield'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '031-shield',
                        href: 'http://www.freepik.com',
                      },
                      'Freepik'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-cryptocurrency',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-cryptocurrency'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '032-cryptocurrency',
                        href: 'https://www.flaticon.com/authors/srip',
                      },
                      'srip'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-blockchain-1',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-blockchain-1'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '033-blockchain-1',
                        href: 'https://www.flaticon.com/authors/nikita-golubev',
                      },
                      'Nikita Golubev'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-annonymous',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-annonymous'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '034-annonymous',
                        href: 'http://www.freepik.com',
                      },
                      'Freepik'
                    ),
                    ' '
                  )
                ),
                external_react_default.a.createElement(
                  'div',
                  {
                    className: 'glyph',
                  },
                  external_react_default.a.createElement('div', {
                    className: 'glyph-icon flaticon-group',
                  }),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'class-name',
                    },
                    '.flaticon-group'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'author-name',
                    },
                    'Author:',
                    ' ',
                    external_react_default.a.createElement(
                      'a',
                      {
                        'data-file': '035-group',
                        href: 'https://www.flaticon.com/authors/baianat',
                      },
                      'Baianat'
                    ),
                    ' '
                  )
                )
              ),
              external_react_default.a.createElement(
                'section',
                {
                  className: 'iconsuse',
                },
                external_react_default.a.createElement(
                  'div',
                  null,
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'title',
                    },
                    'Examples:'
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'image',
                    },
                    external_react_default.a.createElement(
                      'p',
                      null,
                      external_react_default.a.createElement('i', {
                        className: 'glyph-icon flaticon-flask',
                      }),
                      external_react_default.a.createElement(
                        'span',
                        null,
                        '<i class="flaticon-flask"></i>'
                      )
                    )
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'image',
                    },
                    external_react_default.a.createElement(
                      'p',
                      null,
                      external_react_default.a.createElement('i', {
                        className: 'glyph-icon flaticon-pencil-case',
                      }),
                      external_react_default.a.createElement(
                        'span',
                        null,
                        '<i class="flaticon-pencil-case"></i>'
                      )
                    )
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'image',
                    },
                    external_react_default.a.createElement(
                      'p',
                      null,
                      external_react_default.a.createElement('i', {
                        className: 'glyph-icon flaticon-design-tool',
                      }),
                      external_react_default.a.createElement(
                        'span',
                        null,
                        '<i class="flaticon-design-tool"></i>'
                      )
                    )
                  ),
                  external_react_default.a.createElement(
                    'div',
                    {
                      className: 'image',
                    },
                    external_react_default.a.createElement(
                      'p',
                      null,
                      external_react_default.a.createElement('i', {
                        className: 'glyph-icon flaticon-startup',
                      }),
                      external_react_default.a.createElement(
                        'span',
                        null,
                        '<i class="flaticon-startup"></i>'
                      )
                    )
                  )
                )
              )
            )
          )
        );
      });

      /***/
    },

    /***/ 2: /***/ function(module, exports) {
      module.exports = require('styled-components');

      /***/
    },

    /***/ 30: /***/ function(module, exports) {
      module.exports = require('next/head');

      /***/
    },

    /***/ 31: /***/ function(module, __webpack_exports__, __webpack_require__) {
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

    /***/ 97: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(105);

      /***/
    },

    /******/
  }
);
