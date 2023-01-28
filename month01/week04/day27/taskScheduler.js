function task(arr,int){
    let newArr = [];

    while(arr.length > 0){
        newArr.push(arr[0]);
        arr.shift();
        arr.reverse();
    }

    return newArr.length+int;
}

console.log(task(['A','A','A','B','B','B'],2));
console.log(task(['A','A','A','B','B','B'],0));
console.log(task(["A","A","A","A","A","A","B","C","D","E","F","G"],2));