'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _md = require('./md5.js');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APPKEY = '6fc18957ce391f84a7ce34ce13cd99c4';

/**
 * 将参数+签名的值按照字典排序得到签名sign 参数的值按照升序排列
 * @param {Object} params   参数集合
 */
var getSign = function getSign(params) {
  for (var key in params) {
    if (!params[key]) {
      delete params[key];
    }
  }
  params.appkey = APPKEY;
  var keyArr = Object.keys(params).sort();
  var newObj = {};
  var Kstr = '';
  for (var i in keyArr) {
    newObj[keyArr[i]] = params[keyArr[i]];
    Kstr += params[keyArr[i]];
  }
  delete params['appkey'];
  return (0, _md2.default)(Kstr);
};

/**
 * 验证返回的的code码问题
 * @param {*} resolve
 * @param {*} res 返回的data
 */
var checkCode = function checkCode(resolve, res) {
  if (res.ret === 200) {
    resolve(res);
  } else if (res.ret === 400) {
    wx.showToast({
      title: res.msg,
      icon: 'none',
      duration: 2000,
      mask: true
    });
  } else if (res.ret === 406) {
    wx.showToast({
      title: res.msg,
      icon: 'none',
      duration: 2000,
      mask: true
    });
  }
};

var ajaxApi = function ajaxApi(api, path, params) {
  wx.showLoading({ title: '加载中' });
  params.timestamp = '';
  params.timestamp = new Date().valueOf();
  params.sign = '';
  params.sign = getSign(params);
  return new Promise(function (resolve, reject) {
    wx.request({
      url: '' + api + path,
      data: Object.assign({}, params),
      header: { 'Content-Type': 'json' },
      success: function success(res) {
        console.log(res);
        checkCode(resolve, res.data);
        wx.hideLoading();
      },
      fail: function fail(err) {
        reject(err);
        wx.hideLoading();
      }
    });
  });
};

