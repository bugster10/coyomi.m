"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSlideshowImage = require("react-slideshow-image");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
};
var thingArr = ['SPOOKY', 'COOL', 'WEIRD', 'COMFY', 'BLOODY'];

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    // May have issues with false
    // Perhaps use null or empty str
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // introContainer: false,
    //         // introId: false,
    //     };
    // }
    value: function render() {
      // if (this.state.isLoading) return (
      //     <Intro introClass="row"/>
      // );
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(AboutMe, null), _react["default"].createElement(MyWorks, null), _react["default"].createElement(MySkills, null), _react["default"].createElement(Contact, null), _react["default"].createElement(Footer, null));
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
      }, _react["default"].createElement("strong", null, "I'm COYOMI (\u66A6)")), _react["default"].createElement("div", {
        className: "card-body"
      }, _react["default"].createElement("h4", {
        className: "card-title"
      }, "An Illustrator from Japan."), _react["default"].createElement("p", {
        className: "thick-font"
      }, "Currently living in Tokyo and finishing up College. I taught myself English by playing games and watching movies. ", _react["default"].createElement("small", {
        className: ""
      }, "(especially Tarantino and Marvel)"), _react["default"].createElement("br", null), "...And I just really like to draw... things..."))));
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
      }, "I can draw ", _react["default"].createElement("span", {
        id: "what-thing-container",
        className: "border rounded border-secondary text-center bg-dark text-white"
      }, _react["default"].createElement("span", {
        id: "what-thing"
      }, "SPOOKY")), " things")), _react["default"].createElement("div", {
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
    var _this;

    _classCallCheck(this, MySkills);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MySkills).call(this, props));
    _this.state = {
      index: 0,
      skill: skillsArr[0]
    };
    return _this;
  }

  _createClass(MySkills, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.intervalId = setInterval(function () {
        counter = counter < 4 ? counter + 1 : 0;

        _this2.setState({
          index: _this2.state.index < 4 ? _this2.state.index + 1 : 0,
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
      }, _react["default"].createElement("strong", null, "SKILLS:")), _react["default"].createElement("div", {
        className: "card mx-2"
      }, _react["default"].createElement("p", {
        className: "text-dark"
      }, "Comics, posters and some web design. I'm always looking for freelance work or commissions.", _react["default"].createElement("br", null), _react["default"].createElement("small", null, "(Also looking to get into 3D modeling / graphic design!)"))))), _react["default"].createElement("div", {
        id: "myskills-col",
        className: "col-6"
      }, _react["default"].createElement("div", {
        id: "skill",
        className: "text-center"
      }, this.state.skill), _react["default"].createElement("img", {
        id: "goth",
        src: "../src/media/mpOVvlu.png"
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
      }, "Think you could use my help?", _react["default"].createElement("br", null), "Send me a message.", _react["default"].createElement("br", null), _react["default"].createElement("a", {
        id: "msgme",
        href: "mailto:bugster111@gmail.com"
      }, _react["default"].createElement("button", {
        type: "button",
        className: "btn btn-info"
      }, "\u2709 MESSAGE ME"))));
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
      $(function () {
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
        })(jQuery); //Now you need to append event listener


        $('body *').attrchange(function (attrName) {
          var _this3 = this;

          if (attrName == 'class' && $(this).hasClass('active')) {
            $('#what-thing').animate({
              top: '-15px'
            }, 250, function () {
              $('#what-thing').text('');
              $('#what-thing').css({
                top: '15px'
              });
              $('#what-thing').text(thingArr[$(_this3).attr('data-key')]).animate({
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
        src: "../src/media/myworks1.png"
      }))), _react["default"].createElement("div", {
        className: "each-fade"
      }, _react["default"].createElement("div", {
        className: "image-container"
      }, _react["default"].createElement("img", {
        src: "../src/media/myworks2.png"
      }))), _react["default"].createElement("div", {
        className: "each-fade"
      }, _react["default"].createElement("div", {
        className: "image-container"
      }, _react["default"].createElement("img", {
        src: "../src/media/myworks3.png"
      }))), _react["default"].createElement("div", {
        className: "each-fade"
      }, _react["default"].createElement("div", {
        className: "image-container"
      }, _react["default"].createElement("img", {
        src: "../src/media/myworks4.png"
      }))), _react["default"].createElement("div", {
        className: "each-fade"
      }, _react["default"].createElement("div", {
        className: "image-container"
      }, _react["default"].createElement("img", {
        src: "../src/media/myworks5.png"
      }))));
    }
  }]);

  return Slideshow;
}(_react["default"].Component);

;