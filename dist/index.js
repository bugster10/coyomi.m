"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSlideshowImage = require("react-slideshow-image");

var _jquery341Min = _interopRequireDefault(require("./vendor/js/jquery-3.4.1.min.js"));

require("./vendor/css/bootstrap.min.css");

require("./css/styles.css");

var _mpOVvlu = _interopRequireDefault(require("./media/mpOVvlu.png"));

var _myworks = _interopRequireDefault(require("./media/myworks1.png"));

var _myworks2 = _interopRequireDefault(require("./media/myworks2.png"));

var _myworks3 = _interopRequireDefault(require("./media/myworks3.png"));

var _myworks4 = _interopRequireDefault(require("./media/myworks4.png"));

var _myworks5 = _interopRequireDefault(require("./media/myworks5.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var fadeImages = [_myworks["default"], _myworks2["default"], _myworks3["default"], _myworks4["default"], _myworks5["default"]];
var fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
};
var enThings = ['SPOOKY', 'COOL', 'WEIRD', 'COMFY', 'BLOODY'];
var jpThings = ['怖い', 'オシャレ', '不気味', '心地いい', '血塗れ'];
var enDict = {
  a1: "I'm COYOMI (暦)",
  a2: "An Illustrator from Japan.",
  a3: "Currently living in Tokyo and finishing up College. I taught myself English by playing games and watching movies.",
  a4: "(especially Tarantino and Marvel)",
  a5: "...And I just really like to draw... things...",
  mw1: "I can draw ",
  mw2: enThings,
  mw3: " things",
  ms1: "SKILLS",
  ms2: "Comics, posters and some web design. I'm always looking for freelance work or commissions.",
  ms3: "(Also looking to get into 3D modeling / graphic design!)",
  c1: "Think you could use my help?",
  c2: "Send me a message.",
  c3: "MESSAGE ME"
};
var jpDict = {
  a1: "I'm COYOMI (暦)",
  a2: "東京住み作者です。",
  a3: "尚、美大学をやっている. ゲームや海外映画のお陰で英語を独学しました。",
  a4: "(特にタランティーノとマーベル)",
  a5: "...それと、絵を描くが好き",
  mw1: "例えば、",
  mw2: jpThings,
  mw3: " 物も作れる",
  ms1: "得意分野",
  ms2: "コミック、ポスターと少しウェブデザイン。何時でもフリーランス仕事と依頼絵に頼んでいいです。",
  ms3: "(グラフィックデザインもCGIも興味があります！)",
  c1: "頼みがあると思いますか？",
  c2: "メッセージ送ってね",
  c3: "メッセージ送る"
};

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      data: localStorage['LANG'] == 'EN' ? enDict : jpDict
    };
    _this.changeLang = _this.changeLang.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "changeLang",
    value: function changeLang(e) {
      localStorage['LANG'] = e;
      this.setState(localStorage['LANG'] == 'EN' ? {
        data: enDict
      } : {
        data: jpDict
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        id: "change-language",
        className: "bg-light"
      }, _react["default"].createElement("a", {
        className: "btn-lang",
        onClick: function onClick() {
          return _this2.changeLang('EN');
        }
      }, "EN"), _react["default"].createElement("span", null, "|"), _react["default"].createElement("a", {
        className: "btn-lang",
        onClick: function onClick() {
          return _this2.changeLang('JP');
        }
      }, "JP")), _react["default"].createElement(AboutMe, {
        a1: this.state.data.a1,
        a2: this.state.data.a2,
        a3: this.state.data.a3,
        a4: this.state.data.a4,
        a5: this.state.data.a5
      }), _react["default"].createElement(MyWorks, {
        mw1: this.state.data.mw1,
        mw2: this.state.data.mw2,
        mw3: this.state.data.mw3
      }), _react["default"].createElement(MySkills, {
        ms1: this.state.data.ms1,
        ms2: this.state.data.ms2,
        ms3: this.state.data.ms3
      }), _react["default"].createElement(Contact, {
        c1: this.state.data.c1,
        c2: this.state.data.c2,
        c3: this.state.data.c3
      }), _react["default"].createElement(Footer, null));
    }
  }]);

  return App;
}(_react["default"].Component);

exports.App = App;
;

