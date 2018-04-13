//简单版
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));  //这种情况下 构造函数创建的对象 会变成普通的 string boolean等
}

//原版
function deepClone(obj) {
  var newObj;
  var type = checkType(obj);
  switch (type) {
    case 'array':
      newObj = new Array();
      for(var key in obj) {
        newObj.push(deepClone(obj[key]));
      }
      break;
    case 'function':
      newObj = new Function("return " + obj.toString())();  //return new Function("return " + obj.toString())(); 
      break;
    case 'object':
      newObj = new Object();
      for(var key in obj) {
        newObj[key] = deepClone(obj[key]);
      }
      break;
    default:
      newObj = obj;
      break;
  }
  return newObj;
}

function checkType(obj) {
  var type
  if (obj === null || (typeof obj !== "object" && typeof obj !== 'function')) { 
    return 'other';   // null 和 普通string boolean number 都处理为 other
  } else if(Array.isArray(obj)) {  //array也是object，需要在判断object前面
    return 'array';
  } else if(typeof obj == 'function') {
    return 'function';
  } else if(typeof obj == 'object' && !(obj instanceof String) && !(obj instanceof Boolean)
            && !(obj instanceof Number) && !(obj instanceof Date) && !(obj instanceof RegExp)) {
    // if(obj instanceof String) return 'string';
    // if(obj instanceof Boolean) return 'bollean';
    // if(obj instanceof Number) return 'number';
    // if(obj instanceof Date) return 'Date';
    // if(obj instanceof RegExp) return 'RegExp';
    return 'object';
  }
  return 'other'; // 我认为 构造函数创建的对象都是new一个对象，不会产生按引用传递的情况 不用考虑这种情况 应该是按值传递的 所以用直接赋值处理
}

const adder = new Function("a", "b", "return a + b"); //前面的参数为 函数的参数（非必填），最后一个为函数体
// 调用函数
adder(2, 6);
//  8
