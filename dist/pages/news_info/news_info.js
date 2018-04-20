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
      docid: '',
      item: [],
      comments: []
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(News_list, [{
    key: 'getNewsInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(docid) {
        var that, params, res, replaceStr, regx;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                params = {
                  docid: docid
                };
                _context.next = 4;
                return (0, _api.news_info)(params);

              case 4:
                res = _context.sent;

                // setData
                that.item = res.data;

                if (that.item && that.item.img.length !== 0) {
                  replaceStr = '<img src=' + that.item.img[0]['src'] + '>';

                  that.item.body = that.item.body.replace('<!--IMG#0-->', replaceStr);
                  regx = /<p>(.*?)<\/p>/g;

                  that.item.body = that.item.body.replace(regx, '<text>$1</text>');
                }
                that.$apply();

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getNewsInfo(_x) {
        return _ref2.apply(this, arguments);
      }

      return getNewsInfo;
    }()
  }, {
    key: 'getNewsComments',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(docid) {
        var that, params, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                params = {
                  docid: docid
                };
                _context2.next = 4;
                return (0, _api.news_comments)(params);

              case 4:
                res = _context2.sent;

                // setData
                that.comments = res.data;
                that.$apply();

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getNewsComments(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getNewsComments;
    }()
  }, {
    key: 'onLoad',
    value: function onLoad(e) {
      this.docid = e.docid || 'D230QPOC0005877U';
      this.getNewsInfo(this.docid);
      this.getNewsComments(this.docid);
    }
  }]);

  return News_list;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(News_list , 'pages/news_info/news_info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3NfaW5mby5qcyJdLCJuYW1lcyI6WyJOZXdzX2xpc3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImRvY2lkIiwiaXRlbSIsImNvbW1lbnRzIiwibWV0aG9kcyIsInRoYXQiLCJwYXJhbXMiLCJyZXMiLCJpbWciLCJsZW5ndGgiLCJyZXBsYWNlU3RyIiwiYm9keSIsInJlcGxhY2UiLCJyZWd4IiwiJGFwcGx5IiwiZSIsImdldE5ld3NJbmZvIiwiZ2V0TmV3c0NvbW1lbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxnQkFBVTtBQUhMLEssUUFNUEMsTyxHQUFVLEU7Ozs7OzsyRkFFUUgsSzs7Ozs7O0FBQ1pJLG9CLEdBQU8sSTtBQUNQQyxzQixHQUFTO0FBQ1hMLHlCQUFPQTtBQURJLGlCOzt1QkFHSyxvQkFBVUssTUFBVixDOzs7QUFBWkMsbUI7O0FBQ047QUFDQUYscUJBQUtILElBQUwsR0FBWUssSUFBSVAsSUFBaEI7O0FBRUEsb0JBQUlLLEtBQUtILElBQUwsSUFBYUcsS0FBS0gsSUFBTCxDQUFVTSxHQUFWLENBQWNDLE1BQWQsS0FBeUIsQ0FBMUMsRUFBNkM7QUFDdkNDLDRCQUR1QyxHQUMxQixjQUFjTCxLQUFLSCxJQUFMLENBQVVNLEdBQVYsQ0FBYyxDQUFkLEVBQWlCLEtBQWpCLENBQWQsR0FBd0MsR0FEZDs7QUFFM0NILHVCQUFLSCxJQUFMLENBQVVTLElBQVYsR0FBaUJOLEtBQUtILElBQUwsQ0FBVVMsSUFBVixDQUFlQyxPQUFmLENBQXVCLGNBQXZCLEVBQXVDRixVQUF2QyxDQUFqQjtBQUNJRyxzQkFIdUMsR0FHaEMsZ0JBSGdDOztBQUkzQ1IsdUJBQUtILElBQUwsQ0FBVVMsSUFBVixHQUFpQk4sS0FBS0gsSUFBTCxDQUFVUyxJQUFWLENBQWVDLE9BQWYsQ0FBdUJDLElBQXZCLEVBQTZCLGlCQUE3QixDQUFqQjtBQUNEO0FBQ0RSLHFCQUFLUyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUdvQmIsSzs7Ozs7O0FBQ2hCSSxvQixHQUFPLEk7QUFDUEMsc0IsR0FBUztBQUNYTCx5QkFBT0E7QUFESSxpQjs7dUJBR0ssd0JBQWNLLE1BQWQsQzs7O0FBQVpDLG1COztBQUNOO0FBQ0FGLHFCQUFLRixRQUFMLEdBQWdCSSxJQUFJUCxJQUFwQjtBQUNBSyxxQkFBS1MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUdLQyxDLEVBQUc7QUFDUixXQUFLZCxLQUFMLEdBQWFjLEVBQUVkLEtBQUYsSUFBVyxrQkFBeEI7QUFDQSxXQUFLZSxXQUFMLENBQWlCLEtBQUtmLEtBQXRCO0FBQ0EsV0FBS2dCLGVBQUwsQ0FBcUIsS0FBS2hCLEtBQTFCO0FBQ0Q7Ozs7RUE5Q29DLGVBQUtpQixJOztrQkFBdkJyQixTIiwiZmlsZSI6Im5ld3NfaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IHsgbmV3c19pbmZvLCBuZXdzX2NvbW1lbnRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3NfbGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ05CQei1hOiurydcclxuICB9O1xyXG5cclxuICBkYXRhID0ge1xyXG4gICAgZG9jaWQ6ICcnLFxyXG4gICAgaXRlbTogW10sXHJcbiAgICBjb21tZW50czogW11cclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge307XHJcblxyXG4gIGFzeW5jIGdldE5ld3NJbmZvKGRvY2lkKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICBkb2NpZDogZG9jaWRcclxuICAgIH07XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBuZXdzX2luZm8ocGFyYW1zKTtcclxuICAgIC8vIHNldERhdGFcclxuICAgIHRoYXQuaXRlbSA9IHJlcy5kYXRhO1xyXG5cclxuICAgIGlmICh0aGF0Lml0ZW0gJiYgdGhhdC5pdGVtLmltZy5sZW5ndGggIT09IDApIHtcclxuICAgICAgbGV0IHJlcGxhY2VTdHIgPSAnPGltZyBzcmM9JyArIHRoYXQuaXRlbS5pbWdbMF1bJ3NyYyddICsgJz4nO1xyXG4gICAgICB0aGF0Lml0ZW0uYm9keSA9IHRoYXQuaXRlbS5ib2R5LnJlcGxhY2UoJzwhLS1JTUcjMC0tPicsIHJlcGxhY2VTdHIpO1xyXG4gICAgICBsZXQgcmVneCA9IC88cD4oLio/KTxcXC9wPi9nO1xyXG4gICAgICB0aGF0Lml0ZW0uYm9keSA9IHRoYXQuaXRlbS5ib2R5LnJlcGxhY2UocmVneCwgJzx0ZXh0PiQxPC90ZXh0PicpO1xyXG4gICAgfVxyXG4gICAgdGhhdC4kYXBwbHkoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldE5ld3NDb21tZW50cyhkb2NpZCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgZG9jaWQ6IGRvY2lkXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgbmV3c19jb21tZW50cyhwYXJhbXMpO1xyXG4gICAgLy8gc2V0RGF0YVxyXG4gICAgdGhhdC5jb21tZW50cyA9IHJlcy5kYXRhO1xyXG4gICAgdGhhdC4kYXBwbHkoKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZChlKSB7XHJcbiAgICB0aGlzLmRvY2lkID0gZS5kb2NpZCB8fCAnRDIzMFFQT0MwMDA1ODc3VSc7XHJcbiAgICB0aGlzLmdldE5ld3NJbmZvKHRoaXMuZG9jaWQpO1xyXG4gICAgdGhpcy5nZXROZXdzQ29tbWVudHModGhpcy5kb2NpZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==