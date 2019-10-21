var common = {
  selfUnique: function (arr, key) {
    var result = [];
    var obj = {};
    var len = arr.length;
    for(var i = 0; i < len; i++) {
      if(!obj[arr[i][key]]) {
        result.push(arr[i]);
        obj[arr[i][key]] = true;
      }
    }
    return result;
  },
  sortId: function (a, b) {
    return a.id-b.id
  }
};
