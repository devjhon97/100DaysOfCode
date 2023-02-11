function minPages(book){
    let start = book[0]-book[1] > Math.abs(1-book[1]) ? 1 : book[0];
    let index = 0;
    
    while(start !== book[1]){
        if(start < book[1]) start += 1;
        else start -= 1;
        index++;
    }

    return Math.ceil(index/2);
}

module.exports = minPages;