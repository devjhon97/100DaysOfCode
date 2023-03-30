function newYear(hour, minute){
    return hour == 23 ? 60-minute : ((23-hour)*60)+60-minute;
}

module.exports = newYear;
