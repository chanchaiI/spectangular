'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _defaults(subClass, superClass); }

var _containerJs = require('./container.js');

var _containerJs2 = _interopRequireDefault(_containerJs);

var Datepicker = (function (_Container) {
  _inherits(Datepicker, _Container);

  function Datepicker() {
    _classCallCheck(this, Datepicker);

    _get(Object.getPrototypeOf(Datepicker.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Datepicker, [{
    key: 'enabledYears',
    get: function get() {
      throw 'Angular Material has no Datepicker and thus does not support the datefield';
    }
  }, {
    key: 'enabledMonths',
    get: function get() {
      throw 'Angular Material has no Datepicker and thus does not support the datefield';
    }
  }, {
    key: 'enabledDays',
    get: function get() {
      throw 'Angular Material has no Datepicker and thus does not support the datefield';
    }
  }]);

  return Datepicker;
})(_containerJs2['default']);

exports.Datepicker = Datepicker;
