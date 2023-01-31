const time = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','half'];

function timeInWords(h,m){
    let hour = '';
    let minute = m === 1 ? ' minute' : ' minutes';
    if(h == 12 && m == 0b00){
        hour += 'noon';
        return hour;
    }
    if(time[h]){
        if(m == 0b00) hour += time[h]+" o'clock";
        if(m > 0 && m <= 20){
            if(m == 15){
                hour += 'quarter past '+time[h];
                return hour;
            }
            hour += time[m]+minute+" past "+time[h];
        }
        let vh = h == 11 ? 'noon' : time[h+1];

        if(m > 20 && m < 30) hour += `${time[20]} ${time[m-20]} ${minute} past ${vh}`;
        if(m == 30) hour += 'half past '+time[h];
        
        if(m > 30 && m <= 40) hour += `${time[20]} ${time[40-m]}${minute} to `+vh;

        if(m > 40 && m < 60){
            if(m == 45){
                hour += 'quarter to '+vh;
                return hour;
            }
            hour += time[60-m]+minute+' to '+vh;
        }

    }

    return hour;
}

module.exports = timeInWords;