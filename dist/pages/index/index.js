'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../utils/api.js');

var _formatTime = require('./../../utils/formatTime.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '赛事直播'
    }, _this.data = {
      isShow: false,
      list: []
    }, _this.methods = {
      selectDate: function selectDate(e) {
        this.getNabSchdule(e.target.dataset.time);
      },
      bindDateChange: function bindDateChange(e) {
        this.getNabSchdule(e.detail.value);
      },
      onShareAppMessage: function onShareAppMessage(e) {
        console.log('share', e);
      }
    }, _this.computed = {
      now: function now() {
        var date = new Date();
        var time = (0, _formatTime.formatDate)(date);
        return time;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'getNabSchdule',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(param) {
        var that, params, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                params = {
                  date: param
                };
                _context.next = 4;
                return (0, _api.nab_schedule)(params);

              case 4:
                res = _context.sent;

                // setData
                that.isShow = true;
                that.list = res.data.data;
                that.$apply();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getNabSchdule(_x) {
        return _ref2.apply(this, arguments);
      }

      return getNabSchdule;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getNabSchdule();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpc1Nob3ciLCJsaXN0IiwibWV0aG9kcyIsInNlbGVjdERhdGUiLCJlIiwiZ2V0TmFiU2NoZHVsZSIsInRhcmdldCIsImRhdGFzZXQiLCJ0aW1lIiwiYmluZERhdGVDaGFuZ2UiLCJkZXRhaWwiLCJ2YWx1ZSIsIm9uU2hhcmVBcHBNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImNvbXB1dGVkIiwibm93IiwiZGF0ZSIsIkRhdGUiLCJwYXJhbSIsInRoYXQiLCJwYXJhbXMiLCJyZXMiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxjQUFRLEtBREg7QUFFTEMsWUFBTTtBQUZELEssUUFLUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixhQUFLQyxhQUFMLENBQW1CRCxFQUFFRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLElBQXBDO0FBQ0QsT0FITztBQUlSQyxvQkFKUSwwQkFJT0wsQ0FKUCxFQUlVO0FBQ2hCLGFBQUtDLGFBQUwsQ0FBbUJELEVBQUVNLE1BQUYsQ0FBU0MsS0FBNUI7QUFDRCxPQU5PO0FBT1JDLHVCQVBRLDZCQU9VUixDQVBWLEVBT2E7QUFDbkJTLGdCQUFRQyxHQUFSLENBQVksT0FBWixFQUFxQlYsQ0FBckI7QUFDRDtBQVRPLEssUUFZVlcsUSxHQUFXO0FBQ1RDLFNBRFMsaUJBQ0g7QUFDSixZQUFJQyxPQUFPLElBQUlDLElBQUosRUFBWDtBQUNBLFlBQUlWLE9BQU8sNEJBQVdTLElBQVgsQ0FBWDtBQUNBLGVBQU9ULElBQVA7QUFDRDtBQUxRLEs7Ozs7OzsyRkFRU1csSzs7Ozs7O0FBQ2RDLG9CLEdBQU8sSTtBQUNQQyxzQixHQUFTO0FBQ1hKLHdCQUFNRTtBQURLLGlCOzt1QkFJSyx1QkFBYUUsTUFBYixDOzs7QUFBWkMsbUI7O0FBQ047QUFDQUYscUJBQUtwQixNQUFMLEdBQWMsSUFBZDtBQUNBb0IscUJBQUtuQixJQUFMLEdBQVlxQixJQUFJdkIsSUFBSixDQUFTQSxJQUFyQjtBQUNBcUIscUJBQUtHLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHTztBQUNQLFdBQUtsQixhQUFMO0FBQ0Q7Ozs7RUE3Q2dDLGVBQUttQixJOztrQkFBbkI1QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgeyBuYWJfc2NoZWR1bGUgfSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0VGltZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i1m+S6i+ebtOaSrSdcclxuICB9O1xyXG5cclxuICBkYXRhID0ge1xyXG4gICAgaXNTaG93OiBmYWxzZSxcclxuICAgIGxpc3Q6IFtdXHJcbiAgfTtcclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIHNlbGVjdERhdGUoZSkge1xyXG4gICAgICB0aGlzLmdldE5hYlNjaGR1bGUoZS50YXJnZXQuZGF0YXNldC50aW1lKTtcclxuICAgIH0sXHJcbiAgICBiaW5kRGF0ZUNoYW5nZShlKSB7XHJcbiAgICAgIHRoaXMuZ2V0TmFiU2NoZHVsZShlLmRldGFpbC52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnc2hhcmUnLCBlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb21wdXRlZCA9IHtcclxuICAgIG5vdygpIHtcclxuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBsZXQgdGltZSA9IGZvcm1hdERhdGUoZGF0ZSk7XHJcbiAgICAgIHJldHVybiB0aW1lO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGFzeW5jIGdldE5hYlNjaGR1bGUocGFyYW0pIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgIGRhdGU6IHBhcmFtXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IG5hYl9zY2hlZHVsZShwYXJhbXMpO1xyXG4gICAgLy8gc2V0RGF0YVxyXG4gICAgdGhhdC5pc1Nob3cgPSB0cnVlO1xyXG4gICAgdGhhdC5saXN0ID0gcmVzLmRhdGEuZGF0YTtcclxuICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLmdldE5hYlNjaGR1bGUoKTtcclxuICB9XHJcbn1cclxuIl19