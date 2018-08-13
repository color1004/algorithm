function preOrder(head) {
    if(!head) return;
    var stack = [];
    var node = head;
    while(node || stack.length>0) {
        if(node) {
            console.log(node.value);
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            node = node.right;
        }
    }
}

function inOrder(head) {
    if(!head) return;
    var stack = [];
    var node = head;
    while(node || stack.length>0) {
        if(node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            console.log(node.value);
            node = node.right;
        }
    }
}

// 根结点要最后访问，需要知道回溯是来自左孩子还是右孩子，因此需要记录上一次访问的结点(last)。
function postOrder(head) {
    if(!head) return;
    var stack = [];
    var node = head;
    var last = null;
    while(node || stack.length>0) {
        if(node) { // 向左走到尽头
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            stack.push(node); // stack.peek() 只获取栈顶元素 不删除该元素
            if(node.right != null && node.right != last) { // 有右孩子 且上次访问节点不是右孩子 即 右孩子未访问过
                node = node.right;// 向右走一步
                stack.push(node);
                node = node.left;// 向左走到尽头
            } else {// 访问结点 没有右孩子  或者右孩子已被访问，回溯来自右孩子
                node = stack.pop();
                console.log(node.value);
                last = node;
                node = null;// 置为空，强制去探索右孩子 强制走else右侧
            }
        }
    }
}

function levelOrder(head) {
    if(!node) return;
    var queue = [];
    queue.push(head);
    var node;
    while(queue.length>0) {
        node = queue.shift();
        console.log(node.value);
        if(queue.left) queue.push(queue.left);
        if(queue.right) queue.push(queue.right);
    }
}
