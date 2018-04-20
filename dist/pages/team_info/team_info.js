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

var Team_Info = function (_wepy$page) {
  _inherits(Team_Info, _wepy$page);

  function Team_Info() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Team_Info);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Team_Info.__proto__ || Object.getPrototypeOf(Team_Info)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      array: [{
        value: '1',
        text: '1月份'
      }, {
        value: '2',
        text: '2月份'
      }, {
        value: '3',
        text: '3月份'
      }, {
        value: '4',
        text: '4月份'
      }, {
        value: '5',
        text: '5月份'
      }, {
        value: '6',
        text: '6月份'
      }, {
        value: '7',
        text: '7月份'
      }, {
        value: '8',
        text: '8月份'
      }, {
        value: '9',
        text: '9月份'
      }, {
        value: '10',
        text: '10月份'
      }, {
        value: '11',
        text: '11月份'
      }, {
        value: '12',
        text: '12月份'
      }],
      month: '',
      monthText: '',
      item: [],
      teamId: 24,
      schedule: [],
      playerList: [],
      currentTab: 0 // tab切换
    }, _this.methods = {
      // 点击tab切换
      swichNav: function swichNav(e) {
        var that = this;
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

      // 月份赛程选择
      bindPickerChange: function bindPickerChange(e) {
        var that = this;
        that.mouth = that.array[e.detail.value]['value'];
        that.monthText = that.array[e.detail.value]['text'];
        that.getTeamSchedule(parseInt(that.array[e.detail.value]['value']));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Team_Info, [{
    key: 'getTeamInfo',


    // 球队信息
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(teamId) {
        var that, params, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                params = {
                  teamId: teamId
                };
                _context.next = 4;
                return (0, _api.team_info)(params);

              case 4:
                res = _context.sent;

                // setData
                that.item = res.data;
                // 设置title
                wx.setNavigationBarTitle({
                  title: res.data.cnname // 页面标题为路由参数
                });
                that.$apply();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTeamInfo(_x) {
        return _ref2.apply(this, arguments);
      }

      return getTeamInfo;
    }()
    // 球队阵容

  }, {
    key: 'getLineup',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(teamId) {
        var that, params, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                params = {
                  teamId: teamId
                };
                _context2.next = 4;
                return (0, _api.Lineup)(params);

              case 4:
                res = _context2.sent;

                // setData
                that.playerList = res.data;
                that.$apply();

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getLineup(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getLineup;
    }()
    // 球队赛程

  }, {
    key: 'getTeamSchedule',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(m) {
        var that, params, res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = this;
                params = {
                  teamId: parseInt(that.teamId),
                  mouth: m
                };

                console.log(params);
                _context3.next = 5;
                return (0, _api.team_schedule)(params);

              case 5:
                res = _context3.sent;

                // setData
                that.schedule = res.data;
                that.$apply();

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getTeamSchedule(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getTeamSchedule;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(e) {
      this.month = new Date().getMonth() + 1; // 获取当前月份当角标、0开始;
      this.teamId = e.teamId;
      this.monthText = this.array[this.month - 1]['text'];

      this.getTeamInfo(e.teamId); // 球队信息
      this.getLineup(e.teamId); // 球队阵容
      this.getTeamSchedule(this.month); // 球队赛程
    }
  }]);

  return Team_Info;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Team_Info , 'pages/team_info/team_info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW1faW5mby5qcyJdLCJuYW1lcyI6WyJUZWFtX0luZm8iLCJkYXRhIiwiYXJyYXkiLCJ2YWx1ZSIsInRleHQiLCJtb250aCIsIm1vbnRoVGV4dCIsIml0ZW0iLCJ0ZWFtSWQiLCJzY2hlZHVsZSIsInBsYXllckxpc3QiLCJjdXJyZW50VGFiIiwibWV0aG9kcyIsInN3aWNoTmF2IiwiZSIsInRoYXQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY3VycmVudCIsImJpbmRDaGFuZ2UiLCJkZXRhaWwiLCJiaW5kUGlja2VyQ2hhbmdlIiwibW91dGgiLCJnZXRUZWFtU2NoZWR1bGUiLCJwYXJzZUludCIsInBhcmFtcyIsInJlcyIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJjbm5hbWUiLCIkYXBwbHkiLCJtIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJnZXRNb250aCIsImdldFRlYW1JbmZvIiwiZ2V0TGluZXVwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEksR0FBTztBQUNMQyxhQUFPLENBQ0w7QUFDRUMsZUFBTyxHQURUO0FBRUVDLGNBQU07QUFGUixPQURLLEVBS0w7QUFDRUQsZUFBTyxHQURUO0FBRUVDLGNBQU07QUFGUixPQUxLLEVBU0w7QUFDRUQsZUFBTyxHQURUO0FBRUVDLGNBQU07QUFGUixPQVRLLEVBYUw7QUFDRUQsZUFBTyxHQURUO0FBRUVDLGNBQU07QUFGUixPQWJLLEVBaUJMO0FBQ0VELGVBQU8sR0FEVDtBQUVFQyxjQUFNO0FBRlIsT0FqQkssRUFxQkw7QUFDRUQsZUFBTyxHQURUO0FBRUVDLGNBQU07QUFGUixPQXJCSyxFQXlCTDtBQUNFRCxlQUFPLEdBRFQ7QUFFRUMsY0FBTTtBQUZSLE9BekJLLEVBNkJMO0FBQ0VELGVBQU8sR0FEVDtBQUVFQyxjQUFNO0FBRlIsT0E3QkssRUFpQ0w7QUFDRUQsZUFBTyxH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QztBQUN4QyxXQUFLNUIsTUFBTCxHQUFjTSxFQUFFTixNQUFoQjtBQUNBLFdBQUtGLFNBQUwsR0FBaUIsS0FBS0osS0FBTCxDQUFXLEtBQUtHLEtBQUwsR0FBYSxDQUF4QixFQUEyQixNQUEzQixDQUFqQjs7QUFFQSxXQUFLZ0MsV0FBTCxDQUFpQnZCLEVBQUVOLE1BQW5CLEVBTFEsQ0FLb0I7QUFDNUIsV0FBSzhCLFNBQUwsQ0FBZXhCLEVBQUVOLE1BQWpCLEVBTlEsQ0FNa0I7QUFDMUIsV0FBS2UsZUFBTCxDQUFxQixLQUFLbEIsS0FBMUIsRUFQUSxDQU8wQjtBQUNuQzs7OztFQXJJb0MsZUFBS2tDLEk7O2tCQUF2QnZDLFMiLCJmaWxlIjoidGVhbV9pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgeyB0ZWFtX2luZm8sIExpbmV1cCwgdGVhbV9zY2hlZHVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFtX0luZm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBhcnJheTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWU6ICcxJyxcclxuICAgICAgICB0ZXh0OiAnMeaciOS7vSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlOiAnMicsXHJcbiAgICAgICAgdGV4dDogJzLmnIjku70nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZTogJzMnLFxyXG4gICAgICAgIHRleHQ6ICcz5pyI5Lu9J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWU6ICc0JyxcclxuICAgICAgICB0ZXh0OiAnNOaciOS7vSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlOiAnNScsXHJcbiAgICAgICAgdGV4dDogJzXmnIjku70nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZTogJzYnLFxyXG4gICAgICAgIHRleHQ6ICc25pyI5Lu9J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWU6ICc3JyxcclxuICAgICAgICB0ZXh0OiAnN+aciOS7vSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlOiAnOCcsXHJcbiAgICAgICAgdGV4dDogJzjmnIjku70nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZTogJzknLFxyXG4gICAgICAgIHRleHQ6ICc55pyI5Lu9J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWU6ICcxMCcsXHJcbiAgICAgICAgdGV4dDogJzEw5pyI5Lu9J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWU6ICcxMScsXHJcbiAgICAgICAgdGV4dDogJzEx5pyI5Lu9J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWU6ICcxMicsXHJcbiAgICAgICAgdGV4dDogJzEy5pyI5Lu9J1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgbW9udGg6ICcnLFxyXG4gICAgbW9udGhUZXh0OiAnJyxcclxuICAgIGl0ZW06IFtdLFxyXG4gICAgdGVhbUlkOiAyNCxcclxuICAgIHNjaGVkdWxlOiBbXSxcclxuICAgIHBsYXllckxpc3Q6IFtdLFxyXG4gICAgY3VycmVudFRhYjogMCAvLyB0YWLliIfmjaJcclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgLy8g54K55Ye7dGFi5YiH5o2iXHJcbiAgICBzd2ljaE5hdihlKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgaWYgKHRoYXQuY3VycmVudFRhYiA9PT0gZS50YXJnZXQuZGF0YXNldC5jdXJyZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoYXQuY3VycmVudFRhYiA9IGUudGFyZ2V0LmRhdGFzZXQuY3VycmVudDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOa7keWKqOWIh+aNonRhYlxyXG4gICAgYmluZENoYW5nZShlKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgdGhhdC5jdXJyZW50VGFiID0gZS5kZXRhaWwuY3VycmVudDtcclxuICAgIH0sXHJcbiAgICAvLyDmnIjku73otZvnqIvpgInmi6lcclxuICAgIGJpbmRQaWNrZXJDaGFuZ2UoZSkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHRoYXQubW91dGggPSB0aGF0LmFycmF5W2UuZGV0YWlsLnZhbHVlXVsndmFsdWUnXTtcclxuICAgICAgdGhhdC5tb250aFRleHQgPSB0aGF0LmFycmF5W2UuZGV0YWlsLnZhbHVlXVsndGV4dCddO1xyXG4gICAgICB0aGF0LmdldFRlYW1TY2hlZHVsZShwYXJzZUludCh0aGF0LmFycmF5W2UuZGV0YWlsLnZhbHVlXVsndmFsdWUnXSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIOeQg+mYn+S/oeaBr1xyXG4gIGFzeW5jIGdldFRlYW1JbmZvKHRlYW1JZCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgdGVhbUlkOiB0ZWFtSWRcclxuICAgIH07XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0ZWFtX2luZm8ocGFyYW1zKTtcclxuICAgIC8vIHNldERhdGFcclxuICAgIHRoYXQuaXRlbSA9IHJlcy5kYXRhO1xyXG4gICAgLy8g6K6+572udGl0bGVcclxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgIHRpdGxlOiByZXMuZGF0YS5jbm5hbWUgLy8g6aG16Z2i5qCH6aKY5Li66Lev55Sx5Y+C5pWwXHJcbiAgICB9KTtcclxuICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgfVxyXG4gIC8vIOeQg+mYn+mYteWuuVxyXG4gIGFzeW5jIGdldExpbmV1cCh0ZWFtSWQpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgIHRlYW1JZDogdGVhbUlkXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgTGluZXVwKHBhcmFtcyk7XHJcbiAgICAvLyBzZXREYXRhXHJcbiAgICB0aGF0LnBsYXllckxpc3QgPSByZXMuZGF0YTtcclxuICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgfVxyXG4gIC8vIOeQg+mYn+i1m+eoi1xyXG4gIGFzeW5jIGdldFRlYW1TY2hlZHVsZShtKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICB0ZWFtSWQ6IHBhcnNlSW50KHRoYXQudGVhbUlkKSxcclxuICAgICAgbW91dGg6IG1cclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGVhbV9zY2hlZHVsZShwYXJhbXMpO1xyXG4gICAgLy8gc2V0RGF0YVxyXG4gICAgdGhhdC5zY2hlZHVsZSA9IHJlcy5kYXRhO1xyXG4gICAgdGhhdC4kYXBwbHkoKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZChlKSB7XHJcbiAgICB0aGlzLm1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpICsgMTsgLy8g6I635Y+W5b2T5YmN5pyI5Lu95b2T6KeS5qCH44CBMOW8gOWniztcclxuICAgIHRoaXMudGVhbUlkID0gZS50ZWFtSWQ7XHJcbiAgICB0aGlzLm1vbnRoVGV4dCA9IHRoaXMuYXJyYXlbdGhpcy5tb250aCAtIDFdWyd0ZXh0J107XHJcblxyXG4gICAgdGhpcy5nZXRUZWFtSW5mbyhlLnRlYW1JZCk7IC8vIOeQg+mYn+S/oeaBr1xyXG4gICAgdGhpcy5nZXRMaW5ldXAoZS50ZWFtSWQpOyAvLyDnkIPpmJ/pmLXlrrlcclxuICAgIHRoaXMuZ2V0VGVhbVNjaGVkdWxlKHRoaXMubW9udGgpOyAvLyDnkIPpmJ/otZvnqItcclxuICB9XHJcbn1cclxuIl19