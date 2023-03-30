function newYear(hour, minute){
    return ((23-hour)*60)+60-minute;
}

module.exports = newYear;
