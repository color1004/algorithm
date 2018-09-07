var obj = {
  a:1,
  b:[1,2,3],
  c:{
    d:[
      {k:7},
      {k:8},
    ],
    w:[1,2],
    f:'e',
  },
  g:{
    h: {
      l:'h',
    },
  },
}
// var obj=[1,2,{k:1}]; 最外层的obj考虑是数组的情况
function flattern(obj) {
  var ans = {};
  flat('', obj, ans, '');
  function flat(pkey, obj, ans, ptype) {
    Object.entries(obj).map(([key,val]) => {
      var type = getType(val);
      var kks;
      if(type=='other') {
        ans[getKey(ptype, key, pkey)] = val;
      } else if(ptype=='array') {
        kks = pkey ? (pkey+'['+key+']') : key;
        flat(kks, val, ans, type);
      } else {
        kks = pkey ? (pkey+'.'+key) : key;
        flat(kks, val, ans, type);
      }
    })
  }
  return ans;
}
flattern(obj);

function getKey(ptype, key, pkey) {
  if(ptype=='array') return pkey+'['+key+']';
  if(ptype=='object') return pkey+'.'+key;
  return key;
}
function getType(obj) {
  if (obj === null || (typeof obj !== "object" && typeof obj !== 'function')) { 
    return 'other';   // null 和 普通string boolean number 都处理为 other
  } else if(Array.isArray(obj)) {  //先判断数组
    return 'array';
  } else if(typeof obj == 'function') { // 再判断function 这里不考虑，只考虑数组和对象
    return 'function';
  } else if(typeof obj == 'object' && !(obj instanceof String) && !(obj instanceof Boolean)
            && !(obj instanceof Number) && !(obj instanceof Date) && !(obj instanceof RegExp)) {
    return 'object';
  }
  return 'other'; // Number(1) 也属于这种情况
}
