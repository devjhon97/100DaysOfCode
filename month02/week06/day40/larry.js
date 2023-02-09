function larry(arr){
    let inc = 0;
    let value = 1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == value){
            value++;
            continue;
        }
        
        if(arr[i] == value || arr[i+1] == value || arr[i+2] == value){
            while(arr[i] !== value){
                arr.splice(i+3,0,arr[i]);
                arr.splice(i,1);
            }
            i -= inc+1;
            inc = 0;
        }else inc++;
    }
    console.log(arr);
    return true;
}

console.log(larry([1, 6, 5, 2, 4, 3]));
console.log(larry([6,2,10,3,7,1,5,8,4,9]));
console.log(larry([11,29,20,9,4,18,2,28,13,6,22,12,15,1,27,14,30,3,23,19,8,25,10,16,5,24,17,21,7,26]));