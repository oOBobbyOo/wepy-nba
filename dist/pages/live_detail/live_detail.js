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

var Live_detail = function (_wepy$page) {
  _inherits(Live_detail, _wepy$page);

  function Live_detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Live_detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Live_detail.__proto__ || Object.getPrototypeOf(Live_detail)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      list: {},
      content: [],
      schid: '',
      currentTab: 0, // tab切换
      technical: [],
      isShow: false
    }, _this.methods = {
      // 点击tab切换
      swichNav: function swichNav(e) {
        var that = this;
        that.getLiveContent(that.schid);
        if (e.target.dataset.current === 0) {
          that.getLiveContent(that.schid);
        }
        if (that.currentTab === e.target.dataset.current) {
          return false;
        } else {
          that.currentTab = e.target.dataset.current;
        }
      },

      // 滑动切换tab
      bindChange: function bindChange(e) {
        var that = this;
        that.currentTab = e.detail.current;
      },
      previewImage: function previewImage(e) {
        var url = e.target.dataset.url;
        wx.previewImage({
          current: url, // 当前显示图片的http链接
          urls: [url] // 需要预览的图片http链接列表
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Live_detail, [{
    key: 'getLiveContent',


    // 获取直播内容数据
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(schid) {
        var that, params, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                params = {
                  schid: schid
                };
                _context.next = 4;
                return (0, _api.live_content)(params);

              case 4:
                res = _context.sent;

                // setData
                that.content = res.data;
                that.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getLiveContent(_x) {
        return _ref2.apply(this, arguments);
      }

      return getLiveContent;
    }()
    // 获取比赛详情信息

  }, {
    key: 'getLiveDetail',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(schid, liveid) {
        var that, params, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                params = {
                  schid: schid,
                  liveid: liveid
                };
                _context2.next = 4;
                return (0, _api.live_detail)(params);

              case 4:
                res = _context2.sent;

                // setData
                that.list = res.data;
                that.$apply();
                wx.setNavigationBarTitle({
                  title: res.data.t1_name + ' VS ' + res.data.t2_name // 页面标题为路由参数
                });
                // 判断对象是否为空
                if (Object.keys(that.list).length === 0) {
                  that.isShow = false;
                } else {
                  that.isShow = true;
                }

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getLiveDetail(_x2, _x3) {
        return _ref3.apply(this, arguments);
      }

      return getLiveDetail;
    }()
    // 获取球员技术统计

  }, {
    key: 'getTechnicalStatistics',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(schid) {
        var that, params, res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = this;
                params = {
                  schid: schid
                };
                _context3.next = 4;
                return (0, _api.technical_statistics)(params);

              case 4:
                res = _context3.sent;

                // setData
                that.technical = res.data;
                that.$apply();

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getTechnicalStatistics(_x4) {
        return _ref4.apply(this, arguments);
      }

      return getTechnicalStatistics;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(e) {
      this.getLiveContent(e.schid); // 获取直播内容
      this.getLiveDetail(e.schid, e.liveid); // 获取直播室详情信息
      this.getTechnicalStatistics(e.schid); // 获取球员技术统计
      //setData
      this.schid = e.schid;
      this.liveid = e.liveid;
    }
  }]);

  return Live_detail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Live_detail , 'pages/live_detail/live_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpdmVfZGV0YWlsLmpzIl0sIm5hbWVzIjpbIkxpdmVfZGV0YWlsIiwiZGF0YSIsImxpc3QiLCJjb250ZW50Iiwic2NoaWQiLCJjdXJyZW50VGFiIiwidGVjaG5pY2FsIiwiaXNTaG93IiwibWV0aG9kcyIsInN3aWNoTmF2IiwiZSIsInRoYXQiLCJnZXRMaXZlQ29udGVudCIsInRhcmdldCIsImRhdGFzZXQiLCJjdXJyZW50IiwiYmluZENoYW5nZSIsImRldGFpbCIsInByZXZpZXdJbWFnZSIsInVybCIsInd4IiwidXJscyIsInBhcmFtcyIsInJlcyIsIiRhcHBseSIsImxpdmVpZCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwidDFfbmFtZSIsInQyX25hbWUiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiZ2V0TGl2ZURldGFpbCIsImdldFRlY2huaWNhbFN0YXRpc3RpY3MiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFNcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxlQUFTLEVBRko7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLGtCQUFZLENBSlAsRUFJVTtBQUNmQyxpQkFBVyxFQUxOO0FBTUxDLGNBQVE7QUFOSCxLLFFBU1BDLE8sR0FBVTtBQUNSO0FBQ0FDLGNBRlEsb0JBRUNDLENBRkQsRUFFSTtBQUNWLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLQyxjQUFMLENBQW9CRCxLQUFLUCxLQUF6QjtBQUNBLFlBQUlNLEVBQUVHLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsT0FBakIsS0FBNkIsQ0FBakMsRUFBb0M7QUFDbENKLGVBQUtDLGNBQUwsQ0FBb0JELEtBQUtQLEtBQXpCO0FBQ0Q7QUFDRCxZQUFJTyxLQUFLTixVQUFMLEtBQW9CSyxFQUFFRyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLE9BQXpDLEVBQWtEO0FBQ2hELGlCQUFPLEtBQVA7QUFDRCxTQUZELE1BRU87QUFDTEosZUFBS04sVUFBTCxHQUFrQkssRUFBRUcsTUFBRixDQUFTQyxPQUFULENBQWlCQyxPQUFuQztBQUNEO0FBQ0YsT0FiTzs7QUFjUjtBQUNBQyxnQkFmUSxzQkFlR04sQ0FmSCxFQWVNO0FBQ1osWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtOLFVBQUwsR0FBa0JLLEVBQUVPLE1BQUYsQ0FBU0YsT0FBM0I7QUFDRCxPQWxCTztBQW1CUkcsa0JBbkJRLHdCQW1CS1IsQ0FuQkwsRUFtQlE7QUFDZCxZQUFJUyxNQUFNVCxFQUFFRyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJLLEdBQTNCO0FBQ0FDLFdBQUdGLFlBQUgsQ0FBZ0I7QUFDZEgsbUJBQVNJLEdBREssRUFDQTtBQUNkRSxnQkFBTSxDQUFDRixHQUFELENBRlEsQ0FFRjtBQUZFLFNBQWhCO0FBSUQ7QUF6Qk8sSzs7Ozs7OztBQTRCVjs7MkZBQ3FCZixLOzs7Ozs7QUFDZk8sb0IsR0FBTyxJO0FBQ1BXLHNCLEdBQVM7QUFDWGxCLHlCQUFPQTtBQURJLGlCOzt1QkFHSyx1QkFBYWtCLE1BQWIsQzs7O0FBQVpDLG1COztBQUNOO0FBQ0FaLHFCQUFLUixPQUFMLEdBQWVvQixJQUFJdEIsSUFBbkI7QUFDQVUscUJBQUthLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRjs7Ozs7NEZBQ29CcEIsSyxFQUFPcUIsTTs7Ozs7O0FBQ3JCZCxvQixHQUFPLEk7QUFDUFcsc0IsR0FBUztBQUNYbEIseUJBQU9BLEtBREk7QUFFWHFCLDBCQUFRQTtBQUZHLGlCOzt1QkFJSyxzQkFBWUgsTUFBWixDOzs7QUFBWkMsbUI7O0FBQ047QUFDQVoscUJBQUtULElBQUwsR0FBWXFCLElBQUl0QixJQUFoQjtBQUNBVSxxQkFBS2EsTUFBTDtBQUNBSixtQkFBR00scUJBQUgsQ0FBeUI7QUFDdkJDLHlCQUFPSixJQUFJdEIsSUFBSixDQUFTMkIsT0FBVCxHQUFtQixNQUFuQixHQUE0QkwsSUFBSXRCLElBQUosQ0FBUzRCLE9BRHJCLENBQzZCO0FBRDdCLGlCQUF6QjtBQUdBO0FBQ0Esb0JBQUlDLE9BQU9DLElBQVAsQ0FBWXBCLEtBQUtULElBQWpCLEVBQXVCOEIsTUFBdkIsS0FBa0MsQ0FBdEMsRUFBeUM7QUFDdkNyQix1QkFBS0osTUFBTCxHQUFjLEtBQWQ7QUFDRCxpQkFGRCxNQUVPO0FBQ0xJLHVCQUFLSixNQUFMLEdBQWMsSUFBZDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUg7Ozs7OzRGQUM2QkgsSzs7Ozs7O0FBQ3ZCTyxvQixHQUFPLEk7QUFDUFcsc0IsR0FBUztBQUNYbEIseUJBQU9BO0FBREksaUI7O3VCQUdLLCtCQUFxQmtCLE1BQXJCLEM7OztBQUFaQyxtQjs7QUFDTjtBQUNBWixxQkFBS0wsU0FBTCxHQUFpQmlCLElBQUl0QixJQUFyQjtBQUNBVSxxQkFBS2EsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUdLZCxDLEVBQUc7QUFDUixXQUFLRSxjQUFMLENBQW9CRixFQUFFTixLQUF0QixFQURRLENBQ3NCO0FBQzlCLFdBQUs2QixhQUFMLENBQW1CdkIsRUFBRU4sS0FBckIsRUFBNEJNLEVBQUVlLE1BQTlCLEVBRlEsQ0FFK0I7QUFDdkMsV0FBS1Msc0JBQUwsQ0FBNEJ4QixFQUFFTixLQUE5QixFQUhRLENBRzhCO0FBQ3RDO0FBQ0EsV0FBS0EsS0FBTCxHQUFhTSxFQUFFTixLQUFmO0FBQ0EsV0FBS3FCLE1BQUwsR0FBY2YsRUFBRWUsTUFBaEI7QUFDRDs7OztFQXpGc0MsZUFBS1UsSTs7a0JBQXpCbkMsVyIsImZpbGUiOiJsaXZlX2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IHtcclxuICBsaXZlX2NvbnRlbnQsXHJcbiAgbGl2ZV9kZXRhaWwsXHJcbiAgdGVjaG5pY2FsX3N0YXRpc3RpY3NcclxufSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZV9kZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBsaXN0OiB7fSxcclxuICAgIGNvbnRlbnQ6IFtdLFxyXG4gICAgc2NoaWQ6ICcnLFxyXG4gICAgY3VycmVudFRhYjogMCwgLy8gdGFi5YiH5o2iXHJcbiAgICB0ZWNobmljYWw6IFtdLFxyXG4gICAgaXNTaG93OiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICAvLyDngrnlh7t0YWLliIfmjaJcclxuICAgIHN3aWNoTmF2KGUpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB0aGF0LmdldExpdmVDb250ZW50KHRoYXQuc2NoaWQpO1xyXG4gICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5jdXJyZW50ID09PSAwKSB7XHJcbiAgICAgICAgdGhhdC5nZXRMaXZlQ29udGVudCh0aGF0LnNjaGlkKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhhdC5jdXJyZW50VGFiID09PSBlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhhdC5jdXJyZW50VGFiID0gZS50YXJnZXQuZGF0YXNldC5jdXJyZW50O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g5ruR5Yqo5YiH5o2idGFiXHJcbiAgICBiaW5kQ2hhbmdlKGUpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB0aGF0LmN1cnJlbnRUYWIgPSBlLmRldGFpbC5jdXJyZW50O1xyXG4gICAgfSxcclxuICAgIHByZXZpZXdJbWFnZShlKSB7XHJcbiAgICAgIGxldCB1cmwgPSBlLnRhcmdldC5kYXRhc2V0LnVybDtcclxuICAgICAgd3gucHJldmlld0ltYWdlKHtcclxuICAgICAgICBjdXJyZW50OiB1cmwsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcclxuICAgICAgICB1cmxzOiBbdXJsXSAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIOiOt+WPluebtOaSreWGheWuueaVsOaNrlxyXG4gIGFzeW5jIGdldExpdmVDb250ZW50KHNjaGlkKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICBzY2hpZDogc2NoaWRcclxuICAgIH07XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBsaXZlX2NvbnRlbnQocGFyYW1zKTtcclxuICAgIC8vIHNldERhdGFcclxuICAgIHRoYXQuY29udGVudCA9IHJlcy5kYXRhO1xyXG4gICAgdGhhdC4kYXBwbHkoKTtcclxuICB9XHJcbiAgLy8g6I635Y+W5q+U6LWb6K+m5oOF5L+h5oGvXHJcbiAgYXN5bmMgZ2V0TGl2ZURldGFpbChzY2hpZCwgbGl2ZWlkKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICBzY2hpZDogc2NoaWQsXHJcbiAgICAgIGxpdmVpZDogbGl2ZWlkXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgbGl2ZV9kZXRhaWwocGFyYW1zKTtcclxuICAgIC8vIHNldERhdGFcclxuICAgIHRoYXQubGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgdGhhdC4kYXBwbHkoKTtcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgIHRpdGxlOiByZXMuZGF0YS50MV9uYW1lICsgJyBWUyAnICsgcmVzLmRhdGEudDJfbmFtZSAvLyDpobXpnaLmoIfpopjkuLrot6/nlLHlj4LmlbBcclxuICAgIH0pO1xyXG4gICAgLy8g5Yik5pat5a+56LGh5piv5ZCm5Li656m6XHJcbiAgICBpZiAoT2JqZWN0LmtleXModGhhdC5saXN0KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhhdC5pc1Nob3cgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoYXQuaXNTaG93ID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8g6I635Y+W55CD5ZGY5oqA5pyv57uf6K6hXHJcbiAgYXN5bmMgZ2V0VGVjaG5pY2FsU3RhdGlzdGljcyhzY2hpZCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgc2NoaWQ6IHNjaGlkXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGVjaG5pY2FsX3N0YXRpc3RpY3MocGFyYW1zKTtcclxuICAgIC8vIHNldERhdGFcclxuICAgIHRoYXQudGVjaG5pY2FsID0gcmVzLmRhdGE7XHJcbiAgICB0aGF0LiRhcHBseSgpO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkKGUpIHtcclxuICAgIHRoaXMuZ2V0TGl2ZUNvbnRlbnQoZS5zY2hpZCk7IC8vIOiOt+WPluebtOaSreWGheWuuVxyXG4gICAgdGhpcy5nZXRMaXZlRGV0YWlsKGUuc2NoaWQsIGUubGl2ZWlkKTsgLy8g6I635Y+W55u05pKt5a6k6K+m5oOF5L+h5oGvXHJcbiAgICB0aGlzLmdldFRlY2huaWNhbFN0YXRpc3RpY3MoZS5zY2hpZCk7IC8vIOiOt+WPlueQg+WRmOaKgOacr+e7n+iuoVxyXG4gICAgLy9zZXREYXRhXHJcbiAgICB0aGlzLnNjaGlkID0gZS5zY2hpZDtcclxuICAgIHRoaXMubGl2ZWlkID0gZS5saXZlaWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==