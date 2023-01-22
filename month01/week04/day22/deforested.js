function deforested(num){
    return num.toLocaleString()+'km² desmatados é equivalente a '+parseInt(num*1000000/(105*68)).toLocaleString()+' campos de futebol';
}

console.log(deforested(1034));
console.log(deforested(7536));
console.log(deforested(9762));