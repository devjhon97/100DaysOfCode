function lightOn(rooms){
    let hours = 0;

    for(let hour = 0; hour < 23; hour++){
        let thisHour = hours;

        for(let room of rooms){
            if(room[0] < room[1] && room[0] === hour){
                room[0]++;
                hours = hours === thisHour ? hours += 1 : hours;
            }
        }
    }

    return hours;
}

module.exports = lightOn;