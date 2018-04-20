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

var Team_rank = function (_wepy$page) {
  _inherits(Team_rank, _wepy$page);

  function Team_rank() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Team_rank);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Team_rank.__proto__ || Object.getPrototypeOf(Team_rank)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '球队战绩'
    }, _this.data = {
      list: [],
      currentTab: 0, // tab切换
      technical: []
    }, _this.methods = {
      // 滑动切换tab
      bindChange: function bindChange(e) {
        var that = this;
        that.currentTab = e.detail.current;
      },

      // 点击tab切换
      swichNav: function swichNav(e) {
        var that = this;
        if (that.currentTab === e.target.dataset.current) {
          return false;
        } else {
          that.currentTab = e.target.dataset.current;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Team_rank, [{
    key: 'getTeamRank',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                _context.next = 3;
                return (0, _api.team_rank)({});

              case 3:
                res = _context.sent;

                // setData
                that.list = res.data;
                that.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTeamRank() {
        return _ref2.apply(this, arguments);
      }

      return getTeamRank;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getTeamRank();
    }
  }]);

  return Team_rank;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Team_rank , 'pages/team_rank/team_rank'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW1fcmFuay5qcyJdLCJuYW1lcyI6WyJUZWFtX3JhbmsiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImxpc3QiLCJjdXJyZW50VGFiIiwidGVjaG5pY2FsIiwibWV0aG9kcyIsImJpbmRDaGFuZ2UiLCJlIiwidGhhdCIsImRldGFpbCIsImN1cnJlbnQiLCJzd2ljaE5hdiIsInRhcmdldCIsImRhdGFzZXQiLCJyZXMiLCIkYXBwbHkiLCJnZXRUZWFtUmFuayIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxrQkFBWSxDQUZQLEVBRVU7QUFDZkMsaUJBQVc7QUFITixLLFFBTVBDLE8sR0FBVTtBQUNSO0FBQ0FDLGdCQUZRLHNCQUVHQyxDQUZILEVBRU07QUFDWixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS0wsVUFBTCxHQUFrQkksRUFBRUUsTUFBRixDQUFTQyxPQUEzQjtBQUNELE9BTE87O0FBTVI7QUFDQUMsY0FQUSxvQkFPQ0osQ0FQRCxFQU9JO0FBQ1YsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUEsS0FBS0wsVUFBTCxLQUFvQkksRUFBRUssTUFBRixDQUFTQyxPQUFULENBQWlCSCxPQUF6QyxFQUFrRDtBQUNoRCxpQkFBTyxLQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLGVBQUtMLFVBQUwsR0FBa0JJLEVBQUVLLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkgsT0FBbkM7QUFDRDtBQUNGO0FBZE8sSzs7Ozs7Ozs7Ozs7O0FBa0JKRixvQixHQUFPLEk7O3VCQUNPLG9CQUFVLEVBQVYsQzs7O0FBQVpNLG1COztBQUNOO0FBQ0FOLHFCQUFLTixJQUFMLEdBQVlZLElBQUliLElBQWhCO0FBQ0FPLHFCQUFLTyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR087QUFDUCxXQUFLQyxXQUFMO0FBQ0Q7Ozs7RUF0Q29DLGVBQUtDLEk7O2tCQUF2Qm5CLFMiLCJmaWxlIjoidGVhbV9yYW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgeyB0ZWFtX3JhbmsgfSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhbV9yYW5rIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55CD6Zif5oiY57upJ1xyXG4gIH07XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBsaXN0OiBbXSxcclxuICAgIGN1cnJlbnRUYWI6IDAsIC8vIHRhYuWIh+aNolxyXG4gICAgdGVjaG5pY2FsOiBbXVxyXG4gIH07XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICAvLyDmu5HliqjliIfmjaJ0YWJcclxuICAgIGJpbmRDaGFuZ2UoZSkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHRoYXQuY3VycmVudFRhYiA9IGUuZGV0YWlsLmN1cnJlbnQ7XHJcbiAgICB9LFxyXG4gICAgLy8g54K55Ye7dGFi5YiH5o2iXHJcbiAgICBzd2ljaE5hdihlKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgaWYgKHRoYXQuY3VycmVudFRhYiA9PT0gZS50YXJnZXQuZGF0YXNldC5jdXJyZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoYXQuY3VycmVudFRhYiA9IGUudGFyZ2V0LmRhdGFzZXQuY3VycmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGFzeW5jIGdldFRlYW1SYW5rKCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGVhbV9yYW5rKHt9KTtcclxuICAgIC8vIHNldERhdGFcclxuICAgIHRoYXQubGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgdGhhdC4kYXBwbHkoKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuZ2V0VGVhbVJhbmsoKTtcclxuICB9XHJcbn1cclxuIl19