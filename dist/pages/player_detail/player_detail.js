'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../utils/api.js');

var _toFixed = require('./../../utils/toFixed.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Play_detail = function (_wepy$page) {
  _inherits(Play_detail, _wepy$page);

  function Play_detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Play_detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Play_detail.__proto__ || Object.getPrototypeOf(Play_detail)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      list: []
    }, _this.methods = {}, _this.computed = {
      fgPCT: function fgPCT() {
        var fgPCT = (0, _toFixed.toFixed)(this.list.fgPCT);
        return fgPCT;
      },
      threesPCT: function threesPCT() {
        var threesPCT = (0, _toFixed.toFixed)(this.list.threesPCT);
        return threesPCT;
      },
      ftPCT: function ftPCT() {
        var ftPCT = (0, _toFixed.toFixed)(this.list.ftPCT);
        return ftPCT;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Play_detail, [{
    key: 'getPlayDetail',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(playerid) {
        var that, params, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                params = {
                  playerid: playerid
                };
                _context.next = 4;
                return (0, _api.player_detail)(params);

              case 4:
                res = _context.sent;

                // setData
                that.list = res.data;
                wx.setNavigationBarTitle({
                  title: res.data.cnname //球员姓名
                });
                that.$apply();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPlayDetail(_x) {
        return _ref2.apply(this, arguments);
      }

      return getPlayDetail;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(e) {
      var playerid = e.id || '5292';
      this.getPlayDetail(playerid);
    }
  }]);

  return Play_detail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Play_detail , 'pages/player_detail/player_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcl9kZXRhaWwuanMiXSwibmFtZXMiOlsiUGxheV9kZXRhaWwiLCJkYXRhIiwibGlzdCIsIm1ldGhvZHMiLCJjb21wdXRlZCIsImZnUENUIiwidGhyZWVzUENUIiwiZnRQQ1QiLCJwbGF5ZXJpZCIsInRoYXQiLCJwYXJhbXMiLCJyZXMiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwiY25uYW1lIiwiJGFwcGx5IiwiZSIsImlkIiwiZ2V0UGxheURldGFpbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxJLEdBQU87QUFDTEMsWUFBTTtBQURELEssUUFJUEMsTyxHQUFVLEUsUUFFVkMsUSxHQUFXO0FBQ1RDLFdBRFMsbUJBQ0Q7QUFDTixZQUFJQSxRQUFRLHNCQUFRLEtBQUtILElBQUwsQ0FBVUcsS0FBbEIsQ0FBWjtBQUNBLGVBQU9BLEtBQVA7QUFDRCxPQUpRO0FBS1RDLGVBTFMsdUJBS0c7QUFDVixZQUFJQSxZQUFZLHNCQUFRLEtBQUtKLElBQUwsQ0FBVUksU0FBbEIsQ0FBaEI7QUFDQSxlQUFPQSxTQUFQO0FBQ0QsT0FSUTtBQVNUQyxXQVRTLG1CQVNEO0FBQ04sWUFBSUEsUUFBUSxzQkFBUSxLQUFLTCxJQUFMLENBQVVLLEtBQWxCLENBQVo7QUFDQSxlQUFPQSxLQUFQO0FBQ0Q7QUFaUSxLOzs7Ozs7MkZBZVNDLFE7Ozs7OztBQUNkQyxvQixHQUFPLEk7QUFDUEMsc0IsR0FBUztBQUNYRiw0QkFBVUE7QUFEQyxpQjs7dUJBR0ssd0JBQWNFLE1BQWQsQzs7O0FBQVpDLG1COztBQUNOO0FBQ0FGLHFCQUFLUCxJQUFMLEdBQVlTLElBQUlWLElBQWhCO0FBQ0FXLG1CQUFHQyxxQkFBSCxDQUF5QjtBQUN2QkMseUJBQU9ILElBQUlWLElBQUosQ0FBU2MsTUFETyxDQUNBO0FBREEsaUJBQXpCO0FBR0FOLHFCQUFLTyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBR0tDLEMsRUFBRztBQUNSLFVBQUlULFdBQVdTLEVBQUVDLEVBQUYsSUFBUSxNQUF2QjtBQUNBLFdBQUtDLGFBQUwsQ0FBbUJYLFFBQW5CO0FBQ0Q7Ozs7RUF2Q3NDLGVBQUtZLEk7O2tCQUF6QnBCLFciLCJmaWxlIjoicGxheWVyX2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IHsgcGxheWVyX2RldGFpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XHJcbmltcG9ydCB7IHRvRml4ZWQgfSBmcm9tICcuLi8uLi91dGlscy90b0ZpeGVkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlfZGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBkYXRhID0ge1xyXG4gICAgbGlzdDogW11cclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge307XHJcblxyXG4gIGNvbXB1dGVkID0ge1xyXG4gICAgZmdQQ1QoKSB7XHJcbiAgICAgIGxldCBmZ1BDVCA9IHRvRml4ZWQodGhpcy5saXN0LmZnUENUKTtcclxuICAgICAgcmV0dXJuIGZnUENUO1xyXG4gICAgfSxcclxuICAgIHRocmVlc1BDVCgpIHtcclxuICAgICAgbGV0IHRocmVlc1BDVCA9IHRvRml4ZWQodGhpcy5saXN0LnRocmVlc1BDVCk7XHJcbiAgICAgIHJldHVybiB0aHJlZXNQQ1Q7XHJcbiAgICB9LFxyXG4gICAgZnRQQ1QoKSB7XHJcbiAgICAgIGxldCBmdFBDVCA9IHRvRml4ZWQodGhpcy5saXN0LmZ0UENUKTtcclxuICAgICAgcmV0dXJuIGZ0UENUO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGFzeW5jIGdldFBsYXlEZXRhaWwocGxheWVyaWQpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgIHBsYXllcmlkOiBwbGF5ZXJpZFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBsYXllcl9kZXRhaWwocGFyYW1zKTtcclxuICAgIC8vIHNldERhdGFcclxuICAgIHRoYXQubGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgdGl0bGU6IHJlcy5kYXRhLmNubmFtZSAvL+eQg+WRmOWnk+WQjVxyXG4gICAgfSk7XHJcbiAgICB0aGF0LiRhcHBseSgpO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkKGUpIHtcclxuICAgIGxldCBwbGF5ZXJpZCA9IGUuaWQgfHwgJzUyOTInO1xyXG4gICAgdGhpcy5nZXRQbGF5RGV0YWlsKHBsYXllcmlkKTtcclxuICB9XHJcbn1cclxuIl19