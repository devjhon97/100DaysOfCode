function christmasTree(h){
    let hash = 1;
    let tree = ''; 

    while(h > 0){
        tree += ' '.repeat(h-1);
        tree += '#'.repeat(hash);
        tree += ' '.repeat(h-1);
        tree += '\n'
        h--;
        hash += 2;
    }   
    return tree;
}

console.log(christmasTree(1));
console.log(christmasTree(2));
console.log(christmasTree(5));
console.log(christmasTree(0));
console.log(christmasTree(10));
console.log(christmasTree(7));