var Intro =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Intro, _React$Component2);

  function Intro() {
    _classCallCheck(this, Intro);

    return _possibleConstructorReturn(this, _getPrototypeOf(Intro).apply(this, arguments));
  }

  _createClass(Intro, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        id: "intro",
        className: "row bg-intro"
      }, _react["default"].createElement("div", {
        className: "container d-flex align-items-center intro-image"
      }, _react["default"].createElement("div", {
        className: "card-body text-white d-flex justify-content-center"
      }, _react["default"].createElement("div", {
        className: "jumbotron bg-intro-card text-center"
      }, _react["default"].createElement("h1", null, "Hi. I'm COYOMI\uFF08\u66A6\uFF09"), _react["default"].createElement("h2", null, "I'm an Illustrator/Designer")))));
    }
  }]);

  return Intro;
}(_react["default"].Component);

;

var AboutMe =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(AboutMe, _React$Component3);

  function AboutMe() {
    _classCallCheck(this, AboutMe);

    return _possibleConstructorReturn(this, _getPrototypeOf(AboutMe).apply(this, arguments));
  }

  _createClass(AboutMe, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        id: "aboutme",
        className: "row p-15 text-dark"
      }, _react["default"].createElement("div", {
        className: "col card bg-aboutme-card text-center text-dark"
      }, _react["default"].createElement("h1", {
        className: "card-header"
      }, _react["default"].createElement("strong", null, this.props.a1)), _react["default"].createElement("div", {
        className: "card-body"
      }, _react["default"].createElement("h4", {
        className: "card-title"
      }, this.props.a2), _react["default"].createElement("p", {
        className: "thick-font"
      }, this.props.a3, _react["default"].createElement("small", null, this.props.a4), _react["default"].createElement("br", null), this.props.a5))));
    }
  }]);

  return AboutMe;
}(_react["default"].Component);

;

var MyWorks =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(MyWorks, _React$Component4);

  function MyWorks() {
    _classCallCheck(this, MyWorks);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyWorks).apply(this, arguments));
  }

  _createClass(MyWorks, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        id: "myworks",
        className: "bg-dark"
      }, _react["default"].createElement("div", {
        className: "mx-auto row container p-2 d-flex justify-content-center"
      }, _react["default"].createElement("h6", {
        className: "text-nowrap bg-light border border-light rounded p-2"
      }, this.props.mw1, _react["default"].createElement("span", {
        id: "what-thing-container",
        className: "border rounded border-secondary text-center bg-dark text-white"
      }, _react["default"].createElement("span", {
        id: "what-thing"
      }, this.props.mw2[0])), this.props.mw3)), _react["default"].createElement("div", {
        id: "myworks-img",
        className: "row"
      }, _react["default"].createElement("div", {
        id: "myworks-col",
        className: "col"
      }, _react["default"].createElement(Slideshow, null))));
    }
  }]);

  return MyWorks;
}(_react["default"].Component);

;
var skillsArr = ['Comics', 'Posters', 'Web', '日本語', 'English'];
var counter = 0;

var MySkills =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(MySkills, _React$Component5);

  function MySkills(props) {
    var _this3;

    _classCallCheck(this, MySkills);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(MySkills).call(this, props));
    _this3.state = {
      index: 0,
      skill: skillsArr[0]
    };
    return _this3;
  }

  _createClass(MySkills, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      this.intervalId = setInterval(function () {
        counter = counter < 4 ? counter + 1 : 0;

        _this4.setState({
          index: _this4.state.index < 4 ? _this4.state.index + 1 : 0,
          skill: skillsArr[counter]
        });
      }, 3000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.intervalId);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        id: "myskills",
        className: "row"
      }, _react["default"].createElement("div", {
        id: "myskills-text-col",
        className: "col-6 text-center pt-4-alt ml-2 pr-5-alt"
      }, _react["default"].createElement("div", {
        id: "myskills-card"
      }, _react["default"].createElement("h4", {
        className: "text-dark"
      }, _react["default"].createElement("strong", null, this.props.ms1)), _react["default"].createElement("div", {
        className: "card mx-2"
      }, _react["default"].createElement("p", {
        className: "text-dark"
      }, this.props.ms2, _react["default"].createElement("br", null), _react["default"].createElement("small", null, this.props.ms3))))), _react["default"].createElement("div", {
        id: "myskills-col",
        className: "col-6"
      }, _react["default"].createElement("div", {
        id: "skill",
        className: "text-center"
      }, this.state.skill), _react["default"].createElement("img", {
        id: "goth",
        src: _mpOVvlu["default"]
      })));
    }
  }]);

  return MySkills;
}(_react["default"].Component);

