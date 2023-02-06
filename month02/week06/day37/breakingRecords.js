function breakingRecords(scores){
    let records = [[scores[0]],[scores[0]]];
    
    scores.map(value => value > records[0][records[0].length-1] ? records[0].push(value) : null);
    scores.map(value => value < records[1][records[1].length-1] ? records[1].push(value) : null);

    return [records[0].length-1,records[1].length-1];
}

module.exports = breakingRecords;