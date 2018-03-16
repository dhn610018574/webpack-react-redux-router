let Common = {
  // 时间戳格式化
  formatDate:function(inputTime,style){
    const date = new Date(inputTime);
    const Y = date.getFullYear() + style;
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + style;
    const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return {
      YMD: Y + M + D,
      YMDhms: Y + M + D + '  ' + h + m + s,
      ymd: Y + '年' + M + '月' + D + '日'
    };
  },
  // 千分位格式化
  comdify:function (n) {
    var re = /\d{1,3}(?=(\d{3})+$)/g;
    var n1 = n.replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) {
      return s1.replace(re, "$&,") + s2;
    });
    return n1;
  },
  // 强制补两位0
  toDecimal2: function (x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
      return false;
    }
    var f = Math.round(x * 100) / 100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
      rs = s.length;
      s += '.';
    }
    while (s.length <= rs + 2) {
      s += '0';
    }
    return s;
  }
}

module.exports = Common;