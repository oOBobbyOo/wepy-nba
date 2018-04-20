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

var About = function (_wepy$page) {
  _inherits(About, _wepy$page);

  function About() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = About.__proto__ || Object.getPrototypeOf(About)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '关于我'
    }, _this.data = {
      item: [],
      isPlay: false,
      playState: null,
      currentPosition: 0,
      duration: 0,
      musicTime: '00:00',
      timer: null
    }, _this.methods = {
      previewImage: function previewImage(e) {
        var url = e.target.dataset.url;
        wx.previewImage({
          current: url, // 当前显示图片的http链接
          urls: [url] // 需要预览的图片http链接列表
        });
      },
      openMap: function openMap() {
        wx.getLocation({
          type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
          success: function success(res) {
            wx.openLocation({
              latitude: 22.54999, // 纬度，范围为-90~90，负数表示南纬
              longitude: 113.95066, // 经度，范围为-180~180，负数表示西经
              scale: 28 // 缩放比例
            });
          }
        });
      },
      playMusic: function playMusic() {
        clearInterval(this.timer);
        this.timer = null;
        this.isPlay = !this.isPlay;
        if (this.isPlay) {
          // 播放音乐
          wx.playBackgroundAudio({
            dataUrl: this.item.music.src,
            title: this.item.music.name,
            coverImgUrl: this.item.music.poster
          });
          this.getTime();
        } else {
          // 暂停播放音乐
          wx.pauseBackgroundAudio();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(About, [{
    key: 'getTime',
    value: function getTime() {
      var that = this;
      var timer = setInterval(function () {
        // 获取后台音乐播放状态
        wx.getBackgroundAudioPlayerState({
          success: function success(res) {
            that.playState = res;
            that.musicTime = that.secondToDate(res.duration);
            that.$apply();
          }
        });
      }, 300);

      that.timer = timer;
    }
  }, {
    key: 'secondToDate',
    value: function secondToDate(result) {
      var m = Math.floor(result / 60 % 60);
      var s = Math.floor(result % 60);
      if (s < 10) {
        s = '0' + s;
      }
      return result = m + ':' + s;
    }
  }, {
    key: 'getwebsite',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                _context.next = 3;
                return (0, _api.website)({});

              case 3:
                res = _context.sent;

                // setData
                that.item = res.data;
                that.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getwebsite() {
        return _ref2.apply(this, arguments);
      }

      return getwebsite;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getwebsite();
    }
    /**
     * 生命周期函数--监听页面初次渲染完成
     */

  }, {
    key: 'onReady',
    value: function onReady() {
      var _this2 = this;

      var that = this;
      // 监听音乐播放
      wx.onBackgroundAudioPlay(function () {
        console.log('监听音乐播放');
      });
      // 监听音乐停止
      wx.onBackgroundAudioStop(function (res) {
        clearInterval(_this2.timer);
        _this2.isPlay = false;
        _this2.timer = null;
        console.log('监听音乐停止', res);
      });
      // 监听音乐暂停
      wx.onBackgroundAudioPause(function (res) {
        clearInterval(_this2.timer);
        _this2.isPlay = false;
        _this2.timer = null;
        console.log('监听音乐暂停', res);
      });
    }
  }]);

  return About;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(About , 'pages/about/about'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmpzIl0sIm5hbWVzIjpbIkFib3V0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpdGVtIiwiaXNQbGF5IiwicGxheVN0YXRlIiwiY3VycmVudFBvc2l0aW9uIiwiZHVyYXRpb24iLCJtdXNpY1RpbWUiLCJ0aW1lciIsIm1ldGhvZHMiLCJwcmV2aWV3SW1hZ2UiLCJlIiwidXJsIiwidGFyZ2V0IiwiZGF0YXNldCIsInd4IiwiY3VycmVudCIsInVybHMiLCJvcGVuTWFwIiwiZ2V0TG9jYXRpb24iLCJ0eXBlIiwic3VjY2VzcyIsIm9wZW5Mb2NhdGlvbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwic2NhbGUiLCJwbGF5TXVzaWMiLCJjbGVhckludGVydmFsIiwicGxheUJhY2tncm91bmRBdWRpbyIsImRhdGFVcmwiLCJtdXNpYyIsInNyYyIsInRpdGxlIiwibmFtZSIsImNvdmVySW1nVXJsIiwicG9zdGVyIiwiZ2V0VGltZSIsInBhdXNlQmFja2dyb3VuZEF1ZGlvIiwidGhhdCIsInNldEludGVydmFsIiwiZ2V0QmFja2dyb3VuZEF1ZGlvUGxheWVyU3RhdGUiLCJyZXMiLCJzZWNvbmRUb0RhdGUiLCIkYXBwbHkiLCJyZXN1bHQiLCJtIiwiTWF0aCIsImZsb29yIiwicyIsImdldHdlYnNpdGUiLCJvbkJhY2tncm91bmRBdWRpb1BsYXkiLCJjb25zb2xlIiwibG9nIiwib25CYWNrZ3JvdW5kQXVkaW9TdG9wIiwib25CYWNrZ3JvdW5kQXVkaW9QYXVzZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxjQUFRLEtBRkg7QUFHTEMsaUJBQVcsSUFITjtBQUlMQyx1QkFBaUIsQ0FKWjtBQUtMQyxnQkFBVSxD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QXRCO0FBQ0QsT0FMRDtBQU1BO0FBQ0ExQixTQUFHdUMsc0JBQUgsQ0FBMEIsZUFBTztBQUMvQjNCLHNCQUFjLE9BQUtuQixLQUFuQjtBQUNBLGVBQUtMLE1BQUwsR0FBYyxLQUFkO0FBQ0EsZUFBS0ssS0FBTCxHQUFhLElBQWI7QUFDQTJDLGdCQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQlgsR0FBdEI7QUFDRCxPQUxEO0FBTUQ7Ozs7RUFuSGdDLGVBQUtjLEk7O2tCQUFuQnpELEsiLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCB7IHdlYnNpdGUgfSBmcm9tICcuLi8uLi91dGlscy9hcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflhbPkuo7miJEnXHJcbiAgfTtcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGl0ZW06IFtdLFxyXG4gICAgaXNQbGF5OiBmYWxzZSxcclxuICAgIHBsYXlTdGF0ZTogbnVsbCxcclxuICAgIGN1cnJlbnRQb3NpdGlvbjogMCxcclxuICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgbXVzaWNUaW1lOiAnMDA6MDAnLFxyXG4gICAgdGltZXI6IG51bGxcclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgcHJldmlld0ltYWdlKGUpIHtcclxuICAgICAgbGV0IHVybCA9IGUudGFyZ2V0LmRhdGFzZXQudXJsO1xyXG4gICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgIGN1cnJlbnQ6IHVybCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxyXG4gICAgICAgIHVybHM6IFt1cmxdIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb3Blbk1hcCgpIHtcclxuICAgICAgd3guZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICdnY2owMicsIC8vIOm7mOiupOS4uiB3Z3M4NCDov5Tlm54gZ3BzIOWdkOagh++8jGdjajAyIOi/lOWbnuWPr+eUqOS6jiB3eC5vcGVuTG9jYXRpb24g55qE5Z2Q5qCHXHJcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgIHd4Lm9wZW5Mb2NhdGlvbih7XHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiAyMi41NDk5OSwgLy8g57qs5bqm77yM6IyD5Zu05Li6LTkwfjkw77yM6LSf5pWw6KGo56S65Y2X57qsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogMTEzLjk1MDY2LCAvLyDnu4/luqbvvIzojIPlm7TkuLotMTgwfjE4MO+8jOi0n+aVsOihqOekuuilv+e7j1xyXG4gICAgICAgICAgICBzY2FsZTogMjggLy8g57yp5pS+5q+U5L6LXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5TXVzaWMoKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICAgIHRoaXMudGltZXIgPSBudWxsO1xyXG4gICAgICB0aGlzLmlzUGxheSA9ICF0aGlzLmlzUGxheTtcclxuICAgICAgaWYgKHRoaXMuaXNQbGF5KSB7XHJcbiAgICAgICAgLy8g5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgd3gucGxheUJhY2tncm91bmRBdWRpbyh7XHJcbiAgICAgICAgICBkYXRhVXJsOiB0aGlzLml0ZW0ubXVzaWMuc3JjLFxyXG4gICAgICAgICAgdGl0bGU6IHRoaXMuaXRlbS5tdXNpYy5uYW1lLFxyXG4gICAgICAgICAgY292ZXJJbWdVcmw6IHRoaXMuaXRlbS5tdXNpYy5wb3N0ZXJcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdldFRpbWUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyDmmoLlgZzmkq3mlL7pn7PkuZBcclxuICAgICAgICB3eC5wYXVzZUJhY2tncm91bmRBdWRpbygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZ2V0VGltZSgpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyDojrflj5blkI7lj7Dpn7PkuZDmkq3mlL7nirbmgIFcclxuICAgICAgd3guZ2V0QmFja2dyb3VuZEF1ZGlvUGxheWVyU3RhdGUoe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGF0LnBsYXlTdGF0ZSA9IHJlcztcclxuICAgICAgICAgIHRoYXQubXVzaWNUaW1lID0gdGhhdC5zZWNvbmRUb0RhdGUocmVzLmR1cmF0aW9uKTtcclxuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgdGhhdC50aW1lciA9IHRpbWVyO1xyXG4gIH1cclxuXHJcbiAgc2Vjb25kVG9EYXRlKHJlc3VsdCkge1xyXG4gICAgbGV0IG0gPSBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCkgJSA2MCk7XHJcbiAgICBsZXQgcyA9IE1hdGguZmxvb3IocmVzdWx0ICUgNjApO1xyXG4gICAgaWYgKHMgPCAxMCkge1xyXG4gICAgICBzID0gJzAnICsgcztcclxuICAgIH1cclxuICAgIHJldHVybiAocmVzdWx0ID0gbSArICc6JyArIHMpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0d2Vic2l0ZSgpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCB3ZWJzaXRlKHt9KTtcclxuICAgIC8vIHNldERhdGFcclxuICAgIHRoYXQuaXRlbSA9IHJlcy5kYXRhO1xyXG4gICAgdGhhdC4kYXBwbHkoKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuZ2V0d2Vic2l0ZSgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAvLyDnm5HlkKzpn7PkuZDmkq3mlL5cclxuICAgIHd4Lm9uQmFja2dyb3VuZEF1ZGlvUGxheSgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfnm5HlkKzpn7PkuZDmkq3mlL4nKTtcclxuICAgIH0pO1xyXG4gICAgLy8g55uR5ZCs6Z+z5LmQ5YGc5q2iXHJcbiAgICB3eC5vbkJhY2tncm91bmRBdWRpb1N0b3AocmVzID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgdGhpcy5pc1BsYXkgPSBmYWxzZTtcclxuICAgICAgdGhpcy50aW1lciA9IG51bGw7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfnm5HlkKzpn7PkuZDlgZzmraInLCByZXMpO1xyXG4gICAgfSk7XHJcbiAgICAvLyDnm5HlkKzpn7PkuZDmmoLlgZxcclxuICAgIHd4Lm9uQmFja2dyb3VuZEF1ZGlvUGF1c2UocmVzID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgdGhpcy5pc1BsYXkgPSBmYWxzZTtcclxuICAgICAgdGhpcy50aW1lciA9IG51bGw7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfnm5HlkKzpn7PkuZDmmoLlgZwnLCByZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==