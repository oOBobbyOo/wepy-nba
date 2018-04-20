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

var News_list = function (_wepy$page) {
  _inherits(News_list, _wepy$page);

  function News_list() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, News_list);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = News_list.__proto__ || Object.getPrototypeOf(News_list)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'NBA资讯'
    }, _this.data = {
      page: 0,
      isShow: false,
      list: []
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(News_list, [{
    key: 'getNewsList',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page) {
        var that, data, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                data = {
                  page: page
                };
                _context.next = 4;
                return (0, _api.news_list)(data);

              case 4:
                res = _context.sent;

                // setData
                that.isShow = true;
                that.list = that.list.concat(res.data);
                that.$apply();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getNewsList(_x) {
        return _ref2.apply(this, arguments);
      }

      return getNewsList;
    }()
    /**
     * 生命周期函数--监听页面加载
     */

  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getNewsList(0);
    }
    /**
     * 页面上拉触底事件的处理函数
     */

  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      var that = this;
      that.page += 1;
      console.log(that.page);
      this.getNewsList(that.page);
    }
  }]);

  return News_list;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(News_list , 'pages/news_list/news_list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3NfbGlzdC5qcyJdLCJuYW1lcyI6WyJOZXdzX2xpc3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBhZ2UiLCJpc1Nob3ciLCJsaXN0IiwibWV0aG9kcyIsInRoYXQiLCJyZXMiLCJjb25jYXQiLCIkYXBwbHkiLCJnZXROZXdzTGlzdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FERDtBQUVMQyxjQUFRLEtBRkg7QUFHTEMsWUFBTTtBQUhELEssUUFNUEMsTyxHQUFVLEU7Ozs7OzsyRkFFUUgsSTs7Ozs7O0FBQ1pJLG9CLEdBQU8sSTtBQUNQTCxvQixHQUFPO0FBQ1RDLHdCQUFNQTtBQURHLGlCOzt1QkFJTyxvQkFBVUQsSUFBVixDOzs7QUFBWk0sbUI7O0FBQ047QUFDQUQscUJBQUtILE1BQUwsR0FBYyxJQUFkO0FBQ0FHLHFCQUFLRixJQUFMLEdBQVlFLEtBQUtGLElBQUwsQ0FBVUksTUFBVixDQUFpQkQsSUFBSU4sSUFBckIsQ0FBWjtBQUNBSyxxQkFBS0csTUFBTDs7Ozs7Ozs7Ozs7Ozs7OztBQUVGOzs7Ozs7NkJBR1M7QUFDUCxXQUFLQyxXQUFMLENBQWlCLENBQWpCO0FBQ0Q7QUFDRDs7Ozs7O29DQUdnQjtBQUNkLFVBQUlKLE9BQU8sSUFBWDtBQUNBQSxXQUFLSixJQUFMLElBQWEsQ0FBYjtBQUNBUyxjQUFRQyxHQUFSLENBQVlOLEtBQUtKLElBQWpCO0FBQ0EsV0FBS1EsV0FBTCxDQUFpQkosS0FBS0osSUFBdEI7QUFDRDs7OztFQXZDb0MsZUFBS0EsSTs7a0JBQXZCSixTIiwiZmlsZSI6Im5ld3NfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IHsgbmV3c19saXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3NfbGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ05CQei1hOiurydcclxuICB9O1xyXG5cclxuICBkYXRhID0ge1xyXG4gICAgcGFnZTogMCxcclxuICAgIGlzU2hvdzogZmFsc2UsXHJcbiAgICBsaXN0OiBbXVxyXG4gIH07XHJcblxyXG4gIG1ldGhvZHMgPSB7fTtcclxuXHJcbiAgYXN5bmMgZ2V0TmV3c0xpc3QocGFnZSkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIHBhZ2U6IHBhZ2VcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgbmV3c19saXN0KGRhdGEpO1xyXG4gICAgLy8gc2V0RGF0YVxyXG4gICAgdGhhdC5pc1Nob3cgPSB0cnVlO1xyXG4gICAgdGhhdC5saXN0ID0gdGhhdC5saXN0LmNvbmNhdChyZXMuZGF0YSk7XHJcbiAgICB0aGF0LiRhcHBseSgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuZ2V0TmV3c0xpc3QoMCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB0aGF0LnBhZ2UgKz0gMTtcclxuICAgIGNvbnNvbGUubG9nKHRoYXQucGFnZSk7XHJcbiAgICB0aGlzLmdldE5ld3NMaXN0KHRoYXQucGFnZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==