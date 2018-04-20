'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../utils/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stats = function (_wepy$page) {
  _inherits(Stats, _wepy$page);

  function Stats() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Stats);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Stats.__proto__ || Object.getPrototypeOf(Stats)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '数据统计'
    }, _this.data = {
      item: [],
      stats: [],
      current: 'pt',
      name: '得分'
    }, _this.methods = {
      tabNav: function tabNav(e) {
        var that = this;
        that.stats = that.item[e.target.dataset.t];
        that.current = e.target.dataset.t;
        that.name = e.target.dataset.name;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Stats, [{
    key: 'getPlayTop',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                _context.next = 3;
                return (0, _api.player_top)({});

              case 3:
                res = _context.sent;

                // setData
                that.item = res.data;
                that.stats = res.data.pt;
                that.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPlayTop() {
        return _ref2.apply(this, arguments);
      }

      return getPlayTop;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getPlayTop();
    }
  }]);

  return Stats;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Stats , 'pages/stats/stats'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzLmpzIl0sIm5hbWVzIjpbIlN0YXRzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpdGVtIiwic3RhdHMiLCJjdXJyZW50IiwibmFtZSIsIm1ldGhvZHMiLCJ0YWJOYXYiLCJlIiwidGhhdCIsInRhcmdldCIsImRhdGFzZXQiLCJ0IiwicmVzIiwicHQiLCIkYXBwbHkiLCJnZXRQbGF5VG9wIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxlQUFTLElBSEo7QUFJTEMsWUFBTTtBQUpELEssUUFPUEMsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0RDLENBREMsRUFDRTtBQUNSLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLTixLQUFMLEdBQWFNLEtBQUtQLElBQUwsQ0FBVU0sRUFBRUUsTUFBRixDQUFTQyxPQUFULENBQWlCQyxDQUEzQixDQUFiO0FBQ0FILGFBQUtMLE9BQUwsR0FBZUksRUFBRUUsTUFBRixDQUFTQyxPQUFULENBQWlCQyxDQUFoQztBQUNBSCxhQUFLSixJQUFMLEdBQVlHLEVBQUVFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQk4sSUFBN0I7QUFDRDtBQU5PLEs7Ozs7Ozs7Ozs7OztBQVVKSSxvQixHQUFPLEk7O3VCQUVPLHFCQUFXLEVBQVgsQzs7O0FBQVpJLG1COztBQUNOO0FBQ0FKLHFCQUFLUCxJQUFMLEdBQVlXLElBQUlaLElBQWhCO0FBQ0FRLHFCQUFLTixLQUFMLEdBQWFVLElBQUlaLElBQUosQ0FBU2EsRUFBdEI7QUFDQUwscUJBQUtNLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHTztBQUNQLFdBQUtDLFVBQUw7QUFDRDs7OztFQWpDZ0MsZUFBS0MsSTs7a0JBQW5CbkIsSyIsImZpbGUiOiJzdGF0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IHsgcGxheWVyX3RvcCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0cyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aVsOaNrue7n+iuoSdcclxuICB9O1xyXG5cclxuICBkYXRhID0ge1xyXG4gICAgaXRlbTogW10sXHJcbiAgICBzdGF0czogW10sXHJcbiAgICBjdXJyZW50OiAncHQnLFxyXG4gICAgbmFtZTogJ+W+l+WIhidcclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgdGFiTmF2KGUpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB0aGF0LnN0YXRzID0gdGhhdC5pdGVtW2UudGFyZ2V0LmRhdGFzZXQudF07XHJcbiAgICAgIHRoYXQuY3VycmVudCA9IGUudGFyZ2V0LmRhdGFzZXQudDtcclxuICAgICAgdGhhdC5uYW1lID0gZS50YXJnZXQuZGF0YXNldC5uYW1lO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGFzeW5jIGdldFBsYXlUb3AoKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcGxheWVyX3RvcCh7fSk7XHJcbiAgICAvLyBzZXREYXRhXHJcbiAgICB0aGF0Lml0ZW0gPSByZXMuZGF0YTtcclxuICAgIHRoYXQuc3RhdHMgPSByZXMuZGF0YS5wdDtcclxuICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLmdldFBsYXlUb3AoKTtcclxuICB9XHJcbn1cclxuIl19