exports.default = ajaxApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZldGNoLmpzIl0sIm5hbWVzIjpbIkFQUEtFWSIsImdldFNpZ24iLCJrZXkiLCJwYXJhbXMiLCJhcHBrZXkiLCJrZXlBcnIiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsIm5ld09iaiIsIktzdHIiLCJpIiwiY2hlY2tDb2RlIiwicmVzb2x2ZSIsInJlcyIsInJldCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJtc2ciLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwiYWpheEFwaSIsImFwaSIsInBhdGgiLCJzaG93TG9hZGluZyIsInRpbWVzdGFtcCIsIkRhdGUiLCJ2YWx1ZU9mIiwic2lnbiIsIlByb21pc2UiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwiZGF0YSIsImFzc2lnbiIsImhlYWRlciIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiaGlkZUxvYWRpbmciLCJmYWlsIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBTUEsU0FBUyxrQ0FBZjs7QUFFQTs7OztBQUlBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxTQUFVO0FBQ3hCLE9BQUssSUFBSUMsR0FBVCxJQUFnQkMsTUFBaEIsRUFBd0I7QUFDdEIsUUFBSSxDQUFDQSxPQUFPRCxHQUFQLENBQUwsRUFBa0I7QUFDaEIsYUFBT0MsT0FBT0QsR0FBUCxDQUFQO0FBQ0Q7QUFDRjtBQUNEQyxTQUFPQyxNQUFQLEdBQWdCSixNQUFoQjtBQUNBLE1BQUlLLFNBQVNDLE9BQU9DLElBQVAsQ0FBWUosTUFBWixFQUFvQkssSUFBcEIsRUFBYjtBQUNBLE1BQUlDLFNBQVMsRUFBYjtBQUNBLE1BQUlDLE9BQU8sRUFBWDtBQUNBLE9BQUssSUFBSUMsQ0FBVCxJQUFjTixNQUFkLEVBQXNCO0FBQ3BCSSxXQUFPSixPQUFPTSxDQUFQLENBQVAsSUFBb0JSLE9BQU9FLE9BQU9NLENBQVAsQ0FBUCxDQUFwQjtBQUNBRCxZQUFRUCxPQUFPRSxPQUFPTSxDQUFQLENBQVAsQ0FBUjtBQUNEO0FBQ0QsU0FBT1IsT0FBTyxRQUFQLENBQVA7QUFDQSxTQUFPLGtCQUFJTyxJQUFKLENBQVA7QUFDRCxDQWhCRDs7QUFrQkE7Ozs7O0FBS0EsSUFBTUUsWUFBWSxTQUFaQSxTQUFZLENBQUNDLE9BQUQsRUFBVUMsR0FBVixFQUFrQjtBQUNsQyxNQUFJQSxJQUFJQyxHQUFKLEtBQVksR0FBaEIsRUFBcUI7QUFDbkJGLFlBQVFDLEdBQVI7QUFDRCxHQUZELE1BRU8sSUFBSUEsSUFBSUMsR0FBSixLQUFZLEdBQWhCLEVBQXFCO0FBQzFCQyxPQUFHQyxTQUFILENBQWE7QUFDWEMsYUFBT0osSUFBSUssR0FEQTtBQUVYQyxZQUFNLE1BRks7QUFHWEMsZ0JBQVUsSUFIQztBQUlYQyxZQUFNO0FBSkssS0FBYjtBQU1ELEdBUE0sTUFPQSxJQUFJUixJQUFJQyxHQUFKLEtBQVksR0FBaEIsRUFBcUI7QUFDMUJDLE9BQUdDLFNBQUgsQ0FBYTtBQUNYQyxhQUFPSixJQUFJSyxHQURBO0FBRVhDLFlBQU0sTUFGSztBQUdYQyxnQkFBVSxJQUhDO0FBSVhDLFlBQU07QUFKSyxLQUFiO0FBTUQ7QUFDRixDQWxCRDs7QUFvQkEsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLENBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFZdEIsTUFBWixFQUF1QjtBQUNyQ2EsS0FBR1UsV0FBSCxDQUFlLEVBQUVSLE9BQU8sS0FBVCxFQUFmO0FBQ0FmLFNBQU93QixTQUFQLEdBQW1CLEVBQW5CO0FBQ0F4QixTQUFPd0IsU0FBUCxHQUFtQixJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBbkI7QUFDQTFCLFNBQU8yQixJQUFQLEdBQWMsRUFBZDtBQUNBM0IsU0FBTzJCLElBQVAsR0FBYzdCLFFBQVFFLE1BQVIsQ0FBZDtBQUNBLFNBQU8sSUFBSTRCLE9BQUosQ0FBWSxVQUFDbEIsT0FBRCxFQUFVbUIsTUFBVixFQUFxQjtBQUN0Q2hCLE9BQUdpQixPQUFILENBQVc7QUFDVEMsZ0JBQVFWLEdBQVIsR0FBY0MsSUFETDtBQUVUVSxZQUFNN0IsT0FBTzhCLE1BQVAsQ0FBYyxFQUFkLEVBQWtCakMsTUFBbEIsQ0FGRztBQUdUa0MsY0FBUSxFQUFFLGdCQUFnQixNQUFsQixFQUhDO0FBSVRDLGVBQVMsaUJBQVN4QixHQUFULEVBQWM7QUFDckJ5QixnQkFBUUMsR0FBUixDQUFZMUIsR0FBWjtBQUNBRixrQkFBVUMsT0FBVixFQUFtQkMsSUFBSXFCLElBQXZCO0FBQ0FuQixXQUFHeUIsV0FBSDtBQUNELE9BUlE7QUFTVEMsWUFBTSxjQUFTQyxHQUFULEVBQWM7QUFDbEJYLGVBQU9XLEdBQVA7QUFDQTNCLFdBQUd5QixXQUFIO0FBQ0Q7QUFaUSxLQUFYO0FBY0QsR0FmTSxDQUFQO0FBZ0JELENBdEJEOztrQkF3QmVsQixPIiwiZmlsZSI6ImZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1ENSBmcm9tICcuL21kNSc7XHJcbmNvbnN0IEFQUEtFWSA9ICc2ZmMxODk1N2NlMzkxZjg0YTdjZTM0Y2UxM2NkOTljNCc7XHJcblxyXG4vKipcclxuICog5bCG5Y+C5pWwK+etvuWQjeeahOWAvOaMieeFp+Wtl+WFuOaOkuW6j+W+l+WIsOetvuWQjXNpZ24g5Y+C5pWw55qE5YC85oyJ54Wn5Y2H5bqP5o6S5YiXXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgICDlj4LmlbDpm4blkIhcclxuICovXHJcbmNvbnN0IGdldFNpZ24gPSBwYXJhbXMgPT4ge1xyXG4gIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcclxuICAgIGlmICghcGFyYW1zW2tleV0pIHtcclxuICAgICAgZGVsZXRlIHBhcmFtc1trZXldO1xyXG4gICAgfVxyXG4gIH1cclxuICBwYXJhbXMuYXBwa2V5ID0gQVBQS0VZO1xyXG4gIGxldCBrZXlBcnIgPSBPYmplY3Qua2V5cyhwYXJhbXMpLnNvcnQoKTtcclxuICBsZXQgbmV3T2JqID0ge307XHJcbiAgbGV0IEtzdHIgPSAnJztcclxuICBmb3IgKGxldCBpIGluIGtleUFycikge1xyXG4gICAgbmV3T2JqW2tleUFycltpXV0gPSBwYXJhbXNba2V5QXJyW2ldXTtcclxuICAgIEtzdHIgKz0gcGFyYW1zW2tleUFycltpXV07XHJcbiAgfVxyXG4gIGRlbGV0ZSBwYXJhbXNbJ2FwcGtleSddO1xyXG4gIHJldHVybiBNRDUoS3N0cik7XHJcbn07XHJcblxyXG4vKipcclxuICog6aqM6K+B6L+U5Zue55qE55qEY29kZeeggemXrumimFxyXG4gKiBAcGFyYW0geyp9IHJlc29sdmVcclxuICogQHBhcmFtIHsqfSByZXMg6L+U5Zue55qEZGF0YVxyXG4gKi9cclxuY29uc3QgY2hlY2tDb2RlID0gKHJlc29sdmUsIHJlcykgPT4ge1xyXG4gIGlmIChyZXMucmV0ID09PSAyMDApIHtcclxuICAgIHJlc29sdmUocmVzKTtcclxuICB9IGVsc2UgaWYgKHJlcy5yZXQgPT09IDQwMCkge1xyXG4gICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgdGl0bGU6IHJlcy5tc2csXHJcbiAgICAgIGljb246ICdub25lJyxcclxuICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgIG1hc2s6IHRydWVcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAocmVzLnJldCA9PT0gNDA2KSB7XHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogcmVzLm1zZyxcclxuICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgbWFzazogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgYWpheEFwaSA9IChhcGksIHBhdGgsIHBhcmFtcykgPT4ge1xyXG4gIHd4LnNob3dMb2FkaW5nKHsgdGl0bGU6ICfliqDovb3kuK0nIH0pO1xyXG4gIHBhcmFtcy50aW1lc3RhbXAgPSAnJztcclxuICBwYXJhbXMudGltZXN0YW1wID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XHJcbiAgcGFyYW1zLnNpZ24gPSAnJztcclxuICBwYXJhbXMuc2lnbiA9IGdldFNpZ24ocGFyYW1zKTtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYCR7YXBpfSR7cGF0aH1gLFxyXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpLFxyXG4gICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZSc6ICdqc29uJyB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIGNoZWNrQ29kZShyZXNvbHZlLCByZXMuZGF0YSk7XHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhamF4QXBpO1xyXG4iXX0=