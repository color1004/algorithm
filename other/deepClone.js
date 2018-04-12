function deepClone(obj) {
  var newObj = new Object();
  var type = checkType(obj);
  switch (type) {
    case 'array':
      for(var key in obj) {
        newObj.push(obj[key]);
      }
      break;
    case 'obj':
      for(var key in obj) {
        newObj[key] = clone(obj[key]);
      }
      break;
    default:
      return obj;
      break;
  }
  return newObj;
}
function checkType(obj) {
  var type
  if(Array.isArray(obj)) {
    return 'array';
  } else if(obj === null) {
    return 'other';
  } else if(typeof obj == 'obj') {
    // if(obj instanceof String) return 'string';
    // if(obj instanceof Boolean) return 'bollean';
    // if(obj instanceof Number) return 'number';
    // 构造函数创建的对象按值传递 （猜的） 不用考虑这种情况  没有上述三个也是对的 Boolean, Number, Date, String, RegExp 都可以通过object方式传值
    return 'obj';
  }
  return 'other'; // 普通string boolean number 都处理为 other  不考虑date、function类型 
}

//简单版
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));  //这种情况下 构造函数创建的对象 会变成普通的 string boolean等
}
