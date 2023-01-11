function binaryTree(num) {
    if (num <= 1) return 1;
    var res = 0;
    for (let index = 1; index <= num; index++) {
        res += binaryTree(index - 1) * binaryTree(num - index);
    }
    return res;
}

module.exports = binaryTree;