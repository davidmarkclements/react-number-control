'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Component = React.Component;

var noop = function noop() {};

var NumberControl = (function (_Component) {
  _inherits(NumberControl, _Component);

  function NumberControl(_ref) {
    var _ref$max = _ref.max;
    var max = _ref$max === undefined ? 4 : _ref$max;
    var _ref$min = _ref.min;
    var min = _ref$min === undefined ? 0 : _ref$min;
    var _ref$n = _ref.n;
    var n = _ref$n === undefined ? 0 : _ref$n;

    _classCallCheck(this, NumberControl);

    _get(Object.getPrototypeOf(NumberControl.prototype), 'constructor', this).call(this);
    this.state = { max: max, min: min, n: n };
  }

  _createClass(NumberControl, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var _ref2$max = _ref2.max;
      var max = _ref2$max === undefined ? 4 : _ref2$max;
      var _ref2$min = _ref2.min;
      var min = _ref2$min === undefined ? 0 : _ref2$min;
      var _ref2$n = _ref2.n;
      var n = _ref2$n === undefined ? 0 : _ref2$n;

      this.setState({ max: max, min: min, n: n });
    }
  }, {
    key: 'minus',
    value: function minus() {
      var _props = this.props;
      var _props$onChange = _props.onChange;
      var onChange = _props$onChange === undefined ? noop : _props$onChange;
      var _props$onReject = _props.onReject;
      var onReject = _props$onReject === undefined ? noop : _props$onReject;
      var _state = this.state;
      var min = _state.min;
      var n = _state.n;

      var next = n - 1;
      if (next < min) return onReject('minus', min, n);
      this.setState({ n: next });
      onChange(next, n);
    }
  }, {
    key: 'plus',
    value: function plus() {
      var _props2 = this.props;
      var _props2$onChange = _props2.onChange;
      var onChange = _props2$onChange === undefined ? noop : _props2$onChange;
      var _props2$onReject = _props2.onReject;
      var onReject = _props2$onReject === undefined ? noop : _props2$onReject;
      var _state2 = this.state;
      var max = _state2.max;
      var n = _state2.n;

      var next = n + 1;
      if (next > max) return onReject('plus', max, n);
      this.setState({ n: next });
      onChange(next, n);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var n = this.state.n;
      var _props3 = this.props;
      var _props3$className = _props3.className;
      var className = _props3$className === undefined ? 'ns' : _props3$className;
      var _props3$childClasses = _props3.childClasses;
      var childClasses = _props3$childClasses === undefined ? {} : _props3$childClasses;
      var _props3$chars = _props3.chars;
      var chars = _props3$chars === undefined ? {} : _props3$chars;
      var _childClasses$minus = childClasses.minus;
      var minus = _childClasses$minus === undefined ? 'ns-minus' : _childClasses$minus;
      var _childClasses$num = childClasses.num;
      var num = _childClasses$num === undefined ? 'ns-num' : _childClasses$num;
      var _childClasses$plus = childClasses.plus;
      var plus = _childClasses$plus === undefined ? 'ns-plus' : _childClasses$plus;
      var _chars$minusChar = chars.minusChar;
      var minusChar = _chars$minusChar === undefined ? '-' : _chars$minusChar;
      var _chars$plusChar = chars.plusChar;
      var plusChar = _chars$plusChar === undefined ? '+' : _chars$plusChar;

      return React.createElement(
        'div',
        { className: className },
        React.createElement(
          'span',
          { onClick: function () {
              return _this.minus();
            }, className: minus, key: 'ns-minus' },
          minusChar
        ),
        React.createElement(
          'span',
          { className: plus, key: 'ns-num' },
          n
        ),
        React.createElement(
          'span',
          { onClick: function () {
              return _this.plus();
            }, className: num, key: 'ns-plus' },
          plusChar
        )
      );
    }
  }]);

  return NumberControl;
})(Component);

module.exports = NumberControl;