;

var Contact =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(Contact, _React$Component6);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _getPrototypeOf(Contact).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        id: "contact",
        className: "container d-flex justify-content-center mt-4"
      }, _react["default"].createElement("div", {
        id: "contact-container",
        className: "card text-white text-center p-4"
      }, this.props.c1, _react["default"].createElement("br", null), this.props.c2, _react["default"].createElement("br", null), _react["default"].createElement("a", {
        id: "msgme",
        href: "mailto:koyo3.yomiko54@gmail.com"
      }, _react["default"].createElement("button", {
        type: "button",
        className: "btn btn-info"
      }, "\u2709 ", this.props.c3))));
    }
  }]);

  return Contact;
}(_react["default"].Component);

;

var Footer =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(Footer, _React$Component7);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("footer", {
        id: "footer",
        className: "footer bg-dark mt-2"
      }, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", null, _react["default"].createElement("a", {
        href: "https://twitter.com/Ma2_Ereki",
        className: "fa text-white fa-twitter"
      }, "@Ma2_Ereki")), _react["default"].createElement("div", null, _react["default"].createElement("a", {
        href: "https://www.instagram.com/yomico_543/",
        className: "fa text-white fa-instagram"
      }, " yomico_543"))));
    }
  }]);

  return Footer;
}(_react["default"].Component);

;

var Slideshow =
/*#__PURE__*/
function (_React$Component8) {
  _inherits(Slideshow, _React$Component8);

  function Slideshow() {
    _classCallCheck(this, Slideshow);

    return _possibleConstructorReturn(this, _getPrototypeOf(Slideshow).apply(this, arguments));
  }

  _createClass(Slideshow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _jquery341Min["default"])(function () {
        (function ($) {
          var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

          $.fn.attrchange = function (callback) {
            if (MutationObserver) {
              var options = {
                subtree: false,
                attributes: true
              };
              var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (e) {
                  callback.call(e.target, e.attributeName);
                });
              });
              return this.each(function () {
                observer.observe(this, options);
              });
            }
          };
        })(_jquery341Min["default"]); //Now you need to append event listener


        (0, _jquery341Min["default"])('body *').attrchange(function (attrName) {
          var _this5 = this;

          if (attrName == 'class' && (0, _jquery341Min["default"])(this).hasClass('active')) {
            (0, _jquery341Min["default"])('#what-thing').animate({
              top: '-15px'
            }, 250, function () {
              (0, _jquery341Min["default"])('#what-thing').text('');
              (0, _jquery341Min["default"])('#what-thing').css({
                top: '15px'
              });
              (0, _jquery341Min["default"])('#what-thing').text(localStorage['LANG'] == 'EN' ? enThings[(0, _jquery341Min["default"])(_this5).attr('data-key')] : jpThings[(0, _jquery341Min["default"])(_this5).attr('data-key')]).animate({
                top: '0'
              }, 250);
            });
          } else if (attrName == 'id') {
            console.log('id changed');
          } else {//OTHER ATTR CHANGED
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactSlideshowImage.Fade, fadeProperties, _react["default"].createElement("div", {
        className: "each-fade"
      }, _react["default"].createElement("div", {
        className: "image-container"
      }, _react["default"].createElement("img", {
        src: fadeImages[0]
      }))), _react["default"].createElement("div", {
        className: "each-fade"
      }, _react["default"].createElement("div", {
        className: "image-container"
      }, _react["default"].createElement("img", {
        src: fadeImages[1]
      }))), _react["default"].createElement("div", {
        className: "each-fade"
      }, _react["default"].createElement("div", {
        className: "image-container"
      }, _react["default"].createElement("img", {
        src: fadeImages[2]
      }))), _react["default"].createElement("div", {
        className: "each-fade"
      }, _react["default"].createElement("div", {
        className: "image-container"
      }, _react["default"].createElement("img", {
        src: fadeImages[3]
      }))), _react["default"].createElement("div", {
        className: "each-fade"
      }, _react["default"].createElement("div", {
        className: "image-container"
      }, _react["default"].createElement("img", {
        src: fadeImages[4]
      }))));
    }
  }]);

  return Slideshow;
}(_react["default"].Component);

;