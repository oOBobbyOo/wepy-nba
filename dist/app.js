'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index/index', 'pages/live_detail/live_detail', 'pages/news_list/news_list', 'pages/news_info/news_info', 'pages/team_rank/team_rank', 'pages/team_info/team_info', 'pages/stats/stats', 'pages/player_detail/player_detail', 'pages/about/about'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#00AA98',
        navigationBarTitleText: 'NBA球赛',
        navigationBarTextStyle: '#fff'
      },
      tabBar: {
        color: '#333',
        selectedColor: '#00aa98',
        position: 'bottom',
        borderStyle: 'block',
        list: [{
          pagePath: 'pages/index/index',
          text: '赛事直播',
          iconPath: 'assets/images/ball.png',
          selectedIconPath: 'assets/images/ball-active.png'
        }, {
          pagePath: 'pages/news_list/news_list',
          text: 'NBA资讯',
          iconPath: 'assets/images/news.png',
          selectedIconPath: 'assets/images/news-active.png'
        }, {
          pagePath: 'pages/team_rank/team_rank',
          text: '球队战绩',
          iconPath: 'assets/images/rank.png',
          selectedIconPath: 'assets/images/rank-active.png'
        }, {
          pagePath: 'pages/stats/stats',
          text: '数据统计',
          iconPath: 'assets/images/stats.png',
          selectedIconPath: 'assets/images/stats-active.png'
        }, {
          pagePath: 'pages/about/about',
          text: '关于我',
          iconPath: 'assets/images/about.png',
          selectedIconPath: 'assets/images/about-active.png'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJwb3NpdGlvbiIsImJvcmRlclN0eWxlIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInRlc3RBc3luYyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFpRUUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQTlEZEEsTUE4RGMsR0E5REw7QUFDUEMsYUFBTyxDQUNMLG1CQURLLEVBRUwsK0JBRkssRUFHTCwyQkFISyxFQUlMLDJCQUpLLEVBS0wsMkJBTEssRUFNTCwyQkFOSyxFQU9MLG1CQVBLLEVBUUwsbUNBUkssRUFTTCxtQkFUSyxDQURBO0FBWVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixPQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FaRDtBQWtCUEMsY0FBUTtBQUNOQyxlQUFPLE1BREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyxrQkFBVSxRQUhKO0FBSU5DLHFCQUFhLE9BSlA7QUFLTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLG1CQURaO0FBRUVDLGdCQUFNLE1BRlI7QUFHRUMsb0JBQVUsd0JBSFo7QUFJRUMsNEJBQWtCO0FBSnBCLFNBREksRUFPSjtBQUNFSCxvQkFBVSwyQkFEWjtBQUVFQyxnQkFBTSxPQUZSO0FBR0VDLG9CQUFVLHdCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQVBJLEVBYUo7QUFDRUgsb0JBQVUsMkJBRFo7QUFFRUMsZ0JBQU0sTUFGUjtBQUdFQyxvQkFBVSx3QkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FiSSxFQW1CSjtBQUNFSCxvQkFBVSxtQkFEWjtBQUVFQyxnQkFBTSxNQUZSO0FBR0VDLG9CQUFVLHlCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQW5CSSxFQXlCSjtBQUNFSCxvQkFBVSxtQkFEWjtBQUVFQyxnQkFBTSxLQUZSO0FBR0VDLG9CQUFVLHlCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQXpCSTtBQUxBO0FBbEJELEtBOERLO0FBQUEsVUFKZEMsVUFJYyxHQUpEO0FBQ1hDLGdCQUFVO0FBREMsS0FJQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSFk7QUFJYjs7OzsrQkFFVTtBQUNULFdBQUtDLFNBQUw7QUFDRDs7OzBCQUVLQyxDLEVBQUc7QUFDUCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9COztBQUNOQyx3QkFBUUMsR0FBUixDQUFZRixJQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR1VHLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS2QsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtjLFdBQUwsQ0FBaUI7QUFDZkMsZUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hILGVBQUtkLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCZ0IsSUFBSWhCLFFBQS9CO0FBQ0FZLGdCQUFNQSxHQUFHSSxJQUFJaEIsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBakcwQixlQUFLaUIsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL2luZGV4L2luZGV4JyxcbiAgICAgICdwYWdlcy9saXZlX2RldGFpbC9saXZlX2RldGFpbCcsXG4gICAgICAncGFnZXMvbmV3c19saXN0L25ld3NfbGlzdCcsXG4gICAgICAncGFnZXMvbmV3c19pbmZvL25ld3NfaW5mbycsXG4gICAgICAncGFnZXMvdGVhbV9yYW5rL3RlYW1fcmFuaycsXG4gICAgICAncGFnZXMvdGVhbV9pbmZvL3RlYW1faW5mbycsXG4gICAgICAncGFnZXMvc3RhdHMvc3RhdHMnLFxuICAgICAgJ3BhZ2VzL3BsYXllcl9kZXRhaWwvcGxheWVyX2RldGFpbCcsXG4gICAgICAncGFnZXMvYWJvdXQvYWJvdXQnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzAwQUE5OCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnTkJB55CD6LWbJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICcjZmZmJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogJyMzMzMnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMwMGFhOTgnLFxuICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgYm9yZGVyU3R5bGU6ICdibG9jaycsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2luZGV4L2luZGV4JyxcbiAgICAgICAgICB0ZXh0OiAn6LWb5LqL55u05pKtJyxcbiAgICAgICAgICBpY29uUGF0aDogJ2Fzc2V0cy9pbWFnZXMvYmFsbC5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL2JhbGwtYWN0aXZlLnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbmV3c19saXN0L25ld3NfbGlzdCcsXG4gICAgICAgICAgdGV4dDogJ05CQei1hOiurycsXG4gICAgICAgICAgaWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL25ld3MucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnYXNzZXRzL2ltYWdlcy9uZXdzLWFjdGl2ZS5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3RlYW1fcmFuay90ZWFtX3JhbmsnLFxuICAgICAgICAgIHRleHQ6ICfnkIPpmJ/miJjnu6knLFxuICAgICAgICAgIGljb25QYXRoOiAnYXNzZXRzL2ltYWdlcy9yYW5rLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2Fzc2V0cy9pbWFnZXMvcmFuay1hY3RpdmUucG5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zdGF0cy9zdGF0cycsXG4gICAgICAgICAgdGV4dDogJ+aVsOaNrue7n+iuoScsXG4gICAgICAgICAgaWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL3N0YXRzLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2Fzc2V0cy9pbWFnZXMvc3RhdHMtYWN0aXZlLnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvYWJvdXQvYWJvdXQnLFxuICAgICAgICAgIHRleHQ6ICflhbPkuo7miJEnLFxuICAgICAgICAgIGljb25QYXRoOiAnYXNzZXRzL2ltYWdlcy9hYm91dC5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdhc3NldHMvaW1hZ2VzL2Fib3V0LWFjdGl2ZS5wbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH07XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XG4gIH1cblxuICBvbkxhdW5jaCgpIHtcbiAgICB0aGlzLnRlc3RBc3luYygpO1xuICB9XG5cbiAgc2xlZXAocykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpO1xuICAgICAgfSwgcyAqIDEwMDApO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgdGVzdEFzeW5jKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oY2IpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvO1xuICAgIH1cbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mbztcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19