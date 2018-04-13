//无法比较 函数 和构造类型的基本数据
function deepCompare(o1, o2) {  
    //标识是否相似  
    var flag = true;  
      
    var traverse = function(o1,o2){  
        //如果至少有一个不是对象  
        if(!(o1 instanceof Object) || !(o2 instanceof Object)){  
            if(o1 !== o2){  
                flag = false;  
            }  
            return;  
        }  
        //如果两个对象的属性数量不一致  
        //比如：  
        //a:{name:"Jack",age:22}  
        //b:{name:"Jack"}  
        if(Object.keys(o1).length != Object.keys(o2).length){  
            flag = false;  
        }  
        //若有不同之处，尽早结束递归  
        if(flag){  
            //深度遍历对象  
            for(var i in o1){  
                //若都是对象，继续递归  
                if(typeof o1[i] === "object" && typeof o2[i] === "object"){  
                    traverse(o1[i],o2[i]);  
                }//若都不是对象，则比较值  
                else if(typeof o1[i] !== "object" && typeof o2[i] !== "object"){  
                    if(o1[i] !== o2[i]){  
                        flag = false;;  
                    }  
                }//一个是对象，一个不是对象，肯定不相似  
                else{  
                    flag = false;  
                }  
            }  
        }  
    };  
      
    traverse(o1,o2);  
      
    return flag;  
};  
